(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 2769:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5593);
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3487);
/* harmony import */ var _isReactEle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7391);
/* harmony import */ var _isVueEle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(675);
/* harmony import */ var _hasProp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6166);






const clone = obj => {
  if (!(0,_isArray__WEBPACK_IMPORTED_MODULE_0__["default"])(obj) && !(0,_isObject__WEBPACK_IMPORTED_MODULE_1__["default"])(obj)) {
    return obj;
  }

  const newObj = (0,_isArray__WEBPACK_IMPORTED_MODULE_0__["default"])(obj) ? [] : {};

  for (const i in obj) {
    if ((0,_hasProp__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, i)) {
      const item = obj[i]; // newObj[i]=typeof item==='object'?item!==obj?clone(item):'cyclic':item;

      newObj[i] = (0,_isReactEle__WEBPACK_IMPORTED_MODULE_3__["default"])(item) || (0,_isVueEle__WEBPACK_IMPORTED_MODULE_4__["default"])(item) || typeof item !== 'object' ? item : item !== obj ? clone(item) : 'cyclic';
    } else {
      Object.setPrototypeOf(newObj, {
        [i]: obj[i]
      });
    }
  }

  return newObj;
};

/* harmony default export */ __webpack_exports__["default"] = (clone);

/***/ }),

/***/ 1092:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const emitter = () => {
  const hub = {};

  const on = (name, cb) => {
    if (!hub[name]) {
      hub[name] = [];
    }

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

/* harmony default export */ __webpack_exports__["default"] = (emitter);

/***/ }),

/***/ 6391:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const getType = value => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();

/* harmony default export */ __webpack_exports__["default"] = (getType);

/***/ }),

/***/ 6166:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const hasProp = (obj, prop) => Object.prototype.hasOwnProperty.call(obj != null ? obj : {}, prop);

/* harmony default export */ __webpack_exports__["default"] = (hasProp);

/***/ }),

/***/ 5593:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6391);


const isArray = value => (0,_getType__WEBPACK_IMPORTED_MODULE_0__["default"])(value) === 'array';

/* harmony default export */ __webpack_exports__["default"] = (isArray);

/***/ }),

/***/ 3487:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6391);


const isObject = value => (0,_getType__WEBPACK_IMPORTED_MODULE_0__["default"])(value) === 'object';

/* harmony default export */ __webpack_exports__["default"] = (isObject);

/***/ }),

/***/ 7391:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const isReactEle = value => (value == null ? void 0 : value['$$typeof']) && typeof value['$$typeof'] === 'symbol' && value['$$typeof']['description'] === 'react.element';

/* harmony default export */ __webpack_exports__["default"] = (isReactEle);

/***/ }),

/***/ 675:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const isVueEle = value => value == null ? void 0 : value.__v_isVNode;

/* harmony default export */ __webpack_exports__["default"] = (isVueEle);

/***/ }),

/***/ 1988:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ utils_mergeOwnProp; }
});

;// CONCATENATED MODULE: ../../../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js
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
// EXTERNAL MODULE: ../../huxy/utils/isObject.js
var isObject = __webpack_require__(3487);
// EXTERNAL MODULE: ../../huxy/utils/hasProp.js
var hasProp = __webpack_require__(6166);
;// CONCATENATED MODULE: ../../huxy/utils/mergeOwnProp.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




const getOwnProp = obj => {
  const ownProp = {};

  for (let k in obj) {
    if (!(0,hasProp["default"])(obj, k)) {
      ownProp[k] = obj[k];
    }
  }

  return ownProp;
};

const mergeOwnProp = (base, extend) => {
  if (!(0,isObject["default"])(base)) {
    return extend;
  }

  if (!(0,isObject["default"])(extend)) {
    return base;
  }

  const ownProp = _objectSpread(_objectSpread({}, getOwnProp(base)), getOwnProp(extend));

  const newObj = _objectSpread(_objectSpread({}, base), extend);

  Object.keys(ownProp).map(prop => {
    Object.setPrototypeOf(newObj, {
      [prop]: ownProp[prop]
    });
  });
  return newObj;
};

/* harmony default export */ var utils_mergeOwnProp = (mergeOwnProp);

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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3487);
/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2769);
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1092);
/* harmony import */ var _mergeOwnProp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1988);





const createStore = () => {
  const {
    on,
    emit,
    off
  } = (0,_emitter__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const store = {};

  const getState = name => (0,_clone__WEBPACK_IMPORTED_MODULE_1__["default"])(store[name]);

  const setState = function (state) {
    let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (typeof state === 'function') {
      state = state((0,_clone__WEBPACK_IMPORTED_MODULE_1__["default"])(store));
    }

    if (!(0,_isObject__WEBPACK_IMPORTED_MODULE_2__["default"])(state)) {
      throw TypeError('必须传入object对象！');
    }

    const newState = (0,_clone__WEBPACK_IMPORTED_MODULE_1__["default"])(state);
    Object.keys(newState).map(key => {
      const oldItem = store[key];
      const newItem = newState[key];
      const item = (0,_isObject__WEBPACK_IMPORTED_MODULE_2__["default"])(newItem) && (0,_isObject__WEBPACK_IMPORTED_MODULE_2__["default"])(oldItem) ? (0,_mergeOwnProp__WEBPACK_IMPORTED_MODULE_3__["default"])(oldItem, newItem) : newItem;
      !init && emit(key, item);
      store[key] = item;
    }); // return off;
  };

  const subscribe = (name, cb) => {
    on(name, cb);
    /* const value = getState(name);
    if(value !== undefined){
      cb(value);
    } */

    return () => off(name, cb);
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
    unsubscribe: off,
    clean
  };
};

/* harmony default export */ __webpack_exports__["default"] = (createStore);
}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});