webpackJsonp([24],{

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(445),
  /* template */
  __webpack_require__(446),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 445:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    data: function data() {
        return {
            input: '',
            input1: '',
            input2: '',
            input3: '',
            model: '',
            options: [{
                value: 'http://'
            }, {
                value: 'https://'
            }]
        };
    }
};

/***/ }),

/***/ 446:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h1', [_vm._v("Input 输入框")]), _vm._v(" "), _c('p', [_vm._v("通过鼠标或键盘输入内容，是最基础的表单域的包装。")]), _vm._v(" "), _c('h2', [_vm._v("如何使用")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('h2', [_vm._v("基础用法")]), _vm._v(" "), _c('xcui-demo', [_c('div', {
    slot: "source"
  }, [_c('div', {
    staticStyle: {
      "width": "147px"
    }
  }, [_c('x-input', {
    attrs: {
      "placeholder": "请输入内容"
    },
    model: {
      value: (_vm.input),
      callback: function($$v) {
        _vm.input = $$v
      },
      expression: "input"
    }
  })], 1)]), _vm._v(" "), _c('span', {
    slot: "info-title"
  }, [_vm._v("说明")]), _vm._v(" "), _c('div', {
    slot: "info"
  }, [_c('p', [_vm._v("最基本的用法，使用"), _c('code', [_vm._v("<x-input>")]), _vm._v("标签即可创建一个输入框。使用"), _c('code', [_vm._v("v-model")]), _vm._v("赋值。默认的"), _c('code', [_vm._v("input")]), _vm._v("宽度是"), _c('code', [_vm._v("100%")]), _vm._v("。")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v(":")]), _vm._v("147px")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-input")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("placeholder")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("请输入内容"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("v-model")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("input"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-input")]), _c('span', {
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
  }, [_vm._v(">")])]), _vm._v("\n")])])]), _vm._v(" "), _c('h2', [_vm._v("三种尺寸")]), _vm._v(" "), _c('xcui-demo', [_c('div', {
    slot: "source"
  }, [_c('x-row', {
    attrs: {
      "gutter": "32"
    }
  }, [_c('x-col', {
    attrs: {
      "span": "4"
    }
  }, [_c('x-input', {
    attrs: {
      "placeholder": "Large Size",
      "size": "large"
    },
    model: {
      value: (_vm.input1),
      callback: function($$v) {
        _vm.input1 = $$v
      },
      expression: "input1"
    }
  })], 1), _vm._v(" "), _c('x-col', {
    attrs: {
      "span": "4"
    }
  }, [_c('x-input', {
    attrs: {
      "placeholder": "Default Size"
    },
    model: {
      value: (_vm.input2),
      callback: function($$v) {
        _vm.input2 = $$v
      },
      expression: "input2"
    }
  })], 1), _vm._v(" "), _c('x-col', {
    attrs: {
      "span": "4"
    }
  }, [_c('x-input', {
    attrs: {
      "placeholder": "Small Size",
      "size": "small"
    },
    model: {
      value: (_vm.input3),
      callback: function($$v) {
        _vm.input3 = $$v
      },
      expression: "input3"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('span', {
    slot: "info-title"
  }, [_vm._v("说明")]), _vm._v(" "), _c('div', {
    slot: "info"
  }, [_c('p', [_vm._v("输入框有三种尺寸："), _c('code', [_vm._v("large")]), _vm._v(", "), _c('code', [_vm._v("small")]), _vm._v(" 和默认大小。分别的高度为"), _c('code', [_vm._v("40px")]), _vm._v(", "), _c('code', [_vm._v("34px")]), _vm._v(", "), _c('code', [_vm._v("30px")]), _vm._v("。")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("<")]), _vm._v("x-row")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("gutter")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("32"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
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
  }, [_vm._v("\"")]), _vm._v("4"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n            "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-input")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("placeholder")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("Large Size"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("v-model")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("input1"), _c('span', {
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
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-input")]), _c('span', {
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
  }, [_vm._v("\"")]), _vm._v("4"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n            "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-input")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("placeholder")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("Default Size"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("v-model")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("input2"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-input")]), _c('span', {
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
  }, [_vm._v("\"")]), _vm._v("4"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n            "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-input")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("placeholder")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("Small Size"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("v-model")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("input3"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("size")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("small"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-input")]), _c('span', {
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
  }, [_vm._v(">")])]), _vm._v("\n")])])]), _vm._v(" "), _c('h2', [_vm._v("带icon的输入框")]), _vm._v(" "), _c('xcui-demo', [_c('div', {
    slot: "source"
  }, [_c('x-row', [_c('x-col', {
    attrs: {
      "span": "4"
    }
  }, [_c('x-input', {
    attrs: {
      "placeholder": "请输入进行搜索",
      "icon": "search"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('span', {
    slot: "info-title"
  }, [_vm._v("说明")]), _vm._v(" "), _c('div', {
    slot: "info"
  }, [_c('p', [_vm._v("通过设置"), _c('code', [_vm._v("icon")]), _vm._v("属性，可以在输入框右边增加相应图标。点击图标会触发"), _c('code', [_vm._v("click")]), _vm._v("事件。")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("\"")]), _vm._v("4"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n            "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-input")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("placeholder")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("请输入进行搜索"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("icon")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("search"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-input")]), _c('span', {
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
  }, [_vm._v(">")])]), _vm._v("\n")])])]), _vm._v(" "), _c('h2', [_vm._v("禁用状态")]), _vm._v(" "), _c('xcui-demo', [_c('div', {
    slot: "source"
  }, [_c('x-row', [_c('x-col', {
    attrs: {
      "span": "4"
    }
  }, [_c('x-input', {
    attrs: {
      "disabled": true,
      "placeholder": "请输入内容",
      "icon": "paper-airplane"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('span', {
    slot: "info-title"
  }, [_vm._v("说明")]), _vm._v(" "), _c('div', {
    slot: "info"
  }, [_c('p', [_vm._v("通过设置"), _c('code', [_vm._v("disabled")]), _vm._v("属性可以将输入框置为禁用状态。在禁用状态下点击图标，不会触发"), _c('code', [_vm._v("click")]), _vm._v("事件。")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("\"")]), _vm._v("4"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n            "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-input")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v(":disabled")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("true"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("placeholder")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("请输入内容"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("icon")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("paper-airplane"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-input")]), _c('span', {
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
  }, [_vm._v(">")])]), _vm._v("\n")])])]), _vm._v(" "), _c('h2', [_vm._v("复合型输入框")]), _vm._v(" "), _c('xcui-demo', [_c('div', {
    slot: "source"
  }, [_c('x-row', [_c('x-col', {
    attrs: {
      "span": "8"
    }
  }, [_c('x-input', {
    attrs: {
      "placeholder": "请输入网址"
    }
  }, [_c('span', {
    slot: "prepend"
  }, [_vm._v("http://")]), _vm._v(" "), _c('span', {
    slot: "append"
  }, [_vm._v(".com")])])], 1)], 1), _vm._v(" "), _c('x-row', {
    staticStyle: {
      "margin-top": "15px"
    }
  }, [_c('x-col', {
    attrs: {
      "span": "8"
    }
  }, [_c('x-input', {
    attrs: {
      "placeholder": "请输入网址"
    }
  }, [_c('span', {
    slot: "append"
  }, [_c('x-icon', {
    attrs: {
      "name": "share"
    }
  })], 1)])], 1)], 1), _vm._v(" "), _c('x-row', {
    staticStyle: {
      "margin-top": "15px"
    }
  }, [_c('x-col', {
    attrs: {
      "span": "8"
    }
  }, [_c('x-input', {
    attrs: {
      "placeholder": "请输入网址"
    }
  }, [_c('x-select', {
    staticStyle: {
      "width": "100px"
    },
    attrs: {
      "placeholder": "请选择"
    },
    slot: "prepend",
    model: {
      value: (_vm.model),
      callback: function($$v) {
        _vm.model = $$v
      },
      expression: "model"
    }
  }, _vm._l((_vm.options), function(item) {
    return _c('x-option', {
      key: item.key,
      attrs: {
        "value": item.value
      }
    })
  })), _vm._v(" "), _c('span', {
    slot: "append"
  }, [_c('x-icon', {
    attrs: {
      "name": "share"
    }
  })], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c('span', {
    slot: "info-title"
  }, [_vm._v("说明")]), _vm._v(" "), _c('div', {
    slot: "info"
  }, [_c('p', [_vm._v("通过在"), _c('code', [_vm._v("input")]), _vm._v("组件内部添加名为"), _c('code', [_vm._v("prepend")]), _vm._v("和"), _c('code', [_vm._v("append")]), _vm._v("的slot，可用于配置slot于配置一些特定组合的复合型输入框。")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("\"")]), _vm._v("8"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n            "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-input")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("placeholder")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("请输入网址"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n                "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("span")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("slot")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("prepend"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("http://"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("span")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n                "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("span")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("slot")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("append"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v(".com"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("span")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n            "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-input")]), _c('span', {
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
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-row")]), _c('span', {
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
  }, [_vm._v(":")]), _vm._v(" 15px")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
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
  }, [_vm._v("\"")]), _vm._v("8"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n            "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-input")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("placeholder")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("请输入网址"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n                "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("span")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("slot")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("append"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _c('span', {
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
  }, [_vm._v("\"")]), _vm._v("share"), _c('span', {
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
  }, [_vm._v(">")])]), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("span")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n            "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-input")]), _c('span', {
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
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-row")]), _c('span', {
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
  }, [_vm._v(":")]), _vm._v(" 15px")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
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
  }, [_vm._v("\"")]), _vm._v("8"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n            "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-input")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("placeholder")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("请输入网址"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n                "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-select")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("v-model")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("model"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("slot")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("prepend"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("placeholder")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("请选择"), _c('span', {
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
  }, [_vm._v("width")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" 100px"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n                    "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-option")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("v-for")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("item in options"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v(":key")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("item.key"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v(":value")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("item.value"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-option")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n                "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-select")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n                "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("span")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("slot")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("append"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _c('span', {
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
  }, [_vm._v("\"")]), _vm._v("share"), _c('span', {
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
  }, [_vm._v(">")])]), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("span")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n            "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-input")]), _c('span', {
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
  }, [_vm._v(">")])]), _vm._v("\n")])])]), _vm._v(" "), _c('h2', [_vm._v("Props")]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('h2', [_vm._v("Events")]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('h2', [_vm._v("Slot")]), _vm._v(" "), _vm._m(3)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', [_c('li', [_vm._v("需要用户输入表单域内容。")]), _vm._v(" "), _c('li', [_vm._v("提供组合型输入框和大小选择。")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "markdown-table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("名字")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("默认")]), _vm._v(" "), _c('th', [_vm._v("描述")]), _vm._v(" "), _c('th', [_vm._v("是否必选")]), _vm._v(" "), _c('th', [_vm._v("可选值")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("v-model")]), _vm._v(" "), _c('td', [_vm._v("String, Number")]), _vm._v(" "), _c('td', [_vm._v("无")]), _vm._v(" "), _c('td', [_vm._v("和"), _c('code', [_vm._v("v-model")]), _vm._v("的绑定值")]), _vm._v(" "), _c('td', [_vm._v("必选")]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("size")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("无")]), _vm._v(" "), _c('td', [_vm._v("输入框大小")]), _vm._v(" "), _c('td', [_vm._v("可选")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("large")]), _vm._v(", "), _c('code', [_vm._v("small")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("placeholder")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("无")]), _vm._v(" "), _c('td', [_vm._v("原生属性，输入框默认文本，用于提示")]), _vm._v(" "), _c('td', [_vm._v("可选")]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("type")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("无")]), _vm._v(" "), _c('td', [_vm._v("原生属性，输入框类型")]), _vm._v(" "), _c('td', [_vm._v("可选")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("text")]), _vm._v(", "), _c('code', [_vm._v("password")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("disabled")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("false")]), _vm._v(" "), _c('td', [_vm._v("是否禁用")]), _vm._v(" "), _c('td', [_vm._v("可选")]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("icon")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("无")]), _vm._v(" "), _c('td', [_vm._v("输入框右侧图标名称")]), _vm._v(" "), _c('td', [_vm._v("可选")]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("readonly")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("false")]), _vm._v(" "), _c('td', [_vm._v("原生属性，是否只读")]), _vm._v(" "), _c('td', [_vm._v("可选")]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("autofocus")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("false")]), _vm._v(" "), _c('td', [_vm._v("原生属性，自动获取焦点")]), _vm._v(" "), _c('td', [_vm._v("可选")]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("name")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("无")]), _vm._v(" "), _c('td', [_vm._v("原生属性")]), _vm._v(" "), _c('td', [_vm._v("可选")]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("form")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("无")]), _vm._v(" "), _c('td', [_vm._v("原生属性")]), _vm._v(" "), _c('td', [_vm._v("可选")]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("maxlength")]), _vm._v(" "), _c('td', [_vm._v("Number")]), _vm._v(" "), _c('td', [_vm._v("无")]), _vm._v(" "), _c('td', [_vm._v("原生属性")]), _vm._v(" "), _c('td', [_vm._v("可选")]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("minlength")]), _vm._v(" "), _c('td', [_vm._v("Number")]), _vm._v(" "), _c('td', [_vm._v("无")]), _vm._v(" "), _c('td', [_vm._v("原生属性")]), _vm._v(" "), _c('td', [_vm._v("可选")]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("iconClick")]), _vm._v(" "), _c('td', [_vm._v("Function")]), _vm._v(" "), _c('td', [_vm._v("无")]), _vm._v(" "), _c('td', [_vm._v("设置"), _c('code', [_vm._v("icon")]), _vm._v("属性后，点击图标时触发")]), _vm._v(" "), _c('td', [_vm._v("可选")]), _vm._v(" "), _c('td')])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "markdown-table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("事件名")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("返回值")]), _vm._v(" "), _c('th', [_vm._v("设置属性")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("click")]), _vm._v(" "), _c('td', [_vm._v("设置"), _c('code', [_vm._v("icon")]), _vm._v("属性后，点击图标时触发")]), _vm._v(" "), _c('td', [_vm._v("无")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("iconclick")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("enter")]), _vm._v(" "), _c('td', [_vm._v("按下回车键时触发")]), _vm._v(" "), _c('td', [_vm._v("无")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("@enter")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("input")]), _vm._v(" "), _c('td', [_vm._v("输入时触发")]), _vm._v(" "), _c('td', [_vm._v("无")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("@input")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("change")]), _vm._v(" "), _c('td', [_vm._v("数据改变时触发")]), _vm._v(" "), _c('td', [_vm._v("event")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("@change")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("focus")]), _vm._v(" "), _c('td', [_vm._v("输入框获得焦点时触发")]), _vm._v(" "), _c('td', [_vm._v("无")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("@focus")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("blur")]), _vm._v(" "), _c('td', [_vm._v("输入框失去焦点时触发")]), _vm._v(" "), _c('td', [_vm._v("无")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("@blur")])])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "markdown-table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("名称")]), _vm._v(" "), _c('th', [_vm._v("说明")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("prepend")]), _vm._v(" "), _c('td', [_vm._v("前置内容")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("append")]), _vm._v(" "), _c('td', [_vm._v("后置内容")])])])])
}]}

/***/ })

});