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
            name: "xcui-pageloading",
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
            methods: {
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
                        return document.getElementById("xcui-pageloading");
                    }
                    this.addClass(document.documentElement, "xcui-pageloading-busy");
                    var progress = document.createElement("div");
                    progress.id = "xcui-pageloading";
                    progress.innerHTML = this.template;
                    var bar = progress.querySelector(this.barSelector);
                    var perc = fromStart ? "-100" : this.toBarPerc(this.status || 0);
                    var parent = document.querySelector(this.parent);
                    this.css(bar, {
                        transition: "all 0 linear",
                        transform: "translate3d(" + perc + "%,0,0)"
                    });
                    if (parent !== document.body) {
                        this.addClass(parent, "xcui-pageloading-custom-parent");
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
                                if (properties.hasOwnProperty(prop)) {
                                    value = properties[prop];
                                    if (value !== undefined && properties.hasOwnProperty(prop)) {
                                        applyCss(element, prop, value);
                                    }
                                }
                            }
                        } else {
                            applyCss(element, args[1], args[2]);
                        }
                    };
                }(),
                remove: function remove() {
                    this.removeClass(document.documentElement, "xcui-pageloading-busy");
                    this.removeClass(document.querySelector(this.parent), "xcui-pageloading-custom-parent");
                    var progress = document.getElementById("xcui-pageloading");
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
                    }
                    return "margin";
                },
                toBarPerc: function toBarPerc(n) {
                    return (-1 + n) * 100;
                },
                isStarted: function isStarted() {
                    return typeof this.status === "number";
                },
                isRendered: function isRendered() {
                    return !!document.getElementById("xcui-pageloading");
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
                },
                hasClass: function hasClass(element, name) {
                    var list = typeof element === "string" ? element : this.classList(element);
                    return list.indexOf(" " + name + " ") >= 0;
                },
                classList: function classList(element) {
                    return (" " + (element && element.className || "") + " ").replace(/\s+/gi, " ");
                },
                trickle: function trickle() {
                    return this.inc();
                },
                inc: function inc(amount) {
                    var n = this.status;
                    if (!n) {
                        return this.start();
                    } else if (n > 1) {
                        return;
                    }
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
            }
        };
<<<<<<< HEAD
    }, function(module, exports) {}, function(module, exports) {
        module.exports = " <div class=xcui-pageloading> <div class=bar role=bar> <div class=peg></div> </div> </div> ";
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

