/******/ var __webpack_modules__ = ({

/***/ 3886:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const timestamp = () => {
  if (typeof performance !== "undefined" && typeof performance.now === "function") {
    return performance.now();
  }
  return (/* @__PURE__ */ new Date()).getTime();
};
/* harmony default export */ __webpack_exports__.A = (timestamp);


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
/* harmony import */ var _timestamp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3886);

const uuidv4 = () => {
  let timeKey = (0,_timestamp__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (timeKey + Math.random() * 16) % 16 | 0;
    timeKey = Math.floor(timeKey / 16);
    return (c === "x" ? r : r & 3 | 8).toString(16);
  });
};
/* harmony default export */ __webpack_exports__.A = (uuidv4);

var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
