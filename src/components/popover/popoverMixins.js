/**
 * @file PopoverMixin pass event param for eventlistener
 */

import EventListener from '../../utils/eventlistener';

export default {
    'props': {
        'trigger': {
            'type': String,
            'default': 'click'
        },
        'effect': {
            'type': String,
            'default': 'fadein'
        },
        'title': {
            'type': String
        },
        'content': {
            'type': String
        },
        'placement': {
            'type': String
        }
    },
    data() {
        return {
            'position': {
                'top': 0,
                'left': 0
            },
            'show': true
        };
    },
    methods: {
        toggle() {
            this.show = !this.show;
        },
        fixPosition(triger, popover, placement) {
            popover.style.display = '';
            switch (placement) {
                case 'top':
                    this.position.left = triger.offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2;
                    this.position.top = triger.offsetTop - popover.offsetHeight;
                    break;
                case 'left':
                    this.position.left = triger.offsetLeft - popover.offsetWidth;
                    this.position.top = triger.offsetTop + triger.offsetHeight / 2 - popover.offsetHeight / 2;
                    break;
                case 'right':
                    this.position.left = triger.offsetLeft + triger.offsetWidth;
                    this.position.top = triger.offsetTop + triger.offsetHeight / 2 - popover.offsetHeight / 2;
                    break;
                case 'bottom':
                    this.position.left = triger.offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2;
                    this.position.top = triger.offsetTop + triger.offsetHeight;
                    break;
                default:
            }
            popover.style.top = this.position.top + 'px';
            popover.style.left = this.position.left + 'px';
            popover.style.display = 'none';
            this.show = !this.show;
        }
    },
    ready() {
        const triger = this.$els.trigger.children[0];
        let me = this;
        if (this.trigger === 'hover') {
            this._mouseenterEvent = EventListener.listen(triger, 'mouseenter', function () {
                me.fixPosition(me.$els.trigger.children[0], me.$els.popover, me.placement);
                me.show = true;
            });
            this._mouseleaveEvent = EventListener.listen(triger, 'mouseleave', function () {
                me.show = false;
            });
        }
        else if (this.trigger === 'focus') {
            this._focusEvent = EventListener.listen(triger, 'focus', function () {
                me.fixPosition(me.$els.trigger.children[0], me.$els.popover, me.placement);
                me.show = true;
            });
            this._blurEvent = EventListener.listen(triger, 'blur', function () {
                me.show = false;
            });
        }
        else {
            this._clickEvent = EventListener.listen(triger, 'click', function () {
                me.fixPosition(me.$els.trigger.children[0], me.$els.popover, me.placement);
                me.toggle;
            });
        }

        this.fixPosition(this.$els.trigger.children[0], this.$els.popover, this.placement);
    },
    beforeDestroy() {
        if (this._blurEvent) {
            this._blurEvent.remove();
            this._focusEvent.remove();
        }
        if (this._mouseenterEvent) {
            this._mouseenterEvent.remove();
            this._mouseleaveEvent.remove();
        }
        if (this._clickEvent) {
            this._clickEvent.remove();
        }
    }
};
