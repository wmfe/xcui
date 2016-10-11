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
                <input class="form-control col-md-3" type="text" v-model="date.value" placeholder="请输入日期" @click="showDateCalendar">
                <daterangepicker
                      :show.sync="date.show"
                      :value.sync = "date.value"
                      :sep = 'date.sep'
                      :type="date.type"
                      :begin="date.begin"
                      :end.sync="date.end"
                      :date-limit="date.dateLimit"
                      ></daterangepicker>
            </div>
        </example>
        <example title="日期 + 时间选择">
            <div class="bg-pr">
                <input class="form-control col-md-3" type="text" v-model="datetime.value" placeholder="请输入日期" @click="showDateTimeCalendar">
                <daterangepicker
                      :show.sync="datetime.show"
                      :value.sync = "datetime.value"
                      :sep = 'datetime.sep'
                      :type="datetime.type"
                      :begin="datetime.begin"
                      :end.sync="datetime.end"
                      :date-limit="datetime.dateLimit"
                      ></daterangepicker>
            </div>
        </example>
        <example title="时间选择">
            <div class="bg-pr">
                <input class="form-control col-md-3" type="text" v-model="time.value" placeholder="请输入日期" @click="showTimeCalendar">
                <daterangepicker
                      :show.sync="time.show"
                      :value.sync = "time.value"
                      :type="time.type"
                      ></daterangepicker>
            </div>
        </example>
    </demo>
    
    ### 日历选择，日期＋世界选择 type: date、datetime
    #### Props

    | 名字 | 类型 | 默认 | 描述 | 是否双向绑定 | 是否必选 |
    |-----|-----|-----|-----|----|----|
    | show | Boolean | false | 控制日历选择框显示隐藏 | 双向绑定 | 必选 |
    | value | String | 无 | 默认日期 | 双向绑定 | 可选 |
    | type| String | date | date: 日历  datetime: 日期＋时间 time: 时间| 否 | 可选 |
    | sep | String | - | 日期格式设置 例如：2016-08-06 | 否 | 可选 |
    | x | Number | 0 | 日历定位的 left 值  | 否 | 可选 |
    | y | Number | 38 | 日历定位的 top 值 | 否 | 可选 |
    | begin | String | 无 | 可选日期范围的开始时间 | 否 | 可选|
    | end | String | 无 | 可选日期范围的结束时间 | 否 | 可选|
    | hourRange | Number | 1 | 小时可选值设置（例如：值为 3 时，小时可选值为 3，6，9，12） | 否 | 可选 |
    | minuteRange | Number | 1 | 分可选值设置（例如：值为 20 时，分可选值为 20，40，60） | 否 | 可选 |
    | secondRange | Number | 1 | 秒可选值设置（例如：值为 20 时，分可选值为 20，40，60） | 否 | 可选 |
    | dateLimit | object | null | 可选时间范围限制，例如：dateLimit: {months: 1} 一个月 dateLimit: {days: 20} 20天| 否 | 可选 |
    | color | String | 无 | 订制按钮颜色，值为颜色值，例如：#f00,pink | 否 | 可选 |

    ### 时间选择 type: time
    #### Props

    | 名字 | 类型 | 默认 | 描述 | 是否双向绑定 | 是否必选 |
    |-----|-----|-----|-----|----|----|
    | show | Boolean | false | 控制日历选择框显示隐藏 | 双向绑定 | 必选 |
    | value | String | 无 | 默认日期 | 双向绑定 | 可选 |
    | type| String | date | date: 日历  datetime: 日期＋时间 time: 时间| 否 | 可选 |
    | x | Number | 0 | 日历定位的 left 值  | 否 | 可选 |
    | y | Number | 38 | 日历定位的 top 值 | 否 | 可选 |
</template>

<script>
import daterangepicker from '../components/daterangepicker';
export default {
    data() {
        return {
            date: {
                show: false,
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
                show: false,
                type: 'datetime',
                value: '2016-09-08 00:02:03 至 2016-09-13 00:00:00',
                sep: '-',
                begin: '2015-12-20',
                end: '2016-11-20',
                dateLimit: {
                    days: 5
                },
                color: '#f00'
            },
            time: {
                show: false,
                type: 'time',
                value: '04:02:03 至 00:02:03'
            }
        };
    },
    components: {
        daterangepicker
    },
    methods: {
        showDateCalendar(e) {
            let me = this;
            e.stopPropagation();
            this.date.show = true;
            let bindHide = function (e) {
                e.stopPropagation();
                me.date.show = false;
                document.removeEventListener('click', bindHide, false);
            };
            setTimeout(function () {
                document.addEventListener('click', bindHide, false);
            }, 500);
        },
        showDateTimeCalendar(e) {
            let me = this;
            e.stopPropagation();
            this.datetime.show = true;
            let bindHide = function (e) {
                e.stopPropagation();
                me.datetime.show = false;
                document.removeEventListener('click', bindHide, false);
            };
            setTimeout(function () {
                document.addEventListener('click', bindHide, false);
            }, 500);
        },
        showTimeCalendar(e) {
            let me = this;
            e.stopPropagation();
            this.time.show = true;
            let bindHide = function (e) {
                e.stopPropagation();
                me.time.show = false;
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