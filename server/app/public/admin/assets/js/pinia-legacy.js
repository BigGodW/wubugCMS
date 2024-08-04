System.register(["./@vue-legacy.js"],(function(t,e){"use strict";var n,o,s,c,a,r,i,u,f,l,p,h,y,d,v;return{setters:[t=>{n=t.ao,o=t.j,s=t.an,c=t.k,a=t.T,r=t.L,i=t.ay,u=t.ab,f=t.h,l=t.i,p=t.y,h=t.K,y=t.U,d=t.z,v=t.az}],execute:function(){t({c:function(){const t=n(!0),c=t.run((()=>o({})));let a=[],r=[];const i=s({install(t){_(i),i._a=t,t.provide(j,i),t.config.globalProperties.$pinia=i,r.forEach((t=>a.push(t))),r=[]},use(t){return this._a||e?a.push(t):r.push(t),this},_p:a,_a:null,_e:t,_s:new Map,state:c});return i},d:function(t,e,n){let o,c;const a="function"==typeof e;function r(t,n){const r=v();return(t=t||(r?h(j,null):null))&&_(t),(t=b)._s.has(o)||(a?z(o,e,c,t):function(t,e,n,o){const{state:c,actions:a,getters:r}=e,i=n.state.value[t];let u;function f(){i||(n.state.value[t]=c?c():{});const e=y(n.state.value[t]);return k(e,a,Object.keys(r||{}).reduce(((e,o)=>(e[o]=s(d((()=>{_(n);const e=n._s.get(t);return r[o].call(e,e)}))),e)),{}))}u=z(t,f,e,n,0,!0)}(o,c,t)),t._s.get(o)}return o=t,c=a?n:e,r.$id=o,r}});var e=!1;
/*!
       * pinia v2.2.0
       * (c) 2024 Eduardo San Martin Morote
       * @license MIT
       */let b;const _=t=>b=t,j=Symbol();function O(t){return t&&"object"==typeof t&&"[object Object]"===Object.prototype.toString.call(t)&&"function"!=typeof t.toJSON}var $,g;(g=$||($={})).direct="direct",g.patchObject="patch object",g.patchFunction="patch function";const m=()=>{};function S(t,e,n,o=m){t.push(e);const s=()=>{const n=t.indexOf(e);n>-1&&(t.splice(n,1),o())};return!n&&f()&&l(s),s}function P(t,...e){t.slice().forEach((t=>{t(...e)}))}const E=t=>t(),w=Symbol(),x=Symbol();function I(t,e){t instanceof Map&&e instanceof Map?e.forEach(((e,n)=>t.set(n,e))):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const o=e[n],s=t[n];O(s)&&O(o)&&t.hasOwnProperty(n)&&!r(o)&&!i(o)?t[n]=I(s,o):t[n]=o}return t}const M=Symbol(),{assign:k}=Object;function z(t,e,s={},f,l,h){let y;const d=k({actions:{}},s),v={deep:!0};let b,j,g,z=[],A=[];const F=f.state.value[t];let C;function J(e){let n;b=j=!1,"function"==typeof e?(e(f.state.value[t]),n={type:$.patchFunction,storeId:t,events:g}):(I(f.state.value[t],e),n={type:$.patchObject,payload:e,storeId:t,events:g});const o=C=Symbol();p().then((()=>{C===o&&(b=!0)})),j=!0,P(z,n,f.state.value[t])}h||F||(f.state.value[t]={}),o({});const K=h?function(){const{state:t}=s,e=t?t():{};this.$patch((t=>{k(t,e)}))}:m,L=(e,n="")=>{if(w in e)return e[x]=n,e;const o=function(){_(f);const n=Array.from(arguments),s=[],c=[];let a;P(A,{args:n,name:o[x],store:T,after:function(t){s.push(t)},onError:function(t){c.push(t)}});try{a=e.apply(this&&this.$id===t?this:T,n)}catch(r){throw P(c,r),r}return a instanceof Promise?a.then((t=>(P(s,t),t))).catch((t=>(P(c,t),Promise.reject(t)))):(P(s,a),a)};return o[w]=!0,o[x]=n,o},N={_p:f,$id:t,$onAction:S.bind(null,A),$patch:J,$reset:K,$subscribe(e,n={}){const o=S(z,e,n.detached,(()=>s())),s=y.run((()=>c((()=>f.state.value[t]),(o=>{("sync"===n.flush?j:b)&&e({storeId:t,type:$.direct,events:g},o)}),k({},v,n))));return o},$dispose:function(){y.stop(),z=[],A=[],f._s.delete(t)}},T=a(N);f._s.set(t,T);const U=(f._a&&f._a.runWithContext||E)((()=>f._e.run((()=>(y=n()).run((()=>e({action:L})))))));for(const n in U){const e=U[n];if(r(e)&&(!r(q=e)||!q.effect)||i(e))h||(!F||O(W=e)&&W.hasOwnProperty(M)||(r(e)?e.value=F[n]:I(e,F[n])),f.state.value[t][n]=e);else if("function"==typeof e){const t=L(e,n);U[n]=t,d.actions[n]=e}}var W,q;return k(T,U),k(u(T),U),Object.defineProperty(T,"$state",{get:()=>f.state.value[t],set:t=>{J((e=>{k(e,t)}))}}),f._p.forEach((t=>{k(T,y.run((()=>t({store:T,app:f._a,pinia:f,options:d}))))})),F&&h&&s.hydrate&&s.hydrate(T.$state,F),b=!0,j=!0,T}}}}));
