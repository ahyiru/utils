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

/***/ 4061:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const isBrowser = () => ![typeof window, typeof document].includes("undefined");
/* harmony default export */ __webpack_exports__["default"] = (isBrowser);


/***/ }),

/***/ 4867:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const timestamp = () => {
  if (typeof performance !== "undefined" && typeof performance.now === "function") {
    return performance.now();
  }
  return new Date().getTime();
};
/* harmony default export */ __webpack_exports__["default"] = (timestamp);


/***/ }),

/***/ 6048:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _timestamp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4867);

const uuidv4 = () => {
  let timeKey = (0,_timestamp__WEBPACK_IMPORTED_MODULE_0__["default"])();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (timeKey + Math.random() * 16) % 16 | 0;
    timeKey = Math.floor(timeKey / 16);
    return (c === "x" ? r : r & 3 | 8).toString(16);
  });
};
/* harmony default export */ __webpack_exports__["default"] = (uuidv4);


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
/* harmony import */ var _isBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4061);
/* harmony import */ var _uuidv4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6048);


const dlfile = (url, name) => {
  if (!(0,_isBrowser__WEBPACK_IMPORTED_MODULE_0__["default"])()) {
    return;
  }
  name = name || (0,_uuidv4__WEBPACK_IMPORTED_MODULE_1__["default"])();
  if (typeof url === "string") {
    fetch(url).then((res) => res.blob()).then((blob) => {
      const dataUrl = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = name;
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      a.parentNode.removeChild(a);
      window.URL.revokeObjectURL(dataUrl);
    });
  } else {
    const blob = new Blob([url]);
    const dataUrl = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = name;
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    a.parentNode.removeChild(a);
    window.URL.revokeObjectURL(dataUrl);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (dlfile);

}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});