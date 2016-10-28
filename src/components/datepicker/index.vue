<template>
    <div class="bg-pr" :class="inputClass">
        <input class="form-control"  type="text" v-model="value" placeholder="请输入日期" @click="showCalendar">
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
</template>
<script>
    import CalendarMixins from '../daterangepicker/calendarMixins.js';
    export default {
        mixins: [CalendarMixins],
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
            }
        },
        data() {
            return {
                show: false,
                currentMonth: Number,
                selectValue: '',
                currentTimeBtnShow: true
            };
        },
        methods: {
            renderElse(y, m, i, temp, line, currentTime) {
                let me = this;
                let thisTime = Number(new Date(me.year, me.month, i));
                let options = {day: i, today: false};
                options = me.bindSingerTime(thisTime, currentTime, options);
                temp[line].push(options);
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
            ok() {
                this.value = this.selectValue !== '' ? this.selectValue : this.value;
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

<style lang="less">
    @base-color:#46c3c1;
    @base-size:14px;
    @tit-color:#333;

    .calendar {
        width: 240px;
        padding: 10px;
        background: #fff;
        position: absolute;
        z-index:9999;
        left:0;
        top:38px;
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
