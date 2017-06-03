<template lang="md">
# Collapse 折叠面板



## 折叠面板组 

::: demo 以面板组的方式出现，常用于多项类似操作。

```html

<tpl>
    <x-collapse v-model="opens" :open-only-one="openOnlyOne">
        <x-collapse-item id="1">
            <span slot="titleLeft">i am left</span>
            <div>i am the content1</div>
            <div>i am the content1</div>
            <div>i am the content1</div>
            <div>i am the content1</div>
            <div>i am the content1</div>

            <span slot="titleRight">i am right</span>
        </x-collapse-item>
        <x-collapse-item id="2">
            <span slot="titleLeft">i am left</span>
            <div>i am the content2</div>
            <div>i am the content2</div>
            <div>i am the content2</div>
            <div>i am the content2</div>
            <div>i am the content2</div>

        </x-collapse-item>
        <x-collapse-item id="3">
            <div>i am the content3</div>
            <div>i am the content3</div>
            <div>i am the content3</div>
            <div>i am the content3</div>
            <div>i am the content3</div>
            <div>i am the content3</div>
            <div>i am the content3</div>

            <span slot="titleRight">i am right</span>
        </x-collapse-item>
    </x-collapse>
    <p style="margin-top: 15px;">
        打开的值数组： {{opens}}
    </p>
   
<script>
    export default {
        data() {
            return {
                opens: ['1']，
                openOnlyOne: true
            };
        }
    };
</script>

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
    export default {
        data() {
            return {
                opens: ['1'],
                openOnlyOne: true
            };
        },
        methods: {
        }
    };

</script>

