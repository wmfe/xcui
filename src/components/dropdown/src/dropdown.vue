<script>
    import Emitter from 'xcui/src/utils/mixins/emitter';
    import Clickoutside from 'xcui/src/utils/clickoutside';
    import XButton from 'xcui/src/components/button';
    import XButtonGroup from 'xcui/src/components/button-group';
    import { on, off } from 'xcui/src/utils/dom';

    export default {
        name: 'x-dropdown',
        componentName: 'x-dropdown',
        components: {
            XButton,
            XButtonGroup
        },
        directives: {Clickoutside},
        mixins: [Emitter],
        props: {
            type: String,
            trigger: {
                type: String,
                default: 'hover'
            },
            size: String,
            disabled: Boolean,
            mode: {
                type: String,
                default: 'link'
            },
            hideOnClick: {
                type: Boolean,
                default: true
            },
            align: {
                type: String,
                default: 'bottom-end',
                validator(value) {
                    return ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end'].indexOf(value) >= 0;
                }
            }
        },
        data() {
            return {
                visible: false,
            }
        },
        computed: {
            iconName() {
                return this.align.indexOf('bottom') >= 0 ? 'arrow-down-b' : 'arrow-up-b';
            }
        },
        watch: {
            visible(val) {
                this.broadcast('x-dropdown-menu', 'visible', val);
            }
        },
        methods: {
            handleClick() {
                if (this.disabled) return;
                if (this.mode === 'split-button') {
                    this.$emit('click');
                }
                else {
                    this.visible = !this.visible;
                }
            },
            hideDropdown() {
                if (this.disabled) return;
                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.visible = false;
                }, 100);
            },
            showDropdown() {
                if (this.disabled) return;
                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.visible = true;
                }, 200);
            },
            handleDropdownItemClick(itemKey) {
                if (this.hideOnClick) {
                    this.visible = false;
                }
                this.broadcast('x-dropdown-menu', 'item-click', itemKey);
            },
            bindTrigger() {
                let {mode, type, size, handleClick, showDropdown, hideDropdown} = this;
                let triggerElm;
                if (this.$slots.custom) {
                    triggerElm = this.$slots.custom[0].elm;
                }
                else if (['button', 'link', 'split-button'].indexOf(mode) >= 0) {
                    triggerElm =  this.$refs.trigger.$el || this.$refs.trigger;
                }
                if (!triggerElm) {
                    return;
                }

                let dropdownElm = this.$slots.dropdown[0].elm;
                on(dropdownElm, 'mouseenter', showDropdown);
                on(dropdownElm, 'mouseleave', hideDropdown);

                if (this.trigger === 'hover') {
                    on(triggerElm, 'mouseenter', showDropdown);
                    on(triggerElm, 'mouseleave', hideDropdown);
                }
                else if (this.trigger === 'click') {
                    on(triggerElm, 'click', handleClick);
                }
            }
        },
        mounted() {
            this.$on('x-dropdown-item-click', this.handleDropdownItemClick);
            this.bindTrigger();
        },
        render(h) {
            // mode: button / link / split-button
            // slot: dropdown / (default)text / custom
            // priority: custom => mode set & default text
            let { mode, type, size, handleClick, hideDropdown, iconName, disabled } = this;
            let triggerElm;
            if (this.$slots.custom) {
                triggerElm = this.$slots.custom;
            }
            else if (['button', 'link', 'split-button'].indexOf(mode) >= 0) {
                switch(mode) {
                    case 'link':
                        triggerElm = (
                            <span class={`x-dropdown-link x-dropdown-link-${type} ` + (disabled ? `x-dropdown-link-disabled` : '')}  ref="trigger">
                                { this.$slots.default }
                                <i class={`x-icon x-icon-${iconName}`}></i>
                            </span>
                        );
                        break;
                    case 'button':
                        triggerElm = (
                           <x-button type={type} size={size} disabled={disabled} ref="trigger">
                               {this.$slots.default}
                                <i class={`x-icon x-icon-${iconName}`}></i>
                           </x-button>
                        )
                        break;
                    case 'split-button':
                        triggerElm = (
                            <x-button-group>
                                <x-button type={type} size={size} disabled={disabled} nativeOnClick={handleClick}>
                                    {this.$slots.default}
                                </x-button>
                                <x-button ref="trigger" type={type} size={size} icon={iconName} disabled={disabled}  class="x-dropdown-button-arrow">
                                </x-button>
                            </x-button-group>
                        );
                        break;
                    default:
                        break;
                }
            }
            return (
                <div class="x-dropdown" v-clickoutside={hideDropdown}>
                    {triggerElm}
                    {this.$slots.dropdown}
                </div>
            );
        }
    };
</script>
