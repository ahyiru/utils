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
/* harmony default export */ __webpack_exports__["default"] = (once);

__webpack_exports__ = __webpack_exports__["default"];
var __webpack_exports__default = __webpack_exports__["default"];
export { __webpack_exports__default as default };
