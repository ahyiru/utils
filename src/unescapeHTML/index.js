var __webpack_exports__ = {};
const unescapeHTML = (str) => str.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g, (tag) => ({ "&amp;": "&", "&lt;": "<", "&gt;": ">", "&#39;": "'", "&quot;": '"' })[tag] || tag);
/* harmony default export */ __webpack_exports__.Z = (unescapeHTML);

var __webpack_exports__default = __webpack_exports__.Z;
export { __webpack_exports__default as default };
