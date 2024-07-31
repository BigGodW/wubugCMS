System.register(["./element-plus-legacy.js","./model-legacy.js","./@qiun-legacy.js","./@vue-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./@vueuse-legacy.js","./dayjs-legacy.js","./@element-plus-legacy.js","./@ctrl-legacy.js","./@popperjs-legacy.js","./memoize-one-legacy.js","./normalize-wheel-es-legacy.js","./index-legacy.js","./pinia-legacy.js","./pinia-plugin-persist-legacy.js","./vanilla-jsoneditor-legacy.js","./json-source-map-legacy.js","./@fortawesome-legacy.js","./natural-compare-lite-legacy.js","./@codemirror-legacy.js","./@lezer-legacy.js","./crelt-legacy.js","./style-mod-legacy.js","./w3c-keyname-legacy.js","./@replit-legacy.js","./codemirror-wrapped-line-indent-legacy.js","./fast-deep-equal-legacy.js","./fast-uri-legacy.js","./jmespath-legacy.js","./immutable-json-patch-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./js-cookie-legacy.js","./saduocss-legacy.js"],(function(e,l){"use strict";var a,s,t,u,n,m,o,r,d,c,i,g,p,y;return{setters:[e=>{a=e.q,s=e.r,t=e.G,u=e.f,n=e.p},e=>{m=e.d,o=e.h,r=e.u},e=>{d=e._},e=>{c=e.o,i=e.c,g=e.g,p=e._,y=e.a0},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const l={class:"mr-10 ml-10 mb-20 pd-20 content-wrap"};e("default",d({name:"model-edit",data:()=>({params:{id:0,old_table_name:"",model_name:"",table_name:"",status:"1"},disable:!1,paramsRules:{model_name:[{required:!0,message:"模型名称",trigger:"blur"},{min:2,max:80,message:"名称长度在 2 到 80 个字符之间",trigger:"blur"}],table_name:[{required:!0,message:"新增表名",trigger:"blur"},{min:2,max:80,message:"名称长度在 2 到 80 个字符之间",trigger:"blur"}]}}),computed:{},async mounted(){},async created(){let e=this.$route.params.id;this.params.id=e,await this.detail(),await this.hasUse(e)},methods:{async detail(){try{let e=await m(this.params.id);if(200===e.code){let l=e.data;this.params={...l,old_table_name:l.table_name}}else this.$message({message:e.msg,type:"success"})}catch(e){console.error(e)}},handleAttr(e){console.log("e--\x3e",e)},handleSubCid(e){console.log("e--\x3e",e)},handletag(e){console.log("e--\x3e",e)},handleBox(e){console.log("e--\x3e",e)},async hasUse(e){try{let l=await o(e);200==l.code?l.data.count?this.disable=!0:this.disable=!1:this.$message({message:l.msg,type:"success"})}catch(l){console.log(l)}},async update(){try{let e=await r(this.params);200==e.code?this.$message({message:"更新成功^_^",type:"success"}):this.$message({message:e.msg,type:"success"}),this.$router.go(-1)}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.update()}))}}},[["render",function(e,m,o,r,d,j){const h=a,b=s,_=t,f=u,V=n;return c(),i("div",l,[g(V,{ref:"params",model:e.params,rules:e.paramsRules,"label-width":"100px",class:"mt-20"},{default:p((()=>[g(b,{label:"模型名称",prop:"model_name"},{default:p((()=>[g(h,{modelValue:e.params.model_name,"onUpdate:modelValue":m[0]||(m[0]=l=>e.params.model_name=l)},null,8,["modelValue"])])),_:1}),g(b,{label:"新增表名",prop:"table_name"},{default:p((()=>[g(h,{modelValue:e.params.table_name,"onUpdate:modelValue":m[1]||(m[1]=l=>e.params.table_name=l),disabled:e.disable},null,8,["modelValue","disabled"])])),_:1}),g(b,{label:"是否启用"},{default:p((()=>[g(_,{modelValue:e.params.status,"onUpdate:modelValue":m[2]||(m[2]=l=>e.params.status=l),value:"1"},{default:p((()=>[y("开启")])),_:1},8,["modelValue"]),g(_,{modelValue:e.params.status,"onUpdate:modelValue":m[3]||(m[3]=l=>e.params.status=l),disabled:e.disable,value:"0"},{default:p((()=>[y("禁用")])),_:1},8,["modelValue","disabled"])])),_:1}),g(b,null,{default:p((()=>[g(f,{type:"primary",onClick:m[4]||(m[4]=e=>j.submit("params"))},{default:p((()=>[y("保存")])),_:1})])),_:1})])),_:1},8,["model","rules"])])}]]))}}}));
