var __webpack_exports__ = {};
const mergeClass = (def, input) => {
  const defArr = def?.split(" ") ?? [];
  const inputArr = input?.split(" ") ?? [];
  return [.../* @__PURE__ */ new Set([...defArr, ...inputArr])].filter(Boolean).join(" ");
};
/* harmony default export */ __webpack_exports__.Z = (mergeClass);

var __webpack_exports__default = __webpack_exports__.Z;
export { __webpack_exports__default as default };
