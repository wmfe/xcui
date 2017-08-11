<template lang="md">
# Collapse 折叠面板

## 概述

点击面板，实现内容区域的展示和隐藏

## 基础模式

::: demo 以面板组的方式出现，常用于多项类似操作。通过v-model绑定数组，可以设置默认展开的项，并且也可以获取当前展开面板的id数组。

```html

<tpl>
    <x-collapse v-model="opens1">
        <x-collapse-item id="1">
            <span slot="titleRight">This is panel header 1</span>
            <div class="eg-class">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </x-collapse-item>
        <x-collapse-item id="2">
            <span slot="titleRight">This is panel header 2</span>
            <div class="eg-class">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </x-collapse-item>
        <x-collapse-item id="3">
            <span slot="titleRight">This is panel header 3</span>
            <div class="eg-class">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </x-collapse-item>
    </x-collapse>
    <p style="margin-top: 15px;">
        当前展开的面板值数组： {{opens1}}
    </p>

<script>
    export default {
        data() {
            return {
                opens1: ['1', '2']，
            };
        }
    };
</script>

<style>
    .eg-class{
        width: 80%;
    }
</style>

</tpl>

```

:::

## 手风琴模式（每次只能打开一个面板）

::: demo 通过设置open-only-one，实现每次最多只能打开一个面板，其他展开面板自动折叠。

```html

<tpl>
    <x-collapse v-model="opens" :open-only-one="openOnlyOne">
        <x-collapse-item id="1">
            <span slot="titleRight">This is panel header 1</span>
            <div class="eg-class">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </x-collapse-item>
        <x-collapse-item id="2">
            <span slot="titleRight">This is panel header 2</span>
            <div class="eg-class">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.  culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </x-collapse-item>
        <x-collapse-item id="3">
            <span slot="titleRight">This is panel header 3</span>
            <div class="eg-class">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </x-collapse-item>
    </x-collapse>

<script>
    export default {
        data() {
            return {
                opens: ['1'],
                openOnlyOne: true
            };
        }
    };
</script>

<style>
    .eg-class{
        width: 80%;
    }
</style>

</tpl>

```

:::

## 自定义面板头

::: demo 通过添加titleRight和titleLeft两个solt可以灵活设置箭头图标左右两侧的内容

```html

<tpl>
    <x-collapse v-model="opens" :open-only-one="openOnlyOne">
        <x-collapse-item id="1">
            <span slot="titleLeft" class="title-left">This is panel header 1</span>
            <span slot="titleRight" class="title-right">
                <x-icon name="outlet" size="16"></x-icon>
            </span>
            <div class="eg-class">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </x-collapse-item>
        <x-collapse-item id="2">
            <span slot="titleLeft" class="title-left">This is panel header 1</span>
            <span slot="titleRight" class="title-right">
                <x-icon name="outlet" size="16"></x-icon>
            </span>
            <div class="eg-class">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </x-collapse-item>
        <x-collapse-item id="3">
            <span slot="titleLeft" class="title-left">This is panel header 1</span>
            <span slot="titleRight" class="title-right">
                <x-icon name="outlet" size="16"></x-icon>
            </span>
            <div class="eg-class">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </x-collapse-item>
    </x-collapse>

<script>
    export default {
        data() {
            return {
                opens: ['1'],
                openOnlyOne: true
            };
        }
    };
</script>
<style>
    .title-right{
        float: right;
    }
    .title-left{
        padding-right: 300px;
    }
    .eg-class{
        width: 80%;
    }
</style>

</tpl>

```

:::

## Collapse Props

| 名字 | 类型 | 默认 | 描述 | 是否必选 |可选值|
|-----|-----|-----|-----|----|----|----|
|value|Array|[]|默认展开项的id|可选|无|
|openOnlyOne|Boolean|false|是否每次最多只能展开一项|可选|true, false|


## Collapse Events
|事件名|说明|返回参数|设置属性|
|---|---|---|---|
|change|展开项发生变更触发|当前展开项集合的数组|`@change`|

## CollapseItem Props

| 名字 | 类型 | 默认 | 描述 | 是否必选 |可选值|
|-----|-----|-----|-----|----|----|----|
|id|String|无|每项的唯一标识|必选|无|
|iconUpName|String|chevron-up|关闭状态图标名称|可选|见xcui的图标库名称|
|iconDownName|String|chevron-down|展开状态图标名称|可选|见xcui的图标库名称|


## CollapseItem Slot

| 名字 | 类型 | 默认 | 描述 | 是否必选 |可选值|
|-----|-----|-----|-----|----|----|----|
|titleLeft|String|无|图标左侧slot|可选|无|
|titleRight|String|无|图标右侧slot|可选|无|


</template>

<script>
    import('#/collapse.less');
    export default {
        data() {
            return {
                opens1: ['1', '2'],
                opens: ['1'],
                openOnlyOne: true
            };
        },
        methods: {
        }
    };

</script>
<style>
    .title-right{
        float: right;
    }
    .title-left{
        padding-right: 300px;
    }
    .eg-class{
        width: 80%;
    }
</style>

