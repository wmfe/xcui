<template>
    <transition name="x-slide-up" @after-leave="doDestroy">
        <div class="x-suggestion-dropdown"
            v-show="showPopper"
            :style="{width: dropdownWidth}"
        >
            <ul class="x-suggestion-list" ref="sugList">
                <li v-for="(item,index) in list" class="x-suggestion-item" :class="{'active' : $parent.currentIndex==index}" @click="setItem(item)">
                    {{item.nomatch ? '未匹配:' : item.text}}
                    <span v-if="item.nomatch" class="x-suggestion-nomatch">{{item.text}}</span>
                </li>
            </ul>
        </div>
    </transition>
</template>

<script>
    import Popper from 'xcui/src/utils/vue-popper';
    import Emitter from 'xcui/src/utils/mixins/emitter';

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
                showPopper: false,
                dropdownWidth: null,
                list: [],
            };
        },
        mounted() {
            this.referenceElm = this.$parent.$refs.xInput.$refs.input;
            this.popperElm = this.$el;
        },
        updated() {
            this.$nextTick(() => {
                this.updatePopper();
            });
        },
        methods: {
            setItem(item) {
                this.dispatch('xSuggestion', 'item-click', item);
            },
            handleShow(flag, inputWidth) {
                this.showPopper = flag;
                this.dropdownWidth = inputWidth + 'px';
            }
        },
        watch: {
            suggestions(val) {
                this.list = val;
            }
        }
    };
</script>
