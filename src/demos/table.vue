<template lang="md">
# Table 表格

用于展示多条结构化的数据，支持基础样式设置及多选操作。

## 基础使用

::: demo 表格的基本使用。

```html
<tpl>
    <div>
        <x-table :data="sourceData">
            <x-table-column
                title="姓名"
                dataKeyName="name"
            >
            </x-table-column>
            <x-table-column
                title="职业"
                dataKeyName="job"
            >
            </x-table-column>
            <x-table-column
                title="地址"
                dataKeyName="address"
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
                        address: '北京市海淀区上地信息路甲9号',
                        job: '前端开发工程师'
                    }, {
                        name: '韩梅梅',
                        address: '北京市海淀区上地信息路甲9号',
                        job: '架构师'
                    }, {
                        name: '小明',
                        address: '北京市海淀区上地信息路甲9号',
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

::: demo 默认情况下，Table 组件是不具有竖直方向的边框的，可以通过`border`属性，它接受一个`Boolean`，设置为`true`即可启用。

```html

<tpl>
    <div>
        <x-table :data="sourceData" border>
            <x-table-column
                title="姓名"
                dataKeyName="name"
            >
            </x-table-column>
            <x-table-column
                title="职业"
                dataKeyName="job"
            >
            </x-table-column>
            <x-table-column
                title="地址"
                dataKeyName="address"
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
                        address: '北京市海淀区上地信息路甲9号',
                        job: '前端开发工程师'
                    }, {
                        name: '韩梅梅',
                        address: '北京市海淀区上地信息路甲9号',
                        job: '架构师'
                    }, {
                        name: '小明',
                        address: '北京市海淀区上地信息路甲9号',
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

::: demo 默认情况下，Table 没有斑马纹，可以通过`stripe`属性，它接受一个`Boolean`，设置为`true`即可启用。

```html

<tpl>
    <div>
        <x-table :data="sourceData" stripe>
            <x-table-column
                title="姓名"
                dataKeyName="name"
            >
            </x-table-column>
            <x-table-column
                title="职业"
                dataKeyName="job"
            >
            </x-table-column>
            <x-table-column
                title="地址"
                dataKeyName="address"
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
                        address: '北京市海淀区上地信息路甲9号',
                        job: '前端开发工程师'
                    }, {
                        name: '韩梅梅',
                        address: '北京市海淀区上地信息路甲9号',
                        job: '架构师'
                    }, {
                        name: '小明',
                        address: '北京市海淀区上地信息路甲9号',
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
        <x-table :data="sourceData" border>
            <x-table-column
                title="姓名"
                dataKeyName="name"
            >
            </x-table-column>
            <x-table-column
                title="地址"
                dataKeyName="address"
                width="250px"
            >
            </x-table-column>
            <x-table-column
                title="性别"
                dataKeyName="gender"
                width="100px"
            >
            </x-table-column>
            <x-table-column
                title="生日"
                dataKeyName="birth"
                width="150px"
            >
            </x-table-column>
            <x-table-column
                title="职业"
                dataKeyName="job"
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
                        address: '北京市海淀区上地信息路甲9号',
                        job: '前端开发工程师',
                        birth: '1994-03-11',
                        gender: '男'
                    }, {
                        name: '韩梅梅',
                        address: '北京市海淀区上地信息路甲9号',
                        job: '架构师',
                        birth: '1996-09-27',
                        gender: '女'
                    }, {
                        name: '小明',
                        address: '北京市海淀区上地信息路甲9号',
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

::: demo 通过`x-table-column`的`className`指定特殊列的样式。

```html
<tpl>
    <div>
        <x-table :data="sourceData">
            <x-table-column
                title="姓名"
                dataKeyName="name"
                className="nameStyle"
            >
            </x-table-column>
            <x-table-column
                title="职业"
                dataKeyName="job"
            >
            </x-table-column>
            <x-table-column
                title="地址"
                dataKeyName="address"
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
                        address: '北京市海淀区上地信息路甲9号',
                        job: '前端开发工程师'
                    }, {
                        name: '韩梅梅',
                        address: '北京市海淀区上地信息路甲9号',
                        job: '架构师'
                    }, {
                        name: '小明',
                        address: '北京市海淀区上地信息路甲9号',
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

::: demo 通过`rowClassName`指定特殊行的样式，接受`String` 或 `Function`。

```html
<tpl>
    <div>
        <x-table :data="sourceData" :rowClassName="tableRowClassName">
            <x-table-column
                title="姓名"
                dataKeyName="name"
            >
            </x-table-column>
            <x-table-column
                title="职业"
                dataKeyName="job"
            >
            </x-table-column>
            <x-table-column
                title="地址"
                dataKeyName="address"
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
                        address: '北京市海淀区上地信息路甲9号',
                        job: '前端开发工程师'
                    }, {
                        name: '韩梅梅',
                        address: '北京市海淀区上地信息路甲9号',
                        job: '架构师'
                    }, {
                        name: '小明',
                        address: '北京市海淀区上地信息路甲9号',
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

## 列模板自定义

::: demo 可以自己配置列内容。

```html
<tpl>
    <div>
        <x-table :data="sourceData">
            <x-table-column
                title="姓名"
                dataKeyName="name"
            >
                <template scope="props">
                    <a href="javascript:void(0)">
                    {{props.dataItem.name}}
                    </a>
                </template>
            </x-table-column>
            <x-table-column
                title="地址"
                dataKeyName="address"
            >
            </x-table-column>
            <x-table-column
                title="职业"
                dataKeyName="job"
            >
                <template scope="props">
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
                        address: '北京市海淀区上地信息路甲9号',
                        job: '前端开发工程师'
                    }, {
                        name: '韩梅梅',
                        address: '北京市海淀区上地信息路甲9号',
                        job: '架构师'
                    }, {
                        name: '小明',
                        address: '北京市海淀区上地信息路甲9号',
                        job: 'UI设计师'
                    }
                ],
            };
        }
    };
</script>
```
:::

## 多选

::: demo 使用`checkbox`进行多选，推荐`id`或`index`作为`uniqleKeyName`

```html
<tpl>
    <div>
        <x-table
            :data="sourceData"
            uniqleKeyName="name"
            selectable
            :initialSelectedItemList="selectedItemList"
            @update:selectedItemList="onUpdateSelectedItem"
        >
            <x-table-column
                title="姓名"
                dataKeyName="name"
            >
            </x-table-column>
            <x-table-column
                title="职业"
                dataKeyName="job"
            >
            </x-table-column>
            <x-table-column
                title="地址"
                dataKeyName="address"
            >
            </x-table-column>
        </x-table>
        {{selectedItemList}}
    </div>
</tpl>
<script>
    export default {
        data() {
            return {
                sourceData: [
                    {
                        name: '李雷',
                        address: '北京市海淀区上地信息路甲9号',
                        job: '前端开发工程师'
                    }, {
                        name: '韩梅梅',
                        address: '北京市海淀区上地信息路甲9号',
                        job: '架构师'
                    }, {
                        name: '小明',
                        address: '北京市海淀区上地信息路甲9号',
                        job: 'UI设计师'
                    }
                ],
                selectedItemList: ['小明']
            };
        },
        methods: {
            onUpdateSelectedItem(value) {
                this.selectedItemList = value;
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
|border|Boolean|false|是否带边框|可选|
|stripe|Boolean|false|是否带斑马纹|可选|
|rowClassName|String or Function|-|自定义行 className|可选|
|uniqleKeyName|String|-|多选时用来标识每行数据中具有唯一性的值的 key|可选|
|initialSelectedItemList|Array|[]|选中项对应 uniqleKeyName 的值|可选|

## Table-column Props
| 名字 | 类型 | 默认 | 描述 | 是否必选 |
|-----|-----|-----|-----|----|
|title|String|-|显示的标题|必选|
|dataKeyName|String|-|对应列内容的字段名|必选|
|width|String|-|列宽|可选|
|className|String|-|自定义列 className|可选|

</template>
<script>
    export default {
        data() {
            return {
                sourceData: [
                    {
                        name: '李雷',
                        address: '北京市海淀区上地信息路甲9号',
                        job: '前端开发工程师',
                        birth: '1994-03-11',
                        gender: '男'
                    }, {
                        name: '韩梅梅',
                        address: '北京市海淀区上地信息路甲9号',
                        job: '架构师',
                        birth: '1996-09-27',
                        gender: '女'
                    }, {
                        name: '小明',
                        address: '北京市海淀区上地信息路甲9号',
                        job: 'UI设计师',
                        birth: '1992-05-20',
                        gender: '男'
                    }
                ],
                selectedItemList: ['小明']
            };
        },
        methods: {
            tableRowClassName(row, index) {
                if (index === 0) {
                    return 'feStyle';
                }
                return '';
            },
            onUpdateSelectedItem(value) {
                this.selectedItemList = value;
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