var __webpack_exports__ = {};
const escapeHTML = (str) => str.replace(/[&<>'"]/g, (tag) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[tag] || tag);
/* harmony default export */ __webpack_exports__.A = (escapeHTML);

var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
