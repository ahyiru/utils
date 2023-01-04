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
const dash2camel = (s, d = "-") => s.split(d).map((v, k) => k > 0 ? v.replace(/^\S/, (s2) => s2.toUpperCase()) : v.replace(/^\S/, (s2) => s2.toLowerCase())).join("");
/* harmony default export */ __webpack_exports__["default"] = (dash2camel);

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});