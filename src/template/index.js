var __webpack_exports__ = {};
const template = (strings, ...keys) => {
  const tmpl = [];
  strings.map((str, i) => {
    tmpl.push(str, keys[i] ?? "");
  });
  return tmpl.join("");
};
/* harmony default export */ __webpack_exports__["default"] = (template);

__webpack_exports__ = __webpack_exports__["default"];
var __webpack_exports__default = __webpack_exports__["default"];
export { __webpack_exports__default as default };
