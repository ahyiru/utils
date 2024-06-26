/******/ var __webpack_modules__ = ({

/***/ 1243:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6383);
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1407);
/* harmony import */ var _isReactEle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9385);
/* harmony import */ var _isVueEle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2908);
/* harmony import */ var _hasProp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4815);





const clone = (obj) => {
  if (!(0,_isArray__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(obj) && !(0,_isObject__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(obj)) {
    return obj;
  }
  const newObj = (0,_isArray__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(obj) ? [] : {};
  for (const i in obj) {
    if ((0,_hasProp__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(obj, i)) {
      const item = obj[i];
      newObj[i] = (0,_isReactEle__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(item) || (0,_isVueEle__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(item) || typeof item !== "object" ? item : item !== obj ? clone(item) : "cyclic";
    } else {
      Object.setPrototypeOf(newObj, { [i]: obj[i] });
    }
  }
  return newObj;
};
/* harmony default export */ __webpack_exports__.A = (clone);


/***/ }),

/***/ 3436:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

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
/* harmony default export */ __webpack_exports__.A = (emitter);


/***/ }),

/***/ 8842:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const getType = (value) => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
/* harmony default export */ __webpack_exports__.A = (getType);


/***/ }),

/***/ 4815:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const hasProp = (obj, prop) => Object.prototype.hasOwnProperty.call(obj ?? {}, prop);
/* harmony default export */ __webpack_exports__.A = (hasProp);


/***/ }),

/***/ 6383:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8842);

const isArray = (value) => (0,_getType__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(value) === "array";
/* harmony default export */ __webpack_exports__.A = (isArray);


/***/ }),

/***/ 1407:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8842);

const isObject = (value) => (0,_getType__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(value) === "object";
/* harmony default export */ __webpack_exports__.A = (isObject);


/***/ }),

/***/ 9385:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const isReactEle = (value) => value?.["$$typeof"] && typeof value["$$typeof"] === "symbol" && value["$$typeof"]["description"]?.indexOf("react.") === 0;
/* harmony default export */ __webpack_exports__.A = (isReactEle);


/***/ }),

/***/ 2908:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

const isVueEle = (value) => value?.__v_isVNode;
/* harmony default export */ __webpack_exports__.A = (isVueEle);


/***/ }),

/***/ 357:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1407);
/* harmony import */ var _hasProp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4815);


const getOwnProp = (obj) => {
  const ownProp = {};
  for (let k in obj) {
    if (!(0,_hasProp__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(obj, k)) {
      ownProp[k] = obj[k];
    }
  }
  return ownProp;
};
const mergeOwnProp = (base, extend) => {
  if (!(0,_isObject__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(base)) {
    return extend;
  }
  if (!(0,_isObject__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(extend)) {
    return base;
  }
  const ownProp = { ...getOwnProp(base), ...getOwnProp(extend) };
  const newObj = { ...base, ...extend };
  Object.keys(ownProp).map((prop) => {
    Object.setPrototypeOf(newObj, { [prop]: ownProp[prop] });
  });
  return newObj;
};
/* harmony default export */ __webpack_exports__.A = (mergeOwnProp);


/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1407);
/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1243);
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3436);
/* harmony import */ var _mergeOwnProp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(357);




const createStore = (bus = (0,_emitter__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)()) => {
  const { on, emit, off } = bus;
  const store = {};
  const getState = (name) => (0,_clone__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(store[name]);
  const setState = (state, init = false) => {
    if (typeof state === "function") {
      state = state((0,_clone__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(store));
    }
    if (!(0,_isObject__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(state)) {
      throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");
    }
    const newState = (0,_clone__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(state);
    Object.keys(newState).map((key) => {
      const oldItem = store[key];
      const newItem = newState[key];
      const item = (0,_isObject__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(newItem) && (0,_isObject__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(oldItem) ? (0,_mergeOwnProp__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(oldItem, newItem) : newItem;
      !init && emit(key, item);
      store[key] = item;
    });
  };
  const subscribe = (name, cb) => {
    on(name, cb);
    return () => off(name, cb);
  };
  const clean = (name) => {
    if (typeof name === "string") {
      store[name] = void 0;
    } else if (Array.isArray(name)) {
      name.map((n) => store[n] = void 0);
    } else {
      Object.keys(store).map((key) => store[key] = void 0);
    }
  };
  return { getState, setState, subscribe, unsubscribe: off, clean };
};
/* harmony default export */ __webpack_exports__.A = (createStore);

var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
