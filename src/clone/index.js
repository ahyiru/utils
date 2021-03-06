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

/***/ 144:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const getType = value => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();

/* harmony default export */ __webpack_exports__["default"] = (getType);

/***/ }),

/***/ 6120:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const hasProp = (obj, prop) => Object.prototype.hasOwnProperty.call(obj != null ? obj : {}, prop);

/* harmony default export */ __webpack_exports__["default"] = (hasProp);

/***/ }),

/***/ 1030:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(144);


const isArray = value => (0,_getType__WEBPACK_IMPORTED_MODULE_0__["default"])(value) === 'array';

/* harmony default export */ __webpack_exports__["default"] = (isArray);

/***/ }),

/***/ 7231:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(144);


const isObject = value => (0,_getType__WEBPACK_IMPORTED_MODULE_0__["default"])(value) === 'object';

/* harmony default export */ __webpack_exports__["default"] = (isObject);

/***/ }),

/***/ 4169:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const isReactEle = value => (value == null ? void 0 : value['$$typeof']) && typeof value['$$typeof'] === 'symbol' && value['$$typeof']['description'] === 'react.element';

/* harmony default export */ __webpack_exports__["default"] = (isReactEle);

/***/ }),

/***/ 6079:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const isVueEle = value => value == null ? void 0 : value.__v_isVNode;

/* harmony default export */ __webpack_exports__["default"] = (isVueEle);

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1030);
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7231);
/* harmony import */ var _isReactEle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4169);
/* harmony import */ var _isVueEle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6079);
/* harmony import */ var _hasProp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6120);






const clone = obj => {
  if (!(0,_isArray__WEBPACK_IMPORTED_MODULE_0__["default"])(obj) && !(0,_isObject__WEBPACK_IMPORTED_MODULE_1__["default"])(obj)) {
    return obj;
  }

  const newobj = (0,_isArray__WEBPACK_IMPORTED_MODULE_0__["default"])(obj) ? [] : {};

  for (const i in obj) {
    if ((0,_hasProp__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, i)) {
      const item = obj[i]; // newobj[i]=typeof item==='object'?item!==obj?clone(item):'cyclic':item;

      newobj[i] = (0,_isReactEle__WEBPACK_IMPORTED_MODULE_3__["default"])(item) || (0,_isVueEle__WEBPACK_IMPORTED_MODULE_4__["default"])(item) || typeof item !== 'object' ? item : item !== obj ? clone(item) : 'cyclic';
    } else {
      Object.setPrototypeOf(newobj, {
        [i]: obj[i]
      });
    }
  }

  return newobj;
};

/* harmony default export */ __webpack_exports__["default"] = (clone);
}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});