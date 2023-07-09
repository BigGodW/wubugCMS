import{o as e,A as a,I as t,p as l,q as s,f as o,B as i}from"./element-plus.js";import{F as r,D as c,v as n,G as d}from"./@element-plus.js";import{s as p,b as m,d as h}from"./category.js";import{t as u,a as f}from"./tool.js";import{_ as y}from"./index.js";import{ae as g,o as k,c as j,a as w,T as C,V as b,a0 as _,W as S,F as D,Z as v,t as x}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./escape-html.js";import"./normalize-wheel-es.js";import"./js-cookie.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vue-router.js";import"./axios.js";/* empty css        */const V={class:"search row justify-between align-c pd-20 mb-20"},E={key:0},$={key:1},T={key:0},z={key:1};const F=y({name:"category-index",setup:()=>({Edit:r,Delete:c,View:n,Search:d}),data:()=>({params:{keywords:""},loading:!0,tableData:[],multipleSelection:[]}),computed:{},created(){this.search()},methods:{clearSearch(){this.params.keywords="",this.tableData=[],this.multipleSelection=[],this.search()},async search(){try{const e=this.params.keywords;let a=await p(e);if(200===a.code){let e=u(a.data);console.log("data->",e),this.tableData=f(e),this.loading=!1}}catch(e){console.log(e)}},toggleSelection(e){e?e.forEach((e=>{this.$refs.multipleTable.toggleRowSelection(e)})):this.$refs.multipleTable.clearSelection()},handleSelectionChange(e){this.multipleSelection=e},toEdit(e){let a=e.id;this.$router.push({name:"category-edit",params:{id:a}})},async hasChild(e){try{let a=await m(e);if(200===a.code)return a.data.length>0}catch(a){console.log(a)}},async del(e){try{200===(await h(e)).code&&(this.$message({message:"删除成功 ^_^",type:"success"}),this.clearSearch())}catch(a){console.log(a)}},delSome(){},handleDel(e){let a=e.id;if(this.hasChild(a).length>0)return this.$message({message:"我下面还有栏目啊 ^_^",type:"success"}),!1;this.del(a)}}},[["render",function(r,c,n,d,p,m){const h=l,u=s,f=o,y=e,F=g("router-link"),I=i,q=a,A=t;return k(),j(D,null,[w("div",V,[C(y,{inline:!0,model:r.params},{default:b((()=>[C(u,{label:"名称",prop:"keywords"},{default:b((()=>[C(h,{placeholder:"请输入栏目名称","suffix-icon":d.Search,modelValue:r.params.keywords,"onUpdate:modelValue":c[0]||(c[0]=e=>r.params.keywords=e),clearable:""},null,8,["suffix-icon","modelValue"])])),_:1}),C(u,null,{default:b((()=>[C(f,{type:"primary",onClick:m.search,round:""},{default:b((()=>[v("搜索")])),_:1},8,["onClick"]),C(f,{onClick:m.clearSearch,round:""},{default:b((()=>[v("清空")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"]),C(F,{to:"/category/add"},{default:b((()=>[C(f,{type:"primary",onClick:m.search,round:""},{default:b((()=>[v("新增")])),_:1},8,["onClick"])])),_:1})]),_((k(),S(q,{ref:"multipleTable",data:r.tableData,"tooltip-effect":"dark","row-key":"id",size:"small","tree-props":{children:"children",hasChildren:"hasChildren"},onSelectionChange:m.handleSelectionChange},{default:b((()=>[C(I,{type:"selection"}),C(I,{prop:"id",label:"编号"}),C(I,{prop:"name",label:"名称"}),C(I,{prop:"type",label:"类型"},{default:b((e=>[0==e.row.type?(k(),j("p",E,"栏目")):(k(),j("p",$,"单页"))])),_:1}),C(I,{prop:"sort",label:"排序"},{default:b((e=>[v(x(e.row.sort),1)])),_:1}),C(I,{prop:"status",label:"状态"},{default:b((e=>[0==e.row.status?(k(),j("p",T,"显示")):(k(),j("p",z,"隐藏"))])),_:1}),C(I,{fixed:"right",label:"操作",width:"160"},{default:b((e=>[C(f,{icon:d.View,circle:"",onClick:a=>r.handleClick(e.row)},null,8,["icon","onClick"]),C(f,{icon:d.Edit,circle:"",onClick:a=>m.toEdit(e.row)},null,8,["icon","onClick"]),C(f,{icon:d.Delete,circle:"",onClick:a=>m.handleDel(e.row)},null,8,["icon","onClick"])])),_:1})])),_:1},8,["data","onSelectionChange"])),[[A,r.loading]])],64)}],["__scopeId","data-v-d127f2b0"]]);export{F as default};
//# sourceMappingURL=index5.js.map
