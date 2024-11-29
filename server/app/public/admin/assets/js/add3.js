import{E as T,s as G,t as Q,H as W,R as J,f as K,m as X,T as Y,x as Z,n as h,r as ee}from"./element-plus.js";import{f as le}from"./category.js";import{g as P,a as te,c as ae}from"./collect.js";import{_ as re,a as se,t as oe,s as ue}from"./index.js";import{r as _,I as R,j as de,o as g,c as b,M as t,Q as a,a as i,U as p,R as x,O as B,a8 as D,V as U,W as w}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./dayjs.js";import"./@element-plus.js";import"./@popperjs.js";import"./@ctrl.js";import"./memoize-one.js";import"./normalize-wheel-es.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vanilla-jsoneditor.js";import"./json-source-map.js";import"./@jsonquerylang.js";import"./@fortawesome.js";import"./natural-compare-lite.js";import"./@codemirror.js";import"./@lezer.js";import"./crelt.js";import"./style-mod.js";import"./w3c-keyname.js";import"./@replit.js";import"./codemirror-wrapped-line-indent.js";import"./fast-deep-equal.js";import"./fast-uri.js";import"./jmespath.js";import"./jsonpath-plus.js";import"./immutable-json-patch.js";import"./jsonrepair.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";import"./nprogress.js";/* empty css        */const ne={class:"bg-fff pd-20 radius-6"},ie={class:"flex w-full"},me={class:"flex w-full"},pe={class:"flex w-full"},ge=["href"],fe={class:"flex w-full"},ce={class:"f-15"},Ve=["innerHTML"],_e={__name:"add",setup(be){const N=_(null),E=_("list"),C=_([]),$={checkStrictly:!0},q=_([]),l=R({taskName:"",targetUrl:"",listTag:"",startNum:1,endNum:1,increment:1,pages:[],titleTag:"",articleTag:"",charset:"1",parseData:"return data;",status:"1",cid:1}),y=_([]),c=R({}),L=async()=>{try{let s=await le();if(s.code===200){let e=se(oe(s.data));q.value=[...e]}}catch(s){console.log(s)}},M=s=>{s[0]!==-1&&(l.cid=s[s.length-1])},z=async()=>{try{let{targetUrl:s,listTag:e,charset:u}=l,o=await P({targetUrl:s,listTag:e,charset:u});if(o.code===200){let d=o.data;const n=/^(.*:\/\/[^\/]+).*$/,m=s.match(n),f=m?m[1]:"";d[0].includes("http")||(d=d.map(V=>"".concat(f).concat(V))),l.pages=d,T({message:"列表地址获取成功^_^",type:"success"})}}catch(s){console.log(s)}},I=async()=>{try{let{targetUrl:s,startNum:e,endNum:u,increment:o}=l,d=[];for(let n=e;n<=u;n+=o){let m=s.replace("${page}",n);d.push(m)}y.value=d,await Promise.all(y.value.map(async(n,m)=>{let{listTag:f,charset:V}=l;if(m>0){let v=await P({targetUrl:n,listTag:f,charset:V});v.code===200&&(l.pages=[...l.pages,...v.data])}}))}catch(s){console.log(s)}},S=async()=>{try{let{titleTag:s,articleTag:e,parseData:u,charset:o}=l,d=l.pages[0]||"",n=await te({taskUrl:d,titleTag:s,articleTag:e,parseData:u,charset:o});n.code===200&&(c.title=n.data.title,c.article=n.data.article,T({message:"内容获取成功^_^",type:"success"}))}catch(s){console.log(s)}},j=async()=>{try{let s={...l};s.pages=l.pages.join(",");let e=await ae(s);e.code===200?(T({message:"新增成功^_^",type:"success"}),F()):T({message:e.msg,type:"error"})}catch(s){console.log(s)}},A=s=>{s.validate((e,u)=>{if(e)j();else return ue(u),!1})},F=()=>{window.history.back()};return de(()=>{L()}),(s,e)=>{const u=G,o=Q,d=W,n=J,m=K,f=X,V=Y,v=Z,H=h,O=ee;return g(),b("div",ne,[t(O,{ref_key:"formRef",ref:N,model:l,"label-width":"84px"},{default:a(()=>[t(H,{modelValue:E.value,"onUpdate:modelValue":e[13]||(e[13]=r=>E.value=r),class:"demo-tabs"},{default:a(()=>[t(f,{label:"列表测试",name:"list"},{default:a(()=>[t(o,{label:"任务名称",prop:"taskName",rules:[{required:!0,message:"请输入任务名称",trigger:"blur"}]},{default:a(()=>[t(u,{modelValue:l.taskName,"onUpdate:modelValue":e[0]||(e[0]=r=>l.taskName=r),placeholder:"例：前端库-chat问答"},null,8,["modelValue"])]),_:1}),t(o,{label:"列表网址",prop:"targetUrl",rules:[{required:!0,message:"请输入匹配网址",trigger:"blur"}]},{default:a(()=>[i("div",ie,[t(u,{class:"flex-1",modelValue:l.targetUrl,"onUpdate:modelValue":e[1]||(e[1]=r=>l.targetUrl=r),placeholder:"/SEO/1_${page}.html"},null,8,["modelValue"])])]),_:1}),t(o,{label:"字符集",prop:"charset",rules:[{required:!0,message:"请选择字符集",trigger:"blur"}]},{default:a(()=>[t(n,{modelValue:l.charset,"onUpdate:modelValue":e[2]||(e[2]=r=>l.charset=r),class:"ml-4"},{default:a(()=>[t(d,{value:"1",size:"large"},{default:a(()=>e[14]||(e[14]=[p("uft-8")])),_:1}),t(d,{value:"2",size:"large"},{default:a(()=>e[15]||(e[15]=[p("gb2312")])),_:1})]),_:1},8,["modelValue"])]),_:1}),t(o,{label:"列表链接",prop:"listTag",rules:[{required:!0,message:"请输入文章列表标签",trigger:"blur"}]},{default:a(()=>[i("div",me,[t(u,{class:"flex-1",modelValue:l.listTag,"onUpdate:modelValue":e[3]||(e[3]=r=>l.listTag=r),placeholder:"例：.content h4 a"},null,8,["modelValue"]),t(m,{class:"ml-5",type:"primary",onClick:z},{default:a(()=>e[16]||(e[16]=[p(" 测试 ")])),_:1})])]),_:1}),t(o,{label:"开始页面"},{default:a(()=>[i("div",pe,[t(u,{class:"flex-1",modelValue:l.startNum,"onUpdate:modelValue":e[4]||(e[4]=r=>l.startNum=r)},null,8,["modelValue"]),e[18]||(e[18]=i("span",{class:"ml-5 mr-5"},"至",-1)),t(u,{class:"flex-1",modelValue:l.endNum,"onUpdate:modelValue":e[5]||(e[5]=r=>l.endNum=r)},null,8,["modelValue"]),e[19]||(e[19]=i("span",{class:"ml-5 mr-5"},"每页递增",-1)),t(u,{class:"flex-1 mr-5",modelValue:l.increment,"onUpdate:modelValue":e[6]||(e[6]=r=>l.increment=r)},null,8,["modelValue"]),t(m,{type:"primary",onClick:I},{default:a(()=>e[17]||(e[17]=[p("测试")])),_:1})])]),_:1}),y.value.length>0?(g(),x(o,{key:0,label:"列表地址"},{default:a(()=>[(g(!0),b(B,null,D(y.value,(r,k)=>(g(),b("p",{class:"mr-30",key:k},U(r),1))),128))]),_:1})):w("",!0),l.pages.length>0?(g(),x(o,{key:1,label:"文章地址"},{default:a(()=>[(g(!0),b(B,null,D(l.pages,(r,k)=>(g(),b("p",{class:"mr-30",key:k},U(r),1))),128))]),_:1})):w("",!0)]),_:1}),t(f,{label:"内容测试",name:"article"},{default:a(()=>[t(o,{label:"目标地址"},{default:a(()=>[i("a",{class:"mr-10",href:l.pages[0],target:"_blank"},U(l.pages[0]),9,ge),e[20]||(e[20]=p("（默认第一个作为测试） "))]),_:1}),t(o,{label:"文章标题",prop:"titleTag",rules:[{required:!0,message:"请输入文章标题",trigger:"blur"}]},{default:a(()=>[t(u,{class:"flex-1",placeholder:"例：.title",modelValue:l.titleTag,"onUpdate:modelValue":e[7]||(e[7]=r=>l.titleTag=r)},null,8,["modelValue"])]),_:1}),t(o,{label:"文章内容",prop:"articleTag",rules:[{required:!0,message:"请输入文章内容",trigger:"blur"}]},{default:a(()=>[t(u,{placeholder:"例：.article",modelValue:l.articleTag,"onUpdate:modelValue":e[8]||(e[8]=r=>l.articleTag=r)},null,8,["modelValue"])]),_:1}),t(o,{label:"处理函数",prop:"parseData",rules:[{required:!0,message:"如果无特殊处理，请直接填写 return data;",trigger:"blur"}]},{default:a(()=>[i("div",fe,[t(u,{class:"flex-1",type:"textarea",rows:13,modelValue:l.parseData,"onUpdate:modelValue":e[9]||(e[9]=r=>l.parseData=r),placeholder:"如果不做任何处理，直接返回data。拿到的文本是变量是data,可以直接js函数可以处理成需要的数据，最终需要返回data。例：\n            data = data.replaceAll('<BR>','<br/>');\n            return data;\n            //或\n            return data;\n            "},null,8,["modelValue"]),t(m,{class:"ml-5",type:"primary",onClick:S},{default:a(()=>e[21]||(e[21]=[p(" 测试 ")])),_:1})])]),_:1}),c.title?(g(),x(o,{key:0,label:"采集结果"},{default:a(()=>[t(V,{class:"w-full",shadow:"never"},{header:a(()=>[i("p",ce,[e[22]||(e[22]=i("span",{class:"c-999"},"标题：",-1)),p(U(c.title),1)])]),default:a(()=>[e[23]||(e[23]=i("p",{class:"f-15"},[i("span",{class:"c-999"},"内容：")],-1)),i("div",{class:"f-15 article",innerHTML:c.article},null,8,Ve)]),_:1})]),_:1})):w("",!0)]),_:1}),t(f,{label:"保存配置",name:"save"},{default:a(()=>[t(o,{label:"保存栏目",prop:"articleTag",rules:[{required:!0,message:"请输入保存栏目",trigger:"blur"}]},{default:a(()=>[t(v,{props:$,"show-all-levels":!1,modelValue:C.value,"onUpdate:modelValue":e[10]||(e[10]=r=>C.value=r),options:q.value,onChange:M},null,8,["modelValue","options"])]),_:1}),t(o,{label:"发布状态",prop:"status",rules:[{required:!0,message:"请选择字符集",trigger:"blur"}]},{default:a(()=>[t(n,{modelValue:l.status,"onUpdate:modelValue":e[11]||(e[11]=r=>l.status=r),class:"ml-4"},{default:a(()=>[t(d,{value:"1",size:"large"},{default:a(()=>e[24]||(e[24]=[p("草稿")])),_:1}),t(d,{value:"2",size:"large"},{default:a(()=>e[25]||(e[25]=[p("发布")])),_:1})]),_:1},8,["modelValue"])]),_:1}),t(o,null,{default:a(()=>[t(m,{type:"primary",onClick:e[12]||(e[12]=r=>A(N.value))},{default:a(()=>e[26]||(e[26]=[p("保存")])),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["model"])])}}},al=re(_e,[["__scopeId","data-v-6b25e9d8"]]);export{al as default};
