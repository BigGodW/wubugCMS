import{q as e,r as a,f as s,G as t,P as r,p as l}from"./element-plus.js";import{g as o,c as i}from"./gather.js";import{_ as m}from"./@qiun.js";import{o as p,c as d,g as u,_ as c,a as n,a0 as g,t as j,p as f,b as h}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@element-plus.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./normalize-wheel-es.js";import"./index.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vanilla-jsoneditor.js";import"./json-source-map.js";import"./@fortawesome.js";import"./natural-compare-lite.js";import"./@codemirror.js";import"./@lezer.js";import"./crelt.js";import"./style-mod.js";import"./w3c-keyname.js";import"./@replit.js";import"./codemirror-wrapped-line-indent.js";import"./fast-deep-equal.js";import"./fast-uri.js";import"./jmespath.js";import"./immutable-json-patch.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const b={name:"gather-add",data:()=>({activeName:"list",params:{taskName:"",targetUrl:"",parseData:"",status:"1",cid:1},listPages:[],article:{title:"",content:""}}),computed:{},mounted(){},async created(){},methods:{handleAttr(e){console.log("e--\x3e",e)},handleSubCid(e){console.log("e--\x3e",e)},async getArticle(){try{let{targetUrl:e,parseData:a}=this.params,s=await o({targetUrl:e,parseData:a});200==s.code&&(this.article=s.data,this.$message({message:"恭喜你，获取数据成功^_^",type:"success"}))}catch(e){console.log(e)}},async create(){try{let e=await i(this.params);200==e.code?(this.$message({message:"新增成功^_^",type:"success"}),this.$router.go(-1)):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return!1;this.create()}))}}},_={class:"mb-20 bg-fff pd-20"},y={class:"row w-p100"},v={class:"row w-p100"},V=(e=>(f("data-v-702e1585"),e=e(),h(),e))((()=>n("p",null,"内容：",-1))),w=["innerHTML"];const U=m(b,[["render",function(o,i,m,f,h,b){const U=e,k=a,x=s,q=t,D=r,z=l;return p(),d("div",_,[u(z,{ref:"params",model:o.params,"label-width":"84px"},{default:c((()=>[u(k,{label:"任务名称",prop:"taskName",rules:[{required:!0,message:"请输入任务名称",trigger:"blur"}]},{default:c((()=>[u(U,{modelValue:o.params.taskName,"onUpdate:modelValue":i[0]||(i[0]=e=>o.params.taskName=e),placeholder:"例：前端库-chat问答"},null,8,["modelValue"])])),_:1}),u(k,{label:"接口地址",prop:"targetUrl",rules:[{required:!0,message:"请输入匹配网址",trigger:"blur"}]},{default:c((()=>[n("div",y,[u(U,{class:"flex-1",modelValue:o.params.targetUrl,"onUpdate:modelValue":i[1]||(i[1]=e=>o.params.targetUrl=e)},null,8,["modelValue"])])])),_:1}),u(k,{label:"处理函数",prop:"parseData",rules:[{required:!0,message:"请输入内容字段",trigger:"blur"}]},{default:c((()=>[n("div",v,[u(U,{class:"flex-1",type:"textarea",rows:13,modelValue:o.params.parseData,"onUpdate:modelValue":i[2]||(i[2]=e=>o.params.parseData=e),placeholder:"例：.content h4 a"},null,8,["modelValue"]),u(x,{class:"ml-5",type:"primary",onClick:b.getArticle},{default:c((()=>[g(" 测试 ")])),_:1},8,["onClick"])])])),_:1}),u(k,{class:"show",label:"测试结果"},{default:c((()=>[n("p",null,"标题："+j(o.article.title),1),V,n("div",{innerHTML:o.article.content},null,8,w)])),_:1}),u(k,{label:"保存栏目",prop:"cid",rules:[{required:!0,message:"请输入保存栏目",trigger:"blur"}]},{default:c((()=>[u(U,{modelValue:o.params.cid,"onUpdate:modelValue":i[3]||(i[3]=e=>o.params.cid=e),placeholder:"例：cid"},null,8,["modelValue"])])),_:1}),u(k,{label:"发布状态",prop:"status",rules:[{required:!0,message:"请选择字符集",trigger:"blur"}]},{default:c((()=>[u(D,{modelValue:o.params.status,"onUpdate:modelValue":i[4]||(i[4]=e=>o.params.status=e),class:"ml-4"},{default:c((()=>[u(q,{value:"1",size:"large"},{default:c((()=>[g("草稿")])),_:1}),u(q,{value:"2",size:"large"},{default:c((()=>[g("发布")])),_:1})])),_:1},8,["modelValue"])])),_:1}),u(k,null,{default:c((()=>[u(x,{type:"primary",onClick:i[5]||(i[5]=e=>b.submit("params"))},{default:c((()=>[g("保存")])),_:1})])),_:1})])),_:1},8,["model"])])}],["__scopeId","data-v-702e1585"]]);export{U as default};
