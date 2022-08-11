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
const matchedStr = function (str) {
  var _str$trim, _str$trim$call$match;

  let c = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['{', '}'];
  return str == null ? void 0 : (_str$trim = str.trim) == null ? void 0 : (_str$trim$call$match = _str$trim.call(str).match(new RegExp(`^${c[0]}([\\s\\S]*)${c[1]}$`))) == null ? void 0 : _str$trim$call$match[1];
};

/* harmony default export */ __webpack_exports__["default"] = (matchedStr);
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});