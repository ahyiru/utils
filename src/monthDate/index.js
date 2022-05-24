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

/***/ 919:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const addDays = function (n) {
  let d = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  const newDate = new Date(d);
  newDate.setDate(newDate.getDate() + n);
  return newDate;
};

/* harmony default export */ __webpack_exports__["default"] = (addDays);

/***/ }),

/***/ 3827:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9020);


const getMonthDays = function () {
  let day = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
  const date = (0,_getTime__WEBPACK_IMPORTED_MODULE_0__["default"])(day);
  return new Date(date[0], date[1], 0).getDate();
};

/* harmony default export */ __webpack_exports__["default"] = (getMonthDays);

/***/ }),

/***/ 9020:
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getMonthDays__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3827);
/* harmony import */ var _addDays__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(919);



const monthDate = function () {
  let d = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
  const newDate = new Date(d);
  const date = newDate.getDate();
  return [(0,_addDays__WEBPACK_IMPORTED_MODULE_0__["default"])(1 - date), (0,_addDays__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_getMonthDays__WEBPACK_IMPORTED_MODULE_1__["default"])(newDate) - date)];
};

/* harmony default export */ __webpack_exports__["default"] = (monthDate);
}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});