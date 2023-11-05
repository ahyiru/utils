var __webpack_exports__ = {};
const template = (strings, ...keys) => {
  const tmpl = [];
  strings.map((str, i) => {
    tmpl.push(str, keys[i] ?? "");
  });
  return tmpl.join("");
};
/* harmony default export */ __webpack_exports__.Z = (template);

var __webpack_exports__default = __webpack_exports__.Z;
export { __webpack_exports__default as default };
