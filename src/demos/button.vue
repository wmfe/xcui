<template lang="md">
# Button 按钮

按钮用于开始一个即时操作。


## 按钮类型

::: demo 按钮有以下类型： `default`, `primary`, `info`, `success`, `warning`, `danger`，`dashed`，`link`。默认值为`default`。

```html

<tpl>
    <x-button>default</x-button>
    <x-button type="primary">primary</x-button>
    <x-button type="info">info</x-button>
    <x-button type="success">success</x-button>
    <x-button type="warning">warning</x-button>
    <x-button type="danger">danger</x-button>
    <x-button type="dashed">dashed</x-button>
    <x-button type="link">link</x-button>
</tpl>

```

:::


## 图标按钮

::: demo 当需要在`Button` 内嵌入 `Icon` 时，可以设置 `icon` 属性，或者直接在 `Button` 内使用 `Icon` 组件。

```html

<tpl>
    <x-button icon="search"></x-button>
    <x-button icon="edit" type="primary"></x-button>
    <x-button icon="checkmark" type="primary"></x-button>
    <x-button icon="plus-round" type="primary"></x-button>
    <x-button icon="search" type="info"></x-button>
    <x-button icon="search" type="info">搜索</x-button>
    <x-button icon="archive" type="success">导出数据</x-button>
</tpl>

```

:::

## 禁用状态

::: demo 通过设置`disabled`属性可以将按钮置为禁用状态。

```html

<tpl>
    <x-button :disabled="true">主要按钮</x-button>
    <x-button type="primary" :disabled="true">主要按钮</x-button>
    <x-button type="dashed" :disabled="true">主要按钮</x-button>
    <x-button type="link" :disabled="true">主要按钮</x-button>
</tpl>

```

:::

## 按钮尺寸

::: demo 通过设置`size`属性可以设定按钮的大小。

```html

<tpl>
    <x-button size="small">小尺寸small</x-button>
    <x-button>正常尺寸</x-button>
    <x-button size="large">大尺寸large</x-button>
</tpl>

```

:::

## 加载中状态

::: demo 通过设置`loading`属性可以设定按钮进入加载中状态。最后两个按钮演示点击后进入加载状态。当进入加载状态时，`button` 的任何鼠标事件均**不会触发**。
            

```html

<tpl>
    <x-button size="small" type="primary" :loading="true">Loading...</x-button>
    <x-button type="info" :loading="true">Loading...</x-button>
    <x-button type="primary" :loading="isLoadingA" @click="isLoadingA = true">点击加载</x-button>
    <x-button type="info" icon="heart" :loading="isLoadingB" @click="isLoadingB = true">{{isLoadingB ? '加载中...' : '点击加载'}}</x-button>
</tpl>
<script>
    export default {
        data() {
            return {
                isLoadingA: false
                isLoadingB: false
            }
        }
    }
</script>

```

:::


## 按钮组 

::: demo 以按钮组的方式出现，常用于多项类似操作。

```html

<tpl>
    <x-button-group>
        <x-button type="primary" icon="chevron-left">上一页</x-button>
        <x-button type="primary" icon="chevron-right">下一页</x-button>
    </x-button-group>
    <x-button-group>
        <x-button icon="refresh" type="info"></x-button>
        <x-button icon="information" type="info"></x-button>
        <x-button icon="edit" type="info"></x-button>
    </x-button-group>
    <x-button-group>
        <x-button>Cancel</x-button>
        <x-button type="info">OK</x-button>
    </x-button-group>
</tpl>

```

:::

## Props

| 名字 | 类型 | 默认 | 描述 | 是否必选 |可选值|
|-----|-----|-----|-----|----|----|----|
|size|String|无|尺寸|可选|small, large|
|type|String|无|类型|可选|primary, info, success, warning, danger, dashed, link|
|loading|Boolean|false|是否加载中状态|可选|true , false|
|disabled|Boolean|false|是否禁用|可选|true , false|
|icon|String|无|图标名，具体见icon组件名|可选||

## Events
|事件名|说明|返回值|设置属性|
|---|---|---|---|
|click|点击时触发|当前事件`event`|`@click`|

</template>

<script>
    export default {
        data() {
            return {
                isLoadingA: false,
                isLoadingB: false
            };
        },
        methods: {
        }
    };

</script>

