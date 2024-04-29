var __webpack_exports__ = {};
const dataURLtoFile = (dataurl, filename) => {
  const arr = dataurl.split(",");
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename ?? +/* @__PURE__ */ new Date(), { type: mime });
};
/* harmony default export */ __webpack_exports__.A = (dataURLtoFile);

var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
