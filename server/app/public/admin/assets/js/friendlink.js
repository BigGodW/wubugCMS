import{h as t,a}from"./api.js";let i=e=>t({url:`${a.API_URL}/api/friendlink/list?cur=${e}&pageSize=10`,method:"get"}),l=e=>t({url:`${a.API_URL}/api/friendlink/create`,method:"post",data:e}),d=e=>t({url:`${a.API_URL}/api/friendlink/delete?id=${e}`,method:"get"}),n=e=>t({url:`${a.API_URL}/api/friendlink/update`,method:"post",data:e}),p=e=>t({url:`${a.API_URL}/api/friendlink/detail?id=${e}`,method:"get"});export{p as a,l as c,d,i as l,n as u};
