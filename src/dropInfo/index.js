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

/***/ 1434:
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

/***/ 9706:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2868);
/* harmony import */ var _str2Html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4182);
/* harmony import */ var _getPosition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8825);
/* harmony import */ var _setStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(116);
/* harmony import */ var _isRef__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3192);
/* harmony import */ var _isElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1582);
/* harmony import */ var _sleep__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(840);








const getElementsSize = async function (ele) {
  let delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 15;

  if (!(0,_isBrowser__WEBPACK_IMPORTED_MODULE_0__["default"])()) {
    return;
  }

  if (typeof ele === 'string') {
    ele = (0,_str2Html__WEBPACK_IMPORTED_MODULE_1__["default"])(ele);
  }

  ele = (0,_isRef__WEBPACK_IMPORTED_MODULE_2__["default"])(ele) ? ele.current : ele;

  if (!(0,_isElement__WEBPACK_IMPORTED_MODULE_3__["default"])(ele)) {
    return {};
  }

  const shadow = ele.cloneNode(true);
  (0,_setStyle__WEBPACK_IMPORTED_MODULE_4__["default"])(shadow, {
    'pointer-events': 'none',
    'z-index': -1,
    opacity: 0,
    display: 'block',
    animation: 'none'
  }); // shadow.setAttribute('style', 'pointer-events: none; z-index: -1; opacity: 0; display: block;');

  ele.parentNode.appendChild(shadow);
  await (0,_sleep__WEBPACK_IMPORTED_MODULE_5__["default"])(delay);
  const info = (0,_getPosition__WEBPACK_IMPORTED_MODULE_6__["default"])(shadow);
  ele.parentNode.removeChild(shadow);
  return info;
};

/* harmony default export */ __webpack_exports__["default"] = (getElementsSize);

/***/ }),

/***/ 8825:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2868);


const getPosition = function () {
  var _ele$getBoundingClien;

  let ele = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0,_isBrowser__WEBPACK_IMPORTED_MODULE_0__["default"])() && document.body;
  return ele == null ? void 0 : (_ele$getBoundingClien = ele.getBoundingClientRect) == null ? void 0 : _ele$getBoundingClien.call(ele);
};

/* harmony default export */ __webpack_exports__["default"] = (getPosition);

/***/ }),

/***/ 6391:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const getType = value => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();

/* harmony default export */ __webpack_exports__["default"] = (getType);

/***/ }),

/***/ 9951:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2868);
/* harmony import */ var _isElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1582);



const getViewportSize = function () {
  let element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  if (!(0,_isBrowser__WEBPACK_IMPORTED_MODULE_0__["default"])()) {
    return {
      width: 0,
      height: 0
    };
  }

  if ((0,_isElement__WEBPACK_IMPORTED_MODULE_1__["default"])(element)) {
    return {
      width: element.clientWidth,
      height: element.clientHeight
    };
  }

  return {
    width: window.innerWidth || document.documentElement.clientWidth,
    height: window.innerHeight || document.documentElement.clientHeight
  };
};

/* harmony default export */ __webpack_exports__["default"] = (getViewportSize);

/***/ }),

/***/ 6166:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const hasProp = (obj, prop) => Object.prototype.hasOwnProperty.call(obj != null ? obj : {}, prop);

/* harmony default export */ __webpack_exports__["default"] = (hasProp);

/***/ }),

/***/ 2868:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const isBrowser = () => ![typeof window, typeof document].includes('undefined');

/* harmony default export */ __webpack_exports__["default"] = (isBrowser);

/***/ }),

/***/ 1582:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6391);


const isElement = value => (0,_getType__WEBPACK_IMPORTED_MODULE_0__["default"])(value).indexOf('element') > -1;

/* harmony default export */ __webpack_exports__["default"] = (isElement);

/***/ }),

/***/ 3192:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _hasProp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6166);


const isRef = ref => (0,_hasProp__WEBPACK_IMPORTED_MODULE_0__["default"])(ref, 'current');

/* harmony default export */ __webpack_exports__["default"] = (isRef);

/***/ }),

/***/ 116:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1582);


const setStyle = function (ele) {
  let styles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let reset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (!(0,_isElement__WEBPACK_IMPORTED_MODULE_0__["default"])(ele)) {
    return;
  }

  Object.keys(styles).map(key => {
    // ele.style[key]=reset?'':styles[key];
    ele.style.setProperty(key, reset ? '' : styles[key]);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (setStyle);

/***/ }),

/***/ 840:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export sleepSync */
const sleep = function () {
  let ms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 350;
  return new Promise(resolve => setTimeout(resolve, ms));
};

const sleepSync = function () {
  let ms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
  const start = Date.now();

  while (Date.now() - start <= ms) {}
};
/* harmony default export */ __webpack_exports__["default"] = (sleep);

/***/ }),

/***/ 4182:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2868);


const str2Html = str => {
  if (!(0,_isBrowser__WEBPACK_IMPORTED_MODULE_0__["default"])()) {
    return;
  }

  const templ = document.createElement('div');
  templ.innerHTML = str;
  const ele = templ.children[0]; // templ.childNodes

  return ele;
};

/* harmony default export */ __webpack_exports__["default"] = (str2Html);

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
/* unused harmony export setPosition */
/* harmony import */ var _debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1434);
/* harmony import */ var _getViewportSize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9951);
/* harmony import */ var _getPosition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8825);
/* harmony import */ var _getElementsSize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9706);
/* harmony import */ var _setStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(116);





const reg = /(\s|^)(drop-arrow-lt|drop-arrow-rt|drop-arrow-lb|drop-arrow-rb|drop-arrow-tl|drop-arrow-tr|drop-arrow-bl|drop-arrow-br)(\s|$)/;
const classReg = /drop-arrow-lt|drop-arrow-rt|drop-arrow-lb|drop-arrow-rb|drop-arrow-tl|drop-arrow-tr|drop-arrow-bl|drop-arrow-br/;

const setDirectionCls = (showEle, direction) => {
  var _showEle$getAttribute;

  direction = `drop-arrow-${direction}`;
  const cls = (_showEle$getAttribute = showEle.getAttribute('class')) != null ? _showEle$getAttribute : '';

  if (reg.test(cls)) {
    showEle.setAttribute('class', cls.replace(classReg, direction));
  } else {
    showEle.setAttribute('class', `${cls} ${direction}`);
  }
};

const setPosition = async (triggerEle, showEle, type) => {
  const {
    left,
    right,
    top,
    bottom
  } = (0,_getPosition__WEBPACK_IMPORTED_MODULE_0__["default"])(triggerEle);
  const {
    width,
    height
  } = (0,_getViewportSize__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const {
    width: sWidth,
    height: sHeight
  } = await (0,_getElementsSize__WEBPACK_IMPORTED_MODULE_2__["default"])(showEle);

  if (right < 0 || bottom < 0 || left > width || top > height) {
    return {};
  }

  if (type === 'vertical') {
    const style = {
      left: left + 'px',
      top: bottom + 10 + 'px',
      right: 'auto',
      bottom: 'auto'
    };
    let direction = 'lt';

    if (left + sWidth > width) {
      style.left = right - sWidth + 'px';
      direction = 'rt';
    }

    if (bottom + 10 + sHeight > height) {
      style.top = top - 10 - sHeight + 'px';
      direction = direction === 'lt' ? 'lb' : 'rb';
    }

    (0,_setStyle__WEBPACK_IMPORTED_MODULE_3__["default"])(showEle, style);
    setDirectionCls(showEle, direction);
  } else {
    const style = {
      left: right + 10 + 'px',
      top: top + 'px',
      right: 'auto',
      bottom: 'auto'
    };
    let direction = 'tl';

    if (right + 10 + sWidth > width) {
      style.left = left - 10 - sWidth + 'px';
      direction = 'tr';
    }

    if (top + sHeight > height) {
      style.top = bottom - sHeight + 'px';
      direction = direction === 'tl' ? 'bl' : 'br';
    }

    (0,_setStyle__WEBPACK_IMPORTED_MODULE_3__["default"])(showEle, style);
    setDirectionCls(showEle, direction);
  }
};

const dropInfo = function (triggerEle, showEle) {
  let type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'horizontal';
  const {
    body
  } = document;
  const debounced = (0,_debounce__WEBPACK_IMPORTED_MODULE_4__["default"])(setPosition);

  const listener = () => debounced(triggerEle, showEle, type);

  body.addEventListener('scroll', listener, false);
  window.addEventListener('resize', listener, false);

  const destroyFn = () => {
    body.removeEventListener('scroll', listener);
    window.removeEventListener('resize', listener);
    (0,_setStyle__WEBPACK_IMPORTED_MODULE_3__["default"])(showEle, {
      left: '',
      top: '',
      right: '',
      bottom: ''
    });
  };

  setPosition(triggerEle, showEle, type);
  return destroyFn;
};

/* harmony default export */ __webpack_exports__["default"] = (dropInfo);
}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});