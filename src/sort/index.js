var __webpack_exports__ = {};
const sort = (arr, key = null, desc = false) => {
  return [...arr || []].sort((x, y) => {
    const a = key ? x[key] : x;
    const b = key ? y[key] : y;
    if (!isNaN(Number(a)) && !isNaN(Number(a))) {
      return desc ? b - a : a - b;
    }
    if (typeof a === "string" && typeof b === "string") {
      return desc ? b.localeCompare(a) : a.localeCompare(b);
    }
    if (typeof a === "string" && typeof b === "number") {
      return desc ? -1 : 1;
    }
    if (typeof a === "number" || typeof a === "string") {
      return desc ? 1 : -1;
    }
    return desc ? -1 : 1;
  });
};
/* harmony default export */ __webpack_exports__.Z = (sort);

var __webpack_exports__default = __webpack_exports__.Z;
export { __webpack_exports__default as default };
