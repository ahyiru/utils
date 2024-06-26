/******/ var __webpack_modules__ = ({

/***/ 5890:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const isBrowser = () => ![typeof window, typeof document].includes("undefined");
/* harmony default export */ __webpack_exports__.A = (isBrowser);


/***/ }),

/***/ 653:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const isEvent = (key) => key.startsWith("on");
const isProperty = (key) => key !== "children" && !isEvent(key);
const isNew = (prev, next) => (key) => prev[key] !== next[key];
const isGone = (prev, next) => (key) => !(key in next);
const filterProps = (props) => {
  const propsList = Object.keys(props);
  return {
    eventProps: propsList.filter(isEvent),
    propertyProps: propsList.filter(isProperty)
  };
};
const updateNode = (dom, prevProps, nextProps) => {
  const { eventProps: prevEvent, propertyProps: prevProperty } = filterProps(prevProps);
  const { eventProps: nextEvent, propertyProps: nextProperty } = filterProps(nextProps);
  prevEvent.filter(isGone(prevProps, nextProps)).map((key) => {
    const eventType = key.toLowerCase().slice(2);
    dom.removeEventListener(eventType, prevProps[key]);
  });
  prevProperty.filter(isGone(prevProps, nextProps)).map((key) => dom[key] = "");
  nextProperty.filter(isNew(prevProps, nextProps)).map((key) => dom[key] = nextProps[key]);
  nextEvent.filter(isNew(prevProps, nextProps)).map((key) => {
    const eventType = key.toLowerCase().slice(2);
    dom.addEventListener(eventType, nextProps[key]);
  });
};
/* harmony default export */ __webpack_exports__.A = (updateNode);


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
/* harmony import */ var _isBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5890);
/* harmony import */ var _updateNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(653);


const createNode = (fiber) => {
  if (!(0,_isBrowser__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)()) {
    return;
  }
  const dom = fiber.type === "TEXT_ELEMENT" ? document.createTextNode("") : document.createElement(fiber.type);
  (0,_updateNode__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(dom, {}, fiber.props);
  return dom;
};
/* harmony default export */ __webpack_exports__.A = (createNode);

var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
