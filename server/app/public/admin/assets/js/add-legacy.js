System.register(["./element-plus-legacy.js","./category-legacy.js","./article-legacy.js","./tag-legacy.js","./upload-legacy.js","./tinymce-legacy.js","./index-legacy.js","./@vue-legacy.js","./@qiun-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./@vueuse-legacy.js","./dayjs-legacy.js","./@element-plus-legacy.js","./@ctrl-legacy.js","./@popperjs-legacy.js","./memoize-one-legacy.js","./normalize-wheel-es-legacy.js","./sys_app-legacy.js","./pinia-legacy.js","./pinia-plugin-persist-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./js-cookie-legacy.js","./saduocss-legacy.js"],(function(e,a){"use strict";var l,t,d,s,o,u,m,r,i,n,c,p,g,f,_,h,y,V,v,b,w,j,U,x,k,C,I,S,D,$,q,A,N,T,E,z,F,L,O,P,M,B,G,H,X,Z;return{setters:[e=>{l=e.u,t=e.v,d=e.w,s=e.r,o=e.s,u=e.q,m=e.x,r=e.y,i=e.A,n=e.B,c=e.a,p=e.C,g=e.D,f=e.F,_=e.f,h=e.n,y=e.t,V=e.G,v=e.p,b=e.H},e=>{w=e.f},e=>{j=e.f,U=e.c},e=>{x=e.s},e=>{k=e.u,C=e.a},e=>{I=e._,S=e.t},e=>{D=e.a,$=e.t,q=e.b,A=e.f},e=>{N=e.r,T=e.o,E=e.c,z=e.a,F=e.g,L=e.Z,O=e.w,P=e.$,M=e.e,B=e.f,G=e.X,H=e.aa,X=e.v},e=>{Z=e._},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var a=document.createElement("style");a.textContent="[data-v-9084371d] .tiny-textarea{height:436px}.cover div[data-v-9084371d]{width:120px;height:90px;margin:5px;cursor:pointer}.w-300[data-v-9084371d]{width:300px!important}[data-v-9084371d] .el-drawer{width:280px!important}[data-v-9084371d] .el-drawer__body{padding:0}\n",document.head.appendChild(a);const J={class:"content-wrap"},K={class:"mr-10 ml-10"},Q={class:"mr-10 ml-10 mb-20"},R={class:"cover row"};e("default",Z({name:"article-add",components:{Vue3Tinymce:I},data:()=>({setting:S,loading:!0,categorySelected:[],categoryProps:{checkStrictly:!0},activeName:"first",activeIndex:"0",category:[],cateList:[],autoImg:!1,autoDes:!1,picNum:1,taglist:[],params:{cid:0,title:"",short_title:"",tag_id:"",attr:[],seo_title:"",seo_keywords:"",seo_description:"",source:"",author:"",description:"",img:"",createdAt:new Date,updatedAt:new Date,content:"欢迎使用ChanCMS系统",status:"0",pv:1,link:""},field:[],dialogImageUrl:"",dialogVisible:!1,disabled:!1,cur:1,keywords:"",drawer:!1,drawerList:["/public/cover/01.jpg","/public/cover/02.jpg","/public/cover/03.jpg","/public/cover/04.jpg","/public/cover/05.jpg","/public/cover/06.jpg","/public/cover/07.jpg","/public/cover/08.jpg","/public/cover/09.jpg","/public/cover/10.jpg"]}),computed:{},async mounted(){this.setting.images_upload_url=await k()},created(){this.query(),this.searchTag()},unmounted(){},methods:{handleClick(e){this.activeIndex=e.index},setContent(e){this.params.content=e},tinymce(){this.loading=!1},selectCover(e){this.params.img=e},async searchTag(e){try{let a=await x(this.cur,e);if(200===a.code&&a.data){let e=[];a.data.list.forEach((a=>{e.push({label:a.name,value:a.id})})),this.taglist=e}}catch(a){console.log(a)}},async query(){try{let e=await w();if(200===e.code){let a=D($(e.data)),l=D(e.data);this.cateList=l,this.category=[...a]}}catch(e){console.log(e)}},handleChange(e){console.log(e),-1!=e[0]?(this.params.cid=e[e.length-1],this.findField(this.params.cid)):this.field=[]},handleAttr(e){console.log("e--\x3e",e)},handleSubCid(e){console.log("e--\x3e",e)},beforeUpload(e){return-1===e.type.indexOf("image")?(this.$message("上传文件只能是图片格式"),!1):e.size/1024/1024>.2?(this.$message("上传图片必须小于200k"),!1):void 0},async upload(e){let a=new FormData;a.append("file",e.file);let l=await C(a);console.log("---\x3e",l),200===l.code&&(this.params.img=l.data.path)},async findField(e){try{let a=await j(e);200===a.code&&(this.field=a.data.fields)}catch(a){console.log(a)}},async create(){try{let e={...this.params};e.attr=e.attr.toString(),e.tag_id=e.tag_id.toString(),!e.img&&this.autoImg&&(e.img=q(e.content)[0]),!e.description&&this.autoDes&&(e.description=A(e.content).substr(0,255));let a={};this.field.map((e=>{a[e.field_ename]=e.field_values}));let l=await U({defaultParams:e,fieldParams:a});200==l.code?(this.$message({message:"更新成功^_^",type:"success"}),this.$router.go(-1)):this.$message({message:l.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;0!=this.params.cid?this.create():this.$message({message:"请选择栏目",type:"success"})}))}}},[["render",function(e,a,w,j,U,x){const k=l,C=t,I=d,S=s,D=o,$=u,q=m,A=r,Z=i,W=n,Y=N("MostlyCloudy"),ee=c,ae=p,le=g,te=f,de=_,se=h,oe=y,ue=N("vue3-tinymce"),me=V,re=v,ie=b;return T(),E("div",J,[z("div",K,[F(C,{modelValue:e.activeName,"onUpdate:modelValue":a[0]||(a[0]=a=>e.activeName=a),onTabClick:x.handleClick},{default:L((()=>[F(k,{label:"基本信息",name:"first"}),F(k,{label:"扩展信息",name:"second"})])),_:1},8,["modelValue","onTabClick"])]),z("div",Q,[F(re,{ref:"params",model:e.params,"label-width":"90px"},{default:L((()=>[O((T(),E("div",null,[F(oe,{gutter:20},{default:L((()=>[F(D,{sm:24,md:12},{default:L((()=>[F(S,{label:"文章栏目"},{default:L((()=>[F(I,{props:e.categoryProps,"show-all-levels":!1,modelValue:e.categorySelected,"onUpdate:modelValue":a[1]||(a[1]=a=>e.categorySelected=a),options:e.category,onChange:x.handleChange},null,8,["props","modelValue","options","onChange"])])),_:1})])),_:1}),F(D,{sm:24,md:12},{default:L((()=>[F(S,{label:"文章标题",prop:"title",rules:[{required:!0,message:"请输入文章标题",trigger:"blur"},{min:1,max:100,message:"标题不能超过100个字",trigger:"blur"}]},{default:L((()=>[F($,{modelValue:e.params.title,"onUpdate:modelValue":a[2]||(a[2]=a=>e.params.title=a)},null,8,["modelValue"])])),_:1})])),_:1}),F(D,{sm:24,md:12},{default:L((()=>[F(S,{label:"tag标签"},{default:L((()=>[F(q,{modelValue:e.params.tag_id,"onUpdate:modelValue":a[3]||(a[3]=a=>e.params.tag_id=a),options:e.taglist,placeholder:"请选择标签",style:{width:"240px"},multiple:"",filterable:"",remote:"","remote-method":x.searchTag},null,8,["modelValue","options","remote-method"])])),_:1})])),_:1}),F(D,{sm:24,md:12},{default:L((()=>[F(S,{label:"内容属性"},{default:L((()=>[F(Z,{modelValue:e.params.attr,"onUpdate:modelValue":a[4]||(a[4]=a=>e.params.attr=a),onChange:x.handleAttr},{default:L((()=>[F(A,{label:"1"},{default:L((()=>[P("头条")])),_:1}),F(A,{label:"2"},{default:L((()=>[P("推荐")])),_:1}),F(A,{label:"3"},{default:L((()=>[P("轮播")])),_:1}),F(A,{label:"4"},{default:L((()=>[P("热门")])),_:1})])),_:1},8,["modelValue","onChange"])])),_:1})])),_:1}),F(D,{sm:24,md:12},{default:L((()=>[F(S,{label:"发布时间"},{default:L((()=>[F(W,{modelValue:e.params.createdAt,"onUpdate:modelValue":a[5]||(a[5]=a=>e.params.createdAt=a),"default-value":new Date,type:"datetime",placeholder:"选择日期时间"},null,8,["modelValue","default-value"])])),_:1})])),_:1}),F(D,{sm:24,md:12},{default:L((()=>[F(S,{class:"row",label:"缩略图"},{default:L((()=>[F(le,{class:"avatar-uploader","http-request":x.upload,"show-file-list":!1,"before-upload":x.beforeUpload},{default:L((()=>[F(ae,{placement:"top-start",title:"上传",width:200,trigger:"hover",content:"上传图片作为封面图，大小200k内"},{reference:L((()=>[F(ee,{class:"avatar-uploader-icon"},{default:L((()=>[F(Y)])),_:1})])),_:1})])),_:1},8,["http-request","before-upload"]),e.params.img?(T(),M(ae,{key:0,placement:"right",width:400,trigger:"hover"},{reference:L((()=>[F(te,{class:"avatar-uploader-icon pointer ml-10",src:e.params.img},null,8,["src"])])),default:L((()=>[F(te,{style:{width:"100%"},src:e.params.img},null,8,["src"])])),_:1})):B("",!0),F(de,{type:"primary",class:"ml-10",onClick:a[6]||(a[6]=a=>e.drawer=!0)},{default:L((()=>[P(" 默认封面图 ")])),_:1}),F(se,{modelValue:e.drawer,"onUpdate:modelValue":a[7]||(a[7]=a=>e.drawer=a),title:"默认封面图",class:"w-300","with-header":!1},{default:L((()=>[z("div",R,[(T(!0),E(G,null,H(e.drawerList,((e,a)=>(T(),M(te,{key:a,src:e,onClick:a=>x.selectCover(e),fit:"cover"},null,8,["src","onClick"])))),128))])])),_:1},8,["modelValue"]),F($,{class:"ml-10 flex-1",modelValue:e.params.img,"onUpdate:modelValue":a[8]||(a[8]=a=>e.params.img=a)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),F(S,{label:"内容摘要"},{default:L((()=>[F($,{type:"textarea",rows:2,placeholder:"请输入内容",modelValue:e.params.description,"onUpdate:modelValue":a[9]||(a[9]=a=>e.params.description=a)},null,8,["modelValue"])])),_:1}),F(S,{label:"文章内容"},{default:L((()=>[F(ue,{modelValue:e.params.content,"onUpdate:modelValue":a[10]||(a[10]=a=>e.params.content=a),setting:e.setting,onInit:x.tinymce,"script-src":"/public/admin/tinymce/tinymce.min.js"},null,8,["modelValue","setting","onInit"])])),_:1}),F(oe,{gutter:20},{default:L((()=>[F(D,{sm:24,md:12,lg:8},{default:L((()=>[F(S,{label:"自动封面"},{default:L((()=>[F(A,{modelValue:e.autoImg,"onUpdate:modelValue":a[12]||(a[12]=a=>e.autoImg=a)},{default:L((()=>[P(" 文章第 "),F($,{modelValue:e.picNum,"onUpdate:modelValue":a[11]||(a[11]=a=>e.picNum=a),class:"w-80 mr-8 ml-8",placeholder:"请输入内容"},null,8,["modelValue"]),P("张图 ")])),_:1},8,["modelValue"])])),_:1})])),_:1}),F(D,{sm:24,md:12,lg:8},{default:L((()=>[F(S,{label:"提取描述"},{default:L((()=>[F(A,{modelValue:e.autoDes,"onUpdate:modelValue":a[13]||(a[13]=a=>e.autoDes=a)},{default:L((()=>[P("提取文章描述")])),_:1},8,["modelValue"])])),_:1})])),_:1}),F(D,{sm:24,md:12,lg:8},{default:L((()=>[F(S,{label:"是否显示"},{default:L((()=>[F(me,{modelValue:e.params.status,"onUpdate:modelValue":a[14]||(a[14]=a=>e.params.status=a),value:"0"},{default:L((()=>[P("发布")])),_:1},8,["modelValue"]),F(me,{modelValue:e.params.status,"onUpdate:modelValue":a[15]||(a[15]=a=>e.params.status=a),value:"1"},{default:L((()=>[P("不发布")])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1})])),[[X,0==e.activeIndex],[ie,e.loading]]),O(z("div",null,[F(oe,{gutter:20},{default:L((()=>[F(D,{sm:24,md:12},{default:L((()=>[F(S,{label:"短标题",prop:"name"},{default:L((()=>[F($,{modelValue:e.params.short_title,"onUpdate:modelValue":a[16]||(a[16]=a=>e.params.short_title=a)},null,8,["modelValue"])])),_:1})])),_:1}),F(D,{sm:24,md:12},{default:L((()=>[F(S,{label:"SEO标题"},{default:L((()=>[F($,{modelValue:e.params.seo_title,"onUpdate:modelValue":a[17]||(a[17]=a=>e.params.seo_title=a)},null,8,["modelValue"])])),_:1})])),_:1}),F(D,{sm:24,md:12},{default:L((()=>[F(S,{label:"SEO关键词"},{default:L((()=>[F($,{modelValue:e.params.seo_keywords,"onUpdate:modelValue":a[18]||(a[18]=a=>e.params.seo_keywords=a)},null,8,["modelValue"])])),_:1})])),_:1}),F(D,{sm:24,md:12},{default:L((()=>[F(S,{label:"SEO描述"},{default:L((()=>[F($,{modelValue:e.params.seo_description,"onUpdate:modelValue":a[19]||(a[19]=a=>e.params.seo_description=a)},null,8,["modelValue"])])),_:1})])),_:1}),F(D,{sm:24,md:12},{default:L((()=>[F(S,{label:"来源"},{default:L((()=>[F($,{modelValue:e.params.source,"onUpdate:modelValue":a[20]||(a[20]=a=>e.params.source=a)},null,8,["modelValue"])])),_:1})])),_:1}),F(D,{sm:24,md:12},{default:L((()=>[F(S,{label:"作者"},{default:L((()=>[F($,{modelValue:e.params.author,"onUpdate:modelValue":a[21]||(a[21]=a=>e.params.author=a)},null,8,["modelValue"])])),_:1})])),_:1}),F(D,{sm:24,md:12},{default:L((()=>[F(S,{label:"外链跳转"},{default:L((()=>[F($,{modelValue:e.params.link,"onUpdate:modelValue":a[22]||(a[22]=a=>e.params.link=a),max:"120"},null,8,["modelValue"])])),_:1})])),_:1}),(T(!0),E(G,null,H(e.field,((e,a)=>(T(),M(D,{sm:24,md:12,lg:8,key:a},{default:L((()=>[F(S,{label:e.field_cname},{default:L((()=>["1"===e.field_type?(T(),M($,{key:0,modelValue:e.field_values,"onUpdate:modelValue":a=>e.field_values=a,max:"120"},null,8,["modelValue","onUpdate:modelValue"])):"2"===e.field_type?(T(),M($,{key:1,type:"textarea",rows:3,placeholder:"请输入内容",modelValue:e.field_values,"onUpdate:modelValue":a=>e.field_values=a},null,8,["modelValue","onUpdate:modelValue"])):(T(),M($,{key:2,type:"textarea",rows:3,placeholder:"请输入内容",autosize:"false",modelValue:e.field_values,"onUpdate:modelValue":a=>e.field_values=a},null,8,["modelValue","onUpdate:modelValue"]))])),_:2},1032,["label"])])),_:2},1024)))),128)),F(D,{sm:24,md:12},{default:L((()=>[F(S,{label:"浏览数"},{default:L((()=>[F($,{modelValue:e.params.pv,"onUpdate:modelValue":a[23]||(a[23]=a=>e.params.pv=a)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})],512),[[X,1==e.activeIndex]]),F(S,null,{default:L((()=>[F(de,{type:"primary",onClick:a[24]||(a[24]=e=>x.submit("params"))},{default:L((()=>[P("保存")])),_:1})])),_:1})])),_:1},8,["model"])])])}],["__scopeId","data-v-9084371d"]]))}}}));
