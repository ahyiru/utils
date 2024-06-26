/******/ var __webpack_modules__ = ({

/***/ 5890:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const isBrowser = () => ![typeof window, typeof document].includes("undefined");
/* harmony default export */ __webpack_exports__.A = (isBrowser);


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

const copyToClipboard = (text) => {
  if (!(0,_isBrowser__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)()) {
    return;
  }
  const copyText = document.createElement("textarea");
  copyText.value = text;
  copyText.style.position = "fixed";
  copyText.style.left = "-9999px";
  document.body.appendChild(copyText);
  copyText.select();
  copyText.setSelectionRange(0, -1);
  try {
    document.execCommand("copy");
  } catch (err) {
    console.error(err);
  }
  document.body.removeChild(copyText);
};
/* harmony default export */ __webpack_exports__.A = (copyToClipboard);

var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
