<template></template>

<script>
const SINGLE_LINE_CLASS_NAME = 'x-table-td-single-line';
export default {
    name: 'XTableColumn',
    props: {
        title: {
            type: String
        },
        prop: {
            type: String
        },
        type: {
            type: String
        },
        width: {
            type: String
        },
        fixed: {
            type: String,
            default() {
                return '';
            }
        },
        className: {
            type: String,
            default() {
                return '';
            }
        },
        singleLine: {
            type: Boolean,
            default() {
                return false;
            }
        }
    },
    data() {
        return {
        };
    },
    mounted() {
        this.$options.render = h => h('div', this.$slots.default);
        let parent = this.$parent;
        let origin = this.$parent;
        while (origin && origin.$options.name !== 'XTable') {
            origin = origin.$parent;
        }
        this.table = origin;
        this.isSubColumn = parent !== origin;
        const slots = this.$scopedSlots;
        if (this.type) {
            this.table.rowKey = this.prop;
        }
        let tdClassName = this.singleLine ? this.className + ' ' + SINGLE_LINE_CLASS_NAME : this.className;
        let column = {
            title: this.title,
            type: this.type || 'normal',
            fixed: this.fixed || '',
            prop: this.prop,
            width: this.width,
            className: tdClassName,
            singleLine: this.singleLine,
            children: [],
            // tbody 中每个 td 内的 render 方法
            render: slots.default
                // 如果 <x-table-column> 内有 template，按照 template 内的来渲染
                ? args => {
                    return slots.default(args);
                }
                : ({dataItem, columnItem}) => {
                    // 直接返回内容
                    return dataItem[columnItem.prop];
                },
            headerRender: slots['column-header-slot']
                ? args => {
                    return slots['column-header-slot'](args);
                }
                : () => {
                    return this.title;
                }
        };
        this.columnConfig = column;
        let columnIndex;
        if (!this.isSubColumn) {
            columnIndex = [].indexOf.call(parent.$refs.hiddenColumns.children, this.$el);
        }
        else {
            columnIndex = [].indexOf.call(parent.$el.children, this.$el);
        }
        this.insertColumn(this.table, column, columnIndex, this.isSubColumn ? parent.columnConfig : null);
    },
    watch: {
        title(val) {
            this.updateColumn('title');
        },
        prop(val) {
            this.updateColumn('prop');
        },
        type(val) {
            this.updateColumn('type');
        },
        width(val) {
            this.updateColumn('width');
        },
        fixed(val) {
            this.updateColumn('fixed');
        },
        className(val) {
            let tdClassName = this.singleLine ? this.className + ' ' + SINGLE_LINE_CLASS_NAME : this.className;
            this.updateColumn('className', tdClassName);
        },
        singleLine(val) {
            this.updateColumn('singleLine');
        }
    },
    methods: {
        insertColumn(table, column, index, parent) {
            let array = table.columns;
            if (parent && parent !== null) {
                array = parent.children;
                if (!array) {
                    array = parent.children = [];
                }
            }
            if (typeof index !== 'undefined') {
                array.splice(index, 0, column);
            }
            else {
                array.push(column);
            }
        },
        //动态更新列属性时触发更新
        updateColumn(name, customVal) {
            let value = customVal || this[name];
            this.columnConfig[name] = value;
        },
        //该列被动态删除时触发
        removeColumn() {
            let parent = !this.isSubColumn ? this.table.columns : this.$parent.columnConfig.children;
            let curIndex = parent.indexOf(this.columnConfig);
            parent.splice(curIndex, 1); 
        }
    },
    destroyed() {
        this.removeColumn();
    }
};
</script>