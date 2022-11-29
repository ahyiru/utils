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

/***/ 6776:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const padStart = function () {
  let str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  let n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  let pad = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0';
  const len = str.length;
  if (len >= n) {
    return str;
  }
  const fill = Array(n - len + 1).join(pad);
  return `${fill}${str}`;
};
/* harmony default export */ __webpack_exports__["default"] = (padStart);

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
/* harmony import */ var _padStart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6776);

const randColor = () => '#' + (0,_padStart__WEBPACK_IMPORTED_MODULE_0__["default"])((~~(Math.random() * (1 << 24))).toString(16), 6);
/* harmony default export */ __webpack_exports__["default"] = (randColor);
}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});