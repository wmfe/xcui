webpackJsonp([30],{

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(454),
  /* template */
  __webpack_require__(455),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    data: function data() {
        return {
            model1: '',
            pickerOption1: {
                disabledDate: function disabledDate(time) {
                    return time.getTime() < Date.now() - 24 * 60 * 60 * 1000;
                }
            },
            model2: '2016-12-13T00:45:00.000Z',
            pickerOption2: {
                shortcuts: [{
                    text: '今天',
                    onClick: function onClick(picker) {
                        picker.$emit('pick', new Date());
                    }
                }, {
                    text: '昨天',
                    onClick: function onClick(picker) {
                        var date = new Date();
                        date.setTime(date.getTime() - 60 * 60 * 1000 * 24);
                        picker.$emit('pick', date);
                    }
                }, {
                    text: '一周前',
                    onClick: function onClick(picker) {
                        var date = new Date();
                        date.setTime(date.getTime() - 60 * 60 * 1000 * 24 * 7);
                        picker.$emit('pick', date);
                    }
                }]
            },
            model3: '',
            model4: '',
            model5: '',
            model6: '',
            model7: '',
            model8: '',
            pickerOption3: {
                dateLimit: {
                    month: 1
                }
            },
            pickerOption4: {
                shortcuts: [{
                    text: '最近一周',
                    onClick: function onClick(picker) {
                        var end = new Date();
                        var start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近一个月',
                    onClick: function onClick(picker) {
                        var end = new Date();
                        var start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近三个月',
                    onClick: function onClick(picker) {
                        var end = new Date();
                        var start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                        picker.$emit('pick', [start, end]);
                    }
                }]
            }
        };
    },

    methods: {
        handleOverLimit: function handleOverLimit(startDate, endDate, limitEndDate) {
            this.$Message.warning('选择时间超过限定最大时间（最大可选1个月）');
        }
    }
};

/***/ }),

/***/ 455:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h1', [_vm._v("DatePicker 日期选择框")]), _vm._v(" "), _c('p', [_vm._v("用于输入或选择日期或日期范围。")]), _vm._v(" "), _c('h2', [_vm._v("基本使用：选择单日期")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('xcui-demo', [_c('div', {
    slot: "source"
  }, [_c('div', {
    staticStyle: {
      "width": "180px"
    }
  }, [_c('x-date-picker', {
    attrs: {
      "placeholder": "请选择日期",
      "picker-options": _vm.pickerOption1
    },
    model: {
      value: (_vm.model1),
      callback: function($$v) {
        _vm.model1 = $$v
      },
      expression: "model1"
    }
  })], 1)]), _vm._v(" "), _c('span', {
    slot: "info-title"
  }, [_vm._v("说明")]), _vm._v(" "), _c('div', {
    slot: "info"
  }, [_c('p', [_vm._v("基本使用, 可通过设置"), _c('code', [_vm._v("pickerOptions")]), _vm._v("的"), _c('code', [_vm._v("disabledDate")]), _vm._v("属性对日期进行限制，本例展示了禁用今天以前的日期。")])]), _vm._v(" "), _c('div', {
    slot: "highlight"
  }, [_c('pre', [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("template")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("div")]), _c('span', {
    staticClass: "token style-attr language-css"
  }, [_c('span', {
    staticClass: "token attr-name"
  }, [_vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("style")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=\"")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token property"
  }, [_vm._v("width")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v("180px")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-date-picker")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("v-model")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("model1"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("placeholder")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("请选择日期"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v(":picker-options")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("pickerOption1"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-date-picker")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("div")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("template")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n\n"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("script")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _c('span', {
    staticClass: "token script language-javascript"
  }, [_vm._v("\n    "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("export")]), _vm._v(" "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("default")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token function"
  }, [_vm._v("data")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n            "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("return")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n                model1"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token string"
  }, [_vm._v("''")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v("\n                pickerOption1"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n                    "), _c('span', {
    staticClass: "token function"
  }, [_vm._v("disabledDate")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _vm._v("time"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n                        "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("return")]), _vm._v(" time"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _c('span', {
    staticClass: "token function"
  }, [_vm._v("getTime")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("<")]), _vm._v(" Date"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _c('span', {
    staticClass: "token function"
  }, [_vm._v("now")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("-")]), _vm._v(" "), _c('span', {
    staticClass: "token number"
  }, [_vm._v("24")]), _vm._v(" "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("*")]), _vm._v(" "), _c('span', {
    staticClass: "token number"
  }, [_vm._v("60")]), _vm._v(" "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("*")]), _vm._v(" "), _c('span', {
    staticClass: "token number"
  }, [_vm._v("60")]), _vm._v(" "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("*")]), _vm._v(" "), _c('span', {
    staticClass: "token number"
  }, [_vm._v("1000")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n                    "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _vm._v("\n                "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _vm._v("\n            "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _vm._v("\n    "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _vm._v("\n")]), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("script")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n\n")])])]), _vm._v(" "), _c('h2', [_vm._v("日期：带快捷选项")]), _vm._v(" "), _c('xcui-demo', [_c('div', {
    slot: "source"
  }, [_c('div', {
    staticStyle: {
      "width": "180px"
    }
  }, [_c('x-date-picker', {
    attrs: {
      "align": "left",
      "placeholder": "请选择日期",
      "picker-options": _vm.pickerOption2
    },
    model: {
      value: (_vm.model2),
      callback: function($$v) {
        _vm.model2 = $$v
      },
      expression: "model2"
    }
  })], 1)]), _vm._v(" "), _c('span', {
    slot: "info-title"
  }, [_vm._v("说明")]), _vm._v(" "), _c('div', {
    slot: "info"
  }, [_c('p', [_vm._v("带快捷选项，通过设置"), _c('code', [_vm._v("pickerOptions")]), _vm._v("的"), _c('code', [_vm._v("shortcuts")]), _vm._v("属性来实现。")])]), _vm._v(" "), _c('div', {
    slot: "highlight"
  }, [_c('pre', [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("template")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("div")]), _c('span', {
    staticClass: "token style-attr language-css"
  }, [_c('span', {
    staticClass: "token attr-name"
  }, [_vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("style")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=\"")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token property"
  }, [_vm._v("width")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v("180px")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-date-picker")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("v-model")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("model2"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("align")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("left"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("placeholder")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("请选择日期"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v(":picker-options")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("pickerOption2"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-date-picker")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("div")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("template")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n\n"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("script")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _c('span', {
    staticClass: "token script language-javascript"
  }, [_vm._v("\n    "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("export")]), _vm._v(" "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("default")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token function"
  }, [_vm._v("data")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n            "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("return")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n                model2"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token string"
  }, [_vm._v("''")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v("\n                pickerOption2"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n                    shortcuts"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("[")]), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n                        text"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'今天'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v("\n                        "), _c('span', {
    staticClass: "token function"
  }, [_vm._v("onClick")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _vm._v("picker"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n                            picker"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _c('span', {
    staticClass: "token function"
  }, [_vm._v("$emit")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'pick'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("new")]), _vm._v(" "), _c('span', {
    staticClass: "token class-name"
  }, [_vm._v("Date")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n                        "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _vm._v("\n                    "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n                        text"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'昨天'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v("\n                        "), _c('span', {
    staticClass: "token function"
  }, [_vm._v("onClick")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _vm._v("picker"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n                            "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("const")]), _vm._v(" date "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("new")]), _vm._v(" "), _c('span', {
    staticClass: "token class-name"
  }, [_vm._v("Date")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n                            date"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _c('span', {
    staticClass: "token function"
  }, [_vm._v("setTime")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _vm._v("date"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _c('span', {
    staticClass: "token function"
  }, [_vm._v("getTime")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("-")]), _vm._v(" "), _c('span', {
    staticClass: "token number"
  }, [_vm._v("60")]), _vm._v(" "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("*")]), _vm._v(" "), _c('span', {
    staticClass: "token number"
  }, [_vm._v("60")]), _vm._v(" "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("*")]), _vm._v(" "), _c('span', {
    staticClass: "token number"
  }, [_vm._v("1000")]), _vm._v(" "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("*")]), _vm._v(" "), _c('span', {
    staticClass: "token number"
  }, [_vm._v("24")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n                            picker"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _c('span', {
    staticClass: "token function"
  }, [_vm._v("$emit")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'pick'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" date"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n                        "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _vm._v("\n                    "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n                        text"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'一周前'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v("\n                        "), _c('span', {
    staticClass: "token function"
  }, [_vm._v("onClick")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _vm._v("picker"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n                            "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("const")]), _vm._v(" date "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("new")]), _vm._v(" "), _c('span', {
    staticClass: "token class-name"
  }, [_vm._v("Date")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n                            date"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _c('span', {
    staticClass: "token function"
  }, [_vm._v("setTime")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _vm._v("date"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _c('span', {
    staticClass: "token function"
  }, [_vm._v("getTime")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("-")]), _vm._v(" "), _c('span', {
    staticClass: "token number"
  }, [_vm._v("60")]), _vm._v(" "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("*")]), _vm._v(" "), _c('span', {
    staticClass: "token number"
  }, [_vm._v("60")]), _vm._v(" "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("*")]), _vm._v(" "), _c('span', {
    staticClass: "token number"
  }, [_vm._v("1000")]), _vm._v(" "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("*")]), _vm._v(" "), _c('span', {
    staticClass: "token number"
  }, [_vm._v("24")]), _vm._v(" "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("*")]), _vm._v(" "), _c('span', {
    staticClass: "token number"
  }, [_vm._v("7")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n                            picker"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _c('span', {
    staticClass: "token function"
  }, [_vm._v("$emit")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'pick'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" date"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n                        "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _vm._v("\n                    "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("]")]), _vm._v("\n                "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _vm._v("\n            "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _vm._v("\n    "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _vm._v("\n")]), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("script")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n")])])]), _vm._v(" "), _c('h2', [_vm._v("选择周 / 月 / 年")]), _vm._v(" "), _c('xcui-demo', [_c('div', {
    slot: "source"
  }, [_c('x-row', [_c('x-col', {
    attrs: {
      "span": "6"
    }
  }, [_c('p', [_vm._v("选择周")]), _vm._v(" "), _c('x-date-picker', {
    attrs: {
      "placeholder": "请选择周",
      "type": "week",
      "format": "yyyy 第 WW 周"
    },
    model: {
      value: (_vm.model3),
      callback: function($$v) {
        _vm.model3 = $$v
      },
      expression: "model3"
    }
  })], 1), _vm._v(" "), _c('x-col', {
    attrs: {
      "span": "6",
      "offset": "3"
    }
  }, [_c('p', [_vm._v("选择月")]), _vm._v(" "), _c('x-date-picker', {
    attrs: {
      "placeholder": "请选择月",
      "type": "month"
    },
    model: {
      value: (_vm.model4),
      callback: function($$v) {
        _vm.model4 = $$v
      },
      expression: "model4"
    }
  })], 1), _vm._v(" "), _c('x-col', {
    attrs: {
      "span": "6",
      "offset": "3"
    }
  }, [_c('p', [_vm._v("选择年")]), _vm._v(" "), _c('x-date-picker', {
    attrs: {
      "placeholder": "请选择年",
      "type": "year"
    },
    model: {
      value: (_vm.model5),
      callback: function($$v) {
        _vm.model5 = $$v
      },
      expression: "model5"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('span', {
    slot: "info-title"
  }, [_vm._v("说明")]), _vm._v(" "), _c('div', {
    slot: "info"
  }, [_c('p', [_vm._v("通过设置"), _c('code', [_vm._v("type")]), _vm._v("属性为"), _c('code', [_vm._v("week/month/year")]), _vm._v("可以进行周/月/年模式的切换。")])]), _vm._v(" "), _c('div', {
    slot: "highlight"
  }, [_c('pre', [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("template")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-row")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-col")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("span")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("6"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n            "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("p")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("选择周"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("p")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n            "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-date-picker")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("v-model")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("model3"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("placeholder")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("请选择周"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("type")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("week"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("format")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("yyyy 第 WW 周"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n            "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-date-picker")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-col")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-col")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("span")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("6"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("offset")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("3"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n            "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("p")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("选择月"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("p")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n            "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-date-picker")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("v-model")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("model4"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("placeholder")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("请选择月"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("type")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("month"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n            "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-date-picker")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-col")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-col")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("span")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("6"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("offset")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("3"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n            "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("p")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("选择年"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("p")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n            "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-date-picker")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("v-model")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("model5"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("placeholder")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("请选择年"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("type")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("year"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n            "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-date-picker")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-col")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-row")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("template")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n\n"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("script")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _c('span', {
    staticClass: "token script language-javascript"
  }, [_vm._v("\n    "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("export")]), _vm._v(" "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("default")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token function"
  }, [_vm._v("data")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n            "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("return")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n                model3"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token string"
  }, [_vm._v("''")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v("\n                model4"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token string"
  }, [_vm._v("''")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v("\n                model5"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token string"
  }, [_vm._v("''")]), _vm._v("\n            "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _vm._v("\n    "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _vm._v("\n")]), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("script")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n\n")])])]), _vm._v(" "), _c('h2', [_vm._v("基本使用：选择日期范围")]), _vm._v(" "), _c('xcui-demo', [_c('div', {
    slot: "source"
  }, [_c('div', {
    staticStyle: {
      "width": "240px"
    }
  }, [_c('x-date-picker', {
    attrs: {
      "type": "daterange",
      "placeholder": "选择日期范围"
    },
    model: {
      value: (_vm.model6),
      callback: function($$v) {
        _vm.model6 = $$v
      },
      expression: "model6"
    }
  })], 1)]), _vm._v(" "), _c('span', {
    slot: "info-title"
  }, [_vm._v("说明")]), _vm._v(" "), _c('div', {
    slot: "info"
  }, [_c('p', [_vm._v("通过使用"), _c('code', [_vm._v("type=\"daterange\"")]), _vm._v("来选择日期范围。返回的时间格式为"), _c('code', [_vm._v("ISO string")]), _vm._v("的数组[Date1, Date2]。")])]), _vm._v(" "), _c('div', {
    slot: "highlight"
  }, [_c('pre', [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("template")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("div")]), _c('span', {
    staticClass: "token style-attr language-css"
  }, [_c('span', {
    staticClass: "token attr-name"
  }, [_vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("style")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=\"")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token property"
  }, [_vm._v("width")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" 240px")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-date-picker")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("type")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("daterange"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("v-model")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("model6"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("placeholder")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("选择日期范围"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-date-picker")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("div")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("template")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n\n")])])]), _vm._v(" "), _c('h2', [_vm._v("日期范围：限定最多可选的日期范围（如最多只能选一个月）")]), _vm._v(" "), _c('xcui-demo', [_c('div', {
    slot: "source"
  }, [_c('div', {
    staticStyle: {
      "width": "240px"
    }
  }, [_c('x-date-picker', {
    attrs: {
      "type": "daterange",
      "placeholder": "选择日期范围",
      "pickerOptions": _vm.pickerOption3
    },
    on: {
      "over-limit": _vm.handleOverLimit
    },
    model: {
      value: (_vm.model7),
      callback: function($$v) {
        _vm.model7 = $$v
      },
      expression: "model7"
    }
  })], 1)]), _vm._v(" "), _c('span', {
    slot: "info-title"
  }, [_vm._v("说明")]), _vm._v(" "), _c('div', {
    slot: "info"
  }, [_c('p', [_vm._v("通过设置"), _c('code', [_vm._v("pickerOptions")]), _vm._v("的"), _c('code', [_vm._v("dateLimit")]), _vm._v("选项来控制范围。"), _c('code', [_vm._v("dateLimit")]), _vm._v("为"), _c('code', [_vm._v("object")]), _vm._v("格式，可支持的选项有"), _c('code', [_vm._v("year")]), _vm._v(", "), _c('code', [_vm._v("month")]), _vm._v(", "), _c('code', [_vm._v("day")]), _vm._v(", "), _c('code', [_vm._v("hour")]), _vm._v(", "), _c('code', [_vm._v("minute")]), _vm._v(", "), _c('code', [_vm._v("second")]), _vm._v("。如同时设置2种以上选项时，日期范围会被累加，如1年2个月。当用户的选择超过限定范围时，会自动选择最大范围（以开始时间计算）。配合日期限制有一个对应的钩子事件"), _c('code', [_vm._v("@over-limit")]), _vm._v(",可用于错误提示。")])]), _vm._v(" "), _c('div', {
    slot: "highlight"
  }, [_c('pre', [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("template")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("div")]), _c('span', {
    staticClass: "token style-attr language-css"
  }, [_c('span', {
    staticClass: "token attr-name"
  }, [_vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("style")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=\"")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token property"
  }, [_vm._v("width")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" 240px")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-date-picker")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("type")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("daterange"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("v-model")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("model7"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("placeholder")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("选择日期范围"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v(":pickerOptions")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("pickerOption3"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("@over-limit")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("handleOverLimit"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-date-picker")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("div")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("template")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n\n"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("script")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _c('span', {
    staticClass: "token script language-javascript"
  }, [_vm._v("\n    "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("export")]), _vm._v(" "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("default")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n       "), _c('span', {
    staticClass: "token function"
  }, [_vm._v("data")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n           "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("return")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n               model7"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token string"
  }, [_vm._v("''")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v("\n               pickerOption3"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n                  dateLimit"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n                      month"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token number"
  }, [_vm._v("1")]), _vm._v("\n                  "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _vm._v("\n               "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _vm._v("\n           "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _vm._v("\n       "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v("\n       methods"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n           "), _c('span', {
    staticClass: "token function"
  }, [_vm._v("handleOverLimit")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _vm._v("startDate"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" endDate"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" limitEndDate"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n                "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("this")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _vm._v("$Message"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _c('span', {
    staticClass: "token function"
  }, [_vm._v("warning")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'选择时间超过限定最大时间（最大可选1个月）'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n           "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _vm._v("\n       "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _vm._v("\n    "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _vm._v("\n")]), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("script")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n\n")])])]), _vm._v(" "), _c('h2', [_vm._v("日期范围： 带快捷选项")]), _vm._v(" "), _c('xcui-demo', [_c('div', {
    slot: "source"
  }, [_c('div', {
    staticStyle: {
      "width": "240px"
    }
  }, [_c('x-date-picker', {
    attrs: {
      "type": "daterange",
      "placeholder": "选择日期范围",
      "picker-options": _vm.pickerOption4
    },
    model: {
      value: (_vm.model8),
      callback: function($$v) {
        _vm.model8 = $$v
      },
      expression: "model8"
    }
  })], 1)]), _vm._v(" "), _c('span', {
    slot: "info-title"
  }, [_vm._v("说明")]), _vm._v(" "), _c('div', {
    slot: "info"
  }, [_c('p', [_vm._v("与单日期一样，可以使用"), _c('code', [_vm._v("pickerOptions")]), _vm._v("的"), _c('code', [_vm._v("shortcuts")]), _vm._v("属性增加快捷选项。")])]), _vm._v(" "), _c('div', {
    slot: "highlight"
  }, [_c('pre', [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("template")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("div")]), _c('span', {
    staticClass: "token style-attr language-css"
  }, [_c('span', {
    staticClass: "token attr-name"
  }, [_vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("style")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=\"")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token property"
  }, [_vm._v("width")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" 240px")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-date-picker")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("type")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("daterange"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("v-model")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("model8"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("placeholder")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("选择日期范围"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v(":picker-options")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("pickerOption4"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-date-picker")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("div")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("template")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n\n"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("script")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _c('span', {
    staticClass: "token script language-javascript"
  }, [_vm._v("\n    "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("export")]), _vm._v(" "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("default")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token function"
  }, [_vm._v("data")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n            "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("return")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n                model8"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token string"
  }, [_vm._v("''")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v("\n                pickerOption4"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n                    shortcuts"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("[")]), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n                        text"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'最近一周'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v("\n                        "), _c('span', {
    staticClass: "token function"
  }, [_vm._v("onClick")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _vm._v("picker"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n                            "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("const")]), _vm._v(" end "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("new")]), _vm._v(" "), _c('span', {
    staticClass: "token class-name"
  }, [_vm._v("Date")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n                            "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("const")]), _vm._v(" start "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("new")]), _vm._v(" "), _c('span', {
    staticClass: "token class-name"
  }, [_vm._v("Date")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n                            start"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _c('span', {
    staticClass: "token function"
  }, [_vm._v("setTime")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _vm._v("start"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _c('span', {
    staticClass: "token function"
  }, [_vm._v("getTime")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("-")]), _vm._v(" "), _c('span', {
    staticClass: "token number"
  }, [_vm._v("3600")]), _vm._v(" "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("*")]), _vm._v(" "), _c('span', {
    staticClass: "token number"
  }, [_vm._v("1000")]), _vm._v(" "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("*")]), _vm._v(" "), _c('span', {
    staticClass: "token number"
  }, [_vm._v("24")]), _vm._v(" "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("*")]), _vm._v(" "), _c('span', {
    staticClass: "token number"
  }, [_vm._v("7")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n                            picker"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _c('span', {
    staticClass: "token function"
  }, [_vm._v("$emit")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'pick'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("[")]), _vm._v("start"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" end"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("]")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n                        "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _vm._v("\n                    "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n                        text"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'最近一个月'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v("\n                        "), _c('span', {
    staticClass: "token function"
  }, [_vm._v("onClick")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _vm._v("picker"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n                            "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("const")]), _vm._v(" end "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("new")]), _vm._v(" "), _c('span', {
    staticClass: "token class-name"
  }, [_vm._v("Date")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n                            "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("const")]), _vm._v(" start "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("new")]), _vm._v(" "), _c('span', {
    staticClass: "token class-name"
  }, [_vm._v("Date")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n                            start"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _c('span', {
    staticClass: "token function"
  }, [_vm._v("setTime")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _vm._v("start"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _c('span', {
    staticClass: "token function"
  }, [_vm._v("getTime")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("-")]), _vm._v(" "), _c('span', {
    staticClass: "token number"
  }, [_vm._v("3600")]), _vm._v(" "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("*")]), _vm._v(" "), _c('span', {
    staticClass: "token number"
  }, [_vm._v("1000")]), _vm._v(" "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("*")]), _vm._v(" "), _c('span', {
    staticClass: "token number"
  }, [_vm._v("24")]), _vm._v(" "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("*")]), _vm._v(" "), _c('span', {
    staticClass: "token number"
  }, [_vm._v("30")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n                            picker"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _c('span', {
    staticClass: "token function"
  }, [_vm._v("$emit")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'pick'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("[")]), _vm._v("start"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" end"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("]")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n                        "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _vm._v("\n                    "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n                        text"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'最近三个月'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v("\n                        "), _c('span', {
    staticClass: "token function"
  }, [_vm._v("onClick")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _vm._v("picker"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n                            "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("const")]), _vm._v(" end "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("new")]), _vm._v(" "), _c('span', {
    staticClass: "token class-name"
  }, [_vm._v("Date")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n                            "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("const")]), _vm._v(" start "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("new")]), _vm._v(" "), _c('span', {
    staticClass: "token class-name"
  }, [_vm._v("Date")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n                            start"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _c('span', {
    staticClass: "token function"
  }, [_vm._v("setTime")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _vm._v("start"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _c('span', {
    staticClass: "token function"
  }, [_vm._v("getTime")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("-")]), _vm._v(" "), _c('span', {
    staticClass: "token number"
  }, [_vm._v("3600")]), _vm._v(" "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("*")]), _vm._v(" "), _c('span', {
    staticClass: "token number"
  }, [_vm._v("1000")]), _vm._v(" "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("*")]), _vm._v(" "), _c('span', {
    staticClass: "token number"
  }, [_vm._v("24")]), _vm._v(" "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("*")]), _vm._v(" "), _c('span', {
    staticClass: "token number"
  }, [_vm._v("90")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n                            picker"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _c('span', {
    staticClass: "token function"
  }, [_vm._v("$emit")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'pick'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("[")]), _vm._v("start"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" end"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("]")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n                        "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _vm._v("\n                    "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("]")]), _vm._v("\n                "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _vm._v("\n            "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _vm._v("\n    "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _vm._v("\n")]), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("script")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n\n")])])]), _vm._v(" "), _c('h2', [_vm._v("DatePicker Props")]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('h2', [_vm._v("Picker Options")]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('h2', [_vm._v("Shortcuts")]), _vm._v(" "), _vm._m(3), _vm._v(" "), _c('h2', [_vm._v("DatePicker Events")]), _vm._v(" "), _vm._m(4)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('blockquote', [_c('p', [_vm._v("注： "), _c('code', [_vm._v("v-model")]), _vm._v("绑定值的时间格式为"), _c('code', [_vm._v("ISO string")]), _vm._v("，如："), _c('code', [_vm._v("2016-12-13T00:45:00.000Z")]), _vm._v("。")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "markdown-table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("名字")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("默认")]), _vm._v(" "), _c('th', [_vm._v("描述")]), _vm._v(" "), _c('th', [_vm._v("是否必选")]), _vm._v(" "), _c('th', [_vm._v("可选值")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("v-model")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("无")]), _vm._v(" "), _c('td', [_vm._v("绑定值")]), _vm._v(" "), _c('td', [_vm._v("是")]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("readonly")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("false")]), _vm._v(" "), _c('td', [_vm._v("是否完全只读")]), _vm._v(" "), _c('td', [_vm._v("可选")]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("disabled")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("false")]), _vm._v(" "), _c('td', [_vm._v("是否禁用")]), _vm._v(" "), _c('td', [_vm._v("可选")]), _vm._v(" "), _c('td', [_vm._v("true, false")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("editable")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("false")]), _vm._v(" "), _c('td', [_vm._v("文本框可输入")]), _vm._v(" "), _c('td', [_vm._v("可选")]), _vm._v(" "), _c('td', [_vm._v("true, false")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("clearable")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("true")]), _vm._v(" "), _c('td', [_vm._v("是否显示清除按钮")]), _vm._v(" "), _c('td', [_vm._v("可选")]), _vm._v(" "), _c('td', [_vm._v("true, false")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("size")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("无")]), _vm._v(" "), _c('td', [_vm._v("文本框尺寸")]), _vm._v(" "), _c('td', [_vm._v("可选")]), _vm._v(" "), _c('td', [_vm._v("large, small")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("placeholder")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("无")]), _vm._v(" "), _c('td', [_vm._v("文本框默认显示文字")]), _vm._v(" "), _c('td', [_vm._v("可选")]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("type")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("date")]), _vm._v(" "), _c('td', [_vm._v("显示类型")]), _vm._v(" "), _c('td', [_vm._v("可选")]), _vm._v(" "), _c('td', [_vm._v("year/month/date/week/datetime/daterange/datetimerange")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("format")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("yyyy-MM-dd")]), _vm._v(" "), _c('td', [_vm._v("时间日期格式化")]), _vm._v(" "), _c('td', [_vm._v("可选")]), _vm._v(" "), _c('td', [_vm._v("年yyyy, 月MM, 日dd, 小时HH, 分mm, 秒ss")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("align")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("left")]), _vm._v(" "), _c('td', [_vm._v("对齐方式")]), _vm._v(" "), _c('td', [_vm._v("可选")]), _vm._v(" "), _c('td', [_vm._v("left, right")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("popper-class")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("无")]), _vm._v(" "), _c('td', [_vm._v("下拉框类名")]), _vm._v(" "), _c('td', [_vm._v("可选")]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("picker-options")]), _vm._v(" "), _c('td', [_vm._v("Object")]), _vm._v(" "), _c('td', [_vm._v("无")]), _vm._v(" "), _c('td', [_vm._v("特殊选项，参考下表")]), _vm._v(" "), _c('td', [_vm._v("可选")]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("range-separator")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("选择范围时的分隔符")]), _vm._v(" "), _c('td', [_vm._v("可选")]), _vm._v(" "), _c('td')])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "markdown-table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("默认")]), _vm._v(" "), _c('th', [_vm._v("可选值")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("shortcuts")]), _vm._v(" "), _c('td', [_vm._v("object[]")]), _vm._v(" "), _c('td', [_vm._v("设置快捷选项，用法参考demo或下表")]), _vm._v(" "), _c('td', [_vm._v("无")]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("disabledDate")]), _vm._v(" "), _c('td', [_vm._v("Function")]), _vm._v(" "), _c('td', [_vm._v("设置禁用日期，参数为当前日期，要求返回Boolean")]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("firstDayOfWeek")]), _vm._v(" "), _c('td', [_vm._v("Number")]), _vm._v(" "), _c('td', [_vm._v("周起始日")]), _vm._v(" "), _c('td', [_vm._v("7")]), _vm._v(" "), _c('td', [_vm._v("1到7")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("dateLimit")]), _vm._v(" "), _c('td', [_vm._v("object")]), _vm._v(" "), _c('td', [_vm._v("最大可选范围")]), _vm._v(" "), _c('td', [_vm._v("无")]), _vm._v(" "), _c('td', [_vm._v("{year:number, month: number, day: number, hour:number, minute:number, second: number}")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "markdown-table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("默认")]), _vm._v(" "), _c('th', [_vm._v("可选值")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("text")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("标题文本")]), _vm._v(" "), _c('td', [_vm._v("无")]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("onClick")]), _vm._v(" "), _c('td', [_vm._v("Function")]), _vm._v(" "), _c('td', [_vm._v("选中后的回调参数，参数是vm, 可通过触发"), _c('code', [_vm._v("pick")]), _vm._v("事件设置选择器的值。例如"), _c('code', [_vm._v("vm.$emit('pick', new Date())")])]), _vm._v(" "), _c('td', [_vm._v("无")]), _vm._v(" "), _c('td')])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "markdown-table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("事件名")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("返回值")]), _vm._v(" "), _c('th', [_vm._v("设置属性")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("change")]), _vm._v(" "), _c('td', [_vm._v("文本框值改变时触发")]), _vm._v(" "), _c('td', [_vm._v("格式化后的值")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("@change")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("over-limit")]), _vm._v(" "), _c('td', [_vm._v("设置了"), _c('code', [_vm._v("pickeroption")]), _vm._v("的"), _c('code', [_vm._v("dateLimit")]), _vm._v("选项后，选择范围超过限定范围时触发")]), _vm._v(" "), _c('td', [_vm._v("startDate/* 用户选择的开始时间 */, endDate/* 用户选择的结束时间 */, limitEndDate /* 计算出的最大结束时间 */")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("@over-limit")])])])])])
}]}

/***/ })

});