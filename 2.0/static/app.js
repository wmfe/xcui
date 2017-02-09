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

	var _vue = __webpack_require__(16);

	var _vue2 = _interopRequireDefault(_vue);

	var _vueRouter = __webpack_require__(17);

	var _vueRouter2 = _interopRequireDefault(_vueRouter);

	var _index = __webpack_require__(19);

	var _index2 = _interopRequireDefault(_index);

	var _App = __webpack_require__(187);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_vue2.default.use(_index2.default);
	_vue2.default.use(_vueRouter2.default);
	_vue2.default.config.devtools = true;
	new _vue2.default(_App2.default).$mount('#app');

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*!
	 * Vue.js v2.1.10
	 * (c) 2014-2017 Evan You
	 * Released under the MIT License.
	 */
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  (global.Vue = factory());
	}(this, (function () { 'use strict';

	/*  */

	/**
	 * Convert a value to a string that is actually rendered.
	 */
	function _toString (val) {
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
	 * Remove an item from an array
	 */
	function remove$1 (arr, item) {
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
	 * Check if value is primitive
	 */
	function isPrimitive (value) {
	  return typeof value === 'string' || typeof value === 'number'
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
	function bind$1 (fn, ctx) {
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
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 */
	function isObject (obj) {
	  return obj !== null && typeof obj === 'object'
	}

	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 */
	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';
	function isPlainObject (obj) {
	  return toString.call(obj) === OBJECT_STRING
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
	 */
	function noop () {}

	/**
	 * Always return false.
	 */
	var no = function () { return false; };

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
	  var isObjectA = isObject(a);
	  var isObjectB = isObject(b);
	  if (isObjectA && isObjectB) {
	    return JSON.stringify(a) === JSON.stringify(b)
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

	/*  */

	var config = {
	  /**
	   * Option merge strategies (used in core/util/options)
	   */
	  optionMergeStrategies: Object.create(null),

	  /**
	   * Whether to suppress warnings.
	   */
	  silent: false,

	  /**
	   * Whether to enable devtools
	   */
	  devtools: "development" !== 'production',

	  /**
	   * Error handler for watcher errors
	   */
	  errorHandler: null,

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
	   * List of asset types that a component can own.
	   */
	  _assetTypes: [
	    'component',
	    'directive',
	    'filter'
	  ],

	  /**
	   * List of lifecycle hooks.
	   */
	  _lifecycleHooks: [
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
	  ],

	  /**
	   * Max circular updates allowed in a scheduler flush cycle.
	   */
	  _maxUpdateCount: 100
	};

	/*  */

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
	  } else {
	    var segments = path.split('.');
	    return function (obj) {
	      for (var i = 0; i < segments.length; i++) {
	        if (!obj) { return }
	        obj = obj[segments[i]];
	      }
	      return obj
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
	  return /native code/.test(Ctor.toString())
	}

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
	      if (cb) { cb.call(ctx); }
	      if (_resolve) { _resolve(ctx); }
	    });
	    if (!pending) {
	      pending = true;
	      timerFunc();
	    }
	    if (!cb && typeof Promise !== 'undefined') {
	      return new Promise(function (resolve) {
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

	var warn = noop;
	var formatComponentName;

	{
	  var hasConsole = typeof console !== 'undefined';

	  warn = function (msg, vm) {
	    if (hasConsole && (!config.silent)) {
	      console.error("[Vue warn]: " + msg + " " + (
	        vm ? formatLocation(formatComponentName(vm)) : ''
	      ));
	    }
	  };

	  formatComponentName = function (vm) {
	    if (vm.$root === vm) {
	      return 'root instance'
	    }
	    var name = vm._isVue
	      ? vm.$options.name || vm.$options._componentTag
	      : vm.name;
	    return (
	      (name ? ("component <" + name + ">") : "anonymous component") +
	      (vm._isVue && vm.$options.__file ? (" at " + (vm.$options.__file)) : '')
	    )
	  };

	  var formatLocation = function (str) {
	    if (str === 'anonymous component') {
	      str += " - use the \"name\" option for better debugging messages.";
	    }
	    return ("\n(found in " + str + ")")
	  };
	}

	/*  */


	var uid$1 = 0;

	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 */
	var Dep = function Dep () {
	  this.id = uid$1++;
	  this.subs = [];
	};

	Dep.prototype.addSub = function addSub (sub) {
	  this.subs.push(sub);
	};

	Dep.prototype.removeSub = function removeSub (sub) {
	  remove$1(this.subs, sub);
	};

	Dep.prototype.depend = function depend () {
	  if (Dep.target) {
	    Dep.target.addDep(this);
	  }
	};

	Dep.prototype.notify = function notify () {
	  // stablize the subscriber list first
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
	    var arguments$1 = arguments;

	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments$1[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break
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
	  shouldConvert: true,
	  isSettingProps: false
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
	function protoAugment (target, src) {
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
	  customSetter
	) {
	  var dep = new Dep();

	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return
	  }

	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;

	  var childOb = observe(val);
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
	      if ("development" !== 'production' && customSetter) {
	        customSetter();
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

	/**
	 * Set a property on an object. Adds the new property and
	 * triggers change notification if the property doesn't
	 * already exist.
	 */
	function set$1 (obj, key, val) {
	  if (Array.isArray(obj)) {
	    obj.length = Math.max(obj.length, key);
	    obj.splice(key, 1, val);
	    return val
	  }
	  if (hasOwn(obj, key)) {
	    obj[key] = val;
	    return
	  }
	  var ob = obj.__ob__;
	  if (obj._isVue || (ob && ob.vmCount)) {
	    "development" !== 'production' && warn(
	      'Avoid adding reactive properties to a Vue instance or its root $data ' +
	      'at runtime - declare it upfront in the data option.'
	    );
	    return
	  }
	  if (!ob) {
	    obj[key] = val;
	    return
	  }
	  defineReactive$$1(ob.value, key, val);
	  ob.dep.notify();
	  return val
	}

	/**
	 * Delete a property and trigger change if necessary.
	 */
	function del (obj, key) {
	  var ob = obj.__ob__;
	  if (obj._isVue || (ob && ob.vmCount)) {
	    "development" !== 'production' && warn(
	      'Avoid deleting properties on a Vue instance or its root $data ' +
	      '- just set it to null.'
	    );
	    return
	  }
	  if (!hasOwn(obj, key)) {
	    return
	  }
	  delete obj[key];
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
	{
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
	      set$1(to, key, fromVal);
	    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to
	}

	/**
	 * Data
	 */
	strats.data = function (
	  parentVal,
	  childVal,
	  vm
	) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal
	    }
	    if (typeof childVal !== 'function') {
	      "development" !== 'production' && warn(
	        'The "data" option should be a function ' +
	        'that returns a per-instance value in component ' +
	        'definitions.',
	        vm
	      );
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
	        childVal.call(this),
	        parentVal.call(this)
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
	};

	/**
	 * Hooks and param attributes are merged as arrays.
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

	config._lifecycleHooks.forEach(function (hook) {
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

	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});

	/**
	 * Watchers.
	 *
	 * Watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */
	strats.watch = function (parentVal, childVal) {
	  /* istanbul ignore if */
	  if (!childVal) { return parentVal }
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
	      : [child];
	  }
	  return ret
	};

	/**
	 * Other object hashes.
	 */
	strats.props =
	strats.methods =
	strats.computed = function (parentVal, childVal) {
	  if (!childVal) { return parentVal }
	  if (!parentVal) { return childVal }
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  extend(ret, childVal);
	  return ret
	};

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
	      } else {
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
	  {
	    checkComponents(child);
	  }
	  normalizeProps(child);
	  normalizeDirectives(child);
	  var extendsFrom = child.extends;
	  if (extendsFrom) {
	    parent = typeof extendsFrom === 'function'
	      ? mergeOptions(parent, extendsFrom.options, vm)
	      : mergeOptions(parent, extendsFrom, vm);
	  }
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      var mixin = child.mixins[i];
	      if (mixin.prototype instanceof Vue$3) {
	        mixin = mixin.options;
	      }
	      parent = mergeOptions(parent, mixin, vm);
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
	  if ("development" !== 'production' && warnMissing && !res) {
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
	  {
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
	  if (isObject(def)) {
	    "development" !== 'production' && warn(
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
	    vm[key] !== undefined) {
	    return vm[key]
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && prop.type !== Function
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

	/**
	 * Assert the type of a value
	 */
	function assertType (value, type) {
	  var valid;
	  var expectedType = getType(type);
	  if (expectedType === 'String') {
	    valid = typeof value === (expectedType = 'string');
	  } else if (expectedType === 'Number') {
	    valid = typeof value === (expectedType = 'number');
	  } else if (expectedType === 'Boolean') {
	    valid = typeof value === (expectedType = 'boolean');
	  } else if (expectedType === 'Function') {
	    valid = typeof value === (expectedType = 'function');
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
	  return match && match[1]
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



	var util = Object.freeze({
		defineReactive: defineReactive$$1,
		_toString: _toString,
		toNumber: toNumber,
		makeMap: makeMap,
		isBuiltInTag: isBuiltInTag,
		remove: remove$1,
		hasOwn: hasOwn,
		isPrimitive: isPrimitive,
		cached: cached,
		camelize: camelize,
		capitalize: capitalize,
		hyphenate: hyphenate,
		bind: bind$1,
		toArray: toArray,
		extend: extend,
		isObject: isObject,
		isPlainObject: isPlainObject,
		toObject: toObject,
		noop: noop,
		no: no,
		identity: identity,
		genStaticKeys: genStaticKeys,
		looseEqual: looseEqual,
		looseIndexOf: looseIndexOf,
		isReserved: isReserved,
		def: def,
		parsePath: parsePath,
		hasProto: hasProto,
		inBrowser: inBrowser,
		UA: UA,
		isIE: isIE,
		isIE9: isIE9,
		isEdge: isEdge,
		isAndroid: isAndroid,
		isIOS: isIOS,
		isServerRendering: isServerRendering,
		devtools: devtools,
		nextTick: nextTick,
		get _Set () { return _Set; },
		mergeOptions: mergeOptions,
		resolveAsset: resolveAsset,
		get warn () { return warn; },
		get formatComponentName () { return formatComponentName; },
		validateProp: validateProp
	});

	/* not type checking this file because flow doesn't play well with Proxy */

	var initProxy;

	{
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
	  componentOptions
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
	};

	var prototypeAccessors = { child: {} };

	// DEPRECATED: alias for componentInstance for backwards compat.
	/* istanbul ignore next */
	prototypeAccessors.child.get = function () {
	  return this.componentInstance
	};

	Object.defineProperties( VNode.prototype, prototypeAccessors );

	var createEmptyVNode = function () {
	  var node = new VNode();
	  node.text = '';
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
	    vnode.componentOptions
	  );
	  cloned.ns = vnode.ns;
	  cloned.isStatic = vnode.isStatic;
	  cloned.key = vnode.key;
	  cloned.isCloned = true;
	  return cloned
	}

	function cloneVNodes (vnodes) {
	  var res = new Array(vnodes.length);
	  for (var i = 0; i < vnodes.length; i++) {
	    res[i] = cloneVNode(vnodes[i]);
	  }
	  return res
	}

	/*  */

	var hooks = { init: init, prepatch: prepatch, insert: insert, destroy: destroy$1 };
	var hooksToMerge = Object.keys(hooks);

	function createComponent (
	  Ctor,
	  data,
	  context,
	  children,
	  tag
	) {
	  if (!Ctor) {
	    return
	  }

	  var baseCtor = context.$options._base;
	  if (isObject(Ctor)) {
	    Ctor = baseCtor.extend(Ctor);
	  }

	  if (typeof Ctor !== 'function') {
	    {
	      warn(("Invalid Component definition: " + (String(Ctor))), context);
	    }
	    return
	  }

	  // async component
	  if (!Ctor.cid) {
	    if (Ctor.resolved) {
	      Ctor = Ctor.resolved;
	    } else {
	      Ctor = resolveAsyncComponent(Ctor, baseCtor, function () {
	        // it's ok to queue this on every render because
	        // $forceUpdate is buffered by the scheduler.
	        context.$forceUpdate();
	      });
	      if (!Ctor) {
	        // return nothing if this is indeed an async component
	        // wait for the callback to trigger parent update.
	        return
	      }
	    }
	  }

	  // resolve constructor options in case global mixins are applied after
	  // component constructor creation
	  resolveConstructorOptions(Ctor);

	  data = data || {};

	  // extract props
	  var propsData = extractProps(data, Ctor);

	  // functional component
	  if (Ctor.options.functional) {
	    return createFunctionalComponent(Ctor, propsData, data, context, children)
	  }

	  // extract listeners, since these needs to be treated as
	  // child component listeners instead of DOM listeners
	  var listeners = data.on;
	  // replace with listeners with .native modifier
	  data.on = data.nativeOn;

	  if (Ctor.options.abstract) {
	    // abstract components do not keep anything
	    // other than props & listeners
	    data = {};
	  }

	  // merge component management hooks onto the placeholder node
	  mergeHooks(data);

	  // return a placeholder vnode
	  var name = Ctor.options.name || tag;
	  var vnode = new VNode(
	    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
	    data, undefined, undefined, undefined, context,
	    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children }
	  );
	  return vnode
	}

	function createFunctionalComponent (
	  Ctor,
	  propsData,
	  data,
	  context,
	  children
	) {
	  var props = {};
	  var propOptions = Ctor.options.props;
	  if (propOptions) {
	    for (var key in propOptions) {
	      props[key] = validateProp(key, propOptions, propsData);
	    }
	  }
	  // ensure the createElement function in functional components
	  // gets a unique context - this is necessary for correct named slot check
	  var _context = Object.create(context);
	  var h = function (a, b, c, d) { return createElement(_context, a, b, c, d, true); };
	  var vnode = Ctor.options.render.call(null, h, {
	    props: props,
	    data: data,
	    parent: context,
	    children: children,
	    slots: function () { return resolveSlots(children, context); }
	  });
	  if (vnode instanceof VNode) {
	    vnode.functionalContext = context;
	    if (data.slot) {
	      (vnode.data || (vnode.data = {})).slot = data.slot;
	    }
	  }
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
	  if (inlineTemplate) {
	    options.render = inlineTemplate.render;
	    options.staticRenderFns = inlineTemplate.staticRenderFns;
	  }
	  return new vnodeComponentOptions.Ctor(options)
	}

	function init (
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
	    prepatch(mountedNode, mountedNode);
	  }
	}

	function prepatch (
	  oldVnode,
	  vnode
	) {
	  var options = vnode.componentOptions;
	  var child = vnode.componentInstance = oldVnode.componentInstance;
	  child._updateFromParent(
	    options.propsData, // updated props
	    options.listeners, // updated listeners
	    vnode, // new parent vnode
	    options.children // new children
	  );
	}

	function insert (vnode) {
	  if (!vnode.componentInstance._isMounted) {
	    vnode.componentInstance._isMounted = true;
	    callHook(vnode.componentInstance, 'mounted');
	  }
	  if (vnode.data.keepAlive) {
	    vnode.componentInstance._inactive = false;
	    callHook(vnode.componentInstance, 'activated');
	  }
	}

	function destroy$1 (vnode) {
	  if (!vnode.componentInstance._isDestroyed) {
	    if (!vnode.data.keepAlive) {
	      vnode.componentInstance.$destroy();
	    } else {
	      vnode.componentInstance._inactive = true;
	      callHook(vnode.componentInstance, 'deactivated');
	    }
	  }
	}

	function resolveAsyncComponent (
	  factory,
	  baseCtor,
	  cb
	) {
	  if (factory.requested) {
	    // pool callbacks
	    factory.pendingCallbacks.push(cb);
	  } else {
	    factory.requested = true;
	    var cbs = factory.pendingCallbacks = [cb];
	    var sync = true;

	    var resolve = function (res) {
	      if (isObject(res)) {
	        res = baseCtor.extend(res);
	      }
	      // cache resolved
	      factory.resolved = res;
	      // invoke callbacks only if this is not a synchronous resolve
	      // (async resolves are shimmed as synchronous during SSR)
	      if (!sync) {
	        for (var i = 0, l = cbs.length; i < l; i++) {
	          cbs[i](res);
	        }
	      }
	    };

	    var reject = function (reason) {
	      "development" !== 'production' && warn(
	        "Failed to resolve async component: " + (String(factory)) +
	        (reason ? ("\nReason: " + reason) : '')
	      );
	    };

	    var res = factory(resolve, reject);

	    // handle promise
	    if (res && typeof res.then === 'function' && !factory.resolved) {
	      res.then(resolve, reject);
	    }

	    sync = false;
	    // return in case resolved synchronously
	    return factory.resolved
	  }
	}

	function extractProps (data, Ctor) {
	  // we are only extracting raw values here.
	  // validation and default values are handled in the child
	  // component itself.
	  var propOptions = Ctor.options.props;
	  if (!propOptions) {
	    return
	  }
	  var res = {};
	  var attrs = data.attrs;
	  var props = data.props;
	  var domProps = data.domProps;
	  if (attrs || props || domProps) {
	    for (var key in propOptions) {
	      var altKey = hyphenate(key);
	      checkProp(res, props, key, altKey, true) ||
	      checkProp(res, attrs, key, altKey) ||
	      checkProp(res, domProps, key, altKey);
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
	  if (hash) {
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

	function mergeHooks (data) {
	  if (!data.hook) {
	    data.hook = {};
	  }
	  for (var i = 0; i < hooksToMerge.length; i++) {
	    var key = hooksToMerge[i];
	    var fromParent = data.hook[key];
	    var ours = hooks[key];
	    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
	  }
	}

	function mergeHook$1 (one, two) {
	  return function (a, b, c, d) {
	    one(a, b, c, d);
	    two(a, b, c, d);
	  }
	}

	/*  */

	function mergeVNodeHook (def, hookKey, hook, key) {
	  key = key + hookKey;
	  var injectedHash = def.__injected || (def.__injected = {});
	  if (!injectedHash[key]) {
	    injectedHash[key] = true;
	    var oldHook = def[hookKey];
	    if (oldHook) {
	      def[hookKey] = function () {
	        oldHook.apply(this, arguments);
	        hook.apply(this, arguments);
	      };
	    } else {
	      def[hookKey] = hook;
	    }
	  }
	}

	/*  */

	var normalizeEvent = cached(function (name) {
	  var once = name.charAt(0) === '~'; // Prefixed last, checked first
	  name = once ? name.slice(1) : name;
	  var capture = name.charAt(0) === '!';
	  name = capture ? name.slice(1) : name;
	  return {
	    name: name,
	    once: once,
	    capture: capture
	  }
	});

	function createEventHandle (fn) {
	  var handle = {
	    fn: fn,
	    invoker: function () {
	      var arguments$1 = arguments;

	      var fn = handle.fn;
	      if (Array.isArray(fn)) {
	        for (var i = 0; i < fn.length; i++) {
	          fn[i].apply(null, arguments$1);
	        }
	      } else {
	        fn.apply(null, arguments);
	      }
	    }
	  };
	  return handle
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
	    if (!cur) {
	      "development" !== 'production' && warn(
	        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
	        vm
	      );
	    } else if (!old) {
	      if (!cur.invoker) {
	        cur = on[name] = createEventHandle(cur);
	      }
	      add(event.name, cur.invoker, event.once, event.capture);
	    } else if (cur !== old) {
	      old.fn = cur;
	      on[name] = old;
	    }
	  }
	  for (name in oldOn) {
	    if (!on[name]) {
	      event = normalizeEvent(name);
	      remove$$1(event.name, oldOn[name].invoker, event.capture);
	    }
	  }
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
	// nomralization is needed - if any child is an Array, we flatten the whole
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

	// 2. When the children contains constrcuts that always generated nested Arrays,
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

	function normalizeArrayChildren (children, nestedIndex) {
	  var res = [];
	  var i, c, last;
	  for (i = 0; i < children.length; i++) {
	    c = children[i];
	    if (c == null || typeof c === 'boolean') { continue }
	    last = res[res.length - 1];
	    //  nested
	    if (Array.isArray(c)) {
	      res.push.apply(res, normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i)));
	    } else if (isPrimitive(c)) {
	      if (last && last.text) {
	        last.text += String(c);
	      } else if (c !== '') {
	        // convert primitive to vnode
	        res.push(createTextVNode(c));
	      }
	    } else {
	      if (c.text && last && last.text) {
	        res[res.length - 1] = createTextVNode(last.text + c.text);
	      } else {
	        // default key for nested array children (likely generated by v-for)
	        if (c.tag && c.key == null && nestedIndex != null) {
	          c.key = "__vlist" + nestedIndex + "_" + i + "__";
	        }
	        res.push(c);
	      }
	    }
	  }
	  return res
	}

	/*  */

	function getFirstComponentChild (children) {
	  return children && children.filter(function (c) { return c && c.componentOptions; })[0]
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
	  if (alwaysNormalize) { normalizationType = ALWAYS_NORMALIZE; }
	  return _createElement(context, tag, data, children, normalizationType)
	}

	function _createElement (
	  context,
	  tag,
	  data,
	  children,
	  normalizationType
	) {
	  if (data && data.__ob__) {
	    "development" !== 'production' && warn(
	      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
	      'Always create fresh vnode data objects in each render!',
	      context
	    );
	    return createEmptyVNode()
	  }
	  if (!tag) {
	    // in case of component :is set to falsy value
	    return createEmptyVNode()
	  }
	  // support single function children as default scoped slot
	  if (Array.isArray(children) &&
	      typeof children[0] === 'function') {
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
	    } else if ((Ctor = resolveAsset(context.$options, 'components', tag))) {
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
	  if (vnode) {
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
	  if (vnode.children) {
	    for (var i = 0, l = vnode.children.length; i < l; i++) {
	      var child = vnode.children[i];
	      if (child.tag && !child.ns) {
	        applyNS(child, ns);
	      }
	    }
	  }
	}

	/*  */

	function initRender (vm) {
	  vm.$vnode = null; // the placeholder node in parent tree
	  vm._vnode = null; // the root of the child tree
	  vm._staticTrees = null;
	  var parentVnode = vm.$options._parentVnode;
	  var renderContext = parentVnode && parentVnode.context;
	  vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext);
	  vm.$scopedSlots = {};
	  // bind the createElement fn to this instance
	  // so that we get proper render context inside it.
	  // args order: tag, data, children, normalizationType, alwaysNormalize
	  // internal version is used by render functions compiled from templates
	  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
	  // normalization is always applied for the public version, used in
	  // user-written render functions.
	  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };
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

	    if (_parentVnode && _parentVnode.data.scopedSlots) {
	      vm.$scopedSlots = _parentVnode.data.scopedSlots;
	    }

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
	      /* istanbul ignore else */
	      if (config.errorHandler) {
	        config.errorHandler.call(null, e, vm);
	      } else {
	        {
	          warn(("Error when rendering " + (formatComponentName(vm)) + ":"));
	        }
	        throw e
	      }
	      // return previous vnode to prevent render error causing blank component
	      vnode = vm._vnode;
	    }
	    // return empty vnode in case the render function errored out
	    if (!(vnode instanceof VNode)) {
	      if ("development" !== 'production' && Array.isArray(vnode)) {
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

	  // toString for mustaches
	  Vue.prototype._s = _toString;
	  // convert text to vnode
	  Vue.prototype._v = createTextVNode;
	  // number conversion
	  Vue.prototype._n = toNumber;
	  // empty vnode
	  Vue.prototype._e = createEmptyVNode;
	  // loose equal
	  Vue.prototype._q = looseEqual;
	  // loose indexOf
	  Vue.prototype._i = looseIndexOf;

	  // render static tree by index
	  Vue.prototype._m = function renderStatic (
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
	    tree = this._staticTrees[index] = this.$options.staticRenderFns[index].call(this._renderProxy);
	    markStatic(tree, ("__static__" + index), false);
	    return tree
	  };

	  // mark node as static (v-once)
	  Vue.prototype._o = function markOnce (
	    tree,
	    index,
	    key
	  ) {
	    markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
	    return tree
	  };

	  function markStatic (tree, key, isOnce) {
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

	  // filter resolution helper
	  Vue.prototype._f = function resolveFilter (id) {
	    return resolveAsset(this.$options, 'filters', id, true) || identity
	  };

	  // render v-for
	  Vue.prototype._l = function renderList (
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
	    return ret
	  };

	  // renderSlot
	  Vue.prototype._t = function (
	    name,
	    fallback,
	    props,
	    bindObject
	  ) {
	    var scopedSlotFn = this.$scopedSlots[name];
	    if (scopedSlotFn) { // scoped slot
	      props = props || {};
	      if (bindObject) {
	        extend(props, bindObject);
	      }
	      return scopedSlotFn(props) || fallback
	    } else {
	      var slotNodes = this.$slots[name];
	      // warn duplicate slot usage
	      if (slotNodes && "development" !== 'production') {
	        slotNodes._rendered && warn(
	          "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
	          "- this will likely cause render errors.",
	          this
	        );
	        slotNodes._rendered = true;
	      }
	      return slotNodes || fallback
	    }
	  };

	  // apply v-bind object
	  Vue.prototype._b = function bindProps (
	    data,
	    tag,
	    value,
	    asProp
	  ) {
	    if (value) {
	      if (!isObject(value)) {
	        "development" !== 'production' && warn(
	          'v-bind without argument expects an Object or Array value',
	          this
	        );
	      } else {
	        if (Array.isArray(value)) {
	          value = toObject(value);
	        }
	        for (var key in value) {
	          if (key === 'class' || key === 'style') {
	            data[key] = value[key];
	          } else {
	            var type = data.attrs && data.attrs.type;
	            var hash = asProp || config.mustUseProp(tag, type, key)
	              ? data.domProps || (data.domProps = {})
	              : data.attrs || (data.attrs = {});
	            hash[key] = value[key];
	          }
	        }
	      }
	    }
	    return data
	  };

	  // check v-on keyCodes
	  Vue.prototype._k = function checkKeyCodes (
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
	  };
	}

	function resolveSlots (
	  children,
	  context
	) {
	  var slots = {};
	  if (!children) {
	    return slots
	  }
	  var defaultSlot = [];
	  var name, child;
	  for (var i = 0, l = children.length; i < l; i++) {
	    child = children[i];
	    // named slots should only be respected if the vnode was rendered in the
	    // same context.
	    if ((child.context === context || child.functionalContext === context) &&
	        child.data && (name = child.data.slot)) {
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
	  // ignore single whitespace
	  if (defaultSlot.length && !(
	    defaultSlot.length === 1 &&
	    (defaultSlot[0].text === ' ' || defaultSlot[0].isComment)
	  )) {
	    slots.default = defaultSlot;
	  }
	  return slots
	}

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

	function add$1 (event, fn, once) {
	  if (once) {
	    target.$once(event, fn);
	  } else {
	    target.$on(event, fn);
	  }
	}

	function remove$2 (event, fn) {
	  target.$off(event, fn);
	}

	function updateComponentListeners (
	  vm,
	  listeners,
	  oldListeners
	) {
	  target = vm;
	  updateListeners(listeners, oldListeners || {}, add$1, remove$2, vm);
	}

	function eventsMixin (Vue) {
	  var hookRE = /^hook:/;
	  Vue.prototype.$on = function (event, fn) {
	    var vm = this;(vm._events[event] || (vm._events[event] = [])).push(fn);
	    // optimize hook:event cost by using a boolean flag marked at registration
	    // instead of a hash lookup
	    if (hookRE.test(event)) {
	      vm._hasHookEvent = true;
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
	    var vm = this;
	    // all
	    if (!arguments.length) {
	      vm._events = Object.create(null);
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
	    var cbs = vm._events[event];
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      var args = toArray(arguments, 1);
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        cbs[i].apply(vm, args);
	      }
	    }
	    return vm
	  };
	}

	/*  */

	var activeInstance = null;

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
	  vm._inactive = false;
	  vm._isMounted = false;
	  vm._isDestroyed = false;
	  vm._isBeingDestroyed = false;
	}

	function lifecycleMixin (Vue) {
	  Vue.prototype._mount = function (
	    el,
	    hydrating
	  ) {
	    var vm = this;
	    vm.$el = el;
	    if (!vm.$options.render) {
	      vm.$options.render = createEmptyVNode;
	      {
	        /* istanbul ignore if */
	        if (vm.$options.template && vm.$options.template.charAt(0) !== '#') {
	          warn(
	            'You are using the runtime-only build of Vue where the template ' +
	            'option is not available. Either pre-compile the templates into ' +
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
	    vm._watcher = new Watcher(vm, function updateComponent () {
	      vm._update(vm._render(), hydrating);
	    }, noop);
	    hydrating = false;
	    // manually mounted instance, call mounted on self
	    // mounted is called for render-created child components in its inserted hook
	    if (vm.$vnode == null) {
	      vm._isMounted = true;
	      callHook(vm, 'mounted');
	    }
	    return vm
	  };

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

	  Vue.prototype._updateFromParent = function (
	    propsData,
	    listeners,
	    parentVnode,
	    renderChildren
	  ) {
	    var vm = this;
	    var hasChildren = !!(vm.$options._renderChildren || renderChildren);
	    vm.$options._parentVnode = parentVnode;
	    vm.$vnode = parentVnode; // update vm's placeholder node without re-render
	    if (vm._vnode) { // update child tree's parent
	      vm._vnode.parent = parentVnode;
	    }
	    vm.$options._renderChildren = renderChildren;
	    // update props
	    if (propsData && vm.$options.props) {
	      observerState.shouldConvert = false;
	      {
	        observerState.isSettingProps = true;
	      }
	      var propKeys = vm.$options._propKeys || [];
	      for (var i = 0; i < propKeys.length; i++) {
	        var key = propKeys[i];
	        vm[key] = validateProp(key, vm.$options.props, propsData, vm);
	      }
	      observerState.shouldConvert = true;
	      {
	        observerState.isSettingProps = false;
	      }
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
	      remove$1(parent.$children, vm);
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
	    callHook(vm, 'destroyed');
	    // turn off all instance listeners.
	    vm.$off();
	    // remove __vue__ reference
	    if (vm.$el) {
	      vm.$el.__vue__ = null;
	    }
	    // invoke destroy hooks on current rendered tree
	    vm.__patch__(vm._vnode, null);
	  };
	}

	function callHook (vm, hook) {
	  var handlers = vm.$options[hook];
	  if (handlers) {
	    for (var i = 0, j = handlers.length; i < j; i++) {
	      handlers[i].call(vm);
	    }
	  }
	  if (vm._hasHookEvent) {
	    vm.$emit('hook:' + hook);
	  }
	}

	/*  */


	var queue = [];
	var has$1 = {};
	var circular = {};
	var waiting = false;
	var flushing = false;
	var index = 0;

	/**
	 * Reset the scheduler's state.
	 */
	function resetSchedulerState () {
	  queue.length = 0;
	  has$1 = {};
	  {
	    circular = {};
	  }
	  waiting = flushing = false;
	}

	/**
	 * Flush both queues and run the watchers.
	 */
	function flushSchedulerQueue () {
	  flushing = true;
	  var watcher, id, vm;

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
	    has$1[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if ("development" !== 'production' && has$1[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > config._maxUpdateCount) {
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

	  // call updated hooks
	  index = queue.length;
	  while (index--) {
	    watcher = queue[index];
	    vm = watcher.vm;
	    if (vm._watcher === watcher && vm._isMounted) {
	      callHook(vm, 'updated');
	    }
	  }

	  // devtool hook
	  /* istanbul ignore if */
	  if (devtools && config.devtools) {
	    devtools.emit('flush');
	  }

	  resetSchedulerState();
	}

	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 */
	function queueWatcher (watcher) {
	  var id = watcher.id;
	  if (has$1[id] == null) {
	    has$1[id] = true;
	    if (!flushing) {
	      queue.push(watcher);
	    } else {
	      // if already flushing, splice the watcher based on its id
	      // if already past its id, it will be run next immediately.
	      var i = queue.length - 1;
	      while (i >= 0 && queue[i].id > watcher.id) {
	        i--;
	      }
	      queue.splice(Math.max(i, index) + 1, 0, watcher);
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
	  this.expression = expOrFn.toString();
	  // parse expression for getter
	  if (typeof expOrFn === 'function') {
	    this.getter = expOrFn;
	  } else {
	    this.getter = parsePath(expOrFn);
	    if (!this.getter) {
	      this.getter = function () {};
	      "development" !== 'production' && warn(
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
	  var value = this.getter.call(this.vm, this.vm);
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  popTarget();
	  this.cleanupDeps();
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
	          /* istanbul ignore else */
	          if (config.errorHandler) {
	            config.errorHandler.call(null, e, this.vm);
	          } else {
	            "development" !== 'production' && warn(
	              ("Error in watcher \"" + (this.expression) + "\""),
	              this.vm
	            );
	            throw e
	          }
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
	      remove$1(this.vm._watchers, this);
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
	  if (opts.watch) { initWatch(vm, opts.watch); }
	}

	var isReservedProp = { key: 1, ref: 1, slot: 1 };

	function initProps (vm, props) {
	  var propsData = vm.$options.propsData || {};
	  var keys = vm.$options._propKeys = Object.keys(props);
	  var isRoot = !vm.$parent;
	  // root instance props should be converted
	  observerState.shouldConvert = isRoot;
	  var loop = function ( i ) {
	    var key = keys[i];
	    /* istanbul ignore else */
	    {
	      if (isReservedProp[key]) {
	        warn(
	          ("\"" + key + "\" is a reserved attribute and cannot be used as component prop."),
	          vm
	        );
	      }
	      defineReactive$$1(vm, key, validateProp(key, props, propsData, vm), function () {
	        if (vm.$parent && !observerState.isSettingProps) {
	          warn(
	            "Avoid mutating a prop directly since the value will be " +
	            "overwritten whenever the parent component re-renders. " +
	            "Instead, use a data or computed property based on the prop's " +
	            "value. Prop being mutated: \"" + key + "\"",
	            vm
	          );
	        }
	      });
	    }
	  };

	  for (var i = 0; i < keys.length; i++) loop( i );
	  observerState.shouldConvert = true;
	}

	function initData (vm) {
	  var data = vm.$options.data;
	  data = vm._data = typeof data === 'function'
	    ? data.call(vm)
	    : data || {};
	  if (!isPlainObject(data)) {
	    data = {};
	    "development" !== 'production' && warn(
	      'data functions should return an object:\n' +
	      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
	      vm
	    );
	  }
	  // proxy data on instance
	  var keys = Object.keys(data);
	  var props = vm.$options.props;
	  var i = keys.length;
	  while (i--) {
	    if (props && hasOwn(props, keys[i])) {
	      "development" !== 'production' && warn(
	        "The data property \"" + (keys[i]) + "\" is already declared as a prop. " +
	        "Use prop default value instead.",
	        vm
	      );
	    } else {
	      proxy(vm, keys[i]);
	    }
	  }
	  // observe data
	  observe(data, true /* asRootData */);
	}

	var computedSharedDefinition = {
	  enumerable: true,
	  configurable: true,
	  get: noop,
	  set: noop
	};

	function initComputed (vm, computed) {
	  for (var key in computed) {
	    /* istanbul ignore if */
	    if ("development" !== 'production' && key in vm) {
	      warn(
	        "existing instance property \"" + key + "\" will be " +
	        "overwritten by a computed property with the same name.",
	        vm
	      );
	    }
	    var userDef = computed[key];
	    if (typeof userDef === 'function') {
	      computedSharedDefinition.get = makeComputedGetter(userDef, vm);
	      computedSharedDefinition.set = noop;
	    } else {
	      computedSharedDefinition.get = userDef.get
	        ? userDef.cache !== false
	          ? makeComputedGetter(userDef.get, vm)
	          : bind$1(userDef.get, vm)
	        : noop;
	      computedSharedDefinition.set = userDef.set
	        ? bind$1(userDef.set, vm)
	        : noop;
	    }
	    Object.defineProperty(vm, key, computedSharedDefinition);
	  }
	}

	function makeComputedGetter (getter, owner) {
	  var watcher = new Watcher(owner, getter, noop, {
	    lazy: true
	  });
	  return function computedGetter () {
	    if (watcher.dirty) {
	      watcher.evaluate();
	    }
	    if (Dep.target) {
	      watcher.depend();
	    }
	    return watcher.value
	  }
	}

	function initMethods (vm, methods) {
	  for (var key in methods) {
	    vm[key] = methods[key] == null ? noop : bind$1(methods[key], vm);
	    if ("development" !== 'production' && methods[key] == null) {
	      warn(
	        "method \"" + key + "\" has an undefined value in the component definition. " +
	        "Did you reference the function correctly?",
	        vm
	      );
	    }
	  }
	}

	function initWatch (vm, watch) {
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

	function createWatcher (vm, key, handler) {
	  var options;
	  if (isPlainObject(handler)) {
	    options = handler;
	    handler = handler.handler;
	  }
	  if (typeof handler === 'string') {
	    handler = vm[handler];
	  }
	  vm.$watch(key, handler, options);
	}

	function stateMixin (Vue) {
	  // flow somehow has problems with directly declared definition object
	  // when using Object.defineProperty, so we have to procedurally build up
	  // the object here.
	  var dataDef = {};
	  dataDef.get = function () {
	    return this._data
	  };
	  {
	    dataDef.set = function (newData) {
	      warn(
	        'Avoid replacing instance root $data. ' +
	        'Use nested data properties instead.',
	        this
	      );
	    };
	  }
	  Object.defineProperty(Vue.prototype, '$data', dataDef);

	  Vue.prototype.$set = set$1;
	  Vue.prototype.$delete = del;

	  Vue.prototype.$watch = function (
	    expOrFn,
	    cb,
	    options
	  ) {
	    var vm = this;
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

	function proxy (vm, key) {
	  if (!isReserved(key)) {
	    Object.defineProperty(vm, key, {
	      configurable: true,
	      enumerable: true,
	      get: function proxyGetter () {
	        return vm._data[key]
	      },
	      set: function proxySetter (val) {
	        vm._data[key] = val;
	      }
	    });
	  }
	}

	/*  */

	var uid = 0;

	function initMixin (Vue) {
	  Vue.prototype._init = function (options) {
	    var vm = this;
	    // a uid
	    vm._uid = uid++;
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
	    {
	      initProxy(vm);
	    }
	    // expose real self
	    vm._self = vm;
	    initLifecycle(vm);
	    initEvents(vm);
	    initRender(vm);
	    callHook(vm, 'beforeCreate');
	    initState(vm);
	    callHook(vm, 'created');
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
	    var superOptions = Ctor.super.options;
	    var cachedSuperOptions = Ctor.superOptions;
	    var extendOptions = Ctor.extendOptions;
	    if (superOptions !== cachedSuperOptions) {
	      // super option changed
	      Ctor.superOptions = superOptions;
	      extendOptions.render = options.render;
	      extendOptions.staticRenderFns = options.staticRenderFns;
	      extendOptions._scopeId = options._scopeId;
	      options = Ctor.options = mergeOptions(superOptions, extendOptions);
	      if (options.name) {
	        options.components[options.name] = Ctor;
	      }
	    }
	  }
	  return options
	}

	function Vue$3 (options) {
	  if ("development" !== 'production' &&
	    !(this instanceof Vue$3)) {
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
	    /* istanbul ignore if */
	    if (plugin.installed) {
	      return
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
	    return this
	  };
	}

	/*  */

	function initMixin$1 (Vue) {
	  Vue.mixin = function (mixin) {
	    this.options = mergeOptions(this.options, mixin);
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
	    {
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
	    // allow further extension/mixin/plugin usage
	    Sub.extend = Super.extend;
	    Sub.mixin = Super.mixin;
	    Sub.use = Super.use;
	    // create asset registers, so extended classes
	    // can have their private assets too.
	    config._assetTypes.forEach(function (type) {
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
	    // cache constructor
	    cachedCtors[SuperId] = Sub;
	    return Sub
	  };
	}

	/*  */

	function initAssetRegisters (Vue) {
	  /**
	   * Create asset registration methods.
	   */
	  config._assetTypes.forEach(function (type) {
	    Vue[type] = function (
	      id,
	      definition
	    ) {
	      if (!definition) {
	        return this.options[type + 's'][id]
	      } else {
	        /* istanbul ignore if */
	        {
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

	var patternTypes = [String, RegExp];

	function getComponentName (opts) {
	  return opts && (opts.Ctor.options.name || opts.tag)
	}

	function matches (pattern, name) {
	  if (typeof pattern === 'string') {
	    return pattern.split(',').indexOf(name) > -1
	  } else {
	    return pattern.test(name)
	  }
	}

	function pruneCache (cache, filter) {
	  for (var key in cache) {
	    var cachedNode = cache[key];
	    if (cachedNode) {
	      var name = getComponentName(cachedNode.componentOptions);
	      if (name && !filter(name)) {
	        pruneCacheEntry(cachedNode);
	        cache[key] = null;
	      }
	    }
	  }
	}

	function pruneCacheEntry (vnode) {
	  if (vnode) {
	    if (!vnode.componentInstance._inactive) {
	      callHook(vnode.componentInstance, 'deactivated');
	    }
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

	    for (var key in this.cache) {
	      pruneCacheEntry(this$1.cache[key]);
	    }
	  },

	  watch: {
	    include: function include (val) {
	      pruneCache(this.cache, function (name) { return matches(val, name); });
	    },
	    exclude: function exclude (val) {
	      pruneCache(this.cache, function (name) { return !matches(val, name); });
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
	  {
	    configDef.set = function () {
	      warn(
	        'Do not replace the Vue.config object, set individual fields instead.'
	      );
	    };
	  }
	  Object.defineProperty(Vue, 'config', configDef);
	  Vue.util = util;
	  Vue.set = set$1;
	  Vue.delete = del;
	  Vue.nextTick = nextTick;

	  Vue.options = Object.create(null);
	  config._assetTypes.forEach(function (type) {
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

	Vue$3.version = '2.1.10';

	/*  */

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
	  while (childNode.componentInstance) {
	    childNode = childNode.componentInstance._vnode;
	    if (childNode.data) {
	      data = mergeClassData(childNode.data, data);
	    }
	  }
	  while ((parentNode = parentNode.parent)) {
	    if (parentNode.data) {
	      data = mergeClassData(data, parentNode.data);
	    }
	  }
	  return genClassFromData(data)
	}

	function mergeClassData (child, parent) {
	  return {
	    staticClass: concat(child.staticClass, parent.staticClass),
	    class: child.class
	      ? [child.class, parent.class]
	      : parent.class
	  }
	}

	function genClassFromData (data) {
	  var dynamicClass = data.class;
	  var staticClass = data.staticClass;
	  if (staticClass || dynamicClass) {
	    return concat(staticClass, stringifyClass(dynamicClass))
	  }
	  /* istanbul ignore next */
	  return ''
	}

	function concat (a, b) {
	  return a ? b ? (a + ' ' + b) : a : (b || '')
	}

	function stringifyClass (value) {
	  var res = '';
	  if (!value) {
	    return res
	  }
	  if (typeof value === 'string') {
	    return value
	  }
	  if (Array.isArray(value)) {
	    var stringified;
	    for (var i = 0, l = value.length; i < l; i++) {
	      if (value[i]) {
	        if ((stringified = stringifyClass(value[i]))) {
	          res += stringified + ' ';
	        }
	      }
	    }
	    return res.slice(0, -1)
	  }
	  if (isObject(value)) {
	    for (var key in value) {
	      if (value[key]) { res += key + ' '; }
	    }
	    return res.slice(0, -1)
	  }
	  /* istanbul ignore next */
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
	  'div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,' +
	  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
	  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
	  'embed,object,param,source,canvas,script,noscript,del,ins,' +
	  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
	  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
	  'output,progress,select,textarea,' +
	  'details,dialog,menu,menuitem,summary,' +
	  'content,element,shadow,template'
	);

	// this map is intentionally selective, only covering SVG elements that may
	// contain child elements.
	var isSVG = makeMap(
	  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,' +
	  'font-face,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
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
	    var selector = el;
	    el = document.querySelector(el);
	    if (!el) {
	      "development" !== 'production' && warn(
	        'Cannot find element: ' + selector
	      );
	      return document.createElement('div')
	    }
	  }
	  return el
	}

	/*  */

	function createElement$1 (tagName, vnode) {
	  var elm = document.createElement(tagName);
	  if (tagName !== 'select') {
	    return elm
	  }
	  if (vnode.data && vnode.data.attrs && 'multiple' in vnode.data.attrs) {
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
	      remove$1(refs[key], ref);
	    } else if (refs[key] === ref) {
	      refs[key] = undefined;
	    }
	  } else {
	    if (vnode.data.refInFor) {
	      if (Array.isArray(refs[key]) && refs[key].indexOf(ref) < 0) {
	        refs[key].push(ref);
	      } else {
	        refs[key] = [ref];
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

	var hooks$1 = ['create', 'activate', 'update', 'remove', 'destroy'];

	function isUndef (s) {
	  return s == null
	}

	function isDef (s) {
	  return s != null
	}

	function sameVnode (vnode1, vnode2) {
	  return (
	    vnode1.key === vnode2.key &&
	    vnode1.tag === vnode2.tag &&
	    vnode1.isComment === vnode2.isComment &&
	    !vnode1.data === !vnode2.data
	  )
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

	  for (i = 0; i < hooks$1.length; ++i) {
	    cbs[hooks$1[i]] = [];
	    for (j = 0; j < modules.length; ++j) {
	      if (modules[j][hooks$1[i]] !== undefined) { cbs[hooks$1[i]].push(modules[j][hooks$1[i]]); }
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
	    if (parent) {
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
	      {
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

	      if ("development" !== 'production' && data && data.pre) {
	        inPre--;
	      }
	    } else if (vnode.isComment) {
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
	        if (isReactivated) {
	          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
	        }
	        return true
	      }
	    }
	  }

	  function initComponent (vnode, insertedVnodeQueue) {
	    if (vnode.data.pendingInsert) {
	      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
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

	  function insert (parent, elm, ref) {
	    if (parent) {
	      if (ref) {
	        nodeOps.insertBefore(parent, elm, ref);
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
	      if (i.create) { i.create(emptyNode, vnode); }
	      if (i.insert) { insertedVnodeQueue.push(vnode); }
	    }
	  }

	  // set scope id attribute for scoped CSS.
	  // this is implemented as a special case to avoid the overhead
	  // of going through the normal attribute patching process.
	  function setScope (vnode) {
	    var i;
	    if (isDef(i = vnode.context) && isDef(i = i.$options._scopeId)) {
	      nodeOps.setAttribute(vnode.elm, i, '');
	    }
	    if (isDef(i = activeInstance) &&
	        i !== vnode.context &&
	        isDef(i = i.$options._scopeId)) {
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
	    if (rm || isDef(vnode.data)) {
	      var listeners = cbs.remove.length + 1;
	      if (!rm) {
	        // directly removing
	        rm = createRmCb(vnode.elm, listeners);
	      } else {
	        // we have a recursively passed down rm callback
	        // increase the listeners count
	        rm.listeners += listeners;
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
	          if ("development" !== 'production' && !elmToMove) {
	            warn(
	              'It seems there are duplicate keys that is causing an update error. ' +
	              'Make sure each v-for item has a unique key.'
	            );
	          }
	          if (sameVnode(elmToMove, newStartVnode)) {
	            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
	            oldCh[idxInOld] = undefined;
	            canMove && nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm);
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
	    // reuse element for static trees.
	    // note we only do this if the vnode is cloned -
	    // if the new node is not cloned it means the render functions have been
	    // reset by the hot-reload-api and we need to do a proper re-render.
	    if (vnode.isStatic &&
	        oldVnode.isStatic &&
	        vnode.key === oldVnode.key &&
	        (vnode.isCloned || vnode.isOnce)) {
	      vnode.elm = oldVnode.elm;
	      vnode.componentInstance = oldVnode.componentInstance;
	      return
	    }
	    var i;
	    var data = vnode.data;
	    var hasData = isDef(data);
	    if (hasData && isDef(i = data.hook) && isDef(i = i.prepatch)) {
	      i(oldVnode, vnode);
	    }
	    var elm = vnode.elm = oldVnode.elm;
	    var oldCh = oldVnode.children;
	    var ch = vnode.children;
	    if (hasData && isPatchable(vnode)) {
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
	    if (hasData) {
	      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
	    }
	  }

	  function invokeInsertHook (vnode, queue, initial) {
	    // delay insert hooks for component root nodes, invoke them after the
	    // element is really inserted
	    if (initial && vnode.parent) {
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
	    {
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
	            if ("development" !== 'production' &&
	                typeof console !== 'undefined' &&
	                !bailed) {
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
	    if (vnode.tag) {
	      return (
	        vnode.tag.indexOf('vue-component') === 0 ||
	        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
	      )
	    } else {
	      return node.nodeType === (vnode.isComment ? 8 : 3)
	    }
	  }

	  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
	    if (!vnode) {
	      if (oldVnode) { invokeDestroyHook(oldVnode); }
	      return
	    }

	    var isInitialPatch = false;
	    var insertedVnodeQueue = [];

	    if (!oldVnode) {
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
	          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute('server-rendered')) {
	            oldVnode.removeAttribute('server-rendered');
	            hydrating = true;
	          }
	          if (hydrating) {
	            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
	              invokeInsertHook(vnode, insertedVnodeQueue, true);
	              return oldVnode
	            } else {
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

	        if (vnode.parent) {
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

	        if (parentElm$1 !== null) {
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
	      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert, 'dir-insert');
	    } else {
	      callInsert();
	    }
	  }

	  if (dirsWithPostpatch.length) {
	    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
	      for (var i = 0; i < dirsWithPostpatch.length; i++) {
	        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
	      }
	    }, 'dir-postpatch');
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
	    fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
	  }
	}

	var baseModules = [
	  ref,
	  directives
	];

	/*  */

	function updateAttrs (oldVnode, vnode) {
	  if (!oldVnode.data.attrs && !vnode.data.attrs) {
	    return
	  }
	  var key, cur, old;
	  var elm = vnode.elm;
	  var oldAttrs = oldVnode.data.attrs || {};
	  var attrs = vnode.data.attrs || {};
	  // clone observed objects, as the user probably wants to mutate it
	  if (attrs.__ob__) {
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
	    if (attrs[key] == null) {
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
	  if (!data.staticClass && !data.class &&
	      (!oldData || (!oldData.staticClass && !oldData.class))) {
	    return
	  }

	  var cls = genClassForVnode(vnode);

	  // handle transition classes
	  var transitionClass = el._transitionClasses;
	  if (transitionClass) {
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

	var target$1;

	function add$2 (
	  event,
	  handler,
	  once,
	  capture
	) {
	  if (once) {
	    var oldHandler = handler;
	    var _target = target$1; // save current target element in closure
	    handler = function (ev) {
	      remove$3(event, handler, capture, _target);
	      arguments.length === 1
	        ? oldHandler(ev)
	        : oldHandler.apply(null, arguments);
	    };
	  }
	  target$1.addEventListener(event, handler, capture);
	}

	function remove$3 (
	  event,
	  handler,
	  capture,
	  _target
	) {
	  (_target || target$1).removeEventListener(event, handler, capture);
	}

	function updateDOMListeners (oldVnode, vnode) {
	  if (!oldVnode.data.on && !vnode.data.on) {
	    return
	  }
	  var on = vnode.data.on || {};
	  var oldOn = oldVnode.data.on || {};
	  target$1 = vnode.elm;
	  updateListeners(on, oldOn, add$2, remove$3, vnode.context);
	}

	var events = {
	  create: updateDOMListeners,
	  update: updateDOMListeners
	};

	/*  */

	function updateDOMProps (oldVnode, vnode) {
	  if (!oldVnode.data.domProps && !vnode.data.domProps) {
	    return
	  }
	  var key, cur;
	  var elm = vnode.elm;
	  var oldProps = oldVnode.data.domProps || {};
	  var props = vnode.data.domProps || {};
	  // clone observed objects, as the user probably wants to mutate it
	  if (props.__ob__) {
	    props = vnode.data.domProps = extend({}, props);
	  }

	  for (key in oldProps) {
	    if (props[key] == null) {
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
	      var strCur = cur == null ? '' : String(cur);
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
	    isInputChanged(vnode, checkVal)
	  ))
	}

	function isDirty (elm, checkVal) {
	  // return true when textbox (.number and .trim) loses focus and its value is not equal to the updated value
	  return document.activeElement !== elm && elm.value !== checkVal
	}

	function isInputChanged (vnode, newVal) {
	  var value = vnode.elm.value;
	  var modifiers = vnode.elm._vModifiers; // injected by v-model runtime
	  if ((modifiers && modifiers.number) || vnode.elm.type === 'number') {
	    return toNumber(value) !== toNumber(newVal)
	  }
	  if (modifiers && modifiers.trim) {
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
	    el.style[normalize(name)] = val;
	  }
	};

	var prefixes = ['Webkit', 'Moz', 'ms'];

	var testEl;
	var normalize = cached(function (prop) {
	  testEl = testEl || document.createElement('div');
	  prop = camelize(prop);
	  if (prop !== 'filter' && (prop in testEl.style)) {
	    return prop
	  }
	  var upper = prop.charAt(0).toUpperCase() + prop.slice(1);
	  for (var i = 0; i < prefixes.length; i++) {
	    var prefixed = prefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return prefixed
	    }
	  }
	});

	function updateStyle (oldVnode, vnode) {
	  var data = vnode.data;
	  var oldData = oldVnode.data;

	  if (!data.staticStyle && !data.style &&
	      !oldData.staticStyle && !oldData.style) {
	    return
	  }

	  var cur, name;
	  var el = vnode.elm;
	  var oldStaticStyle = oldVnode.data.staticStyle;
	  var oldStyleBinding = oldVnode.data.style || {};

	  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
	  var oldStyle = oldStaticStyle || oldStyleBinding;

	  var style = normalizeStyleBinding(vnode.data.style) || {};

	  vnode.data.style = style.__ob__ ? extend({}, style) : style;

	  var newStyle = getStyle(vnode, true);

	  for (name in oldStyle) {
	    if (newStyle[name] == null) {
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
	  if (!cls || !cls.trim()) {
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
	    var cur = ' ' + el.getAttribute('class') + ' ';
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
	  if (!cls || !cls.trim()) {
	    return
	  }

	  /* istanbul ignore else */
	  if (el.classList) {
	    if (cls.indexOf(' ') > -1) {
	      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
	    } else {
	      el.classList.remove(cls);
	    }
	  } else {
	    var cur = ' ' + el.getAttribute('class') + ' ';
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    el.setAttribute('class', cur.trim());
	  }
	}

	/*  */

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
	    window.onwebkittransitionend !== undefined) {
	    transitionProp = 'WebkitTransition';
	    transitionEndEvent = 'webkitTransitionEnd';
	  }
	  if (window.onanimationend === undefined &&
	    window.onwebkitanimationend !== undefined) {
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
	  (el._transitionClasses || (el._transitionClasses = [])).push(cls);
	  addClass(el, cls);
	}

	function removeTransitionClass (el, cls) {
	  if (el._transitionClasses) {
	    remove$1(el._transitionClasses, cls);
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
	  var transitioneDelays = styles[transitionProp + 'Delay'].split(', ');
	  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
	  var transitionTimeout = getTimeout(transitioneDelays, transitionDurations);
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
	  if (el._leaveCb) {
	    el._leaveCb.cancelled = true;
	    el._leaveCb();
	  }

	  var data = resolveTransition(vnode.data.transition);
	  if (!data) {
	    return
	  }

	  /* istanbul ignore if */
	  if (el._enterCb || el.nodeType !== 1) {
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

	  var startClass = isAppear ? appearClass : enterClass;
	  var activeClass = isAppear ? appearActiveClass : enterActiveClass;
	  var toClass = isAppear ? appearToClass : enterToClass;
	  var beforeEnterHook = isAppear ? (beforeAppear || beforeEnter) : beforeEnter;
	  var enterHook = isAppear ? (typeof appear === 'function' ? appear : enter) : enter;
	  var afterEnterHook = isAppear ? (afterAppear || afterEnter) : afterEnter;
	  var enterCancelledHook = isAppear ? (appearCancelled || enterCancelled) : enterCancelled;

	  var expectsCSS = css !== false && !isIE9;
	  var userWantsControl =
	    enterHook &&
	    // enterHook may be a bound method which exposes
	    // the length of original fn as _length
	    (enterHook._length || enterHook.length) > 1;

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
	          pendingNode.elm._leaveCb) {
	        pendingNode.elm._leaveCb();
	      }
	      enterHook && enterHook(el, cb);
	    }, 'transition-insert');
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
	        whenTransitionEnds(el, type, cb);
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
	  if (el._enterCb) {
	    el._enterCb.cancelled = true;
	    el._enterCb();
	  }

	  var data = resolveTransition(vnode.data.transition);
	  if (!data) {
	    return rm()
	  }

	  /* istanbul ignore if */
	  if (el._leaveCb || el.nodeType !== 1) {
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

	  var expectsCSS = css !== false && !isIE9;
	  var userWantsControl =
	    leave &&
	    // leave hook may be a bound method which exposes
	    // the length of original fn as _length
	    (leave._length || leave.length) > 1;

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
	      (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
	    }
	    beforeLeave && beforeLeave(el);
	    if (expectsCSS) {
	      addTransitionClass(el, leaveClass);
	      addTransitionClass(el, leaveActiveClass);
	      nextFrame(function () {
	        addTransitionClass(el, leaveToClass);
	        removeTransitionClass(el, leaveClass);
	        if (!cb.cancelled && !userWantsControl) {
	          whenTransitionEnds(el, type, cb);
	        }
	      });
	    }
	    leave && leave(el, cb);
	    if (!expectsCSS && !userWantsControl) {
	      cb();
	    }
	  }
	}

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
	    leaveClass: (name + "-leave"),
	    appearClass: (name + "-enter"),
	    enterToClass: (name + "-enter-to"),
	    leaveToClass: (name + "-leave-to"),
	    appearToClass: (name + "-enter-to"),
	    enterActiveClass: (name + "-enter-active"),
	    leaveActiveClass: (name + "-leave-active"),
	    appearActiveClass: (name + "-enter-active")
	  }
	});

	function once (fn) {
	  var called = false;
	  return function () {
	    if (!called) {
	      called = true;
	      fn();
	    }
	  }
	}

	function _enter (_, vnode) {
	  if (!vnode.data.show) {
	    enter(vnode);
	  }
	}

	var transition = inBrowser ? {
	  create: _enter,
	  activate: _enter,
	  remove: function remove (vnode, rm) {
	    /* istanbul ignore else */
	    if (!vnode.data.show) {
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

	var patch$1 = createPatchFunction({ nodeOps: nodeOps, modules: modules });

	/**
	 * Not type checking this file because flow doesn't like attaching
	 * properties to Elements.
	 */

	var modelableTagRE = /^input|select|textarea|vue-component-[0-9]+(-[0-9a-zA-Z_-]*)?$/;

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

	var model = {
	  inserted: function inserted (el, binding, vnode) {
	    {
	      if (!modelableTagRE.test(vnode.tag)) {
	        warn(
	          "v-model is not supported on element type: <" + (vnode.tag) + ">. " +
	          'If you are working with contenteditable, it\'s recommended to ' +
	          'wrap a library dedicated for that purpose inside a custom component.',
	          vnode.context
	        );
	      }
	    }
	    if (vnode.tag === 'select') {
	      var cb = function () {
	        setSelected(el, binding, vnode.context);
	      };
	      cb();
	      /* istanbul ignore if */
	      if (isIE || isEdge) {
	        setTimeout(cb, 0);
	      }
	    } else if (vnode.tag === 'textarea' || el.type === 'text') {
	      el._vModifiers = binding.modifiers;
	      if (!binding.modifiers.lazy) {
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
	      var needReset = el.multiple
	        ? binding.value.some(function (v) { return hasNoMatchingOption(v, el.options); })
	        : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, el.options);
	      if (needReset) {
	        trigger(el, 'change');
	      }
	    }
	  }
	};

	function setSelected (el, binding, vm) {
	  var value = binding.value;
	  var isMultiple = el.multiple;
	  if (isMultiple && !Array.isArray(value)) {
	    "development" !== 'production' && warn(
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

	function hasNoMatchingOption (value, options) {
	  for (var i = 0, l = options.length; i < l; i++) {
	    if (looseEqual(getValue(options[i]), value)) {
	      return false
	    }
	  }
	  return true
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
	    var transition = vnode.data && vnode.data.transition;
	    var originalDisplay = el.__vOriginalDisplay =
	      el.style.display === 'none' ? '' : el.style.display;
	    if (value && transition && !isIE9) {
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
	    var transition = vnode.data && vnode.data.transition;
	    if (transition && !isIE9) {
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
	  model: model,
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
	  appearToClass: String
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
	    data[camelize(key$1)] = listeners[key$1].fn;
	  }
	  return data
	}

	function placeholder (h, rawChild) {
	  return /\d-keep-alive$/.test(rawChild.tag)
	    ? h('keep-alive')
	    : null
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

	var Transition = {
	  name: 'transition',
	  props: transitionProps,
	  abstract: true,

	  render: function render (h) {
	    var this$1 = this;

	    var children = this.$slots.default;
	    if (!children) {
	      return
	    }

	    // filter out text nodes (possible whitespaces)
	    children = children.filter(function (c) { return c.tag; });
	    /* istanbul ignore if */
	    if (!children.length) {
	      return
	    }

	    // warn multiple elements
	    if ("development" !== 'production' && children.length > 1) {
	      warn(
	        '<transition> can only be used on a single element. Use ' +
	        '<transition-group> for lists.',
	        this.$parent
	      );
	    }

	    var mode = this.mode;

	    // warn invalid mode
	    if ("development" !== 'production' &&
	        mode && mode !== 'in-out' && mode !== 'out-in') {
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
	    var key = child.key = child.key == null
	      ? id + child.tag
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

	    if (oldChild && oldChild.data && !isSameChild(child, oldChild)) {
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
	        }, key);
	        return placeholder(h, rawChild)
	      } else if (mode === 'in-out') {
	        var delayedLeave;
	        var performLeave = function () { delayedLeave(); };
	        mergeVNodeHook(data, 'afterEnter', performLeave, key);
	        mergeVNodeHook(data, 'enterCancelled', performLeave, key);
	        mergeVNodeHook(oldData, 'delayLeave', function (leave) {
	          delayedLeave = leave;
	        }, key);
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
	// into the final disired state. This way in the second pass removed
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
	        } else {
	          var opts = c.componentOptions;
	          var name = opts
	            ? (opts.Ctor.options.name || opts.tag)
	            : c.tag;
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
	    var f = document.body.offsetHeight; // eslint-disable-line

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
	      if (this._hasMove != null) {
	        return this._hasMove
	      }
	      addTransitionClass(el, moveClass);
	      var info = getTransitionInfo(el);
	      removeTransitionClass(el, moveClass);
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
	Vue$3.config.isUnknownElement = isUnknownElement;
	Vue$3.config.isReservedTag = isReservedTag;
	Vue$3.config.getTagNamespace = getTagNamespace;
	Vue$3.config.mustUseProp = mustUseProp;

	// install platform runtime directives & components
	extend(Vue$3.options.directives, platformDirectives);
	extend(Vue$3.options.components, platformComponents);

	// install platform patch function
	Vue$3.prototype.__patch__ = inBrowser ? patch$1 : noop;

	// wrap mount
	Vue$3.prototype.$mount = function (
	  el,
	  hydrating
	) {
	  el = el && inBrowser ? query(el) : undefined;
	  return this._mount(el, hydrating)
	};

	if ("development" !== 'production' &&
	    inBrowser && typeof console !== 'undefined') {
	  console[console.info ? 'info' : 'log'](
	    "You are running Vue in development mode.\n" +
	    "Make sure to turn on production mode when deploying for production.\n" +
	    "See more tips at https://vuejs.org/guide/deployment.html"
	  );
	}

	// devtools global hook
	/* istanbul ignore next */
	setTimeout(function () {
	  if (config.devtools) {
	    if (devtools) {
	      devtools.emit('init', Vue$3);
	    } else if (
	      "development" !== 'production' &&
	      inBrowser && !isEdge && /Chrome\/\d+/.test(window.navigator.userAgent)
	    ) {
	      console[console.info ? 'info' : 'log'](
	        'Download the Vue Devtools extension for a better development experience:\n' +
	        'https://github.com/vuejs/vue-devtools'
	      );
	    }
	  }
	}, 0);

	/*  */

	// check whether current browser encodes a char inside attribute values
	function shouldDecode (content, encoded) {
	  var div = document.createElement('div');
	  div.innerHTML = "<div a=\"" + content + "\">";
	  return div.innerHTML.indexOf(encoded) > 0
	}

	// #3663
	// IE encodes newlines inside attribute values while other browsers don't
	var shouldDecodeNewlines = inBrowser ? shouldDecode('\n', '&#10;') : false;

	/*  */

	var decoder;

	function decode (html) {
	  decoder = decoder || document.createElement('div');
	  decoder.innerHTML = html;
	  return decoder.textContent
	}

	/*  */

	var isUnaryTag = makeMap(
	  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
	  'link,meta,param,source,track,wbr',
	  true
	);

	// Elements that you can, intentionally, leave open
	// (and which close themselves)
	var canBeLeftOpenTag = makeMap(
	  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source',
	  true
	);

	// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
	// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
	var isNonPhrasingTag = makeMap(
	  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
	  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
	  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
	  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
	  'title,tr,track',
	  true
	);

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
	var isScriptOrStyle = makeMap('script,style', true);
	var reCache = {};

	var ltRE = /&lt;/g;
	var gtRE = /&gt;/g;
	var nlRE = /&#10;/g;
	var ampRE = /&amp;/g;
	var quoteRE = /&quot;/g;

	function decodeAttr (value, shouldDecodeNewlines) {
	  if (shouldDecodeNewlines) {
	    value = value.replace(nlRE, '\n');
	  }
	  return value
	    .replace(ltRE, '<')
	    .replace(gtRE, '>')
	    .replace(ampRE, '&')
	    .replace(quoteRE, '"')
	}

	function parseHTML (html, options) {
	  var stack = [];
	  var expectHTML = options.expectHTML;
	  var isUnaryTag$$1 = options.isUnaryTag || no;
	  var index = 0;
	  var last, lastTag;
	  while (html) {
	    last = html;
	    // Make sure we're not in a script or style element
	    if (!lastTag || !isScriptOrStyle(lastTag)) {
	      var textEnd = html.indexOf('<');
	      if (textEnd === 0) {
	        // Comment:
	        if (comment.test(html)) {
	          var commentEnd = html.indexOf('-->');

	          if (commentEnd >= 0) {
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
	          continue
	        }
	      }

	      var text = (void 0), rest$1 = (void 0), next = (void 0);
	      if (textEnd > 0) {
	        rest$1 = html.slice(textEnd);
	        while (
	          !endTag.test(rest$1) &&
	          !startTagOpen.test(rest$1) &&
	          !comment.test(rest$1) &&
	          !conditionalComment.test(rest$1)
	        ) {
	          // < in plain text, be forgiving and treat it as text
	          next = rest$1.indexOf('<', 1);
	          if (next < 0) { break }
	          textEnd += next;
	          rest$1 = html.slice(textEnd);
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
	      var stackedTag = lastTag.toLowerCase();
	      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
	      var endTagLength = 0;
	      var rest = html.replace(reStackedTag, function (all, text, endTag) {
	        endTagLength = endTag.length;
	        if (stackedTag !== 'script' && stackedTag !== 'style' && stackedTag !== 'noscript') {
	          text = text
	            .replace(/<!--([\s\S]*?)-->/g, '$1')
	            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
	        }
	        if (options.chars) {
	          options.chars(text);
	        }
	        return ''
	      });
	      index += html.length - rest.length;
	      html = rest;
	      parseEndTag(stackedTag, index - endTagLength, index);
	    }

	    if (html === last && options.chars) {
	      options.chars(html);
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
	      if (canBeLeftOpenTag(tagName) && lastTag === tagName) {
	        parseEndTag(tagName);
	      }
	    }

	    var unary = isUnaryTag$$1(tagName) || tagName === 'html' && lastTag === 'head' || !!unarySlash;

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
	      unarySlash = '';
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
	        if (!p || !/[\w$]/.test(p)) {
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

	function baseWarn (msg) {
	  console.error(("[Vue parser]: " + msg));
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
	  important
	) {
	  // check capture modifier
	  if (modifiers && modifiers.capture) {
	    delete modifiers.capture;
	    name = '!' + name; // mark the event as captured
	  }
	  if (modifiers && modifiers.once) {
	    delete modifiers.once;
	    name = '~' + name; // mark the event as once
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

	var len;
	var str;
	var chr;
	var index$1;
	var expressionPos;
	var expressionEndPos;

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

	var dirRE = /^v-|^@|^:/;
	var forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
	var forIteratorRE = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/;
	var bindRE = /^:|^v-bind:/;
	var onRE = /^@|^v-on:/;
	var argRE = /:(.*)$/;
	var modifierRE = /\.[^.]+/g;

	var decodeHTMLCached = cached(decode);

	// configurable state
	var warn$1;
	var platformGetTagNamespace;
	var platformMustUseProp;
	var platformIsPreTag;
	var preTransforms;
	var transforms;
	var postTransforms;
	var delimiters;

	/**
	 * Convert HTML string to AST.
	 */
	function parse (
	  template,
	  options
	) {
	  warn$1 = options.warn || baseWarn;
	  platformGetTagNamespace = options.getTagNamespace || no;
	  platformMustUseProp = options.mustUseProp || no;
	  platformIsPreTag = options.isPreTag || no;
	  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
	  transforms = pluckModuleFunction(options.modules, 'transformNode');
	  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');
	  delimiters = options.delimiters;
	  var stack = [];
	  var preserveWhitespace = options.preserveWhitespace !== false;
	  var root;
	  var currentParent;
	  var inVPre = false;
	  var inPre = false;
	  var warned = false;
	  parseHTML(template, {
	    expectHTML: options.expectHTML,
	    isUnaryTag: options.isUnaryTag,
	    shouldDecodeNewlines: options.shouldDecodeNewlines,
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
	        "development" !== 'production' && warn$1(
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
	        if ("development" !== 'production' && !warned) {
	          if (el.tag === 'slot' || el.tag === 'template') {
	            warned = true;
	            warn$1(
	              "Cannot use <" + (el.tag) + "> as component root element because it may " +
	              'contain multiple nodes:\n' + template
	            );
	          }
	          if (el.attrsMap.hasOwnProperty('v-for')) {
	            warned = true;
	            warn$1(
	              'Cannot use v-for on stateful component root element because ' +
	              'it renders multiple elements:\n' + template
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
	        } else if ("development" !== 'production' && !warned) {
	          warned = true;
	          warn$1(
	            "Component template should contain exactly one root element:" +
	            "\n\n" + template + "\n\n" +
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
	          var name = element.slotTarget || 'default';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
	        } else {
	          currentParent.children.push(element);
	          element.parent = currentParent;
	        }
	      }
	      if (!unary) {
	        currentParent = element;
	        stack.push(element);
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
	      if (lastNode && lastNode.type === 3 && lastNode.text === ' ') {
	        element.children.pop();
	      }
	      // pop stack
	      stack.length -= 1;
	      currentParent = stack[stack.length - 1];
	      // check pre state
	      if (element.pre) {
	        inVPre = false;
	      }
	      if (platformIsPreTag(element.tag)) {
	        inPre = false;
	      }
	    },

	    chars: function chars (text) {
	      if (!currentParent) {
	        if ("development" !== 'production' && !warned && text === template) {
	          warned = true;
	          warn$1(
	            'Component template requires a root element, rather than just text:\n\n' + template
	          );
	        }
	        return
	      }
	      // IE textarea placeholder bug
	      /* istanbul ignore if */
	      if (isIE &&
	          currentParent.tag === 'textarea' &&
	          currentParent.attrsMap.placeholder === text) {
	        return
	      }
	      var children = currentParent.children;
	      text = inPre || text.trim()
	        ? decodeHTMLCached(text)
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
	        } else if (text !== ' ' || children[children.length - 1].text !== ' ') {
	          currentParent.children.push({
	            type: 3,
	            text: text
	          });
	        }
	      }
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
	    if ("development" !== 'production' && el.tag === 'template') {
	      warn$1("<template> cannot be keyed. Place the key on real elements instead.");
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
	      "development" !== 'production' && warn$1(
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
	  } else {
	    warn$1(
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
	      if ("development" !== 'production' && children[i].text !== ' ') {
	        warn$1(
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
	  var once = getAndRemoveAttr(el, 'v-once');
	  if (once != null) {
	    el.once = true;
	  }
	}

	function processSlot (el) {
	  if (el.tag === 'slot') {
	    el.slotName = getBindingAttr(el, 'name');
	    if ("development" !== 'production' && el.key) {
	      warn$1(
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
	  var i, l, name, rawName, value, arg, modifiers, isProp;
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
	        }
	        if (isProp || platformMustUseProp(el.tag, el.attrsMap.type, name)) {
	          addProp(el, name, value);
	        } else {
	          addAttr(el, name, value);
	        }
	      } else if (onRE.test(name)) { // v-on
	        name = name.replace(onRE, '');
	        addHandler(el, name, value, modifiers);
	      } else { // normal directives
	        name = name.replace(dirRE, '');
	        // parse arg
	        var argMatch = name.match(argRE);
	        if (argMatch && (arg = argMatch[1])) {
	          name = name.slice(0, -(arg.length + 1));
	        }
	        addDirective(el, name, rawName, value, arg, modifiers);
	        if ("development" !== 'production' && name === 'model') {
	          checkForAliasModel(el, value);
	        }
	      }
	    } else {
	      // literal attribute
	      {
	        var expression = parseText(value, delimiters);
	        if (expression) {
	          warn$1(
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
	    if ("development" !== 'production' && map[attrs[i].name] && !isIE) {
	      warn$1('duplicate attribute: ' + attrs[i].name);
	    }
	    map[attrs[i].name] = attrs[i].value;
	  }
	  return map
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
	      warn$1(
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
	  markStatic(root);
	  // second pass: mark static roots.
	  markStaticRoots(root, false);
	}

	function genStaticKeys$1 (keys) {
	  return makeMap(
	    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
	    (keys ? ',' + keys : '')
	  )
	}

	function markStatic (node) {
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
	      markStatic(child);
	      if (!child.static) {
	        node.static = false;
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
	      walkThroughConditionsBlocks(node.ifConditions, isInFor);
	    }
	  }
	}

	function walkThroughConditionsBlocks (conditionBlocks, isInFor) {
	  for (var i = 1, len = conditionBlocks.length; i < len; i++) {
	    markStaticRoots(conditionBlocks[i].block, isInFor);
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

	var modifierCode = {
	  stop: '$event.stopPropagation();',
	  prevent: '$event.preventDefault();',
	  self: 'if($event.target !== $event.currentTarget)return;',
	  ctrl: 'if(!$event.ctrlKey)return;',
	  shift: 'if(!$event.shiftKey)return;',
	  alt: 'if(!$event.altKey)return;',
	  meta: 'if(!$event.metaKey)return;'
	};

	function genHandlers (events, native) {
	  var res = native ? 'nativeOn:{' : 'on:{';
	  for (var name in events) {
	    res += "\"" + name + "\":" + (genHandler(name, events[name])) + ",";
	  }
	  return res.slice(0, -1) + '}'
	}

	function genHandler (
	  name,
	  handler
	) {
	  if (!handler) {
	    return 'function(){}'
	  } else if (Array.isArray(handler)) {
	    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
	  } else if (!handler.modifiers) {
	    return fnExpRE.test(handler.value) || simplePathRE.test(handler.value)
	      ? handler.value
	      : ("function($event){" + (handler.value) + "}")
	  } else {
	    var code = '';
	    var keys = [];
	    for (var key in handler.modifiers) {
	      if (modifierCode[key]) {
	        code += modifierCode[key];
	      } else {
	        keys.push(key);
	      }
	    }
	    if (keys.length) {
	      code = genKeyFilter(keys) + code;
	    }
	    var handlerCode = simplePathRE.test(handler.value)
	      ? handler.value + '($event)'
	      : handler.value;
	    return 'function($event){' + code + handlerCode + '}'
	  }
	}

	function genKeyFilter (keys) {
	  return ("if(" + (keys.map(genFilterCode).join('&&')) + ")return;")
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

	function bind$2 (el, dir) {
	  el.wrapData = function (code) {
	    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + (dir.modifiers && dir.modifiers.prop ? ',true' : '') + ")")
	  };
	}

	/*  */

	var baseDirectives = {
	  bind: bind$2,
	  cloak: noop
	};

	/*  */

	// configurable state
	var warn$2;
	var transforms$1;
	var dataGenFns;
	var platformDirectives$1;
	var isPlatformReservedTag$1;
	var staticRenderFns;
	var onceCount;
	var currentOptions;

	function generate (
	  ast,
	  options
	) {
	  // save previous staticRenderFns so generate calls can be nested
	  var prevStaticRenderFns = staticRenderFns;
	  var currentStaticRenderFns = staticRenderFns = [];
	  var prevOnceCount = onceCount;
	  onceCount = 0;
	  currentOptions = options;
	  warn$2 = options.warn || baseWarn;
	  transforms$1 = pluckModuleFunction(options.modules, 'transformCode');
	  dataGenFns = pluckModuleFunction(options.modules, 'genData');
	  platformDirectives$1 = options.directives || {};
	  isPlatformReservedTag$1 = options.isReservedTag || no;
	  var code = ast ? genElement(ast) : '_c("div")';
	  staticRenderFns = prevStaticRenderFns;
	  onceCount = prevOnceCount;
	  return {
	    render: ("with(this){return " + code + "}"),
	    staticRenderFns: currentStaticRenderFns
	  }
	}

	function genElement (el) {
	  if (el.staticRoot && !el.staticProcessed) {
	    return genStatic(el)
	  } else if (el.once && !el.onceProcessed) {
	    return genOnce(el)
	  } else if (el.for && !el.forProcessed) {
	    return genFor(el)
	  } else if (el.if && !el.ifProcessed) {
	    return genIf(el)
	  } else if (el.tag === 'template' && !el.slotTarget) {
	    return genChildren(el) || 'void 0'
	  } else if (el.tag === 'slot') {
	    return genSlot(el)
	  } else {
	    // component or element
	    var code;
	    if (el.component) {
	      code = genComponent(el.component, el);
	    } else {
	      var data = el.plain ? undefined : genData(el);

	      var children = el.inlineTemplate ? null : genChildren(el, true);
	      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
	    }
	    // module transforms
	    for (var i = 0; i < transforms$1.length; i++) {
	      code = transforms$1[i](el, code);
	    }
	    return code
	  }
	}

	// hoist static sub-trees out
	function genStatic (el) {
	  el.staticProcessed = true;
	  staticRenderFns.push(("with(this){return " + (genElement(el)) + "}"));
	  return ("_m(" + (staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
	}

	// v-once
	function genOnce (el) {
	  el.onceProcessed = true;
	  if (el.if && !el.ifProcessed) {
	    return genIf(el)
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
	      "development" !== 'production' && warn$2(
	        "v-once can only be used inside v-for that is keyed. "
	      );
	      return genElement(el)
	    }
	    return ("_o(" + (genElement(el)) + "," + (onceCount++) + (key ? ("," + key) : "") + ")")
	  } else {
	    return genStatic(el)
	  }
	}

	function genIf (el) {
	  el.ifProcessed = true; // avoid recursion
	  return genIfConditions(el.ifConditions.slice())
	}

	function genIfConditions (conditions) {
	  if (!conditions.length) {
	    return '_e()'
	  }

	  var condition = conditions.shift();
	  if (condition.exp) {
	    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions)))
	  } else {
	    return ("" + (genTernaryExp(condition.block)))
	  }

	  // v-if with v-once should generate code like (a)?_m(0):_m(1)
	  function genTernaryExp (el) {
	    return el.once ? genOnce(el) : genElement(el)
	  }
	}

	function genFor (el) {
	  var exp = el.for;
	  var alias = el.alias;
	  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
	  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
	  el.forProcessed = true; // avoid recursion
	  return "_l((" + exp + ")," +
	    "function(" + alias + iterator1 + iterator2 + "){" +
	      "return " + (genElement(el)) +
	    '})'
	}

	function genData (el) {
	  var data = '{';

	  // directives first.
	  // directives may mutate the el's other properties before they are generated.
	  var dirs = genDirectives(el);
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
	  for (var i = 0; i < dataGenFns.length; i++) {
	    data += dataGenFns[i](el);
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
	    data += (genHandlers(el.events)) + ",";
	  }
	  if (el.nativeEvents) {
	    data += (genHandlers(el.nativeEvents, true)) + ",";
	  }
	  // slot target
	  if (el.slotTarget) {
	    data += "slot:" + (el.slotTarget) + ",";
	  }
	  // scoped slots
	  if (el.scopedSlots) {
	    data += (genScopedSlots(el.scopedSlots)) + ",";
	  }
	  // inline-template
	  if (el.inlineTemplate) {
	    var inlineTemplate = genInlineTemplate(el);
	    if (inlineTemplate) {
	      data += inlineTemplate + ",";
	    }
	  }
	  data = data.replace(/,$/, '') + '}';
	  // v-bind data wrap
	  if (el.wrapData) {
	    data = el.wrapData(data);
	  }
	  return data
	}

	function genDirectives (el) {
	  var dirs = el.directives;
	  if (!dirs) { return }
	  var res = 'directives:[';
	  var hasRuntime = false;
	  var i, l, dir, needRuntime;
	  for (i = 0, l = dirs.length; i < l; i++) {
	    dir = dirs[i];
	    needRuntime = true;
	    var gen = platformDirectives$1[dir.name] || baseDirectives[dir.name];
	    if (gen) {
	      // compile-time directive that manipulates AST.
	      // returns true if it also needs a runtime counterpart.
	      needRuntime = !!gen(el, dir, warn$2);
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

	function genInlineTemplate (el) {
	  var ast = el.children[0];
	  if ("development" !== 'production' && (
	    el.children.length > 1 || ast.type !== 1
	  )) {
	    warn$2('Inline-template components must have exactly one child element.');
	  }
	  if (ast.type === 1) {
	    var inlineRenderFns = generate(ast, currentOptions);
	    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
	  }
	}

	function genScopedSlots (slots) {
	  return ("scopedSlots:{" + (Object.keys(slots).map(function (key) { return genScopedSlot(key, slots[key]); }).join(',')) + "}")
	}

	function genScopedSlot (key, el) {
	  return key + ":function(" + (String(el.attrsMap.scope)) + "){" +
	    "return " + (el.tag === 'template'
	      ? genChildren(el) || 'void 0'
	      : genElement(el)) + "}"
	}

	function genChildren (el, checkSkip) {
	  var children = el.children;
	  if (children.length) {
	    var el$1 = children[0];
	    // optimize single v-for
	    if (children.length === 1 &&
	        el$1.for &&
	        el$1.tag !== 'template' &&
	        el$1.tag !== 'slot') {
	      return genElement(el$1)
	    }
	    var normalizationType = getNormalizationType(children);
	    return ("[" + (children.map(genNode).join(',')) + "]" + (checkSkip
	        ? normalizationType ? ("," + normalizationType) : ''
	        : ''))
	  }
	}

	// determine the normalization needed for the children array.
	// 0: no normalization needed
	// 1: simple normalization needed (possible 1-level deep nested array)
	// 2: full normalization needed
	function getNormalizationType (children) {
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

	function maybeComponent (el) {
	  return !isPlatformReservedTag$1(el.tag)
	}

	function genNode (node) {
	  if (node.type === 1) {
	    return genElement(node)
	  } else {
	    return genText(node)
	  }
	}

	function genText (text) {
	  return ("_v(" + (text.type === 2
	    ? text.expression // no need for () because already wrapped in _s()
	    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
	}

	function genSlot (el) {
	  var slotName = el.slotName || '"default"';
	  var children = genChildren(el);
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
	function genComponent (componentName, el) {
	  var children = el.inlineTemplate ? null : genChildren(el, true);
	  return ("_c(" + componentName + "," + (genData(el)) + (children ? ("," + children) : '') + ")")
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

	/**
	 * Compile a template.
	 */
	function compile$1 (
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
	}

	/*  */

	// operators like typeof, instanceof and in are allowed
	var prohibitedKeywordRE = new RegExp('\\b' + (
	  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
	  'super,throw,while,yield,delete,export,import,return,switch,default,' +
	  'extends,finally,continue,debugger,function,arguments'
	).split(',').join('\\b|\\b') + '\\b');
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

	function checkFor (node, text, errors) {
	  checkExpression(node.for || '', text, errors);
	  checkIdentifier(node.alias, 'v-for alias', text, errors);
	  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
	  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
	}

	function checkIdentifier (ident, type, text, errors) {
	  if (typeof ident === 'string' && !identRE.test(ident)) {
	    errors.push(("- invalid " + type + " \"" + ident + "\" in expression: " + text));
	  }
	}

	function checkExpression (exp, text, errors) {
	  try {
	    new Function(("return " + exp));
	  } catch (e) {
	    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
	    if (keywordMatch) {
	      errors.push(
	        "- avoid using JavaScript keyword as property name: " +
	        "\"" + (keywordMatch[0]) + "\" in expression " + text
	      );
	    } else {
	      errors.push(("- invalid expression: " + text));
	    }
	  }
	}

	/*  */

	function transformNode (el, options) {
	  var warn = options.warn || baseWarn;
	  var staticClass = getAndRemoveAttr(el, 'class');
	  if ("development" !== 'production' && staticClass) {
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

	function genData$1 (el) {
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
	  genData: genData$1
	};

	/*  */

	function transformNode$1 (el, options) {
	  var warn = options.warn || baseWarn;
	  var staticStyle = getAndRemoveAttr(el, 'style');
	  if (staticStyle) {
	    /* istanbul ignore if */
	    {
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

	function genData$2 (el) {
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
	  genData: genData$2
	};

	var modules$1 = [
	  klass$1,
	  style$1
	];

	/*  */

	var warn$3;

	function model$1 (
	  el,
	  dir,
	  _warn
	) {
	  warn$3 = _warn;
	  var value = dir.value;
	  var modifiers = dir.modifiers;
	  var tag = el.tag;
	  var type = el.attrsMap.type;
	  {
	    var dynamicType = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
	    if (tag === 'input' && dynamicType) {
	      warn$3(
	        "<input :type=\"" + dynamicType + "\" v-model=\"" + value + "\">:\n" +
	        "v-model does not support dynamic input types. Use v-if branches instead."
	      );
	    }
	  }
	  if (tag === 'select') {
	    genSelect(el, value, modifiers);
	  } else if (tag === 'input' && type === 'checkbox') {
	    genCheckboxModel(el, value, modifiers);
	  } else if (tag === 'input' && type === 'radio') {
	    genRadioModel(el, value, modifiers);
	  } else {
	    genDefaultModel(el, value, modifiers);
	  }
	  // ensure runtime directive metadata
	  return true
	}

	function genCheckboxModel (
	  el,
	  value,
	  modifiers
	) {
	  if ("development" !== 'production' &&
	    el.attrsMap.checked != null) {
	    warn$3(
	      "<" + (el.tag) + " v-model=\"" + value + "\" checked>:\n" +
	      "inline checked attributes will be ignored when using v-model. " +
	      'Declare initial values in the component\'s data option instead.'
	    );
	  }
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
	  addHandler(el, 'click',
	    "var $$a=" + value + "," +
	        '$$el=$event.target,' +
	        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
	    'if(Array.isArray($$a)){' +
	      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
	          '$$i=_i($$a,$$v);' +
	      "if($$c){$$i<0&&(" + value + "=$$a.concat($$v))}" +
	      "else{$$i>-1&&(" + value + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" +
	    "}else{" + value + "=$$c}",
	    null, true
	  );
	}

	function genRadioModel (
	    el,
	    value,
	    modifiers
	) {
	  if ("development" !== 'production' &&
	    el.attrsMap.checked != null) {
	    warn$3(
	      "<" + (el.tag) + " v-model=\"" + value + "\" checked>:\n" +
	      "inline checked attributes will be ignored when using v-model. " +
	      'Declare initial values in the component\'s data option instead.'
	    );
	  }
	  var number = modifiers && modifiers.number;
	  var valueBinding = getBindingAttr(el, 'value') || 'null';
	  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
	  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
	  addHandler(el, 'click', genAssignmentCode(value, valueBinding), null, true);
	}

	function genDefaultModel (
	  el,
	  value,
	  modifiers
	) {
	  {
	    if (el.tag === 'input' && el.attrsMap.value) {
	      warn$3(
	        "<" + (el.tag) + " v-model=\"" + value + "\" value=\"" + (el.attrsMap.value) + "\">:\n" +
	        'inline value attributes will be ignored when using v-model. ' +
	        'Declare initial values in the component\'s data option instead.'
	      );
	    }
	    if (el.tag === 'textarea' && el.children.length) {
	      warn$3(
	        "<textarea v-model=\"" + value + "\">:\n" +
	        'inline content inside <textarea> will be ignored when using v-model. ' +
	        'Declare initial values in the component\'s data option instead.'
	      );
	    }
	  }

	  var type = el.attrsMap.type;
	  var ref = modifiers || {};
	  var lazy = ref.lazy;
	  var number = ref.number;
	  var trim = ref.trim;
	  var event = lazy || (isIE && type === 'range') ? 'change' : 'input';
	  var needCompositionGuard = !lazy && type !== 'range';
	  var isNative = el.tag === 'input' || el.tag === 'textarea';

	  var valueExpression = isNative
	    ? ("$event.target.value" + (trim ? '.trim()' : ''))
	    : trim ? "(typeof $event === 'string' ? $event.trim() : $event)" : "$event";
	  valueExpression = number || type === 'number'
	    ? ("_n(" + valueExpression + ")")
	    : valueExpression;

	  var code = genAssignmentCode(value, valueExpression);
	  if (isNative && needCompositionGuard) {
	    code = "if($event.target.composing)return;" + code;
	  }

	  // inputs with type="file" are read only and setting the input's
	  // value will throw an error.
	  if ("development" !== 'production' &&
	      type === 'file') {
	    warn$3(
	      "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
	      "File inputs are read only. Use a v-on:change listener instead."
	    );
	  }

	  addProp(el, 'value', isNative ? ("_s(" + value + ")") : ("(" + value + ")"));
	  addHandler(el, event, code, null, true);
	  if (trim || number || type === 'number') {
	    addHandler(el, 'blur', '$forceUpdate()');
	  }
	}

	function genSelect (
	    el,
	    value,
	    modifiers
	) {
	  {
	    el.children.some(checkOptionWarning);
	  }

	  var number = modifiers && modifiers.number;
	  var assignment = "Array.prototype.filter" +
	    ".call($event.target.options,function(o){return o.selected})" +
	    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
	    "return " + (number ? '_n(val)' : 'val') + "})" +
	    (el.attrsMap.multiple == null ? '[0]' : '');

	  var code = genAssignmentCode(value, assignment);
	  addHandler(el, 'change', code, null, true);
	}

	function checkOptionWarning (option) {
	  if (option.type === 1 &&
	    option.tag === 'option' &&
	    option.attrsMap.selected != null) {
	    warn$3(
	      "<select v-model=\"" + (option.parent.attrsMap['v-model']) + "\">:\n" +
	      'inline selected attributes on <option> will be ignored when using v-model. ' +
	      'Declare initial values in the component\'s data option instead.'
	    );
	    return true
	  }
	  return false
	}

	function genAssignmentCode (value, assignment) {
	  var modelRs = parseModel(value);
	  if (modelRs.idx === null) {
	    return (value + "=" + assignment)
	  } else {
	    return "var $$exp = " + (modelRs.exp) + ", $$idx = " + (modelRs.idx) + ";" +
	      "if (!Array.isArray($$exp)){" +
	        value + "=" + assignment + "}" +
	      "else{$$exp.splice($$idx, 1, " + assignment + ")}"
	  }
	}

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
	  model: model$1,
	  text: text,
	  html: html
	};

	/*  */

	var cache = Object.create(null);

	var baseOptions = {
	  expectHTML: true,
	  modules: modules$1,
	  staticKeys: genStaticKeys(modules$1),
	  directives: directives$1,
	  isReservedTag: isReservedTag,
	  isUnaryTag: isUnaryTag,
	  mustUseProp: mustUseProp,
	  getTagNamespace: getTagNamespace,
	  isPreTag: isPreTag
	};

	function compile$$1 (
	  template,
	  options
	) {
	  options = options
	    ? extend(extend({}, baseOptions), options)
	    : baseOptions;
	  return compile$1(template, options)
	}

	function compileToFunctions (
	  template,
	  options,
	  vm
	) {
	  var _warn = (options && options.warn) || warn;
	  // detect possible CSP restriction
	  /* istanbul ignore if */
	  {
	    try {
	      new Function('return 1');
	    } catch (e) {
	      if (e.toString().match(/unsafe-eval|CSP/)) {
	        _warn(
	          'It seems you are using the standalone build of Vue.js in an ' +
	          'environment with Content Security Policy that prohibits unsafe-eval. ' +
	          'The template compiler cannot work in this environment. Consider ' +
	          'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
	          'templates into render functions.'
	        );
	      }
	    }
	  }
	  var key = options && options.delimiters
	    ? String(options.delimiters) + template
	    : template;
	  if (cache[key]) {
	    return cache[key]
	  }
	  var res = {};
	  var compiled = compile$$1(template, options);
	  res.render = makeFunction(compiled.render);
	  var l = compiled.staticRenderFns.length;
	  res.staticRenderFns = new Array(l);
	  for (var i = 0; i < l; i++) {
	    res.staticRenderFns[i] = makeFunction(compiled.staticRenderFns[i]);
	  }
	  {
	    if (res.render === noop || res.staticRenderFns.some(function (fn) { return fn === noop; })) {
	      _warn(
	        "failed to compile template:\n\n" + template + "\n\n" +
	        detectErrors(compiled.ast).join('\n') +
	        '\n\n',
	        vm
	      );
	    }
	  }
	  return (cache[key] = res)
	}

	function makeFunction (code) {
	  try {
	    return new Function(code)
	  } catch (e) {
	    return noop
	  }
	}

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
	    "development" !== 'production' && warn(
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
	          if ("development" !== 'production' && !template) {
	            warn(
	              ("Template element not found or is empty: " + (options.template)),
	              this
	            );
	          }
	        }
	      } else if (template.nodeType) {
	        template = template.innerHTML;
	      } else {
	        {
	          warn('invalid template option:' + template, this);
	        }
	        return this
	      }
	    } else if (el) {
	      template = getOuterHTML(el);
	    }
	    if (template) {
	      var ref = compileToFunctions(template, {
	        warn: warn,
	        shouldDecodeNewlines: shouldDecodeNewlines,
	        delimiters: options.delimiters
	      }, this);
	      var render = ref.render;
	      var staticRenderFns = ref.staticRenderFns;
	      options.render = render;
	      options.staticRenderFns = staticRenderFns;
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

	return Vue$3;

	})));

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	  * vue-router v2.2.0
	  * (c) 2017 Evan You
	  * @license MIT
	  */
	'use strict';

	/*  */

	function assert (condition, message) {
	  if (!condition) {
	    throw new Error(("[vue-router] " + message))
	  }
	}

	function warn (condition, message) {
	  if (!condition) {
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
	  render: function render (h, ref) {
	    var props = ref.props;
	    var children = ref.children;
	    var parent = ref.parent;
	    var data = ref.data;

	    data.routerView = true;

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

	    // inject instance registration hooks
	    var hooks = data.hook || (data.hook = {});
	    hooks.init = function (vnode) {
	      matched.instances[name] = vnode.child;
	    };
	    hooks.prepatch = function (oldVnode, vnode) {
	      matched.instances[name] = vnode.child;
	    };
	    hooks.destroy = function (vnode) {
	      if (matched.instances[name] === vnode.child) {
	        matched.instances[name] = undefined;
	      }
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
	      warn(false, ("props in \"" + (route.path) + "\" is a " + (typeof config) + ", expecting an object, function or boolean."));
	  }
	}

	/*  */

	var encodeReserveRE = /[!'()*]/g;
	var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
	var commaRE = /%2C/g;

	// fixed encodeURIComponent which is more comformant to RFC3986:
	// - escapes [!'()*]
	// - preserve commas
	var encode = function (str) { return encodeURIComponent(str)
	  .replace(encodeReserveRE, encodeReserveReplacer)
	  .replace(commaRE, ','); };

	var decode = decodeURIComponent;

	function resolveQuery (
	  query,
	  extraQuery
	) {
	  if ( extraQuery === void 0 ) extraQuery = {};

	  if (query) {
	    var parsedQuery;
	    try {
	      parsedQuery = parseQuery(query);
	    } catch (e) {
	      process.env.NODE_ENV !== 'production' && warn(false, e.message);
	      parsedQuery = {};
	    }
	    for (var key in extraQuery) {
	      parsedQuery[key] = extraQuery[key];
	    }
	    return parsedQuery
	  } else {
	    return extraQuery
	  }
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
	  redirectedFrom
	) {
	  var route = {
	    name: location.name || (record && record.name),
	    meta: (record && record.meta) || {},
	    path: location.path || '/',
	    hash: location.hash || '',
	    query: location.query || {},
	    params: location.params || {},
	    fullPath: getFullPath(location),
	    matched: record ? formatMatch(record) : []
	  };
	  if (redirectedFrom) {
	    route.redirectedFrom = getFullPath(redirectedFrom);
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

	function getFullPath (ref) {
	  var path = ref.path;
	  var query = ref.query; if ( query === void 0 ) query = {};
	  var hash = ref.hash; if ( hash === void 0 ) hash = '';

	  return (path || '/') + stringifyQuery(query) + hash
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
	    var activeClass = this.activeClass || router.options.linkActiveClass || 'router-link-active';
	    var compareTarget = location.path ? createRoute(null, location) : route;
	    classes[activeClass] = this.exact
	      ? isSameRoute(current, compareTarget)
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
	  if (e.target && e.target.getAttribute) {
	    var target = e.target.getAttribute('target');
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

	  Vue.mixin({
	    beforeCreate: function beforeCreate () {
	      if (this.$options.router) {
	        this._router = this.$options.router;
	        this._router.init(this);
	        Vue.util.defineReactive(this, '_route', this._router.history.current);
	      }
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
	  if (relative.charAt(0) === '/') {
	    return relative
	  }

	  if (relative.charAt(0) === '?' || relative.charAt(0) === '#') {
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
	    if (segment === '.') {
	      continue
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

	/*  */

	function createRouteMap (
	  routes,
	  oldPathMap,
	  oldNameMap
	) {
	  var pathMap = oldPathMap || Object.create(null);
	  var nameMap = oldNameMap || Object.create(null);

	  routes.forEach(function (route) {
	    addRouteRecord(pathMap, nameMap, route);
	  });

	  return {
	    pathMap: pathMap,
	    nameMap: nameMap
	  }
	}

	function addRouteRecord (
	  pathMap,
	  nameMap,
	  route,
	  parent,
	  matchAs
	) {
	  var path = route.path;
	  var name = route.name;
	  if (process.env.NODE_ENV !== 'production') {
	    assert(path != null, "\"path\" is required in a route configuration.");
	    assert(
	      typeof route.component !== 'string',
	      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
	      "string id. Use an actual component instead."
	    );
	  }

	  var record = {
	    path: normalizePath(path, parent),
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
	    if (process.env.NODE_ENV !== 'production') {
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
	      addRouteRecord(pathMap, nameMap, child, record, childMatchAs);
	    });
	  }

	  if (route.alias !== undefined) {
	    if (Array.isArray(route.alias)) {
	      route.alias.forEach(function (alias) {
	        var aliasRoute = {
	          path: alias,
	          children: route.children
	        };
	        addRouteRecord(pathMap, nameMap, aliasRoute, parent, record.path);
	      });
	    } else {
	      var aliasRoute = {
	        path: route.alias,
	        children: route.children
	      };
	      addRouteRecord(pathMap, nameMap, aliasRoute, parent, record.path);
	    }
	  }

	  if (!pathMap[record.path]) {
	    pathMap[record.path] = record;
	  }

	  if (name) {
	    if (!nameMap[name]) {
	      nameMap[name] = record;
	    } else if (process.env.NODE_ENV !== 'production' && !matchAs) {
	      warn(
	        false,
	        "Duplicate named routes definition: " +
	        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
	      );
	    }
	  }
	}

	function normalizePath (path, parent) {
	  path = path.replace(/\/$/, '');
	  if (path[0] === '/') { return path }
	  if (parent == null) { return path }
	  return cleanPath(((parent.path) + "/" + path))
	}

	var index$1 = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};

	var isarray = index$1;

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

	      if (isarray(value)) {
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
	  if (!isarray(keys)) {
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
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */ (keys || options);
	    keys = [];
	  }

	  options = options || {};

	  if (path instanceof RegExp) {
	    return regexpToRegexp(path, /** @type {!Array} */ (keys))
	  }

	  if (isarray(path)) {
	    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
	  }

	  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
	}

	index.parse = parse_1;
	index.compile = compile_1;
	index.tokensToFunction = tokensToFunction_1;
	index.tokensToRegExp = tokensToRegExp_1;

	/*  */

	var regexpCache = Object.create(null);

	function getRouteRegex (path) {
	  var hit = regexpCache[path];
	  var keys, regexp;

	  if (hit) {
	    keys = hit.keys;
	    regexp = hit.regexp;
	  } else {
	    keys = [];
	    regexp = index(path, keys);
	    regexpCache[path] = { keys: keys, regexp: regexp };
	  }

	  return { keys: keys, regexp: regexp }
	}

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
	    if (process.env.NODE_ENV !== 'production') {
	      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
	    }
	    return ''
	  }
	}

	/*  */

	function normalizeLocation (
	  raw,
	  current,
	  append
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
	    } else if (process.env.NODE_ENV !== 'production') {
	      warn(false, "relative params navigation requires a current route.");
	    }
	    return next
	  }

	  var parsedPath = parsePath(next.path || '');
	  var basePath = (current && current.path) || '/';
	  var path = parsedPath.path
	    ? resolvePath(parsedPath.path, basePath, append || next.append)
	    : (current && current.path) || '/';
	  var query = resolveQuery(parsedPath.query, next.query);
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

	function createMatcher (routes) {
	  var ref = createRouteMap(routes);
	  var pathMap = ref.pathMap;
	  var nameMap = ref.nameMap;

	  function addRoutes (routes) {
	    createRouteMap(routes, pathMap, nameMap);
	  }

	  function match (
	    raw,
	    currentRoute,
	    redirectedFrom
	  ) {
	    var location = normalizeLocation(raw, currentRoute);
	    var name = location.name;

	    if (name) {
	      var record = nameMap[name];
	      if (process.env.NODE_ENV !== 'production') {
	        warn(record, ("Route with name '" + name + "' does not exist"));
	      }
	      var paramNames = getRouteRegex(record.path).keys
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
	      for (var path in pathMap) {
	        if (matchRoute(path, location.params, location.path)) {
	          return _createRoute(pathMap[path], location, redirectedFrom)
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
	        ? originalRedirect(createRoute(record, location))
	        : originalRedirect;

	    if (typeof redirect === 'string') {
	      redirect = { path: redirect };
	    }

	    if (!redirect || typeof redirect !== 'object') {
	      process.env.NODE_ENV !== 'production' && warn(
	        false, ("invalid redirect option: " + (JSON.stringify(redirect)))
	      );
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
	      if (process.env.NODE_ENV !== 'production') {
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
	      warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
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
	    return createRoute(record, location, redirectedFrom)
	  }

	  return {
	    match: match,
	    addRoutes: addRoutes
	  }
	}

	function matchRoute (
	  path,
	  params,
	  pathname
	) {
	  var ref = getRouteRegex(path);
	  var regexp = ref.regexp;
	  var keys = ref.keys;
	  var m = pathname.match(regexp);

	  if (!m) {
	    return false
	  } else if (!params) {
	    return true
	  }

	  for (var i = 1, len = m.length; i < len; ++i) {
	    var key = keys[i - 1];
	    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
	    if (key) { params[key.name] = val; }
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
	    if (e.state && e.state.key) {
	      setStateKey(e.state.key);
	    }
	  });

	  window.addEventListener('scroll', saveScrollPosition);
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

	  if (process.env.NODE_ENV !== 'production') {
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
	  var docRect = document.documentElement.getBoundingClientRect();
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
	    saveScrollPosition();
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
	};

	History.prototype.listen = function listen (cb) {
	  this.cb = cb;
	};

	History.prototype.onReady = function onReady (cb) {
	  if (this.ready) {
	    cb();
	  } else {
	    this.readyCbs.push(cb);
	  }
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
	      this$1.readyCbs.forEach(function (cb) {
	        cb(route);
	      });
	    }
	  }, onAbort);
	};

	History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
	    var this$1 = this;

	  var current = this.current;
	  var abort = function () { onAbort && onAbort(); };
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
	    hook(route, current, function (to) {
	      if (to === false) {
	        // next(false) -> abort navigation, ensure current URL
	        this$1.ensureURL(true);
	        abort();
	      } else if (typeof to === 'string' || typeof to === 'object') {
	        // next('/') or next({ path: '/' }) -> redirect
	        (typeof to === 'object' && to.replace) ? this$1.replace(to) : this$1.push(to);
	        abort();
	      } else {
	        // confirm transition and pass on the value
	        next(to);
	      }
	    });
	  };

	  runQueue(queue, iterator, function () {
	    var postEnterCbs = [];
	    var isValid = function () { return this$1.current === route; };
	    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
	    // wait until async components are resolved before
	    // extracting in-component enter guards
	    runQueue(enterGuards, iterator, function () {
	      if (this$1.pending !== route) {
	        return abort()
	      }
	      this$1.pending = null;
	      onComplete(route);
	      if (this$1.router.app) {
	        this$1.router.app.$nextTick(function () {
	          postEnterCbs.forEach(function (cb) { return cb(); });
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
	      base = baseEl ? baseEl.getAttribute('href') : '/';
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
	  return function boundRouteGuard () {
	    return guard.apply(instance, arguments)
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
	  return flatMapComponents(matched, function (def, _, match, key) {
	    // if it's a function and doesn't have Vue options attached,
	    // assume it's an async component resolve function.
	    // we are not using Vue's default async resolving mechanism because
	    // we want to halt the navigation until the incoming component has been
	    // resolved.
	    if (typeof def === 'function' && !def.options) {
	      return function (to, from, next) {
	        var resolve = once(function (resolvedDef) {
	          match.components[key] = resolvedDef;
	          next();
	        });

	        var reject = once(function (reason) {
	          warn(false, ("Failed to resolve async component " + key + ": " + reason));
	          next(false);
	        });

	        var res = def(resolve, reject);
	        if (res && typeof res.then === 'function') {
	          res.then(resolve, reject);
	        }
	      }
	    }
	  })
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

	    this.transitionTo(location, function (route) {
	      pushState(cleanPath(this$1.base + route.fullPath));
	      handleScroll(this$1.router, route, this$1.current, false);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
	    var this$1 = this;

	    this.transitionTo(location, function (route) {
	      replaceState(cleanPath(this$1.base + route.fullPath));
	      handleScroll(this$1.router, route, this$1.current, false);
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
	  this.afterHooks = [];
	  this.matcher = createMatcher(options.routes || []);

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
	      if (process.env.NODE_ENV !== 'production') {
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

	  process.env.NODE_ENV !== 'production' && assert(
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
	  this.beforeHooks.push(fn);
	};

	VueRouter.prototype.afterEach = function afterEach (fn) {
	  this.afterHooks.push(fn);
	};

	VueRouter.prototype.onReady = function onReady (cb) {
	  this.history.onReady(cb);
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
	    ? this.resolve(to).route
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
	  var location = normalizeLocation(to, current || this.history.current, append);
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

	function createHref (base, fullPath, mode) {
	  var path = mode === 'hash' ? '#' + fullPath : fullPath;
	  return base ? cleanPath(base + '/' + path) : path
	}

	VueRouter.install = install;
	VueRouter.version = '2.2.0';

	if (inBrowser && window.Vue) {
	  window.Vue.use(VueRouter);
	}

	module.exports = VueRouter;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

/***/ },
/* 18 */
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _datepicker = __webpack_require__(20);

	var _datepicker2 = _interopRequireDefault(_datepicker);

	var _daterangepicker = __webpack_require__(96);

	var _daterangepicker2 = _interopRequireDefault(_daterangepicker);

	var _inputNumber = __webpack_require__(104);

	var _inputNumber2 = _interopRequireDefault(_inputNumber);

	var _loading = __webpack_require__(109);

	var _loading2 = _interopRequireDefault(_loading);

	var _message = __webpack_require__(114);

	var _message2 = _interopRequireDefault(_message);

	var _modal = __webpack_require__(119);

	var _modal2 = _interopRequireDefault(_modal);

	var _pageloading = __webpack_require__(124);

	var _pageloading2 = _interopRequireDefault(_pageloading);

	var _pagination = __webpack_require__(129);

	var _pagination2 = _interopRequireDefault(_pagination);

	var _popover = __webpack_require__(134);

	var _popover2 = _interopRequireDefault(_popover);

	var _progress = __webpack_require__(141);

	var _progress2 = _interopRequireDefault(_progress);

	var _select = __webpack_require__(146);

	var _select2 = _interopRequireDefault(_select);

	var _suggestion = __webpack_require__(157);

	var _suggestion2 = _interopRequireDefault(_suggestion);

	var _tag = __webpack_require__(162);

	var _tag2 = _interopRequireDefault(_tag);

	var _tooltip = __webpack_require__(167);

	var _tooltip2 = _interopRequireDefault(_tooltip);

	var _scrolltop = __webpack_require__(172);

	var _scrolltop2 = _interopRequireDefault(_scrolltop);

	var _button = __webpack_require__(177);

	var _button2 = _interopRequireDefault(_button);

	var _install = __webpack_require__(180);

	var _install2 = _interopRequireDefault(_install);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(184);

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
	    Vue.component(_scrolltop2.default.name, _scrolltop2.default);
	    Vue.component(_button2.default.name, _button2.default);

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
	    ScrollTop: _scrolltop2.default,
	    install: install,
	    xcuiInstall: _install2.default
	};

	module.exports = xcui;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(21)

	/* script */
	__vue_exports__ = __webpack_require__(25)

	/* template */
	var __vue_template__ = __webpack_require__(95)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/ubuntu/xcui/src/components/datepicker/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-5bb1b5b4", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-5bb1b5b4", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(22);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(24)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5bb1b5b4!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5bb1b5b4!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports


	// module
	exports.push([module.id, "\n.xcui-datapicker .close_btn {\n  position: absolute;\n  top: 50%;\n  right: 10px;\n  margin-top: -11px;\n  z-index: 9999;\n}\n.xcui-datapicker .calendar {\n  width: 240px;\n  padding: 10px;\n  background: #fff;\n  position: absolute;\n  z-index: 9999;\n  left: 0;\n  top: 38px;\n  border: 1px solid #DEDEDE;\n  border-radius: 2px;\n  transition: all .5s ease;\n}\n.xcui-datapicker .calendar-enter .calendar-leave {\n  opacity: 0;\n  transform: translate3d(0, -10px, 0);\n}\n.xcui-datapicker .calendar-tit {\n  text-align: center;\n  margin: 0 auto;\n  width: 104px;\n  font-weight: bold;\n}\n.xcui-datapicker .calendar-tit input {\n  color: #333;\n  height: 24px;\n  outline: medium;\n  text-align: center;\n  border: none;\n  background-color: transparent;\n}\n.xcui-datapicker .calendar-tit-year {\n  width: 36px;\n}\n.xcui-datapicker .calendar-tit-month {\n  width: 18px;\n  margin-left: 2px;\n}\n.xcui-datapicker .calendar:before {\n  position: absolute;\n  left: 30px;\n  top: -10px;\n  content: \"\";\n  border: 5px solid rgba(0, 0, 0, 0);\n  border-bottom-color: #DEDEDE;\n}\n.xcui-datapicker .calendar:after {\n  position: absolute;\n  left: 30px;\n  top: -9px;\n  content: \"\";\n  border: 5px solid rgba(0, 0, 0, 0);\n  border-bottom-color: #fff;\n}\n.xcui-datapicker .calendar-tools {\n  height: 32px;\n  font-size: 14px;\n  line-height: 32px;\n  color: #333;\n}\n.xcui-datapicker .calendar-tools .float.left {\n  float: left;\n}\n.xcui-datapicker .calendar-tools .float.right {\n  float: right;\n}\n.xcui-datapicker .calendar-tools > i {\n  margin: 0 10px;\n  line-height: 32px;\n  cursor: pointer;\n  color: #707070;\n}\n.xcui-datapicker .calendar-tools > i:hover {\n  color: #333;\n}\n.xcui-datapicker .calendar table {\n  clear: both;\n  width: 100%;\n  margin-bottom: 10px;\n  border-collapse: collapse;\n  color: #444;\n}\n.xcui-datapicker .calendar td {\n  margin: 2px !important;\n  padding: 5px 0;\n  width: 14.28571429%;\n  text-align: center;\n  vertical-align: middle;\n  font-size: 14px;\n  line-height: 125%;\n  cursor: pointer;\n  border: 0;\n}\n.xcui-datapicker .calendar td:hover {\n  background: #f3f8fa;\n}\n.xcui-datapicker .calendar td.week {\n  pointer-events: none !important;\n  cursor: default !important;\n}\n.xcui-datapicker .calendar td.off {\n  color: #c0c0c0;\n}\n.xcui-datapicker .calendar td.today {\n  background-color: #46c3c1;\n  color: #fff;\n  font-size: 14px;\n  border-radius: 4px;\n}\n.xcui-datapicker .calendar td.today .lunar {\n  color: #fff;\n}\n.xcui-datapicker .calendar thead td {\n  text-transform: uppercase;\n}\n.xcui-datapicker .calendar .timer {\n  margin: 10px 0 10px 30px;\n  width: 150px;\n  text-align: center;\n}\n.xcui-datapicker .calendar .timer input {\n  border-radius: 2px;\n  padding: 5px;\n  font-size: 14px;\n  line-height: 18px;\n  color: #46c3c1;\n  width: 50px;\n  text-align: center;\n  border: 1px solid #efefef;\n}\n.xcui-datapicker .calendar .timer input:focus {\n  border: 1px solid #46c3c1;\n}\n.xcui-datapicker .calendar .timer-item {\n  float: left;\n  text-align: center;\n  position: relative;\n  cursor: pointer;\n}\n.xcui-datapicker .calendar .timer-item-current {\n  color: #46c3c1;\n  line-height: 24px;\n  font-size: 14px;\n}\n.xcui-datapicker .calendar .timer label {\n  margin: 0;\n  width: 30px;\n  padding: 5px;\n  line-height: 14px;\n  margin-right: 4px;\n  font-weight: normal;\n}\n.xcui-datapicker .calendar-button {\n  text-align: center;\n}\n.xcui-datapicker .calendar-button button {\n  border: none;\n  cursor: pointer;\n  display: inline-block;\n  min-height: 1em;\n  vertical-align: baseline;\n  background: #46c3c1;\n  color: #fff;\n  margin: 0 .3em 0 0;\n  padding: .6em 2em;\n  font-size: 1em;\n  line-height: 1em;\n  text-align: center;\n  border-radius: .3em;\n}\n.xcui-datapicker .calendar-button button.cancel {\n  background: #efefef;\n  color: #666;\n}\n.xcui-datapicker .calendar .lunar {\n  font-size: 11px;\n  line-height: 150%;\n  color: #aaa;\n}\n.xcui-datapicker .calendar .drop-down {\n  position: absolute;\n  top: 24px;\n  left: -10px;\n  width: 50px;\n  height: 140px;\n  background: #fff;\n  border: 1px solid #efefef;\n  padding: 0;\n  margin: 0;\n  overflow-y: scroll;\n}\n.xcui-datapicker .calendar .drop-down li {\n  width: 50px;\n  list-style: none;\n}\n.xcui-datapicker .calendar .drop-down li.on {\n  background: #eee;\n}\n.xcui-datapicker .calendar .drop-down li:hover {\n  background: #eee;\n}\n.xcui-datapicker .calendar .clearfix {\n  zoom: 1;\n}\n.xcui-datapicker .calendar .clearfix:after {\n  display: block;\n  width: 0;\n  height: 0;\n  visibility: hidden;\n  content: '';\n  clear: both;\n}\n.xcui-datapicker .calendar .btn-default {\n  color: #666;\n  border-radius: 0 4px 4px 0;\n}\n.xcui-datapicker .bg-pr {\n  position: relative;\n}\n", ""]);

	// exports


/***/ },
/* 23 */
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
/* 24 */
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _calendarMixins = __webpack_require__(26);

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
	            currentTimeBtnShow: true,
	            newValue: this,
	            count: 0,
	            closeBtnNow: false,
	            oldValue: null
	        };
	    },

	    watch: {
	        value: function value(val) {
	            var nowDate = this.output(new Date());
	            if (this.newValue || this.count !== 0) {
	                this.newValue = val;
	            }
	            if (!this.newValue && val === nowDate) {
	                this.internalValue = '';
	            }
	            this.count += 1;
	        }
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
	            this.oldValue = this.internalValue = me.output(this.internalValue);

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
	                me.internalValue = me.output([me.year, me.month, me.day, me.hour, me.minute, me.second]);
	                me.render(me.year, me.month);
	            } else {
	                me.today = [k1, k2];
	                me.internalValue = me.output([me.year, me.month, me.day, me.hour, me.minute, me.second]);
	            }
	            if (me.type === 'date') {
	                this.$emit('input', this.internalValue, this.oldValue);
	                me.showFalse();
	            }
	        },
	        currentTime: function currentTime() {
	            var me = this;
	            me.internalValue = me.output(new Date());
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
	        ok: function ok(e) {
	            e.preventDefault();
	            this.showFalse();
	            this.$emit('input', this.internalValue, this.oldValue);
	            this.internalValue = this.oldValue = this.internalValue || this.oldValue;
	            this.closeBtnNow = false;
	        },
	        cancel: function cancel(e) {
	            e && e.preventDefault();
	            if (this.type !== 'date') {
	                this.internalValue = this.oldValue;
	            }
	            this.showFalse();
	        },
	        showFalse: function showFalse() {
	            this.hourListShow = false;
	            this.minuteListShow = false;
	            this.secondListShow = false;
	            this.show = false;
	            document.removeEventListener('click', this.bindHide, false);
	        },
	        showCalendar: function showCalendar(e) {
	            var me = this;
	            e.stopPropagation();
	            me.show = true;
	            if (me.internalValue !== '') {
	                me.output(me.internalValue);
	                var params = me.dateParams;
	                me.year = params.year;
	                me.month = params.month;
	                me.hour = params.hour;
	                me.minute = params.minute;
	                me.second = params.second;
	            } else {
	                me.internalValue = me.initialValue;
	                this.count = 0;
	            }
	            if (me.oldValue === null) {
	                me.oldValue = me.internalValue;
	            }
	            me.render(me.year, me.month);
	            setTimeout(function () {
	                document.addEventListener('click', me.bindHide, false);
	            }, 500);
	        },
	        closeBtn: function closeBtn() {
	            this.internalValue = '';
	            this.count = 0;
	            this.closeBtnNow = true;
	        },
	        bindHide: function bindHide(e) {
	            e.stopPropagation();
	            this.cancel();
	            document.removeEventListener('click', this.bindHide, false);
	        }
	    },
	    destroyed: function destroyed() {
	        document.removeEventListener('click', this.bindHide, false);
	    }
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof2 = __webpack_require__(27);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    props: {
	        value: {
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
	            defaultFormat: 'YYYY-MM-DD',
	            type: 'date',
	            internalValue: '',
	            initialValue: ''
	        };
	    },

	    computed: {
	        formatValue: function formatValue() {
	            return this.output(this.internalValue);
	        }
	    },
	    created: function created() {
	        var me = this;
	        me.getType();
	        if (me.value) {
	            me.internalValue = me.output(me.value);
	        } else {
	            me.internalValue = me.output(new Date());
	        }

	        var earlyThanMinDate = false;
	        var lateThanMaxDate = false;
	        if (me.minDate) {
	            var minDate = me.output(me.minDate);
	            earlyThanMinDate = me.internalValue < minDate;
	        }
	        if (me.maxDate) {
	            var maxDate = me.output(me.maxDate);
	            lateThanMaxDate = me.internalValue > maxDate;
	        }
	        if (earlyThanMinDate || lateThanMaxDate) {
	            me.internalValue = me.minDate || me.maxDate;
	        }

	        this.initialValue = this.internalValue;
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
	            this.initialValue = this.internalValue;
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
	            me.output(me.internalValue);
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
	                        var nowDay = me.output([me.year, me.month - 1, k], format);
	                        if (nowDay < minDate || nowDay > maxDate) {
	                            temp[line].push({ day: k, disabled: true, prev: true, noclick: true });
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
	                    var count = 1;
	                    for (dow; dow < 6; dow++) {
	                        var nextMonthDay = me.output([y, m + 1, count]);
	                        var isLateThanMaxDate = nextMonthDay > me.output(me.maxDate, format);
	                        if (isLateThanMaxDate) {
	                            temp[line].push({ day: count, disabled: true, today: false, noclick: true });
	                        } else {
	                            temp[line].push({ day: count, disabled: true, today: false });
	                        }
	                        count++;
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
	            me.internalValue = me.output([me.year, me.month, me.day, me.hour, me.minute, me.second]);
	        },
	        output: function output(d, format) {
	            var fmt = format || this.format;
	            var me = this;
	            var date = new Date(d);
	            if (this.internalValue && this.type === 'time' && typeof d === 'string') {
	                date = new Date('1970-01-01 ' + d);
	            } else if ((typeof d === 'undefined' ? 'undefined' : (0, _typeof3.default)(d)) === 'object' && d.length > 0) {
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
	        },
	        getType: function getType() {
	            var format = this.format;
	            var hasY = format.indexOf('YYYY') !== -1;
	            var hasH = format.indexOf('hh') !== -1 || format.indexOf('HH') !== -1;
	            if (hasY && hasH) {
	                this.type = 'datetime';
	            } else if (hasH) {
	                this.type = 'time';
	            }
	        }
	    }
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(28);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(79);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(29), __esModule: true };

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(30);
	__webpack_require__(74);
	module.exports = __webpack_require__(78).f('iterator');

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(31)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(34)(String, 'String', function(iterated){
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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(32)
	  , defined   = __webpack_require__(33);
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
/* 32 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(35)
	  , $export        = __webpack_require__(36)
	  , redefine       = __webpack_require__(51)
	  , hide           = __webpack_require__(41)
	  , has            = __webpack_require__(52)
	  , Iterators      = __webpack_require__(53)
	  , $iterCreate    = __webpack_require__(54)
	  , setToStringTag = __webpack_require__(70)
	  , getPrototypeOf = __webpack_require__(72)
	  , ITERATOR       = __webpack_require__(71)('iterator')
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
/* 35 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(37)
	  , core      = __webpack_require__(38)
	  , ctx       = __webpack_require__(39)
	  , hide      = __webpack_require__(41)
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
/* 37 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 38 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(40);
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
/* 40 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(42)
	  , createDesc = __webpack_require__(50);
	module.exports = __webpack_require__(46) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(43)
	  , IE8_DOM_DEFINE = __webpack_require__(45)
	  , toPrimitive    = __webpack_require__(49)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(46) ? Object.defineProperty : function defineProperty(O, P, Attributes){
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
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(44);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(46) && !__webpack_require__(47)(function(){
	  return Object.defineProperty(__webpack_require__(48)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(47)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(44)
	  , document = __webpack_require__(37).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(44);
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
/* 50 */
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
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(41);

/***/ },
/* 52 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(55)
	  , descriptor     = __webpack_require__(50)
	  , setToStringTag = __webpack_require__(70)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(41)(IteratorPrototype, __webpack_require__(71)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(43)
	  , dPs         = __webpack_require__(56)
	  , enumBugKeys = __webpack_require__(68)
	  , IE_PROTO    = __webpack_require__(65)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(48)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(69).appendChild(iframe);
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
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(42)
	  , anObject = __webpack_require__(43)
	  , getKeys  = __webpack_require__(57);

	module.exports = __webpack_require__(46) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(58)
	  , enumBugKeys = __webpack_require__(68);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(52)
	  , toIObject    = __webpack_require__(59)
	  , arrayIndexOf = __webpack_require__(62)(false)
	  , IE_PROTO     = __webpack_require__(65)('IE_PROTO');

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
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(60)
	  , defined = __webpack_require__(33);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(61);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 61 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(59)
	  , toLength  = __webpack_require__(63)
	  , toIndex   = __webpack_require__(64);
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
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(32)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(32)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(66)('keys')
	  , uid    = __webpack_require__(67);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(37)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 67 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 68 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(37).document && document.documentElement;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(42).f
	  , has = __webpack_require__(52)
	  , TAG = __webpack_require__(71)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(66)('wks')
	  , uid        = __webpack_require__(67)
	  , Symbol     = __webpack_require__(37).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(52)
	  , toObject    = __webpack_require__(73)
	  , IE_PROTO    = __webpack_require__(65)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(33);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(75);
	var global        = __webpack_require__(37)
	  , hide          = __webpack_require__(41)
	  , Iterators     = __webpack_require__(53)
	  , TO_STRING_TAG = __webpack_require__(71)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(76)
	  , step             = __webpack_require__(77)
	  , Iterators        = __webpack_require__(53)
	  , toIObject        = __webpack_require__(59);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(34)(Array, 'Array', function(iterated, kind){
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
/* 76 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(71);

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(80), __esModule: true };

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(81);
	__webpack_require__(92);
	__webpack_require__(93);
	__webpack_require__(94);
	module.exports = __webpack_require__(38).Symbol;

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(37)
	  , has            = __webpack_require__(52)
	  , DESCRIPTORS    = __webpack_require__(46)
	  , $export        = __webpack_require__(36)
	  , redefine       = __webpack_require__(51)
	  , META           = __webpack_require__(82).KEY
	  , $fails         = __webpack_require__(47)
	  , shared         = __webpack_require__(66)
	  , setToStringTag = __webpack_require__(70)
	  , uid            = __webpack_require__(67)
	  , wks            = __webpack_require__(71)
	  , wksExt         = __webpack_require__(78)
	  , wksDefine      = __webpack_require__(83)
	  , keyOf          = __webpack_require__(84)
	  , enumKeys       = __webpack_require__(85)
	  , isArray        = __webpack_require__(88)
	  , anObject       = __webpack_require__(43)
	  , toIObject      = __webpack_require__(59)
	  , toPrimitive    = __webpack_require__(49)
	  , createDesc     = __webpack_require__(50)
	  , _create        = __webpack_require__(55)
	  , gOPNExt        = __webpack_require__(89)
	  , $GOPD          = __webpack_require__(91)
	  , $DP            = __webpack_require__(42)
	  , $keys          = __webpack_require__(57)
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
	  __webpack_require__(90).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(87).f  = $propertyIsEnumerable;
	  __webpack_require__(86).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(35)){
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
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(41)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(67)('meta')
	  , isObject = __webpack_require__(44)
	  , has      = __webpack_require__(52)
	  , setDesc  = __webpack_require__(42).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(47)(function(){
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
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(37)
	  , core           = __webpack_require__(38)
	  , LIBRARY        = __webpack_require__(35)
	  , wksExt         = __webpack_require__(78)
	  , defineProperty = __webpack_require__(42).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(57)
	  , toIObject = __webpack_require__(59);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(57)
	  , gOPS    = __webpack_require__(86)
	  , pIE     = __webpack_require__(87);
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
/* 86 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 87 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(61);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(59)
	  , gOPN      = __webpack_require__(90).f
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
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(58)
	  , hiddenKeys = __webpack_require__(68).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(87)
	  , createDesc     = __webpack_require__(50)
	  , toIObject      = __webpack_require__(59)
	  , toPrimitive    = __webpack_require__(49)
	  , has            = __webpack_require__(52)
	  , IE8_DOM_DEFINE = __webpack_require__(45)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(46) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 92 */
/***/ function(module, exports) {

	

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(83)('asyncIterator');

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(83)('observable');

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "xcui-datapicker",
	    class: _vm.className
	  }, [_c('div', {
	    class: {
	      'input-group': _vm.btnShow, 'bg-pr': !_vm.btnShow
	    }
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.internalValue),
	      expression: "internalValue"
	    }],
	    staticClass: "form-control",
	    attrs: {
	      "type": "text",
	      "placeholder": "请输入日期"
	    },
	    domProps: {
	      "value": _vm._s(_vm.internalValue)
	    },
	    on: {
	      "click": _vm.showCalendar,
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.internalValue = $event.target.value
	      }
	    }
	  }), _vm._v(" "), _c('button', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.show),
	      expression: "show"
	    }],
	    staticClass: "close close_btn",
	    style: ({
	      'right': _vm.btnShow ? '50px' : '10px'
	    }),
	    attrs: {
	      "type": "button",
	      "title": "点击关闭"
	    },
	    on: {
	      "click": _vm.closeBtn
	    }
	  }, [_c('span', {
	    attrs: {
	      "aria-hidden": "true"
	    }
	  }, [_vm._v("×")])]), _vm._v(" "), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.show),
	      expression: "show"
	    }],
	    staticClass: "calendar",
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	      },
	      "touchstart": function($event) {
	        $event.stopPropagation();
	      }
	    }
	  }, [(_vm.type != 'time') ? _c('div', {
	    staticClass: "calendar-tools"
	  }, [_c('i', {
	    staticClass: "glyphicon glyphicon-chevron-left float left",
	    on: {
	      "click": _vm.prev
	    }
	  }), _vm._v(" "), _c('i', {
	    staticClass: "glyphicon glyphicon-chevron-right float right",
	    on: {
	      "click": _vm.next
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "calendar-tit"
	  }, [_c('span', {
	    on: {
	      "click": function($event) {
	        _vm.changeTitSelect(_vm.year, 'year')
	      }
	    }
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.year),
	      expression: "year"
	    }],
	    staticClass: "calendar-tit-year",
	    attrs: {
	      "type": "text"
	    },
	    domProps: {
	      "value": _vm._s(_vm.year)
	    },
	    on: {
	      "change": function($event) {
	        _vm.changeTitSelect(_vm.year, 'year')
	      },
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.year = $event.target.value
	      }
	    }
	  }), _vm._v("年")]), _vm._v(" "), _c('span', {
	    staticClass: "calendar-tit-month",
	    on: {
	      "click": function($event) {
	        _vm.changeTitSelect(_vm.month - 1, 'month')
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.month + 1) + "月")])])]) : _vm._e(), _vm._v(" "), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.dataTableShow),
	      expression: "dataTableShow"
	    }]
	  }, [(_vm.type != 'time') ? _c('table', {
	    attrs: {
	      "cellpadding": "5"
	    }
	  }, [_c('thead', [_c('tr', _vm._l((_vm.weeks), function(week) {
	    return _c('td', {
	      staticClass: "week"
	    }, [_vm._v(_vm._s(week))])
	  }))]), _vm._v(" "), _vm._l((_vm.days), function(day, k1) {
	    return _c('tr', _vm._l((day), function(child, k2) {
	      return _c('td', {
	        class: {
	          'today': child.today, 'off': child.disabled, 'noclick': child.noClick
	        },
	        style: ({
	          'background': _vm.color && child.today ? _vm.color : ''
	        }),
	        on: {
	          "click": function($event) {
	            _vm.select(k1, k2, $event)
	          }
	        }
	      }, [_vm._v("\n                        " + _vm._s(child.day) + "\n                        "), (_vm.showLunar) ? _c('div', {
	        staticClass: "lunar"
	      }, [_vm._v(_vm._s(child.lunar))]) : _vm._e()])
	    }))
	  })], 2) : _vm._e(), _vm._v(" "), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.type == 'datetime' || _vm.type == 'time'),
	      expression: "type=='datetime'|| type=='time'"
	    }],
	    staticClass: "calendar-time"
	  }, [_c('div', {
	    staticClass: "timer clearfix"
	  }, [_c('div', {
	    staticClass: "timer-item"
	  }, [_c('label', {
	    on: {
	      "click": function($event) {
	        _vm.dropTimeList('hour')
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.hour))]), _vm._v(":\n                            "), _c('ul', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.hourListShow),
	      expression: "hourListShow"
	    }],
	    staticClass: "drop-down"
	  }, _vm._l((_vm.hourList), function(item) {
	    return _c('li', {
	      on: {
	        "click": function($event) {
	          _vm.selectTimeItem($event, 'hour')
	        }
	      }
	    }, [_vm._v(_vm._s(item))])
	  }))]), _vm._v(" "), _c('div', {
	    staticClass: "timer-item"
	  }, [_c('label', {
	    on: {
	      "click": function($event) {
	        _vm.dropTimeList('minute')
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.minute))]), _vm._v(":\n                            "), _c('ul', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.minuteListShow),
	      expression: "minuteListShow"
	    }],
	    staticClass: "drop-down"
	  }, _vm._l((_vm.minuteList), function(item) {
	    return _c('li', {
	      on: {
	        "click": function($event) {
	          _vm.selectTimeItem($event, 'minute')
	        }
	      }
	    }, [_vm._v(_vm._s(item))])
	  }))]), _vm._v(" "), _c('div', {
	    staticClass: "timer-item"
	  }, [_c('label', {
	    on: {
	      "click": function($event) {
	        _vm.dropTimeList('second')
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.second))]), _vm._v(" "), _c('ul', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.secondListShow),
	      expression: "secondListShow"
	    }],
	    staticClass: "drop-down"
	  }, _vm._l((_vm.secondList), function(item) {
	    return _c('li', {
	      on: {
	        "click": function($event) {
	          _vm.selectTimeItem($event, 'second')
	        }
	      }
	    }, [_vm._v(_vm._s(item))])
	  }))]), _vm._v(" "), _c('div', {
	    staticClass: "timer-item"
	  }, [_c('div', {
	    staticClass: "timer-item-current",
	    style: ({
	      'color': _vm.color
	    }),
	    on: {
	      "click": _vm.currentTime
	    }
	  }, [_vm._v("当前")])])])]), _vm._v(" "), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.type == 'datetime' || _vm.type == 'time' || _vm.range),
	      expression: "type=='datetime'|| type=='time' || range"
	    }],
	    staticClass: "calendar-button"
	  }, [_c('button', {
	    style: ({
	      'background': _vm.color
	    }),
	    on: {
	      "click": _vm.ok
	    }
	  }, [_vm._v("确定")]), _vm._v(" "), _c('button', {
	    staticClass: "cancel",
	    on: {
	      "click": _vm.cancel
	    }
	  }, [_vm._v("取消")])])]), _vm._v(" "), _c('table', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.yearTableShow),
	      expression: "yearTableShow"
	    }],
	    attrs: {
	      "cellpadding": "6"
	    }
	  }, [_c('tr', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.selectRangeShow),
	      expression: "selectRangeShow"
	    }]
	  }, [_c('td', {
	    attrs: {
	      "colspan": "3"
	    }
	  }, [_vm._v(_vm._s(_vm.selectRange))])]), _vm._v(" "), _vm._l((_vm.selectRangeList), function(selects) {
	    return _c('tr', _vm._l((selects), function(select) {
	      return _c('td', {
	        on: {
	          "click": function($event) {
	            _vm.selectItem(select)
	          }
	        }
	      }, [_vm._v(_vm._s(select))])
	    }))
	  })], 2)]), _vm._v(" "), (_vm.btnShow) ? _c('span', {
	    staticClass: "input-group-btn",
	    on: {
	      "click": _vm.showCalendar
	    }
	  }, [_vm._m(0)]) : _vm._e()])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('button', {
	    staticClass: "btn btn-default"
	  }, [_c('span', {
	    staticClass: "glyphicon glyphicon-calendar"
	  })])
	}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-5bb1b5b4", module.exports)
	  }
	}

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(97)

	/* script */
	__vue_exports__ = __webpack_require__(99)

	/* template */
	var __vue_template__ = __webpack_require__(103)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/ubuntu/xcui/src/components/daterangepicker/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-52e5fc89", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-52e5fc89", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(98);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(24)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-52e5fc89!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-52e5fc89!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports


	// module
	exports.push([module.id, "\n.xcui-datarangepicker {\n  position: relative;\n}\n.xcui-datarangepicker .close_btn {\n  position: absolute;\n  top: 50%;\n  right: 10px;\n  margin-top: -11px;\n  z-index: 9999;\n}\n.xcui-datarangepicker .calendar {\n  width: 240px;\n  padding: 10px;\n  background: #fff;\n  position: absolute;\n  border: 1px solid #DEDEDE;\n  border-radius: 2px;\n  transition: all .5s ease;\n  left: 0;\n  top: 38px;\n}\n.xcui-datarangepicker .calendar-enter .calendar-leave {\n  opacity: 0;\n  transform: translate3d(0, -10px, 0);\n}\n.xcui-datarangepicker .calendar-tit {\n  text-align: center;\n  margin: 0 auto;\n  width: 104px;\n  font-weight: bold;\n}\n.xcui-datarangepicker .calendar-tit input {\n  color: #333;\n  height: 24px;\n  outline: medium;\n  text-align: center;\n  border: none;\n  background-color: transparent;\n}\n.xcui-datarangepicker .calendar-tit-year {\n  width: 36px;\n}\n.xcui-datarangepicker .calendar-tit-month {\n  width: 18px;\n  margin-left: 2px;\n}\n.xcui-datarangepicker .calendar:before {\n  position: absolute;\n  left: 30px;\n  top: -10px;\n  content: \"\";\n  border: 5px solid rgba(0, 0, 0, 0);\n  border-bottom-color: #DEDEDE;\n}\n.xcui-datarangepicker .calendar:after {\n  position: absolute;\n  left: 30px;\n  top: -9px;\n  content: \"\";\n  border: 5px solid rgba(0, 0, 0, 0);\n  border-bottom-color: #fff;\n}\n.xcui-datarangepicker .calendar-tools {\n  height: 32px;\n  font-size: 14px;\n  line-height: 32px;\n  color: #333;\n}\n.xcui-datarangepicker .calendar-tools .float.left {\n  float: left;\n}\n.xcui-datarangepicker .calendar-tools .float.right {\n  float: right;\n}\n.xcui-datarangepicker .calendar-tools > i {\n  margin: 0 10px;\n  line-height: 32px;\n  cursor: pointer;\n  color: #707070;\n}\n.xcui-datarangepicker .calendar-tools > i:hover {\n  color: #333;\n}\n.xcui-datarangepicker .calendar table {\n  clear: both;\n  width: 100%;\n  margin-bottom: 10px;\n  border-collapse: collapse;\n  color: #444;\n}\n.xcui-datarangepicker .calendar table td {\n  margin: 2px !important;\n  padding: 5px 0;\n  width: 14.28571429%;\n  text-align: center;\n  vertical-align: middle;\n  font-size: 14px;\n  line-height: 125%;\n  cursor: pointer;\n  border: 0;\n}\n.xcui-datarangepicker .calendar table td:hover {\n  background: #f3f8fa;\n}\n.xcui-datarangepicker .calendar table td.week {\n  pointer-events: none !important;\n  cursor: default !important;\n}\n.xcui-datarangepicker .calendar table td.off {\n  color: #c0c0c0;\n}\n.xcui-datarangepicker .calendar table td.today {\n  background-color: #46c3c1;\n  color: #fff;\n  font-size: 14px;\n  border-radius: 4px;\n}\n.xcui-datarangepicker .calendar table td.today .lunar {\n  color: #fff;\n}\n.xcui-datarangepicker .calendar table td.todayleft {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.xcui-datarangepicker .calendar table td.todayright {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.xcui-datarangepicker .calendar table td.range {\n  background: #e2eff5;\n}\n.xcui-datarangepicker .calendar table thead td {\n  text-transform: uppercase;\n}\n.xcui-datarangepicker .calendar .timer {\n  margin: 0 auto 10px;\n  width: 120px;\n}\n.xcui-datarangepicker .calendar .timer input {\n  border-radius: 2px;\n  padding: 5px;\n  font-size: 14px;\n  line-height: 18px;\n  color: #46c3c1;\n  width: 50px;\n  text-align: center;\n  border: 1px solid #efefef;\n}\n.xcui-datarangepicker .calendar .timer input:focus {\n  border: 1px solid #46c3c1;\n}\n.xcui-datarangepicker .calendar .timer-item {\n  float: left;\n  text-align: center;\n  position: relative;\n  cursor: pointer;\n}\n.xcui-datarangepicker .calendar .timer-item-current {\n  color: #46c3c1;\n  line-height: 24px;\n  font-size: 14px;\n}\n.xcui-datarangepicker .calendar .timer label {\n  margin: 0;\n  width: 30px;\n  padding: 5px;\n  line-height: 14px;\n  margin-right: 4px;\n  font-weight: normal;\n}\n.xcui-datarangepicker .calendar-button {\n  text-align: center;\n}\n.xcui-datarangepicker .calendar-button button {\n  border: none;\n  cursor: pointer;\n  display: inline-block;\n  min-height: 1em;\n  vertical-align: baseline;\n  background: #46c3c1;\n  color: #fff;\n  margin: 0 .3em 0 0;\n  padding: .6em 2em;\n  font-size: 1em;\n  line-height: 1em;\n  text-align: center;\n  border-radius: .3em;\n}\n.xcui-datarangepicker .calendar-button button.cancel {\n  background: #efefef;\n  color: #666;\n}\n.xcui-datarangepicker .calendar .lunar {\n  font-size: 11px;\n  line-height: 150%;\n  color: #aaa;\n}\n.xcui-datarangepicker .calendar .drop-down {\n  position: absolute;\n  top: 24px;\n  left: -10px;\n  width: 50px;\n  height: 140px;\n  background: #fff;\n  border: 1px solid #efefef;\n  padding: 0;\n  margin: 0;\n  overflow-y: scroll;\n}\n.xcui-datarangepicker .calendar .drop-down li {\n  width: 50px;\n  list-style: none;\n}\n.xcui-datarangepicker .calendar .drop-down li.on {\n  background: #eee;\n}\n.xcui-datarangepicker .calendar .drop-down li:hover {\n  background: #eee;\n}\n.xcui-datarangepicker .double-calendar {\n  width: 490px;\n  z-index: 999;\n}\n.xcui-datarangepicker .double-calendar-left {\n  width: 220px;\n  float: left;\n}\n.xcui-datarangepicker .double-calendar-right {\n  width: 220px;\n  float: right;\n}\n.xcui-datarangepicker .double-calendar .calendar-button {\n  padding-top: 10px;\n  border-top: 1px solid #ddd;\n}\n.xcui-datarangepicker .clearfix {\n  zoom: 1;\n}\n.xcui-datarangepicker .clearfix:after {\n  display: block;\n  width: 0;\n  height: 0;\n  visibility: hidden;\n  content: '';\n  clear: both;\n}\n.xcui-datarangepicker .bg-pr {\n  position: relative;\n}\n.xcui-datarangepicker .btn-default {\n  color: #666;\n  border-radius: 0 4px 4px 0;\n}\n", ""]);

	// exports


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _calendar = __webpack_require__(100);

	var _calendar2 = _interopRequireDefault(_calendar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    name: 'xcui-daterangepicker',
	    props: {
	        minDate: null,
	        maxDate: null,
	        hourRange: null,
	        minuteRange: null,
	        secondRange: null,
	        format: {
	            type: String,
	            default: 'YYYY-MM-DD'
	        },
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
	        },
	        sep: {
	            type: String,
	            default: ' 至 '
	        },
	        value: {
	            type: Object,
	            default: function _default() {
	                return {
	                    startDate: '',
	                    endDate: ''
	                };
	            }
	        }
	    },
	    components: {
	        calendar: _calendar2.default
	    },
	    data: function data() {
	        return {
	            show: false,
	            startRender: '',
	            initialStartDate: '',
	            initialEndDate: '',
	            startDate: '',
	            endDate: '',
	            newStartDate: '',
	            newEndDate: ''
	        };
	    },

	    watch: {
	        value: function value(val) {
	            this.renderValue(val);
	        }
	    },
	    created: function created() {
	        this.renderValue(this.value);
	    },

	    methods: {
	        renderValue: function renderValue(val) {
	            var startDate = this.startDate = val.startDate || '';
	            var endDate = this.endDate = val.endDate || '';
	            this.newStartDate = endDate < startDate ? endDate : startDate;
	            this.newEndDate = startDate > endDate ? startDate : endDate;
	            this.dateText = this.newStartDate && this.newEndDate && this.newStartDate + this.sep + this.newEndDate;
	            this.initialStartDate = startDate;
	            this.initialEndDate = endDate;
	        },
	        ok: function ok(e) {
	            e.preventDefault();
	            if (this.newStartDate && this.newEndDate) {
	                this.dateText = this.newStartDate + this.sep + this.newEndDate;
	                this.startDate = this.newStartDate;
	                this.endDate = this.newEndDate;
	            } else {
	                this.dateText = this.startDate = this.endDate = '';
	            }
	            this.show = false;
	            this.emitChange();
	            this.initialStartDate = this.startDate;
	            this.initialEndDate = this.endDate;
	            this.startRender = new Date().getTime();
	        },
	        cancel: function cancel(e) {
	            e.preventDefault();
	            this.show = false;
	            this.startRender = new Date().getTime();
	            this.newStartDate = this.initialStartDate;
	            this.newEndDate = this.initialEndDate;
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
	        },
	        closeBtn: function closeBtn() {
	            this.dateText = this.startDate = this.endDate = '';
	        },
	        emitChange: function emitChange() {
	            this.$emit('input', {
	                startDate: this.newStartDate,
	                endDate: this.newEndDate
	            }, {
	                startDate: this.initialStartDate,
	                endDate: this.initialEndDate
	            });
	        },
	        startChange: function startChange(val) {
	            this.newStartDate = val.value;
	            this.newEndDate = val.otherValue;
	        },
	        endChange: function endChange(val) {
	            this.newStartDate = val.otherValue;
	            this.newEndDate = val.value;
	        }
	    }
	};

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(101)

	/* template */
	var __vue_template__ = __webpack_require__(102)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/ubuntu/xcui/src/components/daterangepicker/calendar.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-580e4752", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-580e4752", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] calendar.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _calendarMixins = __webpack_require__(26);

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
	        startRender: null,
	        dateLimit: {
	            type: Object,
	            default: null
	        }
	    },
	    data: function data() {
	        return {
	            internalValue: '',
	            internalOtherValue: '',
	            firstInit: true
	        };
	    },

	    watch: {
	        value: function value(val) {
	            this.renderValue(val);
	        },
	        otherValue: function otherValue(val) {
	            this.internalOtherValue = val;
	        }
	    },
	    created: function created() {
	        if (this.type === 'time') {
	            if (this.otherValue && this.firstInit) {
	                this.internalOtherValue = this.output(this.otherValue);
	                this.firstInit = false;
	            }
	            this.internalOtherValue = this.internalOtherValue ? this.output(this.internalOtherValue) : this.internalValue;
	        }
	        this.emitChange();
	    },

	    methods: {
	        renderValue: function renderValue(val) {
	            this.internalValue = this.output(val);
	            var params = this.dateParams;
	            this.year = params.year;
	            this.month = params.month;
	            this.hour = params.hour;
	            this.day = params.day;
	            this.minute = params.minute;
	            this.second = params.second;
	            this.render(params.year, params.month);
	        },
	        renderElse: function renderElse(y, m, i, temp, line) {
	            var me = this;
	            var format = me.defaultFormat;
	            var today = me.output([y, m, i], format);
	            var value = me.output(me.internalValue, format);
	            if (me.otherValue && me.firstInit) {
	                me.internalOtherValue = me.output(me.otherValue);
	                me.firstInit = false;
	            }
	            me.internalOtherValue = me.internalOtherValue ? me.output(me.internalOtherValue) : me.internalValue;
	            var otherDate = me.output(me.internalOtherValue, format);
	            var isMinDate = me.minDate && today < me.output(me.minDate, format);
	            var isMaxDate = me.maxDate && today > me.output(me.maxDate, format);
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
	            var daySelected = me.days[k1][k2];

	            me.output(me.internalValue);
	            var va = me.dateParams;
	            if (me.today.length > 0 && me.month === va.month && me.year === va.year) {
	                me.days[me.today[0]][me.today[1]].today = false;
	            }

	            daySelected.today = true;
	            daySelected.range = false;
	            me.day = this.zero(me.days[k1][k2].day);
	            me.today = [k1, k2];
	            if (daySelected.disabled) {
	                me.month = k1 === 0 ? me.month - 1 : me.month + 1;
	                var om = me.outputMonth(me.month, me.year);
	                me.year = om.y;
	                me.month = om.m;
	                me.internalValue = me.output([me.year, me.month, me.day, me.hour, me.minute, me.second]);
	                me.render(me.year, me.month);
	            } else {
	                me.today = [k1, k2];
	                me.internalValue = me.output([me.year, me.month, me.day, me.hour, me.minute, me.second]);
	            }
	            me.internalOtherValue = me.bindLimitDate();
	            me.changeOtherCalender();
	            this.emitChange();
	        },
	        selectTime: function selectTime(e, type) {
	            this.selectTimeItem(e, type);
	            this.changeOtherCalender();
	            this.internalOtherValue = this.output(this.internalOtherValue);
	            this.emitChange();
	        },
	        changeOtherCalender: function changeOtherCalender() {
	            var me = this;
	            var time = new Date().getTime();
	            if (!me.right) {
	                if (me.internalValue > me.internalOtherValue) {
	                    me.internalOtherValue = me.internalValue;
	                }
	            } else if (me.right) {
	                if (me.internalValue < me.internalOtherValue) {
	                    me.internalOtherValue = me.internalValue;
	                }
	            }
	            this.$nextTick(function () {
	                me.$parent.startRender = time;
	            });
	        },
	        getYearMonth: function getYearMonth(date) {
	            this.output(date);
	            var params = this.dateParams;
	            return params.year * 12 + params.month;
	        },
	        bindLimitDate: function bindLimitDate() {
	            var me = this;
	            var format = me.defaultFormat;
	            me.internalOtherValue = me.internalOtherValue ? me.output(me.internalOtherValue) : me.internalValue;
	            var oValue = me.output(me.internalOtherValue, format);
	            var ovs = me.dateParams;
	            var bg = me.minDate && me.output(me.minDate, format);
	            var ed = me.maxDate && me.output(me.maxDate, format);
	            var y = ovs.year;
	            var m = ovs.month;
	            var d = ovs.day;
	            var meValue = me.output(me.internalValue, format);
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
	            otherTime = me.internalOtherValue || me.output([y, m, d], format);
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
	        },
	        emitChange: function emitChange() {
	            this.$emit('mutate', {
	                value: this.internalValue,
	                otherValue: this.internalOtherValue
	            });
	        }
	    }
	};

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [(_vm.type != 'time') ? _c('div', {
	    staticClass: "calendar-tools"
	  }, [_c('i', {
	    staticClass: "glyphicon glyphicon-chevron-left float left",
	    on: {
	      "click": _vm.prev
	    }
	  }), _vm._v(" "), _c('i', {
	    staticClass: "glyphicon glyphicon-chevron-right float right",
	    on: {
	      "click": _vm.next
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "calendar-tit"
	  }, [_c('span', {
	    on: {
	      "click": function($event) {
	        _vm.changeTitSelect(_vm.year, 'year')
	      }
	    }
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.year),
	      expression: "year"
	    }],
	    staticClass: "calendar-tit-year",
	    attrs: {
	      "type": "text"
	    },
	    domProps: {
	      "value": _vm._s(_vm.year)
	    },
	    on: {
	      "change": function($event) {
	        _vm.changeTitSelect(_vm.year, 'year')
	      },
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.year = $event.target.value
	      }
	    }
	  }), _vm._v("年\n            ")]), _vm._v(" "), _c('span', {
	    staticClass: "calendar-tit-month",
	    on: {
	      "click": function($event) {
	        _vm.changeTitSelect(_vm.month - 1, 'month')
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.month + 1) + "月")])])]) : _vm._e(), _vm._v(" "), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.dataTableShow),
	      expression: "dataTableShow"
	    }]
	  }, [(_vm.type != 'time') ? _c('table', {
	    attrs: {
	      "cellpadding": "5"
	    }
	  }, [_c('thead', [_c('tr', _vm._l((_vm.weeks), function(week) {
	    return _c('td', {
	      staticClass: "week"
	    }, [_vm._v(_vm._s(week))])
	  }))]), _vm._v(" "), _vm._l((_vm.days), function(day, k1) {
	    return _c('tr', _vm._l((day), function(child, k2) {
	      return _c('td', {
	        class: {
	          'today': child.today, 'range': child.range, 'off': child.disabled, 'todayleft': !_vm.right, 'todayright': _vm.right, 'prev': child.prev, 'noclick': child.noclick
	        },
	        style: ({
	          'background': _vm.color && child.today ? _vm.color : ''
	        }),
	        on: {
	          "click": function($event) {
	            _vm.select(k1, k2, $event)
	          }
	        }
	      }, [_vm._v("\n                " + _vm._s(child.day) + "\n                ")])
	    }))
	  })], 2) : _vm._e(), _vm._v(" "), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.type == 'datetime' || _vm.type == 'time'),
	      expression: "type=='datetime' || type=='time'"
	    }],
	    staticClass: "calendar-time"
	  }, [_c('div', {
	    staticClass: "timer clearfix"
	  }, [_c('div', {
	    staticClass: "timer-item"
	  }, [_c('label', {
	    on: {
	      "click": function($event) {
	        _vm.dropTimeList('hour')
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.hour))]), _vm._v(":\n                    "), _c('ul', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.hourListShow),
	      expression: "hourListShow"
	    }],
	    staticClass: "drop-down"
	  }, _vm._l((_vm.hourList), function(item) {
	    return _c('li', {
	      on: {
	        "click": function($event) {
	          _vm.selectTime($event, 'hour')
	        }
	      }
	    }, [_vm._v(_vm._s(item))])
	  }))]), _vm._v(" "), _c('div', {
	    staticClass: "timer-item"
	  }, [_c('label', {
	    on: {
	      "click": function($event) {
	        _vm.dropTimeList('minute')
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.minute))]), _vm._v(":\n                    "), _c('ul', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.minuteListShow),
	      expression: "minuteListShow"
	    }],
	    staticClass: "drop-down"
	  }, _vm._l((_vm.minuteList), function(item) {
	    return _c('li', {
	      on: {
	        "click": function($event) {
	          _vm.selectTime($event, 'minute')
	        }
	      }
	    }, [_vm._v(_vm._s(item))])
	  }))]), _vm._v(" "), _c('div', {
	    staticClass: "timer-item"
	  }, [_c('label', {
	    on: {
	      "click": function($event) {
	        _vm.dropTimeList('second')
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.second))]), _vm._v(" "), _c('ul', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.secondListShow),
	      expression: "secondListShow"
	    }],
	    staticClass: "drop-down"
	  }, _vm._l((_vm.secondList), function(item) {
	    return _c('li', {
	      on: {
	        "click": function($event) {
	          _vm.selectTime($event, 'second')
	        }
	      }
	    }, [_vm._v(_vm._s(item))])
	  }))])])])]), _vm._v(" "), _c('table', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.yearTableShow),
	      expression: "yearTableShow"
	    }],
	    attrs: {
	      "cellpadding": "6"
	    }
	  }, [_c('tr', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.selectRangeShow),
	      expression: "selectRangeShow"
	    }]
	  }, [_c('td', {
	    attrs: {
	      "colspan": "3"
	    }
	  }, [_vm._v(_vm._s(_vm.selectRange))])]), _vm._v(" "), _vm._l((_vm.selectRangeList), function(selects) {
	    return _c('tr', _vm._l((selects), function(select) {
	      return _c('td', {
	        on: {
	          "click": function($event) {
	            _vm.selectItem(select)
	          }
	        }
	      }, [_vm._v(_vm._s(select))])
	    }))
	  })], 2)])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-580e4752", module.exports)
	  }
	}

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "xcui-datarangepicker",
	    class: _vm.className
	  }, [_c('div', {
	    class: {
	      'input-group': _vm.btnShow
	    }
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.dateText),
	      expression: "dateText"
	    }],
	    staticClass: "form-control col-md-3",
	    attrs: {
	      "type": "text",
	      "placeholder": "请输入日期"
	    },
	    domProps: {
	      "value": _vm._s(_vm.dateText)
	    },
	    on: {
	      "click": _vm.showCalendar,
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.dateText = $event.target.value
	      }
	    }
	  }), _vm._v(" "), _c('button', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.show),
	      expression: "show"
	    }],
	    staticClass: "close close_btn",
	    style: ({
	      'right': _vm.btnShow ? '50px' : '10px'
	    }),
	    attrs: {
	      "type": "button",
	      "title": "点击关闭"
	    },
	    on: {
	      "click": _vm.closeBtn
	    }
	  }, [_c('span', {
	    attrs: {
	      "aria-hidden": "true"
	    }
	  }, [_vm._v("×")])]), _vm._v(" "), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.show),
	      expression: "show"
	    }],
	    staticClass: "calendar double-calendar",
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	      },
	      "touchstart": function($event) {
	        $event.stopPropagation();
	      }
	    }
	  }, [_c('div', {
	    staticClass: "clearfix"
	  }, [_c('div', {
	    staticClass: "double-calendar-left"
	  }, [_c('calendar', {
	    attrs: {
	      "value": _vm.newStartDate,
	      "format": _vm.format,
	      "other-value": _vm.newEndDate,
	      "min-date": _vm.minDate,
	      "max-date": _vm.maxDate,
	      "hour-range": _vm.hourRange,
	      "minute-range": _vm.minuteRange,
	      "second-range": _vm.secondRange,
	      "color": _vm.color,
	      "date-limit": _vm.dateLimit,
	      "start-render": _vm.startRender
	    },
	    on: {
	      "mutate": _vm.startChange
	    }
	  })], 1), _vm._v(" "), _c('div', {
	    staticClass: "double-calendar-right"
	  }, [_c('calendar', {
	    attrs: {
	      "value": _vm.newEndDate,
	      "format": _vm.format,
	      "other-value": _vm.newStartDate,
	      "right": true,
	      "min-date": _vm.minDate,
	      "max-date": _vm.maxDate,
	      "hour-range": _vm.hourRange,
	      "minute-range": _vm.minuteRange,
	      "second-range": _vm.secondRange,
	      "color": _vm.color,
	      "date-limit": _vm.dateLimit,
	      "start-render": _vm.startRender
	    },
	    on: {
	      "mutate": _vm.endChange
	    }
	  })], 1)]), _vm._v(" "), _c('div', {
	    staticClass: "calendar-button"
	  }, [_c('button', {
	    style: ({
	      'background': _vm.color
	    }),
	    on: {
	      "click": _vm.ok
	    }
	  }, [_vm._v("确定")]), _vm._v(" "), _c('button', {
	    staticClass: "cancel",
	    on: {
	      "click": _vm.cancel
	    }
	  }, [_vm._v("取消")])])]), _vm._v(" "), (_vm.btnShow) ? _c('span', {
	    staticClass: "input-group-btn",
	    on: {
	      "click": _vm.showCalendar
	    }
	  }, [_vm._m(0)]) : _vm._e()])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('button', {
	    staticClass: "btn btn-default"
	  }, [_c('span', {
	    staticClass: "glyphicon glyphicon-calendar"
	  })])
	}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-52e5fc89", module.exports)
	  }
	}

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(105)

	/* script */
	__vue_exports__ = __webpack_require__(107)

	/* template */
	var __vue_template__ = __webpack_require__(108)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/ubuntu/xcui/src/components/inputNumber/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-5c92f19f", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-5c92f19f", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(106);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(24)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5c92f19f!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5c92f19f!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports


	// module
	exports.push([module.id, "\n.outer {\n  overflow: hidden;\n  display: inline-block;\n  border: 1px solid #c1c1c1;\n  border-radius: 5px;\n}\n.outer:hover {\n  border: 1px solid #66afe9;\n}\n.outer:hover .up-down-wrap {\n  border-left: 1px solid #c1c1c1;\n}\n.outer:hover .up-down-wrap .up-wrap {\n  color: #c1c1c1;\n  border-bottom: 1px solid #c1c1c1;\n  border-radius: 1px;\n}\n.outer:hover .up-down-wrap .down-wrap {\n  color: #c1c1c1;\n}\n.outer .input-wrap {\n  float: right;\n  height: 100%;\n}\n.outer .input-wrap input {\n  height: 100%;\n  padding-left: 5px;\n  float: right;\n  background-color: #ffffff;\n  border: none;\n  padding-right: 20px;\n}\n.outer .input-wrap input:focus {\n  outline: none !important;\n}\n.outer .up-down-wrap {\n  width: 20px;\n  margin-left: -22px;\n  border: none;\n  text-align: center;\n  float: right;\n  position: relative;\n  height: 100%;\n}\n.outer .up-down-wrap .up-wrap {\n  font-size: 1px;\n  margin: 0;\n  border: none;\n  display: block;\n}\n.outer .up-down-wrap .down-wrap {\n  font-size: 1px;\n  margin-top: 0px;\n  border: none;\n  display: block;\n}\n.outer .up-down-wrap a:link,\n.outer .up-down-wrap a:visited {\n  color: transparent;\n  text-decoration: none;\n}\n.outer .up-down-wrap a:hover,\n.outer .up-down-wrap a:active {\n  color: #66afe9 !important;\n  text-decoration: none;\n}\n.large {\n  height: 35px !important;\n}\n.large .up-down-wrap .up-wrap {\n  margin-top: 3px !important;\n}\n.normal {\n  height: 30px !important;\n}\n.small {\n  height: 28px !important;\n}\n", ""]);

	// exports


/***/ },
/* 107 */
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
	            default: 'normal'
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
	    }
	};

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    ref: "outer",
	    staticClass: "outer",
	    class: _vm.size
	  }, [_c('div', {
	    staticClass: "up-down-wrap"
	  }, [_c('a', {
	    staticClass: "up-wrap glyphicon glyphicon-chevron-up",
	    attrs: {
	      "href": ""
	    },
	    on: {
	      "mouse": function($event) {
	        if (_vm._k($event.keyCode, "down", 40)) { return; }
	        _vm.preventDefault($event)
	      },
	      "click": _vm.upValue
	    }
	  }), _vm._v(" "), _c('a', {
	    staticClass: "down-wrap glyphicon glyphicon-chevron-down",
	    attrs: {
	      "href": ""
	    },
	    on: {
	      "mouse": function($event) {
	        if (_vm._k($event.keyCode, "down", 40)) { return; }
	        _vm.preventDefault($event)
	      },
	      "click": _vm.downValue
	    }
	  })]), _vm._v(" "), _c('div', {
	    staticClass: "input-wrap"
	  }, [_c('input', {
	    directives: [{
	      name: "el",
	      rawName: "v-el",
	      value: (_vm.input),
	      expression: "input"
	    }, {
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.inputValue),
	      expression: "inputValue"
	    }],
	    staticClass: "middle form-control",
	    class: _vm.className,
	    attrs: {
	      "type": "text",
	      "placeholder": _vm.textTips,
	      "disabled": _vm.isDisable
	    },
	    domProps: {
	      "value": _vm._s(_vm.inputValue)
	    },
	    on: {
	      "keyup": function($event) {
	        _vm.changeValue($event)
	      },
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.inputValue = $event.target.value
	      }
	    }
	  })])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-5c92f19f", module.exports)
	  }
	}

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(110)

	/* script */
	__vue_exports__ = __webpack_require__(112)

	/* template */
	var __vue_template__ = __webpack_require__(113)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/ubuntu/xcui/src/components/loading/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-e148e730", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-e148e730", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(111);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(24)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-e148e730!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-e148e730!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports


	// module
	exports.push([module.id, "\n.xcui-loading {\n  display: block;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 999;\n  background: rgba(255, 255, 255, 0.7);\n}\n.loader {\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n}\n/*loading-1********************/\n.load1 .loader {\n  top: 40%;\n  color: #46C3C1;\n  font-size: 13px;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  text-indent: -9999em;\n  -webkit-animation: load1 1.3s infinite linear;\n  animation: load1 1.3s infinite linear;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n}\n@-webkit-keyframes load1 {\n0%,\n  100% {\n    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;\n}\n12.5% {\n    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n}\n25% {\n    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n}\n37.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;\n}\n50% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;\n}\n62.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;\n}\n75% {\n    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;\n}\n87.5% {\n    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;\n}\n}\n@keyframes load1 {\n0%,\n  100% {\n    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;\n}\n12.5% {\n    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n}\n25% {\n    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n}\n37.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;\n}\n50% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;\n}\n62.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;\n}\n75% {\n    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;\n}\n87.5% {\n    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;\n}\n}\n/*loading-2********************/\n.load2 .loader {\n  top: 30%;\n  color: #46C3C1;\n  font-size: 60px;\n  text-indent: -9999em;\n  overflow: hidden;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation: load2 1.7s infinite ease;\n  animation: load2 1.7s infinite ease;\n}\n@-webkit-keyframes load2 {\n0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n}\n5%,\n  95% {\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n}\n10%,\n  59% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\n}\n20% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\n}\n38% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\n}\n100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n}\n}\n@keyframes load2 {\n0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n}\n5%,\n  95% {\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n}\n10%,\n  59% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\n}\n20% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\n}\n38% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\n}\n100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n}\n}\n/*loading-3********************/\n.load3 .loader,\n.load3 .loader:before,\n.load3 .loader:after {\n  top: 20%;\n  border-radius: 50%;\n  width: 1.5em;\n  height: 1.5em;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-animation: load3 1.8s infinite ease-in-out;\n  animation: load3 1.8s infinite ease-in-out;\n}\n.load3 .loader {\n  color: #46C3C1;\n  font-size: 10px;\n  text-indent: -9999em;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s;\n}\n.load3 .loader:before,\n.load3 .loader:after {\n  content: '';\n  position: absolute;\n  top: 0;\n}\n.load3 .loader:before {\n  left: -3em;\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s;\n}\n.load3 .loader:after {\n  left: 3em;\n}\n@-webkit-keyframes load3 {\n0%,\n  80%,\n  100% {\n    box-shadow: 0 2.5em 0 -1.3em;\n}\n40% {\n    box-shadow: 0 2.5em 0 0;\n}\n}\n@keyframes load3 {\n0%,\n  80%,\n  100% {\n    box-shadow: 0 2.5em 0 -1.3em;\n}\n40% {\n    box-shadow: 0 2.5em 0 0;\n}\n}\n.sm .loader {\n  font-size: 10px;\n}\n.sm.load2 .loader {\n  font-size: 40px;\n}\n.md .loader {\n  font-size: 14px;\n}\n.md.load2 .loader {\n  font-size: 60px;\n}\n.lg .loader {\n  font-size: 18px;\n}\n.lg.load2 .loader {\n  font-size: 80px;\n}\n", ""]);

	// exports


/***/ },
/* 112 */
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
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.show),
	      expression: "show"
	    }],
	    staticClass: "xcui-loading load-container",
	    class: [_vm.type, _vm.size, _vm.classname]
	  }, [_c('div', {
	    staticClass: "loader",
	    style: ({
	      'color': _vm.color
	    })
	  })])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-e148e730", module.exports)
	  }
	}

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(115)

	/* script */
	__vue_exports__ = __webpack_require__(117)

	/* template */
	var __vue_template__ = __webpack_require__(118)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/ubuntu/xcui/src/components/message/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-6bfc2d1a", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-6bfc2d1a", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(116);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(24)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-6bfc2d1a!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-6bfc2d1a!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports


	// module
	exports.push([module.id, "\n.fade-enter-active,\n.fade-leave-active {\n  transition: all .3s ease;\n}\n.fade-enter,\n.fade-leave-active {\n  opacity: 0;\n}\n.xcui-message {\n  min-width: 200px;\n  max-width: 600px;\n  width: 300px;\n  border-radius: 5px;\n  text-align: center;\n  box-shadow: 0 1px 8px rgba(99, 99, 99, 0.4);\n  padding: 5px 10px;\n  font-size: 16px;\n  z-index: 1000;\n  position: fixed;\n  top: 150px;\n  left: calc(50% - 150px);\n  background: #fff;\n}\n.xcui-message .xcui-message-icon {\n  vertical-align: middle;\n}\n.xcui-message .xcui-message-desc {\n  color: #000;\n  display: inline-block;\n  margin-left: 10px;\n  margin-bottom: 0px;\n  vertical-align: middle;\n}\n.xcui-message p {\n  padding-left: 10px;\n}\n.xcui-message-info {\n  color: #3a87ad;\n}\n.xcui-message-success {\n  color: #468847;\n}\n.xcui-message-warning {\n  color: #c09853;\n}\n.xcui-message-error {\n  color: #b94a48;\n}\n", ""]);

	// exports


/***/ },
/* 117 */
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
	            return this.type ? 'xcui-message-' + this.type : '';
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
	            timer: null
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
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('transition', {
	    attrs: {
	      "name": "fade"
	    }
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.show),
	      expression: "show"
	    }],
	    staticClass: "xcui-message",
	    class: _vm.styleClass
	  }, [_c('span', {
	    staticClass: "xcui-message-icon glyphicon",
	    class: _vm.iconClass
	  }), _vm._v(" "), _c('p', {
	    staticClass: "xcui-message-desc"
	  }, [_vm._v("\n            " + _vm._s(_vm.content) + "\n        ")])])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-6bfc2d1a", module.exports)
	  }
	}

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(120)

	/* script */
	__vue_exports__ = __webpack_require__(122)

	/* template */
	var __vue_template__ = __webpack_require__(123)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/ubuntu/xcui/src/components/modal/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-7054dcd9", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-7054dcd9", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(121);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(24)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-7054dcd9!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-7054dcd9!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports


	// module
	exports.push([module.id, "\n.xcui-modal-wrapper {\n  z-index: 1000;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.xcui-modal-wrapper,\n.xcui-modal-mask {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  transition: opacity 0.2s ease;\n  background-color: rgba(55, 55, 55, 0.6);\n}\n.xcui-modal {\n  z-index: 1001;\n  font-size: 14px;\n  position: relative;\n  margin: 100px auto 30px;\n  background-color: #fff;\n  padding: 0;\n  background-color: white;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  transition: all 0.2s ease;\n  max-width: 100vw;\n  outline: 0;\n  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n}\n.xcui-modal.large {\n  width: 45rem;\n}\n.xcui-modal-body {\n  padding: 1.6rem;\n  min-height: 8rem;\n}\n.xcui-modal-header {\n  font-size: 1.6rem;\n  padding: .6rem;\n  min-height: 3.1rem;\n  border-bottom: 1px solid #f3f3f3;\n  text-align: center;\n}\n.xcui-modal-header-close {\n  position: absolute;\n  right: 8px;\n  top: 3px;\n  color: #000;\n  opacity: .2;\n  font-weight: 700;\n  line-height: 1;\n  font-size: 27px;\n  outline: 0;\n  border: 0;\n  background: 0;\n  padding: 0;\n}\n.xcui-modal-header-close:hover {\n  cursor: pointer;\n  text-decoration: none;\n  opacity: .5;\n}\n.xcui-modal-footer {\n  padding: .8rem 1rem;\n  text-align: center;\n  border-top: 1px solid #f3f3f3;\n}\n.xcui-modal-footer .xcui-modal-btn {\n  margin-right: 1rem;\n  background-color: #46C3C1;\n  color: #fff;\n  border: #46c3c1 solid 1px;\n  min-width: 75px;\n}\n.xcui-modal-footer .xcui-modal-btn:hover {\n  background-color: #2b9d9b;\n  border: #2b9d9b solid 1px;\n}\n.xcui-modal-footer .xcui-modal-btn:active {\n  background-color: #2b9d9b;\n  border: #2b9d9b solid 1px;\n  -webkit-box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.2);\n  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.2);\n}\n.xcui-modal-footer .xcui-modal-cancel-btn {\n  min-width: 75px;\n}\n.xcui-modal-size-small {\n  width: 22%;\n}\n.xcui-modal-size-middle {\n  width: 30%;\n}\n.xcui-modal-size-large {\n  width: 60%;\n}\n.xcui-modal-size-full {\n  width: 99%;\n}\n", ""]);

	// exports


/***/ },
/* 122 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    name: 'xcui-modal',
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
	    data: function data() {
	        return {
	            show: false
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
	            } else {
	                document.body.style.overflow = 'auto';
	            }
	        },
	        show: function show(val) {
	            this.$emit('input', val);
	        }
	    },
	    computed: {
	        sizeClass: function sizeClass() {
	            return 'xcui-modal-size-' + this.size;
	        },
	        modalClass: function modalClass() {
	            return this.sizeClass + ' ' + this.className;
	        }
	    },
	    methods: {
	        close: function close(e) {
	            this.show = false;
	        },
	        maskClose: function maskClose(e) {
	            if (this.maskClosable && e.target === this.$refs.modalMask) {
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
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.show),
	      expression: "show"
	    }],
	    ref: "modal-mask",
	    staticClass: "xcui-modal-wrapper xcui-modal-mask",
	    on: {
	      "click": _vm.maskClose
	    }
	  }, [_c('div', {
	    staticClass: "xcui-modal",
	    class: _vm.modalClass,
	    style: (_vm.style),
	    attrs: {
	      "tabindex": "-1"
	    },
	    on: {
	      "keydown": function($event) {
	        if (_vm._k($event.keyCode, "esc", 27)) { return; }
	        _vm.cancel($event)
	      }
	    }
	  }, [(_vm.showHeader) ? _c('div', {
	    staticClass: "xcui-modal-header"
	  }, [_vm._t("header", [_c('span', {
	    staticClass: "xcui-modal-title"
	  }, [_vm._v(_vm._s(_vm.title))])]), _vm._v(" "), _vm._t("close", [(_vm.showCloseButton) ? _c('button', {
	    staticClass: "xcui-modal-header-close",
	    attrs: {
	      "type": "button",
	      "data-dismiss": "modal"
	    },
	    on: {
	      "click": _vm.cancel
	    }
	  }, [_c('span', {
	    attrs: {
	      "aria-hidden": "true"
	    }
	  }, [_vm._v("×")]), _c('span', {
	    staticClass: "sr-only"
	  }, [_vm._v("Close")])]) : _vm._e()])], 2) : _vm._e(), _vm._v(" "), _c('div', {
	    staticClass: "xcui-modal-body",
	    style: (_vm.contentStyle)
	  }, [_vm._t("default", [_vm._v(_vm._s(_vm.content))])], 2), _vm._v(" "), (_vm.showFooter) ? _c('div', {
	    staticClass: "xcui-modal-footer"
	  }, [_vm._t("footer", [(_vm.showOkButton) ? _c('button', {
	    staticClass: "btn xcui-modal-btn btn-primary",
	    attrs: {
	      "type": "button",
	      "name": "button"
	    },
	    on: {
	      "click": _vm.ok
	    }
	  }, [_vm._v(_vm._s(_vm.okText))]) : _vm._e(), _vm._v(" "), (_vm.showCancelButton) ? _c('button', {
	    staticClass: "btn xcui-modal-cancel-btn btn-default",
	    attrs: {
	      "type": "button",
	      "name": "button"
	    },
	    on: {
	      "click": _vm.cancel
	    }
	  }, [_vm._v(_vm._s(_vm.cancelText))]) : _vm._e()])], 2) : _vm._e()])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-7054dcd9", module.exports)
	  }
	}

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(125)

	/* script */
	__vue_exports__ = __webpack_require__(127)

	/* template */
	var __vue_template__ = __webpack_require__(128)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/ubuntu/xcui/src/components/pageloading/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-6afcc939", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-6afcc939", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(126);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(24)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-6afcc939!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-6afcc939!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports


	// module
	exports.push([module.id, "\n#xcui-pageloading .bar {\n  background: #29d;\n  position: fixed;\n  z-index: 1031;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 2px;\n}\n#xcui-pageloading .peg {\n  display: block;\n  position: absolute;\n  right: 0px;\n  width: 100px;\n  height: 100%;\n  box-shadow: 0 0 10px #29d, 0 0 5px #29d;\n  opacity: 1.0;\n  -webkit-transform: rotate(3deg) translate(0px, -4px);\n  -ms-transform: rotate(3deg) translate(0px, -4px);\n  transform: rotate(3deg) translate(0px, -4px);\n}\n", ""]);

	// exports


/***/ },
/* 127 */
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
	        trickled: {
	            type: Boolean,
	            default: true
	        },
	        trickleSpeed: {
	            type: Number,
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
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "xcui-pageloading"
	  }, [_c('div', {
	    staticClass: "bar",
	    attrs: {
	      "role": "bar"
	    }
	  }, [_c('div', {
	    staticClass: "peg"
	  })])])
	}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-6afcc939", module.exports)
	  }
	}

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(130)

	/* script */
	__vue_exports__ = __webpack_require__(132)

	/* template */
	var __vue_template__ = __webpack_require__(133)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/ubuntu/xcui/src/components/pagination/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-7f0f2184", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-7f0f2184", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(131);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(24)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-7f0f2184!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-7f0f2184!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports


	// module
	exports.push([module.id, "\n.v-pagination-wrap {\n  -webkit-user-select: none;\n}\n.v-pagination-wrap .v-pagination-standard {\n  vertical-align: bottom;\n  margin: 0;\n}\n.v-pagination-wrap .v-pagination-standard .btn a {\n  padding: 5px 12px;\n}\n.v-pagination-wrap .v-pagination-standard .btn a:focus {\n  background-color: initial;\n}\n.v-pagination-wrap .v-pagination-standard .btn a,\n.v-pagination-wrap .v-pagination-standard .btn a:hover,\n.v-pagination-wrap .v-pagination-standard .btn a:active {\n  text-decoration: none;\n}\n.v-pagination-wrap .v-pagination-standard .page-btn {\n  padding-left: 3px;\n  padding-right: 3px;\n}\n.v-pagination-wrap .v-pagination-standard .page-btn.active {\n  background-color: #46c3c1;\n  border-color: #46c3c1;\n  outline: none;\n}\n.v-pagination-wrap .v-pagination-standard .page-btn.active a {\n  color: #fff;\n}\n.v-pagination-wrap .v-pagination-standard .apostrophe {\n  border-color: transparent;\n  border-left-color: #ddd;\n}\n.v-pagination-wrap .v-pagination-standard .apostrophe:hover {\n  background-color: inherit;\n}\n.v-pagination-wrap .v-pagination-page-size {\n  line-height: 34px;\n}\n.v-pagination-wrap .v-pagination-mini .prev-trigger {\n  margin: 0 10px;\n  padding: 2px 12px;\n}\n.v-pagination-wrap .v-pagination-mini .prev-trigger span {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.v-pagination-wrap .v-pagination-mini .next-trigger {\n  margin: 0 0 0 10px;\n  padding: 2px 12px;\n}\n.v-pagination-wrap .v-pagination-mini .next-trigger span {\n  -webkit-transform: rotate(-90deg);\n  transform: rotate(-90deg);\n}\n.v-pagination-wrap .v-pagination-mini .prev-trigger .caret,\n.v-pagination-wrap .v-pagination-mini .next-trigger .caret {\n  position: relative;\n  top: -1px;\n}\n.v-pagination-wrap .gray {\n  color: #777;\n}\n", ""]);

	// exports


/***/ },
/* 132 */
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
	    data: function data() {
	        return {
	            pageSizeInner: 20
	        };
	    },

	    computed: {
	        totalPageCount: function totalPageCount() {
	            return Math.ceil(this.total / this.pageSizeInner);
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
	        pageSizeInner: function pageSizeInner(val) {
	            this.$emit('change-pagesize', this.pageSizeInner);
	            this.$emit('go-to-page', 1, this.currentPageNum);
	        }
	    },
	    methods: {
	        turnToPage: function turnToPage(pageNo) {
	            if (pageNo > 0 && pageNo <= this.totalPageCount) {
	                this.$emit('go-to-page', pageNo, this.currentPageNum);
	            }
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
	    },
	    mounted: function mounted() {
	        this.pageSizeInner = this.pageSize;
	    }
	};

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "v-pagination-wrap"
	  }, [(_vm.type === 'standard') ? [_c('div', {
	    staticClass: "row"
	  }, [(_vm.withPageSize) ? _c('div', {
	    staticClass: "v-pagination-page-size col-md-3 gray"
	  }, [_vm._v("\n                共"), _c('span', {
	    domProps: {
	      "textContent": _vm._s(_vm.total)
	    }
	  }), _vm._v("条\n                  \n                每页\n                "), _c('select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.pageSizeInner),
	      expression: "pageSizeInner"
	    }],
	    staticClass: "gray",
	    on: {
	      "change": function($event) {
	        _vm.pageSizeInner = Array.prototype.filter.call($event.target.options, function(o) {
	          return o.selected
	        }).map(function(o) {
	          var val = "_value" in o ? o._value : o.value;
	          return val
	        })[0]
	      }
	    }
	  }, _vm._l((_vm.pageSizeRange), function(opt) {
	    return _c('option', {
	      domProps: {
	        "value": opt,
	        "textContent": _vm._s(opt)
	      }
	    }, [_vm._v("1")])
	  })), _vm._v("\n                条\n            ")]) : _vm._e(), _vm._v(" "), _c('div', {
	    staticClass: "v-pagination-standard text-right",
	    class: [_vm.withPageSize ? 'col-md-9' : 'col-md-12']
	  }, [_c('div', {
	    staticClass: "btn-group"
	  }, [_c('button', {
	    staticClass: "btn btn-default",
	    class: {
	      'disabled': _vm.currentPageNum == 1
	    },
	    on: {
	      "click": _vm.prev
	    }
	  }, [_vm._v("上一页")]), _vm._v(" "), (_vm.getRangePage.begin > 1) ? _c('button', {
	    staticClass: "btn btn-default page-btn"
	  }, [_c('a', {
	    attrs: {
	      "href": "javascript:void(0);"
	    },
	    on: {
	      "click": function($event) {
	        _vm.turnToPage(1)
	      }
	    }
	  }, [_vm._v("1")])]) : _vm._e(), _vm._v(" "), (_vm.getRangePage.begin > 1) ? _c('button', {
	    staticClass: "btn btn-default page-btn"
	  }, [_c('a', {
	    staticClass: "apostrophe"
	  }, [_vm._v("...")])]) : _vm._e(), _vm._v(" "), _vm._l(((_vm.getRangePage.end - _vm.getRangePage.begin + 1)), function(number) {
	    return _c('button', {
	      staticClass: "btn btn-default page-btn",
	      class: {
	        'active': _vm.isActive(number)
	      }
	    }, [(_vm.isActive(number)) ? _c('a', {
	      attrs: {
	        "href": "javascript:void(0);"
	      },
	      domProps: {
	        "textContent": _vm._s(number + _vm.getRangePage.begin - 1)
	      }
	    }) : _c('a', {
	      attrs: {
	        "href": "javascript:void(0);"
	      },
	      domProps: {
	        "textContent": _vm._s(number + _vm.getRangePage.begin - 1)
	      },
	      on: {
	        "click": function($event) {
	          _vm.turnToPage(number + _vm.getRangePage.begin - 1)
	        }
	      }
	    })])
	  }), _vm._v(" "), (_vm.getRangePage.end < _vm.totalPageCount) ? _c('button', {
	    staticClass: "btn btn-default page-btn"
	  }, [_c('a', {
	    staticClass: "apostrophe"
	  }, [_vm._v("...")])]) : _vm._e(), _vm._v(" "), (_vm.getRangePage.end < _vm.totalPageCount) ? _c('button', {
	    staticClass: "btn btn-default page-btn"
	  }, [_c('a', {
	    attrs: {
	      "href": "javascript:void(0);"
	    },
	    domProps: {
	      "textContent": _vm._s(_vm.totalPageCount)
	    },
	    on: {
	      "click": function($event) {
	        _vm.turnToPage(_vm.totalPageCount)
	      }
	    }
	  })]) : _vm._e(), _vm._v(" "), _c('button', {
	    staticClass: "btn btn-default",
	    class: {
	      'disabled': _vm.currentPageNum == _vm.totalPageCount
	    },
	    on: {
	      "click": _vm.next
	    }
	  }, [_vm._v("下一页")])], 2)])])] : _c('div', {
	    staticClass: "v-pagination-mini"
	  }, [_c('span', {
	    staticClass: "gray"
	  }, [_vm._v("共"), _c('span', {
	    domProps: {
	      "textContent": _vm._s(_vm.total)
	    }
	  }), _vm._v("条")]), _vm._v(" "), _c('button', {
	    staticClass: "btn btn-default prev-trigger",
	    class: {
	      'disabled': _vm.currentPageNum < 2
	    },
	    on: {
	      "click": _vm.prev
	    }
	  }, [_c('span', {
	    staticClass: "caret"
	  })]), _vm._v(" "), _c('span', {
	    staticClass: "gray"
	  }, [_c('span', {
	    domProps: {
	      "textContent": _vm._s(_vm.currentPageNum)
	    }
	  }), _vm._v("/"), _c('span', {
	    domProps: {
	      "textContent": _vm._s(_vm.totalPageCount)
	    }
	  })]), _vm._v(" "), _c('button', {
	    staticClass: "btn btn-default next-trigger",
	    class: {
	      'disabled': _vm.currentPageNum == _vm.totalPageCount
	    },
	    on: {
	      "click": _vm.next
	    }
	  }, [_c('span', {
	    staticClass: "caret"
	  })])])], 2)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-7f0f2184", module.exports)
	  }
	}

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(135)

	/* script */
	__vue_exports__ = __webpack_require__(137)

	/* template */
	var __vue_template__ = __webpack_require__(140)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/ubuntu/xcui/src/components/popover/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-07a21a91", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-07a21a91", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(136);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(24)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-07a21a91!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-07a21a91!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports


	// module
	exports.push([module.id, "\n.xcui-popover .scale-enter-active,\n.xcui-popover .fadein-enter-active,\n.xcui-popover .scale-leave-active,\n.xcui-popover .fadein-leave-active {\n  display: inline-table;\n}\n.xcui-popover .fadein-enter-active {\n  animation: fadein-in 0.3s ease-in;\n}\n.xcui-popover .fadein-leave-active {\n  animation: fadein-out 0.3s ease-out;\n}\n.xcui-popover .scale-enter-active {\n  animation: scale-in 0.15s ease-in;\n}\n.xcui-popover .scale-leave-active {\n  animation: scale-out 0.15s ease-out;\n}\n@keyframes fadein-in {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: 1;\n}\n}\n@keyframes fadein-out {\n0% {\n    opacity: 1;\n}\n100% {\n    opacity: 0;\n}\n}\n@keyframes scale-in {\n0% {\n    transform: scale(0);\n    opacity: 0;\n}\n100% {\n    transform: scale(1);\n    opacity: 1;\n}\n}\n@keyframes scale-out {\n0% {\n    transform: scale(1);\n    opacity: 1;\n}\n100% {\n    transform: scale(0);\n    opacity: 0;\n}\n}\n", ""]);

	// exports


/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _popoverMixins = __webpack_require__(138);

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
	    },
	    methods: {
	        afterEnter: function afterEnter() {
	            this.$refs.popover.style.display = 'inline-table';
	        }
	    }
	};

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _eventListener = __webpack_require__(139);

	var _eventListener2 = _interopRequireDefault(_eventListener);

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
	            'show': true,
	            'firstInit': true
	        };
	    },

	    methods: {
	        toggle: function toggle() {
	            this.show = !this.show;
	        },
	        fixPosition: function fixPosition(triger, popover, placement) {
	            popover.style.display = 'inline-table';
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
	            if (this.firstInit) {
	                this.firstInit = false;
	                popover.style.display = 'none';
	            }
	            this.show = !this.show;
	        }
	    },
	    mounted: function mounted() {
	        var _this = this;

	        this.$nextTick(function () {
	            var triger = _this.$refs.trigger.children[0];
	            var me = _this;
	            if (_this.trigger === 'hover') {
	                _this._mouseenterEvent = _eventListener2.default.listen(triger, 'mouseenter', function () {
	                    me.fixPosition(me.$refs.trigger.children[0], me.$refs.popover, me.placement);
	                    me.show = true;
	                });
	                _this._mouseleaveEvent = _eventListener2.default.listen(triger, 'mouseleave', function () {
	                    me.show = false;
	                });
	            } else if (_this.trigger === 'focus') {
	                _this._focusEvent = _eventListener2.default.listen(triger, 'focus', function () {
	                    me.fixPosition(me.$refs.trigger.children[0], me.$refs.popover, me.placement);
	                    me.show = true;
	                });
	                _this._blurEvent = _eventListener2.default.listen(triger, 'blur', function () {
	                    me.show = false;
	                });
	            } else {
	                _this._clickEvent = _eventListener2.default.listen(triger, 'click', function () {
	                    me.fixPosition(me.$refs.trigger.children[0], me.$refs.popover, me.placement);
	                    me.toggle;
	                });
	            }
	            _this.fixPosition(_this.$refs.trigger.children[0], _this.$refs.popover, _this.placement);
	        });
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
/* 139 */
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
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    ref: "outer",
	    staticClass: "xcui-popover",
	    staticStyle: {
	      "position": "relative",
	      "display": "inline-block"
	    }
	  }, [_c('span', {
	    ref: "trigger"
	  }, [_vm._t("default")], 2), _vm._v(" "), _c('transition', {
	    attrs: {
	      "name": _vm.effect
	    },
	    on: {
	      "after-enter": _vm.afterEnter
	    }
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.show),
	      expression: "show"
	    }],
	    ref: "popover",
	    staticClass: "popover",
	    class: {
	      'top': _vm.placement === 'top',
	        'left': _vm.placement === 'left',
	        'right': _vm.placement === 'right',
	        'bottom': _vm.placement === 'bottom'
	    }
	  }, [_c('div', {
	    staticClass: "arrow"
	  }), _vm._v(" "), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.title),
	      expression: "title"
	    }],
	    staticClass: "popover-title",
	    class: _vm.titleClass
	  }, [_vm._t("title", [_c('div', {
	    domProps: {
	      "innerHTML": _vm._s(_vm.title)
	    }
	  })])], 2), _vm._v(" "), _c('div', {
	    staticClass: "popover-content",
	    class: _vm.contentClass
	  }, [_vm._t("content", [_c('div', {
	    domProps: {
	      "innerHTML": _vm._s(_vm.content)
	    }
	  })])], 2)])])], 1)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-07a21a91", module.exports)
	  }
	}

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(142)

	/* script */
	__vue_exports__ = __webpack_require__(144)

	/* template */
	var __vue_template__ = __webpack_require__(145)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/ubuntu/xcui/src/components/progress/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-8ac54fd2", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-8ac54fd2", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(143);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(24)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-8ac54fd2!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-8ac54fd2!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports


	// module
	exports.push([module.id, "\n.xcui-progress {\n  margin: 10px;\n}\n.xcui-progress .xcui-progress-container {\n  width: 100%;\n  margin-right: -50px;\n  padding-right: 50px;\n  display: inline-block;\n}\n.xcui-progress .xcui-progress-outer {\n  width: 100%;\n  background: #ccc;\n  display: inline-block;\n  border-radius: 50px;\n}\n.xcui-progress .xcui-progress-inner {\n  background-color: #2db7f5;\n  border-radius: 50px;\n  position: relative;\n}\n.xcui-progress .xcui-progress-info {\n  display: inline-block;\n}\n.xcui-progress .xcui-progress-inner:after {\n  content: \"\";\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: #fff;\n  -moz-border-radius: 3px;\n  -webkit-border-radius: 3px;\n  border-radius: 3px;\n  -moz-animation: animate-shine 2s ease-out infinite;\n  -webkit-animation: animate-shine 2s ease-out infinite;\n}\n@-moz-keyframes animate-shine {\n0% {\n    opacity: 0;\n    width: 0;\n}\n50% {\n    opacity: 0.5;\n}\n100% {\n    opacity: 0;\n    width: 95%;\n}\n}\n@-webkit-keyframes animate-shine {\n0% {\n    opacity: 0;\n    width: 0;\n}\n50% {\n    opacity: 0.5;\n}\n100% {\n    opacity: 0;\n    width: 95%;\n}\n}\n", ""]);

	// exports


/***/ },
/* 144 */
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
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "xcui-progress"
	  }, [_c('div', {
	    staticClass: "xcui-progress-container"
	  }, [_c('div', {
	    staticClass: "xcui-progress-outer"
	  }, [_c('div', {
	    staticClass: "xcui-progress-inner",
	    style: ({
	      width: _vm.percent + '%',
	      height: _vm.height + 'px'
	    })
	  })])]), _vm._v(" "), _c('div', {
	    class: ['infoClassName', !_vm.showInfo ? 'hidden' : '']
	  }, [_vm._v("\n        " + _vm._s(_vm.percentInfo) + "\n    ")]), _vm._v(" "), _c('div')])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-8ac54fd2", module.exports)
	  }
	}

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(147)

	/* script */
	__vue_exports__ = __webpack_require__(149)

	/* template */
	var __vue_template__ = __webpack_require__(156)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/ubuntu/xcui/src/components/select/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-f41d6834", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-f41d6834", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(148);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(24)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-f41d6834!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-f41d6834!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports


	// module
	exports.push([module.id, "\n.xcui-select {\n  display: inline-block;\n  box-sizing: content-box;\n  position: relative;\n  vertical-align: middle;\n  color: #666;\n  font-size: 14px;\n  z-index: 10;\n  width: 100%;\n}\n.xcui-select-open .xcui-select-selection {\n  border-color: #66afe9 !important;\n  outline: 0;\n  box-shadow: 0 0 0 2px #2db7f533;\n}\n.xcui-select.disabled .xcui-select-selection {\n  color: #ccc;\n  background: #f7f7f7;\n  cursor: not-allowed;\n}\n.xcui-select-selection {\n  outline: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  box-sizing: border-box;\n  display: block;\n  background-color: #fff;\n  border-radius: 4px;\n  border: 1px solid #ccc;\n  padding: 2px 6px;\n  -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.xcui-select-selection-rendered {\n  height: 26px;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  /*padding-left: 8px;*/\n  padding-right: 24px;\n  line-height: 26px;\n}\n.xcui-select-selection-text {\n  display: block;\n  font-size: 14px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.xcui-select-menu-dropdown {\n  background-color: #fff;\n  /*box-shadow: 0 1px 6px #63636333;*/\n  border-radius: 4px;\n  box-sizing: border-box;\n  z-index: 1050;\n  /*left: -9999px;*/\n  /*top: -9999px;*/\n  position: absolute;\n  top: 100%;\n  width: 100%;\n  margin-top: 2px;\n  outline: none;\n  overflow: hidden;\n  font-size: 12px;\n  max-height: 200px;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  z-index: 1;\n}\n.xcui-select-menu,\n.xcui-select-menu-group {\n  outline: none;\n  margin-bottom: 0;\n  padding-left: 0;\n  list-style: none;\n  max-height: 200px;\n  overflow: auto;\n}\n.xcui-select-menu-item,\n.xcui-select-menu-group-item {\n  position: relative;\n  display: block;\n  padding: 7px 15px;\n  font-weight: 400;\n  color: #262626;\n  cursor: pointer;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  -webkit-transition: background .3s ease;\n  transition: background .3s ease;\n}\n.xcui-select-menu-item-select,\n.xcui-select-menu-group-item-select {\n  font-weight: 500;\n  color: #666;\n  background-color: #f7f7f7;\n}\n.xcui-select-menu-item.disabled,\n.xcui-select-menu-group-item.disabled {\n  color: #ccc !important;\n  cursor: not-allowed !important;\n}\n.xcui-select-menu-item-selected,\n.xcui-select-menu-group-item-selected {\n  background-color: #337ab7;\n  font-weight: 700;\n  color: #fff;\n}\n.xcui-select-menu-item-selected:after,\n.xcui-select-menu-group-item-selected:after {\n  font-family: 'Glyphicons Halflings';\n  content: \"\\E013\";\n  position: absolute;\n  right: 6px;\n  top: 6px;\n  font-size: 12px;\n}\n.xcui-select-menu-item-selected:hover,\n.xcui-select-menu-group-item-selected:hover {\n  background-color: #f7f7f7;\n  font-weight: 700;\n  color: #666;\n}\n.xcui-select-menu-item:hover,\n.xcui-select-menu-group-item:hover {\n  background-color: #f5f5f5;\n}\n.xcui-select-menu-item-partial,\n.xcui-select-menu-group-item-partial {\n  background: red;\n}\n.xcui-select-menu-item-key,\n.xcui-select-menu-group-item-key {\n  background-color: #f5f5f5;\n}\n.xcui-select-menu-group-title {\n  color: #999;\n  line-height: 1.5;\n  padding: 8px 12px;\n}\n.xcui-select-menu-group-item {\n  padding-left: 20px;\n}\n.xcui-select-menu-group-item-selected {\n  background-color: #337ab7;\n  font-weight: 700;\n  color: #fff;\n}\n.xcui-select-menu-group-item-selected:after {\n  font-family: 'Glyphicons Halflings';\n  content: \"\\E013\";\n  position: absolute;\n  right: 6px;\n  top: 6px;\n  font-size: 12px;\n}\n.xcui-select-menu-group-item-selected:hover {\n  background-color: #f7f7f7;\n  font-weight: 700;\n  color: #666;\n}\n.xcui-select-menu-group > ul {\n  margin: 0;\n  padding: 0;\n}\n.xcui-select-search-input {\n  width: 100%;\n  border: 0;\n  font-size: 100%;\n  height: 100%;\n  outline: 0;\n  border-radius: 6px;\n}\n.xcui-select .glyphicon {\n  font-size: 12px;\n}\n.xcui-select .xcui-select-arrow {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  color: #ccc;\n}\n.xcui-select > ul > li > a {\n  padding: 0;\n  background-color: #fff;\n}\n", ""]);

	// exports


/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof2 = __webpack_require__(27);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _clone = __webpack_require__(150);

	var _clone2 = _interopRequireDefault(_clone);

	var _fuzzysearch = __webpack_require__(155);

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
	        activateSelect: function activateSelect() {
	            if (this.isOpen || this.disabled) {
	                return;
	            }
	            this.isOpen = true;
	            if (this.showSearch) {
	                if (this.clearOnSelect) {
	                    this.searchValue = '';
	                    this.options = [];
	                }
	                this.$refs.search.focus();
	            } else {
	                this.$el.focus();
	            }
	        },
	        deactivateSelect: function deactivateSelect() {
	            if (!this.isOpen) {
	                return;
	            }
	            if (this.showSearch) {
	                this.$refs.search.blur();
	                this.adjustSearch();
	            }
	            this.isOpen = false;
	        },
	        toggle: function toggle(key) {
	            if (!this.isOpen) {
	                this.activateSelect();
	            } else {
	                this.deactivateSelect();
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
	            this.closeAfterSelect && this.deactivateSelect();
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
	            this.closeAfterSelect && this.deactivateSelect();
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
	                    var value = option.label;
	                    if (this.label && option[this.label]) {
	                        value = option[this.label];
	                    }
	                    var isMatched = false;
	                    var valueLen = this.value.length;
	                    for (var i = 0; i < valueLen; i++) {
	                        if (typeof this.value[i] === 'string') {
	                            if (value === this.value[i]) {
	                                isMatched = true;
	                                this.value[i] = option;
	                            }
	                        }
	                    }
	                    return this.value.indexOf(option) > -1 || isMatched;
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
	            var index = this.value.indexOf(option);
	            this.value.splice(index, 1);
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
	            var scrollTop = this.$refs.list.scrollTop;
	            var _getDropDownHeight = this.getDropDownHeight,
	                itemHeight = _getDropDownHeight.itemHeight,
	                listHeight = _getDropDownHeight.listHeight;

	            var listViewLen = Math.floor(listHeight / itemHeight);
	            var indexPos = index * itemHeight;
	            if (scrollTop <= indexPos - listViewLen * itemHeight) {
	                this.$refs.list.scrollTop = indexPos - (listViewLen - 1) * itemHeight;
	            }
	            if (scrollTop >= indexPos) {
	                this.$refs.list.scrollTop = indexPos;
	            }
	        },
	        resetSelectIndex: function resetSelectIndex() {
	            this.selectIndex = 0;
	            this.closeAfterSelect && this.deactivateSelect();
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
	            var list = this.$refs.list;
	            var item = list.children[0] || null;
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
	            if (!this.options) {
	                return indexs;
	            }
	            this.options.forEach(function (item, index) {
	                item.options && item.options.forEach(function (subItem, subIndex) {
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
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _keys = __webpack_require__(151);

	var _keys2 = _interopRequireDefault(_keys);

	var _typeof2 = __webpack_require__(27);

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
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(152), __esModule: true };

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(153);
	module.exports = __webpack_require__(38).Object.keys;

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(73)
	  , $keys    = __webpack_require__(57);

	__webpack_require__(154)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(36)
	  , core    = __webpack_require__(38)
	  , fails   = __webpack_require__(47);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 155 */
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
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: _vm.getWrapCls,
	    attrs: {
	      "tabindex": "0"
	    },
	    on: {
	      "focus": function($event) {
	        _vm.activateSelect()
	      },
	      "blur": function($event) {
	        _vm.showSearch ? false : _vm.deactivateSelect()
	      },
	      "keydown": function($event) {
	        if (_vm._k($event.keyCode, "enter", 13)) { return; }
	        $event.stopPropagation();
	        $event.preventDefault();
	        if ($event.target !== $event.currentTarget) { return; }
	        _vm.enterSearchValue()
	      }
	    }
	  }, [_c('div', {
	    staticClass: "xcui-select-selection"
	  }, [_c('div', {
	    staticClass: "xcui-select-selection-rendered",
	    on: {
	      "mousedown": function($event) {
	        $event.stopPropagation();
	        _vm.toggle()
	      }
	    }
	  }, [(_vm.showSearch) ? _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.searchValue),
	      expression: "searchValue"
	    }],
	    ref: "search",
	    staticClass: "xcui-select-search-input",
	    attrs: {
	      "type": "text",
	      "name": "search",
	      "autocomplete": "off",
	      "placeholder": _vm.placeholder
	    },
	    domProps: {
	      "value": _vm._s(_vm.searchValue)
	    },
	    on: {
	      "focus": function($event) {
	        $event.preventDefault();
	        _vm.activateSelect()
	      },
	      "blur": function($event) {
	        $event.preventDefault();
	        _vm.deactivateSelect()
	      },
	      "keyup": [function($event) {
	        if (_vm._k($event.keyCode, "down", 40)) { return; }
	        _vm.keyNext()
	      }, function($event) {
	        if (_vm._k($event.keyCode, "up", 38)) { return; }
	        _vm.keyPrev()
	      }],
	      "keydown": function($event) {
	        if (_vm._k($event.keyCode, "enter", 13)) { return; }
	        $event.stopPropagation();
	        $event.preventDefault();
	        if ($event.target !== $event.currentTarget) { return; }
	        _vm.enterSearchValue()
	      },
	      "change": function($event) {
	        $event.preventDefault();
	        $event.stopPropagation();
	      },
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.searchValue = $event.target.value
	      }
	    }
	  }) : _vm._e(), _vm._v(" "), (!_vm.showSearch) ? _c('span', {
	    staticClass: "xcui-select-selection-text",
	    domProps: {
	      "textContent": _vm._s(_vm.currentOptionLabel || _vm.placeholder)
	    }
	  }) : _vm._e(), _vm._v(" "), _c('i', {
	    staticClass: "glyphicon xcui-select-arrow",
	    class: {
	      'glyphicon-triangle-bottom': (!_vm.isOpen), 'glyphicon-triangle-top': (_vm.isOpen)
	    },
	    on: {
	      "mousedown": function($event) {
	        $event.preventDefault();
	        $event.stopPropagation();
	        _vm.toggle()
	      }
	    }
	  })])]), _vm._v(" "), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: ((_vm.isOpen && _vm.filteredOptions.length > 0) || (_vm.isOpen && _vm.multiple)),
	      expression: "(isOpen && filteredOptions.length>0) || (isOpen && multiple)"
	    }],
	    staticClass: "xcui-select-menu-dropdown"
	  }, [_c('ul', {
	    ref: "list",
	    staticClass: "xcui-select-menu",
	    attrs: {
	      "aria-activedescendant": ""
	    }
	  }, [(_vm.multipleMaxShow) ? _c('li', {
	    staticClass: "xcui-select-menu-item"
	  }, [_vm._v("\n                最多可选" + _vm._s(_vm.multipleMax) + "项!\n            ")]) : _vm._e(), _vm._v(" "), (_vm.filteredOptions.length < 1 && _vm.searchEmptyText) ? _c('li', {
	    staticClass: "xcui-select-menu-item",
	    domProps: {
	      "textContent": _vm._s(_vm.searchEmptyText)
	    }
	  }) : _vm._e(), _vm._v(" "), _vm._l((_vm.filteredOptions), function(item, index) {
	    return [(!_vm.optgroup) ? _c('li', {
	      staticClass: "xcui-select-menu-item",
	      class: {
	        'xcui-select-menu-item-selected': _vm.isSelected(item), 'xcui-select-menu-item-key': index === _vm.selectIndex, 'disabled': item.disable
	      },
	      attrs: {
	        "tabindex": "1"
	      },
	      on: {
	        "mouseenter": function($event) {
	          $event.preventDefault();
	          $event.stopPropagation();
	          if ($event.target !== $event.currentTarget) { return; }
	          _vm.indexSet(index)
	        },
	        "mousedown": function($event) {
	          $event.preventDefault();
	          _vm.select(item)
	        }
	      }
	    }, [_c('span', {
	      domProps: {
	        "textContent": _vm._s(_vm.getOptionLabel(item))
	      }
	    })]) : _vm._e()]
	  }), _vm._v(" "), _vm._l((_vm.filteredOptions), function(item) {
	    return [(_vm.optgroup) ? _c('li', {
	      staticClass: "xcui-select-menu-group"
	    }, [_c('div', {
	      staticClass: "xcui-select-menu-group-title"
	    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('ul', [_vm._l((item.options), function(option, index) {
	      return [_c('li', {
	        staticClass: "xcui-select-menu-group-item",
	        class: {
	          'xcui-select-menu-group-item-selected': _vm.isSelected(option, _vm.$parent.index, index), 'disabled': option.disable
	        },
	        on: {
	          "mousedown": function($event) {
	            $event.preventDefault();
	            $event.stopPropagation();
	            if ($event.target !== $event.currentTarget) { return; }
	            _vm.optgroupSelect(_vm.$parent.index, index, option)
	          }
	        }
	      }, [_c('span', {
	        domProps: {
	          "textContent": _vm._s(_vm.getOptionLabel(option))
	        }
	      })])]
	    })], 2)]) : _vm._e()]
	  })], 2)])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-f41d6834", module.exports)
	  }
	}

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(158)

	/* script */
	__vue_exports__ = __webpack_require__(160)

	/* template */
	var __vue_template__ = __webpack_require__(161)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/ubuntu/xcui/src/components/suggestion/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-093d376e", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-093d376e", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(159);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(24)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-093d376e!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-093d376e!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports


	// module
	exports.push([module.id, "\n.xcui-suggestion {\n  position: relative;\n  width: 100%;\n}\n.xcui-suggestion .xcui-show {\n  display: block;\n}\n.xcui-suggestion .xcui-suggestion-list {\n  min-width: 100%;\n  max-height: 400px;\n  overflow: auto;\n}\n.xcui-suggestion .xcui-suggestion-list li.current {\n  background: #ddd;\n}\n", ""]);

	// exports


/***/ },
/* 160 */
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
	            currentIndex: -1,
	            dataText: '',
	            dataValue: ''
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
	        'check': {
	            type: Boolean,
	            default: true
	        },
	        'inputCallback': {
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
	        }
	    },
	    created: function created() {
	        this.dataText = this.value.text || '';
	        this.dataValue = this.value.value || '';
	        this.emitChange();
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
	        onFocus: function onFocus() {
	            var me = this;
	            me.getLocalSug();
	            me.inputCallback && me.inputCallback();
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
	                this.emitChange();
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
	            this.emitChange();
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
	            this.emitChange();
	        },
	        emitChange: function emitChange() {
	            this.$emit('input', {
	                text: this.dataText,
	                value: this.dataValue
	            });
	        }
	    },
	    mounted: function mounted() {
	        this.arrangeLocalList();
	    }
	};

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "xcui-suggestion",
	    class: _vm.className
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.dataText),
	      expression: "dataText"
	    }],
	    staticClass: "form-control xcui-suggestion-input",
	    attrs: {
	      "type": "text",
	      "autocomplete": "off",
	      "id": _vm.id,
	      "name": _vm.name,
	      "disabled": _vm.disabled,
	      "placeholder": _vm.placeholder
	    },
	    domProps: {
	      "value": _vm._s(_vm.dataText)
	    },
	    on: {
	      "input": [function($event) {
	        if ($event.target.composing) { return; }
	        _vm.dataText = $event.target.value
	      }, _vm.onInput],
	      "focus": _vm.onFocus,
	      "blur": _vm.onBlur,
	      "keyDown": [function($event) {
	        if (_vm._k($event.keyCode, "up", 38)) { return; }
	        _vm.changeCurrent(-1)
	      }, function($event) {
	        if (_vm._k($event.keyCode, "down", 40)) { return; }
	        _vm.changeCurrent(1)
	      }, function($event) {
	        if (_vm._k($event.keyCode, "enter", 13)) { return; }
	        $event.stopPropagation();
	        $event.preventDefault();
	        _vm.onBlur($event)
	      }]
	    }
	  }), _vm._v(" "), _c('ul', {
	    staticClass: "xcui-suggestion-list dropdown-menu",
	    class: {
	      'show': _vm.show
	    }
	  }, _vm._l((_vm.list), function(item, index) {
	    return _c('li', {
	      class: {
	        'current': _vm.currentIndex == index
	      }
	    }, [_c('a', {
	      attrs: {
	        "href": "javascript:void(0)"
	      },
	      on: {
	        "click": function($event) {
	          _vm.setItem(item)
	        }
	      }
	    }, [_vm._v("\n                " + _vm._s(item.text) + "\n            ")])])
	  }))])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-093d376e", module.exports)
	  }
	}

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(163)

	/* script */
	__vue_exports__ = __webpack_require__(165)

	/* template */
	var __vue_template__ = __webpack_require__(166)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/ubuntu/xcui/src/components/tag/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-c4e68474", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-c4e68474", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(164);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(24)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-c4e68474!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-c4e68474!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports


	// module
	exports.push([module.id, "\n.xcui-tag {\n  display: inline-block;\n  line-height: 25px;\n  height: 27px;\n  border-radius: 6px;\n  border: 1px solid #e9e9e9;\n  background: #fff;\n  font-size: 12px;\n  vertical-align: middle;\n  opacity: 1;\n  margin: 2px 4px 2px 0;\n  cursor: pointer;\n}\n.xcui-tag .xcui-tag-text {\n  padding: 0 8px;\n}\n.xcui-disabled {\n  background: #f5f5f5;\n  cursor: default;\n  opacity: .85;\n}\n.xcui-tag:hover {\n  opacity: 0.85;\n}\n.xcui-cross {\n  display: inline-block;\n  font-style: normal;\n  font-size: 17px;\n  zoom: 1;\n  cursor: pointer;\n  font-weight: 700;\n  margin-left: 3px;\n  color: #666;\n  opacity: 0.66;\n}\n.xcui-cross:before {\n  content: \"\\D7\";\n}\n", ""]);

	// exports


/***/ },
/* 165 */
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
	        className: {
	            type: String,
	            default: ''
	        },
	        keys: {
	            type: String,
	            default: ''
	        },
	        aftercloseisshow: {
	            type: Boolean,
	            default: false,
	            twoway: true
	        }
	    },
	    data: function data() {
	        return {
	            show: true
	        };
	    },
	    created: function created() {
	        this.show = this.showTag;
	    },

	    methods: {
	        onCloseClick: function onCloseClick() {
	            this.$emit('close');
	            if (this.aftercloseisshow === false) {
	                this.show = false;
	            };
	        },
	        onClick: function onClick() {
	            this.$emit('click');
	        }
	    }
	};

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return (_vm.show) ? _c('div', {
	    class: ['xcui-tag', _vm.disabled ? ' xcui-disabled' : ''],
	    on: {
	      "click": _vm.onClick
	    }
	  }, [_c('div', {
	    class: _vm.className
	  }, [_c('span', {
	    staticClass: "xcui-tag-text"
	  }, [_vm._t("default"), _vm._v(_vm._s(_vm.text)), _c('span', [(_vm.closeable) ? _c('i', {
	    staticClass: "xcui-cross",
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	        _vm.onCloseClick($event)
	      }
	    }
	  }) : _vm._e()])], 2)])]) : _vm._e()
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-c4e68474", module.exports)
	  }
	}

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(168)

	/* script */
	__vue_exports__ = __webpack_require__(170)

	/* template */
	var __vue_template__ = __webpack_require__(171)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/ubuntu/xcui/src/components/tooltip/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-62cbee6f", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-62cbee6f", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(169);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(24)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-62cbee6f!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-62cbee6f!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports


	// module
	exports.push([module.id, "\n.xcui-tooltip .tooltip {\n  opacity: .9;\n}\n.xcui-tooltip .scale-enter-active,\n.xcui-tooltip .fadein-enter-active,\n.xcui-tooltip .scale-leave-active,\n.xcui-tooltip .fadein-leave-active {\n  display: inline-table;\n}\n.xcui-tooltip .fadein-enter-active {\n  animation: fadein-in 0.3s ease-in;\n}\n.xcui-tooltip .fadein-leave-active {\n  animation: fadein-out 0.3s ease-out;\n}\n.xcui-tooltip .scale-enter-active {\n  animation: scale-in 0.15s ease-in;\n}\n.xcui-tooltip .scale-leave-active {\n  animation: scale-out 0.15s ease-out;\n}\n@keyframes fadein-in {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: 1;\n}\n}\n@keyframes fadein-out {\n0% {\n    opacity: 1;\n}\n100% {\n    opacity: 0;\n}\n}\n@keyframes scale-in {\n0% {\n    transform: scale(0);\n    opacity: 0;\n}\n100% {\n    transform: scale(1);\n    opacity: 1;\n}\n}\n@keyframes scale-out {\n0% {\n    transform: scale(1);\n    opacity: 1;\n}\n100% {\n    transform: scale(0);\n    opacity: 0;\n}\n}\n", ""]);

	// exports


/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _popoverMixins = __webpack_require__(138);

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
	    },
	    methods: {
	        afterEnter: function afterEnter() {
	            this.$refs.popover.style.display = 'inline-table';
	        }
	    }
	};

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    ref: "outer",
	    staticClass: "xcui-tooltip",
	    staticStyle: {
	      "position": "relative",
	      "display": "inline-block"
	    }
	  }, [_c('span', {
	    ref: "trigger"
	  }, [_vm._t("default")], 2), _vm._v(" "), _c('transition', {
	    attrs: {
	      "name": _vm.effect
	    },
	    on: {
	      "after-enter": _vm.afterEnter
	    }
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.show),
	      expression: "show"
	    }],
	    ref: "popover",
	    staticClass: "tooltip",
	    class: {
	      'top': _vm.placement === 'top',
	        'left': _vm.placement === 'left',
	        'right': _vm.placement === 'right',
	        'bottom': _vm.placement === 'bottom'
	    },
	    attrs: {
	      "transition": _vm.effect,
	      "role": "tooltip"
	    }
	  }, [_c('div', {
	    staticClass: "tooltip-arrow"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "tooltip-inner",
	    class: _vm.tooltipClass
	  }, [_vm._t("content", [_c('div', {
	    domProps: {
	      "innerHTML": _vm._s(_vm.content)
	    }
	  })])], 2)])])], 1)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-62cbee6f", module.exports)
	  }
	}

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(173)

	/* script */
	__vue_exports__ = __webpack_require__(175)

	/* template */
	var __vue_template__ = __webpack_require__(176)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/ubuntu/xcui/src/components/scrolltop/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-a98ea158", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-a98ea158", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(174);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(24)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-a98ea158!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-a98ea158!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports


	// module
	exports.push([module.id, "\n.xcui-scrolltop .xcui-scrolltop-init {\n  cursor: pointer;\n  width: auto;\n  display: inline-block;\n}\n.xcui-scrolltop .xcui-scrolltop-corner {\n  position: fixed;\n  bottom: 10px;\n  right: 10px;\n}\n.xcui-scrolltop .xcui-scrolltop-bottom {\n  position: fixed;\n  bottom: 10px;\n  left: 50%;\n}\n.xcui-scrolltop .xcui-scrolltop-right {\n  position: fixed;\n  top: 30%;\n  right: 10px;\n}\n.xcui-scrolltop .xcui-scrolltop-area {\n  width: 100px;\n  height: 100px;\n  font-size: 50px;\n  color: #428bca;\n  z-index: 1;\n  border: none;\n}\n.xcui-scrolltop .xcui-scrolltop-area:hover {\n  color: #3071a9;\n}\n.xcui-scrolltop .xcui-scrolltop-dropin {\n  border: none !important;\n}\n.fadein-enter-active,\n.fadein-leave-active {\n  display: block;\n}\n.fadein-enter {\n  animation: fadein-in 0.3s ease-in;\n}\n.fadein-leave-active {\n  animation: fadein-out 0.3s ease-out;\n}\n@keyframes fadein-in {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: 1;\n}\n}\n@keyframes fadein-out {\n0% {\n    opacity: 1;\n}\n100% {\n    opacity: 0;\n}\n}\n", ""]);

	// exports


/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _eventListener = __webpack_require__(139);

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
	    name: 'xcui-scrolltop',
	    props: {
	        targetElement: {
	            type: String,
	            default: ''
	        },
	        during: {
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

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "xcui-scrolltop"
	  }, [_c('div', {
	    ref: "dropa",
	    staticClass: "xcui-scrolltop-area xcui-scrolltop-corner",
	    class: {
	      'xcui-scrolltop-dropin': _vm.dropin.corner
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
	      "name": "fadein"
	    }
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.show),
	      expression: "show"
	    }],
	    ref: "dragele",
	    staticClass: "glyphicon glyphicon-circle-arrow-up xcui-scrolltop-init",
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
	    staticClass: "xcui-scrolltop-area xcui-scrolltop-bottom",
	    class: {
	      'xcui-scrolltop-dropin': _vm.dropin.bottom
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
	    staticClass: "xcui-scrolltop-area xcui-scrolltop-right",
	    class: {
	      'xcui-scrolltop-dropin': _vm.dropin.right
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
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-a98ea158", module.exports)
	  }
	}

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(178)

	/* template */
	var __vue_template__ = __webpack_require__(179)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/ubuntu/xcui/src/components/button/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-108b729c", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-108b729c", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 178 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    name: 'xcui-button',
	    props: {
	        type: {
	            type: String,
	            default: ''
	        },
	        size: {
	            type: String,
	            default: ''
	        }
	    },
	    computed: {
	        cls: function cls() {
	            var cls = ['xcui-btn'];
	            this.type && cls.push('xcui-btn-' + this.type);
	            this.size && cls.push('xcui-btn-' + this.size);
	            return cls.join(' ');
	        }
	    },
	    data: function data() {
	        return {};
	    }
	};

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('a', {
	    class: _vm.cls
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-108b729c", module.exports)
	  }
	}

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _install = __webpack_require__(181);

	var _install2 = _interopRequireDefault(_install);

	var _install3 = __webpack_require__(182);

	var _install4 = _interopRequireDefault(_install3);

	var _install5 = __webpack_require__(183);

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
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof2 = __webpack_require__(27);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _keys = __webpack_require__(151);

	var _keys2 = _interopRequireDefault(_keys);

	var _index = __webpack_require__(119);

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
	        div.innerHTML = '\n            <Modal' + propsString + ' v-model="show">\n                <template v-if="!isRawHTML">\n                    {{content}}\n                </template>\n                <div v-else v-html="content">\n                </div>\n            </Modal>\n        ';
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
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _keys = __webpack_require__(151);

	var _keys2 = _interopRequireDefault(_keys);

	var _index = __webpack_require__(114);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var isEmptyObject = function isEmptyObject(obj) {
	    return !(0, _keys2.default)(obj).length;
	};

	var MessageInstall = function MessageInstall(Vue) {
	    var messageInstance = void 0;
	    var newMessageInstance = function newMessageInstance() {
	        var div = document.createElement('div');
	        div.innerHTML = '\n            <Message :content="content"\n                :type="type"\n                :duration="duration"\n                :show="show">\n            </Message>\n        ';
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
	                    messageVM.$children[0][propKey] = props[propKey];
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
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof2 = __webpack_require__(27);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _keys = __webpack_require__(151);

	var _keys2 = _interopRequireDefault(_keys);

	var _index = __webpack_require__(109);

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
/* 184 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 185 */,
/* 186 */,
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(188)

	/* script */
	__vue_exports__ = __webpack_require__(190)

	/* template */
	var __vue_template__ = __webpack_require__(281)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/ubuntu/xcui/src/App.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1337900f", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-1337900f", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] App.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(189);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(24)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1337900f!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1337900f!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports


	// module
	exports.push([module.id, "\n.xcui .xcui-fade-transition {\n  opacity: 1;\n  transition: opacity linear 0.2s;\n}\n.xcui .xcui-fade-enter,\n.xcui .xcui-fade-leave {\n  opacity: 0;\n}\n.xcui .xcui-dialog-transition {\n  opacity: 1;\n  transition-duration: .4s;\n  transform: translate(-50%, -50%) scale(1) !important;\n  transition-property: transform, opacity!important;\n}\n.xcui .xcui-dialog-enter,\n.xcui .xcui-dialog-leave {\n  opacity: 0;\n}\n.xcui .xcui-dialog-enter {\n  transform: translate(-50%, -50%) scale(1.185) !important;\n}\n.xcui .xcui-dialog-leave {\n  transform: translate(-50%, -50%) scale(1) !important;\n}\n#header {\n  height: 50px;\n  background: #FF2D4B;\n  padding-left: 50px;\n  border-bottom: 1px solid #f1f1f1;\n}\n#header .logo {\n  font-size: 22px;\n  line-height: 50px;\n  height: 50px;\n  display: inline-block;\n  color: #fff;\n}\n#header .logo:hover {\n  text-decoration: none;\n}\n#header .logo img {\n  width: 32px;\n  height: 32px;\n  margin-top: -8px;\n}\n", ""]);

	// exports


/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _logo_nobg_32x322x = __webpack_require__(191);

	var _logo_nobg_32x322x2 = _interopRequireDefault(_logo_nobg_32x322x);

	var _router = __webpack_require__(192);

	var _router2 = _interopRequireDefault(_router);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    router: _router2.default,
	    data: function data() {
	        return {
	            logoUrl: _logo_nobg_32x322x2.default
	        };
	    }
	};

/***/ },
/* 191 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAADOJJREFUeAHtWwl0FeUV/uateUkIgSwGAhIwLAZlt9FKFbBStdYFRauWg2iPskkAqUcQNIALbsgiKiitAlqPqLgUFUGJFVE8YEXZyhaWBBOJCZCNl7dMv5thMi/JW7Ogod5z3vtn5l/vN/e/9/73/wf4Pyfl5+ZfVVUFg2eaZRxKTrb7dI+nSQBQs7NNWLe/A2ItfeDx9oaitIPVEge7LRox0fbq1GGLgtVq43MrbDb+qlM7LBYFFrMLbo8HVVVeOKtcOFnlhMvtREUFr51O3lfxeSWfVcHD525PBbxqMczmfKg4CAVH4CwthCOlRPlwoTMSEBsEgNrnungkxV9HhoYguW17ZKSno2fXJHRLi0bqWYAjKpIxNKysm8JyogwoKgF+OlaFwqIyFBSVI6/gGNMinCg9jvLKMrg8x6CoO+HBHv4+V3JePunbYdgAqBcNdyAuZhLaJQ/CkIv6Y1BmW3Rs59vWL/e6+DgIjIq7p5ejwpGifLe8POzBqoNuj1KHjnpOfeT5vWphEadsC6aCo6o6dOSdvsxbfG/qXquDR/ZE55TlWJTdF1H2utkt7/6sRGpa04Uc+FJ98AEBUC+95XL8PvMlTBtztl74jEhjo5N8+fALgDoo24Ku7ofOOOaF847tU3wBMPne1Fxbcm/FjLGZNfdn0kX3tFTRazpL/gGw266mhvcrHXrFFptmpCfAhjR9/PUAqHZq+vbsrhcImZ6k37FoBeD1hizaZAVUFZi1EPhmW+RNpqY4YDKdq1esBwA2Hs7A4Mx0vUDI1O0Btu4C7poOVEbkhIVs2m8B6ePuGcD2PUCHBvgh7emoub299LbrA2BSr0S/jGi9QNB0wizggbnAnClABR2sO+4HjhQGrdKozIKjwJ1TgeOlwIIHNeAvGAaIRIRLDppzsylVL14fAKu1L+Lj9Hz/qXhWX3xD5scCMqjZi4BnOSATmxs7E9jcANH035Px9D87gDEPaVPtWaa7c4HFrwOP3gv88CMg+eGS3dJKL1ofgIT4ZD0zYPrjT2R4ObBpK/BcNt86ByAgLKRoxlJ4pj4FvPFBwOoRZ6z6GLj/SSDKxj4I9K59wPxlnAp/Bs7rCtw7B1idE36zDkesXrgWANUKsHuXTnqm33Q0B9Aqhp3So3xllSYJviAsoC4Qj2vu34HHFvttIqKHTy8FnuSvbWtN7OsyP34WcDZ1wcjrgWtHa4ujUB0ktqkR8VoA4KsDZ6NXd2qJIHRWAjBhNtCODtVUdhgIhPQ04E1KwT0coKzcIiWPF5j8KPDq+0AnMihz3h/zXfm+5GX8jVKQ1gFIbBO6p/i4mkK1ATBZeqNrWs388NtS9gR2Eh8eCOdSPD/7GvjrNKDkuN/m/D4sq9DqrNsIdE8LzvzkO7SxyBL8aSrIcKht61bq8OFmKVobAK+3DzoEFwAGO4B5nOt2zsesMCShVw/a6x2a6RLFFYpy86jpCdgWKtKetMbB3rwwn/WIphjnc0yWap5C9cDpFG/DESeVVV0AzKbOYQUzxJQI2h6VA3g49HQ4vxvFdz8wimYymLJavwkYlw3s3AvceEV4zJeWapYgrkavhQYgsY0d0YnVkl5bAmIc1DRhkuiAGeO0qEwgEHLz6SW+Cgw4X2u0tJzAUaGt+Xf9TjaKWZ0rgQstTwDbsJnWZoWh7UXhyZyfNEoDXnyOyZz/6XwWCTns0fB4HFKlNgBRURHAyNr9MrTByUD8gfASxVPEftk7xvAkhCVa/fAPxjNRknOWAGUESKdtu/lmXwBuukozdb7MT2S7+w4BI64Dhlyo1wg/tdvNjEX6ASCxTY12DLu1G/4ADONv/2EDhGmjgRff0HyDg0c4VTy1mxM/4tMvjWfbKfL6mzeegoFQWpKPgPF0ruTNy5wX5nfuA4YOpKIc7ls6/Gu71Qy1Kkoq1EgAA10KUpKSw2/Fp+QUiuElA7S3LZLQIYXS0RNY/xVw7IRPQZ/L/XnGjSi+QKZSfP48Stj4ERrAcp/Zm+BONOpHemWzKfAqVqlWAwAGXhtLB4YeTgPpKSrFAWRaRH7YeCCHzAcl1ciVBVUwknxRoMK8KNT50xnaojVqKLk9JobU6Wj4AhDTOhEpjQBATNB8OisZ6UBpGe1+gDevDzqZDpVOl15AFzoI9i4XGPYGpI5Yn8bGJ1XyrmqoGxJgtrVHUlu7PqYGpeIiy+IkLTV09SQfAJLaEoBqnRS4XjLd61kU+5SkwGXCzZFNGFWpFjsDAAWdkBAfbhOBy3XpCGRnMfbWLnAZyXl3Lef9KdF/7X3gKK1DIJK2ZowFfts3UInInjudFbCanVLJ4lOzS1h+tE+FgJdiHmdP4kpxBZVgKdfvnA4x0fTpKRkSQRIT9z1/9z3B5fNtwIp3NUvRrTOBowKVOuV0h+PoqyTRMF1zGXBREzEvgy4p5faackwuDQDcnmREhxBDqREuCQgvPaqVljdtotKSeIGQLKMXLqOi3MTYwfe0/2T20t9o85vbhs1Ox0+4UFFElH2VoMnUuPkfbNSiIHXmpZyYsQdpKUSZiZkUGy/r/NPBvPR/rNQFa79KuTR0gLkZAZCefEk0+kMLqImpjVOo3A7RWZKAyumio8XF+la8AYBiOg2yRw6LOfVknX8wX3Nz33yWuqED8P6ntCDPnx4IDhuBSwMAi7n5Adh7UFsW7zkE3PxHbVEjqzhxbGRB8/bHwPRnmh+E42XV8186MgAwNzMAX38HTJnDNUMePcXL6daONBiVKNOCGYDEDlav11xeiQg1F1VV+QHAbm0+JfhBDu34PIo95/rQixngvLs+axLKkiizhLXEOoyhUuRhkSanCuo+r3ev3q4hAdEOm/6wSdN/vAU8vkQLXV/cj4HSKYGbP4dO1ANjGGDhmuyrb7nae0CLNwSuEXnO9j0ueoGf6BUNAKzNIAEzFwIv/FNbF2T24lynmIciCZ5M5PSIbw18u0OLDYrkNBV9s+MnrlU4HzXyAcBiOEV6bkNTWdqOywbeWcftspNAb87tRTNlRya8Fq+4BLh9GP2EKC2UJjtQEiNsCtq8bZfy5cpqH0CaM0Ykp7eaguTgkgQ1P99suLfzpkfu5NxxA3Dl7zQHSuIFstnyHk1lYymv4LBvEwYANlvjJUAiNbJ3p29TdWqv7Rs2dJE1MwsQvSFUQOfpicW0Fq9o9w3533fIxWN8H/pWNQDwlQbfEuFei6af/Bjw31ythixxp1LbRxqwrNufSE9fBlqETpRr8cX7Hm/Ydvzq9QdQ6H5Pa0z7NwAw+zrrvkXCuJ7Ht/IIvbj8Aq1wjIOScCOXr/3DqByiiJWC+QynVI/OWkExjWs20KGimRSTFglt2LKr7hE5AwCTYlyH26gou0l0a5etYhSIb0fIzIXPn4YAt16j3TfFv+wLyo6UHMIUku3wTTSTMt0OnwJdywn8n18o2+pr6xYwmFYUthoBSXhblN0nG2sHNAfyrU+jLW9qyuhKy/IXbswyrqCTRJPvoXWRLbRQtPTN3TC3WlK3mAGAhIkioVsmGcpOr9eXMQAR1+aiqwcDN1xZewtMwvHiZR4tDtyri5K6ccsGf+eIfQHwBm7BT05dzd6jC219NgfXeGPipzfj0eRRwMABxr1cSfRIgAhEqz7Oh7Nytr9sAwBVjczxlrmuk4StZtFkyeGI00ESGT6vm9GTnPsJZG1ENy1d+ZGS8/oBo4JxZbyuykrKSQS05GEtrCXxO1F6Pc6JoHIji4plmEsQxM0WibuJ06KuROpdzFm8CwUevp0QpN41/bMWfAza/9B35Zarl40cF4x1YwpUuZzBCra4PNl/zJr1rvLJK0FjbQYAFbJqOUNIQu83TdiNuLIRoTgyAKh0RuhWhWr6Z8qXxdjNWVtRYu6nrFwZ0rQbAFRVnXLlfqaBN0W3eQUe3DJxNVy2zLoub6DmDSvgdlOdt2Ba+eGPPJOwQln78r2RcGEAYLJ8j0IqDglQtiTautOF7IWfo6IsS1m7fFukQzcAUJVP8faaMoy5lXHqFkBfbKnEkje+xpGCJcq6Za81dMSKb0V1yIjR3Iy8HlcN7o+B/RMgO72/JJJzRf9an8vQ+RYen5lPxjc0dni1ANAbUzNvi0Nr61Vc2l5OD6sj+pzbGX0yUvldoCPktrfeSFOkssDZsbccH+Tsx7Y9O/jh5EeoKH5L+eK9JtNXfgGoO/bqb4iiDp0Dr2cAVH51FWVLQlxsPI/LJvNkaQKP1sTyOobb6/bqM72yyxzORqfYawlq/HBUwuaV3DcowYEjRdh7IJ8nSwsYv98Cky1HWfPi9rpjaqr7sAAI1ln1B5V2WwKirO3gRkfuAqdC9SQy9t4GZkW+zjAxgGHimR72xZ/C7zfdHn4C6znJT9hKGCkuJLDyVecBFHkLwjVfwcb0a96vCISPwP8A+ijW8salZEEAAAAASUVORK5CYII="

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _vueRouter = __webpack_require__(17);

	var _vueRouter2 = _interopRequireDefault(_vueRouter);

	var _Home = __webpack_require__(193);

	var _Home2 = _interopRequireDefault(_Home);

	var _homeContent = __webpack_require__(199);

	var _homeContent2 = _interopRequireDefault(_homeContent);

	var _pagination = __webpack_require__(202);

	var _pagination2 = _interopRequireDefault(_pagination);

	var _loading = __webpack_require__(207);

	var _loading2 = _interopRequireDefault(_loading);

	var _popover = __webpack_require__(212);

	var _popover2 = _interopRequireDefault(_popover);

	var _tooltip = __webpack_require__(217);

	var _tooltip2 = _interopRequireDefault(_tooltip);

	var _suggestion = __webpack_require__(222);

	var _suggestion2 = _interopRequireDefault(_suggestion);

	var _tag = __webpack_require__(227);

	var _tag2 = _interopRequireDefault(_tag);

	var _datepicker = __webpack_require__(232);

	var _datepicker2 = _interopRequireDefault(_datepicker);

	var _DateRangePicker = __webpack_require__(237);

	var _DateRangePicker2 = _interopRequireDefault(_DateRangePicker);

	var _select = __webpack_require__(242);

	var _select2 = _interopRequireDefault(_select);

	var _message = __webpack_require__(251);

	var _message2 = _interopRequireDefault(_message);

	var _modal = __webpack_require__(253);

	var _modal2 = _interopRequireDefault(_modal);

	var _inputNumber = __webpack_require__(258);

	var _inputNumber2 = _interopRequireDefault(_inputNumber);

	var _progress = __webpack_require__(263);

	var _progress2 = _interopRequireDefault(_progress);

	var _pageloading = __webpack_require__(268);

	var _pageloading2 = _interopRequireDefault(_pageloading);

	var _scrolltop = __webpack_require__(271);

	var _scrolltop2 = _interopRequireDefault(_scrolltop);

	var _button = __webpack_require__(276);

	var _button2 = _interopRequireDefault(_button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var router = new _vueRouter2.default({
	    routes: [{
	        path: '/',
	        component: _Home2.default,
	        children: [{
	            path: '/home',
	            component: _homeContent2.default
	        }, {
	            path: '/component/pagination',
	            component: _pagination2.default
	        }, {
	            path: '/component/button',
	            component: _button2.default
	        }, {
	            path: '/component/popover',
	            component: _popover2.default
	        }, {
	            path: '/component/tooltip',
	            component: _tooltip2.default
	        }, {
	            path: '/component/suggestion',
	            component: _suggestion2.default
	        }, {
	            path: '/component/tag',
	            component: _tag2.default
	        }, {
	            path: '/component/datepicker',
	            component: _datepicker2.default
	        }, {
	            path: '/component/daterangepicker',
	            component: _DateRangePicker2.default
	        }, {
	            path: '/component/loading',
	            component: _loading2.default
	        }, {
	            path: '/component/message',
	            component: _message2.default
	        }, {
	            path: '/component/modal',
	            component: _modal2.default
	        }, {
	            path: '/component/select',
	            component: _select2.default
	        }, {
	            path: '/component/inputnumber',
	            component: _inputNumber2.default
	        }, {
	            path: '/component/progress',
	            component: _progress2.default
	        }, {
	            path: '/component/pageloading',
	            component: _pageloading2.default
	        }, {
	            path: '/component/scrolltop',
	            component: _scrolltop2.default
	        }]
	    }]
	});

	exports.default = router;

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(194)

	/* script */
	__vue_exports__ = __webpack_require__(196)

	/* template */
	var __vue_template__ = __webpack_require__(198)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/ubuntu/xcui/src/Home.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1877823e", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-1877823e", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Home.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(195);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(24)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1877823e!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Home.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1877823e!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Home.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports


	// module
	exports.push([module.id, "\n#wrapper {\n  -webkit-transition: all .5s ease;\n  -moz-transition: all .5s ease;\n  -o-transition: all .5s ease;\n  transition: all .5s ease;\n}\n#wrapper .toggled {\n  padding-left: 250px;\n}\n#wrapper.row {\n  margin-left: 0;\n  margin-right: 0;\n  padding: 20px 40px;\n}\n#sidebar-wrapper {\n  z-index: 1000;\n  display: inline-block;\n  height: 100%;\n  overflow-x: hidden;\n  background: #fff;\n  -webkit-transition: all .5s ease;\n  -moz-transition: all .5s ease;\n  -o-transition: all .5s ease;\n  transition: all .5s ease;\n  padding: 0;\n}\n#wrapper.toggled #sidebar-wrapper {\n  width: 250px;\n}\n#page-content-wrapper {\n  background: #fff;\n}\n/* Sidebar Styles */\n.sidebar-nav {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  overflow-x: hidden!important;\n}\n.sidebar-nav li {\n  text-indent: 20px;\n  line-height: 40px;\n}\n.sidebar-nav li a {\n  display: block;\n  text-decoration: none;\n  color: #333;\n  border-left: 2px solid #fff;\n}\n.sidebar-nav li a:hover {\n  text-decoration: none;\n  color: #FF2D4B;\n  background: rgba(255, 255, 255, 0.2);\n}\n.sidebar-nav li a.active,\n.sidebar-nav li a.focus {\n  text-decoration: none;\n}\n.sidebar-nav li a.v-link-active {\n  border-left: 2px solid #FF2D4B;\n  background: #fff;\n  color: #FF2D4B;\n}\n.sidebar-nav .sidebar-brand {\n  height: 65px;\n  font-size: 18px;\n  line-height: 60px;\n}\n.sidebar-nav .sidebar-brand a {\n  color: #FF2D4B;\n  background: #fff;\n}\n.sidebar-nav .sidebar-brand a :hover {\n  color: #fff;\n  background: #FF2D4B;\n}\n@media (min-width: 768px) {\n}\n.xcui-demo-container {\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  margin: 15px 0 30px 0;\n  padding: 15px;\n}\n.xcui-demo-container .xcui-example-container h3 {\n  margin-top: 15px !important;\n}\n.xcui-demo-container .xcui-example-container .xcui-demo-wrap,\n.xcui-demo-container .xcui-example-container .xcui-code-wrap {\n  width: 100%!important;\n}\n.xcui-demo-container .xcui-example-container .xcui-code-wrap {\n  max-width: 100%;\n  margin-top: 20px;\n}\n.xcui-demo-container .xcui-example-container .xcui-code-wrap pre {\n  padding-right: 0;\n  display: block;\n  font-size: 13px;\n  line-height: 1.42857143;\n  color: #333;\n  word-break: break-all;\n  word-wrap: break-word;\n  background-color: rgba(128, 128, 128, 0.05);\n  border: 1px solid rgba(128, 128, 128, 0.075);\n  border-radius: 4px;\n  white-space: pre-wrap;\n}\n.xcui-demo-container .xcui-example-container .xcui-code-wrap pre .token {\n  display: inline-block;\n  white-space: normal;\n}\n/* http://prismjs.com/download.html?themes=prism&languages=markup+css+clike+javascript */\n/**\n * prism.js default theme for JavaScript, CSS and HTML\n * Based on dabblet (http://dabblet.com)\n * @author Lea Verou\n */\ncode[class*=\"language-\"],\npre[class*=\"language-\"] {\n  background: none;\n  text-shadow: 0 1px white;\n  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n  text-align: left;\n  word-spacing: normal;\n  line-height: 1.5;\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n  -webkit-hyphens: none;\n  -moz-hyphens: none;\n  -ms-hyphens: none;\n  hyphens: none;\n  display: block;\n  font-size: 13px;\n  color: #333;\n  word-break: break-all;\n  word-wrap: break-word;\n  background-color: rgba(128, 128, 128, 0.05);\n  border: 1px solid rgba(128, 128, 128, 0.075);\n  border-radius: 4px;\n  white-space: pre-wrap;\n}\npre[class*=\"language-\"]::-moz-selection,\npre[class*=\"language-\"]::-moz-selection,\ncode[class*=\"language-\"]::-moz-selection,\ncode[class*=\"language-\"]::-moz-selection {\n  text-shadow: none;\n  background: #b3d4fc;\n}\npre[class*=\"language-\"]::selection,\npre[class*=\"language-\"]::selection,\ncode[class*=\"language-\"]::selection,\ncode[class*=\"language-\"]::selection {\n  text-shadow: none;\n  background: #b3d4fc;\n}\n@media print {\ncode[class*=\"language-\"],\n  pre[class*=\"language-\"] {\n    text-shadow: none;\n}\n}\n/* Code blocks */\npre[class*=\"language-\"] {\n  padding: 1em;\n  margin: .5em 0;\n  overflow: auto;\n}\n:not(pre) > code[class*=\"language-\"],\npre[class*=\"language-\"] {\n  background: #f5f2f0;\n}\n/* Inline code */\n:not(pre) > code[class*=\"language-\"] {\n  padding: .1em;\n  border-radius: .3em;\n  white-space: normal;\n}\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n  color: slategray;\n}\n.token.style-attr {\n  margin-left: .5em;\n}\n.token.punctuation {\n  color: #999;\n}\n.namespace {\n  opacity: .7;\n}\n.token.property,\n.token.tag,\n.token.boolean,\n.token.number,\n.token.constant,\n.token.symbol,\n.token.deleted {\n  color: #905;\n}\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n  color: #690;\n}\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string {\n  color: #a67f59;\n}\n.token.atrule,\n.token.attr-value,\n.token.keyword {\n  color: #07a;\n}\n.token.function {\n  color: #DD4A68;\n}\n.token.regex,\n.token.important,\n.token.variable {\n  color: #e90;\n}\n.token.important,\n.token.bold {\n  font-weight: bold;\n}\n.token.italic {\n  font-style: italic;\n}\n.token.entity {\n  cursor: help;\n}\n", ""]);

	// exports


/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});


	var version = __webpack_require__(197).version;

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

/***/ },
/* 197 */
/***/ function(module, exports) {

	module.exports = {
		"name": "xcui",
		"version": "1.0.1",
		"description": "Desktop web UI based on Vue and Bootstrap",
		"theme": "./custom.js",
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
		"license": "MIT",
		"repository": {
			"type": "git",
			"url": "https://github.com/"
		},
		"scripts": {
			"dev": "node build/dev-server.js",
			"site": "webpack --progress --hide-modules --colors --config build/webpack.base.conf.js",
			"build": "webpack --progress --hide-modules --colors --config build/webpack.npm.conf.js && rimraf dist/components && node build/build-components"
		},
		"main": "dist/xcui.js",
		"dependencies": {
			"array-filter": "^1.0.0",
			"array-find": "^1.0.0",
			"array-map": "^0.0.0",
			"array-shuffle": "^1.0.0",
			"countup": "^1.6.1",
			"fuzzysearch": "^1.0.3"
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
			"less-vars-to-js": "^1.1.2",
			"rimraf": "^2.5.0",
			"style-loader": "^0.13.1",
			"url-loader": "^0.5.7",
			"vue": "^2.0.5",
			"vue-hot-reload-api": "^1.2.0",
			"vue-html-loader": "^1.2.0",
			"vue-loader": "^9.0.0",
			"vue-router": "^2.0.0",
			"vue-style-loader": "^1.0.0",
			"vue-template-compiler-loader": "^1.0.3",
			"webpack": "^1.12.2",
			"webpack-dev-middleware": "^1.4.0",
			"webpack-hot-middleware": "^2.6.0",
			"xcui-demo-loader": "^0.1.4"
		}
	};

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "row",
	    attrs: {
	      "id": "wrapper"
	    }
	  }, [_c('div', {
	    staticClass: "col-md-2",
	    attrs: {
	      "id": "sidebar-wrapper"
	    }
	  }, [_c('ul', {
	    staticClass: "sidebar-nav"
	  }, [_c('li', [_c('router-link', {
	    attrs: {
	      "to": "/home"
	    }
	  }, [_vm._v("关于XCUI")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
	    attrs: {
	      "to": "/component/button"
	    }
	  }, [_vm._v("Button")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
	    attrs: {
	      "to": "/component/datepicker"
	    }
	  }, [_vm._v("DatePicker")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
	    attrs: {
	      "to": "/component/daterangepicker"
	    }
	  }, [_vm._v("DateRangePicker")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
	    attrs: {
	      "to": "/component/inputNumber"
	    }
	  }, [_vm._v("InputNumber")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
	    attrs: {
	      "to": "/component/loading"
	    }
	  }, [_vm._v("Loading")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
	    attrs: {
	      "to": "/component/modal"
	    }
	  }, [_vm._v("Modal")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
	    attrs: {
	      "to": "/component/suggestion"
	    }
	  }, [_vm._v("Suggestion")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
	    attrs: {
	      "to": "/component/pagination"
	    }
	  }, [_vm._v("Pagination")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
	    attrs: {
	      "to": "/component/popover"
	    }
	  }, [_vm._v("Popover")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
	    attrs: {
	      "to": "/component/progress"
	    }
	  }, [_vm._v("Progress")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
	    attrs: {
	      "to": "/component/pageloading"
	    }
	  }, [_vm._v("PageLoading")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
	    attrs: {
	      "to": "/component/tooltip"
	    }
	  }, [_vm._v("Tooltip")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
	    attrs: {
	      "to": "/component/tag"
	    }
	  }, [_vm._v("Tag")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
	    attrs: {
	      "to": "/component/message"
	    }
	  }, [_vm._v("Message")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
	    attrs: {
	      "to": "/component/select"
	    }
	  }, [_vm._v("Select")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
	    attrs: {
	      "to": "/component/scrolltop"
	    }
	  }, [_vm._v("ScrollTop")])], 1)])]), _vm._v(" "), _c('div', {
	    staticClass: "col-md-10",
	    attrs: {
	      "id": "page-content-wrapper"
	    }
	  }, [_c('router-view', {
	    attrs: {
	      "transition": "xcui-fade",
	      "transition-mode": "out-in"
	    }
	  })], 1)])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-1877823e", module.exports)
	  }
	}

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(200)

	/* template */
	var __vue_template__ = __webpack_require__(201)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/ubuntu/xcui/src/demos/homeContent.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-490b06ee", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-490b06ee", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] homeContent.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});


	var version = __webpack_require__(197).version;

	exports.default = {
	    data: function data() {
	        return {
	            version: version
	        };
	    }
	};

/***/ },
/* 201 */
/***/ function(module, exports) {

	
	    module.exports = {
	      render: function(){with(this){return _c('div',[_c('h1',[_v("关于XCUI")]),_v(" "),_m(0),_v(" "),_m(1),_v(" "),_c('h2',[_v("XCUI的目标是：")]),_v(" "),_m(2),_v(" "),_c('h2',[_v("版本支持")]),_v(" "),_m(3),_v(" "),_m(4),_v(" "),_m(5),_v(" "),_c('blockquote',[_c('p',[_v("XCUI需要在页面中引入"),_c('code',[_v("bootstrap.css")]),_v("。")])]),_v(" "),_c('h2',[_v("如何使用")]),_v(" "),_m(6),_v(" "),_c('pre',[_v("npm install xcui\n")]),_v(" "),_m(7),_v(" "),_c('p',[_v("在页面根实例中引入：")]),_v(" "),_m(8),_v(" "),_c('p',[_v("或者：")]),_v(" "),_m(9),_v(" "),_c('p',[_v("在页面中声明标签，即可使用。举例：")]),_v(" "),_m(10),_v(" "),_c('p',[_v("除了使用npm进行安装外，还可直接将xcui的js和css文件使用标签形式引入，举例：")]),_v(" "),_m(11),_v(" "),_c('blockquote',[_c('p',[_c('strong',[_v("说明")])]),_v(" "),_c('p',[_v("XCUI在使用"),_c('code',[_v("Vue.use(xcui)")]),_v("后，会默认以"),_c('code',[_v("xcui-")]),_v("前缀注册所有组件，在Vue实例中可直接使用而"),_c('strong',[_v("不用在"),_c('code',[_v("components")]),_v("中声明")]),_v("。如：")])]),_v(" "),_m(12),_v(" "),_c('p',[_v("当然，您也可以按以下方式使用xcui组件：")]),_v(" "),_m(13),_v(" "),_c('h2',[_v("全局方法")]),_v(" "),_m(14),_v(" "),_m(15),_v(" "),_m(16),_v(" "),_c('h2',[_v("开发")]),_v(" "),_c('h4',[_v("clone the repo")]),_v(" "),_m(17),_v(" "),_c('h4',[_v("安装依赖")]),_v(" "),_c('pre',[_v("$ npm i\n")]),_v(" "),_c('h4',[_v("run dev server")]),_v(" "),_c('pre',[_v("$ npm run dev\n")]),_v(" "),_c('h4',[_v("build components")]),_v(" "),_c('pre',[_v("$ npm run build\n")]),_v(" "),_c('h2',[_v("加入我们")]),_v(" "),_c('h4',[_v("提交issue")]),_v(" "),_m(18),_v(" "),_c('h4',[_v("提交pull request")]),_v(" "),_m(19),_v(" "),_c('h4',[_v("加入开发团队")]),_v(" "),_m(20)],1)}},
	      staticRenderFns: [function(){with(this){return _c('p',[_c('img',{attrs:{"src":"https://github.com/wmfe/xcui/raw/master/src/assets/logo_nobg_128x128@2x.png","alt":"logo"}})])}},function(){with(this){return _c('p',[_v("XCUI 是基于"),_c('code',[_v("Vue")]),_v("和 "),_c('code',[_v("Bootstrap.css")]),_v(" 的"),_c('strong',[_v("桌面端组件库")]),_v("。")])}},function(){with(this){return _c('ul',[_c('li',[_v("满足桌面端页面大部分基础组件需求。")]),_v(" "),_c('li',[_v("快速开发基于 "),_c('code',[_v("vue")]),_v(" 构建的项目。")]),_v(" "),_c('li',[_v("保持小体积, 无其他js库依赖(不依赖"),_c('code',[_v("jquery")]),_v(", "),_c('code',[_v("Boostrap.js")]),_v("), 仅使用 "),_c('code',[_v("Boostrap.css")]),_v(" 。")]),_v(" "),_c('li',[_v("简洁优雅。")])])}},function(){with(this){return _c('p',[_v("XCUI的1.0分支支持 "),_c('code',[_v("Vue 1.x")]),_v(" 版本；2.0分支支持 "),_c('code',[_v("Vue 2.x")]),_v(" 版本。")])}},function(){with(this){return _c('p',[_v("在使用"),_c('code',[_v("Vue 1.x")]),_v(" 版本时，推荐使用 "),_c('code',[_v("Vue 1.0.26")]),_v(" 以上版本；")])}},function(){with(this){return _c('p',[_v("在使用"),_c('code',[_v("Vue 2.x")]),_v(" 版本时，推荐使用 "),_c('code',[_v("Vue 2.0.5")]),_v(" 以上版本。")])}},function(){with(this){return _c('p',[_v("通过"),_c('code',[_v("npm")]),_v("安装，或在"),_c('a',{attrs:{"href":"https://github.com/wmfe/xcui/releases"}},[_v("这里")]),_v("下载打包好的版本：")])}},function(){with(this){return _c('p',[_c('code',[_v("xcui")]),_v("使用"),_c('code',[_v("umd")]),_v("方式打包，支持各种模块加载器。")])}},function(){with(this){return _c('pre',[_c('span',{staticClass:"token keyword"},[_v("import")]),_v(" Vue "),_c('span',{staticClass:"token keyword"},[_v("from")]),_v(" "),_c('span',{staticClass:"token string"},[_v("'vue'")]),_v("\n"),_c('span',{staticClass:"token keyword"},[_v("import")]),_v(" xcui "),_c('span',{staticClass:"token keyword"},[_v("from")]),_v(" "),_c('span',{staticClass:"token string"},[_v("'xcui'")]),_v("\n"),_c('span',{staticClass:"token keyword"},[_v("import")]),_v(" "),_c('span',{staticClass:"token string"},[_v("'xcui/dist/xcui.css'")]),_v("\nVue"),_c('span',{staticClass:"token punctuation"},[_v(".")]),_c('span',{staticClass:"token function"},[_v("use")]),_c('span',{staticClass:"token punctuation"},[_v("(")]),_v("xcui"),_c('span',{staticClass:"token punctuation"},[_v(")")]),_c('span',{staticClass:"token punctuation"},[_v(";")]),_v("\n")])}},function(){with(this){return _c('pre',[_c('span',{staticClass:"token keyword"},[_v("var")]),_v(" Vue "),_c('span',{staticClass:"token operator"},[_v("=")]),_v(" "),_c('span',{staticClass:"token function"},[_v("require")]),_c('span',{staticClass:"token punctuation"},[_v("(")]),_c('span',{staticClass:"token string"},[_v("'vue'")]),_c('span',{staticClass:"token punctuation"},[_v(")")]),_c('span',{staticClass:"token punctuation"},[_v(";")]),_v("\n"),_c('span',{staticClass:"token keyword"},[_v("var")]),_v(" xcui "),_c('span',{staticClass:"token operator"},[_v("=")]),_v(" "),_c('span',{staticClass:"token function"},[_v("require")]),_c('span',{staticClass:"token punctuation"},[_v("(")]),_c('span',{staticClass:"token string"},[_v("'xcui'")]),_c('span',{staticClass:"token punctuation"},[_v(")")]),_c('span',{staticClass:"token punctuation"},[_v(";")]),_v("\nVue"),_c('span',{staticClass:"token punctuation"},[_v(".")]),_c('span',{staticClass:"token function"},[_v("use")]),_c('span',{staticClass:"token punctuation"},[_v("(")]),_v("xcui"),_c('span',{staticClass:"token punctuation"},[_v(")")]),_c('span',{staticClass:"token punctuation"},[_v(";")]),_v("\n")])}},function(){with(this){return _c('pre',[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-tag")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v(":closeable")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("true"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("text")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_c('span',{staticClass:"token punctuation"},[_v("'")]),_v("关闭"),_c('span',{staticClass:"token punctuation"},[_v("'")]),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-tag")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\n")])}},function(){with(this){return _c('pre',[_c('span',{staticClass:"token doctype"},[_v("<!DOCTYPE html>")]),_v("\n"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("html")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\n"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("head")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\n    "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("title")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("Hello XCUI"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("title")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\n    "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("link")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("rel")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("stylesheet"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("href")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("bootstrap/css/bootstrap.css"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\n    "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("link")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("rel")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("stylesheet"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("href")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("xcui.css"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\n    "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("script")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("type")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("text/javascript"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("src")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("vue.js"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_c('span',{staticClass:"token script language-javascript"}),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("script")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\n    "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("script")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("type")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("text/javascript"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("src")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("xcui.js"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_c('span',{staticClass:"token script language-javascript"}),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("script")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\n"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("head")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\n"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("body")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\n    "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("div")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("id")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("app"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\n        "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-tag")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v(":closeable")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("true"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v(":text")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_c('span',{staticClass:"token punctuation"},[_v("'")]),_v("关闭"),_c('span',{staticClass:"token punctuation"},[_v("'")]),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-tag")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\n    "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("div")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\n    "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("script")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("type")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("text/javascript"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_c('span',{staticClass:"token script language-javascript"},[_v("\n        Vue"),_c('span',{staticClass:"token punctuation"},[_v(".")]),_c('span',{staticClass:"token function"},[_v("use")]),_c('span',{staticClass:"token punctuation"},[_v("(")]),_v("xcui"),_c('span',{staticClass:"token punctuation"},[_v(")")]),_c('span',{staticClass:"token punctuation"},[_v(";")]),_v("\n        "),_c('span',{staticClass:"token keyword"},[_v("new")]),_v(" "),_c('span',{staticClass:"token class-name"},[_v("Vue")]),_c('span',{staticClass:"token punctuation"},[_v("(")]),_c('span',{staticClass:"token punctuation"},[_v("{")]),_v("\n            el"),_c('span',{staticClass:"token punctuation"},[_v(":")]),_v(" "),_c('span',{staticClass:"token string"},[_v("'#app'")]),_c('span',{staticClass:"token punctuation"},[_v(",")]),_v("\n            ready"),_c('span',{staticClass:"token punctuation"},[_v(":")]),_v(" "),_c('span',{staticClass:"token keyword"},[_v("function")]),_v(" "),_c('span',{staticClass:"token punctuation"},[_v("(")]),_c('span',{staticClass:"token punctuation"},[_v(")")]),_c('span',{staticClass:"token punctuation"},[_v("{")]),_v("\n                "),_c('span',{staticClass:"token keyword"},[_v("this")]),_c('span',{staticClass:"token punctuation"},[_v(".")]),_c('span',{staticClass:"token function"},[_v("$alert")]),_c('span',{staticClass:"token punctuation"},[_v("(")]),_c('span',{staticClass:"token string"},[_v("'Hello XCUI!'")]),_c('span',{staticClass:"token punctuation"},[_v(")")]),_v("\n            "),_c('span',{staticClass:"token punctuation"},[_v("}")]),_v("\n        "),_c('span',{staticClass:"token punctuation"},[_v("}")]),_c('span',{staticClass:"token punctuation"},[_v(")")]),_v("\n    ")]),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("script")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\n"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("body")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\n"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("html")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\n")])}},function(){with(this){return _c('pre',[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-tag")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-tag")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\n")])}},function(){with(this){return _c('pre',[_c('span',{staticClass:"token keyword"},[_v("import")]),_v(" "),_c('span',{staticClass:"token punctuation"},[_v("{")]),_v("Tag"),_c('span',{staticClass:"token punctuation"},[_v(",")]),_v(" Select"),_c('span',{staticClass:"token punctuation"},[_v("}")]),_v(" "),_c('span',{staticClass:"token keyword"},[_v("from")]),_v(" xcui"),_c('span',{staticClass:"token punctuation"},[_v(";")]),_v("\n"),_c('span',{staticClass:"token keyword"},[_v("export")]),_v(" "),_c('span',{staticClass:"token keyword"},[_v("default")]),_v(" "),_c('span',{staticClass:"token punctuation"},[_v("{")]),_v("\n    components"),_c('span',{staticClass:"token punctuation"},[_v(":")]),_v(" "),_c('span',{staticClass:"token punctuation"},[_v("{")]),_v("Tag"),_c('span',{staticClass:"token punctuation"},[_v(",")]),_v(" Select"),_c('span',{staticClass:"token punctuation"},[_v("}")]),_v("\n"),_c('span',{staticClass:"token punctuation"},[_v("}")]),_v("\n")])}},function(){with(this){return _c('p',[_c('code',[_v("xcui")]),_v("把一些使用频率高的操作挂载到"),_c('code',[_v("Vue")]),_v("的根实例，便于调用。如, 在一个"),_c('code',[_v("components")]),_v("组件中可以这样调用 ( "),_c('strong',[_v("且不用在页面中显式地声明html标签")]),_v(" )：")])}},function(){with(this){return _c('pre',[_c('span',{staticClass:"token keyword"},[_v("this")]),_c('span',{staticClass:"token punctuation"},[_v(".")]),_c('span',{staticClass:"token function"},[_v("$alert")]),_c('span',{staticClass:"token punctuation"},[_v("(")]),_c('span',{staticClass:"token string"},[_v("'alert message'")]),_c('span',{staticClass:"token punctuation"},[_v(")")]),_v(" "),_c('span',{staticClass:"token comment",attrs:{"spellcheck":"true"}},[_v("// 警告提示")]),_v("\n"),_c('span',{staticClass:"token keyword"},[_v("this")]),_c('span',{staticClass:"token punctuation"},[_v(".")]),_c('span',{staticClass:"token function"},[_v("$confirm")]),_c('span',{staticClass:"token punctuation"},[_v("(")]),_c('span',{staticClass:"token string"},[_v("'是否确认?'")]),_c('span',{staticClass:"token punctuation"},[_v(",")]),_v(" content"),_c('span',{staticClass:"token punctuation"},[_v(",")]),_v(" onOk"),_c('span',{staticClass:"token punctuation"},[_v(",")]),_v(" onCancel"),_c('span',{staticClass:"token punctuation"},[_v(")")]),_v(" "),_c('span',{staticClass:"token comment",attrs:{"spellcheck":"true"}},[_v("// 确认提示")]),_v("\n"),_c('span',{staticClass:"token keyword"},[_v("this")]),_c('span',{staticClass:"token punctuation"},[_v(".")]),_v("$Message"),_c('span',{staticClass:"token punctuation"},[_v(".")]),_c('span',{staticClass:"token function"},[_v("show")]),_c('span',{staticClass:"token punctuation"},[_v("(")]),_c('span',{staticClass:"token string"},[_v("'toaster message'")]),_c('span',{staticClass:"token punctuation"},[_v(")")]),_v(" "),_c('span',{staticClass:"token comment",attrs:{"spellcheck":"true"}},[_v("// 信息提示")]),_v("\n"),_c('span',{staticClass:"token keyword"},[_v("this")]),_c('span',{staticClass:"token punctuation"},[_v(".")]),_v("$Modal"),_c('span',{staticClass:"token punctuation"},[_v(".")]),_c('span',{staticClass:"token function"},[_v("show")]),_c('span',{staticClass:"token punctuation"},[_v("(")]),_v("options"),_c('span',{staticClass:"token punctuation"},[_v(")")]),_v(" "),_c('span',{staticClass:"token comment",attrs:{"spellcheck":"true"}},[_v("// 模态框")]),_v("\n")])}},function(){with(this){return _c('p',[_v("具体请见"),_c('a',{attrs:{"href":"https://wmfe.github.io/xcui/#!/component/modal"}},[_v("modal")]),_v(" 中的说明。")])}},function(){with(this){return _c('pre',[_v("$ git clone git@github"),_c('span',{staticClass:"token punctuation"},[_v(".")]),_v("com"),_c('span',{staticClass:"token punctuation"},[_v(":")]),_v("wmfe"),_c('span',{staticClass:"token operator"},[_v("/")]),_v("xcui"),_c('span',{staticClass:"token punctuation"},[_v(".")]),_v("git\n")])}},function(){with(this){return _c('p',[_v("在使用过程中有问题，请在"),_c('a',{attrs:{"href":"https://github.com/wmfe/xcui/issues"}},[_v("这里")]),_v("给我们提交"),_c('code',[_v("issue")]),_v("。")])}},function(){with(this){return _c('p',[_v("代码有问题？请在"),_c('a',{attrs:{"href":"https://github.com/wmfe/xcui/pulls"}},[_v("这里")]),_v("给我们提交"),_c('code',[_v("pull request")]),_v("。")])}},function(){with(this){return _c('p',[_v("加入"),_c('a',{attrs:{"href":"https://github.com/wmfe"}},[_v("wmfe")]),_v("团队，一起开发通用组件，交流vue组件开发的心得~")])}}]
	    };
	  

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(203)

	/* script */
	__vue_exports__ = __webpack_require__(205)

	/* template */
	var __vue_template__ = __webpack_require__(206)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/ubuntu/xcui/src/demos/pagination.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-59e7240a", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-59e7240a", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] pagination.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(204);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(24)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-59e7240a!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./pagination.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-59e7240a!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./pagination.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports


	// module
	exports.push([module.id, "\n.table {\n  border: 1px solid #ddd;\n  background-color: #fff;\n  margin-top: 15px;\n}\n", ""]);

	// exports


/***/ },
/* 205 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    name: 'xcui-pagination-demo',
	    data: function data() {
	        return {
	            currentPageNum: 1,
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
	        goToPage: function goToPage(pageNo, oldPageNo) {
	            var _fetch = this.fetch(pageNo),
	                list = _fetch.list,
	                total = _fetch.total;

	            this.list = list;
	            this.total = total;
	            this.currentPageNum = pageNo;
	        }
	    },
	    mounted: function mounted() {
	        this.goToPage(1);
	    }
	};

/***/ },
/* 206 */
/***/ function(module, exports) {

	
	    module.exports = {
	      render: function(){with(this){return _c('div',[_c('h1',[_v("Pagination页码")]),_v(" "),_c('h2',[_v("使用场景")]),_v(" "),_m(0),_v(" "),_c('h1',[_v("Demo")]),_v(" "),_c('div',{staticClass:"xcui-demo-container col-md-12 col-xs-12 col-lg-12"},[_c('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_c('h3',[_v("两种翻页展示")]),_v(" "),_c('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-12 text-right"},[_c('xcui-pagination',{directives:[{name:"show",rawName:"v-show",value:(total > 0),expression:"total > 0"}],attrs:{"type":"mini","current-page-num":currentPageNum,"total":total,"page-size":pageSize},on:{"go-to-page":goToPage}})],1)]),_v(" "),_c('table',{staticClass:"table table-hover table-condensed"},[_m(1),_v(" "),_l((list),function(item){return _c('tr',[_c('td',{domProps:{"textContent":_s(item.id)}}),_v(" "),_c('td',{domProps:{"textContent":_s(item.name)}})])})],2),_v(" "),_c('xcui-pagination',{directives:[{name:"show",rawName:"v-show",value:(total > 0),expression:"total > 0"}],attrs:{"current-page-num":currentPageNum,"total":total,"page-size":pageSize},on:{"go-to-page":goToPage}})],1),_v(" "),_m(2)])]),_v(" "),_c('h2',[_v("Props")]),_v(" "),_m(3)])}},
	      staticRenderFns: [function(){with(this){return _c('ul',[_c('li',[_v("表格或其他需要分页的页面元素。")]),_v(" "),_c('li',[_v("支持两种类型的页码： "),_c('code',[_v("Standard")]),_v(" 标准页码, 一般用于元素顶部； "),_c('code',[_v("Mini")]),_v(" 迷你页码，一般用于元素底部。")])])}},function(){with(this){return _c('thead',[_c('tr',[_c('th',[_v("ID")]),_v(" "),_c('th',[_v("Name")])])])}},function(){with(this){return _c('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_c('pre',[_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("div")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("row"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n     "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("div")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("col-md-12 text-right"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n         "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-pagination")]),_v("\r\n             "),_c('span',{staticClass:"token attr-name"},[_v("v-show")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("total "),_c('span',{staticClass:"token punctuation"},[_v(">")]),_v(" 0"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\n             "),_c('span',{staticClass:"token attr-name"},[_v("type")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("mini"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\n             "),_c('span',{staticClass:"token attr-name"},[_v("@go-to-page")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("goToPage"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n             "),_c('span',{staticClass:"token attr-name"},[_v(":current-page-num")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("currentPageNum"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n             "),_c('span',{staticClass:"token attr-name"},[_v(":total")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("total"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n             "),_c('span',{staticClass:"token attr-name"},[_v(":page-size")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("pageSize"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n             "),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-pagination")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n     "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("div")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("div")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("table")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("table table-hover table-condensed"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n     "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("thead")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n         "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("tr")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n             "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("th")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("ID"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("th")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n             "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("th")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("Name"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("th")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n         "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("tr")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n     "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("thead")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n     "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("tr")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("v-for")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("item in list"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n         "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("td")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("v-text")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("item.id"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("td")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n         "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("td")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("v-text")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("item.name"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("td")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n     "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("tr")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("table")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-pagination")]),_v("\r\n     "),_c('span',{staticClass:"token attr-name"},[_v("v-show")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("total "),_c('span',{staticClass:"token punctuation"},[_v(">")]),_v(" 0"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\n     "),_c('span',{staticClass:"token attr-name"},[_v("@go-to-page")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("goToPage"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n     "),_c('span',{staticClass:"token attr-name"},[_v(":current-page-num")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("currentPageNum"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n     "),_c('span',{staticClass:"token attr-name"},[_v(":total")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("total"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n     "),_c('span',{staticClass:"token attr-name"},[_v(":page-size")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("pageSize"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n     "),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-pagination")]),_c('span',{staticClass:"token punctuation"},[_v(">")])])])])}},function(){with(this){return _c('table',{staticClass:"table"},[_c('thead',[_c('tr',[_c('th',[_v("名字")]),_v(" "),_c('th',[_v("类型")]),_v(" "),_c('th',[_v("默认")]),_v(" "),_c('th',[_v("描述")]),_v(" "),_c('th',[_v("可选范围")]),_v(" "),_c('th',[_v("是否必选")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_v("type")]),_v(" "),_c('td',[_v("String")]),_v(" "),_c('td',[_v("standard")]),_v(" "),_c('td',[_v("控制样式选择")]),_v(" "),_c('td',[_v("standard,mini")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("currentPageNum")]),_v(" "),_c('td',[_v("Number")]),_v(" "),_c('td',[_v("1")]),_v(" "),_c('td',[_v("当前页码")]),_v(" "),_c('td',[_v("> 0")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("total")]),_v(" "),_c('td',[_v("Number")]),_v(" "),_c('td',[_v("0")]),_v(" "),_c('td',[_v("总条数")]),_v(" "),_c('td',[_v(">= 0")]),_v(" "),_c('td',[_v("必选")])]),_v(" "),_c('tr',[_c('td',[_v("pageSize")]),_v(" "),_c('td',[_v("Number")]),_v(" "),_c('td',[_v("20")]),_v(" "),_c('td',[_v("每页条数")]),_v(" "),_c('td',[_v("取自"),_c('code',[_v("pageSizeRange")])]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("withPageSize")]),_v(" "),_c('td',[_v("Boolean")]),_v(" "),_c('td',[_v("true")]),_v(" "),_c('td',[_v("是否展示"),_c('code',[_v("pageSize")]),_v("设置挂件")]),_v(" "),_c('td'),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("pageSizeRange")]),_v(" "),_c('td',[_v("Array")]),_v(" "),_c('td',[_v("[10, 20, 50, 100]")]),_v(" "),_c('td',[_c('code',[_v("pageSize")]),_v("设置挂件的下拉菜单选项范围 "),_c('code',[_v("withPageSize")]),_v("为 true 时生效")]),_v(" "),_c('td'),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("rangeLength")]),_v(" "),_c('td',[_v("Number")]),_v(" "),_c('td',[_v("10")]),_v(" "),_c('td',[_v("页码按钮的展示个数")]),_v(" "),_c('td',[_v("> 1")]),_v(" "),_c('td',[_v("可选")])])])])}}]
	    };
	  

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(208)

	/* script */
	__vue_exports__ = __webpack_require__(210)

	/* template */
	var __vue_template__ = __webpack_require__(211)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/ubuntu/xcui/src/demos/loading.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-07e291ab"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-07e291ab", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-07e291ab", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] loading.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(209);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(24)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-07e291ab&scoped=true!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./loading.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-07e291ab&scoped=true!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./loading.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports


	// module
	exports.push([module.id, "\n.loadWrap[data-v-07e291ab] {\n  padding: 30px;\n  position: relative;\n}\np[data-v-07e291ab] {\n  text-align: left;\n  text-indent: 2em;\n}\n.btnGroup[data-v-07e291ab] {\n  margin-top: 15px;\n}\n.btnGroup label[data-v-07e291ab] {\n  width: 10%;\n  position: relative;\n  top: 5px;\n  text-align: right;\n}\nselect[data-v-07e291ab],\noption[data-v-07e291ab],\nbutton[data-v-07e291ab] {\n  outline: none;\n}\n", ""]);

	// exports


/***/ },
/* 210 */
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
/* 211 */
/***/ function(module, exports) {

	
	    module.exports = {
	      render: function(){with(this){return _c('div',[_c('h1',[_v("Loading 加载组件")]),_v(" "),_c('h2',[_v("使用场景")]),_v(" "),_c('p',[_v("在ajax加载或其他长耗时操作时，在一个页面元素上加入加载中图标，当耗时操作完成后隐藏。")]),_v(" "),_c('h2',[_v("组件能力")]),_v(" "),_m(0),_v(" "),_c('div',{staticClass:"xcui-demo-container col-md-12 col-xs-12 col-lg-12"},[_c('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_c('h3',[_v("加载组件")]),_v(" "),_c('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_c('div',{staticClass:"loadWrap"},[_c('p',[_v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")]),_v(" "),_c('xcui-loading',{attrs:{"show":show,"type":type,"color":color,"size":size,"classname":classname}})],1),_v(" "),_c('div',{staticClass:"btnGroup clearfix"},[_c('label',{staticClass:"control-label col-md-4"},[_v("show：")]),_v(" "),_c('div',{staticClass:"col-md-6"},[_c('button',{staticClass:"btn btn-primary",on:{"click":toogleShow}},[_v(_s(showBtn))])])]),_v(" "),_c('div',{staticClass:"btnGroup clearfix"},[_c('label',{staticClass:"control-label col-md-4"},[_v("type：")]),_v(" "),_c('div',{staticClass:"col-md-6"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(type),expression:"type"}],staticClass:"form-control",on:{"change":function($event){type=Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val})[0]}}},[_c('option',[_v("load1")]),_v(" "),_c('option',[_v("load2")]),_v(" "),_c('option',[_v("load3")])])])]),_v(" "),_c('div',{staticClass:"btnGroup clearfix"},[_c('label',{staticClass:"control-label col-md-4"},[_v("size：")]),_v(" "),_c('div',{staticClass:"col-md-6"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(size),expression:"size"}],staticClass:"form-control",on:{"change":function($event){size=Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val})[0]}}},[_c('option',[_v("sm")]),_v(" "),_c('option',[_v("md")]),_v(" "),_c('option',[_v("lg")])])])]),_v(" "),_c('div',{staticClass:"btnGroup clearfix"},[_c('label',{staticClass:"control-label col-md-4"},[_v("color：")]),_v(" "),_c('div',{staticClass:"col-md-6"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(color),expression:"color"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"支持css颜色格式"},domProps:{"value":_s(color)},on:{"input":function($event){if($event.target.composing)return;color=$event.target.value}}})])])]),_v(" "),_m(1)])]),_v(" "),_c('h2',[_v("Props")]),_v(" "),_m(2)])}},
	      staticRenderFns: [function(){with(this){return _c('ul',[_c('li',[_v("提供3种css加载样式。")]),_v(" "),_c('li',[_v("loading需要放在一个拥有定位属性的容器，组件蒙层大小为父元素大小。")]),_v(" "),_c('li',[_v("css动画颜色可定制。")]),_v(" "),_c('li',[_v("提供三种可选尺寸。")]),_v(" "),_c('li',[_v("可通过自定义类名增加特殊定制。")])])}},function(){with(this){return _c('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_c('pre',[_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("div")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("loadWrap"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n     "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("p")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("p")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n     "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-loading")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v(":show")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("show"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n              "),_c('span',{staticClass:"token attr-name"},[_v(":type")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("type"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n              "),_c('span',{staticClass:"token attr-name"},[_v(":color")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("color"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n              "),_c('span',{staticClass:"token attr-name"},[_v(":size")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("size"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n              "),_c('span',{staticClass:"token attr-name"},[_v(":classname")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("classname"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-loading")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("div")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n   "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("div")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("btnGroup clearfix"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n       "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("label")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("control-label col-md-4"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("show："),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("label")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n       "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("div")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("col-md-6"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n           "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("button")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("btn btn-primary"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("@click")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("toogleShow"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_c('span',{staticClass:"token punctuation"},[_v("{")]),_c('span',{staticClass:"token punctuation"},[_v("{")]),_v("showBtn"),_c('span',{staticClass:"token punctuation"},[_v("}")]),_c('span',{staticClass:"token punctuation"},[_v("}")]),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("button")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n       "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("div")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n   "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("div")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n   "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("div")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("btnGroup clearfix"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n       "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("label")]),_v("  "),_c('span',{staticClass:"token attr-name"},[_v("class")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("control-label col-md-4"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("type："),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("label")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n       "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("div")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("col-md-6"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n           "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("select")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("form-control"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("v-model")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("type"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n               "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("option")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("load1"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("option")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n               "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("option")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("load2"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("option")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n               "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("option")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("load3"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("option")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n           "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("select")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n       "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("div")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n   "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("div")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n   "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("div")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("btnGroup clearfix"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n       "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("label")]),_v("  "),_c('span',{staticClass:"token attr-name"},[_v("class")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("control-label col-md-4"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("size："),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("label")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n       "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("div")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("col-md-6"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n           "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("select")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("form-control"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("v-model")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("size"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n               "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("option")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("sm"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("option")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n               "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("option")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("md"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("option")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n               "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("option")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("lg"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("option")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n           "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("select")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n       "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("div")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n   "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("div")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n   "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("div")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("btnGroup clearfix"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n       "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("label")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("control-label col-md-4"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("color："),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("label")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n       "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("div")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("col-md-6"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n           "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("input")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("form-control"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("type")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("text"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("v-model")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("color"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("placeholder")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("支持css颜色格式"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n       "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("div")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n   "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("div")]),_c('span',{staticClass:"token punctuation"},[_v(">")])])])])}},function(){with(this){return _c('table',{staticClass:"table"},[_c('thead',[_c('tr',[_c('th',[_v("名字")]),_v(" "),_c('th',[_v("类型")]),_v(" "),_c('th',[_v("默认")]),_v(" "),_c('th',[_v("描述")]),_v(" "),_c('th',[_v("可选范围")]),_v(" "),_c('th',[_v("是否必选")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_v("show")]),_v(" "),_c('td',[_v("Boolean")]),_v(" "),_c('td',[_v("false")]),_v(" "),_c('td',[_v("控制显示隐藏")]),_v(" "),_c('td',[_v("true/false")]),_v(" "),_c('td',[_v("必选")])]),_v(" "),_c('tr',[_c('td',[_v("type")]),_v(" "),_c('td',[_v("String")]),_v(" "),_c('td',[_v("load2")]),_v(" "),_c('td',[_v("控制样式选择")]),_v(" "),_c('td',[_v("load1-load3")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("size")]),_v(" "),_c('td',[_v("String")]),_v(" "),_c('td',[_v("md")]),_v(" "),_c('td',[_v("控制大小")]),_v(" "),_c('td',[_v("sm/md/lg")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("color")]),_v(" "),_c('td',[_v("String")]),_v(" "),_c('td',[_v("无")]),_v(" "),_c('td',[_v("控制颜色")]),_v(" "),_c('td',[_v("css色值")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("classname")]),_v(" "),_c('td',[_v("String")]),_v(" "),_c('td',[_v("无")]),_v(" "),_c('td',[_v("自定义类名")]),_v(" "),_c('td'),_v(" "),_c('td',[_v("可选")])])])])}}]
	    };
	  

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(213)

	/* script */
	__vue_exports__ = __webpack_require__(215)

	/* template */
	var __vue_template__ = __webpack_require__(216)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/ubuntu/xcui/src/demos/popover.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-23153294", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-23153294", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] popover.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(214);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(24)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-23153294!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./popover.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-23153294!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./popover.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports


	// module
	exports.push([module.id, "\n.container{\n    margin-top:100px;\n}\n.define-class{\n    background:#ffab47;\n    color:#fff;\n    width: 100px;\n}\n.title-class{\n    background:#46c3c1;\n    color:#fff;\n    width: 150px;\n}\n.content-class{\n    width: 150px;\n}\n", ""]);

	// exports


/***/ },
/* 215 */
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
/* 216 */
/***/ function(module, exports) {

	
	    module.exports = {
	      render: function(){with(this){return _c('div',[_c('h1',[_v("Popover 工具提示")]),_v(" "),_c('h2',[_v("使用场景")]),_v(" "),_m(0),_v(" "),_c('h2',[_v("DEMO")]),_v(" "),_c('div',{staticClass:"xcui-demo-container col-md-12 col-xs-12 col-lg-12"},[_c('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_c('h3',[_v("Popover")]),_v(" "),_c('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_c('xcui-popover',{attrs:{"effect":"fadein","placement":"bottom","title":"This is Title","trigger":"click","content":htmlContent}},[_c('button',{staticClass:"btn btn-default "},[_v("Click Popover on bottom")])]),_v(" "),_c('xcui-popover',{attrs:{"effect":"scale","placement":"left","title":"This is Title","trigger":"click","content":"Popover on left"}},[_c('button',{staticClass:"btn btn-default "},[_v("Click Popover on left")])]),_v(" "),_c('xcui-popover',{attrs:{"effect":"fadein","placement":"top","title":"This is Title","content":"Popover on top"}},[_c('button',{staticClass:"btn btn-default "},[_v(" Hover Popover on top")])]),_v(" "),_c('xcui-popover',{attrs:{"effect":"scale","placement":"right","title":"This is Title","title-class":'title-class',"content-class":'content-class',"content":"Popover on right"}},[_c('button',{staticClass:"btn btn-default "},[_v("Hover Popover on right")])])],1),_v(" "),_m(1)])]),_v(" "),_c('h2',[_v("Props")]),_v(" "),_m(2)])}},
	      staticRenderFns: [function(){with(this){return _c('ul',[_c('li',[_v("需要hover或click时悬浮提示更多详情")]),_v(" "),_c('li',[_v("支持自定义提示框样式")]),_v(" "),_c('li',[_v("支持两种悬浮框过渡样式:  "),_c('code',[_v("scale")]),_v(" 和 "),_c('code',[_v("fadein")])])])}},function(){with(this){return _c('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_c('pre',[_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-popover")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("effect")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("fadein"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("placement")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("bottom"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("title")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("This is Title"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("trigger")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("click"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v(":content")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("htmlContent"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n   "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("button")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("btn btn-default "),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("Click Popover on bottom"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("button")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-popover")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-popover")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("effect")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("scale"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("placement")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("left"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("title")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("This is Title"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("trigger")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("click"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("  "),_c('span',{staticClass:"token attr-name"},[_v("content")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("Popover on left"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n   "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("button")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("btn btn-default "),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("Click Popover on left"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("button")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-popover")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-popover")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("effect")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("fadein"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("placement")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("top"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("title")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("This is Title"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("  "),_c('span',{staticClass:"token attr-name"},[_v("content")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("Popover on top"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n   "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("button")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("btn btn-default "),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v(" Hover Popover on top"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("button")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-popover")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-popover")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("effect")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("scale"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("placement")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("right"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("title")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("This is Title"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v(":title-class")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_c('span',{staticClass:"token punctuation"},[_v("'")]),_v("title-class"),_c('span',{staticClass:"token punctuation"},[_v("'")]),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v(":content-class")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_c('span',{staticClass:"token punctuation"},[_v("'")]),_v("content-class"),_c('span',{staticClass:"token punctuation"},[_v("'")]),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("content")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("Popover on right"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n   "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("button")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("btn btn-default "),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("Hover Popover on right"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("button")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-popover")]),_c('span',{staticClass:"token punctuation"},[_v(">")])])])])}},function(){with(this){return _c('table',{staticClass:"table"},[_c('thead',[_c('tr',[_c('th',[_v("名字")]),_v(" "),_c('th',[_v("类型")]),_v(" "),_c('th',[_v("默认")]),_v(" "),_c('th',[_v("描述")]),_v(" "),_c('th',[_v("是否必选")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_v("type")]),_v(" "),_c('td',[_v("String")]),_v(" "),_c('td',[_v("popover")]),_v(" "),_c('td',[_v("提示类型")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("trigger")]),_v(" "),_c('td',[_v("String")]),_v(" "),_c('td',[_v("hover")]),_v(" "),_c('td',[_v("悬浮触发方式")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("effect")]),_v(" "),_c('td',[_v("String")]),_v(" "),_c('td',[_v("scale")]),_v(" "),_c('td',[_v("悬浮过渡样式")]),_v(" "),_c('td',[_v("可选, scale/fadein")])]),_v(" "),_c('tr',[_c('td',[_v("placement")]),_v(" "),_c('td',[_v("String")]),_v(" "),_c('td',[_v("空字符串")]),_v(" "),_c('td',[_v("悬浮相对位置")]),_v(" "),_c('td',[_v("必选")])]),_v(" "),_c('tr',[_c('td',[_v("title")]),_v(" "),_c('td',[_v("String")]),_v(" "),_c('td',[_v("空字符串")]),_v(" "),_c('td',[_v("popover提示标题")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("content")]),_v(" "),_c('td',[_v("String")]),_v(" "),_c('td',[_v("空字符串")]),_v(" "),_c('td',[_v("提示内容")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("classname")]),_v(" "),_c('td',[_v("String")]),_v(" "),_c('td',[_v("空字符串")]),_v(" "),_c('td',[_v("自定义样式")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("tooltip-class")]),_v(" "),_c('td',[_v("String")]),_v(" "),_c('td',[_v("Object")]),_v(" "),_c('td',[_v("tootip提示框样式")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("title-class")]),_v(" "),_c('td',[_v("Object")]),_v(" "),_c('td',[_v("Object")]),_v(" "),_c('td',[_v("popover标题样式")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("content-class")]),_v(" "),_c('td',[_v("Object")]),_v(" "),_c('td',[_v("Object")]),_v(" "),_c('td',[_v("popover内容样式")]),_v(" "),_c('td',[_v("可选")])])])])}}]
	    };
	  

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(218)

	/* script */
	__vue_exports__ = __webpack_require__(220)

	/* template */
	var __vue_template__ = __webpack_require__(221)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/ubuntu/xcui/src/demos/tooltip.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-47aac4f2", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-47aac4f2", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] tooltip.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(219);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(24)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-47aac4f2!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tooltip.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-47aac4f2!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tooltip.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports


	// module
	exports.push([module.id, "\n.container{\n    margin-top:100px;\n}\n.define-class{\n    background:#ffab47;\n    color:#fff;\n    width: 100px;\n}\n.title-class{\n    background:#46c3c1;\n    color:#fff;\n    width: 150px;\n}\n.content-class{\n    width: 150px;\n}\n", ""]);

	// exports


/***/ },
/* 220 */
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
/* 221 */
/***/ function(module, exports) {

	
	    module.exports = {
	      render: function(){with(this){return _c('div',[_c('h1',[_v("Tooltip 工具提示")]),_v(" "),_c('h2',[_v("使用场景")]),_v(" "),_m(0),_v(" "),_c('h2',[_v("DEMO")]),_v(" "),_c('div',{staticClass:"xcui-demo-container col-md-12 col-xs-12 col-lg-12"},[_c('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_c('h3',[_v("Popover")]),_v(" "),_c('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_c('xcui-tooltip',{attrs:{"effect":"fadein","placement":"bottom","title":"This is Title","content":htmlContent}},[_c('button',{staticClass:"btn btn-default "},[_v("Hover tooltip on bottom")])]),_v(" "),_c('xcui-tooltip',{attrs:{"effect":"scale","placement":"top","title":"This is Title","content":"Tooltip on left"}},[_c('button',{staticClass:"btn btn-default "},[_v("Hover tooltip on left")])]),_v(" "),_c('xcui-tooltip',{attrs:{"effect":"fadein","placement":"top","title":"This is Title","trigger":"click","content":"Tooltip on top"}},[_c('button',{staticClass:"btn btn-default "},[_v(" Click tooltip on top")])]),_v(" "),_c('xcui-tooltip',{attrs:{"effect":"scale","placement":"right","title":"This is Title","trigger":"click","title-class":'title-class',"content-class":'content-class',"content":"Tooltip on right"}},[_c('button',{staticClass:"btn btn-default "},[_v("Click tooltip on right")])])],1),_v(" "),_m(1)])]),_v(" "),_c('h2',[_v("Props")]),_v(" "),_m(2)])}},
	      staticRenderFns: [function(){with(this){return _c('ul',[_c('li',[_v("需要hover或click时悬浮提示更多详情")]),_v(" "),_c('li',[_v("支持自定义提示框样式")]),_v(" "),_c('li',[_v("支持两种悬浮框过渡样式:  "),_c('code',[_v("scale")]),_v(" 和 "),_c('code',[_v("fadein")])])])}},function(){with(this){return _c('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_c('pre',[_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-tooltip")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("effect")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("fadein"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("placement")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("bottom"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("title")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("This is Title"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v(":content")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("htmlContent"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n   "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("button")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("btn btn-default "),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("Hover tooltip on bottom"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("button")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-tooltip")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-tooltip")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("effect")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("scale"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("placement")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("top"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("title")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("This is Title"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("content")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("Tooltip on left"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n   "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("button")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("btn btn-default "),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("Hover tooltip on left"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("button")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-tooltip")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-tooltip")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("effect")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("fadein"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("placement")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("top"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("title")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("This is Title"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("  "),_c('span',{staticClass:"token attr-name"},[_v("trigger")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("click"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("  "),_c('span',{staticClass:"token attr-name"},[_v("content")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("Tooltip on top"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n   "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("button")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("btn btn-default "),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v(" Click tooltip on top"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("button")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-tooltip")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-tooltip")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("effect")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("scale"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("placement")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("right"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("title")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("This is Title"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("trigger")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("click"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("  "),_c('span',{staticClass:"token attr-name"},[_v(":title-class")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_c('span',{staticClass:"token punctuation"},[_v("'")]),_v("title-class"),_c('span',{staticClass:"token punctuation"},[_v("'")]),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v(":content-class")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_c('span',{staticClass:"token punctuation"},[_v("'")]),_v("content-class"),_c('span',{staticClass:"token punctuation"},[_v("'")]),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("content")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("Tooltip on right"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n   "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("button")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("btn btn-default "),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("Click tooltip on right"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("button")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-tooltip")]),_c('span',{staticClass:"token punctuation"},[_v(">")])])])])}},function(){with(this){return _c('table',{staticClass:"table"},[_c('thead',[_c('tr',[_c('th',[_v("名字")]),_v(" "),_c('th',[_v("类型")]),_v(" "),_c('th',[_v("默认")]),_v(" "),_c('th',[_v("描述")]),_v(" "),_c('th',[_v("是否必选")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_v("type")]),_v(" "),_c('td',[_v("String")]),_v(" "),_c('td',[_v("popover")]),_v(" "),_c('td',[_v("提示类型")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("trigger")]),_v(" "),_c('td',[_v("String")]),_v(" "),_c('td',[_v("hover")]),_v(" "),_c('td',[_v("悬浮触发方式")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("effect")]),_v(" "),_c('td',[_v("String")]),_v(" "),_c('td',[_v("scale")]),_v(" "),_c('td',[_v("悬浮过渡样式")]),_v(" "),_c('td',[_v("可选, scale/fadein")])]),_v(" "),_c('tr',[_c('td',[_v("placement")]),_v(" "),_c('td',[_v("String")]),_v(" "),_c('td',[_v("空字符串")]),_v(" "),_c('td',[_v("悬浮相对位置")]),_v(" "),_c('td',[_v("必选")])]),_v(" "),_c('tr',[_c('td',[_v("title")]),_v(" "),_c('td',[_v("String")]),_v(" "),_c('td',[_v("空字符串")]),_v(" "),_c('td',[_v("popover提示标题")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("content")]),_v(" "),_c('td',[_v("String")]),_v(" "),_c('td',[_v("空字符串")]),_v(" "),_c('td',[_v("提示内容")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("classname")]),_v(" "),_c('td',[_v("String")]),_v(" "),_c('td',[_v("空字符串")]),_v(" "),_c('td',[_v("自定义样式")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("tooltip-class")]),_v(" "),_c('td',[_v("String")]),_v(" "),_c('td',[_v("Object")]),_v(" "),_c('td',[_v("tootip提示框样式")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("title-class")]),_v(" "),_c('td',[_v("Object")]),_v(" "),_c('td',[_v("Object")]),_v(" "),_c('td',[_v("popover标题样式")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("content-class")]),_v(" "),_c('td',[_v("Object")]),_v(" "),_c('td',[_v("Object")]),_v(" "),_c('td',[_v("popover内容样式")]),_v(" "),_c('td',[_v("可选")])])])])}}]
	    };
	  

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(223)

	/* script */
	__vue_exports__ = __webpack_require__(225)

	/* template */
	var __vue_template__ = __webpack_require__(226)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/ubuntu/xcui/src/demos/suggestion.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-71588936"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-71588936", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-71588936", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] suggestion.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(224);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(24)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-71588936&scoped=true!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./suggestion.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-71588936&scoped=true!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./suggestion.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports


	// module
	exports.push([module.id, "\n.block-item[data-v-71588936] {\n  margin: 0 30px 50px;\n  float: left;\n}\n", ""]);

	// exports


/***/ },
/* 225 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    data: function data() {
	        return {
	            city: {},
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
	            constellation: {},
	            constellationValue: '',
	            constellationSuggestions: ['水瓶', '双鱼', '白羊', '金牛', '双子', '巨蟹', '狮子', '处女', '天秤', '天蝎', '射手', '魔羯'],
	            requestWord: {},
	            remoteSug: [],
	            remoteUrl: 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?cb=window.bdsug.sug&wd=',
	            requestWord2: {},
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
	            var url = this.remoteUrl + this.requestWord.text;
	            var script = document.createElement('script');
	            script.src = url;
	            document.body.appendChild(script);
	            script.onload = function (res) {
	                document.body.removeChild(script);
	            };
	        },
	        request2: function request2() {
	            var url = this.remoteUrl2 + this.requestWord2.text;
	            var script = document.createElement('script');
	            script.src = url;
	            document.body.appendChild(script);
	            script.onload = function (res) {
	                document.body.removeChild(script);
	            };
	        }
	    },
	    mounted: function mounted() {
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
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('demo', [_c('example', {
	    attrs: {
	      "title": "string数组 sugs:"
	    }
	  }, [_c('div', [_vm._v("constellation : " + _vm._s(_vm.constellation))]), _vm._v(" "), _c('div', {
	    staticStyle: {
	      "width": "200px"
	    }
	  }, [_c('xcui-suggestion', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.constellation),
	      expression: "constellation"
	    }],
	    attrs: {
	      "id": "constellation",
	      "name": "constellation",
	      "placeholder": "请输入星座",
	      "suggestions": _vm.constellationSuggestions
	    },
	    domProps: {
	      "value": (_vm.constellation)
	    },
	    on: {
	      "input": function($event) {
	        _vm.constellation = $event
	      }
	    }
	  })], 1)]), _vm._v(" "), _c('example', {
	    attrs: {
	      "title": "object数组 sugs:"
	    }
	  }, [_c('div', [_vm._v("city: " + _vm._s(_vm.city))]), _vm._v(" "), _c('div', {
	    staticStyle: {
	      "width": "200px"
	    }
	  }, [_c('xcui-suggestion', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.city),
	      expression: "city"
	    }],
	    attrs: {
	      "id": "city",
	      "name": "city",
	      "placeholder": "请输入城市",
	      "suggestions": _vm.citySuggestions
	    },
	    domProps: {
	      "value": (_vm.city)
	    },
	    on: {
	      "input": function($event) {
	        _vm.city = $event
	      }
	    }
	  })], 1)]), _vm._v(" "), _c('example', {
	    attrs: {
	      "title": "远程sug，string数组 sugs:"
	    }
	  }, [_c('div', [_vm._v("requestWord: " + _vm._s(_vm.requestWord))]), _vm._v(" "), _c('div', {
	    staticStyle: {
	      "width": "200px"
	    }
	  }, [_c('xcui-suggestion', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.requestWord),
	      expression: "requestWord"
	    }],
	    attrs: {
	      "placeholder": "",
	      "check": false,
	      "suggestions": _vm.remoteSug,
	      "input-callback": _vm.request
	    },
	    domProps: {
	      "value": (_vm.requestWord)
	    },
	    on: {
	      "input": function($event) {
	        _vm.requestWord = $event
	      }
	    }
	  }, [_vm._v(">\n      ")])], 1)]), _vm._v(" "), _c('example', {
	    attrs: {
	      "title": "远程sug，object数组 sugs:"
	    }
	  }, [_c('div', [_vm._v("requestWord2: " + _vm._s(_vm.requestWord2))]), _vm._v(" "), _c('div', {
	    staticStyle: {
	      "width": "200px"
	    }
	  }, [_c('xcui-suggestion', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.requestWord2),
	      expression: "requestWord2"
	    }],
	    attrs: {
	      "placeholder": "",
	      "check": false,
	      "suggestions": _vm.remoteSug2,
	      "input-callback": _vm.request2
	    },
	    domProps: {
	      "value": (_vm.requestWord2)
	    },
	    on: {
	      "input": function($event) {
	        _vm.requestWord2 = $event
	      }
	    }
	  })], 1)])], 1)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-71588936", module.exports)
	  }
	}

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(228)

	/* script */
	__vue_exports__ = __webpack_require__(230)

	/* template */
	var __vue_template__ = __webpack_require__(231)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/ubuntu/xcui/src/demos/tag.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-586e9489", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-586e9489", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] tag.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(229);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(24)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-586e9489!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tag.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-586e9489!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tag.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports


	// module
	exports.push([module.id, "\n.define-class{\n    background:#ffab47;\n    color:#fff;\n    border-radius: 6px;\n}\n.define-class:hover{\n    background:red;\n}\n", ""]);

	// exports


/***/ },
/* 230 */
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
/* 231 */
/***/ function(module, exports) {

	
	    module.exports = {
	      render: function(){with(this){return _c('div',[_c('h1',[_v("Tag标签")]),_v(" "),_c('h2',[_v("使用场景")]),_v(" "),_m(0),_v(" "),_c('h2',[_v("DEMO")]),_v(" "),_c('div',{staticClass:"xcui-demo-container col-md-12 col-xs-12 col-lg-12"},[_c('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_c('h3',[_v("基本使用")]),_v(" "),_c('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_c('xcui-tag',{attrs:{"text":'标签'}}),_v(" "),_c('xcui-tag',{attrs:{"disabled":true,"text":'禁用标签'}}),_v(" "),_c('xcui-tag',{attrs:{"closeable":true,"text":'关闭'},on:{"close":closeclick}}),_v(" "),_c('xcui-tag',{attrs:{"closeable":true,"keys":key,"text":'点击不关闭',"aftercloseisshow":afterCloseIsShowTag},on:{"close":closeclick,"click":click}}),_v(" "),_c('xcui-tag',{class:'define-class',attrs:{"text":'自定义样式'},on:{"click":click}})],1),_v(" "),_m(1)]),_v(" "),_c('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_c('h3',[_v("添加标签")]),_v(" "),_c('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_l((tags),function(item){return _c('span',[_c('xcui-tag',{attrs:{"closeable":true,"text":item.text}})],1)}),_v(" "),_c('input',{staticClass:"btn btn-primary",attrs:{"type":"button","value":"添加"},on:{"click":addTag}})],2),_v(" "),_m(2)])]),_v(" "),_c('h2',[_v("Props")]),_v(" "),_m(3)])}},
	      staticRenderFns: [function(){with(this){return _c('ul',[_c('li',[_v("标记事物的属性、分类等特性")]),_v(" "),_c('li',[_v("支持关闭标签、点击标签")]),_v(" "),_c('li',[_v("支持禁用标签")]),_v(" "),_c('li',[_v("支持自定义标签样式")])])}},function(){with(this){return _c('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_c('pre',[_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-tag")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v(":text")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_c('span',{staticClass:"token punctuation"},[_v("'")]),_v("标签"),_c('span',{staticClass:"token punctuation"},[_v("'")]),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-tag")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-tag")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v(":disabled")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("true"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v(":text")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_c('span',{staticClass:"token punctuation"},[_v("'")]),_v("禁用标签"),_c('span',{staticClass:"token punctuation"},[_v("'")]),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-tag")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-tag")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v(":closeable")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("true"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v(":text")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_c('span',{staticClass:"token punctuation"},[_v("'")]),_v("关闭"),_c('span',{staticClass:"token punctuation"},[_v("'")]),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("@close")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("closeclick"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-tag")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-tag")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v(":closeable")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("true"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("@close")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("closeclick"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v(":keys.sync")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("key"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v(":text")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_c('span',{staticClass:"token punctuation"},[_v("'")]),_v("点击不关闭"),_c('span',{staticClass:"token punctuation"},[_v("'")]),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v(":aftercloseisshow.sync")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("afterCloseIsShowTag"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("@click")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("click"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-tag")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-tag")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v(":class")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_c('span',{staticClass:"token punctuation"},[_v("'")]),_v("define-class"),_c('span',{staticClass:"token punctuation"},[_v("'")]),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v(":text")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_c('span',{staticClass:"token punctuation"},[_v("'")]),_v("自定义样式"),_c('span',{staticClass:"token punctuation"},[_v("'")]),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("@click")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("click"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-tag")]),_c('span',{staticClass:"token punctuation"},[_v(">")])])])])}},function(){with(this){return _c('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_c('pre',[_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("span")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("v-for")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("item in tags"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n     "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-tag")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v(":closeable")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("true"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v(":text")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("item.text"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-tag")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("span")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("input")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("type")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("button"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("btn btn-primary"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("value")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("添加"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("@click")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("addTag"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v("/>")])])])])}},function(){with(this){return _c('table',{staticClass:"table"},[_c('thead',[_c('tr',[_c('th',[_v("名字")]),_v(" "),_c('th',[_v("类型")]),_v(" "),_c('th',[_v("默认")]),_v(" "),_c('th',[_v("描述")]),_v(" "),_c('th',[_v("是否必选")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_v("text")]),_v(" "),_c('td',[_v("String")]),_v(" "),_c('td',[_v("空字符串")]),_v(" "),_c('td',[_v("内容")]),_v(" "),_c('td',[_v("必选")])]),_v(" "),_c('tr',[_c('td',[_v("disabled")]),_v(" "),_c('td',[_v("Boolean")]),_v(" "),_c('td',[_v("false")]),_v(" "),_c('td',[_v("是否禁用")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("closeable")]),_v(" "),_c('td',[_v("Boolean")]),_v(" "),_c('td',[_v("false")]),_v(" "),_c('td',[_v("是否可关闭")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("close")]),_v(" "),_c('td',[_v("function")]),_v(" "),_c('td',[_v("无")]),_v(" "),_c('td',[_v("关闭时回调")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("click")]),_v(" "),_c('td',[_v("function")]),_v(" "),_c('td',[_v("无")]),_v(" "),_c('td',[_v("点击标签事件")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("showTag")]),_v(" "),_c('td',[_v("Boolean")]),_v(" "),_c('td',[_v("true")]),_v(" "),_c('td',[_v("是否展示tag")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("aftercloseisshow")]),_v(" "),_c('td',[_v("Boolean")]),_v(" "),_c('td',[_v("false")]),_v(" "),_c('td',[_v("关闭回调后是否展示Tag")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("key")]),_v(" "),_c('td',[_v("String")]),_v(" "),_c('td',[_v("空字符串")]),_v(" "),_c('td',[_v("存储数据")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("class")]),_v(" "),_c('td',[_v("String")]),_v(" "),_c('td',[_v("空字符串")]),_v(" "),_c('td',[_v("自定义样式")]),_v(" "),_c('td',[_v("可选")])])])])}}]
	    };
	  

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(233)

	/* script */
	__vue_exports__ = __webpack_require__(235)

	/* template */
	var __vue_template__ = __webpack_require__(236)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/ubuntu/xcui/src/demos/datepicker.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-4ad0531d", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-4ad0531d", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] datepicker.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(234);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(24)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-4ad0531d!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./datepicker.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-4ad0531d!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./datepicker.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports


	// module
	exports.push([module.id, "\np {\n  padding-left: 30px;\n  font-size: 14px;\n  color: #666;\n}\n.class-name {\n  width: 200px;\n}\n", ""]);

	// exports


/***/ },
/* 235 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    data: function data() {
	        return {
	            valueDemo: '2018-09-09',
	            dateValue: 1477980088896,
	            timeValue: '',
	            datetimeVal1: new Date(),
	            date: {
	                begin: '2015-12-20',
	                end: '2016-09-09'
	            },
	            datetime: {
	                value2: '2016/09/09',
	                end: '2017-02-01 00:00:00'
	            },
	            time: {
	                value: ''
	            },
	            demo: ''
	        };
	    },

	    watch: {
	        valueDemo: function valueDemo(val) {
	            console.log('simple: ' + val);
	        },
	        dateValue: function dateValue(val) {
	            console.log('日期格式: ' + val);
	        },
	        timeValue: function timeValue(val) {
	            console.log('时间选择: ' + val);
	        },
	        datetimeVal1: function datetimeVal1(val) {
	            console.log('日期+时间选择: ' + val);
	        }
	    },
	    methods: {
	        onChange: function onChange(val, oldVal) {
	            console.log(val);
	            console.log(oldVal);
	        },
	        simpleMutate: function simpleMutate(val, oldVal) {
	            alert('val: ' + val + ', oldval: ' + oldVal);
	        }
	    }
	};

/***/ },
/* 236 */
/***/ function(module, exports) {

	
	    module.exports = {
	      render: function(){with(this){return _c('div',[_c('h1',[_v("datepicker 日期选择框")]),_v(" "),_c('h2',[_v("使用场景")]),_v(" "),_m(0),_v(" "),_c('h1',[_v("DEMO")]),_v(" "),_c('div',{staticClass:"xcui-demo-container col-md-12 col-xs-12 col-lg-12"},[_c('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_c('h3',[_v("simple")]),_v(" "),_c('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_c('xcui-datepicker',{directives:[{name:"model",rawName:"v-model",value:(valueDemo),expression:"valueDemo"}],domProps:{"value":(valueDemo)},on:{"input":[function($event){valueDemo=$event},onChange]}})],1),_v(" "),_m(1)]),_v(" "),_c('p',[_v(" 最简单的用法，value双向绑定，日期")]),_v(" "),_c('p',[_v(" value：可以传不同日期格式，例如：date对象 new Date()，日期字符串 2018-09-09，时间搓 1477980169262，也可以不传，默认当天，dateValue值为 时间戳1477980088896")]),_v(" "),_c('p',[_v("Value值改变时会触发mutate事件。参数为[val, oldVal]，对应新日期和老日期")]),_v(" "),_c('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_c('h3',[_v("日期格式")]),_v(" "),_c('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_c('xcui-datepicker',{directives:[{name:"model",rawName:"v-model",value:(dateValue),expression:"dateValue"}],attrs:{"format":"YYYY-MM-DD","min-date":'2016-01-01',"max-date":'2017-11-10'},domProps:{"value":(dateValue)},on:{"input":function($event){dateValue=$event}}})],1),_v(" "),_m(2)]),_v(" "),_c('p',[_v(" format：展示的日期格式，配置例如，分隔符可自选：年-月-日 YYYY-MM-DD，年/月/日 时：分：秒 YYYY/MM/DD hh:mm:ss， 时:分:秒 hh:mm:ss")]),_v(" "),_c('p',[_v(" min-date：日期可选最小值，值类型同value")]),_v(" "),_c('p',[_v(" max-date：日期可选最大值，值类型同value")]),_v(" "),_c('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_c('h3',[_v("日期+时间选择")]),_v(" "),_c('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_c('xcui-datepicker',{directives:[{name:"model",rawName:"v-model",value:(datetimeVal1),expression:"datetimeVal1"}],attrs:{"format":"YYYY/MM/DD hh:mm:ss","hour-range":'1',"minute-range":'1',"second-range":'1',"min-date":datetime.begin,"max-date":datetime.end},domProps:{"value":(datetimeVal1)},on:{"input":function($event){datetimeVal1=$event}}})],1),_v(" "),_m(3)]),_v(" "),_c('p',[_v(" hour-range：小时可选值设置（例如：值为 3 时，小时可选值为0, 3，6，9，12")]),_v(" "),_c('p',[_v(" minute-range：分钟可选值设置，同上")]),_v(" "),_c('p',[_v(" second-range：分钟可选值设置，同上")]),_v(" "),_c('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_c('h3',[_v("样式以及回调配置")]),_v(" "),_c('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_c('xcui-datepicker',{directives:[{name:"model",rawName:"v-model",value:(datetime.value2),expression:"datetime.value2"}],attrs:{"class-name":"class-name","color":"pink","format":"YYYY-MM-DD hh:mm:ss","btn-show":true,"hour-range":'3'},domProps:{"value":(datetime.value2)},on:{"input":[function($event){datetime.value2=$event},onChange]}})],1),_v(" "),_m(4)]),_v(" "),_c('p',[_v(" class-name：日历样式，class名字")]),_v(" "),_c('p',[_v(" color：按钮颜色，值为颜色值，例如：#f00,pink")]),_v(" "),_c('p',[_v(" on-change：选择日期后的回调，参数 val(当前值) oldval(上次值)，onChange(val, oldVal) {}")]),_v(" "),_c('p',[_v(" btn-show: 按钮是否显示")]),_v(" "),_c('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_c('h3',[_v("时间选择")]),_v(" "),_c('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_c('xcui-datepicker',{directives:[{name:"model",rawName:"v-model",value:(timeValue),expression:"timeValue"}],attrs:{"format":"hh:mm:ss"},domProps:{"value":(timeValue)},on:{"input":function($event){timeValue=$event}}})],1),_v(" "),_m(5)]),_v(" "),_c('p',[_v(" 最简单的时间用法")])]),_v(" "),_c('h2',[_v("组件依赖")]),_v(" "),_c('blockquote',[_c('p',[_v("无")])]),_v(" "),_c('h2',[_v("Props")]),_v(" "),_m(6)],1)}},
	      staticRenderFns: [function(){with(this){return _c('ul',[_c('li',[_v("支持日历筛选，日历＋时间，时间筛选")]),_v(" "),_c('li',[_v("可以配置日期的筛选范围，日期格式")]),_v(" "),_c('li',[_v("对于时间的筛选，可以倍数形式定制筛选时间的值，例如分钟可以订制筛选值为15，30，45，60")]),_v(" "),_c('li',[_v("可以直接获取当前的时间")]),_v(" "),_c('li',[_v("年筛选可以直接输入，可以筛选")]),_v(" "),_c('li',[_v("支持定制皮肤颜色")])])}},function(){with(this){return _c('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_c('pre',[_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-datepicker")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("v-model")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("valueDemo"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("@input")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("onChange"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-datepicker")]),_c('span',{staticClass:"token punctuation"},[_v(">")])])])])}},function(){with(this){return _c('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_c('pre',[_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-datepicker")]),_v("\r\n     "),_c('span',{staticClass:"token attr-name"},[_v("v-model")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("dateValue"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\n     "),_c('span',{staticClass:"token attr-name"},[_v("format")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("YYYY-MM-DD"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\n     "),_c('span',{staticClass:"token attr-name"},[_v(":min-date")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_c('span',{staticClass:"token punctuation"},[_v("'")]),_v("2016-01-01"),_c('span',{staticClass:"token punctuation"},[_v("'")]),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n     "),_c('span',{staticClass:"token attr-name"},[_v(":max-date")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_c('span',{staticClass:"token punctuation"},[_v("'")]),_v("2017-11-10"),_c('span',{staticClass:"token punctuation"},[_v("'")]),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-datepicker")]),_c('span',{staticClass:"token punctuation"},[_v(">")])])])])}},function(){with(this){return _c('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_c('pre',[_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-datepicker")]),_v("\r\n     "),_c('span',{staticClass:"token attr-name"},[_v("v-model")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("datetimeVal1"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\n     "),_c('span',{staticClass:"token attr-name"},[_v("format")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("YYYY/MM/DD hh:mm:ss"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\n     "),_c('span',{staticClass:"token attr-name"},[_v(":hour-range")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_c('span',{staticClass:"token punctuation"},[_v("'")]),_v("1"),_c('span',{staticClass:"token punctuation"},[_v("'")]),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n     "),_c('span',{staticClass:"token attr-name"},[_v(":minute-range")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_c('span',{staticClass:"token punctuation"},[_v("'")]),_v("1"),_c('span',{staticClass:"token punctuation"},[_v("'")]),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n     "),_c('span',{staticClass:"token attr-name"},[_v(":second-range")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_c('span',{staticClass:"token punctuation"},[_v("'")]),_v("1"),_c('span',{staticClass:"token punctuation"},[_v("'")]),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n     "),_c('span',{staticClass:"token attr-name"},[_v(":min-date")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("datetime.begin"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n     "),_c('span',{staticClass:"token attr-name"},[_v(":max-date")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("datetime.end"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-datepicker")]),_c('span',{staticClass:"token punctuation"},[_v(">")])])])])}},function(){with(this){return _c('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_c('pre',[_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-datepicker")]),_v("\r\n     "),_c('span',{staticClass:"token attr-name"},[_v("class-name")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("class-name"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\n     "),_c('span',{staticClass:"token attr-name"},[_v("color")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("pink"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\n     "),_c('span',{staticClass:"token attr-name"},[_v("format")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("YYYY-MM-DD hh:mm:ss"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\n     "),_c('span',{staticClass:"token attr-name"},[_v(":btn-show")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("true"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n     "),_c('span',{staticClass:"token attr-name"},[_v("@input")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("onChange"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n     "),_c('span',{staticClass:"token attr-name"},[_v("v-model")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("datetime.value2"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\n     "),_c('span',{staticClass:"token attr-name"},[_v(":hour-range")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_c('span',{staticClass:"token punctuation"},[_v("'")]),_v("3"),_c('span',{staticClass:"token punctuation"},[_v("'")]),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-datepicker")]),_c('span',{staticClass:"token punctuation"},[_v(">")])])])])}},function(){with(this){return _c('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_c('pre',[_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-datepicker")]),_v("\r\n     "),_c('span',{staticClass:"token attr-name"},[_v("v-model")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("timeValue"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\n     "),_c('span',{staticClass:"token attr-name"},[_v("format")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("hh:mm:ss"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-datepicker")]),_c('span',{staticClass:"token punctuation"},[_v(">")])])])])}},function(){with(this){return _c('table',{staticClass:"table"},[_c('thead',[_c('tr',[_c('th',[_v("名字")]),_v(" "),_c('th',[_v("类型")]),_v(" "),_c('th',[_v("默认")]),_v(" "),_c('th',[_v("描述")]),_v(" "),_c('th',[_v("是否双向绑定")]),_v(" "),_c('th',[_v("是否必选")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_v("value")]),_v(" "),_c('td',[_v("String/object/Number")]),_v(" "),_c('td',[_v("无")]),_v(" "),_c('td',[_v("日期 例如：date对象 new Date()，日期字符串 2018-09-09，时间搓 1477980169262")]),_v(" "),_c('td',[_v("双向绑定")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("format")]),_v(" "),_c('td',[_v("String")]),_v(" "),_c('td',[_v("YYYY-MM-DD")]),_v(" "),_c('td',[_v("展示的日期格式，配置例如，分隔符可自选：年-月-日 YYYY-MM-DD，年/月/日 时：分：秒 YYYY/MM/DD hh:mm:ss， 时:分:秒 hh:mm:ss")]),_v(" "),_c('td',[_v("静态属性")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("minDate")]),_v(" "),_c('td',[_v("String")]),_v(" "),_c('td',[_v("无")]),_v(" "),_c('td',[_v("日期可选最小值")]),_v(" "),_c('td',[_v("否")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("maxDate")]),_v(" "),_c('td',[_v("String")]),_v(" "),_c('td',[_v("无")]),_v(" "),_c('td',[_v("日期可选最大值")]),_v(" "),_c('td',[_v("否")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("hourRange")]),_v(" "),_c('td',[_v("Number")]),_v(" "),_c('td',[_v("1")]),_v(" "),_c('td',[_v("小时可选值设置（例如：值为 3 时，小时可选值为0, 3，6，9，12 …）")]),_v(" "),_c('td',[_v("否")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("minuteRange")]),_v(" "),_c('td',[_v("Number")]),_v(" "),_c('td',[_v("1")]),_v(" "),_c('td',[_v("分可选值设置（例如：值为 20 时，分可选值为0, 20，40，60）")]),_v(" "),_c('td',[_v("否")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("secondRange")]),_v(" "),_c('td',[_v("Number")]),_v(" "),_c('td',[_v("1")]),_v(" "),_c('td',[_v("秒可选值设置（例如：值为 20 时，分可选值为0, 20，40，60）")]),_v(" "),_c('td',[_v("否")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("color")]),_v(" "),_c('td',[_v("String")]),_v(" "),_c('td',[_v("无")]),_v(" "),_c('td',[_v("订制按钮颜色，值为颜色值，例如：#f00,pink")]),_v(" "),_c('td',[_v("静态属性")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("btnShow")]),_v(" "),_c('td',[_v("boolean")]),_v(" "),_c('td',[_v("无")]),_v(" "),_c('td',[_v("是否显示日历后面的按钮")]),_v(" "),_c('td',[_v("否")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("class-name")]),_v(" "),_c('td',[_v("String")]),_v(" "),_c('td',[_v("无")]),_v(" "),_c('td',[_v("日历样式，class名字")]),_v(" "),_c('td',[_v("静态属性")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("input")]),_v(" "),_c('td',[_v("object")]),_v(" "),_c('td',[_v("无")]),_v(" "),_c('td',[_v("选择日期后的回调，参数 val(当前值) oldval(上次值) @input")]),_v(" "),_c('td',[_v("否")]),_v(" "),_c('td',[_v("可选")])])])])}}]
	    };
	  

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(238)

	/* script */
	__vue_exports__ = __webpack_require__(240)

	/* template */
	var __vue_template__ = __webpack_require__(241)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/ubuntu/xcui/src/demos/DateRangePicker.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-cd023728", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-cd023728", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] DateRangePicker.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(239);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(24)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-cd023728!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DateRangePicker.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-cd023728!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DateRangePicker.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports


	// module
	exports.push([module.id, "\n.class-name {\n  width: 400px;\n}\n", ""]);

	// exports


/***/ },
/* 240 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    data: function data() {
	        return {
	            myDate: {
	                startDate: '2016-09-01',
	                endDate: '2016-09-10'
	            },
	            myDate2: {},
	            myDate3: {},
	            myTime: {},
	            valueDemo: '',
	            startdate: '2016-09-08 00:02:00',
	            enddate: '2016-09-13 00:02:00',
	            date: {
	                begin: '2015-12-20',
	                end: '2016-11-20',
	                dateLimit: {
	                    months: 1
	                },
	                color: '#f00'
	            },
	            datetime: {
	                begin: '2015-12-20',
	                end: '2017-11-20',
	                dateLimit: {
	                    days: 5
	                },
	                color: '#f00',
	                btnShow: true
	            },
	            time: {
	                inputClass: 'class-name',
	                btnShow: true
	            }
	        };
	    },

	    watch: {
	        valueDemo: function valueDemo(val) {
	            console.log('simple: ' + val);
	        },
	        startdate: function startdate(val) {
	            console.log('日期 + 时间选择: ' + val);
	        }
	    },
	    methods: {
	        onChange: function onChange(val, oldval) {
	            console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
	            console.log('-----------------------------------------');
	            console.log('当前值：' + val.startDate + ' 至 ' + val.endDate);
	            console.log('上次值：' + oldval.startDate + ' 至 ' + oldval.endDate);
	        }
	    },
	    mounted: function mounted() {
	        this.myDate = {
	            startDate: '2016-09-01',
	            endDate: '2016-09-11'
	        };
	    }
	};

/***/ },
/* 241 */
/***/ function(module, exports) {

	
	    module.exports = {
	      render: function(){with(this){return _c('div',[_c('h1',[_v("daterangepicker 双日期选择框")]),_v(" "),_c('h2',[_v("使用场景")]),_v(" "),_m(0),_v(" "),_c('h2',[_v("应用指南")]),_v(" "),_c('p',[_v("要把datepicker放在一个拥有定位属性的容器中,因为datepicker是相对父级元素定位的。")]),_v(" "),_c('h2',[_v("DEMO")]),_v(" "),_c('div',{staticClass:"xcui-demo-container col-md-12 col-xs-12 col-lg-12"},[_c('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_c('h3',[_v("simple")]),_v(" "),_c('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_c('xcui-daterangepicker',{directives:[{name:"model",rawName:"v-model",value:(myDate),expression:"myDate"}],attrs:{"sep":' － '},domProps:{"value":(myDate)},on:{"input":[function($event){myDate=$event},onChange]}})],1),_v(" "),_m(1)]),_v(" "),_c('p',[_v("myDate:"+_s(myDate))]),_v(" "),_c('p',[_v(" 最简单的用法，传入v-model值:{startDate: xxx, endDate: xxx} 其中 startDate：日期开始时间，endDate：日期结束时间")]),_v(" "),_c('p',[_v(" startDate／endDate：可以传不同日期格式，例如：date对象 new Date()，日期字符串 2018-09-09，时间搓 1477980169262，也可以不传，默认当天，date.value值为 时间戳1477980088896")]),_v(" "),_c('p',[_v(" sep：双日历之间间隔符，例如sep值为“ 至 ” 日期格式为 2016-09-08 00:02:00 至 2016-09-13 00:02:00")]),_v(" "),_c('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_c('h3',[_v("日期格式")]),_v(" "),_c('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_c('xcui-daterangepicker',{directives:[{name:"model",rawName:"v-model",value:(myDate2),expression:"myDate2"}],attrs:{"min-date":'2016/11/02',"max-date":'2016/11/22',"date-limit":date.dateLimit},domProps:{"value":(myDate2)},on:{"input":function($event){myDate2=$event}}})],1),_v(" "),_m(2)]),_v(" "),_c('p',[_v(" format,min-date,max-date同datapicker组件配置")]),_v(" "),_c('p',[_v(" date-limit：可选时间范围限制，例如：dateLimit: {months: 1} 一个月 dateLimit: {days: 20} 20天")]),_v(" "),_c('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_c('h3',[_v("日期 + 时间选择")]),_v(" "),_c('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_c('xcui-daterangepicker',{directives:[{name:"model",rawName:"v-model",value:(myDate3),expression:"myDate3"}],attrs:{"format":"YYYY-MM-DD hh:mm:ss","hour-range":'3',"minute-range":'10',"second-range":'20'},domProps:{"value":(myDate3)},on:{"input":function($event){myDate3=$event}}})],1),_v(" "),_m(3)]),_v(" "),_c('p',[_v(" hour-range：小时可选值设置（例如：值为 3 时，小时可选值为0, 3，6，9，12")]),_v(" "),_c('p',[_v(" minute-range：分钟可选值设置，同上")]),_v(" "),_c('p',[_v(" second-range：分钟可选值设置，同上")]),_v(" "),_c('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_c('h3',[_v("样式以及回调配置")]),_v(" "),_c('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_c('xcui-daterangepicker',{attrs:{"class-name":"class-name","color":"pink","format":"YYYY-MM-DD hh:mm:ss","btn-show":true,"hour-range":'3'},on:{"input":onChange}})],1),_v(" "),_m(4)]),_v(" "),_c('p',[_v(" class-name：日历样式，class名字")]),_v(" "),_c('p',[_v(" color：按钮颜色，值为颜色值，例如：#f00,pink")]),_v(" "),_c('p',[_v(" input：选择日期后的回调，参数 val(当前值) oldval(上次值) input(val, oldVal) {}")]),_v(" "),_c('p',[_v(" btn-show: 按钮是否显示")]),_v(" "),_c('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_c('h3',[_v("时间选择")]),_v(" "),_c('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_c('xcui-daterangepicker',{directives:[{name:"model",rawName:"v-model",value:(myTime),expression:"myTime"}],attrs:{"format":"hh:mm:ss"},domProps:{"value":(myTime)},on:{"input":function($event){myTime=$event}}})],1),_v(" "),_m(5)])]),_v(" "),_c('h3',[_v("日历选择，日期＋时间选择")]),_v(" "),_c('h4',[_v("Props")]),_v(" "),_m(6)])}},
	      staticRenderFns: [function(){with(this){return _c('ul',[_c('li',[_v("支持日历筛选，日历＋时间，时间筛选")]),_v(" "),_c('li',[_v("可以配置日期的筛选范围，日期格式")]),_v(" "),_c('li',[_v("对于时间的筛选，可以倍数形式定制筛选时间的值，例如分钟可以订制筛选值为15，30，45，60")]),_v(" "),_c('li',[_v("可以直接获取当前的时间")]),_v(" "),_c('li',[_v("年筛选可以直接输入，可以筛选")]),_v(" "),_c('li',[_v("支持定制皮肤颜色")])])}},function(){with(this){return _c('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_c('pre',[_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-daterangepicker")]),_v("\r\n     "),_c('span',{staticClass:"token attr-name"},[_v("v-model")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("myDate"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\n     "),_c('span',{staticClass:"token attr-name"},[_v("@input")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("onChange"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n     "),_c('span',{staticClass:"token attr-name"},[_v(":sep")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_c('span',{staticClass:"token punctuation"},[_v("'")]),_v(" － "),_c('span',{staticClass:"token punctuation"},[_v("'")]),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-daterangepicker")]),_c('span',{staticClass:"token punctuation"},[_v(">")])])])])}},function(){with(this){return _c('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_c('pre',[_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-daterangepicker")]),_v("\r\n     "),_c('span',{staticClass:"token attr-name"},[_v("v-model")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("myDate2"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\n     "),_c('span',{staticClass:"token attr-name"},[_v(":min-date")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_c('span',{staticClass:"token punctuation"},[_v("'")]),_v("2016/11/02"),_c('span',{staticClass:"token punctuation"},[_v("'")]),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n     "),_c('span',{staticClass:"token attr-name"},[_v(":max-date")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_c('span',{staticClass:"token punctuation"},[_v("'")]),_v("2016/11/22"),_c('span',{staticClass:"token punctuation"},[_v("'")]),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n     "),_c('span',{staticClass:"token attr-name"},[_v(":date-limit")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("date.dateLimit"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-daterangepicker")]),_c('span',{staticClass:"token punctuation"},[_v(">")])])])])}},function(){with(this){return _c('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_c('pre',[_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-daterangepicker")]),_v("\r\n       "),_c('span',{staticClass:"token attr-name"},[_v("format")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("YYYY-MM-DD hh:mm:ss"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\n       "),_c('span',{staticClass:"token attr-name"},[_v("v-model")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("myDate3"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\n       "),_c('span',{staticClass:"token attr-name"},[_v(":hour-range")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_c('span',{staticClass:"token punctuation"},[_v("'")]),_v("3"),_c('span',{staticClass:"token punctuation"},[_v("'")]),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n       "),_c('span',{staticClass:"token attr-name"},[_v(":minute-range")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_c('span',{staticClass:"token punctuation"},[_v("'")]),_v("10"),_c('span',{staticClass:"token punctuation"},[_v("'")]),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n       "),_c('span',{staticClass:"token attr-name"},[_v(":second-range")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_c('span',{staticClass:"token punctuation"},[_v("'")]),_v("20"),_c('span',{staticClass:"token punctuation"},[_v("'")]),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-daterangepicker")]),_c('span',{staticClass:"token punctuation"},[_v(">")])])])])}},function(){with(this){return _c('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_c('pre',[_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-daterangepicker")]),_v("\r\n     "),_c('span',{staticClass:"token attr-name"},[_v("class-name")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("class-name"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\n     "),_c('span',{staticClass:"token attr-name"},[_v("color")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("pink"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\n     "),_c('span',{staticClass:"token attr-name"},[_v("format")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("YYYY-MM-DD hh:mm:ss"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\n     "),_c('span',{staticClass:"token attr-name"},[_v(":btn-show")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("true"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n     "),_c('span',{staticClass:"token attr-name"},[_v("@input")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("onChange"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n     "),_c('span',{staticClass:"token attr-name"},[_v(":hour-range")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_c('span',{staticClass:"token punctuation"},[_v("'")]),_v("3"),_c('span',{staticClass:"token punctuation"},[_v("'")]),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-daterangepicker")]),_c('span',{staticClass:"token punctuation"},[_v(">")])])])])}},function(){with(this){return _c('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_c('pre',[_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-daterangepicker")]),_v("\r\n       "),_c('span',{staticClass:"token attr-name"},[_v("v-model")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("myTime"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\n       "),_c('span',{staticClass:"token attr-name"},[_v("format")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("hh:mm:ss"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-daterangepicker")]),_c('span',{staticClass:"token punctuation"},[_v(">")])])])])}},function(){with(this){return _c('table',{staticClass:"table"},[_c('thead',[_c('tr',[_c('th',[_v("名字")]),_v(" "),_c('th',[_v("类型")]),_v(" "),_c('th',[_v("默认")]),_v(" "),_c('th',[_v("描述")]),_v(" "),_c('th',[_v("是否双向绑定")]),_v(" "),_c('th',[_v("是否必选")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_v("v-model")]),_v(" "),_c('td',[_v("object")]),_v(" "),_c('td',[_v("{startDate:\"\",endDate:\"\"   }")]),_v(" "),_c('td',[_v("日期开始时间/结束时间")]),_v(" "),_c('td',[_v("双向绑定")]),_v(" "),_c('td',[_v("必选")])]),_v(" "),_c('tr',[_c('td',[_v("minDate")]),_v(" "),_c('td',[_v("String,object,时间戳")]),_v(" "),_c('td',[_v("无")]),_v(" "),_c('td',[_v("日期可选最小值")]),_v(" "),_c('td',[_v("否")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("maxdate")]),_v(" "),_c('td',[_v("String,object,时间戳")]),_v(" "),_c('td',[_v("无")]),_v(" "),_c('td',[_v("日期可选最大值")]),_v(" "),_c('td',[_v("否")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("sep")]),_v(" "),_c('td',[_v("String")]),_v(" "),_c('td',[_v("至")]),_v(" "),_c('td',[_v("双日历之间间隔符")]),_v(" "),_c('td',[_v("否")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("format")]),_v(" "),_c('td',[_v("String")]),_v(" "),_c('td',[_v("YYYY-MM-DD")]),_v(" "),_c('td',[_v("展示的日期格式，配置例如，分隔符可自选：年-月-日 YYYY-MM-DD，年-月-日 时：分：秒 YYYY-MM-DD hh:mm:ss， 时/分/秒 hh/mm/ss")]),_v(" "),_c('td',[_v("静态属性")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("dateLimit")]),_v(" "),_c('td',[_v("object")]),_v(" "),_c('td',[_v("null")]),_v(" "),_c('td',[_v("可选时间范围限制，例如：dateLimit: {months: 1} 一个月 dateLimit: {days: 20} 20天")]),_v(" "),_c('td',[_v("否")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("hourRange")]),_v(" "),_c('td',[_v("Number")]),_v(" "),_c('td',[_v("1")]),_v(" "),_c('td',[_v("小时可选值设置（例如：值为 3 时，小时可选值为0，3，6，9，12 …）")]),_v(" "),_c('td',[_v("否")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("minuteRange")]),_v(" "),_c('td',[_v("Number")]),_v(" "),_c('td',[_v("1")]),_v(" "),_c('td',[_v("分可选值设置（例如：值为 20 时，分可选值为0，20，40）")]),_v(" "),_c('td',[_v("否")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("secondRange")]),_v(" "),_c('td',[_v("Number")]),_v(" "),_c('td',[_v("1")]),_v(" "),_c('td',[_v("秒可选值设置（例如：值为 20 时，分可选值为0，20，40）")]),_v(" "),_c('td',[_v("否")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("color")]),_v(" "),_c('td',[_v("String")]),_v(" "),_c('td',[_v("无")]),_v(" "),_c('td',[_v("订制按钮颜色，值为颜色值，例如：#f00,pink")]),_v(" "),_c('td',[_v("否")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("btnShow")]),_v(" "),_c('td',[_v("boolean")]),_v(" "),_c('td',[_v("无")]),_v(" "),_c('td',[_v("是否显示日历后面的按钮")]),_v(" "),_c('td',[_v("否")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("inputClass")]),_v(" "),_c('td',[_v("Array")]),_v(" "),_c('td',[_v("无")]),_v(" "),_c('td',[_v("日历input输入框的样式，class名字")]),_v(" "),_c('td',[_v("否")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("input")]),_v(" "),_c('td',[_v("object")]),_v(" "),_c('td',[_v("无")]),_v(" "),_c('td',[_v("选择日期后的回调，参数 val(当前值) oldval(上次值) @input")]),_v(" "),_c('td',[_v("否")]),_v(" "),_c('td',[_v("可选")])])])])}}]
	    };
	  

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(243)

	/* script */
	__vue_exports__ = __webpack_require__(245)

	/* template */
	var __vue_template__ = __webpack_require__(250)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/ubuntu/xcui/src/demos/select.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-e52a9246", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-e52a9246", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] select.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(244);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(24)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-e52a9246!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./select.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-e52a9246!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./select.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports


	// module
	exports.push([module.id, "\n.select-demo,\n.xcui-select {\n  width: 200px !important;\n}\n", ""]);

	// exports


/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _jsonp = __webpack_require__(246);

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
	                disable: false
	            }, {
	                name: '2',
	                label: '2',
	                disable: false
	            }, {
	                name: '3',
	                label: '3',
	                disable: false
	            }],
	            multipleDefaultValue: ['3', '2'],
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
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies
	 */

	var debug = __webpack_require__(247)('jsonp');

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
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * This is the web browser implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = __webpack_require__(248);
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	exports.storage = 'undefined' != typeof chrome
	               && 'undefined' != typeof chrome.storage
	                  ? chrome.storage.local
	                  : localstorage();

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
	  // NB: In an Electron preload script, document will be defined but not fully
	  // initialized. Since we know we're in Chrome, we'll just detect this case
	  // explicitly
	  if (typeof window !== 'undefined' && window && typeof window.process !== 'undefined' && window.process.type === 'renderer') {
	    return true;
	  }

	  // is webkit? http://stackoverflow.com/a/16459606/376773
	  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	  return (typeof document !== 'undefined' && document && 'WebkitAppearance' in document.documentElement.style) ||
	    // is firebug? http://stackoverflow.com/a/398120/376773
	    (typeof window !== 'undefined' && window && window.console && (console.firebug || (console.exception && console.table))) ||
	    // is firefox >= v31?
	    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
	    (typeof navigator !== 'undefined' && navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
	    // double check webkit in userAgent just in case we are in a worker
	    (typeof navigator !== 'undefined' && navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
	}

	/**
	 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	 */

	exports.formatters.j = function(v) {
	  try {
	    return JSON.stringify(v);
	  } catch (err) {
	    return '[UnexpectedJSONParseError]: ' + err.message;
	  }
	};


	/**
	 * Colorize log arguments if enabled.
	 *
	 * @api public
	 */

	function formatArgs(args) {
	  var useColors = this.useColors;

	  args[0] = (useColors ? '%c' : '')
	    + this.namespace
	    + (useColors ? ' %c' : ' ')
	    + args[0]
	    + (useColors ? '%c ' : ' ')
	    + '+' + exports.humanize(this.diff);

	  if (!useColors) return;

	  var c = 'color: ' + this.color;
	  args.splice(1, 0, c, 'color: inherit')

	  // the final "%c" is somewhat tricky, because there could be other
	  // arguments passed either before or after the %c, so we need to
	  // figure out the correct index to insert the CSS into
	  var index = 0;
	  var lastC = 0;
	  args[0].replace(/%[a-zA-Z%]/g, function(match) {
	    if ('%%' === match) return;
	    index++;
	    if ('%c' === match) {
	      // we only are interested in the *last* %c
	      // (the user may have provided their own)
	      lastC = index;
	    }
	  });

	  args.splice(lastC, 0, c);
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
	      exports.storage.removeItem('debug');
	    } else {
	      exports.storage.debug = namespaces;
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
	  try {
	    return exports.storage.debug;
	  } catch(e) {}

	  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	  if (typeof process !== 'undefined' && 'env' in process) {
	    return process.env.DEBUG;
	  }
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

	function localstorage() {
	  try {
	    return window.localStorage;
	  } catch (e) {}
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = createDebug.debug = createDebug.default = createDebug;
	exports.coerce = coerce;
	exports.disable = disable;
	exports.enable = enable;
	exports.enabled = enabled;
	exports.humanize = __webpack_require__(249);

	/**
	 * The currently active debug mode names, and names to skip.
	 */

	exports.names = [];
	exports.skips = [];

	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	 */

	exports.formatters = {};

	/**
	 * Previous log timestamp.
	 */

	var prevTime;

	/**
	 * Select a color.
	 * @param {String} namespace
	 * @return {Number}
	 * @api private
	 */

	function selectColor(namespace) {
	  var hash = 0, i;

	  for (i in namespace) {
	    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
	    hash |= 0; // Convert to 32bit integer
	  }

	  return exports.colors[Math.abs(hash) % exports.colors.length];
	}

	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */

	function createDebug(namespace) {

	  function debug() {
	    // disabled?
	    if (!debug.enabled) return;

	    var self = debug;

	    // set `diff` timestamp
	    var curr = +new Date();
	    var ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;

	    // turn the `arguments` into a proper Array
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }

	    args[0] = exports.coerce(args[0]);

	    if ('string' !== typeof args[0]) {
	      // anything else let's inspect with %O
	      args.unshift('%O');
	    }

	    // apply any `formatters` transformations
	    var index = 0;
	    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
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

	    // apply env-specific formatting (colors, etc.)
	    exports.formatArgs.call(self, args);

	    var logFn = debug.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }

	  debug.namespace = namespace;
	  debug.enabled = exports.enabled(namespace);
	  debug.useColors = exports.useColors();
	  debug.color = selectColor(namespace);

	  // env-specific initialization logic for debug instances
	  if ('function' === typeof exports.init) {
	    exports.init(debug);
	  }

	  return debug;
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
/* 249 */
/***/ function(module, exports) {

	/**
	 * Helpers.
	 */

	var s = 1000
	var m = s * 60
	var h = m * 60
	var d = h * 24
	var y = d * 365.25

	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} options
	 * @throws {Error} throw an error if val is not a non-empty string or a number
	 * @return {String|Number}
	 * @api public
	 */

	module.exports = function (val, options) {
	  options = options || {}
	  var type = typeof val
	  if (type === 'string' && val.length > 0) {
	    return parse(val)
	  } else if (type === 'number' && isNaN(val) === false) {
	    return options.long ?
				fmtLong(val) :
				fmtShort(val)
	  }
	  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val))
	}

	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */

	function parse(str) {
	  str = String(str)
	  if (str.length > 10000) {
	    return
	  }
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str)
	  if (!match) {
	    return
	  }
	  var n = parseFloat(match[1])
	  var type = (match[2] || 'ms').toLowerCase()
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n
	    default:
	      return undefined
	  }
	}

	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function fmtShort(ms) {
	  if (ms >= d) {
	    return Math.round(ms / d) + 'd'
	  }
	  if (ms >= h) {
	    return Math.round(ms / h) + 'h'
	  }
	  if (ms >= m) {
	    return Math.round(ms / m) + 'm'
	  }
	  if (ms >= s) {
	    return Math.round(ms / s) + 's'
	  }
	  return ms + 'ms'
	}

	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function fmtLong(ms) {
	  return plural(ms, d, 'day') ||
	    plural(ms, h, 'hour') ||
	    plural(ms, m, 'minute') ||
	    plural(ms, s, 'second') ||
	    ms + ' ms'
	}

	/**
	 * Pluralization helper.
	 */

	function plural(ms, n, name) {
	  if (ms < n) {
	    return
	  }
	  if (ms < n * 1.5) {
	    return Math.floor(ms / n) + ' ' + name
	  }
	  return Math.ceil(ms / n) + ' ' + name + 's'
	}


/***/ },
/* 250 */
/***/ function(module, exports) {

	
	    module.exports = {
	      render: function(){with(this){return _c('div',[_c('h1',[_v("Select多功能选择框")]),_v(" "),_c('h2',[_v("使用场景")]),_v(" "),_m(0),_v(" "),_c('h2',[_v("DEMO")]),_v(" "),_c('div',{staticClass:"xcui-demo-container col-md-12 col-xs-12 col-lg-12"},[_c('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_c('h3',[_v("single - 基本模式 options(Array)")]),_v(" "),_c('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_c('xcui-select',{attrs:{"options":dataSource2},on:{"change":selectChange2}})],1),_v(" "),_m(1)]),_v(" "),_c('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_c('h3',[_v("single - 基本模式 options(Object)")]),_v(" "),_c('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_c('xcui-select',{attrs:{"options":dataSource},on:{"change":selectChange}})],1),_v(" "),_m(2)]),_v(" "),_c('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_c('h3',[_v("自定义label的字段(label='text')")]),_v(" "),_c('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_c('xcui-select',{attrs:{"label":"text","options":dataSource},on:{"change":selectChange}})],1),_v(" "),_m(3)]),_v(" "),_c('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_c('h3',[_v("禁用(:disabled)")]),_v(" "),_c('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_c('xcui-select',{attrs:{"disabled":disable,"options":dataSource},on:{"change":selectChange}})],1),_v(" "),_m(4)]),_v(" "),_c('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_c('h3',[_v("定制label(:custom-label)")]),_v(" "),_c('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_c('xcui-select',{attrs:{"custom-label":reRenderLabel,"options":dataSource},on:{"change":selectChange2}})],1),_v(" "),_m(5)]),_v(" "),_c('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_c('h3',[_v("省市联动")]),_v(" "),_c('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_c('xcui-select',{attrs:{"placeholder":"选择省","options":provinceData},on:{"change":provinceChange}}),_v(" "),_c('xcui-select',{attrs:{"placeholder":"选择市","options":selectCityData},on:{"change":cityChange}}),_v(" "),_c('p',[_v("\r\n            "+_s(selectProvinceValue)+" - "+_s(selectCityValue)+"\n        ")])],1),_v(" "),_m(6)]),_v(" "),_c('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_c('h3',[_v("input Local Search")]),_v(" "),_c('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_c('xcui-select',{attrs:{"class-name":"select-demo","placeholder":"选择一个城市","show-search":"","search-empty-text":"没有搜索结果哎...","options":localSearchSource},on:{"search-change":searchChange,"change":localSearchChange}}),_v("\r\n        输入值: "+_s(localSearchValue)+"\r\n        选择结果: "+_s(localSearchResult)+"\r\n    ")],1),_v(" "),_m(7)]),_v(" "),_c('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_c('h3',[_v("智能输入")]),_v(" "),_c('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_c('xcui-select',{attrs:{"class-name":"select-demo","placeholder":"输入邮箱","show-search":"","options":asyncSearchSource},on:{"search-change":asyncSearchChange,"change":asyncSearchOnChange}})],1),_v(" "),_m(8)]),_v(" "),_c('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_c('h3',[_v("远程数据")]),_v(" "),_c('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_v("\r\n        远程搜索\r\n        "),_c('xcui-select',{attrs:{"class-name":"select-demo","placeholder":"搜索","show-search":"","clear-on-select":"","options":serverSearchSource},on:{"search-change":serverSearchChange,"change":serverSearchOnChange}}),_v("\r\n        "+_s(serverSearchValue)+"\n        "),_c('br'),_v("\r\n        ajax请求不能耦合select组件, 提供EVENT(@search-change)让使用者进行数据获取 & options赋值\r\n    ")],1),_v(" "),_m(9)]),_v(" "),_c('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_c('h3',[_v("option Group (数据格式一)")]),_v(" "),_c('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_c('xcui-select',{attrs:{"class-name":"select-demo","placeholder":"搜索","optgroup":"","selected":optgroupDefaultValue,"options":optgroupSource},on:{"change":optgroupOnChange}})],1),_v(" "),_m(10)]),_v(" "),_c('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_c('h3',[_v("option Group (数据格式二)")]),_v(" "),_c('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_c('xcui-select',{attrs:{"class-name":"select-demo","placeholder":"搜索","optgroup":"","label":"name","options":optgroupSource2},on:{"change":optgroupOnChange2}})],1),_v(" "),_m(11)]),_v(" "),_c('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_c('h3',[_v("multiple select")]),_v(" "),_c('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_c('xcui-select',{attrs:{"class-name":"select-demo","placeholder":"选择多个","multiple":"","selected":multipleDefaultValue,"options":dataSource2},on:{"change":multipleOnChange,"remove":multipleOnRemove}})],1),_v(" "),_m(12)]),_v(" "),_c('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_c('h3',[_v("multiple select")]),_v(" "),_c('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_c('xcui-select',{attrs:{"class-name":"select-demo","placeholder":"选择多个","multiple":"","multiple-max":2,"selected":multipleDefaultValue2,"options":dataSource}})],1),_v(" "),_m(13)]),_v(" "),_c('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_c('h3',[_v("multiple select object")]),_v(" "),_c('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_c('xcui-select',{attrs:{"class-name":"select-demo","placeholder":"选择多个","multiple":"","selected":multipleDefaultValue,"options":multipleObjOptions},on:{"change":multipleObjectOnChange,"remove":multipleObjectOnRemove}})],1),_v(" "),_m(14)])]),_v(" "),_c('h2',[_v("组件依赖")]),_v(" "),_c('blockquote',[_c('p',[_c('a',{attrs:{"href":"https://www.npmjs.com/package/fuzzysearch"}},[_v("fuzzysearch")]),_v(" 模糊搜索模块")])]),_v(" "),_c('h2',[_v("Props")]),_v(" "),_m(15),_v(" "),_c('h2',[_v("Events")]),_v(" "),_m(16),_v(" "),_c('h3',[_v("模式说明")]),_v(" "),_m(17),_v(" "),_c('h3',[_v("参考")]),_v(" "),_m(18)],1)}},
	      staticRenderFns: [function(){with(this){return _c('ol',[_c('li',[_v("替代原生下拉框，支持多选")]),_v(" "),_c('li',[_v("支持Array, Object等格式")]),_v(" "),_c('li',[_v("支持进行输入建议，远程搜索等")]),_v(" "),_c('li',[_v("支持optionGroup")])])}},function(){with(this){return _c('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_c('pre',[_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-select")]),_v("\r\n     "),_c('span',{staticClass:"token attr-name"},[_v("@change")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("selectChange2"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n     "),_c('span',{staticClass:"token attr-name"},[_v(":options")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("dataSource2"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-select")]),_c('span',{staticClass:"token punctuation"},[_v(">")])])])])}},function(){with(this){return _c('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_c('pre',[_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-select")]),_v("\r\n      "),_c('span',{staticClass:"token attr-name"},[_v("@change")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("selectChange"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n      "),_c('span',{staticClass:"token attr-name"},[_v(":options")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("dataSource"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-select")]),_c('span',{staticClass:"token punctuation"},[_v(">")])])])])}},function(){with(this){return _c('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_c('pre',[_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-select")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("label")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("text"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n     "),_c('span',{staticClass:"token attr-name"},[_v("@change")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("selectChange"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n     "),_c('span',{staticClass:"token attr-name"},[_v(":options")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("dataSource"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-select")]),_c('span',{staticClass:"token punctuation"},[_v(">")])])])])}},function(){with(this){return _c('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_c('pre',[_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-select")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v(":disabled")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("disable"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n      "),_c('span',{staticClass:"token attr-name"},[_v("@change")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("selectChange"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n      "),_c('span',{staticClass:"token attr-name"},[_v(":options")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("dataSource"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-select")]),_c('span',{staticClass:"token punctuation"},[_v(">")])])])])}},function(){with(this){return _c('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_c('pre',[_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-select")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v(":custom-label")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("reRenderLabel"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n     "),_c('span',{staticClass:"token attr-name"},[_v("@change")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("selectChange2"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n     "),_c('span',{staticClass:"token attr-name"},[_v(":options")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("dataSource"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-select")]),_c('span',{staticClass:"token punctuation"},[_v(">")])])])])}},function(){with(this){return _c('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_c('pre',[_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-select")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("placeholder")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("选择省"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n     "),_c('span',{staticClass:"token attr-name"},[_v("@change")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("provinceChange"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n     "),_c('span',{staticClass:"token attr-name"},[_v(":options")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("provinceData"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-select")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-select")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("placeholder")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("选择市"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n     "),_c('span',{staticClass:"token attr-name"},[_v("@change")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("cityChange"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n     "),_c('span',{staticClass:"token attr-name"},[_v(":options")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("selectCityData"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-select")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("p")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n     "),_c('span',{staticClass:"token punctuation"},[_v("{")]),_c('span',{staticClass:"token punctuation"},[_v("{")]),_v("selectProvinceValue"),_c('span',{staticClass:"token punctuation"},[_v("}")]),_c('span',{staticClass:"token punctuation"},[_v("}")]),_v(" - "),_c('span',{staticClass:"token punctuation"},[_v("{")]),_c('span',{staticClass:"token punctuation"},[_v("{")]),_v("selectCityValue"),_c('span',{staticClass:"token punctuation"},[_v("}")]),_c('span',{staticClass:"token punctuation"},[_v("}")]),_v("\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("p")]),_c('span',{staticClass:"token punctuation"},[_v(">")])])])])}},function(){with(this){return _c('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_c('pre',[_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-select")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class-name")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("select-demo"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("placeholder")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("选择一个城市"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n      "),_c('span',{staticClass:"token attr-name"},[_v("show-search")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("search-empty-text")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("没有搜索结果哎..."),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\n      "),_c('span',{staticClass:"token attr-name"},[_v("@search-change")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("searchChange"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n      "),_c('span',{staticClass:"token attr-name"},[_v("@change")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("localSearchChange"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n      "),_c('span',{staticClass:"token attr-name"},[_v(":options")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("localSearchSource"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-select")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n 输入值: "),_c('span',{staticClass:"token punctuation"},[_v("{")]),_c('span',{staticClass:"token punctuation"},[_v("{")]),_v("localSearchValue"),_c('span',{staticClass:"token punctuation"},[_v("}")]),_c('span',{staticClass:"token punctuation"},[_v("}")]),_v("\r\n 选择结果: "),_c('span',{staticClass:"token punctuation"},[_v("{")]),_c('span',{staticClass:"token punctuation"},[_v("{")]),_v("localSearchResult"),_c('span',{staticClass:"token punctuation"},[_v("}")]),_c('span',{staticClass:"token punctuation"},[_v("}")])])])}},function(){with(this){return _c('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_c('pre',[_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-select")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class-name")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("select-demo"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("placeholder")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("输入邮箱"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n      "),_c('span',{staticClass:"token attr-name"},[_v("show-search")]),_v("\r\n      "),_c('span',{staticClass:"token attr-name"},[_v("@search-change")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("asyncSearchChange"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n      "),_c('span',{staticClass:"token attr-name"},[_v("@change")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("asyncSearchOnChange"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n      "),_c('span',{staticClass:"token attr-name"},[_v(":options")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("asyncSearchSource"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-select")]),_c('span',{staticClass:"token punctuation"},[_v(">")])])])])}},function(){with(this){return _c('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_c('pre',[_v("\r\n 远程搜索\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-select")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class-name")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("select-demo"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("placeholder")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("搜索"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n      "),_c('span',{staticClass:"token attr-name"},[_v("show-search")]),_v("\r\n      "),_c('span',{staticClass:"token attr-name"},[_v("clear-on-select")]),_v("\r\n      "),_c('span',{staticClass:"token attr-name"},[_v("@search-change")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("serverSearchChange"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n      "),_c('span',{staticClass:"token attr-name"},[_v("@change")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("serverSearchOnChange"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n      "),_c('span',{staticClass:"token attr-name"},[_v(":options")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("serverSearchSource"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-select")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token punctuation"},[_v("{")]),_c('span',{staticClass:"token punctuation"},[_v("{")]),_v("serverSearchValue"),_c('span',{staticClass:"token punctuation"},[_v("}")]),_c('span',{staticClass:"token punctuation"},[_v("}")]),_v("\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("br")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n ajax请求不能耦合select组件, 提供EVENT(@search-change)让使用者进行数据获取 & options赋值")])])}},function(){with(this){return _c('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_c('pre',[_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-select")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class-name")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("select-demo"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("placeholder")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("搜索"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n              "),_c('span',{staticClass:"token attr-name"},[_v("optgroup")]),_v("\r\n              "),_c('span',{staticClass:"token attr-name"},[_v("@change")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("optgroupOnChange"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n              "),_c('span',{staticClass:"token attr-name"},[_v(":selected")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("optgroupDefaultValue"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n              "),_c('span',{staticClass:"token attr-name"},[_v(":options")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("optgroupSource"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-select")]),_c('span',{staticClass:"token punctuation"},[_v(">")])])])])}},function(){with(this){return _c('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_c('pre',[_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-select")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class-name")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("select-demo"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("placeholder")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("搜索"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n              "),_c('span',{staticClass:"token attr-name"},[_v("optgroup")]),_v("\r\n              "),_c('span',{staticClass:"token attr-name"},[_v("label")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("name"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\n              "),_c('span',{staticClass:"token attr-name"},[_v("@change")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("optgroupOnChange2"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n              "),_c('span',{staticClass:"token attr-name"},[_v(":options")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("optgroupSource2"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-select")]),_c('span',{staticClass:"token punctuation"},[_v(">")])])])])}},function(){with(this){return _c('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_c('pre',[_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-select")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class-name")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("select-demo"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("placeholder")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("选择多个"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n              "),_c('span',{staticClass:"token attr-name"},[_v("multiple")]),_v("\r\n              "),_c('span',{staticClass:"token attr-name"},[_v(":selected")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("multipleDefaultValue"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n              "),_c('span',{staticClass:"token attr-name"},[_v("@change")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("multipleOnChange"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n              "),_c('span',{staticClass:"token attr-name"},[_v("@remove")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("multipleOnRemove"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n              "),_c('span',{staticClass:"token attr-name"},[_v(":options")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("dataSource2"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-select")]),_c('span',{staticClass:"token punctuation"},[_v(">")])])])])}},function(){with(this){return _c('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_c('pre',[_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-select")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class-name")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("select-demo"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("placeholder")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("选择多个"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n              "),_c('span',{staticClass:"token attr-name"},[_v("multiple")]),_v("\r\n              "),_c('span',{staticClass:"token attr-name"},[_v(":multiple-max")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_v("2")]),_v("\r\n              "),_c('span',{staticClass:"token attr-name"},[_v(":selected")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("multipleDefaultValue2"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n              "),_c('span',{staticClass:"token attr-name"},[_v(":options")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("dataSource"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-select")]),_c('span',{staticClass:"token punctuation"},[_v(">")])])])])}},function(){with(this){return _c('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_c('pre',[_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-select")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class-name")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("select-demo"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n              "),_c('span',{staticClass:"token attr-name"},[_v("placeholder")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("选择多个"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\n              "),_c('span',{staticClass:"token attr-name"},[_v("multiple")]),_v("\r\n              "),_c('span',{staticClass:"token attr-name"},[_v(":selected")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("multipleDefaultValue"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n              "),_c('span',{staticClass:"token attr-name"},[_v("@change")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("multipleObjectOnChange"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n              "),_c('span',{staticClass:"token attr-name"},[_v("@remove")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("multipleObjectOnRemove"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n              "),_c('span',{staticClass:"token attr-name"},[_v(":options")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("multipleObjOptions"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-select")]),_c('span',{staticClass:"token punctuation"},[_v(">")])])])])}},function(){with(this){return _c('table',{staticClass:"table"},[_c('thead',[_c('tr',[_c('th',[_v("名字")]),_v(" "),_c('th',[_v("类型")]),_v(" "),_c('th',[_v("默认")]),_v(" "),_c('th',[_v("描述")]),_v(" "),_c('th',[_v("是否必选")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_v("className")]),_v(" "),_c('td',[_v("String")]),_v(" "),_c('td',[_v("无")]),_v(" "),_c('td',[_v("自定义css类名")]),_v(" "),_c('td',[_v("否")])]),_v(" "),_c('tr',[_c('td',[_v("placeholder")]),_v(" "),_c('td',[_v("String")]),_v(" "),_c('td',[_v("无")]),_v(" "),_c('td',[_v("选择框默认文字")]),_v(" "),_c('td',[_v("否")])]),_v(" "),_c('tr',[_c('td',[_v("optgroup")]),_v(" "),_c('td',[_v("Boolean")]),_v(" "),_c('td',[_v("false")]),_v(" "),_c('td',[_v("列表分组模式(结合options使用)")]),_v(" "),_c('td',[_v("否")])]),_v(" "),_c('tr',[_c('td',[_v("multiple")]),_v(" "),_c('td',[_v("Boolean")]),_v(" "),_c('td',[_v("false")]),_v(" "),_c('td',[_v("多选")]),_v(" "),_c('td',[_v("否")])]),_v(" "),_c('tr',[_c('td',[_v("showSearch")]),_v(" "),_c('td',[_v("Boolean")]),_v(" "),_c('td',[_v("false")]),_v(" "),_c('td',[_v("是否展示搜索框")]),_v(" "),_c('td',[_v("否")])]),_v(" "),_c('tr',[_c('td',[_v("clearOnSelect")]),_v(" "),_c('td',[_v("Boolean")]),_v(" "),_c('td',[_v("false")]),_v(" "),_c('td',[_v("选择完以后清除搜索内容")]),_v(" "),_c('td',[_v("否")])]),_v(" "),_c('tr',[_c('td',[_v("label")]),_v(" "),_c('td',[_v("String")]),_v(" "),_c('td',[_v("无")]),_v(" "),_c('td',[_v("自定义label展现key(对应数据中key)")]),_v(" "),_c('td',[_v("否")])]),_v(" "),_c('tr',[_c('td',[_v(":multiple-max")]),_v(" "),_c('td',[_v("Number")]),_v(" "),_c('td',[_v("无")]),_v(" "),_c('td',[_v("多选模式下 最多选择数据项，默认0")]),_v(" "),_c('td')]),_v(" "),_c('tr',[_c('td',[_v(":customLabel")]),_v(" "),_c('td',[_v("Function")]),_v(" "),_c('td',[_v("无")]),_v(" "),_c('td',[_v("option内容定制")]),_v(" "),_c('td',[_v("否")])]),_v(" "),_c('tr',[_c('td',[_v(":options")]),_v(" "),_c('td',[_v("Array")]),_v(" "),_c('td',[_v("无")]),_v(" "),_c('td',[_v("默认数据,optgroup模式下数据结构有要求(具体查看demo#option Group)")]),_v(" "),_c('td',[_v("是")])]),_v(" "),_c('tr',[_c('td',[_v(":disabled")]),_v(" "),_c('td',[_v("Boolean")]),_v(" "),_c('td',[_v("false")]),_v(" "),_c('td',[_v("禁用")]),_v(" "),_c('td',[_v("否")])]),_v(" "),_c('tr',[_c('td',[_v(":selected")]),_v(" "),_c('td',[_v("String")]),_v(" "),_c('td',[_v("无")]),_v(" "),_c('td',[_v("默认已选的值")]),_v(" "),_c('td',[_v("否")])])])])}},function(){with(this){return _c('table',{staticClass:"table"},[_c('thead',[_c('tr',[_c('th',[_v("名字")]),_v(" "),_c('th',[_v("类型")]),_v(" "),_c('th',[_v("默认")]),_v(" "),_c('th',[_v("描述")]),_v(" "),_c('th',[_v("是否必选")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_v("@change")]),_v(" "),_c('td',[_v("function(value) / function(value,groupIndex,valueIndex)")]),_v(" "),_c('td',[_v("无")]),_v(" "),_c('td',[_v("值发生变化的时候(2种模式: 普通模式/分组模式)")]),_v(" "),_c('td',[_v("否")])]),_v(" "),_c('tr',[_c('td',[_v("@select")]),_v(" "),_c('td',[_v("function(value) / function(value,groupIndex,valueIndex)")]),_v(" "),_c('td',[_v("无")]),_v(" "),_c('td',[_v("发生了选择的时候(2种模式: 普通模式/分组模式)")]),_v(" "),_c('td',[_v("否")])]),_v(" "),_c('tr',[_c('td',[_v("@searchChange")]),_v(" "),_c('td',[_v("function(searchValue)")]),_v(" "),_c('td',[_v("无")]),_v(" "),_c('td',[_v("搜索值发生变化的时候")]),_v(" "),_c('td',[_v("否")])]),_v(" "),_c('tr',[_c('td',[_v("@remove")]),_v(" "),_c('td',[_v("function(removeValue)")]),_v(" "),_c('td',[_v("无")]),_v(" "),_c('td',[_v("多选模式下移除一个选值的时候")]),_v(" "),_c('td',[_v("否")])])])])}},function(){with(this){return _c('ul',[_c('li',[_c('p',[_v("单选模式:")]),_v(" "),_c('pre',[_v("options数据格式一"),_c('span',{staticClass:"token punctuation"},[_v(":")]),_v(" "),_c('span',{staticClass:"token punctuation"},[_v("[")]),_v("\n    "),_c('span',{staticClass:"token string"},[_v("'item1'")]),_c('span',{staticClass:"token punctuation"},[_v(",")]),_v("\n    "),_c('span',{staticClass:"token string"},[_v("'item2'")]),_v("\n"),_c('span',{staticClass:"token punctuation"},[_v("]")]),_v("\noptions数据格式二"),_c('span',{staticClass:"token punctuation"},[_v(":")]),_v(" "),_c('span',{staticClass:"token punctuation"},[_v("[")]),_v("\n    "),_c('span',{staticClass:"token punctuation"},[_v("{")]),_v("\n        label"),_c('span',{staticClass:"token punctuation"},[_v(":")]),_v(" "),_c('span',{staticClass:"token string"},[_v("'1'")]),_c('span',{staticClass:"token punctuation"},[_v(",")]),_v("\n        disable"),_c('span',{staticClass:"token punctuation"},[_v(":")]),_v(" "),_c('span',{staticClass:"token boolean"},[_v("true")]),_c('span',{staticClass:"token punctuation"},[_v(",")]),_v("\n        name"),_c('span',{staticClass:"token punctuation"},[_v(":")]),_v(" "),_c('span',{staticClass:"token string"},[_v("'1'")]),_v("\n    "),_c('span',{staticClass:"token punctuation"},[_v("}")]),_v("\n"),_c('span',{staticClass:"token punctuation"},[_v("]")]),_v("\n")])]),_v(" "),_c('li',[_c('p',[_v("分组模式:")]),_v(" "),_c('pre',[_v("optgroup    【必选】\nshowSearch  【不支持】\noptions数据格式一 "),_c('span',{staticClass:"token punctuation"},[_v(":")]),_v(" "),_c('span',{staticClass:"token punctuation"},[_v("[")]),_v("\n    "),_c('span',{staticClass:"token punctuation"},[_v("{")]),_v("\n        name"),_c('span',{staticClass:"token punctuation"},[_v(":")]),_v(" "),_c('span',{staticClass:"token string"},[_v("'opt group 1'")]),_c('span',{staticClass:"token punctuation"},[_v(",")]),_v("\n        options"),_c('span',{staticClass:"token punctuation"},[_v(":")]),_v(" "),_c('span',{staticClass:"token punctuation"},[_v("[")]),_v("\n            "),_c('span',{staticClass:"token string"},[_v("'item1'")]),_c('span',{staticClass:"token punctuation"},[_v(",")]),_v("\n            "),_c('span',{staticClass:"token string"},[_v("'item2'")]),_v("\n        "),_c('span',{staticClass:"token punctuation"},[_v("]")]),_v("\n    "),_c('span',{staticClass:"token punctuation"},[_v("}")]),_v("\n"),_c('span',{staticClass:"token punctuation"},[_v("]")]),_v("\noptions数据格式二 "),_c('span',{staticClass:"token punctuation"},[_v(":")]),_v(" "),_c('span',{staticClass:"token punctuation"},[_v("[")]),_v("\n    "),_c('span',{staticClass:"token punctuation"},[_v("{")]),_v("\n        name"),_c('span',{staticClass:"token punctuation"},[_v(":")]),_v(" "),_c('span',{staticClass:"token string"},[_v("'opt group 2'")]),_c('span',{staticClass:"token punctuation"},[_v(",")]),_v("\n        options"),_c('span',{staticClass:"token punctuation"},[_v(":")]),_v(" "),_c('span',{staticClass:"token punctuation"},[_v("[")]),_v("\n            "),_c('span',{staticClass:"token punctuation"},[_v("{")]),_v("\n                label"),_c('span',{staticClass:"token punctuation"},[_v(":")]),_v(" "),_c('span',{staticClass:"token string"},[_v("'1'")]),_c('span',{staticClass:"token punctuation"},[_v(",")]),_v("\n                disable"),_c('span',{staticClass:"token punctuation"},[_v(":")]),_v(" "),_c('span',{staticClass:"token boolean"},[_v("true")]),_v("\n            "),_c('span',{staticClass:"token punctuation"},[_v("}")]),_v("\n        "),_c('span',{staticClass:"token punctuation"},[_v("]")]),_v("\n    "),_c('span',{staticClass:"token punctuation"},[_v("}")]),_v("\n"),_c('span',{staticClass:"token punctuation"},[_v("]")]),_v("\n")])]),_v(" "),_c('li',[_c('p',[_v("多选模式:")]),_v(" "),_c('pre',[_v("multiple 【必选】\nshowSearch  【不支持】\nselected"),_c('span',{staticClass:"token punctuation"},[_v(":")]),_v(" Array\n")])])])}},function(){with(this){return _c('p',[_c('a',{attrs:{"href":"https://select2.github.io/"}},[_v("select2")]),_c('br'),_v(" "),_c('a',{attrs:{"href":"http://ant.design/components/select/"}},[_v("antd-select")]),_c('br'),_v(" "),_c('a',{attrs:{"href":"http://monterail.github.io/vue-multiselect/"}},[_v("vue-multiselect")]),_c('br'),_v(" "),_c('a',{attrs:{"href":"https://josephuspaye.github.io/Keen-UI/#/ui-select-docs"}},[_v("Keen-UI - select")]),_c('br'),_v(" "),_c('a',{attrs:{"href":"http://amazeui.org/javascript/selected"}},[_v("http://amazeui.org/javascript/selected")])])}}]
	    };
	  

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* template */
	var __vue_template__ = __webpack_require__(252)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/ubuntu/xcui/src/demos/message.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-3cab5a14", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-3cab5a14", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] message.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 252 */
/***/ function(module, exports) {

	
	    module.exports = {
	      render: function(){with(this){return _c('div',[_c('h1',[_v("Message信息提示")]),_v(" "),_c('p',[_v("Message提供一种不打断用户操作的轻量级提示方式，顶部居中显示并自动消失。常用于主动操作后的信息提示。")]),_v(" "),_c('h4',[_v("支持4种信息展示类型")]),_v(" "),_m(0),_v(" "),_m(1),_v(" "),_c('h2',[_v("DEMO")]),_v(" "),_c('div',{staticClass:"xcui-demo-container col-md-12 col-xs-12 col-lg-12"},[_c('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_c('h3',[_v("基础用法")]),_v(" "),_c('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_c('button',{staticClass:"btn btn-info",on:{"click":function($event){$Message.show('this is an info message')}}},[_v("info")]),_v(" "),_c('button',{staticClass:"btn btn-success",on:{"click":function($event){$Message.show('this is a success message', 'success')}}},[_v("success")]),_v(" "),_c('button',{staticClass:"btn btn-danger",on:{"click":function($event){$Message.show('this is an error message', 'error')}}},[_v("error")]),_v(" "),_c('button',{staticClass:"btn btn-warning",on:{"click":function($event){$Message.show('this is a info warning', 'warning')}}},[_v("warning")])]),_v(" "),_m(2)])]),_v(" "),_c('h2',[_v("Props")]),_v(" "),_m(3)])}},
	      staticRenderFns: [function(){with(this){return _c('ul',[_c('li',[_v("info：普通信息提示")]),_v(" "),_c('li',[_v("success：成功信息提示")]),_v(" "),_c('li',[_v("error：错误信息提示")]),_v(" "),_c('li',[_v("warning：警告信息提示")])])}},function(){with(this){return _c('p',[_c('code',[_v("this.$Message.show(content:String, type: String, duration: Number)")])])}},function(){with(this){return _c('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_c('pre',[_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("button")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("btn btn-info"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("@click")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("$Message.show("),_c('span',{staticClass:"token punctuation"},[_v("'")]),_v("this is an info message"),_c('span',{staticClass:"token punctuation"},[_v("'")]),_v(")"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("info"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("button")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("button")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("btn btn-success"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("@click")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("$Message.show("),_c('span',{staticClass:"token punctuation"},[_v("'")]),_v("this is a success message"),_c('span',{staticClass:"token punctuation"},[_v("'")]),_v(", "),_c('span',{staticClass:"token punctuation"},[_v("'")]),_v("success"),_c('span',{staticClass:"token punctuation"},[_v("'")]),_v(")"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("success"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("button")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("button")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("btn btn-danger"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("@click")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("$Message.show("),_c('span',{staticClass:"token punctuation"},[_v("'")]),_v("this is an error message"),_c('span',{staticClass:"token punctuation"},[_v("'")]),_v(", "),_c('span',{staticClass:"token punctuation"},[_v("'")]),_v("error"),_c('span',{staticClass:"token punctuation"},[_v("'")]),_v(")"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("error"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("button")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("button")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("btn btn-warning"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("@click")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("$Message.show("),_c('span',{staticClass:"token punctuation"},[_v("'")]),_v("this is a info warning"),_c('span',{staticClass:"token punctuation"},[_v("'")]),_v(", "),_c('span',{staticClass:"token punctuation"},[_v("'")]),_v("warning"),_c('span',{staticClass:"token punctuation"},[_v("'")]),_v(")"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("warning"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("button")]),_c('span',{staticClass:"token punctuation"},[_v(">")])])])])}},function(){with(this){return _c('table',{staticClass:"table"},[_c('thead',[_c('tr',[_c('th',[_v("参数")]),_v(" "),_c('th',[_v("类型")]),_v(" "),_c('th',[_v("默认")]),_v(" "),_c('th',[_v("描述")]),_v(" "),_c('th',[_v("是否必选")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_v("content")]),_v(" "),_c('td',[_v("String")]),_v(" "),_c('td',[_v("-")]),_v(" "),_c('td',[_v("提示信息内容")]),_v(" "),_c('td',[_c('strong',[_v("必选")])])]),_v(" "),_c('tr',[_c('td',[_v("type")]),_v(" "),_c('td',[_v("String")]),_v(" "),_c('td',[_v("info")]),_v(" "),_c('td',[_v("指定提示信息的类型，默认为info类型；可自行配置，有四种选择: info、success、error、warning")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("duration")]),_v(" "),_c('td',[_v("Number")]),_v(" "),_c('td',[_v("-")]),_v(" "),_c('td',[_v("单位: ms, 默认"),_c('strong',[_v("3000")]),_v("毫秒后自动关闭。设置0无效")]),_v(" "),_c('td',[_v("可选")])])])])}}]
	    };
	  

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(254)

	/* script */
	__vue_exports__ = __webpack_require__(256)

	/* template */
	var __vue_template__ = __webpack_require__(257)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/ubuntu/xcui/src/demos/modal.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-4f34945c", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-4f34945c", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] modal.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(255);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(24)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-4f34945c!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./modal.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-4f34945c!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./modal.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports


	// module
	exports.push([module.id, "\n.xcui-modal-demo-title {\n  color: #66ccff;\n}\n", ""]);

	// exports


/***/ },
/* 256 */
/***/ function(module, exports) {

	"use strict";

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
	        showmodal: function showmodal() {
	            this.modal1 = true;
	        }
	    }
	};

	exports.default = ModalDemo;

/***/ },
/* 257 */
/***/ function(module, exports) {

	
	    module.exports = {
	      render: function(){with(this){return _c('div',[_c('h1',[_v("Modal 模态窗口")]),_v(" "),_c('h2',[_v("使用场景")]),_v(" "),_m(0),_v(" "),_c('h2',[_v("Demo")]),_v(" "),_c('div',{staticClass:"xcui-demo-container col-md-12 col-xs-12 col-lg-12"},[_c('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_c('h3',[_v("基础使用")]),_v(" "),_c('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_c('button',{staticClass:"btn btn-default",on:{"click":function($event){modal1 = true}}},[_v("显示对话框")]),_v(" "),_c('xcui-modal',{directives:[{name:"model",rawName:"v-model",value:(modal1),expression:"modal1"}],attrs:{"title":"基础弹窗"},domProps:{"value":(modal1)},on:{"input":function($event){modal1=$event}}},[_c('div',[_v("XCUI，做有品质的外卖UI")])]),_v(" "),_c('div',[_v("通过控制show来显示/隐藏对话框，需要将show设置为.sync双向绑定")])],1),_v(" "),_m(1)]),_v(" "),_c('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_c('h3',[_v("定义元素的显示")]),_v(" "),_c('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_c('button',{staticClass:"btn btn-default",on:{"click":function($event){modal2 = true}}},[_v("自定义页头")]),_v(" "),_c('button',{staticClass:"btn btn-default",on:{"click":function($event){modal3 = true}}},[_v("不带标题栏")]),_v(" "),_c('button',{staticClass:"btn btn-default",on:{"click":function($event){modal4 = true}}},[_v("不带关闭按钮")]),_v(" "),_c('button',{staticClass:"btn btn-default",on:{"click":function($event){modal5 = true}}},[_v("不带页脚")]),_v(" "),_c('button',{staticClass:"btn btn-default",on:{"click":function($event){modal6 = true}}},[_v("不带关闭按钮和页脚")]),_v(" "),_c('xcui-modal',{directives:[{name:"model",rawName:"v-model",value:(modal2),expression:"modal2"}],attrs:{"title":"自定义页头（有slot则无效）"},domProps:{"value":(modal2)},on:{"input":function($event){modal2=$event}}},[_c('span',{staticClass:"xcui-modal-demo-title",slot:"header"},[_v("不一样的页头")]),_v(" "),_c('div',[_v("我跟你不一样，我有你没有的头脑")])]),_v(" "),_c('xcui-modal',{directives:[{name:"model",rawName:"v-model",value:(modal3),expression:"modal3"}],attrs:{"show-header":false},domProps:{"value":(modal3)},on:{"input":function($event){modal3=$event}}},[_c('div',[_v("无头骑士。生前是一名勇猛的骑士，由于在战场上不幸阵亡，首级被敌人割去，因此每逢月黑风高的夜晚他便会骑着一匹同为亡灵的马出没于沉睡谷，四处寻找自己遗失的首级；而每当看见与自己生前长相相似者便会斩其头颅带回。")])]),_v(" "),_c('xcui-modal',{directives:[{name:"model",rawName:"v-model",value:(modal4),expression:"modal4"}],attrs:{"title":"不带关闭按钮","show-close-button":false},domProps:{"value":(modal4)},on:{"input":function($event){modal4=$event}}},[_c('div',[_v("不带关闭按钮")])]),_v(" "),_c('xcui-modal',{directives:[{name:"model",rawName:"v-model",value:(modal5),expression:"modal5"}],attrs:{"title":"不带页脚","show-footer":false},domProps:{"value":(modal5)},on:{"input":function($event){modal5=$event}}},[_c('div',[_v("即使我失去了双脚，我依然顶天立地")])]),_v(" "),_c('xcui-modal',{directives:[{name:"model",rawName:"v-model",value:(modal6),expression:"modal6"}],attrs:{"show-close-button":false,"show-footer":false},domProps:{"value":(modal6)},on:{"input":function($event){modal6=$event}}},[_c('div',[_v("我且问你，除了刷新，你能如何关闭我？")])]),_v(" "),_c('div',[_v("Modal提供了灵活的组件化API和Slot，可以自由控制整个Modal的组成部分。比如，页头、页脚和关闭按钮")])],1),_v(" "),_m(2)]),_v(" "),_c('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_c('h3',[_v("自定义样式")]),_v(" "),_c('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_c('button',{staticClass:"btn btn-default",on:{"click":function($event){modal7 = true}}},[_v("Full对话框")]),_v(" "),_c('button',{staticClass:"btn btn-default",on:{"click":function($event){modal8 = true}}},[_v("Small对话框")]),_v(" "),_c('button',{staticClass:"btn btn-default",on:{"click":function($event){modal9 = true}}},[_v("自定义Style")]),_v(" "),_c('button',{staticClass:"btn btn-default",on:{"click":function($event){modal10 = true}}},[_v("自定义class-name")]),_v(" "),_c('xcui-modal',{directives:[{name:"model",rawName:"v-model",value:(modal7),expression:"modal7"}],attrs:{"size":'full',"title":"Full对话框"},domProps:{"value":(modal7)},on:{"input":function($event){modal7=$event}}},[_c('div',[_v("心宽体肥，宅心仁厚。")])]),_v(" "),_c('xcui-modal',{directives:[{name:"model",rawName:"v-model",value:(modal8),expression:"modal8"}],attrs:{"size":'small',"title":"Small对话框"},domProps:{"value":(modal8)},on:{"input":function($event){modal8=$event}}},[_c('div',[_v("即使我小，这世间也会有我的一席之地。因为我小巧玲珑，精灵剔透。")])]),_v(" "),_c('xcui-modal',{directives:[{name:"model",rawName:"v-model",value:(modal9),expression:"modal9"}],style:({'transform': 'rotate(-10deg)'}),attrs:{"title":"自定义Style"},domProps:{"value":(modal9)},on:{"input":function($event){modal9=$event}}},[_c('div',[_v("身正不怕影子斜")])]),_v(" "),_c('xcui-modal',{directives:[{name:"model",rawName:"v-model",value:(modal10),expression:"modal10"}],attrs:{"title":"自定义class-name","class-name":'xcui-modal-demo-class'},domProps:{"value":(modal10)},on:{"input":function($event){modal10=$event}}},[_c('div',[_v("欲与天公试比高")])]),_v(" "),_c('div',[_v("通过设置size可以快速设置对话框的宽度大小，也可以设置class-name和style自定义Modal的样式")])],1),_v(" "),_m(3)])]),_v(" "),_c('h2',[_v("Props")]),_v(" "),_m(4),_v(" "),_c('h2',[_v("Events")]),_v(" "),_m(5),_v(" "),_c('h2',[_v("Slot")]),_v(" "),_m(6),_v(" "),_c('h2',[_v("Modal 全局方法")]),_v(" "),_m(7),_v(" "),_c('p',[_v("引入方式一：")]),_v(" "),_m(8),_v(" "),_c('p',[_v("引入方式二：")]),_v(" "),_m(9),_v(" "),_c('p',[_v("做好以上准备工作后，即可在组件任何位置调用vm.$confirm等来隐式地创建一个对话框了。")]),_v(" "),_m(10),_v(" "),_m(11),_v(" "),_m(12),_v(" "),_m(13),_v(" "),_m(14),_v(" "),_c('p',[_v("写法1：")]),_v(" "),_m(15),_v(" "),_c('p',[_v("写法2：")]),_v(" "),_m(16),_v(" "),_m(17),_v(" "),_m(18)])}},
	      staticRenderFns: [function(){with(this){return _c('p',[_v("模态对话框，模拟浏览器的 "),_c('code',[_v("alert")]),_v("、"),_c('code',[_v("confirm")]),_v("。在浮层中显示，引导用户进行相关操作。"),_c('br'),_v(" "),_c('code',[_v("Modal")]),_v("提供了两种用法，基础组件使用和封装好的全局实例调用。")])}},function(){with(this){return _c('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_c('pre',[_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("button")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("btn btn-default"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("@click")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("modal1 "),_c('span',{staticClass:"token punctuation"},[_v("=")]),_v(" true"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("显示对话框"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("button")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-modal")]),_v("\r\n "),_c('span',{staticClass:"token attr-name"},[_v("v-model")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("modal1"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\n "),_c('span',{staticClass:"token attr-name"},[_v("title")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("基础弹窗"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("div")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("XCUI，做有品质的外卖UI"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("div")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-modal")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("div")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("通过控制show来显示/隐藏对话框，需要将show设置为.sync双向绑定"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("div")]),_c('span',{staticClass:"token punctuation"},[_v(">")])])])])}},function(){with(this){return _c('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_c('pre',[_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("button")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("btn btn-default"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("@click")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("modal2 "),_c('span',{staticClass:"token punctuation"},[_v("=")]),_v(" true"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("自定义页头"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("button")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("button")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("btn btn-default"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("@click")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("modal3 "),_c('span',{staticClass:"token punctuation"},[_v("=")]),_v(" true"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("不带标题栏"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("button")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("button")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("btn btn-default"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("@click")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("modal4 "),_c('span',{staticClass:"token punctuation"},[_v("=")]),_v(" true"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("不带关闭按钮"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("button")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("button")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("btn btn-default"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("@click")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("modal5 "),_c('span',{staticClass:"token punctuation"},[_v("=")]),_v(" true"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("不带页脚"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("button")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("button")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("btn btn-default"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("@click")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("modal6 "),_c('span',{staticClass:"token punctuation"},[_v("=")]),_v(" true"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("不带关闭按钮和页脚"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("button")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-modal")]),_v("\r\n "),_c('span',{staticClass:"token attr-name"},[_v("v-model")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("modal2"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\n "),_c('span',{staticClass:"token attr-name"},[_v("title")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("自定义页头（有slot则无效）"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("span")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("slot")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("header"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("xcui-modal-demo-title"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("不一样的页头"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("span")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("div")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("我跟你不一样，我有你没有的头脑"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("div")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-modal")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-modal")]),_v("\r\n "),_c('span',{staticClass:"token attr-name"},[_v("v-model")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("modal3"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\n "),_c('span',{staticClass:"token attr-name"},[_v(":show-header")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("false"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("div")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("无头骑士。生前是一名勇猛的骑士，由于在战场上不幸阵亡，首级被敌人割去，因此每逢月黑风高的夜晚他便会骑着一匹同为亡灵的马出没于沉睡谷，四处寻找自己遗失的首级；而每当看见与自己生前长相相似者便会斩其头颅带回。"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("div")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-modal")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-modal")]),_v("\r\n "),_c('span',{staticClass:"token attr-name"},[_v("v-model")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("modal4"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\n "),_c('span',{staticClass:"token attr-name"},[_v("title")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("不带关闭按钮"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\n "),_c('span',{staticClass:"token attr-name"},[_v(":show-close-button")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("false"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("div")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("不带关闭按钮"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("div")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-modal")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-modal")]),_v("\r\n "),_c('span',{staticClass:"token attr-name"},[_v("v-model")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("modal5"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\n "),_c('span',{staticClass:"token attr-name"},[_v("title")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("不带页脚"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\n "),_c('span',{staticClass:"token attr-name"},[_v(":show-footer")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("false"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("div")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("即使我失去了双脚，我依然顶天立地"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("div")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-modal")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-modal")]),_v("\r\n "),_c('span',{staticClass:"token attr-name"},[_v("v-model")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("modal6"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\n "),_c('span',{staticClass:"token attr-name"},[_v(":show-close-button")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("false"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n "),_c('span',{staticClass:"token attr-name"},[_v(":show-footer")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("false"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("div")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("我且问你，除了刷新，你能如何关闭我？"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("div")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-modal")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("div")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("Modal提供了灵活的组件化API和Slot，可以自由控制整个Modal的组成部分。比如，页头、页脚和关闭按钮"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("div")]),_c('span',{staticClass:"token punctuation"},[_v(">")])])])])}},function(){with(this){return _c('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_c('pre',[_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("button")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("btn btn-default"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("@click")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("modal7 "),_c('span',{staticClass:"token punctuation"},[_v("=")]),_v(" true"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("Full对话框"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("button")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("button")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("btn btn-default"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("@click")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("modal8 "),_c('span',{staticClass:"token punctuation"},[_v("=")]),_v(" true"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("Small对话框"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("button")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("button")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("btn btn-default"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("@click")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("modal9 "),_c('span',{staticClass:"token punctuation"},[_v("=")]),_v(" true"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("自定义Style"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("button")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("button")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("btn btn-default"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("@click")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("modal10 "),_c('span',{staticClass:"token punctuation"},[_v("=")]),_v(" true"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("自定义class-name"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("button")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-modal")]),_v("\r\n "),_c('span',{staticClass:"token attr-name"},[_v("v-model")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("modal7"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\n "),_c('span',{staticClass:"token attr-name"},[_v(":size")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_c('span',{staticClass:"token punctuation"},[_v("'")]),_v("full"),_c('span',{staticClass:"token punctuation"},[_v("'")]),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n "),_c('span',{staticClass:"token attr-name"},[_v("title")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("Full对话框"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("div")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("心宽体肥，宅心仁厚。"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("div")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-modal")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-modal")]),_v("\r\n "),_c('span',{staticClass:"token attr-name"},[_v("v-model")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("modal8"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\n "),_c('span',{staticClass:"token attr-name"},[_v(":size")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_c('span',{staticClass:"token punctuation"},[_v("'")]),_v("small"),_c('span',{staticClass:"token punctuation"},[_v("'")]),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n "),_c('span',{staticClass:"token attr-name"},[_v("title")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("Small对话框"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("div")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("即使我小，这世间也会有我的一席之地。因为我小巧玲珑，精灵剔透。"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("div")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-modal")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-modal")]),_v("\r\n "),_c('span',{staticClass:"token attr-name"},[_v("v-model")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("modal9"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\n "),_c('span',{staticClass:"token attr-name"},[_v(":")]),_c('span',{staticClass:"token style-attr language-css"},[_c('span',{staticClass:"token attr-name"},[_c('span',{staticClass:"token attr-name"},[_v("style")])]),_c('span',{staticClass:"token punctuation"},[_v("=\"")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_c('span',{staticClass:"token punctuation"},[_v("{")])]),_c('span',{staticClass:"token string"},[_v("'transform'")]),_c('span',{staticClass:"token punctuation"},[_v(":")]),_v(" "),_c('span',{staticClass:"token string"},[_v("'rotate(-10deg)'")]),_c('span',{staticClass:"token punctuation"},[_c('span',{staticClass:"token punctuation"},[_v("}")])])]),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\r\n "),_c('span',{staticClass:"token attr-name"},[_v("title")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("自定义Style"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("div")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("身正不怕影子斜"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("div")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-modal")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-modal")]),_v("\r\n "),_c('span',{staticClass:"token attr-name"},[_v("v-model")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("modal10"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\n "),_c('span',{staticClass:"token attr-name"},[_v("title")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("自定义class-name"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v("\n "),_c('span',{staticClass:"token attr-name"},[_v(":class-name")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_c('span',{staticClass:"token punctuation"},[_v("'")]),_v("xcui-modal-demo-class"),_c('span',{staticClass:"token punctuation"},[_v("'")]),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("div")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("欲与天公试比高"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("div")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-modal")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("div")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("通过设置size可以快速设置对话框的宽度大小，也可以设置class-name和style自定义Modal的样式"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("div")]),_c('span',{staticClass:"token punctuation"},[_v(">")])])])])}},function(){with(this){return _c('table',{staticClass:"table"},[_c('thead',[_c('tr',[_c('th',[_v("名字")]),_v(" "),_c('th',[_v("类型")]),_v(" "),_c('th',[_v("默认")]),_v(" "),_c('th',[_v("描述")]),_v(" "),_c('th',[_v("是否必选")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_v("show")]),_v(" "),_c('td',[_v("Boolean")]),_v(" "),_c('td',[_v("false")]),_v(" "),_c('td',[_v("对话框是否显示,需要.sync双向绑定")]),_v(" "),_c('td',[_c('strong',[_v("必选")])])]),_v(" "),_c('tr',[_c('td',[_v("content")]),_v(" "),_c('td',[_v("String")]),_v(" "),_c('td',[_v("-")]),_v(" "),_c('td',[_v("对话框的主体内容，如果使用了默认slot的方式，则content无效")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("title")]),_v(" "),_c('td',[_v("String")]),_v(" "),_c('td',[_v("-")]),_v(" "),_c('td',[_v("对话框的标题，如果slot定义了header，则title无效")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("mask-closable")]),_v(" "),_c('td',[_v("Boolean")]),_v(" "),_c('td',[_v("true")]),_v(" "),_c('td',[_v("是否允许点击遮罩层关闭对话框")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("scrollable")]),_v(" "),_c('td',[_v("Boolean")]),_v(" "),_c('td',[_v("false")]),_v(" "),_c('td',[_v("打开Modal后，是否允许底页可滚动")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("show-close-button")]),_v(" "),_c('td',[_v("Boolean")]),_v(" "),_c('td',[_v("true")]),_v(" "),_c('td',[_v("是否显示右上角的关闭按钮")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("show-ok-button")]),_v(" "),_c('td',[_v("Boolean")]),_v(" "),_c('td',[_v("true")]),_v(" "),_c('td',[_v("是否显示确定按钮")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("show-cancel-button")]),_v(" "),_c('td',[_v("Boolean")]),_v(" "),_c('td',[_v("true")]),_v(" "),_c('td',[_v("是否显示取消按钮")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("show-header")]),_v(" "),_c('td',[_v("Boolean")]),_v(" "),_c('td',[_v("true")]),_v(" "),_c('td',[_v("是否显示整个标题栏")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("show-footer")]),_v(" "),_c('td',[_v("Boolean")]),_v(" "),_c('td',[_v("true")]),_v(" "),_c('td',[_v("是否显示整个底边栏")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("ok-text")]),_v(" "),_c('td',[_v("String")]),_v(" "),_c('td',[_v("确定")]),_v(" "),_c('td',[_v("确定按钮的文字")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("cancel-text")]),_v(" "),_c('td',[_v("String")]),_v(" "),_c('td',[_v("取消")]),_v(" "),_c('td',[_v("取消按钮的文字")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("size")]),_v(" "),_c('td',[_v("String")]),_v(" "),_c('td',[_v("middle")]),_v(" "),_c('td',[_v("预设对话框浮层的宽度大小。可选值：small/middle/large/full")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("class-name")]),_v(" "),_c('td',[_v("String")]),_v(" "),_c('td',[_v("-")]),_v(" "),_c('td',[_v("自定义样式类名")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("style")]),_v(" "),_c('td',[_v("object")]),_v(" "),_c('td',[_v("-")]),_v(" "),_c('td',[_v("设置对话框浮层的样式，调整浮层位置等。该属性设置的是.Modal的样式")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("content-style")]),_v(" "),_c('td',[_v("object")]),_v(" "),_c('td',[_v("-")]),_v(" "),_c('td',[_v("设置对话框内容主体的样式。该属性设置的是.Modal-body的样式")]),_v(" "),_c('td',[_v("可选")])])])])}},function(){with(this){return _c('table',{staticClass:"table"},[_c('thead',[_c('tr',[_c('th',[_v("名字")]),_v(" "),_c('th',[_v("描述")]),_v(" "),_c('th',[_v("是否必选")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_v("on-ok")]),_v(" "),_c('td',[_v("点击确定的回调函数。回调函数如果返回真值(true)，则不再关闭对话框；如果返回假值(false)或不返回，则默认执行on-ok后关闭对话框")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("on-cancel")]),_v(" "),_c('td',[_v("点击取消和右上角关闭的回调函数。回调函数如果返回真值(true)，则不再关闭对话框；如果返回假值(false)或不返回，则默认执行on-cancel后关闭对话框")]),_v(" "),_c('td',[_v("可选")])])])])}},function(){with(this){return _c('table',{staticClass:"table"},[_c('thead',[_c('tr',[_c('th',[_v("名字")]),_v(" "),_c('th',[_v("描述")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_v("header")]),_v(" "),_c('td',[_v("自定义页头")])]),_v(" "),_c('tr',[_c('td',[_v("footer")]),_v(" "),_c('td',[_v("自定义页脚内容")])]),_v(" "),_c('tr',[_c('td',[_v("close")]),_v(" "),_c('td',[_v("自定义右上角关闭按钮")])]),_v(" "),_c('tr',[_c('td',[_v("-")]),_v(" "),_c('td',[_v("对话框的主体内容")])])])])}},function(){with(this){return _c('p',[_v("XCUI为Modal提供了便捷的调用方式。在Vue.prototype中添加了快捷的方法：$Modal.show,$Modal.close, $confirm和$alert。因此，在Vue实例代码中，可以使用this.$Modal等方法快捷地创建一个对话框。"),_c('br'),_v("\n但需要在调用这些全局方法之前，先在项目中引入XCUI或xcuiInstall，并调用Vue.use安装。")])}},function(){with(this){return _c('pre',[_c('span',{staticClass:"token keyword"},[_v("import")]),_v(" Vue "),_c('span',{staticClass:"token keyword"},[_v("from")]),_v(" "),_c('span',{staticClass:"token string"},[_v("'vue'")]),_v("\n"),_c('span',{staticClass:"token keyword"},[_v("import")]),_v(" XCUI "),_c('span',{staticClass:"token keyword"},[_v("from")]),_v(" "),_c('span',{staticClass:"token string"},[_v("'xcui'")]),_v(" "),_c('span',{staticClass:"token comment",attrs:{"spellcheck":"true"}},[_v("// 全局引入")]),_v("\nVue"),_c('span',{staticClass:"token punctuation"},[_v(".")]),_c('span',{staticClass:"token function"},[_v("use")]),_c('span',{staticClass:"token punctuation"},[_v("(")]),_v("XCUI"),_c('span',{staticClass:"token punctuation"},[_v(")")]),_v("\n")])}},function(){with(this){return _c('pre',[_c('span',{staticClass:"token keyword"},[_v("import")]),_v(" Vue "),_c('span',{staticClass:"token keyword"},[_v("from")]),_v(" "),_c('span',{staticClass:"token string"},[_v("'vue'")]),_v("\n"),_c('span',{staticClass:"token keyword"},[_v("import")]),_v(" "),_c('span',{staticClass:"token punctuation"},[_v("{")]),_v("xcuiInstall"),_c('span',{staticClass:"token punctuation"},[_v("}")]),_v(" "),_c('span',{staticClass:"token keyword"},[_v("from")]),_v(" "),_c('span',{staticClass:"token string"},[_v("'xcui'")]),_v("\nVue"),_c('span',{staticClass:"token punctuation"},[_v(".")]),_c('span',{staticClass:"token function"},[_v("use")]),_c('span',{staticClass:"token punctuation"},[_v("(")]),_v("xcuiInstall"),_c('span',{staticClass:"token punctuation"},[_v(")")]),_v("\n")])}},function(){with(this){return _c('ol',[_c('li',[_c('strong',[_v("this.$Modal.show(options)")])])])}},function(){with(this){return _c('table',{staticClass:"table"},[_c('thead',[_c('tr',[_c('th',[_v("参数")]),_v(" "),_c('th',[_v("类型")]),_v(" "),_c('th',[_v("默认")]),_v(" "),_c('th',[_v("描述")]),_v(" "),_c('th',[_v("是否必选")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_v("options")]),_v(" "),_c('td',[_v("Object")]),_v(" "),_c('td',[_v("-")]),_v(" "),_c('td',[_v("对话框的参数，属性同props(props.show除外)。注意：使用驼峰式变量名，如"),_c('strong',[_v("onOk")]),_v("，而非on-ok")]),_v(" "),_c('td',[_c('strong',[_v("必选")])])])])])}},function(){with(this){return _c('ol',{attrs:{"start":"2"}},[_c('li',[_c('strong',[_v("this.$Modal.close()")])])])}},function(){with(this){return _c('p',[_c('code',[_v("$Modal.close()")]),_v("提供隐式地关闭对话框全局实例的能力。")])}},function(){with(this){return _c('ol',{attrs:{"start":"3"}},[_c('li',[_c('strong',[_v("this.$confirm(title, content, onOk, onCancel, isRawHTML)")]),_v(" 或 "),_c('strong',[_v("this.$confirm(options, isRawHTML)")])])])}},function(){with(this){return _c('table',{staticClass:"table"},[_c('thead',[_c('tr',[_c('th',[_v("参数")]),_v(" "),_c('th',[_v("类型")]),_v(" "),_c('th',[_v("默认")]),_v(" "),_c('th',[_v("描述")]),_v(" "),_c('th',[_v("是否必选")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_v("title")]),_v(" "),_c('td',[_v("String")]),_v(" "),_c('td',[_v("-")]),_v(" "),_c('td',[_v("对话框的标题")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("content")]),_v(" "),_c('td',[_v("String")]),_v(" "),_c('td',[_v("-")]),_v(" "),_c('td',[_v("对话框的内容，可通过isRawHTML指定是否解析为原生HTML")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("onOk")]),_v(" "),_c('td',[_v("Function")]),_v(" "),_c('td',[_v("-")]),_v(" "),_c('td',[_v("点击确定按钮的回调函数")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("onCancel")]),_v(" "),_c('td',[_v("Function")]),_v(" "),_c('td',[_v("-")]),_v(" "),_c('td',[_v("点击取消按钮或关闭按钮的回调函数")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("options")]),_v(" "),_c('td',[_v("Object")]),_v(" "),_c('td',[_v("-")]),_v(" "),_c('td',[_v("对content(String)是否解析为原生HTML")]),_v(" "),_c('td',[_v("可选")])])])])}},function(){with(this){return _c('table',{staticClass:"table"},[_c('thead',[_c('tr',[_c('th',[_v("参数")]),_v(" "),_c('th',[_v("类型")]),_v(" "),_c('th',[_v("默认")]),_v(" "),_c('th',[_v("描述")]),_v(" "),_c('th',[_v("是否必选")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_v("options")]),_v(" "),_c('td',[_v("Object")]),_v(" "),_c('td',[_v("-")]),_v(" "),_c('td',[_v("对话框的参数，属性同props(props.show除外)。注意：使用驼峰式变量名，如"),_c('strong',[_v("onOk")]),_v("，而非on-ok")]),_v(" "),_c('td',[_c('strong',[_v("必选")])])]),_v(" "),_c('tr',[_c('td',[_v("isRawHTML")]),_v(" "),_c('td',[_v("Boolean")]),_v(" "),_c('td',[_v("false")]),_v(" "),_c('td',[_v("对options.content(String)是否解析为原生HTML")]),_v(" "),_c('td',[_v("可选")])])])])}},function(){with(this){return _c('ol',{attrs:{"start":"4"}},[_c('li',[_c('strong',[_v("this.$alert(content, onOk)")])])])}},function(){with(this){return _c('table',{staticClass:"table"},[_c('thead',[_c('tr',[_c('th',[_v("参数")]),_v(" "),_c('th',[_v("类型")]),_v(" "),_c('th',[_v("默认")]),_v(" "),_c('th',[_v("描述")]),_v(" "),_c('th',[_v("是否必选")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_v("content")]),_v(" "),_c('td',[_v("String")]),_v(" "),_c('td',[_v("-")]),_v(" "),_c('td',[_v("对话框的内容")]),_v(" "),_c('td',[_c('strong',[_v("必选")])])]),_v(" "),_c('tr',[_c('td',[_v("onOk")]),_v(" "),_c('td',[_v("Function")]),_v(" "),_c('td',[_v("-")]),_v(" "),_c('td',[_v("点击确定按钮的回调函数")]),_v(" "),_c('td',[_v("可选")])])])])}}]
	    };
	  

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(259)

	/* script */
	__vue_exports__ = __webpack_require__(261)

	/* template */
	var __vue_template__ = __webpack_require__(262)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/ubuntu/xcui/src/demos/inputNumber.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-24f67922", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-24f67922", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] inputNumber.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(260);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(24)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-24f67922!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./inputNumber.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-24f67922!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./inputNumber.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports


	// module
	exports.push([module.id, "\n.input-define-class{\n    color: blue;\n    width: 190px;\n    font-size: 20px;\n}\n", ""]);

	// exports


/***/ },
/* 261 */
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
/* 262 */
/***/ function(module, exports) {

	
	    module.exports = {
	      render: function(){with(this){return _c('div',[_c('h1',[_v("InputNumber数字输入框")]),_v(" "),_c('h2',[_v("使用场景")]),_v(" "),_m(0),_v(" "),_c('h2',[_v("DEMO")]),_v(" "),_c('div',{staticClass:"xcui-demo-container col-md-12 col-xs-12 col-lg-12"},[_c('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_c('h3',[_v("InputNumber")]),_v(" "),_c('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_c('div',{attrs:{"id":"container"}},[_c('xcui-inputnumber',{attrs:{"max-value":100,"min-value":3,"step":2,"is-disable":false,"text-tips":"请输入整数","size":"small"}}),_v(" "),_c('p',[_v("支持键盘输入整数，以2为步长，最小值为3，最大值为100")]),_v(" "),_c('br'),_v(" "),_c('xcui-inputnumber',{attrs:{"max-value":100,"min-value":-10,"input-value":-1,"step":2,"is-disable":false,"text-tips":"请输入整数","size":"normal"}}),_v(" "),_c('p',[_v("支持键盘输入负整数，以2为步长，最小值为-10，最大值为100")]),_v(" "),_c('br'),_v(" "),_c('xcui-inputnumber',{attrs:{"max-value":100,"min-value":-25,"input-value":6,"step":5,"class-name":"input-define-class","is-disable":true,"size":"large"}}),_v(" "),_c('p',[_v("默认值为6，禁止手动输入，以5为步长，最小值为-25，最大值为100，自定义输入框与字体样式")])],1)]),_v(" "),_m(1)])]),_v(" "),_c('h2',[_v("Props")]),_v(" "),_m(2)])}},
	      staticRenderFns: [function(){with(this){return _c('ul',[_c('li',[_v("数字专用输入框")]),_v(" "),_c('li',[_v("支持限制输入整数数字范围")]),_v(" "),_c('li',[_v("支持设置增减数字幅度")]),_v(" "),_c('li',[_v("支持自定义框内提示文案")]),_v(" "),_c('li',[_v("支持自定义输入框样式")])])}},function(){with(this){return _c('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_c('pre',[_v("\r\n\t"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("div")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("id")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("container"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n\t\t"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-inputnumber")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v(":max-value")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("100"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v(":min-value")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("3"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v(":step")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("2"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v(":is-disable")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("false"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("text-tips")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("请输入整数"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("size")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("small"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-inputnumber")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n\t\t"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("p")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("支持键盘输入整数，以2为步长，最小值为3，最大值为100"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("p")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n\t\t"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("br")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n\t\t"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-inputnumber")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v(":max-value")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("100"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v(":min-value")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("-10"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v(":input-value.sync")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("-1"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v(":step")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("2"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v(":is-disable")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("false"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("text-tips")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("请输入整数"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("size")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("normal"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-inputnumber")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n\t\t"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("p")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("支持键盘输入负整数，以2为步长，最小值为-10，最大值为100"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("p")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n\t\t"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("br")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n\t\t"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-inputnumber")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v(":max-value")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("100"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v(":min-value")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("-25"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v(":input-value.sync")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("6"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v(":step")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("5"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class-name")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("input-define-class"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v(":is-disable")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("true"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("size")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("large"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-inputnumber")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n\t\t"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("p")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("默认值为6，禁止手动输入，以5为步长，最小值为-25，最大值为100，自定义输入框与字体样式"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("p")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n\t"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("div")]),_c('span',{staticClass:"token punctuation"},[_v(">")])])])])}},function(){with(this){return _c('table',{staticClass:"table"},[_c('thead',[_c('tr',[_c('th',[_v("名字")]),_v(" "),_c('th',[_v("类型")]),_v(" "),_c('th',[_v("默认")]),_v(" "),_c('th',[_v("描述")]),_v(" "),_c('th',[_v("是否必选")]),_v(" "),_c('th',[_v("可选值")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_v("max-value")]),_v(" "),_c('td',[_v("Number")]),_v(" "),_c('td',[_v("100")]),_v(" "),_c('td',[_v("最大值")]),_v(" "),_c('td',[_v("可选")]),_v(" "),_c('td')]),_v(" "),_c('tr',[_c('td',[_v("min-value")]),_v(" "),_c('td',[_v("Number")]),_v(" "),_c('td',[_v("1")]),_v(" "),_c('td',[_v("最小值")]),_v(" "),_c('td',[_v("可选")]),_v(" "),_c('td')]),_v(" "),_c('tr',[_c('td',[_v("input-value")]),_v(" "),_c('td',[_v("Number")]),_v(" "),_c('td',[_v("空")]),_v(" "),_c('td',[_v("默认显示数值")]),_v(" "),_c('td',[_v("可选")]),_v(" "),_c('td')]),_v(" "),_c('tr',[_c('td',[_v("step")]),_v(" "),_c('td',[_v("Number")]),_v(" "),_c('td',[_v("1")]),_v(" "),_c('td',[_v("增减步长")]),_v(" "),_c('td',[_v("可选")]),_v(" "),_c('td')]),_v(" "),_c('tr',[_c('td',[_v("is-disable")]),_v(" "),_c('td',[_v("Boolean")]),_v(" "),_c('td',[_v("false")]),_v(" "),_c('td',[_v("是否禁用键盘输入")]),_v(" "),_c('td',[_v("可选")]),_v(" "),_c('td',[_v("true,false")])]),_v(" "),_c('tr',[_c('td',[_v("class-name")]),_v(" "),_c('td',[_v("String")]),_v(" "),_c('td',[_v("空字符串")]),_v(" "),_c('td',[_v("自定义样式")]),_v(" "),_c('td',[_v("可选")]),_v(" "),_c('td')]),_v(" "),_c('tr',[_c('td',[_v("size")]),_v(" "),_c('td',[_v("String")]),_v(" "),_c('td',[_v("normal")]),_v(" "),_c('td',[_v("可选尺寸")]),_v(" "),_c('td',[_v("可选")]),_v(" "),_c('td',[_v("large,normal,small")])]),_v(" "),_c('tr',[_c('td',[_v("text-tips")]),_v(" "),_c('td',[_v("String")]),_v(" "),_c('td',[_v("请输入范围内整数")]),_v(" "),_c('td',[_v("自定义提示文案")]),_v(" "),_c('td',[_v("可选")]),_v(" "),_c('td')])])])}}]
	    };
	  

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(264)

	/* script */
	__vue_exports__ = __webpack_require__(266)

	/* template */
	var __vue_template__ = __webpack_require__(267)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/ubuntu/xcui/src/demos/progress.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-64a3d564", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-64a3d564", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] progress.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(265);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(24)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-64a3d564!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./progress.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-64a3d564!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./progress.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports


	// module
	exports.push([module.id, "\n.info{\n    float: left;\n    padding-right: 10px;\n}\n", ""]);

	// exports


/***/ },
/* 266 */
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
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('demo', [_c('example', {
	    attrs: {
	      "title": "basic"
	    }
	  }, [_c('xcui-progress', {
	    attrs: {
	      "percent-info": _vm.percentInfo,
	      "percent": _vm.percent,
	      "show-info": true
	    }
	  }), _vm._v(" "), _c('div', {
	    staticStyle: {
	      "width": "200px"
	    }
	  }, [_c('xcui-progress', {
	    attrs: {
	      "info-class-name": 'info',
	      "percent": _vm.percent,
	      "percent-info": '50%',
	      "height": _vm.height
	    }
	  })], 1)], 1)], 1)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-64a3d564", module.exports)
	  }
	}

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(269)

	/* template */
	var __vue_template__ = __webpack_require__(270)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/ubuntu/xcui/src/demos/pageloading.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-5f188c3c", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-5f188c3c", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] pageloading.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _pageloading = __webpack_require__(124);

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
/* 270 */
/***/ function(module, exports) {

	
	    module.exports = {
	      render: function(){with(this){return _c('div',[_c('h1',[_v("PageLoading页面加载进度条")]),_v(" "),_c('h2',[_v("使用场景")]),_v(" "),_m(0),_v(" "),_c('h2',[_v("DEMO")]),_v(" "),_c('div',{staticClass:"xcui-demo-container col-md-12 col-xs-12 col-lg-12"},[_c('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_c('h3',[_v("顶部加载条")]),_v(" "),_c('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_c('xcui-pageloading',{ref:"pageLoading"}),_v(" "),_c('div',{staticClass:"form-group"},[_c('button',{staticClass:"btn btn-primary",on:{"click":start}},[_v("start")]),_v(" "),_c('button',{staticClass:"btn btn-primary",on:{"click":done}},[_v("done")]),_v(" "),_c('button',{staticClass:"btn btn-primary",on:{"click":inc}},[_v("inc")]),_v(" "),_c('button',{staticClass:"btn btn-primary",on:{"click":setPercent}},[_v("set")])]),_v(" "),_c('div',{staticClass:"input-group"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(toppercent),expression:"toppercent"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"设置进度条速度"},domProps:{"value":_s(toppercent)},on:{"input":function($event){if($event.target.composing)return;toppercent=$event.target.value}}})])],1),_v(" "),_m(1)])]),_v(" "),_c('h2',[_v("Props")]),_v(" "),_m(2),_v(" "),_c('h2',[_v("Methods")]),_v(" "),_m(3),_v(" "),_c('h3',[_v("方法调用")]),_v(" "),_c('blockquote',[_c('ul',[_c('li',[_v("this.$refs.pageLoading.start();")]),_v(" "),_c('li',[_v("this.$refs.pageLoading.done();")]),_v(" "),_c('li',[_v("this.$refs.pageLoading.set(0.5);")]),_v(" "),_c('li',[_v("this.$refs.pageLoading.inc();")])])]),_v(" "),_c('p',[_v("备注：先执行set(0.X)，再执行inc()，即可看到inc的执行效果")])],1)}},
	      staticRenderFns: [function(){with(this){return _c('ul',[_c('li',[_v("路由页面切换时提供顶部加载进度条。")])])}},function(){with(this){return _c('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_c('pre',[_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-pageloading")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("ref")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("pageLoading"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-pageloading")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("div")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("form-group"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n     "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("button")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("btn btn-primary"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("@click")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("start"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("start"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("button")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n     "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("button")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("btn btn-primary"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("@click")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("done"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("done"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("button")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n     "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("button")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("btn btn-primary"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("@click")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("inc"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("inc"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("button")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n     "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("button")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("btn btn-primary"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("@click")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("setPercent"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("set"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("button")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("div")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("div")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("input-group"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n     "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("input")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("type")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("text"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("form-control"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("v-model")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("toppercent"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("placeholder")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("设置进度条速度"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v("/>")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("div")]),_c('span',{staticClass:"token punctuation"},[_v(">")])])])])}},function(){with(this){return _c('table',{staticClass:"table"},[_c('thead',[_c('tr',[_c('th',[_v("名字")]),_v(" "),_c('th',[_v("类型")]),_v(" "),_c('th',[_v("默认")]),_v(" "),_c('th',[_v("描述")]),_v(" "),_c('th',[_v("是否必选")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_v("speed")]),_v(" "),_c('td',[_v("Number")]),_v(" "),_c('td',[_v("350")]),_v(" "),_c('td',[_v("速度")]),_v(" "),_c('td',[_v("可选")])])])])}},function(){with(this){return _c('table',{staticClass:"table"},[_c('thead',[_c('tr',[_c('th',[_v("名字")]),_v(" "),_c('th',[_v("类型")]),_v(" "),_c('th',[_v("默认")]),_v(" "),_c('th',[_v("描述")]),_v(" "),_c('th',[_v("是否必选")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_v("start")]),_v(" "),_c('td',[_v("function")]),_v(" "),_c('td',[_v("-")]),_v(" "),_c('td',[_v("开始")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("done")]),_v(" "),_c('td',[_v("function")]),_v(" "),_c('td',[_v("-")]),_v(" "),_c('td',[_v("结束")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("set")]),_v(" "),_c('td',[_v("function")]),_v(" "),_c('td',[_v("0.08")]),_v(" "),_c('td',[_v("设置进度条进度，取值范围（0.08 ~ 1）")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("inc")]),_v(" "),_c('td',[_v("function")]),_v(" "),_c('td',[_v("-")]),_v(" "),_c('td',[_v("增加一小段进度")]),_v(" "),_c('td',[_v("可选")])])])])}}]
	    };
	  

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(272)

	/* script */
	__vue_exports__ = __webpack_require__(274)

	/* template */
	var __vue_template__ = __webpack_require__(275)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/ubuntu/xcui/src/demos/scrolltop.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-30506c17", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-30506c17", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] scrolltop.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(273);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(24)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-30506c17!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./scrolltop.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-30506c17!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./scrolltop.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports


	// module
	exports.push([module.id, "\n#content1{\n\theight: 100px;\n\twidth: 1000px;\n}\n#content2{\n\theight: 700px;\n\twidth: 1000px;\n}\n.scrolltop-define-class{\n\tcolor:red;\n\tfont-size:10px;\n}\n", ""]);

	// exports


/***/ },
/* 274 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    data: function data() {
	        return {};
	    },

	    methods: {
	        finishBack: function finishBack() {}
	    },
	    ready: function ready() {}
	};

/***/ },
/* 275 */
/***/ function(module, exports) {

	
	    module.exports = {
	      render: function(){with(this){return _c('div',[_c('h1',[_v("ScrollTop返回顶部按钮")]),_v(" "),_c('h2',[_v("使用场景")]),_v(" "),_m(0),_v(" "),_c('h2',[_v("DEMO")]),_v(" "),_c('div',{staticClass:"xcui-demo-container col-md-12 col-xs-12 col-lg-12"},[_c('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_c('h3',[_v("基本使用")]),_v(" "),_c('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_c('xcui-scrolltop',{attrs:{"target-element":"","during":60,"class-name":""},on:{"finish":finishBack}})],1),_v(" "),_m(1)])]),_v(" "),_c('h2',[_v("Props")]),_v(" "),_m(2)])}},
	      staticRenderFns: [function(){with(this){return _c('ul',[_c('li',[_v("对应长页面提供可返回顶部按钮")]),_v(" "),_c('li',[_v("支持设置返回位置定位元素")]),_v(" "),_c('li',[_v("支持设置滚动间隔速度")]),_v(" "),_c('li',[_v("支持用户拖拽按钮位置")]),_v(" "),_c('li',[_v("支持获取回调事件设置函数")]),_v(" "),_c('li',[_v("支持自定义按钮样式")])])}},function(){with(this){return _c('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_c('pre',[_v("\r\n\t"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-scrolltop")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("target-element")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v(":during")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("60"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("@finish")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("finishBack"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("class-name")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-scrolltop")]),_c('span',{staticClass:"token punctuation"},[_v(">")])])])])}},function(){with(this){return _c('table',{staticClass:"table"},[_c('thead',[_c('tr',[_c('th',[_v("名字")]),_v(" "),_c('th',[_v("类型")]),_v(" "),_c('th',[_v("默认")]),_v(" "),_c('th',[_v("描述")]),_v(" "),_c('th',[_v("是否必选")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_v("during")]),_v(" "),_c('td',[_v("Number")]),_v(" "),_c('td',[_v("50")]),_v(" "),_c('td',[_v("滚动持续间隔，值越小完成滚动越快")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("target-element")]),_v(" "),_c('td',[_v("String")]),_v(" "),_c('td',[_v("空字符串")]),_v(" "),_c('td',[_v("定位元素ID名称，返回指定元素顶部")]),_v(" "),_c('td',[_v("可选，此属性未赋值时，返回页面顶部")])]),_v(" "),_c('tr',[_c('td',[_v("finish")]),_v(" "),_c('td',[_v("Function")]),_v(" "),_c('td'),_v(" "),_c('td',[_v("返回顶部完成，事件回调")]),_v(" "),_c('td',[_v("可选")])]),_v(" "),_c('tr',[_c('td',[_v("class-name")]),_v(" "),_c('td',[_v("String")]),_v(" "),_c('td',[_v("空字符串")]),_v(" "),_c('td',[_v("自定义样式")]),_v(" "),_c('td',[_v("可选")])])])])}}]
	    };
	  

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(277)

	/* script */
	__vue_exports__ = __webpack_require__(279)

	/* template */
	var __vue_template__ = __webpack_require__(280)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/ubuntu/xcui/src/demos/button.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-057d9e13", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-057d9e13", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] button.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(278);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(24)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-057d9e13!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./button.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-057d9e13!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./button.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports


	// module
	exports.push([module.id, "\n.define-class{\n    background:#ffab47;\n    color:#fff;\n    border-radius: 6px;\n}\n.define-class:hover{\n    background:red;\n}\n", ""]);

	// exports


/***/ },
/* 279 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    data: function data() {
	        return {};
	    },

	    methods: {}
	};

/***/ },
/* 280 */
/***/ function(module, exports) {

	
	    module.exports = {
	      render: function(){with(this){return _c('div',[_c('div',{staticClass:"xcui-demo-container col-md-12 col-xs-12 col-lg-12"},[_c('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_c('h3',[_v("基本使用")]),_v(" "),_c('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_c('xcui-button',[_v("btnbtnbtn")])],1),_v(" "),_m(0)]),_v(" "),_c('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_c('h3',[_v("按钮类型")]),_v(" "),_c('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_c('xcui-button',{attrs:{"type":"primary"}},[_v("primary")]),_v(" "),_c('xcui-button',{attrs:{"type":"success"}},[_v("success")]),_v(" "),_c('xcui-button',{attrs:{"type":"warning"}},[_v("warning")]),_v(" "),_c('xcui-button',{attrs:{"type":"danger"}},[_v("danger")])],1),_v(" "),_m(1)]),_v(" "),_c('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_c('h3',[_v("尺寸")]),_v(" "),_c('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_c('xcui-button',{attrs:{"size":"sm"}},[_v("sm尺寸")]),_v(" "),_c('xcui-button',[_v("正常尺寸")]),_v(" "),_c('xcui-button',{attrs:{"size":"lg"}},[_v("lg尺寸")])],1),_v(" "),_m(2)])])])}},
	      staticRenderFns: [function(){with(this){return _c('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_c('pre',[_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-button")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("btnbtnbtn"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-btn")]),_c('span',{staticClass:"token punctuation"},[_v(">")])])])])}},function(){with(this){return _c('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_c('pre',[_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-button")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("type")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("primary"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("primary"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-button")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-button")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("type")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("success"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("success"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-button")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-button")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("type")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("warning"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("warning"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-button")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-button")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("type")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("danger"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("danger"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-button")]),_c('span',{staticClass:"token punctuation"},[_v(">")])])])])}},function(){with(this){return _c('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_c('pre',[_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-button")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("size")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("sm"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("sm尺寸"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-button")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-button")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("正常尺寸"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-button")]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("\r\n "),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("<")]),_v("xcui-button")]),_v(" "),_c('span',{staticClass:"token attr-name"},[_v("size")]),_c('span',{staticClass:"token attr-value"},[_c('span',{staticClass:"token punctuation"},[_v("=")]),_c('span',{staticClass:"token punctuation"},[_v("\"")]),_v("lg"),_c('span',{staticClass:"token punctuation"},[_v("\"")])]),_c('span',{staticClass:"token punctuation"},[_v(">")])]),_v("lg尺寸"),_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token tag"},[_c('span',{staticClass:"token punctuation"},[_v("</")]),_v("xcui-button")]),_c('span',{staticClass:"token punctuation"},[_v(">")])])])])}}]
	    };
	  

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('div', {
	    attrs: {
	      "id": "header"
	    }
	  }, [_c('router-link', {
	    staticClass: "logo",
	    attrs: {
	      "to": "home"
	    }
	  }, [_c('img', {
	    attrs: {
	      "src": _vm.logoUrl
	    }
	  }), _vm._v("\n            XCUI Components\n        ")])], 1), _vm._v(" "), _c('router-view')], 1)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-1337900f", module.exports)
	  }
	}

/***/ }
/******/ ]);