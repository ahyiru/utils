var __webpack_exports__ = {};
const classifyArr = (arr = [], key = "name") => {
  const obj = {};
  arr.map((item) => {
    if (!obj[item[key]]) {
      obj[item[key]] = [item];
    } else {
      obj[item[key]].push(item);
    }
  });
  return obj;
};
/* harmony default export */ __webpack_exports__["default"] = (classifyArr);

__webpack_exports__ = __webpack_exports__["default"];
var __webpack_exports__default = __webpack_exports__["default"];
export { __webpack_exports__default as default };
