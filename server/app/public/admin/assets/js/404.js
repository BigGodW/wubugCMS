import{f as o}from"./element-plus.js";import{u as s}from"./index.js";import{_ as i}from"./@qiun.js";import{o as r,c as t,g as e,Z as m,a as p,$ as a}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@element-plus.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./normalize-wheel-es.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const l={methods:{logout(){s().logout(),location.reload()},goHome(){this.$router.replace({path:"/home"})}}},n={class:"fourZeroFour"},u=p("h1",null,"找不到了页面或者权限不足😭",-1),j=p("br",null,null,-1);const c=i(l,[["render",function(s,i,p,l,c,d){const f=o;return r(),t("div",n,[u,j,e(f,{size:"mini",onClick:d.goHome,type:"primary"},{default:m((()=>[a("去首页")])),_:1},8,["onClick"]),e(f,{size:"mini",onClick:d.logout,type:"primary"},{default:m((()=>[a("退出登录")])),_:1},8,["onClick"])])}]]);export{c as default};
