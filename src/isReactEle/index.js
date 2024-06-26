var __webpack_exports__ = {};
const isReactEle = (value) => value?.["$$typeof"] && typeof value["$$typeof"] === "symbol" && value["$$typeof"]["description"]?.indexOf("react.") === 0;
/* harmony default export */ __webpack_exports__.A = (isReactEle);

var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
