System.register(["./index-legacy.js"],(function(e,t){"use strict";var d,i;return{setters:[e=>{d=e.c,i=e.A}],execute:function(){e("l",((e,t=1)=>d({url:`${i.BASE_API}/api/field/list?cur=${t}&model_id=${e}`,method:"get"}))),e("c",(e=>d({url:`${i.BASE_API}/api/field/create`,method:"post",data:e}))),e("a",(e=>d({url:`${i.BASE_API}/api/field/delete?id=${e}`,method:"get"}))),e("u",(e=>d({url:`${i.BASE_API}/api/field/update`,method:"post",data:e}))),e("d",(e=>d({url:`${i.BASE_API}/api/field/detail?id=${e}`,method:"get"})))}}}));
