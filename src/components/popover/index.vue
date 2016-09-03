<template>
    <div v-el:outer style="position:relative; display: inline-block" v-if="type == 'tooltip'">
         <span v-el:trigger>
            <slot>
            </slot>
        </span>
        <div class="tooltip"
            v-bind:class="{
                'top':    placement === 'top',
                'left':   placement === 'left',
                'right':  placement === 'right',
                'bottom': placement === 'bottom'
            }"
            v-el:popover
            v-show="show"
            :transition="effect"
            role="tooltip">
                <div class="tooltip-arrow"></div>
                <div class="tooltip-inner" :class="tooltipClass">
                    <slot name="content">
                        {{{content}}}
                    </slot>
                </div>
        </div>
    </div>
    <div v-el:outer style="position:relative; display: inline-block"  v-else>
        <span v-el:trigger>
          <slot>
          </slot>
        </span>
        <div class="popover"
          v-bind:class="{
          'top':placement === 'top',
          'left':placement === 'left',
          'right':placement === 'right',
          'bottom':placement === 'bottom'
          }"
          v-el:popover
          v-show="show"
          :transition="effect">
            <div class="arrow"></div>
            <div class="popover-title" :class="titleClass" v-show="title">
                <slot name="title">
                  {{title}}
                </slot>
            </div>
            <div class="popover-content" :class="contentClass">
              <slot name="content">
                  {{{content}}}
              </slot>
            </div>
        </div>
    </div>
</template>

<script>
import PopoverMixin from './popoverMixins.js';
export default {
    mixins: [PopoverMixin],
    props: {
        type: {
            type: String,
            default: 'popover'
        },
        trigger: {
            type: String,
            default: 'hover'
        },
        effect: {
            type: String,
            default: 'scale'
        },
        tooltipClass: {
            type: String,
            default: ''
        },
        titleClass: {
            type: String,
            default: 'scale'
        },
        contentClass: {
            type: String,
            default: 'scale'
        }
    },
    data() {
        return {
        };
    },
    methods: {
    },
    ready() {
    }
};
</script>

<style>
.tooltip {
        opacity: .9
}
.scale-transition, .fadein-transition {
    display: block;
}
.fadein-enter {
    animation:fadein-in 0.3s ease-in;
}
.fadein-leave {
    animation:fadein-out 0.3s ease-out;
}
.scale-enter {
    animation:scale-in 0.15s ease-in;
}
.scale-leave {
    animation:scale-out 0.15s ease-out;
}

@keyframes fadein-in {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
@keyframes fadein-out {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

@keyframes scale-in {
    0% {
        transform: scale(0);
        opacity: 0;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}
@keyframes scale-out {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    100% {
        transform: scale(0);
        opacity: 0;
    }
}
</style>
