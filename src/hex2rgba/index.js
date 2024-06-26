var __webpack_exports__ = {};
const hex2rgba = (hex = "") => {
  if (hex[0] !== "#") {
    return hex;
  }
  hex = hex.replace("#", "");
  const len = hex.length;
  if (len === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  } else if (len === 4) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`;
  }
  const r = parseInt(hex.slice(0, 2), 16) || 0;
  const g = parseInt(hex.slice(2, 4), 16) || 0;
  const b = parseInt(hex.slice(4, 6), 16) || 0;
  if (hex.length === 6) {
    return `rgb(${r},${g},${b})`;
  }
  const a = parseInt(hex.slice(6, 8), 16) / 255 || 1;
  return `rgba(${r},${g},${b},${a})`;
};
/* harmony default export */ __webpack_exports__.A = (hex2rgba);

var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
