<template lang="md">

# Dropdown 下拉菜单

向下弹出的列表。

当页面上操作命令过多时，可使用此组件收纳操作元素。从下拉菜单中选择并执行命令。

## 基础使用

::: demo 最简单的下拉菜单，通过`type`设置颜色，通过`disabled`设置菜单项的禁用状态，通过`divided`设置分栏。默认显示形式为链接， 默认触发方式为`hover`。

```html

<tpl>
    <x-dropdown type="primary">
        下拉菜单
        <x-dropdown-menu slot="dropdown">
            <x-dropdown-item>北京烤鸭</x-dropdown-item>
            <x-dropdown-item>夫妻肺片</x-dropdown-item>
            <x-dropdown-item disabled>鱼香肉丝</x-dropdown-item>
            <x-dropdown-item divided>过桥米线</x-dropdown-item>
        </x-dropdown-menu>
    </x-dropdown>
</tpl>

```

:::



## 其他形式的触发元素

::: demo 通过设置`mode`可改变默认的触发元素，默认为`link`, 可选值为`button`和`split-button`。也可以通过`custom`这个`具名slot`来自定义触发元素，如果使用了这个slot, `mode`选项将失效。当选择`split-button`时可在`x-dropdown`上绑定click事件，对应为按钮的点击。

```html

<tpl>
    <x-dropdown type="primary" mode="button">
        下拉菜单
        <x-dropdown-menu slot="dropdown">
            <x-dropdown-item>北京烤鸭</x-dropdown-item>
            <x-dropdown-item>夫妻肺片</x-dropdown-item>
        </x-dropdown-menu>
    </x-dropdown>
    <x-dropdown type="info" mode="split-button" @click="handleClick">
        下拉菜单
        <x-dropdown-menu slot="dropdown">
            <x-dropdown-item>北京烤鸭</x-dropdown-item>
            <x-dropdown-item>夫妻肺片</x-dropdown-item>
        </x-dropdown-menu>
    </x-dropdown>
    <x-dropdown>
        <x-button type="warning" slot="custom">
            下拉菜单
            <i class="x-icon x-icon-arrow-down-c"></i>
        </x-button>
        <x-dropdown-menu slot="dropdown">
            <x-dropdown-item>北京烤鸭</x-dropdown-item>
            <x-dropdown-item>夫妻肺片</x-dropdown-item>
        </x-dropdown-menu>
    </x-dropdown>
</tpl>


```

:::


## 禁用状态

::: demo 通过`disabled`设置触发元素的禁用状态。

```html

<tpl>
    <x-dropdown type="primary" disabled>
        下拉菜单
        <x-dropdown-menu slot="dropdown">
            <x-dropdown-item>北京烤鸭</x-dropdown-item>
            <x-dropdown-item>夫妻肺片</x-dropdown-item>
        </x-dropdown-menu>
    </x-dropdown>
    <x-dropdown type="primary" mode="button" disabled style="margin-left: 15px">
        下拉菜单
        <x-dropdown-menu slot="dropdown">
            <x-dropdown-item>北京烤鸭</x-dropdown-item>
            <x-dropdown-item>夫妻肺片</x-dropdown-item>
        </x-dropdown-menu>
    </x-dropdown>
    <x-dropdown type="primary" mode="split-button" disabled style="margin-left: 15px">
        下拉菜单
        <x-dropdown-menu slot="dropdown">
            <x-dropdown-item>北京烤鸭</x-dropdown-item>
            <x-dropdown-item>夫妻肺片</x-dropdown-item>
        </x-dropdown-menu>
    </x-dropdown>
</tpl>

```

:::


## 弹出位置

::: demo 通过设置`x-dropdown`组件的`align`属性来修改弹出位置，支持6个弹出位置。默认为`bottom-end`。当`align`包含`top`字符时，默认箭头方向、动画方向将自动改变。

```html

<tpl>
    <x-dropdown mode="button" align="top">
        top
        <x-dropdown-menu slot="dropdown">
            <x-dropdown-item>北京烤鸭</x-dropdown-item>
            <x-dropdown-item>夫妻肺片</x-dropdown-item>
        </x-dropdown-menu>
    </x-dropdown>
    <x-dropdown mode="button" align="top-start">
        top-start
        <x-dropdown-menu slot="dropdown">
            <x-dropdown-item>北京烤鸭</x-dropdown-item>
            <x-dropdown-item>夫妻肺片</x-dropdown-item>
        </x-dropdown-menu>
    </x-dropdown>
    <x-dropdown mode="button" align="top-end">
        top-end
        <x-dropdown-menu slot="dropdown">
            <x-dropdown-item>北京烤鸭</x-dropdown-item>
            <x-dropdown-item>夫妻肺片</x-dropdown-item>
        </x-dropdown-menu>
    </x-dropdown>
    <x-dropdown mode="button" align="bottom">
        bottom
        <x-dropdown-menu slot="dropdown">
            <x-dropdown-item>北京烤鸭</x-dropdown-item>
            <x-dropdown-item>夫妻肺片</x-dropdown-item>
        </x-dropdown-menu>
    </x-dropdown>
    <x-dropdown mode="button" align="bottom-start">
        bottom-start
        <x-dropdown-menu slot="dropdown">
            <x-dropdown-item>北京烤鸭</x-dropdown-item>
            <x-dropdown-item>夫妻肺片</x-dropdown-item>
        </x-dropdown-menu>
    </x-dropdown>
    <x-dropdown mode="button" align="bottom-end">
        bottom-end
        <x-dropdown-menu slot="dropdown">
            <x-dropdown-item>北京烤鸭</x-dropdown-item>
            <x-dropdown-item>夫妻肺片</x-dropdown-item>
        </x-dropdown-menu>
    </x-dropdown>
</tpl>

```

:::


## 触发方式

::: demo 默认的触发方式为`hover`，可以更改为`click`触发。

```html

<tpl>
    <x-dropdown type="primary" mode="button">
        下拉菜单
        <x-dropdown-menu slot="dropdown">
            <x-dropdown-item>北京烤鸭</x-dropdown-item>
            <x-dropdown-item>夫妻肺片</x-dropdown-item>
        </x-dropdown-menu>
    </x-dropdown>
    <x-dropdown type="info" mode="button" trigger="click">
        下拉菜单
        <x-dropdown-menu slot="dropdown">
            <x-dropdown-item>北京烤鸭</x-dropdown-item>
            <x-dropdown-item>夫妻肺片</x-dropdown-item>
        </x-dropdown-menu>
    </x-dropdown>
</tpl>


```

:::


## 点击菜单的命令

::: demo 在`x-dropdown-item`组件上设置`item-key`,在 `x-dropdown-menu`上绑定`click`事件，可以对相应菜单项的`item-key`进行操作。

```html

<tpl>
    <x-dropdown type="primary" mode="button">
        下拉菜单
        <x-dropdown-menu slot="dropdown" @click="handleItemClick">
            <x-dropdown-item item-key="1">北京烤鸭</x-dropdown-item>
            <x-dropdown-item item-key="2">夫妻肺片</x-dropdown-item>
        </x-dropdown-menu>
    </x-dropdown>
</tpl>

<script>
    export default {
        handleItemClick(itemKey) {
            this.$Message.info(`点击了第${itemKey}项`);
        }
    }
</script>

```

:::


## 菜单隐藏方式

::: demo 通过设置`hide-on-click`属性为`false`可以在点击菜单项时不隐藏菜单。默认为`true`。

```html

<tpl>
    <x-dropdown type="primary" mode="button" :hide-on-click="false">
        下拉菜单
        <x-dropdown-menu slot="dropdown">
            <x-dropdown-item item-key="1">北京烤鸭</x-dropdown-item>
            <x-dropdown-item item-key="2">夫妻肺片</x-dropdown-item>
        </x-dropdown-menu>
    </x-dropdown>
</tpl>

```

:::


## Dropdown Props

| 名字 | 类型 | 默认 | 描述 | 是否必选 |可选值|
|---|---|---|---|---|---|---|
|type|String|无|触发元素颜色类型|否|`primary`, `info`, `success`, `warning`, `error`|
|trigger|String|`hover`|表单校验规则|否|`hover`, `click`|
|size|String|无|触发元素大小|否|`small`, `large`|
|disabled|Boolean|false|是否禁用触发元素|否|true/false|
|mode|String|link|触发元素类型|否|`link`, `button`, `split-button`|
|align|String|bottom-end|触发元素与菜单的对齐方式|否|`top`, `top-start`, `top-end`, `bottom`, `bottom-start`, `bottom-end`|
|hideOnClick|Boolean|true|点击菜单项时是否隐藏菜单|否|true/false|

## Dropdown Events

|事件名|说明|返回值|设置属性|
|---|---|---|---|
|click|当`mode`为`split-button`时，点击按钮时触发|无|`@click`|


## DropdownMenu Events

|事件名|说明|返回值|设置属性|
|---|---|---|---|
|click|点击菜单项时触发|菜单项的`item-key`值|`@click`|


## DropdownItem Props

| 名字 | 类型 | 默认 | 描述 | 是否必选 |可选值|
|---|---|---|---|---|---|---|
|disabled|Boolean|false|是否禁用|否|true/false|
|divided|Boolean|false|是否具有分隔符|否|true/false|
|itemKey| - |无|传递给菜单父元素的标识|否| - |

</template>

<script>
import '#/dropdown.less';
import '#/button.less';
import '#/message.less';
export default {
    data() {
        return {

        }
    },
    methods: {
        handleClick() {
            this.$Message.info('点击了按钮');
        },
        handleItemClick(itemKey) {
            this.$Message.info(`点击了第${itemKey}项`);
        }
    }
}
</script>
