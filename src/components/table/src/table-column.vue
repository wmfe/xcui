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
            columnOrder: 0
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
        let isSubColumn = parent !== origin;
        const slots = this.$scopedSlots;

        if (this.type) {
            this.table.rowKey = this.prop;
        }

        let tdClassName = this.singleLine ? this.className + ' ' + SINGLE_LINE_CLASS_NAME : this.className;

        let column = {
            title: this.title,
            type: this.type || 'normal',
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
                }
        };
        this.columnConfig = column;
        let columnIndex;
        if (isSubColumn) {
            columnIndex = [].indexOf.call(parent.$el.children, this.$el);
        }
        this.insertColumn(this.table, column, columnIndex, isSubColumn ? parent.columnConfig : null);
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
        className(val) {
            this.updateColumn();
        },
        singleLine(val) {
            this.updateColumn('singleLine');
        }
    },
    methods: {
        insertColumn(table, column, index, parent) {
            let array = table.columns;
            if (parent) {
                array = parent.children;
                if (!array) {
                    array = parent.children = [];
                }
            }
            // array.push(column);
            if (typeof index !== 'undefined') {
                array.splice(index, 0, column);
                this.columnOrder = index;
            }
            else {
                this.columnOrder = array.push(column) - 1;
            }
        },
        updateColumn(name) {
            let value = this[name];
            if (value) {
                this.$set(this.table.columns[this.columnOrder], name, value);
            }
        },
        removeColumn() {
            this.table.columns.splice(this.columnOrder, 1);
        }
    },
    destroyed() {
        this.removeColumn();
    }
};
</script>
