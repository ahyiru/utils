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
/* harmony default export */ __webpack_exports__.Z = (classifyArr);

var __webpack_exports__default = __webpack_exports__.Z;
export { __webpack_exports__default as default };
