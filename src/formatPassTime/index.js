/******/ var __webpack_modules__ = ({

/***/ 675:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const addZero = (n) => n < 10 ? "0" + n : n;
const getTime = (day = /* @__PURE__ */ new Date()) => {
  const date = new Date(day);
  const y = date.getFullYear();
  const w = date.getDay();
  const m = addZero(date.getMonth() + 1);
  const d = addZero(date.getDate());
  const h = addZero(date.getHours());
  const M = addZero(date.getMinutes());
  const s = addZero(date.getSeconds());
  return [y, m, d, h, M, s, w];
};
/* harmony default export */ __webpack_exports__.Z = (getTime);


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
/* harmony import */ var _getTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(675);

const formatPassTime = (start, end = /* @__PURE__ */ new Date()) => {
  start = (0,_getTime__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(start);
  end = (0,_getTime__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(end);
  const dfYear = end.y - start.y;
  const dfMonth = end.m - start.m;
  const dfDay = end.d - start.d;
  const dfHour = end.h - start.h;
  const dfMinute = end.M - start.M;
  const prevMonthCount = new Date(end.y, end.m, 0).getDate();
  const getStr = (bTime, sTime, hex, bStr, sStr) => {
    const str = "\u524D";
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
    return getStr(dfYear, dfMonth, 12, "\u5E74", "\u4E2A\u6708");
  } else {
    if (dfMonth > 0) {
      return getStr(dfMonth, dfDay, prevMonthCount, "\u4E2A\u6708", "\u5929");
    } else {
      if (dfDay > 0) {
        return getStr(dfDay, dfHour, 24, "\u5929", "\u5C0F\u65F6");
      } else {
        if (dfHour > 0) {
          return getStr(dfHour, dfMinute, 60, "\u5C0F\u65F6", "\u5206\u949F");
        } else {
          if (dfMinute > 0) {
            return dfMinute + "\u5206\u949F\u524D";
          } else {
            return "\u521A\u521A";
          }
        }
      }
    }
  }
};
/* harmony default export */ __webpack_exports__.Z = (formatPassTime);

}();
var __webpack_exports__default = __webpack_exports__.Z;
export { __webpack_exports__default as default };
