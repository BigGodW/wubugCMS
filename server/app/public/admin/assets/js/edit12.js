import{q as s,r as a,f as e,p as t}from"./element-plus.js";import{d as m,u as r,h as o}from"./tag.js";import{p as i}from"./pinyin-pro.js";import{_ as p}from"./@qiun.js";import{o as l,c as n,g as u,Z as d,$ as c}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@element-plus.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./normalize-wheel-es.js";import"./index.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const h={class:"mr-10 ml-10 mb-20 pd-20 content-wrap"};const g=p({name:"tag-edit",data:()=>({params:{id:0,name:0,path:""},paramsRules:{name:[{required:!0,message:"请输入标签名称",trigger:"blur"},{min:2,max:8,message:"名称长度在 2 到 8 个字符之间",trigger:"blur"}]}}),computed:{},async mounted(){},watch:{"params.name":function(s,a){this.params.path=i(s,{toneType:"none"}).replace(/\s+/g,"")}},async created(){this.params.id=this.$route.params.id,await this.detail()},unmounted(){},methods:{async detail(){try{let s=await m(this.params.id);200==s.code?this.params=s.data:this.$message({message:s.msg,type:"success"})}catch(s){console.error(s)}},async update(){try{let s=await r(this.params);200==s.code?(this.$message({message:"更新成功^_^",type:"success"}),this.$router.go(-1)):this.$message({message:s.msg,type:"success"})}catch(s){console.log(s)}},async has(){try{let s=await o(this.params.path);200==s.code?s.data?this.$message({message:"标签已存在，修改无效",type:"success"}):this.update():this.$message({message:s.msg,type:"success"})}catch(s){console.log(s)}},submit(s){this.$refs[s].validate((s=>{if(!s)return console.log("error submit!!"),!1;this.has()}))}}},[["render",function(m,r,o,i,p,g){const j=s,y=a,f=e,b=t;return l(),n("div",h,[u(b,{ref:"params",model:m.params,rules:m.paramsRules,"label-width":"84px",class:"mt-20"},{default:d((()=>[u(y,{label:"标签名称",prop:"name"},{default:d((()=>[u(j,{modelValue:m.params.name,"onUpdate:modelValue":r[0]||(r[0]=s=>m.params.name=s)},null,8,["modelValue"])])),_:1}),u(y,{label:"标签标识"},{default:d((()=>[u(j,{modelValue:m.params.path,"onUpdate:modelValue":r[1]||(r[1]=s=>m.params.path=s)},null,8,["modelValue"])])),_:1}),u(y,null,{default:d((()=>[u(f,{type:"primary",onClick:r[2]||(r[2]=s=>g.submit("params"))},{default:d((()=>[c("保存")])),_:1})])),_:1})])),_:1},8,["model","rules"])])}]]);export{g as default};
