<template>
    <div class="x-select-dropdown"
        :class="[{ 'is-multiple': $parent.multiple }]"
        :style="{ minWidth: minWidth }">
        <slot></slot>
    </div>
</template>

<script>
    import Popper from '../../utils/vue-popper';
    import Emitter from '../../utils/mixins/emitter';

    export default {
        name: 'xSelectDropdown',
        componentName: 'xSelectDropdown',
        mixins: [Popper, Emitter],
        props: {
            placement: {
                default: 'bottom-start'
            },
            boundariesPadding: {
                default: 0
            },
            popperOptions: {
                default() {
                    return {
                        forceAbsolute: true,
                        gpuAcceleration: false
                    };
                }
            }
        },
        data() {
            return {
                minWidth: ''
            };
        },
        watch: {
            '$parent.inputWidth'() {
                this.minWidth = this.$parent.$el.getBoundingClientRect().width + 'px';
            }
        },
        mounted() {
            this.referenceElm = this.$parent.$refs.reference.$el;
            this.$parent.popperElm = this.popperElm = this.$el;
            this.$on('updatePopper', this.updatePopper);
            this.$on('destroyPopper', this.destroyPopper);
        }
    };
</script>
