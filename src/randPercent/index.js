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

/***/ 2367:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const randNum = function () {
  let a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  let b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  let int = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  a < b && (a = [b, b = a][0]);
  if (int) {
    return ~~(Math.random() * (a - b + 1)) + b;
  }
  return Math.random() * (a - b) + b;
};
/* harmony default export */ __webpack_exports__["default"] = (randNum);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/* harmony import */ var _randNum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2367);

const randPercent = function (n) {
  let total = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  const pers = [];
  [...new Array(n)].map((v, i) => {
    if (i === n - 1) {
      pers[i] = total;
    } else {
      pers[i] = (0,_randNum__WEBPACK_IMPORTED_MODULE_0__["default"])(1, total - 1);
      total -= pers[i];
    }
  });
  return pers;
};
/* harmony default export */ __webpack_exports__["default"] = (randPercent);
}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});