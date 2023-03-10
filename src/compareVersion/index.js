var __webpack_exports__ = {};
const compareVersion = (loaclVersion, serviceVersion, key = ".") => {
  const str2arr = (str, key2) => str.split(key2);
  const lvArr = str2arr(loaclVersion, key);
  const svArr = str2arr(serviceVersion, key);
  const arrLen = lvArr.length;
  let needUpdateLevel = 0;
  for (let i = 0; i < arrLen; i++) {
    if (lvArr[i] < svArr[i]) {
      needUpdateLevel = arrLen - i;
      break;
    }
  }
  return needUpdateLevel;
};
/* harmony default export */ __webpack_exports__["default"] = (compareVersion);

__webpack_exports__ = __webpack_exports__["default"];
var __webpack_exports__default = __webpack_exports__["default"];
export { __webpack_exports__default as default };
