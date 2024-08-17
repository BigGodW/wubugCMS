System.register(["./element-plus-legacy.js","./sys_app-legacy.js","./category-legacy.js","./index-legacy.js","./model-legacy.js","./pinyin-pro-legacy.js","./@vue-legacy.js","./@qiun-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./@vueuse-legacy.js","./dayjs-legacy.js","./@element-plus-legacy.js","./@ctrl-legacy.js","./@popperjs-legacy.js","./memoize-one-legacy.js","./normalize-wheel-es-legacy.js","./pinia-legacy.js","./pinia-plugin-persist-legacy.js","./vanilla-jsoneditor-legacy.js","./json-source-map-legacy.js","./@fortawesome-legacy.js","./natural-compare-lite-legacy.js","./@codemirror-legacy.js","./@lezer-legacy.js","./crelt-legacy.js","./style-mod-legacy.js","./w3c-keyname-legacy.js","./@replit-legacy.js","./codemirror-wrapped-line-indent-legacy.js","./fast-deep-equal-legacy.js","./fast-uri-legacy.js","./jmespath-legacy.js","./immutable-json-patch-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./js-cookie-legacy.js","./saduocss-legacy.js"],(function(e,l){"use strict";var a,t,s,o,u,d,n,r,i,m,c,p,y,g,h,V,v,f,_,j,b,w,U,S,P,k,C,x,q,I,L;return{setters:[e=>{a=e.s,t=e.t,s=e.u,o=e.r,u=e.q,d=e.H,n=e.I,r=e.G,i=e.P,m=e.f,c=e.p},e=>{p=e.v},e=>{y=e.f,g=e.c},e=>{h=e.a,V=e.t},e=>{v=e.l},e=>{f=e.p},e=>{_=e.o,j=e.c,b=e.a,w=e.g,U=e.Z,S=e.w,P=e.X,k=e.ab,C=e.e,x=e.$,q=e.v,I=e.t},e=>{L=e._},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const l={class:"content-wrap"},$={class:"mr-10 ml-10"},z={class:"mr-10 ml-10 mb-20"};e("default",L({name:"category-add",data:()=>({categorySelected:[],categorySelectedPath:"",categoryProps:{checkStrictly:!0},activeName:"first",activeIndex:"0",category:[],modList:[],views:[],params:{pid:0,seo_title:"",seo_keywords:"",seo_description:"",name:"",path:"",pinyin:"",mid:"0",description:"",url:"",sort:0,type:"0",target:"0",status:"0",article_view:"article.html",list_view:"list.html"}}),created(){this.query(),this.getviews(),this.modelList()},methods:{createPinyin(e){this.params.pinyin=f(e,{toneType:"none"}).replace(/\s+/g,""),this.params.path=this.categorySelectedPath?this.categorySelectedPath+this.params.pinyin:"/"+this.categorySelectedPath+this.params.pinyin},changePath(e){this.params.path=this.categorySelectedPath?this.categorySelectedPath+e:"/"+this.categorySelectedPath+e},handleClick(e){this.activeIndex=e.index},async query(){try{let e=await y();if(200===e.code){let l=h(V(e.data));this.cate=e.data,this.category=[...l]}}catch(e){console.log(e)}},async getviews(){try{let e=await p();200===e.code&&(this.views=e.data.filter((e=>{if("404.html"!==e&&"500.html"!==e)return!0})).map((e=>({label:e,value:e}))))}catch(e){console.log(e)}},handleChange(e){let l=[];Object.values(e).forEach((e=>{this.cate.forEach((a=>{a.id==e&&l.push("/"+a.pinyin)}))})),this.categorySelectedPath=l.join("")+"/",this.params.path=this.categorySelectedPath+this.params.pinyin,-1!=e[0]&&(this.params.pid=e[e.length-1])},async modelList(){try{let e=await v(this.cur);200===e.code&&(this.modList=e.data.list)}catch(e){console.log(e)}},async categoryAdd(){try{let e=await g(this.params);200==e.code?(this.$message({message:"更新成功^_^",type:"success"}),this.$router.go(-1)):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.categoryAdd()}))}}},[["render",function(e,p,y,g,h,V){const v=a,f=t,L=s,E=o,N=u,T=d,A=n,O=r,G=i,H=m,X=c;return _(),j("div",l,[b("div",$,[w(f,{modelValue:e.activeName,"onUpdate:modelValue":p[0]||(p[0]=l=>e.activeName=l),onTabClick:V.handleClick},{default:U((()=>[w(v,{label:"基本信息",name:"first"}),w(v,{label:"SEO设置",name:"second"})])),_:1},8,["modelValue","onTabClick"])]),b("div",z,[w(X,{ref:"params",model:e.params,"label-width":"84px"},{default:U((()=>[S(b("div",null,[w(E,{label:"上级栏目"},{default:U((()=>[w(L,{props:e.categoryProps,"show-all-levels":!1,modelValue:e.categorySelected,"onUpdate:modelValue":p[1]||(p[1]=l=>e.categorySelected=l),options:e.category,onChange:V.handleChange,placeholder:"不选择为顶级栏目"},null,8,["props","modelValue","options","onChange"])])),_:1}),w(E,{label:"栏目名称",prop:"name",rules:[{required:!0,message:"请输入栏目名称",trigger:"blur"},{min:1,max:50,message:"栏目不能超过50个字",trigger:"blur"}]},{default:U((()=>[w(N,{modelValue:e.params.name,"onUpdate:modelValue":p[2]||(p[2]=l=>e.params.name=l),onChange:V.createPinyin},null,8,["modelValue","onChange"])])),_:1}),w(E,{label:"栏目标识"},{default:U((()=>[w(N,{modelValue:e.params.pinyin,"onUpdate:modelValue":p[3]||(p[3]=l=>e.params.pinyin=l),onChange:V.changePath,placeholder:"注：首页请填写home"},null,8,["modelValue","onChange"])])),_:1}),w(E,{label:"栏目路径"},{default:U((()=>[w(N,{modelValue:e.params.path,"onUpdate:modelValue":p[4]||(p[4]=l=>e.params.path=l),disabled:""},null,8,["modelValue"])])),_:1}),w(E,{label:"列表模板"},{default:U((()=>[w(A,{modelValue:e.params.list_view,"onUpdate:modelValue":p[5]||(p[5]=l=>e.params.list_view=l),placeholder:"Select"},{default:U((()=>[(_(!0),j(P,null,k(e.views,(e=>(_(),C(T,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),w(E,{label:"内容模板"},{default:U((()=>[w(A,{modelValue:e.params.article_view,"onUpdate:modelValue":p[6]||(p[6]=l=>e.params.article_view=l),placeholder:"Select"},{default:U((()=>[(_(!0),j(P,null,k(e.views,(e=>(_(),C(T,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),w(E,{label:"栏目类型"},{default:U((()=>[w(O,{modelValue:e.params.type,"onUpdate:modelValue":p[7]||(p[7]=l=>e.params.type=l),value:"0"},{default:U((()=>[x("栏目")])),_:1},8,["modelValue"]),w(O,{modelValue:e.params.type,"onUpdate:modelValue":p[8]||(p[8]=l=>e.params.type=l),value:"1"},{default:U((()=>[x("单页")])),_:1},8,["modelValue"])])),_:1}),w(E,{label:"是否显示"},{default:U((()=>[w(O,{modelValue:e.params.status,"onUpdate:modelValue":p[9]||(p[9]=l=>e.params.status=l),value:"0"},{default:U((()=>[x("显示")])),_:1},8,["modelValue"]),w(O,{modelValue:e.params.status,"onUpdate:modelValue":p[10]||(p[10]=l=>e.params.status=l),value:"1"},{default:U((()=>[x("隐藏")])),_:1},8,["modelValue"])])),_:1})],512),[[q,0==e.activeIndex]]),S(b("div",null,[w(E,{label:"栏目描述"},{default:U((()=>[w(N,{modelValue:e.params.description,"onUpdate:modelValue":p[11]||(p[11]=l=>e.params.description=l)},null,8,["modelValue"])])),_:1}),w(E,{label:"栏目链接"},{default:U((()=>[w(N,{modelValue:e.params.url,"onUpdate:modelValue":p[12]||(p[12]=l=>e.params.url=l)},null,8,["modelValue"])])),_:1}),w(E,{label:"扩展模型"},{default:U((()=>[w(G,{modelValue:e.params.mid,"onUpdate:modelValue":p[13]||(p[13]=l=>e.params.mid=l)},{default:U((()=>[w(O,{value:"0"},{default:U((()=>[x("基本模型")])),_:1}),(_(!0),j(P,null,k(e.modList,((e,l)=>(_(),C(O,{key:l,value:e.id},{default:U((()=>[x(I(e.model_name),1)])),_:2},1032,["value"])))),128))])),_:1},8,["modelValue"])])),_:1}),w(E,{label:"打开方式"},{default:U((()=>[w(O,{modelValue:e.params.target,"onUpdate:modelValue":p[14]||(p[14]=l=>e.params.target=l),value:"0"},{default:U((()=>[x("当前页面")])),_:1},8,["modelValue"]),w(O,{modelValue:e.params.target,"onUpdate:modelValue":p[15]||(p[15]=l=>e.params.target=l),value:"1"},{default:U((()=>[x("新页面")])),_:1},8,["modelValue"])])),_:1}),w(E,{label:"栏目排序"},{default:U((()=>[w(N,{modelValue:e.params.sort,"onUpdate:modelValue":p[16]||(p[16]=l=>e.params.sort=l)},null,8,["modelValue"])])),_:1}),w(E,{label:"seo标题"},{default:U((()=>[w(N,{modelValue:e.params.seo_title,"onUpdate:modelValue":p[17]||(p[17]=l=>e.params.seo_title=l)},null,8,["modelValue"])])),_:1}),w(E,{label:"seo关键词"},{default:U((()=>[w(N,{modelValue:e.params.seo_keywords,"onUpdate:modelValue":p[18]||(p[18]=l=>e.params.seo_keywords=l)},null,8,["modelValue"])])),_:1}),w(E,{label:"seo描述"},{default:U((()=>[w(N,{modelValue:e.params.seo_description,"onUpdate:modelValue":p[19]||(p[19]=l=>e.params.seo_description=l)},null,8,["modelValue"])])),_:1})],512),[[q,1==e.activeIndex]]),w(E,null,{default:U((()=>[w(H,{type:"primary",onClick:p[20]||(p[20]=e=>V.submit("params"))},{default:U((()=>[x("保存")])),_:1})])),_:1})])),_:1},8,["model"])])])}]]))}}}));
