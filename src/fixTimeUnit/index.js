var __webpack_exports__ = {};
const fixTimeUnit = (s = 0, unit = ["s", "m", "h", "d"]) => {
  s = ~~s;
  if (s < 60) {
    return `${s}${unit[0]}`;
  }
  const m = ~~(s / 60);
  if (m < 60) {
    return `${m}${unit[1]}${s % 60}${unit[0]}`;
  }
  const h = ~~(s / 3600);
  const ls = s % 3600;
  const hm = ~~(ls / 60);
  if (h < 24) {
    return `${h}${unit[2]}${hm}${unit[1]}${ls % 60}${unit[0]}`;
  }
  return `${(h / 24).toFixed(2)}${unit[3]}`;
};
/* harmony default export */ __webpack_exports__.A = (fixTimeUnit);

var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
