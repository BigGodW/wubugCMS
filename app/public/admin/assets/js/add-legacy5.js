System.register(["./element-plus-legacy.js","./vue-router-legacy.js","./frag-legacy.js","./tinymce-legacy.js","./pinyin-pro-legacy.js","./upload-legacy.js","./index-legacy.js","./@vue-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./dayjs-legacy.js","./@element-plus-legacy.js","./@popperjs-legacy.js","./@ctrl-legacy.js","./memoize-one-legacy.js","./normalize-wheel-es-legacy.js","./sys_config-legacy.js","./pinia-legacy.js","./pinia-plugin-persist-legacy.js","./vanilla-jsoneditor-legacy.js","./json-source-map-legacy.js","./@jsonquerylang-legacy.js","./@fortawesome-legacy.js","./natural-compare-lite-legacy.js","./@codemirror-legacy.js","./@lezer-legacy.js","./crelt-legacy.js","./style-mod-legacy.js","./w3c-keyname-legacy.js","./@replit-legacy.js","./codemirror-wrapped-line-indent-legacy.js","./fast-deep-equal-legacy.js","./fast-uri-legacy.js","./jmespath-legacy.js","./jsonpath-plus-legacy.js","./immutable-json-patch-legacy.js","./jsonrepair-legacy.js","./axios-legacy.js","./js-cookie-legacy.js","./nprogress-legacy.js","./saduocss-legacy.js"],(function(e,l){"use strict";var a,n,s,t,u,c,o,r,y,d,m,g,p,i,j,f,_,v,V,b,h,k,x,w,U,C,q,z;return{setters:[e=>{a=e.s,n=e.t,s=e.H,t=e.K,u=e.f,c=e.r,o=e.M,r=e.E},e=>{y=e.u},e=>{d=e.c},e=>{m=e.t,g=e._},e=>{p=e.p},e=>{i=e.u},e=>{j=e._},e=>{f=e.r,_=e.I,v=e.w,V=e.j,b=e.o,h=e.c,k=e._,x=e.R,w=e.Q,U=e.a,C=e.M,q=e.U,z=e.W},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var l=document.createElement("style");l.textContent="[data-v-d0ac4100] .tiny-textarea{height:436px}\n/*$vite$:1*/",document.head.appendChild(l);const I={class:"bg-fff pd-20 radius-6"};e("default",j({__name:"add",setup(e){const l=y(),j=f(null),M=_(m),E=f(!0),R=_({type:1,name:"",mark:"",content:"欢迎使用ChanCMS系统"}),S=_({name:[{required:!0,message:"请输入栏目名称",trigger:"blur"},{min:2,max:50,message:"名称长度在 2 到 50 个字符之间",trigger:"blur"}]});v((()=>R.name),(e=>{R.mark=p(e,{toneType:"none"}).replace(/\s+/g,"")})),V((async()=>{M.images_upload_url=await i(),E.value=!1}));const $=()=>{E.value=!1},H=()=>{j.value.validate((e=>{if(!e)return console.log("error submit!!"),!1;(async()=>{try{const e=await d(R);200===e.code?(r({message:"新增成功^_^",type:"success"}),l.go(-1)):r({message:e.msg,type:"error"})}catch(e){console.log(e)}})()}))};return(e,l)=>{const r=a,y=n,d=s,m=t,p=u,i=c,f=o;return b(),h("div",I,[k((b(),x(i,{ref_key:"formRef",ref:j,model:R,rules:S,"label-width":"84px",class:"mt-20"},{default:w((()=>[U("div",null,[C(y,{label:"碎片名称",prop:"name"},{default:w((()=>[C(r,{modelValue:R.name,"onUpdate:modelValue":l[0]||(l[0]=e=>R.name=e),placeholder:"请输入汉字"},null,8,["modelValue"])])),_:1}),C(y,{label:"碎片标识",prop:"mark"},{default:w((()=>[C(r,{modelValue:R.mark,"onUpdate:modelValue":l[1]||(l[1]=e=>R.mark=e),placeholder:"模板使用标识"},null,8,["modelValue"])])),_:1}),C(y,{label:"碎片类型",prop:"type"},{default:w((()=>[C(m,{modelValue:R.type,"onUpdate:modelValue":l[2]||(l[2]=e=>R.type=e),class:"ml-4"},{default:w((()=>[C(d,{label:1},{default:w((()=>l[5]||(l[5]=[q("富文本")]))),_:1}),C(d,{label:2},{default:w((()=>l[6]||(l[6]=[q("文本框")]))),_:1})])),_:1},8,["modelValue"])])),_:1}),1===R.type?(b(),x(y,{key:0,label:"碎片内容"},{default:w((()=>[C(g,{modelValue:R.content,"onUpdate:modelValue":l[3]||(l[3]=e=>R.content=e),setting:M,onInit:$,"script-src":"/public/admin/tinymce/tinymce.min.js"},null,8,["modelValue","setting"])])),_:1})):z("",!0),2===R.type?(b(),x(y,{key:1,label:"碎片内容"},{default:w((()=>[C(r,{type:"textarea",prop:"textarea",class:"textarea",rows:3,modelValue:R.content,"onUpdate:modelValue":l[4]||(l[4]=e=>R.content=e)},null,8,["modelValue"])])),_:1})):z("",!0)]),C(y,null,{default:w((()=>[C(p,{type:"primary",onClick:H},{default:w((()=>l[7]||(l[7]=[q("保存")]))),_:1})])),_:1})])),_:1},8,["model","rules"])),[[f,E.value]])])}}},[["__scopeId","data-v-d0ac4100"]]))}}}));
