import{h as a,A as e}from"./index.js";let d=(d,t="")=>a({url:`${e.BASE_API}/api/ad/search?cur=${d}&pageSize=10&keyword=${t}`,method:"get"}),t=d=>a({url:`${e.BASE_API}/api/ad/create`,method:"post",data:d}),r=d=>a({url:`${e.BASE_API}/api/ad/delete?id=${d}`,method:"get"}),s=d=>a({url:`${e.BASE_API}/api/ad/update`,method:"post",data:d}),i=d=>a({url:`${e.BASE_API}/api/ad/detail?id=${d}`,method:"get"});export{r as a,t as c,i as d,d as s,s as u};
//# sourceMappingURL=ad.js.map
