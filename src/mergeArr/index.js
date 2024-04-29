/******/ var __webpack_modules__ = ({

/***/ 8842:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const getType = (value) => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
/* harmony default export */ __webpack_exports__.A = (getType);


/***/ }),

/***/ 4815:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const hasProp = (obj, prop) => Object.prototype.hasOwnProperty.call(obj ?? {}, prop);
/* harmony default export */ __webpack_exports__.A = (hasProp);


/***/ }),

/***/ 6383:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8842);

const isArray = (value) => (0,_getType__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(value) === "array";
/* harmony default export */ __webpack_exports__.A = (isArray);


/***/ }),

/***/ 1407:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8842);

const isObject = (value) => (0,_getType__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(value) === "object";
/* harmony default export */ __webpack_exports__.A = (isObject);


/***/ }),

/***/ 6103:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1407);
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6383);
/* harmony import */ var _mergeObj__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(725);



const mergeArr = (base, extend, key = "id") => {
  if (!(0,_isArray__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(base)) {
    return extend;
  }
  if (!(0,_isArray__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(extend)) {
    return base;
  }
  const sameItems = {};
  [...base, ...extend].map((item) => {
    const idKey = (0,_isObject__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(item) ? item[key] ?? JSON.stringify(item) : item;
    if (sameItems[idKey] === void 0) {
      sameItems[idKey] = item;
    } else {
      const oldItem = sameItems[idKey];
      if ((0,_isObject__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(oldItem) && (0,_isObject__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(item)) {
        sameItems[idKey] = (0,_mergeObj__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(oldItem, item, key);
      } else if ((0,_isArray__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(oldItem) && (0,_isArray__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(item)) {
        sameItems[idKey] = mergeArr(oldItem, item, key);
      } else {
        sameItems[idKey] = item;
      }
    }
  });
  return Object.keys(sameItems).map((v) => sameItems[v]);
};
/* harmony default export */ __webpack_exports__.A = (mergeArr);


/***/ }),

/***/ 725:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1407);
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6383);
/* harmony import */ var _mergeArr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6103);
/* harmony import */ var _hasProp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4815);




const mergeObj = (base, extend, key = "id") => {
  if (!(0,_isObject__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(base)) {
    return extend;
  }
  if (!(0,_isObject__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(extend)) {
    return base;
  }
  for (let k in extend) {
    if ((0,_hasProp__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(extend, k)) {
      if ((0,_isObject__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(base[k]) && (0,_isObject__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(extend[k])) {
        base[k] = mergeObj(base[k], extend[k], key);
      } else if ((0,_isArray__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(base[k]) && (0,_isArray__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(extend[k])) {
        base[k] = (0,_mergeArr__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(base[k], extend[k], key);
      } else {
        base[k] = extend[k];
      }
    } else {
      Object.setPrototypeOf(base, { [k]: extend[k] });
    }
  }
  return base;
};
/* harmony default export */ __webpack_exports__.A = (mergeObj);


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
/******/ 
/******/ // startup
/******/ // Load entry module and return exports
/******/ // This entry module is referenced by other modules so it can't be inlined
/******/ var __webpack_exports__ = __webpack_require__(6103);
/******/ var __webpack_exports__default = __webpack_exports__.A;
/******/ export { __webpack_exports__default as default };
/******/ 
