import{s as b,t as h,f as k,x as v,H as w,R as C,T as U,r as E}from"./element-plus.js";import{f as N}from"./category.js";import{g as q,c as $}from"./gather.js";import{_ as D,a as c,t as S}from"./index.js";import{o as g,c as B,M as t,Q as r,a as o,U as m,R as T,V as A,W as L}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./dayjs.js";import"./@element-plus.js";import"./@popperjs.js";import"./@ctrl.js";import"./memoize-one.js";import"./normalize-wheel-es.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vanilla-jsoneditor.js";import"./json-source-map.js";import"./@jsonquerylang.js";import"./@fortawesome.js";import"./natural-compare-lite.js";import"./@codemirror.js";import"./@lezer.js";import"./crelt.js";import"./style-mod.js";import"./w3c-keyname.js";import"./@replit.js";import"./codemirror-wrapped-line-indent.js";import"./fast-deep-equal.js";import"./fast-uri.js";import"./jmespath.js";import"./jsonpath-plus.js";import"./immutable-json-patch.js";import"./jsonrepair.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";import"./nprogress.js";/* empty css        */const R={name:"gather-add",data:()=>({activeName:"list",categorySelected:[],categoryProps:{checkStrictly:!0},category:[],params:{taskName:"",targetUrl:"",parseData:"",status:"1",cid:1},listPages:[],article:{title:"",article:""}}),computed:{},mounted(){},async created(){this.query()},methods:{async query(){try{let e=await N();if(e.code===200){let a=c(S(e.data)),i=c(e.data);this.cateList=i,this.category=[...a]}}catch(e){console.log(e)}},handleChange(e){console.log(e),e[0]!=-1&&(this.params.cid=e[e.length-1])},handleAttr(e){console.log("e-->",e)},handleSubCid(e){console.log("e-->",e)},async getArticle(){try{let{targetUrl:e,parseData:a}=this.params,i=await q({targetUrl:e,parseData:a});i.code==200&&(this.article=i.data,this.$message({message:"恭喜你，获取数据成功^_^",type:"success"}))}catch(e){console.log(e)}},async create(){try{let e=await $(this.params);e.code==200?(this.$message({message:"新增成功^_^",type:"success"}),this.$router.go(-1)):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate(a=>{if(a)this.create();else return!1})}}},H={class:"mb-20 bg-fff pd-20"},I={class:"flex w-full"},M={class:"flex w-full"},P={class:"f-15"},z=["innerHTML"];function F(e,a,i,j,G,d){const p=b,s=h,n=k,f=v,u=w,y=C,_=U,V=E;return g(),B("div",H,[t(V,{ref:"params",model:e.params,"label-width":"84px"},{default:r(()=>[t(s,{label:"任务名称",prop:"taskName",rules:[{required:!0,message:"请输入任务名称",trigger:"blur"}]},{default:r(()=>[t(p,{modelValue:e.params.taskName,"onUpdate:modelValue":a[0]||(a[0]=l=>e.params.taskName=l),placeholder:"例：前端库-chat问答"},null,8,["modelValue"])]),_:1}),t(s,{label:"接口地址",prop:"targetUrl",rules:[{required:!0,message:"请输入匹配网址",trigger:"blur"}]},{default:r(()=>[o("div",I,[t(p,{class:"flex-1",modelValue:e.params.targetUrl,"onUpdate:modelValue":a[1]||(a[1]=l=>e.params.targetUrl=l)},null,8,["modelValue"])])]),_:1}),t(s,{label:"处理函数",prop:"parseData",rules:[{required:!0,message:"请输入内容字段",trigger:"blur"}]},{default:r(()=>[o("div",M,[t(p,{class:"flex-1",type:"textarea",rows:13,modelValue:e.params.parseData,"onUpdate:modelValue":a[2]||(a[2]=l=>e.params.parseData=l),placeholder:"如果不做任何处理，直接返回data。拿到的文本是变量是data,可以直接js函数可以处理成需要的数据，最终需要返回data。例：\n            data.title = data.title;\n            data.article = data.data.news;\n            return data;\n            "},null,8,["modelValue"]),t(n,{class:"ml-5",type:"primary",onClick:d.getArticle},{default:r(()=>a[6]||(a[6]=[m(" 测试 ")])),_:1},8,["onClick"])])]),_:1}),t(s,{label:"保存栏目",prop:"cid",rules:[{required:!0,message:"请输入保存栏目",trigger:"blur"}]},{default:r(()=>[t(f,{props:e.categoryProps,"show-all-levels":!1,modelValue:e.categorySelected,"onUpdate:modelValue":a[3]||(a[3]=l=>e.categorySelected=l),options:e.category,onChange:d.handleChange},null,8,["props","modelValue","options","onChange"])]),_:1}),t(s,{label:"发布状态",prop:"status",rules:[{required:!0,message:"请选择发布状态",trigger:"blur"}]},{default:r(()=>[t(y,{modelValue:e.params.status,"onUpdate:modelValue":a[4]||(a[4]=l=>e.params.status=l),class:"ml-4"},{default:r(()=>[t(u,{value:"1",size:"large"},{default:r(()=>a[7]||(a[7]=[m("草稿")])),_:1}),t(u,{value:"2",size:"large"},{default:r(()=>a[8]||(a[8]=[m("发布")])),_:1})]),_:1},8,["modelValue"])]),_:1}),e.article.title?(g(),T(s,{key:0,label:"采集结果"},{default:r(()=>[t(_,{class:"w-full",shadow:"never"},{header:r(()=>[o("p",P,[a[9]||(a[9]=o("span",{class:"c-999"},"标题：",-1)),m(A(e.article.title),1)])]),default:r(()=>[a[10]||(a[10]=o("p",{class:"f-15"},[o("span",{class:"c-999"},"内容：")],-1)),o("div",{class:"f-15 article",innerHTML:e.article.article},null,8,z)]),_:1})]),_:1})):L("",!0),t(s,null,{default:r(()=>[t(n,{type:"primary",onClick:a[5]||(a[5]=l=>d.submit("params"))},{default:r(()=>a[11]||(a[11]=[m("保存")])),_:1})]),_:1})]),_:1},8,["model"])])}const $e=D(R,[["render",F],["__scopeId","data-v-c07a66ad"]]);export{$e as default};
