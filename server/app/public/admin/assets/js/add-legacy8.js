System.register(["./element-plus-legacy.js","./message-legacy.js","./index-legacy.js","./@vue-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./@vueuse-legacy.js","./dayjs-legacy.js","./@element-plus-legacy.js","./@ctrl-legacy.js","./@popperjs-legacy.js","./memoize-one-legacy.js","./escape-html-legacy.js","./normalize-wheel-es-legacy.js","./pinia-legacy.js","./pinia-plugin-persist-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./saduocss-legacy.js"],(function(e,l){"use strict";var a,s,t,u,n,r,m,o,c,d,p,i;return{setters:[e=>{a=e.o,s=e.p,t=e.q,u=e.y,n=e.f},e=>{r=e.c},e=>{m=e._},e=>{o=e.o,c=e.c,d=e.T,p=e.V,i=e.Z},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const l={class:"mr-10 ml-10 mb-20"};e("default",m({name:"message-add",data:()=>({params:{name:"",tel:"",wx:0,content:"",createdAt:new Date},paramsRules:{name:[{required:!0,message:"请输入标签名称",trigger:"blur"},{min:2,max:20,message:"名称长度在 2 到 20 个字符之间",trigger:"blur"}]}}),computed:{},mounted(){},async created(){},methods:{handleAttr(e){console.log("e--\x3e",e)},handleSubCid(e){console.log("e--\x3e",e)},async create(){try{(await r(this.params)).code&&(this.$message({message:"新增成功^_^",type:"success"}),this.$router.go(-1))}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.create()}))}}},[["render",function(e,r,m,g,y,j){const f=s,V=t,h=u,b=n,x=a;return o(),c("div",l,[d(x,{ref:"params",model:e.params,rules:e.paramsRules,"label-width":"84px",class:""},{default:p((()=>[d(V,{label:"留言标题",prop:"name"},{default:p((()=>[d(f,{modelValue:e.params.name,"onUpdate:modelValue":r[0]||(r[0]=l=>e.params.name=l)},null,8,["modelValue"])])),_:1}),d(V,{label:"手机号"},{default:p((()=>[d(f,{modelValue:e.params.tel,"onUpdate:modelValue":r[1]||(r[1]=l=>e.params.tel=l)},null,8,["modelValue"])])),_:1}),d(V,{label:"微信"},{default:p((()=>[d(f,{modelValue:e.params.wx,"onUpdate:modelValue":r[2]||(r[2]=l=>e.params.wx=l)},null,8,["modelValue"])])),_:1}),d(V,{label:"留言内容"},{default:p((()=>[d(f,{type:"textarea",rows:3,placeholder:"请输入内容",modelValue:e.params.content,"onUpdate:modelValue":r[3]||(r[3]=l=>e.params.content=l)},null,8,["modelValue"])])),_:1}),d(V,{label:"发布时间"},{default:p((()=>[d(h,{modelValue:e.params.createdAt,"onUpdate:modelValue":r[4]||(r[4]=l=>e.params.createdAt=l),type:"datetime",placeholder:"选择日期时间"},null,8,["modelValue"])])),_:1}),d(V,null,{default:p((()=>[d(b,{type:"primary",onClick:r[5]||(r[5]=e=>j.submit("params"))},{default:p((()=>[i("保存")])),_:1})])),_:1})])),_:1},8,["model","rules"])])}]]))}}}));
//# sourceMappingURL=add-legacy8.js.map
