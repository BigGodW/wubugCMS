import{q as e,r as s,f as a,p as t}from"./element-plus.js";import{d as r,u as o}from"./friendlink.js";import{_ as i}from"./index.js";import{o as m,c as l,M as p,Q as d,U as n}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@element-plus.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./normalize-wheel-es.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vanilla-jsoneditor.js";import"./json-source-map.js";import"./@fortawesome.js";import"./natural-compare-lite.js";import"./@codemirror.js";import"./@lezer.js";import"./crelt.js";import"./style-mod.js";import"./w3c-keyname.js";import"./@replit.js";import"./codemirror-wrapped-line-indent.js";import"./fast-deep-equal.js";import"./fast-uri.js";import"./jmespath.js";import"./immutable-json-patch.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const u={class:"mr-10 ml-10 mb-20 pd-20 content-wrap"};const j=i({name:"friendlink-edit",data:()=>({params:{id:0,title:"",link:"",sort:0},paramsRules:{name:[{required:!0,message:"请输入栏目名称",trigger:"blur"},{min:2,max:50,message:"名称长度在 2 到 50 个字符之间",trigger:"blur"}]}}),computed:{},mounted(){},async created(){this.params.id=this.$route.params.id,await this.detail()},methods:{async detail(){try{let e=await r(this.params.id);200===e.code&&(this.params=e.data)}catch(e){console.error(e)}},handleAttr(e){console.log("e--\x3e",e)},handleSubCid(e){console.log("e--\x3e",e)},async update(){try{let e=await o(this.params);200==e.code?(this.$message({message:"更新成功^_^",type:"success"}),this.$router.go(-1)):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.update()}))}}},[["render",function(r,o,i,j,c,f){const h=e,g=s,y=a,b=t;return m(),l("div",u,[p(b,{ref:"params",model:r.params,rules:r.paramsRules,"label-width":"80px",class:"mt-20"},{default:d((()=>[p(g,{label:"标题",prop:"title"},{default:d((()=>[p(h,{modelValue:r.params.title,"onUpdate:modelValue":o[0]||(o[0]=e=>r.params.title=e)},null,8,["modelValue"])])),_:1}),p(g,{label:"链接"},{default:d((()=>[p(h,{modelValue:r.params.link,"onUpdate:modelValue":o[1]||(o[1]=e=>r.params.link=e)},null,8,["modelValue"])])),_:1}),p(g,{label:"排序"},{default:d((()=>[p(h,{modelValue:r.params.sort,"onUpdate:modelValue":o[2]||(o[2]=e=>r.params.sort=e)},null,8,["modelValue"])])),_:1}),p(g,null,{default:d((()=>[p(y,{type:"primary",onClick:o[3]||(o[3]=e=>f.submit("params"))},{default:d((()=>[n("保存")])),_:1})])),_:1})])),_:1},8,["model","rules"])])}]]);export{j as default};
