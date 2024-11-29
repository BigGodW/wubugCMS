import{E as w,m as Me,n as qe,x as Je,t as ze,v as Ge,s as He,y as Ze,A as Ke,B as Qe,C as We,a as Xe,D as Ye,F as el,G as ll,f as al,o as tl,w as ol,H as sl,I as ul,J as dl,K as nl,r as rl,L as il}from"./element-plus.js";import{r as d,I as ml,j as pl,ad as S,o as r,c as _,a as V,M as l,Q as t,R as c,W as T,_ as F,U as v,O as U,a8 as C,$,u as cl}from"./@vue.js";import{u as fl,a as vl}from"./vue-router.js";import{f as gl}from"./category.js";import{f as _l,a as bl,d as Vl,u as yl}from"./article.js";import{s as wl}from"./tag.js";import{v as kl}from"./sys_config.js";import{t as Ul,_ as Cl}from"./tinymce.js";import{D as El}from"./DialogCroper.js";import{_ as xl,b as Il,a as de,t as jl,c as Dl,s as Sl,g as Al,f as Nl}from"./index.js";import{u as Rl,a as ne}from"./upload.js";import"./lodash-es.js";import"./async-validator.js";import"./dayjs.js";import"./@element-plus.js";import"./@popperjs.js";import"./@ctrl.js";import"./memoize-one.js";import"./normalize-wheel-es.js";import"./vue-cropper.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vanilla-jsoneditor.js";import"./json-source-map.js";import"./@jsonquerylang.js";import"./@fortawesome.js";import"./natural-compare-lite.js";import"./@codemirror.js";import"./@lezer.js";import"./crelt.js";import"./style-mod.js";import"./w3c-keyname.js";import"./@replit.js";import"./codemirror-wrapped-line-indent.js";import"./fast-deep-equal.js";import"./fast-uri.js";import"./jmespath.js";import"./jsonpath-plus.js";import"./immutable-json-patch.js";import"./jsonrepair.js";import"./axios.js";import"./js-cookie.js";import"./nprogress.js";/* empty css        */const Pl={class:"bg-fff pd-10 radius-6"},Bl={class:"mr-10 ml-10"},Ll={class:"mr-10 ml-10 mb-20"},Ol={class:"cover row"},Tl={class:"cover flex align-center"},Fl={class:"pos-r img-item"},$l={class:"imgs-btn"},hl={__name:"edit",setup(Ml){const re=fl(),ie=vl(),h=d({...Ul}),A=d(!0),N=d([]),me={checkStrictly:!0},M=d("first"),E=d("0"),q=d([]),pe=d([]),J=d([]),R=d(!1),P=d(!1),z=d(1),G=d([]),x=d(),H=d(),Z=d(),K=d(""),s=ml({id:0,cid:0,subCid:[],title:"",shortTitle:"",tagId:"",attr:[],articleView:"",source:"",author:"",description:"",img:"",createdAt:new Date,updatedAt:new Date,content:"",status:"0",pv:1,link:""}),g=d([]);let b={};const Q=d(""),B=d(!1);d(!1);const ce=d(1);d("");const L=d(!1),fe=d(["/public/cover/01.jpg","/public/cover/02.jpg","/public/cover/03.jpg","/public/cover/04.jpg","/public/cover/05.jpg","/public/cover/06.jpg","/public/cover/07.jpg","/public/cover/08.jpg","/public/cover/09.jpg","/public/cover/10.jpg"]),ve=async()=>{try{let o=await kl();o.code===200&&(J.value=o.data.filter(e=>e!=="404.html"&&e!=="500.html").map(e=>({label:e,value:e})))}catch(o){console.log(o)}},ge=()=>{A.value=!1},_e=o=>{E.value=o.index},be=o=>{s.img=o},W=async(o="")=>{try{let e=await wl(ce.value,o,100);e.code===200&&(G.value=e.data.list.map(u=>({label:u.name,value:u.id})))}catch(e){console.log(e)}},Ve=async()=>{try{let o=await gl();if(o.code===200){let e=o.data,u=Il(s.cid,e);N.value=u;let p=de(jl(e));pe.value=de(e),q.value=[...p],X(s.cid)}}catch(o){console.log(o)}},ye=o=>{o[0]!=-1?(s.cid=o[o.length-1],X(s.cid)):g.value=[]},X=async o=>{try{let e=await _l(o);e.code===200&&(e.data.fields.forEach(u=>{if(u.default&&u.default.includes("[{")&&u.default.includes("options")){let p=JSON.parse(u.default);u.default=p.options||[]}u.type=="8"&&(u.values=[])}),g.value=e.data.fields,g.value.forEach((u,p)=>{b[u.ename]&&b[u.ename].includes("[{")?u.values=JSON.parse(b[u.ename]):u.values=b[u.ename]}))}catch(e){console.log(e)}},we=async()=>{try{let o=await bl(s.id);if(o.code===200){let e=o.data;e.content=Dl(e.content),e.attr=e.attr?e.attr.split(","):[],e.subCid=e.subCid?e.subCid.split(",").map(Number):[],e.oldTagId=e.tagId,e.tagId=e.tagId?e.tagId.split(",").map(Number):[],e.status=e.status.toString(),e.updatedAt=new Date(e.createdAt),Object.assign(s,e),b=e.field,A.value=!1}}catch(o){console.error(o)}},ke=o=>{console.log("e-->",o)},Y=o=>{if(o.type.indexOf("image")===-1)return w({message:"上传文件只能是图片格式",type:"success"}),!1;x.value=o;const e=new FileReader;return e.onload=async u=>{let p;typeof u.target.result=="object"?p=window.URL.createObjectURL(new Blob([u.target.result])):p=u.target.result,K.value=p,H.value.dialogFormVisible=!0},e.readAsArrayBuffer(o),!0},Ue=async()=>{if(x.value.size/1024/1024>.2)return w({message:"上传图片必须小于200k",type:"success"}),!1;const o=new FormData;o.append("file",x.value);const e=await ne(o);e.code===200&&(s.img=e.data.path)},Ce=o=>{if(o.type.indexOf("image")===-1)return w({message:"上传文件只能是图片格式",type:"success"}),!1;if(o.size/1024/1024>.2)return w({message:"上传图片必须小于200k",type:"success"}),!1},Ee=o=>{Q.value=o.url,B.value=!0},xe=async o=>{g.value.forEach((e,u)=>{Array.isArray(e.values)&&e.values.forEach((p,O)=>{p.url==o.url&&(Ie(o.url),e.values.splice(O,1))})})},Ie=async o=>{try{await Vl(o)}catch(e){console.log(e)}},je=async()=>{try{let o={...s};o.attr=o.attr.toString(),o.subCid=o.subCid.toString(),o.tagId=o.tagId.toString(),!o.img&&R.value&&(o.img=Al(o.content)[0]),!o.description&&P.value&&(o.description=Nl(o.content).substr(0,255)),g.value.map((u,p)=>{b[u.ename]=typeof u.values=="object"?JSON.stringify(u.values):u.values});let e=await yl({...o,field:b});e.code===200?(w({message:"更新成功^_^",type:"success"}),re.go(-1)):alert(e.msg)}catch(o){console.log(o)}},De=o=>{o&&o.validate((e,u)=>{if(e){if(s.cid===0){w({message:"请选择栏目^_^",type:"success"});return}je()}else return Sl(u),!1})};return pl(async()=>{s.id=ie.params.id,await we(),await Ve(),W(),ve(),h.value.images_upload_url=await Rl()}),(o,e)=>{const u=Me,p=qe,O=Je,n=ze,m=Ge,f=He,Se=Ze,y=Ke,Ae=Qe,ee=We,Ne=S("MostlyCloudy"),I=Xe,le=Ye,ae=el,k=ll,te=al,Re=tl,j=ol,oe=sl,se=ul,ue=dl,Pe=S("ZoomIn"),Be=S("Delete"),Le=nl,Oe=S("Plus"),Te=rl,Fe=il;return r(),_("div",Pl,[V("div",Bl,[l(p,{modelValue:M.value,"onUpdate:modelValue":e[0]||(e[0]=a=>M.value=a),onTabClick:_e},{default:t(()=>[l(u,{label:"基本信息",name:"first"}),l(u,{label:"扩展信息",name:"second"}),g.value.length>0?(r(),c(u,{key:0,label:"模型信息",name:"three"})):T("",!0)]),_:1},8,["modelValue"])]),V("div",Ll,[l(Te,{ref_key:"paramsRef",ref:Z,model:s,"label-width":"90px"},{default:t(()=>[F((r(),_("div",null,[l(j,{gutter:20},{default:t(()=>[l(m,{sm:24,md:12},{default:t(()=>[l(n,{label:"文章栏目"},{default:t(()=>[l(O,{props:me,"show-all-levels":!1,modelValue:N.value,"onUpdate:modelValue":e[1]||(e[1]=a=>N.value=a),options:q.value,onChange:ye},null,8,["modelValue","options"])]),_:1})]),_:1}),l(m,{sm:24,md:12},{default:t(()=>[l(n,{label:"文章标题",prop:"title",rules:[{required:!0,message:"请输入文章标题",trigger:"blur"},{min:1,max:100,message:"标题不能超过100个字",trigger:"blur"}]},{default:t(()=>[l(f,{modelValue:s.title,"onUpdate:modelValue":e[2]||(e[2]=a=>s.title=a)},null,8,["modelValue"])]),_:1})]),_:1}),l(m,{sm:24,md:12},{default:t(()=>[l(n,{label:"tag标签"},{default:t(()=>[l(Se,{modelValue:s.tagId,"onUpdate:modelValue":e[3]||(e[3]=a=>s.tagId=a),options:G.value,placeholder:"请选择标签",style:{width:"240px"},multiple:"",filterable:"",remote:"","remote-method":W},null,8,["modelValue","options"])]),_:1})]),_:1}),l(m,{sm:24,md:12},{default:t(()=>[l(n,{label:"内容属性"},{default:t(()=>[l(Ae,{modelValue:s.attr,"onUpdate:modelValue":e[4]||(e[4]=a=>s.attr=a),onChange:ke},{default:t(()=>[l(y,{label:"1",value:"1"},{default:t(()=>e[24]||(e[24]=[v("头条")])),_:1}),l(y,{label:"2",value:"2"},{default:t(()=>e[25]||(e[25]=[v("推荐")])),_:1}),l(y,{label:"3",value:"3"},{default:t(()=>e[26]||(e[26]=[v("轮播")])),_:1}),l(y,{label:"4",value:"4"},{default:t(()=>e[27]||(e[27]=[v("热门")])),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(m,{sm:24,md:12},{default:t(()=>[l(n,{label:"发布时间"},{default:t(()=>[l(ee,{modelValue:s.createdAt,"onUpdate:modelValue":e[5]||(e[5]=a=>s.createdAt=a),type:"datetime",placeholder:"选择日期时间"},null,8,["modelValue"])]),_:1})]),_:1}),l(m,{sm:24,md:12},{default:t(()=>[l(n,{class:"flex",label:"缩略图"},{default:t(()=>[l(ae,{class:"avatar-uploader","http-request":Ue,"show-file-list":!1,"before-upload":Y},{default:t(()=>[l(le,{placement:"top-start",title:"上传",width:200,trigger:"hover",content:"上传图片作为封面图，大小200k内"},{reference:t(()=>[l(I,{class:"avatar-uploader-icon"},{default:t(()=>[l(Ne)]),_:1})]),_:1})]),_:1}),s.img?(r(),c(le,{key:0,placement:"right",width:400,trigger:"hover"},{reference:t(()=>[l(k,{class:"avatar-uploader-icon pointer ml-10",src:s.img},null,8,["src"])]),default:t(()=>[l(k,{style:{width:"100%"},src:s.img},null,8,["src"])]),_:1})):T("",!0),l(te,{type:"primary",class:"ml-10",onClick:e[6]||(e[6]=a=>L.value=!0)},{default:t(()=>e[28]||(e[28]=[v(" 默认封面图 ")])),_:1}),l(Re,{modelValue:L.value,"onUpdate:modelValue":e[7]||(e[7]=a=>L.value=a),title:"默认封面图",class:"w-300","with-header":!1},{default:t(()=>[V("div",Ol,[(r(!0),_(U,null,C(fe.value,(a,D)=>(r(),c(k,{key:D,src:a,onClick:i=>be(a),fit:"cover"},null,8,["src","onClick"]))),128))])]),_:1},8,["modelValue"]),l(f,{class:"ml-10 flex-1",modelValue:s.img,"onUpdate:modelValue":e[8]||(e[8]=a=>s.img=a)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),l(n,{label:"内容摘要"},{default:t(()=>[l(f,{type:"textarea",rows:2,placeholder:"请输入内容",modelValue:s.description,"onUpdate:modelValue":e[9]||(e[9]=a=>s.description=a)},null,8,["modelValue"])]),_:1}),l(n,{label:"文章内容"},{default:t(()=>[l(Cl,{modelValue:s.content,"onUpdate:modelValue":e[10]||(e[10]=a=>s.content=a),setting:h.value,onInit:ge,"script-src":"/public/admin/tinymce/tinymce.min.js"},null,8,["modelValue","setting"])]),_:1}),l(j,{gutter:20},{default:t(()=>[l(m,{sm:24,md:12,lg:8},{default:t(()=>[l(n,{label:"自动封面"},{default:t(()=>[l(y,{modelValue:R.value,"onUpdate:modelValue":e[12]||(e[12]=a=>R.value=a)},{default:t(()=>[e[29]||(e[29]=v(" 文章第 ")),l(f,{modelValue:z.value,"onUpdate:modelValue":e[11]||(e[11]=a=>z.value=a),class:"w-80 mr-8 ml-8",placeholder:"请输入内容"},null,8,["modelValue"]),e[30]||(e[30]=v("张图 "))]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(m,{sm:24,md:12,lg:8},{default:t(()=>[l(n,{label:"提取描述"},{default:t(()=>[l(y,{modelValue:P.value,"onUpdate:modelValue":e[13]||(e[13]=a=>P.value=a)},{default:t(()=>e[31]||(e[31]=[v("提取文章描述")])),_:1},8,["modelValue"])]),_:1})]),_:1}),l(m,{sm:24,md:12,lg:8},{default:t(()=>[l(n,{label:"是否显示"},{default:t(()=>[l(oe,{modelValue:s.status,"onUpdate:modelValue":e[14]||(e[14]=a=>s.status=a),value:"0"},{default:t(()=>e[32]||(e[32]=[v("发布")])),_:1},8,["modelValue"]),l(oe,{modelValue:s.status,"onUpdate:modelValue":e[15]||(e[15]=a=>s.status=a),value:"1"},{default:t(()=>e[33]||(e[33]=[v("不发布")])),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})])),[[$,E.value==0],[Fe,A.value]]),F(V("div",null,[l(j,{gutter:20},{default:t(()=>[l(m,{sm:24,md:12},{default:t(()=>[l(n,{label:"短标题",prop:"name"},{default:t(()=>[l(f,{modelValue:s.shortTitle,"onUpdate:modelValue":e[16]||(e[16]=a=>s.shortTitle=a)},null,8,["modelValue"])]),_:1})]),_:1}),l(m,{sm:24,md:12},{default:t(()=>[l(n,{label:"内容模板"},{default:t(()=>[l(ue,{modelValue:s.articleView,"onUpdate:modelValue":e[17]||(e[17]=a=>s.articleView=a),placeholder:"请选择模板"},{default:t(()=>[(r(!0),_(U,null,C(J.value,a=>(r(),c(se,{key:a.value,label:a.label,value:a.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(m,{sm:24,md:12},{default:t(()=>[l(n,{label:"来源"},{default:t(()=>[l(f,{modelValue:s.source,"onUpdate:modelValue":e[18]||(e[18]=a=>s.source=a)},null,8,["modelValue"])]),_:1})]),_:1}),l(m,{sm:24,md:12},{default:t(()=>[l(n,{label:"作者"},{default:t(()=>[l(f,{modelValue:s.author,"onUpdate:modelValue":e[19]||(e[19]=a=>s.author=a)},null,8,["modelValue"])]),_:1})]),_:1}),l(m,{sm:24,md:12},{default:t(()=>[l(n,{label:"外链跳转"},{default:t(()=>[l(f,{modelValue:s.link,"onUpdate:modelValue":e[20]||(e[20]=a=>s.link=a),max:"120"},null,8,["modelValue"])]),_:1})]),_:1}),l(m,{sm:24,md:12},{default:t(()=>[l(n,{label:"浏览数"},{default:t(()=>[l(f,{modelValue:s.pv,"onUpdate:modelValue":e[21]||(e[21]=a=>s.pv=a)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})],512),[[$,E.value==1]]),F(V("div",null,[l(j,{gutter:20},{default:t(()=>[(r(!0),_(U,null,C(g.value,(a,D)=>(r(),c(m,{key:D,sm:24,md:24,lg:24},{default:t(()=>[["1","7"].includes(a.type)?(r(),c(n,{key:0,label:a.cname},{default:t(()=>[l(f,{modelValue:a.values,"onUpdate:modelValue":i=>a.values=i,max:"120"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"])):["2","9"].includes(a.type)?(r(),c(n,{key:1,label:a.cname},{default:t(()=>[l(f,{type:"textarea",rows:4,placeholder:"请输入内容",modelValue:a.values,"onUpdate:modelValue":i=>a.values=i},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"])):["3","4","5"].includes(a.type)?(r(),c(n,{key:2,label:a.cname},{default:t(()=>[l(ue,{modelValue:a.values,"onUpdate:modelValue":i=>a.values=i,placeholder:"请选择"},{default:t(()=>[(r(!0),_(U,null,C(a.default,i=>(r(),c(se,{key:i.value,label:i.label,value:i.value},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"])):a.type==="6"?(r(),c(n,{key:3,label:a.cname},{default:t(()=>[l(ee,{modelValue:a.values,"onUpdate:modelValue":i=>a.values=i,"default-value":new Date,type:"datetime",placeholder:"请选择"},null,8,["modelValue","onUpdate:modelValue","default-value"])]),_:2},1032,["label"])):a.type==="8"?(r(),c(n,{key:4,label:a.cname,class:"flex align-c justify-center"},{default:t(()=>[V("div",Tl,[(r(!0),_(U,null,C(a.values,(i,$e)=>(r(),_("div",Fl,[(r(),c(k,{key:$e,src:i.url,fit:"cover"},null,8,["src"])),V("div",$l,[l(I,{onClick:he=>Ee(i)},{default:t(()=>[l(Pe)]),_:2},1032,["onClick"]),l(I,{onClick:he=>xe(i)},{default:t(()=>[l(Be)]),_:2},1032,["onClick"])])]))),256))]),l(Le,{modelValue:B.value,"onUpdate:modelValue":e[22]||(e[22]=i=>B.value=i)},{default:t(()=>[l(k,{"w-full":"",src:Q.value,alt:"Preview Image"},null,8,["src"])]),_:1},8,["modelValue"]),l(ae,{multiple:"","http-request":Y,data:{...a,index:D},"before-upload":Ce,limit:10,"show-file-list":!1},{default:t(()=>[l(I,{class:"upload-icon"},{default:t(()=>[l(Oe)]),_:1})]),_:2},1032,["data"])]),_:2},1032,["label"])):T("",!0)]),_:2},1024))),128))]),_:1})],512),[[$,E.value==2&&g.value.length>0]]),l(n,null,{default:t(()=>[l(te,{type:"primary",onClick:e[23]||(e[23]=a=>De(Z.value))},{default:t(()=>e[34]||(e[34]=[v("保存")])),_:1})]),_:1})]),_:1},8,["model"])]),l(El,{ref_key:"dialogCrop",ref:H,img:K.value,file:x.value,onCrop:cl(ne)},null,8,["img","file","onCrop"])])}}},Ra=xl(hl,[["__scopeId","data-v-c777efcb"]]);export{Ra as default};
