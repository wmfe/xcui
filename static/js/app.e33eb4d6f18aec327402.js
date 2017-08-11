/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		35: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "static/js/chunk." + chunkId + "." + {"0":"74a09f77a872cce2b009","1":"a2535c164b7dc1e0d0c1","2":"35fcd6691056bb18fd45","3":"87a6c7a9d361fb10080d","4":"9031bd0a52429502cd16","5":"fdeba0b892d9c3319137","6":"ca1392027763fbe2ec50","7":"2292f37499c6e43c33a7","8":"3ebe9fc0cf9c18ab6bee","9":"544f98bd87453fc9f47d","10":"75a5956d5f731fc59830","11":"8ebe7155c8b696e5ca2d","12":"8375233277f44c76050b","13":"ecc4218c226f5ccd20b5","14":"2ef8b47949eb33f28c66","15":"cde7706ad8eca2eaef6b","16":"adcd0bd7b3c39a740d7e","17":"487b713ec95aa600bcf9","18":"75a69b3d3c4a368598df","19":"bef6049bc196dcc28fdb","20":"97eb7f174286bdfa7e16","21":"f5d09b88219c7c2c46d3","22":"9bae0f3231e48126bd08","23":"4fc6c0fad4a38e22c08b","24":"e334f820130d37ed31a7","25":"c015f350ebc62c06703a","26":"954ad9273c94182ea971","27":"3796972a9584fedfd610","28":"9ec7a38006a62f959f86","29":"34dc15a4f05c10388d3f","30":"cd0061b4da5ed06a1c65","31":"5640fb98d5b7a2ef2525","32":"80aee12957f83ea5741b","33":"fed14b7bd10c8e3e7c11","34":"cba475afdcb1d4b098f9"}[chunkId] + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/xcui/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 80);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.format = format;
exports.isEmptyValue = isEmptyValue;
exports.isEmptyObject = isEmptyObject;
exports.asyncMap = asyncMap;
exports.complementError = complementError;
exports.deepMerge = deepMerge;
var formatRegExp = /%[sdj%]/g;

var warning = exports.warning = function warning() {};

// don't print warning message when in production env or node runtime
if (false) {
  exports.warning = warning = function warning(type, errors) {
    if (typeof console !== 'undefined' && console.warn) {
      if (errors.every(function (e) {
        return typeof e === 'string';
      })) {
        console.warn(type, errors);
      }
    }
  };
}

function format() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var i = 1;
  var f = args[0];
  var len = args.length;
  if (typeof f === 'function') {
    return f.apply(null, args.slice(1));
  }
  if (typeof f === 'string') {
    var str = String(f).replace(formatRegExp, function (x) {
      if (x === '%%') {
        return '%';
      }
      if (i >= len) {
        return x;
      }
      switch (x) {
        case '%s':
          return String(args[i++]);
        case '%d':
          return Number(args[i++]);
        case '%j':
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return '[Circular]';
          }
          break;
        default:
          return x;
      }
    });
    for (var arg = args[i]; i < len; arg = args[++i]) {
      str += ' ' + arg;
    }
    return str;
  }
  return f;
}

function isNativeStringType(type) {
  return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'pattern';
}

function isEmptyValue(value, type) {
  if (value === undefined || value === null) {
    return true;
  }
  if (type === 'array' && Array.isArray(value) && !value.length) {
    return true;
  }
  if (isNativeStringType(type) && typeof value === 'string' && !value) {
    return true;
  }
  return false;
}

function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

function asyncParallelArray(arr, func, callback) {
  var results = [];
  var total = 0;
  var arrLength = arr.length;

  function count(errors) {
    results.push.apply(results, errors);
    total++;
    if (total === arrLength) {
      callback(results);
    }
  }

  arr.forEach(function (a) {
    func(a, count);
  });
}

function asyncSerialArray(arr, func, callback) {
  var index = 0;
  var arrLength = arr.length;

  function next(errors) {
    if (errors && errors.length) {
      callback(errors);
      return;
    }
    var original = index;
    index = index + 1;
    if (original < arrLength) {
      func(arr[original], next);
    } else {
      callback([]);
    }
  }

  next([]);
}

function flattenObjArr(objArr) {
  var ret = [];
  Object.keys(objArr).forEach(function (k) {
    ret.push.apply(ret, objArr[k]);
  });
  return ret;
}

function asyncMap(objArr, option, func, callback) {
  if (option.first) {
    var flattenArr = flattenObjArr(objArr);
    return asyncSerialArray(flattenArr, func, callback);
  }
  var firstFields = option.firstFields || [];
  if (firstFields === true) {
    firstFields = Object.keys(objArr);
  }
  var objArrKeys = Object.keys(objArr);
  var objArrLength = objArrKeys.length;
  var total = 0;
  var results = [];
  var next = function next(errors) {
    results.push.apply(results, errors);
    total++;
    if (total === objArrLength) {
      callback(results);
    }
  };
  objArrKeys.forEach(function (key) {
    var arr = objArr[key];
    if (firstFields.indexOf(key) !== -1) {
      asyncSerialArray(arr, func, next);
    } else {
      asyncParallelArray(arr, func, next);
    }
  });
}

function complementError(rule) {
  return function (oe) {
    if (oe && oe.message) {
      oe.field = oe.field || rule.fullField;
      return oe;
    }
    return {
      message: oe,
      field: oe.field || rule.fullField
    };
  };
}

function deepMerge(target, source) {
  if (source) {
    for (var s in source) {
      if (source.hasOwnProperty(s)) {
        var value = source[s];
        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && _typeof(target[s]) === 'object') {
          target[s] = _extends({}, target[s], value);
        } else {
          target[s] = value;
        }
      }
    }
  }
  return target;
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function _broadcast(componentName, eventName, params) {
    this.$children.forEach(function (child) {
        var name = child.$options.componentName;

        if (name === componentName) {
            child.$emit.apply(child, [eventName].concat(params));
        } else {
            _broadcast.apply(child, [componentName, eventName].concat([params]));
        }
    });
}
exports.default = {
    methods: {
        dispatch: function dispatch(componentName, eventName, params) {
            var parent = this.$parent || this.$root;
            var name = parent.$options.componentName;

            while (parent && (!name || name !== componentName)) {
                parent = parent.$parent;

                if (parent) {
                    name = parent.$options.componentName;
                }
            }
            if (parent) {
                parent.$emit.apply(parent, [eventName].concat(params));
            }
        },
        broadcast: function broadcast(componentName, eventName, params) {
            _broadcast.call(this, componentName, eventName, params);
        }
    }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = {
  required: __webpack_require__(75),
  whitespace: __webpack_require__(305),
  type: __webpack_require__(306),
  range: __webpack_require__(307),
  "enum": __webpack_require__(308),
  pattern: __webpack_require__(309)
};
module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(36)('wks')
  , uid        = __webpack_require__(26)
  , Symbol     = __webpack_require__(6).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(20)
  , IE8_DOM_DEFINE = __webpack_require__(49)
  , toPrimitive    = __webpack_require__(31)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(11) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(52)
  , defined = __webpack_require__(32);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _input = __webpack_require__(135);

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _input2.default;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(6)
  , core      = __webpack_require__(4)
  , ctx       = __webpack_require__(48)
  , hide      = __webpack_require__(15)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(16)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(101), __esModule: true };

/***/ }),
/* 13 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.limitRange = exports.getRangeHours = exports.nextMonth = exports.prevMonth = exports.getWeekNumber = exports.getStartDateOfMonth = exports.DAY_DURATION = exports.getFirstDayOfMonth = exports.getDayCountOfMonth = exports.parseDate = exports.formatDate = exports.toDate = exports.isDate = exports.equalDate = undefined;

var _date = __webpack_require__(105);

var _date2 = _interopRequireDefault(_date);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var newArray = function newArray(start, end) {
    var result = [];
    for (var i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
};

var equalDate = exports.equalDate = function equalDate(dateA, dateB) {
    return dateA === dateB || new Date(dateA).getTime() === new Date(dateB).getTime();
};

var isDate = exports.isDate = function isDate(date) {
    if (date === null || date === undefined) {
        return false;
    }
    if (isNaN(new Date(date).getTime())) {
        return false;
    }
    return true;
};

var toDate = exports.toDate = function toDate(date) {
    return isDate(date) ? new Date(date) : null;
};

var formatDate = exports.formatDate = function formatDate(date, format) {
    date = toDate(date);
    if (!date) {
        return '';
    }
    return _date2.default.format(date, format || 'yyyy-MM-dd');
};

var parseDate = exports.parseDate = function parseDate(string, format) {
    return _date2.default.parse(string, format || 'yyyy-MM-dd');
};

var getDayCountOfMonth = exports.getDayCountOfMonth = function getDayCountOfMonth(year, month) {
    if (month === 3 || month === 5 || month === 8 || month === 10) {
        return 30;
    }

    if (month === 1) {
        if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
            return 29;
        }
        return 28;
    }

    return 31;
};

var getFirstDayOfMonth = exports.getFirstDayOfMonth = function getFirstDayOfMonth(date) {
    var temp = new Date(date.getTime());
    temp.setDate(1);
    return temp.getDay();
};

var DAY_DURATION = exports.DAY_DURATION = 86400000;

var getStartDateOfMonth = exports.getStartDateOfMonth = function getStartDateOfMonth(year, month) {
    var result = new Date(year, month, 1);
    var day = result.getDay();

    if (day === 0) {
        result.setTime(result.getTime() - DAY_DURATION * 7);
    } else {
        result.setTime(result.getTime() - DAY_DURATION * day);
    }

    return result;
};

var getWeekNumber = exports.getWeekNumber = function getWeekNumber(src) {
    var date = new Date(src.getTime());
    date.setHours(0, 0, 0, 0);

    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);

    var week1 = new Date(date.getFullYear(), 0, 4);

    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
};

var prevMonth = exports.prevMonth = function prevMonth(src) {
    var year = src.getFullYear();
    var month = src.getMonth();
    var date = src.getDate();

    var newYear = month === 0 ? year - 1 : year;
    var newMonth = month === 0 ? 11 : month - 1;

    var newMonthDayCount = getDayCountOfMonth(newYear, newMonth);
    if (newMonthDayCount < date) {
        src.setDate(newMonthDayCount);
    }

    src.setMonth(newMonth);
    src.setFullYear(newYear);

    return new Date(src.getTime());
};

var nextMonth = exports.nextMonth = function nextMonth(src) {
    var year = src.getFullYear();
    var month = src.getMonth();
    var date = src.getDate();

    var newYear = month === 11 ? year + 1 : year;
    var newMonth = month === 11 ? 0 : month + 1;

    var newMonthDayCount = getDayCountOfMonth(newYear, newMonth);
    if (newMonthDayCount < date) {
        src.setDate(newMonthDayCount);
    }

    src.setMonth(newMonth);
    src.setFullYear(newYear);

    return new Date(src.getTime());
};

var getRangeHours = exports.getRangeHours = function getRangeHours(ranges) {
    var hours = [];
    var disabledHours = [];

    (ranges || []).forEach(function (range) {
        var value = range.map(function (date) {
            return date.getHours();
        });

        disabledHours = disabledHours.concat(newArray(value[0], value[1]));
    });

    if (disabledHours.length) {
        for (var i = 0; i < 24; i++) {
            hours[i] = disabledHours.indexOf(i) === -1;
        }
    } else {
        for (var _i = 0; _i < 24; _i++) {
            hours[_i] = false;
        }
    }

    return hours;
};

var limitRange = exports.limitRange = function limitRange(date, ranges) {
    var format = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'yyyy-MM-dd HH:mm:ss';

    if (!ranges || !ranges.length) {
        return date;
    }

    var len = ranges.length;

    date = _date2.default.parse(_date2.default.format(date, format), format);
    for (var i = 0; i < len; i++) {
        var range = ranges[i];
        if (date >= range[0] && date <= range[1]) {
            return date;
        }
    }

    var maxDate = ranges[0][0];
    var minDate = ranges[0][0];

    ranges.forEach(function (range) {
        minDate = new Date(Math.min(range[0], minDate));
        maxDate = new Date(Math.max(range[1], maxDate));
    });

    return date < minDate ? minDate : maxDate;
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(7)
  , createDesc = __webpack_require__(22);
module.exports = __webpack_require__(11) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(51)
  , enumBugKeys = __webpack_require__(37);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__(141);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getconfig = function getconfig(path) {
    var ret = '';
    var current = _config2.default;
    var arr = path.split('.');
    for (var i = 0, j = arr.length; i < j; i++) {
        var prop = arr[i];
        ret = current[prop];
        if (i === j - 1) {
            return ret;
        }
        if (!ret) {
            return '';
        }
        current = ret;
    }
    return '';
};

exports.default = {
    methods: {
        t: function t() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return getconfig.apply(this, args);
        }
    }
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStyle = exports.once = exports.off = exports.on = undefined;

var _typeof2 = __webpack_require__(28);

var _typeof3 = _interopRequireDefault(_typeof2);

exports.hasClass = hasClass;
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.setStyle = setStyle;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
var MOZ_HACK_REGEXP = /^moz([A-Z])/;
var ieVersion = Number(document.documentMode);

var trim = function trim(string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};

var camelCase = function camelCase(name) {
  return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter;
  }).replace(MOZ_HACK_REGEXP, 'Moz$1');
};

var on = exports.on = function () {
  if (document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler);
      }
    };
  }
}();

var off = exports.off = function () {
  if (document.removeEventListener) {
    return function (element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler);
      }
    };
  }
}();

var once = exports.once = function once(el, event, fn) {
  var listener = function listener() {
    if (fn) {
      fn.apply(this, arguments);
    }
    off(el, event, listener);
  };
  on(el, event, listener);
};

function hasClass(el, cls) {
  if (!el || !cls) return false;
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }
};

function addClass(el, cls) {
  if (!el) return;
  var curClass = el.className;
  var classes = (cls || '').split(' ');

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.add(clsName);
    } else {
      if (!hasClass(el, clsName)) {
        curClass += ' ' + clsName;
      }
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
};

function removeClass(el, cls) {
  if (!el || !cls) return;
  var classes = cls.split(' ');
  var curClass = ' ' + el.className + ' ';

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.remove(clsName);
    } else {
      if (hasClass(el, clsName)) {
        curClass = curClass.replace(' ' + clsName + ' ', ' ');
      }
    }
  }
  if (!el.classList) {
    el.className = trim(curClass);
  }
};

var getStyle = exports.getStyle = ieVersion < 9 ? function (element, styleName) {
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);
  if (styleName === 'float') {
    styleName = 'styleFloat';
  }
  try {
    switch (styleName) {
      case 'opacity':
        try {
          return element.filters.item('alpha').opacity / 100;
        } catch (e) {
          return 1.0;
        }
      default:
        return element.style[styleName] || element.currentStyle ? element.currentStyle[styleName] : null;
    }
  } catch (e) {
    return element.style[styleName];
  }
} : function (element, styleName) {
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);
  if (styleName === 'float') {
    styleName = 'cssFloat';
  }
  try {
    var computed = document.defaultView.getComputedStyle(element, '');
    return element.style[styleName] || computed ? computed[styleName] : null;
  } catch (e) {
    return element.style[styleName];
  }
};

function setStyle(element, styleName, value) {
  if (!element || !styleName) return;

  if ((typeof styleName === 'undefined' ? 'undefined' : (0, _typeof3.default)(styleName)) === 'object') {
    for (var prop in styleName) {
      if (styleName.hasOwnProperty(prop)) {
        setStyle(element, prop, styleName[prop]);
      }
    }
  } else {
    styleName = camelCase(styleName);
    if (styleName === 'opacity' && ieVersion < 9) {
      element.style.filter = isNaN(value) ? '' : 'alpha(opacity=' + value * 100 + ')';
    } else {
      element.style[styleName] = value;
    }
  }
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(21);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});


var PopperJS = __webpack_require__(106);
var stop = function stop(e) {
  return e.stopPropagation();
};
var zIndex = 2000;

exports.default = {
  props: {
    placement: {
      type: String,
      default: 'bottom'
    },
    boundariesPadding: {
      type: Number,
      default: 5
    },
    reference: {},
    popper: {},
    offset: {
      default: 0
    },
    value: Boolean,
    visibleArrow: Boolean,
    transition: String,
    appendToBody: {
      type: Boolean,
      default: true
    },
    popperOptions: {
      type: Object,
      default: function _default() {
        return {
          gpuAcceleration: false
        };
      }
    }
  },

  data: function data() {
    return {
      showPopper: false,
      currentPlacement: ''
    };
  },


  watch: {
    value: {
      immediate: true,
      handler: function handler(val) {
        this.showPopper = val;
        this.$emit('input', val);
      }
    },

    showPopper: function showPopper(val) {
      val ? this.updatePopper() : this.destroyPopper();
      this.$emit('input', val);
    }
  },

  methods: {
    createPopper: function createPopper() {
      var _this = this;

      this.currentPlacement = this.currentPlacement || this.placement;
      if (!/^(top|bottom|left|right)(-start|-end)?$/g.test(this.currentPlacement)) {
        return;
      }

      var options = this.popperOptions;
      var popper = this.popperElm = this.popperElm || this.popper || this.$refs.popper;
      var reference = this.referenceElm = this.referenceElm || this.reference || this.$refs.reference;

      if (!reference && this.$slots.reference && this.$slots.reference[0]) {
        reference = this.referenceElm = this.$slots.reference[0].elm;
      }

      if (!popper || !reference) return;
      if (this.visibleArrow) this.appendArrow(popper);
      if (this.appendToBody) document.body.appendChild(this.popperElm);
      if (this.popperJS && this.popperJS.destroy) {
        this.popperJS.destroy();
      }

      options.placement = this.currentPlacement;
      options.offset = this.offset;
      this.popperJS = new PopperJS(reference, popper, options);
      this.popperJS.onCreate(function (_) {
        _this.$emit('created', _this);
        _this.resetTransformOrigin();
        _this.$nextTick(_this.updatePopper);
      });
      this.popperJS._popper.style.zIndex = zIndex++;
      this.popperElm.addEventListener('click', stop);
    },
    updatePopper: function updatePopper() {
      this.popperJS ? this.popperJS.update() : this.createPopper();
    },
    doDestroy: function doDestroy() {
      if (this.showPopper || !this.popperJS) return;
      this.popperJS.destroy();
      this.popperJS = null;
    },
    destroyPopper: function destroyPopper() {
      if (this.popperJS) {
        this.resetTransformOrigin();
      }
    },
    resetTransformOrigin: function resetTransformOrigin() {
      var placementMap = {
        top: 'bottom',
        bottom: 'top',
        left: 'right',
        right: 'left'
      };
      var placement = this.popperJS._popper.getAttribute('x-placement').split('-')[0];
      var origin = placementMap[placement];
      this.popperJS._popper.style.transformOrigin = ['top', 'bottom'].indexOf(placement) > -1 ? 'center ' + origin : origin + ' center';
    },
    appendArrow: function appendArrow(element) {
      var hash = void 0;
      if (this.appended) {
        return;
      }

      this.appended = true;

      for (var item in element.attributes) {
        if (/^_v-/.test(element.attributes[item].name)) {
          hash = element.attributes[item].name;
          break;
        }
      }

      var arrow = document.createElement('div');

      if (hash) {
        arrow.setAttribute(hash, '');
      }
      arrow.setAttribute('x-arrow', '');
      arrow.className = 'x-popper-arrow';
      element.appendChild(arrow);
    }
  },

  beforeDestroy: function beforeDestroy() {
    this.doDestroy();
    if (this.popperElm && this.popperElm.parentNode === document.body) {
      this.popperElm.removeEventListener('click', stop);
      document.body.removeChild(this.popperElm);
    }
  },
  deactivated: function deactivated() {
    this.$options.beforeDestroy[0].call(this);
  }
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(32);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(113);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(124);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = __webpack_require__(221);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _button2.default;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isInteger = __webpack_require__(79);

var _isInteger2 = _interopRequireDefault(_isInteger);

var _keys = __webpack_require__(12);

var _keys2 = _interopRequireDefault(_keys);

var _clickoutside = __webpack_require__(38);

var _clickoutside2 = _interopRequireDefault(_clickoutside);

var _util = __webpack_require__(14);

var _vuePopper = __webpack_require__(23);

var _vuePopper2 = _interopRequireDefault(_vuePopper);

var _emitter = __webpack_require__(2);

var _emitter2 = _interopRequireDefault(_emitter);

var _input = __webpack_require__(9);

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NewPopper = {
    props: {
        appendToBody: _vuePopper2.default.props.appendToBody,
        offset: _vuePopper2.default.props.offset,
        boundariesPadding: _vuePopper2.default.props.boundariesPadding
    },
    methods: _vuePopper2.default.methods,
    data: _vuePopper2.default.data,
    beforeDestroy: _vuePopper2.default.beforeDestroy
};

var DEFAULT_FORMATS = {
    date: 'yyyy-MM-dd',
    month: 'yyyy-MM',
    datetime: 'yyyy-MM-dd HH:mm:ss',
    time: 'HH:mm:ss',
    timerange: 'HH:mm:ss',
    daterange: 'yyyy-MM-dd',
    datetimerange: 'yyyy-MM-dd HH:mm:ss',
    year: 'yyyy'
};
var HAVE_TRIGGER_TYPES = ['date', 'datetime', 'time', 'time-select', 'week', 'month', 'year', 'daterange', 'timerange', 'datetimerange'];
var DATE_FORMATTER = function DATE_FORMATTER(value, format) {
    return (0, _util.formatDate)(value, format);
};
var DATE_PARSER = function DATE_PARSER(text, format) {
    return (0, _util.parseDate)(text, format);
};

var PLACEMENT_MAP = {
    left: 'bottom-start',
    center: 'bottom-center',
    right: 'bottom-end'
};

exports.default = {
    mixins: [_emitter2.default, NewPopper],

    props: {
        size: String,
        format: String,
        readonly: Boolean,
        placeholder: String,
        disabled: Boolean,
        clearable: {
            type: Boolean,
            default: true
        },
        popperClass: String,
        editable: {
            type: Boolean,
            default: true
        },
        align: {
            type: String,
            default: 'left',
            validator: function validator(value) {
                return ['right', 'left'].indexOf(value) >= 0;
            }
        },
        value: {},
        rangeSeparator: {
            default: ' - '
        },
        pickerOptions: {}
    },

    components: { XInput: _input2.default },

    directives: { Clickoutside: _clickoutside2.default },

    data: function data() {
        return {
            pickerVisible: false,
            showClose: false,
            currentValue: '',
            pickerDateForTime: '',
            pickerValueForTimeRange: '',
            TYPE_VALUE_RESOLVER_MAP: {
                default: {
                    formatter: function formatter(value) {
                        if (!value) {
                            return '';
                        }
                        return '' + value;
                    },
                    parser: function parser(text) {
                        if (text === undefined || text === '') {
                            return null;
                        }
                        return text;
                    }
                },
                week: {
                    formatter: function formatter(value) {
                        if (value instanceof Date) {
                            var weekNumber = (0, _util.getWeekNumber)(value);
                            return value.getFullYear() + 'w' + (weekNumber > 9 ? weekNumber : '0' + weekNumber);
                        }
                        return value;
                    },
                    parser: function parser(text) {
                        var array = (text || '').split('w');
                        if (array.length === 2) {
                            var year = Number(array[0]);
                            var month = Number(array[1]);

                            if (!isNaN(year) && !isNaN(month) && month < 54) {
                                return text;
                            }
                        }
                        return null;
                    }
                },
                date: {
                    formatter: DATE_FORMATTER,
                    parser: DATE_PARSER
                },
                datetime: {
                    formatter: DATE_FORMATTER,
                    parser: DATE_PARSER
                },
                daterange: {
                    formatter: this.RANGE_FORMATTER,
                    parser: this.RANGE_PARSER
                },
                datetimerange: {
                    formatter: this.RANGE_FORMATTER,
                    parser: this.RANGE_PARSER
                },
                timerange: {
                    formatter: this.RANGE_FORMATTER,
                    parser: this.RANGE_PARSER
                },
                time: {
                    formatter: DATE_FORMATTER,
                    parser: DATE_PARSER
                },
                month: {
                    formatter: DATE_FORMATTER,
                    parser: DATE_PARSER
                },
                year: {
                    formatter: DATE_FORMATTER,
                    parser: DATE_PARSER
                },
                number: {
                    formatter: function formatter(value) {
                        if (!value) {
                            return '';
                        }
                        return '' + value;
                    },
                    parser: function parser(text) {
                        var result = Number(text);

                        if (!isNaN(text)) {
                            return result;
                        }
                        return null;
                    }
                }
            }
        };
    },


    watch: {
        pickerVisible: function pickerVisible(val) {
            if (!val) {
                this.dispatch('XFormItem', 'x.form.blur');
            }
            if (this.readonly || this.disabled) {
                return;
            }
            val ? this.showPicker() : this.hidePicker();
        },
        currentValue: function currentValue(val) {
            if (val) {
                return;
            }
            if (this.picker && typeof this.picker.handleClear === 'function') {
                this.picker.handleClear();
            } else {
                this.$emit('input');
            }
        },

        value: {
            immediate: true,
            handler: function handler(val) {
                this.currentValue = (0, _util.isDate)(val) ? new Date(val) : val;
            }
        },
        displayValue: function displayValue(val) {
            this.$emit('change', val);
            this.dispatch('XFormItem', 'x.form.change');
        }
    },

    computed: {
        reference: function reference() {
            return this.$refs.reference.$el;
        },
        refInput: function refInput() {
            if (this.reference) {
                return this.reference.querySelector('input');
            }
            return {};
        },
        valueIsEmpty: function valueIsEmpty() {
            var val = this.currentValue;
            if (Array.isArray(val)) {
                for (var i = 0, len = val.length; i < len; i++) {
                    if (val[i]) {
                        return false;
                    }
                }
            } else {
                if (val) {
                    return false;
                }
            }
            return true;
        },
        triggerClass: function triggerClass() {
            return this.type.indexOf('time') !== -1 ? 'x-icon-clock' : 'x-icon-calendar';
        },
        selectionMode: function selectionMode() {
            if (this.type === 'week') {
                return 'week';
            } else if (this.type === 'month') {
                return 'month';
            } else if (this.type === 'year') {
                return 'year';
            }

            return 'day';
        },
        haveTrigger: function haveTrigger() {
            if (typeof this.showTrigger !== 'undefined') {
                return this.showTrigger;
            }
            return HAVE_TRIGGER_TYPES.indexOf(this.type) !== -1;
        },


        displayValue: {
            get: function get() {
                var value = this.currentValue;
                if (!value) {
                    return;
                }
                var formatter = (this.TYPE_VALUE_RESOLVER_MAP[this.type] || this.TYPE_VALUE_RESOLVER_MAP.default).formatter;
                var format = DEFAULT_FORMATS[this.type];

                return formatter(value, this.format || format);
            },
            set: function set(value) {
                if (value) {
                    var type = this.type;
                    var parser = (this.TYPE_VALUE_RESOLVER_MAP.type || this.TYPE_VALUE_RESOLVER_MAP.default).parser;
                    var parsedValue = parser(value, this.format || DEFAULT_FORMATS[type]);

                    if (parsedValue && this.picker) {
                        this.picker.value = parsedValue;
                    }
                } else {
                    this.picker.value = value;
                }
                this.$forceUpdate();
            }
        }
    },

    created: function created() {
        this.popperOptions = {
            boundariesPadding: 0,
            gpuAcceleration: false
        };
        this.placement = PLACEMENT_MAP[this.align] || PLACEMENT_MAP.left;
    },


    methods: {
        handleMouseEnterIcon: function handleMouseEnterIcon() {
            if (this.readonly || this.disabled) {
                return;
            }
            if (!this.valueIsEmpty && this.clearable) {
                this.showClose = true;
            }
        },
        handleClickIcon: function handleClickIcon() {
            if (this.readonly || this.disabled) {
                return;
            }
            if (this.showClose) {
                this.currentValue = '';
                this.showClose = false;
            } else {
                this.pickerVisible = !this.pickerVisible;
            }
        },
        dateChanged: function dateChanged(dateA, dateB) {
            if (Array.isArray(dateA)) {
                var len = dateA.length;
                if (!dateB) {
                    return true;
                }
                while (len--) {
                    if (!(0, _util.equalDate)(dateA[len], dateB[len])) {
                        return true;
                    }
                }
            } else {
                if (!(0, _util.equalDate)(dateA, dateB)) {
                    return true;
                }
            }

            return false;
        },
        handleClose: function handleClose() {
            this.pickerVisible = false;
        },
        handleFocus: function handleFocus() {
            var type = this.type;

            if (HAVE_TRIGGER_TYPES.indexOf(type) !== -1 && !this.pickerVisible) {
                this.pickerVisible = true;
            }
            this.$emit('focus', this);
        },
        handleBlur: function handleBlur() {
            this.$emit('blur', this);
        },
        handleKeydown: function handleKeydown(event) {
            var keyCode = event.keyCode;

            if (keyCode === 9) {
                this.pickerVisible = false;
            }
        },
        hidePicker: function hidePicker() {
            if (this.picker) {
                this.picker.resetView && this.picker.resetView();
                this.handleVisible(false);

                this.destroyPopper();
            }
        },
        showPicker: function showPicker() {
            var _this = this;

            if (!this.picker) {
                this.picker = this.$refs.picker;

                this.picker.popperClass = this.popperClass;
                this.popperElm = this.picker.$el;
                this.picker.width = this.reference.getBoundingClientRect().width;
                this.picker.showTime = this.type === 'datetime' || this.type === 'datetimerange';
                this.picker.selectionMode = this.selectionMode;
                if (this.format) {
                    this.picker.format = this.format;
                }

                var updateOptions = function updateOptions() {
                    var options = _this.pickerOptions;

                    if (options && options.selectableRange) {
                        var ranges = options.selectableRange;
                        var parser = _this.TYPE_VALUE_RESOLVER_MAP.datetimerange.parser;
                        var format = DEFAULT_FORMATS.timerange;

                        ranges = Array.isArray(ranges) ? ranges : [ranges];
                        _this.picker.selectableRange = ranges.map(function (range) {
                            return parser(range, format);
                        });
                    }

                    for (var option in options) {
                        if (options.hasOwnProperty(option) && option !== 'selectableRange') {
                            _this.picker[option] = options[option];
                        }
                    }
                };
                updateOptions();
                this.$watch('pickerOptions', function () {
                    return updateOptions();
                }, { deep: true });

                this.handleVisible(true);

                this.picker.resetView && this.picker.resetView();

                this.picker.$on('dodestroy', this.doDestroy);
                this.picker.$on('pick', function (date) {
                    var visible = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


                    if (_this.type === 'daterange' || _this.type === 'datetimerange') {
                        var options = _this.pickerOptions;
                        if (options && options.dateLimit) {
                            var startDate = date[0];
                            if (Object.prototype.toString.call(startDate) === '[object Date]') {
                                var limitEndDate = new Date(startDate.getTime());
                                (0, _keys2.default)(options.dateLimit).forEach(function (v) {
                                    var num = options.dateLimit[v];
                                    if (!(0, _isInteger2.default)(parseInt(num, 10)) || parseInt(num, 10) < 0) {
                                        console.warn('xcui warn: dateLimit (' + v + ') must be a Positive Int Number');
                                        return false;
                                    }
                                    switch (v) {
                                        case 'year':
                                            limitEndDate = limitEndDate.setFullYear(limitEndDate.getFullYear() + num);
                                            break;
                                        case 'month':
                                            limitEndDate = limitEndDate.setMonth(limitEndDate.getMonth() + num);
                                            break;
                                        case 'day':
                                            limitEndDate = limitEndDate.setDate(limitEndDate.getDate() + num);
                                            break;
                                        case 'hour':
                                            limitEndDate = limitEndDate.setHours(limitEndDate.getHours() + num);
                                            break;
                                        case 'minute':
                                            limitEndDate = limitEndDate.setMinutes(limitEndDate.getMinutes() + num);
                                            break;
                                        case 'second':
                                            limitEndDate = limitEndDate.setSeconds(limitEndDate.getSeconds() + num);
                                            break;
                                        default:
                                            break;
                                    }
                                    limitEndDate = new Date(limitEndDate);
                                });
                                console.log('limitEndDate', limitEndDate);
                                var endDate = date[1];
                                if (endDate > limitEndDate) {
                                    date[1] = limitEndDate;
                                    _this.$emit('over-limit', startDate, endDate, limitEndDate);
                                }
                            }
                        }
                    }

                    _this.$emit('input', date);
                    _this.handleVisible(visible);

                    _this.picker.resetView && _this.picker.resetView();
                });

                this.picker.$on('select-range', function (start, end) {
                    _this.refInput.setSelectionRange(start, end);
                    _this.refInput.focus();
                });
            } else {
                this.handleVisible(true);
            }

            this.updatePopper();

            if (this.currentValue instanceof Date) {
                if (this.type === 'time') {
                    this.pickerDateForTime = new Date(this.currentValue.getTime());
                } else {
                    this.picker.date = new Date(this.currentValue.getTime());
                }
            } else {
                if (this.type === 'timerange') {
                    this.pickerValueForTimeRange = this.currentValue;
                } else {
                    this.picker.value = this.currentValue;
                }
            }
            this.picker.resetView && this.picker.resetView();

            this.$nextTick(function () {
                _this.picker.ajustScrollTop && _this.picker.ajustScrollTop();
            });
        },
        handleVisible: function handleVisible(visible) {
            if (this.type === 'time') {
                this.pickerVisible = visible;
            } else {
                this.pickerVisible = this.picker.visible = visible;
            }
        },


        RANGE_FORMATTER: function RANGE_FORMATTER(value, format) {
            if (Array.isArray(value) && value.length === 2) {
                var start = value[0];
                var end = value[1];

                if (start && end) {
                    return (0, _util.formatDate)(start, format) + this.rangeSeparator + (0, _util.formatDate)(end, format);
                }
            }
            return '';
        },
        RANGE_PARSER: function RANGE_PARSER(text, format) {
            var array = text.split(this.rangeSeparator);
            if (array.length === 2) {
                var range1 = array[0];
                var range2 = array[1];

                return [(0, _util.parseDate)(range1, format), (0, _util.parseDate)(range2, format)];
            }
            return [];
        }
    }
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(21);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(36)('keys')
  , uid    = __webpack_require__(26);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 37 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _eventListener = __webpack_require__(55);

var _eventListener2 = _interopRequireDefault(_eventListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nodeList = [];
var ctx = '@@clickoutsideContext';

_eventListener2.default.listen(document, 'click', function (e) {
  nodeList.forEach(function (node) {
    return node[ctx].documentHandler(e);
  });
});

exports.default = {
  bind: function bind(el, binding, vnode) {
    var id = nodeList.push(el) - 1;
    var documentHandler = function documentHandler(e) {
      if (!vnode.context || el.contains(e.target) || vnode.context.popperElm && vnode.context.popperElm.contains(e.target)) return;

      if (binding.expression && el[ctx].methodName && vnode.context[el[ctx].methodName]) {
        vnode.context[el[ctx].methodName]();
      } else {
        el[ctx].bindingFn && el[ctx].bindingFn();
      }
    };
    el[ctx] = {
      id: id,
      documentHandler: documentHandler,
      methodName: binding.expression,
      bindingFn: binding.value
    };
  },
  update: function update(el, binding) {
    el[ctx].methodName = binding.expression;
    el[ctx].bindingFn = binding.value;
  },
  unbind: function unbind(el) {
    var len = nodeList.length;

    for (var i = 0; i < len; i++) {
      if (nodeList[i][ctx].id === el[ctx].id) {
        nodeList.splice(i, 1);
        break;
      }
    }
  }
};

/***/ }),
/* 39 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(7).f
  , has = __webpack_require__(13)
  , TAG = __webpack_require__(5)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(5);

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(6)
  , core           = __webpack_require__(4)
  , LIBRARY        = __webpack_require__(40)
  , wksExt         = __webpack_require__(42)
  , defineProperty = __webpack_require__(7).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(140),
  /* template */
  __webpack_require__(144),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _buttonGroup = __webpack_require__(233);

var _buttonGroup2 = _interopRequireDefault(_buttonGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _buttonGroup2.default;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rule = __webpack_require__(3);

var _rule2 = _interopRequireDefault(_rule);

var _util = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function type(rule, value, callback, source, options) {
  var ruleType = rule.type;
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if ((0, _util.isEmptyValue)(value, ruleType) && !rule.required) {
      return callback();
    }
    _rule2["default"].required(rule, value, source, errors, options, ruleType);
    if (!(0, _util.isEmptyValue)(value, ruleType)) {
      _rule2["default"].type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

exports["default"] = type;
module.exports = exports['default'];

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
  * vue-router v2.5.3
  * (c) 2017 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if (false) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also regiseter instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    data.props = resolveProps(route, matched.props && matched.props[name]);

    return h(component, data, children)
  }
};

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (false) {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    "production" !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    var val = extraQuery[key];
    parsedQuery[key] = Array.isArray(val) ? val.slice() : val;
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.slice().forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */


var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;
  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: location.query || {},
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route)
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) { return String(a[key]) === String(b[key]); })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null
            ? 'router-link-active'
            : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null
            ? 'router-link-exact-active'
            : globalExactActiveClass;
    var activeClass = this.activeClass == null
            ? activeClassFallback
            : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null
            ? exactActiveClassFallback
            : this.exactActiveClass;
    var compareTarget = location.path
      ? createRoute(null, location, null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler; });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var extend = _Vue.util.extend;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed) { return }
  install.installed = true;

  _Vue = Vue;

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this.$root._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this.$root._route }
  });

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Vue.component('router-view', View);
  Vue.component('router-link', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var index$1 = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var index = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (index$1(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!index$1(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!index$1(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (index$1(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}

index.parse = parse_1;
index.compile = compile_1;
index.tokensToFunction = tokensToFunction_1;
index.tokensToRegExp = tokensToRegExp_1;

/*  */

var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = index.compile(path));
    return filler(params || {}, { pretty: true })
  } catch (e) {
    if (false) {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  }
}

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  var pathMap = oldPathMap || Object.create(null);
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (false) {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
      "string id. Use an actual component instead."
    );
  }

  var normalizedPath = normalizePath(path, parent);
  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (false) {
      if (route.name && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
          "the default child route will not be rendered. Remove the name from " +
          "this route and use the name of the default child route for named " +
          "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    if (Array.isArray(route.alias)) {
      route.alias.forEach(function (alias) {
        var aliasRoute = {
          path: alias,
          children: route.children
        };
        addRouteRecord(pathList, pathMap, nameMap, aliasRoute, parent, record.path);
      });
    } else {
      var aliasRoute = {
        path: route.alias,
        children: route.children
      };
      addRouteRecord(pathList, pathMap, nameMap, aliasRoute, parent, record.path);
    }
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if (false) {
      warn(
        false,
        "Duplicate named routes definition: " +
        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (path) {
  var regex = index(path);
  if (false) {
    var keys = {};
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], ("Duplicate param keys in route with path: \"" + path + "\""));
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (path, parent) {
  path = path.replace(/\/$/, '');
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */


function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = assign({}, next);
    next._normalized = true;
    var params = assign(assign({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else if (false) {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

function assign (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

/*  */


function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (false) {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
        ? originalRedirect(createRoute(record, location, null, router))
        : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (false) {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (false) {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (false) {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      params[key.name] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */


var positionStore = Object.create(null);

function setupScroll () {
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (false) {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior(to, from, isPop ? position : null);
    if (!shouldScroll) {
      return
    }
    var isObject = typeof shouldScroll === 'object';
    if (isObject && typeof shouldScroll.selector === 'string') {
      var el = document.querySelector(shouldScroll.selector);
      if (el) {
        position = getElementPosition(el);
      } else if (isValidPosition(shouldScroll)) {
        position = normalizePosition(shouldScroll);
      }
    } else if (isObject && isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }

    if (position) {
      window.scrollTo(position.x, position.y);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left,
    y: elRect.top - docRect.top
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

/*  */

var supportsPushState = inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date;

var _key = genKey();

function genKey () {
  return Time.now().toFixed(3)
}

function getStateKey () {
  return _key
}

function setStateKey (key) {
  _key = key;
}

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) { cb(route); });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) { cb(err); });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) { cb(err); });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' && (
            typeof to.path === 'string' ||
            typeof to.name === 'string'
          ))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { cb(); });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid)
  })
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (instances[key]) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          "production" !== 'production' && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    if (called) { return }
    called = true;
    return fn.apply(this, arguments)
  }
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

/*  */


var HTML5History = (function (History$$1) {
  function HTML5History (router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;

    if (expectScroll) {
      setupScroll();
    }

    window.addEventListener('popstate', function (e) {
      this$1.transitionTo(getLocation(this$1.base), function (route) {
        if (expectScroll) {
          handleScroll(router, route, this$1.current, true);
        }
      });
    });
  }

  if ( History$$1 ) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */


var HashHistory = (function (History$$1) {
  function HashHistory (router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History$$1 ) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    window.addEventListener('hashchange', function () {
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        replaceHash(route.fullPath);
      });
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    );
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.slice(index + 1)
}

function pushHash (path) {
  window.location.hash = path;
}

function replaceHash (path) {
  var i = window.location.href.indexOf('#');
  window.location.replace(
    window.location.href.slice(0, i >= 0 ? i : 0) + '#' + path
  );
}

/*  */


var AbstractHistory = (function (History$$1) {
  function AbstractHistory (router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */

var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (false) {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: {} };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  "production" !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  var location = normalizeLocation(
    to,
    current || this.history.current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '2.5.3';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["a"] = (VueRouter);


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(99);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(11) && !__webpack_require__(16)(function(){
  return Object.defineProperty(__webpack_require__(50)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(21)
  , document = __webpack_require__(6).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(13)
  , toIObject    = __webpack_require__(8)
  , arrayIndexOf = __webpack_require__(103)(false)
  , IE_PROTO     = __webpack_require__(35)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(33);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(34)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(10)
  , core    = __webpack_require__(4)
  , fails   = __webpack_require__(16);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

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
            target.attachEvent('on' + eventType, callback);
            return {
                remove: function remove() {
                    target.detachEvent('on' + eventType, callback);
                }
            };
        }
    }
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(27)
  , createDesc     = __webpack_require__(22)
  , toIObject      = __webpack_require__(8)
  , toPrimitive    = __webpack_require__(31)
  , has            = __webpack_require__(13)
  , IE8_DOM_DEFINE = __webpack_require__(49)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(11) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(110), __esModule: true };

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(115)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(59)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(40)
  , $export        = __webpack_require__(10)
  , redefine       = __webpack_require__(60)
  , hide           = __webpack_require__(15)
  , has            = __webpack_require__(13)
  , Iterators      = __webpack_require__(24)
  , $iterCreate    = __webpack_require__(116)
  , setToStringTag = __webpack_require__(41)
  , getPrototypeOf = __webpack_require__(119)
  , ITERATOR       = __webpack_require__(5)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(20)
  , dPs         = __webpack_require__(117)
  , enumBugKeys = __webpack_require__(37)
  , IE_PROTO    = __webpack_require__(35)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(50)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(118).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(51)
  , hiddenKeys = __webpack_require__(37).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(142),
  /* template */
  __webpack_require__(143),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(145),
  /* template */
  __webpack_require__(146),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _checkbox = __webpack_require__(181);

var _checkbox2 = _interopRequireDefault(_checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _checkbox2.default;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = __webpack_require__(12);

var _keys2 = _interopRequireDefault(_keys);

var _msgCollection = __webpack_require__(209);

var _msgCollection2 = _interopRequireDefault(_msgCollection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var camelcaseToHyphen = function camelcaseToHyphen(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};

_msgCollection2.default.newInstance = function (Vue, properties) {
    var _props = properties || {};

    var props = '';
    (0, _keys2.default)(_props).forEach(function (prop) {
        props += ' :' + camelcaseToHyphen(prop) + '=' + prop;
    });

    var div = document.createElement('div');
    div.innerHTML = '<msg-collection' + props + '></msg-collection>';
    document.body.appendChild(div);

    var msgCollection = new Vue({
        el: div,
        data: _props,
        components: { MsgCollection: _msgCollection2.default }
    }).$children[0];

    return {
        msg: function msg(props) {
            msgCollection.add(props);
        },
        remove: function remove(key) {
            msgCollection.close(key);
        },

        component: msgCollection,
        destroy: function destroy() {
            document.body.removeChild(div);
        }
    };
};

exports.default = _msgCollection2.default;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(211);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
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

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (target) {
  for (var i = 1, j = arguments.length; i < j; i++) {
    var source = arguments[i] || {};
    for (var prop in source) {
      if (source.hasOwnProperty(prop)) {
        var value = source[prop];
        if (value !== undefined) {
          target[prop] = value;
        }
      }
    }
  }

  return target;
};

;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _modal = __webpack_require__(219);

var _modal2 = _interopRequireDefault(_modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _modal2.default;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _select = __webpack_require__(236);

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _select2.default;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(241),
  /* template */
  __webpack_require__(242),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _option = __webpack_require__(71);

var _option2 = _interopRequireDefault(_option);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _option2.default;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vuePopper = __webpack_require__(23);

var _vuePopper2 = _interopRequireDefault(_vuePopper);

var _dom = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'XTooltip',
    mixins: [_vuePopper2.default],
    props: {
        content: String,
        reference: {},
        popperClass: String,
        width: [String, Number],
        trigger: {
            type: String,
            default: 'hover',
            validator: function validator(val) {
                return ['click', 'hover', 'focus'].indexOf(val) > -1;
            }
        },
        visibleArrow: {
            default: true
        },
        transition: {
            type: String
        },
        openDelay: {
            type: Number,
            default: 200
        },
        popperOptions: {
            type: Object,
            default: function _default() {
                return {
                    boundariesPadding: 10,
                    gpuAcceleration: false
                };
            }
        }
    },
    data: function data() {
        return {
            timer: null
        };
    },

    computed: {
        ref: function ref() {
            var result = this.reference || this.$refs.reference;
            if (!result && this.$slots.default && this.$slots.default[0]) {
                for (var i = 0, length = this.$slots.default.length; i < length; i++) {
                    var vNode = this.$slots.default[i];
                    if (vNode.tag) {
                        result = this.referenceElm = this.$slots.default[i].elm;
                        break;
                    }
                }
            }
            return result;
        }
    },
    methods: {
        handleMouseEnter: function handleMouseEnter() {
            this.showPopper = true;
            clearTimeout(this.timer);
        },
        handleMouseLeave: function handleMouseLeave() {
            var _this = this;

            this.timer = setTimeout(function () {
                _this.showPopper = false;
            }, this.openDelay);
        },
        handleDocumentClick: function handleDocumentClick(e) {
            var popper = this.$refs.popper;

            if (!this.$el || !this.ref || this.$el.contains(e.target) || this.ref.contains(e.target) || !popper || popper.contains(e.target)) {
                return;
            }
            this.showPopper = false;
        }
    },
    mounted: function mounted() {
        var _this2 = this;

        var popper = this.$refs.popper;
        switch (this.trigger) {
            case 'hover':
                (0, _dom.on)(this.ref, 'mouseenter', this.handleMouseEnter);
                (0, _dom.on)(popper, 'mouseenter', this.handleMouseEnter);
                (0, _dom.on)(this.ref, 'mouseleave', this.handleMouseLeave);
                (0, _dom.on)(popper, 'mouseleave', this.handleMouseLeave);
                break;
            case 'click':
                (0, _dom.on)(this.ref, 'click', function () {
                    _this2.showPopper = !_this2.showPopper;
                });
                (0, _dom.on)(document, 'click', this.handleDocumentClick);
                break;
            case 'focus':
                var found = false;
                if ([].slice.call(this.ref.children).length) {
                    var children = this.ref.childNodes;
                    var len = children.length;
                    for (var i = 0; i < len; i++) {
                        if (children[i].nodeName === 'INPUT' || children[i].nodeName === 'TEXTAREA') {
                            (0, _dom.on)(children[i], 'focus', function () {
                                _this2.showPopper = true;
                            });
                            (0, _dom.on)(children[i], 'blur', function () {
                                _this2.showPopper = false;
                            });
                            found = true;
                            break;
                        }
                    }
                }
                if (found) {
                    return;
                }
                if (this.ref.nodeName === 'INPUT' || this.ref.nodeName === 'TEXTAREA') {
                    (0, _dom.on)(this.ref, 'focus', function () {
                        _this2.showPopper = true;
                    });
                    (0, _dom.on)(this.ref, 'blur', function () {
                        _this2.showPopper = false;
                    });
                } else {
                    (0, _dom.on)(this.ref, 'mousedown', function () {
                        _this2.showPopper = true;
                    });
                    (0, _dom.on)(this.ref, 'mouseup', function () {
                        _this2.showPopper = false;
                    });
                }
        }
    },
    destroyed: function destroyed() {
        var ref = this.ref;
        (0, _dom.off)(ref, 'mouseup');
        (0, _dom.off)(ref, 'mousedown');
        (0, _dom.off)(ref, 'focus');
        (0, _dom.off)(ref, 'blur');
        (0, _dom.off)(ref, 'mouseleave');
        (0, _dom.off)(ref, 'mouseenter');
        (0, _dom.off)(document, 'click', this.handleDocumentClick);
    }
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _progress = __webpack_require__(249);

var _progress2 = _interopRequireDefault(_progress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _progress2.default;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(1);

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

/**
 *  Rule for validating required fields.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function required(rule, value, source, errors, options, type) {
  if (rule.required && (!source.hasOwnProperty(rule.field) || util.isEmptyValue(value, type || rule.type))) {
    errors.push(util.format(options.messages.required, rule.fullField));
  }
}

exports["default"] = required;
module.exports = exports['default'];

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var counter = 0;

function S(mark) {
    return typeof window.Symbol === 'function' ? window.Symbol(mark) : mark + '-' + new Date().getTime() + '-' + counter + '-symbol';
}

var stepsComponentSymbol = exports.stepsComponentSymbol = S('StepsComponent');
var stepsItemComponentSymbol = exports.stepsItemComponentSymbol = S('StepsItemComponent');

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjIwMHB4IiBoZWlnaHQ9IjIwMHB4IiB2aWV3Qm94PSIwIDAgNDQ2IDQ0NiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNDEuMSAoMzUzNzYpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPmxvZ28zPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+CiAgICAgICAgPHBhdGggZD0iTTMzLjY3OTY4NzcsNTkuNjg3NTAwNyBDNjQuMzEyNTAwOSwtMjguMjk2ODczNyA0MTcuMDY3NzExLDE5Ljk3ODk1NzQgNDE3LjA2NzcxMSwxOS45Nzg5NTc0IEM0MjEuNDQ4NTkzLDIwLjU0Mjg2MzYgNDI1LjcwMzM5MiwyNC41MTAxNTE2IDQyNi41MjcxODcsMjguODUzMzY0NiBDNDI2LjUyNzE4NywyOC44NTMzNjQ2IDQ3OS41NjEwMTMsMjc5LjE2NTU0OSAzODEuMjU3ODEzLDM3Ny40Njg3NSBDMjgyLjk1NDYxMiw0NzUuNzcxOTUxIDI3LjEzMjgxMjUsNDIzLjgyODEyMiAxNC45MjE4NzUsNDExLjA3MDMwOSBDMi43MTA5Mzc1LDM5OC4zMTI0OTcgMy4wNDY4NzQzNiwxNDcuNjcxODc1IDMzLjY3OTY4NzcsNTkuNjg3NTAwNyBaIiBpZD0icGF0aC0xIj48L3BhdGg+CiAgICAgICAgPG1hc2sgaWQ9Im1hc2stMiIgbWFza0NvbnRlbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIG1hc2tVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHg9IjAiIHk9IjAiIHdpZHRoPSI0MzMuNDAyMDA5IiBoZWlnaHQ9IjQyOS40MjU5NTUiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICA8L21hc2s+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iV2VsY29tZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkFydGJvYXJkLTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xODE4LjAwMDAwMCwgLTE0MC4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9ImxvZ28zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxODE4LjAwMDAwMCwgMTQwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTAsOC4wMDE5OTA1NiBDMCwzLjU4MjYxMzIxIDMuNTc0NDUwMzEsMCA3Ljk5ODM0OTgyLDAgTDczLjU5Mzc1LDAgTDQzOC4wMDYxMzEsMCBDNDQyLjQyMTAyMywwIDQ0NiwzLjU5MDA1MTc0IDQ0Niw4LjAwMTk5MDU2IEw0NDYsNDM3Ljk5ODAwOSBDNDQ2LDQ0Mi40MTczODcgNDQyLjQwOTk0OCw0NDYgNDM3Ljk5ODAwOSw0NDYgTDguMDAxOTkwNTYsNDQ2IEMzLjU4MjYxMzIxLDQ0NiAwLDQ0Mi40MDk5NDggMCw0MzcuOTk4MDA5IEwwLDguMDAxOTkwNTYgWiIgaWQ9IlJlY3RhbmdsZS0zMiIgZmlsbD0iIzQ2YzNjMSI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHVzZSBpZD0iUmVjdGFuZ2xlLTMyIiBzdHJva2U9IiM0NmMzYzEiIG1hc2s9InVybCgjbWFzay0yKSIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSIjRkZGRkZGIiB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMTIuMDkyNzIzLDE4Ny4zOTcxODMgQzE5NS4wODk5MDMsMTgyLjA3MDEzOSAxODYuNzM1MDY1LDE2MS4wOTA0MyAxODYuNzM1MDY1LDE2MS4wOTA0MyBMMTg2LjczNTA2NSwxNDUuMzUzMzAzIEwxOTUuMDg5OTAzLDQzLjI0NjczNzYgQzE5NS4wODk5MDMsNDMuMjQ2NzM3NiAxOTcuNDAzNTY5LDM5LjczNTA2NDcgMTk5LjM5ODc0MSwzOS43MzUwNjQ3IEMyMDEuMzkzOTE0LDM5LjczNTA2NDcgMjAzLjQ0NDc0Miw0My4yNDY3Mzc2IDIwMy40NDQ3NDIsNDMuMjQ2NzM3NiBMMjAzLjQ0NDc0MiwxMzMuMzQwNzY2IEMyMDMuNDQ0NzQyLDEzMy4zNDA3NjYgMjA2LjMxNzEwNiwxMzUuNDQ0NzE5IDIwNy44Mjc4ODUsMTM1LjQ0NDcxOSBDMjA5LjE5OTc2NywxMzUuNDQ0NzE5IDIxMi4wOTI3MjMsMTMzLjM0MDc2NiAyMTIuMDkyNzIzLDEzMy4zNDA3NjYgTDIxMi4wOTI3MjMsNDMuMjQ2NzM3NiBDMjEyLjA5MjcyMyw0My4yNDY3Mzc2IDIxNC4zMDM2ODYsMzkuNzM1MDY0NyAyMTYuMjc1Njc5LDM5LjczNTA2NDcgQzIxOC4yNDc2NzEsMzkuNzM1MDY0NyAyMjAuMjE1NjEyLDQzLjI0NjczNzYgMjIwLjIxNTYxMiw0My4yNDY3Mzc2IEwyMjAuMjE1NjEyLDEzMy4zNDA3NjYgQzIyMC4yMTU2MTIsMTMzLjM0MDc2NiAyMjMuMTU3MTM0LDEzNS40NDQ3MTkgMjI0LjYyNzg5NSwxMzUuNDQ0NzE5IEMyMjUuOTIxNjgzLDEzNS40NDQ3MTkgMjI4LjUwOTI1OCwxMzMuMzQwNzY2IDIyOC41MDkyNTgsMTMzLjM0MDc2NiBMMjI4LjUwOTI1OCw0My4yNDY3Mzc2IEMyMjguNTA5MjU4LDQzLjI0NjczNzYgMjMxLjQ4ODE3NiwzOS43MzUwNjQ3IDIzMi44NzQwNDQsMzkuNzM1MDY0NyBDMjM0LjM2NTM5NiwzOS43MzUwNjQ3IDIzNy4xNDA5MjEsNDMuMjQ2NzM3NiAyMzcuMTQwOTIxLDQzLjI0NjczNzYgTDIzNy4xNDA5MjEsMTMzLjM0MDc2NiBDMjM3LjE0MDkyMSwxMzMuMzQwNzY2IDIzOS40ODQ4OTEsMTM1LjQ0NDcxOSAyNDAuNjU2ODc3LDEzNS40NDQ3MTkgQzI0MS43Nzk3MTQsMTM1LjQ0NDcxOSAyNDQuMDI1Mzg3LDEzMy4zNDA3NjYgMjQ0LjAyNTM4NywxMzMuMzQwNzY2IEwyNDQuMDI1Mzg3LDQzLjI0NjczNzYgQzI0NC4wMjUzODcsNDMuMjQ2NzM3NiAyNDYuOTYzNTA5LDM5LjczNTA2NDcgMjQ4LjM1NDkxNCwzOS43MzUwNjQ3IEMyNDkuNzA4ODI2LDM5LjczNTA2NDcgMjUyLjI2MTMzNyw0My4yNDY3Mzc2IDI1Mi4yNjEzMzcsNDMuMjQ2NzM3NiBMMjYwLjczNTA2NSwxNDUuMDk4NzQgTDI2MC43MzUwNjUsMTYwLjk2OTYwMSBDMjYwLjczNTA2NSwxNjAuOTY5NjAxIDI1Mi4yNjEzMzcsMTgxLjM5MDkxNCAyMzcuMTQwOTIxLDE4Ny4zOTcxODMgQzIyMi4wMjA1MDUsMTkzLjQwMzQ1MSAyNDAuNjU2ODc3LDM4NC40MDI3OTEgMjQwLjY1Njg3NywzODQuNDAyNzkxIEMyNDAuNjU2ODc3LDM4NC40MDI3OTEgMjM1LjIxMTI4LDM5Ny43MzUwNjUgMjI0LjYyNzg5NSwzOTcuNzM1MDY1IEMyMTQuMDQ0NTEsMzk3LjczNTA2NSAyMDcuODI3ODg1LDM4NC40MDI3OTEgMjA3LjgyNzg4NSwzODQuNDAyNzkxIEMyMDcuODI3ODg1LDM4NC40MDI3OTEgMjI5LjA5NTU0MiwxOTIuNzI0MjI3IDIxMi4wOTI3MjMsMTg3LjM5NzE4MyBaIiBpZD0iUmVjdGFuZ2xlLTEwLUNvcHkiIGZpbGw9IiM0NmMzYzEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIyMy43MzUwNjUsIDIxOC43MzUwNjUpIHJvdGF0ZSg0NS4wMDAwMDApIHRyYW5zbGF0ZSgtMjIzLjczNTA2NSwgLTIxOC43MzUwNjUpICI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTIxMi4wOTI3MjMsMTg4LjM5NzE4MyBDMTk1LjA4OTkwMywxODMuMDcwMTM5IDE4Ni43MzUwNjUsMTYyLjA5MDQzIDE4Ni43MzUwNjUsMTYyLjA5MDQzIEwxODYuNzM1MDY1LDE0Ni4zNTMzMDMgTDE5NS4wODk5MDMsNDQuMjQ2NzM3NiBDMTk1LjA4OTkwMyw0NC4yNDY3Mzc2IDE5Ny40MDM1NjksNDAuNzM1MDY0NyAxOTkuMzk4NzQxLDQwLjczNTA2NDcgQzIwMS4zOTM5MTQsNDAuNzM1MDY0NyAyMDMuNDQ0NzQyLDQ0LjI0NjczNzYgMjAzLjQ0NDc0Miw0NC4yNDY3Mzc2IEwyMDMuNDQ0NzQyLDEzNC4zNDA3NjYgQzIwMy40NDQ3NDIsMTM0LjM0MDc2NiAyMDYuMzE3MTA2LDEzNi40NDQ3MTkgMjA3LjgyNzg4NSwxMzYuNDQ0NzE5IEMyMDkuMTk5NzY3LDEzNi40NDQ3MTkgMjEyLjA5MjcyMywxMzQuMzQwNzY2IDIxMi4wOTI3MjMsMTM0LjM0MDc2NiBMMjEyLjA5MjcyMyw0NC4yNDY3Mzc2IEMyMTIuMDkyNzIzLDQ0LjI0NjczNzYgMjE0LjMwMzY4Niw0MC43MzUwNjQ3IDIxNi4yNzU2NzksNDAuNzM1MDY0NyBDMjE4LjI0NzY3MSw0MC43MzUwNjQ3IDIyMC4yMTU2MTIsNDQuMjQ2NzM3NiAyMjAuMjE1NjEyLDQ0LjI0NjczNzYgTDIyMC4yMTU2MTIsMTM0LjM0MDc2NiBDMjIwLjIxNTYxMiwxMzQuMzQwNzY2IDIyMy4xNTcxMzQsMTM2LjQ0NDcxOSAyMjQuNjI3ODk1LDEzNi40NDQ3MTkgQzIyNS45MjE2ODMsMTM2LjQ0NDcxOSAyMjguNTA5MjU4LDEzNC4zNDA3NjYgMjI4LjUwOTI1OCwxMzQuMzQwNzY2IEwyMjguNTA5MjU4LDQ0LjI0NjczNzYgQzIyOC41MDkyNTgsNDQuMjQ2NzM3NiAyMzEuNDg4MTc2LDQwLjczNTA2NDcgMjMyLjg3NDA0NCw0MC43MzUwNjQ3IEMyMzQuMzY1Mzk2LDQwLjczNTA2NDcgMjM3LjE0MDkyMSw0NC4yNDY3Mzc2IDIzNy4xNDA5MjEsNDQuMjQ2NzM3NiBMMjM3LjE0MDkyMSwxMzQuMzQwNzY2IEMyMzcuMTQwOTIxLDEzNC4zNDA3NjYgMjM5LjQ4NDg5MSwxMzYuNDQ0NzE5IDI0MC42NTY4NzcsMTM2LjQ0NDcxOSBDMjQxLjc3OTcxNCwxMzYuNDQ0NzE5IDI0NC4wMjUzODcsMTM0LjM0MDc2NiAyNDQuMDI1Mzg3LDEzNC4zNDA3NjYgTDI0NC4wMjUzODcsNDQuMjQ2NzM3NiBDMjQ0LjAyNTM4Nyw0NC4yNDY3Mzc2IDI0Ni45NjM1MDksNDAuNzM1MDY0NyAyNDguMzU0OTE0LDQwLjczNTA2NDcgQzI0OS43MDg4MjYsNDAuNzM1MDY0NyAyNTIuMjYxMzM3LDQ0LjI0NjczNzYgMjUyLjI2MTMzNyw0NC4yNDY3Mzc2IEwyNjAuNzM1MDY1LDE0Ni4wOTg3NCBMMjYwLjczNTA2NSwxNjEuOTY5NjAxIEMyNjAuNzM1MDY1LDE2MS45Njk2MDEgMjUyLjI2MTMzNywxODIuMzkwOTE0IDIzNy4xNDA5MjEsMTg4LjM5NzE4MyBDMjIyLjAyMDUwNSwxOTQuNDAzNDUxIDI0MC42NTY4NzcsMzg1LjQwMjc5MSAyNDAuNjU2ODc3LDM4NS40MDI3OTEgQzI0MC42NTY4NzcsMzg1LjQwMjc5MSAyMzUuMjExMjgsMzk4LjczNTA2NSAyMjQuNjI3ODk1LDM5OC43MzUwNjUgQzIxNC4wNDQ1MSwzOTguNzM1MDY1IDIwNy44Mjc4ODUsMzg1LjQwMjc5MSAyMDcuODI3ODg1LDM4NS40MDI3OTEgQzIwNy44Mjc4ODUsMzg1LjQwMjc5MSAyMjkuMDk1NTQyLDE5My43MjQyMjcgMjEyLjA5MjcyMywxODguMzk3MTgzIFoiIGlkPSJSZWN0YW5nbGUtMTAtQ29weSIgZmlsbD0iIzQ2YzNjMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjIzLjczNTA2NSwgMjE5LjczNTA2NSkgcm90YXRlKC00NS4wMDAwMDApIHRyYW5zbGF0ZSgtMjIzLjczNTA2NSwgLTIxOS43MzUwNjUpICI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = {
	"name": "xcui",
	"version": "2.1.3",
	"main": "lib/xcui.common.js",
	"engines": {
		"node": ">=5.10.0",
		"npm": ">=5.0.0"
	},
	"description": "Desktop web UI based on Vue2.0",
	"theme": "./custom.js",
	"keywords": [
		"xcui",
		"vue",
		"vue-components",
		"web-components",
		"ui-components",
		"component",
		"components",
		"desktop ui",
		"framework",
		"frontend"
	],
	"author": "wmfe",
	"license": "MIT",
	"repository": {
		"type": "git",
		"url": "https://github.com/wmfe/xcui"
	},
	"scripts": {
		"dev": "node build/dev-server.js",
		"site": "rimraf site && node build/build-site.js",
		"build": "npm run build:lib && npm run site",
		"build:lib": "rimraf lib && npm run build:bundle && npm run build:components && npm run build:utils",
		"build:components": "node build/build-components.js",
		"build:utils": "node build/build-utils.js",
		"build:bundle": "node build/build-bundle.js"
	},
	"dependencies": {
		"async-validator": "^1.6.9"
	},
	"devDependencies": {
		"babel-core": "^6.9.1",
		"babel-helper-vue-jsx-merge-props": "^2.0.2",
		"babel-loader": "^7.1.1",
		"babel-plugin-add-module-exports": "^0.2.1",
		"babel-plugin-syntax-jsx": "^6.18.0",
		"babel-plugin-transform-es2015-modules-umd": "^6.24.1",
		"babel-plugin-transform-runtime": "^6.23.0",
		"babel-plugin-transform-vue-jsx": "^3.4.3",
		"babel-preset-es2015": "^6.24.1",
		"babel-preset-stage-2": "^6.0.0",
		"babel-runtime": "^6.0.0",
		"connect-history-api-fallback": "^1.3.0",
		"copy-webpack-plugin": "^1.1.1",
		"cross-env": "^4.0.0",
		"css-loader": "^0.28.4",
		"eslint": "^2.5.1",
		"eslint-config-standard": "^5.1.0",
		"eslint-friendly-formatter": "^1.2.2",
		"eslint-loader": "^1.9.0",
		"eslint-plugin-html": "^1.4.0",
		"eslint-plugin-promise": "^1.1.0",
		"eslint-plugin-standard": "^1.3.2",
		"eventsource-polyfill": "^0.9.6",
		"express": "^4.13.3",
		"extract-text-webpack-plugin": "^3.0.0",
		"file-loader": "^0.11.2",
		"file-save": "^0.2.0",
		"friendly-errors-webpack-plugin": "^1.6.1",
		"html-webpack-plugin": "^2.29.0",
		"http-proxy-middleware": "^0.17.4",
		"json-loader": "^0.5.4",
		"jsonp": "^0.2.0",
		"less": "^2.6.1",
		"less-loader": "^4.0.5",
		"less-vars-to-js": "^1.1.2",
		"markdown-it-container": "^2.0.0",
		"opn": "^5.1.0",
		"optimize-css-assets-webpack-plugin": "^2.0.0",
		"ora": "^1.3.0",
		"rimraf": "^2.5.0",
		"shelljs": "^0.7.8",
		"style-loader": "^0.18.2",
		"url-loader": "^0.5.9",
		"vue": "^2.4.2",
		"vue-hot-reload-api": "^1.2.0",
		"vue-html-loader": "^1.2.4",
		"vue-loader": "^12.2.2",
		"vue-router": "^2.0.0",
		"vue-style-loader": "^3.0.1",
		"vue-template-compiler": "^2.4.2",
		"webpack": "^3.3.0",
		"webpack-dev-middleware": "^1.11.0",
		"webpack-hot-middleware": "^2.18.2",
		"webpack-merge": "^4.1.0",
		"webpack-node-externals": "^1.6.0",
		"xcui-demo-loader": "^0.1.9"
	}
};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(97), __esModule: true };

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./demos/helpers/install.js
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__demoControl__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__demoControl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__demoControl__);


const Helpers = {};
Helpers.install = (Vue, options) => {
    Vue.component(__WEBPACK_IMPORTED_MODULE_0__demoControl___default.a.name, __WEBPACK_IMPORTED_MODULE_0__demoControl___default.a);
};

/* harmony default export */ var install_defaultExport = (Helpers);

// CONCATENATED MODULE: ./demos/main.js
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_components_index__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_components_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__src_components_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__App__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__App__);
/**
 * entry point
 */







__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_3__src_components_index___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(install_defaultExport);
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */](__WEBPACK_IMPORTED_MODULE_4__App___default.a).$mount('#app');


/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.4.2
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
/*  */

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

var _toString = Object.prototype.toString;

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(val);
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,is');

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /([^-])([A-Z])/g;
var hyphenate = cached(function (str) {
  return str
    .replace(hyphenateRE, '$1-$2')
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase()
});

/**
 * Simple bind, faster than native
 */
function bind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
  // record original fn length
  boundFn._length = fn.length;
  return boundFn
}

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "production" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "production" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

var emptyObject = Object.freeze({});

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

var warn = noop;
var tip = noop;
var formatComponentName = (null); // work around flow check

if (false) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var name = typeof vm === 'string'
      ? vm
      : typeof vm === 'function' && vm.options
        ? vm.options.name
        : vm._isVue
          ? vm.$options.name || vm.$options._componentTag
          : vm.name;

    var file = vm._isVue && vm.$options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  var generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

function handleError (err, vm, info) {
  if (config.errorHandler) {
    config.errorHandler.call(null, err, vm, info);
  } else {
    if (false) {
      warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    }
    /* istanbul ignore else */
    if (inBrowser && typeof console !== 'undefined') {
      console.error(err);
    } else {
      throw err
    }
  }
}

/*  */
/* globals MutationObserver */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = UA && UA.indexOf('android') > 0;
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefix has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

/**
 * Defer a task to execute it asynchronously.
 */
var nextTick = (function () {
  var callbacks = [];
  var pending = false;
  var timerFunc;

  function nextTickHandler () {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // the nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:
  /* istanbul ignore if */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    var logError = function (err) { console.error(err); };
    timerFunc = function () {
      p.then(nextTickHandler).catch(logError);
      // in problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) { setTimeout(noop); }
    };
  } else if (typeof MutationObserver !== 'undefined' && (
    isNative(MutationObserver) ||
    // PhantomJS and iOS 7.x
    MutationObserver.toString() === '[object MutationObserverConstructor]'
  )) {
    // use MutationObserver where native Promise is not available,
    // e.g. PhantomJS IE11, iOS7, Android 4.4
    var counter = 1;
    var observer = new MutationObserver(nextTickHandler);
    var textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
      characterData: true
    });
    timerFunc = function () {
      counter = (counter + 1) % 2;
      textNode.data = String(counter);
    };
  } else {
    // fallback to setTimeout
    /* istanbul ignore next */
    timerFunc = function () {
      setTimeout(nextTickHandler, 0);
    };
  }

  return function queueNextTick (cb, ctx) {
    var _resolve;
    callbacks.push(function () {
      if (cb) {
        try {
          cb.call(ctx);
        } catch (e) {
          handleError(e, ctx, 'nextTick');
        }
      } else if (_resolve) {
        _resolve(ctx);
      }
    });
    if (!pending) {
      pending = true;
      timerFunc();
    }
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve, reject) {
        _resolve = resolve;
      })
    }
  }
})();

var _Set;
/* istanbul ignore if */
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */


var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */
var observerState = {
  shouldConvert: true
};

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value)) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    observerState.shouldConvert &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
        }
        if (Array.isArray(value)) {
          dependArray(value);
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (false) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (hasOwn(target, key)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "production" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "production" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (false) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this) : parentVal
      )
    }
  } else if (parentVal || childVal) {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm)
        : undefined;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      "production" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn.call(this, parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (parentVal, childVal) {
  var res = Object.create(parentVal || null);
  return childVal
    ? extend(res, childVal)
    : res
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (parentVal, childVal) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key in childVal) {
    var parent = ret[key];
    var child = childVal[key];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (parentVal, childVal) {
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    var lower = key.toLowerCase();
    if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
      warn(
        'Do not use built-in or reserved HTML elements as component ' +
        'id: ' + key
      );
    }
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (false) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options) {
  var inject = options.inject;
  if (Array.isArray(inject)) {
    var normalized = options.inject = {};
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = inject[i];
    }
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (false) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child);
  normalizeInject(child);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (false) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // handle boolean props
  if (isType(Boolean, prop.type)) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
      value = true;
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldConvert = observerState.shouldConvert;
    observerState.shouldConvert = true;
    observe(value);
    observerState.shouldConvert = prevShouldConvert;
  }
  if (false) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (false) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      'Invalid prop: type check failed for prop "' + name + '".' +
      ' Expected ' + expectedTypes.map(capitalize).join(', ') +
      ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.',
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    valid = typeof value === expectedType.toLowerCase();
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isType (type, fn) {
  if (!Array.isArray(fn)) {
    return getType(fn) === getType(type)
  }
  for (var i = 0, len = fn.length; i < len; i++) {
    if (getType(fn[i]) === getType(type)) {
      return true
    }
  }
  /* istanbul ignore next */
  return false
}

/*  */

var mark;
var measure;

if (false) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (false) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      "referenced during render. Make sure to declare reactive data " +
      "properties in the data option.",
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' &&
    Proxy.toString().match(/native code/);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.functionalContext = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: {} };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.isCloned = true;
  return cloned
}

function cloneVNodes (vnodes) {
  var len = vnodes.length;
  var res = new Array(len);
  for (var i = 0; i < len; i++) {
    res[i] = cloneVNode(vnodes[i]);
  }
  return res
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, cur, old, event;
  for (name in on) {
    cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
      "production" !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (false) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    last = res[res.length - 1];
    //  nested
    if (Array.isArray(c)) {
      res.push.apply(res, normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i)));
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        (last).text += String(c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[res.length - 1] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (comp.__esModule && comp.default) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      "production" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                 false
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && isDef(c.componentOptions)) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once$$1) {
  if (once$$1) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        this$1.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (arguments.length === 1) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (false) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */

/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  var defaultSlot = [];
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.functionalContext === context) &&
      child.data && child.data.slot != null
    ) {
      var name = child.data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children);
      } else {
        slot.push(child);
      }
    } else {
      defaultSlot.push(child);
    }
  }
  // ignore whitespace
  if (!defaultSlot.every(isWhitespace)) {
    slots.default = defaultSlot;
  }
  return slots
}

function isWhitespace (node) {
  return node.isComment || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (false) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (false) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure((name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure((name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  vm._watcher = new Watcher(vm, updateComponent, noop);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (false) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listensers hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data && parentVnode.data.attrs;
  vm.$listeners = listeners;

  // update props
  if (propsData && vm.$options.props) {
    observerState.shouldConvert = false;
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      props[key] = validateProp(key, vm.$options.props, propsData, vm);
    }
    observerState.shouldConvert = true;
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  if (listeners) {
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);
  }
  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (false) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (false) {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (false) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options
) {
  this.vm = vm;
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  false
    ? expOrFn.toString()
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      "production" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
var seenObjects = new _Set();
function traverse (val) {
  seenObjects.clear();
  _traverse(val, seenObjects);
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || !Object.isExtensible(val)) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function checkOptionType (vm, name) {
  var option = vm.$options[name];
  if (!isPlainObject(option)) {
    warn(
      ("component option \"" + name + "\" should be an object."),
      vm
    );
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  observerState.shouldConvert = isRoot;
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (false) {
      if (isReservedAttribute(key) || config.isReservedAttr(key)) {
        warn(
          ("\"" + key + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (vm.$parent && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {
      defineReactive$$1(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  observerState.shouldConvert = true;
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "production" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (false) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      "production" !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  try {
    return data.call(vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  "production" !== 'production' && checkOptionType(vm, 'computed');
  var watchers = vm._computedWatchers = Object.create(null);

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (false) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }
    // create internal watcher for the computed property.
    watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (false) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (target, key, userDef) {
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = createComputedGetter(key);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  if (false) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  "production" !== 'production' && checkOptionType(vm, 'methods');
  var props = vm.$options.props;
  for (var key in methods) {
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
    if (false) {
      if (methods[key] == null) {
        warn(
          "method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
    }
  }
}

function initWatch (vm, watch) {
  "production" !== 'production' && checkOptionType(vm, 'watch');
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  keyOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(keyOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (false) {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    observerState.shouldConvert = false;
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (false) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {
        defineReactive$$1(vm, key, result[key]);
      }
    });
    observerState.shouldConvert = true;
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
        ? Reflect.ownKeys(inject)
        : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key];
      var source = vm;
      while (source) {
        if (source._provided && provideKey in source._provided) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (false) {
        warn(("Injection \"" + key + "\" not found"), vm);
      }
    }
    return result
  }
}

/*  */

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  context,
  children
) {
  var props = {};
  var propOptions = Ctor.options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || {});
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var _context = Object.create(context);
  var h = function (a, b, c, d) { return createElement(_context, a, b, c, d, true); };
  var vnode = Ctor.options.render.call(null, h, {
    data: data,
    props: props,
    children: children,
    parent: context,
    listeners: data.on || {},
    injections: resolveInject(Ctor.options.inject, context),
    slots: function () { return resolveSlots(children, context); }
  });
  if (vnode instanceof VNode) {
    vnode.functionalContext = context;
    vnode.functionalOptions = Ctor.options;
    if (data.slot) {
      (vnode.data || (vnode.data = {})).slot = data.slot;
    }
  }
  return vnode
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

// hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    } else if (vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (false) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // merge component management hooks onto the placeholder node
  mergeHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var vnodeComponentOptions = vnode.componentOptions;
  var options = {
    _isComponent: true,
    parent: parent,
    propsData: vnodeComponentOptions.propsData,
    _componentTag: vnodeComponentOptions.tag,
    _parentVnode: vnode,
    _parentListeners: vnodeComponentOptions.listeners,
    _renderChildren: vnodeComponentOptions.children,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnodeComponentOptions.Ctor(options)
}

function mergeHooks (data) {
  if (!data.hook) {
    data.hook = {};
  }
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var fromParent = data.hook[key];
    var ours = componentVNodeHooks[key];
    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
  }
}

function mergeHook$1 (one, two) {
  return function (a, b, c, d) {
    one(a, b, c, d);
    two(a, b, c, d);
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    "production" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if (false
  ) {
    warn(
      'Avoid using non-primitive value as key, ' +
      'use string/number value instead.',
      context
    );
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (isDef(vnode)) {
    if (ns) { applyNS(vnode, ns); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    return
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && isUndef(child.ns)) {
        applyNS(child, ns);
      }
    }
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      props = extend(extend({}, bindObject), props);
    }
    return scopedSlotFn(props) || fallback
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes && "production" !== 'production') {
      slotNodes._rendered && warn(
        "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
        "- this will likely cause render errors.",
        this
      );
      slotNodes._rendered = true;
    }
    return slotNodes || fallback
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

/**
 * Runtime helper for checking keyCodes from config.
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInAlias
) {
  var keyCodes = config.keyCodes[key] || builtInAlias;
  if (Array.isArray(keyCodes)) {
    return keyCodes.indexOf(eventKeyCode) === -1
  } else {
    return keyCodes !== eventKeyCode
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      "production" !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var tree = this._staticTrees[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree by doing a shallow clone.
  if (tree && !isInFor) {
    return Array.isArray(tree)
      ? cloneVNodes(tree)
      : cloneVNode(tree)
  }
  // otherwise, render a fresh tree.
  tree = this._staticTrees[index] =
    this.$options.staticRenderFns[index].call(this._renderProxy);
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      "production" !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(ours, existing) : ours;
      }
    }
  }
  return data
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null;
  var parentVnode = vm.$vnode = vm.$options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;
  /* istanbul ignore else */
  if (false) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', vm.$options._parentListeners, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs, null, true);
    defineReactive$$1(vm, '$listeners', vm.$options._parentListeners, null, true);
  }
}

function renderMixin (Vue) {
  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var staticRenderFns = ref.staticRenderFns;
    var _parentVnode = ref._parentVnode;

    if (vm._isMounted) {
      // clone slot nodes on re-renders
      for (var key in vm.$slots) {
        vm.$slots[key] = cloneVNodes(vm.$slots[key]);
      }
    }

    vm.$scopedSlots = (_parentVnode && _parentVnode.data.scopedSlots) || emptyObject;

    if (staticRenderFns && !vm._staticTrees) {
      vm._staticTrees = [];
    }
    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render function");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (false) {
        vnode = vm.$options.renderError
          ? vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e)
          : vm._vnode;
      } else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (false) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };

  // internal render helpers.
  // these are exposed on the instance prototype to reduce generated render
  // code size.
  Vue.prototype._o = markOnce;
  Vue.prototype._n = toNumber;
  Vue.prototype._s = toString;
  Vue.prototype._l = renderList;
  Vue.prototype._t = renderSlot;
  Vue.prototype._q = looseEqual;
  Vue.prototype._i = looseIndexOf;
  Vue.prototype._m = renderStatic;
  Vue.prototype._f = resolveFilter;
  Vue.prototype._k = checkKeyCodes;
  Vue.prototype._b = bindObjectProps;
  Vue.prototype._v = createTextVNode;
  Vue.prototype._e = createEmptyVNode;
  Vue.prototype._u = resolveScopedSlots;
  Vue.prototype._g = bindObjectListeners;
}

/*  */

var uid$1 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$1++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (false) {
      startTag = "vue-perf-init:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (false) {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (false) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(((vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  opts.parent = options.parent;
  opts.propsData = options.propsData;
  opts._parentVnode = options._parentVnode;
  opts._parentListeners = options._parentListeners;
  opts._renderChildren = options._renderChildren;
  opts._componentTag = options._componentTag;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;
  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue$3 (options) {
  if (false
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue$3);
stateMixin(Vue$3);
eventsMixin(Vue$3);
lifecycleMixin(Vue$3);
renderMixin(Vue$3);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (false) {
      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
        warn(
          'Invalid component name: "' + name + '". Component names ' +
          'can only contain alphanumeric characters and the hyphen, ' +
          'and must start with a letter.'
        );
      }
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (false) {
          if (type === 'component' && config.isReservedTag(id)) {
            warn(
              'Do not use built-in or reserved HTML elements as component ' +
              'id: ' + id
            );
          }
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

var patternTypes = [String, RegExp, Array];

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (cache, current, filter) {
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        if (cachedNode !== current) {
          pruneCacheEntry(cachedNode);
        }
        cache[key] = null;
      }
    }
  }
}

function pruneCacheEntry (vnode) {
  if (vnode) {
    vnode.componentInstance.$destroy();
  }
}

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes
  },

  created: function created () {
    this.cache = Object.create(null);
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache[key]);
    }
  },

  watch: {
    include: function include (val) {
      pruneCache(this.cache, this._vnode, function (name) { return matches(val, name); });
    },
    exclude: function exclude (val) {
      pruneCache(this.cache, this._vnode, function (name) { return !matches(val, name); });
    }
  },

  render: function render () {
    var vnode = getFirstComponentChild(this.$slots.default);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      if (name && (
        (this.include && !matches(this.include, name)) ||
        (this.exclude && matches(this.exclude, name))
      )) {
        return vnode
      }
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (this.cache[key]) {
        vnode.componentInstance = this.cache[key].componentInstance;
      } else {
        this.cache[key] = vnode;
      }
      vnode.data.keepAlive = true;
    }
    return vnode
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (false) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue$3);

Object.defineProperty(Vue$3.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue$3.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

Vue$3.version = '2.4.2';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      "production" !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setAttribute (node, key, val) {
  node.setAttribute(key, val);
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setAttribute: setAttribute
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!key) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *

/*
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

// Some browsers do not support dynamically changing type for <input>
// so they need to be treated as different nodes
function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  var inPre = 0;
  function createElm (vnode, insertedVnodeQueue, parentElm, refElm, nested) {
    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (false) {
        if (data && data.pre) {
          inPre++;
        }
        if (
          !inPre &&
          !vnode.ns &&
          !(config.ignoredElements.length && config.ignoredElements.indexOf(tag) > -1) &&
          config.isUnknownElement(tag)
        ) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }
      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (false) {
        inPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    var ancestor = vnode;
    while (ancestor) {
      if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
        nodeOps.setAttribute(vnode.elm, i, '');
      }
      ancestor = ancestor.parent;
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, elmToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        } else {
          elmToMove = oldCh[idxInOld];
          /* istanbul ignore if */
          if (false) {
            warn(
              'It seems there are duplicate keys that is causing an update error. ' +
              'Make sure each v-for item has a unique key.'
            );
          }
          if (sameVnode(elmToMove, newStartVnode)) {
            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          }
        }
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var bailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  var isRenderedModule = makeMap('attrs,style,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue) {
    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.elm = elm;
      vnode.isAsyncPlaceholder = true;
      return true
    }
    if (false) {
      if (!assertNodeMatch(elm, vnode)) {
        return false
      }
    }
    vnode.elm = elm;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          var childrenMatch = true;
          var childNode = elm.firstChild;
          for (var i$1 = 0; i$1 < children.length; i$1++) {
            if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue)) {
              childrenMatch = false;
              break
            }
            childNode = childNode.nextSibling;
          }
          // if childNode is not null, it means the actual childNodes list is
          // longer than the virtual children list.
          if (!childrenMatch || childNode) {
            if (false
            ) {
              bailed = true;
              console.warn('Parent: ', elm);
              console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
            }
            return false
          }
        }
      }
      if (isDef(data)) {
        for (var key in data) {
          if (!isRenderedModule(key)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode) {
    if (isDef(vnode.tag)) {
      return (
        vnode.tag.indexOf('vue-component') === 0 ||
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (false) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }
        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        if (isDef(vnode.parent)) {
          // component root element replaced.
          // update parent placeholder node element, recursively
          var ancestor = vnode.parent;
          while (ancestor) {
            ancestor.elm = vnode.elm;
            ancestor = ancestor.parent;
          }
          if (isPatchable(vnode)) {
            for (var i = 0; i < cbs.create.length; ++i) {
              cbs.create[i](emptyNode, vnode.parent);
            }
          }
        }

        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  /* istanbul ignore if */
  if (isIE9 && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, key);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + "," + args)
  }
}

/*  */

function baseWarn (msg) {
  console.error(("[Vue compiler]: " + msg));
}

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
}

function addAttr (el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  modifiers
) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn
) {
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    false
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.'
    );
  }
  // check capture modifier
  if (modifiers && modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name; // mark the event as captured
  }
  if (modifiers && modifiers.once) {
    delete modifiers.once;
    name = '~' + name; // mark the event as once
  }
  /* istanbul ignore if */
  if (modifiers && modifiers.passive) {
    delete modifiers.passive;
    name = '&' + name; // mark the event as passive
  }
  var events;
  if (modifiers && modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }
  var newHandler = { value: value, modifiers: modifiers };
  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

function getAndRemoveAttr (el, name) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  return val
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
        "? " + baseValueExpression + ".trim()" +
        ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: ("\"" + value + "\""),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var modelRs = parseModel(value);
  if (modelRs.idx === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (modelRs.exp) + ", " + (modelRs.idx) + ", " + assignment + ")")
  }
}

/**
 * parse directive model to do the array update transform. a[idx] = val => $$a.splice($$idx, 1, val)
 *
 * for loop possible cases:
 *
 * - test
 * - test[idx]
 * - test[test1[idx]]
 * - test["a"][idx]
 * - xxx.test[a[a].test1[idx]]
 * - test.xxx.a["asa"][test1[idx]]
 *
 */

var len;
var str;
var chr;
var index$1;
var expressionPos;
var expressionEndPos;

function parseModel (val) {
  str = val;
  len = str.length;
  index$1 = expressionPos = expressionEndPos = 0;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    return {
      exp: val,
      idx: null
    }
  }

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.substring(0, expressionPos),
    idx: val.substring(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  if (false) {
    var dynamicType = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (tag === 'input' && dynamicType) {
      warn$1(
        "<input :type=\"" + dynamicType + "\" v-model=\"" + value + "\">:\n" +
        "v-model does not support dynamic input types. Use v-if branches instead."
      );
    }
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead."
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (false) {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.'
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
      "?_i(" + value + "," + valueBinding + ")>-1" + (
        trueValueBinding === 'true'
          ? (":(" + value + ")")
          : (":_q(" + value + "," + trueValueBinding + ")")
      )
  );
  addHandler(el, CHECKBOX_RADIO_TOKEN,
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + value + "=$$a.concat($$v))}" +
      "else{$$i>-1&&(" + value + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
    el,
    value,
    modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, CHECKBOX_RADIO_TOKEN, genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
    el,
    value,
    modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;
  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  var event;
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    // Chrome fires microtasks in between click/change, leads to #4521
    event = isChrome ? 'click' : 'change';
    on[event] = [].concat(on[CHECKBOX_RADIO_TOKEN], on[event] || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  if (once$$1) {
    var oldHandler = handler;
    var _target = target$1; // save current target element in closure
    handler = function (ev) {
      var res = arguments.length === 1
        ? oldHandler(ev)
        : oldHandler.apply(null, arguments);
      if (res !== null) {
        remove$2(event, handler, capture, _target);
      }
    };
  }
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(event, handler, capture);
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, vnode, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (
  elm,
  vnode,
  checkVal
) {
  return (!elm.composing && (
    vnode.tag === 'option' ||
    isDirty(elm, checkVal) ||
    isInputChanged(elm, checkVal)
  ))
}

function isDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isInputChanged (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers) && modifiers.number) {
    return toNumber(value) !== toNumber(newVal)
  }
  if (isDef(modifiers) && modifiers.trim) {
    return value.trim() !== newVal.trim()
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likley wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser && window.requestAnimationFrame
  ? window.requestAnimationFrame.bind(window)
  : setTimeout;

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if (false) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      addTransitionClass(el, toClass);
      removeTransitionClass(el, startClass);
      if (!cb.cancelled && !userWantsControl) {
        if (isValidDuration(explicitEnterDuration)) {
          setTimeout(cb, explicitEnterDuration);
        } else {
          whenTransitionEnds(el, type, cb);
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if (false) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        addTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled && !userWantsControl) {
          if (isValidDuration(explicitLeaveDuration)) {
            setTimeout(cb, explicitLeaveDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var model$1 = {
  inserted: function inserted (el, binding, vnode) {
    if (vnode.tag === 'select') {
      var cb = function () {
        setSelected(el, binding, vnode.context);
      };
      cb();
      /* istanbul ignore if */
      if (isIE || isEdge) {
        setTimeout(cb, 0);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        if (!isAndroid) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
        }
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },
  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        trigger(el, 'change');
      }
    }
  }
};

function setSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "production" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (value === oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: model$1,
  show: show
};

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$options._renderChildren;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if (false) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if (false
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild && (oldChild.data.transition = extend({}, data));
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (false) {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    var body = document.body;
    var f = body.offsetHeight; // eslint-disable-line

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue$3.config.mustUseProp = mustUseProp;
Vue$3.config.isReservedTag = isReservedTag;
Vue$3.config.isReservedAttr = isReservedAttr;
Vue$3.config.getTagNamespace = getTagNamespace;
Vue$3.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue$3.options.directives, platformDirectives);
extend(Vue$3.options.components, platformComponents);

// install platform patch function
Vue$3.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
setTimeout(function () {
  if (config.devtools) {
    if (devtools) {
      devtools.emit('init', Vue$3);
    } else if (false) {
      console[console.info ? 'info' : 'log'](
        'Download the Vue Devtools extension for a better development experience:\n' +
        'https://github.com/vuejs/vue-devtools'
      );
    }
  }
  if (false
  ) {
    console[console.info ? 'info' : 'log'](
      "You are running Vue in development mode.\n" +
      "Make sure to turn on production mode when deploying for production.\n" +
      "See more tips at https://vuejs.org/guide/deployment.html"
    );
  }
}, 0);

/*  */

// check whether current browser encodes a char inside attribute values
function shouldDecode (content, encoded) {
  var div = document.createElement('div');
  div.innerHTML = "<div a=\"" + content + "\"/>";
  return div.innerHTML.indexOf(encoded) > 0
}

// #3663
// IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? shouldDecode('\n', '&#10;') : false;

/*  */

var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});

function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      tokens.push(JSON.stringify(text.slice(lastIndex, index)));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    tokens.push(JSON.stringify(text.slice(lastIndex)));
  }
  return tokens.join('+')
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if (false) {
    var expression = parseText(staticClass, options.delimiters);
    if (expression) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.'
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
};

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    if (false) {
      var expression = parseText(staticStyle, options.delimiters);
      if (expression) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.'
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
};

var modules$1 = [
  klass$1,
  style$1
];

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
};

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
};

/**
 * Not type-checking this file because it's mostly vendor code.
 */

/*!
 * HTML Parser By John Resig (ejohn.org)
 * Modified by Juriy "kangax" Zaytsev
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 */

// Regular Expressions for parsing tags and attributes
var singleAttrIdentifier = /([^\s"'<>/=]+)/;
var singleAttrAssign = /(?:=)/;
var singleAttrValues = [
  // attr value double quotes
  /"([^"]*)"+/.source,
  // attr value, single quotes
  /'([^']*)'+/.source,
  // attr value, no quotes
  /([^\s"'=<>`]+)/.source
];
var attribute = new RegExp(
  '^\\s*' + singleAttrIdentifier.source +
  '(?:\\s*(' + singleAttrAssign.source + ')' +
  '\\s*(?:' + singleAttrValues.join('|') + '))?'
);

// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = '((?:' + ncname + '\\:)?' + ncname + ')';
var startTagOpen = new RegExp('^<' + qnameCapture);
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp('^<\\/' + qnameCapture + '[^>]*>');
var doctype = /^<!DOCTYPE [^>]+>/i;
var comment = /^<!--/;
var conditionalComment = /^<!\[/;

var IS_REGEX_CAPTURING_BROKEN = false;
'x'.replace(/x(.)?/g, function (m, g) {
  IS_REGEX_CAPTURING_BROKEN = g === '';
});

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd));
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(lastTag, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!--([\s\S]*?)-->/g, '$1')
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if (false) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
        if (args[3] === '') { delete args[3]; }
        if (args[4] === '') { delete args[4]; }
        if (args[5] === '') { delete args[5]; }
      }
      var value = args[3] || args[4] || args[5] || '';
      attrs[i] = {
        name: args[1],
        value: decodeAttr(
          value,
          options.shouldDecodeNewlines
        )
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
    }

    // Find the closest opened tag of the same type
    if (tagName) {
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if (false
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag.")
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
var forIteratorRE = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/;

var argRE = /:(.*)$/;
var bindRE = /^:|^v-bind:/;
var modifierRE = /\.[^.]+/g;

var decodeHTMLCached = cached(he.decode);

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg) {
    if (!warned) {
      warned = true;
      warn$2(msg);
    }
  }

  function endPre (element) {
    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldKeepComment: options.comments,
    start: function start (tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = {
        type: 1,
        tag: tag,
        attrsList: attrs,
        attrsMap: makeAttrsMap(attrs),
        parent: currentParent,
        children: []
      };
      if (ns) {
        element.ns = ns;
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        "production" !== 'production' && warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.'
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        preTransforms[i](element, options);
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else {
        processFor(element);
        processIf(element);
        processOnce(element);
        processKey(element);

        // determine whether this is a plain element after
        // removing structural attributes
        element.plain = !element.key && !attrs.length;

        processRef(element);
        processSlot(element);
        processComponent(element);
        for (var i$1 = 0; i$1 < transforms.length; i$1++) {
          transforms[i$1](element, options);
        }
        processAttrs(element);
      }

      function checkRootConstraints (el) {
        if (false) {
          if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce(
              "Cannot use <" + (el.tag) + "> as component root element because it may " +
              'contain multiple nodes.'
            );
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce(
              'Cannot use v-for on stateful component root element because ' +
              'it renders multiple elements.'
            );
          }
        }
      }

      // tree management
      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element);
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else if (false) {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead."
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) { // scoped slot
          currentParent.plain = false;
          var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        endPre(element);
      }
      // apply post-transforms
      for (var i$2 = 0; i$2 < postTransforms.length; i$2++) {
        postTransforms[i$2](element, options);
      }
    },

    end: function end () {
      // remove trailing whitespace
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
        element.children.pop();
      }
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      endPre(element);
    },

    chars: function chars (text) {
      if (!currentParent) {
        if (false) {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.'
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored.")
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      text = inPre || text.trim()
        ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
      if (text) {
        var expression;
        if (!inVPre && text !== ' ' && (expression = parseText(text, delimiters))) {
          children.push({
            type: 2,
            expression: expression,
            text: text
          });
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          children.push({
            type: 3,
            text: text
          });
        }
      }
    },
    comment: function comment (text) {
      currentParent.children.push({
        type: 3,
        text: text,
        isComment: true
      });
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if (false) {
      warn$2("<template> cannot be keyed. Place the key on real elements instead.");
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var inMatch = exp.match(forAliasRE);
    if (!inMatch) {
      "production" !== 'production' && warn$2(
        ("Invalid v-for expression: " + exp)
      );
      return
    }
    el.for = inMatch[2].trim();
    var alias = inMatch[1].trim();
    var iteratorMatch = alias.match(forIteratorRE);
    if (iteratorMatch) {
      el.alias = iteratorMatch[1].trim();
      el.iterator1 = iteratorMatch[2].trim();
      if (iteratorMatch[3]) {
        el.iterator2 = iteratorMatch[3].trim();
      }
    } else {
      el.alias = alias;
    }
  }
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else if (false) {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if."
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if (false) {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored."
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

function processSlot (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if (false) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead."
      );
    }
  } else {
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
    }
    if (el.tag === 'template') {
      el.slotScope = getAndRemoveAttr(el, 'scope');
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, isProp;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isProp = false;
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            addHandler(
              el,
              ("update:" + (camelize(name))),
              genAssignmentCode(value, "$event")
            );
          }
        }
        if (isProp || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers, false, warn$2);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
        }
        addDirective(el, name, rawName, value, arg, modifiers);
        if (false) {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      if (false) {
        var expression = parseText(value, delimiters);
        if (expression) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.'
          );
        }
      }
      addAttr(el, name, JSON.stringify(value));
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      false
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead."
      );
    }
    _el = _el.parent;
  }
}

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;

// keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative,
  warn
) {
  var res = isNative ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    var handler = events[name];
    // #5330: warn click.right, since right clicks do not actually fire click events.
    if (false
    ) {
      warn(
        "Use \"contextmenu\" instead of \"click.right\" since right clicks " +
        "do not actually fire \"click\" events."
      );
    }
    res += "\"" + name + "\":" + (genHandler(name, handler)) + ",";
  }
  return res.slice(0, -1) + '}'
}

function genHandler (
  name,
  handler
) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);

  if (!handler.modifiers) {
    return isMethodPath || isFunctionExpression
      ? handler.value
      : ("function($event){" + (handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? handler.value + '($event)'
      : isFunctionExpression
        ? ("(" + (handler.value) + ")($event)")
        : handler.value;
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var alias = keyCodes[key];
  return ("_k($event.keyCode," + (JSON.stringify(key)) + (alias ? ',' + JSON.stringify(alias) : '') + ")")
}

/*  */

function on (el, dir) {
  if (false) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
};

/*  */

var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data = el.plain ? undefined : genData$2(el, state);

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      "production" !== 'production' && state.warn(
        "v-once can only be used inside v-for that is keyed. "
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + (key ? ("," + key) : "") + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if (false
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + (genProps(el.attrs)) + "},";
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + (genProps(el.props)) + "},";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false, state.warn)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true, state.warn)) + ",";
  }
  // slot target
  if (el.slotTarget) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if (false) {
    state.warn('Inline-template components must have exactly one child element.');
  }
  if (ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  slots,
  state
) {
  return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) {
      return genScopedSlot(key, slots[key], state)
    }).join(',')) + "])")
}

function genScopedSlot (
  key,
  el,
  state
) {
  if (el.for && !el.forProcessed) {
    return genForScopedSlot(key, el, state)
  }
  return "{key:" + key + ",fn:function(" + (String(el.attrsMap.scope)) + "){" +
    "return " + (el.tag === 'template'
      ? genChildren(el, state) || 'void 0'
      : genElement(el, state)) + "}}"
}

function genForScopedSlot (
  key,
  el,
  state
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genScopedSlot(key, el, state)) +
    '})'
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      return (altGenElement || genElement)(el$1, state)
    }
    var normalizationType = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType ? ("," + normalizationType) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
  }
  return res.slice(0, -1)
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// check valid identifier for v-for
var identRE = /[A-Za-z_$][\w$]*/;

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors
}

function checkNode (node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), errors);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), errors);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), errors);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}

function checkEvent (exp, text, errors) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    errors.push(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
    );
  }
  checkExpression(exp, text, errors);
}

function checkFor (node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier (ident, type, text, errors) {
  if (typeof ident === 'string' && !identRE.test(ident)) {
    errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
  }
}

function checkExpression (exp, text, errors) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
      );
    } else {
      errors.push(("invalid expression: " + (text.trim())));
    }
  }
}

/*  */

function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = options || {};

    /* istanbul ignore if */
    if (false) {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    if (false) {
      if (compiled.errors && compiled.errors.length) {
        warn(
          "Error compiling template:\n\n" + template + "\n\n" +
          compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
          vm
        );
      }
      if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(function (msg) { return tip(msg, vm); });
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    if (false) {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];
      finalOptions.warn = function (msg, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      var compiled = baseCompile(template, finalOptions);
      if (false) {
        errors.push.apply(errors, detectErrors(compiled.ast));
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  optimize(ast, options);
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compileToFunctions = ref$1.compileToFunctions;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue$3.prototype.$mount;
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    "production" !== 'production' && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if (false) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        if (false) {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if (false) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        shouldDecodeNewlines: shouldDecodeNewlines,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if (false) {
        mark('compile end');
        measure(((this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue$3.compile = compileToFunctions;

/* harmony default export */ __webpack_exports__["a"] = (Vue$3);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(82)))

/***/ }),
/* 82 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(84)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(86),
  /* template */
  __webpack_require__(87),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 84 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 85 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'xcui-demo',
    data: function data() {
        return {
            hovering: false,
            expanded: false,
            showCodeText: '展开代码',
            hideCodeText: '收起代码'
        };
    },

    computed: {
        expandedHeight: function expandedHeight() {
            return this.$el.getElementsByClassName('xcui-code-wrap')[0].clientHeight + 30;
        },
        componentDemoClass: function componentDemoClass() {
            var componentName = this.$route.path.match(/\/component\/([a-zA-Z-]+)/)[1];
            return 'demo-' + componentName;
        }
    },
    watch: {
        expanded: function expanded(val) {
            this.$refs.expandWrap.style.height = val ? this.expandedHeight + 'px' : 0;
        }
    }
};

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "xcui-demo-container",
    class: _vm.componentDemoClass
  }, [_c('div', {
    staticClass: "xcui-example-container"
  }, [_vm._t("title"), _vm._v(" "), _c('div', {
    staticClass: "xcui-source-wrap"
  }, [_vm._t("source")], 2), _vm._v(" "), _c('div', {
    staticClass: "xcui-info-wrap"
  }, [_c('div', {
    staticClass: "xcui-info-header"
  }, [_vm._t("info-title")], 2), _vm._v(" "), _c('div', {
    staticClass: "xcui-info-content"
  }, [_vm._t("info")], 2)]), _vm._v(" "), _c('div', {
    ref: "expandWrap",
    staticClass: "expand-wrap"
  }, [_c('div', {
    staticClass: "xcui-code-wrap"
  }, [_vm._t("highlight")], 2)])], 2), _vm._v(" "), _c('div', {
    staticClass: "expand-control",
    on: {
      "click": function($event) {
        _vm.expanded = !_vm.expanded
      }
    }
  }, [_c('i', {
    staticClass: "x-icon",
    class: _vm.expanded ? 'x-icon-chevron-up' : 'x-icon-chevron-down'
  }), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.expanded),
      expression: "!expanded"
    }]
  }, [_vm._v(_vm._s(_vm.showCodeText))]), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.expanded),
      expression: "expanded"
    }]
  }, [_vm._v(_vm._s(_vm.hideCodeText))])])])
},staticRenderFns: []}

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(89);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(381);

exports.default = _index2.default;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _alert = __webpack_require__(90);

var _alert2 = _interopRequireDefault(_alert);

var _datePicker = __webpack_require__(94);

var _datePicker2 = _interopRequireDefault(_datePicker);

var _timePicker = __webpack_require__(158);

var _timePicker2 = _interopRequireDefault(_timePicker);

var _timeSelect = __webpack_require__(165);

var _timeSelect2 = _interopRequireDefault(_timeSelect);

var _input = __webpack_require__(9);

var _input2 = _interopRequireDefault(_input);

var _inputNumber = __webpack_require__(172);

var _inputNumber2 = _interopRequireDefault(_inputNumber);

var _textarea = __webpack_require__(176);

var _textarea2 = _interopRequireDefault(_textarea);

var _checkbox = __webpack_require__(65);

var _checkbox2 = _interopRequireDefault(_checkbox);

var _checkboxGroup = __webpack_require__(184);

var _checkboxGroup2 = _interopRequireDefault(_checkboxGroup);

var _radio = __webpack_require__(188);

var _radio2 = _interopRequireDefault(_radio);

var _radioButton = __webpack_require__(192);

var _radioButton2 = _interopRequireDefault(_radioButton);

var _radioGroup = __webpack_require__(196);

var _radioGroup2 = _interopRequireDefault(_radioGroup);

var _loading = __webpack_require__(200);

var _loading2 = _interopRequireDefault(_loading);

var _message = __webpack_require__(208);

var _message2 = _interopRequireDefault(_message);

var _notice = __webpack_require__(218);

var _notice2 = _interopRequireDefault(_notice);

var _modal = __webpack_require__(69);

var _modal2 = _interopRequireDefault(_modal);

var _dialog = __webpack_require__(226);

var _dialog2 = _interopRequireDefault(_dialog);

var _pageloading = __webpack_require__(227);

var _pageloading2 = _interopRequireDefault(_pageloading);

var _index = __webpack_require__(231);

var _index2 = _interopRequireDefault(_index);

var _popover = __webpack_require__(245);

var _popover2 = _interopRequireDefault(_popover);

var _progress = __webpack_require__(74);

var _progress2 = _interopRequireDefault(_progress);

var _index3 = __webpack_require__(70);

var _index4 = _interopRequireDefault(_index3);

var _option = __webpack_require__(72);

var _option2 = _interopRequireDefault(_option);

var _optionGroup = __webpack_require__(252);

var _optionGroup2 = _interopRequireDefault(_optionGroup);

var _suggestion = __webpack_require__(256);

var _suggestion2 = _interopRequireDefault(_suggestion);

var _tag = __webpack_require__(263);

var _tag2 = _interopRequireDefault(_tag);

var _tagCheckable = __webpack_require__(267);

var _tagCheckable2 = _interopRequireDefault(_tagCheckable);

var _tooltip = __webpack_require__(271);

var _tooltip2 = _interopRequireDefault(_tooltip);

var _scrolltop = __webpack_require__(275);

var _scrolltop2 = _interopRequireDefault(_scrolltop);

var _button = __webpack_require__(29);

var _button2 = _interopRequireDefault(_button);

var _buttonGroup = __webpack_require__(45);

var _buttonGroup2 = _interopRequireDefault(_buttonGroup);

var _row = __webpack_require__(279);

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(283);

var _col2 = _interopRequireDefault(_col);

var _icon = __webpack_require__(287);

var _icon2 = _interopRequireDefault(_icon);

var _switch = __webpack_require__(291);

var _switch2 = _interopRequireDefault(_switch);

var _form = __webpack_require__(295);

var _form2 = _interopRequireDefault(_form);

var _formItem = __webpack_require__(299);

var _formItem2 = _interopRequireDefault(_formItem);

var _table = __webpack_require__(324);

var _table2 = _interopRequireDefault(_table);

var _tableColumn = __webpack_require__(330);

var _tableColumn2 = _interopRequireDefault(_tableColumn);

var _steps = __webpack_require__(344);

var _steps2 = _interopRequireDefault(_steps);

var _collapse = __webpack_require__(352);

var _collapse2 = _interopRequireDefault(_collapse);

var _collapseItem = __webpack_require__(356);

var _collapseItem2 = _interopRequireDefault(_collapseItem);

var _upload = __webpack_require__(360);

var _upload2 = _interopRequireDefault(_upload);

var _dropdown = __webpack_require__(370);

var _dropdown2 = _interopRequireDefault(_dropdown);

var _dropdownItem = __webpack_require__(373);

var _dropdownItem2 = _interopRequireDefault(_dropdownItem);

var _dropdownMenu = __webpack_require__(377);

var _dropdownMenu2 = _interopRequireDefault(_dropdownMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var install = function install(Vue) {
    if (install.installed) {
        return;
    }
    Vue.component(_alert2.default.name, _alert2.default);
    Vue.component(_datePicker2.default.name, _datePicker2.default);
    Vue.component(_timePicker2.default.name, _timePicker2.default);
    Vue.component(_timeSelect2.default.name, _timeSelect2.default);
    Vue.component(_inputNumber2.default.name, _inputNumber2.default);
    Vue.component(_modal2.default.name, _modal2.default);
    Vue.component(_index2.default.name, _index2.default);
    Vue.component(_popover2.default.name, _popover2.default);
    Vue.component(_progress2.default.name, _progress2.default);
    Vue.component(_index4.default.name, _index4.default);
    Vue.component(_option2.default.name, _option2.default);
    Vue.component(_optionGroup2.default.name, _optionGroup2.default);
    Vue.component(_suggestion2.default.name, _suggestion2.default);
    Vue.component(_tag2.default.name, _tag2.default);
    Vue.component(_tagCheckable2.default.name, _tagCheckable2.default);
    Vue.component(_tooltip2.default.name, _tooltip2.default);
    Vue.component(_scrolltop2.default.name, _scrolltop2.default);
    Vue.component(_button2.default.name, _button2.default);
    Vue.component(_buttonGroup2.default.name, _buttonGroup2.default);
    Vue.component(_icon2.default.name, _icon2.default);
    Vue.component(_row2.default.name, _row2.default);
    Vue.component(_col2.default.name, _col2.default);
    Vue.component(_input2.default.name, _input2.default);
    Vue.component(_textarea2.default.name, _textarea2.default);
    Vue.component(_checkbox2.default.name, _checkbox2.default);
    Vue.component(_checkboxGroup2.default.name, _checkboxGroup2.default);
    Vue.component(_radio2.default.name, _radio2.default);
    Vue.component(_radioGroup2.default.name, _radioGroup2.default);
    Vue.component(_radioButton2.default.name, _radioButton2.default);
    Vue.component(_switch2.default.name, _switch2.default);
    Vue.component(_form2.default.name, _form2.default);
    Vue.component(_formItem2.default.name, _formItem2.default);
    Vue.component(_table2.default.name, _table2.default);
    Vue.component(_tableColumn2.default.name, _tableColumn2.default);
    Vue.component(_steps2.default.name, _steps2.default);
    Vue.component(_steps.StepsItem.name, _steps.StepsItem);
    Vue.component(_collapse2.default.name, _collapse2.default);
    Vue.component(_collapseItem2.default.name, _collapseItem2.default);
    Vue.component(_upload2.default.name, _upload2.default);
    Vue.component(_dropdown2.default.name, _dropdown2.default);
    Vue.component(_dropdownItem2.default.name, _dropdownItem2.default);
    Vue.component(_dropdownMenu2.default.name, _dropdownMenu2.default);
    Vue.use(_message2.default);
    Vue.use(_notice2.default);
    Vue.use(_dialog2.default);
    Vue.use(_loading2.default);
    Vue.use(_pageloading2.default);
};

var xcui = {
    Alert: _alert2.default,
    DatePicker: _datePicker2.default,
    TimePicker: _timePicker2.default,
    TimeSelect: _timeSelect2.default,
    Input: _input2.default,
    InputNumber: _inputNumber2.default,
    Textarea: _textarea2.default,
    Checkbox: _checkbox2.default,
    CheckboxGroup: _checkboxGroup2.default,
    Radio: _radio2.default,
    RadioButton: _radioButton2.default,
    RadioGroup: _radioGroup2.default,
    Loading: _loading2.default,
    Message: _message2.default,
    Notice: _notice2.default,
    Modal: _modal2.default,
    Dialog: _dialog2.default,
    PageLoading: _pageloading2.default,
    Pagination: _index2.default,
    Popover: _popover2.default,
    Progress: _progress2.default,
    Select: _index4.default,
    Option: _option2.default,
    OptionGroup: _optionGroup2.default,
    Suggestion: _suggestion2.default,
    Tag: _tag2.default,
    TagCheckable: _tagCheckable2.default,
    Tooltip: _tooltip2.default,
    ScrollTop: _scrolltop2.default,
    Button: _button2.default,
    ButtonGroup: _buttonGroup2.default,
    Row: _row2.default,
    Col: _col2.default,
    Icon: _icon2.default,
    Switch: _switch2.default,
    Form: _form2.default,
    FormItem: _formItem2.default,
    Table: _table2.default,
    TableColumn: _tableColumn2.default,
    install: install,
    Collapse: _collapse2.default,
    CollapseItem: _collapseItem2.default,
    Upload: _upload2.default,
    DropDown: _dropdown2.default,
    DropDownMenu: _dropdownMenu2.default,
    DropDownItem: _dropdownItem2.default
};

exports.default = xcui;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alert = __webpack_require__(91);

var _alert2 = _interopRequireDefault(_alert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _alert2.default;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(92),
  /* template */
  __webpack_require__(93),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


var iconTypes = {
    'info': 'information-circled',
    'success': 'checkmark-circled',
    'warning': 'android-alert',
    'error': 'close-circled'
};

exports.default = {
    name: 'x-alert',
    componentName: 'x-alert',
    props: {
        type: String,
        closable: Boolean,
        closeText: String,
        title: String,
        description: String,
        showIcon: Boolean
    },
    data: function data() {
        return {
            visible: true
        };
    },

    computed: {
        typeCls: function typeCls() {
            return this.type ? 'x-alert-' + this.type : '';
        },
        iconCls: function iconCls() {
            return iconTypes[this.type] ? 'x-icon x-icon-' + iconTypes[this.type] : '';
        },
        iconIsLarge: function iconIsLarge() {
            return this.description ? 'x-alert-icon-large' : '';
        },
        closeBtnCls: function closeBtnCls() {
            return this.closeText ? 'x-alert-close-text' : 'x-icon x-icon-android-close';
        }
    },
    methods: {
        close: function close() {
            this.visible = false;
            this.$emit('close');
        }
    }
};

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "x-alert-zoom"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.visible),
      expression: "visible"
    }],
    class: ['x-alert', _vm.typeCls]
  }, [(_vm.showIcon) ? _c('i', {
    class: ['x-alert-icon', _vm.iconCls, _vm.iconIsLarge]
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "x-alert-container"
  }, [(_vm.title) ? _c('div', {
    staticClass: "x-alert-title"
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm._v(" "), (_vm.description) ? _c('div', {
    staticClass: "x-alert-description"
  }, [_vm._t("default", [_vm._v("\n                    " + _vm._s(_vm.description) + "\n                ")])], 2) : _vm._e()]), _vm._v(" "), (_vm.closable) ? _c('i', {
    class: ['x-alert-close-btn', _vm.closeBtnCls],
    on: {
      "click": _vm.close
    }
  }, [_vm._v(_vm._s(_vm.closeText))]) : _vm._e()])])
},staticRenderFns: []}

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _datePicker = __webpack_require__(95);

var _datePicker2 = _interopRequireDefault(_datePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _datePicker2.default;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(96),
  /* template */
  __webpack_require__(157),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pickerMixin = __webpack_require__(30);

var _pickerMixin2 = _interopRequireDefault(_pickerMixin);

var _dateRange = __webpack_require__(138);

var _dateRange2 = _interopRequireDefault(_dateRange);

var _date = __webpack_require__(148);

var _date2 = _interopRequireDefault(_date);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'XDatePicker',
    mixins: [_pickerMixin2.default],
    components: {
        DatePanel: _date2.default,
        DateRangePanel: _dateRange2.default
    },
    props: {
        type: {
            type: String,
            default: 'date'
        }
    }
};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(98);
module.exports = __webpack_require__(4).Number.isInteger;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(10);

$export($export.S, 'Number', {isInteger: __webpack_require__(100)});

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(21)
  , floor    = Math.floor;
module.exports = function isInteger(it){
  return !isObject(it) && isFinite(it) && floor(it) === it;
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(102);
module.exports = __webpack_require__(4).Object.keys;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(25)
  , $keys    = __webpack_require__(17);

__webpack_require__(54)('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(8)
  , toLength  = __webpack_require__(53)
  , toIndex   = __webpack_require__(104);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(34)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



Object.defineProperty(exports, "__esModule", {
    value: true
});

var fecha = {};
var token = /d{1,4}|M{1,4}|yy(?:yy)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g;
var twoDigits = /\d\d?/;
var threeDigits = /\d{3}/;
var fourDigits = /\d{4}/;
var word = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;
var noop = function noop() {};

function shorten(arr, sLen) {
    var newArr = [];
    for (var i = 0, len = arr.length; i < len; i++) {
        newArr.push(arr[i].substr(0, sLen));
    }
    return newArr;
}

function monthUpdate(arrName) {
    return function (d, v, i18n) {
        var index = i18n[arrName].indexOf(v.charAt(0).toUpperCase() + v.substr(1).toLowerCase());
        if (~index) {
            d.month = index;
        }
    };
}

function pad(val, len) {
    val = String(val);
    len = len || 2;
    while (val.length < len) {
        val = '0' + val;
    }
    return val;
}

var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var monthNamesShort = shorten(monthNames, 3);
var dayNamesShort = shorten(dayNames, 3);
fecha.i18n = {
    dayNamesShort: dayNamesShort,
    dayNames: dayNames,
    monthNamesShort: monthNamesShort,
    monthNames: monthNames,
    amPm: ['am', 'pm'],
    DoFn: function DoFn(D) {
        return D + ['th', 'st', 'nd', 'rd'][D % 10 > 3 ? 0 : (D - D % 10 !== 10) * D % 10];
    }
};

var formatFlags = {
    D: function D(dateObj) {
        return dateObj.getDay();
    },
    DD: function DD(dateObj) {
        return pad(dateObj.getDay());
    },
    Do: function Do(dateObj, i18n) {
        return i18n.DoFn(dateObj.getDate());
    },
    d: function d(dateObj) {
        return dateObj.getDate();
    },
    dd: function dd(dateObj) {
        return pad(dateObj.getDate());
    },
    ddd: function ddd(dateObj, i18n) {
        return i18n.dayNamesShort[dateObj.getDay()];
    },
    dddd: function dddd(dateObj, i18n) {
        return i18n.dayNames[dateObj.getDay()];
    },
    M: function M(dateObj) {
        return dateObj.getMonth() + 1;
    },
    MM: function MM(dateObj) {
        return pad(dateObj.getMonth() + 1);
    },
    MMM: function MMM(dateObj, i18n) {
        return i18n.monthNamesShort[dateObj.getMonth()];
    },
    MMMM: function MMMM(dateObj, i18n) {
        return i18n.monthNames[dateObj.getMonth()];
    },
    yy: function yy(dateObj) {
        return String(dateObj.getFullYear()).substr(2);
    },
    yyyy: function yyyy(dateObj) {
        return dateObj.getFullYear();
    },
    h: function h(dateObj) {
        return dateObj.getHours() % 12 || 12;
    },
    hh: function hh(dateObj) {
        return pad(dateObj.getHours() % 12 || 12);
    },
    H: function H(dateObj) {
        return dateObj.getHours();
    },
    HH: function HH(dateObj) {
        return pad(dateObj.getHours());
    },
    m: function m(dateObj) {
        return dateObj.getMinutes();
    },
    mm: function mm(dateObj) {
        return pad(dateObj.getMinutes());
    },
    s: function s(dateObj) {
        return dateObj.getSeconds();
    },
    ss: function ss(dateObj) {
        return pad(dateObj.getSeconds());
    },
    S: function S(dateObj) {
        return Math.round(dateObj.getMilliseconds() / 100);
    },
    SS: function SS(dateObj) {
        return pad(Math.round(dateObj.getMilliseconds() / 10), 2);
    },
    SSS: function SSS(dateObj) {
        return pad(dateObj.getMilliseconds(), 3);
    },
    a: function a(dateObj, i18n) {
        return dateObj.getHours() < 12 ? i18n.amPm[0] : i18n.amPm[1];
    },
    A: function A(dateObj, i18n) {
        return dateObj.getHours() < 12 ? i18n.amPm[0].toUpperCase() : i18n.amPm[1].toUpperCase();
    },
    ZZ: function ZZ(dateObj) {
        var o = dateObj.getTimezoneOffset();
        return (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4);
    }
};

var parseFlags = {
    d: [twoDigits, function (d, v) {
        d.day = v;
    }],
    M: [twoDigits, function (d, v) {
        d.month = v - 1;
    }],
    yy: [twoDigits, function (d, v) {
        var da = new Date(),
            cent = +('' + da.getFullYear()).substr(0, 2);
        d.year = '' + (v > 68 ? cent - 1 : cent) + v;
    }],
    h: [twoDigits, function (d, v) {
        d.hour = v;
    }],
    m: [twoDigits, function (d, v) {
        d.minute = v;
    }],
    s: [twoDigits, function (d, v) {
        d.second = v;
    }],
    yyyy: [fourDigits, function (d, v) {
        d.year = v;
    }],
    S: [/\d/, function (d, v) {
        d.millisecond = v * 100;
    }],
    SS: [/\d{2}/, function (d, v) {
        d.millisecond = v * 10;
    }],
    SSS: [threeDigits, function (d, v) {
        d.millisecond = v;
    }],
    D: [twoDigits, noop],
    ddd: [word, noop],
    MMM: [word, monthUpdate('monthNamesShort')],
    MMMM: [word, monthUpdate('monthNames')],
    a: [word, function (d, v, i18n) {
        var val = v.toLowerCase();
        if (val === i18n.amPm[0]) {
            d.isPm = false;
        } else if (val === i18n.amPm[1]) {
            d.isPm = true;
        }
    }],
    ZZ: [/[\+\-]\d\d:?\d\d/, function (d, v) {
        var parts = (v + '').match(/([\+\-]|\d\d)/gi),
            minutes;

        if (parts) {
            minutes = +(parts[1] * 60) + parseInt(parts[2], 10);
            d.timezoneOffset = parts[0] === '+' ? minutes : -minutes;
        }
    }]
};
parseFlags.DD = parseFlags.D;
parseFlags.dddd = parseFlags.ddd;
parseFlags.Do = parseFlags.dd = parseFlags.d;
parseFlags.mm = parseFlags.m;
parseFlags.hh = parseFlags.H = parseFlags.HH = parseFlags.h;
parseFlags.MM = parseFlags.M;
parseFlags.ss = parseFlags.s;
parseFlags.A = parseFlags.a;

fecha.masks = {
    'default': 'ddd MMM dd yyyy HH:mm:ss',
    shortDate: 'M/D/yy',
    mediumDate: 'MMM d, yyyy',
    longDate: 'MMMM d, yyyy',
    fullDate: 'dddd, MMMM d, yyyy',
    shortTime: 'HH:mm',
    mediumTime: 'HH:mm:ss',
    longTime: 'HH:mm:ss.SSS'
};

fecha.format = function (dateObj, mask, i18nSettings) {
    var i18n = i18nSettings || fecha.i18n;

    if (typeof dateObj === 'number') {
        dateObj = new Date(dateObj);
    }

    if (Object.prototype.toString.call(dateObj) !== '[object Date]' || isNaN(dateObj.getTime())) {
        throw new Error('Invalid Date in fecha.format');
    }

    mask = fecha.masks[mask] || mask || fecha.masks['default'];

    return mask.replace(token, function ($0) {
        return $0 in formatFlags ? formatFlags[$0](dateObj, i18n) : $0.slice(1, $0.length - 1);
    });
};

fecha.parse = function (dateStr, format, i18nSettings) {
    var i18n = i18nSettings || fecha.i18n;

    if (typeof format !== 'string') {
        throw new Error('Invalid format in fecha.parse');
    }

    format = fecha.masks[format] || format;

    if (dateStr.length > 1000) {
        return false;
    }

    var isValid = true;
    var dateInfo = {};
    format.replace(token, function ($0) {
        if (parseFlags[$0]) {
            var info = parseFlags[$0];
            var index = dateStr.search(info[0]);
            if (!~index) {
                isValid = false;
            } else {
                dateStr.replace(info[0], function (result) {
                    info[1](dateInfo, result, i18n);
                    dateStr = dateStr.substr(index + result.length);
                    return result;
                });
            }
        }

        return parseFlags[$0] ? '' : $0.slice(1, $0.length - 1);
    });

    if (!isValid) {
        return false;
    }

    var today = new Date();
    if (dateInfo.isPm === true && dateInfo.hour != null && +dateInfo.hour !== 12) {
        dateInfo.hour = +dateInfo.hour + 12;
    } else if (dateInfo.isPm === false && +dateInfo.hour === 12) {
        dateInfo.hour = 0;
    }

    var date;
    if (dateInfo.timezoneOffset != null) {
        dateInfo.minute = +(dateInfo.minute || 0) - +dateInfo.timezoneOffset;
        date = new Date(Date.UTC(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1, dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0));
    } else {
        date = new Date(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1, dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0);
    }
    return date;
};

exports.default = fecha;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _getOwnPropertyDescriptor = __webpack_require__(107);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _keys = __webpack_require__(12);

var _keys2 = _interopRequireDefault(_keys);

var _assign = __webpack_require__(57);

var _assign2 = _interopRequireDefault(_assign);

var _typeof2 = __webpack_require__(28);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version {{version}}
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

;(function (root, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if ((typeof module === 'undefined' ? 'undefined' : (0, _typeof3.default)(module)) === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.Popper = factory();
    }
})(undefined, function () {

    'use strict';

    var root = window;

    var DEFAULTS = {
        placement: 'bottom',

        gpuAcceleration: true,

        offset: 0,

        boundariesElement: 'viewport',

        boundariesPadding: 5,

        preventOverflowOrder: ['left', 'right', 'top', 'bottom'],

        flipBehavior: 'flip',

        arrowElement: '[x-arrow]',

        modifiers: ['shift', 'offset', 'preventOverflow', 'keepTogether', 'arrow', 'flip', 'applyStyle'],

        modifiersIgnored: [],

        forceAbsolute: false
    };

    function Popper(reference, popper, options) {
        this._reference = reference.jquery ? reference[0] : reference;
        this.state = {};

        var isNotDefined = typeof popper === 'undefined' || popper === null;
        var isConfig = popper && Object.prototype.toString.call(popper) === '[object Object]';
        if (isNotDefined || isConfig) {
            this._popper = this.parse(isConfig ? popper : {});
        } else {
                this._popper = popper.jquery ? popper[0] : popper;
            }

        this._options = (0, _assign2.default)({}, DEFAULTS, options);

        this._options.modifiers = this._options.modifiers.map(function (modifier) {
            if (this._options.modifiersIgnored.indexOf(modifier) !== -1) return;

            if (modifier === 'applyStyle') {
                this._popper.setAttribute('x-placement', this._options.placement);
            }

            return this.modifiers[modifier] || modifier;
        }.bind(this));

        this.state.position = this._getPosition(this._popper, this._reference);
        setStyle(this._popper, { position: this.state.position });

        this.update();

        this._setupEventListeners();
        return this;
    }

    Popper.prototype.destroy = function () {
        this._popper.removeAttribute('x-placement');
        this._popper.style.left = '';
        this._popper.style.position = '';
        this._popper.style.top = '';
        this._popper.style[getSupportedPropertyName('transform')] = '';
        this._removeEventListeners();

        if (this._options.removeOnDestroy) {
            this._popper.remove();
        }
        return this;
    };

    Popper.prototype.update = function () {
        var data = { instance: this, styles: {} };

        data.placement = this._options.placement;
        data._originalPlacement = this._options.placement;

        data.offsets = this._getOffsets(this._popper, this._reference, data.placement);

        data.boundaries = this._getBoundaries(data, this._options.boundariesPadding, this._options.boundariesElement);

        data = this.runModifiers(data, this._options.modifiers);

        if (typeof this.state.updateCallback === 'function') {
            this.state.updateCallback(data);
        }
    };

    Popper.prototype.onCreate = function (callback) {
        callback(this);
        return this;
    };

    Popper.prototype.onUpdate = function (callback) {
        this.state.updateCallback = callback;
        return this;
    };

    Popper.prototype.parse = function (config) {
        var defaultConfig = {
            tagName: 'div',
            classNames: ['popper'],
            attributes: [],
            parent: root.document.body,
            content: '',
            contentType: 'text',
            arrowTagName: 'div',
            arrowClassNames: ['popper__arrow'],
            arrowAttributes: ['x-arrow']
        };
        config = (0, _assign2.default)({}, defaultConfig, config);

        var d = root.document;

        var popper = d.createElement(config.tagName);
        addClassNames(popper, config.classNames);
        addAttributes(popper, config.attributes);
        if (config.contentType === 'node') {
            popper.appendChild(config.content.jquery ? config.content[0] : config.content);
        } else if (config.contentType === 'html') {
            popper.innerHTML = config.content;
        } else {
            popper.textContent = config.content;
        }

        if (config.arrowTagName) {
            var arrow = d.createElement(config.arrowTagName);
            addClassNames(arrow, config.arrowClassNames);
            addAttributes(arrow, config.arrowAttributes);
            popper.appendChild(arrow);
        }

        var parent = config.parent.jquery ? config.parent[0] : config.parent;

        if (typeof parent === 'string') {
            parent = d.querySelectorAll(config.parent);
            if (parent.length > 1) {
                console.warn('WARNING: the given `parent` query(' + config.parent + ') matched more than one element, the first one will be used');
            }
            if (parent.length === 0) {
                throw 'ERROR: the given `parent` doesn\'t exists!';
            }
            parent = parent[0];
        }

        if (parent.length > 1 && parent instanceof Element === false) {
            console.warn('WARNING: you have passed as parent a list of elements, the first one will be used');
            parent = parent[0];
        }

        parent.appendChild(popper);

        return popper;

        function addClassNames(element, classNames) {
            classNames.forEach(function (className) {
                element.classList.add(className);
            });
        }

        function addAttributes(element, attributes) {
            attributes.forEach(function (attribute) {
                element.setAttribute(attribute.split(':')[0], attribute.split(':')[1] || '');
            });
        }
    };

    Popper.prototype._getPosition = function (popper, reference) {
        var container = getOffsetParent(reference);

        if (this._options.forceAbsolute) {
            return 'absolute';
        }

        var isParentFixed = isFixed(reference, container);
        return isParentFixed ? 'fixed' : 'absolute';
    };

    Popper.prototype._getOffsets = function (popper, reference, placement) {
        placement = placement.split('-')[0];
        var popperOffsets = {};

        popperOffsets.position = this.state.position;
        var isParentFixed = popperOffsets.position === 'fixed';

        var referenceOffsets = getOffsetRectRelativeToCustomParent(reference, getOffsetParent(popper), isParentFixed);

        var popperRect = getOuterSizes(popper);

        if (['right', 'left'].indexOf(placement) !== -1) {
            popperOffsets.top = referenceOffsets.top + referenceOffsets.height / 2 - popperRect.height / 2;
            if (placement === 'left') {
                popperOffsets.left = referenceOffsets.left - popperRect.width;
            } else {
                popperOffsets.left = referenceOffsets.right;
            }
        } else {
            popperOffsets.left = referenceOffsets.left + referenceOffsets.width / 2 - popperRect.width / 2;
            if (placement === 'top') {
                popperOffsets.top = referenceOffsets.top - popperRect.height;
            } else {
                popperOffsets.top = referenceOffsets.bottom;
            }
        }

        popperOffsets.width = popperRect.width;
        popperOffsets.height = popperRect.height;

        return {
            popper: popperOffsets,
            reference: referenceOffsets
        };
    };

    Popper.prototype._setupEventListeners = function () {
        this.state.updateBound = this.update.bind(this);
        root.addEventListener('resize', this.state.updateBound);

        if (this._options.boundariesElement !== 'window') {
            var target = getScrollParent(this._reference);

            if (target === root.document.body || target === root.document.documentElement) {
                target = root;
            }
            target.addEventListener('scroll', this.state.updateBound);
        }
    };

    Popper.prototype._removeEventListeners = function () {
        root.removeEventListener('resize', this.state.updateBound);
        if (this._options.boundariesElement !== 'window') {
            var target = getScrollParent(this._reference);

            if (target === root.document.body || target === root.document.documentElement) {
                target = root;
            }
            target.removeEventListener('scroll', this.state.updateBound);
        }
        this.state.updateBound = null;
    };

    Popper.prototype._getBoundaries = function (data, padding, boundariesElement) {
        var boundaries = {};
        var width, height;
        if (boundariesElement === 'window') {
            var body = root.document.body,
                html = root.document.documentElement;

            height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
            width = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);

            boundaries = {
                top: 0,
                right: width,
                bottom: height,
                left: 0
            };
        } else if (boundariesElement === 'viewport') {
            var offsetParent = getOffsetParent(this._popper);
            var scrollParent = getScrollParent(this._popper);
            var offsetParentRect = getOffsetRect(offsetParent);

            var scrollTop = data.offsets.popper.position === 'fixed' ? 0 : scrollParent.scrollTop;
            var scrollLeft = data.offsets.popper.position === 'fixed' ? 0 : scrollParent.scrollLeft;

            boundaries = {
                top: 0 - (offsetParentRect.top - scrollTop),
                right: root.document.documentElement.clientWidth - (offsetParentRect.left - scrollLeft),
                bottom: root.document.documentElement.clientHeight - (offsetParentRect.top - scrollTop),
                left: 0 - (offsetParentRect.left - scrollLeft)
            };
        } else {
            if (getOffsetParent(this._popper) === boundariesElement) {
                boundaries = {
                    top: 0,
                    left: 0,
                    right: boundariesElement.clientWidth,
                    bottom: boundariesElement.clientHeight
                };
            } else {
                boundaries = getOffsetRect(boundariesElement);
            }
        }
        boundaries.left += padding;
        boundaries.right -= padding;
        boundaries.top = boundaries.top + padding;
        boundaries.bottom = boundaries.bottom - padding;
        return boundaries;
    };

    Popper.prototype.runModifiers = function (data, modifiers, ends) {
        var modifiersToRun = modifiers.slice();
        if (ends !== undefined) {
            modifiersToRun = this._options.modifiers.slice(0, getArrayKeyIndex(this._options.modifiers, ends));
        }

        modifiersToRun.forEach(function (modifier) {
            if (isFunction(modifier)) {
                data = modifier.call(this, data);
            }
        }.bind(this));

        return data;
    };

    Popper.prototype.isModifierRequired = function (requesting, requested) {
        var index = getArrayKeyIndex(this._options.modifiers, requesting);
        return !!this._options.modifiers.slice(0, index).filter(function (modifier) {
            return modifier === requested;
        }).length;
    };

    Popper.prototype.modifiers = {};

    Popper.prototype.modifiers.applyStyle = function (data) {
        var styles = {
            position: data.offsets.popper.position
        };

        var left = Math.round(data.offsets.popper.left);
        var top = Math.round(data.offsets.popper.top);

        var prefixedProperty;
        if (this._options.gpuAcceleration && (prefixedProperty = getSupportedPropertyName('transform'))) {
            styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
            styles.top = 0;
            styles.left = 0;
        } else {
                styles.left = left;
                styles.top = top;
            }

        (0, _assign2.default)(styles, data.styles);

        setStyle(this._popper, styles);

        this._popper.setAttribute('x-placement', data.placement);

        if (this.isModifierRequired(this.modifiers.applyStyle, this.modifiers.arrow) && data.offsets.arrow) {
            setStyle(data.arrowElement, data.offsets.arrow);
        }

        return data;
    };

    Popper.prototype.modifiers.shift = function (data) {
        var placement = data.placement;
        var basePlacement = placement.split('-')[0];
        var shiftVariation = placement.split('-')[1];

        if (shiftVariation) {
            var reference = data.offsets.reference;
            var popper = getPopperClientRect(data.offsets.popper);

            var shiftOffsets = {
                y: {
                    start: { top: reference.top },
                    end: { top: reference.top + reference.height - popper.height }
                },
                x: {
                    start: { left: reference.left },
                    end: { left: reference.left + reference.width - popper.width }
                }
            };

            var axis = ['bottom', 'top'].indexOf(basePlacement) !== -1 ? 'x' : 'y';

            data.offsets.popper = (0, _assign2.default)(popper, shiftOffsets[axis][shiftVariation]);
        }

        return data;
    };

    Popper.prototype.modifiers.preventOverflow = function (data) {
        var order = this._options.preventOverflowOrder;
        var popper = getPopperClientRect(data.offsets.popper);

        var check = {
            left: function left() {
                var left = popper.left;
                if (popper.left < data.boundaries.left) {
                    left = Math.max(popper.left, data.boundaries.left);
                }
                return { left: left };
            },
            right: function right() {
                var left = popper.left;
                if (popper.right > data.boundaries.right) {
                    left = Math.min(popper.left, data.boundaries.right - popper.width);
                }
                return { left: left };
            },
            top: function top() {
                var top = popper.top;
                if (popper.top < data.boundaries.top) {
                    top = Math.max(popper.top, data.boundaries.top);
                }
                return { top: top };
            },
            bottom: function bottom() {
                var top = popper.top;
                if (popper.bottom > data.boundaries.bottom) {
                    top = Math.min(popper.top, data.boundaries.bottom - popper.height);
                }
                return { top: top };
            }
        };

        order.forEach(function (direction) {
            data.offsets.popper = (0, _assign2.default)(popper, check[direction]());
        });

        return data;
    };

    Popper.prototype.modifiers.keepTogether = function (data) {
        var popper = getPopperClientRect(data.offsets.popper);
        var reference = data.offsets.reference;
        var f = Math.floor;

        if (popper.right < f(reference.left)) {
            data.offsets.popper.left = f(reference.left) - popper.width;
        }
        if (popper.left > f(reference.right)) {
            data.offsets.popper.left = f(reference.right);
        }
        if (popper.bottom < f(reference.top)) {
            data.offsets.popper.top = f(reference.top) - popper.height;
        }
        if (popper.top > f(reference.bottom)) {
            data.offsets.popper.top = f(reference.bottom);
        }

        return data;
    };

    Popper.prototype.modifiers.flip = function (data) {
        if (!this.isModifierRequired(this.modifiers.flip, this.modifiers.preventOverflow)) {
            console.warn('WARNING: preventOverflow modifier is required by flip modifier in order to work, be sure to include it before flip!');
            return data;
        }

        if (data.flipped && data.placement === data._originalPlacement) {
            return data;
        }

        var placement = data.placement.split('-')[0];
        var placementOpposite = getOppositePlacement(placement);
        var variation = data.placement.split('-')[1] || '';

        var flipOrder = [];
        if (this._options.flipBehavior === 'flip') {
            flipOrder = [placement, placementOpposite];
        } else {
            flipOrder = this._options.flipBehavior;
        }

        flipOrder.forEach(function (step, index) {
            if (placement !== step || flipOrder.length === index + 1) {
                return;
            }

            placement = data.placement.split('-')[0];
            placementOpposite = getOppositePlacement(placement);

            var popperOffsets = getPopperClientRect(data.offsets.popper);

            var a = ['right', 'bottom'].indexOf(placement) !== -1;

            if (a && Math.floor(data.offsets.reference[placement]) > Math.floor(popperOffsets[placementOpposite]) || !a && Math.floor(data.offsets.reference[placement]) < Math.floor(popperOffsets[placementOpposite])) {
                data.flipped = true;
                data.placement = flipOrder[index + 1];
                if (variation) {
                    data.placement += '-' + variation;
                }
                data.offsets.popper = this._getOffsets(this._popper, this._reference, data.placement).popper;

                data = this.runModifiers(data, this._options.modifiers, this._flip);
            }
        }.bind(this));
        return data;
    };

    Popper.prototype.modifiers.offset = function (data) {
        var offset = this._options.offset;
        var popper = data.offsets.popper;

        if (data.placement.indexOf('left') !== -1) {
            popper.top -= offset;
        } else if (data.placement.indexOf('right') !== -1) {
            popper.top += offset;
        } else if (data.placement.indexOf('top') !== -1) {
            popper.left -= offset;
        } else if (data.placement.indexOf('bottom') !== -1) {
            popper.left += offset;
        }
        return data;
    };

    Popper.prototype.modifiers.arrow = function (data) {
        var arrow = this._options.arrowElement;

        if (typeof arrow === 'string') {
            arrow = this._popper.querySelector(arrow);
        }

        if (!arrow) {
            return data;
        }

        if (!this._popper.contains(arrow)) {
            console.warn('WARNING: `arrowElement` must be child of its popper element!');
            return data;
        }

        if (!this.isModifierRequired(this.modifiers.arrow, this.modifiers.keepTogether)) {
            console.warn('WARNING: keepTogether modifier is required by arrow modifier in order to work, be sure to include it before arrow!');
            return data;
        }

        var arrowStyle = {};
        var placement = data.placement.split('-')[0];
        var popper = getPopperClientRect(data.offsets.popper);
        var reference = data.offsets.reference;
        var isVertical = ['left', 'right'].indexOf(placement) !== -1;

        var len = isVertical ? 'height' : 'width';
        var side = isVertical ? 'top' : 'left';
        var altSide = isVertical ? 'left' : 'top';
        var opSide = isVertical ? 'bottom' : 'right';
        var arrowSize = getOuterSizes(arrow)[len];

        if (reference[opSide] - arrowSize < popper[side]) {
            data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowSize);
        }

        if (reference[side] + arrowSize > popper[opSide]) {
            data.offsets.popper[side] += reference[side] + arrowSize - popper[opSide];
        }

        var center = reference[side] + reference[len] / 2 - arrowSize / 2;

        var sideValue = center - popper[side];

        sideValue = Math.max(Math.min(popper[len] - arrowSize, sideValue), 0);
        arrowStyle[side] = sideValue;
        arrowStyle[altSide] = '';

        data.offsets.arrow = arrowStyle;
        data.arrowElement = arrow;

        return data;
    };

    function getOuterSizes(element) {
        var _display = element.style.display,
            _visibility = element.style.visibility;
        element.style.display = 'block';element.style.visibility = 'hidden';
        var calcWidthToForceRepaint = element.offsetWidth;

        var styles = root.getComputedStyle(element);
        var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
        var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
        var result = { width: element.offsetWidth + y, height: element.offsetHeight + x };

        element.style.display = _display;element.style.visibility = _visibility;
        return result;
    }

    function getOppositePlacement(placement) {
        var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
        return placement.replace(/left|right|bottom|top/g, function (matched) {
            return hash[matched];
        });
    }

    function getPopperClientRect(popperOffsets) {
        var offsets = (0, _assign2.default)({}, popperOffsets);
        offsets.right = offsets.left + offsets.width;
        offsets.bottom = offsets.top + offsets.height;
        return offsets;
    }

    function getArrayKeyIndex(arr, keyToFind) {
        var i = 0,
            key;
        for (key in arr) {
            if (arr[key] === keyToFind) {
                return i;
            }
            i++;
        }
        return null;
    }

    function getStyleComputedProperty(element, property) {
        var css = root.getComputedStyle(element, null);
        return css[property];
    }

    function getOffsetParent(element) {
        var offsetParent = element.offsetParent;
        return offsetParent === root.document.body || !offsetParent ? root.document.documentElement : offsetParent;
    }

    function getScrollParent(element) {
        var parent = element.parentNode;

        if (!parent) {
            return element;
        }

        if (parent === root.document) {
            if (root.document.body.scrollTop) {
                return root.document.body;
            } else {
                return root.document.documentElement;
            }
        }

        if (['scroll', 'auto'].indexOf(getStyleComputedProperty(parent, 'overflow')) !== -1 || ['scroll', 'auto'].indexOf(getStyleComputedProperty(parent, 'overflow-x')) !== -1 || ['scroll', 'auto'].indexOf(getStyleComputedProperty(parent, 'overflow-y')) !== -1) {
            return parent;
        }
        return getScrollParent(element.parentNode);
    }

    function isFixed(element) {
        if (element === root.document.body) {
            return false;
        }
        if (getStyleComputedProperty(element, 'position') === 'fixed') {
            return true;
        }
        return element.parentNode ? isFixed(element.parentNode) : element;
    }

    function setStyle(element, styles) {
        function is_numeric(n) {
            return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
        }
        (0, _keys2.default)(styles).forEach(function (prop) {
            var unit = '';

            if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && is_numeric(styles[prop])) {
                unit = 'px';
            }
            element.style[prop] = styles[prop] + unit;
        });
    }

    function isFunction(functionToCheck) {
        var getType = {};
        return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
    }

    function getOffsetRect(element) {
        var elementRect = {
            width: element.offsetWidth,
            height: element.offsetHeight,
            left: element.offsetLeft,
            top: element.offsetTop
        };

        elementRect.right = elementRect.left + elementRect.width;
        elementRect.bottom = elementRect.top + elementRect.height;

        return elementRect;
    }

    function getBoundingClientRect(element) {
        var rect = element.getBoundingClientRect();

        var isIE = navigator.userAgent.indexOf("MSIE") != -1;

        var rectTop = isIE && element.tagName === 'HTML' ? -element.scrollTop : rect.top;

        return {
            left: rect.left,
            top: rectTop,
            right: rect.right,
            bottom: rect.bottom,
            width: rect.right - rect.left,
            height: rect.bottom - rectTop
        };
    }

    function getOffsetRectRelativeToCustomParent(element, parent, fixed) {
        var elementRect = getBoundingClientRect(element);
        var parentRect = getBoundingClientRect(parent);

        if (fixed) {
            var scrollParent = getScrollParent(parent);
            parentRect.top += scrollParent.scrollTop;
            parentRect.bottom += scrollParent.scrollTop;
            parentRect.left += scrollParent.scrollLeft;
            parentRect.right += scrollParent.scrollLeft;
        }

        var rect = {
            top: elementRect.top - parentRect.top,
            left: elementRect.left - parentRect.left,
            bottom: elementRect.top - parentRect.top + elementRect.height,
            right: elementRect.left - parentRect.left + elementRect.width,
            width: elementRect.width,
            height: elementRect.height
        };
        return rect;
    }

    function getSupportedPropertyName(property) {
        var prefixes = ['', 'ms', 'webkit', 'moz', 'o'];

        for (var i = 0; i < prefixes.length; i++) {
            var toCheck = prefixes[i] ? prefixes[i] + property.charAt(0).toUpperCase() + property.slice(1) : property;
            if (typeof root.document.body.style[toCheck] !== 'undefined') {
                return toCheck;
            }
        }
        return null;
    }

    if (!_assign2.default) {
        Object.defineProperty(Object, 'assign', {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function value(target) {
                if (target === undefined || target === null) {
                    throw new TypeError('Cannot convert first argument to object');
                }

                var to = Object(target);
                for (var i = 1; i < arguments.length; i++) {
                    var nextSource = arguments[i];
                    if (nextSource === undefined || nextSource === null) {
                        continue;
                    }
                    nextSource = Object(nextSource);

                    var keysArray = (0, _keys2.default)(nextSource);
                    for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
                        var nextKey = keysArray[nextIndex];
                        var desc = (0, _getOwnPropertyDescriptor2.default)(nextSource, nextKey);
                        if (desc !== undefined && desc.enumerable) {
                            to[nextKey] = nextSource[nextKey];
                        }
                    }
                }
                return to;
            }
        });
    }

    return Popper;
});

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(108), __esModule: true };

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(109);
var $Object = __webpack_require__(4).Object;
module.exports = function getOwnPropertyDescriptor(it, key){
  return $Object.getOwnPropertyDescriptor(it, key);
};

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject                 = __webpack_require__(8)
  , $getOwnPropertyDescriptor = __webpack_require__(56).f;

__webpack_require__(54)('getOwnPropertyDescriptor', function(){
  return function getOwnPropertyDescriptor(it, key){
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(111);
module.exports = __webpack_require__(4).Object.assign;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(10);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(112)});

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(17)
  , gOPS     = __webpack_require__(39)
  , pIE      = __webpack_require__(27)
  , toObject = __webpack_require__(25)
  , IObject  = __webpack_require__(52)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(16)(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(114), __esModule: true };

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(58);
__webpack_require__(120);
module.exports = __webpack_require__(42).f('iterator');

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(34)
  , defined   = __webpack_require__(32);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(61)
  , descriptor     = __webpack_require__(22)
  , setToStringTag = __webpack_require__(41)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(15)(IteratorPrototype, __webpack_require__(5)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(7)
  , anObject = __webpack_require__(20)
  , getKeys  = __webpack_require__(17);

module.exports = __webpack_require__(11) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6).document && document.documentElement;

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(13)
  , toObject    = __webpack_require__(25)
  , IE_PROTO    = __webpack_require__(35)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(121);
var global        = __webpack_require__(6)
  , hide          = __webpack_require__(15)
  , Iterators     = __webpack_require__(24)
  , TO_STRING_TAG = __webpack_require__(5)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(122)
  , step             = __webpack_require__(123)
  , Iterators        = __webpack_require__(24)
  , toIObject        = __webpack_require__(8);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(59)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 122 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(125), __esModule: true };

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(126);
__webpack_require__(132);
__webpack_require__(133);
__webpack_require__(134);
module.exports = __webpack_require__(4).Symbol;

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(6)
  , has            = __webpack_require__(13)
  , DESCRIPTORS    = __webpack_require__(11)
  , $export        = __webpack_require__(10)
  , redefine       = __webpack_require__(60)
  , META           = __webpack_require__(127).KEY
  , $fails         = __webpack_require__(16)
  , shared         = __webpack_require__(36)
  , setToStringTag = __webpack_require__(41)
  , uid            = __webpack_require__(26)
  , wks            = __webpack_require__(5)
  , wksExt         = __webpack_require__(42)
  , wksDefine      = __webpack_require__(43)
  , keyOf          = __webpack_require__(128)
  , enumKeys       = __webpack_require__(129)
  , isArray        = __webpack_require__(130)
  , anObject       = __webpack_require__(20)
  , toIObject      = __webpack_require__(8)
  , toPrimitive    = __webpack_require__(31)
  , createDesc     = __webpack_require__(22)
  , _create        = __webpack_require__(61)
  , gOPNExt        = __webpack_require__(131)
  , $GOPD          = __webpack_require__(56)
  , $DP            = __webpack_require__(7)
  , $keys          = __webpack_require__(17)
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  __webpack_require__(62).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(27).f  = $propertyIsEnumerable;
  __webpack_require__(39).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(40)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(15)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(26)('meta')
  , isObject = __webpack_require__(21)
  , has      = __webpack_require__(13)
  , setDesc  = __webpack_require__(7).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(16)(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(17)
  , toIObject = __webpack_require__(8);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(17)
  , gOPS    = __webpack_require__(39)
  , pIE     = __webpack_require__(27);
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(33);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(8)
  , gOPN      = __webpack_require__(62).f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 132 */
/***/ (function(module, exports) {



/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(43)('asyncIterator');

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(43)('observable');

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(136),
  /* template */
  __webpack_require__(137),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _emitter = __webpack_require__(2);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'xInput',
    componentName: 'xInput',
    mixins: [_emitter2.default],
    props: {
        value: [String, Number],
        placeholder: String,
        size: String,
        readonly: Boolean,
        autofocus: Boolean,
        icon: String,
        disabled: Boolean,
        name: String,
        form: String,
        maxlength: Number,
        minlength: Number,
        iconClick: Function,
        type: {
            default: 'text',
            type: String,
            validator: function validator(val) {
                return ['text', 'password'].indexOf(val) >= 0;
            }
        }
    },
    data: function data() {
        return {
            currentValue: this.value
        };
    },

    computed: {
        cls: function cls() {
            var cls = ['x-input'];
            this.size && cls.push('x-input-' + this.size);
            this.disabled && cls.push('x-input-disabled');
            return cls.join(' ');
        },
        validating: function validating() {
            return this.$parent.validating;
        }
    },
    methods: {
        handleBlur: function handleBlur(e) {
            this.$emit('blur', e);
            this.dispatch('XFormItem', 'x.form.blur', [this.currentValue]);
        },
        handleChange: function handleChange(e) {
            this.$emit('change', e);
        },
        handleEnter: function handleEnter(e) {
            this.$emit('enter', e);
        },
        handleIconClick: function handleIconClick(e) {
            if (!this.disabled) {
                if (this.iconClick) {
                    this.iconClick(e);
                }
                this.$emit('click', e);
            }
        },
        handleFocus: function handleFocus(e) {
            this.$emit('focus', e);
        },
        handleInput: function handleInput(e) {
            this.currentValue = e.target.value;
        }
    },
    watch: {
        value: function value(val, oldVal) {
            this.currentValue = val;
        },
        currentValue: function currentValue(val, oldVal) {
            this.$emit('input', val);
            this.$emit('change', val);
            this.dispatch('XFormItem', 'x.form.change', [val]);
        }
    }
};

/***/ }),
/* 137 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: [
      'x-input-wrap',
      _vm.size ? 'x-input-wrap-' + _vm.size : '',
      {
        'is-disabled': _vm.disabled,
        'x-input-group': _vm.$slots.prepend || _vm.$slots.append
      }
    ]
  }, [(_vm.$slots.prepend) ? _c('div', {
    staticClass: "x-input-group-prepend"
  }, [_vm._t("prepend")], 2) : _vm._e(), _vm._v(" "), _vm._t("icon", [(_vm.icon) ? _c('i', {
    staticClass: "x-icon x-input-icon",
    class: [_vm.icon ? 'x-icon-' + _vm.icon : ''],
    on: {
      "click": _vm.handleIconClick
    }
  }) : _vm._e()]), _vm._v(" "), _c('input', {
    ref: "input",
    class: _vm.cls,
    attrs: {
      "type": _vm.type,
      "name": _vm.name,
      "placeholder": _vm.placeholder,
      "disabled": _vm.disabled,
      "readonly": _vm.readonly,
      "maxlength": _vm.maxlength,
      "minlength": _vm.minlength,
      "autofocus": _vm.autofocus,
      "form": _vm.form
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "input": _vm.handleInput,
      "focus": _vm.handleFocus,
      "blur": _vm.handleBlur,
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        _vm.handleEnter($event)
      },
      "change": _vm.handleChange
    }
  }), _vm._v(" "), (_vm.$slots.append) ? _c('div', {
    staticClass: "x-input-group-append"
  }, [_vm._t("append")], 2) : _vm._e()], 2)
},staticRenderFns: []}

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(139),
  /* template */
  __webpack_require__(147),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(14);

var _time = __webpack_require__(44);

var _time2 = _interopRequireDefault(_time);

var _dateTable = __webpack_require__(64);

var _dateTable2 = _interopRequireDefault(_dateTable);

var _input = __webpack_require__(9);

var _input2 = _interopRequireDefault(_input);

var _config = __webpack_require__(18);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    mixins: [_config2.default],
    computed: {
        btnDisabled: function btnDisabled() {
            return !(this.minDate && this.maxDate && !this.selecting);
        },
        leftLabel: function leftLabel() {
            return this.date.getFullYear() + ' ' + this.t('x.datepicker.year') + ' ' + this.t('x.datepicker.month' + (this.date.getMonth() + 1));
        },
        rightLabel: function rightLabel() {
            return this.rightDate.getFullYear() + ' ' + this.t('x.datepicker.year') + ' ' + this.t('x.datepicker.month' + (this.rightDate.getMonth() + 1));
        },
        leftYear: function leftYear() {
            return this.date.getFullYear();
        },
        leftMonth: function leftMonth() {
            return this.date.getMonth();
        },
        rightYear: function rightYear() {
            return this.rightDate.getFullYear();
        },
        rightMonth: function rightMonth() {
            return this.rightDate.getMonth();
        },
        minVisibleDate: function minVisibleDate() {
            return this.minDate ? (0, _util.formatDate)(this.minDate) : '';
        },
        maxVisibleDate: function maxVisibleDate() {
            return this.maxDate || this.minDate ? (0, _util.formatDate)(this.maxDate || this.minDate) : '';
        },
        minVisibleTime: function minVisibleTime() {
            return this.minDate ? (0, _util.formatDate)(this.minDate, 'HH:mm:ss') : '';
        },
        maxVisibleTime: function maxVisibleTime() {
            return this.maxDate || this.minDate ? (0, _util.formatDate)(this.maxDate || this.minDate, 'HH:mm:ss') : '';
        },
        rightDate: function rightDate() {
            var newDate = new Date(this.date);
            var month = newDate.getMonth();
            newDate.setDate(1);

            if (month === 11) {
                newDate.setFullYear(newDate.getFullYear() + 1);
                newDate.setMonth(0);
            } else {
                newDate.setMonth(month + 1);
            }
            return newDate;
        }
    },

    data: function data() {
        return {
            popperClass: '',
            minPickerWidth: 0,
            maxPickerWidth: 0,
            date: new Date(),
            minDate: '',
            maxDate: '',
            rangeState: {
                endDate: null,
                selecting: false,
                row: null,
                column: null
            },
            showTime: false,
            shortcuts: '',
            value: '',
            visible: '',
            disabledDate: '',
            firstDayOfWeek: 7,
            minTimePickerVisible: false,
            maxTimePickerVisible: false,
            width: 0
        };
    },


    watch: {
        showTime: function showTime(val) {
            var _this = this;

            if (!val) {
                return;
            }
            this.$nextTick(function (_) {
                var minInputElm = _this.$refs.minInput.$el;
                var maxInputElm = _this.$refs.maxInput.$el;
                if (minInputElm) {
                    _this.minPickerWidth = minInputElm.getBoundingClientRect().width + 10;
                }
                if (maxInputElm) {
                    _this.maxPickerWidth = maxInputElm.getBoundingClientRect().width + 10;
                }
            });
        },
        minDate: function minDate() {
            var _this2 = this;

            this.$nextTick(function () {
                if (_this2.maxDate && _this2.maxDate < _this2.minDate) {
                    var format = 'HH:mm:ss';

                    _this2.$refs.maxTimePicker.selectableRange = [[(0, _util.parseDate)((0, _util.formatDate)(_this2.minDate, format), format), (0, _util.parseDate)('23:59:59', format)]];
                }
            });
        },
        minTimePickerVisible: function minTimePickerVisible(val) {
            var _this3 = this;

            if (val) {
                this.$nextTick(function () {
                    return _this3.$refs.minTimePicker.ajustScrollTop();
                });
            }
        },
        maxTimePickerVisible: function maxTimePickerVisible(val) {
            var _this4 = this;

            if (val) {
                this.$nextTick(function () {
                    return _this4.$refs.maxTimePicker.ajustScrollTop();
                });
            }
        },
        value: function value(newVal) {
            if (!newVal) {
                this.minDate = null;
                this.maxDate = null;
            } else if (Array.isArray(newVal)) {
                this.minDate = newVal[0] ? (0, _util.toDate)(newVal[0]) : null;
                this.maxDate = newVal[1] ? (0, _util.toDate)(newVal[1]) : null;
                if (this.minDate) {
                    this.date = new Date(this.minDate);
                }
                this.handleConfirm(true);
            }
        }
    },

    methods: {
        handleClear: function handleClear() {
            this.minDate = null;
            this.maxDate = null;
            this.handleConfirm(false);
        },
        handleDateInput: function handleDateInput(event, type) {
            var value = event.target.value;
            var parsedValue = (0, _util.parseDate)(value, 'yyyy-MM-dd');

            if (parsedValue) {
                if (typeof this.disabledDate === 'function' && this.disabledDate(new Date(parsedValue))) {
                    return;
                }
                var target = new Date(type === 'min' ? this.minDate : this.maxDate);
                if (target) {
                    target.setFullYear(parsedValue.getFullYear());
                    target.setMonth(parsedValue.getMonth(), parsedValue.getDate());
                }
            }
        },
        handleChangeRange: function handleChangeRange(val) {
            this.minDate = val.minDate;
            this.maxDate = val.maxDate;
            this.rangeState = val.rangeState;
        },
        handleDateChange: function handleDateChange(event, type) {
            var value = event.target.value;
            var parsedValue = (0, _util.parseDate)(value, 'yyyy-MM-dd');
            if (parsedValue) {
                var target = new Date(type === 'min' ? this.minDate : this.maxDate);
                if (target) {
                    target.setFullYear(parsedValue.getFullYear());
                    target.setMonth(parsedValue.getMonth(), parsedValue.getDate());
                }
                if (type === 'min') {
                    if (target < this.maxDate) {
                        this.minDate = new Date(target.getTime());
                    }
                } else {
                    if (target > this.minDate) {
                        this.maxDate = new Date(target.getTime());
                        if (this.minDate && this.minDate > this.maxDate) {
                            this.minDate = null;
                        }
                    }
                }
            }
        },
        handleTimeChange: function handleTimeChange(event, type) {
            var value = event.target.value;
            var parsedValue = (0, _util.parseDate)(value, 'HH:mm:ss');
            if (parsedValue) {
                var target = new Date(type === 'min' ? this.minDate : this.maxDate);
                if (target) {
                    target.setHours(parsedValue.getHours());
                    target.setMinutes(parsedValue.getMinutes());
                    target.setSeconds(parsedValue.getSeconds());
                }
                if (type === 'min') {
                    if (target < this.maxDate) {
                        this.minDate = new Date(target.getTime());
                    }
                } else {
                    if (target > this.minDate) {
                        this.maxDate = new Date(target.getTime());
                    }
                }
                this.$refs[type + 'TimePicker'].value = target;
                this[type + 'TimePickerVisible'] = false;
            }
        },
        handleRangePick: function handleRangePick(val) {
            var close = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            if (this.maxDate === val.maxDate && this.minDate === val.minDate) {
                return;
            }
            this.maxDate = val.maxDate;
            this.minDate = val.minDate;

            if (!close || this.showTime) {
                return;
            }
            this.handleConfirm();
        },
        changeToToday: function changeToToday() {
            this.date = new Date();
        },
        handleShortcutClick: function handleShortcutClick(shortcut) {
            if (shortcut.onClick) {
                shortcut.onClick(this);
            }
        },
        resetView: function resetView() {
            this.minTimePickerVisible = false;
            this.maxTimePickerVisible = false;
        },
        setTime: function setTime(date, value) {
            var oldDate = new Date(date.getTime());
            var hour = value.getHours();
            var minute = value.getMinutes();
            var second = value.getSeconds();
            oldDate.setHours(hour);
            oldDate.setMinutes(minute);
            oldDate.setSeconds(second);
            return new Date(oldDate.getTime());
        },
        handleMinTimePick: function handleMinTimePick(value, visible, first) {
            this.minDate = this.minDate || new Date();
            if (value) {
                this.minDate = this.setTime(this.minDate, value);
            }

            if (!first) {
                this.minTimePickerVisible = visible;
            }
        },
        handleMaxTimePick: function handleMaxTimePick(value, visible, first) {
            if (!this.maxDate) {
                var now = new Date();
                if (now >= this.minDate) {
                    this.maxDate = new Date();
                }
            }

            if (this.maxDate && value) {
                this.maxDate = this.setTime(this.maxDate, value);
            }

            if (!first) {
                this.maxTimePickerVisible = visible;
            }
        },
        prevMonth: function prevMonth() {
            this.date = (0, _util.prevMonth)(this.date);
        },
        nextMonth: function nextMonth() {
            this.date = (0, _util.nextMonth)(this.date);
        },
        nextYear: function nextYear() {
            var date = this.date;
            date.setFullYear(date.getFullYear() + 1);
            this.resetDate();
        },
        prevYear: function prevYear() {
            var date = this.date;
            date.setFullYear(date.getFullYear() - 1);
            this.resetDate();
        },
        handleConfirm: function handleConfirm() {
            var visible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            this.$emit('pick', [this.minDate, this.maxDate], visible);
        },
        resetDate: function resetDate() {
            this.date = new Date(this.date);
        }
    },

    components: { TimePicker: _time2.default, DateTable: _dateTable2.default, XInput: _input2.default }
};

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(14);

var _config = __webpack_require__(18);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    mixins: [_config2.default],
    components: {
        TimeSpinner: __webpack_require__(63)
    },

    props: {
        pickerWidth: {},
        defaultValue: [Date, String],
        date: {
            default: function _default() {
                return new Date();
            }
        },
        visible: Boolean
    },

    watch: {
        visible: function visible(val) {
            this.currentVisible = val;
        },
        pickerWidth: function pickerWidth(val) {
            this.width = val;
        },
        value: function value(newVal) {
            var _this = this;

            var date = void 0;
            if (newVal instanceof Date) {
                date = (0, _index.limitRange)(newVal, this.selectableRange);
            } else if (!newVal) {
                date = new Date();
            }

            if (!date) {
                var time = new Date(newVal).getTime();
                date = isNaN(time) ? new Date() : new Date(newVal);
            }

            this.handleChange({
                hours: date.getHours(),
                minutes: date.getMinutes(),
                seconds: date.getSeconds()
            });
            this.$nextTick(function (_) {
                return _this.ajustScrollTop();
            });
        },
        selectableRange: function selectableRange(val) {
            this.$refs.spinner.selectableRange = val;
        }
    },

    data: function data() {
        return {
            popperClass: '',
            format: 'HH:mm:ss',
            value: '',
            hours: 0,
            minutes: 0,
            seconds: 0,
            selectableRange: [],
            currentDate: this.defaultValue || this.date || new Date(),
            currentVisible: this.visible || false,
            width: this.pickerWidth || 0
        };
    },


    computed: {
        showSeconds: function showSeconds() {
            return (this.format || '').indexOf('ss') !== -1;
        }
    },

    methods: {
        handleClear: function handleClear() {
            this.$emit('pick');
        },
        handleCancel: function handleCancel() {
            this.$emit('pick');
        },
        handleChange: function handleChange(date) {
            if (date.hours !== undefined) {
                this.currentDate.setHours(date.hours);
                this.hours = this.currentDate.getHours();
            }
            if (date.minutes !== undefined) {
                this.currentDate.setMinutes(date.minutes);
                this.minutes = this.currentDate.getMinutes();
            }
            if (date.seconds !== undefined) {
                this.currentDate.setSeconds(date.seconds);
                this.seconds = this.currentDate.getSeconds();
            }

            this.handleConfirm(true);
        },
        setSelectionRange: function setSelectionRange(start, end) {
            this.$emit('select-range', start, end);
        },
        handleConfirm: function handleConfirm() {
            var visible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var first = arguments[1];

            if (first) {
                return;
            }
            var date = new Date((0, _index.limitRange)(this.currentDate, this.selectableRange, 'HH:mm:ss'));
            this.$emit('pick', date, visible, first);
        },
        ajustScrollTop: function ajustScrollTop() {
            return this.$refs.spinner.ajustScrollTop();
        }
    },

    created: function created() {
        this.hours = this.currentDate.getHours();
        this.minutes = this.currentDate.getMinutes();
        this.seconds = this.currentDate.getSeconds();
    },
    mounted: function mounted() {
        var _this2 = this;

        this.$nextTick(function () {
            return _this2.handleConfirm(true, true);
        });
    }
};

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    x: {
        datepicker: {
            now: '此刻',
            today: '今天',
            cancel: '取消',
            clear: '清空',
            confirm: '确定',
            selectDate: '选择日期',
            selectTime: '选择时间',
            startDate: '开始日期',
            startTime: '开始时间',
            endDate: '结束日期',
            endTime: '结束时间',
            year: '年',
            month1: '1 月',
            month2: '2 月',
            month3: '3 月',
            month4: '4 月',
            month5: '5 月',
            month6: '6 月',
            month7: '7 月',
            month8: '8 月',
            month9: '9 月',
            month10: '10 月',
            month11: '11 月',
            month12: '12 月',

            weeks: {
                sun: '日',
                mon: '一',
                tue: '二',
                wed: '三',
                thu: '四',
                fri: '五',
                sat: '六'
            },
            months: {
                jan: '一月',
                feb: '二月',
                mar: '三月',
                apr: '四月',
                may: '五月',
                jun: '六月',
                jul: '七月',
                aug: '八月',
                sep: '九月',
                oct: '十月',
                nov: '十一月',
                dec: '十二月'
            }
        }
    }
};

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(14);

exports.default = {
    props: {
        hours: {
            type: Number,
            default: 0
        },

        minutes: {
            type: Number,
            default: 0
        },

        seconds: {
            type: Number,
            default: 0
        },

        showSeconds: {
            type: Boolean,
            default: true
        }
    },

    watch: {
        hoursPrivate: function hoursPrivate(newVal, oldVal) {
            if (!(newVal >= 0 && newVal <= 23)) {
                this.hoursPrivate = oldVal;
            }
            this.ajustElTop('hour', newVal);
            this.$emit('change', { hours: newVal });
        },
        minutesPrivate: function minutesPrivate(newVal, oldVal) {
            if (!(newVal >= 0 && newVal <= 59)) {
                this.minutesPrivate = oldVal;
            }
            this.ajustElTop('minute', newVal);
            this.$emit('change', { minutes: newVal });
        },
        secondsPrivate: function secondsPrivate(newVal, oldVal) {
            if (!(newVal >= 0 && newVal <= 59)) {
                this.secondsPrivate = oldVal;
            }
            this.ajustElTop('second', newVal);
            this.$emit('change', { seconds: newVal });
        }
    },

    computed: {
        hoursList: function hoursList() {
            return (0, _util.getRangeHours)(this.selectableRange);
        },
        hourEl: function hourEl() {
            return this.$refs.hour;
        },
        minuteEl: function minuteEl() {
            return this.$refs.minute;
        },
        secondEl: function secondEl() {
            return this.$refs.second;
        }
    },

    data: function data() {
        return {
            hoursPrivate: 0,
            minutesPrivate: 0,
            secondsPrivate: 0,
            selectableRange: []
        };
    },
    mounted: function mounted() {
        var _this = this;

        this.$nextTick(function () {
            _this.bindScrollEvent();
        });
    },


    methods: {
        handleClick: function handleClick(type, value, disabled) {
            if (value.disabled) {
                return;
            }

            this[type + 'Private'] = value.value >= 0 ? value.value : value;

            this.emitSelectRange(type);
        },
        emitSelectRange: function emitSelectRange(type) {
            if (type === 'hours') {
                this.$emit('select-range', 0, 2);
            } else if (type === 'minutes') {
                this.$emit('select-range', 3, 5);
            } else if (type === 'seconds') {
                this.$emit('select-range', 6, 8);
            }
        },
        bindScrollEvent: function bindScrollEvent() {
            var _this2 = this;

            var bindFuntion = function bindFuntion(type) {
                _this2[type + 'El'].onscroll = function (e) {
                    return _this2.handleScroll(type, e);
                };
            };
            bindFuntion('hour');
            bindFuntion('minute');
            bindFuntion('second');
        },
        handleScroll: function handleScroll(type) {
            var ajust = {};
            ajust[type + 's'] = Math.min(Math.floor((this[type + 'El'].scrollTop - 80) / 32 + 3), 59);
            this.$emit('change', ajust);
        },
        ajustScrollTop: function ajustScrollTop() {
            this.ajustElTop('hour', this.hours);
            this.ajustElTop('minute', this.minutes);
            this.ajustElTop('second', this.seconds);
        },
        ajustElTop: function ajustElTop(type, value) {
            this[type + 'El'].scrollTop = Math.max(0, (value - 2.5) * 32 + 80);
        }
    }
};

/***/ }),
/* 143 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "x-time-spinner",
    class: {
      'has-seconds': _vm.showSeconds
    }
  }, [_c('div', {
    ref: "hour",
    staticClass: "x-time-spinner-wrapper"
  }, [_c('ul', {
    staticClass: "x-time-spinner-list",
    staticStyle: {
      "max-height": "inherit"
    },
    nativeOn: {
      "mouseenter": function($event) {
        _vm.emitSelectRange('hours')
      }
    }
  }, _vm._l((_vm.hoursList), function(disabled, hour) {
    return _c('li', {
      staticClass: "x-time-spinner-item",
      class: {
        'active': hour === _vm.hours, 'disabled': disabled
      },
      attrs: {
        "track-by": "hour"
      },
      domProps: {
        "textContent": _vm._s(hour)
      },
      on: {
        "click": function($event) {
          _vm.handleClick('hours', {
            value: hour,
            disabled: disabled
          }, true)
        }
      }
    })
  }))]), _vm._v(" "), _c('div', {
    ref: "minute",
    staticClass: "x-time-spinner-wrapper"
  }, [_c('ul', {
    staticClass: "x-time-spinner-list",
    attrs: {
      "tyle": "max-height: inherit;"
    },
    nativeOn: {
      "mouseenter": function($event) {
        _vm.emitSelectRange('minutes')
      }
    }
  }, _vm._l((60), function(minute, key) {
    return _c('li', {
      staticClass: "x-time-spinner-item",
      class: {
        'active': key === _vm.minutes
      },
      domProps: {
        "textContent": _vm._s(key)
      },
      on: {
        "click": function($event) {
          _vm.handleClick('minutes', key, true)
        }
      }
    })
  }))]), _vm._v(" "), _c('div', {
    ref: "second",
    staticClass: "x-time-spinner-wrapper"
  }, [_c('ul', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showSeconds),
      expression: "showSeconds"
    }],
    staticClass: "x-time-spinner-list",
    staticStyle: {
      "max-height": "inherit"
    },
    attrs: {
      "noresize": ""
    },
    nativeOn: {
      "mouseenter": function($event) {
        _vm.emitSelectRange('seconds')
      }
    }
  }, _vm._l((60), function(second, key) {
    return _c('li', {
      staticClass: "x-time-spinner-item",
      class: {
        'active': key === _vm.seconds
      },
      domProps: {
        "textContent": _vm._s(key)
      },
      on: {
        "click": function($event) {
          _vm.handleClick('seconds', key, true)
        }
      }
    })
  }))])])
},staticRenderFns: []}

/***/ }),
/* 144 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "x-slide-up"
    },
    on: {
      "after-leave": function($event) {
        _vm.$emit('dodestroy')
      }
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.currentVisible),
      expression: "currentVisible"
    }],
    staticClass: "x-time-panel",
    class: _vm.popperClass,
    style: ({
      width: _vm.width + 'px'
    })
  }, [_c('div', {
    staticClass: "x-time-panel-content",
    class: {
      'has-seconds': _vm.showSeconds
    }
  }, [_c('time-spinner', {
    ref: "spinner",
    attrs: {
      "show-seconds": _vm.showSeconds,
      "hours": _vm.hours,
      "minutes": _vm.minutes,
      "seconds": _vm.seconds
    },
    on: {
      "change": _vm.handleChange,
      "select-range": _vm.setSelectionRange
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "x-time-panel-footer"
  }, [_c('button', {
    staticClass: "x-time-panel-btn cancel",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.handleCancel
    }
  }, [_vm._v(_vm._s(_vm.t('x.datepicker.cancel')))]), _vm._v(" "), _c('button', {
    staticClass: "x-time-panel-btn confirm",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.handleConfirm()
      }
    }
  }, [_vm._v(_vm._s(_vm.t('x.datepicker.confirm')))])])])])
},staticRenderFns: []}

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(14);

var _dom = __webpack_require__(19);

var _config = __webpack_require__(18);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _WEEKS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
var clearHours = function clearHours(time) {
    var cloneDate = new Date(time);
    cloneDate.setHours(0, 0, 0, 0);
    return cloneDate.getTime();
};

exports.default = {
    mixins: [_config2.default],
    props: {
        firstDayOfWeek: {
            default: 7,
            type: Number,
            validator: function validator(val) {
                return val >= 1 && val <= 7;
            }
        },

        date: {},

        year: {},

        month: {},

        week: {},

        selectionMode: {
            default: 'day'
        },

        showWeekNumber: {
            type: Boolean,
            default: false
        },

        disabledDate: {},

        minDate: {},

        maxDate: {},

        rangeState: {
            default: function _default() {
                return {
                    endDate: null,
                    selecting: false,
                    row: null,
                    column: null
                };
            }
        },

        value: {}
    },

    computed: {
        offsetDay: function offsetDay() {
            var week = this.firstDayOfWeek;

            return week > 3 ? 7 - week : -week;
        },
        WEEKS: function WEEKS() {
            var week = this.firstDayOfWeek;
            return _WEEKS.concat(_WEEKS).slice(week, week + 7);
        },
        monthDate: function monthDate() {
            return this.date.getDate();
        },
        startDate: function startDate() {
            return (0, _index.getStartDateOfMonth)(this.year, this.month);
        },
        rows: function rows() {
            var date = new Date(this.year, this.month, 1);
            var day = (0, _index.getFirstDayOfMonth)(date);
            var dateCountOfMonth = (0, _index.getDayCountOfMonth)(date.getFullYear(), date.getMonth());
            var dateCountOfLastMonth = (0, _index.getDayCountOfMonth)(date.getFullYear(), date.getMonth() === 0 ? 11 : date.getMonth() - 1);

            day = day === 0 ? 7 : day;

            var offset = this.offsetDay;
            var rows = this.tableRows;
            var count = 1;
            var firstDayPosition = void 0;

            var startDate = this.startDate;
            var disabledDate = this.disabledDate;
            var now = clearHours(new Date());

            for (var i = 0; i < 6; i++) {
                var row = rows[i];

                if (this.showWeekNumber) {
                    if (!row[0]) {
                        row[0] = { type: 'week',
                            text: (0, _index.getWeekNumber)(new Date(startDate.getTime() + _index.DAY_DURATION * (i * 7 + 1))) };
                    }
                }

                for (var j = 0; j < 7; j++) {
                    var cell = row[this.showWeekNumber ? j + 1 : j];
                    if (!cell) {
                        cell = { row: i, column: j, type: 'normal', inRange: false, start: false, end: false };
                    }

                    cell.type = 'normal';

                    var index = i * 7 + j;
                    var time = startDate.getTime() + _index.DAY_DURATION * (index - offset);
                    cell.inRange = time >= clearHours(this.minDate) && time <= clearHours(this.maxDate);
                    cell.start = this.minDate && time === clearHours(this.minDate);
                    cell.end = this.maxDate && time === clearHours(this.maxDate);
                    var isToday = time === now;

                    if (isToday) {
                        cell.type = 'today';
                    }

                    if (i >= 0 && i <= 1) {
                        if (j + i * 7 >= day + offset) {
                            cell.text = count++;
                            if (count === 2) {
                                firstDayPosition = i * 7 + j;
                            }
                        } else {
                            cell.text = dateCountOfLastMonth - (day + offset - j % 7) + 1 + i * 7;
                            cell.type = 'prev-month';
                        }
                    } else {
                        if (count <= dateCountOfMonth) {
                            cell.text = count++;
                            if (count === 2) {
                                firstDayPosition = i * 7 + j;
                            }
                        } else {
                            cell.text = count++ - dateCountOfMonth;
                            cell.type = 'next-month';
                        }
                    }

                    cell.disabled = typeof disabledDate === 'function' && disabledDate(new Date(time));

                    this.$set(row, this.showWeekNumber ? j + 1 : j, cell);
                }

                if (this.selectionMode === 'week') {
                    var start = this.showWeekNumber ? 1 : 0;
                    var end = this.showWeekNumber ? 7 : 6;
                    var isWeekActive = this.isWeekActive(row[start + 1]);

                    row[start].inRange = isWeekActive;
                    row[start].start = isWeekActive;
                    row[end].inRange = isWeekActive;
                    row[end].end = isWeekActive;
                }
            }

            rows.firstDayPosition = firstDayPosition;

            return rows;
        }
    },

    watch: {
        'rangeState.endDate': function rangeStateEndDate(newVal) {
            this.markRange(newVal);
        },
        minDate: function minDate(newVal, oldVal) {
            if (newVal && !oldVal) {
                this.rangeState.selecting = true;
                this.markRange(newVal);
            } else if (!newVal) {
                this.rangeState.selecting = false;
                this.markRange(newVal);
            } else {
                this.markRange();
            }
        },
        maxDate: function maxDate(newVal, oldVal) {
            if (newVal && !oldVal) {
                this.rangeState.selecting = false;
                this.markRange(newVal);
                this.$emit('pick', {
                    minDate: this.minDate,
                    maxDate: this.maxDate
                });
            }
        }
    },

    data: function data() {
        return {
            tableRows: [[], [], [], [], [], []]
        };
    },


    methods: {
        getCellClasses: function getCellClasses(cell) {
            var selectionMode = this.selectionMode;
            var monthDate = this.monthDate;

            var classes = [];
            if ((cell.type === 'normal' || cell.type === 'today') && !cell.disabled) {
                classes.push('available');
                if (cell.type === 'today') {
                    classes.push('today');
                }
            } else {
                classes.push(cell.type);
            }

            if (selectionMode === 'day' && (cell.type === 'normal' || cell.type === 'today') && Number(this.year) === this.date.getFullYear() && this.month === this.date.getMonth() && monthDate === Number(cell.text)) {
                classes.push('current');
            }

            if (cell.inRange && (cell.type === 'normal' || cell.type === 'today' || this.selectionMode === 'week')) {
                classes.push('in-range');

                if (cell.start) {
                    classes.push('start-date');
                }

                if (cell.end) {
                    classes.push('end-date');
                }
            }

            if (cell.disabled) {
                classes.push('disabled');
            }

            return classes.join(' ');
        },
        getDateOfCell: function getDateOfCell(row, column) {
            var startDate = this.startDate;

            return new Date(startDate.getTime() + (row * 7 + (column - (this.showWeekNumber ? 1 : 0)) - this.offsetDay) * _index.DAY_DURATION);
        },
        getCellByDate: function getCellByDate(date) {
            var startDate = this.startDate;
            var rows = this.rows;
            var index = (date - startDate) / _index.DAY_DURATION;
            var row = rows[Math.floor(index / 7)];

            if (this.showWeekNumber) {
                return row[index % 7 + 1];
            }
            return row[index % 7];
        },
        isWeekActive: function isWeekActive(cell) {
            if (this.selectionMode !== 'week') {
                return false;
            }
            var newDate = new Date(this.year, this.month, 1);
            var year = newDate.getFullYear();
            var month = newDate.getMonth();

            if (cell.type === 'prev-month') {
                newDate.setMonth(month === 0 ? 11 : month - 1);
                newDate.setFullYear(month === 0 ? year - 1 : year);
            }

            if (cell.type === 'next-month') {
                newDate.setMonth(month === 11 ? 0 : month + 1);
                newDate.setFullYear(month === 11 ? year + 1 : year);
            }

            newDate.setDate(parseInt(cell.text, 10));

            return (0, _index.getWeekNumber)(newDate) === this.week;
        },
        markRange: function markRange(maxDate) {
            var startDate = this.startDate;
            if (!maxDate) {
                maxDate = this.maxDate;
            }

            var rows = this.rows;
            var minDate = this.minDate;
            for (var i = 0, k = rows.length; i < k; i++) {
                var row = rows[i];
                for (var j = 0, l = row.length; j < l; j++) {
                    if (this.showWeekNumber && j === 0) {
                        continue;
                    }
                    var cell = row[j];
                    var index = i * 7 + j + (this.showWeekNumber ? -1 : 0);
                    var time = startDate.getTime() + _index.DAY_DURATION * (index - this.offsetDay);

                    cell.inRange = minDate && time >= clearHours(minDate) && time <= clearHours(maxDate);
                    cell.start = minDate && time === clearHours(minDate.getTime());
                    cell.end = maxDate && time === clearHours(maxDate.getTime());
                }
            }
        },
        handleMouseMove: function handleMouseMove(event) {
            if (!this.rangeState.selecting) {
                return;
            }
            this.$emit('changerange', {
                minDate: this.minDate,
                maxDate: this.maxDate,
                rangeState: this.rangeState
            });

            var target = event.target;
            if (target.tagName !== 'TD') {
                return;
            }

            var column = target.cellIndex;
            var row = target.parentNode.rowIndex - 1;
            var _rangeState = this.rangeState,
                oldRow = _rangeState.row,
                oldColumn = _rangeState.column;


            if (oldRow !== row || oldColumn !== column) {
                this.rangeState.row = row;
                this.rangeState.column = column;

                this.rangeState.endDate = this.getDateOfCell(row, column);
            }
        },
        handleClick: function handleClick(event) {
            var target = event.target;

            if (target.tagName !== 'TD') {
                return;
            }
            if ((0, _dom.hasClass)(target, 'disabled') || (0, _dom.hasClass)(target, 'week')) {
                return;
            }

            var selectionMode = this.selectionMode;

            if (selectionMode === 'week') {
                target = target.parentNode.cells[1];
            }

            var year = Number(this.year);
            var month = Number(this.month);

            var cellIndex = target.cellIndex;
            var rowIndex = target.parentNode.rowIndex;

            var cell = this.rows[rowIndex - 1][cellIndex];
            var text = cell.text;
            var className = target.className;

            var newDate = new Date(year, month, 1);

            if (className.indexOf('prev') !== -1) {
                if (month === 0) {
                    year = year - 1;
                    month = 11;
                } else {
                    month = month - 1;
                }
                newDate.setFullYear(year);
                newDate.setMonth(month);
            } else if (className.indexOf('next') !== -1) {
                if (month === 11) {
                    year = year + 1;
                    month = 0;
                } else {
                    month = month + 1;
                }
                newDate.setFullYear(year);
                newDate.setMonth(month);
            }

            newDate.setDate(parseInt(text, 10));

            if (this.selectionMode === 'range') {
                if (this.minDate && this.maxDate) {
                    var minDate = new Date(newDate.getTime());
                    var maxDate = null;

                    this.$emit('pick', { minDate: minDate, maxDate: maxDate }, false);
                    this.rangeState.selecting = true;
                    this.markRange(this.minDate);
                } else if (this.minDate && !this.maxDate) {
                    if (newDate >= this.minDate) {
                        var _maxDate = new Date(newDate.getTime());
                        this.rangeState.selecting = false;

                        this.$emit('pick', {
                            minDate: this.minDate,
                            maxDate: _maxDate
                        });
                    } else {
                        var _minDate = new Date(newDate.getTime());

                        this.$emit('pick', { minDate: _minDate, maxDate: this.maxDate }, false);
                    }
                } else if (!this.minDate) {
                    var _minDate2 = new Date(newDate.getTime());

                    this.$emit('pick', { minDate: _minDate2, maxDate: this.maxDate }, false);
                    this.rangeState.selecting = true;
                    this.markRange(this.minDate);
                }
            } else if (selectionMode === 'day') {
                this.$emit('pick', newDate);
            } else if (selectionMode === 'week') {
                var weekNumber = (0, _index.getWeekNumber)(newDate);

                var value = newDate.getFullYear() + 'w' + weekNumber;
                this.$emit('pick', {
                    year: newDate.getFullYear(),
                    week: weekNumber,
                    value: value,
                    date: newDate
                });
            }
        }
    }
};

/***/ }),
/* 146 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "x-date-table",
    class: {
      'is-week-mode': _vm.selectionMode === 'week'
    },
    attrs: {
      "cellspacing": "0",
      "cellpadding": "0"
    },
    on: {
      "click": _vm.handleClick,
      "mousemove": _vm.handleMouseMove
    }
  }, [_c('tbody', [_c('tr', [(_vm.showWeekNumber) ? _c('th', [_vm._v(_vm._s(_vm.t('x.datepicker.week')))]) : _vm._e(), _vm._v(" "), _vm._l((_vm.WEEKS), function(week) {
    return _c('th', [_vm._v(_vm._s(_vm.t('x.datepicker.weeks.' + week)))])
  })], 2), _vm._v(" "), _vm._l((_vm.rows), function(row) {
    return _c('tr', {
      staticClass: "x-date-table-row",
      class: {
        current: _vm.value && _vm.isWeekActive(row[1])
      }
    }, _vm._l((row), function(cell) {
      return _c('td', {
        class: _vm.getCellClasses(cell),
        domProps: {
          "textContent": _vm._s(cell.type === 'today' ? _vm.t('x.datepicker.today') : cell.text)
        }
      })
    }))
  })], 2)])
},staticRenderFns: []}

/***/ }),
/* 147 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "x-slide-up"
    },
    on: {
      "after-leave": function($event) {
        _vm.$emit('dodestroy')
      }
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.visible),
      expression: "visible"
    }],
    staticClass: "x-picker-panel x-date-range-picker",
    class: [{
      'has-sidebar': _vm.$slots.sidebar || _vm.shortcuts,
      'has-time': _vm.showTime
    }, _vm.popperClass],
    style: ({
      width: _vm.width + 'px'
    })
  }, [_c('div', {
    staticClass: "x-picker-panel-body-wrapper"
  }, [_vm._t("sidebar"), _vm._v(" "), (_vm.shortcuts) ? _c('div', {
    staticClass: "x-picker-panel-sidebar"
  }, _vm._l((_vm.shortcuts), function(shortcut) {
    return _c('button', {
      staticClass: "x-picker-panel-shortcut",
      attrs: {
        "type": "button"
      },
      on: {
        "click": function($event) {
          _vm.handleShortcutClick(shortcut)
        }
      }
    }, [_vm._v(_vm._s(shortcut.text))])
  })) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "x-picker-panel-body"
  }, [(_vm.showTime) ? _c('div', {
    staticClass: "x-date-range-picker-time-header"
  }, [_c('span', {
    staticClass: "x-date-range-picker-editors-wrap"
  }, [_c('span', {
    staticClass: "x-date-range-picker-time-picker-wrap"
  }, [_c('x-input', {
    ref: "minInput",
    staticClass: "x-date-range-picker-editor",
    attrs: {
      "size": "small",
      "placeholder": _vm.t('x.datepicker.startDate'),
      "value": _vm.minVisibleDate
    },
    nativeOn: {
      "input": function($event) {
        _vm.handleDateInput($event, 'min')
      },
      "change": function($event) {
        _vm.handleDateChange($event, 'min')
      }
    }
  })], 1), _vm._v(" "), _c('span', {
    staticClass: "x-date-range-picker-time-picker-wrap"
  }, [_c('x-input', {
    staticClass: "x-date-range-picker-editor",
    attrs: {
      "size": "small",
      "placeholder": _vm.t('x.datepicker.startTime'),
      "value": _vm.minVisibleTime
    },
    on: {
      "focus": function($event) {
        _vm.minTimePickerVisible = !_vm.minTimePickerVisible
      }
    },
    nativeOn: {
      "change": function($event) {
        _vm.handleTimeChange($event, 'min')
      }
    }
  }), _vm._v(" "), _c('time-picker', {
    ref: "minTimePicker",
    attrs: {
      "picker-width": _vm.minPickerWidth,
      "date": _vm.minDate,
      "visible": _vm.minTimePickerVisible
    },
    on: {
      "pick": _vm.handleMinTimePick
    }
  })], 1)]), _vm._v(" "), _c('span', {
    staticClass: "x-icon x-icon-chevron-right"
  }), _vm._v(" "), _c('span', {
    staticClass: "x-date-range-picker-editors-wrap is-right"
  }, [_c('span', {
    staticClass: "x-date-range-picker-time-picker-wrap"
  }, [_c('x-input', {
    staticClass: "x-date-range-picker-editor",
    attrs: {
      "size": "small",
      "placeholder": _vm.t('x.datepicker.endDate'),
      "value": _vm.maxVisibleDate,
      "readonly": !_vm.minDate
    },
    nativeOn: {
      "input": function($event) {
        _vm.handleDateInput($event, 'max')
      },
      "change": function($event) {
        _vm.handleDateChange($event, 'max')
      }
    }
  })], 1), _vm._v(" "), _c('span', {
    staticClass: "x-date-range-picker-time-picker-wrap"
  }, [_c('x-input', {
    ref: "maxInput",
    staticClass: "x-date-range-picker-editor",
    attrs: {
      "size": "small",
      "placeholder": _vm.t('x.datepicker.endTime'),
      "value": _vm.maxVisibleTime,
      "readonly": !_vm.minDate
    },
    on: {
      "focus": function($event) {
        _vm.minDate && (_vm.maxTimePickerVisible = !_vm.maxTimePickerVisible)
      }
    },
    nativeOn: {
      "change": function($event) {
        _vm.handleTimeChange($event, 'max')
      }
    }
  }), _vm._v(" "), _c('time-picker', {
    ref: "maxTimePicker",
    attrs: {
      "picker-width": _vm.maxPickerWidth,
      "date": _vm.maxDate,
      "visible": _vm.maxTimePickerVisible
    },
    on: {
      "pick": _vm.handleMaxTimePick
    }
  })], 1)])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "x-picker-panel-content x-date-range-picker-content is-left"
  }, [_c('div', {
    staticClass: "x-date-range-picker-header"
  }, [_c('button', {
    staticClass: "x-picker-panel-icon-btn x-icon x-icon-chevron-d-left",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.prevYear
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "x-picker-panel-icon-btn x-icon x-icon-chevron-left",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.prevMonth
    }
  }), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.leftLabel))])]), _vm._v(" "), _c('date-table', {
    attrs: {
      "selection-mode": "range",
      "date": _vm.date,
      "year": _vm.leftYear,
      "month": _vm.leftMonth,
      "min-date": _vm.minDate,
      "max-date": _vm.maxDate,
      "range-state": _vm.rangeState,
      "disabled-date": _vm.disabledDate,
      "first-day-of-week": _vm.firstDayOfWeek
    },
    on: {
      "changerange": _vm.handleChangeRange,
      "pick": _vm.handleRangePick
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "x-picker-panel-content x-date-range-picker-content is-right"
  }, [_c('div', {
    staticClass: "x-date-range-picker-header"
  }, [_c('button', {
    staticClass: "x-picker-panel-icon-btn x-icon x-icon-chevron-d-right",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.nextYear
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "x-picker-panel-icon-btn x-icon x-icon-chevron-right",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.nextMonth
    }
  }), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.rightLabel))])]), _vm._v(" "), _c('date-table', {
    attrs: {
      "selection-mode": "range",
      "date": _vm.rightDate,
      "year": _vm.rightYear,
      "month": _vm.rightMonth,
      "min-date": _vm.minDate,
      "max-date": _vm.maxDate,
      "range-state": _vm.rangeState,
      "disabled-date": _vm.disabledDate,
      "first-day-of-week": _vm.firstDayOfWeek
    },
    on: {
      "changerange": _vm.handleChangeRange,
      "pick": _vm.handleRangePick
    }
  })], 1)])], 2), _vm._v(" "), (_vm.showTime) ? _c('div', {
    staticClass: "x-picker-panel-footer"
  }, [_c('a', {
    staticClass: "x-picker-panel-link-btn",
    on: {
      "click": _vm.handleClear
    }
  }, [_vm._v(_vm._s(_vm.t('x.datepicker.clear')))]), _vm._v(" "), _c('button', {
    staticClass: "x-picker-panel-btn",
    attrs: {
      "type": "button",
      "disabled": _vm.btnDisabled
    },
    on: {
      "click": function($event) {
        _vm.handleConfirm()
      }
    }
  }, [_vm._v(_vm._s(_vm.t('x.datepicker.confirm')))])]) : _vm._e()])])
},staticRenderFns: []}

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(149),
  /* template */
  __webpack_require__(156),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(14);

var _input = __webpack_require__(9);

var _input2 = _interopRequireDefault(_input);

var _time = __webpack_require__(44);

var _time2 = _interopRequireDefault(_time);

var _yearTable = __webpack_require__(150);

var _yearTable2 = _interopRequireDefault(_yearTable);

var _monthTable = __webpack_require__(153);

var _monthTable2 = _interopRequireDefault(_monthTable);

var _dateTable = __webpack_require__(64);

var _dateTable2 = _interopRequireDefault(_dateTable);

var _config = __webpack_require__(18);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    mixins: [_config2.default],
    watch: {
        showTime: function showTime(val) {
            var _this = this;

            if (!val) {
                return;
            }
            this.$nextTick(function (_) {
                var inputElm = _this.$refs.input.$el;
                if (inputElm) {
                    _this.pickerWidth = inputElm.getBoundingClientRect().width + 10;
                }
            });
        },
        value: function value(newVal) {
            if (!newVal) {
                return;
            }
            newVal = new Date(newVal);
            if (!isNaN(newVal)) {
                if (typeof this.disabledDate === 'function' && this.disabledDate(new Date(newVal))) {
                    return;
                }
                this.date = newVal;
                this.year = newVal.getFullYear();
                this.month = newVal.getMonth();
                this.$emit('pick', newVal, true);
            }
        },
        timePickerVisible: function timePickerVisible(val) {
            var _this2 = this;

            if (val) {
                this.$nextTick(function () {
                    return _this2.$refs.timepicker.ajustScrollTop();
                });
            }
        },
        selectionMode: function selectionMode(newVal) {
            if (newVal === 'month') {
                if (this.currentView !== 'year' || this.currentView !== 'month') {
                    this.currentView = 'month';
                }
            }
        },
        date: function date(newVal) {
            if (!this.year) {
                this.year = newVal.getFullYear();
                this.month = newVal.getMonth();
            }
        }
    },

    methods: {
        handleClear: function handleClear() {
            this.date = new Date();
            this.$emit('pick');
        },
        resetDate: function resetDate() {
            this.date = new Date(this.date);
        },
        showMonthPicker: function showMonthPicker() {
            this.currentView = 'month';
        },
        showYearPicker: function showYearPicker() {
            this.currentView = 'year';
        },
        prevMonth: function prevMonth() {
            this.month--;
            if (this.month < 0) {
                this.month = 11;
                this.year--;
            }
        },
        nextMonth: function nextMonth() {
            this.month++;
            if (this.month > 11) {
                this.month = 0;
                this.year++;
            }
        },
        nextYear: function nextYear() {
            if (this.currentView === 'year') {
                this.$refs.yearTable.nextTenYear();
            } else {
                this.year++;
                this.date.setFullYear(this.year);
                this.resetDate();
            }
        },
        prevYear: function prevYear() {
            if (this.currentView === 'year') {
                this.$refs.yearTable.prevTenYear();
            } else {
                this.year--;
                this.date.setFullYear(this.year);
                this.resetDate();
            }
        },
        handleShortcutClick: function handleShortcutClick(shortcut) {
            if (shortcut.onClick) {
                shortcut.onClick(this);
            }
        },
        handleTimePick: function handleTimePick(picker, visible, first) {
            if (picker) {
                var oldDate = new Date(this.date.getTime());
                var hour = picker.getHours();
                var minute = picker.getMinutes();
                var second = picker.getSeconds();
                oldDate.setHours(hour);
                oldDate.setMinutes(minute);
                oldDate.setSeconds(second);
                this.date = new Date(oldDate.getTime());
            }

            if (!first) {
                this.timePickerVisible = visible;
            }
        },
        handleMonthPick: function handleMonthPick(month) {
            this.month = month;
            var selectionMode = this.selectionMode;
            if (selectionMode !== 'month') {
                this.date.setMonth(month);
                this.currentView = 'date';
                this.resetDate();
            } else {
                this.date.setMonth(month);
                this.year && this.date.setFullYear(this.year);
                this.resetDate();
                var value = new Date(this.date.getFullYear(), month, 1);
                this.$emit('pick', value);
            }
        },
        handleDatePick: function handleDatePick(value) {
            if (this.selectionMode === 'day') {
                if (!this.showTime) {
                    this.$emit('pick', new Date(value.getTime()));
                }
                this.date.setFullYear(value.getFullYear());
                this.date.setMonth(value.getMonth(), value.getDate());
            } else if (this.selectionMode === 'week') {
                var date = (0, _util.formatDate)(value.date, this.format || 'yyyywWW');
                var week = this.week = value.week;

                date = /WW/.test(date) ? date.replace(/WW/, week < 10 ? '0' + week : week) : date.replace(/W/, week);

                this.$emit('pick', date);
            }

            this.resetDate();
        },
        handleYearPick: function handleYearPick(year) {
            var close = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            this.year = year;
            if (!close) {
                return;
            }

            this.date.setFullYear(year);
            if (this.selectionMode === 'year') {
                this.$emit('pick', new Date(year));
            } else {
                this.currentView = 'month';
            }

            this.resetDate();
        },
        changeToNow: function changeToNow() {
            this.date.setTime(+new Date());
            this.$emit('pick', new Date(this.date.getTime()));
            this.resetDate();
        },
        confirm: function confirm() {
            this.$emit('pick', this.date);
        },
        resetView: function resetView() {
            if (this.selectionMode === 'month') {
                this.currentView = 'month';
            } else if (this.selectionMode === 'year') {
                this.currentView = 'year';
            } else {
                this.currentView = 'date';
            }

            if (this.selectionMode !== 'week') {
                this.year = this.date.getFullYear();
                this.month = this.date.getMonth();
            }
        }
    },

    components: {
        TimePicker: _time2.default,
        YearTable: _yearTable2.default,
        MonthTable: _monthTable2.default,
        DateTable: _dateTable2.default,
        XInput: _input2.default
    },

    mounted: function mounted() {
        if (this.selectionMode === 'month') {
            this.currentView = 'month';
        }

        if (this.date && !this.year) {
            this.year = this.date.getFullYear();
            this.month = this.date.getMonth();
        }
    },
    data: function data() {
        return {
            popperClass: '',
            pickerWidth: 0,
            date: new Date(),
            value: '',
            showTime: false,
            selectionMode: 'day',
            shortcuts: '',
            visible: false,
            currentView: 'date',
            disabledDate: '',
            firstDayOfWeek: 7,
            year: null,
            month: null,
            week: null,
            showWeekNumber: false,
            timePickerVisible: false,
            width: 0
        };
    },


    computed: {
        footerVisible: function footerVisible() {
            return this.showTime;
        },


        visibleTime: {
            get: function get() {
                return (0, _util.formatDate)(this.date, 'HH:mm:ss');
            },
            set: function set(val) {
                if (val) {
                    var date = (0, _util.parseDate)(val, 'HH:mm:ss');
                    if (date) {
                        date.setFullYear(this.date.getFullYear());
                        date.setMonth(this.date.getMonth());
                        date.setDate(this.date.getDate());
                        this.date = date;
                        this.$refs.timepicker.value = date;
                        this.timePickerVisible = false;
                    }
                }
            }
        },

        visibleDate: {
            get: function get() {
                return (0, _util.formatDate)(this.date);
            },
            set: function set(val) {
                var date = (0, _util.parseDate)(val, 'yyyy-MM-dd');
                if (date) {
                    date.setHours(this.date.getHours());
                    date.setMinutes(this.date.getMinutes());
                    date.setSeconds(this.date.getSeconds());
                    this.date = date;
                    this.resetView();
                }
            }
        },

        yearLabel: function yearLabel() {
            var year = this.year;
            if (!year) {
                return '';
            }
            var yearTranslation = this.t('x.datepicker.year');
            if (this.currentView === 'year') {
                var startYear = Math.floor(year / 10) * 10;
                if (yearTranslation) {
                    return startYear + ' ' + yearTranslation + ' - ' + (startYear + 9) + ' ' + yearTranslation;
                }
                return startYear + ' - ' + (startYear + 9);
            }
            return this.year + ' ' + yearTranslation;
        }
    }
};

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(151),
  /* template */
  __webpack_require__(152),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dom = __webpack_require__(19);

exports.default = {
    props: {
        disabledDate: {},
        date: {},
        year: {}
    },

    computed: {
        startYear: function startYear() {
            return Math.floor(this.year / 10) * 10;
        }
    },

    methods: {
        getCellStyle: function getCellStyle(year) {
            var style = {};
            var date = new Date(this.date);

            date.setFullYear(year);
            style.disabled = typeof this.disabledDate === 'function' && this.disabledDate(date);
            style.current = Number(this.year) === year;

            return style;
        },
        nextTenYear: function nextTenYear() {
            this.$emit('pick', Number(this.year) + 10, false);
        },
        prevTenYear: function prevTenYear() {
            this.$emit('pick', Number(this.year) - 10, false);
        },
        handleYearTableClick: function handleYearTableClick(event) {
            var target = event.target;
            if (target.tagName === 'A') {
                if ((0, _dom.hasClass)(target.parentNode, 'disabled')) {
                    return;
                }
                var year = target.textContent || target.innerText;
                this.$emit('pick', year);
            }
        }
    }
};

/***/ }),
/* 152 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "x-year-table",
    on: {
      "click": _vm.handleYearTableClick
    }
  }, [_c('tbody', [_c('tr', [_c('td', {
    staticClass: "available",
    class: _vm.getCellStyle(_vm.startYear + 0)
  }, [_c('a', {
    staticClass: "cell"
  }, [_vm._v(_vm._s(_vm.startYear))])]), _vm._v(" "), _c('td', {
    staticClass: "available",
    class: _vm.getCellStyle(_vm.startYear + 1)
  }, [_c('a', {
    staticClass: "cell"
  }, [_vm._v(_vm._s(_vm.startYear + 1))])]), _vm._v(" "), _c('td', {
    staticClass: "available",
    class: _vm.getCellStyle(_vm.startYear + 2)
  }, [_c('a', {
    staticClass: "cell"
  }, [_vm._v(_vm._s(_vm.startYear + 2))])]), _vm._v(" "), _c('td', {
    staticClass: "available",
    class: _vm.getCellStyle(_vm.startYear + 3)
  }, [_c('a', {
    staticClass: "cell"
  }, [_vm._v(_vm._s(_vm.startYear + 3))])])]), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "available",
    class: _vm.getCellStyle(_vm.startYear + 4)
  }, [_c('a', {
    staticClass: "cell"
  }, [_vm._v(_vm._s(_vm.startYear + 4))])]), _vm._v(" "), _c('td', {
    staticClass: "available",
    class: _vm.getCellStyle(_vm.startYear + 5)
  }, [_c('a', {
    staticClass: "cell"
  }, [_vm._v(_vm._s(_vm.startYear + 5))])]), _vm._v(" "), _c('td', {
    staticClass: "available",
    class: _vm.getCellStyle(_vm.startYear + 6)
  }, [_c('a', {
    staticClass: "cell"
  }, [_vm._v(_vm._s(_vm.startYear + 6))])]), _vm._v(" "), _c('td', {
    staticClass: "available",
    class: _vm.getCellStyle(_vm.startYear + 7)
  }, [_c('a', {
    staticClass: "cell"
  }, [_vm._v(_vm._s(_vm.startYear + 7))])])]), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "available",
    class: _vm.getCellStyle(_vm.startYear + 8)
  }, [_c('a', {
    staticClass: "cell"
  }, [_vm._v(_vm._s(_vm.startYear + 8))])]), _vm._v(" "), _c('td', {
    staticClass: "available",
    class: _vm.getCellStyle(_vm.startYear + 9)
  }, [_c('a', {
    staticClass: "cell"
  }, [_vm._v(_vm._s(_vm.startYear + 9))])]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td')])])])
},staticRenderFns: []}

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(154),
  /* template */
  __webpack_require__(155),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dom = __webpack_require__(19);

var _config = __webpack_require__(18);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    mixins: [_config2.default],
    props: {
        disabledDate: {},
        date: {},
        month: {
            type: Number
        }
    },
    methods: {
        getCellStyle: function getCellStyle(month) {
            var style = {};
            var date = new Date(this.date);

            date.setMonth(month);
            style.disabled = typeof this.disabledDate === 'function' && this.disabledDate(date);
            style.current = this.month === month;

            return style;
        },
        handleMonthTableClick: function handleMonthTableClick(event) {
            var target = event.target;
            if (target.tagName !== 'A') {
                return;
            }
            if ((0, _dom.hasClass)(target.parentNode, 'disabled')) {
                return;
            }
            var column = target.parentNode.cellIndex;
            var row = target.parentNode.parentNode.rowIndex;
            var month = row * 4 + column;

            this.$emit('pick', month);
        }
    }
};

/***/ }),
/* 155 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "x-month-table",
    on: {
      "click": _vm.handleMonthTableClick
    }
  }, [_c('tbody', [_c('tr', [_c('td', {
    class: _vm.getCellStyle(0)
  }, [_c('a', {
    staticClass: "cell"
  }, [_vm._v(_vm._s(_vm.t('x.datepicker.months.jan')))])]), _vm._v(" "), _c('td', {
    class: _vm.getCellStyle(1)
  }, [_c('a', {
    staticClass: "cell"
  }, [_vm._v(_vm._s(_vm.t('x.datepicker.months.feb')))])]), _vm._v(" "), _c('td', {
    class: _vm.getCellStyle(2)
  }, [_c('a', {
    staticClass: "cell"
  }, [_vm._v(_vm._s(_vm.t('x.datepicker.months.mar')))])]), _vm._v(" "), _c('td', {
    class: _vm.getCellStyle(3)
  }, [_c('a', {
    staticClass: "cell"
  }, [_vm._v(_vm._s(_vm.t('x.datepicker.months.apr')))])])]), _vm._v(" "), _c('tr', [_c('td', {
    class: _vm.getCellStyle(4)
  }, [_c('a', {
    staticClass: "cell"
  }, [_vm._v(_vm._s(_vm.t('x.datepicker.months.may')))])]), _vm._v(" "), _c('td', {
    class: _vm.getCellStyle(5)
  }, [_c('a', {
    staticClass: "cell"
  }, [_vm._v(_vm._s(_vm.t('x.datepicker.months.jun')))])]), _vm._v(" "), _c('td', {
    class: _vm.getCellStyle(6)
  }, [_c('a', {
    staticClass: "cell"
  }, [_vm._v(_vm._s(_vm.t('x.datepicker.months.jul')))])]), _vm._v(" "), _c('td', {
    class: _vm.getCellStyle(7)
  }, [_c('a', {
    staticClass: "cell"
  }, [_vm._v(_vm._s(_vm.t('x.datepicker.months.aug')))])])]), _vm._v(" "), _c('tr', [_c('td', {
    class: _vm.getCellStyle(8)
  }, [_c('a', {
    staticClass: "cell"
  }, [_vm._v(_vm._s(_vm.t('x.datepicker.months.sep')))])]), _vm._v(" "), _c('td', {
    class: _vm.getCellStyle(9)
  }, [_c('a', {
    staticClass: "cell"
  }, [_vm._v(_vm._s(_vm.t('x.datepicker.months.oct')))])]), _vm._v(" "), _c('td', {
    class: _vm.getCellStyle(10)
  }, [_c('a', {
    staticClass: "cell"
  }, [_vm._v(_vm._s(_vm.t('x.datepicker.months.nov')))])]), _vm._v(" "), _c('td', {
    class: _vm.getCellStyle(11)
  }, [_c('a', {
    staticClass: "cell"
  }, [_vm._v(_vm._s(_vm.t('x.datepicker.months.dec')))])])])])])
},staticRenderFns: []}

/***/ }),
/* 156 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "x-slide-up"
    },
    on: {
      "after-leave": function($event) {
        _vm.$emit('dodestroy')
      }
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.visible),
      expression: "visible"
    }],
    staticClass: "x-picker-panel x-date-picker",
    class: [{
      'has-sidebar': _vm.$slots.sidebar || _vm.shortcuts,
      'has-time': _vm.showTime
    }, _vm.popperClass],
    style: ({
      width: _vm.width + 'px'
    })
  }, [_c('div', {
    staticClass: "x-picker-panel-body-wrapper"
  }, [_vm._t("sidebar"), _vm._v(" "), (_vm.shortcuts) ? _c('div', {
    staticClass: "x-picker-panel-sidebar"
  }, _vm._l((_vm.shortcuts), function(shortcut) {
    return _c('button', {
      staticClass: "x-picker-panel-shortcut",
      attrs: {
        "type": "button"
      },
      on: {
        "click": function($event) {
          _vm.handleShortcutClick(shortcut)
        }
      }
    }, [_vm._v(_vm._s(shortcut.text))])
  })) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "x-picker-panel-body"
  }, [(_vm.showTime) ? _c('div', {
    staticClass: "x-date-picker-time-header"
  }, [_c('span', {
    staticClass: "x-date-picker-editor-wrap"
  }, [_c('x-input', {
    attrs: {
      "placeholder": _vm.t('x.datepicker.selectDate'),
      "value": _vm.visibleDate,
      "size": "small"
    },
    nativeOn: {
      "change": function($event) {
        _vm.visibleDate = $event.target.value
      }
    }
  })], 1), _vm._v(" "), _c('span', {
    staticClass: "x-date-picker-editor-wrap"
  }, [_c('x-input', {
    ref: "input",
    attrs: {
      "placeholder": _vm.t('x.datepicker.selectTime'),
      "value": _vm.visibleTime,
      "size": "small"
    },
    on: {
      "focus": function($event) {
        _vm.timePickerVisible = !_vm.timePickerVisible
      }
    },
    nativeOn: {
      "change": function($event) {
        _vm.visibleTime = $event.target.value
      }
    }
  }), _vm._v(" "), _c('time-picker', {
    ref: "timepicker",
    attrs: {
      "date": _vm.date,
      "picker-width": _vm.pickerWidth,
      "visible": _vm.timePickerVisible
    },
    on: {
      "pick": _vm.handleTimePick
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.currentView !== 'time'),
      expression: "currentView !== 'time'"
    }],
    staticClass: "x-date-picker-header"
  }, [_c('button', {
    staticClass: "x-picker-panel-icon-btn x-date-picker-prev-btn x-icon x-icon-chevron-d-left",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.prevYear
    }
  }), _vm._v(" "), _c('button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.currentView === 'date'),
      expression: "currentView === 'date'"
    }],
    staticClass: "x-picker-panel-icon-btn x-date-picker-prev-btn x-icon x-icon-chevron-left",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.prevMonth
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "x-date-picker-header-label",
    on: {
      "click": _vm.showYearPicker
    }
  }, [_vm._v(_vm._s(_vm.yearLabel))]), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.currentView === 'date'),
      expression: "currentView === 'date'"
    }],
    staticClass: "x-date-picker-header-label",
    class: {
      active: _vm.currentView === 'month'
    },
    on: {
      "click": _vm.showMonthPicker
    }
  }, [_vm._v(_vm._s(_vm.t(("x.datepicker.month" + (_vm.month + 1)))))]), _vm._v(" "), _c('button', {
    staticClass: "x-picker-panel-icon-btn x-date-picker-next-btn x-icon x-icon-chevron-d-right",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.nextYear
    }
  }), _vm._v(" "), _c('button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.currentView === 'date'),
      expression: "currentView === 'date'"
    }],
    staticClass: "x-picker-panel-icon-btn x-date-picker-next-btn x-icon x-icon-chevron-right",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.nextMonth
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "x-picker-panel-content"
  }, [_c('date-table', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.currentView === 'date'),
      expression: "currentView === 'date'"
    }],
    attrs: {
      "year": _vm.year,
      "month": _vm.month,
      "date": _vm.date,
      "value": _vm.value,
      "week": _vm.week,
      "selection-mode": _vm.selectionMode,
      "first-day-of-week": _vm.firstDayOfWeek,
      "disabled-date": _vm.disabledDate
    },
    on: {
      "pick": _vm.handleDatePick
    }
  }), _vm._v(" "), _c('year-table', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.currentView === 'year'),
      expression: "currentView === 'year'"
    }],
    ref: "yearTable",
    attrs: {
      "year": _vm.year,
      "date": _vm.date,
      "disabled-date": _vm.disabledDate
    },
    on: {
      "pick": _vm.handleYearPick
    }
  }), _vm._v(" "), _c('month-table', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.currentView === 'month'),
      expression: "currentView === 'month'"
    }],
    attrs: {
      "month": _vm.month,
      "date": _vm.date,
      "disabled-date": _vm.disabledDate
    },
    on: {
      "pick": _vm.handleMonthPick
    }
  })], 1)])], 2), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.footerVisible && _vm.currentView === 'date'),
      expression: "footerVisible && currentView === 'date'"
    }],
    staticClass: "x-picker-panel-footer"
  }, [_c('a', {
    staticClass: "x-picker-panel-link-btn",
    attrs: {
      "href": "JavaScript:"
    },
    on: {
      "click": _vm.changeToNow
    }
  }, [_vm._v(_vm._s(_vm.t('x.datepicker.now')))]), _vm._v(" "), _c('button', {
    staticClass: "x-picker-panel-btn",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.confirm
    }
  }, [_vm._v(_vm._s(_vm.t('x.datepicker.confirm')))])])])])
},staticRenderFns: []}

/***/ }),
/* 157 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('x-input', {
    directives: [{
      name: "clickoutside",
      rawName: "v-clickoutside",
      value: (_vm.handleClose),
      expression: "handleClose"
    }],
    ref: "reference",
    staticClass: "x-date-editor",
    class: 'x-date-editor-' + _vm.type,
    attrs: {
      "readonly": !_vm.editable || _vm.readonly,
      "disabled": _vm.disabled,
      "size": _vm.size,
      "placeholder": _vm.placeholder,
      "value": _vm.displayValue,
      "validateEvent": false
    },
    on: {
      "focus": _vm.handleFocus,
      "blur": _vm.handleBlur
    },
    nativeOn: {
      "keydown": function($event) {
        _vm.handleKeydown($event)
      },
      "change": function($event) {
        _vm.displayValue = $event.target.value
      }
    }
  }, [(_vm.haveTrigger) ? _c('i', {
    staticClass: "x-icon x-input-icon",
    class: [_vm.showClose ? 'x-icon-android-close' : _vm.triggerClass],
    on: {
      "click": _vm.handleClickIcon,
      "mouseenter": _vm.handleMouseEnterIcon,
      "mouseleave": function($event) {
        _vm.showClose = false
      }
    },
    slot: "icon"
  }) : _vm._e()]), _vm._v(" "), (_vm.type !== 'daterange' && _vm.type !== 'datetimerange') ? _c('date-panel', {
    ref: "picker",
    attrs: {
      "popperClass": _vm.popperClass
    }
  }) : _vm._e(), _vm._v(" "), (_vm.type === 'daterange' || _vm.type === 'datetimerange') ? _c('date-range-panel', {
    ref: "picker",
    attrs: {
      "popperClass": _vm.popperClass
    }
  }) : _vm._e()], 1)
},staticRenderFns: []}

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _timePicker = __webpack_require__(159);

var _timePicker2 = _interopRequireDefault(_timePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _timePicker2.default;

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(160),
  /* template */
  __webpack_require__(164),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pickerMixin = __webpack_require__(30);

var _pickerMixin2 = _interopRequireDefault(_pickerMixin);

var _time = __webpack_require__(44);

var _time2 = _interopRequireDefault(_time);

var _timeRange = __webpack_require__(161);

var _timeRange2 = _interopRequireDefault(_timeRange);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'XTimePicker',
    mixins: [_pickerMixin2.default],
    components: {
        TimePanel: _time2.default,
        TimeRangePanel: _timeRange2.default
    },
    props: {
        isRange: Boolean,
        type: {
            type: String,
            default: function _default() {
                return this.isRange ? 'timerange' : 'time';
            }
        }
    }
};

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(162),
  /* template */
  __webpack_require__(163),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(14);

var _timeSpinner = __webpack_require__(63);

var _timeSpinner2 = _interopRequireDefault(_timeSpinner);

var _config = __webpack_require__(18);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MIN_TIME = (0, _index.parseDate)('00:00:00', 'HH:mm:ss');
var MAX_TIME = (0, _index.parseDate)('23:59:59', 'HH:mm:ss');
var isDisabled = function isDisabled(minTime, maxTime) {
    var minValue = minTime.getHours() * 3600 + minTime.getMinutes() * 60 + minTime.getSeconds();
    var maxValue = maxTime.getHours() * 3600 + maxTime.getMinutes() * 60 + maxTime.getSeconds();

    return minValue > maxValue;
};
var clacTime = function clacTime(time) {
    time = Array.isArray(time) ? time : [time];
    var minTime = time[0] || new Date();
    var date = new Date();
    date.setHours(date.getHours() + 1);
    var maxTime = time[1] || date;

    if (minTime > maxTime) {
        return clacTime();
    }
    return { minTime: minTime, maxTime: maxTime };
};

exports.default = {
    mixins: [_config2.default],
    components: { TimeSpinner: _timeSpinner2.default },

    computed: {
        showSeconds: function showSeconds() {
            return (this.format || '').indexOf('ss') !== -1;
        }
    },

    props: ['value', 'defaultValue'],

    data: function data() {
        var time = clacTime(this.defaultValue);
        return {
            popperClass: '',
            minTime: time.minTime,
            maxTime: time.maxTime,
            btnDisabled: isDisabled(time.minTime, time.maxTime),
            maxHours: time.maxTime.getHours(),
            maxMinutes: time.maxTime.getMinutes(),
            maxSeconds: time.maxTime.getSeconds(),
            minHours: time.minTime.getHours(),
            minMinutes: time.minTime.getMinutes(),
            minSeconds: time.minTime.getSeconds(),
            format: 'HH:mm:ss',
            visible: false,
            width: 0
        };
    },


    watch: {
        value: function value(newVal) {
            var _this = this;

            this.panelCreated();
            this.$nextTick(function (_) {
                return _this.ajustScrollTop();
            });
        }
    },

    methods: {
        panelCreated: function panelCreated() {
            var time = clacTime(this.value);
            if (time.minTime === this.minTime && time.maxTime === this.maxTime) {
                return;
            }

            this.handleMinChange({
                hours: time.minTime.getHours(),
                minutes: time.minTime.getMinutes(),
                seconds: time.minTime.getSeconds()
            });
            this.handleMaxChange({
                hours: time.maxTime.getHours(),
                minutes: time.maxTime.getMinutes(),
                seconds: time.maxTime.getSeconds()
            });
        },
        handleClear: function handleClear() {
            this.handleCancel();
        },
        handleCancel: function handleCancel() {
            this.$emit('pick');
        },
        handleChange: function handleChange() {
            if (this.minTime > this.maxTime) {
                return;
            }
            MIN_TIME.setFullYear(this.minTime.getFullYear());
            MIN_TIME.setMonth(this.minTime.getMonth(), this.minTime.getDate());
            MAX_TIME.setFullYear(this.maxTime.getFullYear());
            MAX_TIME.setMonth(this.maxTime.getMonth(), this.maxTime.getDate());
            this.$refs.minSpinner.selectableRange = [[MIN_TIME, this.maxTime]];
            this.$refs.maxSpinner.selectableRange = [[this.minTime, MAX_TIME]];
            this.handleConfirm(true);
        },
        handleMaxChange: function handleMaxChange(date) {
            if (date.hours !== undefined) {
                this.maxTime.setHours(date.hours);
                this.maxHours = this.maxTime.getHours();
            }
            if (date.minutes !== undefined) {
                this.maxTime.setMinutes(date.minutes);
                this.maxMinutes = this.maxTime.getMinutes();
            }
            if (date.seconds !== undefined) {
                this.maxTime.setSeconds(date.seconds);
                this.maxSeconds = this.maxTime.getSeconds();
            }
            this.handleChange();
        },
        handleMinChange: function handleMinChange(date) {
            if (date.hours !== undefined) {
                this.minTime.setHours(date.hours);
                this.minHours = this.minTime.getHours();
            }
            if (date.minutes !== undefined) {
                this.minTime.setMinutes(date.minutes);
                this.minMinutes = this.minTime.getMinutes();
            }
            if (date.seconds !== undefined) {
                this.minTime.setSeconds(date.seconds);
                this.minSeconds = this.minTime.getSeconds();
            }

            this.handleChange();
        },
        setMinSelectionRange: function setMinSelectionRange(start, end) {
            this.$emit('select-range', start, end);
        },
        setMaxSelectionRange: function setMaxSelectionRange(start, end) {
            this.$emit('select-range', start + 11, end + 11);
        },
        handleConfirm: function handleConfirm() {
            var visible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var first = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            var minSelectableRange = this.$refs.minSpinner.selectableRange;
            var maxSelectableRange = this.$refs.maxSpinner.selectableRange;

            this.minTime = (0, _index.limitRange)(this.minTime, minSelectableRange);
            this.maxTime = (0, _index.limitRange)(this.maxTime, maxSelectableRange);

            if (first) {
                return;
            }
            this.$emit('pick', [this.minTime, this.maxTime], visible, first);
        },
        ajustScrollTop: function ajustScrollTop() {
            this.$refs.minSpinner.ajustScrollTop();
            this.$refs.maxSpinner.ajustScrollTop();
        }
    },
    mounted: function mounted() {
        var _this2 = this;

        this.$nextTick(function () {
            return _this2.handleConfirm(true, true);
        });
    }
};

/***/ }),
/* 163 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "slide-up"
    },
    on: {
      "before-enter": _vm.panelCreated,
      "after-leave": function($event) {
        _vm.$emit('dodestroy')
      }
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.visible),
      expression: "visible"
    }],
    staticClass: "x-time-range-picker x-picker-panel",
    class: _vm.popperClass,
    style: ({
      width: _vm.width + 'px'
    })
  }, [_c('div', {
    staticClass: "x-time-range-picker-content"
  }, [_c('div', {
    staticClass: "x-time-range-picker-cell"
  }, [_c('div', {
    staticClass: "x-time-range-picker-header"
  }, [_vm._v(_vm._s(_vm.t('x.datepicker.startTime')))]), _vm._v(" "), _c('div', {
    staticClass: "x-time-range-picker-body x-time-panel-content",
    class: {
      'has-seconds': _vm.showSeconds
    }
  }, [_c('time-spinner', {
    ref: "minSpinner",
    attrs: {
      "show-seconds": _vm.showSeconds,
      "hours": _vm.minHours,
      "minutes": _vm.minMinutes,
      "seconds": _vm.minSeconds
    },
    on: {
      "change": _vm.handleMinChange,
      "select-range": _vm.setMinSelectionRange
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "x-time-range-picker-cell"
  }, [_c('div', {
    staticClass: "x-time-range-picker-header"
  }, [_vm._v(_vm._s(_vm.t('x.datepicker.endTime')))]), _vm._v(" "), _c('div', {
    staticClass: "x-time-range-picker-body x-time-panel-content",
    class: {
      'has-seconds': _vm.showSeconds
    }
  }, [_c('time-spinner', {
    ref: "maxSpinner",
    attrs: {
      "show-seconds": _vm.showSeconds,
      "hours": _vm.maxHours,
      "minutes": _vm.maxMinutes,
      "seconds": _vm.maxSeconds
    },
    on: {
      "change": _vm.handleMaxChange,
      "select-range": _vm.setMaxSelectionRange
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "x-time-panel-footer"
  }, [_c('button', {
    staticClass: "x-time-panel-btn cancel",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.handleCancel()
      }
    }
  }, [_vm._v(_vm._s(_vm.t('x.datepicker.clear')))]), _vm._v(" "), _c('button', {
    staticClass: "x-time-panel-btn confirm",
    attrs: {
      "type": "button",
      "disabled": _vm.btnDisabled
    },
    on: {
      "click": function($event) {
        _vm.handleConfirm()
      }
    }
  }, [_vm._v(_vm._s(_vm.t('x.datepicker.confirm')))])])])])
},staticRenderFns: []}

/***/ }),
/* 164 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('x-input', {
    directives: [{
      name: "clickoutside",
      rawName: "v-clickoutside",
      value: (_vm.handleClose),
      expression: "handleClose"
    }],
    ref: "reference",
    staticClass: "x-date-editor",
    class: 'x-date-editor-' + _vm.type,
    attrs: {
      "readonly": !_vm.editable || _vm.readonly,
      "disabled": _vm.disabled,
      "size": _vm.size,
      "placeholder": _vm.placeholder,
      "value": _vm.displayValue,
      "validateEvent": false
    },
    on: {
      "focus": _vm.handleFocus,
      "blur": _vm.handleBlur
    },
    nativeOn: {
      "keydown": function($event) {
        _vm.handleKeydown($event)
      },
      "change": function($event) {
        _vm.displayValue = $event.target.value
      }
    }
  }, [(_vm.haveTrigger) ? _c('i', {
    staticClass: "x-icon x-input-icon",
    class: [_vm.showClose ? 'x-icon-android-close' : _vm.triggerClass],
    on: {
      "click": _vm.handleClickIcon,
      "mouseenter": _vm.handleMouseEnterIcon,
      "mouseleave": function($event) {
        _vm.showClose = false
      }
    },
    slot: "icon"
  }) : _vm._e()]), _vm._v(" "), (_vm.type === 'time') ? _c('time-panel', {
    ref: "picker",
    attrs: {
      "default-value": _vm.currentValue,
      "popperClass": _vm.popperClass,
      "visible": _vm.pickerVisible,
      "date": _vm.pickerDateForTime
    }
  }) : _vm._e(), _vm._v(" "), (_vm.type === 'timerange') ? _c('time-range-panel', {
    ref: "picker",
    attrs: {
      "value": _vm.pickerValueForTimeRange,
      "default-value": _vm.currentValue,
      "popperClass": _vm.popperClass
    }
  }) : _vm._e()], 1)
},staticRenderFns: []}

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _timeSelect = __webpack_require__(166);

var _timeSelect2 = _interopRequireDefault(_timeSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _timeSelect2.default;

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(167),
  /* template */
  __webpack_require__(171),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pickerMixin = __webpack_require__(30);

var _pickerMixin2 = _interopRequireDefault(_pickerMixin);

var _timeSelect = __webpack_require__(168);

var _timeSelect2 = _interopRequireDefault(_timeSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    mixins: [_pickerMixin2.default],
    components: {
        Panel: _timeSelect2.default
    },
    name: 'XTimeSelect',
    beforeCreate: function beforeCreate() {
        this.type = 'time-select';
    }
};

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(169),
  /* template */
  __webpack_require__(170),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


var parseTime = function parseTime(time) {
    var values = ('' || time).split(':');
    if (values.length >= 2) {
        var hours = parseInt(values[0], 10);
        var minutes = parseInt(values[1], 10);

        return {
            hours: hours,
            minutes: minutes
        };
    }

    return null;
};

var compareTime = function compareTime(time1, time2) {
    var value1 = parseTime(time1);
    var value2 = parseTime(time2);

    var minutes1 = value1.minutes + value1.hours * 60;
    var minutes2 = value2.minutes + value2.hours * 60;

    if (minutes1 === minutes2) {
        return 0;
    }

    return minutes1 > minutes2 ? 1 : -1;
};

var formatTime = function formatTime(time) {
    return (time.hours < 10 ? '0' + time.hours : time.hours) + ':' + (time.minutes < 10 ? '0' + time.minutes : time.minutes);
};

var nextTime = function nextTime(time, step) {
    var timeValue = parseTime(time);
    var stepValue = parseTime(step);

    var next = {
        hours: timeValue.hours,
        minutes: timeValue.minutes
    };

    next.minutes += stepValue.minutes;
    next.hours += stepValue.hours;

    next.hours += Math.floor(next.minutes / 60);
    next.minutes = next.minutes % 60;

    return formatTime(next);
};

exports.default = {
    watch: {
        value: function value(val) {
            if (!val) {
                return;
            }
            if (this.minTime && compareTime(val, this.minTime) < 0) {
                this.$emit('pick');
            } else if (this.maxTime && compareTime(val, this.maxTime) > 0) {
                this.$emit('pick');
            }
        }
    },

    methods: {
        handleClick: function handleClick(item) {
            if (!item.disabled) {
                this.$emit('pick', item.value);
            }
        },
        handleClear: function handleClear() {
            this.$emit('pick');
        }
    },

    data: function data() {
        return {
            popperClass: '',
            start: '09:00',
            end: '18:00',
            step: '00:30',
            value: '',
            visible: false,
            minTime: '',
            maxTime: '',
            width: 0
        };
    },


    computed: {
        items: function items() {
            var start = this.start;
            var end = this.end;
            var step = this.step;

            var result = [];

            if (start && end && step) {
                var current = start;
                while (compareTime(current, end) <= 0) {
                    result.push({
                        value: current,
                        disabled: compareTime(current, this.minTime || '-1:-1') <= 0 || compareTime(current, this.maxTime || '100:100') >= 0
                    });
                    current = nextTime(current, step);
                }
            }

            return result;
        }
    }
};

/***/ }),
/* 170 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "x-slide-up"
    },
    on: {
      "after-leave": function($event) {
        _vm.$emit('dodestroy')
      }
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.visible),
      expression: "visible"
    }],
    staticClass: "x-picker-panel x-time-select",
    class: _vm.popperClass,
    style: ({
      width: _vm.width + 'px'
    })
  }, [_c('div', {
    staticClass: "x-picker-panel-content"
  }, _vm._l((_vm.items), function(item) {
    return _c('div', {
      staticClass: "x-time-select-item",
      class: {
        selected: _vm.value === item.value, disabled: item.disabled
      },
      attrs: {
        "disabled": item.disabled
      },
      on: {
        "click": function($event) {
          _vm.handleClick(item)
        }
      }
    }, [_vm._v(_vm._s(item.value))])
  }))])])
},staticRenderFns: []}

/***/ }),
/* 171 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('x-input', {
    directives: [{
      name: "clickoutside",
      rawName: "v-clickoutside",
      value: (_vm.handleClose),
      expression: "handleClose"
    }],
    ref: "reference",
    staticClass: "x-date-editor",
    class: 'x-date-editor-' + _vm.type,
    attrs: {
      "readonly": !_vm.editable || _vm.readonly,
      "disabled": _vm.disabled,
      "size": _vm.size,
      "placeholder": _vm.placeholder,
      "value": _vm.displayValue,
      "validateEvent": false
    },
    on: {
      "focus": _vm.handleFocus,
      "blur": _vm.handleBlur
    },
    nativeOn: {
      "keydown": function($event) {
        _vm.handleKeydown($event)
      },
      "change": function($event) {
        _vm.displayValue = $event.target.value
      }
    }
  }, [(_vm.haveTrigger) ? _c('i', {
    staticClass: "x-icon x-input-icon",
    class: [_vm.showClose ? 'x-icon-android-close' : _vm.triggerClass],
    on: {
      "click": _vm.handleClickIcon,
      "mouseenter": _vm.handleMouseEnterIcon,
      "mouseleave": function($event) {
        _vm.showClose = false
      }
    },
    slot: "icon"
  }) : _vm._e()]), _vm._v(" "), _c('panel', {
    ref: "picker",
    attrs: {
      "popperClass": _vm.popperClass
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inputNumber = __webpack_require__(173);

var _inputNumber2 = _interopRequireDefault(_inputNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _inputNumber2.default;

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(174),
  /* template */
  __webpack_require__(175),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _input = __webpack_require__(9);

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'x-input-number',
    components: {
        xInput: _input2.default
    },
    props: {
        step: {
            type: Number,
            default: 1
        },
        max: {
            type: Number,
            default: Infinity
        },
        min: {
            type: Number,
            default: 0
        },
        value: {
            default: 0
        },
        disabled: Boolean,
        size: {
            type: String,
            default: ''
        }
    },
    data: function data() {
        return {
            currentValue: 0
        };
    },

    methods: {
        minus: function minus() {
            if (this.disabled || this.minusDisabled) {
                return;
            }
            var value = this.value || 0;
            var newVal = this.decrease(value, this.step);
            if (newVal < this.min) {
                return;
            }
            this.setCurrentValue(newVal);
        },
        plus: function plus() {
            if (this.disabled || this.plusDisabled) {
                return;
            }
            var value = this.value || 0;
            var newVal = this.increase(value, this.step);
            if (newVal > this.max) {
                return;
            }
            this.setCurrentValue(newVal);
        },
        increase: function increase(val, step) {
            if (typeof val !== 'number') {
                return this.currentValue;
            }
            var precisionFactor = this.getPrecisionFactor(val);
            var precision = Math.abs(this.getMaxPrecision(val));
            var result = ((precisionFactor * val + precisionFactor * step) / precisionFactor).toFixed(precision);
            return this.toNumber(result);
        },
        decrease: function decrease(val, step) {
            if (typeof val !== 'number') {
                return this.currentValue;
            }
            var precisionFactor = this.getPrecisionFactor(val);
            var precision = Math.abs(this.getMaxPrecision(val));
            var result = ((precisionFactor * val - precisionFactor * step) / precisionFactor).toFixed(precision);
            return this.toNumber(result);
        },
        setCurrentValue: function setCurrentValue(newVal) {
            var oldVal = this.currentValue;
            if (newVal >= this.max) {
                newVal = this.max;
            }
            if (newVal <= this.min) {
                newVal = this.min;
            }
            if (oldVal === newVal) {
                return;
            }
            this.$emit('change', newVal, oldVal);
            this.$emit('input', newVal);
            this.currentValue = newVal;
        },
        isNotCompleteNumber: function isNotCompleteNumber(num) {
            return isNaN(num) || num === '' || num.toString().indexOf('.') === num.toString().length - 1;
        },
        getPrecision: function getPrecision(value) {
            var valueString = value.toString();
            if (valueString.indexOf('e-') >= 0) {
                return parseInt(valueString.slice(valueString.indexOf('e-') + 1), 10);
            }
            var precision = 0;
            if (valueString.indexOf('.') >= 0) {
                precision = valueString.length - valueString.indexOf('.') - 1;
            }
            return precision;
        },
        getMaxPrecision: function getMaxPrecision(currentValue) {
            var step = this.step;
            var stepPrecision = this.getPrecision(step);
            if (!currentValue) {
                return stepPrecision;
            }
            var currentValuePrecision = this.getPrecision(currentValue);
            return currentValuePrecision > stepPrecision ? currentValuePrecision : stepPrecision;
        },
        getPrecisionFactor: function getPrecisionFactor(currentValue) {
            var precision = this.getMaxPrecision(currentValue);
            return Math.pow(10, precision);
        },
        toPrecisionAsStep: function toPrecisionAsStep(num) {
            if (this.isNotCompleteNumber(num) || num === '') {
                return num;
            }
            var precision = Math.abs(this.getMaxPrecision(num));
            if (precision) {
                return Number(num).toFixed(precision);
            }
            return num.toString();
        },
        toNumber: function toNumber(num) {
            if (this.isNotCompleteNumber(num)) {
                return num;
            }
            return Number(num);
        },
        handleInput: function handleInput(value) {
            var newVal = Number(value);
            if (!isNaN(newVal)) {
                this.setCurrentValue(newVal);
            }
        },
        handleBlur: function handleBlur() {}
    },
    computed: {
        plusDisabled: function plusDisabled() {
            return this.increase(this.value, this.step) < this.min;
        },
        minusDisabled: function minusDisabled() {
            return this.decrease(this.value, this.step) > this.max;
        }
    },
    watch: {
        value: {
            immediate: true,
            handler: function handler(value) {
                var newVal = Number(value);
                if (isNaN(newVal)) {
                    return;
                }
                if (newVal >= this.max) {
                    newVal = this.max;
                }
                if (newVal <= this.min) {
                    newVal = this.min;
                }
                this.currentValue = newVal;
                this.$emit('input', newVal);
            }
        }
    }
};

/***/ }),
/* 175 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "x-input-number",
    class: [
      _vm.size ? 'x-input-number-' + _vm.size : '',
      {
        'is-disabled': _vm.disabled
      }
    ]
  }, [_c('span', {
    staticClass: "x-input-number-plus x-icon x-icon-plus",
    class: {
      'is-disabled': _vm.plusDisabled
    },
    on: {
      "click": _vm.plus
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "x-input-number-minus x-icon x-icon-minus",
    class: {
      'is-disabled': _vm.minusDisabled
    },
    on: {
      "click": _vm.minus
    }
  }), _vm._v(" "), _c('x-input', {
    attrs: {
      "value": _vm.currentValue,
      "disabled": _vm.disabled,
      "size": _vm.size
    },
    on: {
      "blur": _vm.handleBlur,
      "input": _vm.handleInput
    },
    nativeOn: {
      "keydown": [function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "up", 38)) { return null; }
        _vm.plus($event)
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "down", 40)) { return null; }
        _vm.minus($event)
      }]
    }
  }, [(_vm.$slots.prepend) ? _c('template', {
    slot: "prepend"
  }, [_vm._t("prepend")], 2) : _vm._e(), _vm._v(" "), (_vm.$slots.append) ? _c('template', {
    slot: "append"
  }, [_vm._t("append")], 2) : _vm._e()], 2)], 1)
},staticRenderFns: []}

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _textarea = __webpack_require__(177);

var _textarea2 = _interopRequireDefault(_textarea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _textarea2.default;

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(178),
  /* template */
  __webpack_require__(180),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _emitter = __webpack_require__(2);

var _emitter2 = _interopRequireDefault(_emitter);

var _calcTextareaHeight = __webpack_require__(179);

var _calcTextareaHeight2 = _interopRequireDefault(_calcTextareaHeight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'x-textarea',
    mixins: [_emitter2.default],
    props: {
        value: [String, Number],
        placeholder: String,
        autosize: {
            type: [Boolean, Object],
            default: false
        },
        disabled: Boolean,
        readonly: Boolean,
        name: String,
        rows: {
            type: Number,
            default: 2
        },
        maxlength: Number,
        minlength: Number,
        showMax: Boolean,
        autofocus: Boolean
    },
    data: function data() {
        return {
            currentValue: this.value,
            textareaStyle: {}
        };
    },

    methods: {
        handleFocus: function handleFocus(e) {
            this.$emit('focus', e);
        },
        handleBlur: function handleBlur(e) {
            this.$emit('blur', e);
            this.dispatch('XFormItem', 'x.form.blur', [this.currentValue]);
        },
        handleChange: function handleChange(e) {
            this.$emit('change', e);
        },
        resizeTextarea: function resizeTextarea() {
            if (!this.autosize) {
                return;
            }
            var minRows = this.autosize.minRows;
            var maxRows = this.autosize.maxRows;

            this.textareaStyle = (0, _calcTextareaHeight2.default)(this.$refs.textarea, minRows, maxRows);
        }
    },
    computed: {
        cls: function cls() {
            var cls = ['x-input'];
            this.disabled && cls.push('x-input-disabled');
            return cls.join(' ');
        }
    },
    watch: {
        value: function value(val, oldValue) {
            this.currentValue = val;
        },
        currentValue: function currentValue(val) {
            var _this = this;

            this.$nextTick(function (_) {
                _this.resizeTextarea();
            });
            this.$emit('change', val);
            this.$emit('input', val);
        }
    },
    mounted: function mounted() {
        this.resizeTextarea();
    }
};

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = calcTextareaHeight;
var hiddenTextarea = void 0;

var HIDDEN_STYLE = '\n    height:0 !important;\n    min-height:0 !important;\n    max-height:none !important;\n    visibility:hidden !important;\n    overflow:hidden !important;\n    position:absolute !important;\n    z-index:-1000 !important;\n    top:0 !important;\n    right:0 !important\n';

var CONTEXT_STYLE = ['letter-spacing', 'line-height', 'padding-top', 'padding-bottom', 'font-family', 'font-weight', 'font-size', 'text-rendering', 'text-transform', 'width', 'text-indent', 'padding-left', 'padding-right', 'border-width', 'box-sizing'];

function calculateNodeStyling(node) {
    var style = window.getComputedStyle(node);

    var boxSizing = style.getPropertyValue('box-sizing');

    var paddingSize = parseFloat(style.getPropertyValue('padding-bottom')) + parseFloat(style.getPropertyValue('padding-top'));

    var borderSize = parseFloat(style.getPropertyValue('border-bottom-width')) + parseFloat(style.getPropertyValue('border-top-width'));

    var contextStyle = CONTEXT_STYLE.map(function (name) {
        return name + ':' + style.getPropertyValue(name);
    }).join(';');

    return { contextStyle: contextStyle, paddingSize: paddingSize, borderSize: borderSize, boxSizing: boxSizing };
}

function calcTextareaHeight(targetNode) {
    var minRows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var maxRows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    if (!hiddenTextarea) {
        hiddenTextarea = document.createElement('textarea');
        document.body.appendChild(hiddenTextarea);
    }

    var _calculateNodeStyling = calculateNodeStyling(targetNode),
        paddingSize = _calculateNodeStyling.paddingSize,
        borderSize = _calculateNodeStyling.borderSize,
        boxSizing = _calculateNodeStyling.boxSizing,
        contextStyle = _calculateNodeStyling.contextStyle;

    hiddenTextarea.setAttribute('style', contextStyle + ';' + HIDDEN_STYLE);
    hiddenTextarea.value = targetNode.value || targetNode.placeholder || '';

    var height = hiddenTextarea.scrollHeight;
    var minHeight = -Infinity;
    var maxHeight = Infinity;

    if (boxSizing === 'border-box') {
        height = height + borderSize;
    } else if (boxSizing === 'content-box') {
        height = height - paddingSize;
    }

    hiddenTextarea.value = '';
    var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;

    if (minRows !== null) {
        minHeight = singleRowHeight * minRows;
        if (boxSizing === 'border-box') {
            minHeight = minHeight + paddingSize + borderSize;
        }
        height = Math.max(minHeight, height);
    }
    if (maxRows !== null) {
        maxHeight = singleRowHeight * maxRows;
        if (boxSizing === 'border-box') {
            maxHeight = maxHeight + paddingSize + borderSize;
        }
        height = Math.min(maxHeight, height);
    }

    return {
        height: height + 'px',
        minHeight: minHeight + 'px',
        maxHeight: maxHeight + 'px'
    };
}

/***/ }),
/* 180 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: [
      'x-input-wrap',
      {
        'is-disabled': _vm.disabled
      }
    ]
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.currentValue),
      expression: "currentValue"
    }],
    ref: "textarea",
    class: _vm.cls,
    style: (_vm.textareaStyle),
    attrs: {
      "placeholder": _vm.placeholder,
      "disabled": _vm.disabled,
      "rows": _vm.rows,
      "maxlength": _vm.maxlength,
      "minlength": _vm.minlength,
      "readonly": _vm.readonly,
      "name": _vm.name,
      "autofocus": _vm.autofocus
    },
    domProps: {
      "value": (_vm.currentValue)
    },
    on: {
      "focus": _vm.handleFocus,
      "blur": _vm.handleBlur,
      "change": _vm.handleChange,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.currentValue = $event.target.value
      }
    }
  }), _vm._v(" "), (_vm.maxlength && _vm.maxlength > 0 && _vm.showMax) ? _c('span', {
    staticClass: "max-text",
    class: {
      'max-reached': _vm.currentValue.length >= _vm.maxlength
    }
  }, [_vm._v(_vm._s(_vm.currentValue.length) + " / " + _vm._s(_vm.maxlength) + "\n    ")]) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(182),
  /* template */
  __webpack_require__(183),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _emitter = __webpack_require__(2);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'XCheckbox',
    componentName: 'XCheckbox',
    props: {
        value: {
            type: [String, Number, Boolean]
        },
        indeterminate: Boolean,
        disabled: Boolean
    },
    mixins: [_emitter2.default],
    data: function data() {
        return {
            focus: false,
            isInGroup: this.$parent.$options.name === 'x-checkbox-group'
        };
    },

    computed: {
        model: {
            get: function get() {
                return !this.isInGroup ? this.value : this.$parent.value;
            },
            set: function set(newVal) {
                if (!this.isInGroup) {
                    this.$emit('input', newVal);
                } else {
                    this.$parent.$emit('input', newVal);
                }
            }
        },
        isChecked: function isChecked() {
            var type = Object.prototype.toString.call(this.model);

            if (type === '[object Boolean]') {
                return this.model;
            } else if (type === '[object Array]') {
                return this.model.indexOf(this.value) > -1;
            } else if (type === '[object String]' || type === '[object Number]') {
                return this.value === this.model;
            }
        }
    },
    methods: {
        handleChange: function handleChange(e) {
            this.$emit('change', e);
            if (this.isInGroup) {
                this.dispatch('XCheckboxGroup', 'change', [this.$parent.value]);
            }
        },
        checkStatus: function checkStatus() {}
    }
};

/***/ }),
/* 183 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "x-checkbox"
  }, [_c('span', {
    staticClass: "x-checkbox-item",
    class: {
      'is-disabled': _vm.disabled,
      'is-checked': _vm.isChecked,
      'is-indeterminate': _vm.indeterminate,
      'is-focus': _vm.focus
    }
  }, [(!_vm.isInGroup) ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.model),
      expression: "model"
    }],
    staticClass: "x-checkbox-input",
    attrs: {
      "type": "checkbox",
      "disabled": _vm.disabled
    },
    domProps: {
      "checked": Array.isArray(_vm.model) ? _vm._i(_vm.model, null) > -1 : (_vm.model)
    },
    on: {
      "change": _vm.handleChange,
      "focus": function($event) {
        _vm.focus = true
      },
      "blur": function($event) {
        _vm.focus = false
      },
      "__c": function($event) {
        var $$a = _vm.model,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.model = $$a.concat($$v))
          } else {
            $$i > -1 && (_vm.model = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.model = $$c
        }
      }
    }
  }) : _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.model),
      expression: "model"
    }],
    staticClass: "x-checkbox-input",
    attrs: {
      "type": "checkbox",
      "disabled": _vm.disabled
    },
    domProps: {
      "value": _vm.value,
      "checked": Array.isArray(_vm.model) ? _vm._i(_vm.model, _vm.value) > -1 : (_vm.model)
    },
    on: {
      "change": _vm.handleChange,
      "focus": function($event) {
        _vm.focus = true
      },
      "blur": function($event) {
        _vm.focus = false
      },
      "__c": function($event) {
        var $$a = _vm.model,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = _vm.value,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.model = $$a.concat($$v))
          } else {
            $$i > -1 && (_vm.model = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.model = $$c
        }
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "x-checkbox-background"
  }), _vm._v(" "), _c('span', {
    staticClass: "x-checkbox-cbx"
  })]), _vm._v(" "), _c('span', {
    staticClass: "x-checkbox-text"
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _checkboxGroup = __webpack_require__(185);

var _checkboxGroup2 = _interopRequireDefault(_checkboxGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _checkboxGroup2.default;

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(186),
  /* template */
  __webpack_require__(187),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _emitter = __webpack_require__(2);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'x-checkbox-group',
    mixins: [_emitter2.default],
    props: {
        value: {}
    },
    watch: {
        value: function value(val) {
            this.$emit('change', val);
            this.dispatch('XFormItem', 'x.form.change', [val]);
        }
    }
};

/***/ }),
/* 187 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "x-checkbox-group"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _radio = __webpack_require__(189);

var _radio2 = _interopRequireDefault(_radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _radio2.default;

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(190),
  /* template */
  __webpack_require__(191),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'x-radio',
    props: {
        value: {
            type: [String, Number]
        },
        label: {
            type: [String, Number],
            required: true
        },
        disabled: Boolean
    },
    data: function data() {
        return {
            focus: false
        };
    },

    computed: {
        model: {
            get: function get() {
                return this.value !== undefined ? this.value : this.$parent.value;
            },
            set: function set(newVal) {
                if (this.value !== undefined) {
                    this.$emit('input', newVal);
                } else {
                    this.$parent.$emit('input', newVal);
                }
            }
        }
    }
};

/***/ }),
/* 191 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "x-radio"
  }, [_c('span', {
    staticClass: "x-radio-item",
    class: {
      'is-disabled': _vm.disabled,
      'is-checked': _vm.model === _vm.label,
        'is-focus': _vm.focus
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.model),
      expression: "model"
    }],
    staticClass: "x-radio-input",
    attrs: {
      "type": "radio",
      "disabled": _vm.disabled
    },
    domProps: {
      "value": _vm.label,
      "checked": _vm._q(_vm.model, _vm.label)
    },
    on: {
      "focus": function($event) {
        _vm.focus = true
      },
      "blur": function($event) {
        _vm.focus = false
      },
      "__c": function($event) {
        _vm.model = _vm.label
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "x-radio-background"
  }), _vm._v(" "), _c('span', {
    staticClass: "x-radio-cbx"
  })]), _vm._v(" "), _c('span', {
    staticClass: "x-radio-text"
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _radioButton = __webpack_require__(193);

var _radioButton2 = _interopRequireDefault(_radioButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _radioButton2.default;

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(194),
  /* template */
  __webpack_require__(195),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'x-radio-button',
    props: {
        label: {
            type: [String, Number],
            required: true
        },
        disabled: Boolean,
        name: String
    },
    data: function data() {
        return {
            size: this.$parent.size
        };
    },

    computed: {
        value: {
            get: function get() {
                return this.$parent.value;
            },
            set: function set(newValue) {
                this.$parent.$emit('input', newValue);
            }
        }
    }
};

/***/ }),
/* 195 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "x-radio-button",
    class: [
      _vm.size ? 'x-radio-button-' + _vm.size : '',
      {
        'is-active': _vm.value === _vm.label
      }
    ]
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.value),
      expression: "value"
    }],
    staticClass: "x-radio-input",
    attrs: {
      "type": "radio",
      "name": _vm.name,
      "disabled": _vm.disabled
    },
    domProps: {
      "value": _vm.label,
      "checked": _vm._q(_vm.value, _vm.label)
    },
    on: {
      "__c": function($event) {
        _vm.value = _vm.label
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "x-radio-button-text"
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _radioGroup = __webpack_require__(197);

var _radioGroup2 = _interopRequireDefault(_radioGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _radioGroup2.default;

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(198),
  /* template */
  __webpack_require__(199),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _emitter = __webpack_require__(2);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'x-radio-group',
    mixins: [_emitter2.default],
    props: {
        value: [String, Number],
        size: String
    },
    watch: {
        value: function value(_value) {
            this.$emit('change', _value);
            this.dispatch('XFormItem', 'x.form.change', [this.value]);
        }
    }
};

/***/ }),
/* 199 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "x-radio-group"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _loadingDirective = __webpack_require__(201);

var _loadingDirective2 = _interopRequireDefault(_loadingDirective);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _loadingDirective2.default;

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = __webpack_require__(12);

var _keys2 = _interopRequireDefault(_keys);

var _dom = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var XLoading = {
    install: function install(Vue) {
        var Mask = Vue.extend(__webpack_require__(202));

        var insertDom = function insertDom(parent, el, binding) {
            if (!el.domVisible) {
                (0, _keys2.default)(el.maskStyle).forEach(function (property) {
                    el.mask.style[property] = el.maskStyle[property];
                });

                if (el.originalPosition !== 'absolute') {
                    parent.style.position = 'relative';
                }
                if (binding.modifiers.fullscreen && binding.modifiers.lock) {
                    parent.style.overflow = 'hidden';
                }
                el.domVisible = true;

                parent.appendChild(el.mask);
                Vue.nextTick(function () {
                    el.instance.visible = true;
                });
                el.domInserted = true;
            }
        };

        var toggleLoading = function toggleLoading(el, binding) {
            if (binding.value) {
                Vue.nextTick(function () {
                    if (binding.modifiers.fullscreen) {
                        el.originalPosition = document.body.style.position;
                        el.originalOverflow = document.body.style.overflow;

                        (0, _dom.addClass)(el.mask, 'is-fullscreen');
                        insertDom(document.body, el, binding);
                    } else {
                        (0, _dom.removeClass)(el.mask, 'is-fullscreen');

                        if (binding.modifiers.body) {
                            el.originalPosition = document.body.style.position;

                            ['top', 'left'].forEach(function (property) {
                                var scroll = property === 'top' ? 'scrollTop' : 'scrollLeft';
                                el.maskStyle[property] = el.getBoundingClientRect()[property] + document.body[scroll] + document.documentElement[scroll] + 'px';
                            });
                            ['height', 'width'].forEach(function (property) {
                                el.maskStyle[property] = el.getBoundingClientRect()[property] + 'px';
                            });

                            insertDom(document.body, el, binding);
                        } else {
                            el.originalPosition = el.style.position;
                            insertDom(el, el, binding);
                        }
                    }
                });
            } else {
                if (el.domVisible) {
                    el.instance.$on('after-leave', function (_) {
                        el.domVisible = false;
                        if (binding.modifiers.fullscreen && el.originalOverflow !== 'hidden') {
                            document.body.style.overflow = el.originalOverflow;
                        }
                        if (binding.modifiers.fullscreen || binding.modifiers.body) {
                            document.body.style.position = el.originalPosition;
                        } else {
                            el.style.position = el.originalPosition;
                        }
                    });
                    el.instance.visible = false;
                }
            }
        };

        Vue.directive('loading', {
            bind: function bind(el, binding) {
                var mask = new Mask({
                    el: document.createElement('div'),
                    data: {
                        text: el.getAttribute('x-loading-text'),
                        fullscreen: !!binding.modifiers.fullscreen,
                        loadingType: el.getAttribute('x-loading-type') || 'circle',
                        size: el.getAttribute('x-loading-size'),
                        maskClass: el.getAttribute('x-loading-class')
                    }
                });
                el.instance = mask;
                el.mask = mask.$el;
                el.maskStyle = {};

                toggleLoading(el, binding);
            },

            update: function update(el, binding) {
                if (binding.oldValue !== binding.value) {
                    toggleLoading(el, binding);
                }
            },

            unbind: function unbind(el, binding) {
                if (el.domInserted) {
                    if (binding.modifiers.fullscreen || binding.modifiers.body) {
                        document.body.removeChild(el.mask);
                    } else {
                        el.mask && el.mask.parentNode && el.mask.parentNode.removeChild(el.mask);
                    }
                }
            }
        });
    }
};

exports.default = XLoading;

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(203),
  /* template */
  __webpack_require__(204),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    data: function data() {
        return {
            text: null,
            fullscreen: true,
            visible: false,
            maskClass: '',
            loadingType: 'circle',
            size: null
        };
    },

    computed: {
        imgSize: function imgSize() {
            if (this.size) {
                return this.size;
            }
            if (this.loadingType === 'circle') {
                return 40;
            }
            if (this.loadingType === 'grid') {
                return 40;
            }
            if (this.loadingType === 'dot') {
                return 50;
            }
            return 40;
        }
    },
    methods: {
        handleAfterLeave: function handleAfterLeave() {
            this.$emit('after-leave');
        }
    }
};

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "x-loading-fade"
    },
    on: {
      "after-leave": _vm.handleAfterLeave
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.visible),
      expression: "visible"
    }],
    staticClass: "x-loading-mask",
    class: [_vm.maskClass, {
      'is-fullscreen': _vm.fullscreen
    }]
  }, [_c('div', {
    staticClass: "x-loading-spinner"
  }, [(_vm.loadingType === 'circle') ? _c('img', {
    attrs: {
      "width": _vm.imgSize,
      "src": __webpack_require__(205)
    }
  }) : _vm._e(), _vm._v(" "), (_vm.loadingType === 'grid') ? _c('img', {
    attrs: {
      "width": _vm.imgSize,
      "src": __webpack_require__(206)
    }
  }) : _vm._e(), _vm._v(" "), (_vm.loadingType === 'dot') ? _c('img', {
    attrs: {
      "width": _vm.imgSize,
      "src": __webpack_require__(207)
    }
  }) : _vm._e(), _vm._v(" "), (_vm.text) ? _c('p', {
    staticClass: "x-loading-text"
  }, [_vm._v(_vm._s(_vm.text))]) : _vm._e()])])])
},staticRenderFns: []}

/***/ }),
/* 205 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCAzOCAzOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHJva2U9IiM0NkMzQzEiPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxIDEpIiBzdHJva2Utd2lkdGg9IjIiPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS1vcGFjaXR5PSIuNSIgY3g9IjE4IiBjeT0iMTgiIHI9IjE4Ii8+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOCI+CiAgICAgICAgICAgICAgICA8YW5pbWF0ZVRyYW5zZm9ybQogICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIKICAgICAgICAgICAgICAgICAgICB0eXBlPSJyb3RhdGUiCiAgICAgICAgICAgICAgICAgICAgZnJvbT0iMCAxOCAxOCIKICAgICAgICAgICAgICAgICAgICB0bz0iMzYwIDE4IDE4IgogICAgICAgICAgICAgICAgICAgIGR1cj0iMXMiCiAgICAgICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz4KICAgICAgICAgICAgPC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

/***/ }),
/* 206 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA1IiBoZWlnaHQ9IjEwNSIgdmlld0JveD0iMCAwIDEwNSAxMDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbD0iIzQ2QzNDMSI+CiAgICA8Y2lyY2xlIGN4PSIxMi41IiBjeT0iMTIuNSIgcj0iMTIuNSI+CiAgICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iZmlsbC1vcGFjaXR5IgogICAgICAgICBiZWdpbj0iMHMiIGR1cj0iMXMiCiAgICAgICAgIHZhbHVlcz0iMTsuMjsxIiBjYWxjTW9kZT0ibGluZWFyIgogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICAgIDwvY2lyY2xlPgogICAgPGNpcmNsZSBjeD0iMTIuNSIgY3k9IjUyLjUiIHI9IjEyLjUiIGZpbGwtb3BhY2l0eT0iLjUiPgogICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImZpbGwtb3BhY2l0eSIKICAgICAgICAgYmVnaW49IjEwMG1zIiBkdXI9IjFzIgogICAgICAgICB2YWx1ZXM9IjE7LjI7MSIgY2FsY01vZGU9ImxpbmVhciIKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgICA8L2NpcmNsZT4KICAgIDxjaXJjbGUgY3g9IjUyLjUiIGN5PSIxMi41IiByPSIxMi41Ij4KICAgICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJmaWxsLW9wYWNpdHkiCiAgICAgICAgIGJlZ2luPSIzMDBtcyIgZHVyPSIxcyIKICAgICAgICAgdmFsdWVzPSIxOy4yOzEiIGNhbGNNb2RlPSJsaW5lYXIiCiAgICAgICAgIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgPC9jaXJjbGU+CiAgICA8Y2lyY2xlIGN4PSI1Mi41IiBjeT0iNTIuNSIgcj0iMTIuNSI+CiAgICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iZmlsbC1vcGFjaXR5IgogICAgICAgICBiZWdpbj0iNjAwbXMiIGR1cj0iMXMiCiAgICAgICAgIHZhbHVlcz0iMTsuMjsxIiBjYWxjTW9kZT0ibGluZWFyIgogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICAgIDwvY2lyY2xlPgogICAgPGNpcmNsZSBjeD0iOTIuNSIgY3k9IjEyLjUiIHI9IjEyLjUiPgogICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImZpbGwtb3BhY2l0eSIKICAgICAgICAgYmVnaW49IjgwMG1zIiBkdXI9IjFzIgogICAgICAgICB2YWx1ZXM9IjE7LjI7MSIgY2FsY01vZGU9ImxpbmVhciIKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgICA8L2NpcmNsZT4KICAgIDxjaXJjbGUgY3g9IjkyLjUiIGN5PSI1Mi41IiByPSIxMi41Ij4KICAgICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJmaWxsLW9wYWNpdHkiCiAgICAgICAgIGJlZ2luPSI0MDBtcyIgZHVyPSIxcyIKICAgICAgICAgdmFsdWVzPSIxOy4yOzEiIGNhbGNNb2RlPSJsaW5lYXIiCiAgICAgICAgIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgPC9jaXJjbGU+CiAgICA8Y2lyY2xlIGN4PSIxMi41IiBjeT0iOTIuNSIgcj0iMTIuNSI+CiAgICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iZmlsbC1vcGFjaXR5IgogICAgICAgICBiZWdpbj0iNzAwbXMiIGR1cj0iMXMiCiAgICAgICAgIHZhbHVlcz0iMTsuMjsxIiBjYWxjTW9kZT0ibGluZWFyIgogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICAgIDwvY2lyY2xlPgogICAgPGNpcmNsZSBjeD0iNTIuNSIgY3k9IjkyLjUiIHI9IjEyLjUiPgogICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImZpbGwtb3BhY2l0eSIKICAgICAgICAgYmVnaW49IjUwMG1zIiBkdXI9IjFzIgogICAgICAgICB2YWx1ZXM9IjE7LjI7MSIgY2FsY01vZGU9ImxpbmVhciIKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgICA8L2NpcmNsZT4KICAgIDxjaXJjbGUgY3g9IjkyLjUiIGN5PSI5Mi41IiByPSIxMi41Ij4KICAgICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJmaWxsLW9wYWNpdHkiCiAgICAgICAgIGJlZ2luPSIyMDBtcyIgZHVyPSIxcyIKICAgICAgICAgdmFsdWVzPSIxOy4yOzEiIGNhbGNNb2RlPSJsaW5lYXIiCiAgICAgICAgIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgPC9jaXJjbGU+Cjwvc3ZnPgo="

/***/ }),
/* 207 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTIwIDMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiM0NkMzQzEiPgogICAgPGNpcmNsZSBjeD0iMTUiIGN5PSIxNSIgcj0iMTUiPgogICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIGZyb209IjE1IiB0bz0iMTUiCiAgICAgICAgICAgICAgICAgYmVnaW49IjBzIiBkdXI9IjAuOHMiCiAgICAgICAgICAgICAgICAgdmFsdWVzPSIxNTs5OzE1IiBjYWxjTW9kZT0ibGluZWFyIgogICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImZpbGwtb3BhY2l0eSIgZnJvbT0iMSIgdG89IjEiCiAgICAgICAgICAgICAgICAgYmVnaW49IjBzIiBkdXI9IjAuOHMiCiAgICAgICAgICAgICAgICAgdmFsdWVzPSIxOy41OzEiIGNhbGNNb2RlPSJsaW5lYXIiCiAgICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgICA8L2NpcmNsZT4KICAgIDxjaXJjbGUgY3g9IjYwIiBjeT0iMTUiIHI9IjkiIGZpbGwtb3BhY2l0eT0iMC4zIj4KICAgICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiBmcm9tPSI5IiB0bz0iOSIKICAgICAgICAgICAgICAgICBiZWdpbj0iMHMiIGR1cj0iMC44cyIKICAgICAgICAgICAgICAgICB2YWx1ZXM9Ijk7MTU7OSIgY2FsY01vZGU9ImxpbmVhciIKICAgICAgICAgICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICAgICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJmaWxsLW9wYWNpdHkiIGZyb209IjAuNSIgdG89IjAuNSIKICAgICAgICAgICAgICAgICBiZWdpbj0iMHMiIGR1cj0iMC44cyIKICAgICAgICAgICAgICAgICB2YWx1ZXM9Ii41OzE7LjUiIGNhbGNNb2RlPSJsaW5lYXIiCiAgICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgICA8L2NpcmNsZT4KICAgIDxjaXJjbGUgY3g9IjEwNSIgY3k9IjE1IiByPSIxNSI+CiAgICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgZnJvbT0iMTUiIHRvPSIxNSIKICAgICAgICAgICAgICAgICBiZWdpbj0iMHMiIGR1cj0iMC44cyIKICAgICAgICAgICAgICAgICB2YWx1ZXM9IjE1Ozk7MTUiIGNhbGNNb2RlPSJsaW5lYXIiCiAgICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iZmlsbC1vcGFjaXR5IiBmcm9tPSIxIiB0bz0iMSIKICAgICAgICAgICAgICAgICBiZWdpbj0iMHMiIGR1cj0iMC44cyIKICAgICAgICAgICAgICAgICB2YWx1ZXM9IjE7LjU7MSIgY2FsY01vZGU9ImxpbmVhciIKICAgICAgICAgICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICAgIDwvY2lyY2xlPgo8L3N2Zz4K"

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _msgCollection = __webpack_require__(66);

var _msgCollection2 = _interopRequireDefault(_msgCollection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixCls = 'x-message';
var iconPrefixCls = 'x-icon';
var prefixUuid = 'x_message_uuid_';

var iconTypes = {
    'info': 'information',
    'success': 'checkmark',
    'warning': 'alert',
    'error': 'close'
};

var xMessage = {
    install: function install(Vue) {
        var defaultDuration = 3000;
        var top = void 0;
        var messageInstance = void 0;
        var uuid = 1;

        function getMessageInstance() {
            messageInstance = messageInstance || _msgCollection2.default.newInstance(Vue, {
                prefixCls: prefixCls,
                styles: {
                    top: top + 'px'
                }
            });

            return messageInstance;
        }

        function message(content) {
            var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultDuration;
            var type = arguments[2];
            var onClose = arguments[3];

            if (!onClose) {
                onClose = function onClose() {};
            }
            var iconType = iconTypes[type];

            var instance = getMessageInstance();
            instance.msg({
                uuid: '' + prefixUuid + uuid,
                duration: duration,
                styles: {},
                transitionName: 'x-move-up',
                content: '\n                    <div class="' + prefixCls + '-custom-content ' + prefixCls + '-' + type + '">\n                        <div class="' + prefixCls + '-icon-wrap">\n                            <i class="' + iconPrefixCls + ' ' + iconPrefixCls + '-' + iconType + '"></i>\n                        </div>\n                        <div class="' + prefixCls + '-text-wrap">\n                            <span>' + content + '</span>\n                        </div>\n                    </div>\n                ',
                visible: true,
                onClose: onClose
            });

            return function () {
                var target = uuid++;

                return function () {
                    instance.remove('' + prefixUuid + target);
                };
            }();
        }

        Vue.prototype.$Message = {
            config: function config(options) {
                if (options.top) {
                    top = options.top;
                }
                if (options.duration) {
                    defaultDuration = options.duration;
                }
            },
            destroy: function destroy() {
                var instance = getMessageInstance();
                messageInstance = null;
                instance.destroy();
            }
        };

        ['info', 'success', 'warning', 'error'].forEach(function (type) {
            Vue.prototype.$Message[type] = function (content, duration, onClose) {
                return message(content, duration, type, onClose);
            };
        });
    }
};

exports.default = xMessage;

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(210),
  /* template */
  __webpack_require__(217),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(67);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _msg2 = __webpack_require__(214);

var _msg3 = _interopRequireDefault(_msg2);

var _merge = __webpack_require__(68);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixCls = 'x-messages';
var seed = 0;
var now = Date.now();

function getUuid() {
    return 'x-messages' + now + '_' + seed++;
}

exports.default = {
    name: 'XMsgCollection',
    components: { Msg: _msg3.default },
    props: {
        prefixCls: {
            type: String,
            default: prefixCls
        },
        styles: {
            type: Object,
            default: function _default() {
                return {
                    top: '65px',
                    left: '50%'
                };
            }
        },
        content: {
            type: String
        },
        className: {
            type: String
        }
    },
    data: function data() {
        return {
            messages: []
        };
    },

    computed: {
        classes: function classes() {
            return ['' + this.prefixCls, (0, _defineProperty3.default)({}, '' + this.className, !!this.className)];
        }
    },
    methods: {
        add: function add(msg) {
            var uuid = msg.uuid || getUuid();
            var _msg = (0, _merge2.default)({
                styles: {
                    right: '50%'
                },
                content: '',
                duration: 3000,
                closable: false,
                uuid: uuid,
                visible: true
            }, msg);

            this.messages.push(_msg);
        },
        close: function close(uuid) {
            var messages = this.messages;

            for (var i = 0; i < messages.length; i++) {
                if (messages[i].uuid === uuid) {
                    this.messages.splice(i, 1);
                    break;
                }
            }
        }
    }
};

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(212), __esModule: true };

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(213);
var $Object = __webpack_require__(4).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(10);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(11), 'Object', {defineProperty: __webpack_require__(7).f});

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(215),
  /* template */
  __webpack_require__(216),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(67);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'XMsg',
    props: {
        prefixCls: {
            type: String,
            default: ''
        },
        duration: {
            type: Number,
            default: 3000
        },
        content: {
            type: String,
            default: ''
        },
        styles: {
            type: Object,
            default: function _default() {
                return {
                    right: '50%'
                };
            }
        },
        closable: {
            type: Boolean,
            default: false
        },
        className: {
            type: String
        },
        uuid: {
            type: String,
            required: true
        },
        onClose: {
            type: Function
        },
        transitionName: {
            type: String
        },
        visible: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            withDesc: false
        };
    },

    computed: {
        baseClass: function baseClass() {
            return this.prefixCls + '-notice';
        },
        classes: function classes() {
            var _ref;

            return [this.baseClass, (_ref = {}, (0, _defineProperty3.default)(_ref, '' + this.className, !!this.className), (0, _defineProperty3.default)(_ref, this.baseClass + '-closable', this.closable), (0, _defineProperty3.default)(_ref, this.baseClass + '-with-desc', this.withDesc), _ref)];
        },
        contentClasses: function contentClasses() {
            return this.baseClass + '-content';
        }
    },
    methods: {
        clearCloseTimer: function clearCloseTimer() {
            if (this.closeTimer) {
                clearTimeout(this.closeTimer);
                this.closeTimer = null;
            }
        },
        close: function close() {
            this.onClose();
            this.clearCloseTimer();
            this.$parent.close(this.uuid);
        }
    },
    mounted: function mounted() {
        var _this = this;

        this.clearCloseTimer();

        if (this.duration !== 0) {
            this.closeTimer = setTimeout(function () {
                _this.close();
            }, this.duration);
        }

        if (this.prefixCls === 'x-message') {
            var $desc = this.$refs.content.querySelectorAll('.' + this.prefixCls + '-desc')[0];
            this.withDesc = $desc ? $desc.innerHTML !== '' : false;
        }
    },
    beforeDestroy: function beforeDestroy() {
        this.clearCloseTimer();
    }
};

/***/ }),
/* 216 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": _vm.transitionName
    }
  }, [_c('div', {
    class: _vm.classes,
    style: (_vm.styles)
  }, [_c('div', {
    ref: "content",
    class: [_vm.baseClass + '-content'],
    domProps: {
      "innerHTML": _vm._s(_vm.content)
    }
  }), _vm._v(" "), (_vm.closable) ? _c('a', {
    class: [_vm.baseClass + '-close'],
    on: {
      "click": _vm.close
    }
  }, [_c('i', {
    staticClass: "x-icon x-icon-android-close"
  })]) : _vm._e()])])
},staticRenderFns: []}

/***/ }),
/* 217 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.classes,
    style: (_vm.styles)
  }, _vm._l((_vm.messages), function(msg) {
    return _c('Msg', {
      key: msg.uuid,
      attrs: {
        "prefix-cls": _vm.prefixCls,
        "styles": msg.styles,
        "content": msg.content,
        "duration": msg.duration,
        "closable": msg.closable,
        "uuid": msg.uuid,
        "transition-name": msg.transitionName,
        "on-close": msg.onClose,
        "visible": msg.visible
      }
    })
  }))
},staticRenderFns: []}

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _msgCollection = __webpack_require__(66);

var _msgCollection2 = _interopRequireDefault(_msgCollection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixCls = 'x-notice';
var iconPrefixCls = 'x-icon';
var prefixUuid = 'x_notice_uuid_';

var iconTypes = {
    'info': 'information-circled',
    'success': 'checkmark-circled',
    'warning': 'android-alert',
    'error': 'close-circled'
};

var xNotice = {
    install: function install(Vue) {
        var defaultDuration = 4500;
        var top = 24;
        var noticeInstance = void 0;
        var uuid = 1;

        function getNoticeInstance() {
            noticeInstance = noticeInstance || _msgCollection2.default.newInstance(Vue, {
                prefixCls: prefixCls,
                styles: {
                    top: top + 'px',
                    right: 0
                }
            });

            return noticeInstance;
        }

        function notice(type, options) {
            var title = options.title || '';
            var desc = options.desc || '';
            var noticeUuid = options.uuid || '' + prefixUuid + uuid;
            var onClose = options.onClose || function () {};
            var duration = options.duration === 0 ? 0 : options.duration || defaultDuration;

            uuid++;

            var instance = getNoticeInstance();

            var content = void 0;

            var withDesc = desc === '' ? '' : ' ' + prefixCls + '-with-desc';

            if (type === 'normal') {
                content = '\n                    <div class="' + prefixCls + '-custom-content ' + prefixCls + '-with-normal' + withDesc + '">\n                        <div class="' + prefixCls + '-title">' + title + '</div>\n                        <div class="' + prefixCls + '-desc">' + desc + '</div>\n                    </div>\n                ';
            } else {
                var iconType = iconTypes[type];
                content = '\n                    <div class="' + prefixCls + '-custom-content ' + prefixCls + '-with-icon\n                        ' + prefixCls + '-with-' + type + withDesc + '">\n                        <span class="' + prefixCls + '-icon ' + prefixCls + '-icon-' + type + '">\n                            <i class="' + iconPrefixCls + ' ' + iconPrefixCls + '-' + iconType + '"></i>\n                        </span>\n                        <div class="' + prefixCls + '-title">' + title + '</div>\n                        <div class="' + prefixCls + '-desc">' + desc + '</div>\n                    </div>\n                ';
            }

            instance.msg({
                name: noticeUuid.toString(),
                duration: duration,
                styles: {},
                transitionName: 'x-move-notice',
                content: content,
                onClose: onClose,
                closable: true
            });
        };

        Vue.prototype.$Notice = {
            config: function config(options) {
                if (options.top) {
                    top = options.top;
                }
                if (options.duration || options.duration === 0) {
                    defaultDuration = options.duration;
                }
            },
            close: function close(name) {
                if (name) {
                    name = name.toString();
                    if (noticeInstance) {
                        noticeInstance.remove(name);
                    }
                } else {
                    return false;
                }
            },
            destroy: function destroy() {
                var instance = getNoticeInstance();
                noticeInstance = null;
                instance.destroy();
            }
        };

        Vue.prototype.$Notice.open = function (options) {
            return notice('normal', options);
        };

        ['info', 'success', 'warning', 'error'].forEach(function (type) {
            Vue.prototype.$Notice[type] = function (options) {
                return notice(type, options);
            };
        });
    }
};

exports.default = xNotice;

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(220),
  /* template */
  __webpack_require__(225),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _button = __webpack_require__(29);

var _button2 = _interopRequireDefault(_button);

var _getScrollBarSize = __webpack_require__(224);

var _getScrollBarSize2 = _interopRequireDefault(_getScrollBarSize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'XModal',
    components: { XButton: _button2.default },
    props: {
        value: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: ''
        },
        content: {
            type: String,
            default: ''
        },
        styles: {
            type: Object
        },
        contentStyle: {
            type: Object
        },
        size: {
            type: String,
            default: 'middle'
        },
        className: {
            type: String,
            default: ''
        },
        showHeader: {
            type: Boolean,
            default: true
        },
        showFooter: {
            type: Boolean,
            default: true
        },
        showCloseButton: {
            type: Boolean,
            default: true
        },
        showOkButton: {
            type: Boolean,
            default: true
        },
        showCancelButton: {
            type: Boolean,
            default: true
        },
        maskClosable: {
            type: Boolean,
            default: true
        },
        scrollable: {
            type: Boolean,
            default: false
        },
        okText: {
            type: String,
            default: '确定'
        },
        cancelText: {
            type: String,
            default: '取消'
        },
        onOk: {
            type: Function,
            default: function _default() {}
        },
        onCancel: {
            type: Function,
            default: function _default() {}
        }
    },
    data: function data() {
        return {
            show: false,
            scrollBarWidth: 0
        };
    },

    watch: {
        value: function value(val) {
            this.show = val;
            if (this.scrollable) {
                return;
            }
            if (val) {
                document.body.style.overflow = 'hidden';
                this.scrollBarWidth = (0, _getScrollBarSize2.default)();
            } else {
                document.body.style.overflow = 'auto';
                this.scrollBarWidth = 0;
            }
            document.body.style.paddingRight = this.scrollBarWidth + 'px';
        },
        show: function show(val) {
            this.$emit('input', val);
        }
    },
    computed: {
        sizeClass: function sizeClass() {
            return 'x-modal-size-' + this.size;
        },
        modalClass: function modalClass() {
            return this.sizeClass + ' ' + this.className;
        }
    },
    methods: {
        close: function close(e) {
            this.show = false;
        },
        handleWrapperClick: function handleWrapperClick(e) {
            if (e.target === this.$refs.modalWrapper) {
                this.maskClose();
            }
        },
        maskClose: function maskClose() {
            if (this.maskClosable) {
                this.cancel();
            }
        },
        ok: function ok() {
            var noClose = typeof this.onOk === 'function' && this.onOk();
            if (!noClose) {
                this.close();
            }
        },
        cancel: function cancel() {
            var noClose = typeof this.onCancel === 'function' && this.onCancel();
            if (!noClose) {
                this.close();
            }
        }
    }
};

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(222),
  /* template */
  __webpack_require__(223),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'x-button',
    props: {
        type: {
            type: String,
            default: ''
        },
        size: {
            type: String,
            default: ''
        },
        disabled: Boolean,
        loading: Boolean,
        icon: {
            type: String,
            default: ''
        }
    },
    computed: {
        cls: function cls() {
            var cls = ['x-btn'];
            this.type && cls.push('x-btn-' + this.type);
            this.size && cls.push('x-btn-' + this.size);
            this.loading && cls.push('x-btn-loading');
            return cls.join(' ');
        }
    },
    data: function data() {
        return {};
    },

    methods: {
        handleClick: function handleClick(e) {
            this.$emit('click', e);
        },
        handleMouseEnter: function handleMouseEnter(e) {
            this.$emit('mouseenter', e);
        },
        handleMouseLeave: function handleMouseLeave(e) {
            this.$emit('mouseleave', e);
        }
    }
};

/***/ }),
/* 223 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    class: _vm.cls,
    attrs: {
      "disabled": _vm.disabled
    },
    on: {
      "click": _vm.handleClick,
      "mouseenter": _vm.handleMouseEnter,
      "mouseleave": _vm.handleMouseLeave
    }
  }, [(_vm.loading) ? _c('i', {
    staticClass: "x-icon x-icon-load-c x-icon-addon-spin"
  }) : _vm._e(), _vm._v(" "), (_vm.icon && !_vm.loading) ? _c('i', {
    class: 'x-icon x-icon-' + _vm.icon
  }) : _vm._e(), _vm._v(" "), (_vm.$slots.default) ? _c('span', [_vm._t("default")], 2) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (fresh) {
    if (fresh || cached === undefined) {
        var inner = document.createElement('div');
        inner.style.width = '100%';
        inner.style.height = '200px';

        var outer = document.createElement('div');
        var outerStyle = outer.style;

        outerStyle.position = 'absolute';
        outerStyle.top = 0;
        outerStyle.left = 0;
        outerStyle.pointerEvents = 'none';
        outerStyle.visibility = 'hidden';
        outerStyle.width = '200px';
        outerStyle.height = '150px';
        outerStyle.overflow = 'hidden';

        outer.appendChild(inner);

        document.body.appendChild(outer);

        var widthContained = inner.offsetWidth;
        outer.style.overflow = 'scroll';
        var widthScroll = inner.offsetWidth;

        if (widthContained === widthScroll) {
            widthScroll = outer.clientWidth;
        }

        document.body.removeChild(outer);

        cached = widthContained - widthScroll;
    }
    return cached;
};

var cached = void 0;

/***/ }),
/* 225 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('transition', {
    attrs: {
      "name": "x-fade"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    ref: "modal-mask",
    staticClass: "x-modal-mask",
    on: {
      "click": _vm.maskClose
    }
  })]), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "x-modal-zoom"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    ref: "modalWrapper",
    staticClass: "x-modal-wrapper",
    on: {
      "click": _vm.handleWrapperClick
    }
  }, [_c('div', {
    staticClass: "x-modal",
    class: _vm.modalClass,
    style: (_vm.styles)
  }, [(_vm.showHeader) ? _c('div', {
    staticClass: "x-modal-header"
  }, [_vm._t("header", [_c('span', {
    staticClass: "x-modal-title"
  }, [_vm._v(_vm._s(_vm.title))])]), _vm._v(" "), _vm._t("close", [(_vm.showCloseButton) ? _c('button', {
    staticClass: "x-modal-header-close",
    attrs: {
      "type": "button",
      "data-dismiss": "modal"
    },
    on: {
      "click": _vm.cancel
    }
  }, [_c('i', {
    staticClass: "x-icon x-icon-android-close"
  })]) : _vm._e()])], 2) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "x-modal-body",
    style: (_vm.contentStyle)
  }, [_vm._t("default", [_vm._v(_vm._s(_vm.content))])], 2), _vm._v(" "), (_vm.showFooter) ? _c('div', {
    staticClass: "x-modal-footer"
  }, [_vm._t("footer", [(_vm.showCancelButton) ? _c('x-button', {
    on: {
      "click": _vm.cancel
    }
  }, [_vm._v(_vm._s(_vm.cancelText))]) : _vm._e(), _vm._v(" "), (_vm.showOkButton) ? _c('x-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.ok
    }
  }, [_vm._v(_vm._s(_vm.okText))]) : _vm._e()])], 2) : _vm._e()])])])], 1)
},staticRenderFns: []}

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof2 = __webpack_require__(28);

var _typeof3 = _interopRequireDefault(_typeof2);

var _keys = __webpack_require__(12);

var _keys2 = _interopRequireDefault(_keys);

var _modal = __webpack_require__(69);

var _modal2 = _interopRequireDefault(_modal);

var _merge = __webpack_require__(68);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var camelcaseToHyphen = function camelcaseToHyphen(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};
var isEmptyObject = function isEmptyObject(obj) {
    return !(0, _keys2.default)(obj).length;
};

var Dialog = {
    install: function install(Vue) {
        var modalInstance = void 0;

        var defaultConfig = {
            show: false,
            content: '',
            isRawHTML: false,
            title: '提示',
            style: {},
            contentStyle: {},
            size: 'middle',
            className: '',
            showFooter: true,
            showHeader: true,
            showCloseButton: true,
            showOkButton: true,
            showCancelButton: true,
            maskClosable: true,
            scrollable: false,
            okText: '确定',
            cancelText: '取消',
            onOk: function onOk() {},
            onCancel: function onCancel() {}
        };
        var newModalInstance = function newModalInstance() {
            var PROPERTIES = ['title', 'style', 'contentStyle', 'size', 'className', 'showFooter', 'showHeader', 'showCloseButton', 'showOkButton', 'showCancelButton', 'maskClosable', 'scrollable', 'okText', 'cancelText', 'onOk', 'onCancel'];

            var div = document.createElement('div');
            var propsString = PROPERTIES.reduce(function (preValue, curValue) {
                return preValue + ' :' + camelcaseToHyphen(curValue) + '="' + curValue + '"';
            }, '');
            div.innerHTML = '\n                <Modal' + propsString + ' v-model="show">\n                    <template v-if="!isRawHTML">\n                        {{content}}\n                    </template>\n                    <div v-else v-html="content">\n                    </div>\n                </Modal>\n            ';
            document.body.appendChild(div);

            var modalVM = new Vue({
                el: div,
                components: {
                    Modal: _modal2.default
                },
                data: function data() {
                    return (0, _merge2.default)({}, defaultConfig);
                },

                methods: {
                    setDefault: function setDefault() {
                        var _this = this;

                        (0, _keys2.default)(defaultConfig).forEach(function (key) {
                            _this[key] = defaultConfig[key];
                        });
                    }
                }
            });

            return {
                show: function show(props) {
                    props = !props || isEmptyObject(props) ? {} : props;
                    modalVM.setDefault();
                    modalVM.content = props.content ? props.content : '';
                    (0, _keys2.default)(props).forEach(function (propKey) {
                        modalVM[propKey] = props[propKey];
                    });
                    modalVM.show = true;
                },
                remove: function remove() {
                    modalVM.show = false;
                },
                _chooseContentMode: function _chooseContentMode(isRawHTML) {
                    modalVM.isRawHTML = !!isRawHTML;
                }
            };
        };

        var getModalInstance = function getModalInstance(isRawHTML) {
            modalInstance = modalInstance || newModalInstance();
            modalInstance._chooseContentMode(isRawHTML);
            return modalInstance;
        };

        Vue.prototype.$Dialog = {
            show: function show(options, isRawHTML) {
                var instance = getModalInstance(isRawHTML);
                instance.show(options);
            },
            close: function close() {
                if (!modalInstance) {
                    return false;
                }
                var instance = getModalInstance();
                instance.remove();
            },
            confirm: function confirm(title, content, onOk, onCancel, isRawHTML) {
                var options = {};
                var type = isRawHTML;
                if ((typeof title === 'undefined' ? 'undefined' : (0, _typeof3.default)(title)) === 'object') {
                    options = title;
                    type = content;
                } else {
                    options.title = title;
                    options.content = content;
                    options.onOk = onOk;
                    options.onCancel = onCancel;
                }
                options.showCancelButton = true;
                this.show(options, type);
            },
            alert: function alert(content, onOk) {
                var options = {
                    showCancelButton: false,
                    showCloseButton: false,
                    size: 'small',
                    maskClosable: false,
                    okText: '确定',
                    scrollable: false
                };
                options.content = content;
                options.onOk = onOk;
                this.show(options);
            }
        };
    }
};

exports.default = Dialog;

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pageloading = __webpack_require__(228);

var _pageloading2 = _interopRequireDefault(_pageloading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var XPageLoading = {
    install: function install(Vue) {
        var pageLoadingInstance = void 0;
        var newPageLoadingInstance = function newPageLoadingInstance() {
            var div = document.createElement('div');
            div.innerHTML = '<pageloading ref="pageloading" :color="color" :speed="speed"></pageloading>';
            document.body.appendChild(div);

            var pageLoadingVM = new Vue({
                el: div,
                components: {
                    Pageloading: _pageloading2.default
                },
                data: function data() {
                    return {
                        speed: 350,
                        color: '#46c3c1'
                    };
                },

                methods: {
                    start: function start() {
                        var _this = this;

                        this.$nextTick(function () {
                            _this.$refs.pageloading.start();
                        });
                    },
                    done: function done() {
                        var _this2 = this;

                        this.$nextTick(function () {
                            _this2.$refs.pageloading.done();
                        });
                    },
                    error: function error() {
                        var _this3 = this;

                        this.$nextTick(function () {
                            _this3.$refs.pageloading.error();
                        });
                    },
                    config: function config(options) {
                        this.speed = options.speed || this.speed;
                        this.color = options.color || this.color;
                    }
                }
            });

            return pageLoadingVM;
        };

        var getPageLoadingInstance = function getPageLoadingInstance(isRawHTML) {
            pageLoadingInstance = pageLoadingInstance || newPageLoadingInstance();
            return pageLoadingInstance;
        };

        Vue.prototype.$PageLoading = {
            start: function start() {
                var instance = getPageLoadingInstance();
                instance.start();
            },
            done: function done() {
                var instance = getPageLoadingInstance();
                instance.done();
            },
            error: function error() {
                var instance = getPageLoadingInstance();
                instance.error();
            },
            config: function config(options) {
                var instance = getPageLoadingInstance();
                instance.config(options);
            }
        };
    }
};

exports.default = XPageLoading;

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(229),
  /* template */
  __webpack_require__(230),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'XPageLoading',
    data: function data() {
        return {
            easing: 'linear',
            positionUsing: '',
            status: null,
            template: '<div class="bar" role="bar"><div class="peg" role="peg"></div></div>',
            parent: 'body',
            barSelector: '[role="bar"]',
            pegSelector: '[role="peg"]',
            errorColor: '#f04134'
        };
    },

    props: {
        minimum: {
            type: Number,
            default: 0.08
        },
        speed: {
            type: Number,
            default: 350
        },
        trickled: {
            type: Boolean,
            default: true
        },
        trickleSpeed: {
            type: Number,
            default: 250
        },
        color: {
            type: String,
            default: '#46c3c1'
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

            test(function (next) {
                if (me.positionUsing === '') {
                    me.positionUsing = me.getPositioningCSS();
                };
                me.css(bar, me.barPositionCSS(n, speed, ease));
                if (n === 1) {
                    me.css(progress, {
                        transition: 'none',
                        opacity: 1
                    });
                    progress.offsetWidth;

                    setTimeout(function () {
                        me.css(progress, {
                            transition: 'transform ' + speed + 'ms linear',
                            opacity: 0
                        });
                        setTimeout(function () {
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
                setTimeout(function () {
                    if (!_this.status) {
                        return;
                    };
                    _this.trickle();
                    work();
                }, _this.trickleSpeed);
            };
            if (this.trickled) {
                work();
            }

            return this;
        },
        done: function done(force) {
            if (!force && !this.status) {
                return this;
            }
            return this.inc(0.3 + 0.5 * Math.random()).set(1);
        },
        error: function error(force) {
            if (!force && !this.status) {
                return this;
            }
            var started = this.isStarted();
            var progress = this.render(!started);
            var bar = progress.querySelector(this.barSelector);
            var peg = progress.querySelector(this.pegSelector);
            this.css(bar, {
                background: this.errorColor
            });
            this.css(peg, {
                boxShadow: '0 0 10px ' + this.errorColor + ', 0 0 5px ' + this.errorColor
            });
            return this.inc(0.3 + 0.5 * Math.random()).set(1);
        },

        queue: function () {
            var pending = [];

            function next() {
                var fn = pending.shift();
                if (fn) {
                    fn(next);
                }
            };

            return function (fn) {
                pending.push(fn);
                if (pending.length === 1) {
                    next();
                };
            };
        }(),
        render: function render(fromStart) {
            if (this.isRendered()) {
                return document.getElementById('x-pageloading');
            }

            this.addClass(document.documentElement, 'x-pageloading-busy');

            var progress = document.createElement('div');
            progress.id = 'x-pageloading';
            progress.innerHTML = this.template;

            var bar = progress.querySelector(this.barSelector);
            var perc = fromStart ? '-100' : this.toBarPerc(this.status || 0);
            var parent = document.querySelector(this.parent);

            var color = this.color;

            this.css(bar, {
                transition: 'transform 0 linear',
                transform: 'translate3d(' + perc + '%,0,0)',
                background: color
            });

            var peg = progress.querySelector(this.pegSelector);
            this.css(peg, {
                boxShadow: '0 0 10px ' + color + ', 0 0 5px ' + color
            });

            if (parent !== document.body) {
                this.addClass(parent, 'x-pageloading-custom-parent');
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

            if (this.positionUsing === 'translate3d') {
                barCSS = { transform: 'translate3d(' + this.toBarPerc(n) + '%,0,0)' };
            } else if (this.positionUsing === 'translate') {
                barCSS = { transform: 'translate(' + this.toBarPerc(n) + '%,0)' };
            } else {
                barCSS = { 'margin-left': this.toBarPerc(n) + '%' };
            }

            barCSS.transition = 'transform ' + speed + 'ms ' + ease;

            return barCSS;
        },

        css: function () {
            var cssPrefixes = ['Webkit', 'O', 'Moz', 'ms'];
            var cssProps = {};

            function camelCase(string) {
                return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function (match, letter) {
                    return letter.toUpperCase();
                });
            }

            function getVendorProp(name) {
                var style = document.body.style;
                if (name in style) {
                    return name;
                };
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

            return function (element, properties) {
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
            this.removeClass(document.documentElement, 'x-pageloading-busy');
            this.removeClass(document.querySelector(this.parent), 'x-pageloading-custom-parent');
            var progress = document.getElementById('x-pageloading');
            progress && this.removeElement(progress);
        },
        removeClass: function removeClass(element) {
            var oldList = this.classList(element);
            var newList = void 0;
            if (!this.hasClass(element, name)) {
                return;
            }

            newList = oldList.replace(' ' + name + ' ', ' ');

            element.className = newList.substring(1, newList.length - 1);
        },
        getPositioningCSS: function getPositioningCSS() {
            var bodyStyle = document.body.style;

            var vendorPrefix = void 0;

            if ('WebkitTransform' in bodyStyle) {
                vendorPrefix = 'Webkit';
            } else if ('MozTransform' in bodyStyle) {
                vendorPrefix = 'Moz';
            } else if ('msTransform' in bodyStyle) {
                vendorPrefix = 'ms';
            } else if ('OTransform' in bodyStyle) {
                vendorPrefix = 'O';
            } else {
                vendorPrefix = '';
            };

            if (vendorPrefix + 'Perspective' in bodyStyle) {
                return 'translate3d';
            } else if (vendorPrefix + 'Transform' in bodyStyle) {
                return 'translate';
            }
            return 'margin';
        },
        toBarPerc: function toBarPerc(n) {
            return (-1 + n) * 100;
        },
        isStarted: function isStarted() {
            return typeof this.status === 'number';
        },
        isRendered: function isRendered() {
            return !!document.getElementById('x-pageloading');
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
            var list = typeof element === 'string' ? element : this.classList(element);
            return list.indexOf(' ' + name + ' ') >= 0;
        },
        classList: function classList(element) {
            return (' ' + (element && element.className || '') + ' ').replace(/\s+/gi, ' ');
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
            if (typeof amount !== 'number') {
                if (n >= 0 && n < 0.25) {
                    amount = (Math.random() * (5 - 3 + 1) + 3) / 100;
                } else if (n >= 0.25 && n < 0.65) {
                    amount = Math.random() * 3 / 100;
                } else if (n >= 0.65 && n < 0.9) {
                    amount = Math.random() * 2 / 100;
                } else if (n >= 0.9 && n < 0.99) {
                    amount = 0.005;
                } else {
                    amount = 0;
                }
            }

            n = this.clamp(n + amount, 0, 0.994);
            return this.set(n);
        }
    }
};

/***/ }),
/* 230 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span')
},staticRenderFns: []}

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(232),
  /* template */
  __webpack_require__(244),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _button = __webpack_require__(29);

var _button2 = _interopRequireDefault(_button);

var _buttonGroup = __webpack_require__(45);

var _buttonGroup2 = _interopRequireDefault(_buttonGroup);

var _select = __webpack_require__(70);

var _select2 = _interopRequireDefault(_select);

var _option = __webpack_require__(72);

var _option2 = _interopRequireDefault(_option);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'XPagination',
    components: { XButton: _button2.default, XSelect: _select2.default, XOption: _option2.default, XButtonGroup: _buttonGroup2.default },
    props: {
        'type': {
            type: String,
            default: 'standard' },
        'currentPageNum': {
            type: Number,
            default: 1
        },
        'total': {
            type: Number,
            default: 0
        },
        'pageSize': {
            type: Number,
            default: 20
        },
        'showTotal': {
            type: Boolean,
            default: false
        },
        'showSizer': {
            type: Boolean,
            default: false
        },
        'pageSizeRange': {
            type: Array,
            default: function _default() {
                return [10, 20, 50, 100];
            }
        },
        'rangeLength': {
            type: Number,
            default: 5,
            coerce: function coerce(val) {
                if (val < 1) {
                    return 1;
                }
                return val;
            }
        }
    },
    data: function data() {
        return {
            internalPageSize: this.pageSize,
            quickPrevIconCls: 'x-icon-more',
            quickNextIconCls: 'x-icon-more'
        };
    },

    computed: {
        showQuickPrevIcon: function showQuickPrevIcon() {
            return this.getRangePage.begin > 1;
        },
        showQuickNextIcon: function showQuickNextIcon() {
            return this.getRangePage.end < this.totalPageCount;
        },
        totalPageCount: function totalPageCount() {
            return Math.ceil(this.total / this.internalPageSize);
        },
        getRangePage: function getRangePage() {
            var curPage = this.currentPageNum;
            var midpoint = curPage;

            var pageRange = this.rangeLength - 1;

            var leftHand = Math.floor(pageRange / 2);

            var rightHand = Math.ceil(pageRange / 2);
            var totalPage = this.totalPageCount;
            var result = {
                begin: 1,
                end: 1
            };

            if (!midpoint) {
                result.begin = curPage - leftHand;
                result.end = curPage + rightHand;
            } else {
                result.begin = midpoint - leftHand;
                result.end = midpoint + rightHand;
            }

            if (result.begin < 1) {
                result.end = result.end - result.begin + 1;

                result.begin = 1;
                if (result.end > totalPage) {
                    result.end = totalPage;
                }
            }
            if (result.end > totalPage) {
                result.begin += totalPage - result.end;
                result.end = totalPage;
                if (result.begin < 1) {
                    result.begin = 1;
                }
            }
            return result;
        }
    },
    watch: {
        pageSize: function pageSize(val) {
            this.internalPageSize = val;
        },
        showQuickPrevIcon: function showQuickPrevIcon(val) {
            if (!val) {
                this.quickPrevIconCls = 'x-icon-more';
            }
        },
        showQuickNextIcon: function showQuickNextIcon(val) {
            if (!val) {
                this.quickNextIconCls = 'x-icon-more';
            }
        }
    },
    methods: {
        turnToPage: function turnToPage(pageNo) {
            if (pageNo > 0 && pageNo <= this.totalPageCount) {
                this.$emit('change-current', pageNo, this.currentPageNum);
            }
        },
        changePageSize: function changePageSize(num) {
            this.$emit('change-pagesize', num);
        },
        prev: function prev() {
            this.turnToPage(this.currentPageNum - 1);
        },
        next: function next() {
            this.turnToPage(this.currentPageNum + 1);
        },
        isActive: function isActive(number) {
            return number + this.getRangePage.begin - 1 === this.currentPageNum;
        }
    }
};

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(234),
  /* template */
  __webpack_require__(235),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'x-button-group'
};

/***/ }),
/* 235 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "x-btn-group"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(237),
  /* template */
  __webpack_require__(243),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _emitter = __webpack_require__(2);

var _emitter2 = _interopRequireDefault(_emitter);

var _clickoutside = __webpack_require__(38);

var _clickoutside2 = _interopRequireDefault(_clickoutside);

var _input = __webpack_require__(9);

var _input2 = _interopRequireDefault(_input);

var _selectDropdown = __webpack_require__(238);

var _selectDropdown2 = _interopRequireDefault(_selectDropdown);

var _option = __webpack_require__(71);

var _option2 = _interopRequireDefault(_option);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'xSelect',
    componentName: 'xSelect',
    components: {
        xInput: _input2.default,
        xSelectDropdown: _selectDropdown2.default,
        xOption: _option2.default
    },
    directives: {
        Clickoutside: _clickoutside2.default
    },
    mixins: [_emitter2.default],
    props: {
        value: {},
        size: String,

        placeholder: {
            type: String
        },

        disabled: {
            type: Boolean,
            default: false
        },

        multiple: {
            type: Boolean,
            default: false
        },
        multipleLimit: {
            type: Number,
            default: 0
        },
        allowClear: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            isOpen: false,
            inputWidth: 0,
            selectIndex: 0,
            isFocus: false,

            options: [],
            currentOptionLabel: '',
            allOptionsDisabled: false,
            inputHovering: false,
            hoverIndex: -1
        };
    },

    methods: {
        doDestroy: function doDestroy() {
            this.$refs.popper && this.$refs.popper.doDestroy();
        },
        handleMouseDown: function handleMouseDown(e) {
            if (e.target.tagName !== 'INPUT') {
                return;
            }
            this.toggleSelect();
        },
        handleIconClick: function handleIconClick(e) {
            if (this.iconCls.indexOf('android-close') > -1) {
                this.deleteSelected(e);
            } else {
                var $input = this.$refs.reference.$el.querySelector('.x-input');
                if (!this.isOpen) {
                    $input.focus();
                } else {
                    this.closeSelect();
                }
            }
        },
        handleOptionSelect: function handleOptionSelect(option) {
            if (!this.multiple) {
                this.$emit('input', option.value);
                this.isOpen = false;
            } else {
                var optionIndex = -1;
                for (var i = 0, len = this.value.length; i < len; i++) {
                    if (this.value[i] === option.value) {
                        optionIndex = i;
                        break;
                    }
                }

                if (optionIndex > -1) {
                    this.value.splice(optionIndex, 1);
                } else if (this.multipleLimit <= 0 || this.value.length < this.multipleLimit) {
                    this.value.push(option.value);
                }
            }
        },
        handleEnter: function handleEnter() {
            if (this.options[this.hoverIndex]) {
                this.handleOptionSelect(this.options[this.hoverIndex]);
            }
        },
        openSelect: function openSelect() {
            if (this.isOpen || this.disabled) {
                return;
            }
            this.isFocus = true;
            this.isOpen = true;
        },
        closeSelect: function closeSelect() {
            this.isFocus = false;
            if (!this.isOpen) {
                return;
            }
            this.isOpen = false;
        },
        toggleSelect: function toggleSelect() {
            if (!this.isOpen) {
                this.openSelect();
            } else {
                this.closeSelect();
            }
        },
        setSelected: function setSelected() {
            var _this = this;

            if (!this.multiple) {
                var option = this.getOption(this.value);
                if (option) {
                    this.currentOptionLabel = option.currentLabel;
                } else {
                    this.currentOptionLabel = '';
                }
            } else {
                var ret = [];
                if (Array.isArray(this.value)) {
                    this.value.forEach(function (value) {
                        ret.push(_this.getOption(value));
                    });
                }
                var retLen = ret.length;
                if (retLen === 0) {
                    this.currentOptionLabel = '';
                } else if (retLen > 0 && retLen < this.options.length) {
                    this.currentOptionLabel = '\u5DF2\u9009 ' + retLen + ' \u9879';
                } else if (retLen === this.options.length) {
                    this.currentOptionLabel = '已全选';
                }
            }
        },
        deleteSelected: function deleteSelected(e) {
            e.stopPropagation();
            if (!this.multiple) {
                this.$emit('input', '');
            } else {
                this.$emit('input', []);
            }
            this.closeSelect();
        },
        getOption: function getOption(value) {
            var option = void 0;
            for (var i = this.options.length - 1; i >= 0; i--) {
                var opt = this.options[i];
                if (opt.value === value) {
                    option = opt;
                    break;
                }
            }
            return option;
        },
        navigate: function navigate(direction) {
            if (this.options.length === 0 || this.allOptionsDisabled) {
                return;
            }
            switch (direction) {
                case 'next':
                    this.hoverIndex++;
                    if (this.hoverIndex === this.options.length) {
                        this.hoverIndex = 0;
                    }
                    this.resetScrollTop();
                    if (this.options[this.hoverIndex].disabled === true || this.options[this.hoverIndex].groupDisabled === true) {
                        this.navigate('next');
                    }
                    break;
                case 'prev':
                    this.hoverIndex--;
                    if (this.hoverIndex < 0) {
                        this.hoverIndex = this.options.length - 1;
                    }
                    this.resetScrollTop();
                    if (this.options[this.hoverIndex].disabled === true || this.options[this.hoverIndex].groupDisabled === true) {
                        this.navigate('prev');
                    }
                    break;
            }
        },
        resetScrollTop: function resetScrollTop() {
            var bottomOverflowDistance = this.options[this.hoverIndex].$el.getBoundingClientRect().bottom - this.$refs.popper.$el.getBoundingClientRect().bottom;
            var topOverflowDistance = this.options[this.hoverIndex].$el.getBoundingClientRect().top - this.$refs.popper.$el.getBoundingClientRect().top;
            if (bottomOverflowDistance > 0) {
                this.$refs.popper.$el.scrollTop += bottomOverflowDistance;
            }
            if (topOverflowDistance < 0) {
                this.$refs.popper.$el.scrollTop += topOverflowDistance;
            }
        }
    },
    computed: {
        cls: function cls() {
            var cls = ['x-select'];
            this.disabled && cls.push('disabled');
            this.isOpen && cls.push('x-select-open');
            this.isFocus && cls.push('is-focus');

            return cls.join(' ');
        },
        iconCls: function iconCls() {
            var cls = [];
            if (this.allowClear && !this.disabled && this.inputHovering && !this.multiple && this.value !== undefined && this.value !== '') {
                cls.push('android-close');
            } else if (this.allowClear && !this.disabled && this.inputHovering && this.multiple && this.value !== undefined && this.value.length !== 0) {
                cls.push('android-close');
            } else {
                cls.push('arrow-down-b');
                if (this.isOpen) {
                    cls.push('is-reversed');
                }
            }
            return cls.join(' ');
        }
    },
    watch: {
        value: function value(val) {
            if (this.multiple) {}
            this.setSelected();
            this.$emit('change', val);
            this.dispatch('XFormItem', 'x.form.change', val);
        },
        options: function options(val) {
            this.allOptionsDisabled = val.length === val.filter(function (item) {
                return item.disabled === true;
            }).length;
            this.setSelected();
        },
        isOpen: function isOpen(val) {
            if (val) {
                this.broadcast('xSelectDropdown', 'updatePopper');
            } else {
                this.broadcast('xSelectDropdown', 'destroyPopper');
                this.hoverIndex = -1;
            }
        }
    },
    created: function created() {
        if (this.multiple && !Array.isArray(this.value)) {
            this.$emit('input', []);
        }
        if (!this.multiple && Array.isArray(this.value)) {
            this.$emit('input', '');
        }
    },
    mounted: function mounted() {
        this.$on('handleOptionClick', this.handleOptionSelect);
        this.inputWidth = this.$refs.reference.$el.getBoundingClientRect().width + 'px';
        this.setSelected();
    }
};

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(239),
  /* template */
  __webpack_require__(240),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vuePopper = __webpack_require__(23);

var _vuePopper2 = _interopRequireDefault(_vuePopper);

var _emitter = __webpack_require__(2);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'xSelectDropdown',
    componentName: 'xSelectDropdown',
    mixins: [_vuePopper2.default, _emitter2.default],
    props: {
        placement: {
            default: 'bottom-start'
        },
        boundariesPadding: {
            default: 0
        },
        popperOptions: {
            default: function _default() {
                return {
                    forceAbsolute: true,
                    gpuAcceleration: false
                };
            }
        }
    },
    data: function data() {
        return {
            minWidth: ''
        };
    },

    watch: {
        '$parent.inputWidth': function $parentInputWidth(val) {
            this.minWidth = val;
        }
    },
    mounted: function mounted() {
        this.referenceElm = this.$parent.$refs.reference.$refs.input;
        this.$parent.popperElm = this.popperElm = this.$el;
        this.$on('updatePopper', this.updatePopper);
        this.$on('destroyPopper', this.destroyPopper);
    }
};

/***/ }),
/* 240 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "x-select-dropdown",
    class: [{
      'is-multiple': _vm.$parent.multiple
    }],
    style: ({
      minWidth: _vm.minWidth
    })
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _emitter = __webpack_require__(2);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'xOption',
    componentName: 'xOption',
    mixins: [_emitter2.default],
    props: {
        value: {
            required: true
        },
        label: [String, Number],
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            index: -1,
            groupDisabled: false
        };
    },

    computed: {
        currentLabel: function currentLabel() {
            return this.label || (typeof this.value === 'string' || typeof this.value === 'number' ? this.value : '');
        },
        isSelected: function isSelected() {
            if (!this.parentSelect.multiple) {
                return this.value === this.parentSelect.value;
            }
            return this.parentSelect.value.indexOf(this.value) >= 0;
        },
        parentSelect: function parentSelect() {
            var ret = this.$parent;
            while (ret.$options.componentName !== 'xSelect') {
                ret = ret.$parent;
            }
            return ret;
        },
        limitReached: function limitReached() {
            if (this.parentSelect.multiple) {
                return !this.itemSelected && this.parentSelect.value.length >= this.parentSelect.multipleLimit && this.parentSelect.multipleLimit > 0;
            }
            return false;
        }
    },
    methods: {
        handleHover: function handleHover() {
            if (!this.disabled && !this.groupDisabled) {
                this.parentSelect.hoverIndex = this.parentSelect.options.indexOf(this);
            }
        },
        handleOptionClick: function handleOptionClick() {
            if (this.disabled || this.groupDisabled) {
                return;
            }
            this.dispatch('xSelect', 'handleOptionClick', this);
        },
        handleGroupDisabled: function handleGroupDisabled(val) {
            this.groupDisabled = val;
        }
    },
    created: function created() {
        this.parentSelect.options.push(this);
        this.index = this.parentSelect.options.indexOf(this);
        this.$on('handleGroupDisabled', this.handleGroupDisabled);
    }
};

/***/ }),
/* 242 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    staticClass: "x-select-item",
    class: {
      'x-select-item-selected': _vm.isSelected,
      'is-disabled': _vm.disabled || _vm.groupDisabled || _vm.limitReached,
        'is-limit-reached': _vm.limitReached,
        'hover': _vm.parentSelect.hoverIndex === _vm.index
    },
    on: {
      "mouseenter": _vm.handleHover,
      "click": function($event) {
        $event.stopPropagation();
        _vm.handleOptionClick($event)
      }
    }
  }, [_vm._t("default", [_c('span', [_vm._v(_vm._s(_vm.currentLabel))])])], 2)
},staticRenderFns: []}

/***/ }),
/* 243 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "clickoutside",
      rawName: "v-clickoutside",
      value: (_vm.closeSelect),
      expression: "closeSelect"
    }],
    class: _vm.cls,
    on: {
      "focus": _vm.openSelect
    }
  }, [_c('x-input', {
    ref: "reference",
    attrs: {
      "disabled": _vm.disabled,
      "size": _vm.size,
      "icon": _vm.iconCls,
      "icon-click": _vm.handleIconClick,
      "readonly": true,
      "placeholder": _vm.placeholder
    },
    on: {
      "focus": function($event) {
        $event.preventDefault();
        _vm.openSelect($event)
      }
    },
    nativeOn: {
      "mousedown": function($event) {
        _vm.handleMouseDown($event)
      },
      "keydown": [function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "down", 40)) { return null; }
        $event.preventDefault();
        _vm.navigate('next')
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "up", 38)) { return null; }
        $event.preventDefault();
        _vm.navigate('prev')
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        $event.preventDefault();
        _vm.handleEnter($event)
      }],
      "mouseenter": function($event) {
        _vm.inputHovering = true
      },
      "mouseleave": function($event) {
        _vm.inputHovering = false
      }
    },
    model: {
      value: (_vm.currentOptionLabel),
      callback: function($$v) {
        _vm.currentOptionLabel = $$v
      },
      expression: "currentOptionLabel"
    }
  }), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "x-slide-up"
    },
    on: {
      "after-leave": _vm.doDestroy
    }
  }, [_c('x-select-dropdown', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isOpen),
      expression: "isOpen"
    }],
    ref: "popper"
  }, [_c('ul', {
    ref: "list",
    staticClass: "x-select-list"
  }, [_vm._t("default")], 2)])], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 244 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "x-pagination"
  }, [(_vm.type === 'standard') ? [_c('div', {
    staticClass: "x-pagination-standard"
  }, [(_vm.showTotal) ? _c('span', {
    staticClass: "x-pagination-page-total"
  }, [_vm._v("\n                共"), _c('span', {
    domProps: {
      "textContent": _vm._s(_vm.total)
    }
  }), _vm._v("条\n            ")]) : _vm._e(), _vm._v(" "), _c('span', {
    staticClass: "x-pagination-standard-btn-group"
  }, [_c('x-button-group', [_c('x-button', {
    attrs: {
      "disabled": _vm.currentPageNum == 1,
      "icon": "chevron-left"
    },
    on: {
      "click": _vm.prev
    }
  }), _vm._v(" "), (_vm.getRangePage.begin > 1) ? _c('x-button', {
    on: {
      "click": function($event) {
        _vm.turnToPage(1)
      }
    }
  }, [_vm._v("\n                        1\n                    ")]) : _vm._e(), _vm._v(" "), (_vm.showQuickPrevIcon) ? _c('x-button', {
    staticClass: "number-btn",
    on: {
      "mouseenter": function($event) {
        _vm.quickPrevIconCls = 'x-icon-chevron-d-left'
      },
      "mouseleave": function($event) {
        _vm.quickPrevIconCls = 'x-icon-more'
      },
      "click": function($event) {
        _vm.turnToPage(_vm.currentPageNum - _vm.rangeLength)
      }
    }
  }, [_c('span', {
    staticClass: "x-icon",
    class: [_vm.quickPrevIconCls]
  })]) : _vm._e(), _vm._v(" "), _vm._l(((_vm.getRangePage.end - _vm.getRangePage.begin + 1)), function(number) {
    return _c('x-button', {
      key: number,
      staticClass: "number-btn",
      class: {
        'active': _vm.isActive(number)
      },
      on: {
        "click": function($event) {
          _vm.turnToPage(number + _vm.getRangePage.begin - 1)
        }
      }
    }, [(_vm.isActive(number)) ? _c('span', {
      domProps: {
        "textContent": _vm._s(number + _vm.getRangePage.begin - 1)
      }
    }) : _c('span', {
      domProps: {
        "textContent": _vm._s(number + _vm.getRangePage.begin - 1)
      }
    })])
  }), _vm._v(" "), (_vm.showQuickNextIcon) ? _c('x-button', {
    staticClass: "number-btn",
    on: {
      "mouseenter": function($event) {
        _vm.quickNextIconCls = 'x-icon-chevron-d-right'
      },
      "mouseleave": function($event) {
        _vm.quickNextIconCls = 'x-icon-more'
      },
      "click": function($event) {
        _vm.turnToPage(_vm.currentPageNum + _vm.rangeLength)
      }
    }
  }, [_c('span', {
    staticClass: "x-icon",
    class: [_vm.quickNextIconCls]
  })]) : _vm._e(), _vm._v(" "), (_vm.getRangePage.end < _vm.totalPageCount) ? _c('x-button', {
    staticClass: "number-btn",
    on: {
      "click": function($event) {
        _vm.turnToPage(_vm.totalPageCount)
      }
    }
  }, [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.totalPageCount)
    }
  })]) : _vm._e(), _vm._v(" "), _c('x-button', {
    attrs: {
      "disabled": _vm.currentPageNum == _vm.totalPageCount,
      "icon": "chevron-right"
    },
    on: {
      "click": _vm.next
    }
  })], 2)], 1), _vm._v(" "), (_vm.showSizer) ? _c('span', {
    staticClass: "x-pagination-page-size"
  }, [_c('x-select', {
    on: {
      "change": function($event) {
        _vm.changePageSize(_vm.internalPageSize)
      }
    },
    model: {
      value: (_vm.internalPageSize),
      callback: function($$v) {
        _vm.internalPageSize = $$v
      },
      expression: "internalPageSize"
    }
  }, _vm._l((_vm.pageSizeRange), function(opt) {
    return _c('x-option', {
      key: opt,
      attrs: {
        "label": (opt + "条/页"),
        "value": opt
      }
    })
  }))], 1) : _vm._e()])] : _c('div', {
    staticClass: "x-pagination-mini"
  }, [(_vm.showTotal) ? _c('span', {
    staticClass: "x-pagination-mini-total"
  }, [_vm._v("共"), _c('span', {
    domProps: {
      "textContent": _vm._s(_vm.total)
    }
  }), _vm._v("条")]) : _vm._e(), _vm._v(" "), _c('x-button', {
    staticClass: "x-pagination-mini-prev-btn",
    attrs: {
      "icon": "chevron-left",
      "disabled": _vm.currentPageNum < 2
    },
    on: {
      "click": _vm.prev
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "x-pagination-mini-text"
  }, [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.currentPageNum)
    }
  }), _vm._v("/"), _c('span', {
    domProps: {
      "textContent": _vm._s(_vm.totalPageCount)
    }
  })]), _vm._v(" "), _c('x-button', {
    staticClass: "x-pagination-mini-next-btn",
    attrs: {
      "icon": "chevron-right",
      "disabled": _vm.currentPageNum == _vm.totalPageCount
    },
    on: {
      "click": _vm.next
    }
  })], 1)], 2)
},staticRenderFns: []}

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _popover = __webpack_require__(246);

var _popover2 = _interopRequireDefault(_popover);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _popover2.default;

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(247),
  /* template */
  __webpack_require__(248),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _popoverMixin = __webpack_require__(73);

var _popoverMixin2 = _interopRequireDefault(_popoverMixin);

var _input = __webpack_require__(9);

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'XPopover',
    components: { XInput: _input2.default },
    mixins: [_popoverMixin2.default],
    props: {
        title: String,
        confirm: {
            type: Boolean,
            default: false
        },
        transition: {
            default: 'x-popover-zoom'
        },
        trigger: {
            default: 'click'
        },
        onOk: Function,
        onCancel: Function,
        okText: {
            type: String,
            default: '确认'
        },
        cancelText: {
            type: String,
            default: '取消'
        }
    },
    data: function data() {
        return {
            confirmLoading: false
        };
    },

    methods: {
        handleOk: function handleOk(e) {
            this.onOk(e, this);
            if (e.defaultPrevented) {
                return;
            }
            this.showPopper = false;
        },
        handleCancel: function handleCancel(e) {
            this.onCancel(e);
            if (e.defaultPrevented) {
                return;
            }
            this.showPopper = false;
        }
    }
};

/***/ }),
/* 248 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', [_c('transition', {
    attrs: {
      "name": _vm.transition
    },
    on: {
      "after-leave": _vm.doDestroy
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showPopper),
      expression: "showPopper"
    }],
    ref: "popper",
    staticClass: "x-popover",
    class: _vm.popperClass,
    style: ({
      width: _vm.width + 'px'
    })
  }, [(_vm.title) ? _c('div', {
    staticClass: "x-popover-title",
    class: {
      'is-confirm': _vm.confirm
    }
  }, [(_vm.confirm) ? _c('i', {
    staticClass: "x-icon x-icon-help-circled"
  }) : _vm._e(), _vm._v("\n                " + _vm._s(_vm.title) + "\n            ")]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "x-popover-inner"
  }, [(!_vm.confirm) ? _vm._t("content", [_vm._v("\n                        " + _vm._s(_vm.content) + "\n                ")]) : _vm._e(), _vm._v(" "), (_vm.confirm) ? _c('div', {
    staticClass: "x-popover-confirm"
  }, [_c('x-button', {
    attrs: {
      "size": "sm"
    },
    on: {
      "click": _vm.handleCancel
    }
  }, [_vm._v(_vm._s(_vm.cancelText))]), _vm._v(" "), _c('x-button', {
    attrs: {
      "size": "sm",
      "loading": _vm.confirmLoading,
      "type": "primary"
    },
    on: {
      "click": _vm.handleOk
    }
  }, [_vm._v(_vm._s(_vm.okText))])], 1) : _vm._e()], 2)])]), _vm._v(" "), _vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(250),
  /* template */
  __webpack_require__(251),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'XProgress',
    props: {
        type: {
            type: String,
            default: 'line',
            validator: function validator(val) {
                return ['line', 'circle'].indexOf(val) > -1;
            }
        },
        percentage: {
            type: Number,
            default: 0,
            required: true,
            validator: function validator(val) {
                return val >= 0 && val <= 100;
            }
        },
        status: {
            type: String
        },
        strokeWidth: {
            type: Number,
            default: 6
        },
        textInside: {
            type: Boolean,
            default: false
        },
        width: {
            type: Number,
            default: 126
        },
        showText: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        barStyle: function barStyle() {
            var style = {};
            style.width = this.percentage + '%';
            return style;
        },
        relativeStrokeWidth: function relativeStrokeWidth() {
            return (this.strokeWidth / this.width * 100).toFixed(1);
        },
        trackPath: function trackPath() {
            var radius = parseInt(50 - parseFloat(this.relativeStrokeWidth) / 2, 10);

            return 'M 50 50 m 0 -' + radius + ' a ' + radius + ' ' + radius + ' 0 1 1 0 ' + radius * 2 + (' a ' + radius + ' ' + radius + ' 0 1 1 0 -' + radius * 2);
        },
        perimeter: function perimeter() {
            var radius = 50 - parseFloat(this.relativeStrokeWidth) / 2;
            return 2 * Math.PI * radius;
        },
        circlePathStyle: function circlePathStyle() {
            var perimeter = this.perimeter;
            return {
                strokeDasharray: perimeter + 'px,' + perimeter + 'px',
                strokeDashoffset: (1 - this.percentage / 100) * perimeter + 'px',
                transition: 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
            };
        },
        stroke: function stroke() {
            var ret = void 0;
            switch (this.status) {
                case 'success':
                    ret = '#00a854';
                    break;
                case 'exception':
                    ret = '#f04134';
                    break;
                default:
                    ret = '#2c96ef';
            }
            return ret;
        },
        iconClass: function iconClass() {
            if (this.type === 'line') {
                return this.status === 'success' ? 'x-icon-checkmark-circled' : 'x-icon-close-circled';
            }
            return this.status === 'success' ? 'x-icon-checkmark-round' : 'x-icon-close-round';
        },
        progressTextSize: function progressTextSize() {
            return this.type === 'line' ? 12 + this.strokeWidth * 0.4 : this.width * 0.111111 + 2;
        }
    }
};

/***/ }),
/* 251 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "x-progress",
    class: [
      'x-progress-' + _vm.type,
      _vm.status ? 'is-' + _vm.status : '',
      {
        'x-progress-without-text': !_vm.showText,
        'x-progress-text-inside': _vm.textInside,
      }
    ]
  }, [(_vm.type === 'line') ? _c('div', {
    staticClass: "x-progress-bar"
  }, [_c('div', {
    staticClass: "x-progress-bar-outer",
    style: ({
      height: _vm.strokeWidth + 'px'
    })
  }, [_c('div', {
    staticClass: "x-progress-bar-inner",
    style: (_vm.barStyle)
  }, [(_vm.showText && _vm.textInside) ? _c('div', {
    staticClass: "x-progress-bar-innerText"
  }, [_vm._v(_vm._s(_vm.percentage) + "%")]) : _vm._e()])])]) : _c('div', {
    staticClass: "x-progress-circle",
    style: ({
      height: _vm.width + 'px',
      width: _vm.width + 'px'
    })
  }, [_c('svg', {
    attrs: {
      "viewBox": "0 0 100 100"
    }
  }, [_c('path', {
    staticClass: "x-progress-circle-track",
    attrs: {
      "d": _vm.trackPath,
      "stroke": "#e5e9f2",
      "stroke-width": _vm.relativeStrokeWidth,
      "fill": "none"
    }
  }), _vm._v(" "), _c('path', {
    staticClass: "x-progress-circle-path",
    style: (_vm.circlePathStyle),
    attrs: {
      "d": _vm.trackPath,
      "stroke-linecap": "round",
      "stroke": _vm.stroke,
      "stroke-width": _vm.relativeStrokeWidth,
      "fill": "none"
    }
  })])]), _vm._v(" "), (_vm.showText && !_vm.textInside) ? _c('div', {
    staticClass: "x-progress-text",
    style: ({
      fontSize: _vm.progressTextSize + 'px'
    })
  }, [(!_vm.status) ? [_vm._v(_vm._s(_vm.percentage) + "%")] : _c('i', {
    staticClass: "x-icon",
    class: _vm.iconClass
  })], 2) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _optionGroup = __webpack_require__(253);

var _optionGroup2 = _interopRequireDefault(_optionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _optionGroup2.default;

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(254),
  /* template */
  __webpack_require__(255),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _emitter = __webpack_require__(2);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    mixins: [_emitter2.default],
    name: 'xOptionGroup',
    componentName: 'xOptionGroup',
    props: {
        label: String,
        disabled: {
            type: Boolean,
            default: false
        }
    },
    watch: {
        disabled: function disabled(val) {
            this.broadcast('xOption', 'handleGroupDisabled', val);
        }
    },
    mounted: function mounted() {
        if (this.disabled) {
            this.broadcast('xOption', 'handleGroupDisabled', this.disabled);
        }
    }
};

/***/ }),
/* 255 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "x-select-group-wrap"
  }, [_c('li', {
    staticClass: "x-select-group-title"
  }, [_vm._v("\n        " + _vm._s(_vm.label) + "\n    ")]), _vm._v(" "), _c('li', [_c('ul', {
    staticClass: "x-select-group"
  }, [_vm._t("default")], 2)])])
},staticRenderFns: []}

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _suggestion = __webpack_require__(257);

var _suggestion2 = _interopRequireDefault(_suggestion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _suggestion2.default;

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(258),
  /* template */
  __webpack_require__(262),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _input = __webpack_require__(9);

var _input2 = _interopRequireDefault(_input);

var _suggestionDropdown = __webpack_require__(259);

var _suggestionDropdown2 = _interopRequireDefault(_suggestionDropdown);

var _emitter = __webpack_require__(2);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'xSuggestion',
    componentName: 'xSuggestion',
    mixins: [_emitter2.default],
    components: {
        xInput: _input2.default,
        xSuggestionDropdown: _suggestionDropdown2.default
    },
    data: function data() {
        return {
            list: [],
            localList: [],
            currentIndex: -1,
            dataText: '',
            dataValue: '',
            isFocus: false,
            icon: '',
            iconClick: function iconClick() {}
        };
    },

    props: {
        id: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        },
        placeholder: {
            type: String,
            default: ''
        },
        suggestions: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        inputCallback: {
            type: Function,
            default: function _default() {
                return function () {};
            }
        },
        value: {
            type: Object,
            default: function _default() {
                return {
                    text: '',
                    value: ''
                };
            }
        },
        allowClear: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        sugVisible: function sugVisible() {
            var sug = this.list;
            var isValid = Array.isArray(sug) && sug.length > 0;
            return isValid && this.isFocus;
        }
    },

    watch: {
        suggestions: function suggestions() {
            this.arrangeLocalList();
            this.getLocalSug();
        },
        allowClear: function allowClear(val) {
            if (val) {
                this.handleClearBtn();
            } else {
                this.icon = '';
                this.iconClick = function () {};
            }
        },
        sugVisible: function sugVisible(val) {
            this.broadcast('xSuggestionDropdown', 'visible', [val, this.$refs.xInput.$refs.input.offsetWidth]);
        },
        dataText: function dataText(val) {
            if (val === '') {
                this.dataValue = '';
                this.emitChange();
            }
        },
        value: function value(val) {
            if (!val) {
                this.dataText = '';
                this.dataValue = '';
                return;
            }
            this.dataText = val.text || '';
            this.dataValue = val.value || '';
        }
    },
    methods: {
        handleClearBtn: function handleClearBtn() {
            var _this = this;

            if (this.allowClear) {
                this.icon = 'android-close';
                this.iconClick = function () {
                    _this.clearText();
                };
            }
        },
        handleChange: function handleChange() {
            this.emitChange();
            this.getLocalSug();
            this.inputCallback && this.inputCallback();
        },
        handleFocus: function handleFocus() {
            this.isFocus = true;
            this.getLocalSug();
            this.inputCallback && this.inputCallback();
        },
        handleBlur: function handleBlur() {
            var _this2 = this;

            setTimeout(function () {
                _this2.isFocus = false;
            }, 100);
        },
        clearList: function clearList() {
            this.currentIndex = -1;
            this.list = [];
        },
        changeCurrent: function changeCurrent(offset) {
            var _this3 = this;

            var moveIndex = this.currentIndex + offset;
            if (offset > 0 && moveIndex >= this.list.length) {
                moveIndex = 0;
            } else if (offset < 0 && moveIndex < 0) {
                moveIndex = this.list.length - 1;
            }

            this.currentIndex = moveIndex;

            this.$nextTick(function () {
                var popper = _this3.$refs.popper.$el;
                var popperHeight = popper.clientHeight;
                var activeItem = popper.querySelector('.active');
                var item = popper.querySelector('li');
                if (!activeItem || !item) {
                    return;
                }
                var itemHeight = item.clientHeight;

                if (_this3.currentIndex === 0) {
                    popper.scrollTop = 0;
                    return;
                }

                if (_this3.currentIndex === _this3.list.length - 1) {
                    popper.scrollTop = popperHeight;
                    return;
                }

                if (activeItem && activeItem.offsetTop > popperHeight - itemHeight) {
                    popper.scrollTop += itemHeight;
                };
                if (activeItem && activeItem.offsetTop < popper.scrollTop) {
                    popper.scrollTop -= itemHeight;
                }
            });
        },
        handleEnter: function handleEnter() {
            if (this.currentIndex === -1) {
                return;
            }
            var currentItem = this.list[this.currentIndex];
            this.setItem(currentItem);
            this.triggerOnEnter = true;
        },
        convert2standard: function convert2standard(data) {
            var res = [];

            res = data.map(function (item, index) {
                return {
                    text: item,
                    value: item
                };
            });

            return res;
        },
        arrangeLocalList: function arrangeLocalList() {
            var sugs = this.suggestions;

            if (this.isArray(sugs) && sugs.length > 0 && typeof sugs[0] === 'string') {
                this.localList = this.convert2standard(sugs);
            } else {
                this.localList = sugs;
            }
        },
        autoSetItem: function autoSetItem() {
            var word = this.dataText;

            var match = this.list.filter(function (item) {
                return item.text === word;
            });

            if (match.length) {
                this.setItem(match[0]);
            } else {
                this.dataValue = '';
                this.emitChange();
            }
        },
        getLocalSug: function getLocalSug() {
            var word = this.dataText;
            this.list = this.localList.filter(function (item) {
                return word ? item.text.indexOf(word) > -1 : true;
            });
        },
        setItem: function setItem(item) {
            var _this4 = this;

            this.dataValue = item.value;
            this.dataText = item.text;
            this.$nextTick(function () {
                _this4.clearList();
                _this4.emitChange();
            });
        },
        logError: function logError(msg) {
            throw new Error('[xcui] - ' + msg);
        },
        isArray: function isArray(arr) {
            return Object.prototype.toString.call(arr) === '[object Array]';
        },
        clearText: function clearText() {
            this.dataText = '';
        },
        emitChange: function emitChange() {
            this.$emit('input', {
                text: this.dataText,
                value: this.dataValue
            });
            this.$emit('change', {
                text: this.dataText,
                value: this.dataValue
            });
        }
    },
    created: function created() {
        this.dataText = this.value.text || '';
        this.dataValue = this.value.value || '';
        this.handleClearBtn();
    },
    mounted: function mounted() {
        var _this5 = this;

        this.$on('item-click', function (item) {
            _this5.setItem(item);
        });
        this.arrangeLocalList();
    }
};

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(260),
  /* template */
  __webpack_require__(261),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vuePopper = __webpack_require__(23);

var _vuePopper2 = _interopRequireDefault(_vuePopper);

var _emitter = __webpack_require__(2);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'xSuggestionDropdown',
    componentName: 'xSuggestionDropdown',
    mixins: [_vuePopper2.default, _emitter2.default],
    props: {
        suggestions: Array,
        placement: {
            default: 'bottom-start'
        },
        boundariesPadding: {
            default: 0
        },
        popperOptions: {
            default: function _default() {
                return {
                    forceAbsolute: true,
                    gpuAcceleration: false
                };
            }
        }
    },
    data: function data() {
        return {
            showPopper: false,
            dropdownWidth: null
        };
    },

    methods: {
        setItem: function setItem(item) {
            this.dispatch('xSuggestion', 'item-click', item);
        }
    },
    created: function created() {
        var _this = this;

        this.$on('visible', function (val, inputWidth) {
            _this.dropdownWidth = inputWidth + 'px';
            _this.showPopper = val;
        });
    },
    mounted: function mounted() {
        this.referenceElm = this.$parent.$refs.xInput.$refs.input;
        this.popperElm = this.$el;
    },
    updated: function updated() {
        var _this2 = this;

        this.$nextTick(function () {
            _this2.updatePopper();
        });
    }
};

/***/ }),
/* 261 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "x-slide-up"
    },
    on: {
      "after-leave": _vm.doDestroy
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showPopper),
      expression: "showPopper"
    }],
    staticClass: "x-suggestion-dropdown",
    style: ({
      width: _vm.dropdownWidth
    })
  }, [_c('ul', {
    ref: "sugList",
    staticClass: "x-suggestion-list"
  }, _vm._l((_vm.suggestions), function(item, index) {
    return _c('li', {
      staticClass: "x-suggestion-item",
      class: {
        'active': _vm.$parent.currentIndex == index
      },
      on: {
        "click": function($event) {
          _vm.setItem(item)
        }
      }
    }, [_vm._v("\n                " + _vm._s(item.text) + "\n            ")])
  }))])])
},staticRenderFns: []}

/***/ }),
/* 262 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "x-suggestion"
  }, [_c('x-input', {
    ref: "xInput",
    attrs: {
      "disabled": _vm.disabled,
      "placeholder": _vm.placeholder,
      "icon": _vm.icon,
      "icon-click": _vm.iconClick
    },
    on: {
      "change": _vm.handleChange,
      "focus": _vm.handleFocus,
      "blur": _vm.handleBlur
    },
    nativeOn: {
      "keydown": [function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "up", 38)) { return null; }
        $event.preventDefault();
        _vm.changeCurrent(-1)
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "down", 40)) { return null; }
        $event.preventDefault();
        _vm.changeCurrent(1)
      }],
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        $event.stopPropagation();
        _vm.handleEnter()
      }
    },
    model: {
      value: (_vm.dataText),
      callback: function($$v) {
        _vm.dataText = $$v
      },
      expression: "dataText"
    }
  }), _vm._v(" "), _c('x-suggestion-dropdown', {
    ref: "popper",
    attrs: {
      "suggestions": _vm.list
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tag = __webpack_require__(264);

var _tag2 = _interopRequireDefault(_tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _tag2.default;

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(265),
  /* template */
  __webpack_require__(266),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'XTag',
    props: {
        transition: {
            type: String,
            default: 'tag-zoom'
        },
        closeable: {
            type: Boolean,
            default: false
        },
        onClose: Function,
        color: String,
        name: String,
        tagKey: String
    },
    data: function data() {
        return {
            visible: true,
            prefixCls: 'x-tag'
        };
    },

    computed: {
        cls: function cls() {
            var ret = [];
            ret.push(this.prefixCls);
            if (this.color && !this.isPresetColor(this.color)) {
                ret.push('x-tag-has-color');
            }
            if (this.isPresetColor(this.color)) {
                ret.push('x-tag-' + this.color);
            }
            return ret.join(' ');
        },
        styles: function styles() {
            var ret = {};
            if (!this.isPresetColor(this.color)) {
                ret.backgroundColor = this.color;
            }
            return ret;
        }
    },
    methods: {
        handleClose: function handleClose(e) {
            if (this.onClose) {
                this.onClose(e, this);
            }
            if (e.defaultPrevented) {
                return;
            }
            this.visible = false;
        },
        handleAfterLeave: function handleAfterLeave(e) {
            this.$emit('afterClose', e);
        },
        isPresetColor: function isPresetColor(color) {
            return (/^(pink|red|yellow|orange|cyan|green|blue|purple)(-inverse)?$/.test(color)
            );
        }
    }
};

/***/ }),
/* 266 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": _vm.transition
    },
    on: {
      "after-leave": _vm.handleAfterLeave
    }
  }, [(_vm.visible) ? _c('div', {
    class: _vm.cls,
    style: (_vm.styles)
  }, [_c('span', {
    staticClass: "x-tag-text"
  }, [_vm._t("default", [_vm._v(_vm._s(_vm.name))])], 2), _vm._v(" "), (_vm.closeable) ? _c('i', {
    staticClass: "x-icon x-icon-android-close x-tag-cross",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.handleClose($event)
      }
    }
  }) : _vm._e()]) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tagCheckable = __webpack_require__(268);

var _tagCheckable2 = _interopRequireDefault(_tagCheckable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _tagCheckable2.default;

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(269),
  /* template */
  __webpack_require__(270),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'XTagCheckable',
    props: {
        color: String,
        checked: false,
        disabled: {
            type: Boolean,
            default: false
        },
        tagKey: String,
        name: String
    },
    data: function data() {
        return {
            visible: true,
            prefixCls: 'x-tag x-tag-checkable',
            internalChecked: this.checked
        };
    },

    watch: {
        checked: function checked(val) {
            this.internalChecked = val;
        }
    },
    computed: {
        cls: function cls() {
            var ret = [];
            ret.push(this.prefixCls);
            if (this.internalChecked) {
                ret.push('x-tag-checked');
            }
            if (this.color && !this.isPresetColor(this.color)) {
                ret.push('x-tag-has-color');
            }
            if (this.isPresetColor(this.color)) {
                ret.push('x-tag-' + this.color);
            }
            if (this.disabled) {
                ret.push('x-tag-disabled');
            }
            return ret.join(' ');
        }
    },
    methods: {
        isPresetColor: function isPresetColor(color) {
            return (/^(pink|red|yellow|orange|cyan|green|blue|purple)(-inverse)?$/.test(color)
            );
        },
        handleChange: function handleChange(e) {
            if (this.disabled) {
                return;
            }
            this.internalChecked = !this.internalChecked;
            this.$emit('change', this, this.internalChecked);
        }
    }
};

/***/ }),
/* 270 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.cls,
    on: {
      "click": _vm.handleChange
    }
  }, [_c('span', {
    staticClass: "x-tag-text"
  }, [_vm._t("default", [_vm._v(_vm._s(_vm.name))])], 2)])
},staticRenderFns: []}

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tooltip = __webpack_require__(272);

var _tooltip2 = _interopRequireDefault(_tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _tooltip2.default;

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(273),
  /* template */
  __webpack_require__(274),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _popoverMixin = __webpack_require__(73);

var _popoverMixin2 = _interopRequireDefault(_popoverMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'XTooltip',
    mixins: [_popoverMixin2.default],
    props: {
        transition: {
            type: String,
            default: 'x-tooltip-zoom'
        }
    }
};

/***/ }),
/* 274 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', [_c('transition', {
    attrs: {
      "name": _vm.transition
    },
    on: {
      "after-leave": _vm.doDestroy
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showPopper),
      expression: "showPopper"
    }],
    ref: "popper",
    staticClass: "x-tooltip",
    class: _vm.popperClass,
    style: ({
      width: _vm.width + 'px'
    })
  }, [_vm._t("content", [_c('div', {
    staticClass: "x-tooltip-inner"
  }, [_vm._v("\n                    " + _vm._s(_vm.content) + "\n                ")])])], 2)]), _vm._v(" "), _vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _scrolltop = __webpack_require__(276);

var _scrolltop2 = _interopRequireDefault(_scrolltop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _scrolltop2.default;

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(277),
  /* template */
  __webpack_require__(278),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _eventListener = __webpack_require__(55);

var _eventListener2 = _interopRequireDefault(_eventListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    name: 'XScrolltop',
    props: {
        targetElement: {
            type: String,
            default: ''
        },
        duration: {
            type: Number,
            default: 50
        },
        className: {
            type: String,
            default: ''
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
            var me = this;
            var road = obj.getBoundingClientRect().top;
            window.requestAnimationFrame(moveAction);
            var start = 0;
            var duration = this.duration;
            var begin = document.body.scrollTop;
            function moveAction(timestamp) {
                start++;
                var locTop = Quad.easeOut(start, 0, road, duration);
                var result = begin + locTop;
                document.body.scrollTop = result;
                if (start < duration) {
                    window.requestAnimationFrame(moveAction);
                } else {
                    me.$emit('finish');
                }
            }
        }
    },
    mounted: function mounted() {
        var _this = this;

        this.$nextTick(function () {
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
            me.scrollListener = _eventListener2.default.listen(window, 'scroll', scrollCall);
        });
    },
    destroyed: function destroyed() {
        this.scrollListener.remove();
    }
};

/***/ }),
/* 278 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "x-scrolltop"
  }, [_c('div', {
    ref: "dropa",
    staticClass: "x-scrolltop-area x-scrolltop-corner",
    class: {
      'x-scrolltop-dropin': _vm.dropin.corner
    },
    attrs: {
      "id": "corner"
    },
    on: {
      "dragover": function($event) {
        _vm.allowDrop($event)
      },
      "dragenter": function($event) {
        _vm.dragenter($event)
      },
      "drop": function($event) {
        _vm.ondrop($event)
      }
    }
  }, [_c('transition', {
    attrs: {
      "name": "x-fade"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    ref: "dragele",
    staticClass: "x-icon x-icon-android-arrow-dropup-circle x-scrolltop-init",
    class: _vm.className,
    attrs: {
      "draggable": "true",
      "id": "dragEle"
    },
    on: {
      "dragstart": function($event) {
        _vm.dragStart($event)
      },
      "dragleave": function($event) {
        _vm.dragleave($event)
      },
      "dragend": function($event) {
        _vm.dragend($event)
      },
      "click": function($event) {
        _vm.backTop($event)
      }
    }
  })])], 1), _vm._v(" "), _c('div', {
    ref: "dropb",
    staticClass: "x-scrolltop-area x-scrolltop-bottom",
    class: {
      'x-scrolltop-dropin': _vm.dropin.bottom
    },
    attrs: {
      "id": "bottom"
    },
    on: {
      "dragover": function($event) {
        _vm.allowDrop($event)
      },
      "dragenter": function($event) {
        _vm.dragenter($event)
      },
      "drop": function($event) {
        _vm.ondrop($event)
      }
    }
  }), _vm._v(" "), _c('div', {
    ref: "dropc",
    staticClass: "x-scrolltop-area x-scrolltop-right",
    class: {
      'x-scrolltop-dropin': _vm.dropin.right
    },
    attrs: {
      "id": "right"
    },
    on: {
      "dragover": function($event) {
        _vm.allowDrop($event)
      },
      "dragenter": function($event) {
        _vm.dragenter($event)
      },
      "drop": function($event) {
        _vm.ondrop($event)
      }
    }
  })])
},staticRenderFns: []}

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _row = __webpack_require__(280);

var _row2 = _interopRequireDefault(_row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _row2.default;

/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(281),
  /* template */
  __webpack_require__(282),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'XRow',
    props: {
        type: {
            validator: function validator(value) {
                return ['flex'].indexOf(value) >= 0;
            }
        },
        align: {
            validator: function validator(value) {
                return ['top', 'middle', 'bottom'].indexOf(value) >= 0;
            }
        },
        justify: {
            validator: function validator(value) {
                return ['start', 'end', 'center', 'space-around', 'space-between'].indexOf(value) >= 0;
            }
        },
        gutter: {
            type: [Number, String],
            default: 0
        },
        className: String
    },
    computed: {
        classes: function classes() {
            var cls = ['x-row'];
            !!this.type && cls.push('x-row-' + this.type);
            !!this.align && cls.push('x-row-' + this.type + '-' + this.align);
            !!this.justify && cls.push('x-row-' + this.type + '-' + this.justify);
            !!this.className && cls.push('' + this.className);
            return cls;
        },
        styles: function styles() {
            var style = {};
            if (this.gutter !== 0) {
                style = {
                    marginLeft: this.gutter / -2 + 'px',
                    marginRight: this.gutter / -2 + 'px'
                };
            }
            return style;
        }
    },
    methods: {
        updateGutter: function updateGutter(val) {
            this.$children.forEach(function (child) {
                if (val !== 0) {
                    child.gutter = val;
                }
            });
        }
    },
    watch: {
        gutter: function gutter(val) {
            this.updateGutter(val);
        }
    },
    mounted: function mounted() {
        this.updateGutter(this.gutter);
    }
};

/***/ }),
/* 282 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.classes,
    style: (_vm.styles)
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _col = __webpack_require__(284);

var _col2 = _interopRequireDefault(_col);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _col2.default;

/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(285),
  /* template */
  __webpack_require__(286),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = __webpack_require__(12);

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = __webpack_require__(28);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixCls = 'x-col';

exports.default = {
    name: 'XCol',
    props: {
        span: [Number, String],
        order: [Number, String],
        offset: [Number, String],
        push: [Number, String],
        pull: [Number, String],
        className: String,
        xs: [Number, Object],
        sm: [Number, Object],
        md: [Number, Object],
        lg: [Number, Object]
    },
    data: function data() {
        return {
            gutter: 0
        };
    },

    computed: {
        classes: function classes() {
            var _this = this;

            var cls = ['' + prefixCls];
            this.span && cls.push(prefixCls + '-span-' + this.span);
            this.order && cls.push(prefixCls + '-order-' + this.order);
            this.offset && cls.push(prefixCls + '-offset-' + this.offset);
            this.push && cls.push(prefixCls + '-push-' + this.push);
            this.pull && cls.push(prefixCls + '-pull-' + this.pull);
            !!this.className && cls.push('' + this.className);

            ['xs', 'sm', 'md', 'lg'].forEach(function (size) {
                if (typeof _this[size] === 'number') {
                    cls.push(prefixCls + '-span-' + size + '-' + _this[size]);
                } else if ((0, _typeof3.default)(_this[size]) === 'object') {
                    var props = _this[size];
                    (0, _keys2.default)(props).forEach(function (prop) {
                        cls.push(prop !== 'span' ? prefixCls + '-' + size + '-' + prop + '-' + props[prop] : prefixCls + '-span-' + size + '-' + props[prop]);
                    });
                }
            });

            return cls;
        },
        styles: function styles() {
            var style = {};
            if (this.gutter !== 0) {
                style = {
                    paddingLeft: this.gutter / 2 + 'px',
                    paddingRight: this.gutter / 2 + 'px'
                };
            }

            return style;
        }
    }
};

/***/ }),
/* 286 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.classes,
    style: (_vm.styles)
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = __webpack_require__(288);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _icon2.default;

/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(289),
  /* template */
  __webpack_require__(290),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'x-icon',
    props: {
        name: String,
        size: [Number, String],
        color: String,
        rotate: [Number, String],
        animate: {
            validator: function validator(value) {
                return ['spin', 'pulse'].indexOf(value) >= 0;
            }
        },
        flip: {
            validator: function validator(value) {
                return ['horizontal', 'vertical'].indexOf(value) >= 0;
            }
        }
    },
    computed: {
        classes: function classes() {
            var cls = 'x-icon x-icon-' + this.name;
            if (this.animate) {
                cls += ' x-icon-addon-' + this.animate;
            }
            if (this.flip) {
                cls += ' x-icon-addon-flip-' + this.flip;
            }
            return cls;
        },
        styles: function styles() {
            var style = {};
            if (this.size) {
                style['font-size'] = this.size + 'px';
            }
            if (this.color) {
                style.color = this.color;
            }
            if (this.rotate) {
                style.transform = 'rotate(' + this.rotate + 'deg)';
            }
            return style;
        }
    }
};

/***/ }),
/* 290 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('i', {
    class: _vm.classes,
    style: (_vm.styles)
  })
},staticRenderFns: []}

/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _switch = __webpack_require__(292);

var _switch2 = _interopRequireDefault(_switch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _switch2.default;

/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(293),
  /* template */
  __webpack_require__(294),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'XSwitch',
    props: {
        disabled: Boolean,
        value: Boolean,
        onText: String,
        offText: String
    },
    data: function data() {
        return {
            focus: false
        };
    },

    computed: {
        model: {
            get: function get() {
                return this.value;
            },
            set: function set(newVal) {
                this.$emit('input', newVal);
            }
        },
        isChecked: function isChecked() {
            return this.model;
        }
    },
    methods: {
        handleChange: function handleChange() {
            this.$emit('change', this.model);
        }
    }
};

/***/ }),
/* 294 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "x-switch"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.model),
      expression: "model"
    }],
    staticClass: "x-switch-item x-switch-input",
    class: {
      'is-disabled': _vm.disabled,
      'is-checked': _vm.isChecked,
      'is-focus': _vm.focus
    },
    attrs: {
      "type": "checkbox",
      "disabled": _vm.disabled
    },
    domProps: {
      "checked": Array.isArray(_vm.model) ? _vm._i(_vm.model, null) > -1 : (_vm.model)
    },
    on: {
      "focus": function($event) {
        _vm.focus = true
      },
      "blur": function($event) {
        _vm.focus = false
      },
      "change": _vm.handleChange,
      "__c": function($event) {
        var $$a = _vm.model,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.model = $$a.concat($$v))
          } else {
            $$i > -1 && (_vm.model = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.model = $$c
        }
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "x-switch-background"
  }, [_c('span', {
    staticClass: "x-switch-text"
  }, [_vm._v(_vm._s(_vm.isChecked ? _vm.onText : _vm.offText))]), _vm._v(" "), _c('span', {
    staticClass: "x-switch-item x-switch-cbx"
  })])])
},staticRenderFns: []}

/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _form = __webpack_require__(296);

var _form2 = _interopRequireDefault(_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _form2.default;

/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(297),
  /* template */
  __webpack_require__(298),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'XForm',
    componentName: 'XForm',
    props: {
        model: Object,
        rules: Object,
        labelPosition: String,
        labelWidth: String,
        inline: Boolean,
        showMessage: {
            type: Boolean,
            default: true
        }
    },
    data: function data() {
        return {
            fields: []
        };
    },

    methods: {
        resetFields: function resetFields() {
            this.fields.forEach(function (field) {
                field.resetField();
            });
        },
        validate: function validate(callback) {
            var _this = this;

            var valid = true;
            var count = 0;
            if (this.fields.length === 0 && callback) {
                callback(true);
            }
            this.fields.forEach(function (field, index) {
                field.validate('', function (errors) {
                    if (errors) {
                        valid = false;
                    }
                    if (typeof callback === 'function' && ++count === _this.fields.length) {
                        callback(valid);
                    }
                });
            });
        },
        validateField: function validateField(prop, cb) {
            var field = this.fields.filter(function (field) {
                return field.prop === prop;
            })[0];
            if (!field) {
                throw new Error('must call validateField with valid prop string!');
            }

            field.validate('', cb);
        }
    },
    created: function created() {
        var _this2 = this;

        this.$on('x.form.addField', function (field) {
            if (field) {
                _this2.fields.push(field);
            }
        });

        this.$on('x.form.removeField', function (field) {
            if (field.prop) {
                _this2.fields.splice(_this2.fields.indexOf(field), 1);
            }
        });
    }
};

/***/ }),
/* 298 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('form', {
    staticClass: "x-form",
    class: [_vm.labelPosition ? 'x-form-label-' + _vm.labelPosition : '', {
      'x-form-inline': _vm.inline
    }],
    attrs: {
      "action": "javascript:;"
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _formItem = __webpack_require__(300);

var _formItem2 = _interopRequireDefault(_formItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _formItem2.default;

/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(301),
  /* template */
  __webpack_require__(323),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _asyncValidator = __webpack_require__(302);

var _asyncValidator2 = _interopRequireDefault(_asyncValidator);

var _emitter = __webpack_require__(2);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function noop() {}

function getPropByPath(obj, path) {
    var tempObj = obj;
    path = path.replace(/\[(\w+)\]/g, '.$1');
    path = path.replace(/^\./, '');

    var keyArr = path.split('.');
    var i = 0;

    for (var len = keyArr.length; i < len - 1; ++i) {
        var key = keyArr[i];
        if (key in tempObj) {
            tempObj = tempObj[key];
        } else {
            throw new Error('please transfer a valid prop path to form item!');
        }
    }
    return {
        o: tempObj,
        k: keyArr[i],
        v: tempObj[keyArr[i]]
    };
}

exports.default = {
    name: 'XFormItem',

    componentName: 'XFormItem',

    mixins: [_emitter2.default],

    props: {
        label: String,
        labelWidth: String,
        prop: String,
        required: Boolean,
        rules: [Object, Array],
        error: String,
        validateStatus: String,
        showMessage: {
            type: Boolean,
            default: true
        }
    },
    watch: {
        error: function error(value) {
            this.validateMessage = value;
            this.validateState = value ? 'error' : '';
        },
        validateStatus: function validateStatus(value) {
            this.validateState = value;
        }
    },
    computed: {
        labelStyle: function labelStyle() {
            var ret = {};
            if (this.form.labelPosition === 'top') {
                return ret;
            }
            var labelWidth = this.labelWidth || this.form.labelWidth;
            if (labelWidth) {
                ret.width = labelWidth;
            }
            return ret;
        },
        contentStyle: function contentStyle() {
            var ret = {};
            if (this.form.labelPosition === 'top' || this.form.inline) {
                return ret;
            }
            var labelWidth = this.labelWidth || this.form.labelWidth;
            if (labelWidth) {
                ret.marginLeft = labelWidth;
            }
            return ret;
        },
        form: function form() {
            var parent = this.$parent;
            while (parent.$options.componentName !== 'XForm') {
                parent = parent.$parent;
            }
            return parent;
        },

        fieldValue: {
            cache: false,
            get: function get() {
                var model = this.form.model;
                if (!model || !this.prop) {
                    return;
                }

                var path = this.prop;
                if (path.indexOf(':') !== -1) {
                    path = path.replace(/:/, '.');
                }

                return getPropByPath(model, path).v;
            }
        }
    },
    data: function data() {
        return {
            validateState: '',
            validateMessage: '',
            validateDisabled: false,
            validator: {},
            isRequired: false
        };
    },

    methods: {
        validate: function validate(trigger) {
            var _this = this;

            var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;

            var rules = this.getFilteredRule(trigger);
            if (!rules || rules.length === 0) {
                callback();
                return true;
            }

            this.validateState = 'validating';

            var descriptor = {};
            descriptor[this.prop] = rules;

            var validator = new _asyncValidator2.default(descriptor);
            var model = {};

            model[this.prop] = this.fieldValue;

            validator.validate(model, {
                firstFields: true
            }, function (errors, fields) {
                _this.validateState = !errors ? 'success' : 'error';
                _this.validateMessage = errors ? errors[0].message : '';

                callback(_this.validateMessage);
            });
        },
        resetField: function resetField() {
            this.validateState = '';
            this.validateMessage = '';

            var model = this.form.model;
            var value = this.fieldValue;
            var path = this.prop;
            if (path.indexOf(':') !== -1) {
                path = path.replace(/:/, '.');
            }

            var prop = getPropByPath(model, path);

            if (Array.isArray(value)) {
                this.validateDisabled = true;
                prop.o[prop.k] = [].concat(this.initialValue);
            } else {
                this.validateDisabled = true;
                prop.o[prop.k] = this.initialValue;
            }
        },
        getRules: function getRules() {
            var formRules = this.form.rules;
            var selfRuels = this.rules;

            formRules = formRules ? formRules[this.prop] : [];

            return [].concat(selfRuels || formRules || []);
        },
        getFilteredRule: function getFilteredRule(trigger) {
            var rules = this.getRules();

            return rules.filter(function (rule) {
                return !rule.trigger || rule.trigger.indexOf(trigger) !== -1;
            });
        },
        onFieldBlur: function onFieldBlur() {
            this.validate('blur');
        },
        onFieldChange: function onFieldChange() {
            if (this.validateDisabled) {
                this.validateDisabled = false;
                return;
            }

            this.validate('change');
        }
    },
    mounted: function mounted() {
        var _this2 = this;

        if (this.prop) {
            this.dispatch('XForm', 'x.form.addField', [this]);

            var initialValue = this.fieldValue;
            if (Array.isArray(initialValue)) {
                initialValue = [].concat(initialValue);
            }
            Object.defineProperty(this, 'initialValue', {
                value: initialValue
            });

            var rules = this.getRules();

            if (rules.length) {
                rules.every(function (rule) {
                    if (rule.required) {
                        _this2.isRequired = true;
                        return false;
                    }
                });
                this.$on('x.form.blur', this.onFieldBlur);
                this.$on('x.form.change', this.onFieldChange);
            }
        }
    },
    beforeDestroy: function beforeDestroy() {
        this.dispatch('XForm', 'x.form.removeField', [this]);
    }
};

/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _util = __webpack_require__(1);

var _validator = __webpack_require__(303);

var _validator2 = _interopRequireDefault(_validator);

var _messages2 = __webpack_require__(322);

var _rule = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 *  Encapsulates a validation schema.
 *
 *  @param descriptor An object declaring validation rules
 *  for this schema.
 */
function Schema(descriptor) {
  this.rules = null;
  this._messages = _messages2.messages;
  this.define(descriptor);
}

Schema.prototype = {
  messages: function messages(_messages) {
    if (_messages) {
      this._messages = (0, _util.deepMerge)((0, _messages2.newMessages)(), _messages);
    }
    return this._messages;
  },
  define: function define(rules) {
    if (!rules) {
      throw new Error('Cannot configure a schema with no rules');
    }
    if ((typeof rules === 'undefined' ? 'undefined' : _typeof(rules)) !== 'object' || Array.isArray(rules)) {
      throw new Error('Rules must be an object');
    }
    this.rules = {};
    var z = void 0;
    var item = void 0;
    for (z in rules) {
      if (rules.hasOwnProperty(z)) {
        item = rules[z];
        this.rules[z] = Array.isArray(item) ? item : [item];
      }
    }
  },
  validate: function validate(source_) {
    var _this = this;

    var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var oc = arguments[2];

    var source = source_;
    var options = o;
    var callback = oc;
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (!this.rules || Object.keys(this.rules).length === 0) {
      if (callback) {
        callback();
      }
      return;
    }
    function complete(results) {
      var i = void 0;
      var field = void 0;
      var errors = [];
      var fields = {};

      function add(e) {
        if (Array.isArray(e)) {
          errors = errors.concat.apply(errors, e);
        } else {
          errors.push(e);
        }
      }

      for (i = 0; i < results.length; i++) {
        add(results[i]);
      }
      if (!errors.length) {
        errors = null;
        fields = null;
      } else {
        for (i = 0; i < errors.length; i++) {
          field = errors[i].field;
          fields[field] = fields[field] || [];
          fields[field].push(errors[i]);
        }
      }
      callback(errors, fields);
    }

    if (options.messages) {
      var messages = this.messages();
      if (messages === _messages2.messages) {
        messages = (0, _messages2.newMessages)();
      }
      (0, _util.deepMerge)(messages, options.messages);
      options.messages = messages;
    } else {
      options.messages = this.messages();
    }

    options.error = _rule.error;
    var arr = void 0;
    var value = void 0;
    var series = {};
    var keys = options.keys || Object.keys(this.rules);
    keys.forEach(function (z) {
      arr = _this.rules[z];
      value = source[z];
      arr.forEach(function (r) {
        var rule = r;
        if (typeof rule.transform === 'function') {
          if (source === source_) {
            source = _extends({}, source);
          }
          value = source[z] = rule.transform(value);
        }
        if (typeof rule === 'function') {
          rule = {
            validator: rule
          };
        } else {
          rule = _extends({}, rule);
        }
        rule.validator = _this.getValidationMethod(rule);
        rule.field = z;
        rule.fullField = rule.fullField || z;
        rule.type = _this.getType(rule);
        if (!rule.validator) {
          return;
        }
        series[z] = series[z] || [];
        series[z].push({
          rule: rule,
          value: value,
          source: source,
          field: z
        });
      });
    });
    var errorFields = {};
    (0, _util.asyncMap)(series, options, function (data, doIt) {
      var rule = data.rule;
      var deep = (rule.type === 'object' || rule.type === 'array') && (_typeof(rule.fields) === 'object' || _typeof(rule.defaultField) === 'object');
      deep = deep && (rule.required || !rule.required && data.value);
      rule.field = data.field;
      function addFullfield(key, schema) {
        return _extends({}, schema, {
          fullField: rule.fullField + '.' + key
        });
      }

      function cb() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        var errors = e;
        if (!Array.isArray(errors)) {
          errors = [errors];
        }
        if (errors.length) {
          (0, _util.warning)('async-validator:', errors);
        }
        if (errors.length && rule.message) {
          errors = [].concat(rule.message);
        }

        errors = errors.map((0, _util.complementError)(rule));

        if ((options.first || options.fieldFirst) && errors.length) {
          errorFields[rule.field] = 1;
          return doIt(errors);
        }
        if (!deep) {
          doIt(errors);
        } else {
          // if rule is required but the target object
          // does not exist fail at the rule level and don't
          // go deeper
          if (rule.required && !data.value) {
            if (rule.message) {
              errors = [].concat(rule.message).map((0, _util.complementError)(rule));
            } else {
              errors = [options.error(rule, (0, _util.format)(options.messages.required, rule.field))];
            }
            return doIt(errors);
          }

          var fieldsSchema = {};
          if (rule.defaultField) {
            for (var k in data.value) {
              if (data.value.hasOwnProperty(k)) {
                fieldsSchema[k] = rule.defaultField;
              }
            }
          }
          fieldsSchema = _extends({}, fieldsSchema, data.rule.fields);
          for (var f in fieldsSchema) {
            if (fieldsSchema.hasOwnProperty(f)) {
              var fieldSchema = Array.isArray(fieldsSchema[f]) ? fieldsSchema[f] : [fieldsSchema[f]];
              fieldsSchema[f] = fieldSchema.map(addFullfield.bind(null, f));
            }
          }
          var schema = new Schema(fieldsSchema);
          schema.messages(options.messages);
          if (data.rule.options) {
            data.rule.options.messages = options.messages;
            data.rule.options.error = options.error;
          }
          schema.validate(data.value, data.rule.options || options, function (errs) {
            doIt(errs && errs.length ? errors.concat(errs) : errs);
          });
        }
      }

      rule.validator(rule, data.value, cb, data.source, options);
    }, function (results) {
      complete(results);
    });
  },
  getType: function getType(rule) {
    if (rule.type === undefined && rule.pattern instanceof RegExp) {
      rule.type = 'pattern';
    }
    if (typeof rule.validator !== 'function' && rule.type && !_validator2["default"].hasOwnProperty(rule.type)) {
      throw new Error((0, _util.format)('Unknown rule type %s', rule.type));
    }
    return rule.type || 'string';
  },
  getValidationMethod: function getValidationMethod(rule) {
    if (typeof rule.validator === 'function') {
      return rule.validator;
    }
    var keys = Object.keys(rule);
    var messageIndex = keys.indexOf('message');
    if (messageIndex !== -1) {
      keys.splice(messageIndex, 1);
    }
    if (keys.length === 1 && keys[0] === 'required') {
      return _validator2["default"].required;
    }
    return _validator2["default"][this.getType(rule)] || false;
  }
};

Schema.register = function register(type, validator) {
  if (typeof validator !== 'function') {
    throw new Error('Cannot register a validator by type, validator is not a function');
  }
  _validator2["default"][type] = validator;
};

Schema.messages = _messages2.messages;

exports["default"] = Schema;
module.exports = exports['default'];

/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  string: __webpack_require__(304),
  method: __webpack_require__(310),
  number: __webpack_require__(311),
  "boolean": __webpack_require__(312),
  regexp: __webpack_require__(313),
  integer: __webpack_require__(314),
  "float": __webpack_require__(315),
  array: __webpack_require__(316),
  object: __webpack_require__(317),
  "enum": __webpack_require__(318),
  pattern: __webpack_require__(319),
  email: __webpack_require__(46),
  url: __webpack_require__(46),
  date: __webpack_require__(320),
  hex: __webpack_require__(46),
  required: __webpack_require__(321)
};

/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rule = __webpack_require__(3);

var _rule2 = _interopRequireDefault(_rule);

var _util = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 *  Performs validation for string types.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function string(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if ((0, _util.isEmptyValue)(value, 'string') && !rule.required) {
      return callback();
    }
    _rule2["default"].required(rule, value, source, errors, options, 'string');
    if (!(0, _util.isEmptyValue)(value, 'string')) {
      _rule2["default"].type(rule, value, source, errors, options);
      _rule2["default"].range(rule, value, source, errors, options);
      _rule2["default"].pattern(rule, value, source, errors, options);
      if (rule.whitespace === true) {
        _rule2["default"].whitespace(rule, value, source, errors, options);
      }
    }
  }
  callback(errors);
}

exports["default"] = string;
module.exports = exports['default'];

/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(1);

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

/**
 *  Rule for validating whitespace.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function whitespace(rule, value, source, errors, options) {
  if (/^\s+$/.test(value) || value === '') {
    errors.push(util.format(options.messages.whitespace, rule.fullField));
  }
}

exports["default"] = whitespace;
module.exports = exports['default'];

/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _util = __webpack_require__(1);

var util = _interopRequireWildcard(_util);

var _required = __webpack_require__(75);

var _required2 = _interopRequireDefault(_required);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

/* eslint max-len:0 */

var pattern = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  url: new RegExp('^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$', 'i'),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};

var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  "float": function float(value) {
    return types.number(value) && !types.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  regexp: function regexp(value) {
    if (value instanceof RegExp) {
      return true;
    }
    try {
      return !!new RegExp(value);
    } catch (e) {
      return false;
    }
  },
  date: function date(value) {
    return typeof value.getTime === 'function' && typeof value.getMonth === 'function' && typeof value.getYear === 'function';
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }
    return typeof value === 'number';
  },
  object: function object(value) {
    return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && !types.array(value);
  },
  method: function method(value) {
    return typeof value === 'function';
  },
  email: function email(value) {
    return typeof value === 'string' && !!value.match(pattern.email);
  },
  url: function url(value) {
    return typeof value === 'string' && !!value.match(pattern.url);
  },
  hex: function hex(value) {
    return typeof value === 'string' && !!value.match(pattern.hex);
  }
};

/**
 *  Rule for validating the type of a value.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function type(rule, value, source, errors, options) {
  if (rule.required && value === undefined) {
    (0, _required2["default"])(rule, value, source, errors, options);
    return;
  }
  var custom = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'];
  var ruleType = rule.type;
  if (custom.indexOf(ruleType) > -1) {
    if (!types[ruleType](value)) {
      errors.push(util.format(options.messages.types[ruleType], rule.fullField, rule.type));
    }
    // straight typeof check
  } else if (ruleType && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== rule.type) {
    errors.push(util.format(options.messages.types[ruleType], rule.fullField, rule.type));
  }
}

exports["default"] = type;
module.exports = exports['default'];

/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(1);

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

/**
 *  Rule for validating minimum and maximum allowed values.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function range(rule, value, source, errors, options) {
  var len = typeof rule.len === 'number';
  var min = typeof rule.min === 'number';
  var max = typeof rule.max === 'number';
  var val = value;
  var key = null;
  var num = typeof value === 'number';
  var str = typeof value === 'string';
  var arr = Array.isArray(value);
  if (num) {
    key = 'number';
  } else if (str) {
    key = 'string';
  } else if (arr) {
    key = 'array';
  }
  // if the value is not of a supported type for range validation
  // the validation rule rule should use the
  // type property to also test for a particular type
  if (!key) {
    return false;
  }
  if (str || arr) {
    val = value.length;
  }
  if (len) {
    if (val !== rule.len) {
      errors.push(util.format(options.messages[key].len, rule.fullField, rule.len));
    }
  } else if (min && !max && val < rule.min) {
    errors.push(util.format(options.messages[key].min, rule.fullField, rule.min));
  } else if (max && !min && val > rule.max) {
    errors.push(util.format(options.messages[key].max, rule.fullField, rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(util.format(options.messages[key].range, rule.fullField, rule.min, rule.max));
  }
}

exports["default"] = range;
module.exports = exports['default'];

/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(1);

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

var ENUM = 'enum';

/**
 *  Rule for validating a value exists in an enumerable list.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function enumerable(rule, value, source, errors, options) {
  rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];
  if (rule[ENUM].indexOf(value) === -1) {
    errors.push(util.format(options.messages[ENUM], rule.fullField, rule[ENUM].join(', ')));
  }
}

exports["default"] = enumerable;
module.exports = exports['default'];

/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(1);

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

/**
 *  Rule for validating a regular expression pattern.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function pattern(rule, value, source, errors, options) {
  if (rule.pattern instanceof RegExp) {
    if (!rule.pattern.test(value)) {
      errors.push(util.format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
    }
  }
}

exports["default"] = pattern;
module.exports = exports['default'];

/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rule = __webpack_require__(3);

var _rule2 = _interopRequireDefault(_rule);

var _util = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 *  Validates a function.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function method(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if ((0, _util.isEmptyValue)(value) && !rule.required) {
      return callback();
    }
    _rule2["default"].required(rule, value, source, errors, options);
    if (value !== undefined) {
      _rule2["default"].type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

exports["default"] = method;
module.exports = exports['default'];

/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rule = __webpack_require__(3);

var _rule2 = _interopRequireDefault(_rule);

var _util = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 *  Validates a number.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function number(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if ((0, _util.isEmptyValue)(value) && !rule.required) {
      return callback();
    }
    _rule2["default"].required(rule, value, source, errors, options);
    if (value !== undefined) {
      _rule2["default"].type(rule, value, source, errors, options);
      _rule2["default"].range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

exports["default"] = number;
module.exports = exports['default'];

/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(1);

var _rule = __webpack_require__(3);

var _rule2 = _interopRequireDefault(_rule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 *  Validates a boolean.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function boolean(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if ((0, _util.isEmptyValue)(value) && !rule.required) {
      return callback();
    }
    _rule2["default"].required(rule, value, source, errors, options);
    if (value !== undefined) {
      _rule2["default"].type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

exports["default"] = boolean;
module.exports = exports['default'];

/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rule = __webpack_require__(3);

var _rule2 = _interopRequireDefault(_rule);

var _util = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 *  Validates the regular expression type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function regexp(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if ((0, _util.isEmptyValue)(value) && !rule.required) {
      return callback();
    }
    _rule2["default"].required(rule, value, source, errors, options);
    if (!(0, _util.isEmptyValue)(value)) {
      _rule2["default"].type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

exports["default"] = regexp;
module.exports = exports['default'];

/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rule = __webpack_require__(3);

var _rule2 = _interopRequireDefault(_rule);

var _util = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 *  Validates a number is an integer.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function integer(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if ((0, _util.isEmptyValue)(value) && !rule.required) {
      return callback();
    }
    _rule2["default"].required(rule, value, source, errors, options);
    if (value !== undefined) {
      _rule2["default"].type(rule, value, source, errors, options);
      _rule2["default"].range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

exports["default"] = integer;
module.exports = exports['default'];

/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rule = __webpack_require__(3);

var _rule2 = _interopRequireDefault(_rule);

var _util = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 *  Validates a number is a floating point number.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function floatFn(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if ((0, _util.isEmptyValue)(value) && !rule.required) {
      return callback();
    }
    _rule2["default"].required(rule, value, source, errors, options);
    if (value !== undefined) {
      _rule2["default"].type(rule, value, source, errors, options);
      _rule2["default"].range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

exports["default"] = floatFn;
module.exports = exports['default'];

/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rule = __webpack_require__(3);

var _rule2 = _interopRequireDefault(_rule);

var _util = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 *  Validates an array.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function array(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if ((0, _util.isEmptyValue)(value, 'array') && !rule.required) {
      return callback();
    }
    _rule2["default"].required(rule, value, source, errors, options, 'array');
    if (!(0, _util.isEmptyValue)(value, 'array')) {
      _rule2["default"].type(rule, value, source, errors, options);
      _rule2["default"].range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

exports["default"] = array;
module.exports = exports['default'];

/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rule = __webpack_require__(3);

var _rule2 = _interopRequireDefault(_rule);

var _util = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 *  Validates an object.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function object(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if ((0, _util.isEmptyValue)(value) && !rule.required) {
      return callback();
    }
    _rule2["default"].required(rule, value, source, errors, options);
    if (value !== undefined) {
      _rule2["default"].type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

exports["default"] = object;
module.exports = exports['default'];

/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rule = __webpack_require__(3);

var _rule2 = _interopRequireDefault(_rule);

var _util = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ENUM = 'enum';

/**
 *  Validates an enumerable list.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function enumerable(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if ((0, _util.isEmptyValue)(value) && !rule.required) {
      return callback();
    }
    _rule2["default"].required(rule, value, source, errors, options);
    if (value) {
      _rule2["default"][ENUM](rule, value, source, errors, options);
    }
  }
  callback(errors);
}

exports["default"] = enumerable;
module.exports = exports['default'];

/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rule = __webpack_require__(3);

var _rule2 = _interopRequireDefault(_rule);

var _util = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 *  Validates a regular expression pattern.
 *
 *  Performs validation when a rule only contains
 *  a pattern property but is not declared as a string type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function pattern(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if ((0, _util.isEmptyValue)(value, 'string') && !rule.required) {
      return callback();
    }
    _rule2["default"].required(rule, value, source, errors, options);
    if (!(0, _util.isEmptyValue)(value, 'string')) {
      _rule2["default"].pattern(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

exports["default"] = pattern;
module.exports = exports['default'];

/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rule = __webpack_require__(3);

var _rule2 = _interopRequireDefault(_rule);

var _util = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function date(rule, value, callback, source, options) {
  // console.log('integer rule called %j', rule);
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  // console.log('validate on %s value', value);
  if (validate) {
    if ((0, _util.isEmptyValue)(value) && !rule.required) {
      return callback();
    }
    _rule2["default"].required(rule, value, source, errors, options);
    if (!(0, _util.isEmptyValue)(value)) {
      _rule2["default"].type(rule, value, source, errors, options);
      if (value) {
        _rule2["default"].range(rule, value.getTime(), source, errors, options);
      }
    }
  }
  callback(errors);
}

exports["default"] = date;
module.exports = exports['default'];

/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _rule = __webpack_require__(3);

var _rule2 = _interopRequireDefault(_rule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function required(rule, value, callback, source, options) {
  var errors = [];
  var type = Array.isArray(value) ? 'array' : typeof value === 'undefined' ? 'undefined' : _typeof(value);
  _rule2["default"].required(rule, value, source, errors, options, type);
  callback(errors);
}

exports["default"] = required;
module.exports = exports['default'];

/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newMessages = newMessages;
function newMessages() {
  return {
    "default": 'Validation error on field %s',
    required: '%s is required',
    "enum": '%s must be one of %s',
    whitespace: '%s cannot be empty',
    date: {
      format: '%s date %s is invalid for format %s',
      parse: '%s date could not be parsed, %s is invalid ',
      invalid: '%s date %s is invalid'
    },
    types: {
      string: '%s is not a %s',
      method: '%s is not a %s (function)',
      array: '%s is not an %s',
      object: '%s is not an %s',
      number: '%s is not a %s',
      date: '%s is not a %s',
      "boolean": '%s is not a %s',
      integer: '%s is not an %s',
      "float": '%s is not a %s',
      regexp: '%s is not a valid %s',
      email: '%s is not a valid %s',
      url: '%s is not a valid %s',
      hex: '%s is not a valid %s'
    },
    string: {
      len: '%s must be exactly %s characters',
      min: '%s must be at least %s characters',
      max: '%s cannot be longer than %s characters',
      range: '%s must be between %s and %s characters'
    },
    number: {
      len: '%s must equal %s',
      min: '%s cannot be less than %s',
      max: '%s cannot be greater than %s',
      range: '%s must be between %s and %s'
    },
    array: {
      len: '%s must be exactly %s in length',
      min: '%s cannot be less than %s in length',
      max: '%s cannot be greater than %s in length',
      range: '%s must be between %s and %s in length'
    },
    pattern: {
      mismatch: '%s value %s does not match pattern %s'
    },
    clone: function clone() {
      var cloned = JSON.parse(JSON.stringify(this));
      cloned.clone = this.clone;
      return cloned;
    }
  };
}

var messages = exports.messages = newMessages();

/***/ }),
/* 323 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "x-form-item",
    class: {
      'is-error': _vm.validateState === 'error',
        'is-validating': _vm.validateState === 'validating',
        'is-required': _vm.isRequired || _vm.required
    }
  }, [(_vm.label) ? _c('label', {
    staticClass: "x-form-item-label",
    style: (_vm.labelStyle),
    attrs: {
      "for": _vm.prop
    }
  }, [_vm._v(_vm._s(_vm.label))]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "x-form-item-content",
    style: (_vm.contentStyle)
  }, [_vm._t("default"), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "x-slide-up"
    }
  }, [(_vm.validateState === 'error' && _vm.showMessage && _vm.form.showMessage) ? _c('div', {
    staticClass: "x-form-item-error"
  }, [_vm._v("\n                " + _vm._s(_vm.validateMessage) + "\n            ")]) : _vm._e()])], 2)])
},staticRenderFns: []}

/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _table = __webpack_require__(325);

var _table2 = _interopRequireDefault(_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _table2.default;

/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(326),
  /* template */
  __webpack_require__(329),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _thead = __webpack_require__(327);

var _thead2 = _interopRequireDefault(_thead);

var _tbody = __webpack_require__(328);

var _tbody2 = _interopRequireDefault(_tbody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'XTable',

    props: {
        data: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        bordered: {
            type: Boolean,
            default: false
        },
        striped: {
            type: Boolean,
            default: false
        },
        height: {
            type: String,
            default: ''
        },
        emptyTip: {
            type: String,
            default: '暂无数据'
        },
        rowClassName: {
            type: [String, Function]
        },
        initialSelectedValueList: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        initialSelectedValue: {
            type: [String, Number]
        },
        selectionChange: {
            type: Function
        },
        radioChange: {
            type: Function
        }
    },

    components: {
        'x-tbody': _tbody2.default,
        'x-thead': _thead2.default
    },

    data: function data() {
        return {
            columns: [],
            rowKey: '',
            tableWidth: null,
            headerHeight: '',
            bodyHeight: '',
            scrollbarHeight: '',
            selectedValueList: this.initialSelectedValueList,
            selectedValue: this.initialSelectedValue
        };
    },

    computed: {
        selectedStatus: function selectedStatus() {
            if (this.selectedValueList.length === 0) {
                return 'none';
            } else {
                if (this.selectedValueList.length === this.data.length) {
                    return 'all';
                }
                return 'partial';
            }
        },
        dataMap: function dataMap() {
            var _this = this;

            var dataMap = {};
            this.data.forEach(function (item) {
                var value = item[_this.rowKey];
                dataMap[value] = item;
            });
            return dataMap;
        },
        bodyStyle: function bodyStyle() {
            var style = {};
            if (this.height) {
                style = {
                    'max-height': +this.height - this.headerHeight + 'px'
                };
                return style;
            }
            return '';
        },
        tableStyle: function tableStyle() {
            var style = {};

            if (this.data.length === 0) {
                style = {
                    'height': 300 + this.headerHeight + 'px'
                };
                return style;
            }
            if (this.height) {
                style = {
                    'height': this.bodyHeight + this.headerHeight < +this.height ? this.bodyHeight + this.headerHeight + 'px' : +this.height + 'px'
                };
                return style;
            }
            style = {
                'height': this.bodyHeight + this.headerHeight + 'px'
            };
            return style;
        },
        fixedBodyStyle: function fixedBodyStyle() {
            var style = {};
            if (this.height) {
                style = {
                    'max-height': +this.height - this.headerHeight - this.scrollbarHeight + 'px'
                };
                return style;
            }
            return '';
        },
        fixedLeftWidth: function fixedLeftWidth() {
            if (this.columns.length > 0 && this.columns[0].width) {
                return this.columns[0].width;
            }
            return '';
        },
        fixedRightWidth: function fixedRightWidth() {
            var columnsLen = this.columns.length;
            if (columnsLen > 0 && this.columns[columnsLen - 1].width) {
                return this.columns[columnsLen - 1].width;
            }
            return '';
        },
        fixedLeftTableStyle: function fixedLeftTableStyle() {
            var style = {};
            if (this.height) {
                style = {
                    'width': this.fixedLeftWidth,
                    'height': +this.height - this.scrollbarHeight + 'px'
                };
                return style;
            }
            style = {
                'width': this.fixedLeftWidth,
                'height': this.bodyHeight + this.headerHeight - this.scrollbarHeight + 'px'
            };
            return style;
        },
        fixedRightTableStyle: function fixedRightTableStyle() {
            var style = {};
            if (this.height) {
                style = {
                    'width': this.fixedRightWidth,
                    'height': +this.height - this.scrollbarHeight + 'px',
                    'right': this.scrollbarHeight + 'px'
                };
                return style;
            }
            style = {
                'width': this.fixedRightWidth,
                'height': this.bodyHeight + this.headerHeight - this.scrollbarHeight + 'px'
            };
            return style;
        },
        fixedNum: function fixedNum() {
            return this.columns.filter(function (column) {
                return column.fixed === 'left';
            });
        },
        rightFixedColumns: function rightFixedColumns() {
            return this.columns.filter(function (column) {
                return column.fixed === 'right';
            });
        }
    },
    watch: {
        data: function data() {
            var _this2 = this;

            this.$nextTick(function () {
                _this2.bodyHeight = _this2.$refs.bodyWrapper.offsetHeight;
                _this2.scrollbarHeight = _this2.$refs.bodyWrapper.offsetHeight - _this2.$refs.bodyWrapper.clientHeight;
            });
        }
    },
    mounted: function mounted() {
        var _this3 = this;

        this.$nextTick(function () {
            _this3.headerHeight = _this3.$refs.headerWrapper.offsetHeight;
            _this3.bodyHeight = _this3.$refs.bodyWrapper.offsetHeight;
            _this3.scrollbarHeight = _this3.$refs.bodyWrapper.offsetHeight - _this3.$refs.bodyWrapper.clientHeight;
            _this3.$refs.bodyWrapper.style.top = +_this3.headerHeight + 'px';
            if (_this3.$refs.fixedBodyWrapper) {
                _this3.$refs.fixedBodyWrapper.style.top = +_this3.headerHeight + 'px';
            }
            if (_this3.$refs.rightFixedBodyWrapper) {
                _this3.$refs.rightFixedBodyWrapper.style.top = +_this3.headerHeight + 'px';
            }
        });
        this.bindEvents();
    },


    methods: {
        bindEvents: function bindEvents() {
            var headerWrapper = this.$refs.headerWrapper;

            var refs = this.$refs;
            this.$refs.bodyWrapper.addEventListener('scroll', function () {
                if (headerWrapper) {
                    headerWrapper.scrollLeft = refs.bodyWrapper.scrollLeft;
                }
                if (refs.fixedBodyWrapper) {
                    refs.fixedBodyWrapper.scrollTop = refs.bodyWrapper.scrollTop;
                };
                if (refs.rightFixedBodyWrapper) {
                    refs.rightFixedBodyWrapper.scrollTop = refs.bodyWrapper.scrollTop;
                };
            });
        },
        getDataList: function getDataList(valueList) {
            var _this4 = this;

            return valueList.map(function (value) {
                return _this4.dataMap[value];
            });
        },
        onChangeCheckboxAll: function onChangeCheckboxAll(status) {
            var _this5 = this;

            if (status) {
                this.selectedValueList = this.data.map(function (item) {
                    return item[_this5.rowKey];
                });
            } else {
                this.selectedValueList = [];
            }
            this.$emit('selection-change', this.selectedValueList, this.getDataList(this.selectedValueList));
        },
        onChangeCheckbox: function onChangeCheckbox(status, rowKey) {
            var index = this.selectedValueList.indexOf(rowKey);

            if (status) {
                if (index === -1) {
                    this.selectedValueList = this.selectedValueList.concat(rowKey);
                }
            } else {
                if (index > -1) {
                    this.selectedValueList.splice(index, 1);
                }
            }
            this.$emit('selection-change', this.selectedValueList, this.getDataList(this.selectedValueList));
        },
        onChangeRadio: function onChangeRadio(status, value) {
            this.selectedValue = this.selectedValue === value ? '' : value;
            this.$emit('radio-change', this.selectedValue, this.dataMap[this.selectedValue]);
        },
        setHoverRow: function setHoverRow(index) {
            this.$el.querySelectorAll('tbody').forEach(function (trItem, trIndex) {
                trItem.children[index].classList.add('hover-row');
            });
        },
        removeHoverRow: function removeHoverRow(index) {
            this.$el.querySelectorAll('tbody').forEach(function (trItem, trIndex) {
                trItem.children[index].classList.remove('hover-row');
            });
        }
    }
};

/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _checkbox = __webpack_require__(65);

var _checkbox2 = _interopRequireDefault(_checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: {
        columns: {
            type: Array
        },
        selectedStatus: {
            type: String
        }
    },

    components: {
        'x-checkbox': _checkbox2.default
    },

    methods: {
        onChange: function onChange(e) {
            this.$emit('changeCheckboxAll', e.target.checked);
        },
        convertToRows: function convertToRows(originColumns) {
            var maxLevel = 1;

            var traverse = function traverse(column, parent) {
                if (parent) {
                    column.level = parent.level + 1;
                    if (maxLevel < column.level) {
                        maxLevel = column.level;
                    }
                }
                if (column.children.length > 0) {
                    var colSpan = 0;
                    column.children.forEach(function (subColumn) {
                        traverse(subColumn, column);
                        colSpan += subColumn.colSpan;
                    });
                    column.colSpan = colSpan;
                } else {
                    column.colSpan = 1;
                }
            };

            originColumns.forEach(function (column) {
                column.level = 1;
                traverse(column);
            });

            var rows = [];
            for (var i = 0; i < maxLevel; i++) {
                rows.push([]);
            }

            var allColumns = this.getAllColumns(originColumns);

            allColumns.forEach(function (column) {
                if (!column.children || column.children.length === 0) {
                    column.rowSpan = maxLevel - column.level + 1;
                } else {
                    column.rowSpan = 1;
                }
                rows[column.level - 1].push(column);
            });

            return rows;
        },
        getAllColumns: function getAllColumns(columns) {
            var _this = this;

            var result = [];
            columns.forEach(function (column) {
                if (column.children) {
                    result.push(column);
                    result.push.apply(result, _this.getAllColumns(column.children));
                } else {
                    result.push(column);
                }
            });
            return result;
        }
    },

    render: function render() {
        var _this2 = this;

        var h = arguments[0];

        var columnRows = this.convertToRows(this.columns);
        return h(
            'thead',
            null,
            [columnRows.map(function (columns) {
                return h(
                    'tr',
                    null,
                    [columns.map(function (columnItem) {
                        switch (columnItem.type) {
                            case 'selection':
                                return h(
                                    'th',
                                    {
                                        attrs: { colspan: columnItem.colSpan,
                                            rowspan: columnItem.rowSpan
                                        }
                                    },
                                    [h(
                                        'x-checkbox',
                                        {
                                            attrs: {
                                                indeterminate: _this2.selectedStatus === 'partial',
                                                value: _this2.selectedStatus === 'all'
                                            },
                                            on: {
                                                'change': _this2.onChange
                                            }
                                        },
                                        []
                                    )]
                                );
                            case 'radio':
                                return h(
                                    'th',
                                    null,
                                    []
                                );
                            case 'normal':
                            default:
                                var content = columnItem.headerRender.call(_this2, {
                                    columnItem: columnItem
                                });
                                return h(
                                    'th',
                                    {
                                        attrs: { colspan: columnItem.colSpan,
                                            rowspan: columnItem.rowSpan
                                        }
                                    },
                                    [content]
                                );
                        }
                    })]
                );
            })]
        );
    }
};

/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        data: {
            type: Array
        },
        columns: {
            type: Array
        },
        rowClassName: {
            type: [String, Function]
        },
        selectedValueList: {
            type: Array
        },
        selectedValue: {
            type: [String, Number]
        }
    },

    methods: {
        onChangeCheckbox: function onChangeCheckbox(value, e) {
            this.$emit('changeCheckbox', e.target.checked, value);
        },
        onChangeRadio: function onChangeRadio(value, e) {
            this.$emit('changeRadio', e.target.checked, value);
        },
        getRowClass: function getRowClass(row, index) {
            var classes = [];

            var rowClassName = this.rowClassName;
            if (typeof rowClassName === 'string') {
                classes.push(rowClassName);
            } else if (typeof rowClassName === 'function') {
                classes.push(rowClassName(row, index) || '');
            }

            return classes.join(' ');
        },
        onMouseenterTD: function onMouseenterTD(content, dataItem, columnItem, e) {
            var tdElem = e.target;
            if (columnItem.singleLine && tdElem.scrollWidth > tdElem.offsetWidth) {
                tdElem.setAttribute('title', content);
            } else {
                tdElem.removeAttribute('title');
            }
        },
        onMouseenterTR: function onMouseenterTR(index) {
            this.$emit('setHoverRow', index);
        },
        onMouseleaveTR: function onMouseleaveTR(index) {
            this.$emit('removeHoverRow', index);
        },
        doFlattenColumns: function doFlattenColumns(allColumns) {
            var _this = this;

            var result = [];
            if (allColumns && allColumns.length > 0) {
                allColumns.forEach(function (column) {
                    if (column.children && column.children.length > 0) {
                        result.push.apply(result, _this.doFlattenColumns(column.children));
                    } else {
                        result.push(column);
                    }
                });
            }
            return result;
        }
    },

    render: function render() {
        var _this2 = this;

        var h = arguments[0];

        var dataColumns = this.doFlattenColumns(this.columns);
        return h(
            'tbody',
            null,
            [this.data.map(function (dataItem, dataIndex) {
                return h(
                    'tr',
                    {
                        'class': [_this2.getRowClass(dataItem, dataIndex)],
                        on: {
                            'mouseenter': _this2.onMouseenterTR.bind(_this2, dataIndex),
                            'mouseleave': _this2.onMouseleaveTR.bind(_this2, dataIndex)
                        }
                    },
                    [dataColumns.map(function (columnItem) {
                        var currentUniqueValue = dataItem[columnItem.prop];
                        switch (columnItem.type) {
                            case 'selection':
                                return h(
                                    'td',
                                    { 'class': columnItem.className },
                                    [h(
                                        'x-checkbox',
                                        {
                                            attrs: {
                                                value: _this2.selectedValueList.indexOf(currentUniqueValue) > -1
                                            },
                                            on: {
                                                'change': _this2.onChangeCheckbox.bind(_this2, currentUniqueValue)
                                            }
                                        },
                                        []
                                    )]
                                );
                            case 'radio':
                                return h(
                                    'td',
                                    { 'class': columnItem.className },
                                    [h(
                                        'x-checkbox',
                                        {
                                            attrs: {
                                                value: _this2.selectedValue === currentUniqueValue
                                            },
                                            on: {
                                                'change': _this2.onChangeRadio.bind(_this2, currentUniqueValue)
                                            }
                                        },
                                        []
                                    )]
                                );
                            case 'normal':
                            default:
                                var content = columnItem.render.call(_this2, {
                                    dataItem: dataItem,
                                    columnItem: columnItem,
                                    dataIndex: dataIndex
                                });
                                return h(
                                    'td',
                                    {
                                        'class': columnItem.className,
                                        on: {
                                            'mouseenter': _this2.onMouseenterTD.bind(_this2, content, dataItem, columnItem)
                                        }
                                    },
                                    [content]
                                );
                        }
                    })]
                );
            })]
        );
    }
};

/***/ }),
/* 329 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "x-table",
    class: {
      'x-table-bordered': _vm.bordered,
      'x-table-striped': _vm.striped
    },
    style: (_vm.tableStyle)
  }, [_c('div', {
    ref: "hiddenColumns",
    staticClass: "x-table-hidden"
  }, [_vm._t("default")], 2), _vm._v(" "), _c('div', {
    ref: "headerWrapper",
    staticClass: "x-table-header-wrapper"
  }, [_c('table', [_c('colgroup', _vm._l((_vm.columns), function(item) {
    return _c('col', {
      attrs: {
        "width": item.width
      }
    })
  })), _vm._v(" "), _c('x-thead', {
    attrs: {
      "columns": _vm.columns,
      "selected-status": _vm.selectedStatus
    },
    on: {
      "changeCheckboxAll": _vm.onChangeCheckboxAll
    }
  })], 1)]), _vm._v(" "), _c('div', {
    ref: "bodyWrapper",
    staticClass: "x-table-body-wrapper",
    style: (_vm.bodyStyle)
  }, [_c('table', [_c('colgroup', _vm._l((_vm.columns), function(item) {
    return _c('col', {
      attrs: {
        "width": item.width
      }
    })
  })), _vm._v(" "), _c('x-tbody', {
    attrs: {
      "data": _vm.data,
      "columns": _vm.columns,
      "row-class-name": _vm.rowClassName,
      "selected-value-list": _vm.selectedValueList,
      "selected-value": _vm.selectedValue
    },
    on: {
      "changeCheckbox": _vm.onChangeCheckbox,
      "changeRadio": _vm.onChangeRadio,
      "setHoverRow": _vm.setHoverRow,
      "removeHoverRow": _vm.removeHoverRow
    }
  })], 1)]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.fixedNum.length > 0),
      expression: "fixedNum.length > 0"
    }],
    staticClass: "x-table-fixed",
    style: (_vm.fixedLeftTableStyle)
  }, [_c('div', {
    ref: "fixedHeaderWrapper",
    staticClass: "x-table-fixed-header-wrapper"
  }, [_c('table', [_c('colgroup', _vm._l((_vm.columns), function(item) {
    return _c('col', {
      attrs: {
        "width": item.width
      }
    })
  })), _vm._v(" "), _c('x-thead', {
    attrs: {
      "columns": _vm.columns,
      "selected-status": _vm.selectedStatus
    },
    on: {
      "changeCheckboxAll": _vm.onChangeCheckboxAll
    }
  })], 1)]), _vm._v(" "), _c('div', {
    ref: "fixedBodyWrapper",
    staticClass: "x-table-fixed-body-wrapper",
    style: (_vm.fixedBodyStyle)
  }, [_c('table', [_c('colgroup', _vm._l((_vm.columns), function(item) {
    return _c('col', {
      attrs: {
        "width": item.width
      }
    })
  })), _vm._v(" "), _c('x-tbody', {
    attrs: {
      "data": _vm.data,
      "columns": _vm.columns,
      "row-class-name": _vm.rowClassName,
      "selected-value-list": _vm.selectedValueList,
      "selected-value": _vm.selectedValue
    },
    on: {
      "changeCheckbox": _vm.onChangeCheckbox,
      "changeRadio": _vm.onChangeRadio,
      "setHoverRow": _vm.setHoverRow,
      "removeHoverRow": _vm.removeHoverRow
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.rightFixedColumns.length > 0),
      expression: "rightFixedColumns.length > 0"
    }],
    staticClass: "x-table-fixed-right",
    style: (_vm.fixedRightTableStyle)
  }, [_c('div', {
    ref: "rightFixedHeaderWrapper",
    staticClass: "x-table-fixed-right-header-wrapper"
  }, [_c('table', [_c('colgroup', _vm._l((_vm.columns), function(item) {
    return _c('col', {
      attrs: {
        "width": item.width
      }
    })
  })), _vm._v(" "), _c('x-thead', {
    attrs: {
      "columns": _vm.columns,
      "selected-status": _vm.selectedStatus
    },
    on: {
      "changeCheckboxAll": _vm.onChangeCheckboxAll
    }
  })], 1)]), _vm._v(" "), _c('div', {
    ref: "rightFixedBodyWrapper",
    staticClass: "x-table-fixed-right-body-wrapper",
    style: (_vm.fixedBodyStyle)
  }, [_c('table', [_c('colgroup', _vm._l((_vm.columns), function(item) {
    return _c('col', {
      attrs: {
        "width": item.width
      }
    })
  })), _vm._v(" "), _c('x-tbody', {
    attrs: {
      "data": _vm.data,
      "columns": _vm.columns,
      "row-class-name": _vm.rowClassName,
      "selected-value-list": _vm.selectedValueList,
      "selected-value": _vm.selectedValue
    },
    on: {
      "changeCheckbox": _vm.onChangeCheckbox,
      "changeRadio": _vm.onChangeRadio,
      "setHoverRow": _vm.setHoverRow,
      "removeHoverRow": _vm.removeHoverRow
    }
  })], 1)])]), _vm._v(" "), (_vm.data.length === 0) ? _c('div', {
    ref: "emptyTip",
    staticClass: "x-table-empty-tip"
  }, [_vm._v("\n        " + _vm._s(_vm.emptyTip) + "\n    ")]) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tableColumn = __webpack_require__(331);

var _tableColumn2 = _interopRequireDefault(_tableColumn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _tableColumn2.default;

/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(332),
  /* template */
  __webpack_require__(343),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = __webpack_require__(333);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SINGLE_LINE_CLASS_NAME = 'x-table-td-single-line';
exports.default = {
    name: 'XTableColumn',
    props: {
        title: {
            type: String
        },
        prop: {
            type: String
        },
        type: {
            type: String
        },
        width: {
            type: String
        },
        fixed: {
            type: String,
            default: function _default() {
                return '';
            }
        },
        className: {
            type: String,
            default: function _default() {
                return '';
            }
        },
        singleLine: {
            type: Boolean,
            default: function _default() {
                return false;
            }
        }
    },
    data: function data() {
        return {
            orderQueue: []
        };
    },
    mounted: function mounted() {
        var _this = this;

        this.$options.render = function (h) {
            return h('div', _this.$slots.default);
        };
        var parent = this.$parent;
        var origin = this.$parent;
        while (origin && origin.$options.name !== 'XTable') {
            origin = origin.$parent;
        }
        this.table = origin;
        this.isSubColumn = parent !== origin;
        var slots = this.$scopedSlots;
        if (this.type) {
            this.table.rowKey = this.prop;
        }
        var tdClassName = this.singleLine ? this.className + ' ' + SINGLE_LINE_CLASS_NAME : this.className;
        var column = {
            title: this.title,
            type: this.type || 'normal',
            fixed: this.fixed || '',
            prop: this.prop,
            width: this.width,
            className: tdClassName,
            singleLine: this.singleLine,
            children: [],
            orderQueue: this.orderQueue,

            render: slots.default ? function (args) {
                return slots.default(args);
            } : function (_ref) {
                var dataItem = _ref.dataItem,
                    columnItem = _ref.columnItem;

                return dataItem[columnItem.prop];
            },
            headerRender: slots['column-header-slot'] ? function (args) {
                return slots['column-header-slot'](args);
            } : function () {
                return _this.title;
            }
        };
        this.columnConfig = column;
        var columnIndex = void 0;
        if (!this.isSubColumn) {
            columnIndex = [].indexOf.call(parent.$refs.hiddenColumns.children, this.$el);
        } else {
            columnIndex = [].indexOf.call(parent.$el.children, this.$el);
        }
        this.insertColumn(this.table, column, columnIndex, this.isSubColumn ? parent.columnConfig : null);
    },

    watch: {
        title: function title(val) {
            this.updateColumn('title');
        },
        prop: function prop(val) {
            this.updateColumn('prop');
        },
        type: function type(val) {
            this.updateColumn('type');
        },
        width: function width(val) {
            this.updateColumn('width');
        },
        fixed: function fixed(val) {
            this.updateColumn('fixed');
        },
        className: function className(val) {
            var tdClassName = this.singleLine ? this.className + ' ' + SINGLE_LINE_CLASS_NAME : this.className;
            this.updateColumn('className', tdClassName);
        },
        singleLine: function singleLine(val) {
            this.updateColumn('singleLine');
        }
    },
    methods: {
        insertColumn: function insertColumn(table, column, index, parent) {
            var array = table.columns;
            if (parent && parent !== null) {
                var _orderQueue;

                array = parent.children;
                if (!array) {
                    array = parent.children = [];
                }
                (_orderQueue = this.orderQueue).push.apply(_orderQueue, (0, _toConsumableArray3.default)(parent.orderQueue));
            }
            if (typeof index !== 'undefined') {
                array.splice(index, 0, column);
                this.orderQueue.push(index);
            } else {
                this.orderQueue.push(array.push(column) - 1);
            }
        },
        updateColumn: function updateColumn(name, customVal) {
            var value = customVal || this[name];
            var target = this.getTarget();
            var parent = !this.isSubColumn ? target.parent : target.parent.children[target.curOrder];
            if (value) {
                this.$set(parent, name, value);
            }
        },
        removeColumn: function removeColumn() {
            var target = this.getTarget();
            var parent = !this.isSubColumn ? this.table.columns : target.parent.children;
            parent.splice(target.curOrder, 1);
        },
        getTarget: function getTarget() {
            var target = {};
            target.curOrder = this.orderQueue[this.orderQueue.length - 1];
            var parent = this.table.columns[this.orderQueue[0]];
            for (var i = 1; i < this.orderQueue.length - 1; i++) {
                var item = this.orderQueue[i];
                parent = parent.children[item];
            }
            target.parent = parent;
            return target;
        }
    },
    destroyed: function destroyed() {
        this.removeColumn();
    }
};

/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(334);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(335), __esModule: true };

/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(58);
__webpack_require__(336);
module.exports = __webpack_require__(4).Array.from;

/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx            = __webpack_require__(48)
  , $export        = __webpack_require__(10)
  , toObject       = __webpack_require__(25)
  , call           = __webpack_require__(337)
  , isArrayIter    = __webpack_require__(338)
  , toLength       = __webpack_require__(53)
  , createProperty = __webpack_require__(339)
  , getIterFn      = __webpack_require__(340);

$export($export.S + $export.F * !__webpack_require__(342)(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(20);
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(24)
  , ITERATOR   = __webpack_require__(5)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(7)
  , createDesc      = __webpack_require__(22);

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(341)
  , ITERATOR  = __webpack_require__(5)('iterator')
  , Iterators = __webpack_require__(24);
module.exports = __webpack_require__(4).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(33)
  , TAG = __webpack_require__(5)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(5)('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

/***/ }),
/* 343 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c("div")
},staticRenderFns: []}

/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StepsItem = undefined;

var _steps = __webpack_require__(345);

var _steps2 = _interopRequireDefault(_steps);

var _stepsItem = __webpack_require__(349);

var _stepsItem2 = _interopRequireDefault(_stepsItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _steps2.default;
exports.StepsItem = _stepsItem2.default;

/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(346),
  /* template */
  __webpack_require__(348),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(347);

var _extends3 = _interopRequireDefault(_extends2);

var _symbol = __webpack_require__(76);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'xSteps',
    componentName: 'xSteps',
    props: {
        value: {
            type: Number,
            defaultValue: -1
        },
        valueCancelable: {
            type: Boolean,
            defaultValue: false
        }
    },
    data: function data() {
        return {
            wrapStyle: {},
            calcQueued: false,
            overflowedLeft: false,
            overflowedRight: false,
            overflowedLeftVisible: false,
            overflowedRightVisible: false,
            overflowCheckInterval: null,
            overflowScrollInterval: null
        };
    },

    methods: {
        calc: function calc() {
            var _this = this;

            if (!this.calcQueued) {
                this.calcQueued = true;
                this.$nextTick(function () {
                    _this.calcQueued = false;
                    var minWidth = 0;
                    _this.$children.forEach(function (child, index) {
                        if (!child[_symbol.stepsItemComponentSymbol]) {
                            throw new Error('<steps> may only contain <steps-item> children');
                        }
                        child.itemIndex = index;
                        minWidth += child.minWidth || 100;
                        if (index < _this.$children.length - 1) {
                            minWidth += 50;
                        }
                    });
                    _this.wrapStyle = (0, _extends3.default)({}, _this.wrapStyle, {
                        minWidth: minWidth + 'px'
                    });
                });
            }
        },
        mIn: function mIn(isLeft) {
            var _this2 = this;

            var container = this.$el;
            var content = this.$refs.wrap;
            if (!container || !content) {
                return;
            }
            this.overflowScrollInterval = setInterval(function () {
                var containerRc = container.getBoundingClientRect();
                var contentRc = content.getBoundingClientRect();
                var maxLeft = contentRc.width - containerRc.width;
                var left = contentRc.left - containerRc.left;
                if (isLeft) {
                    left += 40;
                } else {
                    left -= 40;
                }
                if (left > 0 || maxLeft <= 0 && left < 0) {
                    left = 0;
                } else if (maxLeft > 0 && -left > maxLeft) {
                    left = -maxLeft;
                }
                _this2.wrapStyle = (0, _extends3.default)({}, _this2.wrapStyle, {
                    transform: 'translateX(' + left + 'px)'
                });
                setTimeout(function () {
                    _this2.checkOverflow();
                }, 30);
            }, 100);
        },
        mOut: function mOut(isLeft) {
            clearInterval(this.overflowScrollInterval);
        },
        checkOverflow: function checkOverflow() {
            var _this3 = this;

            var container = this.$el;
            var content = this.$refs.wrap;
            if (!container || !content) {
                return;
            }
            var containerRc = container.getBoundingClientRect();
            var contentRc = content.getBoundingClientRect();
            var overflowedLeft = false;
            var overflowedRight = false;
            if (contentRc.left < containerRc.left) {
                overflowedLeft = true;
            }
            if (contentRc.right > containerRc.right) {
                overflowedRight = true;
            }
            if (this.overflowedLeft !== overflowedLeft) {
                if (overflowedLeft) {
                    this.overflowedLeft = true;
                    setTimeout(function () {
                        _this3.overflowedLeftVisible = true;
                    }, 30);
                } else {
                    this.overflowedLeftVisible = false;
                    setTimeout(function () {
                        _this3.overflowedLeft = false;
                    }, 600);
                }
            }
            if (this.overflowedRight !== overflowedRight) {
                if (overflowedRight) {
                    this.overflowedRight = true;
                    setTimeout(function () {
                        _this3.overflowedRightVisible = true;
                    }, 30);
                } else {
                    this.overflowedRightVisible = false;
                    setTimeout(function () {
                        _this3.overflowedRight = false;
                    }, 600);
                }
            }
            var maxLeft = contentRc.width - containerRc.width;
            var left = contentRc.left - containerRc.left;
            if (left > 0 || maxLeft <= 0 && left < 0) {
                this.wrapStyle = (0, _extends3.default)({}, this.wrapStyle, {
                    transform: 'translate(0px)'
                });
            } else if (maxLeft > 0 && -left > maxLeft) {
                this.wrapStyle = (0, _extends3.default)({}, this.wrapStyle, {
                    transform: 'translate(' + -maxLeft + 'px)'
                });
            }
        }
    },
    created: function created() {
        this[_symbol.stepsComponentSymbol] = true;
    },
    mounted: function mounted() {
        var _this4 = this;

        this.overflowCheckInterval = setInterval(function () {
            _this4.checkOverflow();
        }, 1000);
        setTimeout(function () {
            _this4.checkOverflow();
        }, 30);
    },
    destroyed: function destroyed() {
        clearInterval(this.overflowCheckInterval);
    }
};

/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(57);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 348 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "x-steps"
  }, [_c('div', {
    ref: "wrap",
    staticClass: "x-steps-wrap",
    style: (_vm.wrapStyle)
  }, [_vm._t("default")], 2), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.overflowedLeft),
      expression: "overflowedLeft"
    }],
    class: ['x-steps-overflow', 'x-steps-overflow-left', {
      'x-steps-overflow-visible': _vm.overflowedLeftVisible
    }],
    on: {
      "mouseover": function($event) {
        _vm.mIn(true)
      },
      "mouseout": function($event) {
        _vm.mOut(true)
      }
    }
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.overflowedRight),
      expression: "overflowedRight"
    }],
    class: ['x-steps-overflow', 'x-steps-overflow-right', {
      'x-steps-overflow-visible': _vm.overflowedRightVisible
    }],
    on: {
      "mouseover": function($event) {
        _vm.mIn(false)
      },
      "mouseout": function($event) {
        _vm.mOut(false)
      }
    }
  })])
},staticRenderFns: []}

/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(350),
  /* template */
  __webpack_require__(351),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _symbol = __webpack_require__(76);

exports.default = {
    name: 'xStepsItem',
    componentName: 'xStepsItem',
    props: {
        title: {
            type: String,
            defaultValue: ''
        },
        description: {
            type: String,
            defaultValue: ''
        },
        status: {
            type: String,
            defaultValue: 'default'
        },
        progress: {
            type: Number,
            defaultValue: -1
        },
        minWidth: {
            type: Number,
            defaultValue: 100
        },
        icon: {
            defaultValue: -1
        }
    },
    data: function data() {
        return {
            itemIndex: -1
        };
    },

    computed: {
        active: function active() {
            return this.$parent.value === this.itemIndex;
        },
        activatable: function activatable() {
            return this.$parent.value >= 0;
        },
        percent: function percent() {
            return Math.round(this.progress * 100) + '%';
        }
    },
    methods: {
        onClick: function onClick() {
            if (this.$parent.valueCancelable && this.itemIndex === this.$parent.value) {
                this.$parent.$emit('input', -1);
            } else {
                this.$parent.$emit('input', this.itemIndex);
            }
        }
    },
    created: function created() {
        this[_symbol.stepsItemComponentSymbol] = true;
        if (!this.$parent[_symbol.stepsComponentSymbol]) {
            throw new Error('<steps-item> must used be in <steps>');
        }
        this.$parent.calc();
    },
    destroyed: function destroyed() {
        this.$parent.calc();
    }
};

/***/ }),
/* 351 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['x-steps-item', ("x-steps-item-" + _vm.status), {
      active: _vm.active,
      activatable: _vm.activatable
    }],
    style: ({
      minWidth: ((_vm.minWidth || 100) + "px")
    }),
    on: {
      "click": _vm.onClick
    }
  }, [_c('div', {
    staticClass: "x-steps-item-title"
  }, [_c('div', {
    staticClass: "x-steps-item-title-mark"
  }, [_c('span', {
    staticClass: "x-steps-item-title-mark-text"
  }, [(_vm.icon >= 0) ? _c('span', [_vm._v(_vm._s(_vm.icon))]) : (typeof _vm.icon === 'string') ? _c('x-icon', {
    attrs: {
      "name": _vm.icon
    }
  }) : _c('span', [_vm._v(_vm._s(_vm.itemIndex + 1))])], 1), _vm._v(" "), _c('span', {
    staticClass: "x-steps-item-title-mark-circle"
  })]), _vm._v(" "), _c('div', {
    staticClass: "x-steps-item-title-text"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), (_vm.progress >= 0) ? _c('div', {
    staticClass: "x-steps-item-title-progress"
  }, [_c('x-tooltip', {
    attrs: {
      "content": _vm.percent,
      "placement": "top"
    }
  }, [_c('div', {
    staticClass: "x-steps-item-title-progress-value",
    style: ({
      width: _vm.percent
    })
  })])], 1) : _c('div', {
    staticClass: "x-steps-item-title-line"
  })]), _vm._v(" "), _c('div', {
    staticClass: "x-steps-item-content"
  }, [_vm._t("default", [_vm._v(_vm._s(_vm.description))])], 2)])
},staticRenderFns: []}

/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _collapse = __webpack_require__(353);

var _collapse2 = _interopRequireDefault(_collapse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _collapse2.default;

/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(354),
  /* template */
  __webpack_require__(355),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _emitter = __webpack_require__(2);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'x-collapse',
    componentName: 'x-collapse',
    props: {
        openOnlyOne: {
            type: Boolean,
            default: false
        },
        value: {
            type: [Array, String, Number],
            default: []
        }
    },
    mixins: [_emitter2.default],
    data: function data() {
        return {
            openItems: this.value ? [].concat(this.value) : []
        };
    },
    watch: {
        openItems: function openItems(val) {
            this.$emit('input', val);
        }
    },
    methods: {
        onItemClick: function onItemClick(id) {
            var index = this.openItems.indexOf(id);
            if (index > -1) {
                this.openItems.splice(index, 1);
            } else {
                if (this.openOnlyOne) {
                    this.openItems = [];
                }
                this.openItems.push(id);
            }
            this.$emit('change', this.openItems);
        }
    },
    mounted: function mounted() {
        var _this = this;

        this.$nextTick(function () {
            if (_this.openOnlyOne && _this.openItems.length > 1) {
                var tempItem = _this.openItems[0];
                _this.openItems = [];
                _this.openItems.push(tempItem);
            }
            _this.$on('itemClick', _this.onItemClick);
        });
    }
};

/***/ }),
/* 355 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "x-collapse"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 356 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _collapseItem = __webpack_require__(357);

var _collapseItem2 = _interopRequireDefault(_collapseItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _collapseItem2.default;

/***/ }),
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(358),
  /* template */
  __webpack_require__(359),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _emitter = __webpack_require__(2);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'x-collapse-item',
    componentName: 'x-collapse-item',
    props: {
        id: {
            type: [String, Number],
            required: true
        },
        iconUpName: {
            type: String,
            default: 'chevron-up'
        },
        iconDownName: {
            type: String,
            default: 'chevron-down'
        }
    },
    mixins: [_emitter2.default],
    data: function data() {
        return {
            orginHeight: 'auto',
            isReady: false
        };
    },

    computed: {
        isOpen: function isOpen() {
            return this.$parent.openItems.indexOf(this.id) > -1;
        },
        contentHeight: function contentHeight() {
            if (this.isReady) {
                return this.isOpen ? this.orginHeight : 0;
            }
        }
    },
    methods: {
        clickHeader: function clickHeader() {
            this.dispatch('x-collapse', 'itemClick', this.id);
        }
    },
    mounted: function mounted() {
        var _this = this;

        this.$nextTick(function () {
            _this.isReady = true;
            _this.orginHeight = window.getComputedStyle(_this.$refs.content, null).height;
        });
    }
};

/***/ }),
/* 359 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "x-collapse-item",
    class: {
      'is-active': _vm.isOpen
    }
  }, [_c('div', {
    staticClass: "x-collapse-item-header",
    on: {
      "click": _vm.clickHeader
    }
  }, [_vm._t("titleLeft"), _vm._v(" "), _c('x-icon', {
    attrs: {
      "name": _vm.isOpen ? _vm.iconUpName : _vm.iconDownName,
      "size": "14"
    }
  }), _vm._v(" "), _vm._t("titleRight")], 2), _vm._v(" "), _c('div', {
    ref: "content",
    staticClass: "x-collapse-item-wrap",
    style: ({
      height: _vm.contentHeight
    })
  }, [_c('div', {
    staticClass: "x-collapse-item-content"
  }, [_vm._t("default")], 2)])])
},staticRenderFns: []}

/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _upload = __webpack_require__(361);

var _upload2 = _interopRequireDefault(_upload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _upload2.default;

/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(362),
  /* template */
  null,
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _uploadList = __webpack_require__(363);

var _uploadList2 = _interopRequireDefault(_uploadList);

var _formDataUpload = __webpack_require__(366);

var _formDataUpload2 = _interopRequireDefault(_formDataUpload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = function noop() {};

exports.default = {
    name: 'XUpload',

    components: {
        UploadList: _uploadList2.default,
        FormDataUpload: _formDataUpload2.default
    },
    props: {
        action: {
            type: String,
            required: true
        },
        headers: Object,
        name: {
            type: String,
            default: 'file'
        },
        disabled: Boolean,
        credentials: Boolean,
        accept: String,
        data: Object,
        multiple: Boolean,
        showFileList: {
            type: Boolean,
            default: true
        },
        listType: {
            type: String,
            default: 'text' },
        fileList: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        autoUpload: {
            type: Boolean,
            default: true
        },
        beforeUpload: Function,
        onRemove: {
            type: Function,
            default: noop
        },
        onChange: {
            type: Function,
            default: noop
        },
        onPreview: Function,
        onSuccess: {
            type: Function,
            default: noop
        },
        onProgress: {
            type: Function,
            default: noop
        },
        onError: {
            type: Function,
            default: noop
        }
    },

    data: function data() {
        return {
            uploadFiles: [],
            fileIndex: 1
        };
    },


    watch: {
        fileList: {
            immediate: true,
            deep: true,
            handler: function handler(val) {
                var _this = this;

                this.uploadFiles = val.map(function (item) {
                    item.uid = item.uid || Date.now() + _this.fileIndex++;
                    item.status = 'success';
                    return item;
                });
            }
        }
    },

    methods: {
        handleRemove: function handleRemove(file, type) {
            if (type === 'rawFile') {
                file = this.getFile(file);
            }

            this.abort(file);

            var fileList = this.uploadFiles;
            fileList.splice(fileList.indexOf(file), 1);
            this.onRemove(file, fileList);
            this.onChange(file, fileList);
        },
        handleStart: function handleStart(rawFile) {
            rawFile.uid = Date.now() + this.fileIndex++;
            var file = {
                uid: rawFile.uid,
                status: 'ready',
                name: rawFile.name,
                size: rawFile.size,
                percentage: 0,
                raw: rawFile
            };

            try {
                file.url = URL.createObjectURL(rawFile);
            } catch (err) {
                return;
            }

            this.uploadFiles.push(file);
            this.onChange(file, this.uploadFiles);
        },
        handleProgress: function handleProgress(e, rawFile) {
            var file = this.getFile(rawFile);
            file.status = 'uploading';
            file.progress = e.percent || 0;
            this.onProgress(e, file, this.uploadFiles);
        },
        handleSuccess: function handleSuccess(res, rawFile) {
            var file = this.getFile(rawFile);
            file.status = 'success';
            file.response = res;

            this.onSuccess(res, file, this.uploadFiles);
            this.onChange(file, this.uploadFiles);
        },
        handleError: function handleError(err, rawFile) {
            var file = this.getFile(rawFile);
            file.status = 'fail';

            var fileList = this.uploadFiles;
            fileList.splice(fileList.indexOf(file), 1);

            this.onError(err, file, fileList);
            this.onChange(file, fileList);
        },
        abort: function abort(file) {
            this.$refs.uploader.abort(file);
        },
        submit: function submit() {
            var _this2 = this;

            this.uploadFiles.filter(function (file) {
                return file.status === 'ready';
            }).forEach(function (file) {
                _this2.$refs['uploader']._IO(file.raw);
            });
        },
        getFile: function getFile(rawFile) {
            var file = {};
            this.uploadFiles.forEach(function (item) {
                if (rawFile.uid === item.uid) {
                    file = item;
                }
            });
            return file;
        }
    },

    render: function render(h) {
        var listData = {
            props: {
                listType: this.listType,
                fileList: this.uploadFiles,
                handlePreview: this.onPreview
            },
            on: {
                remove: this.handleRemove
            }
        };

        var uploaderData = {
            props: {
                action: this.action,
                multiple: this.multiple,
                name: this.name,
                headers: this.headers,
                data: this.data,
                accept: this.accept,
                fileList: this.uploadFiles,
                listType: this.listType,
                autoUpload: this.autoUpload,
                disabled: this.disabled,
                withCredentials: this.credentials,
                beforeUpload: this.beforeUpload,
                onStart: this.handleStart,
                onProgress: this.handleProgress,
                onSuccess: this.handleSuccess,
                onError: this.handleError,
                onRemove: this.handleRemove
            },
            ref: 'uploader'
        };

        var uploadList = this.showFileList ? h(
            _uploadList2.default,
            listData,
            []
        ) : null;
        var trigger = this.$slots.trigger || this.$slots.default;
        var uploader = h(
            _formDataUpload2.default,
            uploaderData,
            [trigger]
        );
        return h(
            'div',
            { 'class': 'x-upload' },
            [this.listType === 'picture' ? uploadList : '', this.$slots.trigger ? [uploader, this.$slots.default] : uploader, this.$slots.tip, this.listType === 'text' ? uploadList : '']
        );
    }
};

/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(364),
  /* template */
  __webpack_require__(365),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _progress = __webpack_require__(74);

var _progress2 = _interopRequireDefault(_progress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: { XProgress: _progress2.default },
    props: {
        listType: String,
        fileList: {
            type: Array,
            default: []
        },
        handlePreview: Function
    },
    methods: {
        handleClickItem: function handleClickItem(file) {
            this.handlePreview && this.handlePreview(file);
        }
    }
};

/***/ }),
/* 365 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition-group', {
    class: ['x-upload-list', 'x-upload-list-' + _vm.listType],
    attrs: {
      "tag": "ul",
      "name": "x-slide-up"
    }
  }, _vm._l((_vm.fileList), function(file) {
    return _c('li', {
      key: file.uid,
      staticClass: "list-item"
    }, [(_vm.listType === 'text') ? _c('a', {
      staticClass: "item-name",
      on: {
        "click": function($event) {
          _vm.handleClickItem(file)
        }
      }
    }, [_c('x-icon', {
      attrs: {
        "name": "document"
      }
    }), _vm._v(" "), _c('span', [_vm._v(_vm._s(file.name))])], 1) : _vm._e(), _vm._v(" "), (_vm.listType === 'picture') ? _c('img', {
      staticClass: "x-upload-list-img",
      attrs: {
        "src": file.url,
        "alt": file.name
      }
    }) : _vm._e(), _vm._v(" "), _c('span', {
      staticClass: "item-mask"
    }, [(_vm.handlePreview && _vm.listType === 'picture') ? _c('i', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (file.status === 'success'),
        expression: "file.status === 'success'"
      }],
      staticClass: "x-icon x-icon-arrow-expand",
      on: {
        "click": function($event) {
          _vm.handlePreview(file)
        }
      }
    }) : _vm._e(), _vm._v(" "), _c('i', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (file.status === 'success'),
        expression: "file.status === 'success'"
      }],
      class: ['x-icon', _vm.listType === 'text' ? 'x-icon-close-round' : 'x-icon-trash-a'],
      on: {
        "click": function($event) {
          _vm.$emit('remove', file)
        }
      }
    })]), _vm._v(" "), (file.status === 'uploading') ? _c('x-progress', {
      attrs: {
        "stroke-width": _vm.listType === 'picture' ? 6 : 2,
        "type": _vm.listType === 'picture' ? 'circle' : 'line',
        "percentage": file.progress
      }
    }) : _vm._e()], 1)
  }))
},staticRenderFns: []}

/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(367),
  /* template */
  __webpack_require__(369),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _http = __webpack_require__(368);

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {
            queue: {}
        };
    },

    props: {
        action: {
            type: String,
            required: true
        },
        headers: Object,
        multiple: Boolean,
        name: {
            type: String,
            default: 'file'
        },
        data: Object,
        accept: String,
        fileList: Array,
        listType: String,
        autoUpload: Boolean,
        disabled: Boolean,
        withCredentials: Boolean,
        beforeUpload: Function,
        onStart: Function,
        onProgress: Function,
        onSuccess: Function,
        onError: Function,
        onRemove: Function
    },

    methods: {
        handleChange: function handleChange(e) {
            var files = e.target.files;
            var rawFiles = files ? Array.prototype.slice.call(files) : false;
            if (!rawFiles || rawFiles.length === 0) {
                return;
            }
            this.uploadFiles(rawFiles);
            this.$refs.fileInput.value = null;
        },
        uploadFiles: function uploadFiles(files) {
            var _this = this;

            files.forEach(function (file) {
                _this.onStart(file);
                _this.onUpload(file);
            });
        },
        onUpload: function onUpload(rawFile) {
            var _this2 = this;

            if (!this.beforeUpload) {
                return this.autoUpload && this._IO(rawFile);
            }

            var beforeRs = this.beforeUpload(rawFile);

            if (beforeRs && beforeRs.then) {
                beforeRs.then(function (reqFile) {
                    var reqType = Object.prototype.toString.call(reqFile) === '[object File]';
                    var file = reqType ? reqFile : rawFile;
                    _this2.autoUpload && _this2._IO(file);
                }, function () {
                    _this2.onRemove(rawFile);
                });
            } else if (beforeRs !== false) {
                this.autoUpload && this._IO(rawFile);
            } else {
                this.onRemove(rawFile);
            }
        },
        _IO: function _IO(rawFile) {
            var _this3 = this;

            var opts = {
                fileName: this.name,
                file: rawFile,
                action: this.action,
                data: this.data,
                withCredentials: this.withCredentials,
                headers: this.headers,
                onProgress: function onProgress(e) {
                    _this3.onProgress(e, rawFile);
                },
                onSuccess: function onSuccess(res) {
                    _this3.onSuccess(res, rawFile);
                },
                onError: function onError(err) {
                    _this3.onError(err, rawFile);
                },
                onAlways: function onAlways() {
                    delete _this3.queue[rawFile.uid];
                }
            };

            var xhr = (0, _http2.default)(opts);
            this.queue[rawFile.uid] = xhr;
        },
        abort: function abort(file) {
            var fileXhr = this.queue[file.uid];
            if (fileXhr) {
                fileXhr.abort();
                delete this.queue[file.uid];
            }
        },
        handleClick: function handleClick() {
            if (!this.disabled) {
                this.$refs.fileInput.click();
            }
        }
    }
};

/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = __webpack_require__(12);

var _keys2 = _interopRequireDefault(_keys);

exports.default = httpReq;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function httpReq(opts) {
    if (typeof XMLHttpRequest === 'undefined' || typeof FormData === 'undefined') {
        return;
    }

    var xhr = new XMLHttpRequest();
    var formData = new FormData();

    handleParams(formData, opts);
    handleProgress(xhr, opts);
    handleCallBack(xhr, opts);

    xhr.open('post', opts.action, true);

    handleBeforeSend(xhr, opts);

    xhr.send(formData);

    return xhr;
}

function handleParams(formData, opts) {
    formData.append(opts.fileName, opts.file);

    if (opts.data) {
        var hasOwn = Object.prototype.hasOwnProperty;
        for (var key in opts.data) {
            if (hasOwn.call(opts.data, key)) {
                formData.append(key, opts.data[key]);
            }
        }
    }
}

function handleProgress(xhr, opts) {
    if (xhr.upload) {
        xhr.upload.onprogress = function (e) {
            if (e.total > 0) {
                e.percent = Math.round(e.loaded / e.total * 100);
            }
            opts.onProgress(e);
        };
    }
}

function handleCallBack(xhr, opts) {
    xhr.onerror = function (e) {
        opts.onError(e);
    };

    xhr.onload = function (e) {
        if (xhr.status < 200 || xhr.status >= 300) {
            opts.onError(getError(xhr));
        } else {
            opts.onSuccess(getResponse(xhr));
        }
        opts.onAlways();
    };
}

function handleBeforeSend(xhr, opts) {
    if (opts.withCredentials && 'withCredentials' in xhr) {
        xhr.withCredentials = true;
    }

    var headers = opts.headers || {};
    (0, _keys2.default)(headers).forEach(function (key) {
        var val = headers[key];
        if (val) {
            xhr.setRequestHeader(key, val);
        }
    });
}

function getError(xhr) {
    return {
        status: xhr.status,
        error: xhr.response.error || xhr.responseText
    };
}

function getResponse(xhr) {
    var res = xhr.responseText || xhr.response || '';

    try {
        return JSON.parse(res);
    } catch (e) {
        return res;
    }
}

/***/ }),
/* 369 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['x-upload-trigger', 'x-upload-' + _vm.listType],
    on: {
      "click": _vm.handleClick
    }
  }, [_vm._t("default"), _vm._v(" "), _c('input', {
    ref: "fileInput",
    staticClass: "x-upload-file-input",
    attrs: {
      "type": "file",
      "name": _vm.name,
      "multiple": _vm.multiple,
      "accept": _vm.accept
    },
    on: {
      "change": _vm.handleChange
    }
  })], 2)
},staticRenderFns: []}

/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dropdown = __webpack_require__(371);

var _dropdown2 = _interopRequireDefault(_dropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _dropdown2.default;

/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(372),
  /* template */
  null,
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _emitter = __webpack_require__(2);

var _emitter2 = _interopRequireDefault(_emitter);

var _clickoutside = __webpack_require__(38);

var _clickoutside2 = _interopRequireDefault(_clickoutside);

var _button = __webpack_require__(29);

var _button2 = _interopRequireDefault(_button);

var _buttonGroup = __webpack_require__(45);

var _buttonGroup2 = _interopRequireDefault(_buttonGroup);

var _dom = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'x-dropdown',
    componentName: 'x-dropdown',
    components: {
        XButton: _button2.default,
        XButtonGroup: _buttonGroup2.default
    },
    directives: { Clickoutside: _clickoutside2.default },
    mixins: [_emitter2.default],
    props: {
        type: String,
        trigger: {
            type: String,
            default: 'hover'
        },
        size: String,
        disabled: Boolean,
        mode: {
            type: String,
            default: 'link'
        },
        hideOnClick: {
            type: Boolean,
            default: true
        },
        align: {
            type: String,
            default: 'bottom-end',
            validator: function validator(value) {
                return ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end'].indexOf(value) >= 0;
            }
        }
    },
    data: function data() {
        return {
            visible: false
        };
    },

    computed: {
        iconName: function iconName() {
            return this.align.indexOf('bottom') >= 0 ? 'arrow-down-b' : 'arrow-up-b';
        }
    },
    watch: {
        visible: function visible(val) {
            this.broadcast('x-dropdown-menu', 'visible', val);
        }
    },
    methods: {
        handleClick: function handleClick() {
            if (this.disabled) return;
            if (this.mode === 'split-button') {
                this.$emit('click');
            } else {
                this.visible = !this.visible;
            }
        },
        hideDropdown: function hideDropdown() {
            var _this = this;

            if (this.disabled) return;
            clearTimeout(this.timeout);
            this.timeout = setTimeout(function () {
                _this.visible = false;
            }, 100);
        },
        showDropdown: function showDropdown() {
            var _this2 = this;

            if (this.disabled) return;
            clearTimeout(this.timeout);
            this.timeout = setTimeout(function () {
                _this2.visible = true;
            }, 200);
        },
        handleDropdownItemClick: function handleDropdownItemClick(itemKey) {
            if (this.hideOnClick) {
                this.visible = false;
            }
            this.broadcast('x-dropdown-menu', 'item-click', itemKey);
        },
        bindTrigger: function bindTrigger() {
            var mode = this.mode,
                type = this.type,
                size = this.size,
                handleClick = this.handleClick,
                showDropdown = this.showDropdown,
                hideDropdown = this.hideDropdown;

            var triggerElm = void 0;
            if (this.$slots.custom) {
                triggerElm = this.$slots.custom[0].elm;
            } else if (['button', 'link', 'split-button'].indexOf(mode) >= 0) {
                triggerElm = this.$refs.trigger.$el || this.$refs.trigger;
            }
            if (!triggerElm) {
                return;
            }

            var dropdownElm = this.$slots.dropdown[0].elm;
            (0, _dom.on)(dropdownElm, 'mouseenter', showDropdown);
            (0, _dom.on)(dropdownElm, 'mouseleave', hideDropdown);

            if (this.trigger === 'hover') {
                (0, _dom.on)(triggerElm, 'mouseenter', showDropdown);
                (0, _dom.on)(triggerElm, 'mouseleave', hideDropdown);
            } else if (this.trigger === 'click') {
                (0, _dom.on)(triggerElm, 'click', handleClick);
            }
        }
    },
    mounted: function mounted() {
        this.$on('x-dropdown-item-click', this.handleDropdownItemClick);
        this.bindTrigger();
    },
    render: function render(h) {
        var mode = this.mode,
            type = this.type,
            size = this.size,
            handleClick = this.handleClick,
            hideDropdown = this.hideDropdown,
            iconName = this.iconName,
            disabled = this.disabled;

        var triggerElm = void 0;
        if (this.$slots.custom) {
            triggerElm = this.$slots.custom;
        } else if (['button', 'link', 'split-button'].indexOf(mode) >= 0) {
            switch (mode) {
                case 'link':
                    triggerElm = h(
                        'span',
                        { 'class': 'x-dropdown-link x-dropdown-link-' + type + ' ' + (disabled ? 'x-dropdown-link-disabled' : ''), ref: 'trigger' },
                        [this.$slots.default, h(
                            'i',
                            { 'class': 'x-icon x-icon-' + iconName },
                            []
                        )]
                    );
                    break;
                case 'button':
                    triggerElm = h(
                        'x-button',
                        {
                            attrs: { type: type, size: size, disabled: disabled },
                            ref: 'trigger' },
                        [this.$slots.default, h(
                            'i',
                            { 'class': 'x-icon x-icon-' + iconName },
                            []
                        )]
                    );
                    break;
                case 'split-button':
                    triggerElm = h(
                        'x-button-group',
                        null,
                        [h(
                            'x-button',
                            {
                                attrs: { type: type, size: size, disabled: disabled },
                                nativeOn: {
                                    'click': handleClick
                                }
                            },
                            [this.$slots.default]
                        ), h(
                            'x-button',
                            { ref: 'trigger', attrs: { type: type, size: size, icon: iconName, disabled: disabled },
                                'class': 'x-dropdown-button-arrow' },
                            []
                        )]
                    );
                    break;
                default:
                    break;
            }
        }
        return h(
            'div',
            { 'class': 'x-dropdown', directives: [{
                    name: 'clickoutside',
                    value: hideDropdown
                }]
            },
            [triggerElm, this.$slots.dropdown]
        );
    }
};

/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dropdownItem = __webpack_require__(374);

var _dropdownItem2 = _interopRequireDefault(_dropdownItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _dropdownItem2.default;

/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(375),
  /* template */
  __webpack_require__(376),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _emitter = __webpack_require__(2);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'x-dropdown-item',
    componentName: 'x-dropdown-item',
    mixins: [_emitter2.default],
    props: {
        disabled: Boolean,
        divided: Boolean,
        itemKey: String
    },
    methods: {
        handleClick: function handleClick() {
            this.dispatch('x-dropdown', 'x-dropdown-item-click', this.itemKey);
        }
    }
};

/***/ }),
/* 376 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    staticClass: "x-dropdown-item",
    class: {
      'is-disabled': _vm.disabled,
      'is-divided': _vm.divided
    },
    on: {
      "click": _vm.handleClick
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dropdownMenu = __webpack_require__(378);

var _dropdownMenu2 = _interopRequireDefault(_dropdownMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _dropdownMenu2.default;

/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(379),
  /* template */
  __webpack_require__(380),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vuePopper = __webpack_require__(23);

var _vuePopper2 = _interopRequireDefault(_vuePopper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'x-dropdown-menu',
    componentName: 'x-dropdown-menu',
    mixins: [_vuePopper2.default],
    computed: {
        transitionName: function transitionName() {
            return this.$parent.align.indexOf('bottom') >= 0 ? 'x-slide-up' : 'x-slide-down';
        }
    },
    watch: {
        '$parent.align': {
            immediate: true,
            handler: function handler(val) {
                this.currentPlacement = 'bottom-' + val;
            }
        }
    },
    created: function created() {
        var _this = this;

        this.$on('updatePopper', function () {
            _this.showPopper && _this.updatePopper();
        });
        this.$on('visible', function (val) {
            _this.showPopper = val;
        });
        this.$on('item-click', function (val) {
            _this.$emit('click', val);
        });
    },
    mounted: function mounted() {
        this.$parent.popperElm = this.popperElm = this.$el;
        this.referenceElm = this.$parent.$el;
        this.currentPlacement = this.$parent.align;
    }
};

/***/ }),
/* 380 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": _vm.transitionName
    }
  }, [_c('ul', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showPopper),
      expression: "showPopper"
    }],
    staticClass: "x-dropdown-menu"
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}

/***/ }),
/* 381 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(383),
  /* template */
  __webpack_require__(392),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _xcuiLogo = __webpack_require__(77);

var _xcuiLogo2 = _interopRequireDefault(_xcuiLogo);

var _router = __webpack_require__(384);

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    router: _router2.default,
    data: function data() {
        return {
            logoUrl: _xcuiLogo2.default
        };
    },
    mounted: function mounted() {
        var _this = this;

        _router2.default.beforeEach(function (to, from, next) {
            _this.$PageLoading.start();
            next();
        });

        _router2.default.afterEach(function (to, from, next) {
            _this.$PageLoading.done();
            window.scrollTo(0, 0);
        });
    }
};

/***/ }),
/* 384 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_router__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Home__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_homeContent__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_homeContent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_homeContent__);
/**
 * @file router.js
 * Router configuration
 */





const Installation = () => __webpack_require__.e/* import() */(34).then(__webpack_require__.bind(null, 395));
const Quickstart = () => __webpack_require__.e/* import() */(33).then(__webpack_require__.bind(null, 396));
const Layout = () => __webpack_require__.e/* import() */(5).then(__webpack_require__.bind(null, 397));
const Pagination = () => __webpack_require__.e/* import() */(4).then(__webpack_require__.bind(null, 398));
const Loading = () => __webpack_require__.e/* import() */(12).then(__webpack_require__.bind(null, 399));
const Popover = () => __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, 400));
const Tooltip = () => __webpack_require__.e/* import() */(11).then(__webpack_require__.bind(null, 401));
const Suggestion = () => __webpack_require__.e/* import() */(16).then(__webpack_require__.bind(null, 402));
const Tag = () => __webpack_require__.e/* import() */(15).then(__webpack_require__.bind(null, 403));
const Datepicker = () => __webpack_require__.e/* import() */(30).then(__webpack_require__.bind(null, 404));
const DateTimePicker = () => __webpack_require__.e/* import() */(29).then(__webpack_require__.bind(null, 405));
const TimePicker = () => __webpack_require__.e/* import() */(13).then(__webpack_require__.bind(null, 406));
const Select = () => __webpack_require__.e/* import() */(18).then(__webpack_require__.bind(null, 407));
const Message = () => __webpack_require__.e/* import() */(24).then(__webpack_require__.bind(null, 408));
const Notice = () => __webpack_require__.e/* import() */(22).then(__webpack_require__.bind(null, 409));
const Modal = () => __webpack_require__.e/* import() */(23).then(__webpack_require__.bind(null, 410));
const Dialog = () => __webpack_require__.e/* import() */(28).then(__webpack_require__.bind(null, 411));
const InputNumber = () => __webpack_require__.e/* import() */(6).then(__webpack_require__.bind(null, 412));
const Progress = () => __webpack_require__.e/* import() */(10).then(__webpack_require__.bind(null, 413));
const PageLoading = () => __webpack_require__.e/* import() */(21).then(__webpack_require__.bind(null, 414));
const ScrollTop = () => __webpack_require__.e/* import() */(19).then(__webpack_require__.bind(null, 415));
const Button = () => __webpack_require__.e/* import() */(32).then(__webpack_require__.bind(null, 416));
const Icon = () => __webpack_require__.e/* import() */(7).then(__webpack_require__.bind(null, 417));
const Input = () => __webpack_require__.e/* import() */(25).then(__webpack_require__.bind(null, 418));
const Textarea = () => __webpack_require__.e/* import() */(14).then(__webpack_require__.bind(null, 419));
const Checkbox = () => __webpack_require__.e/* import() */(31).then(__webpack_require__.bind(null, 420));
const Radio = () => __webpack_require__.e/* import() */(20).then(__webpack_require__.bind(null, 421));
const Switch = () => __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 422));
const Form = () => __webpack_require__.e/* import() */(26).then(__webpack_require__.bind(null, 423));
const Table = () => __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 424));
const Steps = () => __webpack_require__.e/* import() */(17).then(__webpack_require__.bind(null, 425));
const Collapse = () => __webpack_require__.e/* import() */(8).then(__webpack_require__.bind(null, 426));
const Upload = () => __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 427));
const Dropdown = () => __webpack_require__.e/* import() */(27).then(__webpack_require__.bind(null, 428));
const Alert = () => __webpack_require__.e/* import() */(9).then(__webpack_require__.bind(null, 429));

const router = new __WEBPACK_IMPORTED_MODULE_0_vue_router__["a" /* default */]({
    routes: [{
        path: '/',
        component: __WEBPACK_IMPORTED_MODULE_1__Home___default.a,
        children: [
            {
                path: '/home',
                component: __WEBPACK_IMPORTED_MODULE_2__components_homeContent___default.a
            }, {
                path: '/intro/installation',
                component: Installation
            }, {
                path: '/intro/quickstart',
                component: Quickstart
            }, {
                path: '/component/layout',
                component: Layout
            }, {
                path: '/component/pagination',
                component: Pagination
            }, {
                path: '/component/icon',
                component: Icon
            }, {
                path: '/component/button',
                component: Button
            }, {
                path: '/component/input',
                component: Input
            }, {
                path: '/component/textarea',
                component: Textarea
            }, {
                path: '/component/checkbox',
                component: Checkbox
            }, {
                path: '/component/radio',
                component: Radio
            }, {
                path: '/component/popover',
                component: Popover
            }, {
                path: '/component/tooltip',
                component: Tooltip
            }, {
                path: '/component/suggestion',
                component: Suggestion
            }, {
                path: '/component/tag',
                component: Tag
            }, {
                path: '/component/datepicker',
                component: Datepicker
            }, {
                path: '/component/datetimepicker',
                component: DateTimePicker
            }, {
                path: '/component/timepicker',
                component: TimePicker
            }, {
                path: '/component/loading',
                component: Loading
            }, {
                path: '/component/message',
                component: Message
            }, {
                path: '/component/notice',
                component: Notice
            }, {
                path: '/component/modal',
                component: Modal
            }, {
                path: '/component/dialog',
                component: Dialog
            }, {
                path: '/component/select',
                component: Select
            }, {
                path: '/component/input-number',
                component: InputNumber
            }, {
                path: '/component/progress',
                component: Progress
            }, {
                path: '/component/pageloading',
                component: PageLoading
            }, {
                path: '/component/scrolltop',
                component: ScrollTop
            }, {
                path: '/component/switch',
                component: Switch
            }, {
                path: '/component/form',
                component: Form
            }, {
                path: '/component/table',
                component: Table
            }, {
                path: '/component/steps',
                component: Steps
            }, {
                path: '/component/collapse',
                component: Collapse
            }, {
                path: '/component/upload',
                component: Upload
            }, {
                path: '/component/dropdown',
                component: Dropdown
            }, {
                path: '/component/alert',
                component: Alert
            }
        ]
    }]
});

/* harmony default export */ __webpack_exports__["default"] = (router);


/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(386)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(387),
  /* template */
  __webpack_require__(388),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 386 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


var version = __webpack_require__(78).version;

exports.default = {
    data: function data() {
        return {
            version: version
        };
    },
    mounted: function mounted() {
        if (this.$route.path === '/') {
            this.$router.push({
                path: 'home'
            });
        }
    }
};

/***/ }),
/* 388 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "wrapper"
    }
  }, [_c('x-row', {
    attrs: {
      "gutter": 32,
      "id": "wrapper-content"
    }
  }, [_c('x-col', {
    attrs: {
      "xs": 8,
      "sm": 8,
      "md": 8,
      "lg": 6,
      "id": "sidebar-wrapper"
    }
  }, [_c('ul', {
    staticClass: "sidebar-nav"
  }, [_c('li', {
    staticClass: "sidebar-item"
  }, [_c('router-link', {
    attrs: {
      "to": "/home"
    }
  }, [_vm._v("介绍")])], 1), _vm._v(" "), _c('li', {
    staticClass: "sidebar-item"
  }, [_c('router-link', {
    attrs: {
      "to": "/intro/installation"
    }
  }, [_vm._v("安装")])], 1), _vm._v(" "), _c('li', {
    staticClass: "sidebar-item"
  }, [_c('router-link', {
    attrs: {
      "to": "/intro/quickstart"
    }
  }, [_vm._v("快速上手")])], 1), _vm._v(" "), _c('li', {
    staticClass: "sidebar-part-title"
  }, [_vm._v("组件")]), _vm._v(" "), _c('li', {
    staticClass: "sidebar-title"
  }, [_vm._v("Basic 基础")]), _vm._v(" "), _c('li', {
    staticClass: "sidebar-item"
  }, [_c('router-link', {
    attrs: {
      "to": "/component/layout"
    }
  }, [_vm._v("Layout 布局")])], 1), _vm._v(" "), _c('li', {
    staticClass: "sidebar-item"
  }, [_c('router-link', {
    attrs: {
      "to": "/component/icon"
    }
  }, [_vm._v("Icon 图标")])], 1), _vm._v(" "), _c('li', {
    staticClass: "sidebar-item"
  }, [_c('router-link', {
    attrs: {
      "to": "/component/button"
    }
  }, [_vm._v("Button 按钮")])], 1), _vm._v(" "), _c('li', {
    staticClass: "sidebar-title"
  }, [_vm._v("Form 表单")]), _vm._v(" "), _c('li', {
    staticClass: "sidebar-item"
  }, [_c('router-link', {
    attrs: {
      "to": "/component/input"
    }
  }, [_vm._v("Input 单行输入框")])], 1), _vm._v(" "), _c('li', {
    staticClass: "sidebar-item"
  }, [_c('router-link', {
    attrs: {
      "to": "/component/textarea"
    }
  }, [_vm._v("Textarea 多行输入框")])], 1), _vm._v(" "), _c('li', {
    staticClass: "sidebar-item"
  }, [_c('router-link', {
    attrs: {
      "to": "/component/checkbox"
    }
  }, [_vm._v("Checkbox 多选框")])], 1), _vm._v(" "), _c('li', {
    staticClass: "sidebar-item"
  }, [_c('router-link', {
    attrs: {
      "to": "/component/radio"
    }
  }, [_vm._v("Radio 单选框")])], 1), _vm._v(" "), _c('li', {
    staticClass: "sidebar-item"
  }, [_c('router-link', {
    attrs: {
      "to": "/component/input-number"
    }
  }, [_vm._v("InputNumber 计数器")])], 1), _vm._v(" "), _c('li', {
    staticClass: "sidebar-item"
  }, [_c('router-link', {
    attrs: {
      "to": "/component/suggestion"
    }
  }, [_vm._v("Suggestion 输入建议")])], 1), _vm._v(" "), _c('li', {
    staticClass: "sidebar-item"
  }, [_c('router-link', {
    attrs: {
      "to": "/component/select"
    }
  }, [_vm._v("Select 选择器")])], 1), _vm._v(" "), _c('li', {
    staticClass: "sidebar-item"
  }, [_c('router-link', {
    attrs: {
      "to": "/component/switch"
    }
  }, [_vm._v("Switch 开关")])], 1), _vm._v(" "), _c('li', {
    staticClass: "sidebar-item"
  }, [_c('router-link', {
    attrs: {
      "to": "/component/timepicker"
    }
  }, [_vm._v("TimePicker 时间选择器")])], 1), _vm._v(" "), _c('li', {
    staticClass: "sidebar-item"
  }, [_c('router-link', {
    attrs: {
      "to": "/component/datepicker"
    }
  }, [_vm._v("DatePicker 日期选择器")])], 1), _vm._v(" "), _c('li', {
    staticClass: "sidebar-item"
  }, [_c('router-link', {
    attrs: {
      "to": "/component/datetimepicker"
    }
  }, [_vm._v("DateTimePicker 时间日期选择器")])], 1), _vm._v(" "), _c('li', {
    staticClass: "sidebar-item"
  }, [_c('router-link', {
    attrs: {
      "to": "/component/form"
    }
  }, [_vm._v("Form 表单")])], 1), _vm._v(" "), _c('li', {
    staticClass: "sidebar-title"
  }, [_vm._v("Notice 提示")]), _vm._v(" "), _c('li', {
    staticClass: "sidebar-item"
  }, [_c('router-link', {
    attrs: {
      "to": "/component/alert"
    }
  }, [_vm._v("Alert 警告提示")])], 1), _vm._v(" "), _c('li', {
    staticClass: "sidebar-item"
  }, [_c('router-link', {
    attrs: {
      "to": "/component/message"
    }
  }, [_vm._v("Message 信息提示")])], 1), _vm._v(" "), _c('li', {
    staticClass: "sidebar-item"
  }, [_c('router-link', {
    attrs: {
      "to": "/component/notice"
    }
  }, [_vm._v("Notice 通知提示")])], 1), _vm._v(" "), _c('li', {
    staticClass: "sidebar-item"
  }, [_c('router-link', {
    attrs: {
      "to": "/component/modal"
    }
  }, [_vm._v("Modal 对话框")])], 1), _vm._v(" "), _c('li', {
    staticClass: "sidebar-item"
  }, [_c('router-link', {
    attrs: {
      "to": "/component/dialog"
    }
  }, [_vm._v("Dialog 快捷对话框")])], 1), _vm._v(" "), _c('li', {
    staticClass: "sidebar-item"
  }, [_c('router-link', {
    attrs: {
      "to": "/component/popover"
    }
  }, [_vm._v("Popover 工具提示")])], 1), _vm._v(" "), _c('li', {
    staticClass: "sidebar-item"
  }, [_c('router-link', {
    attrs: {
      "to": "/component/tooltip"
    }
  }, [_vm._v("Tooltip 文字提示")])], 1), _vm._v(" "), _c('li', {
    staticClass: "sidebar-item"
  }, [_c('router-link', {
    attrs: {
      "to": "/component/loading"
    }
  }, [_vm._v("Loading 加载中提示")])], 1), _vm._v(" "), _c('li', {
    staticClass: "sidebar-title"
  }, [_vm._v("Data 数据展示")]), _vm._v(" "), _c('li', {
    staticClass: "sidebar-item"
  }, [_c('router-link', {
    attrs: {
      "to": "/component/table"
    }
  }, [_vm._v("Table 表格")])], 1), _vm._v(" "), _c('li', {
    staticClass: "sidebar-item"
  }, [_c('router-link', {
    attrs: {
      "to": "/component/progress"
    }
  }, [_vm._v("Progress 进度条")])], 1), _vm._v(" "), _c('li', {
    staticClass: "sidebar-item"
  }, [_c('router-link', {
    attrs: {
      "to": "/component/tag"
    }
  }, [_vm._v("Tag 标签")])], 1), _vm._v(" "), _c('li', {
    staticClass: "sidebar-title"
  }, [_vm._v("Navigation 导航")]), _vm._v(" "), _c('li', {
    staticClass: "sidebar-item"
  }, [_c('router-link', {
    attrs: {
      "to": "/component/pagination"
    }
  }, [_vm._v("Pagination 分页")])], 1), _vm._v(" "), _c('li', {
    staticClass: "sidebar-item"
  }, [_c('router-link', {
    attrs: {
      "to": "/component/dropdown"
    }
  }, [_vm._v("Dropdown 下拉菜单")])], 1), _vm._v(" "), _c('li', {
    staticClass: "sidebar-item"
  }, [_c('router-link', {
    attrs: {
      "to": "/component/steps"
    }
  }, [_vm._v("Steps 步骤条")])], 1), _vm._v(" "), _c('li', {
    staticClass: "sidebar-title"
  }, [_vm._v("Others 其他")]), _vm._v(" "), _c('li', {
    staticClass: "sidebar-item"
  }, [_c('router-link', {
    attrs: {
      "to": "/component/scrolltop"
    }
  }, [_vm._v("ScrollTop 返回顶部")])], 1), _vm._v(" "), _c('li', {
    staticClass: "sidebar-item"
  }, [_c('router-link', {
    attrs: {
      "to": "/component/pageloading"
    }
  }, [_vm._v("PageLoading 页面加载")])], 1), _vm._v(" "), _c('li', {
    staticClass: "sidebar-item"
  }, [_c('router-link', {
    attrs: {
      "to": "/component/collapse"
    }
  }, [_vm._v("Collapse 折叠面板")])], 1), _vm._v(" "), _c('li', {
    staticClass: "sidebar-item"
  }, [_c('router-link', {
    attrs: {
      "to": "/component/upload"
    }
  }, [_vm._v("Upload 上传")])], 1)])]), _vm._v(" "), _c('x-col', {
    staticClass: "x-demo",
    attrs: {
      "xs": 16,
      "sm": 16,
      "md": 16,
      "lg": 18,
      "id": "page-content-wrapper"
    }
  }, [_c('div', {
    staticClass: "x-demo-inner"
  }, [_c('transition', {
    attrs: {
      "name": "x-page"
    }
  }, [_c('router-view')], 1)], 1)])], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 389 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(390),
  /* template */
  __webpack_require__(391),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _xcuiLogo = __webpack_require__(77);

var _xcuiLogo2 = _interopRequireDefault(_xcuiLogo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var version = __webpack_require__(78).version;

exports.default = {
    data: function data() {
        return {
            version: version,
            logoUrl: _xcuiLogo2.default
        };
    }
};

/***/ }),
/* 391 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h1', [_vm._v("关于XCUI")]), _vm._v(" "), _c('img', {
    staticStyle: {
      "margin-bottom": "30px"
    },
    attrs: {
      "src": _vm.logoUrl,
      "width": "200"
    }
  }), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('h2', [_vm._v("XCUI的目标是：")]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('h2', [_vm._v("组件展示")]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('h2', [_vm._v("版本支持")]), _vm._v(" "), _vm._m(3), _vm._v(" "), _c('h2', [_vm._v("安装")]), _vm._v(" "), _vm._m(4), _vm._v(" "), _vm._m(5), _vm._v(" "), _c('h2', [_vm._v("快速上手")]), _vm._v(" "), _vm._m(6), _vm._v(" "), _c('p', [_vm._v("在页面根实例中引入：")]), _vm._v(" "), _vm._m(7), _vm._v(" "), _c('p', [_vm._v("或者：")]), _vm._v(" "), _vm._m(8), _vm._v(" "), _c('p', [_vm._v("在页面中声明标签，即可使用。")]), _vm._v(" "), _vm._m(9), _vm._v(" "), _vm._m(10), _vm._v(" "), _c('h2', [_vm._v("开发")]), _vm._v(" "), _c('h3', [_vm._v("Clone the doc repo")]), _vm._v(" "), _vm._m(11), _vm._v(" "), _c('h3', [_vm._v("安装依赖")]), _vm._v(" "), _c('pre', [_vm._v("$ npm i\n")]), _vm._v(" "), _c('h3', [_vm._v("Run dev server")]), _vm._v(" "), _c('pre', [_vm._v("$ npm run dev\n")]), _vm._v(" "), _c('h3', [_vm._v("Build components")]), _vm._v(" "), _c('pre', [_vm._v("$ npm run build\n")])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("XCUI 是基于"), _c('code', [_vm._v("Vue2.0")]), _vm._v("的"), _c('strong', [_vm._v("桌面端组件库")]), _vm._v("。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', [_c('li', [_vm._v("满足桌面端页面大部分基础组件需求。")]), _vm._v(" "), _c('li', [_vm._v("快速开发基于 "), _c('code', [_vm._v("Vue2.0")]), _vm._v(" 构建的项目。")]), _vm._v(" "), _c('li', [_vm._v("保持小体积, 无其他js库依赖。")]), _vm._v(" "), _c('li', [_vm._v("简洁优雅。")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('a', {
    attrs: {
      "href": "https://wmfe.github.io/xcui/"
    }
  }, [_vm._v("XCUI主页")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("在使用"), _c('code', [_vm._v("Vue 2.x")]), _vm._v(" 版本时，推荐使用 "), _c('code', [_vm._v("Vue 2.0.8")]), _vm._v(" 以上版本。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("通过"), _c('code', [_vm._v("npm")]), _vm._v("安装，或在"), _c('a', {
    attrs: {
      "href": "https://github.com/wmfe/xcui/releases"
    }
  }, [_vm._v("这里")]), _vm._v("下载打包好的版本：")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', [_c('span', {
    staticClass: "token function"
  }, [_vm._v("npm")]), _vm._v(" "), _c('span', {
    staticClass: "token function"
  }, [_vm._v("install")]), _vm._v(" xcui --save\n")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('code', [_vm._v("xcui")]), _vm._v("使用"), _c('code', [_vm._v("umd")]), _vm._v("方式打包，支持各种模块加载器。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', [_c('span', {
    staticClass: "token keyword"
  }, [_vm._v("import")]), _vm._v(" Vue "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("from")]), _vm._v(" "), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'vue'")]), _vm._v("\n"), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("import")]), _vm._v(" xcui "), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("from")]), _vm._v(" "), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'xcui'")]), _vm._v("\n"), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("import")]), _vm._v(" "), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'xcui/lib/xcui.css'")]), _vm._v("\nVue"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _c('span', {
    staticClass: "token function"
  }, [_vm._v("use")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _vm._v("xcui"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', [_c('span', {
    staticClass: "token keyword"
  }, [_vm._v("var")]), _vm._v(" Vue "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    staticClass: "token function"
  }, [_vm._v("require")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'vue'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n"), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("var")]), _vm._v(" xcui "), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    staticClass: "token function"
  }, [_vm._v("require")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _c('span', {
    staticClass: "token string"
  }, [_vm._v("'xcui'")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _c('span', {
    staticClass: "token keyword"
  }, [_vm._v("default")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\nVue"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _c('span', {
    staticClass: "token function"
  }, [_vm._v("use")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("(")]), _vm._v("xcui"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(")")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(";")]), _vm._v("\n")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('blockquote', [_c('p', [_c('strong', [_vm._v("说明")]), _c('br'), _vm._v("\nXCUI在使用"), _c('code', [_vm._v("Vue.use(xcui)")]), _vm._v("后，会默认以"), _c('code', [_vm._v("x-")]), _vm._v("前缀注册所有组件，在Vue实例中可直接使用而"), _c('strong', [_vm._v("不用在"), _c('code', [_vm._v("components")]), _vm._v("中声明")]), _vm._v("。举例：")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("<")]), _vm._v("x-button")]), _vm._v(" "), _c('span', {
    staticClass: "token attr-name"
  }, [_vm._v("type")]), _c('span', {
    staticClass: "token attr-value"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("=")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")]), _vm._v("primary"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("\"")])]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("start"), _c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token tag"
  }, [_c('span', {
    staticClass: "token punctuation"
  }, [_vm._v("</")]), _vm._v("x-button")]), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(">")])]), _vm._v("\n")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', [_vm._v("$ git clone git@github"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _vm._v("com"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(":")]), _vm._v("wmfe"), _c('span', {
    staticClass: "token operator"
  }, [_vm._v("/")]), _vm._v("xcui"), _c('span', {
    staticClass: "token punctuation"
  }, [_vm._v(".")]), _vm._v("git\n")])
}]}

/***/ }),
/* 392 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "xcui-site-container"
    }
  }, [_c('header', [_c('router-link', {
    staticClass: "logo",
    attrs: {
      "to": "/home"
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.logoUrl
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "logo-text"
  }, [_vm._v("XCUI")])])], 1), _vm._v(" "), _c('router-view'), _vm._v(" "), _vm._m(0)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('footer', [_c('div', {
    staticClass: "footer-main"
  }, [_c('span', [_vm._v("@2016~2017, wmfe")])])])
}]}

/***/ }),
/* 393 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(85)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ })
/******/ ]);