System.register(["./element-plus-legacy.js","./message-legacy.js","./@qiun-legacy.js","./@vue-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./@vueuse-legacy.js","./dayjs-legacy.js","./@element-plus-legacy.js","./@ctrl-legacy.js","./@popperjs-legacy.js","./memoize-one-legacy.js","./escape-html-legacy.js","./normalize-wheel-es-legacy.js","./index-legacy.js","./pinia-legacy.js","./pinia-plugin-persist-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./js-cookie-legacy.js","./saduocss-legacy.js"],(function(e,s){"use strict";var a,l,t,c,n,r,o,i,m,u,d,p,g;return{setters:[e=>{a=e.f},e=>{l=e.d,t=e.u},e=>{c=e._},e=>{n=e.o,r=e.c,o=e.a,i=e.a1,m=e.t,u=e.g,d=e.$,p=e.p,g=e.d},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var s=document.createElement("style");s.textContent=".w-90[data-v-0f8c6930]{width:90px;display:inline-block}\n",document.head.appendChild(s);const y={name:"message-edit",data:()=>({params:{id:0,name:"",tel:"",wx:"",content:"",company:"",createdAt:""},paramsRules:{name:[{required:!0,message:"请输入栏目名称",trigger:"blur"},{min:2,max:50,message:"名称长度在 2 到 50 个字符之间",trigger:"blur"}]}}),computed:{},mounted(){},async created(){this.params.id=this.$route.params.id,await this.detail()},methods:{async detail(){try{let e=await l(this.params.id);200===e.code?this.params=e.data:this.$message({message:e.msg,type:"success"})}catch(e){console.error(e)}},handleAttr(e){console.log("e--\x3e",e)},handleSubCid(e){console.log("e--\x3e",e)},async update(){try{let e=await t(this.params);200==e.code?(this.$message({message:"更新成功^_^",type:"success"}),this.$router.go(-1)):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},goBack(){this.$router.go(-1)},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.update()}))}}},h=e=>(p("data-v-0f8c6930"),e=e(),g(),e),j={class:"mr-10 ml-10 mb-20 pd-20 content-wrap"},f=h((()=>o("h3",{class:"mb-25 mt-10"},"# 留言内容",-1))),b={class:"pd-10"},x={class:"f-14 mb-15"},w=h((()=>o("span",{class:"bold f-13 w-90 text-r"},"联系姓名：",-1))),v={class:"f-14 mb-15"},$=h((()=>o("span",{class:"bold f-13 w-90 text-r"},"联系电话：",-1))),k={class:"f-14 mb-15"},C=h((()=>o("span",{class:"bold f-13 w-90 text-r"},"公司单位：",-1))),_={class:"f-14 mb-15"},A=h((()=>o("span",{class:"bold f-13 w-90 text-r"},"留言内容：",-1))),q={class:"f-14 mb-15"},z=h((()=>o("span",{class:"bold f-13 w-90 text-r"},"留言时间：",-1)));e("default",c(y,[["render",function(e,s,l,t,c,p){const g=a;return n(),r("div",j,[f,o("div",b,[o("p",x,[w,i(m(e.params.name),1)]),o("p",v,[$,i(m(e.params.tel),1)]),o("p",k,[C,i(m(e.params.company),1)]),o("p",_,[A,i(m(e.params.content),1)]),o("p",q,[z,i(m(e.params.createdAt),1)]),u(g,{class:"ml-25 mt-35",type:"primary",onClick:p.goBack},{default:d((()=>[i("返回")])),_:1},8,["onClick"])])])}],["__scopeId","data-v-0f8c6930"]]))}}}));
