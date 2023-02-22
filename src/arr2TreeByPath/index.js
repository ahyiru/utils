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

/***/ 9283:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5660);

const arr2Tree = (fn) => (arr, idKey = "id", childKey = "children", treeRoot = -1) => {
  if (!(0,_isArray__WEBPACK_IMPORTED_MODULE_0__["default"])(arr)) {
    return arr;
  }
  const tmpData = {};
  const keys = arr.map((v) => v[idKey]);
  [...arr].map((v) => {
    var _a;
    const item = { ...v };
    const { [idKey]: id } = item;
    if (id != null) {
      let { parentId } = item;
      if (parentId == null) {
        parentId = (_a = fn == null ? void 0 : fn(item)) != null ? _a : treeRoot;
        item.parentId = parentId;
      }
      if (!tmpData[id]) {
        tmpData[id] = [];
      }
      item[childKey] = tmpData[id];
      if (!tmpData[parentId]) {
        tmpData[parentId] = [];
      }
      if (!tmpData[treeRoot]) {
        tmpData[treeRoot] = [];
      }
      const hasParent = keys.includes(parentId);
      if (hasParent) {
        tmpData[parentId].push(item);
      } else {
        tmpData[treeRoot].push(item);
      }
    }
  });
  return tmpData[treeRoot];
};
/* harmony default export */ __webpack_exports__["default"] = (arr2Tree);


/***/ }),

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
/* harmony import */ var _arr2Tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9283);

const arr2TreeByPath = (data, idKey = "path", childKey = "children", treeRoot = null) => (0,_arr2Tree__WEBPACK_IMPORTED_MODULE_0__["default"])((item) => {
  var _a, _b, _c, _d;
  const id = item[idKey];
  const hasSub = id.match(/.*\/[^:/]+\/:[^/]+/);
  if (hasSub) {
    return (_b = (_a = hasSub[0].match(/(.*)\/:+/)) == null ? void 0 : _a[1]) != null ? _b : treeRoot;
  } else {
    return (_d = (_c = id.match(/(.*)\/+/)) == null ? void 0 : _c[1]) != null ? _d : treeRoot;
  }
})(data, idKey, childKey, treeRoot);
/* harmony default export */ __webpack_exports__["default"] = (arr2TreeByPath);

}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});