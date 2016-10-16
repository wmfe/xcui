
<template>
    <div class="bg-pr" :class="inputClass">
        <input class="form-control col-md-3" type="text" v-model="value" placeholder="请输入日期" @click="showCalendar">
        <!-- 双日历 -->
        <div @click.stop=""
             @touchstart.stop=""
             class="calendar double-calendar"
             v-show="show">
             <div class="clearfix">
                 <div class="double-calendar-left">
                    <calendar
                        :type="type"
                        :value.sync="beginCalenderVal"
                        :sep="sep"
                        :other-value.sync="endCalenderVal"
                        :begin="begin"
                        :end="end"
                        :hour-range="hourRange"
                        :minute-range="minuteRange"
                        :second-range="secondRange"
                        :color="color"
                        :date-limit="dateLimit"
                        :render-star="renderStar"></calendar>
                 </div>
                 <div class="double-calendar-right">
                    <calendar
                        :type="type"
                        :value.sync="endCalenderVal"
                        :sep="sep"
                        :other-value.sync="beginCalenderVal"
                        :right="true"
                        :begin="begin"
                        :end="end"
                        :hour-range="hourRange"
                        :minute-range="minuteRange"
                        :second-range="secondRange"
                        :color="color"
                        :date-limit="dateLimit"
                        :render-end="renderEnd"></calendar>
                 </div>
             </div>
             <div class="calendar-button">
                <button @click="ok" :style="{'background':color}">确定</button>
                <button @click="cancel" class="cancel">取消</button>
             </div>
        </div>
        <!-- end 双日历 -->
        <span class="input-group-btn" v-if="btnShow" @click="showCalendar" >
            <button class="btn btn-default">
                <span class="glyphicon glyphicon-calendar"></span>
            </button>
        </span>
    </div>
</template>
<script>
    let calendar = {
        template: `<div class="calendar-tools" v-if="type!='time'">
                        <i class="glyphicon glyphicon-chevron-left float left"
                           @click="prev"></i>
                        <i class="glyphicon glyphicon-chevron-right float right"
                       @click="next"></i>
                        <div class="calendar-tit">
                            <span @click="changeTitSelect(year, 'year')">
                                <input v-model="year" class="calendar-tit-year" type="text" 
                                    @change="changeTitSelect(year,'year')"/>年
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
                                @click="select(k1,k2,day,$event)">
                                {{child.day}}
                                </td>
                            </tr>
                        </table>
                        <div class="calendar-time" v-show="type=='datetime' || type=='time'">
                            <div class="timer clearfix">
                                <div class="timer-item">
                                    <label @click="dropTimeList('hour')">{{hour}}</label>:
                                    <ul class="drop-down" v-show="hourListShow">
                                        <li v-for="item in hourList" 
                                            @click="selectTimeItem($event,'hour')">{{item}}</li>
                                    </ul>
                                </div>
                                <div class="timer-item">
                                    <label @click="dropTimeList('minute')">{{minute}}</label>:
                                    <ul class="drop-down" v-show="minuteListShow">
                                        <li v-for="item in minuteList" 
                                            @click="selectTimeItem($event,'minute')">{{item}}</li>
                                    </ul>
                                </div>
                                <div class="timer-item">
                                    <label @click="dropTimeList('second')">{{second}}</label>
                                    <ul class="drop-down" v-show="secondListShow">
                                        <li v-for="item in secondList" 
                                            @click="selectTimeItem($event,'second')">{{item}}</li>
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
                    </table>`,
        props: {
            type: {
                type: String,
                default: 'date'
            },
            value: {
                type: String,
                default: ''
            },
            otherValue: {
                type: String,
                default: ''
            },
            right: {
                type: Boolean,
                default: false
            },
            sep: {
                type: String,
                default: '-'
            },
            begin: {
                type: String,
                default: ''
            },
            end: {
                type: String,
                default: ''
            },
            hourRange: {
                type: Number,
                default: 1
            },
            minuteRange: {
                type: Number,
                default: 1
            },
            secondRange: {
                type: Number,
                default: 1
            },
            color: {
                type: String,
                default: ''
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
        data() {
            return {
                dataTableShow: true,
                year: '',
                month: '',
                day: '',
                weeks: ['日', '一', '二', '三', '四', '五', '六'],
                months: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
                days: [],
                today: [],
                hour: '00',
                hourList: [],
                hourListShow: false,
                minute: '00',
                minuteList: [],
                minuteListShow: false,
                second: '00',
                secondList: [],
                secondListShow: false,
                yearTableShow: false,
                selectRangeList: [],
                selectRangeShow: true,
                selectRange: '',
                currentTimeBtnShow: true
            };
        },
        created() {
            let me = this;
            let now = me.getCurrentParams();
            if (me.value !== '') {
                let params = me.getValueParams(me.value);
                me.year = params.year;
                me.month = params.month;
                me.day = params.day;
                me.hour = params.hour;
                me.minute = params.minute;
                me.second = params.second;
            }
            else {
                me.year = now.year;
                me.month = now.month;
                me.day = now.day;
                me.hour = now.hour;
                me.minute = now.minute;
                me.second = now.second;
            }
            for (let i = 0; i < 60; i++) {
                if (i % me.minuteRange === 0) {
                    me.minuteList.push(me.zero(i));
                }
                if (i % me.secondRange === 0) {
                    me.secondList.push(me.zero(i));
                }
            }
            for (let i = 1; i < 24; i++) {
                if (i % me.hourRange === 0) {
                    me.hourList.push(me.zero(i));
                }
            }
            if (me.type !== 'time') {
                me.render(me.year, me.month);
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
            render(y, m) {
                let me = this;
                let firstDayOfMonth = new Date(y, m, 1).getDay();// 当月第一天
                let lastDateOfMonth = new Date(y, m + 1, 0).getDate();// 当月最后一天
                let lastDayOfLastMonth = new Date(y, m, 0).getDate();// 前一个月的最后一天
                let params = me.getValueParams(me.value);
                let line = 0;
                let temp = [];
                let date = new Date();
                let currentTime = Number(new Date(date.getFullYear(), date.getMonth(), date.getDate()));
                me.year = y;
                for (let i = 1; i <= lastDateOfMonth; i++) {
                    let dow = new Date(y, m, i).getDay();
                    let chk = new Date();
                    let chkY = chk.getFullYear();
                    let chkM = chk.getMonth();
                    let year = params.year === me.year;
                    let month = params.month === me.month;
                    let day = params.day === i;
                    // 第一行
                    if (dow === 0) {
                        temp[line] = [];
                    }
                    else if (i === 1) {
                        temp[line] = [];
                        let k = lastDayOfLastMonth - firstDayOfMonth + 1;
                        for (let j = 0; j < firstDayOfMonth; j++) {
                            temp[line].push({day: k, disabled: true});
                            k++;
                        }
                    }
                    if (year && month && day) {
                        temp[line].push({day: i, today: true});
                        me.today = [line, temp[line].length - 1];// 当天
                    }
                    else if (chkY === me.year && chkM === me.month && i === me.day && me.value === undefined) {
                        temp[line].push({day: i, today: true});
                        me.today = [line, temp[line].length - 1];
                    }
                    else {
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
                    }
                    // 最后一行
                    if (dow === 6) {
                        line++;
                    }
                    else if (i === lastDateOfMonth) {
                        let k = 1;
                        for (dow; dow < 6; dow++) {
                            temp[line].push({day: k, disabled: true});
                            k++;
                        }
                    }
                }
                me.days = temp;
            },
            select(k1, k2, day, e) {
                if (e !== undefined) {
                    e.stopPropagation();
                }
                let me = this;
                // 取消上次选中
                if (me.today.length > 0) {
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
            prev(e) {
                e.stopPropagation();
                let me = this;
                if (me.month === 0) {
                    me.month = 11;
                    me.year = me.year - 1;
                }
                else {
                    me.month = parseInt(me.month, 10) - 1;
                }
                me.render(me.year, me.month);
            },
            next(e) {
                e.stopPropagation();
                let me = this;
                if (me.month === 11) {
                    me.month = 0;
                    me.year = me.year + 1;
                }
                else {
                    me.month = parseInt(me.month, 10) + 1;
                }
                this.render(me.year, me.month);
            },
            changeTitSelect(year, type) {
                // 双日历
                if (type === 'year') {
                    let startYear = parseInt(year / 10, 10) * 10;
                    let years1 = ['《', startYear, startYear + 1];
                    let years2 = [startYear + 2, startYear + 3, startYear + 4];
                    let years3 = [startYear + 5, startYear + 6, startYear + 7];
                    let years4 = [startYear + 8, startYear + 9, '》'];
                    this.selectRange = startYear + ' ~ ' + (startYear + 9);
                    this.selectRangeList = [years1, years2, years3, years4];
                    this.selectRangeShow = true;
                }
                else {
                    this.selectRangeList = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
                    this.selectRangeShow = false;
                }
                this.dataTableShow = false;
                this.yearTableShow = true;
            },
            selectItem(select) {
                let me = this;
                if (select === '《') {
                    this.changeTitSelect(parseInt(me.selectRange.split('~')[0].trim(), 10) - 10, 'year');
                }
                else if (select === '》') {
                    this.changeTitSelect(parseInt(me.selectRange.split('~')[0].trim(), 10) + 10, 'year');
                }
                else if (select > 12) {
                    // select为年
                    me.year = select;
                    me.render(me.year, me.month);
                    me.dataTableShow = true;
                    me.yearTableShow = false;
                }
                else {
                    // select为月
                    me.month = parseInt(select, 10) - 1;
                    me.render(me.year, me.month);
                    me.dataTableShow = true;
                    me.yearTableShow = false;
                }
            },
            dropTimeList(type) {
                let me = this;
                me.hourListShow = false;
                me.secondListShow = false;
                me.minuteListShow = false;
                switch (type) {
                    case 'hour' :
                        me.hourListShow = true;
                        break;
                    case 'minute':
                        me.minuteListShow = true;
                        break;
                    case 'second':
                        me.secondListShow = true;
                        break;
                    default:
                };
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
            zero(n) {
                return n < 10 && String(n).length === 1 ? '0' + n : n;
            },
            // 格式化输出
            output(args) {
                let me = this;
                if (args[1] === 12) {
                    args[1] = 0;
                    args[0] += 1;
                }
                else if (args[1] === -1) {
                    args[1] = 11;
                    args[0] -= 1;
                }
                if (me.type === 'time') {
                    return me.zero(args[3]) + ':' + me.zero(args[4]) + ':' + me.zero(args[5]);
                }
                let args1 = me.zero(args[1] + 1);
                let args2 = me.zero(args[2]);
                if (me.type === 'datetime') {
                    let args3 = me.zero(args[3]);
                    let args4 = me.zero(args[4]);
                    let args5 = me.zero(args[5]);
                    return args[0] + me.sep + args1 + me.sep + args2 + ' ' + args3 + ':' + args4 + ':' + args5;
                }
                if (me.type === 'date') {
                    return args[0] + me.sep + args1 + me.sep + args2;
                }
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
            getValueParams(timeCur) {
                let me = this;
                let params = {};
                if (me.type === 'date') {
                    let split = timeCur.split(me.sep);
                    params.year = parseInt(split[0], 10);
                    params.month = parseInt(split[1], 10) - 1;
                    params.day = parseInt(split[2], 10);
                }
                else if (me.type === 'datetime') {
                    let split = timeCur.split(' ');
                    let splitDate = split[0].split(me.sep);
                    params.year = parseInt(splitDate[0], 10);
                    params.month = parseInt(splitDate[1], 10) - 1;
                    params.day = parseInt(splitDate[2], 10);
                    if (split.length > 1) {
                        let splitTime = split[1].split(':');
                        params.hour = splitTime[0];
                        params.minute = splitTime[1];
                        params.second = splitTime[2];
                    }
                    else {
                        params.hour = me.hour;
                        params.minute = me.minute;
                        params.second = me.second;
                    }
                }
                else if (me.type === 'time') {
                    let split = timeCur.split(':');
                    params.hour = me.hour = split[0];
                    params.minute = me.minute = split[1];
                    params.second = me.second = split[2];
                }
                return params;
            },
            getCurrentParams() {
                let date = new Date();
                return {
                    year: date.getFullYear(),
                    month: date.getMonth(),
                    day: this.zero(date.getDate()),
                    hour: this.zero(date.getHours()),
                    minute: this.zero(date.getMinutes()),
                    second: this.zero(date.getSeconds())
                };
            },
            bindLimitDate() {
                let me = this;
                let otherTime = me.otherValue;
                if (me.dateLimit) {
                    if (me.dateLimit.hasOwnProperty('months')) {
                        let month = me.month + me.dateLimit.months;
                        if (!me.right) {
                            otherTime = me.output([me.year, month, me.day, me.hour, me.minute, me.second]);
                            otherTime = otherTime > me.otherValue ? me.otherValue : otherTime > me.end ? me.end : otherTime;
                        }
                        else {
                            let bg = me.begin;
                            month = me.month - me.dateLimit.months;
                            otherTime = me.output([me.year, month, me.day, me.hour, me.minute, me.second]);
                            otherTime = otherTime < me.otherValue ? me.otherValue : otherTime < bg ? bg : otherTime;
                        }
                    }
                    else if (this.dateLimit.hasOwnProperty('days')) {
                        let day = parseInt(me.day, 10) + me.dateLimit.days;
                        if (!me.right) {
                            otherTime = me.output([me.year, me.month, day, me.hour, me.minute, me.second]);
                            otherTime = otherTime > me.otherValue ? me.otherValue : otherTime > me.end ? me.end : otherTime;
                        }
                        else {
                            let bg = me.begin;
                            day = parseInt(me.day, 10) - me.dateLimit.days;
                            otherTime = me.output([me.year, me.month, day, me.hour, me.minute, me.second]);
                            otherTime = otherTime < me.otherValue ? me.otherValue : otherTime < bg ? bg : otherTime;
                        }
                    }
                }
                return otherTime;
            }
        }
    };

    export default {
        props: {
            show: {
                type: Boolean,
                twoWay: true,
                default: false
            },
            type: {
                type: String,
                default: 'date'
            },
            value: {
                type: String,
                twoWay: true,
                default: ''
            },
            begin: {
                type: String,
                default: ''
            },
            end: {
                type: String,
                default: ''
            },
            hourRange: {
                type: Number,
                default: 1
            },
            minuteRange: {
                type: Number,
                default: 1
            },
            secondRange: {
                type: Number,
                default: 1
            },
            sep: {
                type: String,
                default: '-'
            },
            color: {
                type: String,
                default: ''
            },
            dateLimit: {
                type: Object,
                default: null
            },
            inputClass: {
                type: Array,
                default: function () {
                    return [];
                }
            },
            btnShow: {
                type: Boolean,
                default: false
            }
        },
        components: {
            calendar
        },
        data() {
            return {
                beginCalenderVal: '',
                endCalenderVal: '',
                renderStar: '',
                renderEnd: ''
            };
        },
        created() {
            if (this.btnShow) {
                this.inputClass.push('input-group');
            }
            if (this.value !== '') {
                let values = this.value.split('至');
                this.beginCalenderVal = values[0].trim();
                this.endCalenderVal = values[1].trim();
                if (this.type === 'datetime') {
                    this.beginCalenderVal = this.beginCalenderVal + ' 00:00:00';
                    this.endCalenderVal = this.endCalenderVal + ' 00:00:00';
                }
            }
        },
        methods: {
            ok() {
                this.value = this.beginCalenderVal + ' 至 ' + this.endCalenderVal;
                this.show = false;
            },
            cancel() {
                this.show = false;
            },
            showCalendar(e) {
                let me = this;
                e.stopPropagation();
                me.show = true;
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
 
<style lang="less">
    @base-color:#46c3c1;
    @base-size:14px;
    @tit-color:#333;

    .calendar{
        width: 240px;
        padding: 10px;
        background: #fff;
        position: absolute;
        border: 1px solid #DEDEDE;
        border-radius: 2px;
        opacity: .95;
        transition: all .5s ease;
        left:0;
        top:38px;
        &-enter{
            .calendar-leave{
                opacity: 0;
                transform: translate3d(0,-10px, 0);
            }
        }
        &-tit{
            text-align:center;
            margin: 0 auto;
            width: 104px;
            font-weight:bold;
            input{
                color: @tit-color;
                height: 24px;
                outline:medium;
                text-align: center;
                border: none;
                background-color: transparent;
            }
            &-year{
                width:36px;
            }
            &-month{
                width:18px;
                margin-left:2px;
            }
        }
        &:before{
            position: absolute;
            left: 30px;
            top: -10px;
            content: "";
            border: 5px solid rgba(0, 0, 0, 0);
            border-bottom-color: #DEDEDE;
        }
        &:after{
            position: absolute;
            left: 30px;
            top: -9px;
            content: "";
            border: 5px solid rgba(0, 0, 0, 0);
            border-bottom-color: #fff;
        }
        &-tools{
            height: 32px;
            font-size: @base-size;
            line-height: 32px;
            color: @tit-color;
            .float{
                &.left{
                    float: left
                }
                &.right{
                    float: right;
                }
            }
            &>i{
                margin: 0 10px;
                line-height: 32px;
                cursor: pointer;
                color: #707070;
                &:hover{
                    color: @tit-color;
                }
            }
        }
        table{
            clear: both;
            width: 100%;
            margin-bottom: 10px;
            border-collapse: collapse;
            color: #444;
            td{
                margin:2px !important;
                padding: 5px 0;
                width: 14.28571429%;
                text-align: center;
                vertical-align: middle;
                font-size: @base-size;
                line-height: 125%;
                cursor: pointer;
                border: 0;
                &:hover{
                    background: #f3f8fa;
                }
                &.week{
                    pointer-events:none !important;
                    cursor: default !important;
                }
                &.disabled{
                    color: #c0c0c0;
                    pointer-events: none !important;
                    cursor: default !important;
                }
                &.today{
                    background-color: @base-color;
                    color: #fff;
                    font-size:@base-size;
                    border-radius: 4px;
                    .lunar{
                        color:#fff;
                    }
                }
                &.range{
                    background:#e2eff5;
                }
            }
            thead{
                td{
                    text-transform: uppercase;
                }
            }
        }
        
        .timer{
            margin: 0 auto 10px;
            width:120px;
            input{
                border-radius: 2px;
                padding: 5px;
                font-size: @base-size;
                line-height: 18px;
                color: @base-color;
                width: 50px;
                text-align: center;
                border: 1px solid #efefef;
                &:focus{
                    border: 1px solid @base-color;
                }
            }
            &-item{
                float: left;
                text-align:center;
                position:relative;
                cursor:pointer;
                &-current{
                    color:@base-color;
                    line-height:24px;
                    font-size: 14px;
                }
            }
            label {
                margin:0;
                width:30px;
                padding:5px;
                line-height:@base-size;
                margin-right:4px;
                font-weight: normal;
            }
        }
        &-button{
            text-align: center;
            button{
                border:none;
                cursor: pointer;
                display: inline-block;
                min-height: 1em;
                vertical-align: baseline;
                background:@base-color;
                color:#fff;
                margin: 0 .3em 0 0;
                padding: .6em 2em;
                font-size: 1em;
                line-height: 1em;
                text-align: center;
                border-radius: .3em;
                &.cancel{
                    background:#efefef;
                    color:#666;
                }
            }
        }
        .lunar{
            font-size: 11px;
            line-height: 150%;
            color: #aaa;
        }
        .drop-down{
            position: absolute;
            top: 24px;
            left: -10px;
            width: 50px;
            height: 140px;
            background: #fff;
            border: 1px solid #efefef;
            padding: 0;
            margin: 0;
            overflow-y: scroll;
            li {
                width:50px;
                list-style:none;
                &.on{
                    background:#eee;
                }
                &:hover{
                    background:#eee;
                }
            }
        }
    }
    .double-calendar{
        width:490px;
        z-index:999;
        &-left{
            width:220px;
            float:left;
        }
        &-right{
            width:220px;
            float:right;
        }
        .calendar-button{
            padding-top:10px;
            border-top:1px solid #ddd;
        }
    }
    .clearfix{
        zoom: 1;
    }
    .clearfix:after{
        display: block;
        width: 0;
        height: 0;
        visibility: hidden;
        content: '';
        clear: both;
    }
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