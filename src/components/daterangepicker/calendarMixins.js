export default {
    props: {
        value: {
            twoWay: true,
            default: ''
        },
        format: {
            type: String,
            default: 'YYYY-MM-DD'
        },
        minDate: {},
        maxDate: {},
        hourRange: {
            type: [Number, String],
            default: 1
        },
        minuteRange: {
            type: [Number, String],
            default: 1
        },
        secondRange: {
            type: [Number, String],
            default: 1
        },
        color: String,
        className: String
    },
    data() {
        return {
            dataTableShow: true,
            year: '',
            month: '',
            day: '',
            days: [],
            weeks: ['日', '一', '二', '三', '四', '五', '六'],
            months: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
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
            dateParams: null,
            defaultFormat: 'YYYY-MM-DD'
        };
    },
    computed: {
        type() {
            let type = 'date';
            let format = this.format;
            let hasY = format.indexOf('YYYY') !== -1;
            let hasH = format.indexOf('hh') !== -1 || format.indexOf('HH') !== -1;
            if (hasY && hasH) {
                type = 'datetime';
            }
            else if (hasH) {
                type = 'time';
            }
            return type;
        },
        formatValue() {
            return this.output(this.value);
        }
    },
    created() {
        let me = this;
        this.initialValue = this.value;
        if (me.value !== '') {
            me.value = me.output(me.value);
        }
        else {
            me.value = me.output(new Date());
        }
        let params = me.dateParams;
        me.year = params.year;
        me.month = params.month;
        me.day = params.day;
        me.hour = params.hour;
        me.minute = params.minute;
        me.second = params.second;
        for (let i = 0; i < 60; i++) {
            if (i % me.minuteRange === 0) {
                me.minuteList.push(me.zero(i));
            }
            if (i % me.secondRange === 0) {
                me.secondList.push(me.zero(i));
            }
        }
        for (let i = 0; i < 24; i++) {
            if (i % me.hourRange === 0) {
                me.hourList.push(me.zero(i));
            }
        }
        if (me.type !== 'time') {
            me.render(me.year, me.month);
        }
        else {
            this.initialValue = this.value;
        }
    },
    methods: {
        zero(n) {
            return n < 10 && String(n).length === 1 ? '0' + n : n;
        },
        render(y, m) {
            let me = this;
            if (me.type === 'time') {
                return false;
            }
            me.firstDayOfMonth = new Date(y, m, 1).getDay();// 当月第一天
            me.lastDateOfMonth = new Date(y, m + 1, 0).getDate();// 当月最后一天
            me.lastDayOfLastMonth = new Date(y, m, 0).getDate();// 前一个月的最后一天
            me.output(me.value);
            let params = me.dateParams;
            let line = 0;
            let temp = [];
            let date = new Date();
            let currentTime = Number(new Date(date.getFullYear(), date.getMonth(), date.getDate()));
            me.year = y;
            me.currentMonth = me.months[m];
            for (let i = 1; i <= me.lastDateOfMonth; i++) {
                let dow = new Date(y, m, i).getDay();
                let isYear = params.year === me.year;
                let isMonth = params.month === me.month;
                let isDay = Number(params.day) === i;
                let format = me.defaultFormat;
                let minDate = me.minDate && me.output(me.minDate, format);
                let maxDate = me.maxDate && me.output(me.maxDate, format);
                // 第一行
                if (dow === 0) {
                    temp[line] = [];
                }
                else if (i === 1) {
                    temp[line] = [];
                    let k = me.lastDayOfLastMonth - me.firstDayOfMonth + 1;
                    for (let j = 0; j < me.firstDayOfMonth; j++) {
                        let nowDay = me.output([me.year, me.month, k], format);
                        if (nowDay < minDate || nowDay > maxDate) {
                            temp[line].push({day: k, disabled: true, prev: true, noClick: true});
                        }
                        else {
                            temp[line].push({day: k, disabled: true, prev: true});
                        }
                        k++;
                    }
                }
                if (isYear && isMonth && isDay) {
                    temp[line].push({day: i, today: true, disabled: false});
                    me.today = [line, temp[line].length - 1];// 当天
                }
                else {
                    me.renderElse(y, m, i, temp, line, currentTime);
                }
                // 最后一行
                if (dow === 6) {
                    line++;
                }
                else if (i === me.lastDateOfMonth) {
                    let k = 1;
                    for (dow; dow < 6; dow++) {
                        temp[line].push({day: k, disabled: true, today: false});
                        k++;
                    }
                }
            }// end for
            me.days = temp;
        },
        prev(e) {
            e.stopPropagation();
            let me = this;
            me.month -= 1;
            let om = me.outputMonth(me.month, me.year);
            me.year = om.y;
            me.month = om.m;
            me.render(me.year, me.month);
        },
        next(e) {
            e.stopPropagation();
            let me = this;
            me.month += 1;
            let om = me.outputMonth(me.month, me.year);
            me.year = om.y;
            me.month = om.m;
            me.render(me.year, me.month);
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
                this.render(me.year, me.month);
                this.dataTableShow = true;
                this.yearTableShow = false;
            }
            else {
                // select为月
                this.month = parseInt(select, 10) - 1;
                this.render(me.year, me.month);
                this.dataTableShow = true;
                this.yearTableShow = false;
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
            // me.value = me.bindFormat(`me.year-me.month-me.day me.hour:me.minute:me.second`);
            me.value = me.output([me.year, me.month, me.day, me.hour, me.minute, me.second]);
        },
        // 格式化输出
        output(d, format) {
            let fmt = format || this.format;
            let me = this;
            if (this.value && this.value !== '' && this.type === 'time' && typeof (d) === 'string') {
                d = '1970-01-01 ' + d;
            }
            let date = new Date(d);
            if (typeof (d) === 'object' && d.length > 0) {
                date = new Date(d[0], d[1], d[2], d[3] || '00', d[4] || '00', d[5] || '00');
            }
            let year = date.getFullYear();
            let month = date.getMonth();
            let getDate = date.getDate();
            let hour = date.getHours();
            let minute = date.getMinutes();
            let second = date.getSeconds();
            let timeParams = me.getRangeTime(hour, minute, second);
            hour = timeParams.hour;
            minute = timeParams.minute;
            second = timeParams.second;
            let o = {
                'M+': month + 1,
                'D+': getDate,
                'h+': hour,
                'm+': minute,
                's+': second,
                'q+': Math.floor((date.getMonth() + 3) / 3),
                'S': date.getMilliseconds()
            };
            if (/(Y+)/.test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (year + '').substr(4 - RegExp.$1.length));
            }
            for (let k in o) {
                if (new RegExp('(' + k + ')').test(fmt)) {
                    let str = ('00' + o[k]).substr(('' + o[k]).length);
                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : str);
                }
            }
            me.dateParams = {
                year: year,
                month: month,
                day: me.zero(getDate),
                hour: me.zero(hour),
                minute: me.zero(minute),
                second: me.zero(second)
            };
            return fmt;
        },
        // 处理month的边缘case
        outputMonth(month, year) {
            let m = Number(month);
            let y = Number(year);
            if (m === -1) {
                m = 11;
                y -= 1;
            }
            else if (m === 12) {
                m = 0;
                y += 1;
            }
            return {
                y: y,
                m: m
            };
        },
        getRangeTime(hour, minute, second) {
            let me = this;
            hour = Math.round(hour / me.hourRange) * me.hourRange;
            minute = Math.round(minute / me.minuteRange) * me.minuteRange;
            second = Math.round(second / me.secondRange) * me.secondRange;
            hour = hour === 24 ? (hour - me.hourRange) : hour;
            minute = minute === 60 ? (minute - me.minuteRange) : minute;
            second = second === 60 ? (second - me.secondRange) : second;
            return {
                hour: me.zero(hour),
                minute: me.zero(minute),
                second: me.zero(second)
            };
        }
    }
};
