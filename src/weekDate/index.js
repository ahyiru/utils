!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(this,(function(){return function(){"use strict";var e={1328:function(e,t){t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date,n=new Date(t);return n.setDate(n.getDate()+e),n}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var f=t[o]={exports:{}};return e[o](f,f.exports,n),f.exports}n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return function(){n.r(o);var e=n(1328);o.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,n=new Date(t),o=n.getDay();return[(0,e.default)(1-o),(0,e.default)(7-o)]}}(),o}()}));