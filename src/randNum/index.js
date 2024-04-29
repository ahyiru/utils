var __webpack_exports__ = {};
const randNum = (a = 0, b = 0, int = true) => {
  a < b && (a = [b, b = a][0]);
  if (int) {
    return ~~(Math.random() * (a - b + 1)) + b;
  }
  return Math.random() * (a - b) + b;
};
/* harmony default export */ __webpack_exports__.A = (randNum);

var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
