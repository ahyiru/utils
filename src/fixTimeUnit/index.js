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
const fixTimeUnit = (s = 0, unit = ["s", "m", "h", "d"]) => {
  s = ~~s;
  if (s < 60) {
    return `${s}${unit[0]}`;
  }
  const m = ~~(s / 60);
  if (m < 60) {
    return `${m}${unit[1]}${s % 60}${unit[0]}`;
  }
  const h = ~~(s / 3600);
  const ls = s % 3600;
  const hm = ~~(ls / 60);
  if (h < 24) {
    return `${h}${unit[2]}${hm}${unit[1]}${ls % 60}${unit[0]}`;
  }
  return `${(h / 24).toFixed(2)}${unit[3]}`;
};
/* harmony default export */ __webpack_exports__["default"] = (fixTimeUnit);

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});