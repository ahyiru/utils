/******/ var __webpack_modules__ = ({

/***/ 1295:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const randNum = (a = 0, b = 0, int = true) => {
  a < b && (a = [b, b = a][0]);
  if (int) {
    return ~~(Math.random() * (a - b + 1)) + b;
  }
  return Math.random() * (a - b) + b;
};
/* harmony default export */ __webpack_exports__.A = (randNum);


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
/* harmony import */ var _randNum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1295);

const randPercent = (n, total = 100) => {
  const pers = [];
  [...new Array(n)].map((v, i) => {
    if (i === n - 1) {
      pers[i] = total;
    } else {
      pers[i] = (0,_randNum__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(1, total - 1);
      total -= pers[i];
    }
  });
  return pers;
};
/* harmony default export */ __webpack_exports__.A = (randPercent);

var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
