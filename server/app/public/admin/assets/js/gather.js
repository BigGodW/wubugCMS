import{h as e,A as a}from"./index.js";let l=t=>e({url:"".concat(a.BASE_API,"/api/gather/getArticle"),method:"get",params:t}),d=t=>e({url:"".concat(a.BASE_API,"/api/gather/create"),method:"post",data:t}),i=t=>e({url:"".concat(a.BASE_API,"/api/gather/update"),method:"post",data:t}),u=t=>e({url:"".concat(a.BASE_API,"/api/gather/list?cur=").concat(t,"&pageSize=20"),method:"get"}),A=t=>e({url:"".concat(a.BASE_API,"/api/gather/delete?id=").concat(t),method:"get"}),p=t=>e({url:"".concat(a.BASE_API,"/api/gather/detail?id=").concat(t),method:"get"});export{A as a,d as c,p as d,l as g,u as l,i as u};
