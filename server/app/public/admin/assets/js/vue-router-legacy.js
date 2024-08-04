System.register(["./@vue-legacy.js"],(function(e,t){"use strict";var n,r,o,a,c,s,l,i,u,f,p,h;return{setters:[e=>{n=e.s,r=e.u,o=e.ax,a=e.y,c=e.d,s=e.T,l=e.K,i=e.z,u=e.ae,f=e.O,p=e.j,h=e.k}],execute:function(){e({a:function(){return l($e)},b:function(e){return(e=location.host?e||location.pathname+location.search:"").includes("#")||(e+="#"),function(e){const n=function(e){const{history:t,location:n}=window,r={value:te(e,n)},o={value:t.state};function a(r,a,c){const s=e.indexOf("#"),l=s>-1?(n.host&&document.querySelector("base")?e:e.slice(s))+r:ee()+e+r;try{t[c?"replaceState":"pushState"](a,"",l),o.value=a}catch(i){console.error(i),n[c?"replace":"assign"](l)}}function c(e,n){a(e,d({},t.state,ne(o.value.back,e,o.value.forward,!0),n,{position:o.value.position}),!0),r.value=e}function s(e,n){const c=d({},o.value,t.state,{forward:e,scroll:N()});a(c.current,c,!0),a(e,d({},ne(r.value,e,null),{position:c.position+1},n),!1),r.value=e}return o.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:o,push:s,replace:c}}(e=function(e){if(!e)if(t){const t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),_(e)}(e)),r=function(e,t,n,r){let o=[],a=[],c=null;const s=({state:a})=>{const s=te(e,location),l=n.value,i=t.value;let u=0;if(a){if(n.value=s,t.value=a,c&&c===l)return void(c=null);u=i?a.position-i.position:0}else r(s);o.forEach((e=>{e(n.value,l,{delta:u,type:K.pop,direction:u?u>0?H.forward:H.back:H.unknown})}))};function l(){c=n.value}function i(e){o.push(e);const t=()=>{const t=o.indexOf(e);t>-1&&o.splice(t,1)};return a.push(t),t}function u(){const{history:e}=window;e.state&&e.replaceState(d({},e.state,{scroll:N()}),"")}function f(){for(const e of a)e();a=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:i,destroy:f}}(e,n.state,n.location,n.replace);function o(e,t=!0){t||r.pauseListeners(),history.go(e)}const a=d({location:"",base:e,go:o,createHref:Y.bind(null,e)},n,r);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>n.state.value}),a}(e)},c:function(e){const c=function(e,t){const n=[],r=new Map;function o(e){return r.get(e)}function a(e,n,r){const o=!r,s=function(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:be(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}(e);s.aliasOf=r&&r.record;const i=Re(t,e),u=[s];if("alias"in e){const t="string"==typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(d({},s,{components:r?r.record.components:s.components,path:e,aliasOf:r?r.record:s}))}let f,p;for(const t of u){const{path:u}=t;if(n&&"/"!==u[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&r+u)}if(f=ve(t,n,i),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),o&&e.name&&!we(f)&&c(e.name)),ke(f)&&l(f),s.children){const e=s.children;for(let t=0;t<e.length;t++)a(e[t],f,r&&r.children[t])}r=r||f}return p?()=>{c(p)}:g}function c(e){if(re(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(c),t.alias.forEach(c))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(c),e.alias.forEach(c))}}function s(){return n}function l(e){const t=function(e,t){let n=0,r=t.length;for(;n!==r;){const o=n+r>>1;he(e,t[o])<0?r=o:n=o+1}const o=function(e){let t=e;for(;t=t.parent;)if(ke(t)&&0===he(e,t))return t}(e);return o&&(r=t.lastIndexOf(o,r-1)),r}(e,n);n.splice(t,0,e),e.record.name&&!we(e)&&r.set(e.record.name,e)}function i(e,t){let o,a,c,s={};if("name"in e&&e.name){if(o=r.get(e.name),!o)throw se(1,{location:e});c=o.record.name,s=d(ye(t.params,o.keys.filter((e=>!e.optional)).concat(o.parent?o.parent.keys.filter((e=>e.optional)):[]).map((e=>e.name))),e.params&&ye(e.params,o.keys.map((e=>e.name)))),a=o.stringify(s)}else if(null!=e.path)a=e.path,o=n.find((e=>e.re.test(a))),o&&(s=o.parse(a),c=o.record.name);else{if(o=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!o)throw se(1,{location:e,currentLocation:t});c=o.record.name,s=d({},t.params,e.params),a=o.stringify(s)}const l=[];let i=o;for(;i;)l.unshift(i.record),i=i.parent;return{name:c,path:a,params:s,matched:l,meta:Ee(l)}}function u(){n.length=0,r.clear()}return t=Re({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>a(e))),{addRoute:a,resolve:i,removeRoute:c,clearRoutes:u,getRoutes:s,getRecordMatcher:o}}(e.routes,e),s=e.parseQuery||Oe,l=e.stringifyQuery||xe,i=e.history,u=qe(),f=qe(),p=qe(),h=n(z);let y=z;t&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const b=m.bind(null,(e=>""+e)),w=m.bind(null,M),E=m.bind(null,B);function R(e,t){if(t=d({},t||h.value),"string"==typeof e){const n=I(s,e,t.path),r=c.resolve({path:n.path},t),o=i.createHref(n.fullPath);return d(n,r,{params:E(r.params),hash:B(n.hash),redirectedFrom:void 0,href:o})}let n;if(null!=e.path)n=d({},e,{path:I(s,e.path,t.path).path});else{const r=d({},e.params);for(const e in r)null==r[e]&&delete r[e];n=d({},e,{params:w(r)}),t.params=w(t.params)}const r=c.resolve(n,t),o=e.hash||"";r.params=b(E(r.params));const a=function(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}(l,d({},e,{hash:(u=o,q(u).replace(j,"{").replace(S,"}").replace(P,"^")),path:r.path}));var u;const f=i.createHref(a);return d({fullPath:a,hash:o,query:l===xe?Pe(e.query):e.query||{}},r,{redirectedFrom:void 0,href:f})}function k(e){return"string"==typeof e?I(s,e,h.value.path):d({},e)}function O(e,t){if(y!==e)return se(8,{from:t,to:e})}function x(e){return $(e)}function C(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"==typeof n?n(e):n;return"string"==typeof r&&(r=r.includes("?")||r.includes("#")?r=k(r):{path:r},r.params={}),d({query:e.query,hash:e.hash,params:null!=r.path?{}:e.params},r)}}function $(e,t){const n=y=R(e),r=h.value,o=e.state,a=e.force,c=!0===e.replace,s=C(n);if(s)return $(d(k(s),{state:"object"==typeof s?d({},o,s.state):o,force:a,replace:c}),t||n);const i=n;let u;return i.redirectedFrom=t,!a&&function(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&D(t.matched[r],n.matched[o])&&T(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}(l,r,n)&&(u=se(16,{to:i,from:r}),ee(r,r,!0,!1)),(u?Promise.resolve(u):G(i,r)).catch((e=>le(e)?le(e,2)?e:Y(e):X(e,i,r))).then((e=>{if(e){if(le(e,2))return $(d({replace:c},k(e.to),{state:"object"==typeof e.to?d({},o,e.to.state):o,force:a}),t||i)}else e=W(i,r,!0,c,o);return _(i,r,e),e}))}function A(e,t){const n=O(e,t);return n?Promise.reject(n):Promise.resolve()}function L(e){const t=oe.values().next().value;return t&&"function"==typeof t.runWithContext?t.runWithContext(e):e()}function G(e,t){let n;const[r,o,a]=function(e,t){const n=[],r=[],o=[],a=Math.max(t.matched.length,e.matched.length);for(let c=0;c<a;c++){const a=t.matched[c];a&&(e.matched.find((e=>D(e,a)))?r.push(a):n.push(a));const s=e.matched[c];s&&(t.matched.find((e=>D(e,s)))||o.push(s))}return[n,r,o]}(e,t);n=Me(r.reverse(),"beforeRouteLeave",e,t);for(const s of r)s.leaveGuards.forEach((r=>{n.push(Le(r,e,t))}));const c=A.bind(null,e,t);return n.push(c),ce(n).then((()=>{n=[];for(const r of u.list())n.push(Le(r,e,t));return n.push(c),ce(n)})).then((()=>{n=Me(o,"beforeRouteUpdate",e,t);for(const r of o)r.updateGuards.forEach((r=>{n.push(Le(r,e,t))}));return n.push(c),ce(n)})).then((()=>{n=[];for(const r of a)if(r.beforeEnter)if(v(r.beforeEnter))for(const o of r.beforeEnter)n.push(Le(o,e,t));else n.push(Le(r.beforeEnter,e,t));return n.push(c),ce(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=Me(a,"beforeRouteEnter",e,t,L),n.push(c),ce(n)))).then((()=>{n=[];for(const r of f.list())n.push(Le(r,e,t));return n.push(c),ce(n)})).catch((e=>le(e,8)?e:Promise.reject(e)))}function _(e,t,n){p.list().forEach((r=>L((()=>r(e,t,n)))))}function W(e,n,r,o,a){const c=O(e,n);if(c)return c;const s=n===z,l=t?history.state:{};r&&(o||s?i.replace(e.fullPath,d({scroll:s&&l&&l.scroll},a)):i.push(e.fullPath,a)),h.value=e,ee(e,n,r,s),Y()}let U;function F(){U||(U=i.listen(((e,n,r)=>{if(!ae.listening)return;const o=R(e),a=C(o);if(a)return void $(d(a,{replace:!0}),o).catch(g);y=o;const c=h.value;var s,l;t&&(s=Z(c.fullPath,r.delta),l=N(),J.set(s,l)),G(o,c).catch((e=>le(e,12)?e:le(e,2)?($(e.to,o).then((e=>{le(e,20)&&!r.delta&&r.type===K.pop&&i.go(-1,!1)})).catch(g),Promise.reject()):(r.delta&&i.go(-r.delta,!1),X(e,o,c)))).then((e=>{(e=e||W(o,c,!1))&&(r.delta&&!le(e,8)?i.go(-r.delta,!1):r.type===K.pop&&le(e,20)&&i.go(-1,!1)),_(o,c,e)})).catch(g)})))}let V,H=qe(),Q=qe();function X(e,t,n){Y(e);const r=Q.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function Y(e){return V||(V=!e,F(),H.list().forEach((([t,n])=>e?n(e):t())),H.reset()),e}function ee(n,r,o,c){const{scrollBehavior:s}=e;if(!t||!s)return Promise.resolve();const l=!o&&function(e){const t=J.get(e);return J.delete(e),t}(Z(n.fullPath,0))||(c||!o)&&history.state&&history.state.scroll||null;return a().then((()=>s(n,r,l))).then((e=>e&&function(e){let t;if("el"in e){const n=e.el,r="string"==typeof n&&n.startsWith("#"),o="string"==typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=function(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.scrollX,null!=t.top?t.top:window.scrollY)}(e))).catch((e=>X(e,n,r)))}const te=e=>i.go(e);let ne;const oe=new Set,ae={currentRoute:h,listening:!0,addRoute:function(e,t){let n,r;return re(e)?(n=c.getRecordMatcher(e),r=t):r=e,c.addRoute(r,n)},removeRoute:function(e){const t=c.getRecordMatcher(e);t&&c.removeRoute(t)},clearRoutes:c.clearRoutes,hasRoute:function(e){return!!c.getRecordMatcher(e)},getRoutes:function(){return c.getRoutes().map((e=>e.record))},resolve:R,options:e,push:x,replace:function(e){return x(d(k(e),{replace:!0}))},go:te,back:()=>te(-1),forward:()=>te(1),beforeEach:u.add,beforeResolve:f.add,afterEach:p.add,onError:Q.add,isReady:function(){return V&&h.value!==z?Promise.resolve():new Promise(((e,t)=>{H.add([e,t])}))},install(e){e.component("RouterLink",Ge),e.component("RouterView",De),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>r(h)}),t&&!ne&&h.value===z&&(ne=!0,x(i.location).catch((e=>{})));const n={};for(const t in z)Object.defineProperty(n,t,{get:()=>h.value[t],enumerable:!0});e.provide($e,this),e.provide(Se,o(n)),e.provide(Ae,h);const a=e.unmount;oe.add(e),e.unmount=function(){oe.delete(e),oe.size<1&&(y=z,U&&U(),U=null,h.value=z,ne=!1,V=!1),a()}}};function ce(e){return e.reduce(((e,t)=>e.then((()=>L(t)))),Promise.resolve())}return ae},u:function(e){return l(Se)}});
/*!
        * vue-router v4.4.2
        * (c) 2024 Eduardo San Martin Morote
        * @license MIT
        */
const t="undefined"!=typeof document,d=Object.assign;function m(e,t){const n={};for(const r in t){const o=t[r];n[r]=v(o)?o.map(e):e(o)}return n}const g=()=>{},v=Array.isArray,y=/#/g,b=/&/g,w=/\//g,E=/=/g,R=/\?/g,k=/\+/g,O=/%5B/g,x=/%5D/g,P=/%5E/g,C=/%60/g,j=/%7B/g,$=/%7C/g,S=/%7D/g,A=/%20/g;function q(e){return encodeURI(""+e).replace($,"|").replace(O,"[").replace(x,"]")}function L(e){return q(e).replace(k,"%2B").replace(A,"+").replace(y,"%23").replace(b,"%26").replace(C,"`").replace(j,"{").replace(S,"}").replace(P,"^")}function M(e){return null==e?"":function(e){return q(e).replace(y,"%23").replace(R,"%3F")}(e).replace(w,"%2F")}function B(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}const G=/\/$/,_=e=>e.replace(G,"");function I(e,t,n="/"){let r,o={},a="",c="";const s=t.indexOf("#");let l=t.indexOf("?");return s<l&&s>=0&&(l=-1),l>-1&&(r=t.slice(0,l),a=t.slice(l+1,s>-1?s:t.length),o=e(a)),s>-1&&(r=r||t.slice(0,s),c=t.slice(s,t.length)),r=function(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),o=r[r.length-1];".."!==o&&"."!==o||r.push("");let a,c,s=n.length-1;for(a=0;a<r.length;a++)if(c=r[a],"."!==c){if(".."!==c)break;s>1&&s--}return n.slice(0,s).join("/")+"/"+r.slice(a).join("/")}(null!=r?r:t,n),{fullPath:r+(a&&"?")+a+c,path:r,query:o,hash:B(c)}}function W(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function D(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function T(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!U(e[n],t[n]))return!1;return!0}function U(e,t){return v(e)?F(e,t):v(t)?F(t,e):e===t}function F(e,t){return v(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}const z={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var K,V,H,Q;(V=K||(K={})).pop="pop",V.push="push",(Q=H||(H={})).back="back",Q.forward="forward",Q.unknown="";const X=/^[^#]+#/;function Y(e,t){return e.replace(X,"#")+t}const N=()=>({left:window.scrollX,top:window.scrollY});function Z(e,t){return(history.state?history.state.position-t:-1)+e}const J=new Map;let ee=()=>location.protocol+"//"+location.host;function te(e,t){const{pathname:n,search:r,hash:o}=t,a=e.indexOf("#");if(a>-1){let t=o.includes(e.slice(a))?e.slice(a).length:1,n=o.slice(t);return"/"!==n[0]&&(n="/"+n),W(n,"")}return W(n,e)+r+o}function ne(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?N():null}}function re(e){return"string"==typeof e||"symbol"==typeof e}const oe=Symbol("");var ae,ce;function se(e,t){return d(new Error,{type:e,[oe]:!0},t)}function le(e,t){return e instanceof Error&&oe in e&&(null==t||!!(e.type&t))}(ce=ae||(ae={}))[ce.aborted=4]="aborted",ce[ce.cancelled=8]="cancelled",ce[ce.duplicated=16]="duplicated";const ie="[^/]+?",ue={sensitive:!1,strict:!1,start:!0,end:!0},fe=/[.+*?^${}()[\]/\\]/g;function pe(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function he(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const e=pe(r[n],o[n]);if(e)return e;n++}if(1===Math.abs(o.length-r.length)){if(de(r))return 1;if(de(o))return-1}return o.length-r.length}function de(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const me={type:0,value:""},ge=/[a-zA-Z0-9_]/;function ve(e,t,n){const r=function(e,t){const n=d({},ue,t),r=[];let o=n.start?"^":"";const a=[];for(const l of e){const e=l.length?[]:[90];n.strict&&!l.length&&(o+="/");for(let t=0;t<l.length;t++){const r=l[t];let c=40+(n.sensitive?.25:0);if(0===r.type)t||(o+="/"),o+=r.value.replace(fe,"\\$&"),c+=40;else if(1===r.type){const{value:e,repeatable:n,optional:i,regexp:u}=r;a.push({name:e,repeatable:n,optional:i});const f=u||ie;if(f!==ie){c+=10;try{new RegExp(`(${f})`)}catch(s){throw new Error(`Invalid custom RegExp for param "${e}" (${f}): `+s.message)}}let p=n?`((?:${f})(?:/(?:${f}))*)`:`(${f})`;t||(p=i&&l.length<2?`(?:/${p})`:"/"+p),i&&(p+="?"),o+=p,c+=20,i&&(c+=-8),n&&(c+=-20),".*"===f&&(c+=-50)}e.push(c)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const c=new RegExp(o,n.sensitive?"":"i");return{re:c,score:r,keys:a,parse:function(e){const t=e.match(c),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",o=a[r-1];n[o.name]=e&&o.repeatable?e.split("/"):e}return n},stringify:function(t){let n="",r=!1;for(const o of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of o)if(0===e.type)n+=e.value;else if(1===e.type){const{value:a,repeatable:c,optional:s}=e,l=a in t?t[a]:"";if(v(l)&&!c)throw new Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);const i=v(l)?l.join("/"):l;if(!i){if(!s)throw new Error(`Missing required param "${a}"`);o.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=i}}return n||"/"}}}(function(e){if(!e)return[[]];if("/"===e)return[[me]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${i}": ${e}`)}let n=0,r=n;const o=[];let a;function c(){a&&o.push(a),a=[]}let s,l=0,i="",u="";function f(){i&&(0===n?a.push({type:0,value:i}):1===n||2===n||3===n?(a.length>1&&("*"===s||"+"===s)&&t(`A repeatable param (${i}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:i,regexp:u,repeatable:"*"===s||"+"===s,optional:"*"===s||"?"===s})):t("Invalid state to consume buffer"),i="")}function p(){i+=s}for(;l<e.length;)if(s=e[l++],"\\"!==s||2===n)switch(n){case 0:"/"===s?(i&&f(),c()):":"===s?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:"("===s?n=2:ge.test(s)?p():(f(),n=0,"*"!==s&&"?"!==s&&"+"!==s&&l--);break;case 2:")"===s?"\\"==u[u.length-1]?u=u.slice(0,-1)+s:n=3:u+=s;break;case 3:f(),n=0,"*"!==s&&"?"!==s&&"+"!==s&&l--,u="";break;default:t("Unknown state")}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${i}"`),f(),c(),o}(e.path),n),o=d(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function ye(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function be(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="object"==typeof n?n[r]:n;return t}function we(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Ee(e){return e.reduce(((e,t)=>d(e,t.meta)),{})}function Re(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function ke({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Oe(e){const t={};if(""===e||"?"===e)return t;const n=("?"===e[0]?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const e=n[r].replace(k," "),o=e.indexOf("="),a=B(o<0?e:e.slice(0,o)),c=o<0?null:B(e.slice(o+1));if(a in t){let e=t[a];v(e)||(e=t[a]=[e]),e.push(c)}else t[a]=c}return t}function xe(e){let t="";for(let n in e){const r=e[n];(n=L(n).replace(E,"%3D"),null!=r)?(v(r)?r.map((e=>e&&L(e))):[r&&L(r)]).forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))})):void 0!==r&&(t+=(t.length?"&":"")+n)}return t}function Pe(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=v(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const Ce=Symbol(""),je=Symbol(""),$e=Symbol(""),Se=Symbol(""),Ae=Symbol("");function qe(){let e=[];return{add:function(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}},list:()=>e.slice(),reset:function(){e=[]}}}function Le(e,t,n,r,o,a=(e=>e())){const c=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise(((s,l)=>{const i=e=>{var a;!1===e?l(se(4,{from:n,to:t})):e instanceof Error?l(e):"string"==typeof(a=e)||a&&"object"==typeof a?l(se(2,{from:t,to:e})):(c&&r.enterCallbacks[o]===c&&"function"==typeof e&&c.push(e),s())},u=a((()=>e.call(r&&r.instances[o],t,n,i)));let f=Promise.resolve(u);e.length<3&&(f=f.then(i)),f.catch((e=>l(e)))}))}function Me(e,t,n,r,o=(e=>e())){const a=[];for(const s of e)for(const e in s.components){let l=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if("object"==typeof(c=l)||"displayName"in c||"props"in c||"__vccOpts"in c){const c=(l.__vccOpts||l)[t];c&&a.push(Le(c,n,r,s,e,o))}else{let c=l();a.push((()=>c.then((a=>{if(!a)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));const c=(l=a).__esModule||"Module"===l[Symbol.toStringTag]?a.default:a;var l;s.components[e]=c;const i=(c.__vccOpts||c)[t];return i&&Le(i,n,r,s,e,o)()}))))}}var c;return a}function Be(e){const t=l($e),n=l(Se),o=i((()=>{const n=r(e.to);return t.resolve(n)})),a=i((()=>{const{matched:e}=o.value,{length:t}=e,r=e[t-1],a=n.matched;if(!r||!a.length)return-1;const c=a.findIndex(D.bind(null,r));if(c>-1)return c;const s=_e(e[t-2]);return t>1&&_e(r)===s&&a[a.length-1].path!==s?a.findIndex(D.bind(null,e[t-2])):c})),c=i((()=>a.value>-1&&function(e,t){for(const n in t){const r=t[n],o=e[n];if("string"==typeof r){if(r!==o)return!1}else if(!v(o)||o.length!==r.length||r.some(((e,t)=>e!==o[t])))return!1}return!0}(n.params,o.value.params))),s=i((()=>a.value>-1&&a.value===n.matched.length-1&&T(n.params,o.value.params)));return{route:o,href:i((()=>o.value.href)),isActive:c,isExactActive:s,navigate:function(n={}){return function(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.defaultPrevented||void 0!==e.button&&0!==e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}(n)?t[r(e.replace)?"replace":"push"](r(e.to)).catch(g):Promise.resolve()}}}const Ge=c({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Be,setup(e,{slots:t}){const n=s(Be(e)),{options:r}=l($e),o=i((()=>({[Ie(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ie(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const r=t.default&&t.default(n);return e.custom?r:u("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},r)}}});function _e(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ie=(e,t,n)=>null!=e?e:null!=t?t:n;function We(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const De=c({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const o=l(Ae),a=i((()=>e.route||o.value)),c=l(je,0),s=i((()=>{let e=r(c);const{matched:t}=a.value;let n;for(;(n=t[e])&&!n.components;)e++;return e})),m=i((()=>a.value.matched[s.value]));f(je,i((()=>s.value+1))),f(Ce,m),f(Ae,a);const g=p();return h((()=>[g.value,m.value,e.name]),(([e,t,n],[r,o,a])=>{t&&(t.instances[n]=e,o&&o!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=o.leaveGuards),t.updateGuards.size||(t.updateGuards=o.updateGuards))),!e||!t||o&&D(t,o)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const r=a.value,o=e.name,c=m.value,s=c&&c.components[o];if(!s)return We(n.default,{Component:s,route:r});const l=c.props[o],i=l?!0===l?r.params:"function"==typeof l?l(r):l:null,f=u(s,d({},i,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(c.instances[o]=null)},ref:g}));return We(n.default,{Component:f,route:r})||f}}})}}}));
