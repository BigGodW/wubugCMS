import{s as e,u as t,av as n,y as r,d as o,T as a,J as c,z as s,ae as l,O as i,j as u,k as f}from"./@vue.js";
/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const p="undefined"!=typeof document;const h=Object.assign;function d(e,t){const n={};for(const r in t){const o=t[r];n[r]=g(o)?o.map(e):e(o)}return n}const m=()=>{},g=Array.isArray,v=/#/g,y=/&/g,b=/\//g,w=/=/g,E=/\?/g,k=/\+/g,R=/%5B/g,O=/%5D/g,P=/%5E/g,x=/%60/g,C=/%7B/g,j=/%7C/g,S=/%7D/g,A=/%20/g;function q(e){return encodeURI(""+e).replace(j,"|").replace(R,"[").replace(O,"]")}function L(e){return q(e).replace(k,"%2B").replace(A,"+").replace(v,"%23").replace(y,"%26").replace(x,"`").replace(C,"{").replace(S,"}").replace(P,"^")}function M(e){return null==e?"":function(e){return q(e).replace(v,"%23").replace(E,"%3F")}(e).replace(b,"%2F")}function B(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}const G=/\/$/,_=e=>e.replace(G,"");function I(e,t,n="/"){let r,o={},a="",c="";const s=t.indexOf("#");let l=t.indexOf("?");return s<l&&s>=0&&(l=-1),l>-1&&(r=t.slice(0,l),a=t.slice(l+1,s>-1?s:t.length),o=e(a)),s>-1&&(r=r||t.slice(0,s),c=t.slice(s,t.length)),r=function(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),o=r[r.length-1];".."!==o&&"."!==o||r.push("");let a,c,s=n.length-1;for(a=0;a<r.length;a++)if(c=r[a],"."!==c){if(".."!==c)break;s>1&&s--}return n.slice(0,s).join("/")+"/"+r.slice(a).join("/")}(null!=r?r:t,n),{fullPath:r+(a&&"?")+a+c,path:r,query:o,hash:B(c)}}function W(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function D(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function T(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!U(e[n],t[n]))return!1;return!0}function U(e,t){return g(e)?$(e,t):g(t)?$(t,e):e===t}function $(e,t){return g(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}var F,z,V,K;(z=F||(F={})).pop="pop",z.push="push",(K=V||(V={})).back="back",K.forward="forward",K.unknown="";const H=/^[^#]+#/;function Q(e,t){return e.replace(H,"#")+t}const X=()=>({left:window.scrollX,top:window.scrollY});function Y(e){let t;if("el"in e){const n=e.el,r="string"==typeof n&&n.startsWith("#"),o="string"==typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=function(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.scrollX,null!=t.top?t.top:window.scrollY)}function J(e,t){return(history.state?history.state.position-t:-1)+e}const N=new Map;let Z=()=>location.protocol+"//"+location.host;function ee(e,t){const{pathname:n,search:r,hash:o}=t,a=e.indexOf("#");if(a>-1){let t=o.includes(e.slice(a))?e.slice(a).length:1,n=o.slice(t);return"/"!==n[0]&&(n="/"+n),W(n,"")}return W(n,e)+r+o}function te(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?X():null}}function ne(e){const t=function(e){const{history:t,location:n}=window,r={value:ee(e,n)},o={value:t.state};function a(r,a,c){const s=e.indexOf("#"),l=s>-1?(n.host&&document.querySelector("base")?e:e.slice(s))+r:Z()+e+r;try{t[c?"replaceState":"pushState"](a,"",l),o.value=a}catch(i){console.error(i),n[c?"replace":"assign"](l)}}return o.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:o,push:function(e,n){const c=h({},o.value,t.state,{forward:e,scroll:X()});a(c.current,c,!0),a(e,h({},te(r.value,e,null),{position:c.position+1},n),!1),r.value=e},replace:function(e,n){a(e,h({},t.state,te(o.value.back,e,o.value.forward,!0),n,{position:o.value.position}),!0),r.value=e}}}(e=function(e){if(!e)if(p){const t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),_(e)}(e)),n=function(e,t,n,r){let o=[],a=[],c=null;const s=({state:a})=>{const s=ee(e,location),l=n.value,i=t.value;let u=0;if(a){if(n.value=s,t.value=a,c&&c===l)return void(c=null);u=i?a.position-i.position:0}else r(s);o.forEach((e=>{e(n.value,l,{delta:u,type:F.pop,direction:u?u>0?V.forward:V.back:V.unknown})}))};function l(){const{history:e}=window;e.state&&e.replaceState(h({},e.state,{scroll:X()}),"")}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",l,{passive:!0}),{pauseListeners:function(){c=n.value},listen:function(e){o.push(e);const t=()=>{const t=o.indexOf(e);t>-1&&o.splice(t,1)};return a.push(t),t},destroy:function(){for(const e of a)e();a=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",l)}}}(e,t.state,t.location,t.replace);const r=h({location:"",base:e,go:function(e,t=!0){t||n.pauseListeners(),history.go(e)},createHref:Q.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function re(e){return(e=location.host?e||location.pathname+location.search:"").includes("#")||(e+="#"),ne(e)}function oe(e){return"string"==typeof e||"symbol"==typeof e}const ae={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ce=Symbol("");var se,le;function ie(e,t){return h(new Error,{type:e,[ce]:!0},t)}function ue(e,t){return e instanceof Error&&ce in e&&(null==t||!!(e.type&t))}(le=se||(se={}))[le.aborted=4]="aborted",le[le.cancelled=8]="cancelled",le[le.duplicated=16]="duplicated";const fe="[^/]+?",pe={sensitive:!1,strict:!1,start:!0,end:!0},he=/[.+*?^${}()[\]/\\]/g;function de(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function me(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const e=de(r[n],o[n]);if(e)return e;n++}if(1===Math.abs(o.length-r.length)){if(ge(r))return 1;if(ge(o))return-1}return o.length-r.length}function ge(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const ve={type:0,value:""},ye=/[a-zA-Z0-9_]/;function be(e,t,n){const r=function(e,t){const n=h({},pe,t),r=[];let o=n.start?"^":"";const a=[];for(const l of e){const e=l.length?[]:[90];n.strict&&!l.length&&(o+="/");for(let t=0;t<l.length;t++){const r=l[t];let c=40+(n.sensitive?.25:0);if(0===r.type)t||(o+="/"),o+=r.value.replace(he,"\\$&"),c+=40;else if(1===r.type){const{value:e,repeatable:n,optional:i,regexp:u}=r;a.push({name:e,repeatable:n,optional:i});const f=u||fe;if(f!==fe){c+=10;try{new RegExp("(".concat(f,")"))}catch(s){throw new Error('Invalid custom RegExp for param "'.concat(e,'" (').concat(f,"): ")+s.message)}}let p=n?"((?:".concat(f,")(?:/(?:").concat(f,"))*)"):"(".concat(f,")");t||(p=i&&l.length<2?"(?:/".concat(p,")"):"/"+p),i&&(p+="?"),o+=p,c+=20,i&&(c+=-8),n&&(c+=-20),".*"===f&&(c+=-50)}e.push(c)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const c=new RegExp(o,n.sensitive?"":"i");return{re:c,score:r,keys:a,parse:function(e){const t=e.match(c),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",o=a[r-1];n[o.name]=e&&o.repeatable?e.split("/"):e}return n},stringify:function(t){let n="",r=!1;for(const o of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of o)if(0===e.type)n+=e.value;else if(1===e.type){const{value:a,repeatable:c,optional:s}=e,l=a in t?t[a]:"";if(g(l)&&!c)throw new Error('Provided param "'.concat(a,'" is an array but it is not repeatable (* or + modifiers)'));const i=g(l)?l.join("/"):l;if(!i){if(!s)throw new Error('Missing required param "'.concat(a,'"'));o.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=i}}return n||"/"}}}(function(e){if(!e)return[[]];if("/"===e)return[[ve]];if(!e.startsWith("/"))throw new Error('Invalid path "'.concat(e,'"'));function t(e){throw new Error("ERR (".concat(n,')/"').concat(i,'": ').concat(e))}let n=0,r=n;const o=[];let a;function c(){a&&o.push(a),a=[]}let s,l=0,i="",u="";function f(){i&&(0===n?a.push({type:0,value:i}):1===n||2===n||3===n?(a.length>1&&("*"===s||"+"===s)&&t("A repeatable param (".concat(i,") must be alone in its segment. eg: '/:ids+.")),a.push({type:1,value:i,regexp:u,repeatable:"*"===s||"+"===s,optional:"*"===s||"?"===s})):t("Invalid state to consume buffer"),i="")}function p(){i+=s}for(;l<e.length;)if(s=e[l++],"\\"!==s||2===n)switch(n){case 0:"/"===s?(i&&f(),c()):":"===s?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:"("===s?n=2:ye.test(s)?p():(f(),n=0,"*"!==s&&"?"!==s&&"+"!==s&&l--);break;case 2:")"===s?"\\"==u[u.length-1]?u=u.slice(0,-1)+s:n=3:u+=s;break;case 3:f(),n=0,"*"!==s&&"?"!==s&&"+"!==s&&l--,u="";break;default:t("Unknown state")}else r=n,n=4;return 2===n&&t('Unfinished custom RegExp for param "'.concat(i,'"')),f(),c(),o}(e.path),n),o=h(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function we(e,t){const n=[],r=new Map;function o(e,n,r){const s=!r,l=function(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ke(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}(e);l.aliasOf=r&&r.record;const i=Pe(t,e),u=[l];if("alias"in e){const t="string"==typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(h({},l,{components:r?r.record.components:l.components,path:e,aliasOf:r?r.record:l}))}let f,p;for(const t of u){const{path:u}=t;if(n&&"/"!==u[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&r+u)}if(f=be(t,n,i),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),s&&e.name&&!Re(f)&&a(e.name)),l.children){const e=l.children;for(let t=0;t<e.length;t++)o(e[t],f,r&&r.children[t])}r=r||f,(f.record.components&&Object.keys(f.record.components).length||f.record.name||f.record.redirect)&&c(f)}return p?()=>{a(p)}:m}function a(e){if(oe(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(a),t.alias.forEach(a))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(a),e.alias.forEach(a))}}function c(e){let t=0;for(;t<n.length&&me(e,n[t])>=0&&(e.record.path!==n[t].record.path||!xe(e,n[t]));)t++;n.splice(t,0,e),e.record.name&&!Re(e)&&r.set(e.record.name,e)}return t=Pe({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>o(e))),{addRoute:o,resolve:function(e,t){let o,a,c,s={};if("name"in e&&e.name){if(o=r.get(e.name),!o)throw ie(1,{location:e});c=o.record.name,s=h(Ee(t.params,o.keys.filter((e=>!e.optional)).concat(o.parent?o.parent.keys.filter((e=>e.optional)):[]).map((e=>e.name))),e.params&&Ee(e.params,o.keys.map((e=>e.name)))),a=o.stringify(s)}else if(null!=e.path)a=e.path,o=n.find((e=>e.re.test(a))),o&&(s=o.parse(a),c=o.record.name);else{if(o=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!o)throw ie(1,{location:e,currentLocation:t});c=o.record.name,s=h({},t.params,e.params),a=o.stringify(s)}const l=[];let i=o;for(;i;)l.unshift(i.record),i=i.parent;return{name:c,path:a,params:s,matched:l,meta:Oe(l)}},removeRoute:a,getRoutes:function(){return n},getRecordMatcher:function(e){return r.get(e)}}}function Ee(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function ke(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="object"==typeof n?n[r]:n;return t}function Re(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Oe(e){return e.reduce(((e,t)=>h(e,t.meta)),{})}function Pe(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function xe(e,t){return t.children.some((t=>t===e||xe(e,t)))}function Ce(e){const t={};if(""===e||"?"===e)return t;const n=("?"===e[0]?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const e=n[r].replace(k," "),o=e.indexOf("="),a=B(o<0?e:e.slice(0,o)),c=o<0?null:B(e.slice(o+1));if(a in t){let e=t[a];g(e)||(e=t[a]=[e]),e.push(c)}else t[a]=c}return t}function je(e){let t="";for(let n in e){const r=e[n];if(n=L(n).replace(w,"%3D"),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}(g(r)?r.map((e=>e&&L(e))):[r&&L(r)]).forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Se(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=g(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const Ae=Symbol(""),qe=Symbol(""),Le=Symbol(""),Me=Symbol(""),Be=Symbol("");function Ge(){let e=[];return{add:function(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}},list:()=>e.slice(),reset:function(){e=[]}}}function _e(e,t,n,r,o,a=(e=>e())){const c=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise(((s,l)=>{const i=e=>{var a;!1===e?l(ie(4,{from:n,to:t})):e instanceof Error?l(e):"string"==typeof(a=e)||a&&"object"==typeof a?l(ie(2,{from:t,to:e})):(c&&r.enterCallbacks[o]===c&&"function"==typeof e&&c.push(e),s())},u=a((()=>e.call(r&&r.instances[o],t,n,i)));let f=Promise.resolve(u);e.length<3&&(f=f.then(i)),f.catch((e=>l(e)))}))}function Ie(e,t,n,r,o=(e=>e())){const a=[];for(const s of e)for(const e in s.components){let l=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if("object"==typeof(c=l)||"displayName"in c||"props"in c||"__vccOpts"in c){const c=(l.__vccOpts||l)[t];c&&a.push(_e(c,n,r,s,e,o))}else{let c=l();a.push((()=>c.then((a=>{if(!a)return Promise.reject(new Error("Couldn't resolve component \"".concat(e,'" at "').concat(s.path,'"')));const c=(l=a).__esModule||"Module"===l[Symbol.toStringTag]?a.default:a;var l;s.components[e]=c;const i=(c.__vccOpts||c)[t];return i&&_e(i,n,r,s,e,o)()}))))}}var c;return a}function We(e){const n=c(Le),r=c(Me),o=s((()=>{const r=t(e.to);return n.resolve(r)})),a=s((()=>{const{matched:e}=o.value,{length:t}=e,n=e[t-1],a=r.matched;if(!n||!a.length)return-1;const c=a.findIndex(D.bind(null,n));if(c>-1)return c;const s=Te(e[t-2]);return t>1&&Te(n)===s&&a[a.length-1].path!==s?a.findIndex(D.bind(null,e[t-2])):c})),l=s((()=>a.value>-1&&function(e,t){for(const n in t){const r=t[n],o=e[n];if("string"==typeof r){if(r!==o)return!1}else if(!g(o)||o.length!==r.length||r.some(((e,t)=>e!==o[t])))return!1}return!0}(r.params,o.value.params))),i=s((()=>a.value>-1&&a.value===r.matched.length-1&&T(r.params,o.value.params)));return{route:o,href:s((()=>o.value.href)),isActive:l,isExactActive:i,navigate:function(r={}){return function(e){if(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;if(void 0!==e.button&&0!==e.button)return;if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}e.preventDefault&&e.preventDefault();return!0}(r)?n[t(e.replace)?"replace":"push"](t(e.to)).catch(m):Promise.resolve()}}}const De=o({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:We,setup(e,{slots:t}){const n=a(We(e)),{options:r}=c(Le),o=s((()=>({[Ue(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ue(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const r=t.default&&t.default(n);return e.custom?r:l("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},r)}}});function Te(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ue=(e,t,n)=>null!=e?e:null!=t?t:n;function $e(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const Fe=o({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:r}){const o=c(Be),a=s((()=>e.route||o.value)),p=c(qe,0),d=s((()=>{let e=t(p);const{matched:n}=a.value;let r;for(;(r=n[e])&&!r.components;)e++;return e})),m=s((()=>a.value.matched[d.value]));i(qe,s((()=>d.value+1))),i(Ae,m),i(Be,a);const g=u();return f((()=>[g.value,m.value,e.name]),(([e,t,n],[r,o,a])=>{t&&(t.instances[n]=e,o&&o!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=o.leaveGuards),t.updateGuards.size||(t.updateGuards=o.updateGuards))),!e||!t||o&&D(t,o)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const t=a.value,o=e.name,c=m.value,s=c&&c.components[o];if(!s)return $e(r.default,{Component:s,route:t});const i=c.props[o],u=i?!0===i?t.params:"function"==typeof i?i(t):i:null,f=l(s,h({},u,n,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(c.instances[o]=null)},ref:g}));return $e(r.default,{Component:f,route:t})||f}}});function ze(o){const a=we(o.routes,o),c=o.parseQuery||Ce,s=o.stringifyQuery||je,l=o.history,i=Ge(),u=Ge(),f=Ge(),v=e(ae);let y=ae;p&&o.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const b=d.bind(null,(e=>""+e)),w=d.bind(null,M),E=d.bind(null,B);function k(e,t){if(t=h({},t||v.value),"string"==typeof e){const n=I(c,e,t.path),r=a.resolve({path:n.path},t),o=l.createHref(n.fullPath);return h(n,r,{params:E(r.params),hash:B(n.hash),redirectedFrom:void 0,href:o})}let n;if(null!=e.path)n=h({},e,{path:I(c,e.path,t.path).path});else{const r=h({},e.params);for(const e in r)null==r[e]&&delete r[e];n=h({},e,{params:w(r)}),t.params=w(t.params)}const r=a.resolve(n,t),o=e.hash||"";r.params=b(E(r.params));const i=function(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}(s,h({},e,{hash:(u=o,q(u).replace(C,"{").replace(S,"}").replace(P,"^")),path:r.path}));var u;const f=l.createHref(i);return h({fullPath:i,hash:o,query:s===je?Se(e.query):e.query||{}},r,{redirectedFrom:void 0,href:f})}function R(e){return"string"==typeof e?I(c,e,v.value.path):h({},e)}function O(e,t){if(y!==e)return ie(8,{from:t,to:e})}function x(e){return A(e)}function j(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"==typeof n?n(e):n;return"string"==typeof r&&(r=r.includes("?")||r.includes("#")?r=R(r):{path:r},r.params={}),h({query:e.query,hash:e.hash,params:null!=r.path?{}:e.params},r)}}function A(e,t){const n=y=k(e),r=v.value,o=e.state,a=e.force,c=!0===e.replace,l=j(n);if(l)return A(h(R(l),{state:"object"==typeof l?h({},o,l.state):o,force:a,replace:c}),t||n);const i=n;let u;return i.redirectedFrom=t,!a&&function(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&D(t.matched[r],n.matched[o])&&T(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}(s,r,n)&&(u=ie(16,{to:i,from:r}),ee(r,r,!0,!1)),(u?Promise.resolve(u):_(i,r)).catch((e=>ue(e)?ue(e,2)?e:Z(e):Q(e,i,r))).then((e=>{if(e){if(ue(e,2))return A(h({replace:c},R(e.to),{state:"object"==typeof e.to?h({},o,e.to.state):o,force:a}),t||i)}else e=U(i,r,!0,c,o);return W(i,r,e),e}))}function L(e,t){const n=O(e,t);return n?Promise.reject(n):Promise.resolve()}function G(e){const t=re.values().next().value;return t&&"function"==typeof t.runWithContext?t.runWithContext(e):e()}function _(e,t){let n;const[r,o,a]=function(e,t){const n=[],r=[],o=[],a=Math.max(t.matched.length,e.matched.length);for(let c=0;c<a;c++){const a=t.matched[c];a&&(e.matched.find((e=>D(e,a)))?r.push(a):n.push(a));const s=e.matched[c];s&&(t.matched.find((e=>D(e,s)))||o.push(s))}return[n,r,o]}(e,t);n=Ie(r.reverse(),"beforeRouteLeave",e,t);for(const s of r)s.leaveGuards.forEach((r=>{n.push(_e(r,e,t))}));const c=L.bind(null,e,t);return n.push(c),se(n).then((()=>{n=[];for(const r of i.list())n.push(_e(r,e,t));return n.push(c),se(n)})).then((()=>{n=Ie(o,"beforeRouteUpdate",e,t);for(const r of o)r.updateGuards.forEach((r=>{n.push(_e(r,e,t))}));return n.push(c),se(n)})).then((()=>{n=[];for(const r of a)if(r.beforeEnter)if(g(r.beforeEnter))for(const o of r.beforeEnter)n.push(_e(o,e,t));else n.push(_e(r.beforeEnter,e,t));return n.push(c),se(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=Ie(a,"beforeRouteEnter",e,t,G),n.push(c),se(n)))).then((()=>{n=[];for(const r of u.list())n.push(_e(r,e,t));return n.push(c),se(n)})).catch((e=>ue(e,8)?e:Promise.reject(e)))}function W(e,t,n){f.list().forEach((r=>G((()=>r(e,t,n)))))}function U(e,t,n,r,o){const a=O(e,t);if(a)return a;const c=t===ae,s=p?history.state:{};n&&(r||c?l.replace(e.fullPath,h({scroll:c&&s&&s.scroll},o)):l.push(e.fullPath,o)),v.value=e,ee(e,t,n,c),Z()}let $;function z(){$||($=l.listen(((e,t,n)=>{if(!ce.listening)return;const r=k(e),o=j(r);if(o)return void A(h(o,{replace:!0}),r).catch(m);y=r;const a=v.value;var c,s;p&&(c=J(a.fullPath,n.delta),s=X(),N.set(c,s)),_(r,a).catch((e=>ue(e,12)?e:ue(e,2)?(A(e.to,r).then((e=>{ue(e,20)&&!n.delta&&n.type===F.pop&&l.go(-1,!1)})).catch(m),Promise.reject()):(n.delta&&l.go(-n.delta,!1),Q(e,r,a)))).then((e=>{(e=e||U(r,a,!1))&&(n.delta&&!ue(e,8)?l.go(-n.delta,!1):n.type===F.pop&&ue(e,20)&&l.go(-1,!1)),W(r,a,e)})).catch(m)})))}let V,K=Ge(),H=Ge();function Q(e,t,n){Z(e);const r=H.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function Z(e){return V||(V=!e,z(),K.list().forEach((([t,n])=>e?n(e):t())),K.reset()),e}function ee(e,t,n,a){const{scrollBehavior:c}=o;if(!p||!c)return Promise.resolve();const s=!n&&function(e){const t=N.get(e);return N.delete(e),t}(J(e.fullPath,0))||(a||!n)&&history.state&&history.state.scroll||null;return r().then((()=>c(e,t,s))).then((e=>e&&Y(e))).catch((n=>Q(n,e,t)))}const te=e=>l.go(e);let ne;const re=new Set,ce={currentRoute:v,listening:!0,addRoute:function(e,t){let n,r;return oe(e)?(n=a.getRecordMatcher(e),r=t):r=e,a.addRoute(r,n)},removeRoute:function(e){const t=a.getRecordMatcher(e);t&&a.removeRoute(t)},hasRoute:function(e){return!!a.getRecordMatcher(e)},getRoutes:function(){return a.getRoutes().map((e=>e.record))},resolve:k,options:o,push:x,replace:function(e){return x(h(R(e),{replace:!0}))},go:te,back:()=>te(-1),forward:()=>te(1),beforeEach:i.add,beforeResolve:u.add,afterEach:f.add,onError:H.add,isReady:function(){return V&&v.value!==ae?Promise.resolve():new Promise(((e,t)=>{K.add([e,t])}))},install(e){e.component("RouterLink",De),e.component("RouterView",Fe),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>t(v)}),p&&!ne&&v.value===ae&&(ne=!0,x(l.location).catch((e=>{})));const r={};for(const t in ae)Object.defineProperty(r,t,{get:()=>v.value[t],enumerable:!0});e.provide(Le,this),e.provide(Me,n(r)),e.provide(Be,v);const o=e.unmount;re.add(e),e.unmount=function(){re.delete(e),re.size<1&&(y=ae,$&&$(),$=null,v.value=ae,ne=!1,V=!1),o()}}};function se(e){return e.reduce(((e,t)=>e.then((()=>G(t)))),Promise.resolve())}return ce}function Ve(){return c(Le)}function Ke(){return c(Me)}export{Ve as a,re as b,ze as c,Ke as u};
