var __webpack_exports__ = {};
const isBase64Image = (str) => {
  if (typeof str !== "string") {
    return false;
  }
  const reg = /^data:image\/([a-zA-Z0-9]+);base64,.+/i;
  return str.match(reg);
};
/* harmony default export */ __webpack_exports__.Z = (isBase64Image);

var __webpack_exports__default = __webpack_exports__.Z;
export { __webpack_exports__default as default };
