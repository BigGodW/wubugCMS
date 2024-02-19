import{U as e,k as t,x as a,az as o,a9 as n,M as l,o as i,c as s,a as r,t as d,f as u,Y as c}from"./@vue.js";const p=e=>e+"_"+(Date.now()+Math.floor(1e6*Math.random())),m=()=>{const e="undefined"!=typeof window?window:global;return e&&"tinymce"in e?e.tinymce:null};function _(e){return e?e.getContent():""}function g(e,t){t&&t.setContent(e)}function b(e,t=!0){e&&e.mode.set(t?"readonly":"design")}function f(e,t,a){return new Promise(((o,n)=>{let l,i,{images_upload_url:s,images_upload_credentials:r,custom_images_upload_header:d,custom_images_upload_param:u,custom_images_upload_callback:c,custom_images_limit_size:p}=e||{};if(p&&t.blob().size>p){let e="图片大小不能超过 ".concat(p/1024,"KB");n(e)}else l=new XMLHttpRequest,l.withCredentials=!!r,l.open("POST",s||""),d&&Object.keys(d).forEach((e=>{l.setRequestHeader(e,d[e])})),l.upload.onprogress=function(e){a(e.loaded/e.total*100)},l.onload=function(){if(403===l.status)return void n({message:"HTTP Error: "+l.status,remove:!0});if(l.status<200||l.status>=300)return void n("HTTP Error: "+l.status);let e=JSON.parse(l.responseText);if(!e)return void n("Invalid JSON: "+l.responseText);let t="function"==typeof c?c(e):e.location;t?o(t):n("Failed Path: location image path is error/empty")},l.onerror=function(){n("Image upload failed due to a XHR Transport error. Code: "+l.status)},i=new FormData,i.append("file",t.blob(),t.filename()),u&&Object.keys(u).forEach((e=>{i.append(e,u[e])})),l.send(i)}))}const v=(()=>{let e={status:{},loadedCallbacks:{}};const t=t=>{e.loadedCallbacks[t]&&(e.loadedCallbacks[t].forEach((e=>{"function"==typeof e.handler&&e.handler.call(e.scope)})),e.loadedCallbacks[t]=void 0)};return{load:(a,o,n)=>{o&&(e.loadedCallbacks[a]||(e.loadedCallbacks[a]=[]),e.loadedCallbacks[a].push({handler:o,scope:n||globalThis})),"LOADED"!==e.status[a]?"LOADING"!==e.status[a]&&(e.status[a]="LOADING",((e,t)=>{const a=document.createElement("script");a.id=p("tiny-script"),a.type="application/javascript",a.src=e,a.referrerPolicy="origin";const o=()=>{a.removeEventListener("load",o),t()};a.addEventListener("load",o),(document.head||document.body).appendChild(a)})(a,(()=>{e.status[a]="LOADED",t(a)}))):t(a)}}})(),h=["id"],y={key:0},x={name:"Vue3Tinymce"},k=Object.assign(x,{props:{modelValue:String,setting:{type:Object,default:()=>({})},setup:Function,disabled:Boolean,scriptSrc:String,debug:Boolean},emits:["update:modelValue","init","change"],setup(x,{expose:k,emit:C}){const w=x,j=C;let z=!0;const T=e({editor:null,id:p("tinymce"),err:""}),O=()=>{var e;return String(null!=(e=w.modelValue)?e:"")},S=(e,t,a)=>{w.debug&&console.log("来自：".concat(e.type," | \n ").concat(t," \n ").concat(a||"--"))},E=(e,t)=>{t||(t=T.editor);const a=_(t);S(e,a),j("update:modelValue",a),j("change",a)},D=()=>{var e;if(null===m())return void(T.err="tinymce is null");w.debug&&console.warn("vue3-tinymce 进入debug模式");let t={...w.setting,selector:"#".concat(T.id),content_style:(a=null==(e=w.setting)?void 0:e.content_style,"body{font-size: 14px;} img{padding: 0 2px;} "+(a||"")),setup:e=>{T.editor=e,w.setup&&w.setup(e),e.on("init",(()=>(e=>{g(O(),e),w.disabled&&"readonly"!==e.mode.get()&&b(e),e.on("change input undo redo",(t=>{E(t,e)})),j("init",e)})(e)))}};var a;w.setting.custom_images_upload&&(t.images_upload_handler=(...e)=>f.apply(null,[w.setting,...e])),m().init(t),z=!1};return t((()=>w.modelValue),((e,t)=>{if(T.editor&&T.editor.initialized&&t!==e&&e!==_(T.editor)){if(S({type:"propsChanged to setContent"},e,t),null===e)return function(e,t){if(t){if(t.resetContent)return t.resetContent(e);t.setContent(e),t.setDirty(!1),t.undoManager.clear()}}("",T.editor);g(O(),T.editor)}})),t((()=>w.disabled),(e=>{T.editor&&T.editor.initialized&&b(T.editor,e)})),k({id:T.id,editor:T.editor}),a((()=>{var e;if(null!==m())return void D();const t=null!=(e=w.scriptSrc)?e:"https://cdn.bootcdn.net/ajax/libs/tinymce/6.1.2/tinymce.min.js";v.load(t,D)})),o((()=>{z||D()})),n((()=>{var e;T.editor&&(null==(e=m())||e.remove("#".concat(T.id)))})),l((()=>{var e;T.editor&&(null==(e=m())||e.remove("#".concat(T.id)))})),(e,t)=>(i(),s(c,null,[r("div",{id:T.id,class:"tiny-textarea"},null,8,h),T.err?(i(),s("p",y,d(T.err),1)):u("",!0)],64))}});let C={convert_urls:!1,custom_images_upload:!0,images_upload_url:"/api/upload",custom_images_limit_size:204800,branding:!1,menubar:!0,body_class:"article-content ",object_resizing:!0,paste_data_images:!0,paste_merge_formats:!0,end_container_on_empty_block:!0,powerpaste_word_import:"clean",advlist_bullet_styles:"default,circle,disc,square",advlist_number_styles:"default,lower-alpha,lower-greek,lower-roman,upper-alpha,upper-roman",default_link_target:"_blank",link_title:!1,nonbreaking_force_tab:!0,custom_images_upload_callback:e=>{if(200===e.code)return e.data.path},images_upload_credentials:!0,custom_images_upload_header:{"X-Token":"xxxx"},custom_images_upload_param:{},height:550,toolbar:"undo redo| code codesample | fullscreen | blocks alignleft aligncenter alignright alignjustify | link unlink | numlist bullist | image media table | fontsize forecolor backcolor | bold italic underline strikethrough | indent outdent | superscript subscript | removeformat |",toolbar_mode:"sliding",quickbars_selection_toolbar:"removeformat | bold italic underline strikethrough | fontsize forecolor backcolor",plugins:"link code image media table lists fullscreen quickbars codesample",font_size_formats:"12px 14px 16px 18px 20px 22px 24px 26px 28px 30px 32px 34px 36px 38px 40px",link_default_target:"_blank",valid_elements:"*[*]",allow_html_in_named_anchor:!0,language:"zh-Hans",language_url:"/public/admin/tinymce/zh-Hans.js",codesample_languages:[{text:"HTML/XML",value:"markup"},{text:"JavaScript",value:"javascript"},{text:"CSS",value:"css"},{text:"PHP",value:"php"},{text:"Ruby",value:"ruby"},{text:"Python",value:"python"},{text:"Java",value:"java"},{text:"C",value:"c"},{text:"C#",value:"csharp"},{text:"C++",value:"cpp"}]};export{k as _,C as t};
