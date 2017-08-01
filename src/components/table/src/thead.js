
import Checkbox from '../../checkbox';

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
        }
    },

    render() {
        return (
            <thead>
                <tr>
                    {
                        this.columns.map(columnItem => {
                            switch (columnItem.type) {
                                case 'selection':
                                    return (
                                        <th>
                                            <x-checkbox
                                                indeterminate={this.selectedStatus === 'partial'}
                                                value={this.selectedStatus === 'all'}
                                                onChange={this.onChange}
                                            />
                                        </th>
                                    );
                                case 'radio':
                                    return (
                                        <th></th>
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
                                        <th>
                                            {content}
                                        </th>
                                    );
                            }
                        })
                    }
                </tr>
            </thead>
        );
    }

};
