System.register(["./vanilla-jsoneditor-legacy.js","./@vue-legacy.js"],(function(t,e){"use strict";var r,n,o,i,c,u,a,f,s,l,p,v;return{setters:[t=>{r=t.H,n=t.s},t=>{o=t.d,i=t.q,c=t.j,u=t.m,a=t.z,f=t.T,s=t.x,l=t.k,p=t.u,v=t.af}],execute:function(){var b="object"==typeof global&&global&&global.Object===Object&&global,y="object"==typeof self&&self&&self.Object===Object&&self,d=b||y||Function("return this")(),h=d.Symbol,j=Object.prototype,g=j.hasOwnProperty,_=j.toString,m=h?h.toStringTag:void 0,O=Object.prototype.toString,w="[object Null]",A="[object Undefined]",x=h?h.toStringTag:void 0;function S(t){return null==t?void 0===t?A:w:x&&x in Object(t)?function(t){var e=g.call(t,m),r=t[m];try{t[m]=void 0;var n=!0}catch{}var o=_.call(t);return n&&(e?t[m]=r:delete t[m]),o}(t):function(t){return O.call(t)}(t)}var E="[object Symbol]",z=/\s/,F=/^\s+/;function T(t){return t&&t.slice(0,function(t){for(var e=t.length;e--&&z.test(t.charAt(e)););return e}(t)+1).replace(F,"")}function P(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}var k=NaN,C=/^[-+]0x[0-9a-f]+$/i,I=/^0b[01]+$/i,$=/^0o[0-7]+$/i,B=parseInt;function M(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return null!=t&&"object"==typeof t}(t)&&S(t)==E}(t))return k;if(P(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=P(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=T(t);var r=I.test(t);return r||$.test(t)?B(t.slice(2),r?2:8):C.test(t)?k:+t}var U=function(){return d.Date.now()},L=Math.max,D=Math.min;function N(t,e,r){var n,o,i,c,u,a,f=0,s=!1,l=!1,p=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function v(e){var r=n,i=o;return n=o=void 0,f=e,c=t.apply(i,r)}function b(t){var r=t-a;return void 0===a||r>=e||r<0||l&&t-f>=i}function y(){var t=U();if(b(t))return d(t);u=setTimeout(y,function(t){var r=e-(t-a);return l?D(r,i-(t-f)):r}(t))}function d(t){return u=void 0,p&&n?v(t):(n=o=void 0,c)}function h(){var t=U(),r=b(t);if(n=arguments,o=this,a=t,r){if(void 0===u)return function(t){return f=t,u=setTimeout(y,e),s?v(t):c}(a);if(l)return clearTimeout(u),u=setTimeout(y,e),v(a)}return void 0===u&&(u=setTimeout(y,e)),c}return e=M(e)||0,P(r)&&(s=!!r.leading,i=(l="maxWait"in r)?L(M(r.maxWait)||0,e):i,p="trailing"in r?!!r.trailing:p),h.cancel=function(){void 0!==u&&clearTimeout(u),f=0,n=a=o=u=void 0},h.flush=function(){return void 0===u?c:d(U())},h}var R="object"==typeof global&&global&&global.Object===Object&&global,V="object"==typeof self&&self&&self.Object===Object&&self,W=R||V||Function("return this")(),q=W.Symbol,K=Object.prototype,G=K.hasOwnProperty,J=K.toString,H=q?q.toStringTag:void 0,Q=Object.prototype.toString,X="[object Null]",Y="[object Undefined]",Z=q?q.toStringTag:void 0;function tt(t){return null==t?void 0===t?Y:X:Z&&Z in Object(t)?function(t){var e=G.call(t,H),r=t[H];try{t[H]=void 0;var n=!0}catch{}var o=J.call(t);return n&&(e?t[H]=r:delete t[H]),o}(t):function(t){return Q.call(t)}(t)}function et(t){return null!=t&&"object"==typeof t}var rt="[object Symbol]";function nt(t){return"symbol"==typeof t||et(t)&&tt(t)==rt}var ot=Array.isArray,it=1/0,ct=q?q.prototype:void 0,ut=ct?ct.toString:void 0;function at(t){if("string"==typeof t)return t;if(ot(t))return function(t,e){for(var r=-1,n=null==t?0:t.length,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(t,at)+"";if(nt(t))return ut?ut.call(t):"";var e=t+"";return"0"==e&&1/t==-it?"-0":e}function ft(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function st(t){return t}var lt="[object AsyncFunction]",pt="[object Function]",vt="[object GeneratorFunction]",bt="[object Proxy]";function yt(t){if(!ft(t))return!1;var e=tt(t);return e==pt||e==vt||e==lt||e==bt}var dt,ht=W["__core-js_shared__"],jt=(dt=/[^.]+$/.exec(ht&&ht.keys&&ht.keys.IE_PROTO||""))?"Symbol(src)_1."+dt:"",gt=Function.prototype.toString;function _t(t){if(null!=t){try{return gt.call(t)}catch{}try{return t+""}catch{}}return""}var mt=/^\[object .+?Constructor\]$/,Ot=Function.prototype,wt=Object.prototype,At=Ot.toString,xt=wt.hasOwnProperty,St=RegExp("^"+At.call(xt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Et(t){return!(!ft(t)||function(t){return!!jt&&jt in t}(t))&&(yt(t)?St:mt).test(_t(t))}function zt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Et(r)?r:void 0}var Ft=zt(W,"WeakMap"),Tt=Object.create,Pt=function(){function t(){}return function(e){if(!ft(e))return{};if(Tt)return Tt(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}(),kt=Date.now;function Ct(t){return function(){return t}}var It=function(){try{var t=zt(Object,"defineProperty");return t({},"",{}),t}catch{}}(),$t=It?function(t,e){return It(t,"toString",{configurable:!0,enumerable:!1,value:Ct(e),writable:!0})}:st,Bt=function(t){var e=0,r=0;return function(){var n=kt(),o=16-(n-r);if(r=n,o>0){if(++e>=800)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}($t),Mt=9007199254740991,Ut=/^(?:0|[1-9]\d*)$/;function Lt(t,e){var r=typeof t;return!!(e=e??Mt)&&("number"==r||"symbol"!=r&&Ut.test(t))&&t>-1&&t%1==0&&t<e}function Dt(t,e,r){"__proto__"==e&&It?It(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}function Nt(t,e){return t===e||t!=t&&e!=e}var Rt=Object.prototype.hasOwnProperty;function Vt(t,e,r){var n=t[e];(!Rt.call(t,e)||!Nt(n,r)||void 0===r&&!(e in t))&&Dt(t,e,r)}function Wt(t,e,r,n){var o=!r;r||(r={});for(var i=-1,c=e.length;++i<c;){var u=e[i],a=n?n(r[u],t[u],u,r,t):void 0;void 0===a&&(a=t[u]),o?Dt(r,u,a):Vt(r,u,a)}return r}var qt=Math.max;function Kt(t,e){return Bt(function(t,e,r){return e=qt(void 0===e?t.length-1:e,0),function(){for(var n=arguments,o=-1,i=qt(n.length-e,0),c=Array(i);++o<i;)c[o]=n[e+o];o=-1;for(var u=Array(e+1);++o<e;)u[o]=n[o];return u[e]=r(c),function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}(t,this,u)}}(t,e,st),t+"")}var Gt=9007199254740991;function Jt(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=Gt}function Ht(t){return null!=t&&Jt(t.length)&&!yt(t)}function Qt(t){return Kt((function(e,r){var n=-1,o=r.length,i=o>1?r[o-1]:void 0,c=o>2?r[2]:void 0;for(i=t.length>3&&"function"==typeof i?(o--,i):void 0,c&&function(t,e,r){if(!ft(r))return!1;var n=typeof e;return!!("number"==n?Ht(r)&&Lt(e,r.length):"string"==n&&e in r)&&Nt(r[e],t)}(r[0],r[1],c)&&(i=o<3?void 0:i,o=1),e=Object(e);++n<o;){var u=r[n];u&&t(e,u,n,i)}return e}))}var Xt=Object.prototype;function Yt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||Xt)}function Zt(t){return et(t)&&"[object Arguments]"==tt(t)}var te=Object.prototype,ee=te.hasOwnProperty,re=te.propertyIsEnumerable,ne=Zt(function(){return arguments}())?Zt:function(t){return et(t)&&ee.call(t,"callee")&&!re.call(t,"callee")},oe="object"==typeof t&&t&&!t.nodeType&&t,ie=oe&&"object"==typeof e&&e&&!e.nodeType&&e,ce=ie&&ie.exports===oe?W.Buffer:void 0,ue=(ce?ce.isBuffer:void 0)||function(){return!1},ae={};function fe(t){return function(e){return t(e)}}ae["[object Float32Array]"]=ae["[object Float64Array]"]=ae["[object Int8Array]"]=ae["[object Int16Array]"]=ae["[object Int32Array]"]=ae["[object Uint8Array]"]=ae["[object Uint8ClampedArray]"]=ae["[object Uint16Array]"]=ae["[object Uint32Array]"]=!0,ae["[object Arguments]"]=ae["[object Array]"]=ae["[object ArrayBuffer]"]=ae["[object Boolean]"]=ae["[object DataView]"]=ae["[object Date]"]=ae["[object Error]"]=ae["[object Function]"]=ae["[object Map]"]=ae["[object Number]"]=ae["[object Object]"]=ae["[object RegExp]"]=ae["[object Set]"]=ae["[object String]"]=ae["[object WeakMap]"]=!1;var se="object"==typeof t&&t&&!t.nodeType&&t,le=se&&"object"==typeof e&&e&&!e.nodeType&&e,pe=le&&le.exports===se&&R.process,ve=function(){try{return le&&le.require&&le.require("util").types||pe&&pe.binding&&pe.binding("util")}catch{}}(),be=ve&&ve.isTypedArray,ye=be?fe(be):function(t){return et(t)&&Jt(t.length)&&!!ae[tt(t)]},de=Object.prototype.hasOwnProperty;function he(t,e){var r=ot(t),n=!r&&ne(t),o=!r&&!n&&ue(t),i=!r&&!n&&!o&&ye(t),c=r||n||o||i,u=c?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],a=u.length;for(var f in t)(e||de.call(t,f))&&(!c||!("length"==f||o&&("offset"==f||"parent"==f)||i&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||Lt(f,a)))&&u.push(f);return u}function je(t,e){return function(r){return t(e(r))}}var ge=je(Object.keys,Object),_e=Object.prototype.hasOwnProperty;function me(t){return Ht(t)?he(t):function(t){if(!Yt(t))return ge(t);var e=[];for(var r in Object(t))_e.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}var Oe=Object.prototype.hasOwnProperty;function we(t){if(!ft(t))return function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e}(t);var e=Yt(t),r=[];for(var n in t)"constructor"==n&&(e||!Oe.call(t,n))||r.push(n);return r}function Ae(t){return Ht(t)?he(t,!0):we(t)}var xe=Qt((function(t,e,r,n){Wt(e,Ae(e),t,n)})),Se=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ee=/^\w*$/;function ze(t,e){if(ot(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!nt(t))||Ee.test(t)||!Se.test(t)||null!=e&&t in Object(e)}var Fe=zt(Object,"create"),Te=Object.prototype.hasOwnProperty,Pe=Object.prototype.hasOwnProperty;function ke(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Ce(t,e){for(var r=t.length;r--;)if(Nt(t[r][0],e))return r;return-1}ke.prototype.clear=function(){this.__data__=Fe?Fe(null):{},this.size=0},ke.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},ke.prototype.get=function(t){var e=this.__data__;if(Fe){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return Te.call(e,t)?e[t]:void 0},ke.prototype.has=function(t){var e=this.__data__;return Fe?void 0!==e[t]:Pe.call(e,t)},ke.prototype.set=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=Fe&&void 0===e?"__lodash_hash_undefined__":e,this};var Ie=Array.prototype.splice;function $e(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}$e.prototype.clear=function(){this.__data__=[],this.size=0},$e.prototype.delete=function(t){var e=this.__data__,r=Ce(e,t);return!(r<0||(r==e.length-1?e.pop():Ie.call(e,r,1),--this.size,0))},$e.prototype.get=function(t){var e=this.__data__,r=Ce(e,t);return r<0?void 0:e[r][1]},$e.prototype.has=function(t){return Ce(this.__data__,t)>-1},$e.prototype.set=function(t,e){var r=this.__data__,n=Ce(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};var Be=zt(W,"Map");function Me(t,e){var r=t.__data__;return function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}(e)?r["string"==typeof e?"string":"hash"]:r.map}function Ue(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Ue.prototype.clear=function(){this.size=0,this.__data__={hash:new ke,map:new(Be||$e),string:new ke}},Ue.prototype.delete=function(t){var e=Me(this,t).delete(t);return this.size-=e?1:0,e},Ue.prototype.get=function(t){return Me(this,t).get(t)},Ue.prototype.has=function(t){return Me(this,t).has(t)},Ue.prototype.set=function(t,e){var r=Me(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};var Le="Expected a function";function De(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError(Le);var r=function(){var n=arguments,o=e?e.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var c=t.apply(this,n);return r.cache=i.set(o,c)||i,c};return r.cache=new(De.Cache||Ue),r}De.Cache=Ue;var Ne=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Re=/\\(\\)?/g,Ve=function(t){var e=De(t,(function(t){return 500===r.size&&r.clear(),t})),r=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Ne,(function(t,r,n,o){e.push(n?o.replace(Re,"$1"):r||t)})),e}));function We(t,e){return ot(t)?t:ze(t,e)?[t]:Ve(function(t){return null==t?"":at(t)}(t))}var qe=1/0;function Ke(t){if("string"==typeof t||nt(t))return t;var e=t+"";return"0"==e&&1/t==-qe?"-0":e}function Ge(t,e){for(var r=0,n=(e=We(e,t)).length;null!=t&&r<n;)t=t[Ke(e[r++])];return r&&r==n?t:void 0}const Je=je(Object.getPrototypeOf,Object);var He="[object Object]",Qe=Function.prototype,Xe=Object.prototype,Ye=Qe.toString,Ze=Xe.hasOwnProperty,tr=Ye.call(Object);function er(t){var e=this.__data__=new $e(t);this.size=e.size}er.prototype.clear=function(){this.__data__=new $e,this.size=0},er.prototype.delete=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r},er.prototype.get=function(t){return this.__data__.get(t)},er.prototype.has=function(t){return this.__data__.has(t)},er.prototype.set=function(t,e){var r=this.__data__;if(r instanceof $e){var n=r.__data__;if(!Be||n.length<199)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new Ue(n)}return r.set(t,e),this.size=r.size,this};var rr="object"==typeof t&&t&&!t.nodeType&&t,nr=rr&&"object"==typeof e&&e&&!e.nodeType&&e,or=nr&&nr.exports===rr?W.Buffer:void 0,ir=or?or.allocUnsafe:void 0;function cr(t,e){if(e)return t.slice();var r=t.length,n=ir?ir(r):new t.constructor(r);return t.copy(n),n}var ur=Object.prototype.propertyIsEnumerable,ar=Object.getOwnPropertySymbols,fr=ar?function(t){return null==t?[]:(t=Object(t),function(t,e){for(var r=-1,n=null==t?0:t.length,o=0,i=[];++r<n;){var c=t[r];e(c,r,t)&&(i[o++]=c)}return i}(ar(t),(function(e){return ur.call(t,e)})))}:function(){return[]};function sr(t){return function(t,e,r){var n=e(t);return ot(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,me,fr)}var lr=zt(W,"DataView"),pr=zt(W,"Promise"),vr=zt(W,"Set"),br="[object Map]",yr="[object Promise]",dr="[object Set]",hr="[object WeakMap]",jr="[object DataView]",gr=_t(lr),_r=_t(Be),mr=_t(pr),Or=_t(vr),wr=_t(Ft),Ar=tt;(lr&&Ar(new lr(new ArrayBuffer(1)))!=jr||Be&&Ar(new Be)!=br||pr&&Ar(pr.resolve())!=yr||vr&&Ar(new vr)!=dr||Ft&&Ar(new Ft)!=hr)&&(Ar=function(t){var e=tt(t),r="[object Object]"==e?t.constructor:void 0,n=r?_t(r):"";if(n)switch(n){case gr:return jr;case _r:return br;case mr:return yr;case Or:return dr;case wr:return hr}return e});const xr=Ar;var Sr=Object.prototype.hasOwnProperty,Er=W.Uint8Array;function zr(t){var e=new t.constructor(t.byteLength);return new Er(e).set(new Er(t)),e}var Fr=/\w*$/,Tr=q?q.prototype:void 0,Pr=Tr?Tr.valueOf:void 0;function kr(t,e){var r=e?zr(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}var Cr="[object Boolean]",Ir="[object Date]",$r="[object Map]",Br="[object Number]",Mr="[object RegExp]",Ur="[object Set]",Lr="[object String]",Dr="[object Symbol]",Nr="[object ArrayBuffer]",Rr="[object DataView]",Vr="[object Float32Array]",Wr="[object Float64Array]",qr="[object Int8Array]",Kr="[object Int16Array]",Gr="[object Int32Array]",Jr="[object Uint8Array]",Hr="[object Uint8ClampedArray]",Qr="[object Uint16Array]",Xr="[object Uint32Array]";function Yr(t,e,r){var n=t.constructor;switch(e){case Nr:return zr(t);case Cr:case Ir:return new n(+t);case Rr:return function(t,e){var r=zr(t.buffer);return new t.constructor(r,t.byteOffset,t.byteLength)}(t);case Vr:case Wr:case qr:case Kr:case Gr:case Jr:case Hr:case Qr:case Xr:return kr(t,r);case $r:return new n;case Br:case Lr:return new n(t);case Mr:return function(t){var e=new t.constructor(t.source,Fr.exec(t));return e.lastIndex=t.lastIndex,e}(t);case Ur:return new n;case Dr:return function(t){return Pr?Object(Pr.call(t)):{}}(t)}}function Zr(t){return"function"!=typeof t.constructor||Yt(t)?{}:Pt(Je(t))}var tn=ve&&ve.isMap,en=tn?fe(tn):function(t){return et(t)&&"[object Map]"==xr(t)},rn=ve&&ve.isSet,nn=rn?fe(rn):function(t){return et(t)&&"[object Set]"==xr(t)},on=1,cn="[object Arguments]",un="[object Function]",an="[object GeneratorFunction]",fn="[object Object]",sn={};function ln(t,e,r,n,o,i){var c,u=e&on;if(void 0!==c)return c;if(!ft(t))return t;var a=ot(t);if(a)c=function(t){var e=t.length,r=new t.constructor(e);return e&&"string"==typeof t[0]&&Sr.call(t,"index")&&(r.index=t.index,r.input=t.input),r}(t);else{var f=xr(t),s=f==un||f==an;if(ue(t))return cr(t,u);if(f==fn||f==cn||s&&!o)c=s?{}:Zr(t);else{if(!sn[f])return o?t:{};c=Yr(t,f,u)}}i||(i=new er);var l=i.get(t);if(l)return l;i.set(t,c),nn(t)?t.forEach((function(n){c.add(ln(n,e,r,0,t,i))})):en(t)&&t.forEach((function(n,o){c.set(o,ln(n,e,r,0,t,i))}));var p=a?void 0:sr(t);return function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n&&!1!==e(t[r],r,t););}(p||t,(function(n,o){p&&(n=t[o=n]),Vt(c,o,ln(n,e,r,0,t,i))})),c}sn[cn]=sn["[object Array]"]=sn["[object ArrayBuffer]"]=sn["[object DataView]"]=sn["[object Boolean]"]=sn["[object Date]"]=sn["[object Float32Array]"]=sn["[object Float64Array]"]=sn["[object Int8Array]"]=sn["[object Int16Array]"]=sn["[object Int32Array]"]=sn["[object Map]"]=sn["[object Number]"]=sn[fn]=sn["[object RegExp]"]=sn["[object Set]"]=sn["[object String]"]=sn["[object Symbol]"]=sn["[object Uint8Array]"]=sn["[object Uint8ClampedArray]"]=sn["[object Uint16Array]"]=sn["[object Uint32Array]"]=!0,sn["[object Error]"]=sn[un]=sn["[object WeakMap]"]=!1;var pn=1,vn=4;function bn(t){var e=-1,r=null==t?0:t.length;for(this.__data__=new Ue;++e<r;)this.add(t[e])}function yn(t,e){for(var r=-1,n=null==t?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1}function dn(t,e){return t.has(e)}bn.prototype.add=bn.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},bn.prototype.has=function(t){return this.__data__.has(t)};var hn=1,jn=2;function gn(t,e,r,n,o,i){var c=r&hn,u=t.length,a=e.length;if(u!=a&&!(c&&a>u))return!1;var f=i.get(t),s=i.get(e);if(f&&s)return f==e&&s==t;var l=-1,p=!0,v=r&jn?new bn:void 0;for(i.set(t,e),i.set(e,t);++l<u;){var b=t[l],y=e[l];if(n)var d=c?n(y,b,l,e,t,i):n(b,y,l,t,e,i);if(void 0!==d){if(d)continue;p=!1;break}if(v){if(!yn(e,(function(t,e){if(!dn(v,e)&&(b===t||o(b,t,r,n,i)))return v.push(e)}))){p=!1;break}}else if(b!==y&&!o(b,y,r,n,i)){p=!1;break}}return i.delete(t),i.delete(e),p}function _n(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function mn(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var On=1,wn=2,An="[object Boolean]",xn="[object Date]",Sn="[object Error]",En="[object Map]",zn="[object Number]",Fn="[object RegExp]",Tn="[object Set]",Pn="[object String]",kn="[object Symbol]",Cn="[object ArrayBuffer]",In="[object DataView]",$n=q?q.prototype:void 0,Bn=$n?$n.valueOf:void 0,Mn=1,Un=Object.prototype.hasOwnProperty,Ln=1,Dn="[object Arguments]",Nn="[object Array]",Rn="[object Object]",Vn=Object.prototype.hasOwnProperty;function Wn(t,e,r,n,o,i){var c=ot(t),u=ot(e),a=c?Nn:xr(t),f=u?Nn:xr(e),s=(a=a==Dn?Rn:a)==Rn,l=(f=f==Dn?Rn:f)==Rn,p=a==f;if(p&&ue(t)){if(!ue(e))return!1;c=!0,s=!1}if(p&&!s)return i||(i=new er),c||ye(t)?gn(t,e,r,n,o,i):function(t,e,r,n,o,i,c){switch(r){case In:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case Cn:return!(t.byteLength!=e.byteLength||!i(new Er(t),new Er(e)));case An:case xn:case zn:return Nt(+t,+e);case Sn:return t.name==e.name&&t.message==e.message;case Fn:case Pn:return t==e+"";case En:var u=_n;case Tn:var a=n&On;if(u||(u=mn),t.size!=e.size&&!a)return!1;var f=c.get(t);if(f)return f==e;n|=wn,c.set(t,e);var s=gn(u(t),u(e),n,o,i,c);return c.delete(t),s;case kn:if(Bn)return Bn.call(t)==Bn.call(e)}return!1}(t,e,a,r,n,o,i);if(!(r&Ln)){var v=s&&Vn.call(t,"__wrapped__"),b=l&&Vn.call(e,"__wrapped__");if(v||b){var y=v?t.value():t,d=b?e.value():e;return i||(i=new er),o(y,d,r,n,i)}}return!!p&&(i||(i=new er),function(t,e,r,n,o,i){var c=r&Mn,u=sr(t),a=u.length;if(a!=sr(e).length&&!c)return!1;for(var f=a;f--;){var s=u[f];if(!(c?s in e:Un.call(e,s)))return!1}var l=i.get(t),p=i.get(e);if(l&&p)return l==e&&p==t;var v=!0;i.set(t,e),i.set(e,t);for(var b=c;++f<a;){var y=t[s=u[f]],d=e[s];if(n)var h=c?n(d,y,s,e,t,i):n(y,d,s,t,e,i);if(!(void 0===h?y===d||o(y,d,r,n,i):h)){v=!1;break}b||(b="constructor"==s)}if(v&&!b){var j=t.constructor,g=e.constructor;j!=g&&"constructor"in t&&"constructor"in e&&!("function"==typeof j&&j instanceof j&&"function"==typeof g&&g instanceof g)&&(v=!1)}return i.delete(t),i.delete(e),v}(t,e,r,n,o,i))}function qn(t,e,r,n,o){return t===e||(null==t||null==e||!et(t)&&!et(e)?t!=t&&e!=e:Wn(t,e,r,n,qn,o))}var Kn=1,Gn=2;function Jn(t){return t==t&&!ft(t)}function Hn(t,e){return function(r){return null!=r&&r[t]===e&&(void 0!==e||t in Object(r))}}function Qn(t){var e=function(t){for(var e=me(t),r=e.length;r--;){var n=e[r],o=t[n];e[r]=[n,o,Jn(o)]}return e}(t);return 1==e.length&&e[0][2]?Hn(e[0][0],e[0][1]):function(r){return r===t||function(t,e,r,n){var o=r.length,i=o;if(null==t)return!i;for(t=Object(t);o--;){var c=r[o];if(c[2]?c[1]!==t[c[0]]:!(c[0]in t))return!1}for(;++o<i;){var u=(c=r[o])[0],a=t[u],f=c[1];if(c[2]){if(void 0===a&&!(u in t))return!1}else{var s=new er;if(!qn(f,a,Kn|Gn,n,s))return!1}}return!0}(r,0,e)}}function Xn(t,e){return null!=t&&e in Object(t)}function Yn(t,e){return null!=t&&function(t,e,r){for(var n=-1,o=(e=We(e,t)).length,i=!1;++n<o;){var c=Ke(e[n]);if(!(i=null!=t&&r(t,c)))break;t=t[c]}return i||++n!=o?i:!!(o=null==t?0:t.length)&&Jt(o)&&Lt(c,o)&&(ot(t)||ne(t))}(t,e,Xn)}var Zn=1,to=2;function eo(t,e){return ze(t)&&Jn(e)?Hn(Ke(t),e):function(r){var n=function(t,e,r){var n=null==t?void 0:Ge(t,e);return void 0===n?r:n}(r,t);return void 0===n&&n===e?Yn(r,t):qn(e,n,Zn|to)}}function ro(t){return ze(t)?function(t){return function(e){return null==e?void 0:e[t]}}(Ke(t)):function(t){return function(e){return Ge(e,t)}}(t)}var no=function(t,e,r){for(var n=-1,o=Object(t),i=r(t),c=i.length;c--;){var u=i[++n];if(!1===e(o[u],u,o))break}return t};function oo(t,e,r){(void 0!==r&&!Nt(t[e],r)||void 0===r&&!(e in t))&&Dt(t,e,r)}function io(t,e){if(("constructor"!==e||"function"!=typeof t[e])&&"__proto__"!=e)return t[e]}function co(t,e,r,n,o,i,c){var u=io(t,r),a=io(e,r),f=c.get(a);if(f)oo(t,r,f);else{var s=i?i(u,a,r+"",t,e,c):void 0,l=void 0===s;if(l){var p=ot(a),v=!p&&ue(a),b=!p&&!v&&ye(a);s=a,p||v||b?ot(u)?s=u:function(t){return et(t)&&Ht(t)}(u)?s=function(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}(u):v?(l=!1,s=cr(a,!0)):b?(l=!1,s=kr(a,!0)):s=[]:function(t){if(!et(t)||tt(t)!=He)return!1;var e=Je(t);if(null===e)return!0;var r=Ze.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&Ye.call(r)==tr}(a)||ne(a)?(s=u,ne(u)?s=function(t){return Wt(t,Ae(t))}(u):(!ft(u)||yt(u))&&(s=Zr(a))):l=!1}l&&(c.set(a,s),o(s,a,n,i,c),c.delete(a)),oo(t,r,s)}}function uo(t,e,r,n,o){t!==e&&no(e,(function(i,c){if(o||(o=new er),ft(i))co(t,e,c,r,uo,n,o);else{var u=n?n(io(t,c),i,c+"",t,e,o):void 0;void 0===u&&(u=i),oo(t,c,u)}}),Ae)}var ao=Qt((function(t,e,r,n){uo(t,e,r,n)}));function fo(t,e){var r={};return e=function(t){return"function"==typeof t?t:null==t?st:"object"==typeof t?ot(t)?eo(t[0],t[1]):Qn(t):ro(t)}(e),function(t,e){t&&no(t,e,me)}(t,(function(t,n,o){Dt(r,e(t,n,o),t)})),r}const so=new RegExp("([\\p{Ll}\\d])(\\p{Lu})","gu"),lo=new RegExp("(\\p{Lu})([\\p{Lu}][\\p{Ll}])","gu"),po=new RegExp("(\\d)\\p{Ll}|(\\p{L})\\d","u"),vo=/[^\p{L}\d]+/giu,bo="$1\0$2",yo="";function ho(t){let e=t.trim();e=e.replace(so,bo).replace(lo,bo),e=e.replace(vo,"\0");let r=0,n=e.length;for(;"\0"===e.charAt(r);)r++;if(r===n)return[];for(;"\0"===e.charAt(n-1);)n--;return e.slice(r,n).split(/\0/g)}function jo(t){const e=ho(t);for(let r=0;r<e.length;r++){const t=e[r],n=po.exec(t);if(n){const o=n.index+(n[1]??n[2]).length;e.splice(r,1,t.slice(0,o),t.slice(o))}}return e}function go(t,e){const[r,n,o]=function(t,e={}){const r=e.split??(e.separateNumbers?jo:ho),n=e.prefixCharacters??yo,o=e.suffixCharacters??yo;let i=0,c=t.length;for(;i<t.length;){const e=t.charAt(i);if(!n.includes(e))break;i++}for(;c>i;){const e=c-1,r=t.charAt(e);if(!o.includes(r))break;c=e}return[t.slice(0,i),r(t.slice(i,c)),t.slice(c)]}(t,e),i=function(t){return e=>e.toLocaleLowerCase(t)}(void 0),c=function(t){return e=>e.toLocaleUpperCase(t)}(void 0),u=function(t,e){return(r,n)=>{const o=r[0];return(n>0&&o>="0"&&o<="9"?"_"+o:e(o))+t(r.slice(1))}}(i,c);return r+n.map(((t,e)=>0===e?i(t):u(t,e))).join("")+o}const _o=t=>/.+-.+/.test(t)?go(t):t;function mo(t,e){const r=Object.create(null),n=t.split(",");for(let o=0;o<n.length;o++)r[n[o]]=!0;return t=>!!r[t]}const Oo=mo("String,Number,Boolean,Function,Symbol,BigInt");function wo(t,e){let r;const n=function(t){const e=null==t?void 0:t.toString().match(/^\s*function (\w+)/);return e?e[1]:null===t?"null":""}(e);if(Oo(n)){const o=typeof t;r=o===n.toLowerCase(),!r&&"object"===o&&(r=t instanceof e)}else r="Object"===n?ft(t):"Array"===n?Array.isArray(t):"null"===n?null===t:t instanceof e;return{valid:r,expectedType:n}}function Ao(t,{mergeObject:e,mergeFunction:r}){const n=[];for(let i=t.length-1;i>=0;i--)n.push(t[i]);const o=r?(t,e)=>"function"==typeof t&&"function"==typeof e?r(e,t):void 0:void 0;return"deep"===e?ao(...n,o):xe(...n,o)}function xo(t,{mergeFunction:e}){return t.reduce(e,(()=>{}))}function So(t,e={}){const{type:r,default:n,defaultIsDynamic:o=!1,required:i=!1,validator:c,camelizeObjectKeys:u=!1,mergeObjectApplyOnlyToDefault:a=!1,mergeFunctionApplyOnlyToDefault:f=!0}=e;let{mergeObject:s="deep",mergeFunction:l=!1}=e;const p=[];let v,b=!1,y=!1;const d=t=>{if(void 0!==t){!function({prop:t,type:e,validator:r}){if(![void 0,null].includes(t)&&e){let r=!1;const n=Array.isArray(e)?e:[e],o=[];for(let e=0;e<n.length&&!r;e++){const{valid:i,expectedType:c}=wo(t,n[e]);o.push(c||""),r=i}if(!r)throw new TypeError(`Invalid prop: type check failed, expecting [${o.join(", ")}], receiving: ${t}`)}if(r&&!r(t))throw new Error(`Invalid prop: validator check failed, receiving: ${t}`)}({type:r,prop:t,validator:c});const e=(t=>"Object"===Object.prototype.toString.call(t).slice(8,-1))(t);return b=e,y="function"==typeof t,e?(t=function(t){return ln(t,pn|vn)}(t),u?fo(t,((t,e)=>_o(e))):t):t}};for(const h of t)p.push(d(h));if(o){if("function"!=typeof n)throw new TypeError(`Invalid option: options.default should be Function when options.defaultIsDynamic enabled, receiving: ${n}`)}else p.push(d(n));b||(s=!1,y||(l=!1));for(let h=0;h<p.length;h++){const t=p[h];if(void 0!==t){v=h===p.length-1?t:s?Ao(a?[t,n]:p,{mergeObject:s,mergeFunction:l}):l?xo(f?[t,n]:p,{mergeFunction:l}):t;break}}if(i&&[void 0,null].includes(v))throw new Error("Missing required prop");return o?So(t,{...e,default:n(v),defaultIsDynamic:!1}):v}function Eo(t){const e=Array.from(_o(t));return e[0]=e[0].toUpperCase(),e.unshift("o","n"),e.join("")}const zo="JsonEditorVue",Fo={},To={},Po="modelValue",ko="update:modelValue",Co=["mainMenuBar","navigationBar","statusBar","askToFormat","readOnly","escapeControlCharacters","escapeUnicodeCharacters","flattenColumns"],Io={[Po]:{},mode:{type:String},debounce:{type:Number},stringified:{type:Boolean,default:void 0},...Object.fromEntries(Co.map((t=>[t,{type:Boolean,default:void 0}])))};t("e",o({name:zo,install(t,e){const r=function(t,{props:e=[],camelizePropNames:r=!1}={}){const n={props:{},attrs:{},listeners:{},hooks:{},slots:{}};let o;if(Array.isArray(e))o=r?e.map((t=>_o(t))):e;else if(r){o=[];for(const t in e)o.push(_o(t))}else o=Object.keys(e);for(const i in t)if(i.startsWith("@")){const e=i.substring(1);if(e.startsWith("vue:"))n.hooks[Eo(e.replace("vue:","vnode-"))]=t[i];else{if(e.startsWith("vnode"))throw new Error("@vnode-* hooks are no longer supported. Use the vue: prefix instead. For example, @vnode-mounted should be changed to @vue:mounted. @vnode-* hooks support has been removed in Vue 3.4.");n.listeners[Eo(e)]=t[i]}}else if(i.startsWith("#")){const e=i.substring(1);e&&(n.slots[e]=t[i])}else{const e=r?_o(i):i;o.includes(e)?n.props[e]=t[i]:n.attrs[i]=t[i]}return n}(e||{},{props:Io});Object.assign(Fo,r.props),Object.assign(To,r.attrs),t.component(zo,this)},props:Io,emits:{[ko]:t=>!0,"update:mode":function(t){return!0}},setup(t,{attrs:e,emit:o,expose:b}){var y;const d=null==(y=i())?void 0:y.proxy,h=c(),j=c(!1),g=c();u((()=>{var e;g.value=So([t.mode,Fo.mode],{type:String}),null==(e=h.value)||e.updateProps({mode:g.value||n.tree})}));const _=t=>{o("update:mode",t)};void 0!==Fo.mode&&void 0===t.mode&&_(Fo.mode);const m=a((()=>So([t.debounce,Fo.debounce,100],{type:Number}))),O=a((()=>So([t.stringified,Fo.stringified,!0],{type:Boolean}))),w=N((t=>{j.value=!0,!O.value&&t.text&&(h.value&&!h.value.validate()&&(t.json=JSON.parse(t.text)),t.text=void 0),o(ko,void 0===t.text?t.json:t.text)}),m.value),A=(t,e)=>(...r)=>{t(...r),e(...r)};return null==b||b({jsonEditor:h}),f((()=>{var t;null==(t=h.value)||t.destroy()})),s((()=>{const n=So([t[Po],Fo[Po]]),o=Object.fromEntries(Array.from(Co,(e=>[e,So([t[e],Fo[e]])])).filter((([,t])=>void 0!==t))),i=So([o,e,To,{onChange:w,onChangeMode:_,mode:g.value,...void 0!==n&&{content:{["string"==typeof n&&"text"===g.value&&O.value?"text":"json"]:n}}}],{camelizeObjectKeys:!0,mergeFunction:A,type:Object});h.value=new r({target:null==d?void 0:d.$refs.jsonEditorRef,props:i}),l((()=>t[Po]),(t=>{j.value?j.value=!1:h.value&&h.value.set([void 0,""].includes(t)?{text:""}:{["string"==typeof t&&"text"===g.value&&O.value?"text":"json"]:t})}),{deep:!0}),l((()=>Array.from(Co,(e=>t[e]))),(t=>{var e;null==(e=h.value)||e.updateProps(Object.fromEntries(Array.from(t,((t,e)=>[Co[e],t])).filter((([,t])=>void 0!==t))))})),l((()=>e),(t=>{var e;const r={};(t.onChange||t["on-change"])&&(r.onChange=w),(t.onChangeMode||t["on-change-mode"])&&(r.onChangeMode=_),null==(e=h.value)||e.updateProps(Object.getOwnPropertyNames(r).length>0?So([t,r],{camelizeObjectKeys:!0,mergeFunction:A,type:Object}):t)}),{deep:!0}),b||(b=t=>{for(const e in t)d[e]=p(t[e])})({jsonEditor:h})})),()=>v("div",{ref:"jsonEditorRef"})}}))}}}));
