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
const randStr = function () {
  let n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;
  let base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 36;
  return Math.random().toString(36).slice(2, n + 2);
};

/* harmony default export */ __webpack_exports__["default"] = (randStr);
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});