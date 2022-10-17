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

/***/ 158:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const getType = value => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();

/* harmony default export */ __webpack_exports__["default"] = (getType);

/***/ }),

/***/ 4486:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const hasProp = (obj, prop) => Object.prototype.hasOwnProperty.call(obj != null ? obj : {}, prop);

/* harmony default export */ __webpack_exports__["default"] = (hasProp);

/***/ }),

/***/ 7842:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const isBrowser = () => ![typeof window, typeof document].includes('undefined');

/* harmony default export */ __webpack_exports__["default"] = (isBrowser);

/***/ }),

/***/ 6569:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(158);


const isElement = value => (0,_getType__WEBPACK_IMPORTED_MODULE_0__["default"])(value).indexOf('element') > -1;

/* harmony default export */ __webpack_exports__["default"] = (isElement);

/***/ }),

/***/ 3091:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _hasProp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4486);


const isRef = ref => (0,_hasProp__WEBPACK_IMPORTED_MODULE_0__["default"])(ref, 'current');

/* harmony default export */ __webpack_exports__["default"] = (isRef);

/***/ }),

/***/ 9037:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6569);


const setStyle = function (ele) {
  let styles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let reset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (!(0,_isElement__WEBPACK_IMPORTED_MODULE_0__["default"])(ele)) {
    return;
  }

  Object.keys(styles).map(key => {
    // ele.style[key]=reset?'':styles[key];
    ele.style.setProperty(key, reset ? '' : styles[key]);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (setStyle);

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
/* harmony import */ var _isBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7842);
/* harmony import */ var _setStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9037);
/* harmony import */ var _isRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3091);




const getTextSize = function (text) {
  let styles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let ele = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0,_isBrowser__WEBPACK_IMPORTED_MODULE_0__["default"])() && document.body;

  if (!(0,_isBrowser__WEBPACK_IMPORTED_MODULE_0__["default"])()) {
    return;
  }

  ele = (0,_isRef__WEBPACK_IMPORTED_MODULE_1__["default"])(ele) ? ele.current : ele;
  const span = document.createElement('span');
  span.setAttribute('style', `pointer-events: none; z-index: -1; opacity: 0;`);
  styles && (0,_setStyle__WEBPACK_IMPORTED_MODULE_2__["default"])(span, styles);
  span.innerText = text;
  ele.appendChild(span);
  const rect = span.getBoundingClientRect();
  ele.removeChild(span);
  return rect;
};

/* harmony default export */ __webpack_exports__["default"] = (getTextSize);
}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});