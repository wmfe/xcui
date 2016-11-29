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

	var _vueRouter = __webpack_require__(6);

	var _vueRouter2 = _interopRequireDefault(_vueRouter);

	var _index = __webpack_require__(7);

	var _index2 = _interopRequireDefault(_index);

	var _App = __webpack_require__(169);

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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Vue.js v2.0.8
	 * (c) 2014-2016 Evan You
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
	  var n = parseFloat(val, 10);
	  return (n || n === 0) ? n : val
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
	  return function cachedFn (str) {
	    var hit = cache[str];
	    return hit || (cache[str] = fn(str))
	  }
	}

	/**
	 * Camelize a hyphen-delmited string.
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
	  /* eslint-disable eqeqeq */
	  return a == b || (
	    isObject(a) && isObject(b)
	      ? JSON.stringify(a) === JSON.stringify(b)
	      : false
	  )
	  /* eslint-enable eqeqeq */
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
	  ignoredElements: null,

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
	  _maxUpdateCount: 100,

	  /**
	   * Server rendering?
	   */
	  _isServer: "client" === 'server'
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
	var inBrowser =
	  typeof window !== 'undefined' &&
	  Object.prototype.toString.call(window) !== '[object Object]';

	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	var isIE = UA && /msie|trident/.test(UA);
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	var isEdge = UA && UA.indexOf('edge/') > 0;
	var isAndroid = UA && UA.indexOf('android') > 0;
	var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);

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
	    timerFunc = function () {
	      p.then(nextTickHandler);
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
	    var func = ctx
	      ? function () { cb.call(ctx); }
	      : cb;
	    callbacks.push(func);
	    if (!pending) {
	      pending = true;
	      timerFunc();
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
	      return this.set[key] !== undefined
	    };
	    Set.prototype.add = function add (key) {
	      this.set[key] = 1;
	    };
	    Set.prototype.clear = function clear () {
	      this.set = Object.create(null);
	    };

	    return Set;
	  }());
	}

	/* not type checking this file because flow doesn't play well with Proxy */

	var hasProxy;
	var proxyHandlers;
	var initProxy;

	{
	  var allowedGlobals = makeMap(
	    'Infinity,undefined,NaN,isFinite,isNaN,' +
	    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
	    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
	    'require' // for Webpack/Browserify
	  );

	  hasProxy =
	    typeof Proxy !== 'undefined' &&
	    Proxy.toString().match(/native code/);

	  proxyHandlers = {
	    has: function has (target, key) {
	      var has = key in target;
	      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
	      if (!has && !isAllowed) {
	        warn(
	          "Property or method \"" + key + "\" is not defined on the instance but " +
	          "referenced during render. Make sure to declare reactive data " +
	          "properties in the data option.",
	          target
	        );
	      }
	      return has || !isAllowed
	    }
	  };

	  initProxy = function initProxy (vm) {
	    if (hasProxy) {
	      vm._renderProxy = new Proxy(vm, proxyHandlers);
	    } else {
	      vm._renderProxy = vm;
	    }
	  };
	}

	/*  */


	var uid$2 = 0;

	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 */
	var Dep = function Dep () {
	  this.id = uid$2++;
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
	    var watcher = queue[index];
	    var id = watcher.id;
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

	var uid$1 = 0;

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
	  if ( options === void 0 ) options = {};

	  this.vm = vm;
	  vm._watchers.push(this);
	  // options
	  this.deep = !!options.deep;
	  this.user = !!options.user;
	  this.lazy = !!options.lazy;
	  this.sync = !!options.sync;
	  this.expression = expOrFn.toString();
	  this.cb = cb;
	  this.id = ++uid$1; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = new _Set();
	  this.newDepIds = new _Set();
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
	          "development" !== 'production' && warn(
	            ("Error in watcher \"" + (this.expression) + "\""),
	            this.vm
	          );
	          /* istanbul ignore else */
	          if (config.errorHandler) {
	            config.errorHandler.call(null, e, this.vm);
	          } else {
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
	    // if the vm is being destroyed or is performing a v-for
	    // re-render (the watcher list is then filtered by v-for).
	    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
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
	 *
	 * istanbul ignore next
	 */
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
	function observe (value) {
	  if (!isObject(value)) {
	    return
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if (
	    observerState.shouldConvert &&
	    !config._isServer &&
	    (Array.isArray(value) || isPlainObject(value)) &&
	    Object.isExtensible(value) &&
	    !value._isVue
	  ) {
	    ob = new Observer(value);
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
	function set (obj, key, val) {
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

	function initState (vm) {
	  vm._watchers = [];
	  initProps(vm);
	  initData(vm);
	  initComputed(vm);
	  initMethods(vm);
	  initWatch(vm);
	}

	var isReservedProp = makeMap('key,ref,slot');

	function initProps (vm) {
	  var props = vm.$options.props;
	  if (props) {
	    var propsData = vm.$options.propsData || {};
	    var keys = vm.$options._propKeys = Object.keys(props);
	    var isRoot = !vm.$parent;
	    // root instance props should be converted
	    observerState.shouldConvert = isRoot;
	    var loop = function ( i ) {
	      var key = keys[i];
	      /* istanbul ignore else */
	      {
	        if (isReservedProp(key)) {
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
	}

	function initData (vm) {
	  var data = vm.$options.data;
	  data = vm._data = typeof data === 'function'
	    ? data.call(vm)
	    : data || {};
	  if (!isPlainObject(data)) {
	    data = {};
	    "development" !== 'production' && warn(
	      'data functions should return an object.',
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
	  observe(data);
	  data.__ob__ && data.__ob__.vmCount++;
	}

	var computedSharedDefinition = {
	  enumerable: true,
	  configurable: true,
	  get: noop,
	  set: noop
	};

	function initComputed (vm) {
	  var computed = vm.$options.computed;
	  if (computed) {
	    for (var key in computed) {
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

	function initMethods (vm) {
	  var methods = vm.$options.methods;
	  if (methods) {
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
	}

	function initWatch (vm) {
	  var watch = vm.$options.watch;
	  if (watch) {
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

	  Vue.prototype.$set = set;
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

	var VNode = function VNode (
	  tag,
	  data,
	  children,
	  text,
	  elm,
	  ns,
	  context,
	  componentOptions
	) {
	  this.tag = tag;
	  this.data = data;
	  this.children = children;
	  this.text = text;
	  this.elm = elm;
	  this.ns = ns;
	  this.context = context;
	  this.functionalContext = undefined;
	  this.key = data && data.key;
	  this.componentOptions = componentOptions;
	  this.child = undefined;
	  this.parent = undefined;
	  this.raw = false;
	  this.isStatic = false;
	  this.isRootInsert = true;
	  this.isComment = false;
	  this.isCloned = false;
	  this.isOnce = false;
	};

	var emptyVNode = function () {
	  var node = new VNode();
	  node.text = '';
	  node.isComment = true;
	  return node
	};

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
	    vnode.ns,
	    vnode.context,
	    vnode.componentOptions
	  );
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

	function updateListeners (
	  on,
	  oldOn,
	  add,
	  remove$$1,
	  vm
	) {
	  var name, cur, old, fn, event, capture;
	  for (name in on) {
	    cur = on[name];
	    old = oldOn[name];
	    if (!cur) {
	      "development" !== 'production' && warn(
	        "Invalid handler for event \"" + name + "\": got " + String(cur),
	        vm
	      );
	    } else if (!old) {
	      capture = name.charAt(0) === '!';
	      event = capture ? name.slice(1) : name;
	      if (Array.isArray(cur)) {
	        add(event, (cur.invoker = arrInvoker(cur)), capture);
	      } else {
	        if (!cur.invoker) {
	          fn = cur;
	          cur = on[name] = {};
	          cur.fn = fn;
	          cur.invoker = fnInvoker(cur);
	        }
	        add(event, cur.invoker, capture);
	      }
	    } else if (cur !== old) {
	      if (Array.isArray(old)) {
	        old.length = cur.length;
	        for (var i = 0; i < old.length; i++) { old[i] = cur[i]; }
	        on[name] = old;
	      } else {
	        old.fn = cur;
	        on[name] = old;
	      }
	    }
	  }
	  for (name in oldOn) {
	    if (!on[name]) {
	      event = name.charAt(0) === '!' ? name.slice(1) : name;
	      remove$$1(event, oldOn[name].invoker);
	    }
	  }
	}

	function arrInvoker (arr) {
	  return function (ev) {
	    var arguments$1 = arguments;

	    var single = arguments.length === 1;
	    for (var i = 0; i < arr.length; i++) {
	      single ? arr[i](ev) : arr[i].apply(null, arguments$1);
	    }
	  }
	}

	function fnInvoker (o) {
	  return function (ev) {
	    var single = arguments.length === 1;
	    single ? o.fn(ev) : o.fn.apply(null, arguments);
	  }
	}

	/*  */

	function normalizeChildren (
	  children,
	  ns,
	  nestedIndex
	) {
	  if (isPrimitive(children)) {
	    return [createTextVNode(children)]
	  }
	  if (Array.isArray(children)) {
	    var res = [];
	    for (var i = 0, l = children.length; i < l; i++) {
	      var c = children[i];
	      var last = res[res.length - 1];
	      //  nested
	      if (Array.isArray(c)) {
	        res.push.apply(res, normalizeChildren(c, ns, ((nestedIndex || '') + "_" + i)));
	      } else if (isPrimitive(c)) {
	        if (last && last.text) {
	          last.text += String(c);
	        } else if (c !== '') {
	          // convert primitive to vnode
	          res.push(createTextVNode(c));
	        }
	      } else if (c instanceof VNode) {
	        if (c.text && last && last.text) {
	          if (!last.isCloned) {
	            last.text += c.text;
	          }
	        } else {
	          // inherit parent namespace
	          if (ns) {
	            applyNS(c, ns);
	          }
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
	}

	function createTextVNode (val) {
	  return new VNode(undefined, undefined, undefined, String(val))
	}

	function applyNS (vnode, ns) {
	  if (vnode.tag && !vnode.ns) {
	    vnode.ns = ns;
	    if (vnode.children) {
	      for (var i = 0, l = vnode.children.length; i < l; i++) {
	        applyNS(vnode.children[i], ns);
	      }
	    }
	  }
	}

	/*  */

	function getFirstComponentChild (children) {
	  return children && children.filter(function (c) { return c && c.componentOptions; })[0]
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
	      vm.$options.render = emptyVNode;
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
	    vm._watcher = new Watcher(vm, function () {
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
	    var prevActiveInstance = activeInstance;
	    activeInstance = vm;
	    var prevVnode = vm._vnode;
	    vm._vnode = vnode;
	    if (!prevVnode) {
	      // Vue.prototype.__patch__ is injected in entry points
	      // based on the rendering backend used.
	      vm.$el = vm.__patch__(vm.$el, vnode, hydrating);
	    } else {
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
	    if (vm._isMounted) {
	      callHook(vm, 'updated');
	    }
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
	      vm._updateListeners(listeners, oldListeners);
	    }
	    // resolve slots + force update if has children
	    if (hasChildren) {
	      vm.$slots = resolveSlots(renderChildren, vm._renderContext);
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
	  vm.$emit('hook:' + hook);
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
	    data, undefined, undefined, undefined, undefined, context,
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
	  var vnode = Ctor.options.render.call(
	    null,
	    // ensure the createElement function in functional components
	    // gets a unique context - this is necessary for correct named slot check
	    bind$1(createElement, { _self: Object.create(context) }),
	    {
	      props: props,
	      data: data,
	      parent: context,
	      children: normalizeChildren(children),
	      slots: function () { return resolveSlots(children, context); }
	    }
	  );
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
	  parent // activeInstance in lifecycle state
	) {
	  var vnodeComponentOptions = vnode.componentOptions;
	  var options = {
	    _isComponent: true,
	    parent: parent,
	    propsData: vnodeComponentOptions.propsData,
	    _componentTag: vnodeComponentOptions.tag,
	    _parentVnode: vnode,
	    _parentListeners: vnodeComponentOptions.listeners,
	    _renderChildren: vnodeComponentOptions.children
	  };
	  // check inline-template render functions
	  var inlineTemplate = vnode.data.inlineTemplate;
	  if (inlineTemplate) {
	    options.render = inlineTemplate.render;
	    options.staticRenderFns = inlineTemplate.staticRenderFns;
	  }
	  return new vnodeComponentOptions.Ctor(options)
	}

	function init (vnode, hydrating) {
	  if (!vnode.child || vnode.child._isDestroyed) {
	    var child = vnode.child = createComponentInstanceForVnode(vnode, activeInstance);
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
	  var child = vnode.child = oldVnode.child;
	  child._updateFromParent(
	    options.propsData, // updated props
	    options.listeners, // updated listeners
	    vnode, // new parent vnode
	    options.children // new children
	  );
	}

	function insert (vnode) {
	  if (!vnode.child._isMounted) {
	    vnode.child._isMounted = true;
	    callHook(vnode.child, 'mounted');
	  }
	  if (vnode.data.keepAlive) {
	    vnode.child._inactive = false;
	    callHook(vnode.child, 'activated');
	  }
	}

	function destroy$1 (vnode) {
	  if (!vnode.child._isDestroyed) {
	    if (!vnode.data.keepAlive) {
	      vnode.child.$destroy();
	    } else {
	      vnode.child._inactive = true;
	      callHook(vnode.child, 'deactivated');
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

	function mergeHook$1 (a, b) {
	  // since all hooks have at most two args, use fixed args
	  // to avoid having to use fn.apply().
	  return function (_, __) {
	    a(_, __);
	    b(_, __);
	  }
	}

	/*  */

	// wrapper function for providing a more flexible interface
	// without getting yelled at by flow
	function createElement (
	  tag,
	  data,
	  children
	) {
	  if (data && (Array.isArray(data) || typeof data !== 'object')) {
	    children = data;
	    data = undefined;
	  }
	  // make sure to use real instance instead of proxy as context
	  return _createElement(this._self, tag, data, children)
	}

	function _createElement (
	  context,
	  tag,
	  data,
	  children
	) {
	  if (data && data.__ob__) {
	    "development" !== 'production' && warn(
	      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
	      'Always create fresh vnode data objects in each render!',
	      context
	    );
	    return
	  }
	  if (!tag) {
	    // in case of component :is set to falsy value
	    return emptyVNode()
	  }
	  if (typeof tag === 'string') {
	    var Ctor;
	    var ns = config.getTagNamespace(tag);
	    if (config.isReservedTag(tag)) {
	      // platform built-in elements
	      return new VNode(
	        tag, data, normalizeChildren(children, ns),
	        undefined, undefined, ns, context
	      )
	    } else if ((Ctor = resolveAsset(context.$options, 'components', tag))) {
	      // component
	      return createComponent(Ctor, data, context, children, tag)
	    } else {
	      // unknown or unlisted namespaced elements
	      // check at runtime because it may get assigned a namespace when its
	      // parent normalizes children
	      var childNs = tag === 'foreignObject' ? 'xhtml' : ns;
	      return new VNode(
	        tag, data, normalizeChildren(children, childNs),
	        undefined, undefined, ns, context
	      )
	    }
	  } else {
	    // direct component options / constructor
	    return createComponent(tag, data, context, children)
	  }
	}

	/*  */

	function initRender (vm) {
	  vm.$vnode = null; // the placeholder node in parent tree
	  vm._vnode = null; // the root of the child tree
	  vm._staticTrees = null;
	  vm._renderContext = vm.$options._parentVnode && vm.$options._parentVnode.context;
	  vm.$slots = resolveSlots(vm.$options._renderChildren, vm._renderContext);
	  // bind the public createElement fn to this instance
	  // so that we get proper render context inside it.
	  vm.$createElement = bind$1(createElement, vm);
	  if (vm.$options.el) {
	    vm.$mount(vm.$options.el);
	  }
	}

	function renderMixin (Vue) {
	  Vue.prototype.$nextTick = function (fn) {
	    nextTick(fn, this);
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
	      {
	        warn(("Error when rendering " + (formatComponentName(vm)) + ":"));
	      }
	      /* istanbul ignore else */
	      if (config.errorHandler) {
	        config.errorHandler.call(null, e, vm);
	      } else {
	        if (config._isServer) {
	          throw e
	        } else {
	          console.error(e);
	        }
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
	      vnode = emptyVNode();
	    }
	    // set parent
	    vnode.parent = _parentVnode;
	    return vnode
	  };

	  // shorthands used in render functions
	  Vue.prototype._h = createElement;
	  // toString for mustaches
	  Vue.prototype._s = _toString;
	  // number conversion
	  Vue.prototype._n = toNumber;
	  // empty vnode
	  Vue.prototype._e = emptyVNode;
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
	  var identity = function (_) { return _; };
	  Vue.prototype._f = function resolveFilter (id) {
	    return resolveAsset(this.$options, 'filters', id, true) || identity
	  };

	  // render v-for
	  Vue.prototype._l = function renderList (
	    val,
	    render
	  ) {
	    var ret, i, l, keys, key;
	    if (Array.isArray(val)) {
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
	    fallback
	  ) {
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
	            var hash = asProp || config.mustUseProp(tag, key)
	              ? data.domProps || (data.domProps = {})
	              : data.attrs || (data.attrs = {});
	            hash[key] = value[key];
	          }
	        }
	      }
	    }
	    return data
	  };

	  // expose v-on keyCodes
	  Vue.prototype._k = function getKeyCodes (key) {
	    return config.keyCodes[key]
	  };
	}

	function resolveSlots (
	  renderChildren,
	  context
	) {
	  var slots = {};
	  if (!renderChildren) {
	    return slots
	  }
	  var children = normalizeChildren(renderChildren) || [];
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
	  // init parent attached events
	  var listeners = vm.$options._parentListeners;
	  var on = bind$1(vm.$on, vm);
	  var off = bind$1(vm.$off, vm);
	  vm._updateListeners = function (listeners, oldListeners) {
	    updateListeners(listeners, oldListeners || {}, on, off, vm);
	  };
	  if (listeners) {
	    vm._updateListeners(listeners);
	  }
	}

	function eventsMixin (Vue) {
	  Vue.prototype.$on = function (event, fn) {
	    var vm = this;(vm._events[event] || (vm._events[event] = [])).push(fn);
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
	    callHook(vm, 'beforeCreate');
	    initState(vm);
	    callHook(vm, 'created');
	    initRender(vm);
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
	  var res = assets[id] ||
	    // camelCase ID
	    assets[camelize(id)] ||
	    // Pascal Case ID
	    assets[capitalize(camelize(id))];
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
	  if (isBooleanType(prop.type)) {
	    if (absent && !hasOwn(prop, 'default')) {
	      value = false;
	    } else if (value === '' || value === hyphenate(key)) {
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
	      expectedTypes.push(assertedType.expectedType);
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

	function isBooleanType (fn) {
	  if (!Array.isArray(fn)) {
	    return getType(fn) === 'Boolean'
	  }
	  for (var i = 0, len = fn.length; i < len; i++) {
	    if (getType(fn[i]) === 'Boolean') {
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
		devtools: devtools,
		nextTick: nextTick,
		get _Set () { return _Set; },
		mergeOptions: mergeOptions,
		resolveAsset: resolveAsset,
		get warn () { return warn; },
		get formatComponentName () { return formatComponentName; },
		validateProp: validateProp
	});

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
	          'can only contain alphanumeric characaters and the hyphen.'
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

	var KeepAlive = {
	  name: 'keep-alive',
	  abstract: true,
	  created: function created () {
	    this.cache = Object.create(null);
	  },
	  render: function render () {
	    var vnode = getFirstComponentChild(this.$slots.default);
	    if (vnode && vnode.componentOptions) {
	      var opts = vnode.componentOptions;
	      var key = vnode.key == null
	        // same constructor may get registered as different local components
	        // so cid alone is not enough (#3269)
	        ? opts.Ctor.cid + '::' + opts.tag
	        : vnode.key;
	      if (this.cache[key]) {
	        vnode.child = this.cache[key].child;
	      } else {
	        this.cache[key] = vnode;
	      }
	      vnode.data.keepAlive = true;
	    }
	    return vnode
	  },
	  destroyed: function destroyed () {
	    var this$1 = this;

	    for (var key in this.cache) {
	      var vnode = this$1.cache[key];
	      callHook(vnode.child, 'deactivated');
	      vnode.child.$destroy();
	    }
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
	  Vue.set = set;
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
	  get: function () { return config._isServer; }
	});

	Vue$3.version = '2.0.8';

	/*  */

	// attributes that should be using props for binding
	var mustUseProp = function (tag, attr) {
	  return (
	    (attr === 'value' && (tag === 'input' || tag === 'textarea' || tag === 'option')) ||
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

	var isAttr = makeMap(
	  'accept,accept-charset,accesskey,action,align,alt,async,autocomplete,' +
	  'autofocus,autoplay,autosave,bgcolor,border,buffered,challenge,charset,' +
	  'checked,cite,class,code,codebase,color,cols,colspan,content,http-equiv,' +
	  'name,contenteditable,contextmenu,controls,coords,data,datetime,default,' +
	  'defer,dir,dirname,disabled,download,draggable,dropzone,enctype,method,for,' +
	  'form,formaction,headers,<th>,height,hidden,high,href,hreflang,http-equiv,' +
	  'icon,id,ismap,itemprop,keytype,kind,label,lang,language,list,loop,low,' +
	  'manifest,max,maxlength,media,method,GET,POST,min,multiple,email,file,' +
	  'muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,' +
	  'preload,radiogroup,readonly,rel,required,reversed,rows,rowspan,sandbox,' +
	  'scope,scoped,seamless,selected,shape,size,type,text,password,sizes,span,' +
	  'spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,' +
	  'target,title,type,usemap,value,width,wrap'
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
	  while (childNode.child) {
	    childNode = childNode.child._vnode;
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
	  math: 'http://www.w3.org/1998/Math/MathML',
	  xhtml: 'http://www.w3.org/1999/xhtml'
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

	// this map is intentionally selective, only covering SVG elements that may
	// contain child elements.
	var isSVG = makeMap(
	  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font,' +
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

	function childNodes (node) {
	  return node.childNodes
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
		childNodes: childNodes,
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
	  var ref = vnode.child || vnode.elm;
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

	var hooks$1 = ['create', 'update', 'remove', 'destroy'];

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
	        removeElement(childElm);
	      }
	    }
	    remove$$1.listeners = listeners;
	    return remove$$1
	  }

	  function removeElement (el) {
	    var parent = nodeOps.parentNode(el);
	    // element may have already been removed due to v-html
	    if (parent) {
	      nodeOps.removeChild(parent, el);
	    }
	  }

	  function createElm (vnode, insertedVnodeQueue, nested) {
	    var i;
	    var data = vnode.data;
	    vnode.isRootInsert = !nested;
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode); }
	      // after calling the init hook, if the vnode is a child component
	      // it should've created a child instance and mounted it. the child
	      // component also has set the placeholder vnode's elm.
	      // in that case we can just return the element and be done.
	      if (isDef(i = vnode.child)) {
	        initComponent(vnode, insertedVnodeQueue);
	        return vnode.elm
	      }
	    }
	    var children = vnode.children;
	    var tag = vnode.tag;
	    if (isDef(tag)) {
	      {
	        if (
	          !vnode.ns &&
	          !(config.ignoredElements && config.ignoredElements.indexOf(tag) > -1) &&
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
	      createChildren(vnode, children, insertedVnodeQueue);
	      if (isDef(data)) {
	        invokeCreateHooks(vnode, insertedVnodeQueue);
	      }
	    } else if (vnode.isComment) {
	      vnode.elm = nodeOps.createComment(vnode.text);
	    } else {
	      vnode.elm = nodeOps.createTextNode(vnode.text);
	    }
	    return vnode.elm
	  }

	  function createChildren (vnode, children, insertedVnodeQueue) {
	    if (Array.isArray(children)) {
	      for (var i = 0; i < children.length; ++i) {
	        nodeOps.appendChild(vnode.elm, createElm(children[i], insertedVnodeQueue, true));
	      }
	    } else if (isPrimitive(vnode.text)) {
	      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
	    }
	  }

	  function isPatchable (vnode) {
	    while (vnode.child) {
	      vnode = vnode.child._vnode;
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

	  function initComponent (vnode, insertedVnodeQueue) {
	    if (vnode.data.pendingInsert) {
	      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
	    }
	    vnode.elm = vnode.child.$el;
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

	  function addVnodes (parentElm, before, vnodes, startIdx, endIdx, insertedVnodeQueue) {
	    for (; startIdx <= endIdx; ++startIdx) {
	      nodeOps.insertBefore(parentElm, createElm(vnodes[startIdx], insertedVnodeQueue), before);
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
	          nodeOps.removeChild(parentElm, ch.elm);
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
	      if (isDef(i = vnode.child) && isDef(i = i._vnode) && isDef(i.data)) {
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
	      removeElement(vnode.elm);
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
	    var oldKeyToIdx, idxInOld, elmToMove, before;

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
	          nodeOps.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
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
	          if (elmToMove.tag !== newStartVnode.tag) {
	            // same key but different element. treat as new element
	            nodeOps.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
	            newStartVnode = newCh[++newStartIdx];
	          } else {
	            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
	            oldCh[idxInOld] = undefined;
	            canMove && nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm);
	            newStartVnode = newCh[++newStartIdx];
	          }
	        }
	      }
	    }
	    if (oldStartIdx > oldEndIdx) {
	      before = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
	      addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
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
	      if (isDef(i = vnode.child)) {
	        // child component. it should have hydrated its own tree.
	        initComponent(vnode, insertedVnodeQueue);
	        return true
	      }
	    }
	    if (isDef(tag)) {
	      if (isDef(children)) {
	        var childNodes = nodeOps.childNodes(elm);
	        // empty element, allow client to pick up and populate children
	        if (!childNodes.length) {
	          createChildren(vnode, children, insertedVnodeQueue);
	        } else {
	          var childrenMatch = true;
	          if (childNodes.length !== children.length) {
	            childrenMatch = false;
	          } else {
	            for (var i$1 = 0; i$1 < children.length; i$1++) {
	              if (!hydrate(childNodes[i$1], children[i$1], insertedVnodeQueue)) {
	                childrenMatch = false;
	                break
	              }
	            }
	          }
	          if (!childrenMatch) {
	            if ("development" !== 'production' &&
	                typeof console !== 'undefined' &&
	                !bailed) {
	              bailed = true;
	              console.warn('Parent: ', elm);
	              console.warn('Mismatching childNodes vs. VNodes: ', childNodes, children);
	            }
	            return false
	          }
	        }
	      }
	      if (isDef(data)) {
	        invokeCreateHooks(vnode, insertedVnodeQueue);
	      }
	    }
	    return true
	  }

	  function assertNodeMatch (node, vnode) {
	    if (vnode.tag) {
	      return (
	        vnode.tag.indexOf('vue-component') === 0 ||
	        vnode.tag.toLowerCase() === nodeOps.tagName(node).toLowerCase()
	      )
	    } else {
	      return _toString(vnode.text) === node.data
	    }
	  }

	  return function patch (oldVnode, vnode, hydrating, removeOnly) {
	    if (!vnode) {
	      if (oldVnode) { invokeDestroyHook(oldVnode); }
	      return
	    }

	    var elm, parent;
	    var isInitialPatch = false;
	    var insertedVnodeQueue = [];

	    if (!oldVnode) {
	      // empty mount, create new root element
	      isInitialPatch = true;
	      createElm(vnode, insertedVnodeQueue);
	    } else {
	      var isRealElement = isDef(oldVnode.nodeType);
	      if (!isRealElement && sameVnode(oldVnode, vnode)) {
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
	        elm = oldVnode.elm;
	        parent = nodeOps.parentNode(elm);

	        createElm(vnode, insertedVnodeQueue);

	        // component root element replaced.
	        // update parent placeholder node element.
	        if (vnode.parent) {
	          vnode.parent.elm = vnode.elm;
	          if (isPatchable(vnode)) {
	            for (var i = 0; i < cbs.create.length; ++i) {
	              cbs.create[i](emptyNode, vnode.parent);
	            }
	          }
	        }

	        if (parent !== null) {
	          nodeOps.insertBefore(parent, vnode.elm, nodeOps.nextSibling(elm));
	          removeVnodes(parent, [oldVnode], 0, 0);
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

	function updateDirectives (
	  oldVnode,
	  vnode
	) {
	  if (!oldVnode.data.directives && !vnode.data.directives) {
	    return
	  }
	  var isCreate = oldVnode === emptyNode;
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
	      dirsWithInsert.forEach(function (dir) {
	        callHook$1(dir, 'inserted', vnode, oldVnode);
	      });
	    };
	    if (isCreate) {
	      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert, 'dir-insert');
	    } else {
	      callInsert();
	    }
	  }

	  if (dirsWithPostpatch.length) {
	    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
	      dirsWithPostpatch.forEach(function (dir) {
	        callHook$1(dir, 'componentUpdated', vnode, oldVnode);
	      });
	    }, 'dir-postpatch');
	  }

	  if (!isCreate) {
	    for (key in oldDirs) {
	      if (!newDirs[key]) {
	        // no longer present, unbind
	        callHook$1(oldDirs[key], 'unbind', oldVnode);
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

	function callHook$1 (dir, hook, vnode, oldVnode) {
	  var fn = dir.def && dir.def[hook];
	  if (fn) {
	    fn(vnode.elm, dir, vnode, oldVnode);
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

	// skip type checking this file because we need to attach private properties
	// to elements

	function updateDOMListeners (oldVnode, vnode) {
	  if (!oldVnode.data.on && !vnode.data.on) {
	    return
	  }
	  var on = vnode.data.on || {};
	  var oldOn = oldVnode.data.on || {};
	  var add = vnode.elm._v_add || (vnode.elm._v_add = function (event, handler, capture) {
	    vnode.elm.addEventListener(event, handler, capture);
	  });
	  var remove = vnode.elm._v_remove || (vnode.elm._v_remove = function (event, handler) {
	    vnode.elm.removeEventListener(event, handler);
	  });
	  updateListeners(on, oldOn, add, remove, vnode.context);
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
	      if (elm.value !== strCur && !elm.composing) {
	        elm.value = strCur;
	      }
	    } else {
	      elm[key] = cur;
	    }
	  }
	}

	var domProps = {
	  create: updateDOMProps,
	  update: updateDOMProps
	};

	/*  */

	var parseStyleText = cached(function (cssText) {
	  var res = {};
	  var hasBackground = cssText.indexOf('background') >= 0;
	  // maybe with background-image: url(http://xxx) or base64 img
	  var listDelimiter = hasBackground ? /;(?![^(]*\))/g : ';';
	  var propertyDelimiter = hasBackground ? /:(.+)/ : ':';
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
	    while (childNode.child) {
	      childNode = childNode.child._vnode;
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
	var setProp = function (el, name, val) {
	  /* istanbul ignore if */
	  if (cssVarRE.test(name)) {
	    el.style.setProperty(name, val);
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

	var raf = (inBrowser && window.requestAnimationFrame) || setTimeout;
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

	function enter (vnode) {
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
	  var enterActiveClass = data.enterActiveClass;
	  var appearClass = data.appearClass;
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
	  var transitionNode = activeInstance.$vnode;
	  var context = transitionNode && transitionNode.parent
	    ? transitionNode.parent.context
	    : activeInstance;

	  var isAppear = !context._isMounted || !vnode.isRootInsert;

	  if (isAppear && !appear && appear !== '') {
	    return
	  }

	  var startClass = isAppear ? appearClass : enterClass;
	  var activeClass = isAppear ? appearActiveClass : enterActiveClass;
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
	      if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
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
	      removeTransitionClass(el, startClass);
	      if (!cb.cancelled && !userWantsControl) {
	        whenTransitionEnds(el, type, cb);
	      }
	    });
	  }

	  if (vnode.data.show) {
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

	var transition = inBrowser ? {
	  create: function create (_, vnode) {
	    if (!vnode.data.show) {
	      enter(vnode);
	    }
	  },
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
	    } else if (
	      (vnode.tag === 'textarea' || el.type === 'text') &&
	      !binding.modifiers.lazy
	    ) {
	      if (!isAndroid) {
	        el.addEventListener('compositionstart', onCompositionStart);
	        el.addEventListener('compositionend', onCompositionEnd);
	      }
	      /* istanbul ignore if */
	      if (isIE9) {
	        el.vmodel = true;
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
	  return vnode.child && (!vnode.data || !vnode.data.transition)
	    ? locateNode(vnode.child._vnode)
	    : vnode
	}

	var show = {
	  bind: function bind (el, ref, vnode) {
	    var value = ref.value;

	    vnode = locateNode(vnode);
	    var transition = vnode.data && vnode.data.transition;
	    if (value && transition && !isIE9) {
	      enter(vnode);
	    }
	    var originalDisplay = el.style.display === 'none' ? '' : el.style.display;
	    el.style.display = value ? originalDisplay : 'none';
	    el.__vOriginalDisplay = originalDisplay;
	  },
	  update: function update (el, ref, vnode) {
	    var value = ref.value;
	    var oldValue = ref.oldValue;

	    /* istanbul ignore if */
	    if (value === oldValue) { return }
	    vnode = locateNode(vnode);
	    var transition = vnode.data && vnode.data.transition;
	    if (transition && !isIE9) {
	      if (value) {
	        enter(vnode);
	        el.style.display = el.__vOriginalDisplay;
	      } else {
	        leave(vnode, function () {
	          el.style.display = 'none';
	        });
	      }
	    } else {
	      el.style.display = value ? el.__vOriginalDisplay : 'none';
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
	  enterActiveClass: String,
	  leaveActiveClass: String,
	  appearClass: String,
	  appearActiveClass: String
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

	    var key = child.key = child.key == null || child.isStatic
	      ? ("__v" + (child.tag + this._uid) + "__")
	      : child.key;
	    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
	    var oldRawChild = this._vnode;
	    var oldChild = getRealChild(oldRawChild);

	    // mark v-show
	    // so that the transition module can hand over the control to the directive
	    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
	      child.data.show = true;
	    }

	    if (oldChild && oldChild.data && oldChild.key !== key) {
	      // replace old child transition data with fresh one
	      // important for dynamic transitions!
	      var oldData = oldChild.data.transition = extend({}, data);

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
	Vue$3.prototype.__patch__ = config._isServer ? noop : patch$1;

	// wrap mount
	Vue$3.prototype.$mount = function (
	  el,
	  hydrating
	) {
	  el = el && !config._isServer ? query(el) : undefined;
	  return this._mount(el, hydrating)
	};

	// devtools global hook
	/* istanbul ignore next */
	setTimeout(function () {
	  if (config.devtools) {
	    if (devtools) {
	      devtools.emit('init', Vue$3);
	    } else if (
	      "development" !== 'production' &&
	      inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)
	    ) {
	      console.log(
	        'Download the Vue Devtools for a better development experience:\n' +
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
	var hasLang = function (attr) { return attr.name === 'lang' && attr.value !== 'html'; };
	var isSpecialTag = function (tag, isSFC, stack) {
	  if (isScriptOrStyle(tag)) {
	    return true
	  }
	  // top-level template that has a pre-processor
	  if (
	    isSFC &&
	    tag === 'template' &&
	    stack.length === 1 &&
	    stack[0].attrs.some(hasLang)
	  ) {
	    return true
	  }
	  return false
	};

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
	    if (!lastTag || !isSpecialTag(lastTag, options.sfc, stack)) {
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
	          parseEndTag(endTagMatch[0], endTagMatch[1], curIndex, index);
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
	      parseEndTag('</' + stackedTag + '>', stackedTag, index - endTagLength, index);
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
	        parseEndTag('', lastTag);
	      }
	      if (canBeLeftOpenTag(tagName) && lastTag === tagName) {
	        parseEndTag('', tagName);
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
	      stack.push({ tag: tagName, attrs: attrs });
	      lastTag = tagName;
	      unarySlash = '';
	    }

	    if (options.start) {
	      options.start(tagName, attrs, unary, match.start, match.end);
	    }
	  }

	  function parseEndTag (tag, tagName, start, end) {
	    var pos;
	    if (start == null) { start = index; }
	    if (end == null) { end = index; }

	    // Find the closest opened tag of the same type
	    if (tagName) {
	      var needle = tagName.toLowerCase();
	      for (pos = stack.length - 1; pos >= 0; pos--) {
	        if (stack[pos].tag.toLowerCase() === needle) {
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
	    } else if (tagName.toLowerCase() === 'br') {
	      if (options.start) {
	        options.start(tagName, [], true, start, end);
	      }
	    } else if (tagName.toLowerCase() === 'p') {
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
	  var curly = 0;
	  var square = 0;
	  var paren = 0;
	  var lastFilterIndex = 0;
	  var c, prev, i, expression, filters;

	  for (i = 0; i < exp.length; i++) {
	    prev = c;
	    c = exp.charCodeAt(i);
	    if (inSingle) {
	      // check single quote
	      if (c === 0x27 && prev !== 0x5C) { inSingle = !inSingle; }
	    } else if (inDouble) {
	      // check double quote
	      if (c === 0x22 && prev !== 0x5C) { inDouble = !inDouble; }
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
	        case 0x22: inDouble = true; break // "
	        case 0x27: inSingle = true; break // '
	        case 0x28: paren++; break         // (
	        case 0x29: paren--; break         // )
	        case 0x5B: square++; break        // [
	        case 0x5D: square--; break        // ]
	        case 0x7B: curly++; break         // {
	        case 0x7D: curly--; break         // }
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
	var regexEscapeRE = /[-.*+?^${}()|[\]/\\]/g;

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
	    return dynamicValue
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
	var forIteratorRE = /\(([^,]*),([^,]*)(?:,([^,]*))?\)/;
	var bindRE = /^:|^v-bind:/;
	var onRE = /^@|^v-on:/;
	var argRE = /:(.*)$/;
	var modifierRE = /\.[^.]+/g;
	var specialNewlineRE = /\u2028|\u2029/g;

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
	      if (options.isIE && ns === 'svg') {
	        attrs = guardIESVGBug(attrs);
	      }

	      var element = {
	        type: 1,
	        tag: tag,
	        attrsList: attrs,
	        attrsMap: makeAttrsMap(attrs, options.isIE),
	        parent: currentParent,
	        children: []
	      };
	      if (ns) {
	        element.ns = ns;
	      }

	      if ("client" !== 'server' && isForbiddenTag(element)) {
	        element.forbidden = true;
	        "development" !== 'production' && warn$1(
	          'Templates should only be responsible for mapping the state to the ' +
	          'UI. Avoid placing tags with side-effects in your templates, such as ' +
	          "<" + tag + ">."
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
	        // allow 2 root elements with v-if and v-else
	        if (root.if && element.else) {
	          checkRootConstraints(element);
	          root.elseBlock = element;
	        } else if ("development" !== 'production' && !warned) {
	          warned = true;
	          warn$1(
	            ("Component template should contain exactly one root element:\n\n" + template)
	          );
	        }
	      }
	      if (currentParent && !element.forbidden) {
	        if (element.else) {
	          processElse(element, currentParent);
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
	      if (options.isIE &&
	          currentParent.tag === 'textarea' &&
	          currentParent.attrsMap.placeholder === text) {
	        return
	      }
	      text = inPre || text.trim()
	        ? decodeHTMLCached(text)
	        // only preserve whitespace if its not right after a starting tag
	        : preserveWhitespace && currentParent.children.length ? ' ' : '';
	      if (text) {
	        var expression;
	        if (!inVPre && text !== ' ' && (expression = parseText(text, delimiters))) {
	          currentParent.children.push({
	            type: 2,
	            expression: expression,
	            text: text
	          });
	        } else {
	          // #3895 special character
	          text = text.replace(specialNewlineRE, '');
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
	  }
	  if (getAndRemoveAttr(el, 'v-else') != null) {
	    el.else = true;
	  }
	}

	function processElse (el, parent) {
	  var prev = findPrevElement(parent.children);
	  if (prev && prev.if) {
	    prev.elseBlock = el;
	  } else {
	    warn$1(
	      ("v-else used on element <" + (el.tag) + "> without corresponding v-if.")
	    );
	  }
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
	  } else {
	    var slotTarget = getBindingAttr(el, 'slot');
	    if (slotTarget) {
	      el.slotTarget = slotTarget;
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
	        if (modifiers && modifiers.prop) {
	          isProp = true;
	          name = camelize(name);
	          if (name === 'innerHtml') { name = 'innerHTML'; }
	        }
	        if (isProp || platformMustUseProp(el.tag, name)) {
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

	function makeAttrsMap (attrs, isIE) {
	  var map = {};
	  for (var i = 0, l = attrs.length; i < l; i++) {
	    if ("development" !== 'production' && map[attrs[i].name] && !isIE) {
	      warn$1('duplicate attribute: ' + attrs[i].name);
	    }
	    map[attrs[i].name] = attrs[i].value;
	  }
	  return map
	}

	function findPrevElement (children) {
	  var i = children.length;
	  while (i--) {
	    if (children[i].tag) { return children[i] }
	  }
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
	  isPlatformReservedTag = options.isReservedTag || (function () { return false; });
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
	        var child = node.children[i];
	        isInFor = isInFor || !!node.for;
	        markStaticRoots(child, isInFor);
	        if (child.type === 1 && child.elseBlock) {
	          markStaticRoots(child.elseBlock, isInFor);
	        }
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
	  self: 'if($event.target !== $event.currentTarget)return;'
	};

	function genHandlers (events, native) {
	  var res = native ? 'nativeOn:{' : 'on:{';
	  for (var name in events) {
	    res += "\"" + name + "\":" + (genHandler(events[name])) + ",";
	  }
	  return res.slice(0, -1) + '}'
	}

	function genHandler (
	  handler
	) {
	  if (!handler) {
	    return 'function(){}'
	  } else if (Array.isArray(handler)) {
	    return ("[" + (handler.map(genHandler).join(',')) + "]")
	  } else if (!handler.modifiers) {
	    return simplePathRE.test(handler.value)
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
	  var code = keys.length === 1
	    ? normalizeKeyCode(keys[0])
	    : Array.prototype.concat.apply([], keys.map(normalizeKeyCode));
	  if (Array.isArray(code)) {
	    return ("if(" + (code.map(function (c) { return ("$event.keyCode!==" + c); }).join('&&')) + ")return;")
	  } else {
	    return ("if($event.keyCode!==" + code + ")return;")
	  }
	}

	function normalizeKeyCode (key) {
	  return (
	    parseInt(key, 10) || // number keyCode
	    keyCodes[key] || // built-in alias
	    ("_k(" + (JSON.stringify(key)) + ")") // custom alias
	  )
	}

	/*  */

	function bind$2 (el, dir) {
	  el.wrapData = function (code) {
	    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + (dir.modifiers && dir.modifiers.prop ? ',true' : '') + ")")
	  };
	}

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
	  var code = ast ? genElement(ast) : '_h("div")';
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

	      var children = el.inlineTemplate ? null : genChildren(el);
	      code = "_h('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
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

	// v-if with v-once shuold generate code like (a)?_m(0):_m(1)
	function genIf (el) {
	  var exp = el.if;
	  el.ifProcessed = true; // avoid recursion
	  return ("(" + exp + ")?" + (el.once ? genOnce(el) : genElement(el)) + ":" + (genElse(el)))
	}

	function genElse (el) {
	  return el.elseBlock
	    ? genElement(el.elseBlock)
	    : '_e()'
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
	  // record original tag name for components using "is" attribute
	  if (el.component) {
	    data += "tag:\"" + (el.tag) + "\",";
	  }
	  // slot target
	  if (el.slotTarget) {
	    data += "slot:" + (el.slotTarget) + ",";
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
	  // inline-template
	  if (el.inlineTemplate) {
	    var ast = el.children[0];
	    if ("development" !== 'production' && (
	      el.children.length > 1 || ast.type !== 1
	    )) {
	      warn$2('Inline-template components must have exactly one child element.');
	    }
	    if (ast.type === 1) {
	      var inlineRenderFns = generate(ast, currentOptions);
	      data += "inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}";
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

	function genChildren (el) {
	  if (el.children.length) {
	    return '[' + el.children.map(genNode).join(',') + ']'
	  }
	}

	function genNode (node) {
	  if (node.type === 1) {
	    return genElement(node)
	  } else {
	    return genText(node)
	  }
	}

	function genText (text) {
	  return text.type === 2
	    ? text.expression // no need for () because already wrapped in _s()
	    : JSON.stringify(text.text)
	}

	function genSlot (el) {
	  var slotName = el.slotName || '"default"';
	  var children = genChildren(el);
	  return ("_t(" + slotName + (children ? ("," + children) : '') + ")")
	}

	// componentName is el.component, take it as argument to shun flow's pessimistic refinement
	function genComponent (componentName, el) {
	  var children = el.inlineTemplate ? null : genChildren(el);
	  return ("_h(" + componentName + "," + (genData(el)) + (children ? ("," + children) : '') + ")")
	}

	function genProps (props) {
	  var res = '';
	  for (var i = 0; i < props.length; i++) {
	    var prop = props[i];
	    res += "\"" + (prop.name) + "\":" + (prop.value) + ",";
	  }
	  return res.slice(0, -1)
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
	      "?_i(" + value + "," + valueBinding + ")>-1" +
	      ":_q(" + value + "," + trueValueBinding + ")"
	  );
	  addHandler(el, 'change',
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
	  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
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
	  isIE: isIE,
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


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * vue-router v2.0.3
	 * (c) 2016 Evan You
	 * @license MIT
	 */
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  (global.VueRouter = factory());
	}(this, (function () { 'use strict';

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

	    data.routerView = true

	    var route = parent.$route
	    var cache = parent._routerViewCache || (parent._routerViewCache = {})
	    var depth = 0
	    var inactive = false

	    while (parent) {
	      if (parent.$vnode && parent.$vnode.data.routerView) {
	        depth++
	      }
	      if (parent._inactive) {
	        inactive = true
	      }
	      parent = parent.$parent
	    }

	    data.routerViewDepth = depth
	    var matched = route.matched[depth]
	    if (!matched) {
	      return h()
	    }

	    var name = props.name
	    var component = inactive
	      ? cache[name]
	      : (cache[name] = matched.components[name])

	    if (!inactive) {
	      var hooks = data.hook || (data.hook = {})
	      hooks.init = function (vnode) {
	        matched.instances[name] = vnode.child
	      }
	      hooks.prepatch = function (oldVnode, vnode) {
	        matched.instances[name] = vnode.child
	      }
	      hooks.destroy = function (vnode) {
	        if (matched.instances[name] === vnode.child) {
	          matched.instances[name] = undefined
	        }
	      }
	    }

	    return h(component, data, children)
	  }
	}

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

	  var stack = base.split('/')

	  // remove trailing segment if:
	  // - not appending
	  // - appending to trailing slash (last segment is empty)
	  if (!append || !stack[stack.length - 1]) {
	    stack.pop()
	  }

	  // resolve relative path
	  var segments = relative.replace(/^\//, '').split('/')
	  for (var i = 0; i < segments.length; i++) {
	    var segment = segments[i]
	    if (segment === '.') {
	      continue
	    } else if (segment === '..') {
	      stack.pop()
	    } else {
	      stack.push(segment)
	    }
	  }

	  // ensure leading slash
	  if (stack[0] !== '') {
	    stack.unshift('')
	  }

	  return stack.join('/')
	}

	function parsePath (path) {
	  var hash = ''
	  var query = ''

	  var hashIndex = path.indexOf('#')
	  if (hashIndex >= 0) {
	    hash = path.slice(hashIndex)
	    path = path.slice(0, hashIndex)
	  }

	  var queryIndex = path.indexOf('?')
	  if (queryIndex >= 0) {
	    query = path.slice(queryIndex + 1)
	    path = path.slice(0, queryIndex)
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

	function assert (condition, message) {
	  if (!condition) {
	    throw new Error(("[vue-router] " + message))
	  }
	}

	function warn (condition, message) {
	  if (!condition) {
	    typeof console !== 'undefined' && console.warn(("[vue-router] " + message))
	  }
	}

	/*  */

	var encode = encodeURIComponent
	var decode = decodeURIComponent

	function resolveQuery (
	  query,
	  extraQuery
	) {
	  if ( extraQuery === void 0 ) extraQuery = {};

	  if (query) {
	    var parsedQuery
	    try {
	      parsedQuery = parseQuery(query)
	    } catch (e) {
	      warn(false, e.message)
	      parsedQuery = {}
	    }
	    for (var key in extraQuery) {
	      parsedQuery[key] = extraQuery[key]
	    }
	    return parsedQuery
	  } else {
	    return extraQuery
	  }
	}

	function parseQuery (query) {
	  var res = {}

	  query = query.trim().replace(/^(\?|#|&)/, '')

	  if (!query) {
	    return res
	  }

	  query.split('&').forEach(function (param) {
	    var parts = param.replace(/\+/g, ' ').split('=')
	    var key = decode(parts.shift())
	    var val = parts.length > 0
	      ? decode(parts.join('='))
	      : null

	    if (res[key] === undefined) {
	      res[key] = val
	    } else if (Array.isArray(res[key])) {
	      res[key].push(val)
	    } else {
	      res[key] = [res[key], val]
	    }
	  })

	  return res
	}

	function stringifyQuery (obj) {
	  var res = obj ? Object.keys(obj).sort().map(function (key) {
	    var val = obj[key]

	    if (val === undefined) {
	      return ''
	    }

	    if (val === null) {
	      return encode(key)
	    }

	    if (Array.isArray(val)) {
	      var result = []
	      val.slice().forEach(function (val2) {
	        if (val2 === undefined) {
	          return
	        }
	        if (val2 === null) {
	          result.push(encode(key))
	        } else {
	          result.push(encode(key) + '=' + encode(val2))
	        }
	      })
	      return result.join('&')
	    }

	    return encode(key) + '=' + encode(val)
	  }).filter(function (x) { return x.length > 0; }).join('&') : null
	  return res ? ("?" + res) : ''
	}

	/*  */

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
	  }
	  if (redirectedFrom) {
	    route.redirectedFrom = getFullPath(redirectedFrom)
	  }
	  return Object.freeze(route)
	}

	// the starting route that represents the initial state
	var START = createRoute(null, {
	  path: '/'
	})

	function formatMatch (record) {
	  var res = []
	  while (record) {
	    res.unshift(record)
	    record = record.parent
	  }
	  return res
	}

	function getFullPath (ref) {
	  var path = ref.path;
	  var query = ref.query; if ( query === void 0 ) query = {};
	  var hash = ref.hash; if ( hash === void 0 ) hash = '';

	  return (path || '/') + stringifyQuery(query) + hash
	}

	var trailingSlashRE = /\/$/
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

	  var aKeys = Object.keys(a)
	  var bKeys = Object.keys(b)
	  if (aKeys.length !== bKeys.length) {
	    return false
	  }
	  return aKeys.every(function (key) { return String(a[key]) === String(b[key]); })
	}

	function isIncludedRoute (current, target) {
	  return (
	    current.path.indexOf(target.path.replace(/\/$/, '')) === 0 &&
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

	function normalizeLocation (
	  raw,
	  current,
	  append
	) {
	  var next = typeof raw === 'string' ? { path: raw } : raw
	  if (next.name || next._normalized) {
	    return next
	  }

	  var parsedPath = parsePath(next.path || '')
	  var basePath = (current && current.path) || '/'
	  var path = parsedPath.path
	    ? resolvePath(parsedPath.path, basePath, append)
	    : (current && current.path) || '/'
	  var query = resolveQuery(parsedPath.query, next.query)
	  var hash = next.hash || parsedPath.hash
	  if (hash && hash.charAt(0) !== '#') {
	    hash = "#" + hash
	  }

	  return {
	    _normalized: true,
	    path: path,
	    query: query,
	    hash: hash
	  }
	}

	/*  */

	// work around weird flow bug
	var toTypes = [String, Object]

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
	    activeClass: String
	  },
	  render: function render (h) {
	    var this$1 = this;

	    var router = this.$router
	    var current = this.$route
	    var to = normalizeLocation(this.to, current, this.append)
	    var resolved = router.match(to, current)
	    var fullPath = resolved.redirectedFrom || resolved.fullPath
	    var base = router.history.base
	    var href = createHref(base, fullPath, router.mode)
	    var classes = {}
	    var activeClass = this.activeClass || router.options.linkActiveClass || 'router-link-active'
	    var compareTarget = to.path ? createRoute(null, to) : resolved
	    classes[activeClass] = this.exact
	      ? isSameRoute(current, compareTarget)
	      : isIncludedRoute(current, compareTarget)

	    var on = {
	      click: function (e) {
	        // don't redirect with control keys
	        /* istanbul ignore if */
	        if (e.metaKey || e.ctrlKey || e.shiftKey) { return }
	        // don't redirect when preventDefault called
	        /* istanbul ignore if */
	        if (e.defaultPrevented) { return }
	        // don't redirect on right click
	        /* istanbul ignore if */
	        if (e.button !== 0) { return }
	        // don't redirect if `target="_blank"`
	        /* istanbul ignore if */
	        var target = e.target.getAttribute('target')
	        if (/\b_blank\b/i.test(target)) { return }

	        e.preventDefault()
	        if (this$1.replace) {
	          router.replace(to)
	        } else {
	          router.push(to)
	        }
	      }
	    }

	    var data = {
	      class: classes
	    }

	    if (this.tag === 'a') {
	      data.on = on
	      data.attrs = { href: href }
	    } else {
	      // find the first <a> child and apply listener and href
	      var a = findAnchor(this.$slots.default)
	      if (a) {
	        // in case the <a> is a static node
	        a.isStatic = false
	        var extend = _Vue.util.extend
	        var aData = a.data = extend({}, a.data)
	        aData.on = on
	        var aAttrs = a.data.attrs = extend({}, a.data.attrs)
	        aAttrs.href = href
	      } else {
	        // doesn't have <a> child, apply listener to self
	        data.on = on
	      }
	    }

	    return h(this.tag, data, this.$slots.default)
	  }
	}

	function findAnchor (children) {
	  if (children) {
	    var child
	    for (var i = 0; i < children.length; i++) {
	      child = children[i]
	      if (child.tag === 'a') {
	        return child
	      }
	      if (child.children && (child = findAnchor(child.children))) {
	        return child
	      }
	    }
	  }
	}

	function createHref (base, fullPath, mode) {
	  var path = mode === 'hash' ? '/#' + fullPath : fullPath
	  return base ? cleanPath(base + path) : path
	}

	var _Vue

	function install (Vue) {
	  if (install.installed) { return }
	  install.installed = true

	  _Vue = Vue

	  Object.defineProperty(Vue.prototype, '$router', {
	    get: function get () { return this.$root._router }
	  })

	  Object.defineProperty(Vue.prototype, '$route', {
	    get: function get$1 () { return this.$root._route }
	  })

	  Vue.mixin({
	    beforeCreate: function beforeCreate () {
	      if (this.$options.router) {
	        this._router = this.$options.router
	        this._router.init(this)
	        Vue.util.defineReactive(this, '_route', this._router.history.current)
	      }
	    }
	  })

	  Vue.component('router-view', View)
	  Vue.component('router-link', Link)

	  var strats = Vue.config.optionMergeStrategies
	  // use the same hook merging strategy for route hooks
	  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.created
	}

	var __moduleExports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};

	var isarray = __moduleExports

	/**
	 * Expose `pathToRegexp`.
	 */
	var index = pathToRegexp
	var parse_1 = parse
	var compile_1 = compile
	var tokensToFunction_1 = tokensToFunction
	var tokensToRegExp_1 = tokensToRegExp

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
	].join('|'), 'g')

	/**
	 * Parse a string for the raw tokens.
	 *
	 * @param  {string}  str
	 * @param  {Object=} options
	 * @return {!Array}
	 */
	function parse (str, options) {
	  var tokens = []
	  var key = 0
	  var index = 0
	  var path = ''
	  var defaultDelimiter = options && options.delimiter || '/'
	  var res

	  while ((res = PATH_REGEXP.exec(str)) != null) {
	    var m = res[0]
	    var escaped = res[1]
	    var offset = res.index
	    path += str.slice(index, offset)
	    index = offset + m.length

	    // Ignore already escaped sequences.
	    if (escaped) {
	      path += escaped[1]
	      continue
	    }

	    var next = str[index]
	    var prefix = res[2]
	    var name = res[3]
	    var capture = res[4]
	    var group = res[5]
	    var modifier = res[6]
	    var asterisk = res[7]

	    // Push the current path onto the tokens.
	    if (path) {
	      tokens.push(path)
	      path = ''
	    }

	    var partial = prefix != null && next != null && next !== prefix
	    var repeat = modifier === '+' || modifier === '*'
	    var optional = modifier === '?' || modifier === '*'
	    var delimiter = res[2] || defaultDelimiter
	    var pattern = capture || group

	    tokens.push({
	      name: name || key++,
	      prefix: prefix || '',
	      delimiter: delimiter,
	      optional: optional,
	      repeat: repeat,
	      partial: partial,
	      asterisk: !!asterisk,
	      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
	    })
	  }

	  // Match any characters still remaining.
	  if (index < str.length) {
	    path += str.substr(index)
	  }

	  // If the path exists, push it onto the end.
	  if (path) {
	    tokens.push(path)
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
	  var matches = new Array(tokens.length)

	  // Compile all the patterns before compilation.
	  for (var i = 0; i < tokens.length; i++) {
	    if (typeof tokens[i] === 'object') {
	      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
	    }
	  }

	  return function (obj, opts) {
	    var path = ''
	    var data = obj || {}
	    var options = opts || {}
	    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

	    for (var i = 0; i < tokens.length; i++) {
	      var token = tokens[i]

	      if (typeof token === 'string') {
	        path += token

	        continue
	      }

	      var value = data[token.name]
	      var segment

	      if (value == null) {
	        if (token.optional) {
	          // Prepend partial segment prefixes.
	          if (token.partial) {
	            path += token.prefix
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
	          segment = encode(value[j])

	          if (!matches[i].test(segment)) {
	            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
	          }

	          path += (j === 0 ? token.prefix : token.delimiter) + segment
	        }

	        continue
	      }

	      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

	      if (!matches[i].test(segment)) {
	        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
	      }

	      path += token.prefix + segment
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
	  re.keys = keys
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
	  var groups = path.source.match(/\((?!\?)/g)

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
	      })
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
	  var parts = []

	  for (var i = 0; i < path.length; i++) {
	    parts.push(pathToRegexp(path[i], keys, options).source)
	  }

	  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

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
	    options = /** @type {!Object} */ (keys || options)
	    keys = []
	  }

	  options = options || {}

	  var strict = options.strict
	  var end = options.end !== false
	  var route = ''

	  // Iterate over the tokens and create our regexp string.
	  for (var i = 0; i < tokens.length; i++) {
	    var token = tokens[i]

	    if (typeof token === 'string') {
	      route += escapeString(token)
	    } else {
	      var prefix = escapeString(token.prefix)
	      var capture = '(?:' + token.pattern + ')'

	      keys.push(token)

	      if (token.repeat) {
	        capture += '(?:' + prefix + capture + ')*'
	      }

	      if (token.optional) {
	        if (!token.partial) {
	          capture = '(?:' + prefix + '(' + capture + '))?'
	        } else {
	          capture = prefix + '(' + capture + ')?'
	        }
	      } else {
	        capture = prefix + '(' + capture + ')'
	      }

	      route += capture
	    }
	  }

	  var delimiter = escapeString(options.delimiter || '/')
	  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

	  // In non-strict mode we allow a slash at the end of match. If the path to
	  // match already ends with a slash, we remove it for consistency. The slash
	  // is valid at the end of a path match, not in the middle. This is important
	  // in non-ending mode, where "/test/" shouldn't match "/test//route".
	  if (!strict) {
	    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
	  }

	  if (end) {
	    route += '$'
	  } else {
	    // In non-ending mode, we need the capturing groups to match as much as
	    // possible by using a positive lookahead to the end or next path segment.
	    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
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
	    options = /** @type {!Object} */ (keys || options)
	    keys = []
	  }

	  options = options || {}

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

	function createRouteMap (routes) {
	  var pathMap = Object.create(null)
	  var nameMap = Object.create(null)

	  routes.forEach(function (route) {
	    addRouteRecord(pathMap, nameMap, route)
	  })

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
	  assert(path != null, "\"path\" is required in a route configuration.")

	  var record = {
	    path: normalizePath(path, parent),
	    components: route.components || { default: route.component },
	    instances: {},
	    name: name,
	    parent: parent,
	    matchAs: matchAs,
	    redirect: route.redirect,
	    beforeEnter: route.beforeEnter,
	    meta: route.meta || {}
	  }

	  if (route.children) {
	    // Warn if route is named and has a default child route.
	    // If users navigate to this route by name, the default child will
	    // not be rendered (GH Issue #629)
	    if (false) {}
	    route.children.forEach(function (child) {
	      addRouteRecord(pathMap, nameMap, child, record)
	    })
	  }

	  if (route.alias !== undefined) {
	    if (Array.isArray(route.alias)) {
	      route.alias.forEach(function (alias) {
	        addRouteRecord(pathMap, nameMap, { path: alias }, parent, record.path)
	      })
	    } else {
	      addRouteRecord(pathMap, nameMap, { path: route.alias }, parent, record.path)
	    }
	  }

	  pathMap[record.path] = record
	  if (name) {
	    if (!nameMap[name]) {
	      nameMap[name] = record
	    } else {
	      warn(false, ("Duplicate named routes definition: { name: \"" + name + "\", path: \"" + (record.path) + "\" }"))
	    }
	  }
	}

	function normalizePath (path, parent) {
	  path = path.replace(/\/$/, '')
	  if (path[0] === '/') { return path }
	  if (parent == null) { return path }
	  return cleanPath(((parent.path) + "/" + path))
	}

	/*  */

	var regexpCache = Object.create(null)

	var regexpParamsCache = Object.create(null)

	var regexpCompileCache = Object.create(null)

	function createMatcher (routes) {
	  var ref = createRouteMap(routes);
	  var pathMap = ref.pathMap;
	  var nameMap = ref.nameMap;

	  function match (
	    raw,
	    currentRoute,
	    redirectedFrom
	  ) {
	    var location = normalizeLocation(raw, currentRoute)
	    var name = location.name;

	    if (name) {
	      var record = nameMap[name]
	      var paramNames = getParams(record.path)

	      if (typeof location.params !== 'object') {
	        location.params = {}
	      }

	      if (currentRoute && typeof currentRoute.params === 'object') {
	        for (var key in currentRoute.params) {
	          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
	            location.params[key] = currentRoute.params[key]
	          }
	        }
	      }

	      if (record) {
	        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""))
	        return _createRoute(record, location, redirectedFrom)
	      }
	    } else if (location.path) {
	      location.params = {}
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
	    var originalRedirect = record.redirect
	    var redirect = typeof originalRedirect === 'function'
	        ? originalRedirect(createRoute(record, location))
	        : originalRedirect

	    if (typeof redirect === 'string') {
	      redirect = { path: redirect }
	    }

	    if (!redirect || typeof redirect !== 'object') {
	      warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))))
	      return _createRoute(null, location)
	    }

	    var re = redirect
	    var name = re.name;
	    var path = re.path;
	    var query = location.query;
	    var hash = location.hash;
	    var params = location.params;
	    query = re.hasOwnProperty('query') ? re.query : query
	    hash = re.hasOwnProperty('hash') ? re.hash : hash
	    params = re.hasOwnProperty('params') ? re.params : params

	    if (name) {
	      // resolved named direct
	      var targetRecord = nameMap[name]
	      assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."))
	      return match({
	        _normalized: true,
	        name: name,
	        query: query,
	        hash: hash,
	        params: params
	      }, undefined, location)
	    } else if (path) {
	      // 1. resolve relative redirect
	      var rawPath = resolveRecordPath(path, record)
	      // 2. resolve params
	      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""))
	      // 3. rematch with existing query and hash
	      return match({
	        _normalized: true,
	        path: resolvedPath,
	        query: query,
	        hash: hash
	      }, undefined, location)
	    } else {
	      warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))))
	      return _createRoute(null, location)
	    }
	  }

	  function alias (
	    record,
	    location,
	    matchAs
	  ) {
	    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""))
	    var aliasedMatch = match({
	      _normalized: true,
	      path: aliasedPath
	    })
	    if (aliasedMatch) {
	      var matched = aliasedMatch.matched
	      var aliasedRecord = matched[matched.length - 1]
	      location.params = aliasedMatch.params
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

	  return match
	}

	function getRouteRegex (path) {
	  var hit = regexpCache[path]
	  var keys, regexp

	  if (hit) {
	    keys = hit.keys
	    regexp = hit.regexp
	  } else {
	    keys = []
	    regexp = index(path, keys)
	    regexpCache[path] = { keys: keys, regexp: regexp }
	  }

	  return { keys: keys, regexp: regexp }
	}

	function matchRoute (
	  path,
	  params,
	  pathname
	) {
	  var ref = getRouteRegex(path);
	  var regexp = ref.regexp;
	  var keys = ref.keys;
	  var m = pathname.match(regexp)

	  if (!m) {
	    return false
	  } else if (!params) {
	    return true
	  }

	  for (var i = 1, len = m.length; i < len; ++i) {
	    var key = keys[i - 1]
	    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i]
	    if (key) { params[key.name] = val }
	  }

	  return true
	}

	function fillParams (
	  path,
	  params,
	  routeMsg
	) {
	  try {
	    var filler =
	      regexpCompileCache[path] ||
	      (regexpCompileCache[path] = index.compile(path))
	    return filler(params || {}, { pretty: true })
	  } catch (e) {
	    assert(false, ("missing param for " + routeMsg + ": " + (e.message)))
	    return ''
	  }
	}

	function getParams (path) {
	  return regexpParamsCache[path] ||
	    (regexpParamsCache[path] = getRouteRegex(path).keys.map(function (key) { return key.name; }))
	}

	function resolveRecordPath (path, record) {
	  return resolvePath(path, record.parent ? record.parent.path : '/', true)
	}

	/*  */

	var inBrowser = typeof window !== 'undefined'

	var supportsHistory = inBrowser && (function () {
	  var ua = window.navigator.userAgent

	  if (
	    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
	    ua.indexOf('Mobile Safari') !== -1 &&
	    ua.indexOf('Chrome') === -1 &&
	    ua.indexOf('Windows Phone') === -1
	  ) {
	    return false
	  }

	  return window.history && 'pushState' in window.history
	})()

	/*  */

	function runQueue (queue, fn, cb) {
	  var step = function (index) {
	    if (index >= queue.length) {
	      cb()
	    } else {
	      if (queue[index]) {
	        fn(queue[index], function () {
	          step(index + 1)
	        })
	      } else {
	        step(index + 1)
	      }
	    }
	  }
	  step(0)
	}

	/*  */


	var History = function History (router, base) {
	  this.router = router
	  this.base = normalizeBase(base)
	  // start with a route object that stands for "nowhere"
	  this.current = START
	  this.pending = null
	};

	History.prototype.listen = function listen (cb) {
	  this.cb = cb
	};

	History.prototype.transitionTo = function transitionTo (location, cb) {
	    var this$1 = this;

	  var route = this.router.match(location, this.current)
	  this.confirmTransition(route, function () {
	    this$1.updateRoute(route)
	    cb && cb(route)
	    this$1.ensureURL()
	  })
	};

	History.prototype.confirmTransition = function confirmTransition (route, cb) {
	    var this$1 = this;

	  var current = this.current
	  if (isSameRoute(route, current)) {
	    this.ensureURL()
	    return
	  }

	  var ref = resolveQueue(this.current.matched, route.matched);
	    var deactivated = ref.deactivated;
	    var activated = ref.activated;

	  var queue = [].concat(
	    // in-component leave guards
	    extractLeaveGuards(deactivated),
	    // global before hooks
	    this.router.beforeHooks,
	    // enter guards
	    activated.map(function (m) { return m.beforeEnter; }),
	    // async components
	    resolveAsyncComponents(activated)
	  )

	  this.pending = route
	  var iterator = function (hook, next) {
	    if (this$1.pending !== route) { return }
	    hook(route, current, function (to) {
	      if (to === false) {
	        // next(false) -> abort navigation, ensure current URL
	        this$1.ensureURL(true)
	      } else if (typeof to === 'string' || typeof to === 'object') {
	        // next('/') or next({ path: '/' }) -> redirect
	        this$1.push(to)
	      } else {
	        // confirm transition and pass on the value
	        next(to)
	      }
	    })
	  }

	  runQueue(queue, iterator, function () {
	    var postEnterCbs = []
	    var enterGuards = extractEnterGuards(activated, postEnterCbs, function () {
	      return this$1.current === route
	    })
	    // wait until async components are resolved before
	    // extracting in-component enter guards
	    runQueue(enterGuards, iterator, function () {
	      if (this$1.pending === route) {
	        this$1.pending = null
	        cb(route)
	        this$1.router.app.$nextTick(function () {
	          postEnterCbs.forEach(function (cb) { return cb(); })
	        })
	      }
	    })
	  })
	};

	History.prototype.updateRoute = function updateRoute (route) {
	  var prev = this.current
	  this.current = route
	  this.cb && this.cb(route)
	  this.router.afterHooks.forEach(function (hook) {
	    hook && hook(route, prev)
	  })
	};

	function normalizeBase (base) {
	  if (!base) {
	    if (inBrowser) {
	      // respect <base> tag
	      var baseEl = document.querySelector('base')
	      base = baseEl ? baseEl.getAttribute('href') : '/'
	    } else {
	      base = '/'
	    }
	  }
	  // make sure there's the starting slash
	  if (base.charAt(0) !== '/') {
	    base = '/' + base
	  }
	  // remove trailing slash
	  return base.replace(/\/$/, '')
	}

	function resolveQueue (
	  current,
	  next
	) {
	  var i
	  var max = Math.max(current.length, next.length)
	  for (i = 0; i < max; i++) {
	    if (current[i] !== next[i]) {
	      break
	    }
	  }
	  return {
	    activated: next.slice(i),
	    deactivated: current.slice(i)
	  }
	}

	function extractGuard (
	  def,
	  key
	) {
	  if (typeof def !== 'function') {
	    // extend now so that global mixins are applied.
	    def = _Vue.extend(def)
	  }
	  return def.options[key]
	}

	function extractLeaveGuards (matched) {
	  return flatten(flatMapComponents(matched, function (def, instance) {
	    var guard = extractGuard(def, 'beforeRouteLeave')
	    if (guard) {
	      return Array.isArray(guard)
	        ? guard.map(function (guard) { return wrapLeaveGuard(guard, instance); })
	        : wrapLeaveGuard(guard, instance)
	    }
	  }).reverse())
	}

	function wrapLeaveGuard (
	  guard,
	  instance
	) {
	  return function routeLeaveGuard () {
	    return guard.apply(instance, arguments)
	  }
	}

	function extractEnterGuards (
	  matched,
	  cbs,
	  isValid
	) {
	  return flatten(flatMapComponents(matched, function (def, _, match, key) {
	    var guard = extractGuard(def, 'beforeRouteEnter')
	    if (guard) {
	      return Array.isArray(guard)
	        ? guard.map(function (guard) { return wrapEnterGuard(guard, cbs, match, key, isValid); })
	        : wrapEnterGuard(guard, cbs, match, key, isValid)
	    }
	  }))
	}

	function wrapEnterGuard (
	  guard,
	  cbs,
	  match,
	  key,
	  isValid
	) {
	  return function routeEnterGuard (to, from, next) {
	    return guard(to, from, function (cb) {
	      next(cb)
	      if (typeof cb === 'function') {
	        cbs.push(function () {
	          // #750
	          // if a router-view is wrapped with an out-in transition,
	          // the instance may not have been registered at this time.
	          // we will need to poll for registration until current route
	          // is no longer valid.
	          poll(cb, match.instances, key, isValid)
	        })
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
	    cb(instances[key])
	  } else if (isValid()) {
	    setTimeout(function () {
	      poll(cb, instances, key, isValid)
	    }, 16)
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
	        var resolve = function (resolvedDef) {
	          match.components[key] = resolvedDef
	          next()
	        }

	        var reject = function (reason) {
	          warn(false, ("Failed to resolve async component " + key + ": " + reason))
	          next(false)
	        }

	        var res = def(resolve, reject)
	        if (res && typeof res.then === 'function') {
	          res.then(resolve, reject)
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

	/*  */

	var positionStore = Object.create(null)

	function saveScrollPosition (key) {
	  if (!key) { return }
	  positionStore[key] = {
	    x: window.pageXOffset,
	    y: window.pageYOffset
	  }
	}

	function getScrollPosition (key) {
	  if (!key) { return }
	  return positionStore[key]
	}

	function getElementPosition (el) {
	  var docRect = document.documentElement.getBoundingClientRect()
	  var elRect = el.getBoundingClientRect()
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


	var genKey = function () { return String(Date.now()); }
	var _key = genKey()

	var HTML5History = (function (History) {
	  function HTML5History (router, base) {
	    var this$1 = this;

	    History.call(this, router, base)

	    var expectScroll = router.options.scrollBehavior
	    window.addEventListener('popstate', function (e) {
	      _key = e.state && e.state.key
	      var current = this$1.current
	      this$1.transitionTo(getLocation(this$1.base), function (next) {
	        if (expectScroll) {
	          this$1.handleScroll(next, current, true)
	        }
	      })
	    })

	    if (expectScroll) {
	      window.addEventListener('scroll', function () {
	        saveScrollPosition(_key)
	      })
	    }
	  }

	  if ( History ) HTML5History.__proto__ = History;
	  HTML5History.prototype = Object.create( History && History.prototype );
	  HTML5History.prototype.constructor = HTML5History;

	  HTML5History.prototype.go = function go (n) {
	    window.history.go(n)
	  };

	  HTML5History.prototype.push = function push (location) {
	    var this$1 = this;

	    var current = this.current
	    this.transitionTo(location, function (route) {
	      pushState(cleanPath(this$1.base + route.fullPath))
	      this$1.handleScroll(route, current, false)
	    })
	  };

	  HTML5History.prototype.replace = function replace (location) {
	    var this$1 = this;

	    var current = this.current
	    this.transitionTo(location, function (route) {
	      replaceState(cleanPath(this$1.base + route.fullPath))
	      this$1.handleScroll(route, current, false)
	    })
	  };

	  HTML5History.prototype.ensureURL = function ensureURL (push) {
	    if (getLocation(this.base) !== this.current.fullPath) {
	      var current = cleanPath(this.base + this.current.fullPath)
	      push ? pushState(current) : replaceState(current)
	    }
	  };

	  HTML5History.prototype.handleScroll = function handleScroll (to, from, isPop) {
	    var router = this.router
	    if (!router.app) {
	      return
	    }

	    var behavior = router.options.scrollBehavior
	    if (!behavior) {
	      return
	    }
	    assert(typeof behavior === 'function', "scrollBehavior must be a function")

	    // wait until re-render finishes before scrolling
	    router.app.$nextTick(function () {
	      var position = getScrollPosition(_key)
	      var shouldScroll = behavior(to, from, isPop ? position : null)
	      if (!shouldScroll) {
	        return
	      }
	      var isObject = typeof shouldScroll === 'object'
	      if (isObject && typeof shouldScroll.selector === 'string') {
	        var el = document.querySelector(shouldScroll.selector)
	        if (el) {
	          position = getElementPosition(el)
	        } else if (isValidPosition(shouldScroll)) {
	          position = normalizePosition(shouldScroll)
	        }
	      } else if (isObject && isValidPosition(shouldScroll)) {
	        position = normalizePosition(shouldScroll)
	      }

	      if (position) {
	        window.scrollTo(position.x, position.y)
	      }
	    })
	  };

	  return HTML5History;
	}(History));

	function getLocation (base) {
	  var path = window.location.pathname
	  if (base && path.indexOf(base) === 0) {
	    path = path.slice(base.length)
	  }
	  return (path || '/') + window.location.search + window.location.hash
	}

	function pushState (url, replace) {
	  // try...catch the pushState call to get around Safari
	  // DOM Exception 18 where it limits to 100 pushState calls
	  var history = window.history
	  try {
	    if (replace) {
	      history.replaceState({ key: _key }, '', url)
	    } else {
	      _key = genKey()
	      history.pushState({ key: _key }, '', url)
	    }
	    saveScrollPosition(_key)
	  } catch (e) {
	    window.location[replace ? 'assign' : 'replace'](url)
	  }
	}

	function replaceState (url) {
	  pushState(url, true)
	}

	/*  */


	var HashHistory = (function (History) {
	  function HashHistory (router, base, fallback) {
	    History.call(this, router, base)

	    // check history fallback deeplinking
	    if (fallback && this.checkFallback()) {
	      return
	    }

	    ensureSlash()
	  }

	  if ( History ) HashHistory.__proto__ = History;
	  HashHistory.prototype = Object.create( History && History.prototype );
	  HashHistory.prototype.constructor = HashHistory;

	  HashHistory.prototype.checkFallback = function checkFallback () {
	    var location = getLocation(this.base)
	    if (!/^\/#/.test(location)) {
	      window.location.replace(
	        cleanPath(this.base + '/#' + location)
	      )
	      return true
	    }
	  };

	  HashHistory.prototype.onHashChange = function onHashChange () {
	    if (!ensureSlash()) {
	      return
	    }
	    this.transitionTo(getHash(), function (route) {
	      replaceHash(route.fullPath)
	    })
	  };

	  HashHistory.prototype.push = function push (location) {
	    this.transitionTo(location, function (route) {
	      pushHash(route.fullPath)
	    })
	  };

	  HashHistory.prototype.replace = function replace (location) {
	    this.transitionTo(location, function (route) {
	      replaceHash(route.fullPath)
	    })
	  };

	  HashHistory.prototype.go = function go (n) {
	    window.history.go(n)
	  };

	  HashHistory.prototype.ensureURL = function ensureURL (push) {
	    var current = this.current.fullPath
	    if (getHash() !== current) {
	      push ? pushHash(current) : replaceHash(current)
	    }
	  };

	  return HashHistory;
	}(History));

	function ensureSlash () {
	  var path = getHash()
	  if (path.charAt(0) === '/') {
	    return true
	  }
	  replaceHash('/' + path)
	  return false
	}

	function getHash () {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  var href = window.location.href
	  var index = href.indexOf('#')
	  return index === -1 ? '' : href.slice(index + 1)
	}

	function pushHash (path) {
	  window.location.hash = path
	}

	function replaceHash (path) {
	  var i = window.location.href.indexOf('#')
	  window.location.replace(
	    window.location.href.slice(0, i >= 0 ? i : 0) + '#' + path
	  )
	}

	/*  */


	var AbstractHistory = (function (History) {
	  function AbstractHistory (router) {
	    History.call(this, router)
	    this.stack = []
	    this.index = -1
	  }

	  if ( History ) AbstractHistory.__proto__ = History;
	  AbstractHistory.prototype = Object.create( History && History.prototype );
	  AbstractHistory.prototype.constructor = AbstractHistory;

	  AbstractHistory.prototype.push = function push (location) {
	    var this$1 = this;

	    this.transitionTo(location, function (route) {
	      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route)
	      this$1.index++
	    })
	  };

	  AbstractHistory.prototype.replace = function replace (location) {
	    var this$1 = this;

	    this.transitionTo(location, function (route) {
	      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route)
	    })
	  };

	  AbstractHistory.prototype.go = function go (n) {
	    var this$1 = this;

	    var targetIndex = this.index + n
	    if (targetIndex < 0 || targetIndex >= this.stack.length) {
	      return
	    }
	    var route = this.stack[targetIndex]
	    this.confirmTransition(route, function () {
	      this$1.index = targetIndex
	      this$1.updateRoute(route)
	    })
	  };

	  AbstractHistory.prototype.ensureURL = function ensureURL () {
	    // noop
	  };

	  return AbstractHistory;
	}(History));

	/*  */

	var VueRouter = function VueRouter (options) {
	  if ( options === void 0 ) options = {};

	  this.app = null
	  this.options = options
	  this.beforeHooks = []
	  this.afterHooks = []
	  this.match = createMatcher(options.routes || [])

	  var mode = options.mode || 'hash'
	  this.fallback = mode === 'history' && !supportsHistory
	  if (this.fallback) {
	    mode = 'hash'
	  }
	  if (!inBrowser) {
	    mode = 'abstract'
	  }
	  this.mode = mode

	  switch (mode) {
	    case 'history':
	      this.history = new HTML5History(this, options.base)
	      break
	    case 'hash':
	      this.history = new HashHistory(this, options.base, this.fallback)
	      break
	    case 'abstract':
	      this.history = new AbstractHistory(this)
	      break
	    default:
	      assert(false, ("invalid mode: " + mode))
	  }
	};

	var prototypeAccessors = { currentRoute: {} };

	prototypeAccessors.currentRoute.get = function () {
	  return this.history && this.history.current
	};

	VueRouter.prototype.init = function init (app /* Vue component instance */) {
	    var this$1 = this;

	  assert(
	    install.installed,
	    "not installed. Make sure to call `Vue.use(VueRouter)` " +
	    "before creating root instance."
	  )

	  this.app = app

	  var history = this.history

	  if (history instanceof HTML5History) {
	    history.transitionTo(getLocation(history.base))
	  } else if (history instanceof HashHistory) {
	    history.transitionTo(getHash(), function () {
	      window.addEventListener('hashchange', function () {
	        history.onHashChange()
	      })
	    })
	  }

	  history.listen(function (route) {
	    this$1.app._route = route
	  })
	};

	VueRouter.prototype.beforeEach = function beforeEach (fn) {
	  this.beforeHooks.push(fn)
	};

	VueRouter.prototype.afterEach = function afterEach (fn) {
	  this.afterHooks.push(fn)
	};

	VueRouter.prototype.push = function push (location) {
	  this.history.push(location)
	};

	VueRouter.prototype.replace = function replace (location) {
	  this.history.replace(location)
	};

	VueRouter.prototype.go = function go (n) {
	  this.history.go(n)
	};

	VueRouter.prototype.back = function back () {
	  this.go(-1)
	};

	VueRouter.prototype.forward = function forward () {
	  this.go(1)
	};

	VueRouter.prototype.getMatchedComponents = function getMatchedComponents () {
	  if (!this.currentRoute) {
	    return []
	  }
	  return [].concat.apply([], this.currentRoute.matched.map(function (m) {
	    return Object.keys(m.components).map(function (key) {
	      return m.components[key]
	    })
	  }))
	};

	Object.defineProperties( VueRouter.prototype, prototypeAccessors );

	VueRouter.install = install

	if (inBrowser && window.Vue) {
	  window.Vue.use(VueRouter)
	}

	return VueRouter;

	})));

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _datepicker = __webpack_require__(8);

	var _datepicker2 = _interopRequireDefault(_datepicker);

	var _daterangepicker = __webpack_require__(84);

	var _daterangepicker2 = _interopRequireDefault(_daterangepicker);

	var _inputNumber = __webpack_require__(92);

	var _inputNumber2 = _interopRequireDefault(_inputNumber);

	var _loading = __webpack_require__(97);

	var _loading2 = _interopRequireDefault(_loading);

	var _message = __webpack_require__(102);

	var _message2 = _interopRequireDefault(_message);

	var _modal = __webpack_require__(107);

	var _modal2 = _interopRequireDefault(_modal);

	var _pageloading = __webpack_require__(112);

	var _pageloading2 = _interopRequireDefault(_pageloading);

	var _pagination = __webpack_require__(117);

	var _pagination2 = _interopRequireDefault(_pagination);

	var _popover = __webpack_require__(122);

	var _popover2 = _interopRequireDefault(_popover);

	var _progress = __webpack_require__(129);

	var _progress2 = _interopRequireDefault(_progress);

	var _select = __webpack_require__(134);

	var _select2 = _interopRequireDefault(_select);

	var _suggestion = __webpack_require__(145);

	var _suggestion2 = _interopRequireDefault(_suggestion);

	var _tag = __webpack_require__(150);

	var _tag2 = _interopRequireDefault(_tag);

	var _tooltip = __webpack_require__(155);

	var _tooltip2 = _interopRequireDefault(_tooltip);

	var _scrolltop = __webpack_require__(160);

	var _scrolltop2 = _interopRequireDefault(_scrolltop);

	var _install = __webpack_require__(165);

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
	    Vue.component(_scrolltop2.default.name, _scrolltop2.default);

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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(9)

	/* script */
	__vue_exports__ = __webpack_require__(13)

	/* template */
	var __vue_template__ = __webpack_require__(83)
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
	__vue_options__.__file = "/Users/clancyz/Workspace/github/wmfe-xcui-2.0/xcui/src/components/datepicker/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-c4379792", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-c4379792", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


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
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-c4379792!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-c4379792!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
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
	exports.push([module.id, "\n.xcui-datapicker .close_btn {\n  position: absolute;\n  top: 50%;\n  right: 10px;\n  margin-top: -11px;\n  z-index: 9999;\n}\n.xcui-datapicker .calendar {\n  width: 240px;\n  padding: 10px;\n  background: #fff;\n  position: absolute;\n  z-index: 9999;\n  left: 0;\n  top: 38px;\n  border: 1px solid #DEDEDE;\n  border-radius: 2px;\n  transition: all .5s ease;\n}\n.xcui-datapicker .calendar-enter .calendar-leave {\n  opacity: 0;\n  transform: translate3d(0, -10px, 0);\n}\n.xcui-datapicker .calendar-tit {\n  text-align: center;\n  margin: 0 auto;\n  width: 104px;\n  font-weight: bold;\n}\n.xcui-datapicker .calendar-tit input {\n  color: #333;\n  height: 24px;\n  outline: medium;\n  text-align: center;\n  border: none;\n  background-color: transparent;\n}\n.xcui-datapicker .calendar-tit-year {\n  width: 36px;\n}\n.xcui-datapicker .calendar-tit-month {\n  width: 18px;\n  margin-left: 2px;\n}\n.xcui-datapicker .calendar:before {\n  position: absolute;\n  left: 30px;\n  top: -10px;\n  content: \"\";\n  border: 5px solid rgba(0, 0, 0, 0);\n  border-bottom-color: #DEDEDE;\n}\n.xcui-datapicker .calendar:after {\n  position: absolute;\n  left: 30px;\n  top: -9px;\n  content: \"\";\n  border: 5px solid rgba(0, 0, 0, 0);\n  border-bottom-color: #fff;\n}\n.xcui-datapicker .calendar-tools {\n  height: 32px;\n  font-size: 14px;\n  line-height: 32px;\n  color: #333;\n}\n.xcui-datapicker .calendar-tools .float.left {\n  float: left;\n}\n.xcui-datapicker .calendar-tools .float.right {\n  float: right;\n}\n.xcui-datapicker .calendar-tools > i {\n  margin: 0 10px;\n  line-height: 32px;\n  cursor: pointer;\n  color: #707070;\n}\n.xcui-datapicker .calendar-tools > i:hover {\n  color: #333;\n}\n.xcui-datapicker .calendar table {\n  clear: both;\n  width: 100%;\n  margin-bottom: 10px;\n  border-collapse: collapse;\n  color: #444;\n}\n.xcui-datapicker .calendar td {\n  margin: 2px !important;\n  padding: 5px 0;\n  width: 14.28571429%;\n  text-align: center;\n  vertical-align: middle;\n  font-size: 14px;\n  line-height: 125%;\n  cursor: pointer;\n  border: 0;\n}\n.xcui-datapicker .calendar td:hover {\n  background: #f3f8fa;\n}\n.xcui-datapicker .calendar td.week {\n  pointer-events: none !important;\n  cursor: default !important;\n}\n.xcui-datapicker .calendar td.off {\n  color: #c0c0c0;\n}\n.xcui-datapicker .calendar td.today {\n  background-color: #46c3c1;\n  color: #fff;\n  font-size: 14px;\n  border-radius: 4px;\n}\n.xcui-datapicker .calendar td.today .lunar {\n  color: #fff;\n}\n.xcui-datapicker .calendar thead td {\n  text-transform: uppercase;\n}\n.xcui-datapicker .calendar .timer {\n  margin: 10px 0 10px 30px;\n  width: 150px;\n  text-align: center;\n}\n.xcui-datapicker .calendar .timer input {\n  border-radius: 2px;\n  padding: 5px;\n  font-size: 14px;\n  line-height: 18px;\n  color: #46c3c1;\n  width: 50px;\n  text-align: center;\n  border: 1px solid #efefef;\n}\n.xcui-datapicker .calendar .timer input:focus {\n  border: 1px solid #46c3c1;\n}\n.xcui-datapicker .calendar .timer-item {\n  float: left;\n  text-align: center;\n  position: relative;\n  cursor: pointer;\n}\n.xcui-datapicker .calendar .timer-item-current {\n  color: #46c3c1;\n  line-height: 24px;\n  font-size: 14px;\n}\n.xcui-datapicker .calendar .timer label {\n  margin: 0;\n  width: 30px;\n  padding: 5px;\n  line-height: 14px;\n  margin-right: 4px;\n  font-weight: normal;\n}\n.xcui-datapicker .calendar-button {\n  text-align: center;\n}\n.xcui-datapicker .calendar-button button {\n  border: none;\n  cursor: pointer;\n  display: inline-block;\n  min-height: 1em;\n  vertical-align: baseline;\n  background: #46c3c1;\n  color: #fff;\n  margin: 0 .3em 0 0;\n  padding: .6em 2em;\n  font-size: 1em;\n  line-height: 1em;\n  text-align: center;\n  border-radius: .3em;\n}\n.xcui-datapicker .calendar-button button.cancel {\n  background: #efefef;\n  color: #666;\n}\n.xcui-datapicker .calendar .lunar {\n  font-size: 11px;\n  line-height: 150%;\n  color: #aaa;\n}\n.xcui-datapicker .calendar .drop-down {\n  position: absolute;\n  top: 24px;\n  left: -10px;\n  width: 50px;\n  height: 140px;\n  background: #fff;\n  border: 1px solid #efefef;\n  padding: 0;\n  margin: 0;\n  overflow-y: scroll;\n}\n.xcui-datapicker .calendar .drop-down li {\n  width: 50px;\n  list-style: none;\n}\n.xcui-datapicker .calendar .drop-down li.on {\n  background: #eee;\n}\n.xcui-datapicker .calendar .drop-down li:hover {\n  background: #eee;\n}\n.xcui-datapicker .calendar .clearfix {\n  zoom: 1;\n}\n.xcui-datapicker .calendar .clearfix:after {\n  display: block;\n  width: 0;\n  height: 0;\n  visibility: hidden;\n  content: '';\n  clear: both;\n}\n.xcui-datapicker .calendar .btn-default {\n  color: #666;\n  border-radius: 0 4px 4px 0;\n}\n.xcui-datapicker .bg-pr {\n  position: relative;\n}\n", ""]);

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

	var _calendarMixins = __webpack_require__(14);

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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof2 = __webpack_require__(15);

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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(16);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(67);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(17), __esModule: true };

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(18);
	__webpack_require__(62);
	module.exports = __webpack_require__(66).f('iterator');

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(19)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(22)(String, 'String', function(iterated){
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(20)
	  , defined   = __webpack_require__(21);
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
/* 20 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(23)
	  , $export        = __webpack_require__(24)
	  , redefine       = __webpack_require__(39)
	  , hide           = __webpack_require__(29)
	  , has            = __webpack_require__(40)
	  , Iterators      = __webpack_require__(41)
	  , $iterCreate    = __webpack_require__(42)
	  , setToStringTag = __webpack_require__(58)
	  , getPrototypeOf = __webpack_require__(60)
	  , ITERATOR       = __webpack_require__(59)('iterator')
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
/* 23 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(25)
	  , core      = __webpack_require__(26)
	  , ctx       = __webpack_require__(27)
	  , hide      = __webpack_require__(29)
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
/* 25 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 26 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(28);
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
/* 28 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(30)
	  , createDesc = __webpack_require__(38);
	module.exports = __webpack_require__(34) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(31)
	  , IE8_DOM_DEFINE = __webpack_require__(33)
	  , toPrimitive    = __webpack_require__(37)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(34) ? Object.defineProperty : function defineProperty(O, P, Attributes){
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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(32);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(34) && !__webpack_require__(35)(function(){
	  return Object.defineProperty(__webpack_require__(36)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(35)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(32)
	  , document = __webpack_require__(25).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(32);
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
/* 38 */
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
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(29);

/***/ },
/* 40 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(43)
	  , descriptor     = __webpack_require__(38)
	  , setToStringTag = __webpack_require__(58)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(29)(IteratorPrototype, __webpack_require__(59)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(31)
	  , dPs         = __webpack_require__(44)
	  , enumBugKeys = __webpack_require__(56)
	  , IE_PROTO    = __webpack_require__(53)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(36)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(57).appendChild(iframe);
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
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(30)
	  , anObject = __webpack_require__(31)
	  , getKeys  = __webpack_require__(45);

	module.exports = __webpack_require__(34) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(46)
	  , enumBugKeys = __webpack_require__(56);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(40)
	  , toIObject    = __webpack_require__(47)
	  , arrayIndexOf = __webpack_require__(50)(false)
	  , IE_PROTO     = __webpack_require__(53)('IE_PROTO');

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
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(48)
	  , defined = __webpack_require__(21);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(49);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 49 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(47)
	  , toLength  = __webpack_require__(51)
	  , toIndex   = __webpack_require__(52);
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
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(20)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(20)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(54)('keys')
	  , uid    = __webpack_require__(55);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(25)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 55 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 56 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(25).document && document.documentElement;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(30).f
	  , has = __webpack_require__(40)
	  , TAG = __webpack_require__(59)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(54)('wks')
	  , uid        = __webpack_require__(55)
	  , Symbol     = __webpack_require__(25).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(40)
	  , toObject    = __webpack_require__(61)
	  , IE_PROTO    = __webpack_require__(53)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(21);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(63);
	var global        = __webpack_require__(25)
	  , hide          = __webpack_require__(29)
	  , Iterators     = __webpack_require__(41)
	  , TO_STRING_TAG = __webpack_require__(59)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(64)
	  , step             = __webpack_require__(65)
	  , Iterators        = __webpack_require__(41)
	  , toIObject        = __webpack_require__(47);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(22)(Array, 'Array', function(iterated, kind){
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
/* 64 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(59);

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(68), __esModule: true };

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(69);
	__webpack_require__(80);
	__webpack_require__(81);
	__webpack_require__(82);
	module.exports = __webpack_require__(26).Symbol;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(25)
	  , has            = __webpack_require__(40)
	  , DESCRIPTORS    = __webpack_require__(34)
	  , $export        = __webpack_require__(24)
	  , redefine       = __webpack_require__(39)
	  , META           = __webpack_require__(70).KEY
	  , $fails         = __webpack_require__(35)
	  , shared         = __webpack_require__(54)
	  , setToStringTag = __webpack_require__(58)
	  , uid            = __webpack_require__(55)
	  , wks            = __webpack_require__(59)
	  , wksExt         = __webpack_require__(66)
	  , wksDefine      = __webpack_require__(71)
	  , keyOf          = __webpack_require__(72)
	  , enumKeys       = __webpack_require__(73)
	  , isArray        = __webpack_require__(76)
	  , anObject       = __webpack_require__(31)
	  , toIObject      = __webpack_require__(47)
	  , toPrimitive    = __webpack_require__(37)
	  , createDesc     = __webpack_require__(38)
	  , _create        = __webpack_require__(43)
	  , gOPNExt        = __webpack_require__(77)
	  , $GOPD          = __webpack_require__(79)
	  , $DP            = __webpack_require__(30)
	  , $keys          = __webpack_require__(45)
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
	  __webpack_require__(78).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(75).f  = $propertyIsEnumerable;
	  __webpack_require__(74).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(23)){
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
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(29)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(55)('meta')
	  , isObject = __webpack_require__(32)
	  , has      = __webpack_require__(40)
	  , setDesc  = __webpack_require__(30).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(35)(function(){
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
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(25)
	  , core           = __webpack_require__(26)
	  , LIBRARY        = __webpack_require__(23)
	  , wksExt         = __webpack_require__(66)
	  , defineProperty = __webpack_require__(30).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(45)
	  , toIObject = __webpack_require__(47);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(45)
	  , gOPS    = __webpack_require__(74)
	  , pIE     = __webpack_require__(75);
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
/* 74 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 75 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(49);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(47)
	  , gOPN      = __webpack_require__(78).f
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
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(46)
	  , hiddenKeys = __webpack_require__(56).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(75)
	  , createDesc     = __webpack_require__(38)
	  , toIObject      = __webpack_require__(47)
	  , toPrimitive    = __webpack_require__(37)
	  , has            = __webpack_require__(40)
	  , IE8_DOM_DEFINE = __webpack_require__(33)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(34) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 80 */
/***/ function(module, exports) {

	

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(71)('asyncIterator');

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(71)('observable');

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    staticClass: "xcui-datapicker",
	    class: _vm.className
	  }, [_vm._h('div', {
	    class: {
	      'input-group': _vm.btnShow, 'bg-pr': !_vm.btnShow
	    }
	  }, [_vm._h('input', {
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
	  }), " ", _vm._h('button', {
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
	  }, [_vm._h('span', {
	    attrs: {
	      "aria-hidden": "true"
	    }
	  }, ["×"])]), " ", _vm._h('div', {
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
	  }, [(_vm.type != 'time') ? _vm._h('div', {
	    staticClass: "calendar-tools"
	  }, [_vm._h('i', {
	    staticClass: "glyphicon glyphicon-chevron-left float left",
	    on: {
	      "click": _vm.prev
	    }
	  }), " ", _vm._h('i', {
	    staticClass: "glyphicon glyphicon-chevron-right float right",
	    on: {
	      "click": _vm.next
	    }
	  }), " ", _vm._h('div', {
	    staticClass: "calendar-tit"
	  }, [_vm._h('span', {
	    on: {
	      "click": function($event) {
	        _vm.changeTitSelect(_vm.year, 'year')
	      }
	    }
	  }, [_vm._h('input', {
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
	  }), "年"]), " ", _vm._h('span', {
	    staticClass: "calendar-tit-month",
	    on: {
	      "click": function($event) {
	        _vm.changeTitSelect(_vm.month - 1, 'month')
	      }
	    }
	  }, [_vm._s(_vm.month + 1) + "月"])])]) : _vm._e(), " ", _vm._h('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.dataTableShow),
	      expression: "dataTableShow"
	    }]
	  }, [(_vm.type != 'time') ? _vm._h('table', {
	    attrs: {
	      "cellpadding": "5"
	    }
	  }, [_vm._h('thead', [_vm._h('tr', [_vm._l((_vm.weeks), function(week) {
	    return _vm._h('td', {
	      staticClass: "week"
	    }, [_vm._s(week)])
	  })])]), " ", _vm._l((_vm.days), function(day, k1) {
	    return _vm._h('tr', [_vm._l((day), function(child, k2) {
	      return _vm._h('td', {
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
	      }, ["\n                        " + _vm._s(child.day) + "\n                        ", (_vm.showLunar) ? _vm._h('div', {
	        staticClass: "lunar"
	      }, [_vm._s(child.lunar)]) : _vm._e()])
	    })])
	  })]) : _vm._e(), " ", _vm._h('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.type == 'datetime' || _vm.type == 'time'),
	      expression: "type=='datetime'|| type=='time'"
	    }],
	    staticClass: "calendar-time"
	  }, [_vm._h('div', {
	    staticClass: "timer clearfix"
	  }, [_vm._h('div', {
	    staticClass: "timer-item"
	  }, [_vm._h('label', {
	    on: {
	      "click": function($event) {
	        _vm.dropTimeList('hour')
	      }
	    }
	  }, [_vm._s(_vm.hour)]), ":\n                            ", _vm._h('ul', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.hourListShow),
	      expression: "hourListShow"
	    }],
	    staticClass: "drop-down"
	  }, [_vm._l((_vm.hourList), function(item) {
	    return _vm._h('li', {
	      on: {
	        "click": function($event) {
	          _vm.selectTimeItem($event, 'hour')
	        }
	      }
	    }, [_vm._s(item)])
	  })])]), " ", _vm._h('div', {
	    staticClass: "timer-item"
	  }, [_vm._h('label', {
	    on: {
	      "click": function($event) {
	        _vm.dropTimeList('minute')
	      }
	    }
	  }, [_vm._s(_vm.minute)]), ":\n                            ", _vm._h('ul', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.minuteListShow),
	      expression: "minuteListShow"
	    }],
	    staticClass: "drop-down"
	  }, [_vm._l((_vm.minuteList), function(item) {
	    return _vm._h('li', {
	      on: {
	        "click": function($event) {
	          _vm.selectTimeItem($event, 'minute')
	        }
	      }
	    }, [_vm._s(item)])
	  })])]), " ", _vm._h('div', {
	    staticClass: "timer-item"
	  }, [_vm._h('label', {
	    on: {
	      "click": function($event) {
	        _vm.dropTimeList('second')
	      }
	    }
	  }, [_vm._s(_vm.second)]), " ", _vm._h('ul', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.secondListShow),
	      expression: "secondListShow"
	    }],
	    staticClass: "drop-down"
	  }, [_vm._l((_vm.secondList), function(item) {
	    return _vm._h('li', {
	      on: {
	        "click": function($event) {
	          _vm.selectTimeItem($event, 'second')
	        }
	      }
	    }, [_vm._s(item)])
	  })])]), " ", _vm._h('div', {
	    staticClass: "timer-item"
	  }, [_vm._h('div', {
	    staticClass: "timer-item-current",
	    style: ({
	      'color': _vm.color
	    }),
	    on: {
	      "click": _vm.currentTime
	    }
	  }, ["当前"])])])]), " ", _vm._h('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.type == 'datetime' || _vm.type == 'time' || _vm.range),
	      expression: "type=='datetime'|| type=='time' || range"
	    }],
	    staticClass: "calendar-button"
	  }, [_vm._h('button', {
	    style: ({
	      'background': _vm.color
	    }),
	    on: {
	      "click": _vm.ok
	    }
	  }, ["确定"]), " ", _vm._h('button', {
	    staticClass: "cancel",
	    on: {
	      "click": _vm.cancel
	    }
	  }, ["取消"])])]), " ", _vm._h('table', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.yearTableShow),
	      expression: "yearTableShow"
	    }],
	    attrs: {
	      "cellpadding": "6"
	    }
	  }, [_vm._h('tr', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.selectRangeShow),
	      expression: "selectRangeShow"
	    }]
	  }, [_vm._h('td', {
	    attrs: {
	      "colspan": "3"
	    }
	  }, [_vm._s(_vm.selectRange)])]), " ", _vm._l((_vm.selectRangeList), function(selects) {
	    return _vm._h('tr', [_vm._l((selects), function(select) {
	      return _vm._h('td', {
	        on: {
	          "click": function($event) {
	            _vm.selectItem(select)
	          }
	        }
	      }, [_vm._s(select)])
	    })])
	  })])]), " ", (_vm.btnShow) ? _vm._h('span', {
	    staticClass: "input-group-btn",
	    on: {
	      "click": _vm.showCalendar
	    }
	  }, [_vm._m(0)]) : _vm._e()])])
	},staticRenderFns: [function (){var _vm=this;
	  return _vm._h('button', {
	    staticClass: "btn btn-default"
	  }, [_vm._h('span', {
	    staticClass: "glyphicon glyphicon-calendar"
	  })])
	}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-c4379792", module.exports)
	  }
	}

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(85)

	/* script */
	__vue_exports__ = __webpack_require__(87)

	/* template */
	var __vue_template__ = __webpack_require__(91)
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
	__vue_options__.__file = "/Users/clancyz/Workspace/github/wmfe-xcui-2.0/xcui/src/components/daterangepicker/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-0afcb018", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-0afcb018", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(86);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-0afcb018!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-0afcb018!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "\n.xcui-datarangepicker {\n  position: relative;\n}\n.xcui-datarangepicker .close_btn {\n  position: absolute;\n  top: 50%;\n  right: 10px;\n  margin-top: -11px;\n  z-index: 9999;\n}\n.xcui-datarangepicker .calendar {\n  width: 240px;\n  padding: 10px;\n  background: #fff;\n  position: absolute;\n  border: 1px solid #DEDEDE;\n  border-radius: 2px;\n  transition: all .5s ease;\n  left: 0;\n  top: 38px;\n}\n.xcui-datarangepicker .calendar-enter .calendar-leave {\n  opacity: 0;\n  transform: translate3d(0, -10px, 0);\n}\n.xcui-datarangepicker .calendar-tit {\n  text-align: center;\n  margin: 0 auto;\n  width: 104px;\n  font-weight: bold;\n}\n.xcui-datarangepicker .calendar-tit input {\n  color: #333;\n  height: 24px;\n  outline: medium;\n  text-align: center;\n  border: none;\n  background-color: transparent;\n}\n.xcui-datarangepicker .calendar-tit-year {\n  width: 36px;\n}\n.xcui-datarangepicker .calendar-tit-month {\n  width: 18px;\n  margin-left: 2px;\n}\n.xcui-datarangepicker .calendar:before {\n  position: absolute;\n  left: 30px;\n  top: -10px;\n  content: \"\";\n  border: 5px solid rgba(0, 0, 0, 0);\n  border-bottom-color: #DEDEDE;\n}\n.xcui-datarangepicker .calendar:after {\n  position: absolute;\n  left: 30px;\n  top: -9px;\n  content: \"\";\n  border: 5px solid rgba(0, 0, 0, 0);\n  border-bottom-color: #fff;\n}\n.xcui-datarangepicker .calendar-tools {\n  height: 32px;\n  font-size: 14px;\n  line-height: 32px;\n  color: #333;\n}\n.xcui-datarangepicker .calendar-tools .float.left {\n  float: left;\n}\n.xcui-datarangepicker .calendar-tools .float.right {\n  float: right;\n}\n.xcui-datarangepicker .calendar-tools > i {\n  margin: 0 10px;\n  line-height: 32px;\n  cursor: pointer;\n  color: #707070;\n}\n.xcui-datarangepicker .calendar-tools > i:hover {\n  color: #333;\n}\n.xcui-datarangepicker .calendar table {\n  clear: both;\n  width: 100%;\n  margin-bottom: 10px;\n  border-collapse: collapse;\n  color: #444;\n}\n.xcui-datarangepicker .calendar table td {\n  margin: 2px !important;\n  padding: 5px 0;\n  width: 14.28571429%;\n  text-align: center;\n  vertical-align: middle;\n  font-size: 14px;\n  line-height: 125%;\n  cursor: pointer;\n  border: 0;\n}\n.xcui-datarangepicker .calendar table td:hover {\n  background: #f3f8fa;\n}\n.xcui-datarangepicker .calendar table td.week {\n  pointer-events: none !important;\n  cursor: default !important;\n}\n.xcui-datarangepicker .calendar table td.off {\n  color: #c0c0c0;\n}\n.xcui-datarangepicker .calendar table td.today {\n  background-color: #46c3c1;\n  color: #fff;\n  font-size: 14px;\n  border-radius: 4px;\n}\n.xcui-datarangepicker .calendar table td.today .lunar {\n  color: #fff;\n}\n.xcui-datarangepicker .calendar table td.todayleft {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.xcui-datarangepicker .calendar table td.todayright {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.xcui-datarangepicker .calendar table td.range {\n  background: #e2eff5;\n}\n.xcui-datarangepicker .calendar table thead td {\n  text-transform: uppercase;\n}\n.xcui-datarangepicker .calendar .timer {\n  margin: 0 auto 10px;\n  width: 120px;\n}\n.xcui-datarangepicker .calendar .timer input {\n  border-radius: 2px;\n  padding: 5px;\n  font-size: 14px;\n  line-height: 18px;\n  color: #46c3c1;\n  width: 50px;\n  text-align: center;\n  border: 1px solid #efefef;\n}\n.xcui-datarangepicker .calendar .timer input:focus {\n  border: 1px solid #46c3c1;\n}\n.xcui-datarangepicker .calendar .timer-item {\n  float: left;\n  text-align: center;\n  position: relative;\n  cursor: pointer;\n}\n.xcui-datarangepicker .calendar .timer-item-current {\n  color: #46c3c1;\n  line-height: 24px;\n  font-size: 14px;\n}\n.xcui-datarangepicker .calendar .timer label {\n  margin: 0;\n  width: 30px;\n  padding: 5px;\n  line-height: 14px;\n  margin-right: 4px;\n  font-weight: normal;\n}\n.xcui-datarangepicker .calendar-button {\n  text-align: center;\n}\n.xcui-datarangepicker .calendar-button button {\n  border: none;\n  cursor: pointer;\n  display: inline-block;\n  min-height: 1em;\n  vertical-align: baseline;\n  background: #46c3c1;\n  color: #fff;\n  margin: 0 .3em 0 0;\n  padding: .6em 2em;\n  font-size: 1em;\n  line-height: 1em;\n  text-align: center;\n  border-radius: .3em;\n}\n.xcui-datarangepicker .calendar-button button.cancel {\n  background: #efefef;\n  color: #666;\n}\n.xcui-datarangepicker .calendar .lunar {\n  font-size: 11px;\n  line-height: 150%;\n  color: #aaa;\n}\n.xcui-datarangepicker .calendar .drop-down {\n  position: absolute;\n  top: 24px;\n  left: -10px;\n  width: 50px;\n  height: 140px;\n  background: #fff;\n  border: 1px solid #efefef;\n  padding: 0;\n  margin: 0;\n  overflow-y: scroll;\n}\n.xcui-datarangepicker .calendar .drop-down li {\n  width: 50px;\n  list-style: none;\n}\n.xcui-datarangepicker .calendar .drop-down li.on {\n  background: #eee;\n}\n.xcui-datarangepicker .calendar .drop-down li:hover {\n  background: #eee;\n}\n.xcui-datarangepicker .double-calendar {\n  width: 490px;\n  z-index: 999;\n}\n.xcui-datarangepicker .double-calendar-left {\n  width: 220px;\n  float: left;\n}\n.xcui-datarangepicker .double-calendar-right {\n  width: 220px;\n  float: right;\n}\n.xcui-datarangepicker .double-calendar .calendar-button {\n  padding-top: 10px;\n  border-top: 1px solid #ddd;\n}\n.xcui-datarangepicker .clearfix {\n  zoom: 1;\n}\n.xcui-datarangepicker .clearfix:after {\n  display: block;\n  width: 0;\n  height: 0;\n  visibility: hidden;\n  content: '';\n  clear: both;\n}\n.xcui-datarangepicker .bg-pr {\n  position: relative;\n}\n.xcui-datarangepicker .btn-default {\n  color: #666;\n  border-radius: 0 4px 4px 0;\n}\n", ""]);

	// exports


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _calendar = __webpack_require__(88);

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
	        dateText: function dateText(val) {
	            if (!val) {
	                this.startDate = this.endDate = '';
	            }
	        }
	    },
	    created: function created() {
	        this.startDate = this.value.startDate || '';
	        this.endDate = this.value.endDate || '';
	        this.newStartDate = this.startDate;
	        this.newEndDate = this.endDate;
	        if (this.startDate > this.endDate) {
	            this.newEndDate = this.startDate;
	        }
	        if (this.endDate < this.startDate) {
	            this.newStartDate = this.endDate;
	        }
	        this.dateText = this.newStartDate && this.newEndDate && this.newStartDate + this.sep + this.newEndDate;
	        this.emitChange();
	    },

	    methods: {
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
	            });
	        },
	        startChange: function startChange(val) {
	            this.newStartDate = val.value;
	            this.newEndDate = val.otherValue;
	            this.initialStartDate = val.value;
	            this.initialEndDate = val.otherValue;
	        },
	        endChange: function endChange(val) {
	            this.newStartDate = val.otherValue;
	            this.newEndDate = val.value;
	            this.initialStartDate = val.otherValue;
	            this.initialEndDate = val.value;
	        }
	    }
	};

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(89)

	/* template */
	var __vue_template__ = __webpack_require__(90)
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
	__vue_options__.__file = "/Users/clancyz/Workspace/github/wmfe-xcui-2.0/xcui/src/components/daterangepicker/calendar.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-6dc24a68", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-6dc24a68", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] calendar.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _calendarMixins = __webpack_require__(14);

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
	            this.internalValue = val;
	        },
	        otherValue: function otherValue(val) {
	            this.internalOtherValue = val;
	        },
	        startRender: function startRender(val) {
	            if (!val) {
	                return false;
	            }
	            this.internalValue = this.output(this.internalValue);
	            var params = this.dateParams;
	            this.year = params.year;
	            this.month = params.month;
	            this.hour = params.hour;
	            this.day = params.day;
	            this.minute = params.minute;
	            this.second = params.second;
	            this.render(params.year, params.month);
	            this.emitChange();
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
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', [(_vm.type != 'time') ? _vm._h('div', {
	    staticClass: "calendar-tools"
	  }, [_vm._h('i', {
	    staticClass: "glyphicon glyphicon-chevron-left float left",
	    on: {
	      "click": _vm.prev
	    }
	  }), " ", _vm._h('i', {
	    staticClass: "glyphicon glyphicon-chevron-right float right",
	    on: {
	      "click": _vm.next
	    }
	  }), " ", _vm._h('div', {
	    staticClass: "calendar-tit"
	  }, [_vm._h('span', {
	    on: {
	      "click": function($event) {
	        _vm.changeTitSelect(_vm.year, 'year')
	      }
	    }
	  }, [_vm._h('input', {
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
	  }), "年\n            "]), " ", _vm._h('span', {
	    staticClass: "calendar-tit-month",
	    on: {
	      "click": function($event) {
	        _vm.changeTitSelect(_vm.month - 1, 'month')
	      }
	    }
	  }, [_vm._s(_vm.month + 1) + "月"])])]) : _vm._e(), " ", _vm._h('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.dataTableShow),
	      expression: "dataTableShow"
	    }]
	  }, [(_vm.type != 'time') ? _vm._h('table', {
	    attrs: {
	      "cellpadding": "5"
	    }
	  }, [_vm._h('thead', [_vm._h('tr', [_vm._l((_vm.weeks), function(week) {
	    return _vm._h('td', {
	      staticClass: "week"
	    }, [_vm._s(week)])
	  })])]), " ", _vm._l((_vm.days), function(day, k1) {
	    return _vm._h('tr', [_vm._l((day), function(child, k2) {
	      return _vm._h('td', {
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
	      }, ["\n                " + _vm._s(child.day) + "\n                "])
	    })])
	  })]) : _vm._e(), " ", _vm._h('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.type == 'datetime' || _vm.type == 'time'),
	      expression: "type=='datetime' || type=='time'"
	    }],
	    staticClass: "calendar-time"
	  }, [_vm._h('div', {
	    staticClass: "timer clearfix"
	  }, [_vm._h('div', {
	    staticClass: "timer-item"
	  }, [_vm._h('label', {
	    on: {
	      "click": function($event) {
	        _vm.dropTimeList('hour')
	      }
	    }
	  }, [_vm._s(_vm.hour)]), ":\n                    ", _vm._h('ul', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.hourListShow),
	      expression: "hourListShow"
	    }],
	    staticClass: "drop-down"
	  }, [_vm._l((_vm.hourList), function(item) {
	    return _vm._h('li', {
	      on: {
	        "click": function($event) {
	          _vm.selectTime($event, 'hour')
	        }
	      }
	    }, [_vm._s(item)])
	  })])]), " ", _vm._h('div', {
	    staticClass: "timer-item"
	  }, [_vm._h('label', {
	    on: {
	      "click": function($event) {
	        _vm.dropTimeList('minute')
	      }
	    }
	  }, [_vm._s(_vm.minute)]), ":\n                    ", _vm._h('ul', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.minuteListShow),
	      expression: "minuteListShow"
	    }],
	    staticClass: "drop-down"
	  }, [_vm._l((_vm.minuteList), function(item) {
	    return _vm._h('li', {
	      on: {
	        "click": function($event) {
	          _vm.selectTime($event, 'minute')
	        }
	      }
	    }, [_vm._s(item)])
	  })])]), " ", _vm._h('div', {
	    staticClass: "timer-item"
	  }, [_vm._h('label', {
	    on: {
	      "click": function($event) {
	        _vm.dropTimeList('second')
	      }
	    }
	  }, [_vm._s(_vm.second)]), " ", _vm._h('ul', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.secondListShow),
	      expression: "secondListShow"
	    }],
	    staticClass: "drop-down"
	  }, [_vm._l((_vm.secondList), function(item) {
	    return _vm._h('li', {
	      on: {
	        "click": function($event) {
	          _vm.selectTime($event, 'second')
	        }
	      }
	    }, [_vm._s(item)])
	  })])])])])]), " ", _vm._h('table', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.yearTableShow),
	      expression: "yearTableShow"
	    }],
	    attrs: {
	      "cellpadding": "6"
	    }
	  }, [_vm._h('tr', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.selectRangeShow),
	      expression: "selectRangeShow"
	    }]
	  }, [_vm._h('td', {
	    attrs: {
	      "colspan": "3"
	    }
	  }, [_vm._s(_vm.selectRange)])]), " ", _vm._l((_vm.selectRangeList), function(selects) {
	    return _vm._h('tr', [_vm._l((selects), function(select) {
	      return _vm._h('td', {
	        on: {
	          "click": function($event) {
	            _vm.selectItem(select)
	          }
	        }
	      }, [_vm._s(select)])
	    })])
	  })])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-6dc24a68", module.exports)
	  }
	}

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    staticClass: "xcui-datarangepicker",
	    class: _vm.className
	  }, [_vm._h('div', {
	    class: {
	      'input-group': _vm.btnShow
	    }
	  }, [_vm._h('input', {
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
	  }), " ", _vm._h('button', {
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
	  }, [_vm._h('span', {
	    attrs: {
	      "aria-hidden": "true"
	    }
	  }, ["×"])]), " ", " ", _vm._h('div', {
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
	  }, [_vm._h('div', {
	    staticClass: "clearfix"
	  }, [_vm._h('div', {
	    staticClass: "double-calendar-left"
	  }, [_vm._h('calendar', {
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
	  })]), " ", _vm._h('div', {
	    staticClass: "double-calendar-right"
	  }, [_vm._h('calendar', {
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
	  })])]), " ", _vm._h('div', {
	    staticClass: "calendar-button"
	  }, [_vm._h('button', {
	    style: ({
	      'background': _vm.color
	    }),
	    on: {
	      "click": _vm.ok
	    }
	  }, ["确定"]), " ", _vm._h('button', {
	    staticClass: "cancel",
	    on: {
	      "click": _vm.cancel
	    }
	  }, ["取消"])])]), " ", " ", (_vm.btnShow) ? _vm._h('span', {
	    staticClass: "input-group-btn",
	    on: {
	      "click": _vm.showCalendar
	    }
	  }, [_vm._m(0)]) : _vm._e()])])
	},staticRenderFns: [function (){var _vm=this;
	  return _vm._h('button', {
	    staticClass: "btn btn-default"
	  }, [_vm._h('span', {
	    staticClass: "glyphicon glyphicon-calendar"
	  })])
	}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-0afcb018", module.exports)
	  }
	}

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(93)

	/* script */
	__vue_exports__ = __webpack_require__(95)

	/* template */
	var __vue_template__ = __webpack_require__(96)
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
	__vue_options__.__file = "/Users/clancyz/Workspace/github/wmfe-xcui-2.0/xcui/src/components/inputNumber/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-0877c4ae", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-0877c4ae", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(94);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-0877c4ae!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-0877c4ae!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "\n.outer {\n  overflow: hidden;\n  display: inline-block;\n  border: 1px solid #c1c1c1;\n  border-radius: 5px;\n}\n.outer:hover {\n  border: 1px solid #66afe9;\n}\n.outer:hover .up-down-wrap {\n  border-left: 1px solid #c1c1c1;\n}\n.outer:hover .up-down-wrap .up-wrap {\n  color: #c1c1c1;\n  border-bottom: 1px solid #c1c1c1;\n  border-radius: 1px;\n}\n.outer:hover .up-down-wrap .down-wrap {\n  color: #c1c1c1;\n}\n.outer .input-wrap {\n  float: right;\n  height: 100%;\n}\n.outer .input-wrap input {\n  height: 100%;\n  padding-left: 5px;\n  float: right;\n  background-color: #ffffff;\n  border: none;\n  padding-right: 20px;\n}\n.outer .input-wrap input:focus {\n  outline: none !important;\n}\n.outer .up-down-wrap {\n  width: 20px;\n  margin-left: -22px;\n  border: none;\n  text-align: center;\n  float: right;\n  position: relative;\n  height: 100%;\n}\n.outer .up-down-wrap .up-wrap {\n  font-size: 1px;\n  margin: 0;\n  border: none;\n  display: block;\n}\n.outer .up-down-wrap .down-wrap {\n  font-size: 1px;\n  margin-top: 0px;\n  border: none;\n  display: block;\n}\n.outer .up-down-wrap a:link,\n.outer .up-down-wrap a:visited {\n  color: transparent;\n  text-decoration: none;\n}\n.outer .up-down-wrap a:hover,\n.outer .up-down-wrap a:active {\n  color: #66afe9 !important;\n  text-decoration: none;\n}\n.large {\n  height: 35px !important;\n}\n.large .up-down-wrap .up-wrap {\n  margin-top: 3px !important;\n}\n.normal {\n  height: 30px !important;\n}\n.small {\n  height: 28px !important;\n}\n", ""]);

	// exports


/***/ },
/* 95 */
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
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    ref: "outer",
	    staticClass: "outer",
	    class: _vm.size
	  }, [_vm._h('div', {
	    staticClass: "up-down-wrap"
	  }, [_vm._h('a', {
	    staticClass: "up-wrap glyphicon glyphicon-chevron-up",
	    attrs: {
	      "href": ""
	    },
	    on: {
	      "mouse": function($event) {
	        if ($event.keyCode !== 40) { return; }
	        _vm.preventDefault($event)
	      },
	      "click": _vm.upValue
	    }
	  }), " ", _vm._h('a', {
	    staticClass: "down-wrap glyphicon glyphicon-chevron-down",
	    attrs: {
	      "href": ""
	    },
	    on: {
	      "mouse": function($event) {
	        if ($event.keyCode !== 40) { return; }
	        _vm.preventDefault($event)
	      },
	      "click": _vm.downValue
	    }
	  })]), " ", _vm._h('div', {
	    staticClass: "input-wrap"
	  }, [_vm._h('input', {
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
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-0877c4ae", module.exports)
	  }
	}

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(98)

	/* script */
	__vue_exports__ = __webpack_require__(100)

	/* template */
	var __vue_template__ = __webpack_require__(101)
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
	__vue_options__.__file = "/Users/clancyz/Workspace/github/wmfe-xcui-2.0/xcui/src/components/loading/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-6e0a3ef7", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-6e0a3ef7", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(99);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-6e0a3ef7!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-6e0a3ef7!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "\n.xcui-loading {\n  display: block;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 999;\n  background: rgba(255, 255, 255, 0.7);\n}\n.loader {\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n}\n/*loading-1********************/\n.load1 .loader {\n  top: 40%;\n  color: #46C3C1;\n  font-size: 13px;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  text-indent: -9999em;\n  -webkit-animation: load1 1.3s infinite linear;\n  animation: load1 1.3s infinite linear;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n}\n@-webkit-keyframes load1 {\n0%,\n  100% {\n    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;\n}\n12.5% {\n    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n}\n25% {\n    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n}\n37.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;\n}\n50% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;\n}\n62.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;\n}\n75% {\n    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;\n}\n87.5% {\n    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;\n}\n}\n@keyframes load1 {\n0%,\n  100% {\n    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;\n}\n12.5% {\n    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n}\n25% {\n    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n}\n37.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;\n}\n50% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;\n}\n62.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;\n}\n75% {\n    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;\n}\n87.5% {\n    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;\n}\n}\n/*loading-2********************/\n.load2 .loader {\n  top: 30%;\n  color: #46C3C1;\n  font-size: 60px;\n  text-indent: -9999em;\n  overflow: hidden;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation: load2 1.7s infinite ease;\n  animation: load2 1.7s infinite ease;\n}\n@-webkit-keyframes load2 {\n0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n}\n5%,\n  95% {\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n}\n10%,\n  59% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\n}\n20% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\n}\n38% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\n}\n100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n}\n}\n@keyframes load2 {\n0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n}\n5%,\n  95% {\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n}\n10%,\n  59% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\n}\n20% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\n}\n38% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\n}\n100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n}\n}\n/*loading-3********************/\n.load3 .loader,\n.load3 .loader:before,\n.load3 .loader:after {\n  top: 20%;\n  border-radius: 50%;\n  width: 1.5em;\n  height: 1.5em;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-animation: load3 1.8s infinite ease-in-out;\n  animation: load3 1.8s infinite ease-in-out;\n}\n.load3 .loader {\n  color: #46C3C1;\n  font-size: 10px;\n  text-indent: -9999em;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s;\n}\n.load3 .loader:before,\n.load3 .loader:after {\n  content: '';\n  position: absolute;\n  top: 0;\n}\n.load3 .loader:before {\n  left: -3em;\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s;\n}\n.load3 .loader:after {\n  left: 3em;\n}\n@-webkit-keyframes load3 {\n0%,\n  80%,\n  100% {\n    box-shadow: 0 2.5em 0 -1.3em;\n}\n40% {\n    box-shadow: 0 2.5em 0 0;\n}\n}\n@keyframes load3 {\n0%,\n  80%,\n  100% {\n    box-shadow: 0 2.5em 0 -1.3em;\n}\n40% {\n    box-shadow: 0 2.5em 0 0;\n}\n}\n.sm .loader {\n  font-size: 10px;\n}\n.sm.load2 .loader {\n  font-size: 40px;\n}\n.md .loader {\n  font-size: 14px;\n}\n.md.load2 .loader {\n  font-size: 60px;\n}\n.lg .loader {\n  font-size: 18px;\n}\n.lg.load2 .loader {\n  font-size: 80px;\n}\n", ""]);

	// exports


/***/ },
/* 100 */
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
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.show),
	      expression: "show"
	    }],
	    staticClass: "xcui-loading load-container",
	    class: [_vm.type, _vm.size, _vm.classname]
	  }, [_vm._h('div', {
	    staticClass: "loader",
	    style: ({
	      'color': _vm.color
	    })
	  })])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-6e0a3ef7", module.exports)
	  }
	}

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(103)

	/* script */
	__vue_exports__ = __webpack_require__(105)

	/* template */
	var __vue_template__ = __webpack_require__(106)
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
	__vue_options__.__file = "/Users/clancyz/Workspace/github/wmfe-xcui-2.0/xcui/src/components/message/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-ae9ec7fc", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-ae9ec7fc", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(104);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-ae9ec7fc!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-ae9ec7fc!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "\n.fade-enter-active,\n.fade-leave-active {\n  transition: all .3s ease;\n}\n.fade-enter,\n.fade-leave-active {\n  opacity: 0;\n}\n.xcui-message {\n  min-width: 200px;\n  max-width: 600px;\n  width: 300px;\n  border-radius: 5px;\n  text-align: center;\n  box-shadow: 0 1px 8px rgba(99, 99, 99, 0.4);\n  padding: 5px 10px;\n  font-size: 16px;\n  z-index: 1000;\n  position: fixed;\n  top: 150px;\n  left: calc(50% - 150px);\n  background: #fff;\n}\n.xcui-message .xcui-message-icon {\n  vertical-align: middle;\n}\n.xcui-message .xcui-message-desc {\n  color: #000;\n  display: inline-block;\n  margin-left: 10px;\n  margin-bottom: 0px;\n  vertical-align: middle;\n}\n.xcui-message p {\n  padding-left: 10px;\n}\n.xcui-message-info {\n  color: #3a87ad;\n}\n.xcui-message-success {\n  color: #468847;\n}\n.xcui-message-warning {\n  color: #c09853;\n}\n.xcui-message-error {\n  color: #b94a48;\n}\n", ""]);

	// exports


/***/ },
/* 105 */
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
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('transition', {
	    attrs: {
	      "name": "fade"
	    }
	  }, [_vm._h('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.show),
	      expression: "show"
	    }],
	    staticClass: "xcui-message",
	    class: _vm.styleClass
	  }, [_vm._h('span', {
	    staticClass: "xcui-message-icon glyphicon",
	    class: _vm.iconClass
	  }), " ", _vm._h('p', {
	    staticClass: "xcui-message-desc"
	  }, ["\n            " + _vm._s(_vm.content) + "\n        "])])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-ae9ec7fc", module.exports)
	  }
	}

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(108)

	/* script */
	__vue_exports__ = __webpack_require__(110)

	/* template */
	var __vue_template__ = __webpack_require__(111)
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
	__vue_options__.__file = "/Users/clancyz/Workspace/github/wmfe-xcui-2.0/xcui/src/components/modal/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-50dce728", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-50dce728", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(109);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-50dce728!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-50dce728!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "\n.xcui-modal-wrapper {\n  z-index: 1000;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.xcui-modal-wrapper,\n.xcui-modal-mask {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  transition: opacity 0.2s ease;\n  background-color: rgba(55, 55, 55, 0.6);\n}\n.xcui-modal {\n  z-index: 1001;\n  font-size: 14px;\n  position: relative;\n  margin: 100px auto 30px;\n  background-color: #fff;\n  padding: 0;\n  background-color: white;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  transition: all 0.2s ease;\n  max-width: 100vw;\n  outline: 0;\n  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n}\n.xcui-modal.large {\n  width: 45rem;\n}\n.xcui-modal-body {\n  padding: 1.6rem;\n  min-height: 8rem;\n}\n.xcui-modal-header {\n  font-size: 1.6rem;\n  padding: .6rem;\n  min-height: 3.1rem;\n  border-bottom: 1px solid #f3f3f3;\n  text-align: center;\n}\n.xcui-modal-header-close {\n  position: absolute;\n  right: 8px;\n  top: 3px;\n  color: #000;\n  opacity: .2;\n  font-weight: 700;\n  line-height: 1;\n  font-size: 27px;\n  outline: 0;\n  border: 0;\n  background: 0;\n  padding: 0;\n}\n.xcui-modal-header-close:hover {\n  cursor: pointer;\n  text-decoration: none;\n  opacity: .5;\n}\n.xcui-modal-footer {\n  padding: .8rem 1rem;\n  text-align: center;\n  border-top: 1px solid #f3f3f3;\n}\n.xcui-modal-footer .xcui-modal-btn {\n  margin-right: 1rem;\n  background-color: #46C3C1;\n  color: #fff;\n  border: #46c3c1 solid 1px;\n  min-width: 75px;\n}\n.xcui-modal-footer .xcui-modal-btn:hover {\n  background-color: #2b9d9b;\n  border: #2b9d9b solid 1px;\n}\n.xcui-modal-footer .xcui-modal-btn:active {\n  background-color: #2b9d9b;\n  border: #2b9d9b solid 1px;\n  -webkit-box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.2);\n  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.2);\n}\n.xcui-modal-footer .xcui-modal-cancel-btn {\n  min-width: 75px;\n}\n.xcui-modal-size-small {\n  width: 22%;\n}\n.xcui-modal-size-middle {\n  width: 30%;\n}\n.xcui-modal-size-large {\n  width: 60%;\n}\n.xcui-modal-size-full {\n  width: 99%;\n}\n", ""]);

	// exports


/***/ },
/* 110 */
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
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
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
	  }, [_vm._h('div', {
	    staticClass: "xcui-modal",
	    class: _vm.modalClass,
	    style: (_vm.style),
	    attrs: {
	      "tabindex": "-1"
	    },
	    on: {
	      "keydown": function($event) {
	        if ($event.keyCode !== 27) { return; }
	        _vm.cancel($event)
	      }
	    }
	  }, [(_vm.showHeader) ? _vm._h('div', {
	    staticClass: "xcui-modal-header"
	  }, [_vm._t("header", [_vm._h('span', {
	    staticClass: "xcui-modal-title"
	  }, [_vm._s(_vm.title)])]), " ", _vm._t("close", [(_vm.showCloseButton) ? _vm._h('button', {
	    staticClass: "xcui-modal-header-close",
	    attrs: {
	      "type": "button",
	      "data-dismiss": "modal"
	    },
	    on: {
	      "click": _vm.cancel
	    }
	  }, [_vm._h('span', {
	    attrs: {
	      "aria-hidden": "true"
	    }
	  }, ["×"]), _vm._h('span', {
	    staticClass: "sr-only"
	  }, ["Close"])]) : _vm._e(), " "])]) : _vm._e(), " ", _vm._h('div', {
	    staticClass: "xcui-modal-body",
	    style: (_vm.contentStyle)
	  }, [_vm._t("default", [_vm._s(_vm.content)])]), " ", (_vm.showFooter) ? _vm._h('div', {
	    staticClass: "xcui-modal-footer"
	  }, [_vm._t("footer", [(_vm.showOkButton) ? _vm._h('button', {
	    staticClass: "btn xcui-modal-btn btn-primary",
	    attrs: {
	      "type": "button",
	      "name": "button"
	    },
	    on: {
	      "click": _vm.ok
	    }
	  }, [_vm._s(_vm.okText)]) : _vm._e(), " ", (_vm.showCancelButton) ? _vm._h('button', {
	    staticClass: "btn xcui-modal-cancel-btn btn-default",
	    attrs: {
	      "type": "button",
	      "name": "button"
	    },
	    on: {
	      "click": _vm.cancel
	    }
	  }, [_vm._s(_vm.cancelText)]) : _vm._e()])]) : _vm._e()])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-50dce728", module.exports)
	  }
	}

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(113)

	/* script */
	__vue_exports__ = __webpack_require__(115)

	/* template */
	var __vue_template__ = __webpack_require__(116)
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
	__vue_options__.__file = "/Users/clancyz/Workspace/github/wmfe-xcui-2.0/xcui/src/components/pageloading/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-16e19c48", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-16e19c48", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(114);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-16e19c48!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-16e19c48!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "\n#xcui-pageloading .bar {\n  background: #29d;\n  position: fixed;\n  z-index: 1031;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 2px;\n}\n#xcui-pageloading .peg {\n  display: block;\n  position: absolute;\n  right: 0px;\n  width: 100px;\n  height: 100%;\n  box-shadow: 0 0 10px #29d, 0 0 5px #29d;\n  opacity: 1.0;\n  -webkit-transform: rotate(3deg) translate(0px, -4px);\n  -ms-transform: rotate(3deg) translate(0px, -4px);\n  transform: rotate(3deg) translate(0px, -4px);\n}\n", ""]);

	// exports


/***/ },
/* 115 */
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
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;
	  return _vm._h('div', {
	    staticClass: "xcui-pageloading"
	  }, [_vm._h('div', {
	    staticClass: "bar",
	    attrs: {
	      "role": "bar"
	    }
	  }, [_vm._h('div', {
	    staticClass: "peg"
	  })])])
	}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-16e19c48", module.exports)
	  }
	}

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(118)

	/* script */
	__vue_exports__ = __webpack_require__(120)

	/* template */
	var __vue_template__ = __webpack_require__(121)
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
	__vue_options__.__file = "/Users/clancyz/Workspace/github/wmfe-xcui-2.0/xcui/src/components/pagination/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-4acc3095", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-4acc3095", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(119);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-4acc3095!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-4acc3095!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "\n.v-pagination-wrap {\n  -webkit-user-select: none;\n}\n.v-pagination-wrap .v-pagination-standard {\n  vertical-align: bottom;\n  margin: 0;\n}\n.v-pagination-wrap .v-pagination-standard .btn a {\n  padding: 5px 12px;\n}\n.v-pagination-wrap .v-pagination-standard .btn a:focus {\n  background-color: initial;\n}\n.v-pagination-wrap .v-pagination-standard .btn a,\n.v-pagination-wrap .v-pagination-standard .btn a:hover,\n.v-pagination-wrap .v-pagination-standard .btn a:active {\n  text-decoration: none;\n}\n.v-pagination-wrap .v-pagination-standard .page-btn {\n  padding-left: 3px;\n  padding-right: 3px;\n}\n.v-pagination-wrap .v-pagination-standard .page-btn.active {\n  background-color: #46c3c1;\n  border-color: #46c3c1;\n  outline: none;\n}\n.v-pagination-wrap .v-pagination-standard .page-btn.active a {\n  color: #fff;\n}\n.v-pagination-wrap .v-pagination-standard .apostrophe {\n  border-color: transparent;\n  border-left-color: #ddd;\n}\n.v-pagination-wrap .v-pagination-standard .apostrophe:hover {\n  background-color: inherit;\n}\n.v-pagination-wrap .v-pagination-page-size {\n  line-height: 34px;\n}\n.v-pagination-wrap .v-pagination-mini .prev-trigger {\n  margin: 0 10px;\n  padding: 2px 12px;\n}\n.v-pagination-wrap .v-pagination-mini .prev-trigger span {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.v-pagination-wrap .v-pagination-mini .next-trigger {\n  margin: 0 0 0 10px;\n  padding: 2px 12px;\n}\n.v-pagination-wrap .v-pagination-mini .next-trigger span {\n  -webkit-transform: rotate(-90deg);\n  transform: rotate(-90deg);\n}\n.v-pagination-wrap .v-pagination-mini .prev-trigger .caret,\n.v-pagination-wrap .v-pagination-mini .next-trigger .caret {\n  position: relative;\n  top: -1px;\n}\n.v-pagination-wrap .gray {\n  color: #777;\n}\n", ""]);

	// exports


/***/ },
/* 120 */
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
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    staticClass: "v-pagination-wrap"
	  }, [(_vm.type === 'standard') ? [_vm._h('div', {
	    staticClass: "row"
	  }, [(_vm.withPageSize) ? _vm._h('div', {
	    staticClass: "v-pagination-page-size col-md-3 gray"
	  }, ["\n                共", _vm._h('span', {
	    domProps: {
	      "textContent": _vm._s(_vm.total)
	    }
	  }), "条\n                  \n                每页\n                ", _vm._h('select', {
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
	  }, [_vm._l((_vm.pageSizeRange), function(opt) {
	    return _vm._h('option', {
	      domProps: {
	        "value": opt,
	        "textContent": _vm._s(opt)
	      }
	    }, ["1"])
	  })]), "\n                条\n            "]) : _vm._e(), " ", _vm._h('div', {
	    staticClass: "v-pagination-standard text-right",
	    class: [_vm.withPageSize ? 'col-md-9' : 'col-md-12']
	  }, [_vm._h('div', {
	    staticClass: "btn-group"
	  }, [_vm._h('button', {
	    staticClass: "btn btn-default",
	    class: {
	      'disabled': _vm.currentPageNum == 1
	    },
	    on: {
	      "click": _vm.prev
	    }
	  }, ["上一页"]), " ", (_vm.getRangePage.begin > 1) ? _vm._h('button', {
	    staticClass: "btn btn-default page-btn"
	  }, [_vm._h('a', {
	    attrs: {
	      "href": "javascript:void(0);"
	    },
	    on: {
	      "click": function($event) {
	        _vm.turnToPage(1)
	      }
	    }
	  }, ["1"])]) : _vm._e(), " ", (_vm.getRangePage.begin > 1) ? _vm._h('button', {
	    staticClass: "btn btn-default page-btn"
	  }, [_vm._h('a', {
	    staticClass: "apostrophe"
	  }, ["..."])]) : _vm._e(), " ", _vm._l(((_vm.getRangePage.end - _vm.getRangePage.begin + 1)), function(number) {
	    return _vm._h('button', {
	      staticClass: "btn btn-default page-btn",
	      class: {
	        'active': _vm.isActive(number)
	      }
	    }, [(_vm.isActive(number)) ? _vm._h('a', {
	      attrs: {
	        "href": "javascript:void(0);"
	      },
	      domProps: {
	        "textContent": _vm._s(number + _vm.getRangePage.begin - 1)
	      }
	    }) : _vm._h('a', {
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
	    }), " "])
	  }), " ", (_vm.getRangePage.end < _vm.totalPageCount) ? _vm._h('button', {
	    staticClass: "btn btn-default page-btn"
	  }, [_vm._h('a', {
	    staticClass: "apostrophe"
	  }, ["..."])]) : _vm._e(), " ", (_vm.getRangePage.end < _vm.totalPageCount) ? _vm._h('button', {
	    staticClass: "btn btn-default page-btn"
	  }, [_vm._h('a', {
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
	  })]) : _vm._e(), " ", _vm._h('button', {
	    staticClass: "btn btn-default",
	    class: {
	      'disabled': _vm.currentPageNum == _vm.totalPageCount
	    },
	    on: {
	      "click": _vm.next
	    }
	  }, ["下一页"])])])])] : _vm._h('div', {
	    staticClass: "v-pagination-mini"
	  }, [_vm._h('span', {
	    staticClass: "gray"
	  }, ["共", _vm._h('span', {
	    domProps: {
	      "textContent": _vm._s(_vm.total)
	    }
	  }), "条"]), " ", _vm._h('button', {
	    staticClass: "btn btn-default prev-trigger",
	    class: {
	      'disabled': _vm.currentPageNum < 2
	    },
	    on: {
	      "click": _vm.prev
	    }
	  }, [_vm._h('span', {
	    staticClass: "caret"
	  })]), " ", _vm._h('span', {
	    staticClass: "gray"
	  }, [_vm._h('span', {
	    domProps: {
	      "textContent": _vm._s(_vm.currentPageNum)
	    }
	  }), "/", _vm._h('span', {
	    domProps: {
	      "textContent": _vm._s(_vm.totalPageCount)
	    }
	  })]), " ", _vm._h('button', {
	    staticClass: "btn btn-default next-trigger",
	    class: {
	      'disabled': _vm.currentPageNum == _vm.totalPageCount
	    },
	    on: {
	      "click": _vm.next
	    }
	  }, [_vm._h('span', {
	    staticClass: "caret"
	  })])]), " "])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-4acc3095", module.exports)
	  }
	}

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(123)

	/* script */
	__vue_exports__ = __webpack_require__(125)

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
	__vue_options__.__file = "/Users/clancyz/Workspace/github/wmfe-xcui-2.0/xcui/src/components/popover/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-335e65c0", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-335e65c0", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(124);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-335e65c0!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-335e65c0!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "\n.xcui-popover .scale-enter-active,\n.xcui-popover .fadein-enter-active,\n.xcui-popover .scale-leave-active,\n.xcui-popover .fadein-leave-active {\n  display: inline-table;\n}\n.xcui-popover .fadein-enter-active {\n  animation: fadein-in 0.3s ease-in;\n}\n.xcui-popover .fadein-leave-active {\n  animation: fadein-out 0.3s ease-out;\n}\n.xcui-popover .scale-enter-active {\n  animation: scale-in 0.15s ease-in;\n}\n.xcui-popover .scale-leave-active {\n  animation: scale-out 0.15s ease-out;\n}\n@keyframes fadein-in {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: 1;\n}\n}\n@keyframes fadein-out {\n0% {\n    opacity: 1;\n}\n100% {\n    opacity: 0;\n}\n}\n@keyframes scale-in {\n0% {\n    transform: scale(0);\n    opacity: 0;\n}\n100% {\n    transform: scale(1);\n    opacity: 1;\n}\n}\n@keyframes scale-out {\n0% {\n    transform: scale(1);\n    opacity: 1;\n}\n100% {\n    transform: scale(0);\n    opacity: 0;\n}\n}\n", ""]);

	// exports


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _popoverMixins = __webpack_require__(126);

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
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _eventlistener = __webpack_require__(127);

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
	                _this._mouseenterEvent = _eventlistener2.default.listen(triger, 'mouseenter', function () {
	                    me.fixPosition(me.$refs.trigger.children[0], me.$refs.popover, me.placement);
	                    me.show = true;
	                });
	                _this._mouseleaveEvent = _eventlistener2.default.listen(triger, 'mouseleave', function () {
	                    me.show = false;
	                });
	            } else if (_this.trigger === 'focus') {
	                _this._focusEvent = _eventlistener2.default.listen(triger, 'focus', function () {
	                    me.fixPosition(me.$refs.trigger.children[0], me.$refs.popover, me.placement);
	                    me.show = true;
	                });
	                _this._blurEvent = _eventlistener2.default.listen(triger, 'blur', function () {
	                    me.show = false;
	                });
	            } else {
	                _this._clickEvent = _eventlistener2.default.listen(triger, 'click', function () {
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
/* 127 */
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
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    ref: "outer",
	    staticClass: "xcui-popover",
	    staticStyle: {
	      "position": "relative",
	      "display": "inline-block"
	    }
	  }, [_vm._h('span', {
	    ref: "trigger"
	  }, [_vm._t("default")]), " ", _vm._h('transition', {
	    attrs: {
	      "name": _vm.effect
	    },
	    on: {
	      "after-enter": _vm.afterEnter
	    }
	  }, [_vm._h('div', {
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
	  }, [_vm._h('div', {
	    staticClass: "arrow"
	  }), " ", _vm._h('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.title),
	      expression: "title"
	    }],
	    staticClass: "popover-title",
	    class: _vm.titleClass
	  }, [_vm._t("title", [_vm._h('div', {
	    domProps: {
	      "innerHTML": _vm._s(_vm.title)
	    }
	  })])]), " ", _vm._h('div', {
	    staticClass: "popover-content",
	    class: _vm.contentClass
	  }, [_vm._t("content", [_vm._h('div', {
	    domProps: {
	      "innerHTML": _vm._s(_vm.content)
	    }
	  })])])])])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-335e65c0", module.exports)
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
	__vue_options__.__file = "/Users/clancyz/Workspace/github/wmfe-xcui-2.0/xcui/src/components/progress/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-9c761130", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-9c761130", __vue_options__)
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
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-9c761130!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-9c761130!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
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

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "\n.xcui-progress {\n  margin: 10px;\n}\n.xcui-progress .xcui-progress-container {\n  width: 100%;\n  margin-right: -50px;\n  padding-right: 50px;\n  display: inline-block;\n}\n.xcui-progress .xcui-progress-outer {\n  width: 100%;\n  background: #ccc;\n  display: inline-block;\n  border-radius: 50px;\n}\n.xcui-progress .xcui-progress-inner {\n  background-color: #2db7f5;\n  border-radius: 50px;\n  position: relative;\n}\n.xcui-progress .xcui-progress-info {\n  display: inline-block;\n}\n.xcui-progress .xcui-progress-inner:after {\n  content: \"\";\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: #fff;\n  -moz-border-radius: 3px;\n  -webkit-border-radius: 3px;\n  border-radius: 3px;\n  -moz-animation: animate-shine 2s ease-out infinite;\n  -webkit-animation: animate-shine 2s ease-out infinite;\n}\n@-moz-keyframes animate-shine {\n0% {\n    opacity: 0;\n    width: 0;\n}\n50% {\n    opacity: 0.5;\n}\n100% {\n    opacity: 0;\n    width: 95%;\n}\n}\n@-webkit-keyframes animate-shine {\n0% {\n    opacity: 0;\n    width: 0;\n}\n50% {\n    opacity: 0.5;\n}\n100% {\n    opacity: 0;\n    width: 95%;\n}\n}\n", ""]);

	// exports


/***/ },
/* 132 */
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
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    staticClass: "xcui-progress"
	  }, [_vm._h('div', {
	    staticClass: "xcui-progress-container"
	  }, [_vm._h('div', {
	    staticClass: "xcui-progress-outer"
	  }, [_vm._h('div', {
	    staticClass: "xcui-progress-inner",
	    style: ({
	      width: _vm.percent + '%',
	      height: _vm.height + 'px'
	    })
	  })])]), " ", _vm._h('div', {
	    class: ['infoClassName', !_vm.showInfo ? 'hidden' : '']
	  }, ["\n        " + _vm._s(_vm.percentInfo) + "\n    "]), " ", _vm._h('div')])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-9c761130", module.exports)
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
	var __vue_template__ = __webpack_require__(144)
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
	__vue_options__.__file = "/Users/clancyz/Workspace/github/wmfe-xcui-2.0/xcui/src/components/select/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-932ae912", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-932ae912", __vue_options__)
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
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-932ae912!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-932ae912!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
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

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "\n.xcui-select {\n  display: inline-block;\n  box-sizing: content-box;\n  position: relative;\n  vertical-align: middle;\n  color: #666;\n  font-size: 14px;\n  z-index: 10;\n  width: 100%;\n}\n.xcui-select-open .xcui-select-selection {\n  border-color: #66afe9 !important;\n  outline: 0;\n  box-shadow: 0 0 0 2px #2db7f533;\n}\n.xcui-select.disabled .xcui-select-selection {\n  color: #ccc;\n  background: #f7f7f7;\n  cursor: not-allowed;\n}\n.xcui-select-selection {\n  outline: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  box-sizing: border-box;\n  display: block;\n  background-color: #fff;\n  border-radius: 4px;\n  border: 1px solid #ccc;\n  padding: 2px 6px;\n  -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.xcui-select-selection-rendered {\n  height: 26px;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  /*padding-left: 8px;*/\n  padding-right: 24px;\n  line-height: 26px;\n}\n.xcui-select-selection-text {\n  display: block;\n  font-size: 14px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.xcui-select-menu-dropdown {\n  background-color: #fff;\n  /*box-shadow: 0 1px 6px #63636333;*/\n  border-radius: 4px;\n  box-sizing: border-box;\n  z-index: 1050;\n  /*left: -9999px;*/\n  /*top: -9999px;*/\n  position: absolute;\n  top: 100%;\n  width: 100%;\n  margin-top: 2px;\n  outline: none;\n  overflow: hidden;\n  font-size: 12px;\n  max-height: 200px;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  z-index: 1;\n}\n.xcui-select-menu,\n.xcui-select-menu-group {\n  outline: none;\n  margin-bottom: 0;\n  padding-left: 0;\n  list-style: none;\n  max-height: 200px;\n  overflow: auto;\n}\n.xcui-select-menu-item,\n.xcui-select-menu-group-item {\n  position: relative;\n  display: block;\n  padding: 7px 15px;\n  font-weight: 400;\n  color: #262626;\n  cursor: pointer;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  -webkit-transition: background .3s ease;\n  transition: background .3s ease;\n}\n.xcui-select-menu-item-select,\n.xcui-select-menu-group-item-select {\n  font-weight: 500;\n  color: #666;\n  background-color: #f7f7f7;\n}\n.xcui-select-menu-item.disabled,\n.xcui-select-menu-group-item.disabled {\n  color: #ccc !important;\n  cursor: not-allowed !important;\n}\n.xcui-select-menu-item-selected,\n.xcui-select-menu-group-item-selected {\n  background-color: #337ab7;\n  font-weight: 700;\n  color: #fff;\n}\n.xcui-select-menu-item-selected:after,\n.xcui-select-menu-group-item-selected:after {\n  font-family: 'Glyphicons Halflings';\n  content: \"\\E013\";\n  position: absolute;\n  right: 6px;\n  top: 6px;\n  font-size: 12px;\n}\n.xcui-select-menu-item-selected:hover,\n.xcui-select-menu-group-item-selected:hover {\n  background-color: #f7f7f7;\n  font-weight: 700;\n  color: #666;\n}\n.xcui-select-menu-item:hover,\n.xcui-select-menu-group-item:hover {\n  background-color: #f5f5f5;\n}\n.xcui-select-menu-item-partial,\n.xcui-select-menu-group-item-partial {\n  background: red;\n}\n.xcui-select-menu-item-key,\n.xcui-select-menu-group-item-key {\n  background-color: #f5f5f5;\n}\n.xcui-select-menu-group-title {\n  color: #999;\n  line-height: 1.5;\n  padding: 8px 12px;\n}\n.xcui-select-menu-group-item {\n  padding-left: 20px;\n}\n.xcui-select-menu-group-item-selected {\n  background-color: #337ab7;\n  font-weight: 700;\n  color: #fff;\n}\n.xcui-select-menu-group-item-selected:after {\n  font-family: 'Glyphicons Halflings';\n  content: \"\\E013\";\n  position: absolute;\n  right: 6px;\n  top: 6px;\n  font-size: 12px;\n}\n.xcui-select-menu-group-item-selected:hover {\n  background-color: #f7f7f7;\n  font-weight: 700;\n  color: #666;\n}\n.xcui-select-menu-group > ul {\n  margin: 0;\n  padding: 0;\n}\n.xcui-select-search-input {\n  width: 100%;\n  border: 0;\n  font-size: 100%;\n  height: 100%;\n  outline: 0;\n  border-radius: 6px;\n}\n.xcui-select .glyphicon {\n  font-size: 12px;\n}\n.xcui-select .xcui-select-arrow {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  color: #ccc;\n}\n.xcui-select > ul > li > a {\n  padding: 0;\n  background-color: #fff;\n}\n", ""]);

	// exports


/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof2 = __webpack_require__(15);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _clone = __webpack_require__(138);

	var _clone2 = _interopRequireDefault(_clone);

	var _fuzzysearch = __webpack_require__(143);

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
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _keys = __webpack_require__(139);

	var _keys2 = _interopRequireDefault(_keys);

	var _typeof2 = __webpack_require__(15);

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
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(140), __esModule: true };

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(141);
	module.exports = __webpack_require__(26).Object.keys;

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(61)
	  , $keys    = __webpack_require__(45);

	__webpack_require__(142)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(24)
	  , core    = __webpack_require__(26)
	  , fails   = __webpack_require__(35);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 143 */
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
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
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
	        if ($event.keyCode !== 13) { return; }
	        $event.stopPropagation();
	        $event.preventDefault();
	        if ($event.target !== $event.currentTarget) { return; }
	        _vm.enterSearchValue()
	      }
	    }
	  }, [_vm._h('div', {
	    staticClass: "xcui-select-selection"
	  }, [_vm._h('div', {
	    staticClass: "xcui-select-selection-rendered",
	    on: {
	      "mousedown": function($event) {
	        $event.stopPropagation();
	        _vm.toggle()
	      }
	    }
	  }, [(_vm.showSearch) ? _vm._h('input', {
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
	        if ($event.keyCode !== 40) { return; }
	        _vm.keyNext()
	      }, function($event) {
	        if ($event.keyCode !== 38) { return; }
	        _vm.keyPrev()
	      }],
	      "keydown": function($event) {
	        if ($event.keyCode !== 13) { return; }
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
	  }) : _vm._e(), " ", (!_vm.showSearch) ? _vm._h('span', {
	    staticClass: "xcui-select-selection-text",
	    domProps: {
	      "textContent": _vm._s(_vm.currentOptionLabel || _vm.placeholder)
	    }
	  }) : _vm._e(), " ", _vm._h('i', {
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
	  })])]), " ", _vm._h('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: ((_vm.isOpen && _vm.filteredOptions.length > 0) || (_vm.isOpen && _vm.multiple)),
	      expression: "(isOpen && filteredOptions.length>0) || (isOpen && multiple)"
	    }],
	    staticClass: "xcui-select-menu-dropdown"
	  }, [_vm._h('ul', {
	    ref: "list",
	    staticClass: "xcui-select-menu",
	    attrs: {
	      "aria-activedescendant": ""
	    }
	  }, [(_vm.multipleMaxShow) ? _vm._h('li', {
	    staticClass: "xcui-select-menu-item"
	  }, ["\n                最多可选" + _vm._s(_vm.multipleMax) + "项!\n            "]) : _vm._e(), " ", (_vm.filteredOptions.length < 1 && _vm.searchEmptyText) ? _vm._h('li', {
	    staticClass: "xcui-select-menu-item",
	    domProps: {
	      "textContent": _vm._s(_vm.searchEmptyText)
	    }
	  }) : _vm._e(), " ", _vm._l((_vm.filteredOptions), function(item, index) {
	    return [(!_vm.optgroup) ? _vm._h('li', {
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
	    }, [_vm._h('span', {
	      domProps: {
	        "textContent": _vm._s(_vm.getOptionLabel(item))
	      }
	    })]) : _vm._e()]
	  }), " ", _vm._l((_vm.filteredOptions), function(item) {
	    return [(_vm.optgroup) ? _vm._h('li', {
	      staticClass: "xcui-select-menu-group"
	    }, [_vm._h('div', {
	      staticClass: "xcui-select-menu-group-title"
	    }, [_vm._s(item.name)]), " ", _vm._h('ul', [_vm._l((item.options), function(option, index) {
	      return [_vm._h('li', {
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
	      }, [_vm._h('span', {
	        domProps: {
	          "textContent": _vm._s(_vm.getOptionLabel(option))
	        }
	      })])]
	    })])]) : _vm._e()]
	  })])])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-932ae912", module.exports)
	  }
	}

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(146)

	/* script */
	__vue_exports__ = __webpack_require__(148)

	/* template */
	var __vue_template__ = __webpack_require__(149)
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
	__vue_options__.__file = "/Users/clancyz/Workspace/github/wmfe-xcui-2.0/xcui/src/components/suggestion/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-560b7302", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-560b7302", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


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
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-560b7302!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-560b7302!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
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
	exports.push([module.id, "\n.xcui-suggestion {\n  position: relative;\n  width: 100%;\n}\n.xcui-suggestion .xcui-show {\n  display: block;\n}\n.xcui-suggestion .xcui-suggestion-list {\n  min-width: 100%;\n  max-height: 400px;\n  overflow: auto;\n}\n.xcui-suggestion .xcui-suggestion-list li.current {\n  background: #ddd;\n}\n", ""]);

	// exports


/***/ },
/* 148 */
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
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    staticClass: "xcui-suggestion",
	    class: _vm.className
	  }, [_vm._h('input', {
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
	        if ($event.keyCode !== 38) { return; }
	        _vm.changeCurrent(-1)
	      }, function($event) {
	        if ($event.keyCode !== 40) { return; }
	        _vm.changeCurrent(1)
	      }, function($event) {
	        if ($event.keyCode !== 13) { return; }
	        $event.stopPropagation();
	        $event.preventDefault();
	        _vm.onBlur($event)
	      }]
	    }
	  }), " ", _vm._h('ul', {
	    staticClass: "xcui-suggestion-list dropdown-menu",
	    class: {
	      'show': _vm.show
	    }
	  }, [_vm._l((_vm.list), function(item, index) {
	    return _vm._h('li', {
	      class: {
	        'current': _vm.currentIndex == index
	      }
	    }, [_vm._h('a', {
	      attrs: {
	        "href": "javascript:void(0)"
	      },
	      on: {
	        "click": function($event) {
	          _vm.setItem(item)
	        }
	      }
	    }, ["\n                " + _vm._s(item.text) + "\n            "])])
	  })])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-560b7302", module.exports)
	  }
	}

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(151)

	/* script */
	__vue_exports__ = __webpack_require__(153)

	/* template */
	var __vue_template__ = __webpack_require__(154)
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
	__vue_options__.__file = "/Users/clancyz/Workspace/github/wmfe-xcui-2.0/xcui/src/components/tag/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-41e10fd5", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-41e10fd5", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


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
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-41e10fd5!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-41e10fd5!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
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
	exports.push([module.id, "\n.xcui-tag {\n  display: inline-block;\n  line-height: 25px;\n  height: 27px;\n  border-radius: 6px;\n  border: 1px solid #e9e9e9;\n  background: #fff;\n  font-size: 12px;\n  vertical-align: middle;\n  opacity: 1;\n  margin: 2px 4px 2px 0;\n  cursor: pointer;\n}\n.xcui-tag .xcui-tag-text {\n  padding: 0 8px;\n}\n.xcui-disabled {\n  background: #f5f5f5;\n  cursor: default;\n  opacity: .85;\n}\n.xcui-tag:hover {\n  opacity: 0.85;\n}\n.xcui-cross {\n  display: inline-block;\n  font-style: normal;\n  font-size: 17px;\n  zoom: 1;\n  cursor: pointer;\n  font-weight: 700;\n  margin-left: 3px;\n  color: #666;\n  opacity: 0.66;\n}\n.xcui-cross:before {\n  content: \"\\D7\";\n}\n", ""]);

	// exports


/***/ },
/* 153 */
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
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return (_vm.show) ? _vm._h('div', {
	    class: ['xcui-tag', _vm.disabled ? ' xcui-disabled' : ''],
	    on: {
	      "click": _vm.onClick
	    }
	  }, [_vm._h('div', {
	    class: _vm.className
	  }, [_vm._h('span', {
	    staticClass: "xcui-tag-text"
	  }, [_vm._t("default"), _vm._s(_vm.text), _vm._h('span', [(_vm.closeable) ? _vm._h('i', {
	    staticClass: "xcui-cross",
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	        _vm.onCloseClick($event)
	      }
	    }
	  }) : _vm._e()])])])]) : _vm._e()
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-41e10fd5", module.exports)
	  }
	}

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(156)

	/* script */
	__vue_exports__ = __webpack_require__(158)

	/* template */
	var __vue_template__ = __webpack_require__(159)
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
	__vue_options__.__file = "/Users/clancyz/Workspace/github/wmfe-xcui-2.0/xcui/src/components/tooltip/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-417aa0fe", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-417aa0fe", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(157);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-417aa0fe!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-417aa0fe!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "\n.xcui-tooltip .tooltip {\n  opacity: .9;\n}\n.xcui-tooltip .scale-enter-active,\n.xcui-tooltip .fadein-enter-active,\n.xcui-tooltip .scale-leave-active,\n.xcui-tooltip .fadein-leave-active {\n  display: inline-table;\n}\n.xcui-tooltip .fadein-enter-active {\n  animation: fadein-in 0.3s ease-in;\n}\n.xcui-tooltip .fadein-leave-active {\n  animation: fadein-out 0.3s ease-out;\n}\n.xcui-tooltip .scale-enter-active {\n  animation: scale-in 0.15s ease-in;\n}\n.xcui-tooltip .scale-leave-active {\n  animation: scale-out 0.15s ease-out;\n}\n@keyframes fadein-in {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: 1;\n}\n}\n@keyframes fadein-out {\n0% {\n    opacity: 1;\n}\n100% {\n    opacity: 0;\n}\n}\n@keyframes scale-in {\n0% {\n    transform: scale(0);\n    opacity: 0;\n}\n100% {\n    transform: scale(1);\n    opacity: 1;\n}\n}\n@keyframes scale-out {\n0% {\n    transform: scale(1);\n    opacity: 1;\n}\n100% {\n    transform: scale(0);\n    opacity: 0;\n}\n}\n", ""]);

	// exports


/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _popoverMixins = __webpack_require__(126);

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
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    ref: "outer",
	    staticClass: "xcui-tooltip",
	    staticStyle: {
	      "position": "relative",
	      "display": "inline-block"
	    }
	  }, [_vm._h('span', {
	    ref: "trigger"
	  }, [_vm._t("default")]), " ", _vm._h('transition', {
	    attrs: {
	      "name": _vm.effect
	    },
	    on: {
	      "after-enter": _vm.afterEnter
	    }
	  }, [_vm._h('div', {
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
	  }, [_vm._h('div', {
	    staticClass: "tooltip-arrow"
	  }), " ", _vm._h('div', {
	    staticClass: "tooltip-inner",
	    class: _vm.tooltipClass
	  }, [_vm._t("content", [_vm._h('div', {
	    domProps: {
	      "innerHTML": _vm._s(_vm.content)
	    }
	  })])])])])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-417aa0fe", module.exports)
	  }
	}

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(161)

	/* script */
	__vue_exports__ = __webpack_require__(163)

	/* template */
	var __vue_template__ = __webpack_require__(164)
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
	__vue_options__.__file = "/Users/clancyz/Workspace/github/wmfe-xcui-2.0/xcui/src/components/scrolltop/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-cdf60bba", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-cdf60bba", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(162);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-cdf60bba!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-cdf60bba!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "\n.xcui-scrolltop .xcui-scrolltop-init {\n  cursor: pointer;\n  width: auto;\n  display: inline-block;\n}\n.xcui-scrolltop .xcui-scrolltop-corner {\n  position: fixed;\n  bottom: 10px;\n  right: 10px;\n}\n.xcui-scrolltop .xcui-scrolltop-bottom {\n  position: fixed;\n  bottom: 10px;\n  left: 50%;\n}\n.xcui-scrolltop .xcui-scrolltop-right {\n  position: fixed;\n  top: 30%;\n  right: 10px;\n}\n.xcui-scrolltop .xcui-scrolltop-area {\n  width: 100px;\n  height: 100px;\n  font-size: 50px;\n  color: #428bca;\n  z-index: 1;\n  border: none;\n}\n.xcui-scrolltop .xcui-scrolltop-area:hover {\n  color: #3071a9;\n}\n.xcui-scrolltop .xcui-scrolltop-dropin {\n  border: none !important;\n}\n.fadein-enter-active,\n.fadein-leave-active {\n  display: block;\n}\n.fadein-enter {\n  animation: fadein-in 0.3s ease-in;\n}\n.fadein-leave-active {\n  animation: fadein-out 0.3s ease-out;\n}\n@keyframes fadein-in {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: 1;\n}\n}\n@keyframes fadein-out {\n0% {\n    opacity: 1;\n}\n100% {\n    opacity: 0;\n}\n}\n", ""]);

	// exports


/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _eventlistener = __webpack_require__(127);

	var _eventlistener2 = _interopRequireDefault(_eventlistener);

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
	            me.scrollListener = _eventlistener2.default.listen(window, 'scroll', scrollCall);
	        });
	    },
	    destroyed: function destroyed() {
	        this.scrollListener.remove();
	    }
	};

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    staticClass: "xcui-scrolltop"
	  }, [_vm._h('div', {
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
	  }, [_vm._h('transition', {
	    attrs: {
	      "name": "fadein"
	    }
	  }, [_vm._h('div', {
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
	  })])]), " ", _vm._h('div', {
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
	  }), " ", _vm._h('div', {
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
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-cdf60bba", module.exports)
	  }
	}

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _install = __webpack_require__(166);

	var _install2 = _interopRequireDefault(_install);

	var _install3 = __webpack_require__(167);

	var _install4 = _interopRequireDefault(_install3);

	var _install5 = __webpack_require__(168);

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
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof2 = __webpack_require__(15);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _keys = __webpack_require__(139);

	var _keys2 = _interopRequireDefault(_keys);

	var _index = __webpack_require__(107);

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
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _keys = __webpack_require__(139);

	var _keys2 = _interopRequireDefault(_keys);

	var _index = __webpack_require__(102);

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
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof2 = __webpack_require__(15);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _keys = __webpack_require__(139);

	var _keys2 = _interopRequireDefault(_keys);

	var _index = __webpack_require__(97);

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
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(170)

	/* script */
	__vue_exports__ = __webpack_require__(172)

	/* template */
	var __vue_template__ = __webpack_require__(258)
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
	__vue_options__.__file = "/Users/clancyz/Workspace/github/wmfe-xcui-2.0/xcui/src/App.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-d414fbc0", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-d414fbc0", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] App.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(171);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-d414fbc0!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-d414fbc0!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "\n.xcui .xcui-fade-transition {\n  opacity: 1;\n  transition: opacity linear 0.2s;\n}\n.xcui .xcui-fade-enter,\n.xcui .xcui-fade-leave {\n  opacity: 0;\n}\n.xcui .xcui-dialog-transition {\n  opacity: 1;\n  transition-duration: .4s;\n  transform: translate(-50%, -50%) scale(1) !important;\n  transition-property: transform, opacity!important;\n}\n.xcui .xcui-dialog-enter,\n.xcui .xcui-dialog-leave {\n  opacity: 0;\n}\n.xcui .xcui-dialog-enter {\n  transform: translate(-50%, -50%) scale(1.185) !important;\n}\n.xcui .xcui-dialog-leave {\n  transform: translate(-50%, -50%) scale(1) !important;\n}\n#header {\n  height: 50px;\n  background: #FF2D4B;\n  padding-left: 50px;\n  border-bottom: 1px solid #f1f1f1;\n}\n#header .logo {\n  font-size: 22px;\n  line-height: 50px;\n  height: 50px;\n  display: inline-block;\n  color: #fff;\n}\n#header .logo:hover {\n  text-decoration: none;\n}\n#header .logo img {\n  width: 32px;\n  height: 32px;\n  margin-top: -8px;\n}\n", ""]);

	// exports


/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _logo_nobg_32x322x = __webpack_require__(173);

	var _logo_nobg_32x322x2 = _interopRequireDefault(_logo_nobg_32x322x);

	var _router = __webpack_require__(174);

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
/* 173 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAADOJJREFUeAHtWwl0FeUV/uateUkIgSwGAhIwLAZlt9FKFbBStdYFRauWg2iPskkAqUcQNIALbsgiKiitAlqPqLgUFUGJFVE8YEXZyhaWBBOJCZCNl7dMv5thMi/JW7Ogod5z3vtn5l/vN/e/9/73/wf4Pyfl5+ZfVVUFg2eaZRxKTrb7dI+nSQBQs7NNWLe/A2ItfeDx9oaitIPVEge7LRox0fbq1GGLgtVq43MrbDb+qlM7LBYFFrMLbo8HVVVeOKtcOFnlhMvtREUFr51O3lfxeSWfVcHD525PBbxqMczmfKg4CAVH4CwthCOlRPlwoTMSEBsEgNrnungkxV9HhoYguW17ZKSno2fXJHRLi0bqWYAjKpIxNKysm8JyogwoKgF+OlaFwqIyFBSVI6/gGNMinCg9jvLKMrg8x6CoO+HBHv4+V3JePunbYdgAqBcNdyAuZhLaJQ/CkIv6Y1BmW3Rs59vWL/e6+DgIjIq7p5ejwpGifLe8POzBqoNuj1KHjnpOfeT5vWphEadsC6aCo6o6dOSdvsxbfG/qXquDR/ZE55TlWJTdF1H2utkt7/6sRGpa04Uc+FJ98AEBUC+95XL8PvMlTBtztl74jEhjo5N8+fALgDoo24Ku7ofOOOaF847tU3wBMPne1Fxbcm/FjLGZNfdn0kX3tFTRazpL/gGw266mhvcrHXrFFptmpCfAhjR9/PUAqHZq+vbsrhcImZ6k37FoBeD1hizaZAVUFZi1EPhmW+RNpqY4YDKdq1esBwA2Hs7A4Mx0vUDI1O0Btu4C7poOVEbkhIVs2m8B6ePuGcD2PUCHBvgh7emoub299LbrA2BSr0S/jGi9QNB0wizggbnAnClABR2sO+4HjhQGrdKozIKjwJ1TgeOlwIIHNeAvGAaIRIRLDppzsylVL14fAKu1L+Lj9Hz/qXhWX3xD5scCMqjZi4BnOSATmxs7E9jcANH035Px9D87gDEPaVPtWaa7c4HFrwOP3gv88CMg+eGS3dJKL1ofgIT4ZD0zYPrjT2R4ObBpK/BcNt86ByAgLKRoxlJ4pj4FvPFBwOoRZ6z6GLj/SSDKxj4I9K59wPxlnAp/Bs7rCtw7B1idE36zDkesXrgWANUKsHuXTnqm33Q0B9Aqhp3So3xllSYJviAsoC4Qj2vu34HHFvttIqKHTy8FnuSvbWtN7OsyP34WcDZ1wcjrgWtHa4ujUB0ktqkR8VoA4KsDZ6NXd2qJIHRWAjBhNtCODtVUdhgIhPQ04E1KwT0coKzcIiWPF5j8KPDq+0AnMihz3h/zXfm+5GX8jVKQ1gFIbBO6p/i4mkK1ATBZeqNrWs388NtS9gR2Eh8eCOdSPD/7GvjrNKDkuN/m/D4sq9DqrNsIdE8LzvzkO7SxyBL8aSrIcKht61bq8OFmKVobAK+3DzoEFwAGO4B5nOt2zsesMCShVw/a6x2a6RLFFYpy86jpCdgWKtKetMbB3rwwn/WIphjnc0yWap5C9cDpFG/DESeVVV0AzKbOYQUzxJQI2h6VA3g49HQ4vxvFdz8wimYymLJavwkYlw3s3AvceEV4zJeWapYgrkavhQYgsY0d0YnVkl5bAmIc1DRhkuiAGeO0qEwgEHLz6SW+Cgw4X2u0tJzAUaGt+Xf9TjaKWZ0rgQstTwDbsJnWZoWh7UXhyZyfNEoDXnyOyZz/6XwWCTns0fB4HFKlNgBRURHAyNr9MrTByUD8gfASxVPEftk7xvAkhCVa/fAPxjNRknOWAGUESKdtu/lmXwBuukozdb7MT2S7+w4BI64Dhlyo1wg/tdvNjEX6ASCxTY12DLu1G/4ADONv/2EDhGmjgRff0HyDg0c4VTy1mxM/4tMvjWfbKfL6mzeegoFQWpKPgPF0ruTNy5wX5nfuA4YOpKIc7ls6/Gu71Qy1Kkoq1EgAA10KUpKSw2/Fp+QUiuElA7S3LZLQIYXS0RNY/xVw7IRPQZ/L/XnGjSi+QKZSfP48Stj4ERrAcp/Zm+BONOpHemWzKfAqVqlWAwAGXhtLB4YeTgPpKSrFAWRaRH7YeCCHzAcl1ciVBVUwknxRoMK8KNT50xnaojVqKLk9JobU6Wj4AhDTOhEpjQBATNB8OisZ6UBpGe1+gDevDzqZDpVOl15AFzoI9i4XGPYGpI5Yn8bGJ1XyrmqoGxJgtrVHUlu7PqYGpeIiy+IkLTV09SQfAJLaEoBqnRS4XjLd61kU+5SkwGXCzZFNGFWpFjsDAAWdkBAfbhOBy3XpCGRnMfbWLnAZyXl3Lef9KdF/7X3gKK1DIJK2ZowFfts3UInInjudFbCanVLJ4lOzS1h+tE+FgJdiHmdP4kpxBZVgKdfvnA4x0fTpKRkSQRIT9z1/9z3B5fNtwIp3NUvRrTOBowKVOuV0h+PoqyTRMF1zGXBREzEvgy4p5faackwuDQDcnmREhxBDqREuCQgvPaqVljdtotKSeIGQLKMXLqOi3MTYwfe0/2T20t9o85vbhs1Ox0+4UFFElH2VoMnUuPkfbNSiIHXmpZyYsQdpKUSZiZkUGy/r/NPBvPR/rNQFa79KuTR0gLkZAZCefEk0+kMLqImpjVOo3A7RWZKAyumio8XF+la8AYBiOg2yRw6LOfVknX8wX3Nz33yWuqED8P6ntCDPnx4IDhuBSwMAi7n5Adh7UFsW7zkE3PxHbVEjqzhxbGRB8/bHwPRnmh+E42XV8186MgAwNzMAX38HTJnDNUMePcXL6daONBiVKNOCGYDEDlav11xeiQg1F1VV+QHAbm0+JfhBDu34PIo95/rQixngvLs+axLKkiizhLXEOoyhUuRhkSanCuo+r3ev3q4hAdEOm/6wSdN/vAU8vkQLXV/cj4HSKYGbP4dO1ANjGGDhmuyrb7nae0CLNwSuEXnO9j0ueoGf6BUNAKzNIAEzFwIv/FNbF2T24lynmIciCZ5M5PSIbw18u0OLDYrkNBV9s+MnrlU4HzXyAcBiOEV6bkNTWdqOywbeWcftspNAb87tRTNlRya8Fq+4BLh9GP2EKC2UJjtQEiNsCtq8bZfy5cpqH0CaM0Ykp7eaguTgkgQ1P99suLfzpkfu5NxxA3Dl7zQHSuIFstnyHk1lYymv4LBvEwYANlvjJUAiNbJ3p29TdWqv7Rs2dJE1MwsQvSFUQOfpicW0Fq9o9w3533fIxWN8H/pWNQDwlQbfEuFei6af/Bjw31ythixxp1LbRxqwrNufSE9fBlqETpRr8cX7Hm/Ydvzq9QdQ6H5Pa0z7NwAw+zrrvkXCuJ7Ht/IIvbj8Aq1wjIOScCOXr/3DqByiiJWC+QynVI/OWkExjWs20KGimRSTFglt2LKr7hE5AwCTYlyH26gou0l0a5etYhSIb0fIzIXPn4YAt16j3TfFv+wLyo6UHMIUku3wTTSTMt0OnwJdywn8n18o2+pr6xYwmFYUthoBSXhblN0nG2sHNAfyrU+jLW9qyuhKy/IXbswyrqCTRJPvoXWRLbRQtPTN3TC3WlK3mAGAhIkioVsmGcpOr9eXMQAR1+aiqwcDN1xZewtMwvHiZR4tDtyri5K6ccsGf+eIfQHwBm7BT05dzd6jC219NgfXeGPipzfj0eRRwMABxr1cSfRIgAhEqz7Oh7Nytr9sAwBVjczxlrmuk4StZtFkyeGI00ESGT6vm9GTnPsJZG1ENy1d+ZGS8/oBo4JxZbyuykrKSQS05GEtrCXxO1F6Pc6JoHIji4plmEsQxM0WibuJ06KuROpdzFm8CwUevp0QpN41/bMWfAza/9B35Zarl40cF4x1YwpUuZzBCra4PNl/zJr1rvLJK0FjbQYAFbJqOUNIQu83TdiNuLIRoTgyAKh0RuhWhWr6Z8qXxdjNWVtRYu6nrFwZ0rQbAFRVnXLlfqaBN0W3eQUe3DJxNVy2zLoub6DmDSvgdlOdt2Ba+eGPPJOwQln78r2RcGEAYLJ8j0IqDglQtiTautOF7IWfo6IsS1m7fFukQzcAUJVP8faaMoy5lXHqFkBfbKnEkje+xpGCJcq6Za81dMSKb0V1yIjR3Iy8HlcN7o+B/RMgO72/JJJzRf9an8vQ+RYen5lPxjc0dni1ANAbUzNvi0Nr61Vc2l5OD6sj+pzbGX0yUvldoCPktrfeSFOkssDZsbccH+Tsx7Y9O/jh5EeoKH5L+eK9JtNXfgGoO/bqb4iiDp0Dr2cAVH51FWVLQlxsPI/LJvNkaQKP1sTyOobb6/bqM72yyxzORqfYawlq/HBUwuaV3DcowYEjRdh7IJ8nSwsYv98Cky1HWfPi9rpjaqr7sAAI1ln1B5V2WwKirO3gRkfuAqdC9SQy9t4GZkW+zjAxgGHimR72xZ/C7zfdHn4C6znJT9hKGCkuJLDyVecBFHkLwjVfwcb0a96vCISPwP8A+ijW8salZEEAAAAASUVORK5CYII="

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _vueRouter = __webpack_require__(6);

	var _vueRouter2 = _interopRequireDefault(_vueRouter);

	var _Home = __webpack_require__(175);

	var _Home2 = _interopRequireDefault(_Home);

	var _homeContent = __webpack_require__(181);

	var _homeContent2 = _interopRequireDefault(_homeContent);

	var _pagination = __webpack_require__(184);

	var _pagination2 = _interopRequireDefault(_pagination);

	var _loading = __webpack_require__(189);

	var _loading2 = _interopRequireDefault(_loading);

	var _popover = __webpack_require__(194);

	var _popover2 = _interopRequireDefault(_popover);

	var _tooltip = __webpack_require__(199);

	var _tooltip2 = _interopRequireDefault(_tooltip);

	var _suggestion = __webpack_require__(204);

	var _suggestion2 = _interopRequireDefault(_suggestion);

	var _tag = __webpack_require__(209);

	var _tag2 = _interopRequireDefault(_tag);

	var _datepicker = __webpack_require__(214);

	var _datepicker2 = _interopRequireDefault(_datepicker);

	var _dateRangePicker = __webpack_require__(219);

	var _dateRangePicker2 = _interopRequireDefault(_dateRangePicker);

	var _select = __webpack_require__(224);

	var _select2 = _interopRequireDefault(_select);

	var _message = __webpack_require__(233);

	var _message2 = _interopRequireDefault(_message);

	var _modal = __webpack_require__(235);

	var _modal2 = _interopRequireDefault(_modal);

	var _inputNumber = __webpack_require__(240);

	var _inputNumber2 = _interopRequireDefault(_inputNumber);

	var _progress = __webpack_require__(245);

	var _progress2 = _interopRequireDefault(_progress);

	var _pageloading = __webpack_require__(250);

	var _pageloading2 = _interopRequireDefault(_pageloading);

	var _scrolltop = __webpack_require__(253);

	var _scrolltop2 = _interopRequireDefault(_scrolltop);

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
	            component: _dateRangePicker2.default
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
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(176)

	/* script */
	__vue_exports__ = __webpack_require__(178)

	/* template */
	var __vue_template__ = __webpack_require__(180)
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
	__vue_options__.__file = "/Users/clancyz/Workspace/github/wmfe-xcui-2.0/xcui/src/Home.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-6e76e220", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-6e76e220", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Home.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(177);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-6e76e220!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Home.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-6e76e220!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Home.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "\n#wrapper {\n  -webkit-transition: all .5s ease;\n  -moz-transition: all .5s ease;\n  -o-transition: all .5s ease;\n  transition: all .5s ease;\n}\n#wrapper .toggled {\n  padding-left: 250px;\n}\n#wrapper.row {\n  margin-left: 0;\n  margin-right: 0;\n  padding: 20px 40px;\n}\n#sidebar-wrapper {\n  z-index: 1000;\n  display: inline-block;\n  height: 100%;\n  overflow-x: hidden;\n  background: #fff;\n  -webkit-transition: all .5s ease;\n  -moz-transition: all .5s ease;\n  -o-transition: all .5s ease;\n  transition: all .5s ease;\n  padding: 0;\n}\n#wrapper.toggled #sidebar-wrapper {\n  width: 250px;\n}\n#page-content-wrapper {\n  background: #fff;\n}\n/* Sidebar Styles */\n.sidebar-nav {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  overflow-x: hidden!important;\n}\n.sidebar-nav li {\n  text-indent: 20px;\n  line-height: 40px;\n}\n.sidebar-nav li a {\n  display: block;\n  text-decoration: none;\n  color: #333;\n  border-left: 2px solid #fff;\n}\n.sidebar-nav li a:hover {\n  text-decoration: none;\n  color: #FF2D4B;\n  background: rgba(255, 255, 255, 0.2);\n}\n.sidebar-nav li a.active,\n.sidebar-nav li a.focus {\n  text-decoration: none;\n}\n.sidebar-nav li a.v-link-active {\n  border-left: 2px solid #FF2D4B;\n  background: #fff;\n  color: #FF2D4B;\n}\n.sidebar-nav .sidebar-brand {\n  height: 65px;\n  font-size: 18px;\n  line-height: 60px;\n}\n.sidebar-nav .sidebar-brand a {\n  color: #FF2D4B;\n  background: #fff;\n}\n.sidebar-nav .sidebar-brand a :hover {\n  color: #fff;\n  background: #FF2D4B;\n}\n@media (min-width: 768px) {\n}\n.xcui-demo-container {\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  margin: 15px 0 30px 0;\n  padding: 15px;\n}\n.xcui-demo-container .xcui-example-container h3 {\n  margin-top: 15px !important;\n}\n.xcui-demo-container .xcui-example-container .xcui-demo-wrap,\n.xcui-demo-container .xcui-example-container .xcui-code-wrap {\n  width: 100%!important;\n}\n.xcui-demo-container .xcui-example-container .xcui-code-wrap {\n  max-width: 100%;\n  margin-top: 20px;\n}\n.xcui-demo-container .xcui-example-container .xcui-code-wrap pre {\n  padding-right: 0;\n  display: block;\n  font-size: 13px;\n  line-height: 1.42857143;\n  color: #333;\n  word-break: break-all;\n  word-wrap: break-word;\n  background-color: rgba(128, 128, 128, 0.05);\n  border: 1px solid rgba(128, 128, 128, 0.075);\n  border-radius: 4px;\n  white-space: pre-wrap;\n}\n.xcui-demo-container .xcui-example-container .xcui-code-wrap pre .token {\n  display: inline-block;\n  white-space: normal;\n}\n/* http://prismjs.com/download.html?themes=prism&languages=markup+css+clike+javascript */\n/**\n * prism.js default theme for JavaScript, CSS and HTML\n * Based on dabblet (http://dabblet.com)\n * @author Lea Verou\n */\ncode[class*=\"language-\"],\npre[class*=\"language-\"] {\n  background: none;\n  text-shadow: 0 1px white;\n  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n  text-align: left;\n  word-spacing: normal;\n  line-height: 1.5;\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n  -webkit-hyphens: none;\n  -moz-hyphens: none;\n  -ms-hyphens: none;\n  hyphens: none;\n  display: block;\n  font-size: 13px;\n  color: #333;\n  word-break: break-all;\n  word-wrap: break-word;\n  background-color: rgba(128, 128, 128, 0.05);\n  border: 1px solid rgba(128, 128, 128, 0.075);\n  border-radius: 4px;\n  white-space: pre-wrap;\n}\npre[class*=\"language-\"]::-moz-selection,\npre[class*=\"language-\"]::-moz-selection,\ncode[class*=\"language-\"]::-moz-selection,\ncode[class*=\"language-\"]::-moz-selection {\n  text-shadow: none;\n  background: #b3d4fc;\n}\npre[class*=\"language-\"]::selection,\npre[class*=\"language-\"]::selection,\ncode[class*=\"language-\"]::selection,\ncode[class*=\"language-\"]::selection {\n  text-shadow: none;\n  background: #b3d4fc;\n}\n@media print {\ncode[class*=\"language-\"],\n  pre[class*=\"language-\"] {\n    text-shadow: none;\n}\n}\n/* Code blocks */\npre[class*=\"language-\"] {\n  padding: 1em;\n  margin: .5em 0;\n  overflow: auto;\n}\n:not(pre) > code[class*=\"language-\"],\npre[class*=\"language-\"] {\n  background: #f5f2f0;\n}\n/* Inline code */\n:not(pre) > code[class*=\"language-\"] {\n  padding: .1em;\n  border-radius: .3em;\n  white-space: normal;\n}\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n  color: slategray;\n}\n.token.style-attr {\n  margin-left: .5em;\n}\n.token.punctuation {\n  color: #999;\n}\n.namespace {\n  opacity: .7;\n}\n.token.property,\n.token.tag,\n.token.boolean,\n.token.number,\n.token.constant,\n.token.symbol,\n.token.deleted {\n  color: #905;\n}\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n  color: #690;\n}\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string {\n  color: #a67f59;\n}\n.token.atrule,\n.token.attr-value,\n.token.keyword {\n  color: #07a;\n}\n.token.function {\n  color: #DD4A68;\n}\n.token.regex,\n.token.important,\n.token.variable {\n  color: #e90;\n}\n.token.important,\n.token.bold {\n  font-weight: bold;\n}\n.token.italic {\n  font-style: italic;\n}\n.token.entity {\n  cursor: help;\n}\n", ""]);

	// exports


/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});


	var version = __webpack_require__(179).version;

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
/* 179 */
/***/ function(module, exports) {

	module.exports = {
		"name": "xcui",
		"version": "1.0.1",
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
			"rimraf": "^2.5.0",
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
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    staticClass: "row",
	    attrs: {
	      "id": "wrapper"
	    }
	  }, [_vm._h('div', {
	    staticClass: "col-md-2",
	    attrs: {
	      "id": "sidebar-wrapper"
	    }
	  }, [_vm._h('ul', {
	    staticClass: "sidebar-nav"
	  }, [_vm._h('li', [_vm._h('router-link', {
	    attrs: {
	      "to": "/home"
	    }
	  }, ["关于XCUI"])]), " ", _vm._h('li', [_vm._h('router-link', {
	    attrs: {
	      "to": "/component/datepicker"
	    }
	  }, ["DatePicker"])]), " ", _vm._h('li', [_vm._h('router-link', {
	    attrs: {
	      "to": "/component/daterangepicker"
	    }
	  }, ["DateRangePicker"])]), " ", _vm._h('li', [_vm._h('router-link', {
	    attrs: {
	      "to": "/component/inputNumber"
	    }
	  }, ["InputNumber"])]), " ", _vm._h('li', [_vm._h('router-link', {
	    attrs: {
	      "to": "/component/loading"
	    }
	  }, ["Loading"])]), " ", _vm._h('li', [_vm._h('router-link', {
	    attrs: {
	      "to": "/component/modal"
	    }
	  }, ["Modal"])]), " ", _vm._h('li', [_vm._h('router-link', {
	    attrs: {
	      "to": "/component/suggestion"
	    }
	  }, ["Suggestion"])]), " ", _vm._h('li', [_vm._h('router-link', {
	    attrs: {
	      "to": "/component/pagination"
	    }
	  }, ["Pagination"])]), " ", _vm._h('li', [_vm._h('router-link', {
	    attrs: {
	      "to": "/component/popover"
	    }
	  }, ["Popover"])]), " ", _vm._h('li', [_vm._h('router-link', {
	    attrs: {
	      "to": "/component/progress"
	    }
	  }, ["Progress"])]), " ", _vm._h('li', [_vm._h('router-link', {
	    attrs: {
	      "to": "/component/pageloading"
	    }
	  }, ["PageLoading"])]), " ", _vm._h('li', [_vm._h('router-link', {
	    attrs: {
	      "to": "/component/tooltip"
	    }
	  }, ["Tooltip"])]), " ", _vm._h('li', [_vm._h('router-link', {
	    attrs: {
	      "to": "/component/tag"
	    }
	  }, ["Tag"])]), " ", _vm._h('li', [_vm._h('router-link', {
	    attrs: {
	      "to": "/component/message"
	    }
	  }, ["Message"])]), " ", _vm._h('li', [_vm._h('router-link', {
	    attrs: {
	      "to": "/component/select"
	    }
	  }, ["Select"])]), " ", _vm._h('li', [_vm._h('router-link', {
	    attrs: {
	      "to": "/component/scrolltop"
	    }
	  }, ["ScrollTop"])])])]), " ", " ", " ", _vm._h('div', {
	    staticClass: "col-md-10",
	    attrs: {
	      "id": "page-content-wrapper"
	    }
	  }, [_vm._h('router-view', {
	    attrs: {
	      "transition": "xcui-fade",
	      "transition-mode": "out-in"
	    }
	  })]), " "])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-6e76e220", module.exports)
	  }
	}

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(182)

	/* template */
	var __vue_template__ = __webpack_require__(183)
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
	__vue_options__.__file = "/Users/clancyz/Workspace/github/wmfe-xcui-2.0/xcui/src/demos/homeContent.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-9d0a064c", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-9d0a064c", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] homeContent.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});


	var version = __webpack_require__(179).version;

	exports.default = {
	    data: function data() {
	        return {
	            version: version
	        };
	    }
	};

/***/ },
/* 183 */
/***/ function(module, exports) {

	
	    module.exports = {
	      render: function(){with(this){return _h('div',[_h('h1',["关于XCUI"])," ",_m(0)," ",_m(1)," ",_h('h2',["XCUI的目标是："])," ",_m(2)," ",_h('h2',["版本支持"])," ",_m(3)," ",_h('blockquote',[_h('p',["XCUI需要在页面中引入",_h('code',["bootstrap.css"]),"。"])])," ",_h('h2',["如何使用"])," ",_m(4)," ",_h('pre',["npm install xcui\n"])," ",_m(5)," ",_h('p',["在页面根实例中引入："])," ",_m(6)," ",_h('p',["或者："])," ",_m(7)," ",_h('p',["在页面中声明标签，即可使用。举例："])," ",_m(8)," ",_h('p',["除了使用npm进行安装外，还可直接将xcui的js和css文件使用标签形式引入，举例："])," ",_m(9)," ",_h('blockquote',[_h('p',[_h('strong',["说明"]),_h('br'),"\nXCUI在使用",_h('code',["Vue.use(xcui)"]),"后，会默认以",_h('code',["xcui-"]),"前缀注册所有组件，在Vue实例中可直接使用而",_h('strong',["不用在",_h('code',["components"]),"中声明"]),"。如："])])," ",_m(10)," ",_h('p',["当然，您也可以按以下方式使用xcui组件："])," ",_m(11)," ",_h('h2',["全局方法"])," ",_m(12)," ",_m(13)," ",_m(14)," ",_h('h2',["开发"])," ",_h('h4',["clone the doc repo"])," ",_m(15)," ",_h('h4',["安装依赖"])," ",_h('pre',["$ npm i\n"])," ",_h('h4',["run dev server"])," ",_h('pre',["$ npm run dev\n"])," ",_h('h4',["build components"])," ",_h('pre',["$ npm run build\n"])," ",_h('h2',["加入我们"])," ",_h('h4',["提交issue"])," ",_m(16)," ",_h('h4',["提交pull request"])," ",_m(17)," ",_h('h4',["加入开发团队"])," ",_m(18)])}},
	      staticRenderFns: [function(){with(this){return _h('p',[_h('img',{attrs:{"src":"https://github.com/wmfe/xcui/raw/master/src/assets/logo_nobg_128x128@2x.png","alt":"logo"}})])}},function(){with(this){return _h('p',["XCUI 是基于",_h('code',["Vue"]),"和 ",_h('code',["Bootstrap.css"])," 的",_h('strong',["桌面端组件库"]),"。"])}},function(){with(this){return _h('ul',[_h('li',["满足桌面端页面大部分基础组件需求。"])," ",_h('li',["快速开发基于 ",_h('code',["vue"])," 构建的项目。"])," ",_h('li',["保持小体积, 无其他js库依赖(不依赖",_h('code',["jquery"]),", ",_h('code',["Boostrap.js"]),"), 仅使用 ",_h('code',["Boostrap.css"])," 。"])," ",_h('li',["简洁优雅。"])])}},function(){with(this){return _h('p',["XCUI的1.0分支支持 ",_h('code',["Vue 1.x"])," 版本；2.0分支支持 ",_h('code',["Vue 2.x"])," 版本。",_h('br'),"\n在使用",_h('code',["Vue 1.x"])," 版本时，推荐使用 ",_h('code',["Vue 1.0.26"])," 以上版本；",_h('br'),"\n在使用",_h('code',["Vue 2.x"])," 版本时，推荐使用 ",_h('code',["Vue 2.0.5"])," 以上版本。"])}},function(){with(this){return _h('p',["通过",_h('code',["npm"]),"安装，或在",_h('a',{attrs:{"href":"https://github.com/wmfe/xcui/releases"}},["这里"]),"下载打包好的版本："])}},function(){with(this){return _h('p',[_h('code',["xcui"]),"使用",_h('code',["umd"]),"方式打包，支持各种模块加载器。"])}},function(){with(this){return _h('pre',[_h('span',{staticClass:"token keyword"},["import"])," Vue ",_h('span',{staticClass:"token keyword"},["from"])," ",_h('span',{staticClass:"token string"},["'vue'"]),"\n",_h('span',{staticClass:"token keyword"},["import"])," xcui ",_h('span',{staticClass:"token keyword"},["from"])," ",_h('span',{staticClass:"token string"},["'xcui'"]),"\n",_h('span',{staticClass:"token keyword"},["import"])," ",_h('span',{staticClass:"token string"},["'xcui/dist/xcui.css'"]),"\nVue",_h('span',{staticClass:"token punctuation"},["."]),_h('span',{staticClass:"token function"},["use"]),_h('span',{staticClass:"token punctuation"},["("]),"xcui",_h('span',{staticClass:"token punctuation"},[")"]),_h('span',{staticClass:"token punctuation"},[";"]),"\n"])}},function(){with(this){return _h('pre',[_h('span',{staticClass:"token keyword"},["var"])," Vue ",_h('span',{staticClass:"token operator"},["="])," ",_h('span',{staticClass:"token function"},["require"]),_h('span',{staticClass:"token punctuation"},["("]),_h('span',{staticClass:"token string"},["'vue'"]),_h('span',{staticClass:"token punctuation"},[")"]),_h('span',{staticClass:"token punctuation"},[";"]),"\n",_h('span',{staticClass:"token keyword"},["var"])," xcui ",_h('span',{staticClass:"token operator"},["="])," ",_h('span',{staticClass:"token function"},["require"]),_h('span',{staticClass:"token punctuation"},["("]),_h('span',{staticClass:"token string"},["'xcui'"]),_h('span',{staticClass:"token punctuation"},[")"]),_h('span',{staticClass:"token punctuation"},[";"]),"\nVue",_h('span',{staticClass:"token punctuation"},["."]),_h('span',{staticClass:"token function"},["use"]),_h('span',{staticClass:"token punctuation"},["("]),"xcui",_h('span',{staticClass:"token punctuation"},[")"]),_h('span',{staticClass:"token punctuation"},[";"]),"\n"])}},function(){with(this){return _h('pre',[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-tag"])," ",_h('span',{staticClass:"token attr-name"},[":closeable"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"true",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["text"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),_h('span',{staticClass:"token punctuation"},["'"]),"关闭",_h('span',{staticClass:"token punctuation"},["'"]),_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-tag"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\n"])}},function(){with(this){return _h('pre',[_h('span',{staticClass:"token doctype"},["<!DOCTYPE html>"]),"\n",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"html"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\n",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"head"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\n    ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"title"]),_h('span',{staticClass:"token punctuation"},[">"])]),"Hello XCUI",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"title"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\n    ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"link"])," ",_h('span',{staticClass:"token attr-name"},["rel"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"stylesheet",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["href"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"bootstrap/css/bootstrap.css",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\n    ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"link"])," ",_h('span',{staticClass:"token attr-name"},["rel"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"stylesheet",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["href"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"xcui.css",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\n    ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"script"])," ",_h('span',{staticClass:"token attr-name"},["type"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"text/javascript",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["src"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"vue.js",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),_h('span',{staticClass:"token script language-javascript"}),_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"script"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\n    ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"script"])," ",_h('span',{staticClass:"token attr-name"},["type"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"text/javascript",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["src"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"xcui.js",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),_h('span',{staticClass:"token script language-javascript"}),_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"script"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\n",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"head"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\n",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"body"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\n    ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"div"])," ",_h('span',{staticClass:"token attr-name"},["id"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"app",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\n        ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-tag"])," ",_h('span',{staticClass:"token attr-name"},[":closeable"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"true",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},[":text"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),_h('span',{staticClass:"token punctuation"},["'"]),"关闭",_h('span',{staticClass:"token punctuation"},["'"]),_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-tag"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\n    ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"div"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\n    ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"script"])," ",_h('span',{staticClass:"token attr-name"},["type"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"text/javascript",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),_h('span',{staticClass:"token script language-javascript"},["\n        Vue",_h('span',{staticClass:"token punctuation"},["."]),_h('span',{staticClass:"token function"},["use"]),_h('span',{staticClass:"token punctuation"},["("]),"xcui",_h('span',{staticClass:"token punctuation"},[")"]),_h('span',{staticClass:"token punctuation"},[";"]),"\n        ",_h('span',{staticClass:"token keyword"},["new"])," ",_h('span',{staticClass:"token class-name"},["Vue"]),_h('span',{staticClass:"token punctuation"},["("]),_h('span',{staticClass:"token punctuation"},["{"]),"\n            el",_h('span',{staticClass:"token punctuation"},[":"])," ",_h('span',{staticClass:"token string"},["'#app'"]),_h('span',{staticClass:"token punctuation"},[","]),"\n            ready",_h('span',{staticClass:"token punctuation"},[":"])," ",_h('span',{staticClass:"token keyword"},["function"])," ",_h('span',{staticClass:"token punctuation"},["("]),_h('span',{staticClass:"token punctuation"},[")"]),_h('span',{staticClass:"token punctuation"},["{"]),"\n                ",_h('span',{staticClass:"token keyword"},["this"]),_h('span',{staticClass:"token punctuation"},["."]),_h('span',{staticClass:"token function"},["$alert"]),_h('span',{staticClass:"token punctuation"},["("]),_h('span',{staticClass:"token string"},["'Hello XCUI!'"]),_h('span',{staticClass:"token punctuation"},[")"]),"\n            ",_h('span',{staticClass:"token punctuation"},["}"]),"\n        ",_h('span',{staticClass:"token punctuation"},["}"]),_h('span',{staticClass:"token punctuation"},[")"]),"\n    "]),_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"script"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\n",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"body"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\n",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"html"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\n"])}},function(){with(this){return _h('pre',[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-tag"]),_h('span',{staticClass:"token punctuation"},[">"])]),_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-tag"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\n"])}},function(){with(this){return _h('pre',[_h('span',{staticClass:"token keyword"},["import"])," ",_h('span',{staticClass:"token punctuation"},["{"]),"Tag",_h('span',{staticClass:"token punctuation"},[","])," Select",_h('span',{staticClass:"token punctuation"},["}"])," ",_h('span',{staticClass:"token keyword"},["from"])," xcui",_h('span',{staticClass:"token punctuation"},[";"]),"\n",_h('span',{staticClass:"token keyword"},["export"])," ",_h('span',{staticClass:"token keyword"},["default"])," ",_h('span',{staticClass:"token punctuation"},["{"]),"\n    components",_h('span',{staticClass:"token punctuation"},[":"])," ",_h('span',{staticClass:"token punctuation"},["{"]),"Tag",_h('span',{staticClass:"token punctuation"},[","])," Select",_h('span',{staticClass:"token punctuation"},["}"]),"\n",_h('span',{staticClass:"token punctuation"},["}"]),"\n"])}},function(){with(this){return _h('p',[_h('code',["xcui"]),"把一些使用频率高的操作挂载到",_h('code',["Vue"]),"的根实例，便于调用。如, 在一个",_h('code',["components"]),"组件中可以这样调用 ( ",_h('strong',["且不用在页面中显式地声明html标签"])," )："])}},function(){with(this){return _h('pre',[_h('span',{staticClass:"token keyword"},["this"]),_h('span',{staticClass:"token punctuation"},["."]),_h('span',{staticClass:"token function"},["$alert"]),_h('span',{staticClass:"token punctuation"},["("]),_h('span',{staticClass:"token string"},["'alert message'"]),_h('span',{staticClass:"token punctuation"},[")"])," ",_h('span',{staticClass:"token comment",attrs:{"spellcheck":"true"}},["// 警告提示"]),"\n",_h('span',{staticClass:"token keyword"},["this"]),_h('span',{staticClass:"token punctuation"},["."]),_h('span',{staticClass:"token function"},["$confirm"]),_h('span',{staticClass:"token punctuation"},["("]),_h('span',{staticClass:"token string"},["'是否确认?'"]),_h('span',{staticClass:"token punctuation"},[","])," content",_h('span',{staticClass:"token punctuation"},[","])," onOk",_h('span',{staticClass:"token punctuation"},[","])," onCancel",_h('span',{staticClass:"token punctuation"},[")"])," ",_h('span',{staticClass:"token comment",attrs:{"spellcheck":"true"}},["// 确认提示"]),"\n",_h('span',{staticClass:"token keyword"},["this"]),_h('span',{staticClass:"token punctuation"},["."]),_h('span',{staticClass:"token function"},["$toaster"]),_h('span',{staticClass:"token punctuation"},["("]),_h('span',{staticClass:"token string"},["'toaster message'"]),_h('span',{staticClass:"token punctuation"},[")"])," ",_h('span',{staticClass:"token comment",attrs:{"spellcheck":"true"}},["// 信息提示"]),"\n",_h('span',{staticClass:"token keyword"},["this"]),_h('span',{staticClass:"token punctuation"},["."]),"$Modal",_h('span',{staticClass:"token punctuation"},["."]),_h('span',{staticClass:"token function"},["show"]),_h('span',{staticClass:"token punctuation"},["("]),"options",_h('span',{staticClass:"token punctuation"},[")"])," ",_h('span',{staticClass:"token comment",attrs:{"spellcheck":"true"}},["// 模态框"]),"\n"])}},function(){with(this){return _h('p',["具体请见",_h('a',{attrs:{"href":"https://wmfe.github.io/xcui/#!/component/modal"}},["modal"])," 中的说明。"])}},function(){with(this){return _h('pre',["$ git clone git@github",_h('span',{staticClass:"token punctuation"},["."]),"com",_h('span',{staticClass:"token punctuation"},[":"]),"wmfe",_h('span',{staticClass:"token operator"},["/"]),"xcui",_h('span',{staticClass:"token punctuation"},["."]),"git\n"])}},function(){with(this){return _h('p',["在使用过程中有问题，请在",_h('a',{attrs:{"href":"https://github.com/wmfe/xcui/issues"}},["这里"]),"给我们提交",_h('code',["issue"]),"。"])}},function(){with(this){return _h('p',["代码有问题？请在",_h('a',{attrs:{"href":"https://github.com/wmfe/xcui/pulls"}},["这里"]),"给我们提交",_h('code',["pull request"]),"。"])}},function(){with(this){return _h('p',["加入",_h('a',{attrs:{"href":"https://github.com/wmfe"}},["wmfe"]),"团队，一起开发通用组件，交流vue组件开发的心得~"])}}]
	    };
	  

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(185)

	/* script */
	__vue_exports__ = __webpack_require__(187)

	/* template */
	var __vue_template__ = __webpack_require__(188)
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
	__vue_options__.__file = "/Users/clancyz/Workspace/github/wmfe-xcui-2.0/xcui/src/demos/pagination.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-13c21f8a", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-13c21f8a", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] pagination.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(186);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-13c21f8a!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./pagination.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-13c21f8a!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./pagination.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "\n.table {\n  border: 1px solid #ddd;\n  background-color: #fff;\n  margin-top: 15px;\n}\n", ""]);

	// exports


/***/ },
/* 187 */
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
/* 188 */
/***/ function(module, exports) {

	
	    module.exports = {
	      render: function(){with(this){return _h('div',[_h('h1',["Pagination页码"])," ",_h('h2',["使用场景"])," ",_m(0)," ",_h('h1',["Demo"])," ",_h('div',{staticClass:"xcui-demo-container col-md-12 col-xs-12 col-lg-12"},[_h('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_h('h3',["两种翻页展示"])," ",_h('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_h('div',{staticClass:"row"},[_h('div',{staticClass:"col-md-12 text-right"},[_h('xcui-pagination',{directives:[{name:"show",rawName:"v-show",value:(total > 0),expression:"total > 0"}],attrs:{"type":"mini","current-page-num":currentPageNum,"total":total,"page-size":pageSize},on:{"go-to-page":goToPage}})])])," ",_h('table',{staticClass:"table table-hover table-condensed"},[_m(1)," ",_l((list),function(item){return _h('tr',[_h('td',{domProps:{"textContent":_s(item.id)}})," ",_h('td',{domProps:{"textContent":_s(item.name)}})])})])," ",_h('xcui-pagination',{directives:[{name:"show",rawName:"v-show",value:(total > 0),expression:"total > 0"}],attrs:{"current-page-num":currentPageNum,"total":total,"page-size":pageSize},on:{"go-to-page":goToPage}})])," ",_m(2)])])," ",_h('h2',["Props"])," ",_m(3)])}},
	      staticRenderFns: [function(){with(this){return _h('ul',[_h('li',["表格或其他需要分页的页面元素。"])," ",_h('li',["支持两种类型的页码： ",_h('code',["Standard"])," 标准页码, 一般用于元素顶部； ",_h('code',["Mini"])," 迷你页码，一般用于元素底部。"])])}},function(){with(this){return _h('thead',[_h('tr',[_h('th',["ID"])," ",_h('th',["Name"])])])}},function(){with(this){return _h('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_h('pre',["\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"div"])," ",_h('span',{staticClass:"token attr-name"},["class"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"row",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n     ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"div"])," ",_h('span',{staticClass:"token attr-name"},["class"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"col-md-12 text-right",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n         ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-pagination"]),"\r\n             ",_h('span',{staticClass:"token attr-name"},["v-show"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"total ",_h('span',{staticClass:"token punctuation"},[">"])," 0",_h('span',{staticClass:"token punctuation"},["\""])]),"\n             ",_h('span',{staticClass:"token attr-name"},["type"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"mini",_h('span',{staticClass:"token punctuation"},["\""])]),"\n             ",_h('span',{staticClass:"token attr-name"},["@go-to-page"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"goToPage",_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n             ",_h('span',{staticClass:"token attr-name"},[":current-page-num"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"currentPageNum",_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n             ",_h('span',{staticClass:"token attr-name"},[":total"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"total",_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n             ",_h('span',{staticClass:"token attr-name"},[":page-size"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"pageSize",_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n             ",_h('span',{staticClass:"token punctuation"},[">"])]),_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-pagination"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n     ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"div"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"div"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"table"])," ",_h('span',{staticClass:"token attr-name"},["class"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"table table-hover table-condensed",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n     ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"thead"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n         ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"tr"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n             ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"th"]),_h('span',{staticClass:"token punctuation"},[">"])]),"ID",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"th"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n             ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"th"]),_h('span',{staticClass:"token punctuation"},[">"])]),"Name",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"th"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n         ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"tr"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n     ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"thead"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n     ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"tr"])," ",_h('span',{staticClass:"token attr-name"},["v-for"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"item in list",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n         ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"td"])," ",_h('span',{staticClass:"token attr-name"},["v-text"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"item.id",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"td"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n         ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"td"])," ",_h('span',{staticClass:"token attr-name"},["v-text"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"item.name",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"td"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n     ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"tr"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"table"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-pagination"]),"\r\n     ",_h('span',{staticClass:"token attr-name"},["v-show"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"total ",_h('span',{staticClass:"token punctuation"},[">"])," 0",_h('span',{staticClass:"token punctuation"},["\""])]),"\n     ",_h('span',{staticClass:"token attr-name"},["@go-to-page"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"goToPage",_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n     ",_h('span',{staticClass:"token attr-name"},[":current-page-num"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"currentPageNum",_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n     ",_h('span',{staticClass:"token attr-name"},[":total"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"total",_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n     ",_h('span',{staticClass:"token attr-name"},[":page-size"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"pageSize",_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n     ",_h('span',{staticClass:"token punctuation"},[">"])]),_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-pagination"]),_h('span',{staticClass:"token punctuation"},[">"])])])])}},function(){with(this){return _h('table',{staticClass:"table"},[_h('thead',[_h('tr',[_h('th',["名字"])," ",_h('th',["类型"])," ",_h('th',["默认"])," ",_h('th',["描述"])," ",_h('th',["可选范围"])," ",_h('th',["是否必选"])])])," ",_h('tbody',[_h('tr',[_h('td',["type"])," ",_h('td',["String"])," ",_h('td',["standard"])," ",_h('td',["控制样式选择"])," ",_h('td',["standard,mini"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["currentPageNum"])," ",_h('td',["Number"])," ",_h('td',["1"])," ",_h('td',["当前页码"])," ",_h('td',["> 0"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["total"])," ",_h('td',["Number"])," ",_h('td',["0"])," ",_h('td',["总条数"])," ",_h('td',[">= 0"])," ",_h('td',["必选"])])," ",_h('tr',[_h('td',["pageSize"])," ",_h('td',["Number"])," ",_h('td',["20"])," ",_h('td',["每页条数"])," ",_h('td',["取自",_h('code',["pageSizeRange"])])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["withPageSize"])," ",_h('td',["Boolean"])," ",_h('td',["true"])," ",_h('td',["是否展示",_h('code',["pageSize"]),"设置挂件"])," ",_h('td')," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["pageSizeRange"])," ",_h('td',["Array"])," ",_h('td',["[10, 20, 50, 100]"])," ",_h('td',[_h('code',["pageSize"]),"设置挂件的下拉菜单选项范围 ",_h('code',["withPageSize"]),"为 true 时生效"])," ",_h('td')," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["rangeLength"])," ",_h('td',["Number"])," ",_h('td',["10"])," ",_h('td',["页码按钮的展示个数"])," ",_h('td',["> 1"])," ",_h('td',["可选"])])])])}}]
	    };
	  

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(190)

	/* script */
	__vue_exports__ = __webpack_require__(192)

	/* template */
	var __vue_template__ = __webpack_require__(193)
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
	__vue_options__.__file = "/Users/clancyz/Workspace/github/wmfe-xcui-2.0/xcui/src/demos/loading.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-1689e27c"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1689e27c", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-1689e27c", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] loading.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(191);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1689e27c&scoped=true!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./loading.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1689e27c&scoped=true!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./loading.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "\n.loadWrap[data-v-1689e27c] {\n  padding: 30px;\n  position: relative;\n}\np[data-v-1689e27c] {\n  text-align: left;\n  text-indent: 2em;\n}\n.btnGroup[data-v-1689e27c] {\n  margin-top: 15px;\n}\n.btnGroup label[data-v-1689e27c] {\n  width: 10%;\n  position: relative;\n  top: 5px;\n  text-align: right;\n}\nselect[data-v-1689e27c],\noption[data-v-1689e27c],\nbutton[data-v-1689e27c] {\n  outline: none;\n}\n", ""]);

	// exports


/***/ },
/* 192 */
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
/* 193 */
/***/ function(module, exports) {

	
	    module.exports = {
	      render: function(){with(this){return _h('div',[_h('h1',["Loading 加载组件"])," ",_h('h2',["使用场景"])," ",_h('p',["在ajax加载或其他长耗时操作时，在一个页面元素上加入加载中图标，当耗时操作完成后隐藏。"])," ",_h('h2',["组件能力"])," ",_m(0)," ",_h('div',{staticClass:"xcui-demo-container col-md-12 col-xs-12 col-lg-12"},[_h('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_h('h3',["加载组件"])," ",_h('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_h('div',{staticClass:"loadWrap"},[_h('p',["Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."])," ",_h('xcui-loading',{attrs:{"show":show,"type":type,"color":color,"size":size,"classname":classname}})])," ",_h('div',{staticClass:"btnGroup clearfix"},[_h('label',{staticClass:"control-label col-md-4"},["show："])," ",_h('div',{staticClass:"col-md-6"},[_h('button',{staticClass:"btn btn-primary",on:{"click":toogleShow}},[_s(showBtn)])])])," ",_h('div',{staticClass:"btnGroup clearfix"},[_h('label',{staticClass:"control-label col-md-4"},["type："])," ",_h('div',{staticClass:"col-md-6"},[_h('select',{directives:[{name:"model",rawName:"v-model",value:(type),expression:"type"}],staticClass:"form-control",on:{"change":function($event){type=Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val})[0]}}},[_h('option',["load1"])," ",_h('option',["load2"])," ",_h('option',["load3"])])])])," ",_h('div',{staticClass:"btnGroup clearfix"},[_h('label',{staticClass:"control-label col-md-4"},["size："])," ",_h('div',{staticClass:"col-md-6"},[_h('select',{directives:[{name:"model",rawName:"v-model",value:(size),expression:"size"}],staticClass:"form-control",on:{"change":function($event){size=Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val})[0]}}},[_h('option',["sm"])," ",_h('option',["md"])," ",_h('option',["lg"])])])])," ",_h('div',{staticClass:"btnGroup clearfix"},[_h('label',{staticClass:"control-label col-md-4"},["color："])," ",_h('div',{staticClass:"col-md-6"},[_h('input',{directives:[{name:"model",rawName:"v-model",value:(color),expression:"color"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"支持css颜色格式"},domProps:{"value":_s(color)},on:{"input":function($event){if($event.target.composing)return;color=$event.target.value}}})])])])," ",_m(1)])])," ",_h('h2',["Props"])," ",_m(2)])}},
	      staticRenderFns: [function(){with(this){return _h('ul',[_h('li',["提供3种css加载样式。"])," ",_h('li',["loading需要放在一个拥有定位属性的容器，组件蒙层大小为父元素大小。"])," ",_h('li',["css动画颜色可定制。"])," ",_h('li',["提供三种可选尺寸。"])," ",_h('li',["可通过自定义类名增加特殊定制。"])])}},function(){with(this){return _h('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_h('pre',["\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"div"])," ",_h('span',{staticClass:"token attr-name"},["class"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"loadWrap",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n     ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"p"]),_h('span',{staticClass:"token punctuation"},[">"])]),"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"p"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n     ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-loading"])," ",_h('span',{staticClass:"token attr-name"},[":show"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"show",_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n              ",_h('span',{staticClass:"token attr-name"},[":type"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"type",_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n              ",_h('span',{staticClass:"token attr-name"},[":color"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"color",_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n              ",_h('span',{staticClass:"token attr-name"},[":size"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"size",_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n              ",_h('span',{staticClass:"token attr-name"},[":classname"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"classname",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-loading"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"div"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n   ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"div"])," ",_h('span',{staticClass:"token attr-name"},["class"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"btnGroup clearfix",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n       ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"label"])," ",_h('span',{staticClass:"token attr-name"},["class"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"control-label col-md-4",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"show：",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"label"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n       ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"div"])," ",_h('span',{staticClass:"token attr-name"},["class"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"col-md-6",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n           ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"button"])," ",_h('span',{staticClass:"token attr-name"},["class"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"btn btn-primary",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["@click"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"toogleShow",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),_h('span',{staticClass:"token punctuation"},["{"]),_h('span',{staticClass:"token punctuation"},["{"]),"showBtn",_h('span',{staticClass:"token punctuation"},["}"]),_h('span',{staticClass:"token punctuation"},["}"]),_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"button"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n       ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"div"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n   ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"div"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n   ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"div"])," ",_h('span',{staticClass:"token attr-name"},["class"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"btnGroup clearfix",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n       ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"label"]),"  ",_h('span',{staticClass:"token attr-name"},["class"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"control-label col-md-4",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"type：",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"label"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n       ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"div"])," ",_h('span',{staticClass:"token attr-name"},["class"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"col-md-6",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n           ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"select"])," ",_h('span',{staticClass:"token attr-name"},["class"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"form-control",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["v-model"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"type",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n               ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"option"]),_h('span',{staticClass:"token punctuation"},[">"])]),"load1",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"option"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n               ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"option"]),_h('span',{staticClass:"token punctuation"},[">"])]),"load2",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"option"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n               ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"option"]),_h('span',{staticClass:"token punctuation"},[">"])]),"load3",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"option"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n           ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"select"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n       ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"div"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n   ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"div"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n   ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"div"])," ",_h('span',{staticClass:"token attr-name"},["class"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"btnGroup clearfix",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n       ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"label"]),"  ",_h('span',{staticClass:"token attr-name"},["class"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"control-label col-md-4",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"size：",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"label"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n       ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"div"])," ",_h('span',{staticClass:"token attr-name"},["class"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"col-md-6",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n           ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"select"])," ",_h('span',{staticClass:"token attr-name"},["class"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"form-control",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["v-model"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"size",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n               ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"option"]),_h('span',{staticClass:"token punctuation"},[">"])]),"sm",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"option"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n               ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"option"]),_h('span',{staticClass:"token punctuation"},[">"])]),"md",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"option"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n               ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"option"]),_h('span',{staticClass:"token punctuation"},[">"])]),"lg",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"option"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n           ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"select"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n       ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"div"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n   ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"div"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n   ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"div"])," ",_h('span',{staticClass:"token attr-name"},["class"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"btnGroup clearfix",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n       ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"label"])," ",_h('span',{staticClass:"token attr-name"},["class"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"control-label col-md-4",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"color：",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"label"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n       ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"div"])," ",_h('span',{staticClass:"token attr-name"},["class"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"col-md-6",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n           ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"input"])," ",_h('span',{staticClass:"token attr-name"},["class"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"form-control",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["type"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"text",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["v-model"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"color",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["placeholder"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"支持css颜色格式",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n       ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"div"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n   ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"div"]),_h('span',{staticClass:"token punctuation"},[">"])])])])}},function(){with(this){return _h('table',{staticClass:"table"},[_h('thead',[_h('tr',[_h('th',["名字"])," ",_h('th',["类型"])," ",_h('th',["默认"])," ",_h('th',["描述"])," ",_h('th',["可选范围"])," ",_h('th',["是否必选"])])])," ",_h('tbody',[_h('tr',[_h('td',["show"])," ",_h('td',["Boolean"])," ",_h('td',["false"])," ",_h('td',["控制显示隐藏"])," ",_h('td',["true/false"])," ",_h('td',["必选"])])," ",_h('tr',[_h('td',["type"])," ",_h('td',["String"])," ",_h('td',["load2"])," ",_h('td',["控制样式选择"])," ",_h('td',["load1-load3"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["size"])," ",_h('td',["String"])," ",_h('td',["md"])," ",_h('td',["控制大小"])," ",_h('td',["sm/md/lg"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["color"])," ",_h('td',["String"])," ",_h('td',["无"])," ",_h('td',["控制颜色"])," ",_h('td',["css色值"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["classname"])," ",_h('td',["String"])," ",_h('td',["无"])," ",_h('td',["自定义类名"])," ",_h('td')," ",_h('td',["可选"])])])])}}]
	    };
	  

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(195)

	/* script */
	__vue_exports__ = __webpack_require__(197)

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
	__vue_options__.__file = "/Users/clancyz/Workspace/github/wmfe-xcui-2.0/xcui/src/demos/popover.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-31bc8365", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-31bc8365", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] popover.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(196);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-31bc8365!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./popover.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-31bc8365!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./popover.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "\n.container{\n    margin-top:100px;\n}\n.define-class{\n    background:#ffab47;\n    color:#fff;\n    width: 100px;\n}\n.title-class{\n    background:#46c3c1;\n    color:#fff;\n    width: 150px;\n}\n.content-class{\n    width: 150px;\n}\n", ""]);

	// exports


/***/ },
/* 197 */
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
/* 198 */
/***/ function(module, exports) {

	
	    module.exports = {
	      render: function(){with(this){return _h('div',[_h('h1',["Popover 工具提示"])," ",_h('h2',["使用场景"])," ",_m(0)," ",_h('h2',["DEMO"])," ",_h('div',{staticClass:"xcui-demo-container col-md-12 col-xs-12 col-lg-12"},[_h('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_h('h3',["Popover"])," ",_h('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_h('xcui-popover',{attrs:{"effect":"fadein","placement":"bottom","title":"This is Title","trigger":"click","content":htmlContent}},[_h('button',{staticClass:"btn btn-default "},["Click Popover on bottom"])])," ",_h('xcui-popover',{attrs:{"effect":"scale","placement":"left","title":"This is Title","trigger":"click","content":"Popover on left"}},[_h('button',{staticClass:"btn btn-default "},["Click Popover on left"])])," ",_h('xcui-popover',{attrs:{"effect":"fadein","placement":"top","title":"This is Title","content":"Popover on top"}},[_h('button',{staticClass:"btn btn-default "},[" Hover Popover on top"])])," ",_h('xcui-popover',{attrs:{"effect":"scale","placement":"right","title":"This is Title","title-class":'title-class',"content-class":'content-class',"content":"Popover on right"}},[_h('button',{staticClass:"btn btn-default "},["Hover Popover on right"])])])," ",_m(1)])])," ",_h('h2',["Props"])," ",_m(2)])}},
	      staticRenderFns: [function(){with(this){return _h('ul',[_h('li',["需要hover或click时悬浮提示更多详情"])," ",_h('li',["支持自定义提示框样式"])," ",_h('li',["支持两种悬浮框过渡样式:  ",_h('code',["scale"])," 和 ",_h('code',["fadein"])])])}},function(){with(this){return _h('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_h('pre',["\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-popover"])," ",_h('span',{staticClass:"token attr-name"},["effect"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"fadein",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["placement"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"bottom",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["title"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"This is Title",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["trigger"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"click",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},[":content"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"htmlContent",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n   ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"button"])," ",_h('span',{staticClass:"token attr-name"},["class"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"btn btn-default ",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"Click Popover on bottom",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"button"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-popover"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-popover"])," ",_h('span',{staticClass:"token attr-name"},["effect"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"scale",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["placement"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"left",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["title"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"This is Title",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["trigger"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"click",_h('span',{staticClass:"token punctuation"},["\""])]),"  ",_h('span',{staticClass:"token attr-name"},["content"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"Popover on left",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n   ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"button"])," ",_h('span',{staticClass:"token attr-name"},["class"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"btn btn-default ",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"Click Popover on left",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"button"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-popover"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-popover"])," ",_h('span',{staticClass:"token attr-name"},["effect"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"fadein",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["placement"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"top",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["title"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"This is Title",_h('span',{staticClass:"token punctuation"},["\""])]),"  ",_h('span',{staticClass:"token attr-name"},["content"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"Popover on top",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n   ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"button"])," ",_h('span',{staticClass:"token attr-name"},["class"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"btn btn-default ",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])])," Hover Popover on top",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"button"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-popover"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-popover"])," ",_h('span',{staticClass:"token attr-name"},["effect"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"scale",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["placement"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"right",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["title"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"This is Title",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},[":title-class"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),_h('span',{staticClass:"token punctuation"},["'"]),"title-class",_h('span',{staticClass:"token punctuation"},["'"]),_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},[":content-class"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),_h('span',{staticClass:"token punctuation"},["'"]),"content-class",_h('span',{staticClass:"token punctuation"},["'"]),_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["content"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"Popover on right",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n   ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"button"])," ",_h('span',{staticClass:"token attr-name"},["class"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"btn btn-default ",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"Hover Popover on right",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"button"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-popover"]),_h('span',{staticClass:"token punctuation"},[">"])])])])}},function(){with(this){return _h('table',{staticClass:"table"},[_h('thead',[_h('tr',[_h('th',["名字"])," ",_h('th',["类型"])," ",_h('th',["默认"])," ",_h('th',["描述"])," ",_h('th',["是否必选"])])])," ",_h('tbody',[_h('tr',[_h('td',["type"])," ",_h('td',["String"])," ",_h('td',["popover"])," ",_h('td',["提示类型"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["trigger"])," ",_h('td',["String"])," ",_h('td',["hover"])," ",_h('td',["悬浮触发方式"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["effect"])," ",_h('td',["String"])," ",_h('td',["scale"])," ",_h('td',["悬浮过渡样式"])," ",_h('td',["可选, scale/fadein"])])," ",_h('tr',[_h('td',["placement"])," ",_h('td',["String"])," ",_h('td',["空字符串"])," ",_h('td',["悬浮相对位置"])," ",_h('td',["必选"])])," ",_h('tr',[_h('td',["title"])," ",_h('td',["String"])," ",_h('td',["空字符串"])," ",_h('td',["popover提示标题"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["content"])," ",_h('td',["String"])," ",_h('td',["空字符串"])," ",_h('td',["提示内容"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["classname"])," ",_h('td',["String"])," ",_h('td',["空字符串"])," ",_h('td',["自定义样式"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["tooltip-class"])," ",_h('td',["String"])," ",_h('td',["Object"])," ",_h('td',["tootip提示框样式"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["title-class"])," ",_h('td',["Object"])," ",_h('td',["Object"])," ",_h('td',["popover标题样式"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["content-class"])," ",_h('td',["Object"])," ",_h('td',["Object"])," ",_h('td',["popover内容样式"])," ",_h('td',["可选"])])])])}}]
	    };
	  

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(200)

	/* script */
	__vue_exports__ = __webpack_require__(202)

	/* template */
	var __vue_template__ = __webpack_require__(203)
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
	__vue_options__.__file = "/Users/clancyz/Workspace/github/wmfe-xcui-2.0/xcui/src/demos/tooltip.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-565215c3", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-565215c3", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] tooltip.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(201);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-565215c3!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tooltip.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-565215c3!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tooltip.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "\n.container{\n    margin-top:100px;\n}\n.define-class{\n    background:#ffab47;\n    color:#fff;\n    width: 100px;\n}\n.title-class{\n    background:#46c3c1;\n    color:#fff;\n    width: 150px;\n}\n.content-class{\n    width: 150px;\n}\n", ""]);

	// exports


/***/ },
/* 202 */
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
/* 203 */
/***/ function(module, exports) {

	
	    module.exports = {
	      render: function(){with(this){return _h('div',[_h('h1',["Tooltip 工具提示"])," ",_h('h2',["使用场景"])," ",_m(0)," ",_h('h2',["DEMO"])," ",_h('div',{staticClass:"xcui-demo-container col-md-12 col-xs-12 col-lg-12"},[_h('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_h('h3',["Popover"])," ",_h('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_h('xcui-tooltip',{attrs:{"effect":"fadein","placement":"bottom","title":"This is Title","content":htmlContent}},[_h('button',{staticClass:"btn btn-default "},["Hover tooltip on bottom"])])," ",_h('xcui-tooltip',{attrs:{"effect":"scale","placement":"left","title":"This is Title","content":"Tooltip on left"}},[_h('button',{staticClass:"btn btn-default "},["Hover tooltip on left"])])," ",_h('xcui-tooltip',{attrs:{"effect":"fadein","placement":"top","title":"This is Title","trigger":"click","content":"Tooltip on top"}},[_h('button',{staticClass:"btn btn-default "},[" Click tooltip on top"])])," ",_h('xcui-tooltip',{attrs:{"effect":"scale","placement":"right","title":"This is Title","trigger":"click","title-class":'title-class',"content-class":'content-class',"content":"Tooltip on right"}},[_h('button',{staticClass:"btn btn-default "},["Click tooltip on right"])])])," ",_m(1)])])," ",_h('h2',["Props"])," ",_m(2)])}},
	      staticRenderFns: [function(){with(this){return _h('ul',[_h('li',["需要hover或click时悬浮提示更多详情"])," ",_h('li',["支持自定义提示框样式"])," ",_h('li',["支持两种悬浮框过渡样式:  ",_h('code',["scale"])," 和 ",_h('code',["fadein"])])])}},function(){with(this){return _h('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_h('pre',["\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-tooltip"])," ",_h('span',{staticClass:"token attr-name"},["effect"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"fadein",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["placement"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"bottom",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["title"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"This is Title",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},[":content"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"htmlContent",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n   ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"button"])," ",_h('span',{staticClass:"token attr-name"},["class"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"btn btn-default ",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"Hover tooltip on bottom",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"button"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-tooltip"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-tooltip"])," ",_h('span',{staticClass:"token attr-name"},["effect"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"scale",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["placement"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"left",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["title"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"This is Title",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["content"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"Tooltip on left",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n   ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"button"])," ",_h('span',{staticClass:"token attr-name"},["class"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"btn btn-default ",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"Hover tooltip on left",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"button"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-tooltip"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-tooltip"])," ",_h('span',{staticClass:"token attr-name"},["effect"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"fadein",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["placement"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"top",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["title"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"This is Title",_h('span',{staticClass:"token punctuation"},["\""])]),"  ",_h('span',{staticClass:"token attr-name"},["trigger"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"click",_h('span',{staticClass:"token punctuation"},["\""])]),"  ",_h('span',{staticClass:"token attr-name"},["content"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"Tooltip on top",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n   ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"button"])," ",_h('span',{staticClass:"token attr-name"},["class"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"btn btn-default ",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])])," Click tooltip on top",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"button"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-tooltip"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-tooltip"])," ",_h('span',{staticClass:"token attr-name"},["effect"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"scale",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["placement"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"right",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["title"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"This is Title",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["trigger"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"click",_h('span',{staticClass:"token punctuation"},["\""])]),"  ",_h('span',{staticClass:"token attr-name"},[":title-class"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),_h('span',{staticClass:"token punctuation"},["'"]),"title-class",_h('span',{staticClass:"token punctuation"},["'"]),_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},[":content-class"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),_h('span',{staticClass:"token punctuation"},["'"]),"content-class",_h('span',{staticClass:"token punctuation"},["'"]),_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["content"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"Tooltip on right",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n   ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"button"])," ",_h('span',{staticClass:"token attr-name"},["class"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"btn btn-default ",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"Click tooltip on right",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"button"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-tooltip"]),_h('span',{staticClass:"token punctuation"},[">"])])])])}},function(){with(this){return _h('table',{staticClass:"table"},[_h('thead',[_h('tr',[_h('th',["名字"])," ",_h('th',["类型"])," ",_h('th',["默认"])," ",_h('th',["描述"])," ",_h('th',["是否必选"])])])," ",_h('tbody',[_h('tr',[_h('td',["type"])," ",_h('td',["String"])," ",_h('td',["popover"])," ",_h('td',["提示类型"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["trigger"])," ",_h('td',["String"])," ",_h('td',["hover"])," ",_h('td',["悬浮触发方式"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["effect"])," ",_h('td',["String"])," ",_h('td',["scale"])," ",_h('td',["悬浮过渡样式"])," ",_h('td',["可选, scale/fadein"])])," ",_h('tr',[_h('td',["placement"])," ",_h('td',["String"])," ",_h('td',["空字符串"])," ",_h('td',["悬浮相对位置"])," ",_h('td',["必选"])])," ",_h('tr',[_h('td',["title"])," ",_h('td',["String"])," ",_h('td',["空字符串"])," ",_h('td',["popover提示标题"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["content"])," ",_h('td',["String"])," ",_h('td',["空字符串"])," ",_h('td',["提示内容"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["classname"])," ",_h('td',["String"])," ",_h('td',["空字符串"])," ",_h('td',["自定义样式"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["tooltip-class"])," ",_h('td',["String"])," ",_h('td',["Object"])," ",_h('td',["tootip提示框样式"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["title-class"])," ",_h('td',["Object"])," ",_h('td',["Object"])," ",_h('td',["popover标题样式"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["content-class"])," ",_h('td',["Object"])," ",_h('td',["Object"])," ",_h('td',["popover内容样式"])," ",_h('td',["可选"])])])])}}]
	    };
	  

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(205)

	/* script */
	__vue_exports__ = __webpack_require__(207)

	/* template */
	var __vue_template__ = __webpack_require__(208)
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
	__vue_options__.__file = "/Users/clancyz/Workspace/github/wmfe-xcui-2.0/xcui/src/demos/suggestion.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-08096cf4"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-08096cf4", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-08096cf4", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] suggestion.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(206);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-08096cf4&scoped=true!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./suggestion.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-08096cf4&scoped=true!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./suggestion.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "\n.block-item[data-v-08096cf4] {\n  margin: 0 30px 50px;\n  float: left;\n}\n", ""]);

	// exports


/***/ },
/* 207 */
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
/* 208 */
/***/ function(module, exports) {

	
	    module.exports = {
	      render: function(){with(this){return _h('div',[_h('h1',["Suggestion 自动完成/建议"])," ",_h('h2',["使用场景"])," ",_h('p',["用户输入相关词语时进行输入建议(suggestions), 自动完成"])," ",_h('h1',["Demo"])," ",_h('div',{staticClass:"xcui-demo-container col-md-12 col-xs-12 col-lg-12"},[_h('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_h('h3',["string数组 sugs:"])," ",_h('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_h('div',["constellation : "+_s(constellation)])," ",_h('div',{staticStyle:{"width":"200px"}},[_h('xcui-suggestion',{directives:[{name:"model",rawName:"v-model",value:(constellation),expression:"constellation"}],attrs:{"id":"constellation","name":"constellation","placeholder":"请输入星座","suggestions":constellationSuggestions},domProps:{"value":(constellation)},on:{"input":function($event){constellation=$event}}})])])," ",_m(0)])," ",_h('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_h('h3',["object数组 sugs:"])," ",_h('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_h('div',["city: "+_s(city)])," ",_h('div',{staticStyle:{"width":"200px"}},[_h('xcui-suggestion',{directives:[{name:"model",rawName:"v-model",value:(city),expression:"city"}],attrs:{"id":"city","name":"city","placeholder":"请输入城市","suggestions":citySuggestions},domProps:{"value":(city)},on:{"input":function($event){city=$event}}})])])," ",_m(1)])," ",_h('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_h('h3',["远程sug，string数组 sugs:"])," ",_h('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_h('div',["requestWord: "+_s(requestWord)])," ",_h('div',{staticStyle:{"width":"200px"}},[_h('xcui-suggestion',{directives:[{name:"model",rawName:"v-model",value:(requestWord),expression:"requestWord"}],attrs:{"placeholder":"","check":false,"suggestions":remoteSug,"input-callback":request},domProps:{"value":(requestWord)},on:{"input":function($event){requestWord=$event}}},[">\r\n      "])])])," ",_m(2)])," ",_h('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_h('h3',["远程sug，object数组 sugs:"])," ",_h('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_h('div',["requestWord2: "+_s(requestWord2)])," ",_h('div',{staticStyle:{"width":"200px"}},[_h('xcui-suggestion',{directives:[{name:"model",rawName:"v-model",value:(requestWord2),expression:"requestWord2"}],attrs:{"placeholder":"","check":false,"suggestions":remoteSug2,"input-callback":request2},domProps:{"value":(requestWord2)},on:{"input":function($event){requestWord2=$event}}})])])," ",_m(3)])])," ",_h('h2',["数据格式支持"])," ",_m(4)," ",_m(5)," ",_m(6)," ",_m(7)," ",_m(8)," ",_h('h2',["参数说明"])," ",_m(9)])}},
	      staticRenderFns: [function(){with(this){return _h('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_h('pre',["\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"div"]),_h('span',{staticClass:"token punctuation"},[">"])]),"constellation : ",_h('span',{staticClass:"token punctuation"},["{"]),_h('span',{staticClass:"token punctuation"},["{"]),"constellation",_h('span',{staticClass:"token punctuation"},["}"]),_h('span',{staticClass:"token punctuation"},["}"]),_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"div"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"div"]),_h('span',{staticClass:"token style-attr language-css"},[_h('span',{staticClass:"token attr-name"},[" ",_h('span',{staticClass:"token attr-name"},["style"])]),_h('span',{staticClass:"token punctuation"},["=\""]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token property"},["width"]),_h('span',{staticClass:"token punctuation"},[":"]),"200px"]),_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n   ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-suggestion"]),"\r\n     ",_h('span',{staticClass:"token attr-name"},["v-model"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"constellation",_h('span',{staticClass:"token punctuation"},["\""])]),"\n     ",_h('span',{staticClass:"token attr-name"},["id"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"constellation",_h('span',{staticClass:"token punctuation"},["\""])]),"\n     ",_h('span',{staticClass:"token attr-name"},["name"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"constellation",_h('span',{staticClass:"token punctuation"},["\""])]),"\n     ",_h('span',{staticClass:"token attr-name"},["placeholder"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"请输入星座",_h('span',{staticClass:"token punctuation"},["\""])]),"\n     ",_h('span',{staticClass:"token attr-name"},[":suggestions"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"constellationSuggestions",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n   ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-suggestion"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"div"]),_h('span',{staticClass:"token punctuation"},[">"])])])])}},function(){with(this){return _h('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_h('pre',["\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"div"]),_h('span',{staticClass:"token punctuation"},[">"])]),"city: ",_h('span',{staticClass:"token punctuation"},["{"]),_h('span',{staticClass:"token punctuation"},["{"]),"city",_h('span',{staticClass:"token punctuation"},["}"]),_h('span',{staticClass:"token punctuation"},["}"]),_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"div"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"div"]),_h('span',{staticClass:"token style-attr language-css"},[_h('span',{staticClass:"token attr-name"},[" ",_h('span',{staticClass:"token attr-name"},["style"])]),_h('span',{staticClass:"token punctuation"},["=\""]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token property"},["width"]),_h('span',{staticClass:"token punctuation"},[":"]),"200px"]),_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n     ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-suggestion"])," ",_h('span',{staticClass:"token attr-name"},["v-model"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"city",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["id"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"city",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["name"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"city",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["placeholder"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"请输入城市",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},[":suggestions"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"citySuggestions",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n     ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-suggestion"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"div"]),_h('span',{staticClass:"token punctuation"},[">"])])])])}},function(){with(this){return _h('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_h('pre',["\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"div"]),_h('span',{staticClass:"token punctuation"},[">"])]),"requestWord: ",_h('span',{staticClass:"token punctuation"},["{"]),_h('span',{staticClass:"token punctuation"},["{"]),"requestWord",_h('span',{staticClass:"token punctuation"},["}"]),_h('span',{staticClass:"token punctuation"},["}"]),_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"div"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"div"]),_h('span',{staticClass:"token style-attr language-css"},[_h('span',{staticClass:"token attr-name"},[" ",_h('span',{staticClass:"token attr-name"},["style"])]),_h('span',{staticClass:"token punctuation"},["=\""]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token property"},["width"]),_h('span',{staticClass:"token punctuation"},[":"]),"200px"]),_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n     ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-suggestion"])," ",_h('span',{staticClass:"token attr-name"},["placeholder"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n                 ",_h('span',{staticClass:"token attr-name"},[":check"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),"false"]),"\r\n                 ",_h('span',{staticClass:"token attr-name"},["v-model"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"requestWord",_h('span',{staticClass:"token punctuation"},["\""])]),"\n                 ",_h('span',{staticClass:"token attr-name"},[":suggestions"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"remoteSug",_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n                 ",_h('span',{staticClass:"token attr-name"},[":input-callback"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"request",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),">\r\n     ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-suggestion"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"div"]),_h('span',{staticClass:"token punctuation"},[">"])])])])}},function(){with(this){return _h('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_h('pre',["\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"div"]),_h('span',{staticClass:"token punctuation"},[">"])]),"requestWord2: ",_h('span',{staticClass:"token punctuation"},["{"]),_h('span',{staticClass:"token punctuation"},["{"]),"requestWord2",_h('span',{staticClass:"token punctuation"},["}"]),_h('span',{staticClass:"token punctuation"},["}"]),_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"div"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"div"]),_h('span',{staticClass:"token style-attr language-css"},[_h('span',{staticClass:"token attr-name"},[" ",_h('span',{staticClass:"token attr-name"},["style"])]),_h('span',{staticClass:"token punctuation"},["=\""]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token property"},["width"]),_h('span',{staticClass:"token punctuation"},[":"]),"200px"]),_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n         ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-suggestion"])," ",_h('span',{staticClass:"token attr-name"},["placeholder"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n             ",_h('span',{staticClass:"token attr-name"},[":check"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),"false"]),"\r\n             ",_h('span',{staticClass:"token attr-name"},["v-model"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"requestWord2",_h('span',{staticClass:"token punctuation"},["\""])]),"\n             ",_h('span',{staticClass:"token attr-name"},[":suggestions"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"remoteSug2",_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n             ",_h('span',{staticClass:"token attr-name"},[":input-callback"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"request2",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n         ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-suggestion"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"div"]),_h('span',{staticClass:"token punctuation"},[">"])])])])}},function(){with(this){return _h('p',["组件支持两种",_h('code',["数据格式"]),"："])}},function(){with(this){return _h('ul',[_h('li',["Object:"])])}},function(){with(this){return _h('pre',[_h('span',{staticClass:"token punctuation"},["["]),_h('span',{staticClass:"token punctuation"},["{"]),"\n    text",_h('span',{staticClass:"token punctuation"},[":"]),_h('span',{staticClass:"token string"},["\"北京\""]),_h('span',{staticClass:"token punctuation"},[","]),"\n    value",_h('span',{staticClass:"token punctuation"},[":"]),_h('span',{staticClass:"token string"},["\"103\""]),"\n",_h('span',{staticClass:"token punctuation"},["}"]),_h('span',{staticClass:"token punctuation"},[","]),_h('span',{staticClass:"token punctuation"},["{"]),"\n    text",_h('span',{staticClass:"token punctuation"},[":"]),_h('span',{staticClass:"token string"},["\"上海\""]),_h('span',{staticClass:"token punctuation"},[","]),"\n    value",_h('span',{staticClass:"token punctuation"},[":"]),_h('span',{staticClass:"token string"},["\"131\""]),"\n",_h('span',{staticClass:"token punctuation"},["}"]),_h('span',{staticClass:"token punctuation"},[","]),"\n    ……\n",_h('span',{staticClass:"token punctuation"},["]"]),"\n"])}},function(){with(this){return _h('ul',[_h('li',["Array:"])])}},function(){with(this){return _h('pre',[_h('span',{staticClass:"token punctuation"},["["]),_h('span',{staticClass:"token string"},["\"北京\""]),_h('span',{staticClass:"token punctuation"},[","]),_h('span',{staticClass:"token string"},["\"上海\""]),_h('span',{staticClass:"token punctuation"},[","]),"……",_h('span',{staticClass:"token punctuation"},["]"]),"\n"])}},function(){with(this){return _h('table',{staticClass:"table"},[_h('thead',[_h('tr',[_h('th',["参数"])," ",_h('th',["类型"])," ",_h('th',["双向"])," ",_h('th',["说明"])])])," ",_h('tbody',[_h('tr',[_h('td',["id"])," ",_h('td',["String"])," ",_h('td')," ",_h('td',["input的id"])])," ",_h('tr',[_h('td',["name"])," ",_h('td',["String"])," ",_h('td')," ",_h('td',["input的name属性"])])," ",_h('tr',[_h('td',["className"])," ",_h('td',["String"])," ",_h('td')," ",_h('td',["类名"])])," ",_h('tr',[_h('td',["disabled"])," ",_h('td',["Boolean"])," ",_h('td')," ",_h('td',["input的disabled属性"])])," ",_h('tr',[_h('td',["placeholder"])," ",_h('td',["String"])," ",_h('td')," ",_h('td',["input提示"])])," ",_h('tr',[_h('td',["v-model"])," ",_h('td',["Object"])," ",_h('td',["是"])," ",_h('td',["双向绑定，输出如下格式：{text:[String], value:[String]}"])])," ",_h('tr',[_h('td',["suggestions"])," ",_h('td',["Array"])," ",_h('td')," ",_h('td',["sug list"])])," ",_h('tr',[_h('td',["check"])," ",_h('td',["Boolean@default:false"])," ",_h('td')," ",_h('td',["是否要做sug匹配，如果想用本组件实现远程sug，设为false"])])," ",_h('tr',[_h('td',["inputCallback"])," ",_h('td',["Function"])," ",_h('td')," ",_h('td',["input事件回调，可以本时机触发远程sug异步请求"])])])])}}]
	    };
	  

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(210)

	/* script */
	__vue_exports__ = __webpack_require__(212)

	/* template */
	var __vue_template__ = __webpack_require__(213)
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
	__vue_options__.__file = "/Users/clancyz/Workspace/github/wmfe-xcui-2.0/xcui/src/demos/tag.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-40b8f5da", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-40b8f5da", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] tag.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(211);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-40b8f5da!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tag.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-40b8f5da!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tag.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "\n.define-class{\n    background:#ffab47;\n    color:#fff;\n    border-radius: 6px;\n}\n.define-class:hover{\n    background:red;\n}\n", ""]);

	// exports


/***/ },
/* 212 */
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
/* 213 */
/***/ function(module, exports) {

	
	    module.exports = {
	      render: function(){with(this){return _h('div',[_h('h1',["Tag标签"])," ",_h('h2',["使用场景"])," ",_m(0)," ",_h('h2',["DEMO"])," ",_h('div',{staticClass:"xcui-demo-container col-md-12 col-xs-12 col-lg-12"},[_h('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_h('h3',["基本使用"])," ",_h('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_h('xcui-tag',{attrs:{"text":'标签'}})," ",_h('xcui-tag',{attrs:{"disabled":true,"text":'禁用标签'}})," ",_h('xcui-tag',{attrs:{"closeable":true,"text":'关闭'},on:{"close":closeclick}})," ",_h('xcui-tag',{attrs:{"closeable":true,"keys":key,"text":'点击不关闭',"aftercloseisshow":afterCloseIsShowTag},on:{"close":closeclick,"click":click}})," ",_h('xcui-tag',{class:'define-class',attrs:{"text":'自定义样式'},on:{"click":click}})])," ",_m(1)])," ",_h('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_h('h3',["添加标签"])," ",_h('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_l((tags),function(item){return _h('span',[_h('xcui-tag',{attrs:{"closeable":true,"text":item.text}})])})," ",_h('input',{staticClass:"btn btn-primary",attrs:{"type":"button","value":"添加"},on:{"click":addTag}})])," ",_m(2)])])," ",_h('h2',["Props"])," ",_m(3)])}},
	      staticRenderFns: [function(){with(this){return _h('ul',[_h('li',["标记事物的属性、分类等特性"])," ",_h('li',["支持关闭标签、点击标签"])," ",_h('li',["支持禁用标签"])," ",_h('li',["支持自定义标签样式"])])}},function(){with(this){return _h('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_h('pre',["\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-tag"])," ",_h('span',{staticClass:"token attr-name"},[":text"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),_h('span',{staticClass:"token punctuation"},["'"]),"标签",_h('span',{staticClass:"token punctuation"},["'"]),_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-tag"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-tag"])," ",_h('span',{staticClass:"token attr-name"},[":disabled"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"true",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},[":text"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),_h('span',{staticClass:"token punctuation"},["'"]),"禁用标签",_h('span',{staticClass:"token punctuation"},["'"]),_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-tag"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-tag"])," ",_h('span',{staticClass:"token attr-name"},[":closeable"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"true",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},[":text"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),_h('span',{staticClass:"token punctuation"},["'"]),"关闭",_h('span',{staticClass:"token punctuation"},["'"]),_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["@close"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"closeclick",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-tag"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-tag"])," ",_h('span',{staticClass:"token attr-name"},[":closeable"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"true",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["@close"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"closeclick",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},[":keys.sync"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"key",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},[":text"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),_h('span',{staticClass:"token punctuation"},["'"]),"点击不关闭",_h('span',{staticClass:"token punctuation"},["'"]),_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},[":aftercloseisshow.sync"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"afterCloseIsShowTag",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["@click"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"click",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-tag"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-tag"])," ",_h('span',{staticClass:"token attr-name"},[":class"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),_h('span',{staticClass:"token punctuation"},["'"]),"define-class",_h('span',{staticClass:"token punctuation"},["'"]),_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},[":text"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),_h('span',{staticClass:"token punctuation"},["'"]),"自定义样式",_h('span',{staticClass:"token punctuation"},["'"]),_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["@click"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"click",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-tag"]),_h('span',{staticClass:"token punctuation"},[">"])])])])}},function(){with(this){return _h('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_h('pre',["\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"span"])," ",_h('span',{staticClass:"token attr-name"},["v-for"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"item in tags",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n     ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-tag"])," ",_h('span',{staticClass:"token attr-name"},[":closeable"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"true",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},[":text"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"item.text",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-tag"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"span"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"input"])," ",_h('span',{staticClass:"token attr-name"},["type"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"button",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["class"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"btn btn-primary",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["value"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"添加",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["@click"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"addTag",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},["/>"])])])])}},function(){with(this){return _h('table',{staticClass:"table"},[_h('thead',[_h('tr',[_h('th',["名字"])," ",_h('th',["类型"])," ",_h('th',["默认"])," ",_h('th',["描述"])," ",_h('th',["是否必选"])])])," ",_h('tbody',[_h('tr',[_h('td',["text"])," ",_h('td',["String"])," ",_h('td',["空字符串"])," ",_h('td',["内容"])," ",_h('td',["必选"])])," ",_h('tr',[_h('td',["disabled"])," ",_h('td',["Boolean"])," ",_h('td',["false"])," ",_h('td',["是否禁用"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["closeable"])," ",_h('td',["Boolean"])," ",_h('td',["false"])," ",_h('td',["是否可关闭"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["close"])," ",_h('td',["function"])," ",_h('td',["无"])," ",_h('td',["关闭时回调"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["click"])," ",_h('td',["function"])," ",_h('td',["无"])," ",_h('td',["点击标签事件"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["showTag"])," ",_h('td',["Boolean"])," ",_h('td',["true"])," ",_h('td',["是否展示tag"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["aftercloseisshow"])," ",_h('td',["Boolean"])," ",_h('td',["false"])," ",_h('td',["关闭回调后是否展示Tag"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["key"])," ",_h('td',["String"])," ",_h('td',["空字符串"])," ",_h('td',["存储数据"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["class"])," ",_h('td',["String"])," ",_h('td',["空字符串"])," ",_h('td',["自定义样式"])," ",_h('td',["可选"])])])])}}]
	    };
	  

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(215)

	/* script */
	__vue_exports__ = __webpack_require__(217)

	/* template */
	var __vue_template__ = __webpack_require__(218)
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
	__vue_options__.__file = "/Users/clancyz/Workspace/github/wmfe-xcui-2.0/xcui/src/demos/datepicker.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-e8f3f6a8", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-e8f3f6a8", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] datepicker.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(216);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-e8f3f6a8!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./datepicker.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-e8f3f6a8!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./datepicker.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "\np {\n  padding-left: 30px;\n  font-size: 14px;\n  color: #666;\n}\n.class-name {\n  width: 200px;\n}\n", ""]);

	// exports


/***/ },
/* 217 */
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
/* 218 */
/***/ function(module, exports) {

	
	    module.exports = {
	      render: function(){with(this){return _h('div',[_h('h1',["datepicker 日期选择框"])," ",_h('h2',["使用场景"])," ",_m(0)," ",_h('h1',["DEMO"])," ",_h('div',{staticClass:"xcui-demo-container col-md-12 col-xs-12 col-lg-12"},[_h('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_h('h3',["simple"])," ",_h('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_h('xcui-datepicker',{directives:[{name:"model",rawName:"v-model",value:(valueDemo),expression:"valueDemo"}],domProps:{"value":(valueDemo)},on:{"input":function($event){valueDemo=$event}}})])," ",_m(1)])," ",_h('p',[" 最简单的用法，value双向绑定，日期"])," ",_h('p',[" value：可以传不同日期格式，例如：date对象 new Date()，日期字符串 2018-09-09，时间搓 1477980169262，也可以不传，默认当天，dateValue值为 时间戳1477980088896"])," ",_h('p',["Value值改变时会触发mutate事件。参数为[val, oldVal]，对应新日期和老日期"])," ",_h('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_h('h3',["日期格式"])," ",_h('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_h('xcui-datepicker',{directives:[{name:"model",rawName:"v-model",value:(dateValue),expression:"dateValue"}],attrs:{"format":"YYYY-MM-DD","min-date":'2016-01-01',"max-date":'2017-11-10'},domProps:{"value":(dateValue)},on:{"input":function($event){dateValue=$event}}})])," ",_m(2)])," ",_h('p',[" format：展示的日期格式，配置例如，分隔符可自选：年-月-日 YYYY-MM-DD，年/月/日 时：分：秒 YYYY/MM/DD hh:mm:ss， 时:分:秒 hh:mm:ss"])," ",_h('p',[" min-date：日期可选最小值，值类型同value"])," ",_h('p',[" max-date：日期可选最大值，值类型同value"])," ",_h('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_h('h3',["日期+时间选择"])," ",_h('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_h('xcui-datepicker',{directives:[{name:"model",rawName:"v-model",value:(datetimeVal1),expression:"datetimeVal1"}],attrs:{"format":"YYYY/MM/DD hh:mm:ss","hour-range":'1',"minute-range":'1',"second-range":'1',"min-date":datetime.begin,"max-date":datetime.end},domProps:{"value":(datetimeVal1)},on:{"input":function($event){datetimeVal1=$event}}})])," ",_m(3)])," ",_h('p',[" hour-range：小时可选值设置（例如：值为 3 时，小时可选值为0, 3，6，9，12"])," ",_h('p',[" minute-range：分钟可选值设置，同上"])," ",_h('p',[" second-range：分钟可选值设置，同上"])," ",_h('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_h('h3',["样式以及回调配置"])," ",_h('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_h('xcui-datepicker',{directives:[{name:"model",rawName:"v-model",value:(datetime.value2),expression:"datetime.value2"}],attrs:{"class-name":"class-name","color":"pink","format":"YYYY-MM-DD hh:mm:ss","btn-show":true,"hour-range":'3'},domProps:{"value":(datetime.value2)},on:{"on-change":onChange,"input":function($event){datetime.value2=$event}}})])," ",_m(4)])," ",_h('p',[" class-name：日历样式，class名字"])," ",_h('p',[" color：按钮颜色，值为颜色值，例如：#f00,pink"])," ",_h('p',[" on-change：选择日期后的回调，参数 val(当前值) oldval(上次值)，onChange(val, oldVal) {}"])," ",_h('p',[" btn-show: 按钮是否显示"])," ",_h('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_h('h3',["时间选择"])," ",_h('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_h('xcui-datepicker',{directives:[{name:"model",rawName:"v-model",value:(timeValue),expression:"timeValue"}],attrs:{"format":"hh:mm:ss"},domProps:{"value":(timeValue)},on:{"input":function($event){timeValue=$event}}})])," ",_m(5)])," ",_h('p',[" 最简单的时间用法"])])," ",_h('h2',["组件依赖"])," ",_h('blockquote',[_h('p',["无"])])," ",_h('h2',["Props"])," ",_m(6)])}},
	      staticRenderFns: [function(){with(this){return _h('ul',[_h('li',["支持日历筛选，日历＋时间，时间筛选"])," ",_h('li',["可以配置日期的筛选范围，日期格式"])," ",_h('li',["对于时间的筛选，可以倍数形式定制筛选时间的值，例如分钟可以订制筛选值为15，30，45，60"])," ",_h('li',["可以直接获取当前的时间"])," ",_h('li',["年筛选可以直接输入，可以筛选"])," ",_h('li',["支持定制皮肤颜色"])])}},function(){with(this){return _h('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_h('pre',["\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-datepicker"])," ",_h('span',{staticClass:"token attr-name"},["v-model"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"valueDemo",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-datepicker"]),_h('span',{staticClass:"token punctuation"},[">"])])])])}},function(){with(this){return _h('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_h('pre',["\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-datepicker"]),"\r\n     ",_h('span',{staticClass:"token attr-name"},["v-model"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"dateValue",_h('span',{staticClass:"token punctuation"},["\""])]),"\n     ",_h('span',{staticClass:"token attr-name"},["format"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"YYYY-MM-DD",_h('span',{staticClass:"token punctuation"},["\""])]),"\n     ",_h('span',{staticClass:"token attr-name"},[":min-date"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),_h('span',{staticClass:"token punctuation"},["'"]),"2016-01-01",_h('span',{staticClass:"token punctuation"},["'"]),_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n     ",_h('span',{staticClass:"token attr-name"},[":max-date"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),_h('span',{staticClass:"token punctuation"},["'"]),"2017-11-10",_h('span',{staticClass:"token punctuation"},["'"]),_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-datepicker"]),_h('span',{staticClass:"token punctuation"},[">"])])])])}},function(){with(this){return _h('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_h('pre',["\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-datepicker"]),"\r\n     ",_h('span',{staticClass:"token attr-name"},["v-model"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"datetimeVal1",_h('span',{staticClass:"token punctuation"},["\""])]),"\n     ",_h('span',{staticClass:"token attr-name"},["format"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"YYYY/MM/DD hh:mm:ss",_h('span',{staticClass:"token punctuation"},["\""])]),"\n     ",_h('span',{staticClass:"token attr-name"},[":hour-range"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),_h('span',{staticClass:"token punctuation"},["'"]),"1",_h('span',{staticClass:"token punctuation"},["'"]),_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n     ",_h('span',{staticClass:"token attr-name"},[":minute-range"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),_h('span',{staticClass:"token punctuation"},["'"]),"1",_h('span',{staticClass:"token punctuation"},["'"]),_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n     ",_h('span',{staticClass:"token attr-name"},[":second-range"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),_h('span',{staticClass:"token punctuation"},["'"]),"1",_h('span',{staticClass:"token punctuation"},["'"]),_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n     ",_h('span',{staticClass:"token attr-name"},[":min-date"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"datetime.begin",_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n     ",_h('span',{staticClass:"token attr-name"},[":max-date"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"datetime.end",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-datepicker"]),_h('span',{staticClass:"token punctuation"},[">"])])])])}},function(){with(this){return _h('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_h('pre',["\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-datepicker"]),"\r\n     ",_h('span',{staticClass:"token attr-name"},["class-name"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"class-name",_h('span',{staticClass:"token punctuation"},["\""])]),"\n     ",_h('span',{staticClass:"token attr-name"},["color"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"pink",_h('span',{staticClass:"token punctuation"},["\""])]),"\n     ",_h('span',{staticClass:"token attr-name"},["format"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"YYYY-MM-DD hh:mm:ss",_h('span',{staticClass:"token punctuation"},["\""])]),"\n     ",_h('span',{staticClass:"token attr-name"},[":btn-show"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"true",_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n     ",_h('span',{staticClass:"token attr-name"},["@on-change"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"onChange",_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n     ",_h('span',{staticClass:"token attr-name"},["v-model"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"datetime.value2",_h('span',{staticClass:"token punctuation"},["\""])]),"\n     ",_h('span',{staticClass:"token attr-name"},[":hour-range"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),_h('span',{staticClass:"token punctuation"},["'"]),"3",_h('span',{staticClass:"token punctuation"},["'"]),_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-datepicker"]),_h('span',{staticClass:"token punctuation"},[">"])])])])}},function(){with(this){return _h('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_h('pre',["\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-datepicker"]),"\r\n     ",_h('span',{staticClass:"token attr-name"},["v-model"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"timeValue",_h('span',{staticClass:"token punctuation"},["\""])]),"\n     ",_h('span',{staticClass:"token attr-name"},["format"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"hh:mm:ss",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-datepicker"]),_h('span',{staticClass:"token punctuation"},[">"])])])])}},function(){with(this){return _h('table',{staticClass:"table"},[_h('thead',[_h('tr',[_h('th',["名字"])," ",_h('th',["类型"])," ",_h('th',["默认"])," ",_h('th',["描述"])," ",_h('th',["是否双向绑定"])," ",_h('th',["是否必选"])])])," ",_h('tbody',[_h('tr',[_h('td',["value"])," ",_h('td',["String/object/Number"])," ",_h('td',["无"])," ",_h('td',["日期 例如：date对象 new Date()，日期字符串 2018-09-09，时间搓 1477980169262"])," ",_h('td',["双向绑定"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["format"])," ",_h('td',["String"])," ",_h('td',["YYYY-MM-DD"])," ",_h('td',["展示的日期格式，配置例如，分隔符可自选：年-月-日 YYYY-MM-DD，年/月/日 时：分：秒 YYYY/MM/DD hh:mm:ss， 时:分:秒 hh:mm:ss"])," ",_h('td',["静态属性"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["minDate"])," ",_h('td',["String"])," ",_h('td',["无"])," ",_h('td',["日期可选最小值"])," ",_h('td',["否"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["maxDate"])," ",_h('td',["String"])," ",_h('td',["无"])," ",_h('td',["日期可选最大值"])," ",_h('td',["否"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["hourRange"])," ",_h('td',["Number"])," ",_h('td',["1"])," ",_h('td',["小时可选值设置（例如：值为 3 时，小时可选值为0, 3，6，9，12 …）"])," ",_h('td',["否"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["minuteRange"])," ",_h('td',["Number"])," ",_h('td',["1"])," ",_h('td',["分可选值设置（例如：值为 20 时，分可选值为0, 20，40，60）"])," ",_h('td',["否"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["secondRange"])," ",_h('td',["Number"])," ",_h('td',["1"])," ",_h('td',["秒可选值设置（例如：值为 20 时，分可选值为0, 20，40，60）"])," ",_h('td',["否"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["color"])," ",_h('td',["String"])," ",_h('td',["无"])," ",_h('td',["订制按钮颜色，值为颜色值，例如：#f00,pink"])," ",_h('td',["静态属性"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["btnShow"])," ",_h('td',["boolean"])," ",_h('td',["无"])," ",_h('td',["是否显示日历后面的按钮"])," ",_h('td',["否"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["class-name"])," ",_h('td',["String"])," ",_h('td',["无"])," ",_h('td',["日历样式，class名字"])," ",_h('td',["静态属性"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["onChange"])," ",_h('td',["object"])," ",_h('td',["无"])," ",_h('td',["选择日期后的回调，参数 val(当前值) oldval(上次值) @onChange"])," ",_h('td',["否"])," ",_h('td',["可选"])])])])}}]
	    };
	  

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(220)

	/* script */
	__vue_exports__ = __webpack_require__(222)

	/* template */
	var __vue_template__ = __webpack_require__(223)
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
	__vue_options__.__file = "/Users/clancyz/Workspace/github/wmfe-xcui-2.0/xcui/src/demos/dateRangePicker.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-35010c5d", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-35010c5d", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] dateRangePicker.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(221);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-35010c5d!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./dateRangePicker.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-35010c5d!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./dateRangePicker.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "\n.class-name {\n  width: 400px;\n}\n", ""]);

	// exports


/***/ },
/* 222 */
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
	        onChange: function onChange(startDate, endDate) {
	            console.log('startDate' + startDate);
	            console.log('endDate' + endDate);
	        }
	    }
	};

/***/ },
/* 223 */
/***/ function(module, exports) {

	
	    module.exports = {
	      render: function(){with(this){return _h('div',[_h('h1',["daterangepicker 双日期选择框"])," ",_h('h2',["使用场景"])," ",_m(0)," ",_h('h2',["应用指南"])," ",_h('p',["要把datepicker放在一个拥有定位属性的容器中,因为datepicker是相对父级元素定位的。"])," ",_h('h2',["DEMO"])," ",_h('div',{staticClass:"xcui-demo-container col-md-12 col-xs-12 col-lg-12"},[_h('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_h('h3',["simple"])," ",_h('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_h('xcui-daterangepicker',{directives:[{name:"model",rawName:"v-model",value:(myDate),expression:"myDate"}],attrs:{"sep":' － '},domProps:{"value":(myDate)},on:{"input":function($event){myDate=$event}}})])," ",_m(1)])," ",_h('p',["myDate:"+_s(myDate)])," ",_h('p',[" 最简单的用法，传入v-model值:{startDate: xxx, endDate: xxx} 其中 startDate：日期开始时间，endDate：日期结束时间"])," ",_h('p',[" startDate／endDate：可以传不同日期格式，例如：date对象 new Date()，日期字符串 2018-09-09，时间搓 1477980169262，也可以不传，默认当天，date.value值为 时间戳1477980088896"])," ",_h('p',[" sep：双日历之间间隔符，例如sep值为“ 至 ” 日期格式为 2016-09-08 00:02:00 至 2016-09-13 00:02:00"])," ",_h('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_h('h3',["日期格式"])," ",_h('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_h('xcui-daterangepicker',{directives:[{name:"model",rawName:"v-model",value:(myDate2),expression:"myDate2"}],attrs:{"min-date":'2016/11/02',"max-date":'2016/11/22',"date-limit":date.dateLimit},domProps:{"value":(myDate2)},on:{"input":function($event){myDate2=$event}}})])," ",_m(2)])," ",_h('p',[" format,min-date,max-date同datapicker组件配置"])," ",_h('p',[" date-limit：可选时间范围限制，例如：dateLimit: {months: 1} 一个月 dateLimit: {days: 20} 20天"])," ",_h('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_h('h3',["日期 + 时间选择"])," ",_h('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_h('xcui-daterangepicker',{directives:[{name:"model",rawName:"v-model",value:(myDate3),expression:"myDate3"}],attrs:{"format":"YYYY-MM-DD hh:mm:ss","hour-range":'3',"minute-range":'10',"second-range":'20'},domProps:{"value":(myDate3)},on:{"input":function($event){myDate3=$event}}})])," ",_m(3)])," ",_h('p',[" hour-range：小时可选值设置（例如：值为 3 时，小时可选值为0, 3，6，9，12"])," ",_h('p',[" minute-range：分钟可选值设置，同上"])," ",_h('p',[" second-range：分钟可选值设置，同上"])," ",_h('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_h('h3',["样式以及回调配置"])," ",_h('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_h('xcui-daterangepicker',{attrs:{"class-name":"class-name","color":"pink","format":"YYYY-MM-DD hh:mm:ss","btn-show":true,"hour-range":'3'},on:{"on-change":onChange}})])," ",_m(4)])," ",_h('p',[" class-name：日历样式，class名字"])," ",_h('p',[" color：按钮颜色，值为颜色值，例如：#f00,pink"])," ",_h('p',[" on-change：选择日期后的回调，参数 val(当前值) oldval(上次值)，onChange(val, oldVal) {}"])," ",_h('p',[" btn-show: 按钮是否显示"])," ",_h('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_h('h3',["时间选择"])," ",_h('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_h('xcui-daterangepicker',{directives:[{name:"model",rawName:"v-model",value:(myTime),expression:"myTime"}],attrs:{"format":"hh:mm:ss"},domProps:{"value":(myTime)},on:{"input":function($event){myTime=$event}}})])," ",_m(5)])])," ",_h('h3',["日历选择，日期＋时间选择"])," ",_h('h4',["Props"])," ",_m(6)])}},
	      staticRenderFns: [function(){with(this){return _h('ul',[_h('li',["支持日历筛选，日历＋时间，时间筛选"])," ",_h('li',["可以配置日期的筛选范围，日期格式"])," ",_h('li',["对于时间的筛选，可以倍数形式定制筛选时间的值，例如分钟可以订制筛选值为15，30，45，60"])," ",_h('li',["可以直接获取当前的时间"])," ",_h('li',["年筛选可以直接输入，可以筛选"])," ",_h('li',["支持定制皮肤颜色"])])}},function(){with(this){return _h('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_h('pre',["\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-daterangepicker"]),"\r\n     ",_h('span',{staticClass:"token attr-name"},["v-model"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"myDate",_h('span',{staticClass:"token punctuation"},["\""])]),"\n     ",_h('span',{staticClass:"token attr-name"},[":sep"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),_h('span',{staticClass:"token punctuation"},["'"])," － ",_h('span',{staticClass:"token punctuation"},["'"]),_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-daterangepicker"]),_h('span',{staticClass:"token punctuation"},[">"])])])])}},function(){with(this){return _h('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_h('pre',["\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-daterangepicker"]),"\r\n     ",_h('span',{staticClass:"token attr-name"},["v-model"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"myDate2",_h('span',{staticClass:"token punctuation"},["\""])]),"\n     ",_h('span',{staticClass:"token attr-name"},[":min-date"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),_h('span',{staticClass:"token punctuation"},["'"]),"2016/11/02",_h('span',{staticClass:"token punctuation"},["'"]),_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n     ",_h('span',{staticClass:"token attr-name"},[":max-date"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),_h('span',{staticClass:"token punctuation"},["'"]),"2016/11/22",_h('span',{staticClass:"token punctuation"},["'"]),_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n     ",_h('span',{staticClass:"token attr-name"},[":date-limit"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"date.dateLimit",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-daterangepicker"]),_h('span',{staticClass:"token punctuation"},[">"])])])])}},function(){with(this){return _h('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_h('pre',["\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-daterangepicker"]),"\r\n       ",_h('span',{staticClass:"token attr-name"},["format"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"YYYY-MM-DD hh:mm:ss",_h('span',{staticClass:"token punctuation"},["\""])]),"\n       ",_h('span',{staticClass:"token attr-name"},["v-model"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"myDate3",_h('span',{staticClass:"token punctuation"},["\""])]),"\n       ",_h('span',{staticClass:"token attr-name"},[":hour-range"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),_h('span',{staticClass:"token punctuation"},["'"]),"3",_h('span',{staticClass:"token punctuation"},["'"]),_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n       ",_h('span',{staticClass:"token attr-name"},[":minute-range"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),_h('span',{staticClass:"token punctuation"},["'"]),"10",_h('span',{staticClass:"token punctuation"},["'"]),_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n       ",_h('span',{staticClass:"token attr-name"},[":second-range"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),_h('span',{staticClass:"token punctuation"},["'"]),"20",_h('span',{staticClass:"token punctuation"},["'"]),_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-daterangepicker"]),_h('span',{staticClass:"token punctuation"},[">"])])])])}},function(){with(this){return _h('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_h('pre',["\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-daterangepicker"]),"\r\n     ",_h('span',{staticClass:"token attr-name"},["class-name"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"class-name",_h('span',{staticClass:"token punctuation"},["\""])]),"\n     ",_h('span',{staticClass:"token attr-name"},["color"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"pink",_h('span',{staticClass:"token punctuation"},["\""])]),"\n     ",_h('span',{staticClass:"token attr-name"},["format"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"YYYY-MM-DD hh:mm:ss",_h('span',{staticClass:"token punctuation"},["\""])]),"\n     ",_h('span',{staticClass:"token attr-name"},[":btn-show"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"true",_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n     ",_h('span',{staticClass:"token attr-name"},["@on-change"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"onChange",_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n     ",_h('span',{staticClass:"token attr-name"},[":hour-range"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),_h('span',{staticClass:"token punctuation"},["'"]),"3",_h('span',{staticClass:"token punctuation"},["'"]),_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-daterangepicker"]),_h('span',{staticClass:"token punctuation"},[">"])])])])}},function(){with(this){return _h('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_h('pre',["\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-daterangepicker"]),"\r\n       ",_h('span',{staticClass:"token attr-name"},["v-model"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"myTime",_h('span',{staticClass:"token punctuation"},["\""])]),"\n       ",_h('span',{staticClass:"token attr-name"},["format"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"hh:mm:ss",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-daterangepicker"]),_h('span',{staticClass:"token punctuation"},[">"])])])])}},function(){with(this){return _h('table',{staticClass:"table"},[_h('thead',[_h('tr',[_h('th',["名字"])," ",_h('th',["类型"])," ",_h('th',["默认"])," ",_h('th',["描述"])," ",_h('th',["是否双向绑定"])," ",_h('th',["是否必选"])])])," ",_h('tbody',[_h('tr',[_h('td',["v-model"])," ",_h('td',["object"])," ",_h('td',["{startDate:\"\",endDate:\"\"   }"])," ",_h('td',["日期开始时间/结束时间"])," ",_h('td',["双向绑定"])," ",_h('td',["必选"])])," ",_h('tr',[_h('td',["minDate"])," ",_h('td',["String,object,时间戳"])," ",_h('td',["无"])," ",_h('td',["日期可选最小值"])," ",_h('td',["否"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["maxdate"])," ",_h('td',["String,object,时间戳"])," ",_h('td',["无"])," ",_h('td',["日期可选最大值"])," ",_h('td',["否"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["sep"])," ",_h('td',["String"])," ",_h('td',["至"])," ",_h('td',["双日历之间间隔符"])," ",_h('td',["否"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["format"])," ",_h('td',["String"])," ",_h('td',["YYYY-MM-DD"])," ",_h('td',["展示的日期格式，配置例如，分隔符可自选：年-月-日 YYYY-MM-DD，年-月-日 时：分：秒 YYYY-MM-DD hh:mm:ss， 时/分/秒 hh/mm/ss"])," ",_h('td',["静态属性"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["dateLimit"])," ",_h('td',["object"])," ",_h('td',["null"])," ",_h('td',["可选时间范围限制，例如：dateLimit: {months: 1} 一个月 dateLimit: {days: 20} 20天"])," ",_h('td',["否"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["hourRange"])," ",_h('td',["Number"])," ",_h('td',["1"])," ",_h('td',["小时可选值设置（例如：值为 3 时，小时可选值为0，3，6，9，12 …）"])," ",_h('td',["否"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["minuteRange"])," ",_h('td',["Number"])," ",_h('td',["1"])," ",_h('td',["分可选值设置（例如：值为 20 时，分可选值为0，20，40）"])," ",_h('td',["否"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["secondRange"])," ",_h('td',["Number"])," ",_h('td',["1"])," ",_h('td',["秒可选值设置（例如：值为 20 时，分可选值为0，20，40）"])," ",_h('td',["否"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["color"])," ",_h('td',["String"])," ",_h('td',["无"])," ",_h('td',["订制按钮颜色，值为颜色值，例如：#f00,pink"])," ",_h('td',["否"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["btnShow"])," ",_h('td',["boolean"])," ",_h('td',["无"])," ",_h('td',["是否显示日历后面的按钮"])," ",_h('td',["否"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["inputClass"])," ",_h('td',["Array"])," ",_h('td',["无"])," ",_h('td',["日历input输入框的样式，class名字"])," ",_h('td',["否"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["onChange"])," ",_h('td',["object"])," ",_h('td',["无"])," ",_h('td',["选择日期后的回调，参数 val(当前值) oldval(上次值) @onChange"])," ",_h('td',["否"])," ",_h('td',["可选"])])])])}}]
	    };
	  

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(225)

	/* script */
	__vue_exports__ = __webpack_require__(227)

	/* template */
	var __vue_template__ = __webpack_require__(232)
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
	__vue_options__.__file = "/Users/clancyz/Workspace/github/wmfe-xcui-2.0/xcui/src/demos/select.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-751d87ec", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-751d87ec", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] select.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(226);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-751d87ec!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./select.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-751d87ec!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./select.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "\n.select-demo,\n.xcui-select {\n  width: 200px !important;\n}\n", ""]);

	// exports


/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _jsonp = __webpack_require__(228);

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
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies
	 */

	var debug = __webpack_require__(229)('jsonp');

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
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the web browser implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = __webpack_require__(230);
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
/* 230 */
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
	exports.humanize = __webpack_require__(231);

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
/* 231 */
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
/* 232 */
/***/ function(module, exports) {

	
	    module.exports = {
	      render: function(){with(this){return _h('div',[_h('h1',["Select多功能选择框"])," ",_h('h2',["使用场景"])," ",_m(0)," ",_h('h2',["DEMO"])," ",_h('div',{staticClass:"xcui-demo-container col-md-12 col-xs-12 col-lg-12"},[_h('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_h('h3',["single - 基本模式 options(Array)"])," ",_h('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_h('xcui-select',{attrs:{"options":dataSource2},on:{"change":selectChange2}})])," ",_m(1)])," ",_h('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_h('h3',["single - 基本模式 options(Object)"])," ",_h('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_h('xcui-select',{attrs:{"options":dataSource},on:{"change":selectChange}})])," ",_m(2)])," ",_h('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_h('h3',["自定义label的字段(label='text')"])," ",_h('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_h('xcui-select',{attrs:{"label":"text","options":dataSource},on:{"change":selectChange}})])," ",_m(3)])," ",_h('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_h('h3',["禁用(:disabled)"])," ",_h('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_h('xcui-select',{attrs:{"disabled":disable,"options":dataSource},on:{"change":selectChange}})])," ",_m(4)])," ",_h('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_h('h3',["定制label(:custom-label)"])," ",_h('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_h('xcui-select',{attrs:{"custom-label":reRenderLabel,"options":dataSource},on:{"change":selectChange2}})])," ",_m(5)])," ",_h('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_h('h3',["省市联动"])," ",_h('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_h('xcui-select',{attrs:{"placeholder":"选择省","options":provinceData},on:{"change":provinceChange}})," ",_h('xcui-select',{attrs:{"placeholder":"选择市","options":selectCityData},on:{"change":cityChange}})," ",_h('p',["\r\n            "+_s(selectProvinceValue)+" - "+_s(selectCityValue)+"\n        "])])," ",_m(6)])," ",_h('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_h('h3',["input Local Search"])," ",_h('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_h('xcui-select',{attrs:{"class-name":"select-demo","placeholder":"选择一个城市","show-search":"","search-empty-text":"没有搜索结果哎...","options":localSearchSource},on:{"search-change":searchChange,"change":localSearchChange}}),"\r\n        输入值: "+_s(localSearchValue)+"\r\n        选择结果: "+_s(localSearchResult)+"\r\n    "])," ",_m(7)])," ",_h('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_h('h3',["智能输入"])," ",_h('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_h('xcui-select',{attrs:{"class-name":"select-demo","placeholder":"输入邮箱","show-search":"","options":asyncSearchSource},on:{"search-change":asyncSearchChange,"change":asyncSearchOnChange}})])," ",_m(8)])," ",_h('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_h('h3',["远程数据"])," ",_h('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},["\r\n        远程搜索\r\n        ",_h('xcui-select',{attrs:{"class-name":"select-demo","placeholder":"搜索","show-search":"","clear-on-select":"","options":serverSearchSource},on:{"search-change":serverSearchChange,"change":serverSearchOnChange}}),"\r\n        "+_s(serverSearchValue)+"\n        ",_h('br'),"\r\n        ajax请求不能耦合select组件, 提供EVENT(@search-change)让使用者进行数据获取 & options赋值\r\n    "])," ",_m(9)])," ",_h('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_h('h3',["option Group (数据格式一)"])," ",_h('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_h('xcui-select',{attrs:{"class-name":"select-demo","placeholder":"搜索","optgroup":"","selected":optgroupDefaultValue,"options":optgroupSource},on:{"change":optgroupOnChange}})])," ",_m(10)])," ",_h('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_h('h3',["option Group (数据格式二)"])," ",_h('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_h('xcui-select',{attrs:{"class-name":"select-demo","placeholder":"搜索","optgroup":"","label":"name","options":optgroupSource2},on:{"change":optgroupOnChange2}})])," ",_m(11)])," ",_h('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_h('h3',["multiple select"])," ",_h('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_h('xcui-select',{attrs:{"class-name":"select-demo","placeholder":"选择多个","multiple":"","selected":multipleDefaultValue,"options":dataSource2},on:{"change":multipleOnChange,"remove":multipleOnRemove}})])," ",_m(12)])," ",_h('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_h('h3',["multiple select"])," ",_h('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_h('xcui-select',{attrs:{"class-name":"select-demo","placeholder":"选择多个","multiple":"","multiple-max":2,"selected":multipleDefaultValue2,"options":dataSource}})])," ",_m(13)])," ",_h('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_h('h3',["multiple select object"])," ",_h('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_h('xcui-select',{attrs:{"class-name":"select-demo","placeholder":"选择多个","multiple":"","selected":multipleDefaultValue,"options":multipleObjOptions},on:{"change":multipleObjectOnChange,"remove":multipleObjectOnRemove}})])," ",_m(14)])])," ",_h('h2',["组件依赖"])," ",_h('blockquote',[_h('p',[_h('a',{attrs:{"href":"https://www.npmjs.com/package/fuzzysearch"}},["fuzzysearch"])," 模糊搜索模块"])])," ",_h('h2',["Props"])," ",_m(15)," ",_h('h2',["Events"])," ",_m(16)," ",_h('h3',["模式说明"])," ",_m(17)," ",_h('h3',["参考"])," ",_m(18)])}},
	      staticRenderFns: [function(){with(this){return _h('ol',[_h('li',["替代原生下拉框，支持多选"])," ",_h('li',["支持Array, Object等格式"])," ",_h('li',["支持进行输入建议，远程搜索等"])," ",_h('li',["支持optionGroup"])])}},function(){with(this){return _h('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_h('pre',["\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-select"]),"\r\n     ",_h('span',{staticClass:"token attr-name"},["@change"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"selectChange2",_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n     ",_h('span',{staticClass:"token attr-name"},[":options"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"dataSource2",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-select"]),_h('span',{staticClass:"token punctuation"},[">"])])])])}},function(){with(this){return _h('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_h('pre',["\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-select"]),"\r\n      ",_h('span',{staticClass:"token attr-name"},["@change"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"selectChange",_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n      ",_h('span',{staticClass:"token attr-name"},[":options"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"dataSource",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-select"]),_h('span',{staticClass:"token punctuation"},[">"])])])])}},function(){with(this){return _h('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_h('pre',["\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-select"])," ",_h('span',{staticClass:"token attr-name"},["label"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"text",_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n     ",_h('span',{staticClass:"token attr-name"},["@change"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"selectChange",_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n     ",_h('span',{staticClass:"token attr-name"},[":options"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"dataSource",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-select"]),_h('span',{staticClass:"token punctuation"},[">"])])])])}},function(){with(this){return _h('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_h('pre',["\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-select"])," ",_h('span',{staticClass:"token attr-name"},[":disabled"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"disable",_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n      ",_h('span',{staticClass:"token attr-name"},["@change"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"selectChange",_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n      ",_h('span',{staticClass:"token attr-name"},[":options"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"dataSource",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-select"]),_h('span',{staticClass:"token punctuation"},[">"])])])])}},function(){with(this){return _h('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_h('pre',["\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-select"])," ",_h('span',{staticClass:"token attr-name"},[":custom-label"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"reRenderLabel",_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n     ",_h('span',{staticClass:"token attr-name"},["@change"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"selectChange2",_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n     ",_h('span',{staticClass:"token attr-name"},[":options"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"dataSource",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-select"]),_h('span',{staticClass:"token punctuation"},[">"])])])])}},function(){with(this){return _h('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_h('pre',["\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-select"])," ",_h('span',{staticClass:"token attr-name"},["placeholder"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"选择省",_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n     ",_h('span',{staticClass:"token attr-name"},["@change"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"provinceChange",_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n     ",_h('span',{staticClass:"token attr-name"},[":options"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"provinceData",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-select"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-select"])," ",_h('span',{staticClass:"token attr-name"},["placeholder"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"选择市",_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n     ",_h('span',{staticClass:"token attr-name"},["@change"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"cityChange",_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n     ",_h('span',{staticClass:"token attr-name"},[":options"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"selectCityData",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-select"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"p"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n     ",_h('span',{staticClass:"token punctuation"},["{"]),_h('span',{staticClass:"token punctuation"},["{"]),"selectProvinceValue",_h('span',{staticClass:"token punctuation"},["}"]),_h('span',{staticClass:"token punctuation"},["}"])," - ",_h('span',{staticClass:"token punctuation"},["{"]),_h('span',{staticClass:"token punctuation"},["{"]),"selectCityValue",_h('span',{staticClass:"token punctuation"},["}"]),_h('span',{staticClass:"token punctuation"},["}"]),"\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"p"]),_h('span',{staticClass:"token punctuation"},[">"])])])])}},function(){with(this){return _h('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_h('pre',["\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-select"])," ",_h('span',{staticClass:"token attr-name"},["class-name"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"select-demo",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["placeholder"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"选择一个城市",_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n      ",_h('span',{staticClass:"token attr-name"},["show-search"])," ",_h('span',{staticClass:"token attr-name"},["search-empty-text"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"没有搜索结果哎...",_h('span',{staticClass:"token punctuation"},["\""])]),"\n      ",_h('span',{staticClass:"token attr-name"},["@search-change"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"searchChange",_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n      ",_h('span',{staticClass:"token attr-name"},["@change"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"localSearchChange",_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n      ",_h('span',{staticClass:"token attr-name"},[":options"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"localSearchSource",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-select"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n 输入值: ",_h('span',{staticClass:"token punctuation"},["{"]),_h('span',{staticClass:"token punctuation"},["{"]),"localSearchValue",_h('span',{staticClass:"token punctuation"},["}"]),_h('span',{staticClass:"token punctuation"},["}"]),"\r\n 选择结果: ",_h('span',{staticClass:"token punctuation"},["{"]),_h('span',{staticClass:"token punctuation"},["{"]),"localSearchResult",_h('span',{staticClass:"token punctuation"},["}"]),_h('span',{staticClass:"token punctuation"},["}"])])])}},function(){with(this){return _h('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_h('pre',["\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-select"])," ",_h('span',{staticClass:"token attr-name"},["class-name"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"select-demo",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["placeholder"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"输入邮箱",_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n      ",_h('span',{staticClass:"token attr-name"},["show-search"]),"\r\n      ",_h('span',{staticClass:"token attr-name"},["@search-change"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"asyncSearchChange",_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n      ",_h('span',{staticClass:"token attr-name"},["@change"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"asyncSearchOnChange",_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n      ",_h('span',{staticClass:"token attr-name"},[":options"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"asyncSearchSource",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-select"]),_h('span',{staticClass:"token punctuation"},[">"])])])])}},function(){with(this){return _h('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_h('pre',["\r\n 远程搜索\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-select"])," ",_h('span',{staticClass:"token attr-name"},["class-name"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"select-demo",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["placeholder"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"搜索",_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n      ",_h('span',{staticClass:"token attr-name"},["show-search"]),"\r\n      ",_h('span',{staticClass:"token attr-name"},["clear-on-select"]),"\r\n      ",_h('span',{staticClass:"token attr-name"},["@search-change"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"serverSearchChange",_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n      ",_h('span',{staticClass:"token attr-name"},["@change"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"serverSearchOnChange",_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n      ",_h('span',{staticClass:"token attr-name"},[":options"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"serverSearchSource",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-select"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token punctuation"},["{"]),_h('span',{staticClass:"token punctuation"},["{"]),"serverSearchValue",_h('span',{staticClass:"token punctuation"},["}"]),_h('span',{staticClass:"token punctuation"},["}"]),"\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"br"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ajax请求不能耦合select组件, 提供EVENT(@search-change)让使用者进行数据获取 & options赋值"])])}},function(){with(this){return _h('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_h('pre',["\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-select"])," ",_h('span',{staticClass:"token attr-name"},["class-name"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"select-demo",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["placeholder"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"搜索",_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n              ",_h('span',{staticClass:"token attr-name"},["optgroup"]),"\r\n              ",_h('span',{staticClass:"token attr-name"},["@change"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"optgroupOnChange",_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n              ",_h('span',{staticClass:"token attr-name"},[":selected"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"optgroupDefaultValue",_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n              ",_h('span',{staticClass:"token attr-name"},[":options"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"optgroupSource",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-select"]),_h('span',{staticClass:"token punctuation"},[">"])])])])}},function(){with(this){return _h('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_h('pre',["\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-select"])," ",_h('span',{staticClass:"token attr-name"},["class-name"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"select-demo",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["placeholder"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"搜索",_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n              ",_h('span',{staticClass:"token attr-name"},["optgroup"]),"\r\n              ",_h('span',{staticClass:"token attr-name"},["label"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"name",_h('span',{staticClass:"token punctuation"},["\""])]),"\n              ",_h('span',{staticClass:"token attr-name"},["@change"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"optgroupOnChange2",_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n              ",_h('span',{staticClass:"token attr-name"},[":options"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"optgroupSource2",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-select"]),_h('span',{staticClass:"token punctuation"},[">"])])])])}},function(){with(this){return _h('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_h('pre',["\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-select"])," ",_h('span',{staticClass:"token attr-name"},["class-name"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"select-demo",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["placeholder"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"选择多个",_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n              ",_h('span',{staticClass:"token attr-name"},["multiple"]),"\r\n              ",_h('span',{staticClass:"token attr-name"},[":selected"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"multipleDefaultValue",_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n              ",_h('span',{staticClass:"token attr-name"},["@change"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"multipleOnChange",_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n              ",_h('span',{staticClass:"token attr-name"},["@remove"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"multipleOnRemove",_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n              ",_h('span',{staticClass:"token attr-name"},[":options"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"dataSource2",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-select"]),_h('span',{staticClass:"token punctuation"},[">"])])])])}},function(){with(this){return _h('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_h('pre',["\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-select"])," ",_h('span',{staticClass:"token attr-name"},["class-name"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"select-demo",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["placeholder"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"选择多个",_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n              ",_h('span',{staticClass:"token attr-name"},["multiple"]),"\r\n              ",_h('span',{staticClass:"token attr-name"},[":multiple-max"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),"2"]),"\r\n              ",_h('span',{staticClass:"token attr-name"},[":selected"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"multipleDefaultValue2",_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n              ",_h('span',{staticClass:"token attr-name"},[":options"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"dataSource",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-select"]),_h('span',{staticClass:"token punctuation"},[">"])])])])}},function(){with(this){return _h('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_h('pre',["\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-select"])," ",_h('span',{staticClass:"token attr-name"},["class-name"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"select-demo",_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n              ",_h('span',{staticClass:"token attr-name"},["placeholder"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"选择多个",_h('span',{staticClass:"token punctuation"},["\""])]),"\n              ",_h('span',{staticClass:"token attr-name"},["multiple"]),"\r\n              ",_h('span',{staticClass:"token attr-name"},[":selected"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"multipleDefaultValue",_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n              ",_h('span',{staticClass:"token attr-name"},["@change"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"multipleObjectOnChange",_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n              ",_h('span',{staticClass:"token attr-name"},["@remove"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"multipleObjectOnRemove",_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n              ",_h('span',{staticClass:"token attr-name"},[":options"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"multipleObjOptions",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-select"]),_h('span',{staticClass:"token punctuation"},[">"])])])])}},function(){with(this){return _h('table',{staticClass:"table"},[_h('thead',[_h('tr',[_h('th',["名字"])," ",_h('th',["类型"])," ",_h('th',["默认"])," ",_h('th',["描述"])," ",_h('th',["是否必选"])])])," ",_h('tbody',[_h('tr',[_h('td',["className"])," ",_h('td',["String"])," ",_h('td',["无"])," ",_h('td',["自定义css类名"])," ",_h('td',["否"])])," ",_h('tr',[_h('td',["placeholder"])," ",_h('td',["String"])," ",_h('td',["无"])," ",_h('td',["选择框默认文字"])," ",_h('td',["否"])])," ",_h('tr',[_h('td',["optgroup"])," ",_h('td',["Boolean"])," ",_h('td',["false"])," ",_h('td',["列表分组模式(结合options使用)"])," ",_h('td',["否"])])," ",_h('tr',[_h('td',["multiple"])," ",_h('td',["Boolean"])," ",_h('td',["false"])," ",_h('td',["多选"])," ",_h('td',["否"])])," ",_h('tr',[_h('td',["showSearch"])," ",_h('td',["Boolean"])," ",_h('td',["false"])," ",_h('td',["是否展示搜索框"])," ",_h('td',["否"])])," ",_h('tr',[_h('td',["clearOnSelect"])," ",_h('td',["Boolean"])," ",_h('td',["false"])," ",_h('td',["选择完以后清除搜索内容"])," ",_h('td',["否"])])," ",_h('tr',[_h('td',["label"])," ",_h('td',["String"])," ",_h('td',["无"])," ",_h('td',["自定义label展现key(对应数据中key)"])," ",_h('td',["否"])])," ",_h('tr',[_h('td',[":multiple-max"])," ",_h('td',["Number"])," ",_h('td',["无"])," ",_h('td',["多选模式下 最多选择数据项，默认0"])," ",_h('td')])," ",_h('tr',[_h('td',[":customLabel"])," ",_h('td',["Function"])," ",_h('td',["无"])," ",_h('td',["option内容定制"])," ",_h('td',["否"])])," ",_h('tr',[_h('td',[":options"])," ",_h('td',["Array"])," ",_h('td',["无"])," ",_h('td',["默认数据,optgroup模式下数据结构有要求(具体查看demo#option Group)"])," ",_h('td',["是"])])," ",_h('tr',[_h('td',[":disabled"])," ",_h('td',["Boolean"])," ",_h('td',["false"])," ",_h('td',["禁用"])," ",_h('td',["否"])])," ",_h('tr',[_h('td',[":selected"])," ",_h('td',["String"])," ",_h('td',["无"])," ",_h('td',["默认已选的值"])," ",_h('td',["否"])])])])}},function(){with(this){return _h('table',{staticClass:"table"},[_h('thead',[_h('tr',[_h('th',["名字"])," ",_h('th',["类型"])," ",_h('th',["默认"])," ",_h('th',["描述"])," ",_h('th',["是否必选"])])])," ",_h('tbody',[_h('tr',[_h('td',["@change"])," ",_h('td',["function(value) / function(value,groupIndex,valueIndex)"])," ",_h('td',["无"])," ",_h('td',["值发生变化的时候(2种模式: 普通模式/分组模式)"])," ",_h('td',["否"])])," ",_h('tr',[_h('td',["@select"])," ",_h('td',["function(value) / function(value,groupIndex,valueIndex)"])," ",_h('td',["无"])," ",_h('td',["发生了选择的时候(2种模式: 普通模式/分组模式)"])," ",_h('td',["否"])])," ",_h('tr',[_h('td',["@searchChange"])," ",_h('td',["function(searchValue)"])," ",_h('td',["无"])," ",_h('td',["搜索值发生变化的时候"])," ",_h('td',["否"])])," ",_h('tr',[_h('td',["@remove"])," ",_h('td',["function(removeValue)"])," ",_h('td',["无"])," ",_h('td',["多选模式下移除一个选值的时候"])," ",_h('td',["否"])])])])}},function(){with(this){return _h('ul',[_h('li',[_h('p',["单选模式:"])," ",_h('pre',["options数据格式一",_h('span',{staticClass:"token punctuation"},[":"])," ",_h('span',{staticClass:"token punctuation"},["["]),"\n    ",_h('span',{staticClass:"token string"},["'item1'"]),_h('span',{staticClass:"token punctuation"},[","]),"\n    ",_h('span',{staticClass:"token string"},["'item2'"]),"\n",_h('span',{staticClass:"token punctuation"},["]"]),"\noptions数据格式二",_h('span',{staticClass:"token punctuation"},[":"])," ",_h('span',{staticClass:"token punctuation"},["["]),"\n    ",_h('span',{staticClass:"token punctuation"},["{"]),"\n        label",_h('span',{staticClass:"token punctuation"},[":"])," ",_h('span',{staticClass:"token string"},["'1'"]),_h('span',{staticClass:"token punctuation"},[","]),"\n        disable",_h('span',{staticClass:"token punctuation"},[":"])," ",_h('span',{staticClass:"token boolean"},["true"]),_h('span',{staticClass:"token punctuation"},[","]),"\n        name",_h('span',{staticClass:"token punctuation"},[":"])," ",_h('span',{staticClass:"token string"},["'1'"]),"\n    ",_h('span',{staticClass:"token punctuation"},["}"]),"\n",_h('span',{staticClass:"token punctuation"},["]"]),"\n"])])," ",_h('li',[_h('p',["分组模式:"])," ",_h('pre',["optgroup    【必选】\nshowSearch  【不支持】\noptions数据格式一 ",_h('span',{staticClass:"token punctuation"},[":"])," ",_h('span',{staticClass:"token punctuation"},["["]),"\n    ",_h('span',{staticClass:"token punctuation"},["{"]),"\n        name",_h('span',{staticClass:"token punctuation"},[":"])," ",_h('span',{staticClass:"token string"},["'opt group 1'"]),_h('span',{staticClass:"token punctuation"},[","]),"\n        options",_h('span',{staticClass:"token punctuation"},[":"])," ",_h('span',{staticClass:"token punctuation"},["["]),"\n            ",_h('span',{staticClass:"token string"},["'item1'"]),_h('span',{staticClass:"token punctuation"},[","]),"\n            ",_h('span',{staticClass:"token string"},["'item2'"]),"\n        ",_h('span',{staticClass:"token punctuation"},["]"]),"\n    ",_h('span',{staticClass:"token punctuation"},["}"]),"\n",_h('span',{staticClass:"token punctuation"},["]"]),"\noptions数据格式二 ",_h('span',{staticClass:"token punctuation"},[":"])," ",_h('span',{staticClass:"token punctuation"},["["]),"\n    ",_h('span',{staticClass:"token punctuation"},["{"]),"\n        name",_h('span',{staticClass:"token punctuation"},[":"])," ",_h('span',{staticClass:"token string"},["'opt group 2'"]),_h('span',{staticClass:"token punctuation"},[","]),"\n        options",_h('span',{staticClass:"token punctuation"},[":"])," ",_h('span',{staticClass:"token punctuation"},["["]),"\n            ",_h('span',{staticClass:"token punctuation"},["{"]),"\n                label",_h('span',{staticClass:"token punctuation"},[":"])," ",_h('span',{staticClass:"token string"},["'1'"]),_h('span',{staticClass:"token punctuation"},[","]),"\n                disable",_h('span',{staticClass:"token punctuation"},[":"])," ",_h('span',{staticClass:"token boolean"},["true"]),"\n            ",_h('span',{staticClass:"token punctuation"},["}"]),"\n        ",_h('span',{staticClass:"token punctuation"},["]"]),"\n    ",_h('span',{staticClass:"token punctuation"},["}"]),"\n",_h('span',{staticClass:"token punctuation"},["]"]),"\n"])])," ",_h('li',[_h('p',["多选模式:"])," ",_h('pre',["multiple 【必选】\nshowSearch  【不支持】\nselected",_h('span',{staticClass:"token punctuation"},[":"])," Array\n"])])])}},function(){with(this){return _h('p',[_h('a',{attrs:{"href":"https://select2.github.io/"}},["select2"]),_h('br')," ",_h('a',{attrs:{"href":"http://ant.design/components/select/"}},["antd-select"]),_h('br')," ",_h('a',{attrs:{"href":"http://monterail.github.io/vue-multiselect/"}},["vue-multiselect"]),_h('br')," ",_h('a',{attrs:{"href":"https://josephuspaye.github.io/Keen-UI/#/ui-select-docs"}},["Keen-UI - select"]),_h('br')," ",_h('a',{attrs:{"href":"http://amazeui.org/javascript/selected"}},["http://amazeui.org/javascript/selected"])])}}]
	    };
	  

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* template */
	var __vue_template__ = __webpack_require__(234)
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
	__vue_options__.__file = "/Users/clancyz/Workspace/github/wmfe-xcui-2.0/xcui/src/demos/message.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1f5cb872", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-1f5cb872", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] message.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 234 */
/***/ function(module, exports) {

	
	    module.exports = {
	      render: function(){with(this){return _h('div',[_h('h1',["Message信息提示"])," ",_h('p',["Message提供一种不打断用户操作的轻量级提示方式，顶部居中显示并自动消失。常用于主动操作后的信息提示。"])," ",_h('h4',["支持4种信息展示类型"])," ",_m(0)," ",_m(1)," ",_h('h2',["DEMO"])," ",_h('div',{staticClass:"xcui-demo-container col-md-12 col-xs-12 col-lg-12"},[_h('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_h('h3',["基础用法"])," ",_h('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_h('button',{staticClass:"btn btn-info",on:{"click":function($event){$Message.show('this is an info message')}}},["info"])," ",_h('button',{staticClass:"btn btn-success",on:{"click":function($event){$Message.show('this is a success message', 'success')}}},["success"])," ",_h('button',{staticClass:"btn btn-danger",on:{"click":function($event){$Message.show('this is an error message', 'error')}}},["error"])," ",_h('button',{staticClass:"btn btn-warning",on:{"click":function($event){$Message.show('this is a info warning', 'warning')}}},["warning"])])," ",_m(2)])])," ",_h('h2',["Props"])," ",_m(3)])}},
	      staticRenderFns: [function(){with(this){return _h('ul',[_h('li',["info：普通信息提示"])," ",_h('li',["success：成功信息提示"])," ",_h('li',["error：错误信息提示"])," ",_h('li',["warning：警告信息提示"])])}},function(){with(this){return _h('p',[_h('code',["this.$Message.show(content:String, type: String, duration: Number)"])])}},function(){with(this){return _h('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_h('pre',["\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"button"])," ",_h('span',{staticClass:"token attr-name"},["class"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"btn btn-info",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["@click"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"$Message.show(",_h('span',{staticClass:"token punctuation"},["'"]),"this is an info message",_h('span',{staticClass:"token punctuation"},["'"]),")",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"info",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"button"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"button"])," ",_h('span',{staticClass:"token attr-name"},["class"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"btn btn-success",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["@click"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"$Message.show(",_h('span',{staticClass:"token punctuation"},["'"]),"this is a success message",_h('span',{staticClass:"token punctuation"},["'"]),", ",_h('span',{staticClass:"token punctuation"},["'"]),"success",_h('span',{staticClass:"token punctuation"},["'"]),")",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"success",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"button"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"button"])," ",_h('span',{staticClass:"token attr-name"},["class"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"btn btn-danger",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["@click"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"$Message.show(",_h('span',{staticClass:"token punctuation"},["'"]),"this is an error message",_h('span',{staticClass:"token punctuation"},["'"]),", ",_h('span',{staticClass:"token punctuation"},["'"]),"error",_h('span',{staticClass:"token punctuation"},["'"]),")",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"error",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"button"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"button"])," ",_h('span',{staticClass:"token attr-name"},["class"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"btn btn-warning",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["@click"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"$Message.show(",_h('span',{staticClass:"token punctuation"},["'"]),"this is a info warning",_h('span',{staticClass:"token punctuation"},["'"]),", ",_h('span',{staticClass:"token punctuation"},["'"]),"warning",_h('span',{staticClass:"token punctuation"},["'"]),")",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"warning",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"button"]),_h('span',{staticClass:"token punctuation"},[">"])])])])}},function(){with(this){return _h('table',{staticClass:"table"},[_h('thead',[_h('tr',[_h('th',["参数"])," ",_h('th',["类型"])," ",_h('th',["默认"])," ",_h('th',["描述"])," ",_h('th',["是否必选"])])])," ",_h('tbody',[_h('tr',[_h('td',["content"])," ",_h('td',["String"])," ",_h('td',["-"])," ",_h('td',["提示信息内容"])," ",_h('td',[_h('strong',["必选"])])])," ",_h('tr',[_h('td',["type"])," ",_h('td',["String"])," ",_h('td',["info"])," ",_h('td',["指定提示信息的类型，默认为info类型；可自行配置，有四种选择: info、success、error、warning"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["duration"])," ",_h('td',["Number"])," ",_h('td',["-"])," ",_h('td',["单位: ms, 默认",_h('strong',["3000"]),"毫秒后自动关闭。设置0无效"])," ",_h('td',["可选"])])])])}}]
	    };
	  

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(236)

	/* script */
	__vue_exports__ = __webpack_require__(238)

	/* template */
	var __vue_template__ = __webpack_require__(239)
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
	__vue_options__.__file = "/Users/clancyz/Workspace/github/wmfe-xcui-2.0/xcui/src/demos/modal.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-4e6be56d", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-4e6be56d", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] modal.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(237);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-4e6be56d!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./modal.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-4e6be56d!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./modal.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "\n.xcui-modal-demo-title {\n  color: #66ccff;\n}\n", ""]);

	// exports


/***/ },
/* 238 */
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
/* 239 */
/***/ function(module, exports) {

	
	    module.exports = {
	      render: function(){with(this){return _h('div',[_h('h1',["Modal 模态窗口"])," ",_h('h2',["使用场景"])," ",_m(0)," ",_h('h2',["Demo"])," ",_h('div',{staticClass:"xcui-demo-container col-md-12 col-xs-12 col-lg-12"},[_h('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_h('h3',["基础使用"])," ",_h('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_h('button',{staticClass:"btn btn-default",on:{"click":function($event){modal1 = true}}},["显示对话框"])," ",_h('xcui-modal',{directives:[{name:"model",rawName:"v-model",value:(modal1),expression:"modal1"}],attrs:{"title":"基础弹窗"},domProps:{"value":(modal1)},on:{"input":function($event){modal1=$event}}},[_h('div',["XCUI，做有品质的外卖UI"])])," ",_h('div',["通过控制show来显示/隐藏对话框，需要将show设置为.sync双向绑定"])])," ",_m(1)])," ",_h('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_h('h3',["定义元素的显示"])," ",_h('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_h('button',{staticClass:"btn btn-default",on:{"click":function($event){modal2 = true}}},["自定义页头"])," ",_h('button',{staticClass:"btn btn-default",on:{"click":function($event){modal3 = true}}},["不带标题栏"])," ",_h('button',{staticClass:"btn btn-default",on:{"click":function($event){modal4 = true}}},["不带关闭按钮"])," ",_h('button',{staticClass:"btn btn-default",on:{"click":function($event){modal5 = true}}},["不带页脚"])," ",_h('button',{staticClass:"btn btn-default",on:{"click":function($event){modal6 = true}}},["不带关闭按钮和页脚"])," ",_h('xcui-modal',{directives:[{name:"model",rawName:"v-model",value:(modal2),expression:"modal2"}],attrs:{"title":"自定义页头（有slot则无效）"},domProps:{"value":(modal2)},on:{"input":function($event){modal2=$event}}},[_h('span',{slot:"header",staticClass:"xcui-modal-demo-title"},["不一样的页头"])," ",_h('div',["我跟你不一样，我有你没有的头脑"])])," ",_h('xcui-modal',{directives:[{name:"model",rawName:"v-model",value:(modal3),expression:"modal3"}],attrs:{"show-header":false},domProps:{"value":(modal3)},on:{"input":function($event){modal3=$event}}},[_h('div',["无头骑士。生前是一名勇猛的骑士，由于在战场上不幸阵亡，首级被敌人割去，因此每逢月黑风高的夜晚他便会骑着一匹同为亡灵的马出没于沉睡谷，四处寻找自己遗失的首级；而每当看见与自己生前长相相似者便会斩其头颅带回。"])])," ",_h('xcui-modal',{directives:[{name:"model",rawName:"v-model",value:(modal4),expression:"modal4"}],attrs:{"title":"不带关闭按钮","show-close-button":false},domProps:{"value":(modal4)},on:{"input":function($event){modal4=$event}}},[_h('div',["不带关闭按钮"])])," ",_h('xcui-modal',{directives:[{name:"model",rawName:"v-model",value:(modal5),expression:"modal5"}],attrs:{"title":"不带页脚","show-footer":false},domProps:{"value":(modal5)},on:{"input":function($event){modal5=$event}}},[_h('div',["即使我失去了双脚，我依然顶天立地"])])," ",_h('xcui-modal',{directives:[{name:"model",rawName:"v-model",value:(modal6),expression:"modal6"}],attrs:{"show-close-button":false,"show-footer":false},domProps:{"value":(modal6)},on:{"input":function($event){modal6=$event}}},[_h('div',["我且问你，除了刷新，你能如何关闭我？"])])," ",_h('div',["Modal提供了灵活的组件化API和Slot，可以自由控制整个Modal的组成部分。比如，页头、页脚和关闭按钮"])])," ",_m(2)])," ",_h('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_h('h3',["自定义样式"])," ",_h('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_h('button',{staticClass:"btn btn-default",on:{"click":function($event){modal7 = true}}},["Full对话框"])," ",_h('button',{staticClass:"btn btn-default",on:{"click":function($event){modal8 = true}}},["Small对话框"])," ",_h('button',{staticClass:"btn btn-default",on:{"click":function($event){modal9 = true}}},["自定义Style"])," ",_h('button',{staticClass:"btn btn-default",on:{"click":function($event){modal10 = true}}},["自定义class-name"])," ",_h('xcui-modal',{directives:[{name:"model",rawName:"v-model",value:(modal7),expression:"modal7"}],attrs:{"size":'full',"title":"Full对话框"},domProps:{"value":(modal7)},on:{"input":function($event){modal7=$event}}},[_h('div',["心宽体肥，宅心仁厚。"])])," ",_h('xcui-modal',{directives:[{name:"model",rawName:"v-model",value:(modal8),expression:"modal8"}],attrs:{"size":'small',"title":"Small对话框"},domProps:{"value":(modal8)},on:{"input":function($event){modal8=$event}}},[_h('div',["即使我小，这世间也会有我的一席之地。因为我小巧玲珑，精灵剔透。"])])," ",_h('xcui-modal',{directives:[{name:"model",rawName:"v-model",value:(modal9),expression:"modal9"}],style:({'transform': 'rotate(-10deg)'}),attrs:{"title":"自定义Style"},domProps:{"value":(modal9)},on:{"input":function($event){modal9=$event}}},[_h('div',["身正不怕影子斜"])])," ",_h('xcui-modal',{directives:[{name:"model",rawName:"v-model",value:(modal10),expression:"modal10"}],attrs:{"title":"自定义class-name","class-name":'xcui-modal-demo-class'},domProps:{"value":(modal10)},on:{"input":function($event){modal10=$event}}},[_h('div',["欲与天公试比高"])])," ",_h('div',["通过设置size可以快速设置对话框的宽度大小，也可以设置class-name和style自定义Modal的样式"])])," ",_m(3)])])," ",_h('h2',["Props"])," ",_m(4)," ",_h('h2',["Events"])," ",_m(5)," ",_h('h2',["Slot"])," ",_m(6)," ",_h('h2',["Modal 全局方法"])," ",_m(7)," ",_h('p',["引入方式一："])," ",_m(8)," ",_h('p',["引入方式二："])," ",_m(9)," ",_h('p',["做好以上准备工作后，即可在组件任何位置调用vm.$confirm等来隐式地创建一个对话框了。"])," ",_m(10)," ",_m(11)," ",_m(12)," ",_m(13)," ",_m(14)," ",_h('p',["写法1："])," ",_m(15)," ",_h('p',["写法2："])," ",_m(16)," ",_m(17)," ",_m(18)])}},
	      staticRenderFns: [function(){with(this){return _h('p',["模态对话框，模拟浏览器的 ",_h('code',["alert"]),"、",_h('code',["confirm"]),"。在浮层中显示，引导用户进行相关操作。",_h('br')," ",_h('code',["Modal"]),"提供了两种用法，基础组件使用和封装好的全局实例调用。"])}},function(){with(this){return _h('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_h('pre',["\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"button"])," ",_h('span',{staticClass:"token attr-name"},["class"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"btn btn-default",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["@click"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"modal1 ",_h('span',{staticClass:"token punctuation"},["="])," true",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"显示对话框",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"button"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-modal"]),"\r\n ",_h('span',{staticClass:"token attr-name"},["v-model"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"modal1",_h('span',{staticClass:"token punctuation"},["\""])]),"\n ",_h('span',{staticClass:"token attr-name"},["title"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"基础弹窗",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"div"]),_h('span',{staticClass:"token punctuation"},[">"])]),"XCUI，做有品质的外卖UI",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"div"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-modal"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"div"]),_h('span',{staticClass:"token punctuation"},[">"])]),"通过控制show来显示/隐藏对话框，需要将show设置为.sync双向绑定",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"div"]),_h('span',{staticClass:"token punctuation"},[">"])])])])}},function(){with(this){return _h('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_h('pre',["\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"button"])," ",_h('span',{staticClass:"token attr-name"},["class"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"btn btn-default",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["@click"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"modal2 ",_h('span',{staticClass:"token punctuation"},["="])," true",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"自定义页头",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"button"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"button"])," ",_h('span',{staticClass:"token attr-name"},["class"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"btn btn-default",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["@click"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"modal3 ",_h('span',{staticClass:"token punctuation"},["="])," true",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"不带标题栏",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"button"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"button"])," ",_h('span',{staticClass:"token attr-name"},["class"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"btn btn-default",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["@click"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"modal4 ",_h('span',{staticClass:"token punctuation"},["="])," true",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"不带关闭按钮",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"button"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"button"])," ",_h('span',{staticClass:"token attr-name"},["class"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"btn btn-default",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["@click"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"modal5 ",_h('span',{staticClass:"token punctuation"},["="])," true",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"不带页脚",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"button"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"button"])," ",_h('span',{staticClass:"token attr-name"},["class"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"btn btn-default",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["@click"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"modal6 ",_h('span',{staticClass:"token punctuation"},["="])," true",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"不带关闭按钮和页脚",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"button"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-modal"]),"\r\n ",_h('span',{staticClass:"token attr-name"},["v-model"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"modal2",_h('span',{staticClass:"token punctuation"},["\""])]),"\n ",_h('span',{staticClass:"token attr-name"},["title"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"自定义页头（有slot则无效）",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"span"])," ",_h('span',{staticClass:"token attr-name"},["slot"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"header",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["class"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"xcui-modal-demo-title",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"不一样的页头",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"span"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"div"]),_h('span',{staticClass:"token punctuation"},[">"])]),"我跟你不一样，我有你没有的头脑",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"div"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-modal"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-modal"]),"\r\n ",_h('span',{staticClass:"token attr-name"},["v-model"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"modal3",_h('span',{staticClass:"token punctuation"},["\""])]),"\n ",_h('span',{staticClass:"token attr-name"},[":show-header"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"false",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"div"]),_h('span',{staticClass:"token punctuation"},[">"])]),"无头骑士。生前是一名勇猛的骑士，由于在战场上不幸阵亡，首级被敌人割去，因此每逢月黑风高的夜晚他便会骑着一匹同为亡灵的马出没于沉睡谷，四处寻找自己遗失的首级；而每当看见与自己生前长相相似者便会斩其头颅带回。",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"div"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-modal"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-modal"]),"\r\n ",_h('span',{staticClass:"token attr-name"},["v-model"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"modal4",_h('span',{staticClass:"token punctuation"},["\""])]),"\n ",_h('span',{staticClass:"token attr-name"},["title"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"不带关闭按钮",_h('span',{staticClass:"token punctuation"},["\""])]),"\n ",_h('span',{staticClass:"token attr-name"},[":show-close-button"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"false",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"div"]),_h('span',{staticClass:"token punctuation"},[">"])]),"不带关闭按钮",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"div"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-modal"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-modal"]),"\r\n ",_h('span',{staticClass:"token attr-name"},["v-model"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"modal5",_h('span',{staticClass:"token punctuation"},["\""])]),"\n ",_h('span',{staticClass:"token attr-name"},["title"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"不带页脚",_h('span',{staticClass:"token punctuation"},["\""])]),"\n ",_h('span',{staticClass:"token attr-name"},[":show-footer"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"false",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"div"]),_h('span',{staticClass:"token punctuation"},[">"])]),"即使我失去了双脚，我依然顶天立地",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"div"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-modal"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-modal"]),"\r\n ",_h('span',{staticClass:"token attr-name"},["v-model"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"modal6",_h('span',{staticClass:"token punctuation"},["\""])]),"\n ",_h('span',{staticClass:"token attr-name"},[":show-close-button"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"false",_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n ",_h('span',{staticClass:"token attr-name"},[":show-footer"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"false",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"div"]),_h('span',{staticClass:"token punctuation"},[">"])]),"我且问你，除了刷新，你能如何关闭我？",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"div"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-modal"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"div"]),_h('span',{staticClass:"token punctuation"},[">"])]),"Modal提供了灵活的组件化API和Slot，可以自由控制整个Modal的组成部分。比如，页头、页脚和关闭按钮",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"div"]),_h('span',{staticClass:"token punctuation"},[">"])])])])}},function(){with(this){return _h('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_h('pre',["\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"button"])," ",_h('span',{staticClass:"token attr-name"},["class"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"btn btn-default",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["@click"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"modal7 ",_h('span',{staticClass:"token punctuation"},["="])," true",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"Full对话框",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"button"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"button"])," ",_h('span',{staticClass:"token attr-name"},["class"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"btn btn-default",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["@click"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"modal8 ",_h('span',{staticClass:"token punctuation"},["="])," true",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"Small对话框",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"button"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"button"])," ",_h('span',{staticClass:"token attr-name"},["class"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"btn btn-default",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["@click"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"modal9 ",_h('span',{staticClass:"token punctuation"},["="])," true",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"自定义Style",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"button"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"button"])," ",_h('span',{staticClass:"token attr-name"},["class"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"btn btn-default",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["@click"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"modal10 ",_h('span',{staticClass:"token punctuation"},["="])," true",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"自定义class-name",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"button"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-modal"]),"\r\n ",_h('span',{staticClass:"token attr-name"},["v-model"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"modal7",_h('span',{staticClass:"token punctuation"},["\""])]),"\n ",_h('span',{staticClass:"token attr-name"},[":size"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),_h('span',{staticClass:"token punctuation"},["'"]),"full",_h('span',{staticClass:"token punctuation"},["'"]),_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n ",_h('span',{staticClass:"token attr-name"},["title"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"Full对话框",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"div"]),_h('span',{staticClass:"token punctuation"},[">"])]),"心宽体肥，宅心仁厚。",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"div"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-modal"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-modal"]),"\r\n ",_h('span',{staticClass:"token attr-name"},["v-model"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"modal8",_h('span',{staticClass:"token punctuation"},["\""])]),"\n ",_h('span',{staticClass:"token attr-name"},[":size"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),_h('span',{staticClass:"token punctuation"},["'"]),"small",_h('span',{staticClass:"token punctuation"},["'"]),_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n ",_h('span',{staticClass:"token attr-name"},["title"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"Small对话框",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"div"]),_h('span',{staticClass:"token punctuation"},[">"])]),"即使我小，这世间也会有我的一席之地。因为我小巧玲珑，精灵剔透。",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"div"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-modal"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-modal"]),"\r\n ",_h('span',{staticClass:"token attr-name"},["v-model"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"modal9",_h('span',{staticClass:"token punctuation"},["\""])]),"\n ",_h('span',{staticClass:"token attr-name"},[":"]),_h('span',{staticClass:"token style-attr language-css"},[_h('span',{staticClass:"token attr-name"},[_h('span',{staticClass:"token attr-name"},["style"])]),_h('span',{staticClass:"token punctuation"},["=\""]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},[_h('span',{staticClass:"token punctuation"},["{"])]),_h('span',{staticClass:"token string"},["'transform'"]),_h('span',{staticClass:"token punctuation"},[":"])," ",_h('span',{staticClass:"token string"},["'rotate(-10deg)'"]),_h('span',{staticClass:"token punctuation"},[_h('span',{staticClass:"token punctuation"},["}"])])]),_h('span',{staticClass:"token punctuation"},["\""])]),"\r\n ",_h('span',{staticClass:"token attr-name"},["title"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"自定义Style",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"div"]),_h('span',{staticClass:"token punctuation"},[">"])]),"身正不怕影子斜",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"div"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-modal"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-modal"]),"\r\n ",_h('span',{staticClass:"token attr-name"},["v-model"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"modal10",_h('span',{staticClass:"token punctuation"},["\""])]),"\n ",_h('span',{staticClass:"token attr-name"},["title"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"自定义class-name",_h('span',{staticClass:"token punctuation"},["\""])]),"\n ",_h('span',{staticClass:"token attr-name"},[":class-name"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),_h('span',{staticClass:"token punctuation"},["'"]),"xcui-modal-demo-class",_h('span',{staticClass:"token punctuation"},["'"]),_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"div"]),_h('span',{staticClass:"token punctuation"},[">"])]),"欲与天公试比高",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"div"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-modal"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"div"]),_h('span',{staticClass:"token punctuation"},[">"])]),"通过设置size可以快速设置对话框的宽度大小，也可以设置class-name和style自定义Modal的样式",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"div"]),_h('span',{staticClass:"token punctuation"},[">"])])])])}},function(){with(this){return _h('table',{staticClass:"table"},[_h('thead',[_h('tr',[_h('th',["名字"])," ",_h('th',["类型"])," ",_h('th',["默认"])," ",_h('th',["描述"])," ",_h('th',["是否必选"])])])," ",_h('tbody',[_h('tr',[_h('td',["show"])," ",_h('td',["Boolean"])," ",_h('td',["false"])," ",_h('td',["对话框是否显示,需要.sync双向绑定"])," ",_h('td',[_h('strong',["必选"])])])," ",_h('tr',[_h('td',["content"])," ",_h('td',["String"])," ",_h('td',["-"])," ",_h('td',["对话框的主体内容，如果使用了默认slot的方式，则content无效"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["title"])," ",_h('td',["String"])," ",_h('td',["-"])," ",_h('td',["对话框的标题，如果slot定义了header，则title无效"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["mask-closable"])," ",_h('td',["Boolean"])," ",_h('td',["true"])," ",_h('td',["是否允许点击遮罩层关闭对话框"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["scrollable"])," ",_h('td',["Boolean"])," ",_h('td',["false"])," ",_h('td',["打开Modal后，是否允许底页可滚动"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["show-close-button"])," ",_h('td',["Boolean"])," ",_h('td',["true"])," ",_h('td',["是否显示右上角的关闭按钮"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["show-ok-button"])," ",_h('td',["Boolean"])," ",_h('td',["true"])," ",_h('td',["是否显示确定按钮"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["show-cancel-button"])," ",_h('td',["Boolean"])," ",_h('td',["true"])," ",_h('td',["是否显示取消按钮"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["show-header"])," ",_h('td',["Boolean"])," ",_h('td',["true"])," ",_h('td',["是否显示整个标题栏"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["show-footer"])," ",_h('td',["Boolean"])," ",_h('td',["true"])," ",_h('td',["是否显示整个底边栏"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["ok-text"])," ",_h('td',["String"])," ",_h('td',["确定"])," ",_h('td',["确定按钮的文字"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["cancel-text"])," ",_h('td',["String"])," ",_h('td',["取消"])," ",_h('td',["取消按钮的文字"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["size"])," ",_h('td',["String"])," ",_h('td',["middle"])," ",_h('td',["预设对话框浮层的宽度大小。可选值：small/middle/large/full"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["class-name"])," ",_h('td',["String"])," ",_h('td',["-"])," ",_h('td',["自定义样式类名"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["style"])," ",_h('td',["object"])," ",_h('td',["-"])," ",_h('td',["设置对话框浮层的样式，调整浮层位置等。该属性设置的是.Modal的样式"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["content-style"])," ",_h('td',["object"])," ",_h('td',["-"])," ",_h('td',["设置对话框内容主体的样式。该属性设置的是.Modal-body的样式"])," ",_h('td',["可选"])])])])}},function(){with(this){return _h('table',{staticClass:"table"},[_h('thead',[_h('tr',[_h('th',["名字"])," ",_h('th',["描述"])," ",_h('th',["是否必选"])])])," ",_h('tbody',[_h('tr',[_h('td',["on-ok"])," ",_h('td',["点击确定的回调函数。回调函数如果返回真值(true)，则不再关闭对话框；如果返回假值(false)或不返回，则默认执行on-ok后关闭对话框"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["on-cancel"])," ",_h('td',["点击取消和右上角关闭的回调函数。回调函数如果返回真值(true)，则不再关闭对话框；如果返回假值(false)或不返回，则默认执行on-cancel后关闭对话框"])," ",_h('td',["可选"])])])])}},function(){with(this){return _h('table',{staticClass:"table"},[_h('thead',[_h('tr',[_h('th',["名字"])," ",_h('th',["描述"])])])," ",_h('tbody',[_h('tr',[_h('td',["header"])," ",_h('td',["自定义页头"])])," ",_h('tr',[_h('td',["footer"])," ",_h('td',["自定义页脚内容"])])," ",_h('tr',[_h('td',["close"])," ",_h('td',["自定义右上角关闭按钮"])])," ",_h('tr',[_h('td',["-"])," ",_h('td',["对话框的主体内容"])])])])}},function(){with(this){return _h('p',["XCUI为Modal提供了便捷的调用方式。在Vue.prototype中添加了快捷的方法：$Modal.show,$Modal.close, $confirm和$alert。因此，在Vue实例代码中，可以使用this.$Modal等方法快捷地创建一个对话框。",_h('br'),"\n但需要在调用这些全局方法之前，先在项目中引入XCUI或xcuiInstall，并调用Vue.use安装。"])}},function(){with(this){return _h('pre',[_h('span',{staticClass:"token keyword"},["import"])," Vue ",_h('span',{staticClass:"token keyword"},["from"])," ",_h('span',{staticClass:"token string"},["'vue'"]),"\n",_h('span',{staticClass:"token keyword"},["import"])," XCUI ",_h('span',{staticClass:"token keyword"},["from"])," ",_h('span',{staticClass:"token string"},["'xcui'"])," ",_h('span',{staticClass:"token comment",attrs:{"spellcheck":"true"}},["// 全局引入"]),"\nVue",_h('span',{staticClass:"token punctuation"},["."]),_h('span',{staticClass:"token function"},["use"]),_h('span',{staticClass:"token punctuation"},["("]),"XCUI",_h('span',{staticClass:"token punctuation"},[")"]),"\n"])}},function(){with(this){return _h('pre',[_h('span',{staticClass:"token keyword"},["import"])," Vue ",_h('span',{staticClass:"token keyword"},["from"])," ",_h('span',{staticClass:"token string"},["'vue'"]),"\n",_h('span',{staticClass:"token keyword"},["import"])," ",_h('span',{staticClass:"token punctuation"},["{"]),"xcuiInstall",_h('span',{staticClass:"token punctuation"},["}"])," ",_h('span',{staticClass:"token keyword"},["from"])," ",_h('span',{staticClass:"token string"},["'xcui'"]),"\nVue",_h('span',{staticClass:"token punctuation"},["."]),_h('span',{staticClass:"token function"},["use"]),_h('span',{staticClass:"token punctuation"},["("]),"xcuiInstall",_h('span',{staticClass:"token punctuation"},[")"]),"\n"])}},function(){with(this){return _h('ol',[_h('li',[_h('strong',["this.$Modal.show(options)"])])])}},function(){with(this){return _h('table',{staticClass:"table"},[_h('thead',[_h('tr',[_h('th',["参数"])," ",_h('th',["类型"])," ",_h('th',["默认"])," ",_h('th',["描述"])," ",_h('th',["是否必选"])])])," ",_h('tbody',[_h('tr',[_h('td',["options"])," ",_h('td',["Object"])," ",_h('td',["-"])," ",_h('td',["对话框的参数，属性同props(props.show除外)。注意：使用驼峰式变量名，如",_h('strong',["onOk"]),"，而非on-ok"])," ",_h('td',[_h('strong',["必选"])])])])])}},function(){with(this){return _h('ol',{attrs:{"start":"2"}},[_h('li',[_h('strong',["this.$Modal.close()"])])])}},function(){with(this){return _h('p',[_h('code',["$Modal.close()"]),"提供隐式地关闭对话框全局实例的能力。"])}},function(){with(this){return _h('ol',{attrs:{"start":"3"}},[_h('li',[_h('strong',["this.$confirm(title, content, onOk, onCancel, isRawHTML)"])," 或 ",_h('strong',["this.$confirm(options, isRawHTML)"])])])}},function(){with(this){return _h('table',{staticClass:"table"},[_h('thead',[_h('tr',[_h('th',["参数"])," ",_h('th',["类型"])," ",_h('th',["默认"])," ",_h('th',["描述"])," ",_h('th',["是否必选"])])])," ",_h('tbody',[_h('tr',[_h('td',["title"])," ",_h('td',["String"])," ",_h('td',["-"])," ",_h('td',["对话框的标题"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["content"])," ",_h('td',["String"])," ",_h('td',["-"])," ",_h('td',["对话框的内容，可通过isRawHTML指定是否解析为原生HTML"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["onOk"])," ",_h('td',["Function"])," ",_h('td',["-"])," ",_h('td',["点击确定按钮的回调函数"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["onCancel"])," ",_h('td',["Function"])," ",_h('td',["-"])," ",_h('td',["点击取消按钮或关闭按钮的回调函数"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["options"])," ",_h('td',["Object"])," ",_h('td',["-"])," ",_h('td',["对content(String)是否解析为原生HTML"])," ",_h('td',["可选"])])])])}},function(){with(this){return _h('table',{staticClass:"table"},[_h('thead',[_h('tr',[_h('th',["参数"])," ",_h('th',["类型"])," ",_h('th',["默认"])," ",_h('th',["描述"])," ",_h('th',["是否必选"])])])," ",_h('tbody',[_h('tr',[_h('td',["options"])," ",_h('td',["Object"])," ",_h('td',["-"])," ",_h('td',["对话框的参数，属性同props(props.show除外)。注意：使用驼峰式变量名，如",_h('strong',["onOk"]),"，而非on-ok"])," ",_h('td',[_h('strong',["必选"])])])," ",_h('tr',[_h('td',["isRawHTML"])," ",_h('td',["Boolean"])," ",_h('td',["false"])," ",_h('td',["对options.content(String)是否解析为原生HTML"])," ",_h('td',["可选"])])])])}},function(){with(this){return _h('ol',{attrs:{"start":"4"}},[_h('li',[_h('strong',["this.$alert(content, onOk)"])])])}},function(){with(this){return _h('table',{staticClass:"table"},[_h('thead',[_h('tr',[_h('th',["参数"])," ",_h('th',["类型"])," ",_h('th',["默认"])," ",_h('th',["描述"])," ",_h('th',["是否必选"])])])," ",_h('tbody',[_h('tr',[_h('td',["content"])," ",_h('td',["String"])," ",_h('td',["-"])," ",_h('td',["对话框的内容"])," ",_h('td',[_h('strong',["必选"])])])," ",_h('tr',[_h('td',["onOk"])," ",_h('td',["Function"])," ",_h('td',["-"])," ",_h('td',["点击确定按钮的回调函数"])," ",_h('td',["可选"])])])])}}]
	    };
	  

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(241)

	/* script */
	__vue_exports__ = __webpack_require__(243)

	/* template */
	var __vue_template__ = __webpack_require__(244)
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
	__vue_options__.__file = "/Users/clancyz/Workspace/github/wmfe-xcui-2.0/xcui/src/demos/inputNumber.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-0a120d1a", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-0a120d1a", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] inputNumber.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(242);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-0a120d1a!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./inputNumber.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-0a120d1a!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./inputNumber.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "\n.input-define-class{\n    color: blue;\n    width: 190px;\n    font-size: 20px;\n}\n", ""]);

	// exports


/***/ },
/* 243 */
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
/* 244 */
/***/ function(module, exports) {

	
	    module.exports = {
	      render: function(){with(this){return _h('div',[_h('h1',["InputNumber数字输入框"])," ",_h('h2',["使用场景"])," ",_m(0)," ",_h('h2',["DEMO"])," ",_h('div',{staticClass:"xcui-demo-container col-md-12 col-xs-12 col-lg-12"},[_h('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_h('h3',["InputNumber"])," ",_h('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_h('div',{attrs:{"id":"container"}},[_h('xcui-inputnumber',{attrs:{"max-value":100,"min-value":3,"step":2,"is-disable":false,"text-tips":"请输入整数","size":"small"}})," ",_h('p',["支持键盘输入整数，以2为步长，最小值为3，最大值为100"])," ",_h('br')," ",_h('xcui-inputnumber',{attrs:{"max-value":100,"min-value":-10,"input-value":-1,"step":2,"is-disable":false,"text-tips":"请输入整数","size":"normal"}})," ",_h('p',["支持键盘输入负整数，以2为步长，最小值为-10，最大值为100"])," ",_h('br')," ",_h('xcui-inputnumber',{attrs:{"max-value":100,"min-value":-25,"input-value":6,"step":5,"class-name":"input-define-class","is-disable":true,"size":"large"}})," ",_h('p',["默认值为6，禁止手动输入，以5为步长，最小值为-25，最大值为100，自定义输入框与字体样式"])])])," ",_m(1)])])," ",_h('h2',["Props"])," ",_m(2)])}},
	      staticRenderFns: [function(){with(this){return _h('ul',[_h('li',["数字专用输入框"])," ",_h('li',["支持限制输入整数数字范围"])," ",_h('li',["支持设置增减数字幅度"])," ",_h('li',["支持自定义框内提示文案"])," ",_h('li',["支持自定义输入框样式"])])}},function(){with(this){return _h('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_h('pre',["\r\n\t",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"div"])," ",_h('span',{staticClass:"token attr-name"},["id"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"container",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n\t\t",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-inputnumber"])," ",_h('span',{staticClass:"token attr-name"},[":max-value"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"100",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},[":min-value"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"3",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},[":step"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"2",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},[":is-disable"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"false",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["text-tips"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"请输入整数",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["size"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"small",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-inputnumber"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n\t\t",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"p"]),_h('span',{staticClass:"token punctuation"},[">"])]),"支持键盘输入整数，以2为步长，最小值为3，最大值为100",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"p"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n\t\t",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"br"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n\t\t",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-inputnumber"])," ",_h('span',{staticClass:"token attr-name"},[":max-value"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"100",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},[":min-value"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"-10",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},[":input-value.sync"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"-1",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},[":step"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"2",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},[":is-disable"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"false",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["text-tips"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"请输入整数",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["size"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"normal",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token punctuation"},[">"])]),_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-inputnumber"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n\t\t",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"p"]),_h('span',{staticClass:"token punctuation"},[">"])]),"支持键盘输入负整数，以2为步长，最小值为-10，最大值为100",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"p"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n\t\t",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"br"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n\t\t",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-inputnumber"])," ",_h('span',{staticClass:"token attr-name"},[":max-value"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"100",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},[":min-value"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"-25",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},[":input-value.sync"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"6",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},[":step"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"5",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["class-name"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"input-define-class",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},[":is-disable"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"true",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["size"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"large",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-inputnumber"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n\t\t",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"p"]),_h('span',{staticClass:"token punctuation"},[">"])]),"默认值为6，禁止手动输入，以5为步长，最小值为-25，最大值为100，自定义输入框与字体样式",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"p"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n\t",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"div"]),_h('span',{staticClass:"token punctuation"},[">"])])])])}},function(){with(this){return _h('table',{staticClass:"table"},[_h('thead',[_h('tr',[_h('th',["名字"])," ",_h('th',["类型"])," ",_h('th',["默认"])," ",_h('th',["描述"])," ",_h('th',["是否必选"])," ",_h('th',["可选值"])])])," ",_h('tbody',[_h('tr',[_h('td',["max-value"])," ",_h('td',["Number"])," ",_h('td',["100"])," ",_h('td',["最大值"])," ",_h('td',["可选"])," ",_h('td')])," ",_h('tr',[_h('td',["min-value"])," ",_h('td',["Number"])," ",_h('td',["1"])," ",_h('td',["最小值"])," ",_h('td',["可选"])," ",_h('td')])," ",_h('tr',[_h('td',["input-value"])," ",_h('td',["Number"])," ",_h('td',["空"])," ",_h('td',["默认显示数值"])," ",_h('td',["可选"])," ",_h('td')])," ",_h('tr',[_h('td',["step"])," ",_h('td',["Number"])," ",_h('td',["1"])," ",_h('td',["增减步长"])," ",_h('td',["可选"])," ",_h('td')])," ",_h('tr',[_h('td',["is-disable"])," ",_h('td',["Boolean"])," ",_h('td',["false"])," ",_h('td',["是否禁用键盘输入"])," ",_h('td',["可选"])," ",_h('td',["true,false"])])," ",_h('tr',[_h('td',["class-name"])," ",_h('td',["String"])," ",_h('td',["空字符串"])," ",_h('td',["自定义样式"])," ",_h('td',["可选"])," ",_h('td')])," ",_h('tr',[_h('td',["size"])," ",_h('td',["String"])," ",_h('td',["normal"])," ",_h('td',["可选尺寸"])," ",_h('td',["可选"])," ",_h('td',["large,normal,small"])])," ",_h('tr',[_h('td',["text-tips"])," ",_h('td',["String"])," ",_h('td',["请输入范围内整数"])," ",_h('td',["自定义提示文案"])," ",_h('td',["可选"])," ",_h('td')])])])}}]
	    };
	  

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(246)

	/* script */
	__vue_exports__ = __webpack_require__(248)

	/* template */
	var __vue_template__ = __webpack_require__(249)
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
	__vue_options__.__file = "/Users/clancyz/Workspace/github/wmfe-xcui-2.0/xcui/src/demos/progress.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-d81e42c6", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-d81e42c6", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] progress.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(247);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-d81e42c6!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./progress.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-d81e42c6!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./progress.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "\n.info{\n    float: left;\n    padding-right: 10px;\n}\n", ""]);

	// exports


/***/ },
/* 248 */
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
/* 249 */
/***/ function(module, exports) {

	
	    module.exports = {
	      render: function(){with(this){return _h('div',[_h('h1',["Progress进度条"])," ",_h('h2',["使用场景"])," ",_h('h2',["DEMO"])," ",_h('div',{staticClass:"xcui-demo-container col-md-12 col-xs-12 col-lg-12"},[_h('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_h('h3',["basic"])," ",_h('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_h('xcui-progress',{attrs:{"percent-info":percentInfo,"percent":percent,"show-info":true}})," ",_h('div',{staticStyle:{"width":"200px"}},[_h('xcui-progress',{attrs:{"info-class-name":'info',"percent":percent,"percent-info":'50%',"height":height}})])])," ",_m(0)])])," ",_h('h2',["Props"])," ",_m(1)])}},
	      staticRenderFns: [function(){with(this){return _h('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_h('pre',["\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-progress"])," ",_h('span',{staticClass:"token attr-name"},[":percent-info"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["'"]),"percentInfo",_h('span',{staticClass:"token punctuation"},["'"])])," ",_h('span',{staticClass:"token attr-name"},[":percent"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["'"]),"percent",_h('span',{staticClass:"token punctuation"},["'"])])," ",_h('span',{staticClass:"token attr-name"},[":show-info"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["'"]),"true",_h('span',{staticClass:"token punctuation"},["'"])]),_h('span',{staticClass:"token punctuation"},[">"])]),_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-progress"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"div"]),_h('span',{staticClass:"token style-attr language-css"},[_h('span',{staticClass:"token attr-name"},[" ",_h('span',{staticClass:"token attr-name"},["style"])]),_h('span',{staticClass:"token punctuation"},["=\""]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token property"},["width"]),_h('span',{staticClass:"token punctuation"},[":"]),"200px"]),_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-progress"])," ",_h('span',{staticClass:"token attr-name"},[":info-class-name"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),_h('span',{staticClass:"token punctuation"},["'"]),"info",_h('span',{staticClass:"token punctuation"},["'"]),_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},[":percent"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["'"]),"percent",_h('span',{staticClass:"token punctuation"},["'"])])," ",_h('span',{staticClass:"token attr-name"},[":percent-info"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),_h('span',{staticClass:"token punctuation"},["'"]),"50%",_h('span',{staticClass:"token punctuation"},["'"]),_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},[":height"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["'"]),"height",_h('span',{staticClass:"token punctuation"},["'"])]),_h('span',{staticClass:"token punctuation"},[">"])]),_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-progress"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"div"]),_h('span',{staticClass:"token punctuation"},[">"])])])])}},function(){with(this){return _h('table',{staticClass:"table"},[_h('thead',[_h('tr',[_h('th',["名字"])," ",_h('th',["类型"])," ",_h('th',["默认"])," ",_h('th',["描述"])," ",_h('th',["是否必选"])])])," ",_h('tbody',[_h('tr',[_h('td',["percent-info"])," ",_h('td',["Number"])," ",_h('td',["0"])," ",_h('td',["百分比"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["height"])," ",_h('td',["Number"])," ",_h('td',["10"])," ",_h('td',["高度"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["show-info"])," ",_h('td',["Boolean"])," ",_h('td',["false"])," ",_h('td',["是否展示信息"])," ",_h('td',["可选"])])])])}}]
	    };
	  

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(251)

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
	__vue_options__.__file = "/Users/clancyz/Workspace/github/wmfe-xcui-2.0/xcui/src/demos/pageloading.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-35190c8d", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-35190c8d", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] pageloading.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _pageloading = __webpack_require__(112);

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
/* 252 */
/***/ function(module, exports) {

	
	    module.exports = {
	      render: function(){with(this){return _h('div',[_h('h1',["PageLoading页面加载进度条"])," ",_h('h2',["使用场景"])," ",_m(0)," ",_h('h2',["DEMO"])," ",_h('div',{staticClass:"xcui-demo-container col-md-12 col-xs-12 col-lg-12"},[_h('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_h('h3',["顶部加载条"])," ",_h('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_h('xcui-pageloading',{ref:"pageLoading"})," ",_h('div',{staticClass:"form-group"},[_h('button',{staticClass:"btn btn-primary",on:{"click":start}},["start"])," ",_h('button',{staticClass:"btn btn-primary",on:{"click":done}},["done"])," ",_h('button',{staticClass:"btn btn-primary",on:{"click":inc}},["inc"])," ",_h('button',{staticClass:"btn btn-primary",on:{"click":setPercent}},["set"])])," ",_h('div',{staticClass:"input-group"},[_h('input',{directives:[{name:"model",rawName:"v-model",value:(toppercent),expression:"toppercent"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"设置进度条速度"},domProps:{"value":_s(toppercent)},on:{"input":function($event){if($event.target.composing)return;toppercent=$event.target.value}}})])])," ",_m(1)])])," ",_h('h2',["Props"])," ",_m(2)," ",_h('h2',["Methods"])," ",_m(3)," ",_h('h3',["方法调用"])," ",_h('blockquote',[_h('ul',[_h('li',["this.$refs.pageLoading.start();"])," ",_h('li',["this.$refs.pageLoading.done();"])," ",_h('li',["this.$refs.pageLoading.set(0.5);"])," ",_h('li',["this.$refs.pageLoading.inc();"])])])," ",_h('p',["备注：先执行set(0.X)，再执行inc()，即可看到inc的执行效果"])])}},
	      staticRenderFns: [function(){with(this){return _h('ul',[_h('li',["路由页面切换时提供顶部加载进度条。"])])}},function(){with(this){return _h('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_h('pre',["\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-pageloading"])," ",_h('span',{staticClass:"token attr-name"},["ref"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"pageLoading",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-pageloading"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"div"])," ",_h('span',{staticClass:"token attr-name"},["class"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"form-group",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n     ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"button"])," ",_h('span',{staticClass:"token attr-name"},["class"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"btn btn-primary",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["@click"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"start",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"start",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"button"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n     ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"button"])," ",_h('span',{staticClass:"token attr-name"},["class"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"btn btn-primary",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["@click"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"done",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"done",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"button"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n     ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"button"])," ",_h('span',{staticClass:"token attr-name"},["class"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"btn btn-primary",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["@click"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"inc",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"inc",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"button"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n     ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"button"])," ",_h('span',{staticClass:"token attr-name"},["class"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"btn btn-primary",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["@click"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"setPercent",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"set",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"button"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"div"]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"div"])," ",_h('span',{staticClass:"token attr-name"},["class"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"input-group",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),"\r\n     ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"input"])," ",_h('span',{staticClass:"token attr-name"},["type"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"text",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["class"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"form-control",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["v-model"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"toppercent",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["placeholder"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"设置进度条速度",_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},["/>"])]),"\r\n ",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"div"]),_h('span',{staticClass:"token punctuation"},[">"])])])])}},function(){with(this){return _h('table',{staticClass:"table"},[_h('thead',[_h('tr',[_h('th',["名字"])," ",_h('th',["类型"])," ",_h('th',["默认"])," ",_h('th',["描述"])," ",_h('th',["是否必选"])])])," ",_h('tbody',[_h('tr',[_h('td',["speed"])," ",_h('td',["Number"])," ",_h('td',["350"])," ",_h('td',["速度"])," ",_h('td',["可选"])])])])}},function(){with(this){return _h('table',{staticClass:"table"},[_h('thead',[_h('tr',[_h('th',["名字"])," ",_h('th',["类型"])," ",_h('th',["默认"])," ",_h('th',["描述"])," ",_h('th',["是否必选"])])])," ",_h('tbody',[_h('tr',[_h('td',["start"])," ",_h('td',["function"])," ",_h('td',["-"])," ",_h('td',["开始"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["done"])," ",_h('td',["function"])," ",_h('td',["-"])," ",_h('td',["结束"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["set"])," ",_h('td',["function"])," ",_h('td',["0.08"])," ",_h('td',["设置进度条进度，取值范围（0.08 ~ 1）"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["inc"])," ",_h('td',["function"])," ",_h('td',["-"])," ",_h('td',["增加一小段进度"])," ",_h('td',["可选"])])])])}}]
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
	__vue_options__.__file = "/Users/clancyz/Workspace/github/wmfe-xcui-2.0/xcui/src/demos/scrolltop.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-3266cca8", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-3266cca8", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] scrolltop.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(255);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3266cca8!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./scrolltop.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3266cca8!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./scrolltop.vue");
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

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "\n#content1{\n\theight: 100px;\n\twidth: 1000px;\n}\n#content2{\n\theight: 700px;\n\twidth: 1000px;\n}\n.scrolltop-define-class{\n\tcolor:red;\n\tfont-size:10px;\n}\n", ""]);

	// exports


/***/ },
/* 256 */
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
/* 257 */
/***/ function(module, exports) {

	
	    module.exports = {
	      render: function(){with(this){return _h('div',[_h('h1',["ScrollTop返回顶部按钮"])," ",_h('h2',["使用场景"])," ",_m(0)," ",_h('h2',["DEMO"])," ",_h('div',{staticClass:"xcui-demo-container col-md-12 col-xs-12 col-lg-12"},[_h('div',{staticClass:"col-md-12 col-xs-12 col-lg-12 xcui-example-container"},[_h('h3',["基本使用"])," ",_h('div',{staticClass:"xcui-demo-wrap col-xs-12 col-md-6 col-lg-6"},[_h('xcui-scrolltop',{attrs:{"target-element":"","during":60,"class-name":""},on:{"finish":finishBack}})])," ",_m(1)])])," ",_h('h2',["Props"])," ",_m(2)])}},
	      staticRenderFns: [function(){with(this){return _h('ul',[_h('li',["对应长页面提供可返回顶部按钮"])," ",_h('li',["支持设置返回位置定位元素"])," ",_h('li',["支持设置滚动间隔速度"])," ",_h('li',["支持用户拖拽按钮位置"])," ",_h('li',["支持获取回调事件设置函数"])," ",_h('li',["支持自定义按钮样式"])])}},function(){with(this){return _h('div',{staticClass:"xcui-code-wrap col-xs-12 col-md-6 col-lg-6"},[_h('pre',["\r\n\t",_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["<"]),"xcui-scrolltop"])," ",_h('span',{staticClass:"token attr-name"},["target-element"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},[":during"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"60",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["@finish"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),"finishBack",_h('span',{staticClass:"token punctuation"},["\""])])," ",_h('span',{staticClass:"token attr-name"},["class-name"]),_h('span',{staticClass:"token attr-value"},[_h('span',{staticClass:"token punctuation"},["="]),_h('span',{staticClass:"token punctuation"},["\""]),_h('span',{staticClass:"token punctuation"},["\""])]),_h('span',{staticClass:"token punctuation"},[">"])]),_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token tag"},[_h('span',{staticClass:"token punctuation"},["</"]),"xcui-scrolltop"]),_h('span',{staticClass:"token punctuation"},[">"])])])])}},function(){with(this){return _h('table',{staticClass:"table"},[_h('thead',[_h('tr',[_h('th',["名字"])," ",_h('th',["类型"])," ",_h('th',["默认"])," ",_h('th',["描述"])," ",_h('th',["是否必选"])])])," ",_h('tbody',[_h('tr',[_h('td',["during"])," ",_h('td',["Number"])," ",_h('td',["50"])," ",_h('td',["滚动持续间隔，值越小完成滚动越快"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["target-element"])," ",_h('td',["String"])," ",_h('td',["空字符串"])," ",_h('td',["定位元素ID名称，返回指定元素顶部"])," ",_h('td',["可选，此属性未赋值时，返回页面顶部"])])," ",_h('tr',[_h('td',["finish"])," ",_h('td',["Function"])," ",_h('td')," ",_h('td',["返回顶部完成，事件回调"])," ",_h('td',["可选"])])," ",_h('tr',[_h('td',["class-name"])," ",_h('td',["String"])," ",_h('td',["空字符串"])," ",_h('td',["自定义样式"])," ",_h('td',["可选"])])])])}}]
	    };
	  

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', [_vm._h('div', {
	    attrs: {
	      "id": "header"
	    }
	  }, [_vm._h('router-link', {
	    staticClass: "logo",
	    attrs: {
	      "to": "home"
	    }
	  }, [_vm._h('img', {
	    attrs: {
	      "src": _vm.logoUrl
	    }
	  }), "\n            XCUI Components\n        "])]), " ", _vm._h('router-view')])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-d414fbc0", module.exports)
	  }
	}

/***/ }
/******/ ]);