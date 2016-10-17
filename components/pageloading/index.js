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
        module.exports = __webpack_require__(23);
    }, function(module, exports, __webpack_require__) {
        module.exports = !__webpack_require__(4)(function() {
            return Object.defineProperty({}, "a", {
                get: function() {
                    return 7;
                }
            }).a != 7;
        });
    }, function(module, exports) {
        module.exports = function(it) {
            return typeof it === "object" ? it !== null : typeof it === "function";
        };
    }, function(module, exports) {
        var core = module.exports = {
            version: "2.4.0"
        };
        if (typeof __e == "number") __e = core;
    }, function(module, exports) {
        module.exports = function(exec) {
            try {
                return !!exec();
            } catch (e) {
                return true;
            }
        };
    }, function(module, exports) {
        var global = module.exports = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
        if (typeof __g == "number") __g = global;
    }, function(module, exports, __webpack_require__) {
        var anObject = __webpack_require__(12), IE8_DOM_DEFINE = __webpack_require__(17), toPrimitive = __webpack_require__(19), dP = Object.defineProperty;
        exports.f = __webpack_require__(1) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
            anObject(O);
            P = toPrimitive(P, true);
            anObject(Attributes);
            if (IE8_DOM_DEFINE) try {
                return dP(O, P, Attributes);
            } catch (e) {}
            if ("get" in Attributes || "set" in Attributes) throw TypeError("Accessors not supported!");
            if ("value" in Attributes) O[P] = Attributes.value;
            return O;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _defineProperty2 = __webpack_require__(9);
        var _defineProperty3 = _interopRequireDefault(_defineProperty2);
        var _methods;
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        exports.default = {
            name: "xcui-progress",
            data: function data() {
                return {
                    easing: "linear",
                    positionUsing: "",
                    status: null,
                    template: '<div class="bar" role="bar"><div class="peg"></div></div>',
                    parent: "body",
                    barSelector: '[role="bar"]'
                };
            },
            props: {
                active: {
                    type: Boolean,
                    "default": false
                },
                minimum: {
                    type: Number,
                    "default": .08
                },
                speed: {
                    type: Number,
                    "default": 350
                },
                trickle: {
                    type: Boolean,
                    "default": true
                },
                trickleSpeed: {
                    type: Boolean,
                    "default": 250
                }
            },
            methods: (_methods = {
                set: function set(n) {
                    var started = this.isStarted();
                    n = this.clamp(n, this.minimum, 1);
                    this.status = n === 1 ? null : n;
                    var progress = this.render(!started);
                    var bar = progress.querySelector(this.barSelector);
                    var speed = this.speed;
                    var ease = this.easing;
                    var me = this;
                    progress.offsetWidth;
                    var test = this.queue;
                    test(function(next) {
                        if (me.positionUsing === "") {
                            me.positionUsing = me.getPositioningCSS();
                        }
                        me.css(bar, me.barPositionCSS(n, speed, ease));
                        if (n === 1) {
                            me.css(progress, {
                                transition: "none",
                                opacity: 1
                            });
                            progress.offsetWidth;
                            setTimeout(function() {
                                me.css(progress, {
                                    transition: "all " + speed + "ms linear",
                                    opacity: 0
                                });
                                setTimeout(function() {
                                    me.remove();
                                    next();
                                }, speed);
                            }, speed);
                        } else {
                            setTimeout(next, speed);
                        }
                    });
                    return this;
                },
                start: function start() {
                    var _this = this;
                    if (!this.status) {
                        this.set(0);
                    }
                    var work = function work() {
                        setTimeout(function() {
                            if (!_this.status) {
                                return;
                            }
                            _this.trickle();
                            work();
                        }, _this.trickleSpeed);
                    };
                    if (this.trickle) {
                        work();
                    }
                    return this;
                },
                done: function done(force) {
                    if (!force && !this.status) {
                        return this;
                    }
                    return this.inc(.3 + .5 * Math.random()).set(1);
                },
                queue: function() {
                    var pending = [];
                    function next() {
                        var fn = pending.shift();
                        if (fn) {
                            fn(next);
                        }
                    }
                    return function(fn) {
                        pending.push(fn);
                        if (pending.length === 1) {
                            next();
                        }
                    };
                }(),
                render: function render(fromStart) {
                    if (this.isRendered()) {
                        return document.getElementById("nprogress");
                    }
                    this.addClass(document.documentElement, "nprogress-busy");
                    var progress = document.createElement("div");
                    progress.id = "nprogress";
                    progress.innerHTML = this.template;
                    var bar = progress.querySelector(this.barSelector);
                    var perc = fromStart ? "-100" : this.toBarPerc(this.status || 0);
                    var parent = document.querySelector(this.parent);
                    var spinner = void 0;
                    this.css(bar, {
                        transition: "all 0 linear",
                        transform: "translate3d(" + perc + "%,0,0)"
                    });
                    if (parent !== document.body) {
                        this.addClass(parent, "nprogress-custom-parent");
                    }
                    parent.appendChild(progress);
                    return progress;
                },
                clamp: function clamp(n, min, max) {
                    if (n < min) {
                        return min;
                    }
                    if (n > max) {
                        return max;
                    }
                    return n;
                },
                barPositionCSS: function barPositionCSS(n, speed, ease) {
                    var barCSS = void 0;
                    if (this.positionUsing === "translate3d") {
                        barCSS = {
                            transform: "translate3d(" + this.toBarPerc(n) + "%,0,0)"
                        };
                    } else if (this.positionUsing === "translate") {
                        barCSS = {
                            transform: "translate(" + this.toBarPerc(n) + "%,0)"
                        };
                    } else {
                        barCSS = {
                            "margin-left": this.toBarPerc(n) + "%"
                        };
                    }
                    barCSS.transition = "all " + speed + "ms " + ease;
                    return barCSS;
                },
                css: function() {
                    var cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];
                    var cssProps = {};
                    function camelCase(string) {
                        return string.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(match, letter) {
                            return letter.toUpperCase();
                        });
                    }
                    function getVendorProp(name) {
                        var style = document.body.style;
                        if (name in style) {
                            return name;
                        }
                        var i = cssPrefixes.length;
                        var capName = name.charAt(0).toUpperCase() + name.slice(1);
                        var vendorName = void 0;
                        while (i--) {
                            vendorName = cssPrefixes[i] + capName;
                            if (vendorName in style) {
                                return vendorName;
                            }
                        }
                        return name;
                    }
                    function getStyleProp(name) {
                        name = camelCase(name);
                        return cssProps[name] || (cssProps[name] = getVendorProp(name));
                    }
                    function applyCss(element, prop, value) {
                        prop = getStyleProp(prop);
                        element.style[prop] = value;
                    }
                    return function(element, properties) {
                        for (var _len = arguments.length, argus = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                            argus[_key - 2] = arguments[_key];
                        }
                        var args = argus;
                        var prop = void 0;
                        var value = void 0;
                        if (args.length === 0) {
                            for (prop in properties) {
                                value = properties[prop];
                                if (value !== undefined && properties.hasOwnProperty(prop)) {
                                    applyCss(element, prop, value);
                                }
                            }
                        } else {
                            applyCss(element, args[1], args[2]);
                        }
                    };
                }(),
                remove: function remove() {
                    this.removeClass(document.documentElement, "nprogress-busy");
                    this.removeClass(document.querySelector(this.parent), "nprogress-custom-parent");
                    var progress = document.getElementById("nprogress");
                    progress && this.removeElement(progress);
                },
                removeClass: function removeClass(element) {
                    var oldList = this.classList(element);
                    var newList = void 0;
                    if (!this.hasClass(element, name)) {
                        return;
                    }
                    newList = oldList.replace(" " + name + " ", " ");
                    element.className = newList.substring(1, newList.length - 1);
                },
                classList: function classList(element) {
                    return (" " + (element && element.className || "") + " ").replace(/\s+/gi, " ");
                },
                getPositioningCSS: function getPositioningCSS() {
                    var bodyStyle = document.body.style;
                    var vendorPrefix = void 0;
                    if ("WebkitTransform" in bodyStyle) {
                        vendorPrefix = "Webkit";
                    } else if ("MozTransform" in bodyStyle) {
                        vendorPrefix = "Moz";
                    } else if ("msTransform" in bodyStyle) {
                        vendorPrefix = "ms";
                    } else if ("OTransform" in bodyStyle) {
                        vendorPrefix = "O";
                    } else {
                        vendorPrefix = "";
                    }
                    if (vendorPrefix + "Perspective" in bodyStyle) {
                        return "translate3d";
                    } else if (vendorPrefix + "Transform" in bodyStyle) {
                        return "translate";
                    } else {
                        return "margin";
                    }
                },
                toBarPerc: function toBarPerc(n) {
                    return (-1 + n) * 100;
                },
                isStarted: function isStarted() {
                    return typeof this.status === "number";
                },
                isRendered: function isRendered() {
                    return !!document.getElementById("nprogress");
                },
                addClass: function addClass(element, name) {
                    var oldList = this.classList(element);
                    var newList = oldList + name;
                    if (this.hasClass(oldList, name)) {
                        return;
                    }
                    element.className = newList.substring(1);
                },
                removeElement: function removeElement(element) {
                    element && element.parentNode && element.parentNode.removeChild(element);
                }
            }, (0, _defineProperty3.default)(_methods, "toBarPerc", function toBarPerc(n) {
                return (-1 + n) * 100;
            }), (0, _defineProperty3.default)(_methods, "hasClass", function hasClass(element, name) {
                var list = typeof element === "string" ? element : this.classList(element);
                return list.indexOf(" " + name + " ") >= 0;
            }), (0, _defineProperty3.default)(_methods, "classList", function classList(element) {
                return (" " + (element && element.className || "") + " ").replace(/\s+/gi, " ");
            }), (0, _defineProperty3.default)(_methods, "trickle", function trickle() {
                return this.inc();
            }), (0, _defineProperty3.default)(_methods, "inc", function inc(amount) {
                var n = this.status;
                if (!n) {
                    return this.start();
                } else if (n > 1) {
                    return;
                } else {
                    if (typeof amount !== "number") {
                        if (n >= 0 && n < .25) {
                            amount = (Math.random() * (5 - 3 + 1) + 3) / 100;
                        } else if (n >= .25 && n < .65) {
                            amount = Math.random() * 3 / 100;
                        } else if (n >= .65 && n < .9) {
                            amount = Math.random() * 2 / 100;
                        } else if (n >= .9 && n < .99) {
                            amount = .005;
                        } else {
                            amount = 0;
                        }
                    }
                    n = this.clamp(n + amount, 0, .994);
                    return this.set(n);
                }
            }), _methods)
        };
    }, function(module, exports, __webpack_require__) {
        module.exports = {
            "default": __webpack_require__(10),
            __esModule: true
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        exports.__esModule = true;
        var _defineProperty = __webpack_require__(8);
        var _defineProperty2 = _interopRequireDefault(_defineProperty);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        exports.default = function(obj, key, value) {
            if (key in obj) {
                (0, _defineProperty2.default)(obj, key, {
                    value: value,
                    enumerable: true,
                    configurable: true,
                    writable: true
                });
            } else {
                obj[key] = value;
            }
            return obj;
        };
    }, function(module, exports, __webpack_require__) {
        __webpack_require__(20);
        var $Object = __webpack_require__(3).Object;
        module.exports = function defineProperty(it, key, desc) {
            return $Object.defineProperty(it, key, desc);
        };
    }, function(module, exports) {
        module.exports = function(it) {
            if (typeof it != "function") throw TypeError(it + " is not a function!");
            return it;
        };
    }, function(module, exports, __webpack_require__) {
        var isObject = __webpack_require__(2);
        module.exports = function(it) {
            if (!isObject(it)) throw TypeError(it + " is not an object!");
            return it;
        };
    }, function(module, exports, __webpack_require__) {
        var aFunction = __webpack_require__(11);
        module.exports = function(fn, that, length) {
            aFunction(fn);
            if (that === undefined) return fn;
            switch (length) {
              case 1:
                return function(a) {
                    return fn.call(that, a);
                };

              case 2:
                return function(a, b) {
                    return fn.call(that, a, b);
                };

              case 3:
                return function(a, b, c) {
                    return fn.call(that, a, b, c);
                };
            }
            return function() {
                return fn.apply(that, arguments);
            };
        };
    }, function(module, exports, __webpack_require__) {
        var isObject = __webpack_require__(2), document = __webpack_require__(5).document, is = isObject(document) && isObject(document.createElement);
        module.exports = function(it) {
            return is ? document.createElement(it) : {};
        };
    }, function(module, exports, __webpack_require__) {
        var global = __webpack_require__(5), core = __webpack_require__(3), ctx = __webpack_require__(13), hide = __webpack_require__(16), PROTOTYPE = "prototype";
        var $export = function(type, name, source) {
            var IS_FORCED = type & $export.F, IS_GLOBAL = type & $export.G, IS_STATIC = type & $export.S, IS_PROTO = type & $export.P, IS_BIND = type & $export.B, IS_WRAP = type & $export.W, exports = IS_GLOBAL ? core : core[name] || (core[name] = {}), expProto = exports[PROTOTYPE], target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE], key, own, out;
            if (IS_GLOBAL) source = name;
            for (key in source) {
                own = !IS_FORCED && target && target[key] !== undefined;
                if (own && key in exports) continue;
                out = own ? target[key] : source[key];
                exports[key] = IS_GLOBAL && typeof target[key] != "function" ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? function(C) {
                    var F = function(a, b, c) {
                        if (this instanceof C) {
                            switch (arguments.length) {
                              case 0:
                                return new C();

                              case 1:
                                return new C(a);

                              case 2:
                                return new C(a, b);
                            }
                            return new C(a, b, c);
                        }
                        return C.apply(this, arguments);
                    };
                    F[PROTOTYPE] = C[PROTOTYPE];
                    return F;
                }(out) : IS_PROTO && typeof out == "function" ? ctx(Function.call, out) : out;
                if (IS_PROTO) {
                    (exports.virtual || (exports.virtual = {}))[key] = out;
                    if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
                }
            }
        };
        $export.F = 1;
        $export.G = 2;
        $export.S = 4;
        $export.P = 8;
        $export.B = 16;
        $export.W = 32;
        $export.U = 64;
        $export.R = 128;
        module.exports = $export;
    }, function(module, exports, __webpack_require__) {
        var dP = __webpack_require__(6), createDesc = __webpack_require__(18);
        module.exports = __webpack_require__(1) ? function(object, key, value) {
            return dP.f(object, key, createDesc(1, value));
        } : function(object, key, value) {
            object[key] = value;
            return object;
        };
    }, function(module, exports, __webpack_require__) {
        module.exports = !__webpack_require__(1) && !__webpack_require__(4)(function() {
            return Object.defineProperty(__webpack_require__(14)("div"), "a", {
                get: function() {
                    return 7;
                }
            }).a != 7;
        });
    }, function(module, exports) {
        module.exports = function(bitmap, value) {
            return {
                enumerable: !(bitmap & 1),
                configurable: !(bitmap & 2),
                writable: !(bitmap & 4),
                value: value
            };
        };
    }, function(module, exports, __webpack_require__) {
        var isObject = __webpack_require__(2);
        module.exports = function(it, S) {
            if (!isObject(it)) return it;
            var fn, val;
            if (S && typeof (fn = it.toString) == "function" && !isObject(val = fn.call(it))) return val;
            if (typeof (fn = it.valueOf) == "function" && !isObject(val = fn.call(it))) return val;
            if (!S && typeof (fn = it.toString) == "function" && !isObject(val = fn.call(it))) return val;
            throw TypeError("Can't convert object to primitive value");
        };
    }, function(module, exports, __webpack_require__) {
        var $export = __webpack_require__(15);
        $export($export.S + $export.F * !__webpack_require__(1), "Object", {
            defineProperty: __webpack_require__(6).f
        });
    }, function(module, exports) {}, function(module, exports) {
        module.exports = " <div class=xcui-top-progress> <div class=bar role=bar> <div class=peg></div> <div class=spinner role=spinner> </div> <div class=spinner-icon></div> </div> </div> ";
    }, function(module, exports, __webpack_require__) {
        var __vue_script__, __vue_template__;
        var __vue_styles__ = {};
        __webpack_require__(21);
        __vue_script__ = __webpack_require__(7);
        __vue_template__ = __webpack_require__(22);
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

