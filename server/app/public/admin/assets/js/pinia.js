import{ap as t,k as e,ao as n,ay as s,G as o,w as a,r as c,H as r,az as i,ab as u,i as p,j as f,p as l,R as h,q as d}from"./@vue.js";
/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
let y;const v=t=>y=t,b=Symbol();function _(t){return t&&"object"==typeof t&&"[object Object]"===Object.prototype.toString.call(t)&&"function"!=typeof t.toJSON}var j,O;function $(){const s=t(!0),o=s.run((()=>e({})));let a=[],c=[];const r=n({install(t){v(r),r._a=t,t.provide(b,r),t.config.globalProperties.$pinia=r,c.forEach((t=>a.push(t))),c=[]},use(t){return this._a?a.push(t):c.push(t),this},_p:a,_a:null,_e:s,_s:new Map,state:o});return r}(O=j||(j={})).direct="direct",O.patchObject="patch object",O.patchFunction="patch function";const g=()=>{};function m(t,e,n,s=g){t.push(e);const o=()=>{const n=t.indexOf(e);n>-1&&(t.splice(n,1),s())};return!n&&p()&&f(o),o}function P(t,...e){t.slice().forEach((t=>{t(...e)}))}const S=t=>t();function w(t,e){t instanceof Map&&e instanceof Map&&e.forEach(((e,n)=>t.set(n,e))),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],o=t[n];_(o)&&_(s)&&t.hasOwnProperty(n)&&!r(s)&&!i(s)?t[n]=w(o,s):t[n]=s}return t}const E=Symbol();const{assign:x}=Object;function I(n,s,o={},p,f,h){let d;const y=x({actions:{}},o),b={deep:!0};let O,$,I,M=[],k=[];const A=p.state.value[n];let F;function q(t){let e;O=$=!1,"function"==typeof t?(t(p.state.value[n]),e={type:j.patchFunction,storeId:n,events:I}):(w(p.state.value[n],t),e={type:j.patchObject,payload:t,storeId:n,events:I});const s=F=Symbol();l().then((()=>{F===s&&(O=!0)})),$=!0,P(M,e,p.state.value[n])}h||A||(p.state.value[n]={}),e({});const z=h?function(){const{state:t}=o,e=t?t():{};this.$patch((t=>{x(t,e)}))}:g;function C(t,e){return function(){v(p);const s=Array.from(arguments),o=[],a=[];let c;P(k,{args:s,name:t,store:H,after:function(t){o.push(t)},onError:function(t){a.push(t)}});try{c=e.apply(this&&this.$id===n?this:H,s)}catch(r){throw P(a,r),r}return c instanceof Promise?c.then((t=>(P(o,t),t))).catch((t=>(P(a,t),Promise.reject(t)))):(P(o,c),c)}}const G={_p:p,$id:n,$onAction:m.bind(null,k),$patch:q,$reset:z,$subscribe(t,e={}){const s=m(M,t,e.detached,(()=>o())),o=d.run((()=>a((()=>p.state.value[n]),(s=>{("sync"===e.flush?$:O)&&t({storeId:n,type:j.direct,events:I},s)}),x({},b,e))));return s},$dispose:function(){d.stop(),M=[],k=[],p._s.delete(n)}},H=c(G);p._s.set(n,H);const J=p._a&&p._a.runWithContext||S,N=p._e.run((()=>(d=t(),J((()=>d.run(s))))));for(const t in N){const e=N[t];if(r(e)&&(!r(W=e)||!W.effect)||i(e))h||(!A||_(R=e)&&R.hasOwnProperty(E)||(r(e)?e.value=A[t]:w(e,A[t])),p.state.value[n][t]=e);else if("function"==typeof e){const n=C(t,e);N[t]=n,y.actions[t]=e}}var R,W;return x(H,N),x(u(H),N),Object.defineProperty(H,"$state",{get:()=>p.state.value[n],set:t=>{q((e=>{x(e,t)}))}}),p._p.forEach((t=>{x(H,d.run((()=>t({store:H,app:p._a,pinia:p,options:y}))))})),A&&h&&o.hydrate&&o.hydrate(H.$state,A),O=!0,$=!0,H}function M(t,e,a){let c,r;const i="function"==typeof e;function u(t,a){const u=s();(t=t||(u?o(b,null):null))&&v(t),(t=y)._s.has(c)||(i?I(c,e,r,t):function(t,e,s,o){const{state:a,actions:c,getters:r}=e,i=s.state.value[t];let u;u=I(t,(function(){i||(s.state.value[t]=a?a():{});const e=h(s.state.value[t]);return x(e,c,Object.keys(r||{}).reduce(((e,o)=>(e[o]=n(d((()=>{v(s);const e=s._s.get(t);return r[o].call(e,e)}))),e)),{}))}),e,s,0,!0)}(c,r,t));return t._s.get(c)}return"string"==typeof t?(c=t,r=i?a:e):(r=t,c=t.id),u.$id=c,u}export{$ as c,M as d};
