import{E as b,m as Je,n as Ge,x as ze,t as He,v as Ze,s as Ke,y as Qe,A as We,B as Xe,C as Ye,a as el,D as ll,F as al,G as tl,f as ol,o as sl,w as ul,H as dl,I as nl,J as rl,K as il,L as ml,r as pl,M as cl}from"./element-plus.js";import{r as i,I as fl,j as vl,ad as S,o as r,c as _,a as y,M as l,Q as t,R as c,W as F,_ as $,U as g,O as U,a8 as C,$ as M,u as gl}from"./@vue.js";import{u as _l,a as Vl}from"./vue-router.js";import{f as bl}from"./category.js";import{f as yl,a as wl,d as kl,u as Ul}from"./article.js";import{s as Cl}from"./tag.js";import{v as El}from"./sys_config.js";import{t as xl,_ as Il}from"./tinymce.js";import{D as jl}from"./DialogCroper.js";import{u as Dl,a as h}from"./upload.js";import{_ as Al,d as Sl,a as de,t as Rl,b as Nl,c as Pl,f as Bl}from"./index.js";import"./lodash-es.js";import"./async-validator.js";import"./dayjs.js";import"./@element-plus.js";import"./@popperjs.js";import"./@ctrl.js";import"./memoize-one.js";import"./normalize-wheel-es.js";import"./vue-cropper.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vanilla-jsoneditor.js";import"./json-source-map.js";import"./@jsonquerylang.js";import"./@fortawesome.js";import"./natural-compare-lite.js";import"./@codemirror.js";import"./@lezer.js";import"./crelt.js";import"./style-mod.js";import"./w3c-keyname.js";import"./@replit.js";import"./codemirror-wrapped-line-indent.js";import"./fast-deep-equal.js";import"./fast-uri.js";import"./jmespath.js";import"./jsonpath-plus.js";import"./immutable-json-patch.js";import"./jsonrepair.js";import"./axios.js";import"./js-cookie.js";import"./nprogress.js";/* empty css        */const Ll={class:"bg-fff pd-10 radius-6"},Ol={class:"mr-10 ml-10"},Tl={class:"mr-10 ml-10 mb-20"},Fl={class:"cover row"},$l={class:"cover flex align-center"},Ml={class:"imgs-btn"},hl={__name:"edit",setup(ql){const ne=_l(),re=Vl(),q=i({...xl}),R=i(!0),N=i([]),ie={checkStrictly:!0},J=i("first"),x=i("0"),G=i([]),me=i([]),z=i([]),P=i(!1),B=i(!1),H=i(1),Z=i([]),I=i(),K=i(),Q=i(),W=i(""),s=fl({id:0,cid:0,subCid:[],title:"",shortTitle:"",tagId:"",attr:[],articleView:"",source:"",author:"",description:"",img:"",createdAt:new Date,updatedAt:new Date,content:"",status:"0",pv:1,link:""}),f=i([]);let V={};const X=i(""),L=i(!1),pe=i(1),O=i(!1),ce=i(["/public/cover/01.jpg","/public/cover/02.jpg","/public/cover/03.jpg","/public/cover/04.jpg","/public/cover/05.jpg","/public/cover/06.jpg","/public/cover/07.jpg","/public/cover/08.jpg","/public/cover/09.jpg","/public/cover/10.jpg"]),fe=async()=>{try{let o=await El();o.code===200&&(z.value=o.data.filter(e=>e!=="404.html"&&e!=="500.html").map(e=>({label:e,value:e})))}catch(o){console.log(o)}},ve=()=>{R.value=!1},ge=o=>{x.value=o.index},_e=o=>{s.img=o},Y=async(o="")=>{try{let e=await Cl(pe.value,o,100);e.code===200&&(Z.value=e.data.list.map(u=>({label:u.name,value:u.id})))}catch(e){console.log(e)}},Ve=async()=>{try{let o=await bl();if(o.code===200){let e=o.data,u=Sl(s.cid,e);N.value=u;let p=de(Rl(e));me.value=de(e),G.value=[...p],ee(s.cid)}}catch(o){console.log(o)}},be=o=>{o[0]!=-1?(s.cid=o[o.length-1],ee(s.cid)):f.value=[]},ee=async o=>{try{let e=await yl(o);console.log("-------res",e),e.code===200&&(e.data.fields.forEach(u=>{if(u.defaultVal&&u.defaultVal.includes("[{")&&u.defaultVal.includes("options")){let p=JSON.parse(u.defaultVal);u.defaultVal=p.options||[]}u.type=="8"&&(u.values=[])}),f.value=e.data.fields,console.log("start",f.value),f.value.forEach((u,p)=>{V[u.ename]&&V[u.ename].includes("[{")?u.values=JSON.parse(V[u.ename]):u.values=V[u.ename]})),console.log("end",f.value)}catch(e){console.log(e)}},ye=async()=>{try{let o=await wl(s.id);if(o.code===200){let e=o.data;e.attr=e.attr?e.attr.split(","):[],e.subCid=e.subCid?e.subCid.split(",").map(Number):[],e.oldTagId=e.tagId,e.tagId=e.tagId?e.tagId.split(",").map(Number):[],e.status=e.status.toString(),e.updatedAt=new Date(e.createdAt),Object.assign(s,e),V=e.field,R.value=!1}}catch(o){console.error(o)}},we=o=>{console.log("e-->",o)},ke=o=>{if(o.type.indexOf("image")===-1)return b({message:"上传文件只能是图片格式",type:"success"}),!1;I.value=o;const e=new FileReader;return e.onload=async u=>{let p;typeof u.target.result=="object"?p=window.URL.createObjectURL(new Blob([u.target.result])):p=u.target.result,W.value=p,K.value.dialogFormVisible=!0},e.readAsArrayBuffer(o),!0},Ue=async()=>{if(I.value.size/1024/1024>.2)return b({message:"上传图片必须小于200k",type:"success"}),!1;const o=new FormData;o.append("file",I.value);const e=await h(o);e.code===200&&(s.img=e.data.path)},Ce=o=>{if(o.type.indexOf("image")===-1)return b({message:"上传文件只能是图片格式",type:"success"}),!1;if(o.size/1024/1024>.2)return b({message:"上传图片必须小于200k",type:"success"}),!1},Ee=async o=>{const{data:{index:e},file:u}=o;let p=new FormData;p.append("file",u);let w=await h(p);if(w.code===200){const{filename:d,path:m}=w.data;Array.isArray(f.value[e].values)?f.value[e].values.push({name:d,url:m}):f.value[e].values=[{name:d,url:m}]}},xe=o=>{X.value=o.url,L.value=!0},Ie=async o=>{f.value.forEach((e,u)=>{Array.isArray(e.values)&&e.values.forEach((p,w)=>{p.url==o.url&&(je(o.url),e.values.splice(w,1))})})},je=async o=>{try{await kl(o)}catch(e){console.log(e)}},De=async()=>{try{let o={...s};o.attr=o.attr.toString(),o.subCid=o.subCid.toString(),o.tagId=o.tagId.toString(),!o.img&&P.value&&(o.img=Pl(o.content)[0]),!o.description&&B.value&&(o.description=Bl(o.content).substr(0,255)),f.value.map((u,p)=>{V[u.ename]=typeof u.values=="object"?JSON.stringify(u.values):u.values}),console.log("paramsCopy----->",o);let e=await Ul({...o,field:V});e.code===200?(b({message:"更新成功^_^",type:"success"}),ne.go(-1)):b({message:e.msg,type:"success"})}catch(o){console.log(o)}},Ae=o=>{o&&o.validate((e,u)=>{if(e){if(s.cid===0){b({message:"请选择栏目^_^",type:"success"});return}De()}else return Nl(u),!1})};return vl(async()=>{s.id=re.params.id,await ye(),await Ve(),Y(),fe(),q.value.images_upload_url=await Dl()}),(o,e)=>{const u=Je,p=Ge,w=ze,d=He,m=Ze,v=Ke,Se=Qe,k=We,Re=Xe,le=Ye,Ne=S("MostlyCloudy"),j=el,ae=ll,te=al,E=tl,oe=ol,Pe=sl,D=ul,T=dl,se=nl,ue=rl,Be=il,Le=S("ZoomIn"),Oe=S("Delete"),Te=ml,Fe=S("Plus"),$e=pl,Me=cl;return r(),_("div",Ll,[y("div",Ol,[l(p,{modelValue:J.value,"onUpdate:modelValue":e[0]||(e[0]=a=>J.value=a),onTabClick:ge},{default:t(()=>[l(u,{label:"基本信息",name:"first"}),l(u,{label:"扩展信息",name:"second"}),f.value.length>0?(r(),c(u,{key:0,label:"模型信息",name:"three"})):F("",!0)]),_:1},8,["modelValue"])]),y("div",Tl,[l($e,{ref_key:"paramsRef",ref:Q,model:s,"label-width":"90px"},{default:t(()=>[$((r(),_("div",null,[l(D,{gutter:20},{default:t(()=>[l(m,{sm:24,md:12},{default:t(()=>[l(d,{label:"文章栏目"},{default:t(()=>[l(w,{props:ie,"show-all-levels":!1,modelValue:N.value,"onUpdate:modelValue":e[1]||(e[1]=a=>N.value=a),options:G.value,onChange:be},null,8,["modelValue","options"])]),_:1})]),_:1}),l(m,{sm:24,md:12},{default:t(()=>[l(d,{label:"文章标题",prop:"title",rules:[{required:!0,message:"请输入文章标题",trigger:"blur"},{min:1,max:100,message:"标题不能超过100个字",trigger:"blur"}]},{default:t(()=>[l(v,{modelValue:s.title,"onUpdate:modelValue":e[2]||(e[2]=a=>s.title=a)},null,8,["modelValue"])]),_:1})]),_:1}),l(m,{sm:24,md:12},{default:t(()=>[l(d,{label:"tag标签"},{default:t(()=>[l(Se,{modelValue:s.tagId,"onUpdate:modelValue":e[3]||(e[3]=a=>s.tagId=a),options:Z.value,placeholder:"请选择标签",style:{width:"240px"},multiple:"",filterable:"",remote:"","remote-method":Y},null,8,["modelValue","options"])]),_:1})]),_:1}),l(m,{sm:24,md:12},{default:t(()=>[l(d,{label:"内容属性"},{default:t(()=>[l(Re,{modelValue:s.attr,"onUpdate:modelValue":e[4]||(e[4]=a=>s.attr=a),onChange:we},{default:t(()=>[l(k,{label:"1",value:"1"},{default:t(()=>e[24]||(e[24]=[g("头条")])),_:1}),l(k,{label:"2",value:"2"},{default:t(()=>e[25]||(e[25]=[g("推荐")])),_:1}),l(k,{label:"3",value:"3"},{default:t(()=>e[26]||(e[26]=[g("轮播")])),_:1}),l(k,{label:"4",value:"4"},{default:t(()=>e[27]||(e[27]=[g("热门")])),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(m,{sm:24,md:12},{default:t(()=>[l(d,{label:"发布时间"},{default:t(()=>[l(le,{modelValue:s.createdAt,"onUpdate:modelValue":e[5]||(e[5]=a=>s.createdAt=a),type:"datetime",placeholder:"选择日期时间"},null,8,["modelValue"])]),_:1})]),_:1}),l(m,{sm:24,md:12},{default:t(()=>[l(d,{class:"flex",label:"缩略图"},{default:t(()=>[l(te,{class:"avatar-uploader","http-request":Ue,"show-file-list":!1,"before-upload":ke},{default:t(()=>[l(ae,{placement:"top-start",title:"上传",width:200,trigger:"hover",content:"上传图片作为封面图，大小200k内"},{reference:t(()=>[l(j,{class:"avatar-uploader-icon"},{default:t(()=>[l(Ne)]),_:1})]),_:1})]),_:1}),s.img?(r(),c(ae,{key:0,placement:"right",width:400,trigger:"hover"},{reference:t(()=>[l(E,{class:"avatar-uploader-icon pointer ml-10",src:s.img},null,8,["src"])]),default:t(()=>[l(E,{style:{width:"100%"},src:s.img},null,8,["src"])]),_:1})):F("",!0),l(oe,{type:"primary",class:"ml-10",onClick:e[6]||(e[6]=a=>O.value=!0)},{default:t(()=>e[28]||(e[28]=[g(" 默认封面图 ")])),_:1}),l(Pe,{modelValue:O.value,"onUpdate:modelValue":e[7]||(e[7]=a=>O.value=a),title:"默认封面图",class:"w-300","with-header":!1},{default:t(()=>[y("div",Fl,[(r(!0),_(U,null,C(ce.value,(a,A)=>(r(),c(E,{key:A,src:a,onClick:n=>_e(a),fit:"cover"},null,8,["src","onClick"]))),128))])]),_:1},8,["modelValue"]),l(v,{class:"ml-10 flex-1",modelValue:s.img,"onUpdate:modelValue":e[8]||(e[8]=a=>s.img=a)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),l(d,{label:"内容摘要"},{default:t(()=>[l(v,{type:"textarea",rows:2,placeholder:"请输入内容",modelValue:s.description,"onUpdate:modelValue":e[9]||(e[9]=a=>s.description=a)},null,8,["modelValue"])]),_:1}),l(d,{label:"文章内容"},{default:t(()=>[l(Il,{modelValue:s.content,"onUpdate:modelValue":e[10]||(e[10]=a=>s.content=a),setting:q.value,onInit:ve,"script-src":"/public/admin/tinymce/tinymce.min.js"},null,8,["modelValue","setting"])]),_:1}),l(D,{gutter:20},{default:t(()=>[l(m,{sm:24,md:12,lg:8},{default:t(()=>[l(d,{label:"自动封面"},{default:t(()=>[l(k,{modelValue:P.value,"onUpdate:modelValue":e[12]||(e[12]=a=>P.value=a)},{default:t(()=>[e[29]||(e[29]=g(" 文章第 ")),l(v,{modelValue:H.value,"onUpdate:modelValue":e[11]||(e[11]=a=>H.value=a),class:"w-80 mr-8 ml-8",placeholder:"请输入内容"},null,8,["modelValue"]),e[30]||(e[30]=g("张图 "))]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(m,{sm:24,md:12,lg:8},{default:t(()=>[l(d,{label:"提取描述"},{default:t(()=>[l(k,{modelValue:B.value,"onUpdate:modelValue":e[13]||(e[13]=a=>B.value=a)},{default:t(()=>e[31]||(e[31]=[g("提取文章描述")])),_:1},8,["modelValue"])]),_:1})]),_:1}),l(m,{sm:24,md:12,lg:8},{default:t(()=>[l(d,{label:"是否显示"},{default:t(()=>[l(T,{modelValue:s.status,"onUpdate:modelValue":e[14]||(e[14]=a=>s.status=a),value:"0"},{default:t(()=>e[32]||(e[32]=[g("发布")])),_:1},8,["modelValue"]),l(T,{modelValue:s.status,"onUpdate:modelValue":e[15]||(e[15]=a=>s.status=a),value:"1"},{default:t(()=>e[33]||(e[33]=[g("不发布")])),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})])),[[M,x.value==0],[Me,R.value]]),$(y("div",null,[l(D,{gutter:20},{default:t(()=>[l(m,{sm:24,md:12},{default:t(()=>[l(d,{label:"短标题",prop:"name"},{default:t(()=>[l(v,{modelValue:s.shortTitle,"onUpdate:modelValue":e[16]||(e[16]=a=>s.shortTitle=a)},null,8,["modelValue"])]),_:1})]),_:1}),l(m,{sm:24,md:12},{default:t(()=>[l(d,{label:"内容模板"},{default:t(()=>[l(ue,{modelValue:s.articleView,"onUpdate:modelValue":e[17]||(e[17]=a=>s.articleView=a),placeholder:"请选择模板"},{default:t(()=>[(r(!0),_(U,null,C(z.value,a=>(r(),c(se,{key:a.value,label:a.label,value:a.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(m,{sm:24,md:12},{default:t(()=>[l(d,{label:"来源"},{default:t(()=>[l(v,{modelValue:s.source,"onUpdate:modelValue":e[18]||(e[18]=a=>s.source=a)},null,8,["modelValue"])]),_:1})]),_:1}),l(m,{sm:24,md:12},{default:t(()=>[l(d,{label:"作者"},{default:t(()=>[l(v,{modelValue:s.author,"onUpdate:modelValue":e[19]||(e[19]=a=>s.author=a)},null,8,["modelValue"])]),_:1})]),_:1}),l(m,{sm:24,md:12},{default:t(()=>[l(d,{label:"外链跳转"},{default:t(()=>[l(v,{modelValue:s.link,"onUpdate:modelValue":e[20]||(e[20]=a=>s.link=a),max:"120"},null,8,["modelValue"])]),_:1})]),_:1}),l(m,{sm:24,md:12},{default:t(()=>[l(d,{label:"浏览数"},{default:t(()=>[l(v,{modelValue:s.pv,"onUpdate:modelValue":e[21]||(e[21]=a=>s.pv=a)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})],512),[[M,x.value==1]]),$(y("div",null,[l(D,{gutter:20},{default:t(()=>[(r(!0),_(U,null,C(f.value,(a,A)=>(r(),c(m,{key:A,sm:24,md:24,lg:24},{default:t(()=>[["1","7"].includes(a.type)?(r(),c(d,{key:0,label:a.cname},{default:t(()=>[l(v,{modelValue:a.values,"onUpdate:modelValue":n=>a.values=n,max:"120"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"])):["2","9"].includes(a.type)?(r(),c(d,{key:1,label:a.cname},{default:t(()=>[l(v,{type:"textarea",rows:4,placeholder:"请输入内容",modelValue:a.values,"onUpdate:modelValue":n=>a.values=n},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"])):["4"].includes(a.type)?(r(),c(d,{key:2,label:a.cname},{default:t(()=>[l(Be,{modelValue:a.values,"onUpdate:modelValue":n=>a.values=n},{default:t(()=>[(r(!0),_(U,null,C(a.defaultVal,n=>(r(),c(T,{key:n.value,label:n.label,value:n.value},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"])):["3","5"].includes(a.type)?(r(),c(d,{key:3,label:a.cname},{default:t(()=>[l(ue,{modelValue:a.values,"onUpdate:modelValue":n=>a.values=n,placeholder:"请选择"},{default:t(()=>[(r(!0),_(U,null,C(a.defaultVal,n=>(r(),c(se,{key:n.value,label:n.label,value:n.value},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"])):a.type==="6"?(r(),c(d,{key:4,label:a.cname},{default:t(()=>[l(le,{modelValue:a.values,"onUpdate:modelValue":n=>a.values=n,"default-value":new Date,type:"datetime",placeholder:"请选择"},null,8,["modelValue","onUpdate:modelValue","default-value"])]),_:2},1032,["label"])):a.type==="8"?(r(),c(d,{key:5,label:a.cname,class:"flex align-c justify-center"},{default:t(()=>[y("div",$l,[(r(!0),_(U,null,C(a.values,(n,he)=>(r(),_("div",{class:"pos-r img-item",key:n.url},[(r(),c(E,{key:he,src:n.url,fit:"cover"},null,8,["src"])),y("div",Ml,[l(j,{onClick:qe=>xe(n)},{default:t(()=>[l(Le)]),_:2},1032,["onClick"]),l(j,{onClick:qe=>Ie(n)},{default:t(()=>[l(Oe)]),_:2},1032,["onClick"])])]))),128))]),l(Te,{modelValue:L.value,"onUpdate:modelValue":e[22]||(e[22]=n=>L.value=n)},{default:t(()=>[l(E,{"w-full":"",src:X.value,alt:"Preview Image"},null,8,["src"])]),_:1},8,["modelValue"]),l(te,{multiple:"","http-request":Ee,data:{...a,index:A},"before-upload":Ce,limit:10,"show-file-list":!1},{default:t(()=>[l(j,{class:"upload-icon"},{default:t(()=>[l(Fe)]),_:1})]),_:2},1032,["data"])]),_:2},1032,["label"])):F("",!0)]),_:2},1024))),128))]),_:1})],512),[[M,x.value==2&&f.value.length>0]]),l(d,null,{default:t(()=>[l(oe,{type:"primary",onClick:e[23]||(e[23]=a=>Ae(Q.value))},{default:t(()=>e[34]||(e[34]=[g("保存")])),_:1})]),_:1})]),_:1},8,["model"])]),l(jl,{ref_key:"dialogCrop",ref:K,img:W.value,file:I.value,onCrop:gl(h)},null,8,["img","file","onCrop"])])}}},Pa=Al(hl,[["__scopeId","data-v-8170a4db"]]);export{Pa as default};
