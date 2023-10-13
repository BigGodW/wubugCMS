import{p as e,q as a,u as s,M as t,f as l,o,y as i,A as d}from"./element-plus.js";import{s as u,u as m,a as r}from"./site.js";import{h as n,A as c,_ as p}from"./index.js";import{o as g,c as f,U as y,W as h,_ as b,af as V}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@element-plus.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./escape-html.js";import"./normalize-wheel-es.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */let _=()=>n({url:"".concat(c.BASE_API,"/api/sysApp/find"),method:"get"}),j=e=>n({url:"".concat(c.BASE_API,"/api/sysApp/update"),method:"post",data:e});const w={class:"mr-10 ml-10"};const x={class:"mr-10 ml-10"};const k={class:"mr-10 ml-10"};const q={class:"mr-10 ml-10"};const U=p({name:"sys-index",components:{ConfigSet:p({name:"ConfigSet",data:()=>({loading:!0,set:{template:"default",appid:"",secret:"",accessKey:"",secretKey:"",domain:"",bucket:"",uploadWay:"1"}}),computed:{},created(){this.query()},methods:{async query(){try{let e=await _();200===e.code?(this.loading=!1,this.set=e.data):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},async update(){try{let e=await j(this.set);200===e.code?(this.$message({message:"更新成功^_^",type:"success"}),this.query()):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.update()}))}}},[["render",function(d,u,m,r,n,c){const p=e,V=a,_=s,j=t,x=l,k=o,q=i;return g(),f("div",w,[y(q,{label:"应用配置",class:"mt-20",name:"config"},{default:h((()=>[y(k,{ref:"set",model:d.set,"label-width":"80px"},{default:h((()=>[y(V,{prop:"template",label:"模板"},{default:h((()=>[y(p,{modelValue:d.set.template,"onUpdate:modelValue":u[0]||(u[0]=e=>d.set.template=e),placeholder:"默认模板default不用填写"},null,8,["modelValue"])])),_:1}),y(V,{label:"上传方式"},{default:h((()=>[y(j,{modelValue:d.set.uploadWay,"onUpdate:modelValue":u[1]||(u[1]=e=>d.set.uploadWay=e),class:"ml-4"},{default:h((()=>[y(_,{label:"1",size:"large"},{default:h((()=>[b("普通")])),_:1}),y(_,{label:"2",size:"large"},{default:h((()=>[b("七牛云")])),_:1})])),_:1},8,["modelValue"])])),_:1}),y(V,null,{default:h((()=>[y(x,{type:"primary",onClick:u[2]||(u[2]=e=>c.submit("set"))},{default:h((()=>[b("保存")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1})])}]]),QiNiu:p({name:"QiNiu",data:()=>({loading:!0,set:{template:"default",appid:"",secret:"",accessKey:"",secretKey:"",domain:"",bucket:"",uploadWay:"1"}}),computed:{},created(){this.query()},methods:{async query(){try{let e=await _();200===e.code?(this.loading=!1,this.set=e.data):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},async update(){try{let e=await j(this.set);200===e.code?(this.$message({message:"更新成功^_^",type:"success"}),this.query()):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.update()}))}}},[["render",function(s,t,d,u,m,r){const n=e,c=a,p=l,V=o,_=i;return g(),f("div",x,[y(_,{label:"七牛云配置",class:"mt-20",name:"qiniu"},{default:h((()=>[y(V,{ref:"set",model:s.set,"label-width":"80px"},{default:h((()=>[y(c,{prop:"accessKey",label:"accessKey"},{default:h((()=>[y(n,{modelValue:s.set.accessKey,"onUpdate:modelValue":t[0]||(t[0]=e=>s.set.accessKey=e)},null,8,["modelValue"])])),_:1}),y(c,{prop:"secretKey",label:"secretKey"},{default:h((()=>[y(n,{modelValue:s.set.secretKey,"onUpdate:modelValue":t[1]||(t[1]=e=>s.set.secretKey=e)},null,8,["modelValue"])])),_:1}),y(c,{prop:"domain",label:"domain"},{default:h((()=>[y(n,{modelValue:s.set.domain,"onUpdate:modelValue":t[2]||(t[2]=e=>s.set.domain=e)},null,8,["modelValue"])])),_:1}),y(c,{prop:"bucket",label:"bucket"},{default:h((()=>[y(n,{modelValue:s.set.bucket,"onUpdate:modelValue":t[3]||(t[3]=e=>s.set.bucket=e)},null,8,["modelValue"])])),_:1}),y(c,null,{default:h((()=>[y(p,{type:"primary",onClick:t[4]||(t[4]=e=>r.submit("set"))},{default:h((()=>[b("保存")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1})])}]]),WeChat:p({name:"WeChat",data:()=>({loading:!0,set:{template:"default",appid:"",secret:"",accessKey:"",secretKey:"",domain:"",bucket:"",uploadWay:"1"}}),computed:{},created(){this.query()},methods:{async query(){try{let e=await _();200===e.code?(this.loading=!1,this.set=e.data):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},async update(){try{let e=await j(this.set);200===e.code?(this.$message({message:"更新成功^_^",type:"success"}),this.query()):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.update()}))}}},[["render",function(s,t,d,u,m,r){const n=e,c=a,p=l,V=o,_=i;return g(),f("div",k,[y(_,{label:"微信配置",class:"mt-20",name:"wechat"},{default:h((()=>[y(V,{ref:"set",model:s.set,"label-width":"80px"},{default:h((()=>[y(c,{label:"appid",prop:"appid",rules:[{required:!0,message:"请输入appid",trigger:"blur"}]},{default:h((()=>[y(n,{modelValue:s.set.appid,"onUpdate:modelValue":t[0]||(t[0]=e=>s.set.appid=e)},null,8,["modelValue"])])),_:1}),y(c,{prop:"secret",label:"secret"},{default:h((()=>[y(n,{modelValue:s.set.secret,"onUpdate:modelValue":t[1]||(t[1]=e=>s.set.secret=e)},null,8,["modelValue"])])),_:1}),y(c,null,{default:h((()=>[y(p,{type:"primary",onClick:t[2]||(t[2]=e=>r.submit("set"))},{default:h((()=>[b("保存")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1})])}]])},data:()=>({loading:!0,activeName:"first",activeIndex:"0",info:{id:"",name:"",domain:"",email:"",icp:"",json:"",code:""},seo:{id:"",title:"",keywords:"",description:""},infoRules:{name:[{required:!0,message:"请输入网站名称",trigger:"blur"},{min:2,max:20,message:"长度在 2 到 20 个字符",trigger:"blur"}]},seoRules:{title:[{required:!0,message:"不能为空",trigger:"blur"},{min:2,max:50,message:"长度在 2 到 50 个字符",trigger:"blur"}]}}),computed:{},created(){this.query()},methods:{handleClick(e){this.activeIndex=e.index},async query(){try{let e=await u();if(200===e.code){this.loading=!1;let{id:a,name:s,domain:t,email:l,icp:o,police:i,copyright:d,json:u,code:m,title:r,keywords:n,description:c}=e.data;this.info={id:a,name:s,domain:t,email:l,icp:o,police:i,copyright:d,code:m,json:u},this.seo={id:a,title:r,keywords:n,description:c}}else this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},async updateInfo(){try{let e=await m(this.info);200===e.code?(this.$message({message:"更新成功^_^",type:"success"}),this.query()):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},async updateSeo(){try{let e=await r(this.seo);200===e.code?(this.$message({message:"更新成功^_^",type:"success"}),this.query()):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},submitInfo(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.updateInfo()}))},submitSeo(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.updateSeo()}))}}},[["render",function(s,t,u,m,r,n){const c=e,p=a,_=l,j=o,w=i,x=V("ConfigSet"),k=V("QiNiu"),U=V("WeChat"),$=d;return g(),f("div",q,[y($,{modelValue:s.activeName,"onUpdate:modelValue":t[11]||(t[11]=e=>s.activeName=e),onTabClick:n.handleClick},{default:h((()=>[y(w,{label:"基本设置",class:"mt-20",name:"first"},{default:h((()=>[y(j,{ref:"info",model:s.info,"label-width":"84px"},{default:h((()=>[y(p,{label:"网站名称",prop:"name",rules:[{required:!0,message:"请输入网站名称",trigger:"blur"},{min:2,max:20,message:"长度在 2 到 20 个字符",trigger:"blur"}]},{default:h((()=>[y(c,{modelValue:s.info.name,"onUpdate:modelValue":t[0]||(t[0]=e=>s.info.name=e)},null,8,["modelValue"])])),_:1}),y(p,{prop:"domain",label:"网站域名"},{default:h((()=>[y(c,{modelValue:s.info.domain,"onUpdate:modelValue":t[1]||(t[1]=e=>s.info.domain=e)},null,8,["modelValue"])])),_:1}),y(p,{prop:"email",label:"站长邮箱"},{default:h((()=>[y(c,{modelValue:s.info.email,"onUpdate:modelValue":t[2]||(t[2]=e=>s.info.email=e),rules:[{type:"email",message:"请输入正确的邮箱",trigger:["blur","change"]}]},null,8,["modelValue"])])),_:1}),y(p,{prop:"icp",label:"ICP备案号"},{default:h((()=>[y(c,{modelValue:s.info.icp,"onUpdate:modelValue":t[3]||(t[3]=e=>s.info.icp=e)},null,8,["modelValue"])])),_:1}),y(p,{prop:"code",label:"统计代码"},{default:h((()=>[y(c,{type:"textarea",prop:"textarea",class:"textarea",rows:3,modelValue:s.info.code,"onUpdate:modelValue":t[4]||(t[4]=e=>s.info.code=e)},null,8,["modelValue"])])),_:1}),y(p,{prop:"json",label:"万能配置"},{default:h((()=>[y(c,{type:"textarea",prop:"textarea",class:"textarea",rows:3,modelValue:s.info.json,"onUpdate:modelValue":t[5]||(t[5]=e=>s.info.json=e)},null,8,["modelValue"])])),_:1}),y(p,null,{default:h((()=>[y(_,{type:"primary",onClick:t[6]||(t[6]=e=>n.submitInfo("info"))},{default:h((()=>[b("保存")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),y(w,{label:"SEO设置",class:"mt-20",name:"second"},{default:h((()=>[y(j,{ref:"seo",model:s.seo,"label-width":"84px"},{default:h((()=>[y(p,{label:"标题",prop:"title",rules:[{required:!0,message:"请输入网站标题",trigger:"blur"},{min:2,max:20,message:"长度在 2 到 20 个字符",trigger:"blur"}]},{default:h((()=>[y(c,{modelValue:s.seo.title,"onUpdate:modelValue":t[7]||(t[7]=e=>s.seo.title=e)},null,8,["modelValue"])])),_:1}),y(p,{label:"关键词",prop:"keywords"},{default:h((()=>[y(c,{modelValue:s.seo.keywords,"onUpdate:modelValue":t[8]||(t[8]=e=>s.seo.keywords=e)},null,8,["modelValue"])])),_:1}),y(p,{label:"描述",prop:"description",rules:[{min:2,max:255,message:"字数限制255",trigger:"blur"}]},{default:h((()=>[y(c,{type:"textarea",rows:3,class:"textarea",modelValue:s.seo.description,"onUpdate:modelValue":t[9]||(t[9]=e=>s.seo.description=e)},null,8,["modelValue"])])),_:1}),y(p,null,{default:h((()=>[y(_,{type:"primary",onClick:t[10]||(t[10]=e=>n.submitSeo("seo"))},{default:h((()=>[b("保存")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),y(x),y(k),y(U)])),_:1},8,["modelValue","onTabClick"])])}]]);export{U as default};
