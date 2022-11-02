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
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});