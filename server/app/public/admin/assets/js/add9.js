import{q as e,r as a,G as s,f as t,p as m}from"./element-plus.js";import{c as r}from"./model.js";import{_ as o}from"./index.js";import{o as l,c as p,M as i,Q as u,U as n}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@element-plus.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./normalize-wheel-es.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vanilla-jsoneditor.js";import"./json-source-map.js";import"./@fortawesome.js";import"./natural-compare-lite.js";import"./@codemirror.js";import"./@lezer.js";import"./crelt.js";import"./style-mod.js";import"./w3c-keyname.js";import"./@replit.js";import"./codemirror-wrapped-line-indent.js";import"./fast-deep-equal.js";import"./fast-uri.js";import"./jmespath.js";import"./immutable-json-patch.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const d={class:"mr-10 ml-10 mb-20 pd-20 content-wrap"};const j=o({name:"model-add",components:{},data:()=>({params:{model_name:"",table_name:"",status:"1"},paramsRules:{model_name:[{required:!0,message:"模型名称",trigger:"blur"},{min:2,max:80,message:"名称长度在 2 到 80 个字符之间",trigger:"blur"}],table_name:[{required:!0,message:"新增表名",trigger:"blur"},{min:2,max:80,message:"名称长度在 2 到 80 个字符之间",trigger:"blur"}]}}),computed:{},mounted(){},created(){},methods:{handleAttr(e){console.log("e--\x3e",e)},change(e){console.log(e),this.params.table_name=e},async create(){try{let e={...this.params},a=await r(e);200==a.code?(this.$message({message:"创建表成功^_^",type:"success"}),this.$router.go(-1)):this.$message({message:a.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.create()}))}}},[["render",function(r,o,j,c,g,f){const _=e,b=a,h=s,V=t,y=m;return l(),p("div",d,[i(y,{ref:"params",model:r.params,rules:r.paramsRules,"label-width":"100px",class:"mt-20"},{default:u((()=>[i(b,{label:"模型名称",prop:"model_name"},{default:u((()=>[i(_,{modelValue:r.params.model_name,"onUpdate:modelValue":o[0]||(o[0]=e=>r.params.model_name=e),onInput:f.change},null,8,["modelValue","onInput"])])),_:1}),i(b,{label:"新增表名",prop:"table_name"},{default:u((()=>[i(_,{modelValue:r.params.table_name,"onUpdate:modelValue":o[1]||(o[1]=e=>r.params.table_name=e),disabled:""},null,8,["modelValue"])])),_:1}),i(b,{label:"是否启用"},{default:u((()=>[i(h,{modelValue:r.params.status,"onUpdate:modelValue":o[2]||(o[2]=e=>r.params.status=e),value:"1"},{default:u((()=>[n("开启")])),_:1},8,["modelValue"]),i(h,{modelValue:r.params.status,"onUpdate:modelValue":o[3]||(o[3]=e=>r.params.status=e),value:"0"},{default:u((()=>[n("禁用")])),_:1},8,["modelValue"])])),_:1}),i(b,null,{default:u((()=>[i(V,{type:"primary",onClick:o[4]||(o[4]=e=>f.submit("params"))},{default:u((()=>[n("保存")])),_:1})])),_:1})])),_:1},8,["model","rules"])])}]]);export{j as default};
