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
        <x-suggestion-dropdown :suggestions="list" ref="popper">
        </x-suggestion-dropdown>
    </div>
</template>

<script>
    import xInput from '../../input';
    import xSuggestionDropdown from './suggestion-dropdown';
    import Emitter from '../../../utils/mixins/emitter';

    export default {
        name: 'xSuggestion',
        componentName: 'xSuggestion',
        mixins: [Emitter],
        components: {
            xInput,
            xSuggestionDropdown
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
            },
            sugVisible(val) {
                this.broadcast('xSuggestionDropdown', 'visible',
                    [val, this.$refs.xInput.$refs.input.offsetWidth]);
            },
            dataText(val) {
                if (val === '') {
                    this.dataValue = '';
                    this.emitChange();
                }
            }
        },
        methods: {
            handleClearBtn() {
                if (this.allowClear) {
                    this.icon = 'android-close';
                    this.iconClick = () => {
                        this.clearText();
                    };
                }
            },
            handleChange() {
                this.emitChange();
                this.getLocalSug();
                this.inputCallback && this.inputCallback();
            },
            handleFocus() {
                this.isFocus = true;
                this.getLocalSug();
                this.inputCallback && this.inputCallback();
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
                    moveIndex = 0;
                }
                else if (offset < 0 && moveIndex < 0) {
                    moveIndex = this.list.length - 1;
                }

                this.currentIndex = moveIndex;

                this.$nextTick(() => {
                    const popper = this.$refs.popper.$el;
                    let popperHeight = popper.clientHeight;
                    let activeItem = popper.querySelector('.active');
                    let item = popper.querySelector('li');
                    if (!activeItem || !item) {
                        return;
                    }
                    let itemHeight = item.clientHeight;

                    if (this.currentIndex === 0) {
                        popper.scrollTop = 0;
                        return;
                    }

                    if (this.currentIndex === this.list.length - 1) {
                        popper.scrollTop = popperHeight;
                        return;
                    }

                    if (activeItem && activeItem.offsetTop > popperHeight - itemHeight) {
                        popper.scrollTop += itemHeight;
                    };
                    if (activeItem && activeItem.offsetTop
                        < popper.scrollTop) {
                        popper.scrollTop -= itemHeight;
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
                    this.emitChange();
                });
            },
            logError(msg) {
                throw new Error('[xcui] - ' + msg);
            },
            isArray(arr) {
                return Object.prototype.toString.call(arr) === '[object Array]';
            },
            clearText() {
                // watch for clear
                this.dataText = '';
            },
            emitChange() {
                this.$emit('input', {
                    text: this.dataText,
                    value: this.dataValue
                });
                this.$emit('change', {
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
            this.$on('item-click', item => {
                this.setItem(item);
            });
            this.arrangeLocalList();
        }
    };
</script>
