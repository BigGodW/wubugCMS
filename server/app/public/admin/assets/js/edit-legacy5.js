System.register(["./element-plus-legacy.js","./frag-legacy.js","./tinymce-legacy.js","./upload-legacy.js","./@qiun-legacy.js","./@vue-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./@vueuse-legacy.js","./dayjs-legacy.js","./@element-plus-legacy.js","./@ctrl-legacy.js","./@popperjs-legacy.js","./memoize-one-legacy.js","./normalize-wheel-es-legacy.js","./index-legacy.js","./pinia-legacy.js","./pinia-plugin-persist-legacy.js","./vanilla-jsoneditor-legacy.js","./json-source-map-legacy.js","./@fortawesome-legacy.js","./natural-compare-lite-legacy.js","./@codemirror-legacy.js","./@lezer-legacy.js","./crelt-legacy.js","./style-mod-legacy.js","./w3c-keyname-legacy.js","./@replit-legacy.js","./codemirror-wrapped-line-indent-legacy.js","./fast-deep-equal-legacy.js","./fast-uri-legacy.js","./jmespath-legacy.js","./immutable-json-patch-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./js-cookie-legacy.js","./saduocss-legacy.js","./sys_app-legacy.js"],(function(e,l){"use strict";var a,s,t,n,u,r,c,o,m,i,d,p,y,g,j,h,f,b,_,V,v,x,w;return{setters:[e=>{a=e.q,s=e.r,t=e.G,n=e.P,u=e.f,r=e.p,c=e.K},e=>{o=e.d,m=e.u},e=>{i=e._,d=e.t},e=>{p=e.u},e=>{y=e._},e=>{g=e.r,j=e.o,h=e.c,f=e.w,b=e.e,_=e._,V=e.a,v=e.g,x=e.a0,w=e.f},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var l=document.createElement("style");l.textContent="[data-v-cf3478bc] .tiny-textarea{height:436px}\n",document.head.appendChild(l);const k={class:"mr-10 ml-10 mb-20 pd-10 bg-fff"};e("default",y({name:"frag-edit",components:{Vue3Tinymce:i},data:()=>({setting:d,loading:!0,params:{id:0,type:"1",name:0,mark:"",content:"欢迎使用ChanCMS系统"},dialogVisible:!1,disabled:!1,paramsRules:{name:[{required:!0,message:"请输入栏目名称",trigger:"blur"},{min:2,max:50,message:"名称长度在 2 到 50 个字符之间",trigger:"blur"}]}}),computed:{},async mounted(){this.setting.images_upload_url=await p()},async created(){this.params.id=this.$route.params.id,await this.detail()},unmounted(){},methods:{tinymce(){this.loading=!1},setContent(e){this.params.content=e},async detail(){try{let e=await o(this.params.id);200===e.code&&(this.params=e.data,"2"==this.params.type&&(this.loading=!1))}catch(e){console.error(e)}},handleAttr(e){console.log("e--\x3e",e)},handleSubCid(e){console.log("e--\x3e",e)},async update(){try{let e=await m(this.params);200==e.code?(this.$message({message:"更新成功^_^",type:"success"}),this.$router.go(-1)):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.update()}))}}},[["render",function(e,l,o,m,i,d){const p=a,y=s,C=t,U=n,$=g("vue3-tinymce"),q=u,z=r,I=c;return j(),h("div",k,[f((j(),b(z,{ref:"params",model:e.params,rules:e.paramsRules,"label-width":"84px",class:"mt-20"},{default:_((()=>[V("div",null,[v(y,{label:"碎片名称",prop:"name"},{default:_((()=>[v(p,{modelValue:e.params.name,"onUpdate:modelValue":l[0]||(l[0]=l=>e.params.name=l)},null,8,["modelValue"])])),_:1}),v(y,{label:"碎片标识",prop:"mark"},{default:_((()=>[v(p,{modelValue:e.params.mark,"onUpdate:modelValue":l[1]||(l[1]=l=>e.params.mark=l)},null,8,["modelValue"])])),_:1}),v(y,{label:"碎片类型",prop:"type"},{default:_((()=>[v(U,{modelValue:e.params.type,"onUpdate:modelValue":l[2]||(l[2]=l=>e.params.type=l),class:"ml-4"},{default:_((()=>[v(C,{value:"1"},{default:_((()=>[x("富文本")])),_:1}),v(C,{value:"2"},{default:_((()=>[x("文本框")])),_:1})])),_:1},8,["modelValue"])])),_:1}),"1"==e.params.type?(j(),b(y,{key:0,label:"碎片内容"},{default:_((()=>[v($,{modelValue:e.params.content,"onUpdate:modelValue":l[3]||(l[3]=l=>e.params.content=l),setting:e.setting,onInit:d.tinymce,"script-src":"/public/admin/tinymce/tinymce.min.js"},null,8,["modelValue","setting","onInit"])])),_:1})):w("",!0),"2"==e.params.type?(j(),b(y,{key:1,label:"碎片内容"},{default:_((()=>[v(p,{type:"textarea",prop:"textarea",class:"textarea",rows:3,modelValue:e.params.content,"onUpdate:modelValue":l[4]||(l[4]=l=>e.params.content=l)},null,8,["modelValue"])])),_:1})):w("",!0)]),v(y,null,{default:_((()=>[v(q,{type:"primary",onClick:l[5]||(l[5]=e=>d.submit("params"))},{default:_((()=>[x("保存")])),_:1})])),_:1})])),_:1},8,["model","rules"])),[[I,e.loading]])])}],["__scopeId","data-v-cf3478bc"]]))}}}));
