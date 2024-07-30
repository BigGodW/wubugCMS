import{u as e,v as a,w as l,r as t,s,q as o,x as d,y as m,A as r,B as u,a as i,C as p,D as n,F as c,f,n as g,t as _,G as h,p as V,H as y}from"./element-plus.js";import{f as b}from"./category.js";import{f as v,c as j}from"./article.js";import{s as w}from"./tag.js";import{u as U,a as k}from"./upload.js";import{_ as x,t as C}from"./tinymce.js";import{a as I,t as S,b as D,f as $}from"./index.js";import{r as q,o as A,c as N,a as T,g as z,Z as E,w as F,$ as L,e as O,f as P,X as M,aa as B,v as G}from"./@vue.js";import{_ as H}from"./@qiun.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@element-plus.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./normalize-wheel-es.js";import"./sys_app.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const X={class:"content-wrap"},Z={class:"mr-10 ml-10"},J={class:"mr-10 ml-10 mb-20"},K={class:"cover row"};const Q=H({name:"article-add",components:{Vue3Tinymce:x},data:()=>({setting:C,loading:!0,categorySelected:[],categoryProps:{checkStrictly:!0},activeName:"first",activeIndex:"0",category:[],cateList:[],autoImg:!1,autoDes:!1,picNum:1,taglist:[],params:{cid:0,title:"",short_title:"",tag_id:"",attr:[],seo_title:"",seo_keywords:"",seo_description:"",source:"",author:"",description:"",img:"",createdAt:new Date,updatedAt:new Date,content:"欢迎使用ChanCMS系统",status:"0",pv:1,link:""},field:[],dialogImageUrl:"",dialogVisible:!1,disabled:!1,cur:1,keywords:"",drawer:!1,drawerList:["/public/cover/01.jpg","/public/cover/02.jpg","/public/cover/03.jpg","/public/cover/04.jpg","/public/cover/05.jpg","/public/cover/06.jpg","/public/cover/07.jpg","/public/cover/08.jpg","/public/cover/09.jpg","/public/cover/10.jpg"]}),computed:{},async mounted(){this.setting.images_upload_url=await U()},created(){this.query(),this.searchTag()},unmounted(){},methods:{handleClick(e){this.activeIndex=e.index},setContent(e){this.params.content=e},tinymce(){this.loading=!1},selectCover(e){this.params.img=e},async searchTag(e){try{let a=await w(this.cur,e);if(200===a.code&&a.data){let e=[];a.data.list.forEach((a=>{e.push({label:a.name,value:a.id})})),this.taglist=e}}catch(a){console.log(a)}},async query(){try{let e=await b();if(200===e.code){let a=I(S(e.data)),l=I(e.data);this.cateList=l,this.category=[...a]}}catch(e){console.log(e)}},handleChange(e){console.log(e),-1!=e[0]?(this.params.cid=e[e.length-1],this.findField(this.params.cid)):this.field=[]},handleAttr(e){console.log("e--\x3e",e)},handleSubCid(e){console.log("e--\x3e",e)},beforeUpload(e){return-1===e.type.indexOf("image")?(this.$message("上传文件只能是图片格式"),!1):e.size/1024/1024>.2?(this.$message("上传图片必须小于200k"),!1):void 0},async upload(e){let a=new FormData;a.append("file",e.file);let l=await k(a);console.log("---\x3e",l),200===l.code&&(this.params.img=l.data.path)},async findField(e){try{let a=await v(e);200===a.code&&(this.field=a.data.fields)}catch(a){console.log(a)}},async create(){try{let e={...this.params};e.attr=e.attr.toString(),e.tag_id=e.tag_id.toString(),!e.img&&this.autoImg&&(e.img=D(e.content)[0]),!e.description&&this.autoDes&&(e.description=$(e.content).substr(0,255));let a={};this.field.map((e=>{a[e.field_ename]=e.field_values}));let l=await j({defaultParams:e,fieldParams:a});200==l.code?(this.$message({message:"更新成功^_^",type:"success"}),this.$router.go(-1)):this.$message({message:l.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;0!=this.params.cid?this.create():this.$message({message:"请选择栏目",type:"success"})}))}}},[["render",function(b,v,j,w,U,k){const x=e,C=a,I=l,S=t,D=s,$=o,H=d,Q=m,R=r,W=u,Y=q("MostlyCloudy"),ee=i,ae=p,le=n,te=c,se=f,oe=g,de=_,me=q("vue3-tinymce"),re=h,ue=V,ie=y;return A(),N("div",X,[T("div",Z,[z(C,{modelValue:b.activeName,"onUpdate:modelValue":v[0]||(v[0]=e=>b.activeName=e),onTabClick:k.handleClick},{default:E((()=>[z(x,{label:"基本信息",name:"first"}),z(x,{label:"扩展信息",name:"second"})])),_:1},8,["modelValue","onTabClick"])]),T("div",J,[z(ue,{ref:"params",model:b.params,"label-width":"90px"},{default:E((()=>[F((A(),N("div",null,[z(de,{gutter:20},{default:E((()=>[z(D,{sm:24,md:12},{default:E((()=>[z(S,{label:"文章栏目"},{default:E((()=>[z(I,{props:b.categoryProps,"show-all-levels":!1,modelValue:b.categorySelected,"onUpdate:modelValue":v[1]||(v[1]=e=>b.categorySelected=e),options:b.category,onChange:k.handleChange},null,8,["props","modelValue","options","onChange"])])),_:1})])),_:1}),z(D,{sm:24,md:12},{default:E((()=>[z(S,{label:"文章标题",prop:"title",rules:[{required:!0,message:"请输入文章标题",trigger:"blur"},{min:1,max:100,message:"标题不能超过100个字",trigger:"blur"}]},{default:E((()=>[z($,{modelValue:b.params.title,"onUpdate:modelValue":v[2]||(v[2]=e=>b.params.title=e)},null,8,["modelValue"])])),_:1})])),_:1}),z(D,{sm:24,md:12},{default:E((()=>[z(S,{label:"tag标签"},{default:E((()=>[z(H,{modelValue:b.params.tag_id,"onUpdate:modelValue":v[3]||(v[3]=e=>b.params.tag_id=e),options:b.taglist,placeholder:"请选择标签",style:{width:"240px"},multiple:"",filterable:"",remote:"","remote-method":k.searchTag},null,8,["modelValue","options","remote-method"])])),_:1})])),_:1}),z(D,{sm:24,md:12},{default:E((()=>[z(S,{label:"内容属性"},{default:E((()=>[z(R,{modelValue:b.params.attr,"onUpdate:modelValue":v[4]||(v[4]=e=>b.params.attr=e),onChange:k.handleAttr},{default:E((()=>[z(Q,{label:"1"},{default:E((()=>[L("头条")])),_:1}),z(Q,{label:"2"},{default:E((()=>[L("推荐")])),_:1}),z(Q,{label:"3"},{default:E((()=>[L("轮播")])),_:1}),z(Q,{label:"4"},{default:E((()=>[L("热门")])),_:1})])),_:1},8,["modelValue","onChange"])])),_:1})])),_:1}),z(D,{sm:24,md:12},{default:E((()=>[z(S,{label:"发布时间"},{default:E((()=>[z(W,{modelValue:b.params.createdAt,"onUpdate:modelValue":v[5]||(v[5]=e=>b.params.createdAt=e),"default-value":new Date,type:"datetime",placeholder:"选择日期时间"},null,8,["modelValue","default-value"])])),_:1})])),_:1}),z(D,{sm:24,md:12},{default:E((()=>[z(S,{class:"row",label:"缩略图"},{default:E((()=>[z(le,{class:"avatar-uploader","http-request":k.upload,"show-file-list":!1,"before-upload":k.beforeUpload},{default:E((()=>[z(ae,{placement:"top-start",title:"上传",width:200,trigger:"hover",content:"上传图片作为封面图，大小200k内"},{reference:E((()=>[z(ee,{class:"avatar-uploader-icon"},{default:E((()=>[z(Y)])),_:1})])),_:1})])),_:1},8,["http-request","before-upload"]),b.params.img?(A(),O(ae,{key:0,placement:"right",width:400,trigger:"hover"},{reference:E((()=>[z(te,{class:"avatar-uploader-icon pointer ml-10",src:b.params.img},null,8,["src"])])),default:E((()=>[z(te,{style:{width:"100%"},src:b.params.img},null,8,["src"])])),_:1})):P("",!0),z(se,{type:"primary",class:"ml-10",onClick:v[6]||(v[6]=e=>b.drawer=!0)},{default:E((()=>[L(" 默认封面图 ")])),_:1}),z(oe,{modelValue:b.drawer,"onUpdate:modelValue":v[7]||(v[7]=e=>b.drawer=e),title:"默认封面图",class:"w-300","with-header":!1},{default:E((()=>[T("div",K,[(A(!0),N(M,null,B(b.drawerList,((e,a)=>(A(),O(te,{key:a,src:e,onClick:a=>k.selectCover(e),fit:"cover"},null,8,["src","onClick"])))),128))])])),_:1},8,["modelValue"]),z($,{class:"ml-10 flex-1",modelValue:b.params.img,"onUpdate:modelValue":v[8]||(v[8]=e=>b.params.img=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),z(S,{label:"内容摘要"},{default:E((()=>[z($,{type:"textarea",rows:2,placeholder:"请输入内容",modelValue:b.params.description,"onUpdate:modelValue":v[9]||(v[9]=e=>b.params.description=e)},null,8,["modelValue"])])),_:1}),z(S,{label:"文章内容"},{default:E((()=>[z(me,{modelValue:b.params.content,"onUpdate:modelValue":v[10]||(v[10]=e=>b.params.content=e),setting:b.setting,onInit:k.tinymce,"script-src":"/public/admin/tinymce/tinymce.min.js"},null,8,["modelValue","setting","onInit"])])),_:1}),z(de,{gutter:20},{default:E((()=>[z(D,{sm:24,md:12,lg:8},{default:E((()=>[z(S,{label:"自动封面"},{default:E((()=>[z(Q,{modelValue:b.autoImg,"onUpdate:modelValue":v[12]||(v[12]=e=>b.autoImg=e)},{default:E((()=>[L(" 文章第 "),z($,{modelValue:b.picNum,"onUpdate:modelValue":v[11]||(v[11]=e=>b.picNum=e),class:"w-80 mr-8 ml-8",placeholder:"请输入内容"},null,8,["modelValue"]),L("张图 ")])),_:1},8,["modelValue"])])),_:1})])),_:1}),z(D,{sm:24,md:12,lg:8},{default:E((()=>[z(S,{label:"提取描述"},{default:E((()=>[z(Q,{modelValue:b.autoDes,"onUpdate:modelValue":v[13]||(v[13]=e=>b.autoDes=e)},{default:E((()=>[L("提取文章描述")])),_:1},8,["modelValue"])])),_:1})])),_:1}),z(D,{sm:24,md:12,lg:8},{default:E((()=>[z(S,{label:"是否显示"},{default:E((()=>[z(re,{modelValue:b.params.status,"onUpdate:modelValue":v[14]||(v[14]=e=>b.params.status=e),value:"0"},{default:E((()=>[L("发布")])),_:1},8,["modelValue"]),z(re,{modelValue:b.params.status,"onUpdate:modelValue":v[15]||(v[15]=e=>b.params.status=e),value:"1"},{default:E((()=>[L("不发布")])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1})])),[[G,0==b.activeIndex],[ie,b.loading]]),F(T("div",null,[z(de,{gutter:20},{default:E((()=>[z(D,{sm:24,md:12},{default:E((()=>[z(S,{label:"短标题",prop:"name"},{default:E((()=>[z($,{modelValue:b.params.short_title,"onUpdate:modelValue":v[16]||(v[16]=e=>b.params.short_title=e)},null,8,["modelValue"])])),_:1})])),_:1}),z(D,{sm:24,md:12},{default:E((()=>[z(S,{label:"SEO标题"},{default:E((()=>[z($,{modelValue:b.params.seo_title,"onUpdate:modelValue":v[17]||(v[17]=e=>b.params.seo_title=e)},null,8,["modelValue"])])),_:1})])),_:1}),z(D,{sm:24,md:12},{default:E((()=>[z(S,{label:"SEO关键词"},{default:E((()=>[z($,{modelValue:b.params.seo_keywords,"onUpdate:modelValue":v[18]||(v[18]=e=>b.params.seo_keywords=e)},null,8,["modelValue"])])),_:1})])),_:1}),z(D,{sm:24,md:12},{default:E((()=>[z(S,{label:"SEO描述"},{default:E((()=>[z($,{modelValue:b.params.seo_description,"onUpdate:modelValue":v[19]||(v[19]=e=>b.params.seo_description=e)},null,8,["modelValue"])])),_:1})])),_:1}),z(D,{sm:24,md:12},{default:E((()=>[z(S,{label:"来源"},{default:E((()=>[z($,{modelValue:b.params.source,"onUpdate:modelValue":v[20]||(v[20]=e=>b.params.source=e)},null,8,["modelValue"])])),_:1})])),_:1}),z(D,{sm:24,md:12},{default:E((()=>[z(S,{label:"作者"},{default:E((()=>[z($,{modelValue:b.params.author,"onUpdate:modelValue":v[21]||(v[21]=e=>b.params.author=e)},null,8,["modelValue"])])),_:1})])),_:1}),z(D,{sm:24,md:12},{default:E((()=>[z(S,{label:"外链跳转"},{default:E((()=>[z($,{modelValue:b.params.link,"onUpdate:modelValue":v[22]||(v[22]=e=>b.params.link=e),max:"120"},null,8,["modelValue"])])),_:1})])),_:1}),(A(!0),N(M,null,B(b.field,((e,a)=>(A(),O(D,{sm:24,md:12,lg:8,key:a},{default:E((()=>[z(S,{label:e.field_cname},{default:E((()=>["1"===e.field_type?(A(),O($,{key:0,modelValue:e.field_values,"onUpdate:modelValue":a=>e.field_values=a,max:"120"},null,8,["modelValue","onUpdate:modelValue"])):"2"===e.field_type?(A(),O($,{key:1,type:"textarea",rows:3,placeholder:"请输入内容",modelValue:e.field_values,"onUpdate:modelValue":a=>e.field_values=a},null,8,["modelValue","onUpdate:modelValue"])):(A(),O($,{key:2,type:"textarea",rows:3,placeholder:"请输入内容",autosize:"false",modelValue:e.field_values,"onUpdate:modelValue":a=>e.field_values=a},null,8,["modelValue","onUpdate:modelValue"]))])),_:2},1032,["label"])])),_:2},1024)))),128)),z(D,{sm:24,md:12},{default:E((()=>[z(S,{label:"浏览数"},{default:E((()=>[z($,{modelValue:b.params.pv,"onUpdate:modelValue":v[23]||(v[23]=e=>b.params.pv=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})],512),[[G,1==b.activeIndex]]),z(S,null,{default:E((()=>[z(se,{type:"primary",onClick:v[24]||(v[24]=e=>k.submit("params"))},{default:E((()=>[L("保存")])),_:1})])),_:1})])),_:1},8,["model"])])])}],["__scopeId","data-v-9084371d"]]);export{Q as default};
