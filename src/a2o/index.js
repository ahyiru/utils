var __webpack_exports__ = {};
const a2o = (arr, key = "key", value = "value") => {
  const obj = {};
  (arr || []).map((v) => obj[v[key]] = v[value]);
  return obj;
};
/* harmony default export */ __webpack_exports__.A = (a2o);

var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
