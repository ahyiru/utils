var __webpack_exports__ = {};
const emitter = () => {
  const hub = {};
  const on = (name, cb) => {
    if (!hub[name]) {
      hub[name] = [];
    }
    if (hub[name].indexOf(cb) === -1) {
      hub[name].push(cb);
    }
  };
  const emit = (name, data) => {
    if (hub[name]) {
      hub[name].map((cb) => cb(data));
    }
  };
  const off = (name, cb = null) => {
    if (hub[name]) {
      if (typeof cb !== "function") {
        return delete hub[name];
      }
      const index = hub[name].indexOf(cb);
      if (index > -1) {
        hub[name].splice(index, 1);
        if (!hub[name].length) {
          delete hub[name];
        }
      }
    }
  };
  return { on, emit, off };
};
/* harmony default export */ __webpack_exports__.Z = (emitter);

var __webpack_exports__default = __webpack_exports__.Z;
export { __webpack_exports__default as default };
