import{q as e,r as a,u as s,f as l,p as t}from"./element-plus.js";import{c as r}from"./message.js";import{_ as o}from"./index.js";import{o as m,c as p,U as u,W as d,_ as i}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@element-plus.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./escape-html.js";import"./normalize-wheel-es.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const n={class:"mr-10 ml-10 mb-20"};const c=o({name:"message-add",data:()=>({params:{name:"",tel:"",wx:"",content:"",createdAt:new Date},paramsRules:{name:[{required:!0,message:"请输入标签名称",trigger:"blur"},{min:2,max:20,message:"名称长度在 2 到 20 个字符之间",trigger:"blur"}]}}),computed:{},mounted(){},async created(){},methods:{handleAttr(e){console.log("e--\x3e",e)},handleSubCid(e){console.log("e--\x3e",e)},async create(){try{(await r(this.params)).code&&(this.$message({message:"新增成功^_^",type:"success"}),this.$router.go(-1))}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.create()}))}}},[["render",function(r,o,c,j,g,f){const b=e,h=a,V=s,x=l,_=t;return m(),p("div",n,[u(_,{ref:"params",model:r.params,"label-width":"84px",class:"mt-20"},{default:d((()=>[u(h,{label:"留言标题",rules:[{required:!0,message:"请输入标题",trigger:"blur"}],prop:"name"},{default:d((()=>[u(b,{modelValue:r.params.name,"onUpdate:modelValue":o[0]||(o[0]=e=>r.params.name=e)},null,8,["modelValue"])])),_:1}),u(h,{label:"手机号"},{default:d((()=>[u(b,{modelValue:r.params.tel,"onUpdate:modelValue":o[1]||(o[1]=e=>r.params.tel=e)},null,8,["modelValue"])])),_:1}),u(h,{label:"微信"},{default:d((()=>[u(b,{modelValue:r.params.wx,"onUpdate:modelValue":o[2]||(o[2]=e=>r.params.wx=e)},null,8,["modelValue"])])),_:1}),u(h,{label:"留言内容",prop:"content",rules:[{required:!0,message:"请输入内容",trigger:"blur"}]},{default:d((()=>[u(b,{type:"textarea",rows:3,placeholder:"请输入内容",modelValue:r.params.content,"onUpdate:modelValue":o[3]||(o[3]=e=>r.params.content=e)},null,8,["modelValue"])])),_:1}),u(h,{label:"发布时间"},{default:d((()=>[u(V,{modelValue:r.params.createdAt,"onUpdate:modelValue":o[4]||(o[4]=e=>r.params.createdAt=e),type:"datetime",placeholder:"选择日期时间"},null,8,["modelValue"])])),_:1}),u(h,null,{default:d((()=>[u(x,{type:"primary",onClick:o[5]||(o[5]=e=>f.submit("params"))},{default:d((()=>[i("保存")])),_:1})])),_:1})])),_:1},8,["model"])])}]]);export{c as default};
//# sourceMappingURL=add7.js.map
