!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(this,(function(){return function(){"use strict";var e={6434:function(e,t){t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=new Date(e),n=t.getFullYear(),o=t.getDay(),r=t.getMonth()+1,u=t.getDate(),f=t.getHours(),i=t.getMinutes(),a=t.getSeconds();return[n,r,u,f,i,a,o]}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var u=t[o]={exports:{}};return e[o](u,u.exports,n),u.exports}n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return function(){n.r(o);var e=n(6434);o.default=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date;t=(0,e.default)(t);var o=(n=(0,e.default)(n)).y-t.y,r=n.m-t.m,u=n.d-t.d,f=n.h-t.h,i=n.M-t.M,a=new Date(n.y,n.m,0).getDate(),d=function(e,t,n,o,r){return t<0&&(e-=1,t+=n),0===e?t+r+"前":0===t?e+o+"前":e+o+t+r+"前"};return o>0?d(o,r,12,"年","个月"):r>0?d(r,u,a,"个月","天"):u>0?d(u,f,24,"天","小时"):f>0?d(f,i,60,"小时","分钟"):i>0?i+"分钟前":"刚刚"}}(),o}()}));