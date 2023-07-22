import{G as e,p as a,H as l,I as t,r as s,s as o,q as d,J as m,v as u,w as r,B as i,a as n,x as p,y as c,A as f,t as _,u as g,f as V,K as h}from"./element-plus.js";import{f as b}from"./category.js";import{f as y,c as v}from"./article.js";import{s as U}from"./tag.js";import{_ as j}from"./@jsdawn.js";import{t as w}from"./tinymce.js";import{B as k}from"./@element-plus.js";import{_ as x,a as C,t as I,b as S,f as A}from"./index.js";import{ae as T,o as D,c as N,a as P,T as q,V as z,F as E,a0 as $,a1 as F,Z as O,W as B,h as L,a9 as G}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./escape-html.js";import"./normalize-wheel-es.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const H={class:"mr-10 ml-10"},J={class:"mr-10 ml-10 mb-20"};const K=x({name:"article-add",components:{Vue3Tinymce:j,Plus:k},data:()=>({setting:w,loading:!0,categorySelected:[],categoryProps:{checkStrictly:!0},activeName:"first",activeIndex:"0",category:[],cateList:[],autoImg:!0,autoDes:!0,picNum:1,taglist:[],params:{cid:0,title:"",short_title:"",tag_id:"",attr:[],seo_title:"",seo_keywords:"",seo_description:"",source:"",author:"",description:"",img:"",createdAt:new Date,updatedAt:new Date,content:"禅悦",status:"0",pv:0,link:""},field:[],dialogImageUrl:"",dialogVisible:!1,disabled:!1,cur:1,keywords:""}),computed:{},mounted(){},created(){this.query(),this.searchTag()},unmounted(){},methods:{handleClick(e){this.activeIndex=e.index},setContent(e){this.params.content=e},tinymce(){this.loading=!1},async searchTag(e){try{let a=await U(this.cur,e);if(200===a.code){let e=[];a.data.list.forEach((a=>{e.push({label:a.name,value:a.id})})),this.taglist=e}}catch(a){console.log(a)}},async query(){try{let e=await b();if(200===e.code){let a=C(I(e.data)),l=C(e.data);this.cateList=l,this.category=[...a]}}catch(e){console.log(e)}},handleChange(e){console.log(e),-1!=e[0]?(this.params.cid=e[e.length-1],this.findField(this.params.cid)):this.field=[]},handleAttr(e){console.log("e--\x3e",e)},handleSubCid(e){console.log("e--\x3e",e)},beforeUpload(e){if(e.size/1024/1024>2)return this.$message("上传文件必须小于1M"),!1},upload(e){200===e.code&&(this.params.img=e.data.path)},async findField(e){try{let a=await y(e);200===a.code&&(this.field=a.data.fields)}catch(a){console.log(a)}},async create(){try{let e={...this.params};e.attr=e.attr.toString(),e.tag_id=e.tag_id.toString(),e.img||(e.img=S(e.content)[0]),e.description||(e.description=A(e.content).substr(0,255));let a={};this.field.map((e=>{a[e.field_ename]=e.field_values})),(await v({defaultParams:e,fieldParams:a})).code&&(this.$message({message:"更新成功^_^",type:"success"}),this.$router.go(-1))}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.create()}))}}},[["render",function(b,y,v,U,j,w){const k=l,x=e,C=t,I=s,S=o,A=d,K=m,M=u,W=r,Z=i,Q=T("Plus"),R=n,X=p,Y=c,ee=f,ae=_,le=T("vue3-tinymce"),te=g,se=V,oe=a,de=h;return D(),N(E,null,[P("div",H,[q(x,{modelValue:b.activeName,"onUpdate:modelValue":y[0]||(y[0]=e=>b.activeName=e),onTabClick:w.handleClick},{default:z((()=>[q(k,{label:"基本信息",name:"first"}),q(k,{label:"扩展信息",name:"second"})])),_:1},8,["modelValue","onTabClick"])]),P("div",J,[q(oe,{ref:"params",model:b.params,"label-width":"90px"},{default:z((()=>[$((D(),N("div",null,[q(ae,{gutter:20},{default:z((()=>[q(S,{sm:24,md:12},{default:z((()=>[q(I,{label:"文章栏目"},{default:z((()=>[q(C,{props:b.categoryProps,"show-all-levels":!1,modelValue:b.categorySelected,"onUpdate:modelValue":y[1]||(y[1]=e=>b.categorySelected=e),options:b.category,onChange:w.handleChange},null,8,["props","modelValue","options","onChange"])])),_:1})])),_:1}),q(S,{sm:24,md:12},{default:z((()=>[q(I,{label:"文章标题",prop:"title",rules:[{required:!0,message:"请输入文章标题",trigger:"blur"},{min:1,max:50,message:"栏目不能超过50个字",trigger:"blur"}]},{default:z((()=>[q(A,{modelValue:b.params.title,"onUpdate:modelValue":y[2]||(y[2]=e=>b.params.title=e)},null,8,["modelValue"])])),_:1})])),_:1}),q(S,{sm:24,md:12},{default:z((()=>[q(I,{label:"tag标签"},{default:z((()=>[q(K,{modelValue:b.params.tag_id,"onUpdate:modelValue":y[3]||(y[3]=e=>b.params.tag_id=e),options:b.taglist,placeholder:"请选择标签",style:{width:"240px"},multiple:"",filterable:"",remote:"","remote-method":w.searchTag},null,8,["modelValue","options","remote-method"])])),_:1})])),_:1}),q(S,{sm:24,md:12},{default:z((()=>[q(I,{label:"内容属性"},{default:z((()=>[q(W,{modelValue:b.params.attr,"onUpdate:modelValue":y[4]||(y[4]=e=>b.params.attr=e),onChange:w.handleAttr},{default:z((()=>[q(M,{label:"1"},{default:z((()=>[O("头条")])),_:1}),q(M,{label:"2"},{default:z((()=>[O("推荐")])),_:1}),q(M,{label:"3"},{default:z((()=>[O("轮播")])),_:1}),q(M,{label:"4"},{default:z((()=>[O("热门")])),_:1})])),_:1},8,["modelValue","onChange"])])),_:1})])),_:1}),q(S,{sm:24,md:12},{default:z((()=>[q(I,{label:"发布时间"},{default:z((()=>[q(Z,{modelValue:b.params.createdAt,"onUpdate:modelValue":y[5]||(y[5]=e=>b.params.createdAt=e),"default-value":new Date,type:"datetime",placeholder:"选择日期时间"},null,8,["modelValue","default-value"])])),_:1})])),_:1}),q(S,{sm:24,md:12},{default:z((()=>[q(I,{class:"row",label:"缩略图"},{default:z((()=>[q(X,{class:"avatar-uploader",action:"/api/upload","on-success":w.upload,"show-file-list":!1,"before-upload":w.beforeUpload},{default:z((()=>[q(R,{class:"avatar-uploader-icon"},{default:z((()=>[q(Q)])),_:1})])),_:1},8,["on-success","before-upload"]),q(ee,{placement:"right",width:400,trigger:"hover"},{reference:z((()=>[b.params.img?(D(),B(Y,{key:0,class:"avatar-uploader-icon pointer ml-10",src:b.params.img},null,8,["src"])):L("",!0)])),default:z((()=>[b.params.img?(D(),B(Y,{key:0,style:{width:"100%"},src:b.params.img},null,8,["src"])):L("",!0)])),_:1}),q(A,{class:"ml-10 flex-1",modelValue:b.params.img,"onUpdate:modelValue":y[6]||(y[6]=e=>b.params.img=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),q(I,{label:"内容摘要"},{default:z((()=>[q(A,{type:"textarea",rows:2,placeholder:"请输入内容",modelValue:b.params.description,"onUpdate:modelValue":y[7]||(y[7]=e=>b.params.description=e)},null,8,["modelValue"])])),_:1}),q(I,{label:"文章内容"},{default:z((()=>[q(le,{modelValue:b.params.content,"onUpdate:modelValue":y[8]||(y[8]=e=>b.params.content=e),setting:b.setting,onInit:w.tinymce,"script-src":"/public/admin/tinymce/tinymce.min.js"},null,8,["modelValue","setting","onInit"])])),_:1}),q(ae,{gutter:20},{default:z((()=>[q(S,{sm:24,md:12,lg:8},{default:z((()=>[q(I,{label:"自动封面"},{default:z((()=>[q(M,{modelValue:b.autoImg,"onUpdate:modelValue":y[10]||(y[10]=e=>b.autoImg=e)},{default:z((()=>[O(" 文章第 "),q(A,{modelValue:b.picNum,"onUpdate:modelValue":y[9]||(y[9]=e=>b.picNum=e),class:"w-80 mr-8 ml-8",placeholder:"请输入内容"},null,8,["modelValue"]),O("张图 ")])),_:1},8,["modelValue"])])),_:1})])),_:1}),q(S,{sm:24,md:12,lg:8},{default:z((()=>[q(I,{label:"提取描述"},{default:z((()=>[q(M,{modelValue:b.autoDes,"onUpdate:modelValue":y[11]||(y[11]=e=>b.autoDes=e)},{default:z((()=>[O("提取文章描述")])),_:1},8,["modelValue"])])),_:1})])),_:1}),q(S,{sm:24,md:12,lg:8},{default:z((()=>[q(I,{label:"是否显示"},{default:z((()=>[q(te,{modelValue:b.params.status,"onUpdate:modelValue":y[12]||(y[12]=e=>b.params.status=e),label:"0"},{default:z((()=>[O("发布")])),_:1},8,["modelValue"]),q(te,{modelValue:b.params.status,"onUpdate:modelValue":y[13]||(y[13]=e=>b.params.status=e),label:"1"},{default:z((()=>[O("不发布")])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1})])),[[F,0==b.activeIndex],[de,b.loading]]),$(P("div",null,[q(ae,{gutter:20},{default:z((()=>[q(S,{sm:24,md:12},{default:z((()=>[q(I,{label:"短标题",prop:"name"},{default:z((()=>[q(A,{modelValue:b.params.short_title,"onUpdate:modelValue":y[14]||(y[14]=e=>b.params.short_title=e)},null,8,["modelValue"])])),_:1})])),_:1}),q(S,{sm:24,md:12},{default:z((()=>[q(I,{label:"SEO标题"},{default:z((()=>[q(A,{modelValue:b.params.seo_title,"onUpdate:modelValue":y[15]||(y[15]=e=>b.params.seo_title=e)},null,8,["modelValue"])])),_:1})])),_:1}),q(S,{sm:24,md:12},{default:z((()=>[q(I,{label:"SEO关键词"},{default:z((()=>[q(A,{modelValue:b.params.seo_keywords,"onUpdate:modelValue":y[16]||(y[16]=e=>b.params.seo_keywords=e)},null,8,["modelValue"])])),_:1})])),_:1}),q(S,{sm:24,md:12},{default:z((()=>[q(I,{label:"SEO描述"},{default:z((()=>[q(A,{modelValue:b.params.seo_description,"onUpdate:modelValue":y[17]||(y[17]=e=>b.params.seo_description=e)},null,8,["modelValue"])])),_:1})])),_:1}),q(S,{sm:24,md:12},{default:z((()=>[q(I,{label:"来源"},{default:z((()=>[q(A,{modelValue:b.params.source,"onUpdate:modelValue":y[18]||(y[18]=e=>b.params.source=e)},null,8,["modelValue"])])),_:1})])),_:1}),q(S,{sm:24,md:12},{default:z((()=>[q(I,{label:"作者"},{default:z((()=>[q(A,{modelValue:b.params.author,"onUpdate:modelValue":y[19]||(y[19]=e=>b.params.author=e)},null,8,["modelValue"])])),_:1})])),_:1}),q(S,{sm:24,md:12},{default:z((()=>[q(I,{label:"外链跳转"},{default:z((()=>[q(A,{modelValue:b.params.link,"onUpdate:modelValue":y[20]||(y[20]=e=>b.params.link=e),max:"120"},null,8,["modelValue"])])),_:1})])),_:1}),(D(!0),N(E,null,G(b.field,((e,a)=>(D(),B(S,{sm:24,md:12,lg:8,key:a},{default:z((()=>[q(I,{label:e.field_cname},{default:z((()=>["1"===e.field_type?(D(),B(A,{key:0,modelValue:e.field_values,"onUpdate:modelValue":a=>e.field_values=a,max:"120"},null,8,["modelValue","onUpdate:modelValue"])):"2"===e.field_type?(D(),B(A,{key:1,type:"textarea",rows:3,placeholder:"请输入内容",modelValue:e.field_values,"onUpdate:modelValue":a=>e.field_values=a},null,8,["modelValue","onUpdate:modelValue"])):(D(),B(A,{key:2,type:"textarea",rows:3,placeholder:"请输入内容",autosize:"false",modelValue:e.field_values,"onUpdate:modelValue":a=>e.field_values=a},null,8,["modelValue","onUpdate:modelValue"]))])),_:2},1032,["label"])])),_:2},1024)))),128)),q(S,{sm:24,md:12},{default:z((()=>[q(I,{label:"浏览数"},{default:z((()=>[q(A,{modelValue:b.params.pv,"onUpdate:modelValue":y[21]||(y[21]=e=>b.params.pv=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})],512),[[F,1==b.activeIndex]]),q(I,null,{default:z((()=>[q(se,{type:"primary",onClick:y[22]||(y[22]=e=>w.submit("params"))},{default:z((()=>[O("保存")])),_:1})])),_:1})])),_:1},8,["model"])])],64)}],["__scopeId","data-v-31b6b0bf"]]);export{K as default};
//# sourceMappingURL=add3.js.map
