(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 4820:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9147);

const getMonthDays = (day = /* @__PURE__ */ new Date()) => {
  const date = (0,_getTime__WEBPACK_IMPORTED_MODULE_0__["default"])(day);
  return new Date(date[0], date[1], 0).getDate();
};
/* harmony default export */ __webpack_exports__["default"] = (getMonthDays);


/***/ }),

/***/ 9147:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

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
/* harmony default export */ __webpack_exports__["default"] = (getTime);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/* unused harmony exports timeBase, minus */
/* harmony import */ var _getTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9147);
/* harmony import */ var _getMonthDays__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4820);


const timeBase = (date) => [12, (0,_getMonthDays__WEBPACK_IMPORTED_MODULE_0__["default"])(date), 24, 60, 60];
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
  const sDate = (0,_getTime__WEBPACK_IMPORTED_MODULE_1__["default"])(start).slice(0, -1).reverse();
  const eDate = (0,_getTime__WEBPACK_IMPORTED_MODULE_1__["default"])(end).slice(0, -1).reverse();
  return minus(sDate, eDate, base);
};
/* harmony default export */ __webpack_exports__["default"] = (timeInterval);

}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});