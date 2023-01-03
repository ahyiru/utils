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

/***/ 7425:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ utils_baseFetch; }
});

;// CONCATENATED MODULE: ../../../node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
;// CONCATENATED MODULE: ../../../node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/esm/toPrimitive.js

function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
;// CONCATENATED MODULE: ../../../node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js


function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
;// CONCATENATED MODULE: ../../../node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
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
;// CONCATENATED MODULE: ../../../node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
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
;// CONCATENATED MODULE: ../../../node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js

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
// EXTERNAL MODULE: ../../huxy/utils/params2str.js
var params2str = __webpack_require__(7895);
// EXTERNAL MODULE: ../../huxy/utils/params2data.js
var params2data = __webpack_require__(498);
// EXTERNAL MODULE: ../../huxy/utils/cancelablePromise.js
var cancelablePromise = __webpack_require__(322);
;// CONCATENATED MODULE: ../../huxy/utils/baseFetch.js


const _excluded = ["headers", "dataType", "data", "formData", "form", "params"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



const transform = [{
  type: 'data',
  headers: {
    'Content-Type': 'application/json'
  },
  body: data => JSON.stringify(data)
}, {
  type: 'formData',
  // headers:{'Content-Type':'multipart/form-data'},
  body: data => (0,params2data["default"])(data)
}, {
  type: 'form',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: data => (0,params2str["default"])(data).slice(1)
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
  let defaultHeaders;
  // let defaultHeaders={'Content-Type':'application/x-www-form-urlencoded'};

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
    url = `${url}${(0,params2str["default"])(query)}`;
  }
  const {
    promiseFn
  } = (0,cancelablePromise["default"])(fetch(url, _objectSpread({
    method: method,
    mode: 'cors',
    credentials: 'include',
    cache: 'default',
    headers: _objectSpread(_objectSpread({}, defaultHeaders), headers)
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
    throw error;
  });
};
/* harmony default export */ var utils_baseFetch = (baseFetch);

/***/ }),

/***/ 322:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isAsync__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7178);

const cancelablePromise = function (promise) {
  let delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 120000;
  let msg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '请求超时！';
  if (!(0,_isAsync__WEBPACK_IMPORTED_MODULE_0__["default"])(promise)) {
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
/* harmony default export */ __webpack_exports__["default"] = (cancelablePromise);

/***/ }),

/***/ 5777:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const getType = value => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
/* harmony default export */ __webpack_exports__["default"] = (getType);

/***/ }),

/***/ 7178:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5777);
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8859);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2348);



const isAsync = value => (0,_getType__WEBPACK_IMPORTED_MODULE_0__["default"])(value) === 'promise' || (0,_isObject__WEBPACK_IMPORTED_MODULE_1__["default"])(value) && (0,_isFunction__WEBPACK_IMPORTED_MODULE_2__["default"])(value.then);
/* harmony default export */ __webpack_exports__["default"] = (isAsync);

/***/ }),

/***/ 2348:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5777);

const isFunction = value => (0,_getType__WEBPACK_IMPORTED_MODULE_0__["default"])(value) === 'function';
/* harmony default export */ __webpack_exports__["default"] = (isFunction);

/***/ }),

/***/ 8859:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5777);

const isObject = value => (0,_getType__WEBPACK_IMPORTED_MODULE_0__["default"])(value) === 'object';
/* harmony default export */ __webpack_exports__["default"] = (isObject);

/***/ }),

/***/ 498:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8859);

const params2data = params => {
  if (!(0,_isObject__WEBPACK_IMPORTED_MODULE_0__["default"])(params)) {
    return {};
    // throw TypeError('参数必须为object！');
  }

  const form = new FormData();
  Object.keys(params).map(key => {
    if (params[key] != null) {
      form.append(key, params[key]);
    }
  });
  return form;
};
/* harmony default export */ __webpack_exports__["default"] = (params2data);

/***/ }),

/***/ 7895:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8859);

const params2str = params => {
  if (!(0,_isObject__WEBPACK_IMPORTED_MODULE_0__["default"])(params)) {
    return '';
    // throw TypeError('参数必须为object！');
  }

  const arr = [];
  Object.keys(params).map((v, k) => {
    const p = k > 0 ? '&' : '?';
    arr.push(`${p}${v}=${params[v]}`);
  });
  return arr.join('');
};
/* harmony default export */ __webpack_exports__["default"] = (params2str);

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
/* harmony import */ var _baseFetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7425);

const TIMEOUT = 120 * 1000;
const resHandler = response => response.json().then(result => result);

// const reqHandler=response=>response.json().then(result=>result);

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
    return (0,_baseFetch__WEBPACK_IMPORTED_MODULE_0__["default"])(handler)((method || 'get').toUpperCase());
  };
};
/* harmony default export */ __webpack_exports__["default"] = (fetcher);
}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});