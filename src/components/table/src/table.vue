<template>
    <div class="x-table-wrapper">
        <table class="x-table" :class="{
            'x-table-bordered': bordered,
            'x-table-striped': striped
            }">
            <div class="x-table-hidden" ref="hiddenColumns"><slot></slot></div>
            <colgroup>
                <col
                    v-for="item in columns"
                    :width="item.width"
                >
            </colgroup>
            <x-thead
                :columns="columns"
                :selected-status="selectedStatus"
                @changeCheckboxAll="onChangeCheckboxAll"
            />
            <x-tbody
                :data="data"
                :columns="columns"
                :row-class-name="rowClassName"
                :selected-value-list="selectedValueList"
                :selected-value="selectedValue"
                @changeCheckbox="onChangeCheckbox"
                @changeRadio="onChangeRadio"
            />
            <!-- <slot></slot> -->
        </table>
        <div class="x-table-empty-tip" v-if="data.length === 0">
            {{emptyTip}}
        </div>
    </div>
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
            bordered: {
                type: Boolean,
                default: false
            },
            striped: {
                type: Boolean,
                default: false
            },
            emptyTip: {
                type: String,
                default: '暂无数据'
            },
            rowClassName: {
                type: [String, Function]
            },
            initialSelectedValueList: {
                type: Array,
                default() {
                    return [];
                }
            },
            initialSelectedValue: {
                type: [String, Number]
            },
            selectionChange: {
                type: Function
            },
            radioChange: {
                type: Function
            }
        },

        components: {
            'x-tbody': TBody,
            'x-thead': THead
        },

        data() {
            return {
                columns: [],
                rowKey: '',
                tableWidth: null,
                selectedValueList: this.initialSelectedValueList,
                selectedValue: this.initialSelectedValue
            };
        },
        computed: {
            // none partial all
            selectedStatus() {
                /* eslint-disable no-else-return */
                if (this.selectedValueList.length === 0) {
                    return 'none';
                }
                else {
                    if (this.selectedValueList.length === this.data.length) {
                        return 'all';
                    }
                    return 'partial';
                }
                /* eslint-enable no-else-return */
            },
            dataMap() {
                let dataMap = {};
                this.data.forEach(item => {
                    let value = item[this.rowKey];
                    dataMap[value] = item;
                });
                return dataMap;
            }
        },

        methods: {
            getDataList(valueList) {
                return valueList.map(value => {
                    return this.dataMap[value];
                });
            },
            onChangeCheckboxAll(status) {
                if (status) {
                    this.selectedValueList = this.data.map(item => {
                        return item[this.rowKey];
                    });
                }
                else {
                    this.selectedValueList = [];
                }
                this.$emit(
                    'selection-change',
                    this.selectedValueList,
                    this.getDataList(this.selectedValueList)
                );
            },
            onChangeCheckbox(status, rowKey) {
                let index = this.selectedValueList.indexOf(rowKey);

                if (status) {
                    if (index === -1) {
                        this.selectedValueList = this.selectedValueList.concat(rowKey);
                    }
                }
                else {
                    if (index > -1) {
                        this.selectedValueList.splice(index, 1);
                    }
                }
                this.$emit(
                    'selection-change',
                    this.selectedValueList,
                    this.getDataList(this.selectedValueList)
                );
            },
            onChangeRadio(status, value) {
                this.selectedValue = this.selectedValue === value ? '' : value;
                this.$emit(
                    'radio-change',
                    this.selectedValue,
                    this.dataMap[this.selectedValue]
                );
            }
        }
    };
</script>
