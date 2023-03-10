var __webpack_exports__ = {};
const arr2obj = (arr = [], name = "name") => {
  const obj = {};
  arr.map(({ [name]: key, value }) => obj[key] = value);
  return obj;
};
/* harmony default export */ __webpack_exports__["default"] = (arr2obj);

__webpack_exports__ = __webpack_exports__["default"];
var __webpack_exports__default = __webpack_exports__["default"];
export { __webpack_exports__default as default };
