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

/***/ 9285:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ utils_arr2Tree; }
});

;// CONCATENATED MODULE: ../../../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// EXTERNAL MODULE: ../../huxy/utils/isArray.js
var isArray = __webpack_require__(5593);
;// CONCATENATED MODULE: ../../huxy/utils/arr2Tree.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



const arr2Tree = fn => function (arr) {
  let idKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'id';
  let childKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'children';
  let treeRoot = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : -1;

  if (!(0,isArray["default"])(arr)) {
    return arr;
  }

  const tmpData = {};
  const keys = arr.map(v => v[idKey]);
  [...arr].map(v => {
    const item = _objectSpread({}, v);

    const {
      [idKey]: id
    } = item;

    if (id != null) {
      // const parentId = fn(id) || treeRoot;
      let {
        parentId
      } = item;

      if (parentId == null) {
        var _fn;

        parentId = (_fn = fn == null ? void 0 : fn(item)) != null ? _fn : treeRoot;
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

/* harmony default export */ var utils_arr2Tree = (arr2Tree);

/***/ }),

/***/ 6391:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const getType = value => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();

/* harmony default export */ __webpack_exports__["default"] = (getType);

/***/ }),

/***/ 5593:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6391);


const isArray = value => (0,_getType__WEBPACK_IMPORTED_MODULE_0__["default"])(value) === 'array';

/* harmony default export */ __webpack_exports__["default"] = (isArray);

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
/* harmony import */ var _arr2Tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9285);


const arr2TreeById = function (data) {
  let idKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'id';
  let childKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'children';
  let treeRoot = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : -1;
  return (0,_arr2Tree__WEBPACK_IMPORTED_MODULE_0__["default"])(item => {
    const id = item[idKey];
    const parentArr = id.match(/\S+(?=-\S+)/);
    return (parentArr == null ? void 0 : parentArr[0]) || treeRoot;
  })(data, idKey, childKey, treeRoot);
};

/* harmony default export */ __webpack_exports__["default"] = (arr2TreeById);
}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});