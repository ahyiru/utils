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
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "keyArr": function() { return /* binding */ keyArr; }
/* harmony export */ });
const getValue = function () {
  let object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let keys = arguments.length > 1 ? arguments[1] : undefined;
  keys = keyArr(keys);

  const checkValue = (obj, key) => {
    if (!(key != null && key[0])) {
      return obj;
    }

    if (typeof obj[key[0]] === 'object') {
      return checkValue(obj[key[0]], key.slice(1));
    }

    if (key.length > 1) {
      return undefined;
    }

    return obj[key[0]];
  };

  return checkValue(object, keys);
};

const keyArr = function () {
  var _keys$replace;

  let keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return (_keys$replace = keys.replace(/\[['"]?(.*?)['"]?\]/g, '.$1')) == null ? void 0 : _keys$replace.split('.');
};
/* harmony default export */ __webpack_exports__["default"] = (getValue);
/******/ 	return __webpack_exports__;
/******/ })()
;
});