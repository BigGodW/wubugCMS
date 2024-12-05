import{M as ne,E as V,m as re,n as ue,x as de,t as ie,s as me,I as pe,J as fe,H as ve,R as Ve,a as ce,S as ye,f as ge,r as be}from"./element-plus.js";import{r as u,I as _e,j as we,ad as Ee,o as f,c as b,a as c,M as o,Q as s,_ as B,R as _,W as L,O as C,a8 as S,U as m,$ as T,V as Ue}from"./@vue.js";import{a as xe,u as ke}from"./vue-router.js";import{f as Be,a as Ce,u as Se}from"./category.js";import{s as Te}from"./article.js";import{b as Ie,a as Re,t as Fe}from"./index.js";import{l as Pe}from"./model.js";import{v as je}from"./sys_config.js";import{p as De}from"./pinyin-pro.js";import"./lodash-es.js";import"./async-validator.js";import"./dayjs.js";import"./@element-plus.js";import"./@popperjs.js";import"./@ctrl.js";import"./memoize-one.js";import"./normalize-wheel-es.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vanilla-jsoneditor.js";import"./json-source-map.js";import"./@jsonquerylang.js";import"./@fortawesome.js";import"./natural-compare-lite.js";import"./@codemirror.js";import"./@lezer.js";import"./crelt.js";import"./style-mod.js";import"./w3c-keyname.js";import"./@replit.js";import"./codemirror-wrapped-line-indent.js";import"./fast-deep-equal.js";import"./fast-uri.js";import"./jmespath.js";import"./jsonpath-plus.js";import"./immutable-json-patch.js";import"./jsonrepair.js";import"./axios.js";import"./js-cookie.js";import"./nprogress.js";/* empty css        */const Le={class:"bg-fff radius-6 pd-20"},Me={class:"mr-10 ml-10"},Ne={class:"mr-10 ml-10 mb-20"},Cl={__name:"edit",setup(Oe){const M=xe(),N=ke(),w=u(M.params.id),E=u([]),d=u(""),O={checkStrictly:!0},I=u("first"),y=u("0"),A=u(null),U=u([]),R=u([]),x=u([]),F=u(!1),k=u([]),P=u(""),l=_e({pid:0,seoTitle:"",seoKeywords:"",seoDescription:"",name:"",path:"",pinyin:"",mid:"0",description:"",url:"",orderBy:0,type:"0",target:"0",status:"0",articleView:"",listView:""}),K=a=>{l.pinyin=De(a,{toneType:"none"}).replace(/\s+/g,""),l.path=d.value?d.value+l.pinyin:"/"+d.value+l.pinyin},Q=a=>{l.path=d.value?d.value+a:"/"+d.value+a},$=a=>{y.value=a.index},h=async()=>{try{let a=await Te(1,"",w.value);a.code==200&&(F.value=a.data.count>0)}catch(a){console.log(a)}},q=async()=>{try{let a=await Be();if(a.code===200){let e=a.data;U.value=e;let r=Ie(w.value,e);r.length>1&&(r.length=r.length-1),E.value=r;let v=Re(Fe(e));R.value=[...v]}}catch(a){console.log(a)}},z=async()=>{try{let a=await je();a.code===200&&(k.value=a.data.filter(e=>{if(e!=="404.html"&&e!=="500.html")return!0}).map(e=>({label:e,value:e})))}catch(a){console.log(a)}},Z=async()=>{try{let a=await Pe();a.code===200&&(x.value=a.data.list.map(e=>(e.id=e.id.toString(),e)))}catch(a){console.log(a)}},G=async()=>{try{let a=await Ce(w.value);if(a.code===200){P.value=a.data.path,Object.assign(l,a.data);let e=[];U.value.forEach(r=>{r.id==a.data.pid&&e.push("/"+r.pinyin)}),d.value=e.join("")+"/"}}catch(a){console.error(a)}},H=a=>{let e=[];Object.values(a).forEach(v=>{U.value.forEach(g=>{g.id==v&&e.push("/"+g.pinyin)})}),d.value=e.join("")+"/",l.path=d.value+l.pinyin,a[0]!=-1&&(l.pid=a[a.length-1])},J=async()=>l.pinyin=="article"?(V({message:"不能使用article作为路径",type:"success"}),!1):/^[a-zA-Z][a-zA-Z0-9]*$/.test(l.pinyin)?!0:(V({message:"拼音只能包含26个字母和数字，且首字母不能是数字",type:"success"}),!1),W=async()=>{try{let a=await Se(l);a.code?(V({message:"更新成功^_^",type:"success"}),N.go(-1)):V({message:a.msg,type:"success"})}catch(a){console.log(a)}},X=()=>{P.value!=l.path&&ne.confirm("栏目路径已修改，若有子栏目请同步修改！！！","温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{J()&&W()}).catch(()=>{V({type:"info",message:"操作取消成功！"})})};return we(()=>{Z(),q(),G(),h(),z()}),(a,e)=>{const r=re,v=ue,g=de,n=ie,i=me,j=pe,D=fe,p=ve,Y=Ve,ee=Ee("QuestionFilled"),le=ce,te=ye,ae=ge,oe=be;return f(),b("div",Le,[c("div",Me,[o(v,{modelValue:I.value,"onUpdate:modelValue":e[0]||(e[0]=t=>I.value=t),onTabClick:$},{default:s(()=>[o(r,{label:"基本信息",name:"first"}),o(r,{label:"SEO设置",name:"second"}),o(r,{label:"扩展信息",name:"third"})]),_:1},8,["modelValue"])]),c("div",Ne,[o(oe,{ref_key:"paramsRef",ref:A,model:l,"label-width":"84px",class:"w640"},{default:s(()=>[B(c("div",null,[l.pid!=0?(f(),_(n,{key:0,label:"上级栏目"},{default:s(()=>[o(g,{props:O,"show-all-levels":!1,modelValue:E.value,"onUpdate:modelValue":e[1]||(e[1]=t=>E.value=t),options:R.value,onChange:H,placeholder:"不选择为顶级栏目"},null,8,["modelValue","options"])]),_:1})):L("",!0),o(n,{label:"栏目名称",prop:"name",rules:[{required:!0,message:"请输入栏目名称",trigger:"blur"},{min:1,max:50,message:"栏目不能超过50个字",trigger:"blur"}]},{default:s(()=>[o(i,{modelValue:l.name,"onUpdate:modelValue":e[2]||(e[2]=t=>l.name=t),onChange:K},null,8,["modelValue"])]),_:1}),o(n,{label:"栏目标识"},{default:s(()=>[o(i,{modelValue:l.pinyin,"onUpdate:modelValue":e[3]||(e[3]=t=>l.pinyin=t),onChange:Q,placeholder:"注：首页请填写home"},null,8,["modelValue"])]),_:1}),o(n,{label:"栏目路径"},{default:s(()=>[o(i,{modelValue:l.path,"onUpdate:modelValue":e[4]||(e[4]=t=>l.path=t)},null,8,["modelValue"])]),_:1}),o(n,{label:"列表模板"},{default:s(()=>[o(D,{modelValue:l.listView,"onUpdate:modelValue":e[5]||(e[5]=t=>l.listView=t),placeholder:"Select"},{default:s(()=>[(f(!0),b(C,null,S(k.value,t=>(f(),_(j,{key:t.value,label:t.label,value:t.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(n,{label:"内容模板"},{default:s(()=>[o(D,{modelValue:l.articleView,"onUpdate:modelValue":e[6]||(e[6]=t=>l.articleView=t),placeholder:"Select"},{default:s(()=>[(f(!0),b(C,null,S(k.value,t=>(f(),_(j,{key:t.value,label:t.label,value:t.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(n,{label:"栏目类型"},{default:s(()=>[o(p,{modelValue:l.type,"onUpdate:modelValue":e[7]||(e[7]=t=>l.type=t),value:"0"},{default:s(()=>e[21]||(e[21]=[m("栏目")])),_:1},8,["modelValue"]),o(p,{modelValue:l.type,"onUpdate:modelValue":e[8]||(e[8]=t=>l.type=t),value:"1"},{default:s(()=>e[22]||(e[22]=[m("单页")])),_:1},8,["modelValue"])]),_:1}),o(n,{label:"是否显示"},{default:s(()=>[o(p,{modelValue:l.status,"onUpdate:modelValue":e[9]||(e[9]=t=>l.status=t),value:"0"},{default:s(()=>e[23]||(e[23]=[m("显示")])),_:1},8,["modelValue"]),o(p,{modelValue:l.status,"onUpdate:modelValue":e[10]||(e[10]=t=>l.status=t),value:"1"},{default:s(()=>e[24]||(e[24]=[m("隐藏")])),_:1},8,["modelValue"])]),_:1})],512),[[T,y.value==0]]),B(c("div",null,[o(n,{label:"seo标题"},{default:s(()=>[o(i,{modelValue:l.seoTitle,"onUpdate:modelValue":e[11]||(e[11]=t=>l.seoTitle=t)},null,8,["modelValue"])]),_:1}),o(n,{label:"seo关键词"},{default:s(()=>[o(i,{modelValue:l.seoKeywords,"onUpdate:modelValue":e[12]||(e[12]=t=>l.seoKeywords=t)},null,8,["modelValue"])]),_:1}),o(n,{label:"seo描述"},{default:s(()=>[o(i,{type:"textarea",prop:"textarea",rows:2,modelValue:l.seoDescription,"onUpdate:modelValue":e[13]||(e[13]=t=>l.seoDescription=t)},null,8,["modelValue"])]),_:1})],512),[[T,y.value==1]]),B(c("div",null,[o(n,{label:"栏目链接"},{default:s(()=>[o(i,{modelValue:l.url,"onUpdate:modelValue":e[14]||(e[14]=t=>l.url=t)},null,8,["modelValue"])]),_:1}),o(n,{label:"扩展模型"},{default:s(()=>[o(Y,{modelValue:l.mid,"onUpdate:modelValue":e[15]||(e[15]=t=>l.mid=t)},{default:s(()=>[o(p,{value:"0"},{default:s(()=>e[25]||(e[25]=[m("基本模型")])),_:1}),x.value.length>0?(f(!0),b(C,{key:0},S(x.value,(t,se)=>(f(),_(p,{disabled:F.value,key:se,value:t.id},{default:s(()=>[m(Ue(t.model)+"模型 ",1)]),_:2},1032,["disabled","value"]))),128)):L("",!0)]),_:1},8,["modelValue"]),o(te,{content:"如果栏目已经存在文章，则不能更换模型",effect:"light",placement:"top-start"},{default:s(()=>[o(le,{class:"ml-20 pointer"},{default:s(()=>[o(ee,{class:"c-165dff"})]),_:1})]),_:1})]),_:1}),o(n,{label:"打开方式"},{default:s(()=>[o(p,{modelValue:l.target,"onUpdate:modelValue":e[16]||(e[16]=t=>l.target=t),value:"0"},{default:s(()=>e[26]||(e[26]=[m("当前页面")])),_:1},8,["modelValue"]),o(p,{modelValue:l.target,"onUpdate:modelValue":e[17]||(e[17]=t=>l.target=t),value:"1"},{default:s(()=>e[27]||(e[27]=[m("新页面")])),_:1},8,["modelValue"])]),_:1}),o(n,{label:"栏目排序"},{default:s(()=>[o(i,{modelValue:l.orderBy,"onUpdate:modelValue":e[18]||(e[18]=t=>l.orderBy=t)},null,8,["modelValue"])]),_:1}),o(n,{label:"栏目描述"},{default:s(()=>[o(i,{type:"textarea",prop:"textarea",rows:2,modelValue:l.description,"onUpdate:modelValue":e[19]||(e[19]=t=>l.description=t)},null,8,["modelValue"])]),_:1})],512),[[T,y.value==2]]),o(n,null,{default:s(()=>[o(ae,{type:"primary",onClick:e[20]||(e[20]=t=>X("params"))},{default:s(()=>e[28]||(e[28]=[m("保存")])),_:1})]),_:1})]),_:1},8,["model"])])])}}};export{Cl as default};
