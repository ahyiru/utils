var __webpack_exports__ = {};
const timestamp = () => {
  if (typeof performance !== "undefined" && typeof performance.now === "function") {
    return performance.now();
  }
  return (/* @__PURE__ */ new Date()).getTime();
};
/* harmony default export */ __webpack_exports__.A = (timestamp);

var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
