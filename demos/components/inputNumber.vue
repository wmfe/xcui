<template  lang="md">
# InputNumber 数字输入框

通过鼠标或键盘，输入范围内的数值。

## 基础用法

::: demo 通过在`x-input-number`元素中设置`v-model`属性绑定变量即可。绑定的变量值即为默认值。通过`@change`事件可以监听值的变化。通过键盘的`上下箭头键`也可改变输入框的值。

```html

<tpl>
    <x-input-number v-model="num1" :min="1" :max="10" @change="handleChange"></x-input-number>
</tpl>
<script>
    export default {
        data() {
            return {
                num1: 1
            };
        },
        methods: {
            handleChange(val, oldVal) {
                console.log(`val: ${val}`);
                console.log(`oldVal: ${oldVal}`);
            }
        }
    };
</script>

```

:::

## 禁用状态

::: demo 设置`disabled`属性可以将计数器设置为禁用。

```html

<tpl>
    <x-input-number v-model="num2" :min="1" :max="10" :disabled="true"></x-input-number>
</tpl>
<script>
    export default {
        data() {
            return {
                num2: 1
            }
        }
    }
</script>

```

:::

## 步数

::: demo 通过设置`step`属性可以定义递增/递减的步数。`step`可以设置为整数或小数。

```html

<tpl>
    <x-input-number v-model="num3" :step="3"></x-input-number>
</tpl>

<script>
    export default {
        data() {
            return {
                num3: 1
            }
        }
    }
</script>
```

:::

## 尺寸

::: demo 额外提供了`large`, `small` 两种尺寸的输入框，通过设置`size`属性即可。

```html

<tpl>
    <x-input-number v-model="num4" size="large"></x-input-number>
    <x-input-number v-model="num5"></x-input-number>
    <x-input-number v-model="num6" size="small"></x-input-number>
</tpl>

<script>
    export default {
        data() {
            return {
                num4: 1,
                num5: 1,
                num6: 1
            }
        }
    }
</script>

```

:::



## Props
| 名字 | 类型 | 默认 | 描述 | 是否必选 |可选值|
|-----|-----|-----|-----|----|----|----|
|value|Number|无|和`v-model`的绑定值|必选，通过设置`v-model`||
|min|Number|0|计数器最小值|可选||
|max|Number|Infinity|计数器最大值|可选||
|step| Number|1|增减步长|可选||
|disabled|Boolean|false|是否禁用|可选|true,false|
|size|String|无|可选尺寸|可选|large,small|

## Events

|事件名|说明|返回值|设置属性|
|---|---|---|---|
|change|绑定值改变时触发|(变更后的值，变更前的值)|`@change`|


</template>
<script>
    import '#/input-number.less';
    export default {
        data() {
            return {
                num1: 1,
                num2: 1,
                num3: 1,
                num4: 1,
                num5: 1,
                num6: 1
            };
        },
        methods: {
            handleChange(val, oldVal) {
                console.log(`val: ${val}`);
                console.log(`oldVal: ${oldVal}`);
            }
        }
    };
</script>
<style>
    .demo-input-number .x-input-number+.x-input-number{
        margin-left : 15px;
    }
</style>
