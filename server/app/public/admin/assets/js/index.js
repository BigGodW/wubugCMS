var e=Object.defineProperty,t=(t,a,n)=>(((t,a,n)=>{a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n})(t,"symbol"!=typeof a?a+"":a,n),n);function a(){import.meta.url,import("_").catch((()=>1))}import{af as n,o as i,X as o,W as r,u as l,U as s,c as d,b as c,L as m,a1 as u,a2 as p,a as h,aa as g,F as v,Y as _,h as f,t as w,_ as E,k as b,w as k,$ as x,a3 as y,Z as I,at as j}from"./@vue.js";import{d as C,c as L}from"./pinia.js";import{i as P}from"./pinia-plugin-persist.js";import{E as A,z as S,a as O,b as T,c as D,d as R,e as V,f as B,g as M,h as z,i as N,j as U,k as q,l as F,m as $}from"./element-plus.js";import"./dayjs.js";import{u as H,a as W,c as G,b as K}from"./vue-router.js";import{a as X}from"./axios.js";import{a as Y}from"./js-cookie.js";import{E as Z}from"./@element-plus.js";/* empty css        */import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./escape-html.js";import"./normalize-wheel-es.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const J=(e,t)=>{const a=e.__vccOpts||e;for(const[n,i]of t)a[n]=i;return a},Q=J({__name:"App",setup(e){const t=S;return(e,a)=>{const d=n("router-view");return i(),o(l(A),{size:"","z-index":3e3,locale:l(t)},{default:r((()=>[s(d)])),_:1},8,["locale"])}}},[["__scopeId","data-v-ee806c20"]]),ee={},te=function(e,t,a){if(!t||0===t.length)return e();const n=document.getElementsByTagName("link");return Promise.all(t.map((e=>{if(e=function(e,t){return new URL(e,t).href}(e,a),e in ee)return;ee[e]=!0;const t=e.endsWith(".css"),i=t?'[rel="stylesheet"]':"";if(!!a)for(let a=n.length-1;a>=0;a--){const i=n[a];if(i.href===e&&(!t||"stylesheet"===i.rel))return}else if(document.querySelector('link[href="'.concat(e,'"]').concat(i)))return;const o=document.createElement("link");return o.rel=t?"stylesheet":"modulepreload",t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((t,a)=>{o.addEventListener("load",t),o.addEventListener("error",(()=>a(new Error("Unable to preload CSS for ".concat(e)))))})):void 0}))).then((()=>e())).catch((e=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}))},ae={},ne={version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"100px",height:"100px",viewBox:"0 0 100 100","enable-background":"new 0 0 100 100","xml:space":"preserve"},ie=[c('<g enable-background="new"><g><g><path fill-rule="evenodd" clip-rule="evenodd" fill="#6FB6E5" d="M80.016,82.438c0,0-1.72-4.671-2.309-5.946\n\t\t\t\tc-0.588-1.276-2.799-2.968-3.316-3.046c-0.52-0.079-3.409-0.045-3.75,0c0,0-1.732,1.457-1.875,3.48L66.458,87.95\n\t\t\t\tc0,0-0.413,2.156-0.288,2.757c0.125,0.6,0.801,2.093,3.028,1.16c2.227-0.934,8.364-4.062,8.364-4.062\n\t\t\t\tS80.465,86.291,80.016,82.438z"></path></g></g></g><g enable-background="new"><g><g><path fill-rule="evenodd" clip-rule="evenodd" fill="#2266B2" d="M26.652,33.413c-0.23-0.73-1.257-2.802-1.442-3.191\n\t\t\t\tc-0.185-0.39-0.721-1.256-1.442-1.16c-0.721,0.095-1.154,1.016-1.154,1.016c-0.275,0.91-0.013,1.541,0.145,2.03\n\t\t\t\ts1.875,2.756,1.875,2.756s1.51,2.262,1.875,2.611c0.365,0.349,0.866,0.145,0.866,0.145\n\t\t\t\tC27.643,37.171,27.152,34.805,26.652,33.413z"></path></g></g></g><g enable-background="new"><g><g><path fill-rule="evenodd" clip-rule="evenodd" fill="#2266B2" d="M14.537,25.146c-0.801-1.511-2.452-1.741-2.452-1.741\n\t\t\t\tc-2.019,0.703-2.164,2.901-2.164,2.901s-0.02,1.323,0.145,2.756c0.732,1.318,1.866,0.84,2.164,0.725\n\t\t\t\tc0.297-0.114,0.553-0.14,0.865-0.29c0.313-0.149,1.557-0.313,2.019-1.74S14.537,25.146,14.537,25.146z"></path></g></g></g><g enable-background="new"><g><g><path fill-rule="evenodd" clip-rule="evenodd" fill="#3882C5" d="M26.796,18.618c-0.081-0.952-0.384-2.248-1.298-3.917\n\t\t\t\tc-0.914-1.668-4.039-1.74-4.039-1.74c-0.288-0.063-2.884,0.336-3.75,1.45c-0.866,1.115-1.307,2.285-1.875,4.352\n\t\t\t\tc-0.568,2.067-0.145,3.627-0.145,3.627c1.172,2.792,3.75,4.224,5.625,4.496c1.875,0.271,3.065-0.798,3.75-1.306\n\t\t\t\ts1.793-2.193,1.875-2.9C27.021,21.973,26.877,19.569,26.796,18.618z"></path></g></g></g><g enable-background="new"><g><g><path fill-rule="evenodd" clip-rule="evenodd" fill="#59B431" d="M30.979,4.113c-0.353,0.236-5.142,2.862-6.202,3.916\n\t\t\t\ts-0.721,2.321-0.721,2.321c0.573,1.438,3.099,1.553,3.605,1.45c0.507-0.103,2.099-1.168,2.452-1.74\n\t\t\t\tc0.353-0.573,1.009-2.466,1.009-2.466s0.591-1.918,0.577-2.756C31.686,4,30.979,4.113,30.979,4.113z"></path></g></g></g><g enable-background="new"><g><g><path fill-rule="evenodd" clip-rule="evenodd" fill="#75BD46" d="M24.488,38.635c-2.253-3.373-4.741-5.966-5.769-6.527\n\t\t\t\tc-1.027-0.563-2.957-0.979-3.75-0.726c-0.793,0.254-2.74,0.87-2.74,0.87c-2.308,0.363-4.327,2.031-4.327,2.031\n\t\t\t\tC5,36.64,6.46,40.665,6.46,40.665c0.948,3.605,2.596,4.206,2.596,4.206l9.519,2.031l5.192,1.306c0,0,5.169,1.265,5.914,1.45\n\t\t\t\tc0.744,0.186,2.242,0.181,2.452,0C32.024,49.423,26.742,42.007,24.488,38.635z"></path></g></g></g><g enable-background="new"><g><g><path fill-rule="evenodd" clip-rule="evenodd" fill="#B2D247" d="M19.152,52.85c-1.112-3.688-2.658-3.627-4.759-4.207\n\t\t\t\ts-9.23-2.03-9.23-2.03l0.289,5.076c-0.124,2.093,2.019,9.139,2.019,9.139c0.371,4.351,4.471,5.076,4.471,5.076\n\t\t\t\tc2.72,0.249,4.739-0.414,5.913-1.16s1.586-2.756,1.586-2.756S19.296,56.683,19.152,52.85z"></path></g></g></g><g enable-background="new"><g><g><path fill-rule="evenodd" clip-rule="evenodd" fill="#F6EE6B" d="M40.642,60.972c0.024-0.362-2.74-3.191-2.74-3.191\n\t\t\t\tc-1.635-2.756-6.779-5.366-6.779-5.366l-4.759-1.016c-4.063-1.185-4.615,2.031-4.615,2.031v8.558\n\t\t\t\tc0.385,1.861,3.173,2.756,3.173,2.756l9.663-1.16C41.435,63.22,40.618,61.334,40.642,60.972z"></path></g></g></g><g enable-background="new"><g><g><path fill-rule="evenodd" clip-rule="evenodd" fill="#5675B9" d="M19.873,75.187c0.048-4.424-1.009-5.802-1.009-5.802\n\t\t\t\tc-1.395-1.861-4.904-0.87-4.904-0.87c-2.74,0.652-1.73,3.19-1.73,3.19s4.567,6.552,5.48,7.397c0.913,0.847,1.586,0.58,1.586,0.58\n\t\t\t\tC20.402,79.175,19.873,75.187,19.873,75.187z"></path></g></g></g><g enable-background="new"><g><g><path fill-rule="evenodd" clip-rule="evenodd" fill="#F08921" d="M38.911,65.469l-12.692,1.305\n\t\t\t\tc-3.836,0.783-4.039,4.062-4.039,4.062l0.433,10.733c0.462,3.336,3.173,4.642,3.173,4.642c0.98,0.929,6.922,1.016,6.922,1.016\n\t\t\t\tl5.625-3.626c2.654-1.77,3.605-5.947,3.605-5.947l0.433-8.848C41.968,65.149,38.911,65.469,38.911,65.469z"></path></g></g></g><g enable-background="new"><g><g><path fill-rule="evenodd" clip-rule="evenodd" fill="#CADD68" d="M53.735,69.463c-0.036-0.026-0.074-0.053-0.113-0.078\n\t\t\t\tl-3.462-1.741l-5.192-3.046l-0.577,11.895c0,0,0.173,1.683,2.163,1.305l7.5-4.932C54.055,72.865,55.58,70.802,53.735,69.463z"></path></g></g></g><g enable-background="new"><g><g><path fill-rule="evenodd" clip-rule="evenodd" fill="#9AC82E" d="M64.727,72.865l-5.769,0.291\n\t\t\t\tc-1.846,0.231-3.173,1.16-3.173,1.16l-7.067,4.786c-4.183,2.002-4.904,6.963-4.904,6.963l0.145,5.222\n\t\t\t\tc1.038,2.756,2.74,3.336,2.74,3.336s8.538,0.377,11.971,0c3.432-0.377,4.903-4.352,4.903-4.352l2.308-11.894\n\t\t\t\tC66.861,72.837,64.727,72.865,64.727,72.865z"></path></g></g></g><g enable-background="new"><g><g><path fill-rule="evenodd" clip-rule="evenodd" fill="#E94E4F" d="M38.19,86.5l-3.317,2.466c-1.514,1.645,0.577,2.756,0.577,2.756\n\t\t\t\th3.028c1.635-0.072,2.885-1.74,2.885-1.74l0.144-2.466C40.762,84.47,38.19,86.5,38.19,86.5z"></path></g></g></g><g enable-background="new"><g><g><path fill-rule="evenodd" clip-rule="evenodd" fill="#3882C5" d="M94.87,67.209l-12.259,4.786\n\t\t\t\tc-2.98,1.161-2.164,4.642-2.164,4.642l2.164,5.077c2.02,1.571,3.461-0.436,3.461-0.436l9.375-12.619\n\t\t\t\tC96,66.967,94.87,67.209,94.87,67.209z"></path></g></g></g>',14)];const oe=J(ae,[["render",function(e,t){return i(),d("svg",ne,ie)}]]),re=m({components:{IconLogo:oe},props:{isCollapse:{type:Boolean,default:!0}},data:()=>({}),created(){},methods:{}}),le={class:"logo"};const se=J(re,[["render",function(e,t,a,n,o,r){const l=oe;return i(),d("h1",le,[s(l,{class:"icon mr-10"}),u(h("span",null,"禅悦系统cms",512),[[p,!e.isCollapse]])])}],["__scopeId","data-v-53346c97"]]);const de=J({name:"SidebarItem",props:{data:{type:Array,default:()=>[]}},data:()=>({}),created(){},methods:{goto(e){var t;if((null==(t=null==e?void 0:e.children)?void 0:t.length)>0)return!1;this.$router.push({path:e.path,query:e.query})}}},[["render",function(e,t,a,l,c,m){const u=O,p=n("SidebarItem"),b=T,k=D;return i(!0),d(v,null,g(a.data,((e,t)=>{var a;return i(),d(v,{key:e.path},[(null==(a=null==e?void 0:e.children)?void 0:a.length)>0&&e.meta.isShow?(i(),o(b,{key:0,index:e.path},{title:r((()=>{var t,a;return[(null==(t=null==e?void 0:e.meta)?void 0:t.icon)?(i(),o(u,{key:0},{default:r((()=>[(i(),o(_(e.meta.icon)))])),_:2},1024)):f("",!0),h("span",null,w(null==(a=null==e?void 0:e.meta)?void 0:a.title),1)]})),default:r((()=>[s(p,{data:e.children},null,8,["data"])])),_:2},1032,["index"])):e.meta.isShow?(i(),o(k,{key:1,index:e.path},{title:r((()=>{var t;return[E(w(null==(t=null==e?void 0:e.meta)?void 0:t.title),1)]})),default:r((()=>{var t;return[(null==(t=null==e?void 0:e.meta)?void 0:t.icon)?(i(),o(u,{key:0},{default:r((()=>[(i(),o(_(e.meta.icon)))])),_:2},1024)):f("",!0)]})),_:2},1032,["index"])):f("",!0)],64)})),128)}],["__scopeId","data-v-c38ddda6"]]),ce=(e="token",t)=>{Y.set(e,t)},me=(e="token")=>Y.get(e);let ue=e=>{for(let t of e)t.label=t.name,t.value=t.id,t.children&&ue(t.children);return e},pe=(e,t=0,a=1)=>{let n=[];return e.forEach(((i,o)=>{i.pid==t&&(i.leval=a,i.children=pe(e,i.id,a+1),n.push(i))})),n},he=(e,t)=>{const a=[];let n=(e,t)=>{for(let i,o=0;o<t.length;o++)i=t[o],i.id==e&&(a.unshift(i.id),0!=i.pid&&n(i.pid,t))};return n(e,t),a},ge=e=>{let t=/src=[\'\"]?([^\'\"]*)[\'\"]?/i,a=e.match(/<img.*?(?:>|\/>)/gi),n=[];if(a)for(let i=0;i<a.length;i++){let e=a[i].match(t);e[1]&&n.push(e[1])}return n},ve=e=>e.replace(/<img[^>]+src="([^">]+)"/g,(function(e,t){return t.startsWith("public")&&(t=t.replace("public","/public")),'<img src="'+t+'"'})),_e=e=>{let t=e.indexOf("</p>");-1!==t&&(e=e.substring(0,t+4));let a=document.createElement("div");a.innerHTML=e;let n=a.textContent;if(n.length>225){let e=n.lastIndexOf("。",255);-1!==e&&(n=n.slice(0,e+1))}return a.remove(),n};X.defaults.headers.post["Content-Type"]="application/json; charset=utf-8",X.defaults.crossDomain=!0,X.defaults.withCredentials=!0,X.defaults.timeout=1e4;let fe=X.create({baseURL:""});fe.interceptors.request.use((e=>{const{token:t}=Ie();return t&&(e.headers.auth=t),e}),(e=>{console.log(e),Promise.reject(e||"网络异常")})),fe.interceptors.response.use((e=>{const{code:t,data:a,message:n}=e;if(0===a.code){console.log("data->",a),"TokenExpiredError"==a.msg.name?R({message:"登录失效，请重新登录",type:"warning"}):R.success(a.msg);Ie().logout(),location.reload()}return Promise.resolve(a)}),(e=>{console.warn(e);const{response:t}=e;return t&&t.status,Promise.reject(e)})),fe.jsonp=function({url:e,data:t={}}){let a=+new Date;const n=t.callback?t.callback:"light_".concat(a);t.callback=n;const i=document.createElement("script");return i.setAttribute("src",e+"?"+function(e={}){const t=Object.keys(e),a=Object.values(e);return t.map(((e,t)=>e+"="+a[t])).join("&")}(t)),document.body.appendChild(i),new Promise(((e,t)=>{window[n]=t=>{e(t),i&&document.body.removeChild(i),delete window[n]},i.onerror=function(e){t(e)}}))};let we={pre:{BASE_API:""},prd:{BASE_API:""}};console.log("api[env]",we.pre);const Ee=we.pre,be=class e{version(){return"v.1.0"}static get(t={}){return fe({url:"".concat(e.API,"/api/get"),method:"GET",params:t})}static post(t={}){return fe({url:"".concat(e.API,"/api/post"),method:"POST",data:t})}static put(t={}){return fe({url:"".concat(e.API,"/api/put"),method:"PUT",data:t})}static patch(t={}){return fe({url:"".concat(e.API,"/api/patch"),method:"PATCH",data:t})}static delete(){return fe({url:"".concat(e.API,"/api/delete?id=1"),method:"Delete"})}};t(be,"API",Ee.BASE_API),t(be,"upload",(e=>fe({url:"".concat(be.API,"/api/delete?id=1"),method:"post",headers:{"Content-type":"multipart/form-data"},data:e})));let ke=be;class xe extends ke{constructor(e){super(e)}static toLogin(e){return fe({url:"".concat(Ee.BASE_API,"/api/admin/login"),method:"post",data:e})}static userInfo(){return new Promise(((e,t)=>{setTimeout((()=>{e({code:200,data:{userId:"123456",userName:"mingkong",nickName:"明空",role:"admin"}})}),300)}))}static menuList(){return new Promise(((e,t)=>{setTimeout((()=>{e({code:200,data:Ke})}),300)}))}}const ye=Object.assign({"/src/views/admin/add.vue":()=>te((()=>import("./add.js")),["./add.js","./element-plus.js","./@vue.js","./lodash-es.js","./async-validator.js","./@vueuse.js","./dayjs.js","./@element-plus.js","./@ctrl.js","./@popperjs.js","./memoize-one.js","./escape-html.js","./normalize-wheel-es.js","..\\css\\element-plus.css","./admin.js","./pinia.js","./pinia-plugin-persist.js","./vue-router.js","./axios.js","./js-cookie.js","..\\css\\saduocss.css"],import.meta.url),"/src/views/admin/edit.vue":()=>te((()=>import("./edit.js")),["./edit.js","./element-plus.js","./@vue.js","./lodash-es.js","./async-validator.js","./@vueuse.js","./dayjs.js","./@element-plus.js","./@ctrl.js","./@popperjs.js","./memoize-one.js","./escape-html.js","./normalize-wheel-es.js","..\\css\\element-plus.css","./admin.js","./pinia.js","./pinia-plugin-persist.js","./vue-router.js","./axios.js","./js-cookie.js","..\\css\\saduocss.css"],import.meta.url),"/src/views/admin/index.vue":()=>te((()=>import("./index2.js")),["./index2.js","./element-plus.js","./@vue.js","./lodash-es.js","./async-validator.js","./@vueuse.js","./dayjs.js","./@element-plus.js","./@ctrl.js","./@popperjs.js","./memoize-one.js","./escape-html.js","./normalize-wheel-es.js","..\\css\\element-plus.css","./admin.js","./pinia.js","./pinia-plugin-persist.js","./vue-router.js","./axios.js","./js-cookie.js","..\\css\\saduocss.css"],import.meta.url),"/src/views/article/add.vue":()=>te((()=>import("./add2.js")),["./add2.js","./element-plus.js","./@vue.js","./lodash-es.js","./async-validator.js","./@vueuse.js","./dayjs.js","./@element-plus.js","./@ctrl.js","./@popperjs.js","./memoize-one.js","./escape-html.js","./normalize-wheel-es.js","..\\css\\element-plus.css","./category.js","./article.js","./tag.js","./@jsdawn.js","./tinymce.js","./pinia.js","./pinia-plugin-persist.js","./vue-router.js","./axios.js","./js-cookie.js","..\\css\\add.css","..\\css\\saduocss.css"],import.meta.url),"/src/views/article/edit.vue":()=>te((()=>import("./edit2.js")),["./edit2.js","./element-plus.js","./@vue.js","./lodash-es.js","./async-validator.js","./@vueuse.js","./dayjs.js","./@element-plus.js","./@ctrl.js","./@popperjs.js","./memoize-one.js","./escape-html.js","./normalize-wheel-es.js","..\\css\\element-plus.css","./category.js","./article.js","./@jsdawn.js","./tinymce.js","./tag.js","./pinia.js","./pinia-plugin-persist.js","./vue-router.js","./axios.js","./js-cookie.js","..\\css\\add.css","..\\css\\saduocss.css"],import.meta.url),"/src/views/article/index.vue":()=>te((()=>import("./index3.js")),["./index3.js","./element-plus.js","./@vue.js","./lodash-es.js","./async-validator.js","./@vueuse.js","./dayjs.js","./@element-plus.js","./@ctrl.js","./@popperjs.js","./memoize-one.js","./escape-html.js","./normalize-wheel-es.js","..\\css\\element-plus.css","./article.js","./category.js","./pinia.js","./pinia-plugin-persist.js","./vue-router.js","./axios.js","./js-cookie.js","..\\css\\index3.css","..\\css\\saduocss.css"],import.meta.url),"/src/views/category/add.vue":()=>te((()=>import("./add3.js")),["./add3.js","./element-plus.js","./@vue.js","./lodash-es.js","./async-validator.js","./@vueuse.js","./dayjs.js","./@element-plus.js","./@ctrl.js","./@popperjs.js","./memoize-one.js","./escape-html.js","./normalize-wheel-es.js","..\\css\\element-plus.css","./category.js","./model.js","./pinyin-pro.js","./pinia.js","./pinia-plugin-persist.js","./vue-router.js","./axios.js","./js-cookie.js","..\\css\\saduocss.css"],import.meta.url),"/src/views/category/edit.vue":()=>te((()=>import("./edit3.js")),["./edit3.js","./element-plus.js","./@vue.js","./lodash-es.js","./async-validator.js","./@vueuse.js","./dayjs.js","./@element-plus.js","./@ctrl.js","./@popperjs.js","./memoize-one.js","./escape-html.js","./normalize-wheel-es.js","..\\css\\element-plus.css","./category.js","./model.js","./pinyin-pro.js","./pinia.js","./pinia-plugin-persist.js","./vue-router.js","./axios.js","./js-cookie.js","..\\css\\saduocss.css"],import.meta.url),"/src/views/category/index.vue":()=>te((()=>import("./index4.js")),["./index4.js","./element-plus.js","./@vue.js","./lodash-es.js","./async-validator.js","./@vueuse.js","./dayjs.js","./@element-plus.js","./@ctrl.js","./@popperjs.js","./memoize-one.js","./escape-html.js","./normalize-wheel-es.js","..\\css\\element-plus.css","./category.js","./pinia.js","./pinia-plugin-persist.js","./vue-router.js","./axios.js","./js-cookie.js","..\\css\\index4.css","..\\css\\saduocss.css"],import.meta.url),"/src/views/dashboard/index.vue":()=>te((()=>import("./index5.js")),["./index5.js","./@vue.js","./pinia.js","./pinia-plugin-persist.js","./element-plus.js","./lodash-es.js","./async-validator.js","./@vueuse.js","./dayjs.js","./@element-plus.js","./@ctrl.js","./@popperjs.js","./memoize-one.js","./escape-html.js","./normalize-wheel-es.js","..\\css\\element-plus.css","./vue-router.js","./axios.js","./js-cookie.js","..\\css\\saduocss.css"],import.meta.url),"/src/views/field/add.vue":()=>te((()=>import("./add4.js")),["./add4.js","./element-plus.js","./@vue.js","./lodash-es.js","./async-validator.js","./@vueuse.js","./dayjs.js","./@element-plus.js","./@ctrl.js","./@popperjs.js","./memoize-one.js","./escape-html.js","./normalize-wheel-es.js","..\\css\\element-plus.css","./field.js","./pinia.js","./pinia-plugin-persist.js","./vue-router.js","./axios.js","./js-cookie.js","..\\css\\saduocss.css"],import.meta.url),"/src/views/field/edit.vue":()=>te((()=>import("./edit4.js")),["./edit4.js","./element-plus.js","./@vue.js","./lodash-es.js","./async-validator.js","./@vueuse.js","./dayjs.js","./@element-plus.js","./@ctrl.js","./@popperjs.js","./memoize-one.js","./escape-html.js","./normalize-wheel-es.js","..\\css\\element-plus.css","./field.js","./model.js","./pinia.js","./pinia-plugin-persist.js","./vue-router.js","./axios.js","./js-cookie.js","..\\css\\saduocss.css"],import.meta.url),"/src/views/field/index.vue":()=>te((()=>import("./index6.js")),["./index6.js","./element-plus.js","./@vue.js","./lodash-es.js","./async-validator.js","./@vueuse.js","./dayjs.js","./@element-plus.js","./@ctrl.js","./@popperjs.js","./memoize-one.js","./escape-html.js","./normalize-wheel-es.js","..\\css\\element-plus.css","./field.js","./model.js","./pinia.js","./pinia-plugin-persist.js","./vue-router.js","./axios.js","./js-cookie.js","..\\css\\saduocss.css"],import.meta.url),"/src/views/frag/add.vue":()=>te((()=>import("./add5.js")),["./add5.js","./element-plus.js","./@vue.js","./lodash-es.js","./async-validator.js","./@vueuse.js","./dayjs.js","./@element-plus.js","./@ctrl.js","./@popperjs.js","./memoize-one.js","./escape-html.js","./normalize-wheel-es.js","..\\css\\element-plus.css","./frag.js","./@jsdawn.js","./tinymce.js","./pinyin-pro.js","./pinia.js","./pinia-plugin-persist.js","./vue-router.js","./axios.js","./js-cookie.js","..\\css\\add2.css","..\\css\\saduocss.css"],import.meta.url),"/src/views/frag/edit.vue":()=>te((()=>import("./edit5.js")),["./edit5.js","./element-plus.js","./@vue.js","./lodash-es.js","./async-validator.js","./@vueuse.js","./dayjs.js","./@element-plus.js","./@ctrl.js","./@popperjs.js","./memoize-one.js","./escape-html.js","./normalize-wheel-es.js","..\\css\\element-plus.css","./frag.js","./@jsdawn.js","./tinymce.js","./pinia.js","./pinia-plugin-persist.js","./vue-router.js","./axios.js","./js-cookie.js","..\\css\\edit.css","..\\css\\saduocss.css"],import.meta.url),"/src/views/frag/index.vue":()=>te((()=>import("./index7.js")),["./index7.js","./element-plus.js","./@vue.js","./lodash-es.js","./async-validator.js","./@vueuse.js","./dayjs.js","./@element-plus.js","./@ctrl.js","./@popperjs.js","./memoize-one.js","./escape-html.js","./normalize-wheel-es.js","..\\css\\element-plus.css","./frag.js","./pinia.js","./pinia-plugin-persist.js","./vue-router.js","./axios.js","./js-cookie.js","..\\css\\index5.css","..\\css\\saduocss.css"],import.meta.url),"/src/views/friendlink/add.vue":()=>te((()=>import("./add6.js")),["./add6.js","./element-plus.js","./@vue.js","./lodash-es.js","./async-validator.js","./@vueuse.js","./dayjs.js","./@element-plus.js","./@ctrl.js","./@popperjs.js","./memoize-one.js","./escape-html.js","./normalize-wheel-es.js","..\\css\\element-plus.css","./friendlink.js","./pinia.js","./pinia-plugin-persist.js","./vue-router.js","./axios.js","./js-cookie.js","..\\css\\saduocss.css"],import.meta.url),"/src/views/friendlink/edit.vue":()=>te((()=>import("./edit6.js")),["./edit6.js","./element-plus.js","./@vue.js","./lodash-es.js","./async-validator.js","./@vueuse.js","./dayjs.js","./@element-plus.js","./@ctrl.js","./@popperjs.js","./memoize-one.js","./escape-html.js","./normalize-wheel-es.js","..\\css\\element-plus.css","./friendlink.js","./pinia.js","./pinia-plugin-persist.js","./vue-router.js","./axios.js","./js-cookie.js","..\\css\\saduocss.css"],import.meta.url),"/src/views/friendlink/index.vue":()=>te((()=>import("./index8.js")),["./index8.js","./element-plus.js","./@vue.js","./lodash-es.js","./async-validator.js","./@vueuse.js","./dayjs.js","./@element-plus.js","./@ctrl.js","./@popperjs.js","./memoize-one.js","./escape-html.js","./normalize-wheel-es.js","..\\css\\element-plus.css","./friendlink.js","./pinia.js","./pinia-plugin-persist.js","./vue-router.js","./axios.js","./js-cookie.js","..\\css\\saduocss.css"],import.meta.url),"/src/views/home/info.vue":()=>te((()=>import("./info.js")),["./info.js","./element-plus.js","./@vue.js","./lodash-es.js","./async-validator.js","./@vueuse.js","./dayjs.js","./@element-plus.js","./@ctrl.js","./@popperjs.js","./memoize-one.js","./escape-html.js","./normalize-wheel-es.js","..\\css\\element-plus.css","./article.js","./site.js","./pinia.js","./pinia-plugin-persist.js","./vue-router.js","./axios.js","./js-cookie.js","..\\css\\info.css","..\\css\\saduocss.css"],import.meta.url),"/src/views/home/sys.vue":()=>te((()=>import("./sys.js")),["./sys.js","./element-plus.js","./@vue.js","./lodash-es.js","./async-validator.js","./@vueuse.js","./dayjs.js","./@element-plus.js","./@ctrl.js","./@popperjs.js","./memoize-one.js","./escape-html.js","./normalize-wheel-es.js","..\\css\\element-plus.css","./site.js","./pinia.js","./pinia-plugin-persist.js","./vue-router.js","./axios.js","./js-cookie.js","..\\css\\saduocss.css"],import.meta.url),"/src/views/layout/index.vue":()=>te((()=>import("./index9.js")),["./index9.js","./@vue.js","./pinia.js","./pinia-plugin-persist.js","./element-plus.js","./lodash-es.js","./async-validator.js","./@vueuse.js","./dayjs.js","./@element-plus.js","./@ctrl.js","./@popperjs.js","./memoize-one.js","./escape-html.js","./normalize-wheel-es.js","..\\css\\element-plus.css","./vue-router.js","./axios.js","./js-cookie.js","..\\css\\saduocss.css"],import.meta.url),"/src/views/login/index.vue":()=>te((()=>import("./index10.js")),["./index10.js","./element-plus.js","./@vue.js","./lodash-es.js","./async-validator.js","./@vueuse.js","./dayjs.js","./@element-plus.js","./@ctrl.js","./@popperjs.js","./memoize-one.js","./escape-html.js","./normalize-wheel-es.js","..\\css\\element-plus.css","./pinia.js","./pinia-plugin-persist.js","./vue-router.js","./axios.js","./js-cookie.js","..\\css\\index2.css","..\\css\\saduocss.css"],import.meta.url),"/src/views/message/add.vue":()=>te((()=>import("./add7.js")),["./add7.js","./element-plus.js","./@vue.js","./lodash-es.js","./async-validator.js","./@vueuse.js","./dayjs.js","./@element-plus.js","./@ctrl.js","./@popperjs.js","./memoize-one.js","./escape-html.js","./normalize-wheel-es.js","..\\css\\element-plus.css","./message.js","./pinia.js","./pinia-plugin-persist.js","./vue-router.js","./axios.js","./js-cookie.js","..\\css\\saduocss.css"],import.meta.url),"/src/views/message/edit.vue":()=>te((()=>import("./edit7.js")),["./edit7.js","./element-plus.js","./@vue.js","./lodash-es.js","./async-validator.js","./@vueuse.js","./dayjs.js","./@element-plus.js","./@ctrl.js","./@popperjs.js","./memoize-one.js","./escape-html.js","./normalize-wheel-es.js","..\\css\\element-plus.css","./message.js","./pinia.js","./pinia-plugin-persist.js","./vue-router.js","./axios.js","./js-cookie.js","..\\css\\saduocss.css"],import.meta.url),"/src/views/message/index.vue":()=>te((()=>import("./index11.js")),["./index11.js","./element-plus.js","./@vue.js","./lodash-es.js","./async-validator.js","./@vueuse.js","./dayjs.js","./@element-plus.js","./@ctrl.js","./@popperjs.js","./memoize-one.js","./escape-html.js","./normalize-wheel-es.js","..\\css\\element-plus.css","./message.js","./pinia.js","./pinia-plugin-persist.js","./vue-router.js","./axios.js","./js-cookie.js","..\\css\\saduocss.css"],import.meta.url),"/src/views/model/add.vue":()=>te((()=>import("./add8.js")),["./add8.js","./element-plus.js","./@vue.js","./lodash-es.js","./async-validator.js","./@vueuse.js","./dayjs.js","./@element-plus.js","./@ctrl.js","./@popperjs.js","./memoize-one.js","./escape-html.js","./normalize-wheel-es.js","..\\css\\element-plus.css","./model.js","./pinia.js","./pinia-plugin-persist.js","./vue-router.js","./axios.js","./js-cookie.js","..\\css\\saduocss.css"],import.meta.url),"/src/views/model/edit.vue":()=>te((()=>import("./edit8.js")),["./edit8.js","./element-plus.js","./@vue.js","./lodash-es.js","./async-validator.js","./@vueuse.js","./dayjs.js","./@element-plus.js","./@ctrl.js","./@popperjs.js","./memoize-one.js","./escape-html.js","./normalize-wheel-es.js","..\\css\\element-plus.css","./model.js","./pinia.js","./pinia-plugin-persist.js","./vue-router.js","./axios.js","./js-cookie.js","..\\css\\saduocss.css"],import.meta.url),"/src/views/model/index.vue":()=>te((()=>import("./index12.js")),["./index12.js","./element-plus.js","./@vue.js","./lodash-es.js","./async-validator.js","./@vueuse.js","./dayjs.js","./@element-plus.js","./@ctrl.js","./@popperjs.js","./memoize-one.js","./escape-html.js","./normalize-wheel-es.js","..\\css\\element-plus.css","./model.js","./pinia.js","./pinia-plugin-persist.js","./vue-router.js","./axios.js","./js-cookie.js","..\\css\\index6.css","..\\css\\saduocss.css"],import.meta.url),"/src/views/tag/add.vue":()=>te((()=>import("./add9.js")),["./add9.js","./element-plus.js","./@vue.js","./lodash-es.js","./async-validator.js","./@vueuse.js","./dayjs.js","./@element-plus.js","./@ctrl.js","./@popperjs.js","./memoize-one.js","./escape-html.js","./normalize-wheel-es.js","..\\css\\element-plus.css","./tag.js","./pinyin-pro.js","./pinia.js","./pinia-plugin-persist.js","./vue-router.js","./axios.js","./js-cookie.js","..\\css\\saduocss.css"],import.meta.url),"/src/views/tag/edit.vue":()=>te((()=>import("./edit9.js")),["./edit9.js","./element-plus.js","./@vue.js","./lodash-es.js","./async-validator.js","./@vueuse.js","./dayjs.js","./@element-plus.js","./@ctrl.js","./@popperjs.js","./memoize-one.js","./escape-html.js","./normalize-wheel-es.js","..\\css\\element-plus.css","./tag.js","./pinyin-pro.js","./pinia.js","./pinia-plugin-persist.js","./vue-router.js","./axios.js","./js-cookie.js","..\\css\\saduocss.css"],import.meta.url),"/src/views/tag/index.vue":()=>te((()=>import("./index13.js")),["./index13.js","./element-plus.js","./@vue.js","./lodash-es.js","./async-validator.js","./@vueuse.js","./dayjs.js","./@element-plus.js","./@ctrl.js","./@popperjs.js","./memoize-one.js","./escape-html.js","./normalize-wheel-es.js","..\\css\\element-plus.css","./tag.js","./pinia.js","./pinia-plugin-persist.js","./vue-router.js","./axios.js","./js-cookie.js","..\\css\\index7.css","..\\css\\saduocss.css"],import.meta.url)}),Ie=C("user",{state:()=>({token:me("token")||"",userInfo:null,menuList:[]}),actions:{async login(e){try{const t=await xe.toLogin(e);return 200==t.code&&(this.token=t.data.token,ce("token",t.data.token)),t}catch(t){console.log(t)}},async getUserInfo(){try{const e=await xe.userInfo();if(console.log("getUserInfo",e),200==e.code)return this.userInfo=e.data,e.data.role}catch(e){console.log(e)}},async getMenuList(){try{const e=await xe.menuList();if(200==e.code){let t=Ce(e.data);console.log("res----\x3e",t),this.menuList=t}}catch(e){console.log(e)}},logout(){this.userInfo=null,this.token="",localStorage.removeItem("token")},getAccessRoutes(e){const t=je(this.menuList,e);return this.menuList=t,t}},persist:{enabled:!0,strategies:[{key:"user",paths:["token"]}]}});function je(e,t){const a=[];return e.forEach((e=>{var n;const i={...e};(null==(n=null==i?void 0:i.children)?void 0:n.length)>0&&(i.children=je(i.children,t)),function(e,t){var a;return!(null==(a=null==e?void 0:e.meta)?void 0:a.role)||e.meta.role.includes(t)}(i,t)&&a.push(i)})),a}function Ce(e){let t=[];return e.forEach((e=>{e.component&&(e.component=e.component.replace("@/","/src/"),e.component=ye["".concat(e.component)]),t.push(e),e.children&&Ce(e.children)})),t}const Le=J(m({props:{isCollapse:Boolean},components:{SidebarItem:de},data:()=>({activeIndex:"",menuList:[]}),watch:{$route(e,t){this.activeIndex="/"+e.path.split("/")[1]||e.path}},created(){const e=H(),{menuList:t}=Ie();this.menuList=t,this.activeIndex="/"+e.path.split("/")[1]||e.path},methods:{handleOpen(e,t){console.log(e,t)},handleClose(e,t){console.log(e,t)}}}),[["render",function(e,t,a,l,d,c){const m=n("SidebarItem"),u=V;return i(),o(u,{"active-text-color":"","background-color":"",class:"el-menu-vertical-demo","text-color":"","default-active":e.activeIndex,router:!0,"unique-opened":!0,"collapse-transition":!0,collapse:e.isCollapse,"popper-effect":"light",onOpen:e.handleOpen,onClose:e.handleClose},{default:r((()=>[s(m,{data:e.menuList},null,8,["data"])])),_:1},8,["default-active","collapse","onOpen","onClose"])}],["__scopeId","data-v-9687d3bd"]]),Pe={},Ae={viewBox:"0 0 48 48",fill:"none",stroke:"currentColor",xmlns:"http://www.w3.org/2000/svg",class:"arco-icon arco-icon-launch","stroke-width":"4","stroke-linecap":"butt","stroke-linejoin":"arcs",filter:"","data-v-249840b0":"",style:{"font-size":"32px"}},Se=[h("path",{d:"M41 26v14a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h14M19.822 28.178 39.899 8.1M41 20V7H28"},null,-1)];const Oe=J(Pe,[["render",function(e,t){return i(),d("svg",Ae,Se)}]]),Te={justify:"end",class:"navbar-cont",gutter:20},De={href:"/",target:"_blank"},Re=m({name:"NavBar"}),Ve=J(Object.assign(Re,{setup(e){const t=()=>{Ie().logout(),location.reload()};return(e,a)=>{const n=B,o=M,l=z,c=N,m=U;return i(),d("div",Te,[s(o,{class:"mr-10",effect:"dark",content:"站点",placement:"top-start"},{default:r((()=>[h("a",De,[s(n,{icon:Oe,circle:""})])])),_:1}),s(o,{class:"mr-10",effect:"dark",content:"管理员",placement:"top-start"},{default:r((()=>[s(m,{trigger:"click"},{dropdown:r((()=>[s(c,null,{default:r((()=>[s(l,{onClick:t},{default:r((()=>[E("退出登录")])),_:1})])),_:1})])),default:r((()=>[s(n,{icon:"Avatar",circle:""})])),_:1})])),_:1})])}}}),[["__scopeId","data-v-7d7c521c"]]),Be={key:0,class:"no-redirect"},Me=["onClick"],ze=m({name:"BreadCrumb"}),Ne=m({components:{SideBar:Le,NavBar:Ve,BreadCrumb:J(Object.assign(ze,{setup(e){const t=H(),a=b([]);k(t,(()=>{a.value=t.matched.filter((e=>e.meta&&e.meta.title))}),{immediate:!0});const n=W();return(e,t)=>{const l=q,c=F;return i(),o(c,{class:"breadcrumb",separator:"/"},{default:r((()=>[s(x,{name:"breadcrumb"},{default:r((()=>[(i(!0),d(v,null,g(a.value,((e,t)=>(i(),o(l,{key:e.path},{default:r((()=>[t===a.value.length-1?(i(),d("span",Be,w(e.meta.title),1)):(i(),d("a",{key:1,class:"redirect",onClick:y((t=>(e=>{console.log(e),n.push(e.path)})(e)),["prevent"])},w(e.meta.title),9,Me))])),_:2},1024)))),128))])),_:1})])),_:1})}}}),[["__scopeId","data-v-676e3626"]]),Logo:se},data:()=>({isCollapse:!1}),watch:{$route(e,t){this.activeIndex=e.path}},created(){window.addEventListener("resize",this.changeCollapse)},mounted(){this.changeCollapse()},methods:{changeCollapse(){let e=document.documentElement.clientWidth;this.isCollapse=e<=640},switchCollapse(e,t){console.log(e,t),this.isCollapse=!this.isCollapse},handleClose(e,t){console.log(e,t)}}}),Ue={class:"app-wrapper"},qe={class:"main-container"},Fe={class:"header"},$e={class:"navbar row justify-between align-c"},He={class:"row align-c"},We={class:"app-main"},Ge={class:"container"};const Ke=[{path:"/home",name:"home-info",component:"@/views/home/info.vue",meta:{title:"网站信息",icon:"DataLine",isShow:!0,role:["admin"]}},{path:"/sys",name:"sys",meta:{title:"系统管理",icon:"Setting",isShow:!0,role:["admin"]},redirect:"/system",children:[{path:"/system",name:"sys-index",component:"@/views/home/sys.vue",meta:{title:"系统设置",isShow:!0,role:["admin"]}}]},{path:"/content",name:"content",meta:{title:"内容管理",isShow:!0,icon:"Grid",role:["admin"]},redirect:"/category",children:[{path:"/category",name:"category-index",component:"@/views/category/index.vue",meta:{title:"栏目管理",isShow:!0,role:["admin"]}},{path:"/category/add",name:"category-add",component:"@/views/category/add.vue",meta:{title:"栏目管理-新增",isShow:!1,role:["admin"]}},{path:"/category/edit/:id",name:"category-edit",component:"@/views/category/edit.vue",meta:{title:"页面管理-更新",isShow:!1,role:["admin"]}},{path:"/article",name:"article-index",component:"@/views/article/index.vue",meta:{title:"文章管理",isShow:!0,role:["admin"]}},{path:"/article/add",name:"article-add",component:"@/views/article/add.vue",meta:{title:"文章管理-新增",isShow:!1,role:["admin"]}},{path:"/article/edit/:id",name:"article-edit",component:"@/views/article/edit.vue",meta:{title:"文章管理-更新",isShow:!1,role:["admin"]}},{path:"/tag",name:"tag-index",component:"@/views/tag/index.vue",meta:{title:"标签管理",isShow:!0,role:["admin"]}},{path:"/tag/add",name:"tag-add",component:"@/views/tag/add.vue",meta:{title:"标签管理-新增",isShow:!1,role:["admin"]}},{path:"/tag/edit/:id",name:"tag-edit",component:"@/views/tag/edit.vue",meta:{title:"标签管理-更新",isShow:!1,role:["admin"]}},{path:"/frag",name:"frag-index",component:"@/views/frag/index.vue",meta:{title:"碎片管理",isShow:!0,role:["admin"]}},{path:"/frag/add",name:"frag-add",component:"@/views/frag/add.vue",meta:{title:"碎片管理-新增",isShow:!1,role:["admin"]}},{path:"/frag/edit/:id",name:"frag-edit",component:"@/views/frag/edit.vue",meta:{title:"碎片管理-更新",isShow:!1,role:["admin"]}}]},{path:"/extend",name:"extend",meta:{title:"功能管理",icon:"Operation",isShow:!0,role:["admin"]},children:[{path:"/model",name:"model-index",component:"@/views/model/index.vue",meta:{title:"模型管理",isShow:!0,role:["admin"]}},{path:"/model/add",name:"model-add",component:"@/views/model/add.vue",meta:{title:"模型管理-新增",isShow:!1,role:["admin"]}},{path:"/model/edit/:id",name:"model-edit",component:"@/views/model/edit.vue",meta:{title:"模型管理-更新",isShow:!1,role:["admin"]}},{path:"/model/field",name:"field-index",component:"@/views/field/index.vue",meta:{title:"字段管理",isShow:!1,role:["admin"]}},{path:"/model/field/add",name:"field-add",component:"@/views/field/add.vue",meta:{title:"字段管理-新增",isShow:!1,role:["admin"]}},{path:"/model/field/edit",name:"field-edit",component:"@/views/field/edit.vue",meta:{title:"字段管理-更新",isShow:!1,role:["admin"]}},{path:"/friendlink",name:"friendlink-index",component:"@/views/friendlink/index.vue",meta:{title:"友情链接",isShow:!0,role:["admin"]}},{path:"/friendlink/add",name:"friendlink-add",component:"@/views/friendlink/add.vue",meta:{title:"友情链接-新增",isShow:!1,role:["admin"]}},{path:"/friendlink/edit/:id",name:"friendlink-edit",component:"@/views/friendlink/edit.vue",meta:{title:"友情链接-更新",isShow:!1,role:["admin"]}},{path:"/message",name:"message-index",component:"@/views/message/index.vue",meta:{title:"消息管理",isShow:!0,role:["admin"]}},{path:"/message/add",name:"message-add",component:"@/views/message/add.vue",meta:{title:"消息管理-新增",isShow:!1,role:["admin"]}},{path:"/message/edit/:id",name:"message-edit",component:"@/views/message/edit.vue",meta:{title:"消息管理-更新",isShow:!1,role:["admin"]}}]},{path:"/manage",name:"manage",meta:{title:"管理员",isShow:!0,icon:"CreditCard",role:["admin"]},redirect:"/admin",children:[{path:"/admin",name:"admin-index",component:"@/views/admin/index.vue",meta:{title:"管理员列表",isShow:!0,role:["admin"]}},{path:"/admin/add",name:"admin-add",component:"@/views/admin/add.vue",meta:{title:"管理员列表-新增",isShow:!1,role:["admin"]}},{path:"/admin/edit/:id",name:"admin-edit",component:"@/views/admin/edit.vue",meta:{title:"管理员列表-更新",isShow:!1,role:["admin"]}}]}],Xe=[{path:"/login",name:"login",component:()=>te((()=>import("./index10.js")),["./index10.js","./element-plus.js","./@vue.js","./lodash-es.js","./async-validator.js","./@vueuse.js","./dayjs.js","./@element-plus.js","./@ctrl.js","./@popperjs.js","./memoize-one.js","./escape-html.js","./normalize-wheel-es.js","..\\css\\element-plus.css","./pinia.js","./pinia-plugin-persist.js","./vue-router.js","./axios.js","./js-cookie.js","..\\css\\index2.css","..\\css\\saduocss.css"],import.meta.url),meta:{title:"登录"}},{path:"/",name:"Layout",component:J(Ne,[["render",function(e,t,a,l,c,m){const u=se,p=n("SideBar"),g=$,v=n("Expand"),f=n("Fold"),w=O,E=n("BreadCrumb"),b=n("NavBar"),k=n("router-view");return i(),d("div",Ue,[s(g,{class:"sidebar",style:I({width:e.isCollapse?"65px":"200px"})},{default:r((()=>[s(u,{isCollapse:e.isCollapse},null,8,["isCollapse"]),s(p,{isCollapse:e.isCollapse},null,8,["isCollapse"])])),_:1},8,["style"]),h("div",qe,[h("div",Fe,[h("div",$e,[h("div",He,[s(w,{class:"ico-collapse",onClick:e.switchCollapse},{default:r((()=>[1==e.isCollapse?(i(),o(v,{key:0})):(i(),o(f,{key:1}))])),_:1},8,["onClick"]),s(E)]),s(b)])]),h("div",We,[h("article",Ge,[s(k,null,{default:r((({Component:e,route:t})=>[(i(),o(_(e)))])),_:1})])])])])}],["__scopeId","data-v-48727ce6"]]),redirect:"/home",children:[]},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>te((()=>import("./404.js")),["./404.js","./element-plus.js","./@vue.js","./lodash-es.js","./async-validator.js","./@vueuse.js","./dayjs.js","./@element-plus.js","./@ctrl.js","./@popperjs.js","./memoize-one.js","./escape-html.js","./normalize-wheel-es.js","..\\css\\element-plus.css","./pinia.js","./pinia-plugin-persist.js","./vue-router.js","./axios.js","./js-cookie.js","..\\css\\404.css","..\\css\\saduocss.css"],import.meta.url),meta:{title:"404"}}],Ye=G({history:K(),linkActiveClass:"active",routes:Xe});Ye.beforeEach((async(e,t)=>{const a=Ie();if(a.token){if("/login"===e.path)return{path:"/"};if(a.userInfo)return!0;{const t=await a.getUserInfo();await a.getMenuList();return a.getAccessRoutes(t).forEach((e=>{Ye.addRoute("Layout",e)})),e.fullPath}}return"/login"===e.path||{path:"/login",query:{redirect:e.fullPath}}}));const Ze={install:(e,t)=>{console.log("萨埵第一个插件"),e.config.globalProperties.$message=R;for(const[a,n]of Object.entries(Z))e.component(a,n);e.directive("permission",{mounted(e,t,a){const{userInfo:{role:n}}=Ie();n!==t.value&&e.parentNode.removeChild(e)}})}},Je=j(Q),Qe=L();Qe.use(P),Je.use(Qe),Je.use(Ye),Je.use(Ze),Je.mount("#app");export{Ee as A,J as _,a as __vite_legacy_guard,oe as a,ue as b,ge as c,_e as d,he as e,ve as f,me as g,fe as h,ce as s,pe as t,Ie as u};
