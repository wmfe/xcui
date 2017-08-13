<template lang="md">
# DatePicker 日期选择框

用于输入或选择日期或日期范围。


## 基本使用：选择单日期

> 注： `v-model`绑定值的时间格式为`ISO string`，如：`2016-12-13T00:45:00.000Z`。

::: demo 基本使用, 可通过设置`pickerOptions`的`disabledDate`属性对日期进行限制，本例展示了禁用今天以前的日期。

```html

<tpl>
    <div style="width:180px">
        <x-date-picker v-model="model1" placeholder="请选择日期" :picker-options="pickerOption1"></x-date-picker>
    </div>
</tpl>

<script>
    export default {
        data() {
            return {
                model1: '',
                pickerOption1: {
                    disabledDate(time) {
                        return time.getTime() < Date.now() - 24 * 60 * 60 * 1000;
                    }
                }
            }
        }
    }
</script>

```

:::

## 日期：带快捷选项

::: demo 带快捷选项，通过设置`pickerOptions`的`shortcuts`属性来实现。

```html

<tpl>
    <div style="width:180px">
        <x-date-picker v-model="model2" align="left" placeholder="请选择日期" :picker-options="pickerOption2">
        </x-date-picker>
    </div>
</tpl>

<script>
    export default {
        data() {
            return {
                model2: '',
                pickerOption2: {
                    shortcuts: [{
                        text: '今天',
                        onClick(picker) {
                            picker.$emit('pick', new Date());
                        }
                    }, {
                        text: '昨天',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 60 * 60 * 1000 * 24);
                            picker.$emit('pick', date);
                        }
                    }, {
                        text: '一周前',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 60 * 60 * 1000 * 24 * 7);
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

## 选择周 / 月 / 年

::: demo 通过设置`type`属性为`week/month/year`可以进行周/月/年模式的切换。

```html

<tpl>
    <x-row>
        <x-col span="6">
            <p>选择周</p>
            <x-date-picker v-model="model3" placeholder="请选择周" type="week" format="yyyy 第 WW 周">
            </x-date-picker>
        </x-col>
        <x-col span="6" offset="3">
            <p>选择月</p>
            <x-date-picker v-model="model4" placeholder="请选择月" type="month">
            </x-date-picker>
        </x-col>
        <x-col span="6" offset="3">
            <p>选择年</p>
            <x-date-picker v-model="model5" placeholder="请选择年" type="year">
            </x-date-picker>
        </x-col>
    </x-row>
</tpl>

<script>
    export default {
        data() {
            return {
                model3: '',
                model4: '',
                model5: ''
            }
        }
    }
</script>

```

:::

## 基本使用：选择日期范围

::: demo 通过使用`type="daterange"`来选择日期范围。返回的时间格式为`ISO string`的数组[Date1, Date2]。

```html

<tpl>
    <div style="width: 240px">
        <x-date-picker type="daterange" v-model="model6" placeholder="选择日期范围">
        </x-date-picker>
    </div>
</tpl>

```

:::


## 日期范围：限定最多可选的日期范围（如最多只能选一个月）


::: demo 通过设置`pickerOptions`的`dateLimit`选项来控制范围。`dateLimit`为`object`格式，可支持的选项有`year`, `month`, `day`, `hour`, `minute`, `second`。如同时设置2种以上选项时，日期范围会被累加，如1年2个月。当用户的选择超过限定范围时，会自动选择最大范围（以开始时间计算）。配合日期限制有一个对应的钩子事件`@over-limit`,可用于错误提示。

```html
<tpl>
    <div style="width: 240px">
        <x-date-picker type="daterange" v-model="model7" placeholder="选择日期范围" :pickerOptions="pickerOption3" @over-limit="handleOverLimit">
        </x-date-picker>
    </div>
</tpl>

<script>
    export default {
       data() {
           return {
               model7: '',
               pickerOption3: {
                  dateLimit: {
                      month: 1
                  }
               }
           }
       },
       methods: {
           handleOverLimit(startDate, endDate, limitEndDate) {
                this.$Message.warning('选择时间超过限定最大时间（最大可选1个月）');
           }
       }
    }
</script>

```

:::


## 日期范围： 带快捷选项

::: demo 与单日期一样，可以使用`pickerOptions`的`shortcuts`属性增加快捷选项。

```html

<tpl>
    <div style="width: 240px">
        <x-date-picker type="daterange" v-model="model8" placeholder="选择日期范围" :picker-options="pickerOption4">
        </x-date-picker>
    </div>
</tpl>

<script>
    export default {
        data() {
            return {
                model8: '',
                pickerOption4: {
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



## DatePicker Props

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
|align|String|left|对齐方式|可选|left, right|
|popper-class|String|无|下拉框类名|可选||
|picker-options|Object|无|特殊选项，参考下表|可选||
|range-separator|String|-|选择范围时的分隔符|可选||

## Picker Options

| 参数 | 类型 | 说明 | 默认 | 可选值 |
|---|---|---|---|---|
|shortcuts|object[]|设置快捷选项，用法参考demo或下表|无||
|disabledDate|Function|设置禁用日期，参数为当前日期，要求返回Boolean|||
|firstDayOfWeek|Number|周起始日|7|1到7|
|dateLimit|object|最大可选范围|无|{year:number, month: number, day: number, hour:number, minute:number, second: number}|

## Shortcuts

| 参数 | 类型 | 说明 | 默认 | 可选值 |
|---|---|---|---|---|
|text|String|标题文本|无||
|onClick|Function|选中后的回调参数，参数是vm, 可通过触发`pick`事件设置选择器的值。例如`vm.$emit('pick', new Date())`|无||

## DatePicker Events
|事件名|说明|返回值|设置属性|
|---|---|---|---|
|change|文本框值改变时触发|格式化后的值|`@change`|
|over-limit|设置了`pickeroption`的`dateLimit`选项后，选择范围超过限定范围时触发|startDate/\* 用户选择的开始时间 \*/, endDate/\* 用户选择的结束时间 \*/, limitEndDate /\* 计算出的最大结束时间 \*/|`@over-limit`|



</template>
<script>
require('#/date-picker.less');
export default {
    data() {
        return {
            model1: '',
            pickerOption1: {
                disabledDate(time) {
                    return time.getTime() < Date.now() - 24 * 60 * 60 * 1000;
                }
            },
            model2: '2016-12-13T00:45:00.000Z',
            pickerOption2: {
                shortcuts: [{
                    text: '今天',
                    onClick(picker) {
                        picker.$emit('pick', new Date());
                    }
                }, {
                    text: '昨天',
                    onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 60 * 60 * 1000 * 24);
                        picker.$emit('pick', date);
                    }
                }, {
                    text: '一周前',
                    onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 60 * 60 * 1000 * 24 * 7);
                        picker.$emit('pick', date);
                    }
                }]
            },
            model3: '',
            model4: '',
            model5: '',
            model6: '',
            model7: '',
            model8: '',
            pickerOption3: {
               dateLimit: {
                   month: 1
               }
            },
            pickerOption4: {
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
    },
    methods: {
        handleOverLimit(startDate, endDate, limitEndDate) {
             this.$Message.warning('选择时间超过限定最大时间（最大可选1个月）');
        }
    }
};

</script>
