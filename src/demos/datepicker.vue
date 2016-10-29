<template lang="md">
# datepicker 日期选择框

## 使用场景

1. 支持日历筛选，日历＋时间，时间筛选
2. 可以配置日期的筛选范围，日期格式
3. 对于时间的筛选，可以倍数形式定制筛选时间的值，例如分钟可以订制筛选值为15，30，45，60
4. 可以直接获取当前的时间
5. 年筛选可以直接输入，可以筛选
6. 支持定制皮肤颜色

# DEMO

<demo>
  <example title="日历选择">
    <datepicker
        type="date"
        :value.sync="date.value"
        :sep="date.sep">
    </datepicker>
  </example>
  <example title="日历+时间选择">
    <datepicker
        type="datetime"
        class-name="class-name"
        color="pink"
        :value.sync="datetime.value"
        :btn-show="true"
        sep="/"
        :hour-range="'3'"
        :begin="datetime.begin"
        :end="datetime.end">
    </datepicker>
  </example>
  <example title="时间选择">
      <div class="input-group">
        <datepicker
                type="time"
                :value.sync="time.value"
                :btn-show="datetime.btnShow">
        </datepicker>
      </div>
  </example>
</demo>

## 组件依赖
> 无

## Props

| 名字 | 类型 | 默认 | 描述 | 是否双向绑定 | 是否必选 |
|-----|-----|-----|-----|----|----|
| value | String | 无 | 默认日期 | 双向绑定 | 可选 |
| type| String | date | date:日历  datetime:日历＋时间 time:时间 | 否 | 可选 |
| sep | String | - | 日期格式设置 例如：2016-08-06 | 否 | 可选 |
| begin | String | 无 | 单选日历，可选日期范围的开始时间 | 否 | 可选|
| end | String | 无 | 单选日历，可选日期范围的结束时间 | 否 | 可选|
| hourRange | Number | 1 | 小时可选值设置（例如：值为 3 时，小时可选值为 3，6，9，12） | 否 | 可选 |
| minuteRange | Number | 1 | 分可选值设置（例如：值为 20 时，分可选值为 20，40，60） | 否 | 可选 |
| secondRange | Number | 1 | 秒可选值设置（例如：值为 20 时，分可选值为 20，40，60） | 否 | 可选 |
| color | String | 无 | 订制按钮颜色，值为颜色值，例如：#f00,pink | 静态属性 | 可选 |
| btnShow | boolean | 无 | 是否显示日历后面的按钮 | 否 | 可选 |
| class-name | String | 无 | 日历样式，class名字 |  静态属性 | 可选 |

</template>
<script>
import datepicker from '../components/datepicker';
export default {
    data() {
        return {
            date: {
                value: '2016-02-01',
                sep: '-',
                begin: '2015-12-20',
                end: '2016-09-09'
            },
            datetime: {
                value: '2016/02/01 00:00:00',
                begin: '2015/02/01 00:00:00',
                end: '2017/02/01 00:00:00'
            },
            time: {
                value: ''
            }
        };
    },
    components: {
        datepicker
    }
};
</script>
<style lang="less">
    .class-name{
        width:200px;
    }
</style>