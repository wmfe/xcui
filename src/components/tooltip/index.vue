<template>
    <div v-el:outer style="position:relative; display: inline-block" class="xcui-tooltip">
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
                        <template v-html="content"></template>
                    </slot>
                </div>
        </div>
    </div>
</template>

<script>
    import PopoverMixin from '../popover/popoverMixins.js';
    export default {
        name: 'xcui-tooltip',
        mixins: [PopoverMixin],
        props: {
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
        }
    };
</script>

<style lang="less">
.xcui-tooltip{
    .tooltip {
        opacity: .9;
    }
    @import '../../styles/popover.less';
}

</style>