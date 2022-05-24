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
const compareVersion = function (loaclVersion, serviceVersion) {
  let key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.';

  const str2arr = (str, key) => str.split(key);

  const lvArr = str2arr(loaclVersion, key);
  const svArr = str2arr(serviceVersion, key);
  const arrLen = lvArr.length;
  let needUpdateLevel = 0;

  for (let i = 0; i < arrLen; i++) {
    if (lvArr[i] < svArr[i]) {
      needUpdateLevel = arrLen - i;
      break;
    }
  }

  return needUpdateLevel;
};

/* harmony default export */ __webpack_exports__["default"] = (compareVersion);
/******/ 	return __webpack_exports__;
/******/ })()
;
});