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
/******/ 	var __webpack_modules__ = ({

/***/ 4600:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(216);
/* harmony import */ var _obj2str__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7552);



const arr2str = function () {
  let arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let arrStr = '';
  arr.map(item => {
    arrStr = arrStr ? `${arrStr}, ` : arrStr;

    if ((0,_isObject__WEBPACK_IMPORTED_MODULE_0__["default"])(item)) {
      arrStr += (0,_obj2str__WEBPACK_IMPORTED_MODULE_1__["default"])(item);
    } else if (Array.isArray(item)) {
      arrStr += arr2str(item);
    } else {
      arrStr += `${item}`;
    }
  });
  return `[${arrStr}]`;
};

/* harmony default export */ __webpack_exports__["default"] = (arr2str);

/***/ }),

/***/ 3682:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const getType = value => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();

/* harmony default export */ __webpack_exports__["default"] = (getType);

/***/ }),

/***/ 216:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3682);


const isObject = value => (0,_getType__WEBPACK_IMPORTED_MODULE_0__["default"])(value) === 'object';

/* harmony default export */ __webpack_exports__["default"] = (isObject);

/***/ }),

/***/ 7552:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(216);
/* harmony import */ var _arr2str__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4600);



const obj2str = function () {
  let obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let objStr = '';
  Object.keys(obj).map(key => {
    const item = obj[key];
    objStr = objStr ? `${objStr}, ` : objStr;

    if ((0,_isObject__WEBPACK_IMPORTED_MODULE_0__["default"])(item)) {
      objStr += `${key}=${obj2str(item)}`;
    } else if (Array.isArray(item)) {
      objStr += `${key}=${(0,_arr2str__WEBPACK_IMPORTED_MODULE_1__["default"])(item)}`;
    } else {
      objStr += `${key}=${item}`;
    }
  });
  return `{${objStr}}`;
};

/* harmony default export */ __webpack_exports__["default"] = (obj2str);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(7552);
/******/ 	__webpack_exports__ = __webpack_exports__["default"];
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});