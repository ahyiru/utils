(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("utils", [], factory);
	else if(typeof exports === 'object')
		exports["utils"] = factory();
	else
		root["utils"] = factory();
})(this, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "a2o": function() { return /* reexport */ utils_a2o; },
  "addAtNext": function() { return /* reexport */ utils_addAtNext; },
  "addAtPos": function() { return /* reexport */ utils_addAtPos; },
  "addClass": function() { return /* reexport */ utils_addClass; },
  "addDays": function() { return /* reexport */ utils_addDays; },
  "addHours": function() { return /* reexport */ utils_addHours; },
  "addMonths": function() { return /* reexport */ utils_addMonths; },
  "addNodes": function() { return /* reexport */ utils_addNodes; },
  "addScript": function() { return /* reexport */ utils_addScript; },
  "addStyle": function() { return /* reexport */ utils_addStyle; },
  "addYears": function() { return /* reexport */ utils_addYears; },
  "arr2Tree": function() { return /* reexport */ utils_arr2Tree; },
  "arr2TreeById": function() { return /* reexport */ utils_arr2TreeById; },
  "arr2TreeByPath": function() { return /* reexport */ utils_arr2TreeByPath; },
  "arr2obj": function() { return /* reexport */ utils_arr2obj; },
  "arr2str": function() { return /* reexport */ utils_arr2str; },
  "backTop": function() { return /* reexport */ utils_backTop; },
  "base2Ten": function() { return /* reexport */ utils_base2Ten; },
  "baseConversion": function() { return /* reexport */ utils_baseConversion; },
  "baseFetch": function() { return /* reexport */ utils_baseFetch; },
  "cacheData": function() { return /* reexport */ cacheData; },
  "cancelablePromise": function() { return /* reexport */ utils_cancelablePromise; },
  "changePos": function() { return /* reexport */ utils_changePos; },
  "classifyArr": function() { return /* reexport */ utils_classifyArr; },
  "clone": function() { return /* reexport */ utils_clone; },
  "compareVersion": function() { return /* reexport */ utils_compareVersion; },
  "compose": function() { return /* reexport */ utils_compose; },
  "copyToClipboard": function() { return /* reexport */ utils_copyToClipboard; },
  "createContainer": function() { return /* reexport */ utils_createContainer; },
  "createElement": function() { return /* reexport */ utils_createElement; },
  "createNode": function() { return /* reexport */ utils_createNode; },
  "createStore": function() { return /* reexport */ utils_createStore; },
  "createTextElement": function() { return /* reexport */ utils_createTextElement; },
  "curry": function() { return /* reexport */ utils_curry; },
  "cyclic": function() { return /* reexport */ cyclic; },
  "dash2camel": function() { return /* reexport */ utils_dash2camel; },
  "debounce": function() { return /* reexport */ utils_debounce; },
  "deleteNodes": function() { return /* reexport */ utils_deleteNodes; },
  "deviceType": function() { return /* reexport */ utils_deviceType; },
  "dlfile": function() { return /* reexport */ utils_dlfile; },
  "dropInfo": function() { return /* reexport */ utils_dropInfo; },
  "editNodes": function() { return /* reexport */ utils_editNodes; },
  "emitter": function() { return /* reexport */ utils_emitter; },
  "equal": function() { return /* reexport */ utils_equal; },
  "escapeHTML": function() { return /* reexport */ utils_escapeHTML; },
  "eventBus": function() { return /* reexport */ utils_eventBus; },
  "fetcher": function() { return /* reexport */ utils_fetcher; },
  "filter": function() { return /* reexport */ utils_filter; },
  "filterList": function() { return /* reexport */ utils_filterList; },
  "findChildEle": function() { return /* reexport */ utils_findChildEle; },
  "findMax": function() { return /* reexport */ utils_findMax; },
  "firstUpper": function() { return /* reexport */ utils_firstUpper; },
  "fixFileSizeUnit": function() { return /* reexport */ utils_fixFileSizeUnit; },
  "fixPath": function() { return /* reexport */ utils_fixPath; },
  "fixRoute": function() { return /* reexport */ utils_fixRoute; },
  "fixSize": function() { return /* reexport */ utils_fixSize; },
  "fixTimeUnit": function() { return /* reexport */ utils_fixTimeUnit; },
  "flatten": function() { return /* reexport */ utils_flatten; },
  "formatNum": function() { return /* reexport */ utils_formatNum; },
  "formatPassTime": function() { return /* reexport */ utils_formatPassTime; },
  "formatTime": function() { return /* reexport */ utils_formatTime; },
  "fullScreen": function() { return /* reexport */ utils_fullScreen; },
  "getElementsSize": function() { return /* reexport */ utils_getElementsSize; },
  "getExplore": function() { return /* reexport */ utils_getExplore; },
  "getLeaveTime": function() { return /* reexport */ utils_getLeaveTime; },
  "getMeta": function() { return /* reexport */ utils_getMeta; },
  "getMonthDays": function() { return /* reexport */ utils_getMonthDays; },
  "getOffset": function() { return /* reexport */ utils_getOffset; },
  "getOsInfo": function() { return /* reexport */ utils_getOsInfo; },
  "getParams": function() { return /* reexport */ utils_getParams; },
  "getPosition": function() { return /* reexport */ utils_getPosition; },
  "getRelative": function() { return /* reexport */ utils_getRelative; },
  "getSelected": function() { return /* reexport */ utils_getSelected; },
  "getTextSize": function() { return /* reexport */ utils_getTextSize; },
  "getTime": function() { return /* reexport */ utils_getTime; },
  "getTouchPosition": function() { return /* reexport */ utils_getTouchPosition; },
  "getType": function() { return /* reexport */ utils_getType; },
  "getValue": function() { return /* reexport */ utils_getValue; },
  "getViewportSize": function() { return /* reexport */ utils_getViewportSize; },
  "hasClass": function() { return /* reexport */ utils_hasClass; },
  "hasProp": function() { return /* reexport */ utils_hasProp; },
  "hex2rgba": function() { return /* reexport */ utils_hex2rgba; },
  "imgtocanvas": function() { return /* reexport */ utils_imgtocanvas; },
  "isArray": function() { return /* reexport */ utils_isArray; },
  "isAsync": function() { return /* reexport */ utils_isAsync; },
  "isBrowser": function() { return /* reexport */ utils_isBrowser; },
  "isDate": function() { return /* reexport */ utils_isDate; },
  "isElement": function() { return /* reexport */ utils_isElement; },
  "isError": function() { return /* reexport */ utils_isError; },
  "isFunction": function() { return /* reexport */ utils_isFunction; },
  "isIE": function() { return /* reexport */ utils_isIE; },
  "isObject": function() { return /* reexport */ utils_isObject; },
  "isReactComp": function() { return /* reexport */ utils_isReactComp; },
  "isReactEle": function() { return /* reexport */ utils_isReactEle; },
  "isRef": function() { return /* reexport */ utils_isRef; },
  "isRegExp": function() { return /* reexport */ utils_isRegExp; },
  "isTouch": function() { return /* reexport */ utils_isTouch; },
  "isUrl": function() { return /* reexport */ utils_isUrl; },
  "isValidArr": function() { return /* reexport */ utils_isValidArr; },
  "isValidObj": function() { return /* reexport */ utils_isValidObj; },
  "isVueEle": function() { return /* reexport */ utils_isVueEle; },
  "isWechat": function() { return /* reexport */ utils_isWechat; },
  "json2str": function() { return /* reexport */ utils_json2str; },
  "loadBase64": function() { return /* reexport */ utils_loadBase64; },
  "loadImage": function() { return /* reexport */ utils_loadImage; },
  "loop": function() { return /* reexport */ utils_loop; },
  "matchedStr": function() { return /* reexport */ utils_matchedStr; },
  "memoize": function() { return /* reexport */ utils_memoize; },
  "merge": function() { return /* reexport */ utils_merge; },
  "mergeArr": function() { return /* reexport */ utils_mergeArr; },
  "mergeClass": function() { return /* reexport */ utils_mergeClass; },
  "mergeObj": function() { return /* reexport */ utils_mergeObj; },
  "mergeOwnProp": function() { return /* reexport */ utils_mergeOwnProp; },
  "message": function() { return /* reexport */ utils_message; },
  "monthDate": function() { return /* reexport */ utils_monthDate; },
  "moveNodes": function() { return /* reexport */ utils_moveNodes; },
  "obj2arr": function() { return /* reexport */ utils_obj2arr; },
  "obj2str": function() { return /* reexport */ utils_obj2str; },
  "omit": function() { return /* reexport */ utils_omit; },
  "once": function() { return /* reexport */ utils_once; },
  "padStart": function() { return /* reexport */ utils_padStart; },
  "params2data": function() { return /* reexport */ utils_params2data; },
  "params2str": function() { return /* reexport */ utils_params2str; },
  "parseXml": function() { return /* reexport */ parseXml; },
  "pick": function() { return /* reexport */ utils_pick; },
  "promisify": function() { return /* reexport */ utils_promisify; },
  "randColor": function() { return /* reexport */ utils_randColor; },
  "randItem": function() { return /* reexport */ utils_randItem; },
  "randNum": function() { return /* reexport */ utils_randNum; },
  "randPercent": function() { return /* reexport */ utils_randPercent; },
  "randStr": function() { return /* reexport */ utils_randStr; },
  "randTrue": function() { return /* reexport */ utils_randTrue; },
  "removeClass": function() { return /* reexport */ utils_removeClass; },
  "resize": function() { return /* reexport */ utils_resize; },
  "rgba2hex": function() { return /* reexport */ utils_rgba2hex; },
  "rmUnit": function() { return /* reexport */ utils_rmUnit; },
  "scheduler": function() { return /* reexport */ utils_scheduler; },
  "scrollIsBottom": function() { return /* reexport */ utils_scrollIsBottom; },
  "scrollTo": function() { return /* reexport */ utils_scrollTo; },
  "scrollToAnchor": function() { return /* reexport */ utils_scrollToAnchor; },
  "scrollTop": function() { return /* reexport */ utils_scrollTop; },
  "selectedHandle": function() { return /* reexport */ utils_selectedHandle; },
  "session": function() { return /* reexport */ utils_session; },
  "setMeta": function() { return /* reexport */ utils_setMeta; },
  "setStyle": function() { return /* reexport */ utils_setStyle; },
  "sleep": function() { return /* reexport */ utils_sleep; },
  "sleepSync": function() { return /* reexport */ sleepSync; },
  "sort": function() { return /* reexport */ utils_sort; },
  "sortObj": function() { return /* reexport */ utils_sortObj; },
  "storage": function() { return /* reexport */ utils_storage; },
  "store": function() { return /* reexport */ utils_store; },
  "str2Html": function() { return /* reexport */ utils_str2Html; },
  "str2code": function() { return /* reexport */ utils_str2code; },
  "sysLang": function() { return /* reexport */ utils_sysLang; },
  "template": function() { return /* reexport */ utils_template; },
  "ten2Base": function() { return /* reexport */ utils_ten2Base; },
  "throttle": function() { return /* reexport */ utils_throttle; },
  "timeGap": function() { return /* reexport */ utils_timeGap; },
  "timeInterval": function() { return /* reexport */ utils_timeInterval; },
  "timestamp": function() { return /* reexport */ utils_timestamp; },
  "toggleClass": function() { return /* reexport */ utils_toggleClass; },
  "traverItem": function() { return /* reexport */ utils_traverItem; },
  "traverList": function() { return /* reexport */ utils_traverList; },
  "unescapeHTML": function() { return /* reexport */ utils_unescapeHTML; },
  "unique": function() { return /* reexport */ utils_unique; },
  "updateId": function() { return /* reexport */ utils_updateId; },
  "updateNode": function() { return /* reexport */ utils_updateNode; },
  "updateTreeNodes": function() { return /* reexport */ utils_updateTreeNodes; },
  "uuidv4": function() { return /* reexport */ utils_uuidv4; },
  "validObj": function() { return /* reexport */ utils_validObj; },
  "watchScreen": function() { return /* reexport */ utils_watchScreen; },
  "watermark": function() { return /* reexport */ utils_watermark; },
  "weekDate": function() { return /* reexport */ utils_weekDate; },
  "wrapPromise": function() { return /* reexport */ utils_wrapPromise; }
});

;// CONCATENATED MODULE: ../../huxy/utils/a2o.js
const a2o = (arr, key = "key", value = "value") => {
  const obj = {};
  (arr || []).map((v) => obj[v[key]] = v[value]);
  return obj;
};
/* harmony default export */ var utils_a2o = (a2o);

;// CONCATENATED MODULE: ../../huxy/utils/getType.js
const getType = (value) => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
/* harmony default export */ var utils_getType = (getType);

;// CONCATENATED MODULE: ../../huxy/utils/isArray.js

const isArray = (value) => utils_getType(value) === "array";
/* harmony default export */ var utils_isArray = (isArray);

;// CONCATENATED MODULE: ../../huxy/utils/selectedHandle.js

const selectedHandle = (fn) => (arr, id, idKey = "id", childKey = "children") => {
  if (!utils_isArray(arr)) {
    return null;
  }
  const selected = (data, parentId = "") => {
    for (let i = 0, l = data.length; i < l; i++) {
      const item = data[i];
      if (item[idKey] === id) {
        return fn(data, i, parentId) || data[i];
      }
      if (utils_isArray(item[childKey])) {
        const selChildren = selected(item[childKey], item[idKey]);
        if (selChildren) {
          return selChildren;
        }
      }
    }
  };
  selected(arr);
  return arr;
};
/* harmony default export */ var utils_selectedHandle = (selectedHandle);

;// CONCATENATED MODULE: ../../huxy/utils/addAtNext.js

const addAtNext = (tree, id, nodes, idKey = "id", childKey = "children") => utils_selectedHandle((data, index) => data.splice(index, 0, nodes))(tree, id, idKey, childKey);
/* harmony default export */ var utils_addAtNext = (addAtNext);

;// CONCATENATED MODULE: ../../huxy/utils/addAtPos.js

const addAtPos = (tree, id, nodes, pos, idKey = "id", childKey = "children") => utils_selectedHandle((data, index) => {
  const item = data[index];
  if (item.children) {
    item.children.splice(pos, 0, nodes);
  } else {
    item.children = [nodes];
  }
})(tree, id, idKey, childKey);
/* harmony default export */ var utils_addAtPos = (addAtPos);

;// CONCATENATED MODULE: ../../huxy/utils/isElement.js

const isElement = (value) => utils_getType(value).indexOf("element") > -1;
/* harmony default export */ var utils_isElement = (isElement);

;// CONCATENATED MODULE: ../../huxy/utils/addClass.js

const addClass = (ele, name = "") => {
  if (!utils_isElement(ele)) {
    return;
  }
  const nameArr = name.split(" ").filter(Boolean);
  const targetName = ele.className.split(" ");
  const names = [.../* @__PURE__ */ new Set([...nameArr, ...targetName])];
  ele.className = names.join(" ");
};
/* harmony default export */ var utils_addClass = (addClass);

;// CONCATENATED MODULE: ../../huxy/utils/addDays.js
const addDays = (n, d = /* @__PURE__ */ new Date()) => {
  const newDate = new Date(d);
  newDate.setDate(newDate.getDate() + n);
  return newDate;
};
/* harmony default export */ var utils_addDays = (addDays);

;// CONCATENATED MODULE: ../../huxy/utils/addHours.js
const addHours = (n, d = /* @__PURE__ */ new Date()) => {
  const newDate = new Date(d);
  newDate.setHours(newDate.getHours() + n);
  return newDate;
};
/* harmony default export */ var utils_addHours = (addHours);

;// CONCATENATED MODULE: ../../huxy/utils/addMonths.js
const addMonths = (n, d = /* @__PURE__ */ new Date()) => {
  const newDate = new Date(d);
  newDate.setMonth(newDate.getMonth() + n);
  return newDate;
};
/* harmony default export */ var utils_addMonths = (addMonths);

;// CONCATENATED MODULE: ../../huxy/utils/addNodes.js

const addNodes = (tree, id, nodes, idKey = "id", childKey = "children") => utils_selectedHandle((data, index) => {
  const item = data[index];
  item[childKey] = [...item[childKey] || [], ...nodes];
  return item;
})(tree, id, idKey, childKey);
/* harmony default export */ var utils_addNodes = (addNodes);

;// CONCATENATED MODULE: ../../huxy/utils/isBrowser.js
const isBrowser = () => ![typeof window, typeof document].includes("undefined");
/* harmony default export */ var utils_isBrowser = (isBrowser);

;// CONCATENATED MODULE: ../../huxy/utils/addScript.js

const addScript = (url) => {
  if (!utils_isBrowser()) {
    return;
  }
  return new Promise((resolve, reject) => {
    const loaded = [...document.getElementsByTagName("script")].find((item) => item.src === url);
    if (!loaded) {
      const script = document.createElement("script");
      script.onerror = (event) => reject(new Error(`Failed to load '${url}'`));
      script.onload = resolve;
      script.src = url;
      (document.head || document.getElementsByTagName("head")[0]).appendChild(script);
    } else {
      resolve();
    }
  });
};
/* harmony default export */ var utils_addScript = (addScript);

;// CONCATENATED MODULE: ../../huxy/utils/addStyle.js

const addStyle = (text, hash) => {
  if (!utils_isBrowser()) {
    return;
  }
  if (hash) {
    return new Promise((resolve, reject) => {
      const loaded = [...document.getElementsByTagName("style")].map((item) => item.getAttribute("huxy-css-hash")).filter(Boolean).find((h) => h === hash);
      if (!loaded) {
        const style = document.createElement("style");
        style.onerror = (event) => reject(new Error(`Failed to load '${hash}' style`));
        style.onload = resolve;
        style.innerHTML = text;
        style.setAttribute("huxy-css-hash", hash);
        (document.head || document.getElementsByTagName("head")[0]).appendChild(style);
      } else {
        resolve();
      }
    });
  }
  return new Promise((resolve, reject) => {
    const loaded = [...document.getElementsByTagName("link")].find((item) => item.href === text);
    if (!loaded) {
      const link = document.createElement("link");
      link.onerror = (event) => reject(new Error(`Failed to load '${text}'`));
      link.onload = resolve;
      link.href = text;
      link.rel = "stylesheet";
      (document.head || document.getElementsByTagName("head")[0]).appendChild(link);
    } else {
      resolve();
    }
  });
};
/* harmony default export */ var utils_addStyle = (addStyle);

;// CONCATENATED MODULE: ../../huxy/utils/addYears.js
const addYears = (n, d = /* @__PURE__ */ new Date()) => {
  const newDate = new Date(d);
  newDate.setFullYear(newDate.getFullYear() + n);
  return newDate;
};
/* harmony default export */ var utils_addYears = (addYears);

;// CONCATENATED MODULE: ../../huxy/utils/arr2obj.js
const arr2obj = (arr = [], name = "name") => {
  const obj = {};
  arr.map(({ [name]: key, value }) => obj[key] = value);
  return obj;
};
/* harmony default export */ var utils_arr2obj = (arr2obj);

;// CONCATENATED MODULE: ../../huxy/utils/isObject.js

const isObject = (value) => utils_getType(value) === "object";
/* harmony default export */ var utils_isObject = (isObject);

;// CONCATENATED MODULE: ../../huxy/utils/obj2str.js


const obj2str = (obj = {}) => {
  let objStr = "";
  Object.keys(obj).map((key) => {
    const item = obj[key];
    objStr = objStr ? `${objStr}, ` : objStr;
    if (utils_isObject(item)) {
      objStr += `${key}=${obj2str(item)}`;
    } else if (Array.isArray(item)) {
      objStr += `${key}=${utils_arr2str(item)}`;
    } else {
      objStr += `${key}=${item}`;
    }
  });
  return `{${objStr}}`;
};
/* harmony default export */ var utils_obj2str = (obj2str);

;// CONCATENATED MODULE: ../../huxy/utils/arr2str.js


const arr2str = (arr = []) => {
  let arrStr = "";
  arr.map((item) => {
    arrStr = arrStr ? `${arrStr}, ` : arrStr;
    if (utils_isObject(item)) {
      arrStr += utils_obj2str(item);
    } else if (Array.isArray(item)) {
      arrStr += arr2str(item);
    } else {
      arrStr += `${item}`;
    }
  });
  return `[${arrStr}]`;
};
/* harmony default export */ var utils_arr2str = (arr2str);

;// CONCATENATED MODULE: ../../huxy/utils/arr2Tree.js

const arr2Tree = (fn) => (arr, idKey = "id", childKey = "children", treeRoot = -1) => {
  if (!utils_isArray(arr)) {
    return arr;
  }
  const tmpData = {};
  const keys = arr.map((v) => v[idKey]);
  [...arr].map((v) => {
    var _a;
    const item = { ...v };
    const { [idKey]: id } = item;
    if (id != null) {
      let { parentId } = item;
      if (parentId == null) {
        parentId = (_a = fn == null ? void 0 : fn(item)) != null ? _a : treeRoot;
        item.parentId = parentId;
      }
      if (!tmpData[id]) {
        tmpData[id] = [];
      }
      item[childKey] = tmpData[id];
      if (!tmpData[parentId]) {
        tmpData[parentId] = [];
      }
      if (!tmpData[treeRoot]) {
        tmpData[treeRoot] = [];
      }
      const hasParent = keys.includes(parentId);
      if (hasParent) {
        tmpData[parentId].push(item);
      } else {
        tmpData[treeRoot].push(item);
      }
    }
  });
  return tmpData[treeRoot];
};
/* harmony default export */ var utils_arr2Tree = (arr2Tree);

;// CONCATENATED MODULE: ../../huxy/utils/arr2TreeById.js

const arr2TreeById = (data, idKey = "id", childKey = "children", treeRoot = -1) => utils_arr2Tree((item) => {
  const id = item[idKey];
  const parentArr = id.match(/\S+(?=-\S+)/);
  return (parentArr == null ? void 0 : parentArr[0]) || treeRoot;
})(data, idKey, childKey, treeRoot);
/* harmony default export */ var utils_arr2TreeById = (arr2TreeById);

;// CONCATENATED MODULE: ../../huxy/utils/arr2TreeByPath.js

const arr2TreeByPath = (data, idKey = "path", childKey = "children", treeRoot = null) => utils_arr2Tree((item) => {
  var _a, _b, _c, _d;
  const id = item[idKey];
  const hasSub = id.match(/.*\/[^:/]+\/:[^/]+/);
  if (hasSub) {
    return (_b = (_a = hasSub[0].match(/(.*)\/:+/)) == null ? void 0 : _a[1]) != null ? _b : treeRoot;
  } else {
    return (_d = (_c = id.match(/(.*)\/+/)) == null ? void 0 : _c[1]) != null ? _d : treeRoot;
  }
})(data, idKey, childKey, treeRoot);
/* harmony default export */ var utils_arr2TreeByPath = (arr2TreeByPath);

;// CONCATENATED MODULE: ../../huxy/utils/scrollTop.js

const scrollTop = () => {
  var _a, _b;
  return utils_isBrowser() && ((_b = (_a = window.pageYOffset) != null ? _a : document.documentElement.scrollTop) != null ? _b : document.body.scrollTop);
};
/* harmony default export */ var utils_scrollTop = (scrollTop);

;// CONCATENATED MODULE: ../../huxy/utils/hasProp.js
const hasProp = (obj, prop) => Object.prototype.hasOwnProperty.call(obj != null ? obj : {}, prop);
/* harmony default export */ var utils_hasProp = (hasProp);

;// CONCATENATED MODULE: ../../huxy/utils/isRef.js

const isRef = (ref) => utils_hasProp(ref, "current");
/* harmony default export */ var utils_isRef = (isRef);

;// CONCATENATED MODULE: ../../huxy/utils/scrollTo.js


const scrollTo = (top = 0, ele) => {
  var _a;
  if (!utils_isBrowser()) {
    return;
  }
  ele = utils_isRef(ele) ? ele.current : ele != null ? ele : window;
  (_a = ele.scrollTo) == null ? void 0 : _a.call(ele, { top, behavior: "smooth" });
};
/* harmony default export */ var utils_scrollTo = (scrollTo);

;// CONCATENATED MODULE: ../../huxy/utils/styles/backTop.js
const css = `.huxy-totop-bar {
  --size: 36px;
  --color: #fff;
  --bgColor: #666;
  --hoverBgColor: #40a9ff;
  width: var(--size);
  height: var(--size);
  border-radius: 4px;
  position: fixed;
  right: 20px;
  bottom: 20px;
  background-color: var(--bgColor);
  color: var(--color);
  z-index: 99999;
  cursor: pointer;
  overflow: hidden;
}
.huxy-totop-bar i,
.huxy-totop-bar span {
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: var(--size);
  height: var(--size);
  text-align: center;
}
.huxy-totop-bar i {
  font-size: 22px;
  line-height: var(--size);
  transform: translateY(0);
  transition: transform 0.2s;

  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  vertical-align: middle;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.huxy-totop-bar i:before {
  content: "\\2191";
}
.huxy-totop-bar span {
  font-size: 13px;
  font-weight: 500;
  line-height: 1.1;
  padding: 4px 0;
  background-color: var(--hoverBgColor);
  transform: translateY(100%);
  transition: transform 0.2s;
}
.huxy-totop-bar:hover i {
  transform: translateY(-100%);
}
.huxy-totop-bar:hover span {
  transform: translateY(0);
}`;
/* harmony default export */ var backTop = (css);

;// CONCATENATED MODULE: ../../huxy/utils/backTop.js





const getTotopBar = () => document.getElementsByClassName("huxy-totop-bar")[0];
const createTotopBar = (text) => {
  const hasTotopBar = getTotopBar();
  if (hasTotopBar) {
    return;
  }
  const totopBar = document.createElement("div");
  totopBar.setAttribute("class", "huxy-totop-bar");
  const i = document.createElement("i");
  const span = document.createElement("span");
  span.innerText = text;
  totopBar.appendChild(i);
  totopBar.appendChild(span);
  document.body.appendChild(totopBar);
  totopBar.addEventListener("click", () => utils_scrollTo(), false);
  return totopBar;
};
const removeTotopBar = () => {
  const totopBar = getTotopBar();
  if (totopBar) {
    document.body.removeChild(totopBar);
  }
};
const backTop_backTop = (top = 0, text = "\u8FD4\u56DE\u9876\u90E8") => {
  if (!utils_isBrowser()) {
    return;
  }
  utils_addStyle(backTop, "huxy-backtop-css");
  const scroll = () => {
    const st = utils_scrollTop();
    if (st > top) {
      createTotopBar(text);
    } else {
      removeTotopBar();
    }
  };
  const start = () => {
    document.addEventListener("scroll", scroll, false);
    return () => {
      removeTotopBar();
      document.removeEventListener("scroll", scroll, false);
    };
  };
  return start();
};
/* harmony default export */ var utils_backTop = (backTop_backTop);

;// CONCATENATED MODULE: ../../huxy/utils/base2Ten.js
const base2Ten = (num = 0, base = 2) => parseInt(String(num), base);
/* harmony default export */ var utils_base2Ten = (base2Ten);

;// CONCATENATED MODULE: ../../huxy/utils/ten2Base.js
const ten2Base = (num = 0, base = 2) => Number(num).toString(base);
/* harmony default export */ var utils_ten2Base = (ten2Base);

;// CONCATENATED MODULE: ../../huxy/utils/baseConversion.js


const baseConversion = (num = 0, base = 2, to = 16) => utils_ten2Base(utils_base2Ten(num, base), to);
/* harmony default export */ var utils_baseConversion = (baseConversion);

;// CONCATENATED MODULE: ../../huxy/utils/params2str.js

const params2str = (params) => {
  if (!utils_isObject(params)) {
    return "";
  }
  const arr = [];
  Object.keys(params).map((v, k) => {
    const p = k > 0 ? "&" : "?";
    arr.push(`${p}${v}=${params[v]}`);
  });
  return arr.join("");
};
/* harmony default export */ var utils_params2str = (params2str);

;// CONCATENATED MODULE: ../../huxy/utils/params2data.js

const params2data = (params) => {
  if (!utils_isObject(params)) {
    return {};
  }
  const form = new FormData();
  Object.keys(params).map((key) => {
    if (params[key] != null) {
      form.append(key, params[key]);
    }
  });
  return form;
};
/* harmony default export */ var utils_params2data = (params2data);

;// CONCATENATED MODULE: ../../huxy/utils/isFunction.js

const isFunction = (value) => utils_getType(value) === "function";
/* harmony default export */ var utils_isFunction = (isFunction);

;// CONCATENATED MODULE: ../../huxy/utils/isAsync.js



const isAsync = (value) => utils_getType(value) === "promise" || utils_isObject(value) && utils_isFunction(value.then);
/* harmony default export */ var utils_isAsync = (isAsync);

;// CONCATENATED MODULE: ../../huxy/utils/cancelablePromise.js

const cancelablePromise = (promise, delay = 12e4, msg = "\u8BF7\u6C42\u8D85\u65F6\uFF01") => {
  if (!utils_isAsync(promise)) {
    return {};
  }
  let cancelFn = null;
  let timer = null;
  const promiseFn = new Promise((resolve, reject) => {
    cancelFn = (msg2 = "canceled") => {
      clearTimeout(timer);
      resolve({ canceled: true, errMsg: msg2 });
    };
    if (delay) {
      delay = typeof delay !== "number" ? 12e4 : delay;
      timer = setTimeout(() => cancelFn(msg), delay);
    }
    promise.then((result) => {
      clearTimeout(timer);
      resolve({ result, errMsg: false });
    }).catch((error) => {
      clearTimeout(timer);
      reject(error);
    });
  });
  return {
    promiseFn,
    cancelFn
  };
};
/* harmony default export */ var utils_cancelablePromise = (cancelablePromise);

;// CONCATENATED MODULE: ../../huxy/utils/baseFetch.js



const transform = [
  {
    type: "data",
    headers: { "Content-Type": "application/json" },
    body: (data) => JSON.stringify(data)
  },
  {
    type: "formData",
    // headers:{'Content-Type':'multipart/form-data'},
    body: (data) => utils_params2data(data)
  },
  {
    type: "form",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: (data) => utils_params2str(data).slice(1)
  }
];
const transData = (types, dataType) => {
  const validDataType = ["data", "form", "formData", "params"].includes(dataType);
  const dataKeys = Object.keys(types).filter((item) => types[item]);
  if (dataKeys.length === 1) {
    const dataKey = dataKeys[0];
    const type = validDataType ? dataType : dataKey;
    if (type === "params") {
      return {
        query: types[dataKey]
      };
    }
    return {
      result: types[dataKey],
      type
    };
  } else if (dataKeys.length > 1) {
    const dataKey = dataKeys.filter((v) => v !== "params").slice(-1)[0];
    const type = validDataType ? dataType : dataKey;
    if (type === "params") {
      return {
        query: types["params"] || types[dataKey]
      };
    }
    return {
      query: types["params"],
      result: types[dataKey],
      type
    };
  }
};
const baseFetch = (handler, timeout) => (method) => (url, opt = {}) => {
  const { headers, dataType, data, formData, form, params, ...restOpt } = opt;
  const types = { data, formData, form, params };
  let defaultHeaders;
  const { query, result, type } = transData(types, dataType) || {};
  if (!restOpt.body && result) {
    const item = transform.find((v) => v.type === type);
    defaultHeaders = item.headers;
    restOpt.body = item.body(result);
  }
  if (query) {
    url = `${url}${utils_params2str(query)}`;
  }
  const { promiseFn } = utils_cancelablePromise(
    fetch(url, {
      method,
      mode: "cors",
      credentials: "include",
      cache: "default",
      headers: {
        ...defaultHeaders,
        ...headers
      },
      ...restOpt
    }),
    timeout
  );
  return promiseFn.then(({ result: result2, errMsg }) => {
    if (errMsg) {
      return handler({ status: 408, statusText: errMsg });
    }
    return handler(result2);
  });
};
/* harmony default export */ var utils_baseFetch = (baseFetch);

;// CONCATENATED MODULE: ../../huxy/utils/cyclic.js

const isCyclic = (obj) => {
  const seenObjects = [];
  const detect = (obj2) => {
    if (obj2 && typeof obj2 === "object") {
      if (seenObjects.indexOf(obj2) !== -1) {
        return true;
      }
      seenObjects.push(obj2);
      let hasCyc = false;
      for (let key in obj2) {
        if (utils_hasProp(obj2, key) && detect(obj2[key])) {
          obj2[key] = "cyclic";
          hasCyc = true;
        }
      }
      return hasCyc;
    }
    return false;
  };
  const result = detect(obj);
  return result && obj;
};
/* harmony default export */ var cyclic = (isCyclic);

;// CONCATENATED MODULE: ../../huxy/utils/equal.js



const equal = (a, b) => {
  const typeA = utils_getType(a);
  const typeB = utils_getType(b);
  if (typeA !== typeB) {
    return false;
  }
  if (a == null || b == null) {
    return a === b;
  }
  if (["object", "array"].indexOf(typeA) === -1) {
    return a.toString() === b.toString();
  }
  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }
  if (cyclic(a) && cyclic(b)) {
    return equal(a, b);
  }
  for (let k in b) {
    if (utils_hasProp(a, k) !== utils_hasProp(b, k)) {
      return false;
    }
    if (!equal(a[k], b[k])) {
      return false;
    }
  }
  return true;
};
/* harmony default export */ var utils_equal = (equal);

;// CONCATENATED MODULE: ../../huxy/utils/isReactEle.js
const isReactEle = (value) => (value == null ? void 0 : value["$$typeof"]) && typeof value["$$typeof"] === "symbol" && value["$$typeof"]["description"] === "react.element";
/* harmony default export */ var utils_isReactEle = (isReactEle);

;// CONCATENATED MODULE: ../../huxy/utils/isVueEle.js
const isVueEle = (value) => value == null ? void 0 : value.__v_isVNode;
/* harmony default export */ var utils_isVueEle = (isVueEle);

;// CONCATENATED MODULE: ../../huxy/utils/clone.js





const clone = (obj) => {
  if (!utils_isArray(obj) && !utils_isObject(obj)) {
    return obj;
  }
  const newObj = utils_isArray(obj) ? [] : {};
  for (const i in obj) {
    if (utils_hasProp(obj, i)) {
      const item = obj[i];
      newObj[i] = utils_isReactEle(item) || utils_isVueEle(item) || typeof item !== "object" ? item : item !== obj ? clone(item) : "cyclic";
    } else {
      Object.setPrototypeOf(newObj, { [i]: obj[i] });
    }
  }
  return newObj;
};
/* harmony default export */ var utils_clone = (clone);

;// CONCATENATED MODULE: ../../huxy/utils/cacheData.js


const cache = (len = 100) => {
  const snapshot = [];
  let currentIndex = -1;
  const record = (data) => {
    var _a, _b;
    const length = snapshot.length;
    const tempData = utils_clone(data);
    if (!utils_equal(tempData, (_a = snapshot[length - 1]) == null ? void 0 : _a.data)) {
      snapshot.push({ data: tempData });
      if (snapshot.length > len) {
        snapshot.shift();
      }
      currentIndex = snapshot.length - 1;
      return {
        index: currentIndex,
        length: currentIndex + 1,
        data: snapshot[currentIndex].data
      };
    }
    return {
      index: currentIndex,
      length,
      data: (_b = snapshot[currentIndex]) == null ? void 0 : _b.data
    };
  };
  const cursor = (num = 0) => {
    var _a;
    const length = snapshot.length;
    currentIndex += num;
    currentIndex = currentIndex < 0 ? 0 : currentIndex > length - 1 ? length - 1 : currentIndex;
    return {
      index: currentIndex,
      length,
      data: utils_clone((_a = snapshot[currentIndex]) == null ? void 0 : _a.data)
    };
  };
  const jump = (index) => {
    var _a;
    currentIndex = index;
    return {
      index: currentIndex,
      length: snapshot.length,
      data: utils_clone((_a = snapshot[currentIndex]) == null ? void 0 : _a.data)
    };
  };
  const undo = () => cursor(-1);
  const redo = () => cursor(1);
  const getList = () => utils_clone(snapshot);
  const clean = () => {
    snapshot.length = 0;
    currentIndex = -1;
  };
  return {
    record,
    cursor,
    jump,
    undo,
    redo,
    getList,
    clean
  };
};
/* harmony default export */ var cacheData = (cache);

;// CONCATENATED MODULE: ../../huxy/utils/changePos.js

const changePos = (arr, fromKey, toKey) => {
  if (!utils_isArray(arr)) {
    return arr;
  }
  const fromItem = arr[fromKey];
  const toItem = arr[toKey];
  arr.splice(fromKey, 1, toItem);
  arr.splice(toKey, 1, fromItem);
  return arr;
};
/* harmony default export */ var utils_changePos = (changePos);

;// CONCATENATED MODULE: ../../huxy/utils/classifyArr.js
const classifyArr = (arr = [], key = "name") => {
  const obj = {};
  arr.map((item) => {
    if (!obj[item[key]]) {
      obj[item[key]] = [item];
    } else {
      obj[item[key]].push(item);
    }
  });
  return obj;
};
/* harmony default export */ var utils_classifyArr = (classifyArr);

;// CONCATENATED MODULE: ../../huxy/utils/compareVersion.js
const compareVersion = (loaclVersion, serviceVersion, key = ".") => {
  const str2arr = (str, key2) => str.split(key2);
  const lvArr = str2arr(loaclVersion, key);
  const svArr = str2arr(serviceVersion, key);
  const arrLen = lvArr.length;
  let needUpdateLevel = 0;
  for (let i = 0; i < arrLen; i++) {
    if (lvArr[i] < svArr[i]) {
      needUpdateLevel = arrLen - i;
      break;
    }
  }
  return needUpdateLevel;
};
/* harmony default export */ var utils_compareVersion = (compareVersion);

;// CONCATENATED MODULE: ../../huxy/utils/compose.js
const compose = (...fns) => (...args) => {
  const [...tmpFns] = fns;
  const composed = (...restArgs) => {
    if (tmpFns.length === 0) {
      return restArgs[0];
    }
    return composed(tmpFns.pop()(...restArgs));
  };
  return composed(...args);
};
/* harmony default export */ var utils_compose = (compose);

;// CONCATENATED MODULE: ../../huxy/utils/copyToClipboard.js

const copyToClipboard = (text) => {
  if (!utils_isBrowser()) {
    return;
  }
  const copyText = document.createElement("textarea");
  copyText.value = text;
  copyText.style.position = "fixed";
  copyText.style.left = "-9999px";
  document.body.appendChild(copyText);
  copyText.select();
  copyText.setSelectionRange(0, -1);
  try {
    document.execCommand("copy");
  } catch (err) {
    console.error(err);
  }
  document.body.removeChild(copyText);
};
/* harmony default export */ var utils_copyToClipboard = (copyToClipboard);

;// CONCATENATED MODULE: ../../huxy/utils/createContainer.js
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
/* harmony default export */ var utils_createContainer = (createContainer);

;// CONCATENATED MODULE: ../../huxy/utils/createTextElement.js
const createTextElement = (text) => ({
  type: "TEXT_ELEMENT",
  props: { nodeValue: text }
});
/* harmony default export */ var utils_createTextElement = (createTextElement);

;// CONCATENATED MODULE: ../../huxy/utils/createElement.js

const createElement = (type, props, ...children) => ({
  type,
  props: {
    ...props,
    children: children.map((child) => typeof child === "object" ? child : utils_createTextElement(child))
  }
});
/* harmony default export */ var utils_createElement = (createElement);

;// CONCATENATED MODULE: ../../huxy/utils/updateNode.js
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
/* harmony default export */ var utils_updateNode = (updateNode);

;// CONCATENATED MODULE: ../../huxy/utils/createNode.js


const createNode = (fiber) => {
  if (!utils_isBrowser()) {
    return;
  }
  const dom = fiber.type === "TEXT_ELEMENT" ? document.createTextNode("") : document.createElement(fiber.type);
  utils_updateNode(dom, {}, fiber.props);
  return dom;
};
/* harmony default export */ var utils_createNode = (createNode);

;// CONCATENATED MODULE: ../../huxy/utils/emitter.js
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
/* harmony default export */ var utils_emitter = (emitter);

;// CONCATENATED MODULE: ../../huxy/utils/mergeOwnProp.js


const getOwnProp = (obj) => {
  const ownProp = {};
  for (let k in obj) {
    if (!utils_hasProp(obj, k)) {
      ownProp[k] = obj[k];
    }
  }
  return ownProp;
};
const mergeOwnProp = (base, extend) => {
  if (!utils_isObject(base)) {
    return extend;
  }
  if (!utils_isObject(extend)) {
    return base;
  }
  const ownProp = { ...getOwnProp(base), ...getOwnProp(extend) };
  const newObj = { ...base, ...extend };
  Object.keys(ownProp).map((prop) => {
    Object.setPrototypeOf(newObj, { [prop]: ownProp[prop] });
  });
  return newObj;
};
/* harmony default export */ var utils_mergeOwnProp = (mergeOwnProp);

;// CONCATENATED MODULE: ../../huxy/utils/createStore.js




const createStore = () => {
  const { on, emit, off } = utils_emitter();
  const store = {};
  const getState = (name) => utils_clone(store[name]);
  const setState = (state, init = false) => {
    if (typeof state === "function") {
      state = state(utils_clone(store));
    }
    if (!utils_isObject(state)) {
      throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");
    }
    const newState = utils_clone(state);
    Object.keys(newState).map((key) => {
      const oldItem = store[key];
      const newItem = newState[key];
      const item = utils_isObject(newItem) && utils_isObject(oldItem) ? utils_mergeOwnProp(oldItem, newItem) : newItem;
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
/* harmony default export */ var utils_createStore = (createStore);

;// CONCATENATED MODULE: ../../huxy/utils/curry.js
const curry = (fn = () => {
}, arity = fn.length) => {
  const curried = (...args) => args.length >= arity ? fn(...args) : (...restArgs) => curried(...args, ...restArgs);
  return curried;
};
/* harmony default export */ var utils_curry = (curry);

;// CONCATENATED MODULE: ../../huxy/utils/dash2camel.js
const dash2camel = (s, d = "-") => s.split(d).map((v, k) => k > 0 ? v.replace(/^\S/, (s2) => s2.toUpperCase()) : v.replace(/^\S/, (s2) => s2.toLowerCase())).join("");
/* harmony default export */ var utils_dash2camel = (dash2camel);

;// CONCATENATED MODULE: ../../huxy/utils/debounce.js
const debounce = (func = () => {
}, delay = 60) => {
  let timer = null;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
};
/* harmony default export */ var utils_debounce = (debounce);

;// CONCATENATED MODULE: ../../huxy/utils/deleteNodes.js

const deleteNodes = (tree, id, idKey = "id", childKey = "children") => utils_selectedHandle((data, index) => data.splice(index, 1))(tree, id, idKey, childKey);
/* harmony default export */ var utils_deleteNodes = (deleteNodes);

;// CONCATENATED MODULE: ../../huxy/utils/deviceType.js
const deviceType = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? "Mobile" : "Desktop";
/* harmony default export */ var utils_deviceType = (deviceType);

;// CONCATENATED MODULE: ../../huxy/utils/timestamp.js
const timestamp = () => {
  if (typeof performance !== "undefined" && typeof performance.now === "function") {
    return performance.now();
  }
  return (/* @__PURE__ */ new Date()).getTime();
};
/* harmony default export */ var utils_timestamp = (timestamp);

;// CONCATENATED MODULE: ../../huxy/utils/uuidv4.js

const uuidv4 = () => {
  let timeKey = utils_timestamp();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (timeKey + Math.random() * 16) % 16 | 0;
    timeKey = Math.floor(timeKey / 16);
    return (c === "x" ? r : r & 3 | 8).toString(16);
  });
};
/* harmony default export */ var utils_uuidv4 = (uuidv4);

;// CONCATENATED MODULE: ../../huxy/utils/dlfile.js


const dlfile = (url, name) => {
  if (!utils_isBrowser()) {
    return;
  }
  name = name || utils_uuidv4();
  if (typeof url === "string") {
    fetch(url).then((res) => res.blob()).then((blob) => {
      const dataUrl = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = name;
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      a.parentNode.removeChild(a);
      window.URL.revokeObjectURL(dataUrl);
    });
  } else {
    const blob = new Blob([url]);
    const dataUrl = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = name;
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    a.parentNode.removeChild(a);
    window.URL.revokeObjectURL(dataUrl);
  }
};
/* harmony default export */ var utils_dlfile = (dlfile);

;// CONCATENATED MODULE: ../../huxy/utils/getViewportSize.js


const getViewportSize = (element = null) => {
  var _a, _b;
  if (!utils_isBrowser()) {
    return {
      width: 0,
      height: 0
    };
  }
  if (utils_isElement(element)) {
    return {
      width: element.clientWidth,
      height: element.clientHeight
    };
  }
  return {
    width: (_a = window.innerWidth) != null ? _a : document.documentElement.clientWidth,
    height: (_b = window.innerHeight) != null ? _b : document.documentElement.clientHeight
  };
};
/* harmony default export */ var utils_getViewportSize = (getViewportSize);

;// CONCATENATED MODULE: ../../huxy/utils/getPosition.js


const getPosition = (ele) => {
  var _a;
  if (!utils_isBrowser()) {
    return;
  }
  ele = utils_isRef(ele) ? ele.current : ele != null ? ele : document.body;
  return (_a = ele.getBoundingClientRect) == null ? void 0 : _a.call(ele);
};
/* harmony default export */ var utils_getPosition = (getPosition);

;// CONCATENATED MODULE: ../../huxy/utils/str2Html.js

const str2Html = (str) => {
  if (!utils_isBrowser()) {
    return;
  }
  const templ = document.createElement("div");
  templ.innerHTML = str;
  const ele = templ.children[0];
  return ele;
};
/* harmony default export */ var utils_str2Html = (str2Html);

;// CONCATENATED MODULE: ../../huxy/utils/setStyle.js

const setStyle = (ele, styles = {}, reset = false) => {
  if (!utils_isElement(ele)) {
    return;
  }
  if (reset) {
    let objStr = "";
    Object.keys(styles).map((key) => {
      objStr += `${key}: ${styles[key]};`;
    });
    ele.style = objStr;
    return;
  }
  Object.keys(styles).map((key) => ele.style.setProperty(key, styles[key]));
};
/* harmony default export */ var utils_setStyle = (setStyle);

;// CONCATENATED MODULE: ../../huxy/utils/sleep.js
const sleep = (ms = 350) => new Promise((resolve) => setTimeout(resolve, ms));
const sleepSync = (ms = 100) => {
  const start = Date.now();
  while (Date.now() - start <= ms) {
  }
};
/* harmony default export */ var utils_sleep = (sleep);

;// CONCATENATED MODULE: ../../huxy/utils/getElementsSize.js







const getElementsSize = async (ele, delay = 15) => {
  if (!utils_isBrowser()) {
    return;
  }
  if (typeof ele === "string") {
    ele = utils_str2Html(ele);
  }
  ele = utils_isRef(ele) ? ele.current : ele;
  if (!utils_isElement(ele)) {
    return {};
  }
  const shadow = ele.cloneNode(true);
  utils_setStyle(shadow, { "pointer-events": "none", "z-index": -1, opacity: 0, display: "block", animation: "none" });
  ele.parentNode.appendChild(shadow);
  await utils_sleep(delay);
  const info = utils_getPosition(shadow);
  ele.parentNode.removeChild(shadow);
  return info;
};
/* harmony default export */ var utils_getElementsSize = (getElementsSize);

;// CONCATENATED MODULE: ../../huxy/utils/dropInfo.js





const reg = /(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/;
const classReg = /huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/;
const setDirectionCls = (showEle, direction) => {
  var _a;
  direction = `huxy-drop-arrow-${direction}`;
  const cls = (_a = showEle.getAttribute("class")) != null ? _a : "";
  if (reg.test(cls)) {
    showEle.setAttribute("class", cls.replace(classReg, direction));
  } else {
    showEle.setAttribute("class", `${cls} ${direction}`);
  }
};
const setPosition = async (triggerEle, showEle, type) => {
  const { left, right, top, bottom } = utils_getPosition(triggerEle);
  const { width, height } = utils_getViewportSize();
  const { width: sWidth, height: sHeight } = await utils_getElementsSize(showEle);
  if (right < 0 || bottom < 0 || left > width || top > height) {
    return {};
  }
  if (type === "vertical") {
    const style = {
      left: left + "px",
      top: bottom + 10 + "px",
      right: "auto",
      bottom: "auto"
    };
    let direction = "lt";
    if (left + sWidth > width) {
      style.left = right - sWidth + "px";
      direction = "rt";
    }
    if (bottom + 10 + sHeight > height) {
      style.top = top - 10 - sHeight + "px";
      direction = direction === "lt" ? "lb" : "rb";
    }
    utils_setStyle(showEle, style);
    setDirectionCls(showEle, direction);
  } else {
    const style = {
      left: right + 10 + "px",
      top: top + "px",
      right: "auto",
      bottom: "auto"
    };
    let direction = "tl";
    if (right + 10 + sWidth > width) {
      style.left = left - 10 - sWidth + "px";
      direction = "tr";
    }
    if (top + sHeight > height) {
      style.top = bottom - sHeight + "px";
      direction = direction === "tl" ? "bl" : "br";
    }
    utils_setStyle(showEle, style);
    setDirectionCls(showEle, direction);
  }
};
const dropInfo = (triggerEle, showEle, type = "horizontal") => {
  const debounced = utils_debounce(setPosition);
  const listener = () => debounced(triggerEle, showEle, type);
  window.addEventListener("scroll", listener, false);
  window.addEventListener("resize", listener, false);
  const destroyFn = () => {
    window.removeEventListener("scroll", listener);
    window.removeEventListener("resize", listener);
    utils_setStyle(showEle, { left: "", top: "", right: "", bottom: "" });
  };
  setPosition(triggerEle, showEle, type);
  return destroyFn;
};
/* harmony default export */ var utils_dropInfo = (dropInfo);

;// CONCATENATED MODULE: ../../huxy/utils/editNodes.js

const editNodes = (tree, id, nodes, idKey = "id", childKey = "children") => utils_selectedHandle((data, index) => data[index] = { ...data[index], ...nodes })(tree, id, idKey, childKey);
/* harmony default export */ var utils_editNodes = (editNodes);

;// CONCATENATED MODULE: ../../huxy/utils/escapeHTML.js
const escapeHTML = (str) => str.replace(/[&<>'"]/g, (tag) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[tag] || tag);
/* harmony default export */ var utils_escapeHTML = (escapeHTML);

;// CONCATENATED MODULE: ../../huxy/utils/eventBus.js

const events = utils_emitter();
const eventBus = (name) => {
  const { on, emit, off } = events;
  return {
    on: (cb) => on(name, cb),
    emit: (data) => emit(name, data),
    off: (cb) => off(name, cb)
  };
};
/* harmony default export */ var utils_eventBus = (eventBus);

;// CONCATENATED MODULE: ../../huxy/utils/fetcher.js

const TIMEOUT = 120 * 1e3;
const resHandler = (response) => response.json().then((result) => result);
const fetcher = (handler = resHandler, timeout = TIMEOUT) => (method = "get") => utils_baseFetch(handler)((method || "get").toUpperCase());
/* harmony default export */ var utils_fetcher = (fetcher);

;// CONCATENATED MODULE: ../../huxy/utils/isValidArr.js

const isValidArr = (value) => utils_isArray(value) && !!value.length;
/* harmony default export */ var utils_isValidArr = (isValidArr);

;// CONCATENATED MODULE: ../../huxy/utils/filter.js

const filter = (list, keyword, fields = [], exact = false, str2Dom = null) => {
  if (!utils_isValidArr(list)) {
    return [];
  }
  if (!keyword) {
    return list;
  }
  fields = typeof fields === "string" ? fields.split(",") : fields;
  return list.filter((v) => {
    fields = fields.length > 0 ? fields : Object.keys(v);
    const matched = fields.filter((field) => {
      const fieldValue = v[field];
      if (fieldValue == null) {
        return false;
      }
      if (exact) {
        return fieldValue === keyword;
      }
      const reg = new RegExp(keyword, "gi");
      const match = fieldValue.toString().match(reg);
      if (match && str2Dom) {
        v[field] = str2Dom(fieldValue.toString().replace(reg, `<span style="background-color:yellow">${match[0]}</span>`), { display: "inline-block" });
      }
      return match;
    });
    return matched.length;
  });
};
/* harmony default export */ var utils_filter = (filter);

;// CONCATENATED MODULE: ../../huxy/utils/unique.js


const unique = (arr, key = "id") => {
  if (!utils_isValidArr(arr)) {
    return arr;
  }
  const newArr = [];
  const keys = [];
  arr.map((item) => {
    const idKey = utils_isObject(item) ? item[key] : item;
    if (!keys.includes(idKey)) {
      keys.push(idKey);
      newArr.push(item);
    }
  });
  return newArr;
};
/* harmony default export */ var utils_unique = (unique);

;// CONCATENATED MODULE: ../../huxy/utils/filterList.js




const getMatched = (fn) => (arr, childKey = "children") => {
  if (!Array.isArray(arr)) {
    return arr;
  }
  const list = utils_clone(arr);
  const traver = (data) => {
    const matchedData = [];
    data.map((v) => {
      if (utils_isValidArr(v[childKey])) {
        const matchChildren = traver(v[childKey]) || [];
        v[childKey] = matchChildren;
        if (matchChildren.length > 0) {
          matchedData.push(v);
        }
      }
    });
    return fn(data, matchedData);
  };
  return traver(list);
};
const filterList = (data, keyword, str2Dom, fields = "name", idKey = "id", childKey = "children", exact = false) => getMatched((list, matchedItem) => utils_unique([...utils_filter(list, keyword, fields, exact, str2Dom), ...matchedItem], idKey))(data, childKey);
/* harmony default export */ var utils_filterList = (filterList);

;// CONCATENATED MODULE: ../../huxy/utils/findChildEle.js
const findChildEle = (target, cname) => {
  var _a;
  const childrenEle = [];
  const children = (_a = target.children) != null ? _a : [];
  for (let i = 0, l = children.length; i < l; i++) {
    const childEle = children[i];
    if (childEle.className.indexOf(cname) > -1) {
      childrenEle.push(childEle);
    }
  }
  if (childrenEle.length === 0) {
    return null;
  }
  if (childrenEle.length === 1) {
    return childrenEle[0];
  }
  return childrenEle;
};
/* harmony default export */ var utils_findChildEle = (findChildEle);

;// CONCATENATED MODULE: ../../huxy/utils/findMax.js
const findMax = (str = "") => {
  var _a;
  return (_a = str.match(/\d+/g)) == null ? void 0 : _a.sort((a, b) => b - a)[0];
};
/* harmony default export */ var utils_findMax = (findMax);

;// CONCATENATED MODULE: ../../huxy/utils/firstUpper.js
const firstUpper = (str = "") => str.replace(/^\S/, (s) => s.toUpperCase());
/* harmony default export */ var utils_firstUpper = (firstUpper);

;// CONCATENATED MODULE: ../../huxy/utils/fixFileSizeUnit.js
const fixFileSizeUnit = (size, base = 1024) => {
  const kb = size / base;
  if (kb < base) {
    return `${kb.toFixed(3) - 0} KB`;
  }
  const mb = kb / base;
  if (mb < base) {
    return `${mb.toFixed(3) - 0} M`;
  }
  const gb = mb / base;
  return `${gb.toFixed(3) - 0} G`;
};
/* harmony default export */ var utils_fixFileSizeUnit = (fixFileSizeUnit);

;// CONCATENATED MODULE: ../../huxy/utils/fixPath.js
const fixPath = (path = "") => (path != null ? path : "").replaceAll("//", "/");
/* harmony default export */ var utils_fixPath = (fixPath);

;// CONCATENATED MODULE: ../../huxy/utils/fixRoute.js
const fixRoute = (path) => path ? path.charAt(path.length - 1) === "/" ? path.slice(0, -1) : path : "";
/* harmony default export */ var utils_fixRoute = (fixRoute);

;// CONCATENATED MODULE: ../../huxy/utils/fixSize.js
const fixSize = (img, ratio = 1) => {
  const imgRatio = img.width / img.height / ratio;
  const percent = imgRatio > 1 ? "100%" : `${(imgRatio * 100).toFixed(4)}%`;
  return img.width = percent;
};
/* harmony default export */ var utils_fixSize = (fixSize);

;// CONCATENATED MODULE: ../../huxy/utils/fixTimeUnit.js
const fixTimeUnit = (s = 0, unit = ["s", "m", "h", "d"]) => {
  s = ~~s;
  if (s < 60) {
    return `${s}${unit[0]}`;
  }
  const m = ~~(s / 60);
  if (m < 60) {
    return `${m}${unit[1]}${s % 60}${unit[0]}`;
  }
  const h = ~~(s / 3600);
  const ls = s % 3600;
  const hm = ~~(ls / 60);
  if (h < 24) {
    return `${h}${unit[2]}${hm}${unit[1]}${ls % 60}${unit[0]}`;
  }
  return `${(h / 24).toFixed(2)}${unit[3]}`;
};
/* harmony default export */ var utils_fixTimeUnit = (fixTimeUnit);

;// CONCATENATED MODULE: ../../huxy/utils/traverItem.js

const traverItem = (fn) => (arr, childKey = "children") => {
  if (!utils_isArray(arr)) {
    return arr;
  }
  const traver = (data, parent = []) => {
    data.map((item, k) => {
      const hasChild = utils_isArray(item[childKey]);
      item = fn(item, parent, k, hasChild) || item;
      if (hasChild) {
        const { [childKey]: children, ...rest } = item;
        traver(children, [...parent, { ...rest, "@@index": k }]);
      }
    });
  };
  traver(arr);
  return arr;
};
/* harmony default export */ var utils_traverItem = (traverItem);

;// CONCATENATED MODULE: ../../huxy/utils/flatten.js

const flatten = (data, childKey = "children") => {
  const newArr = [];
  utils_traverItem((item) => {
    const { [childKey]: children, ...rest } = item;
    newArr.push(rest);
  })(data, childKey);
  return newArr;
};
/* harmony default export */ var utils_flatten = (flatten);

;// CONCATENATED MODULE: ../../huxy/utils/formatNum.js
const formatNum = (num) => typeof num === "number" ? num.toLocaleString("en-US") : "";
/* harmony default export */ var utils_formatNum = (formatNum);

;// CONCATENATED MODULE: ../../huxy/utils/getTime.js
const addZero = (n) => n < 10 ? "0" + n : n;
const getTime = (day = /* @__PURE__ */ new Date()) => {
  const date = new Date(day);
  const y = date.getFullYear();
  const w = date.getDay();
  const m = addZero(date.getMonth() + 1);
  const d = addZero(date.getDate());
  const h = addZero(date.getHours());
  const M = addZero(date.getMinutes());
  const s = addZero(date.getSeconds());
  return [y, m, d, h, M, s, w];
};
/* harmony default export */ var utils_getTime = (getTime);

;// CONCATENATED MODULE: ../../huxy/utils/formatPassTime.js

const formatPassTime = (start, end = /* @__PURE__ */ new Date()) => {
  start = utils_getTime(start);
  end = utils_getTime(end);
  const dfYear = end.y - start.y;
  const dfMonth = end.m - start.m;
  const dfDay = end.d - start.d;
  const dfHour = end.h - start.h;
  const dfMinute = end.M - start.M;
  const prevMonthCount = new Date(end.y, end.m, 0).getDate();
  const getStr = (bTime, sTime, hex, bStr, sStr) => {
    const str = "\u524D";
    if (sTime < 0) {
      bTime -= 1;
      sTime += hex;
    }
    if (bTime === 0) {
      return sTime + sStr + str;
    }
    if (sTime === 0) {
      return bTime + bStr + str;
    }
    return bTime + bStr + sTime + sStr + str;
  };
  if (dfYear > 0) {
    return getStr(dfYear, dfMonth, 12, "\u5E74", "\u4E2A\u6708");
  } else {
    if (dfMonth > 0) {
      return getStr(dfMonth, dfDay, prevMonthCount, "\u4E2A\u6708", "\u5929");
    } else {
      if (dfDay > 0) {
        return getStr(dfDay, dfHour, 24, "\u5929", "\u5C0F\u65F6");
      } else {
        if (dfHour > 0) {
          return getStr(dfHour, dfMinute, 60, "\u5C0F\u65F6", "\u5206\u949F");
        } else {
          if (dfMinute > 0) {
            return dfMinute + "\u5206\u949F\u524D";
          } else {
            return "\u521A\u521A";
          }
        }
      }
    }
  }
};
/* harmony default export */ var utils_formatPassTime = (formatPassTime);

;// CONCATENATED MODULE: ../../huxy/utils/formatTime.js

const defWeek = ["\u661F\u671F\u65E5", "\u661F\u671F\u4E00", "\u661F\u671F\u4E8C", "\u661F\u671F\u4E09", "\u661F\u671F\u56DB", "\u661F\u671F\u4E94", "\u661F\u671F\u516D"];
const formatDelimiter = (str, target, s = "-") => str.replace(new RegExp(s, "g"), target);
const formatTime = (date = /* @__PURE__ */ new Date(), delimiter = ["-", "-", " ", ":", ":", ""], week = defWeek) => {
  const times = utils_getTime(date);
  let s = "";
  delimiter.map((d, i) => {
    var _a;
    return s += (i === 6 ? week[times[i]] : (_a = times[i]) != null ? _a : "") + d;
  });
  return s;
};
/* harmony default export */ var utils_formatTime = (formatTime);

;// CONCATENATED MODULE: ../../huxy/utils/_/prefixBrowser.js
const prefix = ["", "webkit", "moz", "ms"];
const fullscreenElement = (ele) => prefix.map((v) => v ? `${v}FullscreenElement` : "fullscreenElement").find((v) => ele[v]);
const requestFullscreen = (ele) => prefix.map((v) => v ? `${v}RequestFullscreen` : "requestFullscreen").find((v) => ele[v]);
const exitFullscreen = (ele) => prefix.map((v) => v ? `${v}ExitFullscreen` : "exitFullscreen").find((v) => ele[v]);
const fullscreenchange = prefix.map((v) => `${v}fullscreenchange`);

;// CONCATENATED MODULE: ../../huxy/utils/fullScreen.js



const fullScreen = (ele) => {
  var _a, _b;
  if (!utils_isBrowser()) {
    return;
  }
  ele = utils_isRef(ele) ? ele.current : ele != null ? ele : document.body;
  const fse = fullscreenElement(document);
  const rfs = requestFullscreen(ele);
  const efs = exitFullscreen(document);
  if (!document[fse]) {
    (_a = ele[rfs]) == null ? void 0 : _a.call(ele);
  } else {
    (_b = document[efs]) == null ? void 0 : _b.call(document);
  }
};
/* harmony default export */ var utils_fullScreen = (fullScreen);

;// CONCATENATED MODULE: ../../huxy/utils/getExplore.js

const exploreList = [
  {
    name: "IE11",
    reg: /rv:([\d.]+)\) like gecko/
  },
  {
    name: "IE",
    reg: /msie ([\d.]+)/
  },
  {
    name: "Edge",
    reg: /edge\/([\d.]+)/
  },
  {
    name: "Firefox",
    reg: /firefox\/([\d.]+)/
  },
  {
    name: "Opera",
    reg: /(?:opera|opr).([\d.]+)/
  },
  {
    name: "Chrome",
    reg: /chrome\/([\d.]+)/
  },
  {
    name: "Safari",
    reg: /version\/([\d.]+).*safari/
  },
  {
    name: "WeiXin",
    reg: /micromessenger\/([\d.]+)/
  },
  {
    name: "TIM",
    reg: /tim\/([\d.]+)/
  },
  {
    name: "QQ",
    reg: /qq\/([\d.]+)/
  },
  {
    name: "IOS Chrome",
    reg: /crios\/([\d.]+)/
  }
];
const getExplore = () => {
  var _a;
  if (!utils_isBrowser()) {
    return;
  }
  const ua = window.navigator.userAgent.toLowerCase();
  const expItem = (_a = exploreList.find((item) => ua.match(item.reg))) != null ? _a : {};
  return {
    type: expItem.name,
    version: ua.match(expItem.reg)[1]
  };
};
/* harmony default export */ var utils_getExplore = (getExplore);

;// CONCATENATED MODULE: ../../huxy/utils/getLeaveTime.js
const MIN_VAL = 60 * 1e3;
const HOUR_VAL = 60 * MIN_VAL;
const DAY_VAL = 24 * HOUR_VAL;
const getLeaveTime = (start, end = /* @__PURE__ */ new Date()) => {
  let time = new Date(start) - end;
  const d = ~~(time / DAY_VAL);
  time -= DAY_VAL * d;
  const h = ~~(time / HOUR_VAL);
  time -= HOUR_VAL * h;
  const M = ~~(time / MIN_VAL);
  time -= MIN_VAL * M;
  const s = ~~(time / 1e3);
  return `${d}\u5929${h}\u5C0F\u65F6${M}\u5206${s}\u79D2`;
};
/* harmony default export */ var utils_getLeaveTime = (getLeaveTime);

;// CONCATENATED MODULE: ../../huxy/utils/getMeta.js

const defaultHeadMeta = [
  {
    "http-equiv": "X-UA-Compatible",
    content: "IE=edge,chrome=1"
  },
  {
    "http-equiv": "Cache-Control",
    content: "no-siteapp"
  },
  {
    name: "renderer",
    content: "webkit|ie-comp|ie-stand"
  },
  {
    name: "referrer",
    content: "no-referrer"
  },
  {
    name: "description",
    content: "web design"
  },
  {
    name: "keywords",
    content: "react,hooks,huxy,function"
  },
  {
    name: "viewport",
    content: "viewport-fit=cover"
    // content:'width=device-width,initial-scale=1.0,maximum-scale=1,minimum-scale=1,user-scalable=no,shrink-to-fit=no',
  },
  {
    name: "robots",
    content: "index,follow"
  },
  {
    name: "apple-mobile-web-app-title",
    content: "web"
  },
  {
    name: "apple-mobile-web-app-capable",
    content: "yes"
  },
  {
    name: "apple-mobile-web-app-status-bar-style",
    content: "black"
  },
  {
    name: "format-detection",
    content: "telphone=no,email=no"
  },
  {
    name: "x5-fullscreen",
    content: "true"
  },
  {
    name: "theme-color",
    content: "#33363b"
  },
  {
    name: "google",
    value: "notranslate"
  }
];
const mergeMetaData = (metaData) => {
  if (!Array.isArray(metaData)) {
    return defaultHeadMeta;
  }
  const newMeta = [...defaultHeadMeta];
  metaData.map((item) => {
    const index = newMeta.findIndex((v) => v.name === item.name || v["http-equiv"] === item["http-equiv"]);
    if (index > -1) {
      newMeta[index] = item;
    } else {
      newMeta.push(item);
    }
  });
  return newMeta;
};
const getMeta = (metaData) => {
  const metaList = mergeMetaData(metaData);
  const metaStr = metaList.map((item) => {
    const props = Object.keys(item).map((key) => `${key}=${item[key]}`).join(" ");
    return `<meta ${props} />`;
  });
  return utils_str2Html(metaStr.join(""));
};
/* harmony default export */ var utils_getMeta = (getMeta);

;// CONCATENATED MODULE: ../../huxy/utils/getMonthDays.js

const getMonthDays = (day = /* @__PURE__ */ new Date()) => {
  const date = utils_getTime(day);
  return new Date(date[0], date[1], 0).getDate();
};
/* harmony default export */ var utils_getMonthDays = (getMonthDays);

;// CONCATENATED MODULE: ../../huxy/utils/getOffset.js


const getOffset = (element = null) => {
  var _a, _b, _c, _d;
  if (!utils_isBrowser()) {
    return {
      left: 0,
      top: 0
    };
  }
  if (utils_isElement(element)) {
    return {
      left: element.scrollLeft,
      top: element.scrollTop
    };
  }
  return {
    left: (_b = (_a = window.pageXOffset) != null ? _a : document.documentElement.scrollLeft) != null ? _b : document.body.scrollLeft,
    top: (_d = (_c = window.pageYOffset) != null ? _c : document.documentElement.scrollTop) != null ? _d : document.body.scrollTop
  };
};
/* harmony default export */ var utils_getOffset = (getOffset);

;// CONCATENATED MODULE: ../../huxy/utils/getOsInfo.js

const osList = [
  {
    name: "ios",
    reg: /\(([^;]+);(.+)os (.+) like mac os x/,
    format: (matched) => {
      var _a;
      return {
        type: "ios",
        model: matched[1],
        version: (_a = matched[3]) == null ? void 0 : _a.replaceAll("_", ".")
      };
    }
  },
  {
    name: "macOS",
    reg: /mac os x ([\w_.]+)/,
    format: (matched) => ({
      type: "macOS",
      version: matched[1] ? matched[1].replaceAll("_", ".") : void 0
    })
  },
  {
    name: "WindowsPhone",
    reg: /windows phone( os)? ([\d.]+)/,
    format: (matched) => ({
      type: "WindowsPhone",
      version: matched[2]
    })
  },
  {
    name: "Windows",
    reg: /windows nt ([\d.]+)/,
    format: (matched) => ({
      type: "Windows",
      version: matched[1]
    })
  },
  {
    name: "Android",
    reg: /android( [\d.]+)?/,
    format: (matched) => ({
      type: "Android",
      version: matched[1] ? matched[1].replaceAll(" ", "") : void 0
    })
  },
  {
    name: "Ubuntu",
    reg: /ubuntu/,
    format: (matched) => ({
      type: "Ubuntu"
    })
  },
  {
    name: "Linux",
    reg: /linux/,
    format: (matched) => ({
      type: "Linux"
    })
  }
];
const getOsInfo = () => {
  if (!utils_isBrowser()) {
    return;
  }
  const ua = window.navigator.userAgent.toLowerCase();
  const osItem = osList.find((item) => ua.match(item.reg));
  return osItem ? osItem.format(ua.match(osItem.reg)) : {};
};
/* harmony default export */ var utils_getOsInfo = (getOsInfo);

;// CONCATENATED MODULE: ../../huxy/utils/getParams.js
const getParams = (fullPath = "") => {
  const [path, query] = fullPath.split("?");
  if (query) {
    const params = {};
    const paramsArr = query.split("&");
    paramsArr.map((param) => {
      const [key, value] = param.split("=");
      params[key] = value;
    });
    return { path, params };
  }
  return { path };
};
/* harmony default export */ var utils_getParams = (getParams);

;// CONCATENATED MODULE: ../../huxy/utils/isTouch.js

const isTouch = () => utils_isBrowser() && (window.ontouchstart || navigator.maxTouchPoints);
/* harmony default export */ var utils_isTouch = (isTouch);

;// CONCATENATED MODULE: ../../huxy/utils/getTouchPosition.js


const getTouchPosition = (evt) => {
  var _a, _b, _c, _d;
  const { left, top } = utils_getOffset();
  return {
    touchX: utils_isTouch() ? (_b = (_a = evt == null ? void 0 : evt.touches) == null ? void 0 : _a[0]) == null ? void 0 : _b.pageX : (evt == null ? void 0 : evt.pageX) || (evt == null ? void 0 : evt.clientX) + left,
    touchY: utils_isTouch() ? (_d = (_c = evt == null ? void 0 : evt.touches) == null ? void 0 : _c[0]) == null ? void 0 : _d.pageY : (evt == null ? void 0 : evt.pageY) || (evt == null ? void 0 : evt.clientY) + top
  };
};
/* harmony default export */ var utils_getTouchPosition = (getTouchPosition);

;// CONCATENATED MODULE: ../../huxy/utils/getRelative.js

const getRelative = (evt, ref) => {
  var _a, _b;
  const { touchX, touchY } = utils_getTouchPosition(evt);
  const { x, y } = (_b = (_a = ref == null ? void 0 : ref.getBoundingClientRect) == null ? void 0 : _a.call(ref)) != null ? _b : {};
  return {
    x: touchX - (x != null ? x : 0),
    y: touchY - (y != null ? y : 0)
  };
};
/* harmony default export */ var utils_getRelative = (getRelative);

;// CONCATENATED MODULE: ../../huxy/utils/getSelected.js

const getSelected = (arr, id, idKey = "id", childKey = "children") => {
  if (!utils_isArray(arr)) {
    return null;
  }
  const selected = (data) => {
    for (let i = 0, l = data.length; i < l; i++) {
      const item = data[i];
      if (item[idKey] === id) {
        return [item];
      }
      if (utils_isArray(item[childKey])) {
        const selChildren = selected(item[childKey]);
        if (selChildren) {
          return [item].concat(selChildren);
        }
      }
    }
  };
  return selected(arr);
};
/* harmony default export */ var utils_getSelected = (getSelected);

;// CONCATENATED MODULE: ../../huxy/utils/getTextSize.js



const getTextSize = (text, styles, ele) => {
  if (!utils_isBrowser()) {
    return;
  }
  ele = utils_isRef(ele) ? ele.current : ele != null ? ele : document.body;
  const span = document.createElement("span");
  span.setAttribute("style", `pointer-events: none; z-index: -1; opacity: 0;`);
  styles && utils_setStyle(span, styles);
  span.innerText = (text != null ? text : "").replace(/[\r\n]/g, "");
  ele.appendChild(span);
  const rect = span.getBoundingClientRect();
  ele.removeChild(span);
  return rect;
};
/* harmony default export */ var utils_getTextSize = (getTextSize);

;// CONCATENATED MODULE: ../../huxy/utils/getValue.js
const getValue = (object = {}, keys) => {
  keys = keyArr(keys);
  const checkValue = (obj, key) => {
    if (!(key == null ? void 0 : key[0])) {
      return obj;
    }
    if (typeof obj[key[0]] === "object") {
      return checkValue(obj[key[0]], key.slice(1));
    }
    if (key.length > 1) {
      return void 0;
    }
    return obj[key[0]];
  };
  return checkValue(object, keys);
};
const keyArr = (keys = "") => {
  var _a;
  return (_a = keys.replace(/\[['"]?(.*?)['"]?\]/g, ".$1")) == null ? void 0 : _a.split(".");
};
/* harmony default export */ var utils_getValue = (getValue);

;// CONCATENATED MODULE: ../../huxy/utils/hasClass.js

const hasClass = (ele, name = "") => utils_isElement(ele) && ele.className.match(new RegExp("(\\s|^)" + name + "(\\s|$)"));
/* harmony default export */ var utils_hasClass = (hasClass);

;// CONCATENATED MODULE: ../../huxy/utils/hex2rgba.js
const hex2rgba = (hex = "") => {
  if (hex[0] !== "#") {
    return hex;
  }
  hex = hex.replace("#", "");
  const len = hex.length;
  if (len === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  } else if (len === 4) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`;
  }
  const r = parseInt(hex.slice(0, 2), 16) || 0;
  const g = parseInt(hex.slice(2, 4), 16) || 0;
  const b = parseInt(hex.slice(4, 6), 16) || 0;
  if (hex.length === 6) {
    return `rgb(${r},${g},${b})`;
  }
  const a = parseInt(hex.slice(6, 8), 16) / 255 || 1;
  return `rgba(${r},${g},${b},${a})`;
};
/* harmony default export */ var utils_hex2rgba = (hex2rgba);

;// CONCATENATED MODULE: ../../huxy/utils/imgtocanvas.js

const imgtocanvas = (img) => {
  if (!utils_isBrowser()) {
    return;
  }
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const { width, height } = img;
  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(img, 0, 0, width, height);
  return canvas;
};
/* harmony default export */ var utils_imgtocanvas = (imgtocanvas);

;// CONCATENATED MODULE: ../../huxy/utils/isDate.js
const isDate = (...val) => !Number.isNaN(new Date(...val).valueOf());
/* harmony default export */ var utils_isDate = (isDate);

;// CONCATENATED MODULE: ../../huxy/utils/isError.js

const isError = (value) => utils_getType(value) === "error";
/* harmony default export */ var utils_isError = (isError);

;// CONCATENATED MODULE: ../../huxy/utils/isIE.js
const isIE = () => navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/Edge/);
/* harmony default export */ var utils_isIE = (isIE);

;// CONCATENATED MODULE: ../../huxy/utils/isReactComp.js
const isReactComp = (value) => (value == null ? void 0 : value["$$typeof"]) && typeof value["$$typeof"] === "symbol" && value["$$typeof"]["description"] === "react.forward_ref";
/* harmony default export */ var utils_isReactComp = (isReactComp);

;// CONCATENATED MODULE: ../../huxy/utils/isRegExp.js

const isRegExp = (value) => utils_getType(value) === "regexp";
/* harmony default export */ var utils_isRegExp = (isRegExp);

;// CONCATENATED MODULE: ../../huxy/utils/isUrl.js
const isUrl = (url) => /^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(url);
/* harmony default export */ var utils_isUrl = (isUrl);

;// CONCATENATED MODULE: ../../huxy/utils/isValidObj.js

const isValidObj = (value) => utils_isObject(value) && Object.keys(value).length;
/* harmony default export */ var utils_isValidObj = (isValidObj);

;// CONCATENATED MODULE: ../../huxy/utils/isWechat.js

const isWechat = () => {
  if (!utils_isBrowser()) {
    return;
  }
  return navigator.userAgent.toLowerCase().indexOf("micromessenger") > -1;
};
/* harmony default export */ var utils_isWechat = (isWechat);

;// CONCATENATED MODULE: ../../huxy/utils/json2str.js



const json2str = (obj) => utils_isObject(obj) ? utils_obj2str(obj) : Array.isArray(obj) ? utils_arr2str(obj) : obj;
/* harmony default export */ var utils_json2str = (json2str);

;// CONCATENATED MODULE: ../../huxy/utils/loadBase64.js
const loadBase64 = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.addEventListener("load", () => resolve(reader.result));
  reader.addEventListener("error", (error) => reject(error));
});
/* harmony default export */ var utils_loadBase64 = (loadBase64);

;// CONCATENATED MODULE: ../../huxy/utils/loadImage.js
const loadImage = (url) => new Promise((resolve, reject) => {
  const img = new Image();
  img.src = url;
  if (img.complete) {
    resolve(img);
  } else {
    img.addEventListener("load", () => resolve(img));
    img.addEventListener("error", (error) => reject(error));
  }
});
/* harmony default export */ var utils_loadImage = (loadImage);

;// CONCATENATED MODULE: ../../huxy/utils/loop.js

const loop = async (fn, handle, delay = 2e3) => {
  while (!(handle == null ? void 0 : handle(fn == null ? void 0 : fn()))) {
    await utils_sleep(delay);
  }
};
/* harmony default export */ var utils_loop = (loop);

;// CONCATENATED MODULE: ../../huxy/utils/matchedStr.js
const matchedStr = (str, c = ["{", "}"]) => {
  var _a, _b;
  return (_b = (_a = str == null ? void 0 : str.trim) == null ? void 0 : _a.call(str).match(new RegExp(`^${c[0]}([\\s\\S]*)${c[1]}$`))) == null ? void 0 : _b[1];
};
/* harmony default export */ var utils_matchedStr = (matchedStr);

;// CONCATENATED MODULE: ../../huxy/utils/memoize.js
const memoize = (fn = () => {
}, len = 100) => {
  let cache = [];
  return (...args) => {
    const key = JSON.stringify(args);
    const cached = cache.find((v) => v.key === key);
    if (!cached) {
      const result = fn(...args);
      cache.push({ key, result });
      if (cache.length > len) {
        cache.shift();
      }
      return result;
    }
    return cached.result;
  };
};
/* harmony default export */ var utils_memoize = (memoize);

;// CONCATENATED MODULE: ../../huxy/utils/mergeArr.js



const mergeArr = (base, extend, key = "id") => {
  if (!utils_isArray(base)) {
    return extend;
  }
  if (!utils_isArray(extend)) {
    return base;
  }
  const sameItems = {};
  [...base, ...extend].map((item) => {
    var _a;
    const idKey = utils_isObject(item) ? (_a = item[key]) != null ? _a : JSON.stringify(item) : item;
    if (sameItems[idKey] === void 0) {
      sameItems[idKey] = item;
    } else {
      const oldItem = sameItems[idKey];
      if (utils_isObject(oldItem) && utils_isObject(item)) {
        sameItems[idKey] = utils_mergeObj(oldItem, item);
      } else if (utils_isArray(oldItem) && utils_isArray(item)) {
        sameItems[idKey] = mergeArr(oldItem, item);
      } else {
        sameItems[idKey] = item;
      }
    }
  });
  return Object.keys(sameItems).map((v) => sameItems[v]);
};
/* harmony default export */ var utils_mergeArr = (mergeArr);

;// CONCATENATED MODULE: ../../huxy/utils/mergeObj.js




const mergeObj = (base, extend) => {
  if (!utils_isObject(base)) {
    return extend;
  }
  if (!utils_isObject(extend)) {
    return base;
  }
  for (let k in extend) {
    if (utils_hasProp(extend, k)) {
      if (utils_isObject(base[k]) && utils_isObject(extend[k])) {
        base[k] = mergeObj(base[k], extend[k]);
      } else if (utils_isArray(base[k]) && utils_isArray(extend[k])) {
        base[k] = utils_mergeArr(base[k], extend[k]);
      } else {
        base[k] = extend[k];
      }
    } else {
      Object.setPrototypeOf(base, { [k]: extend[k] });
    }
  }
  return base;
};
/* harmony default export */ var utils_mergeObj = (mergeObj);

;// CONCATENATED MODULE: ../../huxy/utils/merge.js



const merge = (target, ...extend) => {
  const handleMerge = utils_isArray(target) ? utils_mergeArr : utils_mergeObj;
  extend.map((item) => target = handleMerge(target, item));
  return target;
};
/* harmony default export */ var utils_merge = (merge);

;// CONCATENATED MODULE: ../../huxy/utils/mergeClass.js
const mergeClass = (def, input) => {
  var _a, _b;
  const defArr = (_a = def == null ? void 0 : def.split(" ")) != null ? _a : [];
  const inputArr = (_b = input == null ? void 0 : input.split(" ")) != null ? _b : [];
  return [.../* @__PURE__ */ new Set([...defArr, ...inputArr])].filter(Boolean).join(" ");
};
/* harmony default export */ var utils_mergeClass = (mergeClass);

;// CONCATENATED MODULE: ../../huxy/utils/removeClass.js

const removeClass = (ele, name = "") => {
  if (!utils_isElement(ele)) {
    return;
  }
  const nameArr = name.split(" ").filter(Boolean);
  const targetName = ele.className.split(" ");
  const names = targetName.filter((v) => !nameArr.includes(v));
  ele.className = names.join(" ");
};
/* harmony default export */ var utils_removeClass = (removeClass);

;// CONCATENATED MODULE: ../../huxy/utils/styles/message.js
const message_css = `@keyframes huxy-message-animate-in {
  0% {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
@keyframes huxy-message-animate-out {
  0% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  100% {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
}
.huxy-message {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
  z-index: 999999;
  pointer-events: none;
}

.message-content {
  position: relative;
  display: flex;
  align-items: center;
  background: #ffffff;
  color: #333333;
  border-radius: 4px;
  min-width: 100px;
  max-width: 280px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  margin-top: 24px;
  padding: 8px 12px;
  opacity: 0;
  transform: translate3d(0, -100%, 0);
  animation: huxy-message-animate-out 0.25s forwards;
}

.message-content.open {
  animation: huxy-message-animate-in 0.25s forwards;
}

.message-content i {
  /* font-size: 1.8rem; */
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  /* line-height: 1; */
  vertical-align: middle;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-right: 8px;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  text-align: center;
  color: #fff;
  flex-shrink: 0;
}
.message-content.success i {
  background: #73d13d;
}
.message-content.success i:before {
  content: "\\2713";
}
.message-content.error i {
  background: #ff4d4f;
}
.message-content.error i:before {
  content: "\\00D7";
}
.message-content.warn i {
  background: #ffa940;
}
.message-content.warn i:before {
  content: "\\267A";
}
.message-content.info i {
  background: #40a9ff;
}
.message-content.info i:before {
  content: "\\2690";
}`;
/* harmony default export */ var message = (message_css);

;// CONCATENATED MODULE: ../../huxy/utils/message.js




const getContainer = () => document.getElementsByClassName("huxy-message")[0];
const message_createContainer = () => {
  const div = document.createElement("div");
  const child = document.createElement("div");
  child.setAttribute("class", "huxy-message");
  div.appendChild(child);
  document.body.appendChild(div);
  return child;
};
const createItem = (content, status) => {
  const mes = document.createElement("div");
  mes.setAttribute("class", `message-content open ${status}`);
  const text = document.createElement("span");
  text.innerText = content;
  const icon = document.createElement("i");
  mes.appendChild(icon);
  mes.appendChild(text);
  return mes;
};
const startMes = (content, delay = 3250, onClose, status) => {
  if (!utils_isBrowser()) {
    return;
  }
  utils_addStyle(message, "huxy-message-css");
  let container = getContainer();
  if (!container) {
    container = message_createContainer();
  }
  const mesItem = createItem(content, status);
  container.appendChild(mesItem);
  setTimeout(() => {
    container.removeChild(mesItem);
    onClose == null ? void 0 : onClose();
  }, delay);
  setTimeout(() => {
    utils_removeClass(mesItem, "open");
  }, delay - 250);
};
const message_message = {
  success: (content, delay, onClose) => startMes(content, delay, onClose, "success"),
  warn: (content, delay, onClose) => startMes(content, delay, onClose, "warn"),
  warning: (content, delay, onClose) => startMes(content, delay, onClose, "warn"),
  error: (content, delay, onClose) => startMes(content, delay, onClose, "error"),
  info: (content, delay, onClose) => startMes(content, delay, onClose, "info")
};
/* harmony default export */ var utils_message = (message_message);

;// CONCATENATED MODULE: ../../huxy/utils/monthDate.js


const monthDate = (d = /* @__PURE__ */ new Date()) => {
  const newDate = new Date(d);
  const date = newDate.getDate();
  return [utils_addDays(1 - date), utils_addDays(utils_getMonthDays(newDate) - date)];
};
/* harmony default export */ var utils_monthDate = (monthDate);

;// CONCATENATED MODULE: ../../huxy/utils/moveNodes.js


const moveNodes = (tree, fromId, toId, pos, idKey = "id", childKey = "children") => {
  let fromItem = {};
  utils_selectedHandle((data, index) => {
    fromItem = data[index];
    data.splice(index, 1);
    return true;
  })(tree, fromId, idKey, childKey);
  utils_addAtPos(tree, toId, fromItem, pos, idKey, childKey);
  return tree;
};
/* harmony default export */ var utils_moveNodes = (moveNodes);

;// CONCATENATED MODULE: ../../huxy/utils/obj2arr.js
const obj2arr = (obj = {}, name = "name") => Object.keys(obj).map((key) => ({ [name]: key, value: obj[key] }));
/* harmony default export */ var utils_obj2arr = (obj2arr);

;// CONCATENATED MODULE: ../../huxy/utils/omit.js
const omit = (obj = {}, keys = []) => {
  keys = typeof keys === "string" ? keys.split(",") : keys;
  const newObj = {};
  const newQuery = [];
  Object.keys(obj).map((key) => !keys.includes(key) ? newObj[key] = obj[key] : newQuery.push({ key, value: obj[key] }));
  return { newObj, newQuery };
};
/* harmony default export */ var utils_omit = (omit);

;// CONCATENATED MODULE: ../../huxy/utils/once.js
const once = (fn = () => {
}) => {
  let called = false;
  return (...args) => {
    if (!called) {
      called = true;
      return fn(...args);
    }
  };
};
/* harmony default export */ var utils_once = (once);

;// CONCATENATED MODULE: ../../huxy/utils/padStart.js
const padStart = (str = "", n = 0, pad = "0") => {
  const len = str.length;
  if (len >= n) {
    return str;
  }
  const fill = Array(n - len + 1).join(pad);
  return `${fill}${str}`;
};
/* harmony default export */ var utils_padStart = (padStart);

;// CONCATENATED MODULE: ../../huxy/utils/parseXml.js
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
/* harmony default export */ var parseXml = ({ xml2Obj, obj2Xml });

;// CONCATENATED MODULE: ../../huxy/utils/pick.js

const pick = (obj, arrKeys) => {
  if (obj == null || typeof obj !== "object") {
    return {};
  }
  arrKeys = typeof arrKeys === "string" ? arrKeys.split(",") : arrKeys;
  if (!utils_isArray(arrKeys)) {
    return obj;
  }
  const newObj = {};
  arrKeys.map((key) => {
    if (key in obj) {
      newObj[key] = obj[key];
    }
  });
  return newObj;
};
/* harmony default export */ var utils_pick = (pick);

;// CONCATENATED MODULE: ../../huxy/utils/promisify.js
const promisify = (func = () => {
}) => (...args) => new Promise((resolve, reject) => func(...args, (err, result) => err ? reject(err) : resolve(result)));
/* harmony default export */ var utils_promisify = (promisify);

;// CONCATENATED MODULE: ../../huxy/utils/randColor.js

const randColor = () => "#" + utils_padStart((~~(Math.random() * (1 << 24))).toString(16), 6);
/* harmony default export */ var utils_randColor = (randColor);

;// CONCATENATED MODULE: ../../huxy/utils/randNum.js
const randNum = (a = 0, b = 0, int = true) => {
  a < b && (a = [b, b = a][0]);
  if (int) {
    return ~~(Math.random() * (a - b + 1)) + b;
  }
  return Math.random() * (a - b) + b;
};
/* harmony default export */ var utils_randNum = (randNum);

;// CONCATENATED MODULE: ../../huxy/utils/randItem.js

const randItem = (list = []) => list[utils_randNum(list.length - 1)];
/* harmony default export */ var utils_randItem = (randItem);

;// CONCATENATED MODULE: ../../huxy/utils/randPercent.js

const randPercent = (n, total = 100) => {
  const pers = [];
  [...new Array(n)].map((v, i) => {
    if (i === n - 1) {
      pers[i] = total;
    } else {
      pers[i] = utils_randNum(1, total - 1);
      total -= pers[i];
    }
  });
  return pers;
};
/* harmony default export */ var utils_randPercent = (randPercent);

;// CONCATENATED MODULE: ../../huxy/utils/randStr.js
const randStr = (n = 8, base = 36) => Math.random().toString(36).slice(2, n + 2);
/* harmony default export */ var utils_randStr = (randStr);

;// CONCATENATED MODULE: ../../huxy/utils/randTrue.js
const randTrue = () => Math.random() > 0.5;
/* harmony default export */ var utils_randTrue = (randTrue);

;// CONCATENATED MODULE: ../../huxy/utils/resize.js




const createObj = (element, resizeListener) => {
  if (getComputedStyle(element).position === "static") {
    element.style.position = "relative";
  }
  const obj = document.createElement("object");
  obj.setAttribute("style", "display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0");
  obj.setAttribute("class", "resize-sensor");
  obj.onload = () => {
    obj.contentDocument.defaultView.addEventListener("resize", resizeListener, false);
    resizeListener();
  };
  obj.type = "text/html";
  element.appendChild(obj);
  obj.data = "about:blank";
  return obj;
};
const resize = (element, delay = 60) => {
  if (!utils_isBrowser()) {
    return;
  }
  element = utils_isRef(element) ? element.current : element != null ? element : document.body;
  let domObj = utils_findChildEle(element, "resize-sensor");
  let listeners = [];
  const resizeListener = utils_debounce(() => listeners.map((listener) => listener(element)), delay);
  const bind = (cb) => {
    if (!utils_findChildEle(element, "resize-sensor")) {
      domObj = createObj(element, resizeListener);
    }
    if (listeners.indexOf(cb) === -1) {
      listeners.push(cb);
    }
  };
  const unbind = (cb) => {
    const idx = listeners.indexOf(cb);
    if (idx !== -1) {
      listeners.splice(idx, 1);
    }
    if (listeners.length === 0 && domObj) {
      destroy();
    }
  };
  const destroy = () => {
    if (domObj && domObj.parentNode) {
      if (domObj.contentDocument) {
        domObj.contentDocument.defaultView.removeEventListener("resize", resizeListener, false);
      }
      domObj.parentNode.removeChild(domObj);
      domObj = void 0;
      listeners = [];
    }
  };
  return {
    element,
    bind,
    unbind,
    destroy
  };
};
/* harmony default export */ var utils_resize = (resize);

;// CONCATENATED MODULE: ../../huxy/utils/rgba2hex.js
const trans2hex = (r = 0, g = 0, b = 0, a = 1) => {
  r -= 0;
  g -= 0;
  b -= 0;
  a -= 0;
  const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  if (a === 1) {
    return hex;
  }
  a = Math.round(a * 255).toString(16);
  a = a.length === 1 ? `0${a}` : a.length === 3 ? "ff" : a;
  return `${hex}${a}`;
};
const rgba2hex = (r = 0, g = 0, b = 0, a = 1) => {
  var _a;
  if (r.includes("rgb")) {
    const matched = r.match(/rgba?\((.+)\)/);
    if (matched) {
      const rgba = (_a = matched[1]) == null ? void 0 : _a.split(",").map((v) => v.trim());
      return trans2hex(...rgba);
    }
    return r;
  }
  return trans2hex(r, g, b, a);
};
/* harmony default export */ var utils_rgba2hex = (rgba2hex);

;// CONCATENATED MODULE: ../../huxy/utils/rmUnit.js
const rmUnit = (value, unit = "px") => `${value}`.replace(unit, "") - 0;
/* harmony default export */ var utils_rmUnit = (rmUnit);

;// CONCATENATED MODULE: ../../huxy/utils/scheduler.js
const getCurrentTime = () => typeof (performance == null ? void 0 : performance.now) === "function" ? performance.now() : (/* @__PURE__ */ new Date()).getTime();
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
/* harmony default export */ var utils_scheduler = (scheduler);

;// CONCATENATED MODULE: ../../huxy/utils/scrollIsBottom.js



const scrollIsBottom = () => utils_isBrowser() && document.documentElement.scrollHeight - utils_scrollTop() === utils_getViewportSize().height;
/* harmony default export */ var utils_scrollIsBottom = (scrollIsBottom);

;// CONCATENATED MODULE: ../../huxy/utils/scrollToAnchor.js


const scrollToAnchor = (ele) => {
  var _a;
  if (!utils_isBrowser()) {
    return;
  }
  ele = utils_isRef(ele) ? ele.current : ele != null ? ele : window;
  (_a = ele.scrollIntoView) == null ? void 0 : _a.call(ele, { behavior: "smooth", block: "center" });
};
/* harmony default export */ var utils_scrollToAnchor = (scrollToAnchor);

;// CONCATENATED MODULE: ../../huxy/utils/session.js
const session = {
  get: (name) => {
    let data = null;
    try {
      data = JSON.parse(sessionStorage.getItem(name));
    } catch (err) {
      data = sessionStorage.getItem(name);
    }
    return data;
  },
  set: (name, data) => {
    if (typeof data === "object") {
      data = JSON.stringify(data);
    }
    sessionStorage.setItem(name, data);
  },
  rm: (name) => {
    sessionStorage.removeItem(name);
  },
  clear: () => {
    sessionStorage.clear();
  }
};
/* harmony default export */ var utils_session = (session);

;// CONCATENATED MODULE: ../../huxy/utils/setMeta.js


const setMeta = (metaData) => {
  const metas = utils_getMeta(metaData);
  utils_isBrowser() && document.head.appendChild(...metas);
};
/* harmony default export */ var utils_setMeta = (setMeta);

;// CONCATENATED MODULE: ../../huxy/utils/sort.js
const sort = (arr, key = null, desc = false) => {
  return [...arr || []].sort((x, y) => {
    const a = key ? x[key] : x;
    const b = key ? y[key] : y;
    if (!isNaN(Number(a)) && !isNaN(Number(a))) {
      return desc ? b - a : a - b;
    }
    if (typeof a === "string" && typeof b === "string") {
      return desc ? b.localeCompare(a) : a.localeCompare(b);
    }
    if (typeof a === "string" && typeof b === "number") {
      return desc ? -1 : 1;
    }
    if (typeof a === "number" || typeof a === "string") {
      return desc ? 1 : -1;
    }
    return desc ? -1 : 1;
  });
};
/* harmony default export */ var utils_sort = (sort);

;// CONCATENATED MODULE: ../../huxy/utils/sortObj.js

const sortObj = (obj) => {
  if (!utils_isObject(obj)) {
    return {};
  }
  const newObj = {};
  Object.keys(obj).sort().map((key) => {
    newObj[key] = obj[key];
  });
  return newObj;
};
/* harmony default export */ var utils_sortObj = (sortObj);

;// CONCATENATED MODULE: ../../huxy/utils/storage.js
const storage = {
  get: (name) => {
    let data = localStorage.getItem(name);
    try {
      data = JSON.parse(data);
    } catch (err) {
    }
    return data;
  },
  set: (name, data) => {
    if (typeof data === "object") {
      data = JSON.stringify(data);
    }
    localStorage.setItem(name, data);
  },
  rm: (name) => {
    localStorage.removeItem(name);
  },
  clear: () => {
    localStorage.clear();
  }
};
/* harmony default export */ var utils_storage = (storage);

;// CONCATENATED MODULE: ../../huxy/utils/store.js


const container = utils_createStore();
const store = utils_createContainer(container);
/* harmony default export */ var utils_store = (store);

;// CONCATENATED MODULE: ../../huxy/utils/str2code.js
const str2code = (str, hasReturn = false) => {
  str = hasReturn ? str : `return ${str};`;
  const exec = Function(str);
  return exec();
};
/* harmony default export */ var utils_str2code = (str2code);

;// CONCATENATED MODULE: ../../huxy/utils/sysLang.js

const sysLang = () => utils_isBrowser() && (window.navigator.language || window.navigator.userLanguage).toLowerCase().slice(0, 2);
/* harmony default export */ var utils_sysLang = (sysLang);

;// CONCATENATED MODULE: ../../huxy/utils/template.js
const template = (strings, ...keys) => {
  const tmpl = [];
  strings.map((str, i) => {
    var _a;
    tmpl.push(str, (_a = keys[i]) != null ? _a : "");
  });
  return tmpl.join("");
};
/* harmony default export */ var utils_template = (template);

;// CONCATENATED MODULE: ../../huxy/utils/throttle.js
const throttle = (fn = () => {
}, delay = 60) => {
  let timer = null;
  return function(...args) {
    if (!timer) {
      fn.apply(this, args);
      timer = setTimeout(() => timer = null, delay);
    }
  };
};
/* harmony default export */ var utils_throttle = (throttle);

;// CONCATENATED MODULE: ../../huxy/utils/timeInterval.js


const timeBase = (date) => [12, utils_getMonthDays(date), 24, 60, 60];
const minus = (start = [], end = [], base = []) => {
  let carry = false;
  const gap = [];
  end.map((v, i) => {
    const endValue = carry ? v - 1 : v;
    const diff = endValue - start[i];
    if (diff < 0) {
      gap[i] = diff + (base[i] || 10);
      carry = true;
    } else {
      gap[i] = diff;
      carry = false;
    }
  });
  return gap.reverse();
};
const timeInterval = (start, end = /* @__PURE__ */ new Date()) => {
  if (new Date(start) - new Date(end) > 0) {
    start = [end, end = start][0];
  }
  const base = timeBase(end).reverse();
  const sDate = utils_getTime(start).slice(0, -1).reverse();
  const eDate = utils_getTime(end).slice(0, -1).reverse();
  return minus(sDate, eDate, base);
};
/* harmony default export */ var utils_timeInterval = (timeInterval);

;// CONCATENATED MODULE: ../../huxy/utils/timeGap.js

const timeUnit = ["\u5E74", "\u6708", "\u65E5", "\u65F6", "\u5206", "\u79D2"];
const timeGap = (start, end = /* @__PURE__ */ new Date()) => {
  const gap = utils_timeInterval(start, end);
  const index = gap.findIndex((v) => v > 0);
  const unitTime = gap.map((v, i) => `${v || 0}${timeUnit[i]}`);
  return unitTime.slice(index).join("");
};
/* harmony default export */ var utils_timeGap = (timeGap);

;// CONCATENATED MODULE: ../../huxy/utils/toggleClass.js




const toggleClass = (ele, name) => {
  if (!utils_isElement(ele)) {
    return;
  }
  if (utils_hasClass(ele, name)) {
    utils_removeClass(ele, name);
  } else {
    utils_addClass(ele, name);
  }
};
/* harmony default export */ var utils_toggleClass = (toggleClass);

;// CONCATENATED MODULE: ../../huxy/utils/traverList.js

const traverList = (fn) => (arr, childKey = "children") => {
  if (!utils_isArray(arr)) {
    return arr;
  }
  const traver = (data) => {
    data.map((item) => {
      if (utils_isArray(item[childKey])) {
        item[childKey] = traver(item[childKey]);
      }
    });
    return fn(data);
  };
  return traver(arr);
};
/* harmony default export */ var utils_traverList = (traverList);

;// CONCATENATED MODULE: ../../huxy/utils/unescapeHTML.js
const unescapeHTML = (str) => str.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g, (tag) => ({ "&amp;": "&", "&lt;": "<", "&gt;": ">", "&#39;": "'", "&quot;": '"' })[tag] || tag);
/* harmony default export */ var utils_unescapeHTML = (unescapeHTML);

;// CONCATENATED MODULE: ../../huxy/utils/updateId.js

const updateId = (tree, idKey = "fuckId", childKey = "children") => utils_traverItem((item, parent, index) => {
  item[idKey] = [...parent.map((v) => v["@@index"]), index].join("-");
})(tree, childKey);
/* harmony default export */ var utils_updateId = (updateId);

;// CONCATENATED MODULE: ../../huxy/utils/updateTreeNodes.js

const updateTreeNodes = (tree, id, nodes, childKey = "children") => utils_selectedHandle((data, index) => {
  const item = data[index];
  item[childKey] = [...item[childKey] || [], ...nodes];
  return true;
})(tree, id);
/* harmony default export */ var utils_updateTreeNodes = (updateTreeNodes);

;// CONCATENATED MODULE: ../../huxy/utils/validObj.js
const validObj = (obj = {}) => {
  const newObj = {};
  Object.keys(obj).map((v) => {
    if (obj[v] != null) {
      newObj[v] = obj[v];
    }
  });
  return newObj;
};
/* harmony default export */ var utils_validObj = (validObj);

;// CONCATENATED MODULE: ../../huxy/utils/watchScreen.js


const watchScreen = (callback) => {
  if (!utils_isBrowser()) {
    return;
  }
  fullscreenchange.map((fsc) => document.addEventListener(fsc, callback, false));
  const destroy = () => fullscreenchange.map((fsc) => document.removeEventListener(fsc, callback, false));
  return destroy;
};
/* harmony default export */ var utils_watchScreen = (watchScreen);

;// CONCATENATED MODULE: ../../huxy/utils/watermark.js


const watermark = ({
  container,
  width = "220px",
  height = "200px",
  textAlign = "center",
  textBaseline = "middle",
  font = "20px microsoft yahei",
  fillStyle = "rgba(202,202,202,0.4)",
  content = "\u8BF7\u52FF\u5916\u4F20",
  rotate = "-30",
  zIndex = 1e3
} = {}) => {
  if (!utils_isBrowser()) {
    return;
  }
  container = utils_isRef(container) ? container.current : container != null ? container : document.body;
  const oldCanvas = container.firstChild;
  if ((oldCanvas == null ? void 0 : oldCanvas.className) === "watermark-canvas") {
    container.removeChild(oldCanvas);
  }
  const canvas = document.createElement("canvas");
  canvas.setAttribute("width", width);
  canvas.setAttribute("height", height);
  const ctx = canvas.getContext("2d");
  ctx.textAlign = textAlign;
  ctx.textBaseline = textBaseline;
  ctx.font = font;
  ctx.fillStyle = fillStyle;
  ctx.rotate(Math.PI / 180 * rotate);
  ctx.fillText(content, parseFloat(width) / 2, parseFloat(height) / 2);
  const base64Url = canvas.toDataURL();
  const watermarkDiv = document.createElement("div");
  watermarkDiv.setAttribute(
    "style",
    `
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:${zIndex};
    pointer-events:none;
    background-repeat:repeat;
    background-image:url('${base64Url}')`
  );
  container.style.position = "relative";
  container.insertBefore(watermarkDiv, container.firstChild);
};
/* harmony default export */ var utils_watermark = (watermark);

;// CONCATENATED MODULE: ../../huxy/utils/weekDate.js

const weekDate = (d = /* @__PURE__ */ new Date()) => {
  const newDate = new Date(d);
  const day = newDate.getDay();
  return [utils_addDays(1 - day), utils_addDays(7 - day)];
};
/* harmony default export */ var utils_weekDate = (weekDate);

;// CONCATENATED MODULE: ../../huxy/utils/wrapPromise.js

const wrapPromise = (promiseFn) => {
  if (!utils_isAsync(promiseFn)) {
    return {};
  }
  let status = "pending";
  let result;
  const suspender = promiseFn.then((res) => {
    status = "success";
    result = res;
  }).catch((err) => {
    status = "error";
    result = err;
  });
  const read = () => {
    if (status === "pending") {
      throw suspender;
    } else if (status === "error") {
      throw result;
    } else if (status === "success") {
      return result;
    }
  };
  return { read };
};
/* harmony default export */ var utils_wrapPromise = (wrapPromise);

;// CONCATENATED MODULE: ../../huxy/utils/index.js














































































































































































/******/ 	return __webpack_exports__;
/******/ })()
;
});