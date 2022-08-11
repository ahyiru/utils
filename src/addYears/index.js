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
const addYears = function (n) {
  let d = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  const newDate = new Date(d);
  newDate.setFullYear(newDate.getFullYear() + n);
  return newDate;
};

/* harmony default export */ __webpack_exports__["default"] = (addYears);
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});