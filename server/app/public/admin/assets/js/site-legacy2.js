System.register(["./index-legacy.js"],(function(e,t){"use strict";var i,r;return{setters:[e=>{i=e.h,r=e.A}],execute:function(){e("s",(()=>i({url:`${r.BASE_API}/api/site/find`,method:"get"}))),e("u",(e=>i({url:`${r.BASE_API}/api/site/update`,method:"post",data:e}))),e("r",(()=>i({url:`${r.BASE_API}/api/site/runEnv`,method:"get"})))}}}));
