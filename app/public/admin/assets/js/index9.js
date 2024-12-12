import{E as u,f as P,w as R,O as S,P as j,Q as M}from"./element-plus.js";import{u as V}from"./vue-router.js";import{H as A,E as N}from"./@element-plus.js";import{l as Q,a as $}from"./friendlink.js";import{_ as z}from"./index.js";import{r as l,j as H,ad as I,o as O,c as U,M as t,Q as r,U as _,V as q,u as f}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./dayjs.js";import"./@popperjs.js";import"./@ctrl.js";import"./memoize-one.js";import"./normalize-wheel-es.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vanilla-jsoneditor.js";import"./json-source-map.js";import"./@jsonquerylang.js";import"./@fortawesome.js";import"./natural-compare-lite.js";import"./@codemirror.js";import"./@lezer.js";import"./crelt.js";import"./style-mod.js";import"./w3c-keyname.js";import"./@replit.js";import"./codemirror-wrapped-line-indent.js";import"./fast-deep-equal.js";import"./fast-uri.js";import"./jmespath.js";import"./jsonpath-plus.js";import"./immutable-json-patch.js";import"./jsonrepair.js";import"./axios.js";import"./js-cookie.js";import"./nprogress.js";/* empty css        */const F={class:"pd-20 bg-fff"},G={__name:"index",setup(J){const g=l(null),p=l([]),h=l([]),c=l(0),m=l(1),y=V(),b=A,k=N;H(()=>{i()});const i=async()=>{try{const e=await Q(m.value);e.code===200&&(p.value=e.data.list,c.value=e.data.count)}catch(e){console.log(e)}},w=e=>{m.value=e,i()},v=e=>{h.value=e},C=e=>{y.push({name:"friendlink-edit",params:{id:e.id}})},x=async e=>{try{const o=await $(e.id);o.code===200?(u({message:"删除成功 ^_^",type:"success"}),i()):u({message:o.msg,type:"error"})}catch(o){console.log(o)}};return(e,o)=>{const s=P,E=I("router-link"),d=R,a=S,D=j,T=M;return O(),U("div",F,[t(d,{type:"flex",class:"mt-10 mb-10",justify:"end"},{default:r(()=>[t(E,{to:"/friendlink/add"},{default:r(()=>[t(s,{type:"primary",round:""},{default:r(()=>o[0]||(o[0]=[_("新增")])),_:1})]),_:1})]),_:1}),t(D,{ref_key:"multipleTableRef",ref:g,data:p.value,"tooltip-effect":"dark","row-key":"id",onSelectionChange:v},{default:r(()=>[t(a,{type:"selection"}),t(a,{prop:"id",width:"60",label:"编号"}),t(a,{prop:"title",width:"120",label:"标题"}),t(a,{prop:"link",width:"260",label:"链接"}),t(a,{prop:"orderBy",label:"排序"}),t(a,{prop:"createdAt",label:"发布时间"},{default:r(n=>[_(q(n.row.createdAt),1)]),_:1}),t(a,{fixed:"right",width:"100",label:"操作"},{default:r(n=>[t(s,{icon:f(b),circle:"",onClick:B=>C(n.row)},null,8,["icon","onClick"]),t(s,{icon:f(k),circle:"",onClick:B=>x(n.row)},null,8,["icon","onClick"])]),_:1})]),_:1},8,["data"]),t(d,{type:"flex",class:"mt-20 align-c",justify:"center"},{default:r(()=>[t(T,{background:"",layout:"prev, pager, next",onCurrentChange:w,"page-size":10,total:c.value,"hide-on-single-page":""},null,8,["total"])]),_:1})])}}},St=z(G,[["__scopeId","data-v-83376fef"]]);export{St as default};
