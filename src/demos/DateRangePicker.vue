<template lang="md">
    # daterangepicker 双日期选择框

    ## 使用场景

    - 支持日历筛选，日历＋时间，时间筛选
    - 可以配置日期的筛选范围，日期格式
    - 对于时间的筛选，可以倍数形式定制筛选时间的值，例如分钟可以订制筛选值为15，30，45，60
    - 可以直接获取当前的时间
    - 年筛选可以直接输入，可以筛选
    - 支持定制皮肤颜色

    ## 应用指南

    要把datepicker放在一个拥有定位属性的容器中,因为datepicker是相对父级元素定位的。


    ## DEMO
    
    <demo>
        <example title="日历选择">
            <daterangepicker
                  :value.sync="date.value"
                  :sep="date.sep"
                  :type="date.type"
                  :begin="date.begin"
                  :end="date.end"
                  :date-limit="date.dateLimit">
            </daterangepicker>
        </example>
        <example title="日期 + 时间选择">
            <daterangepicker
                  type="datetime"
                  class-name="class-name"
                  color="pink"
                  :value.sync="datetime.value"
                  :sep='datetime.sep'
                  :begin="datetime.begin"
                  :end="datetime.end"
                  :date-limit="datetime.dateLimit"
                  :btn-show="datetime.btnShow">
            </daterangepicker>
        </example>
        <example title="时间选择">
            <daterangepicker
                  :value.sync="time.value"
                  :type="time.type"
                  :input-class="time.inputClass"
                  :btn-show="time.btnShow">
            </daterangepicker>
        </example>
    </demo>
    
    ### 日历选择，日期＋时间选择 type: date、datetime
    #### Props

    | 名字 | 类型 | 默认 | 描述 | 是否双向绑定 | 是否必选 |
    |-----|-----|-----|-----|----|----|
    | value | String | 无 | 默认日期 | 双向绑定 | 必选 |
    | type| String | date | date: 日历  datetime: 日期＋时间 time: 时间| 否 | 可选 |
    | sep | String | - | 日期格式设置 例如：2016-08-06 | 否 | 可选 |
    | begin | String | 无 | 可选日期范围的开始时间 | 否 | 可选|
    | end | String | 无 | 可选日期范围的结束时间 | 否 | 可选|
    | hourRange | Number | 1 | 小时可选值设置（例如：值为 3 时，小时可选值为 3，6，9，12） | 否 | 可选 |
    | minuteRange | Number | 1 | 分可选值设置（例如：值为 20 时，分可选值为 20，40，60） | 否 | 可选 |
    | secondRange | Number | 1 | 秒可选值设置（例如：值为 20 时，分可选值为 20，40，60） | 否 | 可选 |
    | dateLimit | object | null | 可选时间范围限制，例如：dateLimit: {months: 1} 一个月 dateLimit: {days: 20} 20天| 否 | 可选 |
    | color | String | 无 | 订制按钮颜色，值为颜色值，例如：#f00,pink | 否 | 可选 |
    | btnShow | boolean | 无 | 是否显示日历后面的按钮 | 否 | 可选 |
    | inputClass | Array | 无 | 日历input输入框的样式，class名字 | 否 | 可选 |

    ### 时间选择 type: time
    #### Props

    | 名字 | 类型 | 默认 | 描述 | 是否双向绑定 | 是否必选 |
    |-----|-----|-----|-----|----|----|
    | show | Boolean | false | 控制日历选择框显示隐藏 | 双向绑定 | 必选 |
    | value | String | 无 | 默认日期 | 双向绑定 | 可选 |
    | type| String | date | date: 日历  datetime: 日期＋时间 time: 时间| 否 | 可选 |
    | hourRange | Number | 1 | 小时可选值设置（例如：值为 3 时，小时可选值为 3，6，9，12） | 否 | 可选 |
    | minuteRange | Number | 1 | 分可选值设置（例如：值为 20 时，分可选值为 20，40，60） | 否 | 可选 |
    | secondRange | Number | 1 | 秒可选值设置（例如：值为 20 时，分可选值为 20，40，60） | 否 | 可选 |
    | btnShow | boolean | 无 | 是否显示日历后面的按钮 | 否 | 可选 |
    | inputClass | Array | 无 | 日历input输入框的样式，class名字 | 否 | 可选 |
</template>

<script>
import daterangepicker from '../components/daterangepicker';
export default {
    data() {
        return {
            date: {
                type: 'date',
                value: '2016-09-08 至 2016-10-08',
                sep: '-',
                begin: '2015-12-20',
                end: '2016-11-20',
                dateLimit: {
                    months: 1
                },
                color: '#f00'
            },
            datetime: {
                type: 'datetime',
                value: '2016-09-08 00:02:03 至 2016-09-13 00:00:00',
                sep: '-',
                begin: '2015-12-20',
                end: '2017-11-20',
                dateLimit: {
                    days: 5
                },
                color: '#f00',
                btnShow: true
            },
            time: {
                type: 'time',
                value: '04:02:03 至 00:02:03',
                inputClass: ['col-md-6'],
                btnShow: true
            }
        };
    },
    components: {
        daterangepicker
    }
};
</script>
<style lang="less">
    .class-name{
        width:400px;
    }
</style>