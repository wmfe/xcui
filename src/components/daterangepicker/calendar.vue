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
                :class="{'today':child.today,'range':child.range,'off':child.disabled,'todayleft':!right,'todayright':right,'prev':child.prev, 'noclick':child.noclick}"
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
            startRender: null,
            dateLimit: {
                type: Object,
                default: null
            },
            initialDate: String
        },
        watch: {
            startRender(val) {
                if (!val) {
                    return false;
                }
                this.value = this.output(this.value);
                let params = this.dateParams;
                this.year = params.year;
                this.month = params.month;
                this.hour = params.hour;
                this.day = params.day;
                this.minute = params.minute;
                this.second = params.second;
                this.render(params.year, params.month);
            }
        },
        created() {
            this.initialDate = this.output(this.value);
        },
        methods: {
            renderElse(y, m, i, temp, line) {
                let me = this;
                let format = me.defaultFormat;
                let today = me.output([y, m, i], format);
                let value = me.output(me.value, format);
                let otherDate = me.output(me.otherValue, format);
                let isMinDate = me.minDate && (today < me.output(me.minDate, format));
                let isMaxDate = me.maxDate && (today > me.output(me.maxDate, format));
                if (isMinDate || isMaxDate) {
                    temp[line].push({day: i, disabled: true, range: false, noclick: true});
                }
                else if (!me.right && today > value && today <= otherDate) {
                    temp[line].push({day: i, disabled: false, range: true});
                }
                else if (me.right && today < value && today >= otherDate) {
                    temp[line].push({day: i, disabled: false, range: true});
                }
                else if (me.right && today < otherDate) {
                    temp[line].push({day: i, disabled: true, range: false, prev: true});
                }
                else {
                    temp[line].push({day: i, today: false, range: false});
                }
            },
            select(k1, k2, e) {
                if (e !== undefined) {
                    e.stopPropagation();
                }
                let className = e.target.className;
                if (className === 'off todayright prev' || className.indexOf('noclick') !== -1) {
                    return false;
                }
                let me = this;
                let daySeleted = me.days[k1][k2];
                // 取消上次选中
                me.output(me.value);
                let va = me.dateParams;
                if (me.today.length > 0 && me.month === va.month && me.year === va.year) {
                    me.days[me.today[0]][me.today[1]].today = false;
                }
                // 设置当前选中天
                daySeleted.today = true;
                daySeleted.range = false;
                me.day = this.zero(me.days[k1][k2].day);
                me.today = [k1, k2];
                if (daySeleted.disabled) {
                    me.month = k1 === 0 ? (me.month - 1) : (me.month + 1);
                    let om = me.outputMonth(me.month, me.year);
                    me.year = om.y;
                    me.month = om.m;
                    me.value = me.output([me.year, me.month, me.day, me.hour, me.minute, me.second]);
                    me.render(me.year, me.month);
                }
                else {
                    me.today = [k1, k2];
                    me.value = me.output([me.year, me.month, me.day, me.hour, me.minute, me.second]);
                }
                me.otherValue = me.bindLimitDate();
                me.changeOtherCalender();
            },
            changeOtherCalender() {
                let me = this;
                let time = new Date().getTime();
                if (!me.right) {
                    if (me.value > me.otherValue) {
                        me.otherValue = me.value;
                    }
                }
                else if (me.right) {
                    if (me.value < me.otherValue) {
                        me.otherValue = me.value;
                    }
                }
                me.$parent.startRender = time;
            },
            getYearMonth(date) {
                this.output(date);
                let params = this.dateParams;
                return params.year * 12 + params.month;
            },
            bindLimitDate() {
                let me = this;
                let format = me.defaultFormat;
                me.otherValue = me.otherValue ? me.output(me.otherValue) : me.value;
                let oValue = me.output(me.otherValue, format);
                let ovs = me.dateParams;
                let bg = me.minDate && me.output(me.minDate, format);
                let ed = me.maxDate && me.output(me.maxDate, format);
                let y = ovs.year;
                let m = ovs.month;
                let d = ovs.day;
                let meValue = me.output(me.value, format);
                let meDate = me.dateParams.day;
                let AddDayCount = 0;
                let params = null;
                let otherTime = '';
                if (me.right && me.dateLimit) {
                    if (me.dateLimit.hasOwnProperty('months')) {
                        for (let i1 = 0; i1 < me.dateLimit.months; i1++) {
                            AddDayCount += new Date(y, (m + i1 + 1), 0).getDate();
                        }
                    }
                    else if (me.dateLimit.hasOwnProperty('days')) {
                        AddDayCount += me.dateLimit.days;
                    }
                    if (meValue > me.getDataStr(AddDayCount, oValue).val) {
                        AddDayCount = 0;
                        let diffDate = 0;
                        if (me.dateLimit && me.dateLimit.hasOwnProperty('months')) {
                            let limitMonth = me.dateLimit.months;
                            for (let i2 = 0; i2 < limitMonth; i2++) {
                                let count = meDate === me.lastDateOfMonth ? 0 : 1;
                                let nextMaxDate = new Date(y, (m - i2 + count), 0).getDate();
                                AddDayCount -= nextMaxDate;
                            }
                            diffDate = meDate - new Date(y, (m - limitMonth + 1), 0).getDate();
                            if (meDate !== me.lastDateOfMonth && diffDate > 0) {
                                AddDayCount += diffDate;
                            }
                        }
                        else if (me.dateLimit.hasOwnProperty('days')) {
                            AddDayCount -= me.dateLimit.days;
                        }
                        params = me.getDataStr(AddDayCount, meValue);
                        y = params.y;
                        m = params.m;
                        d = params.d;
                    }
                }
                else if (me.dateLimit) {
                    if (me.dateLimit.hasOwnProperty('months')) {
                        for (let k1 = 0; k1 < me.dateLimit.months; k1++) {
                            AddDayCount -= new Date(y, (m - k1), 0).getDate();
                        }
                    }
                    else if (me.dateLimit.hasOwnProperty('days')) {
                        AddDayCount -= me.dateLimit.days;
                    }
                    if (meValue < me.getDataStr(AddDayCount, oValue).val || meValue > oValue) {
                        AddDayCount = 0;
                        let diffDate2 = 0;
                        if (me.dateLimit && me.dateLimit.hasOwnProperty('months')) {
                            let limitMonth = me.dateLimit.months;
                            for (let k2 = 0; k2 < limitMonth; k2++) {
                                let count2 = (meDate === me.lastDateOfMonth ? 2 : 1);
                                let nextMaxDate2 = new Date(me.year, (me.month + k2 + count2), 0).getDate();
                                AddDayCount += nextMaxDate2;
                            }
                            diffDate2 = meDate - new Date(me.year, (me.month + limitMonth + 1), 0).getDate();
                            if (meDate !== me.lastDateOfMonth && diffDate2 > 0) {
                                AddDayCount -= diffDate2;
                            }
                        }
                        else if (me.dateLimit.hasOwnProperty('days')) {
                            AddDayCount += me.dateLimit.days;
                        }
                        params = me.getDataStr(AddDayCount, meValue);
                        y = params.y;
                        m = params.m;
                        d = params.d;
                    }
                }
                otherTime = me.output([y, m, d], format);
                if (bg) {
                    otherTime = otherTime < bg ? bg : (otherTime > ed ? ed : otherTime);
                }
                return otherTime;
            },
            getDataStr(AddDayCount, nowDate) {
                let me = this;
                let date = new Date(nowDate);
                date.setDate(date.getDate() + AddDayCount);
                let y = date.getFullYear();
                let m = date.getMonth();
                let d = date.getDate();
                return {
                    val: y + '-' + me.zero(m + 1) + '-' + me.zero(d),
                    y: y,
                    m: m,
                    d: d
                };
            }
        }
    };
</script>