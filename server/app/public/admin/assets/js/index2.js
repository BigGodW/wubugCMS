import{L as e,d as t,u as a,r as o,q as r,f as s,p as i,M as l,N as c,O as n,P as d,F as p,K as m}from"./element-plus.js";import{G as u,E as h,v as f,H as g,i as y}from"./@element-plus.js";import{s as w,b as j}from"./article.js";import{f as C}from"./category.js";import{_ as k,b,t as S}from"./index.js";import{ad as _,o as x,c as v,a as E,M as V,Q as $,U as D,_ as q,R as F,V as I,W as T}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./normalize-wheel-es.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vanilla-jsoneditor.js";import"./json-source-map.js";import"./@fortawesome.js";import"./natural-compare-lite.js";import"./@codemirror.js";import"./@lezer.js";import"./crelt.js";import"./style-mod.js";import"./w3c-keyname.js";import"./@replit.js";import"./codemirror-wrapped-line-indent.js";import"./fast-deep-equal.js";import"./fast-uri.js";import"./jmespath.js";import"./immutable-json-patch.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const U={class:"content-wrap"},z={class:"search flex justify-between align-c pt-10 pl-20 pr-20 pb-20 mb-20"},P=["href"],B={style:{"margin-top":"20px"}};const A=k({name:"article-index",setup:()=>({Edit:u,Delete:h,View:f,Search:g,InfoFilled:y}),data:()=>({domain:location.origin,keywords:"",cid:0,cur:1,category:[],tableData:[],multipleSelection:[],count:0,loading:!0,params:{keywords:"",categorySelected:[]}}),computed:{},created(){},mounted(){let{cur:e=1,cid:t=0,keywords:a=""}=this.$route.query;this.cur=parseInt(e),this.cid=parseInt(t),this.params={categorySelected:this.cid,keywords:a},this.queryCategory(),this.search()},methods:{clearSearch(e){e&&this.$refs.form.resetFields(),this.$router.replace({name:"article-index",query:{cur:1,cid:0,keywords:""}}),this.cur=1,this.params.keywords="",this.cid=0,this.search()},doSearch(){this.$router.replace({name:"article-index",query:{cur:this.cur,cid:this.cid,keywords:this.params.keywords}}),this.search()},async search(){try{let e=await w(this.cur,this.params.keywords,this.cid);200===e.code&&(this.tableData=[...e.data.list],this.count=e.data.count,this.cur=e.data.current,this.loading=!1)}catch(e){console.log(e)}},handleCurrentChange(e){this.loading=!0,this.cur=+e,this.doSearch()},toggleSelection(e){e?e.forEach((e=>{this.$refs.multipleTable.toggleRowSelection(e)})):this.$refs.multipleTable.clearSelection()},handleSelectionChange(e){this.multipleSelection=e},async queryCategory(){try{let e=await C();if(200===e.code){let t=b(S(e.data)),a=b(e.data);this.cateList=a,this.category=[...t]}}catch(e){console.log(e)}},handleChange(e){this.cid=e[e.length-1]},toEdit(e){let t=e.id;this.$router.push({name:"article-edit",params:{id:t}})},cancelEvent(){},async delSome(){let e=this.multipleSelection.map((e=>e.id));200===(await j(e.join(","))).code&&(this.$message({message:"删除成功 ^_^",type:"success"}),this.search())},handleClick(e){let t="0"==e.type?"".concat(location.origin,"article-").concat(e.id,".html"):"".concat(location.origin).concat(e.path,"/page-").concat(e.id,".html");window.open(t)},async handleDel(a){e.confirm("此操作将永久删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{let e=a.id;try{200===(await j(e)).code&&(this.$message({message:"文章删除成功 ^_^",type:"success"}),this.search())}catch(t){console.log(t)}})).catch((()=>{t({type:"info",message:"Delete canceled"})}))}},onBeforeUnmount(){}},[["render",function(e,t,u,h,f,g){const y=a,w=o,j=r,C=s,k=i,b=_("router-link"),S=l,A=c,L=n,M=d,R=p,G=m;return x(),v("div",U,[E("div",z,[V(k,{inline:!0,model:e.params,ref:"form"},{default:$((()=>[V(w,{class:"mt-10",label:"栏目筛选",prop:"categorySelected"},{default:$((()=>[V(y,{class:"w-auto ml-5","show-all-levels":!1,modelValue:e.params.categorySelected,"onUpdate:modelValue":t[0]||(t[0]=t=>e.params.categorySelected=t),options:e.category,onChange:g.handleChange},null,8,["modelValue","options","onChange"])])),_:1}),V(w,{class:"mt-10",label:"标题",prop:"keywords"},{default:$((()=>[V(j,{class:"mr-10 w-auto",placeholder:"请输入文章标题","suffix-icon":h.Search,modelValue:e.params.keywords,"onUpdate:modelValue":t[1]||(t[1]=t=>e.params.keywords=t),clearable:"",onClear:g.clearSearch},null,8,["suffix-icon","modelValue","onClear"])])),_:1}),V(w,{class:"mt-10"},{default:$((()=>[V(C,{type:"primary",onClick:g.doSearch,round:""},{default:$((()=>[D("搜索")])),_:1},8,["onClick"]),V(C,{onClick:t[2]||(t[2]=e=>g.clearSearch("form")),round:""},{default:$((()=>[D("清空")])),_:1})])),_:1})])),_:1},8,["model"]),V(b,{class:"mt-10",to:"/article/add"},{default:$((()=>[V(C,{type:"primary",round:""},{default:$((()=>[D("新增")])),_:1})])),_:1})]),q((x(),F(A,{ref:"multipleTable",data:e.tableData,"tooltip-effect":"dark","row-key":"id",onSelectionChange:g.handleSelectionChange},{default:$((()=>[V(S,{type:"selection"}),V(S,{prop:"id",label:"编号",width:"120",fixed:""}),V(S,{prop:"title",label:"标题"},{default:$((t=>[0===t.row.status?(x(),v("a",{key:0,class:"block",href:"0"==t.row.type?"".concat(e.domain,"/article-").concat(t.row.id,".html"):"".concat(e.domain).concat(t.row.path,"/page-").concat(t.row.id,".html"),target:"_blank"},I(t.row.title),9,P)):T("",!0)])),_:1}),V(S,{prop:"name",label:"栏目",width:"80"}),V(S,{prop:"createdAt",label:"更新时间",width:"170"}),V(S,{prop:"status",label:"状态",width:"60"},{default:$((e=>[D(I(0==e.row.status?"显示":"隐藏"),1)])),_:1}),V(S,{fixed:"right",label:"操作",width:"150"},{default:$((e=>[V(C,{icon:h.View,circle:"",onClick:t=>g.handleClick(e.row)},null,8,["icon","onClick"]),V(C,{icon:h.Edit,circle:"",onClick:t=>g.toEdit(e.row)},null,8,["icon","onClick"]),V(C,{icon:h.Delete,circle:"",onClick:t=>g.handleDel(e.row)},null,8,["icon","onClick"])])),_:1})])),_:1},8,["data","onSelectionChange"])),[[G,e.loading]]),V(R,{type:"flex",class:"mt-20",justify:"space-between"},{default:$((()=>[E("div",B,[D(" 批量操作： "),V(L,{"confirm-button-text":"确定","cancel-button-text":"取消",icon:h.InfoFilled,"icon-color":"#626AEF",title:"此操作将永久删除, 是否继续?",onConfirm:g.delSome,onCancel:g.cancelEvent},{reference:$((()=>[V(C,null,{default:$((()=>[D("删除")])),_:1})])),_:1},8,["icon","onConfirm","onCancel"])]),V(M,{background:"",layout:"prev, pager, next",onCurrentChange:g.handleCurrentChange,"page-size":20,total:e.count,currentPage:e.cur,"onUpdate:currentPage":t[3]||(t[3]=t=>e.cur=t),"hide-on-single-page":""},null,8,["onCurrentChange","total","currentPage"])])),_:1})])}],["__scopeId","data-v-6f43356d"]]);export{A as default};
