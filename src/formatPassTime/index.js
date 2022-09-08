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

/***/ 5453:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const getTime = function () {
  let day = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
  const date = new Date(day);
  const y = date.getFullYear();
  const w = date.getDay();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  const h = date.getHours();
  const M = date.getMinutes();
  const s = date.getSeconds();
  return [y, m, d, h, M, s, w];
};

/* harmony default export */ __webpack_exports__["default"] = (getTime);

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
/* harmony import */ var _getTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5453);


const formatPassTime = function (start) {
  let end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  start = (0,_getTime__WEBPACK_IMPORTED_MODULE_0__["default"])(start);
  end = (0,_getTime__WEBPACK_IMPORTED_MODULE_0__["default"])(end);
  const dfYear = end.y - start.y;
  const dfMonth = end.m - start.m;
  const dfDay = end.d - start.d;
  const dfHour = end.h - start.h;
  const dfMinute = end.M - start.M;
  const prevMonthCount = new Date(end.y, end.m, 0).getDate();

  const getStr = (bTime, sTime, hex, bStr, sStr) => {
    const str = '前';

    if (sTime < 0) {
      bTime -= 1;
      sTime += hex;
    }

    if (bTime === 0) {
      return sTime + sStr + str;
    }

    if (sTime === 0) {
      return bTime + bStr + str;
    }

    return bTime + bStr + sTime + sStr + str;
  };

  if (dfYear > 0) {
    return getStr(dfYear, dfMonth, 12, '年', '个月');
  } else {
    if (dfMonth > 0) {
      return getStr(dfMonth, dfDay, prevMonthCount, '个月', '天');
    } else {
      if (dfDay > 0) {
        return getStr(dfDay, dfHour, 24, '天', '小时');
      } else {
        if (dfHour > 0) {
          return getStr(dfHour, dfMinute, 60, '小时', '分钟');
        } else {
          if (dfMinute > 0) {
            return dfMinute + '分钟前';
          } else {
            return '刚刚';
          }
        }
      }
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (formatPassTime);
}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});