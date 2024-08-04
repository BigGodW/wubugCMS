System.register(["./element-plus-legacy.js","./category-legacy.js","./article-legacy.js","./tag-legacy.js","./upload-legacy.js","./tinymce-legacy.js","./index-legacy.js","./@vue-legacy.js","./@qiun-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./@vueuse-legacy.js","./dayjs-legacy.js","./@element-plus-legacy.js","./@ctrl-legacy.js","./@popperjs-legacy.js","./memoize-one-legacy.js","./normalize-wheel-es-legacy.js","./sys_app-legacy.js","./pinia-legacy.js","./pinia-plugin-persist-legacy.js","./vanilla-jsoneditor-legacy.js","./json-source-map-legacy.js","./@fortawesome-legacy.js","./natural-compare-lite-legacy.js","./@codemirror-legacy.js","./@lezer-legacy.js","./crelt-legacy.js","./style-mod-legacy.js","./w3c-keyname-legacy.js","./@replit-legacy.js","./codemirror-wrapped-line-indent-legacy.js","./fast-deep-equal-legacy.js","./fast-uri-legacy.js","./jmespath-legacy.js","./immutable-json-patch-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./js-cookie-legacy.js","./saduocss-legacy.js"],(function(e,l){"use strict";var a,t,d,s,i,o,u,r,n,m,c,p,f,g,h,_,y,v,b,V,w,j,x,U,k,C,I,S,P,A,D,q,N,E,$,O,z,F,T,J,L,R,Z,B,G,H,K,M,X,Q,W,Y,ee;return{setters:[e=>{a=e.s,t=e.t,d=e.u,s=e.r,i=e.v,o=e.q,u=e.w,r=e.x,n=e.y,m=e.A,c=e.a,p=e.B,f=e.C,g=e.D,h=e.f,_=e.n,y=e.F,v=e.G,b=e.H,V=e.I,w=e.J,j=e.p,x=e.K},e=>{U=e.f},e=>{k=e.f,C=e.a,I=e.d,S=e.u},e=>{P=e.s},e=>{A=e.u,D=e.a},e=>{q=e._,N=e.t},e=>{E=e.b,$=e.a,O=e.t,z=e.h,F=e.g,T=e.f},e=>{J=e.r,L=e.o,R=e.c,Z=e.a,B=e.g,G=e.Z,H=e.e,K=e.f,M=e.w,X=e.$,Q=e.X,W=e.aa,Y=e.v},e=>{ee=e._},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var l=document.createElement("style");l.textContent="[data-v-a3ee1a01] .tiny-textarea{height:436px}.cover div[data-v-a3ee1a01]{width:120px;height:90px;margin:5px;cursor:pointer}.w-300[data-v-a3ee1a01]{width:300px!important}[data-v-a3ee1a01] .el-drawer{width:280px!important}[data-v-a3ee1a01] .el-drawer__body{padding:0}.imgs-btn[data-v-a3ee1a01]{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);color:#fff;font-size:20px;cursor:pointer;justify-content:center;align-items:center;gap:30px;display:none;transition:all .3s}.img-item[data-v-a3ee1a01]{position:relative;margin-right:10px;cursor:pointer;overflow:hidden;border-radius:5px;border:1px solid #f2f2f2}.img-item:hover .imgs-btn[data-v-a3ee1a01]{display:flex}.upload-icon[data-v-a3ee1a01]{border:1px dashed #dcdfe6;border-radius:6px;cursor:pointer;position:relative;overflow:hidden;transition:.2s;font-size:28px;color:#8c939d;width:100px;height:100px;text-align:center}\n",document.head.appendChild(l);const le={class:"content-wrap"},ae={class:"mr-10 ml-10"},te={class:"mr-10 ml-10 mb-20"},de={class:"cover row"},se={class:"cover flex align-center"},ie={class:"pos-r img-item"},oe={class:"imgs-btn"};e("default",ee({name:"article-edit",components:{Vue3Tinymce:q},data:()=>({setting:N,loading:!0,categorySelected:[],categoryProps:{checkStrictly:!0},activeName:"first",activeIndex:"0",category:[],cateList:[],autoImg:!1,autoDes:!1,picNum:1,taglist:[],params:{id:0,cid:0,sub_cid:[],title:"",short_title:"",tag_id:"",attr:[],seo_title:"",seo_keywords:"",seo_description:"",source:"",author:"",description:"",img:"",createdAt:new Date,updatedAt:new Date,content:"",status:"0",pv:1,link:""},field:[],fieldParams:{},dialogImageUrl:"",dialogVisible:!1,disabled:!1,paramsRules:{title:[{required:!0,message:"请输入栏目名称",trigger:"blur"},{min:2,max:50,message:"名称长度在 2 到 50 个字符之间",trigger:"blur"}]},cur:1,keywords:"",drawer:!1,drawerList:["/public/cover/01.jpg","/public/cover/02.jpg","/public/cover/03.jpg","/public/cover/04.jpg","/public/cover/05.jpg","/public/cover/06.jpg","/public/cover/07.jpg","/public/cover/08.jpg","/public/cover/09.jpg","/public/cover/10.jpg"]}),computed:{},async mounted(){this.setting.images_upload_url=await A()},async created(){this.params.id=this.$route.params.id,await this.detail(),await this.query(),this.searchTag()},unmounted(){},methods:{tinymce(){this.loading=!1},handleClick(e){this.activeIndex=e.index},setContent(e){this.params.content=e},selectCover(e){this.params.img=e},async searchTag(e){try{let l=await P(this.cur,e,100);if(200===l.code){let e=[];l.data.list.forEach((l=>{e.push({label:l.name,value:l.id})})),this.taglist=e}}catch(l){console.log(l)}},async query(){try{let e=await U();if(200===e.code){let l=e.data,a=E(this.params.cid,l);this.categorySelected=a,this.findField(this.params.cid);let t=$(O(l));this.cateList=$(l),this.category=[...t]}}catch(e){console.log(e)}},handleChange(e){-1!=e[0]?(this.params.cid=e[e.length-1],this.findField(this.params.cid)):this.field=[]},async findField(e){try{let l=await k(e);200===l.code&&(l.data.fields.forEach((e=>{if(e.field_default&&e.field_default.includes("[{")&&e.field_default.includes("options")){e.field_default;let l=JSON.parse(e.field_default);console.log("---\x3e",l.options),e.field_default=l.options||[]}"8"==e.field_type&&(e.field_values=[])})),this.field=l.data.fields,this.field.forEach(((e,l)=>{this.fieldParams[e.field_ename].includes("[{")?e.field_values=JSON.parse(this.fieldParams[e.field_ename]):e.field_values=this.fieldParams[e.field_ename]})),console.log("end---\x3e",this.field))}catch(l){console.log(l)}},async detail(){try{let e=await C(this.params.id);if(200===e.code){let l=e.data;l.content=z(l.content),l.attr=l.attr?l.attr.split(","):[],l.sub_cid=l.sub_cid?l.sub_cid.split(",").map((e=>Number(e))):[],l.tag_id=l.tag_id?l.tag_id.split(",").map((e=>Number(e))):[],l.status=l.status.toString(),l.updatedAt=new Date(l.createdAt),this.params=l,this.fieldParams=l.field,this.loading=!1}}catch(e){console.error(e)}},handleAttr(e){console.log("e--\x3e",e)},handleSubCid(e){console.log("e--\x3e",e)},beforeUpload(e){return-1===e.type.indexOf("image")?(this.$message("上传文件只能是图片格式"),!1):e.size/1024/1024>.2?(this.$message("上传图片必须小于200k"),!1):void 0},async upload(e){let l=new FormData;l.append("file",e.file);let a=await D(l);200===a.code&&(this.params.img=a.data.path)},async uploadPics(e){console.log("file--\x3e",e);const{data:{index:l},file:a}=e;let t=new FormData;t.append("file",a);let d=await D(t);if(console.log("---\x3e",d),200===d.code){const{filename:e,path:a}=d.data;Array.isArray(this.field[l].field_values)?this.field[l].field_values.push({name:e,url:a}):this.field[l].field_values=[{name:e,url:a}],console.log("this.field--\x3e",this.field)}},async toPreview(e){this.dialogImageUrl=e.url,this.dialogVisible=!0},async handleRemove(e){this.field.forEach(((l,a)=>{Array.isArray(l.field_values)&&l.field_values.forEach(((a,t)=>{a.url==e.url&&(this.delfile(e.url),l.field_values.splice(t,1))}))}))},async delfile(e){try{console.log("url-----\x3e",e),await I(e)}catch(l){console.log(l)}},async update(){try{let e={...this.params};e.attr=e.attr.toString(),e.sub_cid=e.sub_cid.toString(),e.tag_id=e.tag_id.toString(),!e.img&&this.autoImg&&(e.img=F(e.content)[0]),!e.description&&this.autoDes&&(e.description=T(e.content).substr(0,255)),this.field.map(((e,l)=>{this.fieldParams[e.field_ename]="object"==typeof e.field_values?JSON.stringify(e.field_values):e.field_values}));let l=await S({...e,field:this.fieldParams});200==l.code?(this.$message({message:"更新成功^_^",type:"success"}),this.$router.go(-1)):this.$message({message:l.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;0!=this.params.cid?this.update():this.$message({message:"请选择栏目",type:"success"})}))}}},[["render",function(e,l,U,k,C,I){const S=a,P=t,A=d,D=s,q=i,N=o,E=u,$=r,O=n,z=m,F=J("MostlyCloudy"),T=c,ee=p,ue=f,re=g,ne=h,me=_,ce=y,pe=J("vue3-tinymce"),fe=v,ge=b,he=V,_e=J("ZoomIn"),ye=J("Delete"),ve=w,be=J("Plus"),Ve=j,we=x;return L(),R("div",le,[Z("div",ae,[B(P,{modelValue:e.activeName,"onUpdate:modelValue":l[0]||(l[0]=l=>e.activeName=l),onTabClick:I.handleClick},{default:G((()=>[B(S,{label:"基本信息",name:"first"}),B(S,{label:"扩展信息",name:"second"}),e.field.length>0?(L(),H(S,{key:0,label:"模型信息",name:"three"})):K("",!0)])),_:1},8,["modelValue","onTabClick"])]),Z("div",te,[M((L(),H(Ve,{ref:"params",model:e.params,"label-width":"90px"},{default:G((()=>[M(Z("div",null,[B(ce,{gutter:20},{default:G((()=>[B(q,{sm:24,md:12},{default:G((()=>[B(D,{label:"文章栏目"},{default:G((()=>[B(A,{props:e.categoryProps,"show-all-levels":!1,modelValue:e.categorySelected,"onUpdate:modelValue":l[1]||(l[1]=l=>e.categorySelected=l),options:e.category,onChange:I.handleChange},null,8,["props","modelValue","options","onChange"])])),_:1})])),_:1}),B(q,{sm:24,md:12},{default:G((()=>[B(D,{label:"文章标题",prop:"title",rules:[{required:!0,message:"请输入文章标题",trigger:"blur"},{min:1,max:100,message:"标题不能超过100个字",trigger:"blur"}]},{default:G((()=>[B(N,{modelValue:e.params.title,"onUpdate:modelValue":l[2]||(l[2]=l=>e.params.title=l)},null,8,["modelValue"])])),_:1})])),_:1}),B(q,{sm:24,md:12},{default:G((()=>[B(D,{label:"tag标签"},{default:G((()=>[B(E,{modelValue:e.params.tag_id,"onUpdate:modelValue":l[3]||(l[3]=l=>e.params.tag_id=l),options:e.taglist,placeholder:"请选择标签",style:{width:"240px"},multiple:"",filterable:"",remote:"","remote-method":I.searchTag},null,8,["modelValue","options","remote-method"])])),_:1})])),_:1}),B(q,{sm:24,md:12},{default:G((()=>[B(D,{label:"内容属性"},{default:G((()=>[B(O,{modelValue:e.params.attr,"onUpdate:modelValue":l[4]||(l[4]=l=>e.params.attr=l),onChange:I.handleAttr},{default:G((()=>[B($,{label:"1"},{default:G((()=>[X("头条")])),_:1}),B($,{label:"2"},{default:G((()=>[X("推荐")])),_:1}),B($,{label:"3"},{default:G((()=>[X("轮播")])),_:1}),B($,{label:"4"},{default:G((()=>[X("热门")])),_:1})])),_:1},8,["modelValue","onChange"])])),_:1})])),_:1}),B(q,{sm:24,md:12},{default:G((()=>[B(D,{label:"发布时间"},{default:G((()=>[B(z,{modelValue:e.params.createdAt,"onUpdate:modelValue":l[5]||(l[5]=l=>e.params.createdAt=l),type:"datetime",placeholder:"选择日期时间"},null,8,["modelValue"])])),_:1})])),_:1}),B(q,{sm:24,md:12},{default:G((()=>[B(D,{class:"flex",label:"缩略图"},{default:G((()=>[B(ue,{class:"avatar-uploader","http-request":I.upload,"show-file-list":!1,"before-upload":I.beforeUpload},{default:G((()=>[B(ee,{placement:"top-start",title:"上传",width:200,trigger:"hover",content:"上传图片作为封面图，大小200k内"},{reference:G((()=>[B(T,{class:"avatar-uploader-icon"},{default:G((()=>[B(F)])),_:1})])),_:1})])),_:1},8,["http-request","before-upload"]),e.params.img?(L(),H(ee,{key:0,placement:"right",width:400,trigger:"hover"},{reference:G((()=>[B(re,{class:"avatar-uploader-icon pointer ml-10",src:e.params.img},null,8,["src"])])),default:G((()=>[B(re,{style:{width:"100%"},src:e.params.img},null,8,["src"])])),_:1})):K("",!0),B(ne,{type:"primary",class:"ml-10",onClick:l[6]||(l[6]=l=>e.drawer=!0)},{default:G((()=>[X(" 默认封面图 ")])),_:1}),B(me,{modelValue:e.drawer,"onUpdate:modelValue":l[7]||(l[7]=l=>e.drawer=l),title:"默认封面图",class:"w-300","with-header":!1},{default:G((()=>[Z("div",de,[(L(!0),R(Q,null,W(e.drawerList,((e,l)=>(L(),H(re,{key:l,src:e,onClick:l=>I.selectCover(e),fit:"cover"},null,8,["src","onClick"])))),128))])])),_:1},8,["modelValue"]),B(N,{class:"ml-10 flex-1",modelValue:e.params.img,"onUpdate:modelValue":l[8]||(l[8]=l=>e.params.img=l)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),B(D,{label:"内容摘要"},{default:G((()=>[B(N,{type:"textarea",rows:2,placeholder:"请输入内容",modelValue:e.params.description,"onUpdate:modelValue":l[9]||(l[9]=l=>e.params.description=l)},null,8,["modelValue"])])),_:1}),B(D,{label:"文章内容"},{default:G((()=>[B(pe,{modelValue:e.params.content,"onUpdate:modelValue":l[10]||(l[10]=l=>e.params.content=l),setting:e.setting,onInit:I.tinymce,"script-src":"/public/admin/tinymce/tinymce.min.js"},null,8,["modelValue","setting","onInit"])])),_:1}),B(ce,{gutter:20},{default:G((()=>[B(q,{sm:24,md:12,lg:8},{default:G((()=>[B(D,{label:"自动封面"},{default:G((()=>[B($,{modelValue:e.autoImg,"onUpdate:modelValue":l[12]||(l[12]=l=>e.autoImg=l)},{default:G((()=>[X(" 文章第 "),B(N,{modelValue:e.picNum,"onUpdate:modelValue":l[11]||(l[11]=l=>e.picNum=l),class:"w-80 mr-8 ml-8",placeholder:"请输入内容"},null,8,["modelValue"]),X("张图 ")])),_:1},8,["modelValue"])])),_:1})])),_:1}),B(q,{sm:24,md:12,lg:8},{default:G((()=>[B(D,{label:"提取描述"},{default:G((()=>[B($,{modelValue:e.autoDes,"onUpdate:modelValue":l[13]||(l[13]=l=>e.autoDes=l)},{default:G((()=>[X("提取文章描述")])),_:1},8,["modelValue"])])),_:1})])),_:1}),B(q,{sm:24,md:12,lg:8},{default:G((()=>[B(D,{label:"是否显示"},{default:G((()=>[B(fe,{modelValue:e.params.status,"onUpdate:modelValue":l[14]||(l[14]=l=>e.params.status=l),value:"0"},{default:G((()=>[X("发布")])),_:1},8,["modelValue"]),B(fe,{modelValue:e.params.status,"onUpdate:modelValue":l[15]||(l[15]=l=>e.params.status=l),value:"1"},{default:G((()=>[X("不发布")])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1})],512),[[Y,0==e.activeIndex]]),M(Z("div",null,[B(ce,{gutter:20},{default:G((()=>[B(q,{sm:24,md:12},{default:G((()=>[B(D,{label:"短标题",prop:"name"},{default:G((()=>[B(N,{modelValue:e.params.short_title,"onUpdate:modelValue":l[16]||(l[16]=l=>e.params.short_title=l)},null,8,["modelValue"])])),_:1})])),_:1}),B(q,{sm:24,md:12},{default:G((()=>[B(D,{label:"SEO标题"},{default:G((()=>[B(N,{modelValue:e.params.seo_title,"onUpdate:modelValue":l[17]||(l[17]=l=>e.params.seo_title=l)},null,8,["modelValue"])])),_:1})])),_:1}),B(q,{sm:24,md:12},{default:G((()=>[B(D,{label:"SEO关键词"},{default:G((()=>[B(N,{modelValue:e.params.seo_keywords,"onUpdate:modelValue":l[18]||(l[18]=l=>e.params.seo_keywords=l)},null,8,["modelValue"])])),_:1})])),_:1}),B(q,{sm:24,md:12},{default:G((()=>[B(D,{label:"SEO描述"},{default:G((()=>[B(N,{modelValue:e.params.seo_description,"onUpdate:modelValue":l[19]||(l[19]=l=>e.params.seo_description=l)},null,8,["modelValue"])])),_:1})])),_:1}),B(q,{sm:24,md:12},{default:G((()=>[B(D,{label:"来源"},{default:G((()=>[B(N,{modelValue:e.params.source,"onUpdate:modelValue":l[20]||(l[20]=l=>e.params.source=l)},null,8,["modelValue"])])),_:1})])),_:1}),B(q,{sm:24,md:12},{default:G((()=>[B(D,{label:"作者"},{default:G((()=>[B(N,{modelValue:e.params.author,"onUpdate:modelValue":l[21]||(l[21]=l=>e.params.author=l)},null,8,["modelValue"])])),_:1})])),_:1}),B(q,{sm:24,md:12},{default:G((()=>[B(D,{label:"外链跳转"},{default:G((()=>[B(N,{modelValue:e.params.link,"onUpdate:modelValue":l[22]||(l[22]=l=>e.params.link=l),max:"120"},null,8,["modelValue"])])),_:1})])),_:1}),B(q,{sm:24,md:12},{default:G((()=>[B(D,{label:"浏览数"},{default:G((()=>[B(N,{modelValue:e.params.pv,"onUpdate:modelValue":l[23]||(l[23]=l=>e.params.pv=l)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})],512),[[Y,1==e.activeIndex]]),M(Z("div",null,[B(ce,{gutter:20},{default:G((()=>[(L(!0),R(Q,null,W(e.field,((a,t)=>(L(),H(q,{key:t,sm:24,md:24,lg:24},{default:G((()=>[["1","7"].includes(a.field_type)?(L(),H(D,{key:0,label:a.field_cname},{default:G((()=>[B(N,{modelValue:a.field_values,"onUpdate:modelValue":e=>a.field_values=e,max:"120"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["label"])):["2","9"].includes(a.field_type)?(L(),H(D,{key:1,label:a.field_cname},{default:G((()=>[B(N,{type:"textarea",rows:4,placeholder:"请输入内容",modelValue:a.field_values,"onUpdate:modelValue":e=>a.field_values=e},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["label"])):["3","4","5"].includes(a.field_type)?(L(),H(D,{key:2,label:a.field_cname},{default:G((()=>[B(he,{modelValue:a.field_values,"onUpdate:modelValue":e=>a.field_values=e,placeholder:"请选择"},{default:G((()=>[(L(!0),R(Q,null,W(a.field_default,(e=>(L(),H(ge,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:2},1032,["label"])):"6"===a.field_type?(L(),H(D,{key:3,label:a.field_cname},{default:G((()=>[B(z,{modelValue:a.field_values,"onUpdate:modelValue":e=>a.field_values=e,"default-value":new Date,type:"datetime",placeholder:"请选择"},null,8,["modelValue","onUpdate:modelValue","default-value"])])),_:2},1032,["label"])):"8"===a.field_type?(L(),H(D,{key:4,label:a.field_cname,class:"flex align-c justify-center"},{default:G((()=>[Z("div",se,[(L(!0),R(Q,null,W(a.field_values,((e,l)=>(L(),R("div",ie,[(L(),H(re,{key:l,src:e.url,fit:"cover"},null,8,["src"])),Z("div",oe,[B(T,{onClick:l=>I.toPreview(e)},{default:G((()=>[B(_e)])),_:2},1032,["onClick"]),B(T,{onClick:l=>I.handleRemove(e)},{default:G((()=>[B(ye)])),_:2},1032,["onClick"])])])))),256))]),B(ve,{modelValue:e.dialogVisible,"onUpdate:modelValue":l[24]||(l[24]=l=>e.dialogVisible=l)},{default:G((()=>[B(re,{"w-full":"",src:e.dialogImageUrl,alt:"Preview Image"},null,8,["src"])])),_:1},8,["modelValue"]),B(ue,{multiple:"","http-request":I.uploadPics,data:{...a,index:t},"before-upload":I.beforeUpload,limit:10,"show-file-list":!1},{default:G((()=>[B(T,{class:"upload-icon"},{default:G((()=>[B(be)])),_:1})])),_:2},1032,["http-request","data","before-upload"])])),_:2},1032,["label"])):K("",!0)])),_:2},1024)))),128))])),_:1})],512),[[Y,2==e.activeIndex&e.field.length>0]]),B(D,null,{default:G((()=>[B(ne,{type:"primary",onClick:l[25]||(l[25]=e=>I.submit("params"))},{default:G((()=>[X("保存")])),_:1})])),_:1})])),_:1},8,["model"])),[[we,e.loading]])])])}],["__scopeId","data-v-a3ee1a01"]]))}}}));
