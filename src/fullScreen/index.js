!function(t,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var r=n();for(var e in r)("object"==typeof exports?exports:t)[e]=r[e]}}(this,(function(){return function(){var t={4928:function(t,n){"use strict";n.default=function(t,n){return Object.prototype.hasOwnProperty.call(null!=t?t:{},n)}},6335:function(t,n,r){"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}r.d(n,{default:function(){return o}});r(5093),r(3616);var o=function(){return!["undefined"==typeof window?"undefined":e(window),"undefined"==typeof document?"undefined":e(document)].includes("undefined")}},6664:function(t,n,r){"use strict";var e=r(4928);n.default=function(t){return(0,e.default)(t,"current")}},4933:function(t,n,r){var e=r(5001),o=r(6291),u=r(7073),i=e.TypeError;t.exports=function(t){if(o(t))return t;throw i(u(t)+" is not a function")}},5822:function(t,n,r){var e=r(6802),o=r(2275),u=r(6462),i=e("unscopables"),c=Array.prototype;null==c[i]&&u.f(c,i,{configurable:!0,value:o(null)}),t.exports=function(t){c[i][t]=!0}},4905:function(t,n,r){var e=r(5001),o=r(2366),u=e.String,i=e.TypeError;t.exports=function(t){if(o(t))return t;throw i(u(t)+" is not an object")}},5029:function(t,n,r){var e=r(678),o=r(6971),u=r(4821),i=function(t){return function(n,r,i){var c,f=e(n),a=u(f),s=o(i,a);if(t&&r!=r){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:i(!0),indexOf:i(!1)}},2758:function(t,n,r){var e=r(9918),o=r(936),u=r(2901),i=r(7615),c=r(4821),f=r(7021),a=o([].push),s=function(t){var n=1==t,r=2==t,o=3==t,s=4==t,p=6==t,l=7==t,v=5==t||p;return function(d,y,b,m){for(var g,h,x=i(d),w=u(x),O=e(y,b),S=c(w),j=0,E=m||f,P=n?E(d,S):r||l?E(d,0):void 0;S>j;j++)if((v||j in w)&&(h=O(g=w[j],j,x),t))if(n)P[j]=h;else if(h)switch(t){case 3:return!0;case 5:return g;case 6:return j;case 2:a(P,g)}else switch(t){case 4:return!1;case 7:a(P,g)}return p?-1:o||s?s:P}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterReject:s(7)}},5611:function(t,n,r){var e=r(5061),o=r(6802),u=r(2821),i=o("species");t.exports=function(t){return u>=51||!e((function(){var n=[];return(n.constructor={})[i]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},1892:function(t,n,r){var e=r(5001),o=r(119),u=r(1814),i=r(2366),c=r(6802)("species"),f=e.Array;t.exports=function(t){var n;return o(t)&&(n=t.constructor,(u(n)&&(n===f||o(n.prototype))||i(n)&&null===(n=n[c]))&&(n=void 0)),void 0===n?f:n}},7021:function(t,n,r){var e=r(1892);t.exports=function(t,n){return new(e(t))(0===n?0:n)}},5489:function(t,n,r){var e=r(936),o=e({}.toString),u=e("".slice);t.exports=function(t){return u(o(t),8,-1)}},486:function(t,n,r){var e=r(5001),o=r(8171),u=r(6291),i=r(5489),c=r(6802)("toStringTag"),f=e.Object,a="Arguments"==i(function(){return arguments}());t.exports=o?i:function(t){var n,r,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=f(t),c))?r:a?i(n):"Object"==(e=i(n))&&u(n.callee)?"Arguments":e}},6810:function(t,n,r){var e=r(8382),o=r(2466),u=r(8117),i=r(6462);t.exports=function(t,n,r){for(var c=o(n),f=i.f,a=u.f,s=0;s<c.length;s++){var p=c[s];e(t,p)||r&&e(r,p)||f(t,p,a(n,p))}}},8043:function(t,n,r){var e=r(6802)("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(r){try{return n[e]=!1,"/./"[t](n)}catch(t){}}return!1}},430:function(t,n,r){var e=r(1502),o=r(6462),u=r(6034);t.exports=e?function(t,n,r){return o.f(t,n,u(1,r))}:function(t,n,r){return t[n]=r,t}},6034:function(t){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},1502:function(t,n,r){var e=r(5061);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},6009:function(t,n,r){var e=r(5001),o=r(2366),u=e.document,i=o(u)&&o(u.createElement);t.exports=function(t){return i?u.createElement(t):{}}},9966:function(t,n,r){var e=r(3425);t.exports=e("navigator","userAgent")||""},2821:function(t,n,r){var e,o,u=r(5001),i=r(9966),c=u.process,f=u.Deno,a=c&&c.versions||f&&f.version,s=a&&a.v8;s&&(o=(e=s.split("."))[0]>0&&e[0]<4?1:+(e[0]+e[1])),!o&&i&&(!(e=i.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=i.match(/Chrome\/(\d+)/))&&(o=+e[1]),t.exports=o},2089:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},9638:function(t,n,r){var e=r(5001),o=r(8117).f,u=r(430),i=r(6313),c=r(8506),f=r(6810),a=r(1092);t.exports=function(t,n){var r,s,p,l,v,d=t.target,y=t.global,b=t.stat;if(r=y?e:b?e[d]||c(d,{}):(e[d]||{}).prototype)for(s in n){if(l=n[s],p=t.noTargetGet?(v=o(r,s))&&v.value:r[s],!a(y?s:d+(b?".":"#")+s,t.forced)&&void 0!==p){if(typeof l==typeof p)continue;f(l,p)}(t.sham||p&&p.sham)&&u(l,"sham",!0),i(r,s,l,t)}}},5061:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},9918:function(t,n,r){var e=r(936),o=r(4933),u=e(e.bind);t.exports=function(t,n){return o(t),void 0===n?t:u?u(t,n):function(){return t.apply(n,arguments)}}},3927:function(t){var n=Function.prototype.call;t.exports=n.bind?n.bind(n):function(){return n.apply(n,arguments)}},9873:function(t,n,r){var e=r(1502),o=r(8382),u=Function.prototype,i=e&&Object.getOwnPropertyDescriptor,c=o(u,"name"),f=c&&"something"===function(){}.name,a=c&&(!e||e&&i(u,"name").configurable);t.exports={EXISTS:c,PROPER:f,CONFIGURABLE:a}},936:function(t){var n=Function.prototype,r=n.bind,e=n.call,o=r&&r.bind(e,e);t.exports=r?function(t){return t&&o(t)}:function(t){return t&&function(){return e.apply(t,arguments)}}},3425:function(t,n,r){var e=r(5001),o=r(6291),u=function(t){return o(t)?t:void 0};t.exports=function(t,n){return arguments.length<2?u(e[t]):e[t]&&e[t][n]}},3815:function(t,n,r){var e=r(4933);t.exports=function(t,n){var r=t[n];return null==r?void 0:e(r)}},5001:function(t,n,r){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},8382:function(t,n,r){var e=r(936),o=r(7615),u=e({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,n){return u(o(t),n)}},2499:function(t){t.exports={}},2118:function(t,n,r){var e=r(3425);t.exports=e("document","documentElement")},7788:function(t,n,r){var e=r(1502),o=r(5061),u=r(6009);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(u("div"),"a",{get:function(){return 7}}).a}))},2901:function(t,n,r){var e=r(5001),o=r(936),u=r(5061),i=r(5489),c=e.Object,f=o("".split);t.exports=u((function(){return!c("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?f(t,""):c(t)}:c},685:function(t,n,r){var e=r(936),o=r(6291),u=r(9982),i=e(Function.toString);o(u.inspectSource)||(u.inspectSource=function(t){return i(t)}),t.exports=u.inspectSource},684:function(t,n,r){var e,o,u,i=r(7650),c=r(5001),f=r(936),a=r(2366),s=r(430),p=r(8382),l=r(9982),v=r(1695),d=r(2499),y="Object already initialized",b=c.TypeError,m=c.WeakMap;if(i||l.state){var g=l.state||(l.state=new m),h=f(g.get),x=f(g.has),w=f(g.set);e=function(t,n){if(x(g,t))throw new b(y);return n.facade=t,w(g,t,n),n},o=function(t){return h(g,t)||{}},u=function(t){return x(g,t)}}else{var O=v("state");d[O]=!0,e=function(t,n){if(p(t,O))throw new b(y);return n.facade=t,s(t,O,n),n},o=function(t){return p(t,O)?t[O]:{}},u=function(t){return p(t,O)}}t.exports={set:e,get:o,has:u,enforce:function(t){return u(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!a(n)||(r=o(n)).type!==t)throw b("Incompatible receiver, "+t+" required");return r}}}},119:function(t,n,r){var e=r(5489);t.exports=Array.isArray||function(t){return"Array"==e(t)}},6291:function(t){t.exports=function(t){return"function"==typeof t}},1814:function(t,n,r){var e=r(936),o=r(5061),u=r(6291),i=r(486),c=r(3425),f=r(685),a=function(){},s=[],p=c("Reflect","construct"),l=/^\s*(?:class|function)\b/,v=e(l.exec),d=!l.exec(a),y=function(t){if(!u(t))return!1;try{return p(a,s,t),!0}catch(t){return!1}},b=function(t){if(!u(t))return!1;switch(i(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return d||!!v(l,f(t))}catch(t){return!0}};b.sham=!0,t.exports=!p||o((function(){var t;return y(y.call)||!y(Object)||!y((function(){t=!0}))||t}))?b:y},1092:function(t,n,r){var e=r(5061),o=r(6291),u=/#|\.prototype\./,i=function(t,n){var r=f[c(t)];return r==s||r!=a&&(o(n)?e(n):!!n)},c=i.normalize=function(t){return String(t).replace(u,".").toLowerCase()},f=i.data={},a=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},2366:function(t,n,r){var e=r(6291);t.exports=function(t){return"object"==typeof t?null!==t:e(t)}},13:function(t){t.exports=!1},7955:function(t,n,r){var e=r(2366),o=r(5489),u=r(6802)("match");t.exports=function(t){var n;return e(t)&&(void 0!==(n=t[u])?!!n:"RegExp"==o(t))}},6448:function(t,n,r){var e=r(5001),o=r(3425),u=r(6291),i=r(6282),c=r(7558),f=e.Object;t.exports=c?function(t){return"symbol"==typeof t}:function(t){var n=o("Symbol");return u(n)&&i(n.prototype,f(t))}},4821:function(t,n,r){var e=r(4479);t.exports=function(t){return e(t.length)}},9262:function(t,n,r){var e=r(2821),o=r(5061);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&e&&e<41}))},7650:function(t,n,r){var e=r(5001),o=r(6291),u=r(685),i=e.WeakMap;t.exports=o(i)&&/native code/.test(u(i))},8875:function(t,n,r){var e=r(5001),o=r(7955),u=e.TypeError;t.exports=function(t){if(o(t))throw u("The method doesn't accept regular expressions");return t}},2275:function(t,n,r){var e,o=r(4905),u=r(6191),i=r(2089),c=r(2499),f=r(2118),a=r(6009),s=r(1695),p=s("IE_PROTO"),l=function(){},v=function(t){return"<script>"+t+"</"+"script>"},d=function(t){t.write(v("")),t.close();var n=t.parentWindow.Object;return t=null,n},y=function(){try{e=new ActiveXObject("htmlfile")}catch(t){}var t,n;y="undefined"!=typeof document?document.domain&&e?d(e):((n=a("iframe")).style.display="none",f.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(v("document.F=Object")),t.close(),t.F):d(e);for(var r=i.length;r--;)delete y.prototype[i[r]];return y()};c[p]=!0,t.exports=Object.create||function(t,n){var r;return null!==t?(l.prototype=o(t),r=new l,l.prototype=null,r[p]=t):r=y(),void 0===n?r:u.f(r,n)}},6191:function(t,n,r){var e=r(1502),o=r(5780),u=r(6462),i=r(4905),c=r(678),f=r(9749);n.f=e&&!o?Object.defineProperties:function(t,n){i(t);for(var r,e=c(n),o=f(n),a=o.length,s=0;a>s;)u.f(t,r=o[s++],e[r]);return t}},6462:function(t,n,r){var e=r(5001),o=r(1502),u=r(7788),i=r(5780),c=r(4905),f=r(1030),a=e.TypeError,s=Object.defineProperty,p=Object.getOwnPropertyDescriptor,l="enumerable",v="configurable",d="writable";n.f=o?i?function(t,n,r){if(c(t),n=f(n),c(r),"function"==typeof t&&"prototype"===n&&"value"in r&&d in r&&!r.writable){var e=p(t,n);e&&e.writable&&(t[n]=r.value,r={configurable:v in r?r.configurable:e.configurable,enumerable:l in r?r.enumerable:e.enumerable,writable:!1})}return s(t,n,r)}:s:function(t,n,r){if(c(t),n=f(n),c(r),u)try{return s(t,n,r)}catch(t){}if("get"in r||"set"in r)throw a("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},8117:function(t,n,r){var e=r(1502),o=r(3927),u=r(9265),i=r(6034),c=r(678),f=r(1030),a=r(8382),s=r(7788),p=Object.getOwnPropertyDescriptor;n.f=e?p:function(t,n){if(t=c(t),n=f(n),s)try{return p(t,n)}catch(t){}if(a(t,n))return i(!o(u.f,t,n),t[n])}},9219:function(t,n,r){var e=r(3855),o=r(2089).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},2822:function(t,n){n.f=Object.getOwnPropertySymbols},6282:function(t,n,r){var e=r(936);t.exports=e({}.isPrototypeOf)},3855:function(t,n,r){var e=r(936),o=r(8382),u=r(678),i=r(5029).indexOf,c=r(2499),f=e([].push);t.exports=function(t,n){var r,e=u(t),a=0,s=[];for(r in e)!o(c,r)&&o(e,r)&&f(s,r);for(;n.length>a;)o(e,r=n[a++])&&(~i(s,r)||f(s,r));return s}},9749:function(t,n,r){var e=r(3855),o=r(2089);t.exports=Object.keys||function(t){return e(t,o)}},9265:function(t,n){"use strict";var r={}.propertyIsEnumerable,e=Object.getOwnPropertyDescriptor,o=e&&!r.call({1:2},1);n.f=o?function(t){var n=e(this,t);return!!n&&n.enumerable}:r},5085:function(t,n,r){"use strict";var e=r(8171),o=r(486);t.exports=e?{}.toString:function(){return"[object "+o(this)+"]"}},379:function(t,n,r){var e=r(5001),o=r(3927),u=r(6291),i=r(2366),c=e.TypeError;t.exports=function(t,n){var r,e;if("string"===n&&u(r=t.toString)&&!i(e=o(r,t)))return e;if(u(r=t.valueOf)&&!i(e=o(r,t)))return e;if("string"!==n&&u(r=t.toString)&&!i(e=o(r,t)))return e;throw c("Can't convert object to primitive value")}},2466:function(t,n,r){var e=r(3425),o=r(936),u=r(9219),i=r(2822),c=r(4905),f=o([].concat);t.exports=e("Reflect","ownKeys")||function(t){var n=u.f(c(t)),r=i.f;return r?f(n,r(t)):n}},6313:function(t,n,r){var e=r(5001),o=r(6291),u=r(8382),i=r(430),c=r(8506),f=r(685),a=r(684),s=r(9873).CONFIGURABLE,p=a.get,l=a.enforce,v=String(String).split("String");(t.exports=function(t,n,r,f){var a,p=!!f&&!!f.unsafe,d=!!f&&!!f.enumerable,y=!!f&&!!f.noTargetGet,b=f&&void 0!==f.name?f.name:n;o(r)&&("Symbol("===String(b).slice(0,7)&&(b="["+String(b).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!u(r,"name")||s&&r.name!==b)&&i(r,"name",b),(a=l(r)).source||(a.source=v.join("string"==typeof b?b:""))),t!==e?(p?!y&&t[n]&&(d=!0):delete t[n],d?t[n]=r:i(t,n,r)):d?t[n]=r:c(n,r)})(Function.prototype,"toString",(function(){return o(this)&&p(this).source||f(this)}))},4475:function(t,n,r){var e=r(5001).TypeError;t.exports=function(t){if(null==t)throw e("Can't call method on "+t);return t}},8506:function(t,n,r){var e=r(5001),o=Object.defineProperty;t.exports=function(t,n){try{o(e,t,{value:n,configurable:!0,writable:!0})}catch(r){e[t]=n}return n}},1695:function(t,n,r){var e=r(6809),o=r(1050),u=e("keys");t.exports=function(t){return u[t]||(u[t]=o(t))}},9982:function(t,n,r){var e=r(5001),o=r(8506),u="__core-js_shared__",i=e[u]||o(u,{});t.exports=i},6809:function(t,n,r){var e=r(13),o=r(9982);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.20.2",mode:e?"pure":"global",copyright:"© 2022 Denis Pushkarev (zloirock.ru)"})},6971:function(t,n,r){var e=r(9398),o=Math.max,u=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):u(r,n)}},678:function(t,n,r){var e=r(2901),o=r(4475);t.exports=function(t){return e(o(t))}},9398:function(t){var n=Math.ceil,r=Math.floor;t.exports=function(t){var e=+t;return e!=e||0===e?0:(e>0?r:n)(e)}},4479:function(t,n,r){var e=r(9398),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},7615:function(t,n,r){var e=r(5001),o=r(4475),u=e.Object;t.exports=function(t){return u(o(t))}},6973:function(t,n,r){var e=r(5001),o=r(3927),u=r(2366),i=r(6448),c=r(3815),f=r(379),a=r(6802),s=e.TypeError,p=a("toPrimitive");t.exports=function(t,n){if(!u(t)||i(t))return t;var r,e=c(t,p);if(e){if(void 0===n&&(n="default"),r=o(e,t,n),!u(r)||i(r))return r;throw s("Can't convert object to primitive value")}return void 0===n&&(n="number"),f(t,n)}},1030:function(t,n,r){var e=r(6973),o=r(6448);t.exports=function(t){var n=e(t,"string");return o(n)?n:n+""}},8171:function(t,n,r){var e={};e[r(6802)("toStringTag")]="z",t.exports="[object z]"===String(e)},9284:function(t,n,r){var e=r(5001),o=r(486),u=e.String;t.exports=function(t){if("Symbol"===o(t))throw TypeError("Cannot convert a Symbol value to a string");return u(t)}},7073:function(t,n,r){var e=r(5001).String;t.exports=function(t){try{return e(t)}catch(t){return"Object"}}},1050:function(t,n,r){var e=r(936),o=0,u=Math.random(),i=e(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+i(++o+u,36)}},7558:function(t,n,r){var e=r(9262);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5780:function(t,n,r){var e=r(1502),o=r(5061);t.exports=e&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},6802:function(t,n,r){var e=r(5001),o=r(6809),u=r(8382),i=r(1050),c=r(9262),f=r(7558),a=o("wks"),s=e.Symbol,p=s&&s.for,l=f?s:s&&s.withoutSetter||i;t.exports=function(t){if(!u(a,t)||!c&&"string"!=typeof a[t]){var n="Symbol."+t;c&&u(s,t)?a[t]=s[t]:a[t]=f&&p?p(n):l(n)}return a[t]}},7092:function(t,n,r){"use strict";var e=r(9638),o=r(2758).find,u=r(5822),i="find",c=!0;i in[]&&Array(1).find((function(){c=!1})),e({target:"Array",proto:!0,forced:c},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),u(i)},5093:function(t,n,r){"use strict";var e=r(9638),o=r(5029).includes,u=r(5822);e({target:"Array",proto:!0},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),u("includes")},153:function(t,n,r){"use strict";var e=r(9638),o=r(2758).map;e({target:"Array",proto:!0,forced:!r(5611)("map")},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},2274:function(t,n,r){var e=r(8171),o=r(6313),u=r(5085);e||o(Object.prototype,"toString",u,{unsafe:!0})},3616:function(t,n,r){"use strict";var e=r(9638),o=r(936),u=r(8875),i=r(4475),c=r(9284),f=r(8043),a=o("".indexOf);e({target:"String",proto:!0,forced:!f("includes")},{includes:function(t){return!!~a(c(i(this)),c(u(t)),arguments.length>1?arguments[1]:void 0)}})}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var u=n[e]={exports:{}};return t[e](u,u.exports,r),u.exports}r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,{a:n}),n},r.d=function(t,n){for(var e in n)r.o(n,e)&&!r.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var e={};return function(){"use strict";r.r(e),r.d(e,{fullScreen:function(){return a},watchScreen:function(){return s}});r(7092),r(2274),r(153);var t=r(6335),n=r(6664),o=["","webkit","moz","ms"],u=function(t){return o.map((function(t){return t?"".concat(t,"FullscreenElement"):"fullscreenElement"})).find((function(n){return t[n]}))},i=function(t){return o.map((function(t){return t?"".concat(t,"RequestFullscreen"):"requestFullscreen"})).find((function(n){return t[n]}))},c=function(t){return o.map((function(t){return t?"".concat(t,"ExitFullscreen"):"exitFullscreen"})).find((function(n){return t[n]}))},f=o.map((function(t){return"".concat(t,"fullscreenchange")})),a=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,t.default)()&&document.body;if((0,t.default)()){r=(0,n.default)(r)?r.current:r;var e,o,f,a,s=u(document),p=i(r),l=c(document);if(document[s])null==(e=(o=document)[l])||e.call(o);else null==(f=(a=r)[p])||f.call(a)}},s=function(n){if((0,t.default)()){f.map((function(t){return document.addEventListener(t,n,!1)}));return function(){return f.map((function(t){return document.removeEventListener(t,n,!1)}))}}}}(),e}()}));