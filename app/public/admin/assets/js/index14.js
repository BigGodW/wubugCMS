import{E as m,f as j,w as B,P as M,Q as V,R as A}from"./element-plus.js";import{u as N}from"./vue-router.js";import{H as Q,E as $}from"./@element-plus.js";import{l as z,a as H}from"./message.js";import{_ as I}from"./index.js";import{r as n,j as U,ad as q,o as s,c as i,M as t,Q as r,U as g,V as F,u as y}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./dayjs.js";import"./@popperjs.js";import"./@ctrl.js";import"./memoize-one.js";import"./normalize-wheel-es.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vanilla-jsoneditor.js";import"./json-source-map.js";import"./@jsonquerylang.js";import"./@fortawesome.js";import"./natural-compare-lite.js";import"./@codemirror.js";import"./@lezer.js";import"./crelt.js";import"./style-mod.js";import"./w3c-keyname.js";import"./@replit.js";import"./codemirror-wrapped-line-indent.js";import"./fast-deep-equal.js";import"./fast-uri.js";import"./jmespath.js";import"./jsonpath-plus.js";import"./immutable-json-patch.js";import"./jsonrepair.js";import"./axios.js";import"./js-cookie.js";import"./nprogress.js";/* empty css        */const G={class:"bg-fff radius-6 pd-20"},J={key:0},K={key:1},L={key:2},O={key:3},W={__name:"index",setup(X){const h=n(null),d=n([]),b=n([]),u=n(0),_=n(1),k=N(),w=Q,v=$;U(()=>{p()});const p=async()=>{try{const e=await z(_.value);e.code===200?(d.value=e.data.list,u.value=e.data.count):m({message:e.msg,type:"error"})}catch(e){console.log(e)}},C=e=>{_.value=e,p()},x=e=>{b.value=e},E=e=>{k.push({name:"message-edit",params:{id:e.id}})},D=async e=>{try{const l=await H(e.id);l.code===200?(m({message:"删除成功 ^_^",type:"success"}),p()):m({message:l.msg,type:"error"})}catch(l){console.log(l)}};return(e,l)=>{const c=j,R=q("router-link"),f=B,o=M,T=V,P=A;return s(),i("div",G,[t(f,{type:"flex",justify:"end"},{default:r(()=>[t(R,{to:"/message/add"},{default:r(()=>[t(c,{type:"primary",round:""},{default:r(()=>l[0]||(l[0]=[g("新增")])),_:1})]),_:1})]),_:1}),t(T,{ref_key:"multipleTableRef",ref:h,data:d.value,"tooltip-effect":"dark","row-key":"id",onSelectionChange:x},{default:r(()=>[t(o,{type:"selection"}),t(o,{prop:"id",width:"80",label:"编号"}),t(o,{prop:"title",width:"300",label:"标题"}),t(o,{prop:"type",label:"留言类型"},{default:r(a=>[a.row.type===1?(s(),i("span",J,"咨询")):a.row.type===2?(s(),i("span",K,"建议")):a.row.type===3?(s(),i("span",L,"投诉")):(s(),i("span",O,"其它"))]),_:1}),t(o,{prop:"name",label:"联系人"}),t(o,{prop:"tel",label:"手机号"}),t(o,{prop:"company",label:"公司单位"}),t(o,{prop:"createdAt",label:"发布时间"},{default:r(a=>[g(F(a.row.createdAt),1)]),_:1}),t(o,{fixed:"right",width:"100",label:"操作"},{default:r(a=>[t(c,{icon:y(w),circle:"",onClick:S=>E(a.row)},null,8,["icon","onClick"]),t(c,{icon:y(v),circle:"",onClick:S=>D(a.row)},null,8,["icon","onClick"])]),_:1})]),_:1},8,["data"]),t(f,{type:"flex",class:"mt-20 align-c",justify:"center"},{default:r(()=>[t(P,{background:"",layout:"prev, pager, next",onCurrentChange:C,"page-size":10,total:u.value,"hide-on-single-page":""},null,8,["total"])]),_:1})])}}},At=I(W,[["__scopeId","data-v-c430298d"]]);export{At as default};
