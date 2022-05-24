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
const getParams = function () {
  let fullPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  const [path, query] = fullPath.split('?');

  if (query) {
    const params = {};
    const paramsArr = query.split('&');
    paramsArr.map(param => {
      const [key, value] = param.split('=');
      params[key] = value;
    });
    return {
      path,
      params
    };
  }

  return {
    path
  };
};

/* harmony default export */ __webpack_exports__["default"] = (getParams);
/******/ 	return __webpack_exports__;
/******/ })()
;
});