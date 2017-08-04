webpackJsonp([22],{

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(424),
  /* template */
  __webpack_require__(425),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    data: function data() {
        return {
            count1: 1,
            count2: 2,
            count3: 3,
            count4: 4
        };
    },

    methods: {
        info: function info() {
            this.$Message.info('这是一条普通提示');
        },
        success: function success() {
            this.$Message.success('这是一条成功提示');
        },
        warning: function warning() {
            this.$Message.warning('这是一条警告提示');
        },
        error: function error() {
            this.$Message.error('这是一条错误提示');
        },
        delay: function delay() {
            this.$Message.info('这是一条10秒后关闭的提示', 10000);
        },
        callback: function callback() {
            var _this = this;

            this.$Message.warning('此条信息关闭后会显示一条普通信息', 3000, function () {
                _this.$Message.info('信息关闭了');
            });
        }
    },
    mounted: function mounted() {}
};

/***/ }),

/***/ 425:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h1', [_vm._v("Message信息提示")]), _vm._v(" "), _c('p', [_vm._v("Message提供一种不打断用户操作的轻量级提示方式，顶部居中显示并自动消失。常用于主动操作后的信息提示。")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("XCUI为"), _c('code', [_vm._v("Vue.prototype")]), _vm._v("添加了全局方法"), _c('code', [_vm._v("$Message")]), _vm._v(", 如果您完整引入了XCUI， 可以直接使用如"), _c('code', [_vm._v("this.$Message.info('message')")]), _vm._v("的方式进行信息提示操作。"), _c('br'), _vm._v("\n当然，您也可以使用"), _c('code', [_vm._v("import Message from 'xcui/lib/message'")]), _vm._v(" 的单组件方式调用。"), _c('br'), _vm._v("\nMessage在XCUI中被注册为一个"), _c('a', {
    attrs: {
      "href": "https://vuejs.org/v2/guide/plugins.html"
    }
  }, [_vm._v("Vue 插件")]), _vm._v(", 在"), _c('strong', [_vm._v("单文件引入")]), _vm._v("时，请使用"), _c('code', [_vm._v("Vue.use(Message)")]), _vm._v(" 挂载，再进行使用。")])]), _vm._v(" "), _c('h2', [_vm._v("基本使用")]), _vm._v(" "), _c('xcui-demo', [_c('div', {
    slot: "source"
  }, [_c('x-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.info
    }
  }, [_vm._v("显示普通提示")])], 1), _vm._v(" "), _c('span', {
    slot: "info-title"
  }, [_vm._v("说明")]), _vm._v(" "), _c('div', {
    slot: "info"
  }, [_c('p', [_vm._v("基本提示，展示信息3s后消失。")])]), _vm._v(" "), _c('div', {
    slot: "highlight"
  }, [_c('pre', [_vm._v("\n"), _c('span', {
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
  }, [_vm._v("<")]), _vm._v("x-button")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("type")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("primary"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("@click")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("info"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("显示普通提示"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-button")]), _c('span', {
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
  }, [_vm._v("{")])]), _vm._v("\n        methods"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n            "), _c('span', {
    staticClass: "token function"
  }, [_vm._v("info")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
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
  }, [_vm._v("info")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'这是一条普通提示'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n            "), _c('span', {
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
  }, [_vm._v("}")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n")]), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("script")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n\n")])])]), _vm._v(" "), _c('h2', [_vm._v("提示类型")]), _vm._v(" "), _c('xcui-demo', [_c('div', {
    slot: "source"
  }, [_c('x-button', {
    attrs: {
      "type": "success"
    },
    on: {
      "click": _vm.success
    }
  }, [_vm._v("显示成功提示")]), _vm._v(" "), _c('x-button', {
    attrs: {
      "type": "warning"
    },
    on: {
      "click": _vm.warning
    }
  }, [_vm._v("显示警告提示")]), _vm._v(" "), _c('x-button', {
    attrs: {
      "type": "danger"
    },
    on: {
      "click": _vm.error
    }
  }, [_vm._v("显示错误提示")])], 1), _vm._v(" "), _c('span', {
    slot: "info-title"
  }, [_vm._v("说明")]), _vm._v(" "), _c('div', {
    slot: "info"
  }, [_c('p', [_vm._v("支持四种方法："), _c('code', [_vm._v("info(信息提示)")]), _vm._v("， "), _c('code', [_vm._v("success(成功提示)")]), _vm._v("， "), _c('code', [_vm._v("warning(警告提示)")]), _vm._v("，"), _c('code', [_vm._v("error（错误提示）")]), _vm._v("。")])]), _vm._v(" "), _c('div', {
    slot: "highlight"
  }, [_c('pre', [_vm._v("\n"), _c('span', {
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
  }, [_vm._v("<")]), _vm._v("x-button")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("type")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("success"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("@click")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("success"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("显示成功提示"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-button")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-button")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("type")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("warning"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("@click")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("warning"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("显示警告提示"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-button")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-button")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("type")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("danger"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("@click")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("error"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("显示错误提示"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-button")]), _c('span', {
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
  }, [_vm._v("{")])]), _vm._v("\n        methods"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n            "), _c('span', {
    staticClass: "token function"
  }, [_vm._v("success")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
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
  }, [_vm._v("success")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'这是一条成功提示'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n            "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v("\n            "), _c('span', {
    staticClass: "token function"
  }, [_vm._v("warning")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
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
  }, [_vm._v("'这是一条警告提示'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n            "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v("\n            "), _c('span', {
    staticClass: "token function"
  }, [_vm._v("error")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
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
  }, [_vm._v("error")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'这是一条错误提示'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n            "), _c('span', {
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
  }, [_vm._v(">")])]), _vm._v("\n\n")])])]), _vm._v(" "), _c('h2', [_vm._v("自定义时长")]), _vm._v(" "), _c('xcui-demo', [_c('div', {
    slot: "source"
  }, [_c('x-button', {
    attrs: {
      "type": "info"
    },
    on: {
      "click": _vm.delay
    }
  }, [_vm._v("显示10s的提示")])], 1), _vm._v(" "), _c('span', {
    slot: "info-title"
  }, [_vm._v("说明")]), _vm._v(" "), _c('div', {
    slot: "info"
  }, [_c('p', [_vm._v("显示一个10秒的提示。也可以在"), _c('code', [_vm._v("Message.config()")]), _vm._v("中全局配置，详见API。")])]), _vm._v(" "), _c('div', {
    slot: "highlight"
  }, [_c('pre', [_vm._v("\n"), _c('span', {
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
  }, [_vm._v("<")]), _vm._v("x-button")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("type")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("info"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("@click")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("delay"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("显示10s的提示"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-button")]), _c('span', {
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
  }, [_vm._v("{")])]), _vm._v("\n        methods"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n            "), _c('span', {
    staticClass: "token function"
  }, [_vm._v("delay")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
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
  }, [_vm._v("info")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'这是一条10秒后关闭的提示'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    staticClass: "token number"
  }, [_vm._v("10000")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n            "), _c('span', {
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
  }, [_vm._v(">")])]), _vm._v("\n\n")])])]), _vm._v(" "), _c('h2', [_vm._v("关闭时的回调函数")]), _vm._v(" "), _c('xcui-demo', [_c('div', {
    slot: "source"
  }, [_c('x-button', {
    attrs: {
      "type": "info"
    },
    on: {
      "click": _vm.callback
    }
  }, [_vm._v("关闭时显示信息")])], 1), _vm._v(" "), _c('span', {
    slot: "info-title"
  }, [_vm._v("说明")]), _vm._v(" "), _c('div', {
    slot: "info"
  }, [_c('p', [_vm._v("使用关闭时的回调函数。")])]), _vm._v(" "), _c('div', {
    slot: "highlight"
  }, [_c('pre', [_vm._v("\n"), _c('span', {
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
  }, [_vm._v("<")]), _vm._v("x-button")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("type")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("info"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("@click")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("callback"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("关闭时显示信息"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-button")]), _c('span', {
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
  }, [_vm._v("{")])]), _vm._v("\n        methods"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n            "), _c('span', {
    staticClass: "token function"
  }, [_vm._v("callback")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
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
  }, [_vm._v("'此条信息关闭后会显示一条普通信息'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    staticClass: "token number"
  }, [_vm._v("3000")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token operator"
  }, [_vm._v(">")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n                    "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("this")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _vm._v("$Message"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _c('span', {
    staticClass: "token function"
  }, [_vm._v("info")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'信息关闭了'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n                "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n            "), _c('span', {
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
  }, [_vm._v(">")])]), _vm._v("\n\n")])])]), _vm._v(" "), _c('h2', [_vm._v("使用提示")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('h2', [_vm._v("API")]), _vm._v(" "), _c('p', [_vm._v("通过以下方法来使用：")]), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _c('h2', [_vm._v("全局配置")]), _vm._v(" "), _vm._m(4), _vm._v(" "), _vm._m(5), _vm._v(" "), _vm._m(6), _vm._v(" "), _vm._m(7)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h3', [_vm._v("单组件使用时，请遵循以下的方式注册"), _c('code', [_vm._v("Message")]), _vm._v("插件。如果已经全局使用"), _c('code', [_vm._v("Vue.use(xcui)")]), _vm._v(", 则无需再次注册。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', [_c('span', {
    staticClass: "token keyword"
  }, [_vm._v("import")]), _vm._v(" Vue "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("from")]), _vm._v(" "), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'vue'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n\n"), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("import")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v(" Message "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _vm._v(" "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("from")]), _vm._v(" "), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'xcui/lib/message'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n\nVue"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _c('span', {
    staticClass: "token function"
  }, [_vm._v("use")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _vm._v("Message"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', [_c('span', {
    staticClass: "token comment",
    attrs: {
      "spellcheck": "true"
    }
  }, [_vm._v("// 普通提示")]), _vm._v("\n"), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("this")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _vm._v("$Message"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _c('span', {
    staticClass: "token function"
  }, [_vm._v("info")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _vm._v("content"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" duration"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" onClose"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n\n"), _c('span', {
    staticClass: "token comment",
    attrs: {
      "spellcheck": "true"
    }
  }, [_vm._v("// 成功提示")]), _vm._v("\n"), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("this")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _vm._v("$Message"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _c('span', {
    staticClass: "token function"
  }, [_vm._v("success")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _vm._v("content"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" duration"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" onClose"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n\n"), _c('span', {
    staticClass: "token comment",
    attrs: {
      "spellcheck": "true"
    }
  }, [_vm._v("// 警告提示")]), _vm._v("\n"), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("this")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _vm._v("$Message"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _c('span', {
    staticClass: "token function"
  }, [_vm._v("warning")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _vm._v("content"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" duration"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" onClose"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n\n"), _c('span', {
    staticClass: "token comment",
    attrs: {
      "spellcheck": "true"
    }
  }, [_vm._v("// 错误提示")]), _vm._v("\n"), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("this")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _vm._v("$Message"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _c('span', {
    staticClass: "token function"
  }, [_vm._v("error")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _vm._v("content"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" duration"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" onClose"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "markdown-table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("默认")]), _vm._v(" "), _c('th', [_vm._v("描述")]), _vm._v(" "), _c('th', [_vm._v("是否必选")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("content")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("无")]), _vm._v(" "), _c('td', [_vm._v("提示信息内容")]), _vm._v(" "), _c('td', [_vm._v("必选")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("duration")]), _vm._v(" "), _c('td', [_vm._v("Number")]), _vm._v(" "), _c('td', [_vm._v("3000")]), _vm._v(" "), _c('td', [_vm._v("自动关闭延时，单位: 毫秒, 默认3000毫秒后自动关闭。设置0则不会自动关闭")]), _vm._v(" "), _c('td', [_vm._v("可选")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("onClose")]), _vm._v(" "), _c('td', [_vm._v("Function")]), _vm._v(" "), _c('td', [_vm._v("无")]), _vm._v(" "), _c('td', [_vm._v("关闭后的回调函数")]), _vm._v(" "), _c('td', [_vm._v("可选")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("可使用"), _c('code', [_vm._v("Message.config(options)")]), _vm._v("来进行全局设置，例如，设置所有的提示都在1s内关闭。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("使用"), _c('code', [_vm._v("Message.destroy()")]), _vm._v(" 可全局销毁"), _c('code', [_vm._v("Message")]), _vm._v("实例。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', [_c('span', {
    staticClass: "token comment",
    attrs: {
      "spellcheck": "true"
    }
  }, [_vm._v("// 全局的提示信息距离顶部50px, 1s后关闭")]), _vm._v("\n\n"), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("this")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _vm._v("$Message"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _c('span', {
    staticClass: "token function"
  }, [_vm._v("config")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n    top"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token number"
  }, [_vm._v("50")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v("\n    duration"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token number"
  }, [_vm._v("1000")]), _vm._v("\n"), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _vm._v("\n\n"), _c('span', {
    staticClass: "token comment",
    attrs: {
      "spellcheck": "true"
    }
  }, [_vm._v("// 销毁`Message`实例")]), _vm._v("\n\n"), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("this")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _vm._v("$Message"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _c('span', {
    staticClass: "token function"
  }, [_vm._v("destroy")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n\n")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "markdown-table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("默认")]), _vm._v(" "), _c('th', [_vm._v("描述")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("top")]), _vm._v(" "), _c('td', [_vm._v("Number")]), _vm._v(" "), _c('td', [_vm._v("24")]), _vm._v(" "), _c('td', [_vm._v("提示信息距离页面顶端的距离，单位为像素")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("duration")]), _vm._v(" "), _c('td', [_vm._v("Number")]), _vm._v(" "), _c('td', [_vm._v("3000")]), _vm._v(" "), _c('td', [_vm._v("自动关闭延时，单位: 毫秒, 默认3000毫秒后自动关闭。设置0则不会自动关闭")])])])])
}]}

/***/ })

});