/******/ var __webpack_modules__ = ({

/***/ 5683:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6383);

const arr2Tree = (fn) => (arr, idKey = "id", childKey = "children", treeRoot = -1) => {
  if (!(0,_isArray__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(arr)) {
    return arr;
  }
  const tmpData = {};
  const keys = arr.map((v) => v[idKey]);
  [...arr].map((v) => {
    const item = { ...v };
    const { [idKey]: id } = item;
    if (id != null) {
      let { parentId } = item;
      if (parentId == null) {
        parentId = fn?.(item) ?? treeRoot;
        item.parentId = parentId;
      }
      if (!tmpData[id]) {
        tmpData[id] = [];
      }
      item[childKey] = tmpData[id];
      if (!tmpData[parentId]) {
        tmpData[parentId] = [];
      }
      if (!tmpData[treeRoot]) {
        tmpData[treeRoot] = [];
      }
      const hasParent = keys.includes(parentId);
      if (hasParent) {
        tmpData[parentId].push(item);
      } else {
        tmpData[treeRoot].push(item);
      }
    }
  });
  return tmpData[treeRoot];
};
/* harmony default export */ __webpack_exports__.A = (arr2Tree);


/***/ }),

/***/ 8842:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const getType = (value) => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
/* harmony default export */ __webpack_exports__.A = (getType);


/***/ }),

/***/ 6383:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8842);

const isArray = (value) => (0,_getType__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(value) === "array";
/* harmony default export */ __webpack_exports__.A = (isArray);


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
/* harmony import */ var _arr2Tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5683);

const arr2TreeById = (data, idKey = "id", childKey = "children", treeRoot = -1) => (0,_arr2Tree__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)((item) => {
  const id = item[idKey];
  const parentArr = id.match(/\S+(?=-\S+)/);
  return parentArr?.[0] || treeRoot;
})(data, idKey, childKey, treeRoot);
/* harmony default export */ __webpack_exports__.A = (arr2TreeById);

var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
