/******/ var __webpack_modules__ = ({

/***/ 2738:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4782);

const addClass = (ele, name = "") => {
  if (!(0,_isElement__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(ele)) {
    return;
  }
  const nameArr = name.split(" ").filter(Boolean);
  const targetName = ele.className.split(" ");
  const names = [.../* @__PURE__ */ new Set([...nameArr, ...targetName])];
  ele.className = names.join(" ");
};
/* harmony default export */ __webpack_exports__.Z = (addClass);


/***/ }),

/***/ 6837:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const getType = (value) => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
/* harmony default export */ __webpack_exports__.Z = (getType);


/***/ }),

/***/ 8000:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4782);

const hasClass = (ele, name = "") => (0,_isElement__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(ele) && ele.className.match(new RegExp("(\\s|^)" + name + "(\\s|$)"));
/* harmony default export */ __webpack_exports__.Z = (hasClass);


/***/ }),

/***/ 4782:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6837);

const isElement = (value) => (0,_getType__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(value).indexOf("element") > -1;
/* harmony default export */ __webpack_exports__.Z = (isElement);


/***/ }),

/***/ 7578:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4782);

const removeClass = (ele, name = "") => {
  if (!(0,_isElement__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(ele)) {
    return;
  }
  const nameArr = name.split(" ").filter(Boolean);
  const targetName = ele.className.split(" ");
  const names = targetName.filter((v) => !nameArr.includes(v));
  ele.className = names.join(" ");
};
/* harmony default export */ __webpack_exports__.Z = (removeClass);


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
/* harmony import */ var _isElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4782);
/* harmony import */ var _hasClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8000);
/* harmony import */ var _addClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2738);
/* harmony import */ var _removeClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7578);




const toggleClass = (ele, name) => {
  if (!(0,_isElement__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(ele)) {
    return;
  }
  if ((0,_hasClass__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(ele, name)) {
    (0,_removeClass__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(ele, name);
  } else {
    (0,_addClass__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(ele, name);
  }
};
/* harmony default export */ __webpack_exports__.Z = (toggleClass);

}();
var __webpack_exports__default = __webpack_exports__.Z;
export { __webpack_exports__default as default };
