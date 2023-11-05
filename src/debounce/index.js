var __webpack_exports__ = {};
const debounce = (func = () => {
}, delay = 60) => {
  let timer = null;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
};
/* harmony default export */ __webpack_exports__.Z = (debounce);

var __webpack_exports__default = __webpack_exports__.Z;
export { __webpack_exports__default as default };
