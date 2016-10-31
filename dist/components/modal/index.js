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
=======
    }, function(module, exports) {}, function(module, exports) {
        module.exports = ' <div class=xcui-modal-wrapper v-show=show> <div class=xcui-modal-mask @click=maskClose v-el:modal-mask></div> <div class=xcui-modal tabindex=-1 @keydown.esc=cancel :style=style :class=[sizeClass,className]> <div class=xcui-modal-header v-if=showHeader> <slot name=header> <span class=xcui-modal-title>{{title}}</span> </slot> <slot name=close> <i class="xcui-modal-header-close glyphicon glyphicon-remove" @click=cancel v-if=showCloseButton></i> </slot> </div> <div class=xcui-modal-body :style=contentStyle> <slot></slot> </div> <div class=xcui-modal-footer v-if=showFooter> <slot name=footer> <button type=button name=button v-if=showOkButton @click=ok class="btn xcui-modal-btn btn-primary">{{okText}}</button> <button type=button name=button v-if=showCancelButton @click=cancel class="btn xcui-modal-cancel-btn btn-default">{{cancelText}}</button> </slot> </div> </div> </div> ';
>>>>>>> 6db40f0cf5c7d086f4dce3548a6339ee03328252
    }, function(module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = {
            name: "xcui-modal",
            props: {
                title: {
                    type: String,
                    "default": "提示"
                },
                show: {
                    type: Boolean,
                    "default": false
                },
                style: {
                    type: Object
                },
                contentStyle: {
                    type: Object
                },
                size: {
                    type: String,
                    "default": "middle"
                },
                className: {
                    type: String,
                    "default": ""
                },
                showHeader: {
                    type: Boolean,
                    "default": true
                },
                showFooter: {
                    type: Boolean,
                    "default": true
                },
                showCloseButton: {
                    type: Boolean,
                    "default": true
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
                    "default": true
                },
                scrollable: {
                    type: Boolean,
                    default: false
                },
                okText: {
                    type: String,
                    "default": "确定"
                },
                cancelText: {
                    type: String,
                    "default": "取消"
                },
                onOk: {
                    type: Function,
                    "default": function _default() {}
                },
                onCancel: {
                    type: Function,
                    "default": function _default() {}
                }
            },
            watch: {
                show: function show(val) {
                    if (this.scrollable) {
                        return;
                    }
                    if (val) {
                        document.body.style.overflow = "hidden";
                    } else {
                        document.body.style.overflow = "auto";
                    }
                }
            },
            computed: {
                sizeClass: function sizeClass() {
                    return "xcui-modal-size-" + this.size;
                }
            },
            methods: {
                close: function close(e) {
                    this.show = false;
                },
                maskClose: function maskClose() {
                    if (this.maskClosable) {
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
<<<<<<< HEAD
    }, function(module, exports) {}, function(module, exports) {
        module.exports = ' <div class=xcui-modal-wrapper v-show=show> <div class=xcui-modal-mask @click=maskClose v-el:modal-mask></div> <div class=xcui-modal tabindex=-1 @keydown.esc=cancel :style=style :class=[sizeClass,className]> <div class=xcui-modal-header v-if=showHeader> <slot name=header> <span class=xcui-modal-title>{{title}}</span> </slot> <slot name=close> <i class="xcui-modal-header-close glyphicon glyphicon-remove" @click=cancel v-if=showCloseButton></i> </slot> </div> <div class=xcui-modal-body :style=contentStyle> <slot></slot> </div> <div class=xcui-modal-footer v-if=showFooter> <slot name=footer> <button type=button name=button v-if=showOkButton @click=ok class="btn xcui-modal-btn btn-primary">{{okText}}</button> <button type=button name=button v-if=showCancelButton @click=cancel class="btn xcui-modal-cancel-btn btn-default">{{cancelText}}</button> </slot> </div> </div> </div> ';
=======
>>>>>>> 6db40f0cf5c7d086f4dce3548a6339ee03328252
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

