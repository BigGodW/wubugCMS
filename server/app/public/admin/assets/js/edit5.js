import{q as e,r as a,G as s,P as t,f as o,p as r,K as m}from"./element-plus.js";import{d as i,u as l}from"./frag.js";import{_ as p,t as n}from"./tinymce.js";import{u as d}from"./upload.js";import{_ as u}from"./@qiun.js";import{r as c,o as j,c as f,w as g,e as y,_ as h,a as _,g as b,a0 as V,f as v}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@element-plus.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./normalize-wheel-es.js";import"./index.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vanilla-jsoneditor.js";import"./json-source-map.js";import"./@fortawesome.js";import"./natural-compare-lite.js";import"./@codemirror.js";import"./@lezer.js";import"./crelt.js";import"./style-mod.js";import"./w3c-keyname.js";import"./@replit.js";import"./codemirror-wrapped-line-indent.js";import"./fast-deep-equal.js";import"./fast-uri.js";import"./jmespath.js";import"./immutable-json-patch.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */import"./sys_app.js";const w={class:"mr-10 ml-10 mb-20 pd-10 bg-fff"};const x=u({name:"frag-edit",components:{Vue3Tinymce:p},data:()=>({setting:n,loading:!0,params:{id:0,type:"1",name:0,mark:"",content:"欢迎使用ChanCMS系统"},dialogVisible:!1,disabled:!1,paramsRules:{name:[{required:!0,message:"请输入栏目名称",trigger:"blur"},{min:2,max:50,message:"名称长度在 2 到 50 个字符之间",trigger:"blur"}]}}),computed:{},async mounted(){this.setting.images_upload_url=await d()},async created(){this.params.id=this.$route.params.id,await this.detail()},unmounted(){},methods:{tinymce(){this.loading=!1},setContent(e){this.params.content=e},async detail(){try{let e=await i(this.params.id);200===e.code&&(this.params=e.data,"2"==this.params.type&&(this.loading=!1))}catch(e){console.error(e)}},handleAttr(e){console.log("e--\x3e",e)},handleSubCid(e){console.log("e--\x3e",e)},async update(){try{let e=await l(this.params);200==e.code?(this.$message({message:"更新成功^_^",type:"success"}),this.$router.go(-1)):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.update()}))}}},[["render",function(i,l,p,n,d,u){const x=e,k=a,C=s,U=t,$=c("vue3-tinymce"),q=o,z=r,I=m;return j(),f("div",w,[g((j(),y(z,{ref:"params",model:i.params,rules:i.paramsRules,"label-width":"84px",class:"mt-20"},{default:h((()=>[_("div",null,[b(k,{label:"碎片名称",prop:"name"},{default:h((()=>[b(x,{modelValue:i.params.name,"onUpdate:modelValue":l[0]||(l[0]=e=>i.params.name=e)},null,8,["modelValue"])])),_:1}),b(k,{label:"碎片标识",prop:"mark"},{default:h((()=>[b(x,{modelValue:i.params.mark,"onUpdate:modelValue":l[1]||(l[1]=e=>i.params.mark=e)},null,8,["modelValue"])])),_:1}),b(k,{label:"碎片类型",prop:"type"},{default:h((()=>[b(U,{modelValue:i.params.type,"onUpdate:modelValue":l[2]||(l[2]=e=>i.params.type=e),class:"ml-4"},{default:h((()=>[b(C,{value:"1"},{default:h((()=>[V("富文本")])),_:1}),b(C,{value:"2"},{default:h((()=>[V("文本框")])),_:1})])),_:1},8,["modelValue"])])),_:1}),"1"==i.params.type?(j(),y(k,{key:0,label:"碎片内容"},{default:h((()=>[b($,{modelValue:i.params.content,"onUpdate:modelValue":l[3]||(l[3]=e=>i.params.content=e),setting:i.setting,onInit:u.tinymce,"script-src":"/public/admin/tinymce/tinymce.min.js"},null,8,["modelValue","setting","onInit"])])),_:1})):v("",!0),"2"==i.params.type?(j(),y(k,{key:1,label:"碎片内容"},{default:h((()=>[b(x,{type:"textarea",prop:"textarea",class:"textarea",rows:3,modelValue:i.params.content,"onUpdate:modelValue":l[4]||(l[4]=e=>i.params.content=e)},null,8,["modelValue"])])),_:1})):v("",!0)]),b(k,null,{default:h((()=>[b(q,{type:"primary",onClick:l[5]||(l[5]=e=>u.submit("params"))},{default:h((()=>[V("保存")])),_:1})])),_:1})])),_:1},8,["model","rules"])),[[I,i.loading]])])}],["__scopeId","data-v-cf3478bc"]]);export{x as default};
