import{f as e,t,w as a,x as s,y as l}from"./element-plus.js";import{F as i,D as o,v as n,G as r}from"./@element-plus.js";import{l as c,a as m}from"./admin.js";import{_ as u,g as d}from"./index.js";import{af as p,o as h,c as f,U as g,W as j,_ as y,a as C,t as b,F as w}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./escape-html.js";import"./normalize-wheel-es.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const x={class:"mr-10 ml-10"};const _=u({name:"admin-index",setup:()=>({Edit:i,Delete:o,View:n,Search:r}),data:()=>({keywords:"",tableData:[],multipleSelection:[],count:0,cur:1,username:""}),computed:{},created(){this.username=d("username"),console.log("username--\x3e",this.username),this.list()},methods:{async list(){try{let e=await c(this.cur);200===e.code&&(this.tableData=[...e.data.list],this.count=e.data.count)}catch(e){console.log(e)}},handleCurrentChange(e){this.cur=e,this.list()},toggleSelection(e){e?e.forEach((e=>{this.$refs.multipleTable.toggleRowSelection(e)})):this.$refs.multipleTable.clearSelection()},handleSelectionChange(e){this.multipleSelection=e},toEdit(e){let t=e.id;this.$router.push({name:"admin-edit",params:{id:t}})},async handleDel(e){let t=e.id;try{this.$confirm("这么疯狂，要删管理员？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{200===(await m(t)).code&&(this.$message({message:"删除成功 ^_^",type:"success"}),this.list())})).catch((()=>{this.$message({type:"info",message:"已取消删除"})}))}catch(a){console.log(a)}}}},[["render",function(i,o,n,r,c,m){const u=e,d=p("router-link"),_=t,k=a,S=s,D=l;return h(),f(w,null,[g(_,{type:"flex",class:"mt-10 mb-10",justify:"end"},{default:j((()=>[g(d,{to:"/admin/add"},{default:j((()=>[g(u,{type:"primary",round:""},{default:j((()=>[y("新增")])),_:1})])),_:1})])),_:1}),C("div",x,[g(_,null,{default:j((()=>[g(S,{ref:"multipleTable",data:i.tableData,"tooltip-effect":"dark","row-key":"id",size:"small",onSelectionChange:m.handleSelectionChange},{default:j((()=>[g(k,{type:"selection"}),g(k,{prop:"id",label:"编号"}),g(k,{prop:"username",label:"管理员"}),g(k,{prop:"status",label:"状态"},{default:j((e=>[y(b(1==e.row.status?"启用":"关闭"),1)])),_:1}),g(k,{prop:"createdAt",label:"发布时间"},{default:j((e=>[y(b(e.row.createdAt),1)])),_:1}),g(k,{fixed:"right",width:"100",label:"操作"},{default:j((e=>[g(u,{icon:r.Edit,circle:"",onClick:t=>m.toEdit(e.row)},null,8,["icon","onClick"]),g(u,{icon:r.Delete,disabled:i.username==e.row.username,circle:"",onClick:t=>m.handleDel(e.row)},null,8,["icon","disabled","onClick"])])),_:1})])),_:1},8,["data","onSelectionChange"]),g(_,{type:"flex",class:"mt-20 align-c",justify:"center"},{default:j((()=>[g(D,{background:"",layout:"prev, pager, next",onCurrentChange:m.handleCurrentChange,"pager-size":10,total:i.count,"hide-on-single-page":""},null,8,["onCurrentChange","total"])])),_:1})])),_:1})])],64)}]]);export{_ as default};
