/******/ var __webpack_modules__ = ({

/***/ 4793:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3685);
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8855);
/* harmony import */ var _isReactEle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5307);
/* harmony import */ var _isVueEle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9136);
/* harmony import */ var _hasProp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1915);





const clone = (obj) => {
  if (!(0,_isArray__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(obj) && !(0,_isObject__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(obj)) {
    return obj;
  }
  const newObj = (0,_isArray__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(obj) ? [] : {};
  for (const i in obj) {
    if ((0,_hasProp__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(obj, i)) {
      const item = obj[i];
      newObj[i] = (0,_isReactEle__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(item) || (0,_isVueEle__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(item) || typeof item !== "object" ? item : item !== obj ? clone(item) : "cyclic";
    } else {
      Object.setPrototypeOf(newObj, { [i]: obj[i] });
    }
  }
  return newObj;
};
/* harmony default export */ __webpack_exports__.Z = (clone);


/***/ }),

/***/ 9942:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isValidArr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(329);

const filter = (list, keyword, fields = [], exact = false, str2Dom = null) => {
  if (!(0,_isValidArr__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(list)) {
    return [];
  }
  if (!keyword) {
    return list;
  }
  fields = typeof fields === "string" ? fields.split(",") : fields;
  return list.filter((v) => {
    fields = fields.length > 0 ? fields : Object.keys(v);
    const matched = fields.filter((field) => {
      const fieldValue = v[field];
      if (fieldValue == null) {
        return false;
      }
      if (exact) {
        return fieldValue === keyword;
      }
      const reg = new RegExp(keyword, "gi");
      const match = fieldValue.toString().match(reg);
      if (match && str2Dom) {
        v[field] = str2Dom(fieldValue.toString().replace(reg, `<span style="background-color:yellow">${match[0]}</span>`), { display: "inline-block" });
      }
      return match;
    });
    return matched.length;
  });
};
/* harmony default export */ __webpack_exports__.Z = (filter);


/***/ }),

/***/ 6837:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const getType = (value) => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
/* harmony default export */ __webpack_exports__.Z = (getType);


/***/ }),

/***/ 1915:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const hasProp = (obj, prop) => Object.prototype.hasOwnProperty.call(obj ?? {}, prop);
/* harmony default export */ __webpack_exports__.Z = (hasProp);


/***/ }),

/***/ 3685:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6837);

const isArray = (value) => (0,_getType__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(value) === "array";
/* harmony default export */ __webpack_exports__.Z = (isArray);


/***/ }),

/***/ 8855:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6837);

const isObject = (value) => (0,_getType__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(value) === "object";
/* harmony default export */ __webpack_exports__.Z = (isObject);


/***/ }),

/***/ 5307:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const isReactEle = (value) => value?.["$$typeof"] && typeof value["$$typeof"] === "symbol" && value["$$typeof"]["description"] === "react.element";
/* harmony default export */ __webpack_exports__.Z = (isReactEle);


/***/ }),

/***/ 329:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3685);

const isValidArr = (value) => (0,_isArray__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(value) && !!value.length;
/* harmony default export */ __webpack_exports__.Z = (isValidArr);


/***/ }),

/***/ 9136:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const isVueEle = (value) => value?.__v_isVNode;
/* harmony default export */ __webpack_exports__.Z = (isVueEle);


/***/ }),

/***/ 1910:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isValidArr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(329);
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8855);


const unique = (arr, key = "id") => {
  if (!(0,_isValidArr__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(arr)) {
    return arr;
  }
  const newArr = [];
  const keys = [];
  arr.map((item) => {
    const idKey = (0,_isObject__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(item) ? item[key] : item;
    if (!keys.includes(idKey)) {
      keys.push(idKey);
      newArr.push(item);
    }
  });
  return newArr;
};
/* harmony default export */ __webpack_exports__.Z = (unique);


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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: function() { return /* binding */ getMatched; }
/* harmony export */ });
/* harmony import */ var _isValidArr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(329);
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9942);
/* harmony import */ var _unique__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1910);
/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4793);




const getMatched = (fn) => (arr, childKey = "children") => {
  if (!Array.isArray(arr)) {
    return arr;
  }
  const list = (0,_clone__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(arr);
  const traver = (data) => {
    const matchedData = [];
    data.map((v) => {
      if ((0,_isValidArr__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(v[childKey])) {
        const matchChildren = traver(v[childKey]) || [];
        v[childKey] = matchChildren;
        if (matchChildren.length > 0) {
          matchedData.push(v);
        }
      }
    });
    return fn(data, matchedData);
  };
  return traver(list);
};
const filterList = (data, keyword, fields = "name", exact = false, idKey = "id", childKey = "children", str2Dom) => getMatched((list, matchedItem) => (0,_unique__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)([...(0,_filter__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(list, keyword, fields, exact, str2Dom), ...matchedItem], idKey))(data, childKey);
/* harmony default export */ __webpack_exports__.Z = (filterList);

}();
var __webpack_exports__default = __webpack_exports__.Z;
var __webpack_exports__getMatched = __webpack_exports__.i;
export { __webpack_exports__default as default, __webpack_exports__getMatched as getMatched };
