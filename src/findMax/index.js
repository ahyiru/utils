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
const findMax = function () {
  var _str$match;

  let str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return (_str$match = str.match(/\d+/g)) == null ? void 0 : _str$match.sort((a, b) => b - a)[0];
};

/* harmony default export */ __webpack_exports__["default"] = (findMax);
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});