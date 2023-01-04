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
const compareVersion = (loaclVersion, serviceVersion, key = ".") => {
  const str2arr = (str, key2) => str.split(key2);
  const lvArr = str2arr(loaclVersion, key);
  const svArr = str2arr(serviceVersion, key);
  const arrLen = lvArr.length;
  let needUpdateLevel = 0;
  for (let i = 0; i < arrLen; i++) {
    if (lvArr[i] < svArr[i]) {
      needUpdateLevel = arrLen - i;
      break;
    }
  }
  return needUpdateLevel;
};
/* harmony default export */ __webpack_exports__["default"] = (compareVersion);

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});