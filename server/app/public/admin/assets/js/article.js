import{e as a,A as t}from"./index.js";let c=(c=1,e="",o=0)=>a({url:"".concat(t.BASE_API,"/api/article/search?cur=").concat(c,"&pageSize=20&keyword=").concat(e,"&cid=").concat(o),method:"get"}),e=c=>a({url:"".concat(t.BASE_API,"/api/article/create"),method:"post",data:c}),o=c=>a({url:"".concat(t.BASE_API,"/api/article/delete?id=").concat(c),method:"get"}),i=c=>a({url:"".concat(t.BASE_API,"/api/article/delfile?url=").concat(c),method:"get"}),r=c=>a({url:"".concat(t.BASE_API,"/api/article/update"),method:"post",data:c}),d=c=>a({url:"".concat(t.BASE_API,"/api/article/detail?id=").concat(c),method:"get"}),l=c=>a({url:"".concat(t.BASE_API,"/api/article/findField?cid=").concat(c),method:"get"}),n=()=>a({url:"".concat(t.BASE_API,"/api/article/tongji"),method:"get"});export{d as a,o as b,e as c,i as d,l as f,c as s,n as t,r as u};
