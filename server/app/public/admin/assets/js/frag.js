import{h as t,A as a}from"./index.js";let l=(e,r="")=>t({url:"".concat(a.BASE_API,"/api/frag/search?cur=").concat(e,"&keywords=").concat(r,"&pageSize=20"),method:"get"}),u=e=>t({url:"".concat(a.BASE_API,"/api/frag/create"),method:"post",data:e}),p=e=>t({url:"".concat(a.BASE_API,"/api/frag/delete?id=").concat(e),method:"get"}),s=e=>t({url:"".concat(a.BASE_API,"/api/frag/update"),method:"post",data:e}),A=e=>t({url:"".concat(a.BASE_API,"/api/frag/detail?id=").concat(e),method:"get"});export{p as a,u as c,A as d,l as s,s as u};
