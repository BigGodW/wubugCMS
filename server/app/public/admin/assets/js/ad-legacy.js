System.register(["./api-legacy.js"],(function(t,e){"use strict";var a,c;return{setters:[function(t){a=t.h,c=t.a}],execute:function(){t("s",(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return a({url:"".concat(c.API_URL,"/api/ad/search?cur=").concat(t,"&pageSize=10&keyword=").concat(e),method:"get"})})),t("c",(function(t){return a({url:"".concat(c.API_URL,"/api/ad/create"),method:"post",data:t})})),t("d",(function(t){return a({url:"".concat(c.API_URL,"/api/ad/delete?id=").concat(t),method:"get"})})),t("u",(function(t){return a({url:"".concat(c.API_URL,"/api/ad/update"),method:"post",data:t})})),t("a",(function(t){return a({url:"".concat(c.API_URL,"/api/ad/detail?id=").concat(t),method:"get"})}))}}}));
