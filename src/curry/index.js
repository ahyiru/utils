var __webpack_exports__ = {};
const curry = (fn = () => {
}, arity = fn.length) => {
  const curried = (...args) => args.length >= arity ? fn(...args) : (...restArgs) => curried(...args, ...restArgs);
  return curried;
};
/* harmony default export */ __webpack_exports__["default"] = (curry);

__webpack_exports__ = __webpack_exports__["default"];
var __webpack_exports__default = __webpack_exports__["default"];
export { __webpack_exports__default as default };
