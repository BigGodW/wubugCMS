import{q as e,r as a,G as t,O as s,a as l,C as o,f as d,p as i,u,v as m}from"./element-plus.js";import{s as r,u as n,a as c}from"./site2.js";import{f as p,u as f}from"./sys_app.js";import{_ as g}from"./@qiun.js";import{r as y,o as h,c as b,g as _,_ as V,a0 as j}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@element-plus.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./normalize-wheel-es.js";import"./index.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const w={class:"mr-10 ml-10"};const x={class:"mr-10 ml-10"};const k={class:"mr-10 ml-10"};const q={class:"pd-20 content-wrap"};const v=g({name:"sys-index",components:{ConfigSet:g({name:"ConfigSet",data:()=>({loading:!0,set:{template:"default",maxAge:"1",dataCache:"1",appid:"",secret:"",accessKey:"",secretKey:"",domain:"",bucket:"",uploadWay:"1"}}),computed:{},created(){this.query()},methods:{async query(){try{let e=await p();200===e.code?(this.loading=!1,this.set=e.data):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},async update(){try{let e=await f(this.set);200===e.code?(this.$message({message:"更新成功^_^",type:"success"}),this.query()):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.update()}))}}},[["render",function(m,r,n,c,p,f){const g=e,x=a,k=t,q=s,v=y("QuestionFilled"),C=l,U=o,$=d,K=i,S=u;return h(),b("div",w,[_(S,{label:"应用配置",class:"mt-20",name:"config"},{default:V((()=>[_(K,{ref:"set",model:m.set,"label-width":"120px"},{default:V((()=>[_(x,{prop:"template",label:"模板"},{default:V((()=>[_(g,{modelValue:m.set.template,"onUpdate:modelValue":r[0]||(r[0]=e=>m.set.template=e),placeholder:"默认模板default不用填写"},null,8,["modelValue"])])),_:1}),_(x,{label:"上传方式"},{default:V((()=>[_(q,{modelValue:m.set.uploadWay,"onUpdate:modelValue":r[1]||(r[1]=e=>m.set.uploadWay=e),class:"ml-4"},{default:V((()=>[_(k,{label:"1"},{default:V((()=>[j("普通")])),_:1}),_(k,{label:"2"},{default:V((()=>[j("七牛云")])),_:1})])),_:1},8,["modelValue"])])),_:1}),_(x,{label:"文件缓存"},{default:V((()=>[_(q,{modelValue:m.set.maxAge,"onUpdate:modelValue":r[2]||(r[2]=e=>m.set.maxAge=e),class:"ml-4"},{default:V((()=>[_(k,{label:"1"},{default:V((()=>[j("开启")])),_:1}),_(k,{label:"2"},{default:V((()=>[j("关闭")])),_:1})])),_:1},8,["modelValue"]),_(U,{placement:"top-start",title:"静态资源缓存",width:200,trigger:"hover",content:"css,js,img等模板静态资源缓存。建议：线上环境开启"},{reference:V((()=>[_(C,{class:"ml-20 pointer c-165dff"},{default:V((()=>[_(v)])),_:1})])),_:1})])),_:1}),_(x,{label:"数据缓存"},{default:V((()=>[_(q,{modelValue:m.set.dataCache,"onUpdate:modelValue":r[3]||(r[3]=e=>m.set.dataCache=e),class:"ml-4"},{default:V((()=>[_(k,{label:"1"},{default:V((()=>[j("开启")])),_:1}),_(k,{label:"2"},{default:V((()=>[j("关闭")])),_:1})])),_:1},8,["modelValue"]),_(U,{placement:"top-start",title:"全局模板数据缓存",width:200,trigger:"hover",content:"站点，分类，配置，友情链接，碎片，标签等数据。建议：线上环境开启"},{reference:V((()=>[_(C,{class:"ml-20 pointer c-165dff"},{default:V((()=>[_(v)])),_:1})])),_:1})])),_:1}),_(x,null,{default:V((()=>[_($,{type:"primary",onClick:r[4]||(r[4]=e=>f.submit("set"))},{default:V((()=>[j("保存")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1})])}]]),QiNiu:g({name:"QiNiu",data:()=>({loading:!0,set:{template:"default",appid:"",secret:"",accessKey:"",secretKey:"",domain:"",bucket:"",uploadWay:"1"}}),computed:{},created(){this.query()},methods:{async query(){try{let e=await p();200===e.code?(this.loading=!1,this.set=e.data):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},async update(){try{let e=await f(this.set);200===e.code?(this.$message({message:"更新成功^_^",type:"success"}),this.query()):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.update()}))}}},[["render",function(t,s,l,o,m,r){const n=e,c=a,p=d,f=i,g=u;return h(),b("div",x,[_(g,{label:"七牛云配置",class:"mt-20",name:"qiniu"},{default:V((()=>[_(f,{ref:"set",model:t.set,"label-width":"80px"},{default:V((()=>[_(c,{prop:"accessKey",label:"accessKey(AK)"},{default:V((()=>[_(n,{modelValue:t.set.accessKey,"onUpdate:modelValue":s[0]||(s[0]=e=>t.set.accessKey=e)},null,8,["modelValue"])])),_:1}),_(c,{prop:"secretKey",label:"secretKey(SK)"},{default:V((()=>[_(n,{modelValue:t.set.secretKey,"onUpdate:modelValue":s[1]||(s[1]=e=>t.set.secretKey=e)},null,8,["modelValue"])])),_:1}),_(c,{prop:"domain",label:"域名"},{default:V((()=>[_(n,{modelValue:t.set.domain,"onUpdate:modelValue":s[2]||(s[2]=e=>t.set.domain=e)},null,8,["modelValue"])])),_:1}),_(c,{prop:"bucket",label:"空间"},{default:V((()=>[_(n,{modelValue:t.set.bucket,"onUpdate:modelValue":s[3]||(s[3]=e=>t.set.bucket=e)},null,8,["modelValue"])])),_:1}),_(c,null,{default:V((()=>[_(p,{type:"primary",onClick:s[4]||(s[4]=e=>r.submit("set"))},{default:V((()=>[j("保存")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1})])}]]),WeChat:g({name:"WeChat",data:()=>({loading:!0,set:{template:"default",appid:"",secret:"",accessKey:"",secretKey:"",domain:"",bucket:"",uploadWay:"1"}}),computed:{},created(){this.query()},methods:{async query(){try{let e=await p();200===e.code?(this.loading=!1,this.set=e.data):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},async update(){try{let e=await f(this.set);200===e.code?(this.$message({message:"更新成功^_^",type:"success"}),this.query()):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.update()}))}}},[["render",function(t,s,l,o,m,r){const n=e,c=a,p=d,f=i,g=u;return h(),b("div",k,[_(g,{label:"微信配置",class:"mt-20",name:"wechat"},{default:V((()=>[_(f,{ref:"set",model:t.set,"label-width":"80px"},{default:V((()=>[_(c,{label:"appid",prop:"appid",rules:[{required:!0,message:"请输入appid",trigger:"blur"}]},{default:V((()=>[_(n,{modelValue:t.set.appid,"onUpdate:modelValue":s[0]||(s[0]=e=>t.set.appid=e)},null,8,["modelValue"])])),_:1}),_(c,{prop:"secret",label:"secret"},{default:V((()=>[_(n,{modelValue:t.set.secret,"onUpdate:modelValue":s[1]||(s[1]=e=>t.set.secret=e)},null,8,["modelValue"])])),_:1}),_(c,null,{default:V((()=>[_(p,{type:"primary",onClick:s[2]||(s[2]=e=>r.submit("set"))},{default:V((()=>[j("保存")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1})])}]])},data:()=>({loading:!0,activeName:"first",activeIndex:"0",info:{id:"",name:"",domain:"",email:"",icp:"",json:"",code:""},seo:{id:"",title:"",keywords:"",description:""},infoRules:{name:[{required:!0,message:"请输入网站名称",trigger:"blur"},{min:2,max:20,message:"长度在 2 到 20 个字符",trigger:"blur"}]},seoRules:{title:[{required:!0,message:"不能为空",trigger:"blur"},{min:2,max:50,message:"长度在 2 到 50 个字符",trigger:"blur"}]}}),computed:{},created(){this.query()},methods:{handleClick(e){this.activeIndex=e.index},async query(){try{let e=await r();if(200===e.code){this.loading=!1;let{id:a,name:t,domain:s,email:l,icp:o,police:d,copyright:i,json:u,code:m,title:r,keywords:n,description:c}=e.data;this.info={id:a,name:t,domain:s,email:l,icp:o,police:d,copyright:i,code:m,json:u},this.seo={id:a,title:r,keywords:n,description:c}}else this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},async updateInfo(){try{let e=await n(this.info);200===e.code?(this.$message({message:"更新成功^_^",type:"success"}),this.query()):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},async updateSeo(){try{let e=await c(this.seo);200===e.code?(this.$message({message:"更新成功^_^",type:"success"}),this.query()):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},submitInfo(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.updateInfo()}))},submitSeo(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.updateSeo()}))}}},[["render",function(t,s,l,o,r,n){const c=e,p=a,f=d,g=i,w=u,x=y("ConfigSet"),k=y("QiNiu"),v=y("WeChat"),C=m;return h(),b("div",q,[_(C,{modelValue:t.activeName,"onUpdate:modelValue":s[11]||(s[11]=e=>t.activeName=e),onTabClick:n.handleClick},{default:V((()=>[_(w,{label:"基本设置",class:"mt-20",name:"first"},{default:V((()=>[_(g,{ref:"info",model:t.info,"label-width":"84px"},{default:V((()=>[_(p,{label:"网站名称",prop:"name",rules:[{required:!0,message:"请输入网站名称",trigger:"blur"},{min:2,max:20,message:"长度在 2 到 20 个字符",trigger:"blur"}]},{default:V((()=>[_(c,{modelValue:t.info.name,"onUpdate:modelValue":s[0]||(s[0]=e=>t.info.name=e)},null,8,["modelValue"])])),_:1}),_(p,{prop:"domain",label:"网站域名"},{default:V((()=>[_(c,{modelValue:t.info.domain,"onUpdate:modelValue":s[1]||(s[1]=e=>t.info.domain=e)},null,8,["modelValue"])])),_:1}),_(p,{prop:"email",label:"站长邮箱"},{default:V((()=>[_(c,{modelValue:t.info.email,"onUpdate:modelValue":s[2]||(s[2]=e=>t.info.email=e),rules:[{type:"email",message:"请输入正确的邮箱",trigger:["blur","change"]}]},null,8,["modelValue"])])),_:1}),_(p,{prop:"icp",label:"ICP备案号"},{default:V((()=>[_(c,{modelValue:t.info.icp,"onUpdate:modelValue":s[3]||(s[3]=e=>t.info.icp=e)},null,8,["modelValue"])])),_:1}),_(p,{prop:"code",label:"统计代码"},{default:V((()=>[_(c,{type:"textarea",prop:"textarea",class:"textarea",rows:3,modelValue:t.info.code,"onUpdate:modelValue":s[4]||(s[4]=e=>t.info.code=e)},null,8,["modelValue"])])),_:1}),_(p,{prop:"json",label:"其他配置"},{default:V((()=>[_(c,{type:"textarea",prop:"textarea",class:"textarea",rows:3,modelValue:t.info.json,"onUpdate:modelValue":s[5]||(s[5]=e=>t.info.json=e)},null,8,["modelValue"])])),_:1}),_(p,null,{default:V((()=>[_(f,{type:"primary",onClick:s[6]||(s[6]=e=>n.submitInfo("info"))},{default:V((()=>[j("保存")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),_(w,{label:"SEO设置",class:"mt-20",name:"second"},{default:V((()=>[_(g,{ref:"seo",model:t.seo,"label-width":"84px"},{default:V((()=>[_(p,{label:"标题",prop:"title",rules:[{required:!0,message:"请输入网站标题",trigger:"blur"},{min:2,max:20,message:"长度在 2 到 20 个字符",trigger:"blur"}]},{default:V((()=>[_(c,{modelValue:t.seo.title,"onUpdate:modelValue":s[7]||(s[7]=e=>t.seo.title=e)},null,8,["modelValue"])])),_:1}),_(p,{label:"关键词",prop:"keywords"},{default:V((()=>[_(c,{modelValue:t.seo.keywords,"onUpdate:modelValue":s[8]||(s[8]=e=>t.seo.keywords=e)},null,8,["modelValue"])])),_:1}),_(p,{label:"描述",prop:"description",rules:[{min:2,max:255,message:"字数限制255",trigger:"blur"}]},{default:V((()=>[_(c,{type:"textarea",rows:3,class:"textarea",modelValue:t.seo.description,"onUpdate:modelValue":s[9]||(s[9]=e=>t.seo.description=e)},null,8,["modelValue"])])),_:1}),_(p,null,{default:V((()=>[_(f,{type:"primary",onClick:s[10]||(s[10]=e=>n.submitSeo("seo"))},{default:V((()=>[j("保存")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),_(x),_(k),_(v)])),_:1},8,["modelValue","onTabClick"])])}]]);export{v as default};
