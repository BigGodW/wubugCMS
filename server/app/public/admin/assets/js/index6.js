import{Y as w,P as C}from"./@element-plus.js";import{s as S,d as x}from"./ad.js";import{_ as D}from"./index.js";import{ag as c,o as n,c as r,Z as t,V as l,Y as u,g as i,t as f}from"./@vue.js";import"./api.js";import"./axios.js";import"./element-plus.js";import"./lodash-es.js";import"./@vueuse.js";import"./@popperjs.js";import"./@ctrl.js";import"./dayjs.js";import"./async-validator.js";import"./memoize-one.js";import"./escape-html.js";import"./normalize-wheel-es.js";import"./@floating-ui.js";import"./pinia.js";import"./vue-router.js";import"./js-cookie.js";const E={name:"ad-index",setup(){return{Edit:w,Delete:C}},data:()=>({keywords:"",tableData:[],multipleSelection:[],count:0,cur:1}),computed:{},created(){this.search()},methods:{async search(){try{let e=await S(this.cur,this.keywords);e.code===200&&(this.tableData=[...e.data.list],this.count=e.data.count)}catch(e){console.log(e)}},handleCurrentChange(e){this.cur=e,this.search()},toggleSelection(e){e?e.forEach(s=>{this.$refs.multipleTable.toggleRowSelection(s)}):this.$refs.multipleTable.clearSelection()},handleSelectionChange(e){this.multipleSelection=e},toEdit(e){let s=e.id;this.$router.push({name:"ad-edit",params:{id:s}})},async handleDel(e){let s=e.id;try{(await x(s)).code===200&&(this.$message({message:"删除成功 ^_^",type:"success"}),this.search())}catch(p){console.log(p)}}}},v={key:0},T={key:1},V={key:0,class:"mr-5"},$={key:1,class:"mr-5"},N={key:2,class:"mr-5"},j={key:3,class:"mr-5"},z={key:4,class:"mr-5"};function A(e,s,p,m,B,d){const g=c("router-link"),_=c("el-row"),a=c("el-table-column"),h=c("el-button"),b=c("el-table"),y=c("el-pagination");return n(),r("div",null,[t(_,{type:"flex",justify:"end"},{default:l(()=>[t(g,{class:"c-fff add-btn",to:"/ad/add"},{default:l(()=>[u("新增")]),_:1})]),_:1}),t(b,{ref:"multipleTable",data:e.tableData,"tooltip-effect":"dark","row-key":"id",size:"small",onSelectionChange:d.handleSelectionChange},{default:l(()=>[t(a,{type:"selection"}),t(a,{prop:"id",label:"编号",width:"60"}),t(a,{prop:"title",label:"标题"}),t(a,{prop:"mark",label:"标识"}),t(a,{prop:"platform",label:"平台"},{default:l(o=>[o.row.platform.includes("1")?(n(),r("span",v,"PC")):i("",!0),o.row.platform.includes("2")?(n(),r("span",T,"H5")):i("",!0)]),_:1}),t(a,{prop:"position",label:"位置"},{default:l(o=>[o.row.position.includes("1")?(n(),r("span",V,"首页")):i("",!0),o.row.position.includes("2")?(n(),r("span",$,"频道页")):i("",!0),o.row.position.includes("3")?(n(),r("span",N,"列表")):i("",!0),o.row.position.includes("4")?(n(),r("span",j,"详情")):i("",!0),o.row.position.includes("5")?(n(),r("span",z,"单页")):i("",!0)]),_:1}),t(a,{prop:"createdAt",label:"发布时间",width:"160"},{default:l(o=>[u(f(o.row.createdAt),1)]),_:1}),t(a,{prop:"status",label:"状态"},{default:l(o=>[u(f(o.row.status==1?"显示":"隐藏"),1)]),_:1}),t(a,{fixed:"right",label:"操作"},{default:l(o=>[t(h,{icon:m.Edit,circle:"",onClick:k=>d.toEdit(o.row)},null,8,["icon","onClick"]),t(h,{icon:m.Delete,circle:"",onClick:k=>d.handleDel(o.row)},null,8,["icon","onClick"])]),_:1})]),_:1},8,["data","onSelectionChange"]),t(_,{type:"flex",class:"mt-20 align-c",justify:"center"},{default:l(()=>[t(y,{background:"",layout:"prev, pager, next",onCurrentChange:d.handleCurrentChange,"pager-size":10,total:e.count,"hide-on-single-page":""},null,8,["onCurrentChange","total"])]),_:1})])}const oe=D(E,[["render",A]]);export{oe as default};
