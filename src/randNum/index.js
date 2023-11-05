var __webpack_exports__ = {};
const randNum = (a = 0, b = 0, int = true) => {
  a < b && (a = [b, b = a][0]);
  if (int) {
    return ~~(Math.random() * (a - b + 1)) + b;
  }
  return Math.random() * (a - b) + b;
};
/* harmony default export */ __webpack_exports__.Z = (randNum);

var __webpack_exports__default = __webpack_exports__.Z;
export { __webpack_exports__default as default };
