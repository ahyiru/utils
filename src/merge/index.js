/******/ var __webpack_modules__ = ({

/***/ 6837:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const getType = (value) => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
/* harmony default export */ __webpack_exports__.Z = (getType);


/***/ }),

/***/ 1915:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const hasProp = (obj, prop) => Object.prototype.hasOwnProperty.call(obj ?? {}, prop);
/* harmony default export */ __webpack_exports__.Z = (hasProp);


/***/ }),

/***/ 3685:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6837);

const isArray = (value) => (0,_getType__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(value) === "array";
/* harmony default export */ __webpack_exports__.Z = (isArray);


/***/ }),

/***/ 8855:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6837);

const isObject = (value) => (0,_getType__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(value) === "object";
/* harmony default export */ __webpack_exports__.Z = (isObject);


/***/ }),

/***/ 7176:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8855);
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3685);
/* harmony import */ var _mergeObj__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9121);



const mergeArr = (base, extend, key = "id") => {
  if (!(0,_isArray__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(base)) {
    return extend;
  }
  if (!(0,_isArray__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(extend)) {
    return base;
  }
  const sameItems = {};
  [...base, ...extend].map((item) => {
    const idKey = (0,_isObject__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(item) ? item[key] ?? JSON.stringify(item) : item;
    if (sameItems[idKey] === void 0) {
      sameItems[idKey] = item;
    } else {
      const oldItem = sameItems[idKey];
      if ((0,_isObject__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(oldItem) && (0,_isObject__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(item)) {
        sameItems[idKey] = (0,_mergeObj__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(oldItem, item, key);
      } else if ((0,_isArray__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(oldItem) && (0,_isArray__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(item)) {
        sameItems[idKey] = mergeArr(oldItem, item, key);
      } else {
        sameItems[idKey] = item;
      }
    }
  });
  return Object.keys(sameItems).map((v) => sameItems[v]);
};
/* harmony default export */ __webpack_exports__.Z = (mergeArr);


/***/ }),

/***/ 9121:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8855);
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3685);
/* harmony import */ var _mergeArr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7176);
/* harmony import */ var _hasProp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1915);




const mergeObj = (base, extend, key = "id") => {
  if (!(0,_isObject__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(base)) {
    return extend;
  }
  if (!(0,_isObject__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(extend)) {
    return base;
  }
  for (let k in extend) {
    if ((0,_hasProp__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(extend, k)) {
      if ((0,_isObject__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(base[k]) && (0,_isObject__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(extend[k])) {
        base[k] = mergeObj(base[k], extend[k], key);
      } else if ((0,_isArray__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(base[k]) && (0,_isArray__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(extend[k])) {
        base[k] = (0,_mergeArr__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(base[k], extend[k], key);
      } else {
        base[k] = extend[k];
      }
    } else {
      Object.setPrototypeOf(base, { [k]: extend[k] });
    }
  }
  return base;
};
/* harmony default export */ __webpack_exports__.Z = (mergeObj);


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
/* harmony import */ var _mergeObj__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9121);
/* harmony import */ var _mergeArr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7176);



const merge = (target, ...extend) => {
  const handleMerge = (0,_isArray__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(target) ? _mergeArr__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z : _mergeObj__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z;
  extend.map((item) => target = handleMerge(target, item));
  return target;
};
/* harmony default export */ __webpack_exports__.Z = (merge);

}();
var __webpack_exports__default = __webpack_exports__.Z;
export { __webpack_exports__default as default };
