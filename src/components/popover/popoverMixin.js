import Popper from '../../utils/vue-popper';
import {on, off} from '../../utils/dom';

export default {
    name: 'XTooltip',
    mixins: [Popper],
    props: {
        content: String,
        reference: {},
        popperClass: String,
        width: [String, Number],
        trigger: {
            type: String,
            default: 'hover',
            validator(val) {
                return ['click', 'hover', 'focus'].indexOf(val) > -1;
            }
        },
        visibleArrow: {
            default: true
        },
        transition: {
            type: String
        },
        openDelay: {
            type: Number,
            default: 200
        },
        popperOptions: {
            type: Object,
            default() {
                return {
                    boundariesPadding: 10,
                    gpuAcceleration: false
                };
            }
        }
    },
    data() {
        return {
            timer: null
        };
    },
    computed: {
        ref() {
            let result = this.reference || this.$refs.reference;
            if (!result && this.$slots.default && this.$slots.default[0]) {
                for (let i = 0, length = this.$slots.default.length; i < length; i++) {
                    const vNode = this.$slots.default[i];
                    if (vNode.tag) {
                        result = this.referenceElm = this.$slots.default[i].elm;
                        break;
                    }
                }
            }
            return result;
        }
    },
    methods: {
        handleMouseEnter() {
            this.showPopper = true;
            clearTimeout(this.timer);
        },
        handleMouseLeave() {
            this.timer = setTimeout(() => {
                this.showPopper = false;
            }, this.openDelay);
        },
        handleDocumentClick(e) {
            const popper = this.$refs.popper;

            if (!this.$el || !this.ref || this.$el.contains(e.target)
                || this.ref.contains(e.target) || !popper || popper.contains(e.target)) {
                return;
            }
            this.showPopper = false;
        }
    },
    mounted() {
        const popper = this.$refs.popper;
        switch (this.trigger) {
            case 'hover':
                on(this.ref, 'mouseenter', this.handleMouseEnter);
                on(popper, 'mouseenter', this.handleMouseEnter);
                on(this.ref, 'mouseleave', this.handleMouseLeave);
                on(popper, 'mouseleave', this.handleMouseLeave);
                break;
            case 'click':
                on(this.ref, 'click', () => {
                    this.showPopper = !this.showPopper;
                });
                on(document, 'click', this.handleDocumentClick);
                break;
            case 'focus':
                let found = false;
                if ([].slice.call(this.ref.children).length) {
                    const children = this.ref.childNodes;
                    const len = children.length;
                    for (let i = 0; i < len; i++) {
                        if (children[i].nodeName === 'INPUT'
                           || children[i].nodeName === 'TEXTAREA') {
                            on(children[i], 'focus', () => {
                                this.showPopper = true;
                            });
                            on(children[i], 'blur', () => {
                                this.showPopper = false;
                            });
                            found = true;
                            break;
                        }
                    }
                }
                if (found) {
                    return;
                }
                if (this.ref.nodeName === 'INPUT'
                    || this.ref.nodeName === 'TEXTAREA') {
                    on(this.ref, 'focus', () => {
                        this.showPopper = true;
                    });
                    on(this.ref, 'blur', () => {
                        this.showPopper = false;
                    });
                }
                else {
                    on(this.ref, 'mousedown', () => {
                        this.showPopper = true;
                    });
                    on(this.ref, 'mouseup', () => {
                        this.showPopper = false;
                    });
                }
        }
    },
    destroyed() {
        const ref = this.ref;
        off(ref, 'mouseup');
        off(ref, 'mousedown');
        off(ref, 'focus');
        off(ref, 'blur');
        off(ref, 'mouseleave');
        off(ref, 'mouseenter');
        off(document, 'click', this.handleDocumentClick);
    }
};
