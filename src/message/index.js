/******/ var __webpack_modules__ = ({

/***/ 2240:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3498);

const addStyle = (text, hash) => {
  if (!(0,_isBrowser__WEBPACK_IMPORTED_MODULE_0__["default"])()) {
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
/* harmony default export */ __webpack_exports__["default"] = (addStyle);


/***/ }),

/***/ 6837:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const getType = (value) => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
/* harmony default export */ __webpack_exports__["default"] = (getType);


/***/ }),

/***/ 3498:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const isBrowser = () => ![typeof window, typeof document].includes("undefined");
/* harmony default export */ __webpack_exports__["default"] = (isBrowser);


/***/ }),

/***/ 4782:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6837);

const isElement = (value) => (0,_getType__WEBPACK_IMPORTED_MODULE_0__["default"])(value).indexOf("element") > -1;
/* harmony default export */ __webpack_exports__["default"] = (isElement);


/***/ }),

/***/ 7578:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4782);

const removeClass = (ele, name = "") => {
  if (!(0,_isElement__WEBPACK_IMPORTED_MODULE_0__["default"])(ele)) {
    return;
  }
  const nameArr = name.split(" ").filter(Boolean);
  const targetName = ele.className.split(" ");
  const names = targetName.filter((v) => !nameArr.includes(v));
  ele.className = names.join(" ");
};
/* harmony default export */ __webpack_exports__["default"] = (removeClass);


/***/ }),

/***/ 8098:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const timestamp = () => {
  if (typeof performance !== "undefined" && typeof performance.now === "function") {
    return performance.now();
  }
  return (/* @__PURE__ */ new Date()).getTime();
};
/* harmony default export */ __webpack_exports__["default"] = (timestamp);


/***/ }),

/***/ 1411:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _timestamp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8098);

const uuidv4 = () => {
  let timeKey = (0,_timestamp__WEBPACK_IMPORTED_MODULE_0__["default"])();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (timeKey + Math.random() * 16) % 16 | 0;
    timeKey = Math.floor(timeKey / 16);
    return (c === "x" ? r : r & 3 | 8).toString(16);
  });
};
/* harmony default export */ __webpack_exports__["default"] = (uuidv4);


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
  "default": function() { return /* binding */ utils_message; }
});

// EXTERNAL MODULE: ../../huxy/utils/isBrowser.js
var isBrowser = __webpack_require__(3498);
// EXTERNAL MODULE: ../../huxy/utils/removeClass.js
var removeClass = __webpack_require__(7578);
// EXTERNAL MODULE: ../../huxy/utils/addStyle.js
var addStyle = __webpack_require__(2240);
// EXTERNAL MODULE: ../../huxy/utils/uuidv4.js
var uuidv4 = __webpack_require__(1411);
;// CONCATENATED MODULE: ../../huxy/utils/styles/message.js
const css = `@keyframes huxy-message-animate-in {
  0% {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
@keyframes huxy-message-animate-out {
  0% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  100% {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
}
.huxy-message {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
  z-index: 999999;
  pointer-events: none;
}

.message-content {
  position: relative;
  display: flex;
  align-items: center;
  background: #ffffff;
  color: #333333;
  border-radius: 4px;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  margin-top: 24px;
  padding: 10px 16px;
  opacity: 0;
  transform: translate3d(0, -100%, 0);
  animation: huxy-message-animate-out 0.25s forwards;
}

.message-content.open {
  animation: huxy-message-animate-in 0.25s forwards;
}

.message-content i {
  /* font-size: 1.8rem; */
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  /* line-height: 1; */
  vertical-align: middle;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-right: 8px;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  text-align: center;
  color: #fff;
  flex-shrink: 0;
}
.message-content.success i {
  background: #73d13d;
}
.message-content.success i:before {
  content: "\\2713";
}
.message-content.error i {
  background: #ff4d4f;
}
.message-content.error i:before {
  content: "\\00D7";
}
.message-content.warn i {
  background: #ffa940;
}
.message-content.warn i:before {
  content: "\\267A";
}
.message-content.info i {
  background: #40a9ff;
}
.message-content.info i:before {
  content: "\\2690";
}`;
/* harmony default export */ var message = (css);

;// CONCATENATED MODULE: ../../huxy/utils/message.js





const getContainer = () => document.getElementsByClassName("huxy-message")[0];
const createContainer = () => {
  const div = document.createElement("div");
  const child = document.createElement("div");
  child.setAttribute("class", "huxy-message");
  div.appendChild(child);
  document.body.appendChild(div);
  return child;
};
const createItem = (content, status, uuid) => {
  const mes = document.createElement("div");
  mes.setAttribute("class", `message-content open ${status}`);
  mes.setAttribute("data-id", uuid);
  const text = document.createElement("span");
  text.innerText = content?.message ?? content;
  const icon = document.createElement("i");
  mes.appendChild(icon);
  mes.appendChild(text);
  return mes;
};
const startMes = (content, delay = 3250, onClose, status) => {
  if (!(0,isBrowser["default"])()) {
    return;
  }
  (0,addStyle["default"])(message, "huxy-message-css");
  let container = getContainer();
  if (!container) {
    container = createContainer();
  }
  const uuid = (0,uuidv4["default"])();
  const mesItem = createItem(content, status, uuid);
  container.appendChild(mesItem);
  if (delay) {
    setTimeout(() => {
      container.removeChild(mesItem);
      onClose?.();
    }, delay);
    setTimeout(() => {
      (0,removeClass["default"])(mesItem, "open");
    }, delay - 250);
  }
  return uuid;
};
const destroyMes = (key) => {
  const container = getContainer();
  if (container) {
    if (key) {
      const mesItem = container.querySelector(`[data-id="${key}"]`);
      if (mesItem) {
        container.removeChild(mesItem);
      }
    } else {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    }
  }
};
const message_message = {
  success: (content, delay, onClose) => startMes(content, delay, onClose, "success"),
  warn: (content, delay, onClose) => startMes(content, delay, onClose, "warn"),
  warning: (content, delay, onClose) => startMes(content, delay, onClose, "warn"),
  error: (content, delay, onClose) => startMes(content, delay, onClose, "error"),
  info: (content, delay, onClose) => startMes(content, delay, onClose, "info"),
  destroy: destroyMes
};
/* harmony default export */ var utils_message = (message_message);

}();
__webpack_exports__ = __webpack_exports__["default"];
var __webpack_exports__default = __webpack_exports__["default"];
export { __webpack_exports__default as default };
