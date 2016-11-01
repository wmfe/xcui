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
<<<<<<< HEAD
<<<<<<< HEAD
=======
    }, function(module, exports) {}, function(module, exports) {
        module.exports = ' <div v-show=show class="xcui-loading load-container" :class=[type,size,classname]> <div class=loader :style="{\'color\' : color}"></div> </div> ';
>>>>>>> 6db40f0cf5c7d086f4dce3548a6339ee03328252
=======
>>>>>>> 60ad8a70faf1215424008d4b5ef887d6a1b14466
    }, function(module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = {
            name: "xcui-loading",
            props: {
                show: {
                    type: Boolean,
                    "default": false
                },
                type: {
                    type: String,
<<<<<<< HEAD
                    "default": "load2"
=======
                    default: "load2"
>>>>>>> 6db40f0cf5c7d086f4dce3548a6339ee03328252
                },
                classname: {
                    type: String,
                    "default": ""
                },
                color: {
                    type: String,
                    "default": ""
                },
                size: {
                    type: String,
                    "default": "md"
                }
            },
            methods: {}
        };
<<<<<<< HEAD
<<<<<<< HEAD
    }, function(module, exports) {}, function(module, exports) {
        module.exports = ' <div v-show=show class="xcui-loading load-container" :class=[type,size,classname]> <div class=loader :style="{\'color\' : color}"></div> </div> ';
=======
>>>>>>> 6db40f0cf5c7d086f4dce3548a6339ee03328252
    }, function(module, exports, __webpack_require__) {
        var __vue_script__, __vue_template__;
=======
    }, function(module, exports) {}, function(module, exports) {
        module.exports = ' <div v-show=show class="xcui-loading load-container" :class=[type,size,classname]> <div class=loader :style="{\'color\' : color}"></div> </div> ';
    }, function(module, exports, __webpack_require__) {
        var __vue_script__, __vue_template__;
        var __vue_styles__ = {};
>>>>>>> 60ad8a70faf1215424008d4b5ef887d6a1b14466
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

