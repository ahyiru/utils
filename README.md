## utils


### a2o

```js
const arr=[
  {
    key:1,
    value:'t1',
  },
  {
    key:2,
    value:'t2',
  },
  {
    key:3,
    value:'t3',
  },
];

a2o(arr);

// {1: 't1', 2: 't2', 3: 't3'}

```

### arr2Tree

```js
const arr=[
  {
    parentId:1,
    id:2,
    value:'1-1',
  },
  {
    parentId:4,
    id:5,
    value:'2-1',
  },
  {
    id:4,
    value:'2',
  },
  {
    id:1,
    value:'1',
  },
  {
    parentId:1,
    id:3,
    value:'1-2',
  },
  {
    parentId:5,
    id:6,
    value:'2-1-1',
  },
];

arr2Tree()(arr);

output: 

[
  {
    "id": 4,
    "value": "2",
    "parentId": -1,
    "children": [
      {
        "parentId": 4,
        "id": 5,
        "value": "2-1",
        "children": [
          {
            "parentId": 5,
            "id": 6,
            "value": "2-1-1",
            "children": []
          }
        ]
      }
    ]
  },
  {
    "id": 1,
    "value": "1",
    "parentId": -1,
    "children": [
      {
        "parentId": 1,
        "id": 2,
        "value": "1-1",
        "children": []
      },
      {
        "parentId": 1,
        "id": 3,
        "value": "1-2",
        "children": []
      }
    ]
  }
]

```

### arr2TreeByPath

```js
const arr=[
  {
    path:'/home/p1',
    value:'p1',
  },
  {
    path:'/404',
    value:'404',
  },
  {
    path:'/home/p1/sp2',
    value:'sp12',
  },
  {
    path:'/home',
    value:'home',
  },
  {
    path:'/home/p2/sp3',
    value:'sp23',
  },
  {
    path:'/home/p2/sp2/sp1',
    value:'sp221',
  },
  {
    path:'',
    value:'root',
  },
  {
    path:'/home/p1/sp1',
    value:'sp11',
  },
  {
    path:'/home/p2/sp2',
    value:'sp22',
  },
  {
    path:'/home/p2/sp2/sp1',
    value:'sp221',
  },
  {
    path:'/home/p2',
    value:'p2',
  },
  {
    path:'/home/p3',
    value:'p3',
  },
];

arr2TreeByPath(arr);

output: 

[
  {
    "path": "",
    "value": "root",
    "parentId": null,
    "children": [
      {
        "path": "/404",
        "value": "404",
        "parentId": "",
        "children": []
      },
      {
        "path": "/home",
        "value": "home",
        "parentId": "",
        "children": [
          {
            "path": "/home/p1",
            "value": "p1",
            "parentId": "/home",
            "children": [
              {
                "path": "/home/p1/sp2",
                "value": "sp12",
                "parentId": "/home/p1",
                "children": []
              },
              {
                "path": "/home/p1/sp1",
                "value": "sp11",
                "parentId": "/home/p1",
                "children": []
              }
            ]
          },
          {
            "path": "/home/p2",
            "value": "p2",
            "parentId": "/home",
            "children": [
              {
                "path": "/home/p2/sp3",
                "value": "sp23",
                "parentId": "/home/p2",
                "children": []
              },
              {
                "path": "/home/p2/sp2",
                "value": "sp22",
                "parentId": "/home/p2",
                "children": [
                  {
                    "path": "/home/p2/sp2/sp1",
                    "value": "sp221",
                    "parentId": "/home/p2/sp2",
                    "children": []
                  },
                  {
                    "path": "/home/p2/sp2/sp1",
                    "value": "sp221",
                    "parentId": "/home/p2/sp2",
                    "children": []
                  }
                ]
              }
            ]
          },
          {
            "path": "/home/p3",
            "value": "p3",
            "parentId": "/home",
            "children": []
          }
        ]
      }
    ]
  }
]

```

### rgba2hex

```js
rgba2hex(111,111,111,.8);

// '#6f6f6fcc'

```

### hex2rgba

```js
hex2rgba('ddd');

> // 'rgb(221,221,221)'

```

### base2Ten

```js
base2Ten(100,16) // 256
base2Ten(100,8) // 64
base2Ten(100) // 4

```

### ten2Base

```js
ten2Base(100,16) // 64
ten2Base(100,8) // 144
ten2Base(100) // 1100100

```

### baseConversion

```js
baseConversion(100,8,16) // 40

```

### fetcher

```js
import {fetcher} from 'ihuxy-utils/baseFetch';

const handler = (response) => {
  return response
    .json()
    .then((result) => {
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
    .catch((error) => {
      message.error(error.message);
      throw error.message;
    });
};

const fetchApi = fetcher(handler);

const fetch = ({method, url, ...opt}) => fetchApi(method)(`${TARGET}${url}`, {...opt, headers: getToken(), credentials: 'omit'});

```

### cacheData

```js
const {record, undo, redo, clean} = cacheData();

```

### cancelablePromise

```js
const {promiseFn,cancelFn}=cancelablePromise(components,{delay:suspenseConfig.delay,msg:{timeout:suspenseConfig.timeoutMsg}});

promiseFn.then().catch()

```

### changePos

```js
const arr=[1,2,3,4,5,6,7,8,9];

changePos(arr,2,7)

// [1, 2, 8, 4, 5, 6, 7, 3, 9]

```

### classifyArr

```js
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

```js
clone(arr|object);

```

### compose

```js
const a=x=>x+10;

const b=x=>x*10;

compose(b,a)(2) // 120

```

### copyToClipboard

```js
> copyToClipboard(text)

```

### createTextElement/createElement/createNode

```js
createTextElement(text)

createElement(type, props, ...children)

createNode({type:'',props:{}})

```

### curry

```js
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

const fn=(name,value)=>arr.filter(item=>item.name===name).filter(item=>item.value===value)

const a=curry(fn)('test1')

a('t3')

output: 

[
  {
    "name": "test1",
    "value": "t3"
  }
]

```

### cyclic

```js
cyclic(object) // true | false

```

### addDays/addMonths/addYears/addHours

```js
addDays(2,'2022-01-01') // Mon Jan 03 2022 08:00:00 GMT+0800 (??????????????????)

addMonths(3) // Sat Jun 25 2022 17:44:47 GMT+0800 (??????????????????)

```

### getLeaveTime

```js
getLeaveTime('2022-10-1') // '189???6??????12???11???'

```

### weekDate/monthDate

```js
weekDate()

output: 

[
  "2022-03-21T09:48:44.098Z",
  "2022-03-27T09:48:44.098Z"
]

```

### debounce

```js
debounce(func,delay=60)

```

### dlfile

```js
dlfile(url,name)

```

### emitter

```js
const {on,emit,off}=emitter()

```

### equal

```js
equal(a, b) // true|false

```

### filter

```js
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

filter(arr,'est1','name')

output: 

[
  {
    "name": "test1",
    "value": "t1"
  },
  {
    "name": "test1",
    "value": "t3"
  }
]

```

### filterList

```js
filterList(data,keyword,str2Dom/*????????????*/,fields='name',idKey='id',childKey='children',exact=false)

```

### findMax

```js
findMax('ghfdj53785bhb4289yb3b478') // 53785

```

### firstUpper

```js
firstUpper('hello world') // 'Hello world'

```

### fixRoute

```js
fixRoute('/a/b/e/') // /a/b/e

```

### flatten

```js
const arr=[
  {
    name:'test1',
    value:'t1',
    children: [
      {
        name:'test11',
        value:'t11',
      },
      {
        name:'test12',
        value:'t12',
      },
    ],
  },
  {
    name:'test2',
    value:'t2',
  },
  {
    name:'test1',
    value:'t3',
    children: [
      {
        name:'test31',
        value:'t31',
      },
      {
        name:'test32',
        value:'t32',
        children: [
          {
            name:'test321',
            value:'t321',
          },
        ],
      },
    ],
  },
  {
    name:'test2',
    value:'t4',
  },
];

flatten(arr)

output: 

[
  {
    "name": "test1",
    "value": "t1"
  },
  {
    "name": "test2",
    "value": "t2"
  },
  {
    "name": "test1",
    "value": "t3"
  },
  {
    "name": "test2",
    "value": "t4"
  },
  {
    "name": "test11",
    "value": "t11"
  },
  {
    "name": "test12",
    "value": "t12"
  },
  {
    "name": "test31",
    "value": "t31"
  },
  {
    "name": "test32",
    "value": "t32"
  },
  {
    "name": "test321",
    "value": "t321"
  }
]

```

### formatNum

```js
formatNum(12345678) // '12,345,678'

```

### getTime/formatTime

```js
getTime() // [2022, 3, 25, 18, 4, 36, 5]

formatTime() // '2022-03-25 18:04:36'

```

### fullScreen/watchScreen

```js
fullScreen(element)

watchScreen(callback) // ???????????????????????????

```

### getElementsSize

```js
const {width,height,top,left,...}=getElementsSize(ele);

```

### getOffset

```js
const {top,left}=getOffset(ele);

```

### getParams

```js
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

```js
const {width,height,top,left,...}=getPosition(ele);

```

### getSelected

```js
const arr=[
  {
    name:'test1',
    value:'t1',
    children: [
      {
        name:'test11',
        value:'t11',
      },
      {
        name:'test12',
        value:'t12',
      },
    ],
  },
  {
    name:'test2',
    value:'t2',
  },
  {
    name:'test1',
    value:'t3',
    children: [
      {
        name:'test31',
        value:'t31',
      },
      {
        name:'test32',
        value:'t32',
        children: [
          {
            name:'test321',
            value:'t321',
          },
        ],
      },
    ],
  },
  {
    name:'test2',
    value:'t4',
  },
];

getSelected(arr,'t32','value')

output: 

[
  {
    "name": "test1",
    "value": "t3"
  },
  {
    "name": "test32",
    "value": "t32"
  }
]

```

### getTextSize

```js
const {width,height,top,left,...}=getTextSize(text)

```

### getTouchPosition/getRelative

```js
const {touchX,touchY}=getTouchPosition(event)

const {x,y}= getRelative(event,ref)

```

### getType

```js
getType() // 'undefined'
getType('') // 'string'
getType(222) // 'number'
getType([]) // 'array'

```

### getValue

```js
const obj={
  a:{
    b:{
      c:4444
    },
    b1:{},
  },
}

getValue(obj,'a.b.c') // 4444

getValue(obj,'a.b.d') // undefined


```

### getViewportSize

```js
const {width,height}=getViewportSize(element)

```

### hasClass/addClass/removeClass/toggleClass

```js
hasClass(ele,'class1')
addClass(ele,'class1')
removeClass(ele,'class1')
toggleClass(ele,'class1')

```

### addNodes/addAtNext/addAtPos/editNodes/deleteNodes/moveNodes

```js
addNodes(tree,id,nodes,idKey='id',childKey='children')
addAtNext(tree,id,nodes,idKey='id',childKey='children')
addAtPos(tree,id,nodes,pos,idKey='id',childKey='children')
editNodes(tree,id,nodes,idKey='id',childKey='children')
deleteNodes(tree,id,idKey='id',childKey='children')
moveNodes(tree,fromId,toId,pos,idKey='id',childKey='children')

```

### hasProp

```js
const a={b:undefined}

hasProp(a,'b') // true

```

### isArray/isValidArr/isAsync/isObject/isFunction/isError/isRegExp/isElement/isUrl

```js

isArray([]) // true
isValidArr([1]) // true
isAsync(new Promise()) // true
isObject({}) // true
isFunction(()=>{}) // true
isError(new Error()) // true
isRegExp(/\d+/) // true
isElement(<span>1</span>) // true
isUrl('http://abc.com') // true

```


### isBrowser/isIE/isTouch

```js
isBrowser()
isIE()
isTouch()

```

### isReactComp/isReactEle/isRef

```js
isReactComp(value)
isReactEle(value)
isRef(value)

```

### memoize

```js
const fn=n=>console.log(n)
const m=memoize(fn)
m(3)
m(3)

// 3 ???????????????

```

### merge/mergeObj/mergeArr

```js
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

### obj2arr/arr2obj

```js
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

```js
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

json2str(c)

output: 

'{age=18, children={0={age=20}, 1={age=22}}}'

```

### once

```js
const t=()=>console.log('test');

const runOne=once(t);

runOne() // test
runOne() // ?????????

```

### params2data

```js
const a={
  name:'t1',
  age: 18,
  id:'123',
};

params2data(a); // FormData??{}

```

### params2str

```js
const a={
  name:'t1',
  age: 18,
  id:'123',
};

params2str(a); // '?name=t1&age=18&id=123'

```

### pick

```js
const a={
  name:'t1',
  age: 18,
  id:'123',
};

pick(a,['id','name']) // {id: '123', name: 't1'}

```

### promisify

```js
promisify(func)(...args)

```

### randNum/randStr/randColor/randTrue/randItem

```js
randNum(5) // 5
randStr(8) // 'czqx7vhu'
randColor() // '#39a645'
randTrue() // false
randItem([1,3,5,7,9]) // 3

```

### resize

```js
const {bind, unbind, destroy}=resize(element);

bind(callback);
unbind(callback);
destroy();

```

### scrollToTop/scrollToAnchor/scrollTop

```js
scrollToTop(top=0); // ?????????????????????
scrollToAnchor(ref); // ?????????????????????
scrollTop(); // ???????????????

```

### viewHeight/docHeight/isScrollBottom

```js
viewHeight(); // ????????????
docHeight(); // ????????????
isScrollBottom(); // ??????????????????

```

### selectedHandle

```js
selectedHandle((data,i,parentId)=>{
  console.log(data,i,parentId);
  return data[i]; // ??????id???item
})(arr,id);

```

### session

```js
const {get, set, rm, clear}=session;

get(name);
set(name,data)'
rm(name);
clear();

```

### setStyle

```js
setStyle(ele,styles={},reset=false);

```

### sleep/sleepSync

```js
await sleep();
await sleepSync();

```

### sort

```js
const a=[
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

output: 

[
  {
    "name": "t2",
    "age": 12
  },
  {
    "name": "t3",
    "age": 22
  },
  {
    "name": "t1",
    "age": 33
  }
]

```

### storage

```js
const {get, set, rm, clear}=storage;

get(name);
set(name,data)'
rm(name);
clear();

```

### createStore

```js
const {getState,setState,subscribe,clean}=createStore();

```

### str2code

```js
str2code('console.log(123)'); // 123

```

### str2Html

```js
str2Html('<a>link</a>'); // NodeList??[a]

```

### getExplore

```js
getExplore(); // 'Chrome: 99.0.4844.51'

```

### osType

```js
osType(); // 'MacOSX'

```

### sysLang

```js
sysLang(); // 'zh'

```

### deviceType

```js
deviceType(); // 'Desktop'

```

### throttle

```js
const throttleFn=throttle(fn,delay=60)

```

### getMonthDays

```js
getMonthDays(); // 31

```

### timestamp

```js
timestamp(); // 48620100.70000002

```

### traverItem

```js
traverItem((item,parent,index,hasChild)=>{
  console.log(item,parent,index,hasChild);
})(arr,childKey);

```

### traverList

```js
traverItem((data)=>{
  console.log(data);
})(arr,childKey);

```

### unique

```js
const a=[
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

output: 

[
  {
    "name": "t1",
    "age": 33
  },
  {
    "name": "t2",
    "age": 12
  }
]

```

### updateId

```js
const a=[
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

output: 

[
  {
    "name": "t1",
    "age": 33,
    "id": "0"
  },
  {
    "name": "t2",
    "age": 12,
    "id": "1"
  },
  {
    "name": "t3",
    "age": 22,
    "id": "2"
  }
]

```

### uuidv4

```js
uuidv4(); // '4839e86e-252f-4571-9982-351cd98cc875'

```

### validObj

```js
const a={
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

```js
watermark({
  container=document.body,
  width='220px',
  height='200px',
  textAlign='center',
  textBaseline='middle',
  font='20px microsoft yahei',
  fillStyle='rgba(202,202,202,0.4)',
  content='????????????',
  rotate='-30',
  zIndex=1000,
})

```

### wrapPromise

```js
const {read}=wrapPromise(promiseFn);

const result=read();

```
