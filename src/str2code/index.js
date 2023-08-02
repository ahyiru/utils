var __webpack_exports__ = {};
const str2code = (str, utils = {}) => {
  const sentence = str.replace(/\/\*[\s\S]*\*\//, "").split("\n").map((s) => {
    const sent = s.replace(/(?<!:)\/\/[\s\S]*/, "").trim();
    const hasSem = sent.slice(-1) === ";";
    const func = hasSem ? sent.slice(0, -1) : sent;
    return func.trim();
  }).filter((sent) => /^[^\s/]+\([\s\S]*\)$/.test(sent));
  if (sentence.length) {
    const last = sentence.slice(-1)[0];
    if (last.indexOf("return ") !== 0) {
      str = str.replace(last, `return ${last}`);
    }
  }
  window.utils = utils;
  const exec = Function(`${str}`);
  return exec();
};
/* harmony default export */ __webpack_exports__["default"] = (str2code);

__webpack_exports__ = __webpack_exports__["default"];
var __webpack_exports__default = __webpack_exports__["default"];
export { __webpack_exports__default as default };
