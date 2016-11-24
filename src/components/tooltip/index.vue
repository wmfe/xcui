<template>
    <div ref="outer" style="position:relative; display: inline-block" class="xcui-tooltip">
         <span ref="trigger">
            <slot>
            </slot>
        </span>
        <transition :name="effect" v-on:after-enter="afterEnter">
            <div class="tooltip"
                v-bind:class="{
                    'top':    placement === 'top',
                    'left':   placement === 'left',
                    'right':  placement === 'right',
                    'bottom': placement === 'bottom'
                }"
                ref="popover"
                v-show="show"
                :transition="effect"
                role="tooltip">
                    <div class="tooltip-arrow"></div>
                    <div class="tooltip-inner" :class="tooltipClass">
                        <slot name="content">
                            <div v-html="content"></div>
                        </slot>
                    </div>
            </div>
        </transition>
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
        },
        methods: {
            afterEnter() {
                this.$refs.popover.style.display = 'inline-table';
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