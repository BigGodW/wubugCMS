import{E as f,f as R,w as j,P as N,Q as U,R as V}from"./element-plus.js";import{u as H}from"./vue-router.js";import{H as Q,E as z,I as F}from"./@element-plus.js";import{l as E,a as G,b as L}from"./collect.js";import{c as q}from"./article.js";import{f as J}from"./index.js";import{r as p,I as K,j as O,ad as W,o as X,c as Y,M as o,Q as l,U as d,V as y,u as h}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./dayjs.js";import"./@popperjs.js";import"./@ctrl.js";import"./memoize-one.js";import"./normalize-wheel-es.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vanilla-jsoneditor.js";import"./json-source-map.js";import"./@jsonquerylang.js";import"./@fortawesome.js";import"./natural-compare-lite.js";import"./@codemirror.js";import"./@lezer.js";import"./crelt.js";import"./style-mod.js";import"./w3c-keyname.js";import"./@replit.js";import"./codemirror-wrapped-line-indent.js";import"./fast-deep-equal.js";import"./fast-uri.js";import"./jmespath.js";import"./jsonpath-plus.js";import"./immutable-json-patch.js";import"./jsonrepair.js";import"./axios.js";import"./js-cookie.js";import"./nprogress.js";/* empty css        */const Z={class:"bg-fff radius-6 pd-20"},Vt={__name:"index",setup(tt){const T=H(),x=p(null),v=p([]),A=p([]),b=p(0),w=p(1),n=p(0),i=K({cid:0,title:"",shortTitle:"",tagId:"",attr:[],source:"",author:"",description:"",img:"",createdAt:new Date,updatedAt:new Date,content:"欢迎使用ChanCMS系统",status:"0",pv:1,link:""}),C=async()=>{try{const e=await E(w.value);e.code===200&&(v.value=[...e.data.list],b.value=e.data.count)}catch(e){console.log(e)}},S=e=>{w.value=e,E()},D=e=>{A.value=e},k=async e=>{try{const{pages:t,titleTag:a,articleTag:u,parseData:c,charset:s,cid:_,status:g}=e,r=t.split(","),m=await G({taskUrl:r[n.value],titleTag:a,articleTag:u,parseData:c,charset:s});if(m.code===200){const{title:M,article:P}=m.data;i.title=M,i.content=P,i.cid=_,i.status=g===1?1:0,I(i)}}catch(t){console.log(t)}},I=async e=>{try{const t={...i};t.attr=t.attr.toString(),t.tagId=t.tagId.toString(),!t.description&&t.content&&(t.description=J(t.content).substr(0,255));const a=await q({defaultParams:t,fieldParams:{}});a.code===200?(f({message:"第".concat(n.value+1,"条数据完成^_^"),type:"success"}),setTimeout(()=>{const{pages:u}=e,c=u.split(",");n.value<=c.length-1&&(k(e),n.value=n.value+1)},3e3)):f({message:a.msg||"第".concat(n.value+1,"条数据失败^_^"),type:"error"})}catch(t){console.log(t)}},$=e=>{const t=e.id;T.push({name:"collect-edit",params:{id:t}})},B=async e=>{const t=e.id;try{const a=await L(t);a.code===200?(f({message:"删除成功 ^_^",type:"success"}),C()):f({message:a.msg,type:"error"})}catch(a){console.log(a)}};return O(()=>{C()}),(e,t)=>{const a=R,u=W("router-link"),c=j,s=N,_=U,g=V;return X(),Y("div",Z,[o(c,{type:"flex",justify:"end"},{default:l(()=>[o(u,{to:"/collect/add"},{default:l(()=>[o(a,{type:"primary",round:""},{default:l(()=>t[0]||(t[0]=[d("新增")])),_:1})]),_:1})]),_:1}),o(_,{ref_key:"multipleTable",ref:x,data:v.value,"tooltip-effect":"dark","row-key":"id",onSelectionChange:D},{default:l(()=>[o(s,{type:"selection"}),o(s,{prop:"id",width:"60",label:"编号"}),o(s,{prop:"taskName",label:"任务名称"}),o(s,{prop:"category",label:"所属栏目"}),o(s,{prop:"charset",label:"编码"},{default:l(r=>[d(y(r.row.charset===1?"UTF-8":"GB2312"),1)]),_:1}),o(s,{prop:"status",label:"状态"},{default:l(r=>[d(y(r.row.status===1?"草稿":"发布"),1)]),_:1}),o(s,{prop:"updatedAt",label:"发布时间"},{default:l(r=>[d(y(r.row.updatedAt),1)]),_:1}),o(s,{fixed:"right",width:"222",label:"操作"},{default:l(r=>[o(a,{icon:h(Q),circle:"",onClick:m=>$(r.row)},null,8,["icon","onClick"]),o(a,{icon:h(z),circle:"",onClick:m=>B(r.row)},null,8,["icon","onClick"]),o(a,{type:"primary",round:"",icon:h(F),onClick:m=>k(r.row)},{default:l(()=>t[1]||(t[1]=[d("执行")])),_:2},1032,["icon","onClick"])]),_:1})]),_:1},8,["data"]),o(c,{type:"flex",class:"mt-20 align-c",justify:"center"},{default:l(()=>[o(g,{background:"",layout:"prev, pager, next",onCurrentChange:S,"page-size":10,total:b.value,"hide-on-single-page":""},null,8,["total"])]),_:1})])}}};export{Vt as default};
