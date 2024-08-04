import{u as e,r as t,q as a,f as o,p as r,L as i,M as s,N as l,O as c,F as n,K as d}from"./element-plus.js";import{G as p,E as m,v as u,H as h,i as f}from"./@element-plus.js";import{s as g,b as y}from"./article.js";import{f as w}from"./category.js";import{a as j,t as C}from"./index.js";import{_ as k}from"./@qiun.js";import{r as b,o as S,c as _,a as x,g as v,Z as $,$ as E,w as q,e as V,t as D,f as F}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./normalize-wheel-es.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vanilla-jsoneditor.js";import"./json-source-map.js";import"./@fortawesome.js";import"./natural-compare-lite.js";import"./@codemirror.js";import"./@lezer.js";import"./crelt.js";import"./style-mod.js";import"./w3c-keyname.js";import"./@replit.js";import"./codemirror-wrapped-line-indent.js";import"./fast-deep-equal.js";import"./fast-uri.js";import"./jmespath.js";import"./immutable-json-patch.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const I={class:"content-wrap"},z={class:"search flex justify-between align-c pt-10 pl-20 pr-20 pb-20 mb-20"},U=["href"],P={style:{"margin-top":"20px"}};const T=k({name:"article-index",setup:()=>({Edit:p,Delete:m,View:u,Search:h,InfoFilled:f}),data:()=>({domain:location.origin,keywords:"",cid:0,cur:1,category:[],tableData:[],multipleSelection:[],count:0,loading:!0,params:{keywords:"",categorySelected:[]}}),computed:{},created(){},mounted(){let{cur:e=1,cid:t=0,keywords:a=""}=this.$route.query;this.cur=parseInt(e),this.cid=parseInt(t),this.params={categorySelected:this.cid,keywords:a},this.queryCategory(),this.search()},methods:{clearSearch(e){e&&this.$refs.form.resetFields(),this.$router.replace({name:"article-index",query:{cur:1,cid:0,keywords:""}}),this.cur=1,this.params.keywords="",this.cid=0,this.search()},doSearch(){this.$router.replace({name:"article-index",query:{cur:this.cur,cid:this.cid,keywords:this.params.keywords}}),this.search()},async search(){try{let e=await g(this.cur,this.params.keywords,this.cid);200===e.code&&(this.tableData=[...e.data.list],this.count=e.data.count,this.cur=e.data.current,this.loading=!1)}catch(e){console.log(e)}},handleCurrentChange(e){this.loading=!0,this.cur=+e,this.doSearch()},toggleSelection(e){e?e.forEach((e=>{this.$refs.multipleTable.toggleRowSelection(e)})):this.$refs.multipleTable.clearSelection()},handleSelectionChange(e){this.multipleSelection=e},async queryCategory(){try{let e=await w();if(200===e.code){let t=j(C(e.data)),a=j(e.data);this.cateList=a,this.category=[...t]}}catch(e){console.log(e)}},handleChange(e){this.cid=e[e.length-1]},toEdit(e){let t=e.id;this.$router.push({name:"article-edit",params:{id:t}})},cancelEvent(){},async delSome(){let e=this.multipleSelection.map((e=>e.id));200===(await y(e.join(","))).code&&(this.$message({message:"删除成功 ^_^",type:"success"}),this.search())},handleClick(e){let t="0"==e.type?"".concat(location.origin,"article-").concat(e.id,".html"):"".concat(location.origin).concat(e.path,"/page-").concat(e.id,".html");window.open(t)},async handleDel(e){let t=e.id;try{200===(await y(t)).code&&(this.$message({message:"文章删除成功 ^_^",type:"success"}),this.search())}catch(a){console.log(a)}}},onBeforeUnmount(){}},[["render",function(p,m,u,h,f,g){const y=e,w=t,j=a,C=o,k=r,T=b("router-link"),A=i,L=s,B=l,G=c,H=n,K=d;return S(),_("div",I,[x("div",z,[v(k,{inline:!0,model:p.params,ref:"form"},{default:$((()=>[v(w,{class:"mt-10",label:"栏目筛选",prop:"categorySelected"},{default:$((()=>[v(y,{class:"w-auto ml-5","show-all-levels":!1,modelValue:p.params.categorySelected,"onUpdate:modelValue":m[0]||(m[0]=e=>p.params.categorySelected=e),options:p.category,onChange:g.handleChange},null,8,["modelValue","options","onChange"])])),_:1}),v(w,{class:"mt-10",label:"标题",prop:"keywords"},{default:$((()=>[v(j,{class:"mr-10 w-auto",placeholder:"请输入文章标题","suffix-icon":h.Search,modelValue:p.params.keywords,"onUpdate:modelValue":m[1]||(m[1]=e=>p.params.keywords=e),clearable:"",onClear:g.clearSearch},null,8,["suffix-icon","modelValue","onClear"])])),_:1}),v(w,{class:"mt-10"},{default:$((()=>[v(C,{type:"primary",onClick:g.doSearch,round:""},{default:$((()=>[E("搜索")])),_:1},8,["onClick"]),v(C,{onClick:m[2]||(m[2]=e=>g.clearSearch("form")),round:""},{default:$((()=>[E("清空")])),_:1})])),_:1})])),_:1},8,["model"]),v(T,{class:"mt-10",to:"/article/add"},{default:$((()=>[v(C,{type:"primary",round:""},{default:$((()=>[E("新增")])),_:1})])),_:1})]),q((S(),V(L,{ref:"multipleTable",data:p.tableData,"tooltip-effect":"dark","row-key":"id",onSelectionChange:g.handleSelectionChange},{default:$((()=>[v(A,{type:"selection"}),v(A,{prop:"id",label:"编号",width:"120",fixed:""}),v(A,{prop:"title",label:"标题"},{default:$((e=>[0===e.row.status?(S(),_("a",{key:0,class:"block",href:"0"==e.row.type?"".concat(p.domain,"/article-").concat(e.row.id,".html"):"".concat(p.domain,"/").concat(e.row.path,"/page-").concat(e.row.id,".html"),target:"_blank"},D(e.row.title),9,U)):F("",!0)])),_:1}),v(A,{prop:"name",label:"栏目",width:"80"}),v(A,{prop:"createdAt",label:"更新时间",width:"170"}),v(A,{prop:"status",label:"状态",width:"60"},{default:$((e=>[E(D(0==e.row.status?"显示":"隐藏"),1)])),_:1}),v(A,{fixed:"right",label:"操作",width:"150"},{default:$((e=>[v(C,{icon:h.View,circle:"",onClick:t=>g.handleClick(e.row)},null,8,["icon","onClick"]),v(C,{icon:h.Edit,circle:"",onClick:t=>g.toEdit(e.row)},null,8,["icon","onClick"]),v(C,{icon:h.Delete,circle:"",onClick:t=>g.handleDel(e.row)},null,8,["icon","onClick"])])),_:1})])),_:1},8,["data","onSelectionChange"])),[[K,p.loading]]),v(H,{type:"flex",class:"mt-20",justify:"space-between"},{default:$((()=>[x("div",P,[E(" 批量操作： "),v(B,{"confirm-button-text":"确定","cancel-button-text":"取消",icon:h.InfoFilled,"icon-color":"#626AEF",title:"此操作将永久删除, 是否继续?",onConfirm:g.delSome,onCancel:g.cancelEvent},{reference:$((()=>[v(C,null,{default:$((()=>[E("删除")])),_:1})])),_:1},8,["icon","onConfirm","onCancel"])]),v(G,{background:"",layout:"prev, pager, next",onCurrentChange:g.handleCurrentChange,"page-size":20,total:p.count,currentPage:p.cur,"onUpdate:currentPage":m[3]||(m[3]=e=>p.cur=e),"hide-on-single-page":""},null,8,["onCurrentChange","total","currentPage"])])),_:1})])}],["__scopeId","data-v-43e97df4"]]);export{T as default};
