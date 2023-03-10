var __webpack_exports__ = {};
const validObj = (obj = {}) => {
  const newObj = {};
  Object.keys(obj).map((v) => {
    if (obj[v] != null) {
      newObj[v] = obj[v];
    }
  });
  return newObj;
};
/* harmony default export */ __webpack_exports__["default"] = (validObj);

__webpack_exports__ = __webpack_exports__["default"];
var __webpack_exports__default = __webpack_exports__["default"];
export { __webpack_exports__default as default };
