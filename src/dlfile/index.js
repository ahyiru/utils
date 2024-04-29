/******/ var __webpack_modules__ = ({

/***/ 2018:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const isBase64Image = (str) => {
  if (typeof str !== "string") {
    return false;
  }
  const reg = /^data:image\/([a-zA-Z0-9]+);base64,.+/i;
  return str.match(reg);
};
/* harmony default export */ __webpack_exports__.A = (isBase64Image);


/***/ }),

/***/ 5890:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const isBrowser = () => ![typeof window, typeof document].includes("undefined");
/* harmony default export */ __webpack_exports__.A = (isBrowser);


/***/ }),

/***/ 4659:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const isUrl = (url) => /^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(url);
/* harmony default export */ __webpack_exports__.A = (isUrl);


/***/ }),

/***/ 3886:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const timestamp = () => {
  if (typeof performance !== "undefined" && typeof performance.now === "function") {
    return performance.now();
  }
  return (/* @__PURE__ */ new Date()).getTime();
};
/* harmony default export */ __webpack_exports__.A = (timestamp);


/***/ }),

/***/ 41:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _timestamp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3886);

const uuidv4 = () => {
  let timeKey = (0,_timestamp__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (timeKey + Math.random() * 16) % 16 | 0;
    timeKey = Math.floor(timeKey / 16);
    return (c === "x" ? r : r & 3 | 8).toString(16);
  });
};
/* harmony default export */ __webpack_exports__.A = (uuidv4);


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
/* harmony import */ var _uuidv4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41);
/* harmony import */ var _isUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4659);
/* harmony import */ var _isBase64Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2018);




const dlfile = async (url, ext, name) => {
  if (!(0,_isBrowser__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)()) {
    return;
  }
  name = name || (0,_uuidv4__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)();
  const filename = ext ? `${name}.${ext}` : name;
  const isUrlStr = (0,_isUrl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(url);
  if (isUrlStr || (0,_isBase64Image__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(url)) {
    url = isUrlStr ? decodeURIComponent(url) : url;
    const response = await fetch(url);
    const disposition = response.headers.get("Content-Disposition");
    const resFilename = disposition && decodeURIComponent(disposition.split(";")[1].split("=")[1]);
    response.blob().then((blob) => {
      const dataUrl = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = resFilename || filename;
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      a.parentNode.removeChild(a);
      window.URL.revokeObjectURL(dataUrl);
    });
  } else {
    const blob = new Blob([url]);
    const dataUrl = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = filename;
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    a.parentNode.removeChild(a);
    window.URL.revokeObjectURL(dataUrl);
  }
};
/* harmony default export */ __webpack_exports__.A = (dlfile);

}();
var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
