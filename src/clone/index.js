/******/ var __webpack_modules__ = ({

/***/ 6837:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const getType = (value) => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
/* harmony default export */ __webpack_exports__["default"] = (getType);


/***/ }),

/***/ 1915:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const hasProp = (obj, prop) => Object.prototype.hasOwnProperty.call(obj ?? {}, prop);
/* harmony default export */ __webpack_exports__["default"] = (hasProp);


/***/ }),

/***/ 3685:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6837);

const isArray = (value) => (0,_getType__WEBPACK_IMPORTED_MODULE_0__["default"])(value) === "array";
/* harmony default export */ __webpack_exports__["default"] = (isArray);


/***/ }),

/***/ 8855:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6837);

const isObject = (value) => (0,_getType__WEBPACK_IMPORTED_MODULE_0__["default"])(value) === "object";
/* harmony default export */ __webpack_exports__["default"] = (isObject);


/***/ }),

/***/ 5307:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const isReactEle = (value) => value?.["$$typeof"] && typeof value["$$typeof"] === "symbol" && value["$$typeof"]["description"] === "react.element";
/* harmony default export */ __webpack_exports__["default"] = (isReactEle);


/***/ }),

/***/ 9136:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const isVueEle = (value) => value?.__v_isVNode;
/* harmony default export */ __webpack_exports__["default"] = (isVueEle);


/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3685);
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8855);
/* harmony import */ var _isReactEle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5307);
/* harmony import */ var _isVueEle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9136);
/* harmony import */ var _hasProp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1915);





const clone = (obj) => {
  if (!(0,_isArray__WEBPACK_IMPORTED_MODULE_0__["default"])(obj) && !(0,_isObject__WEBPACK_IMPORTED_MODULE_1__["default"])(obj)) {
    return obj;
  }
  const newObj = (0,_isArray__WEBPACK_IMPORTED_MODULE_0__["default"])(obj) ? [] : {};
  for (const i in obj) {
    if ((0,_hasProp__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, i)) {
      const item = obj[i];
      newObj[i] = (0,_isReactEle__WEBPACK_IMPORTED_MODULE_3__["default"])(item) || (0,_isVueEle__WEBPACK_IMPORTED_MODULE_4__["default"])(item) || typeof item !== "object" ? item : item !== obj ? clone(item) : "cyclic";
    } else {
      Object.setPrototypeOf(newObj, { [i]: obj[i] });
    }
  }
  return newObj;
};
/* harmony default export */ __webpack_exports__["default"] = (clone);

}();
__webpack_exports__ = __webpack_exports__["default"];
var __webpack_exports__default = __webpack_exports__["default"];
export { __webpack_exports__default as default };
