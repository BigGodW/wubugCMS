System.register(["./element-plus-legacy.js","./site-legacy.js","./index-legacy.js","./@vue-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./@vueuse-legacy.js","./dayjs-legacy.js","./@element-plus-legacy.js","./@ctrl-legacy.js","./@popperjs-legacy.js","./memoize-one-legacy.js","./escape-html-legacy.js","./normalize-wheel-es-legacy.js","./pinia-legacy.js","./pinia-plugin-persist-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./js-cookie-legacy.js","./saduocss-legacy.js"],(function(e,l){"use strict";var a,o,s,t,i,n,u,d,r,m,c,p,g,f,y;return{setters:[e=>{a=e.p,o=e.q,s=e.f,t=e.o,i=e.y,n=e.A},e=>{u=e.s,d=e.u,r=e.a},e=>{m=e._},e=>{c=e.o,p=e.c,g=e.U,f=e.W,y=e._},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const l={class:"mr-10 ml-10"};e("default",m({name:"sys-index",data:()=>({loading:!0,activeName:"first",activeIndex:"0",info:{id:"",name:"",domain:"",email:"",icp:"",json:"",code:""},seo:{id:"",title:"",keywords:"",description:""},infoRules:{name:[{required:!0,message:"请输入网站名称",trigger:"blur"},{min:2,max:20,message:"长度在 2 到 20 个字符",trigger:"blur"}]},seoRules:{title:[{required:!0,message:"不能为空",trigger:"blur"},{min:2,max:50,message:"长度在 2 到 50 个字符",trigger:"blur"}]}}),computed:{},created(){this.query()},methods:{handleClick(e){this.activeIndex=e.index},async query(){try{let e=await u();if(200===e.code){this.loading=!1;let{id:l,name:a,domain:o,email:s,icp:t,police:i,copyright:n,json:u,code:d,title:r,keywords:m,description:c}=e.data;this.info={id:l,name:a,domain:o,email:s,icp:t,police:i,copyright:n,code:d,json:u},this.seo={id:l,title:r,keywords:m,description:c}}}catch(e){console.log(e)}},async updateInfo(){try{let e=await d(this.info);200===e.code&&e.data&&(this.$message({message:"更新成功^_^",type:"success"}),this.query())}catch(e){console.log(e)}},async updateSeo(){try{let e=await r(this.seo);200===e.code&&e.data&&(this.$message({message:"更新成功^_^",type:"success"}),this.query())}catch(e){console.log(e)}},submitInfo(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.updateInfo()}))},submitSeo(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.updateSeo()}))}}},[["render",function(e,u,d,r,m,b){const V=a,h=o,j=s,x=t,_=i,w=n;return c(),p("div",l,[g(w,{modelValue:e.activeName,"onUpdate:modelValue":u[11]||(u[11]=l=>e.activeName=l),onTabClick:b.handleClick},{default:f((()=>[g(_,{label:"基本设置",class:"mt-20",name:"first"},{default:f((()=>[g(x,{ref:"info",model:e.info,"label-width":"84px"},{default:f((()=>[g(h,{label:"网站名称",prop:"name",rules:[{required:!0,message:"请输入网站名称",trigger:"blur"},{min:2,max:20,message:"长度在 2 到 20 个字符",trigger:"blur"}]},{default:f((()=>[g(V,{modelValue:e.info.name,"onUpdate:modelValue":u[0]||(u[0]=l=>e.info.name=l)},null,8,["modelValue"])])),_:1}),g(h,{prop:"domain",label:"网站域名"},{default:f((()=>[g(V,{modelValue:e.info.domain,"onUpdate:modelValue":u[1]||(u[1]=l=>e.info.domain=l)},null,8,["modelValue"])])),_:1}),g(h,{prop:"email",label:"站长邮箱"},{default:f((()=>[g(V,{modelValue:e.info.email,"onUpdate:modelValue":u[2]||(u[2]=l=>e.info.email=l),rules:[{type:"email",message:"请输入正确的邮箱",trigger:["blur","change"]}]},null,8,["modelValue"])])),_:1}),g(h,{prop:"icp",label:"ICP备案号"},{default:f((()=>[g(V,{modelValue:e.info.icp,"onUpdate:modelValue":u[3]||(u[3]=l=>e.info.icp=l)},null,8,["modelValue"])])),_:1}),g(h,{prop:"code",label:"统计代码"},{default:f((()=>[g(V,{type:"textarea",prop:"textarea",class:"textarea",rows:3,modelValue:e.info.code,"onUpdate:modelValue":u[4]||(u[4]=l=>e.info.code=l)},null,8,["modelValue"])])),_:1}),g(h,{prop:"json",label:"万能配置"},{default:f((()=>[g(V,{type:"textarea",prop:"textarea",class:"textarea",rows:3,modelValue:e.info.json,"onUpdate:modelValue":u[5]||(u[5]=l=>e.info.json=l)},null,8,["modelValue"])])),_:1}),g(h,null,{default:f((()=>[g(j,{type:"primary",onClick:u[6]||(u[6]=e=>b.submitInfo("info"))},{default:f((()=>[y("保存")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),g(_,{label:"SEO设置",class:"mt-20",name:"second"},{default:f((()=>[g(x,{ref:"seo",model:e.seo,"label-width":"84px"},{default:f((()=>[g(h,{label:"标题",prop:"title",rules:[{required:!0,message:"请输入网站标题",trigger:"blur"},{min:2,max:20,message:"长度在 2 到 20 个字符",trigger:"blur"}]},{default:f((()=>[g(V,{modelValue:e.seo.title,"onUpdate:modelValue":u[7]||(u[7]=l=>e.seo.title=l)},null,8,["modelValue"])])),_:1}),g(h,{label:"关键词",prop:"keywords"},{default:f((()=>[g(V,{modelValue:e.seo.keywords,"onUpdate:modelValue":u[8]||(u[8]=l=>e.seo.keywords=l)},null,8,["modelValue"])])),_:1}),g(h,{label:"描述",prop:"description",rules:[{min:2,max:255,message:"字数限制255",trigger:"blur"}]},{default:f((()=>[g(V,{type:"textarea",rows:3,class:"textarea",modelValue:e.seo.description,"onUpdate:modelValue":u[9]||(u[9]=l=>e.seo.description=l)},null,8,["modelValue"])])),_:1}),g(h,null,{default:f((()=>[g(j,{type:"primary",onClick:u[10]||(u[10]=e=>b.submitSeo("seo"))},{default:f((()=>[y("保存")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1})])),_:1},8,["modelValue","onTabClick"])])}]]))}}}));
