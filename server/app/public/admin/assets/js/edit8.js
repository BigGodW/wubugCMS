import{f as s}from"./element-plus.js";import{d as a,u as e}from"./message.js";import{_ as t}from"./@qiun.js";import{o as r,c as o,a as m,a3 as i,t as p,l as c,a1 as l,p as n,i as d}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@element-plus.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./escape-html.js";import"./normalize-wheel-es.js";import"./index.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const u={name:"message-edit",data:()=>({params:{id:0,name:"",tel:"",wx:"",content:"",company:"",createdAt:""},paramsRules:{name:[{required:!0,message:"请输入栏目名称",trigger:"blur"},{min:2,max:50,message:"名称长度在 2 到 50 个字符之间",trigger:"blur"}]}}),computed:{},mounted(){},async created(){this.params.id=this.$route.params.id,await this.detail()},methods:{async detail(){try{let s=await a(this.params.id);200===s.code?this.params=s.data:this.$message({message:s.msg,type:"success"})}catch(s){console.error(s)}},handleAttr(s){console.log("e--\x3e",s)},handleSubCid(s){console.log("e--\x3e",s)},async update(){try{let s=await e(this.params);200==s.code?(this.$message({message:"更新成功^_^",type:"success"}),this.$router.go(-1)):this.$message({message:s.msg,type:"success"})}catch(s){console.log(s)}},goBack(){this.$router.go(-1)},submit(s){this.$refs[s].validate((s=>{if(!s)return console.log("error submit!!"),!1;this.update()}))}}},g=s=>(n("data-v-0f8c6930"),s=s(),d(),s),j={class:"mr-10 ml-10 mb-20 pd-20 content-wrap"},f=g((()=>m("h3",{class:"mb-25 mt-10"},"# 留言内容",-1))),h={class:"pd-10"},b={class:"f-14 mb-15"},y=g((()=>m("span",{class:"bold f-13 w-90 text-r"},"联系姓名：",-1))),x={class:"f-14 mb-15"},w=g((()=>m("span",{class:"bold f-13 w-90 text-r"},"联系电话：",-1))),v={class:"f-14 mb-15"},$=g((()=>m("span",{class:"bold f-13 w-90 text-r"},"公司单位：",-1))),k={class:"f-14 mb-15"},_=g((()=>m("span",{class:"bold f-13 w-90 text-r"},"留言内容：",-1))),A={class:"f-14 mb-15"},C=g((()=>m("span",{class:"bold f-13 w-90 text-r"},"留言时间：",-1)));const q=t(u,[["render",function(a,e,t,n,d,u){const g=s;return r(),o("div",j,[f,m("div",h,[m("p",b,[y,i(p(a.params.name),1)]),m("p",x,[w,i(p(a.params.tel),1)]),m("p",v,[$,i(p(a.params.company),1)]),m("p",k,[_,i(p(a.params.content),1)]),m("p",A,[C,i(p(a.params.createdAt),1)]),c(g,{class:"ml-25 mt-35",type:"primary",onClick:u.goBack},{default:l((()=>[i("返回")])),_:1},8,["onClick"])])])}],["__scopeId","data-v-0f8c6930"]]);export{q as default};
