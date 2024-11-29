System.register(["./element-plus-legacy.js","./vue-router-legacy.js","./@element-plus-legacy.js","./collect-legacy.js","./article-legacy.js","./index-legacy.js","./@vue-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./dayjs-legacy.js","./@popperjs-legacy.js","./@ctrl-legacy.js","./memoize-one-legacy.js","./normalize-wheel-es-legacy.js","./pinia-legacy.js","./pinia-plugin-persist-legacy.js","./vanilla-jsoneditor-legacy.js","./json-source-map-legacy.js","./@jsonquerylang-legacy.js","./@fortawesome-legacy.js","./natural-compare-lite-legacy.js","./@codemirror-legacy.js","./@lezer-legacy.js","./crelt-legacy.js","./style-mod-legacy.js","./w3c-keyname-legacy.js","./@replit-legacy.js","./codemirror-wrapped-line-indent-legacy.js","./fast-deep-equal-legacy.js","./fast-uri-legacy.js","./jmespath-legacy.js","./jsonpath-plus-legacy.js","./immutable-json-patch-legacy.js","./jsonrepair-legacy.js","./axios-legacy.js","./js-cookie-legacy.js","./nprogress-legacy.js","./saduocss-legacy.js"],(function(e,l){"use strict";var a,t,s,c,n,o,r,u,i,g,d,y,p,j,m,f,h,v,w,k,_,b,C,x,T,I;return{setters:[e=>{a=e.E,t=e.f,s=e.w,c=e.O,n=e.P,o=e.Q},e=>{r=e.u},e=>{u=e.H,i=e.E,g=e.I},e=>{d=e.l,y=e.a,p=e.b},e=>{j=e.c},e=>{m=e.f},e=>{f=e.r,h=e.I,v=e.j,w=e.ad,k=e.o,_=e.c,b=e.M,C=e.Q,x=e.U,T=e.V,I=e.u},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const l={class:"bg-fff radius-6 pd-20"};e("default",{__name:"index",setup(e){const S=r(),z=f(null);f("");const A=f([]),D=f([]),P=f(0),U=f(1),q=f(0),E=h({cid:0,title:"",shortTitle:"",tagId:"",attr:[],source:"",author:"",description:"",img:"",createdAt:new Date,updatedAt:new Date,content:"欢迎使用ChanCMS系统",status:"0",pv:1,link:""}),M=async()=>{try{const e=await d(U.value);200===e.code&&(A.value=[...e.data.list],P.value=e.data.count)}catch(e){console.log(e)}},Q=e=>{U.value=e,d()},$=e=>{D.value=e},B=async e=>{try{const{pages:l,titleTag:a,articleTag:t,parseData:s,charset:c,cid:n,status:o}=e,r=l.split(","),u=await y({taskUrl:r[q.value],titleTag:a,articleTag:t,parseData:s,charset:c});if(200===u.code){const{title:l,article:a}=u.data;e.title=l,e.content=a,e.cid=n,e.status=1===o?1:0,F(e)}}catch(l){console.log(l)}},F=async e=>{try{const l={...E};l.attr=l.attr.toString(),l.tagId=l.tagId.toString(),!l.description&&l.content&&(l.description=m(l.content).substr(0,255));const t=await j({defaultParams:l,fieldParams:{}});200===t.code?(a({message:`第${q.value+1}条数据完成^_^`,type:"success"}),setTimeout((()=>{const{pages:l}=e,a=l.split(",");q.value<=a.length-1&&(B(e),q.value=q.value+1)}),3e3)):a({message:t.msg||`第${q.value+1}条数据失败^_^`,type:"error"})}catch(l){console.log(l)}};return v((()=>{M()})),(e,r)=>{const d=t,y=w("router-link"),j=s,m=c,f=n,h=o;return k(),_("div",l,[b(j,{type:"flex",justify:"end"},{default:C((()=>[b(y,{to:"/collect/add"},{default:C((()=>[b(d,{type:"primary",round:""},{default:C((()=>r[0]||(r[0]=[x("新增")]))),_:1})])),_:1})])),_:1}),b(f,{ref_key:"multipleTable",ref:z,data:A.value,"tooltip-effect":"dark","row-key":"id",onSelectionChange:$},{default:C((()=>[b(m,{type:"selection"}),b(m,{prop:"id",width:"60",label:"编号"}),b(m,{prop:"taskName",label:"任务名称"}),b(m,{prop:"category",label:"所属栏目"}),b(m,{prop:"charset",label:"编码"},{default:C((e=>[x(T(1===e.row.charset?"UTF-8":"GB2312"),1)])),_:1}),b(m,{prop:"status",label:"状态"},{default:C((e=>[x(T(1===e.row.status?"草稿":"发布"),1)])),_:1}),b(m,{prop:"updatedAt",label:"发布时间"},{default:C((e=>[x(T(e.row.updatedAt),1)])),_:1}),b(m,{fixed:"right",width:"222",label:"操作"},{default:C((e=>[b(d,{icon:I(u),circle:"",onClick:l=>(e=>{const l=e.id;S.push({name:"collect-edit",params:{id:l}})})(e.row)},null,8,["icon","onClick"]),b(d,{icon:I(i),circle:"",onClick:l=>(async e=>{const l=e.id;try{const e=await p(l);200===e.code?(a({message:"删除成功 ^_^",type:"success"}),M()):a({message:e.msg,type:"error"})}catch(t){console.log(t)}})(e.row)},null,8,["icon","onClick"]),b(d,{type:"primary",round:"",icon:I(g),onClick:l=>B(e.row)},{default:C((()=>r[1]||(r[1]=[x("执行")]))),_:2},1032,["icon","onClick"])])),_:1})])),_:1},8,["data"]),b(j,{type:"flex",class:"mt-20 align-c",justify:"center"},{default:C((()=>[b(h,{background:"",layout:"prev, pager, next",onCurrentChange:Q,"page-size":10,total:P.value,"hide-on-single-page":""},null,8,["total"])])),_:1})])}}})}}}));
