<template>
    <div class="x-tree-select x-single-tree-select">
        <div class="x-tree-select-input-wrap" @click="showDropDown = !showDropDown">
            <i  v-if="allowClear && !disabled" class="x-icon x-tree-select-input-icon x-icon-android-close" @click.stop="clearAll"></i>
            <div class="x-tree-select-input" v-if="!!selected[keyName]" :class="{'is-disabled' : disabled}">
                <span v-text="inputText" :title="selectedPathStr"></span>
            </div>
            <div  class="x-tree-select-input"  :class="{'is-disabled' : disabled}" v-else>
                <span class="no-select">请选择</span>
            </div>
        </div>

        <div class="x-tree-select-item-wrap" v-show="showDropDown && !disabled">
            <slot name="header"></slot>
            <div class="x-tree-select-item-level">
                <div class="x-tree-select-item" v-for="(level, levelIndex) in levelData" :key="levelIndex">
                    <template v-if="levelIndex >= 0">
                        <ul>
                            <li class="x-tree-select-item-search" v-if="allowSearch">
                                <i class="x-icon x-tree-select-input-icon x-tree-select-item-input-icon x-icon-android-close" @click="clearSug( level )"></i>
                                <input class="x-input x-input-small"
                                    type="text"
                                    :placeholder="'搜索' + fieldTexts[level.branchDepth]"
                                     v-model="level.sugText">
                            </li>

                            <li v-if="!isLastIndex( levelIndex ) && (level.sugText||'').trim() ==='' " class="checkbox-all x-tree-select-item-li" :class="{'active': level.hoverKey === 'all'}" @mouseenter="hoverForAll( level, levelIndex)">
                                <span class="x-single-tree-select-item-text" v-text=" '全部' + fieldTexts[level.branchDepth]"></span>
                                <i v-if="!isLastIndex( levelIndex )" class="x-icon x-icon-chevron-right x-tree-select-right-icon"></i>
                            </li>

                            <template v-if="showListView( level )">
                                <li v-for="item in filterList(level.list, ([level.sugText]+'').trim())" :key="item[keyName]" :class="{
                                    'active': level.hoverKey === item[keyName],
                                    'lastLevel': isLastIndex( levelIndex )
                                }" @click="checkItem(item, levelIndex)" @mouseenter="hover( item, levelIndex)" class=" x-tree-select-item-li">
                                    <span class="x-single-tree-select-item-text" v-text="item[textName]"></span>
                                    <i v-if="!isLastIndex( levelIndex )" class="x-icon x-icon-chevron-right x-tree-select-right-icon"></i>
                                </li>
                                <li v-if="level.sugText !== '' && level.list.length < 1">
                                    无搜索结果
                                </li>
                            </template>
                        </ul>
                    </template>
                </div>
            </div>
            <slot name="footer"></slot>
        </div>

    </div>
</template>

<script>
import mixin from '../../multi-tree-select/src/mixin.js';
import { clone, concatMultiList, filterList, travelUp, travelDown } from '../../multi-tree-select/src/util.js';

const Event_INITED = 'inited';
const Event_Select_With_Path = 'change';
const Event_Value = 'input';
let exposeDataEventTimer = null;
// 对象指定的属性为空，则认定其为空
const ObjectIsNull = (obj, keyName) => {
    if(!obj) {
        return true;
    }
    if (Object.keys(obj).length !== 0) {
        const val = obj[keyName];
        if (typeof val === 'undefined' || val === '') {
            return true;
        }
    }
    return false;
};

export default {
    name: 'x-single-tree-select',
    mixins: [mixin],
    model: {
        event: Event_Value
    },
    props: {
        value: {
            type: Object,
        },
        initData: {
            type: Object,
            required: true,
        },
        fields: {
            type: Array,
            required: true,
        },
        fieldTexts: {
            type: Array,
            required: true,
        },
        // 展示的数据层级，允许传入多级数据，通过此字段动态控制切换，以展示部分层级数据
        levelDepth: {
            type: Number,
            default: 0,
        },
        keyName: {
            type: String,
            default: 'key'
        },
        textName: {
            type: String,
            default: 'text'
        },
        allowClear: {
            type: Boolean,
            default: true
        },
        disabled: {
            type: Boolean,
            default: false
        },
        showPathText: {
            type: Boolean,
            default: false
        },
        allowSearch: {
            type: Boolean,
            default: true
        },
    },
    data() {
        return {
            showDropDown: false,
            levelData: [// 用于 View 展示的数据
                // {  key:  list: }
            ],
            selected: {
                [this.keyName]: '',
                [this.textName]: ''
            }, // user selected id set
            selectedPath: [],
        };
    },
    computed: {
        fieldsLen() {
            if (this.levelDepth > 0) {
                return Math.min(this.levelDepth, this.fields.length);
            } else {
                return this.fields.length;
            }
        },
        inputText() {
            return this.showPathText ? this.selectedPath.map(item => item[this.textName]).join('/') : `已选：${this.selected[this.textName]}`;
        },
        selectedPathStr() {
            if (this.selectedPath.length) {
                return this.selectedPath.map(item => {
                    return item[this.textName];
                }).join('-');
            }
        },
    },
    watch: {
        initData(val) {
            this.$emit('refresh');
        },
        fields() {
            this.$emit('refresh');
        },
        levelDepth() {
            this.$emit('refresh');
        },
        value: {
            deep: true,
            handler(val) {
                this.$set(this, 'selected', val);
                this.setSelected(val);
            }
        }
    },
    methods: {
        filterList(list, keyword) {
            return filterList(list, keyword, this.textName);
        },
        init(data) {
            let tree = this.rawData2Tree(data, 'root');
            if (tree) {
                // treeRoot 是在原始数据之外增加的一层数据，需要单独处理 selected
                let treeRoot = {
                    [this.keyName]: 'root',
                    [this.textName]: 'root',
                    hoverKey: '',
                    sugText: '',
                    branchDepth: 0,
                    list: tree,
                };
                let start = {
                    [this.keyName]: 'start',
                    hoverKey: 'root',
                    list: {
                        'root': treeRoot,
                    }
                };
                travelDown(start, (item, subItem) => {
                    subItem.parent = item;// 给子节点追加 parent 属性，用于回溯
                });
                this.levelData = [];
                this.$set(this.levelData, '0', start);
                this.hover(treeRoot, 0);// hover root node
            }
        },
        /**
         * 把原始的嵌套的数据结构转换成树
         */
        rawData2Tree(rawData, parent, branchDepth = 0) {
            if (rawData && branchDepth < this.fieldsLen) {
                let list = rawData[this.fields[branchDepth]];
                if (list) {
                    const isLastDeep = (branchDepth === (this.fieldsLen - 1));
                    const keyName = this.keyName;
                    const textName = this.textName;
                    const defaultSelectedKey = this.value[keyName];
                    let tree = {};
                    for(let i = 0, len = list.length; i < len; i++) {
                        const item = list[i];
                        let _list = this.rawData2Tree(item, item[keyName], branchDepth + 1);
                        tree[item[keyName] + ''] = {
                            [keyName]: item[keyName],
                            [textName]: item[textName],
                            "sugText": '',
                            "hoverKey": '',
                            "parent": parent,
                            "branchDepth": branchDepth + 1,
                            "list": _list
                        };
                        if (isLastDeep && item[keyName] == defaultSelectedKey) {
                            // this.setSelected(tree[item[keyName] + '']);
                            this.$emit(Event_Value, {
                                [this.keyName]: tree[item[keyName] + ''][this.keyName],
                                [this.textName]: tree[item[keyName] + ''][this.textName],
                            });
                        }
                    }
                    return tree;
                }
            }
            return null;
        },
        /**
         * 鼠标 hover 触发的事件
         */
        hover(item, levelIndex) {
            this.levelData[levelIndex].hoverKey = item[this.keyName];
            this.buildLeveData(item, levelIndex + 1);
        },
        // hover 全部
        hoverForAll(level, levelIndex) {
            level.hoverKey = 'all';
            // 如果前一列已经 hover 到了`全部`上,则不再展开下级
            if (this.prevLevelIsHoverAll(levelIndex) && levelIndex !== 2) return;

            let nextLevelIndex = levelIndex + 1;
            this.buildLeveData({
                [this.keyName]: 'all',
                hoverKey: '',
                sugText: '',
                branchDepth: level.branchDepth + 1,
                list: concatMultiList(level.list), // 合并树枝
            }, nextLevelIndex);
        },
        /**
         * 组装 View 层 展示数据
         */
        buildLeveData(item, levelIndex) {
            if (levelIndex <= this.fieldsLen) { // 边界：最后一列 hover，不再展现子列
                if (!this.levelData[levelIndex] || this.levelData[levelIndex][this.keyName] !== item[this.keyName]) {
                    this.$set(this.levelData, levelIndex, item);
                }
                this.levelData.splice(levelIndex + 1);// 始终只显示下一集目录，多余的 cut
            }
        },

        clearSug(level) {
            if (level && level.sugText !== '') {
                level.sugText = '';
            }
        },
        // 勾选一普通项
        checkItem(item, levelIndex) {
            if (!this.isLastIndex(levelIndex)) return;
            this.$emit(Event_Value, {
                [this.keyName]: item[this.keyName],
                [this.textName]: item[this.textName],
            });
            this.showDropDown = false;
        },
        setSelected(item) {
            if (item) {
                if (ObjectIsNull(item, this.keyName)) {
                    this.exposeSelectedData(null, []);
                } else {
                    this.exposeSelectedData(clone({}, item), this.collectPath(item));
                }
            }
        },
        // 当前列展示的是`全部`时，且没有 sug 条件时，不渲染列表
        showListView(level) {
            let key = level[this.keyName];
            let sugText = level.sugText;
            if (key === 'all' && sugText === '') {
                return false;
            }
            return true;
        },
        // 清空按钮
        clearAll() {
            this.$emit(Event_Value, {
                [this.keyName]: '',
                [this.textName]: ''
            });
            this.showDropDown = false;
        },
        prevLevelIsHoverAll(levelIndex) {
            let prevLevel = this.levelData[levelIndex - 1];
            return prevLevel && (prevLevel.hoverKey === 'all');
        },
        isLastIndex(levelIndex) {
            return levelIndex == this.fieldsLen;
        },
        // 根据选中的末端节点，收集其上层路径
        collectPath(fatItem) {
            const keyName = this.keyName;
            const textName = this.textName;
            let checkedItem = {
                [keyName]: fatItem[keyName],
                [textName]: fatItem[textName],
            };
            let path = [];
            let hasCheckedItem = false;
            if(fatItem.parent) {
                path.unshift(checkedItem);
                travelUp(fatItem, parent => {
                    if (parent && parent[keyName] !== 'root') {
                        path.unshift({
                            [keyName]: parent[keyName],
                            [textName]: parent[textName],
                        });
                    }
                }, keyName);
            } else {
                const travelData = this.levelData.length >= 1 ? this.levelData[1] : {};
                travelDown(travelData, (item, subItem) => {
                    if(subItem.branchDepth === this.fieldsLen) {
                        if(subItem[keyName] === checkedItem[keyName]) {
                            hasCheckedItem = true;
                            path[subItem.branchDepth - 1] = {
                                [keyName]: subItem[keyName],
                                [textName]: subItem[textName],
                            };
                            return true;
                        }
                    } else {
                        if(!hasCheckedItem) {
                            path[subItem.branchDepth - 1] = {
                                [keyName]: subItem[keyName],
                                [textName]: subItem[textName],
                            };
                        } else {
                            return true;
                        }
                    }
                });
                if(!hasCheckedItem) {
                    path = [];
                }
            }
            return this.selectedPath = path;
        },
        // 向外通过事件暴露选择结果
        exposeSelectedData(selectedItem, path) {
            clearTimeout(exposeDataEventTimer);
            // 避免由于多个 props 改变，触发 refresh 后向外频繁抛出事件
            exposeDataEventTimer = setTimeout(() => {
                let selected = {
                    [this.keyName]: '',
                    [this.textName]: '',
                };
                if(selectedItem && path.length !== 0) {
                    let lastItem = path[path.length - 1];
                    if(selectedItem[this.keyName] !== lastItem[this.keyName]
                    || selectedItem[this.textName] !== lastItem[this.textName]) { // 如果手动设置值有误，重新emit正确的值
                        this.$emit(Event_Value, lastItem);
                        return;
                    } else {
                        selected = selectedItem;
                    }
                }
                this.$emit(Event_Select_With_Path, {
                    selected: selected,
                    path: path, // 被选中的末端子叶的上级路径
                });
            }, 0);
        },

    },
    created() {
        let refreshTimer = null;
        this.$on('refresh', () => {
            clearTimeout(refreshTimer);
            // 避免由于多个 props 改变，触发频繁初始化数据
            refreshTimer = setTimeout(() => {
                this.init(this.initData);
                this.$emit(Event_INITED)
            }, 0);
        });
        this.init(this.initData);
    }
};
</script>
