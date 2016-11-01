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
    }, function(module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = {
            name: "xcui-message",
            props: {
<<<<<<< HEAD:dist/components/toaster/index.js
                options: {
                    type: Object,
                    "default": function _default() {
                        return {};
=======
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
                    return "xcui-message-" + this.type;
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
>>>>>>> 60ad8a70faf1215424008d4b5ef887d6a1b14466:dist/components/message/index.js
                    }
                }
            },
            data: function data() {
                return {
                    timer: null,
                    closed: false
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
    }, function(module, exports) {}, function(module, exports) {
<<<<<<< HEAD:dist/components/toaster/index.js
        module.exports = " <div class=toaster :class=\"{\n    'text-info': options.type === 'info' || options.type == undefined,\n    'text-success': options.type === 'success',\n    'text-danger': options.type === 'error',\n    'text-warning': options.type === 'warning'\n}\" v-show=show> <span class=\"toaster-icon glyphicon\" :class=\"{\n        'glyphicon-info-sign': options.type === 'info' || options.type == undefined,\n        'glyphicon-ok': options.type === 'success',\n        'glyphicon-remove': options.type === 'error',\n        'glyphicon-warning-sign': options.type === 'warning'\n    }\"></span> <p class=toaster-desc> {{options.content}} </p> </div> ";
    }, function(module, exports, __webpack_require__) {
        var __vue_script__, __vue_template__;
=======
        module.exports = ' <div class=xcui-message :class=styleClass transition=fade v-show=show> <span class="xcui-message-icon glyphicon" :class=iconClass></span> <p class=xcui-message-desc> {{content}} </p> </div> ';
    }, function(module, exports, __webpack_require__) {
        var __vue_script__, __vue_template__;
        var __vue_styles__ = {};
>>>>>>> 60ad8a70faf1215424008d4b5ef887d6a1b14466:dist/components/message/index.js
        __webpack_require__(2);
        __vue_script__ = __webpack_require__(1);
        __vue_template__ = __webpack_require__(3);
        module.exports = __vue_script__ || {};
        if (module.exports.__esModule) module.exports = module.exports.default;
        if (__vue_template__) {
            (typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports).template = __vue_template__;
        }
    } ]);
});

