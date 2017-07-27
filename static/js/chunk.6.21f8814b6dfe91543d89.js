webpackJsonp([6],{

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(428)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(430),
  /* template */
  __webpack_require__(431),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(429);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(355)("7c6dbcf4", content, true);

/***/ }),

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(354)(false);
// imports


// module
exports.push([module.i, ".demo-input-number .x-input-number+.x-input-number{margin-left:15px}", ""]);

// exports


/***/ }),

/***/ 430:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    data: function data() {
        return {
            num1: 1,
            num2: 1,
            num3: 1,
            num4: 1,
            num5: 1,
            num6: 1
        };
    },

    methods: {
        handleChange: function handleChange(val, oldVal) {
            console.log("val: " + val);
            console.log("oldVal: " + oldVal);
        }
    }
};

/***/ }),

/***/ 431:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h1', [_vm._v("Input-number 数字输入框")]), _vm._v(" "), _c('p', [_vm._v("通过鼠标或键盘，输入范围内的数值。")]), _vm._v(" "), _c('h2', [_vm._v("基础用法")]), _vm._v(" "), _c('xcui-demo', [_c('div', {
    slot: "source"
  }, [_c('x-input-number', {
    attrs: {
      "min": 1,
      "max": 10
    },
    on: {
      "change": _vm.handleChange
    },
    model: {
      value: (_vm.num1),
      callback: function($$v) {
        _vm.num1 = $$v
      },
      expression: "num1"
    }
  })], 1), _vm._v(" "), _c('span', {
    slot: "info-title"
  }, [_vm._v("说明")]), _vm._v(" "), _c('div', {
    slot: "info"
  }, [_c('p', [_vm._v("通过在"), _c('code', [_vm._v("x-input-number")]), _vm._v("元素中设置"), _c('code', [_vm._v("v-model")]), _vm._v("属性绑定变量即可。绑定的变量值即为默认值。通过"), _c('code', [_vm._v("@change")]), _vm._v("事件可以监听值的变化。通过键盘的"), _c('code', [_vm._v("上下箭头键")]), _vm._v("也可改变输入框的值。")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("<")]), _vm._v("x-input-number")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("v-model")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("num1"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v(":min")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("1"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v(":max")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("10"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("@change")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("handleChange"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-input-number")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("template")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
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
  }, [_vm._v("{")])]), _vm._v("\n                num1"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token number"
  }, [_vm._v("1")]), _vm._v("\n            "), _c('span', {
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
  }, [_vm._v("handleChange")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _vm._v("val"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" oldVal"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n                console"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _c('span', {
    staticClass: "token function"
  }, [_vm._v("log")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token template-string"
  }, [_c('span', {
    staticClass: "token string"
  }, [_vm._v("`val: ")]), _c('span', {
    staticClass: "token interpolation"
  }, [_c('span', {
    staticClass: "token interpolation-punctuation punctuation"
  }, [_vm._v("$"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("val"), _c('span', {
    staticClass: "token interpolation-punctuation punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])])]), _c('span', {
    staticClass: "token string"
  }, [_vm._v("`")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n                console"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _c('span', {
    staticClass: "token function"
  }, [_vm._v("log")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token template-string"
  }, [_c('span', {
    staticClass: "token string"
  }, [_vm._v("`oldVal: ")]), _c('span', {
    staticClass: "token interpolation"
  }, [_c('span', {
    staticClass: "token interpolation-punctuation punctuation"
  }, [_vm._v("$"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("oldVal"), _c('span', {
    staticClass: "token interpolation-punctuation punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])])]), _c('span', {
    staticClass: "token string"
  }, [_vm._v("`")])]), _c('span', {
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
  }, [_vm._v(">")])]), _vm._v("\n\n")])])]), _vm._v(" "), _c('h2', [_vm._v("禁用状态")]), _vm._v(" "), _c('xcui-demo', [_c('div', {
    slot: "source"
  }, [_c('x-input-number', {
    attrs: {
      "min": 1,
      "max": 10,
      "disabled": true
    },
    model: {
      value: (_vm.num2),
      callback: function($$v) {
        _vm.num2 = $$v
      },
      expression: "num2"
    }
  })], 1), _vm._v(" "), _c('span', {
    slot: "info-title"
  }, [_vm._v("说明")]), _vm._v(" "), _c('div', {
    slot: "info"
  }, [_c('p', [_vm._v("设置"), _c('code', [_vm._v("disabled")]), _vm._v("属性可以将计数器设置为禁用。")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("<")]), _vm._v("x-input-number")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("v-model")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("num2"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v(":min")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("1"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v(":max")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("10"), _c('span', {
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
  }, [_vm._v(">")])]), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-input-number")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("template")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
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
  }, [_vm._v("{")])]), _vm._v("\n                num2"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token number"
  }, [_vm._v("1")]), _vm._v("\n            "), _c('span', {
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
  }, [_vm._v(">")])]), _vm._v("\n\n")])])]), _vm._v(" "), _c('h2', [_vm._v("步数")]), _vm._v(" "), _c('xcui-demo', [_c('div', {
    slot: "source"
  }, [_c('x-input-number', {
    attrs: {
      "step": 3
    },
    model: {
      value: (_vm.num3),
      callback: function($$v) {
        _vm.num3 = $$v
      },
      expression: "num3"
    }
  })], 1), _vm._v(" "), _c('span', {
    slot: "info-title"
  }, [_vm._v("说明")]), _vm._v(" "), _c('div', {
    slot: "info"
  }, [_c('p', [_vm._v("通过设置"), _c('code', [_vm._v("step")]), _vm._v("属性可以定义递增/递减的步数。"), _c('code', [_vm._v("step")]), _vm._v("可以设置为整数或小数。")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("<")]), _vm._v("x-input-number")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("v-model")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("num3"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v(":step")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("3"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-input-number")]), _c('span', {
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
  }, [_vm._v("{")])]), _vm._v("\n                num3"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token number"
  }, [_vm._v("1")]), _vm._v("\n            "), _c('span', {
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
  }, [_vm._v(">")])]), _vm._v("\n")])])]), _vm._v(" "), _c('h2', [_vm._v("尺寸")]), _vm._v(" "), _c('xcui-demo', [_c('div', {
    slot: "source"
  }, [_c('x-input-number', {
    attrs: {
      "size": "large"
    },
    model: {
      value: (_vm.num4),
      callback: function($$v) {
        _vm.num4 = $$v
      },
      expression: "num4"
    }
  }), _vm._v(" "), _c('x-input-number', {
    model: {
      value: (_vm.num5),
      callback: function($$v) {
        _vm.num5 = $$v
      },
      expression: "num5"
    }
  }), _vm._v(" "), _c('x-input-number', {
    attrs: {
      "size": "small"
    },
    model: {
      value: (_vm.num6),
      callback: function($$v) {
        _vm.num6 = $$v
      },
      expression: "num6"
    }
  })], 1), _vm._v(" "), _c('span', {
    slot: "info-title"
  }, [_vm._v("说明")]), _vm._v(" "), _c('div', {
    slot: "info"
  }, [_c('p', [_vm._v("额外提供了"), _c('code', [_vm._v("large")]), _vm._v(", "), _c('code', [_vm._v("small")]), _vm._v(" 两种尺寸的输入框，通过设置"), _c('code', [_vm._v("size")]), _vm._v("属性即可。")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("<")]), _vm._v("x-input-number")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("v-model")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("num4"), _c('span', {
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
  }, [_vm._v("</")]), _vm._v("x-input-number")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-input-number")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("v-model")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("num5"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-input-number")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-input-number")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("v-model")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("num6"), _c('span', {
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
  }, [_vm._v("</")]), _vm._v("x-input-number")]), _c('span', {
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
  }, [_vm._v("{")])]), _vm._v("\n                num4"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token number"
  }, [_vm._v("1")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v("\n                num5"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token number"
  }, [_vm._v("1")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v("\n                num6"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token number"
  }, [_vm._v("1")]), _vm._v("\n            "), _c('span', {
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
  }, [_vm._v(">")])]), _vm._v("\n\n")])])]), _vm._v(" "), _c('h2', [_vm._v("Props")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('h2', [_vm._v("Events")]), _vm._v(" "), _vm._m(1)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "markdown-table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("名字")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("默认")]), _vm._v(" "), _c('th', [_vm._v("描述")]), _vm._v(" "), _c('th', [_vm._v("是否必选")]), _vm._v(" "), _c('th', [_vm._v("可选值")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("value")]), _vm._v(" "), _c('td', [_vm._v("Number")]), _vm._v(" "), _c('td', [_vm._v("无")]), _vm._v(" "), _c('td', [_vm._v("和"), _c('code', [_vm._v("v-model")]), _vm._v("的绑定值")]), _vm._v(" "), _c('td', [_vm._v("必选，通过设置"), _c('code', [_vm._v("v-model")])]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("min")]), _vm._v(" "), _c('td', [_vm._v("Number")]), _vm._v(" "), _c('td', [_vm._v("0")]), _vm._v(" "), _c('td', [_vm._v("计数器最小值")]), _vm._v(" "), _c('td', [_vm._v("可选")]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("max")]), _vm._v(" "), _c('td', [_vm._v("Number")]), _vm._v(" "), _c('td', [_vm._v("Infinity")]), _vm._v(" "), _c('td', [_vm._v("计数器最大值")]), _vm._v(" "), _c('td', [_vm._v("可选")]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("step")]), _vm._v(" "), _c('td', [_vm._v("Number")]), _vm._v(" "), _c('td', [_vm._v("1")]), _vm._v(" "), _c('td', [_vm._v("增减步长")]), _vm._v(" "), _c('td', [_vm._v("可选")]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("disabled")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("false")]), _vm._v(" "), _c('td', [_vm._v("是否禁用")]), _vm._v(" "), _c('td', [_vm._v("可选")]), _vm._v(" "), _c('td', [_vm._v("true,false")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("size")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("无")]), _vm._v(" "), _c('td', [_vm._v("可选尺寸")]), _vm._v(" "), _c('td', [_vm._v("可选")]), _vm._v(" "), _c('td', [_vm._v("large,small")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "markdown-table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("事件名")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("返回值")]), _vm._v(" "), _c('th', [_vm._v("设置属性")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("change")]), _vm._v(" "), _c('td', [_vm._v("绑定值改变时触发")]), _vm._v(" "), _c('td', [_vm._v("(变更后的值，变更前的值)")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("@change")])])])])])
}]}

/***/ })

});