<template>
    <table class="x-table" :class="{
        'x-table-border': border,
        'x-table-stripe': stripe
        }">
        <colgroup>
            <col
                v-for="item in columns"
                :width="item.width"
            >
        </colgroup>
        <x-thead
            :columns="columns"
            :selectable="selectable"
            :selectedStatus="selectedStatus"
            @changeCheckboxAll="onChangeCheckboxAll"
        />
        <x-tbody
            :data="data"
            :columns="columns"
            :rowClassName="rowClassName"
            :selectable="selectable"
            :selectedItemList="selectedItemList"
            :uniqleKeyName="uniqleKeyName"
            @changeCheckbox="onChangeCheckbox"
        />
        <slot></slot>
    </table>
</template>

<script>
    import THead from './thead.js';
    import TBody from './tbody.js';
    export default {
        name: 'XTable',

        props: {
            data: {
                type: Array,
                default() {
                    return [];
                }
            },
            border: {
                type: Boolean,
                default: false
            },
            stripe: {
                type: Boolean,
                default: false
            },
            rowClassName: {
                type: [String, Function]
            },
            uniqleKeyName: {
                type: String,
                default: ''
            },
            selectable: {
                type: Boolean,
                default: false
            },
            initialSelectedItemList: {
                type: Array,
                default() {
                    return [];
                }
            }
        },

        components: {
            'x-tbody': TBody,
            'x-thead': THead
        },

        data() {
            return {
                columns: [],
                selectedItemList: this.initialSelectedItemList
            };
        },
        computed: {
            // none partial all
            selectedStatus() {
                /* eslint-disable no-else-return */
                if (this.selectedItemList.length === 0) {
                    return 'none';
                }
                else {
                    if (this.selectedItemList.length === this.data.length) {
                        return 'all';
                    }
                    return 'partial';
                }
                /* eslint-enable no-else-return */
            }
        },

        methods: {
            onChangeCheckboxAll(status) {
                if (status) {
                    this.selectedItemList = this.data.map(item => {
                        return item[this.uniqleKeyName];
                    });
                }
                else {
                    this.selectedItemList = [];
                }
                this.$emit('update:selectedItemList', this.selectedItemList);
            },
            onChangeCheckbox(status, dataItem) {
                let uniqueValue = dataItem[this.uniqleKeyName];

                let index = this.selectedItemList.indexOf(uniqueValue);

                if (status) {
                    if (index === -1) {
                        this.selectedItemList = this.selectedItemList.concat(uniqueValue);
                    }
                }
                else {
                    if (index > -1) {
                        this.selectedItemList.splice(index, 1);
                    }
                }
                this.$emit('update:selectedItemList', this.selectedItemList);
            }
        }
    };
</script>
