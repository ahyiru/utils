var __webpack_exports__ = {};
const timestamp = () => {
  if (typeof performance !== "undefined" && typeof performance.now === "function") {
    return performance.now();
  }
  return (/* @__PURE__ */ new Date()).getTime();
};
/* harmony default export */ __webpack_exports__.Z = (timestamp);

var __webpack_exports__default = __webpack_exports__.Z;
export { __webpack_exports__default as default };
