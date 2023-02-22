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

/***/ 7271:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const getType = (value) => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
/* harmony default export */ __webpack_exports__["default"] = (getType);


/***/ }),

/***/ 5660:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7271);

const isArray = (value) => (0,_getType__WEBPACK_IMPORTED_MODULE_0__["default"])(value) === "array";
/* harmony default export */ __webpack_exports__["default"] = (isArray);


/***/ }),

/***/ 3899:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5660);

const selectedHandle = (fn) => (arr, id, idKey = "id", childKey = "children") => {
  if (!(0,_isArray__WEBPACK_IMPORTED_MODULE_0__["default"])(arr)) {
    return null;
  }
  const selected = (data, parentId = "") => {
    for (let i = 0, l = data.length; i < l; i++) {
      const item = data[i];
      if (item[idKey] === id) {
        return fn(data, i, parentId) || data[i];
      }
      if ((0,_isArray__WEBPACK_IMPORTED_MODULE_0__["default"])(item[childKey])) {
        const selChildren = selected(item[childKey], item[idKey]);
        if (selChildren) {
          return selChildren;
        }
      }
    }
  };
  selected(arr);
  return arr;
};
/* harmony default export */ __webpack_exports__["default"] = (selectedHandle);


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
/* harmony import */ var _selectedHandle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3899);

const addNodes = (tree, id, nodes, idKey = "id", childKey = "children") => (0,_selectedHandle__WEBPACK_IMPORTED_MODULE_0__["default"])((data, index) => {
  const item = data[index];
  item[childKey] = [...item[childKey] || [], ...nodes];
  return item;
})(tree, id, idKey, childKey);
/* harmony default export */ __webpack_exports__["default"] = (addNodes);

}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});