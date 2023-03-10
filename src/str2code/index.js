var __webpack_exports__ = {};
const str2code = (str, hasReturn = false) => {
  str = hasReturn ? str : `return ${str};`;
  const exec = Function(str);
  return exec();
};
/* harmony default export */ __webpack_exports__["default"] = (str2code);

__webpack_exports__ = __webpack_exports__["default"];
var __webpack_exports__default = __webpack_exports__["default"];
export { __webpack_exports__default as default };
