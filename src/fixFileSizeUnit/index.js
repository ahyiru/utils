var __webpack_exports__ = {};
const fixFileSizeUnit = (size, base = 1024) => {
  const kb = size / base;
  if (kb < base) {
    return `${kb.toFixed(3) - 0} KB`;
  }
  const mb = kb / base;
  if (mb < base) {
    return `${mb.toFixed(3) - 0} M`;
  }
  const gb = mb / base;
  return `${gb.toFixed(3) - 0} G`;
};
/* harmony default export */ __webpack_exports__.Z = (fixFileSizeUnit);

var __webpack_exports__default = __webpack_exports__.Z;
export { __webpack_exports__default as default };
