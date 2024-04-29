var __webpack_exports__ = {};
const omit = (obj = {}, keys = []) => {
  keys = typeof keys === "string" ? keys.split(",") : keys;
  const newObj = {};
  const newQuery = [];
  Object.keys(obj).map((key) => !keys.includes(key) ? newObj[key] = obj[key] : newQuery.push({ key, value: obj[key] }));
  return { newObj, newQuery };
};
/* harmony default export */ __webpack_exports__.A = (omit);

var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
