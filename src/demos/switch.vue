<template lang="md">
# Switch 开关

开关选择，当需要表示开关状态/两种状态之间的切换时使用。

## 基本使用

::: demo 基本使用，定义`v-model`的值为`Boolean`, 控制开关的开与关。

```html

<tpl>
    <x-switch v-model="status1"></x-switch>
</tpl>

<script>
    export default {
        data() {
            return {
                status1: false
            };
        }
    };
</script>

```

:::

## 禁用状态

::: demo 通过设置`disabled`属性为`true`可以禁用开关。

```html

<tpl>
    <x-switch v-model="status2" :disabled="true"></x-switch>
</tpl>

<script>
    export default {
        data() {
            return {
                status2: true
            };
        }
    };
</script>

```

:::

## 定义开关时的文字

::: demo 通过设置`on-text`属性可以控制开关开启时的显示文字，通过设置`off-text`属性可以控制开关关闭时的显示文字，

```html

<tpl>
    <x-switch v-model="status3" on-text="开" off-text="关"></x-switch>
    <br>
    <x-switch v-model="status4" on-text="on" off-text="off"></x-switch>
</tpl>

<script>
    export default {
        data() {
            return {
                status3: false,
                status4: false
            };
        }
    };
</script>

```

:::


## Props

| 名字 | 类型 | 默认 | 描述 | 是否必选 |可选值|
|-----|-----|-----|-----|----|----|----|
|v-model|Boolean|无|控制开关的开启关闭|必选|true,false|
|disabled|Boolean|false|控制开关是否禁用|可选|true,false|
|on-text|String|无|开关开启时的显示文字|可选||
|off-text|String|无|开关关闭时的显示文字|可选||

## Events

|事件名|说明|返回值|设置属性|
|---|---|---|---|
|change|开关状态改变时触发|当前的开启状态(true or false）|`@change`|


</template>
<script>
    export default {
        data() {
            return {
                status1: false,
                status2: true,
                status3: false,
                status4: false
            };
        }
    };
</script>

<style lang="less">
    .demo-switch {
        .x-switch {
            margin-bottom: 8px;
        }
    }
</style>