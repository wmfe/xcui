<template lang="md">
# Input 输入框

通过鼠标或键盘输入内容，是最基础的表单域的包装。

## 如何使用

- 需要用户输入表单域内容。
- 提供组合型输入框和大小选择。


## 基础用法

::: demo 最基本的用法，使用`<x-input>`标签即可创建一个输入框。使用`v-model`赋值。默认的`input`宽度是`100%`。

```html
<tpl>
    <div style="width:147px">
        <x-input placeholder="请输入内容" v-model="input"></x-input>
    </div>
</tpl>
```

:::

## 三种尺寸

::: demo 输入框有三种尺寸：`large`, `small` 和默认大小。分别的高度为`40px`, `34px`, `30px`。

```html
<tpl>
    <x-row gutter="32">
        <x-col span="4">
            <x-input placeholder="Large Size" v-model="input1" size="large"></x-input>
        </x-col>
        <x-col span="4">
            <x-input placeholder="Default Size" v-model="input2"></x-input>
        </x-col>
        <x-col span="4">
            <x-input placeholder="Small Size" v-model="input3" size="small"></x-input>
        </x-col>
    </x-row>
</tpl>
```

:::


## 带icon的输入框

::: demo 通过设置`icon`属性，可以在输入框右边增加相应图标。点击图标会触发`click`事件。

```html
<tpl>
    <x-row>
        <x-col span="4">
            <x-input placeholder="请输入进行搜索" icon="search"></x-input>
        </x-col>
    </x-row>
</tpl>
```

:::

## 禁用状态

::: demo 通过设置`disabled`属性可以将输入框置为禁用状态。在禁用状态下点击图标，不会触发`click`事件。

```html
<tpl>
    <x-row>
        <x-col span="4">
            <x-input :disabled="true" placeholder="请输入内容" icon="paper-airplane"></x-input>
        </x-col>
    </x-row>
</tpl>
```

:::

## 复合型输入框

::: demo 通过在`input`组件内部添加名为`prepend`和`append`的slot，可用于配置slot于配置一些特定组合的复合型输入框。

```html
<tpl>
    <x-row>
        <x-col span="8">
            <x-input placeholder="请输入网址">
                <span slot="prepend">http://</span>
                <span slot="append">.com</span>
            </x-input>
        </x-col>
    </x-row>
    <x-row style="margin-top: 15px">
        <x-col span="8">
            <x-input placeholder="请输入网址">
                <span slot="append"><x-icon name="share"></x-icon></span>
            </x-input>
        </x-col>
    </x-row>
    <x-row style="margin-top: 15px">
        <x-col span="8">
            <x-input placeholder="请输入网址">
                <x-select v-model="model" slot="prepend" placeholder="请选择" style="width: 100px;">
                    <x-option v-for="item in options" :value="item.value"></x-option>
                </x-select>
                <span slot="append"><x-icon name="share"></x-icon></span>
            </x-input>
        </x-col>
    </x-row>
</tpl>
```

:::

## Props
| 名字 | 类型 | 默认 | 描述 | 是否必选 |可选值|
|-----|-----|-----|-----|----|----|----|
|value|String, Number|无|和`v-model`的绑定值|必选||
|size|String|无|输入框大小|可选|`large`, `small`|
|placeholder|String|无|原生属性，输入框默认文本，用于提示|可选||
|disabled|Boolean|false|是否禁用|可选||
|icon|String|无|输入框右侧图标名称|可选||
|readonly|Boolean|false|原生属性，是否只读|可选||
|autofocus|Boolean|false|原生属性，自动获取焦点|可选||
|name|String|无|原生属性|可选||
|form|String|无|原生属性|可选||
|maxlength|Number|无|原生属性|可选||
|minlength|Number|无|原生属性|可选||
|iconClick|Function|无|设置`icon`属性后，点击图标时触发|可选||

## Events

|事件名|说明|返回值|设置属性|
|---|---|---|---|
|click|设置`icon`属性后，点击图标时触发|无|`iconclick`|
|enter|按下回车键时触发|无|`@keyup.enter`|
|input|输入时触发|无|`@input`|
|change|数据改变时触发|event|`@change`|
|focus|输入框获得焦点时触发|无|`@focus`|
|blur|输入框失去焦点时触发|无|`@blur`|

## Slot

|名称|说明|
|---|---|
|prepend|前置内容|
|append|后置内容|

</template>

<script>
    export default {
        data() {
            return {
                input: '',
                input1: '',
                input2: '',
                input3: '',
                model: '',
                options: [{
                    value: 'http://'
                }, {
                    value: 'https://'
                }]
            };
        }
    };
</script>
