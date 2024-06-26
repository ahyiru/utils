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

/***/ 5890:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const isBrowser = () => ![typeof window, typeof document].includes("undefined");
/* harmony default export */ __webpack_exports__.A = (isBrowser);


/***/ }),

/***/ 9622:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8842);

const isElement = (value) => (0,_getType__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(value).indexOf("element") > -1;
/* harmony default export */ __webpack_exports__.A = (isElement);


/***/ }),

/***/ 8427:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _hasProp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4815);

const isRef = (ref) => (0,_hasProp__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(ref, "current");
/* harmony default export */ __webpack_exports__.A = (isRef);


/***/ }),

/***/ 9433:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9622);

const setStyle = (ele, styles = {}, reset = false) => {
  if (!(0,_isElement__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(ele)) {
    return;
  }
  if (reset) {
    let objStr = "";
    Object.keys(styles).map((key) => {
      objStr += `${key}: ${styles[key]};`;
    });
    ele.style = objStr;
    return;
  }
  Object.keys(styles).map((key) => ele.style.setProperty(key, styles[key]));
};
/* harmony default export */ __webpack_exports__.A = (setStyle);


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
/* harmony import */ var _isBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5890);
/* harmony import */ var _setStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9433);
/* harmony import */ var _isRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8427);



const getTextSize = (text, styles, ele) => {
  if (!(0,_isBrowser__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)()) {
    return;
  }
  ele = (0,_isRef__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(ele) ? ele.current : ele ?? document.body;
  const span = document.createElement("span");
  span.setAttribute("style", `pointer-events: none; z-index: -1; opacity: 0;`);
  styles && (0,_setStyle__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(span, styles);
  span.innerText = (text ?? "").replace(/[\r\n]/g, "");
  ele.appendChild(span);
  const rect = span.getBoundingClientRect();
  ele.removeChild(span);
  return rect;
};
/* harmony default export */ __webpack_exports__.A = (getTextSize);

var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
