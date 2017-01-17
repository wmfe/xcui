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
        module.exports = __webpack_require__(5);
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _popoverMixins = __webpack_require__(2);
        var _popoverMixins2 = _interopRequireDefault(_popoverMixins);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        exports.default = {
            name: "xcui-tooltip",
            mixins: [ _popoverMixins2.default ],
            props: {
                trigger: {
                    type: String,
                    default: "hover"
                },
                effect: {
                    type: String,
                    default: "scale"
                },
                tooltipClass: {
                    type: String,
                    default: ""
                },
                titleClass: {
                    type: String,
                    default: "scale"
                },
                contentClass: {
                    type: String,
                    default: "scale"
                }
            },
            methods: {
                afterEnter: function afterEnter() {
                    this.$refs.popover.style.display = "inline-table";
                }
            }
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _eventlistener = __webpack_require__(3);
        var _eventlistener2 = _interopRequireDefault(_eventlistener);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        exports.default = {
            props: {
                trigger: {
                    type: String,
                    default: "click"
                },
                effect: {
                    type: String,
                    default: "fadein"
                },
                title: {
                    type: String
                },
                content: {
                    type: String
                },
                placement: {
                    type: String
                }
            },
            data: function data() {
                return {
                    position: {
                        top: 0,
                        left: 0
                    },
                    show: true,
                    firstInit: true
                };
            },
            methods: {
                toggle: function toggle() {
                    this.show = !this.show;
                },
                fixPosition: function fixPosition(triger, popover, placement) {
                    popover.style.display = "inline-table";
                    switch (placement) {
                      case "top":
                        this.position.left = triger.offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2;
                        this.position.top = triger.offsetTop - popover.offsetHeight;
                        break;

                      case "left":
                        this.position.left = triger.offsetLeft - popover.offsetWidth;
                        this.position.top = triger.offsetTop + triger.offsetHeight / 2 - popover.offsetHeight / 2;
                        break;

                      case "right":
                        this.position.left = triger.offsetLeft + triger.offsetWidth;
                        this.position.top = triger.offsetTop + triger.offsetHeight / 2 - popover.offsetHeight / 2;
                        break;

                      case "bottom":
                        this.position.left = triger.offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2;
                        this.position.top = triger.offsetTop + triger.offsetHeight;
                        break;

                      default:                    }
                    popover.style.top = this.position.top + "px";
                    popover.style.left = this.position.left + "px";
                    if (this.firstInit) {
                        this.firstInit = false;
                        popover.style.display = "none";
                    }
                    this.show = !this.show;
                }
            },
            mounted: function mounted() {
                var _this = this;
                this.$nextTick(function() {
                    var triger = _this.$refs.trigger.children[0];
                    var me = _this;
                    if (_this.trigger === "hover") {
                        _this._mouseenterEvent = _eventlistener2.default.listen(triger, "mouseenter", function() {
                            me.fixPosition(me.$refs.trigger.children[0], me.$refs.popover, me.placement);
                            me.show = true;
                        });
                        _this._mouseleaveEvent = _eventlistener2.default.listen(triger, "mouseleave", function() {
                            me.show = false;
                        });
                    } else if (_this.trigger === "focus") {
                        _this._focusEvent = _eventlistener2.default.listen(triger, "focus", function() {
                            me.fixPosition(me.$refs.trigger.children[0], me.$refs.popover, me.placement);
                            me.show = true;
                        });
                        _this._blurEvent = _eventlistener2.default.listen(triger, "blur", function() {
                            me.show = false;
                        });
                    } else {
                        _this._clickEvent = _eventlistener2.default.listen(triger, "click", function() {
                            me.fixPosition(me.$refs.trigger.children[0], me.$refs.popover, me.placement);
                            me.toggle;
                        });
                    }
                    _this.fixPosition(_this.$refs.trigger.children[0], _this.$refs.popover, _this.placement);
                });
            },
            beforeDestroy: function beforeDestroy() {
                if (this._blurEvent) {
                    this._blurEvent.remove();
                    this._focusEvent.remove();
                }
                if (this._mouseenterEvent) {
                    this._mouseenterEvent.remove();
                    this._mouseleaveEvent.remove();
                }
                if (this._clickEvent) {
                    this._clickEvent.remove();
                }
            }
        };
    }, function(module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = {
            listen: function listen(target, eventType, callback) {
                if (target.addEventListener) {
                    target.addEventListener(eventType, callback, false);
                    return {
                        remove: function remove() {
                            target.removeEventListener(eventType, callback, false);
                        }
                    };
                } else if (target.attachEvent) {
                    target.attachEvent("on" + eventType, callback);
                    return {
                        remove: function remove() {
                            target.detachEvent("on" + eventType, callback);
                        }
                    };
                }
            }
        };
    }, function(module, exports) {}, function(module, exports, __webpack_require__) {
        var __vue_exports__, __vue_options__;
        var __vue_styles__ = {};
        __webpack_require__(4);
        __vue_exports__ = __webpack_require__(1);
        var __vue_template__ = __webpack_require__(6);
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
                    ref: "outer",
                    staticClass: "xcui-tooltip",
                    staticStyle: {
                        position: "relative",
                        display: "inline-block"
                    }
                }, [ _c("span", {
                    ref: "trigger"
                }, [ _vm._t("default") ], 2), _vm._v(" "), _c("transition", {
                    attrs: {
                        name: _vm.effect
                    },
                    on: {
                        "after-enter": _vm.afterEnter
                    }
                }, [ _c("div", {
                    directives: [ {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.show,
                        expression: "show"
                    } ],
                    ref: "popover",
                    staticClass: "tooltip",
                    class: {
                        top: _vm.placement === "top",
                        left: _vm.placement === "left",
                        right: _vm.placement === "right",
                        bottom: _vm.placement === "bottom"
                    },
                    attrs: {
                        transition: _vm.effect,
                        role: "tooltip"
                    }
                }, [ _c("div", {
                    staticClass: "tooltip-arrow"
                }), _vm._v(" "), _c("div", {
                    staticClass: "tooltip-inner",
                    class: _vm.tooltipClass
                }, [ _vm._t("content", [ _c("div", {
                    domProps: {
                        innerHTML: _vm._s(_vm.content)
                    }
                }) ]) ], 2) ]) ]) ], 1);
            },
            staticRenderFns: []
        };
    } ]);
});

