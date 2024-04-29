var __webpack_exports__ = {};
const addDays = (n, d = /* @__PURE__ */ new Date()) => {
  const newDate = new Date(d);
  newDate.setDate(newDate.getDate() + n);
  return newDate;
};
/* harmony default export */ __webpack_exports__.A = (addDays);

var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
