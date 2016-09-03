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
        module.exports = __webpack_require__(7);
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _popoverMixins = __webpack_require__(2);
        var _popoverMixins2 = _interopRequireDefault(_popoverMixins);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        exports.default = {
            mixins: [ _popoverMixins2.default ],
            props: {
                type: {
                    type: String,
                    "default": "popover"
                },
                trigger: {
                    type: String,
                    "default": "hover"
                },
                effect: {
                    type: String,
                    "default": "scale"
                },
                tooltipClass: {
                    type: String,
                    "default": ""
                },
                titleClass: {
                    type: String,
                    "default": "scale"
                },
                contentClass: {
                    type: String,
                    "default": "scale"
                }
            },
            data: function data() {
                return {};
            },
            methods: {},
            ready: function ready() {}
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _EventListener = __webpack_require__(3);
        var _EventListener2 = _interopRequireDefault(_EventListener);
        var _coerceBoolean = __webpack_require__(4);
        var _coerceBoolean2 = _interopRequireDefault(_coerceBoolean);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        exports.default = {
            props: {
                trigger: {
                    type: String,
                    "default": "click"
                },
                effect: {
                    type: String,
                    "default": "fadein"
                },
                title: {
                    type: String
                },
                content: {
                    type: String
                },
                header: {
                    type: Boolean,
                    coerce: _coerceBoolean2.default,
                    "default": true
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
                    show: true
                };
            },
            methods: {
                toggle: function toggle() {
                    this.show = !this.show;
                },
                fixPosition: function fixPosition(triger, popover, placement) {
                    popover.style.display = "";
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
                    popover.style.display = "none";
                    this.show = !this.show;
                }
            },
            ready: function ready() {
                if (!this.$els.popover) {}
                var triger = this.$els.trigger.children[0];
                var that = this;
                if (this.trigger === "hover") {
                    this._mouseenterEvent = _EventListener2.default.listen(triger, "mouseenter", function() {
                        that.fixPosition(that.$els.trigger.children[0], that.$els.popover, that.placement);
                        that.show = true;
                    });
                    this._mouseleaveEvent = _EventListener2.default.listen(triger, "mouseleave", function() {
                        that.show = false;
                    });
                } else if (this.trigger === "focus") {
                    this._focusEvent = _EventListener2.default.listen(triger, "focus", function() {
                        that.fixPosition(that.$els.trigger.children[0], that.$els.popover, that.placement);
                        that.show = true;
                    });
                    this._blurEvent = _EventListener2.default.listen(triger, "blur", function() {
                        that.show = false;
                    });
                } else {
                    this._clickEvent = _EventListener2.default.listen(triger, "click", function() {
                        that.fixPosition(that.$els.trigger.children[0], that.$els.popover, that.placement);
                        that.toggle;
                    });
                }
                that.fixPosition(this.$els.trigger.children[0], this.$els.popover, this.placement);
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
    }, function(module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = function(val) {
            return typeof val !== "string" ? val : val === "true" ? true : val === "false" ? false : val === "null" ? false : val === "undefined" ? false : val;
        };
    }, function(module, exports) {}, function(module, exports) {
        module.exports = " <div v-el:outer style=\"position:relative; display: inline-block\" v-if=\"type == 'tooltip'\"> <span v-el:trigger> <slot> </slot> </span> <div class=tooltip v-bind:class=\"{\n            'top':    placement === 'top',\n            'left':   placement === 'left',\n            'right':  placement === 'right',\n            'bottom': placement === 'bottom'\n        }\" v-el:popover v-show=show :transition=effect role=tooltip> <div class=tooltip-arrow></div> <div class=tooltip-inner :class=tooltipClass> <slot name=content> {{{content}}} </slot> </div> </div> </div> <div v-el:outer style=\"position:relative; display: inline-block\" v-else> <span v-el:trigger> <slot> </slot> </span> <div class=popover v-bind:class=\"{\n      'top':placement === 'top',\n      'left':placement === 'left',\n      'right':placement === 'right',\n      'bottom':placement === 'bottom'\n      }\" v-el:popover v-show=show :transition=effect> <div class=arrow></div> <div class=popover-title :class=titleClass v-show=title> <slot name=title> {{title}} </slot> </div> <div class=popover-content :class=contentClass> <slot name=content> {{{content}}} </slot> </div> </div> </div> ";
    }, function(module, exports, __webpack_require__) {
        var __vue_script__, __vue_template__;
        __webpack_require__(5);
        __vue_script__ = __webpack_require__(1);
        __vue_template__ = __webpack_require__(6);
        module.exports = __vue_script__ || {};
        if (module.exports.__esModule) module.exports = module.exports.default;
        if (__vue_template__) {
            (typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports).template = __vue_template__;
        }
    } ]);
});

