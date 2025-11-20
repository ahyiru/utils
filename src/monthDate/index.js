/******/ var __webpack_modules__ = ({

/***/ 2538:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const addDays = (n, d = /* @__PURE__ */ new Date()) => {
  const newDate = new Date(d);
  newDate.setDate(newDate.getDate() + n);
  return newDate;
};
/* harmony default export */ __webpack_exports__.A = (addDays);


/***/ }),

/***/ 5223:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const addZero = (n) => n < 10 ? "0" + n : n;
const getTime = (day = /* @__PURE__ */ new Date()) => {
  const date = new Date(day);
  const y = date.getFullYear();
  const w = date.getDay();
  const m = addZero(date.getMonth() + 1);
  const d = addZero(date.getDate());
  const h = addZero(date.getHours());
  const M = addZero(date.getMinutes());
  const s = addZero(date.getSeconds());
  return [y, m, d, h, M, s, w];
};
/* harmony default export */ __webpack_exports__.A = (getTime);


/***/ }),

/***/ 6697:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5223);

const getMonthDays = (day = /* @__PURE__ */ new Date()) => {
  const date = (0,_getTime__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(day);
  return new Date(date[0], date[1], 0).getDate();
};
/* harmony default export */ __webpack_exports__.A = (getMonthDays);


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
/* harmony import */ var _getMonthDays__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6697);
/* harmony import */ var _addDays__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2538);


const monthDate = (d = /* @__PURE__ */ new Date()) => {
  const newDate = new Date(d);
  const date = newDate.getDate();
  return [(0,_addDays__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(1 - date), (0,_addDays__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)((0,_getMonthDays__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(newDate) - date)];
};
/* harmony default export */ __webpack_exports__.A = (monthDate);

var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
