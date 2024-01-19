import{q as e,r as a,G as s,O as t,f as m,p as l,H as o}from"./element-plus.js";import{c as r}from"./frag.js";import{_ as p,t as n}from"./tinymce.js";import{p as i}from"./pinyin-pro.js";import{_ as u}from"./@qiun.js";import{r as d,o as c,c as f,w as g,e as j,$ as y,a as h,g as b,a1 as V,f as _}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@element-plus.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./escape-html.js";import"./normalize-wheel-es.js";import"./index.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const x={class:"mr-10 ml-10 mb-20 pd-10 bg-fff"};const k=u({name:"frag-add",components:{Vue3Tinymce:p},data:()=>({setting:n,loading:!0,params:{type:"1",name:"",mark:"",content:"禅悦"},paramsRules:{name:[{required:!0,message:"请输入栏目名称",trigger:"blur"},{min:2,max:50,message:"名称长度在 2 到 50 个字符之间",trigger:"blur"}]}}),computed:{},async mounted(){},created(){},unmounted(){},watch:{"params.name":function(e,a){this.params.mark=i(e,{toneType:"none"}).replace(/\s+/g,"")}},methods:{tinymce(){this.loading=!1},setContent(e){this.params.content=e},handleAttr(e){console.log("e--\x3e",e)},handleSubCid(e){console.log("e--\x3e",e)},async create(){try{let e=await r(this.params);200==e.code?(this.$message({message:"新增成功^_^",type:"success"}),this.$router.go(-1)):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.create()}))}}},[["render",function(r,p,n,i,u,k){const v=e,w=a,U=s,$=t,q=d("vue3-tinymce"),C=m,I=l,z=o;return c(),f("div",x,[g((c(),j(I,{ref:"params",model:r.params,rules:r.paramsRules,"label-width":"84px",class:"mt-20"},{default:y((()=>[h("div",null,[b(w,{label:"碎片名称",prop:"name"},{default:y((()=>[b(v,{modelValue:r.params.name,"onUpdate:modelValue":p[0]||(p[0]=e=>r.params.name=e),placeholder:"请输入汉字"},null,8,["modelValue"])])),_:1}),b(w,{label:"碎片标识",prop:"mark"},{default:y((()=>[b(v,{modelValue:r.params.mark,"onUpdate:modelValue":p[1]||(p[1]=e=>r.params.mark=e),placeholder:"模板使用标识"},null,8,["modelValue"])])),_:1}),b(w,{label:"碎片类型",prop:"type"},{default:y((()=>[b($,{modelValue:r.params.type,"onUpdate:modelValue":p[2]||(p[2]=e=>r.params.type=e),class:"ml-4"},{default:y((()=>[b(U,{label:"1"},{default:y((()=>[V("富文本")])),_:1}),b(U,{label:"2"},{default:y((()=>[V("文本框")])),_:1})])),_:1},8,["modelValue"])])),_:1}),"1"==r.params.type?(c(),j(w,{key:0,label:"碎片内容"},{default:y((()=>[b(q,{modelValue:r.params.content,"onUpdate:modelValue":p[3]||(p[3]=e=>r.params.content=e),setting:r.setting,onInit:k.tinymce,"script-src":"/public/admin/tinymce/tinymce.min.js"},null,8,["modelValue","setting","onInit"])])),_:1})):_("",!0),"2"==r.params.type?(c(),j(w,{key:1,label:"碎片内容"},{default:y((()=>[b(v,{type:"textarea",prop:"textarea",class:"textarea",rows:3,modelValue:r.params.content,"onUpdate:modelValue":p[4]||(p[4]=e=>r.params.content=e)},null,8,["modelValue"])])),_:1})):_("",!0)]),b(w,null,{default:y((()=>[b(C,{type:"primary",onClick:p[5]||(p[5]=e=>k.submit("params"))},{default:y((()=>[V("保存")])),_:1})])),_:1})])),_:1},8,["model","rules"])),[[z,r.loading]])])}],["__scopeId","data-v-d2bb008a"]]);export{k as default};
