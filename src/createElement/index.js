/******/ var __webpack_modules__ = ({

/***/ 8359:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const createTextElement = (text) => ({
  type: "TEXT_ELEMENT",
  props: { nodeValue: text }
});
/* harmony default export */ __webpack_exports__.A = (createTextElement);


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
/* harmony import */ var _createTextElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8359);

const createElement = (type, props, ...children) => ({
  type,
  props: {
    ...props,
    children: children.map((child) => typeof child === "object" ? child : (0,_createTextElement__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(child))
  }
});
/* harmony default export */ __webpack_exports__.A = (createElement);

var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
