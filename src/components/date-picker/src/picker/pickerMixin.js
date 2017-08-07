import Clickoutside from 'xcui/src/utils/clickoutside';
import { formatDate, parseDate, getWeekNumber, equalDate, isDate } from '../util';
import Popper from 'xcui/src/utils/vue-popper';
import Emitter from 'xcui/src/utils/mixins/emitter';
import XInput from '../../../input';

const NewPopper = {
    props: {
        appendToBody: Popper.props.appendToBody,
        offset: Popper.props.offset,
        boundariesPadding: Popper.props.boundariesPadding
    },
    methods: Popper.methods,
    data: Popper.data,
    beforeDestroy: Popper.beforeDestroy
};

const DEFAULT_FORMATS = {
    date: 'yyyy-MM-dd',
    month: 'yyyy-MM',
    datetime: 'yyyy-MM-dd HH:mm:ss',
    time: 'HH:mm:ss',
    timerange: 'HH:mm:ss',
    daterange: 'yyyy-MM-dd',
    datetimerange: 'yyyy-MM-dd HH:mm:ss',
    year: 'yyyy'
};
const HAVE_TRIGGER_TYPES = [
    'date',
    'datetime',
    'time',
    'time-select',
    'week',
    'month',
    'year',
    'daterange',
    'timerange',
    'datetimerange'
];
const DATE_FORMATTER = function(value, format) {
    return formatDate(value, format);
};
const DATE_PARSER = function(text, format) {
    return parseDate(text, format);
};

const PLACEMENT_MAP = {
    left: 'bottom-start',
    center: 'bottom-center',
    right: 'bottom-end'
};

export default {
    mixins: [Emitter, NewPopper],

    props: {
        size: String,
        format: String,
        readonly: Boolean,
        placeholder: String,
        disabled: Boolean,
        clearable: {
            type: Boolean,
            default: true
        },
        popperClass: String,
        editable: {
            type: Boolean,
            default: true
        },
        align: {
            type: String,
            default: 'left',
            validator(value) {
                return ['right', 'left'].indexOf(value) >= 0;
            }
        },
        value: {},
        rangeSeparator: {
            default: ' - '
        },
        pickerOptions: {}
    },

    components: { XInput },

    directives: { Clickoutside },

    data() {
        return {
            pickerVisible: false,
            showClose: false,
            currentValue: '',
            pickerDateForTime: '',
            pickerValueForTimeRange: '',
            TYPE_VALUE_RESOLVER_MAP: {
                default: {
                    formatter(value) {
                        if (!value) {
                            return '';
                        }
                        return '' + value;
                    },
                    parser(text) {
                        if (text === undefined || text === '') {
                            return null;
                        }
                        return text;
                    }
                },
                week: {
                    formatter(value) {
                        if (value instanceof Date) {
                            const weekNumber = getWeekNumber(value);
                            return value.getFullYear() + 'w' + (weekNumber > 9 ? weekNumber : '0' + weekNumber);
                        }
                        return value;
                    },
                    parser(text) {
                        const array = (text || '').split('w');
                        if (array.length === 2) {
                            const year = Number(array[0]);
                            const month = Number(array[1]);

                            if (!isNaN(year) && !isNaN(month) && month < 54) {
                                return text;
                            }
                        }
                        return null;
                    }
                },
                date: {
                    formatter: DATE_FORMATTER,
                    parser: DATE_PARSER
                },
                datetime: {
                    formatter: DATE_FORMATTER,
                    parser: DATE_PARSER
                },
                daterange: {
                    formatter: this.RANGE_FORMATTER,
                    parser: this.RANGE_PARSER
                },
                datetimerange: {
                    formatter: this.RANGE_FORMATTER,
                    parser: this.RANGE_PARSER
                },
                timerange: {
                    formatter: this.RANGE_FORMATTER,
                    parser: this.RANGE_PARSER
                },
                time: {
                    formatter: DATE_FORMATTER,
                    parser: DATE_PARSER
                },
                month: {
                    formatter: DATE_FORMATTER,
                    parser: DATE_PARSER
                },
                year: {
                    formatter: DATE_FORMATTER,
                    parser: DATE_PARSER
                },
                number: {
                    formatter(value) {
                        if (!value) {
                            return '';
                        }
                        return '' + value;
                    },
                    parser(text) {
                        let result = Number(text);

                        if (!isNaN(text)) {
                            return result;
                        }
                        return null;
                    }
                }
            }
        };
    },

    watch: {
        pickerVisible(val) {
            if (!val) {
                this.dispatch('XFormItem', 'x.form.blur');
            }
            if (this.readonly || this.disabled) {
                return;
            }
            val ? this.showPicker() : this.hidePicker();
        },
        currentValue(val) {
            if (val) {
                return;
            }
            if (this.picker && typeof this.picker.handleClear === 'function') {
                this.picker.handleClear();
            } else {
                this.$emit('input');
            }
        },
        value: {
            immediate: true,
            handler(val) {
                this.currentValue = isDate(val) ? new Date(val) : val;
            }
        },
        displayValue(val) {
            this.$emit('change', val);
            this.dispatch('XFormItem', 'x.form.change');
        }
    },

    computed: {
        reference() {
            return this.$refs.reference.$el;
        },

        refInput() {
            if (this.reference) {
                return this.reference.querySelector('input');
            }
            return {};
        },

        valueIsEmpty() {
            const val = this.currentValue;
            if (Array.isArray(val)) {
                for (let i = 0, len = val.length; i < len; i++) {
                    if (val[i]) {
                        return false;
                    }
                }
            } else {
                if (val) {
                    return false;
                }
            }
            return true;
        },

        triggerClass() {
            return this.type.indexOf('time') !== -1 ? 'x-icon-clock' : 'x-icon-calendar';
        },

        selectionMode() {
            if (this.type === 'week') {
                return 'week';
            } else if (this.type === 'month') {
                return 'month';
            } else if (this.type === 'year') {
                return 'year';
            }

            return 'day';
        },

        haveTrigger() {
            if (typeof this.showTrigger !== 'undefined') {
                return this.showTrigger;
            }
            return HAVE_TRIGGER_TYPES.indexOf(this.type) !== -1;
        },

        displayValue: {
            get() {
                const value = this.currentValue;
                if (!value) {
                    return;
                }
                const formatter = (
                    this.TYPE_VALUE_RESOLVER_MAP[this.type] ||
                    this.TYPE_VALUE_RESOLVER_MAP.default
                ).formatter;
                const format = DEFAULT_FORMATS[this.type];

                return formatter(value, this.format || format);
            },

            set(value) {
                if (value) {
                    const type = this.type;
                    const parser = (
                        this.TYPE_VALUE_RESOLVER_MAP.type ||
                        this.TYPE_VALUE_RESOLVER_MAP.default
                    ).parser;
                    const parsedValue = parser(value, this.format || DEFAULT_FORMATS[type]);

                    if (parsedValue && this.picker) {
                        this.picker.value = parsedValue;
                    }
                } else {
                    this.picker.value = value;
                }
                this.$forceUpdate();
            }
        }
    },

    created() {
        this.popperOptions = {
            boundariesPadding: 0,
            gpuAcceleration: false
        };
        this.placement = PLACEMENT_MAP[this.align] || PLACEMENT_MAP.left;
    },

    methods: {
        handleMouseEnterIcon() {
            if (this.readonly || this.disabled) {
                return;
            }
            if (!this.valueIsEmpty && this.clearable) {
                this.showClose = true;
            }
        },

        handleClickIcon() {
            if (this.readonly || this.disabled) {
                return;
            }
            if (this.showClose) {
                this.currentValue = '';
                this.showClose = false;
            } else {
                this.pickerVisible = !this.pickerVisible;
            }
        },

        dateChanged(dateA, dateB) {
            if (Array.isArray(dateA)) {
                let len = dateA.length;
                if (!dateB) {
                    return true;
                }
                while (len--) {
                    if (!equalDate(dateA[len], dateB[len])) {
                        return true;
                    }
                }
            } else {
                if (!equalDate(dateA, dateB)) {
                    return true;
                }
            }

            return false;
        },

        handleClose() {
            this.pickerVisible = false;
        },

        handleFocus() {
            const type = this.type;

            if (HAVE_TRIGGER_TYPES.indexOf(type) !== -1 && !this.pickerVisible) {
                this.pickerVisible = true;
            }
            this.$emit('focus', this);
        },

        handleBlur() {
            this.$emit('blur', this);
        },

        handleKeydown(event) {
            const keyCode = event.keyCode;

            // tab
            if (keyCode === 9) {
                this.pickerVisible = false;
            }
        },

        hidePicker() {
            if (this.picker) {
                this.picker.resetView && this.picker.resetView();
                this.handleVisible(false);
                // this.pickerVisible = this.picker.visible = false;
                this.destroyPopper();
            }
        },

        showPicker() {
            if (!this.picker) {
                // this.panel.defaultValue = this.currentValue;
                // this.picker = new Vue(this.panel).$mount(document.createElement('div'));
                this.picker = this.$refs.picker;
                // this.picker.defaultValue = this.currentValue;
                this.picker.popperClass = this.popperClass;
                this.popperElm = this.picker.$el;
                this.picker.width = this.reference.getBoundingClientRect().width;
                this.picker.showTime = this.type === 'datetime' || this.type === 'datetimerange';
                this.picker.selectionMode = this.selectionMode;
                if (this.format) {
                    this.picker.format = this.format;
                }

                const updateOptions = () => {
                    const options = this.pickerOptions;

                    if (options && options.selectableRange) {
                        let ranges = options.selectableRange;
                        const parser = this.TYPE_VALUE_RESOLVER_MAP.datetimerange.parser;
                        const format = DEFAULT_FORMATS.timerange;

                        ranges = Array.isArray(ranges) ? ranges : [ranges];
                        this.picker.selectableRange = ranges.map(range => parser(range, format));
                    }

                    for (const option in options) {
                        if (options.hasOwnProperty(option) &&
                            option !== 'selectableRange') {
                            this.picker[option] = options[option];
                        }
                    }
                };
                updateOptions();
                this.$watch('pickerOptions', () => updateOptions(), { deep: true });

                // this.$el.appendChild(this.picker.$el);
                // this.pickerVisible = this.picker.visible = true;
                this.handleVisible(true);

                this.picker.resetView && this.picker.resetView();

                this.picker.$on('dodestroy', this.doDestroy);
                this.picker.$on('pick', (date, visible = false) => {

                    if (this.type === 'daterange' || this.type === 'datetimerange') {
                        const options = this.pickerOptions;
                        if (options.dateLimit) {
                            // handle endDate with dateLimit
                            const startDate = date[0];
                            if (Object.prototype.toString.call(startDate) === '[object Date]') {
                                let limitEndDate = new Date(startDate.getTime());
                                Object.keys(options.dateLimit).forEach(v => {
                                    const num = options.dateLimit[v];
                                    if (!Number.isInteger(parseInt(num, 10)) || parseInt(num, 10) < 0) {
                                        console.warn(`xcui warn: dateLimit (${v}) must be a Positive Int Number`);
                                        return false;
                                    }
                                    switch (v) {
                                        case 'year':
                                            limitEndDate = limitEndDate.setFullYear(limitEndDate.getFullYear() + num);
                                            break;
                                        case 'month':
                                            limitEndDate = limitEndDate.setMonth(limitEndDate.getMonth() + num);
                                            break;
                                        case 'day':
                                            limitEndDate = limitEndDate.setDate(limitEndDate.getDate() + num);
                                            break;
                                        case 'hour':
                                            limitEndDate = limitEndDate.setHours(limitEndDate.getHours() + num);
                                            break;
                                        case 'minute':
                                            limitEndDate = limitEndDate.setMinutes(limitEndDate.getMinutes() + num);
                                            break;
                                        case 'second':
                                            limitEndDate = limitEndDate.setSeconds(limitEndDate.getSeconds() + num);
                                            break;
                                        default:
                                            break;
                                    }
                                    limitEndDate = new Date(limitEndDate);
                                });
                                console.log('limitEndDate', limitEndDate);
                                const endDate = date[1];
                                if (endDate > limitEndDate) {
                                    date[1] = limitEndDate;
                                    this.$emit('over-limit', startDate, endDate, limitEndDate);
                                }
                            }
                        }
                    }

                    this.$emit('input', date);
                    this.handleVisible(visible);

                    // this.pickerVisible = this.picker.visible = visible;
                    this.picker.resetView && this.picker.resetView();
                });

                this.picker.$on('select-range', (start, end) => {
                    this.refInput.setSelectionRange(start, end);
                    this.refInput.focus();
                });
            } else {
                this.handleVisible(true);
                // this.pickerVisible = this.picker.visible = true;
            }

            this.updatePopper();

            if (this.currentValue instanceof Date) {
                // 增加对time, timerange的处理
                if (this.type === 'time') {
                    this.pickerDateForTime = new Date(this.currentValue.getTime());
                } else {
                    this.picker.date = new Date(this.currentValue.getTime());
                }
            } else {
                if (this.type === 'timerange') {
                    this.pickerValueForTimeRange = this.currentValue;
                } else {
                    this.picker.value = this.currentValue;
                }
            }
            this.picker.resetView && this.picker.resetView();

            this.$nextTick(() => {
                this.picker.ajustScrollTop && this.picker.ajustScrollTop();
            });
        },

        handleVisible(visible) {
            if (this.type === 'time') {
                this.pickerVisible = visible;
            } else {
                this.pickerVisible = this.picker.visible = visible;
            }
        },

        RANGE_FORMATTER: function(value, format) {
            if (Array.isArray(value) && value.length === 2) {
                const start = value[0];
                const end = value[1];

                if (start && end) {
                    return formatDate(start, format) + this.rangeSeparator + formatDate(end, format);
                }
            }
            return '';
        },
        RANGE_PARSER: function(text, format) {
            const array = text.split(this.rangeSeparator);
            if (array.length === 2) {
                const range1 = array[0];
                const range2 = array[1];

                return [parseDate(range1, format), parseDate(range2, format)];
            }
            return [];
        }
    }
};
