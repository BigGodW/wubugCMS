System.register(["./element-plus-legacy.js","./vue-router-legacy.js","./message-legacy.js","./index-legacy.js","./@vue-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./dayjs-legacy.js","./@element-plus-legacy.js","./@popperjs-legacy.js","./@ctrl-legacy.js","./memoize-one-legacy.js","./normalize-wheel-es-legacy.js","./pinia-legacy.js","./pinia-plugin-persist-legacy.js","./vanilla-jsoneditor-legacy.js","./json-source-map-legacy.js","./@jsonquerylang-legacy.js","./@fortawesome-legacy.js","./natural-compare-lite-legacy.js","./@codemirror-legacy.js","./@lezer-legacy.js","./crelt-legacy.js","./style-mod-legacy.js","./w3c-keyname-legacy.js","./@replit-legacy.js","./codemirror-wrapped-line-indent-legacy.js","./fast-deep-equal-legacy.js","./fast-uri-legacy.js","./jmespath-legacy.js","./jsonpath-plus-legacy.js","./immutable-json-patch-legacy.js","./jsonrepair-legacy.js","./axios-legacy.js","./js-cookie-legacy.js","./nprogress-legacy.js","./saduocss-legacy.js"],(function(e,l){"use strict";var a,u,s,t,n,r,o,c,d,g,m,y,p,i,j,b,f,V,v,_;return{setters:[e=>{a=e.E,u=e.I,s=e.J,t=e.t,n=e.s,r=e.f,o=e.r},e=>{c=e.u},e=>{d=e.c},e=>{g=e._},e=>{m=e.r,y=e.I,p=e.o,i=e.c,j=e.M,b=e.Q,f=e.O,V=e.a8,v=e.R,_=e.U},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var l=document.createElement("style");l.textContent="/*$vite$:1*/",document.head.appendChild(l);const h={class:"bg-fff pd-20 radius-6"};e("default",g({__name:"add",setup(e){const l=m(null),g=y([{label:"咨询",value:"1"},{label:"建议",value:"2"},{label:"投诉",value:"3"},{label:"其他",value:"4"}]),w=y({type:"",title:"",name:"",tel:"",company:"",wechat:"",content:""}),q=y({name:[{required:!0,message:"请输入标签名称",trigger:"blur"},{min:2,max:20,message:"名称长度在 2 到 20 个字符之间",trigger:"blur"}]}),U=c(),x=()=>{l.value.validate((async e=>{if(!e)return console.log("error submit!!"),!1;await k()}))},k=async()=>{try{const e=await d(w);200===e.code?(a({message:"新增成功^_^",type:"success"}),U.go(-1)):a({message:e.msg,type:"error"})}catch(e){console.log(e)}};return(e,a)=>{const c=u,d=s,m=t,y=n,U=r,k=o;return p(),i("div",h,[j(k,{ref_key:"formRef",ref:l,model:w,"label-width":"84px",class:"mt-20",rules:q},{default:b((()=>[j(m,{label:"留言类型",prop:"type",rules:[{required:!0,message:"请选择类型",trigger:"blur"}]},{default:b((()=>[j(d,{modelValue:w.type,"onUpdate:modelValue":a[0]||(a[0]=e=>w.type=e),placeholder:"请选择类型"},{default:b((()=>[(p(!0),i(f,null,V(g,(e=>(p(),v(c,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),j(m,{label:"留言标题",prop:"title",rules:[{required:!0,message:"请输入标题",trigger:"blur"}]},{default:b((()=>[j(y,{modelValue:w.title,"onUpdate:modelValue":a[1]||(a[1]=e=>w.title=e)},null,8,["modelValue"])])),_:1}),j(m,{label:"姓名",prop:"name",rules:[{required:!0,message:"请输入内容",trigger:"blur"}]},{default:b((()=>[j(y,{modelValue:w.name,"onUpdate:modelValue":a[2]||(a[2]=e=>w.name=e)},null,8,["modelValue"])])),_:1}),j(m,{label:"手机号",prop:"tel",rules:[{required:!0,message:"请输入内容",trigger:"blur"}]},{default:b((()=>[j(y,{modelValue:w.tel,"onUpdate:modelValue":a[3]||(a[3]=e=>w.tel=e)},null,8,["modelValue"])])),_:1}),j(m,{label:"公司单位"},{default:b((()=>[j(y,{modelValue:w.company,"onUpdate:modelValue":a[4]||(a[4]=e=>w.company=e)},null,8,["modelValue"])])),_:1}),j(m,{label:"微信"},{default:b((()=>[j(y,{modelValue:w.wechat,"onUpdate:modelValue":a[5]||(a[5]=e=>w.wechat=e)},null,8,["modelValue"])])),_:1}),j(m,{label:"留言内容",prop:"content",rules:[{required:!0,message:"请输入内容",trigger:"blur"}]},{default:b((()=>[j(y,{type:"textarea",rows:3,placeholder:"请输入内容",modelValue:w.content,"onUpdate:modelValue":a[6]||(a[6]=e=>w.content=e)},null,8,["modelValue"])])),_:1}),j(m,null,{default:b((()=>[j(U,{type:"primary",onClick:x},{default:b((()=>a[7]||(a[7]=[_("保存")]))),_:1})])),_:1})])),_:1},8,["model","rules"])])}}},[["__scopeId","data-v-6b976317"]]))}}}));
