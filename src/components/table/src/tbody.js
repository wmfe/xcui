
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
        selectedValueList: {
            type: Array
        },
        selectedValue: {
            type: [String, Number]
        }
    },

    methods: {
        onChangeCheckbox(value, e) {
            this.$emit('changeCheckbox', e.target.checked, value);
        },
        onChangeRadio(value, e) {
            this.$emit('changeRadio', e.target.checked, value);
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
        },
        onMouseenterTD(content, dataItem, columnItem, e) {
            let tdElem = e.target;
            if (columnItem.singleLine && tdElem.scrollWidth > tdElem.offsetWidth) {
                tdElem.setAttribute('title', content);
            }
            else {
                tdElem.removeAttribute('title');
            }
        }
    },

    render() {
        return (
            <tbody>
                {
                    this.data.map((dataItem, dataIndex) => (
                        <tr class={ [this.getRowClass(dataItem, dataIndex)] }>
                            {
                                this.columns.map(columnItem => {
                                    let currentUniqueValue = dataItem[columnItem.prop];
                                    switch (columnItem.type) {
                                        case 'selection':
                                            return (
                                                <td class={columnItem.className}>
                                                    <x-checkbox
                                                        value={this.selectedValueList.indexOf(currentUniqueValue) > -1}
                                                        onChange={this.onChangeCheckbox.bind(this, currentUniqueValue)}
                                                    />
                                                </td>
                                            );
                                        case 'radio':
                                            return (
                                                <td class={columnItem.className}>
                                                    <x-checkbox
                                                    value={this.selectedValue === currentUniqueValue}
                                                    onChange={this.onChangeRadio.bind(this, currentUniqueValue)}
                                                />
                                                </td>
                                            );
                                        case 'normal':
                                        default:
                                            let content = columnItem.render.call(
                                                this,
                                                {
                                                    dataItem,
                                                    columnItem,
                                                    dataIndex
                                                }
                                            );
                                            return (
                                                <td
                                                    class={columnItem.className}
                                                    onMouseenter={this.onMouseenterTD.bind(
                                                            this,
                                                            content,
                                                            dataItem,
                                                            columnItem
                                                        )}
                                                >
                                                    {
                                                        content
                                                    }
                                                </td>
                                            );
                                    }
                                })
                            }
                        </tr>
                    ))
                }
            </tbody>
        );
    }
};
