/******/ var __webpack_modules__ = ({

/***/ 5551:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _hasProp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4815);

const isCyclic = (obj) => {
  const seenObjects = [];
  const detect = (obj2) => {
    if (obj2 && typeof obj2 === "object") {
      if (seenObjects.indexOf(obj2) !== -1) {
        return true;
      }
      seenObjects.push(obj2);
      let hasCyc = false;
      for (let key in obj2) {
        if ((0,_hasProp__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(obj2, key) && detect(obj2[key])) {
          obj2[key] = "cyclic";
          hasCyc = true;
        }
      }
      return hasCyc;
    }
    return false;
  };
  const result = detect(obj);
  return result && obj;
};
/* harmony default export */ __webpack_exports__.A = (isCyclic);


/***/ }),

/***/ 8842:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const getType = (value) => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
/* harmony default export */ __webpack_exports__.A = (getType);


/***/ }),

/***/ 4815:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const hasProp = (obj, prop) => Object.prototype.hasOwnProperty.call(obj ?? {}, prop);
/* harmony default export */ __webpack_exports__.A = (hasProp);


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
/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8842);
/* harmony import */ var _cyclic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5551);
/* harmony import */ var _hasProp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4815);



const equal = (a, b) => {
  const typeA = (0,_getType__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(a);
  const typeB = (0,_getType__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(b);
  if (typeA !== typeB) {
    return false;
  }
  if (a == null || b == null) {
    return a === b;
  }
  if (["object", "array"].indexOf(typeA) === -1) {
    return a.toString() === b.toString();
  }
  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }
  if ((0,_cyclic__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(a) && (0,_cyclic__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(b)) {
    return equal(a, b);
  }
  for (let k in b) {
    if ((0,_hasProp__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(a, k) !== (0,_hasProp__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(b, k)) {
      return false;
    }
    if (!equal(a[k], b[k])) {
      return false;
    }
  }
  return true;
};
/* harmony default export */ __webpack_exports__.A = (equal);

var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
