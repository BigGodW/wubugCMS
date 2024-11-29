import{s as U,t as k,H as B,R as F,f as M,r as q,E as _}from"./element-plus.js";import{l as C,c as I}from"./sys_user.js";import{u as L}from"./vue-router.js";import{r as m,j as N,o as n,c as g,M as l,Q as a,O as j,a8 as D,R as G,U as u,V as H}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./dayjs.js";import"./@element-plus.js";import"./@popperjs.js";import"./@ctrl.js";import"./memoize-one.js";import"./normalize-wheel-es.js";import"./index.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vanilla-jsoneditor.js";import"./json-source-map.js";import"./@jsonquerylang.js";import"./@fortawesome.js";import"./natural-compare-lite.js";import"./@codemirror.js";import"./@lezer.js";import"./crelt.js";import"./style-mod.js";import"./w3c-keyname.js";import"./@replit.js";import"./codemirror-wrapped-line-indent.js";import"./fast-deep-equal.js";import"./fast-uri.js";import"./jmespath.js";import"./jsonpath-plus.js";import"./immutable-json-patch.js";import"./jsonrepair.js";import"./axios.js";import"./js-cookie.js";import"./nprogress.js";/* empty css        */const O={class:"bg-fff radius-6"},xe={__name:"add",setup(P){const p=m(null),r=m({username:"",password:"",status:"1",role_id:0}),d=m([]),v=m(1),c={username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:2,max:20,message:"2到20个字符",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:20,message:"6到20个字符",trigger:"blur"}]},V=L(),b=async()=>{try{const t=await C(v.value);t.code===200&&(d.value=t.data.list)}catch(t){console.log(t)}},w=async()=>{try{const t=await I(r.value);t.code===200?(_.success("更新成功^_^"),V.go(-1)):_.error(t.msg)}catch(t){console.log(t)}},y=t=>{t&&t.validate(e=>{if(e)w();else return console.log("error submit!!"),!1})};return N(()=>{b()}),(t,e)=>{const f=U,s=k,i=B,E=F,R=M,x=q;return n(),g("div",O,[l(x,{ref_key:"formRef",ref:p,model:r.value,rules:c,"label-width":"84px"},{default:a(()=>[l(s,{label:"用户名",prop:"username"},{default:a(()=>[l(f,{modelValue:r.value.username,"onUpdate:modelValue":e[0]||(e[0]=o=>r.value.username=o)},null,8,["modelValue"])]),_:1}),l(s,{label:"密码",prop:"password"},{default:a(()=>[l(f,{modelValue:r.value.password,"onUpdate:modelValue":e[1]||(e[1]=o=>r.value.password=o)},null,8,["modelValue"])]),_:1}),l(s,{label:"角色"},{default:a(()=>[l(E,{modelValue:r.value.role_id,"onUpdate:modelValue":e[2]||(e[2]=o=>r.value.role_id=o)},{default:a(()=>[(n(!0),g(j,null,D(d.value,o=>(n(),G(i,{value:o.id,key:o.id},{default:a(()=>[u(H(o.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(s,{label:"是否显示"},{default:a(()=>[l(i,{modelValue:r.value.status,"onUpdate:modelValue":e[3]||(e[3]=o=>r.value.status=o),value:"1"},{default:a(()=>e[6]||(e[6]=[u("启用")])),_:1},8,["modelValue"]),l(i,{modelValue:r.value.status,"onUpdate:modelValue":e[4]||(e[4]=o=>r.value.status=o),value:"2"},{default:a(()=>e[7]||(e[7]=[u("关闭")])),_:1},8,["modelValue"])]),_:1}),l(s,null,{default:a(()=>[l(R,{type:"primary",onClick:e[5]||(e[5]=o=>y(p.value))},{default:a(()=>e[8]||(e[8]=[u("保存")])),_:1})]),_:1})]),_:1},8,["model"])])}}};export{xe as default};
