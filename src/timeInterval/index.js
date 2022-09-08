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

/***/ 8161:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5453);


const getMonthDays = function () {
  let day = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
  const date = (0,_getTime__WEBPACK_IMPORTED_MODULE_0__["default"])(day);
  return new Date(date[0], date[1], 0).getDate();
};

/* harmony default export */ __webpack_exports__["default"] = (getMonthDays);

/***/ }),

/***/ 5453:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const getTime = function () {
  let day = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
  const date = new Date(day);
  const y = date.getFullYear();
  const w = date.getDay();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  const h = date.getHours();
  const M = date.getMinutes();
  const s = date.getSeconds();
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
/* harmony import */ var _getTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5453);
/* harmony import */ var _getMonthDays__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8161);


const timeBase = date => [12, (0,_getMonthDays__WEBPACK_IMPORTED_MODULE_0__["default"])(date), 24, 60, 60];
const minus = function () {
  let start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  let base = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
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

const timeInterval = function (start) {
  let end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();

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