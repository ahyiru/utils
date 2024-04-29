/******/ var __webpack_modules__ = ({

/***/ 4659:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const isUrl = (url) => /^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(url);
/* harmony default export */ __webpack_exports__.A = (isUrl);


/***/ }),

/***/ 4287:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const loadBase64 = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.addEventListener("load", () => resolve(reader.result));
  reader.addEventListener("error", (error) => reject(error));
});
/* harmony default export */ __webpack_exports__.A = (loadBase64);


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
/* harmony import */ var _isUrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4659);
/* harmony import */ var _loadBase64__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4287);


const loadBase64ByUrl = async (url) => {
  if (!(0,_isUrl__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(url)) {
    return url;
  }
  const response = await fetch(decodeURIComponent(url));
  const blob = await response.blob();
  const result = await (0,_loadBase64__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(blob);
  return result;
};
/* harmony default export */ __webpack_exports__.A = (loadBase64ByUrl);

}();
var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
