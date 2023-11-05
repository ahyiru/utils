var __webpack_exports__ = {};
const addDays = (n, d = /* @__PURE__ */ new Date()) => {
  const newDate = new Date(d);
  newDate.setDate(newDate.getDate() + n);
  return newDate;
};
/* harmony default export */ __webpack_exports__.Z = (addDays);

var __webpack_exports__default = __webpack_exports__.Z;
export { __webpack_exports__default as default };
