
export default {
    props: {
        data: {
            type: Array
        },
        columns: {
            type: Array
        },
        rowClassName: {
            type: [String, Function]
        },
        selectable: {
            type: Boolean
        },
        selectedItemList: {
            type: Array
        },
        uniqleKeyName: {
            type: String
        }
    },

    render() {
        return (
            <tbody>
                {
                    this.data.map((dataItem, dataIndex) => (
                        <tr class={ [this.getRowClass(dataItem, dataIndex)] }>
                            {
                                this.selectable
                                    ? (
                                        <td>
                                            <x-checkbox
                                                value={this.selectedItemList.indexOf(dataItem[this.uniqleKeyName]) > -1}
                                                onChange={this.onChange.bind(this, dataItem)}
                                            />
                                        </td>
                                    )
                                    : ''
                            }
                            {
                                this.columns.map(columnItem => (
                                    <td class={columnItem.className}>
                                        {
                                            columnItem.render.call(
                                                this,
                                                {
                                                    dataItem,
                                                    columnItem,
                                                    dataIndex
                                                }
                                            )
                                        }
                                    </td>
                                ))
                            }
                        </tr>
                    ))
                }
            </tbody>
        );
    },

    methods: {
        onChange(dataItem, e) {
            this.$emit('changeCheckbox', e.target.checked, dataItem);
        },
        getRowClass(row, index) {
            let classes = [];

            let rowClassName = this.rowClassName;
            if (typeof rowClassName === 'string') {
                classes.push(rowClassName);
            }
            else if (typeof rowClassName === 'function') {
                classes.push(rowClassName(row, index) || '');
            }

            return classes.join(' ');
        }
    }
};
