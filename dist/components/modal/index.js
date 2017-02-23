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
            name: "xcui-modal",
            props: {
                value: {
                    type: Boolean,
                    default: false
                },
                title: {
                    type: String,
                    default: ""
                },
                content: {
                    type: String,
                    default: ""
                },
                style: {
                    type: Object
                },
                contentStyle: {
                    type: Object
                },
                size: {
                    type: String,
                    default: "middle"
                },
                className: {
                    type: String,
                    default: ""
                },
                showHeader: {
                    type: Boolean,
                    default: true
                },
                showFooter: {
                    type: Boolean,
                    default: true
                },
                showCloseButton: {
                    type: Boolean,
                    default: true
                },
                showOkButton: {
                    type: Boolean,
                    default: true
                },
                showCancelButton: {
                    type: Boolean,
                    default: true
                },
                maskClosable: {
                    type: Boolean,
                    default: true
                },
                scrollable: {
                    type: Boolean,
                    default: false
                },
                okText: {
                    type: String,
                    default: "确定"
                },
                cancelText: {
                    type: String,
                    default: "取消"
                },
                onOk: {
                    type: Function,
                    default: function _default() {}
                },
                onCancel: {
                    type: Function,
                    default: function _default() {}
                }
            },
            data: function data() {
                return {
                    show: false
                };
            },
            watch: {
                value: function value(val) {
                    this.show = val;
                    if (this.scrollable) {
                        return;
                    }
                    if (val) {
                        document.body.style.overflow = "hidden";
                    } else {
                        document.body.style.overflow = "auto";
                    }
                },
                show: function show(val) {
                    this.$emit("input", val);
                }
            },
            computed: {
                sizeClass: function sizeClass() {
                    return "xcui-modal-size-" + this.size;
                },
                modalClass: function modalClass() {
                    return this.sizeClass + " " + this.className;
                }
            },
            methods: {
                close: function close(e) {
                    this.show = false;
                },
                maskClose: function maskClose(e) {
                    if (this.maskClosable && e.target === this.$refs.modalMask) {
                        this.cancel();
                    }
                },
                ok: function ok() {
                    var noClose = typeof this.onOk === "function" && this.onOk();
                    if (!noClose) {
                        this.close();
                    }
                },
                cancel: function cancel() {
                    var noClose = typeof this.onCancel === "function" && this.onCancel();
                    if (!noClose) {
                        this.close();
                    }
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
                return _c("div", {
                    directives: [ {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.show,
                        expression: "show"
                    } ],
                    ref: "modal-mask",
                    staticClass: "xcui-modal-wrapper xcui-modal-mask",
                    on: {
                        click: _vm.maskClose
                    }
                }, [ _c("div", {
                    staticClass: "xcui-modal",
                    class: _vm.modalClass,
                    style: _vm.style,
                    attrs: {
                        tabindex: "-1"
                    },
                    on: {
                        keydown: function($event) {
                            if (_vm._k($event.keyCode, "esc", 27)) {
                                return;
                            }
                            _vm.cancel($event);
                        }
                    }
                }, [ _vm.showHeader ? _c("div", {
                    staticClass: "xcui-modal-header"
                }, [ _vm._t("header", [ _c("span", {
                    staticClass: "xcui-modal-title"
                }, [ _vm._v(_vm._s(_vm.title)) ]) ]), _vm._v(" "), _vm._t("close", [ _vm.showCloseButton ? _c("button", {
                    staticClass: "xcui-modal-header-close",
                    attrs: {
                        type: "button",
                        "data-dismiss": "modal"
                    },
                    on: {
                        click: _vm.cancel
                    }
                }, [ _c("span", {
                    attrs: {
                        "aria-hidden": "true"
                    }
                }, [ _vm._v("×") ]), _c("span", {
                    staticClass: "sr-only"
                }, [ _vm._v("Close") ]) ]) : _vm._e() ]) ], 2) : _vm._e(), _vm._v(" "), _c("div", {
                    staticClass: "xcui-modal-body",
                    style: _vm.contentStyle
                }, [ _vm._t("default", [ _vm._v(_vm._s(_vm.content)) ]) ], 2), _vm._v(" "), _vm.showFooter ? _c("div", {
                    staticClass: "xcui-modal-footer"
                }, [ _vm._t("footer", [ _vm.showOkButton ? _c("button", {
                    staticClass: "btn xcui-modal-btn btn-primary",
                    attrs: {
                        type: "button",
                        name: "button"
                    },
                    on: {
                        click: _vm.ok
                    }
                }, [ _vm._v(_vm._s(_vm.okText)) ]) : _vm._e(), _vm._v(" "), _vm.showCancelButton ? _c("button", {
                    staticClass: "btn xcui-modal-cancel-btn btn-default",
                    attrs: {
                        type: "button",
                        name: "button"
                    },
                    on: {
                        click: _vm.cancel
                    }
                }, [ _vm._v(_vm._s(_vm.cancelText)) ]) : _vm._e() ]) ], 2) : _vm._e() ]) ]);
            },
            staticRenderFns: []
        };
    } ]);
});

