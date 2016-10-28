<template lang="md">
    ## datepicker 日期选择框

    1、支持日历筛选，日历＋时间，时间筛选
    2、可以配置日期的筛选范围，日期格式
    3、对于时间的筛选，可以倍数形式定制筛选时间的值，例如分钟可以订制筛选值为15，30，45，60
    4、可以直接获取当前的时间
    5、年筛选可以直接输入，可以筛选
    6、支持定制皮肤颜色

    <demo>
        <example title="日历选择">
            <datepicker
                  :value.sync = "date.value"
                  :sep = 'date.sep'
                  :type="date.type"
                  ></datepicker>
        </example>
        <example title="日历+时间选择">
            <datepicker
                  :value.sync = "datetime.value"
                  :btn-show = "datetime.btnShow"
                  :sep = 'datetime.sep'
                  :type="datetime.type"
                  :color="datetime.color"
                  :btn-show="datetime.btnShow"
                  :input-class = "datetime.inputClass"
                  ></datepicker>
        </example>
        <example title="时间选择">
            <div class="input-group">
                <datepicker
                      :value.sync = "time.value"
                      :btn-show="datetime.btnShow"
                      :type="time.type"
                      ></datepicker>
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
    | color | String | 无 | 订制按钮颜色，值为颜色值，例如：#f00,pink | 否 | 可选 |
    | btnShow | boolean | 无 | 是否显示日历后面的按钮 | 否 | 可选 |
    | inputClass | Array | 无 | 日历input输入框的样式，class名字 | 否 | 可选 |
</template>
<script>
import datepicker from '../components/datepicker';
export default {
    data() {
        return {
            date: {
                show: false,
                type: 'date',
                value: '2016-02-01',
                sep: '-',
                begin: '2015-12-20',
                end: '2016-09-09'
            },
            datetime: {
                show: false,
                type: 'datetime',
                value: '2016-02-01',
                color: 'pink',
                btnShow: true,
                inputClass: ['col-md-6']
            },
            time: {
                show: false,
                type: 'time',
                value: ''
            }
        };
    },
    components: {
        datepicker
    }
};
</script>