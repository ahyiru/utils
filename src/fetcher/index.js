/******/ var __webpack_modules__ = ({

/***/ 7033:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _params2str__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8048);
/* harmony import */ var _params2data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4822);
/* harmony import */ var _cancelablePromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8990);



const transform = [
  {
    type: "data",
    headers: { "Content-Type": "application/json" },
    body: (data) => JSON.stringify(data)
  },
  {
    type: "formData",
    // headers:{'Content-Type':'multipart/form-data'},
    body: (data) => (0,_params2data__WEBPACK_IMPORTED_MODULE_0__["default"])(data)
  },
  {
    type: "form",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: (data) => (0,_params2str__WEBPACK_IMPORTED_MODULE_1__["default"])(data).slice(1)
  }
];
const transData = (types, dataType) => {
  const validDataType = ["data", "form", "formData", "params"].includes(dataType);
  const dataKeys = Object.keys(types).filter((item) => types[item]);
  if (dataKeys.length === 1) {
    const dataKey = dataKeys[0];
    const type = validDataType ? dataType : dataKey;
    if (type === "params") {
      return {
        query: types[dataKey]
      };
    }
    return {
      result: types[dataKey],
      type
    };
  } else if (dataKeys.length > 1) {
    const dataKey = dataKeys.filter((v) => v !== "params").slice(-1)[0];
    const type = validDataType ? dataType : dataKey;
    if (type === "params") {
      return {
        query: types["params"] || types[dataKey]
      };
    }
    return {
      query: types["params"],
      result: types[dataKey],
      type
    };
  }
};
const baseFetch = (handler, timeout) => (method) => (url, opt = {}) => {
  const { headers, dataType, data, formData, form, params, ...restOpt } = opt;
  const types = { data, formData, form, params };
  let defaultHeaders;
  const { query, result, type } = transData(types, dataType) || {};
  if (!restOpt.body && result) {
    const item = transform.find((v) => v.type === type);
    defaultHeaders = item.headers;
    restOpt.body = item.body(result);
  }
  if (query) {
    url = `${url}${(0,_params2str__WEBPACK_IMPORTED_MODULE_1__["default"])(query)}`;
  }
  const { promiseFn } = (0,_cancelablePromise__WEBPACK_IMPORTED_MODULE_2__["default"])(
    fetch(url, {
      method,
      mode: "cors",
      credentials: "include",
      cache: "default",
      headers: {
        ...defaultHeaders,
        ...headers
      },
      ...restOpt
    }),
    timeout
  );
  return promiseFn.then(({ result: result2, errMsg }) => {
    if (errMsg) {
      return handler({ status: 408, statusText: errMsg });
    }
    return handler(result2);
  });
};
/* harmony default export */ __webpack_exports__["default"] = (baseFetch);


/***/ }),

/***/ 8990:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isAsync__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9874);

const cancelablePromise = (promise, delay = 12e4, msg = "\u8BF7\u6C42\u8D85\u65F6\uFF01") => {
  if (!(0,_isAsync__WEBPACK_IMPORTED_MODULE_0__["default"])(promise)) {
    return {};
  }
  let cancelFn = null;
  let timer = null;
  const promiseFn = new Promise((resolve, reject) => {
    cancelFn = (msg2 = "canceled") => {
      clearTimeout(timer);
      resolve({ canceled: true, errMsg: msg2 });
    };
    if (delay) {
      delay = typeof delay !== "number" ? 12e4 : delay;
      timer = setTimeout(() => cancelFn(msg), delay);
    }
    promise.then((result) => {
      clearTimeout(timer);
      resolve({ result, errMsg: false });
    }).catch((error) => {
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

/***/ 6837:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const getType = (value) => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
/* harmony default export */ __webpack_exports__["default"] = (getType);


/***/ }),

/***/ 9874:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6837);
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8855);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7691);



const isAsync = (value) => (0,_getType__WEBPACK_IMPORTED_MODULE_0__["default"])(value) === "promise" || (0,_isObject__WEBPACK_IMPORTED_MODULE_1__["default"])(value) && (0,_isFunction__WEBPACK_IMPORTED_MODULE_2__["default"])(value.then);
/* harmony default export */ __webpack_exports__["default"] = (isAsync);


/***/ }),

/***/ 7691:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6837);

const isFunction = (value) => (0,_getType__WEBPACK_IMPORTED_MODULE_0__["default"])(value) === "function";
/* harmony default export */ __webpack_exports__["default"] = (isFunction);


/***/ }),

/***/ 8855:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6837);

const isObject = (value) => (0,_getType__WEBPACK_IMPORTED_MODULE_0__["default"])(value) === "object";
/* harmony default export */ __webpack_exports__["default"] = (isObject);


/***/ }),

/***/ 4822:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8855);

const params2data = (params) => {
  if (!(0,_isObject__WEBPACK_IMPORTED_MODULE_0__["default"])(params)) {
    return {};
  }
  const form = new FormData();
  Object.keys(params).map((key) => {
    if (params[key] != null) {
      form.append(key, params[key]);
    }
  });
  return form;
};
/* harmony default export */ __webpack_exports__["default"] = (params2data);


/***/ }),

/***/ 8048:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8855);

const params2str = (params) => {
  if (!(0,_isObject__WEBPACK_IMPORTED_MODULE_0__["default"])(params)) {
    return "";
  }
  const arr = [];
  Object.keys(params).map((v, k) => {
    const p = k > 0 ? "&" : "?";
    arr.push(`${p}${v}=${params[v]}`);
  });
  return arr.join("");
};
/* harmony default export */ __webpack_exports__["default"] = (params2str);


/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/* harmony import */ var _baseFetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7033);

const TIMEOUT = 120 * 1e3;
const resHandler = (response) => response.json().then((result) => result);
const fetcher = (handler = resHandler, timeout = TIMEOUT) => (method = "get") => (0,_baseFetch__WEBPACK_IMPORTED_MODULE_0__["default"])(handler)((method || "get").toUpperCase());
/* harmony default export */ __webpack_exports__["default"] = (fetcher);

}();
__webpack_exports__ = __webpack_exports__["default"];
var __webpack_exports__default = __webpack_exports__["default"];
export { __webpack_exports__default as default };
