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

/***/ 3890:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3498);
/* harmony import */ var _isElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4782);


const getOffset = (element = null) => {
  var _a, _b, _c, _d;
  if (!(0,_isBrowser__WEBPACK_IMPORTED_MODULE_0__["default"])()) {
    return {
      left: 0,
      top: 0
    };
  }
  if ((0,_isElement__WEBPACK_IMPORTED_MODULE_1__["default"])(element)) {
    return {
      left: element.scrollLeft,
      top: element.scrollTop
    };
  }
  return {
    left: (_b = (_a = window.pageXOffset) != null ? _a : document.documentElement.scrollLeft) != null ? _b : document.body.scrollLeft,
    top: (_d = (_c = window.pageYOffset) != null ? _c : document.documentElement.scrollTop) != null ? _d : document.body.scrollTop
  };
};
/* harmony default export */ __webpack_exports__["default"] = (getOffset);


/***/ }),

/***/ 7098:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isTouch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3849);
/* harmony import */ var _getOffset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3890);


const getTouchPosition = (evt) => {
  var _a, _b, _c, _d;
  const { left, top } = (0,_getOffset__WEBPACK_IMPORTED_MODULE_0__["default"])();
  return {
    touchX: (0,_isTouch__WEBPACK_IMPORTED_MODULE_1__["default"])() ? (_b = (_a = evt == null ? void 0 : evt.touches) == null ? void 0 : _a[0]) == null ? void 0 : _b.pageX : (evt == null ? void 0 : evt.pageX) || (evt == null ? void 0 : evt.clientX) + left,
    touchY: (0,_isTouch__WEBPACK_IMPORTED_MODULE_1__["default"])() ? (_d = (_c = evt == null ? void 0 : evt.touches) == null ? void 0 : _c[0]) == null ? void 0 : _d.pageY : (evt == null ? void 0 : evt.pageY) || (evt == null ? void 0 : evt.clientY) + top
  };
};
/* harmony default export */ __webpack_exports__["default"] = (getTouchPosition);


/***/ }),

/***/ 6837:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const getType = (value) => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
/* harmony default export */ __webpack_exports__["default"] = (getType);


/***/ }),

/***/ 3498:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const isBrowser = () => ![typeof window, typeof document].includes("undefined");
/* harmony default export */ __webpack_exports__["default"] = (isBrowser);


/***/ }),

/***/ 4782:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6837);

const isElement = (value) => (0,_getType__WEBPACK_IMPORTED_MODULE_0__["default"])(value).indexOf("element") > -1;
/* harmony default export */ __webpack_exports__["default"] = (isElement);


/***/ }),

/***/ 3849:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3498);

const isTouch = () => (0,_isBrowser__WEBPACK_IMPORTED_MODULE_0__["default"])() && (window.ontouchstart || navigator.maxTouchPoints);
/* harmony default export */ __webpack_exports__["default"] = (isTouch);


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
/* harmony import */ var _getTouchPosition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7098);

const getRelative = (evt, ref) => {
  var _a, _b;
  const { touchX, touchY } = (0,_getTouchPosition__WEBPACK_IMPORTED_MODULE_0__["default"])(evt);
  const { x, y } = (_b = (_a = ref == null ? void 0 : ref.getBoundingClientRect) == null ? void 0 : _a.call(ref)) != null ? _b : {};
  return {
    x: touchX - (x != null ? x : 0),
    y: touchY - (y != null ? y : 0)
  };
};
/* harmony default export */ __webpack_exports__["default"] = (getRelative);

}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});