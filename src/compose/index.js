var __webpack_exports__ = {};
const compose = (...fns) => (...args) => {
  const [...tmpFns] = fns;
  const composed = (...restArgs) => {
    if (tmpFns.length === 0) {
      return restArgs[0];
    }
    return composed(tmpFns.pop()(...restArgs));
  };
  return composed(...args);
};
/* harmony default export */ __webpack_exports__.Z = (compose);

var __webpack_exports__default = __webpack_exports__.Z;
export { __webpack_exports__default as default };
