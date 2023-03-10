var __webpack_exports__ = {};
const loadImage = (url) => new Promise((resolve, reject) => {
  const img = new Image();
  img.src = url;
  img.crossOrigin = "Anonymous";
  if (img.complete) {
    resolve(img);
  } else {
    img.addEventListener("load", () => resolve(img));
    img.addEventListener("error", (error) => reject(error));
  }
});
/* harmony default export */ __webpack_exports__["default"] = (loadImage);

__webpack_exports__ = __webpack_exports__["default"];
var __webpack_exports__default = __webpack_exports__["default"];
export { __webpack_exports__default as default };
