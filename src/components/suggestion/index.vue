<template>
    <div class="xcui-suggestion" :class="className">
        <input type="text"
                class="form-control xcui-suggestion-input"
                autocomplete="off"
                :id="id"
                :name="name"
                :disabled="disabled"
                :placeholder="placeholder"
                v-model="dataText"
                @input="onInput"
                @focus="onInput"
                @blur="onBlur"
                @keyDown.up="changeCurrent(-1)"
                @keyDown.down="changeCurrent(1)"
                @keyDown.enter.stop.prevent="onBlur">

        <ul class="xcui-suggestion-list dropdown-menu" :class="{'show':show}">
            <li v-for="(index,item) in list" :class="{'current' : currentIndex==index}">
                <a href="javascript:void(0)" @click="setItem(item)">
                    {{item.text}}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'xcui-suggestion',
        data() {
            return {
                list: [],
                localList: [],
                currentIndex: -1
            };
        },
        props: {
            id: {
                type: String,
                default: ''
            },
            name: {
                type: String,
                default: ''
            },
            className: {
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
            'dataText': {
                type: String,
                default: ''
            },
            'dataValue': {
                type: [String, Number],
                default: ''
            },
            'check': {
                type: Boolean,
                default: true
            },
            'inputCallback': {
                type: Function,
                default() {
                    return () => {};
                }
            }
        },
        computed: {
            show() {
                return this.list.length > 0 && this.$el.getElementsByTagName('input')[0] === document.activeElement;
            }
        },
        watch: {
            suggestions() {
                this.arrangeLocalList();
                this.getLocalSug();
            }
        },
        methods: {
            onInput() {
                let me = this;
                setTimeout(function () {
                    me.currentIndex = -1;
                    me.getLocalSug();
                    me.autoSetItem();
                    me.inputCallback && me.inputCallback();
                }, 100);
            },
            onBlur() {
                let me = this;

                setTimeout(() => {
                    me.currentIndex = -1;
                    me.list = [];
                }, 200);
            },
            changeCurrent(offset) {
                this.currentIndex += offset;

                if (offset > 0 && this.currentIndex >= this.list.length) {
                    this.currentIndex = 0;
                }
                else if (offset < 0 && this.currentIndex < 0) {
                    this.currentIndex = this.list.length - 1;
                }

                let currentItem = this.list[this.currentIndex];

                this.setItem(currentItem);
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
                }
            },
            getLocalSug() {
                let word = this.dataText;

                this.list = this.localList.filter((item) => {
                    return (word && this.check) ? item.text.indexOf(word) > -1 : true;
                });
            },
            setItem(item) {
                this.dataValue = item.value;
                this.dataText = item.text;
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
            }
        },
        ready() {
            this.arrangeLocalList();
        }
    };
</script>

<style lang="less">
    .xcui-suggestion{
        position:relative;
        width:100%;
        .xcui-show{
            display:block;
        }
        .xcui-suggestion-list{
            min-width:100%;
            max-height: 400px;
            overflow: auto;
            li{
                &.current{
                    background:#ddd;
                }
            }
        }
    }
</style>
