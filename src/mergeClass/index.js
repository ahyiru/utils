var __webpack_exports__ = {};
const mergeClass = (def, input) => {
  const defArr = def?.split(" ") ?? [];
  const inputArr = input?.split(" ") ?? [];
  return [.../* @__PURE__ */ new Set([...defArr, ...inputArr])].filter(Boolean).join(" ");
};
/* harmony default export */ __webpack_exports__["default"] = (mergeClass);

__webpack_exports__ = __webpack_exports__["default"];
var __webpack_exports__default = __webpack_exports__["default"];
export { __webpack_exports__default as default };
