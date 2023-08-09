System.register(["./element-plus-legacy.js","./@element-plus-legacy.js","./category-legacy.js","./index-legacy.js","./@vue-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./@vueuse-legacy.js","./dayjs-legacy.js","./@ctrl-legacy.js","./@popperjs-legacy.js","./memoize-one-legacy.js","./escape-html-legacy.js","./normalize-wheel-es-legacy.js","./pinia-legacy.js","./pinia-plugin-persist-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./js-cookie-legacy.js","./saduocss-legacy.js"],(function(e,l){"use strict";var a,t,s,c,o,i,n,r,d,u,p,h,y,g,m,f,k,j,w,C,b,_,S,v,x,D,E,V;return{setters:[e=>{a=e.q,t=e.r,s=e.f,c=e.p,o=e.w,i=e.x,n=e.L},e=>{r=e.F,d=e.D,u=e.v,p=e.G},e=>{h=e.s,y=e.b,g=e.d},e=>{m=e._,f=e.t,k=e.b},e=>{j=e.af,w=e.o,C=e.c,b=e.a,_=e.U,S=e.W,v=e._,x=e.a1,D=e.X,E=e.t,V=e.F},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var l=document.createElement("style");l.textContent="[data-v-de054940] .el-form-item{margin-bottom:0}\n",document.head.appendChild(l);const $={class:"search row justify-between align-c pt-10 pl-20 pr-20 pb-20 mb-20"},z={key:0},T={key:1},F={key:0},U={key:1};e("default",m({name:"category-index",setup:()=>({Edit:r,Delete:d,View:u,Search:p}),data:()=>({params:{keywords:""},loading:!0,tableData:[],multipleSelection:[]}),computed:{},created(){this.search()},methods:{clearSearch(){this.params.keywords="",this.tableData=[],this.multipleSelection=[],this.search()},async search(){try{const e=this.params.keywords;let l=await h(e);if(200===l.code){let e=f(l.data);this.tableData=k(e),this.loading=!1}}catch(e){console.log(e)}},toggleSelection(e){e?e.forEach((e=>{this.$refs.multipleTable.toggleRowSelection(e)})):this.$refs.multipleTable.clearSelection()},handleSelectionChange(e){this.multipleSelection=e},toEdit(e){let l=e.id;this.$router.push({name:"category-edit",params:{id:l}})},async hasChild(e){try{let l=await y(e);if(200===l.code)return l.data.length>0}catch(l){console.log(l)}},async del(e){try{200===(await g(e)).code&&(this.$message({message:"删除成功 ^_^",type:"success"}),this.clearSearch())}catch(l){console.log(l)}},delSome(){},handleDel(e){let l=e.id;if(this.hasChild(l).length>0)return this.$message({message:"我下面还有栏目啊 ^_^",type:"success"}),!1;this.del(l)}}},[["render",function(e,l,r,d,u,p){const h=a,y=t,g=s,m=c,f=j("router-link"),k=o,q=i,G=n;return w(),C(V,null,[b("div",$,[_(m,{inline:!0,model:e.params},{default:S((()=>[_(y,{class:"mt-10",label:"名称",prop:"keywords"},{default:S((()=>[_(h,{placeholder:"请输入栏目名称","suffix-icon":d.Search,modelValue:e.params.keywords,"onUpdate:modelValue":l[0]||(l[0]=l=>e.params.keywords=l),clearable:""},null,8,["suffix-icon","modelValue"])])),_:1}),_(y,{class:"mt-10"},{default:S((()=>[_(g,{type:"primary",onClick:p.search,round:""},{default:S((()=>[v("搜索")])),_:1},8,["onClick"]),_(g,{onClick:p.clearSearch,round:""},{default:S((()=>[v("清空")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"]),_(f,{class:"mt-10",to:"/category/add"},{default:S((()=>[_(g,{type:"primary",onClick:p.search,round:""},{default:S((()=>[v("新增")])),_:1},8,["onClick"])])),_:1})]),x((w(),D(q,{ref:"multipleTable",data:e.tableData,"tooltip-effect":"dark","row-key":"id",size:"small","tree-props":{children:"children",hasChildren:"hasChildren"},onSelectionChange:p.handleSelectionChange},{default:S((()=>[_(k,{type:"selection"}),_(k,{prop:"id",label:"编号"}),_(k,{prop:"name",label:"名称"}),_(k,{prop:"type",label:"类型"},{default:S((e=>[0==e.row.type?(w(),C("p",z,"栏目")):(w(),C("p",T,"单页"))])),_:1}),_(k,{prop:"sort",label:"排序"},{default:S((e=>[v(E(e.row.sort),1)])),_:1}),_(k,{prop:"status",label:"状态"},{default:S((e=>[0==e.row.status?(w(),C("p",F,"显示")):(w(),C("p",U,"隐藏"))])),_:1}),_(k,{fixed:"right",label:"操作",width:"160"},{default:S((l=>[_(g,{icon:d.View,circle:"",onClick:a=>e.handleClick(l.row)},null,8,["icon","onClick"]),_(g,{icon:d.Edit,circle:"",onClick:e=>p.toEdit(l.row)},null,8,["icon","onClick"]),_(g,{icon:d.Delete,circle:"",onClick:e=>p.handleDel(l.row)},null,8,["icon","onClick"])])),_:1})])),_:1},8,["data","onSelectionChange"])),[[G,e.loading]])],64)}],["__scopeId","data-v-de054940"]]))}}}));
