System.register(["./index-legacy.js"],(function(e,t){"use strict";var i,d;return{setters:[e=>{i=e.c,d=e.A}],execute:function(){e("l",(e=>i({url:`${d.BASE_API}/api/friendlink/list?cur=${e}&pageSize=20`,method:"get"}))),e("c",(e=>i({url:`${d.BASE_API}/api/friendlink/create`,method:"post",data:e}))),e("a",(e=>i({url:`${d.BASE_API}/api/friendlink/delete?id=${e}`,method:"get"}))),e("u",(e=>i({url:`${d.BASE_API}/api/friendlink/update`,method:"post",data:e}))),e("d",(e=>i({url:`${d.BASE_API}/api/friendlink/detail?id=${e}`,method:"get"})))}}}));
