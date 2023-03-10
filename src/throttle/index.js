var __webpack_exports__ = {};
const throttle = (fn = () => {
}, delay = 60) => {
  let timer = null;
  return function(...args) {
    if (!timer) {
      fn.apply(this, args);
      timer = setTimeout(() => timer = null, delay);
    }
  };
};
/* harmony default export */ __webpack_exports__["default"] = (throttle);

__webpack_exports__ = __webpack_exports__["default"];
var __webpack_exports__default = __webpack_exports__["default"];
export { __webpack_exports__default as default };
