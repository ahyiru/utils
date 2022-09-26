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

/***/ 1585:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const debounce = function () {
  let func = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : () => {};
  let delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 60;
  let timer = null;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
};

/* harmony default export */ __webpack_exports__["default"] = (debounce);

/***/ }),

/***/ 9548:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const getType = value => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();

/* harmony default export */ __webpack_exports__["default"] = (getType);

/***/ }),

/***/ 138:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const hasProp = (obj, prop) => Object.prototype.hasOwnProperty.call(obj != null ? obj : {}, prop);

/* harmony default export */ __webpack_exports__["default"] = (hasProp);

/***/ }),

/***/ 8291:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const isBrowser = () => ![typeof window, typeof document].includes('undefined');

/* harmony default export */ __webpack_exports__["default"] = (isBrowser);

/***/ }),

/***/ 8038:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9548);


const isElement = value => (0,_getType__WEBPACK_IMPORTED_MODULE_0__["default"])(value).indexOf('element') > -1;

/* harmony default export */ __webpack_exports__["default"] = (isElement);

/***/ }),

/***/ 9672:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _hasProp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(138);


const isRef = ref => (0,_hasProp__WEBPACK_IMPORTED_MODULE_0__["default"])(ref, 'current');

/* harmony default export */ __webpack_exports__["default"] = (isRef);

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
/* harmony import */ var _isBrowser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8291);
/* harmony import */ var _debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1585);
/* harmony import */ var _isElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);
/* harmony import */ var _isRef__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9672);





const createObj = (element, resizeListener) => {
  element = (0,_isElement__WEBPACK_IMPORTED_MODULE_0__["default"])(element) ? element : document.body;

  if (getComputedStyle(element).position === 'static') {
    element.style.position = 'relative';
  }

  const obj = document.createElement('object');
  obj.setAttribute('style', 'display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0');
  obj.setAttribute('class', 'resize-sensor');

  obj.onload = () => {
    obj.contentDocument.defaultView.addEventListener('resize', resizeListener, false);
    resizeListener();
  };

  obj.type = 'text/html';
  element.appendChild(obj);
  obj.data = 'about:blank';
  return obj;
};

const resize = function (element) {
  let delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 60;

  if (!(0,_isBrowser__WEBPACK_IMPORTED_MODULE_1__["default"])()) {
    return;
  }

  element = (0,_isRef__WEBPACK_IMPORTED_MODULE_2__["default"])(element) ? element.current : element;
  let domObj = undefined;
  let listeners = [];
  const resizeListener = (0,_debounce__WEBPACK_IMPORTED_MODULE_3__["default"])(() => listeners.map(listener => listener(element)), delay);

  const bind = cb => {
    if (!domObj) {
      domObj = createObj(element, resizeListener);
    }

    if (listeners.indexOf(cb) === -1) {
      listeners.push(cb);
    }
  };

  const unbind = cb => {
    const idx = listeners.indexOf(cb);

    if (idx !== -1) {
      listeners.splice(idx, 1);
    }

    if (listeners.length === 0 && domObj) {
      destroy();
    }
  };

  const destroy = () => {
    if (domObj && domObj.parentNode) {
      if (domObj.contentDocument) {
        domObj.contentDocument.defaultView.removeEventListener('resize', resizeListener, false);
      }

      domObj.parentNode.removeChild(domObj);
      domObj = undefined;
      listeners = [];
    }
  };

  return {
    element,
    bind,
    unbind,
    destroy
  };
};

/* harmony default export */ __webpack_exports__["default"] = (resize);
}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});