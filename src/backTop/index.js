/******/ var __webpack_modules__ = ({

/***/ 2240:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3498);

const addStyle = (text, hash) => {
  if (!(0,_isBrowser__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)()) {
    return;
  }
  if (hash) {
    return new Promise((resolve, reject) => {
      const loaded = [...document.getElementsByTagName("style")].map((item) => item.getAttribute("huxy-css-hash")).filter(Boolean).find((h) => h === hash);
      if (!loaded) {
        const style = document.createElement("style");
        style.onerror = (event) => reject(new Error(`Failed to load '${hash}' style`));
        style.onload = resolve;
        style.innerHTML = text;
        style.setAttribute("huxy-css-hash", hash);
        (document.head || document.getElementsByTagName("head")[0]).appendChild(style);
      } else {
        resolve();
      }
    });
  }
  return new Promise((resolve, reject) => {
    const loaded = [...document.getElementsByTagName("link")].find((item) => item.href === text);
    if (!loaded) {
      const link = document.createElement("link");
      link.onerror = (event) => reject(new Error(`Failed to load '${text}'`));
      link.onload = resolve;
      link.href = text;
      link.rel = "stylesheet";
      (document.head || document.getElementsByTagName("head")[0]).appendChild(link);
    } else {
      resolve();
    }
  });
};
/* harmony default export */ __webpack_exports__.Z = (addStyle);


/***/ }),

/***/ 1915:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const hasProp = (obj, prop) => Object.prototype.hasOwnProperty.call(obj ?? {}, prop);
/* harmony default export */ __webpack_exports__.Z = (hasProp);


/***/ }),

/***/ 3498:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const isBrowser = () => ![typeof window, typeof document].includes("undefined");
/* harmony default export */ __webpack_exports__.Z = (isBrowser);


/***/ }),

/***/ 1919:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _hasProp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1915);

const isRef = (ref) => (0,_hasProp__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(ref, "current");
/* harmony default export */ __webpack_exports__.Z = (isRef);


/***/ }),

/***/ 3869:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3498);
/* harmony import */ var _isRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1919);


const scrollTo = (top = 0, ele) => {
  if (!(0,_isBrowser__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)()) {
    return;
  }
  ele = (0,_isRef__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(ele) ? ele.current : ele ?? window;
  ele.scrollTo?.({ top, behavior: "smooth" });
};
/* harmony default export */ __webpack_exports__.Z = (scrollTo);


/***/ }),

/***/ 9662:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3498);

const scrollTop = () => (0,_isBrowser__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)() && (window.pageYOffset ?? document.documentElement.scrollTop ?? document.body.scrollTop);
/* harmony default export */ __webpack_exports__.Z = (scrollTop);


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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ utils_backTop; }
});

// EXTERNAL MODULE: ../../huxy/utils/isBrowser.js
var isBrowser = __webpack_require__(3498);
// EXTERNAL MODULE: ../../huxy/utils/scrollTop.js
var scrollTop = __webpack_require__(9662);
// EXTERNAL MODULE: ../../huxy/utils/scrollTo.js
var scrollTo = __webpack_require__(3869);
// EXTERNAL MODULE: ../../huxy/utils/addStyle.js
var addStyle = __webpack_require__(2240);
;// CONCATENATED MODULE: ../../huxy/utils/styles/backTop.js
const css = `.huxy-totop-bar {
  --size: 36px;
  --color: #fff;
  --bgColor: #666;
  --hoverBgColor: #40a9ff;
  width: var(--size);
  height: var(--size);
  border-radius: 4px;
  position: fixed;
  right: 20px;
  bottom: 20px;
  background-color: var(--bgColor);
  color: var(--color);
  z-index: 8888;
  cursor: pointer;
  overflow: hidden;
}
.huxy-totop-bar i,
.huxy-totop-bar span {
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: var(--size);
  height: var(--size);
  text-align: center;
}
.huxy-totop-bar i {
  font-size: 22px;
  line-height: var(--size);
  transform: translateY(0);
  transition: transform 0.2s;

  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  vertical-align: middle;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.huxy-totop-bar i:before {
  content: "\\2191";
}
.huxy-totop-bar span {
  font-size: 13px;
  font-weight: 500;
  line-height: 1.1;
  padding: 4px 0;
  background-color: var(--hoverBgColor);
  transform: translateY(100%);
  transition: transform 0.2s;
}
.huxy-totop-bar:hover i {
  transform: translateY(-100%);
}
.huxy-totop-bar:hover span {
  transform: translateY(0);
}`;
/* harmony default export */ var backTop = (css);

;// CONCATENATED MODULE: ../../huxy/utils/backTop.js





const getTotopBar = () => document.getElementsByClassName("huxy-totop-bar")[0];
const createTotopBar = (text) => {
  const hasTotopBar = getTotopBar();
  if (hasTotopBar) {
    return;
  }
  const totopBar = document.createElement("div");
  totopBar.setAttribute("class", "huxy-totop-bar");
  const i = document.createElement("i");
  const span = document.createElement("span");
  span.innerText = text;
  totopBar.appendChild(i);
  totopBar.appendChild(span);
  document.body.appendChild(totopBar);
  totopBar.addEventListener("click", () => (0,scrollTo/* default */.Z)(), false);
  return totopBar;
};
const removeTotopBar = () => {
  const totopBar = getTotopBar();
  if (totopBar) {
    document.body.removeChild(totopBar);
  }
};
const backTop_backTop = (top = 0, text = "\u8FD4\u56DE\u9876\u90E8") => {
  if (!(0,isBrowser/* default */.Z)()) {
    return;
  }
  (0,addStyle/* default */.Z)(backTop, "huxy-backtop-css");
  const scroll = () => {
    const st = (0,scrollTop/* default */.Z)();
    if (st > top) {
      createTotopBar(text);
    } else {
      removeTotopBar();
    }
  };
  const start = () => {
    document.addEventListener("scroll", scroll, false);
    return () => {
      removeTotopBar();
      document.removeEventListener("scroll", scroll, false);
    };
  };
  return start();
};
/* harmony default export */ var utils_backTop = (backTop_backTop);

}();
var __webpack_exports__default = __webpack_exports__.Z;
export { __webpack_exports__default as default };
