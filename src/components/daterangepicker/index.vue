
<template>
<div class="xcui-datarangepicker" :class="className">
    <div :class="{'input-group':btnShow}">
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
</div>
</template>
<script>
    import calendar from './calendar';
    export default {
        name: 'xcui-datarangepicker',
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
            className: String,
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
            if (this.value !== '') {
                let values = this.value.split('至');
                this.beginCalenderVal = values[0].trim();
                this.endCalenderVal = values[1].trim();
                if (this.beginCalenderVal > this.endCalenderVal) {
                    this.endCalenderVal = this.beginCalenderVal;
                    this.value = this.beginCalenderVal + ' 至 ' + this.endCalenderVal;
                }
            }
        },
        watch: {
            beginCalenderVal(val) {
                if (val > this.endCalenderVal) {
                    this.endCalenderVal = val;
                }
            },
            endCalenderVal(val) {
                if (val < this.beginCalenderVal) {
                    this.beginCalenderVal = val;
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
.xcui-datarangepicker{
    @base-color:#46c3c1;
    @base-size:14px;
    @tit-color:#333;
    position:relative;
    .calendar{
        width: 240px;
        padding: 10px;
        background: #fff;
        position: absolute;
        border: 1px solid #DEDEDE;
        border-radius: 2px;
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
                &.todayleft{
                    border-top-right-radius: 0;
                    border-bottom-right-radius: 0;
                }
                &.todayright{
                    border-top-left-radius: 0;
                    border-bottom-left-radius: 0;
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
        border-radius: 0 4px 4px 0;
    }
}
</style>