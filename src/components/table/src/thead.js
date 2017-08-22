
import Checkbox from 'xcui/src/components/checkbox';

export default {
    props: {
        columns: {
            type: Array
        },
        selectedStatus: {
            type: String
        }
    },

    components: {
        'x-checkbox': Checkbox
    },

    methods: {
        onChange(e) {
            this.$emit('changeCheckboxAll', e.target.checked);
        },
        convertToRows(originColumns) {
            let maxLevel = 1;
            // 对所有嵌套列数据标记列层级与子列跨度
            const traverse = (column, parent) => {
                if (parent) {
                    column.level = parent.level + 1;
                    if (maxLevel < column.level) {
                        maxLevel = column.level;
                    }
                }
                if (column.children.length > 0) {
                    let colSpan = 0;
                    column.children.forEach((subColumn) => {
                        traverse(subColumn, column);
                        colSpan += subColumn.colSpan;
                    });
                    column.colSpan = colSpan;
                }
                else {
                    column.colSpan = 1;
                }
            };

            originColumns.forEach((column) => {
                column.level = 1;
                traverse(column);
            });

            const rows = [];
            for (let i = 0; i < maxLevel; i++) {
                rows.push([]);
            }

            const allColumns = this.getAllColumns(originColumns);
            // 按列的层级排列表头数组
            allColumns.forEach((column) => {
                if (!column.children || column.children.length === 0) {
                    column.rowSpan = maxLevel - column.level + 1;
                }
                else {
                    column.rowSpan = 1;
                }
                rows[column.level - 1].push(column);
            });

            return rows;
        },
        // 取出所有嵌套列数据
        getAllColumns(columns) {
            const result = [];
            columns.forEach((column) => {
                if (column.children) {
                    result.push(column);
                    result.push.apply(result, this.getAllColumns(column.children));
                }
                else {
                    result.push(column);
                }
            });
            return result;
        }
    },

    render() {
        const columnRows = this.convertToRows(this.columns);
        return (
            <thead>
                {
                    columnRows.map(columns =>
                        <tr>
                            {
                                columns.map(columnItem => {
                                    switch (columnItem.type) {
                                        case 'selection':
                                            return (
                                                <th colspan={ columnItem.colSpan }
                                                rowspan={ columnItem.rowSpan }
                                                 class={columnItem.thClassName}
                                                >
                                                    <x-checkbox
                                                        indeterminate={this.selectedStatus === 'partial'}
                                                        value={this.selectedStatus === 'all'}
                                                        onChange={this.onChange}
                                                    />
                                                </th>
                                            );
                                        case 'radio':
                                            return (
                                                <th class={columnItem.thClassName}></th>
                                            );
                                        case 'normal':
                                        default:
                                            let content = columnItem.headerRender.call(
                                                this,
                                                {
                                                    columnItem
                                                }
                                            );
                                            return (
                                                <th colspan={ columnItem.colSpan }
                                                rowspan={ columnItem.rowSpan }
                                                class={columnItem.thClassName}
                                                >
                                                    {content}
                                                </th>
                                            );
                                    }
                                })
                            }
                        </tr>
                    )
                }
            </thead>
        );
    }
};
