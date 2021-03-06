## fetch的简单封装

前后端交互时，大部分场景只需关注：

1. 接口地址
2. 请求协议（请求方式、请求头）
3. 请求参数

所以我们只需关注地址、协议、参数，其它的如请求前的头部校验，请求后的数据处理、信息提示等，都可以作统一处理，方便我们开发。

### 接口请求

我们只需定义好地址、协议，然后在调用时传入所需参数即可。示例如下：

```javascript
const api={
  list:{
    url:'/api/getList',
  },
  edit:{
    url:'/api/editItem',
    method:'post',
  },
  del:{
    url:'/api/deleteItem',
    method:'post',
  },
};
const {list,edit,del}=api;
export const getList=data=>fetch({...list,params});
export const editItem=data=>fetch({...edit,data});
export const deleteItem=form=>fetch({...del,form});

```

### 请求前后处理

请求返回数据，我们可以统一处理错误提示信息。

```javascript
import {message} from 'antd';
import {fetcher} from '@huxy/utils';
const handler=response=>response.json().then(result=>{
  const {data,msg,code}=result;
  if(code!=='000000'){
    message.error(msg);
    throw msg;
  }
  return result;
}).catch(error=>{
  message.error(error.message);
  throw error;
});
const fetchApi=fetcher(handler);

```

请求前，我们可以统一加入auth校验。

```javascript
const headers={
  'Authorization':'123',
};
const fetch=({method,url,...opt})=>fetchApi(method)(url,{...opt,headers});

```

处理超时和取消请求。

```javascript
import {cancelablePromise} from '@huxy/utils';
const suspenseConfig={
  delay:8000,
  timeoutMsg:'请求超时！',
  cancelMsg:'请求已取消！',
};
const handleFetch=data=>{
  const {promiseFn,cancelFn}=cancelablePromise(fetch(data));
  setTimeout(()=>{
    cancelFn({timeout:suspenseConfig.timeoutMsg});
  },suspenseConfig.delay);
  return promiseFn;
};

```

可根据自己项目需要，统一处理一些通用功能，如节流防抖、请求时loading、请求后信息提示、返回数据格式化

### 使用示例

```javascript
const Index=props=>{
  const [list,updateList]=useAsync({});
  const page=useRef({current:1,size:10});
  const update=useCallback(params=>updateList({table:getList(params)}),[]);
  useEffect(()=>{
    update(page.current);
  },[]);
  const handleEdit=async item=>{
    const {data,msg}=await editItem(item);
    message.success(msg);
    update(page.current);
  };
  const handleDelete=async item=>{
    const {msg}=await deleteItem({id:item.id});
    message.success(msg);
    update(page.current);
  };
  const {table}=list;
  return <div className="">
    <Table
      size="small"
      bordered
      columns={columns(page.current,handleEdit,handleDelete)}
      dataSource={table?.data?.records}
      loading={!table}
      rowKey="id"
    />
  </div>;
};

```

### 实现

使用fetch，封装一些常用参数。

```javascript
const baseFetch=handler=>method=>(url,opt={})=>{
  const {headers,...restOpt}=opt;
  const {body,data,form,params}=restOpt||{};
  const defaultHeaders={'Content-Type':'application/json'};
  if(!body){
    if(data){
      restOpt.body=JSON.stringify(data);
    }else if(form){
      restOpt.body=params2data(form);
    }
  }
  if(params){
    url=`${url}${params2str(params)}`;
  }
  return fetch(url,{
    method:method,
    headers:{
      ...defaultHeaders,
      ...headers,
    },
    ...restOpt,
  }).then(response=>handler(response))
    .catch(error=>{
      throw Error(error);
    });
};

export const fetcher=handler=>method=>baseFetch(handler)((method||'get').toUpperCase());

```

#### 使用

```javascript
fetcher(handler)(method)(url,opt);

```

opt传入params、form、data、body不同的值时，会自动转换格式。















