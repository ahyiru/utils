/******/ var __webpack_modules__ = ({

/***/ 2538:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const addDays = (n, d = /* @__PURE__ */ new Date()) => {
  const newDate = new Date(d);
  newDate.setDate(newDate.getDate() + n);
  return newDate;
};
/* harmony default export */ __webpack_exports__.A = (addDays);


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
/* harmony import */ var _addDays__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2538);

const weekDate = (d = /* @__PURE__ */ new Date()) => {
  const newDate = new Date(d);
  const day = newDate.getDay();
  return [(0,_addDays__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(1 - day), (0,_addDays__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(7 - day)];
};
/* harmony default export */ __webpack_exports__.A = (weekDate);

var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
