/******/ var __webpack_modules__ = ({

/***/ 1915:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const hasProp = (obj, prop) => Object.prototype.hasOwnProperty.call(obj ?? {}, prop);
/* harmony default export */ __webpack_exports__["default"] = (hasProp);


/***/ }),

/***/ 3498:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const isBrowser = () => ![typeof window, typeof document].includes("undefined");
/* harmony default export */ __webpack_exports__["default"] = (isBrowser);


/***/ }),

/***/ 1919:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _hasProp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1915);

const isRef = (ref) => (0,_hasProp__WEBPACK_IMPORTED_MODULE_0__["default"])(ref, "current");
/* harmony default export */ __webpack_exports__["default"] = (isRef);


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
/* harmony import */ var _isBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3498);
/* harmony import */ var _isRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1919);


const watermark = ({
  container,
  width = "220px",
  height = "200px",
  textAlign = "center",
  textBaseline = "middle",
  font = "20px microsoft yahei",
  fillStyle = "rgba(202,202,202,0.4)",
  content = "\u8BF7\u52FF\u5916\u4F20",
  rotate = "-30",
  zIndex = 1e3
} = {}) => {
  if (!(0,_isBrowser__WEBPACK_IMPORTED_MODULE_0__["default"])()) {
    return;
  }
  container = (0,_isRef__WEBPACK_IMPORTED_MODULE_1__["default"])(container) ? container.current : container ?? document.body;
  const oldCanvas = container.firstChild;
  if (oldCanvas?.className === "watermark-canvas") {
    container.removeChild(oldCanvas);
  }
  const canvas = document.createElement("canvas");
  canvas.setAttribute("width", width);
  canvas.setAttribute("height", height);
  const ctx = canvas.getContext("2d");
  ctx.textAlign = textAlign;
  ctx.textBaseline = textBaseline;
  ctx.font = font;
  ctx.fillStyle = fillStyle;
  ctx.rotate(Math.PI / 180 * rotate);
  ctx.fillText(content, parseFloat(width) / 2, parseFloat(height) / 2);
  const base64Url = canvas.toDataURL();
  const watermarkDiv = document.createElement("div");
  watermarkDiv.setAttribute(
    "style",
    `
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:${zIndex};
    pointer-events:none;
    background-repeat:repeat;
    background-image:url('${base64Url}')`
  );
  container.style.position = "relative";
  container.insertBefore(watermarkDiv, container.firstChild);
};
/* harmony default export */ __webpack_exports__["default"] = (watermark);

}();
__webpack_exports__ = __webpack_exports__["default"];
var __webpack_exports__default = __webpack_exports__["default"];
export { __webpack_exports__default as default };
