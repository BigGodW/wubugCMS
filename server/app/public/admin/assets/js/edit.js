import{u as e,v as a,w as l,r as t,s,q as d,x as o,y as i,A as m,B as r,a as u,C as p,D as n,F as c,f,n as g,t as _,G as h,p as V,H as b}from"./element-plus.js";import{f as y}from"./category.js";import{f as v,d as w,u as j}from"./article.js";import{s as U}from"./tag.js";import{u as k}from"./upload.js";import{_ as x,t as C}from"./tinymce.js";import{c as S,a as I,t as A,d as D,b as $,f as q}from"./index.js";import{r as N,o as T,c as F,a as P,g as z,$ as E,w as L,e as O,a1 as B,f as G,Z as H,ac as M,v as R}from"./@vue.js";import{_ as Z}from"./@qiun.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@element-plus.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./escape-html.js";import"./normalize-wheel-es.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const J={class:"content-wrap"},K={class:"mr-10 ml-10"},Q={class:"mr-10 ml-10 mb-20"},W={class:"cover row"};const X=Z({name:"article-edit",components:{Vue3Tinymce:x},data:()=>({setting:C,loading:!0,categorySelected:[],categoryProps:{checkStrictly:!0},activeName:"first",activeIndex:"0",category:[],cateList:[],autoImg:!1,autoDes:!1,picNum:1,taglist:[],params:{id:0,cid:0,sub_cid:[],title:"",short_title:"",tag_id:"",attr:[],seo_title:"",seo_keywords:"",seo_description:"",source:"",author:"",description:"",img:"",createdAt:new Date,updatedAt:new Date,content:"",status:"0",pv:1,link:""},field:[],fieldParams:{},dialogImageUrl:"",dialogVisible:!1,disabled:!1,paramsRules:{title:[{required:!0,message:"请输入栏目名称",trigger:"blur"},{min:2,max:50,message:"名称长度在 2 到 50 个字符之间",trigger:"blur"}]},cur:1,keywords:"",drawer:!1,drawerList:["/public/cover/01.jpg","/public/cover/02.jpg","/public/cover/03.jpg","/public/cover/04.jpg","/public/cover/05.jpg","/public/cover/06.jpg","/public/cover/07.jpg","/public/cover/08.jpg","/public/cover/09.jpg","/public/cover/10.jpg"]}),computed:{},async mounted(){},async created(){this.params.id=this.$route.params.id,await this.detail(),await this.query(),this.searchTag()},unmounted(){},methods:{tinymce(){this.loading=!1},handleClick(e){this.activeIndex=e.index},setContent(e){this.params.content=e},selectCover(e){this.params.img=e},async searchTag(e){try{let a=await U(this.cur,e,100);if(200===a.code){let e=[];a.data.list.forEach((a=>{e.push({label:a.name,value:a.id})})),this.taglist=e}}catch(a){console.log(a)}},async query(){try{let e=await y();if(200===e.code){let a=e.data,l=S(this.params.cid,a);this.categorySelected=l,this.findField(this.params.cid);let t=I(A(a));this.cateList=I(a),this.category=[...t]}}catch(e){console.log(e)}},handleChange(e){-1!=e[0]?(this.params.cid=e[e.length-1],this.findField(this.params.cid)):this.field=[]},async findField(e){try{let a=await v(e);200===a.code&&(this.field=a.data.fields)}catch(a){console.log(a)}},async detail(){try{let e=await w(this.params.id);if(200===e.code){let a=e.data;a.content=D(a.content),a.attr=a.attr?a.attr.split(","):[],a.sub_cid=a.sub_cid?a.sub_cid.split(",").map((e=>Number(e))):[],a.tag_id=a.tag_id?a.tag_id.split(",").map((e=>Number(e))):[],a.status=a.status.toString(),a.updatedAt=new Date(a.createdAt),this.params=a,this.fieldParams=a.field,this.loading=!1}}catch(e){console.error(e)}},handleAttr(e){console.log("e--\x3e",e)},handleSubCid(e){console.log("e--\x3e",e)},beforeUpload(e){return-1===e.type.indexOf("image")?(this.$message("上传文件只能是图片格式"),!1):e.size/1024/1024>.2?(this.$message("上传图片必须小于200k"),!1):void 0},async upload(e){let a=new FormData;a.append("file",e.file);let l=await k(a);200===l.code&&(this.params.img=l.data.path)},async update(){try{let e={...this.params};e.attr=e.attr.toString(),e.sub_cid=e.sub_cid.toString(),e.tag_id=e.tag_id.toString(),!e.img&&this.autoImg&&(e.img=$(e.content)[0]),!e.description&&this.autoDes&&(e.description=q(e.content).substr(0,255));let a=await j({...e,field:this.fieldParams});200==a.code?(this.$message({message:"更新成功^_^",type:"success"}),this.$router.go(-1)):this.$message({message:a.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;0!=this.params.cid?this.update():this.$message({message:"请选择栏目",type:"success"})}))}}},[["render",function(y,v,w,j,U,k){const x=e,C=a,S=l,I=t,A=s,D=d,$=o,q=i,Z=m,X=r,Y=N("MostlyCloudy"),ee=u,ae=p,le=n,te=c,se=f,de=g,oe=_,ie=N("vue3-tinymce"),me=h,re=V,ue=b;return T(),F("div",J,[P("div",K,[z(C,{modelValue:y.activeName,"onUpdate:modelValue":v[0]||(v[0]=e=>y.activeName=e),onTabClick:k.handleClick},{default:E((()=>[z(x,{label:"基本信息",name:"first"}),z(x,{label:"扩展信息",name:"second"})])),_:1},8,["modelValue","onTabClick"])]),P("div",Q,[L((T(),O(re,{ref:"params",model:y.params,"label-width":"90px"},{default:E((()=>[L(P("div",null,[z(oe,{gutter:20},{default:E((()=>[z(A,{sm:24,md:12},{default:E((()=>[z(I,{label:"文章栏目"},{default:E((()=>[z(S,{props:y.categoryProps,"show-all-levels":!1,modelValue:y.categorySelected,"onUpdate:modelValue":v[1]||(v[1]=e=>y.categorySelected=e),options:y.category,onChange:k.handleChange},null,8,["props","modelValue","options","onChange"])])),_:1})])),_:1}),z(A,{sm:24,md:12},{default:E((()=>[z(I,{label:"文章标题",prop:"title",rules:[{required:!0,message:"请输入文章标题",trigger:"blur"},{min:1,max:100,message:"标题不能超过100个字",trigger:"blur"}]},{default:E((()=>[z(D,{modelValue:y.params.title,"onUpdate:modelValue":v[2]||(v[2]=e=>y.params.title=e)},null,8,["modelValue"])])),_:1})])),_:1}),z(A,{sm:24,md:12},{default:E((()=>[z(I,{label:"tag标签"},{default:E((()=>[z($,{modelValue:y.params.tag_id,"onUpdate:modelValue":v[3]||(v[3]=e=>y.params.tag_id=e),options:y.taglist,placeholder:"请选择标签",style:{width:"240px"},multiple:"",filterable:"",remote:"","remote-method":k.searchTag},null,8,["modelValue","options","remote-method"])])),_:1})])),_:1}),z(A,{sm:24,md:12},{default:E((()=>[z(I,{label:"内容属性"},{default:E((()=>[z(Z,{modelValue:y.params.attr,"onUpdate:modelValue":v[4]||(v[4]=e=>y.params.attr=e),onChange:k.handleAttr},{default:E((()=>[z(q,{label:"1"},{default:E((()=>[B("头条")])),_:1}),z(q,{label:"2"},{default:E((()=>[B("推荐")])),_:1}),z(q,{label:"3"},{default:E((()=>[B("轮播")])),_:1}),z(q,{label:"4"},{default:E((()=>[B("热门")])),_:1})])),_:1},8,["modelValue","onChange"])])),_:1})])),_:1}),z(A,{sm:24,md:12},{default:E((()=>[z(I,{label:"发布时间"},{default:E((()=>[z(X,{modelValue:y.params.createdAt,"onUpdate:modelValue":v[5]||(v[5]=e=>y.params.createdAt=e),type:"datetime",placeholder:"选择日期时间"},null,8,["modelValue"])])),_:1})])),_:1}),z(A,{sm:24,md:12},{default:E((()=>[z(I,{class:"row",label:"缩略图"},{default:E((()=>[z(le,{class:"avatar-uploader","http-request":k.upload,"show-file-list":!1,"before-upload":k.beforeUpload},{default:E((()=>[z(ae,{placement:"top-start",title:"上传",width:200,trigger:"hover",content:"上传图片作为封面图，大小200k内"},{reference:E((()=>[z(ee,{class:"avatar-uploader-icon"},{default:E((()=>[z(Y)])),_:1})])),_:1})])),_:1},8,["http-request","before-upload"]),y.params.img?(T(),O(ae,{key:0,placement:"right",width:400,trigger:"hover"},{reference:E((()=>[z(te,{class:"avatar-uploader-icon pointer ml-10",src:y.params.img},null,8,["src"])])),default:E((()=>[z(te,{style:{width:"100%"},src:y.params.img},null,8,["src"])])),_:1})):G("",!0),z(se,{type:"primary",class:"ml-10",onClick:v[6]||(v[6]=e=>y.drawer=!0)},{default:E((()=>[B(" 默认封面图 ")])),_:1}),z(de,{modelValue:y.drawer,"onUpdate:modelValue":v[7]||(v[7]=e=>y.drawer=e),title:"默认封面图",class:"w-300","with-header":!1},{default:E((()=>[P("div",W,[(T(!0),F(H,null,M(y.drawerList,((e,a)=>(T(),O(te,{key:a,src:e,onClick:a=>k.selectCover(e),fit:"cover"},null,8,["src","onClick"])))),128))])])),_:1},8,["modelValue"]),z(D,{class:"ml-10 flex-1",modelValue:y.params.img,"onUpdate:modelValue":v[8]||(v[8]=e=>y.params.img=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),z(I,{label:"内容摘要"},{default:E((()=>[z(D,{type:"textarea",rows:2,placeholder:"请输入内容",modelValue:y.params.description,"onUpdate:modelValue":v[9]||(v[9]=e=>y.params.description=e)},null,8,["modelValue"])])),_:1}),z(I,{label:"文章内容"},{default:E((()=>[z(ie,{modelValue:y.params.content,"onUpdate:modelValue":v[10]||(v[10]=e=>y.params.content=e),setting:y.setting,onInit:k.tinymce,"script-src":"/public/admin/tinymce/tinymce.min.js"},null,8,["modelValue","setting","onInit"])])),_:1}),z(oe,{gutter:20},{default:E((()=>[z(A,{sm:24,md:12,lg:8},{default:E((()=>[z(I,{label:"自动封面"},{default:E((()=>[z(q,{modelValue:y.autoImg,"onUpdate:modelValue":v[12]||(v[12]=e=>y.autoImg=e)},{default:E((()=>[B(" 文章第 "),z(D,{modelValue:y.picNum,"onUpdate:modelValue":v[11]||(v[11]=e=>y.picNum=e),class:"w-80 mr-8 ml-8",placeholder:"请输入内容"},null,8,["modelValue"]),B("张图 ")])),_:1},8,["modelValue"])])),_:1})])),_:1}),z(A,{sm:24,md:12,lg:8},{default:E((()=>[z(I,{label:"提取描述"},{default:E((()=>[z(q,{modelValue:y.autoDes,"onUpdate:modelValue":v[13]||(v[13]=e=>y.autoDes=e)},{default:E((()=>[B("提取文章描述")])),_:1},8,["modelValue"])])),_:1})])),_:1}),z(A,{sm:24,md:12,lg:8},{default:E((()=>[z(I,{label:"是否显示"},{default:E((()=>[z(me,{modelValue:y.params.status,"onUpdate:modelValue":v[14]||(v[14]=e=>y.params.status=e),label:"0"},{default:E((()=>[B("发布")])),_:1},8,["modelValue"]),z(me,{modelValue:y.params.status,"onUpdate:modelValue":v[15]||(v[15]=e=>y.params.status=e),label:"1"},{default:E((()=>[B("不发布")])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1})],512),[[R,0==y.activeIndex]]),L(P("div",null,[z(oe,{gutter:20},{default:E((()=>[z(A,{sm:24,md:12},{default:E((()=>[z(I,{label:"短标题",prop:"name"},{default:E((()=>[z(D,{modelValue:y.params.short_title,"onUpdate:modelValue":v[16]||(v[16]=e=>y.params.short_title=e)},null,8,["modelValue"])])),_:1})])),_:1}),z(A,{sm:24,md:12},{default:E((()=>[z(I,{label:"SEO标题"},{default:E((()=>[z(D,{modelValue:y.params.seo_title,"onUpdate:modelValue":v[17]||(v[17]=e=>y.params.seo_title=e)},null,8,["modelValue"])])),_:1})])),_:1}),z(A,{sm:24,md:12},{default:E((()=>[z(I,{label:"SEO关键词"},{default:E((()=>[z(D,{modelValue:y.params.seo_keywords,"onUpdate:modelValue":v[18]||(v[18]=e=>y.params.seo_keywords=e)},null,8,["modelValue"])])),_:1})])),_:1}),z(A,{sm:24,md:12},{default:E((()=>[z(I,{label:"SEO描述"},{default:E((()=>[z(D,{modelValue:y.params.seo_description,"onUpdate:modelValue":v[19]||(v[19]=e=>y.params.seo_description=e)},null,8,["modelValue"])])),_:1})])),_:1}),z(A,{sm:24,md:12},{default:E((()=>[z(I,{label:"来源"},{default:E((()=>[z(D,{modelValue:y.params.source,"onUpdate:modelValue":v[20]||(v[20]=e=>y.params.source=e)},null,8,["modelValue"])])),_:1})])),_:1}),z(A,{sm:24,md:12},{default:E((()=>[z(I,{label:"作者"},{default:E((()=>[z(D,{modelValue:y.params.author,"onUpdate:modelValue":v[21]||(v[21]=e=>y.params.author=e)},null,8,["modelValue"])])),_:1})])),_:1}),z(A,{sm:24,md:12},{default:E((()=>[z(I,{label:"外链跳转"},{default:E((()=>[z(D,{modelValue:y.params.link,"onUpdate:modelValue":v[22]||(v[22]=e=>y.params.link=e),max:"120"},null,8,["modelValue"])])),_:1})])),_:1}),(T(!0),F(H,null,M(y.field,((e,a)=>(T(),O(A,{sm:24,md:12,lg:8,key:a},{default:E((()=>[z(I,{label:e.field_cname},{default:E((()=>["1"===e.field_type?(T(),O(D,{key:0,modelValue:e.field_values,"onUpdate:modelValue":a=>e.field_values=a,max:"120"},null,8,["modelValue","onUpdate:modelValue"])):"2"===e.field_type?(T(),O(D,{key:1,type:"textarea",rows:3,placeholder:"请输入内容",modelValue:e.field_values,"onUpdate:modelValue":a=>e.field_values=a},null,8,["modelValue","onUpdate:modelValue"])):(T(),O(D,{key:2,type:"textarea",rows:3,placeholder:"请输入内容",autosize:"false",modelValue:e.field_values,"onUpdate:modelValue":a=>e.field_values=a},null,8,["modelValue","onUpdate:modelValue"]))])),_:2},1032,["label"])])),_:2},1024)))),128)),z(A,{sm:24,md:12},{default:E((()=>[z(I,{label:"浏览数"},{default:E((()=>[z(D,{modelValue:y.params.pv,"onUpdate:modelValue":v[23]||(v[23]=e=>y.params.pv=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})],512),[[R,1==y.activeIndex]]),z(I,null,{default:E((()=>[z(se,{type:"primary",onClick:v[24]||(v[24]=e=>k.submit("params"))},{default:E((()=>[B("保存")])),_:1})])),_:1})])),_:1},8,["model"])),[[ue,y.loading]])])])}],["__scopeId","data-v-ecb21268"]]);export{X as default};
