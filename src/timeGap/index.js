/******/ var __webpack_modules__ = ({

/***/ 6697:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5223);

const getMonthDays = (day = /* @__PURE__ */ new Date()) => {
  const date = (0,_getTime__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(day);
  return new Date(date[0], date[1], 0).getDate();
};
/* harmony default export */ __webpack_exports__.A = (getMonthDays);


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

/***/ 592:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* unused harmony exports timeBase, minus */
/* harmony import */ var _getTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5223);
/* harmony import */ var _getMonthDays__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6697);


const timeBase = (date) => [12, (0,_getMonthDays__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(date), 24, 60, 60];
const minus = (start = [], end = [], base = []) => {
  let carry = false;
  const gap = [];
  end.map((v, i) => {
    const endValue = carry ? v - 1 : v;
    const diff = endValue - start[i];
    if (diff < 0) {
      gap[i] = diff + (base[i] || 10);
      carry = true;
    } else {
      gap[i] = diff;
      carry = false;
    }
  });
  return gap.reverse();
};
const timeInterval = (start, end = /* @__PURE__ */ new Date()) => {
  if (new Date(start) - new Date(end) > 0) {
    start = [end, end = start][0];
  }
  const base = timeBase(end).reverse();
  const sDate = (0,_getTime__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(start).slice(0, -1).reverse();
  const eDate = (0,_getTime__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(end).slice(0, -1).reverse();
  return minus(sDate, eDate, base);
};
/* harmony default export */ __webpack_exports__.Ay = (timeInterval);


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
/* harmony import */ var _timeInterval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(592);

const timeUnit = ["\u5E74", "\u6708", "\u65E5", "\u65F6", "\u5206", "\u79D2"];
const timeGap = (start, end = /* @__PURE__ */ new Date()) => {
  const gap = (0,_timeInterval__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay)(start, end);
  const index = gap.findIndex((v) => v > 0);
  const unitTime = gap.map((v, i) => `${v || 0}${timeUnit[i]}`);
  return unitTime.slice(index).join("");
};
/* harmony default export */ __webpack_exports__.A = (timeGap);

var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
