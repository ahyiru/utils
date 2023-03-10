/******/ var __webpack_modules__ = ({

/***/ 3890:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3498);
/* harmony import */ var _isElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4782);


const getOffset = (element = null) => {
  if (!(0,_isBrowser__WEBPACK_IMPORTED_MODULE_0__["default"])()) {
    return {
      left: 0,
      top: 0
    };
  }
  if ((0,_isElement__WEBPACK_IMPORTED_MODULE_1__["default"])(element)) {
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
/* harmony default export */ __webpack_exports__["default"] = (getOffset);


/***/ }),

/***/ 6837:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const getType = (value) => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
/* harmony default export */ __webpack_exports__["default"] = (getType);


/***/ }),

/***/ 3498:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const isBrowser = () => ![typeof window, typeof document].includes("undefined");
/* harmony default export */ __webpack_exports__["default"] = (isBrowser);


/***/ }),

/***/ 4782:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6837);

const isElement = (value) => (0,_getType__WEBPACK_IMPORTED_MODULE_0__["default"])(value).indexOf("element") > -1;
/* harmony default export */ __webpack_exports__["default"] = (isElement);


/***/ }),

/***/ 3849:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3498);

const isTouch = () => (0,_isBrowser__WEBPACK_IMPORTED_MODULE_0__["default"])() && (window.ontouchstart || navigator.maxTouchPoints);
/* harmony default export */ __webpack_exports__["default"] = (isTouch);


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
/* harmony import */ var _isTouch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3849);
/* harmony import */ var _getOffset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3890);


const getTouchPosition = (evt) => {
  const { left, top } = (0,_getOffset__WEBPACK_IMPORTED_MODULE_0__["default"])();
  return {
    touchX: (0,_isTouch__WEBPACK_IMPORTED_MODULE_1__["default"])() ? evt?.touches?.[0]?.pageX : evt?.pageX || evt?.clientX + left,
    touchY: (0,_isTouch__WEBPACK_IMPORTED_MODULE_1__["default"])() ? evt?.touches?.[0]?.pageY : evt?.pageY || evt?.clientY + top
  };
};
/* harmony default export */ __webpack_exports__["default"] = (getTouchPosition);

}();
__webpack_exports__ = __webpack_exports__["default"];
var __webpack_exports__default = __webpack_exports__["default"];
export { __webpack_exports__default as default };
