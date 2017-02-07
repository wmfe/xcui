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
        module.exports = __webpack_require__(5);
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _eventlistener = __webpack_require__(2);
        var _eventlistener2 = _interopRequireDefault(_eventlistener);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        var Quad = {
            easeIn: function easeIn(t, b, c, d) {
                return c * (t /= d) * t + b;
            },
            easeOut: function easeOut(t, b, c, d) {
                return -c * (t /= d) * (t - 2) + b;
            },
            easeInOut: function easeInOut(t, b, c, d) {
                if ((t /= d / 2) < 1) {
                    return c / 2 * t * t + b;
                }
                return -c / 2 * (--t * (t - 2) - 1) + b;
            }
        };
        exports.default = {
            name: "xcui-scrolltop",
            props: {
                targetElement: {
                    type: String,
                    "default": ""
                },
                during: {
                    type: Number,
                    "default": 50
                },
                className: {
                    type: String,
                    "default": ""
                }
            },
            data: function data() {
                return {
                    dropin: {
                        corner: true,
                        bottom: false,
                        right: false
                    },
                    show: false,
                    scrollListener: null
                };
            },
            methods: {
                allowDrop: function allowDrop($event) {
                    $event.preventDefault();
                },
                dragStart: function dragStart($event) {},
                dragenter: function dragenter($event) {},
                ondrop: function ondrop($event) {
                    for (var i in this.dropin) {
                        if (this.dropin[i]) {
                            this.dropin[i] = false;
                        }
                    }
                    $event.currentTarget.appendChild(this.$els.dragele);
                    var dropId = $event.currentTarget.id;
                    this.dropin[dropId] = true;
                },
                dragleave: function dragleave($event) {},
                dragend: function dragend($event) {},
                backTop: function backTop($event) {
                    var targetElement = document.getElementById(this.targetElement);
                    this.moveTop(targetElement);
                },
                moveTop: function moveTop(obj) {
                    if (!obj) {
                        obj = document.body;
                    }
                    var road = obj.getBoundingClientRect().top;
                    window.requestAnimationFrame(moveAction);
                    var start = 0;
                    var during = this.during;
                    var begin = document.body.scrollTop;
                    function moveAction(timestamp) {
                        start++;
                        var locTop = Quad.easeOut(start, 0, road, during);
                        var result = begin + locTop;
                        document.body.scrollTop = result;
                        if (start < during) {
                            window.requestAnimationFrame(moveAction);
                        }
                    }
                }
            },
            ready: function ready() {
                var targetElement = document.body;
                if (this.targetElement) {
                    targetElement = document.getElementById(this.targetElement);
                }
                var me = this;
                var scrollCall = function scrollCall() {
                    if (targetElement.getBoundingClientRect().top < 0) {
                        me.show = true;
                    } else {
                        me.show = false;
                    }
                };
                me.scrollListener = _eventlistener2.default.listen(window, "scroll", scrollCall);
            },
            destroyed: function destroyed() {
                this.scrollListener.remove();
            }
        };
    }, function(module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = {
            listen: function listen(target, eventType, callback) {
                if (target.addEventListener) {
                    target.addEventListener(eventType, callback, false);
                    return {
                        remove: function remove() {
                            target.removeEventListener(eventType, callback, false);
                        }
                    };
                } else if (target.attachEvent) {
                    target.attachEvent("on" + eventType, callback);
                    return {
                        remove: function remove() {
                            target.detachEvent("on" + eventType, callback);
                        }
                    };
                }
            }
        };
    }, function(module, exports) {}, function(module, exports) {
        module.exports = ' <div class=xcui-scrolltop> <div v-el:dropa id=corner class="xcui-scrolltop-area xcui-scrolltop-corner" :class="{\'xcui-scrolltop-dropin\':dropin.corner}" @dragover=allowDrop($event) @dragenter=dragenter($event) @drop=ondrop($event)> <div draggable=true v-el:dragele id=dragEle class="glyphicon glyphicon-circle-arrow-up xcui-scrolltop-init" @dragstart=dragStart($event) @dragleave=dragleave($event) @dragend=dragend($event) @click=backTop($event) transition=fadein v-show=show :class=className></div> </div> <div v-el:dropb id=bottom class="xcui-scrolltop-area xcui-scrolltop-bottom" :class="{\'xcui-scrolltop-dropin\':dropin.bottom}" @dragover=allowDrop($event) @dragenter=dragenter($event) @drop=ondrop($event)> </div> <div v-el:dropc id=right class="xcui-scrolltop-area xcui-scrolltop-right" :class="{\'xcui-scrolltop-dropin\':dropin.right}" @dragover=allowDrop($event) @dragenter=dragenter($event) @drop=ondrop($event)></div> </div> ';
    }, function(module, exports, __webpack_require__) {
        var __vue_script__, __vue_template__;
        var __vue_styles__ = {};
        __webpack_require__(3);
        __vue_script__ = __webpack_require__(1);
        __vue_template__ = __webpack_require__(4);
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

