System.register(["./@vue-legacy.js","./pinia-legacy.js","./pinia-plugin-persist-legacy.js","./element-plus-legacy.js","./dayjs-legacy.js","./@qiun-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./js-cookie-legacy.js","./@element-plus-legacy.js","./saduocss-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./@vueuse-legacy.js","./@ctrl-legacy.js","./@popperjs-legacy.js","./memoize-one-legacy.js","./normalize-wheel-es-legacy.js"],(function(e,t){"use strict";var a,i,r,o,n,d,l,s,c,p,u,m,v,h,g,f,w,x,b,y,k,j,S,C,_,I,A,P,B,E,L,M,z,$,F,O,T,U,D,R,q,H,N,V,G,W,J,Y,K,Q,X,Z;return{setters:[e=>{a=e.r,i=e.o,r=e.e,o=e._,n=e.u,d=e.g,l=e.c,s=e.ab,c=e.Y,p=e.$,u=e.f,m=e.a,v=e.t,h=e.a0,g=e.d,f=e.j,w=e.k,x=e.a1,b=e.a3,y=e.w,k=e.v,j=e.n,S=e.p,C=e.b,_=e.au},e=>{I=e.d,A=e.c},e=>{P=e.i},e=>{B=e.E,E=e.z,L=e.a,M=e.b,z=e.c,$=e.d,F=e.e,O=e.f,T=e.g,U=e.h,D=e.i,R=e.j,q=e.k,H=e.l,N=e.m,V=e.n},null,e=>{G=e._},e=>{W=e.u,J=e.a,Y=e.c,K=e.b},e=>{Q=e.a},e=>{X=e.a},e=>{Z=e.F},null,null,null,null,null,null,null,null],execute:function(){var ee=document.createElement("style");ee.textContent="nav a.router-link-exact-active[data-v-ee806c20]{color:var(--color-text)}nav a.router-link-exact-active[data-v-ee806c20]:hover{background-color:transparent}nav a[data-v-ee806c20]{display:inline-block;padding:0 1rem;border-left:1px solid var(--color-border)}nav a[data-v-ee806c20]:first-of-type{border:0}.ico-nav[data-v-b73c586a]{width:40px;height:40px;border-radius:15px;box-shadow:inset 0 0 5px #f2f2f2;padding:4px;display:inline-block;margin-right:5px}.ico-nav img[data-v-b73c586a]{width:100%}.el-sub-menu .el-menu-item[data-v-b73c586a]{margin-left:10px}.el-sub-menu.is-active[data-v-b73c586a] .el-icon,.el-sub-menu.is-active[data-v-b73c586a] .el-sub-menu__title,.el-sub-menu.is-active[data-v-b73c586a] .el-sub-menu__icon-arrow,[data-v-b73c586a] .is-active{color:#165dff}.el-menu-vertical-demo[data-v-07007fff]:not(.el-menu--collapse){width:200px;min-height:400px}.el-menu[data-v-07007fff]{border-right:0px}[data-v-a916d5ad] .el-badge__content.is-fixed.is-dot{top:5px;right:10px}.navbar-cont[data-v-a916d5ad]{padding:8px 20px;display:flex;justify-content:end;gap:10px}.breadcrumb-leave-active[data-v-c5816d39]{position:absolute}.breadcrumb[data-v-c5816d39]{display:inline-block;font-size:14px;line-height:50px;margin-left:8px}.breadcrumb .no-redirect[data-v-c5816d39]{cursor:text}.breadcrumb .redirect[data-v-c5816d39]{font-weight:bolder}.icon[data-v-669fb855]{width:32px;height:32px}.logo[data-v-669fb855]{padding:9px;font-size:20px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;transition:width .3s linear;display:flex;justify-content:center;align-items:center;box-shadow:0 1px 10px rgba(0,0,0,.06);margin-bottom:10px}.app-wrapper[data-v-d4813586]{display:flex;width:100%;height:100%}.app-wrapper .sidebar[data-v-d4813586]{height:100vh;border-right:1px solid #f9f5f5;transition:all .5s}.app-wrapper .sidebar-container[data-v-d4813586]{height:100%;background-color:var(--vt-c-white);width:200px!important}.app-wrapper .sidebar-container-menu[data-v-d4813586]:not(.el-menu--collapse){width:200px}.app-wrapper .sidebar-container .el-menu[data-v-d4813586]{border:none}.app-wrapper .main-container[data-v-d4813586]{flex:1;display:flex;flex-direction:column;height:100vh;overflow:hidden}.app-wrapper .main-container .header .navbar[data-v-d4813586]{background-color:var(--vt-c-white);border-bottom:1px solid var(--color-border)}.app-wrapper .main-container .header .navbar .ico-collapse[data-v-d4813586]{width:42px;height:42px;cursor:pointer;font-size:16px;color:#1890ff}.app-wrapper .main-container .header .tags-view[data-v-d4813586]{height:34px;background:#12efff}.app-wrapper .main-container .app-main[data-v-d4813586]{height:calc(100vh - 51px);padding:20px 20px 10px;background-color:#f2f3f5;overflow:auto}.app-wrapper .main-container .app-main .container[data-v-d4813586]{border-radius:6px;min-height:calc(100vh - 120px)}[data-v-d4813586] .el-drawer{width:200px!important}[data-v-d4813586] .el-drawer__body{padding:0}@media only screen and (max-width: 992px){.sidebar[data-v-d4813586]{display:none}}:root{--vt-c-white: #ffffff;--vt-c-white-soft: #f8f8f8;--vt-c-white-mute: #f2f2f2;--vt-c-black: #181818;--vt-c-black-soft: #222222;--vt-c-black-mute: #282828;--vt-c-indigo: #2c3e50;--vt-c-divider-light-1: rgba(60, 60, 60, .29);--vt-c-divider-light-2: rgba(60, 60, 60, .12);--vt-c-divider-dark-1: rgba(84, 84, 84, .65);--vt-c-divider-dark-2: rgba(84, 84, 84, .48);--vt-c-text-light-1: var(--vt-c-indigo);--vt-c-text-light-2: rgba(60, 60, 60, .66);--vt-c-text-dark-1: var(--vt-c-white);--vt-c-text-dark-2: rgba(235, 235, 235, .64);--blue:#324157;--light-blue:#3A71A8;--red:#C03639;--pink: #E65D6E;--green: #30B08F;--tiffany: #4AB7BD;--yellow:#FEC171;--panGreen: #30B08F;--menuText:#bfcbd9;--menuActiveText:#409EFF;--subMenuActiveText:#f4f4f5;--menuBg:#304156;--menuHover:#263445;--subMenuBg:#1f2d3d;--subMenuHover:#001528;--sideBarWidth: 210px}:root{--color-background: var(--vt-c-white);--color-background-soft: var(--vt-c-white-soft);--color-background-mute: var(--vt-c-white-mute);--color-border: var(--vt-c-divider-light-2);--color-border-hover: var(--vt-c-divider-light-1);--color-heading: var(--vt-c-text-light-1);--color-text: var(--vt-c-text-light-1)}@media (prefers-color-scheme: dark){:root{--color-background: var(--vt-c-black);--color-background-soft: var(--vt-c-black-soft);--color-background-mute: var(--vt-c-black-mute);--color-border: var(--vt-c-divider-dark-2);--color-border-hover: var(--vt-c-divider-dark-1);--color-heading: var(--vt-c-text-dark-1);--color-text: var(--vt-c-text-dark-2)}}@font-face{font-family:chanyue;src:url("+new URL("../../admin/font/chanyue.ttf",t.meta.url).href+");font-weight:400;font-style:normal}body{min-height:100vh;color:var(--color-text);background:var(--color-background);transition:color .5s,background-color .5s;line-height:1.6;font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-size:15px;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.c-fff{color:var(--vt-c-white)}.c-a1a3aa{color:#a1a3aa}.c-165dff{color:#165dff}.c-1d2129{color:#1d2129}.c-4e5969{color:#4e5969}.search{background-color:#f7f7f7;border:1px solid #f7f2f2;border-radius:5px}.avatar-uploader-icon{font-size:28px;color:#8c939d;width:100px;height:100px;text-align:center}.avatar-uploader .el-upload{border:1px dashed #dcdfe6;border-radius:6px;cursor:pointer;position:relative;overflow:hidden;transition:.2s}.el-button--primary{background:center center #4A54FF;background-image:linear-gradient(315deg,#6772FF 0,#00F9E5 100%);background-size:104% 104%;color:#fff;border:none}.avatar-uploader{width:32px;height:32px}.avatar-uploader-icon{width:31px;height:31px}.tox-tinymce,.el-cascader,.el-select,.el-input,.el-select-v2{width:100%!important}.w-80{width:80px!important}.content-wrap{min-height:calc(100vh - 120px);border-radius:6px;background-color:#fff;padding:20px}\n",document.head.appendChild(ee);const te=G({__name:"App",setup(e){const t=E;return(e,l)=>{const s=a("router-view");return i(),r(n(B),{size:"","z-index":3e3,locale:n(t)},{default:o((()=>[d(s)])),_:1},8,["locale"])}}},[["__scopeId","data-v-ee806c20"]]),ae=function(e,t,a){return e()},ie=G({name:"SidebarItem",props:{data:{type:Array,default:()=>[]}},data:()=>({}),created(){},methods:{goto(e){if(e?.children?.length>0)return!1;this.$router.push({path:e.path,query:e.query})}}},[["render",function(e,t,n,g,f,w){const x=L,b=a("SidebarItem"),y=M,k=z;return i(!0),l(c,null,s(n.data,((e,t)=>(i(),l(c,{key:e.path},[e?.children?.length>0&&e.meta.isShow?(i(),r(y,{key:0,index:e.path},{title:o((()=>[e?.meta?.icon?(i(),r(x,{key:0},{default:o((()=>[(i(),r(p(e.meta.icon)))])),_:2},1024)):u("",!0),m("span",null,v(e?.meta?.title),1)])),default:o((()=>[d(b,{data:e.children},null,8,["data"])])),_:2},1032,["index"])):e.meta.isShow?(i(),r(k,{key:1,index:e.path},{title:o((()=>[h(v(e?.meta?.title),1)])),default:o((()=>[e?.meta?.icon?(i(),r(x,{key:0},{default:o((()=>[(i(),r(p(e.meta.icon)))])),_:2},1024)):u("",!0)])),_:2},1032,["index"])):u("",!0)],64)))),128)}],["__scopeId","data-v-b73c586a"]]),re=e("s",((e="token",t)=>{X.set(e,t)})),oe=e("g",((e="token")=>X.get(e)));let ne=e("a",(e=>{for(let t of e)t.label=t.name,t.value=t.id,t.children&&ne(t.children);return e})),de=e("t",((e,t=0)=>{let a=[];return e.forEach(((i,r)=>{if(i.pid===t){let t=de(e,i.id);t.length&&(i.children=t),i.level=1,a.push(i)}})),a}));e("c",((e,t)=>{const a=[];let i=(e,t)=>{for(let r,o=0;o<t.length;o++)r=t[o],r.id==e&&(a.unshift(r.id),0!=r.pid&&i(r.pid,t))};return i(e,t),a})),e("b",(e=>{let t=/src=[\'\"]?([^\'\"]*)[\'\"]?/i,a=e.match(/<img.*?(?:>|\/>)/gi),i=[];if(a)for(let r=0;r<a.length;r++){let e=a[r].match(t);e[1]&&i.push(e[1])}return i})),e("f",(e=>{let t=e.indexOf("</p>");-1!==t&&(e=e.substring(0,t+4));let a=document.createElement("div");a.innerHTML=e;let i=a.textContent;if(i.length>225){let e=i.lastIndexOf("。",255);-1!==e&&(i=i.slice(0,e+1))}return a.remove(),i})),e("d",(e=>0==e.length?"":e.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&nbsp;/g," ").replace(/&#39;/g,"'").replace(/&quot;/g,'"'))),Q.defaults.headers.post["Content-Type"]="application/json; charset=utf-8",Q.defaults.crossDomain=!0,Q.defaults.withCredentials=!0,Q.defaults.timeout=1e4;let le=e("h",Q.create({baseURL:""}));le.interceptors.request.use((e=>{const{token:t}=he();return t&&(e.headers.auth=t),e}),(e=>{console.log(e),Promise.reject(e||"网络异常")})),le.interceptors.response.use((e=>{const{code:t,data:a,message:i}=e;return 501===a.code&&("TokenExpiredError"==a.msg.name?$({message:"登录失效，请重新登录",type:"warning"}):$.success(a.msg),he().logout(),location.reload()),Promise.resolve(a)}),(e=>{console.warn(e);const{response:t}=e;return t&&t.status,Promise.reject(e)})),le.jsonp=function({url:e,data:t={}}){let a=+new Date;const i=t.callback?t.callback:`light_${a}`;t.callback=i;const r=document.createElement("script");return r.setAttribute("src",e+"?"+function(e={}){const t=Object.keys(e),a=Object.values(e);return t.map(((e,t)=>e+"="+a[t])).join("&")}(t)),document.body.appendChild(r),new Promise(((e,t)=>{window[i]=t=>{e(t),r&&document.body.removeChild(r),delete window[i]},r.onerror=function(e){t(e)}}))};let se={pre:{BASE_API:{}.VITE_APP_BASE_API||""},prd:{BASE_API:{}.VITE_APP_BASE_API||""}};console.log("api[env]",se.pre);const ce=e("A",se.pre);class pe{static API=ce.BASE_API;version(){return"v.1.0"}static get(e={}){return le({url:`${pe.API}/api/get`,method:"GET",params:e})}static post(e={}){return le({url:`${pe.API}/api/post`,method:"POST",data:e})}static put(e={}){return le({url:`${pe.API}/api/put`,method:"PUT",data:e})}static patch(e={}){return le({url:`${pe.API}/api/patch`,method:"PATCH",data:e})}static delete(){return le({url:`${pe.API}/api/delete?id=1`,method:"Delete"})}static upload=e=>le({url:`${pe.API}/api/delete?id=1`,method:"post",headers:{"Content-type":"multipart/form-data"},data:e})}class ue extends pe{constructor(e){super(e)}static toLogin(e){return le({url:`${ce.BASE_API}/api/sysUser/login`,method:"post",data:e})}static userInfo(){return le({url:`${ce.BASE_API}/api/sysUser/detail`,method:"get"})}static menuList(){return new Promise(((e,t)=>{setTimeout((()=>{e({code:200,data:Ye})}),300)}))}}let me=e("e",(()=>le({url:`${ce.BASE_API}/api/sysMenu/find`,method:"get"})));e("i",(({id:e,content:t})=>le({url:`${ce.BASE_API}/api/sysMenu/update`,method:"post",data:{id:e,content:t}})));const ve=Object.assign({"/src/views/article/add.vue":()=>ae((()=>t.import("./add-legacy.js")),0,t.meta.url),"/src/views/article/edit.vue":()=>ae((()=>t.import("./edit-legacy.js")),0,t.meta.url),"/src/views/article/index.vue":()=>ae((()=>t.import("./index-legacy2.js")),0,t.meta.url),"/src/views/category/add.vue":()=>ae((()=>t.import("./add-legacy2.js")),0,t.meta.url),"/src/views/category/edit.vue":()=>ae((()=>t.import("./edit-legacy2.js")),0,t.meta.url),"/src/views/category/index.vue":()=>ae((()=>t.import("./index-legacy3.js")),0,t.meta.url),"/src/views/collect/add.vue":()=>ae((()=>t.import("./add-legacy3.js")),0,t.meta.url),"/src/views/collect/edit.vue":()=>ae((()=>t.import("./edit-legacy3.js")),0,t.meta.url),"/src/views/collect/index.vue":()=>ae((()=>t.import("./index-legacy4.js")),0,t.meta.url),"/src/views/dashboard/index.vue":()=>ae((()=>t.import("./index-legacy5.js")),0,t.meta.url),"/src/views/field/add.vue":()=>ae((()=>t.import("./add-legacy4.js")),0,t.meta.url),"/src/views/field/edit.vue":()=>ae((()=>t.import("./edit-legacy4.js")),0,t.meta.url),"/src/views/field/index.vue":()=>ae((()=>t.import("./index-legacy6.js")),0,t.meta.url),"/src/views/frag/add.vue":()=>ae((()=>t.import("./add-legacy5.js")),0,t.meta.url),"/src/views/frag/edit.vue":()=>ae((()=>t.import("./edit-legacy5.js")),0,t.meta.url),"/src/views/frag/index.vue":()=>ae((()=>t.import("./index-legacy7.js")),0,t.meta.url),"/src/views/friendlink/add.vue":()=>ae((()=>t.import("./add-legacy6.js")),0,t.meta.url),"/src/views/friendlink/edit.vue":()=>ae((()=>t.import("./edit-legacy6.js")),0,t.meta.url),"/src/views/friendlink/index.vue":()=>ae((()=>t.import("./index-legacy8.js")),0,t.meta.url),"/src/views/gather/add.vue":()=>ae((()=>t.import("./add-legacy7.js")),0,t.meta.url),"/src/views/gather/edit.vue":()=>ae((()=>t.import("./edit-legacy7.js")),0,t.meta.url),"/src/views/gather/index.vue":()=>ae((()=>t.import("./index-legacy9.js")),0,t.meta.url),"/src/views/home/info.vue":()=>ae((()=>t.import("./info-legacy.js")),0,t.meta.url),"/src/views/home/site.vue":()=>ae((()=>t.import("./site-legacy.js")),0,t.meta.url),"/src/views/layout/index.vue":()=>ae((()=>t.import("./index-legacy10.js")),0,t.meta.url),"/src/views/login/index.vue":()=>ae((()=>t.import("./index-legacy11.js")),0,t.meta.url),"/src/views/loginlog/index.vue":()=>ae((()=>t.import("./index-legacy12.js")),0,t.meta.url),"/src/views/menu/index.vue":()=>ae((()=>t.import("./index-legacy13.js")),0,t.meta.url),"/src/views/message/add.vue":()=>ae((()=>t.import("./add-legacy8.js")),0,t.meta.url),"/src/views/message/edit.vue":()=>ae((()=>t.import("./edit-legacy8.js")),0,t.meta.url),"/src/views/message/index.vue":()=>ae((()=>t.import("./index-legacy14.js")),0,t.meta.url),"/src/views/model/add.vue":()=>ae((()=>t.import("./add-legacy9.js")),0,t.meta.url),"/src/views/model/edit.vue":()=>ae((()=>t.import("./edit-legacy9.js")),0,t.meta.url),"/src/views/model/index.vue":()=>ae((()=>t.import("./index-legacy15.js")),0,t.meta.url),"/src/views/role/add.vue":()=>ae((()=>t.import("./add-legacy10.js")),0,t.meta.url),"/src/views/role/edit.vue":()=>ae((()=>t.import("./edit-legacy10.js")),0,t.meta.url),"/src/views/role/index.vue":()=>ae((()=>t.import("./index-legacy16.js")),0,t.meta.url),"/src/views/slide/add.vue":()=>ae((()=>t.import("./add-legacy11.js")),0,t.meta.url),"/src/views/slide/edit.vue":()=>ae((()=>t.import("./edit-legacy11.js")),0,t.meta.url),"/src/views/slide/index.vue":()=>ae((()=>t.import("./index-legacy17.js")),0,t.meta.url),"/src/views/tag/add.vue":()=>ae((()=>t.import("./add-legacy12.js")),0,t.meta.url),"/src/views/tag/edit.vue":()=>ae((()=>t.import("./edit-legacy12.js")),0,t.meta.url),"/src/views/tag/index.vue":()=>ae((()=>t.import("./index-legacy18.js")),0,t.meta.url),"/src/views/user/add.vue":()=>ae((()=>t.import("./add-legacy13.js")),0,t.meta.url),"/src/views/user/edit.vue":()=>ae((()=>t.import("./edit-legacy13.js")),0,t.meta.url),"/src/views/user/index.vue":()=>ae((()=>t.import("./index-legacy19.js")),0,t.meta.url)}),he=e("u",I("user",{state:()=>({token:oe("token")||"",userInfo:null,menuList:[]}),actions:{async login(e){try{const t=await ue.toLogin(e);return 200==t.code&&(this.token=t.data.token,re("token",t.data.token)),t}catch(t){console.log(t)}},async getUserInfo(){try{const e=await ue.userInfo();if(200==e.code&&e.data){let t=e.data.value;return this.userInfo={role:t,...e.data},t}}catch(e){console.log(e)}},async getMenuList(){try{let e=await me();if(200==e.code){let t=e.data.content,a=fe(JSON.parse(t).route);this.menuList=a}}catch(e){console.log(e)}},logout(){this.userInfo=null,this.token="",localStorage.removeItem("token")},getAccessRoutes(e){const t=ge(this.menuList,e);return this.menuList=t,t}},persist:{enabled:!0,strategies:[{key:"user",paths:["token"]}]}}));function ge(e,t){const a=[];return e.forEach((e=>{const i={...e};i?.children?.length>0&&(i.children=ge(i.children,t)),function(e,t){return!e?.meta?.role||e.meta.role.includes(t)}(i,t)&&a.push(i)})),a}function fe(e){let t=[];return e.forEach((e=>{e.component&&(e.component=e.component.replace("@/","/src/"),e.component=ve[`${e.component}`]),t.push(e),e.children&&fe(e.children)})),t}const we=g({props:{isCollapse:Boolean},components:{SidebarItem:ie},data:()=>({activeIndex:"",menuList:[]}),watch:{$route(e,t){this.activeIndex="/"+e.path.split("/")[1]||e.path}},created(){const e=W(),{menuList:t}=he();this.menuList=t,this.activeIndex="/"+e.path.split("/")[1]||e.path},methods:{handleOpen(e,t){console.log(e,t)},handleClose(e,t){console.log(e,t)}}}),xe=G(we,[["render",function(e,t,n,l,s,c){const p=a("SidebarItem"),u=F;return i(),r(u,{"active-text-color":"","background-color":"",class:"el-menu-vertical-demo","text-color":"","default-active":e.activeIndex,router:!0,"unique-opened":!0,"collapse-transition":!0,collapse:e.isCollapse,"popper-effect":"light",onOpen:e.handleOpen,onClose:e.handleClose},{default:o((()=>[d(p,{data:e.menuList},null,8,["data"])])),_:1},8,["default-active","collapse","onOpen","onClose"])}],["__scopeId","data-v-07007fff"]]),be={},ye={viewBox:"0 0 48 48",fill:"none",stroke:"currentColor",xmlns:"http://www.w3.org/2000/svg",class:"arco-icon arco-icon-launch","stroke-width":"4","stroke-linecap":"butt","stroke-linejoin":"arcs",filter:"","data-v-249840b0":"",style:{"font-size":"32px"}},ke=[m("path",{d:"M41 26v14a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h14M19.822 28.178 39.899 8.1M41 20V7H28"},null,-1)],je=G(be,[["render",function(e,t){return i(),l("svg",ye,ke)}]]),Se={justify:"end",class:"navbar-cont",gutter:20},Ce={href:"/",target:"_blank"},_e=g({name:"NavBar"}),Ie=G(Object.assign(_e,{setup(e){const t=he(),a=t.userInfo.username,r=()=>{t.logout(),location.reload()};return(e,t)=>{const s=O,c=T,p=U,u=D,v=R;return i(),l("div",Se,[d(c,{class:"mr-10",effect:"dark",content:"站点",placement:"top-start"},{default:o((()=>[m("a",Ce,[d(s,{icon:je,circle:""})])])),_:1}),d(c,{class:"mr-10",effect:"dark",content:n(a),placement:"top-start"},{default:o((()=>[d(v,{trigger:"click"},{dropdown:o((()=>[d(u,null,{default:o((()=>[d(p,{onClick:r},{default:o((()=>[h("退出登录")])),_:1})])),_:1})])),default:o((()=>[d(s,{icon:"Avatar",circle:""})])),_:1})])),_:1},8,["content"])])}}}),[["__scopeId","data-v-a916d5ad"]]),Ae={key:0,class:"no-redirect"},Pe=["onClick"],Be=g({name:"BreadCrumb"}),Ee=Object.assign(Be,{setup(e){const t=W(),a=f([]);w(t,(()=>{a.value=t.matched.filter((e=>e.meta&&e.meta.title))}),{immediate:!0});const n=J();return(e,t)=>{const p=q,u=H;return i(),r(u,{class:"breadcrumb",separator:"/"},{default:o((()=>[d(x,{name:"breadcrumb"},{default:o((()=>[(i(!0),l(c,null,s(a.value,((e,t)=>(i(),r(p,{key:e.path},{default:o((()=>[t===a.value.length-1?(i(),l("span",Ae,v(e.meta.title),1)):(i(),l("a",{key:1,class:"redirect",onClick:b((t=>(e=>{console.log(e),n.push(e.path)})(e)),["prevent"])},v(e.meta.title),9,Pe))])),_:2},1024)))),128))])),_:1})])),_:1})}}}),Le=G(Ee,[["__scopeId","data-v-c5816d39"]]),Me={},ze={xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"64px",height:"64px",viewBox:"0 0 64 64","xml:space":"preserve"},$e=[m("g",null,[m("path",{"fill-rule":"evenodd",fill:"#1A85F8",d:"M45.354,29.9C45.354,17.983,32.5,9,32.5,9C18.529,20.55,20.206,30.45,20.206,30.45\n\t\t\tC12.289,24.675,4,27.15,4,27.15s2.515,4.125,3.912,7.149c1.397,3.025,2.515,6.05,6.147,10.45c3.633,4.4,8.941,6.6,8.941,6.6\n\t\t\ts-2.235-1.466-2.235-5.5c0-5.041,5.588-6.05,5.588-6.05c-0.932-0.825-1.677-2.108-1.677-4.399c0-2.292,2.049-4.309,4.471-6.051\n\t\t\tc2.422-1.741,3.912-3.85,3.912-3.85c0,0.458,2.049,3.208,3.354,4.4c1.304,1.191,4.471,2.566,4.471,5.5\n\t\t\tc0,2.933-1.677,4.399-1.677,4.399c3.26,0.459,5.588,3.392,5.588,6.05c0,2.659-1.118,4.4-1.118,4.4\n\t\t\tc8.569-3.941,10.898-10.908,12.854-15.4C58.485,30.358,61,26.6,61,26.6C50.755,26.6,45.354,29.9,45.354,29.9z"})],-1),m("g",null,[m("path",{"fill-rule":"evenodd",fill:"#CBAD29",d:"M35.854,47.5c2.234,0,3.818-2.842,2.793-4.4c-1.023-1.558-2.142-3.3-5.588-3.3\n\t\t\tc-3.446,0-5.588,2.384-5.588,5.5c0,3.117,2.98,7.608,8.941,7.7c0,0-5.402-2.384-3.912-7.7C32.5,45.3,33.617,47.5,35.854,47.5z"})],-1)],Fe=e("_",G(Me,[["render",function(e,t){return i(),l("svg",ze,$e)}]])),Oe=g({components:{IconLogo:Fe},props:{isCollapse:{type:Boolean,default:!1}},watch:{isCollapse(e,t){this.flag=e}},data:()=>({flag:!1}),created(){},methods:{}}),Te={class:"logo"},Ue={class:"f-20"},De=g({components:{SideBar:xe,NavBar:Ie,BreadCrumb:Le,Logo:G(Oe,[["render",function(e,t,a,r,o,n){const s=Fe;return i(),l("h1",Te,[d(s,{class:"icon mr-5"}),y(m("span",Ue,"ChanCMS",512),[[k,!e.flag]])])}],["__scopeId","data-v-669fb855"]])},data:()=>({isCollapse:!1,drawer:!1}),watch:{$route(e,t){this.activeIndex=e.path}},created(){window.addEventListener("resize",this.changeCollapse)},mounted(){},methods:{changeCollapse(){},switchCollapse(e,t){this.isCollapse=!this.isCollapse,document.body.clientWidth<=920&&(this.drawer=!this.drawer,this.isCollapse=!0)},close(){this.isCollapse=!this.isCollapse,this.drawer=!this.drawer},handleClose(e,t){console.log(e,t)}}}),Re={class:"app-wrapper"},qe={class:"main-container"},He={class:"header"},Ne={class:"navbar row justify-between align-c"},Ve={class:"row align-c"},Ge={class:"app-main"},We={class:"container"},Je=(e=>(S("data-v-d4813586"),e=e(),C(),e))((()=>m("p",{class:"text-c mt-10 mb-10 c-333 f-12"},[h(" Copyright © 2016-2024 "),m("a",{class:"c-9ca4bf",href:"https://www.chancms.top",target:"_blank"},"ChanCMS"),h(" All Rights Reserved. ")],-1))),Ye=[{path:"/home",name:"home-info",component:"@/views/home/info.vue",meta:{title:"网站信息",icon:"DataLine",isShow:!0,role:["admin","super","editor"]}},{path:"/site",name:"site",meta:{title:"站点管理",icon:"Monitor",isShow:!0,role:["admin","super","editor"]},redirect:"/site",children:[{path:"/site",name:"site-index",component:"@/views/home/site.vue",meta:{title:"站点设置",isShow:!0,role:["admin","super","editor"]}}]},{path:"/content",name:"content",meta:{title:"内容管理",isShow:!0,icon:"Grid",role:["admin","super","editor"]},redirect:"/category",children:[{path:"/category",name:"category-index",component:"@/views/category/index.vue",meta:{title:"栏目管理",isShow:!0,role:["admin","super","editor"]}},{path:"/category/add",name:"category-add",component:"@/views/category/add.vue",meta:{title:"栏目管理-新增",isShow:!1,role:["admin","super","editor"]}},{path:"/category/edit/:id",name:"category-edit",component:"@/views/category/edit.vue",meta:{title:"页面管理-更新",isShow:!1,role:["admin","super","editor"]}},{path:"/article",name:"article-index",component:"@/views/article/index.vue",meta:{title:"文章管理",isShow:!0,role:["admin","super","editor"]}},{path:"/article/add",name:"article-add",component:"@/views/article/add.vue",meta:{title:"文章管理-新增",isShow:!1,role:["admin","super","editor"]}},{path:"/article/edit/:id",name:"article-edit",component:"@/views/article/edit.vue",meta:{title:"文章管理-更新",isShow:!1,role:["admin","super","editor"]}},{path:"/slide",name:"slide-index",component:"@/views/slide/index.vue",meta:{title:"轮播管理",isShow:!0,role:["admin","super","editor"]}},{path:"/slide/add",name:"slide-add",component:"@/views/slide/add.vue",meta:{title:"轮播管理-新增",isShow:!1,role:["admin","super","editor"]}},{path:"/slide/edit/:id",name:"slide-edit",component:"@/views/slide/edit.vue",meta:{title:"轮播管理-更新",isShow:!1,role:["admin","super","editor"]}},{path:"/tag",name:"tag-index",component:"@/views/tag/index.vue",meta:{title:"标签管理",isShow:!0,role:["admin","super","editor"]}},{path:"/tag/add",name:"tag-add",component:"@/views/tag/add.vue",meta:{title:"标签管理-新增",isShow:!1,role:["admin","super","editor"]}},{path:"/tag/edit/:id",name:"tag-edit",component:"@/views/tag/edit.vue",meta:{title:"标签管理-更新",isShow:!1,role:["admin","super","editor"]}},{path:"/frag",name:"frag-index",component:"@/views/frag/index.vue",meta:{title:"碎片管理",isShow:!0,role:["admin","super","editor"]}},{path:"/frag/add",name:"frag-add",component:"@/views/frag/add.vue",meta:{title:"碎片管理-新增",isShow:!1,role:["admin","super","editor"]}},{path:"/frag/edit/:id",name:"frag-edit",component:"@/views/frag/edit.vue",meta:{title:"碎片管理-更新",isShow:!1,role:["admin","super","editor"]}}]},{path:"/glean",name:"gather",meta:{title:"采集功能",icon:"MagicStick",isShow:!0,role:["super"]},redirect:"/collect",children:[{path:"/collect",name:"collect-index",component:"@/views/collect/index.vue",meta:{title:"采集配置",isShow:!0,role:["super"]}},{path:"/collect/add",name:"collect-add",component:"@/views/collect/add.vue",meta:{title:"采集配置-新增",isShow:!1,role:["super"]}},{path:"/collect/:id",name:"collect-edit",component:"@/views/collect/edit.vue",meta:{title:"采集配置-更新",isShow:!1,role:["super"]}},{path:"/gather",name:"gather-index",component:"@/views/gather/index.vue",meta:{title:"接口采集",isShow:!0,role:["super"]}},{path:"/gather/add",name:"gather-add",component:"@/views/gather/add.vue",meta:{title:"接口采集-新增",isShow:!1,role:["super"]}},{path:"/gather/edit/:id",name:"gather-edit",component:"@/views/gather/edit.vue",meta:{title:"接口采集-更新",isShow:!1,role:["super"]}}]},{path:"/extend",name:"extend",meta:{title:"功能管理",icon:"Operation",isShow:!0,role:["super"]},children:[{path:"/model",name:"model-index",component:"@/views/model/index.vue",meta:{title:"模型管理",isShow:!0,role:["super"]}},{path:"/model/add",name:"model-add",component:"@/views/model/add.vue",meta:{title:"模型管理-新增",isShow:!1,role:["super"]}},{path:"/model/edit/:id",name:"model-edit",component:"@/views/model/edit.vue",meta:{title:"模型管理-更新",isShow:!1,role:["super"]}},{path:"/model/field",name:"field-index",component:"@/views/field/index.vue",meta:{title:"字段管理",isShow:!1,role:["super"]}},{path:"/model/field/add",name:"field-add",component:"@/views/field/add.vue",meta:{title:"字段管理-新增",isShow:!1,role:["super"]}},{path:"/model/field/edit",name:"field-edit",component:"@/views/field/edit.vue",meta:{title:"字段管理-更新",isShow:!1,role:["super"]}},{path:"/friendlink",name:"friendlink-index",component:"@/views/friendlink/index.vue",meta:{title:"友情链接",isShow:!0,role:["admin","super","editor"]}},{path:"/friendlink/add",name:"friendlink-add",component:"@/views/friendlink/add.vue",meta:{title:"友情链接-新增",isShow:!1,role:["admin","super","editor"]}},{path:"/friendlink/edit/:id",name:"friendlink-edit",component:"@/views/friendlink/edit.vue",meta:{title:"友情链接-更新",isShow:!1,role:["admin","super","editor"]}},{path:"/message",name:"message-index",component:"@/views/message/index.vue",meta:{title:"消息管理",isShow:!0,role:["admin","super","editor"]}},{path:"/message/add",name:"message-add",component:"@/views/message/add.vue",meta:{title:"消息管理-新增",isShow:!1,role:["admin","super","editor"]}},{path:"/message/edit/:id",name:"message-edit",component:"@/views/message/edit.vue",meta:{title:"消息管理-更新",isShow:!1,role:["admin","super","editor"]}}]},{path:"/sys",name:"sys",meta:{title:"系统管理",isShow:!0,icon:"Setting",role:["admin","super"]},redirect:"/user",children:[{path:"/user",name:"user-index",component:"@/views/user/index.vue",meta:{title:"用户管理",isShow:!0,role:["admin","super"]}},{path:"/user/add",name:"user-add",component:"@/views/user/add.vue",meta:{title:"用户列表-新增",isShow:!1,role:["admin","super"]}},{path:"/user/edit/:id",name:"user-edit",component:"@/views/user/edit.vue",meta:{title:"用户列表-更新",isShow:!1,role:["admin","super"]}},{path:"/role",name:"role-index",component:"@/views/role/index.vue",meta:{title:"角色管理",isShow:!0,role:["admin","super"]}},{path:"/role/add",name:"role-add",component:"@/views/role/add.vue",meta:{title:"角色列表-新增",isShow:!1,role:["admin","super"]}},{path:"/role/edit/:id",name:"role-edit",component:"@/views/role/edit.vue",meta:{title:"角色列表-更新",isShow:!1,role:["admin","super"]}},{path:"/menu",name:"menu-index",component:"@/views/menu/index.vue",meta:{title:"菜单管理",isShow:!0,role:["admin","super"]}},{path:"/loginlog",name:"loginLog-index",component:"@/views/loginlog/index.vue",meta:{title:"登录日志",isShow:!0,role:["admin","super"]}}]}];var Ke=[{path:"/login",name:"login",component:()=>ae((()=>t.import("./index-legacy11.js")),0,t.meta.url),meta:{title:"登录"}},{path:"/",name:"Layout",component:G(De,[["render",function(e,t,n,s,c,u){const v=a("Logo"),h=a("SideBar"),g=N,f=V,w=a("Expand"),x=a("Fold"),b=L,y=a("BreadCrumb"),k=a("NavBar"),S=a("router-view");return i(),l("div",Re,[d(g,{class:"sidebar",style:j({width:e.isCollapse?"65px":"200px"})},{default:o((()=>[d(v,{isCollapse:e.isCollapse},null,8,["isCollapse"]),d(h,{isCollapse:e.isCollapse},null,8,["isCollapse"])])),_:1},8,["style"]),d(f,{modelValue:e.drawer,"onUpdate:modelValue":t[0]||(t[0]=t=>e.drawer=t),"before-close":e.close,direction:"ltr","with-header":!1},{default:o((()=>[d(v),d(h)])),_:1},8,["modelValue","before-close"]),m("div",qe,[m("div",He,[m("div",Ne,[m("div",Ve,[d(b,{class:"ico-collapse",onClick:e.switchCollapse},{default:o((()=>[1==e.isCollapse?(i(),r(w,{key:0})):(i(),r(x,{key:1}))])),_:1},8,["onClick"]),d(y)]),d(k)])]),m("div",Ge,[m("article",We,[d(S,null,{default:o((({Component:e,route:t})=>[(i(),r(p(e)))])),_:1})]),Je])])])}],["__scopeId","data-v-d4813586"]]),redirect:"/home",children:[]},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>ae((()=>t.import("./404-legacy.js")),0,t.meta.url),meta:{title:"404"}}];const Qe=Y({history:K(),linkActiveClass:"active",routes:Ke});Qe.beforeEach((async(e,t)=>{const a=he();if(a.token){if("/login"===e.path)return{path:"/"};if(a.userInfo)return!0;{const t=await a.getUserInfo();return await a.getMenuList(),a.getAccessRoutes(t).forEach((e=>{Qe.addRoute("Layout",e)})),e.fullPath}}return"/login"===e.path||{path:"/login",query:{redirect:e.fullPath}}}));const Xe={install:(e,t)=>{e.config.globalProperties.$message=$;for(const[a,i]of Object.entries(Z))e.component(a,i);e.directive("permission",{mounted(e,t,a){const{userInfo:{role:i}}=he();i!==t.value&&e.parentNode.removeChild(e)}})}},Ze=_(te),et=A();et.use(P),Ze.use(et),Ze.use(Qe),Ze.use(Xe),Ze.mount("#app")}}}));
