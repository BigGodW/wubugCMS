System.register(["./element-plus-legacy.js","./message-legacy.js","./@qiun-legacy.js","./@vue-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./@vueuse-legacy.js","./dayjs-legacy.js","./@element-plus-legacy.js","./@ctrl-legacy.js","./@popperjs-legacy.js","./memoize-one-legacy.js","./normalize-wheel-es-legacy.js","./index-legacy.js","./pinia-legacy.js","./pinia-plugin-persist-legacy.js","./vanilla-jsoneditor-legacy.js","./json-source-map-legacy.js","./@fortawesome-legacy.js","./natural-compare-lite-legacy.js","./@codemirror-legacy.js","./@lezer-legacy.js","./crelt-legacy.js","./style-mod-legacy.js","./w3c-keyname-legacy.js","./@replit-legacy.js","./codemirror-wrapped-line-indent-legacy.js","./fast-deep-equal-legacy.js","./fast-uri-legacy.js","./jmespath-legacy.js","./immutable-json-patch-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./js-cookie-legacy.js","./saduocss-legacy.js"],(function(e,l){"use strict";var a,s,n,u,t,r,c,o,m,g,d;return{setters:[e=>{a=e.q,s=e.r,n=e.f,u=e.p},e=>{t=e.c},e=>{r=e._},e=>{c=e.o,o=e.c,m=e.g,g=e._,d=e.a0},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const l={class:"mr-10 ml-10 mb-20 pd-20 content-wrap"};e("default",r({name:"message-add",data:()=>({params:{name:"",tel:"",company:"",content:""},paramsRules:{name:[{required:!0,message:"请输入标签名称",trigger:"blur"},{min:2,max:20,message:"名称长度在 2 到 20 个字符之间",trigger:"blur"}]}}),computed:{},mounted(){},async created(){},methods:{handleAttr(e){console.log("e--\x3e",e)},handleSubCid(e){console.log("e--\x3e",e)},async create(){try{let e=await t(this.params);200==e.code?(this.$message({message:"新增成功^_^",type:"success"}),this.$router.go(-1)):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.create()}))}}},[["render",function(e,t,r,i,p,y){const j=a,f=s,h=n,b=u;return c(),o("div",l,[m(b,{ref:"params",model:e.params,"label-width":"84px",class:"mt-20"},{default:g((()=>[m(f,{label:"姓名",rules:[{required:!0,message:"请输入姓名",trigger:"blur"}],prop:"name"},{default:g((()=>[m(j,{modelValue:e.params.name,"onUpdate:modelValue":t[0]||(t[0]=l=>e.params.name=l)},null,8,["modelValue"])])),_:1}),m(f,{label:"手机号"},{default:g((()=>[m(j,{modelValue:e.params.tel,"onUpdate:modelValue":t[1]||(t[1]=l=>e.params.tel=l)},null,8,["modelValue"])])),_:1}),m(f,{label:"公司名称"},{default:g((()=>[m(j,{modelValue:e.params.company,"onUpdate:modelValue":t[2]||(t[2]=l=>e.params.company=l)},null,8,["modelValue"])])),_:1}),m(f,{label:"留言内容",prop:"content",rules:[{required:!0,message:"请输入内容",trigger:"blur"}]},{default:g((()=>[m(j,{type:"textarea",rows:3,placeholder:"请输入内容",modelValue:e.params.content,"onUpdate:modelValue":t[3]||(t[3]=l=>e.params.content=l)},null,8,["modelValue"])])),_:1}),m(f,null,{default:g((()=>[m(h,{type:"primary",onClick:t[4]||(t[4]=e=>y.submit("params"))},{default:g((()=>[d("保存")])),_:1})])),_:1})])),_:1},8,["model"])])}]]))}}}));
