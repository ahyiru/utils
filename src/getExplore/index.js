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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/* harmony import */ var _isBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5890);

const exploreList = [
  {
    name: "IE11",
    reg: /rv:([\d.]+)\) like gecko/
  },
  {
    name: "IE",
    reg: /msie ([\d.]+)/
  },
  {
    name: "Edge",
    reg: /edge\/([\d.]+)/
  },
  {
    name: "Firefox",
    reg: /firefox\/([\d.]+)/
  },
  {
    name: "Opera",
    reg: /(?:opera|opr).([\d.]+)/
  },
  {
    name: "Chrome",
    reg: /chrome\/([\d.]+)/
  },
  {
    name: "Safari",
    reg: /version\/([\d.]+).*safari/
  },
  {
    name: "WeiXin",
    reg: /micromessenger\/([\d.]+)/
  },
  {
    name: "TIM",
    reg: /tim\/([\d.]+)/
  },
  {
    name: "QQ",
    reg: /qq\/([\d.]+)/
  },
  {
    name: "IOS Chrome",
    reg: /crios\/([\d.]+)/
  }
];
const getExplore = () => {
  if (!(0,_isBrowser__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)()) {
    return;
  }
  const ua = window.navigator.userAgent.toLowerCase();
  const expItem = exploreList.find((item) => ua.match(item.reg)) ?? {};
  return {
    type: expItem.name,
    version: ua.match(expItem.reg)[1]
  };
};
/* harmony default export */ __webpack_exports__.A = (getExplore);

}();
var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
