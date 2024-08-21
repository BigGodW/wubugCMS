import{f as e,F as t,L as s,M as a,O as o,K as i}from"./element-plus.js";import{G as l,E as r,v as n,H as m}from"./@element-plus.js";import{l as p,h as c,a as d}from"./model.js";import{_ as u}from"./index.js";import{ad as h,o as j,c as g,M as f,Q as y,U as b,_ as C,R as w,V as _}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./normalize-wheel-es.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vanilla-jsoneditor.js";import"./json-source-map.js";import"./@fortawesome.js";import"./natural-compare-lite.js";import"./@codemirror.js";import"./@lezer.js";import"./crelt.js";import"./style-mod.js";import"./w3c-keyname.js";import"./@replit.js";import"./codemirror-wrapped-line-indent.js";import"./fast-deep-equal.js";import"./fast-uri.js";import"./jmespath.js";import"./immutable-json-patch.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const k={class:"pd-20 content-wrap"};const S=u({name:"model-index",setup:()=>({Edit:l,Delete:r,View:n,Search:m}),data:()=>({multipleSelection:[],tableData:[],count:0,cur:1,loading:!0}),computed:{},created(){this.list()},update(){},methods:{async list(){try{let e=await p(this.cur);200==e.code?(this.tableData=[...e.data.list],this.count=e.data.count,this.loading=!1):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},toggleSelection(e){e?e.forEach((e=>{this.$refs.multipleTable.toggleRowSelection(e)})):this.$refs.multipleTable.clearSelection()},handleSelectionChange(e){this.multipleSelection=e},handleCurrentChange(e){this.cur=Number(e),sessionStorage.setItem("cur",Number(e)),this.list()},hasUse:async e=>await c(e),toEdit(e){let t=e.id;this.$router.push({name:"model-edit",params:{id:t}})},handleClick(e){const{id:t}=e;this.$router.push({name:"field-index",query:{mid:t}})},async handleDel(e){const{id:t,table_name:s}=e;try{let e=await this.hasUse(t);if(200==e.code)if(0==e.data.count){let e=await d(t,s);200===e.code?(this.$message({message:"删除成功 ^_^",type:"error"}),this.list()):this.$message({message:e.msg,type:"success"})}else this.$message({message:"当前模型已经使用，不能删除！",type:"error"})}catch(a){console.log(a)}}}},[["render",function(l,r,n,m,p,c){const d=e,u=h("router-link"),S=t,v=s,x=a,$=o,D=i;return j(),g("div",k,[f(S,{type:"flex",class:"mt-10 mb-10",justify:"end"},{default:y((()=>[f(u,{to:"/model/add"},{default:y((()=>[f(d,{type:"primary",round:""},{default:y((()=>[b("新增")])),_:1})])),_:1})])),_:1}),C((j(),w(x,{ref:"multipleTable",data:l.tableData,"tooltip-effect":"dark","row-key":"id",onSelectionChange:c.handleSelectionChange},{default:y((()=>[f(v,{type:"selection"}),f(v,{prop:"id",width:"60",label:"编号"}),f(v,{prop:"model_name",label:"模型名称"}),f(v,{prop:"table_name",label:"模型对应的表"}),f(v,{prop:"status",label:"状态"},{default:y((e=>[b(_(1==e.row.status?"启用":"禁用"),1)])),_:1}),f(v,{fixed:"right",width:"150",label:"操作"},{default:y((e=>[f(d,{icon:m.View,circle:"",onClick:t=>c.handleClick(e.row)},null,8,["icon","onClick"]),f(d,{icon:m.Edit,circle:"",onClick:t=>c.toEdit(e.row)},null,8,["icon","onClick"]),f(d,{icon:m.Delete,circle:"",onClick:t=>c.handleDel(e.row)},null,8,["icon","onClick"])])),_:1})])),_:1},8,["data","onSelectionChange"])),[[D,l.loading]]),f(S,{type:"flex",class:"mt-20 align-c",justify:"center"},{default:y((()=>[f($,{background:"",layout:"prev, pager, next",onCurrentChange:c.handleCurrentChange,"page-size":10,total:l.count,"hide-on-single-page":""},null,8,["onCurrentChange","total"])])),_:1})])}],["__scopeId","data-v-d5b3b24b"]]);export{S as default};
