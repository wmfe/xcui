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
            name: "xcui-inputnumber",
            props: {
                maxValue: {
                    type: Number
                },
                minValue: {
                    type: Number
                },
                step: {
                    type: Number,
                    default: 1
                },
                isDisable: {
                    type: Boolean,
                    default: false
                },
                className: {
                    type: String,
                    default: ""
                },
                textTips: {
                    type: String,
                    default: "请输入范围内整数"
                },
                size: {
                    type: String,
                    default: "normal"
                },
                inputValue: {
                    type: Number
                }
            },
            data: function data() {
                return {};
            },
            methods: {
                changeValue: function changeValue(event) {
                    if (this.isAvailbale(event.keyCode) && this.isNumber(this.inputValue + "")) {
                        this.inputValue = this.limitValue(this.inputValue) + "";
                    } else {
                        this.inputValue = "";
                    }
                },
                limitValue: function limitValue(currentNum) {
                    var result = currentNum;
                    if (currentNum !== "") {
                        if (this.maxValue !== undefined && currentNum > this.maxValue) {
                            result = this.maxValue;
                        }
                        if (this.minValue !== undefined && currentNum < this.minValue) {
                            result = this.minValue;
                        }
                    }
                    return result;
                },
                isAvailbale: function isAvailbale(keyCode) {
                    if (keyCode >= 48 && keyCode <= 57) {
                        return true;
                    }
                    if (keyCode >= 96 && keyCode <= 105) {
                        return true;
                    }
                    if (keyCode === 8 || keyCode === 46 || keyCode === 37 || keyCode === 39 || keyCode === 189) {
                        return true;
                    }
                    return false;
                },
                isNumber: function isNumber(num) {
                    var result = /^(-)?\d*$/.test(num);
                    return result;
                },
                upValue: function upValue(e) {
                    if (this.isNumber(this.inputValue)) {
                        var addValue = window.Number(this.inputValue) + this.step;
                        addValue = this.limitValue(addValue);
                        this.inputValue = addValue + "";
                    }
                    e.preventDefault();
                },
                downValue: function downValue(e) {
                    if (this.isNumber(this.inputValue)) {
                        var deliValue = window.Number(this.inputValue) - this.step;
                        deliValue = this.limitValue(deliValue);
                        this.inputValue = deliValue + "";
                    }
                    e.preventDefault();
                },
                preventDefault: function preventDefault(e) {
                    e.preventDefault();
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
                return _vm._h("div", {
                    ref: "outer",
                    staticClass: "outer",
                    class: _vm.size
                }, [ _vm._h("div", {
                    staticClass: "up-down-wrap"
                }, [ _vm._h("a", {
                    staticClass: "up-wrap glyphicon glyphicon-chevron-up",
                    attrs: {
                        href: ""
                    },
                    on: {
                        mouse: function($event) {
                            if ($event.keyCode !== 40) {
                                return;
                            }
                            _vm.preventDefault($event);
                        },
                        click: _vm.upValue
                    }
                }), " ", _vm._h("a", {
                    staticClass: "down-wrap glyphicon glyphicon-chevron-down",
                    attrs: {
                        href: ""
                    },
                    on: {
                        mouse: function($event) {
                            if ($event.keyCode !== 40) {
                                return;
                            }
                            _vm.preventDefault($event);
                        },
                        click: _vm.downValue
                    }
                }) ]), " ", _vm._h("div", {
                    staticClass: "input-wrap"
                }, [ _vm._h("input", {
                    directives: [ {
                        name: "el",
                        rawName: "v-el",
                        value: _vm.input,
                        expression: "input"
                    }, {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.inputValue,
                        expression: "inputValue"
                    } ],
                    staticClass: "middle form-control",
                    class: _vm.className,
                    attrs: {
                        type: "text",
                        placeholder: _vm.textTips,
                        disabled: _vm.isDisable
                    },
                    domProps: {
                        value: _vm._s(_vm.inputValue)
                    },
                    on: {
                        keyup: function($event) {
                            _vm.changeValue($event);
                        },
                        input: function($event) {
                            if ($event.target.composing) {
                                return;
                            }
                            _vm.inputValue = $event.target.value;
                        }
                    }
                }) ]) ]);
            },
            staticRenderFns: []
        };
    } ]);
});

