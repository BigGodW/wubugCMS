System.register(["./element-plus-legacy.js","./site-legacy.js","./@vue-legacy.js","./index-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./@vueuse-legacy.js","./dayjs-legacy.js","./@element-plus-legacy.js","./@ctrl-legacy.js","./@popperjs-legacy.js","./memoize-one-legacy.js","./escape-html-legacy.js","./normalize-wheel-es-legacy.js","./pinia-legacy.js","./pinia-plugin-persist-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./saduocss-legacy.js"],(function(e,l){"use strict";var a,o,s,t,n,i,d,u,m,c,r,p,y,f,g,V,h,b,j,_;return{setters:[e=>{a=e.D,o=e.o,s=e.I,t=e.F,n=e.p,i=e.q,d=e.f},e=>{u=e.s,m=e.u,c=e.a},e=>{r=e.o,p=e.c,y=e.a,f=e.T,g=e.V,V=e.a0,h=e.a1,b=e.F,j=e.Z},e=>{_=e._},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const l={class:"mr-10 ml-10"},v={class:"mr-10 ml-10"},x={class:"mr-10 ml-10"};e("default",_({name:"home-sys",data:()=>({loading:!0,activeName:"first",activeIndex:"0",info:{id:"",name:"",domain:"",email:"",icp:"",police:"",copyright:"",code:""},seo:{id:"",title:"",keywords:"",description:""},infoRules:{name:[{required:!0,message:"请输入网站名称",trigger:"blur"},{min:2,max:20,message:"长度在 2 到 20 个字符",trigger:"blur"}]},seoRules:{title:[{required:!0,message:"不能为空",trigger:"blur"},{min:2,max:50,message:"长度在 2 到 50 个字符",trigger:"blur"}]}}),computed:{},created(){this.query()},methods:{handleClick(e){this.activeIndex=e.index},async query(){try{let e=await u();if(200===e.code){this.loading=!1;let{id:l,name:a,domain:o,email:s,companyTel:t,companyName:n,companyAddress:i,icp:d,police:u,copyright:m,code:c,title:r,keywords:p,description:y}=e.data;this.info={id:l,name:a,domain:o,email:s,icp:d,police:u,copyright:m,code:c,companyTel:t,companyName:n,companyAddress:i},this.seo={id:l,title:r,keywords:p,description:y}}}catch(e){console.log(e)}},async updateInfo(){try{let e=await m(this.info);200===e.code&&e.data&&(this.$message({message:"更新成功^_^",type:"success"}),this.query())}catch(e){console.log(e)}},async updateSeo(){try{let e=await c(this.seo);200===e.code&&e.data&&(this.$message({message:"更新成功^_^",type:"success"}),this.query())}catch(e){console.log(e)}},submitInfo(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.updateInfo()}))},submitSeo(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.updateSeo()}))}}},[["render",function(e,u,m,c,_,w){const U=t,k=a,I=n,q=i,C=d,N=o,T=s;return r(),p(b,null,[y("div",l,[f(k,{modelValue:e.activeName,"onUpdate:modelValue":u[0]||(u[0]=l=>e.activeName=l),onTabClick:w.handleClick},{default:g((()=>[f(U,{label:"基本设置",name:"first"}),f(U,{label:"SEO设置",name:"second"})])),_:1},8,["modelValue","onTabClick"])]),V((r(),p("div",v,[f(N,{ref:"info",rules:e.infoRules,model:e.info,"label-width":"84px"},{default:g((()=>[f(q,{label:"网站名称",prop:"name"},{default:g((()=>[f(I,{modelValue:e.info.name,"onUpdate:modelValue":u[1]||(u[1]=l=>e.info.name=l)},null,8,["modelValue"])])),_:1}),f(q,{label:"网站域名"},{default:g((()=>[f(I,{modelValue:e.info.domain,"onUpdate:modelValue":u[2]||(u[2]=l=>e.info.domain=l)},null,8,["modelValue"])])),_:1}),f(q,{label:"站长邮箱"},{default:g((()=>[f(I,{modelValue:e.info.email,"onUpdate:modelValue":u[3]||(u[3]=l=>e.info.email=l)},null,8,["modelValue"])])),_:1}),f(q,{label:"ICP备案号"},{default:g((()=>[f(I,{modelValue:e.info.icp,"onUpdate:modelValue":u[4]||(u[4]=l=>e.info.icp=l)},null,8,["modelValue"])])),_:1}),f(q,{label:"公司名称"},{default:g((()=>[f(I,{modelValue:e.info.companyName,"onUpdate:modelValue":u[5]||(u[5]=l=>e.info.companyName=l)},null,8,["modelValue"])])),_:1}),f(q,{label:"公司地址"},{default:g((()=>[f(I,{modelValue:e.info.companyAddress,"onUpdate:modelValue":u[6]||(u[6]=l=>e.info.companyAddress=l)},null,8,["modelValue"])])),_:1}),f(q,{label:"公司电话"},{default:g((()=>[f(I,{modelValue:e.info.companyTel,"onUpdate:modelValue":u[7]||(u[7]=l=>e.info.companyTel=l)},null,8,["modelValue"])])),_:1}),f(q,{label:"统计代码"},{default:g((()=>[f(I,{type:"textarea",class:"textarea",rows:3,modelValue:e.info.code,"onUpdate:modelValue":u[8]||(u[8]=l=>e.info.code=l)},null,8,["modelValue"])])),_:1}),f(q,null,{default:g((()=>[f(C,{type:"primary",onClick:u[9]||(u[9]=e=>w.submitInfo("info"))},{default:g((()=>[j("保存")])),_:1})])),_:1})])),_:1},8,["rules","model"])])),[[h,"0"===e.activeIndex],[T,e.loading]]),V(y("div",x,[f(N,{ref:"seo",model:e.seo,rules:e.seoRules,"label-width":"84px"},{default:g((()=>[f(q,{label:"标题",prop:"title"},{default:g((()=>[f(I,{modelValue:e.seo.title,"onUpdate:modelValue":u[10]||(u[10]=l=>e.seo.title=l)},null,8,["modelValue"])])),_:1}),f(q,{label:"关键词"},{default:g((()=>[f(I,{modelValue:e.seo.keywords,"onUpdate:modelValue":u[11]||(u[11]=l=>e.seo.keywords=l)},null,8,["modelValue"])])),_:1}),f(q,{label:"描述"},{default:g((()=>[f(I,{type:"textarea",rows:3,class:"textarea",modelValue:e.seo.description,"onUpdate:modelValue":u[12]||(u[12]=l=>e.seo.description=l)},null,8,["modelValue"])])),_:1}),f(q,null,{default:g((()=>[f(C,{type:"primary",onClick:u[13]||(u[13]=e=>w.submitSeo("seo"))},{default:g((()=>[j("保存")])),_:1})])),_:1})])),_:1},8,["model","rules"])],512),[[h,"1"===e.activeIndex]])],64)}]]))}}}));
//# sourceMappingURL=sys-legacy.js.map
