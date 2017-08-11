<template lang="md">
# TimePicker 时间选择器

用于选择时间。

## 基本使用： 固定时间点

::: demo 提供几个固定时间点给用户选择。

```html

<tpl>
    <div style="width: 180px">
         <x-time-select v-model="model1"
            :picker-options="{
                start: '08:30',
                step: '00:15',
                end: '18:30'
                }" placeholder="请选择时间"></x-time-select>
    </div>

</tpl>

<script>
    export default {
        data() {
            return {
                model1: ''
            }
        }
    }
</script>

```

:::

## 选择任意时间

::: demo 使用`x-time-picker`组件，通过`selectableRange` 限制可选范围。

```html

<tpl>
    <div style="width:180px">
        <x-time-picker v-model="model2"
            :picker-options="{
                selectableRange: '18:30:00 - 23:30:00'
            }" placeholder="请选择任意时间"></x-time-picker>
    </div>

</tpl>

<script>
    export default {
        data() {
            return {
                model2: new Date(2016, 9, 10, 18, 40)
            }
        }
    }
</script>

```

:::

## 固定时间范围

::: demo 选择开始时间时，结束时间的备选项会随之改变。

```html

<tpl>
    <div style="width:180px;display:inline-block;">
        <x-time-select placeholder="起始时间" v-model="startTime" :picker-options="{
            start: '08:30',
            step: '00:15',
            end: '18:30'
            }"></x-time-select>
    </div>
    <div style="width:180px; display:inline-block;margin-left: 15px;">
        <x-time-select placeholder="起始时间" v-model="endTime" :picker-options="{
            start: '08:30',
            step: '00:15',
            end: '18:30',
            minTime: startTime
            }"></x-time-select>
    </div>
</tpl>

<script>
    export default {
        data() {
            return {
                startTime: '',
                endTime: ''
            }
        }
    }
</script>

```

:::

## 任意时间范围

::: demo 通过设置`is-range`属性为`true`即可选择时间范围

```html

<tpl>
    <div style="width: 240px">
        <x-time-picker is-range v-model="model3" placeholder="请选择时间范围"></x-time-picker>
    </div>
</tpl>

<script>
    export default {
        data() {
            return {
                model3: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
            }
        }
    }
</script>

```

:::


## Timepicker Props

| 名字 | 类型 | 默认 | 描述  | 是否必选 | 可选值 |
|-----|-----|-----|-----|----|----|
|v-model|String|无|绑定值|是||
|readonly|Boolean|false|是否完全只读|可选||
|disabled|Boolean|false|是否禁用|可选|true, false|
|editable|Boolean|false|文本框可输入|可选|true, false|
|clearable|Boolean|true|是否显示清除按钮|可选|true, false|
|size|String|无|文本框尺寸|可选|large, small|
|placeholder|String|无|文本框默认显示文字|可选||
|align|String|left|对齐方式|可选|left, center, right|
|popper-class|String|无|下拉框类名|可选||
|picker-options|Object|无|特殊选项，参考下表|可选||
|range-separator|String|-|选择范围时的分隔符|可选||

## TimePicker Options

| 参数 | 类型 | 说明 | 默认 | 可选值 |
|---|---|---|---|---|
|selectableRange|String/Array|可选时间段，例如`'18:30:00 - 20:30:00'`或者传入数组`['09:30:00 - 12:00:00', '14:30:00 - 18:30:00']`|无||
|format|String|时间格式化(TimePicker)||小时：HH，分：mm，秒：ss|


## Timepicker Events
|事件名|说明|返回值|设置属性|
|---|---|---|---|
|change|文本框值改变时触发|格式化后的值|`@change`|

</template>

<script>
    import('#/date-picker.less');
    export default {
        data() {
            return {
                model1: '',
                model2: new Date(2016, 9, 10, 18, 40),
                startTime: '',
                endTime: '',
                model3: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
            };
        }
    };
</script>
