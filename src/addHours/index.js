var __webpack_exports__ = {};
const addHours = (n, d = /* @__PURE__ */ new Date()) => {
  const newDate = new Date(d);
  newDate.setHours(newDate.getHours() + n);
  return newDate;
};
/* harmony default export */ __webpack_exports__.A = (addHours);

var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
