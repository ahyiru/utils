/******/ var __webpack_modules__ = ({

/***/ 3498:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const isBrowser = () => ![typeof window, typeof document].includes("undefined");
/* harmony default export */ __webpack_exports__.Z = (isBrowser);


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
/* harmony import */ var _isBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3498);

const imgtocanvas = (img) => {
  if (!(0,_isBrowser__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)()) {
    return;
  }
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const { width, height } = img;
  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(img, 0, 0, width, height);
  return canvas;
};
/* harmony default export */ __webpack_exports__.Z = (imgtocanvas);

}();
var __webpack_exports__default = __webpack_exports__.Z;
export { __webpack_exports__default as default };
