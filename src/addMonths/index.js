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
const addMonths = function (n) {
  let d = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  const newDate = new Date(d);
  newDate.setMonth(newDate.getMonth() + n);
  return newDate;
};

/* harmony default export */ __webpack_exports__["default"] = (addMonths);
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});