var __webpack_exports__ = {};
const compareVersion = (loaclVersion, serviceVersion, key = ".") => {
  const lvArr = loaclVersion.split(key);
  const svArr = serviceVersion.split(key);
  const arrLen = lvArr.length;
  let needUpdateLevel = 0;
  for (let i = 0; i < arrLen; i++) {
    if (Number(lvArr[i]) < Number(svArr[i])) {
      needUpdateLevel = arrLen - i;
      break;
    } else if (Number(lvArr[i]) > Number(svArr[i])) {
      console.log(needUpdateLevel);
      break;
    }
  }
  return needUpdateLevel;
};
/* harmony default export */ __webpack_exports__["default"] = (compareVersion);

__webpack_exports__ = __webpack_exports__["default"];
var __webpack_exports__default = __webpack_exports__["default"];
export { __webpack_exports__default as default };
