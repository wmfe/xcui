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
        module.exports = " <div class=xcui-progress> <div class=xcui-progress-container> <div class=xcui-progress-outer> <div class=xcui-progress-inner :style=\"{width:percent+'%',height:height+'px'}\"></div> </div> </div> <div :class=\"['infoClassName',!showInfo ? 'hidden':'']\"> {{percentInfo}} </div> <div> </div></div>";
    }, function(module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = {
            name: "xcui-progress",
            props: {
                percent: {
                    type: Number,
                    default: 0
                },
                percentInfo: {
                    type: String,
                    default: ""
                },
                infoClassName: {
                    type: String,
                    default: "xcui-progress-info"
                },
                showInfo: {
                    type: Boolean,
                    default: false
                },
                height: {
                    type: Number,
                    default: 10
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

