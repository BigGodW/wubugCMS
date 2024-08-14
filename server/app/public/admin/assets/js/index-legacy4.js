System.register(["./element-plus-legacy.js","./@element-plus-legacy.js","./collect-legacy.js","./article-legacy.js","./index-legacy.js","./@qiun-legacy.js","./@vue-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./@vueuse-legacy.js","./dayjs-legacy.js","./@ctrl-legacy.js","./@popperjs-legacy.js","./memoize-one-legacy.js","./normalize-wheel-es-legacy.js","./pinia-legacy.js","./pinia-plugin-persist-legacy.js","./vanilla-jsoneditor-legacy.js","./json-source-map-legacy.js","./@fortawesome-legacy.js","./natural-compare-lite-legacy.js","./@codemirror-legacy.js","./@lezer-legacy.js","./crelt-legacy.js","./style-mod-legacy.js","./w3c-keyname-legacy.js","./@replit-legacy.js","./codemirror-wrapped-line-indent-legacy.js","./fast-deep-equal-legacy.js","./fast-uri-legacy.js","./jmespath-legacy.js","./immutable-json-patch-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./js-cookie-legacy.js","./saduocss-legacy.js"],(function(e,t){"use strict";var l,a,s,c,n,i,o,r,u,g,d,p,h,y,m,j,f,w,C,_,b,k,S;return{setters:[e=>{l=e.f,a=e.F,s=e.L,c=e.M,n=e.O},e=>{i=e.G,o=e.E,r=e.v,u=e.H,g=e.I},e=>{d=e.l,p=e.a,h=e.b},e=>{y=e.c},e=>{m=e.f},e=>{j=e._},e=>{f=e.r,w=e.o,C=e.c,_=e.g,b=e.Z,k=e.$,S=e.t},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const t={class:"content-wrap"};e("default",j({name:"collect-index",setup:()=>({Edit:i,Delete:o,View:r,Search:u,Cpu:g}),data:()=>({keywords:"",tableData:[],multipleSelection:[],count:0,cur:1,step:0,params:{cid:0,title:"",short_title:"",tag_id:"",attr:[],seo_title:"",seo_keywords:"",seo_description:"",source:"",author:"",description:"",img:"",createdAt:new Date,updatedAt:new Date,content:"欢迎使用ChanCMS系统",status:"0",pv:1,link:""}}),computed:{},created(){this.list()},methods:{async list(){try{let e=await d(this.cur);200===e.code&&(this.tableData=[...e.data.list],this.count=e.data.count)}catch(e){console.log(e)}},handleCurrentChange(e){this.cur=e,this.list()},toggleSelection(e){e?e.forEach((e=>{this.$refs.multipleTable.toggleRowSelection(e)})):this.$refs.multipleTable.clearSelection()},handleSelectionChange(e){this.multipleSelection=e},async toRun(e){try{let{pages:t,titleTag:l,articleTag:a,parseData:s,charset:c,cid:n,status:i}=e;t=t.split(",");let o=await p({taskUrl:t[this.step],titleTag:l,articleTag:a,parseData:s,charset:c});if(200==o.code){this.article=o.data;const{title:t,article:l}=o.data;this.params.title=t,this.params.content=l,this.params.cid=n,this.params.status=1==i?1:0,this.create(e)}}catch(t){console.log(t)}},async create(e){try{let t={...this.params};t.attr=t.attr.toString(),t.tag_id=t.tag_id.toString(),console.log(t),!t.description&&t.content&&(t.description=m(t.content).substr(0,255));let l=await y({defaultParams:t,fieldParams:{}});200==l.code?(this.$message({message:`第一${this.step+1}条数据完成^_^`,type:"success"}),setTimeout((()=>{let{pages:t}=e;t=t.split(","),console.log(t.length,this.step),this.step<=t.length-1&&(this.toRun(e),this.step=this.step+1)}),3e3)):this.$message({message:l.msg||`第一${this.step+1}条数据失败^_^`,type:"success"})}catch(t){console.log(t)}},toEdit(e){let t=e.id;this.$router.push({name:"collect-edit",params:{id:t}})},async handleDel(e){let t=e.id;try{let e=await h(t);200===e.code?(this.$message({message:"删除成功 ^_^",type:"success"}),this.list()):this.$message({message:e.msg,type:"success"})}catch(l){console.log(l)}}}},[["render",function(e,i,o,r,u,g){const d=l,p=f("router-link"),h=a,y=s,m=c,j=n;return w(),C("div",t,[_(h,{type:"flex",class:"mt-10 mb-10",justify:"end"},{default:b((()=>[_(p,{to:"/collect/add"},{default:b((()=>[_(d,{type:"primary",round:""},{default:b((()=>[k("新增")])),_:1})])),_:1})])),_:1}),_(m,{ref:"multipleTable",data:e.tableData,"tooltip-effect":"dark","row-key":"id",onSelectionChange:g.handleSelectionChange},{default:b((()=>[_(y,{type:"selection"}),_(y,{prop:"id",width:"60",label:"编号"}),_(y,{prop:"taskName",label:"任务名称"}),_(y,{prop:"category",label:"所属栏目"}),_(y,{prop:"charset",label:"编码"},{default:b((e=>[k(S(1==e.row.charset?"UTF-8":"GB2312"),1)])),_:1}),_(y,{prop:"status",label:"状态"},{default:b((e=>[k(S(1==e.row.status?"草稿":"发布"),1)])),_:1}),_(y,{prop:"updatedAt",label:"发布时间"},{default:b((e=>[k(S(e.row.updatedAt),1)])),_:1}),_(y,{fixed:"right",width:"222",label:"操作"},{default:b((e=>[_(d,{icon:r.Edit,circle:"",onClick:t=>g.toEdit(e.row)},null,8,["icon","onClick"]),_(d,{icon:r.Delete,circle:"",onClick:t=>g.handleDel(e.row)},null,8,["icon","onClick"]),_(d,{type:"primary",round:"",icon:r.Cpu,onClick:t=>g.toRun(e.row)},{default:b((()=>[k("执行")])),_:2},1032,["icon","onClick"])])),_:1})])),_:1},8,["data","onSelectionChange"]),_(h,{type:"flex",class:"mt-20 align-c",justify:"center"},{default:b((()=>[_(j,{background:"",layout:"prev, pager, next",onCurrentChange:g.handleCurrentChange,"page-size":10,total:e.count,"hide-on-single-page":""},null,8,["onCurrentChange","total"])])),_:1})])}]]))}}}));
