System.register([],(function(e,r){"use strict";return{execute:function(){function r(){return r=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},r.apply(this,arguments)}function t(e){return t=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},t(e)}function n(e,r){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,r){return e.__proto__=r,e},n(e,r)}function i(e,r,t){return i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct.bind():function(e,r,t){var i=[null];i.push.apply(i,r);var a=new(Function.bind.apply(e,i));return t&&n(a,t.prototype),a},i.apply(null,arguments)}function a(e){var r="function"==typeof Map?new Map:void 0;return a=function(e){if(null===e||(a=e,-1===Function.toString.call(a).indexOf("[native code]")))return e;var a;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(e))return r.get(e);r.set(e,u)}function u(){return i(e,arguments,t(this).constructor)}return u.prototype=Object.create(e.prototype,{constructor:{value:u,enumerable:!1,writable:!0,configurable:!0}}),n(u,e)},a(e)}var u=/%[sdj%]/g,s=function(){};function o(e){if(!e||!e.length)return null;var r={};return e.forEach((function(e){var t=e.field;r[t]=r[t]||[],r[t].push(e)})),r}function f(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];var i=0,a=t.length;return"function"==typeof e?e.apply(null,t):"string"==typeof e?e.replace(u,(function(e){if("%%"===e)return"%";if(i>=a)return e;switch(e){case"%s":return String(t[i++]);case"%d":return Number(t[i++]);case"%j":try{return JSON.stringify(t[i++])}catch(r){return"[Circular]"}break;default:return e}})):e}function l(e,r){return null==e||!("array"!==r||!Array.isArray(e)||e.length)||!(!function(e){return"string"===e||"url"===e||"hex"===e||"email"===e||"date"===e||"pattern"===e}(r)||"string"!=typeof e||e)}function c(e,r,t){var n=0,i=e.length;!function a(u){if(u&&u.length)t(u);else{var s=n;n+=1,s<i?r(e[s],a):t([])}}([])}"undefined"!=typeof process&&process.env;var d=function(e){var r,t;function i(r,t){var n;return(n=e.call(this,"Async Validation Error")||this).errors=r,n.fields=t,n}return t=e,(r=i).prototype=Object.create(t.prototype),r.prototype.constructor=r,n(r,t),i}(a(Error));function p(e,r,t,n,i){if(r.first){var a=new Promise((function(r,a){var u=function(e){var r=[];return Object.keys(e).forEach((function(t){r.push.apply(r,e[t]||[])})),r}(e);c(u,t,(function(e){return n(e),e.length?a(new d(e,o(e))):r(i)}))}));return a.catch((function(e){return e})),a}var u=!0===r.firstFields?Object.keys(e):r.firstFields||[],s=Object.keys(e),f=s.length,l=0,p=[],y=new Promise((function(r,a){var y=function(e){if(p.push.apply(p,e),++l===f)return n(p),p.length?a(new d(p,o(p))):r(i)};s.length||(n(p),r(i)),s.forEach((function(r){var n=e[r];-1!==u.indexOf(r)?c(n,t,y):function(e,r,t){var n=[],i=0,a=e.length;function u(e){n.push.apply(n,e||[]),++i===a&&t(n)}e.forEach((function(e){r(e,u)}))}(n,t,y)}))}));return y.catch((function(e){return e})),y}function y(e,r){return function(t){var n,i;return n=e.fullFields?function(e,r){for(var t=e,n=0;n<r.length;n++){if(null==t)return t;t=t[r[n]]}return t}(r,e.fullFields):r[t.field||e.fullField],(i=t)&&void 0!==i.message?(t.field=t.field||e.fullField,t.fieldValue=n,t):{message:"function"==typeof t?t():t,fieldValue:n,field:t.field||e.fullField}}}function g(e,t){if(t)for(var n in t)if(t.hasOwnProperty(n)){var i=t[n];"object"==typeof i&&"object"==typeof e[n]?e[n]=r({},e[n],i):e[n]=i}return e}var h,v=function(e,r,t,n,i,a){!e.required||t.hasOwnProperty(e.field)&&!l(r,a||e.type)||n.push(f(i.messages.required,e.fullField))},m=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,b=/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i,q={integer:function(e){return q.number(e)&&parseInt(e,10)===e},float:function(e){return q.number(e)&&!q.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch(r){return!1}},date:function(e){return"function"==typeof e.getTime&&"function"==typeof e.getMonth&&"function"==typeof e.getYear&&!isNaN(e.getTime())},number:function(e){return!isNaN(e)&&"number"==typeof e},object:function(e){return"object"==typeof e&&!q.array(e)},method:function(e){return"function"==typeof e},email:function(e){return"string"==typeof e&&e.length<=320&&!!e.match(m)},url:function(e){return"string"==typeof e&&e.length<=2048&&!!e.match(function(){if(h)return h;var e="[a-fA-F\\d:]",r=function(r){return r&&r.includeBoundaries?"(?:(?<=\\s|^)(?="+e+")|(?<="+e+")(?=\\s|$))":""},t="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",n="[a-fA-F\\d]{1,4}",i=("\n(?:\n(?:"+n+":){7}(?:"+n+"|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:"+n+":){6}(?:"+t+"|:"+n+"|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:"+n+":){5}(?::"+t+"|(?::"+n+"){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:"+n+":){4}(?:(?::"+n+"){0,1}:"+t+"|(?::"+n+"){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:"+n+":){3}(?:(?::"+n+"){0,2}:"+t+"|(?::"+n+"){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:"+n+":){2}(?:(?::"+n+"){0,3}:"+t+"|(?::"+n+"){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:"+n+":){1}(?:(?::"+n+"){0,4}:"+t+"|(?::"+n+"){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::"+n+"){0,5}:"+t+"|(?::"+n+"){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n").replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),a=new RegExp("(?:^"+t+"$)|(?:^"+i+"$)"),u=new RegExp("^"+t+"$"),s=new RegExp("^"+i+"$"),o=function(e){return e&&e.exact?a:new RegExp("(?:"+r(e)+t+r(e)+")|(?:"+r(e)+i+r(e)+")","g")};o.v4=function(e){return e&&e.exact?u:new RegExp(""+r(e)+t+r(e),"g")},o.v6=function(e){return e&&e.exact?s:new RegExp(""+r(e)+i+r(e),"g")};var f=o.v4().source,l=o.v6().source;return h=new RegExp("(?:^(?:(?:(?:[a-z]+:)?//)|www\\.)(?:\\S+(?::\\S*)?@)?(?:localhost|"+f+"|"+l+'|(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:[/?#][^\\s"]*)?$)',"i")}())},hex:function(e){return"string"==typeof e&&!!e.match(b)}},w="enum",F={required:v,whitespace:function(e,r,t,n,i){(/^\s+$/.test(r)||""===r)&&n.push(f(i.messages.whitespace,e.fullField))},type:function(e,r,t,n,i){if(e.required&&void 0===r)v(e,r,t,n,i);else{var a=e.type;["integer","float","array","regexp","object","method","email","number","date","url","hex"].indexOf(a)>-1?q[a](r)||n.push(f(i.messages.types[a],e.fullField,e.type)):a&&typeof r!==e.type&&n.push(f(i.messages.types[a],e.fullField,e.type))}},range:function(e,r,t,n,i){var a="number"==typeof e.len,u="number"==typeof e.min,s="number"==typeof e.max,o=r,l=null,c="number"==typeof r,d="string"==typeof r,p=Array.isArray(r);if(c?l="number":d?l="string":p&&(l="array"),!l)return!1;p&&(o=r.length),d&&(o=r.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,"_").length),a?o!==e.len&&n.push(f(i.messages[l].len,e.fullField,e.len)):u&&!s&&o<e.min?n.push(f(i.messages[l].min,e.fullField,e.min)):s&&!u&&o>e.max?n.push(f(i.messages[l].max,e.fullField,e.max)):u&&s&&(o<e.min||o>e.max)&&n.push(f(i.messages[l].range,e.fullField,e.min,e.max))},enum:function(e,r,t,n,i){e[w]=Array.isArray(e[w])?e[w]:[],-1===e[w].indexOf(r)&&n.push(f(i.messages[w],e.fullField,e[w].join(", ")))},pattern:function(e,r,t,n,i){e.pattern&&(e.pattern instanceof RegExp?(e.pattern.lastIndex=0,e.pattern.test(r)||n.push(f(i.messages.pattern.mismatch,e.fullField,r,e.pattern))):"string"==typeof e.pattern&&(new RegExp(e.pattern).test(r)||n.push(f(i.messages.pattern.mismatch,e.fullField,r,e.pattern))))}},O=function(e,r,t,n,i){var a=e.type,u=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r,a)&&!e.required)return t();F.required(e,r,n,u,i,a),l(r,a)||F.type(e,r,n,u,i)}t(u)},x={string:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r,"string")&&!e.required)return t();F.required(e,r,n,a,i,"string"),l(r,"string")||(F.type(e,r,n,a,i),F.range(e,r,n,a,i),F.pattern(e,r,n,a,i),!0===e.whitespace&&F.whitespace(e,r,n,a,i))}t(a)},method:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r)&&!e.required)return t();F.required(e,r,n,a,i),void 0!==r&&F.type(e,r,n,a,i)}t(a)},number:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(""===r&&(r=void 0),l(r)&&!e.required)return t();F.required(e,r,n,a,i),void 0!==r&&(F.type(e,r,n,a,i),F.range(e,r,n,a,i))}t(a)},boolean:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r)&&!e.required)return t();F.required(e,r,n,a,i),void 0!==r&&F.type(e,r,n,a,i)}t(a)},regexp:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r)&&!e.required)return t();F.required(e,r,n,a,i),l(r)||F.type(e,r,n,a,i)}t(a)},integer:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r)&&!e.required)return t();F.required(e,r,n,a,i),void 0!==r&&(F.type(e,r,n,a,i),F.range(e,r,n,a,i))}t(a)},float:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r)&&!e.required)return t();F.required(e,r,n,a,i),void 0!==r&&(F.type(e,r,n,a,i),F.range(e,r,n,a,i))}t(a)},array:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(null==r&&!e.required)return t();F.required(e,r,n,a,i,"array"),null!=r&&(F.type(e,r,n,a,i),F.range(e,r,n,a,i))}t(a)},object:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r)&&!e.required)return t();F.required(e,r,n,a,i),void 0!==r&&F.type(e,r,n,a,i)}t(a)},enum:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r)&&!e.required)return t();F.required(e,r,n,a,i),void 0!==r&&F.enum(e,r,n,a,i)}t(a)},pattern:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r,"string")&&!e.required)return t();F.required(e,r,n,a,i),l(r,"string")||F.pattern(e,r,n,a,i)}t(a)},date:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r,"date")&&!e.required)return t();var u;F.required(e,r,n,a,i),l(r,"date")||(u=r instanceof Date?r:new Date(r),F.type(e,u,n,a,i),u&&F.range(e,u.getTime(),n,a,i))}t(a)},url:O,hex:O,email:O,required:function(e,r,t,n,i){var a=[],u=Array.isArray(r)?"array":typeof r;F.required(e,r,n,a,i,u),t(a)},any:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r)&&!e.required)return t();F.required(e,r,n,a,i)}t(a)}};function j(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var E=j(),A=e("S",function(){function e(e){this.rules=null,this._messages=E,this.define(e)}var t=e.prototype;return t.define=function(e){var r=this;if(!e)throw new Error("Cannot configure a schema with no rules");if("object"!=typeof e||Array.isArray(e))throw new Error("Rules must be an object");this.rules={},Object.keys(e).forEach((function(t){var n=e[t];r.rules[t]=Array.isArray(n)?n:[n]}))},t.messages=function(e){return e&&(this._messages=g(j(),e)),this._messages},t.validate=function(t,n,i){var a=this;void 0===n&&(n={}),void 0===i&&(i=function(){});var u=t,s=n,l=i;if("function"==typeof s&&(l=s,s={}),!this.rules||0===Object.keys(this.rules).length)return l&&l(null,u),Promise.resolve(u);if(s.messages){var c=this.messages();c===E&&(c=j()),g(c,s.messages),s.messages=c}else s.messages=this.messages();var d={};(s.keys||Object.keys(this.rules)).forEach((function(e){var n=a.rules[e],i=u[e];n.forEach((function(n){var s=n;"function"==typeof s.transform&&(u===t&&(u=r({},u)),i=u[e]=s.transform(i)),(s="function"==typeof s?{validator:s}:r({},s)).validator=a.getValidationMethod(s),s.validator&&(s.field=e,s.fullField=s.fullField||e,s.type=a.getType(s),d[e]=d[e]||[],d[e].push({rule:s,value:i,source:u,field:e}))}))}));var h={};return p(d,s,(function(t,n){var i,a=t.rule,o=!("object"!==a.type&&"array"!==a.type||"object"!=typeof a.fields&&"object"!=typeof a.defaultField);function l(e,t){return r({},t,{fullField:a.fullField+"."+e,fullFields:a.fullFields?[].concat(a.fullFields,[e]):[e]})}function c(i){void 0===i&&(i=[]);var c=Array.isArray(i)?i:[i];!s.suppressWarning&&c.length&&e.warning("async-validator:",c),c.length&&void 0!==a.message&&(c=[].concat(a.message));var d=c.map(y(a,u));if(s.first&&d.length)return h[a.field]=1,n(d);if(o){if(a.required&&!t.value)return void 0!==a.message?d=[].concat(a.message).map(y(a,u)):s.error&&(d=[s.error(a,f(s.messages.required,a.field))]),n(d);var p={};a.defaultField&&Object.keys(t.value).map((function(e){p[e]=a.defaultField})),p=r({},p,t.rule.fields);var g={};Object.keys(p).forEach((function(e){var r=p[e],t=Array.isArray(r)?r:[r];g[e]=t.map(l.bind(null,e))}));var v=new e(g);v.messages(s.messages),t.rule.options&&(t.rule.options.messages=s.messages,t.rule.options.error=s.error),v.validate(t.value,t.rule.options||s,(function(e){var r=[];d&&d.length&&r.push.apply(r,d),e&&e.length&&r.push.apply(r,e),n(r.length?r:null)}))}else n(d)}if(o=o&&(a.required||!a.required&&t.value),a.field=t.field,a.asyncValidator)i=a.asyncValidator(a,t.value,c,t.source,s);else if(a.validator){try{i=a.validator(a,t.value,c,t.source,s)}catch(d){null==console.error||console.error(d),s.suppressValidatorError||setTimeout((function(){throw d}),0),c(d.message)}!0===i?c():!1===i?c("function"==typeof a.message?a.message(a.fullField||a.field):a.message||(a.fullField||a.field)+" fails"):i instanceof Array?c(i):i instanceof Error&&c(i.message)}i&&i.then&&i.then((function(){return c()}),(function(e){return c(e)}))}),(function(e){!function(e){for(var r,t,n=[],i={},a=0;a<e.length;a++)r=e[a],t=void 0,Array.isArray(r)?n=(t=n).concat.apply(t,r):n.push(r);n.length?(i=o(n),l(n,i)):l(null,u)}(e)}),u)},t.getType=function(e){if(void 0===e.type&&e.pattern instanceof RegExp&&(e.type="pattern"),"function"!=typeof e.validator&&e.type&&!x.hasOwnProperty(e.type))throw new Error(f("Unknown rule type %s",e.type));return e.type||"string"},t.getValidationMethod=function(e){if("function"==typeof e.validator)return e.validator;var r=Object.keys(e),t=r.indexOf("message");return-1!==t&&r.splice(t,1),1===r.length&&"required"===r[0]?x.required:x[this.getType(e)]||void 0},e}());A.register=function(e,r){if("function"!=typeof r)throw new Error("Cannot register a validator by type, validator is not a function");x[e]=r},A.warning=s,A.messages=E,A.validators=x}}}));
//# sourceMappingURL=async-validator-legacy.js.map
