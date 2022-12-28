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

/***/ 5222:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9286);
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8859);
/* harmony import */ var _isReactEle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7604);
/* harmony import */ var _isVueEle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(657);
/* harmony import */ var _hasProp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6302);





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

/***/ 2192:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isValidArr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4577);

const filter = function (list, keyword) {
  let fields = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  let exact = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  let str2Dom = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  if (!(0,_isValidArr__WEBPACK_IMPORTED_MODULE_0__["default"])(list)) {
    return [];
  }
  if (!keyword) {
    return list;
  }
  fields = typeof fields === 'string' ? fields.split(',') : fields;
  return list.filter(v => {
    fields = fields.length > 0 ? fields : Object.keys(v);
    const matched = fields.filter(field => {
      const fieldValue = v[field];
      if (fieldValue == null) {
        return false;
      }
      if (exact) {
        return fieldValue === keyword;
      }
      const reg = new RegExp(keyword, 'gi');
      const match = fieldValue.toString().match(reg);
      // 高亮
      if (match && str2Dom) {
        v[field] = str2Dom(fieldValue.toString().replace(reg, `<span style="background-color:yellow">${match[0]}</span>`), {
          display: 'inline-block'
        });
      }
      return match;
    });
    return matched.length;
  });
};
/* harmony default export */ __webpack_exports__["default"] = (filter);

/***/ }),

/***/ 5777:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const getType = value => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
/* harmony default export */ __webpack_exports__["default"] = (getType);

/***/ }),

/***/ 6302:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const hasProp = (obj, prop) => Object.prototype.hasOwnProperty.call(obj != null ? obj : {}, prop);
/* harmony default export */ __webpack_exports__["default"] = (hasProp);

/***/ }),

/***/ 9286:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5777);

const isArray = value => (0,_getType__WEBPACK_IMPORTED_MODULE_0__["default"])(value) === 'array';
/* harmony default export */ __webpack_exports__["default"] = (isArray);

/***/ }),

/***/ 8859:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5777);

const isObject = value => (0,_getType__WEBPACK_IMPORTED_MODULE_0__["default"])(value) === 'object';
/* harmony default export */ __webpack_exports__["default"] = (isObject);

/***/ }),

/***/ 7604:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const isReactEle = value => (value == null ? void 0 : value['$$typeof']) && typeof value['$$typeof'] === 'symbol' && value['$$typeof']['description'] === 'react.element';
/* harmony default export */ __webpack_exports__["default"] = (isReactEle);

/***/ }),

/***/ 4577:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9286);

const isValidArr = value => (0,_isArray__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && !!value.length;
/* harmony default export */ __webpack_exports__["default"] = (isValidArr);

/***/ }),

/***/ 657:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const isVueEle = value => value == null ? void 0 : value.__v_isVNode;
/* harmony default export */ __webpack_exports__["default"] = (isVueEle);

/***/ }),

/***/ 557:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isValidArr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4577);
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8859);


const unique = function (arr) {
  let key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'id';
  if (!(0,_isValidArr__WEBPACK_IMPORTED_MODULE_0__["default"])(arr)) {
    return arr;
  }
  const newArr = [];
  const keys = [];
  arr.map(item => {
    // const idKey=isObject(item)?item[key]??JSON.stringify(item):item;
    const idKey = (0,_isObject__WEBPACK_IMPORTED_MODULE_1__["default"])(item) ? item[key] : item;
    if (!keys.includes(idKey)) {
      keys.push(idKey);
      newArr.push(item);
    }
  });
  return newArr;
};
/* harmony default export */ __webpack_exports__["default"] = (unique);

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/* unused harmony export getMatched */
/* harmony import */ var _isValidArr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4577);
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2192);
/* harmony import */ var _unique__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(557);
/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5222);




const getMatched = fn => function (arr) {
  let childKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'children';
  if (!Array.isArray(arr)) {
    return arr;
  }
  const list = (0,_clone__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
  const traver = data => {
    const matchedData = [];
    data.map(v => {
      if ((0,_isValidArr__WEBPACK_IMPORTED_MODULE_1__["default"])(v[childKey])) {
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
const filterList = function (data, keyword, str2Dom) {
  let fields = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'name';
  let idKey = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'id';
  let childKey = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'children';
  let exact = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
  return getMatched((list, matchedItem) => (0,_unique__WEBPACK_IMPORTED_MODULE_2__["default"])([...(0,_filter__WEBPACK_IMPORTED_MODULE_3__["default"])(list, keyword, fields, exact, str2Dom), ...matchedItem], idKey))(data, childKey);
};
/* harmony default export */ __webpack_exports__["default"] = (filterList);
}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});