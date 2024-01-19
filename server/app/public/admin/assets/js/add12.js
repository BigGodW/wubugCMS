import{q as s,r as e,f as a,p as t}from"./element-plus.js";import{c as m,h as r}from"./tag.js";import{p as o}from"./pinyin-pro.js";import{_ as p}from"./@qiun.js";import{o as l,c as i,g as n,$ as u,a1 as c}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@element-plus.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./escape-html.js";import"./normalize-wheel-es.js";import"./index.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const d={class:"mr-10 ml-10 mb-20 pd-20 content-wrap"};const h=p({name:"tag-add",components:{},data:()=>({params:{name:"",path:""},paramsRules:{name:[{required:!0,message:"请输入栏目名称",trigger:"blur"},{min:2,max:50,message:"名称长度在 2 到 50 个字符之间",trigger:"blur"}]}}),computed:{},async mounted(){},created(){},unmounted(){},watch:{"params.name":function(s,e){this.params.path=o(s,{toneType:"none"}).replace(/\s+/g,"")}},methods:{async create(){try{let s=await m(this.params);200==s.code?(this.$message({message:"新增成功^_^",type:"success"}),this.$router.go(-1)):this.$message({message:s.msg,type:"success"})}catch(s){console.log(s)}},async has(){try{let s=await r(this.params.path);200==s.code?s.data?this.$message({message:"标签已存在，请不要再添加了",type:"success"}):this.create():this.$message({message:s.msg,type:"success"})}catch(s){console.log(s)}},submit(s){this.$refs[s].validate((s=>{if(!s)return console.log("error submit!!"),!1;this.has()}))}}},[["render",function(m,r,o,p,h,g){const j=s,f=e,y=a,b=t;return l(),i("div",d,[n(b,{ref:"params",model:m.params,rules:m.paramsRules,"label-width":"84px",class:"mt-20"},{default:u((()=>[n(f,{label:"标签名称",prop:"name"},{default:u((()=>[n(j,{modelValue:m.params.name,"onUpdate:modelValue":r[0]||(r[0]=s=>m.params.name=s),placeholder:"请输入汉字"},null,8,["modelValue"])])),_:1}),n(f,{label:"标签标识"},{default:u((()=>[n(j,{modelValue:m.params.path,"onUpdate:modelValue":r[1]||(r[1]=s=>m.params.path=s),placeholder:"模板使用标识"},null,8,["modelValue"])])),_:1}),n(f,null,{default:u((()=>[n(y,{type:"primary",onClick:r[2]||(r[2]=s=>g.submit("params"))},{default:u((()=>[c("保存")])),_:1})])),_:1})])),_:1},8,["model","rules"])])}]]);export{h as default};
