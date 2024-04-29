/******/ var __webpack_modules__ = ({

/***/ 8892:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _selectedHandle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9271);

const addAtPos = (tree, id, nodes, pos, idKey = "id", childKey = "children") => (0,_selectedHandle__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)((data, index) => {
  const item = data[index];
  if (item.children) {
    item.children.splice(pos, 0, nodes);
  } else {
    item.children = [nodes];
  }
})(tree, id, idKey, childKey);
/* harmony default export */ __webpack_exports__.A = (addAtPos);


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


/***/ }),

/***/ 9271:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6383);

const selectedHandle = (fn) => (arr, id, idKey = "id", childKey = "children") => {
  if (!(0,_isArray__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(arr)) {
    return null;
  }
  const selected = (data, parentId = "") => {
    for (let i = 0, l = data.length; i < l; i++) {
      const item = data[i];
      if (item[idKey] === id) {
        return fn(data, i, parentId) || data[i];
      }
      if ((0,_isArray__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(item[childKey])) {
        const selChildren = selected(item[childKey], item[idKey]);
        if (selChildren) {
          return selChildren;
        }
      }
    }
  };
  selected(arr);
  return arr;
};
/* harmony default export */ __webpack_exports__.A = (selectedHandle);


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
/* harmony import */ var _selectedHandle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9271);
/* harmony import */ var _addAtPos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8892);


const moveNodes = (tree, fromId, toId, pos, idKey = "id", childKey = "children") => {
  let fromItem = {};
  (0,_selectedHandle__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)((data, index) => {
    fromItem = data[index];
    data.splice(index, 1);
    return true;
  })(tree, fromId, idKey, childKey);
  (0,_addAtPos__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(tree, toId, fromItem, pos, idKey, childKey);
  return tree;
};
/* harmony default export */ __webpack_exports__.A = (moveNodes);

}();
var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
