(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === "object" && typeof module === "object") module.exports = factory(); else if (typeof define === "function" && define.amd) define([], factory); else {
        var a = factory();
        for (var i in a) (typeof exports === "object" ? exports : root)[i] = a[i];
    }
})(this, function() {
    return function(modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) return installedModules[moduleId].exports;
            var module = installedModules[moduleId] = {
                exports: {},
                id: moduleId,
                loaded: false
            };
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            module.loaded = true;
            return module.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.p = "";
        return __webpack_require__(0);
    }([ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(5);
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _calendarMixins = __webpack_require__(2);
        var _calendarMixins2 = _interopRequireDefault(_calendarMixins);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        exports.default = {
            mixins: [ _calendarMixins2.default ],
            name: "xcui-datapicker",
            props: {
                btnShow: {
                    type: Boolean,
                    "default": false
                }
            },
            data: function data() {
                return {
                    show: false,
                    currentMonth: Number,
                    currentTimeBtnShow: true
                };
            },
            methods: {
                renderElse: function renderElse(y, m, i, temp, line, currentTime) {
                    var me = this;
                    var thisTime = Number(new Date(me.year, me.month, i));
                    var options = {
                        day: i,
                        today: false
                    };
                    options = me.bindSingerTime(thisTime, currentTime, options);
                    temp[line].push(options);
                },
                bindSingerTime: function bindSingerTime(thisTime, currentTime, options) {
                    var me = this;
                    if (me.begin !== undefined) {
                        var beginSplit = me.begin.split(me.sep);
                        var beginSplit1 = parseInt(beginSplit[0], 10);
                        var beginSplit2 = parseInt(beginSplit[1], 10) - 1;
                        var beginSplit3 = parseInt(beginSplit[2], 10);
                        var beginTime = Number(new Date(beginSplit1, beginSplit2, beginSplit3));
                        if (beginTime > thisTime) {
                            options.disabled = true;
                        }
                        if (beginTime > currentTime) {
                            me.currentTimeBtnShow = false;
                        }
                    }
                    if (me.end !== undefined) {
                        var endSplit = me.end.split(me.sep);
                        var endSplit1 = parseInt(endSplit[0], 10);
                        var endSplit2 = parseInt(endSplit[1], 10) - 1;
                        var endSplit3 = parseInt(endSplit[2], 10);
                        var endTime = Number(new Date(endSplit1, endSplit2, endSplit3));
                        if (endTime < thisTime) {
                            options.disabled = true;
                        }
                        if (endTime < currentTime) {
                            me.currentTimeBtnShow = false;
                        }
                    }
                    return options;
                },
                select: function select(k1, k2, e) {
                    var me = this;
                    var days = this.days;
                    var daySeleted = days[k1][k2];
                    if (this.today.length > 0) {
                        days[this.today[0]][this.today[1]].today = false;
                    }
                    daySeleted.today = true;
                    me.day = me.zero(daySeleted.day);
                    if (daySeleted.disabled) {
                        me.month = k1 === 0 ? me.month - 1 : me.month + 1;
                        var om = me.outputMonth(me.month, me.year);
                        me.year = om.y;
                        me.month = om.m;
                        me.value = me.output([ me.year, me.month, me.day, me.hour, me.minute, me.second ]);
                        me.render(me.year, me.month);
                    } else {
                        me.today = [ k1, k2 ];
                        me.value = me.output([ me.year, me.month, me.day, me.hour, me.minute, me.second ]);
                    }
                    if (me.type === "date") {
                        me.showFalse();
                    }
                },
                currentTime: function currentTime() {
                    var date = new Date();
                    var year = date.getFullYear();
                    var month = date.getMonth();
                    var hour = this.zero(date.getHours());
                    var day = this.zero(date.getDate());
                    var minute = this.zero(date.getMinutes());
                    var second = this.zero(date.getSeconds());
                    var me = this;
                    this.year = year;
                    this.month = month;
                    this.day = day;
                    this.hour = hour;
                    this.minute = minute;
                    this.second = second;
                    this.value = me.output([ me.year, me.month, me.day, me.hour, me.minute, me.second ]);
                    if (this.currentTimeBtnShow) {
                        this.render(year, month);
                    }
                    this.hourListShow = false;
                    this.minuteListShow = false;
                    this.secondListShow = false;
                },
                ok: function ok() {
                    this.value = this.value !== "" ? this.value : this.initialValue;
                    this.showFalse();
                },
                cancel: function cancel() {
                    this.value = this.initialValue === "" ? this.value : this.initialValue;
                    this.showFalse();
                },
                showFalse: function showFalse() {
                    this.hourListShow = false;
                    this.minuteListShow = false;
                    this.secondListShow = false;
                    this.show = false;
                },
                showCalendar: function showCalendar(e) {
                    var me = this;
                    e.stopPropagation();
                    this.show = true;
                    var bindHide = function bindHide(e) {
                        e.stopPropagation();
                        me.showFalse();
                        document.removeEventListener("click", bindHide, false);
                    };
                    setTimeout(function() {
                        document.addEventListener("click", bindHide, false);
                    }, 500);
                }
            }
        };
    }, function(module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = {
            props: {
                type: {
                    type: String,
                    "default": "date"
                },
                value: {
                    type: String,
                    twoWay: true,
                    "default": ""
                },
                begin: {
                    type: String,
                    "default": ""
                },
                end: {
                    type: String,
                    "default": ""
                },
                hourRange: {
                    type: [ Number, String ],
                    "default": 1
                },
                minuteRange: {
                    type: [ Number, String ],
                    "default": 1
                },
                secondRange: {
                    type: [ Number, String ],
                    "default": 1
                },
                sep: {
                    type: String,
                    "default": "-"
                },
                color: String,
                className: String
            },
            data: function data() {
                return {
                    dataTableShow: true,
                    year: "",
                    month: "",
                    day: "",
                    days: [],
                    weeks: [ "日", "一", "二", "三", "四", "五", "六" ],
                    months: [ "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12" ],
                    today: [],
                    hour: "00",
                    hourList: [],
                    hourListShow: false,
                    minute: "00",
                    minuteList: [],
                    minuteListShow: false,
                    second: "00",
                    secondList: [],
                    secondListShow: false,
                    yearTableShow: false,
                    selectRangeList: [],
                    selectRangeShow: true,
                    selectRange: ""
                };
            },
            created: function created() {
                var me = this;
                var now = me.getCurrentParams();
                this.initialValue = this.value;
                if (me.value !== "") {
                    var params = me.getValueParams(me.value);
                    me.year = params.year;
                    me.month = params.month;
                    me.day = params.day;
                    me.hour = params.hour;
                    me.minute = params.minute;
                    me.second = params.second;
                } else {
                    me.year = now.year;
                    me.month = now.month;
                    me.day = now.day;
                    me.hour = now.hour;
                    me.minute = now.minute;
                    me.second = now.second;
                    me.value = me.output([ me.year, me.month, me.day, me.hour, me.minute, me.second ]);
                }
                for (var i = 0; i < 60; i++) {
                    if (i % me.minuteRange === 0) {
                        me.minuteList.push(me.zero(i));
                    }
                    if (i % me.secondRange === 0) {
                        me.secondList.push(me.zero(i));
                    }
                }
                for (var _i = 0; _i < 24; _i++) {
                    if (_i % me.hourRange === 0) {
                        me.hourList.push(me.zero(_i));
                    }
                }
                if (me.type !== "time") {
                    me.render(me.year, me.month);
                }
            },
            methods: {
                zero: function zero(n) {
                    return n < 10 && String(n).length === 1 ? "0" + n : n;
                },
                render: function render(y, m) {
                    var me = this;
                    me.firstDayOfMonth = new Date(y, m, 1).getDay();
                    me.lastDateOfMonth = new Date(y, m + 1, 0).getDate();
                    me.lastDayOfLastMonth = new Date(y, m, 0).getDate();
                    var params = me.getValueParams(me.value);
                    var line = 0;
                    var temp = [];
                    var date = new Date();
                    var currentTime = Number(new Date(date.getFullYear(), date.getMonth(), date.getDate()));
                    me.year = y;
                    me.currentMonth = me.months[m];
                    for (var i = 1; i <= me.lastDateOfMonth; i++) {
                        var dow = new Date(y, m, i).getDay();
                        var chk = new Date();
                        var chkY = chk.getFullYear();
                        var chkM = chk.getMonth();
                        var year = params.year === me.year;
                        var month = params.month === me.month;
                        var day = params.day === i;
                        var seletSplit4 = me.begin !== undefined || me.end !== undefined;
                        if (dow === 0) {
                            temp[line] = [];
                        } else if (i === 1) {
                            temp[line] = [];
                            var k = me.lastDayOfLastMonth - me.firstDayOfMonth + 1;
                            for (var j = 0; j < me.firstDayOfMonth; j++) {
                                temp[line].push({
                                    day: k,
                                    disabled: true,
                                    prev: true
                                });
                                k++;
                            }
                        }
                        if (year && month && day && seletSplit4) {
                            temp[line].push({
                                day: i,
                                today: true
                            });
                            me.today = [ line, temp[line].length - 1 ];
                        } else if (chkY === me.year && chkM === me.month && i === me.day && me.value === undefined) {
                            temp[line].push({
                                day: i,
                                today: true
                            });
                            me.today = [ line, temp[line].length - 1 ];
                        } else {
                            me.renderElse(y, m, i, temp, line, currentTime);
                        }
                        if (dow === 6) {
                            line++;
                        } else if (i === me.lastDateOfMonth) {
                            var _k = 1;
                            for (dow; dow < 6; dow++) {
                                temp[line].push({
                                    day: _k,
                                    disabled: true,
                                    today: false
                                });
                                _k++;
                            }
                        }
                    }
                    me.days = temp;
                },
                prev: function prev(e) {
                    e.stopPropagation();
                    var me = this;
                    me.month -= 1;
                    var om = me.outputMonth(me.month, me.year);
                    me.year = om.y;
                    me.month = om.m;
                    me.render(me.year, me.month);
                },
                next: function next(e) {
                    e.stopPropagation();
                    var me = this;
                    me.month += 1;
                    var om = me.outputMonth(me.month, me.year);
                    me.year = om.y;
                    me.month = om.m;
                    me.render(me.year, me.month);
                },
                changeTitSelect: function changeTitSelect(year, type) {
                    if (type === "year") {
                        var startYear = parseInt(year / 10, 10) * 10;
                        var years1 = [ "《", startYear, startYear + 1 ];
                        var years2 = [ startYear + 2, startYear + 3, startYear + 4 ];
                        var years3 = [ startYear + 5, startYear + 6, startYear + 7 ];
                        var years4 = [ startYear + 8, startYear + 9, "》" ];
                        this.selectRange = startYear + " ~ " + (startYear + 9);
                        this.selectRangeList = [ years1, years2, years3, years4 ];
                        this.selectRangeShow = true;
                    } else {
                        this.selectRangeList = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10, 11, 12 ] ];
                        this.selectRangeShow = false;
                    }
                    this.dataTableShow = false;
                    this.yearTableShow = true;
                },
                selectItem: function selectItem(select) {
                    var me = this;
                    if (select === "《") {
                        this.changeTitSelect(parseInt(me.selectRange.split("~")[0].trim(), 10) - 10, "year");
                    } else if (select === "》") {
                        this.changeTitSelect(parseInt(me.selectRange.split("~")[0].trim(), 10) + 10, "year");
                    } else if (select > 12) {
                        this.year = select;
                        this.render(me.year, me.month);
                        this.dataTableShow = true;
                        this.yearTableShow = false;
                    } else {
                        this.month = parseInt(select, 10) - 1;
                        this.render(me.year, me.month);
                        this.dataTableShow = true;
                        this.yearTableShow = false;
                    }
                },
                dropTimeList: function dropTimeList(type) {
                    var me = this;
                    me.hourListShow = false;
                    me.secondListShow = false;
                    me.minuteListShow = false;
                    switch (type) {
                      case "hour":
                        me.hourListShow = true;
                        break;

                      case "minute":
                        me.minuteListShow = true;
                        break;

                      case "second":
                        me.secondListShow = true;
                        break;

                      default:                    }
                },
                selectTimeItem: function selectTimeItem(e, type) {
                    var me = this;
                    switch (type) {
                      case "hour":
                        me.hour = e.target.innerText;
                        me.hourListShow = false;
                        break;

                      case "minute":
                        me.minute = e.target.innerText;
                        me.minuteListShow = false;
                        break;

                      case "second":
                        me.second = e.target.innerText;
                        me.secondListShow = false;
                        break;

                      default:                    }
                    me.value = me.output([ me.year, me.month, me.day, me.hour, me.minute, me.second ]);
                },
                output: function output(args) {
                    var me = this;
                    if (args[1] === 12) {
                        args[1] = 0;
                        args[0] += 1;
                    } else if (args[1] === -1) {
                        args[1] = 11;
                        args[0] -= 1;
                    }
                    if (me.type === "time") {
                        return me.zero(args[3]) + ":" + me.zero(args[4]) + ":" + me.zero(args[5]);
                    }
                    var args1 = me.zero(args[1] + 1);
                    var args2 = me.zero(args[2]);
                    if (me.type === "datetime") {
                        var args3 = me.zero(args[3]);
                        var args4 = me.zero(args[4]);
                        var args5 = me.zero(args[5]);
                        return args[0] + me.sep + args1 + me.sep + args2 + " " + args3 + ":" + args4 + ":" + args5;
                    }
                    if (me.type === "date") {
                        return args[0] + me.sep + args1 + me.sep + args2;
                    }
                },
                outputMonth: function outputMonth(month, year) {
                    var m = Number(month);
                    var y = Number(year);
                    if (m === -1) {
                        m = 11;
                        y -= 1;
                    } else if (m === 12) {
                        m = 0;
                        y += 1;
                    }
                    return {
                        y: y,
                        m: m
                    };
                },
                getValueParams: function getValueParams(timeCur) {
                    var me = this;
                    var params = {};
                    if (me.type === "date") {
                        var split = timeCur.split(me.sep);
                        params.year = parseInt(split[0], 10);
                        params.month = parseInt(split[1], 10) - 1;
                        params.day = parseInt(split[2], 10);
                    } else if (me.type === "datetime") {
                        var _split = timeCur.split(" ");
                        var splitDate = _split[0].split(me.sep);
                        params.year = parseInt(splitDate[0], 10);
                        params.month = parseInt(splitDate[1], 10) - 1;
                        params.day = parseInt(splitDate[2], 10);
                        if (_split.length > 1) {
                            var splitTime = _split[1].split(":");
                            params.hour = splitTime[0];
                            params.minute = splitTime[1];
                            params.second = splitTime[2];
                        } else {
                            params.hour = me.hour;
                            params.minute = me.minute;
                            params.second = me.second;
                        }
                    } else if (me.type === "time") {
                        var _split2 = timeCur.split(":");
                        params.hour = me.hour = _split2[0];
                        params.minute = me.minute = _split2[1];
                        params.second = me.second = _split2[2];
                    }
                    return params;
                },
                getCurrentParams: function getCurrentParams() {
                    var date = new Date();
                    return {
                        year: date.getFullYear(),
                        month: date.getMonth(),
                        day: this.zero(date.getDate()),
                        hour: this.zero(date.getHours()),
                        minute: this.zero(date.getMinutes()),
                        second: this.zero(date.getSeconds())
                    };
                }
            }
        };
    }, function(module, exports) {}, function(module, exports) {
        module.exports = ' <div class="xcui-datapicker {{className}}"> <div :class="{\'input-group\':btnShow,\'bg-pr\':!btnShow}"> <input class=form-control type=text v-model=value placeholder=请输入日期 @click=showCalendar> <div @click.stop="" @touchstart.stop="" class=calendar v-show=show> <div class=calendar-tools v-if="type!=\'time\'"> <i class="glyphicon glyphicon-chevron-left float left" @click=prev></i> <i class="glyphicon glyphicon-chevron-right float right" @click=next></i> <div class=calendar-tit> <span @click="changeTitSelect(year, \'year\')"><input v-model=year class=calendar-tit-year type=text @change="changeTitSelect(year,\'year\')"/>年</span> <span class=calendar-tit-month @click="changeTitSelect(month-1, \'month\')">{{month+1}}月</span> </div> </div> <div v-show=dataTableShow> <table cellpadding=5 v-if="type!=\'time\'"> <thead> <tr> <td v-for="week in weeks" class=week>{{week}}</td> </tr> </thead> <tr v-for="(k1,day) in days"> <td v-for="(k2,child) in day" :class="{\'today\':child.today,\'off\':child.disabled}" :style="{\'background\':color&&child.today?color:\'\'}" @click=select(k1,k2,$event)> {{child.day}} <div class=lunar v-if=showLunar>{{child.lunar}}</div> </td> </tr> </table> <div class=calendar-time v-show="type==\'datetime\'|| type==\'time\'"> <div class="timer clearfix"> <div class=timer-item> <label @click="dropTimeList(\'hour\')">{{hour}}</label>: <ul class=drop-down v-show=hourListShow> <li v-for="item in hourList" @click="selectTimeItem($event,\'hour\')">{{item}}</li> </ul> </div> <div class=timer-item> <label @click="dropTimeList(\'minute\')">{{minute}}</label>: <ul class=drop-down v-show=minuteListShow> <li v-for="item in minuteList" @click="selectTimeItem($event,\'minute\')">{{item}}</li> </ul> </div> <div class=timer-item> <label @click="dropTimeList(\'second\')">{{second}}</label> <ul class=drop-down v-show=secondListShow> <li v-for="item in secondList" @click="selectTimeItem($event,\'second\')">{{item}}</li> </ul> </div> <div class=timer-item> <div class=timer-item-current @click=currentTime :style="{\'color\':color}">当前</div> </div> </div> </div> <div class=calendar-button v-show="type==\'datetime\'|| type==\'time\' || range"> <button @click=ok :style="{\'background\':color}">确定</button> <button @click=cancel class=cancel>取消</button> </div> </div> <table cellpadding=6 v-show=yearTableShow> <tr v-show=selectRangeShow> <td colspan=3>{{selectRange}}</td> </tr> <tr v-for="selects in selectRangeList"> <td v-for="select in selects" @click=selectItem(select)>{{select}}</td> </tr> </table> </div> <span class=input-group-btn v-if=btnShow @click=showCalendar> <button class="btn btn-default"> <span class="glyphicon glyphicon-calendar"></span> </button> </span> </div> </div> ';
    }, function(module, exports, __webpack_require__) {
        var __vue_script__, __vue_template__;
        __webpack_require__(3);
        __vue_script__ = __webpack_require__(1);
        __vue_template__ = __webpack_require__(4);
        module.exports = __vue_script__ || {};
        if (module.exports.__esModule) module.exports = module.exports.default;
        if (__vue_template__) {
            (typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports).template = __vue_template__;
        }
    } ]);
});

