/******/ var __webpack_modules__ = ({

/***/ 4242:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5890);

const scrollTop = () => (0,_isBrowser__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)() && (window.pageYOffset ?? document.documentElement.scrollTop ?? document.body.scrollTop);
/* harmony default export */ __webpack_exports__.A = (scrollTop);


/***/ }),

/***/ 5890:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const isBrowser = () => ![typeof window, typeof document].includes("undefined");
/* harmony default export */ __webpack_exports__.A = (isBrowser);


/***/ }),

/***/ 8081:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5890);
/* harmony import */ var _isElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9622);


const getViewportSize = (element = null) => {
  if (!(0,_isBrowser__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)()) {
    return {
      width: 0,
      height: 0
    };
  }
  if ((0,_isElement__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(element)) {
    return {
      width: element.clientWidth,
      height: element.clientHeight
    };
  }
  return {
    width: window.innerWidth ?? document.documentElement.clientWidth,
    height: window.innerHeight ?? document.documentElement.clientHeight
  };
};
/* harmony default export */ __webpack_exports__.A = (getViewportSize);


/***/ }),

/***/ 8842:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const getType = (value) => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
/* harmony default export */ __webpack_exports__.A = (getType);


/***/ }),

/***/ 9622:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8842);

const isElement = (value) => (0,_getType__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(value).indexOf("element") > -1;
/* harmony default export */ __webpack_exports__.A = (isElement);


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
/* harmony import */ var _isBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5890);
/* harmony import */ var _scrollTop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4242);
/* harmony import */ var _getViewportSize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8081);



const scrollIsBottom = () => (0,_isBrowser__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)() && document.documentElement.scrollHeight - (0,_scrollTop__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)() === (0,_getViewportSize__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)().height;
/* harmony default export */ __webpack_exports__.A = (scrollIsBottom);

var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
