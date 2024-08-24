/******/ var __webpack_modules__ = ({

/***/ 9195:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const debounce = (func = () => {
}, delay = 60) => {
  let timer = null;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
};
/* harmony default export */ __webpack_exports__.A = (debounce);


/***/ }),

/***/ 2050:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5890);
/* harmony import */ var _str2Html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8210);
/* harmony import */ var _getPosition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2217);
/* harmony import */ var _setStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9433);
/* harmony import */ var _isRef__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8427);
/* harmony import */ var _isElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9622);
/* harmony import */ var _sleep__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9941);







const getElementsSize = async (ele, delay = 15) => {
  if (!(0,_isBrowser__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)()) {
    return;
  }
  if (typeof ele === "string") {
    ele = (0,_str2Html__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(ele);
  }
  ele = (0,_isRef__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(ele) ? ele.current : ele;
  if (!(0,_isElement__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(ele)) {
    return {};
  }
  const shadow = ele.cloneNode(true);
  (0,_setStyle__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(shadow, { "pointer-events": "none", "z-index": -1, opacity: 0, display: "block", animation: "none" });
  ele.parentNode.appendChild(shadow);
  await (0,_sleep__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(delay);
  const info = (0,_getPosition__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(shadow);
  ele.parentNode.removeChild(shadow);
  return info;
};
/* harmony default export */ __webpack_exports__.A = (getElementsSize);


/***/ }),

/***/ 2217:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5890);
/* harmony import */ var _isRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8427);


const getPosition = (ele) => {
  if (!(0,_isBrowser__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)()) {
    return;
  }
  ele = (0,_isRef__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(ele) ? ele.current : ele ?? document.body;
  return ele.getBoundingClientRect?.();
};
/* harmony default export */ __webpack_exports__.A = (getPosition);


/***/ }),

/***/ 8842:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const getType = (value) => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
/* harmony default export */ __webpack_exports__.A = (getType);


/***/ }),

/***/ 8081:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5890);
/* harmony import */ var _isElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9622);


const getViewportSize = (element = null) => {
  if (!(0,_isBrowser__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)()) {
    return {
      width: 0,
      height: 0
    };
  }
  if ((0,_isElement__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(element)) {
    return {
      width: element.clientWidth,
      height: element.clientHeight
    };
  }
  return {
    width: window.innerWidth ?? document.documentElement.clientWidth,
    height: window.innerHeight ?? document.documentElement.clientHeight
  };
};
/* harmony default export */ __webpack_exports__.A = (getViewportSize);


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

const isRef = (ref) => {
  const refObj = typeof ref === "function" ? ref() : ref;
  return (0,_hasProp__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(refObj, "current");
};
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


/***/ }),

/***/ 9941:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* unused harmony export sleepSync */
const formatMs = (ms = 350, unit = "ms") => ({
  ms: ms * 1,
  s: ms * 1e3,
  m: ms * 6e4,
  h: ms * 36e5,
  d: ms * 864e5
})[unit] ?? ms;
const sleep = (ms = 350, unit = "ms") => new Promise((resolve) => setTimeout(resolve, formatMs(ms, unit)));
const sleepSync = (ms = 100) => {
  const start = Date.now();
  while (Date.now() - start <= ms) {
  }
};
/* harmony default export */ __webpack_exports__.A = (sleep);


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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: function() { return /* binding */ setPosition; }
/* harmony export */ });
/* harmony import */ var _debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9195);
/* harmony import */ var _getViewportSize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8081);
/* harmony import */ var _getPosition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2217);
/* harmony import */ var _getElementsSize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2050);
/* harmony import */ var _setStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9433);





const reg = /(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/;
const classReg = /huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/;
const setDirectionCls = (showEle, direction) => {
  direction = `huxy-drop-arrow-${direction}`;
  const cls = showEle.getAttribute("class") ?? "";
  if (reg.test(cls)) {
    showEle.setAttribute("class", cls.replace(classReg, direction));
  } else {
    showEle.setAttribute("class", `${cls} ${direction}`);
  }
};
const setPosition = async (triggerEle, showEle, type) => {
  const { left, right, top, bottom } = (0,_getPosition__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(triggerEle);
  const { width, height } = (0,_getViewportSize__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)();
  const { width: sWidth, height: sHeight } = await (0,_getElementsSize__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(showEle);
  if (right < 0 || bottom < 0 || left > width || top > height) {
    return {};
  }
  if (type === "vertical") {
    const style = {
      left: left + "px",
      top: bottom + 10 + "px",
      right: "auto",
      bottom: "auto"
    };
    let direction = "lt";
    if (left + sWidth > width) {
      style.left = right - sWidth + "px";
      direction = "rt";
    }
    if (bottom + 10 + sHeight > height) {
      style.top = top - 10 - sHeight + "px";
      direction = direction === "lt" ? "lb" : "rb";
    }
    (0,_setStyle__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(showEle, style);
    setDirectionCls(showEle, direction);
  } else {
    const style = {
      left: right + 10 + "px",
      top: top + "px",
      right: "auto",
      bottom: "auto"
    };
    let direction = "tl";
    if (right + 10 + sWidth > width) {
      style.left = left - 10 - sWidth + "px";
      direction = "tr";
    }
    if (top + sHeight > height) {
      style.top = bottom - sHeight + "px";
      direction = direction === "tl" ? "bl" : "br";
    }
    (0,_setStyle__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(showEle, style);
    setDirectionCls(showEle, direction);
  }
};
const dropInfo = (triggerEle, showEle, type = "horizontal") => {
  const debounced = (0,_debounce__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(setPosition);
  const listener = () => debounced(triggerEle, showEle, type);
  window.addEventListener("scroll", listener, false);
  window.addEventListener("resize", listener, false);
  const destroyFn = () => {
    window.removeEventListener("scroll", listener);
    window.removeEventListener("resize", listener);
    (0,_setStyle__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(showEle, { left: "", top: "", right: "", bottom: "" });
  };
  setPosition(triggerEle, showEle, type);
  return destroyFn;
};
/* harmony default export */ __webpack_exports__.A = (dropInfo);

var __webpack_exports__default = __webpack_exports__.A;
var __webpack_exports__setPosition = __webpack_exports__.K;
export { __webpack_exports__default as default, __webpack_exports__setPosition as setPosition };
