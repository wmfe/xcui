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
            props: {
                maxValue: {
                    type: Number
                },
                minValue: {
                    type: Number
                },
                step: {
                    type: Number,
                    "default": 1
                },
                isDisable: {
                    type: Boolean,
                    "default": false
                },
                className: {
                    type: String,
                    "default": ""
                },
                textTips: {
                    type: String,
                    "default": "请输入范围内整数"
                },
                size: {
                    type: String,
                    "default": "large"
                },
                inputValue: {
                    type: String,
                    "default": ""
                }
            },
            data: function data() {
                return {};
            },
            methods: {
                changeValue: function changeValue(event) {
                    if (this.isAvailbale(event.keyCode)) {
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
                    if (keyCode === 8 || keyCode === 46 || keyCode === 37 || keyCode === 39) {
                        return true;
                    }
                    return false;
                },
                isNumber: function isNumber(num) {
                    if (window.parseInt(num) === window.Number(num)) {
                        return true;
                    }
                    return false;
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
    }, function(module, exports) {}, function(module, exports) {
<<<<<<< HEAD
        module.exports = ' <div v-el:outer="" class=outer :class=size _v-bc4f67bc=""> <div class=up-down-wrap _v-bc4f67bc=""> <a href="" class="up-wrap glyphicon glyphicon-chevron-up" @mouse.down=preventDefault @click=upValue _v-bc4f67bc=""> </a> <a href="" class="down-wrap glyphicon glyphicon-chevron-down" @mouse.down=preventDefault @click=downValue _v-bc4f67bc=""> </a> </div> <div class=input-wrap _v-bc4f67bc=""> <input type=text v-el=input class=middle v-model=inputValue @keyup=changeValue($event) :placeholder=textTips :disabled=isDisable :class=className _v-bc4f67bc=""> </div> </div> ';
    }, function(module, exports, __webpack_require__) {
        var __vue_script__, __vue_template__;
        var __vue_styles__ = {};
=======
        module.exports = ' <div v-el:outer="" class=outer :class=size _v-6042a108=""> <div class=up-down-wrap _v-6042a108=""> <a href="" class="up-wrap glyphicon glyphicon-chevron-up" @mouse.down=preventDefault @click=upValue _v-6042a108=""> </a> <a href="" class="down-wrap glyphicon glyphicon-chevron-down" @mouse.down=preventDefault @click=downValue _v-6042a108=""> </a> </div> <div class=input-wrap _v-6042a108=""> <input type=text v-el=input class=middle v-model=inputValue @keyup=changeValue($event) :placeholder=textTips :disabled=isDisable :class=className _v-6042a108=""> </div> </div> ';
    }, function(module, exports, __webpack_require__) {
        var __vue_script__, __vue_template__;
>>>>>>> upstream/master
        __webpack_require__(2);
        __vue_script__ = __webpack_require__(1);
        __vue_template__ = __webpack_require__(3);
        module.exports = __vue_script__ || {};
        if (module.exports.__esModule) module.exports = module.exports.default;
<<<<<<< HEAD
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
=======
        if (__vue_template__) {
            (typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports).template = __vue_template__;
        }
>>>>>>> upstream/master
    } ]);
});

