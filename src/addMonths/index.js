var __webpack_exports__ = {};
const addMonths = (n, d = /* @__PURE__ */ new Date()) => {
  const newDate = new Date(d);
  newDate.setMonth(newDate.getMonth() + n);
  return newDate;
};
/* harmony default export */ __webpack_exports__.Z = (addMonths);

var __webpack_exports__default = __webpack_exports__.Z;
export { __webpack_exports__default as default };
