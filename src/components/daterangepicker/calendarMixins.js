export default {
    props: {
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
            type: [Number, String],
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
            selectRange: ''
        };
    },
    created() {
        let me = this;
        let now = me.getCurrentParams();
        if (this.btnShow) {
            this.inputClass.push('input-group');
        }
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
    methods: {
        zero(n) {
            return n < 10 && String(n).length === 1 ? '0' + n : n;
        },
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
            me.currentMonth = me.months[m];
            for (let i = 1; i <= lastDateOfMonth; i++) {
                let dow = new Date(y, m, i).getDay();
                let chk = new Date();
                let chkY = chk.getFullYear();
                let chkM = chk.getMonth();
                let year = params.year === me.year;
                let month = params.month === me.month;
                let day = params.day === i;
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
                if (year && month && day && seletSplit4) {
                    temp[line].push({day: i, today: true});
                    me.today = [line, temp[line].length - 1];// 当天
                }
                else if (chkY === me.year && chkM === me.month && i === me.day && me.value === undefined) {
                    temp[line].push({day: i, today: true});
                    me.today = [line, temp[line].length - 1];
                }
                else {
                    me.renderElse(y, m, i, temp, line, currentTime);
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
            me.selectValue = me.output([me.year, me.month, me.day, me.hour, me.minute, me.second]);
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
        }
    }
};
