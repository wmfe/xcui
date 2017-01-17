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
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _eventlistener = __webpack_require__(2);
        var _eventlistener2 = _interopRequireDefault(_eventlistener);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
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
                    default: ""
                },
                during: {
                    type: Number,
                    default: 50
                },
                className: {
                    type: String,
                    default: ""
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
                    $event.currentTarget.appendChild(this.$refs.dragele);
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
            mounted: function mounted() {
                var _this = this;
                this.$nextTick(function() {
                    var targetElement = document.body;
                    if (_this.targetElement) {
                        targetElement = document.getElementById(_this.targetElement);
                    }
                    var me = _this;
                    var scrollCall = function scrollCall() {
                        if (targetElement.getBoundingClientRect().top < 0) {
                            me.show = true;
                        } else {
                            me.show = false;
                        }
                    };
                    me.scrollListener = _eventlistener2.default.listen(window, "scroll", scrollCall);
                });
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
    }, function(module, exports) {}, function(module, exports, __webpack_require__) {
        var __vue_exports__, __vue_options__;
        var __vue_styles__ = {};
        __webpack_require__(3);
        __vue_exports__ = __webpack_require__(1);
        var __vue_template__ = __webpack_require__(5);
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
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c("div", {
                    staticClass: "xcui-scrolltop"
                }, [ _c("div", {
                    ref: "dropa",
                    staticClass: "xcui-scrolltop-area xcui-scrolltop-corner",
                    class: {
                        "xcui-scrolltop-dropin": _vm.dropin.corner
                    },
                    attrs: {
                        id: "corner"
                    },
                    on: {
                        dragover: function($event) {
                            _vm.allowDrop($event);
                        },
                        dragenter: function($event) {
                            _vm.dragenter($event);
                        },
                        drop: function($event) {
                            _vm.ondrop($event);
                        }
                    }
                }, [ _c("transition", {
                    attrs: {
                        name: "fadein"
                    }
                }, [ _c("div", {
                    directives: [ {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.show,
                        expression: "show"
                    } ],
                    ref: "dragele",
                    staticClass: "glyphicon glyphicon-circle-arrow-up xcui-scrolltop-init",
                    class: _vm.className,
                    attrs: {
                        draggable: "true",
                        id: "dragEle"
                    },
                    on: {
                        dragstart: function($event) {
                            _vm.dragStart($event);
                        },
                        dragleave: function($event) {
                            _vm.dragleave($event);
                        },
                        dragend: function($event) {
                            _vm.dragend($event);
                        },
                        click: function($event) {
                            _vm.backTop($event);
                        }
                    }
                }) ]) ], 1), _vm._v(" "), _c("div", {
                    ref: "dropb",
                    staticClass: "xcui-scrolltop-area xcui-scrolltop-bottom",
                    class: {
                        "xcui-scrolltop-dropin": _vm.dropin.bottom
                    },
                    attrs: {
                        id: "bottom"
                    },
                    on: {
                        dragover: function($event) {
                            _vm.allowDrop($event);
                        },
                        dragenter: function($event) {
                            _vm.dragenter($event);
                        },
                        drop: function($event) {
                            _vm.ondrop($event);
                        }
                    }
                }), _vm._v(" "), _c("div", {
                    ref: "dropc",
                    staticClass: "xcui-scrolltop-area xcui-scrolltop-right",
                    class: {
                        "xcui-scrolltop-dropin": _vm.dropin.right
                    },
                    attrs: {
                        id: "right"
                    },
                    on: {
                        dragover: function($event) {
                            _vm.allowDrop($event);
                        },
                        dragenter: function($event) {
                            _vm.dragenter($event);
                        },
                        drop: function($event) {
                            _vm.ondrop($event);
                        }
                    }
                }) ]);
            },
            staticRenderFns: []
        };
    } ]);
});

