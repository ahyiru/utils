/******/ var __webpack_modules__ = ({

/***/ 6837:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const getType = (value) => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
/* harmony default export */ __webpack_exports__.Z = (getType);


/***/ }),

/***/ 9874:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6837);
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8855);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7691);



const isAsync = (value) => (0,_getType__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(value) === "promise" || (0,_isObject__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(value) && (0,_isFunction__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(value.then);
/* harmony default export */ __webpack_exports__.Z = (isAsync);


/***/ }),

/***/ 7691:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6837);

const isFunction = (value) => (0,_getType__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(value) === "function";
/* harmony default export */ __webpack_exports__.Z = (isFunction);


/***/ }),

/***/ 8855:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6837);

const isObject = (value) => (0,_getType__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(value) === "object";
/* harmony default export */ __webpack_exports__.Z = (isObject);


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
/* harmony import */ var _isAsync__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9874);

const wrapPromise = (promiseFn) => {
  if (!(0,_isAsync__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(promiseFn)) {
    return {};
  }
  let status = "pending";
  let result;
  const suspender = promiseFn.then((res) => {
    status = "success";
    result = res;
  }).catch((err) => {
    status = "error";
    result = err;
  });
  const read = () => {
    if (status === "pending") {
      throw suspender;
    } else if (status === "error") {
      throw result;
    } else if (status === "success") {
      return result;
    }
  };
  return { read };
};
/* harmony default export */ __webpack_exports__.Z = (wrapPromise);

}();
var __webpack_exports__default = __webpack_exports__.Z;
export { __webpack_exports__default as default };
