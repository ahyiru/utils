var __webpack_exports__ = {};
const getCurrentTime = () => typeof performance?.now === "function" ? performance.now() : (/* @__PURE__ */ new Date()).getTime();
const performTask = (callback) => {
  if (typeof setImmediate === "function") {
    return () => setImmediate(callback);
  }
  if (typeof MessageChannel === "function") {
    const { port1, port2 } = new MessageChannel();
    port1.onmessage = callback;
    return () => port2.postMessage(null);
  }
  return () => setTimeout(callback, 0);
};
const queue = () => {
  const hub = [];
  const push = (item) => {
    hub.push(item);
    update(item);
  };
  const peek = () => hub[0];
  const shift = () => hub.shift();
  const updateItem = (item) => item.startTime = getCurrentTime();
  const update = (item) => {
    updateItem(item);
    hub.sort((a, b) => a.startTime - b.startTime);
  };
  return {
    hub,
    push,
    peek,
    shift,
    update
  };
};
const scheduler = (intervalMs = 5) => {
  const { hub, push, peek, shift, update } = queue();
  const flushWork = () => {
    if (workLoop()) {
      schedulePerformWork();
    }
  };
  const schedulePerformWork = performTask(flushWork);
  const shouldYield = (currentTask) => getCurrentTime() - currentTask.startTime > intervalMs;
  const workLoop = () => {
    let currentTask = peek();
    while (currentTask) {
      if (shouldYield(currentTask)) {
        update(currentTask);
        break;
      }
      const { task } = currentTask;
      if (typeof task === "function") {
        currentTask.task = null;
        task();
      } else {
        shift();
      }
      currentTask = peek();
    }
    return currentTask;
  };
  const createTask = (task = () => {
  }) => {
    push({ task });
    if (hub.length < 2) {
      schedulePerformWork();
    }
  };
  return createTask;
};
/* harmony default export */ __webpack_exports__["default"] = (scheduler);

__webpack_exports__ = __webpack_exports__["default"];
var __webpack_exports__default = __webpack_exports__["default"];
export { __webpack_exports__default as default };
