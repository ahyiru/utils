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
const matchedStr = (str, c = ["{", "}"]) => {
  var _a, _b;
  return (_b = (_a = str == null ? void 0 : str.trim) == null ? void 0 : _a.call(str).match(new RegExp(`^${c[0]}([\\s\\S]*)${c[1]}$`))) == null ? void 0 : _b[1];
};
/* harmony default export */ __webpack_exports__["default"] = (matchedStr);

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});