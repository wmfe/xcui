webpackJsonp([21],{

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(477),
  /* template */
  __webpack_require__(478),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 477:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    methods: {
        start: function start() {
            this.$PageLoading.start();
        },
        done: function done() {
            this.$PageLoading.done();
        },
        error: function error() {
            this.$PageLoading.error();
        }
    }
};

/***/ }),

/***/ 478:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h1', [_vm._v("PageLoading 页面加载进度条")]), _vm._v(" "), _c('p', [_vm._v("路由页面切换、页面加载资源时提供顶部加载进度条。")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('h2', [_vm._v("DEMO")]), _vm._v(" "), _c('xcui-demo', [_c('div', {
    slot: "source"
  }, [_c('x-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.start
    }
  }, [_vm._v("start")]), _vm._v(" "), _c('x-button', {
    attrs: {
      "type": "info"
    },
    on: {
      "click": _vm.done
    }
  }, [_vm._v("done")]), _vm._v(" "), _c('x-button', {
    attrs: {
      "type": "danger"
    },
    on: {
      "click": _vm.error
    }
  }, [_vm._v("error")])], 1), _vm._v(" "), _c('span', {
    slot: "info-title"
  }, [_vm._v("说明")]), _vm._v(" "), _c('div', {
    slot: "info"
  }, [_c('p', [_vm._v("基本使用，通过调用"), _c('code', [_vm._v(".start()")]), _vm._v("、"), _c('code', [_vm._v(".done()")]), _vm._v("、"), _c('code', [_vm._v(".error()")]), _vm._v(" 方法，实现开始，完成，错误三种操作。")])]), _vm._v(" "), _c('div', {
    slot: "highlight"
  }, [_c('pre', [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("template")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
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
  }, [_vm._v("\"")]), _vm._v("start"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("start"), _c('span', {
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
  }, [_vm._v("\"")]), _vm._v("done"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("done"), _c('span', {
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
  }, [_vm._v(">")])]), _vm._v("error"), _c('span', {
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
  }, [_vm._v(">")])]), _vm._v("\n\n")])])]), _vm._v(" "), _c('h2', [_vm._v("路由中的应用示例")]), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _vm._m(4), _vm._v(" "), _c('h2', [_vm._v("API")]), _vm._v(" "), _vm._m(5), _vm._v(" "), _c('h2', [_vm._v("Config Options")]), _vm._v(" "), _vm._m(6)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('blockquote', [_c('p', [_vm._v("XCUI为"), _c('code', [_vm._v("Vue.prototype")]), _vm._v("添加了全局方法"), _c('code', [_vm._v("$PageLoading")]), _vm._v(", 如果您完整引入了XCUI， 可以直接使用如"), _c('code', [_vm._v("this.$PageLoading.start()")]), _vm._v("的方式进行页面加载操作。"), _c('br'), _vm._v("\n当然，您也可以使用"), _c('code', [_vm._v("import PageLoading from 'xcui/lib/pageloading'")]), _vm._v(" 的单组件方式调用。"), _c('br'), _vm._v("\nPageloading在XCUI中被注册为一个"), _c('a', {
    attrs: {
      "href": "https://vuejs.org/v2/guide/plugins.html"
    }
  }, [_vm._v("Vue 插件")]), _vm._v(", 在"), _c('strong', [_vm._v("单文件引入")]), _vm._v("时，请使用"), _c('code', [_vm._v("Vue.use(PageLoading)")]), _vm._v(" 挂载，再进行使用。")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("在应用入口点处使用路由钩子来应用"), _c('code', [_vm._v("pageloading")]), _vm._v("效果：下面例子中使用了"), _c('a', {
    attrs: {
      "href": "https://vuejs.org/v2/guide/components.html#Async-Components"
    }
  }, [_vm._v("async-components")]), _vm._v("。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', [_c('span', {
    staticClass: "token comment",
    attrs: {
      "spellcheck": "true"
    }
  }, [_vm._v("// main.js")]), _vm._v("\n"), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("import")]), _vm._v(" Vue "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("from")]), _vm._v(" "), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'vue'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n"), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("import")]), _vm._v(" VueRouter "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("from")]), _vm._v(" "), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'vue-router'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n"), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("import")]), _vm._v(" xcui "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("from")]), _vm._v(" "), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'xcui'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n"), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("import")]), _vm._v(" App "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("from")]), _vm._v(" "), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'./App'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n\nVue"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _c('span', {
    staticClass: "token function"
  }, [_vm._v("use")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _vm._v("xcui"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\nVue"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _c('span', {
    staticClass: "token function"
  }, [_vm._v("use")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _vm._v("VueRouter"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n"), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("new")]), _vm._v(" "), _c('span', {
    staticClass: "token class-name"
  }, [_vm._v("Vue")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _vm._v("App"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _c('span', {
    staticClass: "token function"
  }, [_vm._v("$mount")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'#app'")]), _c('span', {
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
  }, [_vm._v("// App.vue")]), _vm._v("\n"), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("import")]), _vm._v(" router "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("from")]), _vm._v(" "), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'./router'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n"), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("export")]), _vm._v(" "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("default")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n    router"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" router"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v("\n    "), _c('span', {
    staticClass: "token function"
  }, [_vm._v("mounted")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n        router"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _c('span', {
    staticClass: "token function"
  }, [_vm._v("beforeEach")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _vm._v("to"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("from")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" next"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token operator"
  }, [_vm._v(">")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n            "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("this")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _vm._v("$PageLoading"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _c('span', {
    staticClass: "token function"
  }, [_vm._v("start")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n            "), _c('span', {
    staticClass: "token function"
  }, [_vm._v("next")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n        "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n\n        router"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _c('span', {
    staticClass: "token function"
  }, [_vm._v("afterEach")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _vm._v("to"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("from")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" next"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token operator"
  }, [_vm._v(">")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n            "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("this")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _vm._v("$PageLoading"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _c('span', {
    staticClass: "token function"
  }, [_vm._v("done")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n            window"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _c('span', {
    staticClass: "token function"
  }, [_vm._v("scrollTo")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token number"
  }, [_vm._v("0")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    staticClass: "token number"
  }, [_vm._v("0")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n        "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n    "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _vm._v("\n"), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', [_c('span', {
    staticClass: "token comment",
    attrs: {
      "spellcheck": "true"
    }
  }, [_vm._v("// router.js")]), _vm._v("\n"), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("import")]), _vm._v(" VueRouter "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("from")]), _vm._v(" "), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'vue-router'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n"), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("import")]), _vm._v(" Home "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("from")]), _vm._v(" "), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'./Home'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n"), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("import")]), _vm._v(" Homecontent "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("from")]), _vm._v(" "), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'./components/homeContent'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n\n"), _c('span', {
    staticClass: "token comment",
    attrs: {
      "spellcheck": "true"
    }
  }, [_vm._v("// 异步组件, 在webpack中会自动拆分为chunk。")]), _vm._v("\n"), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("const")]), _vm._v(" Installation "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token operator"
  }, [_vm._v(">")]), _vm._v(" "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("import")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'./components/installation'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n\n"), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("const")]), _vm._v(" router "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("new")]), _vm._v(" "), _c('span', {
    staticClass: "token class-name"
  }, [_vm._v("VueRouter")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n    routes"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("[")]), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n        path"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'/'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v("\n        component"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" Home"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v("\n        children"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("[")]), _vm._v("\n            "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n                path"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'/home'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v("\n                component"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" Homecontent\n            "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n                path"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'/intro/installation'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v("\n                component"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" Installation\n            "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("]")]), _vm._v("\n    "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("]")]), _vm._v("\n"), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _c('span', {
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
  }, [_vm._v("// 开始进度加载")]), _vm._v("\n"), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("this")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _vm._v("$PageLoading"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _c('span', {
    staticClass: "token function"
  }, [_vm._v("start")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n\n"), _c('span', {
    staticClass: "token comment",
    attrs: {
      "spellcheck": "true"
    }
  }, [_vm._v("// 结束进度加载")]), _vm._v("\n"), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("this")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _vm._v("$PageLoading"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _c('span', {
    staticClass: "token function"
  }, [_vm._v("done")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n\n"), _c('span', {
    staticClass: "token comment",
    attrs: {
      "spellcheck": "true"
    }
  }, [_vm._v("// 改变进度条颜色为错误色，并结束进度加载")]), _vm._v("\n"), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("this")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _vm._v("$PageLoading"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _c('span', {
    staticClass: "token function"
  }, [_vm._v("error")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n\n"), _c('span', {
    staticClass: "token comment",
    attrs: {
      "spellcheck": "true"
    }
  }, [_vm._v("// 设置进度条的增加速度和进度条颜色，具体描述见下")]), _vm._v("\n"), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("this")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _vm._v("$PageLoading"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _c('span', {
    staticClass: "token function"
  }, [_vm._v("config")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n   speed"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token number"
  }, [_vm._v("500")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v("\n   color"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'#2c96ef'")]), _vm._v("\n"), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "markdown-table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("名字")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("默认")]), _vm._v(" "), _c('th', [_vm._v("描述")]), _vm._v(" "), _c('th', [_vm._v("是否必选")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("speed")]), _vm._v(" "), _c('td', [_vm._v("Number")]), _vm._v(" "), _c('td', [_vm._v("350")]), _vm._v(" "), _c('td', [_vm._v("速度")]), _vm._v(" "), _c('td', [_vm._v("可选")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("color")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("xcui主色")]), _vm._v(" "), _c('td', [_vm._v("进度条颜色")]), _vm._v(" "), _c('td', [_vm._v("可选")])])])])
}]}

/***/ })

});