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
        <example title="simple">
            <xcui-daterangepicker
                :start-date.sync="'2016-11-01'"
                :end-date.sync="'2016-11-09'"
                :sep="' － '">
            </xcui-daterangepicker>
        </example>
        <p> 最简单的用法，startDate：日期开始时间，endDate：日期结束时间, 格式</p>
        <p> startDate／endDate：可以传不同日期格式，例如：date对象 new Date()，日期字符串 2018-09-09，时间搓 1477980169262，也可以不传，默认当天，date.value值为 时间戳1477980088896</p>
        <p> sep：双日历之间间隔符，例如sep值为“ 至 ” 日期格式为 2016-09-08 00:02:00 至 2016-09-13 00:02:00</p>
        <example title="日期格式">
            <xcui-daterangepicker
                :start-date.sync="''"
                :end-date.sync="''"
                :min-date="'2015/12/20'"
                :max-date="'2016/11/20'"
                :date-limit="date.dateLimit">
            </xcui-daterangepicker>
        </example>
        <p> format,min-date,max-date同datapicker组件配置</p>
        <p> date-limit：可选时间范围限制，例如：dateLimit: {months: 1} 一个月 dateLimit: {days: 20} 20天</p>
        <example title="日期 + 时间选择">
            <xcui-daterangepicker
                  format="YYYY-MM-DD hh:mm:ss"
                  :start-date.sync="startdate"
                  :end-date.sync="enddate"
                  :hour-range="'3'"
                  :minute-range="'10'"
                  :second-range="'20'">
            </xcui-daterangepicker>
        </example>
        <p> hour-range：小时可选值设置（例如：值为 3 时，小时可选值为0, 3，6，9，12</p>
        <p> minute-range：分钟可选值设置，同上</p>
        <p> second-range：分钟可选值设置，同上</p>
        <example title="样式以及回调配置">
            <xcui-daterangepicker
                class-name="class-name"
                color="pink"
                format="YYYY-MM-DD hh:mm:ss"
                :btn-show="true"
                @on-change="onChange"
                :hour-range="'3'">
            </xcui-daterangepicker>
        </example>
        <p> class-name：日历样式，class名字</p>
        <p> color：按钮颜色，值为颜色值，例如：#f00,pink</p>
        <p> on-change：选择日期后的回调，参数 val(当前值) oldval(上次值)，onChange(val, oldVal) {}</p>
        <p> btn-show: 按钮是否显示</p>
        <example title="时间选择">
            <xcui-daterangepicker
                  :start-date.sync="'04:02:03'"
                  :end-date.sync="'05:02:03'"
                  format="hh:mm:ss">
            </xcui-daterangepicker>
        </example>
    </demo>
    
    ### 日历选择，日期＋时间选择
    #### Props

    | 名字 | 类型 | 默认 | 描述 | 是否双向绑定 | 是否必选 |
    |-----|-----|-----|-----|----|----|
    | startDate | String,object,时间戳 | 无 | 日期开始时间 | 双向绑定 | 必选 |
    | endDate | String,object,时间戳 | 无 | 日期结束时间 | 双向绑定 | 必选 |
    | minDate | String,object,时间戳 | 无 | 日期可选最小值 | 否 | 可选|
    | maxdate | String,object,时间戳 | 无 | 日期可选最大值 | 否 | 可选|
    | sep | String | 至 | 双日历之间间隔符 | 否 | 可选|
    | format | String | YYYY-MM-DD | 展示的日期格式，配置例如，分隔符可自选：年-月-日 YYYY-MM-DD，年-月-日 时：分：秒 YYYY-MM-DD hh:mm:ss， 时/分/秒 hh/mm/ss | 静态属性 | 可选 |
    | dateLimit | object | null | 可选时间范围限制，例如：dateLimit: {months: 1} 一个月 dateLimit: {days: 20} 20天| 否 | 可选 |
    | hourRange | Number | 1 | 小时可选值设置（例如：值为 3 时，小时可选值为0，3，6，9，12 .....） | 否 | 可选 |
    | minuteRange | Number | 1 | 分可选值设置（例如：值为 20 时，分可选值为0，20，40） | 否 | 可选 |
    | secondRange | Number | 1 | 秒可选值设置（例如：值为 20 时，分可选值为0，20，40） | 否 | 可选 |
    | color | String | 无 | 订制按钮颜色，值为颜色值，例如：#f00,pink | 否 | 可选 |
    | btnShow | boolean | 无 | 是否显示日历后面的按钮 | 否 | 可选 |
    | inputClass | Array | 无 | 日历input输入框的样式，class名字 | 否 | 可选 |
    | onChange | object | 无 | 选择日期后的回调，参数 val(当前值) oldval(上次值) @onChange | 否 | 可选 |
</template>

<script>
export default {
    data() {
        return {
            valueDemo: '',
            startdate: '2016-09-08 00:02:00',
            enddate: '2016-09-13 00:02:00',
            date: {
                begin: '2015-12-20',
                end: '2016-11-20',
                dateLimit: {
                    months: 1
                },
                color: '#f00'
            },
            datetime: {
                begin: '2015-12-20',
                end: '2017-11-20',
                dateLimit: {
                    days: 5
                },
                color: '#f00',
                btnShow: true
            },
            time: {
                inputClass: 'class-name',
                btnShow: true
            }
        };
    },
    watch: {
        valueDemo(val) {
            console.log('simple: ' + val);
        },
        startdate(val) {
            console.log('日期 + 时间选择: ' + val);
        }
    },
    methods: {
        onChange(startDate, endDate) {
            console.log('startDate' + startDate);
            console.log('endDate' + endDate);
        }
    }
};
</script>
<style lang="less">
    .class-name{
        width:400px;
    }
</style>