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
        module.exports = ' <div v-el:outer class=outer :class=size> <div class=up-down-wrap> <a href="" class="up-wrap glyphicon glyphicon-chevron-up" @mouse.down=preventDefault @click=upValue> </a> <a href="" class="down-wrap glyphicon glyphicon-chevron-down" @mouse.down=preventDefault @click=downValue> </a> </div> <div class=input-wrap> <input type=text v-el=input class=middle v-model=inputValue @keyup=changeValue($event) :placeholder=textTips :disabled=isDisable :class=className /> </div> </div> ';
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
                    default: "large"
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
            },
            ready: function ready() {}
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

