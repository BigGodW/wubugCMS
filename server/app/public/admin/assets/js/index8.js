import{f as e,t,I as a,J as i,L as s}from"./element-plus.js";import{G as l,E as o,v as r,H as n}from"./@element-plus.js";import{l as c,a as p}from"./friendlink.js";import{_ as d}from"./@qiun.js";import{r as m,o as u,c as h,g as f,$ as g,a1 as j,t as y}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./escape-html.js";import"./normalize-wheel-es.js";import"./index.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const C={class:"pd-20 bg-fff"};const b=d({name:"friendlink-index",setup:()=>({Edit:l,Delete:o,View:r,Search:n}),data:()=>({keywords:"",tableData:[],multipleSelection:[],count:0,cur:1}),computed:{},created(){this.list()},methods:{async list(){try{let e=await c(this.cur);200===e.code&&(this.tableData=[...e.data.list],this.count=e.data.count)}catch(e){console.log(e)}},handleCurrentChange(e){this.cur=e,this.list()},toggleSelection(e){e?e.forEach((e=>{this.$refs.multipleTable.toggleRowSelection(e)})):this.$refs.multipleTable.clearSelection()},handleSelectionChange(e){this.multipleSelection=e},toEdit(e){let t=e.id;this.$router.push({name:"friendlink-edit",params:{id:t}})},async handleDel(e){let t=e.id;try{let e=await p(t);200===e.code?(this.$message({message:"删除成功 ^_^",type:"success"}),this.list()):this.$message({message:e.msg,type:"success"})}catch(a){console.log(a)}}}},[["render",function(l,o,r,n,c,p){const d=e,b=m("router-link"),k=t,w=a,S=i,_=s;return u(),h("div",C,[f(k,{type:"flex",class:"mt-10 mb-10",justify:"end"},{default:g((()=>[f(b,{to:"/friendlink/add"},{default:g((()=>[f(d,{type:"primary",round:""},{default:g((()=>[j("新增")])),_:1})])),_:1})])),_:1}),f(S,{ref:"multipleTable",data:l.tableData,"tooltip-effect":"dark","row-key":"id",onSelectionChange:p.handleSelectionChange},{default:g((()=>[f(w,{type:"selection"}),f(w,{prop:"id",width:"60",label:"编号"}),f(w,{prop:"title",width:"120",label:"标题"}),f(w,{prop:"link",width:"260",label:"链接"}),f(w,{prop:"sort",label:"排序"}),f(w,{prop:"createdAt",label:"发布时间"},{default:g((e=>[j(y(e.row.createdAt),1)])),_:1}),f(w,{fixed:"right",width:"100",label:"操作"},{default:g((e=>[f(d,{icon:n.Edit,circle:"",onClick:t=>p.toEdit(e.row)},null,8,["icon","onClick"]),f(d,{icon:n.Delete,circle:"",onClick:t=>p.handleDel(e.row)},null,8,["icon","onClick"])])),_:1})])),_:1},8,["data","onSelectionChange"]),f(k,{type:"flex",class:"mt-20 align-c",justify:"center"},{default:g((()=>[f(_,{background:"",layout:"prev, pager, next",onCurrentChange:p.handleCurrentChange,"page-size":10,total:l.count,"hide-on-single-page":""},null,8,["onCurrentChange","total"])])),_:1})])}]]);export{b as default};
