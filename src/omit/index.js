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
const omit = function () {
  let obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let keys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  keys = typeof keys === 'string' ? keys.split(',') : keys;
  const newObj = {};
  const newQuery = [];
  Object.keys(obj).map(key => !keys.includes(key) ? newObj[key] = obj[key] : newQuery.push({
    key,
    value: obj[key]
  }));
  return {
    newObj,
    newQuery
  };
};

/* harmony default export */ __webpack_exports__["default"] = (omit);
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});