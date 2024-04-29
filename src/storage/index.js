var __webpack_exports__ = {};
const storage = {
  get: (name) => {
    let data = localStorage.getItem(name);
    try {
      data = JSON.parse(data);
    } catch (err) {
    }
    return data;
  },
  set: (name, data) => {
    if (typeof data === "object") {
      data = JSON.stringify(data);
    }
    localStorage.setItem(name, data);
  },
  rm: (name) => {
    localStorage.removeItem(name);
  },
  clear: () => {
    localStorage.clear();
  }
};
/* harmony default export */ __webpack_exports__.A = (storage);

var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
