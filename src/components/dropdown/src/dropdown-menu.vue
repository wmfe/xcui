<template>
    <transition :name="transitionName">
        <ul class="x-dropdown-menu" v-show="showPopper">
            <slot></slot>
        </ul>
    </transition>
</template>

<script>
import Popper from 'xcui/src/utils/vue-popper';

export default {
    name: 'x-dropdown-menu',
    componentName: 'x-dropdown-menu',
    mixins: [Popper],
    computed: {
        transitionName() {
            return this.$parent.align.indexOf('bottom') >= 0 ? 'x-slide-up' : 'x-slide-down';
        }
    },
    watch: {
        '$parent.align': {
            immediate: true,
            handler(val) {
                this.currentPlacement = `bottom-${val}`;
            }
        }
    },
    created() {
        this.$on('updatePopper', () => {
            this.showPopper && this.updatePopper();
        });
        this.$on('visible', val => {
            this.showPopper = val;
        });
        this.$on('item-click', val => {
            this.$emit('click', val);
        })
    },
    mounted() {
        this.$parent.popperElm = this.popperElm = this.$el;
        this.referenceElm = this.$parent.$el;
        this.currentPlacement = this.$parent.align;
    }
}
</script>

