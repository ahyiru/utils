var __webpack_exports__ = {};
const promisify = (func = () => {
}) => (...args) => new Promise((resolve, reject) => func(...args, (err, result) => err ? reject(err) : resolve(result)));
/* harmony default export */ __webpack_exports__.Z = (promisify);

var __webpack_exports__default = __webpack_exports__.Z;
export { __webpack_exports__default as default };
