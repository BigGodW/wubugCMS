import{q as e,r as t,f as a,p as s,L as r,M as o,O as i,t as l}from"./element-plus.js";import{G as c,E as n,v as p,H as m}from"./@element-plus.js";import{s as d,a as u}from"./tag.js";import{_ as h}from"./@qiun.js";import{r as j,o as f,c as g,a as y,g as w,_ as k,a0 as C}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./normalize-wheel-es.js";import"./index.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vanilla-jsoneditor.js";import"./json-source-map.js";import"./@fortawesome.js";import"./natural-compare-lite.js";import"./@codemirror.js";import"./@lezer.js";import"./crelt.js";import"./style-mod.js";import"./w3c-keyname.js";import"./@replit.js";import"./codemirror-wrapped-line-indent.js";import"./fast-deep-equal.js";import"./fast-uri.js";import"./jmespath.js";import"./immutable-json-patch.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const b={class:"content-wrap"},S={class:"search row justify-between align-c pt-10 pl-20 pr-20 pb-20 mb-20"};const _=h({name:"tag-index",setup:()=>({Edit:c,Delete:n,View:p,Search:m}),data:()=>({tableData:[],multipleSelection:[],count:0,cur:1,params:{keywords:""}}),computed:{},created(){let{cur:e=1,keywords:t=""}=this.$route.query;this.cur=+e,this.keywords=t,this.search()},watch:{$route(e,t){if("tag-index"==e.name){let{cur:t,keywords:a}=e.query;this.cur=+t,this.keywords=a,this.search()}}},methods:{clearSearch(e){e&&this.$refs.form.resetFields(),this.$router.replace({name:"tag-index",query:{cur:1,cid:0,keywords:""}}),this.search()},doSearch(){this.$router.replace({name:"tag-index",query:{cur:this.cur,keywords:this.params.keywords}}),this.search()},async search(){try{let e=await d(this.cur,this.params.keywords);200===e.code?(this.tableData=[...e.data.list],this.count=e.data.count):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},handleCurrentChange(e){this.cur=+e,this.doSearch()},toggleSelection(e){e?e.forEach((e=>{this.$refs.multipleTable.toggleRowSelection(e)})):this.$refs.multipleTable.clearSelection()},handleSelectionChange(e){this.multipleSelection=e},toEdit(e){let t=e.id;this.$router.push({name:"tag-edit",params:{id:t}})},async handleDel(e){let t=e.id;try{let e=await u(t);200==e.code?(this.$message({message:"删除成功 ^_^",type:"success"}),this.search()):this.$message({message:e.msg,type:"error"})}catch(a){console.log(a)}}}},[["render",function(c,n,p,m,d,u){const h=e,_=t,x=a,$=s,v=j("router-link"),q=r,D=o,E=i,z=l;return f(),g("div",b,[y("div",S,[w($,{inline:!0,model:c.params,ref:"form"},{default:k((()=>[w(_,{class:"mt-10",label:"标题",prop:"keywords"},{default:k((()=>[w(h,{class:"mr-10 w-auto",placeholder:"请输入内容","suffix-icon":m.Search,clearable:"",onClear:u.clearSearch,modelValue:c.params.keywords,"onUpdate:modelValue":n[0]||(n[0]=e=>c.params.keywords=e)},null,8,["suffix-icon","onClear","modelValue"])])),_:1}),w(_,{class:"mt-10"},{default:k((()=>[w(x,{type:"primary",onClick:u.search,round:""},{default:k((()=>[C("搜索")])),_:1},8,["onClick"]),w(x,{onClick:n[1]||(n[1]=e=>u.clearSearch("form")),round:""},{default:k((()=>[C("清空")])),_:1})])),_:1})])),_:1},8,["model"]),w(v,{class:"mt-10",to:"/tag/add"},{default:k((()=>[w(x,{type:"primary",round:""},{default:k((()=>[C("新增")])),_:1})])),_:1})]),w(D,{ref:"multipleTable",data:c.tableData,"tooltip-effect":"dark","row-key":"id",onSelectionChange:u.handleSelectionChange},{default:k((()=>[w(q,{type:"selection"}),w(q,{prop:"id",label:"编号"}),w(q,{prop:"name",label:"名称"}),w(q,{prop:"path",label:"标识"}),w(q,{fixed:"right",width:"100",label:"操作"},{default:k((e=>[w(x,{icon:m.Edit,circle:"",onClick:t=>u.toEdit(e.row)},null,8,["icon","onClick"]),w(x,{icon:m.Delete,circle:"",onClick:t=>u.handleDel(e.row)},null,8,["icon","onClick"])])),_:1})])),_:1},8,["data","onSelectionChange"]),w(z,{type:"flex",class:"mt-20 align-c",justify:"center"},{default:k((()=>[w(E,{background:"",layout:"prev, pager, next",onCurrentChange:u.handleCurrentChange,"page-size":10,total:c.count,currentPage:c.cur,"onUpdate:currentPage":n[2]||(n[2]=e=>c.cur=e),"hide-on-single-page":""},null,8,["onCurrentChange","total","currentPage"])])),_:1})])}],["__scopeId","data-v-e780ef11"]]);export{_ as default};
