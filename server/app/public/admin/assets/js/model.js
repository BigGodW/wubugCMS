import{h as t,a}from"./api.js";let r=(e=1)=>t({url:`${a.API_URL}/api/model/list?cur=${e}`,method:"get"}),o=e=>t({url:`${a.API_URL}/api/model/create`,method:"post",data:e}),s=(e,l)=>t({url:`${a.API_URL}/api/model/delete`,method:"post",data:{id:e,table_name:l}}),u=e=>t({url:`${a.API_URL}/api/model/update`,method:"post",data:e}),p=e=>t({url:`${a.API_URL}/api/model/detail?id=${e}`,method:"get"}),i=e=>t({url:`${a.API_URL}/api/model/hasUse?id=${e}`,method:"get"});export{p as a,o as c,s as d,i as h,r as l,u};
