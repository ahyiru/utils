/******/ var __webpack_modules__ = ({

/***/ 34:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const ten2Base = (num = 0, base = 2) => Number(num).toString(base);
/* harmony default export */ __webpack_exports__.A = (ten2Base);


/***/ }),

/***/ 7116:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const base2Ten = (num = 0, base = 2) => parseInt(String(num), base);
/* harmony default export */ __webpack_exports__.A = (base2Ten);


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
/* harmony import */ var _ten2Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var _base2Ten__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7116);


const baseConversion = (num = 0, base = 2, to = 16) => (0,_ten2Base__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)((0,_base2Ten__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(num, base), to);
/* harmony default export */ __webpack_exports__.A = (baseConversion);

var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
