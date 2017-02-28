<template>
    <div class="x-suggestion">
        <x-input
            ref="xInput"
            :disabled="disabled"
            :placeholder="placeholder"
            v-model="dataText"
            @change="handleChange"
            @focus="handleFocus"
            @blur="handleBlur"
            @keydown.up.native.prevent="changeCurrent(-1)"
            @keydown.down.native.prevent="changeCurrent(1)"
            @keyup.enter.stop.native="handleEnter()"
            :icon="icon"
            :icon-click="iconClick"></x-input>
        <transition name="slide-up" @after-leave="doDestroy">
            <div class="x-suggestion-list-wrap" v-show="sugVisible" ref="wrap" :style="{ width: dropdownWidth }">
                <ul class="x-suggestion-list" ref="sugList">
                    <li v-for="(item,index) in list" :class="{'active' : currentIndex==index}" @click="setItem(item)">
                        {{item.text}}
                    </li>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script>
    import xInput from '../input';
    import Popper from '../../utils/vue-popper';
    export default {
        name: 'x-suggestion',
        mixins: [Popper],
        components: {
            xInput
        },
        data() {
            return {
                list: [],
                localList: [],
                currentIndex: -1,
                dataText: '',
                dataValue: '',
                isFocus: false,
                icon: '',
                iconClick: function () {}
            };
        },
        props: {
            id: {
                type: String,
                default: ''
            },
            disabled: {
                type: Boolean,
                default: false
            },
            placeholder: {
                type: String,
                default: ''
            },
            suggestions: {
                type: Array,
                default() {
                    return [];
                }
            },
            inputCallback: {
                type: Function,
                default() {
                    return () => {};
                }
            },
            // v-model使用
            value: {
                type: Object,
                default() {
                    return {
                        text: '',
                        value: ''
                    };
                }
            },
            allowClear: {
                type: Boolean,
                default: true
            }
        },
        computed: {
            sugVisible() {
                const sug = this.list;
                const isValid = Array.isArray(sug) && sug.length > 0;
                return isValid && this.isFocus;
            }
        },
        
        watch: {
            suggestions() {
                this.arrangeLocalList();
                this.getLocalSug();
            },
            allowClear(val) {
                if (val) {
                    this.handleClearBtn();
                }
                else {
                    this.icon = '';
                    this.iconClick = () => {};
                }
            }
        },
        methods: {
            handleClearBtn() {
                this.icon = 'android-close';
                this.iconClick = () => {
                    this.clearText();
                };
            },
            handleChange() {
                this.emitChange();
                this.getLocalSug();
                this.inputCallback && this.inputCallback();
            },
            handleFocus() {
                this.isFocus = true;
                this.getLocalSug();
            },
            handleBlur() {
                setTimeout(() => {
                    this.isFocus = false;
                }, 100);
            },
            clearList() {
                this.currentIndex = -1;
                this.list = [];
            },
            changeCurrent(offset) {
                let moveIndex = this.currentIndex + offset;
                if (offset > 0 && moveIndex >= this.list.length) {
                    moveIndex -= offset;
                }
                else if (offset < 0 && moveIndex < 0) {
                    moveIndex = this.currentIndex;
                }

                this.currentIndex = moveIndex;

                this.$nextTick(() => {
                    let wrapHeight = this.$refs.wrap.clientHeight;
                    let activeLi = this.$refs.sugList.querySelector('.active');
                    let li = this.$refs.sugList.querySelector('li');
                    if (!activeLi || !li) {
                        return;
                    }
                    let liHeight = li.clientHeight;
                    if (activeLi && activeLi.offsetTop > wrapHeight) {
                        this.$refs.wrap.scrollTop += liHeight;
                    };
                    if (activeLi && activeLi.offsetTop - liHeight
                        < this.$refs.wrap.scrollTop) {
                        this.$refs.wrap.scrollTop -= liHeight;
                    }
                });
            },
            handleEnter() {
                let currentItem = this.list[this.currentIndex];
                this.setItem(currentItem);
                this.triggerOnEnter = true;
            },
            convert2standard(data) {
                let res = [];

                res = data.map((item, index) => {
                    return {
                        text: item,
                        value: item
                    };
                });

                return res;
            },
            arrangeLocalList() {
                let sugs = this.suggestions;

                if (this.isArray(sugs) && sugs.length > 0 && typeof sugs[0] === 'string') {
                    this.localList = this.convert2standard(sugs);
                }
                else {
                    this.localList = sugs;
                }
            },
            autoSetItem() {
                let word = this.dataText;

                let match = this.list.filter((item) => {
                    return item.text === word;
                });

                if (match.length) {
                    this.setItem(match[0]);
                }
                else {
                    this.dataValue = '';
                    this.emitChange();
                }
            },
            getLocalSug() {
                let word = this.dataText;
                this.list = this.localList.filter((item) => {
                    return word ? item.text.indexOf(word) > -1 : true;
                });
            },
            setItem(item) {
                this.dataValue = item.value;
                this.dataText = item.text;
                this.$nextTick(() => {
                    this.clearList();
                });
            },
            logError(msg) {
                throw new Error('[xcui] - ' + msg);
            },
            isArray(arr) {
                return Object.prototype.toString.call(arr) === '[object Array]';
            },
            clearText() {
                this.dataText = '';
                this.dataValue = '';
                this.emitChange();
            },
            emitChange() {
                this.$emit('input', {
                    text: this.dataText,
                    value: this.dataValue
                });
            }
        },
        created() {
            this.dataText = this.value.text || '';
            this.dataValue = this.value.value || '';
            this.handleClearBtn();
        },
        mounted() {
            this.popperElm = this.$refs.wrap;
            this.referenceElm = this.$refs.xInput.$refs.input;
            this.dropdownWidth = this.$refs.xInput.$refs.input.getBoundingClientRect().width + 'px';
            this.arrangeLocalList();
        },
        updated() {
            this.$nextTick(_ => {
                this.updatePopper();
            });
        }
    };
</script>
