var __webpack_exports__ = {};
const omit = (obj = {}, keys = []) => {
  keys = typeof keys === "string" ? keys.split(",") : keys;
  const newObj = {};
  const newQuery = [];
  Object.keys(obj).map((key) => !keys.includes(key) ? newObj[key] = obj[key] : newQuery.push({ key, value: obj[key] }));
  return { newObj, newQuery };
};
/* harmony default export */ __webpack_exports__["default"] = (omit);

__webpack_exports__ = __webpack_exports__["default"];
var __webpack_exports__default = __webpack_exports__["default"];
export { __webpack_exports__default as default };
