/******/ // The require scope
/******/ var __webpack_require__ = {};
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
/* unused harmony export sleepSync */
const formatMs = (ms = 350, unit = "ms") => ({
  ms: ms * 1,
  s: ms * 1e3,
  m: ms * 6e4,
  h: ms * 36e5,
  d: ms * 864e5
});
const sleep = (ms = 350, unit = "ms") => new Promise((resolve) => setTimeout(resolve, formatMs(ms)));
const sleepSync = (ms = 100) => {
  const start = Date.now();
  while (Date.now() - start <= ms) {
  }
};
/* harmony default export */ __webpack_exports__["default"] = (sleep);

__webpack_exports__ = __webpack_exports__["default"];
var __webpack_exports__default = __webpack_exports__["default"];
var __webpack_exports__sleepSync = __webpack_exports__.false;
export { __webpack_exports__default as default, __webpack_exports__sleepSync as sleepSync };
