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
    obj[tag] = (text ?? "").trim();
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
/* harmony default export */ __webpack_exports__.A = ({ xml2Obj, obj2Xml });

var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
