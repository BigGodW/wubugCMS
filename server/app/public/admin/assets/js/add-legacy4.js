System.register(["./element-plus-legacy.js","./field-legacy.js","./@qiun-legacy.js","./@vue-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./@vueuse-legacy.js","./dayjs-legacy.js","./@element-plus-legacy.js","./@ctrl-legacy.js","./@popperjs-legacy.js","./memoize-one-legacy.js","./normalize-wheel-es-legacy.js","./index-legacy.js","./pinia-legacy.js","./pinia-plugin-persist-legacy.js","./vanilla-jsoneditor-legacy.js","./json-source-map-legacy.js","./@fortawesome-legacy.js","./natural-compare-lite-legacy.js","./@codemirror-legacy.js","./@lezer-legacy.js","./crelt-legacy.js","./style-mod-legacy.js","./w3c-keyname-legacy.js","./@replit-legacy.js","./codemirror-wrapped-line-indent-legacy.js","./fast-deep-equal-legacy.js","./fast-uri-legacy.js","./jmespath-legacy.js","./immutable-json-patch-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./js-cookie-legacy.js","./saduocss-legacy.js"],(function(e,l){"use strict";var a,s,u,t,n,d,r,m,o,i,c,p,g,f,y,_,j;return{setters:[e=>{a=e.q,s=e.r,u=e.H,t=e.I,n=e.f,d=e.p},e=>{r=e.c},e=>{m=e._},e=>{o=e.o,i=e.c,c=e.g,p=e.Z,g=e.X,f=e.aa,y=e.e,_=e.$,j=e.a},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const l={name:"field-add",components:{},data:()=>({params:{model_id:"",field_cname:"",field_ename:"",field_type:"",field_values:"",field_default:"",field_length:"",field_sort:"0"},type:[{value:"1",label:"单行文本"},{value:"2",label:"多行文本 "},{value:"3",label:"下拉菜单"},{value:"4",label:"单选"},{value:"5",label:"多选 "},{value:"6",label:"时间和日期 "},{value:"7",label:"数字 "},{value:"8",label:"多图上传 "},{value:"9",label:"富文本 "}],value:"",paramsRules:{field_cname:[{required:!0,message:"字段名称",trigger:"blur"},{min:2,max:80,message:"名称长度在 2 到 80 个字符之间",trigger:"blur"}],table_name:[{required:!0,message:"新增表名",trigger:"blur"},{min:2,max:80,message:"名称长度在 2 到 80 个字符之间",trigger:"blur"}],field_length:[{required:!0,message:"字段长度",trigger:"blur"}]}}),computed:{},mounted(){},async created(){const{model_name:e,mid:l,table_name:a}=this.$route.query;this.params.model_id=l,this.params.table_name=a,this.model_name=e},methods:{handleAttr(e){console.log("e--\x3e",e)},async create(){try{let e=await r(this.params);200==e.code?(this.$message({message:"新增成功^_^",type:"success"}),this.$router.go(-1)):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.create()}))}}},b={class:"mr-10 ml-10 mb-20 bg-fff pd-20"},v=j("p",{class:"f-12 c-999"},'例如：{"options":[{"label":"本地下载","value":"1"},{"label":"电信下载","value":"2"}]}',-1);e("default",m(l,[["render",function(e,l,r,m,j,h){const V=a,x=s,q=u,w=t,U=n,$=d;return o(),i("div",b,[c($,{ref:"params",model:e.params,rules:e.paramsRules,"label-width":"100px",class:"mt-20"},{default:p((()=>[c(x,{label:"字段备注",prop:"field_cname"},{default:p((()=>[c(V,{modelValue:e.params.field_cname,"onUpdate:modelValue":l[0]||(l[0]=l=>e.params.field_cname=l)},null,8,["modelValue"])])),_:1}),c(x,{label:"字段名称",prop:"field_ename"},{default:p((()=>[c(V,{modelValue:e.params.field_ename,"onUpdate:modelValue":l[1]||(l[1]=l=>e.params.field_ename=l)},null,8,["modelValue"])])),_:1}),c(x,{label:"字段类型"},{default:p((()=>[c(w,{modelValue:e.params.field_type,"onUpdate:modelValue":l[2]||(l[2]=l=>e.params.field_type=l),placeholder:"请选择"},{default:p((()=>[(o(!0),i(g,null,f(e.type,(e=>(o(),y(q,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),c(x,{label:"字段选项"},{default:p((()=>[c(V,{modelValue:e.params.field_default,"onUpdate:modelValue":l[3]||(l[3]=l=>e.params.field_default=l),rows:2,type:"textarea",placeholder:"单选、多选、下拉框，请填写json格式。"},null,8,["modelValue"]),v])),_:1}),c(x,{label:"默认值"},{default:p((()=>[c(V,{modelValue:e.params.field_values,"onUpdate:modelValue":l[4]||(l[4]=l=>e.params.field_values=l)},null,8,["modelValue"])])),_:1}),c(x,{label:"排序"},{default:p((()=>[c(V,{modelValue:e.params.field_sort,"onUpdate:modelValue":l[5]||(l[5]=l=>e.params.field_sort=l)},null,8,["modelValue"])])),_:1}),c(x,{label:"字段长度"},{default:p((()=>[c(V,{modelValue:e.params.field_length,"onUpdate:modelValue":l[6]||(l[6]=l=>e.params.field_length=l)},null,8,["modelValue"])])),_:1}),c(x,null,{default:p((()=>[c(U,{type:"primary",onClick:l[7]||(l[7]=e=>h.submit("params"))},{default:p((()=>[_("保存")])),_:1})])),_:1})])),_:1},8,["model","rules"])])}]]))}}}));
