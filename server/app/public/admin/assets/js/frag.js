import{h as a,a as t}from"./api.js";let l=(e,r="")=>a({url:`${t.API_URL}/api/frag/search?cur=${e}&fragSize=10&keyword=${r}`,method:"get"}),u=e=>a({url:`${t.API_URL}/api/frag/create`,method:"post",data:e}),p=e=>a({url:`${t.API_URL}/api/frag/delete?id=${e}`,method:"get"}),i=e=>a({url:`${t.API_URL}/api/frag/update`,method:"post",data:e}),s=e=>a({url:`${t.API_URL}/api/frag/detail?id=${e}`,method:"get"});export{s as a,u as c,p as d,l as s,i as u};
