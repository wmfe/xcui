<template lang="md">
# Checkbox 多选框

## 概述

在一组可选项中进行选择时使用。

## 基础用法

::: demo 在`x-checkbox`中使用`v-model`绑定变量，默认绑定变量的值是`Boolean`, 选中时为`true`。

```html

<tpl>
    <x-checkbox v-model="checked0">备选项</x-checkbox>
</tpl>

<script>
    export default {
        data() {
            return {
                checked0: false,
            };
        }
    };
</script>

```

:::

## 禁用状态

::: demo 通过使用`disabled`属性可以设置多选框的禁用状态。

```html

<tpl>
    <x-checkbox v-model="checked2" :disabled="true">备选项</x-checkbox>
    <x-checkbox v-model="checked3" :disabled="true">备选项</x-checkbox>
</tpl>

<script>
    export default {
        data() {
            return {
                checked2: true,
                checked3: false
            };
        }
    };
</script>

```

:::

## 多选框组

::: demo 通过将`x-checkbox`作为`x-checkbox-group`的直接子元素，可以建立组合的多选框。

```html

<tpl>
    <x-checkbox-group v-model="checklist">
        <x-checkbox value="未开始">未开始</x-checkbox>
        <x-checkbox value="进行中">进行中</x-checkbox>
        <x-checkbox value="已完成">已完成</x-checkbox>
        <x-checkbox value="已分配" :disabled="true">已分配</x-checkbox>
        <x-checkbox value="已废弃" :disabled="true">已废弃</x-checkbox>
    </x-checkbox-group>
    <p style="margin-top: 15px;">
        选中的值数组： {{checklist}}
    </p>
</tpl>

<script>
    export default {
        data() {
            return {
                checklist: ['已完成', '已分配']
            };
        }
    };
</script>

```

:::

## 全选和部分选中

::: demo `indeterminate`属性表示多选框的不确定状态，常用于实现部分选中功能。本例实现了全选和部分选中功能。

```html

<tpl>
    <x-checkbox :indeterminate="indeterminate" v-model="checkAll" @change="handleCheckAll">全选</x-checkbox>
    <x-checkbox-group v-model="checkedRoles" @change="handleCheckRole" style="display:inline-block; margin-left: 15px;">
        <x-checkbox value="销售">销售</x-checkbox>
        <x-checkbox value="运营">运营</x-checkbox>
        <x-checkbox value="研发">研发</x-checkbox>
        <x-checkbox value="测试">测试</x-checkbox>
    </x-checkbox-group>
</tpl>

<script>
    export default {
        data() {
            return {
                checkedRoles: ['销售'],
                indeterminate: true,
                checkAll: false,
                roleList: ['销售', '运营', '研发', '测试']
            };
        },
        methods: {
            handleCheckAll(e) {
                this.checkedRoles = e.target.checked ? this.roleList : [];
            },
            handleCheckRole(val) {
                let count = val.length;
                this.checkAll = count === this.roleList.length;
                this.indeterminate = count > 0 && count < this.roleList.length;
            }
        }
    };
</script>

```

:::


## Checkbox Props
| 名字 | 类型 | 默认 | 描述 | 是否必选 |可选值|
|-----|-----|-----|-----|----|----|----|
|v-model|Boolean||绑定值|单选框时必选|true,false|
|value|String, Number, Boolean|无||仅在使用多选框组合时起作用，此场景下必填，指定当前选项的`value`值，会自动判断是否选中||
|disabled|Boolean|false|禁用状态|可选|`true`, `false`|
|interminate|Boolean|false|不确定状态|可选||

## Checkbox Events

|事件名|说明|返回值|设置属性|
|---|---|---|---|
|change|多选框值改变时触发|当前事件`event`|`@change`|

## Checkbox Slot

|名称|说明|
|---|---|
|default|默认内容，放在`<x-checkbox></x-checkbox>`之间即可|

## CheckboxGroup Props
| 名字 | 类型 | 默认 | 描述 | 是否必选 |可选值|
|-----|-----|-----|-----|----|----|----|
|v-model|Array||绑定值|必选||

## CheckboxGroup Events
|事件名|说明|返回值|设置属性|
|---|---|---|---|
|change|多选框值改变时触发|当前事件`event`|`@change`|



</template>
<script>
    require('#/checkbox.less');
    export default {
        data() {
            return {
                checked0: false,
                checked1: true,
                checked2: true,
                checked3: false,
                checklist: ['已完成', '已分配'],
                checkedRoles: ['销售'],
                indeterminate: true,
                checkAll: false,
                roleList: ['销售', '运营', '研发', '测试']
            };
        },
        methods: {
            handleCheckAll(e) {
                this.checkedRoles = e.target.checked ? this.roleList : [];
            },
            handleCheckRole(val) {
                let count = val.length;
                this.checkAll = count === this.roleList.length;
                this.indeterminate = count > 0 && count < this.roleList.length;
            }
        }
    };
</script>
