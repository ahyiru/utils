var __webpack_exports__ = {};
const curry = (fn = () => {
}, arity = fn.length) => {
  const curried = (...args) => args.length >= arity ? fn(...args) : (...restArgs) => curried(...args, ...restArgs);
  return curried;
};
/* harmony default export */ __webpack_exports__.Z = (curry);

var __webpack_exports__default = __webpack_exports__.Z;
export { __webpack_exports__default as default };
