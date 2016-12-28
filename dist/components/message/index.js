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
            name: "xcui-message",
            props: {
                show: {
                    type: Boolean,
                    default: false
                },
                type: {
                    type: String,
                    default: "info"
                },
                content: {
                    type: String,
                    default: ""
                },
                duration: {
                    type: Number,
                    default: 3e3
                }
            },
            computed: {
                styleClass: function styleClass() {
                    return this.type ? "xcui-message-" + this.type : "";
                },
                iconClass: function iconClass() {
                    switch (this.type) {
                      case "info":
                        return "glyphicon-info-sign";

                      case "success":
                        return "glyphicon-ok";

                      case "error":
                        return "glyphicon-remove";

                      case "warning":
                        return "glyphicon-warning-sign";

                      default:
                        return "glyphicon-info-sign";
                    }
                }
            },
            data: function data() {
                return {
                    timer: null
                };
            },
            methods: {
                clearTimer: function clearTimer() {
                    clearTimeout(this.timer);
                },
                resetTimer: function resetTimer() {
                    var _this = this;
                    if (!this.duration) {
                        this.duration = 3e3;
                    }
                    this.timer = setTimeout(function() {
                        _this.show = false;
                    }, this.duration);
                },
                onShow: function onShow() {
                    this.show = true;
                    this.clearTimer();
                    this.resetTimer();
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
                return _vm._h("transition", {
                    attrs: {
                        name: "fade"
                    }
                }, [ _vm._h("div", {
                    directives: [ {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.show,
                        expression: "show"
                    } ],
                    staticClass: "xcui-message",
                    class: _vm.styleClass
                }, [ _vm._h("span", {
                    staticClass: "xcui-message-icon glyphicon",
                    class: _vm.iconClass
                }), " ", _vm._h("p", {
                    staticClass: "xcui-message-desc"
                }, [ "\n            " + _vm._s(_vm.content) + "\n        " ]) ]) ]);
            },
            staticRenderFns: []
        };
    } ]);
});

