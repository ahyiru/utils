var __webpack_exports__ = {};
const loadBase64 = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.addEventListener("load", () => resolve(reader.result));
  reader.addEventListener("error", (error) => reject(error));
});
/* harmony default export */ __webpack_exports__.Z = (loadBase64);

var __webpack_exports__default = __webpack_exports__.Z;
export { __webpack_exports__default as default };
