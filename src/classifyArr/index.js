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
const classifyArr = (arr = [], key = "name") => {
  const obj = {};
  arr.map((item) => {
    if (!obj[item[key]]) {
      obj[item[key]] = [item];
    } else {
      obj[item[key]].push(item);
    }
  });
  return obj;
};
/* harmony default export */ __webpack_exports__["default"] = (classifyArr);

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});