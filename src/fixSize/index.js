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
const fixSize = (img, ratio = 1) => {
  const imgRatio = img.width / img.height / ratio;
  const percent = imgRatio > 1 ? "100%" : `${(imgRatio * 100).toFixed(4)}%`;
  return img.width = percent;
};
/* harmony default export */ __webpack_exports__["default"] = (fixSize);

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});