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
            data: function data() {
                return {
                    list: [],
                    localList: [],
                    currentIndex: -1
                };
            },
            props: {
                id: {
                    type: String,
                    "default": ""
                },
                name: {
                    type: String,
                    "default": ""
                },
                className: {
                    type: String,
                    "default": ""
                },
                disabled: {
                    type: Boolean,
                    "default": false
                },
                placeholder: {
                    type: String,
                    "default": ""
                },
                suggestions: {
                    type: Array,
                    "default": function _default() {
                        return [];
                    }
                },
                dataText: {
                    type: String,
                    "default": ""
                },
                dataValue: {
                    type: [ String, Number ],
                    "default": ""
                },
                check: {
                    type: Boolean,
                    "default": true
                },
                inputCallback: {
                    type: Function,
                    "default": function _default() {
                        return function() {};
                    }
                }
            },
            computed: {
                show: function show() {
                    return this.list.length > 0;
                }
            },
            watch: {
                suggestions: function suggestions() {
                    this.arrangeLocalList();
                    this.getLocalSug();
                }
            },
            methods: {
                onInput: function onInput(e) {
                    this.currentIndex = -1;
                    this.getLocalSug();
                    this.autoSetItem();
                    this.inputCallback && this.inputCallback();
                },
                onBlur: function onBlur() {
                    var me = this;
                    setTimeout(function() {
                        me.currentIndex = -1;
                        me.list = [];
                    }, 200);
                },
                changeCurrent: function changeCurrent(offset) {
                    this.currentIndex += offset;
                    if (offset > 0 && this.currentIndex >= this.list.length) {
                        this.currentIndex = 0;
                    } else if (offset < 0 && this.currentIndex < 0) {
                        this.currentIndex = this.list.length - 1;
                    }
                    var currentItem = this.list[this.currentIndex];
                    this.setItem(currentItem);
                },
                convert2standard: function convert2standard(data) {
                    var res = [];
                    res = data.map(function(item, index) {
                        return {
                            text: item,
                            value: item
                        };
                    });
                    return res;
                },
                arrangeLocalList: function arrangeLocalList() {
                    var sugs = this.suggestions;
                    if (this.isArray(sugs) && sugs.length > 0 && typeof sugs[0] === "string") {
                        this.localList = this.convert2standard(sugs);
                    } else {
                        this.localList = sugs;
                    }
                },
                autoSetItem: function autoSetItem() {
                    var word = this.dataText;
                    var match = this.list.filter(function(item) {
                        return item.text === word;
                    });
                    if (match.length) {
                        this.setItem(match[0]);
                    } else {
                        this.dataValue = "";
                    }
                },
                getLocalSug: function getLocalSug() {
                    var _this = this;
                    var word = this.dataText;
                    this.list = this.localList.filter(function(item) {
                        return word && _this.check ? item.text.indexOf(word) > -1 : true;
                    });
                },
                setItem: function setItem(item) {
                    this.dataValue = item.value;
                    this.dataText = item.text;
                },
                logError: function logError(msg) {
                    throw new Error("[xcui] - " + msg);
                },
                isArray: function isArray(arr) {
                    return Object.prototype.toString.call(arr) === "[object Array]";
                }
            },
            ready: function ready() {
                this.arrangeLocalList();
            }
        };
    }, function(module, exports) {}, function(module, exports) {
        module.exports = ' <div class="xcui-suggestion {{className}}" _v-49bf5116=""> <input type=text class="form-control xcui-suggestion-input" :id=id :name=name :disabled=disabled :placeholder=placeholder v-model=dataText @focus=onInput @input=onInput @blur=onBlur @keydown.up=changeCurrent(-1) @keydown.down=changeCurrent(1) @keydown.enter=onBlur _v-49bf5116=""> <ul class="xcui-suggestion-list dropdown-menu" :class="{\'show\':show}" _v-49bf5116=""> <li v-for="(index,item) in list" :class="{\'current\' : currentIndex==index}" _v-49bf5116=""> <a href=javascript:void(0) @click=setItem(item) _v-49bf5116=""> {{item.text}} </a> </li> </ul> </div> ';
    }, function(module, exports, __webpack_require__) {
        var __vue_script__, __vue_template__;
        var __vue_styles__ = {};
        __webpack_require__(2);
        __vue_script__ = __webpack_require__(1);
        __vue_template__ = __webpack_require__(3);
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

