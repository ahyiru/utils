/******/ var __webpack_modules__ = ({

/***/ 3498:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const isBrowser = () => ![typeof window, typeof document].includes("undefined");
/* harmony default export */ __webpack_exports__.Z = (isBrowser);


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

const osList = [
  {
    name: "ios",
    reg: /\(([^;]+);(.+)os (.+) like mac os x/,
    format: (matched) => ({
      type: "ios",
      model: matched[1],
      version: matched[3]?.replaceAll("_", ".")
    })
  },
  {
    name: "macOS",
    reg: /mac os x ([\w_.]+)/,
    format: (matched) => ({
      type: "macOS",
      version: matched[1] ? matched[1].replaceAll("_", ".") : void 0
    })
  },
  {
    name: "WindowsPhone",
    reg: /windows phone( os)? ([\d.]+)/,
    format: (matched) => ({
      type: "WindowsPhone",
      version: matched[2]
    })
  },
  {
    name: "Windows",
    reg: /windows nt ([\d.]+)/,
    format: (matched) => ({
      type: "Windows",
      version: matched[1]
    })
  },
  {
    name: "Android",
    reg: /android( [\d.]+)?/,
    format: (matched) => ({
      type: "Android",
      version: matched[1] ? matched[1].replaceAll(" ", "") : void 0
    })
  },
  {
    name: "Ubuntu",
    reg: /ubuntu/,
    format: (matched) => ({
      type: "Ubuntu"
    })
  },
  {
    name: "Linux",
    reg: /linux/,
    format: (matched) => ({
      type: "Linux"
    })
  }
];
const getOsInfo = () => {
  if (!(0,_isBrowser__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)()) {
    return;
  }
  const ua = window.navigator.userAgent.toLowerCase();
  const osItem = osList.find((item) => ua.match(item.reg));
  return osItem ? osItem.format(ua.match(osItem.reg)) : {};
};
/* harmony default export */ __webpack_exports__.Z = (getOsInfo);

}();
var __webpack_exports__default = __webpack_exports__.Z;
export { __webpack_exports__default as default };
