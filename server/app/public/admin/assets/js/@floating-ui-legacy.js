!function(){function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,r){if(!t)return;if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(t,r)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function r(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */r=function(){return t};var t={},e=Object.prototype,o=e.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",f=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(A){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,a=Object.create(o.prototype),c=new S(n||[]);return i(a,"_invoke",{value:O(t,r,c)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(A){return{type:"throw",arg:A}}}t.wrap=s;var p={};function d(){}function y(){}function v(){}var g={};l(g,c,(function(){return this}));var m=Object.getPrototypeOf,x=m&&m(m(T([])));x&&x!==e&&o.call(x,c)&&(g=x);var w=v.prototype=d.prototype=Object.create(g);function b(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(i,a,c,u){var f=h(t[i],t,a);if("throw"!==f.type){var l=f.arg,s=l.value;return s&&"object"==n(s)&&o.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):e.resolve(s).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,u)}))}u(f.arg)}var a;i(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function O(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return P()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=E(a,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=h(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function E(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function T(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:P}}function P(){return{value:void 0,done:!0}}return y.prototype=v,i(w,"constructor",{value:v,configurable:!0}),i(v,"constructor",{value:y,configurable:!0}),y.displayName=l(v,f,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,f,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(L.prototype),l(L.prototype,u,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new L(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),l(w,f,"Generator"),l(w,c,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=T,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:T(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===n(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(f){return void r(f)}c.done?e(u):Promise.resolve(u).then(n,o)}function u(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){c(i,n,o,a,u,"next",t)}function u(t){c(i,n,o,a,u,"throw",t)}a(void 0)}))}}System.register([],(function(e,o){"use strict";return{execute:function(){function o(t){return t.split("-")[1]}function c(t){return"y"===t?"height":"width"}function f(t){return t.split("-")[0]}function l(t){return["top","bottom"].includes(f(t))?"x":"y"}function s(t,e,r){var n,i=t.reference,a=t.floating,u=i.x+i.width/2-a.width/2,s=i.y+i.height/2-a.height/2,h=l(e),p=c(h),d=i[p]/2-a[p]/2,y="x"===h;switch(f(e)){case"top":n={x:u,y:i.y-a.height};break;case"bottom":n={x:u,y:i.y+i.height};break;case"right":n={x:i.x+i.width,y:s};break;case"left":n={x:i.x-a.width,y:s};break;default:n={x:i.x,y:i.y}}switch(o(e)){case"start":n[h]-=d*(r&&y?-1:1);break;case"end":n[h]+=d*(r&&y?-1:1)}return n}var h=function(){var t=u(r().mark((function t(e,o,c){var u,f,l,h,p,d,y,v,g,m,x,w,b,L,O,E,j,k,S,T,P,A,R,_,D,N;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=c.placement,f=void 0===u?"bottom":u,l=c.strategy,h=void 0===l?"absolute":l,p=c.middleware,d=void 0===p?[]:p,y=c.platform,v=d.filter(Boolean),t.next=10,null==y.isRTL?void 0:y.isRTL(o);case 10:return g=t.sent,t.next=13,y.getElementRects({reference:e,floating:o,strategy:h});case 13:m=t.sent,x=s(m,f,g),w=x.x,b=x.y,L=f,O={},E=0,j=0;case 21:if(!(j<v.length)){t.next=56;break}return S=v[j],T=S.name,P=S.fn,t.next=27,P({x:w,y:b,initialPlacement:f,placement:L,strategy:h,middlewareData:O,rects:m,platform:y,elements:{reference:e,floating:o}});case 27:if(A=t.sent,R=A.x,_=A.y,D=A.data,N=A.reset,w=null!=R?R:w,b=null!=_?_:b,O=i(i({},O),{},a({},T,i(i({},O[T]),D))),t.t0=N&&E<=50,!t.t0){t.next=53;break}if(E++,t.t1="object"==n(N),!t.t1){t.next=52;break}if(N.placement&&(L=N.placement),t.t2=N.rects,!t.t2){t.next=51;break}if(!0!==N.rects){t.next=49;break}return t.next=46,y.getElementRects({reference:e,floating:o,strategy:h});case 46:t.t3=t.sent,t.next=50;break;case 49:t.t3=N.rects;case 50:m=t.t3;case 51:k=s(m,L,g),w=k.x,b=k.y;case 52:j=-1;case 53:j++,t.next=21;break;case 56:return t.abrupt("return",{x:w,y:b,placement:L,strategy:h,middlewareData:O});case 57:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}();function p(t){return"number"!=typeof t?function(t){return i({top:0,right:0,bottom:0,left:0},t)}(t):{top:t,right:t,bottom:t,left:t}}var d=Math.min,y=Math.max;function v(t,e,r){return y(t,d(e,r))}e("m",(function(t){return{name:"arrow",options:t,fn:function(e){return u(r().mark((function n(){var i,u,f,s,h,d,y,g,m,x,w,b,L,O,E,j,k,S,T,P,A,R,_,D,N,C,F,W;return r().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(s=(f=t||{}).element,h=f.padding,d=void 0===h?0:h,y=e.x,g=e.y,m=e.placement,x=e.rects,w=e.platform,null!=s){r.next=3;break}return r.abrupt("return",{});case 3:return b=p(d),L={x:y,y:g},O=l(m),E=c(O),r.next=9,w.getDimensions(s);case 9:return j=r.sent,k="y"===O?"top":"left",S="y"===O?"bottom":"right",T=x.reference[E]+x.reference[O]-L[O]-x.floating[E],P=L[O]-x.reference[O],r.next=16,null==w.getOffsetParent?void 0:w.getOffsetParent(s);case 16:return A=r.sent,0===(R=A?"y"===O?A.clientHeight||0:A.clientWidth||0:0)&&(R=x.floating[E]),_=T/2-P/2,D=b[k],N=R-j[E]-b[S],C=R/2-j[E]/2+_,F=v(D,C,N),W=null!=o(m)&&C!=F&&x.reference[E]/2-(C<D?b[k]:b[S])-j[E]/2<0,r.abrupt("return",(a(u={},O,L[O]-(W?C<D?D-C:N-C:0)),a(u,"data",(a(i={},O,F),a(i,"centerOffset",C-F),i)),u));case 21:case"end":return r.stop()}}),n)})))()}}}));["top","right","bottom","left"].reduce((function(t,e){return t.concat(e,e+"-start",e+"-end")}),[]);e("O",(function(t){return void 0===t&&(t=0),{name:"offset",options:t,fn:function(e){return u(r().mark((function n(){var a,c,s;return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=e.x,c=e.y,n.next=4,function(){var t=u(r().mark((function t(e,n){var a,c,u,s,h,p,d,y,v,g,m,x,w,b;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.placement,c=e.platform,u=e.elements,t.next=5,null==c.isRTL?void 0:c.isRTL(u.floating);case 5:return s=t.sent,h=f(a),p=o(a),d="x"===l(a),y=["left","top"].includes(h)?-1:1,v=s&&d?-1:1,g="function"==typeof n?n(e):n,m="number"==typeof g?{mainAxis:g,crossAxis:0,alignmentAxis:null}:i({mainAxis:0,crossAxis:0,alignmentAxis:null},g),x=m.mainAxis,w=m.crossAxis,b=m.alignmentAxis,t.abrupt("return",(p&&"number"==typeof b&&(w="end"===p?-1*b:b),d?{x:w*v,y:x*y}:{x:x*y,y:w*v}));case 14:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()(e,t);case 4:return s=n.sent,n.abrupt("return",{x:a+s.x,y:c+s.y,data:s});case 6:case"end":return n.stop()}}),n)})))()}}}));function g(t){var e;return(null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function m(t){return g(t).getComputedStyle(t)}var x,w=Math.min,b=Math.max,L=Math.round;function O(t){var e=m(t),r=parseFloat(e.width),n=parseFloat(e.height),o=t.offsetWidth,i=t.offsetHeight,a=L(r)!==o||L(n)!==i;return a&&(r=o,n=i),{width:r,height:n,fallback:a}}function E(t){return T(t)?(t.nodeName||"").toLowerCase():""}function j(){if(x)return x;var t=navigator.userAgentData;return t&&Array.isArray(t.brands)?x=t.brands.map((function(t){return t.brand+"/"+t.version})).join(" "):navigator.userAgent}function k(t){return t instanceof g(t).HTMLElement}function S(t){return t instanceof g(t).Element}function T(t){return t instanceof g(t).Node}function P(t){return"undefined"!=typeof ShadowRoot&&(t instanceof g(t).ShadowRoot||t instanceof ShadowRoot)}function A(t){var e=m(t),r=e.overflow,n=e.overflowX,o=e.overflowY,i=e.display;return/auto|scroll|overlay|hidden|clip/.test(r+o+n)&&!["inline","contents"].includes(i)}function R(t){return["table","td","th"].includes(E(t))}function _(t){var e=/firefox/i.test(j()),r=m(t),n=r.backdropFilter||r.WebkitBackdropFilter;return"none"!==r.transform||"none"!==r.perspective||!!n&&"none"!==n||e&&"filter"===r.willChange||e&&!!r.filter&&"none"!==r.filter||["transform","perspective"].some((function(t){return r.willChange.includes(t)}))||["paint","layout","strict","content"].some((function(t){var e=r.contain;return null!=e&&e.includes(t)}))}function D(){return/^((?!chrome|android).)*safari/i.test(j())}function N(t){return["html","body","#document"].includes(E(t))}function C(t){return S(t)?t:t.contextElement}var F={x:1,y:1};function W(t){var e=C(t);if(!k(e))return F;var r=e.getBoundingClientRect(),n=O(e),o=n.width,i=n.height,a=n.fallback,c=(a?L(r.width):r.width)/o,u=(a?L(r.height):r.height)/i;return c&&Number.isFinite(c)||(c=1),u&&Number.isFinite(u)||(u=1),{x:c,y:u}}function H(t,e,r,n){var o,i;void 0===e&&(e=!1),void 0===r&&(r=!1);var a=t.getBoundingClientRect(),c=C(t),u=F;e&&(n?S(n)&&(u=W(n)):u=W(t));var f=c?g(c):window,l=D()&&r,s=(a.left+(l&&(null==(o=f.visualViewport)?void 0:o.offsetLeft)||0))/u.x,h=(a.top+(l&&(null==(i=f.visualViewport)?void 0:i.offsetTop)||0))/u.y,p=a.width/u.x,d=a.height/u.y;if(c)for(var y=g(c),v=n&&S(n)?g(n):n,m=y.frameElement;m&&n&&v!==y;){var x=W(m),w=m.getBoundingClientRect(),b=getComputedStyle(m);w.x+=(m.clientLeft+parseFloat(b.paddingLeft))*x.x,w.y+=(m.clientTop+parseFloat(b.paddingTop))*x.y,s*=x.x,h*=x.y,p*=x.x,d*=x.y,s+=w.x,h+=w.y,m=g(m).frameElement}return{width:p,height:d,top:h,right:s+p,bottom:h+d,left:s,x:s,y:h}}function G(t){return((T(t)?t.ownerDocument:t.document)||window.document).documentElement}function M(t){return S(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function V(t){return H(G(t)).left+M(t).scrollLeft}function B(t){if("html"===E(t))return t;var e=t.assignedSlot||t.parentNode||P(t)&&t.host||G(t);return P(e)?e.host:e}function I(t){var e=B(t);return N(e)?e.ownerDocument.body:k(e)&&A(e)?e:I(e)}function Y(t,e){var r;void 0===e&&(e=[]);var n=I(t),o=n===(null==(r=t.ownerDocument)?void 0:r.body),i=g(n);return o?e.concat(i,i.visualViewport||[],A(n)?n:[]):e.concat(n,Y(n))}function X(t,e,r){var n;if("viewport"===e)n=function(t,e){var r=g(t),n=G(t),o=r.visualViewport,i=n.clientWidth,a=n.clientHeight,c=0,u=0;if(o){i=o.width,a=o.height;var f=D();(!f||f&&"fixed"===e)&&(c=o.offsetLeft,u=o.offsetTop)}return{width:i,height:a,x:c,y:u}}(t,r);else if("document"===e)n=function(t){var e=G(t),r=M(t),n=t.ownerDocument.body,o=b(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),i=b(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight),a=-r.scrollLeft+V(t),c=-r.scrollTop;return"rtl"===m(n).direction&&(a+=b(e.clientWidth,n.clientWidth)-o),{width:o,height:i,x:a,y:c}}(G(t));else if(S(e))n=function(t,e){var r=H(t,!0,"fixed"===e),n=r.top+t.clientTop,o=r.left+t.clientLeft,i=k(t)?W(t):{x:1,y:1};return{width:t.clientWidth*i.x,height:t.clientHeight*i.y,x:o*i.x,y:n*i.y}}(e,r);else{var o=i({},e);if(D()){var a,c,u=g(t);o.x-=(null==(a=u.visualViewport)?void 0:a.offsetLeft)||0,o.y-=(null==(c=u.visualViewport)?void 0:c.offsetTop)||0}n=o}return function(t){return i(i({},t),{},{top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height})}(n)}function z(t,e){return k(t)&&"fixed"!==m(t).position?e?e(t):t.offsetParent:null}function U(t,e){for(var r=g(t),n=z(t,e);n&&R(n)&&"static"===m(n).position;)n=z(n,e);return n&&("html"===E(n)||"body"===E(n)&&"static"===m(n).position&&!_(n))?r:n||function(t){for(var e=B(t);k(e)&&!N(e);){if(_(e))return e;e=B(e)}return null}(t)||r}function $(t,e,r){var n=k(e),o=G(e),i=H(t,!0,"fixed"===r,e),a={scrollLeft:0,scrollTop:0},c={x:0,y:0};if(n||!n&&"fixed"!==r)if(("body"!==E(e)||A(o))&&(a=M(e)),k(e)){var u=H(e,!0);c.x=u.x+e.clientLeft,c.y=u.y+e.clientTop}else o&&(c.x=V(o));return{x:i.left+a.scrollLeft-c.x,y:i.top+a.scrollTop-c.y,width:i.width,height:i.height}}var q={getClippingRect:function(e){var r=e.element,n=e.boundary,o=e.rootBoundary,i=e.strategy,a="clippingAncestors"===n?function(t,e){var r=e.get(t);if(r)return r;for(var n=Y(t).filter((function(t){return S(t)&&"body"!==E(t)})),o=null,i="fixed"===m(t).position,a=i?B(t):t;S(a)&&!N(a);){var c=m(a),u=_(a);"fixed"===c.position?o=null:(i?u||o:u||"static"!==c.position||!o||!["absolute","fixed"].includes(o.position))?o=c:n=n.filter((function(t){return t!==a})),a=B(a)}return e.set(t,n),n}(r,this._c):[].concat(n),c=[].concat(t(a),[o]),u=c[0],f=c.reduce((function(t,e){var n=X(r,e,i);return t.top=b(n.top,t.top),t.right=w(n.right,t.right),t.bottom=w(n.bottom,t.bottom),t.left=b(n.left,t.left),t}),X(r,u,i));return{width:f.right-f.left,height:f.bottom-f.top,x:f.left,y:f.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){var e=t.rect,r=t.offsetParent,n=t.strategy,o=k(r),i=G(r);if(r===i)return e;var a={scrollLeft:0,scrollTop:0},c={x:1,y:1},u={x:0,y:0};if((o||!o&&"fixed"!==n)&&(("body"!==E(r)||A(i))&&(a=M(r)),k(r))){var f=H(r);c=W(r),u.x=f.x+r.clientLeft,u.y=f.y+r.clientTop}return{width:e.width*c.x,height:e.height*c.y,x:e.x*c.x-a.scrollLeft*c.x+u.x,y:e.y*c.y-a.scrollTop*c.y+u.y}},isElement:S,getDimensions:function(t){return k(t)?O(t):t.getBoundingClientRect()},getOffsetParent:U,getDocumentElement:G,getScale:W,getElementRects:function(t){var e=this;return u(r().mark((function n(){var o,a,c,u,f;return r().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=t.reference,a=t.floating,c=t.strategy,u=e.getOffsetParent||U,f=e.getDimensions,r.t0=$,r.t1=o,r.next=6,u(a);case 6:return r.t2=r.sent,r.t3=c,r.t4=(0,r.t0)(r.t1,r.t2,r.t3),r.t5=i,r.t6={x:0,y:0},r.next=13,f(a);case 13:return r.t7=r.sent,r.t8=(0,r.t5)(r.t6,r.t7),r.abrupt("return",{reference:r.t4,floating:r.t8});case 16:case"end":return r.stop()}}),n)})))()},getClientRects:function(t){return Array.from(t.getClientRects())},isRTL:function(t){return"rtl"===m(t).direction}};e("z",(function(t,e,r){var n=new Map,o=i({platform:q},r),a=i(i({},o.platform),{},{_c:n});return h(t,e,i(i({},o),{},{platform:a}))}))}}}))}();
