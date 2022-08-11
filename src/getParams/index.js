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
const getParams = function () {
  let fullPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  const [path, query] = fullPath.split('?');

  if (query) {
    const params = {};
    const paramsArr = query.split('&');
    paramsArr.map(param => {
      const [key, value] = param.split('=');
      params[key] = value;
    });
    return {
      path,
      params
    };
  }

  return {
    path
  };
};

/* harmony default export */ __webpack_exports__["default"] = (getParams);
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});