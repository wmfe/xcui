/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _vue = __webpack_require__(5);

	var _vue2 = _interopRequireDefault(_vue);

	var _vueRouter = __webpack_require__(7);

	var _vueRouter2 = _interopRequireDefault(_vueRouter);

	var _App = __webpack_require__(8);

	var _App2 = _interopRequireDefault(_App);

	var _Home = __webpack_require__(16);

	var _Home2 = _interopRequireDefault(_Home);

	var _homeContent = __webpack_require__(22);

	var _homeContent2 = _interopRequireDefault(_homeContent);

	var _index = __webpack_require__(25);

	var _index2 = _interopRequireDefault(_index);

	var _pagination = __webpack_require__(180);

	var _pagination2 = _interopRequireDefault(_pagination);

	var _loading = __webpack_require__(185);

	var _loading2 = _interopRequireDefault(_loading);

	var _popover = __webpack_require__(190);

	var _popover2 = _interopRequireDefault(_popover);

	var _tooltip = __webpack_require__(195);

	var _tooltip2 = _interopRequireDefault(_tooltip);

	var _suggestion = __webpack_require__(200);

	var _suggestion2 = _interopRequireDefault(_suggestion);

	var _tag = __webpack_require__(205);

	var _tag2 = _interopRequireDefault(_tag);

	var _datepicker = __webpack_require__(210);

	var _datepicker2 = _interopRequireDefault(_datepicker);

	var _dateRangePicker = __webpack_require__(215);

	var _dateRangePicker2 = _interopRequireDefault(_dateRangePicker);

	var _select = __webpack_require__(220);

	var _select2 = _interopRequireDefault(_select);

	var _message = __webpack_require__(229);

	var _message2 = _interopRequireDefault(_message);

	var _modal = __webpack_require__(231);

	var _modal2 = _interopRequireDefault(_modal);

	var _inputNumber = __webpack_require__(236);

	var _inputNumber2 = _interopRequireDefault(_inputNumber);

	var _progress = __webpack_require__(241);

	var _progress2 = _interopRequireDefault(_progress);

	var _pageloading = __webpack_require__(246);

	var _pageloading2 = _interopRequireDefault(_pageloading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_vue2.default.use(_vueRouter2.default);
	_vue2.default.use(_index2.default);
	_vue2.default.config.devtools = true;

	var router = new _vueRouter2.default();

	router.map({
	    '/': {
	        component: _Home2.default,
	        subRoutes: {
	            '/home': {
	                name: 'home',
	                component: function component(resolve) {
	                    resolve(_homeContent2.default);
	                }
	            },
	            '/component/pagination': {
	                component: function component(resolve) {
	                    resolve(_pagination2.default);
	                }
	            },
	            '/component/popover': {
	                component: function component(resolve) {
	                    resolve(_popover2.default);
	                }
	            },
	            '/component/tooltip': {
	                component: function component(resolve) {
	                    resolve(_tooltip2.default);
	                }
	            },
	            '/component/suggestion': {
	                component: function component(resolve) {
	                    resolve(_suggestion2.default);
	                }
	            },
	            '/component/tag': {
	                component: function component(resolve) {
	                    resolve(_tag2.default);
	                }
	            },
	            '/component/datepicker': {
	                component: function component(resolve) {
	                    resolve(_datepicker2.default);
	                }
	            },
	            '/component/daterangepicker': {
	                component: function component(resolve) {
	                    resolve(_dateRangePicker2.default);
	                }
	            },
	            '/component/select': {
	                component: function component(resolve) {
	                    resolve(_select2.default);
	                }
	            },
	            '/component/loading': {
	                component: function component(resolve) {
	                    resolve(_loading2.default);
	                }
	            },
	            '/component/message': {
	                component: function component(resolve) {
	                    resolve(_message2.default);
	                }
	            },
	            '/component/modal': {
	                component: function component(resolve) {
	                    resolve(_modal2.default);
	                }
	            },
	            '/component/inputNumber': {
	                component: function component(resolve) {
	                    resolve(_inputNumber2.default);
	                }
	            },
	            '/component/progress': {
	                component: function component(resolve) {
	                    resolve(_progress2.default);
	                }
	            },
	            '/component/pageloading': {
	                component: function component(resolve) {
	                    resolve(_pageloading2.default);
	                }
	            }
	        }
	    }
	});

	router.start(_App2.default, '#app');

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/*!
	 * Vue.js v1.0.28
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	'use strict';

	function set(obj, key, val) {
	  if (hasOwn(obj, key)) {
	    obj[key] = val;
	    return;
	  }
	  if (obj._isVue) {
	    set(obj._data, key, val);
	    return;
	  }
	  var ob = obj.__ob__;
	  if (!ob) {
	    obj[key] = val;
	    return;
	  }
	  ob.convert(key, val);
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._proxy(key);
	      vm._digest();
	    }
	  }
	  return val;
	}

	/**
	 * Delete a property and trigger change if necessary.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 */

	function del(obj, key) {
	  if (!hasOwn(obj, key)) {
	    return;
	  }
	  delete obj[key];
	  var ob = obj.__ob__;
	  if (!ob) {
	    if (obj._isVue) {
	      delete obj._data[key];
	      obj._digest();
	    }
	    return;
	  }
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._unproxy(key);
	      vm._digest();
	    }
	  }
	}

	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	 * Check whether the object has the property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @return {Boolean}
	 */

	function hasOwn(obj, key) {
	  return hasOwnProperty.call(obj, key);
	}

	/**
	 * Check if an expression is a literal value.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */

	var literalValueRE = /^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/;

	function isLiteral(exp) {
	  return literalValueRE.test(exp);
	}

	/**
	 * Check if a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */

	function isReserved(str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F;
	}

	/**
	 * Guard text output, make sure undefined outputs
	 * empty string
	 *
	 * @param {*} value
	 * @return {String}
	 */

	function _toString(value) {
	  return value == null ? '' : value.toString();
	}

	/**
	 * Check and convert possible numeric strings to numbers
	 * before setting back to data
	 *
	 * @param {*} value
	 * @return {*|Number}
	 */

	function toNumber(value) {
	  if (typeof value !== 'string') {
	    return value;
	  } else {
	    var parsed = Number(value);
	    return isNaN(parsed) ? value : parsed;
	  }
	}

	/**
	 * Convert string boolean literals into real booleans.
	 *
	 * @param {*} value
	 * @return {*|Boolean}
	 */

	function toBoolean(value) {
	  return value === 'true' ? true : value === 'false' ? false : value;
	}

	/**
	 * Strip quotes from a string
	 *
	 * @param {String} str
	 * @return {String | false}
	 */

	function stripQuotes(str) {
	  var a = str.charCodeAt(0);
	  var b = str.charCodeAt(str.length - 1);
	  return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
	}

	/**
	 * Camelize a hyphen-delimited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var camelizeRE = /-(\w)/g;

	function camelize(str) {
	  return str.replace(camelizeRE, toUpper);
	}

	function toUpper(_, c) {
	  return c ? c.toUpperCase() : '';
	}

	/**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var hyphenateRE = /([^-])([A-Z])/g;

	function hyphenate(str) {
	  return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase();
	}

	/**
	 * Converts hyphen/underscore/slash delimitered names into
	 * camelized classNames.
	 *
	 * e.g. my-component => MyComponent
	 *      some_else    => SomeElse
	 *      some/comp    => SomeComp
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var classifyRE = /(?:^|[-_\/])(\w)/g;

	function classify(str) {
	  return str.replace(classifyRE, toUpper);
	}

	/**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */

	function bind(fn, ctx) {
	  return function (a) {
	    var l = arguments.length;
	    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
	  };
	}

	/**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */

	function toArray(list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret;
	}

	/**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */

	function extend(to, from) {
	  var keys = Object.keys(from);
	  var i = keys.length;
	  while (i--) {
	    to[keys[i]] = from[keys[i]];
	  }
	  return to;
	}

	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	function isObject(obj) {
	  return obj !== null && typeof obj === 'object';
	}

	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';

	function isPlainObject(obj) {
	  return toString.call(obj) === OBJECT_STRING;
	}

	/**
	 * Array type check.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	var isArray = Array.isArray;

	/**
	 * Define a property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */

	function def(obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}

	/**
	 * Debounce a function so it only gets called after the
	 * input stops arriving after the given wait period.
	 *
	 * @param {Function} func
	 * @param {Number} wait
	 * @return {Function} - the debounced function
	 */

	function _debounce(func, wait) {
	  var timeout, args, context, timestamp, result;
	  var later = function later() {
	    var last = Date.now() - timestamp;
	    if (last < wait && last >= 0) {
	      timeout = setTimeout(later, wait - last);
	    } else {
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    }
	  };
	  return function () {
	    context = this;
	    args = arguments;
	    timestamp = Date.now();
	    if (!timeout) {
	      timeout = setTimeout(later, wait);
	    }
	    return result;
	  };
	}

	/**
	 * Manual indexOf because it's slightly faster than
	 * native.
	 *
	 * @param {Array} arr
	 * @param {*} obj
	 */

	function indexOf(arr, obj) {
	  var i = arr.length;
	  while (i--) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	}

	/**
	 * Make a cancellable version of an async callback.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */

	function cancellable(fn) {
	  var cb = function cb() {
	    if (!cb.cancelled) {
	      return fn.apply(this, arguments);
	    }
	  };
	  cb.cancel = function () {
	    cb.cancelled = true;
	  };
	  return cb;
	}

	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 *
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 */

	function looseEqual(a, b) {
	  /* eslint-disable eqeqeq */
	  return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
	  /* eslint-enable eqeqeq */
	}

	var hasProto = ('__proto__' in {});

	// Browser environment sniffing
	var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';

	// detect devtools
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

	// UA sniffing for working around browser-specific quirks
	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	var isIE = UA && UA.indexOf('trident') > 0;
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	var isAndroid = UA && UA.indexOf('android') > 0;
	var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);

	var transitionProp = undefined;
	var transitionEndEvent = undefined;
	var animationProp = undefined;
	var animationEndEvent = undefined;

	// Transition property/event sniffing
	if (inBrowser && !isIE9) {
	  var isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
	  var isWebkitAnim = window.onanimationend === undefined && window.onwebkitanimationend !== undefined;
	  transitionProp = isWebkitTrans ? 'WebkitTransition' : 'transition';
	  transitionEndEvent = isWebkitTrans ? 'webkitTransitionEnd' : 'transitionend';
	  animationProp = isWebkitAnim ? 'WebkitAnimation' : 'animation';
	  animationEndEvent = isWebkitAnim ? 'webkitAnimationEnd' : 'animationend';
	}

	/* istanbul ignore next */
	function isNative(Ctor) {
	  return (/native code/.test(Ctor.toString())
	  );
	}

	/**
	 * Defer a task to execute it asynchronously. Ideally this
	 * should be executed as a microtask, so we leverage
	 * MutationObserver if it's available, and fallback to
	 * setTimeout(0).
	 *
	 * @param {Function} cb
	 * @param {Object} ctx
	 */

	var nextTick = (function () {
	  var callbacks = [];
	  var pending = false;
	  var timerFunc = undefined;

	  function nextTickHandler() {
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
	    var noop = function noop() {};
	    timerFunc = function () {
	      p.then(nextTickHandler);
	      // in problematic UIWebViews, Promise.then doesn't completely break, but
	      // it can get stuck in a weird state where callbacks are pushed into the
	      // microtask queue but the queue isn't being flushed, until the browser
	      // needs to do some other work, e.g. handle a timer. Therefore we can
	      // "force" the microtask queue to be flushed by adding an empty timer.
	      if (isIOS) setTimeout(noop);
	    };
	  } else if (typeof MutationObserver !== 'undefined') {
	    // use MutationObserver where native Promise is not available,
	    // e.g. IE11, iOS7, Android 4.4
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
	    timerFunc = setTimeout;
	  }

	  return function (cb, ctx) {
	    var func = ctx ? function () {
	      cb.call(ctx);
	    } : cb;
	    callbacks.push(func);
	    if (pending) return;
	    pending = true;
	    timerFunc(nextTickHandler, 0);
	  };
	})();

	var _Set = undefined;
	/* istanbul ignore if */
	if (typeof Set !== 'undefined' && isNative(Set)) {
	  // use native Set when available.
	  _Set = Set;
	} else {
	  // a non-standard Set polyfill that only works with primitive keys.
	  _Set = function () {
	    this.set = Object.create(null);
	  };
	  _Set.prototype.has = function (key) {
	    return this.set[key] !== undefined;
	  };
	  _Set.prototype.add = function (key) {
	    this.set[key] = 1;
	  };
	  _Set.prototype.clear = function () {
	    this.set = Object.create(null);
	  };
	}

	function Cache(limit) {
	  this.size = 0;
	  this.limit = limit;
	  this.head = this.tail = undefined;
	  this._keymap = Object.create(null);
	}

	var p = Cache.prototype;

	/**
	 * Put <value> into the cache associated with <key>.
	 * Returns the entry which was removed to make room for
	 * the new entry. Otherwise undefined is returned.
	 * (i.e. if there was enough room already).
	 *
	 * @param {String} key
	 * @param {*} value
	 * @return {Entry|undefined}
	 */

	p.put = function (key, value) {
	  var removed;

	  var entry = this.get(key, true);
	  if (!entry) {
	    if (this.size === this.limit) {
	      removed = this.shift();
	    }
	    entry = {
	      key: key
	    };
	    this._keymap[key] = entry;
	    if (this.tail) {
	      this.tail.newer = entry;
	      entry.older = this.tail;
	    } else {
	      this.head = entry;
	    }
	    this.tail = entry;
	    this.size++;
	  }
	  entry.value = value;

	  return removed;
	};

	/**
	 * Purge the least recently used (oldest) entry from the
	 * cache. Returns the removed entry or undefined if the
	 * cache was empty.
	 */

	p.shift = function () {
	  var entry = this.head;
	  if (entry) {
	    this.head = this.head.newer;
	    this.head.older = undefined;
	    entry.newer = entry.older = undefined;
	    this._keymap[entry.key] = undefined;
	    this.size--;
	  }
	  return entry;
	};

	/**
	 * Get and register recent use of <key>. Returns the value
	 * associated with <key> or undefined if not in cache.
	 *
	 * @param {String} key
	 * @param {Boolean} returnEntry
	 * @return {Entry|*}
	 */

	p.get = function (key, returnEntry) {
	  var entry = this._keymap[key];
	  if (entry === undefined) return;
	  if (entry === this.tail) {
	    return returnEntry ? entry : entry.value;
	  }
	  // HEAD--------------TAIL
	  //   <.older   .newer>
	  //  <--- add direction --
	  //   A  B  C  <D>  E
	  if (entry.newer) {
	    if (entry === this.head) {
	      this.head = entry.newer;
	    }
	    entry.newer.older = entry.older; // C <-- E.
	  }
	  if (entry.older) {
	    entry.older.newer = entry.newer; // C. --> E
	  }
	  entry.newer = undefined; // D --x
	  entry.older = this.tail; // D. --> E
	  if (this.tail) {
	    this.tail.newer = entry; // E. <-- D
	  }
	  this.tail = entry;
	  return returnEntry ? entry : entry.value;
	};

	var cache$1 = new Cache(1000);
	var reservedArgRE = /^in$|^-?\d+/;

	/**
	 * Parser state
	 */

	var str;
	var dir;
	var len;
	var index;
	var chr;
	var state;
	var startState = 0;
	var filterState = 1;
	var filterNameState = 2;
	var filterArgState = 3;

	var doubleChr = 0x22;
	var singleChr = 0x27;
	var pipeChr = 0x7C;
	var escapeChr = 0x5C;
	var spaceChr = 0x20;

	var expStartChr = { 0x5B: 1, 0x7B: 1, 0x28: 1 };
	var expChrPair = { 0x5B: 0x5D, 0x7B: 0x7D, 0x28: 0x29 };

	function peek() {
	  return str.charCodeAt(index + 1);
	}

	function next() {
	  return str.charCodeAt(++index);
	}

	function eof() {
	  return index >= len;
	}

	function eatSpace() {
	  while (peek() === spaceChr) {
	    next();
	  }
	}

	function isStringStart(chr) {
	  return chr === doubleChr || chr === singleChr;
	}

	function isExpStart(chr) {
	  return expStartChr[chr];
	}

	function isExpEnd(start, chr) {
	  return expChrPair[start] === chr;
	}

	function parseString() {
	  var stringQuote = next();
	  var chr;
	  while (!eof()) {
	    chr = next();
	    // escape char
	    if (chr === escapeChr) {
	      next();
	    } else if (chr === stringQuote) {
	      break;
	    }
	  }
	}

	function parseSpecialExp(chr) {
	  var inExp = 0;
	  var startChr = chr;

	  while (!eof()) {
	    chr = peek();
	    if (isStringStart(chr)) {
	      parseString();
	      continue;
	    }

	    if (startChr === chr) {
	      inExp++;
	    }
	    if (isExpEnd(startChr, chr)) {
	      inExp--;
	    }

	    next();

	    if (inExp === 0) {
	      break;
	    }
	  }
	}

	/**
	 * syntax:
	 * expression | filterName  [arg  arg [| filterName arg arg]]
	 */

	function parseExpression() {
	  var start = index;
	  while (!eof()) {
	    chr = peek();
	    if (isStringStart(chr)) {
	      parseString();
	    } else if (isExpStart(chr)) {
	      parseSpecialExp(chr);
	    } else if (chr === pipeChr) {
	      next();
	      chr = peek();
	      if (chr === pipeChr) {
	        next();
	      } else {
	        if (state === startState || state === filterArgState) {
	          state = filterState;
	        }
	        break;
	      }
	    } else if (chr === spaceChr && (state === filterNameState || state === filterArgState)) {
	      eatSpace();
	      break;
	    } else {
	      if (state === filterState) {
	        state = filterNameState;
	      }
	      next();
	    }
	  }

	  return str.slice(start + 1, index) || null;
	}

	function parseFilterList() {
	  var filters = [];
	  while (!eof()) {
	    filters.push(parseFilter());
	  }
	  return filters;
	}

	function parseFilter() {
	  var filter = {};
	  var args;

	  state = filterState;
	  filter.name = parseExpression().trim();

	  state = filterArgState;
	  args = parseFilterArguments();

	  if (args.length) {
	    filter.args = args;
	  }
	  return filter;
	}

	function parseFilterArguments() {
	  var args = [];
	  while (!eof() && state !== filterState) {
	    var arg = parseExpression();
	    if (!arg) {
	      break;
	    }
	    args.push(processFilterArg(arg));
	  }

	  return args;
	}

	/**
	 * Check if an argument is dynamic and strip quotes.
	 *
	 * @param {String} arg
	 * @return {Object}
	 */

	function processFilterArg(arg) {
	  if (reservedArgRE.test(arg)) {
	    return {
	      value: toNumber(arg),
	      dynamic: false
	    };
	  } else {
	    var stripped = stripQuotes(arg);
	    var dynamic = stripped === arg;
	    return {
	      value: dynamic ? arg : stripped,
	      dynamic: dynamic
	    };
	  }
	}

	/**
	 * Parse a directive value and extract the expression
	 * and its filters into a descriptor.
	 *
	 * Example:
	 *
	 * "a + 1 | uppercase" will yield:
	 * {
	 *   expression: 'a + 1',
	 *   filters: [
	 *     { name: 'uppercase', args: null }
	 *   ]
	 * }
	 *
	 * @param {String} s
	 * @return {Object}
	 */

	function parseDirective(s) {
	  var hit = cache$1.get(s);
	  if (hit) {
	    return hit;
	  }

	  // reset parser state
	  str = s;
	  dir = {};
	  len = str.length;
	  index = -1;
	  chr = '';
	  state = startState;

	  var filters;

	  if (str.indexOf('|') < 0) {
	    dir.expression = str.trim();
	  } else {
	    dir.expression = parseExpression().trim();
	    filters = parseFilterList();
	    if (filters.length) {
	      dir.filters = filters;
	    }
	  }

	  cache$1.put(s, dir);
	  return dir;
	}

	var directive = Object.freeze({
	  parseDirective: parseDirective
	});

	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	var cache = undefined;
	var tagRE = undefined;
	var htmlRE = undefined;
	/**
	 * Escape a string so it can be used in a RegExp
	 * constructor.
	 *
	 * @param {String} str
	 */

	function escapeRegex(str) {
	  return str.replace(regexEscapeRE, '\\$&');
	}

	function compileRegex() {
	  var open = escapeRegex(config.delimiters[0]);
	  var close = escapeRegex(config.delimiters[1]);
	  var unsafeOpen = escapeRegex(config.unsafeDelimiters[0]);
	  var unsafeClose = escapeRegex(config.unsafeDelimiters[1]);
	  tagRE = new RegExp(unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '|' + open + '((?:.|\\n)+?)' + close, 'g');
	  htmlRE = new RegExp('^' + unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '$');
	  // reset cache
	  cache = new Cache(1000);
	}

	/**
	 * Parse a template text string into an array of tokens.
	 *
	 * @param {String} text
	 * @return {Array<Object> | null}
	 *               - {String} type
	 *               - {String} value
	 *               - {Boolean} [html]
	 *               - {Boolean} [oneTime]
	 */

	function parseText(text) {
	  if (!cache) {
	    compileRegex();
	  }
	  var hit = cache.get(text);
	  if (hit) {
	    return hit;
	  }
	  if (!tagRE.test(text)) {
	    return null;
	  }
	  var tokens = [];
	  var lastIndex = tagRE.lastIndex = 0;
	  var match, index, html, value, first, oneTime;
	  /* eslint-disable no-cond-assign */
	  while (match = tagRE.exec(text)) {
	    /* eslint-enable no-cond-assign */
	    index = match.index;
	    // push text token
	    if (index > lastIndex) {
	      tokens.push({
	        value: text.slice(lastIndex, index)
	      });
	    }
	    // tag token
	    html = htmlRE.test(match[0]);
	    value = html ? match[1] : match[2];
	    first = value.charCodeAt(0);
	    oneTime = first === 42; // *
	    value = oneTime ? value.slice(1) : value;
	    tokens.push({
	      tag: true,
	      value: value.trim(),
	      html: html,
	      oneTime: oneTime
	    });
	    lastIndex = index + match[0].length;
	  }
	  if (lastIndex < text.length) {
	    tokens.push({
	      value: text.slice(lastIndex)
	    });
	  }
	  cache.put(text, tokens);
	  return tokens;
	}

	/**
	 * Format a list of tokens into an expression.
	 * e.g. tokens parsed from 'a {{b}} c' can be serialized
	 * into one single expression as '"a " + b + " c"'.
	 *
	 * @param {Array} tokens
	 * @param {Vue} [vm]
	 * @return {String}
	 */

	function tokensToExp(tokens, vm) {
	  if (tokens.length > 1) {
	    return tokens.map(function (token) {
	      return formatToken(token, vm);
	    }).join('+');
	  } else {
	    return formatToken(tokens[0], vm, true);
	  }
	}

	/**
	 * Format a single token.
	 *
	 * @param {Object} token
	 * @param {Vue} [vm]
	 * @param {Boolean} [single]
	 * @return {String}
	 */

	function formatToken(token, vm, single) {
	  return token.tag ? token.oneTime && vm ? '"' + vm.$eval(token.value) + '"' : inlineFilters(token.value, single) : '"' + token.value + '"';
	}

	/**
	 * For an attribute with multiple interpolation tags,
	 * e.g. attr="some-{{thing | filter}}", in order to combine
	 * the whole thing into a single watchable expression, we
	 * have to inline those filters. This function does exactly
	 * that. This is a bit hacky but it avoids heavy changes
	 * to directive parser and watcher mechanism.
	 *
	 * @param {String} exp
	 * @param {Boolean} single
	 * @return {String}
	 */

	var filterRE = /[^|]\|[^|]/;
	function inlineFilters(exp, single) {
	  if (!filterRE.test(exp)) {
	    return single ? exp : '(' + exp + ')';
	  } else {
	    var dir = parseDirective(exp);
	    if (!dir.filters) {
	      return '(' + exp + ')';
	    } else {
	      return 'this._applyFilters(' + dir.expression + // value
	      ',null,' + // oldValue (null for read)
	      JSON.stringify(dir.filters) + // filter descriptors
	      ',false)'; // write?
	    }
	  }
	}

	var text = Object.freeze({
	  compileRegex: compileRegex,
	  parseText: parseText,
	  tokensToExp: tokensToExp
	});

	var delimiters = ['{{', '}}'];
	var unsafeDelimiters = ['{{{', '}}}'];

	var config = Object.defineProperties({

	  /**
	   * Whether to print debug messages.
	   * Also enables stack trace for warnings.
	   *
	   * @type {Boolean}
	   */

	  debug: false,

	  /**
	   * Whether to suppress warnings.
	   *
	   * @type {Boolean}
	   */

	  silent: false,

	  /**
	   * Whether to use async rendering.
	   */

	  async: true,

	  /**
	   * Whether to warn against errors caught when evaluating
	   * expressions.
	   */

	  warnExpressionErrors: true,

	  /**
	   * Whether to allow devtools inspection.
	   * Disabled by default in production builds.
	   */

	  devtools: process.env.NODE_ENV !== 'production',

	  /**
	   * Internal flag to indicate the delimiters have been
	   * changed.
	   *
	   * @type {Boolean}
	   */

	  _delimitersChanged: true,

	  /**
	   * List of asset types that a component can own.
	   *
	   * @type {Array}
	   */

	  _assetTypes: ['component', 'directive', 'elementDirective', 'filter', 'transition', 'partial'],

	  /**
	   * prop binding modes
	   */

	  _propBindingModes: {
	    ONE_WAY: 0,
	    TWO_WAY: 1,
	    ONE_TIME: 2
	  },

	  /**
	   * Max circular updates allowed in a batcher flush cycle.
	   */

	  _maxUpdateCount: 100

	}, {
	  delimiters: { /**
	                 * Interpolation delimiters. Changing these would trigger
	                 * the text parser to re-compile the regular expressions.
	                 *
	                 * @type {Array<String>}
	                 */

	    get: function get() {
	      return delimiters;
	    },
	    set: function set(val) {
	      delimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  },
	  unsafeDelimiters: {
	    get: function get() {
	      return unsafeDelimiters;
	    },
	    set: function set(val) {
	      unsafeDelimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  }
	});

	var warn = undefined;
	var formatComponentName = undefined;

	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var hasConsole = typeof console !== 'undefined';

	    warn = function (msg, vm) {
	      if (hasConsole && !config.silent) {
	        console.error('[Vue warn]: ' + msg + (vm ? formatComponentName(vm) : ''));
	      }
	    };

	    formatComponentName = function (vm) {
	      var name = vm._isVue ? vm.$options.name : vm.name;
	      return name ? ' (found in component: <' + hyphenate(name) + '>)' : '';
	    };
	  })();
	}

	/**
	 * Append with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function appendWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    target.appendChild(el);
	  }, vm, cb);
	}

	/**
	 * InsertBefore with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function beforeWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    before(el, target);
	  }, vm, cb);
	}

	/**
	 * Remove with transition.
	 *
	 * @param {Element} el
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function removeWithTransition(el, vm, cb) {
	  applyTransition(el, -1, function () {
	    remove(el);
	  }, vm, cb);
	}

	/**
	 * Apply transitions with an operation callback.
	 *
	 * @param {Element} el
	 * @param {Number} direction
	 *                  1: enter
	 *                 -1: leave
	 * @param {Function} op - the actual DOM operation
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function applyTransition(el, direction, op, vm, cb) {
	  var transition = el.__v_trans;
	  if (!transition ||
	  // skip if there are no js hooks and CSS transition is
	  // not supported
	  !transition.hooks && !transitionEndEvent ||
	  // skip transitions for initial compile
	  !vm._isCompiled ||
	  // if the vm is being manipulated by a parent directive
	  // during the parent's compilation phase, skip the
	  // animation.
	  vm.$parent && !vm.$parent._isCompiled) {
	    op();
	    if (cb) cb();
	    return;
	  }
	  var action = direction > 0 ? 'enter' : 'leave';
	  transition[action](op, cb);
	}

	var transition = Object.freeze({
	  appendWithTransition: appendWithTransition,
	  beforeWithTransition: beforeWithTransition,
	  removeWithTransition: removeWithTransition,
	  applyTransition: applyTransition
	});

	/**
	 * Query an element selector if it's not an element already.
	 *
	 * @param {String|Element} el
	 * @return {Element}
	 */

	function query(el) {
	  if (typeof el === 'string') {
	    var selector = el;
	    el = document.querySelector(el);
	    if (!el) {
	      process.env.NODE_ENV !== 'production' && warn('Cannot find element: ' + selector);
	    }
	  }
	  return el;
	}

	/**
	 * Check if a node is in the document.
	 * Note: document.documentElement.contains should work here
	 * but always returns false for comment nodes in phantomjs,
	 * making unit tests difficult. This is fixed by doing the
	 * contains() check on the node's parentNode instead of
	 * the node itself.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function inDoc(node) {
	  if (!node) return false;
	  var doc = node.ownerDocument.documentElement;
	  var parent = node.parentNode;
	  return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
	}

	/**
	 * Get and remove an attribute from a node.
	 *
	 * @param {Node} node
	 * @param {String} _attr
	 */

	function getAttr(node, _attr) {
	  var val = node.getAttribute(_attr);
	  if (val !== null) {
	    node.removeAttribute(_attr);
	  }
	  return val;
	}

	/**
	 * Get an attribute with colon or v-bind: prefix.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {String|null}
	 */

	function getBindAttr(node, name) {
	  var val = getAttr(node, ':' + name);
	  if (val === null) {
	    val = getAttr(node, 'v-bind:' + name);
	  }
	  return val;
	}

	/**
	 * Check the presence of a bind attribute.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {Boolean}
	 */

	function hasBindAttr(node, name) {
	  return node.hasAttribute(name) || node.hasAttribute(':' + name) || node.hasAttribute('v-bind:' + name);
	}

	/**
	 * Insert el before target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function before(el, target) {
	  target.parentNode.insertBefore(el, target);
	}

	/**
	 * Insert el after target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function after(el, target) {
	  if (target.nextSibling) {
	    before(el, target.nextSibling);
	  } else {
	    target.parentNode.appendChild(el);
	  }
	}

	/**
	 * Remove el from DOM
	 *
	 * @param {Element} el
	 */

	function remove(el) {
	  el.parentNode.removeChild(el);
	}

	/**
	 * Prepend el to target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function prepend(el, target) {
	  if (target.firstChild) {
	    before(el, target.firstChild);
	  } else {
	    target.appendChild(el);
	  }
	}

	/**
	 * Replace target with el
	 *
	 * @param {Element} target
	 * @param {Element} el
	 */

	function replace(target, el) {
	  var parent = target.parentNode;
	  if (parent) {
	    parent.replaceChild(el, target);
	  }
	}

	/**
	 * Add event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 * @param {Boolean} [useCapture]
	 */

	function on(el, event, cb, useCapture) {
	  el.addEventListener(event, cb, useCapture);
	}

	/**
	 * Remove event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */

	function off(el, event, cb) {
	  el.removeEventListener(event, cb);
	}

	/**
	 * For IE9 compat: when both class and :class are present
	 * getAttribute('class') returns wrong value...
	 *
	 * @param {Element} el
	 * @return {String}
	 */

	function getClass(el) {
	  var classname = el.className;
	  if (typeof classname === 'object') {
	    classname = classname.baseVal || '';
	  }
	  return classname;
	}

	/**
	 * In IE9, setAttribute('class') will result in empty class
	 * if the element also has the :class attribute; However in
	 * PhantomJS, setting `className` does not work on SVG elements...
	 * So we have to do a conditional check here.
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	function setClass(el, cls) {
	  /* istanbul ignore if */
	  if (isIE9 && !/svg$/.test(el.namespaceURI)) {
	    el.className = cls;
	  } else {
	    el.setAttribute('class', cls);
	  }
	}

	/**
	 * Add class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	function addClass(el, cls) {
	  if (el.classList) {
	    el.classList.add(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      setClass(el, (cur + cls).trim());
	    }
	  }
	}

	/**
	 * Remove class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	function removeClass(el, cls) {
	  if (el.classList) {
	    el.classList.remove(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    setClass(el, cur.trim());
	  }
	  if (!el.className) {
	    el.removeAttribute('class');
	  }
	}

	/**
	 * Extract raw content inside an element into a temporary
	 * container div
	 *
	 * @param {Element} el
	 * @param {Boolean} asFragment
	 * @return {Element|DocumentFragment}
	 */

	function extractContent(el, asFragment) {
	  var child;
	  var rawContent;
	  /* istanbul ignore if */
	  if (isTemplate(el) && isFragment(el.content)) {
	    el = el.content;
	  }
	  if (el.hasChildNodes()) {
	    trimNode(el);
	    rawContent = asFragment ? document.createDocumentFragment() : document.createElement('div');
	    /* eslint-disable no-cond-assign */
	    while (child = el.firstChild) {
	      /* eslint-enable no-cond-assign */
	      rawContent.appendChild(child);
	    }
	  }
	  return rawContent;
	}

	/**
	 * Trim possible empty head/tail text and comment
	 * nodes inside a parent.
	 *
	 * @param {Node} node
	 */

	function trimNode(node) {
	  var child;
	  /* eslint-disable no-sequences */
	  while ((child = node.firstChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  while ((child = node.lastChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  /* eslint-enable no-sequences */
	}

	function isTrimmable(node) {
	  return node && (node.nodeType === 3 && !node.data.trim() || node.nodeType === 8);
	}

	/**
	 * Check if an element is a template tag.
	 * Note if the template appears inside an SVG its tagName
	 * will be in lowercase.
	 *
	 * @param {Element} el
	 */

	function isTemplate(el) {
	  return el.tagName && el.tagName.toLowerCase() === 'template';
	}

	/**
	 * Create an "anchor" for performing dom insertion/removals.
	 * This is used in a number of scenarios:
	 * - fragment instance
	 * - v-html
	 * - v-if
	 * - v-for
	 * - component
	 *
	 * @param {String} content
	 * @param {Boolean} persist - IE trashes empty textNodes on
	 *                            cloneNode(true), so in certain
	 *                            cases the anchor needs to be
	 *                            non-empty to be persisted in
	 *                            templates.
	 * @return {Comment|Text}
	 */

	function createAnchor(content, persist) {
	  var anchor = config.debug ? document.createComment(content) : document.createTextNode(persist ? ' ' : '');
	  anchor.__v_anchor = true;
	  return anchor;
	}

	/**
	 * Find a component ref attribute that starts with $.
	 *
	 * @param {Element} node
	 * @return {String|undefined}
	 */

	var refRE = /^v-ref:/;

	function findRef(node) {
	  if (node.hasAttributes()) {
	    var attrs = node.attributes;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      var name = attrs[i].name;
	      if (refRE.test(name)) {
	        return camelize(name.replace(refRE, ''));
	      }
	    }
	  }
	}

	/**
	 * Map a function to a range of nodes .
	 *
	 * @param {Node} node
	 * @param {Node} end
	 * @param {Function} op
	 */

	function mapNodeRange(node, end, op) {
	  var next;
	  while (node !== end) {
	    next = node.nextSibling;
	    op(node);
	    node = next;
	  }
	  op(end);
	}

	/**
	 * Remove a range of nodes with transition, store
	 * the nodes in a fragment with correct ordering,
	 * and call callback when done.
	 *
	 * @param {Node} start
	 * @param {Node} end
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Function} cb
	 */

	function removeNodeRange(start, end, vm, frag, cb) {
	  var done = false;
	  var removed = 0;
	  var nodes = [];
	  mapNodeRange(start, end, function (node) {
	    if (node === end) done = true;
	    nodes.push(node);
	    removeWithTransition(node, vm, onRemoved);
	  });
	  function onRemoved() {
	    removed++;
	    if (done && removed >= nodes.length) {
	      for (var i = 0; i < nodes.length; i++) {
	        frag.appendChild(nodes[i]);
	      }
	      cb && cb();
	    }
	  }
	}

	/**
	 * Check if a node is a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function isFragment(node) {
	  return node && node.nodeType === 11;
	}

	/**
	 * Get outerHTML of elements, taking care
	 * of SVG elements in IE as well.
	 *
	 * @param {Element} el
	 * @return {String}
	 */

	function getOuterHTML(el) {
	  if (el.outerHTML) {
	    return el.outerHTML;
	  } else {
	    var container = document.createElement('div');
	    container.appendChild(el.cloneNode(true));
	    return container.innerHTML;
	  }
	}

	var commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i;
	var reservedTagRE = /^(slot|partial|component)$/i;

	var isUnknownElement = undefined;
	if (process.env.NODE_ENV !== 'production') {
	  isUnknownElement = function (el, tag) {
	    if (tag.indexOf('-') > -1) {
	      // http://stackoverflow.com/a/28210364/1070244
	      return el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
	    } else {
	      return (/HTMLUnknownElement/.test(el.toString()) &&
	        // Chrome returns unknown for several HTML5 elements.
	        // https://code.google.com/p/chromium/issues/detail?id=540526
	        // Firefox returns unknown for some "Interactive elements."
	        !/^(data|time|rtc|rb|details|dialog|summary)$/.test(tag)
	      );
	    }
	  };
	}

	/**
	 * Check if an element is a component, if yes return its
	 * component id.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */

	function checkComponentAttr(el, options) {
	  var tag = el.tagName.toLowerCase();
	  var hasAttrs = el.hasAttributes();
	  if (!commonTagRE.test(tag) && !reservedTagRE.test(tag)) {
	    if (resolveAsset(options, 'components', tag)) {
	      return { id: tag };
	    } else {
	      var is = hasAttrs && getIsBinding(el, options);
	      if (is) {
	        return is;
	      } else if (process.env.NODE_ENV !== 'production') {
	        var expectedTag = options._componentNameMap && options._componentNameMap[tag];
	        if (expectedTag) {
	          warn('Unknown custom element: <' + tag + '> - ' + 'did you mean <' + expectedTag + '>? ' + 'HTML is case-insensitive, remember to use kebab-case in templates.');
	        } else if (isUnknownElement(el, tag)) {
	          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.');
	        }
	      }
	    }
	  } else if (hasAttrs) {
	    return getIsBinding(el, options);
	  }
	}

	/**
	 * Get "is" binding from an element.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */

	function getIsBinding(el, options) {
	  // dynamic syntax
	  var exp = el.getAttribute('is');
	  if (exp != null) {
	    if (resolveAsset(options, 'components', exp)) {
	      el.removeAttribute('is');
	      return { id: exp };
	    }
	  } else {
	    exp = getBindAttr(el, 'is');
	    if (exp != null) {
	      return { id: exp, dynamic: true };
	    }
	  }
	}

	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 *
	 * All strategy functions follow the same signature:
	 *
	 * @param {*} parentVal
	 * @param {*} childVal
	 * @param {Vue} [vm]
	 */

	var strats = config.optionMergeStrategies = Object.create(null);

	/**
	 * Helper that recursively merges two data objects together.
	 */

	function mergeData(to, from) {
	  var key, toVal, fromVal;
	  for (key in from) {
	    toVal = to[key];
	    fromVal = from[key];
	    if (!hasOwn(to, key)) {
	      set(to, key, fromVal);
	    } else if (isObject(toVal) && isObject(fromVal)) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to;
	}

	/**
	 * Data
	 */

	strats.data = function (parentVal, childVal, vm) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal;
	    }
	    if (typeof childVal !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
	      return parentVal;
	    }
	    if (!parentVal) {
	      return childVal;
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn() {
	      return mergeData(childVal.call(this), parentVal.call(this));
	    };
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn() {
	      // instance merge
	      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
	      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData);
	      } else {
	        return defaultData;
	      }
	    };
	  }
	};

	/**
	 * El
	 */

	strats.el = function (parentVal, childVal, vm) {
	  if (!vm && childVal && typeof childVal !== 'function') {
	    process.env.NODE_ENV !== 'production' && warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
	    return;
	  }
	  var ret = childVal || parentVal;
	  // invoke the element factory if this is instance merge
	  return vm && typeof ret === 'function' ? ret.call(vm) : ret;
	};

	/**
	 * Hooks and param attributes are merged as arrays.
	 */

	strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = strats.activate = function (parentVal, childVal) {
	  return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
	};

	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */

	function mergeAssets(parentVal, childVal) {
	  var res = Object.create(parentVal || null);
	  return childVal ? extend(res, guardArrayAssets(childVal)) : res;
	}

	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});

	/**
	 * Events & Watchers.
	 *
	 * Events & watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */

	strats.watch = strats.events = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key in childVal) {
	    var parent = ret[key];
	    var child = childVal[key];
	    if (parent && !isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key] = parent ? parent.concat(child) : [child];
	  }
	  return ret;
	};

	/**
	 * Other object hashes.
	 */

	strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  extend(ret, childVal);
	  return ret;
	};

	/**
	 * Default strategy.
	 */

	var defaultStrat = function defaultStrat(parentVal, childVal) {
	  return childVal === undefined ? parentVal : childVal;
	};

	/**
	 * Make sure component options get converted to actual
	 * constructors.
	 *
	 * @param {Object} options
	 */

	function guardComponents(options) {
	  if (options.components) {
	    var components = options.components = guardArrayAssets(options.components);
	    var ids = Object.keys(components);
	    var def;
	    if (process.env.NODE_ENV !== 'production') {
	      var map = options._componentNameMap = {};
	    }
	    for (var i = 0, l = ids.length; i < l; i++) {
	      var key = ids[i];
	      if (commonTagRE.test(key) || reservedTagRE.test(key)) {
	        process.env.NODE_ENV !== 'production' && warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
	        continue;
	      }
	      // record a all lowercase <-> kebab-case mapping for
	      // possible custom element case error warning
	      if (process.env.NODE_ENV !== 'production') {
	        map[key.replace(/-/g, '').toLowerCase()] = hyphenate(key);
	      }
	      def = components[key];
	      if (isPlainObject(def)) {
	        components[key] = Vue.extend(def);
	      }
	    }
	  }
	}

	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 *
	 * @param {Object} options
	 */

	function guardProps(options) {
	  var props = options.props;
	  var i, val;
	  if (isArray(props)) {
	    options.props = {};
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        options.props[val] = null;
	      } else if (val.name) {
	        options.props[val.name] = val;
	      }
	    }
	  } else if (isPlainObject(props)) {
	    var keys = Object.keys(props);
	    i = keys.length;
	    while (i--) {
	      val = props[keys[i]];
	      if (typeof val === 'function') {
	        props[keys[i]] = { type: val };
	      }
	    }
	  }
	}

	/**
	 * Guard an Array-format assets option and converted it
	 * into the key-value Object format.
	 *
	 * @param {Object|Array} assets
	 * @return {Object}
	 */

	function guardArrayAssets(assets) {
	  if (isArray(assets)) {
	    var res = {};
	    var i = assets.length;
	    var asset;
	    while (i--) {
	      asset = assets[i];
	      var id = typeof asset === 'function' ? asset.options && asset.options.name || asset.id : asset.name || asset.id;
	      if (!id) {
	        process.env.NODE_ENV !== 'production' && warn('Array-syntax assets must provide a "name" or "id" field.');
	      } else {
	        res[id] = asset;
	      }
	    }
	    return res;
	  }
	  return assets;
	}

	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 *
	 * @param {Object} parent
	 * @param {Object} child
	 * @param {Vue} [vm] - if vm is present, indicates this is
	 *                     an instantiation merge.
	 */

	function mergeOptions(parent, child, vm) {
	  guardComponents(child);
	  guardProps(child);
	  if (process.env.NODE_ENV !== 'production') {
	    if (child.propsData && !vm) {
	      warn('propsData can only be used as an instantiation option.');
	    }
	  }
	  var options = {};
	  var key;
	  if (child['extends']) {
	    parent = typeof child['extends'] === 'function' ? mergeOptions(parent, child['extends'].options, vm) : mergeOptions(parent, child['extends'], vm);
	  }
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      var mixin = child.mixins[i];
	      var mixinOptions = mixin.prototype instanceof Vue ? mixin.options : mixin;
	      parent = mergeOptions(parent, mixinOptions, vm);
	    }
	  }
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField(key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options;
	}

	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 *
	 * @param {Object} options
	 * @param {String} type
	 * @param {String} id
	 * @param {Boolean} warnMissing
	 * @return {Object|Function}
	 */

	function resolveAsset(options, type, id, warnMissing) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return;
	  }
	  var assets = options[type];
	  var camelizedId;
	  var res = assets[id] ||
	  // camelCase ID
	  assets[camelizedId = camelize(id)] ||
	  // Pascal Case ID
	  assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];
	  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
	    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
	  }
	  return res;
	}

	var uid$1 = 0;

	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */
	function Dep() {
	  this.id = uid$1++;
	  this.subs = [];
	}

	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;

	/**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */

	Dep.prototype.addSub = function (sub) {
	  this.subs.push(sub);
	};

	/**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */

	Dep.prototype.removeSub = function (sub) {
	  this.subs.$remove(sub);
	};

	/**
	 * Add self as a dependency to the target watcher.
	 */

	Dep.prototype.depend = function () {
	  Dep.target.addDep(this);
	};

	/**
	 * Notify all subscribers of a new value.
	 */

	Dep.prototype.notify = function () {
	  // stablize the subscriber list first
	  var subs = toArray(this.subs);
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};

	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto)

	/**
	 * Intercept mutating methods and emit events
	 */

	;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  def(arrayMethods, method, function mutator() {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break;
	      case 'unshift':
	        inserted = args;
	        break;
	      case 'splice':
	        inserted = args.slice(2);
	        break;
	    }
	    if (inserted) ob.observeArray(inserted);
	    // notify change
	    ob.dep.notify();
	    return result;
	  });
	});

	/**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */

	def(arrayProto, '$set', function $set(index, val) {
	  if (index >= this.length) {
	    this.length = Number(index) + 1;
	  }
	  return this.splice(index, 1, val)[0];
	});

	/**
	 * Convenience method to remove the element at given index or target element reference.
	 *
	 * @param {*} item
	 */

	def(arrayProto, '$remove', function $remove(item) {
	  /* istanbul ignore if */
	  if (!this.length) return;
	  var index = indexOf(this, item);
	  if (index > -1) {
	    return this.splice(index, 1);
	  }
	});

	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

	/**
	 * By default, when a reactive property is set, the new value is
	 * also converted to become reactive. However in certain cases, e.g.
	 * v-for scope alias and props, we don't want to force conversion
	 * because the value may be a nested value under a frozen data structure.
	 *
	 * So whenever we want to set a reactive property without forcing
	 * conversion on the new value, we wrap that call inside this function.
	 */

	var shouldConvert = true;

	function withoutConversion(fn) {
	  shouldConvert = false;
	  fn();
	  shouldConvert = true;
	}

	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */

	function Observer(value) {
	  this.value = value;
	  this.dep = new Dep();
	  def(value, '__ob__', this);
	  if (isArray(value)) {
	    var augment = hasProto ? protoAugment : copyAugment;
	    augment(value, arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	}

	// Instance methods

	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 *
	 * @param {Object} obj
	 */

	Observer.prototype.walk = function (obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    this.convert(keys[i], obj[keys[i]]);
	  }
	};

	/**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */

	Observer.prototype.observeArray = function (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};

	/**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */

	Observer.prototype.convert = function (key, val) {
	  defineReactive(this.value, key, val);
	};

	/**
	 * Add an owner vm, so that when $set/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */

	Observer.prototype.addVm = function (vm) {
	  (this.vms || (this.vms = [])).push(vm);
	};

	/**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */

	Observer.prototype.removeVm = function (vm) {
	  this.vms.$remove(vm);
	};

	// helpers

	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} src
	 */

	function protoAugment(target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}

	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */

	function copyAugment(target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    def(target, key, src[key]);
	  }
	}

	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */

	function observe(value, vm) {
	  if (!value || typeof value !== 'object') {
	    return;
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if (shouldConvert && (isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
	    ob = new Observer(value);
	  }
	  if (ob && vm) {
	    ob.addVm(vm);
	  }
	  return ob;
	}

	/**
	 * Define a reactive property on an Object.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 */

	function defineReactive(obj, key, val) {
	  var dep = new Dep();

	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return;
	  }

	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;

	  var childOb = observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter() {
	      var value = getter ? getter.call(obj) : val;
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (isArray(value)) {
	          for (var e, i = 0, l = value.length; i < l; i++) {
	            e = value[i];
	            e && e.__ob__ && e.__ob__.dep.depend();
	          }
	        }
	      }
	      return value;
	    },
	    set: function reactiveSetter(newVal) {
	      var value = getter ? getter.call(obj) : val;
	      if (newVal === value) {
	        return;
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = observe(newVal);
	      dep.notify();
	    }
	  });
	}



	var util = Object.freeze({
		defineReactive: defineReactive,
		set: set,
		del: del,
		hasOwn: hasOwn,
		isLiteral: isLiteral,
		isReserved: isReserved,
		_toString: _toString,
		toNumber: toNumber,
		toBoolean: toBoolean,
		stripQuotes: stripQuotes,
		camelize: camelize,
		hyphenate: hyphenate,
		classify: classify,
		bind: bind,
		toArray: toArray,
		extend: extend,
		isObject: isObject,
		isPlainObject: isPlainObject,
		def: def,
		debounce: _debounce,
		indexOf: indexOf,
		cancellable: cancellable,
		looseEqual: looseEqual,
		isArray: isArray,
		hasProto: hasProto,
		inBrowser: inBrowser,
		devtools: devtools,
		isIE: isIE,
		isIE9: isIE9,
		isAndroid: isAndroid,
		isIOS: isIOS,
		get transitionProp () { return transitionProp; },
		get transitionEndEvent () { return transitionEndEvent; },
		get animationProp () { return animationProp; },
		get animationEndEvent () { return animationEndEvent; },
		nextTick: nextTick,
		get _Set () { return _Set; },
		query: query,
		inDoc: inDoc,
		getAttr: getAttr,
		getBindAttr: getBindAttr,
		hasBindAttr: hasBindAttr,
		before: before,
		after: after,
		remove: remove,
		prepend: prepend,
		replace: replace,
		on: on,
		off: off,
		setClass: setClass,
		addClass: addClass,
		removeClass: removeClass,
		extractContent: extractContent,
		trimNode: trimNode,
		isTemplate: isTemplate,
		createAnchor: createAnchor,
		findRef: findRef,
		mapNodeRange: mapNodeRange,
		removeNodeRange: removeNodeRange,
		isFragment: isFragment,
		getOuterHTML: getOuterHTML,
		mergeOptions: mergeOptions,
		resolveAsset: resolveAsset,
		checkComponentAttr: checkComponentAttr,
		commonTagRE: commonTagRE,
		reservedTagRE: reservedTagRE,
		get warn () { return warn; }
	});

	var uid = 0;

	function initMixin (Vue) {
	  /**
	   * The main init sequence. This is called for every
	   * instance, including ones that are created from extended
	   * constructors.
	   *
	   * @param {Object} options - this options object should be
	   *                           the result of merging class
	   *                           options and the options passed
	   *                           in to the constructor.
	   */

	  Vue.prototype._init = function (options) {
	    options = options || {};

	    this.$el = null;
	    this.$parent = options.parent;
	    this.$root = this.$parent ? this.$parent.$root : this;
	    this.$children = [];
	    this.$refs = {}; // child vm references
	    this.$els = {}; // element references
	    this._watchers = []; // all watchers as an array
	    this._directives = []; // all directives

	    // a uid
	    this._uid = uid++;

	    // a flag to avoid this being observed
	    this._isVue = true;

	    // events bookkeeping
	    this._events = {}; // registered callbacks
	    this._eventsCount = {}; // for $broadcast optimization

	    // fragment instance properties
	    this._isFragment = false;
	    this._fragment = // @type {DocumentFragment}
	    this._fragmentStart = // @type {Text|Comment}
	    this._fragmentEnd = null; // @type {Text|Comment}

	    // lifecycle state
	    this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = false;
	    this._unlinkFn = null;

	    // context:
	    // if this is a transcluded component, context
	    // will be the common parent vm of this instance
	    // and its host.
	    this._context = options._context || this.$parent;

	    // scope:
	    // if this is inside an inline v-for, the scope
	    // will be the intermediate scope created for this
	    // repeat fragment. this is used for linking props
	    // and container directives.
	    this._scope = options._scope;

	    // fragment:
	    // if this instance is compiled inside a Fragment, it
	    // needs to register itself as a child of that fragment
	    // for attach/detach to work properly.
	    this._frag = options._frag;
	    if (this._frag) {
	      this._frag.children.push(this);
	    }

	    // push self into parent / transclusion host
	    if (this.$parent) {
	      this.$parent.$children.push(this);
	    }

	    // merge options.
	    options = this.$options = mergeOptions(this.constructor.options, options, this);

	    // set ref
	    this._updateRef();

	    // initialize data as empty object.
	    // it will be filled up in _initData().
	    this._data = {};

	    // call init hook
	    this._callHook('init');

	    // initialize data observation and scope inheritance.
	    this._initState();

	    // setup event system and option events.
	    this._initEvents();

	    // call created hook
	    this._callHook('created');

	    // if `el` option is passed, start compilation.
	    if (options.el) {
	      this.$mount(options.el);
	    }
	  };
	}

	var pathCache = new Cache(1000);

	// actions
	var APPEND = 0;
	var PUSH = 1;
	var INC_SUB_PATH_DEPTH = 2;
	var PUSH_SUB_PATH = 3;

	// states
	var BEFORE_PATH = 0;
	var IN_PATH = 1;
	var BEFORE_IDENT = 2;
	var IN_IDENT = 3;
	var IN_SUB_PATH = 4;
	var IN_SINGLE_QUOTE = 5;
	var IN_DOUBLE_QUOTE = 6;
	var AFTER_PATH = 7;
	var ERROR = 8;

	var pathStateMachine = [];

	pathStateMachine[BEFORE_PATH] = {
	  'ws': [BEFORE_PATH],
	  'ident': [IN_IDENT, APPEND],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};

	pathStateMachine[IN_PATH] = {
	  'ws': [IN_PATH],
	  '.': [BEFORE_IDENT],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};

	pathStateMachine[BEFORE_IDENT] = {
	  'ws': [BEFORE_IDENT],
	  'ident': [IN_IDENT, APPEND]
	};

	pathStateMachine[IN_IDENT] = {
	  'ident': [IN_IDENT, APPEND],
	  '0': [IN_IDENT, APPEND],
	  'number': [IN_IDENT, APPEND],
	  'ws': [IN_PATH, PUSH],
	  '.': [BEFORE_IDENT, PUSH],
	  '[': [IN_SUB_PATH, PUSH],
	  'eof': [AFTER_PATH, PUSH]
	};

	pathStateMachine[IN_SUB_PATH] = {
	  "'": [IN_SINGLE_QUOTE, APPEND],
	  '"': [IN_DOUBLE_QUOTE, APPEND],
	  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
	  ']': [IN_PATH, PUSH_SUB_PATH],
	  'eof': ERROR,
	  'else': [IN_SUB_PATH, APPEND]
	};

	pathStateMachine[IN_SINGLE_QUOTE] = {
	  "'": [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_SINGLE_QUOTE, APPEND]
	};

	pathStateMachine[IN_DOUBLE_QUOTE] = {
	  '"': [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_DOUBLE_QUOTE, APPEND]
	};

	/**
	 * Determine the type of a character in a keypath.
	 *
	 * @param {Char} ch
	 * @return {String} type
	 */

	function getPathCharType(ch) {
	  if (ch === undefined) {
	    return 'eof';
	  }

	  var code = ch.charCodeAt(0);

	  switch (code) {
	    case 0x5B: // [
	    case 0x5D: // ]
	    case 0x2E: // .
	    case 0x22: // "
	    case 0x27: // '
	    case 0x30:
	      // 0
	      return ch;

	    case 0x5F: // _
	    case 0x24:
	      // $
	      return 'ident';

	    case 0x20: // Space
	    case 0x09: // Tab
	    case 0x0A: // Newline
	    case 0x0D: // Return
	    case 0xA0: // No-break space
	    case 0xFEFF: // Byte Order Mark
	    case 0x2028: // Line Separator
	    case 0x2029:
	      // Paragraph Separator
	      return 'ws';
	  }

	  // a-z, A-Z
	  if (code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A) {
	    return 'ident';
	  }

	  // 1-9
	  if (code >= 0x31 && code <= 0x39) {
	    return 'number';
	  }

	  return 'else';
	}

	/**
	 * Format a subPath, return its plain form if it is
	 * a literal string or number. Otherwise prepend the
	 * dynamic indicator (*).
	 *
	 * @param {String} path
	 * @return {String}
	 */

	function formatSubPath(path) {
	  var trimmed = path.trim();
	  // invalid leading 0
	  if (path.charAt(0) === '0' && isNaN(path)) {
	    return false;
	  }
	  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed;
	}

	/**
	 * Parse a string path into an array of segments
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */

	function parse(path) {
	  var keys = [];
	  var index = -1;
	  var mode = BEFORE_PATH;
	  var subPathDepth = 0;
	  var c, newChar, key, type, transition, action, typeMap;

	  var actions = [];

	  actions[PUSH] = function () {
	    if (key !== undefined) {
	      keys.push(key);
	      key = undefined;
	    }
	  };

	  actions[APPEND] = function () {
	    if (key === undefined) {
	      key = newChar;
	    } else {
	      key += newChar;
	    }
	  };

	  actions[INC_SUB_PATH_DEPTH] = function () {
	    actions[APPEND]();
	    subPathDepth++;
	  };

	  actions[PUSH_SUB_PATH] = function () {
	    if (subPathDepth > 0) {
	      subPathDepth--;
	      mode = IN_SUB_PATH;
	      actions[APPEND]();
	    } else {
	      subPathDepth = 0;
	      key = formatSubPath(key);
	      if (key === false) {
	        return false;
	      } else {
	        actions[PUSH]();
	      }
	    }
	  };

	  function maybeUnescapeQuote() {
	    var nextChar = path[index + 1];
	    if (mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
	      index++;
	      newChar = '\\' + nextChar;
	      actions[APPEND]();
	      return true;
	    }
	  }

	  while (mode != null) {
	    index++;
	    c = path[index];

	    if (c === '\\' && maybeUnescapeQuote()) {
	      continue;
	    }

	    type = getPathCharType(c);
	    typeMap = pathStateMachine[mode];
	    transition = typeMap[type] || typeMap['else'] || ERROR;

	    if (transition === ERROR) {
	      return; // parse error
	    }

	    mode = transition[0];
	    action = actions[transition[1]];
	    if (action) {
	      newChar = transition[2];
	      newChar = newChar === undefined ? c : newChar;
	      if (action() === false) {
	        return;
	      }
	    }

	    if (mode === AFTER_PATH) {
	      keys.raw = path;
	      return keys;
	    }
	  }
	}

	/**
	 * External parse that check for a cache hit first
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */

	function parsePath(path) {
	  var hit = pathCache.get(path);
	  if (!hit) {
	    hit = parse(path);
	    if (hit) {
	      pathCache.put(path, hit);
	    }
	  }
	  return hit;
	}

	/**
	 * Get from an object from a path string
	 *
	 * @param {Object} obj
	 * @param {String} path
	 */

	function getPath(obj, path) {
	  return parseExpression$1(path).get(obj);
	}

	/**
	 * Warn against setting non-existent root path on a vm.
	 */

	var warnNonExistent;
	if (process.env.NODE_ENV !== 'production') {
	  warnNonExistent = function (path, vm) {
	    warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.', vm);
	  };
	}

	/**
	 * Set on an object from a path
	 *
	 * @param {Object} obj
	 * @param {String | Array} path
	 * @param {*} val
	 */

	function setPath(obj, path, val) {
	  var original = obj;
	  if (typeof path === 'string') {
	    path = parse(path);
	  }
	  if (!path || !isObject(obj)) {
	    return false;
	  }
	  var last, key;
	  for (var i = 0, l = path.length; i < l; i++) {
	    last = obj;
	    key = path[i];
	    if (key.charAt(0) === '*') {
	      key = parseExpression$1(key.slice(1)).get.call(original, original);
	    }
	    if (i < l - 1) {
	      obj = obj[key];
	      if (!isObject(obj)) {
	        obj = {};
	        if (process.env.NODE_ENV !== 'production' && last._isVue) {
	          warnNonExistent(path, last);
	        }
	        set(last, key, obj);
	      }
	    } else {
	      if (isArray(obj)) {
	        obj.$set(key, val);
	      } else if (key in obj) {
	        obj[key] = val;
	      } else {
	        if (process.env.NODE_ENV !== 'production' && obj._isVue) {
	          warnNonExistent(path, obj);
	        }
	        set(obj, key, val);
	      }
	    }
	  }
	  return true;
	}

	var path = Object.freeze({
	  parsePath: parsePath,
	  getPath: getPath,
	  setPath: setPath
	});

	var expressionCache = new Cache(1000);

	var allowedKeywords = 'Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';
	var allowedKeywordsRE = new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)');

	// keywords that don't make sense inside expressions
	var improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'protected,static,interface,private,public';
	var improperKeywordsRE = new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)');

	var wsRE = /\s/g;
	var newlineRE = /\n/g;
	var saveRE = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\"']|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g;
	var restoreRE = /"(\d+)"/g;
	var pathTestRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
	var identRE = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g;
	var literalValueRE$1 = /^(?:true|false|null|undefined|Infinity|NaN)$/;

	function noop() {}

	/**
	 * Save / Rewrite / Restore
	 *
	 * When rewriting paths found in an expression, it is
	 * possible for the same letter sequences to be found in
	 * strings and Object literal property keys. Therefore we
	 * remove and store these parts in a temporary array, and
	 * restore them after the path rewrite.
	 */

	var saved = [];

	/**
	 * Save replacer
	 *
	 * The save regex can match two possible cases:
	 * 1. An opening object literal
	 * 2. A string
	 * If matched as a plain string, we need to escape its
	 * newlines, since the string needs to be preserved when
	 * generating the function body.
	 *
	 * @param {String} str
	 * @param {String} isString - str if matched as a string
	 * @return {String} - placeholder with index
	 */

	function save(str, isString) {
	  var i = saved.length;
	  saved[i] = isString ? str.replace(newlineRE, '\\n') : str;
	  return '"' + i + '"';
	}

	/**
	 * Path rewrite replacer
	 *
	 * @param {String} raw
	 * @return {String}
	 */

	function rewrite(raw) {
	  var c = raw.charAt(0);
	  var path = raw.slice(1);
	  if (allowedKeywordsRE.test(path)) {
	    return raw;
	  } else {
	    path = path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
	    return c + 'scope.' + path;
	  }
	}

	/**
	 * Restore replacer
	 *
	 * @param {String} str
	 * @param {String} i - matched save index
	 * @return {String}
	 */

	function restore(str, i) {
	  return saved[i];
	}

	/**
	 * Rewrite an expression, prefixing all path accessors with
	 * `scope.` and generate getter/setter functions.
	 *
	 * @param {String} exp
	 * @return {Function}
	 */

	function compileGetter(exp) {
	  if (improperKeywordsRE.test(exp)) {
	    process.env.NODE_ENV !== 'production' && warn('Avoid using reserved keywords in expression: ' + exp);
	  }
	  // reset state
	  saved.length = 0;
	  // save strings and object literal keys
	  var body = exp.replace(saveRE, save).replace(wsRE, '');
	  // rewrite all paths
	  // pad 1 space here because the regex matches 1 extra char
	  body = (' ' + body).replace(identRE, rewrite).replace(restoreRE, restore);
	  return makeGetterFn(body);
	}

	/**
	 * Build a getter function. Requires eval.
	 *
	 * We isolate the try/catch so it doesn't affect the
	 * optimization of the parse function when it is not called.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */

	function makeGetterFn(body) {
	  try {
	    /* eslint-disable no-new-func */
	    return new Function('scope', 'return ' + body + ';');
	    /* eslint-enable no-new-func */
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production') {
	      /* istanbul ignore if */
	      if (e.toString().match(/unsafe-eval|CSP/)) {
	        warn('It seems you are using the default build of Vue.js in an environment ' + 'with Content Security Policy that prohibits unsafe-eval. ' + 'Use the CSP-compliant build instead: ' + 'http://vuejs.org/guide/installation.html#CSP-compliant-build');
	      } else {
	        warn('Invalid expression. ' + 'Generated function body: ' + body);
	      }
	    }
	    return noop;
	  }
	}

	/**
	 * Compile a setter function for the expression.
	 *
	 * @param {String} exp
	 * @return {Function|undefined}
	 */

	function compileSetter(exp) {
	  var path = parsePath(exp);
	  if (path) {
	    return function (scope, val) {
	      setPath(scope, path, val);
	    };
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid setter expression: ' + exp);
	  }
	}

	/**
	 * Parse an expression into re-written getter/setters.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */

	function parseExpression$1(exp, needSet) {
	  exp = exp.trim();
	  // try cache
	  var hit = expressionCache.get(exp);
	  if (hit) {
	    if (needSet && !hit.set) {
	      hit.set = compileSetter(hit.exp);
	    }
	    return hit;
	  }
	  var res = { exp: exp };
	  res.get = isSimplePath(exp) && exp.indexOf('[') < 0
	  // optimized super simple getter
	  ? makeGetterFn('scope.' + exp)
	  // dynamic getter
	  : compileGetter(exp);
	  if (needSet) {
	    res.set = compileSetter(exp);
	  }
	  expressionCache.put(exp, res);
	  return res;
	}

	/**
	 * Check if an expression is a simple path.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */

	function isSimplePath(exp) {
	  return pathTestRE.test(exp) &&
	  // don't treat literal values as paths
	  !literalValueRE$1.test(exp) &&
	  // Math constants e.g. Math.PI, Math.E etc.
	  exp.slice(0, 5) !== 'Math.';
	}

	var expression = Object.freeze({
	  parseExpression: parseExpression$1,
	  isSimplePath: isSimplePath
	});

	// we have two separate queues: one for directive updates
	// and one for user watcher registered via $watch().
	// we want to guarantee directive updates to be called
	// before user watchers so that when user watchers are
	// triggered, the DOM would have already been in updated
	// state.

	var queue = [];
	var userQueue = [];
	var has = {};
	var circular = {};
	var waiting = false;

	/**
	 * Reset the batcher's state.
	 */

	function resetBatcherState() {
	  queue.length = 0;
	  userQueue.length = 0;
	  has = {};
	  circular = {};
	  waiting = false;
	}

	/**
	 * Flush both queues and run the watchers.
	 */

	function flushBatcherQueue() {
	  var _again = true;

	  _function: while (_again) {
	    _again = false;

	    runBatcherQueue(queue);
	    runBatcherQueue(userQueue);
	    // user watchers triggered more watchers,
	    // keep flushing until it depletes
	    if (queue.length) {
	      _again = true;
	      continue _function;
	    }
	    // dev tool hook
	    /* istanbul ignore if */
	    if (devtools && config.devtools) {
	      devtools.emit('flush');
	    }
	    resetBatcherState();
	  }
	}

	/**
	 * Run the watchers in a single queue.
	 *
	 * @param {Array} queue
	 */

	function runBatcherQueue(queue) {
	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (var i = 0; i < queue.length; i++) {
	    var watcher = queue[i];
	    var id = watcher.id;
	    has[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > config._maxUpdateCount) {
	        warn('You may have an infinite update loop for watcher ' + 'with expression "' + watcher.expression + '"', watcher.vm);
	        break;
	      }
	    }
	  }
	  queue.length = 0;
	}

	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 *
	 * @param {Watcher} watcher
	 *   properties:
	 *   - {Number} id
	 *   - {Function} run
	 */

	function pushWatcher(watcher) {
	  var id = watcher.id;
	  if (has[id] == null) {
	    // push watcher into appropriate queue
	    var q = watcher.user ? userQueue : queue;
	    has[id] = q.length;
	    q.push(watcher);
	    // queue the flush
	    if (!waiting) {
	      waiting = true;
	      nextTick(flushBatcherQueue);
	    }
	  }
	}

	var uid$2 = 0;

	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String|Function} expOrFn
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} sync
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 *                 - {Function} [postProcess]
	 * @constructor
	 */
	function Watcher(vm, expOrFn, cb, options) {
	  // mix in options
	  if (options) {
	    extend(this, options);
	  }
	  var isFn = typeof expOrFn === 'function';
	  this.vm = vm;
	  vm._watchers.push(this);
	  this.expression = expOrFn;
	  this.cb = cb;
	  this.id = ++uid$2; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = new _Set();
	  this.newDepIds = new _Set();
	  this.prevError = null; // for async error stacks
	  // parse expression for getter/setter
	  if (isFn) {
	    this.getter = expOrFn;
	    this.setter = undefined;
	  } else {
	    var res = parseExpression$1(expOrFn, this.twoWay);
	    this.getter = res.get;
	    this.setter = res.set;
	  }
	  this.value = this.lazy ? undefined : this.get();
	  // state for avoiding false triggers for deep and Array
	  // watchers during vm._digest()
	  this.queued = this.shallow = false;
	}

	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */

	Watcher.prototype.get = function () {
	  this.beforeGet();
	  var scope = this.scope || this.vm;
	  var value;
	  try {
	    value = this.getter.call(scope, scope);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating expression ' + '"' + this.expression + '": ' + e.toString(), this.vm);
	    }
	  }
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  if (this.preProcess) {
	    value = this.preProcess(value);
	  }
	  if (this.filters) {
	    value = scope._applyFilters(value, null, this.filters, false);
	  }
	  if (this.postProcess) {
	    value = this.postProcess(value);
	  }
	  this.afterGet();
	  return value;
	};

	/**
	 * Set the corresponding value with the setter.
	 *
	 * @param {*} value
	 */

	Watcher.prototype.set = function (value) {
	  var scope = this.scope || this.vm;
	  if (this.filters) {
	    value = scope._applyFilters(value, this.value, this.filters, true);
	  }
	  try {
	    this.setter.call(scope, scope, value);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating setter ' + '"' + this.expression + '": ' + e.toString(), this.vm);
	    }
	  }
	  // two-way sync for v-for alias
	  var forContext = scope.$forContext;
	  if (forContext && forContext.alias === this.expression) {
	    if (forContext.filters) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using two-way binding on ' + 'a v-for alias (' + this.expression + '), and the ' + 'v-for has filters. This will not work properly. ' + 'Either remove the filters or use an array of ' + 'objects and bind to object properties instead.', this.vm);
	      return;
	    }
	    forContext._withLock(function () {
	      if (scope.$key) {
	        // original is an object
	        forContext.rawValue[scope.$key] = value;
	      } else {
	        forContext.rawValue.$set(scope.$index, value);
	      }
	    });
	  }
	};

	/**
	 * Prepare for dependency collection.
	 */

	Watcher.prototype.beforeGet = function () {
	  Dep.target = this;
	};

	/**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */

	Watcher.prototype.addDep = function (dep) {
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

	Watcher.prototype.afterGet = function () {
	  Dep.target = null;
	  var i = this.deps.length;
	  while (i--) {
	    var dep = this.deps[i];
	    if (!this.newDepIds.has(dep.id)) {
	      dep.removeSub(this);
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
	 *
	 * @param {Boolean} shallow
	 */

	Watcher.prototype.update = function (shallow) {
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync || !config.async) {
	    this.run();
	  } else {
	    // if queued, only overwrite shallow with non-shallow,
	    // but not the other way around.
	    this.shallow = this.queued ? shallow ? this.shallow : false : !!shallow;
	    this.queued = true;
	    // record before-push error stack in debug mode
	    /* istanbul ignore if */
	    if (process.env.NODE_ENV !== 'production' && config.debug) {
	      this.prevError = new Error('[vue] async stack trace');
	    }
	    pushWatcher(this);
	  }
	};

	/**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */

	Watcher.prototype.run = function () {
	  if (this.active) {
	    var value = this.get();
	    if (value !== this.value ||
	    // Deep watchers and watchers on Object/Arrays should fire even
	    // when the value is the same, because the value may
	    // have mutated; but only do so if this is a
	    // non-shallow update (caused by a vm digest).
	    (isObject(value) || this.deep) && !this.shallow) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      // in debug + async mode, when a watcher callbacks
	      // throws, we also throw the saved before-push error
	      // so the full cross-tick stack trace is available.
	      var prevError = this.prevError;
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && config.debug && prevError) {
	        this.prevError = null;
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          nextTick(function () {
	            throw prevError;
	          }, 0);
	          throw e;
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	    this.queued = this.shallow = false;
	  }
	};

	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */

	Watcher.prototype.evaluate = function () {
	  // avoid overwriting another watcher that is being
	  // collected.
	  var current = Dep.target;
	  this.value = this.get();
	  this.dirty = false;
	  Dep.target = current;
	};

	/**
	 * Depend on all deps collected by this watcher.
	 */

	Watcher.prototype.depend = function () {
	  var i = this.deps.length;
	  while (i--) {
	    this.deps[i].depend();
	  }
	};

	/**
	 * Remove self from all dependencies' subcriber list.
	 */

	Watcher.prototype.teardown = function () {
	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed or is performing a v-for
	    // re-render (the watcher list is then filtered by v-for).
	    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
	      this.vm._watchers.$remove(this);
	    }
	    var i = this.deps.length;
	    while (i--) {
	      this.deps[i].removeSub(this);
	    }
	    this.active = false;
	    this.vm = this.cb = this.value = null;
	  }
	};

	/**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {*} val
	 */

	var seenObjects = new _Set();
	function traverse(val, seen) {
	  var i = undefined,
	      keys = undefined;
	  if (!seen) {
	    seen = seenObjects;
	    seen.clear();
	  }
	  var isA = isArray(val);
	  var isO = isObject(val);
	  if ((isA || isO) && Object.isExtensible(val)) {
	    if (val.__ob__) {
	      var depId = val.__ob__.dep.id;
	      if (seen.has(depId)) {
	        return;
	      } else {
	        seen.add(depId);
	      }
	    }
	    if (isA) {
	      i = val.length;
	      while (i--) traverse(val[i], seen);
	    } else if (isO) {
	      keys = Object.keys(val);
	      i = keys.length;
	      while (i--) traverse(val[keys[i]], seen);
	    }
	  }
	}

	var text$1 = {

	  bind: function bind() {
	    this.attr = this.el.nodeType === 3 ? 'data' : 'textContent';
	  },

	  update: function update(value) {
	    this.el[this.attr] = _toString(value);
	  }
	};

	var templateCache = new Cache(1000);
	var idSelectorCache = new Cache(1000);

	var map = {
	  efault: [0, '', ''],
	  legend: [1, '<fieldset>', '</fieldset>'],
	  tr: [2, '<table><tbody>', '</tbody></table>'],
	  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>']
	};

	map.td = map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

	map.option = map.optgroup = [1, '<select multiple="multiple">', '</select>'];

	map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, '<table>', '</table>'];

	map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1, '<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">', '</svg>'];

	/**
	 * Check if a node is a supported template node with a
	 * DocumentFragment content.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function isRealTemplate(node) {
	  return isTemplate(node) && isFragment(node.content);
	}

	var tagRE$1 = /<([\w:-]+)/;
	var entityRE = /&#?\w+?;/;
	var commentRE = /<!--/;

	/**
	 * Convert a string template to a DocumentFragment.
	 * Determines correct wrapping by tag types. Wrapping
	 * strategy found in jQuery & component/domify.
	 *
	 * @param {String} templateString
	 * @param {Boolean} raw
	 * @return {DocumentFragment}
	 */

	function stringToFragment(templateString, raw) {
	  // try a cache hit first
	  var cacheKey = raw ? templateString : templateString.trim();
	  var hit = templateCache.get(cacheKey);
	  if (hit) {
	    return hit;
	  }

	  var frag = document.createDocumentFragment();
	  var tagMatch = templateString.match(tagRE$1);
	  var entityMatch = entityRE.test(templateString);
	  var commentMatch = commentRE.test(templateString);

	  if (!tagMatch && !entityMatch && !commentMatch) {
	    // text only, return a single text node.
	    frag.appendChild(document.createTextNode(templateString));
	  } else {
	    var tag = tagMatch && tagMatch[1];
	    var wrap = map[tag] || map.efault;
	    var depth = wrap[0];
	    var prefix = wrap[1];
	    var suffix = wrap[2];
	    var node = document.createElement('div');

	    node.innerHTML = prefix + templateString + suffix;
	    while (depth--) {
	      node = node.lastChild;
	    }

	    var child;
	    /* eslint-disable no-cond-assign */
	    while (child = node.firstChild) {
	      /* eslint-enable no-cond-assign */
	      frag.appendChild(child);
	    }
	  }
	  if (!raw) {
	    trimNode(frag);
	  }
	  templateCache.put(cacheKey, frag);
	  return frag;
	}

	/**
	 * Convert a template node to a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {DocumentFragment}
	 */

	function nodeToFragment(node) {
	  // if its a template tag and the browser supports it,
	  // its content is already a document fragment. However, iOS Safari has
	  // bug when using directly cloned template content with touch
	  // events and can cause crashes when the nodes are removed from DOM, so we
	  // have to treat template elements as string templates. (#2805)
	  /* istanbul ignore if */
	  if (isRealTemplate(node)) {
	    return stringToFragment(node.innerHTML);
	  }
	  // script template
	  if (node.tagName === 'SCRIPT') {
	    return stringToFragment(node.textContent);
	  }
	  // normal node, clone it to avoid mutating the original
	  var clonedNode = cloneNode(node);
	  var frag = document.createDocumentFragment();
	  var child;
	  /* eslint-disable no-cond-assign */
	  while (child = clonedNode.firstChild) {
	    /* eslint-enable no-cond-assign */
	    frag.appendChild(child);
	  }
	  trimNode(frag);
	  return frag;
	}

	// Test for the presence of the Safari template cloning bug
	// https://bugs.webkit.org/showug.cgi?id=137755
	var hasBrokenTemplate = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var a = document.createElement('div');
	    a.innerHTML = '<template>1</template>';
	    return !a.cloneNode(true).firstChild.innerHTML;
	  } else {
	    return false;
	  }
	})();

	// Test for IE10/11 textarea placeholder clone bug
	var hasTextareaCloneBug = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var t = document.createElement('textarea');
	    t.placeholder = 't';
	    return t.cloneNode(true).value === 't';
	  } else {
	    return false;
	  }
	})();

	/**
	 * 1. Deal with Safari cloning nested <template> bug by
	 *    manually cloning all template instances.
	 * 2. Deal with IE10/11 textarea placeholder bug by setting
	 *    the correct value after cloning.
	 *
	 * @param {Element|DocumentFragment} node
	 * @return {Element|DocumentFragment}
	 */

	function cloneNode(node) {
	  /* istanbul ignore if */
	  if (!node.querySelectorAll) {
	    return node.cloneNode();
	  }
	  var res = node.cloneNode(true);
	  var i, original, cloned;
	  /* istanbul ignore if */
	  if (hasBrokenTemplate) {
	    var tempClone = res;
	    if (isRealTemplate(node)) {
	      node = node.content;
	      tempClone = res.content;
	    }
	    original = node.querySelectorAll('template');
	    if (original.length) {
	      cloned = tempClone.querySelectorAll('template');
	      i = cloned.length;
	      while (i--) {
	        cloned[i].parentNode.replaceChild(cloneNode(original[i]), cloned[i]);
	      }
	    }
	  }
	  /* istanbul ignore if */
	  if (hasTextareaCloneBug) {
	    if (node.tagName === 'TEXTAREA') {
	      res.value = node.value;
	    } else {
	      original = node.querySelectorAll('textarea');
	      if (original.length) {
	        cloned = res.querySelectorAll('textarea');
	        i = cloned.length;
	        while (i--) {
	          cloned[i].value = original[i].value;
	        }
	      }
	    }
	  }
	  return res;
	}

	/**
	 * Process the template option and normalizes it into a
	 * a DocumentFragment that can be used as a partial or a
	 * instance template.
	 *
	 * @param {*} template
	 *        Possible values include:
	 *        - DocumentFragment object
	 *        - Node object of type Template
	 *        - id selector: '#some-template-id'
	 *        - template string: '<div><span>{{msg}}</span></div>'
	 * @param {Boolean} shouldClone
	 * @param {Boolean} raw
	 *        inline HTML interpolation. Do not check for id
	 *        selector and keep whitespace in the string.
	 * @return {DocumentFragment|undefined}
	 */

	function parseTemplate(template, shouldClone, raw) {
	  var node, frag;

	  // if the template is already a document fragment,
	  // do nothing
	  if (isFragment(template)) {
	    trimNode(template);
	    return shouldClone ? cloneNode(template) : template;
	  }

	  if (typeof template === 'string') {
	    // id selector
	    if (!raw && template.charAt(0) === '#') {
	      // id selector can be cached too
	      frag = idSelectorCache.get(template);
	      if (!frag) {
	        node = document.getElementById(template.slice(1));
	        if (node) {
	          frag = nodeToFragment(node);
	          // save selector to cache
	          idSelectorCache.put(template, frag);
	        }
	      }
	    } else {
	      // normal string template
	      frag = stringToFragment(template, raw);
	    }
	  } else if (template.nodeType) {
	    // a direct node
	    frag = nodeToFragment(template);
	  }

	  return frag && shouldClone ? cloneNode(frag) : frag;
	}

	var template = Object.freeze({
	  cloneNode: cloneNode,
	  parseTemplate: parseTemplate
	});

	var html = {

	  bind: function bind() {
	    // a comment node means this is a binding for
	    // {{{ inline unescaped html }}}
	    if (this.el.nodeType === 8) {
	      // hold nodes
	      this.nodes = [];
	      // replace the placeholder with proper anchor
	      this.anchor = createAnchor('v-html');
	      replace(this.el, this.anchor);
	    }
	  },

	  update: function update(value) {
	    value = _toString(value);
	    if (this.nodes) {
	      this.swap(value);
	    } else {
	      this.el.innerHTML = value;
	    }
	  },

	  swap: function swap(value) {
	    // remove old nodes
	    var i = this.nodes.length;
	    while (i--) {
	      remove(this.nodes[i]);
	    }
	    // convert new value to a fragment
	    // do not attempt to retrieve from id selector
	    var frag = parseTemplate(value, true, true);
	    // save a reference to these nodes so we can remove later
	    this.nodes = toArray(frag.childNodes);
	    before(frag, this.anchor);
	  }
	};

	/**
	 * Abstraction for a partially-compiled fragment.
	 * Can optionally compile content with a child scope.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Vue} [host]
	 * @param {Object} [scope]
	 * @param {Fragment} [parentFrag]
	 */
	function Fragment(linker, vm, frag, host, scope, parentFrag) {
	  this.children = [];
	  this.childFrags = [];
	  this.vm = vm;
	  this.scope = scope;
	  this.inserted = false;
	  this.parentFrag = parentFrag;
	  if (parentFrag) {
	    parentFrag.childFrags.push(this);
	  }
	  this.unlink = linker(vm, frag, host, scope, this);
	  var single = this.single = frag.childNodes.length === 1 &&
	  // do not go single mode if the only node is an anchor
	  !frag.childNodes[0].__v_anchor;
	  if (single) {
	    this.node = frag.childNodes[0];
	    this.before = singleBefore;
	    this.remove = singleRemove;
	  } else {
	    this.node = createAnchor('fragment-start');
	    this.end = createAnchor('fragment-end');
	    this.frag = frag;
	    prepend(this.node, frag);
	    frag.appendChild(this.end);
	    this.before = multiBefore;
	    this.remove = multiRemove;
	  }
	  this.node.__v_frag = this;
	}

	/**
	 * Call attach/detach for all components contained within
	 * this fragment. Also do so recursively for all child
	 * fragments.
	 *
	 * @param {Function} hook
	 */

	Fragment.prototype.callHook = function (hook) {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    this.childFrags[i].callHook(hook);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    hook(this.children[i]);
	  }
	};

	/**
	 * Insert fragment before target, single node version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */

	function singleBefore(target, withTransition) {
	  this.inserted = true;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  method(this.node, target, this.vm);
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}

	/**
	 * Remove fragment, single node version
	 */

	function singleRemove() {
	  this.inserted = false;
	  var shouldCallRemove = inDoc(this.node);
	  var self = this;
	  this.beforeRemove();
	  removeWithTransition(this.node, this.vm, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}

	/**
	 * Insert fragment before target, multi-nodes version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */

	function multiBefore(target, withTransition) {
	  this.inserted = true;
	  var vm = this.vm;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  mapNodeRange(this.node, this.end, function (node) {
	    method(node, target, vm);
	  });
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}

	/**
	 * Remove fragment, multi-nodes version
	 */

	function multiRemove() {
	  this.inserted = false;
	  var self = this;
	  var shouldCallRemove = inDoc(this.node);
	  this.beforeRemove();
	  removeNodeRange(this.node, this.end, this.vm, this.frag, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}

	/**
	 * Prepare the fragment for removal.
	 */

	Fragment.prototype.beforeRemove = function () {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    // call the same method recursively on child
	    // fragments, depth-first
	    this.childFrags[i].beforeRemove(false);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    // Call destroy for all contained instances,
	    // with remove:false and defer:true.
	    // Defer is necessary because we need to
	    // keep the children to call detach hooks
	    // on them.
	    this.children[i].$destroy(false, true);
	  }
	  var dirs = this.unlink.dirs;
	  for (i = 0, l = dirs.length; i < l; i++) {
	    // disable the watchers on all the directives
	    // so that the rendered content stays the same
	    // during removal.
	    dirs[i]._watcher && dirs[i]._watcher.teardown();
	  }
	};

	/**
	 * Destroy the fragment.
	 */

	Fragment.prototype.destroy = function () {
	  if (this.parentFrag) {
	    this.parentFrag.childFrags.$remove(this);
	  }
	  this.node.__v_frag = null;
	  this.unlink();
	};

	/**
	 * Call attach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */

	function attach(child) {
	  if (!child._isAttached && inDoc(child.$el)) {
	    child._callHook('attached');
	  }
	}

	/**
	 * Call detach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */

	function detach(child) {
	  if (child._isAttached && !inDoc(child.$el)) {
	    child._callHook('detached');
	  }
	}

	var linkerCache = new Cache(5000);

	/**
	 * A factory that can be used to create instances of a
	 * fragment. Caches the compiled linker if possible.
	 *
	 * @param {Vue} vm
	 * @param {Element|String} el
	 */
	function FragmentFactory(vm, el) {
	  this.vm = vm;
	  var template;
	  var isString = typeof el === 'string';
	  if (isString || isTemplate(el) && !el.hasAttribute('v-if')) {
	    template = parseTemplate(el, true);
	  } else {
	    template = document.createDocumentFragment();
	    template.appendChild(el);
	  }
	  this.template = template;
	  // linker can be cached, but only for components
	  var linker;
	  var cid = vm.constructor.cid;
	  if (cid > 0) {
	    var cacheId = cid + (isString ? el : getOuterHTML(el));
	    linker = linkerCache.get(cacheId);
	    if (!linker) {
	      linker = compile(template, vm.$options, true);
	      linkerCache.put(cacheId, linker);
	    }
	  } else {
	    linker = compile(template, vm.$options, true);
	  }
	  this.linker = linker;
	}

	/**
	 * Create a fragment instance with given host and scope.
	 *
	 * @param {Vue} host
	 * @param {Object} scope
	 * @param {Fragment} parentFrag
	 */

	FragmentFactory.prototype.create = function (host, scope, parentFrag) {
	  var frag = cloneNode(this.template);
	  return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag);
	};

	var ON = 700;
	var MODEL = 800;
	var BIND = 850;
	var TRANSITION = 1100;
	var EL = 1500;
	var COMPONENT = 1500;
	var PARTIAL = 1750;
	var IF = 2100;
	var FOR = 2200;
	var SLOT = 2300;

	var uid$3 = 0;

	var vFor = {

	  priority: FOR,
	  terminal: true,

	  params: ['track-by', 'stagger', 'enter-stagger', 'leave-stagger'],

	  bind: function bind() {
	    if (process.env.NODE_ENV !== 'production' && this.el.hasAttribute('v-if')) {
	      warn('<' + this.el.tagName.toLowerCase() + ' v-for="' + this.expression + '" v-if="' + this.el.getAttribute('v-if') + '">: ' + 'Using v-if and v-for on the same element is not recommended - ' + 'consider filtering the source Array instead.', this.vm);
	    }

	    // support "item in/of items" syntax
	    var inMatch = this.expression.match(/(.*) (?:in|of) (.*)/);
	    if (inMatch) {
	      var itMatch = inMatch[1].match(/\((.*),(.*)\)/);
	      if (itMatch) {
	        this.iterator = itMatch[1].trim();
	        this.alias = itMatch[2].trim();
	      } else {
	        this.alias = inMatch[1].trim();
	      }
	      this.expression = inMatch[2];
	    }

	    if (!this.alias) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid v-for expression "' + this.descriptor.raw + '": ' + 'alias is required.', this.vm);
	      return;
	    }

	    // uid as a cache identifier
	    this.id = '__v-for__' + ++uid$3;

	    // check if this is an option list,
	    // so that we know if we need to update the <select>'s
	    // v-model when the option list has changed.
	    // because v-model has a lower priority than v-for,
	    // the v-model is not bound here yet, so we have to
	    // retrive it in the actual updateModel() function.
	    var tag = this.el.tagName;
	    this.isOption = (tag === 'OPTION' || tag === 'OPTGROUP') && this.el.parentNode.tagName === 'SELECT';

	    // setup anchor nodes
	    this.start = createAnchor('v-for-start');
	    this.end = createAnchor('v-for-end');
	    replace(this.el, this.end);
	    before(this.start, this.end);

	    // cache
	    this.cache = Object.create(null);

	    // fragment factory
	    this.factory = new FragmentFactory(this.vm, this.el);
	  },

	  update: function update(data) {
	    this.diff(data);
	    this.updateRef();
	    this.updateModel();
	  },

	  /**
	   * Diff, based on new data and old data, determine the
	   * minimum amount of DOM manipulations needed to make the
	   * DOM reflect the new data Array.
	   *
	   * The algorithm diffs the new data Array by storing a
	   * hidden reference to an owner vm instance on previously
	   * seen data. This allows us to achieve O(n) which is
	   * better than a levenshtein distance based algorithm,
	   * which is O(m * n).
	   *
	   * @param {Array} data
	   */

	  diff: function diff(data) {
	    // check if the Array was converted from an Object
	    var item = data[0];
	    var convertedFromObject = this.fromObject = isObject(item) && hasOwn(item, '$key') && hasOwn(item, '$value');

	    var trackByKey = this.params.trackBy;
	    var oldFrags = this.frags;
	    var frags = this.frags = new Array(data.length);
	    var alias = this.alias;
	    var iterator = this.iterator;
	    var start = this.start;
	    var end = this.end;
	    var inDocument = inDoc(start);
	    var init = !oldFrags;
	    var i, l, frag, key, value, primitive;

	    // First pass, go through the new Array and fill up
	    // the new frags array. If a piece of data has a cached
	    // instance for it, we reuse it. Otherwise build a new
	    // instance.
	    for (i = 0, l = data.length; i < l; i++) {
	      item = data[i];
	      key = convertedFromObject ? item.$key : null;
	      value = convertedFromObject ? item.$value : item;
	      primitive = !isObject(value);
	      frag = !init && this.getCachedFrag(value, i, key);
	      if (frag) {
	        // reusable fragment
	        frag.reused = true;
	        // update $index
	        frag.scope.$index = i;
	        // update $key
	        if (key) {
	          frag.scope.$key = key;
	        }
	        // update iterator
	        if (iterator) {
	          frag.scope[iterator] = key !== null ? key : i;
	        }
	        // update data for track-by, object repeat &
	        // primitive values.
	        if (trackByKey || convertedFromObject || primitive) {
	          withoutConversion(function () {
	            frag.scope[alias] = value;
	          });
	        }
	      } else {
	        // new instance
	        frag = this.create(value, alias, i, key);
	        frag.fresh = !init;
	      }
	      frags[i] = frag;
	      if (init) {
	        frag.before(end);
	      }
	    }

	    // we're done for the initial render.
	    if (init) {
	      return;
	    }

	    // Second pass, go through the old fragments and
	    // destroy those who are not reused (and remove them
	    // from cache)
	    var removalIndex = 0;
	    var totalRemoved = oldFrags.length - frags.length;
	    // when removing a large number of fragments, watcher removal
	    // turns out to be a perf bottleneck, so we batch the watcher
	    // removals into a single filter call!
	    this.vm._vForRemoving = true;
	    for (i = 0, l = oldFrags.length; i < l; i++) {
	      frag = oldFrags[i];
	      if (!frag.reused) {
	        this.deleteCachedFrag(frag);
	        this.remove(frag, removalIndex++, totalRemoved, inDocument);
	      }
	    }
	    this.vm._vForRemoving = false;
	    if (removalIndex) {
	      this.vm._watchers = this.vm._watchers.filter(function (w) {
	        return w.active;
	      });
	    }

	    // Final pass, move/insert new fragments into the
	    // right place.
	    var targetPrev, prevEl, currentPrev;
	    var insertionIndex = 0;
	    for (i = 0, l = frags.length; i < l; i++) {
	      frag = frags[i];
	      // this is the frag that we should be after
	      targetPrev = frags[i - 1];
	      prevEl = targetPrev ? targetPrev.staggerCb ? targetPrev.staggerAnchor : targetPrev.end || targetPrev.node : start;
	      if (frag.reused && !frag.staggerCb) {
	        currentPrev = findPrevFrag(frag, start, this.id);
	        if (currentPrev !== targetPrev && (!currentPrev ||
	        // optimization for moving a single item.
	        // thanks to suggestions by @livoras in #1807
	        findPrevFrag(currentPrev, start, this.id) !== targetPrev)) {
	          this.move(frag, prevEl);
	        }
	      } else {
	        // new instance, or still in stagger.
	        // insert with updated stagger index.
	        this.insert(frag, insertionIndex++, prevEl, inDocument);
	      }
	      frag.reused = frag.fresh = false;
	    }
	  },

	  /**
	   * Create a new fragment instance.
	   *
	   * @param {*} value
	   * @param {String} alias
	   * @param {Number} index
	   * @param {String} [key]
	   * @return {Fragment}
	   */

	  create: function create(value, alias, index, key) {
	    var host = this._host;
	    // create iteration scope
	    var parentScope = this._scope || this.vm;
	    var scope = Object.create(parentScope);
	    // ref holder for the scope
	    scope.$refs = Object.create(parentScope.$refs);
	    scope.$els = Object.create(parentScope.$els);
	    // make sure point $parent to parent scope
	    scope.$parent = parentScope;
	    // for two-way binding on alias
	    scope.$forContext = this;
	    // define scope properties
	    // important: define the scope alias without forced conversion
	    // so that frozen data structures remain non-reactive.
	    withoutConversion(function () {
	      defineReactive(scope, alias, value);
	    });
	    defineReactive(scope, '$index', index);
	    if (key) {
	      defineReactive(scope, '$key', key);
	    } else if (scope.$key) {
	      // avoid accidental fallback
	      def(scope, '$key', null);
	    }
	    if (this.iterator) {
	      defineReactive(scope, this.iterator, key !== null ? key : index);
	    }
	    var frag = this.factory.create(host, scope, this._frag);
	    frag.forId = this.id;
	    this.cacheFrag(value, frag, index, key);
	    return frag;
	  },

	  /**
	   * Update the v-ref on owner vm.
	   */

	  updateRef: function updateRef() {
	    var ref = this.descriptor.ref;
	    if (!ref) return;
	    var hash = (this._scope || this.vm).$refs;
	    var refs;
	    if (!this.fromObject) {
	      refs = this.frags.map(findVmFromFrag);
	    } else {
	      refs = {};
	      this.frags.forEach(function (frag) {
	        refs[frag.scope.$key] = findVmFromFrag(frag);
	      });
	    }
	    hash[ref] = refs;
	  },

	  /**
	   * For option lists, update the containing v-model on
	   * parent <select>.
	   */

	  updateModel: function updateModel() {
	    if (this.isOption) {
	      var parent = this.start.parentNode;
	      var model = parent && parent.__v_model;
	      if (model) {
	        model.forceUpdate();
	      }
	    }
	  },

	  /**
	   * Insert a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Node} prevEl
	   * @param {Boolean} inDocument
	   */

	  insert: function insert(frag, index, prevEl, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	    }
	    var staggerAmount = this.getStagger(frag, index, null, 'enter');
	    if (inDocument && staggerAmount) {
	      // create an anchor and insert it synchronously,
	      // so that we can resolve the correct order without
	      // worrying about some elements not inserted yet
	      var anchor = frag.staggerAnchor;
	      if (!anchor) {
	        anchor = frag.staggerAnchor = createAnchor('stagger-anchor');
	        anchor.__v_frag = frag;
	      }
	      after(anchor, prevEl);
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.before(anchor);
	        remove(anchor);
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      var target = prevEl.nextSibling;
	      /* istanbul ignore if */
	      if (!target) {
	        // reset end anchor position in case the position was messed up
	        // by an external drag-n-drop library.
	        after(this.end, prevEl);
	        target = this.end;
	      }
	      frag.before(target);
	    }
	  },

	  /**
	   * Remove a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {Boolean} inDocument
	   */

	  remove: function remove(frag, index, total, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	      // it's not possible for the same frag to be removed
	      // twice, so if we have a pending stagger callback,
	      // it means this frag is queued for enter but removed
	      // before its transition started. Since it is already
	      // destroyed, we can just leave it in detached state.
	      return;
	    }
	    var staggerAmount = this.getStagger(frag, index, total, 'leave');
	    if (inDocument && staggerAmount) {
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.remove();
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      frag.remove();
	    }
	  },

	  /**
	   * Move a fragment to a new position.
	   * Force no transition.
	   *
	   * @param {Fragment} frag
	   * @param {Node} prevEl
	   */

	  move: function move(frag, prevEl) {
	    // fix a common issue with Sortable:
	    // if prevEl doesn't have nextSibling, this means it's
	    // been dragged after the end anchor. Just re-position
	    // the end anchor to the end of the container.
	    /* istanbul ignore if */
	    if (!prevEl.nextSibling) {
	      this.end.parentNode.appendChild(this.end);
	    }
	    frag.before(prevEl.nextSibling, false);
	  },

	  /**
	   * Cache a fragment using track-by or the object key.
	   *
	   * @param {*} value
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {String} [key]
	   */

	  cacheFrag: function cacheFrag(value, frag, index, key) {
	    var trackByKey = this.params.trackBy;
	    var cache = this.cache;
	    var primitive = !isObject(value);
	    var id;
	    if (key || trackByKey || primitive) {
	      id = getTrackByKey(index, key, value, trackByKey);
	      if (!cache[id]) {
	        cache[id] = frag;
	      } else if (trackByKey !== '$index') {
	        process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	      }
	    } else {
	      id = this.id;
	      if (hasOwn(value, id)) {
	        if (value[id] === null) {
	          value[id] = frag;
	        } else {
	          process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	        }
	      } else if (Object.isExtensible(value)) {
	        def(value, id, frag);
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('Frozen v-for objects cannot be automatically tracked, make sure to ' + 'provide a track-by key.');
	      }
	    }
	    frag.raw = value;
	  },

	  /**
	   * Get a cached fragment from the value/index/key
	   *
	   * @param {*} value
	   * @param {Number} index
	   * @param {String} key
	   * @return {Fragment}
	   */

	  getCachedFrag: function getCachedFrag(value, index, key) {
	    var trackByKey = this.params.trackBy;
	    var primitive = !isObject(value);
	    var frag;
	    if (key || trackByKey || primitive) {
	      var id = getTrackByKey(index, key, value, trackByKey);
	      frag = this.cache[id];
	    } else {
	      frag = value[this.id];
	    }
	    if (frag && (frag.reused || frag.fresh)) {
	      process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	    }
	    return frag;
	  },

	  /**
	   * Delete a fragment from cache.
	   *
	   * @param {Fragment} frag
	   */

	  deleteCachedFrag: function deleteCachedFrag(frag) {
	    var value = frag.raw;
	    var trackByKey = this.params.trackBy;
	    var scope = frag.scope;
	    var index = scope.$index;
	    // fix #948: avoid accidentally fall through to
	    // a parent repeater which happens to have $key.
	    var key = hasOwn(scope, '$key') && scope.$key;
	    var primitive = !isObject(value);
	    if (trackByKey || key || primitive) {
	      var id = getTrackByKey(index, key, value, trackByKey);
	      this.cache[id] = null;
	    } else {
	      value[this.id] = null;
	      frag.raw = null;
	    }
	  },

	  /**
	   * Get the stagger amount for an insertion/removal.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {String} type
	   */

	  getStagger: function getStagger(frag, index, total, type) {
	    type = type + 'Stagger';
	    var trans = frag.node.__v_trans;
	    var hooks = trans && trans.hooks;
	    var hook = hooks && (hooks[type] || hooks.stagger);
	    return hook ? hook.call(frag, index, total) : index * parseInt(this.params[type] || this.params.stagger, 10);
	  },

	  /**
	   * Pre-process the value before piping it through the
	   * filters. This is passed to and called by the watcher.
	   */

	  _preProcess: function _preProcess(value) {
	    // regardless of type, store the un-filtered raw value.
	    this.rawValue = value;
	    return value;
	  },

	  /**
	   * Post-process the value after it has been piped through
	   * the filters. This is passed to and called by the watcher.
	   *
	   * It is necessary for this to be called during the
	   * watcher's dependency collection phase because we want
	   * the v-for to update when the source Object is mutated.
	   */

	  _postProcess: function _postProcess(value) {
	    if (isArray(value)) {
	      return value;
	    } else if (isPlainObject(value)) {
	      // convert plain object to array.
	      var keys = Object.keys(value);
	      var i = keys.length;
	      var res = new Array(i);
	      var key;
	      while (i--) {
	        key = keys[i];
	        res[i] = {
	          $key: key,
	          $value: value[key]
	        };
	      }
	      return res;
	    } else {
	      if (typeof value === 'number' && !isNaN(value)) {
	        value = range(value);
	      }
	      return value || [];
	    }
	  },

	  unbind: function unbind() {
	    if (this.descriptor.ref) {
	      (this._scope || this.vm).$refs[this.descriptor.ref] = null;
	    }
	    if (this.frags) {
	      var i = this.frags.length;
	      var frag;
	      while (i--) {
	        frag = this.frags[i];
	        this.deleteCachedFrag(frag);
	        frag.destroy();
	      }
	    }
	  }
	};

	/**
	 * Helper to find the previous element that is a fragment
	 * anchor. This is necessary because a destroyed frag's
	 * element could still be lingering in the DOM before its
	 * leaving transition finishes, but its inserted flag
	 * should have been set to false so we can skip them.
	 *
	 * If this is a block repeat, we want to make sure we only
	 * return frag that is bound to this v-for. (see #929)
	 *
	 * @param {Fragment} frag
	 * @param {Comment|Text} anchor
	 * @param {String} id
	 * @return {Fragment}
	 */

	function findPrevFrag(frag, anchor, id) {
	  var el = frag.node.previousSibling;
	  /* istanbul ignore if */
	  if (!el) return;
	  frag = el.__v_frag;
	  while ((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {
	    el = el.previousSibling;
	    /* istanbul ignore if */
	    if (!el) return;
	    frag = el.__v_frag;
	  }
	  return frag;
	}

	/**
	 * Create a range array from given number.
	 *
	 * @param {Number} n
	 * @return {Array}
	 */

	function range(n) {
	  var i = -1;
	  var ret = new Array(Math.floor(n));
	  while (++i < n) {
	    ret[i] = i;
	  }
	  return ret;
	}

	/**
	 * Get the track by key for an item.
	 *
	 * @param {Number} index
	 * @param {String} key
	 * @param {*} value
	 * @param {String} [trackByKey]
	 */

	function getTrackByKey(index, key, value, trackByKey) {
	  return trackByKey ? trackByKey === '$index' ? index : trackByKey.charAt(0).match(/\w/) ? getPath(value, trackByKey) : value[trackByKey] : key || value;
	}

	if (process.env.NODE_ENV !== 'production') {
	  vFor.warnDuplicate = function (value) {
	    warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + 'you are expecting duplicate values.', this.vm);
	  };
	}

	/**
	 * Find a vm from a fragment.
	 *
	 * @param {Fragment} frag
	 * @return {Vue|undefined}
	 */

	function findVmFromFrag(frag) {
	  var node = frag.node;
	  // handle multi-node frag
	  if (frag.end) {
	    while (!node.__vue__ && node !== frag.end && node.nextSibling) {
	      node = node.nextSibling;
	    }
	  }
	  return node.__vue__;
	}

	var vIf = {

	  priority: IF,
	  terminal: true,

	  bind: function bind() {
	    var el = this.el;
	    if (!el.__vue__) {
	      // check else block
	      var next = el.nextElementSibling;
	      if (next && getAttr(next, 'v-else') !== null) {
	        remove(next);
	        this.elseEl = next;
	      }
	      // check main block
	      this.anchor = createAnchor('v-if');
	      replace(el, this.anchor);
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.', this.vm);
	      this.invalid = true;
	    }
	  },

	  update: function update(value) {
	    if (this.invalid) return;
	    if (value) {
	      if (!this.frag) {
	        this.insert();
	      }
	    } else {
	      this.remove();
	    }
	  },

	  insert: function insert() {
	    if (this.elseFrag) {
	      this.elseFrag.remove();
	      this.elseFrag = null;
	    }
	    // lazy init factory
	    if (!this.factory) {
	      this.factory = new FragmentFactory(this.vm, this.el);
	    }
	    this.frag = this.factory.create(this._host, this._scope, this._frag);
	    this.frag.before(this.anchor);
	  },

	  remove: function remove() {
	    if (this.frag) {
	      this.frag.remove();
	      this.frag = null;
	    }
	    if (this.elseEl && !this.elseFrag) {
	      if (!this.elseFactory) {
	        this.elseFactory = new FragmentFactory(this.elseEl._context || this.vm, this.elseEl);
	      }
	      this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag);
	      this.elseFrag.before(this.anchor);
	    }
	  },

	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	    if (this.elseFrag) {
	      this.elseFrag.destroy();
	    }
	  }
	};

	var show = {

	  bind: function bind() {
	    // check else block
	    var next = this.el.nextElementSibling;
	    if (next && getAttr(next, 'v-else') !== null) {
	      this.elseEl = next;
	    }
	  },

	  update: function update(value) {
	    this.apply(this.el, value);
	    if (this.elseEl) {
	      this.apply(this.elseEl, !value);
	    }
	  },

	  apply: function apply(el, value) {
	    if (inDoc(el)) {
	      applyTransition(el, value ? 1 : -1, toggle, this.vm);
	    } else {
	      toggle();
	    }
	    function toggle() {
	      el.style.display = value ? '' : 'none';
	    }
	  }
	};

	var text$2 = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	    var isRange = el.type === 'range';
	    var lazy = this.params.lazy;
	    var number = this.params.number;
	    var debounce = this.params.debounce;

	    // handle composition events.
	    //   http://blog.evanyou.me/2014/01/03/composition-event/
	    // skip this for Android because it handles composition
	    // events quite differently. Android doesn't trigger
	    // composition events for language input methods e.g.
	    // Chinese, but instead triggers them for spelling
	    // suggestions... (see Discussion/#162)
	    var composing = false;
	    if (!isAndroid && !isRange) {
	      this.on('compositionstart', function () {
	        composing = true;
	      });
	      this.on('compositionend', function () {
	        composing = false;
	        // in IE11 the "compositionend" event fires AFTER
	        // the "input" event, so the input handler is blocked
	        // at the end... have to call it here.
	        //
	        // #1327: in lazy mode this is unecessary.
	        if (!lazy) {
	          self.listener();
	        }
	      });
	    }

	    // prevent messing with the input when user is typing,
	    // and force update on blur.
	    this.focused = false;
	    if (!isRange && !lazy) {
	      this.on('focus', function () {
	        self.focused = true;
	      });
	      this.on('blur', function () {
	        self.focused = false;
	        // do not sync value after fragment removal (#2017)
	        if (!self._frag || self._frag.inserted) {
	          self.rawListener();
	        }
	      });
	    }

	    // Now attach the main listener
	    this.listener = this.rawListener = function () {
	      if (composing || !self._bound) {
	        return;
	      }
	      var val = number || isRange ? toNumber(el.value) : el.value;
	      self.set(val);
	      // force update on next tick to avoid lock & same value
	      // also only update when user is not typing
	      nextTick(function () {
	        if (self._bound && !self.focused) {
	          self.update(self._watcher.value);
	        }
	      });
	    };

	    // apply debounce
	    if (debounce) {
	      this.listener = _debounce(this.listener, debounce);
	    }

	    // Support jQuery events, since jQuery.trigger() doesn't
	    // trigger native events in some cases and some plugins
	    // rely on $.trigger()
	    //
	    // We want to make sure if a listener is attached using
	    // jQuery, it is also removed with jQuery, that's why
	    // we do the check for each directive instance and
	    // store that check result on itself. This also allows
	    // easier test coverage control by unsetting the global
	    // jQuery variable in tests.
	    this.hasjQuery = typeof jQuery === 'function';
	    if (this.hasjQuery) {
	      var method = jQuery.fn.on ? 'on' : 'bind';
	      jQuery(el)[method]('change', this.rawListener);
	      if (!lazy) {
	        jQuery(el)[method]('input', this.listener);
	      }
	    } else {
	      this.on('change', this.rawListener);
	      if (!lazy) {
	        this.on('input', this.listener);
	      }
	    }

	    // IE9 doesn't fire input event on backspace/del/cut
	    if (!lazy && isIE9) {
	      this.on('cut', function () {
	        nextTick(self.listener);
	      });
	      this.on('keyup', function (e) {
	        if (e.keyCode === 46 || e.keyCode === 8) {
	          self.listener();
	        }
	      });
	    }

	    // set initial value if present
	    if (el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    // #3029 only update when the value changes. This prevent
	    // browsers from overwriting values like selectionStart
	    value = _toString(value);
	    if (value !== this.el.value) this.el.value = value;
	  },

	  unbind: function unbind() {
	    var el = this.el;
	    if (this.hasjQuery) {
	      var method = jQuery.fn.off ? 'off' : 'unbind';
	      jQuery(el)[method]('change', this.listener);
	      jQuery(el)[method]('input', this.listener);
	    }
	  }
	};

	var radio = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;

	    this.getValue = function () {
	      // value overwrite via v-bind:value
	      if (el.hasOwnProperty('_value')) {
	        return el._value;
	      }
	      var val = el.value;
	      if (self.params.number) {
	        val = toNumber(val);
	      }
	      return val;
	    };

	    this.listener = function () {
	      self.set(self.getValue());
	    };
	    this.on('change', this.listener);

	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    this.el.checked = looseEqual(value, this.getValue());
	  }
	};

	var select = {

	  bind: function bind() {
	    var _this = this;

	    var self = this;
	    var el = this.el;

	    // method to force update DOM using latest value.
	    this.forceUpdate = function () {
	      if (self._watcher) {
	        self.update(self._watcher.get());
	      }
	    };

	    // check if this is a multiple select
	    var multiple = this.multiple = el.hasAttribute('multiple');

	    // attach listener
	    this.listener = function () {
	      var value = getValue(el, multiple);
	      value = self.params.number ? isArray(value) ? value.map(toNumber) : toNumber(value) : value;
	      self.set(value);
	    };
	    this.on('change', this.listener);

	    // if has initial value, set afterBind
	    var initValue = getValue(el, multiple, true);
	    if (multiple && initValue.length || !multiple && initValue !== null) {
	      this.afterBind = this.listener;
	    }

	    // All major browsers except Firefox resets
	    // selectedIndex with value -1 to 0 when the element
	    // is appended to a new parent, therefore we have to
	    // force a DOM update whenever that happens...
	    this.vm.$on('hook:attached', function () {
	      nextTick(_this.forceUpdate);
	    });
	    if (!inDoc(el)) {
	      nextTick(this.forceUpdate);
	    }
	  },

	  update: function update(value) {
	    var el = this.el;
	    el.selectedIndex = -1;
	    var multi = this.multiple && isArray(value);
	    var options = el.options;
	    var i = options.length;
	    var op, val;
	    while (i--) {
	      op = options[i];
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      /* eslint-disable eqeqeq */
	      op.selected = multi ? indexOf$1(value, val) > -1 : looseEqual(value, val);
	      /* eslint-enable eqeqeq */
	    }
	  },

	  unbind: function unbind() {
	    /* istanbul ignore next */
	    this.vm.$off('hook:attached', this.forceUpdate);
	  }
	};

	/**
	 * Get select value
	 *
	 * @param {SelectElement} el
	 * @param {Boolean} multi
	 * @param {Boolean} init
	 * @return {Array|*}
	 */

	function getValue(el, multi, init) {
	  var res = multi ? [] : null;
	  var op, val, selected;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    op = el.options[i];
	    selected = init ? op.hasAttribute('selected') : op.selected;
	    if (selected) {
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      if (multi) {
	        res.push(val);
	      } else {
	        return val;
	      }
	    }
	  }
	  return res;
	}

	/**
	 * Native Array.indexOf uses strict equal, but in this
	 * case we need to match string/numbers with custom equal.
	 *
	 * @param {Array} arr
	 * @param {*} val
	 */

	function indexOf$1(arr, val) {
	  var i = arr.length;
	  while (i--) {
	    if (looseEqual(arr[i], val)) {
	      return i;
	    }
	  }
	  return -1;
	}

	var checkbox = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;

	    this.getValue = function () {
	      return el.hasOwnProperty('_value') ? el._value : self.params.number ? toNumber(el.value) : el.value;
	    };

	    function getBooleanValue() {
	      var val = el.checked;
	      if (val && el.hasOwnProperty('_trueValue')) {
	        return el._trueValue;
	      }
	      if (!val && el.hasOwnProperty('_falseValue')) {
	        return el._falseValue;
	      }
	      return val;
	    }

	    this.listener = function () {
	      var model = self._watcher.get();
	      if (isArray(model)) {
	        var val = self.getValue();
	        var i = indexOf(model, val);
	        if (el.checked) {
	          if (i < 0) {
	            self.set(model.concat(val));
	          }
	        } else if (i > -1) {
	          self.set(model.slice(0, i).concat(model.slice(i + 1)));
	        }
	      } else {
	        self.set(getBooleanValue());
	      }
	    };

	    this.on('change', this.listener);
	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    var el = this.el;
	    if (isArray(value)) {
	      el.checked = indexOf(value, this.getValue()) > -1;
	    } else {
	      if (el.hasOwnProperty('_trueValue')) {
	        el.checked = looseEqual(value, el._trueValue);
	      } else {
	        el.checked = !!value;
	      }
	    }
	  }
	};

	var handlers = {
	  text: text$2,
	  radio: radio,
	  select: select,
	  checkbox: checkbox
	};

	var model = {

	  priority: MODEL,
	  twoWay: true,
	  handlers: handlers,
	  params: ['lazy', 'number', 'debounce'],

	  /**
	   * Possible elements:
	   *   <select>
	   *   <textarea>
	   *   <input type="*">
	   *     - text
	   *     - checkbox
	   *     - radio
	   *     - number
	   */

	  bind: function bind() {
	    // friendly warning...
	    this.checkFilters();
	    if (this.hasRead && !this.hasWrite) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using a read-only filter with ' + 'v-model="' + this.descriptor.raw + '". ' + 'You might want to use a two-way filter to ensure correct behavior.', this.vm);
	    }
	    var el = this.el;
	    var tag = el.tagName;
	    var handler;
	    if (tag === 'INPUT') {
	      handler = handlers[el.type] || handlers.text;
	    } else if (tag === 'SELECT') {
	      handler = handlers.select;
	    } else if (tag === 'TEXTAREA') {
	      handler = handlers.text;
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-model does not support element type: ' + tag, this.vm);
	      return;
	    }
	    el.__v_model = this;
	    handler.bind.call(this);
	    this.update = handler.update;
	    this._unbind = handler.unbind;
	  },

	  /**
	   * Check read/write filter stats.
	   */

	  checkFilters: function checkFilters() {
	    var filters = this.filters;
	    if (!filters) return;
	    var i = filters.length;
	    while (i--) {
	      var filter = resolveAsset(this.vm.$options, 'filters', filters[i].name);
	      if (typeof filter === 'function' || filter.read) {
	        this.hasRead = true;
	      }
	      if (filter.write) {
	        this.hasWrite = true;
	      }
	    }
	  },

	  unbind: function unbind() {
	    this.el.__v_model = null;
	    this._unbind && this._unbind();
	  }
	};

	// keyCode aliases
	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  space: 32,
	  'delete': [8, 46],
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40
	};

	function keyFilter(handler, keys) {
	  var codes = keys.map(function (key) {
	    var charCode = key.charCodeAt(0);
	    if (charCode > 47 && charCode < 58) {
	      return parseInt(key, 10);
	    }
	    if (key.length === 1) {
	      charCode = key.toUpperCase().charCodeAt(0);
	      if (charCode > 64 && charCode < 91) {
	        return charCode;
	      }
	    }
	    return keyCodes[key];
	  });
	  codes = [].concat.apply([], codes);
	  return function keyHandler(e) {
	    if (codes.indexOf(e.keyCode) > -1) {
	      return handler.call(this, e);
	    }
	  };
	}

	function stopFilter(handler) {
	  return function stopHandler(e) {
	    e.stopPropagation();
	    return handler.call(this, e);
	  };
	}

	function preventFilter(handler) {
	  return function preventHandler(e) {
	    e.preventDefault();
	    return handler.call(this, e);
	  };
	}

	function selfFilter(handler) {
	  return function selfHandler(e) {
	    if (e.target === e.currentTarget) {
	      return handler.call(this, e);
	    }
	  };
	}

	var on$1 = {

	  priority: ON,
	  acceptStatement: true,
	  keyCodes: keyCodes,

	  bind: function bind() {
	    // deal with iframes
	    if (this.el.tagName === 'IFRAME' && this.arg !== 'load') {
	      var self = this;
	      this.iframeBind = function () {
	        on(self.el.contentWindow, self.arg, self.handler, self.modifiers.capture);
	      };
	      this.on('load', this.iframeBind);
	    }
	  },

	  update: function update(handler) {
	    // stub a noop for v-on with no value,
	    // e.g. @mousedown.prevent
	    if (!this.descriptor.raw) {
	      handler = function () {};
	    }

	    if (typeof handler !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('v-on:' + this.arg + '="' + this.expression + '" expects a function value, ' + 'got ' + handler, this.vm);
	      return;
	    }

	    // apply modifiers
	    if (this.modifiers.stop) {
	      handler = stopFilter(handler);
	    }
	    if (this.modifiers.prevent) {
	      handler = preventFilter(handler);
	    }
	    if (this.modifiers.self) {
	      handler = selfFilter(handler);
	    }
	    // key filter
	    var keys = Object.keys(this.modifiers).filter(function (key) {
	      return key !== 'stop' && key !== 'prevent' && key !== 'self' && key !== 'capture';
	    });
	    if (keys.length) {
	      handler = keyFilter(handler, keys);
	    }

	    this.reset();
	    this.handler = handler;

	    if (this.iframeBind) {
	      this.iframeBind();
	    } else {
	      on(this.el, this.arg, this.handler, this.modifiers.capture);
	    }
	  },

	  reset: function reset() {
	    var el = this.iframeBind ? this.el.contentWindow : this.el;
	    if (this.handler) {
	      off(el, this.arg, this.handler);
	    }
	  },

	  unbind: function unbind() {
	    this.reset();
	  }
	};

	var prefixes = ['-webkit-', '-moz-', '-ms-'];
	var camelPrefixes = ['Webkit', 'Moz', 'ms'];
	var importantRE = /!important;?$/;
	var propCache = Object.create(null);

	var testEl = null;

	var style = {

	  deep: true,

	  update: function update(value) {
	    if (typeof value === 'string') {
	      this.el.style.cssText = value;
	    } else if (isArray(value)) {
	      this.handleObject(value.reduce(extend, {}));
	    } else {
	      this.handleObject(value || {});
	    }
	  },

	  handleObject: function handleObject(value) {
	    // cache object styles so that only changed props
	    // are actually updated.
	    var cache = this.cache || (this.cache = {});
	    var name, val;
	    for (name in cache) {
	      if (!(name in value)) {
	        this.handleSingle(name, null);
	        delete cache[name];
	      }
	    }
	    for (name in value) {
	      val = value[name];
	      if (val !== cache[name]) {
	        cache[name] = val;
	        this.handleSingle(name, val);
	      }
	    }
	  },

	  handleSingle: function handleSingle(prop, value) {
	    prop = normalize(prop);
	    if (!prop) return; // unsupported prop
	    // cast possible numbers/booleans into strings
	    if (value != null) value += '';
	    if (value) {
	      var isImportant = importantRE.test(value) ? 'important' : '';
	      if (isImportant) {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          warn('It\'s probably a bad idea to use !important with inline rules. ' + 'This feature will be deprecated in a future version of Vue.');
	        }
	        value = value.replace(importantRE, '').trim();
	        this.el.style.setProperty(prop.kebab, value, isImportant);
	      } else {
	        this.el.style[prop.camel] = value;
	      }
	    } else {
	      this.el.style[prop.camel] = '';
	    }
	  }

	};

	/**
	 * Normalize a CSS property name.
	 * - cache result
	 * - auto prefix
	 * - camelCase -> dash-case
	 *
	 * @param {String} prop
	 * @return {String}
	 */

	function normalize(prop) {
	  if (propCache[prop]) {
	    return propCache[prop];
	  }
	  var res = prefix(prop);
	  propCache[prop] = propCache[res] = res;
	  return res;
	}

	/**
	 * Auto detect the appropriate prefix for a CSS property.
	 * https://gist.github.com/paulirish/523692
	 *
	 * @param {String} prop
	 * @return {String}
	 */

	function prefix(prop) {
	  prop = hyphenate(prop);
	  var camel = camelize(prop);
	  var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
	  if (!testEl) {
	    testEl = document.createElement('div');
	  }
	  var i = prefixes.length;
	  var prefixed;
	  if (camel !== 'filter' && camel in testEl.style) {
	    return {
	      kebab: prop,
	      camel: camel
	    };
	  }
	  while (i--) {
	    prefixed = camelPrefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return {
	        kebab: prefixes[i] + prop,
	        camel: prefixed
	      };
	    }
	  }
	}

	// xlink
	var xlinkNS = 'http://www.w3.org/1999/xlink';
	var xlinkRE = /^xlink:/;

	// check for attributes that prohibit interpolations
	var disallowedInterpAttrRE = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;
	// these attributes should also set their corresponding properties
	// because they only affect the initial state of the element
	var attrWithPropsRE = /^(?:value|checked|selected|muted)$/;
	// these attributes expect enumrated values of "true" or "false"
	// but are not boolean attributes
	var enumeratedAttrRE = /^(?:draggable|contenteditable|spellcheck)$/;

	// these attributes should set a hidden property for
	// binding v-model to object values
	var modelProps = {
	  value: '_value',
	  'true-value': '_trueValue',
	  'false-value': '_falseValue'
	};

	var bind$1 = {

	  priority: BIND,

	  bind: function bind() {
	    var attr = this.arg;
	    var tag = this.el.tagName;
	    // should be deep watch on object mode
	    if (!attr) {
	      this.deep = true;
	    }
	    // handle interpolation bindings
	    var descriptor = this.descriptor;
	    var tokens = descriptor.interp;
	    if (tokens) {
	      // handle interpolations with one-time tokens
	      if (descriptor.hasOneTime) {
	        this.expression = tokensToExp(tokens, this._scope || this.vm);
	      }

	      // only allow binding on native attributes
	      if (disallowedInterpAttrRE.test(attr) || attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT')) {
	        process.env.NODE_ENV !== 'production' && warn(attr + '="' + descriptor.raw + '": ' + 'attribute interpolation is not allowed in Vue.js ' + 'directives and special attributes.', this.vm);
	        this.el.removeAttribute(attr);
	        this.invalid = true;
	      }

	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production') {
	        var raw = attr + '="' + descriptor.raw + '": ';
	        // warn src
	        if (attr === 'src') {
	          warn(raw + 'interpolation in "src" attribute will cause ' + 'a 404 request. Use v-bind:src instead.', this.vm);
	        }

	        // warn style
	        if (attr === 'style') {
	          warn(raw + 'interpolation in "style" attribute will cause ' + 'the attribute to be discarded in Internet Explorer. ' + 'Use v-bind:style instead.', this.vm);
	        }
	      }
	    }
	  },

	  update: function update(value) {
	    if (this.invalid) {
	      return;
	    }
	    var attr = this.arg;
	    if (this.arg) {
	      this.handleSingle(attr, value);
	    } else {
	      this.handleObject(value || {});
	    }
	  },

	  // share object handler with v-bind:class
	  handleObject: style.handleObject,

	  handleSingle: function handleSingle(attr, value) {
	    var el = this.el;
	    var interp = this.descriptor.interp;
	    if (this.modifiers.camel) {
	      attr = camelize(attr);
	    }
	    if (!interp && attrWithPropsRE.test(attr) && attr in el) {
	      var attrValue = attr === 'value' ? value == null // IE9 will set input.value to "null" for null...
	      ? '' : value : value;

	      if (el[attr] !== attrValue) {
	        el[attr] = attrValue;
	      }
	    }
	    // set model props
	    var modelProp = modelProps[attr];
	    if (!interp && modelProp) {
	      el[modelProp] = value;
	      // update v-model if present
	      var model = el.__v_model;
	      if (model) {
	        model.listener();
	      }
	    }
	    // do not set value attribute for textarea
	    if (attr === 'value' && el.tagName === 'TEXTAREA') {
	      el.removeAttribute(attr);
	      return;
	    }
	    // update attribute
	    if (enumeratedAttrRE.test(attr)) {
	      el.setAttribute(attr, value ? 'true' : 'false');
	    } else if (value != null && value !== false) {
	      if (attr === 'class') {
	        // handle edge case #1960:
	        // class interpolation should not overwrite Vue transition class
	        if (el.__v_trans) {
	          value += ' ' + el.__v_trans.id + '-transition';
	        }
	        setClass(el, value);
	      } else if (xlinkRE.test(attr)) {
	        el.setAttributeNS(xlinkNS, attr, value === true ? '' : value);
	      } else {
	        el.setAttribute(attr, value === true ? '' : value);
	      }
	    } else {
	      el.removeAttribute(attr);
	    }
	  }
	};

	var el = {

	  priority: EL,

	  bind: function bind() {
	    /* istanbul ignore if */
	    if (!this.arg) {
	      return;
	    }
	    var id = this.id = camelize(this.arg);
	    var refs = (this._scope || this.vm).$els;
	    if (hasOwn(refs, id)) {
	      refs[id] = this.el;
	    } else {
	      defineReactive(refs, id, this.el);
	    }
	  },

	  unbind: function unbind() {
	    var refs = (this._scope || this.vm).$els;
	    if (refs[this.id] === this.el) {
	      refs[this.id] = null;
	    }
	  }
	};

	var ref = {
	  bind: function bind() {
	    process.env.NODE_ENV !== 'production' && warn('v-ref:' + this.arg + ' must be used on a child ' + 'component. Found on <' + this.el.tagName.toLowerCase() + '>.', this.vm);
	  }
	};

	var cloak = {
	  bind: function bind() {
	    var el = this.el;
	    this.vm.$once('pre-hook:compiled', function () {
	      el.removeAttribute('v-cloak');
	    });
	  }
	};

	// logic control
	// two-way binding
	// event handling
	// attributes
	// ref & el
	// cloak
	// must export plain object
	var directives = {
	  text: text$1,
	  html: html,
	  'for': vFor,
	  'if': vIf,
	  show: show,
	  model: model,
	  on: on$1,
	  bind: bind$1,
	  el: el,
	  ref: ref,
	  cloak: cloak
	};

	var vClass = {

	  deep: true,

	  update: function update(value) {
	    if (!value) {
	      this.cleanup();
	    } else if (typeof value === 'string') {
	      this.setClass(value.trim().split(/\s+/));
	    } else {
	      this.setClass(normalize$1(value));
	    }
	  },

	  setClass: function setClass(value) {
	    this.cleanup(value);
	    for (var i = 0, l = value.length; i < l; i++) {
	      var val = value[i];
	      if (val) {
	        apply(this.el, val, addClass);
	      }
	    }
	    this.prevKeys = value;
	  },

	  cleanup: function cleanup(value) {
	    var prevKeys = this.prevKeys;
	    if (!prevKeys) return;
	    var i = prevKeys.length;
	    while (i--) {
	      var key = prevKeys[i];
	      if (!value || value.indexOf(key) < 0) {
	        apply(this.el, key, removeClass);
	      }
	    }
	  }
	};

	/**
	 * Normalize objects and arrays (potentially containing objects)
	 * into array of strings.
	 *
	 * @param {Object|Array<String|Object>} value
	 * @return {Array<String>}
	 */

	function normalize$1(value) {
	  var res = [];
	  if (isArray(value)) {
	    for (var i = 0, l = value.length; i < l; i++) {
	      var _key = value[i];
	      if (_key) {
	        if (typeof _key === 'string') {
	          res.push(_key);
	        } else {
	          for (var k in _key) {
	            if (_key[k]) res.push(k);
	          }
	        }
	      }
	    }
	  } else if (isObject(value)) {
	    for (var key in value) {
	      if (value[key]) res.push(key);
	    }
	  }
	  return res;
	}

	/**
	 * Add or remove a class/classes on an element
	 *
	 * @param {Element} el
	 * @param {String} key The class name. This may or may not
	 *                     contain a space character, in such a
	 *                     case we'll deal with multiple class
	 *                     names at once.
	 * @param {Function} fn
	 */

	function apply(el, key, fn) {
	  key = key.trim();
	  if (key.indexOf(' ') === -1) {
	    fn(el, key);
	    return;
	  }
	  // The key contains one or more space characters.
	  // Since a class name doesn't accept such characters, we
	  // treat it as multiple classes.
	  var keys = key.split(/\s+/);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    fn(el, keys[i]);
	  }
	}

	var component = {

	  priority: COMPONENT,

	  params: ['keep-alive', 'transition-mode', 'inline-template'],

	  /**
	   * Setup. Two possible usages:
	   *
	   * - static:
	   *   <comp> or <div v-component="comp">
	   *
	   * - dynamic:
	   *   <component :is="view">
	   */

	  bind: function bind() {
	    if (!this.el.__vue__) {
	      // keep-alive cache
	      this.keepAlive = this.params.keepAlive;
	      if (this.keepAlive) {
	        this.cache = {};
	      }
	      // check inline-template
	      if (this.params.inlineTemplate) {
	        // extract inline template as a DocumentFragment
	        this.inlineTemplate = extractContent(this.el, true);
	      }
	      // component resolution related state
	      this.pendingComponentCb = this.Component = null;
	      // transition related state
	      this.pendingRemovals = 0;
	      this.pendingRemovalCb = null;
	      // create a ref anchor
	      this.anchor = createAnchor('v-component');
	      replace(this.el, this.anchor);
	      // remove is attribute.
	      // this is removed during compilation, but because compilation is
	      // cached, when the component is used elsewhere this attribute
	      // will remain at link time.
	      this.el.removeAttribute('is');
	      this.el.removeAttribute(':is');
	      // remove ref, same as above
	      if (this.descriptor.ref) {
	        this.el.removeAttribute('v-ref:' + hyphenate(this.descriptor.ref));
	      }
	      // if static, build right now.
	      if (this.literal) {
	        this.setComponent(this.expression);
	      }
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);
	    }
	  },

	  /**
	   * Public update, called by the watcher in the dynamic
	   * literal scenario, e.g. <component :is="view">
	   */

	  update: function update(value) {
	    if (!this.literal) {
	      this.setComponent(value);
	    }
	  },

	  /**
	   * Switch dynamic components. May resolve the component
	   * asynchronously, and perform transition based on
	   * specified transition mode. Accepts a few additional
	   * arguments specifically for vue-router.
	   *
	   * The callback is called when the full transition is
	   * finished.
	   *
	   * @param {String} value
	   * @param {Function} [cb]
	   */

	  setComponent: function setComponent(value, cb) {
	    this.invalidatePending();
	    if (!value) {
	      // just remove current
	      this.unbuild(true);
	      this.remove(this.childVM, cb);
	      this.childVM = null;
	    } else {
	      var self = this;
	      this.resolveComponent(value, function () {
	        self.mountComponent(cb);
	      });
	    }
	  },

	  /**
	   * Resolve the component constructor to use when creating
	   * the child vm.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */

	  resolveComponent: function resolveComponent(value, cb) {
	    var self = this;
	    this.pendingComponentCb = cancellable(function (Component) {
	      self.ComponentName = Component.options.name || (typeof value === 'string' ? value : null);
	      self.Component = Component;
	      cb();
	    });
	    this.vm._resolveComponent(value, this.pendingComponentCb);
	  },

	  /**
	   * Create a new instance using the current constructor and
	   * replace the existing instance. This method doesn't care
	   * whether the new component and the old one are actually
	   * the same.
	   *
	   * @param {Function} [cb]
	   */

	  mountComponent: function mountComponent(cb) {
	    // actual mount
	    this.unbuild(true);
	    var self = this;
	    var activateHooks = this.Component.options.activate;
	    var cached = this.getCached();
	    var newComponent = this.build();
	    if (activateHooks && !cached) {
	      this.waitingFor = newComponent;
	      callActivateHooks(activateHooks, newComponent, function () {
	        if (self.waitingFor !== newComponent) {
	          return;
	        }
	        self.waitingFor = null;
	        self.transition(newComponent, cb);
	      });
	    } else {
	      // update ref for kept-alive component
	      if (cached) {
	        newComponent._updateRef();
	      }
	      this.transition(newComponent, cb);
	    }
	  },

	  /**
	   * When the component changes or unbinds before an async
	   * constructor is resolved, we need to invalidate its
	   * pending callback.
	   */

	  invalidatePending: function invalidatePending() {
	    if (this.pendingComponentCb) {
	      this.pendingComponentCb.cancel();
	      this.pendingComponentCb = null;
	    }
	  },

	  /**
	   * Instantiate/insert a new child vm.
	   * If keep alive and has cached instance, insert that
	   * instance; otherwise build a new one and cache it.
	   *
	   * @param {Object} [extraOptions]
	   * @return {Vue} - the created instance
	   */

	  build: function build(extraOptions) {
	    var cached = this.getCached();
	    if (cached) {
	      return cached;
	    }
	    if (this.Component) {
	      // default options
	      var options = {
	        name: this.ComponentName,
	        el: cloneNode(this.el),
	        template: this.inlineTemplate,
	        // make sure to add the child with correct parent
	        // if this is a transcluded component, its parent
	        // should be the transclusion host.
	        parent: this._host || this.vm,
	        // if no inline-template, then the compiled
	        // linker can be cached for better performance.
	        _linkerCachable: !this.inlineTemplate,
	        _ref: this.descriptor.ref,
	        _asComponent: true,
	        _isRouterView: this._isRouterView,
	        // if this is a transcluded component, context
	        // will be the common parent vm of this instance
	        // and its host.
	        _context: this.vm,
	        // if this is inside an inline v-for, the scope
	        // will be the intermediate scope created for this
	        // repeat fragment. this is used for linking props
	        // and container directives.
	        _scope: this._scope,
	        // pass in the owner fragment of this component.
	        // this is necessary so that the fragment can keep
	        // track of its contained components in order to
	        // call attach/detach hooks for them.
	        _frag: this._frag
	      };
	      // extra options
	      // in 1.0.0 this is used by vue-router only
	      /* istanbul ignore if */
	      if (extraOptions) {
	        extend(options, extraOptions);
	      }
	      var child = new this.Component(options);
	      if (this.keepAlive) {
	        this.cache[this.Component.cid] = child;
	      }
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && this.el.hasAttribute('transition') && child._isFragment) {
	        warn('Transitions will not work on a fragment instance. ' + 'Template: ' + child.$options.template, child);
	      }
	      return child;
	    }
	  },

	  /**
	   * Try to get a cached instance of the current component.
	   *
	   * @return {Vue|undefined}
	   */

	  getCached: function getCached() {
	    return this.keepAlive && this.cache[this.Component.cid];
	  },

	  /**
	   * Teardown the current child, but defers cleanup so
	   * that we can separate the destroy and removal steps.
	   *
	   * @param {Boolean} defer
	   */

	  unbuild: function unbuild(defer) {
	    if (this.waitingFor) {
	      if (!this.keepAlive) {
	        this.waitingFor.$destroy();
	      }
	      this.waitingFor = null;
	    }
	    var child = this.childVM;
	    if (!child || this.keepAlive) {
	      if (child) {
	        // remove ref
	        child._inactive = true;
	        child._updateRef(true);
	      }
	      return;
	    }
	    // the sole purpose of `deferCleanup` is so that we can
	    // "deactivate" the vm right now and perform DOM removal
	    // later.
	    child.$destroy(false, defer);
	  },

	  /**
	   * Remove current destroyed child and manually do
	   * the cleanup after removal.
	   *
	   * @param {Function} cb
	   */

	  remove: function remove(child, cb) {
	    var keepAlive = this.keepAlive;
	    if (child) {
	      // we may have a component switch when a previous
	      // component is still being transitioned out.
	      // we want to trigger only one lastest insertion cb
	      // when the existing transition finishes. (#1119)
	      this.pendingRemovals++;
	      this.pendingRemovalCb = cb;
	      var self = this;
	      child.$remove(function () {
	        self.pendingRemovals--;
	        if (!keepAlive) child._cleanup();
	        if (!self.pendingRemovals && self.pendingRemovalCb) {
	          self.pendingRemovalCb();
	          self.pendingRemovalCb = null;
	        }
	      });
	    } else if (cb) {
	      cb();
	    }
	  },

	  /**
	   * Actually swap the components, depending on the
	   * transition mode. Defaults to simultaneous.
	   *
	   * @param {Vue} target
	   * @param {Function} [cb]
	   */

	  transition: function transition(target, cb) {
	    var self = this;
	    var current = this.childVM;
	    // for devtool inspection
	    if (current) current._inactive = true;
	    target._inactive = false;
	    this.childVM = target;
	    switch (self.params.transitionMode) {
	      case 'in-out':
	        target.$before(self.anchor, function () {
	          self.remove(current, cb);
	        });
	        break;
	      case 'out-in':
	        self.remove(current, function () {
	          target.$before(self.anchor, cb);
	        });
	        break;
	      default:
	        self.remove(current);
	        target.$before(self.anchor, cb);
	    }
	  },

	  /**
	   * Unbind.
	   */

	  unbind: function unbind() {
	    this.invalidatePending();
	    // Do not defer cleanup when unbinding
	    this.unbuild();
	    // destroy all keep-alive cached instances
	    if (this.cache) {
	      for (var key in this.cache) {
	        this.cache[key].$destroy();
	      }
	      this.cache = null;
	    }
	  }
	};

	/**
	 * Call activate hooks in order (asynchronous)
	 *
	 * @param {Array} hooks
	 * @param {Vue} vm
	 * @param {Function} cb
	 */

	function callActivateHooks(hooks, vm, cb) {
	  var total = hooks.length;
	  var called = 0;
	  hooks[0].call(vm, next);
	  function next() {
	    if (++called >= total) {
	      cb();
	    } else {
	      hooks[called].call(vm, next);
	    }
	  }
	}

	var propBindingModes = config._propBindingModes;
	var empty = {};

	// regexes
	var identRE$1 = /^[$_a-zA-Z]+[\w$]*$/;
	var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;

	/**
	 * Compile props on a root element and return
	 * a props link function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Array} propOptions
	 * @param {Vue} vm
	 * @return {Function} propsLinkFn
	 */

	function compileProps(el, propOptions, vm) {
	  var props = [];
	  var propsData = vm.$options.propsData;
	  var names = Object.keys(propOptions);
	  var i = names.length;
	  var options, name, attr, value, path, parsed, prop;
	  while (i--) {
	    name = names[i];
	    options = propOptions[name] || empty;

	    if (process.env.NODE_ENV !== 'production' && name === '$data') {
	      warn('Do not use $data as prop.', vm);
	      continue;
	    }

	    // props could contain dashes, which will be
	    // interpreted as minus calculations by the parser
	    // so we need to camelize the path here
	    path = camelize(name);
	    if (!identRE$1.test(path)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.', vm);
	      continue;
	    }

	    prop = {
	      name: name,
	      path: path,
	      options: options,
	      mode: propBindingModes.ONE_WAY,
	      raw: null
	    };

	    attr = hyphenate(name);
	    // first check dynamic version
	    if ((value = getBindAttr(el, attr)) === null) {
	      if ((value = getBindAttr(el, attr + '.sync')) !== null) {
	        prop.mode = propBindingModes.TWO_WAY;
	      } else if ((value = getBindAttr(el, attr + '.once')) !== null) {
	        prop.mode = propBindingModes.ONE_TIME;
	      }
	    }
	    if (value !== null) {
	      // has dynamic binding!
	      prop.raw = value;
	      parsed = parseDirective(value);
	      value = parsed.expression;
	      prop.filters = parsed.filters;
	      // check binding type
	      if (isLiteral(value) && !parsed.filters) {
	        // for expressions containing literal numbers and
	        // booleans, there's no need to setup a prop binding,
	        // so we can optimize them as a one-time set.
	        prop.optimizedLiteral = true;
	      } else {
	        prop.dynamic = true;
	        // check non-settable path for two-way bindings
	        if (process.env.NODE_ENV !== 'production' && prop.mode === propBindingModes.TWO_WAY && !settablePathRE.test(value)) {
	          prop.mode = propBindingModes.ONE_WAY;
	          warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + value, vm);
	        }
	      }
	      prop.parentPath = value;

	      // warn required two-way
	      if (process.env.NODE_ENV !== 'production' && options.twoWay && prop.mode !== propBindingModes.TWO_WAY) {
	        warn('Prop "' + name + '" expects a two-way binding type.', vm);
	      }
	    } else if ((value = getAttr(el, attr)) !== null) {
	      // has literal binding!
	      prop.raw = value;
	    } else if (propsData && (value = propsData[name] || propsData[path]) !== null) {
	      // has propsData
	      prop.raw = value;
	    } else if (process.env.NODE_ENV !== 'production') {
	      // check possible camelCase prop usage
	      var lowerCaseName = path.toLowerCase();
	      value = /[A-Z\-]/.test(name) && (el.getAttribute(lowerCaseName) || el.getAttribute(':' + lowerCaseName) || el.getAttribute('v-bind:' + lowerCaseName) || el.getAttribute(':' + lowerCaseName + '.once') || el.getAttribute('v-bind:' + lowerCaseName + '.once') || el.getAttribute(':' + lowerCaseName + '.sync') || el.getAttribute('v-bind:' + lowerCaseName + '.sync'));
	      if (value) {
	        warn('Possible usage error for prop `' + lowerCaseName + '` - ' + 'did you mean `' + attr + '`? HTML is case-insensitive, remember to use ' + 'kebab-case for props in templates.', vm);
	      } else if (options.required && (!propsData || !(name in propsData) && !(path in propsData))) {
	        // warn missing required
	        warn('Missing required prop: ' + name, vm);
	      }
	    }
	    // push prop
	    props.push(prop);
	  }
	  return makePropsLinkFn(props);
	}

	/**
	 * Build a function that applies props to a vm.
	 *
	 * @param {Array} props
	 * @return {Function} propsLinkFn
	 */

	function makePropsLinkFn(props) {
	  return function propsLinkFn(vm, scope) {
	    // store resolved props info
	    vm._props = {};
	    var inlineProps = vm.$options.propsData;
	    var i = props.length;
	    var prop, path, options, value, raw;
	    while (i--) {
	      prop = props[i];
	      raw = prop.raw;
	      path = prop.path;
	      options = prop.options;
	      vm._props[path] = prop;
	      if (inlineProps && hasOwn(inlineProps, path)) {
	        initProp(vm, prop, inlineProps[path]);
	      }if (raw === null) {
	        // initialize absent prop
	        initProp(vm, prop, undefined);
	      } else if (prop.dynamic) {
	        // dynamic prop
	        if (prop.mode === propBindingModes.ONE_TIME) {
	          // one time binding
	          value = (scope || vm._context || vm).$get(prop.parentPath);
	          initProp(vm, prop, value);
	        } else {
	          if (vm._context) {
	            // dynamic binding
	            vm._bindDir({
	              name: 'prop',
	              def: propDef,
	              prop: prop
	            }, null, null, scope); // el, host, scope
	          } else {
	              // root instance
	              initProp(vm, prop, vm.$get(prop.parentPath));
	            }
	        }
	      } else if (prop.optimizedLiteral) {
	        // optimized literal, cast it and just set once
	        var stripped = stripQuotes(raw);
	        value = stripped === raw ? toBoolean(toNumber(raw)) : stripped;
	        initProp(vm, prop, value);
	      } else {
	        // string literal, but we need to cater for
	        // Boolean props with no value, or with same
	        // literal value (e.g. disabled="disabled")
	        // see https://github.com/vuejs/vue-loader/issues/182
	        value = options.type === Boolean && (raw === '' || raw === hyphenate(prop.name)) ? true : raw;
	        initProp(vm, prop, value);
	      }
	    }
	  };
	}

	/**
	 * Process a prop with a rawValue, applying necessary coersions,
	 * default values & assertions and call the given callback with
	 * processed value.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} rawValue
	 * @param {Function} fn
	 */

	function processPropValue(vm, prop, rawValue, fn) {
	  var isSimple = prop.dynamic && isSimplePath(prop.parentPath);
	  var value = rawValue;
	  if (value === undefined) {
	    value = getPropDefaultValue(vm, prop);
	  }
	  value = coerceProp(prop, value, vm);
	  var coerced = value !== rawValue;
	  if (!assertProp(prop, value, vm)) {
	    value = undefined;
	  }
	  if (isSimple && !coerced) {
	    withoutConversion(function () {
	      fn(value);
	    });
	  } else {
	    fn(value);
	  }
	}

	/**
	 * Set a prop's initial value on a vm and its data object.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */

	function initProp(vm, prop, value) {
	  processPropValue(vm, prop, value, function (value) {
	    defineReactive(vm, prop.path, value);
	  });
	}

	/**
	 * Update a prop's value on a vm.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */

	function updateProp(vm, prop, value) {
	  processPropValue(vm, prop, value, function (value) {
	    vm[prop.path] = value;
	  });
	}

	/**
	 * Get the default value of a prop.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @return {*}
	 */

	function getPropDefaultValue(vm, prop) {
	  // no default, return undefined
	  var options = prop.options;
	  if (!hasOwn(options, 'default')) {
	    // absent boolean value defaults to false
	    return options.type === Boolean ? false : undefined;
	  }
	  var def = options['default'];
	  // warn against non-factory defaults for Object & Array
	  if (isObject(def)) {
	    process.env.NODE_ENV !== 'production' && warn('Invalid default value for prop "' + prop.name + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && options.type !== Function ? def.call(vm) : def;
	}

	/**
	 * Assert whether a prop is valid.
	 *
	 * @param {Object} prop
	 * @param {*} value
	 * @param {Vue} vm
	 */

	function assertProp(prop, value, vm) {
	  if (!prop.options.required && ( // non-required
	  prop.raw === null || // abscent
	  value == null) // null or undefined
	  ) {
	      return true;
	    }
	  var options = prop.options;
	  var type = options.type;
	  var valid = !type;
	  var expectedTypes = [];
	  if (type) {
	    if (!isArray(type)) {
	      type = [type];
	    }
	    for (var i = 0; i < type.length && !valid; i++) {
	      var assertedType = assertType(value, type[i]);
	      expectedTypes.push(assertedType.expectedType);
	      valid = assertedType.valid;
	    }
	  }
	  if (!valid) {
	    if (process.env.NODE_ENV !== 'production') {
	      warn('Invalid prop: type check failed for prop "' + prop.name + '".' + ' Expected ' + expectedTypes.map(formatType).join(', ') + ', got ' + formatValue(value) + '.', vm);
	    }
	    return false;
	  }
	  var validator = options.validator;
	  if (validator) {
	    if (!validator(value)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop: custom validator check failed for prop "' + prop.name + '".', vm);
	      return false;
	    }
	  }
	  return true;
	}

	/**
	 * Force parsing value with coerce option.
	 *
	 * @param {*} value
	 * @param {Object} options
	 * @return {*}
	 */

	function coerceProp(prop, value, vm) {
	  var coerce = prop.options.coerce;
	  if (!coerce) {
	    return value;
	  }
	  if (typeof coerce === 'function') {
	    return coerce(value);
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid coerce for prop "' + prop.name + '": expected function, got ' + typeof coerce + '.', vm);
	    return value;
	  }
	}

	/**
	 * Assert the type of a value
	 *
	 * @param {*} value
	 * @param {Function} type
	 * @return {Object}
	 */

	function assertType(value, type) {
	  var valid;
	  var expectedType;
	  if (type === String) {
	    expectedType = 'string';
	    valid = typeof value === expectedType;
	  } else if (type === Number) {
	    expectedType = 'number';
	    valid = typeof value === expectedType;
	  } else if (type === Boolean) {
	    expectedType = 'boolean';
	    valid = typeof value === expectedType;
	  } else if (type === Function) {
	    expectedType = 'function';
	    valid = typeof value === expectedType;
	  } else if (type === Object) {
	    expectedType = 'object';
	    valid = isPlainObject(value);
	  } else if (type === Array) {
	    expectedType = 'array';
	    valid = isArray(value);
	  } else {
	    valid = value instanceof type;
	  }
	  return {
	    valid: valid,
	    expectedType: expectedType
	  };
	}

	/**
	 * Format type for output
	 *
	 * @param {String} type
	 * @return {String}
	 */

	function formatType(type) {
	  return type ? type.charAt(0).toUpperCase() + type.slice(1) : 'custom type';
	}

	/**
	 * Format value
	 *
	 * @param {*} value
	 * @return {String}
	 */

	function formatValue(val) {
	  return Object.prototype.toString.call(val).slice(8, -1);
	}

	var bindingModes = config._propBindingModes;

	var propDef = {

	  bind: function bind() {
	    var child = this.vm;
	    var parent = child._context;
	    // passed in from compiler directly
	    var prop = this.descriptor.prop;
	    var childKey = prop.path;
	    var parentKey = prop.parentPath;
	    var twoWay = prop.mode === bindingModes.TWO_WAY;

	    var parentWatcher = this.parentWatcher = new Watcher(parent, parentKey, function (val) {
	      updateProp(child, prop, val);
	    }, {
	      twoWay: twoWay,
	      filters: prop.filters,
	      // important: props need to be observed on the
	      // v-for scope if present
	      scope: this._scope
	    });

	    // set the child initial value.
	    initProp(child, prop, parentWatcher.value);

	    // setup two-way binding
	    if (twoWay) {
	      // important: defer the child watcher creation until
	      // the created hook (after data observation)
	      var self = this;
	      child.$once('pre-hook:created', function () {
	        self.childWatcher = new Watcher(child, childKey, function (val) {
	          parentWatcher.set(val);
	        }, {
	          // ensure sync upward before parent sync down.
	          // this is necessary in cases e.g. the child
	          // mutates a prop array, then replaces it. (#1683)
	          sync: true
	        });
	      });
	    }
	  },

	  unbind: function unbind() {
	    this.parentWatcher.teardown();
	    if (this.childWatcher) {
	      this.childWatcher.teardown();
	    }
	  }
	};

	var queue$1 = [];
	var queued = false;

	/**
	 * Push a job into the queue.
	 *
	 * @param {Function} job
	 */

	function pushJob(job) {
	  queue$1.push(job);
	  if (!queued) {
	    queued = true;
	    nextTick(flush);
	  }
	}

	/**
	 * Flush the queue, and do one forced reflow before
	 * triggering transitions.
	 */

	function flush() {
	  // Force layout
	  var f = document.documentElement.offsetHeight;
	  for (var i = 0; i < queue$1.length; i++) {
	    queue$1[i]();
	  }
	  queue$1 = [];
	  queued = false;
	  // dummy return, so js linters don't complain about
	  // unused variable f
	  return f;
	}

	var TYPE_TRANSITION = 'transition';
	var TYPE_ANIMATION = 'animation';
	var transDurationProp = transitionProp + 'Duration';
	var animDurationProp = animationProp + 'Duration';

	/**
	 * If a just-entered element is applied the
	 * leave class while its enter transition hasn't started yet,
	 * and the transitioned property has the same value for both
	 * enter/leave, then the leave transition will be skipped and
	 * the transitionend event never fires. This function ensures
	 * its callback to be called after a transition has started
	 * by waiting for double raf.
	 *
	 * It falls back to setTimeout on devices that support CSS
	 * transitions but not raf (e.g. Android 4.2 browser) - since
	 * these environments are usually slow, we are giving it a
	 * relatively large timeout.
	 */

	var raf = inBrowser && window.requestAnimationFrame;
	var waitForTransitionStart = raf
	/* istanbul ignore next */
	? function (fn) {
	  raf(function () {
	    raf(fn);
	  });
	} : function (fn) {
	  setTimeout(fn, 50);
	};

	/**
	 * A Transition object that encapsulates the state and logic
	 * of the transition.
	 *
	 * @param {Element} el
	 * @param {String} id
	 * @param {Object} hooks
	 * @param {Vue} vm
	 */
	function Transition(el, id, hooks, vm) {
	  this.id = id;
	  this.el = el;
	  this.enterClass = hooks && hooks.enterClass || id + '-enter';
	  this.leaveClass = hooks && hooks.leaveClass || id + '-leave';
	  this.hooks = hooks;
	  this.vm = vm;
	  // async state
	  this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;
	  this.justEntered = false;
	  this.entered = this.left = false;
	  this.typeCache = {};
	  // check css transition type
	  this.type = hooks && hooks.type;
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV !== 'production') {
	    if (this.type && this.type !== TYPE_TRANSITION && this.type !== TYPE_ANIMATION) {
	      warn('invalid CSS transition type for transition="' + this.id + '": ' + this.type, vm);
	    }
	  }
	  // bind
	  var self = this;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone'].forEach(function (m) {
	    self[m] = bind(self[m], self);
	  });
	}

	var p$1 = Transition.prototype;

	/**
	 * Start an entering transition.
	 *
	 * 1. enter transition triggered
	 * 2. call beforeEnter hook
	 * 3. add enter class
	 * 4. insert/show element
	 * 5. call enter hook (with possible explicit js callback)
	 * 6. reflow
	 * 7. based on transition type:
	 *    - transition:
	 *        remove class now, wait for transitionend,
	 *        then done if there's no explicit js callback.
	 *    - animation:
	 *        wait for animationend, remove class,
	 *        then done if there's no explicit js callback.
	 *    - no css transition:
	 *        done now if there's no explicit js callback.
	 * 8. wait for either done or js callback, then call
	 *    afterEnter hook.
	 *
	 * @param {Function} op - insert/show the element
	 * @param {Function} [cb]
	 */

	p$1.enter = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeEnter');
	  this.cb = cb;
	  addClass(this.el, this.enterClass);
	  op();
	  this.entered = false;
	  this.callHookWithCb('enter');
	  if (this.entered) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.enterCancelled;
	  pushJob(this.enterNextTick);
	};

	/**
	 * The "nextTick" phase of an entering transition, which is
	 * to be pushed into a queue and executed after a reflow so
	 * that removing the class can trigger a CSS transition.
	 */

	p$1.enterNextTick = function () {
	  var _this = this;

	  // prevent transition skipping
	  this.justEntered = true;
	  waitForTransitionStart(function () {
	    _this.justEntered = false;
	  });
	  var enterDone = this.enterDone;
	  var type = this.getCssTransitionType(this.enterClass);
	  if (!this.pendingJsCb) {
	    if (type === TYPE_TRANSITION) {
	      // trigger transition by removing enter class now
	      removeClass(this.el, this.enterClass);
	      this.setupCssCb(transitionEndEvent, enterDone);
	    } else if (type === TYPE_ANIMATION) {
	      this.setupCssCb(animationEndEvent, enterDone);
	    } else {
	      enterDone();
	    }
	  } else if (type === TYPE_TRANSITION) {
	    removeClass(this.el, this.enterClass);
	  }
	};

	/**
	 * The "cleanup" phase of an entering transition.
	 */

	p$1.enterDone = function () {
	  this.entered = true;
	  this.cancel = this.pendingJsCb = null;
	  removeClass(this.el, this.enterClass);
	  this.callHook('afterEnter');
	  if (this.cb) this.cb();
	};

	/**
	 * Start a leaving transition.
	 *
	 * 1. leave transition triggered.
	 * 2. call beforeLeave hook
	 * 3. add leave class (trigger css transition)
	 * 4. call leave hook (with possible explicit js callback)
	 * 5. reflow if no explicit js callback is provided
	 * 6. based on transition type:
	 *    - transition or animation:
	 *        wait for end event, remove class, then done if
	 *        there's no explicit js callback.
	 *    - no css transition:
	 *        done if there's no explicit js callback.
	 * 7. wait for either done or js callback, then call
	 *    afterLeave hook.
	 *
	 * @param {Function} op - remove/hide the element
	 * @param {Function} [cb]
	 */

	p$1.leave = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeLeave');
	  this.op = op;
	  this.cb = cb;
	  addClass(this.el, this.leaveClass);
	  this.left = false;
	  this.callHookWithCb('leave');
	  if (this.left) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.leaveCancelled;
	  // only need to handle leaveDone if
	  // 1. the transition is already done (synchronously called
	  //    by the user, which causes this.op set to null)
	  // 2. there's no explicit js callback
	  if (this.op && !this.pendingJsCb) {
	    // if a CSS transition leaves immediately after enter,
	    // the transitionend event never fires. therefore we
	    // detect such cases and end the leave immediately.
	    if (this.justEntered) {
	      this.leaveDone();
	    } else {
	      pushJob(this.leaveNextTick);
	    }
	  }
	};

	/**
	 * The "nextTick" phase of a leaving transition.
	 */

	p$1.leaveNextTick = function () {
	  var type = this.getCssTransitionType(this.leaveClass);
	  if (type) {
	    var event = type === TYPE_TRANSITION ? transitionEndEvent : animationEndEvent;
	    this.setupCssCb(event, this.leaveDone);
	  } else {
	    this.leaveDone();
	  }
	};

	/**
	 * The "cleanup" phase of a leaving transition.
	 */

	p$1.leaveDone = function () {
	  this.left = true;
	  this.cancel = this.pendingJsCb = null;
	  this.op();
	  removeClass(this.el, this.leaveClass);
	  this.callHook('afterLeave');
	  if (this.cb) this.cb();
	  this.op = null;
	};

	/**
	 * Cancel any pending callbacks from a previously running
	 * but not finished transition.
	 */

	p$1.cancelPending = function () {
	  this.op = this.cb = null;
	  var hasPending = false;
	  if (this.pendingCssCb) {
	    hasPending = true;
	    off(this.el, this.pendingCssEvent, this.pendingCssCb);
	    this.pendingCssEvent = this.pendingCssCb = null;
	  }
	  if (this.pendingJsCb) {
	    hasPending = true;
	    this.pendingJsCb.cancel();
	    this.pendingJsCb = null;
	  }
	  if (hasPending) {
	    removeClass(this.el, this.enterClass);
	    removeClass(this.el, this.leaveClass);
	  }
	  if (this.cancel) {
	    this.cancel.call(this.vm, this.el);
	    this.cancel = null;
	  }
	};

	/**
	 * Call a user-provided synchronous hook function.
	 *
	 * @param {String} type
	 */

	p$1.callHook = function (type) {
	  if (this.hooks && this.hooks[type]) {
	    this.hooks[type].call(this.vm, this.el);
	  }
	};

	/**
	 * Call a user-provided, potentially-async hook function.
	 * We check for the length of arguments to see if the hook
	 * expects a `done` callback. If true, the transition's end
	 * will be determined by when the user calls that callback;
	 * otherwise, the end is determined by the CSS transition or
	 * animation.
	 *
	 * @param {String} type
	 */

	p$1.callHookWithCb = function (type) {
	  var hook = this.hooks && this.hooks[type];
	  if (hook) {
	    if (hook.length > 1) {
	      this.pendingJsCb = cancellable(this[type + 'Done']);
	    }
	    hook.call(this.vm, this.el, this.pendingJsCb);
	  }
	};

	/**
	 * Get an element's transition type based on the
	 * calculated styles.
	 *
	 * @param {String} className
	 * @return {Number}
	 */

	p$1.getCssTransitionType = function (className) {
	  /* istanbul ignore if */
	  if (!transitionEndEvent ||
	  // skip CSS transitions if page is not visible -
	  // this solves the issue of transitionend events not
	  // firing until the page is visible again.
	  // pageVisibility API is supported in IE10+, same as
	  // CSS transitions.
	  document.hidden ||
	  // explicit js-only transition
	  this.hooks && this.hooks.css === false ||
	  // element is hidden
	  isHidden(this.el)) {
	    return;
	  }
	  var type = this.type || this.typeCache[className];
	  if (type) return type;
	  var inlineStyles = this.el.style;
	  var computedStyles = window.getComputedStyle(this.el);
	  var transDuration = inlineStyles[transDurationProp] || computedStyles[transDurationProp];
	  if (transDuration && transDuration !== '0s') {
	    type = TYPE_TRANSITION;
	  } else {
	    var animDuration = inlineStyles[animDurationProp] || computedStyles[animDurationProp];
	    if (animDuration && animDuration !== '0s') {
	      type = TYPE_ANIMATION;
	    }
	  }
	  if (type) {
	    this.typeCache[className] = type;
	  }
	  return type;
	};

	/**
	 * Setup a CSS transitionend/animationend callback.
	 *
	 * @param {String} event
	 * @param {Function} cb
	 */

	p$1.setupCssCb = function (event, cb) {
	  this.pendingCssEvent = event;
	  var self = this;
	  var el = this.el;
	  var onEnd = this.pendingCssCb = function (e) {
	    if (e.target === el) {
	      off(el, event, onEnd);
	      self.pendingCssEvent = self.pendingCssCb = null;
	      if (!self.pendingJsCb && cb) {
	        cb();
	      }
	    }
	  };
	  on(el, event, onEnd);
	};

	/**
	 * Check if an element is hidden - in that case we can just
	 * skip the transition alltogether.
	 *
	 * @param {Element} el
	 * @return {Boolean}
	 */

	function isHidden(el) {
	  if (/svg$/.test(el.namespaceURI)) {
	    // SVG elements do not have offset(Width|Height)
	    // so we need to check the client rect
	    var rect = el.getBoundingClientRect();
	    return !(rect.width || rect.height);
	  } else {
	    return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
	  }
	}

	var transition$1 = {

	  priority: TRANSITION,

	  update: function update(id, oldId) {
	    var el = this.el;
	    // resolve on owner vm
	    var hooks = resolveAsset(this.vm.$options, 'transitions', id);
	    id = id || 'v';
	    oldId = oldId || 'v';
	    el.__v_trans = new Transition(el, id, hooks, this.vm);
	    removeClass(el, oldId + '-transition');
	    addClass(el, id + '-transition');
	  }
	};

	var internalDirectives = {
	  style: style,
	  'class': vClass,
	  component: component,
	  prop: propDef,
	  transition: transition$1
	};

	// special binding prefixes
	var bindRE = /^v-bind:|^:/;
	var onRE = /^v-on:|^@/;
	var dirAttrRE = /^v-([^:]+)(?:$|:(.*)$)/;
	var modifierRE = /\.[^\.]+/g;
	var transitionRE = /^(v-bind:|:)?transition$/;

	// default directive priority
	var DEFAULT_PRIORITY = 1000;
	var DEFAULT_TERMINAL_PRIORITY = 2000;

	/**
	 * Compile a template and return a reusable composite link
	 * function, which recursively contains more link functions
	 * inside. This top level compile function would normally
	 * be called on instance root nodes, but can also be used
	 * for partial compilation if the partial argument is true.
	 *
	 * The returned composite link function, when called, will
	 * return an unlink function that tearsdown all directives
	 * created during the linking phase.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Object} options
	 * @param {Boolean} partial
	 * @return {Function}
	 */

	function compile(el, options, partial) {
	  // link function for the node itself.
	  var nodeLinkFn = partial || !options._asComponent ? compileNode(el, options) : null;
	  // link function for the childNodes
	  var childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && !isScript(el) && el.hasChildNodes() ? compileNodeList(el.childNodes, options) : null;

	  /**
	   * A composite linker function to be called on a already
	   * compiled piece of DOM, which instantiates all directive
	   * instances.
	   *
	   * @param {Vue} vm
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host] - host vm of transcluded content
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - link context fragment
	   * @return {Function|undefined}
	   */

	  return function compositeLinkFn(vm, el, host, scope, frag) {
	    // cache childNodes before linking parent, fix #657
	    var childNodes = toArray(el.childNodes);
	    // link
	    var dirs = linkAndCapture(function compositeLinkCapturer() {
	      if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag);
	      if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag);
	    }, vm);
	    return makeUnlinkFn(vm, dirs);
	  };
	}

	/**
	 * Apply a linker to a vm/element pair and capture the
	 * directives created during the process.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 */

	function linkAndCapture(linker, vm) {
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV === 'production') {
	    // reset directives before every capture in production
	    // mode, so that when unlinking we don't need to splice
	    // them out (which turns out to be a perf hit).
	    // they are kept in development mode because they are
	    // useful for Vue's own tests.
	    vm._directives = [];
	  }
	  var originalDirCount = vm._directives.length;
	  linker();
	  var dirs = vm._directives.slice(originalDirCount);
	  sortDirectives(dirs);
	  for (var i = 0, l = dirs.length; i < l; i++) {
	    dirs[i]._bind();
	  }
	  return dirs;
	}

	/**
	 * sort directives by priority (stable sort)
	 *
	 * @param {Array} dirs
	 */
	function sortDirectives(dirs) {
	  if (dirs.length === 0) return;

	  var groupedMap = {};
	  var i, j, k, l;
	  var index = 0;
	  var priorities = [];
	  for (i = 0, j = dirs.length; i < j; i++) {
	    var dir = dirs[i];
	    var priority = dir.descriptor.def.priority || DEFAULT_PRIORITY;
	    var array = groupedMap[priority];
	    if (!array) {
	      array = groupedMap[priority] = [];
	      priorities.push(priority);
	    }
	    array.push(dir);
	  }

	  priorities.sort(function (a, b) {
	    return a > b ? -1 : a === b ? 0 : 1;
	  });
	  for (i = 0, j = priorities.length; i < j; i++) {
	    var group = groupedMap[priorities[i]];
	    for (k = 0, l = group.length; k < l; k++) {
	      dirs[index++] = group[k];
	    }
	  }
	}

	/**
	 * Linker functions return an unlink function that
	 * tearsdown all directives instances generated during
	 * the process.
	 *
	 * We create unlink functions with only the necessary
	 * information to avoid retaining additional closures.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Vue} [context]
	 * @param {Array} [contextDirs]
	 * @return {Function}
	 */

	function makeUnlinkFn(vm, dirs, context, contextDirs) {
	  function unlink(destroying) {
	    teardownDirs(vm, dirs, destroying);
	    if (context && contextDirs) {
	      teardownDirs(context, contextDirs);
	    }
	  }
	  // expose linked directives
	  unlink.dirs = dirs;
	  return unlink;
	}

	/**
	 * Teardown partial linked directives.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Boolean} destroying
	 */

	function teardownDirs(vm, dirs, destroying) {
	  var i = dirs.length;
	  while (i--) {
	    dirs[i]._teardown();
	    if (process.env.NODE_ENV !== 'production' && !destroying) {
	      vm._directives.$remove(dirs[i]);
	    }
	  }
	}

	/**
	 * Compile link props on an instance.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} props
	 * @param {Object} [scope]
	 * @return {Function}
	 */

	function compileAndLinkProps(vm, el, props, scope) {
	  var propsLinkFn = compileProps(el, props, vm);
	  var propDirs = linkAndCapture(function () {
	    propsLinkFn(vm, scope);
	  }, vm);
	  return makeUnlinkFn(vm, propDirs);
	}

	/**
	 * Compile the root element of an instance.
	 *
	 * 1. attrs on context container (context scope)
	 * 2. attrs on the component template root node, if
	 *    replace:true (child scope)
	 *
	 * If this is a fragment instance, we only need to compile 1.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @param {Object} contextOptions
	 * @return {Function}
	 */

	function compileRoot(el, options, contextOptions) {
	  var containerAttrs = options._containerAttrs;
	  var replacerAttrs = options._replacerAttrs;
	  var contextLinkFn, replacerLinkFn;

	  // only need to compile other attributes for
	  // non-fragment instances
	  if (el.nodeType !== 11) {
	    // for components, container and replacer need to be
	    // compiled separately and linked in different scopes.
	    if (options._asComponent) {
	      // 2. container attributes
	      if (containerAttrs && contextOptions) {
	        contextLinkFn = compileDirectives(containerAttrs, contextOptions);
	      }
	      if (replacerAttrs) {
	        // 3. replacer attributes
	        replacerLinkFn = compileDirectives(replacerAttrs, options);
	      }
	    } else {
	      // non-component, just compile as a normal element.
	      replacerLinkFn = compileDirectives(el.attributes, options);
	    }
	  } else if (process.env.NODE_ENV !== 'production' && containerAttrs) {
	    // warn container directives for fragment instances
	    var names = containerAttrs.filter(function (attr) {
	      // allow vue-loader/vueify scoped css attributes
	      return attr.name.indexOf('_v-') < 0 &&
	      // allow event listeners
	      !onRE.test(attr.name) &&
	      // allow slots
	      attr.name !== 'slot';
	    }).map(function (attr) {
	      return '"' + attr.name + '"';
	    });
	    if (names.length) {
	      var plural = names.length > 1;

	      var componentName = options.el.tagName.toLowerCase();
	      if (componentName === 'component' && options.name) {
	        componentName += ':' + options.name;
	      }

	      warn('Attribute' + (plural ? 's ' : ' ') + names.join(', ') + (plural ? ' are' : ' is') + ' ignored on component ' + '<' + componentName + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment-Instance');
	    }
	  }

	  options._containerAttrs = options._replacerAttrs = null;
	  return function rootLinkFn(vm, el, scope) {
	    // link context scope dirs
	    var context = vm._context;
	    var contextDirs;
	    if (context && contextLinkFn) {
	      contextDirs = linkAndCapture(function () {
	        contextLinkFn(context, el, null, scope);
	      }, context);
	    }

	    // link self
	    var selfDirs = linkAndCapture(function () {
	      if (replacerLinkFn) replacerLinkFn(vm, el);
	    }, vm);

	    // return the unlink function that tearsdown context
	    // container directives.
	    return makeUnlinkFn(vm, selfDirs, context, contextDirs);
	  };
	}

	/**
	 * Compile a node and return a nodeLinkFn based on the
	 * node type.
	 *
	 * @param {Node} node
	 * @param {Object} options
	 * @return {Function|null}
	 */

	function compileNode(node, options) {
	  var type = node.nodeType;
	  if (type === 1 && !isScript(node)) {
	    return compileElement(node, options);
	  } else if (type === 3 && node.data.trim()) {
	    return compileTextNode(node, options);
	  } else {
	    return null;
	  }
	}

	/**
	 * Compile an element and return a nodeLinkFn.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|null}
	 */

	function compileElement(el, options) {
	  // preprocess textareas.
	  // textarea treats its text content as the initial value.
	  // just bind it as an attr directive for value.
	  if (el.tagName === 'TEXTAREA') {
	    // a textarea which has v-pre attr should skip complie.
	    if (getAttr(el, 'v-pre') !== null) {
	      return skip;
	    }
	    var tokens = parseText(el.value);
	    if (tokens) {
	      el.setAttribute(':value', tokensToExp(tokens));
	      el.value = '';
	    }
	  }
	  var linkFn;
	  var hasAttrs = el.hasAttributes();
	  var attrs = hasAttrs && toArray(el.attributes);
	  // check terminal directives (for & if)
	  if (hasAttrs) {
	    linkFn = checkTerminalDirectives(el, attrs, options);
	  }
	  // check element directives
	  if (!linkFn) {
	    linkFn = checkElementDirectives(el, options);
	  }
	  // check component
	  if (!linkFn) {
	    linkFn = checkComponent(el, options);
	  }
	  // normal directives
	  if (!linkFn && hasAttrs) {
	    linkFn = compileDirectives(attrs, options);
	  }
	  return linkFn;
	}

	/**
	 * Compile a textNode and return a nodeLinkFn.
	 *
	 * @param {TextNode} node
	 * @param {Object} options
	 * @return {Function|null} textNodeLinkFn
	 */

	function compileTextNode(node, options) {
	  // skip marked text nodes
	  if (node._skip) {
	    return removeText;
	  }

	  var tokens = parseText(node.wholeText);
	  if (!tokens) {
	    return null;
	  }

	  // mark adjacent text nodes as skipped,
	  // because we are using node.wholeText to compile
	  // all adjacent text nodes together. This fixes
	  // issues in IE where sometimes it splits up a single
	  // text node into multiple ones.
	  var next = node.nextSibling;
	  while (next && next.nodeType === 3) {
	    next._skip = true;
	    next = next.nextSibling;
	  }

	  var frag = document.createDocumentFragment();
	  var el, token;
	  for (var i = 0, l = tokens.length; i < l; i++) {
	    token = tokens[i];
	    el = token.tag ? processTextToken(token, options) : document.createTextNode(token.value);
	    frag.appendChild(el);
	  }
	  return makeTextNodeLinkFn(tokens, frag, options);
	}

	/**
	 * Linker for an skipped text node.
	 *
	 * @param {Vue} vm
	 * @param {Text} node
	 */

	function removeText(vm, node) {
	  remove(node);
	}

	/**
	 * Process a single text token.
	 *
	 * @param {Object} token
	 * @param {Object} options
	 * @return {Node}
	 */

	function processTextToken(token, options) {
	  var el;
	  if (token.oneTime) {
	    el = document.createTextNode(token.value);
	  } else {
	    if (token.html) {
	      el = document.createComment('v-html');
	      setTokenType('html');
	    } else {
	      // IE will clean up empty textNodes during
	      // frag.cloneNode(true), so we have to give it
	      // something here...
	      el = document.createTextNode(' ');
	      setTokenType('text');
	    }
	  }
	  function setTokenType(type) {
	    if (token.descriptor) return;
	    var parsed = parseDirective(token.value);
	    token.descriptor = {
	      name: type,
	      def: directives[type],
	      expression: parsed.expression,
	      filters: parsed.filters
	    };
	  }
	  return el;
	}

	/**
	 * Build a function that processes a textNode.
	 *
	 * @param {Array<Object>} tokens
	 * @param {DocumentFragment} frag
	 */

	function makeTextNodeLinkFn(tokens, frag) {
	  return function textNodeLinkFn(vm, el, host, scope) {
	    var fragClone = frag.cloneNode(true);
	    var childNodes = toArray(fragClone.childNodes);
	    var token, value, node;
	    for (var i = 0, l = tokens.length; i < l; i++) {
	      token = tokens[i];
	      value = token.value;
	      if (token.tag) {
	        node = childNodes[i];
	        if (token.oneTime) {
	          value = (scope || vm).$eval(value);
	          if (token.html) {
	            replace(node, parseTemplate(value, true));
	          } else {
	            node.data = _toString(value);
	          }
	        } else {
	          vm._bindDir(token.descriptor, node, host, scope);
	        }
	      }
	    }
	    replace(el, fragClone);
	  };
	}

	/**
	 * Compile a node list and return a childLinkFn.
	 *
	 * @param {NodeList} nodeList
	 * @param {Object} options
	 * @return {Function|undefined}
	 */

	function compileNodeList(nodeList, options) {
	  var linkFns = [];
	  var nodeLinkFn, childLinkFn, node;
	  for (var i = 0, l = nodeList.length; i < l; i++) {
	    node = nodeList[i];
	    nodeLinkFn = compileNode(node, options);
	    childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes() ? compileNodeList(node.childNodes, options) : null;
	    linkFns.push(nodeLinkFn, childLinkFn);
	  }
	  return linkFns.length ? makeChildLinkFn(linkFns) : null;
	}

	/**
	 * Make a child link function for a node's childNodes.
	 *
	 * @param {Array<Function>} linkFns
	 * @return {Function} childLinkFn
	 */

	function makeChildLinkFn(linkFns) {
	  return function childLinkFn(vm, nodes, host, scope, frag) {
	    var node, nodeLinkFn, childrenLinkFn;
	    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
	      node = nodes[n];
	      nodeLinkFn = linkFns[i++];
	      childrenLinkFn = linkFns[i++];
	      // cache childNodes before linking parent, fix #657
	      var childNodes = toArray(node.childNodes);
	      if (nodeLinkFn) {
	        nodeLinkFn(vm, node, host, scope, frag);
	      }
	      if (childrenLinkFn) {
	        childrenLinkFn(vm, childNodes, host, scope, frag);
	      }
	    }
	  };
	}

	/**
	 * Check for element directives (custom elements that should
	 * be resovled as terminal directives).
	 *
	 * @param {Element} el
	 * @param {Object} options
	 */

	function checkElementDirectives(el, options) {
	  var tag = el.tagName.toLowerCase();
	  if (commonTagRE.test(tag)) {
	    return;
	  }
	  var def = resolveAsset(options, 'elementDirectives', tag);
	  if (def) {
	    return makeTerminalNodeLinkFn(el, tag, '', options, def);
	  }
	}

	/**
	 * Check if an element is a component. If yes, return
	 * a component link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|undefined}
	 */

	function checkComponent(el, options) {
	  var component = checkComponentAttr(el, options);
	  if (component) {
	    var ref = findRef(el);
	    var descriptor = {
	      name: 'component',
	      ref: ref,
	      expression: component.id,
	      def: internalDirectives.component,
	      modifiers: {
	        literal: !component.dynamic
	      }
	    };
	    var componentLinkFn = function componentLinkFn(vm, el, host, scope, frag) {
	      if (ref) {
	        defineReactive((scope || vm).$refs, ref, null);
	      }
	      vm._bindDir(descriptor, el, host, scope, frag);
	    };
	    componentLinkFn.terminal = true;
	    return componentLinkFn;
	  }
	}

	/**
	 * Check an element for terminal directives in fixed order.
	 * If it finds one, return a terminal link function.
	 *
	 * @param {Element} el
	 * @param {Array} attrs
	 * @param {Object} options
	 * @return {Function} terminalLinkFn
	 */

	function checkTerminalDirectives(el, attrs, options) {
	  // skip v-pre
	  if (getAttr(el, 'v-pre') !== null) {
	    return skip;
	  }
	  // skip v-else block, but only if following v-if
	  if (el.hasAttribute('v-else')) {
	    var prev = el.previousElementSibling;
	    if (prev && prev.hasAttribute('v-if')) {
	      return skip;
	    }
	  }

	  var attr, name, value, modifiers, matched, dirName, rawName, arg, def, termDef;
	  for (var i = 0, j = attrs.length; i < j; i++) {
	    attr = attrs[i];
	    name = attr.name.replace(modifierRE, '');
	    if (matched = name.match(dirAttrRE)) {
	      def = resolveAsset(options, 'directives', matched[1]);
	      if (def && def.terminal) {
	        if (!termDef || (def.priority || DEFAULT_TERMINAL_PRIORITY) > termDef.priority) {
	          termDef = def;
	          rawName = attr.name;
	          modifiers = parseModifiers(attr.name);
	          value = attr.value;
	          dirName = matched[1];
	          arg = matched[2];
	        }
	      }
	    }
	  }

	  if (termDef) {
	    return makeTerminalNodeLinkFn(el, dirName, value, options, termDef, rawName, arg, modifiers);
	  }
	}

	function skip() {}
	skip.terminal = true;

	/**
	 * Build a node link function for a terminal directive.
	 * A terminal link function terminates the current
	 * compilation recursion and handles compilation of the
	 * subtree in the directive.
	 *
	 * @param {Element} el
	 * @param {String} dirName
	 * @param {String} value
	 * @param {Object} options
	 * @param {Object} def
	 * @param {String} [rawName]
	 * @param {String} [arg]
	 * @param {Object} [modifiers]
	 * @return {Function} terminalLinkFn
	 */

	function makeTerminalNodeLinkFn(el, dirName, value, options, def, rawName, arg, modifiers) {
	  var parsed = parseDirective(value);
	  var descriptor = {
	    name: dirName,
	    arg: arg,
	    expression: parsed.expression,
	    filters: parsed.filters,
	    raw: value,
	    attr: rawName,
	    modifiers: modifiers,
	    def: def
	  };
	  // check ref for v-for, v-if and router-view
	  if (dirName === 'for' || dirName === 'router-view') {
	    descriptor.ref = findRef(el);
	  }
	  var fn = function terminalNodeLinkFn(vm, el, host, scope, frag) {
	    if (descriptor.ref) {
	      defineReactive((scope || vm).$refs, descriptor.ref, null);
	    }
	    vm._bindDir(descriptor, el, host, scope, frag);
	  };
	  fn.terminal = true;
	  return fn;
	}

	/**
	 * Compile the directives on an element and return a linker.
	 *
	 * @param {Array|NamedNodeMap} attrs
	 * @param {Object} options
	 * @return {Function}
	 */

	function compileDirectives(attrs, options) {
	  var i = attrs.length;
	  var dirs = [];
	  var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens, matched;
	  while (i--) {
	    attr = attrs[i];
	    name = rawName = attr.name;
	    value = rawValue = attr.value;
	    tokens = parseText(value);
	    // reset arg
	    arg = null;
	    // check modifiers
	    modifiers = parseModifiers(name);
	    name = name.replace(modifierRE, '');

	    // attribute interpolations
	    if (tokens) {
	      value = tokensToExp(tokens);
	      arg = name;
	      pushDir('bind', directives.bind, tokens);
	      // warn against mixing mustaches with v-bind
	      if (process.env.NODE_ENV !== 'production') {
	        if (name === 'class' && Array.prototype.some.call(attrs, function (attr) {
	          return attr.name === ':class' || attr.name === 'v-bind:class';
	        })) {
	          warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.', options);
	        }
	      }
	    } else

	      // special attribute: transition
	      if (transitionRE.test(name)) {
	        modifiers.literal = !bindRE.test(name);
	        pushDir('transition', internalDirectives.transition);
	      } else

	        // event handlers
	        if (onRE.test(name)) {
	          arg = name.replace(onRE, '');
	          pushDir('on', directives.on);
	        } else

	          // attribute bindings
	          if (bindRE.test(name)) {
	            dirName = name.replace(bindRE, '');
	            if (dirName === 'style' || dirName === 'class') {
	              pushDir(dirName, internalDirectives[dirName]);
	            } else {
	              arg = dirName;
	              pushDir('bind', directives.bind);
	            }
	          } else

	            // normal directives
	            if (matched = name.match(dirAttrRE)) {
	              dirName = matched[1];
	              arg = matched[2];

	              // skip v-else (when used with v-show)
	              if (dirName === 'else') {
	                continue;
	              }

	              dirDef = resolveAsset(options, 'directives', dirName, true);
	              if (dirDef) {
	                pushDir(dirName, dirDef);
	              }
	            }
	  }

	  /**
	   * Push a directive.
	   *
	   * @param {String} dirName
	   * @param {Object|Function} def
	   * @param {Array} [interpTokens]
	   */

	  function pushDir(dirName, def, interpTokens) {
	    var hasOneTimeToken = interpTokens && hasOneTime(interpTokens);
	    var parsed = !hasOneTimeToken && parseDirective(value);
	    dirs.push({
	      name: dirName,
	      attr: rawName,
	      raw: rawValue,
	      def: def,
	      arg: arg,
	      modifiers: modifiers,
	      // conversion from interpolation strings with one-time token
	      // to expression is differed until directive bind time so that we
	      // have access to the actual vm context for one-time bindings.
	      expression: parsed && parsed.expression,
	      filters: parsed && parsed.filters,
	      interp: interpTokens,
	      hasOneTime: hasOneTimeToken
	    });
	  }

	  if (dirs.length) {
	    return makeNodeLinkFn(dirs);
	  }
	}

	/**
	 * Parse modifiers from directive attribute name.
	 *
	 * @param {String} name
	 * @return {Object}
	 */

	function parseModifiers(name) {
	  var res = Object.create(null);
	  var match = name.match(modifierRE);
	  if (match) {
	    var i = match.length;
	    while (i--) {
	      res[match[i].slice(1)] = true;
	    }
	  }
	  return res;
	}

	/**
	 * Build a link function for all directives on a single node.
	 *
	 * @param {Array} directives
	 * @return {Function} directivesLinkFn
	 */

	function makeNodeLinkFn(directives) {
	  return function nodeLinkFn(vm, el, host, scope, frag) {
	    // reverse apply because it's sorted low to high
	    var i = directives.length;
	    while (i--) {
	      vm._bindDir(directives[i], el, host, scope, frag);
	    }
	  };
	}

	/**
	 * Check if an interpolation string contains one-time tokens.
	 *
	 * @param {Array} tokens
	 * @return {Boolean}
	 */

	function hasOneTime(tokens) {
	  var i = tokens.length;
	  while (i--) {
	    if (tokens[i].oneTime) return true;
	  }
	}

	function isScript(el) {
	  return el.tagName === 'SCRIPT' && (!el.hasAttribute('type') || el.getAttribute('type') === 'text/javascript');
	}

	var specialCharRE = /[^\w\-:\.]/;

	/**
	 * Process an element or a DocumentFragment based on a
	 * instance option object. This allows us to transclude
	 * a template node/fragment before the instance is created,
	 * so the processed fragment can then be cloned and reused
	 * in v-for.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */

	function transclude(el, options) {
	  // extract container attributes to pass them down
	  // to compiler, because they need to be compiled in
	  // parent scope. we are mutating the options object here
	  // assuming the same object will be used for compile
	  // right after this.
	  if (options) {
	    options._containerAttrs = extractAttrs(el);
	  }
	  // for template tags, what we want is its content as
	  // a documentFragment (for fragment instances)
	  if (isTemplate(el)) {
	    el = parseTemplate(el);
	  }
	  if (options) {
	    if (options._asComponent && !options.template) {
	      options.template = '<slot></slot>';
	    }
	    if (options.template) {
	      options._content = extractContent(el);
	      el = transcludeTemplate(el, options);
	    }
	  }
	  if (isFragment(el)) {
	    // anchors for fragment instance
	    // passing in `persist: true` to avoid them being
	    // discarded by IE during template cloning
	    prepend(createAnchor('v-start', true), el);
	    el.appendChild(createAnchor('v-end', true));
	  }
	  return el;
	}

	/**
	 * Process the template option.
	 * If the replace option is true this will swap the $el.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */

	function transcludeTemplate(el, options) {
	  var template = options.template;
	  var frag = parseTemplate(template, true);
	  if (frag) {
	    var replacer = frag.firstChild;
	    if (!replacer) {
	      return frag;
	    }
	    var tag = replacer.tagName && replacer.tagName.toLowerCase();
	    if (options.replace) {
	      /* istanbul ignore if */
	      if (el === document.body) {
	        process.env.NODE_ENV !== 'production' && warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');
	      }
	      // there are many cases where the instance must
	      // become a fragment instance: basically anything that
	      // can create more than 1 root nodes.
	      if (
	      // multi-children template
	      frag.childNodes.length > 1 ||
	      // non-element template
	      replacer.nodeType !== 1 ||
	      // single nested component
	      tag === 'component' || resolveAsset(options, 'components', tag) || hasBindAttr(replacer, 'is') ||
	      // element directive
	      resolveAsset(options, 'elementDirectives', tag) ||
	      // for block
	      replacer.hasAttribute('v-for') ||
	      // if block
	      replacer.hasAttribute('v-if')) {
	        return frag;
	      } else {
	        options._replacerAttrs = extractAttrs(replacer);
	        mergeAttrs(el, replacer);
	        return replacer;
	      }
	    } else {
	      el.appendChild(frag);
	      return el;
	    }
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid template option: ' + template);
	  }
	}

	/**
	 * Helper to extract a component container's attributes
	 * into a plain object array.
	 *
	 * @param {Element} el
	 * @return {Array}
	 */

	function extractAttrs(el) {
	  if (el.nodeType === 1 && el.hasAttributes()) {
	    return toArray(el.attributes);
	  }
	}

	/**
	 * Merge the attributes of two elements, and make sure
	 * the class names are merged properly.
	 *
	 * @param {Element} from
	 * @param {Element} to
	 */

	function mergeAttrs(from, to) {
	  var attrs = from.attributes;
	  var i = attrs.length;
	  var name, value;
	  while (i--) {
	    name = attrs[i].name;
	    value = attrs[i].value;
	    if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
	      to.setAttribute(name, value);
	    } else if (name === 'class' && !parseText(value) && (value = value.trim())) {
	      value.split(/\s+/).forEach(function (cls) {
	        addClass(to, cls);
	      });
	    }
	  }
	}

	/**
	 * Scan and determine slot content distribution.
	 * We do this during transclusion instead at compile time so that
	 * the distribution is decoupled from the compilation order of
	 * the slots.
	 *
	 * @param {Element|DocumentFragment} template
	 * @param {Element} content
	 * @param {Vue} vm
	 */

	function resolveSlots(vm, content) {
	  if (!content) {
	    return;
	  }
	  var contents = vm._slotContents = Object.create(null);
	  var el, name;
	  for (var i = 0, l = content.children.length; i < l; i++) {
	    el = content.children[i];
	    /* eslint-disable no-cond-assign */
	    if (name = el.getAttribute('slot')) {
	      (contents[name] || (contents[name] = [])).push(el);
	    }
	    /* eslint-enable no-cond-assign */
	    if (process.env.NODE_ENV !== 'production' && getBindAttr(el, 'slot')) {
	      warn('The "slot" attribute must be static.', vm.$parent);
	    }
	  }
	  for (name in contents) {
	    contents[name] = extractFragment(contents[name], content);
	  }
	  if (content.hasChildNodes()) {
	    var nodes = content.childNodes;
	    if (nodes.length === 1 && nodes[0].nodeType === 3 && !nodes[0].data.trim()) {
	      return;
	    }
	    contents['default'] = extractFragment(content.childNodes, content);
	  }
	}

	/**
	 * Extract qualified content nodes from a node list.
	 *
	 * @param {NodeList} nodes
	 * @return {DocumentFragment}
	 */

	function extractFragment(nodes, parent) {
	  var frag = document.createDocumentFragment();
	  nodes = toArray(nodes);
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    var node = nodes[i];
	    if (isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')) {
	      parent.removeChild(node);
	      node = parseTemplate(node, true);
	    }
	    frag.appendChild(node);
	  }
	  return frag;
	}



	var compiler = Object.freeze({
		compile: compile,
		compileAndLinkProps: compileAndLinkProps,
		compileRoot: compileRoot,
		transclude: transclude,
		resolveSlots: resolveSlots
	});

	function stateMixin (Vue) {
	  /**
	   * Accessor for `$data` property, since setting $data
	   * requires observing the new object and updating
	   * proxied properties.
	   */

	  Object.defineProperty(Vue.prototype, '$data', {
	    get: function get() {
	      return this._data;
	    },
	    set: function set(newData) {
	      if (newData !== this._data) {
	        this._setData(newData);
	      }
	    }
	  });

	  /**
	   * Setup the scope of an instance, which contains:
	   * - observed data
	   * - computed properties
	   * - user methods
	   * - meta properties
	   */

	  Vue.prototype._initState = function () {
	    this._initProps();
	    this._initMeta();
	    this._initMethods();
	    this._initData();
	    this._initComputed();
	  };

	  /**
	   * Initialize props.
	   */

	  Vue.prototype._initProps = function () {
	    var options = this.$options;
	    var el = options.el;
	    var props = options.props;
	    if (props && !el) {
	      process.env.NODE_ENV !== 'production' && warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.', this);
	    }
	    // make sure to convert string selectors into element now
	    el = options.el = query(el);
	    this._propsUnlinkFn = el && el.nodeType === 1 && props
	    // props must be linked in proper scope if inside v-for
	    ? compileAndLinkProps(this, el, props, this._scope) : null;
	  };

	  /**
	   * Initialize the data.
	   */

	  Vue.prototype._initData = function () {
	    var dataFn = this.$options.data;
	    var data = this._data = dataFn ? dataFn() : {};
	    if (!isPlainObject(data)) {
	      data = {};
	      process.env.NODE_ENV !== 'production' && warn('data functions should return an object.', this);
	    }
	    var props = this._props;
	    // proxy data on instance
	    var keys = Object.keys(data);
	    var i, key;
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      // there are two scenarios where we can proxy a data key:
	      // 1. it's not already defined as a prop
	      // 2. it's provided via a instantiation option AND there are no
	      //    template prop present
	      if (!props || !hasOwn(props, key)) {
	        this._proxy(key);
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('Data field "' + key + '" is already defined ' + 'as a prop. To provide default value for a prop, use the "default" ' + 'prop option; if you want to pass prop values to an instantiation ' + 'call, use the "propsData" option.', this);
	      }
	    }
	    // observe data
	    observe(data, this);
	  };

	  /**
	   * Swap the instance's $data. Called in $data's setter.
	   *
	   * @param {Object} newData
	   */

	  Vue.prototype._setData = function (newData) {
	    newData = newData || {};
	    var oldData = this._data;
	    this._data = newData;
	    var keys, key, i;
	    // unproxy keys not present in new data
	    keys = Object.keys(oldData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!(key in newData)) {
	        this._unproxy(key);
	      }
	    }
	    // proxy keys not already proxied,
	    // and trigger change for changed values
	    keys = Object.keys(newData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!hasOwn(this, key)) {
	        // new property
	        this._proxy(key);
	      }
	    }
	    oldData.__ob__.removeVm(this);
	    observe(newData, this);
	    this._digest();
	  };

	  /**
	   * Proxy a property, so that
	   * vm.prop === vm._data.prop
	   *
	   * @param {String} key
	   */

	  Vue.prototype._proxy = function (key) {
	    if (!isReserved(key)) {
	      // need to store ref to self here
	      // because these getter/setters might
	      // be called by child scopes via
	      // prototype inheritance.
	      var self = this;
	      Object.defineProperty(self, key, {
	        configurable: true,
	        enumerable: true,
	        get: function proxyGetter() {
	          return self._data[key];
	        },
	        set: function proxySetter(val) {
	          self._data[key] = val;
	        }
	      });
	    }
	  };

	  /**
	   * Unproxy a property.
	   *
	   * @param {String} key
	   */

	  Vue.prototype._unproxy = function (key) {
	    if (!isReserved(key)) {
	      delete this[key];
	    }
	  };

	  /**
	   * Force update on every watcher in scope.
	   */

	  Vue.prototype._digest = function () {
	    for (var i = 0, l = this._watchers.length; i < l; i++) {
	      this._watchers[i].update(true); // shallow updates
	    }
	  };

	  /**
	   * Setup computed properties. They are essentially
	   * special getter/setters
	   */

	  function noop() {}
	  Vue.prototype._initComputed = function () {
	    var computed = this.$options.computed;
	    if (computed) {
	      for (var key in computed) {
	        var userDef = computed[key];
	        var def = {
	          enumerable: true,
	          configurable: true
	        };
	        if (typeof userDef === 'function') {
	          def.get = makeComputedGetter(userDef, this);
	          def.set = noop;
	        } else {
	          def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, this) : bind(userDef.get, this) : noop;
	          def.set = userDef.set ? bind(userDef.set, this) : noop;
	        }
	        Object.defineProperty(this, key, def);
	      }
	    }
	  };

	  function makeComputedGetter(getter, owner) {
	    var watcher = new Watcher(owner, getter, null, {
	      lazy: true
	    });
	    return function computedGetter() {
	      if (watcher.dirty) {
	        watcher.evaluate();
	      }
	      if (Dep.target) {
	        watcher.depend();
	      }
	      return watcher.value;
	    };
	  }

	  /**
	   * Setup instance methods. Methods must be bound to the
	   * instance since they might be passed down as a prop to
	   * child components.
	   */

	  Vue.prototype._initMethods = function () {
	    var methods = this.$options.methods;
	    if (methods) {
	      for (var key in methods) {
	        this[key] = bind(methods[key], this);
	      }
	    }
	  };

	  /**
	   * Initialize meta information like $index, $key & $value.
	   */

	  Vue.prototype._initMeta = function () {
	    var metas = this.$options._meta;
	    if (metas) {
	      for (var key in metas) {
	        defineReactive(this, key, metas[key]);
	      }
	    }
	  };
	}

	var eventRE = /^v-on:|^@/;

	function eventsMixin (Vue) {
	  /**
	   * Setup the instance's option events & watchers.
	   * If the value is a string, we pull it from the
	   * instance's methods by name.
	   */

	  Vue.prototype._initEvents = function () {
	    var options = this.$options;
	    if (options._asComponent) {
	      registerComponentEvents(this, options.el);
	    }
	    registerCallbacks(this, '$on', options.events);
	    registerCallbacks(this, '$watch', options.watch);
	  };

	  /**
	   * Register v-on events on a child component
	   *
	   * @param {Vue} vm
	   * @param {Element} el
	   */

	  function registerComponentEvents(vm, el) {
	    var attrs = el.attributes;
	    var name, value, handler;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      name = attrs[i].name;
	      if (eventRE.test(name)) {
	        name = name.replace(eventRE, '');
	        // force the expression into a statement so that
	        // it always dynamically resolves the method to call (#2670)
	        // kinda ugly hack, but does the job.
	        value = attrs[i].value;
	        if (isSimplePath(value)) {
	          value += '.apply(this, $arguments)';
	        }
	        handler = (vm._scope || vm._context).$eval(value, true);
	        handler._fromParent = true;
	        vm.$on(name.replace(eventRE), handler);
	      }
	    }
	  }

	  /**
	   * Register callbacks for option events and watchers.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {Object} hash
	   */

	  function registerCallbacks(vm, action, hash) {
	    if (!hash) return;
	    var handlers, key, i, j;
	    for (key in hash) {
	      handlers = hash[key];
	      if (isArray(handlers)) {
	        for (i = 0, j = handlers.length; i < j; i++) {
	          register(vm, action, key, handlers[i]);
	        }
	      } else {
	        register(vm, action, key, handlers);
	      }
	    }
	  }

	  /**
	   * Helper to register an event/watch callback.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {String} key
	   * @param {Function|String|Object} handler
	   * @param {Object} [options]
	   */

	  function register(vm, action, key, handler, options) {
	    var type = typeof handler;
	    if (type === 'function') {
	      vm[action](key, handler, options);
	    } else if (type === 'string') {
	      var methods = vm.$options.methods;
	      var method = methods && methods[handler];
	      if (method) {
	        vm[action](key, method, options);
	      } else {
	        process.env.NODE_ENV !== 'production' && warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".', vm);
	      }
	    } else if (handler && type === 'object') {
	      register(vm, action, key, handler.handler, handler);
	    }
	  }

	  /**
	   * Setup recursive attached/detached calls
	   */

	  Vue.prototype._initDOMHooks = function () {
	    this.$on('hook:attached', onAttached);
	    this.$on('hook:detached', onDetached);
	  };

	  /**
	   * Callback to recursively call attached hook on children
	   */

	  function onAttached() {
	    if (!this._isAttached) {
	      this._isAttached = true;
	      this.$children.forEach(callAttach);
	    }
	  }

	  /**
	   * Iterator to call attached hook
	   *
	   * @param {Vue} child
	   */

	  function callAttach(child) {
	    if (!child._isAttached && inDoc(child.$el)) {
	      child._callHook('attached');
	    }
	  }

	  /**
	   * Callback to recursively call detached hook on children
	   */

	  function onDetached() {
	    if (this._isAttached) {
	      this._isAttached = false;
	      this.$children.forEach(callDetach);
	    }
	  }

	  /**
	   * Iterator to call detached hook
	   *
	   * @param {Vue} child
	   */

	  function callDetach(child) {
	    if (child._isAttached && !inDoc(child.$el)) {
	      child._callHook('detached');
	    }
	  }

	  /**
	   * Trigger all handlers for a hook
	   *
	   * @param {String} hook
	   */

	  Vue.prototype._callHook = function (hook) {
	    this.$emit('pre-hook:' + hook);
	    var handlers = this.$options[hook];
	    if (handlers) {
	      for (var i = 0, j = handlers.length; i < j; i++) {
	        handlers[i].call(this);
	      }
	    }
	    this.$emit('hook:' + hook);
	  };
	}

	function noop$1() {}

	/**
	 * A directive links a DOM element with a piece of data,
	 * which is the result of evaluating an expression.
	 * It registers a watcher with the expression and calls
	 * the DOM update function when a change is triggered.
	 *
	 * @param {Object} descriptor
	 *                 - {String} name
	 *                 - {Object} def
	 *                 - {String} expression
	 *                 - {Array<Object>} [filters]
	 *                 - {Object} [modifiers]
	 *                 - {Boolean} literal
	 *                 - {String} attr
	 *                 - {String} arg
	 *                 - {String} raw
	 *                 - {String} [ref]
	 *                 - {Array<Object>} [interp]
	 *                 - {Boolean} [hasOneTime]
	 * @param {Vue} vm
	 * @param {Node} el
	 * @param {Vue} [host] - transclusion host component
	 * @param {Object} [scope] - v-for scope
	 * @param {Fragment} [frag] - owner fragment
	 * @constructor
	 */
	function Directive(descriptor, vm, el, host, scope, frag) {
	  this.vm = vm;
	  this.el = el;
	  // copy descriptor properties
	  this.descriptor = descriptor;
	  this.name = descriptor.name;
	  this.expression = descriptor.expression;
	  this.arg = descriptor.arg;
	  this.modifiers = descriptor.modifiers;
	  this.filters = descriptor.filters;
	  this.literal = this.modifiers && this.modifiers.literal;
	  // private
	  this._locked = false;
	  this._bound = false;
	  this._listeners = null;
	  // link context
	  this._host = host;
	  this._scope = scope;
	  this._frag = frag;
	  // store directives on node in dev mode
	  if (process.env.NODE_ENV !== 'production' && this.el) {
	    this.el._vue_directives = this.el._vue_directives || [];
	    this.el._vue_directives.push(this);
	  }
	}

	/**
	 * Initialize the directive, mixin definition properties,
	 * setup the watcher, call definition bind() and update()
	 * if present.
	 */

	Directive.prototype._bind = function () {
	  var name = this.name;
	  var descriptor = this.descriptor;

	  // remove attribute
	  if ((name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
	    var attr = descriptor.attr || 'v-' + name;
	    this.el.removeAttribute(attr);
	  }

	  // copy def properties
	  var def = descriptor.def;
	  if (typeof def === 'function') {
	    this.update = def;
	  } else {
	    extend(this, def);
	  }

	  // setup directive params
	  this._setupParams();

	  // initial bind
	  if (this.bind) {
	    this.bind();
	  }
	  this._bound = true;

	  if (this.literal) {
	    this.update && this.update(descriptor.raw);
	  } else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
	    // wrapped updater for context
	    var dir = this;
	    if (this.update) {
	      this._update = function (val, oldVal) {
	        if (!dir._locked) {
	          dir.update(val, oldVal);
	        }
	      };
	    } else {
	      this._update = noop$1;
	    }
	    var preProcess = this._preProcess ? bind(this._preProcess, this) : null;
	    var postProcess = this._postProcess ? bind(this._postProcess, this) : null;
	    var watcher = this._watcher = new Watcher(this.vm, this.expression, this._update, // callback
	    {
	      filters: this.filters,
	      twoWay: this.twoWay,
	      deep: this.deep,
	      preProcess: preProcess,
	      postProcess: postProcess,
	      scope: this._scope
	    });
	    // v-model with inital inline value need to sync back to
	    // model instead of update to DOM on init. They would
	    // set the afterBind hook to indicate that.
	    if (this.afterBind) {
	      this.afterBind();
	    } else if (this.update) {
	      this.update(watcher.value);
	    }
	  }
	};

	/**
	 * Setup all param attributes, e.g. track-by,
	 * transition-mode, etc...
	 */

	Directive.prototype._setupParams = function () {
	  if (!this.params) {
	    return;
	  }
	  var params = this.params;
	  // swap the params array with a fresh object.
	  this.params = Object.create(null);
	  var i = params.length;
	  var key, val, mappedKey;
	  while (i--) {
	    key = hyphenate(params[i]);
	    mappedKey = camelize(key);
	    val = getBindAttr(this.el, key);
	    if (val != null) {
	      // dynamic
	      this._setupParamWatcher(mappedKey, val);
	    } else {
	      // static
	      val = getAttr(this.el, key);
	      if (val != null) {
	        this.params[mappedKey] = val === '' ? true : val;
	      }
	    }
	  }
	};

	/**
	 * Setup a watcher for a dynamic param.
	 *
	 * @param {String} key
	 * @param {String} expression
	 */

	Directive.prototype._setupParamWatcher = function (key, expression) {
	  var self = this;
	  var called = false;
	  var unwatch = (this._scope || this.vm).$watch(expression, function (val, oldVal) {
	    self.params[key] = val;
	    // since we are in immediate mode,
	    // only call the param change callbacks if this is not the first update.
	    if (called) {
	      var cb = self.paramWatchers && self.paramWatchers[key];
	      if (cb) {
	        cb.call(self, val, oldVal);
	      }
	    } else {
	      called = true;
	    }
	  }, {
	    immediate: true,
	    user: false
	  });(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);
	};

	/**
	 * Check if the directive is a function caller
	 * and if the expression is a callable one. If both true,
	 * we wrap up the expression and use it as the event
	 * handler.
	 *
	 * e.g. on-click="a++"
	 *
	 * @return {Boolean}
	 */

	Directive.prototype._checkStatement = function () {
	  var expression = this.expression;
	  if (expression && this.acceptStatement && !isSimplePath(expression)) {
	    var fn = parseExpression$1(expression).get;
	    var scope = this._scope || this.vm;
	    var handler = function handler(e) {
	      scope.$event = e;
	      fn.call(scope, scope);
	      scope.$event = null;
	    };
	    if (this.filters) {
	      handler = scope._applyFilters(handler, null, this.filters);
	    }
	    this.update(handler);
	    return true;
	  }
	};

	/**
	 * Set the corresponding value with the setter.
	 * This should only be used in two-way directives
	 * e.g. v-model.
	 *
	 * @param {*} value
	 * @public
	 */

	Directive.prototype.set = function (value) {
	  /* istanbul ignore else */
	  if (this.twoWay) {
	    this._withLock(function () {
	      this._watcher.set(value);
	    });
	  } else if (process.env.NODE_ENV !== 'production') {
	    warn('Directive.set() can only be used inside twoWay' + 'directives.');
	  }
	};

	/**
	 * Execute a function while preventing that function from
	 * triggering updates on this directive instance.
	 *
	 * @param {Function} fn
	 */

	Directive.prototype._withLock = function (fn) {
	  var self = this;
	  self._locked = true;
	  fn.call(self);
	  nextTick(function () {
	    self._locked = false;
	  });
	};

	/**
	 * Convenience method that attaches a DOM event listener
	 * to the directive element and autometically tears it down
	 * during unbind.
	 *
	 * @param {String} event
	 * @param {Function} handler
	 * @param {Boolean} [useCapture]
	 */

	Directive.prototype.on = function (event, handler, useCapture) {
	  on(this.el, event, handler, useCapture);(this._listeners || (this._listeners = [])).push([event, handler]);
	};

	/**
	 * Teardown the watcher and call unbind.
	 */

	Directive.prototype._teardown = function () {
	  if (this._bound) {
	    this._bound = false;
	    if (this.unbind) {
	      this.unbind();
	    }
	    if (this._watcher) {
	      this._watcher.teardown();
	    }
	    var listeners = this._listeners;
	    var i;
	    if (listeners) {
	      i = listeners.length;
	      while (i--) {
	        off(this.el, listeners[i][0], listeners[i][1]);
	      }
	    }
	    var unwatchFns = this._paramUnwatchFns;
	    if (unwatchFns) {
	      i = unwatchFns.length;
	      while (i--) {
	        unwatchFns[i]();
	      }
	    }
	    if (process.env.NODE_ENV !== 'production' && this.el) {
	      this.el._vue_directives.$remove(this);
	    }
	    this.vm = this.el = this._watcher = this._listeners = null;
	  }
	};

	function lifecycleMixin (Vue) {
	  /**
	   * Update v-ref for component.
	   *
	   * @param {Boolean} remove
	   */

	  Vue.prototype._updateRef = function (remove) {
	    var ref = this.$options._ref;
	    if (ref) {
	      var refs = (this._scope || this._context).$refs;
	      if (remove) {
	        if (refs[ref] === this) {
	          refs[ref] = null;
	        }
	      } else {
	        refs[ref] = this;
	      }
	    }
	  };

	  /**
	   * Transclude, compile and link element.
	   *
	   * If a pre-compiled linker is available, that means the
	   * passed in element will be pre-transcluded and compiled
	   * as well - all we need to do is to call the linker.
	   *
	   * Otherwise we need to call transclude/compile/link here.
	   *
	   * @param {Element} el
	   */

	  Vue.prototype._compile = function (el) {
	    var options = this.$options;

	    // transclude and init element
	    // transclude can potentially replace original
	    // so we need to keep reference; this step also injects
	    // the template and caches the original attributes
	    // on the container node and replacer node.
	    var original = el;
	    el = transclude(el, options);
	    this._initElement(el);

	    // handle v-pre on root node (#2026)
	    if (el.nodeType === 1 && getAttr(el, 'v-pre') !== null) {
	      return;
	    }

	    // root is always compiled per-instance, because
	    // container attrs and props can be different every time.
	    var contextOptions = this._context && this._context.$options;
	    var rootLinker = compileRoot(el, options, contextOptions);

	    // resolve slot distribution
	    resolveSlots(this, options._content);

	    // compile and link the rest
	    var contentLinkFn;
	    var ctor = this.constructor;
	    // component compilation can be cached
	    // as long as it's not using inline-template
	    if (options._linkerCachable) {
	      contentLinkFn = ctor.linker;
	      if (!contentLinkFn) {
	        contentLinkFn = ctor.linker = compile(el, options);
	      }
	    }

	    // link phase
	    // make sure to link root with prop scope!
	    var rootUnlinkFn = rootLinker(this, el, this._scope);
	    var contentUnlinkFn = contentLinkFn ? contentLinkFn(this, el) : compile(el, options)(this, el);

	    // register composite unlink function
	    // to be called during instance destruction
	    this._unlinkFn = function () {
	      rootUnlinkFn();
	      // passing destroying: true to avoid searching and
	      // splicing the directives
	      contentUnlinkFn(true);
	    };

	    // finally replace original
	    if (options.replace) {
	      replace(original, el);
	    }

	    this._isCompiled = true;
	    this._callHook('compiled');
	  };

	  /**
	   * Initialize instance element. Called in the public
	   * $mount() method.
	   *
	   * @param {Element} el
	   */

	  Vue.prototype._initElement = function (el) {
	    if (isFragment(el)) {
	      this._isFragment = true;
	      this.$el = this._fragmentStart = el.firstChild;
	      this._fragmentEnd = el.lastChild;
	      // set persisted text anchors to empty
	      if (this._fragmentStart.nodeType === 3) {
	        this._fragmentStart.data = this._fragmentEnd.data = '';
	      }
	      this._fragment = el;
	    } else {
	      this.$el = el;
	    }
	    this.$el.__vue__ = this;
	    this._callHook('beforeCompile');
	  };

	  /**
	   * Create and bind a directive to an element.
	   *
	   * @param {Object} descriptor - parsed directive descriptor
	   * @param {Node} node   - target node
	   * @param {Vue} [host] - transclusion host component
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - owner fragment
	   */

	  Vue.prototype._bindDir = function (descriptor, node, host, scope, frag) {
	    this._directives.push(new Directive(descriptor, this, node, host, scope, frag));
	  };

	  /**
	   * Teardown an instance, unobserves the data, unbind all the
	   * directives, turn off all the event listeners, etc.
	   *
	   * @param {Boolean} remove - whether to remove the DOM node.
	   * @param {Boolean} deferCleanup - if true, defer cleanup to
	   *                                 be called later
	   */

	  Vue.prototype._destroy = function (remove, deferCleanup) {
	    if (this._isBeingDestroyed) {
	      if (!deferCleanup) {
	        this._cleanup();
	      }
	      return;
	    }

	    var destroyReady;
	    var pendingRemoval;

	    var self = this;
	    // Cleanup should be called either synchronously or asynchronoysly as
	    // callback of this.$remove(), or if remove and deferCleanup are false.
	    // In any case it should be called after all other removing, unbinding and
	    // turning of is done
	    var cleanupIfPossible = function cleanupIfPossible() {
	      if (destroyReady && !pendingRemoval && !deferCleanup) {
	        self._cleanup();
	      }
	    };

	    // remove DOM element
	    if (remove && this.$el) {
	      pendingRemoval = true;
	      this.$remove(function () {
	        pendingRemoval = false;
	        cleanupIfPossible();
	      });
	    }

	    this._callHook('beforeDestroy');
	    this._isBeingDestroyed = true;
	    var i;
	    // remove self from parent. only necessary
	    // if parent is not being destroyed as well.
	    var parent = this.$parent;
	    if (parent && !parent._isBeingDestroyed) {
	      parent.$children.$remove(this);
	      // unregister ref (remove: true)
	      this._updateRef(true);
	    }
	    // destroy all children.
	    i = this.$children.length;
	    while (i--) {
	      this.$children[i].$destroy();
	    }
	    // teardown props
	    if (this._propsUnlinkFn) {
	      this._propsUnlinkFn();
	    }
	    // teardown all directives. this also tearsdown all
	    // directive-owned watchers.
	    if (this._unlinkFn) {
	      this._unlinkFn();
	    }
	    i = this._watchers.length;
	    while (i--) {
	      this._watchers[i].teardown();
	    }
	    // remove reference to self on $el
	    if (this.$el) {
	      this.$el.__vue__ = null;
	    }

	    destroyReady = true;
	    cleanupIfPossible();
	  };

	  /**
	   * Clean up to ensure garbage collection.
	   * This is called after the leave transition if there
	   * is any.
	   */

	  Vue.prototype._cleanup = function () {
	    if (this._isDestroyed) {
	      return;
	    }
	    // remove self from owner fragment
	    // do it in cleanup so that we can call $destroy with
	    // defer right when a fragment is about to be removed.
	    if (this._frag) {
	      this._frag.children.$remove(this);
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (this._data && this._data.__ob__) {
	      this._data.__ob__.removeVm(this);
	    }
	    // Clean up references to private properties and other
	    // instances. preserve reference to _data so that proxy
	    // accessors still work. The only potential side effect
	    // here is that mutating the instance after it's destroyed
	    // may affect the state of other components that are still
	    // observing the same object, but that seems to be a
	    // reasonable responsibility for the user rather than
	    // always throwing an error on them.
	    this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null;
	    // call the last hook...
	    this._isDestroyed = true;
	    this._callHook('destroyed');
	    // turn off all instance listeners.
	    this.$off();
	  };
	}

	function miscMixin (Vue) {
	  /**
	   * Apply a list of filter (descriptors) to a value.
	   * Using plain for loops here because this will be called in
	   * the getter of any watcher with filters so it is very
	   * performance sensitive.
	   *
	   * @param {*} value
	   * @param {*} [oldValue]
	   * @param {Array} filters
	   * @param {Boolean} write
	   * @return {*}
	   */

	  Vue.prototype._applyFilters = function (value, oldValue, filters, write) {
	    var filter, fn, args, arg, offset, i, l, j, k;
	    for (i = 0, l = filters.length; i < l; i++) {
	      filter = filters[write ? l - i - 1 : i];
	      fn = resolveAsset(this.$options, 'filters', filter.name, true);
	      if (!fn) continue;
	      fn = write ? fn.write : fn.read || fn;
	      if (typeof fn !== 'function') continue;
	      args = write ? [value, oldValue] : [value];
	      offset = write ? 2 : 1;
	      if (filter.args) {
	        for (j = 0, k = filter.args.length; j < k; j++) {
	          arg = filter.args[j];
	          args[j + offset] = arg.dynamic ? this.$get(arg.value) : arg.value;
	        }
	      }
	      value = fn.apply(this, args);
	    }
	    return value;
	  };

	  /**
	   * Resolve a component, depending on whether the component
	   * is defined normally or using an async factory function.
	   * Resolves synchronously if already resolved, otherwise
	   * resolves asynchronously and caches the resolved
	   * constructor on the factory.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */

	  Vue.prototype._resolveComponent = function (value, cb) {
	    var factory;
	    if (typeof value === 'function') {
	      factory = value;
	    } else {
	      factory = resolveAsset(this.$options, 'components', value, true);
	    }
	    /* istanbul ignore if */
	    if (!factory) {
	      return;
	    }
	    // async component factory
	    if (!factory.options) {
	      if (factory.resolved) {
	        // cached
	        cb(factory.resolved);
	      } else if (factory.requested) {
	        // pool callbacks
	        factory.pendingCallbacks.push(cb);
	      } else {
	        factory.requested = true;
	        var cbs = factory.pendingCallbacks = [cb];
	        factory.call(this, function resolve(res) {
	          if (isPlainObject(res)) {
	            res = Vue.extend(res);
	          }
	          // cache resolved
	          factory.resolved = res;
	          // invoke callbacks
	          for (var i = 0, l = cbs.length; i < l; i++) {
	            cbs[i](res);
	          }
	        }, function reject(reason) {
	          process.env.NODE_ENV !== 'production' && warn('Failed to resolve async component' + (typeof value === 'string' ? ': ' + value : '') + '. ' + (reason ? '\nReason: ' + reason : ''));
	        });
	      }
	    } else {
	      // normal component
	      cb(factory);
	    }
	  };
	}

	var filterRE$1 = /[^|]\|[^|]/;

	function dataAPI (Vue) {
	  /**
	   * Get the value from an expression on this vm.
	   *
	   * @param {String} exp
	   * @param {Boolean} [asStatement]
	   * @return {*}
	   */

	  Vue.prototype.$get = function (exp, asStatement) {
	    var res = parseExpression$1(exp);
	    if (res) {
	      if (asStatement) {
	        var self = this;
	        return function statementHandler() {
	          self.$arguments = toArray(arguments);
	          var result = res.get.call(self, self);
	          self.$arguments = null;
	          return result;
	        };
	      } else {
	        try {
	          return res.get.call(this, this);
	        } catch (e) {}
	      }
	    }
	  };

	  /**
	   * Set the value from an expression on this vm.
	   * The expression must be a valid left-hand
	   * expression in an assignment.
	   *
	   * @param {String} exp
	   * @param {*} val
	   */

	  Vue.prototype.$set = function (exp, val) {
	    var res = parseExpression$1(exp, true);
	    if (res && res.set) {
	      res.set.call(this, this, val);
	    }
	  };

	  /**
	   * Delete a property on the VM
	   *
	   * @param {String} key
	   */

	  Vue.prototype.$delete = function (key) {
	    del(this._data, key);
	  };

	  /**
	   * Watch an expression, trigger callback when its
	   * value changes.
	   *
	   * @param {String|Function} expOrFn
	   * @param {Function} cb
	   * @param {Object} [options]
	   *                 - {Boolean} deep
	   *                 - {Boolean} immediate
	   * @return {Function} - unwatchFn
	   */

	  Vue.prototype.$watch = function (expOrFn, cb, options) {
	    var vm = this;
	    var parsed;
	    if (typeof expOrFn === 'string') {
	      parsed = parseDirective(expOrFn);
	      expOrFn = parsed.expression;
	    }
	    var watcher = new Watcher(vm, expOrFn, cb, {
	      deep: options && options.deep,
	      sync: options && options.sync,
	      filters: parsed && parsed.filters,
	      user: !options || options.user !== false
	    });
	    if (options && options.immediate) {
	      cb.call(vm, watcher.value);
	    }
	    return function unwatchFn() {
	      watcher.teardown();
	    };
	  };

	  /**
	   * Evaluate a text directive, including filters.
	   *
	   * @param {String} text
	   * @param {Boolean} [asStatement]
	   * @return {String}
	   */

	  Vue.prototype.$eval = function (text, asStatement) {
	    // check for filters.
	    if (filterRE$1.test(text)) {
	      var dir = parseDirective(text);
	      // the filter regex check might give false positive
	      // for pipes inside strings, so it's possible that
	      // we don't get any filters here
	      var val = this.$get(dir.expression, asStatement);
	      return dir.filters ? this._applyFilters(val, null, dir.filters) : val;
	    } else {
	      // no filter
	      return this.$get(text, asStatement);
	    }
	  };

	  /**
	   * Interpolate a piece of template text.
	   *
	   * @param {String} text
	   * @return {String}
	   */

	  Vue.prototype.$interpolate = function (text) {
	    var tokens = parseText(text);
	    var vm = this;
	    if (tokens) {
	      if (tokens.length === 1) {
	        return vm.$eval(tokens[0].value) + '';
	      } else {
	        return tokens.map(function (token) {
	          return token.tag ? vm.$eval(token.value) : token.value;
	        }).join('');
	      }
	    } else {
	      return text;
	    }
	  };

	  /**
	   * Log instance data as a plain JS object
	   * so that it is easier to inspect in console.
	   * This method assumes console is available.
	   *
	   * @param {String} [path]
	   */

	  Vue.prototype.$log = function (path) {
	    var data = path ? getPath(this._data, path) : this._data;
	    if (data) {
	      data = clean(data);
	    }
	    // include computed fields
	    if (!path) {
	      var key;
	      for (key in this.$options.computed) {
	        data[key] = clean(this[key]);
	      }
	      if (this._props) {
	        for (key in this._props) {
	          data[key] = clean(this[key]);
	        }
	      }
	    }
	    console.log(data);
	  };

	  /**
	   * "clean" a getter/setter converted object into a plain
	   * object copy.
	   *
	   * @param {Object} - obj
	   * @return {Object}
	   */

	  function clean(obj) {
	    return JSON.parse(JSON.stringify(obj));
	  }
	}

	function domAPI (Vue) {
	  /**
	   * Convenience on-instance nextTick. The callback is
	   * auto-bound to the instance, and this avoids component
	   * modules having to rely on the global Vue.
	   *
	   * @param {Function} fn
	   */

	  Vue.prototype.$nextTick = function (fn) {
	    nextTick(fn, this);
	  };

	  /**
	   * Append instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$appendTo = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, append, appendWithTransition);
	  };

	  /**
	   * Prepend instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$prependTo = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.hasChildNodes()) {
	      this.$before(target.firstChild, cb, withTransition);
	    } else {
	      this.$appendTo(target, cb, withTransition);
	    }
	    return this;
	  };

	  /**
	   * Insert instance before target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$before = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, beforeWithCb, beforeWithTransition);
	  };

	  /**
	   * Insert instance after target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$after = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.nextSibling) {
	      this.$before(target.nextSibling, cb, withTransition);
	    } else {
	      this.$appendTo(target.parentNode, cb, withTransition);
	    }
	    return this;
	  };

	  /**
	   * Remove instance from DOM
	   *
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$remove = function (cb, withTransition) {
	    if (!this.$el.parentNode) {
	      return cb && cb();
	    }
	    var inDocument = this._isAttached && inDoc(this.$el);
	    // if we are not in document, no need to check
	    // for transitions
	    if (!inDocument) withTransition = false;
	    var self = this;
	    var realCb = function realCb() {
	      if (inDocument) self._callHook('detached');
	      if (cb) cb();
	    };
	    if (this._isFragment) {
	      removeNodeRange(this._fragmentStart, this._fragmentEnd, this, this._fragment, realCb);
	    } else {
	      var op = withTransition === false ? removeWithCb : removeWithTransition;
	      op(this.$el, this, realCb);
	    }
	    return this;
	  };

	  /**
	   * Shared DOM insertion function.
	   *
	   * @param {Vue} vm
	   * @param {Element} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition]
	   * @param {Function} op1 - op for non-transition insert
	   * @param {Function} op2 - op for transition insert
	   * @return vm
	   */

	  function insert(vm, target, cb, withTransition, op1, op2) {
	    target = query(target);
	    var targetIsDetached = !inDoc(target);
	    var op = withTransition === false || targetIsDetached ? op1 : op2;
	    var shouldCallHook = !targetIsDetached && !vm._isAttached && !inDoc(vm.$el);
	    if (vm._isFragment) {
	      mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function (node) {
	        op(node, target, vm);
	      });
	      cb && cb();
	    } else {
	      op(vm.$el, target, vm, cb);
	    }
	    if (shouldCallHook) {
	      vm._callHook('attached');
	    }
	    return vm;
	  }

	  /**
	   * Check for selectors
	   *
	   * @param {String|Element} el
	   */

	  function query(el) {
	    return typeof el === 'string' ? document.querySelector(el) : el;
	  }

	  /**
	   * Append operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function append(el, target, vm, cb) {
	    target.appendChild(el);
	    if (cb) cb();
	  }

	  /**
	   * InsertBefore operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function beforeWithCb(el, target, vm, cb) {
	    before(el, target);
	    if (cb) cb();
	  }

	  /**
	   * Remove operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function removeWithCb(el, vm, cb) {
	    remove(el);
	    if (cb) cb();
	  }
	}

	function eventsAPI (Vue) {
	  /**
	   * Listen on the given `event` with `fn`.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$on = function (event, fn) {
	    (this._events[event] || (this._events[event] = [])).push(fn);
	    modifyListenerCount(this, event, 1);
	    return this;
	  };

	  /**
	   * Adds an `event` listener that will be invoked a single
	   * time then automatically removed.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$once = function (event, fn) {
	    var self = this;
	    function on() {
	      self.$off(event, on);
	      fn.apply(this, arguments);
	    }
	    on.fn = fn;
	    this.$on(event, on);
	    return this;
	  };

	  /**
	   * Remove the given callback for `event` or all
	   * registered callbacks.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$off = function (event, fn) {
	    var cbs;
	    // all
	    if (!arguments.length) {
	      if (this.$parent) {
	        for (event in this._events) {
	          cbs = this._events[event];
	          if (cbs) {
	            modifyListenerCount(this, event, -cbs.length);
	          }
	        }
	      }
	      this._events = {};
	      return this;
	    }
	    // specific event
	    cbs = this._events[event];
	    if (!cbs) {
	      return this;
	    }
	    if (arguments.length === 1) {
	      modifyListenerCount(this, event, -cbs.length);
	      this._events[event] = null;
	      return this;
	    }
	    // specific handler
	    var cb;
	    var i = cbs.length;
	    while (i--) {
	      cb = cbs[i];
	      if (cb === fn || cb.fn === fn) {
	        modifyListenerCount(this, event, -1);
	        cbs.splice(i, 1);
	        break;
	      }
	    }
	    return this;
	  };

	  /**
	   * Trigger an event on self.
	   *
	   * @param {String|Object} event
	   * @return {Boolean} shouldPropagate
	   */

	  Vue.prototype.$emit = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    var cbs = this._events[event];
	    var shouldPropagate = isSource || !cbs;
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      // this is a somewhat hacky solution to the question raised
	      // in #2102: for an inline component listener like <comp @test="doThis">,
	      // the propagation handling is somewhat broken. Therefore we
	      // need to treat these inline callbacks differently.
	      var hasParentCbs = isSource && cbs.some(function (cb) {
	        return cb._fromParent;
	      });
	      if (hasParentCbs) {
	        shouldPropagate = false;
	      }
	      var args = toArray(arguments, 1);
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        var cb = cbs[i];
	        var res = cb.apply(this, args);
	        if (res === true && (!hasParentCbs || cb._fromParent)) {
	          shouldPropagate = true;
	        }
	      }
	    }
	    return shouldPropagate;
	  };

	  /**
	   * Recursively broadcast an event to all children instances.
	   *
	   * @param {String|Object} event
	   * @param {...*} additional arguments
	   */

	  Vue.prototype.$broadcast = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    // if no child has registered for this event,
	    // then there's no need to broadcast.
	    if (!this._eventsCount[event]) return;
	    var children = this.$children;
	    var args = toArray(arguments);
	    if (isSource) {
	      // use object event to indicate non-source emit
	      // on children
	      args[0] = { name: event, source: this };
	    }
	    for (var i = 0, l = children.length; i < l; i++) {
	      var child = children[i];
	      var shouldPropagate = child.$emit.apply(child, args);
	      if (shouldPropagate) {
	        child.$broadcast.apply(child, args);
	      }
	    }
	    return this;
	  };

	  /**
	   * Recursively propagate an event up the parent chain.
	   *
	   * @param {String} event
	   * @param {...*} additional arguments
	   */

	  Vue.prototype.$dispatch = function (event) {
	    var shouldPropagate = this.$emit.apply(this, arguments);
	    if (!shouldPropagate) return;
	    var parent = this.$parent;
	    var args = toArray(arguments);
	    // use object event to indicate non-source emit
	    // on parents
	    args[0] = { name: event, source: this };
	    while (parent) {
	      shouldPropagate = parent.$emit.apply(parent, args);
	      parent = shouldPropagate ? parent.$parent : null;
	    }
	    return this;
	  };

	  /**
	   * Modify the listener counts on all parents.
	   * This bookkeeping allows $broadcast to return early when
	   * no child has listened to a certain event.
	   *
	   * @param {Vue} vm
	   * @param {String} event
	   * @param {Number} count
	   */

	  var hookRE = /^hook:/;
	  function modifyListenerCount(vm, event, count) {
	    var parent = vm.$parent;
	    // hooks do not get broadcasted so no need
	    // to do bookkeeping for them
	    if (!parent || !count || hookRE.test(event)) return;
	    while (parent) {
	      parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;
	      parent = parent.$parent;
	    }
	  }
	}

	function lifecycleAPI (Vue) {
	  /**
	   * Set instance target element and kick off the compilation
	   * process. The passed in `el` can be a selector string, an
	   * existing Element, or a DocumentFragment (for block
	   * instances).
	   *
	   * @param {Element|DocumentFragment|string} el
	   * @public
	   */

	  Vue.prototype.$mount = function (el) {
	    if (this._isCompiled) {
	      process.env.NODE_ENV !== 'production' && warn('$mount() should be called only once.', this);
	      return;
	    }
	    el = query(el);
	    if (!el) {
	      el = document.createElement('div');
	    }
	    this._compile(el);
	    this._initDOMHooks();
	    if (inDoc(this.$el)) {
	      this._callHook('attached');
	      ready.call(this);
	    } else {
	      this.$once('hook:attached', ready);
	    }
	    return this;
	  };

	  /**
	   * Mark an instance as ready.
	   */

	  function ready() {
	    this._isAttached = true;
	    this._isReady = true;
	    this._callHook('ready');
	  }

	  /**
	   * Teardown the instance, simply delegate to the internal
	   * _destroy.
	   *
	   * @param {Boolean} remove
	   * @param {Boolean} deferCleanup
	   */

	  Vue.prototype.$destroy = function (remove, deferCleanup) {
	    this._destroy(remove, deferCleanup);
	  };

	  /**
	   * Partially compile a piece of DOM and return a
	   * decompile function.
	   *
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host]
	   * @param {Object} [scope]
	   * @param {Fragment} [frag]
	   * @return {Function}
	   */

	  Vue.prototype.$compile = function (el, host, scope, frag) {
	    return compile(el, this.$options, true)(this, el, host, scope, frag);
	  };
	}

	/**
	 * The exposed Vue constructor.
	 *
	 * API conventions:
	 * - public API methods/properties are prefixed with `$`
	 * - internal methods/properties are prefixed with `_`
	 * - non-prefixed properties are assumed to be proxied user
	 *   data.
	 *
	 * @constructor
	 * @param {Object} [options]
	 * @public
	 */

	function Vue(options) {
	  this._init(options);
	}

	// install internals
	initMixin(Vue);
	stateMixin(Vue);
	eventsMixin(Vue);
	lifecycleMixin(Vue);
	miscMixin(Vue);

	// install instance APIs
	dataAPI(Vue);
	domAPI(Vue);
	eventsAPI(Vue);
	lifecycleAPI(Vue);

	var slot = {

	  priority: SLOT,
	  params: ['name'],

	  bind: function bind() {
	    // this was resolved during component transclusion
	    var name = this.params.name || 'default';
	    var content = this.vm._slotContents && this.vm._slotContents[name];
	    if (!content || !content.hasChildNodes()) {
	      this.fallback();
	    } else {
	      this.compile(content.cloneNode(true), this.vm._context, this.vm);
	    }
	  },

	  compile: function compile(content, context, host) {
	    if (content && context) {
	      if (this.el.hasChildNodes() && content.childNodes.length === 1 && content.childNodes[0].nodeType === 1 && content.childNodes[0].hasAttribute('v-if')) {
	        // if the inserted slot has v-if
	        // inject fallback content as the v-else
	        var elseBlock = document.createElement('template');
	        elseBlock.setAttribute('v-else', '');
	        elseBlock.innerHTML = this.el.innerHTML;
	        // the else block should be compiled in child scope
	        elseBlock._context = this.vm;
	        content.appendChild(elseBlock);
	      }
	      var scope = host ? host._scope : this._scope;
	      this.unlink = context.$compile(content, host, scope, this._frag);
	    }
	    if (content) {
	      replace(this.el, content);
	    } else {
	      remove(this.el);
	    }
	  },

	  fallback: function fallback() {
	    this.compile(extractContent(this.el, true), this.vm);
	  },

	  unbind: function unbind() {
	    if (this.unlink) {
	      this.unlink();
	    }
	  }
	};

	var partial = {

	  priority: PARTIAL,

	  params: ['name'],

	  // watch changes to name for dynamic partials
	  paramWatchers: {
	    name: function name(value) {
	      vIf.remove.call(this);
	      if (value) {
	        this.insert(value);
	      }
	    }
	  },

	  bind: function bind() {
	    this.anchor = createAnchor('v-partial');
	    replace(this.el, this.anchor);
	    this.insert(this.params.name);
	  },

	  insert: function insert(id) {
	    var partial = resolveAsset(this.vm.$options, 'partials', id, true);
	    if (partial) {
	      this.factory = new FragmentFactory(this.vm, partial);
	      vIf.insert.call(this);
	    }
	  },

	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	  }
	};

	var elementDirectives = {
	  slot: slot,
	  partial: partial
	};

	var convertArray = vFor._postProcess;

	/**
	 * Limit filter for arrays
	 *
	 * @param {Number} n
	 * @param {Number} offset (Decimal expected)
	 */

	function limitBy(arr, n, offset) {
	  offset = offset ? parseInt(offset, 10) : 0;
	  n = toNumber(n);
	  return typeof n === 'number' ? arr.slice(offset, offset + n) : arr;
	}

	/**
	 * Filter filter for arrays
	 *
	 * @param {String} search
	 * @param {String} [delimiter]
	 * @param {String} ...dataKeys
	 */

	function filterBy(arr, search, delimiter) {
	  arr = convertArray(arr);
	  if (search == null) {
	    return arr;
	  }
	  if (typeof search === 'function') {
	    return arr.filter(search);
	  }
	  // cast to lowercase string
	  search = ('' + search).toLowerCase();
	  // allow optional `in` delimiter
	  // because why not
	  var n = delimiter === 'in' ? 3 : 2;
	  // extract and flatten keys
	  var keys = Array.prototype.concat.apply([], toArray(arguments, n));
	  var res = [];
	  var item, key, val, j;
	  for (var i = 0, l = arr.length; i < l; i++) {
	    item = arr[i];
	    val = item && item.$value || item;
	    j = keys.length;
	    if (j) {
	      while (j--) {
	        key = keys[j];
	        if (key === '$key' && contains(item.$key, search) || contains(getPath(val, key), search)) {
	          res.push(item);
	          break;
	        }
	      }
	    } else if (contains(item, search)) {
	      res.push(item);
	    }
	  }
	  return res;
	}

	/**
	 * Order filter for arrays
	 *
	 * @param {String|Array<String>|Function} ...sortKeys
	 * @param {Number} [order]
	 */

	function orderBy(arr) {
	  var comparator = null;
	  var sortKeys = undefined;
	  arr = convertArray(arr);

	  // determine order (last argument)
	  var args = toArray(arguments, 1);
	  var order = args[args.length - 1];
	  if (typeof order === 'number') {
	    order = order < 0 ? -1 : 1;
	    args = args.length > 1 ? args.slice(0, -1) : args;
	  } else {
	    order = 1;
	  }

	  // determine sortKeys & comparator
	  var firstArg = args[0];
	  if (!firstArg) {
	    return arr;
	  } else if (typeof firstArg === 'function') {
	    // custom comparator
	    comparator = function (a, b) {
	      return firstArg(a, b) * order;
	    };
	  } else {
	    // string keys. flatten first
	    sortKeys = Array.prototype.concat.apply([], args);
	    comparator = function (a, b, i) {
	      i = i || 0;
	      return i >= sortKeys.length - 1 ? baseCompare(a, b, i) : baseCompare(a, b, i) || comparator(a, b, i + 1);
	    };
	  }

	  function baseCompare(a, b, sortKeyIndex) {
	    var sortKey = sortKeys[sortKeyIndex];
	    if (sortKey) {
	      if (sortKey !== '$key') {
	        if (isObject(a) && '$value' in a) a = a.$value;
	        if (isObject(b) && '$value' in b) b = b.$value;
	      }
	      a = isObject(a) ? getPath(a, sortKey) : a;
	      b = isObject(b) ? getPath(b, sortKey) : b;
	    }
	    return a === b ? 0 : a > b ? order : -order;
	  }

	  // sort on a copy to avoid mutating original array
	  return arr.slice().sort(comparator);
	}

	/**
	 * String contain helper
	 *
	 * @param {*} val
	 * @param {String} search
	 */

	function contains(val, search) {
	  var i;
	  if (isPlainObject(val)) {
	    var keys = Object.keys(val);
	    i = keys.length;
	    while (i--) {
	      if (contains(val[keys[i]], search)) {
	        return true;
	      }
	    }
	  } else if (isArray(val)) {
	    i = val.length;
	    while (i--) {
	      if (contains(val[i], search)) {
	        return true;
	      }
	    }
	  } else if (val != null) {
	    return val.toString().toLowerCase().indexOf(search) > -1;
	  }
	}

	var digitsRE = /(\d{3})(?=\d)/g;

	// asset collections must be a plain object.
	var filters = {

	  orderBy: orderBy,
	  filterBy: filterBy,
	  limitBy: limitBy,

	  /**
	   * Stringify value.
	   *
	   * @param {Number} indent
	   */

	  json: {
	    read: function read(value, indent) {
	      return typeof value === 'string' ? value : JSON.stringify(value, null, arguments.length > 1 ? indent : 2);
	    },
	    write: function write(value) {
	      try {
	        return JSON.parse(value);
	      } catch (e) {
	        return value;
	      }
	    }
	  },

	  /**
	   * 'abc' => 'Abc'
	   */

	  capitalize: function capitalize(value) {
	    if (!value && value !== 0) return '';
	    value = value.toString();
	    return value.charAt(0).toUpperCase() + value.slice(1);
	  },

	  /**
	   * 'abc' => 'ABC'
	   */

	  uppercase: function uppercase(value) {
	    return value || value === 0 ? value.toString().toUpperCase() : '';
	  },

	  /**
	   * 'AbC' => 'abc'
	   */

	  lowercase: function lowercase(value) {
	    return value || value === 0 ? value.toString().toLowerCase() : '';
	  },

	  /**
	   * 12345 => $12,345.00
	   *
	   * @param {String} sign
	   * @param {Number} decimals Decimal places
	   */

	  currency: function currency(value, _currency, decimals) {
	    value = parseFloat(value);
	    if (!isFinite(value) || !value && value !== 0) return '';
	    _currency = _currency != null ? _currency : '$';
	    decimals = decimals != null ? decimals : 2;
	    var stringified = Math.abs(value).toFixed(decimals);
	    var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
	    var i = _int.length % 3;
	    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
	    var _float = decimals ? stringified.slice(-1 - decimals) : '';
	    var sign = value < 0 ? '-' : '';
	    return sign + _currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
	  },

	  /**
	   * 'item' => 'items'
	   *
	   * @params
	   *  an array of strings corresponding to
	   *  the single, double, triple ... forms of the word to
	   *  be pluralized. When the number to be pluralized
	   *  exceeds the length of the args, it will use the last
	   *  entry in the array.
	   *
	   *  e.g. ['single', 'double', 'triple', 'multiple']
	   */

	  pluralize: function pluralize(value) {
	    var args = toArray(arguments, 1);
	    var length = args.length;
	    if (length > 1) {
	      var index = value % 10 - 1;
	      return index in args ? args[index] : args[length - 1];
	    } else {
	      return args[0] + (value === 1 ? '' : 's');
	    }
	  },

	  /**
	   * Debounce a handler function.
	   *
	   * @param {Function} handler
	   * @param {Number} delay = 300
	   * @return {Function}
	   */

	  debounce: function debounce(handler, delay) {
	    if (!handler) return;
	    if (!delay) {
	      delay = 300;
	    }
	    return _debounce(handler, delay);
	  }
	};

	function installGlobalAPI (Vue) {
	  /**
	   * Vue and every constructor that extends Vue has an
	   * associated options object, which can be accessed during
	   * compilation steps as `this.constructor.options`.
	   *
	   * These can be seen as the default options of every
	   * Vue instance.
	   */

	  Vue.options = {
	    directives: directives,
	    elementDirectives: elementDirectives,
	    filters: filters,
	    transitions: {},
	    components: {},
	    partials: {},
	    replace: true
	  };

	  /**
	   * Expose useful internals
	   */

	  Vue.util = util;
	  Vue.config = config;
	  Vue.set = set;
	  Vue['delete'] = del;
	  Vue.nextTick = nextTick;

	  /**
	   * The following are exposed for advanced usage / plugins
	   */

	  Vue.compiler = compiler;
	  Vue.FragmentFactory = FragmentFactory;
	  Vue.internalDirectives = internalDirectives;
	  Vue.parsers = {
	    path: path,
	    text: text,
	    template: template,
	    directive: directive,
	    expression: expression
	  };

	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */

	  Vue.cid = 0;
	  var cid = 1;

	  /**
	   * Class inheritance
	   *
	   * @param {Object} extendOptions
	   */

	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {};
	    var Super = this;
	    var isFirstExtend = Super.cid === 0;
	    if (isFirstExtend && extendOptions._Ctor) {
	      return extendOptions._Ctor;
	    }
	    var name = extendOptions.name || Super.options.name;
	    if (process.env.NODE_ENV !== 'production') {
	      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	        warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characaters and the hyphen.');
	        name = null;
	      }
	    }
	    var Sub = createClass(name || 'VueComponent');
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(Super.options, extendOptions);
	    Sub['super'] = Super;
	    // allow further extension
	    Sub.extend = Super.extend;
	    // create asset registers, so extended classes
	    // can have their private assets too.
	    config._assetTypes.forEach(function (type) {
	      Sub[type] = Super[type];
	    });
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub;
	    }
	    // cache constructor
	    if (isFirstExtend) {
	      extendOptions._Ctor = Sub;
	    }
	    return Sub;
	  };

	  /**
	   * A function that returns a sub-class constructor with the
	   * given name. This gives us much nicer output when
	   * logging instances in the console.
	   *
	   * @param {String} name
	   * @return {Function}
	   */

	  function createClass(name) {
	    /* eslint-disable no-new-func */
	    return new Function('return function ' + classify(name) + ' (options) { this._init(options) }')();
	    /* eslint-enable no-new-func */
	  }

	  /**
	   * Plugin system
	   *
	   * @param {Object} plugin
	   */

	  Vue.use = function (plugin) {
	    /* istanbul ignore if */
	    if (plugin.installed) {
	      return;
	    }
	    // additional parameters
	    var args = toArray(arguments, 1);
	    args.unshift(this);
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args);
	    } else {
	      plugin.apply(null, args);
	    }
	    plugin.installed = true;
	    return this;
	  };

	  /**
	   * Apply a global mixin by merging it into the default
	   * options.
	   */

	  Vue.mixin = function (mixin) {
	    Vue.options = mergeOptions(Vue.options, mixin);
	  };

	  /**
	   * Create asset registration methods with the following
	   * signature:
	   *
	   * @param {String} id
	   * @param {*} definition
	   */

	  config._assetTypes.forEach(function (type) {
	    Vue[type] = function (id, definition) {
	      if (!definition) {
	        return this.options[type + 's'][id];
	      } else {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          if (type === 'component' && (commonTagRE.test(id) || reservedTagRE.test(id))) {
	            warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
	          }
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          if (!definition.name) {
	            definition.name = id;
	          }
	          definition = Vue.extend(definition);
	        }
	        this.options[type + 's'][id] = definition;
	        return definition;
	      }
	    };
	  });

	  // expose internal transition API
	  extend(Vue.transition, transition);
	}

	installGlobalAPI(Vue);

	Vue.version = '1.0.28';

	// devtools global hook
	/* istanbul ignore next */
	setTimeout(function () {
	  if (config.devtools) {
	    if (devtools) {
	      devtools.emit('init', Vue);
	    } else if (process.env.NODE_ENV !== 'production' && inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)) {
	      console.log('Download the Vue Devtools for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
	    }
	  }
	}, 0);

	module.exports = Vue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 6 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * vue-router v0.7.13
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  global.VueRouter = factory();
	}(this, function () { 'use strict';

	  var babelHelpers = {};

	  babelHelpers.classCallCheck = function (instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  };
	  function Target(path, matcher, delegate) {
	    this.path = path;
	    this.matcher = matcher;
	    this.delegate = delegate;
	  }

	  Target.prototype = {
	    to: function to(target, callback) {
	      var delegate = this.delegate;

	      if (delegate && delegate.willAddRoute) {
	        target = delegate.willAddRoute(this.matcher.target, target);
	      }

	      this.matcher.add(this.path, target);

	      if (callback) {
	        if (callback.length === 0) {
	          throw new Error("You must have an argument in the function passed to `to`");
	        }
	        this.matcher.addChild(this.path, target, callback, this.delegate);
	      }
	      return this;
	    }
	  };

	  function Matcher(target) {
	    this.routes = {};
	    this.children = {};
	    this.target = target;
	  }

	  Matcher.prototype = {
	    add: function add(path, handler) {
	      this.routes[path] = handler;
	    },

	    addChild: function addChild(path, target, callback, delegate) {
	      var matcher = new Matcher(target);
	      this.children[path] = matcher;

	      var match = generateMatch(path, matcher, delegate);

	      if (delegate && delegate.contextEntered) {
	        delegate.contextEntered(target, match);
	      }

	      callback(match);
	    }
	  };

	  function generateMatch(startingPath, matcher, delegate) {
	    return function (path, nestedCallback) {
	      var fullPath = startingPath + path;

	      if (nestedCallback) {
	        nestedCallback(generateMatch(fullPath, matcher, delegate));
	      } else {
	        return new Target(startingPath + path, matcher, delegate);
	      }
	    };
	  }

	  function addRoute(routeArray, path, handler) {
	    var len = 0;
	    for (var i = 0, l = routeArray.length; i < l; i++) {
	      len += routeArray[i].path.length;
	    }

	    path = path.substr(len);
	    var route = { path: path, handler: handler };
	    routeArray.push(route);
	  }

	  function eachRoute(baseRoute, matcher, callback, binding) {
	    var routes = matcher.routes;

	    for (var path in routes) {
	      if (routes.hasOwnProperty(path)) {
	        var routeArray = baseRoute.slice();
	        addRoute(routeArray, path, routes[path]);

	        if (matcher.children[path]) {
	          eachRoute(routeArray, matcher.children[path], callback, binding);
	        } else {
	          callback.call(binding, routeArray);
	        }
	      }
	    }
	  }

	  function map (callback, addRouteCallback) {
	    var matcher = new Matcher();

	    callback(generateMatch("", matcher, this.delegate));

	    eachRoute([], matcher, function (route) {
	      if (addRouteCallback) {
	        addRouteCallback(this, route);
	      } else {
	        this.add(route);
	      }
	    }, this);
	  }

	  var specials = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];

	  var escapeRegex = new RegExp('(\\' + specials.join('|\\') + ')', 'g');

	  var noWarning = false;
	  function warn(msg) {
	    if (!noWarning && typeof console !== 'undefined') {
	      console.error('[vue-router] ' + msg);
	    }
	  }

	  function tryDecode(uri, asComponent) {
	    try {
	      return asComponent ? decodeURIComponent(uri) : decodeURI(uri);
	    } catch (e) {
	      warn('malformed URI' + (asComponent ? ' component: ' : ': ') + uri);
	    }
	  }

	  function isArray(test) {
	    return Object.prototype.toString.call(test) === "[object Array]";
	  }

	  // A Segment represents a segment in the original route description.
	  // Each Segment type provides an `eachChar` and `regex` method.
	  //
	  // The `eachChar` method invokes the callback with one or more character
	  // specifications. A character specification consumes one or more input
	  // characters.
	  //
	  // The `regex` method returns a regex fragment for the segment. If the
	  // segment is a dynamic of star segment, the regex fragment also includes
	  // a capture.
	  //
	  // A character specification contains:
	  //
	  // * `validChars`: a String with a list of all valid characters, or
	  // * `invalidChars`: a String with a list of all invalid characters
	  // * `repeat`: true if the character specification can repeat

	  function StaticSegment(string) {
	    this.string = string;
	  }
	  StaticSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      var string = this.string,
	          ch;

	      for (var i = 0, l = string.length; i < l; i++) {
	        ch = string.charAt(i);
	        callback({ validChars: ch });
	      }
	    },

	    regex: function regex() {
	      return this.string.replace(escapeRegex, '\\$1');
	    },

	    generate: function generate() {
	      return this.string;
	    }
	  };

	  function DynamicSegment(name) {
	    this.name = name;
	  }
	  DynamicSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "/", repeat: true });
	    },

	    regex: function regex() {
	      return "([^/]+)";
	    },

	    generate: function generate(params) {
	      var val = params[this.name];
	      return val == null ? ":" + this.name : val;
	    }
	  };

	  function StarSegment(name) {
	    this.name = name;
	  }
	  StarSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "", repeat: true });
	    },

	    regex: function regex() {
	      return "(.+)";
	    },

	    generate: function generate(params) {
	      var val = params[this.name];
	      return val == null ? ":" + this.name : val;
	    }
	  };

	  function EpsilonSegment() {}
	  EpsilonSegment.prototype = {
	    eachChar: function eachChar() {},
	    regex: function regex() {
	      return "";
	    },
	    generate: function generate() {
	      return "";
	    }
	  };

	  function parse(route, names, specificity) {
	    // normalize route as not starting with a "/". Recognition will
	    // also normalize.
	    if (route.charAt(0) === "/") {
	      route = route.substr(1);
	    }

	    var segments = route.split("/"),
	        results = [];

	    // A routes has specificity determined by the order that its different segments
	    // appear in. This system mirrors how the magnitude of numbers written as strings
	    // works.
	    // Consider a number written as: "abc". An example would be "200". Any other number written
	    // "xyz" will be smaller than "abc" so long as `a > z`. For instance, "199" is smaller
	    // then "200", even though "y" and "z" (which are both 9) are larger than "0" (the value
	    // of (`b` and `c`). This is because the leading symbol, "2", is larger than the other
	    // leading symbol, "1".
	    // The rule is that symbols to the left carry more weight than symbols to the right
	    // when a number is written out as a string. In the above strings, the leading digit
	    // represents how many 100's are in the number, and it carries more weight than the middle
	    // number which represents how many 10's are in the number.
	    // This system of number magnitude works well for route specificity, too. A route written as
	    // `a/b/c` will be more specific than `x/y/z` as long as `a` is more specific than
	    // `x`, irrespective of the other parts.
	    // Because of this similarity, we assign each type of segment a number value written as a
	    // string. We can find the specificity of compound routes by concatenating these strings
	    // together, from left to right. After we have looped through all of the segments,
	    // we convert the string to a number.
	    specificity.val = '';

	    for (var i = 0, l = segments.length; i < l; i++) {
	      var segment = segments[i],
	          match;

	      if (match = segment.match(/^:([^\/]+)$/)) {
	        results.push(new DynamicSegment(match[1]));
	        names.push(match[1]);
	        specificity.val += '3';
	      } else if (match = segment.match(/^\*([^\/]+)$/)) {
	        results.push(new StarSegment(match[1]));
	        specificity.val += '2';
	        names.push(match[1]);
	      } else if (segment === "") {
	        results.push(new EpsilonSegment());
	        specificity.val += '1';
	      } else {
	        results.push(new StaticSegment(segment));
	        specificity.val += '4';
	      }
	    }

	    specificity.val = +specificity.val;

	    return results;
	  }

	  // A State has a character specification and (`charSpec`) and a list of possible
	  // subsequent states (`nextStates`).
	  //
	  // If a State is an accepting state, it will also have several additional
	  // properties:
	  //
	  // * `regex`: A regular expression that is used to extract parameters from paths
	  //   that reached this accepting state.
	  // * `handlers`: Information on how to convert the list of captures into calls
	  //   to registered handlers with the specified parameters
	  // * `types`: How many static, dynamic or star segments in this route. Used to
	  //   decide which route to use if multiple registered routes match a path.
	  //
	  // Currently, State is implemented naively by looping over `nextStates` and
	  // comparing a character specification against a character. A more efficient
	  // implementation would use a hash of keys pointing at one or more next states.

	  function State(charSpec) {
	    this.charSpec = charSpec;
	    this.nextStates = [];
	  }

	  State.prototype = {
	    get: function get(charSpec) {
	      var nextStates = this.nextStates;

	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        var child = nextStates[i];

	        var isEqual = child.charSpec.validChars === charSpec.validChars;
	        isEqual = isEqual && child.charSpec.invalidChars === charSpec.invalidChars;

	        if (isEqual) {
	          return child;
	        }
	      }
	    },

	    put: function put(charSpec) {
	      var state;

	      // If the character specification already exists in a child of the current
	      // state, just return that state.
	      if (state = this.get(charSpec)) {
	        return state;
	      }

	      // Make a new state for the character spec
	      state = new State(charSpec);

	      // Insert the new state as a child of the current state
	      this.nextStates.push(state);

	      // If this character specification repeats, insert the new state as a child
	      // of itself. Note that this will not trigger an infinite loop because each
	      // transition during recognition consumes a character.
	      if (charSpec.repeat) {
	        state.nextStates.push(state);
	      }

	      // Return the new state
	      return state;
	    },

	    // Find a list of child states matching the next character
	    match: function match(ch) {
	      // DEBUG "Processing `" + ch + "`:"
	      var nextStates = this.nextStates,
	          child,
	          charSpec,
	          chars;

	      // DEBUG "  " + debugState(this)
	      var returned = [];

	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        child = nextStates[i];

	        charSpec = child.charSpec;

	        if (typeof (chars = charSpec.validChars) !== 'undefined') {
	          if (chars.indexOf(ch) !== -1) {
	            returned.push(child);
	          }
	        } else if (typeof (chars = charSpec.invalidChars) !== 'undefined') {
	          if (chars.indexOf(ch) === -1) {
	            returned.push(child);
	          }
	        }
	      }

	      return returned;
	    }

	    /** IF DEBUG
	    , debug: function() {
	      var charSpec = this.charSpec,
	          debug = "[",
	          chars = charSpec.validChars || charSpec.invalidChars;
	       if (charSpec.invalidChars) { debug += "^"; }
	      debug += chars;
	      debug += "]";
	       if (charSpec.repeat) { debug += "+"; }
	       return debug;
	    }
	    END IF **/
	  };

	  /** IF DEBUG
	  function debug(log) {
	    console.log(log);
	  }

	  function debugState(state) {
	    return state.nextStates.map(function(n) {
	      if (n.nextStates.length === 0) { return "( " + n.debug() + " [accepting] )"; }
	      return "( " + n.debug() + " <then> " + n.nextStates.map(function(s) { return s.debug() }).join(" or ") + " )";
	    }).join(", ")
	  }
	  END IF **/

	  // Sort the routes by specificity
	  function sortSolutions(states) {
	    return states.sort(function (a, b) {
	      return b.specificity.val - a.specificity.val;
	    });
	  }

	  function recognizeChar(states, ch) {
	    var nextStates = [];

	    for (var i = 0, l = states.length; i < l; i++) {
	      var state = states[i];

	      nextStates = nextStates.concat(state.match(ch));
	    }

	    return nextStates;
	  }

	  var oCreate = Object.create || function (proto) {
	    function F() {}
	    F.prototype = proto;
	    return new F();
	  };

	  function RecognizeResults(queryParams) {
	    this.queryParams = queryParams || {};
	  }
	  RecognizeResults.prototype = oCreate({
	    splice: Array.prototype.splice,
	    slice: Array.prototype.slice,
	    push: Array.prototype.push,
	    length: 0,
	    queryParams: null
	  });

	  function findHandler(state, path, queryParams) {
	    var handlers = state.handlers,
	        regex = state.regex;
	    var captures = path.match(regex),
	        currentCapture = 1;
	    var result = new RecognizeResults(queryParams);

	    for (var i = 0, l = handlers.length; i < l; i++) {
	      var handler = handlers[i],
	          names = handler.names,
	          params = {};

	      for (var j = 0, m = names.length; j < m; j++) {
	        params[names[j]] = captures[currentCapture++];
	      }

	      result.push({ handler: handler.handler, params: params, isDynamic: !!names.length });
	    }

	    return result;
	  }

	  function addSegment(currentState, segment) {
	    segment.eachChar(function (ch) {
	      var state;

	      currentState = currentState.put(ch);
	    });

	    return currentState;
	  }

	  function decodeQueryParamPart(part) {
	    // http://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1
	    part = part.replace(/\+/gm, '%20');
	    return tryDecode(part, true);
	  }

	  // The main interface

	  var RouteRecognizer = function RouteRecognizer() {
	    this.rootState = new State();
	    this.names = {};
	  };

	  RouteRecognizer.prototype = {
	    add: function add(routes, options) {
	      var currentState = this.rootState,
	          regex = "^",
	          specificity = {},
	          handlers = [],
	          allSegments = [],
	          name;

	      var isEmpty = true;

	      for (var i = 0, l = routes.length; i < l; i++) {
	        var route = routes[i],
	            names = [];

	        var segments = parse(route.path, names, specificity);

	        allSegments = allSegments.concat(segments);

	        for (var j = 0, m = segments.length; j < m; j++) {
	          var segment = segments[j];

	          if (segment instanceof EpsilonSegment) {
	            continue;
	          }

	          isEmpty = false;

	          // Add a "/" for the new segment
	          currentState = currentState.put({ validChars: "/" });
	          regex += "/";

	          // Add a representation of the segment to the NFA and regex
	          currentState = addSegment(currentState, segment);
	          regex += segment.regex();
	        }

	        var handler = { handler: route.handler, names: names };
	        handlers.push(handler);
	      }

	      if (isEmpty) {
	        currentState = currentState.put({ validChars: "/" });
	        regex += "/";
	      }

	      currentState.handlers = handlers;
	      currentState.regex = new RegExp(regex + "$");
	      currentState.specificity = specificity;

	      if (name = options && options.as) {
	        this.names[name] = {
	          segments: allSegments,
	          handlers: handlers
	        };
	      }
	    },

	    handlersFor: function handlersFor(name) {
	      var route = this.names[name],
	          result = [];
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }

	      for (var i = 0, l = route.handlers.length; i < l; i++) {
	        result.push(route.handlers[i]);
	      }

	      return result;
	    },

	    hasRoute: function hasRoute(name) {
	      return !!this.names[name];
	    },

	    generate: function generate(name, params) {
	      var route = this.names[name],
	          output = "";
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }

	      var segments = route.segments;

	      for (var i = 0, l = segments.length; i < l; i++) {
	        var segment = segments[i];

	        if (segment instanceof EpsilonSegment) {
	          continue;
	        }

	        output += "/";
	        output += segment.generate(params);
	      }

	      if (output.charAt(0) !== '/') {
	        output = '/' + output;
	      }

	      if (params && params.queryParams) {
	        output += this.generateQueryString(params.queryParams);
	      }

	      return output;
	    },

	    generateQueryString: function generateQueryString(params) {
	      var pairs = [];
	      var keys = [];
	      for (var key in params) {
	        if (params.hasOwnProperty(key)) {
	          keys.push(key);
	        }
	      }
	      keys.sort();
	      for (var i = 0, len = keys.length; i < len; i++) {
	        key = keys[i];
	        var value = params[key];
	        if (value == null) {
	          continue;
	        }
	        var pair = encodeURIComponent(key);
	        if (isArray(value)) {
	          for (var j = 0, l = value.length; j < l; j++) {
	            var arrayPair = key + '[]' + '=' + encodeURIComponent(value[j]);
	            pairs.push(arrayPair);
	          }
	        } else {
	          pair += "=" + encodeURIComponent(value);
	          pairs.push(pair);
	        }
	      }

	      if (pairs.length === 0) {
	        return '';
	      }

	      return "?" + pairs.join("&");
	    },

	    parseQueryString: function parseQueryString(queryString) {
	      var pairs = queryString.split("&"),
	          queryParams = {};
	      for (var i = 0; i < pairs.length; i++) {
	        var pair = pairs[i].split('='),
	            key = decodeQueryParamPart(pair[0]),
	            keyLength = key.length,
	            isArray = false,
	            value;
	        if (pair.length === 1) {
	          value = 'true';
	        } else {
	          //Handle arrays
	          if (keyLength > 2 && key.slice(keyLength - 2) === '[]') {
	            isArray = true;
	            key = key.slice(0, keyLength - 2);
	            if (!queryParams[key]) {
	              queryParams[key] = [];
	            }
	          }
	          value = pair[1] ? decodeQueryParamPart(pair[1]) : '';
	        }
	        if (isArray) {
	          queryParams[key].push(value);
	        } else {
	          queryParams[key] = value;
	        }
	      }
	      return queryParams;
	    },

	    recognize: function recognize(path, silent) {
	      noWarning = silent;
	      var states = [this.rootState],
	          pathLen,
	          i,
	          l,
	          queryStart,
	          queryParams = {},
	          isSlashDropped = false;

	      queryStart = path.indexOf('?');
	      if (queryStart !== -1) {
	        var queryString = path.substr(queryStart + 1, path.length);
	        path = path.substr(0, queryStart);
	        if (queryString) {
	          queryParams = this.parseQueryString(queryString);
	        }
	      }

	      path = tryDecode(path);
	      if (!path) return;

	      // DEBUG GROUP path

	      if (path.charAt(0) !== "/") {
	        path = "/" + path;
	      }

	      pathLen = path.length;
	      if (pathLen > 1 && path.charAt(pathLen - 1) === "/") {
	        path = path.substr(0, pathLen - 1);
	        isSlashDropped = true;
	      }

	      for (i = 0, l = path.length; i < l; i++) {
	        states = recognizeChar(states, path.charAt(i));
	        if (!states.length) {
	          break;
	        }
	      }

	      // END DEBUG GROUP

	      var solutions = [];
	      for (i = 0, l = states.length; i < l; i++) {
	        if (states[i].handlers) {
	          solutions.push(states[i]);
	        }
	      }

	      states = sortSolutions(solutions);

	      var state = solutions[0];

	      if (state && state.handlers) {
	        // if a trailing slash was dropped and a star segment is the last segment
	        // specified, put the trailing slash back
	        if (isSlashDropped && state.regex.source.slice(-5) === "(.+)$") {
	          path = path + "/";
	        }
	        return findHandler(state, path, queryParams);
	      }
	    }
	  };

	  RouteRecognizer.prototype.map = map;

	  var genQuery = RouteRecognizer.prototype.generateQueryString;

	  // export default for holding the Vue reference
	  var exports$1 = {};
	  /**
	   * Warn stuff.
	   *
	   * @param {String} msg
	   */

	  function warn$1(msg) {
	    /* istanbul ignore next */
	    if (typeof console !== 'undefined') {
	      console.error('[vue-router] ' + msg);
	    }
	  }

	  /**
	   * Resolve a relative path.
	   *
	   * @param {String} base
	   * @param {String} relative
	   * @param {Boolean} append
	   * @return {String}
	   */

	  function resolvePath(base, relative, append) {
	    var query = base.match(/(\?.*)$/);
	    if (query) {
	      query = query[1];
	      base = base.slice(0, -query.length);
	    }
	    // a query!
	    if (relative.charAt(0) === '?') {
	      return base + relative;
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
	      if (segment === '.') {
	        continue;
	      } else if (segment === '..') {
	        stack.pop();
	      } else {
	        stack.push(segment);
	      }
	    }
	    // ensure leading slash
	    if (stack[0] !== '') {
	      stack.unshift('');
	    }
	    return stack.join('/');
	  }

	  /**
	   * Forgiving check for a promise
	   *
	   * @param {Object} p
	   * @return {Boolean}
	   */

	  function isPromise(p) {
	    return p && typeof p.then === 'function';
	  }

	  /**
	   * Retrive a route config field from a component instance
	   * OR a component contructor.
	   *
	   * @param {Function|Vue} component
	   * @param {String} name
	   * @return {*}
	   */

	  function getRouteConfig(component, name) {
	    var options = component && (component.$options || component.options);
	    return options && options.route && options.route[name];
	  }

	  /**
	   * Resolve an async component factory. Have to do a dirty
	   * mock here because of Vue core's internal API depends on
	   * an ID check.
	   *
	   * @param {Object} handler
	   * @param {Function} cb
	   */

	  var resolver = undefined;

	  function resolveAsyncComponent(handler, cb) {
	    if (!resolver) {
	      resolver = {
	        resolve: exports$1.Vue.prototype._resolveComponent,
	        $options: {
	          components: {
	            _: handler.component
	          }
	        }
	      };
	    } else {
	      resolver.$options.components._ = handler.component;
	    }
	    resolver.resolve('_', function (Component) {
	      handler.component = Component;
	      cb(Component);
	    });
	  }

	  /**
	   * Map the dynamic segments in a path to params.
	   *
	   * @param {String} path
	   * @param {Object} params
	   * @param {Object} query
	   */

	  function mapParams(path, params, query) {
	    if (params === undefined) params = {};

	    path = path.replace(/:([^\/]+)/g, function (_, key) {
	      var val = params[key];
	      /* istanbul ignore if */
	      if (!val) {
	        warn$1('param "' + key + '" not found when generating ' + 'path for "' + path + '" with params ' + JSON.stringify(params));
	      }
	      return val || '';
	    });
	    if (query) {
	      path += genQuery(query);
	    }
	    return path;
	  }

	  var hashRE = /#.*$/;

	  var HTML5History = (function () {
	    function HTML5History(_ref) {
	      var root = _ref.root;
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, HTML5History);

	      if (root && root !== '/') {
	        // make sure there's the starting slash
	        if (root.charAt(0) !== '/') {
	          root = '/' + root;
	        }
	        // remove trailing slash
	        this.root = root.replace(/\/$/, '');
	        this.rootRE = new RegExp('^\\' + this.root);
	      } else {
	        this.root = null;
	      }
	      this.onChange = onChange;
	      // check base tag
	      var baseEl = document.querySelector('base');
	      this.base = baseEl && baseEl.getAttribute('href');
	    }

	    HTML5History.prototype.start = function start() {
	      var _this = this;

	      this.listener = function (e) {
	        var url = location.pathname + location.search;
	        if (_this.root) {
	          url = url.replace(_this.rootRE, '');
	        }
	        _this.onChange(url, e && e.state, location.hash);
	      };
	      window.addEventListener('popstate', this.listener);
	      this.listener();
	    };

	    HTML5History.prototype.stop = function stop() {
	      window.removeEventListener('popstate', this.listener);
	    };

	    HTML5History.prototype.go = function go(path, replace, append) {
	      var url = this.formatPath(path, append);
	      if (replace) {
	        history.replaceState({}, '', url);
	      } else {
	        // record scroll position by replacing current state
	        history.replaceState({
	          pos: {
	            x: window.pageXOffset,
	            y: window.pageYOffset
	          }
	        }, '', location.href);
	        // then push new state
	        history.pushState({}, '', url);
	      }
	      var hashMatch = path.match(hashRE);
	      var hash = hashMatch && hashMatch[0];
	      path = url
	      // strip hash so it doesn't mess up params
	      .replace(hashRE, '')
	      // remove root before matching
	      .replace(this.rootRE, '');
	      this.onChange(path, null, hash);
	    };

	    HTML5History.prototype.formatPath = function formatPath(path, append) {
	      return path.charAt(0) === '/'
	      // absolute path
	      ? this.root ? this.root + '/' + path.replace(/^\//, '') : path : resolvePath(this.base || location.pathname, path, append);
	    };

	    return HTML5History;
	  })();

	  var HashHistory = (function () {
	    function HashHistory(_ref) {
	      var hashbang = _ref.hashbang;
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, HashHistory);

	      this.hashbang = hashbang;
	      this.onChange = onChange;
	    }

	    HashHistory.prototype.start = function start() {
	      var self = this;
	      this.listener = function () {
	        var path = location.hash;
	        var raw = path.replace(/^#!?/, '');
	        // always
	        if (raw.charAt(0) !== '/') {
	          raw = '/' + raw;
	        }
	        var formattedPath = self.formatPath(raw);
	        if (formattedPath !== path) {
	          location.replace(formattedPath);
	          return;
	        }
	        // determine query
	        // note it's possible to have queries in both the actual URL
	        // and the hash fragment itself.
	        var query = location.search && path.indexOf('?') > -1 ? '&' + location.search.slice(1) : location.search;
	        self.onChange(path.replace(/^#!?/, '') + query);
	      };
	      window.addEventListener('hashchange', this.listener);
	      this.listener();
	    };

	    HashHistory.prototype.stop = function stop() {
	      window.removeEventListener('hashchange', this.listener);
	    };

	    HashHistory.prototype.go = function go(path, replace, append) {
	      path = this.formatPath(path, append);
	      if (replace) {
	        location.replace(path);
	      } else {
	        location.hash = path;
	      }
	    };

	    HashHistory.prototype.formatPath = function formatPath(path, append) {
	      var isAbsoloute = path.charAt(0) === '/';
	      var prefix = '#' + (this.hashbang ? '!' : '');
	      return isAbsoloute ? prefix + path : prefix + resolvePath(location.hash.replace(/^#!?/, ''), path, append);
	    };

	    return HashHistory;
	  })();

	  var AbstractHistory = (function () {
	    function AbstractHistory(_ref) {
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, AbstractHistory);

	      this.onChange = onChange;
	      this.currentPath = '/';
	    }

	    AbstractHistory.prototype.start = function start() {
	      this.onChange('/');
	    };

	    AbstractHistory.prototype.stop = function stop() {
	      // noop
	    };

	    AbstractHistory.prototype.go = function go(path, replace, append) {
	      path = this.currentPath = this.formatPath(path, append);
	      this.onChange(path);
	    };

	    AbstractHistory.prototype.formatPath = function formatPath(path, append) {
	      return path.charAt(0) === '/' ? path : resolvePath(this.currentPath, path, append);
	    };

	    return AbstractHistory;
	  })();

	  /**
	   * Determine the reusability of an existing router view.
	   *
	   * @param {Directive} view
	   * @param {Object} handler
	   * @param {Transition} transition
	   */

	  function canReuse(view, handler, transition) {
	    var component = view.childVM;
	    if (!component || !handler) {
	      return false;
	    }
	    // important: check view.Component here because it may
	    // have been changed in activate hook
	    if (view.Component !== handler.component) {
	      return false;
	    }
	    var canReuseFn = getRouteConfig(component, 'canReuse');
	    return typeof canReuseFn === 'boolean' ? canReuseFn : canReuseFn ? canReuseFn.call(component, {
	      to: transition.to,
	      from: transition.from
	    }) : true; // defaults to true
	  }

	  /**
	   * Check if a component can deactivate.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Function} next
	   */

	  function canDeactivate(view, transition, next) {
	    var fromComponent = view.childVM;
	    var hook = getRouteConfig(fromComponent, 'canDeactivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHook(hook, fromComponent, next, {
	        expectBoolean: true
	      });
	    }
	  }

	  /**
	   * Check if a component can activate.
	   *
	   * @param {Object} handler
	   * @param {Transition} transition
	   * @param {Function} next
	   */

	  function canActivate(handler, transition, next) {
	    resolveAsyncComponent(handler, function (Component) {
	      // have to check due to async-ness
	      if (transition.aborted) {
	        return;
	      }
	      // determine if this component can be activated
	      var hook = getRouteConfig(Component, 'canActivate');
	      if (!hook) {
	        next();
	      } else {
	        transition.callHook(hook, null, next, {
	          expectBoolean: true
	        });
	      }
	    });
	  }

	  /**
	   * Call deactivate hooks for existing router-views.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Function} next
	   */

	  function deactivate(view, transition, next) {
	    var component = view.childVM;
	    var hook = getRouteConfig(component, 'deactivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHooks(hook, component, next);
	    }
	  }

	  /**
	   * Activate / switch component for a router-view.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Number} depth
	   * @param {Function} [cb]
	   */

	  function activate(view, transition, depth, cb, reuse) {
	    var handler = transition.activateQueue[depth];
	    if (!handler) {
	      saveChildView(view);
	      if (view._bound) {
	        view.setComponent(null);
	      }
	      cb && cb();
	      return;
	    }

	    var Component = view.Component = handler.component;
	    var activateHook = getRouteConfig(Component, 'activate');
	    var dataHook = getRouteConfig(Component, 'data');
	    var waitForData = getRouteConfig(Component, 'waitForData');

	    view.depth = depth;
	    view.activated = false;

	    var component = undefined;
	    var loading = !!(dataHook && !waitForData);

	    // "reuse" is a flag passed down when the parent view is
	    // either reused via keep-alive or as a child of a kept-alive view.
	    // of course we can only reuse if the current kept-alive instance
	    // is of the correct type.
	    reuse = reuse && view.childVM && view.childVM.constructor === Component;

	    if (reuse) {
	      // just reuse
	      component = view.childVM;
	      component.$loadingRouteData = loading;
	    } else {
	      saveChildView(view);

	      // unbuild current component. this step also destroys
	      // and removes all nested child views.
	      view.unbuild(true);

	      // build the new component. this will also create the
	      // direct child view of the current one. it will register
	      // itself as view.childView.
	      component = view.build({
	        _meta: {
	          $loadingRouteData: loading
	        },
	        created: function created() {
	          this._routerView = view;
	        }
	      });

	      // handle keep-alive.
	      // when a kept-alive child vm is restored, we need to
	      // add its cached child views into the router's view list,
	      // and also properly update current view's child view.
	      if (view.keepAlive) {
	        component.$loadingRouteData = loading;
	        var cachedChildView = component._keepAliveRouterView;
	        if (cachedChildView) {
	          view.childView = cachedChildView;
	          component._keepAliveRouterView = null;
	        }
	      }
	    }

	    // cleanup the component in case the transition is aborted
	    // before the component is ever inserted.
	    var cleanup = function cleanup() {
	      component.$destroy();
	    };

	    // actually insert the component and trigger transition
	    var insert = function insert() {
	      if (reuse) {
	        cb && cb();
	        return;
	      }
	      var router = transition.router;
	      if (router._rendered || router._transitionOnLoad) {
	        view.transition(component);
	      } else {
	        // no transition on first render, manual transition
	        /* istanbul ignore if */
	        if (view.setCurrent) {
	          // 0.12 compat
	          view.setCurrent(component);
	        } else {
	          // 1.0
	          view.childVM = component;
	        }
	        component.$before(view.anchor, null, false);
	      }
	      cb && cb();
	    };

	    var afterData = function afterData() {
	      // activate the child view
	      if (view.childView) {
	        activate(view.childView, transition, depth + 1, null, reuse || view.keepAlive);
	      }
	      insert();
	    };

	    // called after activation hook is resolved
	    var afterActivate = function afterActivate() {
	      view.activated = true;
	      if (dataHook && waitForData) {
	        // wait until data loaded to insert
	        loadData(component, transition, dataHook, afterData, cleanup);
	      } else {
	        // load data and insert at the same time
	        if (dataHook) {
	          loadData(component, transition, dataHook);
	        }
	        afterData();
	      }
	    };

	    if (activateHook) {
	      transition.callHooks(activateHook, component, afterActivate, {
	        cleanup: cleanup,
	        postActivate: true
	      });
	    } else {
	      afterActivate();
	    }
	  }

	  /**
	   * Reuse a view, just reload data if necessary.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   */

	  function reuse(view, transition) {
	    var component = view.childVM;
	    var dataHook = getRouteConfig(component, 'data');
	    if (dataHook) {
	      loadData(component, transition, dataHook);
	    }
	  }

	  /**
	   * Asynchronously load and apply data to component.
	   *
	   * @param {Vue} component
	   * @param {Transition} transition
	   * @param {Function} hook
	   * @param {Function} cb
	   * @param {Function} cleanup
	   */

	  function loadData(component, transition, hook, cb, cleanup) {
	    component.$loadingRouteData = true;
	    transition.callHooks(hook, component, function () {
	      component.$loadingRouteData = false;
	      component.$emit('route-data-loaded', component);
	      cb && cb();
	    }, {
	      cleanup: cleanup,
	      postActivate: true,
	      processData: function processData(data) {
	        // handle promise sugar syntax
	        var promises = [];
	        if (isPlainObject(data)) {
	          Object.keys(data).forEach(function (key) {
	            var val = data[key];
	            if (isPromise(val)) {
	              promises.push(val.then(function (resolvedVal) {
	                component.$set(key, resolvedVal);
	              }));
	            } else {
	              component.$set(key, val);
	            }
	          });
	        }
	        if (promises.length) {
	          return promises[0].constructor.all(promises);
	        }
	      }
	    });
	  }

	  /**
	   * Save the child view for a kept-alive view so that
	   * we can restore it when it is switched back to.
	   *
	   * @param {Directive} view
	   */

	  function saveChildView(view) {
	    if (view.keepAlive && view.childVM && view.childView) {
	      view.childVM._keepAliveRouterView = view.childView;
	    }
	    view.childView = null;
	  }

	  /**
	   * Check plain object.
	   *
	   * @param {*} val
	   */

	  function isPlainObject(val) {
	    return Object.prototype.toString.call(val) === '[object Object]';
	  }

	  /**
	   * A RouteTransition object manages the pipeline of a
	   * router-view switching process. This is also the object
	   * passed into user route hooks.
	   *
	   * @param {Router} router
	   * @param {Route} to
	   * @param {Route} from
	   */

	  var RouteTransition = (function () {
	    function RouteTransition(router, to, from) {
	      babelHelpers.classCallCheck(this, RouteTransition);

	      this.router = router;
	      this.to = to;
	      this.from = from;
	      this.next = null;
	      this.aborted = false;
	      this.done = false;
	    }

	    /**
	     * Abort current transition and return to previous location.
	     */

	    RouteTransition.prototype.abort = function abort() {
	      if (!this.aborted) {
	        this.aborted = true;
	        // if the root path throws an error during validation
	        // on initial load, it gets caught in an infinite loop.
	        var abortingOnLoad = !this.from.path && this.to.path === '/';
	        if (!abortingOnLoad) {
	          this.router.replace(this.from.path || '/');
	        }
	      }
	    };

	    /**
	     * Abort current transition and redirect to a new location.
	     *
	     * @param {String} path
	     */

	    RouteTransition.prototype.redirect = function redirect(path) {
	      if (!this.aborted) {
	        this.aborted = true;
	        if (typeof path === 'string') {
	          path = mapParams(path, this.to.params, this.to.query);
	        } else {
	          path.params = path.params || this.to.params;
	          path.query = path.query || this.to.query;
	        }
	        this.router.replace(path);
	      }
	    };

	    /**
	     * A router view transition's pipeline can be described as
	     * follows, assuming we are transitioning from an existing
	     * <router-view> chain [Component A, Component B] to a new
	     * chain [Component A, Component C]:
	     *
	     *  A    A
	     *  | => |
	     *  B    C
	     *
	     * 1. Reusablity phase:
	     *   -> canReuse(A, A)
	     *   -> canReuse(B, C)
	     *   -> determine new queues:
	     *      - deactivation: [B]
	     *      - activation: [C]
	     *
	     * 2. Validation phase:
	     *   -> canDeactivate(B)
	     *   -> canActivate(C)
	     *
	     * 3. Activation phase:
	     *   -> deactivate(B)
	     *   -> activate(C)
	     *
	     * Each of these steps can be asynchronous, and any
	     * step can potentially abort the transition.
	     *
	     * @param {Function} cb
	     */

	    RouteTransition.prototype.start = function start(cb) {
	      var transition = this;

	      // determine the queue of views to deactivate
	      var deactivateQueue = [];
	      var view = this.router._rootView;
	      while (view) {
	        deactivateQueue.unshift(view);
	        view = view.childView;
	      }
	      var reverseDeactivateQueue = deactivateQueue.slice().reverse();

	      // determine the queue of route handlers to activate
	      var activateQueue = this.activateQueue = toArray(this.to.matched).map(function (match) {
	        return match.handler;
	      });

	      // 1. Reusability phase
	      var i = undefined,
	          reuseQueue = undefined;
	      for (i = 0; i < reverseDeactivateQueue.length; i++) {
	        if (!canReuse(reverseDeactivateQueue[i], activateQueue[i], transition)) {
	          break;
	        }
	      }
	      if (i > 0) {
	        reuseQueue = reverseDeactivateQueue.slice(0, i);
	        deactivateQueue = reverseDeactivateQueue.slice(i).reverse();
	        activateQueue = activateQueue.slice(i);
	      }

	      // 2. Validation phase
	      transition.runQueue(deactivateQueue, canDeactivate, function () {
	        transition.runQueue(activateQueue, canActivate, function () {
	          transition.runQueue(deactivateQueue, deactivate, function () {
	            // 3. Activation phase

	            // Update router current route
	            transition.router._onTransitionValidated(transition);

	            // trigger reuse for all reused views
	            reuseQueue && reuseQueue.forEach(function (view) {
	              return reuse(view, transition);
	            });

	            // the root of the chain that needs to be replaced
	            // is the top-most non-reusable view.
	            if (deactivateQueue.length) {
	              var _view = deactivateQueue[deactivateQueue.length - 1];
	              var depth = reuseQueue ? reuseQueue.length : 0;
	              activate(_view, transition, depth, cb);
	            } else {
	              cb();
	            }
	          });
	        });
	      });
	    };

	    /**
	     * Asynchronously and sequentially apply a function to a
	     * queue.
	     *
	     * @param {Array} queue
	     * @param {Function} fn
	     * @param {Function} cb
	     */

	    RouteTransition.prototype.runQueue = function runQueue(queue, fn, cb) {
	      var transition = this;
	      step(0);
	      function step(index) {
	        if (index >= queue.length) {
	          cb();
	        } else {
	          fn(queue[index], transition, function () {
	            step(index + 1);
	          });
	        }
	      }
	    };

	    /**
	     * Call a user provided route transition hook and handle
	     * the response (e.g. if the user returns a promise).
	     *
	     * If the user neither expects an argument nor returns a
	     * promise, the hook is assumed to be synchronous.
	     *
	     * @param {Function} hook
	     * @param {*} [context]
	     * @param {Function} [cb]
	     * @param {Object} [options]
	     *                 - {Boolean} expectBoolean
	     *                 - {Boolean} postActive
	     *                 - {Function} processData
	     *                 - {Function} cleanup
	     */

	    RouteTransition.prototype.callHook = function callHook(hook, context, cb) {
	      var _ref = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	      var _ref$expectBoolean = _ref.expectBoolean;
	      var expectBoolean = _ref$expectBoolean === undefined ? false : _ref$expectBoolean;
	      var _ref$postActivate = _ref.postActivate;
	      var postActivate = _ref$postActivate === undefined ? false : _ref$postActivate;
	      var processData = _ref.processData;
	      var cleanup = _ref.cleanup;

	      var transition = this;
	      var nextCalled = false;

	      // abort the transition
	      var abort = function abort() {
	        cleanup && cleanup();
	        transition.abort();
	      };

	      // handle errors
	      var onError = function onError(err) {
	        postActivate ? next() : abort();
	        if (err && !transition.router._suppress) {
	          warn$1('Uncaught error during transition: ');
	          throw err instanceof Error ? err : new Error(err);
	        }
	      };

	      // since promise swallows errors, we have to
	      // throw it in the next tick...
	      var onPromiseError = function onPromiseError(err) {
	        try {
	          onError(err);
	        } catch (e) {
	          setTimeout(function () {
	            throw e;
	          }, 0);
	        }
	      };

	      // advance the transition to the next step
	      var next = function next() {
	        if (nextCalled) {
	          warn$1('transition.next() should be called only once.');
	          return;
	        }
	        nextCalled = true;
	        if (transition.aborted) {
	          cleanup && cleanup();
	          return;
	        }
	        cb && cb();
	      };

	      var nextWithBoolean = function nextWithBoolean(res) {
	        if (typeof res === 'boolean') {
	          res ? next() : abort();
	        } else if (isPromise(res)) {
	          res.then(function (ok) {
	            ok ? next() : abort();
	          }, onPromiseError);
	        } else if (!hook.length) {
	          next();
	        }
	      };

	      var nextWithData = function nextWithData(data) {
	        var res = undefined;
	        try {
	          res = processData(data);
	        } catch (err) {
	          return onError(err);
	        }
	        if (isPromise(res)) {
	          res.then(next, onPromiseError);
	        } else {
	          next();
	        }
	      };

	      // expose a clone of the transition object, so that each
	      // hook gets a clean copy and prevent the user from
	      // messing with the internals.
	      var exposed = {
	        to: transition.to,
	        from: transition.from,
	        abort: abort,
	        next: processData ? nextWithData : next,
	        redirect: function redirect() {
	          transition.redirect.apply(transition, arguments);
	        }
	      };

	      // actually call the hook
	      var res = undefined;
	      try {
	        res = hook.call(context, exposed);
	      } catch (err) {
	        return onError(err);
	      }

	      if (expectBoolean) {
	        // boolean hooks
	        nextWithBoolean(res);
	      } else if (isPromise(res)) {
	        // promise
	        if (processData) {
	          res.then(nextWithData, onPromiseError);
	        } else {
	          res.then(next, onPromiseError);
	        }
	      } else if (processData && isPlainOjbect(res)) {
	        // data promise sugar
	        nextWithData(res);
	      } else if (!hook.length) {
	        next();
	      }
	    };

	    /**
	     * Call a single hook or an array of async hooks in series.
	     *
	     * @param {Array} hooks
	     * @param {*} context
	     * @param {Function} cb
	     * @param {Object} [options]
	     */

	    RouteTransition.prototype.callHooks = function callHooks(hooks, context, cb, options) {
	      var _this = this;

	      if (Array.isArray(hooks)) {
	        this.runQueue(hooks, function (hook, _, next) {
	          if (!_this.aborted) {
	            _this.callHook(hook, context, next, options);
	          }
	        }, cb);
	      } else {
	        this.callHook(hooks, context, cb, options);
	      }
	    };

	    return RouteTransition;
	  })();

	  function isPlainOjbect(val) {
	    return Object.prototype.toString.call(val) === '[object Object]';
	  }

	  function toArray(val) {
	    return val ? Array.prototype.slice.call(val) : [];
	  }

	  var internalKeysRE = /^(component|subRoutes|fullPath)$/;

	  /**
	   * Route Context Object
	   *
	   * @param {String} path
	   * @param {Router} router
	   */

	  var Route = function Route(path, router) {
	    var _this = this;

	    babelHelpers.classCallCheck(this, Route);

	    var matched = router._recognizer.recognize(path);
	    if (matched) {
	      // copy all custom fields from route configs
	      [].forEach.call(matched, function (match) {
	        for (var key in match.handler) {
	          if (!internalKeysRE.test(key)) {
	            _this[key] = match.handler[key];
	          }
	        }
	      });
	      // set query and params
	      this.query = matched.queryParams;
	      this.params = [].reduce.call(matched, function (prev, cur) {
	        if (cur.params) {
	          for (var key in cur.params) {
	            prev[key] = cur.params[key];
	          }
	        }
	        return prev;
	      }, {});
	    }
	    // expose path and router
	    this.path = path;
	    // for internal use
	    this.matched = matched || router._notFoundHandler;
	    // internal reference to router
	    Object.defineProperty(this, 'router', {
	      enumerable: false,
	      value: router
	    });
	    // Important: freeze self to prevent observation
	    Object.freeze(this);
	  };

	  function applyOverride (Vue) {
	    var _Vue$util = Vue.util;
	    var extend = _Vue$util.extend;
	    var isArray = _Vue$util.isArray;
	    var defineReactive = _Vue$util.defineReactive;

	    // override Vue's init and destroy process to keep track of router instances
	    var init = Vue.prototype._init;
	    Vue.prototype._init = function (options) {
	      options = options || {};
	      var root = options._parent || options.parent || this;
	      var router = root.$router;
	      var route = root.$route;
	      if (router) {
	        // expose router
	        this.$router = router;
	        router._children.push(this);
	        /* istanbul ignore if */
	        if (this._defineMeta) {
	          // 0.12
	          this._defineMeta('$route', route);
	        } else {
	          // 1.0
	          defineReactive(this, '$route', route);
	        }
	      }
	      init.call(this, options);
	    };

	    var destroy = Vue.prototype._destroy;
	    Vue.prototype._destroy = function () {
	      if (!this._isBeingDestroyed && this.$router) {
	        this.$router._children.$remove(this);
	      }
	      destroy.apply(this, arguments);
	    };

	    // 1.0 only: enable route mixins
	    var strats = Vue.config.optionMergeStrategies;
	    var hooksToMergeRE = /^(data|activate|deactivate)$/;

	    if (strats) {
	      strats.route = function (parentVal, childVal) {
	        if (!childVal) return parentVal;
	        if (!parentVal) return childVal;
	        var ret = {};
	        extend(ret, parentVal);
	        for (var key in childVal) {
	          var a = ret[key];
	          var b = childVal[key];
	          // for data, activate and deactivate, we need to merge them into
	          // arrays similar to lifecycle hooks.
	          if (a && hooksToMergeRE.test(key)) {
	            ret[key] = (isArray(a) ? a : [a]).concat(b);
	          } else {
	            ret[key] = b;
	          }
	        }
	        return ret;
	      };
	    }
	  }

	  function View (Vue) {

	    var _ = Vue.util;
	    var componentDef =
	    // 0.12
	    Vue.directive('_component') ||
	    // 1.0
	    Vue.internalDirectives.component;
	    // <router-view> extends the internal component directive
	    var viewDef = _.extend({}, componentDef);

	    // with some overrides
	    _.extend(viewDef, {

	      _isRouterView: true,

	      bind: function bind() {
	        var route = this.vm.$route;
	        /* istanbul ignore if */
	        if (!route) {
	          warn$1('<router-view> can only be used inside a ' + 'router-enabled app.');
	          return;
	        }
	        // force dynamic directive so v-component doesn't
	        // attempt to build right now
	        this._isDynamicLiteral = true;
	        // finally, init by delegating to v-component
	        componentDef.bind.call(this);

	        // locate the parent view
	        var parentView = undefined;
	        var parent = this.vm;
	        while (parent) {
	          if (parent._routerView) {
	            parentView = parent._routerView;
	            break;
	          }
	          parent = parent.$parent;
	        }
	        if (parentView) {
	          // register self as a child of the parent view,
	          // instead of activating now. This is so that the
	          // child's activate hook is called after the
	          // parent's has resolved.
	          this.parentView = parentView;
	          parentView.childView = this;
	        } else {
	          // this is the root view!
	          var router = route.router;
	          router._rootView = this;
	        }

	        // handle late-rendered view
	        // two possibilities:
	        // 1. root view rendered after transition has been
	        //    validated;
	        // 2. child view rendered after parent view has been
	        //    activated.
	        var transition = route.router._currentTransition;
	        if (!parentView && transition.done || parentView && parentView.activated) {
	          var depth = parentView ? parentView.depth + 1 : 0;
	          activate(this, transition, depth);
	        }
	      },

	      unbind: function unbind() {
	        if (this.parentView) {
	          this.parentView.childView = null;
	        }
	        componentDef.unbind.call(this);
	      }
	    });

	    Vue.elementDirective('router-view', viewDef);
	  }

	  var trailingSlashRE = /\/$/;
	  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	  var queryStringRE = /\?.*$/;

	  // install v-link, which provides navigation support for
	  // HTML5 history mode
	  function Link (Vue) {
	    var _Vue$util = Vue.util;
	    var _bind = _Vue$util.bind;
	    var isObject = _Vue$util.isObject;
	    var addClass = _Vue$util.addClass;
	    var removeClass = _Vue$util.removeClass;

	    var onPriority = Vue.directive('on').priority;
	    var LINK_UPDATE = '__vue-router-link-update__';

	    var activeId = 0;

	    Vue.directive('link-active', {
	      priority: 9999,
	      bind: function bind() {
	        var _this = this;

	        var id = String(activeId++);
	        // collect v-links contained within this element.
	        // we need do this here before the parent-child relationship
	        // gets messed up by terminal directives (if, for, components)
	        var childLinks = this.el.querySelectorAll('[v-link]');
	        for (var i = 0, l = childLinks.length; i < l; i++) {
	          var link = childLinks[i];
	          var existingId = link.getAttribute(LINK_UPDATE);
	          var value = existingId ? existingId + ',' + id : id;
	          // leave a mark on the link element which can be persisted
	          // through fragment clones.
	          link.setAttribute(LINK_UPDATE, value);
	        }
	        this.vm.$on(LINK_UPDATE, this.cb = function (link, path) {
	          if (link.activeIds.indexOf(id) > -1) {
	            link.updateClasses(path, _this.el);
	          }
	        });
	      },
	      unbind: function unbind() {
	        this.vm.$off(LINK_UPDATE, this.cb);
	      }
	    });

	    Vue.directive('link', {
	      priority: onPriority - 2,

	      bind: function bind() {
	        var vm = this.vm;
	        /* istanbul ignore if */
	        if (!vm.$route) {
	          warn$1('v-link can only be used inside a router-enabled app.');
	          return;
	        }
	        this.router = vm.$route.router;
	        // update things when the route changes
	        this.unwatch = vm.$watch('$route', _bind(this.onRouteUpdate, this));
	        // check v-link-active ids
	        var activeIds = this.el.getAttribute(LINK_UPDATE);
	        if (activeIds) {
	          this.el.removeAttribute(LINK_UPDATE);
	          this.activeIds = activeIds.split(',');
	        }
	        // no need to handle click if link expects to be opened
	        // in a new window/tab.
	        /* istanbul ignore if */
	        if (this.el.tagName === 'A' && this.el.getAttribute('target') === '_blank') {
	          return;
	        }
	        // handle click
	        this.handler = _bind(this.onClick, this);
	        this.el.addEventListener('click', this.handler);
	      },

	      update: function update(target) {
	        this.target = target;
	        if (isObject(target)) {
	          this.append = target.append;
	          this.exact = target.exact;
	          this.prevActiveClass = this.activeClass;
	          this.activeClass = target.activeClass;
	        }
	        this.onRouteUpdate(this.vm.$route);
	      },

	      onClick: function onClick(e) {
	        // don't redirect with control keys
	        /* istanbul ignore if */
	        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
	        // don't redirect when preventDefault called
	        /* istanbul ignore if */
	        if (e.defaultPrevented) return;
	        // don't redirect on right click
	        /* istanbul ignore if */
	        if (e.button !== 0) return;

	        var target = this.target;
	        if (target) {
	          // v-link with expression, just go
	          e.preventDefault();
	          this.router.go(target);
	        } else {
	          // no expression, delegate for an <a> inside
	          var el = e.target;
	          while (el.tagName !== 'A' && el !== this.el) {
	            el = el.parentNode;
	          }
	          if (el.tagName === 'A' && sameOrigin(el)) {
	            e.preventDefault();
	            var path = el.pathname;
	            if (this.router.history.root) {
	              path = path.replace(this.router.history.rootRE, '');
	            }
	            this.router.go({
	              path: path,
	              replace: target && target.replace,
	              append: target && target.append
	            });
	          }
	        }
	      },

	      onRouteUpdate: function onRouteUpdate(route) {
	        // router.stringifyPath is dependent on current route
	        // and needs to be called again whenver route changes.
	        var newPath = this.router.stringifyPath(this.target);
	        if (this.path !== newPath) {
	          this.path = newPath;
	          this.updateActiveMatch();
	          this.updateHref();
	        }
	        if (this.activeIds) {
	          this.vm.$emit(LINK_UPDATE, this, route.path);
	        } else {
	          this.updateClasses(route.path, this.el);
	        }
	      },

	      updateActiveMatch: function updateActiveMatch() {
	        this.activeRE = this.path && !this.exact ? new RegExp('^' + this.path.replace(/\/$/, '').replace(queryStringRE, '').replace(regexEscapeRE, '\\$&') + '(\\/|$)') : null;
	      },

	      updateHref: function updateHref() {
	        if (this.el.tagName !== 'A') {
	          return;
	        }
	        var path = this.path;
	        var router = this.router;
	        var isAbsolute = path.charAt(0) === '/';
	        // do not format non-hash relative paths
	        var href = path && (router.mode === 'hash' || isAbsolute) ? router.history.formatPath(path, this.append) : path;
	        if (href) {
	          this.el.href = href;
	        } else {
	          this.el.removeAttribute('href');
	        }
	      },

	      updateClasses: function updateClasses(path, el) {
	        var activeClass = this.activeClass || this.router._linkActiveClass;
	        // clear old class
	        if (this.prevActiveClass && this.prevActiveClass !== activeClass) {
	          toggleClasses(el, this.prevActiveClass, removeClass);
	        }
	        // remove query string before matching
	        var dest = this.path.replace(queryStringRE, '');
	        path = path.replace(queryStringRE, '');
	        // add new class
	        if (this.exact) {
	          if (dest === path ||
	          // also allow additional trailing slash
	          dest.charAt(dest.length - 1) !== '/' && dest === path.replace(trailingSlashRE, '')) {
	            toggleClasses(el, activeClass, addClass);
	          } else {
	            toggleClasses(el, activeClass, removeClass);
	          }
	        } else {
	          if (this.activeRE && this.activeRE.test(path)) {
	            toggleClasses(el, activeClass, addClass);
	          } else {
	            toggleClasses(el, activeClass, removeClass);
	          }
	        }
	      },

	      unbind: function unbind() {
	        this.el.removeEventListener('click', this.handler);
	        this.unwatch && this.unwatch();
	      }
	    });

	    function sameOrigin(link) {
	      return link.protocol === location.protocol && link.hostname === location.hostname && link.port === location.port;
	    }

	    // this function is copied from v-bind:class implementation until
	    // we properly expose it...
	    function toggleClasses(el, key, fn) {
	      key = key.trim();
	      if (key.indexOf(' ') === -1) {
	        fn(el, key);
	        return;
	      }
	      var keys = key.split(/\s+/);
	      for (var i = 0, l = keys.length; i < l; i++) {
	        fn(el, keys[i]);
	      }
	    }
	  }

	  var historyBackends = {
	    abstract: AbstractHistory,
	    hash: HashHistory,
	    html5: HTML5History
	  };

	  // late bind during install
	  var Vue = undefined;

	  /**
	   * Router constructor
	   *
	   * @param {Object} [options]
	   */

	  var Router = (function () {
	    function Router() {
	      var _this = this;

	      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	      var _ref$hashbang = _ref.hashbang;
	      var hashbang = _ref$hashbang === undefined ? true : _ref$hashbang;
	      var _ref$abstract = _ref.abstract;
	      var abstract = _ref$abstract === undefined ? false : _ref$abstract;
	      var _ref$history = _ref.history;
	      var history = _ref$history === undefined ? false : _ref$history;
	      var _ref$saveScrollPosition = _ref.saveScrollPosition;
	      var saveScrollPosition = _ref$saveScrollPosition === undefined ? false : _ref$saveScrollPosition;
	      var _ref$transitionOnLoad = _ref.transitionOnLoad;
	      var transitionOnLoad = _ref$transitionOnLoad === undefined ? false : _ref$transitionOnLoad;
	      var _ref$suppressTransitionError = _ref.suppressTransitionError;
	      var suppressTransitionError = _ref$suppressTransitionError === undefined ? false : _ref$suppressTransitionError;
	      var _ref$root = _ref.root;
	      var root = _ref$root === undefined ? null : _ref$root;
	      var _ref$linkActiveClass = _ref.linkActiveClass;
	      var linkActiveClass = _ref$linkActiveClass === undefined ? 'v-link-active' : _ref$linkActiveClass;
	      babelHelpers.classCallCheck(this, Router);

	      /* istanbul ignore if */
	      if (!Router.installed) {
	        throw new Error('Please install the Router with Vue.use() before ' + 'creating an instance.');
	      }

	      // Vue instances
	      this.app = null;
	      this._children = [];

	      // route recognizer
	      this._recognizer = new RouteRecognizer();
	      this._guardRecognizer = new RouteRecognizer();

	      // state
	      this._started = false;
	      this._startCb = null;
	      this._currentRoute = {};
	      this._currentTransition = null;
	      this._previousTransition = null;
	      this._notFoundHandler = null;
	      this._notFoundRedirect = null;
	      this._beforeEachHooks = [];
	      this._afterEachHooks = [];

	      // trigger transition on initial render?
	      this._rendered = false;
	      this._transitionOnLoad = transitionOnLoad;

	      // history mode
	      this._root = root;
	      this._abstract = abstract;
	      this._hashbang = hashbang;

	      // check if HTML5 history is available
	      var hasPushState = typeof window !== 'undefined' && window.history && window.history.pushState;
	      this._history = history && hasPushState;
	      this._historyFallback = history && !hasPushState;

	      // create history object
	      var inBrowser = Vue.util.inBrowser;
	      this.mode = !inBrowser || this._abstract ? 'abstract' : this._history ? 'html5' : 'hash';

	      var History = historyBackends[this.mode];
	      this.history = new History({
	        root: root,
	        hashbang: this._hashbang,
	        onChange: function onChange(path, state, anchor) {
	          _this._match(path, state, anchor);
	        }
	      });

	      // other options
	      this._saveScrollPosition = saveScrollPosition;
	      this._linkActiveClass = linkActiveClass;
	      this._suppress = suppressTransitionError;
	    }

	    /**
	     * Allow directly passing components to a route
	     * definition.
	     *
	     * @param {String} path
	     * @param {Object} handler
	     */

	    // API ===================================================

	    /**
	    * Register a map of top-level paths.
	    *
	    * @param {Object} map
	    */

	    Router.prototype.map = function map(_map) {
	      for (var route in _map) {
	        this.on(route, _map[route]);
	      }
	      return this;
	    };

	    /**
	     * Register a single root-level path
	     *
	     * @param {String} rootPath
	     * @param {Object} handler
	     *                 - {String} component
	     *                 - {Object} [subRoutes]
	     *                 - {Boolean} [forceRefresh]
	     *                 - {Function} [before]
	     *                 - {Function} [after]
	     */

	    Router.prototype.on = function on(rootPath, handler) {
	      if (rootPath === '*') {
	        this._notFound(handler);
	      } else {
	        this._addRoute(rootPath, handler, []);
	      }
	      return this;
	    };

	    /**
	     * Set redirects.
	     *
	     * @param {Object} map
	     */

	    Router.prototype.redirect = function redirect(map) {
	      for (var path in map) {
	        this._addRedirect(path, map[path]);
	      }
	      return this;
	    };

	    /**
	     * Set aliases.
	     *
	     * @param {Object} map
	     */

	    Router.prototype.alias = function alias(map) {
	      for (var path in map) {
	        this._addAlias(path, map[path]);
	      }
	      return this;
	    };

	    /**
	     * Set global before hook.
	     *
	     * @param {Function} fn
	     */

	    Router.prototype.beforeEach = function beforeEach(fn) {
	      this._beforeEachHooks.push(fn);
	      return this;
	    };

	    /**
	     * Set global after hook.
	     *
	     * @param {Function} fn
	     */

	    Router.prototype.afterEach = function afterEach(fn) {
	      this._afterEachHooks.push(fn);
	      return this;
	    };

	    /**
	     * Navigate to a given path.
	     * The path can be an object describing a named path in
	     * the format of { name: '...', params: {}, query: {}}
	     * The path is assumed to be already decoded, and will
	     * be resolved against root (if provided)
	     *
	     * @param {String|Object} path
	     * @param {Boolean} [replace]
	     */

	    Router.prototype.go = function go(path) {
	      var replace = false;
	      var append = false;
	      if (Vue.util.isObject(path)) {
	        replace = path.replace;
	        append = path.append;
	      }
	      path = this.stringifyPath(path);
	      if (path) {
	        this.history.go(path, replace, append);
	      }
	    };

	    /**
	     * Short hand for replacing current path
	     *
	     * @param {String} path
	     */

	    Router.prototype.replace = function replace(path) {
	      if (typeof path === 'string') {
	        path = { path: path };
	      }
	      path.replace = true;
	      this.go(path);
	    };

	    /**
	     * Start the router.
	     *
	     * @param {VueConstructor} App
	     * @param {String|Element} container
	     * @param {Function} [cb]
	     */

	    Router.prototype.start = function start(App, container, cb) {
	      /* istanbul ignore if */
	      if (this._started) {
	        warn$1('already started.');
	        return;
	      }
	      this._started = true;
	      this._startCb = cb;
	      if (!this.app) {
	        /* istanbul ignore if */
	        if (!App || !container) {
	          throw new Error('Must start vue-router with a component and a ' + 'root container.');
	        }
	        /* istanbul ignore if */
	        if (App instanceof Vue) {
	          throw new Error('Must start vue-router with a component, not a ' + 'Vue instance.');
	        }
	        this._appContainer = container;
	        var Ctor = this._appConstructor = typeof App === 'function' ? App : Vue.extend(App);
	        // give it a name for better debugging
	        Ctor.options.name = Ctor.options.name || 'RouterApp';
	      }

	      // handle history fallback in browsers that do not
	      // support HTML5 history API
	      if (this._historyFallback) {
	        var _location = window.location;
	        var _history = new HTML5History({ root: this._root });
	        var path = _history.root ? _location.pathname.replace(_history.rootRE, '') : _location.pathname;
	        if (path && path !== '/') {
	          _location.assign((_history.root || '') + '/' + this.history.formatPath(path) + _location.search);
	          return;
	        }
	      }

	      this.history.start();
	    };

	    /**
	     * Stop listening to route changes.
	     */

	    Router.prototype.stop = function stop() {
	      this.history.stop();
	      this._started = false;
	    };

	    /**
	     * Normalize named route object / string paths into
	     * a string.
	     *
	     * @param {Object|String|Number} path
	     * @return {String}
	     */

	    Router.prototype.stringifyPath = function stringifyPath(path) {
	      var generatedPath = '';
	      if (path && typeof path === 'object') {
	        if (path.name) {
	          var extend = Vue.util.extend;
	          var currentParams = this._currentTransition && this._currentTransition.to.params;
	          var targetParams = path.params || {};
	          var params = currentParams ? extend(extend({}, currentParams), targetParams) : targetParams;
	          generatedPath = encodeURI(this._recognizer.generate(path.name, params));
	        } else if (path.path) {
	          generatedPath = encodeURI(path.path);
	        }
	        if (path.query) {
	          // note: the generated query string is pre-URL-encoded by the recognizer
	          var query = this._recognizer.generateQueryString(path.query);
	          if (generatedPath.indexOf('?') > -1) {
	            generatedPath += '&' + query.slice(1);
	          } else {
	            generatedPath += query;
	          }
	        }
	      } else {
	        generatedPath = encodeURI(path ? path + '' : '');
	      }
	      return generatedPath;
	    };

	    // Internal methods ======================================

	    /**
	    * Add a route containing a list of segments to the internal
	    * route recognizer. Will be called recursively to add all
	    * possible sub-routes.
	    *
	    * @param {String} path
	    * @param {Object} handler
	    * @param {Array} segments
	    */

	    Router.prototype._addRoute = function _addRoute(path, handler, segments) {
	      guardComponent(path, handler);
	      handler.path = path;
	      handler.fullPath = (segments.reduce(function (path, segment) {
	        return path + segment.path;
	      }, '') + path).replace('//', '/');
	      segments.push({
	        path: path,
	        handler: handler
	      });
	      this._recognizer.add(segments, {
	        as: handler.name
	      });
	      // add sub routes
	      if (handler.subRoutes) {
	        for (var subPath in handler.subRoutes) {
	          // recursively walk all sub routes
	          this._addRoute(subPath, handler.subRoutes[subPath],
	          // pass a copy in recursion to avoid mutating
	          // across branches
	          segments.slice());
	        }
	      }
	    };

	    /**
	     * Set the notFound route handler.
	     *
	     * @param {Object} handler
	     */

	    Router.prototype._notFound = function _notFound(handler) {
	      guardComponent('*', handler);
	      this._notFoundHandler = [{ handler: handler }];
	    };

	    /**
	     * Add a redirect record.
	     *
	     * @param {String} path
	     * @param {String} redirectPath
	     */

	    Router.prototype._addRedirect = function _addRedirect(path, redirectPath) {
	      if (path === '*') {
	        this._notFoundRedirect = redirectPath;
	      } else {
	        this._addGuard(path, redirectPath, this.replace);
	      }
	    };

	    /**
	     * Add an alias record.
	     *
	     * @param {String} path
	     * @param {String} aliasPath
	     */

	    Router.prototype._addAlias = function _addAlias(path, aliasPath) {
	      this._addGuard(path, aliasPath, this._match);
	    };

	    /**
	     * Add a path guard.
	     *
	     * @param {String} path
	     * @param {String} mappedPath
	     * @param {Function} handler
	     */

	    Router.prototype._addGuard = function _addGuard(path, mappedPath, _handler) {
	      var _this2 = this;

	      this._guardRecognizer.add([{
	        path: path,
	        handler: function handler(match, query) {
	          var realPath = mapParams(mappedPath, match.params, query);
	          _handler.call(_this2, realPath);
	        }
	      }]);
	    };

	    /**
	     * Check if a path matches any redirect records.
	     *
	     * @param {String} path
	     * @return {Boolean} - if true, will skip normal match.
	     */

	    Router.prototype._checkGuard = function _checkGuard(path) {
	      var matched = this._guardRecognizer.recognize(path, true);
	      if (matched) {
	        matched[0].handler(matched[0], matched.queryParams);
	        return true;
	      } else if (this._notFoundRedirect) {
	        matched = this._recognizer.recognize(path);
	        if (!matched) {
	          this.replace(this._notFoundRedirect);
	          return true;
	        }
	      }
	    };

	    /**
	     * Match a URL path and set the route context on vm,
	     * triggering view updates.
	     *
	     * @param {String} path
	     * @param {Object} [state]
	     * @param {String} [anchor]
	     */

	    Router.prototype._match = function _match(path, state, anchor) {
	      var _this3 = this;

	      if (this._checkGuard(path)) {
	        return;
	      }

	      var currentRoute = this._currentRoute;
	      var currentTransition = this._currentTransition;

	      if (currentTransition) {
	        if (currentTransition.to.path === path) {
	          // do nothing if we have an active transition going to the same path
	          return;
	        } else if (currentRoute.path === path) {
	          // We are going to the same path, but we also have an ongoing but
	          // not-yet-validated transition. Abort that transition and reset to
	          // prev transition.
	          currentTransition.aborted = true;
	          this._currentTransition = this._prevTransition;
	          return;
	        } else {
	          // going to a totally different path. abort ongoing transition.
	          currentTransition.aborted = true;
	        }
	      }

	      // construct new route and transition context
	      var route = new Route(path, this);
	      var transition = new RouteTransition(this, route, currentRoute);

	      // current transition is updated right now.
	      // however, current route will only be updated after the transition has
	      // been validated.
	      this._prevTransition = currentTransition;
	      this._currentTransition = transition;

	      if (!this.app) {
	        (function () {
	          // initial render
	          var router = _this3;
	          _this3.app = new _this3._appConstructor({
	            el: _this3._appContainer,
	            created: function created() {
	              this.$router = router;
	            },
	            _meta: {
	              $route: route
	            }
	          });
	        })();
	      }

	      // check global before hook
	      var beforeHooks = this._beforeEachHooks;
	      var startTransition = function startTransition() {
	        transition.start(function () {
	          _this3._postTransition(route, state, anchor);
	        });
	      };

	      if (beforeHooks.length) {
	        transition.runQueue(beforeHooks, function (hook, _, next) {
	          if (transition === _this3._currentTransition) {
	            transition.callHook(hook, null, next, {
	              expectBoolean: true
	            });
	          }
	        }, startTransition);
	      } else {
	        startTransition();
	      }

	      if (!this._rendered && this._startCb) {
	        this._startCb.call(null);
	      }

	      // HACK:
	      // set rendered to true after the transition start, so
	      // that components that are acitvated synchronously know
	      // whether it is the initial render.
	      this._rendered = true;
	    };

	    /**
	     * Set current to the new transition.
	     * This is called by the transition object when the
	     * validation of a route has succeeded.
	     *
	     * @param {Transition} transition
	     */

	    Router.prototype._onTransitionValidated = function _onTransitionValidated(transition) {
	      // set current route
	      var route = this._currentRoute = transition.to;
	      // update route context for all children
	      if (this.app.$route !== route) {
	        this.app.$route = route;
	        this._children.forEach(function (child) {
	          child.$route = route;
	        });
	      }
	      // call global after hook
	      if (this._afterEachHooks.length) {
	        this._afterEachHooks.forEach(function (hook) {
	          return hook.call(null, {
	            to: transition.to,
	            from: transition.from
	          });
	        });
	      }
	      this._currentTransition.done = true;
	    };

	    /**
	     * Handle stuff after the transition.
	     *
	     * @param {Route} route
	     * @param {Object} [state]
	     * @param {String} [anchor]
	     */

	    Router.prototype._postTransition = function _postTransition(route, state, anchor) {
	      // handle scroll positions
	      // saved scroll positions take priority
	      // then we check if the path has an anchor
	      var pos = state && state.pos;
	      if (pos && this._saveScrollPosition) {
	        Vue.nextTick(function () {
	          window.scrollTo(pos.x, pos.y);
	        });
	      } else if (anchor) {
	        Vue.nextTick(function () {
	          var el = document.getElementById(anchor.slice(1));
	          if (el) {
	            window.scrollTo(window.scrollX, el.offsetTop);
	          }
	        });
	      }
	    };

	    return Router;
	  })();

	  function guardComponent(path, handler) {
	    var comp = handler.component;
	    if (Vue.util.isPlainObject(comp)) {
	      comp = handler.component = Vue.extend(comp);
	    }
	    /* istanbul ignore if */
	    if (typeof comp !== 'function') {
	      handler.component = null;
	      warn$1('invalid component for route "' + path + '".');
	    }
	  }

	  /* Installation */

	  Router.installed = false;

	  /**
	   * Installation interface.
	   * Install the necessary directives.
	   */

	  Router.install = function (externalVue) {
	    /* istanbul ignore if */
	    if (Router.installed) {
	      warn$1('already installed.');
	      return;
	    }
	    Vue = externalVue;
	    applyOverride(Vue);
	    View(Vue);
	    Link(Vue);
	    exports$1.Vue = Vue;
	    Router.installed = true;
	  };

	  // auto install
	  /* istanbul ignore if */
	  if (typeof window !== 'undefined' && window.Vue) {
	    window.Vue.use(Router);
	  }

	  return Router;

	}));

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(9)
	__vue_script__ = __webpack_require__(13)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\App.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(15)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-fac32dec/App.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(10);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/.0.23.1@css-loader/index.js!./../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../node_modules/.2.2.3@less-loader/index.js!./../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./App.vue", function() {
				var newContent = require("!!./../node_modules/.0.23.1@css-loader/index.js!./../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../node_modules/.2.2.3@less-loader/index.js!./../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./App.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, ".xcui .xcui-fade-transition {\n  opacity: 1;\n  -webkit-transition: opacity linear 0.2s;\n  transition: opacity linear 0.2s;\n}\n.xcui .xcui-fade-enter,\n.xcui .xcui-fade-leave {\n  opacity: 0;\n}\n.xcui .xcui-dialog-transition {\n  opacity: 1;\n  -webkit-transition-duration: .4s;\n          transition-duration: .4s;\n  -webkit-transform: translate(-50%, -50%) scale(1) !important;\n          transform: translate(-50%, -50%) scale(1) !important;\n  -webkit-transition-property: opacity, -webkit-transform!important;\n  transition-property: opacity, -webkit-transform!important;\n  transition-property: transform, opacity!important;\n  transition-property: transform, opacity, -webkit-transform!important;\n}\n.xcui .xcui-dialog-enter,\n.xcui .xcui-dialog-leave {\n  opacity: 0;\n}\n.xcui .xcui-dialog-enter {\n  -webkit-transform: translate(-50%, -50%) scale(1.185) !important;\n          transform: translate(-50%, -50%) scale(1.185) !important;\n}\n.xcui .xcui-dialog-leave {\n  -webkit-transform: translate(-50%, -50%) scale(1) !important;\n          transform: translate(-50%, -50%) scale(1) !important;\n}\n#header {\n  height: 50px;\n  background: #FF2D4B;\n  padding-left: 50px;\n  border-bottom: 1px solid #f1f1f1;\n}\n#header .logo {\n  font-size: 22px;\n  line-height: 50px;\n  height: 50px;\n  display: inline-block;\n  color: #fff;\n}\n#header .logo:hover {\n  text-decoration: none;\n}\n#header .logo img {\n  width: 32px;\n  height: 32px;\n  margin-top: -8px;\n}\n", ""]);

	// exports


/***/ },
/* 11 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
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


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _logo_nobg_32x322x = __webpack_require__(14);

	var _logo_nobg_32x322x2 = _interopRequireDefault(_logo_nobg_32x322x);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    data: function data() {
	        return {
	            logoUrl: _logo_nobg_32x322x2.default
	        };
	    }
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAADOJJREFUeAHtWwl0FeUV/uateUkIgSwGAhIwLAZlt9FKFbBStdYFRauWg2iPskkAqUcQNIALbsgiKiitAlqPqLgUFUGJFVE8YEXZyhaWBBOJCZCNl7dMv5thMi/JW7Ogod5z3vtn5l/vN/e/9/73/wf4Pyfl5+ZfVVUFg2eaZRxKTrb7dI+nSQBQs7NNWLe/A2ItfeDx9oaitIPVEge7LRox0fbq1GGLgtVq43MrbDb+qlM7LBYFFrMLbo8HVVVeOKtcOFnlhMvtREUFr51O3lfxeSWfVcHD525PBbxqMczmfKg4CAVH4CwthCOlRPlwoTMSEBsEgNrnungkxV9HhoYguW17ZKSno2fXJHRLi0bqWYAjKpIxNKysm8JyogwoKgF+OlaFwqIyFBSVI6/gGNMinCg9jvLKMrg8x6CoO+HBHv4+V3JePunbYdgAqBcNdyAuZhLaJQ/CkIv6Y1BmW3Rs59vWL/e6+DgIjIq7p5ejwpGifLe8POzBqoNuj1KHjnpOfeT5vWphEadsC6aCo6o6dOSdvsxbfG/qXquDR/ZE55TlWJTdF1H2utkt7/6sRGpa04Uc+FJ98AEBUC+95XL8PvMlTBtztl74jEhjo5N8+fALgDoo24Ku7ofOOOaF847tU3wBMPne1Fxbcm/FjLGZNfdn0kX3tFTRazpL/gGw266mhvcrHXrFFptmpCfAhjR9/PUAqHZq+vbsrhcImZ6k37FoBeD1hizaZAVUFZi1EPhmW+RNpqY4YDKdq1esBwA2Hs7A4Mx0vUDI1O0Btu4C7poOVEbkhIVs2m8B6ePuGcD2PUCHBvgh7emoub299LbrA2BSr0S/jGi9QNB0wizggbnAnClABR2sO+4HjhQGrdKozIKjwJ1TgeOlwIIHNeAvGAaIRIRLDppzsylVL14fAKu1L+Lj9Hz/qXhWX3xD5scCMqjZi4BnOSATmxs7E9jcANH035Px9D87gDEPaVPtWaa7c4HFrwOP3gv88CMg+eGS3dJKL1ofgIT4ZD0zYPrjT2R4ObBpK/BcNt86ByAgLKRoxlJ4pj4FvPFBwOoRZ6z6GLj/SSDKxj4I9K59wPxlnAp/Bs7rCtw7B1idE36zDkesXrgWANUKsHuXTnqm33Q0B9Aqhp3So3xllSYJviAsoC4Qj2vu34HHFvttIqKHTy8FnuSvbWtN7OsyP34WcDZ1wcjrgWtHa4ujUB0ktqkR8VoA4KsDZ6NXd2qJIHRWAjBhNtCODtVUdhgIhPQ04E1KwT0coKzcIiWPF5j8KPDq+0AnMihz3h/zXfm+5GX8jVKQ1gFIbBO6p/i4mkK1ATBZeqNrWs388NtS9gR2Eh8eCOdSPD/7GvjrNKDkuN/m/D4sq9DqrNsIdE8LzvzkO7SxyBL8aSrIcKht61bq8OFmKVobAK+3DzoEFwAGO4B5nOt2zsesMCShVw/a6x2a6RLFFYpy86jpCdgWKtKetMbB3rwwn/WIphjnc0yWap5C9cDpFG/DESeVVV0AzKbOYQUzxJQI2h6VA3g49HQ4vxvFdz8wimYymLJavwkYlw3s3AvceEV4zJeWapYgrkavhQYgsY0d0YnVkl5bAmIc1DRhkuiAGeO0qEwgEHLz6SW+Cgw4X2u0tJzAUaGt+Xf9TjaKWZ0rgQstTwDbsJnWZoWh7UXhyZyfNEoDXnyOyZz/6XwWCTns0fB4HFKlNgBRURHAyNr9MrTByUD8gfASxVPEftk7xvAkhCVa/fAPxjNRknOWAGUESKdtu/lmXwBuukozdb7MT2S7+w4BI64Dhlyo1wg/tdvNjEX6ASCxTY12DLu1G/4ADONv/2EDhGmjgRff0HyDg0c4VTy1mxM/4tMvjWfbKfL6mzeegoFQWpKPgPF0ruTNy5wX5nfuA4YOpKIc7ls6/Gu71Qy1Kkoq1EgAA10KUpKSw2/Fp+QUiuElA7S3LZLQIYXS0RNY/xVw7IRPQZ/L/XnGjSi+QKZSfP48Stj4ERrAcp/Zm+BONOpHemWzKfAqVqlWAwAGXhtLB4YeTgPpKSrFAWRaRH7YeCCHzAcl1ciVBVUwknxRoMK8KNT50xnaojVqKLk9JobU6Wj4AhDTOhEpjQBATNB8OisZ6UBpGe1+gDevDzqZDpVOl15AFzoI9i4XGPYGpI5Yn8bGJ1XyrmqoGxJgtrVHUlu7PqYGpeIiy+IkLTV09SQfAJLaEoBqnRS4XjLd61kU+5SkwGXCzZFNGFWpFjsDAAWdkBAfbhOBy3XpCGRnMfbWLnAZyXl3Lef9KdF/7X3gKK1DIJK2ZowFfts3UInInjudFbCanVLJ4lOzS1h+tE+FgJdiHmdP4kpxBZVgKdfvnA4x0fTpKRkSQRIT9z1/9z3B5fNtwIp3NUvRrTOBowKVOuV0h+PoqyTRMF1zGXBREzEvgy4p5faackwuDQDcnmREhxBDqREuCQgvPaqVljdtotKSeIGQLKMXLqOi3MTYwfe0/2T20t9o85vbhs1Ox0+4UFFElH2VoMnUuPkfbNSiIHXmpZyYsQdpKUSZiZkUGy/r/NPBvPR/rNQFa79KuTR0gLkZAZCefEk0+kMLqImpjVOo3A7RWZKAyumio8XF+la8AYBiOg2yRw6LOfVknX8wX3Nz33yWuqED8P6ntCDPnx4IDhuBSwMAi7n5Adh7UFsW7zkE3PxHbVEjqzhxbGRB8/bHwPRnmh+E42XV8186MgAwNzMAX38HTJnDNUMePcXL6daONBiVKNOCGYDEDlav11xeiQg1F1VV+QHAbm0+JfhBDu34PIo95/rQixngvLs+axLKkiizhLXEOoyhUuRhkSanCuo+r3ev3q4hAdEOm/6wSdN/vAU8vkQLXV/cj4HSKYGbP4dO1ANjGGDhmuyrb7nae0CLNwSuEXnO9j0ueoGf6BUNAKzNIAEzFwIv/FNbF2T24lynmIciCZ5M5PSIbw18u0OLDYrkNBV9s+MnrlU4HzXyAcBiOEV6bkNTWdqOywbeWcftspNAb87tRTNlRya8Fq+4BLh9GP2EKC2UJjtQEiNsCtq8bZfy5cpqH0CaM0Ykp7eaguTgkgQ1P99suLfzpkfu5NxxA3Dl7zQHSuIFstnyHk1lYymv4LBvEwYANlvjJUAiNbJ3p29TdWqv7Rs2dJE1MwsQvSFUQOfpicW0Fq9o9w3533fIxWN8H/pWNQDwlQbfEuFei6af/Bjw31ythixxp1LbRxqwrNufSE9fBlqETpRr8cX7Hm/Ydvzq9QdQ6H5Pa0z7NwAw+zrrvkXCuJ7Ht/IIvbj8Aq1wjIOScCOXr/3DqByiiJWC+QynVI/OWkExjWs20KGimRSTFglt2LKr7hE5AwCTYlyH26gou0l0a5etYhSIb0fIzIXPn4YAt16j3TfFv+wLyo6UHMIUku3wTTSTMt0OnwJdywn8n18o2+pr6xYwmFYUthoBSXhblN0nG2sHNAfyrU+jLW9qyuhKy/IXbswyrqCTRJPvoXWRLbRQtPTN3TC3WlK3mAGAhIkioVsmGcpOr9eXMQAR1+aiqwcDN1xZewtMwvHiZR4tDtyri5K6ccsGf+eIfQHwBm7BT05dzd6jC219NgfXeGPipzfj0eRRwMABxr1cSfRIgAhEqz7Oh7Nytr9sAwBVjczxlrmuk4StZtFkyeGI00ESGT6vm9GTnPsJZG1ENy1d+ZGS8/oBo4JxZbyuykrKSQS05GEtrCXxO1F6Pc6JoHIji4plmEsQxM0WibuJ06KuROpdzFm8CwUevp0QpN41/bMWfAza/9B35Zarl40cF4x1YwpUuZzBCra4PNl/zJr1rvLJK0FjbQYAFbJqOUNIQu83TdiNuLIRoTgyAKh0RuhWhWr6Z8qXxdjNWVtRYu6nrFwZ0rQbAFRVnXLlfqaBN0W3eQUe3DJxNVy2zLoub6DmDSvgdlOdt2Ba+eGPPJOwQln78r2RcGEAYLJ8j0IqDglQtiTautOF7IWfo6IsS1m7fFukQzcAUJVP8faaMoy5lXHqFkBfbKnEkje+xpGCJcq6Za81dMSKb0V1yIjR3Iy8HlcN7o+B/RMgO72/JJJzRf9an8vQ+RYen5lPxjc0dni1ANAbUzNvi0Nr61Vc2l5OD6sj+pzbGX0yUvldoCPktrfeSFOkssDZsbccH+Tsx7Y9O/jh5EeoKH5L+eK9JtNXfgGoO/bqb4iiDp0Dr2cAVH51FWVLQlxsPI/LJvNkaQKP1sTyOobb6/bqM72yyxzORqfYawlq/HBUwuaV3DcowYEjRdh7IJ8nSwsYv98Cky1HWfPi9rpjaqr7sAAI1ln1B5V2WwKirO3gRkfuAqdC9SQy9t4GZkW+zjAxgGHimR72xZ/C7zfdHn4C6znJT9hKGCkuJLDyVecBFHkLwjVfwcb0a96vCISPwP8A+ijW8salZEEAAAAASUVORK5CYII="

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n    <div id=\"header\">\n        <a v-link=\"{ path: '/home' }\" href=\"javascript:;\" class=\"logo\">\n          <img :src=\"logoUrl\">\n            XCUI Components\n        </a>\n    </div>\n  <router-view></router-view>\n</div>\n";

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(17)
	__vue_script__ = __webpack_require__(19)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\Home.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(21)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-71388546/Home.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(18);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/.0.23.1@css-loader/index.js!./../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../node_modules/.2.2.3@less-loader/index.js!./../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./Home.vue", function() {
				var newContent = require("!!./../node_modules/.0.23.1@css-loader/index.js!./../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../node_modules/.2.2.3@less-loader/index.js!./../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./Home.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "#wrapper {\n  -webkit-transition: all .5s ease;\n  transition: all .5s ease;\n}\n#wrapper .toggled {\n  padding-left: 250px;\n}\n#wrapper.row {\n  margin-left: 0;\n  margin-right: 0;\n  padding: 20px 40px;\n}\n#sidebar-wrapper {\n  z-index: 1000;\n  display: inline-block;\n  height: 100%;\n  overflow-x: hidden;\n  background: #fff;\n  -webkit-transition: all .5s ease;\n  transition: all .5s ease;\n  padding: 0;\n}\n#wrapper.toggled #sidebar-wrapper {\n  width: 250px;\n}\n#page-content-wrapper {\n  background: #fff;\n}\n/* Sidebar Styles */\n.sidebar-nav {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  overflow-x: hidden!important;\n}\n.sidebar-nav li {\n  text-indent: 20px;\n  line-height: 40px;\n}\n.sidebar-nav li a {\n  display: block;\n  text-decoration: none;\n  color: #333;\n  border-left: 2px solid #fff;\n}\n.sidebar-nav li a:hover {\n  text-decoration: none;\n  color: #FF2D4B;\n  background: rgba(255, 255, 255, 0.2);\n}\n.sidebar-nav li a.active,\n.sidebar-nav li a.focus {\n  text-decoration: none;\n}\n.sidebar-nav li a.v-link-active {\n  border-left: 2px solid #FF2D4B;\n  background: #fff;\n  color: #FF2D4B;\n}\n.sidebar-nav .sidebar-brand {\n  height: 65px;\n  font-size: 18px;\n  line-height: 60px;\n}\n.sidebar-nav .sidebar-brand a {\n  color: #FF2D4B;\n  background: #fff;\n}\n.sidebar-nav .sidebar-brand a :hover {\n  color: #fff;\n  background: #FF2D4B;\n}\n@media (min-width: 768px) {\n}\n.xcui-demo-container {\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  margin: 15px 0 30px 0;\n  padding: 15px;\n}\n.xcui-demo-container .xcui-example-container h3 {\n  margin-top: 15px !important;\n}\n.xcui-demo-container .xcui-example-container .xcui-demo-wrap,\n.xcui-demo-container .xcui-example-container .xcui-code-wrap {\n  width: 100%!important;\n}\n.xcui-demo-container .xcui-example-container .xcui-code-wrap {\n  max-width: 100%;\n  margin-top: 20px;\n}\n.xcui-demo-container .xcui-example-container .xcui-code-wrap pre {\n  padding-right: 0;\n  display: block;\n  font-size: 13px;\n  line-height: 1.42857143;\n  color: #333;\n  word-break: break-all;\n  word-wrap: break-word;\n  background-color: rgba(128, 128, 128, 0.05);\n  border: 1px solid rgba(128, 128, 128, 0.075);\n  border-radius: 4px;\n  white-space: pre-wrap;\n}\n.xcui-demo-container .xcui-example-container .xcui-code-wrap pre .token {\n  display: inline-block;\n  white-space: normal;\n}\n/* http://prismjs.com/download.html?themes=prism&languages=markup+css+clike+javascript */\n/**\n * prism.js default theme for JavaScript, CSS and HTML\n * Based on dabblet (http://dabblet.com)\n * @author Lea Verou\n */\ncode[class*=\"language-\"],\npre[class*=\"language-\"] {\n  background: none;\n  text-shadow: 0 1px white;\n  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n  text-align: left;\n  word-spacing: normal;\n  line-height: 1.5;\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n  -webkit-hyphens: none;\n  -ms-hyphens: none;\n  hyphens: none;\n  display: block;\n  font-size: 13px;\n  color: #333;\n  word-break: break-all;\n  word-wrap: break-word;\n  background-color: rgba(128, 128, 128, 0.05);\n  border: 1px solid rgba(128, 128, 128, 0.075);\n  border-radius: 4px;\n  white-space: pre-wrap;\n}\npre[class*=\"language-\"]::-moz-selection,\npre[class*=\"language-\"]::-moz-selection,\ncode[class*=\"language-\"]::-moz-selection,\ncode[class*=\"language-\"]::-moz-selection {\n  text-shadow: none;\n  background: #b3d4fc;\n}\npre[class*=\"language-\"]::selection,\npre[class*=\"language-\"]::selection,\ncode[class*=\"language-\"]::selection,\ncode[class*=\"language-\"]::selection {\n  text-shadow: none;\n  background: #b3d4fc;\n}\n@media print {\n  code[class*=\"language-\"],\n  pre[class*=\"language-\"] {\n    text-shadow: none;\n  }\n}\n/* Code blocks */\npre[class*=\"language-\"] {\n  padding: 1em;\n  margin: .5em 0;\n  overflow: auto;\n}\n:not(pre) > code[class*=\"language-\"],\npre[class*=\"language-\"] {\n  background: #f5f2f0;\n}\n/* Inline code */\n:not(pre) > code[class*=\"language-\"] {\n  padding: .1em;\n  border-radius: .3em;\n  white-space: normal;\n}\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n  color: slategray;\n}\n.token.style-attr {\n  margin-left: .5em;\n}\n.token.punctuation {\n  color: #999;\n}\n.namespace {\n  opacity: .7;\n}\n.token.property,\n.token.tag,\n.token.boolean,\n.token.number,\n.token.constant,\n.token.symbol,\n.token.deleted {\n  color: #905;\n}\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n  color: #690;\n}\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string {\n  color: #a67f59;\n}\n.token.atrule,\n.token.attr-value,\n.token.keyword {\n  color: #07a;\n}\n.token.function {\n  color: #DD4A68;\n}\n.token.regex,\n.token.important,\n.token.variable {\n  color: #e90;\n}\n.token.important,\n.token.bold {\n  font-weight: bold;\n}\n.token.italic {\n  font-style: italic;\n}\n.token.entity {\n  cursor: help;\n}\n", ""]);

	// exports


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var version = __webpack_require__(20).version;

	exports.default = {
	    data: function data() {
	        return {
	            version: version
	        };
	    },
	    ready: function ready() {
	        if (this.$route.path === '/') {
	            this.$route.router.go({
	                name: 'home'
	            });
	        }
	    }
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = {
		"name": "xcui",
		"version": "0.1.0",
		"description": "Desktop web UI based on Vue and Bootstrap",
		"keywords": [
			"xcui",
			"vue",
			"Bootstrap",
			"vue-components",
			"web-components",
			"component",
			"components",
			"desktop ui",
			"framework",
			"frontend"
		],
		"author": "fe-b <fe-b@iwaimai.baidu.com>",
		"repository": {
			"type": "git",
			"url": "https://github.com/"
		},
		"scripts": {
			"dev": "node build/dev-server.js",
			"build": "webpack --progress --hide-modules --colors --config build/webpack.npm.conf.js && rimraf dist/components && node build/build-components"
		},
		"main": "dist/xcui.js",
		"dependencies": {
			"array-filter": "^1.0.0",
			"array-find": "^1.0.0",
			"array-map": "^0.0.0",
			"array-shuffle": "^1.0.0",
			"countup": "^1.6.1",
			"fuzzysearch": "^1.0.3",
			"xcui-demo-loader": "^0.1.4"
		},
		"devDependencies": {
			"babel-core": "^6.9.1",
			"babel-loader": "^6.0.0",
			"babel-plugin-transform-runtime": "^6.9.0",
			"babel-preset-es2015": "^6.9.0",
			"babel-preset-stage-2": "^6.0.0",
			"babel-runtime": "^6.0.0",
			"cli-spinner": "^0.2.4",
			"co": "^4.6.0",
			"co-fs": "^1.2.0",
			"co-request": "^1.0.0",
			"connect-history-api-fallback": "^1.1.0",
			"copy-webpack-plugin": "^1.1.1",
			"css-loader": "^0.23.0",
			"eslint": "^2.5.1",
			"eslint-config-standard": "^5.1.0",
			"eslint-friendly-formatter": "^1.2.2",
			"eslint-loader": "^1.2.0",
			"eslint-plugin-html": "^1.4.0",
			"eslint-plugin-promise": "^1.1.0",
			"eslint-plugin-standard": "^1.3.2",
			"eventsource-polyfill": "^0.9.6",
			"express": "^4.13.3",
			"extract-text-webpack-plugin": "^1.0.1",
			"file-loader": "^0.8.4",
			"function-bind": "^1.0.2",
			"gh-pages": "^0.10.0",
			"html-webpack-plugin": "^2.14.0",
			"inject-loader": "^2.0.1",
			"json-loader": "^0.5.4",
			"jsonp": "^0.2.0",
			"less": "^2.6.1",
			"less-loader": "^2.2.2",
			"rimraf": "^2.5.0",
			"url-loader": "^0.5.7",
			"vue": "^1.0.17",
			"vue-hot-reload-api": "^1.2.0",
			"vue-html-loader": "^1.2.0",
			"vue-loader": "^8.5.2",
			"vue-router": "^0.7.11",
			"vue-style-loader": "^1.0.0",
			"webpack": "^1.12.2",
			"webpack-dev-middleware": "^1.4.0",
			"webpack-hot-middleware": "^2.6.0"
		}
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "\n<div id=\"wrapper\" class=\"row\">\n  <!-- sidebar-wrapper -->\n  <div id=\"sidebar-wrapper\" class=\"col-md-2\">\n      <ul class=\"sidebar-nav\">\n          <li>\n              <a v-link=\"{ path: '/home' }\" href=\"javascript:;\">关于XCUI</a>\n          </li>\n          <li>\n              <a v-link=\"{ path: '/component/datepicker' }\" href=\"javascript:;\">DatePicker</a>\n          </li>\n          <li>\n              <a v-link=\"{ path: '/component/daterangepicker' }\" href=\"javascript:;\">DateRangePicker</a>\n          </li>\n          <li>\n               <a v-link=\"{ path: '/component/inputNumber' }\" href=\"javascript:;\">InputNumber</a>\n          </li>\n          <li>\n               <a v-link=\"{ path: '/component/loading' }\" href=\"javascript:;\">Loading</a>\n          </li>\n\n          <li>\n               <a v-link=\"{ path: '/component/modal' }\" href=\"javascript:;\">Modal</a>\n          </li>\n          <li>\n              <a v-link=\"{ path: '/component/suggestion' }\" href=\"javascript:;\">Suggestion</a>\n          </li>\n          <li>\n              <a v-link=\"{ path: '/component/pagination' }\" href=\"javascript:;\">Pagination</a>\n          </li>\n          <li>\n              <a v-link=\"{ path: '/component/popover' }\" href=\"javascript:;\">Popover</a>\n          </li>\n          <li>\n              <a v-link=\"{ path: '/component/progress' }\" href=\"javascript:;\">Progress</a>\n          </li>\n          <li>\n              <a v-link=\"{ path: '/component/pageloading' }\" href=\"javascript:;\">PageLoading</a>\n          </li>\n          <li>\n              <a v-link=\"{ path: '/component/tooltip' }\" href=\"javascript:;\">Tooltip</a>\n          </li>\n          <li>\n              <a v-link=\"{ path: '/component/tag' }\" href=\"javascript:;\">Tag</a>\n          </li>\n          <li>\n               <a v-link=\"{ path: '/component/message' }\" href=\"javascript:;\">Message</a>\n          </li>\n          <li>\n              <a v-link=\"{ path: '/component/select' }\" href=\"javascript:;\">Select</a>\n          </li>\n      </ul>\n  </div>\n  <!-- /#sidebar-wrapper -->\n  <!-- Page Content -->\n  <div id=\"page-content-wrapper\" class=\"col-md-10\">\n     <router-view\n    transition=\"xcui-fade\"\n    transition-mode=\"out-in\"></router-view>\n  </div>\n  <!-- /#page-content-wrapper -->\n</div>\n";

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(23)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\demos\\homeContent.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(24)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-42cc8277/homeContent.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var version = __webpack_require__(20).version;

	exports.default = {
	    data: function data() {
	        return {
	            version: version
	        };
	    }
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "<div><h1>关于XCUI</h1>\n<p><img src=\"https://github.com/wmfe/xcui/raw/master/src/assets/logo_nobg_128x128@2x.png\" alt=\"logo\" /></p>\n<p>XCUI 是基于<code>Vue</code>和 <code>Bootstrap.css</code> 的<strong>桌面端组件库</strong>。</p>\n<h2>XCUI的目标是：</h2>\n<ul>\n<li>满足桌面端页面大部分基础组件需求。</li>\n<li>快速开发基于 <code>vue</code> 构建的项目。</li>\n<li>保持小体积, 无其他js库依赖(不依赖<code>jquery</code>, <code>Boostrap.js</code>), 仅使用 <code>Boostrap.css</code> 。</li>\n<li>简洁优雅。</li>\n</ul>\n<h2>版本支持</h2>\n<p>XCUI目前支持<code>vue 1.x</code>版本；推荐使用<code>vue 1.0.26</code>及以上版本。后续XCUI会增加支持<code>vue 2.x</code>的版本，敬请期待。</p>\n<blockquote>\n<p>XCUI需要在页面中引入<code>bootstrap.css</code>。</p>\n</blockquote>\n<h2>如何使用</h2>\n<p>通过<code>npm</code>安装，或在<a href=\"https://github.com/wmfe/xcui\">这里</a>下载打包好的版本：</p>\n<pre>npm install xcui\n</pre>\n<p><code>xcui</code>使用<code>umd</code>方式打包，支持各种模块加载器。</p>\n<p>在页面根实例中引入：</p>\n<pre><span class=\"token keyword\" >import</span> Vue <span class=\"token keyword\" >from</span> <span class=\"token string\" >'vue'</span>\n<span class=\"token keyword\" >import</span> xcui <span class=\"token keyword\" >from</span> <span class=\"token string\" >'xcui'</span>\nVue<span class=\"token punctuation\" >.</span><span class=\"token function\" >use</span><span class=\"token punctuation\" >(</span>xcui<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n</pre>\n<p>或者：</p>\n<pre><span class=\"token keyword\" >var</span> Vue <span class=\"token operator\" >=</span> <span class=\"token function\" >require</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'vue'</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >var</span> xcui <span class=\"token operator\" >=</span> <span class=\"token function\" >require</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'xcui'</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\nVue<span class=\"token punctuation\" >.</span><span class=\"token function\" >use</span><span class=\"token punctuation\" >(</span>xcui<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n</pre>\n<p>在页面中声明标签，即可使用。举例：</p>\n<pre><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>xcui-tag</span> <span class=\"token attr-name\" >:closeable</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>true<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >text</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >'</span>关闭<span class=\"token punctuation\" >'</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-tag</span><span class=\"token punctuation\" >></span></span>\n</pre>\n<p>除了使用npm进行安装外，还可直接将xcui的js和css文件使用标签形式引入，举例：</p>\n<pre><span class=\"token doctype\" >&lt;!DOCTYPE html></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>html</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>head</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>title</span><span class=\"token punctuation\" >></span></span>Hello XCUI<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>title</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>link</span> <span class=\"token attr-name\" >rel</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>stylesheet<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>bootstrap/css/bootstrap.css<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>link</span> <span class=\"token attr-name\" >rel</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>stylesheet<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>xcui.css<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>script</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>text/javascript<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >src</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>vue.js<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token script language-javascript\" ></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>script</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>script</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>text/javascript<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >src</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>xcui.js<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token script language-javascript\" ></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>script</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>head</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>body</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >id</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>app<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>xcui-tag</span> <span class=\"token attr-name\" >:closeable</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>true<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:text</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >'</span>关闭<span class=\"token punctuation\" >'</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-tag</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>script</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>text/javascript<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token script language-javascript\" >\n        Vue<span class=\"token punctuation\" >.</span><span class=\"token function\" >use</span><span class=\"token punctuation\" >(</span>xcui<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n        <span class=\"token keyword\" >new</span> <span class=\"token class-name\" >Vue</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n            el<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'#app'</span><span class=\"token punctuation\" >,</span>\n            ready<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >function</span> <span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >{</span>\n                <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >$alert</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'Hello XCUI!'</span><span class=\"token punctuation\" >)</span>\n            <span class=\"token punctuation\" >}</span>\n        <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\n    </span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>script</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>body</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>html</span><span class=\"token punctuation\" >></span></span>\n</pre>\n<blockquote>\n<p><strong>说明</strong></p>\n<p>XCUI在使用<code>Vue.use(xcui)</code>后，会默认以<code>xcui-</code>前缀注册所有组件，在Vue实例中可直接使用而<strong>不用在<code>components</code>中声明</strong>。如：</p>\n</blockquote>\n<pre><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>xcui-tag</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-tag</span><span class=\"token punctuation\" >></span></span>\n</pre>\n<p>当然，您也可以按以下方式使用xcui组件：</p>\n<pre><span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span>Tag<span class=\"token punctuation\" >,</span> Select<span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> xcui<span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >export</span> <span class=\"token keyword\" >default</span> <span class=\"token punctuation\" >{</span>\n    components<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>Tag<span class=\"token punctuation\" >,</span> Select<span class=\"token punctuation\" >}</span>\n<span class=\"token punctuation\" >}</span>\n</pre>\n<h2>全局方法</h2>\n<p><code>xcui</code>把一些使用频率高的操作挂载到<code>Vue</code>的根实例，便于调用。如, 在一个<code>components</code>组件中可以这样调用 ( <strong>且不用在页面中显式地声明html标签</strong> )：</p>\n<pre><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >$alert</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'alert message'</span><span class=\"token punctuation\" >)</span> <span class=\"token comment\" spellcheck=\"true\">// 警告提示</span>\n<span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >$confirm</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'是否确认?'</span><span class=\"token punctuation\" >,</span> content<span class=\"token punctuation\" >,</span> onOk<span class=\"token punctuation\" >,</span> onCancel<span class=\"token punctuation\" >)</span> <span class=\"token comment\" spellcheck=\"true\">// 确认提示</span>\n<span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >$toaster</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'toaster message'</span><span class=\"token punctuation\" >)</span> <span class=\"token comment\" spellcheck=\"true\">// 信息提示</span>\n<span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>$Modal<span class=\"token punctuation\" >.</span><span class=\"token function\" >show</span><span class=\"token punctuation\" >(</span>options<span class=\"token punctuation\" >)</span> <span class=\"token comment\" spellcheck=\"true\">// 模态框</span>\n</pre>\n<p>具体请见<a href=\"https://wmfe.github.io/xcui/#!/component/modal\">modal</a> 中的说明。</p>\n<h2>开发</h2>\n<h4>clone the repo</h4>\n<pre>$ git clone git@github<span class=\"token punctuation\" >.</span>com<span class=\"token punctuation\" >:</span>wmfe<span class=\"token operator\" >/</span>xcui<span class=\"token punctuation\" >.</span>git\n</pre>\n<h4>安装依赖</h4>\n<pre>$ npm i\n</pre>\n<h4>run dev server</h4>\n<pre>$ npm run dev\n</pre>\n<h4>build components</h4>\n<pre>$ npm run build\n</pre>\n<h2>加入我们</h2>\n<h4>提交issue</h4>\n<p>在使用过程中有问题，请在<a href=\"https://github.com/wmfe/xcui/issues\">这里</a>给我们提交<code>issue</code>。</p>\n<h4>提交pull request</h4>\n<p>代码有问题？请在<a href=\"https://github.com/wmfe/xcui/pulls\">这里</a>给我们提交<code>pull request</code>。</p>\n<h4>加入开发团队</h4>\n<p>加入<a href=\"https://github.com/wmfe\">wmfe</a>团队，一起开发通用组件，交流vue组件开发的心得~</p>\n</div>";

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _datepicker = __webpack_require__(26);

	var _datepicker2 = _interopRequireDefault(_datepicker);

	var _daterangepicker = __webpack_require__(100);

	var _daterangepicker2 = _interopRequireDefault(_daterangepicker);

	var _inputNumber = __webpack_require__(108);

	var _inputNumber2 = _interopRequireDefault(_inputNumber);

	var _loading = __webpack_require__(113);

	var _loading2 = _interopRequireDefault(_loading);

	var _message = __webpack_require__(118);

	var _message2 = _interopRequireDefault(_message);

	var _modal = __webpack_require__(123);

	var _modal2 = _interopRequireDefault(_modal);

	var _pageloading = __webpack_require__(128);

	var _pageloading2 = _interopRequireDefault(_pageloading);

	var _pagination = __webpack_require__(133);

	var _pagination2 = _interopRequireDefault(_pagination);

	var _popover = __webpack_require__(138);

	var _popover2 = _interopRequireDefault(_popover);

	var _progress = __webpack_require__(145);

	var _progress2 = _interopRequireDefault(_progress);

	var _select = __webpack_require__(150);

	var _select2 = _interopRequireDefault(_select);

	var _suggestion = __webpack_require__(161);

	var _suggestion2 = _interopRequireDefault(_suggestion);

	var _tag = __webpack_require__(166);

	var _tag2 = _interopRequireDefault(_tag);

	var _tooltip = __webpack_require__(171);

	var _tooltip2 = _interopRequireDefault(_tooltip);

	var _install = __webpack_require__(176);

	var _install2 = _interopRequireDefault(_install);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var install = function install(Vue) {
	    if (install.installed) {
	        return;
	    }
	    Vue.component(_datepicker2.default.name, _datepicker2.default);
	    Vue.component(_daterangepicker2.default.name, _daterangepicker2.default);
	    Vue.component(_inputNumber2.default.name, _inputNumber2.default);
	    Vue.component(_loading2.default.name, _loading2.default);
	    Vue.component(_message2.default.name, _message2.default);
	    Vue.component(_modal2.default.name, _modal2.default);
	    Vue.component(_pageloading2.default.name, _pageloading2.default);
	    Vue.component(_pagination2.default.name, _pagination2.default);
	    Vue.component(_popover2.default.name, _popover2.default);
	    Vue.component(_progress2.default.name, _progress2.default);
	    Vue.component(_select2.default.name, _select2.default);
	    Vue.component(_suggestion2.default.name, _suggestion2.default);
	    Vue.component(_tag2.default.name, _tag2.default);
	    Vue.component(_tooltip2.default.name, _tooltip2.default);

	    Vue.use(_install2.default);
	};

	var xcui = {
	    version: '1.0.0-alpha',
	    Datepicker: _datepicker2.default,
	    DateRangePicker: _daterangepicker2.default,
	    InputNumber: _inputNumber2.default,
	    Loading: _loading2.default,
	    Message: _message2.default,
	    Modal: _modal2.default,
	    PageLoading: _pageloading2.default,
	    Pagination: _pagination2.default,
	    Popover: _popover2.default,
	    Progress: _progress2.default,
	    Select: _select2.default,
	    Suggestion: _suggestion2.default,
	    Tag: _tag2.default,
	    Tooltip: _tooltip2.default,
	    install: install,
	    xcuiInstall: _install2.default
	};

	module.exports = xcui;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(27)
	__vue_script__ = __webpack_require__(29)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\datepicker\\index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(99)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-73ad8741/index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(28);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/.0.23.1@css-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../../node_modules/.2.2.3@less-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./index.vue", function() {
				var newContent = require("!!./../../../node_modules/.0.23.1@css-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../../node_modules/.2.2.3@less-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, ".xcui-datapicker .calendar {\n  width: 240px;\n  padding: 10px;\n  background: #fff;\n  position: absolute;\n  z-index: 9999;\n  left: 0;\n  top: 38px;\n  border: 1px solid #DEDEDE;\n  border-radius: 2px;\n  -webkit-transition: all .5s ease;\n  transition: all .5s ease;\n}\n.xcui-datapicker .calendar-enter .calendar-leave {\n  opacity: 0;\n  -webkit-transform: translate3d(0, -10px, 0);\n          transform: translate3d(0, -10px, 0);\n}\n.xcui-datapicker .calendar-tit {\n  text-align: center;\n  margin: 0 auto;\n  width: 104px;\n  font-weight: bold;\n}\n.xcui-datapicker .calendar-tit input {\n  color: #333;\n  height: 24px;\n  outline: medium;\n  text-align: center;\n  border: none;\n  background-color: transparent;\n}\n.xcui-datapicker .calendar-tit-year {\n  width: 36px;\n}\n.xcui-datapicker .calendar-tit-month {\n  width: 18px;\n  margin-left: 2px;\n}\n.xcui-datapicker .calendar:before {\n  position: absolute;\n  left: 30px;\n  top: -10px;\n  content: \"\";\n  border: 5px solid rgba(0, 0, 0, 0);\n  border-bottom-color: #DEDEDE;\n}\n.xcui-datapicker .calendar:after {\n  position: absolute;\n  left: 30px;\n  top: -9px;\n  content: \"\";\n  border: 5px solid rgba(0, 0, 0, 0);\n  border-bottom-color: #fff;\n}\n.xcui-datapicker .calendar-tools {\n  height: 32px;\n  font-size: 14px;\n  line-height: 32px;\n  color: #333;\n}\n.xcui-datapicker .calendar-tools .float.left {\n  float: left;\n}\n.xcui-datapicker .calendar-tools .float.right {\n  float: right;\n}\n.xcui-datapicker .calendar-tools > i {\n  margin: 0 10px;\n  line-height: 32px;\n  cursor: pointer;\n  color: #707070;\n}\n.xcui-datapicker .calendar-tools > i:hover {\n  color: #333;\n}\n.xcui-datapicker .calendar table {\n  clear: both;\n  width: 100%;\n  margin-bottom: 10px;\n  border-collapse: collapse;\n  color: #444;\n}\n.xcui-datapicker .calendar td {\n  margin: 2px !important;\n  padding: 5px 0;\n  width: 14.28571429%;\n  text-align: center;\n  vertical-align: middle;\n  font-size: 14px;\n  line-height: 125%;\n  cursor: pointer;\n  border: 0;\n}\n.xcui-datapicker .calendar td:hover {\n  background: #f3f8fa;\n}\n.xcui-datapicker .calendar td.week {\n  pointer-events: none !important;\n  cursor: default !important;\n}\n.xcui-datapicker .calendar td.off {\n  color: #c0c0c0;\n}\n.xcui-datapicker .calendar td.today {\n  background-color: #46c3c1;\n  color: #fff;\n  font-size: 14px;\n  border-radius: 4px;\n}\n.xcui-datapicker .calendar td.today .lunar {\n  color: #fff;\n}\n.xcui-datapicker .calendar thead td {\n  text-transform: uppercase;\n}\n.xcui-datapicker .calendar .timer {\n  margin: 10px 0 10px 30px;\n  width: 150px;\n  text-align: center;\n}\n.xcui-datapicker .calendar .timer input {\n  border-radius: 2px;\n  padding: 5px;\n  font-size: 14px;\n  line-height: 18px;\n  color: #46c3c1;\n  width: 50px;\n  text-align: center;\n  border: 1px solid #efefef;\n}\n.xcui-datapicker .calendar .timer input:focus {\n  border: 1px solid #46c3c1;\n}\n.xcui-datapicker .calendar .timer-item {\n  float: left;\n  text-align: center;\n  position: relative;\n  cursor: pointer;\n}\n.xcui-datapicker .calendar .timer-item-current {\n  color: #46c3c1;\n  line-height: 24px;\n  font-size: 14px;\n}\n.xcui-datapicker .calendar .timer label {\n  margin: 0;\n  width: 30px;\n  padding: 5px;\n  line-height: 14px;\n  margin-right: 4px;\n  font-weight: normal;\n}\n.xcui-datapicker .calendar-button {\n  text-align: center;\n}\n.xcui-datapicker .calendar-button button {\n  border: none;\n  cursor: pointer;\n  display: inline-block;\n  min-height: 1em;\n  vertical-align: baseline;\n  background: #46c3c1;\n  color: #fff;\n  margin: 0 .3em 0 0;\n  padding: .6em 2em;\n  font-size: 1em;\n  line-height: 1em;\n  text-align: center;\n  border-radius: .3em;\n}\n.xcui-datapicker .calendar-button button.cancel {\n  background: #efefef;\n  color: #666;\n}\n.xcui-datapicker .calendar .lunar {\n  font-size: 11px;\n  line-height: 150%;\n  color: #aaa;\n}\n.xcui-datapicker .calendar .drop-down {\n  position: absolute;\n  top: 24px;\n  left: -10px;\n  width: 50px;\n  height: 140px;\n  background: #fff;\n  border: 1px solid #efefef;\n  padding: 0;\n  margin: 0;\n  overflow-y: scroll;\n}\n.xcui-datapicker .calendar .drop-down li {\n  width: 50px;\n  list-style: none;\n}\n.xcui-datapicker .calendar .drop-down li.on {\n  background: #eee;\n}\n.xcui-datapicker .calendar .drop-down li:hover {\n  background: #eee;\n}\n.xcui-datapicker .calendar .clearfix {\n  zoom: 1;\n}\n.xcui-datapicker .calendar .clearfix:after {\n  display: block;\n  width: 0;\n  height: 0;\n  visibility: hidden;\n  content: '';\n  clear: both;\n}\n.xcui-datapicker .calendar .btn-default {\n  color: #666;\n  border-radius: 0 4px 4px 0;\n}\n.xcui-datapicker .bg-pr {\n  position: relative;\n}\n", ""]);

	// exports


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _calendarMixins = __webpack_require__(30);

	var _calendarMixins2 = _interopRequireDefault(_calendarMixins);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    mixins: [_calendarMixins2.default],
	    name: 'xcui-datepicker',
	    props: {
	        btnShow: {
	            type: Boolean,
	            default: false
	        }
	    },
	    data: function data() {
	        return {
	            show: false,
	            currentMonth: Number,
	            currentTimeBtnShow: true
	        };
	    },

	    methods: {
	        renderElse: function renderElse(y, m, i, temp, line, currentTime) {
	            var me = this;
	            var thisTime = new Date(me.output([me.year, me.month, i], me.defaultFormat)).getTime();
	            var options = { day: i, today: false };
	            options = me.bindSingerTime(thisTime, currentTime, options);
	            temp[line].push(options);
	        },
	        bindSingerTime: function bindSingerTime(thisTime, currentTime, options) {
	            var me = this;
	            var format = me.defaultFormat;
	            if (me.minDate) {
	                var beginTime = new Date(me.output(me.minDate, format)).getTime();
	                if (beginTime > thisTime) {
	                    options.disabled = true;
	                    options.noClick = true;
	                }
	            }
	            if (me.maxDate) {
	                var endTime = new Date(me.output(me.maxDate, format)).getTime();
	                if (endTime < thisTime) {
	                    options.disabled = true;
	                    options.noClick = true;
	                }
	            }
	            return options;
	        },
	        select: function select(k1, k2, e) {
	            if (e.target.className.indexOf('noclick') !== -1) {
	                return false;
	            }
	            var me = this;
	            var days = this.days;
	            var daySeleted = days[k1][k2];
	            var oldValue = this.value = me.output(this.value);

	            if (this.today.length > 0) {
	                days[this.today[0]][this.today[1]].today = false;
	            }

	            daySeleted.today = true;
	            me.day = me.zero(daySeleted.day);
	            if (daySeleted.disabled) {
	                me.month = k1 === 0 ? me.month - 1 : me.month + 1;
	                var om = me.outputMonth(me.month, me.year);
	                me.year = om.y;
	                me.month = om.m;
	                me.value = me.output([me.year, me.month, me.day, me.hour, me.minute, me.second]);
	                me.render(me.year, me.month);
	            } else {
	                me.today = [k1, k2];
	                me.value = me.output([me.year, me.month, me.day, me.hour, me.minute, me.second]);
	            }
	            if (me.type === 'date') {
	                this.$emit('on-change', this.value, oldValue);
	                me.showFalse();
	            }
	        },
	        currentTime: function currentTime() {
	            var me = this;
	            me.value = me.output(new Date());
	            var params = this.dateParams;
	            me.year = params.year;
	            me.month = params.month;
	            me.day = params.day;
	            me.hour = params.hour;
	            me.minute = params.minute;
	            me.second = params.second;
	            if (me.currentTimeBtnShow) {
	                me.render(me.year, me.month);
	            }
	            me.hourListShow = false;
	            me.minuteListShow = false;
	            me.secondListShow = false;
	        },
	        ok: function ok() {
	            this.showFalse();
	            this.$emit('on-change', this.value, this.initialValue);
	            this.initialValue = this.value;
	        },
	        cancel: function cancel() {
	            this.value = this.initialValue;
	            this.showFalse();
	        },
	        showFalse: function showFalse() {
	            this.hourListShow = false;
	            this.minuteListShow = false;
	            this.secondListShow = false;
	            this.show = false;
	        },
	        showCalendar: function showCalendar(e) {
	            var me = this;
	            e.stopPropagation();
	            me.show = true;
	            if (me.value !== '') {
	                me.output(me.value);
	                var params = me.dateParams;
	                me.year = params.year;
	                me.month = params.month;
	                me.hour = params.hour;
	                me.minute = params.minute;
	                me.second = params.second;
	            }
	            me.render(me.year, me.month);
	            var bindHide = function bindHide(e) {
	                e.stopPropagation();
	                me.showFalse();
	                document.removeEventListener('click', bindHide, false);
	            };
	            setTimeout(function () {
	                document.addEventListener('click', bindHide, false);
	            }, 500);
	        }
	    }
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof2 = __webpack_require__(31);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    props: {
	        value: {
	            twoWay: true,
	            default: ''
	        },
	        format: {
	            type: String,
	            default: 'YYYY-MM-DD'
	        },
	        minDate: {},
	        maxDate: {},
	        hourRange: {
	            type: [Number, String],
	            default: 1
	        },
	        minuteRange: {
	            type: [Number, String],
	            default: 1
	        },
	        secondRange: {
	            type: [Number, String],
	            default: 1
	        },
	        color: String,
	        className: String
	    },
	    data: function data() {
	        return {
	            dataTableShow: true,
	            year: '',
	            month: '',
	            day: '',
	            days: [],
	            weeks: ['日', '一', '二', '三', '四', '五', '六'],
	            months: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
	            today: [],
	            hour: '00',
	            hourList: [],
	            hourListShow: false,
	            minute: '00',
	            minuteList: [],
	            minuteListShow: false,
	            second: '00',
	            secondList: [],
	            secondListShow: false,
	            yearTableShow: false,
	            selectRangeList: [],
	            selectRangeShow: true,
	            selectRange: '',
	            dateParams: null,
	            defaultFormat: 'YYYY-MM-DD'
	        };
	    },

	    computed: {
	        type: function type() {
	            var type = 'date';
	            var format = this.format;
	            var hasY = format.indexOf('YYYY') !== -1;
	            var hasH = format.indexOf('hh') !== -1 || format.indexOf('HH') !== -1;
	            if (hasY && hasH) {
	                type = 'datetime';
	            } else if (hasH) {
	                type = 'time';
	            }
	            return type;
	        },
	        formatValue: function formatValue() {
	            return this.output(this.value);
	        }
	    },
	    created: function created() {
	        var me = this;
	        this.initialValue = this.value;
	        if (me.value !== '') {
	            me.value = me.output(me.value);
	        } else {
	            me.value = me.output(new Date());
	        }
	        var params = me.dateParams;
	        me.year = params.year;
	        me.month = params.month;
	        me.day = params.day;
	        me.hour = params.hour;
	        me.minute = params.minute;
	        me.second = params.second;
	        for (var i = 0; i < 60; i++) {
	            if (i % me.minuteRange === 0) {
	                me.minuteList.push(me.zero(i));
	            }
	            if (i % me.secondRange === 0) {
	                me.secondList.push(me.zero(i));
	            }
	        }
	        for (var _i = 0; _i < 24; _i++) {
	            if (_i % me.hourRange === 0) {
	                me.hourList.push(me.zero(_i));
	            }
	        }
	        if (me.type !== 'time') {
	            me.render(me.year, me.month);
	        } else {
	            this.initialValue = this.value;
	        }
	    },

	    methods: {
	        zero: function zero(n) {
	            return n < 10 && String(n).length === 1 ? '0' + n : n;
	        },
	        render: function render(y, m) {
	            var me = this;
	            if (me.type === 'time') {
	                return false;
	            }
	            me.firstDayOfMonth = new Date(y, m, 1).getDay();
	            me.lastDateOfMonth = new Date(y, m + 1, 0).getDate();
	            me.lastDayOfLastMonth = new Date(y, m, 0).getDate();
	            me.output(me.value);
	            var params = me.dateParams;
	            var line = 0;
	            var temp = [];
	            var date = new Date();
	            var currentTime = Number(new Date(date.getFullYear(), date.getMonth(), date.getDate()));
	            me.year = y;
	            me.currentMonth = me.months[m];
	            for (var i = 1; i <= me.lastDateOfMonth; i++) {
	                var dow = new Date(y, m, i).getDay();
	                var isYear = params.year === me.year;
	                var isMonth = params.month === me.month;
	                var isDay = Number(params.day) === i;
	                var format = me.defaultFormat;
	                var minDate = me.minDate && me.output(me.minDate, format);
	                var maxDate = me.maxDate && me.output(me.maxDate, format);

	                if (dow === 0) {
	                    temp[line] = [];
	                } else if (i === 1) {
	                    temp[line] = [];
	                    var k = me.lastDayOfLastMonth - me.firstDayOfMonth + 1;
	                    for (var j = 0; j < me.firstDayOfMonth; j++) {
	                        var nowDay = me.output([me.year, me.month, k], format);
	                        if (nowDay < minDate || nowDay > maxDate) {
	                            temp[line].push({ day: k, disabled: true, prev: true, noClick: true });
	                        } else {
	                            temp[line].push({ day: k, disabled: true, prev: true });
	                        }
	                        k++;
	                    }
	                }
	                if (isYear && isMonth && isDay) {
	                    temp[line].push({ day: i, today: true, disabled: false });
	                    me.today = [line, temp[line].length - 1];
	                } else {
	                    me.renderElse(y, m, i, temp, line, currentTime);
	                }

	                if (dow === 6) {
	                    line++;
	                } else if (i === me.lastDateOfMonth) {
	                    var _k = 1;
	                    for (dow; dow < 6; dow++) {
	                        temp[line].push({ day: _k, disabled: true, today: false });
	                        _k++;
	                    }
	                }
	            }
	            me.days = temp;
	        },
	        prev: function prev(e) {
	            e.stopPropagation();
	            var me = this;
	            me.month -= 1;
	            var om = me.outputMonth(me.month, me.year);
	            me.year = om.y;
	            me.month = om.m;
	            me.render(me.year, me.month);
	        },
	        next: function next(e) {
	            e.stopPropagation();
	            var me = this;
	            me.month += 1;
	            var om = me.outputMonth(me.month, me.year);
	            me.year = om.y;
	            me.month = om.m;
	            me.render(me.year, me.month);
	        },
	        changeTitSelect: function changeTitSelect(year, type) {
	            if (type === 'year') {
	                var startYear = parseInt(year / 10, 10) * 10;
	                var years1 = ['《', startYear, startYear + 1];
	                var years2 = [startYear + 2, startYear + 3, startYear + 4];
	                var years3 = [startYear + 5, startYear + 6, startYear + 7];
	                var years4 = [startYear + 8, startYear + 9, '》'];
	                this.selectRange = startYear + ' ~ ' + (startYear + 9);
	                this.selectRangeList = [years1, years2, years3, years4];
	                this.selectRangeShow = true;
	            } else {
	                this.selectRangeList = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
	                this.selectRangeShow = false;
	            }
	            this.dataTableShow = false;
	            this.yearTableShow = true;
	        },
	        selectItem: function selectItem(select) {
	            var me = this;
	            if (select === '《') {
	                this.changeTitSelect(parseInt(me.selectRange.split('~')[0].trim(), 10) - 10, 'year');
	            } else if (select === '》') {
	                this.changeTitSelect(parseInt(me.selectRange.split('~')[0].trim(), 10) + 10, 'year');
	            } else if (select > 12) {
	                this.year = select;
	                this.render(me.year, me.month);
	                this.dataTableShow = true;
	                this.yearTableShow = false;
	            } else {
	                this.month = parseInt(select, 10) - 1;
	                this.render(me.year, me.month);
	                this.dataTableShow = true;
	                this.yearTableShow = false;
	            }
	        },
	        dropTimeList: function dropTimeList(type) {
	            var me = this;
	            me.hourListShow = false;
	            me.secondListShow = false;
	            me.minuteListShow = false;
	            switch (type) {
	                case 'hour':
	                    me.hourListShow = true;
	                    break;
	                case 'minute':
	                    me.minuteListShow = true;
	                    break;
	                case 'second':
	                    me.secondListShow = true;
	                    break;
	                default:
	            };
	        },
	        selectTimeItem: function selectTimeItem(e, type) {
	            var me = this;
	            switch (type) {
	                case 'hour':
	                    me.hour = e.target.innerText;
	                    me.hourListShow = false;
	                    break;
	                case 'minute':
	                    me.minute = e.target.innerText;
	                    me.minuteListShow = false;
	                    break;
	                case 'second':
	                    me.second = e.target.innerText;
	                    me.secondListShow = false;
	                    break;
	                default:
	            };

	            me.value = me.output([me.year, me.month, me.day, me.hour, me.minute, me.second]);
	        },
	        output: function output(d, format) {
	            var fmt = format || this.format;
	            var me = this;
	            if (this.value && this.value !== '' && this.type === 'time' && typeof d === 'string') {
	                d = '1970-01-01 ' + d;
	            }
	            var date = new Date(d);
	            if ((typeof d === 'undefined' ? 'undefined' : (0, _typeof3.default)(d)) === 'object' && d.length > 0) {
	                date = new Date(d[0], d[1], d[2], d[3] || '00', d[4] || '00', d[5] || '00');
	            }
	            var year = date.getFullYear();
	            var month = date.getMonth();
	            var getDate = date.getDate();
	            var hour = date.getHours();
	            var minute = date.getMinutes();
	            var second = date.getSeconds();
	            var timeParams = me.getRangeTime(hour, minute, second);
	            hour = timeParams.hour;
	            minute = timeParams.minute;
	            second = timeParams.second;
	            var o = {
	                'M+': month + 1,
	                'D+': getDate,
	                'h+': hour,
	                'm+': minute,
	                's+': second,
	                'q+': Math.floor((date.getMonth() + 3) / 3),
	                'S': date.getMilliseconds()
	            };
	            if (/(Y+)/.test(fmt)) {
	                fmt = fmt.replace(RegExp.$1, (year + '').substr(4 - RegExp.$1.length));
	            }
	            for (var k in o) {
	                if (new RegExp('(' + k + ')').test(fmt)) {
	                    var str = ('00' + o[k]).substr(('' + o[k]).length);
	                    fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : str);
	                }
	            }
	            me.dateParams = {
	                year: year,
	                month: month,
	                day: me.zero(getDate),
	                hour: me.zero(hour),
	                minute: me.zero(minute),
	                second: me.zero(second)
	            };
	            return fmt;
	        },
	        outputMonth: function outputMonth(month, year) {
	            var m = Number(month);
	            var y = Number(year);
	            if (m === -1) {
	                m = 11;
	                y -= 1;
	            } else if (m === 12) {
	                m = 0;
	                y += 1;
	            }
	            return {
	                y: y,
	                m: m
	            };
	        },
	        getRangeTime: function getRangeTime(hour, minute, second) {
	            var me = this;
	            hour = Math.round(hour / me.hourRange) * me.hourRange;
	            minute = Math.round(minute / me.minuteRange) * me.minuteRange;
	            second = Math.round(second / me.secondRange) * me.secondRange;
	            hour = hour === 24 ? hour - me.hourRange : hour;
	            minute = minute === 60 ? minute - me.minuteRange : minute;
	            second = second === 60 ? second - me.secondRange : second;
	            return {
	                hour: me.zero(hour),
	                minute: me.zero(minute),
	                second: me.zero(second)
	            };
	        }
	    }
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(32);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(83);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(33), __esModule: true };

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(34);
	__webpack_require__(78);
	module.exports = __webpack_require__(82).f('iterator');

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(35)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(38)(String, 'String', function(iterated){
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

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(36)
	  , defined   = __webpack_require__(37);
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

/***/ },
/* 36 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(39)
	  , $export        = __webpack_require__(40)
	  , redefine       = __webpack_require__(55)
	  , hide           = __webpack_require__(45)
	  , has            = __webpack_require__(56)
	  , Iterators      = __webpack_require__(57)
	  , $iterCreate    = __webpack_require__(58)
	  , setToStringTag = __webpack_require__(74)
	  , getPrototypeOf = __webpack_require__(76)
	  , ITERATOR       = __webpack_require__(75)('iterator')
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

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(41)
	  , core      = __webpack_require__(42)
	  , ctx       = __webpack_require__(43)
	  , hide      = __webpack_require__(45)
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

/***/ },
/* 41 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 42 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(44);
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

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(46)
	  , createDesc = __webpack_require__(54);
	module.exports = __webpack_require__(50) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(47)
	  , IE8_DOM_DEFINE = __webpack_require__(49)
	  , toPrimitive    = __webpack_require__(53)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(50) ? Object.defineProperty : function defineProperty(O, P, Attributes){
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

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(48);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(50) && !__webpack_require__(51)(function(){
	  return Object.defineProperty(__webpack_require__(52)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(51)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(48)
	  , document = __webpack_require__(41).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(48);
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

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(45);

/***/ },
/* 56 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(59)
	  , descriptor     = __webpack_require__(54)
	  , setToStringTag = __webpack_require__(74)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(45)(IteratorPrototype, __webpack_require__(75)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(47)
	  , dPs         = __webpack_require__(60)
	  , enumBugKeys = __webpack_require__(72)
	  , IE_PROTO    = __webpack_require__(69)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(52)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(73).appendChild(iframe);
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


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(46)
	  , anObject = __webpack_require__(47)
	  , getKeys  = __webpack_require__(61);

	module.exports = __webpack_require__(50) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(62)
	  , enumBugKeys = __webpack_require__(72);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(56)
	  , toIObject    = __webpack_require__(63)
	  , arrayIndexOf = __webpack_require__(66)(false)
	  , IE_PROTO     = __webpack_require__(69)('IE_PROTO');

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

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(64)
	  , defined = __webpack_require__(37);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(65);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 65 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(63)
	  , toLength  = __webpack_require__(67)
	  , toIndex   = __webpack_require__(68);
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

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(36)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(36)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(70)('keys')
	  , uid    = __webpack_require__(71);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(41)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 71 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 72 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(41).document && document.documentElement;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(46).f
	  , has = __webpack_require__(56)
	  , TAG = __webpack_require__(75)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(70)('wks')
	  , uid        = __webpack_require__(71)
	  , Symbol     = __webpack_require__(41).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(56)
	  , toObject    = __webpack_require__(77)
	  , IE_PROTO    = __webpack_require__(69)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(37);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(79);
	var global        = __webpack_require__(41)
	  , hide          = __webpack_require__(45)
	  , Iterators     = __webpack_require__(57)
	  , TO_STRING_TAG = __webpack_require__(75)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(80)
	  , step             = __webpack_require__(81)
	  , Iterators        = __webpack_require__(57)
	  , toIObject        = __webpack_require__(63);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(38)(Array, 'Array', function(iterated, kind){
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

/***/ },
/* 80 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 81 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(75);

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(84), __esModule: true };

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(85);
	__webpack_require__(96);
	__webpack_require__(97);
	__webpack_require__(98);
	module.exports = __webpack_require__(42).Symbol;

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(41)
	  , has            = __webpack_require__(56)
	  , DESCRIPTORS    = __webpack_require__(50)
	  , $export        = __webpack_require__(40)
	  , redefine       = __webpack_require__(55)
	  , META           = __webpack_require__(86).KEY
	  , $fails         = __webpack_require__(51)
	  , shared         = __webpack_require__(70)
	  , setToStringTag = __webpack_require__(74)
	  , uid            = __webpack_require__(71)
	  , wks            = __webpack_require__(75)
	  , wksExt         = __webpack_require__(82)
	  , wksDefine      = __webpack_require__(87)
	  , keyOf          = __webpack_require__(88)
	  , enumKeys       = __webpack_require__(89)
	  , isArray        = __webpack_require__(92)
	  , anObject       = __webpack_require__(47)
	  , toIObject      = __webpack_require__(63)
	  , toPrimitive    = __webpack_require__(53)
	  , createDesc     = __webpack_require__(54)
	  , _create        = __webpack_require__(59)
	  , gOPNExt        = __webpack_require__(93)
	  , $GOPD          = __webpack_require__(95)
	  , $DP            = __webpack_require__(46)
	  , $keys          = __webpack_require__(61)
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
	  __webpack_require__(94).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(91).f  = $propertyIsEnumerable;
	  __webpack_require__(90).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(39)){
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
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(45)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(71)('meta')
	  , isObject = __webpack_require__(48)
	  , has      = __webpack_require__(56)
	  , setDesc  = __webpack_require__(46).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(51)(function(){
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

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(41)
	  , core           = __webpack_require__(42)
	  , LIBRARY        = __webpack_require__(39)
	  , wksExt         = __webpack_require__(82)
	  , defineProperty = __webpack_require__(46).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(61)
	  , toIObject = __webpack_require__(63);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(61)
	  , gOPS    = __webpack_require__(90)
	  , pIE     = __webpack_require__(91);
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

/***/ },
/* 90 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 91 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(65);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(63)
	  , gOPN      = __webpack_require__(94).f
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


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(62)
	  , hiddenKeys = __webpack_require__(72).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(91)
	  , createDesc     = __webpack_require__(54)
	  , toIObject      = __webpack_require__(63)
	  , toPrimitive    = __webpack_require__(53)
	  , has            = __webpack_require__(56)
	  , IE8_DOM_DEFINE = __webpack_require__(49)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(50) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 96 */
/***/ function(module, exports) {

	

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(87)('asyncIterator');

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(87)('observable');

/***/ },
/* 99 */
/***/ function(module, exports) {

	module.exports = "\r\n<div class=\"xcui-datapicker {{className}}\">\r\n    <div :class=\"{'input-group':btnShow,'bg-pr':!btnShow}\">\r\n        <input class=\"form-control\"  type=\"text\" v-model=\"value\" placeholder=\"请输入日期\" @click=\"showCalendar\">\r\n        <div @click.stop=\"\"\r\n             @touchstart.stop=\"\"\r\n             class=\"calendar\"\r\n             v-show=\"show\">\r\n            <div class=\"calendar-tools\" v-if=\"type!='time'\">\r\n                <i class=\"glyphicon glyphicon-chevron-left float left\"\r\n                   @click=\"prev\"></i>\r\n                <i class=\"glyphicon glyphicon-chevron-right float right\"\r\n                   @click=\"next\"></i>\r\n                <div class=\"calendar-tit\">\r\n                    <span @click=\"changeTitSelect(year, 'year')\"><input v-model=\"year\" class=\"calendar-tit-year\" type=\"text\" @change=\"changeTitSelect(year,'year')\"/>年</span>\r\n                    <span class=\"calendar-tit-month\" @click=\"changeTitSelect(month-1, 'month')\">{{month+1}}月</span>\r\n                </div>\r\n            </div>\r\n            <div v-show=\"dataTableShow\">\r\n                <table cellpadding=\"5\" v-if=\"type!='time'\">\r\n                    <thead>\r\n                        <tr>\r\n                            <td v-for=\"week in weeks\" class=\"week\">{{week}}</td>\r\n                        </tr>\r\n                    </thead>\r\n                    <tr v-for=\"(k1,day) in days\">\r\n                        <td\r\n                        v-for=\"(k2,child) in day\"\r\n                        :class=\"{'today':child.today,'off':child.disabled,'noclick':child.noClick}\"\r\n                        :style=\"{'background':color&&child.today?color:''}\"\r\n                        @click=\"select(k1,k2,$event)\">\r\n                        {{child.day}}\r\n                        <div class=\"lunar\" v-if=\"showLunar\">{{child.lunar}}</div>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n                <div class=\"calendar-time\" v-show=\"type=='datetime'|| type=='time'\">\r\n                    <div  class=\"timer clearfix\">\r\n                        <div class=\"timer-item\">\r\n                            <label @click=\"dropTimeList('hour')\">{{hour}}</label>:\r\n                            <ul class=\"drop-down\" v-show=\"hourListShow\">\r\n                                <li v-for=\"item in hourList\" @click=\"selectTimeItem($event,'hour')\">{{item}}</li>\r\n                            </ul>\r\n                        </div>\r\n                        <div class=\"timer-item\">\r\n                            <label @click=\"dropTimeList('minute')\">{{minute}}</label>:\r\n                            <ul class=\"drop-down\" v-show=\"minuteListShow\">\r\n                                <li v-for=\"item in minuteList\" @click=\"selectTimeItem($event,'minute')\">{{item}}</li>\r\n                            </ul>\r\n                        </div>\r\n                        <div class=\"timer-item\">\r\n                            <label @click=\"dropTimeList('second')\">{{second}}</label>\r\n                            <ul class=\"drop-down\" v-show=\"secondListShow\">\r\n                                <li v-for=\"item in secondList\" @click=\"selectTimeItem($event,'second')\">{{item}}</li>\r\n                            </ul>\r\n                        </div>\r\n                        <div class=\"timer-item\">\r\n                            <div class=\"timer-item-current\"\r\n                                @click=\"currentTime\"\r\n                                :style=\"{'color':color}\">当前</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"calendar-button\" v-show=\"type=='datetime'|| type=='time' || range\">\r\n                    <button @click=\"ok\" :style=\"{'background':color}\">确定</button>\r\n                    <button @click=\"cancel\" class=\"cancel\">取消</button>\r\n                </div>\r\n            </div>\r\n            <table cellpadding=\"6\" v-show=\"yearTableShow\">\r\n                <tr v-show=\"selectRangeShow\">\r\n                    <td colspan =\"3\">{{selectRange}}</td>\r\n                </tr>\r\n                <tr v-for=\"selects in selectRangeList\">\r\n                    <td v-for=\"select in selects\" @click=\"selectItem(select)\">{{select}}</td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n        <span class=\"input-group-btn\" v-if=\"btnShow\" @click=\"showCalendar\" >\r\n            <button class=\"btn btn-default\">\r\n                <span class=\"glyphicon glyphicon-calendar\"></span>\r\n            </button>\r\n        </span>\r\n    </div>\r\n</div>\r\n";

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(101)
	__vue_script__ = __webpack_require__(103)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\daterangepicker\\index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(107)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-4376e854/index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(102);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/.0.23.1@css-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../../node_modules/.2.2.3@less-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./index.vue", function() {
				var newContent = require("!!./../../../node_modules/.0.23.1@css-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../../node_modules/.2.2.3@less-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, ".xcui-datarangepicker {\n  position: relative;\n}\n.xcui-datarangepicker .calendar {\n  width: 240px;\n  padding: 10px;\n  background: #fff;\n  position: absolute;\n  border: 1px solid #DEDEDE;\n  border-radius: 2px;\n  -webkit-transition: all .5s ease;\n  transition: all .5s ease;\n  left: 0;\n  top: 38px;\n}\n.xcui-datarangepicker .calendar-enter .calendar-leave {\n  opacity: 0;\n  -webkit-transform: translate3d(0, -10px, 0);\n          transform: translate3d(0, -10px, 0);\n}\n.xcui-datarangepicker .calendar-tit {\n  text-align: center;\n  margin: 0 auto;\n  width: 104px;\n  font-weight: bold;\n}\n.xcui-datarangepicker .calendar-tit input {\n  color: #333;\n  height: 24px;\n  outline: medium;\n  text-align: center;\n  border: none;\n  background-color: transparent;\n}\n.xcui-datarangepicker .calendar-tit-year {\n  width: 36px;\n}\n.xcui-datarangepicker .calendar-tit-month {\n  width: 18px;\n  margin-left: 2px;\n}\n.xcui-datarangepicker .calendar:before {\n  position: absolute;\n  left: 30px;\n  top: -10px;\n  content: \"\";\n  border: 5px solid rgba(0, 0, 0, 0);\n  border-bottom-color: #DEDEDE;\n}\n.xcui-datarangepicker .calendar:after {\n  position: absolute;\n  left: 30px;\n  top: -9px;\n  content: \"\";\n  border: 5px solid rgba(0, 0, 0, 0);\n  border-bottom-color: #fff;\n}\n.xcui-datarangepicker .calendar-tools {\n  height: 32px;\n  font-size: 14px;\n  line-height: 32px;\n  color: #333;\n}\n.xcui-datarangepicker .calendar-tools .float.left {\n  float: left;\n}\n.xcui-datarangepicker .calendar-tools .float.right {\n  float: right;\n}\n.xcui-datarangepicker .calendar-tools > i {\n  margin: 0 10px;\n  line-height: 32px;\n  cursor: pointer;\n  color: #707070;\n}\n.xcui-datarangepicker .calendar-tools > i:hover {\n  color: #333;\n}\n.xcui-datarangepicker .calendar table {\n  clear: both;\n  width: 100%;\n  margin-bottom: 10px;\n  border-collapse: collapse;\n  color: #444;\n}\n.xcui-datarangepicker .calendar table td {\n  margin: 2px !important;\n  padding: 5px 0;\n  width: 14.28571429%;\n  text-align: center;\n  vertical-align: middle;\n  font-size: 14px;\n  line-height: 125%;\n  cursor: pointer;\n  border: 0;\n}\n.xcui-datarangepicker .calendar table td:hover {\n  background: #f3f8fa;\n}\n.xcui-datarangepicker .calendar table td.week {\n  pointer-events: none !important;\n  cursor: default !important;\n}\n.xcui-datarangepicker .calendar table td.off {\n  color: #c0c0c0;\n}\n.xcui-datarangepicker .calendar table td.today {\n  background-color: #46c3c1;\n  color: #fff;\n  font-size: 14px;\n  border-radius: 4px;\n}\n.xcui-datarangepicker .calendar table td.today .lunar {\n  color: #fff;\n}\n.xcui-datarangepicker .calendar table td.todayleft {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.xcui-datarangepicker .calendar table td.todayright {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.xcui-datarangepicker .calendar table td.range {\n  background: #e2eff5;\n}\n.xcui-datarangepicker .calendar table thead td {\n  text-transform: uppercase;\n}\n.xcui-datarangepicker .calendar .timer {\n  margin: 0 auto 10px;\n  width: 120px;\n}\n.xcui-datarangepicker .calendar .timer input {\n  border-radius: 2px;\n  padding: 5px;\n  font-size: 14px;\n  line-height: 18px;\n  color: #46c3c1;\n  width: 50px;\n  text-align: center;\n  border: 1px solid #efefef;\n}\n.xcui-datarangepicker .calendar .timer input:focus {\n  border: 1px solid #46c3c1;\n}\n.xcui-datarangepicker .calendar .timer-item {\n  float: left;\n  text-align: center;\n  position: relative;\n  cursor: pointer;\n}\n.xcui-datarangepicker .calendar .timer-item-current {\n  color: #46c3c1;\n  line-height: 24px;\n  font-size: 14px;\n}\n.xcui-datarangepicker .calendar .timer label {\n  margin: 0;\n  width: 30px;\n  padding: 5px;\n  line-height: 14px;\n  margin-right: 4px;\n  font-weight: normal;\n}\n.xcui-datarangepicker .calendar-button {\n  text-align: center;\n}\n.xcui-datarangepicker .calendar-button button {\n  border: none;\n  cursor: pointer;\n  display: inline-block;\n  min-height: 1em;\n  vertical-align: baseline;\n  background: #46c3c1;\n  color: #fff;\n  margin: 0 .3em 0 0;\n  padding: .6em 2em;\n  font-size: 1em;\n  line-height: 1em;\n  text-align: center;\n  border-radius: .3em;\n}\n.xcui-datarangepicker .calendar-button button.cancel {\n  background: #efefef;\n  color: #666;\n}\n.xcui-datarangepicker .calendar .lunar {\n  font-size: 11px;\n  line-height: 150%;\n  color: #aaa;\n}\n.xcui-datarangepicker .calendar .drop-down {\n  position: absolute;\n  top: 24px;\n  left: -10px;\n  width: 50px;\n  height: 140px;\n  background: #fff;\n  border: 1px solid #efefef;\n  padding: 0;\n  margin: 0;\n  overflow-y: scroll;\n}\n.xcui-datarangepicker .calendar .drop-down li {\n  width: 50px;\n  list-style: none;\n}\n.xcui-datarangepicker .calendar .drop-down li.on {\n  background: #eee;\n}\n.xcui-datarangepicker .calendar .drop-down li:hover {\n  background: #eee;\n}\n.xcui-datarangepicker .double-calendar {\n  width: 490px;\n  z-index: 999;\n}\n.xcui-datarangepicker .double-calendar-left {\n  width: 220px;\n  float: left;\n}\n.xcui-datarangepicker .double-calendar-right {\n  width: 220px;\n  float: right;\n}\n.xcui-datarangepicker .double-calendar .calendar-button {\n  padding-top: 10px;\n  border-top: 1px solid #ddd;\n}\n.xcui-datarangepicker .clearfix {\n  zoom: 1;\n}\n.xcui-datarangepicker .clearfix:after {\n  display: block;\n  width: 0;\n  height: 0;\n  visibility: hidden;\n  content: '';\n  clear: both;\n}\n.xcui-datarangepicker .bg-pr {\n  position: relative;\n}\n.xcui-datarangepicker .btn-default {\n  color: #666;\n  border-radius: 0 4px 4px 0;\n}\n", ""]);

	// exports


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _calendar = __webpack_require__(104);

	var _calendar2 = _interopRequireDefault(_calendar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    name: 'xcui-daterangepicker',
	    props: {
	        startDate: {
	            twoWay: true,
	            default: ''
	        },
	        endDate: {
	            twoWay: true,
	            default: ''
	        },
	        minDate: {},
	        maxDate: {},
	        format: {
	            type: String,
	            default: 'YYYY-MM-DD'
	        },
	        hourRange: {},
	        minuteRange: {},
	        secondRange: {},
	        color: {
	            type: String,
	            default: ''
	        },
	        dateLimit: {
	            type: Object,
	            default: null
	        },
	        className: String,
	        btnShow: {
	            type: Boolean,
	            default: false
	        }
	    },
	    components: {
	        calendar: _calendar2.default
	    },
	    data: function data() {
	        return {
	            show: false,
	            value: '',
	            renderStar: '',
	            renderEnd: '',
	            initialStartDate: '',
	            initialEndDate: ''
	        };
	    },

	    watch: {
	        startDate: function startDate(val) {
	            if (val > this.endDate) {
	                this.endDate = val;
	            }
	        },
	        endDate: function endDate(val) {
	            if (val < this.startDate) {
	                this.startDate = val;
	            }
	        }
	    },
	    methods: {
	        ok: function ok() {
	            this.value = this.startDate + ' 至 ' + this.endDate;
	            this.show = false;
	            this.$emit('on-change', this.startDate, this.endDate);
	            this.initialStartDate = this.startDate;
	            this.initialEndDate = this.endDate;
	        },
	        cancel: function cancel() {
	            this.show = false;
	            this.renderStar = this.startDate = this.initialStartDate;
	            this.renderEnd = this.endDate = this.initialEndDate;
	        },
	        showCalendar: function showCalendar(e) {
	            var me = this;
	            e.stopPropagation();
	            me.show = true;
	            var bindHide = function bindHide(e) {
	                e.stopPropagation();
	                me.show = false;
	                document.removeEventListener('click', bindHide, false);
	            };
	            setTimeout(function () {
	                document.addEventListener('click', bindHide, false);
	            }, 500);
	        }
	    }
	};

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(105)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\daterangepicker\\calendar.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(106)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-76cf4ea8/calendar.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _calendarMixins = __webpack_require__(30);

	var _calendarMixins2 = _interopRequireDefault(_calendarMixins);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    mixins: [_calendarMixins2.default],
	    props: {
	        otherValue: {
	            type: String,
	            default: ''
	        },
	        right: {
	            type: Boolean,
	            default: false
	        },
	        renderStar: {
	            type: String,
	            default: ''
	        },
	        renderEnd: {
	            type: String,
	            default: ''
	        },
	        dateLimit: {
	            type: Object,
	            default: null
	        },
	        initialDate: String
	    },
	    watch: {
	        renderStar: function renderStar(val) {
	            if (val === '' || this.right) {
	                return false;
	            }
	            this.output(val);
	            var params = this.dateParams;
	            this.year = params.year;
	            this.month = params.month;
	            this.hour = params.hour;
	            this.day = params.day;
	            this.minute = params.minute;
	            this.second = params.second;
	            this.render(params.year, params.month);
	        },
	        renderEnd: function renderEnd(val) {
	            if (val === '' || !this.right) {
	                return false;
	            }
	            this.output(val);
	            var params = this.dateParams;
	            this.year = params.year;
	            this.month = params.month;
	            this.day = params.day;
	            this.hour = params.hour;
	            this.minute = params.minute;
	            this.second = params.second;
	            this.render(params.year, params.month);
	        }
	    },
	    created: function created() {
	        this.initialDate = this.output(this.value);
	    },

	    methods: {
	        renderElse: function renderElse(y, m, i, temp, line) {
	            var me = this;
	            me.otherValue = me.otherValue && me.otherValue !== '' ? me.otherValue : me.value;
	            var format = me.defaultFormat;
	            var today = me.output([y, m, i], format);
	            var value = me.output(me.value, format);
	            var otherDate = me.output(me.otherValue, format);
	            var isMinDate = me.minDate && me.minDate !== '' && today < me.output(me.minDate, format);
	            var isMaxDate = me.maxDate && me.maxDate !== '' && today > me.output(me.maxDate, format);
	            if (isMinDate || isMaxDate) {
	                temp[line].push({ day: i, disabled: true, range: false, noclick: true });
	            } else if (!me.right && today > value && today <= otherDate) {
	                temp[line].push({ day: i, disabled: false, range: true });
	            } else if (me.right && today < value && today >= otherDate) {
	                temp[line].push({ day: i, disabled: false, range: true });
	            } else if (me.right && today < otherDate) {
	                temp[line].push({ day: i, disabled: true, range: false, prev: true });
	            } else {
	                temp[line].push({ day: i, today: false, range: false });
	            }
	        },
	        select: function select(k1, k2, e) {
	            if (e !== undefined) {
	                e.stopPropagation();
	            }
	            var className = e.target.className;
	            if (className === 'off todayright prev' || className.indexOf('noclick') !== -1) {
	                return false;
	            }
	            var me = this;
	            var daySeleted = me.days[k1][k2];

	            me.output(me.value);
	            var va = me.dateParams;
	            if (me.today.length > 0 && me.month === va.month && me.year === va.year) {
	                me.days[me.today[0]][me.today[1]].today = false;
	            }

	            daySeleted.today = true;
	            daySeleted.range = false;
	            me.day = this.zero(me.days[k1][k2].day);
	            me.today = [k1, k2];
	            if (daySeleted.disabled) {
	                me.month = k1 === 0 ? me.month - 1 : me.month + 1;
	                var om = me.outputMonth(me.month, me.year);
	                me.year = om.y;
	                me.month = om.m;
	                me.value = me.output([me.year, me.month, me.day, me.hour, me.minute, me.second]);
	                me.render(me.year, me.month);
	            } else {
	                me.today = [k1, k2];
	                me.value = me.output([me.year, me.month, me.day, me.hour, me.minute, me.second]);
	            }
	            me.otherValue = me.bindLimitDate();
	            me.changeOtherCalender();
	        },
	        changeOtherCalender: function changeOtherCalender() {
	            var me = this;
	            if (!me.right) {
	                if (me.value > me.otherValue) {
	                    me.otherValue = me.value;
	                }
	                me.$parent.renderStar = me.output(me.value);
	                me.$parent.renderEnd = me.output(me.otherValue);
	            } else if (me.right) {
	                if (me.value < me.otherValue) {
	                    me.otherValue = me.value;
	                }
	                me.$parent.renderStar = me.output(me.otherValue);
	                me.$parent.renderEnd = me.output(me.value);
	            }
	        },
	        getYearMonth: function getYearMonth(date) {
	            this.output(date);
	            var params = this.dateParams;
	            return params.year * 12 + params.month;
	        },
	        bindLimitDate: function bindLimitDate() {
	            var me = this;
	            var format = me.defaultFormat;
	            var oValue = me.output(me.otherValue, format);
	            var ovs = me.dateParams;
	            var bg = me.minDate;
	            var ed = me.maxDate;
	            var y = ovs.year;
	            var m = ovs.month;
	            var d = ovs.day;
	            var meValue = me.output(me.value, format);
	            var meDate = me.dateParams.day;
	            var AddDayCount = 0;
	            var params = null;
	            var otherTime = '';
	            if (me.right && me.dateLimit) {
	                if (me.dateLimit.hasOwnProperty('months')) {
	                    for (var i1 = 0; i1 < me.dateLimit.months; i1++) {
	                        AddDayCount += new Date(y, m + i1 + 1, 0).getDate();
	                    }
	                } else if (me.dateLimit.hasOwnProperty('days')) {
	                    AddDayCount += me.dateLimit.days;
	                }
	                if (meValue > me.getDataStr(AddDayCount, oValue).val) {
	                    AddDayCount = 0;
	                    var diffDate = 0;
	                    if (me.dateLimit && me.dateLimit.hasOwnProperty('months')) {
	                        var limitMonth = me.dateLimit.months;
	                        for (var i2 = 0; i2 < limitMonth; i2++) {
	                            var count = meDate === me.lastDateOfMonth ? 0 : 1;
	                            var nextMaxDate = new Date(y, m - i2 + count, 0).getDate();
	                            AddDayCount -= nextMaxDate;
	                        }
	                        diffDate = meDate - new Date(y, m - limitMonth + 1, 0).getDate();
	                        if (meDate !== me.lastDateOfMonth && diffDate > 0) {
	                            AddDayCount += diffDate;
	                        }
	                    } else if (me.dateLimit.hasOwnProperty('days')) {
	                        AddDayCount -= me.dateLimit.days;
	                    }
	                    params = me.getDataStr(AddDayCount, meValue);
	                    y = params.y;
	                    m = params.m;
	                    d = params.d;
	                }
	            } else if (me.dateLimit) {
	                if (me.dateLimit.hasOwnProperty('months')) {
	                    for (var k1 = 0; k1 < me.dateLimit.months; k1++) {
	                        AddDayCount -= new Date(y, m - k1, 0).getDate();
	                    }
	                } else if (me.dateLimit.hasOwnProperty('days')) {
	                    AddDayCount -= me.dateLimit.days;
	                }
	                if (meValue < me.getDataStr(AddDayCount, oValue).val || meValue > oValue) {
	                    AddDayCount = 0;
	                    var diffDate2 = 0;
	                    if (me.dateLimit && me.dateLimit.hasOwnProperty('months')) {
	                        var _limitMonth = me.dateLimit.months;
	                        for (var k2 = 0; k2 < _limitMonth; k2++) {
	                            var count2 = meDate === me.lastDateOfMonth ? 2 : 1;
	                            var nextMaxDate2 = new Date(me.year, me.month + k2 + count2, 0).getDate();
	                            AddDayCount += nextMaxDate2;
	                        }
	                        diffDate2 = meDate - new Date(me.year, me.month + _limitMonth + 1, 0).getDate();
	                        if (meDate !== me.lastDateOfMonth && diffDate2 > 0) {
	                            AddDayCount -= diffDate2;
	                        }
	                    } else if (me.dateLimit.hasOwnProperty('days')) {
	                        AddDayCount += me.dateLimit.days;
	                    }
	                    params = me.getDataStr(AddDayCount, meValue);
	                    y = params.y;
	                    m = params.m;
	                    d = params.d;
	                }
	            }
	            otherTime = me.output([y, m, d, me.hour, me.minute, me.second]);
	            if (bg) {
	                otherTime = otherTime < bg ? bg : otherTime > ed ? ed : otherTime;
	            }
	            return otherTime;
	        },
	        getDataStr: function getDataStr(AddDayCount, nowDate) {
	            var me = this;
	            var date = new Date(nowDate);
	            date.setDate(date.getDate() + AddDayCount);
	            var y = date.getFullYear();
	            var m = date.getMonth();
	            var d = date.getDate();
	            return {
	                val: y + '-' + me.zero(m + 1) + '-' + me.zero(d),
	                y: y,
	                m: m,
	                d: d
	            };
	        }
	    }
	};

/***/ },
/* 106 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"calendar-tools\" v-if=\"type!='time'\">\n    <i class=\"glyphicon glyphicon-chevron-left float left\"\n       @click=\"prev\"></i>\n    <i class=\"glyphicon glyphicon-chevron-right float right\"\n   @click=\"next\"></i>\n    <div class=\"calendar-tit\">\n        <span @click=\"changeTitSelect(year, 'year')\">\n            <input v-model=\"year\" class=\"calendar-tit-year\" type=\"text\" @change=\"changeTitSelect(year,'year')\"/>年\n        </span>\n        <span class=\"calendar-tit-month\" @click=\"changeTitSelect(month-1, 'month')\">{{month+1}}月</span>\n    </div>\n</div>\n<div v-show=\"dataTableShow\">\n    <table cellpadding=\"5\" v-if=\"type!='time'\">\n        <thead>\n            <tr>\n                <td v-for=\"week in weeks\" class=\"week\">{{week}}</td>\n            </tr>\n        </thead>\n        <tr v-for=\"(k1,day) in days\">\n            <td\n            v-for=\"(k2,child) in day\"\n            :class=\"{'today':child.today,'range':child.range,'off':child.disabled,'todayleft':!right,'todayright':right,'prev':child.prev, 'noclick':child.noclick}\"\n            :style=\"{'background':color&&child.today?color:''}\"\n            @click=\"select(k1,k2,$event)\">\n            {{child.day}}\n            </td>\n        </tr>\n    </table>\n    <div class=\"calendar-time\" v-show=\"type=='datetime' || type=='time'\">\n        <div class=\"timer clearfix\">\n            <div class=\"timer-item\">\n                <label @click=\"dropTimeList('hour')\">{{hour}}</label>:\n                <ul class=\"drop-down\" v-show=\"hourListShow\">\n                    <li v-for=\"item in hourList\" @click=\"selectTimeItem($event,'hour')\">{{item}}</li>\n                </ul>\n            </div>\n            <div class=\"timer-item\">\n                <label @click=\"dropTimeList('minute')\">{{minute}}</label>:\n                <ul class=\"drop-down\" v-show=\"minuteListShow\">\n                    <li v-for=\"item in minuteList\" @click=\"selectTimeItem($event,'minute')\">{{item}}</li>\n                </ul>\n            </div>\n            <div class=\"timer-item\">\n                <label @click=\"dropTimeList('second')\">{{second}}</label>\n                <ul class=\"drop-down\" v-show=\"secondListShow\">\n                    <li v-for=\"item in secondList\" @click=\"selectTimeItem($event,'second')\">{{item}}</li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>\n<table cellpadding=\"6\" v-show=\"yearTableShow\">\n    <tr v-show=\"selectRangeShow\">\n        <td colspan =\"3\">{{selectRange}}</td>\n    </tr>\n    <tr v-for=\"selects in selectRangeList\">\n        <td v-for=\"select in selects\" @click=\"selectItem(select)\">{{select}}</td>\n    </tr>\n</table>\n";

/***/ },
/* 107 */
/***/ function(module, exports) {

	module.exports = "\n\r\n<div class=\"xcui-datarangepicker\" :class=\"className\">\r\n    <div :class=\"{'input-group':btnShow}\">\r\n        <input class=\"form-control col-md-3\" type=\"text\" v-model=\"value\" placeholder=\"请输入日期\" @click=\"showCalendar\">\r\n        <!-- 双日历 -->\r\n        <div @click.stop=\"\"\r\n             @touchstart.stop=\"\"\r\n             class=\"calendar double-calendar\"\r\n             v-show=\"show\">\r\n             <div class=\"clearfix\">\r\n                 <div class=\"double-calendar-left\">\r\n                    <calendar\r\n                        :value.sync=\"startDate\"\r\n                        :format=\"format\"\r\n                        :other-value.sync=\"endDate\"\r\n                        :min-date=\"minDate\"\r\n                        :max-date=\"maxDate\"\r\n                        :hour-range=\"hourRange\"\r\n                        :minute-range=\"minuteRange\"\r\n                        :second-range=\"secondRange\"\r\n                        :color=\"color\"\r\n                        :date-limit=\"dateLimit\"\r\n                        :initial-date.sync=\"initialStartDate\"\r\n                        :render-star=\"renderStar\"></calendar>\r\n                 </div>\r\n                 <div class=\"double-calendar-right\">\r\n                    <calendar\r\n                        :value.sync=\"endDate\"\r\n                        :format=\"format\"\r\n                        :other-value.sync=\"startDate\"\r\n                        :right=\"true\"\r\n                        :min-date=\"minDate\"\r\n                        :max-date=\"maxDate\"\r\n                        :hour-range=\"hourRange\"\r\n                        :minute-range=\"minuteRange\"\r\n                        :second-range=\"secondRange\"\r\n                        :color=\"color\"\r\n                        :date-limit=\"dateLimit\"\r\n                        :initial-date.sync=\"initialEndDate\"\r\n                        :render-end=\"renderEnd\"></calendar>\r\n                 </div>\r\n             </div>\r\n             <div class=\"calendar-button\">\r\n                <button @click=\"ok\" :style=\"{'background':color}\">确定</button>\r\n                <button @click=\"cancel\" class=\"cancel\">取消</button>\r\n             </div>\r\n        </div>\r\n        <!-- end 双日历 -->\r\n        <span class=\"input-group-btn\" v-if=\"btnShow\" @click=\"showCalendar\" >\r\n            <button class=\"btn btn-default\">\r\n                <span class=\"glyphicon glyphicon-calendar\"></span>\r\n            </button>\r\n        </span>\r\n    </div>\r\n</div>\r\n";

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(109)
	__vue_script__ = __webpack_require__(111)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\inputNumber\\index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(112)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-9ee36d2c/index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(110);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/.0.23.1@css-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../../node_modules/.2.2.3@less-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./index.vue", function() {
				var newContent = require("!!./../../../node_modules/.0.23.1@css-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../../node_modules/.2.2.3@less-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, ".outer {\n  overflow: hidden;\n  display: inline-block;\n  border: 1px solid #c1c1c1;\n  border-radius: 5px;\n}\n.outer:hover {\n  border: 1px solid #2db7f5;\n}\n.outer:hover .up-down-wrap {\n  border-left: 1px solid #c1c1c1;\n}\n.outer:hover .up-down-wrap .up-wrap {\n  color: #c1c1c1;\n  border-bottom: 1px solid #c1c1c1;\n  border-radius: 1px;\n}\n.outer:hover .up-down-wrap .down-wrap {\n  color: #c1c1c1;\n}\n.outer .input-wrap {\n  float: right;\n}\n.outer .input-wrap input {\n  padding-left: 5px;\n  float: right;\n  background-color: #ffffff;\n  border: none;\n  padding-right: 20px;\n}\n.outer .input-wrap input:focus {\n  outline: none !important;\n}\n.outer .up-down-wrap {\n  width: 20px;\n  margin-left: -22px;\n  border: none;\n  text-align: center;\n  float: right;\n  position: relative;\n}\n.outer .up-down-wrap .up-wrap {\n  border: none;\n  display: block;\n}\n.outer .up-down-wrap .down-wrap {\n  border: none;\n  display: block;\n}\n.outer .up-down-wrap a:link,\n.outer .up-down-wrap a:visited {\n  color: transparent;\n  text-decoration: none;\n}\n.outer .up-down-wrap a:hover,\n.outer .up-down-wrap a:active {\n  color: #2db7f5 !important;\n  text-decoration: none;\n}\n.large {\n  height: 45px !important;\n}\n.large .input-wrap input {\n  height: 40px !important;\n}\n.large .up-down-wrap {\n  height: 100% !important;\n}\n.large .up-down-wrap .up-wrap {\n  margin-top: 4px !important;\n}\n.large .up-down-wrap .down-wrap {\n  margin-top: 4px !important;\n}\n.normal {\n  height: 100% !important;\n  vertical-align: middle;\n}\n.normal .input-wrap input {\n  height: 30px !important;\n}\n.normal .up-down-wrap {\n  height: 30px !important;\n}\n.normal .up-down-wrap .up-wrap {\n  font-size: 1px !important;\n  margin: 0 !important;\n}\n.normal .up-down-wrap .down-wrap {\n  font-size: 1px !important;\n  margin: 0 !important;\n}\n", ""]);

	// exports


/***/ },
/* 111 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    name: 'xcui-inputnumber',
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
	            default: ''
	        },
	        textTips: {
	            type: String,
	            default: '请输入范围内整数'
	        },
	        size: {
	            type: String,
	            default: 'large'
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
	            if (this.isAvailbale(event.keyCode) && this.isNumber(this.inputValue + '')) {
	                this.inputValue = this.limitValue(this.inputValue) + '';
	            } else {
	                this.inputValue = '';
	            }
	        },
	        limitValue: function limitValue(currentNum) {
	            var result = currentNum;
	            if (currentNum !== '') {
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
	                this.inputValue = addValue + '';
	            }
	            e.preventDefault();
	        },
	        downValue: function downValue(e) {
	            if (this.isNumber(this.inputValue)) {
	                var deliValue = window.Number(this.inputValue) - this.step;
	                deliValue = this.limitValue(deliValue);
	                this.inputValue = deliValue + '';
	            }
	            e.preventDefault();
	        },
	        preventDefault: function preventDefault(e) {
	            e.preventDefault();
	        }
	    },
	    ready: function ready() {}
	};

/***/ },
/* 112 */
/***/ function(module, exports) {

	module.exports = "\n<div v-el:outer class=\"outer\" :class=\"size\">\n\t<div class=\"up-down-wrap\">\n\t\t<a href=\"\" class=\"up-wrap glyphicon glyphicon-chevron-up\" @mouse.down=\"preventDefault\" @click=\"upValue\">\n\t\t\t<!-- <span class=\"up\"></span> -->\n\t\t</a>\n\t\t<a href=\"\" class=\"down-wrap glyphicon glyphicon-chevron-down\" @mouse.down=\"preventDefault\" @click=\"downValue\">\n\t\t\t<!-- <span class=\"down\"></span> -->\n\t\t</a>\n\t</div>\n\t<div class=\"input-wrap\">\n\t\t<input type='text' v-el='input' class=\"middle\" v-model=\"inputValue\" @keyup=\"changeValue($event)\" :placeholder=\"textTips\"\n\t\t:disabled =\"isDisable\" :class=\"className\"/>\n\t</div>\n</div>\n";

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(114)
	__vue_script__ = __webpack_require__(116)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\loading\\index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(117)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-14d75033/index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(115);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/.0.23.1@css-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../../node_modules/.2.2.3@less-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./index.vue", function() {
				var newContent = require("!!./../../../node_modules/.0.23.1@css-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../../node_modules/.2.2.3@less-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, ".xcui-loading {\n  display: block;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 999;\n  background: rgba(255, 255, 255, 0.7);\n}\n.loader {\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n}\n/*loading-1********************/\n.load1 .loader {\n  top: 40%;\n  color: #46C3C1;\n  font-size: 13px;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  text-indent: -9999em;\n  -webkit-animation: load1 1.3s infinite linear;\n  animation: load1 1.3s infinite linear;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n}\n@-webkit-keyframes load1 {\n  0%,\n  100% {\n    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;\n  }\n  12.5% {\n    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n  }\n  25% {\n    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n  }\n  37.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;\n  }\n  50% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;\n  }\n  62.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;\n  }\n  75% {\n    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;\n  }\n  87.5% {\n    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;\n  }\n}\n@keyframes load1 {\n  0%,\n  100% {\n    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;\n  }\n  12.5% {\n    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n  }\n  25% {\n    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n  }\n  37.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;\n  }\n  50% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;\n  }\n  62.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;\n  }\n  75% {\n    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;\n  }\n  87.5% {\n    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;\n  }\n}\n/*loading-2********************/\n.load2 .loader {\n  top: 30%;\n  color: #46C3C1;\n  font-size: 60px;\n  text-indent: -9999em;\n  overflow: hidden;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation: load2 1.7s infinite ease;\n  animation: load2 1.7s infinite ease;\n}\n@-webkit-keyframes load2 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n  }\n  5%,\n  95% {\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n  }\n  10%,\n  59% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\n  }\n  20% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\n  }\n  38% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n  }\n}\n@keyframes load2 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n  }\n  5%,\n  95% {\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n  }\n  10%,\n  59% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\n  }\n  20% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\n  }\n  38% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n  }\n}\n/*loading-3********************/\n.load3 .loader,\n.load3 .loader:before,\n.load3 .loader:after {\n  top: 20%;\n  border-radius: 50%;\n  width: 1.5em;\n  height: 1.5em;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-animation: load3 1.8s infinite ease-in-out;\n  animation: load3 1.8s infinite ease-in-out;\n}\n.load3 .loader {\n  color: #46C3C1;\n  font-size: 10px;\n  text-indent: -9999em;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s;\n}\n.load3 .loader:before,\n.load3 .loader:after {\n  content: '';\n  position: absolute;\n  top: 0;\n}\n.load3 .loader:before {\n  left: -3em;\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s;\n}\n.load3 .loader:after {\n  left: 3em;\n}\n@-webkit-keyframes load3 {\n  0%,\n  80%,\n  100% {\n    box-shadow: 0 2.5em 0 -1.3em;\n  }\n  40% {\n    box-shadow: 0 2.5em 0 0;\n  }\n}\n@keyframes load3 {\n  0%,\n  80%,\n  100% {\n    box-shadow: 0 2.5em 0 -1.3em;\n  }\n  40% {\n    box-shadow: 0 2.5em 0 0;\n  }\n}\n.sm .loader {\n  font-size: 10px;\n}\n.sm.load2 .loader {\n  font-size: 40px;\n}\n.md .loader {\n  font-size: 14px;\n}\n.md.load2 .loader {\n  font-size: 60px;\n}\n.lg .loader {\n  font-size: 18px;\n}\n.lg.load2 .loader {\n  font-size: 80px;\n}\n", ""]);

	// exports


/***/ },
/* 116 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    name: 'xcui-loading',
	    props: {
	        'show': {
	            type: Boolean,
	            default: false
	        },
	        'type': {
	            type: String,
	            default: 'load2'
	        },
	        'classname': {
	            type: String,
	            default: ''
	        },
	        'color': {
	            type: String,
	            default: ''
	        },
	        'size': {
	            type: String,
	            default: 'md'
	        }
	    },
	    methods: {}
	};

/***/ },
/* 117 */
/***/ function(module, exports) {

	module.exports = "\n<div v-show=\"show\" class=\"xcui-loading load-container\" :class=\"[type,size,classname]\">\n    <div class=\"loader\" :style=\"{'color' : color}\"></div>\n</div>\n";

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(119)
	__vue_script__ = __webpack_require__(121)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\message\\index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(122)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-4f7dad3e/index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(120);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/.0.23.1@css-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../../node_modules/.2.2.3@less-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./index.vue", function() {
				var newContent = require("!!./../../../node_modules/.0.23.1@css-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../../node_modules/.2.2.3@less-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, ".fade-transition {\n  -webkit-transition: all .3s ease;\n  transition: all .3s ease;\n}\n.fade-enter,\n.fade-leave {\n  opacity: 0;\n}\n.xcui-message {\n  min-width: 200px;\n  max-width: 600px;\n  width: 300px;\n  border-radius: 5px;\n  text-align: center;\n  box-shadow: 0 1px 8px rgba(99, 99, 99, 0.4);\n  padding: 5px 10px;\n  font-size: 16px;\n  z-index: 1000;\n  position: fixed;\n  top: 150px;\n  left: calc(50% - 150px);\n  background: #fff;\n}\n.xcui-message .xcui-message-icon {\n  vertical-align: middle;\n}\n.xcui-message .xcui-message-desc {\n  color: #000;\n  display: inline-block;\n  margin-left: 10px;\n  margin-bottom: 0px;\n  vertical-align: middle;\n}\n.xcui-message-info {\n  color: #3a87ad;\n}\n.xcui-message-success {\n  color: #468847;\n}\n.xcui-message-warning {\n  color: #c09853;\n}\n.xcui-message-error {\n  color: #b94a48;\n}\n", ""]);

	// exports


/***/ },
/* 121 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    name: 'xcui-message',
	    props: {
	        show: {
	            type: Boolean,
	            default: false
	        },
	        type: {
	            type: String,
	            default: 'info'
	        },
	        content: {
	            type: String,
	            default: ''
	        },
	        duration: {
	            type: Number,
	            default: 3000
	        }
	    },
	    computed: {
	        styleClass: function styleClass() {
	            return 'xcui-message-' + this.type;
	        },
	        iconClass: function iconClass() {
	            switch (this.type) {
	                case 'info':
	                    return 'glyphicon-info-sign';
	                case 'success':
	                    return 'glyphicon-ok';
	                case 'error':
	                    return 'glyphicon-remove';
	                case 'warning':
	                    return 'glyphicon-warning-sign';
	                default:
	                    return 'glyphicon-info-sign';
	            }
	        }
	    },
	    data: function data() {
	        return {
	            timer: null,
	            closed: false
	        };
	    },

	    methods: {
	        clearTimer: function clearTimer() {
	            clearTimeout(this.timer);
	        },
	        resetTimer: function resetTimer() {
	            var _this = this;

	            if (!this.duration) {
	                this.duration = 3000;
	            }
	            this.timer = setTimeout(function () {
	                _this.show = false;
	            }, this.duration);
	        },
	        onShow: function onShow() {
	            this.show = true;
	            this.clearTimer();
	            this.resetTimer();
	        }
	    }
	};

/***/ },
/* 122 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"xcui-message\"\n:class=\"styleClass\"\ntransition=\"fade\"\nv-show=\"show\">\n    <span class=\"xcui-message-icon glyphicon\"\n    :class=\"iconClass\"></span>\n    <p class=\"xcui-message-desc\">\n        {{content}}\n    </p>\n</div>\n";

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(124)
	__vue_script__ = __webpack_require__(126)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\modal\\index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(127)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-4b4916a4/index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(125);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/.0.23.1@css-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../../node_modules/.2.2.3@less-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./index.vue", function() {
				var newContent = require("!!./../../../node_modules/.0.23.1@css-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../../node_modules/.2.2.3@less-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, ".xcui-modal-wrapper {\n  z-index: 1000;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.xcui-modal-wrapper,\n.xcui-modal-mask {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  -webkit-transition: opacity 0.2s ease;\n  transition: opacity 0.2s ease;\n  background-color: rgba(55, 55, 55, 0.6);\n}\n.xcui-modal {\n  z-index: 1001;\n  font-size: 14px;\n  position: relative;\n  margin: 100px auto 30px;\n  background-color: #fff;\n  padding: 0;\n  background-color: white;\n  border-radius: 2px;\n  box-shadow: 0 2px 8px 1;\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n  max-width: 100vw;\n}\n.xcui-modal.large {\n  width: 45rem;\n}\n.xcui-modal-body {\n  padding: 1.6rem;\n  border-bottom: 1px solid #f3f3f3;\n  min-height: 8rem;\n}\n.xcui-modal-header {\n  font-size: 1.6rem;\n  padding: .6rem;\n  border-bottom: 1px solid #f3f3f3;\n  text-align: center;\n}\n.xcui-modal-header-close {\n  position: absolute;\n  right: 8px;\n  top: 8px;\n  color: #000;\n  opacity: .2;\n  font-weight: 700;\n  line-height: 1;\n  font-size: 20px;\n  outline: 0;\n}\n.xcui-modal-header-close:hover {\n  cursor: pointer;\n  text-decoration: none;\n  opacity: .5;\n}\n.xcui-modal-footer {\n  padding: .5rem 1rem;\n  text-align: center;\n}\n.xcui-modal-footer .xcui-modal-btn {\n  margin-right: .5rem;\n  background-color: #46C3C1;\n  color: #fff;\n  border: #46c3c1 solid 1px;\n  min-width: 75px;\n}\n.xcui-modal-footer .xcui-modal-btn:hover {\n  background-color: #2b9d9b;\n  border: #2b9d9b solid 1px;\n}\n.xcui-modal-footer .xcui-modal-btn:active {\n  background-color: #2b9d9b;\n  border: #2b9d9b solid 1px;\n  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.2);\n}\n.xcui-modal-footer .xcui-modal-cancel-btn {\n  min-width: 75px;\n}\n.xcui-modal-size-small {\n  width: 22%;\n}\n.xcui-modal-size-middle {\n  width: 30%;\n}\n.xcui-modal-size-large {\n  width: 60%;\n}\n.xcui-modal-size-full {\n  width: 99%;\n}\n", ""]);

	// exports


/***/ },
/* 126 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    name: 'xcui-modal',
	    props: {
	        title: {
	            type: String,
	            default: '提示'
	        },
	        content: {
	            type: String,
	            default: ''
	        },
	        show: {
	            type: Boolean,
	            default: false
	        },
	        style: {
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
	    watch: {
	        show: function show(val) {
	            if (this.scrollable) {
	                return;
	            }
	            if (val) {
	                document.body.style.overflow = 'hidden';
	            } else {
	                document.body.style.overflow = 'auto';
	            }
	        }
	    },
	    computed: {
	        sizeClass: function sizeClass() {
	            return 'xcui-modal-size-' + this.size;
	        }
	    },
	    methods: {
	        close: function close(e) {
	            this.show = false;
	        },
	        maskClose: function maskClose(e) {
	            if (this.maskClosable && e.target === this.$els.modalMask) {
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

/***/ },
/* 127 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"xcui-modal-wrapper xcui-modal-mask\" @click=\"maskClose\" v-el:modal-mask v-show=\"show\">\n    <div class=\"xcui-modal\" tabindex=\"-1\" @keydown.esc=\"cancel\" :style=\"style\" :class=\"[sizeClass,className]\">\n        <div class=\"xcui-modal-header\" v-if=\"showHeader\">\n            <slot name=\"header\">\n                <span class=\"xcui-modal-title\">{{title}}</span>\n            </slot>\n            <slot name=\"close\">\n                <!-- <div class=\"xcui-modal-header-close\" @click=\"cancel\" v-if=\"showCloseButton\">X</div> -->\n                <i class=\"xcui-modal-header-close glyphicon glyphicon-remove\" @click=\"cancel\" v-if=\"showCloseButton\"></i>\n            </slot>\n        </div>\n        <div class=\"xcui-modal-body\" :style=\"contentStyle\">\n            <slot>{{content}}</slot>\n        </div>\n        <div class=\"xcui-modal-footer\" v-if=\"showFooter\">\n            <slot name=\"footer\">\n                <button type=\"button\" name=\"button\" v-if=\"showOkButton\" @click=\"ok\"\n                    class=\"btn xcui-modal-btn btn-primary\">{{okText}}</button>\n                <button type=\"button\" name=\"button\" v-if=\"showCancelButton\" @click=\"cancel\"\n                    class=\"btn xcui-modal-cancel-btn btn-default\">{{cancelText}}</button>\n            </slot>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(129)
	__vue_script__ = __webpack_require__(131)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\pageloading\\index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(132)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-820fbdf8/index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(130);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/.0.23.1@css-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../../node_modules/.2.2.3@less-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./index.vue", function() {
				var newContent = require("!!./../../../node_modules/.0.23.1@css-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../../node_modules/.2.2.3@less-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "#xcui-pageloading .bar {\n  background: #29d;\n  position: fixed;\n  z-index: 1031;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 2px;\n}\n#xcui-pageloading .peg {\n  display: block;\n  position: absolute;\n  right: 0px;\n  width: 100px;\n  height: 100%;\n  box-shadow: 0 0 10px #29d, 0 0 5px #29d;\n  opacity: 1.0;\n  -webkit-transform: rotate(3deg) translate(0px, -4px);\n  transform: rotate(3deg) translate(0px, -4px);\n}\n", ""]);

	// exports


/***/ },
/* 131 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    name: 'xcui-pageloading',
	    data: function data() {
	        return {
	            easing: 'linear',
	            positionUsing: '',
	            status: null,
	            template: '<div class="bar" role="bar"><div class="peg"></div></div>',
	            parent: 'body',
	            barSelector: '[role="bar"]'
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
	        trickle: {
	            type: Boolean,
	            default: true
	        },
	        trickleSpeed: {
	            type: Boolean,
	            default: 250
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
	                            transition: 'all ' + speed + 'ms linear',
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

	            if (this.trickle) {
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
	                return document.getElementById('xcui-pageloading');
	            }

	            this.addClass(document.documentElement, 'xcui-pageloading-busy');

	            var progress = document.createElement('div');
	            progress.id = 'xcui-pageloading';
	            progress.innerHTML = this.template;

	            var bar = progress.querySelector(this.barSelector);
	            var perc = fromStart ? '-100' : this.toBarPerc(this.status || 0);
	            var parent = document.querySelector(this.parent);

	            this.css(bar, {
	                transition: 'all 0 linear',
	                transform: 'translate3d(' + perc + '%,0,0)'
	            });

	            if (parent !== document.body) {
	                this.addClass(parent, 'xcui-pageloading-custom-parent');
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

	            barCSS.transition = 'all ' + speed + 'ms ' + ease;

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
	            this.removeClass(document.documentElement, 'xcui-pageloading-busy');
	            this.removeClass(document.querySelector(this.parent), 'xcui-pageloading-custom-parent');
	            var progress = document.getElementById('xcui-pageloading');
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
	            return !!document.getElementById('xcui-pageloading');
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

/***/ },
/* 132 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"xcui-pageloading\">\n    <div class=\"bar\" role=\"bar\">\n        <div class=\"peg\"></div>\n    </div>\n</div>\n";

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(134)
	__vue_script__ = __webpack_require__(136)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\pagination\\index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(137)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-2095839f/index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(135);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/.0.23.1@css-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../../node_modules/.2.2.3@less-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./index.vue", function() {
				var newContent = require("!!./../../../node_modules/.0.23.1@css-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../../node_modules/.2.2.3@less-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, ".v-pagination-wrap {\n  -webkit-user-select: none;\n}\n.v-pagination-wrap .v-pagination-standard {\n  vertical-align: bottom;\n  margin: 0;\n}\n.v-pagination-wrap .v-pagination-standard .btn a {\n  padding: 5px 12px;\n}\n.v-pagination-wrap .v-pagination-standard .btn a:focus {\n  background-color: initial;\n}\n.v-pagination-wrap .v-pagination-standard .btn a,\n.v-pagination-wrap .v-pagination-standard .btn a:hover,\n.v-pagination-wrap .v-pagination-standard .btn a:active {\n  text-decoration: none;\n}\n.v-pagination-wrap .v-pagination-standard .page-btn {\n  padding: 6px 3px;\n}\n.v-pagination-wrap .v-pagination-standard .page-btn.active {\n  background-color: #46c3c1;\n  border-color: #46c3c1;\n  outline: none;\n}\n.v-pagination-wrap .v-pagination-standard .page-btn.active a {\n  color: #fff;\n}\n.v-pagination-wrap .v-pagination-standard .apostrophe {\n  border-color: transparent;\n  border-left-color: #ddd;\n}\n.v-pagination-wrap .v-pagination-standard .apostrophe:hover {\n  background-color: inherit;\n}\n.v-pagination-wrap .v-pagination-page-size {\n  line-height: 34px;\n}\n.v-pagination-wrap .v-pagination-mini .prev-trigger {\n  margin: 0 10px;\n  padding: 2px 12px;\n}\n.v-pagination-wrap .v-pagination-mini .prev-trigger span {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.v-pagination-wrap .v-pagination-mini .next-trigger {\n  margin: 0 0 0 10px;\n  padding: 2px 12px;\n}\n.v-pagination-wrap .v-pagination-mini .next-trigger span {\n  -webkit-transform: rotate(-90deg);\n  transform: rotate(-90deg);\n}\n", ""]);

	// exports


/***/ },
/* 136 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    name: 'xcui-pagination',
	    props: {
	        'type': {
	            type: String,
	            default: 'standard' },
	        'currentPageNo': {
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
	        'class': String,
	        'withPageSize': {
	            type: Boolean,
	            default: true
	        },
	        'pageSizeRange': {
	            type: Array,
	            default: function _default() {
	                return [10, 20, 50, 100];
	            }
	        },
	        'rangeLength': {
	            type: Number,
	            default: 10,
	            coerce: function coerce(val) {
	                if (val < 1) {
	                    return 1;
	                }
	                return val;
	            }
	        }
	    },
	    computed: {
	        totalPageCount: function totalPageCount() {
	            return Math.ceil(this.total / this.pageSize);
	        },
	        getRangePage: function getRangePage() {
	            var curPage = this.currentPageNo;
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
	            } else if (result.end > totalPage) {
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
	            this.$emit('change-pagesize', this.pageSize);
	            this.$emit('go-to-page', 1, this.currentPageNo);
	        }
	    },
	    methods: {
	        turnToPage: function turnToPage(pageNo) {
	            if (pageNo > 0 && pageNo <= this.totalPageCount) {
	                this.$emit('go-to-page', pageNo, this.currentPageNo);
	                this.currentPageNo = pageNo;
	            }
	        },
	        prev: function prev() {
	            this.turnToPage(this.currentPageNo - 1);
	        },
	        next: function next() {
	            this.turnToPage(this.currentPageNo + 1);
	        },
	        isActive: function isActive(number) {
	            return number + this.getRangePage.begin === this.currentPageNo;
	        }
	    }
	};

/***/ },
/* 137 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"v-pagination-wrap {{ class || '' }}\">\n    <template v-if=\"type === 'standard' \">\n        <div class=\"row\">\n            <div v-if=\"withPageSize\" class=\"v-pagination-page-size col-md-3\">\n                共<span v-text=\"total\"></span>条\n                &nbsp;&nbsp;\n                每页\n                <select v-model=\"pageSize\">\n                    <option v-for=\"opt in pageSizeRange\" :value=\"opt\" v-text=\"opt\">1</option>\n                </select>\n                条\n            </div>\n            <div class=\"v-pagination-standard col-md-9 text-right\">\n                <div class=\"btn-group\">\n                    <button\n                        @click=\"prev\"\n                        class=\"btn btn-default\"\n                        :class=\"{'disabled': currentPageNo == 1}\">上一页</button>\n\n                    <button class=\"btn btn-default page-btn\" v-if=\"getRangePage.begin > 1\">\n                        <a href=\"javascript:void(0);\" @click=\"turnToPage(1)\">1</a>\n                    </button>\n                    <button class=\"btn btn-default page-btn\" v-if=\"getRangePage.begin > 1\">\n                        <a class=\"apostrophe\">...</a>\n                    </button>\n\n                    <button class=\"btn btn-default page-btn\" v-for=\"number in (getRangePage.end - getRangePage.begin + 1)\" :class=\"{'active': isActive(number)}\">\n                        <a v-if=\"isActive(number)\" href=\"javascript:void(0);\"  v-text=\"number + getRangePage.begin\"></a>\n                        <a v-else href=\"javascript:void(0);\"  v-text=\"number + getRangePage.begin\" @click=\"turnToPage(number + getRangePage.begin)\"></a>\n                    </button>\n\n                    <button class=\"btn btn-default page-btn\" v-if=\"getRangePage.end < totalPageCount\">\n                        <a class=\"apostrophe\">...</a>\n                    </button>\n                    <button class=\"btn btn-default page-btn\" v-if=\"getRangePage.end < totalPageCount\">\n                        <a href=\"javascript:void(0);\" v-text=\"totalPageCount\" @click=\"turnToPage(totalPageCount)\"></a>\n                    </button>\n\n                    <button\n                        @click=\"next\"\n                        class=\"btn btn-default\"\n                        :class=\"{'disabled': currentPageNo == totalPageCount}\">下一页</button>\n                </div>\n            </div>\n        </div>\n    </template>\n    <div v-else class=\"v-pagination-mini\">\n        <span>共<span v-text=\"total\"></span>条</span>\n        <button class=\"btn btn-default prev-trigger\" :class=\"{'disabled': currentPageNo < 2}\" @click=\"prev\">\n            <span class=\"caret\"></span>\n        </button>\n        <span v-text=\"currentPageNo\"></span>/<span v-text=\"totalPageCount\"></span>\n        <button class=\"btn btn-default next-trigger\" :class=\"{'disabled': currentPageNo == totalPageCount}\" @click=\"next\">\n            <span class=\"caret\"></span>\n        </button>\n    </div>\n</div>\n";

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(139)
	__vue_script__ = __webpack_require__(141)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\popover\\index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(144)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-e5c44348/index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(140);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/.0.23.1@css-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../../node_modules/.2.2.3@less-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./index.vue", function() {
				var newContent = require("!!./../../../node_modules/.0.23.1@css-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../../node_modules/.2.2.3@less-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, ".xcui-popover .scale-transition,\n.xcui-popover .fadein-transition {\n  display: inline-table;\n}\n.xcui-popover .fadein-enter {\n  -webkit-animation: fadein-in 0.3s ease-in;\n          animation: fadein-in 0.3s ease-in;\n}\n.xcui-popover .fadein-leave {\n  -webkit-animation: fadein-out 0.3s ease-out;\n          animation: fadein-out 0.3s ease-out;\n}\n.xcui-popover .scale-enter {\n  -webkit-animation: scale-in 0.15s ease-in;\n          animation: scale-in 0.15s ease-in;\n}\n.xcui-popover .scale-leave {\n  -webkit-animation: scale-out 0.15s ease-out;\n          animation: scale-out 0.15s ease-out;\n}\n@-webkit-keyframes fadein-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes fadein-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes fadein-out {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes fadein-out {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@-webkit-keyframes scale-in {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes scale-in {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes scale-out {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0;\n  }\n}\n@keyframes scale-out {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0;\n  }\n}\n", ""]);

	// exports


/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _popoverMixins = __webpack_require__(142);

	var _popoverMixins2 = _interopRequireDefault(_popoverMixins);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    name: 'xcui-popover',
	    mixins: [_popoverMixins2.default],
	    props: {
	        trigger: {
	            type: String,
	            default: 'hover'
	        },
	        effect: {
	            type: String,
	            default: 'scale'
	        },
	        tooltipClass: {
	            type: String,
	            default: ''
	        },
	        titleClass: {
	            type: String,
	            default: 'scale'
	        },
	        contentClass: {
	            type: String,
	            default: 'scale'
	        }
	    }
	};

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _eventlistener = __webpack_require__(143);

	var _eventlistener2 = _interopRequireDefault(_eventlistener);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    'props': {
	        'trigger': {
	            'type': String,
	            'default': 'click'
	        },
	        'effect': {
	            'type': String,
	            'default': 'fadein'
	        },
	        'title': {
	            'type': String
	        },
	        'content': {
	            'type': String
	        },
	        'placement': {
	            'type': String
	        }
	    },
	    data: function data() {
	        return {
	            'position': {
	                'top': 0,
	                'left': 0
	            },
	            'show': true
	        };
	    },

	    methods: {
	        toggle: function toggle() {
	            this.show = !this.show;
	        },
	        fixPosition: function fixPosition(triger, popover, placement) {
	            popover.style.display = '';
	            switch (placement) {
	                case 'top':
	                    this.position.left = triger.offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2;
	                    this.position.top = triger.offsetTop - popover.offsetHeight;
	                    break;
	                case 'left':
	                    this.position.left = triger.offsetLeft - popover.offsetWidth;
	                    this.position.top = triger.offsetTop + triger.offsetHeight / 2 - popover.offsetHeight / 2;
	                    break;
	                case 'right':
	                    this.position.left = triger.offsetLeft + triger.offsetWidth;
	                    this.position.top = triger.offsetTop + triger.offsetHeight / 2 - popover.offsetHeight / 2;
	                    break;
	                case 'bottom':
	                    this.position.left = triger.offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2;
	                    this.position.top = triger.offsetTop + triger.offsetHeight;
	                    break;
	                default:
	            }
	            popover.style.top = this.position.top + 'px';
	            popover.style.left = this.position.left + 'px';
	            popover.style.display = 'none';
	            this.show = !this.show;
	        }
	    },
	    ready: function ready() {
	        var triger = this.$els.trigger.children[0];
	        var me = this;
	        if (this.trigger === 'hover') {
	            this._mouseenterEvent = _eventlistener2.default.listen(triger, 'mouseenter', function () {
	                me.fixPosition(me.$els.trigger.children[0], me.$els.popover, me.placement);
	                me.show = true;
	            });
	            this._mouseleaveEvent = _eventlistener2.default.listen(triger, 'mouseleave', function () {
	                me.show = false;
	            });
	        } else if (this.trigger === 'focus') {
	            this._focusEvent = _eventlistener2.default.listen(triger, 'focus', function () {
	                me.fixPosition(me.$els.trigger.children[0], me.$els.popover, me.placement);
	                me.show = true;
	            });
	            this._blurEvent = _eventlistener2.default.listen(triger, 'blur', function () {
	                me.show = false;
	            });
	        } else {
	            this._clickEvent = _eventlistener2.default.listen(triger, 'click', function () {
	                me.fixPosition(me.$els.trigger.children[0], me.$els.popover, me.placement);
	                me.toggle;
	            });
	        }

	        this.fixPosition(this.$els.trigger.children[0], this.$els.popover, this.placement);
	    },
	    beforeDestroy: function beforeDestroy() {
	        if (this._blurEvent) {
	            this._blurEvent.remove();
	            this._focusEvent.remove();
	        }
	        if (this._mouseenterEvent) {
	            this._mouseenterEvent.remove();
	            this._mouseleaveEvent.remove();
	        }
	        if (this._clickEvent) {
	            this._clickEvent.remove();
	        }
	    }
	};

/***/ },
/* 143 */
/***/ function(module, exports) {

	'use strict';

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

/***/ },
/* 144 */
/***/ function(module, exports) {

	module.exports = "\n<div v-el:outer style=\"position:relative; display: inline-block\" class=\"xcui-popover\">\n    <span v-el:trigger>\n      <slot>\n      </slot>\n    </span>\n    <div class=\"popover\"\n      v-bind:class=\"{\n      'top':placement === 'top',\n      'left':placement === 'left',\n      'right':placement === 'right',\n      'bottom':placement === 'bottom'\n      }\"\n      v-el:popover\n      v-show=\"show\"\n      :transition=\"effect\">\n        <div class=\"arrow\"></div>\n        <div class=\"popover-title\" :class=\"titleClass\" v-show=\"title\">\n            <slot name=\"title\">\n              {{title}}\n            </slot>\n        </div>\n        <div class=\"popover-content\" :class=\"contentClass\">\n          <slot name=\"content\">\n              {{{content}}}\n          </slot>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(146)
	__vue_script__ = __webpack_require__(148)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\progress\\index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(149)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-ad60f79c/index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(147);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/.0.23.1@css-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../../node_modules/.2.2.3@less-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./index.vue", function() {
				var newContent = require("!!./../../../node_modules/.0.23.1@css-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../../node_modules/.2.2.3@less-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, ".xcui-progress {\n  margin: 10px;\n}\n.xcui-progress .xcui-progress-container {\n  width: 100%;\n  margin-right: -50px;\n  padding-right: 50px;\n  display: inline-block;\n}\n.xcui-progress .xcui-progress-outer {\n  width: 100%;\n  background: #ccc;\n  display: inline-block;\n  border-radius: 50px;\n}\n.xcui-progress .xcui-progress-inner {\n  background-color: #2db7f5;\n  border-radius: 50px;\n  position: relative;\n}\n.xcui-progress .xcui-progress-info {\n  display: inline-block;\n}\n.xcui-progress .xcui-progress-inner:after {\n  content: \"\";\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: #fff;\n  border-radius: 3px;\n  -moz-animation: animate-shine 2s ease-out infinite;\n  -webkit-animation: animate-shine 2s ease-out infinite;\n}\n@-webkit-keyframes animate-shine {\n  0% {\n    opacity: 0;\n    width: 0;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 0;\n    width: 95%;\n  }\n}\n", ""]);

	// exports


/***/ },
/* 148 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    name: 'xcui-progress',
	    props: {
	        percent: {
	            type: Number,
	            default: 0
	        },
	        percentInfo: {
	            type: String,
	            default: ''
	        },
	        infoClassName: {
	            type: String,
	            default: 'xcui-progress-info'
	        },
	        showInfo: {
	            type: Boolean,
	            default: false
	        },
	        height: {
	            type: Number,
	            default: 10
	        }
	    }
	};

/***/ },
/* 149 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"xcui-progress\" >\n    <div class=\"xcui-progress-container\">\n        <div class=\"xcui-progress-outer\">\n             <div class=\"xcui-progress-inner\" :style=\"{width:percent+'%',height:height+'px'}\"></div>\n        </div>\n    </div>\n    <div :class=\"['infoClassName',!showInfo ? 'hidden':'']\" >\n        {{percentInfo}}\n    </div>\n<div>\n";

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(151)
	__vue_script__ = __webpack_require__(153)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\select\\index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(160)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-638c7bfe/index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(152);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/.0.23.1@css-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../../node_modules/.2.2.3@less-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./index.vue", function() {
				var newContent = require("!!./../../../node_modules/.0.23.1@css-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../../node_modules/.2.2.3@less-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, ".xcui-select {\n  display: inline-block;\n  box-sizing: content-box;\n  position: relative;\n  vertical-align: middle;\n  color: #666;\n  font-size: 14px;\n  z-index: 10;\n  width: 100%;\n}\n.xcui-select-open .xcui-select-selection {\n  border-color: #66afe9 !important;\n  outline: 0;\n  box-shadow: 0 0 0 2px #2db7f533;\n}\n.xcui-select.disabled .xcui-select-selection {\n  color: #ccc;\n  background: #f7f7f7;\n  cursor: not-allowed;\n}\n.xcui-select-selection {\n  outline: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  box-sizing: border-box;\n  display: block;\n  background-color: #fff;\n  border-radius: 4px;\n  border: 1px solid #ccc;\n  padding: 2px 6px;\n  -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.xcui-select-selection-rendered {\n  height: 26px;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  /*padding-left: 8px;*/\n  padding-right: 24px;\n  line-height: 26px;\n}\n.xcui-select-selection-text {\n  display: block;\n  font-size: 14px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.xcui-select-menu-dropdown {\n  background-color: #fff;\n  /*box-shadow: 0 1px 6px #63636333;*/\n  border-radius: 4px;\n  box-sizing: border-box;\n  z-index: 1050;\n  /*left: -9999px;*/\n  /*top: -9999px;*/\n  position: absolute;\n  top: 100%;\n  width: 100%;\n  margin-top: 2px;\n  outline: none;\n  overflow: hidden;\n  font-size: 12px;\n  max-height: 200px;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  z-index: 1;\n}\n.xcui-select-menu,\n.xcui-select-menu-group {\n  outline: none;\n  margin-bottom: 0;\n  padding-left: 0;\n  list-style: none;\n  max-height: 200px;\n  overflow: auto;\n}\n.xcui-select-menu-item,\n.xcui-select-menu-group-item {\n  position: relative;\n  display: block;\n  padding: 7px 15px;\n  font-weight: 400;\n  color: #262626;\n  cursor: pointer;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  -webkit-transition: background .3s ease;\n  transition: background .3s ease;\n}\n.xcui-select-menu-item-select,\n.xcui-select-menu-group-item-select {\n  font-weight: 500;\n  color: #666;\n  background-color: #f7f7f7;\n}\n.xcui-select-menu-item.disabled,\n.xcui-select-menu-group-item.disabled {\n  color: #ccc !important;\n  cursor: not-allowed !important;\n}\n.xcui-select-menu-item-selected,\n.xcui-select-menu-group-item-selected {\n  background-color: #337ab7;\n  font-weight: 700;\n  color: #fff;\n}\n.xcui-select-menu-item-selected:after,\n.xcui-select-menu-group-item-selected:after {\n  font-family: 'Glyphicons Halflings';\n  content: \"\\E013\";\n  position: absolute;\n  right: 6px;\n  top: 6px;\n  font-size: 12px;\n}\n.xcui-select-menu-item-selected:hover,\n.xcui-select-menu-group-item-selected:hover {\n  background-color: #f7f7f7;\n  font-weight: 700;\n  color: #666;\n}\n.xcui-select-menu-item:hover,\n.xcui-select-menu-group-item:hover {\n  background-color: #f5f5f5;\n}\n.xcui-select-menu-item-partial,\n.xcui-select-menu-group-item-partial {\n  background: red;\n}\n.xcui-select-menu-item-key,\n.xcui-select-menu-group-item-key {\n  background-color: #f5f5f5;\n}\n.xcui-select-menu-group-title {\n  color: #999;\n  line-height: 1.5;\n  padding: 8px 12px;\n}\n.xcui-select-menu-group-item {\n  padding-left: 20px;\n}\n.xcui-select-menu-group-item-selected {\n  background-color: #337ab7;\n  font-weight: 700;\n  color: #fff;\n}\n.xcui-select-menu-group-item-selected:after {\n  font-family: 'Glyphicons Halflings';\n  content: \"\\E013\";\n  position: absolute;\n  right: 6px;\n  top: 6px;\n  font-size: 12px;\n}\n.xcui-select-menu-group-item-selected:hover {\n  background-color: #f7f7f7;\n  font-weight: 700;\n  color: #666;\n}\n.xcui-select-menu-group > ul {\n  margin: 0;\n  padding: 0;\n}\n.xcui-select-search-input {\n  width: 100%;\n  border: 0;\n  font-size: 100%;\n  height: 100%;\n  outline: 0;\n  border-radius: 6px;\n}\n.xcui-select .glyphicon {\n  font-size: 12px;\n}\n.xcui-select .xcui-select-arrow {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  color: #ccc;\n}\n.xcui-select > ul > li > a {\n  padding: 0;\n  background-color: #fff;\n}\n", ""]);

	// exports


/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof2 = __webpack_require__(31);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _clone = __webpack_require__(154);

	var _clone2 = _interopRequireDefault(_clone);

	var _fuzzysearch = __webpack_require__(159);

	var _fuzzysearch2 = _interopRequireDefault(_fuzzysearch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    name: 'xcui-select',
	    props: {
	        className: {
	            type: String
	        },

	        selected: [String, Array],

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
	            default: ''
	        },

	        optgroup: {
	            type: Boolean,
	            default: false
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
	            type: Number,
	            default: 0
	        },

	        label: {
	            type: String,
	            default: ''
	        },

	        closeAfterSelect: {
	            type: Boolean,
	            default: true
	        }
	    },
	    data: function data() {
	        return {
	            searchValue: '',
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
	                    this.searchValue = '';
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
	            if (option !== null && (typeof option === 'undefined' ? 'undefined' : (0, _typeof3.default)(option)) === 'object') {
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
	            if (this.selectIndex === parentIndex + '-' + index && this.value === option) {
	                return;
	            }
	            this.value = option;
	            this.selectIndex = parentIndex + '-' + index;
	            this.$emit('change', (0, _clone2.default)(this.value), parentIndex, index);
	            this.$emit('select', (0, _clone2.default)(this.value), parentIndex, index);
	            this.closeAfterSelect && this.deactivate();
	        },
	        select: function select(option) {
	            var isSelected = this.isSelected(option);
	            if (!option || option.disable) {
	                return;
	            }
	            if (this.multiple) {
	                var optionValue = option;
	                if ((typeof option === 'undefined' ? 'undefined' : (0, _typeof3.default)(option)) === 'object') {
	                    optionValue = option[this.label] || option.label;
	                }
	                if (isSelected) {
	                    this.removeOption(option);
	                } else {
	                    if (this.multipleMax > this.value.length || !this.multipleMax) {
	                        if ((typeof option === 'undefined' ? 'undefined' : (0, _typeof3.default)(option)) === 'object') {
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
	            this.$emit('change', (0, _clone2.default)(this.value));
	            this.$emit('select', (0, _clone2.default)(this.value));
	            this.closeAfterSelect && this.deactivate();
	        },
	        isSelected: function isSelected(option, groupIndex, index) {
	            var me = this;
	            if (!this.value) {
	                return false;
	            }
	            if (this.optgroup) {
	                return this.selectIndex === groupIndex + '-' + index;
	            }
	            if (this.multiple) {
	                if ((typeof option === 'undefined' ? 'undefined' : (0, _typeof3.default)(option)) === 'object') {
	                    return this.value.indexOf(option) > -1;
	                }
	                return this.value.indexOf(option) > -1;
	            }
	            if (this.showSearch) {
	                if ((typeof option === 'undefined' ? 'undefined' : (0, _typeof3.default)(option)) === 'object') {
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
	            if ((typeof option === 'undefined' ? 'undefined' : (0, _typeof3.default)(option)) === 'object') {
	                if (this.value.indexOf(option) !== -1) {
	                    this.value.splice(this.value.indexOf(option), 1);
	                }
	            }
	            this.value.$remove(option);
	            this.$emit('remove', (0, _clone2.default)(option));
	        },
	        indexSet: function indexSet(parentIndex, index) {
	            if (this.optgroup) {
	                this.selectIndex = parentIndex + '-' + index;
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
	            var _getDropDownHeight = this.getDropDownHeight,
	                itemHeight = _getDropDownHeight.itemHeight,
	                listHeight = _getDropDownHeight.listHeight;

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
	            this.searchValue = this.value ? this.currentOptionLabel : '';
	        },
	        reset: function reset() {
	            this.selected = '';
	            this.value = null;
	        }
	    },
	    computed: {
	        getWrapCls: function getWrapCls() {
	            var me = this;
	            var cls = ['xcui-select'];
	            if (this.disabled) {
	                cls.push('disabled');
	            }
	            if (this.isOpen) {
	                cls.push('xcui-select-open');
	            }
	            if (this.className) {
	                cls.push(me.className);
	            }
	            return cls.join(' ');
	        },
	        filteredOptions: function filteredOptions() {
	            var value = this.searchValue;
	            var me = this;
	            if (this.showSearch && this.options.length) {
	                return this.options.filter(function (item) {
	                    if (typeof item !== 'string') {
	                        return (0, _fuzzysearch2.default)(value, item[me.label || 'label']);
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
	                return this.value.map(function (k) {
	                    if ((typeof k === 'undefined' ? 'undefined' : (0, _typeof3.default)(k)) !== 'object') {
	                        return k;
	                    }
	                    var label = _this.label || 'label';
	                    return k[label];
	                }).join(',');
	            }
	            if (typeof this.value === 'string') {
	                return this.value;
	            } else if (this.label) {
	                return this.value[this.label];
	            }
	            return this.value.label || '';
	        },
	        getDropDownHeight: function getDropDownHeight() {
	            var list = this.$els.list;
	            var item = list.children[0];
	            var itemHeight = item.currentStyle ? item.currentStyle.height : getComputedStyle(item, false).height;
	            var listHeight = list.currentStyle ? list.currentStyle.height : getComputedStyle(list, false).height;
	            return {
	                listHeight: listHeight.replace('px', ''),
	                itemHeight: itemHeight.replace('px', '')
	            };
	        },
	        optgroupDefaultIndex: function optgroupDefaultIndex() {
	            var me = this;
	            var selected = this.selected;
	            var indexs = [];
	            this.options.forEach(function (item, index) {
	                item.options.forEach(function (subItem, subIndex) {
	                    if (typeof subItem === 'string' && selected === subItem) {
	                        indexs = [index, subIndex];
	                        return;
	                    }
	                    if (subItem[me.label] && subItem[me.label] === selected) {
	                        if (subItem[me.label].disable) {
	                            return;
	                        }
	                        indexs = [index, subIndex];
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
	        'options': function options() {
	            if (this.showSearch) {
	                return;
	            }
	            this.reset();
	        },
	        'filteredOptions': function filteredOptions() {
	            var filterLen = this.filteredOptions.length;
	            if (this.selectIndex >= filterLen) {
	                this.selectIndex = filterLen > 0 ? filterLen - 1 : 0;
	            }
	        },
	        'searchValue': function searchValue(oldVal, newVal) {
	            if (this.searchValue !== this.currentOptionLabel) {
	                this.$emit('search-change', this.searchValue);
	            }
	        },
	        'selected': function selected() {
	            if (this.optgroup) {
	                this.value = this.selected;
	                var indexs = this.optgroupDefaultIndex;
	                this.selectIndex = indexs.join('-');
	            } else {
	                this.value = this.selected;
	            }
	        }
	    }
	};

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _keys = __webpack_require__(155);

	var _keys2 = _interopRequireDefault(_keys);

	var _typeof2 = __webpack_require__(31);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var clone = function clone(obj) {
	    if (Array.isArray(obj)) {
	        return obj.map(clone);
	    } else if (obj && (typeof obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj)) === 'object') {
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

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(156), __esModule: true };

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(157);
	module.exports = __webpack_require__(42).Object.keys;

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(77)
	  , $keys    = __webpack_require__(61);

	__webpack_require__(158)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(40)
	  , core    = __webpack_require__(42)
	  , fails   = __webpack_require__(51);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 159 */
/***/ function(module, exports) {

	'use strict';

	function fuzzysearch (needle, haystack) {
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


/***/ },
/* 160 */
/***/ function(module, exports) {

	module.exports = "\n<div tabindex=\"0\"\n     :class=\"getWrapCls\"\n     @focus=\"activate()\"\n     @blur=\"showSearch ? false : deactivate()\"\n     @keydown.enter.stop.prevent.self=\"enterSearchValue()\">\n    <div class=\"xcui-select-selection\">\n        <div class=\"xcui-select-selection-rendered\"\n             @mousedown.stop=\"toggle()\">\n            <input\n                type=\"text\"\n                name=\"search\"\n                v-el:search\n                autocomplete=\"off\"\n                class=\"xcui-select-search-input\"\n                v-if=\"showSearch\"\n                v-model=\"searchValue\"\n                @focus.prevent=\"activate()\"\n                @blur.prevent=\"deactivate()\"\n                @keyup.down=\"keyNext()\"\n                @keyup.up=\"keyPrev()\"\n                @keydown.enter.stop.prevent.self=\"enterSearchValue()\"\n                @change.prevent.stop=\"\"\n                :placeholder=\"placeholder\">\n            <span\n                class=\"xcui-select-selection-text\"\n                v-if=\"!showSearch\"\n                v-text=\"currentOptionLabel || placeholder\">\n            </span>\n            <i class=\"glyphicon xcui-select-arrow\"\n               @mousedown.prevent.stop=\"toggle()\"\n               :class=\"{'glyphicon-triangle-bottom':(!isOpen),'glyphicon-triangle-top':(isOpen)}\"></i>\n        </div>\n    </div>\n    <div class=\"xcui-select-menu-dropdown\"\n         v-show=\"(isOpen && filteredOptions.length>0) || (isOpen && multiple)\">\n        <ul\n            v-el:list\n            aria-activedescendant\n            class=\"xcui-select-menu\">\n            <li class=\"xcui-select-menu-item\"\n                v-if=\"multipleMaxShow\">\n                最多可选{{multipleMax}}项!\n            </li>\n            <li class=\"xcui-select-menu-item\"\n                v-if=\"filteredOptions.length<1 && searchEmptyText\"\n                v-text=\"searchEmptyText\">\n            </li>\n            <template\n                      v-for=\"item in filteredOptions\">\n                <li class=\"xcui-select-menu-item\"\n                    v-if=\"!optgroup\"\n                    tabindex=\"1\"\n                    :class=\"{'xcui-select-menu-item-selected': isSelected(item), 'xcui-select-menu-item-key': $index === selectIndex,'disabled': item.disable}\"\n                    @mouseenter.prevent.stop.self=\"indexSet($index)\"\n                    @mousedown.prevent=\"select(item)\">\n                    <span v-text=\"getOptionLabel(item)\"></span>\n                </li>\n            </template>\n            <template\n                v-for=\"item in filteredOptions\">\n                <li class=\"xcui-select-menu-group\" v-if=\"optgroup\">\n                    <div class=\"xcui-select-menu-group-title\">{{item.name}}</div>\n                    <ul>\n                        <template v-for=\"option in item.options\">\n                            <li class=\"xcui-select-menu-group-item\"\n                                :class=\"{'xcui-select-menu-group-item-selected': isSelected(option,$parent.$index,$index), 'disabled': option.disable}\"\n                                @mousedown.prevent.stop.self=\"optgroupSelect($parent.$index,$index,option)\">\n                                <span v-text=\"getOptionLabel(option)\"></span>\n                            </li>\n                        </template>\n                    </ul>\n                </li>\n            </template>\n        </ul>\n    </div>\n</div>\n";

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(162)
	__vue_script__ = __webpack_require__(164)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\suggestion\\index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(165)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-aa78ccee/index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(163);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/.0.23.1@css-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../../node_modules/.2.2.3@less-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./index.vue", function() {
				var newContent = require("!!./../../../node_modules/.0.23.1@css-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../../node_modules/.2.2.3@less-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, ".xcui-suggestion {\n  position: relative;\n  width: 100%;\n}\n.xcui-suggestion .xcui-show {\n  display: block;\n}\n.xcui-suggestion .xcui-suggestion-list {\n  min-width: 100%;\n  max-height: 400px;\n  overflow: auto;\n}\n.xcui-suggestion .xcui-suggestion-list li.current {\n  background: #ddd;\n}\n", ""]);

	// exports


/***/ },
/* 164 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    name: 'xcui-suggestion',
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
	            default: ''
	        },
	        name: {
	            type: String,
	            default: ''
	        },
	        className: {
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
	        'dataText': {
	            type: String,
	            default: ''
	        },
	        'dataValue': {
	            type: [String, Number],
	            default: ''
	        },
	        'check': {
	            type: Boolean,
	            default: true
	        },
	        'inputCallback': {
	            type: Function,
	            default: function _default() {
	                return function () {};
	            }
	        }
	    },
	    computed: {
	        show: function show() {
	            return this.list.length > 0 && this.$el.getElementsByTagName('input')[0] === document.activeElement;
	        }
	    },
	    watch: {
	        suggestions: function suggestions() {
	            this.arrangeLocalList();
	            this.getLocalSug();
	        }
	    },
	    methods: {
	        onInput: function onInput() {
	            var me = this;
	            setTimeout(function () {
	                me.currentIndex = -1;
	                me.getLocalSug();
	                me.autoSetItem();
	                me.inputCallback && me.inputCallback();
	            }, 100);
	        },
	        onBlur: function onBlur() {
	            var me = this;

	            setTimeout(function () {
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
	            }
	        },
	        getLocalSug: function getLocalSug() {
	            var _this = this;

	            var word = this.dataText;

	            this.list = this.localList.filter(function (item) {
	                return word && _this.check ? item.text.indexOf(word) > -1 : true;
	            });
	        },
	        setItem: function setItem(item) {
	            this.dataValue = item.value;
	            this.dataText = item.text;
	        },
	        logError: function logError(msg) {
	            throw new Error('[xcui] - ' + msg);
	        },
	        isArray: function isArray(arr) {
	            return Object.prototype.toString.call(arr) === '[object Array]';
	        },
	        clearText: function clearText() {
	            this.dataText = '';
	            this.dataValue = '';
	        }
	    },
	    ready: function ready() {
	        this.arrangeLocalList();
	    }
	};

/***/ },
/* 165 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"xcui-suggestion {{className}}\">\n    <input type=\"text\"\n            class=\"form-control xcui-suggestion-input\"\n            autocomplete=\"off\"\n            :id=\"id\"\n            :name=\"name\"\n            :disabled=\"disabled\"\n            :placeholder=\"placeholder\"\n            v-model=\"dataText\"\n            @input=\"onInput\"\n            @focus=\"onInput\"\n            @blur=\"onBlur\"\n            @keyDown.up=\"changeCurrent(-1)\"\n            @keyDown.down=\"changeCurrent(1)\"\n            @keyDown.enter=\"onBlur\">\n\n    <ul class=\"xcui-suggestion-list dropdown-menu\" :class=\"{'show':show}\">\n        <li v-for=\"(index,item) in list\" :class=\"{'current' : currentIndex==index}\">\n            <a href=\"javascript:void(0)\" @click=\"setItem(item)\">\n                {{item.text}}\n            </a>\n        </li>\n    </ul>\n</div>\n";

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(167)
	__vue_script__ = __webpack_require__(169)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\tag\\index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(170)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-c4c224de/index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(168);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/.0.23.1@css-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../../node_modules/.2.2.3@less-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./index.vue", function() {
				var newContent = require("!!./../../../node_modules/.0.23.1@css-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../../node_modules/.2.2.3@less-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, ".xcui-tag {\n  display: inline-block;\n  line-height: 25px;\n  height: 27px;\n  border-radius: 6px;\n  border: 1px solid #e9e9e9;\n  background: #fff;\n  font-size: 12px;\n  vertical-align: middle;\n  opacity: 1;\n  margin: 2px 4px 2px 0;\n  cursor: pointer;\n}\n.xcui-tag .xcui-tag-text {\n  padding: 0 8px;\n}\n.xcui-disabled {\n  background: #f5f5f5;\n  cursor: default;\n  opacity: .85;\n}\n.xcui-tag:hover {\n  opacity: 0.85;\n}\n.xcui-cross {\n  display: inline-block;\n  font-style: normal;\n  font-size: 17px;\n  zoom: 1;\n  cursor: pointer;\n  font-weight: 700;\n  margin-left: 3px;\n  color: #666;\n  opacity: 0.66;\n}\n.xcui-cross:before {\n  content: \"\\D7\";\n}\n", ""]);

	// exports


/***/ },
/* 169 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    name: 'xcui-tag',
	    props: {
	        text: {
	            type: String,
	            default: ''
	        },
	        closeable: {
	            type: Boolean,
	            default: false
	        },
	        disabled: {
	            type: Boolean,
	            default: false
	        },
	        showTag: {
	            type: Boolean,
	            default: true
	        },
	        classname: {
	            type: String,
	            default: ''
	        },
	        key: {
	            type: String,
	            default: ''
	        },
	        aftercloseisshow: {
	            type: Boolean,
	            default: false,
	            twoway: true
	        }
	    },
	    methods: {
	        onCloseClick: function onCloseClick() {
	            this.$emit('close');
	            if (this.aftercloseisshow === false) {
	                this.showTag = false;
	            };
	        },
	        onClick: function onClick() {
	            this.$emit('click');
	        }
	    }
	};

/***/ },
/* 170 */
/***/ function(module, exports) {

	module.exports = "\n\t<div :class=\"['xcui-tag', disabled ? ' xcui-disabled':'']\" @click=\"onClick\" v-if=\"showTag\" >\n        <div class=\"{{classname!='' ? classname : ''}}\" >\n\t\t<span class=\"xcui-tag-text\"><slot></slot>{{text}}<span>\n        <i class=\"xcui-cross\" v-if=\"closeable\" @click.stop=\"onCloseClick\"></i>\n        </div>\n\t</div>\n";

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(172)
	__vue_script__ = __webpack_require__(174)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\tooltip\\index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(175)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-2f709b8c/index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(173);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/.0.23.1@css-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../../node_modules/.2.2.3@less-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./index.vue", function() {
				var newContent = require("!!./../../../node_modules/.0.23.1@css-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../../node_modules/.2.2.3@less-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, ".xcui-tooltip .tooltip {\n  opacity: .9;\n}\n.xcui-tooltip .scale-transition,\n.xcui-tooltip .fadein-transition {\n  display: inline-table;\n}\n.xcui-tooltip .fadein-enter {\n  -webkit-animation: fadein-in 0.3s ease-in;\n          animation: fadein-in 0.3s ease-in;\n}\n.xcui-tooltip .fadein-leave {\n  -webkit-animation: fadein-out 0.3s ease-out;\n          animation: fadein-out 0.3s ease-out;\n}\n.xcui-tooltip .scale-enter {\n  -webkit-animation: scale-in 0.15s ease-in;\n          animation: scale-in 0.15s ease-in;\n}\n.xcui-tooltip .scale-leave {\n  -webkit-animation: scale-out 0.15s ease-out;\n          animation: scale-out 0.15s ease-out;\n}\n@-webkit-keyframes fadein-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes fadein-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes fadein-out {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes fadein-out {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@-webkit-keyframes scale-in {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes scale-in {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes scale-out {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0;\n  }\n}\n@keyframes scale-out {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0;\n  }\n}\n", ""]);

	// exports


/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _popoverMixins = __webpack_require__(142);

	var _popoverMixins2 = _interopRequireDefault(_popoverMixins);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    name: 'xcui-tooltip',
	    mixins: [_popoverMixins2.default],
	    props: {
	        trigger: {
	            type: String,
	            default: 'hover'
	        },
	        effect: {
	            type: String,
	            default: 'scale'
	        },
	        tooltipClass: {
	            type: String,
	            default: ''
	        },
	        titleClass: {
	            type: String,
	            default: 'scale'
	        },
	        contentClass: {
	            type: String,
	            default: 'scale'
	        }
	    }
	};

/***/ },
/* 175 */
/***/ function(module, exports) {

	module.exports = "\n<div v-el:outer style=\"position:relative; display: inline-block\" class=\"xcui-tooltip\">\n     <span v-el:trigger>\n        <slot>\n        </slot>\n    </span>\n    <div class=\"tooltip\"\n        v-bind:class=\"{\n            'top':    placement === 'top',\n            'left':   placement === 'left',\n            'right':  placement === 'right',\n            'bottom': placement === 'bottom'\n        }\"\n        v-el:popover\n        v-show=\"show\"\n        :transition=\"effect\"\n        role=\"tooltip\">\n            <div class=\"tooltip-arrow\"></div>\n            <div class=\"tooltip-inner\" :class=\"tooltipClass\">\n                <slot name=\"content\">\n                    {{{content}}}\n                </slot>\n            </div>\n    </div>\n</div>\n";

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _install = __webpack_require__(177);

	var _install2 = _interopRequireDefault(_install);

	var _install3 = __webpack_require__(178);

	var _install4 = _interopRequireDefault(_install3);

	var _install5 = __webpack_require__(179);

	var _install6 = _interopRequireDefault(_install5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var xcuiInstall = {};
	xcuiInstall.install = function (Vue) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
	        Modal: true,
	        Message: true,
	        Loading: true
	    };

	    if (options.Modal) {
	        (0, _install2.default)(Vue);
	    }
	    if (options.Message) {
	        (0, _install4.default)(Vue);
	    }
	    if (options.Loading) {
	        (0, _install6.default)(Vue);
	    }
	};

	exports.default = xcuiInstall;

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof2 = __webpack_require__(31);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _keys = __webpack_require__(155);

	var _keys2 = _interopRequireDefault(_keys);

	var _index = __webpack_require__(123);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var camelcaseToHyphen = function camelcaseToHyphen(str) {
	    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
	};
	var isEmptyObject = function isEmptyObject(obj) {
	    return !(0, _keys2.default)(obj).length;
	};

	var ModalInstall = function ModalInstall(Vue) {
	    var modalInstance = void 0;

	    var newModalInstance = function newModalInstance() {
	        var PROPERTIES = ['title', 'style', 'contentStyle', 'size', 'className', 'showFooter', 'showHeader', 'showCloseButton', 'showOkButton', 'showCancelButton', 'maskClosable', 'scrollable', 'okText', 'cancelText', 'onOk', 'onCancel'];

	        var div = document.createElement('div');
	        var propsString = PROPERTIES.reduce(function (preValue, curValue) {
	            return preValue + ' :' + camelcaseToHyphen(curValue) + '="' + curValue + '"';
	        }, '');
	        div.innerHTML = '\n            <Modal' + propsString + ' :show.sync="show">\n                <template v-if="!isRawHTML">\n                    {{content}}\n                </template>\n                <div v-else>\n                    {{{content}}}\n                </div>\n            </Modal>\n        ';
	        document.body.appendChild(div);

	        var modalVM = new Vue({
	            el: div,
	            components: {
	                Modal: _index2.default
	            },
	            data: function data() {
	                return {
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
	            }
	        });

	        return {
	            show: function show(props) {
	                props = !props || isEmptyObject(props) ? {} : props;
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

	    var modalFunc = {
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
	        }
	    };

	    Vue.prototype.$Modal = modalFunc;
	    Vue.prototype.$confirm = function (title, content, onOk, onCancel, isRawHTML) {
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
	        modalFunc.show(options, type);
	    };

	    Vue.prototype.$alert = function (content, onOk) {
	        var options = {
	            showHeader: false,
	            showCancelButton: false,
	            size: 'small',
	            maskClosable: false,
	            okText: '确定',
	            scrollable: false
	        };
	        options.content = content;
	        options.onOk = onOk;
	        modalFunc.show(options);
	    };
	};

	exports.default = ModalInstall;

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _keys = __webpack_require__(155);

	var _keys2 = _interopRequireDefault(_keys);

	var _index = __webpack_require__(118);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var isEmptyObject = function isEmptyObject(obj) {
	    return !(0, _keys2.default)(obj).length;
	};

	var MessageInstall = function MessageInstall(Vue) {
	    var messageInstance = void 0;
	    var newMessageInstance = function newMessageInstance() {
	        var div = document.createElement('div');
	        div.innerHTML = '\n            <Message :content="content"\n                :type="type"\n                :duration="duration"\n                :show.sync="show">\n            </Message>\n        ';
	        document.body.appendChild(div);

	        var messageVM = new Vue({
	            el: div,
	            components: {
	                Message: _index2.default
	            },
	            data: function data() {
	                return {
	                    show: false,
	                    content: '',
	                    duration: 3000,
	                    type: 'info'
	                };
	            }
	        });

	        return {
	            _show: function _show(props) {
	                props = !props || isEmptyObject(props) ? {} : props;
	                (0, _keys2.default)(props).forEach(function (propKey) {
	                    messageVM[propKey] = props[propKey];
	                });
	                messageVM.$children[0].onShow();
	            }
	        };
	    };

	    var getMessageInstance = function getMessageInstance() {
	        messageInstance = messageInstance || newMessageInstance();
	        return messageInstance;
	    };

	    Vue.prototype.$Message = {
	        show: function show(content, type, duration) {
	            var instance = getMessageInstance();
	            instance._show({
	                content: content,
	                type: type,
	                duration: duration
	            });
	        }
	    };
	};

	exports.default = MessageInstall;

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof2 = __webpack_require__(31);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _keys = __webpack_require__(155);

	var _keys2 = _interopRequireDefault(_keys);

	var _index = __webpack_require__(113);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var isEmptyObject = function isEmptyObject(obj) {
	    return !(0, _keys2.default)(obj).length;
	};

	var LoadingInstall = function LoadingInstall(Vue) {
	    var loadingInstance = void 0;
	    var newLoadingInstance = function newLoadingInstance() {
	        var div = document.createElement('div');
	        div.innerHTML = '\n            <Loading :show="show"\n                 :type="type"\n                 :color="color"\n                 :size="size"\n                 :classname="classname">\n             </Loading>\n        ';
	        document.body.appendChild(div);

	        var loadingVM = new Vue({
	            el: div,
	            components: {
	                Loading: _index2.default
	            },
	            data: function data() {
	                return {
	                    show: false,
	                    type: 'load1',
	                    size: 'sm',
	                    color: '',
	                    classname: ''
	                };
	            }
	        });
	        return {
	            _show: function _show(props) {
	                props = !props || isEmptyObject(props) ? {} : props;
	                (0, _keys2.default)(props).forEach(function (propKey) {
	                    loadingVM[propKey] = props[propKey];
	                });
	                loadingVM.show = true;
	            },
	            _remove: function _remove() {
	                loadingVM.show = false;
	            }
	        };
	    };

	    var getloadingInstance = function getloadingInstance() {
	        loadingInstance = loadingInstance || newLoadingInstance();
	        return loadingInstance;
	    };

	    Vue.prototype.$Loading = {
	        show: function show(type, size, color, classname) {
	            var options = {};
	            if ((typeof type === 'undefined' ? 'undefined' : (0, _typeof3.default)(type)) === 'object') {
	                options = type;
	            } else {
	                options.type = type;
	                options.size = size;
	                options.color = color;
	                options.classname = classname;
	            }
	            var instance = getloadingInstance();
	            instance._show(options);
	        },
	        close: function close() {
	            if (!loadingInstance) {
	                return false;
	            }
	            var instance = getloadingInstance();
	            instance._remove();
	        }
	    };
	};

	exports.default = LoadingInstall;

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(181)
	__vue_script__ = __webpack_require__(183)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\demos\\pagination.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(184)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-7b8af24d/pagination.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(182);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.23.1@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../node_modules/.2.2.3@less-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./pagination.vue", function() {
				var newContent = require("!!./../../node_modules/.0.23.1@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../node_modules/.2.2.3@less-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./pagination.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, ".table {\n  border: 1px solid #ddd;\n  background-color: #fff;\n  margin-top: 15px;\n}\n", ""]);

	// exports


/***/ },
/* 183 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    data: function data() {
	        return {
	            currentPageNo: 1,
	            pageSize: 10,
	            list: [],
	            total: 0
	        };
	    },

	    methods: {
	        genId: function genId() {
	            return Math.floor(Math.random() * 100);
	        },
	        fetch: function fetch(pageNo) {
	            var _this = this;

	            return {
	                list: new Array(this.pageSize).fill(undefined).map(function (item) {
	                    return {
	                        name: 'example',
	                        id: _this.genId()
	                    };
	                }),
	                total: 55
	            };
	        },
	        turnToPage: function turnToPage(pageNo, oldPageNo) {
	            var _fetch = this.fetch(pageNo),
	                list = _fetch.list,
	                total = _fetch.total;

	            this.list = list;
	            this.total = total;
	            this.currentPageNum = pageNo;
	        }
	    },
	    ready: function ready() {
	        this.turnToPage(1);
	    }
	};

/***/ },
/* 184 */
/***/ function(module, exports) {

	module.exports = "<div><h1>Pagination页码</h1>\n<h2>使用场景</h2>\n<ul>\n<li>表格或其他需要分页的页面元素。</li>\n<li>支持两种类型的页码： <code>Standard</code> 标准页码, 一般用于元素顶部； <code>Mini</code> 迷你页码，一般用于元素底部。</li>\n</ul>\n<h1>Demo</h1>\n<div class=\"xcui-demo-container col-md-12 col-xs-12 col-lg-12\">\n    <div class=\"col-md-12 col-xs-12 col-lg-12 xcui-example-container\">\n                    <h3>两种翻页展示</h3>\n                    <div class=\"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6\">\n        <div class=\"row\">\n            <div class=\"col-md-12 text-right\">\n                <xcui-pagination\n                    type=\"mini\"\n            @go-to-page=\"turnToPage\"\n                    :current-page-no.sync=\"currentPageNo\"\n                    :total=\"total\"\n                    :page-size.sync=\"pageSize\"\n                    ></xcui-pagination>\n            </div>\n        </div>\n        <table class=\"table table-hover table-condensed\">\n            <thead>\n                <tr>\n                    <th>ID</th>\n                    <th>Name</th>\n                </tr>\n            </thead>\n            <tr v-for=\"item in list\">\n                <td v-text=\"item.id\"></td>\n                <td v-text=\"item.name\"></td>\n            </tr>\n        </table>\n        <xcui-pagination\n            @go-to-page=\"turnToPage\"\n            :current-page-no.sync=\"currentPageNo\"\n            :total=\"total\"\n            :page-size.sync=\"pageSize\"\n            ></xcui-pagination>\n    </div>\n                    <div class=\"xcui-code-wrap col-xs-12 col-md-6 col-lg-6\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>row<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>col-md-12 text-right<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n        &lt;xcui-pagination\n            type=\"mini\"\n            @go-to-page=\"turnToPage\"\n            :current-page-no.sync=\"currentPageNo\"\n            :total=\"total\"\n            :page-size.sync=\"pageSize\"\n            ><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-pagination</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>table</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>table table-hover table-condensed<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>thead</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>tr</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>th</span><span class=\"token punctuation\" >></span></span>ID<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>th</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>th</span><span class=\"token punctuation\" >></span></span>Name<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>th</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>tr</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>thead</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>tr</span> <span class=\"token attr-name\" >v-for</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>item in list<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>td</span> <span class=\"token attr-name\" >v-text</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>item.id<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>td</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>td</span> <span class=\"token attr-name\" >v-text</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>item.name<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>td</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>tr</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>table</span><span class=\"token punctuation\" >></span></span>\n&lt;xcui-pagination\n    @go-to-page=\"turnToPage\"\n    :current-page-no.sync=\"currentPageNo\"\n    :total=\"total\"\n    :page-size.sync=\"pageSize\"\n    ><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-pagination</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n                    </div>\n</div>\n<h2>Props</h2>\n<table class=\"table\">\n<thead>\n<tr>\n<th>名字</th>\n<th>类型</th>\n<th>默认</th>\n<th>描述</th>\n<th>可选范围</th>\n<th>是否必选</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td>String</td>\n<td>standard</td>\n<td>控制样式选择</td>\n<td>standard,mini</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>currentPageNo</td>\n<td>Number</td>\n<td>1</td>\n<td>当前页码</td>\n<td>&gt; 0</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>total</td>\n<td>Number</td>\n<td>0</td>\n<td>总条数</td>\n<td>&gt;= 0</td>\n<td>必选</td>\n</tr>\n<tr>\n<td>pageSize</td>\n<td>Number</td>\n<td>20</td>\n<td>每页条数</td>\n<td>取自<code>pageSizeRange</code></td>\n<td>可选</td>\n</tr>\n<tr>\n<td>withPageSize</td>\n<td>Boolean</td>\n<td>true</td>\n<td>是否展示<code>pageSize</code>设置挂件</td>\n<td></td>\n<td>可选</td>\n</tr>\n<tr>\n<td>pageSizeRange</td>\n<td>Array</td>\n<td>[10, 20, 50, 100]</td>\n<td><code>pageSize</code>设置挂件的下拉菜单选项范围 <code>withPageSize</code>为 true 时生效</td>\n<td></td>\n<td>可选</td>\n</tr>\n<tr>\n<td>rangeLength</td>\n<td>Number</td>\n<td>10</td>\n<td>页码按钮的展示个数</td>\n<td>&gt; 1</td>\n<td>可选</td>\n</tr>\n</tbody>\n</table>\n</div>";

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(186)
	__vue_script__ = __webpack_require__(188)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\demos\\loading.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(189)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-3d10be99/loading.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(187);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.23.1@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js?id=_v-3d10be99&scoped=true!./../../node_modules/.2.2.3@less-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./loading.vue", function() {
				var newContent = require("!!./../../node_modules/.0.23.1@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js?id=_v-3d10be99&scoped=true!./../../node_modules/.2.2.3@less-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./loading.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, ".loadWrap[_v-3d10be99] {\n  padding: 30px;\n  position: relative;\n}\np[_v-3d10be99] {\n  text-align: left;\n  text-indent: 2em;\n}\n.btnGroup[_v-3d10be99] {\n  margin-top: 15px;\n}\n.btnGroup label[_v-3d10be99] {\n  width: 10%;\n  position: relative;\n  top: 5px;\n  text-align: right;\n}\nselect[_v-3d10be99],\noption[_v-3d10be99],\nbutton[_v-3d10be99] {\n  outline: none;\n}\n", ""]);

	// exports


/***/ },
/* 188 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    data: function data() {
	        return {
	            show: true,
	            type: 'load2',
	            showBtn: 'hide',
	            classname: 'myclass',
	            color: '',
	            size: 'md'
	        };
	    },
	    ready: function ready() {
	        window.Z = this;
	    },

	    methods: {
	        toogleShow: function toogleShow() {
	            this.show = !this.show;
	            this.showBtn = this.show ? 'hide' : 'show';
	        }
	    }
	};

/***/ },
/* 189 */
/***/ function(module, exports) {

	module.exports = "<div _v-3d10be99=\"\"><h1 _v-3d10be99=\"\">Loading 加载组件</h1>\n<h2 _v-3d10be99=\"\">使用场景</h2>\n<p _v-3d10be99=\"\">在ajax加载或其他长耗时操作时，在一个页面元素上加入加载中图标，当耗时操作完成后隐藏。</p>\n<h2 _v-3d10be99=\"\">组件能力</h2>\n<ul _v-3d10be99=\"\">\n<li _v-3d10be99=\"\">提供3种css加载样式。</li>\n<li _v-3d10be99=\"\">loading需要放在一个拥有定位属性的容器，组件蒙层大小为父元素大小。</li>\n<li _v-3d10be99=\"\">css动画颜色可定制。</li>\n<li _v-3d10be99=\"\">提供三种可选尺寸。</li>\n<li _v-3d10be99=\"\">可通过自定义类名增加特殊定制。</li>\n</ul>\n<div class=\"xcui-demo-container col-md-12 col-xs-12 col-lg-12\" _v-3d10be99=\"\">\n    <div class=\"col-md-12 col-xs-12 col-lg-12 xcui-example-container\" _v-3d10be99=\"\">\n                    <h3 _v-3d10be99=\"\">加载组件</h3>\n                    <div class=\"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6\" _v-3d10be99=\"\">\n      <div class=\"loadWrap\" _v-3d10be99=\"\">\n          <p _v-3d10be99=\"\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n          <xcui-loading :show=\"show\" :type=\"type\" :color=\"color\" :size=\"size\" :classname=\"classname\" _v-3d10be99=\"\"></xcui-loading>\n      </div>\n        <div class=\"btnGroup clearfix\" _v-3d10be99=\"\">\n            <label class=\"control-label col-md-4\" _v-3d10be99=\"\">show：</label>\n            <div class=\"col-md-6\" _v-3d10be99=\"\">\n                <button class=\"btn btn-primary\" @click=\"toogleShow\" _v-3d10be99=\"\">{{showBtn}}</button>\n            </div>\n        </div>\n        <div class=\"btnGroup clearfix\" _v-3d10be99=\"\">\n            <label class=\"control-label col-md-4\" _v-3d10be99=\"\">type：</label>\n            <div class=\"col-md-6\" _v-3d10be99=\"\">\n                <select class=\"form-control\" v-model=\"type\" _v-3d10be99=\"\">\n                    <option _v-3d10be99=\"\">load1</option>\n                    <option _v-3d10be99=\"\">load2</option>\n                    <option _v-3d10be99=\"\">load3</option>\n                </select>\n            </div>\n        </div>\n        <div class=\"btnGroup clearfix\" _v-3d10be99=\"\">\n            <label class=\"control-label col-md-4\" _v-3d10be99=\"\">size：</label>\n            <div class=\"col-md-6\" _v-3d10be99=\"\">\n                <select class=\"form-control\" v-model=\"size\" _v-3d10be99=\"\">\n                    <option _v-3d10be99=\"\">sm</option>\n                    <option _v-3d10be99=\"\">md</option>\n                    <option _v-3d10be99=\"\">lg</option>\n                </select>\n            </div>\n        </div>\n        <div class=\"btnGroup clearfix\" _v-3d10be99=\"\">\n            <label class=\"control-label col-md-4\" _v-3d10be99=\"\">color：</label>\n            <div class=\"col-md-6\" _v-3d10be99=\"\">\n                <input class=\"form-control\" type=\"text\" v-model=\"color\" placeholder=\"支持css颜色格式\" _v-3d10be99=\"\">\n            </div>\n        </div>\n    </div>\n                    <div class=\"xcui-code-wrap col-xs-12 col-md-6 col-lg-6\" _v-3d10be99=\"\"><pre _v-3d10be99=\"\"><span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">&lt;</span>div</span> <span class=\"token attr-name\" _v-3d10be99=\"\">class</span><span class=\"token attr-value\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">=</span><span class=\"token punctuation\" _v-3d10be99=\"\">\"</span>loadWrap<span class=\"token punctuation\" _v-3d10be99=\"\">\"</span></span><span class=\"token punctuation\" _v-3d10be99=\"\">&gt;</span></span>\n    <span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">&lt;</span>p</span><span class=\"token punctuation\" _v-3d10be99=\"\">&gt;</span></span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">&lt;/</span>p</span><span class=\"token punctuation\" _v-3d10be99=\"\">&gt;</span></span>\n    &lt;xcui-loading :show=\"show\"\n             :type=\"type\"\n             :color=\"color\"\n             :size=\"size\"\n             :classname=\"classname\"&gt;<span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">&lt;/</span>xcui-loading</span><span class=\"token punctuation\" _v-3d10be99=\"\">&gt;</span></span>\n<span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">&lt;/</span>div</span><span class=\"token punctuation\" _v-3d10be99=\"\">&gt;</span></span>\n  <span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">&lt;</span>div</span> <span class=\"token attr-name\" _v-3d10be99=\"\">class</span><span class=\"token attr-value\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">=</span><span class=\"token punctuation\" _v-3d10be99=\"\">\"</span>btnGroup clearfix<span class=\"token punctuation\" _v-3d10be99=\"\">\"</span></span><span class=\"token punctuation\" _v-3d10be99=\"\">&gt;</span></span>\n      <span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">&lt;</span>label</span> <span class=\"token attr-name\" _v-3d10be99=\"\">class</span><span class=\"token attr-value\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">=</span><span class=\"token punctuation\" _v-3d10be99=\"\">\"</span>control-label col-md-4<span class=\"token punctuation\" _v-3d10be99=\"\">\"</span></span><span class=\"token punctuation\" _v-3d10be99=\"\">&gt;</span></span>show：<span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">&lt;/</span>label</span><span class=\"token punctuation\" _v-3d10be99=\"\">&gt;</span></span>\n      <span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">&lt;</span>div</span> <span class=\"token attr-name\" _v-3d10be99=\"\">class</span><span class=\"token attr-value\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">=</span><span class=\"token punctuation\" _v-3d10be99=\"\">\"</span>col-md-6<span class=\"token punctuation\" _v-3d10be99=\"\">\"</span></span><span class=\"token punctuation\" _v-3d10be99=\"\">&gt;</span></span>\n          <span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">&lt;</span>button</span> <span class=\"token attr-name\" _v-3d10be99=\"\">class</span><span class=\"token attr-value\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">=</span><span class=\"token punctuation\" _v-3d10be99=\"\">\"</span>btn btn-primary<span class=\"token punctuation\" _v-3d10be99=\"\">\"</span></span> <span class=\"token attr-name\" _v-3d10be99=\"\">@click</span><span class=\"token attr-value\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">=</span><span class=\"token punctuation\" _v-3d10be99=\"\">\"</span>toogleShow<span class=\"token punctuation\" _v-3d10be99=\"\">\"</span></span><span class=\"token punctuation\" _v-3d10be99=\"\">&gt;</span></span><span class=\"token punctuation\" _v-3d10be99=\"\">{</span><span class=\"token punctuation\" _v-3d10be99=\"\">{</span>showBtn<span class=\"token punctuation\" _v-3d10be99=\"\">}</span><span class=\"token punctuation\" _v-3d10be99=\"\">}</span><span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">&lt;/</span>button</span><span class=\"token punctuation\" _v-3d10be99=\"\">&gt;</span></span>\n      <span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">&lt;/</span>div</span><span class=\"token punctuation\" _v-3d10be99=\"\">&gt;</span></span>\n  <span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">&lt;/</span>div</span><span class=\"token punctuation\" _v-3d10be99=\"\">&gt;</span></span>\n  <span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">&lt;</span>div</span> <span class=\"token attr-name\" _v-3d10be99=\"\">class</span><span class=\"token attr-value\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">=</span><span class=\"token punctuation\" _v-3d10be99=\"\">\"</span>btnGroup clearfix<span class=\"token punctuation\" _v-3d10be99=\"\">\"</span></span><span class=\"token punctuation\" _v-3d10be99=\"\">&gt;</span></span>\n      <span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">&lt;</span>label</span>  <span class=\"token attr-name\" _v-3d10be99=\"\">class</span><span class=\"token attr-value\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">=</span><span class=\"token punctuation\" _v-3d10be99=\"\">\"</span>control-label col-md-4<span class=\"token punctuation\" _v-3d10be99=\"\">\"</span></span><span class=\"token punctuation\" _v-3d10be99=\"\">&gt;</span></span>type：<span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">&lt;/</span>label</span><span class=\"token punctuation\" _v-3d10be99=\"\">&gt;</span></span>\n      <span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">&lt;</span>div</span> <span class=\"token attr-name\" _v-3d10be99=\"\">class</span><span class=\"token attr-value\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">=</span><span class=\"token punctuation\" _v-3d10be99=\"\">\"</span>col-md-6<span class=\"token punctuation\" _v-3d10be99=\"\">\"</span></span><span class=\"token punctuation\" _v-3d10be99=\"\">&gt;</span></span>\n          <span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">&lt;</span>select</span> <span class=\"token attr-name\" _v-3d10be99=\"\">class</span><span class=\"token attr-value\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">=</span><span class=\"token punctuation\" _v-3d10be99=\"\">\"</span>form-control<span class=\"token punctuation\" _v-3d10be99=\"\">\"</span></span> <span class=\"token attr-name\" _v-3d10be99=\"\">v-model</span><span class=\"token attr-value\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">=</span><span class=\"token punctuation\" _v-3d10be99=\"\">\"</span>type<span class=\"token punctuation\" _v-3d10be99=\"\">\"</span></span><span class=\"token punctuation\" _v-3d10be99=\"\">&gt;</span></span>\n              <span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">&lt;</span>option</span><span class=\"token punctuation\" _v-3d10be99=\"\">&gt;</span></span>load1<span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">&lt;/</span>option</span><span class=\"token punctuation\" _v-3d10be99=\"\">&gt;</span></span>\n              <span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">&lt;</span>option</span><span class=\"token punctuation\" _v-3d10be99=\"\">&gt;</span></span>load2<span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">&lt;/</span>option</span><span class=\"token punctuation\" _v-3d10be99=\"\">&gt;</span></span>\n              <span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">&lt;</span>option</span><span class=\"token punctuation\" _v-3d10be99=\"\">&gt;</span></span>load3<span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">&lt;/</span>option</span><span class=\"token punctuation\" _v-3d10be99=\"\">&gt;</span></span>\n          <span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">&lt;/</span>select</span><span class=\"token punctuation\" _v-3d10be99=\"\">&gt;</span></span>\n      <span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">&lt;/</span>div</span><span class=\"token punctuation\" _v-3d10be99=\"\">&gt;</span></span>\n  <span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">&lt;/</span>div</span><span class=\"token punctuation\" _v-3d10be99=\"\">&gt;</span></span>\n  <span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">&lt;</span>div</span> <span class=\"token attr-name\" _v-3d10be99=\"\">class</span><span class=\"token attr-value\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">=</span><span class=\"token punctuation\" _v-3d10be99=\"\">\"</span>btnGroup clearfix<span class=\"token punctuation\" _v-3d10be99=\"\">\"</span></span><span class=\"token punctuation\" _v-3d10be99=\"\">&gt;</span></span>\n      <span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">&lt;</span>label</span>  <span class=\"token attr-name\" _v-3d10be99=\"\">class</span><span class=\"token attr-value\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">=</span><span class=\"token punctuation\" _v-3d10be99=\"\">\"</span>control-label col-md-4<span class=\"token punctuation\" _v-3d10be99=\"\">\"</span></span><span class=\"token punctuation\" _v-3d10be99=\"\">&gt;</span></span>size：<span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">&lt;/</span>label</span><span class=\"token punctuation\" _v-3d10be99=\"\">&gt;</span></span>\n      <span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">&lt;</span>div</span> <span class=\"token attr-name\" _v-3d10be99=\"\">class</span><span class=\"token attr-value\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">=</span><span class=\"token punctuation\" _v-3d10be99=\"\">\"</span>col-md-6<span class=\"token punctuation\" _v-3d10be99=\"\">\"</span></span><span class=\"token punctuation\" _v-3d10be99=\"\">&gt;</span></span>\n          <span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">&lt;</span>select</span> <span class=\"token attr-name\" _v-3d10be99=\"\">class</span><span class=\"token attr-value\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">=</span><span class=\"token punctuation\" _v-3d10be99=\"\">\"</span>form-control<span class=\"token punctuation\" _v-3d10be99=\"\">\"</span></span> <span class=\"token attr-name\" _v-3d10be99=\"\">v-model</span><span class=\"token attr-value\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">=</span><span class=\"token punctuation\" _v-3d10be99=\"\">\"</span>size<span class=\"token punctuation\" _v-3d10be99=\"\">\"</span></span><span class=\"token punctuation\" _v-3d10be99=\"\">&gt;</span></span>\n              <span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">&lt;</span>option</span><span class=\"token punctuation\" _v-3d10be99=\"\">&gt;</span></span>sm<span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">&lt;/</span>option</span><span class=\"token punctuation\" _v-3d10be99=\"\">&gt;</span></span>\n              <span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">&lt;</span>option</span><span class=\"token punctuation\" _v-3d10be99=\"\">&gt;</span></span>md<span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">&lt;/</span>option</span><span class=\"token punctuation\" _v-3d10be99=\"\">&gt;</span></span>\n              <span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">&lt;</span>option</span><span class=\"token punctuation\" _v-3d10be99=\"\">&gt;</span></span>lg<span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">&lt;/</span>option</span><span class=\"token punctuation\" _v-3d10be99=\"\">&gt;</span></span>\n          <span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">&lt;/</span>select</span><span class=\"token punctuation\" _v-3d10be99=\"\">&gt;</span></span>\n      <span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">&lt;/</span>div</span><span class=\"token punctuation\" _v-3d10be99=\"\">&gt;</span></span>\n  <span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">&lt;/</span>div</span><span class=\"token punctuation\" _v-3d10be99=\"\">&gt;</span></span>\n  <span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">&lt;</span>div</span> <span class=\"token attr-name\" _v-3d10be99=\"\">class</span><span class=\"token attr-value\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">=</span><span class=\"token punctuation\" _v-3d10be99=\"\">\"</span>btnGroup clearfix<span class=\"token punctuation\" _v-3d10be99=\"\">\"</span></span><span class=\"token punctuation\" _v-3d10be99=\"\">&gt;</span></span>\n      <span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">&lt;</span>label</span> <span class=\"token attr-name\" _v-3d10be99=\"\">class</span><span class=\"token attr-value\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">=</span><span class=\"token punctuation\" _v-3d10be99=\"\">\"</span>control-label col-md-4<span class=\"token punctuation\" _v-3d10be99=\"\">\"</span></span><span class=\"token punctuation\" _v-3d10be99=\"\">&gt;</span></span>color：<span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">&lt;/</span>label</span><span class=\"token punctuation\" _v-3d10be99=\"\">&gt;</span></span>\n      <span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">&lt;</span>div</span> <span class=\"token attr-name\" _v-3d10be99=\"\">class</span><span class=\"token attr-value\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">=</span><span class=\"token punctuation\" _v-3d10be99=\"\">\"</span>col-md-6<span class=\"token punctuation\" _v-3d10be99=\"\">\"</span></span><span class=\"token punctuation\" _v-3d10be99=\"\">&gt;</span></span>\n          <span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">&lt;</span>input</span> <span class=\"token attr-name\" _v-3d10be99=\"\">class</span><span class=\"token attr-value\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">=</span><span class=\"token punctuation\" _v-3d10be99=\"\">\"</span>form-control<span class=\"token punctuation\" _v-3d10be99=\"\">\"</span></span> <span class=\"token attr-name\" _v-3d10be99=\"\">type</span><span class=\"token attr-value\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">=</span><span class=\"token punctuation\" _v-3d10be99=\"\">\"</span>text<span class=\"token punctuation\" _v-3d10be99=\"\">\"</span></span> <span class=\"token attr-name\" _v-3d10be99=\"\">v-model</span><span class=\"token attr-value\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">=</span><span class=\"token punctuation\" _v-3d10be99=\"\">\"</span>color<span class=\"token punctuation\" _v-3d10be99=\"\">\"</span></span> <span class=\"token attr-name\" _v-3d10be99=\"\">placeholder</span><span class=\"token attr-value\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">=</span><span class=\"token punctuation\" _v-3d10be99=\"\">\"</span>支持css颜色格式<span class=\"token punctuation\" _v-3d10be99=\"\">\"</span></span><span class=\"token punctuation\" _v-3d10be99=\"\">&gt;</span></span>\n      <span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">&lt;/</span>div</span><span class=\"token punctuation\" _v-3d10be99=\"\">&gt;</span></span>\n  <span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token tag\" _v-3d10be99=\"\"><span class=\"token punctuation\" _v-3d10be99=\"\">&lt;/</span>div</span><span class=\"token punctuation\" _v-3d10be99=\"\">&gt;</span></span>\n</pre></div>\n                    </div>\n</div>\n<h2 _v-3d10be99=\"\">Props</h2>\n<table class=\"table\" _v-3d10be99=\"\">\n<thead _v-3d10be99=\"\">\n<tr _v-3d10be99=\"\">\n<th _v-3d10be99=\"\">名字</th>\n<th _v-3d10be99=\"\">类型</th>\n<th _v-3d10be99=\"\">默认</th>\n<th _v-3d10be99=\"\">描述</th>\n<th _v-3d10be99=\"\">可选范围</th>\n<th _v-3d10be99=\"\">是否必选</th>\n</tr>\n</thead>\n<tbody _v-3d10be99=\"\">\n<tr _v-3d10be99=\"\">\n<td _v-3d10be99=\"\">show</td>\n<td _v-3d10be99=\"\">Boolean</td>\n<td _v-3d10be99=\"\">false</td>\n<td _v-3d10be99=\"\">控制显示隐藏</td>\n<td _v-3d10be99=\"\">true/false</td>\n<td _v-3d10be99=\"\">必选</td>\n</tr>\n<tr _v-3d10be99=\"\">\n<td _v-3d10be99=\"\">type</td>\n<td _v-3d10be99=\"\">String</td>\n<td _v-3d10be99=\"\">load2</td>\n<td _v-3d10be99=\"\">控制样式选择</td>\n<td _v-3d10be99=\"\">load1-load3</td>\n<td _v-3d10be99=\"\">可选</td>\n</tr>\n<tr _v-3d10be99=\"\">\n<td _v-3d10be99=\"\">size</td>\n<td _v-3d10be99=\"\">String</td>\n<td _v-3d10be99=\"\">md</td>\n<td _v-3d10be99=\"\">控制大小</td>\n<td _v-3d10be99=\"\">sm/md/lg</td>\n<td _v-3d10be99=\"\">可选</td>\n</tr>\n<tr _v-3d10be99=\"\">\n<td _v-3d10be99=\"\">color</td>\n<td _v-3d10be99=\"\">String</td>\n<td _v-3d10be99=\"\">无</td>\n<td _v-3d10be99=\"\">控制颜色</td>\n<td _v-3d10be99=\"\">css色值</td>\n<td _v-3d10be99=\"\">可选</td>\n</tr>\n<tr _v-3d10be99=\"\">\n<td _v-3d10be99=\"\">classname</td>\n<td _v-3d10be99=\"\">String</td>\n<td _v-3d10be99=\"\">无</td>\n<td _v-3d10be99=\"\">自定义类名</td>\n<td _v-3d10be99=\"\"></td>\n<td _v-3d10be99=\"\">可选</td>\n</tr>\n</tbody>\n</table>\n</div>";

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(191)
	__vue_script__ = __webpack_require__(193)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\demos\\popover.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(194)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-58435f82/popover.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(192);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.23.1@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./popover.vue", function() {
				var newContent = require("!!./../../node_modules/.0.23.1@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./popover.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.container{\r\n    margin-top:100px;\r\n}\r\n.define-class{\r\n    background:#ffab47;\r\n    color:#fff;\r\n    width: 100px;\r\n}\r\n.title-class{\r\n    background:#46c3c1;\r\n    color:#fff;\r\n    width: 150px;\r\n}\r\n.content-class{\r\n    width: 150px;\r\n}\r\n", ""]);

	// exports


/***/ },
/* 193 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    data: function data() {
	        return {
	            htmlContent: '<h3>This is h3</h3><h4>This is h4</h4>'
	        };
	    }
	};

/***/ },
/* 194 */
/***/ function(module, exports) {

	module.exports = "<div><h1>Popover 工具提示</h1>\n<h2>使用场景</h2>\n<ul>\n<li>需要hover或click时悬浮提示更多详情</li>\n<li>支持自定义提示框样式</li>\n<li>支持两种悬浮框过渡样式:  <code>scale</code> 和 <code>fadein</code></li>\n</ul>\n<h2>DEMO</h2>\n<div class=\"xcui-demo-container col-md-12 col-xs-12 col-lg-12\">\n    <div class=\"col-md-12 col-xs-12 col-lg-12 xcui-example-container\">\n                    <h3>Popover</h3>\n                    <div class=\"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6\">\n        <xcui-popover effect=\"fadein\" placement=\"bottom\" title=\"This is Title\" trigger=\"click\" :content=\"htmlContent\">\n          <button class=\"btn btn-default \">Click Popover on bottom</button>\n        </xcui-popover>\n        <xcui-popover effect=\"scale\" placement=\"left\" title=\"This is Title\" trigger=\"click\"  content=\"Popover on left\">\n          <button class=\"btn btn-default \">Click Popover on left</button>\n        </xcui-popover>\n        <xcui-popover effect=\"fadein\" placement=\"top\" title=\"This is Title\"  content=\"Popover on top\">\n          <button class=\"btn btn-default \"> Hover Popover on top</button>\n        </xcui-popover>\n        <xcui-popover effect=\"scale\" placement=\"right\" title=\"This is Title\" :title-class=\"'title-class'\" :content-class=\"'content-class'\" content=\"Popover on right\">\n          <button class=\"btn btn-default \">Hover Popover on right</button>\n        </xcui-popover>\n    </div>\n                    <div class=\"xcui-code-wrap col-xs-12 col-md-6 col-lg-6\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>xcui-popover</span> <span class=\"token attr-name\" >effect</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>fadein<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >placement</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>bottom<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>This is Title<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >trigger</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>click<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:content</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>htmlContent<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn btn-default <span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Click Popover on bottom<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-popover</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>xcui-popover</span> <span class=\"token attr-name\" >effect</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>scale<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >placement</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>This is Title<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >trigger</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>click<span class=\"token punctuation\" >\"</span></span>  <span class=\"token attr-name\" >content</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Popover on left<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn btn-default <span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Click Popover on left<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-popover</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>xcui-popover</span> <span class=\"token attr-name\" >effect</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>fadein<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >placement</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>top<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>This is Title<span class=\"token punctuation\" >\"</span></span>  <span class=\"token attr-name\" >content</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Popover on top<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn btn-default <span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span> Hover Popover on top<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-popover</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>xcui-popover</span> <span class=\"token attr-name\" >effect</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>scale<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >placement</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>This is Title<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:title-class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >'</span>title-class<span class=\"token punctuation\" >'</span><span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:content-class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >'</span>content-class<span class=\"token punctuation\" >'</span><span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >content</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Popover on right<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn btn-default <span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Hover Popover on right<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-popover</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n                    </div>\n</div>\n<h2>Props</h2>\n<table class=\"table\">\n<thead>\n<tr>\n<th>名字</th>\n<th>类型</th>\n<th>默认</th>\n<th>描述</th>\n<th>是否必选</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td>String</td>\n<td>popover</td>\n<td>提示类型</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>trigger</td>\n<td>String</td>\n<td>hover</td>\n<td>悬浮触发方式</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>effect</td>\n<td>String</td>\n<td>scale</td>\n<td>悬浮过渡样式</td>\n<td>可选, scale/fadein</td>\n</tr>\n<tr>\n<td>placement</td>\n<td>String</td>\n<td>空字符串</td>\n<td>悬浮相对位置</td>\n<td>必选</td>\n</tr>\n<tr>\n<td>title</td>\n<td>String</td>\n<td>空字符串</td>\n<td>popover提示标题</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>content</td>\n<td>String</td>\n<td>空字符串</td>\n<td>提示内容</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>classname</td>\n<td>String</td>\n<td>空字符串</td>\n<td>自定义样式</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>tooltip-class</td>\n<td>String</td>\n<td>Object</td>\n<td>tootip提示框样式</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>title-class</td>\n<td>Object</td>\n<td>Object</td>\n<td>popover标题样式</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>content-class</td>\n<td>Object</td>\n<td>Object</td>\n<td>popover内容样式</td>\n<td>可选</td>\n</tr>\n</tbody>\n</table>\n</div>";

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(196)
	__vue_script__ = __webpack_require__(198)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\demos\\tooltip.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(199)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-7cd8f1e0/tooltip.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(197);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.23.1@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./tooltip.vue", function() {
				var newContent = require("!!./../../node_modules/.0.23.1@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./tooltip.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.container{\r\n    margin-top:100px;\r\n}\r\n.define-class{\r\n    background:#ffab47;\r\n    color:#fff;\r\n    width: 100px;\r\n}\r\n.title-class{\r\n    background:#46c3c1;\r\n    color:#fff;\r\n    width: 150px;\r\n}\r\n.content-class{\r\n    width: 150px;\r\n}\r\n", ""]);

	// exports


/***/ },
/* 198 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    data: function data() {
	        return {
	            htmlContent: '<h3>This is h3</h3><h4>This is h4</h4>'
	        };
	    }
	};

/***/ },
/* 199 */
/***/ function(module, exports) {

	module.exports = "<div><h1>Tooltip 工具提示</h1>\n<h2>使用场景</h2>\n<ul>\n<li>需要hover或click时悬浮提示更多详情</li>\n<li>支持自定义提示框样式</li>\n<li>支持两种悬浮框过渡样式:  <code>scale</code> 和 <code>fadein</code></li>\n</ul>\n<h2>DEMO</h2>\n<div class=\"xcui-demo-container col-md-12 col-xs-12 col-lg-12\">\n    <div class=\"col-md-12 col-xs-12 col-lg-12 xcui-example-container\">\n                    <h3>Popover</h3>\n                    <div class=\"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6\">\n        <xcui-tooltip effect=\"fadein\" placement=\"bottom\" title=\"This is Title\" :content=\"htmlContent\">\n          <button class=\"btn btn-default \">Hover tooltip on bottom</button>\n        </xcui-tooltip>\n        <xcui-tooltip effect=\"scale\" placement=\"left\" title=\"This is Title\" content=\"Tooltip on left\">\n          <button class=\"btn btn-default \">Hover tooltip on left</button>\n        </xcui-tooltip>\n        <xcui-tooltip effect=\"fadein\" placement=\"top\" title=\"This is Title\"  trigger=\"click\"  content=\"Tooltip on top\">\n          <button class=\"btn btn-default \"> Click tooltip on top</button>\n        </xcui-tooltip>\n        <xcui-tooltip effect=\"scale\" placement=\"right\" title=\"This is Title\" trigger=\"click\"  :title-class=\"'title-class'\" :content-class=\"'content-class'\" content=\"Tooltip on right\">\n          <button class=\"btn btn-default \">Click tooltip on right</button>\n        </xcui-tooltip>\n    </div>\n                    <div class=\"xcui-code-wrap col-xs-12 col-md-6 col-lg-6\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>xcui-tooltip</span> <span class=\"token attr-name\" >effect</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>fadein<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >placement</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>bottom<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>This is Title<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:content</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>htmlContent<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn btn-default <span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Hover tooltip on bottom<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-tooltip</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>xcui-tooltip</span> <span class=\"token attr-name\" >effect</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>scale<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >placement</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>This is Title<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >content</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Tooltip on left<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn btn-default <span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Hover tooltip on left<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-tooltip</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>xcui-tooltip</span> <span class=\"token attr-name\" >effect</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>fadein<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >placement</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>top<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>This is Title<span class=\"token punctuation\" >\"</span></span>  <span class=\"token attr-name\" >trigger</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>click<span class=\"token punctuation\" >\"</span></span>  <span class=\"token attr-name\" >content</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Tooltip on top<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn btn-default <span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span> Click tooltip on top<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-tooltip</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>xcui-tooltip</span> <span class=\"token attr-name\" >effect</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>scale<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >placement</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>This is Title<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >trigger</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>click<span class=\"token punctuation\" >\"</span></span>  <span class=\"token attr-name\" >:title-class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >'</span>title-class<span class=\"token punctuation\" >'</span><span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:content-class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >'</span>content-class<span class=\"token punctuation\" >'</span><span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >content</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Tooltip on right<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn btn-default <span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Click tooltip on right<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-tooltip</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n                    </div>\n</div>\n<h2>Props</h2>\n<table class=\"table\">\n<thead>\n<tr>\n<th>名字</th>\n<th>类型</th>\n<th>默认</th>\n<th>描述</th>\n<th>是否必选</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td>String</td>\n<td>popover</td>\n<td>提示类型</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>trigger</td>\n<td>String</td>\n<td>hover</td>\n<td>悬浮触发方式</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>effect</td>\n<td>String</td>\n<td>scale</td>\n<td>悬浮过渡样式</td>\n<td>可选, scale/fadein</td>\n</tr>\n<tr>\n<td>placement</td>\n<td>String</td>\n<td>空字符串</td>\n<td>悬浮相对位置</td>\n<td>必选</td>\n</tr>\n<tr>\n<td>title</td>\n<td>String</td>\n<td>空字符串</td>\n<td>popover提示标题</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>content</td>\n<td>String</td>\n<td>空字符串</td>\n<td>提示内容</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>classname</td>\n<td>String</td>\n<td>空字符串</td>\n<td>自定义样式</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>tooltip-class</td>\n<td>String</td>\n<td>Object</td>\n<td>tootip提示框样式</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>title-class</td>\n<td>Object</td>\n<td>Object</td>\n<td>popover标题样式</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>content-class</td>\n<td>Object</td>\n<td>Object</td>\n<td>popover内容样式</td>\n<td>可选</td>\n</tr>\n</tbody>\n</table>\n</div>";

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(201)
	__vue_script__ = __webpack_require__(203)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\demos\\suggestion.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(204)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-6fd23fb7/suggestion.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(202);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.23.1@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js?id=_v-6fd23fb7&scoped=true!./../../node_modules/.2.2.3@less-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./suggestion.vue", function() {
				var newContent = require("!!./../../node_modules/.0.23.1@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js?id=_v-6fd23fb7&scoped=true!./../../node_modules/.2.2.3@less-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./suggestion.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, ".block-item[_v-6fd23fb7] {\n  margin: 0 30px 50px;\n  float: left;\n}\n", ""]);

	// exports


/***/ },
/* 203 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    data: function data() {
	        return {
	            cityName: '',
	            cityId: '',
	            citySuggestions: [{
	                text: '北京',
	                value: '131'
	            }, {
	                text: '上海',
	                value: '289'
	            }, {
	                text: '海口',
	                value: '125'
	            }, {
	                text: '三亚',
	                value: '121'
	            }, {
	                text: '杭州',
	                value: '179'
	            }, {
	                text: '成都',
	                value: '75'
	            }, {
	                text: '贵阳',
	                value: '146'
	            }],
	            constellation: '',
	            constellationValue: '',
	            constellationSuggestions: ['水瓶', '双鱼', '白羊', '金牛', '双子', '巨蟹', '狮子', '处女', '天秤', '天蝎', '射手', '魔羯'],
	            requestWord: '',
	            remoteSug: [],
	            remoteUrl: 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?cb=window.bdsug.sug&wd=',
	            requestWord2: 'w',
	            requestValue2: '',
	            remoteSug2: [],
	            remoteUrl2: 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?cb=window.bdsug.sug2&wd='
	        };
	    },

	    watch: {},
	    methods: {
	        setSug: function setSug(s) {
	            this.remoteSug = s;
	        },
	        setSug2: function setSug2(s) {
	            this.remoteSug2 = s.map(function (item, index) {
	                return {
	                    text: item,
	                    value: index
	                };
	            });
	        },
	        request: function request() {
	            var url = this.remoteUrl + this.requestWord;
	            var script = document.createElement('script');
	            script.src = url;
	            document.body.appendChild(script);
	            script.onload = function (res) {
	                document.body.removeChild(script);
	            };
	        },
	        request2: function request2() {
	            var url = this.remoteUrl2 + this.requestWord2;
	            var script = document.createElement('script');
	            script.src = url;
	            document.body.appendChild(script);
	            script.onload = function (res) {
	                document.body.removeChild(script);
	            };
	        }
	    },
	    ready: function ready() {
	        var me = this;
	        window.bdsug = {
	            sug: function sug(res) {
	                me.setSug(res.s);
	            },
	            sug2: function sug2(res) {
	                me.setSug2(res.s);
	            }
	        };
	    }
	};

/***/ },
/* 204 */
/***/ function(module, exports) {

	module.exports = "<div _v-6fd23fb7=\"\"><h1 _v-6fd23fb7=\"\">Suggestion 自动完成/建议</h1>\n<h2 _v-6fd23fb7=\"\">使用场景</h2>\n<p _v-6fd23fb7=\"\">用户输入相关词语时进行输入建议(suggestions), 自动完成</p>\n<h1 _v-6fd23fb7=\"\">Demo</h1>\n<div class=\"xcui-demo-container col-md-12 col-xs-12 col-lg-12\" _v-6fd23fb7=\"\">\n<div class=\"col-md-12 col-xs-12 col-lg-12 xcui-example-container\" _v-6fd23fb7=\"\">\n                    <h3 _v-6fd23fb7=\"\">string数组 sugs:</h3>\n                    <div class=\"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6\" _v-6fd23fb7=\"\">\n  <table class=\"table\" style=\"width:400px\" _v-6fd23fb7=\"\">\n    <thead _v-6fd23fb7=\"\">\n        <tr _v-6fd23fb7=\"\">\n            <th _v-6fd23fb7=\"\">dataText</th>\n            <th _v-6fd23fb7=\"\">dataValue</th>\n        </tr>\n    </thead>\n    <tbody _v-6fd23fb7=\"\">\n        <tr _v-6fd23fb7=\"\">\n            <td _v-6fd23fb7=\"\">constellation : {{constellation}}</td>\n            <td _v-6fd23fb7=\"\">constellationValue : {{constellationValue}}</td>\n        </tr>\n    </tbody>\n  </table>\n  <div style=\"width:200px\" _v-6fd23fb7=\"\">\n      <xcui-suggestion id=\"constellation\" name=\"constellation\" placeholder=\"请输入星座\" :data-text.sync=\"constellation\" :data-value.sync=\"constellationValue\" :suggestions=\"constellationSuggestions\" _v-6fd23fb7=\"\">\n      </xcui-suggestion>\n  </div>\n</div>\n                    <div class=\"xcui-code-wrap col-xs-12 col-md-6 col-lg-6\" _v-6fd23fb7=\"\"><pre _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;</span>table</span> <span class=\"token attr-name\" _v-6fd23fb7=\"\">class</span><span class=\"token attr-value\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">=</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">\"</span>table<span class=\"token punctuation\" _v-6fd23fb7=\"\">\"</span></span><span class=\"token style-attr language-css\" _v-6fd23fb7=\"\"><span class=\"token attr-name\" _v-6fd23fb7=\"\"> <span class=\"token attr-name\" _v-6fd23fb7=\"\">style</span></span><span class=\"token punctuation\" _v-6fd23fb7=\"\">=\"</span><span class=\"token attr-value\" _v-6fd23fb7=\"\"><span class=\"token property\" _v-6fd23fb7=\"\">width</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">:</span>400px</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">\"</span></span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n  <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;</span>thead</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n      <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;</span>tr</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n          <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;</span>th</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>dataText<span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;/</span>th</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n          <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;</span>th</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>dataValue<span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;/</span>th</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n      <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;/</span>tr</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n  <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;/</span>thead</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n  <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;</span>tbody</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n      <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;</span>tr</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n          <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;</span>td</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>constellation : <span class=\"token punctuation\" _v-6fd23fb7=\"\">{</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">{</span>constellation<span class=\"token punctuation\" _v-6fd23fb7=\"\">}</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">}</span><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;/</span>td</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n          <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;</span>td</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>constellationValue : <span class=\"token punctuation\" _v-6fd23fb7=\"\">{</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">{</span>constellationValue<span class=\"token punctuation\" _v-6fd23fb7=\"\">}</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">}</span><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;/</span>td</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n      <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;/</span>tr</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n  <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;/</span>tbody</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n<span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;/</span>table</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n<span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;</span>div</span><span class=\"token style-attr language-css\" _v-6fd23fb7=\"\"><span class=\"token attr-name\" _v-6fd23fb7=\"\"> <span class=\"token attr-name\" _v-6fd23fb7=\"\">style</span></span><span class=\"token punctuation\" _v-6fd23fb7=\"\">=\"</span><span class=\"token attr-value\" _v-6fd23fb7=\"\"><span class=\"token property\" _v-6fd23fb7=\"\">width</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">:</span>200px</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">\"</span></span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n    &lt;xcui-suggestion\n      id=\"constellation\"\n        name=\"constellation\"\n        placeholder=\"请输入星座\"\n        :data-text.sync=\"constellation\"\n      :data-value.sync=\"constellationValue\"\n      :suggestions=\"constellationSuggestions\"&gt;\n    <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;/</span>xcui-suggestion</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n<span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;/</span>div</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n</pre></div>\n                    </div>\n    <div class=\"col-md-12 col-xs-12 col-lg-12 xcui-example-container\" _v-6fd23fb7=\"\">\n                    <h3 _v-6fd23fb7=\"\">object数组 sugs:</h3>\n                    <div class=\"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6\" _v-6fd23fb7=\"\">\n        <table class=\"table\" style=\"width:400px\" _v-6fd23fb7=\"\">\n              <thead _v-6fd23fb7=\"\">\n                  <tr _v-6fd23fb7=\"\">\n                      <th _v-6fd23fb7=\"\">dataText</th>\n                      <th _v-6fd23fb7=\"\">dataValue</th>\n                  </tr>\n              </thead>\n              <tbody _v-6fd23fb7=\"\">\n                  <tr _v-6fd23fb7=\"\">\n                      <td _v-6fd23fb7=\"\">cityName : {{cityName}}</td>\n                      <td _v-6fd23fb7=\"\">cityId : {{cityId}}</td>\n                  </tr>\n              </tbody>\n          </table>\n          <div style=\"width:200px\" _v-6fd23fb7=\"\">\n              <xcui-suggestion id=\"city\" name=\"city\" placeholder=\"请输入城市\" :data-text.sync=\"cityName\" :data-value.sync=\"cityId\" :suggestions=\"citySuggestions\" _v-6fd23fb7=\"\">\n              </xcui-suggestion>\n          </div>\n    </div>\n                    <div class=\"xcui-code-wrap col-xs-12 col-md-6 col-lg-6\" _v-6fd23fb7=\"\"><pre _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;</span>table</span> <span class=\"token attr-name\" _v-6fd23fb7=\"\">class</span><span class=\"token attr-value\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">=</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">\"</span>table<span class=\"token punctuation\" _v-6fd23fb7=\"\">\"</span></span><span class=\"token style-attr language-css\" _v-6fd23fb7=\"\"><span class=\"token attr-name\" _v-6fd23fb7=\"\"> <span class=\"token attr-name\" _v-6fd23fb7=\"\">style</span></span><span class=\"token punctuation\" _v-6fd23fb7=\"\">=\"</span><span class=\"token attr-value\" _v-6fd23fb7=\"\"><span class=\"token property\" _v-6fd23fb7=\"\">width</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">:</span>400px</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">\"</span></span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n      <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;</span>thead</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n          <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;</span>tr</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n              <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;</span>th</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>dataText<span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;/</span>th</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n              <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;</span>th</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>dataValue<span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;/</span>th</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n          <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;/</span>tr</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n      <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;/</span>thead</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n      <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;</span>tbody</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n          <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;</span>tr</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n              <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;</span>td</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>cityName : <span class=\"token punctuation\" _v-6fd23fb7=\"\">{</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">{</span>cityName<span class=\"token punctuation\" _v-6fd23fb7=\"\">}</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">}</span><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;/</span>td</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n              <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;</span>td</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>cityId : <span class=\"token punctuation\" _v-6fd23fb7=\"\">{</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">{</span>cityId<span class=\"token punctuation\" _v-6fd23fb7=\"\">}</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">}</span><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;/</span>td</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n          <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;/</span>tr</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n      <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;/</span>tbody</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n  <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;/</span>table</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n  <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;</span>div</span><span class=\"token style-attr language-css\" _v-6fd23fb7=\"\"><span class=\"token attr-name\" _v-6fd23fb7=\"\"> <span class=\"token attr-name\" _v-6fd23fb7=\"\">style</span></span><span class=\"token punctuation\" _v-6fd23fb7=\"\">=\"</span><span class=\"token attr-value\" _v-6fd23fb7=\"\"><span class=\"token property\" _v-6fd23fb7=\"\">width</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">:</span>200px</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">\"</span></span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n      <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;</span>xcui-suggestion</span> <span class=\"token attr-name\" _v-6fd23fb7=\"\">id</span><span class=\"token attr-value\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">=</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">\"</span>city<span class=\"token punctuation\" _v-6fd23fb7=\"\">\"</span></span> <span class=\"token attr-name\" _v-6fd23fb7=\"\">name</span><span class=\"token attr-value\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">=</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">\"</span>city<span class=\"token punctuation\" _v-6fd23fb7=\"\">\"</span></span> <span class=\"token attr-name\" _v-6fd23fb7=\"\">placeholder</span><span class=\"token attr-value\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">=</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">\"</span>请输入城市<span class=\"token punctuation\" _v-6fd23fb7=\"\">\"</span></span> <span class=\"token attr-name\" _v-6fd23fb7=\"\">:data-text.sync</span><span class=\"token attr-value\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">=</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">\"</span>cityName<span class=\"token punctuation\" _v-6fd23fb7=\"\">\"</span></span> <span class=\"token attr-name\" _v-6fd23fb7=\"\">:data-value.sync</span><span class=\"token attr-value\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">=</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">\"</span>cityId<span class=\"token punctuation\" _v-6fd23fb7=\"\">\"</span></span> <span class=\"token attr-name\" _v-6fd23fb7=\"\">:suggestions</span><span class=\"token attr-value\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">=</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">\"</span>citySuggestions<span class=\"token punctuation\" _v-6fd23fb7=\"\">\"</span></span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n      <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;/</span>xcui-suggestion</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n  <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;/</span>div</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n</pre></div>\n                    </div>\n    <div class=\"col-md-12 col-xs-12 col-lg-12 xcui-example-container\" _v-6fd23fb7=\"\">\n                    <h3 _v-6fd23fb7=\"\">远程sug，string数组 sugs:</h3>\n                    <div class=\"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6\" _v-6fd23fb7=\"\">\n      <table class=\"table\" style=\"width:400px\" _v-6fd23fb7=\"\">\n          <thead _v-6fd23fb7=\"\">\n              <tr _v-6fd23fb7=\"\">\n                  <th _v-6fd23fb7=\"\">dataText</th>\n                  <th _v-6fd23fb7=\"\">dataValue</th>\n              </tr>\n          </thead>\n          <tbody _v-6fd23fb7=\"\">\n              <tr _v-6fd23fb7=\"\">\n                  <td _v-6fd23fb7=\"\">requestWord : {{requestWord}}</td>\n                  <td _v-6fd23fb7=\"\"> </td>\n              </tr>\n          </tbody>\n      </table>\n      <div style=\"width:200px\" _v-6fd23fb7=\"\">\n              <xcui-suggestion placeholder=\"\" :check=\"false\" :data-text.sync=\"requestWord\" :suggestions=\"remoteSug\" :input-callback=\"request\" _v-6fd23fb7=\"\">&gt;\n              </xcui-suggestion>\n      </div>\n    </div>\n                    <div class=\"xcui-code-wrap col-xs-12 col-md-6 col-lg-6\" _v-6fd23fb7=\"\"><pre _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;</span>table</span> <span class=\"token attr-name\" _v-6fd23fb7=\"\">class</span><span class=\"token attr-value\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">=</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">\"</span>table<span class=\"token punctuation\" _v-6fd23fb7=\"\">\"</span></span><span class=\"token style-attr language-css\" _v-6fd23fb7=\"\"><span class=\"token attr-name\" _v-6fd23fb7=\"\"> <span class=\"token attr-name\" _v-6fd23fb7=\"\">style</span></span><span class=\"token punctuation\" _v-6fd23fb7=\"\">=\"</span><span class=\"token attr-value\" _v-6fd23fb7=\"\"><span class=\"token property\" _v-6fd23fb7=\"\">width</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">:</span>400px</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">\"</span></span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n    <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;</span>thead</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n        <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;</span>tr</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n            <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;</span>th</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>dataText<span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;/</span>th</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n            <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;</span>th</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>dataValue<span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;/</span>th</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n        <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;/</span>tr</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n    <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;/</span>thead</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n    <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;</span>tbody</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n        <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;</span>tr</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n            <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;</span>td</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>requestWord : <span class=\"token punctuation\" _v-6fd23fb7=\"\">{</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">{</span>requestWord<span class=\"token punctuation\" _v-6fd23fb7=\"\">}</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">}</span><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;/</span>td</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n            <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;</span>td</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span> <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;/</span>td</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n        <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;/</span>tr</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n    <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;/</span>tbody</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n<span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;/</span>table</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n<span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;</span>div</span><span class=\"token style-attr language-css\" _v-6fd23fb7=\"\"><span class=\"token attr-name\" _v-6fd23fb7=\"\"> <span class=\"token attr-name\" _v-6fd23fb7=\"\">style</span></span><span class=\"token punctuation\" _v-6fd23fb7=\"\">=\"</span><span class=\"token attr-value\" _v-6fd23fb7=\"\"><span class=\"token property\" _v-6fd23fb7=\"\">width</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">:</span>200px</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">\"</span></span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n        &lt;xcui-suggestion placeholder=\"\"\n                    :check=false\n                    :data-text.sync=\"requestWord\"\n                    :suggestions=\"remoteSug\"\n                    :input-callback=\"request\"&gt;&gt;\n        <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;/</span>xcui-suggestion</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n<span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;/</span>div</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n</pre></div>\n                    </div>\n    <div class=\"col-md-12 col-xs-12 col-lg-12 xcui-example-container\" _v-6fd23fb7=\"\">\n                    <h3 _v-6fd23fb7=\"\">远程sug，object数组 sugs:</h3>\n                    <div class=\"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6\" _v-6fd23fb7=\"\">\n        <div class=\"block-item\" _v-6fd23fb7=\"\">\n          <table class=\"table table-striped table-bordered\" style=\"width:400px\" _v-6fd23fb7=\"\">\n              <thead _v-6fd23fb7=\"\">\n                  <tr _v-6fd23fb7=\"\">\n                      <th _v-6fd23fb7=\"\">dataText</th>\n                      <th _v-6fd23fb7=\"\">dataValue</th>\n                  </tr>\n              </thead>\n              <tbody _v-6fd23fb7=\"\">\n                  <tr _v-6fd23fb7=\"\">\n                      <td _v-6fd23fb7=\"\">requestWord2 : {{requestWord2}}</td>\n                      <td _v-6fd23fb7=\"\">requestValue2 : {{requestValue2}}</td>\n                  </tr>\n              </tbody>\n          </table>\n          <div style=\"width:200px\" _v-6fd23fb7=\"\">\n                  <xcui-suggestion placeholder=\"\" :check=\"false\" :data-text.sync=\"requestWord2\" :data-value.sync=\"requestValue2\" :suggestions=\"remoteSug2\" :input-callback=\"request2\" _v-6fd23fb7=\"\">\n                  </xcui-suggestion>\n          </div>\n        </div>\n    </div>\n                    <div class=\"xcui-code-wrap col-xs-12 col-md-6 col-lg-6\" _v-6fd23fb7=\"\"><pre _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;</span>div</span> <span class=\"token attr-name\" _v-6fd23fb7=\"\">class</span><span class=\"token attr-value\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">=</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">\"</span>block-item<span class=\"token punctuation\" _v-6fd23fb7=\"\">\"</span></span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n  <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;</span>table</span> <span class=\"token attr-name\" _v-6fd23fb7=\"\">class</span><span class=\"token attr-value\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">=</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">\"</span>table table-striped table-bordered<span class=\"token punctuation\" _v-6fd23fb7=\"\">\"</span></span><span class=\"token style-attr language-css\" _v-6fd23fb7=\"\"><span class=\"token attr-name\" _v-6fd23fb7=\"\"> <span class=\"token attr-name\" _v-6fd23fb7=\"\">style</span></span><span class=\"token punctuation\" _v-6fd23fb7=\"\">=\"</span><span class=\"token attr-value\" _v-6fd23fb7=\"\"><span class=\"token property\" _v-6fd23fb7=\"\">width</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">:</span>400px</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">\"</span></span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n      <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;</span>thead</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n          <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;</span>tr</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n              <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;</span>th</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>dataText<span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;/</span>th</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n              <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;</span>th</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>dataValue<span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;/</span>th</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n          <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;/</span>tr</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n      <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;/</span>thead</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n      <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;</span>tbody</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n          <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;</span>tr</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n              <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;</span>td</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>requestWord2 : <span class=\"token punctuation\" _v-6fd23fb7=\"\">{</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">{</span>requestWord2<span class=\"token punctuation\" _v-6fd23fb7=\"\">}</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">}</span><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;/</span>td</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n              <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;</span>td</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>requestValue2 : <span class=\"token punctuation\" _v-6fd23fb7=\"\">{</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">{</span>requestValue2<span class=\"token punctuation\" _v-6fd23fb7=\"\">}</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">}</span><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;/</span>td</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n          <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;/</span>tr</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n      <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;/</span>tbody</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n  <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;/</span>table</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n  <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;</span>div</span><span class=\"token style-attr language-css\" _v-6fd23fb7=\"\"><span class=\"token attr-name\" _v-6fd23fb7=\"\"> <span class=\"token attr-name\" _v-6fd23fb7=\"\">style</span></span><span class=\"token punctuation\" _v-6fd23fb7=\"\">=\"</span><span class=\"token attr-value\" _v-6fd23fb7=\"\"><span class=\"token property\" _v-6fd23fb7=\"\">width</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">:</span>200px</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">\"</span></span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n          &lt;xcui-suggestion placeholder=\"\"\n                      :check=false\n                      :data-text.sync=\"requestWord2\"\n                      :data-value.sync=\"requestValue2\"\n                      :suggestions=\"remoteSug2\"\n                      :input-callback=\"request2\"&gt;\n          <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;/</span>xcui-suggestion</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n  <span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;/</span>div</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n<span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token tag\" _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">&lt;/</span>div</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">&gt;</span></span>\n</pre></div>\n                    </div>\n</div>\n<h2 _v-6fd23fb7=\"\">数据格式支持</h2>\n<p _v-6fd23fb7=\"\">组件支持两种<code _v-6fd23fb7=\"\">数据格式</code>：</p>\n<ul _v-6fd23fb7=\"\">\n<li _v-6fd23fb7=\"\">Object:</li>\n</ul>\n<pre _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">[</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">{</span>\n    text<span class=\"token punctuation\" _v-6fd23fb7=\"\">:</span><span class=\"token string\" _v-6fd23fb7=\"\">\"北京\"</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">,</span>\n    value<span class=\"token punctuation\" _v-6fd23fb7=\"\">:</span><span class=\"token string\" _v-6fd23fb7=\"\">\"103\"</span>\n<span class=\"token punctuation\" _v-6fd23fb7=\"\">}</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">,</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">{</span>\n    text<span class=\"token punctuation\" _v-6fd23fb7=\"\">:</span><span class=\"token string\" _v-6fd23fb7=\"\">\"上海\"</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">,</span>\n    value<span class=\"token punctuation\" _v-6fd23fb7=\"\">:</span><span class=\"token string\" _v-6fd23fb7=\"\">\"131\"</span>\n<span class=\"token punctuation\" _v-6fd23fb7=\"\">}</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">,</span>\n    ……\n<span class=\"token punctuation\" _v-6fd23fb7=\"\">]</span>\n</pre>\n<ul _v-6fd23fb7=\"\">\n<li _v-6fd23fb7=\"\">Array:</li>\n</ul>\n<pre _v-6fd23fb7=\"\"><span class=\"token punctuation\" _v-6fd23fb7=\"\">[</span><span class=\"token string\" _v-6fd23fb7=\"\">\"北京\"</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">,</span><span class=\"token string\" _v-6fd23fb7=\"\">\"上海\"</span><span class=\"token punctuation\" _v-6fd23fb7=\"\">,</span>……<span class=\"token punctuation\" _v-6fd23fb7=\"\">]</span>\n</pre>\n<h2 _v-6fd23fb7=\"\">参数说明</h2>\n<table class=\"table\" _v-6fd23fb7=\"\">\n<thead _v-6fd23fb7=\"\">\n<tr _v-6fd23fb7=\"\">\n<th _v-6fd23fb7=\"\">参数</th>\n<th _v-6fd23fb7=\"\">类型</th>\n<th _v-6fd23fb7=\"\">双向</th>\n<th _v-6fd23fb7=\"\">说明</th>\n</tr>\n</thead>\n<tbody _v-6fd23fb7=\"\">\n<tr _v-6fd23fb7=\"\">\n<td _v-6fd23fb7=\"\">id</td>\n<td _v-6fd23fb7=\"\">String</td>\n<td _v-6fd23fb7=\"\"></td>\n<td _v-6fd23fb7=\"\">input的id</td>\n</tr>\n<tr _v-6fd23fb7=\"\">\n<td _v-6fd23fb7=\"\">name</td>\n<td _v-6fd23fb7=\"\">String</td>\n<td _v-6fd23fb7=\"\"></td>\n<td _v-6fd23fb7=\"\">input的name属性</td>\n</tr>\n<tr _v-6fd23fb7=\"\">\n<td _v-6fd23fb7=\"\">className</td>\n<td _v-6fd23fb7=\"\">String</td>\n<td _v-6fd23fb7=\"\"></td>\n<td _v-6fd23fb7=\"\">类名</td>\n</tr>\n<tr _v-6fd23fb7=\"\">\n<td _v-6fd23fb7=\"\">disabled</td>\n<td _v-6fd23fb7=\"\">Boolean</td>\n<td _v-6fd23fb7=\"\"></td>\n<td _v-6fd23fb7=\"\">input的disabled属性</td>\n</tr>\n<tr _v-6fd23fb7=\"\">\n<td _v-6fd23fb7=\"\">placeholder</td>\n<td _v-6fd23fb7=\"\">String</td>\n<td _v-6fd23fb7=\"\"></td>\n<td _v-6fd23fb7=\"\">input提示</td>\n</tr>\n<tr _v-6fd23fb7=\"\">\n<td _v-6fd23fb7=\"\">dataText</td>\n<td _v-6fd23fb7=\"\">String</td>\n<td _v-6fd23fb7=\"\">是</td>\n<td _v-6fd23fb7=\"\">sug文本,展示给用户的sug值</td>\n</tr>\n<tr _v-6fd23fb7=\"\">\n<td _v-6fd23fb7=\"\">dataValue</td>\n<td _v-6fd23fb7=\"\">String or Object</td>\n<td _v-6fd23fb7=\"\">是</td>\n<td _v-6fd23fb7=\"\">所选sug项</td>\n</tr>\n<tr _v-6fd23fb7=\"\">\n<td _v-6fd23fb7=\"\">suggestions</td>\n<td _v-6fd23fb7=\"\">Array</td>\n<td _v-6fd23fb7=\"\"></td>\n<td _v-6fd23fb7=\"\">sug list</td>\n</tr>\n<tr _v-6fd23fb7=\"\">\n<td _v-6fd23fb7=\"\">check</td>\n<td _v-6fd23fb7=\"\">Boolean@default:false</td>\n<td _v-6fd23fb7=\"\"></td>\n<td _v-6fd23fb7=\"\">是否要做sug匹配，如果想用本组件实现远程sug，设为false</td>\n</tr>\n<tr _v-6fd23fb7=\"\">\n<td _v-6fd23fb7=\"\">inputCallback</td>\n<td _v-6fd23fb7=\"\">Function</td>\n<td _v-6fd23fb7=\"\"></td>\n<td _v-6fd23fb7=\"\">input事件回调，可以本时机触发远程sug异步请求</td>\n</tr>\n</tbody>\n</table>\n</div>";

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(206)
	__vue_script__ = __webpack_require__(208)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\demos\\tag.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(209)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-f4b72f12/tag.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(207);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.23.1@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./tag.vue", function() {
				var newContent = require("!!./../../node_modules/.0.23.1@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./tag.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.define-class{\r\n    background:#ffab47;\r\n    color:#fff;\r\n    border-radius: 6px;\r\n}\r\n\r\n.define-class:hover{\r\n    background:red;\r\n}\r\n", ""]);

	// exports


/***/ },
/* 208 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    data: function data() {
	        return {
	            tags: [{ text: '新标签', key: 'test' }],
	            showTag: false,
	            index: 1,
	            key: 'data',
	            afterCloseIsShowTag: true
	        };
	    },

	    methods: {
	        closeclick: function closeclick() {
	            alert('testValidateSuccess');
	        },
	        addTag: function addTag() {
	            if (this.tags === null) {
	                this.tags = [];
	            }
	            this.tags.push({ text: '\u65B0\u6807\u7B7E' + this.index++, key: this.index });
	        },
	        click: function click() {
	            alert('clicksuccess');
	        }
	    }
	};

/***/ },
/* 209 */
/***/ function(module, exports) {

	module.exports = "<div><h1>Tag标签</h1>\n<h2>使用场景</h2>\n<ul>\n<li>标记事物的属性、分类等特性</li>\n<li>支持关闭标签、点击标签</li>\n<li>支持禁用标签</li>\n<li>支持自定义标签样式</li>\n</ul>\n<h2>DEMO</h2>\n<div class=\"xcui-demo-container col-md-12 col-xs-12 col-lg-12\">\n\t<div class=\"col-md-12 col-xs-12 col-lg-12 xcui-example-container\">\n                    <h3>基本使用</h3>\n                    <div class=\"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6\">\n        <xcui-tag :text=\"'标签'\"></xcui-tag>\n        <xcui-tag :disabled=\"true\" :text=\"'禁用标签'\"></xcui-tag>\n        <xcui-tag :closeable=\"true\" :text=\"'关闭'\" @close=\"closeclick\"></xcui-tag>\n        <xcui-tag :closeable=\"true\" @close=\"closeclick\" :key.sync=\"key\" :text=\"'点击不关闭'\" :aftercloseisshow.sync=\"afterCloseIsShowTag\" @click=\"click\"></xcui-tag>\n        <xcui-tag  :classname=\"'define-class'\" :text=\"'自定义样式'\" @click=\"click\" ></xcui-tag>\n    </div>\n                    <div class=\"xcui-code-wrap col-xs-12 col-md-6 col-lg-6\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>xcui-tag</span> <span class=\"token attr-name\" >:text</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >'</span>标签<span class=\"token punctuation\" >'</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-tag</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>xcui-tag</span> <span class=\"token attr-name\" >:disabled</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>true<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:text</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >'</span>禁用标签<span class=\"token punctuation\" >'</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-tag</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>xcui-tag</span> <span class=\"token attr-name\" >:closeable</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>true<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:text</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >'</span>关闭<span class=\"token punctuation\" >'</span><span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >@close</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>closeclick<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-tag</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>xcui-tag</span> <span class=\"token attr-name\" >:closeable</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>true<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >@close</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>closeclick<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:key.sync</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>key<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:text</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >'</span>点击不关闭<span class=\"token punctuation\" >'</span><span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:aftercloseisshow.sync</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>afterCloseIsShowTag<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >@click</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>click<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-tag</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>xcui-tag</span>  <span class=\"token attr-name\" >:classname</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >'</span>define-class<span class=\"token punctuation\" >'</span><span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:text</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >'</span>自定义样式<span class=\"token punctuation\" >'</span><span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >@click</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>click<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-tag</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n                    </div>\n    <div class=\"col-md-12 col-xs-12 col-lg-12 xcui-example-container\">\n                    <h3>添加标签</h3>\n                    <div class=\"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6\">\n        <template v-for=\"item in tags\">\n            <xcui-tag :closeable=\"true\" :text=\"item.text\"></xcui-tag>\n        </template>\n        <input type=\"button\" class=\"btn btn-primary\" value=\"添加\" @click=\"addTag\"/>\n    </div>\n                    <div class=\"xcui-code-wrap col-xs-12 col-md-6 col-lg-6\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>template</span> <span class=\"token attr-name\" >v-for</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>item in tags<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>xcui-tag</span> <span class=\"token attr-name\" >:closeable</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>true<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:text</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>item.text<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-tag</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>template</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>input</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>button<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn btn-primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >value</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>添加<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >@click</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>addTag<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >/></span></span>\n</pre></div>\n                    </div>\n</div>\n<h2>Props</h2>\n<table class=\"table\">\n<thead>\n<tr>\n<th>名字</th>\n<th>类型</th>\n<th>默认</th>\n<th>描述</th>\n<th>是否必选</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>text</td>\n<td>String</td>\n<td>空字符串</td>\n<td>内容</td>\n<td>必选</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>Boolean</td>\n<td>false</td>\n<td>是否禁用</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>closeable</td>\n<td>Boolean</td>\n<td>false</td>\n<td>是否可关闭</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>close</td>\n<td>function</td>\n<td>无</td>\n<td>关闭时回调</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>click</td>\n<td>function</td>\n<td>无</td>\n<td>点击标签事件</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>showTag</td>\n<td>Boolean</td>\n<td>true</td>\n<td>是否展示tag</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>aftercloseisshow</td>\n<td>Boolean</td>\n<td>false</td>\n<td>关闭回调后是否展示Tag</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>key</td>\n<td>String</td>\n<td>空字符串</td>\n<td>存储数据</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>classname</td>\n<td>String</td>\n<td>空字符串</td>\n<td>自定义样式</td>\n<td>可选</td>\n</tr>\n</tbody>\n</table>\n</div>";

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(211)
	__vue_script__ = __webpack_require__(213)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\demos\\datepicker.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(214)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-19625122/datepicker.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(212);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.23.1@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../node_modules/.2.2.3@less-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./datepicker.vue", function() {
				var newContent = require("!!./../../node_modules/.0.23.1@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../node_modules/.2.2.3@less-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./datepicker.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "p {\n  padding-left: 30px;\n  font-size: 14px;\n  color: #666;\n}\n.class-name {\n  width: 200px;\n}\n", ""]);

	// exports


/***/ },
/* 213 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    data: function data() {
	        return {
	            date: {
	                value: 1477980088896,
	                begin: '2015-12-20',
	                end: '2016-09-09'
	            },
	            datetime: {
	                value: new Date(),
	                begin: new Date(),
	                end: '2017-02-01 00:00:00'
	            },
	            time: {
	                value: ''
	            }
	        };
	    },

	    methods: {
	        onChange: function onChange(val, oldVal) {
	            console.log(val);
	            console.log(oldVal);
	        }
	    }
	};

/***/ },
/* 214 */
/***/ function(module, exports) {

	module.exports = "<div><h1>datepicker 日期选择框</h1>\n<h2>使用场景</h2>\n<ul>\n<li>支持日历筛选，日历＋时间，时间筛选</li>\n<li>可以配置日期的筛选范围，日期格式</li>\n<li>对于时间的筛选，可以倍数形式定制筛选时间的值，例如分钟可以订制筛选值为15，30，45，60</li>\n<li>可以直接获取当前的时间</li>\n<li>年筛选可以直接输入，可以筛选</li>\n<li>支持定制皮肤颜色</li>\n</ul>\n<h1>DEMO</h1>\n<div class=\"xcui-demo-container col-md-12 col-xs-12 col-lg-12\">\n    <div class=\"col-md-12 col-xs-12 col-lg-12 xcui-example-container\">\n                    <h3>simple</h3>\n                    <div class=\"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6\">\n        <xcui-datepicker :value.sync=\"''\">\n        </xcui-datepicker>\n    </div>\n                    <div class=\"xcui-code-wrap col-xs-12 col-md-6 col-lg-6\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>xcui-datepicker</span> <span class=\"token attr-name\" >:value.sync</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >'</span><span class=\"token punctuation\" >'</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-datepicker</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n                    </div>\n    <p> 最简单的用法，value双向绑定，日期</p>\n    <p> value：可以传不同日期格式，例如：date对象 new Date()，日期字符串 2018-09-09，时间搓 1477980169262，也可以不传，默认当天，date.value值为 时间戳1477980088896</p>\n  <div class=\"col-md-12 col-xs-12 col-lg-12 xcui-example-container\">\n                    <h3>日期格式</h3>\n                    <div class=\"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6\">\n    <xcui-datepicker\n        :value.sync=\"date.value\"\n        format=\"YYYY-MM-DD\"\n        :min-date=\"datetime.begin\"\n        :max-date=\"'2016-11-10'\">\n    </xcui-datepicker>\n  </div>\n                    <div class=\"xcui-code-wrap col-xs-12 col-md-6 col-lg-6\"><pre>\n&lt;xcui-datepicker\n    :value.sync=\"date.value\"\n    format=\"YYYY-MM-DD\"\n        :min-date=\"datetime.begin\"\n    :max-date=\"'2016-11-10'\">\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-datepicker</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n                    </div>\n  <p> format：展示的日期格式，配置例如，分隔符可自选：年-月-日 YYYY-MM-DD，年/月/日 时：分：秒 YYYY/MM/DD hh:mm:ss， 时:分:秒 hh:mm:ss</p>\n  <p> min-date：日期可选最小值，值类型同value，datetime.begin值为 new Date()</p>\n  <p> max-date：日期可选最大值，值类型同value</p>\n  <div class=\"col-md-12 col-xs-12 col-lg-12 xcui-example-container\">\n                    <h3>日期+时间选择</h3>\n                    <div class=\"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6\">\n    <xcui-datepicker\n        :value.sync=\"datetime.value\"\n        format=\"YYYY/MM/DD hh:mm:ss\"\n        :hour-range=\"'3'\"\n        :minute-range=\"'10'\"\n        :second-range=\"'20'\"\n        :min-date=\"datetime.begin\"\n        :max-date=\"datetime.end\">\n    </xcui-datepicker>\n  </div>\n                    <div class=\"xcui-code-wrap col-xs-12 col-md-6 col-lg-6\"><pre>\n&lt;xcui-datepicker\n    :value.sync=\"datetime.value\"\n    format=\"YYYY/MM/DD hh:mm:ss\"\n        :hour-range=\"'3'\"\n    :minute-range=\"'10'\"\n    :second-range=\"'20'\"\n    :min-date=\"datetime.begin\"\n    :max-date=\"datetime.end\">\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-datepicker</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n                    </div>\n  <p> hour-range：小时可选值设置（例如：值为 3 时，小时可选值为0, 3，6，9，12</p>\n  <p> minute-range：分钟可选值设置，同上</p>\n  <p> second-range：分钟可选值设置，同上</p>\n  <div class=\"col-md-12 col-xs-12 col-lg-12 xcui-example-container\">\n                    <h3>样式以及回调配置</h3>\n                    <div class=\"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6\">\n    <xcui-datepicker\n        class-name=\"class-name\"\n        color=\"pink\"\n        format=\"YYYY-MM-DD hh:mm:ss\"\n        :btn-show=\"true\"\n        @on-change=\"onChange\"\n        :value.sync=\"datetime.value\"\n        :hour-range=\"'3'\">\n    </xcui-datepicker>\n  </div>\n                    <div class=\"xcui-code-wrap col-xs-12 col-md-6 col-lg-6\"><pre>\n&lt;xcui-datepicker\n    class-name=\"class-name\"\n        color=\"pink\"\n        format=\"YYYY-MM-DD hh:mm:ss\"\n        :btn-show=\"true\"\n    @on-change=\"onChange\"\n    :value.sync=\"datetime.value\"\n    :hour-range=\"'3'\">\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-datepicker</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n                    </div>\n  <p> class-name：日历样式，class名字</p>\n  <p> color：按钮颜色，值为颜色值，例如：#f00,pink</p>\n  <p> on-change：选择日期后的回调，参数 val(当前值) oldval(上次值)，onChange(val, oldVal) {}</p>\n  <p> btn-show: 按钮是否显示</p>\n  <div class=\"col-md-12 col-xs-12 col-lg-12 xcui-example-container\">\n                    <h3>时间选择</h3>\n                    <div class=\"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6\">\n      <div class=\"input-group\">\n        <xcui-datepicker\n            value.sync=\"''\"\n            format=\"hh:mm:ss\">\n        </xcui-datepicker>\n      </div>\n  </div>\n                    <div class=\"xcui-code-wrap col-xs-12 col-md-6 col-lg-6\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>input-group<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>xcui-datepicker\n</span>            <span class=\"token attr-name\" >value.sync</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >'</span><span class=\"token punctuation\" >'</span><span class=\"token punctuation\" >\"</span></span>\n            <span class=\"token attr-name\" >format</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>hh:mm:ss<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-datepicker</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n                    </div>\n  <p> 最简单的时间用法</p>\n</div>\n<h2>组件依赖</h2>\n<blockquote>\n<p>无</p>\n</blockquote>\n<h2>Props</h2>\n<table class=\"table\">\n<thead>\n<tr>\n<th>名字</th>\n<th>类型</th>\n<th>默认</th>\n<th>描述</th>\n<th>是否双向绑定</th>\n<th>是否必选</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>String/object/Number</td>\n<td>无</td>\n<td>日期 例如：date对象 new Date()，日期字符串 2018-09-09，时间搓 1477980169262</td>\n<td>双向绑定</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>format</td>\n<td>String</td>\n<td>YYYY-MM-DD</td>\n<td>展示的日期格式，配置例如，分隔符可自选：年-月-日 YYYY-MM-DD，年-月-日 时：分：秒 YYYY-MM-DD hh:mm:ss， 时/分/秒 hh/mm/ss</td>\n<td>静态属性</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>minDate</td>\n<td>String</td>\n<td>无</td>\n<td>日期可选最小值</td>\n<td>否</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>maxDate</td>\n<td>String</td>\n<td>无</td>\n<td>日期可选最大值</td>\n<td>否</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>hourRange</td>\n<td>Number</td>\n<td>1</td>\n<td>小时可选值设置（例如：值为 3 时，小时可选值为0, 3，6，9，12 …）</td>\n<td>否</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>minuteRange</td>\n<td>Number</td>\n<td>1</td>\n<td>分可选值设置（例如：值为 20 时，分可选值为0, 20，40，60）</td>\n<td>否</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>secondRange</td>\n<td>Number</td>\n<td>1</td>\n<td>秒可选值设置（例如：值为 20 时，分可选值为0, 20，40，60）</td>\n<td>否</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>color</td>\n<td>String</td>\n<td>无</td>\n<td>订制按钮颜色，值为颜色值，例如：#f00,pink</td>\n<td>静态属性</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>btnShow</td>\n<td>boolean</td>\n<td>无</td>\n<td>是否显示日历后面的按钮</td>\n<td>否</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>class-name</td>\n<td>String</td>\n<td>无</td>\n<td>日历样式，class名字</td>\n<td>静态属性</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>object</td>\n<td>无</td>\n<td>选择日期后的回调，参数 val(当前值) oldval(上次值) @onChange</td>\n<td>否</td>\n<td>可选</td>\n</tr>\n</tbody>\n</table>\n</div>";

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(216)
	__vue_script__ = __webpack_require__(218)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\demos\\dateRangePicker.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(219)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-10ac7b7a/dateRangePicker.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(217);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.23.1@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../node_modules/.2.2.3@less-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./dateRangePicker.vue", function() {
				var newContent = require("!!./../../node_modules/.0.23.1@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../node_modules/.2.2.3@less-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./dateRangePicker.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, ".class-name {\n  width: 400px;\n}\n", ""]);

	// exports


/***/ },
/* 218 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    data: function data() {
	        return {
	            date: {
	                type: 'date',
	                begin: '2015-12-20',
	                end: '2016-11-20',
	                dateLimit: {
	                    months: 1
	                },
	                color: '#f00'
	            },
	            datetime: {
	                type: 'datetime',
	                begin: '2015-12-20',
	                end: '2017-11-20',
	                dateLimit: {
	                    days: 5
	                },
	                color: '#f00',
	                btnShow: true
	            },
	            time: {
	                type: 'time',
	                inputClass: 'class-name',
	                btnShow: true
	            }
	        };
	    },

	    methods: {
	        onChange: function onChange(startDate, endDate) {
	            console.log('startDate' + startDate);
	            console.log('endDate' + endDate);
	        }
	    }
	};

/***/ },
/* 219 */
/***/ function(module, exports) {

	module.exports = "<div><h1>daterangepicker 双日期选择框</h1>\n<h2>使用场景</h2>\n<ul>\n<li>支持日历筛选，日历＋时间，时间筛选</li>\n<li>可以配置日期的筛选范围，日期格式</li>\n<li>对于时间的筛选，可以倍数形式定制筛选时间的值，例如分钟可以订制筛选值为15，30，45，60</li>\n<li>可以直接获取当前的时间</li>\n<li>年筛选可以直接输入，可以筛选</li>\n<li>支持定制皮肤颜色</li>\n</ul>\n<h2>应用指南</h2>\n<p>要把datepicker放在一个拥有定位属性的容器中,因为datepicker是相对父级元素定位的。</p>\n<h2>DEMO</h2>\n<div class=\"xcui-demo-container col-md-12 col-xs-12 col-lg-12\">\n    <div class=\"col-md-12 col-xs-12 col-lg-12 xcui-example-container\">\n                    <h3>simple</h3>\n                    <div class=\"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6\">\n        <xcui-daterangepicker\n            :start-date.sync=\"''\"\n            :end-date.sync=\"''\">\n        </xcui-daterangepicker>\n    </div>\n                    <div class=\"xcui-code-wrap col-xs-12 col-md-6 col-lg-6\"><pre>\n&lt;xcui-daterangepicker\n    :start-date.sync=\"''\"\n    :end-date.sync=\"''\">\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-daterangepicker</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n                    </div>\n    <p> 最简单的用法，startDate：日期开始时间，endDate：日期结束时间, 格式</p>\n    <p> startDate／endDate：可以传不同日期格式，例如：date对象 new Date()，日期字符串 2018-09-09，时间搓 1477980169262，也可以不传，默认当天，date.value值为 时间戳1477980088896</p>\n    <div class=\"col-md-12 col-xs-12 col-lg-12 xcui-example-container\">\n                    <h3>日期格式</h3>\n                    <div class=\"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6\">\n        <xcui-daterangepicker\n            :start-date.sync=\"''\"\n            :end-date.sync=\"''\"\n            :min-date=\"'2015/12/20'\"\n            :max-date=\"'2016/11/20'\"\n            :date-limit=\"date.dateLimit\">\n        </xcui-daterangepicker>\n    </div>\n                    <div class=\"xcui-code-wrap col-xs-12 col-md-6 col-lg-6\"><pre>\n&lt;xcui-daterangepicker\n    :start-date.sync=\"''\"\n    :end-date.sync=\"''\"\n    :min-date=\"'2015/12/20'\"\n    :max-date=\"'2016/11/20'\"\n    :date-limit=\"date.dateLimit\">\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-daterangepicker</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n                    </div>\n    <p> format,min-date,max-date同datapicker组件配置</p>\n    <p> date-limit：可选时间范围限制，例如：dateLimit: {months: 1} 一个月 dateLimit: {days: 20} 20天</p>\n    <div class=\"col-md-12 col-xs-12 col-lg-12 xcui-example-container\">\n                    <h3>日期 + 时间选择</h3>\n                    <div class=\"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6\">\n        <xcui-daterangepicker\n              format=\"YYYY-MM-DD hh:mm:ss\"\n              :start-date.sync=\"'2016-09-08 00:02:00'\"\n              :end-date.sync=\"'2016-09-13 00:02:00'\"\n              :hour-range=\"'3'\"\n              :minute-range=\"'10'\"\n              :second-range=\"'20'\">\n        </xcui-daterangepicker>\n    </div>\n                    <div class=\"xcui-code-wrap col-xs-12 col-md-6 col-lg-6\"><pre>\n&lt;xcui-daterangepicker\n      format=\"YYYY-MM-DD hh:mm:ss\"\n              :start-date.sync=\"'2016-09-08 00:02:00'\"\n      :end-date.sync=\"'2016-09-13 00:02:00'\"\n      :hour-range=\"'3'\"\n      :minute-range=\"'10'\"\n      :second-range=\"'20'\">\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-daterangepicker</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n                    </div>\n    <p> hour-range：小时可选值设置（例如：值为 3 时，小时可选值为0, 3，6，9，12</p>\n    <p> minute-range：分钟可选值设置，同上</p>\n    <p> second-range：分钟可选值设置，同上</p>\n    <div class=\"col-md-12 col-xs-12 col-lg-12 xcui-example-container\">\n                    <h3>样式以及回调配置</h3>\n                    <div class=\"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6\">\n        <xcui-daterangepicker\n            class-name=\"class-name\"\n            color=\"pink\"\n            format=\"YYYY-MM-DD hh:mm:ss\"\n            :btn-show=\"true\"\n            @on-change=\"onChange\"\n            :hour-range=\"'3'\">\n        </xcui-daterangepicker>\n    </div>\n                    <div class=\"xcui-code-wrap col-xs-12 col-md-6 col-lg-6\"><pre>\n&lt;xcui-daterangepicker\n    class-name=\"class-name\"\n            color=\"pink\"\n            format=\"YYYY-MM-DD hh:mm:ss\"\n            :btn-show=\"true\"\n    @on-change=\"onChange\"\n    :hour-range=\"'3'\">\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-daterangepicker</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n                    </div>\n    <p> class-name：日历样式，class名字</p>\n    <p> color：按钮颜色，值为颜色值，例如：#f00,pink</p>\n    <p> on-change：选择日期后的回调，参数 val(当前值) oldval(上次值)，onChange(val, oldVal) {}</p>\n    <p> btn-show: 按钮是否显示</p>\n    <div class=\"col-md-12 col-xs-12 col-lg-12 xcui-example-container\">\n                    <h3>时间选择</h3>\n                    <div class=\"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6\">\n        <xcui-daterangepicker\n              :start-date.sync=\"'04:02:03'\"\n              :end-date.sync=\"'05:02:03'\"\n              format=\"hh:mm:ss\">\n        </xcui-daterangepicker>\n    </div>\n                    <div class=\"xcui-code-wrap col-xs-12 col-md-6 col-lg-6\"><pre>\n&lt;xcui-daterangepicker\n      :start-date.sync=\"'04:02:03'\"\n      :end-date.sync=\"'05:02:03'\"\n      format=\"hh:mm:ss\">\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-daterangepicker</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n                    </div>\n</div>\n<h3>日历选择，日期＋时间选择</h3>\n<h4>Props</h4>\n<table class=\"table\">\n<thead>\n<tr>\n<th>名字</th>\n<th>类型</th>\n<th>默认</th>\n<th>描述</th>\n<th>是否双向绑定</th>\n<th>是否必选</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>startDate</td>\n<td>String</td>\n<td>无</td>\n<td>日期开始时间</td>\n<td>双向绑定</td>\n<td>必选</td>\n</tr>\n<tr>\n<td>endDate</td>\n<td>String</td>\n<td>无</td>\n<td>日期结束时间</td>\n<td>双向绑定</td>\n<td>必选</td>\n</tr>\n<tr>\n<td>minDate</td>\n<td>String</td>\n<td>无</td>\n<td>日期可选最小值</td>\n<td>否</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>maxdate</td>\n<td>String</td>\n<td>无</td>\n<td>日期可选最大值</td>\n<td>否</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>format</td>\n<td>String</td>\n<td>YYYY-MM-DD</td>\n<td>展示的日期格式，配置例如，分隔符可自选：年-月-日 YYYY-MM-DD，年-月-日 时：分：秒 YYYY-MM-DD hh:mm:ss， 时/分/秒 hh/mm/ss</td>\n<td>静态属性</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>dateLimit</td>\n<td>object</td>\n<td>null</td>\n<td>可选时间范围限制，例如：dateLimit: {months: 1} 一个月 dateLimit: {days: 20} 20天</td>\n<td>否</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>hourRange</td>\n<td>Number</td>\n<td>1</td>\n<td>小时可选值设置（例如：值为 3 时，小时可选值为0，3，6，9，12 …）</td>\n<td>否</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>minuteRange</td>\n<td>Number</td>\n<td>1</td>\n<td>分可选值设置（例如：值为 20 时，分可选值为0，20，40）</td>\n<td>否</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>secondRange</td>\n<td>Number</td>\n<td>1</td>\n<td>秒可选值设置（例如：值为 20 时，分可选值为0，20，40）</td>\n<td>否</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>color</td>\n<td>String</td>\n<td>无</td>\n<td>订制按钮颜色，值为颜色值，例如：#f00,pink</td>\n<td>否</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>btnShow</td>\n<td>boolean</td>\n<td>无</td>\n<td>是否显示日历后面的按钮</td>\n<td>否</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>inputClass</td>\n<td>Array</td>\n<td>无</td>\n<td>日历input输入框的样式，class名字</td>\n<td>否</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>object</td>\n<td>无</td>\n<td>选择日期后的回调，参数 val(当前值) oldval(上次值) @onChange</td>\n<td>否</td>\n<td>可选</td>\n</tr>\n</tbody>\n</table>\n</div>";

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(221)
	__vue_script__ = __webpack_require__(223)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\demos\\select.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(228)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-8f2797a2/select.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(222);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.23.1@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../node_modules/.2.2.3@less-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./select.vue", function() {
				var newContent = require("!!./../../node_modules/.0.23.1@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../node_modules/.2.2.3@less-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./select.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, ".select-demo,\n.xcui-select {\n  width: 200px !important;\n}\n", ""]);

	// exports


/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _jsonp = __webpack_require__(224);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    data: function data() {
	        return {
	            dataSource: [{
	                name: 'jake',
	                label: 'jake',
	                text: '测试1',
	                disable: true
	            }, {
	                name: 2,
	                label: 2,
	                text: '测试2'
	            }, {
	                name: 3,
	                label: 3,
	                text: '测试3'
	            }, {
	                name: 4,
	                label: 4,
	                text: '测试4'
	            }],
	            dataSourceDisable: [{
	                name: 'jake',
	                label: 'jake',
	                text: '测试1',
	                disable: true
	            }, {
	                name: 2,
	                label: 2,
	                text: '测试2'
	            }, {
	                name: 3,
	                label: 3,
	                text: '测试3'
	            }, {
	                name: 4,
	                label: 4,
	                text: '测试4'
	            }],
	            dataSource2: ['js', 'python', 'java', 'ruby', 'markdown', 'php', 'css', 'less'],
	            asyncSearchSource: [],
	            serverSearchSource: [],
	            serverSearchValue: '',
	            localSearchSource: ['北京', '南京', '天津', '上海', '静安', '刘安', '安徽', '南充', '广州', '西宁', 'angular', 'vue', 'test', 'fis', 'node', 'express', 'koa', 'connect'],
	            localSearchValue: '',
	            localSearchResult: '',
	            optgroupDefaultValue: '1',
	            optgroupSource: [{
	                name: 'group 1',
	                options: ['1', '2', '3']
	            }, {
	                name: 'group 2',
	                options: ['11', '12', '13']
	            }],
	            optgroupSource2: [{
	                name: 'group 1',
	                options: [{
	                    name: 'name1',
	                    label: 1,
	                    text: '测试1',
	                    disable: true
	                }, {
	                    name: 'name2',
	                    label: 2,
	                    text: '测试2'
	                }, {
	                    name: 'name3',
	                    label: 3,
	                    text: '测试3'
	                }, {
	                    name: 'name4',
	                    label: 4,
	                    text: '测试4'
	                }]
	            }],
	            optgroupValue: '',
	            multipleObjOptions: [{
	                name: '1',
	                label: '1',
	                disabled: true
	            }, {
	                name: '2',
	                label: '2',
	                disabled: true
	            }, {
	                name: '3',
	                label: '3',
	                disabled: true
	            }],
	            multipleDefaultValue: [],
	            multipleDefaultValue2: [2, 4],
	            value: '',
	            value2: '',
	            disable: true,
	            defaultValue: 'css',
	            closeAfterSelect: true,

	            selectProvinceValue: '',
	            selectCityValue: '',
	            provinceData: ['浙江', '江苏'],
	            selectCityData: [],
	            cityData: {
	                浙江: ['杭州', '宁波', '温州'],
	                江苏: ['南京', '苏州', '镇江']
	            }
	        };
	    },

	    watch: {
	        'selectProvinceValue': function selectProvinceValue(province) {
	            this.selectCityData = this.cityData[province] || null;
	            this.selectCityValue = '';
	        }
	    },
	    created: function created() {
	        var me = this;
	        setTimeout(function () {
	            me.optgroupDefaultValue = '11';
	        }, 1000);
	    },

	    methods: {
	        selectChange: function selectChange(v) {
	            this.value = v;
	        },
	        selectChange2: function selectChange2(v) {
	            this.value2 = v;
	        },
	        reRenderLabel: function reRenderLabel(item) {
	            return item.text + ' - ' + item.name;
	        },
	        reRender: function reRender(item) {
	            return '' + item;
	        },
	        onSelect: function onSelect(_ref) {
	            var name = _ref.name;
	        },
	        onSelect2: function onSelect2(value) {
	            this.defaultValue = value;
	        },
	        provinceChange: function provinceChange(value) {
	            this.selectProvinceValue = value;
	        },
	        cityChange: function cityChange(value) {
	            this.selectCityValue = value;
	        },
	        searchChange: function searchChange(v) {
	            this.localSearchValue = v;
	        },
	        localSearchChange: function localSearchChange(value) {
	            this.localSearchResult = value;
	        },
	        asyncSearchChange: function asyncSearchChange(v) {
	            var emails = ['gmail.com', '163.com', 'qq.com'];
	            if (v && v.indexOf('@') < 1) {
	                this.asyncSearchSource = emails.map(function (item) {
	                    return v + '@' + item;
	                });
	            } else {
	                this.asyncSearchSource = [];
	            }
	        },
	        asyncSearchOnChange: function asyncSearchOnChange(v) {
	            console.log('asycn select:' + v);
	        },
	        serverSearchChange: function serverSearchChange(v) {
	            var me = this;
	            window.selectsug = function (res) {
	                me.serverSearchSource = res.s;
	            };
	            (0, _jsonp2.default)('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?cb=window.selectsug&wd=' + v);
	        },
	        serverSearchOnChange: function serverSearchOnChange(v) {
	            this.serverSearchValue = v;
	        },
	        optgroupOnChange: function optgroupOnChange(value, groupIndex, valueIndex) {
	            console.log('optgroupOnChange: ', value, 'groupIndex:', groupIndex, 'valueIndex:', valueIndex);
	        },
	        optgroupOnChange2: function optgroupOnChange2(value, groupIndex, valueIndex) {
	            console.log('optgroupOnChange2: ', value, 'groupIndex:', groupIndex, 'valueIndex:', valueIndex);
	        },
	        multipleOnChange: function multipleOnChange(v) {
	            console.log('multipleOnChange', v);
	        },
	        multipleOnRemove: function multipleOnRemove(v) {
	            console.log('multipleOnRemove', v);
	        },
	        multipleObjectOnChange: function multipleObjectOnChange(v) {
	            console.log('multipleObjectOnChange', v);
	        },
	        multipleObjectOnRemove: function multipleObjectOnRemove(v) {
	            console.log('multipleObjectOnRemove', v);
	        }
	    }
	};

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies
	 */

	var debug = __webpack_require__(225)('jsonp');

	/**
	 * Module exports.
	 */

	module.exports = jsonp;

	/**
	 * Callback index.
	 */

	var count = 0;

	/**
	 * Noop function.
	 */

	function noop(){}

	/**
	 * JSONP handler
	 *
	 * Options:
	 *  - param {String} qs parameter (`callback`)
	 *  - prefix {String} qs parameter (`__jp`)
	 *  - name {String} qs parameter (`prefix` + incr)
	 *  - timeout {Number} how long after a timeout error is emitted (`60000`)
	 *
	 * @param {String} url
	 * @param {Object|Function} optional options / callback
	 * @param {Function} optional callback
	 */

	function jsonp(url, opts, fn){
	  if ('function' == typeof opts) {
	    fn = opts;
	    opts = {};
	  }
	  if (!opts) opts = {};

	  var prefix = opts.prefix || '__jp';

	  // use the callback name that was passed if one was provided.
	  // otherwise generate a unique name by incrementing our counter.
	  var id = opts.name || (prefix + (count++));

	  var param = opts.param || 'callback';
	  var timeout = null != opts.timeout ? opts.timeout : 60000;
	  var enc = encodeURIComponent;
	  var target = document.getElementsByTagName('script')[0] || document.head;
	  var script;
	  var timer;


	  if (timeout) {
	    timer = setTimeout(function(){
	      cleanup();
	      if (fn) fn(new Error('Timeout'));
	    }, timeout);
	  }

	  function cleanup(){
	    if (script.parentNode) script.parentNode.removeChild(script);
	    window[id] = noop;
	    if (timer) clearTimeout(timer);
	  }

	  function cancel(){
	    if (window[id]) {
	      cleanup();
	    }
	  }

	  window[id] = function(data){
	    debug('jsonp got', data);
	    cleanup();
	    if (fn) fn(null, data);
	  };

	  // add qs component
	  url += (~url.indexOf('?') ? '&' : '?') + param + '=' + enc(id);
	  url = url.replace('?&', '?');

	  debug('jsonp req "%s"', url);

	  // create script
	  script = document.createElement('script');
	  script.src = url;
	  target.parentNode.insertBefore(script, target);

	  return cancel;
	}


/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the web browser implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = __webpack_require__(226);
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;

	/**
	 * Use chrome.storage.local if we are in an app
	 */

	var storage;

	if (typeof chrome !== 'undefined' && typeof chrome.storage !== 'undefined')
	  storage = chrome.storage.local;
	else
	  storage = localstorage();

	/**
	 * Colors.
	 */

	exports.colors = [
	  'lightseagreen',
	  'forestgreen',
	  'goldenrod',
	  'dodgerblue',
	  'darkorchid',
	  'crimson'
	];

	/**
	 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
	 * and the Firebug extension (any Firefox version) are known
	 * to support "%c" CSS customizations.
	 *
	 * TODO: add a `localStorage` variable to explicitly enable/disable colors
	 */

	function useColors() {
	  // is webkit? http://stackoverflow.com/a/16459606/376773
	  return ('WebkitAppearance' in document.documentElement.style) ||
	    // is firebug? http://stackoverflow.com/a/398120/376773
	    (window.console && (console.firebug || (console.exception && console.table))) ||
	    // is firefox >= v31?
	    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
	    (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31);
	}

	/**
	 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	 */

	exports.formatters.j = function(v) {
	  return JSON.stringify(v);
	};


	/**
	 * Colorize log arguments if enabled.
	 *
	 * @api public
	 */

	function formatArgs() {
	  var args = arguments;
	  var useColors = this.useColors;

	  args[0] = (useColors ? '%c' : '')
	    + this.namespace
	    + (useColors ? ' %c' : ' ')
	    + args[0]
	    + (useColors ? '%c ' : ' ')
	    + '+' + exports.humanize(this.diff);

	  if (!useColors) return args;

	  var c = 'color: ' + this.color;
	  args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));

	  // the final "%c" is somewhat tricky, because there could be other
	  // arguments passed either before or after the %c, so we need to
	  // figure out the correct index to insert the CSS into
	  var index = 0;
	  var lastC = 0;
	  args[0].replace(/%[a-z%]/g, function(match) {
	    if ('%%' === match) return;
	    index++;
	    if ('%c' === match) {
	      // we only are interested in the *last* %c
	      // (the user may have provided their own)
	      lastC = index;
	    }
	  });

	  args.splice(lastC, 0, c);
	  return args;
	}

	/**
	 * Invokes `console.log()` when available.
	 * No-op when `console.log` is not a "function".
	 *
	 * @api public
	 */

	function log() {
	  // this hackery is required for IE8/9, where
	  // the `console.log` function doesn't have 'apply'
	  return 'object' === typeof console
	    && console.log
	    && Function.prototype.apply.call(console.log, console, arguments);
	}

	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */

	function save(namespaces) {
	  try {
	    if (null == namespaces) {
	      storage.removeItem('debug');
	    } else {
	      storage.debug = namespaces;
	    }
	  } catch(e) {}
	}

	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */

	function load() {
	  var r;
	  try {
	    r = storage.debug;
	  } catch(e) {}
	  return r;
	}

	/**
	 * Enable namespaces listed in `localStorage.debug` initially.
	 */

	exports.enable(load());

	/**
	 * Localstorage attempts to return the localstorage.
	 *
	 * This is necessary because safari throws
	 * when a user disables cookies/localstorage
	 * and you attempt to access it.
	 *
	 * @return {LocalStorage}
	 * @api private
	 */

	function localstorage(){
	  try {
	    return window.localStorage;
	  } catch (e) {}
	}


/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = debug;
	exports.coerce = coerce;
	exports.disable = disable;
	exports.enable = enable;
	exports.enabled = enabled;
	exports.humanize = __webpack_require__(227);

	/**
	 * The currently active debug mode names, and names to skip.
	 */

	exports.names = [];
	exports.skips = [];

	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lowercased letter, i.e. "n".
	 */

	exports.formatters = {};

	/**
	 * Previously assigned color.
	 */

	var prevColor = 0;

	/**
	 * Previous log timestamp.
	 */

	var prevTime;

	/**
	 * Select a color.
	 *
	 * @return {Number}
	 * @api private
	 */

	function selectColor() {
	  return exports.colors[prevColor++ % exports.colors.length];
	}

	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */

	function debug(namespace) {

	  // define the `disabled` version
	  function disabled() {
	  }
	  disabled.enabled = false;

	  // define the `enabled` version
	  function enabled() {

	    var self = enabled;

	    // set `diff` timestamp
	    var curr = +new Date();
	    var ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;

	    // add the `color` if not set
	    if (null == self.useColors) self.useColors = exports.useColors();
	    if (null == self.color && self.useColors) self.color = selectColor();

	    var args = Array.prototype.slice.call(arguments);

	    args[0] = exports.coerce(args[0]);

	    if ('string' !== typeof args[0]) {
	      // anything else let's inspect with %o
	      args = ['%o'].concat(args);
	    }

	    // apply any `formatters` transformations
	    var index = 0;
	    args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
	      // if we encounter an escaped % then don't increase the array index
	      if (match === '%%') return match;
	      index++;
	      var formatter = exports.formatters[format];
	      if ('function' === typeof formatter) {
	        var val = args[index];
	        match = formatter.call(self, val);

	        // now we need to remove `args[index]` since it's inlined in the `format`
	        args.splice(index, 1);
	        index--;
	      }
	      return match;
	    });

	    if ('function' === typeof exports.formatArgs) {
	      args = exports.formatArgs.apply(self, args);
	    }
	    var logFn = enabled.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }
	  enabled.enabled = true;

	  var fn = exports.enabled(namespace) ? enabled : disabled;

	  fn.namespace = namespace;

	  return fn;
	}

	/**
	 * Enables a debug mode by namespaces. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} namespaces
	 * @api public
	 */

	function enable(namespaces) {
	  exports.save(namespaces);

	  var split = (namespaces || '').split(/[\s,]+/);
	  var len = split.length;

	  for (var i = 0; i < len; i++) {
	    if (!split[i]) continue; // ignore empty strings
	    namespaces = split[i].replace(/\*/g, '.*?');
	    if (namespaces[0] === '-') {
	      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	    } else {
	      exports.names.push(new RegExp('^' + namespaces + '$'));
	    }
	  }
	}

	/**
	 * Disable debug output.
	 *
	 * @api public
	 */

	function disable() {
	  exports.enable('');
	}

	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */

	function enabled(name) {
	  var i, len;
	  for (i = 0, len = exports.skips.length; i < len; i++) {
	    if (exports.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (i = 0, len = exports.names.length; i < len; i++) {
	    if (exports.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
	}

	/**
	 * Coerce `val`.
	 *
	 * @param {Mixed} val
	 * @return {Mixed}
	 * @api private
	 */

	function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
	}


/***/ },
/* 227 */
/***/ function(module, exports) {

	/**
	 * Helpers.
	 */

	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var y = d * 365.25;

	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} options
	 * @return {String|Number}
	 * @api public
	 */

	module.exports = function(val, options){
	  options = options || {};
	  if ('string' == typeof val) return parse(val);
	  return options.long
	    ? long(val)
	    : short(val);
	};

	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */

	function parse(str) {
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
	  if (!match) return;
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	  }
	}

	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function short(ms) {
	  if (ms >= d) return Math.round(ms / d) + 'd';
	  if (ms >= h) return Math.round(ms / h) + 'h';
	  if (ms >= m) return Math.round(ms / m) + 'm';
	  if (ms >= s) return Math.round(ms / s) + 's';
	  return ms + 'ms';
	}

	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function long(ms) {
	  return plural(ms, d, 'day')
	    || plural(ms, h, 'hour')
	    || plural(ms, m, 'minute')
	    || plural(ms, s, 'second')
	    || ms + ' ms';
	}

	/**
	 * Pluralization helper.
	 */

	function plural(ms, n, name) {
	  if (ms < n) return;
	  if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
	  return Math.ceil(ms / n) + ' ' + name + 's';
	}


/***/ },
/* 228 */
/***/ function(module, exports) {

	module.exports = "<div><h1>Select多功能选择框</h1>\n<h2>使用场景</h2>\n<ol>\n<li>替代原生下拉框，支持多选</li>\n<li>支持Array, Object等格式</li>\n<li>支持进行输入建议，远程搜索等</li>\n<li>支持optionGroup</li>\n</ol>\n<h2>DEMO</h2>\n<div class=\"xcui-demo-container col-md-12 col-xs-12 col-lg-12\">\n    <div class=\"col-md-12 col-xs-12 col-lg-12 xcui-example-container\">\n                    <h3>single - 基本模式 options(Array)</h3>\n                    <div class=\"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6\">\n        <xcui-select\n            @change=\"selectChange2\"\n            :options=\"dataSource2\">\n        </xcui-select>\n    </div>\n                    <div class=\"xcui-code-wrap col-xs-12 col-md-6 col-lg-6\"><pre>\n&lt;xcui-select\n    @change=\"selectChange2\"\n    :options=\"dataSource2\">\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-select</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n                    </div>\n    <div class=\"col-md-12 col-xs-12 col-lg-12 xcui-example-container\">\n                    <h3>single - 基本模式 options(Object)</h3>\n                    <div class=\"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6\">\n        <xcui-select\n             @change=\"selectChange\"\n             :options=\"dataSource\"></xcui-select>\n    </div>\n                    <div class=\"xcui-code-wrap col-xs-12 col-md-6 col-lg-6\"><pre>\n&lt;xcui-select\n     @change=\"selectChange\"\n     :options=\"dataSource\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-select</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n                    </div>\n    <div class=\"col-md-12 col-xs-12 col-lg-12 xcui-example-container\">\n                    <h3>自定义label的字段(label='text')</h3>\n                    <div class=\"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6\">\n        <xcui-select label=\"text\"\n            @change=\"selectChange\"\n            :options=\"dataSource\"></xcui-select>\n    </div>\n                    <div class=\"xcui-code-wrap col-xs-12 col-md-6 col-lg-6\"><pre>\n&lt;xcui-select label=\"text\"\n    @change=\"selectChange\"\n    :options=\"dataSource\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-select</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n                    </div>\n    <div class=\"col-md-12 col-xs-12 col-lg-12 xcui-example-container\">\n                    <h3>禁用(:disabled)</h3>\n                    <div class=\"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6\">\n        <xcui-select :disabled=\"disable\"\n             @change=\"selectChange\"\n             :options=\"dataSource\"></xcui-select>\n    </div>\n                    <div class=\"xcui-code-wrap col-xs-12 col-md-6 col-lg-6\"><pre>\n&lt;xcui-select :disabled=\"disable\"\n     @change=\"selectChange\"\n     :options=\"dataSource\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-select</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n                    </div>\n    <div class=\"col-md-12 col-xs-12 col-lg-12 xcui-example-container\">\n                    <h3>定制label(:custom-label)</h3>\n                    <div class=\"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6\">\n        <xcui-select :custom-label=\"reRenderLabel\"\n            @change=\"selectChange2\"\n            :options=\"dataSource\"></xcui-select>\n    </div>\n                    <div class=\"xcui-code-wrap col-xs-12 col-md-6 col-lg-6\"><pre>\n&lt;xcui-select :custom-label=\"reRenderLabel\"\n    @change=\"selectChange2\"\n    :options=\"dataSource\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-select</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n                    </div>\n    <div class=\"col-md-12 col-xs-12 col-lg-12 xcui-example-container\">\n                    <h3>省市联动</h3>\n                    <div class=\"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6\">\n        <xcui-select placeholder=\"选择省\"\n            @change=\"provinceChange\"\n            :options=\"provinceData\"></xcui-select>\n        <xcui-select placeholder=\"选择市\"\n            @change=\"cityChange\"\n            :options=\"selectCityData\"></xcui-select>\n        <p>\n            {{selectProvinceValue}} - {{selectCityValue}}\n        </p>\n    </div>\n                    <div class=\"xcui-code-wrap col-xs-12 col-md-6 col-lg-6\"><pre>\n&lt;xcui-select placeholder=\"选择省\"\n    @change=\"provinceChange\"\n    :options=\"provinceData\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-select</span><span class=\"token punctuation\" >></span></span>\n&lt;xcui-select placeholder=\"选择市\"\n    @change=\"cityChange\"\n    :options=\"selectCityData\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-select</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span>selectProvinceValue<span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span> - <span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span>selectCityValue<span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n                    </div>\n    <div class=\"col-md-12 col-xs-12 col-lg-12 xcui-example-container\">\n                    <h3>input Local Search</h3>\n                    <div class=\"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6\">\n        <xcui-select class-name=\"select-demo\" placeholder=\"选择一个城市\"\n             show-search search-empty-text=\"没有搜索结果哎...\"\n             @search-change=\"searchChange\"\n             @change=\"localSearchChange\"\n             :options=\"localSearchSource\">\n        </xcui-select>\n        输入值: {{localSearchValue}}\n        选择结果: {{localSearchResult}}\n    </div>\n                    <div class=\"xcui-code-wrap col-xs-12 col-md-6 col-lg-6\"><pre>\n&lt;xcui-select class-name=\"select-demo\" placeholder=\"选择一个城市\"\n     show-search search-empty-text=\"没有搜索结果哎...\"\n             @search-change=\"searchChange\"\n     @change=\"localSearchChange\"\n     :options=\"localSearchSource\">\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-select</span><span class=\"token punctuation\" >></span></span>\n输入值: <span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span>localSearchValue<span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span>\n选择结果: <span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span>localSearchResult<span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span>\n</pre></div>\n                    </div>\n    <div class=\"col-md-12 col-xs-12 col-lg-12 xcui-example-container\">\n                    <h3>智能输入</h3>\n                    <div class=\"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6\">\n        <xcui-select class-name=\"select-demo\" placeholder=\"输入邮箱\"\n             show-search\n             @search-change=\"asyncSearchChange\"\n             @change=\"asyncSearchOnChange\"\n             :options=\"asyncSearchSource\">\n        </xcui-select>\n    </div>\n                    <div class=\"xcui-code-wrap col-xs-12 col-md-6 col-lg-6\"><pre>\n&lt;xcui-select class-name=\"select-demo\" placeholder=\"输入邮箱\"\n     show-search\n     @search-change=\"asyncSearchChange\"\n     @change=\"asyncSearchOnChange\"\n     :options=\"asyncSearchSource\">\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-select</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n                    </div>\n    <div class=\"col-md-12 col-xs-12 col-lg-12 xcui-example-container\">\n                    <h3>远程数据</h3>\n                    <div class=\"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6\">\n        远程搜索\n        <xcui-select class-name=\"select-demo\" placeholder=\"搜索\"\n             show-search\n             clear-on-select\n             @search-change=\"serverSearchChange\"\n             @change=\"serverSearchOnChange\"\n             :options=\"serverSearchSource\">\n        </xcui-select>\n        {{serverSearchValue}}\n        <br>\n        ajax请求不能耦合select组件, 提供EVENT(@search-change)让使用者进行数据获取 & options赋值\n    </div>\n                    <div class=\"xcui-code-wrap col-xs-12 col-md-6 col-lg-6\"><pre>\n远程搜索\n&lt;xcui-select class-name=\"select-demo\" placeholder=\"搜索\"\n     show-search\n     clear-on-select\n     @search-change=\"serverSearchChange\"\n     @change=\"serverSearchOnChange\"\n     :options=\"serverSearchSource\">\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-select</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span>serverSearchValue<span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span><span class=\"token punctuation\" >></span></span>\najax请求不能耦合select组件, 提供EVENT(@search-change)让使用者进行数据获取 &amp; options赋值\n</pre></div>\n                    </div>\n    <div class=\"col-md-12 col-xs-12 col-lg-12 xcui-example-container\">\n                    <h3>option Group (数据格式一)</h3>\n                    <div class=\"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6\">\n        <xcui-select class-name=\"select-demo\" placeholder=\"搜索\"\n                     optgroup\n                     @change=\"optgroupOnChange\"\n                     :selected=\"optgroupDefaultValue\"\n                     :options=\"optgroupSource\">\n        </xcui-select>\n    </div>\n                    <div class=\"xcui-code-wrap col-xs-12 col-md-6 col-lg-6\"><pre>\n&lt;xcui-select class-name=\"select-demo\" placeholder=\"搜索\"\n             optgroup\n             @change=\"optgroupOnChange\"\n             :selected=\"optgroupDefaultValue\"\n             :options=\"optgroupSource\">\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-select</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n                    </div>\n    <div class=\"col-md-12 col-xs-12 col-lg-12 xcui-example-container\">\n                    <h3>option Group (数据格式二)</h3>\n                    <div class=\"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6\">\n        <xcui-select class-name=\"select-demo\" placeholder=\"搜索\"\n                     optgroup\n                     label=\"name\"\n                     @change=\"optgroupOnChange2\"\n                     :options=\"optgroupSource2\">\n        </xcui-select>\n    </div>\n                    <div class=\"xcui-code-wrap col-xs-12 col-md-6 col-lg-6\"><pre>\n&lt;xcui-select class-name=\"select-demo\" placeholder=\"搜索\"\n             optgroup\n             label=\"name\"\n                     @change=\"optgroupOnChange2\"\n             :options=\"optgroupSource2\">\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-select</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n                    </div>\n    <div class=\"col-md-12 col-xs-12 col-lg-12 xcui-example-container\">\n                    <h3>multiple select</h3>\n                    <div class=\"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6\">\n        <xcui-select class-name=\"select-demo\" placeholder=\"选择多个\"\n                     multiple\n                     :selected=\"multipleDefaultValue\"\n                     @change=\"multipleOnChange\"\n                     @remove=\"multipleOnRemove\"\n                     :options=\"dataSource2\">\n        </xcui-select>\n    </div>\n                    <div class=\"xcui-code-wrap col-xs-12 col-md-6 col-lg-6\"><pre>\n&lt;xcui-select class-name=\"select-demo\" placeholder=\"选择多个\"\n             multiple\n             :selected=\"multipleDefaultValue\"\n             @change=\"multipleOnChange\"\n             @remove=\"multipleOnRemove\"\n             :options=\"dataSource2\">\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-select</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n                    </div>\n    <div class=\"col-md-12 col-xs-12 col-lg-12 xcui-example-container\">\n                    <h3>multiple select</h3>\n                    <div class=\"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6\">\n        <xcui-select class-name=\"select-demo\" placeholder=\"选择多个\"\n                     multiple\n                     :multiple-max=2\n                     :selected=\"multipleDefaultValue2\"\n                     :options=\"dataSource\">\n        </xcui-select>\n    </div>\n                    <div class=\"xcui-code-wrap col-xs-12 col-md-6 col-lg-6\"><pre>\n&lt;xcui-select class-name=\"select-demo\" placeholder=\"选择多个\"\n             multiple\n             :multiple-max=2\n             :selected=\"multipleDefaultValue2\"\n             :options=\"dataSource\">\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-select</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n                    </div>\n    <div class=\"col-md-12 col-xs-12 col-lg-12 xcui-example-container\">\n                    <h3>multiple select object</h3>\n                    <div class=\"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6\">\n        <xcui-select class-name=\"select-demo\"\n                     placeholder=\"选择多个\"\n                     multiple\n                     @change=\"multipleObjectOnChange\"\n                     @remove=\"multipleObjectOnRemove\"\n                     :options=\"multipleObjOptions\">\n        </xcui-select>\n    </div>\n                    <div class=\"xcui-code-wrap col-xs-12 col-md-6 col-lg-6\"><pre>\n&lt;xcui-select class-name=\"select-demo\"\n             placeholder=\"选择多个\"\n                     multiple\n             @change=\"multipleObjectOnChange\"\n             @remove=\"multipleObjectOnRemove\"\n             :options=\"multipleObjOptions\">\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-select</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n                    </div>\n</div>\n<h2>组件依赖</h2>\n<blockquote>\n<p><a href=\"https://www.npmjs.com/package/fuzzysearch\">fuzzysearch</a> 模糊搜索模块</p>\n</blockquote>\n<h2>Props</h2>\n<table class=\"table\">\n<thead>\n<tr>\n<th>名字</th>\n<th>类型</th>\n<th>默认</th>\n<th>描述</th>\n<th>是否必选</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>className</td>\n<td>String</td>\n<td>无</td>\n<td>自定义css类名</td>\n<td>否</td>\n</tr>\n<tr>\n<td>placeholder</td>\n<td>String</td>\n<td>无</td>\n<td>选择框默认文字</td>\n<td>否</td>\n</tr>\n<tr>\n<td>optgroup</td>\n<td>Boolean</td>\n<td>false</td>\n<td>列表分组模式(结合options使用)</td>\n<td>否</td>\n</tr>\n<tr>\n<td>multiple</td>\n<td>Boolean</td>\n<td>false</td>\n<td>多选</td>\n<td>否</td>\n</tr>\n<tr>\n<td>showSearch</td>\n<td>Boolean</td>\n<td>false</td>\n<td>是否展示搜索框</td>\n<td>否</td>\n</tr>\n<tr>\n<td>clearOnSelect</td>\n<td>Boolean</td>\n<td>false</td>\n<td>选择完以后清除搜索内容</td>\n<td>否</td>\n</tr>\n<tr>\n<td>label</td>\n<td>String</td>\n<td>无</td>\n<td>自定义label展现key(对应数据中key)</td>\n<td>否</td>\n</tr>\n<tr>\n<td>:multiple-max</td>\n<td>Number</td>\n<td>无</td>\n<td>多选模式下 最多选择数据项，默认0</td>\n<td></td>\n</tr>\n<tr>\n<td>:customLabel</td>\n<td>Function</td>\n<td>无</td>\n<td>option内容定制</td>\n<td>否</td>\n</tr>\n<tr>\n<td>:options</td>\n<td>Array</td>\n<td>无</td>\n<td>默认数据,optgroup模式下数据结构有要求(具体查看demo#option Group)</td>\n<td>是</td>\n</tr>\n<tr>\n<td>:disabled</td>\n<td>Boolean</td>\n<td>false</td>\n<td>禁用</td>\n<td>否</td>\n</tr>\n<tr>\n<td>:selected</td>\n<td>String</td>\n<td>无</td>\n<td>默认已选的值</td>\n<td>否</td>\n</tr>\n<tr>\n<td>@change</td>\n<td>function(value) / function(value,groupIndex,valueIndex)</td>\n<td>无</td>\n<td>值发生变化的时候(2种模式: 普通模式/分组模式)</td>\n<td>否</td>\n</tr>\n<tr>\n<td>@select</td>\n<td>function(value) / function(value,groupIndex,valueIndex)</td>\n<td>无</td>\n<td>发生了选择的时候(2种模式: 普通模式/分组模式)</td>\n<td>否</td>\n</tr>\n<tr>\n<td>@searchChange</td>\n<td>function(searchValue)</td>\n<td>无</td>\n<td>搜索值发生变化的时候</td>\n<td>否</td>\n</tr>\n<tr>\n<td>@remove</td>\n<td>function(removeValue)</td>\n<td>无</td>\n<td>多选模式下移除一个选值的时候</td>\n<td>否</td>\n</tr>\n</tbody>\n</table>\n<h3>模式说明</h3>\n<ul>\n<li>\n<p>单选模式:</p>\n<pre>options数据格式一<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span>\n    <span class=\"token string\" >'item1'</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token string\" >'item2'</span>\n<span class=\"token punctuation\" >]</span>\noptions数据格式二<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span>\n    <span class=\"token punctuation\" >{</span>\n        label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'1'</span><span class=\"token punctuation\" >,</span>\n        disable<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >true</span><span class=\"token punctuation\" >,</span>\n        name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'1'</span>\n    <span class=\"token punctuation\" >}</span>\n<span class=\"token punctuation\" >]</span>\n</pre>\n</li>\n<li>\n<p>分组模式:</p>\n<pre>optgroup    【必选】\nshowSearch  【不支持】\noptions数据格式一 <span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span>\n    <span class=\"token punctuation\" >{</span>\n        name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'opt group 1'</span><span class=\"token punctuation\" >,</span>\n        options<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span>\n            <span class=\"token string\" >'item1'</span><span class=\"token punctuation\" >,</span>\n            <span class=\"token string\" >'item2'</span>\n        <span class=\"token punctuation\" >]</span>\n    <span class=\"token punctuation\" >}</span>\n<span class=\"token punctuation\" >]</span>\noptions数据格式二 <span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span>\n    <span class=\"token punctuation\" >{</span>\n        name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'opt group 2'</span><span class=\"token punctuation\" >,</span>\n        options<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span>\n            <span class=\"token punctuation\" >{</span>\n                label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'1'</span><span class=\"token punctuation\" >,</span>\n                disable<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >true</span>\n            <span class=\"token punctuation\" >}</span>\n        <span class=\"token punctuation\" >]</span>\n    <span class=\"token punctuation\" >}</span>\n<span class=\"token punctuation\" >]</span>\n</pre>\n</li>\n<li>\n<p>多选模式:</p>\n<pre>multiple 【必选】\nshowSearch  【不支持】\nselected<span class=\"token punctuation\" >:</span> Array\n</pre>\n</li>\n</ul>\n<h3>参考</h3>\n<p><a href=\"https://select2.github.io/\">select2</a><br />\n<a href=\"http://ant.design/components/select/\">antd-select</a><br />\n<a href=\"http://monterail.github.io/vue-multiselect/\">vue-multiselect</a><br />\n<a href=\"https://josephuspaye.github.io/Keen-UI/#/ui-select-docs\">Keen-UI - select</a><br />\n<a href=\"http://amazeui.org/javascript/selected\">http://amazeui.org/javascript/selected</a></p>\n</div>";

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_template__ = __webpack_require__(230)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-16d87fe4/message.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 230 */
/***/ function(module, exports) {

	module.exports = "<div><h1>Message信息提示</h1>\n<p>Message提供一种不打断用户操作的轻量级提示方式，顶部居中显示并自动消失。常用于主动操作后的信息提示。</p>\n<h4>支持4种信息展示类型</h4>\n<ul>\n<li>info：普通信息提示</li>\n<li>success：成功信息提示</li>\n<li>error：错误信息提示</li>\n<li>warning：警告信息提示</li>\n</ul>\n<p><code>this.$Message.show(content:String, type: String, duration: Number)</code></p>\n<h2>DEMO</h2>\n<div class=\"xcui-demo-container col-md-12 col-xs-12 col-lg-12\">\n    <div class=\"col-md-12 col-xs-12 col-lg-12 xcui-example-container\">\n                    <h3>基础用法</h3>\n                    <div class=\"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6\">\n        <button class=\"btn btn-info\" @click=\"$Message.show('this is an info message')\">info</button>\n        <button class=\"btn btn-success\" @click=\"$Message.show('this is a success message', 'success')\">success</button>\n        <button class=\"btn btn-danger\" @click=\"$Message.show('this is an error message', 'error')\">error</button>\n        <button class=\"btn btn-warning\" @click=\"$Message.show('this is a info warning', 'warning')\">warning</button>\n    </div>\n                    <div class=\"xcui-code-wrap col-xs-12 col-md-6 col-lg-6\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn btn-info<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >@click</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>$Message.show(<span class=\"token punctuation\" >'</span>this is an info message<span class=\"token punctuation\" >'</span>)<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>info<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn btn-success<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >@click</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>$Message.show(<span class=\"token punctuation\" >'</span>this is a success message<span class=\"token punctuation\" >'</span>, <span class=\"token punctuation\" >'</span>success<span class=\"token punctuation\" >'</span>)<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>success<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn btn-danger<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >@click</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>$Message.show(<span class=\"token punctuation\" >'</span>this is an error message<span class=\"token punctuation\" >'</span>, <span class=\"token punctuation\" >'</span>error<span class=\"token punctuation\" >'</span>)<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>error<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn btn-warning<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >@click</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>$Message.show(<span class=\"token punctuation\" >'</span>this is a info warning<span class=\"token punctuation\" >'</span>, <span class=\"token punctuation\" >'</span>warning<span class=\"token punctuation\" >'</span>)<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>warning<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n                    </div>\n</div>\n<h2>Props</h2>\n<table class=\"table\">\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>默认</th>\n<th>描述</th>\n<th>是否必选</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>content</td>\n<td>String</td>\n<td>-</td>\n<td>提示信息内容</td>\n<td><strong>必选</strong></td>\n</tr>\n<tr>\n<td>type</td>\n<td>String</td>\n<td>info</td>\n<td>指定提示信息的类型，默认为info类型；可自行配置，有四种选择: info、success、error、warning</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>duration</td>\n<td>Number</td>\n<td>-</td>\n<td>单位: ms, 默认<strong>3000</strong>毫秒后自动关闭。设置0无效</td>\n<td>可选</td>\n</tr>\n</tbody>\n</table>\n</div>";

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(232)
	__vue_script__ = __webpack_require__(234)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\demos\\modal.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(235)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-064524ca/modal.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(233);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.23.1@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../node_modules/.2.2.3@less-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./modal.vue", function() {
				var newContent = require("!!./../../node_modules/.0.23.1@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../node_modules/.2.2.3@less-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./modal.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, ".xcui-modal-demo-title {\n  color: #66ccff;\n}\n", ""]);

	// exports


/***/ },
/* 234 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var ModalDemo = {
	    data: function data() {
	        return {
	            modal1: false,
	            modal2: false,
	            modal3: false,
	            modal4: false,
	            modal5: false,
	            modal6: false,
	            modal7: false,
	            modal8: false,
	            modal9: false,
	            modal10: false
	        };
	    },

	    methods: {
	        modal1OK: function modal1OK() {
	            console.log('modal1OK');
	        }
	    }
	};

	exports.default = ModalDemo;

/***/ },
/* 235 */
/***/ function(module, exports) {

	module.exports = "<div><h1>Modal 模态窗口</h1>\n<h2>使用场景</h2>\n<p>模态对话框，模拟浏览器的 <code>alert</code>、<code>confirm</code>。在浮层中显示，引导用户进行相关操作。<br />\n<code>Modal</code>提供了两种用法，基础组件使用和封装好的全局实例调用。</p>\n<h2>Demo</h2>\n<div class=\"xcui-demo-container col-md-12 col-xs-12 col-lg-12\">\n    <div class=\"col-md-12 col-xs-12 col-lg-12 xcui-example-container\">\n                    <h3>基础使用</h3>\n                    <div class=\"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6\">\n        <button class=\"btn btn-default\" @click=\"this.modal1 = true\">显示对话框</button>\n        <xcui-modal\n        :show.sync=\"modal1\"\n        title=\"基础弹窗\"\n        :on-ok=\"modal1OK\">\n        <div>XCUI，做有品质的外卖UI</div>\n        </xcui-modal>\n        <div>通过控制show来显示/隐藏对话框，需要将show设置为.sync双向绑定</div>\n    </div>\n                    <div class=\"xcui-code-wrap col-xs-12 col-md-6 col-lg-6\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn btn-default<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >@click</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>this.modal1 <span class=\"token punctuation\" >=</span> true<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>显示对话框<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>\n&lt;xcui-modal\n:show.sync=\"modal1\"\ntitle=\"基础弹窗\"\n        :on-ok=\"modal1OK\">\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>XCUI，做有品质的外卖UI<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-modal</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>通过控制show来显示/隐藏对话框，需要将show设置为.sync双向绑定<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n                    </div>\n    <div class=\"col-md-12 col-xs-12 col-lg-12 xcui-example-container\">\n                    <h3>定义元素的显示</h3>\n                    <div class=\"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6\">\n        <button class=\"btn btn-default\" @click=\"this.modal2 = true\">自定义页头</button>\n        <button class=\"btn btn-default\" @click=\"this.modal3 = true\">不带标题栏</button>\n        <button class=\"btn btn-default\" @click=\"this.modal4 = true\">不带关闭按钮</button>\n        <button class=\"btn btn-default\" @click=\"this.modal5 = true\">不带页脚</button>\n        <button class=\"btn btn-default\" @click=\"this.modal6 = true\">不带关闭按钮和页脚</button>\n        <xcui-modal\n        :show.sync=\"modal2\"\n        title=\"自定义页头（有slot则无效）\">\n        <span slot=\"header\" class=\"xcui-modal-demo-title\">不一样的页头</span>\n        <div>我跟你不一样，我有你没有的头脑</div>\n        </xcui-modal>\n        <xcui-modal\n        :show.sync=\"modal3\"\n        :show-header=\"false\">\n        <div>无头骑士。生前是一名勇猛的骑士，由于在战场上不幸阵亡，首级被敌人割去，因此每逢月黑风高的夜晚他便会骑着一匹同为亡灵的马出没于沉睡谷，四处寻找自己遗失的首级；而每当看见与自己生前长相相似者便会斩其头颅带回。</div>\n        </xcui-modal>\n        <xcui-modal\n        :show.sync=\"modal4\"\n        title=\"不带关闭按钮\"\n        :show-close-button=\"false\">\n        <div>不带关闭按钮</div>\n        </xcui-modal>\n        <xcui-modal\n        :show.sync=\"modal5\"\n        title=\"不带页脚\"\n        :show-footer=\"false\">\n        <div>即使我失去了双脚，我依然顶天立地</div>\n        </xcui-modal>\n        <xcui-modal\n        :show.sync=\"modal6\"\n        :show-close-button=\"false\"\n        :show-footer=\"false\">\n        <div>我且问你，除了刷新，你能如何关闭我？</div>\n        </xcui-modal>\n        <div>Modal提供了灵活的组件化API和Slot，可以自由控制整个Modal的组成部分。比如，页头、页脚和关闭按钮</div>\n    </div>\n                    <div class=\"xcui-code-wrap col-xs-12 col-md-6 col-lg-6\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn btn-default<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >@click</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>this.modal2 <span class=\"token punctuation\" >=</span> true<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>自定义页头<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn btn-default<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >@click</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>this.modal3 <span class=\"token punctuation\" >=</span> true<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>不带标题栏<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn btn-default<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >@click</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>this.modal4 <span class=\"token punctuation\" >=</span> true<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>不带关闭按钮<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn btn-default<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >@click</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>this.modal5 <span class=\"token punctuation\" >=</span> true<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>不带页脚<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn btn-default<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >@click</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>this.modal6 <span class=\"token punctuation\" >=</span> true<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>不带关闭按钮和页脚<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>\n&lt;xcui-modal\n:show.sync=\"modal2\"\ntitle=\"自定义页头（有slot则无效）\">\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span> <span class=\"token attr-name\" >slot</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>header<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>xcui-modal-demo-title<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>不一样的页头<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>我跟你不一样，我有你没有的头脑<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-modal</span><span class=\"token punctuation\" >></span></span>\n&lt;xcui-modal\n:show.sync=\"modal3\"\n:show-header=\"false\">\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>无头骑士。生前是一名勇猛的骑士，由于在战场上不幸阵亡，首级被敌人割去，因此每逢月黑风高的夜晚他便会骑着一匹同为亡灵的马出没于沉睡谷，四处寻找自己遗失的首级；而每当看见与自己生前长相相似者便会斩其头颅带回。<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-modal</span><span class=\"token punctuation\" >></span></span>\n&lt;xcui-modal\n:show.sync=\"modal4\"\ntitle=\"不带关闭按钮\"\n        :show-close-button=\"false\">\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>不带关闭按钮<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-modal</span><span class=\"token punctuation\" >></span></span>\n&lt;xcui-modal\n:show.sync=\"modal5\"\ntitle=\"不带页脚\"\n        :show-footer=\"false\">\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>即使我失去了双脚，我依然顶天立地<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-modal</span><span class=\"token punctuation\" >></span></span>\n&lt;xcui-modal\n:show.sync=\"modal6\"\n:show-close-button=\"false\"\n:show-footer=\"false\">\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>我且问你，除了刷新，你能如何关闭我？<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-modal</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>Modal提供了灵活的组件化API和Slot，可以自由控制整个Modal的组成部分。比如，页头、页脚和关闭按钮<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n                    </div>\n    <div class=\"col-md-12 col-xs-12 col-lg-12 xcui-example-container\">\n                    <h3>自定义样式</h3>\n                    <div class=\"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6\">\n        <button class=\"btn btn-default\" @click=\"this.modal7 = true\">Full对话框</button>\n        <button class=\"btn btn-default\" @click=\"this.modal8 = true\">Small对话框</button>\n        <button class=\"btn btn-default\" @click=\"this.modal9 = true\">自定义Style</button>\n        <button class=\"btn btn-default\" @click=\"this.modal10 = true\">自定义class-name</button>\n        <xcui-modal\n        :show.sync=\"modal7\"\n        :size=\"'full'\"\n        title=\"Full对话框\">\n        <div>心宽体肥，宅心仁厚。</div>\n        </xcui-modal>\n        <xcui-modal\n        :show.sync=\"modal8\"\n        :size=\"'small'\"\n        title=\"Small对话框\">\n        <div>即使我小，这世间也会有我的一席之地。因为我小巧玲珑，精灵剔透。</div>\n        </xcui-modal>\n        <xcui-modal\n        :show.sync=\"modal9\"\n        :style=\"{'transform': 'rotate(-10deg)'}\"\n        title=\"自定义Style\">\n        <div>身正不怕影子斜</div>\n        </xcui-modal>\n        <xcui-modal\n        :show.sync=\"modal10\"\n        title=\"自定义class-name\"\n        :class-name=\"'xcui-modal-demo-class'\">\n        <div>欲与天公试比高</div>\n        </xcui-modal>\n        <style>\n        .Modal-demo-class { top: 0; }\n        </style>\n        <div>通过设置size可以快速设置对话框的宽度大小，也可以设置class-name和style自定义Modal的样式</div>\n    </div>\n                    <div class=\"xcui-code-wrap col-xs-12 col-md-6 col-lg-6\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn btn-default<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >@click</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>this.modal7 <span class=\"token punctuation\" >=</span> true<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Full对话框<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn btn-default<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >@click</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>this.modal8 <span class=\"token punctuation\" >=</span> true<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Small对话框<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn btn-default<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >@click</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>this.modal9 <span class=\"token punctuation\" >=</span> true<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>自定义Style<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn btn-default<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >@click</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>this.modal10 <span class=\"token punctuation\" >=</span> true<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>自定义class-name<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>\n&lt;xcui-modal\n:show.sync=\"modal7\"\n:size=\"'full'\"\ntitle=\"Full对话框\">\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>心宽体肥，宅心仁厚。<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-modal</span><span class=\"token punctuation\" >></span></span>\n&lt;xcui-modal\n:show.sync=\"modal8\"\n:size=\"'small'\"\ntitle=\"Small对话框\">\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>即使我小，这世间也会有我的一席之地。因为我小巧玲珑，精灵剔透。<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-modal</span><span class=\"token punctuation\" >></span></span>\n&lt;xcui-modal\n:show.sync=\"modal9\"\n:style=\"<span class=\"token punctuation\">{</span>'transform': 'rotate(-10deg)'<span class=\"token punctuation\">}</span>\"\ntitle=\"自定义Style\">\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>身正不怕影子斜<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-modal</span><span class=\"token punctuation\" >></span></span>\n&lt;xcui-modal\n:show.sync=\"modal10\"\ntitle=\"自定义class-name\"\n        :class-name=\"'xcui-modal-demo-class'\">\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>欲与天公试比高<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-modal</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>style</span><span class=\"token punctuation\" >></span></span><span class=\"token style language-css\" ><span class=\"token selector\" >\n.Modal-demo-class</span> <span class=\"token punctuation\" ><span class=\"token punctuation\">{</span></span> <span class=\"token property\" >top</span><span class=\"token punctuation\" >:</span> 0<span class=\"token punctuation\" >;</span> <span class=\"token punctuation\" ><span class=\"token punctuation\">}</span></span>\n        </span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>style</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>通过设置size可以快速设置对话框的宽度大小，也可以设置class-name和style自定义Modal的样式<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n                    </div>\n</div>\n<h2>Props</h2>\n<table class=\"table\">\n<thead>\n<tr>\n<th>名字</th>\n<th>类型</th>\n<th>默认</th>\n<th>描述</th>\n<th>是否必选</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>show</td>\n<td>Boolean</td>\n<td>false</td>\n<td>对话框是否显示,需要.sync双向绑定</td>\n<td><strong>必选</strong></td>\n</tr>\n<tr>\n<td>content</td>\n<td>String</td>\n<td>-</td>\n<td>对话框的主体内容，如果使用了默认slot的方式，则content无效</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>title</td>\n<td>String</td>\n<td>-</td>\n<td>对话框的标题，如果slot定义了header，则title无效</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>mask-closable</td>\n<td>Boolean</td>\n<td>true</td>\n<td>是否允许点击遮罩层关闭对话框</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>scrollable</td>\n<td>Boolean</td>\n<td>false</td>\n<td>打开Modal后，是否允许底页可滚动</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>show-close-button</td>\n<td>Boolean</td>\n<td>true</td>\n<td>是否显示右上角的关闭按钮</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>show-ok-button</td>\n<td>Boolean</td>\n<td>true</td>\n<td>是否显示确定按钮</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>show-cancel-button</td>\n<td>Boolean</td>\n<td>true</td>\n<td>是否显示取消按钮</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>show-header</td>\n<td>Boolean</td>\n<td>true</td>\n<td>是否显示整个标题栏</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>show-footer</td>\n<td>Boolean</td>\n<td>true</td>\n<td>是否显示整个底边栏</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>ok-text</td>\n<td>String</td>\n<td>确定</td>\n<td>确定按钮的文字</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>cancel-text</td>\n<td>String</td>\n<td>取消</td>\n<td>取消按钮的文字</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>size</td>\n<td>String</td>\n<td>middle</td>\n<td>预设对话框浮层的宽度大小。可选值：small/middle/large/full</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>class-name</td>\n<td>String</td>\n<td>-</td>\n<td>自定义样式类名</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>style</td>\n<td>object</td>\n<td>-</td>\n<td>设置对话框浮层的样式，调整浮层位置等。该属性设置的是.Modal的样式</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>content-style</td>\n<td>object</td>\n<td>-</td>\n<td>设置对话框内容主体的样式。该属性设置的是.Modal-body的样式</td>\n<td>可选</td>\n</tr>\n</tbody>\n</table>\n<h2>Events</h2>\n<table class=\"table\">\n<thead>\n<tr>\n<th>名字</th>\n<th>描述</th>\n<th>是否必选</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>on-ok</td>\n<td>点击确定的回调函数。回调函数如果返回真值(true)，则不再关闭对话框；如果返回假值(false)或不返回，则默认执行on-ok后关闭对话框</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>on-cancel</td>\n<td>点击取消和右上角关闭的回调函数。回调函数如果返回真值(true)，则不再关闭对话框；如果返回假值(false)或不返回，则默认执行on-cancel后关闭对话框</td>\n<td>可选</td>\n</tr>\n</tbody>\n</table>\n<h2>Slot</h2>\n<table class=\"table\">\n<thead>\n<tr>\n<th>名字</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>header</td>\n<td>自定义页头</td>\n</tr>\n<tr>\n<td>footer</td>\n<td>自定义页脚内容</td>\n</tr>\n<tr>\n<td>close</td>\n<td>自定义右上角关闭按钮</td>\n</tr>\n<tr>\n<td>-</td>\n<td>对话框的主体内容</td>\n</tr>\n</tbody>\n</table>\n<h2>Modal 全局方法</h2>\n<p>XCUI为Modal提供了便捷的调用方式。在Vue.prototype中添加了快捷的方法：$Modal.show,$Modal.close, $confirm和$alert。因此，在Vue实例代码中，可以使用this.$Modal等方法快捷地创建一个对话框。<br />\n但需要在调用这些全局方法之前，先在项目中引入XCUI或xcuiInstall，并调用Vue.use安装。</p>\n<p>引入方式一：</p>\n<pre><span class=\"token keyword\" >import</span> Vue <span class=\"token keyword\" >from</span> <span class=\"token string\" >'vue'</span>\n<span class=\"token keyword\" >import</span> XCUI <span class=\"token keyword\" >from</span> <span class=\"token string\" >'xcui'</span> <span class=\"token comment\" spellcheck=\"true\">// 全局引入</span>\nVue<span class=\"token punctuation\" >.</span><span class=\"token function\" >use</span><span class=\"token punctuation\" >(</span>XCUI<span class=\"token punctuation\" >)</span>\n</pre>\n<p>引入方式二：</p>\n<pre><span class=\"token keyword\" >import</span> Vue <span class=\"token keyword\" >from</span> <span class=\"token string\" >'vue'</span>\n<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span>xcuiInstall<span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'xcui'</span>\nVue<span class=\"token punctuation\" >.</span><span class=\"token function\" >use</span><span class=\"token punctuation\" >(</span>xcuiInstall<span class=\"token punctuation\" >)</span>\n</pre>\n<p>做好以上准备工作后，即可在组件任何位置调用vm.$confirm等来隐式地创建一个对话框了。</p>\n<ol>\n<li><strong>this.$Modal.show(options)</strong></li>\n</ol>\n<table class=\"table\">\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>默认</th>\n<th>描述</th>\n<th>是否必选</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>options</td>\n<td>Object</td>\n<td>-</td>\n<td>对话框的参数，属性同props(props.show除外)。注意：使用驼峰式变量名，如<strong>onOk</strong>，而非on-ok</td>\n<td><strong>必选</strong></td>\n</tr>\n</tbody>\n</table>\n<ol start=\"2\">\n<li><strong>this.$Modal.close()</strong></li>\n</ol>\n<p><code>$Modal.close()</code>提供隐式地关闭对话框全局实例的能力。</p>\n<ol start=\"3\">\n<li><strong>this.$confirm(title, content, onOk, onCancel, isRawHTML)</strong> 或 <strong>this.$confirm(options, isRawHTML)</strong></li>\n</ol>\n<p>写法1：</p>\n<table class=\"table\">\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>默认</th>\n<th>描述</th>\n<th>是否必选</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>title</td>\n<td>String</td>\n<td>-</td>\n<td>对话框的标题</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>content</td>\n<td>String</td>\n<td>-</td>\n<td>对话框的内容，可通过isRawHTML指定是否解析为原生HTML</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>onOk</td>\n<td>Function</td>\n<td>-</td>\n<td>点击确定按钮的回调函数</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>onCancel</td>\n<td>Function</td>\n<td>-</td>\n<td>点击取消按钮或关闭按钮的回调函数</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>options</td>\n<td>Object</td>\n<td>-</td>\n<td>对content(String)是否解析为原生HTML</td>\n<td>可选</td>\n</tr>\n</tbody>\n</table>\n<p>写法2：</p>\n<table class=\"table\">\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>默认</th>\n<th>描述</th>\n<th>是否必选</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>options</td>\n<td>Object</td>\n<td>-</td>\n<td>对话框的参数，属性同props(props.show除外)。注意：使用驼峰式变量名，如<strong>onOk</strong>，而非on-ok</td>\n<td><strong>必选</strong></td>\n</tr>\n<tr>\n<td>isRawHTML</td>\n<td>Boolean</td>\n<td>false</td>\n<td>对options.content(String)是否解析为原生HTML</td>\n<td>可选</td>\n</tr>\n</tbody>\n</table>\n<ol start=\"4\">\n<li><strong>this.$alert(content, onOk)</strong></li>\n</ol>\n<table class=\"table\">\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>默认</th>\n<th>描述</th>\n<th>是否必选</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>content</td>\n<td>String</td>\n<td>-</td>\n<td>对话框的内容</td>\n<td><strong>必选</strong></td>\n</tr>\n<tr>\n<td>onOk</td>\n<td>Function</td>\n<td>-</td>\n<td>点击确定按钮的回调函数</td>\n<td>可选</td>\n</tr>\n</tbody>\n</table>\n</div>";

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(237)
	__vue_script__ = __webpack_require__(239)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\demos\\inputNumber.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(240)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-e76f01e0/inputNumber.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(238);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.23.1@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./inputNumber.vue", function() {
				var newContent = require("!!./../../node_modules/.0.23.1@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./inputNumber.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.input-define-class{\r\n    color: blue;\r\n    width: 190px;\r\n    font-size: 20px;\r\n}\r\n", ""]);

	// exports


/***/ },
/* 239 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    data: function data() {
	        return {};
	    },

	    methods: {},
	    ready: function ready() {}
	};

/***/ },
/* 240 */
/***/ function(module, exports) {

	module.exports = "<div><h1>InputNumber数字输入框</h1>\n<h2>使用场景</h2>\n<ul>\n<li>数字专用输入框</li>\n<li>支持限制输入整数数字范围</li>\n<li>支持设置增减数字幅度</li>\n<li>支持自定义框内提示文案</li>\n<li>支持自定义输入框样式</li>\n</ul>\n<h2>DEMO</h2>\n<div class=\"xcui-demo-container col-md-12 col-xs-12 col-lg-12\">\n\t<div class=\"col-md-12 col-xs-12 col-lg-12 xcui-example-container\">\n                    <h3>InputNumber</h3>\n                    <div class=\"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6\">\n\t\t\t<div id=\"container\">\n\t\t\t\t<xcui-inputnumber :max-value=\"100\" :min-value=\"3\" :step=\"2\" :is-disable=\"false\" text-tips=\"请输入整数\" ></xcui-inputnumber>\n\t\t\t\t<p>支持键盘输入整数，以2为步长，最小值为3，最大值为100</p>\n\t\t\t\t</br>\n\t\t\t\t<xcui-inputnumber :max-value=\"100\" :min-value=\"-25\" :input-value.sync=\"6\" :step=\"5\" class-name=\"input-define-class\" :is-disable=\"true\" size=\"normal\"></xcui-inputnumber>\n\t\t\t\t<p>默认值为6，禁止手动输入，以5为步长，最小值为-25，最大值为100，自定义输入框与字体样式</p>\n\t\t\t</div>\n\t</div>\n                    <div class=\"xcui-code-wrap col-xs-12 col-md-6 col-lg-6\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >id</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>container<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n\t<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>xcui-inputnumber</span> <span class=\"token attr-name\" >:max-value</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>100<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:min-value</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>3<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:step</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>2<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:is-disable</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>false<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >text-tips</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>请输入整数<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-inputnumber</span><span class=\"token punctuation\" >></span></span>\n\t<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span><span class=\"token punctuation\" >></span></span>支持键盘输入整数，以2为步长，最小值为3，最大值为100<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\n\t<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>br</span><span class=\"token punctuation\" >></span></span>\n\t<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>xcui-inputnumber</span> <span class=\"token attr-name\" >:max-value</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>100<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:min-value</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>-25<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:input-value.sync</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>6<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:step</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>5<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >class-name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>input-define-class<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:is-disable</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>true<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>normal<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-inputnumber</span><span class=\"token punctuation\" >></span></span>\n\t<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span><span class=\"token punctuation\" >></span></span>默认值为6，禁止手动输入，以5为步长，最小值为-25，最大值为100，自定义输入框与字体样式<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n                    </div>\n</div>\n<h2>Props</h2>\n<table class=\"table\">\n<thead>\n<tr>\n<th>名字</th>\n<th>类型</th>\n<th>默认</th>\n<th>描述</th>\n<th>是否必选</th>\n<th>可选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>max-value</td>\n<td>Number</td>\n<td>100</td>\n<td>最大值</td>\n<td>可选</td>\n<td></td>\n</tr>\n<tr>\n<td>min-value</td>\n<td>Number</td>\n<td>1</td>\n<td>最小值</td>\n<td>可选</td>\n<td></td>\n</tr>\n<tr>\n<td>input-value</td>\n<td>Number</td>\n<td>空</td>\n<td>默认显示数值</td>\n<td>可选</td>\n<td></td>\n</tr>\n<tr>\n<td>step</td>\n<td>Number</td>\n<td>1</td>\n<td>增减步长</td>\n<td>可选</td>\n<td></td>\n</tr>\n<tr>\n<td>is-disable</td>\n<td>Boolean</td>\n<td>false</td>\n<td>是否禁用键盘输入</td>\n<td>可选</td>\n<td>true,false</td>\n</tr>\n<tr>\n<td>class-name</td>\n<td>String</td>\n<td>空字符串</td>\n<td>自定义样式</td>\n<td>可选</td>\n<td></td>\n</tr>\n<tr>\n<td>size</td>\n<td>String</td>\n<td>large</td>\n<td>可选尺寸</td>\n<td>可选</td>\n<td>large,normal</td>\n</tr>\n<tr>\n<td>text-tips</td>\n<td>String</td>\n<td>请输入范围内整数</td>\n<td>自定义提示文案</td>\n<td>可选</td>\n<td></td>\n</tr>\n</tbody>\n</table>\n</div>";

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(242)
	__vue_script__ = __webpack_require__(244)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\demos\\progress.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(245)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-3e458620/progress.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(243);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.23.1@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./progress.vue", function() {
				var newContent = require("!!./../../node_modules/.0.23.1@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./progress.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.info{\n    float: left;\n    padding-right: 10px;\n}\n", ""]);

	// exports


/***/ },
/* 244 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    data: function data() {
	        return {
	            percent: 50,
	            percentInfo: '50/100',
	            height: 5
	        };
	    }
	};

/***/ },
/* 245 */
/***/ function(module, exports) {

	module.exports = "<div><h1>Progress进度条</h1>\n<h2>使用场景</h2>\n<h2>DEMO</h2>\n<div class=\"xcui-demo-container col-md-12 col-xs-12 col-lg-12\">\n    <div class=\"col-md-12 col-xs-12 col-lg-12 xcui-example-container\">\n                    <h3>basic</h3>\n                    <div class=\"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6\">\n        <xcui-progress :percent-info='percentInfo' :percent='percent' :show-info='true'></xcui-progress>\n        <div style=\"width:200px\">\n        <xcui-progress :info-class-name=\"'info'\" :percent='percent' :percent-info=\"'50%'\" :height='height'></xcui-progress>\n        </div>\n    </div>\n                    <div class=\"xcui-code-wrap col-xs-12 col-md-6 col-lg-6\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>xcui-progress</span> <span class=\"token attr-name\" >:percent-info</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >'</span>percentInfo<span class=\"token punctuation\" >'</span></span> <span class=\"token attr-name\" >:percent</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >'</span>percent<span class=\"token punctuation\" >'</span></span> <span class=\"token attr-name\" >:show-info</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >'</span>true<span class=\"token punctuation\" >'</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-progress</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token style-attr language-css\" ><span class=\"token attr-name\" > <span class=\"token attr-name\" >style</span></span><span class=\"token punctuation\" >=\"</span><span class=\"token attr-value\" ><span class=\"token property\" >width</span><span class=\"token punctuation\" >:</span>200px</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>xcui-progress</span> <span class=\"token attr-name\" >:info-class-name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >'</span>info<span class=\"token punctuation\" >'</span><span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:percent</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >'</span>percent<span class=\"token punctuation\" >'</span></span> <span class=\"token attr-name\" >:percent-info</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >'</span>50%<span class=\"token punctuation\" >'</span><span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:height</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >'</span>height<span class=\"token punctuation\" >'</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-progress</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n                    </div>\n</div>\n<h2>Props</h2>\n<table class=\"table\">\n<thead>\n<tr>\n<th>名字</th>\n<th>类型</th>\n<th>默认</th>\n<th>描述</th>\n<th>是否必选</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>percent-info</td>\n<td>Number</td>\n<td>0</td>\n<td>百分比</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>height</td>\n<td>Number</td>\n<td>10</td>\n<td>高度</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>show-info</td>\n<td>Boolean</td>\n<td>false</td>\n<td>是否展示信息</td>\n<td>可选</td>\n</tr>\n</tbody>\n</table>\n</div>";

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(247)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\demos\\pageloading.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(248)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-732adbac/pageloading.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _pageloading = __webpack_require__(128);

	var _pageloading2 = _interopRequireDefault(_pageloading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    components: {
	        vPageloading: _pageloading2.default
	    },
	    data: function data() {
	        return {
	            toppercent: ''
	        };
	    },

	    methods: {
	        start: function start() {
	            this.$refs.pageLoading.start();
	        },
	        done: function done() {
	            this.$refs.pageLoading.done();
	        },
	        setPercent: function setPercent() {
	            this.$refs.pageLoading.set(parseFloat(this.toppercent, 10));
	        },
	        inc: function inc() {
	            this.$refs.pageLoading.inc();
	        }
	    }
	};

/***/ },
/* 248 */
/***/ function(module, exports) {

	module.exports = "<div><h1>PageLoading页面加载进度条</h1>\n<h2>使用场景</h2>\n<ul>\n<li>路由页面切换时提供顶部加载进度条。</li>\n</ul>\n<h2>DEMO</h2>\n<div class=\"xcui-demo-container col-md-12 col-xs-12 col-lg-12\">\n    <div class=\"col-md-12 col-xs-12 col-lg-12 xcui-example-container\">\n                    <h3>顶部加载条</h3>\n                    <div class=\"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6\">\n        <xcui-pageloading v-ref:page-loading></xcui-pageloading>\n        <div class=\"form-group\">\n            <button class=\"btn btn-primary\" @click=\"start\">start</button>\n            <button class=\"btn btn-primary\" @click=\"done\">done</button>\n            <button class=\"btn btn-primary\" @click=\"inc\">inc</button>\n            <button class=\"btn btn-primary\" @click=\"setPercent\">set</button>\n        </div>\n        <div class=\"input-group\">\n            <input type=\"text\" class=\"form-control\" v-model=\"toppercent\" placeholder=\"设置进度条速度\"/>\n        </div>\n    </div>\n                    <div class=\"xcui-code-wrap col-xs-12 col-md-6 col-lg-6\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>xcui-pageloading</span> <span class=\"token attr-name\" ><span class=\"token namespace\" >v-ref:</span>page-loading</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>xcui-pageloading</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>form-group<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn btn-primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >@click</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>start<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>start<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn btn-primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >@click</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>done<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>done<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn btn-primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >@click</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>inc<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>inc<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn btn-primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >@click</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>setPercent<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>set<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>input-group<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>input</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>text<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>form-control<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >v-model</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>toppercent<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >placeholder</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>设置进度条速度<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n                    </div>\n</div>\n<h2>Props</h2>\n<table class=\"table\">\n<thead>\n<tr>\n<th>名字</th>\n<th>类型</th>\n<th>默认</th>\n<th>描述</th>\n<th>是否必选</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>speed</td>\n<td>Number</td>\n<td>350</td>\n<td>速度</td>\n<td>可选</td>\n</tr>\n</tbody>\n</table>\n<h2>Methods</h2>\n<table class=\"table\">\n<thead>\n<tr>\n<th>名字</th>\n<th>类型</th>\n<th>默认</th>\n<th>描述</th>\n<th>是否必选</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>start</td>\n<td>function</td>\n<td>-</td>\n<td>开始</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>done</td>\n<td>function</td>\n<td>-</td>\n<td>结束</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>set</td>\n<td>function</td>\n<td>0.08</td>\n<td>设置进度条进度，取值范围（0.08 ~ 1）</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>inc</td>\n<td>function</td>\n<td>-</td>\n<td>增加一小段进度</td>\n<td>可选</td>\n</tr>\n</tbody>\n</table>\n<h3>方法调用</h3>\n<blockquote>\n<ul>\n<li>this.$refs.pageLoading.start();</li>\n<li>this.$refs.pageLoading.done();</li>\n<li>this.$refs.pageLoading.set(0.5);</li>\n<li>this.$refs.pageLoading.inc();</li>\n</ul>\n</blockquote>\n<p>备注：先执行set(0.X)，再执行inc()，即可看到inc的执行效果</p>\n</div>";

/***/ }
/******/ ]);