import{d as e,o as a,p as s,q as o,r as t,s as r,t as l,f as i}from"./element-plus.js";import{h as n,A as p,_ as c,a as m,u,g as d,s as g}from"./index.js";import{L as h,o as f,c as j,a as w,U as y,_,W as v,ai as F,az as b,aA as C}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@element-plus.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./escape-html.js";import"./normalize-wheel-es.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const V=h({components:{IconLogo:m},data:()=>({loginForm:{username:"",password:"",captcha:""},captcha:""}),created(){this.getCaptcha()},methods:{async getCaptcha(){try{let a=Math.random().toString().slice(4,8),s=await(e=a,n({url:"".concat(p.BASE_API,"/api/captcha?v=").concat(e),method:"get"}));this.captcha=s}catch(a){console.log(a)}var e},async login(){const s=u();this.$refs.loginForm.validate((o=>{if(!o)return!1;{if(console.log(),this.loginForm.captcha.toLowerCase()!==d("captcha").toLowerCase())return e({message:"验证码错误",type:"warning"}),!1;const{username:o,password:t}=this.loginForm;s.login({username:o,password:t}).then((e=>{if(500==e.code)return a({title:"提示",message:"登录失败",type:"error"}),!1;a({title:"提示",message:"登录成功",duration:800,type:"success"}),g("username",o),this.$router.push({path:this.$route.query.redirect||"/"})}))}}))}}}),k={class:"page"},L={class:"login"},q={class:"title row align-c"},x={class:"login-cont"},z=["innerHTML"],A=(e=>(b("data-v-53c2dde0"),e=e(),C(),e))((()=>w("footer",{class:"login-footer overflow-h"},[w("p",{class:"f-13 text-c mt-10 c-fff"},[_(" © "),w("a",{href:"http://www.chanyue.top",class:"mr-5 c-fff",target:"_blank",title:"chanyue"},"www.chanyue.top"),_(" 禅悦系统 ● 位于南京 服务全国 ")])],-1)));const U=c(V,[["render",function(e,a,n,p,c,u){const d=m,g=o,h=t,b=r,C=l,V=i,U=s;return f(),j("div",k,[w("div",L,[w("h1",q,[y(d,{class:"icon"}),_(" 禅悦后台管理系统 ")]),w("div",x,[y(U,{class:"mt-20",ref:"loginForm",model:e.loginForm,"label-width":"70px",onKeyup:F(e.login,["enter"])},{default:v((()=>[y(h,{label:"用户名",prop:"username",rules:[{required:!0,message:"请输入用户名",trigger:"blur"}]},{default:v((()=>[y(g,{modelValue:e.loginForm.username,"onUpdate:modelValue":a[0]||(a[0]=a=>e.loginForm.username=a)},null,8,["modelValue"])])),_:1}),y(h,{label:"密码",prop:"password",rules:[{required:!0,message:"请输入密码",trigger:"blur"}]},{default:v((()=>[y(g,{type:"password",modelValue:e.loginForm.password,"onUpdate:modelValue":a[1]||(a[1]=a=>e.loginForm.password=a)},null,8,["modelValue"])])),_:1}),y(h,{label:"验证码",prop:"captcha",rules:[{required:!0,message:"请输入验证码",trigger:"blur"}]},{default:v((()=>[y(C,{gutter:20},{default:v((()=>[y(b,{span:15},{default:v((()=>[y(g,{modelValue:e.loginForm.captcha,"onUpdate:modelValue":a[2]||(a[2]=a=>e.loginForm.captcha=a),placeholder:"请输入验证码"},null,8,["modelValue"])])),_:1}),y(b,{span:4},{default:v((()=>[w("span",{class:"captcha block pointer",innerHTML:e.captcha,onClick:a[3]||(a[3]=(...a)=>e.getCaptcha&&e.getCaptcha(...a))},null,8,z)])),_:1})])),_:1})])),_:1}),y(h,null,{default:v((()=>[y(V,{type:"primary",size:"large",onClick:e.login},{default:v((()=>[_(" 登录 ")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model","onKeyup"])])]),A])}],["__scopeId","data-v-53c2dde0"]]);export{U as default};
