import{t as f,f as _,r as v,E as x}from"./element-plus.js";import{u as y}from"./json-editor-vue.js";import{_ as b,e as g,i as w}from"./index.js";import{r as p,j as E,o as M,c as V,M as a,Q as s,u as k,U as C}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./dayjs.js";import"./@element-plus.js";import"./@popperjs.js";import"./@ctrl.js";import"./memoize-one.js";import"./normalize-wheel-es.js";import"./vanilla-jsoneditor.js";import"./json-source-map.js";import"./@jsonquerylang.js";import"./@fortawesome.js";import"./natural-compare-lite.js";import"./@codemirror.js";import"./@lezer.js";import"./crelt.js";import"./style-mod.js";import"./w3c-keyname.js";import"./@replit.js";import"./codemirror-wrapped-line-indent.js";import"./fast-deep-equal.js";import"./fast-uri.js";import"./jmespath.js";import"./jsonpath-plus.js";import"./immutable-json-patch.js";import"./jsonrepair.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";import"./nprogress.js";/* empty css        */const F={class:"bg-fff pd-20 radius-6"},h={__name:"index",setup(B){const n=p(null),e=p({id:0,content:{}}),l=async()=>{try{const o=await g();if(o.code===200){const{id:t,content:r}=o.data;e.value={id:t,content:JSON.parse(r)}}}catch(o){console.error(o)}},c=async()=>{try{const{id:o,content:t}=e.value;(await w({id:o,content:t})).code===200&&(x({message:"更新成功^_^",type:"success"}),location.reload())}catch(o){console.log(o)}},d=o=>{o.validate(t=>{if(t)c();else return console.log("error submit!!"),!1})};return E(async()=>{await l()}),(o,t)=>{const r=f,m=_,u=v;return M(),V("div",F,[a(u,{ref_key:"paramsForm",ref:n,model:e.value,"label-width":"84px"},{default:s(()=>[a(r,{label:"菜单配置"},{default:s(()=>[a(k(y),{debounce:100,class:"w-full vjs-tree","show-btns":!1,lang:"zh",mode:"text",expandedOnStart:!1,modelValue:e.value.content,"onUpdate:modelValue":t[0]||(t[0]=i=>e.value.content=i)},null,8,["modelValue"])]),_:1}),a(r,null,{default:s(()=>[a(m,{type:"primary",onClick:t[1]||(t[1]=i=>d(n.value))},{default:s(()=>t[2]||(t[2]=[C("保存")])),_:1})]),_:1})]),_:1},8,["model"])])}}},ut=b(h,[["__scopeId","data-v-12d305a0"]]);export{ut as default};
