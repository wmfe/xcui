<template></template>

<script>
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
            columnConfig: {}
        };
    },

    watch: {
        title(newVal) {
            if (this.columnConfig) {
                this.columnConfig.title = newVal;
            }
        },
        prop(newVal) {
            if (this.columnConfig) {
                this.columnConfig.prop = newVal;
            }
        },
        type(newVal) {
            if (this.columnConfig) {
                this.columnConfig.type = newVal;
            }
        },
        width(newVal) {
            if (this.columnConfig) {
                this.columnConfig.width = newVal;
            }
        },
        fixed(newVal) {
            if (this.columnConfig) {
                this.columnConfig.fixed = newVal;
            }
        },
        className(newVal) {
            if (this.columnConfig) {
                this.columnConfig.className = newVal;
            }
        },
        singleLine(newVal) {
            if (this.columnConfig) {
                this.columnConfig.singleLine = newVal;
            }
        }

    },

    mounted() {
        let parent = this.$parent;
        while (parent && parent.$options.name !== 'XTable') {
            parent = parent.$parent;
        }

        this.table = parent;

        const slots = this.$scopedSlots;

        if (this.type) {
            this.table.rowKey = this.prop;
        }

        const SINGLE_LINE_CLASS_NAME = 'x-table-td-single-line';
        let tdClassName = this.singleLine ? this.className + ' ' + SINGLE_LINE_CLASS_NAME : this.className;

        this.columnConfig = {
            title: this.title,
            type: this.type || 'normal',
            prop: this.prop,
            width: this.width,
            className: tdClassName,
            fixed: this.fixed || '',
            singleLine: this.singleLine,
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

        // 将数据配置存到 table 上
        this.table.columns.push(this.columnConfig);
    }
};
</script>