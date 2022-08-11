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
const MIN_VAL = 60 * 1000;
const HOUR_VAL = 60 * MIN_VAL;
const DAY_VAL = 24 * HOUR_VAL;

const getLeaveTime = function (start) {
  let end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  let time = new Date(start) - end;
  const d = ~~(time / DAY_VAL);
  time -= DAY_VAL * d;
  const h = ~~(time / HOUR_VAL);
  time -= HOUR_VAL * h;
  const M = ~~(time / MIN_VAL);
  time -= MIN_VAL * M;
  const s = ~~(time / 1000);
  return `${d}天${h}小时${M}分${s}秒`;
};

/* harmony default export */ __webpack_exports__["default"] = (getLeaveTime);
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});