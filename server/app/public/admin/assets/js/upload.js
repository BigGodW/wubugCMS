import{c as a,A as o}from"./index.js";import{f as t}from"./sys_app.js";let e=e=>t().then((t=>{if(200===t.code){let{uploadWay:c}=t.data,l={1:"".concat(o.BASE_API,"/api/upload"),2:"".concat(o.BASE_API,"/api/qiniu/upload")};return a({url:l[c],method:"post",headers:{"Content-type":"multipart/form-data"},data:e})}console.log(t)})).catch((a=>(console.log(a),Promise.reject(a)))),c=()=>t().then((a=>{if(200===a.code){let{uploadWay:t}=a.data;return{1:"".concat(o.BASE_API,"/api/upload"),2:"".concat(o.BASE_API,"/api/qiniu/upload")}[t]}console.log(a)})).catch((a=>(console.log(a),Promise.reject(a))));export{e as a,c as u};
