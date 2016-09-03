<template>
    <!-- 双日历 -->
    <div v-if="double">
        <div @click.stop=""
             @touchstart.stop=""
             class="calendar double-calendar"
             v-show="show"
             :style="{'left':x+'px','top':y+'px'}">
             <div class="clearfix">
                 <div class="double-calendar-left">
                     <div class="calendar-tools" v-if="type!='time'">
                        <i class="glyphicon glyphicon-chevron-left float left"
                           @click="prev"></i>
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
                                </td>
                            </tr>
                        </table>
                        <div class="calendar-time" v-show="type=='datetime'|| type=='time'">
                            <div class="timer clearfix">
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
                 <div class="double-calendar-right">
                     <div class="calendar-tools" v-if="type!='time'">
                        <i class="glyphicon glyphicon-chevron-right float right"
                           @click="next($event,'right')"></i>
                        <div class="calendar-tit">
                            <span @click="changeTitSelect(rightCalender.year, 'year', 'right')"><input v-model="rightCalender.year" class="calendar-tit-year" type="text" @change="changeTitSelect(rightCalender.year,'year', 'right')"/>年</span>
                            <span class="calendar-tit-month" @click="changeTitSelect(rightCalender.month-1, 'month', 'right')">{{rightCalender.month+1}}月</span>
                        </div>
                    </div>
                    <div v-show="rightCalender.dataTableShow">
                        <table cellpadding="5" v-if="type!='time'">
                            <thead>
                                <tr>
                                    <td v-for="week in weeks" class="week">{{week}}</td>
                                </tr>
                            </thead>
                            <tr v-for="(k1,day) in rightCalender.days">
                                <td
                                v-for="(k2,child) in day"
                                :class="{'today':child.today,'disabled':child.disabled}"
                                :style="{'background':color&&child.today?color:''}"
                                @click="select(k1,k2,$event,'right')"
                                @touchstart="select(k1,k2,$event,'right')">
                                {{child.day}}
                                </td>
                            </tr>
                        </table>
                        <div class="calendar-time" v-show="type=='datetime'|| type=='time'">
                            <div class="timer clearfix">
                                <div class="timer-item">
                                    <label @click="dropHourList('right')">{{rightCalender.hour}}</label>:
                                    <ul class="drop-down" v-show="rightCalender.hourListShow">
                                        <li v-for="item in rightCalender.hourList" @click="selectHourItem($event,'right')">{{item}}</li>
                                    </ul>
                                </div>
                                <div class="timer-item">
                                    <label @click="dropMinuteList('right')">{{rightCalender.minute}}</label>:
                                    <ul class="drop-down" v-show="rightCalender.minuteListShow">
                                        <li v-for="item in rightCalender.minuteList" @click="selectMinuteItem($event,'right')">{{item}}</li>
                                    </ul>
                                </div>
                                <div class="timer-item">
                                    <label @click="dropSecondList('right')">{{rightCalender.second}}</label>
                                    <ul class="drop-down" v-show="rightCalender.secondListShow">
                                        <li v-for="item in rightCalender.secondList" @click="selectSecondItem($event,'right')">{{item}}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <table cellpadding="6" v-show="rightCalender.yearTableShow">
                        <tr v-show="rightCalender.selectRangeShow">
                            <td colspan ="3">{{selectRange}}</td>
                        </tr>
                        <tr v-for="selects in rightCalender.selectRangeList">
                            <td v-for="select in selects" @click="selectItem(select, 'right')">{{select}}</td>
                        </tr>
                    </table>
                 </div>
             </div>
             <div class="calendar-button" v-show="type=='datetime'|| type=='time' || range">
                <button @click="ok" :style="{'background':color}">确定</button>
                <button @click="cancel" class="cancel">取消</button>
             </div>
        </div>
    </div>
    <!-- end 双日历 -->

    <!-- 单日历 -->
    <div v-else @click.stop=""
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
                    @click="select(k1,k2,$event)"
                    @touchstart="select(k1,k2,$event)">
                    {{child.day}}
                    </td>
                </tr>
            </table>
            <div class="calendar-time" v-show="type=='datetime'|| type=='time'">
                <div class="timer clearfix">
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
    <!-- end 单日历 -->
</template>

<script>
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
                default: 2
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
            double: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
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
                selectRangeShow: true,
                currentTimeBtnShow: true,
                selectValue: '',
                rightCalender: {
                    value: '',
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
                    dataTableShow: true,
                    yearTableShow: false,
                    selectRangeList: [],
                    selectRangeShow: true,
                    selectRange: '',
                    currentTimeBtnShow: true
                }
            };
        },
        created() {
            let me = this;
            let now = new Date();
            if (me.value !== '') {
                if (me.value.indexOf('-') !== -1) {
                    me.sep = '-';
                }
                if (me.value.indexOf('.') !== -1) {
                    me.sep = '.';
                }
                if (me.type === 'date') {
                    let split = me.value.split(me.sep);
                    me.year = parseInt(split[0], 10);
                    me.month = parseInt(split[1], 10) - 1;
                    me.day = parseInt(split[2], 10);
                }
                else if (me.type === 'datetime') {
                    let split = me.value.split(' ');
                    let splitDate = split[0].split(me.sep);
                    me.year = parseInt(splitDate[0], 10);
                    me.month = parseInt(splitDate[1], 10) - 1;
                    me.day = parseInt(splitDate[2], 10);
                    if (split.length > 1) {
                        let splitTime = split[1].split(':');
                        me.hour = splitTime[0];
                        me.minute = splitTime[1];
                        me.second = splitTime[2];
                    }
                }
            }
            else {
                me.year = now.getFullYear();
                me.month = now.getMonth();
                me.day = now.getDate();
                me.hour = me.zero(now.getHours());
                me.minute = me.zero(now.getMinutes());
                me.second = me.zero(now.getSeconds());
            }
            // 双日历
            if (me.double) {
                if (parseInt(me.month, 10) === 11) {
                    me.rightCalender.month = 1;
                    me.rightCalender.year = me.year + 1;
                }
                else {
                    me.rightCalender.month = me.month + 1;
                    me.rightCalender.year = me.year;
                }
            }
            for (let i = 0; i < 60; i++) {
                if (i % me.minuteRange === 0) {
                    me.minuteList.push(me.zero(i));
                    if (me.double) {
                        me.rightCalender.minuteList.push(me.zero(i));
                    }
                }
                if (i % me.secondRange === 0) {
                    me.secondList.push(me.zero(i));
                    if (me.double) {
                        me.rightCalender.secondList.push(me.zero(i));
                    }
                }
            }
            for (let i = 1; i < 13; i++) {
                if (i % me.hourRange === 0) {
                    me.hourList.push(me.zero(i));
                    if (me.double) {
                        me.rightCalender.hourList.push(me.zero(i));
                    }
                }
                me.months.push(i);
            }
            me.render(me.year, me.month);
            // 渲染双日历的右侧日历
            if (me.double) {
                me.render(me.rightCalender.year, me.rightCalender.month, 'right');
            }
        },
        methods: {
            zero(n) {
                return n < 10 && String(n).length === 1 ? '0' + n : n;
            },
            render(y, m, right) {
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
                if (right === 'right') {
                    me = this.rightCalender;
                }
                me.year = y;
                me.currentMonth = this.months[m];
                for (i = 1; i <= lastDateOfMonth; i++) {
                    let dow = new Date(y, m, i).getDay();
                    let chk = new Date();
                    let chkY = chk.getFullYear();
                    let chkM = chk.getMonth();
                    let seletSplit1 = (parseInt(seletSplit[0], 10) === me.year);
                    let seletSplit2 = (parseInt(seletSplit[1], 10) - 1 === me.month);
                    let seletSplit3 = (parseInt(seletSplit[2], 10) === i);
                    let seletSplit4 = (this.begin !== undefined || this.end !== undefined);
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
                        options = this.bindSingerTime(thisTime, currentTime, options, right);
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
                }
                me.days = temp;
            },
            // 1.判断begin和end的日期
            bindSingerTime(thisTime, currentTime, options, right) {
                let me = this;
                let self = this;
                if (right === 'right') {
                    me = me.rightCalender;
                }
                if (this.begin !== undefined) {
                    let beginSplit = this.begin.split(self.sep);
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
                if (this.end !== undefined) {
                    let endSplit = this.end.split(self.sep);
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
            next(e, right) {
                e.stopPropagation();
                let me = this;
                if (right === 'right') {
                    me = me.rightCalender;
                }
                if (me.month === 11) {
                    me.month = 0;
                    me.year = me.year + 1;
                }
                else {
                    me.month = parseInt(me.month, 10) + 1;
                }
                this.render(me.year, me.month, right);
            },
            select(k1, k2, e, right) {
                if (e !== undefined) {
                    e.stopPropagation();
                }
                let me = this;
                if (right === 'right') {
                    me = me.rightCalender;
                }
                // 取消上次选中
                if (me.today.length > 0) {
                    me.days[me.today[0]][me.today[1]].today = false;
                }
                // 设置当前选中天
                me.days[k1][k2].today = true;
                me.day = this.zero(me.days[k1][k2].day);
                me.today = [k1, k2];
                me.selectValue = me.output([me.year, me.month, me.day, me.hour, me.minute, me.second]);
                if (me.type === 'date') {
                    me.value = me.selectValue;
                    me.showFalse();
                }
            },
            ok() {
                let me = this;
              //  this.value = this.output([me.year, me.month + 1, me.day, me.hour, me.minute, me.second]);
                if (me.double === true) {
                    let rc = this.rightCalender;
                    let rightValue = this.output([rc.year, rc.month + 1, rc.day, rc.hour, rc.minute, rc.second]);
                    this.value = this.value + '~' + rightValue;
                }
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
            dropHourList(right) {
                let me = this;
                if (right === 'right') {
                    me = me.rightCalender;
                }
                me.hourListShow = true;
                me.secondListShow = false;
                me.minuteListShow = false;
            },
            selectHourItem(e, right) {
                let me = this;
                if (right === 'right') {
                    me = this.rightCalender;
                }
                me.hour = e.target.innerText;
                me.hourListShow = false;
            },
            dropMinuteList(right) {
                let me = this;
                if (right === 'right') {
                    me = me.rightCalender;
                }
                me.hourListShow = false;
                me.secondListShow = false;
                me.minuteListShow = true;
            },
            selectMinuteItem(e, right) {
                let me = this;
                if (right === 'right') {
                    me = this.rightCalender;
                }
                me.minute = e.target.innerText;
                me.minuteListShow = false;
            },
            dropSecondList(right) {
                let me = this;
                if (right === 'right') {
                    me = me.rightCalender;
                }
                me.hourListShow = false;
                me.minuteListShow = false;
                me.secondListShow = true;
            },
            selectSecondItem(e, right) {
                let me = this;
                if (right === 'right') {
                    me = this.rightCalender;
                }
                me.second = e.target.innerText;
                me.secondListShow = false;
            },
            changeTitSelect(year, type, right) {
                // 双日历
                if (this.double === true && right === 'right') {
                    if (type === 'year') {
                        let startYear = parseInt(year / 10, 10) * 10;
                        let years1 = ['《', startYear, startYear + 1];
                        let years2 = [startYear + 2, startYear + 3, startYear + 4];
                        let years3 = [startYear + 5, startYear + 6, startYear + 7];
                        let years4 = [startYear + 8, startYear + 9, '》'];
                        this.rightCalender.selectRange = startYear + ' ~ ' + (startYear + 9);
                        this.rightCalender.selectRangeList = [years1, years2, years3, years4];
                        this.rightCalender.selectRangeShow = true;
                    }
                    else {
                        this.rightCalender.selectRangeList = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
                        this.rightCalender.selectRangeShow = false;
                    }
                    this.rightCalender.dataTableShow = false;
                    this.rightCalender.yearTableShow = true;
                }
                else {
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
                }
            },
            selectItem(select, right) {
                let me = this;
                if (this.double === true && right === 'right') {
                    me = this.rightCalender;
                }
                if (select === '《') {
                    this.changeTitSelect(parseInt(me.selectRange.split('~')[0].trim(), 10) - 10, 'year');
                }
                else if (select === '》') {
                    this.changeTitSelect(parseInt(me.selectRange.split('~')[0].trim(), 10) + 10, 'year');
                }
                else if (select > 12) {
                    // select为年
                    me.year = select;
                    me.dataTableShow = true;
                    me.yearTableShow = false;
                }
                else {
                    // select为月
                    me.month = parseInt(select, 10) - 1;
                    me.dataTableShow = true;
                    me.yearTableShow = false;
                }
            }
        }
    };
</script>
 
<style lang="less" scoped>
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
    }
    .double-calendar{
        width:490px;
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
</style>