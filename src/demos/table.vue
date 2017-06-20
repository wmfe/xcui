<template lang="md">
# Table 表格

用于展示多条结构化的数据，支持基础样式设置及单选、多选操作。

## 基础使用

::: demo 表格的基本使用。

```html
<tpl>
    <div>
        <x-button type="success" @click="addColumn">success</x-button>
        <x-table :data="sourceData">
           <!--  <x-table-column
                :title="columsMap[order].nameCol.title"
                :prop="columsMap[order].nameCol.prop"
            >
            </x-table-column>
            <x-table-column
                :title="columsMap[order].jobCol.title"
                :prop="columsMap[order].jobCol.prop"
            >
            </x-table-column>
            <x-table-column
                :title="columsMap[order].addressCol.title"
                :prop="columsMap[order].addressCol.prop"
            >
            </x-table-column> -->
            <template v-for="(columnitem, name) in singleMap">
            {{columnitem.title}}
               <x-table-column
                   :title="columnitem.title"
                   :prop="columnitem.prop"
               >
               </x-table-column>

            </template>

        </x-table>
    </div>
</tpl>
<script>
    export default {
        data() {
            return {
                sourceData: [
                    {
                        name: '李雷',
                        address: '北京市海淀区新建宫门路17号',
                        job: '前端开发工程师'
                    }, {
                        name: '韩梅梅',
                        address: '北京市海淀区新建宫门路17号',
                        job: '架构师'
                    }, {
                        name: '小明',
                        address: '北京市海淀区新建宫门路17号',
                        job: 'UI设计师'
                    }
                ]
            };
        }
    };
</script>


:::



## Table Props
| 名字 | 类型 | 默认 | 描述 | 是否必选 |
|-----|-----|-----|-----|----|
|data|Array|[]|表格数据|必选|
|bordered|Boolean|false|是否带边框|可选|
|striped|Boolean|false|是否带斑马纹|可选|
|empty-tip|String|暂无数据|没有表格数据的提示文案|可选|
|row-class-name|String or Function|-|自定义行 className|可选|
|initial-selected-value-list|Array|[]|多选中默认选中项的集合，每一项对应type为selection列的prop的值|可选|
|initial-selected-value|String or Number|[]|单选中默认选中项，对应type为radio列的prop的值|可选|

## Table-column Props
| 名字 | 类型 | 默认 | 描述 | 是否必选 |
|-----|-----|-----|-----|----|
|title|String|-|显示的标题|必选|
|type|String|-|column的类型 可选值selection、radio|可选|
|prop|String|-|对应列内容的字段名|必选|
|width|String|-|列宽|可选|
|class-name|String|-|自定义列 className|可选|
|single-line|Boolean|-|当文字过多时，是否单行显示 tooltips|可选|

## Table Events
| 名字 | 描述 | 是否必选 |
|-----|-----|----|
|radio-change|单选时选择项发生变化时会触发该事件|可选|
|selection-change|多选时选择项发生变化时会触发该事件|可选|


</template>
<script>
    export default {
        data() {
            return {
                sourceData: [
                    {
                        name: '李雷',
                        address: '北京市海淀区新建宫门路17号',
                        job: '前端开发工程师',
                        birth: '1994-03-11',
                        gender: '男'
                    }, {
                        name: '韩梅梅',
                        address: '北京市海淀区新建宫门路17号',
                        job: '架构师',
                        birth: '1996-09-27',
                        gender: '女'
                    }, {
                        name: '小明',
                        address: '北京市海淀区新建宫门路17号',
                        job: 'UI设计师',
                        birth: '1992-05-20',
                        gender: '男'
                    }
                ],
                columsMap: [
                    {
                        nameCol: {
                            title: '姓名',
                            prop: 'name'
                        },
                        jobCol: {
                            title: '职业',
                            prop: 'job'
                        },
                        addressCol: {
                            title: '地址',
                            prop: 'address'
                        }
                    },
                    {
                        nameCol: {
                            title: '姓名1',
                            prop: 'name'
                        },
                        jobCol: {
                            title: '职业1',
                            prop: 'job'
                        },
                        addressCol: {
                            title: '地址1',
                            prop: 'address'
                        },
                        jobCo2: {
                            title: '职业1',
                            prop: 'job'
                        }
                    },
                    {
                        nameCol: {
                            title: '姓名2',
                            prop: 'name'
                        },
                        jobCol: {
                            title: '职业2',
                            prop: 'job'
                        },
                        addressCol: {
                            title: '地址2',
                            prop: 'address'
                        },
                        addressCol3: {
                            title: '地址2',
                            prop: 'address'
                        }
                    },
                    {
                        nameCol: {
                            title: '姓名3',
                            prop: 'name'
                        },
                        jobCol: {
                            title: '职业3',
                            prop: 'job'
                        },
                        addressCol3: {
                            title: '地址23',
                            prop: 'address'
                        }
                    },
                    {
                        nameCol: {
                            title: '姓名4',
                            prop: 'name'
                        },
                        jobCol: {
                            title: '职业4',
                            prop: 'job'
                        },
                        addressCol3: {
                            title: '地址4',
                            prop: 'address'
                        },
                        addressCol4: {
                            title: '地址4',
                            prop: 'address'
                        }
                    },
                    {
                        addressCol3: {
                            title: '地址5',
                            prop: 'address'
                        },
                        nameCol: {
                            title: '姓名5',
                            prop: 'name'
                        },
                        jobCol: {
                            title: '职业5',
                            prop: 'job'
                        },
                        addressCol4: {
                            title: '地址5',
                            prop: 'address'
                        }
                    }
                ],
                singleMap: {
                    nameCol: {
                        title: '姓名2',
                        prop: 'name'
                    },
                    jobCol: {
                        title: '职业2',
                        prop: 'job'
                    },
                    addressCol: {
                        title: '地址2',
                        prop: 'address'
                    }
                },
                selectedValueList: ['小明'],
                selectedValue: '小明',
                order: 0
            };
        },
        methods: {
            tableRowClassName(row, index) {
                if (index === 0) {
                    return 'feStyle';
                }
                return '';
            },
            onUpdateSelectedValueList(valueList, dataList) {
                this.selectedValueList = valueList;
                console.log(dataList);
            },
            onUpdateSelectedValue(value, data) {
                this.selectedValue = value;
                console.log(data);
            },
            addColumn() {
                this.sourceData = [];
                this.order++;
                this.singleMap = this.columsMap[this.order];
                if (!this.singleMap) {
                    this.order = 0;
                    this.singleMap = this.columsMap[this.order];
                }
                this.sourceData = [
                    {
                        name: '李雷' + this.order,
                        address: '北京市海淀区新建宫门路17号',
                        job: '前端开发工程师',
                        birth: '1994-03-11',
                        gender: '男'
                    }, {
                        name: '韩梅梅' + this.order,
                        address: '北京市海淀区新建宫门路17号',
                        job: '架构师',
                        birth: '1996-09-27',
                        gender: '女'
                    }, {
                        name: '小明' + this.order,
                        address: '北京市海淀区新建宫门路17号',
                        job: 'UI设计师',
                        birth: '1992-05-20',
                        gender: '男'
                    }
                ];
            }
        }
    };
</script>
<style type="text/css">
    .x-table .nameStyle {
        background-color: #6BCFCD;
        color: #fff;
    }
    .x-table .feStyle {
        background-color: #6BCFCD;
        color: #fff;
    }
</style>