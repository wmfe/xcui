<template lang="md">
# Table 表格

用于展示多条结构化的数据，支持基础样式设置及单选、多选操作。



## 动态多级表头

::: demo 当表头需要分组，可以通过对表头多层嵌套实现
```html
<tpl>
    <div>
        <x-button type="success" @click="changeColumn">async</x-button>
        <x-table
            :data="sourceData"
            :initial-selected-value-list="selectedValueList"
            @selection-change="onUpdateSelectedValueList"
            bordered
        >
            <x-table-column
                type="selection"
                prop="name"
                width="50px"
            >
            selection
            </x-table-column>
            <x-table-column
                title="姓名"
                prop="name"
            >
            </x-table-column>
            <x-table-column
                title="职业"
                prop="job"
            >

                <x-table-column
                    title="之前职业"
                    prop="job"
                >
                    <x-table-column
                    :title="columnitem.title"
                    :prop="columnitem.prop"
                    v-for="(columnitem, name) in columsMap[order]"
                    >
                    {{columnitem.title}}
                    </x-table-column>

                </x-table-column>
                <x-table-column
                    title="当前职业"
                    prop="job"
                >
                </x-table-column>
            </x-table-column>
            <x-table-column
                title="地址"
                prop="address"
            >
            </x-table-column>
        </x-table>
        <p>选中项： {{selectedValueList}}</p>
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
                        job: '前端开发工程师',
                        birth: '1994-03-11',
                        gender: '男',
                        exjob: '配送员',
                        partjob: '产品经理',
                        alljob: '鼓励师'
                    }, {
                        name: '韩梅梅',
                        address: '北京市海淀区新建宫门路17号',
                        job: '架构师',
                        birth: '1996-09-27',
                        gender: '女',
                        exjob: '配送员',
                        partjob: '产品经理',
                        alljob: '鼓励师'
                    }, {
                        name: '小明',
                        address: '北京市海淀区新建宫门路17号',
                        job: 'UI设计师',
                        birth: '1992-05-20',
                        gender: '男',
                        exjob: '配送员',
                        partjob: '产品经理',
                        alljob: '鼓励师'
                    }
                ],
                selectedValueList: ['小明'],
                selectedValue: '小明',
                columsMap: [
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
                        jobCo2: {
                            title: '职业2',
                            prop: 'job'
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
                            title: '地址3',
                            prop: 'address'
                        }
                    }
                ],
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
            }
        }
    };
</script>
```
:::


## Table Props
| 名字 | 类型 | 默认 | 描述 | 是否必选 |
|-----|-----|-----|-----|----|
|data|Array|[]|表格数据|必选|
|height|Number|-|表格的高度|可选|
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
|fixed|String|-|可选值left、right|列是否固定在左侧或者右侧，必须设置列宽|

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
                columsMap: [
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
                        jobCo2: {
                            title: '职业2',
                            prop: 'job'
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
                            title: '地址3',
                            prop: 'address'
                        }
                    }
                ],
                order: 0,
                sourceData: [
                    {
                        name: '李雷',
                        address: '北京市海淀区新建宫门路17号',
                        job: '前端开发工程师',
                        birth: '1994-03-11',
                        gender: '男',
                        exjob: '配送员',
                        partjob: '产品经理',
                        alljob: '鼓励师'
                    }, {
                        name: '韩梅梅',
                        address: '北京市海淀区新建宫门路17号',
                        job: '架构师',
                        birth: '1996-09-27',
                        gender: '女',
                        exjob: '配送员',
                        partjob: '产品经理',
                        alljob: '鼓励师'
                    }, {
                        name: '小明',
                        address: '北京市海淀区新建宫门路17号',
                        job: 'UI设计师',
                        birth: '1992-05-20',
                        gender: '男',
                        exjob: '配送员',
                        partjob: '产品经理',
                        alljob: '鼓励师'
                    }
                ],
                sourceData1: [
                    {
                        name: '李雷',
                        address: '北京市海淀区新建宫门路17号',
                        job: '前端开发工程师'
                    }, {
                        name: '韩梅梅',
                        address: '北京市海淀区新建宫门路17号13单元3-501',
                        job: '架构师'
                    }, {
                        name: '小明',
                        address: '北京市海淀区新建宫门路17号',
                        job: 'UI设计师'
                    }
                ],
                sourceData2: [
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
                    }, {
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
                    }, {
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
                sourceData3: [
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
                selectedValueList: ['小明'],
                selectedValue: '小明'
            };
        },
        methods: {
            //改变表头元素绑定的数据
            changeColumn() {
                let order = this.order + 1;
                this.columsMap[order] ? this.order++ : this.order = 0;
            },
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