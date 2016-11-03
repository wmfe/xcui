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
        module.exports = __webpack_require__(78);
    }, function(module, exports) {
        var global = module.exports = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
        if (typeof __g == "number") __g = global;
    }, function(module, exports) {
        var hasOwnProperty = {}.hasOwnProperty;
        module.exports = function(it, key) {
            return hasOwnProperty.call(it, key);
        };
    }, function(module, exports, __webpack_require__) {
        var IObject = __webpack_require__(53), defined = __webpack_require__(15);
        module.exports = function(it) {
            return IObject(defined(it));
        };
    }, function(module, exports, __webpack_require__) {
        module.exports = !__webpack_require__(9)(function() {
            return Object.defineProperty({}, "a", {
                get: function() {
                    return 7;
                }
            }).a != 7;
        });
    }, function(module, exports, __webpack_require__) {
        var dP = __webpack_require__(6), createDesc = __webpack_require__(13);
        module.exports = __webpack_require__(4) ? function(object, key, value) {
            return dP.f(object, key, createDesc(1, value));
        } : function(object, key, value) {
            object[key] = value;
            return object;
        };
    }, function(module, exports, __webpack_require__) {
        var anObject = __webpack_require__(11), IE8_DOM_DEFINE = __webpack_require__(31), toPrimitive = __webpack_require__(25), dP = Object.defineProperty;
        exports.f = __webpack_require__(4) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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
        var store = __webpack_require__(23)("wks"), uid = __webpack_require__(14), Symbol = __webpack_require__(1).Symbol, USE_SYMBOL = typeof Symbol == "function";
        var $exports = module.exports = function(name) {
            return store[name] || (store[name] = USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)("Symbol." + name));
        };
        $exports.store = store;
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
    }, function(module, exports, __webpack_require__) {
        var $keys = __webpack_require__(36), enumBugKeys = __webpack_require__(16);
        module.exports = Object.keys || function keys(O) {
            return $keys(O, enumBugKeys);
        };
    }, function(module, exports, __webpack_require__) {
        var isObject = __webpack_require__(12);
        module.exports = function(it) {
            if (!isObject(it)) throw TypeError(it + " is not an object!");
            return it;
        };
    }, function(module, exports) {
        module.exports = function(it) {
            return typeof it === "object" ? it !== null : typeof it === "function";
        };
    }, function(module, exports) {
        module.exports = function(bitmap, value) {
            return {
                enumerable: !(bitmap & 1),
                configurable: !(bitmap & 2),
                writable: !(bitmap & 4),
                value: value
            };
        };
    }, function(module, exports) {
        var id = 0, px = Math.random();
        module.exports = function(key) {
            return "Symbol(".concat(key === undefined ? "" : key, ")_", (++id + px).toString(36));
        };
    }, function(module, exports) {
        module.exports = function(it) {
            if (it == undefined) throw TypeError("Can't call method on  " + it);
            return it;
        };
    }, function(module, exports) {
        module.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    }, function(module, exports, __webpack_require__) {
        var global = __webpack_require__(1), core = __webpack_require__(8), ctx = __webpack_require__(50), hide = __webpack_require__(5), PROTOTYPE = "prototype";
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
    }, function(module, exports) {
        module.exports = {};
    }, function(module, exports) {
        module.exports = true;
    }, function(module, exports) {
        exports.f = {}.propertyIsEnumerable;
    }, function(module, exports, __webpack_require__) {
        var def = __webpack_require__(6).f, has = __webpack_require__(2), TAG = __webpack_require__(7)("toStringTag");
        module.exports = function(it, tag, stat) {
            if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
                configurable: true,
                value: tag
            });
        };
    }, function(module, exports, __webpack_require__) {
        var shared = __webpack_require__(23)("keys"), uid = __webpack_require__(14);
        module.exports = function(key) {
            return shared[key] || (shared[key] = uid(key));
        };
    }, function(module, exports, __webpack_require__) {
        var global = __webpack_require__(1), SHARED = "__core-js_shared__", store = global[SHARED] || (global[SHARED] = {});
        module.exports = function(key) {
            return store[key] || (store[key] = {});
        };
    }, function(module, exports) {
        var ceil = Math.ceil, floor = Math.floor;
        module.exports = function(it) {
            return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
        };
    }, function(module, exports, __webpack_require__) {
        var isObject = __webpack_require__(12);
        module.exports = function(it, S) {
            if (!isObject(it)) return it;
            var fn, val;
            if (S && typeof (fn = it.toString) == "function" && !isObject(val = fn.call(it))) return val;
            if (typeof (fn = it.valueOf) == "function" && !isObject(val = fn.call(it))) return val;
            if (!S && typeof (fn = it.toString) == "function" && !isObject(val = fn.call(it))) return val;
            throw TypeError("Can't convert object to primitive value");
        };
    }, function(module, exports, __webpack_require__) {
        var global = __webpack_require__(1), core = __webpack_require__(8), LIBRARY = __webpack_require__(19), wksExt = __webpack_require__(27), defineProperty = __webpack_require__(6).f;
        module.exports = function(name) {
            var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
            if (name.charAt(0) != "_" && !(name in $Symbol)) defineProperty($Symbol, name, {
                value: wksExt.f(name)
            });
        };
    }, function(module, exports, __webpack_require__) {
        exports.f = __webpack_require__(7);
    }, function(module, exports, __webpack_require__) {
        "use strict";
        exports.__esModule = true;
        var _iterator = __webpack_require__(43);
        var _iterator2 = _interopRequireDefault(_iterator);
        var _symbol = __webpack_require__(42);
        var _symbol2 = _interopRequireDefault(_symbol);
        var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj;
        };
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function(obj) {
            return typeof obj === "undefined" ? "undefined" : _typeof(obj);
        } : function(obj) {
            return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
        };
    }, function(module, exports) {
        var toString = {}.toString;
        module.exports = function(it) {
            return toString.call(it).slice(8, -1);
        };
    }, function(module, exports, __webpack_require__) {
        var isObject = __webpack_require__(12), document = __webpack_require__(1).document, is = isObject(document) && isObject(document.createElement);
        module.exports = function(it) {
            return is ? document.createElement(it) : {};
        };
    }, function(module, exports, __webpack_require__) {
        module.exports = !__webpack_require__(4) && !__webpack_require__(9)(function() {
            return Object.defineProperty(__webpack_require__(30)("div"), "a", {
                get: function() {
                    return 7;
                }
            }).a != 7;
        });
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var LIBRARY = __webpack_require__(19), $export = __webpack_require__(17), redefine = __webpack_require__(37), hide = __webpack_require__(5), has = __webpack_require__(2), Iterators = __webpack_require__(18), $iterCreate = __webpack_require__(55), setToStringTag = __webpack_require__(21), getPrototypeOf = __webpack_require__(62), ITERATOR = __webpack_require__(7)("iterator"), BUGGY = !([].keys && "next" in [].keys()), FF_ITERATOR = "@@iterator", KEYS = "keys", VALUES = "values";
        var returnThis = function() {
            return this;
        };
        module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
            $iterCreate(Constructor, NAME, next);
            var getMethod = function(kind) {
                if (!BUGGY && kind in proto) return proto[kind];
                switch (kind) {
                  case KEYS:
                    return function keys() {
                        return new Constructor(this, kind);
                    };

                  case VALUES:
                    return function values() {
                        return new Constructor(this, kind);
                    };
                }
                return function entries() {
                    return new Constructor(this, kind);
                };
            };
            var TAG = NAME + " Iterator", DEF_VALUES = DEFAULT == VALUES, VALUES_BUG = false, proto = Base.prototype, $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT], $default = $native || getMethod(DEFAULT), $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod("entries") : undefined, $anyNative = NAME == "Array" ? proto.entries || $native : $native, methods, key, IteratorPrototype;
            if ($anyNative) {
                IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
                if (IteratorPrototype !== Object.prototype) {
                    setToStringTag(IteratorPrototype, TAG, true);
                    if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
                }
            }
            if (DEF_VALUES && $native && $native.name !== VALUES) {
                VALUES_BUG = true;
                $default = function values() {
                    return $native.call(this);
                };
            }
            if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
                hide(proto, ITERATOR, $default);
            }
            Iterators[NAME] = $default;
            Iterators[TAG] = returnThis;
            if (DEFAULT) {
                methods = {
                    values: DEF_VALUES ? $default : getMethod(VALUES),
                    keys: IS_SET ? $default : getMethod(KEYS),
                    entries: $entries
                };
                if (FORCED) for (key in methods) {
                    if (!(key in proto)) redefine(proto, key, methods[key]);
                } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
            }
            return methods;
        };
    }, function(module, exports, __webpack_require__) {
        var anObject = __webpack_require__(11), dPs = __webpack_require__(59), enumBugKeys = __webpack_require__(16), IE_PROTO = __webpack_require__(22)("IE_PROTO"), Empty = function() {}, PROTOTYPE = "prototype";
        var createDict = function() {
            var iframe = __webpack_require__(30)("iframe"), i = enumBugKeys.length, lt = "<", gt = ">", iframeDocument;
            iframe.style.display = "none";
            __webpack_require__(52).appendChild(iframe);
            iframe.src = "javascript:";
            iframeDocument = iframe.contentWindow.document;
            iframeDocument.open();
            iframeDocument.write(lt + "script" + gt + "document.F=Object" + lt + "/script" + gt);
            iframeDocument.close();
            createDict = iframeDocument.F;
            while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
            return createDict();
        };
        module.exports = Object.create || function create(O, Properties) {
            var result;
            if (O !== null) {
                Empty[PROTOTYPE] = anObject(O);
                result = new Empty();
                Empty[PROTOTYPE] = null;
                result[IE_PROTO] = O;
            } else result = createDict();
            return Properties === undefined ? result : dPs(result, Properties);
        };
    }, function(module, exports, __webpack_require__) {
        var $keys = __webpack_require__(36), hiddenKeys = __webpack_require__(16).concat("length", "prototype");
        exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
            return $keys(O, hiddenKeys);
        };
    }, function(module, exports) {
        exports.f = Object.getOwnPropertySymbols;
    }, function(module, exports, __webpack_require__) {
        var has = __webpack_require__(2), toIObject = __webpack_require__(3), arrayIndexOf = __webpack_require__(49)(false), IE_PROTO = __webpack_require__(22)("IE_PROTO");
        module.exports = function(object, names) {
            var O = toIObject(object), i = 0, result = [], key;
            for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
            while (names.length > i) if (has(O, key = names[i++])) {
                ~arrayIndexOf(result, key) || result.push(key);
            }
            return result;
        };
    }, function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(5);
    }, function(module, exports, __webpack_require__) {
        var defined = __webpack_require__(15);
        module.exports = function(it) {
            return Object(defined(it));
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _typeof2 = __webpack_require__(28);
        var _typeof3 = _interopRequireDefault(_typeof2);
        var _clone = __webpack_require__(40);
        var _clone2 = _interopRequireDefault(_clone);
        var _fuzzysearch = __webpack_require__(76);
        var _fuzzysearch2 = _interopRequireDefault(_fuzzysearch);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        exports.default = {
            name: "xcui-select",
            props: {
                className: {
                    type: String
                },
                selected: [ String, Array ],
                placeholder: {
                    type: String
                },
                disabled: {
                    type: Boolean,
                    "default": false
                },
                showSearch: {
                    type: Boolean,
                    "default": false
                },
                clearOnSelect: {
                    type: Boolean,
                    "default": false
                },
                searchEmptyText: {
                    type: String,
                    "default": ""
                },
                optgroup: {
                    type: Boolean,
                    "default": false
                },
                customLabel: {
                    type: Function
                },
                options: {
                    type: Array
                },
                multiple: {
                    type: Boolean,
                    "default": false
                },
                multipleMax: {
                    type: Number,
                    "default": 0
                },
                label: {
                    type: String,
                    "default": ""
                },
                closeAfterSelect: {
                    type: Boolean,
                    "default": true
                }
            },
            data: function data() {
                return {
                    searchValue: "",
                    isOpen: false,
                    selectIndex: 0,
                    value: this.selected ? (0, _clone2.default)(this.selected) : this.multiple ? [] : null
                };
            },
            methods: {
                activate: function activate() {
                    if (this.isOpen || this.disabled) {
                        return;
                    }
                    this.isOpen = true;
                    if (this.showSearch) {
                        if (this.clearOnSelect) {
                            this.searchValue = "";
                            this.options = [];
                        }
                        this.$els.search.focus();
                    } else {
                        this.$el.focus();
                    }
                },
                deactivate: function deactivate() {
                    if (!this.isOpen) {
                        return;
                    }
                    if (this.showSearch) {
                        this.$els.search.blur();
                        this.adjustSearch();
                    }
                    this.isOpen = false;
                },
                toggle: function toggle(key) {
                    if (!this.isOpen) {
                        this.activate();
                    } else {
                        this.deactivate();
                    }
                },
                getOptionLabel: function getOptionLabel(option) {
                    if (option !== null && (typeof option === "undefined" ? "undefined" : (0, _typeof3.default)(option)) === "object") {
                        if (this.customLabel) {
                            return this.customLabel(option);
                        } else if (this.label && option[this.label]) {
                            return option[this.label];
                        }
                        return option.label;
                    }
                    return option;
                },
                optgroupSelect: function optgroupSelect(parentIndex, index, option) {
                    if (this.selectIndex === parentIndex + "-" + index && this.value === option) {
                        return;
                    }
                    this.value = option;
                    this.selectIndex = parentIndex + "-" + index;
                    this.$emit("change", (0, _clone2.default)(this.value), parentIndex, index);
                    this.$emit("select", (0, _clone2.default)(this.value), parentIndex, index);
                    this.closeAfterSelect && this.deactivate();
                },
                select: function select(option) {
                    var isSelected = this.isSelected(option);
                    if (!option || option.disable) {
                        return;
                    }
                    if (this.multiple) {
                        var optionValue = option;
                        if ((typeof option === "undefined" ? "undefined" : (0, _typeof3.default)(option)) === "object") {
                            optionValue = option[this.label] || option.label;
                        }
                        if (isSelected) {
                            this.removeOption(option);
                        } else {
                            if (this.multipleMax > this.value.length || !this.multipleMax) {
                                if ((typeof option === "undefined" ? "undefined" : (0, _typeof3.default)(option)) === "object") {
                                    this.value.push(option);
                                } else {
                                    this.value.push(optionValue);
                                }
                            }
                        }
                    } else {
                        if (isSelected) {
                            return;
                        }
                        this.value = isSelected ? null : option;
                    }
                    this.$emit("change", (0, _clone2.default)(this.value));
                    this.$emit("select", (0, _clone2.default)(this.value));
                    this.closeAfterSelect && this.deactivate();
                },
                isSelected: function isSelected(option, groupIndex, index) {
                    var me = this;
                    if (!this.value) {
                        return false;
                    }
                    if (this.optgroup) {
                        return this.selectIndex === groupIndex + "-" + index;
                    }
                    if (this.multiple) {
                        if ((typeof option === "undefined" ? "undefined" : (0, _typeof3.default)(option)) === "object") {
                            return this.value.indexOf(option) > -1;
                        }
                        return this.value.indexOf(option) > -1;
                    }
                    if (this.showSearch) {
                        if ((typeof option === "undefined" ? "undefined" : (0, _typeof3.default)(option)) === "object") {
                            return this.searchValue === option[me.label];
                        }
                        return this.searchValue === option;
                    }
                    if (this.value === option && !option.disable) {
                        return true;
                    }
                    return false;
                },
                removeOption: function removeOption(option) {
                    if (this.value.length === 0) {
                        return;
                    }
                    if ((typeof option === "undefined" ? "undefined" : (0, _typeof3.default)(option)) === "object") {
                        if (this.value.indexOf(option) !== -1) {
                            this.value.splice(this.value.indexOf(option), 1);
                        }
                    }
                    this.value.$remove(option);
                    this.$emit("remove", (0, _clone2.default)(option));
                },
                indexSet: function indexSet(parentIndex, index) {
                    if (this.optgroup) {
                        this.selectIndex = parentIndex + "-" + index;
                        return;
                    }
                    this.selectIndex = index;
                },
                enterSearchValue: function enterSearchValue() {
                    if (this.filteredOptions.length > 0) {
                        this.select(this.filteredOptions[this.selectIndex]);
                    }
                    this.resetSelectIndex();
                },
                keyNext: function keyNext() {
                    var filterLen = this.filteredOptions.length;
                    if (this.selectIndex < filterLen - 1) {
                        this.selectIndex++;
                    }
                    this.resetSearchScrollTop();
                },
                keyPrev: function keyPrev() {
                    if (this.selectIndex > 0) {
                        this.selectIndex--;
                    }
                    this.resetSearchScrollTop();
                },
                resetSearchScrollTop: function resetSearchScrollTop() {
                    var index = this.selectIndex;
                    var scrollTop = this.$els.list.scrollTop;
                    var _getDropDownHeight = this.getDropDownHeight;
                    var itemHeight = _getDropDownHeight.itemHeight;
                    var listHeight = _getDropDownHeight.listHeight;
                    var listViewLen = Math.floor(listHeight / itemHeight);
                    var indexPos = index * itemHeight;
                    if (scrollTop <= indexPos - listViewLen * itemHeight) {
                        this.$els.list.scrollTop = indexPos - (listViewLen - 1) * itemHeight;
                    }
                    if (scrollTop >= indexPos) {
                        this.$els.list.scrollTop = indexPos;
                    }
                },
                resetSelectIndex: function resetSelectIndex() {
                    this.selectIndex = 0;
                    this.closeAfterSelect && this.deactivate();
                },
                adjustSearch: function adjustSearch() {
                    if (!this.showSearch) {
                        return;
                    }
                    this.searchValue = this.value ? this.currentOptionLabel : "";
                },
                reset: function reset() {
                    this.selected = "";
                    this.value = null;
                }
            },
            computed: {
                getWrapCls: function getWrapCls() {
                    var me = this;
                    var cls = [ "xcui-select" ];
                    if (this.disabled) {
                        cls.push("disabled");
                    }
                    if (this.isOpen) {
                        cls.push("xcui-select-open");
                    }
                    if (this.className) {
                        cls.push(me.className);
                    }
                    return cls.join(" ");
                },
                filteredOptions: function filteredOptions() {
                    var value = this.searchValue;
                    var me = this;
                    if (this.showSearch && this.options.length) {
                        return this.options.filter(function(item) {
                            if (typeof item !== "string") {
                                return (0, _fuzzysearch2.default)(value, item[me.label || "label"]);
                            }
                            return (0, _fuzzysearch2.default)(value, item);
                        });
                    }
                    return this.options || [];
                },
                currentOptionLabel: function currentOptionLabel() {
                    var _this = this;
                    if (!this.value) {
                        return this.placeholder;
                    }
                    if (this.multiple) {
                        return this.value.map(function(k) {
                            if ((typeof k === "undefined" ? "undefined" : (0, _typeof3.default)(k)) !== "object") {
                                return k;
                            }
                            var label = _this.label || "label";
                            return k[label];
                        }).join(",");
                    }
                    if (typeof this.value === "string") {
                        return this.value;
                    } else if (this.label) {
                        return this.value[this.label];
                    }
                    return this.value.label || "";
                },
                getDropDownHeight: function getDropDownHeight() {
                    var list = this.$els.list;
                    var item = list.children[0];
                    var itemHeight = item.currentStyle ? item.currentStyle.height : getComputedStyle(item, false).height;
                    var listHeight = list.currentStyle ? list.currentStyle.height : getComputedStyle(list, false).height;
                    return {
                        listHeight: listHeight.replace("px", ""),
                        itemHeight: itemHeight.replace("px", "")
                    };
                },
                optgroupDefaultIndex: function optgroupDefaultIndex() {
                    var me = this;
                    var selected = this.selected;
                    var indexs = [];
                    this.options.forEach(function(item, index) {
                        item.options.forEach(function(subItem, subIndex) {
                            if (typeof subItem === "string" && selected === subItem) {
                                indexs = [ index, subIndex ];
                                return;
                            }
                            if (subItem[me.label] && subItem[me.label] === selected) {
                                if (subItem[me.label].disable) {
                                    return;
                                }
                                indexs = [ index, subIndex ];
                                return;
                            }
                        });
                    });
                    return indexs;
                },
                multipleMaxShow: function multipleMaxShow() {
                    if (!this.multiple) {
                        return false;
                    }
                    return this.multiple && this.multipleMax !== 0 && this.value && this.multipleMax === this.value.length;
                }
            },
            watch: {
                options: function options() {
                    if (this.showSearch) {
                        return;
                    }
                    this.reset();
                },
                filteredOptions: function filteredOptions() {
                    var filterLen = this.filteredOptions.length;
                    if (this.selectIndex >= filterLen) {
                        this.selectIndex = filterLen > 0 ? filterLen - 1 : 0;
                    }
                },
                searchValue: function searchValue(oldVal, newVal) {
                    if (this.searchValue !== this.currentOptionLabel) {
                        this.$emit("search-change", this.searchValue);
                    }
                },
                selected: function selected() {
                    if (this.optgroup) {
                        this.value = this.selected;
                        var indexs = this.optgroupDefaultIndex;
                        this.selectIndex = indexs.join("-");
                    } else {
                        this.value = this.selected;
                    }
                }
            }
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var _keys = __webpack_require__(41);
        var _keys2 = _interopRequireDefault(_keys);
        var _typeof2 = __webpack_require__(28);
        var _typeof3 = _interopRequireDefault(_typeof2);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        var clone = function clone(obj) {
            if (Array.isArray(obj)) {
                return obj.map(clone);
            } else if (obj && (typeof obj === "undefined" ? "undefined" : (0, _typeof3.default)(obj)) === "object") {
                var cloned = {};
                var keys = (0, _keys2.default)(obj);
                for (var i = 0, l = keys.length; i < l; i++) {
                    var key = keys[i];
                    cloned[key] = clone(obj[key]);
                }
                return cloned;
            } else {
                return obj;
            }
        };
        module.exports = clone;
    }, function(module, exports, __webpack_require__) {
        module.exports = {
            "default": __webpack_require__(44),
            __esModule: true
        };
    }, function(module, exports, __webpack_require__) {
        module.exports = {
            "default": __webpack_require__(45),
            __esModule: true
        };
    }, function(module, exports, __webpack_require__) {
        module.exports = {
            "default": __webpack_require__(46),
            __esModule: true
        };
    }, function(module, exports, __webpack_require__) {
        __webpack_require__(68);
        module.exports = __webpack_require__(8).Object.keys;
    }, function(module, exports, __webpack_require__) {
        __webpack_require__(71);
        __webpack_require__(69);
        __webpack_require__(72);
        __webpack_require__(73);
        module.exports = __webpack_require__(8).Symbol;
    }, function(module, exports, __webpack_require__) {
        __webpack_require__(70);
        __webpack_require__(74);
        module.exports = __webpack_require__(27).f("iterator");
    }, function(module, exports) {
        module.exports = function(it) {
            if (typeof it != "function") throw TypeError(it + " is not a function!");
            return it;
        };
    }, function(module, exports) {
        module.exports = function() {};
    }, function(module, exports, __webpack_require__) {
        var toIObject = __webpack_require__(3), toLength = __webpack_require__(66), toIndex = __webpack_require__(65);
        module.exports = function(IS_INCLUDES) {
            return function($this, el, fromIndex) {
                var O = toIObject($this), length = toLength(O.length), index = toIndex(fromIndex, length), value;
                if (IS_INCLUDES && el != el) while (length > index) {
                    value = O[index++];
                    if (value != value) return true;
                } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
                    if (O[index] === el) return IS_INCLUDES || index || 0;
                }
                return !IS_INCLUDES && -1;
            };
        };
    }, function(module, exports, __webpack_require__) {
        var aFunction = __webpack_require__(47);
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
        var getKeys = __webpack_require__(10), gOPS = __webpack_require__(35), pIE = __webpack_require__(20);
        module.exports = function(it) {
            var result = getKeys(it), getSymbols = gOPS.f;
            if (getSymbols) {
                var symbols = getSymbols(it), isEnum = pIE.f, i = 0, key;
                while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
            }
            return result;
        };
    }, function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(1).document && document.documentElement;
    }, function(module, exports, __webpack_require__) {
        var cof = __webpack_require__(29);
        module.exports = Object("z").propertyIsEnumerable(0) ? Object : function(it) {
            return cof(it) == "String" ? it.split("") : Object(it);
        };
    }, function(module, exports, __webpack_require__) {
        var cof = __webpack_require__(29);
        module.exports = Array.isArray || function isArray(arg) {
            return cof(arg) == "Array";
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var create = __webpack_require__(33), descriptor = __webpack_require__(13), setToStringTag = __webpack_require__(21), IteratorPrototype = {};
        __webpack_require__(5)(IteratorPrototype, __webpack_require__(7)("iterator"), function() {
            return this;
        });
        module.exports = function(Constructor, NAME, next) {
            Constructor.prototype = create(IteratorPrototype, {
                next: descriptor(1, next)
            });
            setToStringTag(Constructor, NAME + " Iterator");
        };
    }, function(module, exports) {
        module.exports = function(done, value) {
            return {
                value: value,
                done: !!done
            };
        };
    }, function(module, exports, __webpack_require__) {
        var getKeys = __webpack_require__(10), toIObject = __webpack_require__(3);
        module.exports = function(object, el) {
            var O = toIObject(object), keys = getKeys(O), length = keys.length, index = 0, key;
            while (length > index) if (O[key = keys[index++]] === el) return key;
        };
    }, function(module, exports, __webpack_require__) {
        var META = __webpack_require__(14)("meta"), isObject = __webpack_require__(12), has = __webpack_require__(2), setDesc = __webpack_require__(6).f, id = 0;
        var isExtensible = Object.isExtensible || function() {
            return true;
        };
        var FREEZE = !__webpack_require__(9)(function() {
            return isExtensible(Object.preventExtensions({}));
        });
        var setMeta = function(it) {
            setDesc(it, META, {
                value: {
                    i: "O" + ++id,
                    w: {}
                }
            });
        };
        var fastKey = function(it, create) {
            if (!isObject(it)) return typeof it == "symbol" ? it : (typeof it == "string" ? "S" : "P") + it;
            if (!has(it, META)) {
                if (!isExtensible(it)) return "F";
                if (!create) return "E";
                setMeta(it);
            }
            return it[META].i;
        };
        var getWeak = function(it, create) {
            if (!has(it, META)) {
                if (!isExtensible(it)) return true;
                if (!create) return false;
                setMeta(it);
            }
            return it[META].w;
        };
        var onFreeze = function(it) {
            if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
            return it;
        };
        var meta = module.exports = {
            KEY: META,
            NEED: false,
            fastKey: fastKey,
            getWeak: getWeak,
            onFreeze: onFreeze
        };
    }, function(module, exports, __webpack_require__) {
        var dP = __webpack_require__(6), anObject = __webpack_require__(11), getKeys = __webpack_require__(10);
        module.exports = __webpack_require__(4) ? Object.defineProperties : function defineProperties(O, Properties) {
            anObject(O);
            var keys = getKeys(Properties), length = keys.length, i = 0, P;
            while (length > i) dP.f(O, P = keys[i++], Properties[P]);
            return O;
        };
    }, function(module, exports, __webpack_require__) {
        var pIE = __webpack_require__(20), createDesc = __webpack_require__(13), toIObject = __webpack_require__(3), toPrimitive = __webpack_require__(25), has = __webpack_require__(2), IE8_DOM_DEFINE = __webpack_require__(31), gOPD = Object.getOwnPropertyDescriptor;
        exports.f = __webpack_require__(4) ? gOPD : function getOwnPropertyDescriptor(O, P) {
            O = toIObject(O);
            P = toPrimitive(P, true);
            if (IE8_DOM_DEFINE) try {
                return gOPD(O, P);
            } catch (e) {}
            if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
        };
    }, function(module, exports, __webpack_require__) {
        var toIObject = __webpack_require__(3), gOPN = __webpack_require__(34).f, toString = {}.toString;
        var windowNames = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        var getWindowNames = function(it) {
            try {
                return gOPN(it);
            } catch (e) {
                return windowNames.slice();
            }
        };
        module.exports.f = function getOwnPropertyNames(it) {
            return windowNames && toString.call(it) == "[object Window]" ? getWindowNames(it) : gOPN(toIObject(it));
        };
    }, function(module, exports, __webpack_require__) {
        var has = __webpack_require__(2), toObject = __webpack_require__(38), IE_PROTO = __webpack_require__(22)("IE_PROTO"), ObjectProto = Object.prototype;
        module.exports = Object.getPrototypeOf || function(O) {
            O = toObject(O);
            if (has(O, IE_PROTO)) return O[IE_PROTO];
            if (typeof O.constructor == "function" && O instanceof O.constructor) {
                return O.constructor.prototype;
            }
            return O instanceof Object ? ObjectProto : null;
        };
    }, function(module, exports, __webpack_require__) {
        var $export = __webpack_require__(17), core = __webpack_require__(8), fails = __webpack_require__(9);
        module.exports = function(KEY, exec) {
            var fn = (core.Object || {})[KEY] || Object[KEY], exp = {};
            exp[KEY] = exec(fn);
            $export($export.S + $export.F * fails(function() {
                fn(1);
            }), "Object", exp);
        };
    }, function(module, exports, __webpack_require__) {
        var toInteger = __webpack_require__(24), defined = __webpack_require__(15);
        module.exports = function(TO_STRING) {
            return function(that, pos) {
                var s = String(defined(that)), i = toInteger(pos), l = s.length, a, b;
                if (i < 0 || i >= l) return TO_STRING ? "" : undefined;
                a = s.charCodeAt(i);
                return a < 55296 || a > 56319 || i + 1 === l || (b = s.charCodeAt(i + 1)) < 56320 || b > 57343 ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 55296 << 10) + (b - 56320) + 65536;
            };
        };
    }, function(module, exports, __webpack_require__) {
        var toInteger = __webpack_require__(24), max = Math.max, min = Math.min;
        module.exports = function(index, length) {
            index = toInteger(index);
            return index < 0 ? max(index + length, 0) : min(index, length);
        };
    }, function(module, exports, __webpack_require__) {
        var toInteger = __webpack_require__(24), min = Math.min;
        module.exports = function(it) {
            return it > 0 ? min(toInteger(it), 9007199254740991) : 0;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var addToUnscopables = __webpack_require__(48), step = __webpack_require__(56), Iterators = __webpack_require__(18), toIObject = __webpack_require__(3);
        module.exports = __webpack_require__(32)(Array, "Array", function(iterated, kind) {
            this._t = toIObject(iterated);
            this._i = 0;
            this._k = kind;
        }, function() {
            var O = this._t, kind = this._k, index = this._i++;
            if (!O || index >= O.length) {
                this._t = undefined;
                return step(1);
            }
            if (kind == "keys") return step(0, index);
            if (kind == "values") return step(0, O[index]);
            return step(0, [ index, O[index] ]);
        }, "values");
        Iterators.Arguments = Iterators.Array;
        addToUnscopables("keys");
        addToUnscopables("values");
        addToUnscopables("entries");
    }, function(module, exports, __webpack_require__) {
        var toObject = __webpack_require__(38), $keys = __webpack_require__(10);
        __webpack_require__(63)("keys", function() {
            return function keys(it) {
                return $keys(toObject(it));
            };
        });
    }, function(module, exports) {}, function(module, exports, __webpack_require__) {
        "use strict";
        var $at = __webpack_require__(64)(true);
        __webpack_require__(32)(String, "String", function(iterated) {
            this._t = String(iterated);
            this._i = 0;
        }, function() {
            var O = this._t, index = this._i, point;
            if (index >= O.length) return {
                value: undefined,
                done: true
            };
            point = $at(O, index);
            this._i += point.length;
            return {
                value: point,
                done: false
            };
        });
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var global = __webpack_require__(1), has = __webpack_require__(2), DESCRIPTORS = __webpack_require__(4), $export = __webpack_require__(17), redefine = __webpack_require__(37), META = __webpack_require__(58).KEY, $fails = __webpack_require__(9), shared = __webpack_require__(23), setToStringTag = __webpack_require__(21), uid = __webpack_require__(14), wks = __webpack_require__(7), wksExt = __webpack_require__(27), wksDefine = __webpack_require__(26), keyOf = __webpack_require__(57), enumKeys = __webpack_require__(51), isArray = __webpack_require__(54), anObject = __webpack_require__(11), toIObject = __webpack_require__(3), toPrimitive = __webpack_require__(25), createDesc = __webpack_require__(13), _create = __webpack_require__(33), gOPNExt = __webpack_require__(61), $GOPD = __webpack_require__(60), $DP = __webpack_require__(6), $keys = __webpack_require__(10), gOPD = $GOPD.f, dP = $DP.f, gOPN = gOPNExt.f, $Symbol = global.Symbol, $JSON = global.JSON, _stringify = $JSON && $JSON.stringify, PROTOTYPE = "prototype", HIDDEN = wks("_hidden"), TO_PRIMITIVE = wks("toPrimitive"), isEnum = {}.propertyIsEnumerable, SymbolRegistry = shared("symbol-registry"), AllSymbols = shared("symbols"), OPSymbols = shared("op-symbols"), ObjectProto = Object[PROTOTYPE], USE_NATIVE = typeof $Symbol == "function", QObject = global.QObject;
        var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
        var setSymbolDesc = DESCRIPTORS && $fails(function() {
            return _create(dP({}, "a", {
                get: function() {
                    return dP(this, "a", {
                        value: 7
                    }).a;
                }
            })).a != 7;
        }) ? function(it, key, D) {
            var protoDesc = gOPD(ObjectProto, key);
            if (protoDesc) delete ObjectProto[key];
            dP(it, key, D);
            if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
        } : dP;
        var wrap = function(tag) {
            var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
            sym._k = tag;
            return sym;
        };
        var isSymbol = USE_NATIVE && typeof $Symbol.iterator == "symbol" ? function(it) {
            return typeof it == "symbol";
        } : function(it) {
            return it instanceof $Symbol;
        };
        var $defineProperty = function defineProperty(it, key, D) {
            if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
            anObject(it);
            key = toPrimitive(key, true);
            anObject(D);
            if (has(AllSymbols, key)) {
                if (!D.enumerable) {
                    if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
                    it[HIDDEN][key] = true;
                } else {
                    if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
                    D = _create(D, {
                        enumerable: createDesc(0, false)
                    });
                }
                return setSymbolDesc(it, key, D);
            }
            return dP(it, key, D);
        };
        var $defineProperties = function defineProperties(it, P) {
            anObject(it);
            var keys = enumKeys(P = toIObject(P)), i = 0, l = keys.length, key;
            while (l > i) $defineProperty(it, key = keys[i++], P[key]);
            return it;
        };
        var $create = function create(it, P) {
            return P === undefined ? _create(it) : $defineProperties(_create(it), P);
        };
        var $propertyIsEnumerable = function propertyIsEnumerable(key) {
            var E = isEnum.call(this, key = toPrimitive(key, true));
            if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
            return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
        };
        var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
            it = toIObject(it);
            key = toPrimitive(key, true);
            if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
            var D = gOPD(it, key);
            if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
            return D;
        };
        var $getOwnPropertyNames = function getOwnPropertyNames(it) {
            var names = gOPN(toIObject(it)), result = [], i = 0, key;
            while (names.length > i) {
                if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
            }
            return result;
        };
        var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
            var IS_OP = it === ObjectProto, names = gOPN(IS_OP ? OPSymbols : toIObject(it)), result = [], i = 0, key;
            while (names.length > i) {
                if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
            }
            return result;
        };
        if (!USE_NATIVE) {
            $Symbol = function Symbol() {
                if (this instanceof $Symbol) throw TypeError("Symbol is not a constructor!");
                var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
                var $set = function(value) {
                    if (this === ObjectProto) $set.call(OPSymbols, value);
                    if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
                    setSymbolDesc(this, tag, createDesc(1, value));
                };
                if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, {
                    configurable: true,
                    set: $set
                });
                return wrap(tag);
            };
            redefine($Symbol[PROTOTYPE], "toString", function toString() {
                return this._k;
            });
            $GOPD.f = $getOwnPropertyDescriptor;
            $DP.f = $defineProperty;
            __webpack_require__(34).f = gOPNExt.f = $getOwnPropertyNames;
            __webpack_require__(20).f = $propertyIsEnumerable;
            __webpack_require__(35).f = $getOwnPropertySymbols;
            if (DESCRIPTORS && !__webpack_require__(19)) {
                redefine(ObjectProto, "propertyIsEnumerable", $propertyIsEnumerable, true);
            }
            wksExt.f = function(name) {
                return wrap(wks(name));
            };
        }
        $export($export.G + $export.W + $export.F * !USE_NATIVE, {
            Symbol: $Symbol
        });
        for (var symbols = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), i = 0; symbols.length > i; ) wks(symbols[i++]);
        for (var symbols = $keys(wks.store), i = 0; symbols.length > i; ) wksDefine(symbols[i++]);
        $export($export.S + $export.F * !USE_NATIVE, "Symbol", {
            "for": function(key) {
                return has(SymbolRegistry, key += "") ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
            },
            keyFor: function keyFor(key) {
                if (isSymbol(key)) return keyOf(SymbolRegistry, key);
                throw TypeError(key + " is not a symbol!");
            },
            useSetter: function() {
                setter = true;
            },
            useSimple: function() {
                setter = false;
            }
        });
        $export($export.S + $export.F * !USE_NATIVE, "Object", {
            create: $create,
            defineProperty: $defineProperty,
            defineProperties: $defineProperties,
            getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
            getOwnPropertyNames: $getOwnPropertyNames,
            getOwnPropertySymbols: $getOwnPropertySymbols
        });
        $JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function() {
            var S = $Symbol();
            return _stringify([ S ]) != "[null]" || _stringify({
                a: S
            }) != "{}" || _stringify(Object(S)) != "{}";
        })), "JSON", {
            stringify: function stringify(it) {
                if (it === undefined || isSymbol(it)) return;
                var args = [ it ], i = 1, replacer, $replacer;
                while (arguments.length > i) args.push(arguments[i++]);
                replacer = args[1];
                if (typeof replacer == "function") $replacer = replacer;
                if ($replacer || !isArray(replacer)) replacer = function(key, value) {
                    if ($replacer) value = $replacer.call(this, key, value);
                    if (!isSymbol(value)) return value;
                };
                args[1] = replacer;
                return _stringify.apply($JSON, args);
            }
        });
        $Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(5)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
        setToStringTag($Symbol, "Symbol");
        setToStringTag(Math, "Math", true);
        setToStringTag(global.JSON, "JSON", true);
    }, function(module, exports, __webpack_require__) {
        __webpack_require__(26)("asyncIterator");
    }, function(module, exports, __webpack_require__) {
        __webpack_require__(26)("observable");
    }, function(module, exports, __webpack_require__) {
        __webpack_require__(67);
        var global = __webpack_require__(1), hide = __webpack_require__(5), Iterators = __webpack_require__(18), TO_STRING_TAG = __webpack_require__(7)("toStringTag");
        for (var collections = [ "NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList" ], i = 0; i < 5; i++) {
            var NAME = collections[i], Collection = global[NAME], proto = Collection && Collection.prototype;
            if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
            Iterators[NAME] = Iterators.Array;
        }
    }, function(module, exports) {}, function(module, exports) {
        "use strict";
        function fuzzysearch(needle, haystack) {
            var tlen = haystack.length;
            var qlen = needle.length;
            if (qlen > tlen) {
                return false;
            }
            if (qlen === tlen) {
                return needle === haystack;
            }
            outer: for (var i = 0, j = 0; i < qlen; i++) {
                var nch = needle.charCodeAt(i);
                while (j < tlen) {
                    if (haystack.charCodeAt(j++) === nch) {
                        continue outer;
                    }
                }
                return false;
            }
            return true;
        }
        module.exports = fuzzysearch;
    }, function(module, exports) {
        module.exports = ' <div tabindex=0 :class=getWrapCls @focus=activate() @blur="showSearch ? false : deactivate()" @keydown.enter.stop.prevent.self=enterSearchValue()> <div class=xcui-select-selection> <div class=xcui-select-selection-rendered @mousedown.stop=toggle()> <input type=text name=search v-el:search autocomplete=off class=xcui-select-search-input v-if=showSearch v-model=searchValue @focus.prevent=activate() @blur.prevent=deactivate() @keyup.down=keyNext() @keyup.up=keyPrev() @keydown.enter.stop.prevent.self=enterSearchValue() @change.prevent.stop="" :placeholder=placeholder> <span class=xcui-select-selection-text v-if=!showSearch v-text="currentOptionLabel || placeholder"> </span> <i class="glyphicon xcui-select-arrow" @mousedown.prevent.stop=toggle() :class="{\'glyphicon-triangle-bottom\':(!isOpen),\'glyphicon-triangle-top\':(isOpen)}"></i> </div> </div> <div class=xcui-select-menu-dropdown v-show="(isOpen && filteredOptions.length>0) || (isOpen && multiple)"> <ul v-el:list aria-activedescendant class=xcui-select-menu> <li class=xcui-select-menu-item v-if=multipleMaxShow> 最多可选{{multipleMax}}项! </li> <li class=xcui-select-menu-item v-if="filteredOptions.length<1 && searchEmptyText" v-text=searchEmptyText> </li> <template v-for="item in filteredOptions"> <li class=xcui-select-menu-item v-if=!optgroup tabindex=1 :class="{\'xcui-select-menu-item-selected\': isSelected(item), \'xcui-select-menu-item-key\': $index === selectIndex,\'disabled\': item.disable}" @mouseenter.prevent.stop.self=indexSet($index) @mousedown.prevent=select(item)> <span v-text=getOptionLabel(item)></span> </li> </template> <template v-for="item in filteredOptions"> <li class=xcui-select-menu-group v-if=optgroup> <div class=xcui-select-menu-group-title>{{item.name}}</div> <ul> <template v-for="option in item.options"> <li class=xcui-select-menu-group-item :class="{\'xcui-select-menu-group-item-selected\': isSelected(option,$parent.$index,$index), \'disabled\': option.disable}" @mousedown.prevent.stop.self=optgroupSelect($parent.$index,$index,option)> <span v-text=getOptionLabel(option)></span> </li> </template> </ul> </li> </template> </ul> </div> </div> ';
    }, function(module, exports, __webpack_require__) {
        var __vue_script__, __vue_template__;
        __webpack_require__(75);
        __vue_script__ = __webpack_require__(39);
        __vue_template__ = __webpack_require__(77);
        module.exports = __vue_script__ || {};
        if (module.exports.__esModule) module.exports = module.exports.default;
        if (__vue_template__) {
            (typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports).template = __vue_template__;
        }
    } ]);
});

