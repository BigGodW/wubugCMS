import{d as t,A as a}from"./index.js";let c=c=>t({url:"".concat(a.BASE_API,"/api/collect/getPages"),method:"post",data:c}),e=c=>t({url:"".concat(a.BASE_API,"/api/collect/getArticle"),method:"post",data:c}),o=c=>t({url:"".concat(a.BASE_API,"/api/collect/create"),method:"post",data:c}),l=c=>t({url:"".concat(a.BASE_API,"/api/collect/update"),method:"post",data:c}),d=c=>t({url:"".concat(a.BASE_API,"/api/collect/list?cur=").concat(c,"&pageSize=20"),method:"get"}),s=c=>t({url:"".concat(a.BASE_API,"/api/collect/delete?id=").concat(c),method:"get"}),A=c=>t({url:"".concat(a.BASE_API,"/api/collect/detail?id=").concat(c),method:"get"});export{e as a,s as b,o as c,A as d,c as g,d as l,l as u};
