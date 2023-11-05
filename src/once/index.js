var __webpack_exports__ = {};
const once = (fn = () => {
}) => {
  let called = false;
  return (...args) => {
    if (!called) {
      called = true;
      return fn(...args);
    }
  };
};
/* harmony default export */ __webpack_exports__.Z = (once);

var __webpack_exports__default = __webpack_exports__.Z;
export { __webpack_exports__default as default };
