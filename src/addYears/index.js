var __webpack_exports__ = {};
const addYears = (n, d = /* @__PURE__ */ new Date()) => {
  const newDate = new Date(d);
  newDate.setFullYear(newDate.getFullYear() + n);
  return newDate;
};
/* harmony default export */ __webpack_exports__.A = (addYears);

var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
