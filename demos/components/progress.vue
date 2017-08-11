<template lang="md">
# Progress进度条

用于展示操作进度，告知用户当前状态和预期。

## 线形进度条 - 百分比外显


::: demo 通过设置percentage属性表示进度条对应的百分比，值范围必须在 0-100。

```html

<tpl>
    <div style="width: 300px;">
        <x-progress :percentage="0"></x-progress>
        <x-progress :percentage="70"></x-progress>
        <x-progress :percentage="100" status="success"></x-progress>
        <x-progress :percentage="50" status="exception"></x-progress>
    </div>
</tpl>

```

:::

## 线形进度条 - 百分比内显

::: demo 通过 `stroke-width` 属性更改进度条的高度，并可通过 `text-inside` 属性来将进度条描述置于进度条内部。

```html

<tpl>
    <div style="width: 300px;">
        <x-progress text-inside :stroke-width="18" :percentage="0"></x-progress>
        <x-progress text-inside :stroke-width="18" :percentage="70"></x-progress>
        <x-progress text-inside :stroke-width="18" :percentage="100" status="success"></x-progress>
        <x-progress text-inside :stroke-width="18" :percentage="50" status="exception"></x-progress>
    </div>
</tpl>

```

:::

## 环形进度条

::: demo 可通过 `type` 属性来指定使用环形进度条，在环形进度条中，还可以通过 `width` 属性来设置其大小。

```html

<tpl>
    <x-progress type="circle" :percentage="0"></x-progress>
    <x-progress type="circle" :percentage="25"></x-progress>
    <x-progress type="circle" :percentage="100" status="success"></x-progress>
    <x-progress type="circle" :percentage="50" status="exception"></x-progress>
</tpl>

```

:::


## Props

| 名字 | 类型 | 默认 | 描述 | 是否必选 |可选值|
|-----|-----|-----|-----|-----|-----|-----|
|percentage|Number|0|百分比| 必选 ||
|type|String|line|进度条类型|可选|line/circle|
|stroke-width|Number|6|进度条的宽度，单位 px|可选||
|text-inside|Boolean|false|进度条显示文字内置在进度条内（只在 type=line 时可用）|可选|true/false|
|status|String|无|进度条当前状态|可选|success/exception|
|width|Number|126|环形进度条宽度（只在 type=circle 时可用）|可选||
|show-text|Boolean|true|是否显示进度条文字内容|可选|true，false|


</template>

<script>
import('#/progress.less');
</script>

<style>
    .x-progress{
        margin-top: 15px;
    }
</style>
