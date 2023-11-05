/******/ var __webpack_modules__ = ({

/***/ 1433:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const padStart = (str = "", n = 2, pad = "0") => {
  const len = str.length;
  if (len >= n) {
    return str;
  }
  const fill = Array(n - len + 1).join(pad);
  return `${fill}${str}`;
};
/* harmony default export */ __webpack_exports__.Z = (padStart);


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
/* harmony import */ var _padStart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1433);

const randColor = () => "#" + (0,_padStart__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)((~~(Math.random() * (1 << 24))).toString(16), 6);
/* harmony default export */ __webpack_exports__.Z = (randColor);

}();
var __webpack_exports__default = __webpack_exports__.Z;
export { __webpack_exports__default as default };
