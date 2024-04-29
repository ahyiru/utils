var __webpack_exports__ = {};
const dash2camel = (s, d = "-") => s.split(d).map((v, k) => k > 0 ? v.replace(/^\S/, (s2) => s2.toUpperCase()) : v.replace(/^\S/, (s2) => s2.toLowerCase())).join("");
/* harmony default export */ __webpack_exports__.A = (dash2camel);

var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
