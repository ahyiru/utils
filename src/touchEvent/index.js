/******/ var __webpack_modules__ = ({

/***/ 3498:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const isBrowser = () => ![typeof window, typeof document].includes("undefined");
/* harmony default export */ __webpack_exports__["default"] = (isBrowser);


/***/ }),

/***/ 3849:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3498);

const isTouch = () => (0,_isBrowser__WEBPACK_IMPORTED_MODULE_0__["default"])() && (window.ontouchstart || navigator.maxTouchPoints);
/* harmony default export */ __webpack_exports__["default"] = (isTouch);


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
/* harmony import */ var _isTouch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3849);

const eventTargets = () => (0,_isTouch__WEBPACK_IMPORTED_MODULE_0__["default"])() ? {
  startKey: "touchstart",
  moveKey: "touchmove",
  endKey: "touchend"
} : {
  startKey: "mousedown",
  moveKey: "mousemove",
  endKey: "mouseup"
};
const initStart = (startKey, startFn, ref) => {
  ref.addEventListener(startKey, startFn, false);
};
const destroyStart = (startKey, startFn, ref) => {
  ref.removeEventListener(startKey, startFn, false);
};
const handleStart = (moveKey, endKey, moveFn, endFn, ref) => {
  ref.addEventListener(moveKey, moveFn, false);
  document.addEventListener(endKey, endFn, false);
};
const handleEnd = (moveKey, endKey, moveFn, endFn, ref) => {
  ref.removeEventListener(moveKey, moveFn, false);
  document.removeEventListener(endKey, endFn, false);
};
const touchEvent = (startEvent, moveEvent, endEvent, ref = document) => {
  const { startKey, moveKey, endKey } = eventTargets();
  const startFn = (event) => {
    startEvent(event, ref);
    handleStart(moveKey, endKey, moveFn, endFn, ref);
  };
  const moveFn = (event) => moveEvent(event, ref);
  const endFn = (event) => {
    endEvent(event, ref);
    handleEnd(moveKey, endKey, moveFn, endFn, ref);
  };
  initStart(startKey, startFn, ref);
  return () => destroyStart(startKey, startFn, ref);
};
/* harmony default export */ __webpack_exports__["default"] = (touchEvent);

}();
__webpack_exports__ = __webpack_exports__["default"];
var __webpack_exports__default = __webpack_exports__["default"];
export { __webpack_exports__default as default };
