<template>
<div class="xcui-datapicker {{className}}">
    <div :class="{'input-group':btnShow,'bg-pr':!btnShow}">
        <input class="form-control"  type="text" v-model="value" placeholder="请输入日期" @click="showCalendar">
        <button v-show="show" type="button" class="close close_btn" :style="{'right':btnShow?'50px':'10px'}" @click="closeBtn" title="点击关闭"><span aria-hidden="true">×</span></button>
        <div @click.stop=""
             @touchstart.stop=""
             class="calendar"
             v-show="show">
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
                        :class="{'today':child.today,'off':child.disabled,'noclick':child.noClick}"
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
</div>
</template>
<script>
    import CalendarMixins from '../daterangepicker/calendarMixins.js';
    export default {
        mixins: [CalendarMixins],
        name: 'xcui-datepicker',
        props: {
            btnShow: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                show: false,
                currentMonth: Number,
                currentTimeBtnShow: true,
                newValue: this.value,
                count: 0,
                closeBtnNow: false
            };
        },
        watch: {
            value(val) {
                let nowDate = this.output(new Date());
                if (this.newValue || this.count !== 0) {
                    this.newValue = val;
                }
                if (!this.newValue && (val === nowDate)) {
                    this.value = '';
                }
                this.count += 1;
            }
        },
        methods: {
            renderElse(y, m, i, temp, line, currentTime) {
                let me = this;
                let thisTime = new Date(me.output([me.year, me.month, i], me.defaultFormat)).getTime();
                let options = {day: i, today: false};
                options = me.bindSingerTime(thisTime, currentTime, options);
                temp[line].push(options);
            },
            // 1.判断begin和end的日期
            bindSingerTime(thisTime, currentTime, options) {
                let me = this;
                let format = me.defaultFormat;
                if (me.minDate) {
                    let beginTime = new Date(me.output(me.minDate, format)).getTime();
                    if (beginTime > thisTime) {
                        options.disabled = true;
                        options.noClick = true;
                    }
                }
                if (me.maxDate) {
                    let endTime = new Date(me.output(me.maxDate, format)).getTime();
                    if (endTime < thisTime) {
                        options.disabled = true;
                        options.noClick = true;
                    }
                }
                return options;
            },
            select(k1, k2, e) {
                if (e.target.className.indexOf('noclick') !== -1) {
                    return false;
                }
                let me = this;
                let days = this.days;
                let daySeleted = days[k1][k2];
                let oldValue = this.value = me.output(this.value);
                // 取消上次选中
                if (this.today.length > 0) {
                    days[this.today[0]][this.today[1]].today = false;
                }
                // 设置当前选中天
                daySeleted.today = true;
                me.day = me.zero(daySeleted.day);
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
                if (me.type === 'date') {
                    this.$emit('on-change', this.value, oldValue);
                    me.showFalse();
                }
            },
            currentTime() {
                let me = this;
                me.value = me.output(new Date());
                let params = this.dateParams;
                me.year = params.year;
                me.month = params.month;
                me.day = params.day;
                me.hour = params.hour;
                me.minute = params.minute;
                me.second = params.second;
                if (me.currentTimeBtnShow) {
                    me.render(me.year, me.month);
                }
                me.hourListShow = false;
                me.minuteListShow = false;
                me.secondListShow = false;
            },
            ok(e) {
                e.preventDefault();
                this.showFalse();
                this.$emit('on-change', this.value, this.initialValue);
                this.value = this.initialValue = this.value || this.initialValue;
                this.closeBtnNow = false;
            },
            cancel(e) {
                e.preventDefault();
                this.value = this.closeBtnNow ? '' : this.initialValue;
                this.showFalse();
            },
            showFalse() {
                this.hourListShow = false;
                this.minuteListShow = false;
                this.secondListShow = false;
                this.show = false;
            },
            showCalendar(e) {
                let me = this;
                e.stopPropagation();
                me.show = true;
                if (me.value !== '') {
                    me.output(me.value);
                    let params = me.dateParams;
                    me.year = params.year;
                    me.month = params.month;
                    me.hour = params.hour;
                    me.minute = params.minute;
                    me.second = params.second;
                }
                else {
                    me.value = me.initialValue;
                    this.count = 0;
                }
                me.render(me.year, me.month);
                let bindHide = function (e) {
                    e.stopPropagation();
                    me.showFalse();
                    document.removeEventListener('click', bindHide, false);
                };
                setTimeout(function () {
                    document.addEventListener('click', bindHide, false);
                }, 500);
            },
            closeBtn() {
                this.value = '';
                this.count = 0;
                this.closeBtnNow = true;
            }
        }
    };
</script>

<style lang="less">
.xcui-datapicker{
    .close_btn{
        position:absolute;
        top:50%;
        right:10px;
        margin-top:-11px;
        z-index:9999;
    }
    .calendar {
        @base-color:#46c3c1;
        @base-size:14px;
        @tit-color:#333;
        width: 240px;
        padding: 10px;
        background: #fff;
        position: absolute;
        z-index:9999;
        left:0;
        top:38px;
        border: 1px solid #DEDEDE;
        border-radius: 2px;
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
            &.off{
                color: #c0c0c0;
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
        .btn-default {
            color: #666;
            border-radius: 0 4px 4px 0;
        }
    }
    .bg-pr{
        position:relative;
    }
}
</style>
