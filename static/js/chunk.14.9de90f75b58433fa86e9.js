webpackJsonp([14],{

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(410),
  /* template */
  __webpack_require__(411),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    data: function data() {
        return {
            tags: [{ name: '新标签', key: 'test' }],
            showTag: false,
            index: 1,
            key: 'data',
            selectedTags: [],
            selectedTagNames: [],
            selectedTagKeys: [],
            tags2: [{
                name: '电影', color: '', key: '0', checked: true
            }, {
                name: '动漫', color: 'pink', key: '1'
            }, {
                name: '音乐', color: 'green', key: '2'
            }, {
                name: '八卦', color: 'blue', key: '3'
            }, {
                name: '科技', color: 'purple', key: '4'
            }]
        };
    },

    methods: {
        close1: function close1(e, tagInst) {
            this.$Message.info('tagKey\u4E3A' + tagInst.tagKey + '\u7684\u6807\u7B7E\u88AB\u5173\u95ED\u4E86');
        },
        close2: function close2(e) {
            e.preventDefault();
            this.$Message.info('标签不会被关闭');
        },
        closeclick: function closeclick(e) {
            e.preventDefault();
        },
        addTag: function addTag() {
            if (this.tags === null) {
                this.tags = [];
            }
            this.tags.push({ name: '\u65B0\u6807\u7B7E' + this.index++, key: this.index });
        },
        onCloseTag: function onCloseTag(e, tagInst) {
            console.log(tagInst.tagKey);
        },
        change1: function change1(tag, checked) {
            if (checked) {
                var hit = void 0;
                this.selectedTags.forEach(function (v) {
                    if (v.tagkey === tag.tagkey) {
                        hit = true;
                    }
                });
                if (!hit) {
                    this.selectedTags.push({
                        name: tag.name,
                        color: tag.color,
                        tagkey: tag.tagKey
                    });
                }
            } else {
                var i = -1;
                this.selectedTags.forEach(function (v, index) {
                    if (v.tagkey === tag.tagKey) {
                        i = index;
                    }
                });
                if (i >= 0) {
                    this.selectedTags.splice(i, 1);
                }
            }
            this.selectedTagNames = this.selectedTags.map(function (v) {
                return v.name;
            });
            this.selectedTagKeys = this.selectedTags.map(function (v) {
                return v.tagkey;
            });
        }
    }
};

/***/ }),

/***/ 411:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h1', [_vm._v("Tag 标签")]), _vm._v(" "), _c('h2', [_vm._v("使用场景")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('h2', [_vm._v("基本使用")]), _vm._v(" "), _c('xcui-demo', [_c('div', {
    slot: "source"
  }, [_c('x-tag', [_vm._v("标签一")]), _vm._v(" "), _c('x-tag', {
    attrs: {
      "closeable": "",
      "tag-key": "1",
      "on-close": _vm.close1
    }
  }, [_vm._v("可关闭标签一")]), _vm._v(" "), _c('x-tag', {
    attrs: {
      "closeable": "",
      "on-close": _vm.close2
    }
  }, [_vm._v("可关闭标签二")])], 1), _vm._v(" "), _c('span', {
    slot: "info-title"
  }, [_vm._v("说明")]), _vm._v(" "), _c('div', {
    slot: "info"
  }, [_c('p', [_vm._v("基本使用, 可通过添加"), _c('code', [_vm._v("closeable")]), _vm._v("来关闭标签。在"), _c('code', [_vm._v("on-close")]), _vm._v("事件中可使用"), _c('code', [_vm._v("event.preventDefault()")]), _vm._v("来阻止标签隐藏。")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("<")]), _vm._v("x-tag")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("标签一"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-tag")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-tag")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("closeable")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("tag-key")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("1"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v(":on-close")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("close1"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("可关闭标签一"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-tag")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-tag")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("closeable")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v(":on-close")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("close2"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("可关闭标签二"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-tag")]), _c('span', {
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
  }, [_vm._v("close1")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _vm._v("e"), _c('span', {
    staticClass: "token comment",
    attrs: {
      "spellcheck": "true"
    }
  }, [_vm._v("/*"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")]), _vm._v("preventDefault"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")]), _vm._v("*/")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" tagInst"), _c('span', {
    staticClass: "token comment",
    attrs: {
      "spellcheck": "true"
    }
  }, [_vm._v("/*tag instance*/")]), _c('span', {
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
    staticClass: "token template-string"
  }, [_c('span', {
    staticClass: "token string"
  }, [_vm._v("`tagKey为")]), _c('span', {
    staticClass: "token interpolation"
  }, [_c('span', {
    staticClass: "token interpolation-punctuation punctuation"
  }, [_vm._v("$"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("tagInst"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _vm._v("tagKey"), _c('span', {
    staticClass: "token interpolation-punctuation punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])])]), _c('span', {
    staticClass: "token string"
  }, [_vm._v("的标签被关闭了`")])]), _c('span', {
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
  }, [_vm._v("close2")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _vm._v("e"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n                e"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _c('span', {
    staticClass: "token function"
  }, [_vm._v("preventDefault")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n                "), _c('span', {
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
  }, [_vm._v("'标签不会被关闭'")]), _c('span', {
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
  }, [_vm._v(">")])]), _vm._v("\n")])])]), _vm._v(" "), _c('h2', [_vm._v("多彩标签")]), _vm._v(" "), _c('xcui-demo', [_c('div', {
    slot: "source"
  }, [_c('div', [_c('x-tag', {
    attrs: {
      "closeable": "",
      "color": "pink"
    }
  }, [_vm._v("pink")]), _vm._v(" "), _c('x-tag', {
    attrs: {
      "closeable": "",
      "color": "red"
    }
  }, [_vm._v("red")]), _vm._v(" "), _c('x-tag', {
    attrs: {
      "closeable": "",
      "color": "orange"
    }
  }, [_vm._v("orange")]), _vm._v(" "), _c('x-tag', {
    attrs: {
      "closeable": "",
      "color": "green"
    }
  }, [_vm._v("green")]), _vm._v(" "), _c('x-tag', {
    attrs: {
      "closeable": "",
      "color": "cyan"
    }
  }, [_vm._v("cyan")]), _vm._v(" "), _c('x-tag', {
    attrs: {
      "closeable": "",
      "color": "blue"
    }
  }, [_vm._v("blue")]), _vm._v(" "), _c('x-tag', {
    attrs: {
      "closeable": "",
      "color": "purple"
    }
  }, [_vm._v("purple")])], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin-top": "15px"
    }
  }, [_c('x-tag', {
    attrs: {
      "closeable": "",
      "color": "pink-inverse"
    }
  }, [_vm._v("pink-inverse")]), _vm._v(" "), _c('x-tag', {
    attrs: {
      "closeable": "",
      "color": "red-inverse"
    }
  }, [_vm._v("red-inverse")]), _vm._v(" "), _c('x-tag', {
    attrs: {
      "closeable": "",
      "color": "orange-inverse"
    }
  }, [_vm._v("orange-inverse")]), _vm._v(" "), _c('x-tag', {
    attrs: {
      "closeable": "",
      "color": "green-inverse"
    }
  }, [_vm._v("green-inverse")]), _vm._v(" "), _c('x-tag', {
    attrs: {
      "closeable": "",
      "color": "cyan-inverse"
    }
  }, [_vm._v("cyan-inverse")]), _vm._v(" "), _c('x-tag', {
    attrs: {
      "closeable": "",
      "color": "blue-inverse"
    }
  }, [_vm._v("blue-inverse")]), _vm._v(" "), _c('x-tag', {
    attrs: {
      "closeable": "",
      "color": "purple-inverse"
    }
  }, [_vm._v("purple-inverse")])], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin-top": "15px"
    }
  }, [_c('x-tag', {
    attrs: {
      "color": "#f50"
    }
  }, [_vm._v("#f50")]), _vm._v(" "), _c('x-tag', {
    attrs: {
      "color": "#2db7f5"
    }
  }, [_vm._v("#2db7f5")]), _vm._v(" "), _c('x-tag', {
    attrs: {
      "color": "#87d068"
    }
  }, [_vm._v("#87d068")]), _vm._v(" "), _c('x-tag', {
    attrs: {
      "color": "#108ee9"
    }
  }, [_vm._v("#108ee9")])], 1)]), _vm._v(" "), _c('span', {
    slot: "info-title"
  }, [_vm._v("说明")]), _vm._v(" "), _c('div', {
    slot: "info"
  }, [_c('p', [_vm._v("XCUI添加了多种预设色彩，用于不同场景。如果预设值不能满足需求，可设置为具体的色值。")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("<")]), _vm._v("div")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-tag")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("closeable")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("color")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("pink"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("pink"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-tag")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-tag")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("closeable")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("color")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("red"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("red"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-tag")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-tag")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("closeable")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("color")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("orange"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("orange"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-tag")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-tag")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("closeable")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("color")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("green"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("green"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-tag")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-tag")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("closeable")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("color")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("cyan"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("cyan"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-tag")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-tag")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("closeable")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("color")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("blue"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("blue"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-tag")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-tag")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("closeable")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("color")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("purple"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("purple"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-tag")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
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
  }, [_vm._v("margin-top")]), _c('span', {
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
  }, [_vm._v("<")]), _vm._v("x-tag")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("closeable")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("color")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("pink-inverse"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("pink-inverse"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-tag")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-tag")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("closeable")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("color")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("red-inverse"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("red-inverse"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-tag")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-tag")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("closeable")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("color")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("orange-inverse"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("orange-inverse"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-tag")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-tag")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("closeable")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("color")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("green-inverse"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("green-inverse"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-tag")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-tag")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("closeable")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("color")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("cyan-inverse"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("cyan-inverse"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-tag")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-tag")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("closeable")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("color")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("blue-inverse"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("blue-inverse"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-tag")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-tag")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("closeable")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("color")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("purple-inverse"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("purple-inverse"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-tag")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
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
  }, [_vm._v("margin-top")]), _c('span', {
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
  }, [_vm._v("<")]), _vm._v("x-tag")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("color")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("#f50"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("#f50"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-tag")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-tag")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("color")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("#2db7f5"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("#2db7f5"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-tag")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-tag")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("color")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("#87d068"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("#87d068"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-tag")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-tag")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("color")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("#108ee9"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("#108ee9"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-tag")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("div")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n\n"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("template")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n\n\n")])])]), _vm._v(" "), _c('h2', [_vm._v("添加标签")]), _vm._v(" "), _c('xcui-demo', [_c('div', {
    slot: "source"
  }, [_vm._l((_vm.tags), function(tag) {
    return _c('x-tag', {
      key: tag.name,
      attrs: {
        "closeable": ""
      }
    }, [_vm._v(_vm._s(tag.name))])
  }), _vm._v(" "), _c('x-button', {
    attrs: {
      "type": "sm"
    },
    on: {
      "click": _vm.addTag
    }
  }, [_vm._v("添加")])], 2), _vm._v(" "), _c('span', {
    slot: "info-title"
  }, [_vm._v("说明")]), _vm._v(" "), _c('div', {
    slot: "info"
  }, [_c('p', [_vm._v("添加标签")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("<")]), _vm._v("x-tag")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("v-for")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("tag in tags"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v(":key")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("tag.name"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("closeable")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")]), _vm._v("tag.name"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")]), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-tag")]), _c('span', {
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
  }, [_vm._v("\"")]), _vm._v("sm"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("@click")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("addTag"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("添加"), _c('span', {
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
  }, [_vm._v("\n"), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("export")]), _vm._v(" "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("default")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n    "), _c('span', {
    staticClass: "token function"
  }, [_vm._v("data")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("return")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n            index"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token number"
  }, [_vm._v("1")]), _vm._v("\n        "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n    "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v("\n    methods"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token function"
  }, [_vm._v("addTag")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n            "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("if")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("this")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _vm._v("tags "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("===")]), _vm._v(" "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("null")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n                "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("this")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _vm._v("tags "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("[")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("]")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n            "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _vm._v("\n            "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("this")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _vm._v("tags"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _c('span', {
    staticClass: "token function"
  }, [_vm._v("push")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("name"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token template-string"
  }, [_c('span', {
    staticClass: "token string"
  }, [_vm._v("`新标签")]), _c('span', {
    staticClass: "token interpolation"
  }, [_c('span', {
    staticClass: "token interpolation-punctuation punctuation"
  }, [_vm._v("$"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("this")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _vm._v("index"), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("++")]), _c('span', {
    staticClass: "token interpolation-punctuation punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])])]), _c('span', {
    staticClass: "token string"
  }, [_vm._v("`")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n        "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _vm._v("\n    "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _vm._v("\n"), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n\n")]), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("script")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n\n")])])]), _vm._v(" "), _c('h2', [_vm._v("可选择的标签（类checkbox)")]), _vm._v(" "), _c('xcui-demo', [_c('div', {
    slot: "source"
  }, [_vm._l((_vm.tags2), function(tag) {
    return _c('x-tag-checkable', {
      key: tag.key,
      attrs: {
        "color": tag.color,
        "tag-key": tag.key,
        "name": tag.name,
        "checked": tag.checked
      },
      on: {
        "change": _vm.change1
      }
    }, [_vm._v(_vm._s(tag.name))])
  }), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-top": "15px"
    }
  }, [_vm._v("选中的标签：" + _vm._s(_vm.selectedTagNames.length > 0 ? _vm.selectedTagNames : ''))]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-top": "15px"
    }
  }, [_vm._v("选中的标签值：" + _vm._s(_vm.selectedTagKeys.length > 0 ? _vm.selectedTagKeys : ''))])], 2), _vm._v(" "), _c('span', {
    slot: "info-title"
  }, [_vm._v("说明")]), _vm._v(" "), _c('div', {
    slot: "info"
  }, [_c('p', [_vm._v("可选择的标签, 使用"), _c('code', [_vm._v("x-tag-checkable")]), _vm._v("组件来实现。"), _c('code', [_vm._v("@change")]), _vm._v("事件返回的参数中携带当前tag的Vue实例和"), _c('code', [_vm._v("checked")]), _vm._v("状态。")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("<")]), _vm._v("x-tag-checkable")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("v-for")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("tag in tags2"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v(":color")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("tag.color"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v(":key")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("tag.key"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v(":tag-key")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("tag.key"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v(":name")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("tag.name"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v(":checked")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("tag.checked"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("@change")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("change1"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")]), _vm._v("tag.name"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")]), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-tag-checkable")]), _c('span', {
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
  }, [_vm._v(">")])]), _vm._v("选中的标签："), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")]), _vm._v("selectedTagNames.length > 0 ? selectedTagNames : ''"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")]), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("p")]), _c('span', {
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
  }, [_vm._v(">")])]), _vm._v("选中的标签值："), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")]), _vm._v("selectedTagKeys.length > 0 ? selectedTagKeys : ''"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")]), _c('span', {
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
  }, [_vm._v("\n"), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("export")]), _vm._v(" "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("default")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n    "), _c('span', {
    staticClass: "token function"
  }, [_vm._v("data")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("return")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n            tags"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("[")]), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n                name"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'电影'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" color"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token string"
  }, [_vm._v("''")]), _vm._v("\n            "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("]")]), _vm._v("\n            selectedTags"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("[")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("]")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v("\n            selectedTagNames"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("[")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("]")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v("\n            selectedTagKeys"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("[")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("]")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v("\n            tags2"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("[")]), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n                name"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'电影'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" color"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token string"
  }, [_vm._v("''")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" key"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'0'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" checked"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token boolean"
  }, [_vm._v("true")]), _vm._v("\n            "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n                name"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'动漫'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" color"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'pink'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" key"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'1'")]), _vm._v("\n            "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n                name"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'音乐'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" color"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'green'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" key"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'2'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" checked"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token boolean"
  }, [_vm._v("true")]), _vm._v("\n            "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n                name"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'八卦'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" color"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'blue'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" key"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'3'")]), _vm._v("\n            "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n                name"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'科技'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" color"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'purple'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" key"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'4'")]), _vm._v("\n            "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("]")]), _vm._v("\n        "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n    "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v("\n    methods"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n        "), _c('span', {
    staticClass: "token function"
  }, [_vm._v("change1")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _vm._v("tag"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" checked"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n            "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("if")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _vm._v("checked"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n                "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("let")]), _vm._v(" hit"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n                "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("this")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _vm._v("selectedTags"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _c('span', {
    staticClass: "token function"
  }, [_vm._v("forEach")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _vm._v("v"), _c('span', {
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
  }, [_vm._v("if")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _vm._v("v"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _vm._v("tagkey "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("===")]), _vm._v(" tag"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _vm._v("tagkey"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n                        hit "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    staticClass: "token boolean"
  }, [_vm._v("true")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n                    "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _vm._v("\n                "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n                "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("if")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("!")]), _vm._v("hit"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n                    "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("this")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _vm._v("selectedTags"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _c('span', {
    staticClass: "token function"
  }, [_vm._v("push")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n                        name"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" tag"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _vm._v("name"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v("\n                        color"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" tag"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _vm._v("color"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v("\n                        tagkey"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v(" tag"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _vm._v("tagKey\n                    "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n                "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _vm._v("\n            "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _vm._v("\n            "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("else")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n                "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("let")]), _vm._v(" i "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("-")]), _c('span', {
    staticClass: "token number"
  }, [_vm._v("1")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n                "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("this")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _vm._v("selectedTags"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _c('span', {
    staticClass: "token function"
  }, [_vm._v("forEach")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _vm._v("v"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" index"), _c('span', {
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
  }, [_vm._v("if")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _vm._v("v"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _vm._v("tagkey "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("===")]), _vm._v(" tag"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _vm._v("tagKey"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n                        i "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("=")]), _vm._v(" index"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n                    "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _vm._v("\n                "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n                "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("if")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _vm._v("i "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v(">=")]), _vm._v(" "), _c('span', {
    staticClass: "token number"
  }, [_vm._v("0")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n                    "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("this")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _vm._v("selectedTags"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _c('span', {
    staticClass: "token function"
  }, [_vm._v("splice")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _vm._v("i"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    staticClass: "token number"
  }, [_vm._v("1")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n                "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _vm._v("\n            "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _vm._v("\n            "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("this")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _vm._v("selectedTagNames "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("this")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _vm._v("selectedTags"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _c('span', {
    staticClass: "token function"
  }, [_vm._v("map")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _vm._v("v"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token operator"
  }, [_vm._v(">")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n                "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("return")]), _vm._v(" v"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _vm._v("name"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n            "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n            "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("this")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _vm._v("selectedTagKeys "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("this")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _vm._v("selectedTags"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _c('span', {
    staticClass: "token function"
  }, [_vm._v("map")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _vm._v("v"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token operator"
  }, [_vm._v(">")]), _vm._v(" "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("{")])]), _vm._v("\n                "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("return")]), _vm._v(" v"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _vm._v("tagkey"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n            "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n        "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _vm._v("\n    "), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _vm._v("\n"), _c('span', {
    staticClass: "token punctuation"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("}")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n\n")]), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("script")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n\n")])])]), _vm._v(" "), _c('h2', [_vm._v("Tag Props")]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('h2', [_vm._v("TagCheckable Props")]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('h2', [_vm._v("TagCheckable Events")]), _vm._v(" "), _vm._m(3)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', [_c('li', [_vm._v("标记事物的属性、分类等特性")]), _vm._v(" "), _c('li', [_vm._v("支持关闭标签、点击标签")]), _vm._v(" "), _c('li', [_vm._v("支持禁用标签")]), _vm._v(" "), _c('li', [_vm._v("支持自定义标签样式")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "markdown-table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("名字")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("默认")]), _vm._v(" "), _c('th', [_vm._v("描述")]), _vm._v(" "), _c('th', [_vm._v("是否必选")]), _vm._v(" "), _c('th', [_vm._v("可选值")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("color")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("无")]), _vm._v(" "), _c('td', [_vm._v("颜色，可设为预设值或色值")]), _vm._v(" "), _c('td', [_vm._v("可选")]), _vm._v(" "), _c('td', [_vm._v("pink/red/orange/green/cyan/blue/purple, 加上"), _c('code', [_vm._v("-inverse")]), _vm._v("设为反色")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("tag-key")]), _vm._v(" "), _c('td', [_vm._v("String, Number")]), _vm._v(" "), _c('td', [_vm._v("无")]), _vm._v(" "), _c('td', [_vm._v("tag的标识")]), _vm._v(" "), _c('td', [_vm._v("可选")]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("closeable")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("false")]), _vm._v(" "), _c('td', [_vm._v("是否可关闭")]), _vm._v(" "), _c('td', [_vm._v("可选")]), _vm._v(" "), _c('td', [_vm._v("true, false")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("on-close")]), _vm._v(" "), _c('td', [_vm._v("function")]), _vm._v(" "), _c('td', [_vm._v("无")]), _vm._v(" "), _c('td', [_vm._v("关闭时回调，参数为鼠标事件event和tag实例")]), _vm._v(" "), _c('td', [_vm._v("可选")]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("transition")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("fade")]), _vm._v(" "), _c('td', [_vm._v("关闭时的过渡效果名称")]), _vm._v(" "), _c('td', [_vm._v("可选")]), _vm._v(" "), _c('td')])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "markdown-table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("名字")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("默认")]), _vm._v(" "), _c('th', [_vm._v("描述")]), _vm._v(" "), _c('th', [_vm._v("是否必选")]), _vm._v(" "), _c('th', [_vm._v("可选值")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("color")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("无")]), _vm._v(" "), _c('td', [_vm._v("颜色，可设为预设值或色值")]), _vm._v(" "), _c('td', [_vm._v("可选")]), _vm._v(" "), _c('td', [_vm._v("pink/red/orange/green/cyan/blue/purple, 加上"), _c('code', [_vm._v("-inverse")]), _vm._v("设为反色")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("name")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("false")]), _vm._v(" "), _c('td', [_vm._v("是否可关闭")]), _vm._v(" "), _c('td', [_vm._v("可选")]), _vm._v(" "), _c('td', [_vm._v("true, false")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("tag-key")]), _vm._v(" "), _c('td', [_vm._v("String, Number")]), _vm._v(" "), _c('td', [_vm._v("无")]), _vm._v(" "), _c('td', [_vm._v("tag的标识")]), _vm._v(" "), _c('td', [_vm._v("可选")]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("checked")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("false")]), _vm._v(" "), _c('td', [_vm._v("是否默认选中")]), _vm._v(" "), _c('td', [_vm._v("否")]), _vm._v(" "), _c('td', [_vm._v("true,false")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "markdown-table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("事件名")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("返回值")]), _vm._v(" "), _c('th', [_vm._v("设置属性")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("change")]), _vm._v(" "), _c('td', [_vm._v("点击事件后触发")]), _vm._v(" "), _c('td', [_vm._v("(TagVueComponent, checked)")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("@change")])])])])])
}]}

/***/ })

});