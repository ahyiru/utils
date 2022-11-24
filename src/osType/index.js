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

/***/ 9899:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const isBrowser = () => ![typeof window, typeof document].includes('undefined');
/* harmony default export */ __webpack_exports__["default"] = (isBrowser);

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
/* harmony import */ var _isBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9899);

const osList = [{
  name: 'MacOS',
  reg: /macintosh/
}, {
  name: 'Windows',
  reg: /windows/
}, {
  name: 'Linux',
  reg: /linux/
}, {
  name: 'IOS',
  reg: /iphone/
  // reg: /iphone|ipad|ipod/,
}, {
  name: 'Android',
  reg: /android/
}, {
  name: 'WindowsPhone',
  reg: /windows phone/
}, {
  name: 'iPad',
  reg: /ipad/
}];
const osType = () => {
  var _osList$find$name, _osList$find;
  if (!(0,_isBrowser__WEBPACK_IMPORTED_MODULE_0__["default"])()) {
    return;
  }
  const ua = window.navigator.userAgent.toLowerCase();
  return (_osList$find$name = (_osList$find = osList.find(item => item.reg.test(ua))) == null ? void 0 : _osList$find.name) != null ? _osList$find$name : 'Unkonwn';
};
/* harmony default export */ __webpack_exports__["default"] = (osType);
}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});