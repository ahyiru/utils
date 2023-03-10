var __webpack_exports__ = {};
const padStart = (str = "", n = 0, pad = "0") => {
  const len = str.length;
  if (len >= n) {
    return str;
  }
  const fill = Array(n - len + 1).join(pad);
  return `${fill}${str}`;
};
/* harmony default export */ __webpack_exports__["default"] = (padStart);

__webpack_exports__ = __webpack_exports__["default"];
var __webpack_exports__default = __webpack_exports__["default"];
export { __webpack_exports__default as default };
