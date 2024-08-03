import{q as e,r as s,a,B as t,C as r,D as l,f as i,p as o}from"./element-plus.js";import{d as m,u as p}from"./slide.js";import{a as d}from"./upload.js";import{_ as u}from"./@qiun.js";import{r as n,o as c,c as j,g as f,Z as g,e as h,f as _,$ as y}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@element-plus.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./normalize-wheel-es.js";import"./index.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vanilla-jsoneditor.js";import"./json-source-map.js";import"./@fortawesome.js";import"./natural-compare-lite.js";import"./@codemirror.js";import"./@lezer.js";import"./crelt.js";import"./style-mod.js";import"./w3c-keyname.js";import"./@replit.js";import"./codemirror-wrapped-line-indent.js";import"./fast-deep-equal.js";import"./fast-uri.js";import"./jmespath.js";import"./immutable-json-patch.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */import"./sys_app.js";const w={class:"mr-10 ml-10 mb-20 pd-20 content-wrap"};const b=u({name:"slide-edit",data:()=>({params:{id:0,title:"",img_url:"",link_url:""}}),computed:{},mounted(){},async created(){this.params.id=this.$route.params.id,await this.detail()},methods:{async detail(){try{let e=await m(this.params.id);if(200===e.code){const{id:s,title:a,img_url:t,link_url:r}=e.data;this.params={id:s,title:a,img_url:t,link_url:r}}else this.$message({message:e.msg,type:"success"})}catch(e){console.error(e)}},handleAttr(e){console.log("e--\x3e",e)},handleSubCid(e){console.log("e--\x3e",e)},beforeUpload(e){return-1===e.type.indexOf("image")?(this.$message("上传文件只能是图片格式"),!1):e.size/1024/1024>.2?(this.$message("上传图片必须小于200k"),!1):void 0},async upload(e){let s=new FormData;s.append("file",e.file);let a=await d(s);200===a.code&&(this.params.img_url=a.data.path)},async update(){try{let e=await p(this.params);200==e.code?(this.$message({message:"更新成功^_^",type:"success"}),this.$router.go(-1)):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.update()}))}}},[["render",function(m,p,d,u,b,v){const k=e,V=s,$=n("MostlyCloudy"),x=a,q=t,U=r,z=l,C=i,D=o;return c(),j("div",w,[f(D,{ref:"params",model:m.params,"label-width":"84px",class:"mt-20"},{default:g((()=>[f(V,{label:"轮播标题",rules:[{required:!0,message:"请输入标题",trigger:"blur"}],prop:"title"},{default:g((()=>[f(k,{modelValue:m.params.title,"onUpdate:modelValue":p[0]||(p[0]=e=>m.params.title=e)},null,8,["modelValue"])])),_:1}),f(V,{class:"row",label:"轮播图"},{default:g((()=>[f(U,{class:"avatar-uploader","http-request":v.upload,"show-file-list":!1,"before-upload":v.beforeUpload},{default:g((()=>[f(q,{placement:"top-start",title:"上传",width:200,trigger:"hover",content:"上传图片作为封面图，大小200k内"},{reference:g((()=>[f(x,{class:"avatar-uploader-icon"},{default:g((()=>[f($)])),_:1})])),_:1})])),_:1},8,["http-request","before-upload"]),m.params.img_url?(c(),h(q,{key:0,placement:"right",width:600,trigger:"hover"},{reference:g((()=>[f(z,{class:"avatar-uploader-icon pointer ml-10",src:m.params.img_url},null,8,["src"])])),default:g((()=>[f(z,{style:{width:"100%"},src:m.params.img_url},null,8,["src"])])),_:1})):_("",!0),f(k,{class:"ml-10 flex-1",modelValue:m.params.img_url,"onUpdate:modelValue":p[1]||(p[1]=e=>m.params.img_url=e)},null,8,["modelValue"])])),_:1}),f(V,{label:"轮播链接"},{default:g((()=>[f(k,{modelValue:m.params.link_url,"onUpdate:modelValue":p[2]||(p[2]=e=>m.params.link_url=e)},null,8,["modelValue"])])),_:1}),f(V,null,{default:g((()=>[f(C,{type:"primary",onClick:p[3]||(p[3]=e=>v.submit("params"))},{default:g((()=>[y("保存")])),_:1})])),_:1})])),_:1},8,["model"])])}]]);export{b as default};
