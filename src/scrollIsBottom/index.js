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

/***/ 9548:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const getType = value => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();

/* harmony default export */ __webpack_exports__["default"] = (getType);

/***/ }),

/***/ 2724:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8291);
/* harmony import */ var _isElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);



const getViewportSize = function () {
  let element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  if (!(0,_isBrowser__WEBPACK_IMPORTED_MODULE_0__["default"])()) {
    return {
      width: 0,
      height: 0
    };
  }

  if ((0,_isElement__WEBPACK_IMPORTED_MODULE_1__["default"])(element)) {
    return {
      width: element.clientWidth,
      height: element.clientHeight
    };
  }

  return {
    width: window.innerWidth || document.documentElement.clientWidth,
    height: window.innerHeight || document.documentElement.clientHeight
  };
};

/* harmony default export */ __webpack_exports__["default"] = (getViewportSize);

/***/ }),

/***/ 8291:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const isBrowser = () => ![typeof window, typeof document].includes('undefined');

/* harmony default export */ __webpack_exports__["default"] = (isBrowser);

/***/ }),

/***/ 8038:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9548);


const isElement = value => (0,_getType__WEBPACK_IMPORTED_MODULE_0__["default"])(value).indexOf('element') > -1;

/* harmony default export */ __webpack_exports__["default"] = (isElement);

/***/ }),

/***/ 7009:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8291);


const scrollTop = () => {
  var _ref, _document$documentEle;

  return (0,_isBrowser__WEBPACK_IMPORTED_MODULE_0__["default"])() && ((_ref = (_document$documentEle = document.documentElement.scrollTop) != null ? _document$documentEle : window.pageYOffset) != null ? _ref : document.body.scrollTop);
};

/* harmony default export */ __webpack_exports__["default"] = (scrollTop);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/* harmony import */ var _isBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8291);
/* harmony import */ var _scrollTop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7009);
/* harmony import */ var _getViewportSize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2724);




const scrollIsBottom = () => (0,_isBrowser__WEBPACK_IMPORTED_MODULE_0__["default"])() && document.documentElement.scrollHeight - (0,_scrollTop__WEBPACK_IMPORTED_MODULE_1__["default"])() === (0,_getViewportSize__WEBPACK_IMPORTED_MODULE_2__["default"])().height;

/* harmony default export */ __webpack_exports__["default"] = (scrollIsBottom);
}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});