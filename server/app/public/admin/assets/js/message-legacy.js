System.register(["./api-legacy.js"],(function(t,e){"use strict";var a,c;return{setters:[function(t){a=t.h,c=t.a}],execute:function(){t("l",(function(t){return a({url:"".concat(c.API_URL,"/api/message/list?cur=").concat(t,"&pageSize=10"),method:"get"})})),t("c",(function(t){return a({url:"".concat(c.API_URL,"/api/message/create"),method:"post",data:t})})),t("d",(function(t){return a({url:"".concat(c.API_URL,"/api/message/delete?id=").concat(t),method:"get"})})),t("u",(function(t){return a({url:"".concat(c.API_URL,"/api/message/update"),method:"post",data:t})})),t("a",(function(t){return a({url:"".concat(c.API_URL,"/api/message/detail?id=").concat(t),method:"get"})}))}}}));
