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

/***/ 1071:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _hasProp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1915);

const isCyclic = (obj) => {
  const seenObjects = [];
  const detect = (obj2) => {
    if (obj2 && typeof obj2 === "object") {
      if (seenObjects.indexOf(obj2) !== -1) {
        return true;
      }
      seenObjects.push(obj2);
      let hasCyc = false;
      for (let key in obj2) {
        if ((0,_hasProp__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(obj2, key) && detect(obj2[key])) {
          obj2[key] = "cyclic";
          hasCyc = true;
        }
      }
      return hasCyc;
    }
    return false;
  };
  const result = detect(obj);
  return result && obj;
};
/* harmony default export */ __webpack_exports__.Z = (isCyclic);


/***/ }),

/***/ 6023:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6837);
/* harmony import */ var _cyclic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1071);
/* harmony import */ var _hasProp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1915);



const equal = (a, b) => {
  const typeA = (0,_getType__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(a);
  const typeB = (0,_getType__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(b);
  if (typeA !== typeB) {
    return false;
  }
  if (a == null || b == null) {
    return a === b;
  }
  if (["object", "array"].indexOf(typeA) === -1) {
    return a.toString() === b.toString();
  }
  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }
  if ((0,_cyclic__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(a) && (0,_cyclic__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(b)) {
    return equal(a, b);
  }
  for (let k in b) {
    if ((0,_hasProp__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(a, k) !== (0,_hasProp__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(b, k)) {
      return false;
    }
    if (!equal(a[k], b[k])) {
      return false;
    }
  }
  return true;
};
/* harmony default export */ __webpack_exports__.Z = (equal);


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

/***/ 9136:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const isVueEle = (value) => value?.__v_isVNode;
/* harmony default export */ __webpack_exports__.Z = (isVueEle);


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
/* harmony import */ var _equal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6023);
/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4793);


const cache = (len = 100) => {
  const snapshot = [];
  let currentIndex = -1;
  const record = (data) => {
    const length = snapshot.length;
    const tempData = (0,_clone__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(data);
    if (!(0,_equal__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(tempData, snapshot[length - 1]?.data)) {
      snapshot.push({ data: tempData });
      if (snapshot.length > len) {
        snapshot.shift();
      }
      currentIndex = snapshot.length - 1;
      return {
        index: currentIndex,
        length: currentIndex + 1,
        data: snapshot[currentIndex].data
      };
    }
    return {
      index: currentIndex,
      length,
      data: snapshot[currentIndex]?.data
    };
  };
  const cursor = (num = 0) => {
    const length = snapshot.length;
    currentIndex += num;
    currentIndex = currentIndex < 0 ? 0 : currentIndex > length - 1 ? length - 1 : currentIndex;
    return {
      index: currentIndex,
      length,
      data: (0,_clone__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(snapshot[currentIndex]?.data)
    };
  };
  const jump = (index) => {
    currentIndex = index;
    return {
      index: currentIndex,
      length: snapshot.length,
      data: (0,_clone__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(snapshot[currentIndex]?.data)
    };
  };
  const undo = () => cursor(-1);
  const redo = () => cursor(1);
  const getList = () => (0,_clone__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(snapshot);
  const clean = () => {
    snapshot.length = 0;
    currentIndex = -1;
  };
  return {
    record,
    cursor,
    jump,
    undo,
    redo,
    getList,
    clean
  };
};
/* harmony default export */ __webpack_exports__.Z = (cache);

}();
var __webpack_exports__default = __webpack_exports__.Z;
export { __webpack_exports__default as default };
