var __webpack_exports__ = {};
const memoize = (fn = () => {
}, len = 100) => {
  let cache = [];
  return (...args) => {
    const key = JSON.stringify(args);
    const cached = cache.find((v) => v.key === key);
    if (!cached) {
      const result = fn(...args);
      cache.push({ key, result });
      if (cache.length > len) {
        cache.shift();
      }
      return result;
    }
    return cached.result;
  };
};
/* harmony default export */ __webpack_exports__.A = (memoize);

var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
