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
const mergeClass = (def, input) => {
  var _a, _b;
  const defArr = (_a = def == null ? void 0 : def.split(" ")) != null ? _a : [];
  const inputArr = (_b = input == null ? void 0 : input.split(" ")) != null ? _b : [];
  return [.../* @__PURE__ */ new Set([...defArr, ...inputArr])].filter(Boolean).join(" ");
};
/* harmony default export */ __webpack_exports__["default"] = (mergeClass);

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});