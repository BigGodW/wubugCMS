System.register(["./index-legacy.js"],(function(e,t){"use strict";var s,a;return{setters:[e=>{s=e.d,a=e.A}],execute:function(){e("l",(e=>s({url:`${a.BASE_API}/api/sysRole/list?cur=${e}&pageSize=20`,method:"get"}))),e("c",(e=>s({url:`${a.BASE_API}/api/sysRole/create`,method:"post",data:e}))),e("a",(e=>s({url:`${a.BASE_API}/api/sysRole/delete?id=${e}`,method:"get"}))),e("u",(e=>s({url:`${a.BASE_API}/api/sysRole/update`,method:"post",data:e}))),e("d",(e=>s({url:`${a.BASE_API}/api/sysRole/detail?id=${e}`,method:"get"})))}}}));
