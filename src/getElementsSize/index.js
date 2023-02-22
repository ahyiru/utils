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

/***/ 7945:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(907);
/* harmony import */ var _isRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6708);


const getPosition = (ele) => {
  var _a;
  if (!(0,_isBrowser__WEBPACK_IMPORTED_MODULE_0__["default"])()) {
    return;
  }
  ele = (0,_isRef__WEBPACK_IMPORTED_MODULE_1__["default"])(ele) ? ele.current : ele != null ? ele : document.body;
  return (_a = ele.getBoundingClientRect) == null ? void 0 : _a.call(ele);
};
/* harmony default export */ __webpack_exports__["default"] = (getPosition);


/***/ }),

/***/ 7271:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const getType = (value) => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
/* harmony default export */ __webpack_exports__["default"] = (getType);


/***/ }),

/***/ 5183:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const hasProp = (obj, prop) => Object.prototype.hasOwnProperty.call(obj != null ? obj : {}, prop);
/* harmony default export */ __webpack_exports__["default"] = (hasProp);


/***/ }),

/***/ 907:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const isBrowser = () => ![typeof window, typeof document].includes("undefined");
/* harmony default export */ __webpack_exports__["default"] = (isBrowser);


/***/ }),

/***/ 9010:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7271);

const isElement = (value) => (0,_getType__WEBPACK_IMPORTED_MODULE_0__["default"])(value).indexOf("element") > -1;
/* harmony default export */ __webpack_exports__["default"] = (isElement);


/***/ }),

/***/ 6708:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _hasProp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5183);

const isRef = (ref) => (0,_hasProp__WEBPACK_IMPORTED_MODULE_0__["default"])(ref, "current");
/* harmony default export */ __webpack_exports__["default"] = (isRef);


/***/ }),

/***/ 4269:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9010);

const setStyle = (ele, styles = {}, reset = false) => {
  if (!(0,_isElement__WEBPACK_IMPORTED_MODULE_0__["default"])(ele)) {
    return;
  }
  if (reset) {
    let objStr = "";
    Object.keys(styles).map((key) => {
      objStr += `${key}: ${styles[key]};`;
    });
    ele.style = objStr;
    return;
  }
  Object.keys(styles).map((key) => ele.style.setProperty(key, styles[key]));
};
/* harmony default export */ __webpack_exports__["default"] = (setStyle);


/***/ }),

/***/ 7748:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export sleepSync */
const sleep = (ms = 350) => new Promise((resolve) => setTimeout(resolve, ms));
const sleepSync = (ms = 100) => {
  const start = Date.now();
  while (Date.now() - start <= ms) {
  }
};
/* harmony default export */ __webpack_exports__["default"] = (sleep);


/***/ }),

/***/ 9404:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(907);

const str2Html = (str) => {
  if (!(0,_isBrowser__WEBPACK_IMPORTED_MODULE_0__["default"])()) {
    return;
  }
  const templ = document.createElement("div");
  templ.innerHTML = str;
  const ele = templ.children[0];
  return ele;
};
/* harmony default export */ __webpack_exports__["default"] = (str2Html);


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
/* harmony import */ var _isBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(907);
/* harmony import */ var _str2Html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9404);
/* harmony import */ var _getPosition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7945);
/* harmony import */ var _setStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4269);
/* harmony import */ var _isRef__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6708);
/* harmony import */ var _isElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9010);
/* harmony import */ var _sleep__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7748);







const getElementsSize = async (ele, delay = 15) => {
  if (!(0,_isBrowser__WEBPACK_IMPORTED_MODULE_0__["default"])()) {
    return;
  }
  if (typeof ele === "string") {
    ele = (0,_str2Html__WEBPACK_IMPORTED_MODULE_1__["default"])(ele);
  }
  ele = (0,_isRef__WEBPACK_IMPORTED_MODULE_2__["default"])(ele) ? ele.current : ele;
  if (!(0,_isElement__WEBPACK_IMPORTED_MODULE_3__["default"])(ele)) {
    return {};
  }
  const shadow = ele.cloneNode(true);
  (0,_setStyle__WEBPACK_IMPORTED_MODULE_4__["default"])(shadow, { "pointer-events": "none", "z-index": -1, opacity: 0, display: "block", animation: "none" });
  ele.parentNode.appendChild(shadow);
  await (0,_sleep__WEBPACK_IMPORTED_MODULE_5__["default"])(delay);
  const info = (0,_getPosition__WEBPACK_IMPORTED_MODULE_6__["default"])(shadow);
  ele.parentNode.removeChild(shadow);
  return info;
};
/* harmony default export */ __webpack_exports__["default"] = (getElementsSize);

}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});