var __webpack_exports__ = {};
const str2code = (str, common = {}, typeKey = "utils") => {
  const sentence = [];
  str.replace(/\/\*[\s\S]*\*\//, "").split("\n").map((s) => {
    const sens = s.split(");").map((s2) => s2.replace(/(?<!:)\/\/[^\n]*/, "").trim()).filter(Boolean).map((s2) => `${s2})`);
    sentence.push(...sens);
  });
  const functions = sentence.filter((sent) => /^[^\s/]+\([\s\S]*\)$/.test(sent));
  if (functions.length) {
    const last = functions.slice(-1)[0];
    if (last.indexOf("return ") !== 0) {
      str = str.replace(last, `
return ${last}`);
    }
  }
  window[typeKey] = common;
  const exec = Function(`${str}`);
  return exec();
};
/* harmony default export */ __webpack_exports__.A = (str2code);

var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
