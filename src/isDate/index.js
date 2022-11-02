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
const isDate = function () {
  for (var _len = arguments.length, val = new Array(_len), _key = 0; _key < _len; _key++) {
    val[_key] = arguments[_key];
  }
  return !Number.isNaN(new Date(...val).valueOf());
};
/* harmony default export */ __webpack_exports__["default"] = (isDate);
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});