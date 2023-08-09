import{q as e,r as a,N as l,O as s,f as t,p as d}from"./element-plus.js";import{d as o,u as m}from"./field.js";import{h as i}from"./model.js";import{_ as r}from"./index.js";import{o as u,c as p,U as n,W as f,F as c,aa as _,X as b,_ as h}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@element-plus.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./escape-html.js";import"./normalize-wheel-es.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const g={class:"mr-10 ml-10 mb-20"};const j=r({name:"field-edit",data:()=>({params:{id:"",model_id:"",table_name:"",field_cname:"",field_ename:"",field_type:"",field_values:"",field_default:"",field_sort:"0"},type:[{value:"1",label:"单行文本"},{value:"2",label:"多行文本 "},{value:"3",label:"下拉菜单"},{value:"4",label:"单选"},{value:"5",label:"多选 "},{value:"6",label:"时间和日期 "},{value:"7",label:"数字 "}],disable:!0,value:"",paramsRules:{field_cname:[{required:!0,message:"字段名称",trigger:"blur"},{min:2,max:80,message:"名称长度在 2 到 80 个字符之间",trigger:"blur"}],table_name:[{required:!0,message:"新增表名",trigger:"blur"},{min:2,max:80,message:"名称长度在 2 到 80 个字符之间",trigger:"blur"}]}}),computed:{},async mounted(){},async created(){console.log("this.$route.query",this.$route.query);const{model_name:e,fid:a,mid:l,table_name:s}=this.$route.query;this.params.id=a,this.params.model_id=l,this.params.table_name=s,this.model_name=e,await this.detail()},methods:{async hasUse(e){try{(await i(e)).data.has.length>0?this.disable=!0:this.disable=!1}catch(a){console.log(a)}},async detail(){try{let e=await o(this.params.id);if(200===e.code){let a=e.data;this.params=a,this.hasUse(a.model_id)}}catch(e){console.error(e)}},handleAttr(e){console.log("e--\x3e",e)},handleSubCid(e){console.log("e--\x3e",e)},handletag(e){console.log("e--\x3e",e)},handleBox(e){console.log("e--\x3e",e)},async update(){try{(await m(this.params)).code&&this.$message({message:"更新成功^_^",type:"success"}),this.$router.go(-1)}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.update()}))}}},[["render",function(o,m,i,r,j,y){const v=e,V=a,x=l,U=s,q=t,w=d;return u(),p("div",g,[n(w,{ref:"params",model:o.params,rules:o.paramsRules,"label-width":"100px",class:"mt-20"},{default:f((()=>[n(V,{label:"中文名称",prop:"field_cname"},{default:f((()=>[n(v,{modelValue:o.params.field_cname,"onUpdate:modelValue":m[0]||(m[0]=e=>o.params.field_cname=e)},null,8,["modelValue"])])),_:1}),n(V,{label:"英文名称",prop:"field_ename"},{default:f((()=>[n(v,{modelValue:o.params.field_ename,"onUpdate:modelValue":m[1]||(m[1]=e=>o.params.field_ename=e),disabled:o.disable},null,8,["modelValue","disabled"])])),_:1}),n(V,{label:"字段类型"},{default:f((()=>[n(U,{modelValue:o.params.field_type,"onUpdate:modelValue":m[2]||(m[2]=e=>o.params.field_type=e),disabled:o.disable,placeholder:"请选择"},{default:f((()=>[(u(!0),p(c,null,_(o.type,(e=>(u(),b(x,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue","disabled"])])),_:1}),n(V,{label:"字段选项"},{default:f((()=>[n(v,{modelValue:o.params.field_values,"onUpdate:modelValue":m[3]||(m[3]=e=>o.params.field_values=e)},null,8,["modelValue"])])),_:1}),n(V,{label:"默认值"},{default:f((()=>[n(v,{modelValue:o.params.field_default,"onUpdate:modelValue":m[4]||(m[4]=e=>o.params.field_default=e)},null,8,["modelValue"])])),_:1}),n(V,{label:"排序"},{default:f((()=>[n(v,{modelValue:o.params.field_sort,"onUpdate:modelValue":m[5]||(m[5]=e=>o.params.field_sort=e)},null,8,["modelValue"])])),_:1}),n(V,null,{default:f((()=>[n(q,{type:"primary",onClick:m[6]||(m[6]=e=>y.submit("params"))},{default:f((()=>[h("保存")])),_:1})])),_:1})])),_:1},8,["model","rules"])])}]]);export{j as default};
