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
/* harmony default export */ __webpack_exports__.Z = (createContainer);

var __webpack_exports__default = __webpack_exports__.Z;
export { __webpack_exports__default as default };
