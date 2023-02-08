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

/***/ 8149:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const hasProp = (obj, prop) => Object.prototype.hasOwnProperty.call(obj != null ? obj : {}, prop);
/* harmony default export */ __webpack_exports__["default"] = (hasProp);


/***/ }),

/***/ 7032:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const isBrowser = () => ![typeof window, typeof document].includes("undefined");
/* harmony default export */ __webpack_exports__["default"] = (isBrowser);


/***/ }),

/***/ 595:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _hasProp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8149);

const isRef = (ref) => (0,_hasProp__WEBPACK_IMPORTED_MODULE_0__["default"])(ref, "current");
/* harmony default export */ __webpack_exports__["default"] = (isRef);


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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ utils_fullScreen; }
});

// EXTERNAL MODULE: ../../huxy/utils/isBrowser.js
var isBrowser = __webpack_require__(7032);
// EXTERNAL MODULE: ../../huxy/utils/isRef.js
var isRef = __webpack_require__(595);
;// CONCATENATED MODULE: ../../huxy/utils/_/prefixBrowser.js
const prefix = ["", "webkit", "moz", "ms"];
const fullscreenElement = (ele) => prefix.map((v) => v ? `${v}FullscreenElement` : "fullscreenElement").find((v) => ele[v]);
const requestFullscreen = (ele) => prefix.map((v) => v ? `${v}RequestFullscreen` : "requestFullscreen").find((v) => ele[v]);
const exitFullscreen = (ele) => prefix.map((v) => v ? `${v}ExitFullscreen` : "exitFullscreen").find((v) => ele[v]);
const fullscreenchange = prefix.map((v) => `${v}fullscreenchange`);

;// CONCATENATED MODULE: ../../huxy/utils/fullScreen.js



const fullScreen = (ele) => {
  var _a, _b;
  if (!(0,isBrowser["default"])()) {
    return;
  }
  ele = (0,isRef["default"])(ele) ? ele.current : ele != null ? ele : document.body;
  const fse = fullscreenElement(document);
  const rfs = requestFullscreen(ele);
  const efs = exitFullscreen(document);
  if (!document[fse]) {
    (_a = ele[rfs]) == null ? void 0 : _a.call(ele);
  } else {
    (_b = document[efs]) == null ? void 0 : _b.call(document);
  }
};
/* harmony default export */ var utils_fullScreen = (fullScreen);

}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});