import{E as u,s as B,t as N,I as R,J as I,f as F,r as h}from"./element-plus.js";import{a as q,u as O}from"./vue-router.js";import{d as j,u as M}from"./field.js";import{h as C}from"./model.js";import{_ as S}from"./index.js";import{r as T,I as D,j as J,o as d,c as i,M as o,Q as m,O as L,a8 as Q,a as z,U as A}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./dayjs.js";import"./@element-plus.js";import"./@popperjs.js";import"./@ctrl.js";import"./memoize-one.js";import"./normalize-wheel-es.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vanilla-jsoneditor.js";import"./json-source-map.js";import"./@jsonquerylang.js";import"./@fortawesome.js";import"./natural-compare-lite.js";import"./@codemirror.js";import"./@lezer.js";import"./crelt.js";import"./style-mod.js";import"./w3c-keyname.js";import"./@replit.js";import"./codemirror-wrapped-line-indent.js";import"./fast-deep-equal.js";import"./fast-uri.js";import"./jmespath.js";import"./jsonpath-plus.js";import"./immutable-json-patch.js";import"./jsonrepair.js";import"./axios.js";import"./js-cookie.js";import"./nprogress.js";/* empty css        */const G={class:"bg-fff pd-20 radius-6"},H={__name:"edit",setup(K){const n=T(null),l=D({id:"",mid:"",tableName:"",cname:"",ename:"",type:"",val:"",defaultVal:"",length:"",orderBy:"0"}),p=[{value:"1",label:"单行文本"},{value:"2",label:"多行文本 "},{value:"3",label:"下拉菜单"},{value:"4",label:"单选"},{value:"5",label:"多选 "},{value:"6",label:"时间和日期 "},{value:"7",label:"数字 "},{value:"8",label:"多图上传 "},{value:"9",label:"富文本 "}],c=[{required:!0,message:"请输入中文名称",trigger:"blur"}],f=[{required:!0,message:"请输入英文名称",trigger:"blur"}],b=[{required:!0,message:"请选择类型",trigger:"blur"}],_=q(),V=O();J(async()=>{const{fid:a,mid:e,tableName:s}=_.query;l.id=a,l.mid=e,l.tableName=s,await g()});const g=async()=>{try{const a=await j(l.id);a.code===200&&(Object.assign(l,a.data,{old_ename:a.data.ename}),y(l.mid))}catch(a){console.error(a)}},y=async a=>{var e,s;try{const r=await C(a);((s=(e=r==null?void 0:r.data)==null?void 0:e.has)==null?void 0:s.length)>0?console.log("Field is used"):console.log("Field is not used")}catch(r){console.log(r)}},v=()=>{n.value.validate(async a=>{if(a)await U();else return console.log("error submit!!"),!1})},U=async()=>{try{const a=await M(l);a.code===200?u({message:"更新成功^_^",type:"success"}):u({message:a.msg,type:"error"}),V.go(-1)}catch(a){console.log(a)}};return(a,e)=>{const s=B,r=N,E=R,w=I,k=F,x=h;return d(),i("div",G,[o(x,{ref_key:"formRef",ref:n,model:l,"label-width":"100px",class:"mt-20"},{default:m(()=>[o(r,{label:"中文名称",prop:"cname",rules:c},{default:m(()=>[o(s,{modelValue:l.cname,"onUpdate:modelValue":e[0]||(e[0]=t=>l.cname=t),placeholder:"请输入字段中文名称"},null,8,["modelValue"])]),_:1}),o(r,{label:"字段名称",prop:"ename",rules:f},{default:m(()=>[o(s,{modelValue:l.ename,"onUpdate:modelValue":e[1]||(e[1]=t=>l.ename=t),placeholder:"请输入英文小驼峰方式，例：bookName"},null,8,["modelValue"])]),_:1}),o(r,{label:"字段类型",rules:b},{default:m(()=>[o(w,{modelValue:l.type,"onUpdate:modelValue":e[2]||(e[2]=t=>l.type=t),placeholder:"请选择"},{default:m(()=>[(d(),i(L,null,Q(p,t=>o(E,{key:t.value,label:t.label,value:t.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),o(r,{label:"字段选项"},{default:m(()=>[o(s,{modelValue:l.defaultVal,"onUpdate:modelValue":e[3]||(e[3]=t=>l.defaultVal=t),rows:2,type:"textarea",placeholder:"单选、多选、下拉框，请填写json格式。"},null,8,["modelValue"]),e[7]||(e[7]=z("p",{class:"f-12 c-999"},'例如：{"options":[{"label":"本地下载","value":"1"},{"label":"电信下载","value":"2"}]}',-1))]),_:1}),o(r,{label:"默认值"},{default:m(()=>[o(s,{modelValue:l.val,"onUpdate:modelValue":e[4]||(e[4]=t=>l.val=t)},null,8,["modelValue"])]),_:1}),o(r,{label:"排序"},{default:m(()=>[o(s,{modelValue:l.orderBy,"onUpdate:modelValue":e[5]||(e[5]=t=>l.orderBy=t)},null,8,["modelValue"])]),_:1}),o(r,{label:"字段长度"},{default:m(()=>[o(s,{modelValue:l.length,"onUpdate:modelValue":e[6]||(e[6]=t=>l.length=t)},null,8,["modelValue"])]),_:1}),o(r,null,{default:m(()=>[o(k,{type:"primary",onClick:v},{default:m(()=>e[8]||(e[8]=[A("保存")])),_:1})]),_:1})]),_:1},8,["model"])])}}},qe=S(H,[["__scopeId","data-v-692047c4"]]);export{qe as default};
