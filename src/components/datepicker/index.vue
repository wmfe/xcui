<template>
    <div class="bg-pr" :class="inputClass">
        <input class="form-control"  type="text" v-model="value" placeholder="请输入日期" @click="showCalendar">
        <div @click.stop=""
             @touchstart.stop=""
             class="calendar"
             v-show="show"
             :style="{'left':x+'px','top':y+'px'}">
            <div class="calendar-tools" v-if="type!='time'">
                <i class="glyphicon glyphicon-chevron-left float left"
                   @click="prev"></i>
                <i class="glyphicon glyphicon-chevron-right float right"
                   @click="next"></i>
                <div class="calendar-tit">
                    <span @click="changeTitSelect(year, 'year')"><input v-model="year" class="calendar-tit-year" type="text" @change="changeTitSelect(year,'year')"/>年</span>
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
                        :class="{'today':child.today,'disabled':child.disabled}"
                        :style="{'background':color&&child.today?color:''}"
                        @click="select(k1,k2,$event)">
                        {{child.day}}
                        <div class="lunar" v-if="showLunar">{{child.lunar}}</div>
                        </td>
                    </tr>
                </table>
                <div class="calendar-time" v-show="type=='datetime'|| type=='time'">
                    <div  class="timer clearfix">
                        <div class="timer-item">
                            <label @click="dropHourList">{{hour}}</label>:
                            <ul class="drop-down" v-show="hourListShow">
                                <li v-for="item in hourList" @click="selectHourItem">{{item}}</li>
                            </ul>
                        </div>
                        <div class="timer-item">
                            <label @click="dropMinuteList">{{minute}}</label>:
                            <ul class="drop-down" v-show="minuteListShow">
                                <li v-for="item in minuteList" @click="selectMinuteItem">{{item}}</li>
                            </ul>
                        </div>
                        <div class="timer-item">
                            <label @click="dropSecondList">{{second}}</label>
                            <ul class="drop-down" v-show="secondListShow">
                                <li v-for="item in secondList" @click="selectSecondItem">{{item}}</li>
                            </ul>
                        </div>
                        <div class="timer-item">
                            <div class="timer-item-current"
                                @click="currentTime"
                                :style="{'color':color}">当前</div>
                        </div>
                    </div>
                </div>
                <div class="calendar-button" v-show="type=='datetime'|| type=='time' || range">
                    <button @click="ok" :style="{'background':color}">确定</button>
                    <button @click="cancel" class="cancel">取消</button>
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
        </div>
        <span class="input-group-btn" v-if="btnShow" @click="showCalendar" >
            <button class="btn btn-default">
                <span class="glyphicon glyphicon-calendar"></span>
            </button>
        </span>
    </div>
</template>

<script>
    export default {
        props: {
            btnShow: {
                type: Boolean,
                default: false
            },
            inputClass: {
                type: Array,
                default: function () {
                    return [];
                }
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
            x: {
                type: Number,
                default: 0
            },
            y: {
                type: Number,
                default: 38
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
            }
        },
        data() {
            return {
                show: false,
                year: 0,
                month: 0,
                day: 0,
                hour: '00',
                hourList: [],
                hourListShow: false,
                minute: '00',
                minuteList: [],
                minuteListShow: false,
                second: '00',
                secondList: [],
                secondListShow: false,
                days: [],
                today: [],
                currentMonth: Number,
                weeks: ['日', '一', '二', '三', '四', '五', '六'],
                months: [],
                dataTableShow: true,
                yearTableShow: false,
                selectRangeList: [],
                selectRangeShow: true,
                selectRange: '',
                currentTimeBtnShow: true,
                selectValue: ''
            };
        },
        created() {
            let now = new Date();
            let me = this;
            if (this.btnShow) {
                this.inputClass.push('input-group');
            }
            if (this.value !== '') {
                if (this.value.indexOf('-') !== -1) {
                    this.sep = '-';
                }
                if (this.value.indexOf('.') !== -1) {
                    this.sep = '.';
                }
                if (this.type === 'date') {
                    let split = this.value.split(me.sep);
                    this.year = parseInt(split[0], 10);
                    this.month = parseInt(split[1], 10) - 1;
                    this.day = parseInt(split[2], 10);
                }
                else if (this.type === 'datetime') {
                    let split = this.value.split(' ');
                    let splitDate = split[0].split(me.sep);
                    this.year = parseInt(splitDate[0], 10);
                    this.month = parseInt(splitDate[1], 10) - 1;
                    this.day = parseInt(splitDate[2], 10);
                    if (split.length > 1) {
                        let splitTime = split[1].split(':');
                        this.hour = splitTime[0];
                        this.minute = splitTime[1];
                        this.second = splitTime[2];
                    }
                }
            }
            else {
                this.year = now.getFullYear();
                this.month = now.getMonth();
                this.day = now.getDate();
                this.hour = this.zero(now.getHours());
                this.minute = this.zero(now.getMinutes());
                this.second = this.zero(now.getSeconds());
            }
            for (let i = 0; i < 60; i++) {
                let item = i;
                if (i % this.minuteRange === 0) {
                    if (i < 10) {
                        item = '0' + i;
                    }
                    this.minuteList.push(item);
                }
                if (i % this.secondRange === 0) {
                    if (i < 10) {
                        item = '0' + i;
                    }
                    this.secondList.push(item);
                }
            }
            for (let i = 1; i < 13; i++) {
                let item = i;
                if (i % this.hourRange === 0) {
                    if (i < 10) {
                        item = '0' + i;
                    }
                    this.hourList.push(item);
                }
                this.months.push(i);
            }
            this.render(me.year, me.month);
        },
        methods: {
            zero(n) {
                return n < 10 && String(n).length === 1 ? '0' + n : n;
            },
            render(y, m) {
                let me = this;
                let firstDayOfMonth = new Date(y, m, 1).getDay();// 当月第一天
                let lastDateOfMonth = new Date(y, m + 1, 0).getDate();// 当月最后一天
                let lastDayOfLastMonth = new Date(y, m, 0).getDate();// 最后一月的最后一天
                let seletSplit = me.value.split(' ')[0].split(me.sep);
                let i;
                let line = 0;
                let temp = [];
                let date = new Date();
                let currentTime = Number(new Date(date.getFullYear(), date.getMonth(), date.getDate()));
                me.year = y;
                me.currentMonth = me.months[m];
                for (i = 1; i <= lastDateOfMonth; i++) {
                    let dow = new Date(y, m, i).getDay();
                    let chk = new Date();
                    let chkY = chk.getFullYear();
                    let chkM = chk.getMonth();
                    let seletSplit1 = (parseInt(seletSplit[0], 10) === me.year);
                    let seletSplit2 = (parseInt(seletSplit[1], 10) - 1 === me.month);
                    let seletSplit3 = (parseInt(seletSplit[2], 10) === i);
                    let seletSplit4 = (me.begin !== undefined || me.end !== undefined);
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
                    if (seletSplit1 && seletSplit2 && seletSplit3 && seletSplit4) {
                        temp[line].push({day: i, today: true});
                        me.today = [line, temp[line].length - 1];// 当天
                    }
                    else if (chkY === me.year && chkM === me.month && i === me.day && me.value === undefined) {
                        temp[line].push({day: i, today: true});
                        me.today = [line, temp[line].length - 1];
                    }
                    else {
                        let thisTime = Number(new Date(me.year, me.month, i));
                        let options = {day: i, today: false};
                        options = me.bindSingerTime(thisTime, currentTime, options);
                        temp[line].push(options);
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
                }// end for
                me.days = temp;
            },
            // 1.判断begin和end的日期
            bindSingerTime(thisTime, currentTime, options) {
                let me = this;
                if (me.begin !== undefined) {
                    let beginSplit = me.begin.split(me.sep);
                    let beginSplit1 = parseInt(beginSplit[0], 10);
                    let beginSplit2 = parseInt(beginSplit[1], 10) - 1;
                    let beginSplit3 = parseInt(beginSplit[2], 10);
                    let beginTime = Number(new Date(beginSplit1, beginSplit2, beginSplit3));
                    if (beginTime > thisTime) {
                        options.disabled = true;
                    }
                    if (beginTime > currentTime) {
                        me.currentTimeBtnShow = false;
                    }
                }
                if (me.end !== undefined) {
                    let endSplit = me.end.split(me.sep);
                    let endSplit1 = parseInt(endSplit[0], 10);
                    let endSplit2 = parseInt(endSplit[1], 10) - 1;
                    let endSplit3 = parseInt(endSplit[2], 10);
                    let endTime = Number(new Date(endSplit1, endSplit2, endSplit3));
                    if (endTime < thisTime) {
                        options.disabled = true;
                    }
                    if (endTime < currentTime) {
                        me.currentTimeBtnShow = false;
                    }
                }
                return options;
            },
            currentTime() {
                let date = new Date();
                let year = date.getFullYear();
                let month = date.getMonth();
                let hour = this.zero(date.getHours());
                let day = this.zero(date.getDate());
                let minute = this.zero(date.getMinutes());
                let second = this.zero(date.getSeconds());
                let me = this;
                let value = this.value;
                this.year = year;
                this.month = month;
                this.day = day;
                this.hour = hour;
                this.minute = minute;
                this.second = second;
                this.selectValue = me.output([me.year, me.month, me.day, me.hour, me.minute, me.second]);
                this.value = this.selectValue;
                if (this.currentTimeBtnShow) {
                    this.render(year, month);
                }
                this.value = value;
                this.hourListShow = false;
                this.minuteListShow = false;
                this.secondListShow = false;
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
                me.render(me.year, me.month);
            },
            select(k1, k2, e) {
                if (e !== undefined) {
                    e.stopPropagation();
                }
                let me = this;
                // 取消上次选中
                if (this.today.length > 0) {
                    this.days[this.today[0]][this.today[1]].today = false;
                }
                // 设置当前选中天
                this.days[k1][k2].today = true;
                this.day = me.zero(me.days[k1][k2].day);
                this.today = [k1, k2];
                this.selectValue = this.output([me.year, me.month, me.day, me.hour, me.minute, me.second]);
                if (this.type === 'date') {
                    this.value = this.selectValue;
                    this.showFalse();
                }
            },
            ok() {
                this.value = this.selectValue;
                this.showFalse();
            },
            cancel() {
                this.showFalse();
            },
            showFalse() {
                this.hourListShow = false;
                this.minuteListShow = false;
                this.secondListShow = false;
                this.show = false;
            },
            // 格式化输出
            output(args) {
                let me = this;
                if (me.type === 'time') {
                    return me.zero(args[3]) + ':' + me.zero(args[4]) + ':' + me.zero(args[5]);
                }
                if (me.type === 'datetime') {
                    let args1 = me.zero(args[1] + 1);
                    let args2 = me.zero(args[2]);
                    let args3 = me.zero(args[3]);
                    let args4 = me.zero(args[4]);
                    let args5 = me.zero(args[5]);
                    return args[0] + me.sep + args1 + me.sep + args2 + ' ' + args3 + ':' + args4 + ':' + args5;
                }
                if (me.type === 'date') {
                    return args[0] + me.sep + me.zero(args[1] + 1) + me.sep + me.zero(args[2]);
                }
            },
            dropHourList() {
                this.hourListShow = true;
                this.secondListShow = false;
                this.minuteListShow = false;
            },
            selectHourItem(e) {
                this.hour = e.target.innerText;
                this.hourListShow = false;
            },
            dropMinuteList() {
                this.hourListShow = false;
                this.secondListShow = false;
                this.minuteListShow = true;
            },
            selectMinuteItem(e) {
                this.minute = e.target.innerText;
                this.minuteListShow = false;
            },
            dropSecondList() {
                this.hourListShow = false;
                this.minuteListShow = false;
                this.secondListShow = true;
            },
            selectSecondItem(e) {
                this.second = e.target.innerText;
                this.secondListShow = false;
            },
            changeTitSelect(year, type) {
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
                    this.year = select;
                    this.selectValue = this.output([me.year, me.month, me.day, me.hour, me.minute, me.second]);
                    this.render(me.year, me.month);
                    this.dataTableShow = true;
                    this.yearTableShow = false;
                }
                else {
                    // select为月
                    this.month = parseInt(select, 10) - 1;
                    this.selectValue = this.output([me.year, me.month, me.day, me.hour, me.minute, me.second]);
                    this.render(me.year, me.month);
                    this.dataTableShow = true;
                    this.yearTableShow = false;
                }
            },
            showCalendar(e) {
                let me = this;
                e.stopPropagation();
                this.show = true;
                let bindHide = function (e) {
                    e.stopPropagation();
                    me.showFalse();
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
    @base-color:#46c3c1;
    @base-size:14px;
    @tit-color:#333;

    .calendar {
        width: 240px;
        padding: 10px;
        background: #fff;
        position: absolute;
        z-index:9999;
        border: 1px solid #DEDEDE;
        border-radius: 2px;
        opacity: .95;
        transition: all .5s ease;
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
        }
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
        }
        thead{
            td{
                text-transform: uppercase;
            }
        }
        .timer{
            margin: 10px 0 10px 30px;
            width:150px;
            text-align: center;
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