<template>
    <div v-el:outer style="position:relative; display: inline-block" class="xcui-popover">
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
                  <template v-html="title"></template>
                </slot>
            </div>
            <div class="popover-content" :class="contentClass">
              <slot name="content">
                  <template v-html="content"></template>
              </slot>
            </div>
        </div>
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
    }
};
</script>

<style lang="less">
.xcui-popover {
    @import '../../styles/popover.less';
}

</style>
