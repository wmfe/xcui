<template lang="md">
    ## daterangepicker 双日期选择框

    1、支持日历筛选，日历＋时间，时间筛选
    2、可以配置日期的筛选范围，日期格式
    3、对于时间的筛选，可以倍数形式定制筛选时间的值，例如分钟可以订制筛选值为15，30，45，60
    4、可以直接获取当前的时间
    5、年筛选可以直接输入，可以筛选
    6、支持定制皮肤颜色

    ## 应用指南
    1.要把datepicker放在一个拥有定位属性的容器中,因为datepicker是相对父级元素定位的。

    <demo>
        <example title="日历选择">
            <div class="bg-pr">
                <input class="form-control col-md-3" type="text" v-model="value" placeholder="请输入日期" @click="showDateCalendar">
                <daterangepicker
                      :show.sync="show"
                      :value.sync = "value"
                      :sep = 'sep'
                      :type="type"
                      :double="double"
                      ></daterangepicker>
            </div>
        </example>
    </demo>

    ## 组件依赖
    > 无

    ## Props

    | 名字 | 类型 | 默认 | 描述 | 是否双向绑定 | 是否必选 |
    |-----|-----|-----|-----|----|----|
    | show | Boolean | false | 控制日历选择框显示隐藏 | 双向绑定 | 必选 |
    | value | String | 无 | 默认日期 | 双向绑定 | 可选 |
    | type| String | date | date:日历  datetime:日历＋时间 time:时间 | 否 | 可选 |
    | sep | String | - | 日期格式设置 例如：2016-08-06 | 否 | 可选 |
    | x | Number | 0 | 日历定位的 left 值  | 否 | 可选 |
    | y | Number | 38 | 日历定位的 top 值 | 否 | 可选 |
    | begin | String | 无 | 单选日历，可选日期范围的开始时间 | 否 | 可选|
    | end | String | 无 | 单选日历，可选日期范围的结束时间 | 否 | 可选|
    | hourRange | Number | 1 | 小时可选值设置（例如：值为 3 时，小时可选值为 3，6，9，12） | 否 | 可选 |
    | minuteRange | Number | 1 | 分可选值设置（例如：值为 20 时，分可选值为 20，40，60） | 否 | 可选 |
    | secondRange | Number | 1 | 秒可选值设置（例如：值为 20 时，分可选值为 20，40，60） | 否 | 可选 |
    | color | String | 无 | 订制按钮颜色，值为颜色值，例如：#f00,pink | 否 | 可选 |
</template>
<script>
import daterangepicker from '../components/DateRangePicker';
export default {
    data() {
        return {
            show: false,
            type: 'datetime',
            value: '2016-02-01',
            sep: '-',
            begin: '2015-12-20',
            end: '2016-09-09',
            double: true
        };
    },
    components: {
        daterangepicker
    },
    methods: {
        showDateCalendar(e) {
            let me = this;
            e.stopPropagation();
            this.show = true;
            let bindHide = function (e) {
                e.stopPropagation();
                me.show = false;
                document.removeEventListener('click', bindHide, false);
            };
            setTimeout(function () {
                document.addEventListener('click', bindHide, false);
            }, 500);
        }
    }
};
</script>
<style lang="less" scoped>
.bg-pr{
    position:relative;
}
.btn-default {
    color: #666;
    border: #ccc solid 1px;
    background-color: #fff;
    margin-left:-1px;
    border-radius: 0 4px 4px 0;
}
</style>