import{q as a,r as e,G as l,P as s,f as t,s as r,t as m,p as i}from"./element-plus.js";import{d as p,g as o,a as u,u as d}from"./collect.js";import{_ as c}from"./@qiun.js";import{o as n,c as g,g as f,Z as h,a as j,$ as V,e as b,X as _,aa as y,t as T,f as U,p as v,b as k}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@element-plus.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./normalize-wheel-es.js";import"./index.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vanilla-jsoneditor.js";import"./json-source-map.js";import"./@fortawesome.js";import"./natural-compare-lite.js";import"./@codemirror.js";import"./@lezer.js";import"./crelt.js";import"./style-mod.js";import"./w3c-keyname.js";import"./@replit.js";import"./codemirror-wrapped-line-indent.js";import"./fast-deep-equal.js";import"./fast-uri.js";import"./jmespath.js";import"./immutable-json-patch.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const x={name:"collect-edit",data:()=>({activeName:"list",params:{taskName:"",targetUrl:"",listTag:"",startNum:1,endNum:1,increment:1,pages:[],titleTag:"",articleTag:"",charset:"1",parseData:"",status:"1",cid:1},listPages:[],article:{}}),computed:{},mounted(){},async created(){this.params.id=this.$route.params.id,await this.detail()},methods:{async detail(){try{let a=await p(this.params.id);if(200===a.code){let e=a.data;e.pages=e.pages.split(","),this.params=e}}catch(a){console.error(a)}},handleAttr(a){console.log("e--\x3e",a)},handleSubCid(a){console.log("e--\x3e",a)},async getPages(){try{let{targetUrl:a,listTag:e,charset:l}=this.params,s=await o({targetUrl:a,listTag:e,charset:l});if(200==s.code){let e=s.data;const l=/^(.*:\/\/[^\/]+).*$/,t=a.match(l)[1];e[0].includes("http")||(e=e.map((a=>t+a))),this.params.pages=e,this.$message({message:"列表地址获取成功^_^",type:"success"})}}catch(a){console.log(a)}},async getListPages(){try{let{targetUrl:a,startNum:e,endNum:l,increment:s}=this.params,t=[];for(let r=e;r<=l;r+=s){let e=a.replace("${page}",r);t.push(e)}this.listPages=t,this.listPages.map((async(a,e)=>{let{listTag:l,charset:s}=this.params;if(e>0){let e=await o({targetUrl:a,listTag:l,charset:s});200==e.code&&(this.params.pages=[...this.params.pages,...e.data])}}))}catch(a){console.log(a)}},async getArticle(){try{let{taskUrl:a,titleTag:e,articleTag:l,parseData:s,charset:t}=this.params;a=this.params.pages[0]||"";let r=await u({taskUrl:a,titleTag:e,articleTag:l,parseData:s,charset:t});200==r.code&&(this.article=r.data,this.$message({message:"内功获取成功^_^",type:"success"}))}catch(a){console.log(a)}},async update(){try{this.params.pages=this.params.pages.toString();let a=await d(this.params);200==a.code?(this.$message({message:"新增成功^_^",type:"success"}),this.$router.go(-1)):this.$message({message:a.msg,type:"success"})}catch(a){console.log(a)}},submit(a){this.$refs[a].validate((a=>{if(!a)return!1;this.update()}))}}},w=a=>(v("data-v-646246e1"),a=a(),k(),a),N={class:"mb-20 bg-fff pd-20"},q={class:"flex w-full"},$={class:"flex w-full"},P={class:"flex w-full"},C=w((()=>j("span",{class:"ml-5 mr-5"},"至",-1))),z=w((()=>j("span",{class:"ml-5 mr-5"},"每页递增",-1))),D=["href"],A={class:"flex w-full"},L=w((()=>j("p",null,"内容：",-1))),S=["innerHTML"];const H=c(x,[["render",function(p,o,u,d,c,v){const k=a,x=e,w=l,H=s,M=t,B=r,E=m,G=i;return n(),g("div",N,[f(G,{ref:"params",model:p.params,"label-width":"84px"},{default:h((()=>[f(E,{modelValue:p.activeName,"onUpdate:modelValue":o[13]||(o[13]=a=>p.activeName=a),class:"demo-tabs"},{default:h((()=>[f(B,{label:"列表测试",name:"list"},{default:h((()=>[f(x,{label:"任务名称",prop:"taskName",rules:[{required:!0,message:"请输入任务名称",trigger:"blur"}]},{default:h((()=>[f(k,{modelValue:p.params.taskName,"onUpdate:modelValue":o[0]||(o[0]=a=>p.params.taskName=a),placeholder:"例：前端库-chat问答"},null,8,["modelValue"])])),_:1}),f(x,{label:"列表网址",prop:"targetUrl",rules:[{required:!0,message:"请输入匹配网址",trigger:"blur"}]},{default:h((()=>[j("div",q,[f(k,{class:"flex-1",modelValue:p.params.targetUrl,"onUpdate:modelValue":o[1]||(o[1]=a=>p.params.targetUrl=a),placeholder:"/SEO/1_${page}.html"},null,8,["modelValue"])])])),_:1}),f(x,{label:"字符集",prop:"charset",rules:[{required:!0,message:"请选择字符集",trigger:"blur"}]},{default:h((()=>[f(H,{modelValue:p.params.charset,"onUpdate:modelValue":o[2]||(o[2]=a=>p.params.charset=a),class:"ml-4"},{default:h((()=>[f(w,{value:"1",size:"large"},{default:h((()=>[V("uft-8")])),_:1}),f(w,{value:"2",size:"large"},{default:h((()=>[V("gb2312")])),_:1})])),_:1},8,["modelValue"])])),_:1}),f(x,{label:"列表链接",prop:"listTag",rules:[{required:!0,message:"请输入文章列表标签",trigger:"blur"}]},{default:h((()=>[j("div",$,[f(k,{class:"flex-1",modelValue:p.params.listTag,"onUpdate:modelValue":o[3]||(o[3]=a=>p.params.listTag=a),placeholder:"例：.content h4 a"},null,8,["modelValue"]),f(M,{class:"ml-5",type:"primary",onClick:v.getPages},{default:h((()=>[V(" 测试 ")])),_:1},8,["onClick"])])])),_:1}),f(x,{label:"开始页面"},{default:h((()=>[j("div",P,[f(k,{class:"flex-1",modelValue:p.params.startNum,"onUpdate:modelValue":o[4]||(o[4]=a=>p.params.startNum=a)},null,8,["modelValue"]),C,f(k,{class:"flex-1",modelValue:p.params.endNum,"onUpdate:modelValue":o[5]||(o[5]=a=>p.params.endNum=a)},null,8,["modelValue"]),z,f(k,{class:"flex-1 mr-5",modelValue:p.params.increment,"onUpdate:modelValue":o[6]||(o[6]=a=>p.params.increment=a)},null,8,["modelValue"]),f(M,{type:"primary",onClick:v.getListPages},{default:h((()=>[V("测试")])),_:1},8,["onClick"])])])),_:1}),p.listPages.length>0?(n(),b(x,{key:0,label:"列表地址"},{default:h((()=>[(n(!0),g(_,null,y(p.listPages,((a,e)=>(n(),g("p",{class:"mr-30",key:e},T(a),1)))),128))])),_:1})):U("",!0),p.params.pages.length>0?(n(),b(x,{key:1,label:"文章地址"},{default:h((()=>[(n(!0),g(_,null,y(p.params.pages,((a,e)=>(n(),g("p",{class:"mr-30",key:e},T(a),1)))),128))])),_:1})):U("",!0)])),_:1}),f(B,{label:"内容测试",name:"article"},{default:h((()=>[f(x,{label:"目标地址"},{default:h((()=>[j("a",{class:"mr-10",href:p.params.pages[0],target:"_blank"},T(p.params.pages[0]),9,D),V("（默认第一个作为测试） ")])),_:1}),f(x,{label:"文章标题",prop:"titleTag",rules:[{required:!0,message:"请输入文章标题",trigger:"blur"}]},{default:h((()=>[f(k,{class:"flex-1",placeholder:"例：.title",modelValue:p.params.titleTag,"onUpdate:modelValue":o[7]||(o[7]=a=>p.params.titleTag=a)},null,8,["modelValue"])])),_:1}),f(x,{label:"文章内容",prop:"articleTag",rules:[{required:!0,message:"请输入文章内容",trigger:"blur"}]},{default:h((()=>[f(k,{placeholder:"例：.article",modelValue:p.params.articleTag,"onUpdate:modelValue":o[8]||(o[8]=a=>p.params.articleTag=a)},null,8,["modelValue"])])),_:1}),f(x,{label:"处理函数",prop:"parseData",rules:[{required:!0,message:"如果无特殊处理，请直接填写  return data;",trigger:"blur"}]},{default:h((()=>[j("div",A,[f(k,{class:"flex-1",type:"textarea",rows:13,modelValue:p.params.parseData,"onUpdate:modelValue":o[9]||(o[9]=a=>p.params.parseData=a),placeholder:"如果不做任何处理，直接返回data。拿到的文本是变量是data,可以直接js函数可以处理成需要的数据，最终需要返回data。例：\n            data = data.replaceAll('<BR>','<br/>');\n            return data;\n            //或\n            return data;\n            "},null,8,["modelValue"]),f(M,{class:"ml-5",type:"primary",onClick:v.getArticle},{default:h((()=>[V(" 测试 ")])),_:1},8,["onClick"])])])),_:1}),f(x,{class:"show",label:"文章结果"},{default:h((()=>[j("p",null,"标题："+T(p.article.title),1),L,j("div",{innerHTML:p.article.article},null,8,S)])),_:1})])),_:1}),f(B,{label:"保存配置",name:"save"},{default:h((()=>[f(x,{label:"保存栏目",prop:"articleTag",rules:[{required:!0,message:"请输入保存栏目",trigger:"blur"}]},{default:h((()=>[f(k,{modelValue:p.params.cid,"onUpdate:modelValue":o[10]||(o[10]=a=>p.params.cid=a),placeholder:"例：cid"},null,8,["modelValue"])])),_:1}),f(x,{label:"发布状态",prop:"status",rules:[{required:!0,message:"请选择字符集",trigger:"blur"}]},{default:h((()=>[f(H,{modelValue:p.params.status,"onUpdate:modelValue":o[11]||(o[11]=a=>p.params.status=a),class:"ml-4"},{default:h((()=>[f(w,{value:"1",size:"large"},{default:h((()=>[V("草稿")])),_:1}),f(w,{value:"2",size:"large"},{default:h((()=>[V("发布")])),_:1})])),_:1},8,["modelValue"])])),_:1}),f(x,null,{default:h((()=>[f(M,{type:"primary",onClick:o[12]||(o[12]=a=>v.submit("params"))},{default:h((()=>[V("保存")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["model"])])}],["__scopeId","data-v-646246e1"]]);export{H as default};
