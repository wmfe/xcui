
import Checkbox from '../../checkbox';

export default {
    props: {
        columns: {
            type: Array
        },
        selectable: {
            type: Boolean
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
                        this.selectable
                            ? (
                                <th class="x-table-checkbox">
                                    <x-checkbox
                                        indeterminate={this.selectedStatus === 'partial'}
                                        value={this.selectedStatus === 'all'}
                                        onChange={this.onChange}
                                    />
                                </th>
                            )
                            : ''
                    }
                    {
                        this.columns.map(columnItem => (
                            <th>
                                {columnItem.title}
                            </th>
                        ))
                    }
                </tr>
            </thead>
        );
    }

};
