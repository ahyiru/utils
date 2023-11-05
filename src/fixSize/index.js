var __webpack_exports__ = {};
const fixSize = (img, ratio = 1) => {
  const imgRatio = img.width / img.height / ratio;
  const percent = imgRatio > 1 ? "100%" : `${(imgRatio * 100).toFixed(4)}%`;
  return img.width = percent;
};
/* harmony default export */ __webpack_exports__.Z = (fixSize);

var __webpack_exports__default = __webpack_exports__.Z;
export { __webpack_exports__default as default };
