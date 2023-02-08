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
const MIN_VAL = 60 * 1e3;
const HOUR_VAL = 60 * MIN_VAL;
const DAY_VAL = 24 * HOUR_VAL;
const getLeaveTime = (start, end = /* @__PURE__ */ new Date()) => {
  let time = new Date(start) - end;
  const d = ~~(time / DAY_VAL);
  time -= DAY_VAL * d;
  const h = ~~(time / HOUR_VAL);
  time -= HOUR_VAL * h;
  const M = ~~(time / MIN_VAL);
  time -= MIN_VAL * M;
  const s = ~~(time / 1e3);
  return `${d}\u5929${h}\u5C0F\u65F6${M}\u5206${s}\u79D2`;
};
/* harmony default export */ __webpack_exports__["default"] = (getLeaveTime);

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});