var __webpack_exports__ = {};
const getParams = (fullPath = "") => {
  const [path, query] = fullPath.split("?");
  if (query) {
    const params = {};
    const paramsArr = query.split("&");
    paramsArr.map((param) => {
      const [key, value] = param.split("=");
      params[key] = value;
    });
    return { path, params };
  }
  return { path };
};
/* harmony default export */ __webpack_exports__.Z = (getParams);

var __webpack_exports__default = __webpack_exports__.Z;
export { __webpack_exports__default as default };
