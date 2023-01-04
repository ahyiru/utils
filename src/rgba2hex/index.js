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
const trans2hex = (r = 0, g = 0, b = 0, a = 1) => {
  r -= 0;
  g -= 0;
  b -= 0;
  a -= 0;
  const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  if (a === 1) {
    return hex;
  }
  a = Math.round(a * 255).toString(16);
  a = a.length === 1 ? `0${a}` : a.length === 3 ? "ff" : a;
  return `${hex}${a}`;
};
const rgba2hex = (r = 0, g = 0, b = 0, a = 1) => {
  var _a;
  if (r.includes("rgb")) {
    const matched = r.match(/rgba?\((.+)\)/);
    if (matched) {
      const rgba = (_a = matched[1]) == null ? void 0 : _a.split(",").map((v) => v.trim());
      return trans2hex(...rgba);
    }
    return r;
  }
  return trans2hex(r, g, b, a);
};
/* harmony default export */ __webpack_exports__["default"] = (rgba2hex);

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});