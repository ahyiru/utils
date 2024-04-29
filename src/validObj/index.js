var __webpack_exports__ = {};
const validObj = (obj = {}) => {
  const newObj = {};
  Object.keys(obj).map((v) => {
    if (obj[v] != null) {
      newObj[v] = obj[v];
    }
  });
  return newObj;
};
/* harmony default export */ __webpack_exports__.A = (validObj);

var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
