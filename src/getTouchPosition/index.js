/******/ var __webpack_modules__ = ({

/***/ 333:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5890);

const isTouch = () => (0,_isBrowser__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)() && (window.ontouchstart || navigator.maxTouchPoints);
/* harmony default export */ __webpack_exports__.A = (isTouch);


/***/ }),

/***/ 5529:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5890);
/* harmony import */ var _isElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9622);


const getOffset = (element = null) => {
  if (!(0,_isBrowser__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)()) {
    return {
      left: 0,
      top: 0
    };
  }
  if ((0,_isElement__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(element)) {
    return {
      left: element.scrollLeft,
      top: element.scrollTop
    };
  }
  return {
    left: window.pageXOffset ?? document.documentElement.scrollLeft ?? document.body.scrollLeft,
    top: window.pageYOffset ?? document.documentElement.scrollTop ?? document.body.scrollTop
  };
};
/* harmony default export */ __webpack_exports__.A = (getOffset);


/***/ }),

/***/ 5890:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const isBrowser = () => ![typeof window, typeof document].includes("undefined");
/* harmony default export */ __webpack_exports__.A = (isBrowser);


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
/* harmony import */ var _isTouch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(333);
/* harmony import */ var _getOffset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5529);


const getTouchPosition = (evt) => {
  const { left, top } = (0,_getOffset__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)();
  return {
    touchX: (0,_isTouch__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)() ? evt?.touches?.[0]?.pageX : evt?.pageX || evt?.clientX + left,
    touchY: (0,_isTouch__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)() ? evt?.touches?.[0]?.pageY : evt?.pageY || evt?.clientY + top
  };
};
/* harmony default export */ __webpack_exports__.A = (getTouchPosition);

var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
