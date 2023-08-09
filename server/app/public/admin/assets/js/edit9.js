import{q as a,r as s,f as e,p as t}from"./element-plus.js";import{d as r,u as m,h as o}from"./tag.js";import{p as i}from"./pinyin-pro.js";import{_ as p}from"./index.js";import{o as l,c as n,U as u,W as d,_ as c}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@element-plus.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./escape-html.js";import"./normalize-wheel-es.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const h={class:"mr-10 ml-10 mb-20"};const j=p({name:"tag-edit",data:()=>({params:{id:0,name:0,path:""},paramsRules:{name:[{required:!0,message:"请输入标签名称",trigger:"blur"},{min:2,max:8,message:"名称长度在 2 到 8 个字符之间",trigger:"blur"}]}}),computed:{},async mounted(){},watch:{"params.name":function(a,s){this.params.path=i(a,{toneType:"none"}).replace(/\s+/g,"")}},async created(){this.params.id=this.$route.params.id,await this.detail()},unmounted(){},methods:{async detail(){try{let a=await r(this.params.id);200===a.code&&(this.params=a.data)}catch(a){console.error(a)}},async update(){try{(await m(this.params)).code&&(this.$message({message:"更新成功^_^",type:"success"}),this.$router.go(-1))}catch(a){console.log(a)}},async has(){try{let a=await o(this.params.path);a.code&&(a.data?this.$message({message:"标签已存在，修改无效",type:"success"}):this.update())}catch(a){console.log(a)}},submit(a){this.$refs[a].validate((a=>{if(!a)return console.log("error submit!!"),!1;this.has()}))}}},[["render",function(r,m,o,i,p,j){const g=a,f=s,y=e,b=t;return l(),n("div",h,[u(b,{ref:"params",model:r.params,rules:r.paramsRules,"label-width":"84px",class:"mt-20"},{default:d((()=>[u(f,{label:"标签名称",prop:"name"},{default:d((()=>[u(g,{modelValue:r.params.name,"onUpdate:modelValue":m[0]||(m[0]=a=>r.params.name=a)},null,8,["modelValue"])])),_:1}),u(f,{label:"标签标识"},{default:d((()=>[u(g,{modelValue:r.params.path,"onUpdate:modelValue":m[1]||(m[1]=a=>r.params.path=a)},null,8,["modelValue"])])),_:1}),u(f,null,{default:d((()=>[u(y,{type:"primary",onClick:m[2]||(m[2]=a=>j.submit("params"))},{default:d((()=>[c("保存")])),_:1})])),_:1})])),_:1},8,["model","rules"])])}]]);export{j as default};
