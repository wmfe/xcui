<template>
    <div class="calendar-tools" v-if="type!='time'">
        <i class="glyphicon glyphicon-chevron-left float left"
           @click="prev"></i>
        <i class="glyphicon glyphicon-chevron-right float right"
       @click="next"></i>
        <div class="calendar-tit">
            <span @click="changeTitSelect(year, 'year')">
                <input v-model="year" class="calendar-tit-year" type="text" @change="changeTitSelect(year,'year')"/>年
            </span>
            <span class="calendar-tit-month" @click="changeTitSelect(month-1, 'month')">{{month+1}}月</span>
        </div>
    </div>
    <div v-show="dataTableShow">
        <table cellpadding="5" v-if="type!='time'">
            <thead>
                <tr>
                    <td v-for="week in weeks" class="week">{{week}}</td>
                </tr>
            </thead>
            <tr v-for="(k1,day) in days">
                <td
                v-for="(k2,child) in day"
                :class="{'today':child.today,'range':child.range,'disabled':child.disabled}"
                :style="{'background':color&&child.today?color:''}"
                @click="select(k1,k2,$event)">
                {{child.day}}
                </td>
            </tr>
        </table>
        <div class="calendar-time" v-show="type=='datetime' || type=='time'">
            <div class="timer clearfix">
                <div class="timer-item">
                    <label @click="dropTimeList('hour')">{{hour}}</label>:
                    <ul class="drop-down" v-show="hourListShow">
                        <li v-for="item in hourList" @click="selectTimeItem($event,'hour')">{{item}}</li>
                    </ul>
                </div>
                <div class="timer-item">
                    <label @click="dropTimeList('minute')">{{minute}}</label>:
                    <ul class="drop-down" v-show="minuteListShow">
                        <li v-for="item in minuteList" @click="selectTimeItem($event,'minute')">{{item}}</li>
                    </ul>
                </div>
                <div class="timer-item">
                    <label @click="dropTimeList('second')">{{second}}</label>
                    <ul class="drop-down" v-show="secondListShow">
                        <li v-for="item in secondList" @click="selectTimeItem($event,'second')">{{item}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <table cellpadding="6" v-show="yearTableShow">
        <tr v-show="selectRangeShow">
            <td colspan ="3">{{selectRange}}</td>
        </tr>
        <tr v-for="selects in selectRangeList">
            <td v-for="select in selects" @click="selectItem(select)">{{select}}</td>
        </tr>
    </table>
</template>

<script>
    import CalendarMixins from './calendarMixins.js';
    export default {
        mixins: [CalendarMixins],
        props: {
            otherValue: {
                type: String,
                default: ''
            },
            right: {
                type: Boolean,
                default: false
            },
            renderStar: {
                type: String,
                default: ''
            },
            renderEnd: {
                type: String,
                default: ''
            },
            dateLimit: {
                type: Object,
                default: null
            }
        },
        watch: {
            renderStar(val) {
                if (val === '' || this.right) {
                    return false;
                }
                let params = this.getValueParams(val);
                this.year = params.year;
                this.month = params.month;
                this.render(params.year, params.month);
            },
            renderEnd(val) {
                if (val === '' || !this.right) {
                    return false;
                }
                let params = this.getValueParams(val);
                this.year = params.year;
                this.month = params.month;
                this.render(params.year, params.month);
            }
        },
        methods: {
            renderElse(y, m, i, temp, line) {
                let me = this;
                let today = y + me.sep + me.zero(m + 1) + me.sep + me.zero(i);
                let otherDate = me.otherValue.substring(0, 10);
                let value = me.value.substring(0, 10);
                if (today < me.begin || today > me.end) {
                    temp[line].push({day: i, disabled: true, range: false});
                }
                else if (!me.right && today > value && today <= otherDate) {
                    temp[line].push({day: i, disabled: false, range: true});
                }
                else if (me.right && today < value && today >= otherDate) {
                    temp[line].push({day: i, disabled: false, range: true});
                }
                else if (me.right && today < otherDate) {
                    temp[line].push({day: i, disabled: true, range: false});
                }
                else {
                    temp[line].push({day: i, today: false, range: false});
                }
            },
            select(k1, k2, e) {
                if (e !== undefined) {
                    e.stopPropagation();
                }
                let me = this;
                // 取消上次选中
                let va = me.getValueParams(me.value);
                if (me.today.length > 0 && me.month === va.month && me.year === va.year) {
                    me.days[me.today[0]][me.today[1]].today = false;
                }
                // 设置当前选中天
                me.days[k1][k2].today = true;
                me.days[k1][k2].range = false;
                me.day = this.zero(me.days[k1][k2].day);
                me.today = [k1, k2];
                me.value = me.output([me.year, me.month, me.day, me.hour, me.minute, me.second]);
                me.otherValue = me.bindLimitDate();
                me.changeOtherCalender();
            },
            selectTimeItem(e, type) {
                let me = this;
                switch (type) {
                    case 'hour' :
                        me.hour = e.target.innerText;
                        me.hourListShow = false;
                        break;
                    case 'minute':
                        me.minute = e.target.innerText;
                        me.minuteListShow = false;
                        break;
                    case 'second':
                        me.second = e.target.innerText;
                        me.secondListShow = false;
                        break;
                    default:
                };
                me.value = me.output([me.year, me.month, me.day, me.hour, me.minute, me.second]);
            },
            changeOtherCalender() {
                let me = this;
                let params = me.getValueParams(me.value);
                let monthStar = me.month;
                let monthEnd = me.month;
                if (!me.right) {
                    if (me.value > me.otherValue) {
                        me.otherValue = me.value;
                    }
                    else if (me.getYearMonth(me.otherValue) > (me.getYearMonth(me.value) + 1)) {
                        monthEnd = monthEnd + 1;
                    }
                }
                else if (me.right) {
                    if (me.value < me.otherValue) {
                        me.otherValue = me.value;
                    }
                    else if (me.getYearMonth(me.value) > (me.getYearMonth(me.otherValue) + 1)) {
                        monthStar = monthStar - 1;
                    }
                }
                me.$parent.renderStar = me.output([me.year, monthStar, params.day, me.hour, me.minute, me.second]);
                me.$parent.renderEnd = me.output([me.year, monthEnd, params.day, me.hour, me.minute, me.second]);
            },
            getYearMonth(date) {
                let me = this;
                let dates = date.split(me.sep);
                return dates[0] * 12 + dates[1];
            },
            bindLimitDate() {
                let me = this;
                let otherTime = me.otherValue;
                let ov = me.otherValue;
                if (me.dateLimit) {
                    if (me.dateLimit.hasOwnProperty('months')) {
                        let month = me.month + me.dateLimit.months;
                        if (!me.right) {
                            otherTime = me.output([me.year, month, me.day, me.hour, me.minute, me.second]);
                            otherTime = otherTime > me.end ? me.end : otherTime;
                        }
                        else {
                            let bg = me.begin;
                            month = me.month - me.dateLimit.months;
                            otherTime = me.output([me.year, month, me.day, me.hour, me.minute, me.second]);
                            otherTime = otherTime < ov ? ov : otherTime < bg ? bg : otherTime;
                        }
                    }
                    else if (this.dateLimit.hasOwnProperty('days')) {
                        let day = parseInt(me.day, 10) + me.dateLimit.days;
                        if (!me.right) {
                            otherTime = me.output([me.year, me.month, day, me.hour, me.minute, me.second]);
                            otherTime = otherTime > me.end ? me.end : otherTime;
                        }
                        else {
                            let bg = me.begin;
                            day = parseInt(me.day, 10) - me.dateLimit.days;
                            otherTime = me.output([me.year, me.month, day, me.hour, me.minute, me.second]);
                            otherTime = otherTime < ov ? ov : otherTime < bg ? bg : otherTime;
                        }
                    }
                }
                return otherTime;
            }
        }
    };
</script>