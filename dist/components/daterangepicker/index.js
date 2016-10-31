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
        module.exports = __webpack_require__(8);
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _calendarMixins = __webpack_require__(3);
        var _calendarMixins2 = _interopRequireDefault(_calendarMixins);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        exports.default = {
            mixins: [ _calendarMixins2.default ],
            props: {
                otherValue: {
                    type: String,
                    "default": ""
                },
                right: {
                    type: Boolean,
                    "default": false
                },
                renderStar: {
                    type: String,
                    "default": ""
                },
                renderEnd: {
                    type: String,
                    "default": ""
                },
                dateLimit: {
                    type: Object,
                    "default": null
                }
            },
            watch: {
                renderStar: function renderStar(val) {
                    if (val === "" || this.right) {
                        return false;
                    }
                    var params = this.getValueParams(val);
                    this.year = params.year;
                    this.month = params.month;
                    this.render(params.year, params.month);
                },
                renderEnd: function renderEnd(val) {
                    if (val === "" || !this.right) {
                        return false;
                    }
                    var params = this.getValueParams(val);
                    this.year = params.year;
                    this.month = params.month;
                    this.render(params.year, params.month);
                }
            },
            methods: {
                renderElse: function renderElse(y, m, i, temp, line) {
                    var me = this;
                    var today = y + me.sep + me.zero(m + 1) + me.sep + me.zero(i);
                    var otherDate = me.otherValue.substring(0, 10);
                    var value = me.value.substring(0, 10);
                    if (today < me.begin || today > me.end) {
                        temp[line].push({
                            day: i,
                            disabled: true,
                            range: false
                        });
                    } else if (!me.right && today > value && today <= otherDate) {
                        temp[line].push({
                            day: i,
                            disabled: false,
                            range: true
                        });
                    } else if (me.right && today < value && today >= otherDate) {
                        temp[line].push({
                            day: i,
                            disabled: false,
                            range: true
                        });
                    } else if (me.right && today < otherDate) {
                        temp[line].push({
                            day: i,
                            disabled: true,
                            range: false
                        });
                    } else {
                        temp[line].push({
                            day: i,
                            today: false,
                            range: false
                        });
                    }
                },
                select: function select(k1, k2, e) {
                    if (e !== undefined) {
                        e.stopPropagation();
                    }
                    var me = this;
<<<<<<< HEAD
                    var daySeleted = me.days[k1][k2];
=======
>>>>>>> upstream/master
                    var va = me.getValueParams(me.value);
                    if (me.today.length > 0 && me.month === va.month && me.year === va.year) {
                        me.days[me.today[0]][me.today[1]].today = false;
                    }
<<<<<<< HEAD
                    daySeleted.today = true;
                    daySeleted.range = false;
                    me.day = this.zero(me.days[k1][k2].day);
                    me.today = [ k1, k2 ];
                    if (daySeleted.disabled) {
                        me.month = k1 === 0 ? me.month - 1 : me.month + 1;
                        me.outputMonth(me.month);
                        me.value = me.output([ me.year, me.month, me.day, me.hour, me.minute, me.second ]);
                        me.render(me.year, me.month);
                    } else {
                        me.today = [ k1, k2 ];
                        me.value = me.output([ me.year, me.month, me.day, me.hour, me.minute, me.second ]);
                    }
                    me.otherValue = me.bindLimitDate();
                    me.changeOtherCalender();
                },
=======
                    me.days[k1][k2].today = true;
                    me.days[k1][k2].range = false;
                    me.day = this.zero(me.days[k1][k2].day);
                    me.today = [ k1, k2 ];
                    me.value = me.output([ me.year, me.month, me.day, me.hour, me.minute, me.second ]);
                    me.otherValue = me.bindLimitDate();
                    me.changeOtherCalender();
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
>>>>>>> upstream/master
                changeOtherCalender: function changeOtherCalender() {
                    var me = this;
                    var params = me.getValueParams(me.value);
                    var monthStar = me.month;
                    var monthEnd = me.month;
                    if (!me.right) {
                        if (me.value > me.otherValue) {
                            me.otherValue = me.value;
                        } else if (me.getYearMonth(me.otherValue) > me.getYearMonth(me.value) + 1) {
                            monthEnd = monthEnd + 1;
                        }
                    } else if (me.right) {
                        if (me.value < me.otherValue) {
                            me.otherValue = me.value;
                        } else if (me.getYearMonth(me.value) > me.getYearMonth(me.otherValue) + 1) {
                            monthStar = monthStar - 1;
                        }
                    }
                    me.$parent.renderStar = me.output([ me.year, monthStar, params.day, me.hour, me.minute, me.second ]);
                    me.$parent.renderEnd = me.output([ me.year, monthEnd, params.day, me.hour, me.minute, me.second ]);
                },
                getYearMonth: function getYearMonth(date) {
                    var me = this;
                    var dates = date.split(me.sep);
                    return dates[0] * 12 + dates[1];
                },
                bindLimitDate: function bindLimitDate() {
                    var me = this;
                    var otherTime = me.otherValue;
                    var ov = me.otherValue;
                    if (me.dateLimit) {
                        if (me.dateLimit.hasOwnProperty("months")) {
                            var month = me.month + me.dateLimit.months;
                            if (!me.right) {
                                otherTime = me.output([ me.year, month, me.day, me.hour, me.minute, me.second ]);
                                otherTime = otherTime > me.end ? me.end : otherTime;
                            } else {
                                var bg = me.begin;
                                month = me.month - me.dateLimit.months;
                                otherTime = me.output([ me.year, month, me.day, me.hour, me.minute, me.second ]);
                                otherTime = otherTime < ov ? ov : otherTime < bg ? bg : otherTime;
                            }
                        } else if (this.dateLimit.hasOwnProperty("days")) {
                            var day = parseInt(me.day, 10) + me.dateLimit.days;
                            if (!me.right) {
                                otherTime = me.output([ me.year, me.month, day, me.hour, me.minute, me.second ]);
                                otherTime = otherTime > me.end ? me.end : otherTime;
                            } else {
                                var _bg = me.begin;
                                day = parseInt(me.day, 10) - me.dateLimit.days;
                                otherTime = me.output([ me.year, me.month, day, me.hour, me.minute, me.second ]);
                                otherTime = otherTime < ov ? ov : otherTime < _bg ? _bg : otherTime;
                            }
                        }
                    }
                    return otherTime;
                }
            }
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _calendar = __webpack_require__(7);
        var _calendar2 = _interopRequireDefault(_calendar);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        exports.default = {
            props: {
                show: {
                    type: Boolean,
                    twoWay: true,
                    "default": false
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
                },
                dateLimit: {
                    type: Object,
                    "default": null
                },
<<<<<<< HEAD
                className: String,
=======
                inputClass: {
                    type: Array,
                    "default": function _default() {
                        return [];
                    }
                },
>>>>>>> upstream/master
                btnShow: {
                    type: Boolean,
                    "default": false
                }
            },
            components: {
                calendar: _calendar2.default
            },
<<<<<<< HEAD
            data: function data() {
                return {
                    beginCalenderVal: "",
                    endCalenderVal: "",
                    renderStar: "",
                    renderEnd: ""
                };
            },
            created: function created() {
                if (this.value !== "") {
                    var values = this.value.split("至");
                    this.beginCalenderVal = values[0].trim();
                    this.endCalenderVal = values[1].trim();
                    if (this.beginCalenderVal > this.endCalenderVal) {
                        this.endCalenderVal = this.beginCalenderVal;
                        this.value = this.beginCalenderVal + " 至 " + this.endCalenderVal;
                    }
                    if (this.type === "datetime") {
                        this.beginCalenderVal = this.beginCalenderVal + " 00:00:00";
                        this.endCalenderVal = this.endCalenderVal + " 00:00:00";
                    }
                }
            },
            watch: {
                beginCalenderVal: function beginCalenderVal(val) {
                    if (val > this.endCalenderVal) {
                        this.endCalenderVal = val;
                    }
                },
                endCalenderVal: function endCalenderVal(val) {
                    if (val < this.beginCalenderVal) {
                        this.beginCalenderVal = val;
                    }
                }
            },
            methods: {
                ok: function ok() {
                    this.value = this.beginCalenderVal + " 至 " + this.endCalenderVal;
                    this.show = false;
                },
                cancel: function cancel() {
                    this.show = false;
                },
                showCalendar: function showCalendar(e) {
                    var me = this;
                    e.stopPropagation();
                    me.show = true;
                    var bindHide = function bindHide(e) {
                        e.stopPropagation();
                        me.show = false;
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
=======
            data: function data() {
                return {
                    beginCalenderVal: "",
                    endCalenderVal: "",
                    renderStar: "",
                    renderEnd: ""
                };
            },
            created: function created() {
                if (this.btnShow) {
                    this.inputClass.push("input-group");
                }
                if (this.value !== "") {
                    var values = this.value.split("至");
                    this.beginCalenderVal = values[0].trim();
                    this.endCalenderVal = values[1].trim();
                    if (this.type === "datetime") {
                        this.beginCalenderVal = this.beginCalenderVal + " 00:00:00";
                        this.endCalenderVal = this.endCalenderVal + " 00:00:00";
                    }
                }
            },
            methods: {
                ok: function ok() {
                    this.value = this.beginCalenderVal + " 至 " + this.endCalenderVal;
                    this.show = false;
                },
                cancel: function cancel() {
                    this.show = false;
                },
                showCalendar: function showCalendar(e) {
                    var me = this;
                    e.stopPropagation();
                    me.show = true;
                    var bindHide = function bindHide(e) {
                        e.stopPropagation();
                        me.show = false;
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
>>>>>>> upstream/master
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
<<<<<<< HEAD
                this.initialValue = this.value;
=======
                if (this.btnShow) {
                    this.inputClass.push("input-group");
                }
>>>>>>> upstream/master
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
<<<<<<< HEAD
                    me.value = me.output([ me.year, me.month, me.day, me.hour, me.minute, me.second ]);
=======
>>>>>>> upstream/master
                }
                for (var i = 0; i < 60; i++) {
                    if (i % me.minuteRange === 0) {
                        me.minuteList.push(me.zero(i));
                    }
                    if (i % me.secondRange === 0) {
                        me.secondList.push(me.zero(i));
                    }
                }
<<<<<<< HEAD
                for (var _i = 0; _i < 24; _i++) {
=======
                for (var _i = 1; _i < 24; _i++) {
>>>>>>> upstream/master
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
                    var firstDayOfMonth = new Date(y, m, 1).getDay();
                    var lastDateOfMonth = new Date(y, m + 1, 0).getDate();
                    var lastDayOfLastMonth = new Date(y, m, 0).getDate();
                    var params = me.getValueParams(me.value);
                    var line = 0;
                    var temp = [];
                    var date = new Date();
                    var currentTime = Number(new Date(date.getFullYear(), date.getMonth(), date.getDate()));
                    me.year = y;
                    me.currentMonth = me.months[m];
                    for (var i = 1; i <= lastDateOfMonth; i++) {
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
                            var k = lastDayOfLastMonth - firstDayOfMonth + 1;
                            for (var j = 0; j < firstDayOfMonth; j++) {
                                temp[line].push({
                                    day: k,
                                    disabled: true,
                                    today: false
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
                        } else if (i === lastDateOfMonth) {
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
                    me.outputMonth(me.month);
                    me.render(me.year, me.month);
                },
                next: function next(e) {
                    e.stopPropagation();
                    var me = this;
<<<<<<< HEAD
                    me.month += 1;
                    me.outputMonth(me.month);
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
=======
                    if (me.month === 11) {
                        me.month = 0;
                        me.year = me.year + 1;
>>>>>>> upstream/master
                    } else {
                        this.selectRangeList = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10, 11, 12 ] ];
                        this.selectRangeShow = false;
                    }
<<<<<<< HEAD
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
=======
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
>>>>>>> upstream/master
                    }
                    this.dataTableShow = false;
                    this.yearTableShow = true;
                },
<<<<<<< HEAD
                dropTimeList: function dropTimeList(type) {
                    var me = this;
=======
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
>>>>>>> upstream/master
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
<<<<<<< HEAD
                    me.value = me.output([ me.year, me.month, me.day, me.hour, me.minute, me.second ]);
=======
                    me.selectValue = me.output([ me.year, me.month, me.day, me.hour, me.minute, me.second ]);
>>>>>>> upstream/master
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
<<<<<<< HEAD
                    }
                },
                outputMonth: function outputMonth(val) {
                    val = Number(val);
                    if (val === -1) {
                        this.month = 11;
                        this.year -= 1;
                    } else if (val === 12) {
                        this.month = 0;
                        this.year += 1;
=======
>>>>>>> upstream/master
                    }
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
<<<<<<< HEAD
        module.exports = ' <div class=calendar-tools v-if="type!=\'time\'"> <i class="glyphicon glyphicon-chevron-left float left" @click=prev></i> <i class="glyphicon glyphicon-chevron-right float right" @click=next></i> <div class=calendar-tit> <span @click="changeTitSelect(year, \'year\')"> <input v-model=year class=calendar-tit-year type=text @change="changeTitSelect(year,\'year\')"/>年 </span> <span class=calendar-tit-month @click="changeTitSelect(month-1, \'month\')">{{month+1}}月</span> </div> </div> <div v-show=dataTableShow> <table cellpadding=5 v-if="type!=\'time\'"> <thead> <tr> <td v-for="week in weeks" class=week>{{week}}</td> </tr> </thead> <tr v-for="(k1,day) in days"> <td v-for="(k2,child) in day" :class="{\'today\':child.today,\'range\':child.range,\'off\':child.disabled}" :style="{\'background\':color&&child.today?color:\'\'}" @click=select(k1,k2,$event)> {{child.day}} </td> </tr> </table> <div class=calendar-time v-show="type==\'datetime\' || type==\'time\'"> <div class="timer clearfix"> <div class=timer-item> <label @click="dropTimeList(\'hour\')">{{hour}}</label>: <ul class=drop-down v-show=hourListShow> <li v-for="item in hourList" @click="selectTimeItem($event,\'hour\')">{{item}}</li> </ul> </div> <div class=timer-item> <label @click="dropTimeList(\'minute\')">{{minute}}</label>: <ul class=drop-down v-show=minuteListShow> <li v-for="item in minuteList" @click="selectTimeItem($event,\'minute\')">{{item}}</li> </ul> </div> <div class=timer-item> <label @click="dropTimeList(\'second\')">{{second}}</label> <ul class=drop-down v-show=secondListShow> <li v-for="item in secondList" @click="selectTimeItem($event,\'second\')">{{item}}</li> </ul> </div> </div> </div> </div> <table cellpadding=6 v-show=yearTableShow> <tr v-show=selectRangeShow> <td colspan=3>{{selectRange}}</td> </tr> <tr v-for="selects in selectRangeList"> <td v-for="select in selects" @click=selectItem(select)>{{select}}</td> </tr> </table> ';
    }, function(module, exports) {
        module.exports = ' <div class=xcui-datarangepicker :class=className> <div :class="{\'input-group\':btnShow}"> <input class="form-control col-md-3" type=text v-model=value placeholder=请输入日期 @click=showCalendar> <div @click.stop="" @touchstart.stop="" class="calendar double-calendar" v-show=show> <div class=clearfix> <div class=double-calendar-left> <calendar :type=type :value.sync=beginCalenderVal :sep=sep :other-value.sync=endCalenderVal :begin=begin :end=end :hour-range=hourRange :minute-range=minuteRange :second-range=secondRange :color=color :date-limit=dateLimit :render-star=renderStar></calendar> </div> <div class=double-calendar-right> <calendar :type=type :value.sync=endCalenderVal :sep=sep :other-value.sync=beginCalenderVal :right=true :begin=begin :end=end :hour-range=hourRange :minute-range=minuteRange :second-range=secondRange :color=color :date-limit=dateLimit :render-end=renderEnd></calendar> </div> </div> <div class=calendar-button> <button @click=ok :style="{\'background\':color}">确定</button> <button @click=cancel class=cancel>取消</button> </div> </div> <span class=input-group-btn v-if=btnShow @click=showCalendar> <button class="btn btn-default"> <span class="glyphicon glyphicon-calendar"></span> </button> </span> </div> </div> ';
    }, function(module, exports, __webpack_require__) {
        var __vue_script__, __vue_template__;
        var __vue_styles__ = {};
=======
        module.exports = ' <div class=calendar-tools v-if="type!=\'time\'"> <i class="glyphicon glyphicon-chevron-left float left" @click=prev></i> <i class="glyphicon glyphicon-chevron-right float right" @click=next></i> <div class=calendar-tit> <span @click="changeTitSelect(year, \'year\')"> <input v-model=year class=calendar-tit-year type=text @change="changeTitSelect(year,\'year\')"/>年 </span> <span class=calendar-tit-month @click="changeTitSelect(month-1, \'month\')">{{month+1}}月</span> </div> </div> <div v-show=dataTableShow> <table cellpadding=5 v-if="type!=\'time\'"> <thead> <tr> <td v-for="week in weeks" class=week>{{week}}</td> </tr> </thead> <tr v-for="(k1,day) in days"> <td v-for="(k2,child) in day" :class="{\'today\':child.today,\'range\':child.range,\'disabled\':child.disabled}" :style="{\'background\':color&&child.today?color:\'\'}" @click=select(k1,k2,$event)> {{child.day}} </td> </tr> </table> <div class=calendar-time v-show="type==\'datetime\' || type==\'time\'"> <div class="timer clearfix"> <div class=timer-item> <label @click="dropTimeList(\'hour\')">{{hour}}</label>: <ul class=drop-down v-show=hourListShow> <li v-for="item in hourList" @click="selectTimeItem($event,\'hour\')">{{item}}</li> </ul> </div> <div class=timer-item> <label @click="dropTimeList(\'minute\')">{{minute}}</label>: <ul class=drop-down v-show=minuteListShow> <li v-for="item in minuteList" @click="selectTimeItem($event,\'minute\')">{{item}}</li> </ul> </div> <div class=timer-item> <label @click="dropTimeList(\'second\')">{{second}}</label> <ul class=drop-down v-show=secondListShow> <li v-for="item in secondList" @click="selectTimeItem($event,\'second\')">{{item}}</li> </ul> </div> </div> </div> </div> <table cellpadding=6 v-show=yearTableShow> <tr v-show=selectRangeShow> <td colspan=3>{{selectRange}}</td> </tr> <tr v-for="selects in selectRangeList"> <td v-for="select in selects" @click=selectItem(select)>{{select}}</td> </tr> </table> ';
    }, function(module, exports) {
        module.exports = ' <div class=bg-pr :class=inputClass> <input class="form-control col-md-3" type=text v-model=value placeholder=请输入日期 @click=showCalendar> <div @click.stop="" @touchstart.stop="" class="calendar double-calendar" v-show=show> <div class=clearfix> <div class=double-calendar-left> <calendar :type=type :value.sync=beginCalenderVal :sep=sep :other-value.sync=endCalenderVal :begin=begin :end=end :hour-range=hourRange :minute-range=minuteRange :second-range=secondRange :color=color :date-limit=dateLimit :render-star=renderStar></calendar> </div> <div class=double-calendar-right> <calendar :type=type :value.sync=endCalenderVal :sep=sep :other-value.sync=beginCalenderVal :right=true :begin=begin :end=end :hour-range=hourRange :minute-range=minuteRange :second-range=secondRange :color=color :date-limit=dateLimit :render-end=renderEnd></calendar> </div> </div> <div class=calendar-button> <button @click=ok :style="{\'background\':color}">确定</button> <button @click=cancel class=cancel>取消</button> </div> </div> <span class=input-group-btn v-if=btnShow @click=showCalendar> <button class="btn btn-default"> <span class="glyphicon glyphicon-calendar"></span> </button> </span> </div> ';
    }, function(module, exports, __webpack_require__) {
        var __vue_script__, __vue_template__;
>>>>>>> upstream/master
        __vue_script__ = __webpack_require__(1);
        __vue_template__ = __webpack_require__(5);
        module.exports = __vue_script__ || {};
        if (module.exports.__esModule) module.exports = module.exports.default;
<<<<<<< HEAD
        var __vue_options__ = typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports;
        if (__vue_template__) {
            __vue_options__.template = __vue_template__;
        }
        if (!__vue_options__.computed) __vue_options__.computed = {};
        Object.keys(__vue_styles__).forEach(function(key) {
            var module = __vue_styles__[key];
            __vue_options__.computed[key] = function() {
                return module;
            };
        });
    }, function(module, exports, __webpack_require__) {
        var __vue_script__, __vue_template__;
        var __vue_styles__ = {};
=======
        if (__vue_template__) {
            (typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports).template = __vue_template__;
        }
    }, function(module, exports, __webpack_require__) {
        var __vue_script__, __vue_template__;
>>>>>>> upstream/master
        __webpack_require__(4);
        __vue_script__ = __webpack_require__(2);
        __vue_template__ = __webpack_require__(6);
        module.exports = __vue_script__ || {};
        if (module.exports.__esModule) module.exports = module.exports.default;
        var __vue_options__ = typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports;
        if (__vue_template__) {
            __vue_options__.template = __vue_template__;
        }
        if (!__vue_options__.computed) __vue_options__.computed = {};
        Object.keys(__vue_styles__).forEach(function(key) {
            var module = __vue_styles__[key];
            __vue_options__.computed[key] = function() {
                return module;
            };
        });
    } ]);
});

