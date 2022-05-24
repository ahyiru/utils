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
const classifyArr = function () {
  let arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'name';
  const obj = {};
  arr.map(item => {
    if (!obj[item[key]]) {
      obj[item[key]] = [item];
    } else {
      obj[item[key]].push(item);
    }
  });
  return obj;
};

/* harmony default export */ __webpack_exports__["default"] = (classifyArr);
/******/ 	return __webpack_exports__;
/******/ })()
;
});