System.register(["./@vue-legacy.js","./pinia-legacy.js","./pinia-plugin-persist-legacy.js","./element-plus-legacy.js","./dayjs-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./js-cookie-legacy.js","./@element-plus-legacy.js","./saduocss-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./@vueuse-legacy.js","./@ctrl-legacy.js","./@popperjs-legacy.js","./memoize-one-legacy.js","./escape-html-legacy.js","./normalize-wheel-es-legacy.js"],(function(e,t){"use strict";var a,n,i,o,r,l,d,c,s,p,u,m,g,v,h,f,w,b,x,y,k,j,C,S,_,I,A,B,E,z,L,M,P,F,O,$,T,D,U,N,H,R,q,W,G,V,X,Y,Z;return{setters:[e=>{a=e.af,n=e.o,i=e.X,o=e.W,r=e.u,l=e.U,d=e.c,c=e.b,s=e.L,p=e.a1,u=e.a2,m=e.a,g=e.aa,v=e.F,h=e.Y,f=e.h,w=e.t,b=e._,x=e.k,y=e.w,k=e.$,j=e.a3,C=e.Z,S=e.at},e=>{_=e.d,I=e.c},e=>{A=e.i},e=>{B=e.E,E=e.z,z=e.a,L=e.b,M=e.c,P=e.d,F=e.e,O=e.f,$=e.g,T=e.h,D=e.i,U=e.j,N=e.k,H=e.l,R=e.m},null,e=>{q=e.u,W=e.a,G=e.c,V=e.b},e=>{X=e.a},e=>{Y=e.a},e=>{Z=e.E},null,null,null,null,null,null,null,null,null],execute:function(){var J=document.createElement("style");J.textContent="nav a.router-link-exact-active[data-v-ee806c20]{color:var(--color-text)}nav a.router-link-exact-active[data-v-ee806c20]:hover{background-color:transparent}nav a[data-v-ee806c20]{display:inline-block;padding:0 1rem;border-left:1px solid var(--color-border)}nav a[data-v-ee806c20]:first-of-type{border:0}.icon[data-v-53346c97]{width:28px;height:28px;border-radius:50%;background-color:#f9f9f9;padding:3px}.logo[data-v-53346c97]{background-image:linear-gradient(300deg,#778cca,#65de83);padding:10px;color:#fff;font-size:20px;font-weight:lighter;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;transition:width .3s linear;display:flex;justify-content:center;align-items:center}.ico-nav[data-v-c38ddda6]{width:40px;height:40px;border-radius:15px;box-shadow:inset 0 0 5px #f2f2f2;padding:4px;display:inline-block;margin-right:5px}.ico-nav img[data-v-c38ddda6]{width:100%}.el-sub-menu .el-menu-item[data-v-c38ddda6]{margin-left:10px}.el-sub-menu.is-active[data-v-c38ddda6] .el-icon,.el-sub-menu.is-active[data-v-c38ddda6] .el-sub-menu__title,.el-sub-menu.is-active[data-v-c38ddda6] .el-sub-menu__icon-arrow,[data-v-c38ddda6] .is-active{color:#165dff}.el-menu-vertical-demo[data-v-9687d3bd]:not(.el-menu--collapse){width:200px;min-height:400px}.el-menu[data-v-9687d3bd]{border-right:0px}[data-v-7d7c521c] .el-badge__content.is-fixed.is-dot{top:5px;right:10px}.navbar-cont[data-v-7d7c521c]{padding:8px 20px;display:flex;justify-content:end;gap:10px}.breadcrumb-leave-active[data-v-676e3626]{position:absolute}.breadcrumb[data-v-676e3626]{display:inline-block;font-size:14px;line-height:50px;margin-left:8px}.breadcrumb .no-redirect[data-v-676e3626]{cursor:text}.breadcrumb .redirect[data-v-676e3626]{font-weight:bolder}.app-wrapper[data-v-48727ce6]{display:flex;width:100%;height:100%}.app-wrapper .sidebar[data-v-48727ce6]{height:100vh;border-right:1px solid #f9f5f5;transition:all .5s}.app-wrapper .sidebar-container[data-v-48727ce6]{height:100%;background-color:var(--vt-c-white);width:200px!important}.app-wrapper .sidebar-container-menu[data-v-48727ce6]:not(.el-menu--collapse){width:200px}.app-wrapper .sidebar-container .el-menu[data-v-48727ce6]{border:none}.app-wrapper .main-container[data-v-48727ce6]{flex:1;display:flex;flex-direction:column;height:100vh;overflow:hidden}.app-wrapper .main-container .header .navbar[data-v-48727ce6]{background-color:var(--vt-c-white);border-bottom:1px solid var(--color-border)}.app-wrapper .main-container .header .navbar .ico-collapse[data-v-48727ce6]{width:42px;height:42px;cursor:pointer;font-size:16px;color:#1890ff}.app-wrapper .main-container .header .tags-view[data-v-48727ce6]{height:34px;background:#12efff}.app-wrapper .main-container .app-main[data-v-48727ce6]{height:calc(100vh - 51px);padding:10px;background-color:#f2f3f5;overflow:auto}.app-wrapper .main-container .app-main .container[data-v-48727ce6]{background-color:#fff;border-radius:6px;padding:10px;min-height:calc(100vh - 71px)}:root{--vt-c-white: #ffffff;--vt-c-white-soft: #f8f8f8;--vt-c-white-mute: #f2f2f2;--vt-c-black: #181818;--vt-c-black-soft: #222222;--vt-c-black-mute: #282828;--vt-c-indigo: #2c3e50;--vt-c-divider-light-1: rgba(60, 60, 60, .29);--vt-c-divider-light-2: rgba(60, 60, 60, .12);--vt-c-divider-dark-1: rgba(84, 84, 84, .65);--vt-c-divider-dark-2: rgba(84, 84, 84, .48);--vt-c-text-light-1: var(--vt-c-indigo);--vt-c-text-light-2: rgba(60, 60, 60, .66);--vt-c-text-dark-1: var(--vt-c-white);--vt-c-text-dark-2: rgba(235, 235, 235, .64);--blue:#324157;--light-blue:#3A71A8;--red:#C03639;--pink: #E65D6E;--green: #30B08F;--tiffany: #4AB7BD;--yellow:#FEC171;--panGreen: #30B08F;--menuText:#bfcbd9;--menuActiveText:#409EFF;--subMenuActiveText:#f4f4f5;--menuBg:#304156;--menuHover:#263445;--subMenuBg:#1f2d3d;--subMenuHover:#001528;--sideBarWidth: 210px}:root{--color-background: var(--vt-c-white);--color-background-soft: var(--vt-c-white-soft);--color-background-mute: var(--vt-c-white-mute);--color-border: var(--vt-c-divider-light-2);--color-border-hover: var(--vt-c-divider-light-1);--color-heading: var(--vt-c-text-light-1);--color-text: var(--vt-c-text-light-1)}@media (prefers-color-scheme: dark){:root{--color-background: var(--vt-c-black);--color-background-soft: var(--vt-c-black-soft);--color-background-mute: var(--vt-c-black-mute);--color-border: var(--vt-c-divider-dark-2);--color-border-hover: var(--vt-c-divider-dark-1);--color-heading: var(--vt-c-text-dark-1);--color-text: var(--vt-c-text-dark-2)}}@font-face{font-family:chanyue;src:url("+new URL("../../admin/font/chanyue.ttf",t.meta.url).href+");font-weight:400;font-style:normal}body{min-height:100vh;color:var(--color-text);background:var(--color-background);transition:color .5s,background-color .5s;line-height:1.6;font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-size:15px;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.c-fff{color:var(--vt-c-white)}.c-a1a3aa{color:#a1a3aa}.search{background-color:#f7f7f7;border:1px solid #f7f2f2;border-radius:5px}.avatar-uploader-icon{font-size:28px;color:#8c939d;width:100px;height:100px;text-align:center}.avatar-uploader .el-upload{border:1px dashed #dcdfe6;border-radius:6px;cursor:pointer;position:relative;overflow:hidden;transition:.2s}.el-button--primary{background:center center #4A54FF;background-image:linear-gradient(315deg,#6772FF 0,#00F9E5 100%);background-size:104% 104%;color:#fff;border:none}.avatar-uploader{width:32px;height:32px}.avatar-uploader-icon{width:31px;height:31px}.tox-tinymce,.el-cascader,.el-select,.el-input,.el-select-v2{width:100%!important}.w-80{width:80px!important}\n",document.head.appendChild(J);const K=e("_",((e,t)=>{const a=e.__vccOpts||e;for(const[n,i]of t)a[n]=i;return a})),Q=K({__name:"App",setup(e){const t=E;return(e,d)=>{const c=a("router-view");return n(),i(r(B),{size:"","z-index":3e3,locale:r(t)},{default:o((()=>[l(c)])),_:1},8,["locale"])}}},[["__scopeId","data-v-ee806c20"]]),ee=function(e,t,a){return e()},te={},ae={version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"100px",height:"100px",viewBox:"0 0 100 100","enable-background":"new 0 0 100 100","xml:space":"preserve"},ne=[c('<g enable-background="new"><g><g><path fill-rule="evenodd" clip-rule="evenodd" fill="#6FB6E5" d="M80.016,82.438c0,0-1.72-4.671-2.309-5.946\n\t\t\t\tc-0.588-1.276-2.799-2.968-3.316-3.046c-0.52-0.079-3.409-0.045-3.75,0c0,0-1.732,1.457-1.875,3.48L66.458,87.95\n\t\t\t\tc0,0-0.413,2.156-0.288,2.757c0.125,0.6,0.801,2.093,3.028,1.16c2.227-0.934,8.364-4.062,8.364-4.062\n\t\t\t\tS80.465,86.291,80.016,82.438z"></path></g></g></g><g enable-background="new"><g><g><path fill-rule="evenodd" clip-rule="evenodd" fill="#2266B2" d="M26.652,33.413c-0.23-0.73-1.257-2.802-1.442-3.191\n\t\t\t\tc-0.185-0.39-0.721-1.256-1.442-1.16c-0.721,0.095-1.154,1.016-1.154,1.016c-0.275,0.91-0.013,1.541,0.145,2.03\n\t\t\t\ts1.875,2.756,1.875,2.756s1.51,2.262,1.875,2.611c0.365,0.349,0.866,0.145,0.866,0.145\n\t\t\t\tC27.643,37.171,27.152,34.805,26.652,33.413z"></path></g></g></g><g enable-background="new"><g><g><path fill-rule="evenodd" clip-rule="evenodd" fill="#2266B2" d="M14.537,25.146c-0.801-1.511-2.452-1.741-2.452-1.741\n\t\t\t\tc-2.019,0.703-2.164,2.901-2.164,2.901s-0.02,1.323,0.145,2.756c0.732,1.318,1.866,0.84,2.164,0.725\n\t\t\t\tc0.297-0.114,0.553-0.14,0.865-0.29c0.313-0.149,1.557-0.313,2.019-1.74S14.537,25.146,14.537,25.146z"></path></g></g></g><g enable-background="new"><g><g><path fill-rule="evenodd" clip-rule="evenodd" fill="#3882C5" d="M26.796,18.618c-0.081-0.952-0.384-2.248-1.298-3.917\n\t\t\t\tc-0.914-1.668-4.039-1.74-4.039-1.74c-0.288-0.063-2.884,0.336-3.75,1.45c-0.866,1.115-1.307,2.285-1.875,4.352\n\t\t\t\tc-0.568,2.067-0.145,3.627-0.145,3.627c1.172,2.792,3.75,4.224,5.625,4.496c1.875,0.271,3.065-0.798,3.75-1.306\n\t\t\t\ts1.793-2.193,1.875-2.9C27.021,21.973,26.877,19.569,26.796,18.618z"></path></g></g></g><g enable-background="new"><g><g><path fill-rule="evenodd" clip-rule="evenodd" fill="#59B431" d="M30.979,4.113c-0.353,0.236-5.142,2.862-6.202,3.916\n\t\t\t\ts-0.721,2.321-0.721,2.321c0.573,1.438,3.099,1.553,3.605,1.45c0.507-0.103,2.099-1.168,2.452-1.74\n\t\t\t\tc0.353-0.573,1.009-2.466,1.009-2.466s0.591-1.918,0.577-2.756C31.686,4,30.979,4.113,30.979,4.113z"></path></g></g></g><g enable-background="new"><g><g><path fill-rule="evenodd" clip-rule="evenodd" fill="#75BD46" d="M24.488,38.635c-2.253-3.373-4.741-5.966-5.769-6.527\n\t\t\t\tc-1.027-0.563-2.957-0.979-3.75-0.726c-0.793,0.254-2.74,0.87-2.74,0.87c-2.308,0.363-4.327,2.031-4.327,2.031\n\t\t\t\tC5,36.64,6.46,40.665,6.46,40.665c0.948,3.605,2.596,4.206,2.596,4.206l9.519,2.031l5.192,1.306c0,0,5.169,1.265,5.914,1.45\n\t\t\t\tc0.744,0.186,2.242,0.181,2.452,0C32.024,49.423,26.742,42.007,24.488,38.635z"></path></g></g></g><g enable-background="new"><g><g><path fill-rule="evenodd" clip-rule="evenodd" fill="#B2D247" d="M19.152,52.85c-1.112-3.688-2.658-3.627-4.759-4.207\n\t\t\t\ts-9.23-2.03-9.23-2.03l0.289,5.076c-0.124,2.093,2.019,9.139,2.019,9.139c0.371,4.351,4.471,5.076,4.471,5.076\n\t\t\t\tc2.72,0.249,4.739-0.414,5.913-1.16s1.586-2.756,1.586-2.756S19.296,56.683,19.152,52.85z"></path></g></g></g><g enable-background="new"><g><g><path fill-rule="evenodd" clip-rule="evenodd" fill="#F6EE6B" d="M40.642,60.972c0.024-0.362-2.74-3.191-2.74-3.191\n\t\t\t\tc-1.635-2.756-6.779-5.366-6.779-5.366l-4.759-1.016c-4.063-1.185-4.615,2.031-4.615,2.031v8.558\n\t\t\t\tc0.385,1.861,3.173,2.756,3.173,2.756l9.663-1.16C41.435,63.22,40.618,61.334,40.642,60.972z"></path></g></g></g><g enable-background="new"><g><g><path fill-rule="evenodd" clip-rule="evenodd" fill="#5675B9" d="M19.873,75.187c0.048-4.424-1.009-5.802-1.009-5.802\n\t\t\t\tc-1.395-1.861-4.904-0.87-4.904-0.87c-2.74,0.652-1.73,3.19-1.73,3.19s4.567,6.552,5.48,7.397c0.913,0.847,1.586,0.58,1.586,0.58\n\t\t\t\tC20.402,79.175,19.873,75.187,19.873,75.187z"></path></g></g></g><g enable-background="new"><g><g><path fill-rule="evenodd" clip-rule="evenodd" fill="#F08921" d="M38.911,65.469l-12.692,1.305\n\t\t\t\tc-3.836,0.783-4.039,4.062-4.039,4.062l0.433,10.733c0.462,3.336,3.173,4.642,3.173,4.642c0.98,0.929,6.922,1.016,6.922,1.016\n\t\t\t\tl5.625-3.626c2.654-1.77,3.605-5.947,3.605-5.947l0.433-8.848C41.968,65.149,38.911,65.469,38.911,65.469z"></path></g></g></g><g enable-background="new"><g><g><path fill-rule="evenodd" clip-rule="evenodd" fill="#CADD68" d="M53.735,69.463c-0.036-0.026-0.074-0.053-0.113-0.078\n\t\t\t\tl-3.462-1.741l-5.192-3.046l-0.577,11.895c0,0,0.173,1.683,2.163,1.305l7.5-4.932C54.055,72.865,55.58,70.802,53.735,69.463z"></path></g></g></g><g enable-background="new"><g><g><path fill-rule="evenodd" clip-rule="evenodd" fill="#9AC82E" d="M64.727,72.865l-5.769,0.291\n\t\t\t\tc-1.846,0.231-3.173,1.16-3.173,1.16l-7.067,4.786c-4.183,2.002-4.904,6.963-4.904,6.963l0.145,5.222\n\t\t\t\tc1.038,2.756,2.74,3.336,2.74,3.336s8.538,0.377,11.971,0c3.432-0.377,4.903-4.352,4.903-4.352l2.308-11.894\n\t\t\t\tC66.861,72.837,64.727,72.865,64.727,72.865z"></path></g></g></g><g enable-background="new"><g><g><path fill-rule="evenodd" clip-rule="evenodd" fill="#E94E4F" d="M38.19,86.5l-3.317,2.466c-1.514,1.645,0.577,2.756,0.577,2.756\n\t\t\t\th3.028c1.635-0.072,2.885-1.74,2.885-1.74l0.144-2.466C40.762,84.47,38.19,86.5,38.19,86.5z"></path></g></g></g><g enable-background="new"><g><g><path fill-rule="evenodd" clip-rule="evenodd" fill="#3882C5" d="M94.87,67.209l-12.259,4.786\n\t\t\t\tc-2.98,1.161-2.164,4.642-2.164,4.642l2.164,5.077c2.02,1.571,3.461-0.436,3.461-0.436l9.375-12.619\n\t\t\t\tC96,66.967,94.87,67.209,94.87,67.209z"></path></g></g></g>',14)],ie=e("a",K(te,[["render",function(e,t){return n(),d("svg",ae,ne)}]])),oe=s({components:{IconLogo:ie},props:{isCollapse:{type:Boolean,default:!0}},data:()=>({}),created(){},methods:{}}),re={class:"logo"},le=K(oe,[["render",function(e,t,a,i,o,r){const c=ie;return n(),d("h1",re,[l(c,{class:"icon mr-10"}),p(m("span",null,"禅悦系统cms",512),[[u,!e.isCollapse]])])}],["__scopeId","data-v-53346c97"]]),de=K({name:"SidebarItem",props:{data:{type:Array,default:()=>[]}},data:()=>({}),created(){},methods:{goto(e){if(e?.children?.length>0)return!1;this.$router.push({path:e.path,query:e.query})}}},[["render",function(e,t,r,c,s,p){const u=z,x=a("SidebarItem"),y=L,k=M;return n(!0),d(v,null,g(r.data,((e,t)=>(n(),d(v,{key:e.path},[e?.children?.length>0&&e.meta.isShow?(n(),i(y,{key:0,index:e.path},{title:o((()=>[e?.meta?.icon?(n(),i(u,{key:0},{default:o((()=>[(n(),i(h(e.meta.icon)))])),_:2},1024)):f("",!0),m("span",null,w(e?.meta?.title),1)])),default:o((()=>[l(x,{data:e.children},null,8,["data"])])),_:2},1032,["index"])):e.meta.isShow?(n(),i(k,{key:1,index:e.path},{title:o((()=>[b(w(e?.meta?.title),1)])),default:o((()=>[e?.meta?.icon?(n(),i(u,{key:0},{default:o((()=>[(n(),i(h(e.meta.icon)))])),_:2},1024)):f("",!0)])),_:2},1032,["index"])):f("",!0)],64)))),128)}],["__scopeId","data-v-c38ddda6"]]),ce=e("s",((e="token",t)=>{Y.set(e,t)})),se=e("g",((e="token")=>Y.get(e)));let pe=e("b",(e=>{for(let t of e)t.label=t.name,t.value=t.id,t.children&&pe(t.children);return e})),ue=e("t",((e,t=0,a=1)=>{let n=[];return e.forEach(((i,o)=>{i.pid==t&&(i.leval=a,i.children=ue(e,i.id,a+1),n.push(i))})),n}));e("e",((e,t)=>{const a=[];let n=(e,t)=>{for(let i,o=0;o<t.length;o++)i=t[o],i.id==e&&(a.unshift(i.id),0!=i.pid&&n(i.pid,t))};return n(e,t),a})),e("c",(e=>{let t=/src=[\'\"]?([^\'\"]*)[\'\"]?/i,a=e.match(/<img.*?(?:>|\/>)/gi),n=[];if(a)for(let i=0;i<a.length;i++){let e=a[i].match(t);e[1]&&n.push(e[1])}return n})),e("f",(e=>e.replace(/<img[^>]+src="([^">]+)"/g,(function(e,t){return t.startsWith("public")&&(t=t.replace("public","/public")),'<img src="'+t+'"'})))),e("d",(e=>{let t=e.indexOf("</p>");-1!==t&&(e=e.substring(0,t+4));let a=document.createElement("div");a.innerHTML=e;let n=a.textContent;if(n.length>225){let e=n.lastIndexOf("。",255);-1!==e&&(n=n.slice(0,e+1))}return a.remove(),n})),X.defaults.headers.post["Content-Type"]="application/json; charset=utf-8",X.defaults.crossDomain=!0,X.defaults.withCredentials=!0,X.defaults.timeout=1e4;let me=e("h",X.create({baseURL:""}));me.interceptors.request.use((e=>{const{token:t}=be();return t&&(e.headers.auth=t),e}),(e=>{console.log(e),Promise.reject(e||"网络异常")})),me.interceptors.response.use((e=>{const{code:t,data:a,message:n}=e;return 0===a.code&&(console.log("data->",a),"TokenExpiredError"==a.msg.name?P({message:"登录失效，请重新登录",type:"warning"}):P.success(a.msg),be().logout(),alert(1),location.reload()),Promise.resolve(a)}),(e=>{console.warn(e);const{response:t}=e;return t&&t.status,Promise.reject(e)})),me.jsonp=function({url:e,data:t={}}){let a=+new Date;const n=t.callback?t.callback:`light_${a}`;t.callback=n;const i=document.createElement("script");return i.setAttribute("src",e+"?"+function(e={}){const t=Object.keys(e),a=Object.values(e);return t.map(((e,t)=>e+"="+a[t])).join("&")}(t)),document.body.appendChild(i),new Promise(((e,t)=>{window[n]=t=>{e(t),i&&document.body.removeChild(i),delete window[n]},i.onerror=function(e){t(e)}}))};let ge={pre:{BASE_API:""},prd:{BASE_API:""}};console.log("api[env]",ge.pre);const ve=e("A",ge.pre);class he{static API=ve.BASE_API;version(){return"v.1.0"}static get(e={}){return me({url:`${he.API}/api/get`,method:"GET",params:e})}static post(e={}){return me({url:`${he.API}/api/post`,method:"POST",data:e})}static put(e={}){return me({url:`${he.API}/api/put`,method:"PUT",data:e})}static patch(e={}){return me({url:`${he.API}/api/patch`,method:"PATCH",data:e})}static delete(){return me({url:`${he.API}/api/delete?id=1`,method:"Delete"})}static upload=e=>me({url:`${he.API}/api/delete?id=1`,method:"post",headers:{"Content-type":"multipart/form-data"},data:e})}class fe extends he{constructor(e){super(e)}static toLogin(e){return me({url:`${ve.BASE_API}/api/admin/login`,method:"post",data:e})}static userInfo(){return new Promise(((e,t)=>{setTimeout((()=>{e({code:200,data:{userId:"123456",userName:"mingkong",nickName:"明空",role:"admin"}})}),300)}))}static menuList(){return new Promise(((e,t)=>{setTimeout((()=>{e({code:200,data:Re})}),300)}))}}const we=Object.assign({"/src/views/admin/add.vue":()=>ee((()=>t.import("./add-legacy.js")),0,t.meta.url),"/src/views/admin/edit.vue":()=>ee((()=>t.import("./edit-legacy.js")),0,t.meta.url),"/src/views/admin/index.vue":()=>ee((()=>t.import("./index-legacy2.js")),0,t.meta.url),"/src/views/article/add.vue":()=>ee((()=>t.import("./add-legacy2.js")),0,t.meta.url),"/src/views/article/edit.vue":()=>ee((()=>t.import("./edit-legacy2.js")),0,t.meta.url),"/src/views/article/index.vue":()=>ee((()=>t.import("./index-legacy3.js")),0,t.meta.url),"/src/views/category/add.vue":()=>ee((()=>t.import("./add-legacy3.js")),0,t.meta.url),"/src/views/category/edit.vue":()=>ee((()=>t.import("./edit-legacy3.js")),0,t.meta.url),"/src/views/category/index.vue":()=>ee((()=>t.import("./index-legacy4.js")),0,t.meta.url),"/src/views/dashboard/index.vue":()=>ee((()=>t.import("./index-legacy5.js")),0,t.meta.url),"/src/views/field/add.vue":()=>ee((()=>t.import("./add-legacy4.js")),0,t.meta.url),"/src/views/field/edit.vue":()=>ee((()=>t.import("./edit-legacy4.js")),0,t.meta.url),"/src/views/field/index.vue":()=>ee((()=>t.import("./index-legacy6.js")),0,t.meta.url),"/src/views/frag/add.vue":()=>ee((()=>t.import("./add-legacy5.js")),0,t.meta.url),"/src/views/frag/edit.vue":()=>ee((()=>t.import("./edit-legacy5.js")),0,t.meta.url),"/src/views/frag/index.vue":()=>ee((()=>t.import("./index-legacy7.js")),0,t.meta.url),"/src/views/friendlink/add.vue":()=>ee((()=>t.import("./add-legacy6.js")),0,t.meta.url),"/src/views/friendlink/edit.vue":()=>ee((()=>t.import("./edit-legacy6.js")),0,t.meta.url),"/src/views/friendlink/index.vue":()=>ee((()=>t.import("./index-legacy8.js")),0,t.meta.url),"/src/views/home/info.vue":()=>ee((()=>t.import("./info-legacy.js")),0,t.meta.url),"/src/views/home/sys.vue":()=>ee((()=>t.import("./sys-legacy.js")),0,t.meta.url),"/src/views/layout/index.vue":()=>ee((()=>t.import("./index-legacy9.js")),0,t.meta.url),"/src/views/login/index.vue":()=>ee((()=>t.import("./index-legacy10.js")),0,t.meta.url),"/src/views/message/add.vue":()=>ee((()=>t.import("./add-legacy7.js")),0,t.meta.url),"/src/views/message/edit.vue":()=>ee((()=>t.import("./edit-legacy7.js")),0,t.meta.url),"/src/views/message/index.vue":()=>ee((()=>t.import("./index-legacy11.js")),0,t.meta.url),"/src/views/model/add.vue":()=>ee((()=>t.import("./add-legacy8.js")),0,t.meta.url),"/src/views/model/edit.vue":()=>ee((()=>t.import("./edit-legacy8.js")),0,t.meta.url),"/src/views/model/index.vue":()=>ee((()=>t.import("./index-legacy12.js")),0,t.meta.url),"/src/views/tag/add.vue":()=>ee((()=>t.import("./add-legacy9.js")),0,t.meta.url),"/src/views/tag/edit.vue":()=>ee((()=>t.import("./edit-legacy9.js")),0,t.meta.url),"/src/views/tag/index.vue":()=>ee((()=>t.import("./index-legacy13.js")),0,t.meta.url)}),be=e("u",_("user",{state:()=>({token:se("token")||"",userInfo:null,menuList:[]}),actions:{async login(e){try{const t=await fe.toLogin(e);return 200==t.code&&(this.token=t.data.token,ce("token",t.data.token)),t}catch(t){console.log(t)}},async getUserInfo(){try{const e=await fe.userInfo();if(console.log("getUserInfo",e),200==e.code)return this.userInfo=e.data,e.data.role}catch(e){console.log(e)}},async getMenuList(){try{const e=await fe.menuList();if(200==e.code){let t=ye(e.data);console.log("res----\x3e",t),this.menuList=t}}catch(e){console.log(e)}},logout(){this.userInfo=null,this.token="",localStorage.removeItem("token")},getAccessRoutes(e){const t=xe(this.menuList,e);return this.menuList=t,t}},persist:{enabled:!0,strategies:[{key:"user",paths:["token"]}]}}));function xe(e,t){const a=[];return e.forEach((e=>{const n={...e};n?.children?.length>0&&(n.children=xe(n.children,t)),function(e,t){return!e?.meta?.role||e.meta.role.includes(t)}(n,t)&&a.push(n)})),a}function ye(e){let t=[];return e.forEach((e=>{e.component&&(e.component=e.component.replace("@/","/src/"),e.component=we[`${e.component}`]),t.push(e),e.children&&ye(e.children)})),t}const ke=K(s({props:{isCollapse:Boolean},components:{SidebarItem:de},data:()=>({activeIndex:"",menuList:[]}),watch:{$route(e,t){this.activeIndex="/"+e.path.split("/")[1]||e.path}},created(){const e=q(),{menuList:t}=be();this.menuList=t,this.activeIndex="/"+e.path.split("/")[1]||e.path},methods:{handleOpen(e,t){console.log(e,t)},handleClose(e,t){console.log(e,t)}}}),[["render",function(e,t,r,d,c,s){const p=a("SidebarItem"),u=F;return n(),i(u,{"active-text-color":"","background-color":"",class:"el-menu-vertical-demo","text-color":"","default-active":e.activeIndex,router:!0,"unique-opened":!0,"collapse-transition":!0,collapse:e.isCollapse,"popper-effect":"light",onOpen:e.handleOpen,onClose:e.handleClose},{default:o((()=>[l(p,{data:e.menuList},null,8,["data"])])),_:1},8,["default-active","collapse","onOpen","onClose"])}],["__scopeId","data-v-9687d3bd"]]),je={},Ce={viewBox:"0 0 48 48",fill:"none",stroke:"currentColor",xmlns:"http://www.w3.org/2000/svg",class:"arco-icon arco-icon-launch","stroke-width":"4","stroke-linecap":"butt","stroke-linejoin":"arcs",filter:"","data-v-249840b0":"",style:{"font-size":"32px"}},Se=[m("path",{d:"M41 26v14a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h14M19.822 28.178 39.899 8.1M41 20V7H28"},null,-1)],_e=K(je,[["render",function(e,t){return n(),d("svg",Ce,Se)}]]),Ie={justify:"end",class:"navbar-cont",gutter:20},Ae={href:"/",target:"_blank"},Be=s({name:"NavBar"}),Ee=K(Object.assign(Be,{setup(e){const t=()=>{be().logout(),location.reload()};return(e,a)=>{const i=O,r=$,c=T,s=D,p=U;return n(),d("div",Ie,[l(r,{class:"mr-10",effect:"dark",content:"站点",placement:"top-start"},{default:o((()=>[m("a",Ae,[l(i,{icon:_e,circle:""})])])),_:1}),l(r,{class:"mr-10",effect:"dark",content:"管理员",placement:"top-start"},{default:o((()=>[l(p,{trigger:"click"},{dropdown:o((()=>[l(s,null,{default:o((()=>[l(c,{onClick:t},{default:o((()=>[b("退出登录")])),_:1})])),_:1})])),default:o((()=>[l(i,{icon:"Avatar",circle:""})])),_:1})])),_:1})])}}}),[["__scopeId","data-v-7d7c521c"]]),ze={key:0,class:"no-redirect"},Le=["onClick"],Me=s({name:"BreadCrumb"}),Pe=Object.assign(Me,{setup(e){const t=q(),a=x([]);y(t,(()=>{a.value=t.matched.filter((e=>e.meta&&e.meta.title))}),{immediate:!0});const r=W();return(e,t)=>{const c=N,s=H;return n(),i(s,{class:"breadcrumb",separator:"/"},{default:o((()=>[l(k,{name:"breadcrumb"},{default:o((()=>[(n(!0),d(v,null,g(a.value,((e,t)=>(n(),i(c,{key:e.path},{default:o((()=>[t===a.value.length-1?(n(),d("span",ze,w(e.meta.title),1)):(n(),d("a",{key:1,class:"redirect",onClick:j((t=>(e=>{console.log(e),r.push(e.path)})(e)),["prevent"])},w(e.meta.title),9,Le))])),_:2},1024)))),128))])),_:1})])),_:1})}}}),Fe=s({components:{SideBar:ke,NavBar:Ee,BreadCrumb:K(Pe,[["__scopeId","data-v-676e3626"]]),Logo:le},data:()=>({isCollapse:!1}),watch:{$route(e,t){this.activeIndex=e.path}},created(){window.addEventListener("resize",this.changeCollapse)},mounted(){this.changeCollapse()},methods:{changeCollapse(){let e=document.documentElement.clientWidth;this.isCollapse=e<=640},switchCollapse(e,t){console.log(e,t),this.isCollapse=!this.isCollapse},handleClose(e,t){console.log(e,t)}}}),Oe={class:"app-wrapper"},$e={class:"main-container"},Te={class:"header"},De={class:"navbar row justify-between align-c"},Ue={class:"row align-c"},Ne={class:"app-main"},He={class:"container"},Re=[{path:"/home",name:"home-info",component:"@/views/home/info.vue",meta:{title:"网站信息",icon:"DataLine",isShow:!0,role:["admin"]}},{path:"/sys",name:"sys",meta:{title:"系统管理",icon:"Setting",isShow:!0,role:["admin"]},redirect:"/system",children:[{path:"/system",name:"sys-index",component:"@/views/home/sys.vue",meta:{title:"系统设置",isShow:!0,role:["admin"]}}]},{path:"/content",name:"content",meta:{title:"内容管理",isShow:!0,icon:"Grid",role:["admin"]},redirect:"/category",children:[{path:"/category",name:"category-index",component:"@/views/category/index.vue",meta:{title:"栏目管理",isShow:!0,role:["admin"]}},{path:"/category/add",name:"category-add",component:"@/views/category/add.vue",meta:{title:"栏目管理-新增",isShow:!1,role:["admin"]}},{path:"/category/edit/:id",name:"category-edit",component:"@/views/category/edit.vue",meta:{title:"页面管理-更新",isShow:!1,role:["admin"]}},{path:"/article",name:"article-index",component:"@/views/article/index.vue",meta:{title:"文章管理",isShow:!0,role:["admin"]}},{path:"/article/add",name:"article-add",component:"@/views/article/add.vue",meta:{title:"文章管理-新增",isShow:!1,role:["admin"]}},{path:"/article/edit/:id",name:"article-edit",component:"@/views/article/edit.vue",meta:{title:"文章管理-更新",isShow:!1,role:["admin"]}},{path:"/tag",name:"tag-index",component:"@/views/tag/index.vue",meta:{title:"标签管理",isShow:!0,role:["admin"]}},{path:"/tag/add",name:"tag-add",component:"@/views/tag/add.vue",meta:{title:"标签管理-新增",isShow:!1,role:["admin"]}},{path:"/tag/edit/:id",name:"tag-edit",component:"@/views/tag/edit.vue",meta:{title:"标签管理-更新",isShow:!1,role:["admin"]}},{path:"/frag",name:"frag-index",component:"@/views/frag/index.vue",meta:{title:"碎片管理",isShow:!0,role:["admin"]}},{path:"/frag/add",name:"frag-add",component:"@/views/frag/add.vue",meta:{title:"碎片管理-新增",isShow:!1,role:["admin"]}},{path:"/frag/edit/:id",name:"frag-edit",component:"@/views/frag/edit.vue",meta:{title:"碎片管理-更新",isShow:!1,role:["admin"]}}]},{path:"/extend",name:"extend",meta:{title:"功能管理",icon:"Operation",isShow:!0,role:["admin"]},children:[{path:"/model",name:"model-index",component:"@/views/model/index.vue",meta:{title:"模型管理",isShow:!0,role:["admin"]}},{path:"/model/add",name:"model-add",component:"@/views/model/add.vue",meta:{title:"模型管理-新增",isShow:!1,role:["admin"]}},{path:"/model/edit/:id",name:"model-edit",component:"@/views/model/edit.vue",meta:{title:"模型管理-更新",isShow:!1,role:["admin"]}},{path:"/model/field",name:"field-index",component:"@/views/field/index.vue",meta:{title:"字段管理",isShow:!1,role:["admin"]}},{path:"/model/field/add",name:"field-add",component:"@/views/field/add.vue",meta:{title:"字段管理-新增",isShow:!1,role:["admin"]}},{path:"/model/field/edit",name:"field-edit",component:"@/views/field/edit.vue",meta:{title:"字段管理-更新",isShow:!1,role:["admin"]}},{path:"/friendlink",name:"friendlink-index",component:"@/views/friendlink/index.vue",meta:{title:"友情链接",isShow:!0,role:["admin"]}},{path:"/friendlink/add",name:"friendlink-add",component:"@/views/friendlink/add.vue",meta:{title:"友情链接-新增",isShow:!1,role:["admin"]}},{path:"/friendlink/edit/:id",name:"friendlink-edit",component:"@/views/friendlink/edit.vue",meta:{title:"友情链接-更新",isShow:!1,role:["admin"]}},{path:"/message",name:"message-index",component:"@/views/message/index.vue",meta:{title:"消息管理",isShow:!0,role:["admin"]}},{path:"/message/add",name:"message-add",component:"@/views/message/add.vue",meta:{title:"消息管理-新增",isShow:!1,role:["admin"]}},{path:"/message/edit/:id",name:"message-edit",component:"@/views/message/edit.vue",meta:{title:"消息管理-更新",isShow:!1,role:["admin"]}}]},{path:"/manage",name:"manage",meta:{title:"管理员",isShow:!0,icon:"CreditCard",role:["admin"]},redirect:"/admin",children:[{path:"/admin",name:"admin-index",component:"@/views/admin/index.vue",meta:{title:"管理员列表",isShow:!0,role:["admin"]}},{path:"/admin/add",name:"admin-add",component:"@/views/admin/add.vue",meta:{title:"管理员列表-新增",isShow:!1,role:["admin"]}},{path:"/admin/edit/:id",name:"admin-edit",component:"@/views/admin/edit.vue",meta:{title:"管理员列表-更新",isShow:!1,role:["admin"]}}]}],qe=[{path:"/login",name:"login",component:()=>ee((()=>t.import("./index-legacy10.js")),0,t.meta.url),meta:{title:"登录"}},{path:"/",name:"Layout",component:K(Fe,[["render",function(e,t,r,c,s,p){const u=le,g=a("SideBar"),v=R,f=a("Expand"),w=a("Fold"),b=z,x=a("BreadCrumb"),y=a("NavBar"),k=a("router-view");return n(),d("div",Oe,[l(v,{class:"sidebar",style:C({width:e.isCollapse?"65px":"200px"})},{default:o((()=>[l(u,{isCollapse:e.isCollapse},null,8,["isCollapse"]),l(g,{isCollapse:e.isCollapse},null,8,["isCollapse"])])),_:1},8,["style"]),m("div",$e,[m("div",Te,[m("div",De,[m("div",Ue,[l(b,{class:"ico-collapse",onClick:e.switchCollapse},{default:o((()=>[1==e.isCollapse?(n(),i(f,{key:0})):(n(),i(w,{key:1}))])),_:1},8,["onClick"]),l(x)]),l(y)])]),m("div",Ne,[m("article",He,[l(k,null,{default:o((({Component:e,route:t})=>[(n(),i(h(e)))])),_:1})])])])])}],["__scopeId","data-v-48727ce6"]]),redirect:"/home",children:[]},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>ee((()=>t.import("./404-legacy.js")),0,t.meta.url),meta:{title:"404"}}],We=G({history:V(),linkActiveClass:"active",routes:qe});We.beforeEach((async(e,t)=>{const a=be();if(a.token){if("/login"===e.path)return{path:"/"};if(a.userInfo)return!0;{const t=await a.getUserInfo();return await a.getMenuList(),a.getAccessRoutes(t).forEach((e=>{We.addRoute("Layout",e)})),e.fullPath}}return"/login"===e.path||{path:"/login",query:{redirect:e.fullPath}}}));const Ge={install:(e,t)=>{console.log("萨埵第一个插件"),e.config.globalProperties.$message=P;for(const[a,n]of Object.entries(Z))e.component(a,n);e.directive("permission",{mounted(e,t,a){const{userInfo:{role:n}}=be();n!==t.value&&e.parentNode.removeChild(e)}})}},Ve=S(Q),Xe=I();Xe.use(A),Ve.use(Xe),Ve.use(We),Ve.use(Ge),Ve.mount("#app")}}}));
