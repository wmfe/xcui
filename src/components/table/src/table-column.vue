<template></template>

<script>
export default {
    name: 'XTableColumn',

    props: {
        title: {
            type: String
        },
        dataKeyName: {
            type: String
        },
        width: {
            type: String
        },
        className: {
            type: [String, Function]
        }
    },

    mounted() {
        let parent = this.$parent;
        while (parent && parent.$options.name !== 'XTable') {
            parent = parent.$parent;
        }

        this.table = parent;

        const slots = this.$scopedSlots;

        // 将数据配置存到 table 上
        this.table.columns.push({
            title: this.title,
            dataKeyName: this.dataKeyName,
            width: this.width,
            className: this.className,
            render: slots.default
                ? args => {
                    return slots.default(args);
                }
                : ({dataItem, columnItem}) => {
                    return dataItem[columnItem.dataKeyName];
                }
        });
    }
};
</script>
