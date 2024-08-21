System.register(["./element-plus-legacy.js","./echarts-legacy.js","./index-legacy.js","./@vue-legacy.js","./article-legacy.js","./site-legacy2.js","./js-cookie-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./@vueuse-legacy.js","./dayjs-legacy.js","./@element-plus-legacy.js","./@ctrl-legacy.js","./@popperjs-legacy.js","./memoize-one-legacy.js","./normalize-wheel-es-legacy.js","./zrender-legacy.js","./pinia-legacy.js","./pinia-plugin-persist-legacy.js","./vanilla-jsoneditor-legacy.js","./json-source-map-legacy.js","./@fortawesome-legacy.js","./natural-compare-lite-legacy.js","./@codemirror-legacy.js","./@lezer-legacy.js","./crelt-legacy.js","./style-mod-legacy.js","./w3c-keyname-legacy.js","./@replit-legacy.js","./codemirror-wrapped-line-indent-legacy.js","./fast-deep-equal-legacy.js","./fast-uri-legacy.js","./jmespath-legacy.js","./immutable-json-patch-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./saduocss-legacy.js"],(function(s,a){"use strict";var e,l,t,c,n,d,i,r,o,m,u,g,p,f,h,y,v;return{setters:[s=>{e=s.v,l=s.F},s=>{t=s.i},s=>{c=s._},s=>{n=s.o,d=s.c,i=s.a,r=s.ad,o=s.R,m=s.Q,u=s.M,g=s.U,p=s.V,f=s.ay,h=s.az},s=>{y=s.t},s=>{v=s.r},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var b=document.createElement("style");b.textContent=".echarts[data-v-4670c594]{width:100%;height:100%}.echarts[data-v-4670c594]>div>div{margin:0 auto!important}.radius-6[data-v-df201d47]{border-radius:6px}.c-9ca4bf[data-v-df201d47]{color:#9ca4bf}.chanyue-title[data-v-df201d47],.chanyue-author[data-v-df201d47],.chanyue-txt[data-v-df201d47]{font-family:chanyue}.tj-img[data-v-df201d47]{width:54px;height:54px;background-color:#f2f3f5;border-radius:50%}.chart[data-v-df201d47]{height:300px}@media only screen and (max-width: 992px){.chart[data-v-df201d47]{max-width:calc(100vw - 45px);height:300px}}\n",document.head.appendChild(b);const j={class:"echarts"},x={ref:"myEcharts",style:{width:"100%",height:"100%",margin:"0 auto"}},w=c({name:"ChanEcharts",props:{option:{type:Object,default:()=>({})}},data:()=>({myEcharts:null}),mounted(){this.initEcharts()},methods:{initEcharts(){this.myEcharts=t(this.$refs.myEcharts),this.myEcharts.setOption(this.option)}},watch:{option:{handler(s){this.myEcharts.setOption(s)},deep:!0}},beforeDestroy(){this.myEcharts.dispose()}},[["render",function(s,a,e,l,t,c){return n(),d("div",j,[i("div",x,null,512)])}],["__scopeId","data-v-4670c594"]]),E=""+new URL("../svg/ico-article.svg",a.meta.url).href,_=""+new URL("../svg/ico-will.svg",a.meta.url).href,C=""+new URL("../svg/ico-message.svg",a.meta.url).href,S=""+new URL("../svg/ico-up.svg",a.meta.url).href,k={name:"home-info",components:{ChanEcharts:w},data:()=>({data:{week:0,message:0,tag:0,article:0,version:"",appName:"ChanCMS",port:"",versionTime:"",author:""},dirname:"",loading:!0,chartData:{},option:{title:{text:"ChanCMS架构",left:"center"},tooltip:{trigger:"item",borderWidth:0,backgroundColor:"#fff",textStyle:{color:"#000"}},legend:{bottom:"bottom",icon:"circle",left:"center"},toolbox:{x:"right",y:"bottom"},series:[{name:"技术占比",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,padAngle:5,color:["#FADC19","#9FDB1D","#00B42A","#3491FA","#165DFF","#722ED1"],itemStyle:{borderRadius:10,borderWidth:0},label:{show:!1,position:"center"},emphasis:{label:{show:!1,fontSize:20,fontWeight:"bold"}},labelLine:{show:!0},data:[{value:40,name:"nodejs"},{value:10,name:"mysql"},{value:40,name:"vue3"},{value:90,name:"javascript"},{value:10,name:"css3"},{value:10,name:"html5"}]}]}}),computed:{},created(){},mounted(){this.tongji(),this.runEnv()},methods:{async tongji(){try{let s=await y();200===s.code?(this.data=s.data,this.loading=!1):this.$message({message:s.msg,type:"success"})}catch(s){console.log(s)}},async runEnv(){try{let s=await v();const{code:a,data:e}=s;200===a?this.dirname=e.dirname:this.$message({message:s.msg,type:"success"})}catch(s){console.log(s)}}}},D=s=>(f("data-v-df201d47"),s=s(),h(),s),L={class:"bg-fff pd-20 radius-6 flex justify-around mb-20"},z={class:"flex flex-col align-c"},F=D((()=>i("div",{class:"tj-img"},[i("img",{src:E})],-1))),M=D((()=>i("p",{class:"f-12 text-c mt-5"},"文章内容",-1))),R={class:"f-20 text-c"},q=D((()=>i("sub",{class:"pos-r t-0 f-12"},"篇",-1))),A={class:"flex flex-col align-c"},O=D((()=>i("div",{class:"tj-img"},[i("img",{src:_})],-1))),U=D((()=>i("p",{class:"f-12 text-c mt-5"},"文章标签",-1))),I={class:"f-20 text-c"},W=D((()=>i("sub",{class:"pos-r t-0 f-12"},"个",-1))),$=D((()=>i("div",{class:"tj-img"},[i("img",{src:C})],-1))),B=D((()=>i("p",{class:"f-12 text-c mt-5"},"留言信息",-1))),N={class:"f-20 text-c"},Q=D((()=>i("sub",{class:"pos-r t-0 f-12"},"条",-1))),T=D((()=>i("div",{class:"tj-img"},[i("img",{src:S})],-1))),V=D((()=>i("p",{class:"f-12 text-c mt-5"},"七日更新",-1))),P={class:"f-20 text-c"},G=D((()=>i("sub",{class:"pos-r t-0 f-12"},"条",-1))),H={class:"flex"},J={class:"bg-fff pd-20 radius-6 mb-20 flex chart align-c justify-center"},K=D((()=>i("div",{class:"bg-fff pd-20 radius-6 mb-20"},[i("div",{class:"mb-12 f-16 c-1d2129 fw-500"},"系统特色"),i("p",{class:"f-13 mb-6 c-4e5969"}," ChanCMS是一款基于Node、Express、MySQL、Vue3研发的高质量实用型CMS系统。轻量、灵活、稳定、高性能、易扩展，让开发更简单。 "),i("p",{class:"f-13 mb-6 c-4e5969"},[i("strong",{class:"mr-10"},"自研"),g("基于自研chanjs轻量级mvc框架实现，轻量、灵活、稳定、高性能、可持续。 ")]),i("p",{class:"f-13 mb-6 c-4e5969"},[i("strong",{class:"mr-10"},"SEO"),g("专注于seo,自定义导航，灵活设置关键词和描述。 ")]),i("p",{class:"f-13 mb-6 c-4e5969"},[i("strong",{class:"mr-10"},"安全"),g("基于knex,防注入，接口权限校验，为安全提供保障。 ")]),i("p",{class:"f-13 mb-6 c-4e5969"},[i("strong",{class:"mr-10"},"灵活"),g("碎片功能，支持零碎文案配置，方便各类灵活文案配置。 ")]),i("p",{class:"f-13 mb-6 c-4e5969"},[i("strong",{class:"mr-10"},"API"),g("为多端提供接口支持。 ")]),i("p",{class:"f-13 c-4e5969"},[i("strong",{class:"mr-10"},"插件化"),g("灵活开发，支持完整功能模块。 ")])],-1))),X={class:"bg-fff pd-20 radius-6 mb-20"},Y=D((()=>i("div",{class:"mb-12 f-16 c-1d2129 bold"},"技术架构",-1))),Z=D((()=>i("p",{class:"f-13 mb-6 c-4e5969"},[i("span",{class:"c-333"},"服务架构："),g("nodejs express mysql ")],-1))),ss=D((()=>i("p",{class:"f-13 mb-6"},[i("span",null,"前端架构："),g("vite vue3 element-plus")],-1))),as={class:"f-13 mb-6"},es=D((()=>i("span",null,"程序路径：",-1))),ls={class:"f-13 mb-6"},ts=D((()=>i("span",null,"程序版本：",-1))),cs={class:"f-13 mb-6"},ns=D((()=>i("span",null,"发布时间：",-1))),ds={class:"f-13 mb-6"},is=D((()=>i("span",null,"技术开发：",-1))),rs=D((()=>i("p",{class:"f-13 mb-6 row"},[i("span",null,"联系微信："),g("yanyutao2014")],-1))),os=D((()=>i("p",{class:"f-13 mb-6 row"},[i("span",null,"联系邮箱："),g("867528315@qq.com")],-1))),ms=D((()=>i("div",{class:"bg-fff pd-20 radius-6 mb-20"},[i("div",{class:"mb-12 f-16 c-1d2129 bold"},"技术服务"),i("p",{class:"f-13 mb-6 c-4e5969 flex-wrap flex justify-around"},[i("span",{class:"c-1d2129 col-12 mb-10"},"企业建站"),i("span",{class:"c-1d2129 col-12 mb-10"},"模板开发"),i("span",{class:"c-1d2129 col-12 mb-10"},"模板仿站"),i("span",{class:"c-1d2129 col-12 mb-10"},"模板定制"),i("span",{class:"c-1d2129 col-12"},"小程序开发"),i("span",{class:"c-1d2129 col-12"},"前端开发")])],-1)));s("default",c(k,[["render",function(s,a,t,c,d,f){const h=r("router-link"),y=w,v=e,b=l;return n(),o(b,{gutter:20},{default:m((()=>[u(v,{xs:24,sm:18,md:18,lg:18,xl:18},{default:m((()=>[i("div",L,[u(h,{class:"c-1d2129",to:"/article"},{default:m((()=>[i("div",z,[F,M,i("p",R,[g(p(s.data.article)+" ",1),q])])])),_:1}),u(h,{class:"c-1d2129",to:"/tag"},{default:m((()=>[i("div",A,[O,U,i("p",I,[g(p(s.data.tag)+" ",1),W])])])),_:1}),u(h,{class:"c-1d2129",to:"/message"},{default:m((()=>[i("div",null,[$,B,i("p",N,[g(p(s.data.message)+" ",1),Q])])])),_:1}),i("div",null,[T,V,i("p",P,[g(p(s.data.week)+" ",1),G])])]),i("div",H,[u(b,{gutter:20},{default:m((()=>[u(v,{xs:24,sm:12,md:12,lg:12,xl:12},{default:m((()=>[i("div",J,[u(y,{option:s.option},null,8,["option"])])])),_:1}),u(v,{xs:24,sm:12,md:12,lg:12,xl:12},{default:m((()=>[K])),_:1})])),_:1})])])),_:1}),u(v,{xs:24,sm:6,md:6,lg:6,xl:6},{default:m((()=>[i("div",X,[Y,Z,ss,i("p",as,[es,g(p(s.dirname),1)]),i("p",ls,[ts,g(p(s.data.version),1)]),i("p",cs,[ns,g(p(s.data.versionTime),1)]),i("p",ds,[is,g(p(s.data.author),1)]),rs,os]),ms])),_:1})])),_:1})}],["__scopeId","data-v-df201d47"]]))}}}));
