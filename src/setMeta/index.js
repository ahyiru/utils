/******/ var __webpack_modules__ = ({

/***/ 8099:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* unused harmony exports defaultHeadMeta, mergeMetaData */
/* harmony import */ var _str2Html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8210);

const defaultHeadMeta = [
  {
    "http-equiv": "X-UA-Compatible",
    content: "IE=edge,chrome=1"
  },
  {
    "http-equiv": "Cache-Control",
    content: "no-siteapp"
  },
  {
    name: "renderer",
    content: "webkit|ie-comp|ie-stand"
  },
  {
    name: "referrer",
    content: "no-referrer"
  },
  {
    name: "description",
    content: "web design"
  },
  {
    name: "keywords",
    content: "react,hooks,huxy,function"
  },
  {
    name: "viewport",
    content: "viewport-fit=cover"
    // content:'width=device-width,initial-scale=1.0,maximum-scale=1,minimum-scale=1,user-scalable=no,shrink-to-fit=no',
  },
  {
    name: "robots",
    content: "index,follow"
  },
  {
    name: "apple-mobile-web-app-title",
    content: "web"
  },
  {
    name: "apple-mobile-web-app-capable",
    content: "yes"
  },
  {
    name: "apple-mobile-web-app-status-bar-style",
    content: "black"
  },
  {
    name: "format-detection",
    content: "telphone=no,email=no"
  },
  {
    name: "x5-fullscreen",
    content: "true"
  },
  {
    name: "theme-color",
    content: "#33363b"
  },
  {
    name: "google",
    value: "notranslate"
  }
];
const mergeMetaData = (metaData) => {
  if (!Array.isArray(metaData)) {
    return defaultHeadMeta;
  }
  const newMeta = [...defaultHeadMeta];
  metaData.map((item) => {
    const index = newMeta.findIndex((v) => v.name === item.name || v["http-equiv"] === item["http-equiv"]);
    if (index > -1) {
      newMeta[index] = item;
    } else {
      newMeta.push(item);
    }
  });
  return newMeta;
};
const getMeta = (metaData) => {
  const metaList = mergeMetaData(metaData);
  const metaStr = metaList.map((item) => {
    const props = Object.keys(item).map((key) => `${key}=${item[key]}`).join(" ");
    return `<meta ${props} />`;
  });
  return (0,_str2Html__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(metaStr.join(""));
};
/* harmony default export */ __webpack_exports__.Ay = (getMeta);


/***/ }),

/***/ 5890:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const isBrowser = () => ![typeof window, typeof document].includes("undefined");
/* harmony default export */ __webpack_exports__.A = (isBrowser);


/***/ }),

/***/ 8210:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5890);

const str2Html = (str) => {
  if (!(0,_isBrowser__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)()) {
    return;
  }
  const templ = document.createElement("div");
  templ.innerHTML = str;
  const ele = templ.children[0];
  return ele;
};
/* harmony default export */ __webpack_exports__.A = (str2Html);


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
/******/ /* webpack/runtime/define property getters */
/******/ !function() {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = function(exports, definition) {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ }();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ !function() {
/******/ 	__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ }();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
/* harmony import */ var _isBrowser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5890);
/* harmony import */ var _getMeta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8099);


const setMeta = (metaData) => {
  const metas = (0,_getMeta__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay)(metaData);
  (0,_isBrowser__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)() && document.head.appendChild(...metas);
};
/* harmony default export */ __webpack_exports__.A = (setMeta);

var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
