var __webpack_exports__ = {};
const padStart = (str = "", n = 2, pad = "0") => {
  const len = str.length;
  if (len >= n) {
    return str;
  }
  const fill = Array(n - len + 1).join(pad);
  return `${fill}${str}`;
};
/* harmony default export */ __webpack_exports__.A = (padStart);

var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
