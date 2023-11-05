/******/ // The require scope
/******/ var __webpack_require__ = {};
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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: function() { return /* binding */ keyArr; }
/* harmony export */ });
const keyArr = (keys = "") => keys.replace(/\[['"]?(.*?)['"]?\]/g, ".$1")?.split(".");
const getValue = (object = {}, keys) => {
  keys = keyArr(keys);
  const checkValue = (obj, key) => {
    if (!key?.[0]) {
      return obj;
    }
    if (typeof obj[key[0]] === "object") {
      return checkValue(obj[key[0]], key.slice(1));
    }
    if (key.length > 1) {
      return void 0;
    }
    return obj[key[0]];
  };
  return checkValue(object, keys);
};
/* harmony default export */ __webpack_exports__.Z = (getValue);

var __webpack_exports__default = __webpack_exports__.Z;
var __webpack_exports__keyArr = __webpack_exports__.y;
export { __webpack_exports__default as default, __webpack_exports__keyArr as keyArr };
