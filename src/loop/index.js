/******/ var __webpack_modules__ = ({

/***/ 9941:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* unused harmony export sleepSync */
const formatMs = (ms = 350, unit = "ms") => ({
  ms: ms * 1,
  s: ms * 1e3,
  m: ms * 6e4,
  h: ms * 36e5,
  d: ms * 864e5
})[unit] ?? ms;
const sleep = (ms = 350, unit = "ms") => new Promise((resolve) => setTimeout(resolve, formatMs(ms, unit)));
const sleepSync = (ms = 100) => {
  const start = Date.now();
  while (Date.now() - start <= ms) {
  }
};
/* harmony default export */ __webpack_exports__.A = (sleep);


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
/******/ /* webpack/runtime/define property getters */
/******/ !function() {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = function(exports, definition) {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ }();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ !function() {
/******/ 	__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ }();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
/* harmony import */ var _sleep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9941);

const loop = async (fn, handle, delay = 2e3) => {
  while (!handle?.(fn?.())) {
    await (0,_sleep__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(delay);
  }
};
/* harmony default export */ __webpack_exports__.A = (loop);

var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
