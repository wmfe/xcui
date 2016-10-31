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
        module.exports = __webpack_require__(4);
    }, function(module, exports) {}, function(module, exports) {
        module.exports = " <div class=toaster :class=\"{\n    'text-info': options.type === 'info' || options.type == undefined,\n    'text-success': options.type === 'success',\n    'text-danger': options.type === 'error',\n    'text-warning': options.type === 'warning'\n}\" v-show=show> <span class=\"toaster-icon glyphicon\" :class=\"{\n        'glyphicon-info-sign': options.type === 'info' || options.type == undefined,\n        'glyphicon-ok': options.type === 'success',\n        'glyphicon-remove': options.type === 'error',\n        'glyphicon-warning-sign': options.type === 'warning'\n    }\"></span> <p class=toaster-desc> {{options.content}} </p> </div> ";
    }, function(module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = {
            name: "xcui-toaster",
            props: {
                options: {
                    type: Object,
                    default: function _default() {
                        return {};
                    }
                }
            },
            data: function data() {
                return {
                    timers: [],
                    show: false
                };
            },
            methods: {
                close: function close() {
                    var _this = this;
                    var t = setTimeout(function() {
                        _this.show = false;
                        _this.options = {};
                    }, this.options.duration || 2e3);
                    this.timers.push(t);
                }
            },
            watch: {
                options: function options() {
                    if (this.options.content) {
                        this.show = true;
                        this.timers.forEach(function(timer) {
                            window.clearTimeout(timer);
                        });
                        this.timers = [];
                        this.close();
                    } else {
                        this.show = false;
                    }
                }
            }
        };
    }, function(module, exports, __webpack_require__) {
        var __vue_script__, __vue_template__;
        var __vue_styles__ = {};
        __webpack_require__(1);
        __vue_script__ = __webpack_require__(3);
        __vue_template__ = __webpack_require__(2);
        module.exports = __vue_script__ || {};
        if (module.exports.__esModule) module.exports = module.exports.default;
        var __vue_options__ = typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports;
        if (__vue_template__) {
            __vue_options__.template = __vue_template__;
        }
        if (!__vue_options__.computed) __vue_options__.computed = {};
        Object.keys(__vue_styles__).forEach(function(key) {
            var module = __vue_styles__[key];
            __vue_options__.computed[key] = function() {
                return module;
            };
        });
    } ]);
});

