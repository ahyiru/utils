var __webpack_exports__ = {};
const trans2hex = (r = 0, g = 0, b = 0, a = 1) => {
  r -= 0;
  g -= 0;
  b -= 0;
  a -= 0;
  const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  if (a === 1) {
    return hex;
  }
  a = Math.round(a * 255).toString(16);
  a = a.length === 1 ? `0${a}` : a.length === 3 ? "ff" : a;
  return `${hex}${a}`;
};
const rgba2hex = (r = 0, g = 0, b = 0, a = 1) => {
  if (r.includes("rgb")) {
    const matched = r.match(/rgba?\((.+)\)/);
    if (matched) {
      const rgba = matched[1]?.split(",").map((v) => v.trim());
      return trans2hex(...rgba);
    }
    return r;
  }
  return trans2hex(r, g, b, a);
};
/* harmony default export */ __webpack_exports__["default"] = (rgba2hex);

__webpack_exports__ = __webpack_exports__["default"];
var __webpack_exports__default = __webpack_exports__["default"];
export { __webpack_exports__default as default };
