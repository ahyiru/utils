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
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
__webpack_require__.r(__webpack_exports__);
const rgba2hex = function () {
  let r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  let g = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  let b = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  let a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;

  if (a === 1) {
    return hex;
  }

  a = Math.round(a * 255).toString(16);
  a = a.length === 1 ? `0${a}` : a.length === 3 ? 'ff' : a;
  return `${hex}${a}`;
};

/* harmony default export */ __webpack_exports__["default"] = (rgba2hex);
/******/ 	return __webpack_exports__;
/******/ })()
;
});