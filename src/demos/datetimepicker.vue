<template lang="md">
# DateTimePicker 时间日期选择器

用于输入日期和时间。


## 基本使用：日期和时间点

::: demo 通过引入`x-date-picker`组件，设置`type`为`datetime`, 即可启用日期和时间选择。

```html

<tpl>
    <div style="width:240px">
        <x-date-picker type="datetime" v-model="model1" placeholder="请选择日期时间"></x-date-picker>
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

## 日期和时间点：带快捷选项

::: demo 带快捷选项，通过设置`pickerOptions`的`shortcuts`属性来实现。

```html

<tpl>
    <div style="width:240px">
        <x-date-picker type="datetime" v-model="model2" align="right" placeholder="请选择日期时间" :picker-options="pickerOption1">
        </x-date-picker>
    </div>
</tpl>

<script>
    export default {
        data() {
            return {
                model2: '',
                pickerOption1: {
                    shortcuts: [{
                        text: '今天',
                        onClick(picker) {
                            picker.$emit('pick', new Date());
                        }
                    }, {
                        text: '昨天',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24);
                            picker.$emit('pick', date);
                        }
                    }, {
                        text: '一周前',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', date);
                        }
                    }]
                }
            }
        }
    }
</script>

```

:::

## 日期和时间范围

::: demo 通过设置`type=datetimerange`可以选择日期和时间范围。本例演示了带默认值的使用。

```html

<tpl>
    <div style="width: 350px">
        <x-date-picker type="datetimerange" v-model="model3" placeholder="选择日期时间范围">
        </x-date-picker>
    </div>
</tpl>

<script>
    export default {
        data() {
            return {
                model3: [new Date(2016, 11, 12, 10, 10), new Date(2016, 11, 13, 0, 45)]
            }
        }
    }
</script>

```

:::


## 日期和时间范围：带快捷选项

::: demo 使用`pickerOptions`的`shortcuts`属性增加快捷选项。

```html

<tpl>
    <div style="width: 350px">
        <x-date-picker type="datetimerange" v-model="model4" placeholder="选择日期时间范围" :picker-options="pickerOptions2">
        </x-date-picker>
    </div>
</tpl>

<script>
    export default {
        data() {
            return {
                model4: '',
                pickerOptions2: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                }
            }
        }
    }
</script>

```

:::


## DateTimePicker Props

| 名字 | 类型 | 默认 | 描述  | 是否必选 | 可选值 |
|-----|-----|-----|-----|----|----|
|v-model|String|无|绑定值|是||
|readonly|Boolean|false|是否完全只读|可选||
|disabled|Boolean|false|是否禁用|可选|true, false|
|editable|Boolean|false|文本框可输入|可选|true, false|
|clearable|Boolean|true|是否显示清除按钮|可选|true, false|
|size|String|无|文本框尺寸|可选|large, small|
|placeholder|String|无|文本框默认显示文字|可选||
|type|String|date|显示类型|可选|year/month/date/week/datetime/daterange/datetimerange|
|format|String|yyyy-MM-dd|时间日期格式化|可选|年yyyy, 月MM, 日dd, 小时HH, 分mm, 秒ss|
|align|String|left|对齐方式|可选|left, center, right|
|popper-class|String|无|下拉框类名|可选||
|picker-options|Object|无|特殊选项，参考下表|可选||
|range-separator|String|-|选择范围时的分隔符|可选||

## Picker Options

| 参数 | 类型 | 说明 | 默认 | 可选值 |
|---|---|---|---|---|
|shortcuts|object[]|设置快捷选项，用法参考demo或下表|无||
|disabledDate|Function|设置禁用日期，参数为当前日期，要求返回Boolean|||
|firstDayOfWeek|Number|周起始日|7|1到7|

## Shortcuts

| 参数 | 类型 | 说明 | 默认 | 可选值 |
|---|---|---|---|---|
|text|String|标题文本|无||
|onClick|Function|选中后的回调参数，参数是vm, 可通过触发`pick`事件设置选择器的值。例如`vm.$emit('pick', new Date())`|无||

## DateTimePicker Events
|事件名|说明|返回值|设置属性|
|---|---|---|---|
|change|文本框值改变时触发|格式化后的值|`@change`|

</template>

<script>
    export default {
        data() {
            return {
                model1: '',
                model2: '',
                pickerOption1: {
                    shortcuts: [{
                        text: '今天',
                        onClick(picker) {
                            picker.$emit('pick', new Date());
                        }
                    }, {
                        text: '昨天',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24);
                            picker.$emit('pick', date);
                        }
                    }, {
                        text: '一周前',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', date);
                        }
                    }]
                },
                model3: [new Date(2016, 11, 12, 10, 10), new Date(2016, 11, 13, 0, 45)],
                model4: '',
                pickerOptions2: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                }
            };
        }
    };
</script>