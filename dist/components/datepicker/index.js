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
        module.exports = __webpack_require__(4);
    }, function(module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = {
            props: {
                btnShow: {
                    type: Boolean,
                    "default": false
                },
                inputClass: {
                    type: Array,
                    "default": function _default() {
                        return [];
                    }
                },
                type: {
                    type: String,
                    "default": "date"
                },
                value: {
                    type: String,
                    twoWay: true,
                    "default": ""
                },
                x: {
                    type: Number,
                    "default": 0
                },
                y: {
                    type: Number,
                    "default": 38
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
                    type: Number,
                    "default": 1
                },
                minuteRange: {
                    type: Number,
                    "default": 1
                },
                secondRange: {
                    type: Number,
                    "default": 1
                },
                sep: {
                    type: String,
                    "default": "-"
                },
                color: {
                    type: String,
                    "default": ""
                }
            },
            data: function data() {
                return {
                    show: false,
                    year: 0,
                    month: 0,
                    day: 0,
                    hour: "00",
                    hourList: [],
                    hourListShow: false,
                    minute: "00",
                    minuteList: [],
                    minuteListShow: false,
                    second: "00",
                    secondList: [],
                    secondListShow: false,
                    days: [],
                    today: [],
                    currentMonth: Number,
                    weeks: [ "日", "一", "二", "三", "四", "五", "六" ],
                    months: [],
                    dataTableShow: true,
                    yearTableShow: false,
                    selectRangeList: [],
                    selectRangeShow: true,
                    selectRange: "",
                    currentTimeBtnShow: true,
                    selectValue: ""
                };
            },
            created: function created() {
                var now = new Date();
                var me = this;
                if (this.btnShow) {
                    this.inputClass.push("input-group");
                }
                if (this.value !== "") {
                    if (this.value.indexOf("-") !== -1) {
                        this.sep = "-";
                    }
                    if (this.value.indexOf(".") !== -1) {
                        this.sep = ".";
                    }
                    if (this.type === "date") {
                        var split = this.value.split(me.sep);
                        this.year = parseInt(split[0], 10);
                        this.month = parseInt(split[1], 10) - 1;
                        this.day = parseInt(split[2], 10);
                    } else if (this.type === "datetime") {
                        var _split = this.value.split(" ");
                        var splitDate = _split[0].split(me.sep);
                        this.year = parseInt(splitDate[0], 10);
                        this.month = parseInt(splitDate[1], 10) - 1;
                        this.day = parseInt(splitDate[2], 10);
                        if (_split.length > 1) {
                            var splitTime = _split[1].split(":");
                            this.hour = splitTime[0];
                            this.minute = splitTime[1];
                            this.second = splitTime[2];
                        }
                    }
                } else {
                    this.year = now.getFullYear();
                    this.month = now.getMonth();
                    this.day = now.getDate();
                    this.hour = this.zero(now.getHours());
                    this.minute = this.zero(now.getMinutes());
                    this.second = this.zero(now.getSeconds());
                }
                for (var i = 0; i < 60; i++) {
                    var item = i;
                    if (i % this.minuteRange === 0) {
                        if (i < 10) {
                            item = "0" + i;
                        }
                        this.minuteList.push(item);
                    }
                    if (i % this.secondRange === 0) {
                        if (i < 10) {
                            item = "0" + i;
                        }
                        this.secondList.push(item);
                    }
                }
                for (var _i = 1; _i < 13; _i++) {
                    var _item = _i;
                    if (_i % this.hourRange === 0) {
                        if (_i < 10) {
                            _item = "0" + _i;
                        }
                        this.hourList.push(_item);
                    }
                    this.months.push(_i);
                }
                this.render(me.year, me.month);
            },
            methods: {
                zero: function zero(n) {
                    return n < 10 && String(n).length === 1 ? "0" + n : n;
                },
                render: function render(y, m) {
                    var me = this;
                    var firstDayOfMonth = new Date(y, m, 1).getDay();
                    var lastDateOfMonth = new Date(y, m + 1, 0).getDate();
                    var lastDayOfLastMonth = new Date(y, m, 0).getDate();
                    var seletSplit = me.value.split(" ")[0].split(me.sep);
                    var i = void 0;
                    var line = 0;
                    var temp = [];
                    var date = new Date();
                    var currentTime = Number(new Date(date.getFullYear(), date.getMonth(), date.getDate()));
                    me.year = y;
                    me.currentMonth = me.months[m];
                    for (i = 1; i <= lastDateOfMonth; i++) {
                        var dow = new Date(y, m, i).getDay();
                        var chk = new Date();
                        var chkY = chk.getFullYear();
                        var chkM = chk.getMonth();
                        var seletSplit1 = parseInt(seletSplit[0], 10) === me.year;
                        var seletSplit2 = parseInt(seletSplit[1], 10) - 1 === me.month;
                        var seletSplit3 = parseInt(seletSplit[2], 10) === i;
                        var seletSplit4 = me.begin !== undefined || me.end !== undefined;
                        if (dow === 0) {
                            temp[line] = [];
                        } else if (i === 1) {
                            temp[line] = [];
                            var k = lastDayOfLastMonth - firstDayOfMonth + 1;
                            for (var j = 0; j < firstDayOfMonth; j++) {
                                temp[line].push({
                                    day: k,
                                    disabled: true
                                });
                                k++;
                            }
                        }
                        if (seletSplit1 && seletSplit2 && seletSplit3 && seletSplit4) {
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
                            var thisTime = Number(new Date(me.year, me.month, i));
                            var options = {
                                day: i,
                                today: false
                            };
                            options = me.bindSingerTime(thisTime, currentTime, options);
                            temp[line].push(options);
                        }
                        if (dow === 6) {
                            line++;
                        } else if (i === lastDateOfMonth) {
                            var _k = 1;
                            for (dow; dow < 6; dow++) {
                                temp[line].push({
                                    day: _k,
                                    disabled: true
                                });
                                _k++;
                            }
                        }
                    }
                    me.days = temp;
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
                currentTime: function currentTime() {
                    var date = new Date();
                    var year = date.getFullYear();
                    var month = date.getMonth();
                    var hour = this.zero(date.getHours());
                    var day = this.zero(date.getDate());
                    var minute = this.zero(date.getMinutes());
                    var second = this.zero(date.getSeconds());
                    var me = this;
                    var value = this.value;
                    this.year = year;
                    this.month = month;
                    this.day = day;
                    this.hour = hour;
                    this.minute = minute;
                    this.second = second;
                    this.selectValue = me.output([ me.year, me.month, me.day, me.hour, me.minute, me.second ]);
                    this.value = this.selectValue;
                    if (this.currentTimeBtnShow) {
                        this.render(year, month);
                    }
                    this.value = value;
                    this.hourListShow = false;
                    this.minuteListShow = false;
                    this.secondListShow = false;
                },
                prev: function prev(e) {
                    e.stopPropagation();
                    var me = this;
                    if (me.month === 0) {
                        me.month = 11;
                        me.year = me.year - 1;
                    } else {
                        me.month = parseInt(me.month, 10) - 1;
                    }
                    me.render(me.year, me.month);
                },
                next: function next(e) {
                    e.stopPropagation();
                    var me = this;
                    if (me.month === 11) {
                        me.month = 0;
                        me.year = me.year + 1;
                    } else {
                        me.month = parseInt(me.month, 10) + 1;
                    }
                    me.render(me.year, me.month);
                },
                select: function select(k1, k2, e) {
                    if (e !== undefined) {
                        e.stopPropagation();
                    }
                    var me = this;
                    if (this.today.length > 0) {
                        this.days[this.today[0]][this.today[1]].today = false;
                    }
                    this.days[k1][k2].today = true;
                    this.day = me.zero(me.days[k1][k2].day);
                    this.today = [ k1, k2 ];
                    this.selectValue = this.output([ me.year, me.month, me.day, me.hour, me.minute, me.second ]);
                    if (this.type === "date") {
                        this.value = this.selectValue;
                        this.showFalse();
                    }
                },
                ok: function ok() {
                    this.value = this.selectValue;
                    this.showFalse();
                },
                cancel: function cancel() {
                    this.showFalse();
                },
                showFalse: function showFalse() {
                    this.hourListShow = false;
                    this.minuteListShow = false;
                    this.secondListShow = false;
                    this.show = false;
                },
                output: function output(args) {
                    var me = this;
                    if (me.type === "time") {
                        return me.zero(args[3]) + ":" + me.zero(args[4]) + ":" + me.zero(args[5]);
                    }
                    if (me.type === "datetime") {
                        var args1 = me.zero(args[1] + 1);
                        var args2 = me.zero(args[2]);
                        var args3 = me.zero(args[3]);
                        var args4 = me.zero(args[4]);
                        var args5 = me.zero(args[5]);
                        return args[0] + me.sep + args1 + me.sep + args2 + " " + args3 + ":" + args4 + ":" + args5;
                    }
                    if (me.type === "date") {
                        return args[0] + me.sep + me.zero(args[1] + 1) + me.sep + me.zero(args[2]);
                    }
                },
                dropHourList: function dropHourList() {
                    this.hourListShow = true;
                    this.secondListShow = false;
                    this.minuteListShow = false;
                },
                selectHourItem: function selectHourItem(e) {
                    this.hour = e.target.innerText;
                    this.hourListShow = false;
                },
                dropMinuteList: function dropMinuteList() {
                    this.hourListShow = false;
                    this.secondListShow = false;
                    this.minuteListShow = true;
                },
                selectMinuteItem: function selectMinuteItem(e) {
                    this.minute = e.target.innerText;
                    this.minuteListShow = false;
                },
                dropSecondList: function dropSecondList() {
                    this.hourListShow = false;
                    this.minuteListShow = false;
                    this.secondListShow = true;
                },
                selectSecondItem: function selectSecondItem(e) {
                    this.second = e.target.innerText;
                    this.secondListShow = false;
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
                        this.selectValue = this.output([ me.year, me.month, me.day, me.hour, me.minute, me.second ]);
                        this.render(me.year, me.month);
                        this.dataTableShow = true;
                        this.yearTableShow = false;
                    } else {
                        this.month = parseInt(select, 10) - 1;
                        this.selectValue = this.output([ me.year, me.month, me.day, me.hour, me.minute, me.second ]);
                        this.render(me.year, me.month);
                        this.dataTableShow = true;
                        this.yearTableShow = false;
                    }
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
    }, function(module, exports) {}, function(module, exports) {
        module.exports = ' <div class=bg-pr :class=inputClass _v-12a77312=""> <input class=form-control type=text v-model=value placeholder=请输入日期 @click=showCalendar _v-12a77312=""> <div @click.stop="" @touchstart.stop="" class=calendar v-show=show :style="{\'left\':x+\'px\',\'top\':y+\'px\'}" _v-12a77312=""> <div class=calendar-tools v-if="type!=\'time\'" _v-12a77312=""> <i class="glyphicon glyphicon-chevron-left float left" @click=prev _v-12a77312=""></i> <i class="glyphicon glyphicon-chevron-right float right" @click=next _v-12a77312=""></i> <div class=calendar-tit _v-12a77312=""> <span @click="changeTitSelect(year, \'year\')" _v-12a77312=""><input v-model=year class=calendar-tit-year type=text @change="changeTitSelect(year,\'year\')" _v-12a77312="">年</span> <span class=calendar-tit-month @click="changeTitSelect(month-1, \'month\')" _v-12a77312="">{{month+1}}月</span> </div> </div> <div v-show=dataTableShow _v-12a77312=""> <table cellpadding=5 v-if="type!=\'time\'" _v-12a77312=""> <thead _v-12a77312=""> <tr _v-12a77312=""> <td v-for="week in weeks" class=week _v-12a77312="">{{week}}</td> </tr> </thead> <tbody _v-12a77312=""><tr v-for="(k1,day) in days" _v-12a77312=""> <td v-for="(k2,child) in day" :class="{\'today\':child.today,\'disabled\':child.disabled}" :style="{\'background\':color&amp;&amp;child.today?color:\'\'}" @click=select(k1,k2,$event) _v-12a77312=""> {{child.day}} <div class=lunar v-if=showLunar _v-12a77312="">{{child.lunar}}</div> </td> </tr> </tbody></table> <div class=calendar-time v-show="type==\'datetime\'|| type==\'time\'" _v-12a77312=""> <div class="timer clearfix" _v-12a77312=""> <div class=timer-item _v-12a77312=""> <label @click=dropHourList _v-12a77312="">{{hour}}</label>: <ul class=drop-down v-show=hourListShow _v-12a77312=""> <li v-for="item in hourList" @click=selectHourItem _v-12a77312="">{{item}}</li> </ul> </div> <div class=timer-item _v-12a77312=""> <label @click=dropMinuteList _v-12a77312="">{{minute}}</label>: <ul class=drop-down v-show=minuteListShow _v-12a77312=""> <li v-for="item in minuteList" @click=selectMinuteItem _v-12a77312="">{{item}}</li> </ul> </div> <div class=timer-item _v-12a77312=""> <label @click=dropSecondList _v-12a77312="">{{second}}</label> <ul class=drop-down v-show=secondListShow _v-12a77312=""> <li v-for="item in secondList" @click=selectSecondItem _v-12a77312="">{{item}}</li> </ul> </div> <div class=timer-item _v-12a77312=""> <div class=timer-item-current @click=currentTime :style="{\'color\':color}" _v-12a77312="">当前</div> </div> </div> </div> <div class=calendar-button v-show="type==\'datetime\'|| type==\'time\' || range" _v-12a77312=""> <button @click=ok :style="{\'background\':color}" _v-12a77312="">确定</button> <button @click=cancel class=cancel _v-12a77312="">取消</button> </div> </div> <table cellpadding=6 v-show=yearTableShow _v-12a77312=""> <tbody _v-12a77312=""><tr v-show=selectRangeShow _v-12a77312=""> <td colspan=3 _v-12a77312="">{{selectRange}}</td> </tr> <tr v-for="selects in selectRangeList" _v-12a77312=""> <td v-for="select in selects" @click=selectItem(select) _v-12a77312="">{{select}}</td> </tr> </tbody></table> </div> <span class=input-group-btn v-if=btnShow @click=showCalendar _v-12a77312=""> <button class="btn btn-default" _v-12a77312=""> <span class="glyphicon glyphicon-calendar" _v-12a77312=""></span> </button> </span> </div> ';
    }, function(module, exports, __webpack_require__) {
        var __vue_script__, __vue_template__;
        __webpack_require__(2);
        __vue_script__ = __webpack_require__(1);
        __vue_template__ = __webpack_require__(3);
        module.exports = __vue_script__ || {};
        if (module.exports.__esModule) module.exports = module.exports.default;
        if (__vue_template__) {
            (typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports).template = __vue_template__;
        }
    } ]);
});

