var __webpack_exports__ = {};
const timestamp = () => {
  if (typeof performance !== "undefined" && typeof performance.now === "function") {
    return performance.now();
  }
  return (/* @__PURE__ */ new Date()).getTime();
};
/* harmony default export */ __webpack_exports__["default"] = (timestamp);

__webpack_exports__ = __webpack_exports__["default"];
var __webpack_exports__default = __webpack_exports__["default"];
export { __webpack_exports__default as default };
