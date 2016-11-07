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
            name: "xcui-tag",
            props: {
                text: {
                    type: String,
                    "default": ""
                },
                closeable: {
                    type: Boolean,
                    "default": false
                },
                disabled: {
                    type: Boolean,
                    "default": false
                },
                showTag: {
                    type: Boolean,
                    "default": true
                },
                classname: {
                    type: String,
                    "default": ""
                },
                key: {
                    type: String,
                    "default": ""
                },
                aftercloseisshow: {
                    type: Boolean,
                    "default": false,
                    twoway: true
                }
            },
            methods: {
                onCloseClick: function onCloseClick() {
                    this.$emit("close");
                    if (this.aftercloseisshow === false) {
                        this.showTag = false;
                    }
                },
                onClick: function onClick() {
                    this.$emit("click");
                }
            }
        };
    }, function(module, exports) {}, function(module, exports) {
        module.exports = " <div :class=\"['xcui-tag', disabled ? ' xcui-disabled':'']\" @click=onClick v-if=showTag> <div class=\"{{classname!='' ? classname : ''}}\"> <span class=xcui-tag-text><slot></slot>{{text}}<span> <i class=xcui-cross v-if=closeable @click.stop=onCloseClick></i> </span></span></div> </div> ";
    }, function(module, exports, __webpack_require__) {
        var __vue_script__, __vue_template__;
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

