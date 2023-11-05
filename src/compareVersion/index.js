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
/* harmony default export */ __webpack_exports__.Z = (compareVersion);

var __webpack_exports__default = __webpack_exports__.Z;
export { __webpack_exports__default as default };
