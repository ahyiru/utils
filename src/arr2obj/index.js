var __webpack_exports__ = {};
const arr2obj = (arr = [], name = "name") => {
  const obj = {};
  arr.map(({ [name]: key, value }) => obj[key] = value);
  return obj;
};
/* harmony default export */ __webpack_exports__.A = (arr2obj);

var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
