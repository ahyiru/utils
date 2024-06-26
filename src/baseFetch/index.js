/******/ var __webpack_modules__ = ({

/***/ 969:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isAsync__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2998);

const cancelablePromise = (promise, delay = 3e5, msg = "\u8BF7\u6C42\u8D85\u65F6\uFF01") => {
  if (!(0,_isAsync__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(promise)) {
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
/* harmony default export */ __webpack_exports__.A = (cancelablePromise);


/***/ }),

/***/ 8842:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const getType = (value) => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
/* harmony default export */ __webpack_exports__.A = (getType);


/***/ }),

/***/ 2998:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8842);
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1407);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56);



const isAsync = (value) => (0,_getType__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(value) === "promise" || (0,_isObject__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(value) && (0,_isFunction__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(value.then);
/* harmony default export */ __webpack_exports__.A = (isAsync);


/***/ }),

/***/ 56:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8842);

const isFunction = (value) => (0,_getType__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(value) === "function";
/* harmony default export */ __webpack_exports__.A = (isFunction);


/***/ }),

/***/ 1407:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8842);

const isObject = (value) => (0,_getType__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(value) === "object";
/* harmony default export */ __webpack_exports__.A = (isObject);


/***/ }),

/***/ 846:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1407);

const params2data = (params) => {
  if (!(0,_isObject__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(params)) {
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
/* harmony default export */ __webpack_exports__.A = (params2data);


/***/ }),

/***/ 8167:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1407);

const params2str = (params) => {
  if (!(0,_isObject__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(params)) {
    return "";
  }
  const arr = [];
  Object.keys(params).map((v, k) => {
    const p = k > 0 ? "&" : "?";
    arr.push(`${p}${v}=${params[v]}`);
  });
  return arr.join("");
};
/* harmony default export */ __webpack_exports__.A = (params2str);


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
/* harmony import */ var _params2str__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8167);
/* harmony import */ var _params2data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(846);
/* harmony import */ var _cancelablePromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(969);



const transform = [
  {
    type: "data",
    headers: { "Content-Type": "application/json" },
    body: (data) => JSON.stringify(data)
  },
  {
    type: "formData",
    // headers:{'Content-Type':'multipart/form-data'},
    body: (data) => (0,_params2data__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(data)
  },
  {
    type: "form",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: (data) => (0,_params2str__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(data).slice(1)
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
    url = `${url}${(0,_params2str__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(query)}`;
  }
  const { promiseFn } = (0,_cancelablePromise__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(
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
/* harmony default export */ __webpack_exports__.A = (baseFetch);

var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
