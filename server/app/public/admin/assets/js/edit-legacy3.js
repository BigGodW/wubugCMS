System.register(["./element-plus-legacy.js","./collect-legacy.js","./@qiun-legacy.js","./@vue-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./@vueuse-legacy.js","./dayjs-legacy.js","./@element-plus-legacy.js","./@ctrl-legacy.js","./@popperjs-legacy.js","./memoize-one-legacy.js","./normalize-wheel-es-legacy.js","./index-legacy.js","./pinia-legacy.js","./pinia-plugin-persist-legacy.js","./vanilla-jsoneditor-legacy.js","./json-source-map-legacy.js","./@fortawesome-legacy.js","./natural-compare-lite-legacy.js","./@codemirror-legacy.js","./@lezer-legacy.js","./crelt-legacy.js","./style-mod-legacy.js","./w3c-keyname-legacy.js","./@replit-legacy.js","./codemirror-wrapped-line-indent-legacy.js","./fast-deep-equal-legacy.js","./fast-uri-legacy.js","./jmespath-legacy.js","./immutable-json-patch-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./js-cookie-legacy.js","./saduocss-legacy.js"],(function(e,a){"use strict";var l,s,t,r,u,c,d,m,i,n,p,o,g,h,y,f,j,b,_,V,v,T,U,w,k,x;return{setters:[e=>{l=e.q,s=e.r,t=e.G,r=e.P,u=e.f,c=e.u,d=e.v,m=e.p},e=>{i=e.d,n=e.g,p=e.a,o=e.u},e=>{g=e._},e=>{h=e.o,y=e.c,f=e.g,j=e._,b=e.a,_=e.a0,V=e.e,v=e.Y,T=e.ab,U=e.t,w=e.f,k=e.p,x=e.b},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var a=document.createElement("style");a.textContent="[data-v-bc909cd0] .show .el-form-item__content{flex-direction:column;align-items:start}\n",document.head.appendChild(a);const N={name:"collect-edit",data:()=>({activeName:"list",params:{taskName:"",targetUrl:"",listTag:"",startNum:1,endNum:1,increment:1,pages:[],titleTag:"",articleTag:"",charset:"1",parseData:"",status:"1",cid:1},listPages:[],article:{}}),computed:{},mounted(){},async created(){this.params.id=this.$route.params.id,await this.detail()},methods:{async detail(){try{let e=await i(this.params.id);if(200===e.code){let a=e.data;a.pages=a.pages.split(","),this.params=a}}catch(e){console.error(e)}},handleAttr(e){console.log("e--\x3e",e)},handleSubCid(e){console.log("e--\x3e",e)},async getPages(){try{let{targetUrl:e,listTag:a,charset:l}=this.params,s=await n({targetUrl:e,listTag:a,charset:l});if(200==s.code){let a=s.data;const l=/^(.*:\/\/[^\/]+).*$/,t=e.match(l)[1];a[0].includes("http")||(a=a.map((e=>t+e))),this.params.pages=a,this.$message({message:"列表地址获取成功^_^",type:"success"})}}catch(e){console.log(e)}},async getListPages(){try{let{targetUrl:e,startNum:a,endNum:l,increment:s}=this.params,t=[];for(let r=a;r<=l;r+=s){let a=e.replace("${page}",r);t.push(a)}this.listPages=t,this.listPages.map((async(e,a)=>{let{listTag:l,charset:s}=this.params;if(a>0){let a=await n({targetUrl:e,listTag:l,charset:s});200==a.code&&(this.params.pages=[...this.params.pages,...a.data])}}))}catch(e){console.log(e)}},async getArticle(){try{let{taskUrl:e,titleTag:a,articleTag:l,parseData:s,charset:t}=this.params;e=this.params.pages[0]||"";let r=await p({taskUrl:e,titleTag:a,articleTag:l,parseData:s,charset:t});200==r.code&&(this.article=r.data,this.$message({message:"内功获取成功^_^",type:"success"}))}catch(e){console.log(e)}},async update(){try{this.params.pages=this.params.pages.toString();let e=await o(this.params);200==e.code?(this.$message({message:"新增成功^_^",type:"success"}),this.$router.go(-1)):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return!1;this.update()}))}}},q=e=>(k("data-v-bc909cd0"),e=e(),x(),e),C={class:"mb-20 bg-fff pd-20"},P={class:"row w-p100"},$={class:"row w-p100"},z={class:"row w-p100"},D=q((()=>b("span",{class:"ml-5 mr-5"},"至",-1))),A=q((()=>b("span",{class:"ml-5 mr-5"},"每页递增",-1))),L=["href"],S={class:"row w-p100"},E=q((()=>b("p",null,"内容：",-1))),H=["innerHTML"];e("default",g(N,[["render",function(e,a,i,n,p,o){const g=l,k=s,x=t,N=r,q=u,M=c,B=d,G=m;return h(),y("div",C,[f(G,{ref:"params",model:e.params,"label-width":"84px"},{default:j((()=>[f(B,{modelValue:e.activeName,"onUpdate:modelValue":a[13]||(a[13]=a=>e.activeName=a),class:"demo-tabs"},{default:j((()=>[f(M,{label:"列表测试",name:"list"},{default:j((()=>[f(k,{label:"任务名称",prop:"taskName",rules:[{required:!0,message:"请输入任务名称",trigger:"blur"}]},{default:j((()=>[f(g,{modelValue:e.params.taskName,"onUpdate:modelValue":a[0]||(a[0]=a=>e.params.taskName=a),placeholder:"例：前端库-chat问答"},null,8,["modelValue"])])),_:1}),f(k,{label:"列表网址",prop:"targetUrl",rules:[{required:!0,message:"请输入匹配网址",trigger:"blur"}]},{default:j((()=>[b("div",P,[f(g,{class:"flex-1",modelValue:e.params.targetUrl,"onUpdate:modelValue":a[1]||(a[1]=a=>e.params.targetUrl=a),placeholder:"/SEO/1_${page}.html"},null,8,["modelValue"])])])),_:1}),f(k,{label:"字符集",prop:"charset",rules:[{required:!0,message:"请选择字符集",trigger:"blur"}]},{default:j((()=>[f(N,{modelValue:e.params.charset,"onUpdate:modelValue":a[2]||(a[2]=a=>e.params.charset=a),class:"ml-4"},{default:j((()=>[f(x,{value:"1",size:"large"},{default:j((()=>[_("uft-8")])),_:1}),f(x,{value:"2",size:"large"},{default:j((()=>[_("gb2312")])),_:1})])),_:1},8,["modelValue"])])),_:1}),f(k,{label:"列表链接",prop:"listTag",rules:[{required:!0,message:"请输入文章列表标签",trigger:"blur"}]},{default:j((()=>[b("div",$,[f(g,{class:"flex-1",modelValue:e.params.listTag,"onUpdate:modelValue":a[3]||(a[3]=a=>e.params.listTag=a),placeholder:"例：.content h4 a"},null,8,["modelValue"]),f(q,{class:"ml-5",type:"primary",onClick:o.getPages},{default:j((()=>[_(" 测试 ")])),_:1},8,["onClick"])])])),_:1}),f(k,{label:"开始页面"},{default:j((()=>[b("div",z,[f(g,{class:"flex-1",modelValue:e.params.startNum,"onUpdate:modelValue":a[4]||(a[4]=a=>e.params.startNum=a)},null,8,["modelValue"]),D,f(g,{class:"flex-1",modelValue:e.params.endNum,"onUpdate:modelValue":a[5]||(a[5]=a=>e.params.endNum=a)},null,8,["modelValue"]),A,f(g,{class:"flex-1 mr-5",modelValue:e.params.increment,"onUpdate:modelValue":a[6]||(a[6]=a=>e.params.increment=a)},null,8,["modelValue"]),f(q,{type:"primary",onClick:o.getListPages},{default:j((()=>[_("测试")])),_:1},8,["onClick"])])])),_:1}),e.listPages.length>0?(h(),V(k,{key:0,label:"列表地址"},{default:j((()=>[(h(!0),y(v,null,T(e.listPages,((e,a)=>(h(),y("p",{class:"mr-30",key:a},U(e),1)))),128))])),_:1})):w("",!0),e.params.pages.length>0?(h(),V(k,{key:1,label:"文章地址"},{default:j((()=>[(h(!0),y(v,null,T(e.params.pages,((e,a)=>(h(),y("p",{class:"mr-30",key:a},U(e),1)))),128))])),_:1})):w("",!0)])),_:1}),f(M,{label:"内容测试",name:"article"},{default:j((()=>[f(k,{label:"目标地址"},{default:j((()=>[b("a",{class:"mr-10",href:e.params.pages[0],target:"_blank"},U(e.params.pages[0]),9,L),_("（默认第一个作为测试） ")])),_:1}),f(k,{label:"文章标题",prop:"titleTag",rules:[{required:!0,message:"请输入文章标题",trigger:"blur"}]},{default:j((()=>[f(g,{class:"flex-1",placeholder:"例：.title",modelValue:e.params.titleTag,"onUpdate:modelValue":a[7]||(a[7]=a=>e.params.titleTag=a)},null,8,["modelValue"])])),_:1}),f(k,{label:"文章内容",prop:"articleTag",rules:[{required:!0,message:"请输入文章内容",trigger:"blur"}]},{default:j((()=>[f(g,{placeholder:"例：.article",modelValue:e.params.articleTag,"onUpdate:modelValue":a[8]||(a[8]=a=>e.params.articleTag=a)},null,8,["modelValue"])])),_:1}),f(k,{label:"处理函数",prop:"parseData",rules:[{required:!0,message:"如果无特殊处理，请直接填写  return data;",trigger:"blur"}]},{default:j((()=>[b("div",S,[f(g,{class:"flex-1",type:"textarea",rows:13,modelValue:e.params.parseData,"onUpdate:modelValue":a[9]||(a[9]=a=>e.params.parseData=a),placeholder:"如果不做任何处理，直接返回data。拿到的文本是变量是data,可以直接js函数可以处理成需要的数据，最终需要返回data。例：\n            data = data.replaceAll('<BR>','<br/>');\n            return data;\n            //或\n            return data;\n            "},null,8,["modelValue"]),f(q,{class:"ml-5",type:"primary",onClick:o.getArticle},{default:j((()=>[_(" 测试 ")])),_:1},8,["onClick"])])])),_:1}),f(k,{class:"show",label:"文章结果"},{default:j((()=>[b("p",null,"标题："+U(e.article.title),1),E,b("div",{innerHTML:e.article.article},null,8,H)])),_:1})])),_:1}),f(M,{label:"保存配置",name:"save"},{default:j((()=>[f(k,{label:"保存栏目",prop:"articleTag",rules:[{required:!0,message:"请输入保存栏目",trigger:"blur"}]},{default:j((()=>[f(g,{modelValue:e.params.cid,"onUpdate:modelValue":a[10]||(a[10]=a=>e.params.cid=a),placeholder:"例：cid"},null,8,["modelValue"])])),_:1}),f(k,{label:"发布状态",prop:"status",rules:[{required:!0,message:"请选择字符集",trigger:"blur"}]},{default:j((()=>[f(N,{modelValue:e.params.status,"onUpdate:modelValue":a[11]||(a[11]=a=>e.params.status=a),class:"ml-4"},{default:j((()=>[f(x,{value:"1",size:"large"},{default:j((()=>[_("草稿")])),_:1}),f(x,{value:"2",size:"large"},{default:j((()=>[_("发布")])),_:1})])),_:1},8,["modelValue"])])),_:1}),f(k,null,{default:j((()=>[f(q,{type:"primary",onClick:a[12]||(a[12]=e=>o.submit("params"))},{default:j((()=>[_("保存")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["model"])])}],["__scopeId","data-v-bc909cd0"]]))}}}));
