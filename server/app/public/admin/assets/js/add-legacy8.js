System.register(["./element-plus-legacy.js","./model-legacy.js","./index-legacy.js","./@vue-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./@vueuse-legacy.js","./dayjs-legacy.js","./@element-plus-legacy.js","./@ctrl-legacy.js","./@popperjs-legacy.js","./memoize-one-legacy.js","./escape-html-legacy.js","./normalize-wheel-es-legacy.js","./pinia-legacy.js","./pinia-plugin-persist-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./js-cookie-legacy.js","./saduocss-legacy.js"],(function(e,l){"use strict";var a,s,t,m,u,r,n,o,d,c,g,i;return{setters:[e=>{a=e.q,s=e.r,t=e.v,m=e.f,u=e.p},e=>{r=e.c},e=>{n=e._},e=>{o=e.o,d=e.c,c=e.U,g=e.W,i=e._},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const l={class:"mr-10 ml-10 mb-20"};e("default",n({name:"model-add",components:{},data:()=>({params:{model_name:"",table_name:"",status:"1"},paramsRules:{model_name:[{required:!0,message:"模型名称",trigger:"blur"},{min:2,max:80,message:"名称长度在 2 到 80 个字符之间",trigger:"blur"}],table_name:[{required:!0,message:"新增表名",trigger:"blur"},{min:2,max:80,message:"名称长度在 2 到 80 个字符之间",trigger:"blur"}]}}),computed:{},mounted(){},created(){},methods:{handleAttr(e){console.log("e--\x3e",e)},change(e){console.log(e),this.params.table_name=e},async create(){try{let e={...this.params},l=await r(e);200==l.code?(this.$message({message:"更新成功^_^",type:"success"}),this.$router.go(-1)):this.$message({message:l.msg||l.error.sqlMessage,type:"fail"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.create()}))}}},[["render",function(e,r,n,p,y,j){const _=a,b=s,f=t,h=m,V=u;return o(),d("div",l,[c(V,{ref:"params",model:e.params,rules:e.paramsRules,"label-width":"100px",class:"mt-20"},{default:g((()=>[c(b,{label:"模型名称",prop:"model_name"},{default:g((()=>[c(_,{modelValue:e.params.model_name,"onUpdate:modelValue":r[0]||(r[0]=l=>e.params.model_name=l),onInput:j.change},null,8,["modelValue","onInput"])])),_:1}),c(b,{label:"新增表名",prop:"table_name"},{default:g((()=>[c(_,{modelValue:e.params.table_name,"onUpdate:modelValue":r[1]||(r[1]=l=>e.params.table_name=l),disabled:""},null,8,["modelValue"])])),_:1}),c(b,{label:"是否启用"},{default:g((()=>[c(f,{modelValue:e.params.status,"onUpdate:modelValue":r[2]||(r[2]=l=>e.params.status=l),label:"1"},{default:g((()=>[i("开启")])),_:1},8,["modelValue"]),c(f,{modelValue:e.params.status,"onUpdate:modelValue":r[3]||(r[3]=l=>e.params.status=l),label:"0"},{default:g((()=>[i("禁用")])),_:1},8,["modelValue"])])),_:1}),c(b,null,{default:g((()=>[c(h,{type:"primary",onClick:r[4]||(r[4]=e=>j.submit("params"))},{default:g((()=>[i("保存")])),_:1})])),_:1})])),_:1},8,["model","rules"])])}]]))}}}));
