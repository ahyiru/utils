var __webpack_exports__ = {};
const createContainer = (store) => (name, initState) => {
  const { getState, setState, subscribe, unsubscribe, clean } = store;
  if (initState !== void 0) {
    setState({ [name]: initState }, true);
  }
  return {
    getState: () => getState(name),
    setState: (data, init) => setState({ [name]: data }, init),
    subscribe: (cb) => subscribe(name, cb),
    unsubscribe: () => unsubscribe(name),
    clean: () => clean(name)
  };
};
/* harmony default export */ __webpack_exports__["default"] = (createContainer);

__webpack_exports__ = __webpack_exports__["default"];
var __webpack_exports__default = __webpack_exports__["default"];
export { __webpack_exports__default as default };
