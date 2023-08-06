System.register(["./element-plus-legacy.js","./field-legacy.js","./model-legacy.js","./index-legacy.js","./@vue-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./@vueuse-legacy.js","./dayjs-legacy.js","./@element-plus-legacy.js","./@ctrl-legacy.js","./@popperjs-legacy.js","./memoize-one-legacy.js","./escape-html-legacy.js","./normalize-wheel-es-legacy.js","./pinia-legacy.js","./pinia-plugin-persist-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./js-cookie-legacy.js","./saduocss-legacy.js"],(function(e,l){"use strict";var a,s,d,t,u,i,o,m,r,n,c,p,g,f,y,_,b,h;return{setters:[e=>{a=e.q,s=e.r,d=e.N,t=e.O,u=e.f,i=e.p},e=>{o=e.d,m=e.u},e=>{r=e.h},e=>{n=e._},e=>{c=e.o,p=e.c,g=e.U,f=e.W,y=e.F,_=e.aa,b=e.X,h=e._},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const l={class:"mr-10 ml-10 mb-20"};e("default",n({name:"field-edit",data:()=>({params:{id:"",model_id:"",table_name:"",field_cname:"",field_ename:"",field_type:"",field_values:"",field_default:"",field_sort:"0"},type:[{value:"1",label:"单行文本"},{value:"2",label:"多行文本 "},{value:"3",label:"下拉菜单"},{value:"4",label:"单选"},{value:"5",label:"多选 "},{value:"6",label:"时间和日期 "},{value:"7",label:"数字 "}],disable:!0,value:"",paramsRules:{field_cname:[{required:!0,message:"字段名称",trigger:"blur"},{min:2,max:80,message:"名称长度在 2 到 80 个字符之间",trigger:"blur"}],table_name:[{required:!0,message:"新增表名",trigger:"blur"},{min:2,max:80,message:"名称长度在 2 到 80 个字符之间",trigger:"blur"}]}}),computed:{},async mounted(){},async created(){console.log("this.$route.query",this.$route.query);const{model_name:e,fid:l,mid:a,table_name:s}=this.$route.query;this.params.id=l,this.params.model_id=a,this.params.table_name=s,this.model_name=e,await this.detail()},methods:{async hasUse(e){try{(await r(e)).data.has.length>0?this.disable=!0:this.disable=!1}catch(l){console.log(l)}},async detail(){try{let e=await o(this.params.id);if(200===e.code){let l=e.data;this.params=l,this.hasUse(l.model_id)}}catch(e){console.error(e)}},handleAttr(e){console.log("e--\x3e",e)},handleSubCid(e){console.log("e--\x3e",e)},handletag(e){console.log("e--\x3e",e)},handleBox(e){console.log("e--\x3e",e)},async update(){try{(await m(this.params)).code&&this.$message({message:"更新成功^_^",type:"success"}),this.$router.go(-1)}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.update()}))}}},[["render",function(e,o,m,r,n,j){const v=a,V=s,x=d,U=t,q=u,w=i;return c(),p("div",l,[g(w,{ref:"params",model:e.params,rules:e.paramsRules,"label-width":"100px",class:"mt-20"},{default:f((()=>[g(V,{label:"中文名称",prop:"field_cname"},{default:f((()=>[g(v,{modelValue:e.params.field_cname,"onUpdate:modelValue":o[0]||(o[0]=l=>e.params.field_cname=l)},null,8,["modelValue"])])),_:1}),g(V,{label:"英文名称",prop:"field_ename"},{default:f((()=>[g(v,{modelValue:e.params.field_ename,"onUpdate:modelValue":o[1]||(o[1]=l=>e.params.field_ename=l),disabled:e.disable},null,8,["modelValue","disabled"])])),_:1}),g(V,{label:"字段类型"},{default:f((()=>[g(U,{modelValue:e.params.field_type,"onUpdate:modelValue":o[2]||(o[2]=l=>e.params.field_type=l),disabled:e.disable,placeholder:"请选择"},{default:f((()=>[(c(!0),p(y,null,_(e.type,(e=>(c(),b(x,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue","disabled"])])),_:1}),g(V,{label:"字段选项"},{default:f((()=>[g(v,{modelValue:e.params.field_values,"onUpdate:modelValue":o[3]||(o[3]=l=>e.params.field_values=l)},null,8,["modelValue"])])),_:1}),g(V,{label:"默认值"},{default:f((()=>[g(v,{modelValue:e.params.field_default,"onUpdate:modelValue":o[4]||(o[4]=l=>e.params.field_default=l)},null,8,["modelValue"])])),_:1}),g(V,{label:"排序"},{default:f((()=>[g(v,{modelValue:e.params.field_sort,"onUpdate:modelValue":o[5]||(o[5]=l=>e.params.field_sort=l)},null,8,["modelValue"])])),_:1}),g(V,null,{default:f((()=>[g(q,{type:"primary",onClick:o[6]||(o[6]=e=>j.submit("params"))},{default:f((()=>[h("保存")])),_:1})])),_:1})])),_:1},8,["model","rules"])])}]]))}}}));
//# sourceMappingURL=edit-legacy4.js.map
