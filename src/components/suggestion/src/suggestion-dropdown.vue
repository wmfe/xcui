<template>
    <transition name="slide-up" @after-leave="doDestroy">
        <div class="x-suggestion-dropdown"
            v-show="showPopper"
            :style="{width: dropdownWidth}">
            <ul class="x-suggestion-list" ref="sugList">
                <li v-for="(item,index) in suggestions" class="x-suggestion-item" :class="{'active' : $parent.currentIndex==index}" @click="setItem(item)">
                    {{item.text}}
                </li>
            </ul>
        </div>
    </transition>
</template>

<script>
    import Popper from '../../../utils/vue-popper';
    import Emitter from '../../../utils/mixins/emitter';

    export default {
        name: 'xSuggestionDropdown',
        componentName: 'xSuggestionDropdown',
        mixins: [Popper, Emitter],
        props: {
            suggestions: Array,
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
                showPopper: false
            };
        },
        methods: {
            setItem(item) {
                this.dispatch('xSuggestion', 'item-click', item);
            }
        },
        created() {
            this.$on('visible', (val, inputWidth) => {
                this.dropdownWidth = inputWidth + 'px';
                this.showPopper = val;
            });
        },
        mounted() {
            this.referenceElm = this.$parent.$refs.xInput.$refs.input;
            this.popperElm = this.$el;
        },
        updated() {
            this.$nextTick(() => {
                this.updatePopper();
            });
        }
    };
</script>
