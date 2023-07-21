System.register(["./element-plus-legacy.js","./message-legacy.js","./index-legacy.js","./@vue-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./@vueuse-legacy.js","./dayjs-legacy.js","./@element-plus-legacy.js","./@ctrl-legacy.js","./@popperjs-legacy.js","./memoize-one-legacy.js","./escape-html-legacy.js","./normalize-wheel-es-legacy.js","./pinia-legacy.js","./pinia-plugin-persist-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./js-cookie-legacy.js","./saduocss-legacy.js"],(function(e,a){"use strict";var l,s,t,r,u,n,m,o,d,c,i,p,g;return{setters:[e=>{l=e.p,s=e.q,t=e.r,r=e.A,u=e.f},e=>{n=e.d,m=e.u},e=>{o=e._},e=>{d=e.o,c=e.c,i=e.T,p=e.V,g=e.Z},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const a={class:"mr-10 ml-10 mb-20"};e("default",o({name:"message-edit",data:()=>({params:{id:0,name:"",tel:"",wx:0,content:"",createdAt:new Date},paramsRules:{name:[{required:!0,message:"请输入栏目名称",trigger:"blur"},{min:2,max:50,message:"名称长度在 2 到 50 个字符之间",trigger:"blur"}]}}),computed:{},mounted(){},async created(){this.params.id=this.$route.params.id,await this.detail()},methods:{async detail(){try{let e=await n(this.params.id);200===e.code&&(this.params=e.data,this.params.createdAt=new Date(this.params.createdAt))}catch(e){console.error(e)}},handleAttr(e){console.log("e--\x3e",e)},handleSubCid(e){console.log("e--\x3e",e)},async update(){try{(await m(this.params)).code&&(this.$message({message:"更新成功^_^",type:"success"}),this.$router.go(-1))}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.update()}))}}},[["render",function(e,n,m,o,y,h){const j=s,f=t,V=r,b=u,w=l;return d(),c("div",a,[i(w,{ref:"params",model:e.params,rules:e.paramsRules,"label-width":"84px",class:"mt-20"},{default:p((()=>[i(f,{label:"留言标题",prop:"name"},{default:p((()=>[i(j,{modelValue:e.params.name,"onUpdate:modelValue":n[0]||(n[0]=a=>e.params.name=a)},null,8,["modelValue"])])),_:1}),i(f,{label:"手机号"},{default:p((()=>[i(j,{modelValue:e.params.tel,"onUpdate:modelValue":n[1]||(n[1]=a=>e.params.tel=a)},null,8,["modelValue"])])),_:1}),i(f,{label:"微信"},{default:p((()=>[i(j,{modelValue:e.params.wx,"onUpdate:modelValue":n[2]||(n[2]=a=>e.params.wx=a)},null,8,["modelValue"])])),_:1}),i(f,{label:"留言内容"},{default:p((()=>[i(j,{type:"textarea",rows:3,placeholder:"请输入内容",modelValue:e.params.content,"onUpdate:modelValue":n[3]||(n[3]=a=>e.params.content=a)},null,8,["modelValue"])])),_:1}),i(f,{label:"发布时间"},{default:p((()=>[i(V,{modelValue:e.params.createdAt,"onUpdate:modelValue":n[4]||(n[4]=a=>e.params.createdAt=a),type:"datetime",placeholder:"选择日期时间"},null,8,["modelValue"])])),_:1}),i(f,null,{default:p((()=>[i(b,{type:"primary",onClick:n[5]||(n[5]=e=>h.submit("params"))},{default:p((()=>[g("保存")])),_:1})])),_:1})])),_:1},8,["model","rules"])])}]]))}}}));
//# sourceMappingURL=edit-legacy8.js.map
