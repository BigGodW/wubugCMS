import{f as e,F as t,L as a,M as s,O as i,K as o}from"./element-plus.js";import{G as l,E as r,v as n,H as m}from"./@element-plus.js";import{l as d,a as p}from"./field.js";import{h as c}from"./model.js";import{_ as u}from"./@qiun.js";import{r as h,o as j,c as f,g,Z as y,$ as _,w as b,e as w}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./normalize-wheel-es.js";import"./index.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vanilla-jsoneditor.js";import"./json-source-map.js";import"./@fortawesome.js";import"./natural-compare-lite.js";import"./@codemirror.js";import"./@lezer.js";import"./crelt.js";import"./style-mod.js";import"./w3c-keyname.js";import"./@replit.js";import"./codemirror-wrapped-line-indent.js";import"./fast-deep-equal.js";import"./fast-uri.js";import"./jmespath.js";import"./immutable-json-patch.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const C={class:"content-wrap"};const S=u({name:"field-index",setup:()=>({Edit:l,Delete:r,View:n,Search:m}),data:()=>({query:{mid:""},model_name:"",table_name:"",multipleSelection:[],tableData:[],count:0,cur:1,loading:!0}),computed:{},created(){this.query=this.$route.query,this.list()},update(){},methods:{async list(){try{let e=await d(this.query.mid,this.cur);if(200===e.code){const t=e.data;this.tableData=[...t.list],this.model_name=t.model.model_name,this.table_name=t.model.table_name,this.count=t.count,this.loading=!1}}catch(e){console.log(e)}},toggleSelection(e){e?e.forEach((e=>{this.$refs.multipleTable.toggleRowSelection(e)})):this.$refs.multipleTable.clearSelection()},handleSelectionChange(e){this.multipleSelection=e},handleCurrentChange(e){this.cur=Number(e),sessionStorage.setItem("cur",Number(e)),this.list()},toEdit(e){console.log(e);const{id:t,field_ename:a}=e;this.$router.push({name:"field-edit",query:{fid:t,mid:this.query.mid,table_name:a,model_name:this.model_name}})},delSome(){},hasUse:async e=>await c(e),async handleDel(e){let{id:t}=e;try{if(0===(await this.hasUse(this.query.mid)).data.count){200===(await p(t)).code&&(this.$message({message:"删除成功 ^_^",type:"success"}),this.list())}else this.$message({message:"当前模型正在使用，字段不能删除 ^_^",type:"success"})}catch(a){console.log(a)}}}},[["render",function(l,r,n,m,d,p){const c=e,u=h("router-link"),S=t,q=a,k=s,v=i,x=o;return j(),f("div",C,[g(S,{type:"flex",class:"mt-10 mb-10",justify:"end"},{default:y((()=>[g(u,{to:{name:"field-add",query:{mid:l.query.mid,table_name:l.table_name,model_name:l.model_name}}},{default:y((()=>[g(c,{type:"primary",round:""},{default:y((()=>[_("新增")])),_:1})])),_:1},8,["to"])])),_:1}),b((j(),w(k,{ref:"multipleTable",data:l.tableData,"tooltip-effect":"dark",style:{width:"100%"},"row-key":"id",onSelectionChange:p.handleSelectionChange},{default:y((()=>[g(q,{type:"selection",width:"55"}),g(q,{prop:"id",label:"编号"}),g(q,{prop:"field_cname",label:"中文名称"}),g(q,{prop:"field_ename",label:"字段名称"}),g(q,{prop:"field_sort",label:"排序"}),g(q,{fixed:"right",label:"操作",width:"150"},{default:y((e=>[g(c,{icon:m.Edit,circle:"",onClick:t=>p.toEdit(e.row)},null,8,["icon","onClick"]),g(c,{icon:m.Delete,circle:"",onClick:t=>p.handleDel(e.row)},null,8,["icon","onClick"])])),_:1})])),_:1},8,["data","onSelectionChange"])),[[x,l.loading]]),g(S,{type:"flex",class:"mt-20",justify:"space-between"},{default:y((()=>[g(v,{background:"",layout:"prev, pager, next",onCurrentChange:p.handleCurrentChange,"page-size":10,total:l.count,"hide-on-single-page":""},null,8,["onCurrentChange","total"])])),_:1})])}]]);export{S as default};
