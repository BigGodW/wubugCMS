System.register(["./element-plus-legacy.js","./tag-legacy.js","./pinyin-pro-legacy.js","./index-legacy.js","./@vue-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./@vueuse-legacy.js","./dayjs-legacy.js","./@element-plus-legacy.js","./@ctrl-legacy.js","./@popperjs-legacy.js","./memoize-one-legacy.js","./escape-html-legacy.js","./normalize-wheel-es-legacy.js","./pinia-legacy.js","./pinia-plugin-persist-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./js-cookie-legacy.js","./saduocss-legacy.js"],(function(e,a){"use strict";var l,s,t,n,u,r,c,m,o,p,i,d,g;return{setters:[e=>{l=e.p,s=e.q,t=e.r,n=e.f},e=>{u=e.c,r=e.h},e=>{c=e.p},e=>{m=e._},e=>{o=e.o,p=e.c,i=e.T,d=e.V,g=e.Z},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const a={class:"mr-10 ml-10 mb-20"};e("default",m({name:"tag-add",components:{},data:()=>({params:{name:"",path:""},paramsRules:{name:[{required:!0,message:"请输入栏目名称",trigger:"blur"},{min:2,max:50,message:"名称长度在 2 到 50 个字符之间",trigger:"blur"}]}}),computed:{},async mounted(){},created(){},unmounted(){},watch:{"params.name":function(e,a){this.params.path=c(e,{toneType:"none"}).replace(/\s+/g,"")}},methods:{async create(){try{(await u(this.params)).code&&(this.$message({message:"新增成功^_^",type:"success"}),this.$router.go(-1))}catch(e){console.log(e)}},async has(){try{let e=await r(this.params.path);200===e.code&&(e.data?this.$message({message:"标签已存在，请不要再添加了",type:"success"}):this.create())}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.has()}))}}},[["render",function(e,u,r,c,m,y){const h=s,j=t,f=n,b=l;return o(),p("div",a,[i(b,{ref:"params",model:e.params,rules:e.paramsRules,"label-width":"84px",class:"mt-20"},{default:d((()=>[i(j,{label:"标签名称",prop:"name"},{default:d((()=>[i(h,{modelValue:e.params.name,"onUpdate:modelValue":u[0]||(u[0]=a=>e.params.name=a),placeholder:"请输入汉字"},null,8,["modelValue"])])),_:1}),i(j,{label:"标签标识"},{default:d((()=>[i(h,{modelValue:e.params.path,"onUpdate:modelValue":u[1]||(u[1]=a=>e.params.path=a),placeholder:"模板使用标识",disabled:""},null,8,["modelValue"])])),_:1}),i(j,null,{default:d((()=>[i(f,{type:"primary",onClick:u[2]||(u[2]=e=>y.submit("params"))},{default:d((()=>[g("保存")])),_:1})])),_:1})])),_:1},8,["model","rules"])])}]]))}}}));
//# sourceMappingURL=add-legacy10.js.map
