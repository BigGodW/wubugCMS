System.register(["./element-plus-legacy.js","./DialogCroper-legacy.js","./category-legacy.js","./article-legacy.js","./tag-legacy.js","./sys_config-legacy.js","./tinymce-legacy.js","./upload-legacy.js","./index-legacy.js","./@vue-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./@vueuse-legacy.js","./dayjs-legacy.js","./@element-plus-legacy.js","./@ctrl-legacy.js","./@popperjs-legacy.js","./memoize-one-legacy.js","./normalize-wheel-es-legacy.js","./vue-cropper-legacy.js","./pinia-legacy.js","./pinia-plugin-persist-legacy.js","./vanilla-jsoneditor-legacy.js","./json-source-map-legacy.js","./@fortawesome-legacy.js","./natural-compare-lite-legacy.js","./@codemirror-legacy.js","./@lezer-legacy.js","./crelt-legacy.js","./style-mod-legacy.js","./w3c-keyname-legacy.js","./@replit-legacy.js","./codemirror-wrapped-line-indent-legacy.js","./fast-deep-equal-legacy.js","./fast-uri-legacy.js","./jmespath-legacy.js","./immutable-json-patch-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./js-cookie-legacy.js","./saduocss-legacy.js"],(function(e,l){"use strict";var a,t,d,s,o,i,u,r,n,c,m,p,g,f,h,y,v,b,V,_,w,j,x,U,k,C,I,D,A,P,S,$,q,T,N,z,F,L,O,R,E,B,J,M,G,H,K,Q,W,Z,X,Y,ee;return{setters:[e=>{a=e.s,t=e.t,d=e.u,s=e.r,o=e.v,i=e.q,u=e.w,r=e.x,n=e.y,c=e.A,m=e.a,p=e.B,g=e.C,f=e.D,h=e.f,y=e.n,v=e.F,b=e.G,V=e.H,_=e.I,w=e.J,j=e.p,x=e.K},e=>{U=e._},e=>{k=e.f},e=>{C=e.d,I=e.f,D=e.c},e=>{A=e.s},e=>{P=e.v},e=>{S=e._,$=e.t},e=>{q=e.u,T=e.a},e=>{N=e._,z=e.b,F=e.t,L=e.g,O=e.f,R=e.c},e=>{E=e.ad,B=e.o,J=e.c,M=e.a,G=e.M,H=e.Q,K=e.R,Q=e.W,W=e._,Z=e.U,X=e.O,Y=e.a8,ee=e.$},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var l=document.createElement("style");l.textContent="[data-v-e288dda2] .tiny-textarea{height:436px}.cover div[data-v-e288dda2]{width:100px;height:100px;cursor:pointer}.w-300[data-v-e288dda2]{width:300px!important}[data-v-e288dda2] .el-drawer{width:280px!important}[data-v-e288dda2] .el-drawer__body{padding:0}.imgs-btn[data-v-e288dda2]{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);color:#fff;font-size:20px;cursor:pointer;justify-content:center;align-items:center;gap:30px;display:none;transition:all .3s}.img-item[data-v-e288dda2]{position:relative;margin-right:10px;cursor:pointer;overflow:hidden;border-radius:5px;border:1px solid #f2f2f2}.img-item:hover .imgs-btn[data-v-e288dda2]{display:flex}.upload-icon[data-v-e288dda2]{border:1px dashed #dcdfe6;border-radius:6px;cursor:pointer;position:relative;overflow:hidden;transition:.2s;font-size:28px;color:#8c939d;width:100px;height:100px;text-align:center}\n",document.head.appendChild(l);const le={class:"content-wrap"},ae={class:"mr-10 ml-10"},te={class:"mr-10 ml-10 mb-20"},de={class:"cover row"},se={class:"cover flex align-center"},oe={class:"pos-r img-item"},ie={class:"imgs-btn"};e("default",N({name:"article-add",components:{Vue3Tinymce:S,DialogCroper:U},data:()=>({setting:$,loading:!0,categorySelected:[],categoryProps:{checkStrictly:!0},activeName:"first",activeIndex:"0",category:[],cateList:[],views:[],autoImg:!1,autoDes:!1,picNum:1,taglist:[],file:null,img:"",params:{cid:0,title:"",shortTitle:"",tagId:"",attr:[],articleView:"",source:"",author:"",description:"",img:"",createdAt:new Date,updatedAt:new Date,content:"欢迎使用ChanCMS系统",status:"0",pv:1,link:""},field:[],dialogImageUrl:"",dialogVisible:!1,disabled:!1,cur:1,keywords:"",drawer:!1,drawerList:["/public/cover/01.jpg","/public/cover/02.jpg","/public/cover/03.jpg","/public/cover/04.jpg","/public/cover/05.jpg","/public/cover/06.jpg","/public/cover/07.jpg","/public/cover/08.jpg","/public/cover/09.jpg","/public/cover/10.jpg"]}),computed:{},async mounted(){this.setting.images_upload_url=await q()},created(){this.query(),this.searchTag(),this.getviews()},unmounted(){},methods:{async getviews(){try{let e=await P();200===e.code&&(this.views=e.data.filter((e=>{if("404.html"!==e&&"500.html"!==e)return!0})).map((e=>({label:e,value:e}))))}catch(e){console.log(e)}},handleClick(e){this.activeIndex=e.index},setContent(e){this.params.content=e},tinymce(){this.loading=!1},selectCover(e){this.params.img=e},async searchTag(e){try{let l=await A(this.cur,e);if(200===l.code&&l.data){let e=[];l.data.list.forEach((l=>{e.push({label:l.name,value:l.id})})),this.taglist=e}}catch(l){console.log(l)}},async query(){try{let e=await k();if(200===e.code){let l=z(F(e.data)),a=z(e.data);this.cateList=a,this.category=[...l]}}catch(e){console.log(e)}},handleChange(e){-1!=e[0]?(this.params.cid=e[e.length-1],this.findField(this.params.cid)):this.field=[]},handleAttr(e){console.log("e--\x3e",e)},handleSubCid(e){console.log("e--\x3e",e)},beforeUpload(e){if(-1===e.type.indexOf("image"))return this.$message("上传文件只能是图片格式"),!1;this.file=e;const l=new FileReader;return l.onload=async e=>{let l;l="object"==typeof e.target.result?window.URL.createObjectURL(new Blob([e.target.result])):e.target.result,this.img=l,this.$refs.dialogCrop.dialogFormVisible=!0},l.readAsArrayBuffer(e),!1},async upload(e=this.file){if(e.size/1024/1024>.2)return this.$message("上传图片必须小于200k"),!1;let l=new FormData;l.append("file",e||this.file);let a=await T(l);200===a.code&&(this.params.img=a.data.path)},beforeUploadPics(e){return-1===e.type.indexOf("image")?(this.$message("上传文件只能是图片格式"),!1):e.size/1024/1024>.2?(this.$message("上传图片必须小于200k"),!1):void 0},async uploadPics(e){const{data:{index:l},file:a}=e;let t=new FormData;t.append("file",a);let d=await T(t);if(200===d.code){const{filename:e,path:a}=d.data;Array.isArray(this.field[l].values)?this.field[l].values.push({name:e,url:a}):this.field[l].values=[{name:e,url:a}]}},async toPreview(e){this.dialogImageUrl=e.url,this.dialogVisible=!0},async handleRemove(e){this.field.forEach(((l,a)=>{Array.isArray(l.values)&&l.values.forEach(((a,t)=>{a.url==e.url&&(this.delfile(e.url),l.values.splice(t,1))}))}))},async delfile(e){try{await C(e)}catch(l){console.log(l)}},async findField(e){try{let l=await I(e);200===l.code&&(l.data.fields.forEach((e=>{if(e.default&&e.default.includes("[{")&&e.default.includes("options")){e.default;let l=JSON.parse(e.default);e.default=l.options||[]}"8"==e.type&&(e.values=[])})),this.field=l.data.fields)}catch(l){console.log(l)}},async create(){try{let e={...this.params};e.attr=e.attr.toString(),e.tagId=e.tagId.toString(),!e.img&&this.autoImg&&(e.img=L(e.content)[0]),!e.description&&this.autoDes&&(e.description=O(e.content).substr(0,255));let l={};this.field.map((e=>{l[e.ename]="object"==typeof e.values?JSON.stringify(e.values):e.values}));let a=await D({defaultParams:e,fieldParams:l});200==a.code?(this.$message({message:"更新成功^_^",type:"success"}),this.$router.go(-1)):this.$message({message:a.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate(((e,l)=>{if(!e)return R(l),!1;0!=this.params.cid?this.create():this.$message({message:"请选择栏目",type:"success"})}))}}},[["render",function(e,l,k,C,I,D){const A=a,P=t,S=d,$=s,q=o,T=i,N=u,z=r,F=n,L=c,O=E("MostlyCloudy"),R=m,ue=p,re=g,ne=f,ce=h,me=y,pe=v,ge=E("vue3-tinymce"),fe=b,he=V,ye=_,ve=E("ZoomIn"),be=E("Delete"),Ve=w,_e=E("Plus"),we=j,je=U,xe=x;return B(),J(X,null,[M("div",le,[M("div",ae,[G(P,{modelValue:e.activeName,"onUpdate:modelValue":l[0]||(l[0]=l=>e.activeName=l),onTabClick:D.handleClick},{default:H((()=>[G(A,{label:"基本信息",name:"first"}),G(A,{label:"扩展信息",name:"second"}),e.field.length>0?(B(),K(A,{key:0,label:"模型信息",name:"three"})):Q("",!0)])),_:1},8,["modelValue","onTabClick"])]),M("div",te,[G(we,{ref:"params",model:e.params,"label-width":"90px"},{default:H((()=>[W((B(),J("div",null,[G(pe,{gutter:20},{default:H((()=>[G(q,{sm:24,md:12},{default:H((()=>[G($,{label:"文章栏目"},{default:H((()=>[G(S,{props:e.categoryProps,"show-all-levels":!1,modelValue:e.categorySelected,"onUpdate:modelValue":l[1]||(l[1]=l=>e.categorySelected=l),options:e.category,onChange:D.handleChange},null,8,["props","modelValue","options","onChange"])])),_:1})])),_:1}),G(q,{sm:24,md:12},{default:H((()=>[G($,{label:"文章标题",prop:"title",rules:[{required:!0,message:"请输入文章标题",trigger:"blur"},{min:1,max:100,message:"标题不能超过100个字",trigger:"blur"}]},{default:H((()=>[G(T,{modelValue:e.params.title,"onUpdate:modelValue":l[2]||(l[2]=l=>e.params.title=l)},null,8,["modelValue"])])),_:1})])),_:1}),G(q,{sm:24,md:12},{default:H((()=>[G($,{label:"tag标签"},{default:H((()=>[G(N,{modelValue:e.params.tagId,"onUpdate:modelValue":l[3]||(l[3]=l=>e.params.tagId=l),options:e.taglist,placeholder:"请选择标签",style:{width:"240px"},multiple:"",filterable:"",remote:"","remote-method":D.searchTag},null,8,["modelValue","options","remote-method"])])),_:1})])),_:1}),G(q,{sm:24,md:12},{default:H((()=>[G($,{label:"内容属性"},{default:H((()=>[G(F,{modelValue:e.params.attr,"onUpdate:modelValue":l[4]||(l[4]=l=>e.params.attr=l),onChange:D.handleAttr},{default:H((()=>[G(z,{label:"1"},{default:H((()=>[Z("头条")])),_:1}),G(z,{label:"2"},{default:H((()=>[Z("推荐")])),_:1}),G(z,{label:"3"},{default:H((()=>[Z("轮播")])),_:1}),G(z,{label:"4"},{default:H((()=>[Z("热门")])),_:1})])),_:1},8,["modelValue","onChange"])])),_:1})])),_:1}),G(q,{sm:24,md:12},{default:H((()=>[G($,{label:"发布时间"},{default:H((()=>[G(L,{modelValue:e.params.createdAt,"onUpdate:modelValue":l[5]||(l[5]=l=>e.params.createdAt=l),"default-value":new Date,type:"datetime",placeholder:"选择日期时间"},null,8,["modelValue","default-value"])])),_:1})])),_:1}),G(q,{sm:24,md:12},{default:H((()=>[G($,{class:"flex",label:"缩略图"},{default:H((()=>[G(re,{class:"avatar-uploader","http-request":D.upload,"show-file-list":!1,"before-upload":D.beforeUpload},{default:H((()=>[G(ue,{placement:"top-start",title:"上传",width:200,trigger:"hover",content:"上传图片作为封面图，大小200k内"},{reference:H((()=>[G(R,{class:"avatar-uploader-icon"},{default:H((()=>[G(O)])),_:1})])),_:1})])),_:1},8,["http-request","before-upload"]),e.params.img?(B(),K(ue,{key:0,placement:"right",width:400,trigger:"hover"},{reference:H((()=>[G(ne,{class:"avatar-uploader-icon pointer ml-10",src:e.params.img},null,8,["src"])])),default:H((()=>[G(ne,{style:{width:"100%"},src:e.params.img},null,8,["src"])])),_:1})):Q("",!0),G(ce,{type:"primary",class:"ml-10",onClick:l[6]||(l[6]=l=>e.drawer=!0)},{default:H((()=>[Z(" 默认封面图 ")])),_:1}),G(me,{modelValue:e.drawer,"onUpdate:modelValue":l[7]||(l[7]=l=>e.drawer=l),title:"默认封面图",class:"w-300","with-header":!1},{default:H((()=>[M("div",de,[(B(!0),J(X,null,Y(e.drawerList,((e,l)=>(B(),K(ne,{key:l,src:e,onClick:l=>D.selectCover(e),fit:"cover"},null,8,["src","onClick"])))),128))])])),_:1},8,["modelValue"]),G(T,{class:"ml-10 flex-1",modelValue:e.params.img,"onUpdate:modelValue":l[8]||(l[8]=l=>e.params.img=l)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),G($,{label:"内容摘要"},{default:H((()=>[G(T,{type:"textarea",rows:2,placeholder:"请输入内容",modelValue:e.params.description,"onUpdate:modelValue":l[9]||(l[9]=l=>e.params.description=l)},null,8,["modelValue"])])),_:1}),G($,{label:"文章内容"},{default:H((()=>[G(ge,{modelValue:e.params.content,"onUpdate:modelValue":l[10]||(l[10]=l=>e.params.content=l),setting:e.setting,onInit:D.tinymce,"script-src":"/public/admin/tinymce/tinymce.min.js"},null,8,["modelValue","setting","onInit"])])),_:1}),G(pe,{gutter:20},{default:H((()=>[G(q,{sm:24,md:12,lg:8},{default:H((()=>[G($,{label:"自动封面"},{default:H((()=>[G(z,{modelValue:e.autoImg,"onUpdate:modelValue":l[12]||(l[12]=l=>e.autoImg=l)},{default:H((()=>[Z(" 文章第 "),G(T,{modelValue:e.picNum,"onUpdate:modelValue":l[11]||(l[11]=l=>e.picNum=l),class:"w-80 mr-8 ml-8",placeholder:"请输入内容"},null,8,["modelValue"]),Z("张图 ")])),_:1},8,["modelValue"])])),_:1})])),_:1}),G(q,{sm:24,md:12,lg:8},{default:H((()=>[G($,{label:"提取描述"},{default:H((()=>[G(z,{modelValue:e.autoDes,"onUpdate:modelValue":l[13]||(l[13]=l=>e.autoDes=l)},{default:H((()=>[Z("提取文章描述")])),_:1},8,["modelValue"])])),_:1})])),_:1}),G(q,{sm:24,md:12,lg:8},{default:H((()=>[G($,{label:"是否显示"},{default:H((()=>[G(fe,{modelValue:e.params.status,"onUpdate:modelValue":l[14]||(l[14]=l=>e.params.status=l),value:"0"},{default:H((()=>[Z("发布")])),_:1},8,["modelValue"]),G(fe,{modelValue:e.params.status,"onUpdate:modelValue":l[15]||(l[15]=l=>e.params.status=l),value:"1"},{default:H((()=>[Z("不发布")])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1})])),[[ee,0==e.activeIndex],[xe,e.loading]]),W(M("div",null,[G(pe,{gutter:20},{default:H((()=>[G(q,{sm:24,md:12},{default:H((()=>[G($,{label:"短标题",prop:"name"},{default:H((()=>[G(T,{modelValue:e.params.shortTitle,"onUpdate:modelValue":l[16]||(l[16]=l=>e.params.shortTitle=l)},null,8,["modelValue"])])),_:1})])),_:1}),G(q,{sm:24,md:12},{default:H((()=>[G($,{label:"内容模板"},{default:H((()=>[G(ye,{modelValue:e.params.articleView,"onUpdate:modelValue":l[17]||(l[17]=l=>e.params.articleView=l),placeholder:"请选择模板"},{default:H((()=>[(B(!0),J(X,null,Y(e.views,(e=>(B(),K(he,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1})])),_:1}),G(q,{sm:24,md:12},{default:H((()=>[G($,{label:"来源"},{default:H((()=>[G(T,{modelValue:e.params.source,"onUpdate:modelValue":l[18]||(l[18]=l=>e.params.source=l)},null,8,["modelValue"])])),_:1})])),_:1}),G(q,{sm:24,md:12},{default:H((()=>[G($,{label:"作者"},{default:H((()=>[G(T,{modelValue:e.params.author,"onUpdate:modelValue":l[19]||(l[19]=l=>e.params.author=l)},null,8,["modelValue"])])),_:1})])),_:1}),G(q,{sm:24,md:12},{default:H((()=>[G($,{label:"外链跳转"},{default:H((()=>[G(T,{modelValue:e.params.link,"onUpdate:modelValue":l[20]||(l[20]=l=>e.params.link=l),max:"120"},null,8,["modelValue"])])),_:1})])),_:1}),G(q,{sm:24,md:12},{default:H((()=>[G($,{label:"浏览数"},{default:H((()=>[G(T,{modelValue:e.params.pv,"onUpdate:modelValue":l[21]||(l[21]=l=>e.params.pv=l)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})],512),[[ee,1==e.activeIndex]]),W(M("div",null,[G(pe,{gutter:20},{default:H((()=>[(B(!0),J(X,null,Y(e.field,((a,t)=>(B(),K(q,{key:t,sm:24,md:24,lg:24},{default:H((()=>[["1","7"].includes(a.type)?(B(),K($,{key:0,label:a.cname},{default:H((()=>[G(T,{modelValue:a.values,"onUpdate:modelValue":e=>a.values=e,max:"120"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["label"])):["2","9"].includes(a.type)?(B(),K($,{key:1,label:a.cname},{default:H((()=>[G(T,{type:"textarea",rows:4,placeholder:"请输入内容",modelValue:a.values,"onUpdate:modelValue":e=>a.values=e},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["label"])):["3","4","5"].includes(a.type)?(B(),K($,{key:2,label:a.cname},{default:H((()=>[G(ye,{modelValue:a.values,"onUpdate:modelValue":e=>a.values=e,placeholder:"请选择"},{default:H((()=>[(B(!0),J(X,null,Y(a.default,(e=>(B(),K(he,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:2},1032,["label"])):"6"===a.type?(B(),K($,{key:3,label:a.cname},{default:H((()=>[G(L,{modelValue:a.values,"onUpdate:modelValue":e=>a.values=e,"default-value":new Date,type:"datetime",placeholder:"请选择"},null,8,["modelValue","onUpdate:modelValue","default-value"])])),_:2},1032,["label"])):"8"===a.type?(B(),K($,{key:4,label:a.cname,class:"flex align-c justify-center"},{default:H((()=>[M("div",se,[(B(!0),J(X,null,Y(a.values,((e,l)=>(B(),J("div",oe,[(B(),K(ne,{key:l,src:e.url,fit:"cover"},null,8,["src"])),M("div",ie,[G(R,{onClick:l=>D.toPreview(e)},{default:H((()=>[G(ve)])),_:2},1032,["onClick"]),G(R,{onClick:l=>D.handleRemove(e)},{default:H((()=>[G(be)])),_:2},1032,["onClick"])])])))),256))]),G(Ve,{modelValue:e.dialogVisible,"onUpdate:modelValue":l[22]||(l[22]=l=>e.dialogVisible=l)},{default:H((()=>[G(ne,{"w-full":"",src:e.dialogImageUrl,alt:"Preview Image"},null,8,["src"])])),_:1},8,["modelValue"]),G(re,{multiple:"","http-request":D.uploadPics,data:{...a,index:t},"before-upload":D.beforeUploadPics,limit:10,"show-file-list":!1},{default:H((()=>[G(R,{class:"upload-icon"},{default:H((()=>[G(_e)])),_:1})])),_:2},1032,["http-request","data","before-upload"])])),_:2},1032,["label"])):Q("",!0)])),_:2},1024)))),128))])),_:1})],512),[[ee,2==e.activeIndex&e.field.length>0]]),G($,null,{default:H((()=>[G(ce,{type:"primary",onClick:l[23]||(l[23]=e=>D.submit("params"))},{default:H((()=>[Z("保存")])),_:1})])),_:1})])),_:1},8,["model"])])]),G(je,{ref:"dialogCrop",img:e.img,file:e.file,onCrop:D.upload},null,8,["img","file","onCrop"])],64)}],["__scopeId","data-v-e288dda2"]]))}}}));
