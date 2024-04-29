var __webpack_exports__ = {};
const session = {
  get: (name) => {
    let data = null;
    try {
      data = JSON.parse(sessionStorage.getItem(name));
    } catch (err) {
      data = sessionStorage.getItem(name);
    }
    return data;
  },
  set: (name, data) => {
    if (typeof data === "object") {
      data = JSON.stringify(data);
    }
    sessionStorage.setItem(name, data);
  },
  rm: (name) => {
    sessionStorage.removeItem(name);
  },
  clear: () => {
    sessionStorage.clear();
  }
};
/* harmony default export */ __webpack_exports__.A = (session);

var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
