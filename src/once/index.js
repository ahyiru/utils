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
var __webpack_exports__ = {};
const once = function () {
  let fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : () => {};
  let called = false;
  return function () {
    if (!called) {
      called = true;
      return fn(...arguments);
    }
  };
};
/* harmony default export */ __webpack_exports__["default"] = (once);
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});