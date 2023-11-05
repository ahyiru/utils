var __webpack_exports__ = {};
const addYears = (n, d = /* @__PURE__ */ new Date()) => {
  const newDate = new Date(d);
  newDate.setFullYear(newDate.getFullYear() + n);
  return newDate;
};
/* harmony default export */ __webpack_exports__.Z = (addYears);

var __webpack_exports__default = __webpack_exports__.Z;
export { __webpack_exports__default as default };
