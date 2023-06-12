/******/ var __webpack_modules__ = ({

/***/ 6837:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const getType = (value) => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
/* harmony default export */ __webpack_exports__["default"] = (getType);


/***/ }),

/***/ 3685:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6837);

const isArray = (value) => (0,_getType__WEBPACK_IMPORTED_MODULE_0__["default"])(value) === "array";
/* harmony default export */ __webpack_exports__["default"] = (isArray);


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
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3685);

const traverItem = (fn) => (arr, childKey = "children") => {
  if (!(0,_isArray__WEBPACK_IMPORTED_MODULE_0__["default"])(arr)) {
    return arr;
  }
  const traver = (data, parent = []) => data.map((item, k) => {
    const hasChild = (0,_isArray__WEBPACK_IMPORTED_MODULE_0__["default"])(item[childKey]);
    item = fn(item, parent, k, hasChild) || item;
    if (hasChild) {
      const { [childKey]: children, ...rest } = item;
      item[childKey] = traver(children, [...parent, { ...rest, "@@index": k }]);
    }
    return item;
  });
  return traver(arr);
};
/* harmony default export */ __webpack_exports__["default"] = (traverItem);

}();
__webpack_exports__ = __webpack_exports__["default"];
var __webpack_exports__default = __webpack_exports__["default"];
export { __webpack_exports__default as default };
