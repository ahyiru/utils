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

/***/ 1708:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9170);
/* harmony import */ var _isElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5909);


const getOffset = function () {
  var _ref, _window$pageXOffset, _ref2, _window$pageYOffset;
  let element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
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
    left: (_ref = (_window$pageXOffset = window.pageXOffset) != null ? _window$pageXOffset : document.documentElement.scrollLeft) != null ? _ref : document.body.scrollLeft,
    top: (_ref2 = (_window$pageYOffset = window.pageYOffset) != null ? _window$pageYOffset : document.documentElement.scrollTop) != null ? _ref2 : document.body.scrollTop
  };
};
/* harmony default export */ __webpack_exports__["default"] = (getOffset);

/***/ }),

/***/ 6074:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isTouch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1605);
/* harmony import */ var _getOffset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1708);


const getTouchPosition = evt => {
  var _evt$touches, _evt$touches$, _evt$touches2, _evt$touches2$;
  const {
    left,
    top
  } = (0,_getOffset__WEBPACK_IMPORTED_MODULE_0__["default"])();
  return {
    touchX: (0,_isTouch__WEBPACK_IMPORTED_MODULE_1__["default"])() ? evt == null ? void 0 : (_evt$touches = evt.touches) == null ? void 0 : (_evt$touches$ = _evt$touches[0]) == null ? void 0 : _evt$touches$.pageX : (evt == null ? void 0 : evt.pageX) || (evt == null ? void 0 : evt.clientX) + left,
    touchY: (0,_isTouch__WEBPACK_IMPORTED_MODULE_1__["default"])() ? evt == null ? void 0 : (_evt$touches2 = evt.touches) == null ? void 0 : (_evt$touches2$ = _evt$touches2[0]) == null ? void 0 : _evt$touches2$.pageY : (evt == null ? void 0 : evt.pageY) || (evt == null ? void 0 : evt.clientY) + top
  };
};
/* harmony default export */ __webpack_exports__["default"] = (getTouchPosition);

/***/ }),

/***/ 3000:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const getType = value => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
/* harmony default export */ __webpack_exports__["default"] = (getType);

/***/ }),

/***/ 9170:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const isBrowser = () => ![typeof window, typeof document].includes('undefined');
/* harmony default export */ __webpack_exports__["default"] = (isBrowser);

/***/ }),

/***/ 5909:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3000);

const isElement = value => (0,_getType__WEBPACK_IMPORTED_MODULE_0__["default"])(value).indexOf('element') > -1;
/* harmony default export */ __webpack_exports__["default"] = (isElement);

/***/ }),

/***/ 1605:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9170);

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
/* harmony import */ var _getTouchPosition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6074);

const getRelative = (evt, ref) => {
  var _ref$getBoundingClien, _ref$getBoundingClien2;
  const {
    touchX,
    touchY
  } = (0,_getTouchPosition__WEBPACK_IMPORTED_MODULE_0__["default"])(evt);
  const {
    x,
    y
  } = (_ref$getBoundingClien = ref == null ? void 0 : (_ref$getBoundingClien2 = ref.getBoundingClientRect) == null ? void 0 : _ref$getBoundingClien2.call(ref)) != null ? _ref$getBoundingClien : {};
  // const {offsetLeft,offsetLeft}=ref;
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