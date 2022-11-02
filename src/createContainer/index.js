(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
const createContainer = store => (name, initState) => {
  const {
    getState,
    setState,
    subscribe,
    unsubscribe,
    clean
  } = store;
  if (initState !== undefined) {
    setState({
      [name]: initState
    }, true);
  }
  return {
    getState: () => getState(name),
    setState: (data, init) => setState({
      [name]: data
    }, init),
    subscribe: cb => subscribe(name, cb),
    unsubscribe: () => unsubscribe(name),
    clean: () => clean(name)
  };
};
/* harmony default export */ __webpack_exports__["default"] = (createContainer);
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});