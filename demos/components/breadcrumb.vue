<template lang="md">
# Breadcrumb 面包屑

显示当前页面的路径，快速返回之前的任意页面。

## 基础使用

::: demo 面包屑的基本使用。

```html
<tpl>
    <x-breadcrumb>
        <x-breadcrumb-item to="/home">XCUI</x-breadcrumb-item>
        <x-breadcrumb-item>Components</x-breadcrumb-item>
        <x-breadcrumb-item to="/component/breadcrumb">Breadcrumb</x-breadcrumb-item>
    </x-breadcrumb>
</tpl>
```

:::

## 分隔符

::: demo 设置 `separator`, 自定义分隔符。

```html
<tpl>
    <x-breadcrumb separator=">">
        <x-breadcrumb-item to="/home">XCUI</x-breadcrumb-item>
        <x-breadcrumb-item>Components</x-breadcrumb-item>
        <x-breadcrumb-item to="/component/breadcrumb">Breadcrumb</x-breadcrumb-item>
    </x-breadcrumb>
</tpl>
```

:::




## Breadcrumb Props

| 名字 | 类型 | 默认 | 描述 | 是否必选 |可选值|
|-----|-----|-----|-----|-----|-----|-----|
|separator|String|/|分隔符|可选|-|

## Breadcrumb-Item Props

| 名字 | 类型 | 默认 | 描述 | 是否必选 |可选值|
|-----|-----|-----|-----|-----|-----|-----|
|to|String|-|链接，不传则没有链接|可选|-|
|replace|Boolean|false|路由跳转时，开启 replace 将不会向 history 添加新记录|可选|-|

</template>

<script>
    import '#/breadcrumb.less';
    export default {
        data() {
            return {
            };
        }
    };
</script>
