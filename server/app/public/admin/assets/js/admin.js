import{h as a,A as e}from"./index.js";let t=t=>a({url:`${e.BASE_API}/api/admin/list?cur=${t}&pageSize=10`,method:"get"}),d=t=>a({url:`${e.BASE_API}/api/admin/create`,method:"post",data:t}),i=t=>a({url:`${e.BASE_API}/api/admin/delete?id=${t}`,method:"get"}),m=t=>a({url:`${e.BASE_API}/api/admin/update`,method:"post",data:t}),p=t=>a({url:`${e.BASE_API}/api/admin/detail?id=${t}`,method:"get"});export{i as a,d as c,p as d,t as l,m as u};
//# sourceMappingURL=admin.js.map
