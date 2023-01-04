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
const isEvent = (key) => key.startsWith("on");
const isProperty = (key) => key !== "children" && !isEvent(key);
const isNew = (prev, next) => (key) => prev[key] !== next[key];
const isGone = (prev, next) => (key) => !(key in next);
const filterProps = (props) => {
  const propsList = Object.keys(props);
  return {
    eventProps: propsList.filter(isEvent),
    propertyProps: propsList.filter(isProperty)
  };
};
const updateNode = (dom, prevProps, nextProps) => {
  const { eventProps: prevEvent, propertyProps: prevProperty } = filterProps(prevProps);
  const { eventProps: nextEvent, propertyProps: nextProperty } = filterProps(nextProps);
  prevEvent.filter(isGone(prevProps, nextProps)).map((key) => {
    const eventType = key.toLowerCase().slice(2);
    dom.removeEventListener(eventType, prevProps[key]);
  });
  prevProperty.filter(isGone(prevProps, nextProps)).map((key) => dom[key] = "");
  nextProperty.filter(isNew(prevProps, nextProps)).map((key) => dom[key] = nextProps[key]);
  nextEvent.filter(isNew(prevProps, nextProps)).map((key) => {
    const eventType = key.toLowerCase().slice(2);
    dom.addEventListener(eventType, nextProps[key]);
  });
};
/* harmony default export */ __webpack_exports__["default"] = (updateNode);

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});