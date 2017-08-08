webpackJsonp([30],{

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(476),
  /* template */
  __webpack_require__(477),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 476:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    data: function data() {
        return {
            checked0: false,
            checked1: true,
            checked2: true,
            checked3: false,
            checklist: ['已完成', '已分配'],
            checkedRoles: ['销售'],
            indeterminate: true,
            checkAll: false,
            roleList: ['销售', '运营', '研发', '测试']
        };
    },

    methods: {
        handleCheckAll: function handleCheckAll(e) {
            this.checkedRoles = e.target.checked ? this.roleList : [];
        },
        handleCheckRole: function handleCheckRole(val) {
            var count = val.length;
            this.checkAll = count === this.roleList.length;
            this.indeterminate = count > 0 && count < this.roleList.length;
        }
    }
};

/***/ }),

/***/ 477:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h1', [_vm._v("Checkbox 多选框")]), _vm._v(" "), _c('h2', [_vm._v("概述")]), _vm._v(" "), _c('p', [_vm._v("在一组可选项中进行选择时使用。")]), _vm._v(" "), _c('h2', [_vm._v("基础用法")]), _vm._v(" "), _c('xcui-demo', [_c('div', {
    slot: "source"
  }, [_c('x-checkbox', {
    model: {
      value: (_vm.checked0),
      callback: function($$v) {
        _vm.checked0 = $$v
      },
      expression: "checked0"
    }
  }, [_vm._v("备选项")])], 1), _vm._v(" "), _c('span', {
    slot: "info-title"
  }, [_vm._v("说明")]), _vm._v(" "), _c('div', {
    slot: "info"
  }, [_c('p', [_vm._v("在"), _c('code', [_vm._v("x-checkbox")]), _vm._v("中使用"), _c('code', [_vm._v("v-model")]), _vm._v("绑定变量，默认绑定变量的值是"), _c('code', [_vm._v("Boolean")]), _vm._v(", 选中时为"), _c('code', [_vm._v("true")]), _vm._v("。")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("<")]), _vm._v("x-checkbox")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("v-model")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("checked0"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("备选项"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-checkbox")]), _c('span', {
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
  }, [_vm._v("{")])]), _vm._v("\n                checked0"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token boolean"
  }, [_vm._v("false")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v("\n            "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n        "), _c('span', {
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
  }, [_vm._v(">")])]), _vm._v("\n\n")])])]), _vm._v(" "), _c('h2', [_vm._v("禁用状态")]), _vm._v(" "), _c('xcui-demo', [_c('div', {
    slot: "source"
  }, [_c('x-checkbox', {
    attrs: {
      "disabled": true
    },
    model: {
      value: (_vm.checked2),
      callback: function($$v) {
        _vm.checked2 = $$v
      },
      expression: "checked2"
    }
  }, [_vm._v("备选项")]), _vm._v(" "), _c('x-checkbox', {
    attrs: {
      "disabled": true
    },
    model: {
      value: (_vm.checked3),
      callback: function($$v) {
        _vm.checked3 = $$v
      },
      expression: "checked3"
    }
  }, [_vm._v("备选项")])], 1), _vm._v(" "), _c('span', {
    slot: "info-title"
  }, [_vm._v("说明")]), _vm._v(" "), _c('div', {
    slot: "info"
  }, [_c('p', [_vm._v("通过使用"), _c('code', [_vm._v("disabled")]), _vm._v("属性可以设置多选框的禁用状态。")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("<")]), _vm._v("x-checkbox")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("v-model")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("checked2"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v(":disabled")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("true"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("备选项"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-checkbox")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-checkbox")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("v-model")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("checked3"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v(":disabled")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("true"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("备选项"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-checkbox")]), _c('span', {
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
  }, [_vm._v("{")])]), _vm._v("\n                checked2"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token boolean"
  }, [_vm._v("true")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v("\n                checked3"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token boolean"
  }, [_vm._v("false")]), _vm._v("\n            "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n        "), _c('span', {
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
  }, [_vm._v(">")])]), _vm._v("\n\n")])])]), _vm._v(" "), _c('h2', [_vm._v("多选框组")]), _vm._v(" "), _c('xcui-demo', [_c('div', {
    slot: "source"
  }, [_c('x-checkbox-group', {
    model: {
      value: (_vm.checklist),
      callback: function($$v) {
        _vm.checklist = $$v
      },
      expression: "checklist"
    }
  }, [_c('x-checkbox', {
    attrs: {
      "value": "未开始"
    }
  }, [_vm._v("未开始")]), _vm._v(" "), _c('x-checkbox', {
    attrs: {
      "value": "进行中"
    }
  }, [_vm._v("进行中")]), _vm._v(" "), _c('x-checkbox', {
    attrs: {
      "value": "已完成"
    }
  }, [_vm._v("已完成")]), _vm._v(" "), _c('x-checkbox', {
    attrs: {
      "value": "已分配",
      "disabled": true
    }
  }, [_vm._v("已分配")]), _vm._v(" "), _c('x-checkbox', {
    attrs: {
      "value": "已废弃",
      "disabled": true
    }
  }, [_vm._v("已废弃")])], 1), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-top": "15px"
    }
  }, [_vm._v("\n        选中的值数组： " + _vm._s(_vm.checklist) + "\n    ")])], 1), _vm._v(" "), _c('span', {
    slot: "info-title"
  }, [_vm._v("说明")]), _vm._v(" "), _c('div', {
    slot: "info"
  }, [_c('p', [_vm._v("通过将"), _c('code', [_vm._v("x-checkbox")]), _vm._v("作为"), _c('code', [_vm._v("x-checkbox-group")]), _vm._v("的直接子元素，可以建立组合的多选框。")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("<")]), _vm._v("x-checkbox-group")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("v-model")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("checklist"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-checkbox")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("value")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("未开始"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("未开始"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-checkbox")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-checkbox")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("value")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("进行中"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("进行中"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-checkbox")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-checkbox")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("value")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("已完成"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("已完成"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-checkbox")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-checkbox")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("value")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("已分配"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v(":disabled")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("true"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("已分配"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-checkbox")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-checkbox")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("value")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("已废弃"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v(":disabled")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("true"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("已废弃"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-checkbox")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-checkbox-group")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("p")]), _c('span', {
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
  }, [_vm._v("margin-top")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" 15px"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n        选中的值数组： "), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")]), _vm._v("checklist"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")]), _vm._v("\n    "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("p")]), _c('span', {
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
  }, [_vm._v("{")])]), _vm._v("\n                checklist"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("[")]), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'已完成'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'已分配'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("]")]), _vm._v("\n            "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n        "), _c('span', {
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
  }, [_vm._v(">")])]), _vm._v("\n\n")])])]), _vm._v(" "), _c('h2', [_vm._v("全选和部分选中")]), _vm._v(" "), _c('xcui-demo', [_c('div', {
    slot: "source"
  }, [_c('x-checkbox', {
    attrs: {
      "indeterminate": _vm.indeterminate
    },
    on: {
      "change": _vm.handleCheckAll
    },
    model: {
      value: (_vm.checkAll),
      callback: function($$v) {
        _vm.checkAll = $$v
      },
      expression: "checkAll"
    }
  }, [_vm._v("全选")]), _vm._v(" "), _c('x-checkbox-group', {
    staticStyle: {
      "display": "inline-block",
      "margin-left": "15px"
    },
    on: {
      "change": _vm.handleCheckRole
    },
    model: {
      value: (_vm.checkedRoles),
      callback: function($$v) {
        _vm.checkedRoles = $$v
      },
      expression: "checkedRoles"
    }
  }, [_c('x-checkbox', {
    attrs: {
      "value": "销售"
    }
  }, [_vm._v("销售")]), _vm._v(" "), _c('x-checkbox', {
    attrs: {
      "value": "运营"
    }
  }, [_vm._v("运营")]), _vm._v(" "), _c('x-checkbox', {
    attrs: {
      "value": "研发"
    }
  }, [_vm._v("研发")]), _vm._v(" "), _c('x-checkbox', {
    attrs: {
      "value": "测试"
    }
  }, [_vm._v("测试")])], 1)], 1), _vm._v(" "), _c('span', {
    slot: "info-title"
  }, [_vm._v("说明")]), _vm._v(" "), _c('div', {
    slot: "info"
  }, [_c('p', [_c('code', [_vm._v("indeterminate")]), _vm._v("属性表示多选框的不确定状态，常用于实现部分选中功能。本例实现了全选和部分选中功能。")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("<")]), _vm._v("x-checkbox")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v(":indeterminate")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("indeterminate"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("v-model")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("checkAll"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("@change")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("handleCheckAll"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("全选"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-checkbox")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-checkbox-group")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("v-model")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("checkedRoles"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("@change")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("handleCheckRole"), _c('span', {
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
  }, [_vm._v("display")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v("inline-block"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v(" "), _c('span', {
    staticClass: "token property"
  }, [_vm._v("margin-left")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" 15px"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-checkbox")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("value")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("销售"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("销售"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-checkbox")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-checkbox")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("value")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("运营"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("运营"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-checkbox")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-checkbox")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("value")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("研发"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("研发"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-checkbox")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-checkbox")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("value")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("测试"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("测试"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-checkbox")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-checkbox-group")]), _c('span', {
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
  }, [_vm._v("{")])]), _vm._v("\n                checkedRoles"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("[")]), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'销售'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("]")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v("\n                indeterminate"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token boolean"
  }, [_vm._v("true")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v("\n                checkAll"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token boolean"
  }, [_vm._v("false")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v("\n                roleList"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("[")]), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'销售'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'运营'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'研发'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'测试'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("]")]), _vm._v("\n            "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n        "), _c('span', {
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
  }, [_vm._v("handleCheckAll")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _vm._v("e"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n                "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("this")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _vm._v("checkedRoles "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("=")]), _vm._v(" e"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _vm._v("target"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _vm._v("checked "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("?")]), _vm._v(" "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("this")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _vm._v("roleList "), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("[")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("]")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n            "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v("\n            "), _c('span', {
    staticClass: "token function"
  }, [_vm._v("handleCheckRole")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _vm._v("val"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n                "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("let")]), _vm._v(" count "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("=")]), _vm._v(" val"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _vm._v("length"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n                "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("this")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _vm._v("checkAll "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("=")]), _vm._v(" count "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("===")]), _vm._v(" "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("this")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _vm._v("roleList"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _vm._v("length"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n                "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("this")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _vm._v("indeterminate "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("=")]), _vm._v(" count "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v(">")]), _vm._v(" "), _c('span', {
    staticClass: "token number"
  }, [_vm._v("0")]), _vm._v(" "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("&&")]), _vm._v(" count "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("<")]), _vm._v(" "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("this")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _vm._v("roleList"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _vm._v("length"), _c('span', {
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
  }, [_vm._v(">")])]), _vm._v("\n\n")])])]), _vm._v(" "), _c('h2', [_vm._v("Checkbox Props")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('h2', [_vm._v("Checkbox Events")]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('h2', [_vm._v("Checkbox Slot")]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('h2', [_vm._v("CheckboxGroup Props")]), _vm._v(" "), _vm._m(3), _vm._v(" "), _c('h2', [_vm._v("CheckboxGroup Events")]), _vm._v(" "), _vm._m(4)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "markdown-table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("名字")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("默认")]), _vm._v(" "), _c('th', [_vm._v("描述")]), _vm._v(" "), _c('th', [_vm._v("是否必选")]), _vm._v(" "), _c('th', [_vm._v("可选值")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("v-model")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', [_vm._v("绑定值")]), _vm._v(" "), _c('td', [_vm._v("单选框时必选")]), _vm._v(" "), _c('td', [_vm._v("true,false")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("value")]), _vm._v(" "), _c('td', [_vm._v("String, Number, Boolean")]), _vm._v(" "), _c('td', [_vm._v("无")]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', [_vm._v("仅在使用多选框组合时起作用，此场景下必填，指定当前选项的"), _c('code', [_vm._v("value")]), _vm._v("值，会自动判断是否选中")]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("disabled")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("false")]), _vm._v(" "), _c('td', [_vm._v("禁用状态")]), _vm._v(" "), _c('td', [_vm._v("可选")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("true")]), _vm._v(", "), _c('code', [_vm._v("false")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("interminate")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("false")]), _vm._v(" "), _c('td', [_vm._v("不确定状态")]), _vm._v(" "), _c('td', [_vm._v("可选")]), _vm._v(" "), _c('td')])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "markdown-table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("事件名")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("返回值")]), _vm._v(" "), _c('th', [_vm._v("设置属性")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("change")]), _vm._v(" "), _c('td', [_vm._v("多选框值改变时触发")]), _vm._v(" "), _c('td', [_vm._v("当前事件"), _c('code', [_vm._v("event")])]), _vm._v(" "), _c('td', [_c('code', [_vm._v("@change")])])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "markdown-table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("名称")]), _vm._v(" "), _c('th', [_vm._v("说明")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("default")]), _vm._v(" "), _c('td', [_vm._v("默认内容，放在"), _c('code', [_vm._v("<x-checkbox></x-checkbox>")]), _vm._v("之间即可")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "markdown-table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("名字")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("默认")]), _vm._v(" "), _c('th', [_vm._v("描述")]), _vm._v(" "), _c('th', [_vm._v("是否必选")]), _vm._v(" "), _c('th', [_vm._v("可选值")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("v-model")]), _vm._v(" "), _c('td', [_vm._v("Array")]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', [_vm._v("绑定值")]), _vm._v(" "), _c('td', [_vm._v("必选")]), _vm._v(" "), _c('td')])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "markdown-table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("事件名")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("返回值")]), _vm._v(" "), _c('th', [_vm._v("设置属性")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("change")]), _vm._v(" "), _c('td', [_vm._v("多选框值改变时触发")]), _vm._v(" "), _c('td', [_vm._v("当前事件"), _c('code', [_vm._v("event")])]), _vm._v(" "), _c('td', [_c('code', [_vm._v("@change")])])])])])
}]}

/***/ })

});