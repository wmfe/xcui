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
        module.exports = __webpack_require__(75);
    }, function(module, exports) {
        var global = module.exports = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
        if (typeof __g == "number") __g = global;
    }, function(module, exports) {
        var hasOwnProperty = {}.hasOwnProperty;
        module.exports = function(it, key) {
            return hasOwnProperty.call(it, key);
        };
    }, function(module, exports, __webpack_require__) {
        var IObject = __webpack_require__(50), defined = __webpack_require__(15);
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
        var dP = __webpack_require__(6), createDesc = __webpack_require__(12);
        module.exports = __webpack_require__(4) ? function(object, key, value) {
            return dP.f(object, key, createDesc(1, value));
        } : function(object, key, value) {
            object[key] = value;
            return object;
        };
    }, function(module, exports, __webpack_require__) {
        var anObject = __webpack_require__(8), IE8_DOM_DEFINE = __webpack_require__(30), toPrimitive = __webpack_require__(24), dP = Object.defineProperty;
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
        var store = __webpack_require__(22)("wks"), uid = __webpack_require__(13), Symbol = __webpack_require__(1).Symbol, USE_SYMBOL = typeof Symbol == "function";
        var $exports = module.exports = function(name) {
            return store[name] || (store[name] = USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)("Symbol." + name));
        };
        $exports.store = store;
    }, function(module, exports, __webpack_require__) {
        var isObject = __webpack_require__(10);
        module.exports = function(it) {
            if (!isObject(it)) throw TypeError(it + " is not an object!");
            return it;
        };
    }, function(module, exports) {
        module.exports = function(exec) {
            try {
                return !!exec();
            } catch (e) {
                return true;
            }
        };
    }, function(module, exports) {
        module.exports = function(it) {
            return typeof it === "object" ? it !== null : typeof it === "function";
        };
    }, function(module, exports, __webpack_require__) {
        var $keys = __webpack_require__(35), enumBugKeys = __webpack_require__(16);
        module.exports = Object.keys || function keys(O) {
            return $keys(O, enumBugKeys);
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
        var core = module.exports = {
            version: "2.4.0"
        };
        if (typeof __e == "number") __e = core;
    }, function(module, exports) {
        module.exports = function(it) {
            if (it == undefined) throw TypeError("Can't call method on  " + it);
            return it;
        };
    }, function(module, exports) {
        module.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
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
        var shared = __webpack_require__(22)("keys"), uid = __webpack_require__(13);
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
        var isObject = __webpack_require__(10);
        module.exports = function(it, S) {
            if (!isObject(it)) return it;
            var fn, val;
            if (S && typeof (fn = it.toString) == "function" && !isObject(val = fn.call(it))) return val;
            if (typeof (fn = it.valueOf) == "function" && !isObject(val = fn.call(it))) return val;
            if (!S && typeof (fn = it.toString) == "function" && !isObject(val = fn.call(it))) return val;
            throw TypeError("Can't convert object to primitive value");
        };
    }, function(module, exports, __webpack_require__) {
        var global = __webpack_require__(1), core = __webpack_require__(14), LIBRARY = __webpack_require__(18), wksExt = __webpack_require__(26), defineProperty = __webpack_require__(6).f;
        module.exports = function(name) {
            var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
            if (name.charAt(0) != "_" && !(name in $Symbol)) defineProperty($Symbol, name, {
                value: wksExt.f(name)
            });
        };
    }, function(module, exports, __webpack_require__) {
        exports.f = __webpack_require__(7);
    }, function(module, exports) {
        var toString = {}.toString;
        module.exports = function(it) {
            return toString.call(it).slice(8, -1);
        };
    }, function(module, exports, __webpack_require__) {
        var isObject = __webpack_require__(10), document = __webpack_require__(1).document, is = isObject(document) && isObject(document.createElement);
        module.exports = function(it) {
            return is ? document.createElement(it) : {};
        };
    }, function(module, exports, __webpack_require__) {
<<<<<<< HEAD
        var global = __webpack_require__(1), core = __webpack_require__(14), ctx = __webpack_require__(47), hide = __webpack_require__(5), PROTOTYPE = "prototype";
=======
        var global = __webpack_require__(1), core = __webpack_require__(14), ctx = __webpack_require__(50), hide = __webpack_require__(5), PROTOTYPE = "prototype";
>>>>>>> 665842a6c4a70ad448c3fcffde3109aa06ea74eb
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
        module.exports = !__webpack_require__(4) && !__webpack_require__(9)(function() {
            return Object.defineProperty(__webpack_require__(28)("div"), "a", {
                get: function() {
                    return 7;
                }
            }).a != 7;
        });
    }, function(module, exports, __webpack_require__) {
        "use strict";
<<<<<<< HEAD
        var LIBRARY = __webpack_require__(18), $export = __webpack_require__(29), redefine = __webpack_require__(36), hide = __webpack_require__(5), has = __webpack_require__(2), Iterators = __webpack_require__(17), $iterCreate = __webpack_require__(52), setToStringTag = __webpack_require__(20), getPrototypeOf = __webpack_require__(59), ITERATOR = __webpack_require__(7)("iterator"), BUGGY = !([].keys && "next" in [].keys()), FF_ITERATOR = "@@iterator", KEYS = "keys", VALUES = "values";
=======
        var LIBRARY = __webpack_require__(18), $export = __webpack_require__(29), redefine = __webpack_require__(36), hide = __webpack_require__(5), has = __webpack_require__(2), Iterators = __webpack_require__(17), $iterCreate = __webpack_require__(55), setToStringTag = __webpack_require__(20), getPrototypeOf = __webpack_require__(62), ITERATOR = __webpack_require__(7)("iterator"), BUGGY = !([].keys && "next" in [].keys()), FF_ITERATOR = "@@iterator", KEYS = "keys", VALUES = "values";
>>>>>>> 665842a6c4a70ad448c3fcffde3109aa06ea74eb
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
<<<<<<< HEAD
        var anObject = __webpack_require__(8), dPs = __webpack_require__(56), enumBugKeys = __webpack_require__(16), IE_PROTO = __webpack_require__(21)("IE_PROTO"), Empty = function() {}, PROTOTYPE = "prototype";
=======
        var anObject = __webpack_require__(8), dPs = __webpack_require__(59), enumBugKeys = __webpack_require__(16), IE_PROTO = __webpack_require__(21)("IE_PROTO"), Empty = function() {}, PROTOTYPE = "prototype";
>>>>>>> 665842a6c4a70ad448c3fcffde3109aa06ea74eb
        var createDict = function() {
            var iframe = __webpack_require__(28)("iframe"), i = enumBugKeys.length, lt = "<", gt = ">", iframeDocument;
            iframe.style.display = "none";
            __webpack_require__(49).appendChild(iframe);
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
        var $keys = __webpack_require__(35), hiddenKeys = __webpack_require__(16).concat("length", "prototype");
        exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
            return $keys(O, hiddenKeys);
        };
    }, function(module, exports) {
        exports.f = Object.getOwnPropertySymbols;
    }, function(module, exports, __webpack_require__) {
<<<<<<< HEAD
        var has = __webpack_require__(2), toIObject = __webpack_require__(3), arrayIndexOf = __webpack_require__(46)(false), IE_PROTO = __webpack_require__(21)("IE_PROTO");
=======
        var has = __webpack_require__(2), toIObject = __webpack_require__(3), arrayIndexOf = __webpack_require__(49)(false), IE_PROTO = __webpack_require__(21)("IE_PROTO");
>>>>>>> 665842a6c4a70ad448c3fcffde3109aa06ea74eb
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
        (function(Buffer, global) {
            /*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
            "use strict";
<<<<<<< HEAD
            var base64 = __webpack_require__(76);
            var ieee754 = __webpack_require__(77);
            var isArray = __webpack_require__(78);
            exports.Buffer = Buffer;
            exports.SlowBuffer = SlowBuffer;
            exports.INSPECT_MAX_BYTES = 50;
            Buffer.poolSize = 8192;
            var rootParent = {};
            Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();
            function typedArraySupport() {
                function Bar() {}
                try {
                    var arr = new Uint8Array(1);
                    arr.foo = function() {
                        return 42;
                    };
                    arr.constructor = Bar;
                    return arr.foo() === 42 && arr.constructor === Bar && typeof arr.subarray === "function" && arr.subarray(1, 1).byteLength === 0;
=======
            var base64 = __webpack_require__(42);
            var ieee754 = __webpack_require__(41);
            var isArray = __webpack_require__(38);
            exports.Buffer = Buffer;
            exports.SlowBuffer = SlowBuffer;
            exports.INSPECT_MAX_BYTES = 50;
            Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();
            exports.kMaxLength = kMaxLength();
            function typedArraySupport() {
                try {
                    var arr = new Uint8Array(1);
                    arr.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function() {
                            return 42;
                        }
                    };
                    return arr.foo() === 42 && typeof arr.subarray === "function" && arr.subarray(1, 1).byteLength === 0;
>>>>>>> 665842a6c4a70ad448c3fcffde3109aa06ea74eb
                } catch (e) {
                    return false;
                }
            }
            function kMaxLength() {
                return Buffer.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
            }
<<<<<<< HEAD
            function Buffer(arg) {
                if (!(this instanceof Buffer)) {
                    if (arguments.length > 1) return new Buffer(arg, arguments[1]);
                    return new Buffer(arg);
                }
                if (!Buffer.TYPED_ARRAY_SUPPORT) {
                    this.length = 0;
                    this.parent = undefined;
                }
                if (typeof arg === "number") {
                    return fromNumber(this, arg);
                }
                if (typeof arg === "string") {
                    return fromString(this, arg, arguments.length > 1 ? arguments[1] : "utf8");
                }
                return fromObject(this, arg);
            }
            function fromNumber(that, length) {
                that = allocate(that, length < 0 ? 0 : checked(length) | 0);
                if (!Buffer.TYPED_ARRAY_SUPPORT) {
                    for (var i = 0; i < length; i++) {
                        that[i] = 0;
                    }
                }
                return that;
            }
            function fromString(that, string, encoding) {
                if (typeof encoding !== "string" || encoding === "") encoding = "utf8";
                var length = byteLength(string, encoding) | 0;
                that = allocate(that, length);
                that.write(string, encoding);
                return that;
            }
            function fromObject(that, object) {
                if (Buffer.isBuffer(object)) return fromBuffer(that, object);
                if (isArray(object)) return fromArray(that, object);
                if (object == null) {
                    throw new TypeError("must start with number, buffer, array or string");
                }
                if (typeof ArrayBuffer !== "undefined") {
                    if (object.buffer instanceof ArrayBuffer) {
                        return fromTypedArray(that, object);
                    }
                    if (object instanceof ArrayBuffer) {
                        return fromArrayBuffer(that, object);
                    }
                }
                if (object.length) return fromArrayLike(that, object);
                return fromJsonObject(that, object);
            }
            function fromBuffer(that, buffer) {
                var length = checked(buffer.length) | 0;
                that = allocate(that, length);
                buffer.copy(that, 0, 0, length);
                return that;
            }
            function fromArray(that, array) {
                var length = checked(array.length) | 0;
                that = allocate(that, length);
                for (var i = 0; i < length; i += 1) {
                    that[i] = array[i] & 255;
                }
                return that;
            }
            function fromTypedArray(that, array) {
                var length = checked(array.length) | 0;
                that = allocate(that, length);
                for (var i = 0; i < length; i += 1) {
                    that[i] = array[i] & 255;
                }
                return that;
            }
            function fromArrayBuffer(that, array) {
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    array.byteLength;
                    that = Buffer._augment(new Uint8Array(array));
                } else {
                    that = fromTypedArray(that, new Uint8Array(array));
                }
                return that;
            }
            function fromArrayLike(that, array) {
                var length = checked(array.length) | 0;
                that = allocate(that, length);
                for (var i = 0; i < length; i += 1) {
                    that[i] = array[i] & 255;
                }
                return that;
            }
            function fromJsonObject(that, object) {
                var array;
                var length = 0;
                if (object.type === "Buffer" && isArray(object.data)) {
                    array = object.data;
                    length = checked(array.length) | 0;
                }
                that = allocate(that, length);
                for (var i = 0; i < length; i += 1) {
                    that[i] = array[i] & 255;
                }
                return that;
            }
            if (Buffer.TYPED_ARRAY_SUPPORT) {
                Buffer.prototype.__proto__ = Uint8Array.prototype;
                Buffer.__proto__ = Uint8Array;
            } else {
                Buffer.prototype.length = undefined;
                Buffer.prototype.parent = undefined;
            }
            function allocate(that, length) {
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    that = Buffer._augment(new Uint8Array(length));
                    that.__proto__ = Buffer.prototype;
                } else {
                    that.length = length;
                    that._isBuffer = true;
                }
                var fromPool = length !== 0 && length <= Buffer.poolSize >>> 1;
                if (fromPool) that.parent = rootParent;
                return that;
            }
            function checked(length) {
                if (length >= kMaxLength()) {
                    throw new RangeError("Attempt to allocate Buffer larger than maximum " + "size: 0x" + kMaxLength().toString(16) + " bytes");
                }
                return length | 0;
            }
            function SlowBuffer(subject, encoding) {
                if (!(this instanceof SlowBuffer)) return new SlowBuffer(subject, encoding);
                var buf = new Buffer(subject, encoding);
                delete buf.parent;
                return buf;
            }
            Buffer.isBuffer = function isBuffer(b) {
                return !!(b != null && b._isBuffer);
            };
            Buffer.compare = function compare(a, b) {
                if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
                    throw new TypeError("Arguments must be Buffers");
                }
                if (a === b) return 0;
                var x = a.length;
                var y = b.length;
                var i = 0;
                var len = Math.min(x, y);
                while (i < len) {
                    if (a[i] !== b[i]) break;
                    ++i;
                }
                if (i !== len) {
                    x = a[i];
                    y = b[i];
                }
                if (x < y) return -1;
                if (y < x) return 1;
                return 0;
            };
            Buffer.isEncoding = function isEncoding(encoding) {
                switch (String(encoding).toLowerCase()) {
                  case "hex":
                  case "utf8":
                  case "utf-8":
                  case "ascii":
                  case "binary":
                  case "base64":
                  case "raw":
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return true;

                  default:
                    return false;
                }
            };
            Buffer.concat = function concat(list, length) {
                if (!isArray(list)) throw new TypeError("list argument must be an Array of Buffers.");
                if (list.length === 0) {
                    return new Buffer(0);
                }
                var i;
                if (length === undefined) {
                    length = 0;
                    for (i = 0; i < list.length; i++) {
                        length += list[i].length;
                    }
                }
                var buf = new Buffer(length);
                var pos = 0;
                for (i = 0; i < list.length; i++) {
                    var item = list[i];
                    item.copy(buf, pos);
                    pos += item.length;
                }
                return buf;
            };
            function byteLength(string, encoding) {
                if (typeof string !== "string") string = "" + string;
                var len = string.length;
                if (len === 0) return 0;
                var loweredCase = false;
                for (;;) {
                    switch (encoding) {
                      case "ascii":
                      case "binary":
                      case "raw":
                      case "raws":
                        return len;

                      case "utf8":
                      case "utf-8":
                        return utf8ToBytes(string).length;

                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return len * 2;

                      case "hex":
                        return len >>> 1;

                      case "base64":
                        return base64ToBytes(string).length;

                      default:
                        if (loweredCase) return utf8ToBytes(string).length;
                        encoding = ("" + encoding).toLowerCase();
                        loweredCase = true;
                    }
                }
            }
            Buffer.byteLength = byteLength;
            function slowToString(encoding, start, end) {
                var loweredCase = false;
                start = start | 0;
                end = end === undefined || end === Infinity ? this.length : end | 0;
                if (!encoding) encoding = "utf8";
                if (start < 0) start = 0;
                if (end > this.length) end = this.length;
                if (end <= start) return "";
                while (true) {
                    switch (encoding) {
                      case "hex":
                        return hexSlice(this, start, end);

                      case "utf8":
                      case "utf-8":
                        return utf8Slice(this, start, end);

                      case "ascii":
                        return asciiSlice(this, start, end);

                      case "binary":
                        return binarySlice(this, start, end);

                      case "base64":
                        return base64Slice(this, start, end);

                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return utf16leSlice(this, start, end);

                      default:
                        if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
                        encoding = (encoding + "").toLowerCase();
                        loweredCase = true;
                    }
                }
            }
            Buffer.prototype.toString = function toString() {
                var length = this.length | 0;
                if (length === 0) return "";
                if (arguments.length === 0) return utf8Slice(this, 0, length);
                return slowToString.apply(this, arguments);
            };
            Buffer.prototype.equals = function equals(b) {
                if (!Buffer.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
                if (this === b) return true;
                return Buffer.compare(this, b) === 0;
            };
            Buffer.prototype.inspect = function inspect() {
                var str = "";
                var max = exports.INSPECT_MAX_BYTES;
                if (this.length > 0) {
                    str = this.toString("hex", 0, max).match(/.{2}/g).join(" ");
                    if (this.length > max) str += " ... ";
                }
                return "<Buffer " + str + ">";
            };
            Buffer.prototype.compare = function compare(b) {
                if (!Buffer.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
                if (this === b) return 0;
                return Buffer.compare(this, b);
            };
            Buffer.prototype.indexOf = function indexOf(val, byteOffset) {
                if (byteOffset > 2147483647) byteOffset = 2147483647; else if (byteOffset < -2147483648) byteOffset = -2147483648;
                byteOffset >>= 0;
                if (this.length === 0) return -1;
                if (byteOffset >= this.length) return -1;
                if (byteOffset < 0) byteOffset = Math.max(this.length + byteOffset, 0);
                if (typeof val === "string") {
                    if (val.length === 0) return -1;
                    return String.prototype.indexOf.call(this, val, byteOffset);
                }
                if (Buffer.isBuffer(val)) {
                    return arrayIndexOf(this, val, byteOffset);
                }
                if (typeof val === "number") {
                    if (Buffer.TYPED_ARRAY_SUPPORT && Uint8Array.prototype.indexOf === "function") {
                        return Uint8Array.prototype.indexOf.call(this, val, byteOffset);
                    }
                    return arrayIndexOf(this, [ val ], byteOffset);
                }
                function arrayIndexOf(arr, val, byteOffset) {
                    var foundIndex = -1;
                    for (var i = 0; byteOffset + i < arr.length; i++) {
                        if (arr[byteOffset + i] === val[foundIndex === -1 ? 0 : i - foundIndex]) {
                            if (foundIndex === -1) foundIndex = i;
                            if (i - foundIndex + 1 === val.length) return byteOffset + foundIndex;
                        } else {
                            foundIndex = -1;
                        }
                    }
                    return -1;
                }
                throw new TypeError("val must be string, number or Buffer");
            };
            Buffer.prototype.get = function get(offset) {
                console.log(".get() is deprecated. Access using array indexes instead.");
                return this.readUInt8(offset);
            };
            Buffer.prototype.set = function set(v, offset) {
                console.log(".set() is deprecated. Access using array indexes instead.");
                return this.writeUInt8(v, offset);
            };
            function hexWrite(buf, string, offset, length) {
                offset = Number(offset) || 0;
                var remaining = buf.length - offset;
                if (!length) {
                    length = remaining;
                } else {
                    length = Number(length);
                    if (length > remaining) {
                        length = remaining;
                    }
                }
                var strLen = string.length;
                if (strLen % 2 !== 0) throw new Error("Invalid hex string");
                if (length > strLen / 2) {
                    length = strLen / 2;
                }
                for (var i = 0; i < length; i++) {
                    var parsed = parseInt(string.substr(i * 2, 2), 16);
                    if (isNaN(parsed)) throw new Error("Invalid hex string");
                    buf[offset + i] = parsed;
                }
                return i;
            }
            function utf8Write(buf, string, offset, length) {
                return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
            }
            function asciiWrite(buf, string, offset, length) {
                return blitBuffer(asciiToBytes(string), buf, offset, length);
            }
            function binaryWrite(buf, string, offset, length) {
                return asciiWrite(buf, string, offset, length);
            }
            function base64Write(buf, string, offset, length) {
                return blitBuffer(base64ToBytes(string), buf, offset, length);
            }
            function ucs2Write(buf, string, offset, length) {
                return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
            }
            Buffer.prototype.write = function write(string, offset, length, encoding) {
                if (offset === undefined) {
                    encoding = "utf8";
                    length = this.length;
                    offset = 0;
                } else if (length === undefined && typeof offset === "string") {
                    encoding = offset;
                    length = this.length;
                    offset = 0;
                } else if (isFinite(offset)) {
                    offset = offset | 0;
                    if (isFinite(length)) {
                        length = length | 0;
                        if (encoding === undefined) encoding = "utf8";
                    } else {
                        encoding = length;
                        length = undefined;
                    }
                } else {
                    var swap = encoding;
                    encoding = offset;
                    offset = length | 0;
                    length = swap;
                }
                var remaining = this.length - offset;
                if (length === undefined || length > remaining) length = remaining;
                if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
                    throw new RangeError("attempt to write outside buffer bounds");
                }
                if (!encoding) encoding = "utf8";
                var loweredCase = false;
                for (;;) {
                    switch (encoding) {
                      case "hex":
                        return hexWrite(this, string, offset, length);

                      case "utf8":
                      case "utf-8":
                        return utf8Write(this, string, offset, length);

                      case "ascii":
                        return asciiWrite(this, string, offset, length);

                      case "binary":
                        return binaryWrite(this, string, offset, length);

                      case "base64":
                        return base64Write(this, string, offset, length);

                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return ucs2Write(this, string, offset, length);

                      default:
                        if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
                        encoding = ("" + encoding).toLowerCase();
                        loweredCase = true;
                    }
                }
            };
            Buffer.prototype.toJSON = function toJSON() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                };
            };
            function base64Slice(buf, start, end) {
                if (start === 0 && end === buf.length) {
                    return base64.fromByteArray(buf);
                } else {
                    return base64.fromByteArray(buf.slice(start, end));
                }
            }
            function utf8Slice(buf, start, end) {
                end = Math.min(buf.length, end);
                var res = [];
                var i = start;
                while (i < end) {
                    var firstByte = buf[i];
                    var codePoint = null;
                    var bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
                    if (i + bytesPerSequence <= end) {
                        var secondByte, thirdByte, fourthByte, tempCodePoint;
                        switch (bytesPerSequence) {
                          case 1:
                            if (firstByte < 128) {
                                codePoint = firstByte;
                            }
                            break;

                          case 2:
                            secondByte = buf[i + 1];
                            if ((secondByte & 192) === 128) {
                                tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                                if (tempCodePoint > 127) {
                                    codePoint = tempCodePoint;
                                }
                            }
                            break;

                          case 3:
                            secondByte = buf[i + 1];
                            thirdByte = buf[i + 2];
                            if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                                tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                                if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                                    codePoint = tempCodePoint;
                                }
                            }
                            break;

                          case 4:
                            secondByte = buf[i + 1];
                            thirdByte = buf[i + 2];
                            fourthByte = buf[i + 3];
                            if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                                tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                                if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                                    codePoint = tempCodePoint;
                                }
                            }
                        }
                    }
                    if (codePoint === null) {
                        codePoint = 65533;
                        bytesPerSequence = 1;
                    } else if (codePoint > 65535) {
                        codePoint -= 65536;
                        res.push(codePoint >>> 10 & 1023 | 55296);
                        codePoint = 56320 | codePoint & 1023;
                    }
                    res.push(codePoint);
                    i += bytesPerSequence;
                }
                return decodeCodePointsArray(res);
            }
            var MAX_ARGUMENTS_LENGTH = 4096;
            function decodeCodePointsArray(codePoints) {
                var len = codePoints.length;
                if (len <= MAX_ARGUMENTS_LENGTH) {
                    return String.fromCharCode.apply(String, codePoints);
                }
                var res = "";
                var i = 0;
                while (i < len) {
                    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
                }
                return res;
            }
            function asciiSlice(buf, start, end) {
                var ret = "";
                end = Math.min(buf.length, end);
                for (var i = start; i < end; i++) {
                    ret += String.fromCharCode(buf[i] & 127);
                }
                return ret;
            }
            function binarySlice(buf, start, end) {
                var ret = "";
                end = Math.min(buf.length, end);
                for (var i = start; i < end; i++) {
                    ret += String.fromCharCode(buf[i]);
                }
                return ret;
            }
            function hexSlice(buf, start, end) {
                var len = buf.length;
                if (!start || start < 0) start = 0;
                if (!end || end < 0 || end > len) end = len;
                var out = "";
                for (var i = start; i < end; i++) {
                    out += toHex(buf[i]);
                }
                return out;
            }
            function utf16leSlice(buf, start, end) {
                var bytes = buf.slice(start, end);
                var res = "";
                for (var i = 0; i < bytes.length; i += 2) {
                    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
                }
                return res;
            }
            Buffer.prototype.slice = function slice(start, end) {
                var len = this.length;
                start = ~~start;
                end = end === undefined ? len : ~~end;
                if (start < 0) {
                    start += len;
                    if (start < 0) start = 0;
                } else if (start > len) {
                    start = len;
                }
                if (end < 0) {
                    end += len;
                    if (end < 0) end = 0;
                } else if (end > len) {
                    end = len;
                }
                if (end < start) end = start;
                var newBuf;
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    newBuf = Buffer._augment(this.subarray(start, end));
                } else {
                    var sliceLen = end - start;
                    newBuf = new Buffer(sliceLen, undefined);
                    for (var i = 0; i < sliceLen; i++) {
                        newBuf[i] = this[i + start];
                    }
                }
                if (newBuf.length) newBuf.parent = this.parent || this;
                return newBuf;
            };
            function checkOffset(offset, ext, length) {
                if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
                if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
            }
            Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
                offset = offset | 0;
                byteLength = byteLength | 0;
                if (!noAssert) checkOffset(offset, byteLength, this.length);
                var val = this[offset];
                var mul = 1;
                var i = 0;
                while (++i < byteLength && (mul *= 256)) {
                    val += this[offset + i] * mul;
                }
                return val;
            };
            Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
                offset = offset | 0;
                byteLength = byteLength | 0;
                if (!noAssert) {
                    checkOffset(offset, byteLength, this.length);
                }
                var val = this[offset + --byteLength];
                var mul = 1;
                while (byteLength > 0 && (mul *= 256)) {
                    val += this[offset + --byteLength] * mul;
                }
                return val;
            };
            Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 1, this.length);
                return this[offset];
            };
            Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 2, this.length);
                return this[offset] | this[offset + 1] << 8;
            };
            Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 2, this.length);
                return this[offset] << 8 | this[offset + 1];
            };
            Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 4, this.length);
                return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
            };
            Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 4, this.length);
                return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
            };
            Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
                offset = offset | 0;
                byteLength = byteLength | 0;
                if (!noAssert) checkOffset(offset, byteLength, this.length);
                var val = this[offset];
                var mul = 1;
                var i = 0;
                while (++i < byteLength && (mul *= 256)) {
                    val += this[offset + i] * mul;
                }
                mul *= 128;
                if (val >= mul) val -= Math.pow(2, 8 * byteLength);
                return val;
            };
            Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
                offset = offset | 0;
                byteLength = byteLength | 0;
                if (!noAssert) checkOffset(offset, byteLength, this.length);
                var i = byteLength;
                var mul = 1;
                var val = this[offset + --i];
                while (i > 0 && (mul *= 256)) {
                    val += this[offset + --i] * mul;
                }
                mul *= 128;
                if (val >= mul) val -= Math.pow(2, 8 * byteLength);
                return val;
            };
            Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 1, this.length);
                if (!(this[offset] & 128)) return this[offset];
                return (255 - this[offset] + 1) * -1;
            };
            Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 2, this.length);
                var val = this[offset] | this[offset + 1] << 8;
                return val & 32768 ? val | 4294901760 : val;
            };
            Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 2, this.length);
                var val = this[offset + 1] | this[offset] << 8;
                return val & 32768 ? val | 4294901760 : val;
            };
            Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 4, this.length);
                return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
            };
            Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 4, this.length);
                return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
            };
            Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 4, this.length);
                return ieee754.read(this, offset, true, 23, 4);
            };
            Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 4, this.length);
                return ieee754.read(this, offset, false, 23, 4);
            };
            Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 8, this.length);
                return ieee754.read(this, offset, true, 52, 8);
            };
            Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 8, this.length);
                return ieee754.read(this, offset, false, 52, 8);
            };
            function checkInt(buf, value, offset, ext, max, min) {
                if (!Buffer.isBuffer(buf)) throw new TypeError("buffer must be a Buffer instance");
                if (value > max || value < min) throw new RangeError("value is out of bounds");
                if (offset + ext > buf.length) throw new RangeError("index out of range");
            }
            Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
                value = +value;
                offset = offset | 0;
                byteLength = byteLength | 0;
                if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0);
                var mul = 1;
                var i = 0;
                this[offset] = value & 255;
                while (++i < byteLength && (mul *= 256)) {
                    this[offset + i] = value / mul & 255;
                }
                return offset + byteLength;
            };
            Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
                value = +value;
                offset = offset | 0;
                byteLength = byteLength | 0;
                if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0);
                var i = byteLength - 1;
                var mul = 1;
                this[offset + i] = value & 255;
                while (--i >= 0 && (mul *= 256)) {
                    this[offset + i] = value / mul & 255;
                }
                return offset + byteLength;
            };
            Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
                if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
                this[offset] = value & 255;
                return offset + 1;
            };
            function objectWriteUInt16(buf, value, offset, littleEndian) {
                if (value < 0) value = 65535 + value + 1;
                for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
                    buf[offset + i] = (value & 255 << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
                }
            }
            Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    this[offset] = value & 255;
                    this[offset + 1] = value >>> 8;
                } else {
                    objectWriteUInt16(this, value, offset, true);
                }
                return offset + 2;
            };
            Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    this[offset] = value >>> 8;
                    this[offset + 1] = value & 255;
                } else {
                    objectWriteUInt16(this, value, offset, false);
                }
                return offset + 2;
            };
            function objectWriteUInt32(buf, value, offset, littleEndian) {
                if (value < 0) value = 4294967295 + value + 1;
                for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
                    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 255;
                }
            }
            Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    this[offset + 3] = value >>> 24;
                    this[offset + 2] = value >>> 16;
                    this[offset + 1] = value >>> 8;
                    this[offset] = value & 255;
                } else {
                    objectWriteUInt32(this, value, offset, true);
                }
                return offset + 4;
            };
            Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    this[offset] = value >>> 24;
                    this[offset + 1] = value >>> 16;
                    this[offset + 2] = value >>> 8;
                    this[offset + 3] = value & 255;
                } else {
                    objectWriteUInt32(this, value, offset, false);
                }
                return offset + 4;
            };
            Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) {
                    var limit = Math.pow(2, 8 * byteLength - 1);
                    checkInt(this, value, offset, byteLength, limit - 1, -limit);
                }
                var i = 0;
                var mul = 1;
                var sub = value < 0 ? 1 : 0;
                this[offset] = value & 255;
                while (++i < byteLength && (mul *= 256)) {
                    this[offset + i] = (value / mul >> 0) - sub & 255;
                }
                return offset + byteLength;
            };
            Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) {
                    var limit = Math.pow(2, 8 * byteLength - 1);
                    checkInt(this, value, offset, byteLength, limit - 1, -limit);
                }
                var i = byteLength - 1;
                var mul = 1;
                var sub = value < 0 ? 1 : 0;
                this[offset + i] = value & 255;
                while (--i >= 0 && (mul *= 256)) {
                    this[offset + i] = (value / mul >> 0) - sub & 255;
                }
                return offset + byteLength;
            };
            Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
                if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
                if (value < 0) value = 255 + value + 1;
                this[offset] = value & 255;
                return offset + 1;
            };
            Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    this[offset] = value & 255;
                    this[offset + 1] = value >>> 8;
                } else {
                    objectWriteUInt16(this, value, offset, true);
                }
                return offset + 2;
            };
            Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    this[offset] = value >>> 8;
                    this[offset + 1] = value & 255;
                } else {
                    objectWriteUInt16(this, value, offset, false);
                }
                return offset + 2;
            };
            Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    this[offset] = value & 255;
                    this[offset + 1] = value >>> 8;
                    this[offset + 2] = value >>> 16;
                    this[offset + 3] = value >>> 24;
                } else {
                    objectWriteUInt32(this, value, offset, true);
                }
                return offset + 4;
            };
            Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
                if (value < 0) value = 4294967295 + value + 1;
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    this[offset] = value >>> 24;
                    this[offset + 1] = value >>> 16;
                    this[offset + 2] = value >>> 8;
                    this[offset + 3] = value & 255;
                } else {
                    objectWriteUInt32(this, value, offset, false);
                }
                return offset + 4;
            };
            function checkIEEE754(buf, value, offset, ext, max, min) {
                if (value > max || value < min) throw new RangeError("value is out of bounds");
                if (offset + ext > buf.length) throw new RangeError("index out of range");
                if (offset < 0) throw new RangeError("index out of range");
            }
            function writeFloat(buf, value, offset, littleEndian, noAssert) {
                if (!noAssert) {
                    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e38, -3.4028234663852886e38);
                }
                ieee754.write(buf, value, offset, littleEndian, 23, 4);
                return offset + 4;
            }
            Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
                return writeFloat(this, value, offset, true, noAssert);
            };
            Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
                return writeFloat(this, value, offset, false, noAssert);
            };
            function writeDouble(buf, value, offset, littleEndian, noAssert) {
                if (!noAssert) {
                    checkIEEE754(buf, value, offset, 8, 1.7976931348623157e308, -1.7976931348623157e308);
                }
                ieee754.write(buf, value, offset, littleEndian, 52, 8);
                return offset + 8;
            }
            Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
                return writeDouble(this, value, offset, true, noAssert);
            };
            Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
                return writeDouble(this, value, offset, false, noAssert);
            };
            Buffer.prototype.copy = function copy(target, targetStart, start, end) {
                if (!start) start = 0;
                if (!end && end !== 0) end = this.length;
                if (targetStart >= target.length) targetStart = target.length;
                if (!targetStart) targetStart = 0;
                if (end > 0 && end < start) end = start;
                if (end === start) return 0;
                if (target.length === 0 || this.length === 0) return 0;
                if (targetStart < 0) {
                    throw new RangeError("targetStart out of bounds");
                }
                if (start < 0 || start >= this.length) throw new RangeError("sourceStart out of bounds");
                if (end < 0) throw new RangeError("sourceEnd out of bounds");
                if (end > this.length) end = this.length;
                if (target.length - targetStart < end - start) {
                    end = target.length - targetStart + start;
                }
                var len = end - start;
                var i;
                if (this === target && start < targetStart && targetStart < end) {
                    for (i = len - 1; i >= 0; i--) {
                        target[i + targetStart] = this[i + start];
                    }
                } else if (len < 1e3 || !Buffer.TYPED_ARRAY_SUPPORT) {
                    for (i = 0; i < len; i++) {
                        target[i + targetStart] = this[i + start];
                    }
                } else {
                    target._set(this.subarray(start, start + len), targetStart);
                }
                return len;
            };
            Buffer.prototype.fill = function fill(value, start, end) {
                if (!value) value = 0;
                if (!start) start = 0;
                if (!end) end = this.length;
                if (end < start) throw new RangeError("end < start");
                if (end === start) return;
                if (this.length === 0) return;
                if (start < 0 || start >= this.length) throw new RangeError("start out of bounds");
                if (end < 0 || end > this.length) throw new RangeError("end out of bounds");
                var i;
                if (typeof value === "number") {
                    for (i = start; i < end; i++) {
                        this[i] = value;
                    }
                } else {
                    var bytes = utf8ToBytes(value.toString());
                    var len = bytes.length;
                    for (i = start; i < end; i++) {
                        this[i] = bytes[i % len];
                    }
                }
                return this;
            };
            Buffer.prototype.toArrayBuffer = function toArrayBuffer() {
                if (typeof Uint8Array !== "undefined") {
                    if (Buffer.TYPED_ARRAY_SUPPORT) {
                        return new Buffer(this).buffer;
                    } else {
                        var buf = new Uint8Array(this.length);
                        for (var i = 0, len = buf.length; i < len; i += 1) {
                            buf[i] = this[i];
                        }
                        return buf.buffer;
                    }
                } else {
                    throw new TypeError("Buffer.toArrayBuffer not supported in this browser");
                }
            };
            var BP = Buffer.prototype;
            Buffer._augment = function _augment(arr) {
                arr.constructor = Buffer;
                arr._isBuffer = true;
                arr._set = arr.set;
                arr.get = BP.get;
                arr.set = BP.set;
                arr.write = BP.write;
                arr.toString = BP.toString;
                arr.toLocaleString = BP.toString;
                arr.toJSON = BP.toJSON;
                arr.equals = BP.equals;
                arr.compare = BP.compare;
                arr.indexOf = BP.indexOf;
                arr.copy = BP.copy;
                arr.slice = BP.slice;
                arr.readUIntLE = BP.readUIntLE;
                arr.readUIntBE = BP.readUIntBE;
                arr.readUInt8 = BP.readUInt8;
                arr.readUInt16LE = BP.readUInt16LE;
                arr.readUInt16BE = BP.readUInt16BE;
                arr.readUInt32LE = BP.readUInt32LE;
                arr.readUInt32BE = BP.readUInt32BE;
                arr.readIntLE = BP.readIntLE;
                arr.readIntBE = BP.readIntBE;
                arr.readInt8 = BP.readInt8;
                arr.readInt16LE = BP.readInt16LE;
                arr.readInt16BE = BP.readInt16BE;
                arr.readInt32LE = BP.readInt32LE;
                arr.readInt32BE = BP.readInt32BE;
                arr.readFloatLE = BP.readFloatLE;
                arr.readFloatBE = BP.readFloatBE;
                arr.readDoubleLE = BP.readDoubleLE;
                arr.readDoubleBE = BP.readDoubleBE;
                arr.writeUInt8 = BP.writeUInt8;
                arr.writeUIntLE = BP.writeUIntLE;
                arr.writeUIntBE = BP.writeUIntBE;
                arr.writeUInt16LE = BP.writeUInt16LE;
                arr.writeUInt16BE = BP.writeUInt16BE;
                arr.writeUInt32LE = BP.writeUInt32LE;
                arr.writeUInt32BE = BP.writeUInt32BE;
                arr.writeIntLE = BP.writeIntLE;
                arr.writeIntBE = BP.writeIntBE;
                arr.writeInt8 = BP.writeInt8;
                arr.writeInt16LE = BP.writeInt16LE;
                arr.writeInt16BE = BP.writeInt16BE;
                arr.writeInt32LE = BP.writeInt32LE;
                arr.writeInt32BE = BP.writeInt32BE;
                arr.writeFloatLE = BP.writeFloatLE;
                arr.writeFloatBE = BP.writeFloatBE;
                arr.writeDoubleLE = BP.writeDoubleLE;
                arr.writeDoubleBE = BP.writeDoubleBE;
                arr.fill = BP.fill;
                arr.inspect = BP.inspect;
                arr.toArrayBuffer = BP.toArrayBuffer;
                return arr;
            };
            var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;
            function base64clean(str) {
                str = stringtrim(str).replace(INVALID_BASE64_RE, "");
                if (str.length < 2) return "";
                while (str.length % 4 !== 0) {
                    str = str + "=";
                }
                return str;
            }
            function stringtrim(str) {
                if (str.trim) return str.trim();
                return str.replace(/^\s+|\s+$/g, "");
            }
            function toHex(n) {
                if (n < 16) return "0" + n.toString(16);
                return n.toString(16);
            }
            function utf8ToBytes(string, units) {
                units = units || Infinity;
                var codePoint;
                var length = string.length;
                var leadSurrogate = null;
                var bytes = [];
                for (var i = 0; i < length; i++) {
                    codePoint = string.charCodeAt(i);
                    if (codePoint > 55295 && codePoint < 57344) {
                        if (!leadSurrogate) {
                            if (codePoint > 56319) {
                                if ((units -= 3) > -1) bytes.push(239, 191, 189);
                                continue;
                            } else if (i + 1 === length) {
                                if ((units -= 3) > -1) bytes.push(239, 191, 189);
                                continue;
                            }
                            leadSurrogate = codePoint;
                            continue;
                        }
                        if (codePoint < 56320) {
                            if ((units -= 3) > -1) bytes.push(239, 191, 189);
                            leadSurrogate = codePoint;
                            continue;
                        }
                        codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
                    } else if (leadSurrogate) {
                        if ((units -= 3) > -1) bytes.push(239, 191, 189);
                    }
                    leadSurrogate = null;
                    if (codePoint < 128) {
                        if ((units -= 1) < 0) break;
                        bytes.push(codePoint);
                    } else if (codePoint < 2048) {
                        if ((units -= 2) < 0) break;
                        bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
                    } else if (codePoint < 65536) {
                        if ((units -= 3) < 0) break;
                        bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
                    } else if (codePoint < 1114112) {
                        if ((units -= 4) < 0) break;
                        bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
                    } else {
                        throw new Error("Invalid code point");
                    }
                }
                return bytes;
            }
            function asciiToBytes(str) {
                var byteArray = [];
                for (var i = 0; i < str.length; i++) {
                    byteArray.push(str.charCodeAt(i) & 255);
                }
                return byteArray;
            }
            function utf16leToBytes(str, units) {
                var c, hi, lo;
                var byteArray = [];
                for (var i = 0; i < str.length; i++) {
                    if ((units -= 2) < 0) break;
                    c = str.charCodeAt(i);
                    hi = c >> 8;
                    lo = c % 256;
                    byteArray.push(lo);
                    byteArray.push(hi);
                }
                return byteArray;
            }
            function base64ToBytes(str) {
                return base64.toByteArray(base64clean(str));
            }
            function blitBuffer(src, dst, offset, length) {
                for (var i = 0; i < length; i++) {
                    if (i + offset >= dst.length || i >= src.length) break;
                    dst[i + offset] = src[i];
                }
                return i;
            }
        }).call(exports, __webpack_require__(37).Buffer, function() {
            return this;
        }());
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _typeof2 = __webpack_require__(41);
        var _typeof3 = _interopRequireDefault(_typeof2);
        var _clone = __webpack_require__(71);
        var _clone2 = _interopRequireDefault(_clone);
        var _fuzzysearch = __webpack_require__(73);
        var _fuzzysearch2 = _interopRequireDefault(_fuzzysearch);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
=======
            function createBuffer(that, length) {
                if (kMaxLength() < length) {
                    throw new RangeError("Invalid typed array length");
                }
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    that = new Uint8Array(length);
                    that.__proto__ = Buffer.prototype;
                } else {
                    if (that === null) {
                        that = new Buffer(length);
                    }
                    that.length = length;
                }
                return that;
            }
            function Buffer(arg, encodingOrOffset, length) {
                if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
                    return new Buffer(arg, encodingOrOffset, length);
                }
                if (typeof arg === "number") {
                    if (typeof encodingOrOffset === "string") {
                        throw new Error("If encoding is specified then the first argument must be a string");
                    }
                    return allocUnsafe(this, arg);
                }
                return from(this, arg, encodingOrOffset, length);
            }
            Buffer.poolSize = 8192;
            Buffer._augment = function(arr) {
                arr.__proto__ = Buffer.prototype;
                return arr;
>>>>>>> 665842a6c4a70ad448c3fcffde3109aa06ea74eb
            };
            function from(that, value, encodingOrOffset, length) {
                if (typeof value === "number") {
                    throw new TypeError('"value" argument must not be a number');
                }
<<<<<<< HEAD
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
=======
                if (typeof ArrayBuffer !== "undefined" && value instanceof ArrayBuffer) {
                    return fromArrayBuffer(that, value, encodingOrOffset, length);
                }
                if (typeof value === "string") {
                    return fromString(that, value, encodingOrOffset);
                }
                return fromObject(that, value);
            }
            Buffer.from = function(value, encodingOrOffset, length) {
                return from(null, value, encodingOrOffset, length);
            };
            if (Buffer.TYPED_ARRAY_SUPPORT) {
                Buffer.prototype.__proto__ = Uint8Array.prototype;
                Buffer.__proto__ = Uint8Array;
                if (typeof Symbol !== "undefined" && Symbol.species && Buffer[Symbol.species] === Buffer) {
                    Object.defineProperty(Buffer, Symbol.species, {
                        value: null,
                        configurable: true
                    });
                }
            }
            function assertSize(size) {
                if (typeof size !== "number") {
                    throw new TypeError('"size" argument must be a number');
                } else if (size < 0) {
                    throw new RangeError('"size" argument must not be negative');
                }
            }
            function alloc(that, size, fill, encoding) {
                assertSize(size);
                if (size <= 0) {
                    return createBuffer(that, size);
                }
                if (fill !== undefined) {
                    return typeof encoding === "string" ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
                }
                return createBuffer(that, size);
            }
            Buffer.alloc = function(size, fill, encoding) {
                return alloc(null, size, fill, encoding);
            };
            function allocUnsafe(that, size) {
                assertSize(size);
                that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
                if (!Buffer.TYPED_ARRAY_SUPPORT) {
                    for (var i = 0; i < size; ++i) {
                        that[i] = 0;
                    }
                }
                return that;
            }
            Buffer.allocUnsafe = function(size) {
                return allocUnsafe(null, size);
            };
            Buffer.allocUnsafeSlow = function(size) {
                return allocUnsafe(null, size);
            };
            function fromString(that, string, encoding) {
                if (typeof encoding !== "string" || encoding === "") {
                    encoding = "utf8";
                }
                if (!Buffer.isEncoding(encoding)) {
                    throw new TypeError('"encoding" must be a valid string encoding');
                }
                var length = byteLength(string, encoding) | 0;
                that = createBuffer(that, length);
                var actual = that.write(string, encoding);
                if (actual !== length) {
                    that = that.slice(0, actual);
                }
                return that;
            }
            function fromArrayLike(that, array) {
                var length = array.length < 0 ? 0 : checked(array.length) | 0;
                that = createBuffer(that, length);
                for (var i = 0; i < length; i += 1) {
                    that[i] = array[i] & 255;
                }
                return that;
            }
            function fromArrayBuffer(that, array, byteOffset, length) {
                array.byteLength;
                if (byteOffset < 0 || array.byteLength < byteOffset) {
                    throw new RangeError("'offset' is out of bounds");
                }
                if (array.byteLength < byteOffset + (length || 0)) {
                    throw new RangeError("'length' is out of bounds");
                }
                if (byteOffset === undefined && length === undefined) {
                    array = new Uint8Array(array);
                } else if (length === undefined) {
                    array = new Uint8Array(array, byteOffset);
                } else {
                    array = new Uint8Array(array, byteOffset, length);
                }
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    that = array;
                    that.__proto__ = Buffer.prototype;
                } else {
                    that = fromArrayLike(that, array);
                }
                return that;
            }
            function fromObject(that, obj) {
                if (Buffer.isBuffer(obj)) {
                    var len = checked(obj.length) | 0;
                    that = createBuffer(that, len);
                    if (that.length === 0) {
                        return that;
                    }
                    obj.copy(that, 0, 0, len);
                    return that;
                }
                if (obj) {
                    if (typeof ArrayBuffer !== "undefined" && obj.buffer instanceof ArrayBuffer || "length" in obj) {
                        if (typeof obj.length !== "number" || isnan(obj.length)) {
                            return createBuffer(that, 0);
>>>>>>> 665842a6c4a70ad448c3fcffde3109aa06ea74eb
                        }
                        return fromArrayLike(that, obj);
                    }
                    if (obj.type === "Buffer" && isArray(obj.data)) {
                        return fromArrayLike(that, obj.data);
                    }
                }
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
            }
            function checked(length) {
                if (length >= kMaxLength()) {
                    throw new RangeError("Attempt to allocate Buffer larger than maximum " + "size: 0x" + kMaxLength().toString(16) + " bytes");
                }
                return length | 0;
            }
            function SlowBuffer(length) {
                if (+length != length) {
                    length = 0;
                }
                return Buffer.alloc(+length);
            }
            Buffer.isBuffer = function isBuffer(b) {
                return !!(b != null && b._isBuffer);
            };
            Buffer.compare = function compare(a, b) {
                if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
                    throw new TypeError("Arguments must be Buffers");
                }
                if (a === b) return 0;
                var x = a.length;
                var y = b.length;
                for (var i = 0, len = Math.min(x, y); i < len; ++i) {
                    if (a[i] !== b[i]) {
                        x = a[i];
                        y = b[i];
                        break;
                    }
                }
                if (x < y) return -1;
                if (y < x) return 1;
                return 0;
            };
            Buffer.isEncoding = function isEncoding(encoding) {
                switch (String(encoding).toLowerCase()) {
                  case "hex":
                  case "utf8":
                  case "utf-8":
                  case "ascii":
                  case "latin1":
                  case "binary":
                  case "base64":
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return true;

                  default:
                    return false;
                }
            };
            Buffer.concat = function concat(list, length) {
                if (!isArray(list)) {
                    throw new TypeError('"list" argument must be an Array of Buffers');
                }
                if (list.length === 0) {
                    return Buffer.alloc(0);
                }
                var i;
                if (length === undefined) {
                    length = 0;
                    for (i = 0; i < list.length; ++i) {
                        length += list[i].length;
                    }
                }
                var buffer = Buffer.allocUnsafe(length);
                var pos = 0;
                for (i = 0; i < list.length; ++i) {
                    var buf = list[i];
                    if (!Buffer.isBuffer(buf)) {
                        throw new TypeError('"list" argument must be an Array of Buffers');
                    }
<<<<<<< HEAD
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
=======
                    buf.copy(buffer, pos);
                    pos += buf.length;
                }
                return buffer;
            };
            function byteLength(string, encoding) {
                if (Buffer.isBuffer(string)) {
                    return string.length;
                }
                if (typeof ArrayBuffer !== "undefined" && typeof ArrayBuffer.isView === "function" && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
                    return string.byteLength;
                }
                if (typeof string !== "string") {
                    string = "" + string;
                }
                var len = string.length;
                if (len === 0) return 0;
                var loweredCase = false;
                for (;;) {
                    switch (encoding) {
                      case "ascii":
                      case "latin1":
                      case "binary":
                        return len;

                      case "utf8":
                      case "utf-8":
                      case undefined:
                        return utf8ToBytes(string).length;

                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return len * 2;

                      case "hex":
                        return len >>> 1;

                      case "base64":
                        return base64ToBytes(string).length;

                      default:
                        if (loweredCase) return utf8ToBytes(string).length;
                        encoding = ("" + encoding).toLowerCase();
                        loweredCase = true;
>>>>>>> 665842a6c4a70ad448c3fcffde3109aa06ea74eb
                    }
                }
            }
            Buffer.byteLength = byteLength;
            function slowToString(encoding, start, end) {
                var loweredCase = false;
                if (start === undefined || start < 0) {
                    start = 0;
                }
                if (start > this.length) {
                    return "";
                }
                if (end === undefined || end > this.length) {
                    end = this.length;
                }
                if (end <= 0) {
                    return "";
                }
                end >>>= 0;
                start >>>= 0;
                if (end <= start) {
                    return "";
                }
                if (!encoding) encoding = "utf8";
                while (true) {
                    switch (encoding) {
                      case "hex":
                        return hexSlice(this, start, end);

                      case "utf8":
                      case "utf-8":
                        return utf8Slice(this, start, end);

                      case "ascii":
                        return asciiSlice(this, start, end);

                      case "latin1":
                      case "binary":
                        return latin1Slice(this, start, end);

                      case "base64":
                        return base64Slice(this, start, end);

                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return utf16leSlice(this, start, end);

                      default:
                        if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
                        encoding = (encoding + "").toLowerCase();
                        loweredCase = true;
                    }
<<<<<<< HEAD
                    this.$emit("change", (0, _clone2.default)(this.value));
                    this.$emit("select", (0, _clone2.default)(this.value));
                    this.closeAfterSelect && this.deactivate();
                },
                isSelected: function isSelected(option, groupIndex, index) {
                    var me = this;
                    if (!this.value) {
                        return false;
=======
                }
            }
            Buffer.prototype._isBuffer = true;
            function swap(b, n, m) {
                var i = b[n];
                b[n] = b[m];
                b[m] = i;
            }
            Buffer.prototype.swap16 = function swap16() {
                var len = this.length;
                if (len % 2 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 16-bits");
                }
                for (var i = 0; i < len; i += 2) {
                    swap(this, i, i + 1);
                }
                return this;
            };
            Buffer.prototype.swap32 = function swap32() {
                var len = this.length;
                if (len % 4 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 32-bits");
                }
                for (var i = 0; i < len; i += 4) {
                    swap(this, i, i + 3);
                    swap(this, i + 1, i + 2);
                }
                return this;
            };
            Buffer.prototype.swap64 = function swap64() {
                var len = this.length;
                if (len % 8 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 64-bits");
                }
                for (var i = 0; i < len; i += 8) {
                    swap(this, i, i + 7);
                    swap(this, i + 1, i + 6);
                    swap(this, i + 2, i + 5);
                    swap(this, i + 3, i + 4);
                }
                return this;
            };
            Buffer.prototype.toString = function toString() {
                var length = this.length | 0;
                if (length === 0) return "";
                if (arguments.length === 0) return utf8Slice(this, 0, length);
                return slowToString.apply(this, arguments);
            };
            Buffer.prototype.equals = function equals(b) {
                if (!Buffer.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
                if (this === b) return true;
                return Buffer.compare(this, b) === 0;
            };
            Buffer.prototype.inspect = function inspect() {
                var str = "";
                var max = exports.INSPECT_MAX_BYTES;
                if (this.length > 0) {
                    str = this.toString("hex", 0, max).match(/.{2}/g).join(" ");
                    if (this.length > max) str += " ... ";
                }
                return "<Buffer " + str + ">";
            };
            Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
                if (!Buffer.isBuffer(target)) {
                    throw new TypeError("Argument must be a Buffer");
                }
                if (start === undefined) {
                    start = 0;
                }
                if (end === undefined) {
                    end = target ? target.length : 0;
                }
                if (thisStart === undefined) {
                    thisStart = 0;
                }
                if (thisEnd === undefined) {
                    thisEnd = this.length;
                }
                if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
                    throw new RangeError("out of range index");
                }
                if (thisStart >= thisEnd && start >= end) {
                    return 0;
                }
                if (thisStart >= thisEnd) {
                    return -1;
                }
                if (start >= end) {
                    return 1;
                }
                start >>>= 0;
                end >>>= 0;
                thisStart >>>= 0;
                thisEnd >>>= 0;
                if (this === target) return 0;
                var x = thisEnd - thisStart;
                var y = end - start;
                var len = Math.min(x, y);
                var thisCopy = this.slice(thisStart, thisEnd);
                var targetCopy = target.slice(start, end);
                for (var i = 0; i < len; ++i) {
                    if (thisCopy[i] !== targetCopy[i]) {
                        x = thisCopy[i];
                        y = targetCopy[i];
                        break;
>>>>>>> 665842a6c4a70ad448c3fcffde3109aa06ea74eb
                    }
                }
                if (x < y) return -1;
                if (y < x) return 1;
                return 0;
            };
            function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
                if (buffer.length === 0) return -1;
                if (typeof byteOffset === "string") {
                    encoding = byteOffset;
                    byteOffset = 0;
                } else if (byteOffset > 2147483647) {
                    byteOffset = 2147483647;
                } else if (byteOffset < -2147483648) {
                    byteOffset = -2147483648;
                }
                byteOffset = +byteOffset;
                if (isNaN(byteOffset)) {
                    byteOffset = dir ? 0 : buffer.length - 1;
                }
                if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
                if (byteOffset >= buffer.length) {
                    if (dir) return -1; else byteOffset = buffer.length - 1;
                } else if (byteOffset < 0) {
                    if (dir) byteOffset = 0; else return -1;
                }
                if (typeof val === "string") {
                    val = Buffer.from(val, encoding);
                }
                if (Buffer.isBuffer(val)) {
                    if (val.length === 0) {
                        return -1;
                    }
                    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
                } else if (typeof val === "number") {
                    val = val & 255;
                    if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === "function") {
                        if (dir) {
                            return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
                        } else {
                            return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
                        }
                    }
<<<<<<< HEAD
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
=======
                    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir);
                }
                throw new TypeError("val must be string, number or Buffer");
            }
            function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
                var indexSize = 1;
                var arrLength = arr.length;
                var valLength = val.length;
                if (encoding !== undefined) {
                    encoding = String(encoding).toLowerCase();
                    if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
                        if (arr.length < 2 || val.length < 2) {
                            return -1;
                        }
                        indexSize = 2;
                        arrLength /= 2;
                        valLength /= 2;
                        byteOffset /= 2;
>>>>>>> 665842a6c4a70ad448c3fcffde3109aa06ea74eb
                    }
                }
                function read(buf, i) {
                    if (indexSize === 1) {
                        return buf[i];
                    } else {
                        return buf.readUInt16BE(i * indexSize);
                    }
<<<<<<< HEAD
                    this.value.$remove(option);
                    this.$emit("remove", (0, _clone2.default)(option));
                },
                indexSet: function indexSet(parentIndex, index) {
                    if (this.optgroup) {
                        this.selectIndex = parentIndex + "-" + index;
                        return;
=======
                }
                var i;
                if (dir) {
                    var foundIndex = -1;
                    for (i = byteOffset; i < arrLength; i++) {
                        if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
                            if (foundIndex === -1) foundIndex = i;
                            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
                        } else {
                            if (foundIndex !== -1) i -= i - foundIndex;
                            foundIndex = -1;
                        }
>>>>>>> 665842a6c4a70ad448c3fcffde3109aa06ea74eb
                    }
                } else {
                    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
                    for (i = byteOffset; i >= 0; i--) {
                        var found = true;
                        for (var j = 0; j < valLength; j++) {
                            if (read(arr, i + j) !== read(val, j)) {
                                found = false;
                                break;
                            }
                        }
                        if (found) return i;
                    }
                }
                return -1;
            }
            Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
                return this.indexOf(val, byteOffset, encoding) !== -1;
            };
            Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
                return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
            };
            Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
                return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
            };
            function hexWrite(buf, string, offset, length) {
                offset = Number(offset) || 0;
                var remaining = buf.length - offset;
                if (!length) {
                    length = remaining;
                } else {
                    length = Number(length);
                    if (length > remaining) {
                        length = remaining;
                    }
                }
                var strLen = string.length;
                if (strLen % 2 !== 0) throw new TypeError("Invalid hex string");
                if (length > strLen / 2) {
                    length = strLen / 2;
                }
                for (var i = 0; i < length; ++i) {
                    var parsed = parseInt(string.substr(i * 2, 2), 16);
                    if (isNaN(parsed)) return i;
                    buf[offset + i] = parsed;
                }
                return i;
            }
            function utf8Write(buf, string, offset, length) {
                return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
            }
            function asciiWrite(buf, string, offset, length) {
                return blitBuffer(asciiToBytes(string), buf, offset, length);
            }
            function latin1Write(buf, string, offset, length) {
                return asciiWrite(buf, string, offset, length);
            }
            function base64Write(buf, string, offset, length) {
                return blitBuffer(base64ToBytes(string), buf, offset, length);
            }
            function ucs2Write(buf, string, offset, length) {
                return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
            }
            Buffer.prototype.write = function write(string, offset, length, encoding) {
                if (offset === undefined) {
                    encoding = "utf8";
                    length = this.length;
                    offset = 0;
                } else if (length === undefined && typeof offset === "string") {
                    encoding = offset;
                    length = this.length;
                    offset = 0;
                } else if (isFinite(offset)) {
                    offset = offset | 0;
                    if (isFinite(length)) {
                        length = length | 0;
                        if (encoding === undefined) encoding = "utf8";
                    } else {
                        encoding = length;
                        length = undefined;
                    }
                } else {
                    throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                }
                var remaining = this.length - offset;
                if (length === undefined || length > remaining) length = remaining;
                if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
                    throw new RangeError("Attempt to write outside buffer bounds");
                }
                if (!encoding) encoding = "utf8";
                var loweredCase = false;
                for (;;) {
                    switch (encoding) {
                      case "hex":
                        return hexWrite(this, string, offset, length);

                      case "utf8":
                      case "utf-8":
                        return utf8Write(this, string, offset, length);

                      case "ascii":
                        return asciiWrite(this, string, offset, length);

                      case "latin1":
                      case "binary":
                        return latin1Write(this, string, offset, length);

                      case "base64":
                        return base64Write(this, string, offset, length);

                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return ucs2Write(this, string, offset, length);

                      default:
                        if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
                        encoding = ("" + encoding).toLowerCase();
                        loweredCase = true;
                    }
                }
            };
            Buffer.prototype.toJSON = function toJSON() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                };
            };
            function base64Slice(buf, start, end) {
                if (start === 0 && end === buf.length) {
                    return base64.fromByteArray(buf);
                } else {
                    return base64.fromByteArray(buf.slice(start, end));
                }
            }
            function utf8Slice(buf, start, end) {
                end = Math.min(buf.length, end);
                var res = [];
                var i = start;
                while (i < end) {
                    var firstByte = buf[i];
                    var codePoint = null;
                    var bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
                    if (i + bytesPerSequence <= end) {
                        var secondByte, thirdByte, fourthByte, tempCodePoint;
                        switch (bytesPerSequence) {
                          case 1:
                            if (firstByte < 128) {
                                codePoint = firstByte;
                            }
                            break;

                          case 2:
                            secondByte = buf[i + 1];
                            if ((secondByte & 192) === 128) {
                                tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                                if (tempCodePoint > 127) {
                                    codePoint = tempCodePoint;
                                }
                            }
                            break;

                          case 3:
                            secondByte = buf[i + 1];
                            thirdByte = buf[i + 2];
                            if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                                tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                                if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                                    codePoint = tempCodePoint;
                                }
                            }
                            break;

                          case 4:
                            secondByte = buf[i + 1];
                            thirdByte = buf[i + 2];
                            fourthByte = buf[i + 3];
                            if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                                tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                                if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                                    codePoint = tempCodePoint;
                                }
                            }
                        }
                    }
                    if (codePoint === null) {
                        codePoint = 65533;
                        bytesPerSequence = 1;
                    } else if (codePoint > 65535) {
                        codePoint -= 65536;
                        res.push(codePoint >>> 10 & 1023 | 55296);
                        codePoint = 56320 | codePoint & 1023;
                    }
                    res.push(codePoint);
                    i += bytesPerSequence;
                }
                return decodeCodePointsArray(res);
            }
            var MAX_ARGUMENTS_LENGTH = 4096;
            function decodeCodePointsArray(codePoints) {
                var len = codePoints.length;
                if (len <= MAX_ARGUMENTS_LENGTH) {
                    return String.fromCharCode.apply(String, codePoints);
                }
                var res = "";
                var i = 0;
                while (i < len) {
                    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
                }
                return res;
            }
            function asciiSlice(buf, start, end) {
                var ret = "";
                end = Math.min(buf.length, end);
                for (var i = start; i < end; ++i) {
                    ret += String.fromCharCode(buf[i] & 127);
                }
                return ret;
            }
            function latin1Slice(buf, start, end) {
                var ret = "";
                end = Math.min(buf.length, end);
                for (var i = start; i < end; ++i) {
                    ret += String.fromCharCode(buf[i]);
                }
                return ret;
            }
            function hexSlice(buf, start, end) {
                var len = buf.length;
                if (!start || start < 0) start = 0;
                if (!end || end < 0 || end > len) end = len;
                var out = "";
                for (var i = start; i < end; ++i) {
                    out += toHex(buf[i]);
                }
                return out;
            }
            function utf16leSlice(buf, start, end) {
                var bytes = buf.slice(start, end);
                var res = "";
                for (var i = 0; i < bytes.length; i += 2) {
                    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
                }
                return res;
            }
            Buffer.prototype.slice = function slice(start, end) {
                var len = this.length;
                start = ~~start;
                end = end === undefined ? len : ~~end;
                if (start < 0) {
                    start += len;
                    if (start < 0) start = 0;
                } else if (start > len) {
                    start = len;
                }
                if (end < 0) {
                    end += len;
                    if (end < 0) end = 0;
                } else if (end > len) {
                    end = len;
                }
                if (end < start) end = start;
                var newBuf;
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    newBuf = this.subarray(start, end);
                    newBuf.__proto__ = Buffer.prototype;
                } else {
                    var sliceLen = end - start;
                    newBuf = new Buffer(sliceLen, undefined);
                    for (var i = 0; i < sliceLen; ++i) {
                        newBuf[i] = this[i + start];
                    }
                }
                return newBuf;
            };
            function checkOffset(offset, ext, length) {
                if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
                if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
            }
            Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
                offset = offset | 0;
                byteLength = byteLength | 0;
                if (!noAssert) checkOffset(offset, byteLength, this.length);
                var val = this[offset];
                var mul = 1;
                var i = 0;
                while (++i < byteLength && (mul *= 256)) {
                    val += this[offset + i] * mul;
                }
                return val;
            };
            Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
                offset = offset | 0;
                byteLength = byteLength | 0;
                if (!noAssert) {
                    checkOffset(offset, byteLength, this.length);
                }
                var val = this[offset + --byteLength];
                var mul = 1;
                while (byteLength > 0 && (mul *= 256)) {
                    val += this[offset + --byteLength] * mul;
                }
                return val;
            };
            Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 1, this.length);
                return this[offset];
            };
            Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 2, this.length);
                return this[offset] | this[offset + 1] << 8;
            };
            Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 2, this.length);
                return this[offset] << 8 | this[offset + 1];
            };
            Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 4, this.length);
                return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
            };
            Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 4, this.length);
                return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
            };
            Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
                offset = offset | 0;
                byteLength = byteLength | 0;
                if (!noAssert) checkOffset(offset, byteLength, this.length);
                var val = this[offset];
                var mul = 1;
                var i = 0;
                while (++i < byteLength && (mul *= 256)) {
                    val += this[offset + i] * mul;
                }
                mul *= 128;
                if (val >= mul) val -= Math.pow(2, 8 * byteLength);
                return val;
            };
            Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
                offset = offset | 0;
                byteLength = byteLength | 0;
                if (!noAssert) checkOffset(offset, byteLength, this.length);
                var i = byteLength;
                var mul = 1;
                var val = this[offset + --i];
                while (i > 0 && (mul *= 256)) {
                    val += this[offset + --i] * mul;
                }
                mul *= 128;
                if (val >= mul) val -= Math.pow(2, 8 * byteLength);
                return val;
            };
            Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 1, this.length);
                if (!(this[offset] & 128)) return this[offset];
                return (255 - this[offset] + 1) * -1;
            };
            Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 2, this.length);
                var val = this[offset] | this[offset + 1] << 8;
                return val & 32768 ? val | 4294901760 : val;
            };
            Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 2, this.length);
                var val = this[offset + 1] | this[offset] << 8;
                return val & 32768 ? val | 4294901760 : val;
            };
            Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 4, this.length);
                return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
            };
            Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 4, this.length);
                return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
            };
            Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 4, this.length);
                return ieee754.read(this, offset, true, 23, 4);
            };
            Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 4, this.length);
                return ieee754.read(this, offset, false, 23, 4);
            };
            Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 8, this.length);
                return ieee754.read(this, offset, true, 52, 8);
            };
            Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 8, this.length);
                return ieee754.read(this, offset, false, 52, 8);
            };
            function checkInt(buf, value, offset, ext, max, min) {
                if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
                if (offset + ext > buf.length) throw new RangeError("Index out of range");
            }
            Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
                value = +value;
                offset = offset | 0;
                byteLength = byteLength | 0;
                if (!noAssert) {
                    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
                    checkInt(this, value, offset, byteLength, maxBytes, 0);
                }
                var mul = 1;
                var i = 0;
                this[offset] = value & 255;
                while (++i < byteLength && (mul *= 256)) {
                    this[offset + i] = value / mul & 255;
                }
                return offset + byteLength;
            };
            Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
                value = +value;
                offset = offset | 0;
                byteLength = byteLength | 0;
                if (!noAssert) {
                    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
                    checkInt(this, value, offset, byteLength, maxBytes, 0);
                }
                var i = byteLength - 1;
                var mul = 1;
                this[offset + i] = value & 255;
                while (--i >= 0 && (mul *= 256)) {
                    this[offset + i] = value / mul & 255;
                }
                return offset + byteLength;
            };
            Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
                if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
                this[offset] = value & 255;
                return offset + 1;
            };
            function objectWriteUInt16(buf, value, offset, littleEndian) {
                if (value < 0) value = 65535 + value + 1;
                for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
                    buf[offset + i] = (value & 255 << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
                }
            }
            Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    this[offset] = value & 255;
                    this[offset + 1] = value >>> 8;
                } else {
                    objectWriteUInt16(this, value, offset, true);
                }
                return offset + 2;
            };
            Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    this[offset] = value >>> 8;
                    this[offset + 1] = value & 255;
                } else {
                    objectWriteUInt16(this, value, offset, false);
                }
                return offset + 2;
            };
            function objectWriteUInt32(buf, value, offset, littleEndian) {
                if (value < 0) value = 4294967295 + value + 1;
                for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
                    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 255;
                }
            }
            Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    this[offset + 3] = value >>> 24;
                    this[offset + 2] = value >>> 16;
                    this[offset + 1] = value >>> 8;
                    this[offset] = value & 255;
                } else {
                    objectWriteUInt32(this, value, offset, true);
                }
                return offset + 4;
            };
            Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    this[offset] = value >>> 24;
                    this[offset + 1] = value >>> 16;
                    this[offset + 2] = value >>> 8;
                    this[offset + 3] = value & 255;
                } else {
                    objectWriteUInt32(this, value, offset, false);
                }
                return offset + 4;
            };
            Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) {
                    var limit = Math.pow(2, 8 * byteLength - 1);
                    checkInt(this, value, offset, byteLength, limit - 1, -limit);
                }
                var i = 0;
                var mul = 1;
                var sub = 0;
                this[offset] = value & 255;
                while (++i < byteLength && (mul *= 256)) {
                    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
                        sub = 1;
                    }
<<<<<<< HEAD
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
=======
                    this[offset + i] = (value / mul >> 0) - sub & 255;
                }
                return offset + byteLength;
            };
            Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) {
                    var limit = Math.pow(2, 8 * byteLength - 1);
                    checkInt(this, value, offset, byteLength, limit - 1, -limit);
                }
                var i = byteLength - 1;
                var mul = 1;
                var sub = 0;
                this[offset + i] = value & 255;
                while (--i >= 0 && (mul *= 256)) {
                    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
                        sub = 1;
>>>>>>> 665842a6c4a70ad448c3fcffde3109aa06ea74eb
                    }
                    this[offset + i] = (value / mul >> 0) - sub & 255;
                }
                return offset + byteLength;
            };
            Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
                if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
                if (value < 0) value = 255 + value + 1;
                this[offset] = value & 255;
                return offset + 1;
            };
            Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    this[offset] = value & 255;
                    this[offset + 1] = value >>> 8;
                } else {
                    objectWriteUInt16(this, value, offset, true);
                }
                return offset + 2;
            };
            Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    this[offset] = value >>> 8;
                    this[offset + 1] = value & 255;
                } else {
                    objectWriteUInt16(this, value, offset, false);
                }
                return offset + 2;
            };
            Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    this[offset] = value & 255;
                    this[offset + 1] = value >>> 8;
                    this[offset + 2] = value >>> 16;
                    this[offset + 3] = value >>> 24;
                } else {
                    objectWriteUInt32(this, value, offset, true);
                }
                return offset + 4;
            };
            Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
                if (value < 0) value = 4294967295 + value + 1;
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    this[offset] = value >>> 24;
                    this[offset + 1] = value >>> 16;
                    this[offset + 2] = value >>> 8;
                    this[offset + 3] = value & 255;
                } else {
                    objectWriteUInt32(this, value, offset, false);
                }
                return offset + 4;
            };
            function checkIEEE754(buf, value, offset, ext, max, min) {
                if (offset + ext > buf.length) throw new RangeError("Index out of range");
                if (offset < 0) throw new RangeError("Index out of range");
            }
            function writeFloat(buf, value, offset, littleEndian, noAssert) {
                if (!noAssert) {
                    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e38, -3.4028234663852886e38);
                }
                ieee754.write(buf, value, offset, littleEndian, 23, 4);
                return offset + 4;
            }
            Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
                return writeFloat(this, value, offset, true, noAssert);
            };
            Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
                return writeFloat(this, value, offset, false, noAssert);
            };
            function writeDouble(buf, value, offset, littleEndian, noAssert) {
                if (!noAssert) {
                    checkIEEE754(buf, value, offset, 8, 1.7976931348623157e308, -1.7976931348623157e308);
                }
                ieee754.write(buf, value, offset, littleEndian, 52, 8);
                return offset + 8;
            }
            Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
                return writeDouble(this, value, offset, true, noAssert);
            };
            Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
                return writeDouble(this, value, offset, false, noAssert);
            };
            Buffer.prototype.copy = function copy(target, targetStart, start, end) {
                if (!start) start = 0;
                if (!end && end !== 0) end = this.length;
                if (targetStart >= target.length) targetStart = target.length;
                if (!targetStart) targetStart = 0;
                if (end > 0 && end < start) end = start;
                if (end === start) return 0;
                if (target.length === 0 || this.length === 0) return 0;
                if (targetStart < 0) {
                    throw new RangeError("targetStart out of bounds");
                }
                if (start < 0 || start >= this.length) throw new RangeError("sourceStart out of bounds");
                if (end < 0) throw new RangeError("sourceEnd out of bounds");
                if (end > this.length) end = this.length;
                if (target.length - targetStart < end - start) {
                    end = target.length - targetStart + start;
                }
                var len = end - start;
                var i;
                if (this === target && start < targetStart && targetStart < end) {
                    for (i = len - 1; i >= 0; --i) {
                        target[i + targetStart] = this[i + start];
                    }
                } else if (len < 1e3 || !Buffer.TYPED_ARRAY_SUPPORT) {
                    for (i = 0; i < len; ++i) {
                        target[i + targetStart] = this[i + start];
                    }
                } else {
                    Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
                }
                return len;
            };
            Buffer.prototype.fill = function fill(val, start, end, encoding) {
                if (typeof val === "string") {
                    if (typeof start === "string") {
                        encoding = start;
                        start = 0;
                        end = this.length;
                    } else if (typeof end === "string") {
                        encoding = end;
                        end = this.length;
                    }
                    if (val.length === 1) {
                        var code = val.charCodeAt(0);
                        if (code < 256) {
                            val = code;
                        }
                    }
                    if (encoding !== undefined && typeof encoding !== "string") {
                        throw new TypeError("encoding must be a string");
                    }
                    if (typeof encoding === "string" && !Buffer.isEncoding(encoding)) {
                        throw new TypeError("Unknown encoding: " + encoding);
                    }
                } else if (typeof val === "number") {
                    val = val & 255;
                }
                if (start < 0 || this.length < start || this.length < end) {
                    throw new RangeError("Out of range index");
                }
                if (end <= start) {
                    return this;
                }
                start = start >>> 0;
                end = end === undefined ? this.length : end >>> 0;
                if (!val) val = 0;
                var i;
                if (typeof val === "number") {
                    for (i = start; i < end; ++i) {
                        this[i] = val;
                    }
                } else {
                    var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
                    var len = bytes.length;
                    for (i = 0; i < end - start; ++i) {
                        this[i + start] = bytes[i % len];
                    }
                }
                return this;
            };
            var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;
            function base64clean(str) {
                str = stringtrim(str).replace(INVALID_BASE64_RE, "");
                if (str.length < 2) return "";
                while (str.length % 4 !== 0) {
                    str = str + "=";
                }
                return str;
            }
            function stringtrim(str) {
                if (str.trim) return str.trim();
                return str.replace(/^\s+|\s+$/g, "");
            }
            function toHex(n) {
                if (n < 16) return "0" + n.toString(16);
                return n.toString(16);
            }
            function utf8ToBytes(string, units) {
                units = units || Infinity;
                var codePoint;
                var length = string.length;
                var leadSurrogate = null;
                var bytes = [];
                for (var i = 0; i < length; ++i) {
                    codePoint = string.charCodeAt(i);
                    if (codePoint > 55295 && codePoint < 57344) {
                        if (!leadSurrogate) {
                            if (codePoint > 56319) {
                                if ((units -= 3) > -1) bytes.push(239, 191, 189);
                                continue;
                            } else if (i + 1 === length) {
                                if ((units -= 3) > -1) bytes.push(239, 191, 189);
                                continue;
                            }
                            leadSurrogate = codePoint;
                            continue;
                        }
                        if (codePoint < 56320) {
                            if ((units -= 3) > -1) bytes.push(239, 191, 189);
                            leadSurrogate = codePoint;
                            continue;
                        }
                        codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
                    } else if (leadSurrogate) {
                        if ((units -= 3) > -1) bytes.push(239, 191, 189);
                    }
                    leadSurrogate = null;
                    if (codePoint < 128) {
                        if ((units -= 1) < 0) break;
                        bytes.push(codePoint);
                    } else if (codePoint < 2048) {
                        if ((units -= 2) < 0) break;
                        bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
                    } else if (codePoint < 65536) {
                        if ((units -= 3) < 0) break;
                        bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
                    } else if (codePoint < 1114112) {
                        if ((units -= 4) < 0) break;
                        bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
                    } else {
                        throw new Error("Invalid code point");
                    }
                }
                return bytes;
            }
            function asciiToBytes(str) {
                var byteArray = [];
                for (var i = 0; i < str.length; ++i) {
                    byteArray.push(str.charCodeAt(i) & 255);
                }
                return byteArray;
            }
            function utf16leToBytes(str, units) {
                var c, hi, lo;
                var byteArray = [];
                for (var i = 0; i < str.length; ++i) {
                    if ((units -= 2) < 0) break;
                    c = str.charCodeAt(i);
                    hi = c >> 8;
                    lo = c % 256;
                    byteArray.push(lo);
                    byteArray.push(hi);
                }
                return byteArray;
            }
            function base64ToBytes(str) {
                return base64.toByteArray(base64clean(str));
            }
            function blitBuffer(src, dst, offset, length) {
                for (var i = 0; i < length; ++i) {
                    if (i + offset >= dst.length || i >= src.length) break;
                    dst[i + offset] = src[i];
                }
                return i;
            }
            function isnan(val) {
                return val !== val;
            }
        }).call(exports, __webpack_require__(37).Buffer, function() {
            return this;
        }());
    }, function(module, exports) {
        var toString = {}.toString;
        module.exports = Array.isArray || function(arr) {
            return toString.call(arr) == "[object Array]";
        };
<<<<<<< HEAD
    }, function(module, exports, __webpack_require__) {
        module.exports = {
            "default": __webpack_require__(42),
            __esModule: true
        };
    }, function(module, exports, __webpack_require__) {
        module.exports = {
            "default": __webpack_require__(43),
            __esModule: true
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        exports.__esModule = true;
        var _iterator = __webpack_require__(40);
        var _iterator2 = _interopRequireDefault(_iterator);
        var _symbol = __webpack_require__(39);
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
    }, function(module, exports, __webpack_require__) {
        __webpack_require__(67);
        __webpack_require__(65);
        __webpack_require__(68);
        __webpack_require__(69);
        module.exports = __webpack_require__(14).Symbol;
    }, function(module, exports, __webpack_require__) {
        __webpack_require__(66);
        __webpack_require__(70);
=======
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
        exports.read = function(buffer, offset, isLE, mLen, nBytes) {
            var e, m;
            var eLen = nBytes * 8 - mLen - 1;
            var eMax = (1 << eLen) - 1;
            var eBias = eMax >> 1;
            var nBits = -7;
            var i = isLE ? nBytes - 1 : 0;
            var d = isLE ? -1 : 1;
            var s = buffer[offset + i];
            i += d;
            e = s & (1 << -nBits) - 1;
            s >>= -nBits;
            nBits += eLen;
            for (;nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}
            m = e & (1 << -nBits) - 1;
            e >>= -nBits;
            nBits += mLen;
            for (;nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}
            if (e === 0) {
                e = 1 - eBias;
            } else if (e === eMax) {
                return m ? NaN : (s ? -1 : 1) * Infinity;
            } else {
                m = m + Math.pow(2, mLen);
                e = e - eBias;
            }
            return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
        };
        exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
            var e, m, c;
            var eLen = nBytes * 8 - mLen - 1;
            var eMax = (1 << eLen) - 1;
            var eBias = eMax >> 1;
            var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
            var i = isLE ? 0 : nBytes - 1;
            var d = isLE ? 1 : -1;
            var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
            value = Math.abs(value);
            if (isNaN(value) || value === Infinity) {
                m = isNaN(value) ? 1 : 0;
                e = eMax;
            } else {
                e = Math.floor(Math.log(value) / Math.LN2);
                if (value * (c = Math.pow(2, -e)) < 1) {
                    e--;
                    c *= 2;
                }
                if (e + eBias >= 1) {
                    value += rt / c;
                } else {
                    value += rt * Math.pow(2, 1 - eBias);
                }
                if (value * c >= 2) {
                    e++;
                    c /= 2;
                }
                if (e + eBias >= eMax) {
                    m = 0;
                    e = eMax;
                } else if (e + eBias >= 1) {
                    m = (value * c - 1) * Math.pow(2, mLen);
                    e = e + eBias;
                } else {
                    m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
                    e = 0;
                }
            }
            for (;mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {}
            e = e << mLen | m;
            eLen += mLen;
            for (;eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {}
            buffer[offset + i - d] |= s * 128;
        };
    }, function(module, exports) {
        "use strict";
        exports.byteLength = byteLength;
        exports.toByteArray = toByteArray;
        exports.fromByteArray = fromByteArray;
        var lookup = [];
        var revLookup = [];
        var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
        var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        for (var i = 0, len = code.length; i < len; ++i) {
            lookup[i] = code[i];
            revLookup[code.charCodeAt(i)] = i;
        }
        revLookup["-".charCodeAt(0)] = 62;
        revLookup["_".charCodeAt(0)] = 63;
        function placeHoldersCount(b64) {
            var len = b64.length;
            if (len % 4 > 0) {
                throw new Error("Invalid string. Length must be a multiple of 4");
            }
            return b64[len - 2] === "=" ? 2 : b64[len - 1] === "=" ? 1 : 0;
        }
        function byteLength(b64) {
            return b64.length * 3 / 4 - placeHoldersCount(b64);
        }
        function toByteArray(b64) {
            var i, j, l, tmp, placeHolders, arr;
            var len = b64.length;
            placeHolders = placeHoldersCount(b64);
            arr = new Arr(len * 3 / 4 - placeHolders);
            l = placeHolders > 0 ? len - 4 : len;
            var L = 0;
            for (i = 0, j = 0; i < l; i += 4, j += 3) {
                tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
                arr[L++] = tmp >> 16 & 255;
                arr[L++] = tmp >> 8 & 255;
                arr[L++] = tmp & 255;
            }
            if (placeHolders === 2) {
                tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
                arr[L++] = tmp & 255;
            } else if (placeHolders === 1) {
                tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
                arr[L++] = tmp >> 8 & 255;
                arr[L++] = tmp & 255;
            }
            return arr;
        }
        function tripletToBase64(num) {
            return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
        }
        function encodeChunk(uint8, start, end) {
            var tmp;
            var output = [];
            for (var i = start; i < end; i += 3) {
                tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
                output.push(tripletToBase64(tmp));
            }
            return output.join("");
        }
        function fromByteArray(uint8) {
            var tmp;
            var len = uint8.length;
            var extraBytes = len % 3;
            var output = "";
            var parts = [];
            var maxChunkLength = 16383;
            for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
                parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
            }
            if (extraBytes === 1) {
                tmp = uint8[len - 1];
                output += lookup[tmp >> 2];
                output += lookup[tmp << 4 & 63];
                output += "==";
            } else if (extraBytes === 2) {
                tmp = (uint8[len - 2] << 8) + uint8[len - 1];
                output += lookup[tmp >> 10];
                output += lookup[tmp >> 4 & 63];
                output += lookup[tmp << 2 & 63];
                output += "=";
            }
            parts.push(output);
            return parts.join("");
        }
    }, function(module, exports) {
        module.exports = ' <div tabindex=0 :class=getWrapCls @focus=activate() @blur="showSearch ? false : deactivate()" @keydown.enter.stop.prevent.self=enterSearchValue()> <div class=xcui-select-selection> <div class=xcui-select-selection-rendered @mousedown.stop=toggle()> <input type=text name=search v-el:search autocomplete=off class=xcui-select-search-input v-if=showSearch v-model=searchValue @focus.prevent=activate() @blur.prevent=deactivate() @keyup.down=keyNext() @keyup.up=keyPrev() @keydown.enter.stop.prevent.self=enterSearchValue() @change.prevent.stop="" :placeholder=placeholder> <span class=xcui-select-selection-text v-if=!showSearch v-text="currentOptionLabel || placeholder"> </span> <i class="glyphicon xcui-select-arrow" @mousedown.prevent.stop=toggle() :class="{\'glyphicon-triangle-bottom\':(!isOpen),\'glyphicon-triangle-top\':(isOpen)}"></i> </div> </div> <div class=xcui-select-menu-dropdown v-show="(isOpen && filteredOptions.length>0) || (isOpen && multiple)"> <ul v-el:list aria-activedescendant class=xcui-select-menu> <li class=xcui-select-menu-item v-if="multiple && multipleMax === value.length"> 最多可选{{multipleMax}}项! </li> <li class=xcui-select-menu-item v-if="filteredOptions.length<1 && searchEmptyText" v-text=searchEmptyText> </li> <template v-for="item in filteredOptions"> <li class=xcui-select-menu-item v-if=!optgroup tabindex=1 :class="{\'xcui-select-menu-item-selected\': isSelected(item), \'xcui-select-menu-item-key\': $index === selectIndex,\'disabled\': item.disable}" @mouseenter.prevent.stop.self=indexSet($index) @mousedown.prevent=select(item)> <partial :name=optionPartial class=xcui-select-menu-item-partial v-if=optionPartial.length></partial> <span v-else v-text=getOptionLabel(item)></span> </li> </template> <template v-for="item in filteredOptions"> <li class=xcui-select-menu-group v-if=optgroup> <div class=xcui-select-menu-group-title>{{item.name}}</div> <ul> <template v-for="option in item.options"> <li class=xcui-select-menu-group-item :class="{\'xcui-select-menu-group-item-selected\': isSelected(option,$parent.$index,$index), \'disabled\': option.disable}" @mousedown.prevent.stop.self=optgroupSelect($parent.$index,$index,option)> <partial :name=optionPartial class=xcui-select-menu-item-partial v-if=optionPartial.length></partial> <span v-else v-text=getOptionLabel(option)></span> </li> </template> </ul> </li> </template> </ul> </div> </div> ';
    }, function(module, exports, __webpack_require__) {
        (function(Buffer) {
            var clone = function() {
                "use strict";
                var nativeMap;
                try {
                    nativeMap = Map;
                } catch (_) {
                    nativeMap = function() {};
                }
                var nativeSet;
                try {
                    nativeSet = Set;
                } catch (_) {
                    nativeSet = function() {};
                }
                var nativePromise;
                try {
                    nativePromise = Promise;
                } catch (_) {
                    nativePromise = function() {};
                }
                function clone(parent, circular, depth, prototype) {
                    var filter;
                    if (typeof circular === "object") {
                        depth = circular.depth;
                        prototype = circular.prototype;
                        filter = circular.filter;
                        circular = circular.circular;
                    }
                    var allParents = [];
                    var allChildren = [];
                    var useBuffer = typeof Buffer != "undefined";
                    if (typeof circular == "undefined") circular = true;
                    if (typeof depth == "undefined") depth = Infinity;
                    function _clone(parent, depth) {
                        if (parent === null) return null;
                        if (depth === 0) return parent;
                        var child;
                        var proto;
                        if (typeof parent != "object") {
                            return parent;
                        }
                        if (parent instanceof nativeMap) {
                            child = new nativeMap();
                        } else if (parent instanceof nativeSet) {
                            child = new nativeSet();
                        } else if (parent instanceof nativePromise) {
                            child = new nativePromise(function(resolve, reject) {
                                parent.then(function(value) {
                                    resolve(_clone(value, depth - 1));
                                }, function(err) {
                                    reject(_clone(err, depth - 1));
                                });
                            });
                        } else if (clone.__isArray(parent)) {
                            child = [];
                        } else if (clone.__isRegExp(parent)) {
                            child = new RegExp(parent.source, __getRegExpFlags(parent));
                            if (parent.lastIndex) child.lastIndex = parent.lastIndex;
                        } else if (clone.__isDate(parent)) {
                            child = new Date(parent.getTime());
                        } else if (useBuffer && Buffer.isBuffer(parent)) {
                            child = new Buffer(parent.length);
                            parent.copy(child);
                            return child;
                        } else {
                            if (typeof prototype == "undefined") {
                                proto = Object.getPrototypeOf(parent);
                                child = Object.create(proto);
                            } else {
                                child = Object.create(prototype);
                                proto = prototype;
                            }
                        }
                        if (circular) {
                            var index = allParents.indexOf(parent);
                            if (index != -1) {
                                return allChildren[index];
                            }
                            allParents.push(parent);
                            allChildren.push(child);
                        }
                        if (parent instanceof nativeMap) {
                            var keyIterator = parent.keys();
                            while (true) {
                                var next = keyIterator.next();
                                if (next.done) {
                                    break;
                                }
                                var keyChild = _clone(next.value, depth - 1);
                                var valueChild = _clone(parent.get(next.value), depth - 1);
                                child.set(keyChild, valueChild);
                            }
                        }
                        if (parent instanceof nativeSet) {
                            var iterator = parent.keys();
                            while (true) {
                                var next = iterator.next();
                                if (next.done) {
                                    break;
                                }
                                var entryChild = _clone(next.value, depth - 1);
                                child.add(entryChild);
                            }
                        }
                        for (var i in parent) {
                            var attrs;
                            if (proto) {
                                attrs = Object.getOwnPropertyDescriptor(proto, i);
                            }
                            if (attrs && attrs.set == null) {
                                continue;
                            }
                            child[i] = _clone(parent[i], depth - 1);
                        }
                        if (Object.getOwnPropertySymbols) {
                            var symbols = Object.getOwnPropertySymbols(parent);
                            for (var i = 0; i < symbols.length; i++) {
                                var symbol = symbols[i];
                                child[symbol] = _clone(parent[symbol], depth - 1);
                            }
                        }
                        return child;
                    }
                    return _clone(parent, depth);
                }
                clone.clonePrototype = function clonePrototype(parent) {
                    if (parent === null) return null;
                    var c = function() {};
                    c.prototype = parent;
                    return new c();
                };
                function __objToStr(o) {
                    return Object.prototype.toString.call(o);
                }
                clone.__objToStr = __objToStr;
                function __isDate(o) {
                    return typeof o === "object" && __objToStr(o) === "[object Date]";
                }
                clone.__isDate = __isDate;
                function __isArray(o) {
                    return typeof o === "object" && __objToStr(o) === "[object Array]";
                }
                clone.__isArray = __isArray;
                function __isRegExp(o) {
                    return typeof o === "object" && __objToStr(o) === "[object RegExp]";
                }
                clone.__isRegExp = __isRegExp;
                function __getRegExpFlags(re) {
                    var flags = "";
                    if (re.global) flags += "g";
                    if (re.ignoreCase) flags += "i";
                    if (re.multiline) flags += "m";
                    return flags;
                }
                clone.__getRegExpFlags = __getRegExpFlags;
                return clone;
            }();
            if (typeof module === "object" && module.exports) {
                module.exports = clone;
            }
        }).call(exports, __webpack_require__(37).Buffer);
    }, function(module, exports, __webpack_require__) {
        __webpack_require__(70);
        __webpack_require__(68);
        __webpack_require__(71);
        __webpack_require__(72);
        module.exports = __webpack_require__(14).Symbol;
    }, function(module, exports, __webpack_require__) {
        __webpack_require__(69);
        __webpack_require__(73);
>>>>>>> 665842a6c4a70ad448c3fcffde3109aa06ea74eb
        module.exports = __webpack_require__(26).f("iterator");
    }, function(module, exports) {
        module.exports = function(it) {
            if (typeof it != "function") throw TypeError(it + " is not a function!");
            return it;
        };
    }, function(module, exports) {
        module.exports = function() {};
    }, function(module, exports, __webpack_require__) {
<<<<<<< HEAD
        var toIObject = __webpack_require__(3), toLength = __webpack_require__(62), toIndex = __webpack_require__(61);
=======
        var toIObject = __webpack_require__(3), toLength = __webpack_require__(65), toIndex = __webpack_require__(64);
>>>>>>> 665842a6c4a70ad448c3fcffde3109aa06ea74eb
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
        var aFunction = __webpack_require__(44);
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
        var getKeys = __webpack_require__(11), gOPS = __webpack_require__(34), pIE = __webpack_require__(19);
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
        var cof = __webpack_require__(27);
        module.exports = Object("z").propertyIsEnumerable(0) ? Object : function(it) {
            return cof(it) == "String" ? it.split("") : Object(it);
        };
    }, function(module, exports, __webpack_require__) {
        var cof = __webpack_require__(27);
        module.exports = Array.isArray || function isArray(arg) {
            return cof(arg) == "Array";
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var create = __webpack_require__(32), descriptor = __webpack_require__(12), setToStringTag = __webpack_require__(20), IteratorPrototype = {};
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
        var getKeys = __webpack_require__(11), toIObject = __webpack_require__(3);
        module.exports = function(object, el) {
            var O = toIObject(object), keys = getKeys(O), length = keys.length, index = 0, key;
            while (length > index) if (O[key = keys[index++]] === el) return key;
        };
    }, function(module, exports, __webpack_require__) {
        var META = __webpack_require__(13)("meta"), isObject = __webpack_require__(10), has = __webpack_require__(2), setDesc = __webpack_require__(6).f, id = 0;
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
        var dP = __webpack_require__(6), anObject = __webpack_require__(8), getKeys = __webpack_require__(11);
        module.exports = __webpack_require__(4) ? Object.defineProperties : function defineProperties(O, Properties) {
            anObject(O);
            var keys = getKeys(Properties), length = keys.length, i = 0, P;
            while (length > i) dP.f(O, P = keys[i++], Properties[P]);
            return O;
        };
    }, function(module, exports, __webpack_require__) {
        var pIE = __webpack_require__(19), createDesc = __webpack_require__(12), toIObject = __webpack_require__(3), toPrimitive = __webpack_require__(24), has = __webpack_require__(2), IE8_DOM_DEFINE = __webpack_require__(30), gOPD = Object.getOwnPropertyDescriptor;
        exports.f = __webpack_require__(4) ? gOPD : function getOwnPropertyDescriptor(O, P) {
            O = toIObject(O);
            P = toPrimitive(P, true);
            if (IE8_DOM_DEFINE) try {
                return gOPD(O, P);
            } catch (e) {}
            if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
        };
    }, function(module, exports, __webpack_require__) {
        var toIObject = __webpack_require__(3), gOPN = __webpack_require__(33).f, toString = {}.toString;
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
<<<<<<< HEAD
        var has = __webpack_require__(2), toObject = __webpack_require__(63), IE_PROTO = __webpack_require__(21)("IE_PROTO"), ObjectProto = Object.prototype;
=======
        var has = __webpack_require__(2), toObject = __webpack_require__(66), IE_PROTO = __webpack_require__(21)("IE_PROTO"), ObjectProto = Object.prototype;
>>>>>>> 665842a6c4a70ad448c3fcffde3109aa06ea74eb
        module.exports = Object.getPrototypeOf || function(O) {
            O = toObject(O);
            if (has(O, IE_PROTO)) return O[IE_PROTO];
            if (typeof O.constructor == "function" && O instanceof O.constructor) {
                return O.constructor.prototype;
            }
            return O instanceof Object ? ObjectProto : null;
        };
    }, function(module, exports, __webpack_require__) {
        var toInteger = __webpack_require__(23), defined = __webpack_require__(15);
        module.exports = function(TO_STRING) {
            return function(that, pos) {
                var s = String(defined(that)), i = toInteger(pos), l = s.length, a, b;
                if (i < 0 || i >= l) return TO_STRING ? "" : undefined;
                a = s.charCodeAt(i);
                return a < 55296 || a > 56319 || i + 1 === l || (b = s.charCodeAt(i + 1)) < 56320 || b > 57343 ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 55296 << 10) + (b - 56320) + 65536;
            };
        };
    }, function(module, exports, __webpack_require__) {
        var toInteger = __webpack_require__(23), max = Math.max, min = Math.min;
        module.exports = function(index, length) {
            index = toInteger(index);
            return index < 0 ? max(index + length, 0) : min(index, length);
        };
    }, function(module, exports, __webpack_require__) {
        var toInteger = __webpack_require__(23), min = Math.min;
        module.exports = function(it) {
            return it > 0 ? min(toInteger(it), 9007199254740991) : 0;
        };
    }, function(module, exports, __webpack_require__) {
        var defined = __webpack_require__(15);
        module.exports = function(it) {
            return Object(defined(it));
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
<<<<<<< HEAD
        var addToUnscopables = __webpack_require__(45), step = __webpack_require__(53), Iterators = __webpack_require__(17), toIObject = __webpack_require__(3);
=======
        var addToUnscopables = __webpack_require__(48), step = __webpack_require__(56), Iterators = __webpack_require__(17), toIObject = __webpack_require__(3);
>>>>>>> 665842a6c4a70ad448c3fcffde3109aa06ea74eb
        module.exports = __webpack_require__(31)(Array, "Array", function(iterated, kind) {
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
    }, function(module, exports) {}, function(module, exports, __webpack_require__) {
        "use strict";
<<<<<<< HEAD
        var $at = __webpack_require__(60)(true);
=======
        var $at = __webpack_require__(63)(true);
>>>>>>> 665842a6c4a70ad448c3fcffde3109aa06ea74eb
        __webpack_require__(31)(String, "String", function(iterated) {
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
<<<<<<< HEAD
        var global = __webpack_require__(1), has = __webpack_require__(2), DESCRIPTORS = __webpack_require__(4), $export = __webpack_require__(29), redefine = __webpack_require__(36), META = __webpack_require__(55).KEY, $fails = __webpack_require__(9), shared = __webpack_require__(22), setToStringTag = __webpack_require__(20), uid = __webpack_require__(13), wks = __webpack_require__(7), wksExt = __webpack_require__(26), wksDefine = __webpack_require__(25), keyOf = __webpack_require__(54), enumKeys = __webpack_require__(48), isArray = __webpack_require__(51), anObject = __webpack_require__(8), toIObject = __webpack_require__(3), toPrimitive = __webpack_require__(24), createDesc = __webpack_require__(12), _create = __webpack_require__(32), gOPNExt = __webpack_require__(58), $GOPD = __webpack_require__(57), $DP = __webpack_require__(6), $keys = __webpack_require__(11), gOPD = $GOPD.f, dP = $DP.f, gOPN = gOPNExt.f, $Symbol = global.Symbol, $JSON = global.JSON, _stringify = $JSON && $JSON.stringify, PROTOTYPE = "prototype", HIDDEN = wks("_hidden"), TO_PRIMITIVE = wks("toPrimitive"), isEnum = {}.propertyIsEnumerable, SymbolRegistry = shared("symbol-registry"), AllSymbols = shared("symbols"), OPSymbols = shared("op-symbols"), ObjectProto = Object[PROTOTYPE], USE_NATIVE = typeof $Symbol == "function", QObject = global.QObject;
=======
        var global = __webpack_require__(1), has = __webpack_require__(2), DESCRIPTORS = __webpack_require__(4), $export = __webpack_require__(29), redefine = __webpack_require__(36), META = __webpack_require__(58).KEY, $fails = __webpack_require__(9), shared = __webpack_require__(22), setToStringTag = __webpack_require__(20), uid = __webpack_require__(13), wks = __webpack_require__(7), wksExt = __webpack_require__(26), wksDefine = __webpack_require__(25), keyOf = __webpack_require__(57), enumKeys = __webpack_require__(51), isArray = __webpack_require__(54), anObject = __webpack_require__(8), toIObject = __webpack_require__(3), toPrimitive = __webpack_require__(24), createDesc = __webpack_require__(12), _create = __webpack_require__(32), gOPNExt = __webpack_require__(61), $GOPD = __webpack_require__(60), $DP = __webpack_require__(6), $keys = __webpack_require__(11), gOPD = $GOPD.f, dP = $DP.f, gOPN = gOPNExt.f, $Symbol = global.Symbol, $JSON = global.JSON, _stringify = $JSON && $JSON.stringify, PROTOTYPE = "prototype", HIDDEN = wks("_hidden"), TO_PRIMITIVE = wks("toPrimitive"), isEnum = {}.propertyIsEnumerable, SymbolRegistry = shared("symbol-registry"), AllSymbols = shared("symbols"), OPSymbols = shared("op-symbols"), ObjectProto = Object[PROTOTYPE], USE_NATIVE = typeof $Symbol == "function", QObject = global.QObject;
>>>>>>> 665842a6c4a70ad448c3fcffde3109aa06ea74eb
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
            __webpack_require__(33).f = gOPNExt.f = $getOwnPropertyNames;
            __webpack_require__(19).f = $propertyIsEnumerable;
            __webpack_require__(34).f = $getOwnPropertySymbols;
            if (DESCRIPTORS && !__webpack_require__(18)) {
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
            for: function(key) {
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
        __webpack_require__(25)("asyncIterator");
    }, function(module, exports, __webpack_require__) {
        __webpack_require__(25)("observable");
    }, function(module, exports, __webpack_require__) {
<<<<<<< HEAD
        __webpack_require__(64);
=======
        __webpack_require__(67);
>>>>>>> 665842a6c4a70ad448c3fcffde3109aa06ea74eb
        var global = __webpack_require__(1), hide = __webpack_require__(5), Iterators = __webpack_require__(17), TO_STRING_TAG = __webpack_require__(7)("toStringTag");
        for (var collections = [ "NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList" ], i = 0; i < 5; i++) {
            var NAME = collections[i], Collection = global[NAME], proto = Collection && Collection.prototype;
            if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
            Iterators[NAME] = Iterators.Array;
        }
    }, function(module, exports, __webpack_require__) {
<<<<<<< HEAD
        (function(Buffer) {
            var clone = function() {
                "use strict";
                var nativeMap;
                try {
                    nativeMap = Map;
                } catch (_) {
                    nativeMap = function() {};
                }
                var nativeSet;
                try {
                    nativeSet = Set;
                } catch (_) {
                    nativeSet = function() {};
                }
                var nativePromise;
                try {
                    nativePromise = Promise;
                } catch (_) {
                    nativePromise = function() {};
                }
                function clone(parent, circular, depth, prototype) {
                    var filter;
                    if (typeof circular === "object") {
                        depth = circular.depth;
                        prototype = circular.prototype;
                        filter = circular.filter;
                        circular = circular.circular;
                    }
                    var allParents = [];
                    var allChildren = [];
                    var useBuffer = typeof Buffer != "undefined";
                    if (typeof circular == "undefined") circular = true;
                    if (typeof depth == "undefined") depth = Infinity;
                    function _clone(parent, depth) {
                        if (parent === null) return null;
                        if (depth === 0) return parent;
                        var child;
                        var proto;
                        if (typeof parent != "object") {
                            return parent;
                        }
                        if (parent instanceof nativeMap) {
                            child = new nativeMap();
                        } else if (parent instanceof nativeSet) {
                            child = new nativeSet();
                        } else if (parent instanceof nativePromise) {
                            child = new nativePromise(function(resolve, reject) {
                                parent.then(function(value) {
                                    resolve(_clone(value, depth - 1));
                                }, function(err) {
                                    reject(_clone(err, depth - 1));
                                });
                            });
                        } else if (clone.__isArray(parent)) {
                            child = [];
                        } else if (clone.__isRegExp(parent)) {
                            child = new RegExp(parent.source, __getRegExpFlags(parent));
                            if (parent.lastIndex) child.lastIndex = parent.lastIndex;
                        } else if (clone.__isDate(parent)) {
                            child = new Date(parent.getTime());
                        } else if (useBuffer && Buffer.isBuffer(parent)) {
                            child = new Buffer(parent.length);
                            parent.copy(child);
                            return child;
                        } else {
                            if (typeof prototype == "undefined") {
                                proto = Object.getPrototypeOf(parent);
                                child = Object.create(proto);
                            } else {
                                child = Object.create(prototype);
                                proto = prototype;
                            }
                        }
                        if (circular) {
                            var index = allParents.indexOf(parent);
                            if (index != -1) {
                                return allChildren[index];
                            }
                            allParents.push(parent);
                            allChildren.push(child);
                        }
                        if (parent instanceof nativeMap) {
                            var keyIterator = parent.keys();
                            while (true) {
                                var next = keyIterator.next();
                                if (next.done) {
                                    break;
                                }
                                var keyChild = _clone(next.value, depth - 1);
                                var valueChild = _clone(parent.get(next.value), depth - 1);
                                child.set(keyChild, valueChild);
                            }
                        }
                        if (parent instanceof nativeSet) {
                            var iterator = parent.keys();
                            while (true) {
                                var next = iterator.next();
                                if (next.done) {
                                    break;
                                }
                                var entryChild = _clone(next.value, depth - 1);
                                child.add(entryChild);
                            }
                        }
                        for (var i in parent) {
                            var attrs;
                            if (proto) {
                                attrs = Object.getOwnPropertyDescriptor(proto, i);
                            }
                            if (attrs && attrs.set == null) {
                                continue;
                            }
                            child[i] = _clone(parent[i], depth - 1);
                        }
                        if (Object.getOwnPropertySymbols) {
                            var symbols = Object.getOwnPropertySymbols(parent);
                            for (var i = 0; i < symbols.length; i++) {
                                var symbol = symbols[i];
                                child[symbol] = _clone(parent[symbol], depth - 1);
                            }
                        }
                        return child;
                    }
                    return _clone(parent, depth);
                }
                clone.clonePrototype = function clonePrototype(parent) {
                    if (parent === null) return null;
                    var c = function() {};
                    c.prototype = parent;
                    return new c();
                };
                function __objToStr(o) {
                    return Object.prototype.toString.call(o);
                }
                clone.__objToStr = __objToStr;
                function __isDate(o) {
                    return typeof o === "object" && __objToStr(o) === "[object Date]";
                }
                clone.__isDate = __isDate;
                function __isArray(o) {
                    return typeof o === "object" && __objToStr(o) === "[object Array]";
                }
                clone.__isArray = __isArray;
                function __isRegExp(o) {
                    return typeof o === "object" && __objToStr(o) === "[object RegExp]";
                }
                clone.__isRegExp = __isRegExp;
                function __getRegExpFlags(re) {
                    var flags = "";
                    if (re.global) flags += "g";
                    if (re.ignoreCase) flags += "i";
                    if (re.multiline) flags += "m";
                    return flags;
                }
                clone.__getRegExpFlags = __getRegExpFlags;
                return clone;
            }();
            if (typeof module === "object" && module.exports) {
                module.exports = clone;
            }
        }).call(exports, __webpack_require__(37).Buffer);
    }, function(module, exports) {}, function(module, exports) {
=======
        module.exports = {
            default: __webpack_require__(45),
            __esModule: true
        };
    }, function(module, exports, __webpack_require__) {
        module.exports = {
            default: __webpack_require__(46),
            __esModule: true
        };
    }, function(module, exports, __webpack_require__) {
>>>>>>> 665842a6c4a70ad448c3fcffde3109aa06ea74eb
        "use strict";
        exports.__esModule = true;
        var _iterator = __webpack_require__(75);
        var _iterator2 = _interopRequireDefault(_iterator);
        var _symbol = __webpack_require__(74);
        var _symbol2 = _interopRequireDefault(_symbol);
        var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj;
        };
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function(obj) {
            return typeof obj === "undefined" ? "undefined" : _typeof(obj);
        } : function(obj) {
            return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _typeof2 = __webpack_require__(76);
        var _typeof3 = _interopRequireDefault(_typeof2);
        var _clone = __webpack_require__(44);
        var _clone2 = _interopRequireDefault(_clone);
        var _fuzzysearch = __webpack_require__(40);
        var _fuzzysearch2 = _interopRequireDefault(_fuzzysearch);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
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
                    default: false
                },
                showSearch: {
                    type: Boolean,
                    default: false
                },
                clearOnSelect: {
                    type: Boolean,
                    default: false
                },
                searchEmptyText: {
                    type: String,
                    default: ""
                },
                optgroup: {
                    type: Boolean,
                    default: false
                },
                optionPartial: {
                    type: String,
                    default: ""
                },
                customLabel: {
                    type: Function
                },
                options: {
                    type: Array
                },
                multiple: {
                    type: Boolean,
                    default: false
                },
                multipleMax: {
                    type: Number
                },
                label: {
                    type: String,
                    default: ""
                },
                closeAfterSelect: {
                    type: Boolean,
                    default: true
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
                            this.removeOption(optionValue);
                        } else {
                            if (this.multipleMax > this.value.length) {
                                this.value.push(optionValue);
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
                            return this.value.indexOf(option[me.label] || option.label) > -1;
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
                        this.values.map(function(e) {});
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
                    var _getDropDownHeight = this.getDropDownHeight, itemHeight = _getDropDownHeight.itemHeight, listHeight = _getDropDownHeight.listHeight;
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
                    if (!this.value) {
                        return this.placeholder;
                    }
                    if (this.multiple) {
                        return this.value.join(",");
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
<<<<<<< HEAD
            return true;
        }
        module.exports = fuzzysearch;
    }, function(module, exports) {
        module.exports = ' <div tabindex=0 :class=getWrapCls @focus=activate() @blur="showSearch ? false : deactivate()" @keydown.enter.stop.prevent.self=enterSearchValue()> <div class=xcui-select-selection> <div class=xcui-select-selection-rendered @mousedown.stop=toggle()> <input type=text name=search v-el:search autocomplete=off class=xcui-select-search-input v-if=showSearch v-model=searchValue @focus.prevent=activate() @blur.prevent=deactivate() @keyup.down=keyNext() @keyup.up=keyPrev() @keydown.enter.stop.prevent.self=enterSearchValue() @change.prevent.stop="" :placeholder=placeholder> <span class=xcui-select-selection-text v-if=!showSearch v-text="currentOptionLabel || placeholder"> </span> <i class="glyphicon xcui-select-arrow" @mousedown.prevent.stop=toggle() :class="{\'glyphicon-triangle-bottom\':(!isOpen),\'glyphicon-triangle-top\':(isOpen)}"></i> </div> </div> <div class=xcui-select-menu-dropdown v-show="(isOpen && filteredOptions.length>0) || (isOpen && multiple)"> <ul v-el:list aria-activedescendant class=xcui-select-menu> <li class=xcui-select-menu-item v-if="multiple && multipleMax === value.length"> 最多可选{{multipleMax}}项! </li> <li class=xcui-select-menu-item v-if="filteredOptions.length<1 && searchEmptyText" v-text=searchEmptyText> </li> <template v-for="item in filteredOptions"> <li class=xcui-select-menu-item v-if=!optgroup tabindex=1 :class="{\'xcui-select-menu-item-selected\': isSelected(item), \'xcui-select-menu-item-key\': $index === selectIndex,\'disabled\': item.disable}" @mouseenter.prevent.stop.self=indexSet($index) @mousedown.prevent=select(item)> <partial :name=optionPartial class=xcui-select-menu-item-partial v-if=optionPartial.length></partial> <span v-else v-text=getOptionLabel(item)></span> </li> </template> <template v-for="item in filteredOptions"> <li class=xcui-select-menu-group v-if=optgroup> <div class=xcui-select-menu-group-title>{{item.name}}</div> <ul> <template v-for="option in item.options"> <li class=xcui-select-menu-group-item :class="{\'xcui-select-menu-group-item-selected\': isSelected(option,$parent.$index,$index), \'disabled\': option.disable}" @mousedown.prevent.stop.self=optgroupSelect($parent.$index,$index,option)> <partial :name=optionPartial class=xcui-select-menu-item-partial v-if=optionPartial.length></partial> <span v-else v-text=getOptionLabel(option)></span> </li> </template> </ul> </li> </template> </ul> </div> </div> ';
    }, function(module, exports, __webpack_require__) {
        var __vue_script__, __vue_template__;
        __webpack_require__(72);
        __vue_script__ = __webpack_require__(38);
        __vue_template__ = __webpack_require__(74);
=======
        };
    }, function(module, exports, __webpack_require__) {
        var __vue_script__, __vue_template__;
        var __vue_styles__ = {};
        __webpack_require__(39);
        __vue_script__ = __webpack_require__(77);
        __vue_template__ = __webpack_require__(43);
>>>>>>> 665842a6c4a70ad448c3fcffde3109aa06ea74eb
        module.exports = __vue_script__ || {};
        if (module.exports.__esModule) module.exports = module.exports.default;
        var __vue_options__ = typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports;
        if (__vue_template__) {
            __vue_options__.template = __vue_template__;
        }
<<<<<<< HEAD
    }, function(module, exports, __webpack_require__) {
        var lookup = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        (function(exports) {
            "use strict";
            var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
            var PLUS = "+".charCodeAt(0);
            var SLASH = "/".charCodeAt(0);
            var NUMBER = "0".charCodeAt(0);
            var LOWER = "a".charCodeAt(0);
            var UPPER = "A".charCodeAt(0);
            var PLUS_URL_SAFE = "-".charCodeAt(0);
            var SLASH_URL_SAFE = "_".charCodeAt(0);
            function decode(elt) {
                var code = elt.charCodeAt(0);
                if (code === PLUS || code === PLUS_URL_SAFE) return 62;
                if (code === SLASH || code === SLASH_URL_SAFE) return 63;
                if (code < NUMBER) return -1;
                if (code < NUMBER + 10) return code - NUMBER + 26 + 26;
                if (code < UPPER + 26) return code - UPPER;
                if (code < LOWER + 26) return code - LOWER + 26;
            }
            function b64ToByteArray(b64) {
                var i, j, l, tmp, placeHolders, arr;
                if (b64.length % 4 > 0) {
                    throw new Error("Invalid string. Length must be a multiple of 4");
                }
                var len = b64.length;
                placeHolders = "=" === b64.charAt(len - 2) ? 2 : "=" === b64.charAt(len - 1) ? 1 : 0;
                arr = new Arr(b64.length * 3 / 4 - placeHolders);
                l = placeHolders > 0 ? b64.length - 4 : b64.length;
                var L = 0;
                function push(v) {
                    arr[L++] = v;
                }
                for (i = 0, j = 0; i < l; i += 4, j += 3) {
                    tmp = decode(b64.charAt(i)) << 18 | decode(b64.charAt(i + 1)) << 12 | decode(b64.charAt(i + 2)) << 6 | decode(b64.charAt(i + 3));
                    push((tmp & 16711680) >> 16);
                    push((tmp & 65280) >> 8);
                    push(tmp & 255);
                }
                if (placeHolders === 2) {
                    tmp = decode(b64.charAt(i)) << 2 | decode(b64.charAt(i + 1)) >> 4;
                    push(tmp & 255);
                } else if (placeHolders === 1) {
                    tmp = decode(b64.charAt(i)) << 10 | decode(b64.charAt(i + 1)) << 4 | decode(b64.charAt(i + 2)) >> 2;
                    push(tmp >> 8 & 255);
                    push(tmp & 255);
                }
                return arr;
            }
            function uint8ToBase64(uint8) {
                var i, extraBytes = uint8.length % 3, output = "", temp, length;
                function encode(num) {
                    return lookup.charAt(num);
                }
                function tripletToBase64(num) {
                    return encode(num >> 18 & 63) + encode(num >> 12 & 63) + encode(num >> 6 & 63) + encode(num & 63);
                }
                for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
                    temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
                    output += tripletToBase64(temp);
                }
                switch (extraBytes) {
                  case 1:
                    temp = uint8[uint8.length - 1];
                    output += encode(temp >> 2);
                    output += encode(temp << 4 & 63);
                    output += "==";
                    break;

                  case 2:
                    temp = (uint8[uint8.length - 2] << 8) + uint8[uint8.length - 1];
                    output += encode(temp >> 10);
                    output += encode(temp >> 4 & 63);
                    output += encode(temp << 2 & 63);
                    output += "=";
                    break;
                }
                return output;
            }
            exports.toByteArray = b64ToByteArray;
            exports.fromByteArray = uint8ToBase64;
        })(false ? this.base64js = {} : exports);
    }, function(module, exports) {
        exports.read = function(buffer, offset, isLE, mLen, nBytes) {
            var e, m;
            var eLen = nBytes * 8 - mLen - 1;
            var eMax = (1 << eLen) - 1;
            var eBias = eMax >> 1;
            var nBits = -7;
            var i = isLE ? nBytes - 1 : 0;
            var d = isLE ? -1 : 1;
            var s = buffer[offset + i];
            i += d;
            e = s & (1 << -nBits) - 1;
            s >>= -nBits;
            nBits += eLen;
            for (;nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}
            m = e & (1 << -nBits) - 1;
            e >>= -nBits;
            nBits += mLen;
            for (;nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}
            if (e === 0) {
                e = 1 - eBias;
            } else if (e === eMax) {
                return m ? NaN : (s ? -1 : 1) * Infinity;
            } else {
                m = m + Math.pow(2, mLen);
                e = e - eBias;
            }
            return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
        };
        exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
            var e, m, c;
            var eLen = nBytes * 8 - mLen - 1;
            var eMax = (1 << eLen) - 1;
            var eBias = eMax >> 1;
            var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
            var i = isLE ? 0 : nBytes - 1;
            var d = isLE ? 1 : -1;
            var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
            value = Math.abs(value);
            if (isNaN(value) || value === Infinity) {
                m = isNaN(value) ? 1 : 0;
                e = eMax;
            } else {
                e = Math.floor(Math.log(value) / Math.LN2);
                if (value * (c = Math.pow(2, -e)) < 1) {
                    e--;
                    c *= 2;
                }
                if (e + eBias >= 1) {
                    value += rt / c;
                } else {
                    value += rt * Math.pow(2, 1 - eBias);
                }
                if (value * c >= 2) {
                    e++;
                    c /= 2;
                }
                if (e + eBias >= eMax) {
                    m = 0;
                    e = eMax;
                } else if (e + eBias >= 1) {
                    m = (value * c - 1) * Math.pow(2, mLen);
                    e = e + eBias;
                } else {
                    m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
                    e = 0;
                }
            }
            for (;mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {}
            e = e << mLen | m;
            eLen += mLen;
            for (;eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {}
            buffer[offset + i - d] |= s * 128;
        };
    }, function(module, exports) {
        var toString = {}.toString;
        module.exports = Array.isArray || function(arr) {
            return toString.call(arr) == "[object Array]";
        };
=======
        if (!__vue_options__.computed) __vue_options__.computed = {};
        Object.keys(__vue_styles__).forEach(function(key) {
            var module = __vue_styles__[key];
            __vue_options__.computed[key] = function() {
                return module;
            };
        });
>>>>>>> 665842a6c4a70ad448c3fcffde3109aa06ea74eb
    } ]);
});

