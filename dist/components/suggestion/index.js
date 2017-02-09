(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === "object" && typeof module === "object") module.exports = factory(); else if (typeof define === "function" && define.amd) define([], factory); else {
        var a = factory();
        for (var i in a) (typeof exports === "object" ? exports : root)[i] = a[i];
    }
})(this, function() {
    return function(modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) return installedModules[moduleId].exports;
            var module = installedModules[moduleId] = {
                exports: {},
                id: moduleId,
                loaded: false
            };
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            module.loaded = true;
            return module.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.p = "";
        return __webpack_require__(0);
    }([ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(3);
    }, function(module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = {
            name: "xcui-suggestion",
            data: function data() {
                return {
                    list: [],
                    localList: [],
                    currentIndex: -1,
                    dataText: "",
                    dataValue: ""
                };
            },
            props: {
                id: {
                    type: String,
                    default: ""
                },
                name: {
                    type: String,
                    default: ""
                },
                className: {
                    type: String,
                    default: ""
                },
                disabled: {
                    type: Boolean,
                    default: false
                },
                placeholder: {
                    type: String,
                    default: ""
                },
                suggestions: {
                    type: Array,
                    default: function _default() {
                        return [];
                    }
                },
                check: {
                    type: Boolean,
                    default: true
                },
                inputCallback: {
                    type: Function,
                    default: function _default() {
                        return function() {};
                    }
                },
                value: {
                    type: Object,
                    default: function _default() {
                        return {
                            text: "",
                            value: ""
                        };
                    }
                }
            },
            created: function created() {
                this.dataText = this.value.text || "";
                this.dataValue = this.value.value || "";
                this.emitChange();
            },
            computed: {
                show: function show() {
                    return this.list.length > 0 && this.$el.getElementsByTagName("input")[0] === document.activeElement;
                }
            },
            watch: {
                suggestions: function suggestions() {
                    this.arrangeLocalList();
                    this.getLocalSug();
                }
            },
            methods: {
                onInput: function onInput() {
                    var me = this;
                    setTimeout(function() {
                        me.currentIndex = -1;
                        me.getLocalSug();
                        me.autoSetItem();
                        me.inputCallback && me.inputCallback();
                    }, 100);
                },
                onFocus: function onFocus() {
                    var me = this;
                    me.getLocalSug();
                    me.inputCallback && me.inputCallback();
                },
                onBlur: function onBlur() {
                    var me = this;
                    setTimeout(function() {
                        me.currentIndex = -1;
                        me.list = [];
                    }, 200);
                },
                changeCurrent: function changeCurrent(offset) {
                    this.currentIndex += offset;
                    if (offset > 0 && this.currentIndex >= this.list.length) {
                        this.currentIndex = 0;
                    } else if (offset < 0 && this.currentIndex < 0) {
                        this.currentIndex = this.list.length - 1;
                    }
                    var currentItem = this.list[this.currentIndex];
                    this.setItem(currentItem);
                },
                convert2standard: function convert2standard(data) {
                    var res = [];
                    res = data.map(function(item, index) {
                        return {
                            text: item,
                            value: item
                        };
                    });
                    return res;
                },
                arrangeLocalList: function arrangeLocalList() {
                    var sugs = this.suggestions;
                    if (this.isArray(sugs) && sugs.length > 0 && typeof sugs[0] === "string") {
                        this.localList = this.convert2standard(sugs);
                    } else {
                        this.localList = sugs;
                    }
                },
                autoSetItem: function autoSetItem() {
                    var word = this.dataText;
                    var match = this.list.filter(function(item) {
                        return item.text === word;
                    });
                    if (match.length) {
                        this.setItem(match[0]);
                    } else {
                        this.dataValue = "";
                        this.emitChange();
                    }
                },
                getLocalSug: function getLocalSug() {
                    var _this = this;
                    var word = this.dataText;
                    this.list = this.localList.filter(function(item) {
                        return word && _this.check ? item.text.indexOf(word) > -1 : true;
                    });
                },
                setItem: function setItem(item) {
                    this.dataValue = item.value;
                    this.dataText = item.text;
                    this.emitChange();
                },
                logError: function logError(msg) {
                    throw new Error("[xcui] - " + msg);
                },
                isArray: function isArray(arr) {
                    return Object.prototype.toString.call(arr) === "[object Array]";
                },
                clearText: function clearText() {
                    this.dataText = "";
                    this.dataValue = "";
                    this.emitChange();
                },
                emitChange: function emitChange() {
                    this.$emit("input", {
                        text: this.dataText,
                        value: this.dataValue
                    });
                }
            },
            mounted: function mounted() {
                this.arrangeLocalList();
            }
        };
    }, function(module, exports) {}, function(module, exports, __webpack_require__) {
        var __vue_exports__, __vue_options__;
        var __vue_styles__ = {};
        __webpack_require__(2);
        __vue_exports__ = __webpack_require__(1);
        var __vue_template__ = __webpack_require__(4);
        __vue_options__ = __vue_exports__ = __vue_exports__ || {};
        if (typeof __vue_exports__.default === "object" || typeof __vue_exports__.default === "function") {
            __vue_options__ = __vue_exports__ = __vue_exports__.default;
        }
        if (typeof __vue_options__ === "function") {
            __vue_options__ = __vue_options__.options;
        }
        __vue_options__.render = __vue_template__.render;
        __vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
        module.exports = __vue_exports__;
    }, function(module, exports) {
        module.exports = {
            render: function() {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c("div", {
                    staticClass: "xcui-suggestion",
                    class: _vm.className
                }, [ _c("input", {
                    directives: [ {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.dataText,
                        expression: "dataText"
                    } ],
                    staticClass: "form-control xcui-suggestion-input",
                    attrs: {
                        type: "text",
                        autocomplete: "off",
                        id: _vm.id,
                        name: _vm.name,
                        disabled: _vm.disabled,
                        placeholder: _vm.placeholder
                    },
                    domProps: {
                        value: _vm._s(_vm.dataText)
                    },
                    on: {
                        input: [ function($event) {
                            if ($event.target.composing) {
                                return;
                            }
                            _vm.dataText = $event.target.value;
                        }, _vm.onInput ],
                        focus: _vm.onFocus,
                        blur: _vm.onBlur,
                        keyDown: [ function($event) {
                            if (_vm._k($event.keyCode, "up", 38)) {
                                return;
                            }
                            _vm.changeCurrent(-1);
                        }, function($event) {
                            if (_vm._k($event.keyCode, "down", 40)) {
                                return;
                            }
                            _vm.changeCurrent(1);
                        }, function($event) {
                            if (_vm._k($event.keyCode, "enter", 13)) {
                                return;
                            }
                            $event.stopPropagation();
                            $event.preventDefault();
                            _vm.onBlur($event);
                        } ]
                    }
                }), _vm._v(" "), _c("ul", {
                    staticClass: "xcui-suggestion-list dropdown-menu",
                    class: {
                        show: _vm.show
                    }
                }, _vm._l(_vm.list, function(item, index) {
                    return _c("li", {
                        class: {
                            current: _vm.currentIndex == index
                        }
                    }, [ _c("a", {
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            click: function($event) {
                                _vm.setItem(item);
                            }
                        }
                    }, [ _vm._v("\n                " + _vm._s(item.text) + "\n            ") ]) ]);
                })) ]);
            },
            staticRenderFns: []
        };
    } ]);
});

