import{p as e,q as a,r as s,A as l,f as t}from"./element-plus.js";import{c as m}from"./message.js";import{_ as o}from"./index.js";import{o as r,c as p,T as d,V as u,Z as i}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@element-plus.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./escape-html.js";import"./normalize-wheel-es.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const n={class:"mr-10 ml-10 mb-20"};const c=o({name:"message-add",data:()=>({params:{name:"",tel:"",wx:0,content:"",createdAt:new Date},paramsRules:{name:[{required:!0,message:"请输入标签名称",trigger:"blur"},{min:2,max:20,message:"名称长度在 2 到 20 个字符之间",trigger:"blur"}]}}),computed:{},mounted(){},async created(){},methods:{handleAttr(e){console.log("e--\x3e",e)},handleSubCid(e){console.log("e--\x3e",e)},async create(){try{(await m(this.params)).code&&(this.$message({message:"新增成功^_^",type:"success"}),this.$router.go(-1))}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.create()}))}}},[["render",function(m,o,c,j,f,g){const V=a,h=s,b=l,x=t,y=e;return r(),p("div",n,[d(y,{ref:"params",model:m.params,rules:m.paramsRules,"label-width":"84px",class:"mt-20"},{default:u((()=>[d(h,{label:"留言标题",prop:"name"},{default:u((()=>[d(V,{modelValue:m.params.name,"onUpdate:modelValue":o[0]||(o[0]=e=>m.params.name=e)},null,8,["modelValue"])])),_:1}),d(h,{label:"手机号"},{default:u((()=>[d(V,{modelValue:m.params.tel,"onUpdate:modelValue":o[1]||(o[1]=e=>m.params.tel=e)},null,8,["modelValue"])])),_:1}),d(h,{label:"微信"},{default:u((()=>[d(V,{modelValue:m.params.wx,"onUpdate:modelValue":o[2]||(o[2]=e=>m.params.wx=e)},null,8,["modelValue"])])),_:1}),d(h,{label:"留言内容"},{default:u((()=>[d(V,{type:"textarea",rows:3,placeholder:"请输入内容",modelValue:m.params.content,"onUpdate:modelValue":o[3]||(o[3]=e=>m.params.content=e)},null,8,["modelValue"])])),_:1}),d(h,{label:"发布时间"},{default:u((()=>[d(b,{modelValue:m.params.createdAt,"onUpdate:modelValue":o[4]||(o[4]=e=>m.params.createdAt=e),type:"datetime",placeholder:"选择日期时间"},null,8,["modelValue"])])),_:1}),d(h,null,{default:u((()=>[d(x,{type:"primary",onClick:o[5]||(o[5]=e=>g.submit("params"))},{default:u((()=>[i("保存")])),_:1})])),_:1})])),_:1},8,["model","rules"])])}]]);export{c as default};
//# sourceMappingURL=add8.js.map
