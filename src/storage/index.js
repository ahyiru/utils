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
const storage = {
  get: name => {
    let data = localStorage.getItem(name);
    try {
      data = JSON.parse(data);
    } catch (err) {}
    return data;
  },
  set: (name, data) => {
    if (typeof data === 'object') {
      data = JSON.stringify(data);
    }
    localStorage.setItem(name, data);
  },
  rm: name => {
    localStorage.removeItem(name);
  },
  clear: () => {
    localStorage.clear();
  }
};
/* harmony default export */ __webpack_exports__["default"] = (storage);
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});