<template lang="md">
# Table 表格

用于展示多条结构化的数据，支持基础样式设置及单选、多选操作。

## 基础使用

::: demo 表格的基本使用。

```html
<tpl>
    <div>
        <x-table :data="sourceData">
            <x-table-column
                title="姓名"
                prop="name"
            >
            </x-table-column>
            <x-table-column
                title="职业"
                prop="job"
            >
            </x-table-column>
            <x-table-column
                title="地址"
                prop="address"
            >
            </x-table-column>
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

```
:::

## 带边框表格

::: demo 默认情况下，Table 组件是没有边框的，可以通过`bordered`属性，它接受一个`Boolean`，设置为`true`即可启用。

```html

<tpl>
    <div>
        <x-table :data="sourceData" bordered>
            <x-table-column
                title="姓名"
                prop="name"
            >
            </x-table-column>
            <x-table-column
                title="职业"
                prop="job"
            >
            </x-table-column>
            <x-table-column
                title="地址"
                prop="address"
            >
            </x-table-column>
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
```
:::

## 带斑马纹表格

::: demo 默认情况下，Table 没有斑马纹，可以通过`striped`属性，它接受一个`Boolean`，设置为`true`即可启用。

```html

<tpl>
    <div>
        <x-table :data="sourceData" striped>
            <x-table-column
                title="姓名"
                prop="name"
            >
            </x-table-column>
            <x-table-column
                title="职业"
                prop="job"
            >
            </x-table-column>
            <x-table-column
                title="地址"
                prop="address"
            >
            </x-table-column>
        </x-table>
    </div>
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
</tpl>

```
:::

## 宽度自定义

::: demo 默认情况下，Table 组件撑满父元素，可通过设置`x-table-column`的`width`控制列宽。

```html

<tpl>
    <div>
        <x-table :data="sourceData" bordered>
            <x-table-column
                title="姓名"
                prop="name"
            >
            </x-table-column>
            <x-table-column
                title="地址"
                prop="address"
                width="250px"
            >
            </x-table-column>
            <x-table-column
                title="性别"
                prop="gender"
                width="100px"
            >
            </x-table-column>
            <x-table-column
                title="生日"
                prop="birth"
                width="150px"
            >
            </x-table-column>
            <x-table-column
                title="职业"
                prop="job"
            >
            </x-table-column>
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
                ]
            };
        }
    };
</script>
```
:::

## 列样式自定义

::: demo 通过`x-table-column`的`class-name`指定特殊列的样式。

```html
<tpl>
    <div>
        <x-table :data="sourceData">
            <x-table-column
                title="姓名"
                prop="name"
                class-name="nameStyle"
            >
            </x-table-column>
            <x-table-column
                title="职业"
                prop="job"
            >
            </x-table-column>
            <x-table-column
                title="地址"
                prop="address"
            >
            </x-table-column>
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
                ],
            };
        }
    };
</script>
<style type="text/css">
    .x-table .nameStyle {
        background-color: #6BCFCD;
        color: #fff;
    }
</style>

```
:::

## 行样式自定义

::: demo 通过`row-class-name`指定特殊行的样式，接受`String` 或 `Function`。

```html
<tpl>
    <div>
        <x-table :data="sourceData" :row-class-name="tableRowClassName">
            <x-table-column
                title="姓名"
                prop="name"
            >
            </x-table-column>
            <x-table-column
                title="职业"
                prop="job"
            >
            </x-table-column>
            <x-table-column
                title="地址"
                prop="address"
            >
            </x-table-column>
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
                ],
            };
        },
        methods: {
            tableRowClassName(row, index) {
                if (index === 0) {
                    return 'feStyle';
                }
                return '';
            }
        }
    };
</script>
<style type="text/css">
    .x-table .feStyle {
        background-color: #6BCFCD;
        color: #fff;
    }
</style>

```
:::

## 单行显示

::: demo 默认情况下，当内容过长时，折行显示，可以通过`x-table-column`的`single-line`进行单行展示并在超长时显示`title`

```html
<tpl>
    <div>
        <x-table
            :data="sourceData1">
            <x-table-column
                title="姓名"
                prop="name"
            >
            </x-table-column>
            <x-table-column
                title="职业"
                prop="job"
            >
            </x-table-column>
            <x-table-column
                title="地址"
                prop="address"
                single-line
            >
            </x-table-column>
        </x-table>
    </div>
</tpl>
<script>
    export default {
        data() {
            return {
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
                ]
            };
        }
    };
</script>
```
:::

## 无数据

::: demo 在没有数据情况下，使用`empty-tip`设置文案，默认为`暂无数据`。

```html
<tpl>
    <div>
        <x-table
            :data="[]"
            :empty-tip="'暂时没有数据哦'">
            <x-table-column
                title="姓名"
                prop="name"
            >
            </x-table-column>
            <x-table-column
                title="职业"
                prop="job"
            >
            </x-table-column>
            <x-table-column
                title="地址"
                prop="address"
            >
            </x-table-column>
        </x-table>
    </div>
</tpl>
```
:::

## 列模板自定义

::: demo 可以自己配置列内容以及表头内容，未命名模版为列内容，设置名称为“column-header-slot”则为表头自定义模版，无该模版则默认显示title文案。

```html
<tpl>
    <div>
        <x-table :data="sourceData">
            <x-table-column
                title="姓名"
                prop="name"
            >
                <template slot-scope="props">
                    <a href="javascript:void(0)">
                    {{props.dataItem.name}}
                    </a>
                </template>
            </x-table-column>
            <x-table-column
                title="地址"
                prop="address"
            >
            <template slot-scope="props" slot="column-header-slot">
                {{props.columnItem.title}}
                <x-tooltip content="Sample Text" title="Title">
                        <x-icon name="help-circled" size="16"></x-icon>
                </x-tooltip>
            </template>

            </x-table-column>
            <x-table-column
                title="职业"
                prop="job"
            >
                <template slot-scope="props">
                    <x-tag>{{props.dataItem.job}}</x-tag>
                </template>
            </x-table-column>
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
                ],
            };
        }
    };
</script>
```
:::

## 单选

::: demo 通过设置`x-table-column`的`type`为`radio`进行单选。

```html
<tpl>
    <div>
        <x-table
            :data="sourceData"
            :initial-selected-value="selectedValue"
            @radio-change="onUpdateSelectedValue"
        >
            <x-table-column
                type="radio"
                prop="name"
                width="50px"
            >
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
            </x-table-column>
            <x-table-column
                title="地址"
                prop="address"
            >
            </x-table-column>
        </x-table>
        <p>选中项： {{selectedValue}}</p>
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
                ],
                selectedValue: '小明'
            };
        },
        methods: {
            onUpdateSelectedValue(value, dataList) {
                this.selectedValue = value;
                console.log(dataList);
            }
        }
    };
</script>
```
:::
## 多选

::: demo 使用`checkbox`进行多选，通过设置`x-table-column`的`type`为`selection`进行多选
```html
<tpl>
    <div>
        <x-table
            :data="sourceData"
            :initial-selected-value-list="selectedValueList"
            @selection-change="onUpdateSelectedValueList"
        >
            <x-table-column
                type="selection"
                prop="name"
                width="50px"
            >
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
                ],
                selectedValueList: ['小明']
            };
        },
        methods: {
            onUpdateSelectedValueList(value, data) {
                this.selectedValueList = value;
                console.log(data);
            }
        }
    };
</script>
```

:::
## 表头固定

::: demo 只要在`x-table`元素中定义了`height`，当纵向内容过多时，表格自动固定表头。
```html
<tpl>
    <div>
        <x-table
            :data="sourceData2"
            height="250"
        >
            <x-table-column
                title="姓名"
                prop="name"
            >
            </x-table-column>
            <x-table-column
                title="职业"
                prop="job"
            >
            </x-table-column>
            <x-table-column
                title="地址"
                prop="address"
            >
            </x-table-column>
        </x-table>
    </div>
</tpl>
<script>
    export default {
        data() {
            return {
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
                ]
            };
        }
    };
</script>
```
:::

## 列固定

::: demo 当表格横向数据很多时，可以选择固定列。只支持第一列左固定，最后一列右固定。**注意**：当表格宽度小于所有列的宽度之和时才会展示效果
```html
<tpl>
    <div>
        <x-table
            :data="sourceData3"
        >
            <x-table-column
                title="姓名"
                prop="name"
                width="150px"
                fixed="left"
            >
            </x-table-column>
            <x-table-column
                title="地址"
                prop="address"
                width="250px"
            >
            </x-table-column>
            <x-table-column
                title="性别"
                prop="gender"
                width="100px"
            >
            </x-table-column>
            <x-table-column
                title="生日"
                prop="birth"
                width="200px"
            >
            </x-table-column>
            <x-table-column
                title="职业"
                prop="job"
                width="180px"
                fixed="right"
            >
            </x-table-column>
        </x-table>
    </div>
</tpl>
<script>
    export default {
        data() {
            return {
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
                ]
            };
        }
    };
</script>
```
:::

## 固定表头和列

::: demo 表格内容很多时，支持同时设置固定表头，固定列。
```html
<tpl>
    <div>
        <x-table
            :data="sourceData2"
            height="250"
        >
            <x-table-column
                title="姓名"
                prop="name"
                width="150px"
                fixed="left"
            >
            </x-table-column>
            <x-table-column
                title="地址"
                prop="address"
                width="250px"
            >
            </x-table-column>
            <x-table-column
                title="性别"
                prop="gender"
                width="100px"
            >
            </x-table-column>
            <x-table-column
                title="生日"
                prop="birth"
                width="200px"
            >
            </x-table-column>
            <x-table-column
                title="职业"
                prop="job"
                width="180px"
                fixed="right"
            >
            </x-table-column>
        </x-table>
    </div>
</tpl>
<script>
    export default {
        data() {
            return {
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
                ]
            };
        }
    };
</script>
```
:::

## 多级表头

::: demo 当表头需要分组，可以通过对表头多层嵌套实现
```html
<tpl>
    <div>
        <x-table
            :data="sourceData"
            :initial-selected-value-list="selectedValueList"
            bordered
        >
            <x-table-column
                type="selection"
                prop="name"
                width="50px"
            >
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
                        title="兼职"
                        prop="exjob"
                    >
                    </x-table-column>
                    <x-table-column
                        title="实习"
                        prop="partjob"
                    >
                    </x-table-column>
                    <x-table-column
                        title="全职"
                        prop="alljob"
                    >
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
            };
        }
    };
</script>
```
:::

## Table Props
| 名字 | 类型 | 默认 | 描述 | 是否必选 |
|-----|-----|-----|-----|----|
|data|Array|[]|表格数据|必选|
|height|Number|-|表格的最大高度|可选|
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
    import '#/tooltip.less';
    import '#/tag.less';
    import '#/table.less';
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
<style lang="less">
    @import "../../src/less/theme/default.less";
    .x-table .nameStyle {
        background-color: @brand-primary;
        color: #fff;
    }
    .x-table .feStyle {
        background-color: @brand-primary;
        color: #fff;
    }
</style>
