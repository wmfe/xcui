webpackJsonp([21],{

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(428),
  /* template */
  __webpack_require__(429),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    data: function data() {
        return {
            modal1: false,
            modal2: false,
            isLoading: false,
            modal3: false,
            modal4: false,
            modal5: false,
            modal6: false,
            modal7: false,
            modal8: false,
            modal9: false,
            modal10: false
        };
    },

    methods: {
        exec: function exec() {
            var _this = this;

            this.isLoading = true;
            setTimeout(function () {
                _this.isLoading = false;
                _this.$Message.success('执行完成！');
                _this.modal2 = false;
            }, 2000);
        }
    }
};

/***/ }),

/***/ 429:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h1', [_vm._v("Modal 对话框")]), _vm._v(" "), _c('p', [_vm._v("需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。")]), _vm._v(" "), _c('h2', [_vm._v("基础使用")]), _vm._v(" "), _c('xcui-demo', [_c('div', {
    slot: "source"
  }, [_c('x-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.modal1 = true
      }
    }
  }, [_vm._v("点击展示弹窗")]), _vm._v(" "), _c('x-modal', {
    attrs: {
      "title": "基础弹窗"
    },
    model: {
      value: (_vm.modal1),
      callback: function($$v) {
        _vm.modal1 = $$v
      },
      expression: "modal1"
    }
  }, [_c('p', [_vm._v("展示一段信息")])])], 1), _vm._v(" "), _c('span', {
    slot: "info-title"
  }, [_vm._v("说明")]), _vm._v(" "), _c('div', {
    slot: "info"
  }, [_c('p', [_vm._v("基本使用，使用"), _c('code', [_vm._v("x-modal")]), _vm._v("组件包裹需要展示的内容，"), _c('code', [_vm._v("v-model")]), _vm._v("的绑定值用于控制显示隐藏。")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("\"")]), _vm._v("modal1 "), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _vm._v(" true"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("点击展示弹窗"), _c('span', {
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
  }, [_vm._v("<")]), _vm._v("x-modal")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("v-model")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("modal1"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("title")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("基础弹窗"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n      "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("p")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("展示一段信息"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("p")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v(" \n    "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-modal")]), _c('span', {
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
  }, [_vm._v("{")])]), _vm._v("\n                modal1"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token boolean"
  }, [_vm._v("false")]), _vm._v("\n            "), _c('span', {
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
  }, [_vm._v(">")])]), _vm._v("\n\n")])])]), _vm._v(" "), _c('h2', [_vm._v("定义元素的显示")]), _vm._v(" "), _c('xcui-demo', [_c('div', {
    slot: "source"
  }, [_c('x-button', {
    on: {
      "click": function($event) {
        _vm.modal2 = true
      }
    }
  }, [_vm._v("自定义页头和页脚")]), _vm._v(" "), _c('x-button', {
    on: {
      "click": function($event) {
        _vm.modal3 = true
      }
    }
  }, [_vm._v("不带标题栏")]), _vm._v(" "), _c('x-button', {
    on: {
      "click": function($event) {
        _vm.modal4 = true
      }
    }
  }, [_vm._v("不带页脚")]), _vm._v(" "), _c('x-modal', {
    model: {
      value: (_vm.modal2),
      callback: function($$v) {
        _vm.modal2 = $$v
      },
      expression: "modal2"
    }
  }, [_c('div', {
    staticStyle: {
      "text-align": "center",
      "font-size": "16px",
      "color": "#46c3c1"
    },
    slot: "header"
  }, [_c('x-icon', {
    attrs: {
      "name": "help-circled"
    }
  }), _vm._v(" "), _c('span', [_vm._v("确认要执行全部操作吗？")])], 1), _vm._v(" "), _c('p', [_vm._v("执行后会将任务下发给所有同学！")]), _vm._v(" "), _c('div', {
    staticStyle: {
      "text-align": "right"
    },
    slot: "footer"
  }, [_c('x-button', {
    attrs: {
      "type": "primary",
      "size": "large",
      "loading": _vm.isLoading
    },
    on: {
      "click": _vm.exec
    }
  }, [_vm._v("\n            " + _vm._s(_vm.isLoading ? '执行中...' : '确认执行'))])], 1)]), _vm._v(" "), _c('x-modal', {
    attrs: {
      "show-header": false
    },
    model: {
      value: (_vm.modal3),
      callback: function($$v) {
        _vm.modal3 = $$v
      },
      expression: "modal3"
    }
  }, [_c('div', [_vm._v("展示一段信息")])]), _vm._v(" "), _c('x-modal', {
    attrs: {
      "title": "不带页脚",
      "show-footer": false
    },
    model: {
      value: (_vm.modal4),
      callback: function($$v) {
        _vm.modal4 = $$v
      },
      expression: "modal4"
    }
  }, [_c('div', [_vm._v("展示一段信息")])])], 1), _vm._v(" "), _c('span', {
    slot: "info-title"
  }, [_vm._v("说明")]), _vm._v(" "), _c('div', {
    slot: "info"
  }, [_c('p', [_vm._v("通过使用"), _c('code', [_vm._v("header")]), _vm._v(", "), _c('code', [_vm._v("footer")]), _vm._v("插槽，"), _c('code', [_vm._v("show-header")]), _vm._v("、"), _c('code', [_vm._v("show-footer")]), _vm._v("等属性都可控制对话框的展示效果。")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("@click")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("modal2 "), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _vm._v(" true"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("自定义页头和页脚"), _c('span', {
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
  }, [_vm._v("@click")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("modal3 "), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _vm._v(" true"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("不带标题栏"), _c('span', {
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
  }, [_vm._v("@click")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("modal4 "), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _vm._v(" true"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("不带页脚"), _c('span', {
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
  }, [_vm._v("<")]), _vm._v("x-modal")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("v-model")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("modal2"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("div")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("slot")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("header"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
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
  }, [_vm._v("text-align")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v("center"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v(" "), _c('span', {
    staticClass: "token property"
  }, [_vm._v("font-size")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" 16px"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _c('span', {
    staticClass: "token property"
  }, [_vm._v("color")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" #46c3c1")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n            "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-icon")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("name")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("help-circled"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-icon")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n            "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("span")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("确认要执行全部操作吗？"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("span")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("div")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("p")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("执行后会将任务下发给所有同学！"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("p")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("   \n        "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("div")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("slot")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("footer"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
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
  }, [_vm._v("text-align")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v("right")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n            "), _c('span', {
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
  }, [_vm._v("\"")]), _vm._v("exec"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("size")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("large"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v(":loading")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("isLoading"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n            "), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")]), _vm._v("isLoading ? '执行中...' : '确认执行'"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")]), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-button")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("div")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-modal")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n\n    "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-modal")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("v-model")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("modal3"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v(":show-header")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("false"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("div")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("展示一段信息"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("div")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-modal")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n\n    "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-modal")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("v-model")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("modal4"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("title")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("不带页脚"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v(":show-footer")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("false"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("div")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("展示一段信息"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("div")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-modal")]), _c('span', {
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
  }, [_vm._v("{")])]), _vm._v("\n                modal2"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token boolean"
  }, [_vm._v("false")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v("\n                modal3"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token boolean"
  }, [_vm._v("false")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v("\n                modal4"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token boolean"
  }, [_vm._v("false")]), _vm._v("\n            "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v("\n        methods"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n            "), _c('span', {
    staticClass: "token function"
  }, [_vm._v("exec")]), _c('span', {
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
  }, [_vm._v(".")]), _vm._v("isLoading "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    staticClass: "token boolean"
  }, [_vm._v("true")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n                "), _c('span', {
    staticClass: "token function"
  }, [_vm._v("setTimeout")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
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
  }, [_vm._v(".")]), _vm._v("isLoading "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    staticClass: "token boolean"
  }, [_vm._v("false")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n                    "), _c('span', {
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
  }, [_vm._v("'执行完成！'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n                    "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("this")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _vm._v("modal2 "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    staticClass: "token boolean"
  }, [_vm._v("false")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n                "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    staticClass: "token number"
  }, [_vm._v("2000")]), _c('span', {
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
  }, [_vm._v(">")])]), _vm._v("\n\n")])])]), _vm._v(" "), _c('h2', [_vm._v("自定义位置")]), _vm._v(" "), _c('xcui-demo', [_c('div', {
    slot: "source"
  }, [_c('x-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.modal5 = true
      }
    }
  }, [_vm._v("垂直居中的对话框")]), _vm._v(" "), _c('x-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.modal6 = true
      }
    }
  }, [_vm._v("距离顶部20px的对话框")]), _vm._v(" "), _c('x-modal', {
    attrs: {
      "title": "垂直居中的对话框",
      "styles": {
        top: '50%',
        transform: 'translateY(-50%)'
      }
    },
    model: {
      value: (_vm.modal5),
      callback: function($$v) {
        _vm.modal5 = $$v
      },
      expression: "modal5"
    }
  }, [_c('div', [_vm._v("展示一段信息")])]), _vm._v(" "), _c('x-modal', {
    attrs: {
      "title": "距离顶部20px的对话框",
      "styles": {
        top: '20px'
      }
    },
    model: {
      value: (_vm.modal6),
      callback: function($$v) {
        _vm.modal6 = $$v
      },
      expression: "modal6"
    }
  }, [_c('div', [_vm._v("展示一段信息")])])], 1), _vm._v(" "), _c('span', {
    slot: "info-title"
  }, [_vm._v("说明")]), _vm._v(" "), _c('div', {
    slot: "info"
  }, [_c('p', [_vm._v("通过设置"), _c('code', [_vm._v("styles")]), _vm._v("属性可以设置更多样式，如对话框的位置等。")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("\"")]), _vm._v("modal5 "), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _vm._v(" true"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("垂直居中的对话框"), _c('span', {
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
  }, [_vm._v("\"")]), _vm._v("modal6 "), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _vm._v(" true"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("距离顶部20px的对话框"), _c('span', {
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
  }, [_vm._v("<")]), _vm._v("x-modal")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("v-model")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("modal5"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("title")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("垂直居中的对话框"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v(":styles")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")]), _vm._v("\n            top: "), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("'")]), _vm._v("50%"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("'")]), _vm._v(",\n            transform: "), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("'")]), _vm._v("translateY(-50%)"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("div")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("展示一段信息"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("div")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-modal")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-modal")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("v-model")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("modal6"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("title")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("距离顶部20px的对话框"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v(":styles")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")]), _vm._v("top: "), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("'")]), _vm._v("20px"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("div")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("展示一段信息"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("div")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-modal")]), _c('span', {
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
  }, [_vm._v("{")])]), _vm._v("\n                isLoading"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token boolean"
  }, [_vm._v("false")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v("\n                modal5"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token boolean"
  }, [_vm._v("false")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v("\n                modal6"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token boolean"
  }, [_vm._v("false")]), _vm._v("\n            "), _c('span', {
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
  }, [_vm._v(">")])]), _vm._v("\n\n")])])]), _vm._v(" "), _c('h2', [_vm._v("Props")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('h2', [_vm._v("Events")]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('h2', [_vm._v("Slot")]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('h2', [_vm._v("Modal 全局方法")]), _vm._v(" "), _vm._m(3), _vm._v(" "), _c('p', [_vm._v("完整引入XCUI：")]), _vm._v(" "), _vm._m(4), _vm._v(" "), _c('p', [_vm._v("做好以上准备工作后，即可在组件任何位置调用vm.$confirm等来隐式地创建一个对话框了。")])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "markdown-table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("名字")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("默认")]), _vm._v(" "), _c('th', [_vm._v("描述")]), _vm._v(" "), _c('th', [_vm._v("是否必选")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("v-model")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("false")]), _vm._v(" "), _c('td', [_vm._v("对话框是否显示")]), _vm._v(" "), _c('td', [_vm._v("必选")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("content")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("对话框的主体内容，如果使用了默认slot的方式，则content无效")]), _vm._v(" "), _c('td', [_vm._v("可选")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("title")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("对话框的标题，如果slot定义了header，则title无效")]), _vm._v(" "), _c('td', [_vm._v("可选")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("mask-closable")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("true")]), _vm._v(" "), _c('td', [_vm._v("是否允许点击遮罩层关闭对话框")]), _vm._v(" "), _c('td', [_vm._v("可选")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("scrollable")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("false")]), _vm._v(" "), _c('td', [_vm._v("打开Modal后，是否允许底页可滚动")]), _vm._v(" "), _c('td', [_vm._v("可选")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("show-close-button")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("true")]), _vm._v(" "), _c('td', [_vm._v("是否显示右上角的关闭按钮")]), _vm._v(" "), _c('td', [_vm._v("可选")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("show-ok-button")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("true")]), _vm._v(" "), _c('td', [_vm._v("是否显示确定按钮")]), _vm._v(" "), _c('td', [_vm._v("可选")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("show-cancel-button")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("true")]), _vm._v(" "), _c('td', [_vm._v("是否显示取消按钮")]), _vm._v(" "), _c('td', [_vm._v("可选")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("show-header")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("true")]), _vm._v(" "), _c('td', [_vm._v("是否显示整个标题栏")]), _vm._v(" "), _c('td', [_vm._v("可选")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("show-footer")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("true")]), _vm._v(" "), _c('td', [_vm._v("是否显示整个底边栏")]), _vm._v(" "), _c('td', [_vm._v("可选")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("ok-text")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("确定")]), _vm._v(" "), _c('td', [_vm._v("确定按钮的文字")]), _vm._v(" "), _c('td', [_vm._v("可选")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("cancel-text")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("取消")]), _vm._v(" "), _c('td', [_vm._v("取消按钮的文字")]), _vm._v(" "), _c('td', [_vm._v("可选")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("size")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("middle")]), _vm._v(" "), _c('td', [_vm._v("预设对话框浮层的宽度大小。可选值：small/middle/large/full")]), _vm._v(" "), _c('td', [_vm._v("可选")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("class-name")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("自定义样式类名")]), _vm._v(" "), _c('td', [_vm._v("可选")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("styles")]), _vm._v(" "), _c('td', [_vm._v("Object")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("设置.modal-wrapper的样式")]), _vm._v(" "), _c('td', [_vm._v("可选")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("content-style")]), _vm._v(" "), _c('td', [_vm._v("object")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("设置对话框内容主体的样式。该属性设置的是.Modal-body的样式")]), _vm._v(" "), _c('td', [_vm._v("可选")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "markdown-table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("名字")]), _vm._v(" "), _c('th', [_vm._v("描述")]), _vm._v(" "), _c('th', [_vm._v("是否必选")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("on-ok")]), _vm._v(" "), _c('td', [_vm._v("点击确定的回调函数。回调函数如果返回真值(true)，则不再关闭对话框；如果返回假值(false)或不返回，则默认执行on-ok后关闭对话框")]), _vm._v(" "), _c('td', [_vm._v("可选")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("on-cancel")]), _vm._v(" "), _c('td', [_vm._v("点击取消和右上角关闭的回调函数。回调函数如果返回真值(true)，则不再关闭对话框；如果返回假值(false)或不返回，则默认执行on-cancel后关闭对话框")]), _vm._v(" "), _c('td', [_vm._v("可选")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "markdown-table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("名字")]), _vm._v(" "), _c('th', [_vm._v("描述")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("header")]), _vm._v(" "), _c('td', [_vm._v("自定义页头")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("footer")]), _vm._v(" "), _c('td', [_vm._v("自定义页脚内容")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("close")]), _vm._v(" "), _c('td', [_vm._v("自定义右上角关闭按钮")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("对话框的主体内容")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("XCUI为Modal提供了便捷的调用方式。在Vue.prototype中添加了快捷的方法：$Modal.show,$Modal.close, $confirm和$alert。因此，在Vue实例代码中，可以使用this.$Modal等方法快捷地创建一个对话框。"), _c('br'), _vm._v("\n但需要在调用这些全局方法之前，先在项目中引入XCUI或xcuiInstall，并调用Vue.use安装。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', [_c('span', {
    staticClass: "token keyword"
  }, [_vm._v("import")]), _vm._v(" Vue "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("from")]), _vm._v(" "), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'vue'")]), _vm._v("\n"), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("import")]), _vm._v(" XCUI "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("from")]), _vm._v(" "), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'xcui'")]), _vm._v(" "), _c('span', {
    staticClass: "token comment",
    attrs: {
      "spellcheck": "true"
    }
  }, [_vm._v("// 全局引入")]), _vm._v("\nVue"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _c('span', {
    staticClass: "token function"
  }, [_vm._v("use")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _vm._v("XCUI"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _vm._v("\n")])
}]}

/***/ })

});