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
const a2o = function (arr) {
  let key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key';
  let value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'value';
  const obj = {};
  (arr || []).map(v => obj[v[key]] = v[value]);
  return obj;
};
/* harmony default export */ __webpack_exports__["default"] = (a2o);
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});