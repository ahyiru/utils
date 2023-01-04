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
const loadImage = (url) => new Promise((resolve, reject) => {
  const img = new Image();
  img.src = url;
  if (img.complete) {
    resolve(img);
  } else {
    img.addEventListener("load", () => resolve(img));
    img.addEventListener("error", (error) => reject(error));
  }
});
/* harmony default export */ __webpack_exports__["default"] = (loadImage);

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});