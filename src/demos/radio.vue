<template lang="md">

# Radio 单选框

单选框。

## 何时使用

- 用于在多个备选项中选中单个状态。
- 和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。


## 基础用法

::: demo 最简单的用法。通过设置`v-model`值和`label`属性为相应的变量。选中时`v-model`的值变为该`radio`组件的`label`值。

```html

<tpl>
    <x-radio v-model="checked" label="1">备选项1</x-radio>
    <x-radio v-model="checked" label="2">备选项2</x-radio>
    <p style="margin-top:15px;">选中的值：{{checked}}</p>
</tpl>

<script>
    export default {
        data() {
            return {
                checked: '1'
            }
        }
    }
</script>

```

:::

## 禁用状态

::: demo 通过使用`disabled`属性可以设置单选框的禁用状态。

```html

<tpl>
    <x-radio v-model="checked1" :disabled="true" label="1">备选项1</x-radio>
    <x-radio v-model="checked1" :disabled="true" label="2">备选项2</x-radio>
</tpl>

<script>
    export default {
        data() {
            return {
                checked1: '1'
            }
        }
    }
</script>

```

:::

## 单选框组


::: demo 一组互斥的单选框配合使用。这种情况下无需再设置单个`radio`的`v-model`属性。当相应的`radio`被选中时，`radio-group`的`v-model`值随之改变。

```html

<tpl>
    <x-radio-group v-model="checked3">
        <x-radio label="1">备选项1</x-radio>
        <x-radio label="2">备选项2</x-radio>
        <x-radio label="3">备选项3</x-radio>
    </x-radio-group>
    <p style="margin-top:15px;">选中的值：{{checked3}}</p>   
</tpl>

<script>
    export default {
        data() {
            return {
                checked3: '1'
            }
        }
    }
</script>

```

:::

## 按钮样式

::: demo 按钮样式的单选框组合。通过引入`radio-group`和`radio-button`组件来实现。此时无需再设置单个`radio-button`的`v-model`属性。当相应的`radio`被选中时，`radio-group`的`v-model`值随之改变。

```html

<tpl>
    <x-radio-group v-model="checked4">
        <x-radio-button label="1">备选项1</x-radio-button>
        <x-radio-button label="2">备选项2</x-radio-button>
        <x-radio-button label="3">备选项3</x-radio-button>
    </x-radio-group>
    <p style="margin-top:15px;">选中的值：{{checked4}}</p>
</tpl>

<script>
    export default {
        data() {
            return {
                checked4: '1'
            }
        }
    }
</script>

```

:::


## Radio Props

| 名字 | 类型 | 默认 | 描述 | 是否必选 |可选值|
|---|---|---|---|---|---|---|
|label|String, Number, Boolean|无|Radio的 `value`|必选||
|disabled|Boolean|false|禁用状态|可选|`true`, `false`|

## Radio-group Props

| 名字 | 类型 | 默认 | 描述 | 是否必选 |可选值|
|---|---|---|---|---|---|---|
|size|String|无|Radio按钮组尺寸，仅在按钮组情况下可用|可选|large,small|

## Radio-group Events

|事件名|说明|返回值|设置属性|
|---|---|---|---|
|change|`v-model`绑定值改变时触发|选中的Radio label值|`@change`|

    
</template>
<script>
    export default {
        data() {
            return {
                checked: '1',
                checked1: '1',
                checked3: '1',
                checked4: '1'
            };
        }
    };
</script>
