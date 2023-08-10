import{p as a,q as s,f as e,o as t}from"./element-plus.js";import{c as r,h as m}from"./tag.js";import{p as o}from"./pinyin-pro.js";import{_ as p}from"./index.js";import{o as l,c as i,U as n,W as u,_ as c}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@element-plus.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./escape-html.js";import"./normalize-wheel-es.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const d={class:"mr-10 ml-10 mb-20"};const h=p({name:"tag-add",components:{},data:()=>({params:{name:"",path:""},paramsRules:{name:[{required:!0,message:"请输入栏目名称",trigger:"blur"},{min:2,max:50,message:"名称长度在 2 到 50 个字符之间",trigger:"blur"}]}}),computed:{},async mounted(){},created(){},unmounted(){},watch:{"params.name":function(a,s){this.params.path=o(a,{toneType:"none"}).replace(/\s+/g,"")}},methods:{async create(){try{(await r(this.params)).code&&(this.$message({message:"新增成功^_^",type:"success"}),this.$router.go(-1))}catch(a){console.log(a)}},async has(){try{let a=await m(this.params.path);200===a.code&&(a.data?this.$message({message:"标签已存在，请不要再添加了",type:"success"}):this.create())}catch(a){console.log(a)}},submit(a){this.$refs[a].validate((a=>{if(!a)return console.log("error submit!!"),!1;this.has()}))}}},[["render",function(r,m,o,p,h,j){const g=a,f=s,y=e,b=t;return l(),i("div",d,[n(b,{ref:"params",model:r.params,rules:r.paramsRules,"label-width":"84px",class:"mt-20"},{default:u((()=>[n(f,{label:"标签名称",prop:"name"},{default:u((()=>[n(g,{modelValue:r.params.name,"onUpdate:modelValue":m[0]||(m[0]=a=>r.params.name=a),placeholder:"请输入汉字"},null,8,["modelValue"])])),_:1}),n(f,{label:"标签标识"},{default:u((()=>[n(g,{modelValue:r.params.path,"onUpdate:modelValue":m[1]||(m[1]=a=>r.params.path=a),placeholder:"模板使用标识"},null,8,["modelValue"])])),_:1}),n(f,null,{default:u((()=>[n(y,{type:"primary",onClick:m[2]||(m[2]=a=>j.submit("params"))},{default:u((()=>[c("保存")])),_:1})])),_:1})])),_:1},8,["model","rules"])])}]]);export{h as default};
