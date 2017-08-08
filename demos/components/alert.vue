<template lang="md">

# Alert 警告提示

警告提示，展现需要关注的信息。

## 基础使用

::: demo 最简单的警告提示。使用`type`来设置类型颜色。

```html

<tpl>
   <x-alert type="info" title="信息提示文案"></x-alert>
   <x-alert type="warning" title="警告提示文案"></x-alert>
   <x-alert type="success" title="成功提示文案"></x-alert>
   <x-alert type="error" title="错误提示文案"></x-alert>
</tpl>

```

:::

## 可关闭的警告提示

::: demo 通过设置`closable`来给警告增加可关闭功能。可通过`close-text`来自定义关闭文字, 通过注册`@close`来监听关闭事件，执行关闭时的回调。

```html

<tpl>
   <x-alert type="info" title="信息提示文案" closable></x-alert>
   <x-alert type="warning" title="警告提示文案" closable></x-alert>
   <x-alert type="success" title="成功提示文案" closable></x-alert>
   <x-alert type="error" title="错误提示文案" closable></x-alert>
   <x-alert type="info" title="自定义关闭文案" closable close-text="关闭"></x-alert>
   <x-alert type="success" title="定义了关闭时的回调" closable @close="handleClose"></x-alert>
</tpl>

<script>
export default {
    methods: {
        handleClose() {
            this.$Message.success('点击了关闭');
        }
    }
}
</script>

```

## 带图标的警告提示

::: demo 通过设置`show-icon`来给警告增加图标。

```html

<tpl>
   <x-alert type="info" title="信息提示文案" closable show-icon></x-alert>
   <x-alert type="warning" title="警告提示文案" closable show-icon></x-alert>
   <x-alert type="success" title="成功提示文案" closable show-icon></x-alert>
   <x-alert type="error" title="错误提示文案" closable show-icon></x-alert>
</tpl>

```

:::


## 带有辅助性文字和图标

::: demo 通过设置`description`来给警告增加辅助性文字。当设置了`description`，且`show-icon`为true时，会切换到大图标模式。

```html

<tpl>
    <x-alert type="info" title="信息提示文案"
        description="这是辅助性文案，这是辅助性文案，这是辅助性文案"
        closable
        show-icon></x-alert>
    <x-alert type="warning" title="信息提示文案"
        description="这是辅助性文案，这是辅助性文案，这是辅助性文案"
        closable
        show-icon></x-alert>
    <x-alert type="success" title="信息提示文案"
        description="这是辅助性文案，这是辅助性文案，这是辅助性文案"
        closable
        show-icon></x-alert>
    <x-alert type="error" title="信息提示文案"
        description="这是辅助性文案，这是辅助性文案，这是辅助性文案"
        closable
        show-icon></x-alert>
</tpl>

```

:::


## Alert Props

| 名字 | 类型 | 默认 | 描述 | 是否必选 |可选值|
|---|---|---|---|---|---|---|
|type|String|无|触发元素颜色类型|否|`info`, `success`, `warning`, `error`|
|closable|Boolean|false|是否可关闭|否|true/false|
|closeText|String|无|关闭文本（用于替代关闭图标）|否|-|
|title|String|无|警告提示标题|否|-|
|description|String|无|辅助性文字|否|-|
|showIcon|Boolean|false|是否显示图标|否|true/false|


## Alert Events

|事件名|说明|返回值|设置属性|
|---|---|---|---|
|close|关闭按钮时的回调|无|`@close`|

## Alert Slot
| 名字 | 描述 |
|-----|-----|
|-|默认slot, 对应`description`|

</template>

<script>
export default {
    methods: {
        handleClose() {
            this.$Message.success('点击了关闭');
        }
    }
}
</script>

<style lang="less">
    .demo-alert {
        .x-alert {
            margin-top: 15px;
        }
    }
</style>


