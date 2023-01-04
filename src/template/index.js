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
const template = (strings, ...keys) => {
  const tmpl = [];
  strings.map((str, i) => {
    var _a;
    tmpl.push(str, (_a = keys[i]) != null ? _a : "");
  });
  return tmpl.join("");
};
/* harmony default export */ __webpack_exports__["default"] = (template);

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});