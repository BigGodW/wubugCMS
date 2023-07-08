import{a as h}from"./category.js";import{c as S}from"./page.js";import{_,a as g,t as N}from"./index.js";import{_ as D}from"./@jsdawn.js";import{t as I}from"./tinymce.js";import{ag as m,o as $,c as A,a as n,Z as l,V as o,F as T,W as b,_ as c,Y as d}from"./@vue.js";import"./api.js";import"./axios.js";import"./element-plus.js";import"./lodash-es.js";import"./@vueuse.js";import"./@element-plus.js";import"./@popperjs.js";import"./@ctrl.js";import"./dayjs.js";import"./async-validator.js";import"./memoize-one.js";import"./escape-html.js";import"./normalize-wheel-es.js";import"./@floating-ui.js";import"./pinia.js";import"./vue-router.js";import"./js-cookie.js";const E={name:"page-add",components:{Vue3Tinymce:D},data:()=>({setting:I,categorySelected:[],categoryProps:{checkStrictly:!0},activeName:"first",activeIndex:"0",category:[],cateList:[],autoImg:!0,autoDes:!0,picNum:1,params:{cid:0,title:"",seo_title:"",seo_keywords:"",seo_description:"",source:"",author:"",createdAt:new Date,updatedAt:new Date,content:"禅悦",status:"0",pv:0},paramsRules:{title:[{required:!0,message:"请输入栏目名称",trigger:"blur"},{min:2,max:50,message:"名称长度在 2 到 50 个字符之间",trigger:"blur"}]}}),computed:{},mounted(){},created(){this.query()},unmounted(){},methods:{handleClick(e){this.activeIndex=e.index},setContent(e){this.params.content=e},async query(){try{let e=await h();if(e.code===200){let a=g(N(e.data)),i=g(e.data);this.cateList=i,this.category=[...a]}}catch(e){console.log(e)}},handleChange(e){e[0]!=-1&&(this.params.cid=e[e.length-1])},handleAttr(e){console.log("e-->",e)},handleSubCid(e){console.log("e-->",e)},changeContent(e){this.params.content=e},async create(){try{(await S(this.params)).code==200&&(this.$message({message:"更新成功^_^",type:"success"}),this.$router.go(-1))}catch(e){console.log(e)}},submit(e){this.$refs[e].validate(a=>{if(a)console.log(this.params),this.create();else return console.log("error submit!!"),!1})}}},q={class:"mr-10 ml-10"},B={class:"mr-10 ml-10 mb-20"};function L(e,a,i,O,F,u){const p=m("el-tab-pane"),y=m("el-tabs"),v=m("el-cascader"),s=m("el-form-item"),r=m("el-input"),U=m("vue3-tinymce"),V=m("el-checkbox"),k=m("el-date-picker"),f=m("el-radio"),w=m("el-button"),C=m("el-form");return $(),A(T,null,[n("div",q,[l(y,{modelValue:e.activeName,"onUpdate:modelValue":a[0]||(a[0]=t=>e.activeName=t),onTabClick:u.handleClick},{default:o(()=>[l(p,{label:"基本信息",name:"first"}),l(p,{label:"扩展信息",name:"second"})]),_:1},8,["modelValue","onTabClick"])]),n("div",B,[l(C,{ref:"params",model:e.params,rules:e.paramsRules,"label-width":"84px",class:""},{default:o(()=>[b(n("div",null,[l(s,{label:"文章栏目"},{default:o(()=>[l(v,{props:e.categoryProps,"show-all-levels":!1,modelValue:e.categorySelected,"onUpdate:modelValue":a[1]||(a[1]=t=>e.categorySelected=t),options:e.category,onChange:u.handleChange},null,8,["props","modelValue","options","onChange"])]),_:1}),l(s,{label:"文章标题",prop:"title"},{default:o(()=>[l(r,{modelValue:e.params.title,"onUpdate:modelValue":a[2]||(a[2]=t=>e.params.title=t)},null,8,["modelValue"])]),_:1}),l(s,{label:"文章内容"},{default:o(()=>[l(U,{modelValue:e.params.content,"onUpdate:modelValue":a[3]||(a[3]=t=>e.params.content=t),setting:e.setting,"script-src":"/public/admin/tinymce/tinymce.min.js"},null,8,["modelValue","setting"])]),_:1}),l(s,{label:"内容功能"},{default:o(()=>[l(V,{modelValue:e.autoImg,"onUpdate:modelValue":a[5]||(a[5]=t=>e.autoImg=t)},{default:o(()=>[d(" 提取第 "),l(r,{modelValue:e.picNum,"onUpdate:modelValue":a[4]||(a[4]=t=>e.picNum=t),class:"w-80 mr-8 ml-8",placeholder:"请输入内容"},null,8,["modelValue"]),d("张图片作封面 ")]),_:1},8,["modelValue"]),l(V,{modelValue:e.autoDes,"onUpdate:modelValue":a[6]||(a[6]=t=>e.autoDes=t)},{default:o(()=>[d("提取文章描述")]),_:1},8,["modelValue"])]),_:1}),l(s,{label:"发布时间"},{default:o(()=>[l(k,{modelValue:e.params.createdAt,"onUpdate:modelValue":a[7]||(a[7]=t=>e.params.createdAt=t),"default-value":new Date,type:"datetime",placeholder:"选择日期时间"},null,8,["modelValue","default-value"])]),_:1}),l(s,{label:"是否显示"},{default:o(()=>[l(f,{modelValue:e.params.status,"onUpdate:modelValue":a[8]||(a[8]=t=>e.params.status=t),label:"0"},{default:o(()=>[d("发布")]),_:1},8,["modelValue"]),l(f,{modelValue:e.params.status,"onUpdate:modelValue":a[9]||(a[9]=t=>e.params.status=t),label:"1"},{default:o(()=>[d("不发布")]),_:1},8,["modelValue"])]),_:1}),l(s,{label:"浏览数"},{default:o(()=>[l(r,{modelValue:e.params.pv,"onUpdate:modelValue":a[10]||(a[10]=t=>e.params.pv=t)},null,8,["modelValue"])]),_:1})],512),[[c,e.activeIndex==0]]),b(n("div",null,[l(s,{label:"SEO标题"},{default:o(()=>[l(r,{modelValue:e.params.seo_title,"onUpdate:modelValue":a[11]||(a[11]=t=>e.params.seo_title=t)},null,8,["modelValue"])]),_:1}),l(s,{label:"SEO关键词"},{default:o(()=>[l(r,{modelValue:e.params.seo_keywords,"onUpdate:modelValue":a[12]||(a[12]=t=>e.params.seo_keywords=t)},null,8,["modelValue"])]),_:1}),l(s,{label:"SEO描述"},{default:o(()=>[l(r,{modelValue:e.params.seo_description,"onUpdate:modelValue":a[13]||(a[13]=t=>e.params.seo_description=t)},null,8,["modelValue"])]),_:1}),l(s,{label:"来源"},{default:o(()=>[l(r,{modelValue:e.params.source,"onUpdate:modelValue":a[14]||(a[14]=t=>e.params.source=t)},null,8,["modelValue"])]),_:1}),l(s,{label:"作者"},{default:o(()=>[l(r,{modelValue:e.params.author,"onUpdate:modelValue":a[15]||(a[15]=t=>e.params.author=t)},null,8,["modelValue"])]),_:1})],512),[[c,e.activeIndex==1]]),l(s,null,{default:o(()=>[l(w,{type:"primary",onClick:a[16]||(a[16]=t=>u.submit("params"))},{default:o(()=>[d("保存")]),_:1})]),_:1})]),_:1},8,["model","rules"])])],64)}const de=_(E,[["render",L]]);export{de as default};
