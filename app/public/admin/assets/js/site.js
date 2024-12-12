import{E as _,s as E,t as U,f as C,r as I,m as $,n as N}from"./element-plus.js";import{s as R,u as T}from"./site2.js";import j from"./config.js";import q from"./qiniu.js";import B from"./wechat.js";import{_ as M}from"./index.js";import{r as c,I as k,j as O,o as F,c as P,M as o,Q as l,U as v}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./dayjs.js";import"./@element-plus.js";import"./@popperjs.js";import"./@ctrl.js";import"./memoize-one.js";import"./normalize-wheel-es.js";import"./sys_config.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vanilla-jsoneditor.js";import"./json-source-map.js";import"./@jsonquerylang.js";import"./@fortawesome.js";import"./natural-compare-lite.js";import"./@codemirror.js";import"./@lezer.js";import"./crelt.js";import"./style-mod.js";import"./w3c-keyname.js";import"./@replit.js";import"./codemirror-wrapped-line-indent.js";import"./fast-deep-equal.js";import"./fast-uri.js";import"./jmespath.js";import"./jsonpath-plus.js";import"./immutable-json-patch.js";import"./jsonrepair.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";import"./nprogress.js";/* empty css        */const D={class:"bg-fff radius-6 pd-20"},Q={__name:"site",setup(S){const n=c("first"),g=c(null),b=c(null),a=k({id:"",name:"",domain:"",email:"",icp:"",code:""}),s=k({id:"",title:"",keywords:"",description:""});async function V(){try{const r=await R();if(r.code===200){const{id:e,name:i,domain:m,email:p,icp:d,title:u,keywords:f,description:t}=r.data;Object.assign(a,{id:e,name:i,domain:m,email:p,icp:d}),Object.assign(s,{id:e,title:u,keywords:f,description:t})}else _({message:r.msg,type:"warning"})}catch(r){console.error(r)}}async function y(r){try{const e=await T(r);e.code===200?(_({message:"更新成功^_^",type:"success"}),await V()):_({message:e.msg,type:"warning"})}catch(e){console.error(e)}}function x(r){n.value=r.paneName}function w(r){r.validate(async e=>{e?n.value==="first"?await y(a):await y(s):console.log("error submit!!")})}return O(V),(r,e)=>{const i=E,m=U,p=C,d=I,u=$,f=N;return F(),P("div",D,[o(f,{modelValue:n.value,"onUpdate:modelValue":e[10]||(e[10]=t=>n.value=t),onTabClick:x},{default:l(()=>[o(u,{label:"基本设置",class:"mt-20",name:"first"},{default:l(()=>[o(d,{ref_key:"infoRef",ref:g,model:a,"label-width":"84px"},{default:l(()=>[o(m,{label:"网站名称",prop:"name",rules:[{required:!0,message:"请输入网站名称",trigger:"blur"},{min:2,max:20,message:"长度在 2 到 20 个字符",trigger:"blur"}]},{default:l(()=>[o(i,{modelValue:a.name,"onUpdate:modelValue":e[0]||(e[0]=t=>a.name=t)},null,8,["modelValue"])]),_:1}),o(m,{prop:"domain",label:"网站域名"},{default:l(()=>[o(i,{modelValue:a.domain,"onUpdate:modelValue":e[1]||(e[1]=t=>a.domain=t)},null,8,["modelValue"])]),_:1}),o(m,{prop:"email",label:"站长邮箱"},{default:l(()=>[o(i,{modelValue:a.email,"onUpdate:modelValue":e[2]||(e[2]=t=>a.email=t),rules:[{type:"email",message:"请输入正确的邮箱",trigger:["blur","change"]}]},null,8,["modelValue"])]),_:1}),o(m,{prop:"icp",label:"ICP备案号"},{default:l(()=>[o(i,{modelValue:a.icp,"onUpdate:modelValue":e[3]||(e[3]=t=>a.icp=t)},null,8,["modelValue"])]),_:1}),o(m,{prop:"code",label:"统计代码"},{default:l(()=>[o(i,{type:"textarea",rows:3,modelValue:a.code,"onUpdate:modelValue":e[4]||(e[4]=t=>a.code=t)},null,8,["modelValue"])]),_:1}),o(m,null,{default:l(()=>[o(p,{type:"primary",onClick:e[5]||(e[5]=t=>w(g.value))},{default:l(()=>e[11]||(e[11]=[v("保存")])),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),o(u,{label:"SEO设置",class:"mt-20",name:"second"},{default:l(()=>[o(d,{ref_key:"seoRef",ref:b,model:s,"label-width":"84px"},{default:l(()=>[o(m,{label:"标题",prop:"title",rules:[{required:!0,message:"请输入网站标题",trigger:"blur"},{min:2,max:20,message:"长度在 2 到 20 个字符",trigger:"blur"}]},{default:l(()=>[o(i,{modelValue:s.title,"onUpdate:modelValue":e[6]||(e[6]=t=>s.title=t)},null,8,["modelValue"])]),_:1}),o(m,{prop:"keywords",label:"关键词"},{default:l(()=>[o(i,{modelValue:s.keywords,"onUpdate:modelValue":e[7]||(e[7]=t=>s.keywords=t)},null,8,["modelValue"])]),_:1}),o(m,{prop:"description",label:"描述",rules:[{min:2,max:255,message:"字数限制255",trigger:"blur"}]},{default:l(()=>[o(i,{type:"textarea",rows:3,modelValue:s.description,"onUpdate:modelValue":e[8]||(e[8]=t=>s.description=t)},null,8,["modelValue"])]),_:1}),o(m,null,{default:l(()=>[o(p,{type:"primary",onClick:e[9]||(e[9]=t=>w(b.value))},{default:l(()=>e[12]||(e[12]=[v("保存")])),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),o(j),o(q),o(B)]),_:1},8,["modelValue"])])}}},Ne=M(Q,[["__scopeId","data-v-08d0b7c8"]]);export{Ne as default};
