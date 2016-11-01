<template lang="md">
# datepicker 日期选择框

## 使用场景

- 支持日历筛选，日历＋时间，时间筛选
- 可以配置日期的筛选范围，日期格式
- 对于时间的筛选，可以倍数形式定制筛选时间的值，例如分钟可以订制筛选值为15，30，45，60
- 可以直接获取当前的时间
- 年筛选可以直接输入，可以筛选
- 支持定制皮肤颜色

# DEMO

<demo>
    <example title="simple">
        <xcui-datepicker :value.sync="''">
        </xcui-datepicker>
    </example>
    <p>> 最简单的用法，value双向绑定，日期</p>
    <p>> value：可以传不同日期格式，例如：date对象 new Date()，日期字符串 2018-09-09，时间搓 1477980169262，也可以不传，默认当天，date.value值为 时间戳1477980088896</p>
  <example title="日期格式">
    <xcui-datepicker
        :value.sync="date.value"
        format="YYYY-MM-DD"
        :min-date="datetime.begin"
        :max-date="'2016-11-10'">
    </xcui-datepicker>
  </example>
  <p>> format：展示的日期格式，配置例如，分隔符可自选：年-月-日 YYYY-MM-DD，年/月/日 时：分：秒 YYYY/MM/DD hh:mm:ss， 时:分:秒 hh:mm:ss</p>
  <p>> min-date：日期可选最小值，值类型同value，datetime.begin值为 new Date()</p>
  <p>> max-date：日期可选最大值，值类型同value</p>
  <example title="日期+时间选择">
    <xcui-datepicker
        :value.sync="datetime.value"
        format="YYYY/MM/DD hh:mm:ss"
        :hour-range="'3'"
        :minute-range="'10'"
        :second-range="'20'"
        :min-date="datetime.begin"
        :max-date="datetime.end">
    </xcui-datepicker>
  </example>
  <p>> hour-range：小时可选值设置（例如：值为 3 时，小时可选值为0, 3，6，9，12</p>
  <p>> minute-range：分钟可选值设置，同上</p>
  <p>> second-range：分钟可选值设置，同上</p>
  <example title="样式以及回调配置">
    <xcui-datepicker
        class-name="class-name"
        color="pink"
        format="YYYY-MM-DD hh:mm:ss"
        :btn-show="true"
        @on-change="onChange"
        :value.sync="datetime.value"
        :hour-range="'3'">
    </xcui-datepicker>
  </example>
  <p>> class-name：日历样式，class名字</p>
  <p>> color：按钮颜色，值为颜色值，例如：#f00,pink</p>
  <p>> on-change：选择日期后的回调，参数 val(当前值) oldval(上次值)，onChange(val, oldVal) {}</p>
  <p>> btn-show: 按钮是否显示</p>
  <example title="时间选择">
      <div class="input-group">
        <xcui-datepicker
            value.sync="''"
            format="hh:mm:ss">
        </xcui-datepicker>
      </div>
  </example>
  <p>> 最简单的时间用法</p>
</demo>

## 组件依赖
> 无

## Props

| 名字 | 类型 | 默认 | 描述 | 是否双向绑定 | 是否必选 |
|-----|-----|-----|-----|----|----|
| value | String/object/Number | 无 | 日期 例如：date对象 new Date()，日期字符串 2018-09-09，时间搓 1477980169262 | 双向绑定 | 可选 |
| format | String | YYYY-MM-DD | 展示的日期格式，配置例如，分隔符可自选：年-月-日 YYYY-MM-DD，年-月-日 时：分：秒 YYYY-MM-DD hh:mm:ss， 时/分/秒 hh/mm/ss | 静态属性 | 可选 |
| minDate | String | 无 | 日期可选最小值 | 否 | 可选|
| maxDate | String | 无 | 日期可选最大值 | 否 | 可选|
| hourRange | Number | 1 | 小时可选值设置（例如：值为 3 时，小时可选值为0, 3，6，9，12 ..） | 否 | 可选 |
| minuteRange | Number | 1 | 分可选值设置（例如：值为 20 时，分可选值为0, 20，40，60） | 否 | 可选 |
| secondRange | Number | 1 | 秒可选值设置（例如：值为 20 时，分可选值为0, 20，40，60） | 否 | 可选 |
| color | String | 无 | 订制按钮颜色，值为颜色值，例如：#f00,pink | 静态属性 | 可选 |
| btnShow | boolean | 无 | 是否显示日历后面的按钮 | 否 | 可选 |
| class-name | String | 无 | 日历样式，class名字 |  静态属性 | 可选 |
| onChange | object | 无 | 选择日期后的回调，参数 val(当前值) oldval(上次值) @onChange | 否 | 可选 |
</template>
<script>
export default {
    data() {
        return {
            date: {
                value: 1477980088896,
                begin: '2015-12-20',
                end: '2016-09-09'
            },
            datetime: {
                value: new Date(),
                begin: new Date(),
                end: '2017-02-01 00:00:00'
            },
            time: {
                value: ''
            }
        };
    },
    methods: {
        onChange(val, oldVal) {
            console.log(val);
            console.log(oldVal);
        }
    }
};
</script>
<style lang="less">
    p{
        padding-left:30px;
        font-size: 14px;
        color: #666;
    }
    .class-name{
        width:200px;
    }
</style>