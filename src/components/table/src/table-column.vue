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
            // 保存当前列元素位置，例如[1,2,3]表示该列在第二列的第三子列的第四子列
            orderQueue: []
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
            orderQueue: this.orderQueue,
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
                this.orderQueue.push(...parent.orderQueue);
            }
            if (typeof index !== 'undefined') {
                array.splice(index, 0, column);
                this.orderQueue.push(index)
            }
            else {
                this.orderQueue.push(array.push(column) - 1)
            }
        },
        //动态更新列属性时触发更新
        updateColumn(name, customVal) {
            let value = customVal || this[name];
            let target = this.getTarget();
            let parent = !this.isSubColumn ? target.parent : target.parent.children[target.curOrder];
            if (value) {
                this.$set(parent, name, value);
            }
        },
        //该列被动态删除时触发
        removeColumn() {
            let target = this.getTarget();
            let parent = !this.isSubColumn ? this.table.columns : target.parent.children;
            parent.splice(target.curOrder, 1);
        },
        //获取父列及当前列位置
        getTarget(){
            let target = {}
            target.curOrder = this.orderQueue[this.orderQueue.length - 1];
            let parent = this.table.columns[this.orderQueue[0]];
            for (var i = 1; i < this.orderQueue.length - 1 ; i++) {
                let item = this.orderQueue[i];
                parent = parent.children[item];
            }
            target.parent = parent;
            return target;
        }
    },
    destroyed() {
        this.removeColumn();
    }
};
</script>