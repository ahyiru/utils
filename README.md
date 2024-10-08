## utils

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ahyiru/utils/blob/develop/LICENSE)
[![npm version](https://img.shields.io/npm/v/@huxy/utils.svg)](https://www.npmjs.com/package/@huxy/utils)
[![npm](https://img.shields.io/npm/dt/@huxy/utils)](https://www.npmjs.com/package/@huxy/utils)
[![](https://img.shields.io/badge/blog-ihuxy-blue.svg)](http://ihuxy.com/)

### a2o

```javascript
const arr = [
  {
    key: 1,
    value: 't1',
  },
  {
    key: 2,
    value: 't2',
  },
  {
    key: 3,
    value: 't3',
  },
];

a2o(arr, 'key', 'value');

// {1: 't1', 2: 't2', 3: 't3'}
```

### addAtNext/addAtPos/addNodes/editNodes/deleteNodes/moveNodes

```javascript
addAtNext(tree, id, nodes, (idKey = 'id'), (childKey = 'children'));
addAtPos(tree, id, nodes, pos, (idKey = 'id'), (childKey = 'children'));
addNodes(tree, id, nodes, (idKey = 'id'), (childKey = 'children'));
editNodes(tree, id, nodes, (idKey = 'id'), (childKey = 'children'));
deleteNodes(tree, id, (idKey = 'id'), (childKey = 'children'));
moveNodes(tree, fromId, toId, pos, (idKey = 'id'), (childKey = 'children'));
```

### addScript/addStyle

动态添加 `script` 和 `style` 。

```javascript
const loadScript = async url => {
  await addScript(url);
};
const loadStyleByUrl = async url => {
  await addStyle(url);
};
const addStyleByCode = addStyle(cssCode, 'css-hash');
```

### arr2Tree

```javascript
const arr = [
  {
    parentId: 1,
    id: 2,
    value: '1-1',
  },
  {
    parentId: 4,
    id: 5,
    value: '2-1',
  },
  {
    id: 4,
    value: '2',
  },
  {
    id: 1,
    value: '1',
  },
  {
    parentId: 1,
    id: 3,
    value: '1-2',
  },
  {
    parentId: 5,
    id: 6,
    value: '2-1-1',
  },
];

arr2Tree()(arr);

output: [
  {
    id: 4,
    value: '2',
    parentId: -1,
    children: [
      {
        parentId: 4,
        id: 5,
        value: '2-1',
        children: [
          {
            parentId: 5,
            id: 6,
            value: '2-1-1',
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: 1,
    value: '1',
    parentId: -1,
    children: [
      {
        parentId: 1,
        id: 2,
        value: '1-1',
        children: [],
      },
      {
        parentId: 1,
        id: 3,
        value: '1-2',
        children: [],
      },
    ],
  },
];
```

### arr2TreeByPath

```javascript
const arr = [
  {
    path: '/home/p1',
    value: 'p1',
  },
  {
    path: '/404',
    value: '404',
  },
  {
    path: '/home/p1/sp2',
    value: 'sp12',
  },
  {
    path: '/home',
    value: 'home',
  },
  {
    path: '/home/p2/sp3',
    value: 'sp23',
  },
  {
    path: '/home/p2/sp2/sp1',
    value: 'sp221',
  },
  {
    path: '',
    value: 'root',
  },
  {
    path: '/home/p1/sp1',
    value: 'sp11',
  },
  {
    path: '/home/p2/sp2',
    value: 'sp22',
  },
  {
    path: '/home/p2/sp2/sp1',
    value: 'sp221',
  },
  {
    path: '/home/p2',
    value: 'p2',
  },
  {
    path: '/home/p3',
    value: 'p3',
  },
];

arr2TreeByPath(arr);

output: [
  {
    path: '',
    value: 'root',
    parentId: null,
    children: [
      {
        path: '/404',
        value: '404',
        parentId: '',
        children: [],
      },
      {
        path: '/home',
        value: 'home',
        parentId: '',
        children: [
          {
            path: '/home/p1',
            value: 'p1',
            parentId: '/home',
            children: [
              {
                path: '/home/p1/sp2',
                value: 'sp12',
                parentId: '/home/p1',
                children: [],
              },
              {
                path: '/home/p1/sp1',
                value: 'sp11',
                parentId: '/home/p1',
                children: [],
              },
            ],
          },
          {
            path: '/home/p2',
            value: 'p2',
            parentId: '/home',
            children: [
              {
                path: '/home/p2/sp3',
                value: 'sp23',
                parentId: '/home/p2',
                children: [],
              },
              {
                path: '/home/p2/sp2',
                value: 'sp22',
                parentId: '/home/p2',
                children: [
                  {
                    path: '/home/p2/sp2/sp1',
                    value: 'sp221',
                    parentId: '/home/p2/sp2',
                    children: [],
                  },
                  {
                    path: '/home/p2/sp2/sp1',
                    value: 'sp221',
                    parentId: '/home/p2/sp2',
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            path: '/home/p3',
            value: 'p3',
            parentId: '/home',
            children: [],
          },
        ],
      },
    ],
  },
];
```

### backTop

返回页面顶部按钮。

```javascript
backTop(scrollHeight);
```

- scrollHeight：出现 ‘返回顶部’ 按钮时的滚动距离，默认 0 。

### rgba2hex

```javascript
rgba2hex(111, 111, 111, 0.8);

// '#6f6f6fcc'
```

### rmUnit

```javascript
rmUnit('100px'); // Number: 100
rmUnit('60s', 's'); // Number: 60
```

- unit：默认 `px`

### hex2rgba

```javascript
hex2rgba('ddd');

> // 'rgb(221,221,221)'

```

### base2Ten

```javascript
base2Ten(100, 16); // 256
base2Ten(100, 8); // 64
base2Ten(100); // 4
```

### ten2Base

```javascript
ten2Base(100, 16); // 64
ten2Base(100, 8); // 144
ten2Base(100); // 1100100
```

### baseConversion

```javascript
baseConversion(100, 8, 16); // 40
```

### fetcher

```javascript
import {fetcher} from '@huxy/utils';

const handler = response => {
  return response
    .json()
    .then(result => {
      result.code = result.code ?? response.status;
      result.msg = result.message ?? result.msg ?? response.statusText;
      const {msg, code} = result;
      if (code === 401) {
        message.error(msg);
        logout(true);
        throw {code, message: msg};
      }
      if (!success_code.includes(code)) {
        throw {code, message: msg};
      }
      return result;
    })
    .catch(error => {
      message.error(error.message);
      throw error.message;
    });
};

const fetchApi = fetcher(handler);

const fetch = ({method, url, ...opt}) => fetchApi(method)(`${TARGET}${url}`, {...opt, headers: getToken(), credentials: 'omit'});
```

### cacheData

```javascript
const {record, undo, redo, clean} = cacheData();
```

### cancelablePromise

```javascript
const {promiseFn, cancelFn} = cancelablePromise(components, {delay: suspenseConfig.delay, msg: {timeout: suspenseConfig.timeoutMsg}});

promiseFn.then().catch();
```

### changePos

```javascript
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

changePos(arr, 2, 7);

// [1, 2, 8, 4, 5, 6, 7, 3, 9]
```

### classifyArr

```javascript
const arr=[
  {
    name:'test1',
    value:'t1',
  },
  {
    name:'test2',
    value:'t2',
  },
  {
    name:'test1',
    value:'t3',
  },
  {
    name:'test2',
    value:'t4',
  },
];

classifyArr(arr)

output:

{
  "test1": [
    {
      "name": "test1",
      "value": "t1"
    },
    {
      "name": "test1",
      "value": "t3"
    }
  ],
  "test2": [
    {
      "name": "test2",
      "value": "t2"
    },
    {
      "name": "test2",
      "value": "t4"
    }
  ]
}

```

### clone

```javascript
clone(arr | object);
```

### compareVersion

```javascript
compareVersion(a, b, key = '.');

compareVersion('1.5.111', '1.7.0'); // 2
compareVersion('1.105.1', '2.0.0'); // 3
compareVersion('10.0.1', '10.0.22'); // 1
compareVersion('3.2.1', '3.2.1'); // 0
compareVersion('2_22_1', '2_9_11', '_'); // 0

返回值：

- 0：a >= b
- 1：a < b，阶段版本号需更新
- 2：a < b，子版本号需更新
- 3：a < b，主版本号需更新

```

### compose

```javascript
const a = x => x + 10;

const b = x => x * 10;

compose(b, a)(2); // 120
```

### copyToClipboard

```javascript
> copyToClipboard(text)

```

### createTextElement/createElement/createNode

```javascript
createTextElement(text);

createElement(type, props, ...children);

createNode({type: '', props: {}});
```

### curry

```javascript
const arr = [
  {
    name: 'test1',
    value: 't1',
  },
  {
    name: 'test2',
    value: 't2',
  },
  {
    name: 'test1',
    value: 't3',
  },
  {
    name: 'test2',
    value: 't4',
  },
];

const fn = (name, value) => arr.filter(item => item.name === name).filter(item => item.value === value);

const a = curry(fn)('test1');

a('t3');

output: [
  {
    name: 'test1',
    value: 't3',
  },
];
```

### cyclic

```javascript
cyclic(object); // true | false
```

### addDays/addMonths/addYears/addHours

```javascript
addDays(2, '2022-01-01'); // Mon Jan 03 2022 08:00:00 GMT+0800 (中国标准时间)

addMonths(3); // Sat Jun 25 2022 17:44:47 GMT+0800 (中国标准时间)
```

### getLeaveTime

```javascript
getLeaveTime('2022-10-1'); // '189天6小时12分11秒'
```

### weekDate/monthDate

```javascript
weekDate();

output: ['2022-03-21T09:48:44.098Z', '2022-03-27T09:48:44.098Z'];
```

### dash2camel

```javascript
dash2camel('add-file-name'); // addFileName
dash2camel('add_file_name', '_'); // addFileName
```

### dataURLtoFile

```javascript
dataURLtoFile('data:image/png;base64,xxx...', test.png);
```

### debounce

```javascript
debounce(func, (delay = 60));
```

### dropInfo

元素触发事件弹出层

```javascript
dropInfo(triggerEle, showEle, type = 'horizontal');

- triggerEle：触发元素
- showEle：弹出层内容
- type：弹层位置样式，horizontal | vertical

```

### dlfile

```javascript
dlfile(url, name);
```

### emitter

```javascript
const {on, emit, off} = emitter();
```

### equal

```javascript
equal(a, b); // true | false
```

### filter

```javascript
const arr = [
  {
    name: 'test1',
    value: 't1',
  },
  {
    name: 'test2',
    value: 't2',
  },
  {
    name: 'test1',
    value: 't3',
  },
  {
    name: 'test2',
    value: 't4',
  },
];

filter(arr, 'est1', 'name');

output: [
  {
    name: 'test1',
    value: 't1',
  },
  {
    name: 'test1',
    value: 't3',
  },
];
```

### filterList

```javascript
filterList(data, keyword, str2Dom /*高亮元素*/, (fields = 'name'), (idKey = 'id'), (childKey = 'children'), (exact = false));
```

### findChildEle

```javascript
findChildEle(target, classname);
```

返回当前元素下类名为 `classname` 的所有元素，没找到则返回 `null` 。

### findMax

```javascript
findMax('ghfdj53785bhb4289yb3b478'); // 53785
```

### firstUpper

```javascript
firstUpper('hello world'); // 'Hello world'
```

### fixPath

```javascript
fixPath('//a/b//c'); // '/a/b/c'
```

### fixRoute

```javascript
fixRoute('/a/b/e/'); // /a/b/e
```

### fixSize

```javascript
fixSize(img, ratio = 1);

根据父元素宽高比设置元素宽度比例。

```

### fixFileSizeUnit

```javascript
fixFileSizeUnit(10000); // 9.766 KB
fixFileSizeUnit(2000000); // 1.907 M
```

### fixTimeUnit

```javascript
fixTimeUnit(1000); // 16m40s
fixTimeUnit(20000); // 5h33m20s
```

### flatten

```javascript
const arr = [
  {
    name: 'test1',
    value: 't1',
    children: [
      {
        name: 'test11',
        value: 't11',
      },
      {
        name: 'test12',
        value: 't12',
      },
    ],
  },
  {
    name: 'test2',
    value: 't2',
  },
  {
    name: 'test1',
    value: 't3',
    children: [
      {
        name: 'test31',
        value: 't31',
      },
      {
        name: 'test32',
        value: 't32',
        children: [
          {
            name: 'test321',
            value: 't321',
          },
        ],
      },
    ],
  },
  {
    name: 'test2',
    value: 't4',
  },
];

flatten(arr);

output: [
  {
    name: 'test1',
    value: 't1',
  },
  {
    name: 'test2',
    value: 't2',
  },
  {
    name: 'test1',
    value: 't3',
  },
  {
    name: 'test2',
    value: 't4',
  },
  {
    name: 'test11',
    value: 't11',
  },
  {
    name: 'test12',
    value: 't12',
  },
  {
    name: 'test31',
    value: 't31',
  },
  {
    name: 'test32',
    value: 't32',
  },
  {
    name: 'test321',
    value: 't321',
  },
];
```

### formatNum

```javascript
formatNum(12345678); // '12,345,678'
```

### getTime/formatTime

```javascript
getTime(); // [2022, 3, 25, 18, 4, 36, 5]

formatTime(); // '2022-03-25 18:04:36'
```

### fullScreen/watchScreen

```javascript
fullScreen(element);

watchScreen(callback); // 全屏变化时执行回调
```

### getElementsSize

```javascript
const {width, height, top, left, ...rest} = getElementsSize(ele);
```

### getOffset

```javascript
const {top, left} = getOffset(ele);
```

### getParams

```javascript
getParams('/a/b?name=hhh&age=18')

output:

{
  "path": "/a/b",
  "params": {
    "name": "hhh",
    "age": "18"
  }
}

```

### getPosition

```javascript
const {width, height, top, left, ...rest} = getPosition(ele);
```

### getSelected

```javascript
const arr = [
  {
    name: 'test1',
    value: 't1',
    children: [
      {
        name: 'test11',
        value: 't11',
      },
      {
        name: 'test12',
        value: 't12',
      },
    ],
  },
  {
    name: 'test2',
    value: 't2',
  },
  {
    name: 'test1',
    value: 't3',
    children: [
      {
        name: 'test31',
        value: 't31',
      },
      {
        name: 'test32',
        value: 't32',
        children: [
          {
            name: 'test321',
            value: 't321',
          },
        ],
      },
    ],
  },
  {
    name: 'test2',
    value: 't4',
  },
];

getSelected(arr, 't32', 'value');

output: [
  {
    name: 'test1',
    value: 't3',
  },
  {
    name: 'test32',
    value: 't32',
  },
];
```

### getTextSize

```javascript
const {width, height, top, left, ...rest} = getTextSize(text);
```

### getTouchPosition/getRelative

```javascript
const {touchX, touchY} = getTouchPosition(event);

const {x, y} = getRelative(event, ref);
```

### getType

```javascript
getType(); // 'undefined'
getType(''); // 'string'
getType(222); // 'number'
getType([]); // 'array'
```

### getValue

```javascript
const obj = {
  a: {
    b: {
      c: 4444,
    },
    b1: {},
  },
};

getValue(obj, 'a.b.c'); // 4444

getValue(obj, 'a.b.d'); // undefined
```

### getViewportSize

```javascript
const {width, height} = getViewportSize(element);
```

### hasClass/addClass/removeClass/toggleClass

```javascript
hasClass(ele, 'class1');
addClass(ele, 'class1');
removeClass(ele, 'class1');
toggleClass(ele, 'class1');
```

### hasProp

```javascript
const a = {b: undefined};

hasProp(a, 'b'); // true
```

### isArray/isValidArr/isValidObj/isAsync/isObject/isFunction/isError/isRegExp/isElement/isUrl/isDate/isBase64Image

```javascript
isArray([]); // true
isValidArr([1]); // true
isObject({}); // true
isValidObj({}); // false
isFunction(() => {}); // true
isError(new Error()); // true
isRegExp(/\d+/); // true
isElement(<span>1</span>); // true
isAsync(new Promise((res, rej) => {})); // true
isUrl('http://abc.com'); // true
isDate('2022', '10', '11'); // true
isBase64Image('data:image/png;base64,test'); // [data:image/png;base64,test, png]
```

### isBrowser/isIE/isTouch

```javascript
isBrowser();
isIE();
isTouch();
```

### isReactEle/isRef

```javascript
isReactEle(value);
isRef(value);
```

### isWechat

判断是否为微信浏览器

```javascript
isWechat(); // false
```

### loadImage/loadBase64/loadBase64ByUrl/imgtocanvas

```javascript
const img = await loadImage(url);
const base64 = await loadBase64(img);

const base64 = await loadBase64ByUrl(url);

const canvas = imgtocanvas(img);
```

### memoize

```javascript
const fn = n => console.log(n);
const m = memoize(fn);
m(3);
m(3);

// 3 只打印一次
```

### merge/mergeObj/mergeArr

```javascript
const a={
  name:'t1',
  children: [
    {
      name: 't11',
    },
    {
      name: 't12',
    },
  ],
};

const b={
  name:'t2',
  children: [
    {
      name: 't21',
    },
    {
      name: 't22',
    },
  ],
};

const c={
  age: 18,
  children: [
    {
      age: 20,
    },
    {
      age: 22,
    },
  ],
};

merge(a,b,c);

output:

{
  "name": "t2",
  "children": [
    {
      "name": "t21",
      "age": 20
    },
    {
      "name": "t22",
      "age": 22
    }
  ],
  "age": 18
}

```

### message

```javascript
message.success(content, delay, onClose);

- content：文本信息
- delay：持续时间
- onClose：关闭回调

message.success('success');
message.warn('warn');
message.error('error');
message.info('info');

```

### obj2arr/arr2obj

```javascript
const a={
  name:'t1',
  age: 18,
  id:'123',
};

obj2arr(a)

output:

[
  {
    "name": "name",
    "value": "t1"
  },
  {
    "name": "age",
    "value": 18
  },
  {
    "name": "id",
    "value": "123"
  }
]

const b=[
  {
    name:'t1',
    value:'t11',
  },
  {
    name:'t2',
    value:'t22',
  },
  {
    name:'t3',
    value:'t33',
  },
];

arr2obj(b)

output:

{
  "t1": "t11",
  "t2": "t22",
  "t3": "t33"
}

```

### obj2str/arr2str/json2str

```javascript
const c = {
  age: 18,
  children: [
    {
      age: 20,
    },
    {
      age: 22,
    },
  ],
};

json2str(c);

output: '{age=18, children={0={age=20}, 1={age=22}}}';
```

### once

```javascript
const t = () => console.log('test');

const runOne = once(t);

runOne(); // test
runOne(); // 不执行
```

### padStart

```javascript
padStart('123', 6); // 000123

padStart('abc', 5, '#'); // ##abc
```

### params2data

```javascript
const a = {
  name: 't1',
  age: 18,
  id: '123',
};

params2data(a); // FormData {}
```

### params2str

```javascript
const a = {
  name: 't1',
  age: 18,
  id: '123',
};

params2str(a); // '?name=t1&age=18&id=123'
```

### paseXml

```javascript
const {xml2Obj, obj2Xml} = paseXml;

xml2Obj(`<xml>
  <ToUserName><![CDATA[toUser]]></ToUserName>
  <FromUserName><![CDATA[fromUser]]></FromUserName>
  <CreateTime>1348831860</CreateTime>
  <MsgType><![CDATA[text]]></MsgType>
  <Content><![CDATA[this is a test]]></Content>
  <MsgId>1234567890123456</MsgId>
  <MsgDataId>xxxx</MsgDataId>
  <Idx>xxxx</Idx>
</xml>`)

result:
{
  "obj": {
    "CreateTime": "1348831860",
    "MsgId": "1234567890123456",
    "MsgDataId": "xxxx",
    "Idx": "xxxx",
    "ToUserName": "toUser",
    "FromUserName": "fromUser",
    "MsgType": "text",
    "Content": "this is a test"
  },
  "types": {
    "CreateTime": "base",
    "MsgId": "base",
    "MsgDataId": "base",
    "Idx": "base",
    "ToUserName": "data",
    "FromUserName": "data",
    "MsgType": "data",
    "Content": "data"
  }
}

obj2Xml({
  "CreateTime": "1348831860",
  "MsgId": "1234567890123456",
  "MsgDataId": "xxxx",
  "Idx": "xxxx",
  "ToUserName": "toUser",
  "FromUserName": "fromUser",
  "MsgType": "text",
  "Content": "this is a test"
}, {
  "CreateTime": "base",
  "MsgId": "base",
  "MsgDataId": "base",
  "Idx": "base",
  "ToUserName": "data",
  "FromUserName": "data",
  "MsgType": "data",
  "Content": "data"
})

result:
<xml>\n    <CreateTime>1348831860</CreateTime>\n<MsgId>1234567890123456</MsgId>\n<MsgDataId>xxxx</MsgDataId>\n<Idx>xxxx</Idx>\n<ToUserName><![CDATA[toUser]]></ToUserName>\n<FromUserName><![CDATA[fromUser]]></FromUserName>\n<MsgType><![CDATA[text]]></MsgType>\n<Content><![CDATA[this is a test]]></Content>\n\n  </xml>
```

### pick

```javascript
const a = {
  name: 't1',
  age: 18,
  id: '123',
};

pick(a, ['id', 'name']); // {id: '123', name: 't1'}
```

### promisify

```javascript
promisify(func)(...args);
```

### randNum/randStr/randColor/randTrue/randItem/randPercent

```javascript
randNum(5); // 5
randStr(8); // 'czqx7vhu'
randColor(); // '#39a645'
randTrue(); // false
randItem([1, 3, 5, 7, 9]); // 3
randPercent(4); // [54, 13, 30, 3]
randPercent(5, 80); // [5, 40, 12, 11, 12]
```

### resize

```javascript
const {bind, unbind, destroy} = resize(element);

bind(callback);
unbind(callback);
destroy();
```

### scrollToTop/scrollToAnchor/scrollTop

```javascript
scrollToTop((top = 0)); // 滚动到指定位置
scrollToAnchor(ref); // 滚动到元素位置
scrollTop(); // 滚动到顶部
```

### viewHeight/docHeight/isScrollBottom

```javascript
viewHeight(); // 视图高度
docHeight(); // 文档高度
isScrollBottom(); // 是否滚到底部
```

### selectedHandle

```javascript
selectedHandle((data, i, parentId) => {
  console.log(data, i, parentId);
  return data[i]; // 选中id的item
})(arr, id);
```

### session

```javascript
const {get, set, rm, clear} = session;

get(name);
set(name, data);
rm(name);
clear();
```

### setStyle

```javascript
setStyle(ele, (styles = {}), (reset = false));
```

### sleep

```javascript
await sleep((ms = 350), (unit = 'ms'));

await sleep(2, 'm');
```

- delay: 等待时间数值
- unit: 单位。毫秒、秒、分、时、天。ms | s | m | h | d 。默认 ms

### sort

```javascript
const a = [
  {
    name: 't1',
    age: 33,
  },
  {
    name: 't2',
    age: 12,
  },
  {
    name: 't3',
    age: 22,
  },
];

sort(a, 'age');

output: [
  {
    name: 't2',
    age: 12,
  },
  {
    name: 't3',
    age: 22,
  },
  {
    name: 't1',
    age: 33,
  },
];
```

### storage

```javascript
const {get, set, rm, clear} = storage;

get(name);
set(name, data);
rm(name);
clear();
```

### createStore

```javascript
const {getState, setState, subscribe, clean} = createStore();
```

### str2code

```javascript
str2code('console.log(123)'); // 123
```

### str2Html

```javascript
str2Html('<a>link</a>'); // NodeList [a]
```

### getExplore

```javascript
getExplore(); // {type: 'Chrome', version: '99.0.4844.51'}
```

### getOsInfo

```javascript
getOsInfo(); // {type: 'macOS', version: '10.15.7'}
```

### sysLang

```javascript
sysLang(); // 'zh'
```

### deviceType

```javascript
deviceType(); // 'Desktop'
```

### throttle

```javascript
const throttleFn = throttle(fn, (delay = 60));
```

### getMonthDays

```javascript
getMonthDays(); // 31
```

### timestamp

```javascript
timestamp(); // 48620100.70000002
```

### touchEvent

```javascript
const destroy = touchEvent(startEvent, moveEvent, endEvent, ref);
```

- startEvent：touchstart 或 mousedown 执行的事件
- moveEvent：touchmove 或 mousemove 执行的事件
- endEvent：touchend 或 mouseup 执行的事件
- ref：容器元素，默认 document

返回 destroy 函数，执行 destroy() 即可销毁事件。

### traverItem

```javascript
traverItem((item, parent, index, hasChild) => {
  console.log(item, parent, index, hasChild);
})(arr, childKey);

- fn：回调函数
	- item：当前节点数据
	- parent：父节点数据
	- index：当前节点下标
	- hasChild：是否有子节点

- arr：树对象
- childKey：子节点 `key` 值，默认 `children`
```

### traverList

```javascript
traverItem(data => {
  console.log(data);
})(arr, childKey);
```

### unique

```javascript
const a = [
  {
    name: 't1',
    age: 33,
  },
  {
    name: 't2',
    age: 12,
  },
  {
    name: 't1',
    age: 22,
  },
];

unique(a, 'name');

output: [
  {
    name: 't1',
    age: 33,
  },
  {
    name: 't2',
    age: 12,
  },
];
```

### updateId

```javascript
const a = [
  {
    name: 't1',
    age: 33,
  },
  {
    name: 't2',
    age: 12,
  },
  {
    name: 't3',
    age: 22,
  },
];

updateId(a, 'id');

output: [
  {
    name: 't1',
    age: 33,
    id: '0',
  },
  {
    name: 't2',
    age: 12,
    id: '1',
  },
  {
    name: 't3',
    age: 22,
    id: '2',
  },
];
```

### uuidv4

```javascript
uuidv4(); // '4839e86e-252f-4571-9982-351cd98cc875'
```

### validObj

```javascript
const a = {
  name: 't1',
  age: 18,
  email: 'ah.yiru@gmail.com',
  t1: '',
  t2: null,
  t3: undefined,
};

validObj(a);

output:

{name: 't1', age: 18, email: 'ah.yiru@gmail.com', t1: ''}

```

### watermark

```javascript
watermark({
  container = document.body,
  width = '220px',
  height = '200px',
  textAlign = 'center',
  textBaseline = 'middle',
  font = '20px microsoft yahei',
  fillStyle = 'rgba(202,202,202,0.4)',
  content = '请勿外传',
  rotate = '-30',
  zIndex = 1000,
});

```

### wrapPromise

```javascript
const {read} = wrapPromise(promiseFn);

const result = read();
```
