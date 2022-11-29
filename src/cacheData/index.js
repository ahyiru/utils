(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 1293:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1511);
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6359);
/* harmony import */ var _isReactEle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5390);
/* harmony import */ var _isVueEle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6826);
/* harmony import */ var _hasProp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7943);





const clone = obj => {
  if (!(0,_isArray__WEBPACK_IMPORTED_MODULE_0__["default"])(obj) && !(0,_isObject__WEBPACK_IMPORTED_MODULE_1__["default"])(obj)) {
    return obj;
  }
  const newObj = (0,_isArray__WEBPACK_IMPORTED_MODULE_0__["default"])(obj) ? [] : {};
  for (const i in obj) {
    if ((0,_hasProp__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, i)) {
      const item = obj[i];
      // newObj[i]=typeof item==='object'?item!==obj?clone(item):'cyclic':item;
      newObj[i] = (0,_isReactEle__WEBPACK_IMPORTED_MODULE_3__["default"])(item) || (0,_isVueEle__WEBPACK_IMPORTED_MODULE_4__["default"])(item) || typeof item !== 'object' ? item : item !== obj ? clone(item) : 'cyclic';
    } else {
      Object.setPrototypeOf(newObj, {
        [i]: obj[i]
      });
    }
  }
  return newObj;
};
/* harmony default export */ __webpack_exports__["default"] = (clone);

/***/ }),

/***/ 905:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _hasProp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7943);

const isCyclic = obj => {
  const seenObjects = [];
  const detect = obj => {
    if (obj && typeof obj === 'object') {
      if (seenObjects.indexOf(obj) !== -1) {
        return true;
      }
      seenObjects.push(obj);
      let hasCyc = false;
      for (let key in obj) {
        if ((0,_hasProp__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, key) && detect(obj[key])) {
          obj[key] = 'cyclic';
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
/* harmony default export */ __webpack_exports__["default"] = (isCyclic);

/***/ }),

/***/ 5590:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4117);
/* harmony import */ var _cyclic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(905);
/* harmony import */ var _hasProp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7943);



const equal = (a, b) => {
  const typeA = (0,_getType__WEBPACK_IMPORTED_MODULE_0__["default"])(a);
  const typeB = (0,_getType__WEBPACK_IMPORTED_MODULE_0__["default"])(b);
  if (typeA !== typeB) {
    return false;
  }
  if (a == null || b == null) {
    return a === b;
  }
  /*if(isEle(a)){
    return a.isEqualNode(b);
  }*/
  if (['object', 'array'].indexOf(typeA) === -1) {
    return a.toString() === b.toString();
  }
  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }
  if ((0,_cyclic__WEBPACK_IMPORTED_MODULE_1__["default"])(a) && (0,_cyclic__WEBPACK_IMPORTED_MODULE_1__["default"])(b)) {
    return equal(a, b);
  }
  for (let k in b) {
    if ((0,_hasProp__WEBPACK_IMPORTED_MODULE_2__["default"])(a, k) !== (0,_hasProp__WEBPACK_IMPORTED_MODULE_2__["default"])(b, k)) {
      return false;
    }
    if (!equal(a[k], b[k])) {
      return false;
    }
  }
  return true;
};
/* harmony default export */ __webpack_exports__["default"] = (equal);

/***/ }),

/***/ 4117:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const getType = value => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
/* harmony default export */ __webpack_exports__["default"] = (getType);

/***/ }),

/***/ 7943:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const hasProp = (obj, prop) => Object.prototype.hasOwnProperty.call(obj != null ? obj : {}, prop);
/* harmony default export */ __webpack_exports__["default"] = (hasProp);

/***/ }),

/***/ 1511:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4117);

const isArray = value => (0,_getType__WEBPACK_IMPORTED_MODULE_0__["default"])(value) === 'array';
/* harmony default export */ __webpack_exports__["default"] = (isArray);

/***/ }),

/***/ 6359:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4117);

const isObject = value => (0,_getType__WEBPACK_IMPORTED_MODULE_0__["default"])(value) === 'object';
/* harmony default export */ __webpack_exports__["default"] = (isObject);

/***/ }),

/***/ 5390:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const isReactEle = value => (value == null ? void 0 : value['$$typeof']) && typeof value['$$typeof'] === 'symbol' && value['$$typeof']['description'] === 'react.element';
/* harmony default export */ __webpack_exports__["default"] = (isReactEle);

/***/ }),

/***/ 6826:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const isVueEle = value => value == null ? void 0 : value.__v_isVNode;
/* harmony default export */ __webpack_exports__["default"] = (isVueEle);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/* harmony import */ var _equal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5590);
/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1293);


const cache = function () {
  let len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
  const snapshot = [];
  let currentIndex = -1;
  const record = data => {
    var _snapshot, _snapshot$currentInde;
    const length = snapshot.length;
    const tempData = (0,_clone__WEBPACK_IMPORTED_MODULE_0__["default"])(data);
    if (!(0,_equal__WEBPACK_IMPORTED_MODULE_1__["default"])(tempData, (_snapshot = snapshot[length - 1]) == null ? void 0 : _snapshot.data)) {
      snapshot.push({
        data: tempData
      });
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
      data: (_snapshot$currentInde = snapshot[currentIndex]) == null ? void 0 : _snapshot$currentInde.data
    };
  };
  const cursor = function () {
    var _snapshot$currentInde2;
    let num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    const length = snapshot.length;
    currentIndex += num;
    currentIndex = currentIndex < 0 ? 0 : currentIndex > length - 1 ? length - 1 : currentIndex;
    return {
      index: currentIndex,
      length,
      data: (0,_clone__WEBPACK_IMPORTED_MODULE_0__["default"])((_snapshot$currentInde2 = snapshot[currentIndex]) == null ? void 0 : _snapshot$currentInde2.data)
    };
  };
  const jump = index => {
    var _snapshot$currentInde3;
    currentIndex = index;
    return {
      index: currentIndex,
      length: snapshot.length,
      data: (0,_clone__WEBPACK_IMPORTED_MODULE_0__["default"])((_snapshot$currentInde3 = snapshot[currentIndex]) == null ? void 0 : _snapshot$currentInde3.data)
    };
  };
  const undo = () => cursor(-1);
  const redo = () => cursor(1);
  const getList = () => (0,_clone__WEBPACK_IMPORTED_MODULE_0__["default"])(snapshot);
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
/* harmony default export */ __webpack_exports__["default"] = (cache);
}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});