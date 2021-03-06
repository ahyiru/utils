(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("utils", [], factory);
	else if(typeof exports === 'object')
		exports["utils"] = factory();
	else
		root["utils"] = factory();
})(this, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 4933:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isCallable = __webpack_require__(6291);
var tryToString = __webpack_require__(7073);

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ 8209:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isConstructor = __webpack_require__(1814);
var tryToString = __webpack_require__(7073);

var $TypeError = TypeError;

// `Assert: IsConstructor(argument) is true`
module.exports = function (argument) {
  if (isConstructor(argument)) return argument;
  throw $TypeError(tryToString(argument) + ' is not a constructor');
};


/***/ }),

/***/ 5822:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(6802);
var create = __webpack_require__(2275);
var defineProperty = (__webpack_require__(6462).f);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  defineProperty(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ 4905:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(2366);

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ 5029:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(678);
var toAbsoluteIndex = __webpack_require__(6971);
var lengthOfArrayLike = __webpack_require__(4821);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ 650:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(936);

module.exports = uncurryThis([].slice);


/***/ }),

/***/ 5489:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(936);

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ 486:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(8171);
var isCallable = __webpack_require__(6291);
var classofRaw = __webpack_require__(5489);
var wellKnownSymbol = __webpack_require__(6802);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ 2149:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(3927);
var aCallable = __webpack_require__(4933);
var anObject = __webpack_require__(4905);

// https://github.com/tc39/collection-methods
module.exports = function addAll(/* ...elements */) {
  var set = anObject(this);
  var adder = aCallable(set.add);
  for (var k = 0, len = arguments.length; k < len; k++) {
    call(adder, set, arguments[k]);
  }
  return set;
};


/***/ }),

/***/ 7247:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(3927);
var aCallable = __webpack_require__(4933);
var anObject = __webpack_require__(4905);

// https://github.com/tc39/collection-methods
module.exports = function deleteAll(/* ...elements */) {
  var collection = anObject(this);
  var remover = aCallable(collection['delete']);
  var allDeleted = true;
  var wasDeleted;
  for (var k = 0, len = arguments.length; k < len; k++) {
    wasDeleted = call(remover, collection, arguments[k]);
    allDeleted = allDeleted && wasDeleted;
  }
  return !!allDeleted;
};


/***/ }),

/***/ 6810:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var hasOwn = __webpack_require__(8382);
var ownKeys = __webpack_require__(2466);
var getOwnPropertyDescriptorModule = __webpack_require__(8117);
var definePropertyModule = __webpack_require__(6462);

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ 430:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(1502);
var definePropertyModule = __webpack_require__(6462);
var createPropertyDescriptor = __webpack_require__(6034);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 6034:
/***/ (function(module) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 5850:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isCallable = __webpack_require__(6291);
var definePropertyModule = __webpack_require__(6462);
var makeBuiltIn = __webpack_require__(7192);
var defineGlobalProperty = __webpack_require__(1756);

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),

/***/ 1756:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(5001);

// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ 1502:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(5061);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ 6009:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(5001);
var isObject = __webpack_require__(2366);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ 311:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var userAgent = __webpack_require__(9966);

module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);


/***/ }),

/***/ 566:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(5489);
var global = __webpack_require__(5001);

module.exports = classof(global.process) == 'process';


/***/ }),

/***/ 9966:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(3425);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ 2821:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(5001);
var userAgent = __webpack_require__(9966);

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ 2089:
/***/ (function(module) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ 9638:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(5001);
var getOwnPropertyDescriptor = (__webpack_require__(8117).f);
var createNonEnumerableProperty = __webpack_require__(430);
var defineBuiltIn = __webpack_require__(5850);
var defineGlobalProperty = __webpack_require__(1756);
var copyConstructorProperties = __webpack_require__(6810);
var isForced = __webpack_require__(1092);

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ 5061:
/***/ (function(module) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ 5494:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__(8483);

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;

// eslint-disable-next-line es-x/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});


/***/ }),

/***/ 9918:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(936);
var aCallable = __webpack_require__(4933);
var NATIVE_BIND = __webpack_require__(8483);

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ 8483:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(5061);

module.exports = !fails(function () {
  // eslint-disable-next-line es-x/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ 3927:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__(8483);

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ 9873:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(1502);
var hasOwn = __webpack_require__(8382);

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ 936:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__(8483);

var FunctionPrototype = Function.prototype;
var bind = FunctionPrototype.bind;
var call = FunctionPrototype.call;
var uncurryThis = NATIVE_BIND && bind.bind(call, call);

module.exports = NATIVE_BIND ? function (fn) {
  return fn && uncurryThis(fn);
} : function (fn) {
  return fn && function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ 3425:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(5001);
var isCallable = __webpack_require__(6291);

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ 6354:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(486);
var getMethod = __webpack_require__(3815);
var Iterators = __webpack_require__(501);
var wellKnownSymbol = __webpack_require__(6802);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || Iterators[classof(it)];
};


/***/ }),

/***/ 8437:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var call = __webpack_require__(3927);
var aCallable = __webpack_require__(4933);
var anObject = __webpack_require__(4905);
var tryToString = __webpack_require__(7073);
var getIteratorMethod = __webpack_require__(6354);

var $TypeError = TypeError;

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  throw $TypeError(tryToString(argument) + ' is not iterable');
};


/***/ }),

/***/ 3815:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var aCallable = __webpack_require__(4933);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};


/***/ }),

/***/ 9922:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var call = __webpack_require__(3927);

module.exports = function (it) {
  // eslint-disable-next-line es-x/no-set -- safe
  return call(Set.prototype.values, it);
};


/***/ }),

/***/ 5001:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es-x/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ 8382:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(936);
var toObject = __webpack_require__(7615);

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es-x/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ 2499:
/***/ (function(module) {

module.exports = {};


/***/ }),

/***/ 2118:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(3425);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ 7788:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(1502);
var fails = __webpack_require__(5061);
var createElement = __webpack_require__(6009);

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ 2901:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(936);
var fails = __webpack_require__(5061);
var classof = __webpack_require__(5489);

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),

/***/ 685:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(936);
var isCallable = __webpack_require__(6291);
var store = __webpack_require__(9982);

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ 684:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(7650);
var global = __webpack_require__(5001);
var uncurryThis = __webpack_require__(936);
var isObject = __webpack_require__(2366);
var createNonEnumerableProperty = __webpack_require__(430);
var hasOwn = __webpack_require__(8382);
var shared = __webpack_require__(9982);
var sharedKey = __webpack_require__(1695);
var hiddenKeys = __webpack_require__(2499);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = uncurryThis(store.get);
  var wmhas = uncurryThis(store.has);
  var wmset = uncurryThis(store.set);
  set = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget(store, it) || {};
  };
  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ 5557:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(6802);
var Iterators = __webpack_require__(501);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ 6291:
/***/ (function(module) {

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ 1814:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(936);
var fails = __webpack_require__(5061);
var isCallable = __webpack_require__(6291);
var classof = __webpack_require__(486);
var getBuiltIn = __webpack_require__(3425);
var inspectSource = __webpack_require__(685);

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;


/***/ }),

/***/ 1092:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(5061);
var isCallable = __webpack_require__(6291);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ 2366:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isCallable = __webpack_require__(6291);

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ 13:
/***/ (function(module) {

module.exports = false;


/***/ }),

/***/ 6448:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(3425);
var isCallable = __webpack_require__(6291);
var isPrototypeOf = __webpack_require__(6282);
var USE_SYMBOL_AS_UID = __webpack_require__(7558);

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ 8971:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var bind = __webpack_require__(9918);
var call = __webpack_require__(3927);
var anObject = __webpack_require__(4905);
var tryToString = __webpack_require__(7073);
var isArrayIteratorMethod = __webpack_require__(5557);
var lengthOfArrayLike = __webpack_require__(4821);
var isPrototypeOf = __webpack_require__(6282);
var getIterator = __webpack_require__(8437);
var getIteratorMethod = __webpack_require__(6354);
var iteratorClose = __webpack_require__(9200);

var $TypeError = TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw $TypeError(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  } return new Result(false);
};


/***/ }),

/***/ 9200:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var call = __webpack_require__(3927);
var anObject = __webpack_require__(4905);
var getMethod = __webpack_require__(3815);

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};


/***/ }),

/***/ 501:
/***/ (function(module) {

module.exports = {};


/***/ }),

/***/ 4821:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toLength = __webpack_require__(4479);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ 7192:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(5061);
var isCallable = __webpack_require__(6291);
var hasOwn = __webpack_require__(8382);
var DESCRIPTORS = __webpack_require__(1502);
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(9873).CONFIGURABLE);
var inspectSource = __webpack_require__(685);
var InternalStateModule = __webpack_require__(684);

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (String(name).slice(0, 7) === 'Symbol(') {
    name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),

/***/ 1367:
/***/ (function(module) {

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es-x/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),

/***/ 9262:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable es-x/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(2821);
var fails = __webpack_require__(5061);

// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ 7650:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(5001);
var isCallable = __webpack_require__(6291);
var inspectSource = __webpack_require__(685);

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ 2275:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(4905);
var definePropertiesModule = __webpack_require__(6191);
var enumBugKeys = __webpack_require__(2089);
var hiddenKeys = __webpack_require__(2499);
var html = __webpack_require__(2118);
var documentCreateElement = __webpack_require__(6009);
var sharedKey = __webpack_require__(1695);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es-x/no-object-create -- safe
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};


/***/ }),

/***/ 6191:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(1502);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(5780);
var definePropertyModule = __webpack_require__(6462);
var anObject = __webpack_require__(4905);
var toIndexedObject = __webpack_require__(678);
var objectKeys = __webpack_require__(9749);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es-x/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),

/***/ 6462:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(1502);
var IE8_DOM_DEFINE = __webpack_require__(7788);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(5780);
var anObject = __webpack_require__(4905);
var toPropertyKey = __webpack_require__(1030);

var $TypeError = TypeError;
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 8117:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(1502);
var call = __webpack_require__(3927);
var propertyIsEnumerableModule = __webpack_require__(9265);
var createPropertyDescriptor = __webpack_require__(6034);
var toIndexedObject = __webpack_require__(678);
var toPropertyKey = __webpack_require__(1030);
var hasOwn = __webpack_require__(8382);
var IE8_DOM_DEFINE = __webpack_require__(7788);

// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ 9219:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(3855);
var enumBugKeys = __webpack_require__(2089);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es-x/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ 2822:
/***/ (function(__unused_webpack_module, exports) {

// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 6282:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(936);

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ 3855:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(936);
var hasOwn = __webpack_require__(8382);
var toIndexedObject = __webpack_require__(678);
var indexOf = (__webpack_require__(5029).indexOf);
var hiddenKeys = __webpack_require__(2499);

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ 9749:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(3855);
var enumBugKeys = __webpack_require__(2089);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es-x/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ 9265:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ 379:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var call = __webpack_require__(3927);
var isCallable = __webpack_require__(6291);
var isObject = __webpack_require__(2366);

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw $TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 2466:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(3425);
var uncurryThis = __webpack_require__(936);
var getOwnPropertyNamesModule = __webpack_require__(9219);
var getOwnPropertySymbolsModule = __webpack_require__(2822);
var anObject = __webpack_require__(4905);

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ 4475:
/***/ (function(module) {

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ 1695:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var shared = __webpack_require__(6809);
var uid = __webpack_require__(1050);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ 9982:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(5001);
var defineGlobalProperty = __webpack_require__(1756);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || defineGlobalProperty(SHARED, {});

module.exports = store;


/***/ }),

/***/ 6809:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var IS_PURE = __webpack_require__(13);
var store = __webpack_require__(9982);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.23.5',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '?? 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.23.5/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ 3571:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__(4905);
var aConstructor = __webpack_require__(8209);
var wellKnownSymbol = __webpack_require__(6802);

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aConstructor(S);
};


/***/ }),

/***/ 8680:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(5001);
var apply = __webpack_require__(5494);
var bind = __webpack_require__(9918);
var isCallable = __webpack_require__(6291);
var hasOwn = __webpack_require__(8382);
var fails = __webpack_require__(5061);
var html = __webpack_require__(2118);
var arraySlice = __webpack_require__(650);
var createElement = __webpack_require__(6009);
var validateArgumentsLength = __webpack_require__(7427);
var IS_IOS = __webpack_require__(311);
var IS_NODE = __webpack_require__(566);

var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var Dispatch = global.Dispatch;
var Function = global.Function;
var MessageChannel = global.MessageChannel;
var String = global.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var location, defer, channel, port;

try {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  location = global.location;
} catch (error) { /* empty */ }

var run = function (id) {
  if (hasOwn(queue, id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(String(id), location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(handler) {
    validateArgumentsLength(arguments.length, 1);
    var fn = isCallable(handler) ? handler : Function(handler);
    var args = arraySlice(arguments, 1);
    queue[++counter] = function () {
      apply(fn, undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (IS_NODE) {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    isCallable(global.postMessage) &&
    !global.importScripts &&
    location && location.protocol !== 'file:' &&
    !fails(post)
  ) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),

/***/ 6971:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(9398);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ 678:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(2901);
var requireObjectCoercible = __webpack_require__(4475);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ 9398:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var trunc = __webpack_require__(1367);

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ 4479:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(9398);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ 7615:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(4475);

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ 6973:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var call = __webpack_require__(3927);
var isObject = __webpack_require__(2366);
var isSymbol = __webpack_require__(6448);
var getMethod = __webpack_require__(3815);
var ordinaryToPrimitive = __webpack_require__(379);
var wellKnownSymbol = __webpack_require__(6802);

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ 1030:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toPrimitive = __webpack_require__(6973);
var isSymbol = __webpack_require__(6448);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ 8171:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(6802);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ 9284:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(486);

var $String = String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};


/***/ }),

/***/ 7073:
/***/ (function(module) {

var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ 1050:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(936);

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ 7558:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable es-x/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(9262);

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ 5780:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(1502);
var fails = __webpack_require__(5061);

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});


/***/ }),

/***/ 7427:
/***/ (function(module) {

var $TypeError = TypeError;

module.exports = function (passed, required) {
  if (passed < required) throw $TypeError('Not enough arguments');
  return passed;
};


/***/ }),

/***/ 6802:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(5001);
var shared = __webpack_require__(6809);
var hasOwn = __webpack_require__(8382);
var uid = __webpack_require__(1050);
var NATIVE_SYMBOL = __webpack_require__(9262);
var USE_SYMBOL_AS_UID = __webpack_require__(7558);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ 5093:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(9638);
var $includes = (__webpack_require__(5029).includes);
var fails = __webpack_require__(5061);
var addToUnscopables = __webpack_require__(5822);

// FF99+ bug
var BROKEN_ON_SPARSE = fails(function () {
  return !Array(1).includes();
});

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ 8170:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(9638);
var addAll = __webpack_require__(2149);

// `Set.prototype.addAll` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Set', proto: true, real: true, forced: true }, {
  addAll: addAll
});


/***/ }),

/***/ 6527:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(9638);
var deleteAll = __webpack_require__(7247);

// `Set.prototype.deleteAll` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Set', proto: true, real: true, forced: true }, {
  deleteAll: deleteAll
});


/***/ }),

/***/ 2323:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(9638);
var getBuiltIn = __webpack_require__(3425);
var call = __webpack_require__(3927);
var aCallable = __webpack_require__(4933);
var anObject = __webpack_require__(4905);
var speciesConstructor = __webpack_require__(3571);
var iterate = __webpack_require__(8971);

// `Set.prototype.difference` method
// https://github.com/tc39/proposal-set-methods
$({ target: 'Set', proto: true, real: true, forced: true }, {
  difference: function difference(iterable) {
    var set = anObject(this);
    var newSet = new (speciesConstructor(set, getBuiltIn('Set')))(set);
    var remover = aCallable(newSet['delete']);
    iterate(iterable, function (value) {
      call(remover, newSet, value);
    });
    return newSet;
  }
});


/***/ }),

/***/ 8871:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(9638);
var anObject = __webpack_require__(4905);
var bind = __webpack_require__(9918);
var getSetIterator = __webpack_require__(9922);
var iterate = __webpack_require__(8971);

// `Set.prototype.every` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Set', proto: true, real: true, forced: true }, {
  every: function every(callbackfn /* , thisArg */) {
    var set = anObject(this);
    var iterator = getSetIterator(set);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return !iterate(iterator, function (value, stop) {
      if (!boundFunction(value, value, set)) return stop();
    }, { IS_ITERATOR: true, INTERRUPTED: true }).stopped;
  }
});


/***/ }),

/***/ 7002:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(9638);
var getBuiltIn = __webpack_require__(3425);
var call = __webpack_require__(3927);
var aCallable = __webpack_require__(4933);
var anObject = __webpack_require__(4905);
var bind = __webpack_require__(9918);
var speciesConstructor = __webpack_require__(3571);
var getSetIterator = __webpack_require__(9922);
var iterate = __webpack_require__(8971);

// `Set.prototype.filter` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Set', proto: true, real: true, forced: true }, {
  filter: function filter(callbackfn /* , thisArg */) {
    var set = anObject(this);
    var iterator = getSetIterator(set);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    var newSet = new (speciesConstructor(set, getBuiltIn('Set')))();
    var adder = aCallable(newSet.add);
    iterate(iterator, function (value) {
      if (boundFunction(value, value, set)) call(adder, newSet, value);
    }, { IS_ITERATOR: true });
    return newSet;
  }
});


/***/ }),

/***/ 9684:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(9638);
var anObject = __webpack_require__(4905);
var bind = __webpack_require__(9918);
var getSetIterator = __webpack_require__(9922);
var iterate = __webpack_require__(8971);

// `Set.prototype.find` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Set', proto: true, real: true, forced: true }, {
  find: function find(callbackfn /* , thisArg */) {
    var set = anObject(this);
    var iterator = getSetIterator(set);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return iterate(iterator, function (value, stop) {
      if (boundFunction(value, value, set)) return stop(value);
    }, { IS_ITERATOR: true, INTERRUPTED: true }).result;
  }
});


/***/ }),

/***/ 9977:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(9638);
var getBuiltIn = __webpack_require__(3425);
var call = __webpack_require__(3927);
var aCallable = __webpack_require__(4933);
var anObject = __webpack_require__(4905);
var speciesConstructor = __webpack_require__(3571);
var iterate = __webpack_require__(8971);

// `Set.prototype.intersection` method
// https://github.com/tc39/proposal-set-methods
$({ target: 'Set', proto: true, real: true, forced: true }, {
  intersection: function intersection(iterable) {
    var set = anObject(this);
    var newSet = new (speciesConstructor(set, getBuiltIn('Set')))();
    var hasCheck = aCallable(set.has);
    var adder = aCallable(newSet.add);
    iterate(iterable, function (value) {
      if (call(hasCheck, set, value)) call(adder, newSet, value);
    });
    return newSet;
  }
});


/***/ }),

/***/ 6856:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(9638);
var call = __webpack_require__(3927);
var aCallable = __webpack_require__(4933);
var anObject = __webpack_require__(4905);
var iterate = __webpack_require__(8971);

// `Set.prototype.isDisjointFrom` method
// https://tc39.github.io/proposal-set-methods/#Set.prototype.isDisjointFrom
$({ target: 'Set', proto: true, real: true, forced: true }, {
  isDisjointFrom: function isDisjointFrom(iterable) {
    var set = anObject(this);
    var hasCheck = aCallable(set.has);
    return !iterate(iterable, function (value, stop) {
      if (call(hasCheck, set, value) === true) return stop();
    }, { INTERRUPTED: true }).stopped;
  }
});


/***/ }),

/***/ 1986:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(9638);
var getBuiltIn = __webpack_require__(3425);
var call = __webpack_require__(3927);
var aCallable = __webpack_require__(4933);
var isCallable = __webpack_require__(6291);
var anObject = __webpack_require__(4905);
var getIterator = __webpack_require__(8437);
var iterate = __webpack_require__(8971);

// `Set.prototype.isSubsetOf` method
// https://tc39.github.io/proposal-set-methods/#Set.prototype.isSubsetOf
$({ target: 'Set', proto: true, real: true, forced: true }, {
  isSubsetOf: function isSubsetOf(iterable) {
    var iterator = getIterator(this);
    var otherSet = anObject(iterable);
    var hasCheck = otherSet.has;
    if (!isCallable(hasCheck)) {
      otherSet = new (getBuiltIn('Set'))(iterable);
      hasCheck = aCallable(otherSet.has);
    }
    return !iterate(iterator, function (value, stop) {
      if (call(hasCheck, otherSet, value) === false) return stop();
    }, { IS_ITERATOR: true, INTERRUPTED: true }).stopped;
  }
});


/***/ }),

/***/ 6345:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(9638);
var call = __webpack_require__(3927);
var aCallable = __webpack_require__(4933);
var anObject = __webpack_require__(4905);
var iterate = __webpack_require__(8971);

// `Set.prototype.isSupersetOf` method
// https://tc39.github.io/proposal-set-methods/#Set.prototype.isSupersetOf
$({ target: 'Set', proto: true, real: true, forced: true }, {
  isSupersetOf: function isSupersetOf(iterable) {
    var set = anObject(this);
    var hasCheck = aCallable(set.has);
    return !iterate(iterable, function (value, stop) {
      if (call(hasCheck, set, value) === false) return stop();
    }, { INTERRUPTED: true }).stopped;
  }
});


/***/ }),

/***/ 1463:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(9638);
var uncurryThis = __webpack_require__(936);
var anObject = __webpack_require__(4905);
var toString = __webpack_require__(9284);
var getSetIterator = __webpack_require__(9922);
var iterate = __webpack_require__(8971);

var arrayJoin = uncurryThis([].join);
var push = [].push;

// `Set.prototype.join` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Set', proto: true, real: true, forced: true }, {
  join: function join(separator) {
    var set = anObject(this);
    var iterator = getSetIterator(set);
    var sep = separator === undefined ? ',' : toString(separator);
    var result = [];
    iterate(iterator, push, { that: result, IS_ITERATOR: true });
    return arrayJoin(result, sep);
  }
});


/***/ }),

/***/ 3028:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(9638);
var getBuiltIn = __webpack_require__(3425);
var bind = __webpack_require__(9918);
var call = __webpack_require__(3927);
var aCallable = __webpack_require__(4933);
var anObject = __webpack_require__(4905);
var speciesConstructor = __webpack_require__(3571);
var getSetIterator = __webpack_require__(9922);
var iterate = __webpack_require__(8971);

// `Set.prototype.map` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Set', proto: true, real: true, forced: true }, {
  map: function map(callbackfn /* , thisArg */) {
    var set = anObject(this);
    var iterator = getSetIterator(set);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    var newSet = new (speciesConstructor(set, getBuiltIn('Set')))();
    var adder = aCallable(newSet.add);
    iterate(iterator, function (value) {
      call(adder, newSet, boundFunction(value, value, set));
    }, { IS_ITERATOR: true });
    return newSet;
  }
});


/***/ }),

/***/ 9941:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(9638);
var aCallable = __webpack_require__(4933);
var anObject = __webpack_require__(4905);
var getSetIterator = __webpack_require__(9922);
var iterate = __webpack_require__(8971);

var $TypeError = TypeError;

// `Set.prototype.reduce` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Set', proto: true, real: true, forced: true }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    var set = anObject(this);
    var iterator = getSetIterator(set);
    var noInitial = arguments.length < 2;
    var accumulator = noInitial ? undefined : arguments[1];
    aCallable(callbackfn);
    iterate(iterator, function (value) {
      if (noInitial) {
        noInitial = false;
        accumulator = value;
      } else {
        accumulator = callbackfn(accumulator, value, value, set);
      }
    }, { IS_ITERATOR: true });
    if (noInitial) throw $TypeError('Reduce of empty set with no initial value');
    return accumulator;
  }
});


/***/ }),

/***/ 7590:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(9638);
var anObject = __webpack_require__(4905);
var bind = __webpack_require__(9918);
var getSetIterator = __webpack_require__(9922);
var iterate = __webpack_require__(8971);

// `Set.prototype.some` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Set', proto: true, real: true, forced: true }, {
  some: function some(callbackfn /* , thisArg */) {
    var set = anObject(this);
    var iterator = getSetIterator(set);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return iterate(iterator, function (value, stop) {
      if (boundFunction(value, value, set)) return stop();
    }, { IS_ITERATOR: true, INTERRUPTED: true }).stopped;
  }
});


/***/ }),

/***/ 9223:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(9638);
var getBuiltIn = __webpack_require__(3425);
var call = __webpack_require__(3927);
var aCallable = __webpack_require__(4933);
var anObject = __webpack_require__(4905);
var speciesConstructor = __webpack_require__(3571);
var iterate = __webpack_require__(8971);

// `Set.prototype.symmetricDifference` method
// https://github.com/tc39/proposal-set-methods
$({ target: 'Set', proto: true, real: true, forced: true }, {
  symmetricDifference: function symmetricDifference(iterable) {
    var set = anObject(this);
    var newSet = new (speciesConstructor(set, getBuiltIn('Set')))(set);
    var remover = aCallable(newSet['delete']);
    var adder = aCallable(newSet.add);
    iterate(iterable, function (value) {
      call(remover, newSet, value) || call(adder, newSet, value);
    });
    return newSet;
  }
});


/***/ }),

/***/ 5610:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(9638);
var getBuiltIn = __webpack_require__(3425);
var aCallable = __webpack_require__(4933);
var anObject = __webpack_require__(4905);
var speciesConstructor = __webpack_require__(3571);
var iterate = __webpack_require__(8971);

// `Set.prototype.union` method
// https://github.com/tc39/proposal-set-methods
$({ target: 'Set', proto: true, real: true, forced: true }, {
  union: function union(iterable) {
    var set = anObject(this);
    var newSet = new (speciesConstructor(set, getBuiltIn('Set')))(set);
    iterate(iterable, aCallable(newSet.add), { that: newSet });
    return newSet;
  }
});


/***/ }),

/***/ 6150:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(9638);
var global = __webpack_require__(5001);
var clearImmediate = (__webpack_require__(8680).clear);

// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
$({ global: true, bind: true, enumerable: true, forced: global.clearImmediate !== clearImmediate }, {
  clearImmediate: clearImmediate
});


/***/ }),

/***/ 7282:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove this module from `core-js@4` since it's split to modules listed below
__webpack_require__(6150);
__webpack_require__(1944);


/***/ }),

/***/ 1944:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(9638);
var global = __webpack_require__(5001);
var setImmediate = (__webpack_require__(8680).set);

// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
$({ global: true, bind: true, enumerable: true, forced: global.setImmediate !== setImmediate }, {
  setImmediate: setImmediate
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "a2o": function() { return /* reexport */ utils_a2o; },
  "addAtNext": function() { return /* reexport */ utils_addAtNext; },
  "addAtPos": function() { return /* reexport */ utils_addAtPos; },
  "addClass": function() { return /* reexport */ utils_addClass; },
  "addDays": function() { return /* reexport */ utils_addDays; },
  "addHours": function() { return /* reexport */ utils_addHours; },
  "addMonths": function() { return /* reexport */ utils_addMonths; },
  "addNodes": function() { return /* reexport */ utils_addNodes; },
  "addYears": function() { return /* reexport */ utils_addYears; },
  "arr2Tree": function() { return /* reexport */ utils_arr2Tree; },
  "arr2TreeById": function() { return /* reexport */ utils_arr2TreeById; },
  "arr2TreeByPath": function() { return /* reexport */ utils_arr2TreeByPath; },
  "arr2obj": function() { return /* reexport */ utils_arr2obj; },
  "arr2str": function() { return /* reexport */ utils_arr2str; },
  "base2Ten": function() { return /* reexport */ utils_base2Ten; },
  "baseConversion": function() { return /* reexport */ utils_baseConversion; },
  "baseFetch": function() { return /* reexport */ utils_baseFetch; },
  "cacheData": function() { return /* reexport */ cacheData; },
  "cancelablePromise": function() { return /* reexport */ utils_cancelablePromise; },
  "changePos": function() { return /* reexport */ utils_changePos; },
  "classifyArr": function() { return /* reexport */ utils_classifyArr; },
  "clone": function() { return /* reexport */ utils_clone; },
  "compareVersion": function() { return /* reexport */ utils_compareVersion; },
  "compose": function() { return /* reexport */ utils_compose; },
  "copyToClipboard": function() { return /* reexport */ utils_copyToClipboard; },
  "createElement": function() { return /* reexport */ utils_createElement; },
  "createNode": function() { return /* reexport */ utils_createNode; },
  "createStore": function() { return /* reexport */ utils_createStore; },
  "createTextElement": function() { return /* reexport */ utils_createTextElement; },
  "curry": function() { return /* reexport */ utils_curry; },
  "cyclic": function() { return /* reexport */ cyclic; },
  "dash2camel": function() { return /* reexport */ utils_dash2camel; },
  "debounce": function() { return /* reexport */ utils_debounce; },
  "deleteNodes": function() { return /* reexport */ utils_deleteNodes; },
  "deviceType": function() { return /* reexport */ utils_deviceType; },
  "dlfile": function() { return /* reexport */ utils_dlfile; },
  "editNodes": function() { return /* reexport */ utils_editNodes; },
  "emitter": function() { return /* reexport */ utils_emitter; },
  "equal": function() { return /* reexport */ utils_equal; },
  "escapeHTML": function() { return /* reexport */ utils_escapeHTML; },
  "fetcher": function() { return /* reexport */ utils_fetcher; },
  "filter": function() { return /* reexport */ utils_filter; },
  "filterList": function() { return /* reexport */ utils_filterList; },
  "findMax": function() { return /* reexport */ utils_findMax; },
  "firstUpper": function() { return /* reexport */ utils_firstUpper; },
  "fixRoute": function() { return /* reexport */ utils_fixRoute; },
  "flatten": function() { return /* reexport */ utils_flatten; },
  "formatNum": function() { return /* reexport */ utils_formatNum; },
  "formatPassTime": function() { return /* reexport */ utils_formatPassTime; },
  "formatTime": function() { return /* reexport */ utils_formatTime; },
  "fullScreen": function() { return /* reexport */ utils_fullScreen; },
  "getElementsSize": function() { return /* reexport */ utils_getElementsSize; },
  "getExplore": function() { return /* reexport */ utils_getExplore; },
  "getLeaveTime": function() { return /* reexport */ utils_getLeaveTime; },
  "getMeta": function() { return /* reexport */ utils_getMeta; },
  "getMonthDays": function() { return /* reexport */ utils_getMonthDays; },
  "getOffset": function() { return /* reexport */ utils_getOffset; },
  "getParams": function() { return /* reexport */ utils_getParams; },
  "getPosition": function() { return /* reexport */ utils_getPosition; },
  "getRelative": function() { return /* reexport */ utils_getRelative; },
  "getSelected": function() { return /* reexport */ utils_getSelected; },
  "getTextSize": function() { return /* reexport */ utils_getTextSize; },
  "getTime": function() { return /* reexport */ utils_getTime; },
  "getTouchPosition": function() { return /* reexport */ utils_getTouchPosition; },
  "getType": function() { return /* reexport */ utils_getType; },
  "getValue": function() { return /* reexport */ utils_getValue; },
  "getViewportSize": function() { return /* reexport */ utils_getViewportSize; },
  "hasClass": function() { return /* reexport */ utils_hasClass; },
  "hasProp": function() { return /* reexport */ utils_hasProp; },
  "hex2rgba": function() { return /* reexport */ utils_hex2rgba; },
  "isArray": function() { return /* reexport */ utils_isArray; },
  "isAsync": function() { return /* reexport */ utils_isAsync; },
  "isBrowser": function() { return /* reexport */ utils_isBrowser; },
  "isElement": function() { return /* reexport */ utils_isElement; },
  "isError": function() { return /* reexport */ utils_isError; },
  "isFunction": function() { return /* reexport */ utils_isFunction; },
  "isIE": function() { return /* reexport */ utils_isIE; },
  "isObject": function() { return /* reexport */ utils_isObject; },
  "isReactComp": function() { return /* reexport */ utils_isReactComp; },
  "isReactEle": function() { return /* reexport */ utils_isReactEle; },
  "isRef": function() { return /* reexport */ utils_isRef; },
  "isRegExp": function() { return /* reexport */ utils_isRegExp; },
  "isTouch": function() { return /* reexport */ utils_isTouch; },
  "isUrl": function() { return /* reexport */ utils_isUrl; },
  "isValidArr": function() { return /* reexport */ utils_isValidArr; },
  "isValidObj": function() { return /* reexport */ utils_isValidObj; },
  "isVueEle": function() { return /* reexport */ utils_isVueEle; },
  "json2str": function() { return /* reexport */ utils_json2str; },
  "loop": function() { return /* reexport */ utils_loop; },
  "matchedStr": function() { return /* reexport */ utils_matchedStr; },
  "memoize": function() { return /* reexport */ utils_memoize; },
  "merge": function() { return /* reexport */ utils_merge; },
  "mergeArr": function() { return /* reexport */ utils_mergeArr; },
  "mergeClass": function() { return /* reexport */ utils_mergeClass; },
  "mergeObj": function() { return /* reexport */ utils_mergeObj; },
  "monthDate": function() { return /* reexport */ utils_monthDate; },
  "moveNodes": function() { return /* reexport */ utils_moveNodes; },
  "obj2arr": function() { return /* reexport */ utils_obj2arr; },
  "obj2str": function() { return /* reexport */ utils_obj2str; },
  "omit": function() { return /* reexport */ utils_omit; },
  "once": function() { return /* reexport */ utils_once; },
  "osType": function() { return /* reexport */ utils_osType; },
  "params2data": function() { return /* reexport */ utils_params2data; },
  "params2str": function() { return /* reexport */ utils_params2str; },
  "pick": function() { return /* reexport */ utils_pick; },
  "promisify": function() { return /* reexport */ utils_promisify; },
  "randColor": function() { return /* reexport */ utils_randColor; },
  "randItem": function() { return /* reexport */ utils_randItem; },
  "randNum": function() { return /* reexport */ utils_randNum; },
  "randStr": function() { return /* reexport */ utils_randStr; },
  "randTrue": function() { return /* reexport */ utils_randTrue; },
  "removeClass": function() { return /* reexport */ utils_removeClass; },
  "resize": function() { return /* reexport */ utils_resize; },
  "rgba2hex": function() { return /* reexport */ utils_rgba2hex; },
  "scheduler": function() { return /* reexport */ utils_scheduler; },
  "scrollIsBottom": function() { return /* reexport */ utils_scrollIsBottom; },
  "scrollTo": function() { return /* reexport */ utils_scrollTo; },
  "scrollToAnchor": function() { return /* reexport */ utils_scrollToAnchor; },
  "scrollTop": function() { return /* reexport */ utils_scrollTop; },
  "selectedHandle": function() { return /* reexport */ utils_selectedHandle; },
  "session": function() { return /* reexport */ utils_session; },
  "setMeta": function() { return /* reexport */ utils_setMeta; },
  "setStyle": function() { return /* reexport */ utils_setStyle; },
  "sleep": function() { return /* reexport */ utils_sleep; },
  "sleepSync": function() { return /* reexport */ sleepSync; },
  "sort": function() { return /* reexport */ utils_sort; },
  "sortObj": function() { return /* reexport */ utils_sortObj; },
  "storage": function() { return /* reexport */ utils_storage; },
  "str2Html": function() { return /* reexport */ utils_str2Html; },
  "str2code": function() { return /* reexport */ utils_str2code; },
  "sysLang": function() { return /* reexport */ utils_sysLang; },
  "template": function() { return /* reexport */ utils_template; },
  "ten2Base": function() { return /* reexport */ utils_ten2Base; },
  "throttle": function() { return /* reexport */ utils_throttle; },
  "timeGap": function() { return /* reexport */ utils_timeGap; },
  "timeInterval": function() { return /* reexport */ utils_timeInterval; },
  "timestamp": function() { return /* reexport */ utils_timestamp; },
  "toggleClass": function() { return /* reexport */ utils_toggleClass; },
  "traverItem": function() { return /* reexport */ utils_traverItem; },
  "traverList": function() { return /* reexport */ utils_traverList; },
  "unescapeHTML": function() { return /* reexport */ utils_unescapeHTML; },
  "unique": function() { return /* reexport */ utils_unique; },
  "updateId": function() { return /* reexport */ utils_updateId; },
  "updateNode": function() { return /* reexport */ utils_updateNode; },
  "updateTreeNodes": function() { return /* reexport */ utils_updateTreeNodes; },
  "uuidv4": function() { return /* reexport */ utils_uuidv4; },
  "validObj": function() { return /* reexport */ utils_validObj; },
  "watchScreen": function() { return /* reexport */ utils_watchScreen; },
  "watermark": function() { return /* reexport */ utils_watermark; },
  "weekDate": function() { return /* reexport */ utils_weekDate; },
  "wrapPromise": function() { return /* reexport */ utils_wrapPromise; }
});

;// CONCATENATED MODULE: ../../huxy/utils/a2o.js
const a2o = function (arr) {
  let key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key';
  let value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'value';
  const obj = {};
  (arr || []).map(v => obj[v[key]] = v[value]);
  return obj;
};

/* harmony default export */ var utils_a2o = (a2o);
;// CONCATENATED MODULE: ../../huxy/utils/getType.js
const getType = value => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();

/* harmony default export */ var utils_getType = (getType);
;// CONCATENATED MODULE: ../../huxy/utils/isArray.js


const isArray = value => utils_getType(value) === 'array';

/* harmony default export */ var utils_isArray = (isArray);
;// CONCATENATED MODULE: ../../huxy/utils/selectedHandle.js


const selectedHandle = fn => function (arr, id) {
  let idKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';
  let childKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'children';

  if (!utils_isArray(arr)) {
    return null;
  }

  const selected = function (data) {
    let parentId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    for (let i = 0, l = data.length; i < l; i++) {
      const item = data[i];

      if (item[idKey] === id) {
        return fn(data, i, parentId) || data[i];
      }

      if (utils_isArray(item[childKey])) {
        const selChildren = selected(item[childKey], item[idKey]);

        if (selChildren) {
          return selChildren;
        }
      }
    }
  };

  selected(arr);
  return arr;
};

/* harmony default export */ var utils_selectedHandle = (selectedHandle);
;// CONCATENATED MODULE: ../../huxy/utils/addAtNext.js


const addAtNext = function (tree, id, nodes) {
  let idKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'id';
  let childKey = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'children';
  return utils_selectedHandle((data, index) => data.splice(index, 0, nodes))(tree, id, idKey, childKey);
};

/* harmony default export */ var utils_addAtNext = (addAtNext);
;// CONCATENATED MODULE: ../../huxy/utils/addAtPos.js


const addAtPos = function (tree, id, nodes, pos) {
  let idKey = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'id';
  let childKey = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'children';
  return utils_selectedHandle((data, index) => {
    const item = data[index];

    if (item.children) {
      item.children.splice(pos, 0, nodes);
    } else {
      item.children = [nodes];
    }
  })(tree, id, idKey, childKey);
};

/* harmony default export */ var utils_addAtPos = (addAtPos);
// EXTERNAL MODULE: ../../../node_modules/core-js/modules/esnext.set.add-all.js
var esnext_set_add_all = __webpack_require__(8170);
// EXTERNAL MODULE: ../../../node_modules/core-js/modules/esnext.set.delete-all.js
var esnext_set_delete_all = __webpack_require__(6527);
// EXTERNAL MODULE: ../../../node_modules/core-js/modules/esnext.set.difference.js
var esnext_set_difference = __webpack_require__(2323);
// EXTERNAL MODULE: ../../../node_modules/core-js/modules/esnext.set.every.js
var esnext_set_every = __webpack_require__(8871);
// EXTERNAL MODULE: ../../../node_modules/core-js/modules/esnext.set.filter.js
var esnext_set_filter = __webpack_require__(7002);
// EXTERNAL MODULE: ../../../node_modules/core-js/modules/esnext.set.find.js
var esnext_set_find = __webpack_require__(9684);
// EXTERNAL MODULE: ../../../node_modules/core-js/modules/esnext.set.intersection.js
var esnext_set_intersection = __webpack_require__(9977);
// EXTERNAL MODULE: ../../../node_modules/core-js/modules/esnext.set.is-disjoint-from.js
var esnext_set_is_disjoint_from = __webpack_require__(6856);
// EXTERNAL MODULE: ../../../node_modules/core-js/modules/esnext.set.is-subset-of.js
var esnext_set_is_subset_of = __webpack_require__(1986);
// EXTERNAL MODULE: ../../../node_modules/core-js/modules/esnext.set.is-superset-of.js
var esnext_set_is_superset_of = __webpack_require__(6345);
// EXTERNAL MODULE: ../../../node_modules/core-js/modules/esnext.set.join.js
var esnext_set_join = __webpack_require__(1463);
// EXTERNAL MODULE: ../../../node_modules/core-js/modules/esnext.set.map.js
var esnext_set_map = __webpack_require__(3028);
// EXTERNAL MODULE: ../../../node_modules/core-js/modules/esnext.set.reduce.js
var esnext_set_reduce = __webpack_require__(9941);
// EXTERNAL MODULE: ../../../node_modules/core-js/modules/esnext.set.some.js
var esnext_set_some = __webpack_require__(7590);
// EXTERNAL MODULE: ../../../node_modules/core-js/modules/esnext.set.symmetric-difference.js
var esnext_set_symmetric_difference = __webpack_require__(9223);
// EXTERNAL MODULE: ../../../node_modules/core-js/modules/esnext.set.union.js
var esnext_set_union = __webpack_require__(5610);
;// CONCATENATED MODULE: ../../huxy/utils/isElement.js


const isElement = value => utils_getType(value).indexOf('element') > -1;

/* harmony default export */ var utils_isElement = (isElement);
;// CONCATENATED MODULE: ../../huxy/utils/addClass.js


















const addClass = function (ele) {
  let name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (!utils_isElement(ele)) {
    return;
  }

  const nameArr = name.split(' ').filter(Boolean);
  const targetName = ele.className.split(' ');
  const names = [...new Set([...nameArr, ...targetName])];
  ele.className = names.join(' ');
};

/* harmony default export */ var utils_addClass = (addClass);
;// CONCATENATED MODULE: ../../huxy/utils/addDays.js
const addDays = function (n) {
  let d = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  const newDate = new Date(d);
  newDate.setDate(newDate.getDate() + n);
  return newDate;
};

/* harmony default export */ var utils_addDays = (addDays);
;// CONCATENATED MODULE: ../../huxy/utils/addHours.js
const addHours = function (n) {
  let d = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  const newDate = new Date(d);
  newDate.setHours(newDate.getHours() + n);
  return newDate;
};

/* harmony default export */ var utils_addHours = (addHours);
;// CONCATENATED MODULE: ../../huxy/utils/addMonths.js
const addMonths = function (n) {
  let d = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  const newDate = new Date(d);
  newDate.setMonth(newDate.getMonth() + n);
  return newDate;
};

/* harmony default export */ var utils_addMonths = (addMonths);
;// CONCATENATED MODULE: ../../huxy/utils/addNodes.js


const addNodes = function (tree, id, nodes) {
  let idKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'id';
  let childKey = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'children';
  return utils_selectedHandle((data, index) => {
    const item = data[index];
    item[childKey] = [...(item[childKey] || []), ...nodes];
    return item;
  })(tree, id, idKey, childKey);
};

/* harmony default export */ var utils_addNodes = (addNodes);
;// CONCATENATED MODULE: ../../huxy/utils/addYears.js
const addYears = function (n) {
  let d = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  const newDate = new Date(d);
  newDate.setFullYear(newDate.getFullYear() + n);
  return newDate;
};

/* harmony default export */ var utils_addYears = (addYears);
;// CONCATENATED MODULE: ../../huxy/utils/arr2obj.js
const arr2obj = function () {
  let arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'name';
  const obj = {};
  arr.map(_ref => {
    let {
      [name]: key,
      value
    } = _ref;
    return obj[key] = value;
  });
  return obj;
};

/* harmony default export */ var utils_arr2obj = (arr2obj);
;// CONCATENATED MODULE: ../../huxy/utils/isObject.js


const isObject = value => utils_getType(value) === 'object';

/* harmony default export */ var utils_isObject = (isObject);
;// CONCATENATED MODULE: ../../huxy/utils/obj2str.js



const obj2str = function () {
  let obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let objStr = '';
  Object.keys(obj).map(key => {
    const item = obj[key];
    objStr = objStr ? `${objStr}, ` : objStr;

    if (utils_isObject(item)) {
      objStr += `${key}=${obj2str(item)}`;
    } else if (Array.isArray(item)) {
      objStr += `${key}=${utils_arr2str(item)}`;
    } else {
      objStr += `${key}=${item}`;
    }
  });
  return `{${objStr}}`;
};

/* harmony default export */ var utils_obj2str = (obj2str);
;// CONCATENATED MODULE: ../../huxy/utils/arr2str.js



const arr2str = function () {
  let arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let arrStr = '';
  arr.map(item => {
    arrStr = arrStr ? `${arrStr}, ` : arrStr;

    if (utils_isObject(item)) {
      arrStr += utils_obj2str(item);
    } else if (Array.isArray(item)) {
      arrStr += arr2str(item);
    } else {
      arrStr += `${item}`;
    }
  });
  return `[${arrStr}]`;
};

/* harmony default export */ var utils_arr2str = (arr2str);
;// CONCATENATED MODULE: ../../../node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// EXTERNAL MODULE: ../../../node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(5093);
;// CONCATENATED MODULE: ../../huxy/utils/arr2Tree.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



const arr2Tree = fn => function (arr) {
  let idKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'id';
  let childKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'children';
  let treeRoot = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : -1;

  if (!utils_isArray(arr)) {
    return arr;
  }

  const tmpData = {};
  const keys = arr.map(v => v[idKey]);
  [...arr].map(v => {
    const item = _objectSpread({}, v);

    if (item[idKey] != null) {
      // const parentId=fn(item[idKey])||treeRoot;
      let {
        parentId
      } = item;

      if (parentId == null) {
        var _fn;

        parentId = (_fn = fn == null ? void 0 : fn(item)) != null ? _fn : treeRoot;
        item.parentId = parentId;
      }

      if (!tmpData[item[idKey]]) {
        tmpData[item[idKey]] = [];
      }

      item[childKey] = tmpData[item[idKey]];

      if (!tmpData[parentId]) {
        tmpData[parentId] = [];
      }

      if (!tmpData[treeRoot]) {
        tmpData[treeRoot] = [];
      }

      const hasParent = keys.includes(parentId);

      if (hasParent) {
        tmpData[parentId].push(item);
      } else {
        tmpData[treeRoot].push(item);
      }
    }
  });
  return tmpData[treeRoot];
};

/* harmony default export */ var utils_arr2Tree = (arr2Tree);
;// CONCATENATED MODULE: ../../huxy/utils/arr2TreeById.js


const arr2TreeById = function (data) {
  let idKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'id';
  let childKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'children';
  let treeRoot = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : -1;
  return utils_arr2Tree(item => {
    const id = item[idKey];
    const parentArr = id.match(/\S+(?=-\S+)/);
    return (parentArr == null ? void 0 : parentArr[0]) || treeRoot;
  })(data, idKey, childKey, treeRoot);
};

/* harmony default export */ var utils_arr2TreeById = (arr2TreeById);
;// CONCATENATED MODULE: ../../huxy/utils/arr2TreeByPath.js


const arr2TreeByPath = function (data) {
  let idKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'path';
  let childKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'children';
  let treeRoot = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  return utils_arr2Tree(item => {
    const id = item[idKey];
    const hasSub = id.match(/.*\/[^:/]+\/:[^/]+/);

    if (hasSub) {
      var _hasSub$0$match$, _hasSub$0$match;

      return (_hasSub$0$match$ = (_hasSub$0$match = hasSub[0].match(/(.*)\/:+/)) == null ? void 0 : _hasSub$0$match[1]) != null ? _hasSub$0$match$ : treeRoot;
    } else {
      var _id$match$, _id$match;

      return (_id$match$ = (_id$match = id.match(/(.*)\/+/)) == null ? void 0 : _id$match[1]) != null ? _id$match$ : treeRoot;
    }
  })(data, idKey, childKey, treeRoot);
};

/* harmony default export */ var utils_arr2TreeByPath = (arr2TreeByPath);
;// CONCATENATED MODULE: ../../huxy/utils/base2Ten.js
const base2Ten = function () {
  let num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  let base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return parseInt(String(num), base);
};

/* harmony default export */ var utils_base2Ten = (base2Ten);
;// CONCATENATED MODULE: ../../huxy/utils/ten2Base.js
const ten2Base = function () {
  let num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  let base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return Number(num).toString(base);
};

/* harmony default export */ var utils_ten2Base = (ten2Base);
;// CONCATENATED MODULE: ../../huxy/utils/baseConversion.js



const baseConversion = function () {
  let num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  let base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  let to = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 16;
  return utils_ten2Base(utils_base2Ten(num, base), to);
};

/* harmony default export */ var utils_baseConversion = (baseConversion);
;// CONCATENATED MODULE: ../../../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
;// CONCATENATED MODULE: ../../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}
;// CONCATENATED MODULE: ../../huxy/utils/params2str.js


const params2str = params => {
  if (!utils_isObject(params)) {
    return ''; // throw TypeError('???????????????object???');
  }

  const arr = [];
  Object.keys(params).map((v, k) => {
    const p = k > 0 ? '&' : '?';
    arr.push(`${p}${v}=${params[v]}`);
  });
  return arr.join('');
};

/* harmony default export */ var utils_params2str = (params2str);
;// CONCATENATED MODULE: ../../huxy/utils/params2data.js


const params2data = params => {
  if (!utils_isObject(params)) {
    return {}; // throw TypeError('???????????????object???');
  }

  const formdata = new FormData();
  Object.keys(params).map(key => {
    formdata.append(key, params[key]);
  });
  return formdata;
};

/* harmony default export */ var utils_params2data = (params2data);
;// CONCATENATED MODULE: ../../huxy/utils/isFunction.js


const isFunction = value => utils_getType(value) === 'function';

/* harmony default export */ var utils_isFunction = (isFunction);
;// CONCATENATED MODULE: ../../huxy/utils/isAsync.js




const isAsync = value => utils_getType(value) === 'promise' || utils_isObject(value) && utils_isFunction(value.then);

/* harmony default export */ var utils_isAsync = (isAsync);
;// CONCATENATED MODULE: ../../huxy/utils/cancelablePromise.js


const cancelablePromise = function (promise) {
  let delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 120000;
  let msg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '???????????????';

  if (!utils_isAsync(promise)) {
    return {};
  }

  let cancelFn = null;
  let timer = null;
  const promiseFn = new Promise((resolve, reject) => {
    // let errMsg=false;
    cancelFn = function () {
      let msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'canceled';
      // errMsg=msg;
      clearTimeout(timer);
      resolve({
        canceled: true,
        errMsg: msg
      });
    };

    if (delay) {
      delay = typeof delay !== 'number' ? 120000 : delay;
      timer = setTimeout(() => cancelFn(msg), delay);
    }

    promise.then(result => {
      clearTimeout(timer);
      resolve({
        result,
        errMsg: false
      });
    }).catch(error => {
      clearTimeout(timer);
      reject(error);
    });
  });
  return {
    promiseFn,
    cancelFn
  };
};

/* harmony default export */ var utils_cancelablePromise = (cancelablePromise);
;// CONCATENATED MODULE: ../../huxy/utils/baseFetch.js


const _excluded = ["headers", "dataType", "data", "formData", "form", "params"];

function baseFetch_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function baseFetch_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? baseFetch_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : baseFetch_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





const transform = [{
  type: 'data',
  headers: {
    'Content-Type': 'application/json'
  },
  body: data => JSON.stringify(data)
}, {
  type: 'formData',
  // headers:{'Content-Type':'multipart/form-data'},
  body: data => utils_params2data(data)
}, {
  type: 'form',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: data => utils_params2str(data).slice(1)
}];

const transData = (types, dataType) => {
  const validDataType = ['data', 'form', 'formData', 'params'].includes(dataType);
  const dataKeys = Object.keys(types).filter(item => types[item]);

  if (dataKeys.length === 1) {
    const dataKey = dataKeys[0];
    const type = validDataType ? dataType : dataKey;

    if (type === 'params') {
      return {
        query: types[dataKey]
      };
    }

    return {
      result: types[dataKey],
      type
    };
  } else if (dataKeys.length > 1) {
    const dataKey = dataKeys.filter(v => v !== 'params').slice(-1)[0];
    const type = validDataType ? dataType : dataKey;

    if (type === 'params') {
      return {
        query: types['params'] || types[dataKey]
      };
    }

    return {
      query: types['params'],
      result: types[dataKey],
      type
    };
  }
};

const baseFetch = (handler, timeout) => method => function (url) {
  let opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  const {
    headers,
    dataType,
    data,
    formData,
    form,
    params
  } = opt,
        restOpt = _objectWithoutProperties(opt, _excluded);

  const types = {
    data,
    formData,
    form,
    params
  };
  let defaultHeaders; // let defaultHeaders={'Content-Type':'application/x-www-form-urlencoded'};

  const {
    query,
    result,
    type
  } = transData(types, dataType) || {};

  if (!restOpt.body && result) {
    const item = transform.find(v => v.type === type);
    defaultHeaders = item.headers;
    restOpt.body = item.body(result);
  }

  if (query) {
    url = `${url}${utils_params2str(query)}`;
  }

  const {
    promiseFn
  } = utils_cancelablePromise(fetch(url, baseFetch_objectSpread({
    method: method,
    mode: 'cors',
    credentials: 'include',
    cache: 'default',
    headers: baseFetch_objectSpread(baseFetch_objectSpread({}, defaultHeaders), headers)
  }, restOpt)), timeout);
  return promiseFn.then(_ref => {
    let {
      result,
      errMsg
    } = _ref;

    if (errMsg) {
      return handler({
        status: 408,
        statusText: errMsg
      });
    }

    return handler(result);
  }).catch(error => {
    throw Error(error);
  });
};

/* harmony default export */ var utils_baseFetch = (baseFetch);
;// CONCATENATED MODULE: ../../huxy/utils/hasProp.js
const hasProp = (obj, prop) => Object.prototype.hasOwnProperty.call(obj != null ? obj : {}, prop);

/* harmony default export */ var utils_hasProp = (hasProp);
;// CONCATENATED MODULE: ../../huxy/utils/cyclic.js


const isCyclic = obj => {
  const seenObjects = [];

  const detect = obj => {
    if (obj && typeof obj === 'object') {
      if (seenObjects.indexOf(obj) !== -1) {
        return true;
      }

      seenObjects.push(obj);
      let hasCyc = false;

      for (let key in obj) {
        if (utils_hasProp(obj, key) && detect(obj[key])) {
          obj[key] = 'cyclic';
          hasCyc = true;
        }
      }

      return hasCyc;
    }

    return false;
  };

  const result = detect(obj);
  return result && obj;
};

/* harmony default export */ var cyclic = (isCyclic);
;// CONCATENATED MODULE: ../../huxy/utils/equal.js




const equal = (a, b) => {
  const typeA = utils_getType(a);
  const typeB = utils_getType(b);

  if (typeA !== typeB) {
    return false;
  }

  if (a == null || b == null) {
    return a === b;
  }
  /*if(isEle(a)){
    return a.isEqualNode(b);
  }*/


  if (['object', 'array'].indexOf(typeA) === -1) {
    return a.toString() === b.toString();
  }

  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }

  if (cyclic(a) && cyclic(b)) {
    return equal(a, b);
  }

  for (let k in b) {
    if (utils_hasProp(a, k) !== utils_hasProp(b, k)) {
      return false;
    }

    if (!equal(a[k], b[k])) {
      return false;
    }
  }

  return true;
};

/* harmony default export */ var utils_equal = (equal);
;// CONCATENATED MODULE: ../../huxy/utils/isReactEle.js
const isReactEle = value => (value == null ? void 0 : value['$$typeof']) && typeof value['$$typeof'] === 'symbol' && value['$$typeof']['description'] === 'react.element';

/* harmony default export */ var utils_isReactEle = (isReactEle);
;// CONCATENATED MODULE: ../../huxy/utils/isVueEle.js
const isVueEle = value => value == null ? void 0 : value.__v_isVNode;

/* harmony default export */ var utils_isVueEle = (isVueEle);
;// CONCATENATED MODULE: ../../huxy/utils/clone.js






const clone = obj => {
  if (!utils_isArray(obj) && !utils_isObject(obj)) {
    return obj;
  }

  const newobj = utils_isArray(obj) ? [] : {};

  for (const i in obj) {
    if (utils_hasProp(obj, i)) {
      const item = obj[i]; // newobj[i]=typeof item==='object'?item!==obj?clone(item):'cyclic':item;

      newobj[i] = utils_isReactEle(item) || utils_isVueEle(item) || typeof item !== 'object' ? item : item !== obj ? clone(item) : 'cyclic';
    } else {
      Object.setPrototypeOf(newobj, {
        [i]: obj[i]
      });
    }
  }

  return newobj;
};

/* harmony default export */ var utils_clone = (clone);
;// CONCATENATED MODULE: ../../huxy/utils/cacheData.js



const cache = function () {
  let len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
  const snapshot = [];
  let currentIndex = -1;

  const record = data => {
    var _snapshot, _snapshot$currentInde;

    const length = snapshot.length;
    const tempData = utils_clone(data);

    if (!utils_equal(tempData, (_snapshot = snapshot[length - 1]) == null ? void 0 : _snapshot.data)) {
      snapshot.push({
        data: tempData
      });

      if (snapshot.length > len) {
        snapshot.shift();
      }

      currentIndex = snapshot.length - 1;
      return {
        index: currentIndex,
        length: currentIndex + 1,
        data: snapshot[currentIndex].data
      };
    }

    return {
      index: currentIndex,
      length,
      data: (_snapshot$currentInde = snapshot[currentIndex]) == null ? void 0 : _snapshot$currentInde.data
    };
  };

  const cursor = function () {
    var _snapshot$currentInde2;

    let num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    const length = snapshot.length;
    currentIndex += num;
    currentIndex = currentIndex < 0 ? 0 : currentIndex > length - 1 ? length - 1 : currentIndex;
    return {
      index: currentIndex,
      length,
      data: utils_clone((_snapshot$currentInde2 = snapshot[currentIndex]) == null ? void 0 : _snapshot$currentInde2.data)
    };
  };

  const jump = index => {
    var _snapshot$currentInde3;

    currentIndex = index;
    return {
      index: currentIndex,
      length: snapshot.length,
      data: utils_clone((_snapshot$currentInde3 = snapshot[currentIndex]) == null ? void 0 : _snapshot$currentInde3.data)
    };
  };

  const undo = () => cursor(-1);

  const redo = () => cursor(1);

  const getList = () => utils_clone(snapshot);

  const clean = () => {
    snapshot.length = 0;
    currentIndex = -1;
  };

  return {
    record,
    cursor,
    jump,
    undo,
    redo,
    getList,
    clean
  };
};

/* harmony default export */ var cacheData = (cache);
;// CONCATENATED MODULE: ../../huxy/utils/changePos.js


const changePos = (arr, fromKey, toKey) => {
  if (!utils_isArray(arr)) {
    return arr;
  }

  const fromItem = arr[fromKey];
  const toItem = arr[toKey];
  arr.splice(fromKey, 1, toItem);
  arr.splice(toKey, 1, fromItem);
  return arr;
};

/* harmony default export */ var utils_changePos = (changePos);
;// CONCATENATED MODULE: ../../huxy/utils/classifyArr.js
const classifyArr = function () {
  let arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'name';
  const obj = {};
  arr.map(item => {
    if (!obj[item[key]]) {
      obj[item[key]] = [item];
    } else {
      obj[item[key]].push(item);
    }
  });
  return obj;
};

/* harmony default export */ var utils_classifyArr = (classifyArr);
;// CONCATENATED MODULE: ../../huxy/utils/compareVersion.js
const compareVersion = function (loaclVersion, serviceVersion) {
  let key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.';

  const str2arr = (str, key) => str.split(key);

  const lvArr = str2arr(loaclVersion, key);
  const svArr = str2arr(serviceVersion, key);
  const arrLen = lvArr.length;
  let needUpdateLevel = 0;

  for (let i = 0; i < arrLen; i++) {
    if (lvArr[i] < svArr[i]) {
      needUpdateLevel = arrLen - i;
      break;
    }
  }

  return needUpdateLevel;
};

/* harmony default export */ var utils_compareVersion = (compareVersion);
;// CONCATENATED MODULE: ../../huxy/utils/compose.js
const compose = function () {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function () {
    const [...tmpFns] = fns;

    const composed = function () {
      if (tmpFns.length === 0) {
        return arguments.length <= 0 ? undefined : arguments[0];
      }

      return composed(tmpFns.pop()(...arguments));
    };

    return composed(...arguments);
  };
};

/* harmony default export */ var utils_compose = (compose);
;// CONCATENATED MODULE: ../../huxy/utils/isBrowser.js


const isBrowser = () => ![typeof window, typeof document].includes('undefined');

/* harmony default export */ var utils_isBrowser = (isBrowser);
;// CONCATENATED MODULE: ../../huxy/utils/copyToClipboard.js


const copyToClipboard = text => {
  if (!utils_isBrowser()) {
    return;
  }

  const copyText = document.createElement('textarea');
  copyText.value = text;
  copyText.style.position = 'fixed';
  copyText.style.left = '-9999px';
  document.body.appendChild(copyText);
  copyText.select();
  copyText.setSelectionRange(0, -1);

  try {
    document.execCommand('copy');
  } catch (err) {
    console.error(err);
  }

  document.body.removeChild(copyText);
};

/* harmony default export */ var utils_copyToClipboard = (copyToClipboard);
;// CONCATENATED MODULE: ../../huxy/utils/createTextElement.js
const createTextElement = text => ({
  type: 'TEXT_ELEMENT',
  props: {
    nodeValue: text
  }
});

/* harmony default export */ var utils_createTextElement = (createTextElement);
;// CONCATENATED MODULE: ../../huxy/utils/createElement.js


function createElement_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function createElement_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? createElement_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : createElement_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



const createElement = function (type, props) {
  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  return {
    type,
    props: createElement_objectSpread(createElement_objectSpread({}, props), {}, {
      children: children.map(child => typeof child === 'object' ? child : utils_createTextElement(child))
    })
  };
};

/* harmony default export */ var utils_createElement = (createElement);
;// CONCATENATED MODULE: ../../huxy/utils/updateNode.js
const isEvent = key => key.startsWith('on');

const isProperty = key => key !== 'children' && !isEvent(key);

const isNew = (prev, next) => key => prev[key] !== next[key];

const isGone = (prev, next) => key => !(key in next);

const filterProps = props => {
  const propsList = Object.keys(props);
  return {
    eventProps: propsList.filter(isEvent),
    propertyProps: propsList.filter(isProperty)
  };
};

const updateNode = (dom, prevProps, nextProps) => {
  const {
    eventProps: prevEvent,
    propertyProps: prevProperty
  } = filterProps(prevProps);
  const {
    eventProps: nextEvent,
    propertyProps: nextProperty
  } = filterProps(nextProps);
  prevEvent.filter(isGone(prevProps, nextProps)).map(key => {
    const eventType = key.toLowerCase().slice(2);
    dom.removeEventListener(eventType, prevProps[key]);
  });
  prevProperty.filter(isGone(prevProps, nextProps)).map(key => dom[key] = '');
  nextProperty.filter(isNew(prevProps, nextProps)).map(key => dom[key] = nextProps[key]);
  nextEvent.filter(isNew(prevProps, nextProps)).map(key => {
    const eventType = key.toLowerCase().slice(2);
    dom.addEventListener(eventType, nextProps[key]);
  });
};

/* harmony default export */ var utils_updateNode = (updateNode);
;// CONCATENATED MODULE: ../../huxy/utils/createNode.js


const createNode = fiber => {
  const dom = fiber.type === 'TEXT_ELEMENT' ? document.createTextNode('') : document.createElement(fiber.type);
  utils_updateNode(dom, {}, fiber.props);
  return dom;
};

/* harmony default export */ var utils_createNode = (createNode);
;// CONCATENATED MODULE: ../../huxy/utils/emitter.js
const emitter = () => {
  const hub = {};

  const on = (name, cb) => {
    var _hub$name;

    hub[name] = (_hub$name = hub[name]) != null ? _hub$name : [];

    if (hub[name].indexOf(cb) === -1) {
      hub[name].push(cb);
    }
  };

  const emit = (name, data) => {
    if (hub[name]) {
      hub[name].map(cb => cb(data));
    }
  };

  const off = function (name) {
    let cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    if (hub[name]) {
      if (typeof cb !== 'function') {
        return hub[name] = [];
      }

      const index = hub[name].indexOf(cb);

      if (index > -1) {
        hub[name].splice(index, 1);
      }
    }
  };

  return {
    on,
    emit,
    off
  };
};

/* harmony default export */ var utils_emitter = (emitter);
;// CONCATENATED MODULE: ../../huxy/utils/createStore.js


function createStore_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function createStore_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? createStore_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : createStore_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





const createStore = () => {
  const {
    on,
    emit,
    off
  } = utils_emitter();
  const store = {};

  const getState = key => utils_clone(store[key]);

  const setState = function (state) {
    let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (typeof state === 'function') {
      state = state(utils_clone(store));
    }

    if (!utils_isObject(state)) {
      throw TypeError('????????????object?????????');
    }

    const newState = utils_clone(state);
    Object.keys(newState).map(key => {
      const oldItem = store[key];
      const newItem = newState[key];
      const item = utils_isObject(newItem) && utils_isObject(oldItem) ? createStore_objectSpread(createStore_objectSpread({}, oldItem), newItem) : newItem;
      !init && emit(key, item);
      store[key] = item;
    }); // return off;
  };

  const subscribe = (key, cb) => {
    on(key, cb);
    /* const value=getState(key);
    if(value!==undefined){
      cb(value);
    } */

    return off;
  };

  const clean = name => {
    if (typeof name === 'string') {
      store[name] = undefined;
    } else if (Array.isArray(name)) {
      name.map(n => store[n] = undefined);
    } else {
      Object.keys(store).map(key => store[key] = undefined);
    }
  };

  return {
    getState,
    setState,
    subscribe,
    clean
  };
};

/* harmony default export */ var utils_createStore = (createStore);
;// CONCATENATED MODULE: ../../huxy/utils/curry.js
const curry = function () {
  let fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : () => {};
  let arity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : fn.length;

  const curried = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return args.length >= arity ? fn(...args) : function () {
      for (var _len2 = arguments.length, restArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        restArgs[_key2] = arguments[_key2];
      }

      return curried(...args, ...restArgs);
    };
  };

  return curried;
};

/* harmony default export */ var utils_curry = (curry);
;// CONCATENATED MODULE: ../../huxy/utils/dash2camel.js
const dash2camel = function (s) {
  let d = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '-';
  return s.split(d).map((v, k) => k > 0 ? v.replace(/^\S/, s => s.toUpperCase()) : v.replace(/^\S/, s => s.toLowerCase())).join('');
};

/* harmony default export */ var utils_dash2camel = (dash2camel);
;// CONCATENATED MODULE: ../../huxy/utils/debounce.js
const debounce = function () {
  let func = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : () => {};
  let delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 60;
  let timer = null;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
};

/* harmony default export */ var utils_debounce = (debounce);
;// CONCATENATED MODULE: ../../huxy/utils/deleteNodes.js


const deleteNodes = function (tree, id) {
  let idKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';
  let childKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'children';
  return utils_selectedHandle((data, index) => data.splice(index, 1))(tree, id, idKey, childKey);
};

/* harmony default export */ var utils_deleteNodes = (deleteNodes);
;// CONCATENATED MODULE: ../../huxy/utils/deviceType.js
const deviceType = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop';

/* harmony default export */ var utils_deviceType = (deviceType);
;// CONCATENATED MODULE: ../../huxy/utils/timestamp.js
const timestamp = () => {
  if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
    return performance.now();
  }

  return new Date().getTime();
};

/* harmony default export */ var utils_timestamp = (timestamp);
;// CONCATENATED MODULE: ../../huxy/utils/uuidv4.js


const uuidv4 = () => {
  let timeKey = utils_timestamp();
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (timeKey + Math.random() * 16) % 16 | 0;
    timeKey = Math.floor(timeKey / 16);
    return (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
  });
};

/* harmony default export */ var utils_uuidv4 = (uuidv4);
;// CONCATENATED MODULE: ../../huxy/utils/dlfile.js



const dlfile = (url, name) => {
  if (!utils_isBrowser()) {
    return;
  }

  name = name || utils_uuidv4();

  if (typeof url === 'string') {
    fetch(url).then(res => res.blob()).then(blob => {
      const dataUrl = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = name;
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      a.parentNode.removeChild(a);
      window.URL.revokeObjectURL(dataUrl);
    });
  } else {
    const blob = new Blob([url]);
    const dataUrl = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = name;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    a.parentNode.removeChild(a);
    window.URL.revokeObjectURL(dataUrl);
  }
};

/* harmony default export */ var utils_dlfile = (dlfile);
;// CONCATENATED MODULE: ../../huxy/utils/editNodes.js


function editNodes_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function editNodes_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? editNodes_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : editNodes_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



const editNodes = function (tree, id, nodes) {
  let idKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'id';
  let childKey = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'children';
  return utils_selectedHandle((data, index) => data[index] = editNodes_objectSpread(editNodes_objectSpread({}, data[index]), nodes))(tree, id, idKey, childKey);
};

/* harmony default export */ var utils_editNodes = (editNodes);
;// CONCATENATED MODULE: ../../huxy/utils/escapeHTML.js
const escapeHTML = str => str.replace(/[&<>'"]/g, tag => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '\'': '&#39;',
  '"': '&quot;'
})[tag] || tag);

/* harmony default export */ var utils_escapeHTML = (escapeHTML);
;// CONCATENATED MODULE: ../../huxy/utils/fetcher.js

const TIMEOUT = 120 * 1000;

const resHandler = response => response.json().then(result => result); // const reqHandler=response=>response.json().then(result=>result);

/* export const fetchApi=(handler=initHandler)=>{
  const handlerFetch=baseFetch(handler);
  return {
    get:handlerFetch('GET'),
    post:handlerFetch('POST'),
    put:handlerFetch('PUT'),
    delete:handlerFetch('DELETE'),
    head:handlerFetch('HEAD'),
  };
}; */


const fetcher = function () {
  let handler = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : resHandler;
  let timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TIMEOUT;
  return function () {
    let method = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'get';
    return utils_baseFetch(handler)((method || 'get').toUpperCase());
  };
};

/* harmony default export */ var utils_fetcher = (fetcher);
;// CONCATENATED MODULE: ../../huxy/utils/isValidArr.js


const isValidArr = value => utils_isArray(value) && value.length;

/* harmony default export */ var utils_isValidArr = (isValidArr);
;// CONCATENATED MODULE: ../../huxy/utils/filter.js


const filter = function (list, keyword) {
  let fields = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  let exact = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  let str2Dom = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

  if (!utils_isValidArr(list)) {
    return [];
  }

  if (!keyword) {
    return list;
  }

  fields = typeof fields === 'string' ? fields.split(',') : fields;
  return list.filter(v => {
    fields = fields.length > 0 ? fields : Object.keys(v);
    const matched = fields.filter(field => {
      const fieldValue = v[field];

      if (fieldValue == null) {
        return false;
      }

      if (exact) {
        return fieldValue === keyword;
      }

      const reg = new RegExp(keyword, 'gi');
      const match = fieldValue.toString().match(reg); // ??????

      if (match && str2Dom) {
        v[field] = str2Dom(fieldValue.toString().replace(reg, `<span style="background-color:yellow">${match[0]}</span>`), {
          display: 'inline-block'
        });
      }

      return match;
    });
    return matched.length;
  });
};

/* harmony default export */ var utils_filter = (filter);
;// CONCATENATED MODULE: ../../huxy/utils/unique.js




const unique = function (arr) {
  let key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'id';

  if (!utils_isValidArr(arr)) {
    return arr;
  }

  const newArr = [];
  const keys = [];
  arr.map(item => {
    // const idKey=isObject(item)?item[key]??JSON.stringify(item):item;
    const idKey = utils_isObject(item) ? item[key] : item;

    if (!keys.includes(idKey)) {
      keys.push(idKey);
      newArr.push(item);
    }
  });
  return newArr;
};

/* harmony default export */ var utils_unique = (unique);
;// CONCATENATED MODULE: ../../huxy/utils/filterList.js




const getMatched = fn => function (arr) {
  let childKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'children';

  if (!Array.isArray(arr)) {
    return arr;
  }

  const list = utils_clone(arr);

  const traver = data => {
    const matchedData = [];
    data.map(v => {
      if (utils_isValidArr(v[childKey])) {
        const matchChildren = traver(v[childKey]) || [];
        v[childKey] = matchChildren;

        if (matchChildren.length > 0) {
          matchedData.push(v);
        }
      }
    });
    return fn(data, matchedData);
  };

  return traver(list);
};

const filterList = function (data, keyword, str2Dom) {
  let fields = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'name';
  let idKey = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'id';
  let childKey = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'children';
  let exact = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
  return getMatched((list, matchedItem) => utils_unique([...utils_filter(list, keyword, fields, exact, str2Dom), ...matchedItem], idKey))(data, childKey);
};

/* harmony default export */ var utils_filterList = (filterList);
;// CONCATENATED MODULE: ../../huxy/utils/findMax.js
const findMax = function () {
  var _str$match;

  let str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return (_str$match = str.match(/\d+/g)) == null ? void 0 : _str$match.sort((a, b) => b - a)[0];
};

/* harmony default export */ var utils_findMax = (findMax);
;// CONCATENATED MODULE: ../../huxy/utils/firstUpper.js
const firstUpper = function () {
  let str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return str.replace(/^\S/, s => s.toUpperCase());
};

/* harmony default export */ var utils_firstUpper = (firstUpper);
;// CONCATENATED MODULE: ../../huxy/utils/fixRoute.js
const fixRoute = path => path ? path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path : '';
/* harmony default export */ var utils_fixRoute = (fixRoute);
;// CONCATENATED MODULE: ../../huxy/utils/traverItem.js



function traverItem_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function traverItem_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? traverItem_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : traverItem_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



const traverItem = fn => function (arr) {
  let childKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'children';

  if (!utils_isArray(arr)) {
    return arr;
  }

  const traver = function (data) {
    let parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    data.map((v, k) => {
      const hasChild = utils_isArray(v[childKey]);
      v = fn(v, parent, k, hasChild) || v;

      if (hasChild) {
        const {
          [childKey]: children
        } = v,
              rest = _objectWithoutProperties(v, [childKey].map(_toPropertyKey));

        traver(children, [...parent, traverItem_objectSpread(traverItem_objectSpread({}, rest), {}, {
          '@@index': k
        })]);
      }
    });
  };

  traver(arr);
  return arr;
};

/* harmony default export */ var utils_traverItem = (traverItem);
;// CONCATENATED MODULE: ../../huxy/utils/flatten.js


function flatten_toPropertyKey(arg) { var key = flatten_toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function flatten_toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



const flatten = function (data) {
  let childKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'children';
  const newArr = [];
  utils_traverItem(item => {
    const {
      [childKey]: children
    } = item,
          rest = _objectWithoutProperties(item, [childKey].map(flatten_toPropertyKey));

    newArr.push(rest);
  })(data, childKey);
  return newArr;
};

/* harmony default export */ var utils_flatten = (flatten);
;// CONCATENATED MODULE: ../../huxy/utils/formatNum.js
const formatNum = num => typeof num === 'number' ? num.toLocaleString('en-US') : '';

/* harmony default export */ var utils_formatNum = (formatNum);
;// CONCATENATED MODULE: ../../huxy/utils/getTime.js
const getTime = function () {
  let day = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
  const date = new Date(day);
  const y = date.getFullYear();
  const w = date.getDay();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  const h = date.getHours();
  const M = date.getMinutes();
  const s = date.getSeconds();
  return [y, m, d, h, M, s, w];
};

/* harmony default export */ var utils_getTime = (getTime);
;// CONCATENATED MODULE: ../../huxy/utils/formatPassTime.js


const formatPassTime = function (start) {
  let end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  start = utils_getTime(start);
  end = utils_getTime(end);
  const dfYear = end.y - start.y;
  const dfMonth = end.m - start.m;
  const dfDay = end.d - start.d;
  const dfHour = end.h - start.h;
  const dfMinute = end.M - start.M;
  const prevMonthCount = new Date(end.y, end.m, 0).getDate();

  const getStr = (bTime, sTime, hex, bStr, sStr) => {
    const str = '???';

    if (sTime < 0) {
      bTime -= 1;
      sTime += hex;
    }

    if (bTime === 0) {
      return sTime + sStr + str;
    }

    if (sTime === 0) {
      return bTime + bStr + str;
    }

    return bTime + bStr + sTime + sStr + str;
  };

  if (dfYear > 0) {
    return getStr(dfYear, dfMonth, 12, '???', '??????');
  } else {
    if (dfMonth > 0) {
      return getStr(dfMonth, dfDay, prevMonthCount, '??????', '???');
    } else {
      if (dfDay > 0) {
        return getStr(dfDay, dfHour, 24, '???', '??????');
      } else {
        if (dfHour > 0) {
          return getStr(dfHour, dfMinute, 60, '??????', '??????');
        } else {
          if (dfMinute > 0) {
            return dfMinute + '?????????';
          } else {
            return '??????';
          }
        }
      }
    }
  }
};

/* harmony default export */ var utils_formatPassTime = (formatPassTime);
;// CONCATENATED MODULE: ../../huxy/utils/formatTime.js

const addZero = n => n < 10 ? '0' + n : n;
const formatDelimiter = function (str, target) {
  let s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '-';
  return str.replace(new RegExp(s, 'g'), target);
};

const formatTime = function () {
  let date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
  let delimiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['-', '-', ' ', ':', ':'];
  const time = utils_getTime(date).map(v => addZero(v));
  let s = '';
  [...delimiter, ''].map((d, i) => {
    var _time$i;

    return s += ((_time$i = time[i]) != null ? _time$i : '') + d;
  });
  return s;
};

/* harmony default export */ var utils_formatTime = (formatTime);
;// CONCATENATED MODULE: ../../huxy/utils/isRef.js


const isRef = ref => utils_hasProp(ref, 'current');

/* harmony default export */ var utils_isRef = (isRef);
;// CONCATENATED MODULE: ../../huxy/utils/_/prefixBrowser.js
const prefix = ['', 'webkit', 'moz', 'ms'];
const fullscreenElement = ele => prefix.map(v => v ? `${v}FullscreenElement` : 'fullscreenElement').find(v => ele[v]);
const requestFullscreen = ele => prefix.map(v => v ? `${v}RequestFullscreen` : 'requestFullscreen').find(v => ele[v]);
const exitFullscreen = ele => prefix.map(v => v ? `${v}ExitFullscreen` : 'exitFullscreen').find(v => ele[v]);
const fullscreenchange = prefix.map(v => `${v}fullscreenchange`);
;// CONCATENATED MODULE: ../../huxy/utils/fullScreen.js




const fullScreen = ele => {
  if (!utils_isBrowser()) {
    return;
  }

  ele = utils_isRef(ele) ? ele.current : ele;
  ele = ele || document.body;
  const fse = fullscreenElement(document);
  const rfs = requestFullscreen(ele);
  const efs = exitFullscreen(document);

  if (!document[fse]) {
    var _ele$rfs, _ele;

    (_ele$rfs = (_ele = ele)[rfs]) == null ? void 0 : _ele$rfs.call(_ele);
  } else {
    var _document$efs, _document;

    (_document$efs = (_document = document)[efs]) == null ? void 0 : _document$efs.call(_document);
  }
};

/* harmony default export */ var utils_fullScreen = (fullScreen);
;// CONCATENATED MODULE: ../../huxy/utils/str2Html.js


const str2Html = str => {
  if (!utils_isBrowser()) {
    return;
  }

  const templ = document.createElement('div');
  templ.innerHTML = str;
  const ele = templ.children[0]; // templ.childNodes

  return ele;
};

/* harmony default export */ var utils_str2Html = (str2Html);
;// CONCATENATED MODULE: ../../huxy/utils/getPosition.js


const getPosition = function () {
  var _ele$getBoundingClien;

  let ele = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : utils_isBrowser() && document.body;
  return ele == null ? void 0 : (_ele$getBoundingClien = ele.getBoundingClientRect) == null ? void 0 : _ele$getBoundingClien.call(ele);
};

/* harmony default export */ var utils_getPosition = (getPosition);
;// CONCATENATED MODULE: ../../huxy/utils/setStyle.js


const setStyle = function (ele) {
  let styles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let reset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (!utils_isElement(ele)) {
    return;
  }

  Object.keys(styles).map(key => {
    // ele.style[key]=reset?'':styles[key];
    ele.style.setProperty(key, reset ? '' : styles[key]);
  });
};

/* harmony default export */ var utils_setStyle = (setStyle);
;// CONCATENATED MODULE: ../../huxy/utils/getElementsSize.js







const getElementsSize = ele => {
  if (!utils_isBrowser()) {
    return;
  }

  if (typeof ele === 'string') {
    ele = utils_str2Html(ele);
  }

  ele = utils_isRef(ele) ? ele.current : ele;

  if (!utils_isElement(ele)) {
    return;
  }

  const shadow = ele.cloneNode(true);
  utils_setStyle(shadow, {
    pointerEvents: 'none',
    zIndex: -1,
    opacity: 0,
    display: 'block'
  }); // shadow.setAttribute('style','pointer-events:none;z-index:-1;opacity:0;display:block;');

  ele.parentNode.appendChild(shadow);
  const info = utils_getPosition(shadow);
  ele.parentNode.removeChild(shadow);
  return info;
};

/* harmony default export */ var utils_getElementsSize = (getElementsSize);
;// CONCATENATED MODULE: ../../huxy/utils/getExplore.js

const exploreList = [{
  name: 'IE11',
  reg: /rv:([\d.]+)\) like gecko/
}, {
  name: 'IE',
  reg: /msie ([\d.]+)/
}, {
  name: 'Edge',
  reg: /edge\/([\d.]+)/
}, {
  name: 'Firefox',
  reg: /firefox\/([\d.]+)/
}, {
  name: 'Opera',
  reg: /(?:opera|opr).([\d.]+)/
}, {
  name: 'Chrome',
  reg: /chrome\/([\d.]+)/
}, {
  name: 'Safari',
  reg: /version\/([\d.]+).*safari/
}, {
  name: 'WeiXin',
  reg: /micromessenger\/([\d.]+)/
}, {
  name: 'TIM',
  reg: /tim\/([\d.]+)/
}, {
  name: 'QQ',
  reg: /qq\/([\d.]+)/
}, {
  name: 'IOS Chrome',
  reg: /crios\/([\d.]+)/
}];

const getExplore = () => {
  if (!utils_isBrowser()) {
    return;
  }

  const ua = window.navigator.userAgent.toLowerCase();
  const expItem = exploreList.find(item => ua.match(item.reg));
  const explore = expItem ? `${expItem.name}: ${ua.match(expItem.reg)[1]}` : 'Unkonwn';
  return explore;
};

/* harmony default export */ var utils_getExplore = (getExplore);
;// CONCATENATED MODULE: ../../huxy/utils/getLeaveTime.js
const MIN_VAL = 60 * 1000;
const HOUR_VAL = 60 * MIN_VAL;
const DAY_VAL = 24 * HOUR_VAL;

const getLeaveTime = function (start) {
  let end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  let time = new Date(start) - end;
  const d = ~~(time / DAY_VAL);
  time -= DAY_VAL * d;
  const h = ~~(time / HOUR_VAL);
  time -= HOUR_VAL * h;
  const M = ~~(time / MIN_VAL);
  time -= MIN_VAL * M;
  const s = ~~(time / 1000);
  return `${d}???${h}??????${M}???${s}???`;
};

/* harmony default export */ var utils_getLeaveTime = (getLeaveTime);
;// CONCATENATED MODULE: ../../huxy/utils/getMeta.js

const defaultHeadMeta = [{
  'http-equiv': 'X-UA-Compatible',
  content: 'IE=edge,chrome=1'
}, {
  'http-equiv': 'Cache-Control',
  content: 'no-siteapp'
}, {
  name: 'renderer',
  content: 'webkit|ie-comp|ie-stand'
}, {
  name: 'referrer',
  content: 'no-referrer'
}, {
  name: 'description',
  content: 'web design'
}, {
  name: 'keywords',
  content: 'react,hooks,huxy,function'
}, {
  name: 'viewport',
  content: 'viewport-fit=cover' // content:'width=device-width,initial-scale=1.0,maximum-scale=1,minimum-scale=1,user-scalable=no,shrink-to-fit=no',

}, {
  name: 'robots',
  content: 'index,follow'
}, {
  name: 'apple-mobile-web-app-title',
  content: 'web'
}, {
  name: 'apple-mobile-web-app-capable',
  content: 'yes'
}, {
  name: 'apple-mobile-web-app-status-bar-style',
  content: 'black'
}, {
  name: 'format-detection',
  content: 'telphone=no,email=no'
}, {
  name: 'x5-fullscreen',
  content: 'true'
}, {
  name: 'theme-color',
  content: '#33363b'
}, {
  name: 'google',
  value: 'notranslate'
}];
const mergeMetaData = metaData => {
  if (!Array.isArray(metaData)) {
    return defaultHeadMeta;
  }

  const newMeta = [...defaultHeadMeta];
  metaData.map(item => {
    const index = newMeta.findIndex(v => v.name === item.name || v['http-equiv'] === item['http-equiv']);

    if (index > -1) {
      newMeta[index] = item;
    } else {
      newMeta.push(item);
    }
  });
  return newMeta;
};

const getMeta = metaData => {
  const metaList = mergeMetaData(metaData);
  const metaStr = metaList.map(item => {
    const props = Object.keys(item).map(key => `${key}=${item[key]}`).join(' ');
    return `<meta ${props} />`;
  });
  return utils_str2Html(metaStr.join(''));
};

/* harmony default export */ var utils_getMeta = (getMeta);
;// CONCATENATED MODULE: ../../huxy/utils/getMonthDays.js


const getMonthDays = function () {
  let day = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
  const date = utils_getTime(day);
  return new Date(date[0], date[1], 0).getDate();
};

/* harmony default export */ var utils_getMonthDays = (getMonthDays);
;// CONCATENATED MODULE: ../../huxy/utils/getOffset.js



const getOffset = function () {
  let element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  if (!utils_isBrowser()) {
    return {
      left: 0,
      top: 0
    };
  }

  if (utils_isElement(element)) {
    return {
      left: element.scrollLeft,
      top: element.scrollTop
    };
  }

  return {
    left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
    top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  };
};

/* harmony default export */ var utils_getOffset = (getOffset);
;// CONCATENATED MODULE: ../../huxy/utils/getParams.js
const getParams = function () {
  let fullPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  const [path, query] = fullPath.split('?');

  if (query) {
    const params = {};
    const paramsArr = query.split('&');
    paramsArr.map(param => {
      const [key, value] = param.split('=');
      params[key] = value;
    });
    return {
      path,
      params
    };
  }

  return {
    path
  };
};

/* harmony default export */ var utils_getParams = (getParams);
;// CONCATENATED MODULE: ../../huxy/utils/isTouch.js


const isTouch = () => utils_isBrowser() && (window.ontouchstart || navigator.maxTouchPoints);

/* harmony default export */ var utils_isTouch = (isTouch);
;// CONCATENATED MODULE: ../../huxy/utils/getTouchPosition.js



const getTouchPosition = evt => {
  var _evt$touches, _evt$touches$, _evt$touches2, _evt$touches2$;

  const {
    left,
    top
  } = utils_getOffset();
  return {
    touchX: utils_isTouch() ? evt == null ? void 0 : (_evt$touches = evt.touches) == null ? void 0 : (_evt$touches$ = _evt$touches[0]) == null ? void 0 : _evt$touches$.pageX : (evt == null ? void 0 : evt.pageX) || (evt == null ? void 0 : evt.clientX) + left,
    touchY: utils_isTouch() ? evt == null ? void 0 : (_evt$touches2 = evt.touches) == null ? void 0 : (_evt$touches2$ = _evt$touches2[0]) == null ? void 0 : _evt$touches2$.pageY : (evt == null ? void 0 : evt.pageY) || (evt == null ? void 0 : evt.clientY) + top
  };
};

/* harmony default export */ var utils_getTouchPosition = (getTouchPosition);
;// CONCATENATED MODULE: ../../huxy/utils/getRelative.js


const getRelative = (evt, ref) => {
  var _ref$getBoundingClien, _ref$getBoundingClien2;

  const {
    touchX,
    touchY
  } = utils_getTouchPosition(evt);
  const {
    x,
    y
  } = (_ref$getBoundingClien = ref == null ? void 0 : (_ref$getBoundingClien2 = ref.getBoundingClientRect) == null ? void 0 : _ref$getBoundingClien2.call(ref)) != null ? _ref$getBoundingClien : {}; // const {offsetLeft,offsetLeft}=ref;

  return {
    x: touchX - x,
    y: touchY - y
  };
};

/* harmony default export */ var utils_getRelative = (getRelative);
;// CONCATENATED MODULE: ../../huxy/utils/getSelected.js


const getSelected = function (arr, id) {
  let idKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';
  let childKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'children';

  if (!utils_isArray(arr)) {
    return null;
  }

  const selected = data => {
    for (let i = 0, l = data.length; i < l; i++) {
      const item = data[i];

      if (item[idKey] === id) {
        return [item];
      }

      if (utils_isArray(item[childKey])) {
        const selChildren = selected(item[childKey]);

        if (selChildren) {
          return [item].concat(selChildren);
        }
      }
    }
  };

  return selected(arr);
};

/* harmony default export */ var utils_getSelected = (getSelected);
;// CONCATENATED MODULE: ../../huxy/utils/getTextSize.js




const getTextSize = function (text) {
  let styles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let ele = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : utils_isBrowser() && document.body;

  if (!utils_isBrowser()) {
    return;
  }

  ele = utils_isRef(ele) ? ele.current : ele;
  const span = document.createElement('span');
  span.setAttribute('style', `pointer-events:none;z-index:-1;opacity:0;`);
  styles && utils_setStyle(span, styles);
  span.innerText = text;
  ele.appendChild(span);
  const rect = span.getBoundingClientRect();
  ele.removeChild(span);
  return rect;
};

/* harmony default export */ var utils_getTextSize = (getTextSize);
;// CONCATENATED MODULE: ../../huxy/utils/getValue.js
const getValue = function () {
  let object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let keys = arguments.length > 1 ? arguments[1] : undefined;
  keys = keyArr(keys);

  const checkValue = (obj, key) => {
    if (!(key != null && key[0])) {
      return obj;
    }

    if (typeof obj[key[0]] === 'object') {
      return checkValue(obj[key[0]], key.slice(1));
    }

    if (key.length > 1) {
      return undefined;
    }

    return obj[key[0]];
  };

  return checkValue(object, keys);
};

const keyArr = function () {
  var _keys$replace;

  let keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return (_keys$replace = keys.replace(/\[['"]?(.*?)['"]?\]/g, '.$1')) == null ? void 0 : _keys$replace.split('.');
};
/* harmony default export */ var utils_getValue = (getValue);
;// CONCATENATED MODULE: ../../huxy/utils/getViewportSize.js



const getViewportSize = function () {
  let element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  if (!utils_isBrowser()) {
    return {
      width: 0,
      height: 0
    };
  }

  if (utils_isElement(element)) {
    return {
      width: element.clientWidth,
      height: element.clientHeight
    };
  }

  return {
    width: window.innerWidth || document.documentElement.clientWidth,
    height: window.innerHeight || document.documentElement.clientHeight
  };
};

/* harmony default export */ var utils_getViewportSize = (getViewportSize);
;// CONCATENATED MODULE: ../../huxy/utils/hasClass.js


const hasClass = function (ele) {
  let name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return utils_isElement(ele) && ele.className.match(new RegExp('(\\s|^)' + name + '(\\s|$)'));
};

/* harmony default export */ var utils_hasClass = (hasClass);
;// CONCATENATED MODULE: ../../huxy/utils/hex2rgba.js
const hex2rgba = function () {
  let hex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  hex = hex.replace('#', '');
  const len = hex.length;

  if (len === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  } else if (len === 4) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`;
  }

  const r = parseInt(hex.slice(0, 2), 16) || 0;
  const g = parseInt(hex.slice(2, 4), 16) || 0;
  const b = parseInt(hex.slice(4, 6), 16) || 0;

  if (hex.length === 6) {
    return `rgb(${r},${g},${b})`;
  }

  const a = parseInt(hex.slice(6, 8), 16) / 255 || 0;
  return `rgba(${r},${g},${b},${a})`;
};

/* harmony default export */ var utils_hex2rgba = (hex2rgba);
;// CONCATENATED MODULE: ../../huxy/utils/isError.js


const isError = value => utils_getType(value) === 'error';

/* harmony default export */ var utils_isError = (isError);
;// CONCATENATED MODULE: ../../huxy/utils/isIE.js
const isIE = () => navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/Edge/);

/* harmony default export */ var utils_isIE = (isIE);
;// CONCATENATED MODULE: ../../huxy/utils/isReactComp.js
const isReactComp = value => (value == null ? void 0 : value['$$typeof']) && typeof value['$$typeof'] === 'symbol' && value['$$typeof']['description'] === 'react.forward_ref';

/* harmony default export */ var utils_isReactComp = (isReactComp);
;// CONCATENATED MODULE: ../../huxy/utils/isRegExp.js


const isRegExp = value => utils_getType(value) === 'regexp';

/* harmony default export */ var utils_isRegExp = (isRegExp);
;// CONCATENATED MODULE: ../../huxy/utils/isUrl.js
const isUrl = url => /^(https?:\/\/|www\.)[^\s]+/.test(url);

/* harmony default export */ var utils_isUrl = (isUrl);
;// CONCATENATED MODULE: ../../huxy/utils/isValidObj.js


const isValidObj = value => utils_isObject(value) && Object.keys(value).length;

/* harmony default export */ var utils_isValidObj = (isValidObj);
;// CONCATENATED MODULE: ../../huxy/utils/json2str.js




const json2str = obj => utils_isObject(obj) ? utils_obj2str(obj) : Array.isArray(obj) ? utils_arr2str(obj) : obj;

/* harmony default export */ var utils_json2str = (json2str);
;// CONCATENATED MODULE: ../../huxy/utils/sleep.js
const sleep = function () {
  let ms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 350;
  return new Promise(resolve => setTimeout(resolve, ms));
};

const sleepSync = function () {
  let ms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
  const start = Date.now();

  while (Date.now() - start <= ms) {}
};
/* harmony default export */ var utils_sleep = (sleep);
;// CONCATENATED MODULE: ../../huxy/utils/loop.js

/* const loop=async (fn,handle,delay=2000)=>{
  if(!handle?.(fn?.())){
    await sleep(delay);
    loop(fn,handle,delay);
  }
}; */

const loop = async function (fn, handle) {
  let delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2000;

  while (!(handle != null && handle(fn == null ? void 0 : fn()))) {
    await utils_sleep(delay);
  }
};

/* harmony default export */ var utils_loop = (loop);
;// CONCATENATED MODULE: ../../huxy/utils/matchedStr.js
const matchedStr = function (str) {
  var _str$trim, _str$trim$call$match;

  let c = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['{', '}'];
  return str == null ? void 0 : (_str$trim = str.trim) == null ? void 0 : (_str$trim$call$match = _str$trim.call(str).match(new RegExp(`^${c[0]}([\\s\\S]*)${c[1]}$`))) == null ? void 0 : _str$trim$call$match[1];
};

/* harmony default export */ var utils_matchedStr = (matchedStr);
;// CONCATENATED MODULE: ../../huxy/utils/memoize.js
const memoize = function () {
  let fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : () => {};
  let len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  let cache = [];
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    const key = JSON.stringify(args);
    const cached = cache.find(v => v.key === key);

    if (!cached) {
      const result = fn(...args);
      cache.push({
        key,
        result
      });

      if (cache.length > len) {
        cache.shift();
      }

      return result;
    }

    return cached.result;
  };
};

/* harmony default export */ var utils_memoize = (memoize);
;// CONCATENATED MODULE: ../../huxy/utils/mergeArr.js




const mergeArr = function (base, extend) {
  let key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';

  if (!utils_isArray(base)) {
    return extend;
  }

  if (!utils_isArray(extend)) {
    return base;
  }

  const sameItems = {};
  [...base, ...extend].map(item => {
    var _item$key;

    const idKey = utils_isObject(item) ? (_item$key = item[key]) != null ? _item$key : JSON.stringify(item) : item;

    if (sameItems[idKey] === undefined) {
      sameItems[idKey] = item;
    } else {
      const oldItem = sameItems[idKey];

      if (utils_isObject(oldItem) && utils_isObject(item)) {
        sameItems[idKey] = utils_mergeObj(oldItem, item);
      } else if (utils_isArray(oldItem) && utils_isArray(item)) {
        sameItems[idKey] = mergeArr(oldItem, item);
      } else {
        sameItems[idKey] = item;
      }
    }
  });
  return Object.keys(sameItems).map(v => sameItems[v]);
};

/* harmony default export */ var utils_mergeArr = (mergeArr);
;// CONCATENATED MODULE: ../../huxy/utils/mergeObj.js




const mergeObj = (base, extend) => {
  if (!utils_isObject(base)) {
    return extend;
  }

  if (!utils_isObject(extend)) {
    return base;
  }

  for (let k in extend) {
    if (utils_isObject(base[k]) && utils_isObject(extend[k])) {
      base[k] = mergeObj(base[k], extend[k]);
    } else if (utils_isArray(base[k]) && utils_isArray(extend[k])) {
      base[k] = utils_mergeArr(base[k], extend[k]);
    } else {
      base[k] = extend[k];
    }
  }

  return base;
};

/* harmony default export */ var utils_mergeObj = (mergeObj);
;// CONCATENATED MODULE: ../../huxy/utils/merge.js




const merge = function (target) {
  const handleMerge = utils_isArray(target) ? utils_mergeArr : utils_mergeObj;

  for (var _len = arguments.length, extend = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    extend[_key - 1] = arguments[_key];
  }

  extend.map(item => target = handleMerge(target, item));
  return target;
};

/* harmony default export */ var utils_merge = (merge);
;// CONCATENATED MODULE: ../../huxy/utils/mergeClass.js

















const mergeClass = (def, input) => {
  var _def$split, _input$split;

  const defArr = (_def$split = def == null ? void 0 : def.split(' ')) != null ? _def$split : [];
  const inputArr = (_input$split = input == null ? void 0 : input.split(' ')) != null ? _input$split : [];
  return [...new Set([...defArr, ...inputArr])].filter(Boolean).join(' ');
};

/* harmony default export */ var utils_mergeClass = (mergeClass);
;// CONCATENATED MODULE: ../../huxy/utils/monthDate.js



const monthDate = function () {
  let d = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
  const newDate = new Date(d);
  const date = newDate.getDate();
  return [utils_addDays(1 - date), utils_addDays(utils_getMonthDays(newDate) - date)];
};

/* harmony default export */ var utils_monthDate = (monthDate);
;// CONCATENATED MODULE: ../../huxy/utils/moveNodes.js



const moveNodes = function (tree, fromId, toId, pos) {
  let idKey = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'id';
  let childKey = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'children';
  let fromItem = {};
  utils_selectedHandle((data, index) => {
    fromItem = data[index];
    data.splice(index, 1);
    return true;
  })(tree, fromId, idKey, childKey);
  utils_addAtPos(tree, toId, fromItem, pos, idKey, childKey);
  return tree;
};

/* harmony default export */ var utils_moveNodes = (moveNodes);
;// CONCATENATED MODULE: ../../huxy/utils/obj2arr.js
const obj2arr = function () {
  let obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'name';
  return Object.keys(obj).map(key => ({
    [name]: key,
    value: obj[key]
  }));
};

/* harmony default export */ var utils_obj2arr = (obj2arr);
;// CONCATENATED MODULE: ../../huxy/utils/omit.js


const omit = function () {
  let obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let keys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  keys = typeof keys === 'string' ? keys.split(',') : keys;
  const newObj = {};
  const newQuery = [];
  Object.keys(obj).map(key => !keys.includes(key) ? newObj[key] = obj[key] : newQuery.push({
    key,
    value: obj[key]
  }));
  return {
    newObj,
    newQuery
  };
};

/* harmony default export */ var utils_omit = (omit);
;// CONCATENATED MODULE: ../../huxy/utils/once.js
const once = function () {
  let fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : () => {};
  let called = false;
  return function () {
    if (!called) {
      called = true;
      return fn(...arguments);
    }
  };
};

/* harmony default export */ var utils_once = (once);
;// CONCATENATED MODULE: ../../huxy/utils/osType.js

const osList = [{
  name: 'MacOSX',
  reg: /macintosh/
}, {
  name: 'WindowsPhone',
  reg: /windows phone/
}, {
  name: 'Windows',
  reg: /windows/
}, {
  name: 'Android',
  reg: /android/
}, {
  name: 'Linux',
  reg: /linux/
}, {
  name: 'IOS',
  reg: /iphone|ipad|ipod/
}];

const osType = () => {
  var _osList$find$name, _osList$find;

  if (!utils_isBrowser()) {
    return;
  }

  const ua = window.navigator.userAgent.toLowerCase();
  return (_osList$find$name = (_osList$find = osList.find(item => item.reg.test(ua))) == null ? void 0 : _osList$find.name) != null ? _osList$find$name : 'Unkonwn';
};

/* harmony default export */ var utils_osType = (osType);
;// CONCATENATED MODULE: ../../huxy/utils/pick.js


const pick = (obj, arrKeys) => {
  if (obj == null || typeof obj !== 'object') {
    return {};
  }

  arrKeys = typeof arrKeys === 'string' ? arrKeys.split(',') : arrKeys;

  if (!utils_isArray(arrKeys)) {
    return obj;
  }

  const newObj = {};
  arrKeys.map(key => {
    if (key in obj) {
      newObj[key] = obj[key];
    }
  });
  return newObj;
};

/* harmony default export */ var utils_pick = (pick);
;// CONCATENATED MODULE: ../../huxy/utils/promisify.js
const promisify = function () {
  let func = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : () => {};
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return new Promise((resolve, reject) => func(...args, (err, result) => err ? reject(err) : resolve(result)));
  };
};

/* harmony default export */ var utils_promisify = (promisify);
;// CONCATENATED MODULE: ../../huxy/utils/randColor.js
const randColor = () => '#' + (~~(Math.random() * (1 << 24))).toString(16);

/* harmony default export */ var utils_randColor = (randColor);
;// CONCATENATED MODULE: ../../huxy/utils/randNum.js
const randNum = function () {
  let a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  let b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  let int = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  a < b && (a = [b, b = a][0]);

  if (int) {
    return ~~(Math.random() * (a - b + 1)) + b;
  }

  return Math.random() * (a - b) + b;
};

/* harmony default export */ var utils_randNum = (randNum);
;// CONCATENATED MODULE: ../../huxy/utils/randItem.js


const randItem = function () {
  let list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return list[utils_randNum(list.length)];
};

/* harmony default export */ var utils_randItem = (randItem);
;// CONCATENATED MODULE: ../../huxy/utils/randStr.js
const randStr = function () {
  let n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;
  let base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 36;
  return Math.random().toString(36).slice(2, n + 2);
};

/* harmony default export */ var utils_randStr = (randStr);
;// CONCATENATED MODULE: ../../huxy/utils/randTrue.js
const randTrue = () => Math.random() > 0.5;

/* harmony default export */ var utils_randTrue = (randTrue);
;// CONCATENATED MODULE: ../../huxy/utils/removeClass.js



const removeClass = function (ele) {
  let name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (!utils_isElement(ele)) {
    return;
  }

  const nameArr = name.split(' ').filter(Boolean);
  const targetName = ele.className.split(' ');
  const names = targetName.filter(v => !nameArr.includes(v));
  ele.className = names.join(' ');
};

/* harmony default export */ var utils_removeClass = (removeClass);
;// CONCATENATED MODULE: ../../huxy/utils/resize.js





const createObj = (element, resizeListener) => {
  element = utils_isElement(element) ? element : document.body;

  if (getComputedStyle(element).position === 'static') {
    element.style.position = 'relative';
  }

  const obj = document.createElement('object');
  obj.setAttribute('style', 'display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0');
  obj.setAttribute('class', 'resize-sensor');

  obj.onload = () => {
    obj.contentDocument.defaultView.addEventListener('resize', resizeListener, false);
    resizeListener();
  };

  obj.type = 'text/html';
  element.appendChild(obj);
  obj.data = 'about:blank';
  return obj;
};

const resize = function (element) {
  let delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 60;

  if (!utils_isBrowser()) {
    return;
  }

  element = utils_isRef(element) ? element.current : element;
  let domObj = undefined;
  let listeners = [];
  const resizeListener = utils_debounce(() => listeners.map(listener => listener(element)), delay);

  const bind = cb => {
    if (!domObj) {
      domObj = createObj(element, resizeListener);
    }

    if (listeners.indexOf(cb) === -1) {
      listeners.push(cb);
    }
  };

  const unbind = cb => {
    const idx = listeners.indexOf(cb);

    if (idx !== -1) {
      listeners.splice(idx, 1);
    }

    if (listeners.length === 0 && domObj) {
      destroy();
    }
  };

  const destroy = () => {
    if (domObj && domObj.parentNode) {
      if (domObj.contentDocument) {
        domObj.contentDocument.defaultView.removeEventListener('resize', resizeListener, false);
      }

      domObj.parentNode.removeChild(domObj);
      domObj = undefined;
      listeners = [];
    }
  };

  return {
    element,
    bind,
    unbind,
    destroy
  };
};

/* harmony default export */ var utils_resize = (resize);
;// CONCATENATED MODULE: ../../huxy/utils/rgba2hex.js
const rgba2hex = function () {
  let r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  let g = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  let b = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  let a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;

  if (a === 1) {
    return hex;
  }

  a = Math.round(a * 255).toString(16);
  a = a.length === 1 ? `0${a}` : a.length === 3 ? 'ff' : a;
  return `${hex}${a}`;
};

/* harmony default export */ var utils_rgba2hex = (rgba2hex);
// EXTERNAL MODULE: ../../../node_modules/core-js/modules/web.immediate.js
var web_immediate = __webpack_require__(7282);
;// CONCATENATED MODULE: ../../huxy/utils/scheduler.js


const getCurrentTime = () => {
  var _performance;

  return typeof ((_performance = performance) == null ? void 0 : _performance.now) === 'function' ? performance.now() : new Date().getTime();
};

const performTask = callback => {
  if (typeof setImmediate === 'function') {
    return () => setImmediate(callback);
  }

  if (typeof MessageChannel === 'function') {
    const {
      port1,
      port2
    } = new MessageChannel();
    port1.onmessage = callback;
    return () => port2.postMessage(null);
  }

  return () => setTimeout(callback, 0);
};

const queue = () => {
  const hub = [];

  const push = item => {
    hub.push(item);
    update(item);
  };

  const peek = () => hub[0];

  const shift = () => hub.shift();

  const updateItem = item => item.startTime = getCurrentTime();

  const update = item => {
    updateItem(item);
    hub.sort((a, b) => a.startTime - b.startTime);
  };

  return {
    hub,
    push,
    peek,
    shift,
    update
  };
};

const scheduler = function () {
  let intervalMs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
  const {
    hub,
    push,
    peek,
    shift,
    update
  } = queue();

  const flushWork = () => {
    if (workLoop()) {
      schedulePerformWork();
    }
  };

  const schedulePerformWork = performTask(flushWork);

  const shouldYield = currentTask => getCurrentTime() - currentTask.startTime > intervalMs;

  const workLoop = () => {
    let currentTask = peek();

    while (currentTask) {
      if (shouldYield(currentTask)) {
        update(currentTask);
        break;
      }

      const {
        task
      } = currentTask;

      if (typeof task === 'function') {
        currentTask.task = null;
        task();
      } else {
        shift();
      }

      currentTask = peek();
    }

    return currentTask;
  };

  const createTask = function () {
    let task = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : () => {};
    push({
      task
    });

    if (hub.length < 2) {
      schedulePerformWork();
    }
  };

  return createTask;
};

/* harmony default export */ var utils_scheduler = (scheduler);
;// CONCATENATED MODULE: ../../huxy/utils/scrollTop.js


const scrollTop = () => {
  var _ref, _document$documentEle;

  return utils_isBrowser() && ((_ref = (_document$documentEle = document.documentElement.scrollTop) != null ? _document$documentEle : window.pageYOffset) != null ? _ref : document.body.scrollTop);
};

/* harmony default export */ var utils_scrollTop = (scrollTop);
;// CONCATENATED MODULE: ../../huxy/utils/scrollIsBottom.js




const scrollIsBottom = () => utils_isBrowser() && document.documentElement.scrollHeight - utils_scrollTop() === utils_getViewportSize().height;

/* harmony default export */ var utils_scrollIsBottom = (scrollIsBottom);
;// CONCATENATED MODULE: ../../huxy/utils/scrollTo.js


const scrollTo = function () {
  let top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return utils_isBrowser() && window.scrollTo({
    top,
    behavior: 'smooth'
  });
};

/* harmony default export */ var utils_scrollTo = (scrollTo);
;// CONCATENATED MODULE: ../../huxy/utils/scrollToAnchor.js


const scrollToAnchor = function () {
  var _ref$scrollIntoView;

  let ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : utils_isBrowser() && document.body;
  return ref == null ? void 0 : (_ref$scrollIntoView = ref.scrollIntoView) == null ? void 0 : _ref$scrollIntoView.call(ref, {
    behavior: 'smooth',
    block: 'center'
  });
};

/* harmony default export */ var utils_scrollToAnchor = (scrollToAnchor);
;// CONCATENATED MODULE: ../../huxy/utils/session.js
const session = {
  get: name => {
    let data = null;

    try {
      data = JSON.parse(sessionStorage.getItem(name));
    } catch (err) {
      data = sessionStorage.getItem(name);
    }

    return data;
  },
  set: (name, data) => {
    if (typeof data === 'object') {
      data = JSON.stringify(data);
    }

    sessionStorage.setItem(name, data);
  },
  rm: name => {
    sessionStorage.removeItem(name);
  },
  clear: () => {
    sessionStorage.clear();
  }
};
/* harmony default export */ var utils_session = (session);
;// CONCATENATED MODULE: ../../huxy/utils/setMeta.js



const setMeta = metaData => {
  const metas = utils_getMeta(metaData); // [...metas].map(v=>document.head.appendChild(v));

  utils_isBrowser() && document.head.appendChild(...metas);
};

/* harmony default export */ var utils_setMeta = (setMeta);
;// CONCATENATED MODULE: ../../huxy/utils/sort.js
const sort = function (arr) {
  let key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  let desc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return [...(arr || [])].sort((x, y) => {
    const a = key ? x[key] : x;
    const b = key ? y[key] : y;

    if (!isNaN(Number(a)) && !isNaN(Number(a))) {
      return desc ? b - a : a - b;
    }

    if (typeof a === 'string' && typeof b === 'string') {
      return desc ? b.localeCompare(a) : a.localeCompare(b);
    }

    if (typeof a === 'string' && typeof b === 'number') {
      return desc ? -1 : 1;
    }

    if (typeof a === 'number' || typeof a === 'string') {
      return desc ? 1 : -1;
    }

    return desc ? -1 : 1;
  });
};

/* harmony default export */ var utils_sort = (sort);
;// CONCATENATED MODULE: ../../huxy/utils/sortObj.js


const sortObj = obj => {
  if (!utils_isObject(obj)) {
    return {};
  }

  const newObj = {};
  Object.keys(obj).sort().map(key => {
    newObj[key] = obj[key];
  });
  return newObj;
};

/* harmony default export */ var utils_sortObj = (sortObj);
;// CONCATENATED MODULE: ../../huxy/utils/storage.js
const storage = {
  get: name => {
    let data = localStorage.getItem(name);

    try {
      data = JSON.parse(data);
    } catch (err) {}

    return data;
  },
  set: (name, data) => {
    if (typeof data === 'object') {
      data = JSON.stringify(data);
    }

    localStorage.setItem(name, data);
  },
  rm: name => {
    localStorage.removeItem(name);
  },
  clear: () => {
    localStorage.clear();
  }
};
/* harmony default export */ var utils_storage = (storage);
;// CONCATENATED MODULE: ../../huxy/utils/str2code.js
const str2code = function (str) {
  let hasReturn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  str = hasReturn ? str : `return ${str};`;
  const exec = Function(str);
  return exec();
};

/* harmony default export */ var utils_str2code = (str2code);
;// CONCATENATED MODULE: ../../huxy/utils/sysLang.js


const sysLang = () => utils_isBrowser() && (window.navigator.language || window.navigator.userLanguage).toLowerCase().slice(0, 2);

/* harmony default export */ var utils_sysLang = (sysLang);
;// CONCATENATED MODULE: ../../huxy/utils/template.js
/* const template=(strings, ...keys)=>{
  return (...values)=>{
    const dict = values[values.length - 1] || {};
    const result = [strings[0]];
    keys.map((key, i)=>{
      const value = Number.isInteger(key) ? values[key] : dict[key];
      result.push(value, strings[i + 1]);
    });
    return result.join('');
  };
}; */
const template = function (strings) {
  for (var _len = arguments.length, keys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    keys[_key - 1] = arguments[_key];
  }

  const tmpl = [];
  strings.map((str, i) => {
    var _keys$i;

    tmpl.push(str, (_keys$i = keys[i]) != null ? _keys$i : '');
  });
  return tmpl.join('');
};

/* harmony default export */ var utils_template = (template);
;// CONCATENATED MODULE: ../../huxy/utils/throttle.js
/* const throttle=(fn,delay=60)=>{
  let timer=null,start=0;
  return function(...args){
    const current=+new Date();
    clearTimeout(timer);
    if(current-start>delay){
      fn.apply(this,args);
      start=current;
    }else{
      timer=setTimeout(()=>{
        fn.apply(this,args);
        start=current;
      },delay);
    }
  };
}; */
const throttle = function () {
  let fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : () => {};
  let delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 60;
  let timer = null;
  return function () {
    if (!timer) {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      fn.apply(this, args);
      timer = setTimeout(() => timer = null, delay);
    }
  };
};

/* harmony default export */ var utils_throttle = (throttle);
;// CONCATENATED MODULE: ../../huxy/utils/timeInterval.js


const timeBase = date => [12, utils_getMonthDays(date), 24, 60, 60];
const minus = function () {
  let start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  let base = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  let carry = false;
  const gap = [];
  end.map((v, i) => {
    const endValue = carry ? v - 1 : v;
    const diff = endValue - start[i];

    if (diff < 0) {
      gap[i] = diff + (base[i] || 10);
      carry = true;
    } else {
      gap[i] = diff;
      carry = false;
    }
  });
  return gap.reverse();
};

const timeInterval = function (start) {
  let end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();

  if (new Date(start) - new Date(end) > 0) {
    start = [end, end = start][0];
  }

  const base = timeBase(end).reverse();
  const sDate = utils_getTime(start).slice(0, -1).reverse();
  const eDate = utils_getTime(end).slice(0, -1).reverse();
  return minus(sDate, eDate, base);
};

/* harmony default export */ var utils_timeInterval = (timeInterval);
;// CONCATENATED MODULE: ../../huxy/utils/timeGap.js

const timeUnit = ['???', '???', '???', '???', '???', '???'];

const timeGap = function (start) {
  let end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  const gap = utils_timeInterval(start, end);
  const index = gap.findIndex(v => v > 0);
  const unitTime = gap.map((v, i) => `${v || 0}${timeUnit[i]}`);
  return unitTime.slice(index).join('');
};

/* harmony default export */ var utils_timeGap = (timeGap);
;// CONCATENATED MODULE: ../../huxy/utils/toggleClass.js





const toggleClass = (ele, name) => {
  if (!utils_isElement(ele)) {
    return;
  }

  if (utils_hasClass(ele, name)) {
    utils_removeClass(ele, name);
  } else {
    utils_addClass(ele, name);
  }
};

/* harmony default export */ var utils_toggleClass = (toggleClass);
;// CONCATENATED MODULE: ../../huxy/utils/traverList.js


const traverList = fn => function (arr) {
  let childKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'children';

  if (!utils_isArray(arr)) {
    return arr;
  }

  const traver = data => {
    data.map(v => {
      if (utils_isArray(v[childKey])) {
        v[childKey] = traver(v[childKey]);
      }
    });
    return fn(data);
  };

  return traver(arr);
};

/* harmony default export */ var utils_traverList = (traverList);
;// CONCATENATED MODULE: ../../huxy/utils/unescapeHTML.js
const unescapeHTML = str => str.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g, tag => ({
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&#39;': '\'',
  '&quot;': '"'
})[tag] || tag);

/* harmony default export */ var utils_unescapeHTML = (unescapeHTML);
;// CONCATENATED MODULE: ../../huxy/utils/updateId.js


const updateId = function (tree) {
  let idKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'fuckId';
  let childKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'children';
  return utils_traverItem((item, parent, index) => {
    item[idKey] = [...parent.map(v => v['@@index']), index].join('-');
  })(tree, childKey);
};

/* harmony default export */ var utils_updateId = (updateId);
;// CONCATENATED MODULE: ../../huxy/utils/updateTreeNodes.js


const updateTreeNodes = function (tree, id, nodes) {
  let childKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'children';
  return utils_selectedHandle((data, index) => {
    const item = data[index];
    item[childKey] = [...(item[childKey] || []), ...nodes];
    return true;
  })(tree, id);
};

/* harmony default export */ var utils_updateTreeNodes = (updateTreeNodes);
;// CONCATENATED MODULE: ../../huxy/utils/validObj.js
const validObj = function () {
  let obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const newObj = {};
  Object.keys(obj).map(v => {
    if (obj[v] != null) {
      newObj[v] = obj[v];
    }
  });
  return newObj;
};

/* harmony default export */ var utils_validObj = (validObj);
;// CONCATENATED MODULE: ../../huxy/utils/watchScreen.js



const watchScreen = callback => {
  if (!utils_isBrowser()) {
    return;
  }

  fullscreenchange.map(fsc => document.addEventListener(fsc, callback, false));

  const destroy = () => fullscreenchange.map(fsc => document.removeEventListener(fsc, callback, false));

  return destroy;
};

/* harmony default export */ var utils_watchScreen = (watchScreen);
;// CONCATENATED MODULE: ../../huxy/utils/watermark.js



const watermark = function () {
  let {
    container = utils_isBrowser() && document.body,
    width = '220px',
    height = '200px',
    textAlign = 'center',
    textBaseline = 'middle',
    font = '20px microsoft yahei',
    fillStyle = 'rgba(202,202,202,0.4)',
    content = '????????????',
    rotate = '-30',
    zIndex = 1000
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (!utils_isBrowser()) {
    return;
  }

  container = utils_isRef(container) ? container.current : container;

  if (!container) {
    return;
  }

  const oldCanvas = container.firstChild;

  if ((oldCanvas == null ? void 0 : oldCanvas.className) === 'watermark-canvas') {
    container.removeChild(oldCanvas);
  }

  const canvas = document.createElement('canvas');
  canvas.setAttribute('width', width);
  canvas.setAttribute('height', height);
  const ctx = canvas.getContext('2d');
  ctx.textAlign = textAlign;
  ctx.textBaseline = textBaseline;
  ctx.font = font;
  ctx.fillStyle = fillStyle;
  ctx.rotate(Math.PI / 180 * rotate);
  ctx.fillText(content, parseFloat(width) / 2, parseFloat(height) / 2);
  const base64Url = canvas.toDataURL();
  const watermarkDiv = document.createElement('div');
  watermarkDiv.setAttribute('style', `
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:${zIndex};
    pointer-events:none;
    background-repeat:repeat;
    background-image:url('${base64Url}')`);
  container.style.position = 'relative';
  container.insertBefore(watermarkDiv, container.firstChild);
};

/* harmony default export */ var utils_watermark = (watermark);
;// CONCATENATED MODULE: ../../huxy/utils/weekDate.js


const weekDate = function () {
  let d = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
  const newDate = new Date(d);
  const day = newDate.getDay();
  return [utils_addDays(1 - day), utils_addDays(7 - day)];
};

/* harmony default export */ var utils_weekDate = (weekDate);
;// CONCATENATED MODULE: ../../huxy/utils/wrapPromise.js


const wrapPromise = promiseFn => {
  if (!utils_isAsync(promiseFn)) {
    return {};
  }

  let status = 'pending';
  let result;
  const suspender = promiseFn.then(res => {
    status = 'success';
    result = res;
  }).catch(err => {
    status = 'error';
    result = err;
  });

  const read = () => {
    if (status === 'pending') {
      throw suspender;
    } else if (status === 'error') {
      throw result;
    } else if (status === 'success') {
      return result;
    }
  };

  return {
    read
  };
};

/* harmony default export */ var utils_wrapPromise = (wrapPromise);
;// CONCATENATED MODULE: ../../huxy/utils/index.js

























































































































 // export {default as setRem} from './setRem';





























}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});