import{h as t,A as r}from"./index.js";let d=(e=1,a="",l=0)=>t({url:"".concat(r.BASE_API,"/api/article/search?cur=").concat(e,"&pageSize=20&keyword=").concat(a,"&cid=").concat(l),method:"get"}),u=e=>t({url:"".concat(r.BASE_API,"/api/article/create"),method:"post",data:e}),A=e=>t({url:"".concat(r.BASE_API,"/api/article/delete?id=").concat(e),method:"get"}),c=e=>t({url:"".concat(r.BASE_API,"/api/article/delfile?url=").concat(e),method:"get"}),o=e=>t({url:"".concat(r.BASE_API,"/api/article/update"),method:"post",data:e}),p=e=>t({url:"".concat(r.BASE_API,"/api/article/detail?id=").concat(e),method:"get"}),s=e=>t({url:"".concat(r.BASE_API,"/api/article/findField?cid=").concat(e),method:"get"}),$=()=>t({url:"".concat(r.BASE_API,"/api/article/tongji"),method:"get"});export{p as a,A as b,u as c,c as d,s as f,d as s,$ as t,o as u};
