System.register(["./element-plus-legacy.js","./@element-plus-legacy.js","./frag-legacy.js","./index-legacy.js","./@vue-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./@vueuse-legacy.js","./dayjs-legacy.js","./@ctrl-legacy.js","./@popperjs-legacy.js","./memoize-one-legacy.js","./escape-html-legacy.js","./normalize-wheel-es-legacy.js","./pinia-legacy.js","./pinia-plugin-persist-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./saduocss-legacy.js"],(function(e,l){"use strict";var a,t,n,c,o,s,r,i,u,d,g,h,p,y,m,f,C,j,k,b,w,_,S,v;return{setters:[e=>{a=e.o,t=e.A,n=e.s,c=e.p,o=e.q,s=e.f,r=e.B,i=e.C},e=>{u=e.F,d=e.D,g=e.v,h=e.G},e=>{p=e.s,y=e.a},e=>{m=e._},e=>{f=e.ae,C=e.o,j=e.c,k=e.a,b=e.T,w=e.V,_=e.F,S=e.Z,v=e.t},null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var l=document.createElement("style");l.textContent="[data-v-e7c49dd8] .el-form-item{margin-bottom:0}\n",document.head.appendChild(l);const x={class:"search row justify-between align-c pd-20 mb-20"};e("default",m({name:"frag-index",setup:()=>({Edit:u,Delete:d,View:g,Search:h}),data:()=>({keywords:"",tableData:[],multipleSelection:[],count:0,cur:1}),computed:{},created(){this.search()},methods:{async search(){try{let e=await p(this.cur,this.keywords);200===e.code&&(this.tableData=[...e.data.list],this.count=e.data.count)}catch(e){console.log(e)}},handleCurrentChange(e){this.cur=e,this.search()},toggleSelection(e){e?e.forEach((e=>{this.$refs.multipleTable.toggleRowSelection(e)})):this.$refs.multipleTable.clearSelection()},handleSelectionChange(e){this.multipleSelection=e},toEdit(e){let l=e.id;this.$router.push({name:"frag-edit",params:{id:l}})},async handleDel(e){let l=e.id;try{200===(await y(l)).code&&(this.$message({message:"文章删除成功 ^_^",type:"success"}),this.search())}catch(a){console.log(a)}}}},[["render",function(e,l,u,d,g,h){const p=c,y=o,m=s,D=a,E=f("router-link"),V=r,z=t,T=i,$=n;return C(),j(_,null,[k("div",x,[b(D,{inline:!0,model:e.params},{default:w((()=>[b(y,{label:"标题",prop:"keywords"},{default:w((()=>[b(p,{class:"mr-10 w-auto",placeholder:"请输入内容","suffix-icon":d.Search,clearable:"",onClear:h.search,modelValue:e.keywords,"onUpdate:modelValue":l[0]||(l[0]=l=>e.keywords=l)},null,8,["suffix-icon","onClear","modelValue"])])),_:1}),b(y,null,{default:w((()=>[b(m,{type:"primary",onClick:h.search,round:""},{default:w((()=>[S("搜索")])),_:1},8,["onClick"]),b(m,{onClick:e.clearSearch,round:""},{default:w((()=>[S("清空")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"]),b(E,{to:"/frag/add"},{default:w((()=>[b(m,{type:"primary",round:""},{default:w((()=>[S("新增")])),_:1})])),_:1})]),b(z,{ref:"multipleTable",data:e.tableData,"tooltip-effect":"dark","row-key":"id",size:"small",onSelectionChange:h.handleSelectionChange},{default:w((()=>[b(V,{type:"selection"}),b(V,{prop:"id",label:"编号"}),b(V,{prop:"name",label:"名称"}),b(V,{prop:"mark",label:"标识"}),b(V,{prop:"createdAt",label:"发布时间"},{default:w((e=>[S(v(e.row.createdAt),1)])),_:1}),b(V,{fixed:"right",label:"操作"},{default:w((e=>[b(m,{icon:d.Edit,circle:"",onClick:l=>h.toEdit(e.row)},null,8,["icon","onClick"]),b(m,{icon:d.Delete,circle:"",onClick:l=>h.handleDel(e.row)},null,8,["icon","onClick"])])),_:1})])),_:1},8,["data","onSelectionChange"]),b($,{type:"flex",class:"mt-20 align-c",justify:"center"},{default:w((()=>[b(T,{background:"",layout:"prev, pager, next",onCurrentChange:h.handleCurrentChange,"pager-size":10,total:e.count,"hide-on-single-page":""},null,8,["onCurrentChange","total"])])),_:1})],64)}],["__scopeId","data-v-e7c49dd8"]]))}}}));
//# sourceMappingURL=index-legacy8.js.map
