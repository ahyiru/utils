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
const sort = (arr, key = null, desc = false) => {
  return [...arr || []].sort((x, y) => {
    const a = key ? x[key] : x;
    const b = key ? y[key] : y;
    if (!isNaN(Number(a)) && !isNaN(Number(a))) {
      return desc ? b - a : a - b;
    }
    if (typeof a === "string" && typeof b === "string") {
      return desc ? b.localeCompare(a) : a.localeCompare(b);
    }
    if (typeof a === "string" && typeof b === "number") {
      return desc ? -1 : 1;
    }
    if (typeof a === "number" || typeof a === "string") {
      return desc ? 1 : -1;
    }
    return desc ? -1 : 1;
  });
};
/* harmony default export */ __webpack_exports__["default"] = (sort);

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});