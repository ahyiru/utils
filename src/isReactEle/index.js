var __webpack_exports__ = {};
const isReactEle = (value) => value?.["$$typeof"] && typeof value["$$typeof"] === "symbol" && ["react.transitional.element", "react.element"].includes(value["$$typeof"]["description"]);
/* harmony default export */ __webpack_exports__.A = (isReactEle);

var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
