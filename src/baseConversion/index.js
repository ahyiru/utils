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

/***/ 6766:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const base2Ten = (num = 0, base = 2) => parseInt(String(num), base);
/* harmony default export */ __webpack_exports__["default"] = (base2Ten);


/***/ }),

/***/ 18:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const ten2Base = (num = 0, base = 2) => Number(num).toString(base);
/* harmony default export */ __webpack_exports__["default"] = (ten2Base);


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
/* harmony import */ var _ten2Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _base2Ten__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6766);


const baseConversion = (num = 0, base = 2, to = 16) => (0,_ten2Base__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_base2Ten__WEBPACK_IMPORTED_MODULE_1__["default"])(num, base), to);
/* harmony default export */ __webpack_exports__["default"] = (baseConversion);

}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});