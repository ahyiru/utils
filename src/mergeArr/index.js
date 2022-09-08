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

/***/ 6391:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const getType = value => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();

/* harmony default export */ __webpack_exports__["default"] = (getType);

/***/ }),

/***/ 6166:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const hasProp = (obj, prop) => Object.prototype.hasOwnProperty.call(obj != null ? obj : {}, prop);

/* harmony default export */ __webpack_exports__["default"] = (hasProp);

/***/ }),

/***/ 5593:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6391);


const isArray = value => (0,_getType__WEBPACK_IMPORTED_MODULE_0__["default"])(value) === 'array';

/* harmony default export */ __webpack_exports__["default"] = (isArray);

/***/ }),

/***/ 3487:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6391);


const isObject = value => (0,_getType__WEBPACK_IMPORTED_MODULE_0__["default"])(value) === 'object';

/* harmony default export */ __webpack_exports__["default"] = (isObject);

/***/ }),

/***/ 9722:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3487);
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5593);
/* harmony import */ var _mergeObj__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5831);




const mergeArr = function (base, extend) {
  let key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';

  if (!(0,_isArray__WEBPACK_IMPORTED_MODULE_0__["default"])(base)) {
    return extend;
  }

  if (!(0,_isArray__WEBPACK_IMPORTED_MODULE_0__["default"])(extend)) {
    return base;
  }

  const sameItems = {};
  [...base, ...extend].map(item => {
    var _item$key;

    const idKey = (0,_isObject__WEBPACK_IMPORTED_MODULE_1__["default"])(item) ? (_item$key = item[key]) != null ? _item$key : JSON.stringify(item) : item;

    if (sameItems[idKey] === undefined) {
      sameItems[idKey] = item;
    } else {
      const oldItem = sameItems[idKey];

      if ((0,_isObject__WEBPACK_IMPORTED_MODULE_1__["default"])(oldItem) && (0,_isObject__WEBPACK_IMPORTED_MODULE_1__["default"])(item)) {
        sameItems[idKey] = (0,_mergeObj__WEBPACK_IMPORTED_MODULE_2__["default"])(oldItem, item);
      } else if ((0,_isArray__WEBPACK_IMPORTED_MODULE_0__["default"])(oldItem) && (0,_isArray__WEBPACK_IMPORTED_MODULE_0__["default"])(item)) {
        sameItems[idKey] = mergeArr(oldItem, item);
      } else {
        sameItems[idKey] = item;
      }
    }
  });
  return Object.keys(sameItems).map(v => sameItems[v]);
};

/* harmony default export */ __webpack_exports__["default"] = (mergeArr);

/***/ }),

/***/ 5831:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3487);
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5593);
/* harmony import */ var _mergeArr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9722);
/* harmony import */ var _hasProp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6166);





const mergeObj = (base, extend) => {
  if (!(0,_isObject__WEBPACK_IMPORTED_MODULE_0__["default"])(base)) {
    return extend;
  }

  if (!(0,_isObject__WEBPACK_IMPORTED_MODULE_0__["default"])(extend)) {
    return base;
  }

  for (let k in extend) {
    if ((0,_hasProp__WEBPACK_IMPORTED_MODULE_1__["default"])(extend, k)) {
      if ((0,_isObject__WEBPACK_IMPORTED_MODULE_0__["default"])(base[k]) && (0,_isObject__WEBPACK_IMPORTED_MODULE_0__["default"])(extend[k])) {
        base[k] = mergeObj(base[k], extend[k]);
      } else if ((0,_isArray__WEBPACK_IMPORTED_MODULE_2__["default"])(base[k]) && (0,_isArray__WEBPACK_IMPORTED_MODULE_2__["default"])(extend[k])) {
        base[k] = (0,_mergeArr__WEBPACK_IMPORTED_MODULE_3__["default"])(base[k], extend[k]);
      } else {
        base[k] = extend[k];
      }
    } else {
      Object.setPrototypeOf(base, {
        [k]: extend[k]
      });
    }
  }

  return base;
};

/* harmony default export */ __webpack_exports__["default"] = (mergeObj);

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(9722);
/******/ 	__webpack_exports__ = __webpack_exports__["default"];
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});