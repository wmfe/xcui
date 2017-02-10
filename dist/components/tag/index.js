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
            name: "xcui-tag",
            props: {
                text: {
                    type: String,
                    default: ""
                },
                closeable: {
                    type: Boolean,
                    default: false
                },
                disabled: {
                    type: Boolean,
                    default: false
                },
                showTag: {
                    type: Boolean,
                    default: true
                },
                className: {
                    type: String,
                    default: ""
                },
                keys: {
                    type: String,
                    default: ""
                },
                aftercloseisshow: {
                    type: Boolean,
                    default: false,
                    twoway: true
                }
            },
            data: function data() {
                return {
                    show: true
                };
            },
            created: function created() {
                this.show = this.showTag;
            },
            methods: {
                onCloseClick: function onCloseClick() {
                    this.$emit("close");
                    if (this.aftercloseisshow === false) {
                        this.show = false;
                    }
                },
                onClick: function onClick() {
                    this.$emit("click");
                }
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
                return _vm.show ? _c("div", {
                    class: [ "xcui-tag", _vm.disabled ? " xcui-disabled" : "" ],
                    on: {
                        click: _vm.onClick
                    }
                }, [ _c("div", {
                    class: _vm.className
                }, [ _c("span", {
                    staticClass: "xcui-tag-text"
                }, [ _vm._t("default"), _vm._v(_vm._s(_vm.text)), _c("span", [ _vm.closeable ? _c("i", {
                    staticClass: "xcui-cross",
                    on: {
                        click: function($event) {
                            $event.stopPropagation();
                            _vm.onCloseClick($event);
                        }
                    }
                }) : _vm._e() ]) ], 2) ]) ]) : _vm._e();
            },
            staticRenderFns: []
        };
    } ]);
});

