/******/ var __webpack_modules__ = ({

/***/ 1407:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8842);

const isObject = (value) => (0,_getType__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(value) === "object";
/* harmony default export */ __webpack_exports__.A = (isObject);


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


/***/ }),

/***/ 8842:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const getType = (value) => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
/* harmony default export */ __webpack_exports__.A = (getType);


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
/* harmony import */ var _params2str_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8167);

const request = async ({ url, params, responseType = "json", data, ...opts }) => {
  if (typeof data === "object") {
    opts.body = JSON.stringify(data);
  }
  const res = await fetch(`${url}${(0,_params2str_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(params)}`, opts);
  const response = await res[responseType]();
  return {
    data: response,
    status: res.status
  };
};
/* harmony default export */ __webpack_exports__.A = (request);

var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
