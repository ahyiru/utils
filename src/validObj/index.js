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
const validObj = (obj = {}) => {
  const newObj = {};
  Object.keys(obj).map((v) => {
    if (obj[v] != null) {
      newObj[v] = obj[v];
    }
  });
  return newObj;
};
/* harmony default export */ __webpack_exports__["default"] = (validObj);

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});