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
const baseTagReg = "<([^>]+)>([0-9a-zA-Z]*)<\\/\\1>";
const dataTagReg = "<([^>]+)><!\\[CDATA\\[([\\s\\S]*)\\]\\]><\\/\\1>";
const xml2Obj = (data) => {
  const obj = {};
  const types = {};
  const baseTag = data.match(new RegExp(baseTagReg, "g")).map((item) => item.match(new RegExp(baseTagReg))).filter(Boolean);
  const dataTag = data.match(new RegExp(dataTagReg, "g")).map((item) => item.match(new RegExp(dataTagReg))).filter(Boolean);
  baseTag.map((item) => {
    const [, tag, text] = item;
    obj[tag] = text;
    types[tag] = "base";
  });
  dataTag.map((item) => {
    const [, tag, text] = item;
    obj[tag] = (text != null ? text : "").trim();
    types[tag] = "data";
  });
  return { obj, types };
};
const paseText = (tag, type, text) => `<${tag}>${type === "data" ? `<![CDATA[${text}]]>` : text}</${tag}>
`;
const obj2Xml = (obj, types) => {
  let content = "";
  Object.keys(obj).map((tag) => {
    content += paseText(tag, types[tag], obj[tag]);
  });
  return `<xml>
    ${content}
  </xml>`;
};
/* harmony default export */ __webpack_exports__["default"] = ({ xml2Obj, obj2Xml });

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});