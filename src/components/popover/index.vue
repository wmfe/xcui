<template>
    <div ref="outer" style="position:relative; display: inline-block" class="xcui-popover">
        <span ref="trigger">
          <slot>
          </slot>
        </span>
        <transition :name="effect" v-on:after-enter="afterEnter">
          <div class="popover"
            v-bind:class="{
            'top':placement === 'top',
            'left':placement === 'left',
            'right':placement === 'right',
            'bottom':placement === 'bottom'
            }"
            ref="popover"
            v-show="show">
              <div class="arrow"></div>
              <div class="popover-title" :class="titleClass" v-show="title">
                  <slot name="title">
                    <div v-html="title"></div>
                  </slot>
              </div>
              <div class="popover-content" :class="contentClass">
                <slot name="content">
                    <div v-html="content"></div>
                </slot>
              </div>
          </div>
        </transition>
    </div>
</template>

<script>
import PopoverMixin from './popoverMixins.js';
export default {
    name: 'xcui-popover',
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
.xcui-popover {
    @import '../../styles/popover.less';
}

</style>
