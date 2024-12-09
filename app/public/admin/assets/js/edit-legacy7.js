System.register(["./element-plus-legacy.js","./category-legacy.js","./gather-legacy.js","./index-legacy.js","./@vue-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./dayjs-legacy.js","./@element-plus-legacy.js","./@popperjs-legacy.js","./@ctrl-legacy.js","./memoize-one-legacy.js","./normalize-wheel-es-legacy.js","./pinia-legacy.js","./pinia-plugin-persist-legacy.js","./vanilla-jsoneditor-legacy.js","./json-source-map-legacy.js","./@jsonquerylang-legacy.js","./@fortawesome-legacy.js","./natural-compare-lite-legacy.js","./@codemirror-legacy.js","./@lezer-legacy.js","./crelt-legacy.js","./style-mod-legacy.js","./w3c-keyname-legacy.js","./@replit-legacy.js","./codemirror-wrapped-line-indent-legacy.js","./fast-deep-equal-legacy.js","./fast-uri-legacy.js","./jmespath-legacy.js","./jsonpath-plus-legacy.js","./immutable-json-patch-legacy.js","./jsonrepair-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./js-cookie-legacy.js","./nprogress-legacy.js","./saduocss-legacy.js"],(function(e,a){"use strict";var l,t,s,r,c,n,u,o,i,d,g,p,m,y,h,j,f,_,v,w,b,V,x,U,k;return{setters:[e=>{l=e.s,t=e.t,s=e.f,r=e.x,c=e.H,n=e.R,u=e.T,o=e.r},e=>{i=e.f},e=>{d=e.d,g=e.g,p=e.u},e=>{m=e._,y=e.d,h=e.a,j=e.t},e=>{f=e.o,_=e.c,v=e.M,w=e.Q,b=e.a,V=e.U,x=e.R,U=e.V,k=e.W},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var a=document.createElement("style");a.textContent="[data-v-6fe3995c] .show .el-form-item__content{flex-direction:column;align-items:start}\n/*$vite$:1*/",document.head.appendChild(a);const C={class:"mb-20 bg-fff pd-20"},q={class:"flex w-full"},$={class:"flex w-full"},S={class:"f-15"},D=["innerHTML"];e("default",m({name:"gather-edit",data:()=>({activeName:"list",categorySelected:[],categoryProps:{checkStrictly:!0},category:[],params:{taskName:"",targetUrl:"",parseData:"",status:"1",cid:1},article:{title:"",article:""}}),computed:{},mounted(){},async created(){this.params.id=this.$route.params.id,await this.detail(),await this.query()},methods:{async query(){try{let e=await i();if(200===e.code){let a=e.data,l=y(this.params.cid,a);this.categorySelected=l;let t=h(j(a));this.cateList=h(a),this.category=[...t]}}catch(e){console.log(e)}},handleChange(e){console.log(e),-1!=e[0]&&(this.params.cid=e[e.length-1])},async detail(){try{let e=await d(this.params.id);if(200===e.code){let a=e.data;this.params=a}}catch(e){console.error(e)}},handleAttr(e){console.log("e--\x3e",e)},handleSubCid(e){console.log("e--\x3e",e)},async getArticle(){try{let{targetUrl:e,parseData:a}=this.params,l=await g({targetUrl:e,parseData:a});200==l.code&&(this.article=l.data,this.$message({message:"恭喜你，获取数据成功^_^",type:"success"}))}catch(e){console.log(e)}},async update(){try{let e=await p(this.params);200==e.code?(this.$message({message:"新增成功^_^",type:"success"}),this.$router.go(-1)):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return!1;this.update()}))}}},[["render",function(e,a,i,d,g,p){const m=l,y=t,h=s,j=r,z=c,N=n,A=u,H=o;return f(),_("div",C,[v(H,{ref:"params",model:e.params,"label-width":"84px"},{default:w((()=>[v(y,{label:"任务名称",prop:"taskName",rules:[{required:!0,message:"请输入任务名称",trigger:"blur"}]},{default:w((()=>[v(m,{modelValue:e.params.taskName,"onUpdate:modelValue":a[0]||(a[0]=a=>e.params.taskName=a),placeholder:"例：前端库-chat问答"},null,8,["modelValue"])])),_:1}),v(y,{label:"接口地址",prop:"targetUrl",rules:[{required:!0,message:"请输入匹配网址",trigger:"blur"}]},{default:w((()=>[b("div",q,[v(m,{class:"flex-1",modelValue:e.params.targetUrl,"onUpdate:modelValue":a[1]||(a[1]=a=>e.params.targetUrl=a)},null,8,["modelValue"])])])),_:1}),v(y,{label:"处理函数",prop:"parseData",rules:[{required:!0,message:"请输入内容字段",trigger:"blur"}]},{default:w((()=>[b("div",$,[v(m,{class:"flex-1",type:"textarea",rows:13,modelValue:e.params.parseData,"onUpdate:modelValue":a[2]||(a[2]=a=>e.params.parseData=a),placeholder:"如果不做任何处理，直接返回data。拿到的文本是变量是data,可以直接js函数可以处理成需要的数据，最终需要返回data。例：\n            data.title = data.title;\n            data.article = data.data.news;\n            return data;\n            "},null,8,["modelValue"]),v(h,{class:"ml-5",type:"primary",onClick:p.getArticle},{default:w((()=>a[6]||(a[6]=[V(" 测试 ")]))),_:1},8,["onClick"])])])),_:1}),v(y,{label:"保存栏目",prop:"cid",rules:[{required:!0,message:"请输入保存栏目",trigger:"blur"}]},{default:w((()=>[v(j,{props:e.categoryProps,"show-all-levels":!1,modelValue:e.categorySelected,"onUpdate:modelValue":a[3]||(a[3]=a=>e.categorySelected=a),options:e.category,onChange:p.handleChange},null,8,["props","modelValue","options","onChange"])])),_:1}),v(y,{label:"发布状态",prop:"status",rules:[{required:!0,message:"请选择发布状态",trigger:"blur"}]},{default:w((()=>[v(N,{modelValue:e.params.status,"onUpdate:modelValue":a[4]||(a[4]=a=>e.params.status=a),class:"ml-4"},{default:w((()=>[v(z,{value:"1",size:"large"},{default:w((()=>a[7]||(a[7]=[V("草稿")]))),_:1}),v(z,{value:"2",size:"large"},{default:w((()=>a[8]||(a[8]=[V("发布")]))),_:1})])),_:1},8,["modelValue"])])),_:1}),e.article.title?(f(),x(y,{key:0,label:"采集结果"},{default:w((()=>[v(A,{class:"w-full",shadow:"never"},{header:w((()=>[b("p",S,[a[9]||(a[9]=b("span",{class:"c-999"},"标题：",-1)),V(U(e.article.title),1)])])),default:w((()=>[a[10]||(a[10]=b("p",{class:"f-15"},[b("span",{class:"c-999"},"内容：")],-1)),b("div",{class:"f-15 article",innerHTML:e.article.article},null,8,D)])),_:1})])),_:1})):k("",!0),v(y,null,{default:w((()=>[v(h,{type:"primary",onClick:a[5]||(a[5]=e=>p.submit("params"))},{default:w((()=>a[11]||(a[11]=[V("保存")]))),_:1})])),_:1})])),_:1},8,["model"])])}],["__scopeId","data-v-6fe3995c"]]))}}}));
