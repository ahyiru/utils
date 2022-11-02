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
const memoize = function () {
  let fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : () => {};
  let len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  let cache = [];
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    const key = JSON.stringify(args);
    const cached = cache.find(v => v.key === key);
    if (!cached) {
      const result = fn(...args);
      cache.push({
        key,
        result
      });
      if (cache.length > len) {
        cache.shift();
      }
      return result;
    }
    return cached.result;
  };
};
/* harmony default export */ __webpack_exports__["default"] = (memoize);
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});