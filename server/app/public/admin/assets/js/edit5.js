import{p as e,q as a,t as s,f as t,o as m,K as r}from"./element-plus.js";import{d as o,u as l}from"./frag.js";import{_ as i}from"./@jsdawn.js";import{t as n}from"./tinymce.js";import{_ as p}from"./index.js";import{af as d,o as u,c,a1 as j,X as g,W as h,a as f,U as y,_ as b}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@element-plus.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./escape-html.js";import"./normalize-wheel-es.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const V={class:"mr-10 ml-10 mb-20"};const _=p({name:"frag-edit",components:{Vue3Tinymce:i},data:()=>({setting:n,loading:!0,params:{id:0,name:0,mark:"",createdAt:new Date,content:"禅悦"},dialogVisible:!1,disabled:!1,paramsRules:{name:[{required:!0,message:"请输入栏目名称",trigger:"blur"},{min:2,max:50,message:"名称长度在 2 到 50 个字符之间",trigger:"blur"}]}}),computed:{},async mounted(){},async created(){this.params.id=this.$route.params.id,await this.detail()},unmounted(){},methods:{tinymce(){this.loading=!1},setContent(e){this.params.content=e},async detail(){try{let e=await o(this.params.id);200===e.code&&(this.params=e.data,this.params.createdAt=new Date(this.params.createdAt))}catch(e){console.error(e)}},handleAttr(e){console.log("e--\x3e",e)},handleSubCid(e){console.log("e--\x3e",e)},async update(){try{(await l(this.params)).code&&(this.$message({message:"更新成功^_^",type:"success"}),this.$router.go(-1))}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.update()}))}}},[["render",function(o,l,i,n,p,_){const v=e,w=a,x=d("vue3-tinymce"),k=s,A=t,U=m,$=r;return u(),c("div",V,[j((u(),g(U,{ref:"params",model:o.params,rules:o.paramsRules,"label-width":"84px",class:"mt-20"},{default:h((()=>[f("div",null,[y(w,{label:"碎片名称",prop:"name"},{default:h((()=>[y(v,{modelValue:o.params.name,"onUpdate:modelValue":l[0]||(l[0]=e=>o.params.name=e)},null,8,["modelValue"])])),_:1}),y(w,{label:"碎片标识",prop:"mark"},{default:h((()=>[y(v,{modelValue:o.params.mark,"onUpdate:modelValue":l[1]||(l[1]=e=>o.params.mark=e)},null,8,["modelValue"])])),_:1}),y(w,{label:"文章内容"},{default:h((()=>[y(x,{modelValue:o.params.content,"onUpdate:modelValue":l[2]||(l[2]=e=>o.params.content=e),setting:o.setting,onInit:_.tinymce,"script-src":"/public/admin/tinymce/tinymce.min.js"},null,8,["modelValue","setting","onInit"])])),_:1}),y(w,{label:"发布时间"},{default:h((()=>[y(k,{modelValue:o.params.createdAt,"onUpdate:modelValue":l[3]||(l[3]=e=>o.params.createdAt=e),type:"datetime",placeholder:"选择日期时间"},null,8,["modelValue"])])),_:1})]),y(w,null,{default:h((()=>[y(A,{type:"primary",onClick:l[4]||(l[4]=e=>_.submit("params"))},{default:h((()=>[b("保存")])),_:1})])),_:1})])),_:1},8,["model","rules"])),[[$,o.loading]])])}],["__scopeId","data-v-09647769"]]);export{_ as default};
