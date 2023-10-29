System.register(["./element-plus-legacy.js","./sys_app-legacy.js","./category-legacy.js","./article-legacy.js","./index-legacy.js","./model-legacy.js","./pinyin-pro-legacy.js","./@vue-legacy.js","./@qiun-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./@vueuse-legacy.js","./dayjs-legacy.js","./@element-plus-legacy.js","./@ctrl-legacy.js","./@popperjs-legacy.js","./memoize-one-legacy.js","./escape-html-legacy.js","./normalize-wheel-es-legacy.js","./pinia-legacy.js","./pinia-plugin-persist-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./js-cookie-legacy.js","./saduocss-legacy.js"],(function(e,a){"use strict";var l,t,s,o,d,i,u,n,r,m,c,p,h,g,y,V,f,_,b,v,j,w,S,U,k,P,C,x,I,L,q,F,$,E,N,A,B,O;return{setters:[e=>{l=e.A,t=e.B,s=e.C,o=e.r,d=e.q,i=e.M,u=e.N,n=e.v,r=e.O,m=e.a,c=e.g,p=e.f,h=e.p},e=>{g=e.v},e=>{y=e.f,V=e.a,f=e.u},e=>{_=e.s},e=>{b=e.d,v=e.a,j=e.t},e=>{w=e.l},e=>{S=e.p},e=>{U=e.j,k=e.o,P=e.c,C=e.a,x=e.l,I=e.a1,L=e.m,q=e.k,F=e.h,$=e.F,E=e.ad,N=e.a3,A=e.v,B=e.t},e=>{O=e._},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const a={class:"content-wrap"},T={class:"mr-10 ml-10"},z={class:"mr-10 ml-10 mb-20"};e("default",O({name:"category-edit",data:()=>({id:0,categorySelected:[],categorySelectedPath:"",categoryProps:{checkStrictly:!0},activeName:"first",activeIndex:"0",cate:[],category:[],modList:[],modelFlag:!1,views:[],params:{pid:0,seo_title:"",seo_keywords:"",seo_description:"",name:"",path:"",pinyin:"",mid:"0",description:"",url:"",sort:0,type:"0",target:"0",status:"0",article_view:"",list_view:""}}),computed:{},created(){this.id=this.$route.params.id,this.modelList(),this.query(),this.findById(),this.hasArticle(),this.getviews()},methods:{createPinyin(e){this.params.pinyin=S(e,{toneType:"none"}).replace(/\s+/g,""),this.params.path=this.categorySelectedPath?this.categorySelectedPath+this.params.pinyin:"/"+this.categorySelectedPath+this.params.pinyin},changePath(e){this.params.path=this.categorySelectedPath?this.categorySelectedPath+e:"/"+this.categorySelectedPath+e},handleClick(e){this.activeIndex=e.index},async hasArticle(){try{let e=await _(1,"",this.id);console.log("has1111111",e),200==e.code&&(this.modelFlag=e.data.count>0)}catch(e){console.log(e)}},async query(){try{let e=await y();if(200===e.code){let a=e.data;this.cate=e.data;let l=b(this.id,a);l.length>1&&(l.length=l.length-1),console.log(l),this.categorySelected=l;let t=v(j(a));this.category=[...t]}}catch(e){console.log(e)}},async getviews(){try{let e=await g();200===e.code&&(this.views=e.data.filter((e=>{if("404.html"!==e&&"500.html"!==e)return!0})).map((e=>({label:e,value:e}))))}catch(e){console.log(e)}},async modelList(){try{let e=await w(this.cur);200===e.code&&(this.modList=e.data.list.map((e=>(e.id=e.id.toString(),e))))}catch(e){console.log(e)}},async findById(){try{let e=await V(this.id);if(200===e.code){this.params=e.data;let a=[];this.cate.forEach((l=>{l.id==e.data.pid&&a.push("/"+l.pinyin)})),this.categorySelectedPath=a.join("")+"/"}}catch(e){console.error(e)}},handleChange(e){let a=[];Object.values(e).forEach((e=>{this.cate.forEach((l=>{l.id==e&&a.push("/"+l.pinyin)}))})),this.categorySelectedPath=a.join("")+"/",this.params.path=this.categorySelectedPath+this.params.pinyin,-1!=e[0]&&(this.params.pid=e[e.length-1])},async update(){try{let e=await f(this.params);e.code?(this.$message({message:"更新成功^_^",type:"success"}),this.$router.go(-1)):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.update()}))}}},[["render",function(e,g,y,V,f,_){const b=l,v=t,j=s,w=o,S=d,O=i,M=u,Q=n,D=r,G=U("QuestionFilled"),H=m,J=c,K=p,R=h;return k(),P("div",a,[C("div",T,[x(v,{modelValue:e.activeName,"onUpdate:modelValue":g[0]||(g[0]=a=>e.activeName=a),onTabClick:_.handleClick},{default:I((()=>[x(b,{label:"基本信息",name:"first"}),x(b,{label:"SEO设置",name:"second"})])),_:1},8,["modelValue","onTabClick"])]),C("div",z,[x(R,{ref:"params",model:e.params,"label-width":"84px",class:"w640"},{default:I((()=>[L(C("div",null,[0!=e.params.pid?(k(),q(w,{key:0,label:"上级栏目"},{default:I((()=>[x(j,{props:e.categoryProps,"show-all-levels":!1,modelValue:e.categorySelected,"onUpdate:modelValue":g[1]||(g[1]=a=>e.categorySelected=a),options:e.category,onChange:_.handleChange,placeholder:"不选择为顶级栏目"},null,8,["props","modelValue","options","onChange"])])),_:1})):F("",!0),x(w,{label:"栏目名称",prop:"name",rules:[{required:!0,message:"请输入栏目名称",trigger:"blur"},{min:1,max:50,message:"栏目不能超过50个字",trigger:"blur"}]},{default:I((()=>[x(S,{modelValue:e.params.name,"onUpdate:modelValue":g[2]||(g[2]=a=>e.params.name=a),onChange:_.createPinyin},null,8,["modelValue","onChange"])])),_:1}),x(w,{label:"栏目标识"},{default:I((()=>[x(S,{modelValue:e.params.pinyin,"onUpdate:modelValue":g[3]||(g[3]=a=>e.params.pinyin=a),onChange:_.changePath},null,8,["modelValue","onChange"])])),_:1}),x(w,{label:"栏目路径"},{default:I((()=>[x(S,{modelValue:e.params.path,"onUpdate:modelValue":g[4]||(g[4]=a=>e.params.path=a),disabled:""},null,8,["modelValue"])])),_:1}),x(w,{label:"列表模板"},{default:I((()=>[x(M,{modelValue:e.params.list_view,"onUpdate:modelValue":g[5]||(g[5]=a=>e.params.list_view=a),placeholder:"Select"},{default:I((()=>[(k(!0),P($,null,E(e.views,(e=>(k(),q(O,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),x(w,{label:"内容模板"},{default:I((()=>[x(M,{modelValue:e.params.article_view,"onUpdate:modelValue":g[6]||(g[6]=a=>e.params.article_view=a),placeholder:"Select"},{default:I((()=>[(k(!0),P($,null,E(e.views,(e=>(k(),q(O,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),x(w,{label:"栏目类型"},{default:I((()=>[x(Q,{modelValue:e.params.type,"onUpdate:modelValue":g[7]||(g[7]=a=>e.params.type=a),label:"0"},{default:I((()=>[N("栏目")])),_:1},8,["modelValue"]),x(Q,{modelValue:e.params.type,"onUpdate:modelValue":g[8]||(g[8]=a=>e.params.type=a),label:"1"},{default:I((()=>[N("单页")])),_:1},8,["modelValue"])])),_:1}),x(w,{label:"是否显示"},{default:I((()=>[x(Q,{modelValue:e.params.status,"onUpdate:modelValue":g[9]||(g[9]=a=>e.params.status=a),label:"0"},{default:I((()=>[N("显示")])),_:1},8,["modelValue"]),x(Q,{modelValue:e.params.status,"onUpdate:modelValue":g[10]||(g[10]=a=>e.params.status=a),label:"1"},{default:I((()=>[N("隐藏")])),_:1},8,["modelValue"])])),_:1})],512),[[A,0==e.activeIndex]]),L(C("div",null,[x(w,{label:"栏目描述"},{default:I((()=>[x(S,{modelValue:e.params.description,"onUpdate:modelValue":g[11]||(g[11]=a=>e.params.description=a)},null,8,["modelValue"])])),_:1}),x(w,{label:"栏目链接"},{default:I((()=>[x(S,{modelValue:e.params.url,"onUpdate:modelValue":g[12]||(g[12]=a=>e.params.url=a)},null,8,["modelValue"])])),_:1}),x(w,{label:"扩展模型"},{default:I((()=>[x(D,{modelValue:e.params.mid,"onUpdate:modelValue":g[13]||(g[13]=a=>e.params.mid=a)},{default:I((()=>[x(Q,{label:"0"},{default:I((()=>[N("基本模型")])),_:1}),e.modList.length>0?(k(!0),P($,{key:0},E(e.modList,((a,l)=>(k(),q(Q,{disabled:e.modelFlag,key:l,label:a.id},{default:I((()=>[N(B(a.model_name)+"模型 ",1)])),_:2},1032,["disabled","label"])))),128)):F("",!0)])),_:1},8,["modelValue"]),x(J,{content:"如果栏目已经存在文章，则不能更换模型",effect:"light",placement:"top-start"},{default:I((()=>[x(H,{class:"ml-20 pointer"},{default:I((()=>[x(G,{class:"c-165dff"})])),_:1})])),_:1})])),_:1}),x(w,{label:"打开方式"},{default:I((()=>[x(Q,{modelValue:e.params.target,"onUpdate:modelValue":g[14]||(g[14]=a=>e.params.target=a),label:"0"},{default:I((()=>[N("当前页面")])),_:1},8,["modelValue"]),x(Q,{modelValue:e.params.target,"onUpdate:modelValue":g[15]||(g[15]=a=>e.params.target=a),label:"1"},{default:I((()=>[N("新页面")])),_:1},8,["modelValue"])])),_:1}),x(w,{label:"栏目排序"},{default:I((()=>[x(S,{modelValue:e.params.sort,"onUpdate:modelValue":g[16]||(g[16]=a=>e.params.sort=a)},null,8,["modelValue"])])),_:1}),x(w,{label:"seo标题"},{default:I((()=>[x(S,{modelValue:e.params.seo_title,"onUpdate:modelValue":g[17]||(g[17]=a=>e.params.seo_title=a)},null,8,["modelValue"])])),_:1}),x(w,{label:"seo关键词"},{default:I((()=>[x(S,{modelValue:e.params.seo_keywords,"onUpdate:modelValue":g[18]||(g[18]=a=>e.params.seo_keywords=a)},null,8,["modelValue"])])),_:1}),x(w,{label:"seo描述"},{default:I((()=>[x(S,{modelValue:e.params.seo_description,"onUpdate:modelValue":g[19]||(g[19]=a=>e.params.seo_description=a)},null,8,["modelValue"])])),_:1})],512),[[A,1==e.activeIndex]]),x(w,null,{default:I((()=>[x(K,{type:"primary",onClick:g[20]||(g[20]=e=>_.submit("params"))},{default:I((()=>[N("保存")])),_:1})])),_:1})])),_:1},8,["model"])])])}]]))}}}));
