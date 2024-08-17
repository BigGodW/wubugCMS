import{d as e,x as a,S as t,j as i,T as n,k as s,z as o,o as l,e as c,a as d,a2 as r,n as h,V as u,u as v,t as p,a8 as g}from"./@vue.js";const f=["width","height"],m=["width","height"],w=["width","height"],X=[d("div",{class:"loading-gif_"},[d("span"),d("span"),d("span"),d("span"),d("span")],-1)],x={class:"auth-control_"},T={class:"range-text"},Y=[d("div",null,null,-1),d("div",null,null,-1),d("div",null,null,-1)],y=e({__name:"App",props:{type:{type:String,default:"modal"},canvasWidth:{type:Number,default:310},canvasHeight:{type:Number,default:160},show:{type:Boolean,default:!1},puzzleScale:{type:Number,default:1},sliderSize:{type:Number,default:50},range:{type:Number,default:10},zIndex:{type:Number,default:999},imgs:{type:Array,default:null},successText:{type:String,default:"验证通过！"},failText:{type:String,default:"验证失败，请重试"},sliderText:{type:String,default:"拖动滑块完成拼图"},className:{type:String,default:""}},emits:["success","fail","close","reset"],setup(e,{expose:y,emit:S}){const b=e;a((()=>{document.addEventListener("mousemove",O,!1),document.addEventListener("mouseup",k,!1),document.addEventListener("touchmove",O,{passive:!1}),document.addEventListener("touchend",k,!1),A.isInside="inside"===b.type,b.show&&(!A.isInside&&document.body.classList.add("vue-puzzle-overflow"),U())})),t((()=>{A.timer1&&clearTimeout(A.timer1),document.removeEventListener("mousemove",O,!1),document.removeEventListener("mouseup",k,!1),document.removeEventListener("touchmove",O,!1),document.removeEventListener("touchend",k,!1)}));const M=i(),B=i(),C=i(),I=i(),A=n({isInside:!1,mouseDown:!1,startWidth:50,startX:0,newX:0,pinX:0,pinY:0,loading:!1,isCanSlide:!1,error:!1,infoBoxShow:!1,infoText:"",infoBoxFail:!1,timer1:void 0,closeDown:!1,isSuccess:!1,imgIndex:-1,isSubmting:!1});s((()=>b.show),(e=>{e?(!A.isInside&&document.body.classList.add("vue-puzzle-overflow"),U()):(A.isSubmting=!1,A.isSuccess=!1,A.infoBoxShow=!1,document.body.classList.remove("vue-puzzle-overflow"))})),s((()=>b.type),(e=>{"inside"===e?(A.isInside=!0,document.body.classList.remove("vue-puzzle-overflow")):A.isInside=!1}));const z=o((()=>{const e=A.startWidth+A.newX-A.startX;return e<H.value?H.value:e>b.canvasWidth?b.canvasWidth:e})),W=o((()=>Math.round(52.5*Math.max(Math.min(b.puzzleScale,2),.2)+6))),H=o((()=>Math.max(Math.min(Math.round(b.sliderSize),Math.round(.5*b.canvasWidth)),10))),D=o((()=>999!==b.zIndex?"z-index:".concat(b.zIndex):"")),L=()=>{A.isInside||(A.closeDown=!0)},P=()=>{A.closeDown&&(!A.mouseDown&&!A.isSubmting&&(A.timer1&&clearTimeout(A.timer1),S("close"))),A.closeDown=!1},R=e=>{var a;A.isCanSlide&&(A.mouseDown=!0,A.startWidth=(null==(a=M.value)?void 0:a.clientWidth)||0,A.newX=void 0!==e.clientX?e.clientX:e.changedTouches[0].clientX,A.startX=void 0!==e.clientX?e.clientX:e.changedTouches[0].clientX)},O=e=>{A.mouseDown&&(e.preventDefault(),A.newX=void 0!==e.clientX?e.clientX:e.changedTouches[0].clientX)},k=()=>{A.mouseDown&&(A.mouseDown=!1,N())},F=(e=!1)=>{var a;if(A.loading&&!e)return;A.loading=!0,A.isCanSlide=!1;const t=B.value,i=C.value,n=I.value,s=null==t?void 0:t.getContext("2d",{willReadFrequently:!0}),o=null==i?void 0:i.getContext("2d"),l=null==n?void 0:n.getContext("2d");if(!s||!o||!l)return void console.error("not found ctx / ctx2 / ctx3");const c=navigator.userAgent.indexOf("Firefox")>=0&&navigator.userAgent.indexOf("Windows")>=0,d=document.createElement("img");if(s.fillStyle="rgba(255,255,255,1)",l.fillStyle="rgba(255,255,255,1)",s.clearRect(0,0,b.canvasWidth,b.canvasHeight),o.clearRect(0,0,b.canvasWidth,b.canvasHeight),A.pinX=E(W.value+20,b.canvasWidth-W.value-10),A.pinY=E(20,b.canvasHeight-W.value-10),d.crossOrigin="anonymous",d.onload=()=>{const[e,a,t,i]=Z(d),n=Math.random(),r=Math.random(),h=Math.random(),u=n<.33?-1:n<.66?0:1,v=r<.33?-1:r<.66?0:1,p=h<.33?-1:h<.66?0:1;let g=Math.random()<.6?1:0;u===v&&v===p&&p===g&&0===g&&(g=1),s.save(),Q(s,u,v,p,g),s.closePath(),c?(s.clip(),s.save(),s.shadowOffsetX=0,s.shadowOffsetY=0,s.shadowColor="#000",s.shadowBlur=3,s.fill(),s.restore()):(s.shadowOffsetX=0,s.shadowOffsetY=0,s.shadowColor="#000",s.shadowBlur=3,s.fill(),s.clip()),s.drawImage(d,e,a,t,i),l.fillRect(0,0,b.canvasWidth,b.canvasHeight),l.drawImage(d,e,a,t,i),s.globalCompositeOperation="source-atop",Q(s,u,v,p,g),s.arc(A.pinX+Math.ceil(W.value/2),A.pinY+Math.ceil(W.value/2),1.2*W.value,0,2*Math.PI,!0),s.closePath(),s.shadowColor="rgba(255, 255, 255, .8)",s.shadowOffsetX=-1,s.shadowOffsetY=-1,s.shadowBlur=Math.min(Math.ceil(8*b.puzzleScale),12),s.fillStyle="#ffffaa",s.fill();const f=s.getImageData(A.pinX-3,A.pinY-20,A.pinX+W.value+5,A.pinY+W.value+5);o.putImageData(f,0,A.pinY-20),s.restore(),s.clearRect(0,0,b.canvasWidth,b.canvasHeight),s.save(),Q(s,u,v,p,g),s.globalAlpha=.8,s.fillStyle="#ffffff",s.fill(),s.restore(),s.save(),s.globalCompositeOperation="source-atop",Q(s,u,v,p,g),s.arc(A.pinX+Math.ceil(W.value/2),A.pinY+Math.ceil(W.value/2),1.2*W.value,0,2*Math.PI,!0),s.shadowColor="#000",s.shadowOffsetX=2,s.shadowOffsetY=2,s.shadowBlur=16,s.fill(),s.restore(),s.save(),s.globalCompositeOperation="destination-over",s.drawImage(d,e,a,t,i),s.restore(),A.loading=!1,A.isCanSlide=!0},d.onerror=()=>{F(!0)},!e&&null!=(a=b.imgs)&&a.length){let e=E(0,b.imgs.length-1);e===A.imgIndex&&(e===b.imgs.length-1?e=0:e++),A.imgIndex=e,d.src=b.imgs[e]}else d.src=J()},E=(e,a)=>Math.ceil(Math.random()*(a-e)+e),Z=e=>{const a=e.width/e.height;let t=0,i=0,n=0,s=0;return a>b.canvasWidth/b.canvasHeight?(s=b.canvasHeight,n=a*s,i=0,t=(b.canvasWidth-n)/2):(n=b.canvasWidth,s=n/a,t=0,i=(b.canvasHeight-s)/2),[t,i,n,s]},Q=(e,a,t,i,n)=>{const s=Math.ceil(15*b.puzzleScale);e.beginPath(),e.moveTo(A.pinX,A.pinY),e.lineTo(A.pinX+s,A.pinY),e.arcTo(A.pinX+s,A.pinY+a*s/2,A.pinX+s+s/2,A.pinY+a*s/2,s/2),e.arcTo(A.pinX+s+s,A.pinY+a*s/2,A.pinX+s+s,A.pinY,s/2),e.lineTo(A.pinX+s+s+s,A.pinY),e.lineTo(A.pinX+s+s+s,A.pinY+s),e.arcTo(A.pinX+s+s+s+t*s/2,A.pinY+s,A.pinX+s+s+s+t*s/2,A.pinY+s+s/2,s/2),e.arcTo(A.pinX+s+s+s+t*s/2,A.pinY+s+s,A.pinX+s+s+s,A.pinY+s+s,s/2),e.lineTo(A.pinX+s+s+s,A.pinY+s+s+s),e.lineTo(A.pinX+s+s,A.pinY+s+s+s),e.arcTo(A.pinX+s+s,A.pinY+s+s+s+i*s/2,A.pinX+s+s/2,A.pinY+s+s+s+i*s/2,s/2),e.arcTo(A.pinX+s,A.pinY+s+s+s+i*s/2,A.pinX+s,A.pinY+s+s+s,s/2),e.lineTo(A.pinX,A.pinY+s+s+s),e.lineTo(A.pinX,A.pinY+s+s),e.arcTo(A.pinX+n*s/2,A.pinY+s+s,A.pinX+n*s/2,A.pinY+s+s/2,s/2),e.arcTo(A.pinX+n*s/2,A.pinY+s,A.pinX,A.pinY+s,s/2),e.lineTo(A.pinX,A.pinY)},J=()=>{const e=document.createElement("canvas"),a=e.getContext("2d");if(!a)return console.error("not found ctx"),"";e.width=b.canvasWidth,e.height=b.canvasHeight,a.fillStyle="rgb(".concat(E(100,255),",").concat(E(100,255),",").concat(E(100,255),")"),a.fillRect(0,0,b.canvasWidth,b.canvasHeight);for(let t=0;t<12;t++)if(a.fillStyle="rgb(".concat(E(100,255),",").concat(E(100,255),",").concat(E(100,255),")"),a.strokeStyle="rgb(".concat(E(100,255),",").concat(E(100,255),",").concat(E(100,255),")"),E(0,2)>1)a.save(),a.rotate(E(-90,90)*Math.PI/180),a.fillRect(E(-20,e.width-20),E(-20,e.height-20),E(10,e.width/2+10),E(10,e.height/2+10)),a.restore();else{a.beginPath();const t=E(-Math.PI,Math.PI);a.arc(E(0,e.width),E(0,e.height),E(10,e.height/2+10),t,t+1.5*Math.PI),a.closePath(),a.fill()}return e.toDataURL("image/png")},N=()=>{A.isSubmting=!0;const e=z.value-H.value-(W.value-H.value)*((z.value-H.value)/(b.canvasWidth-H.value)),a=A.pinX-3-e;Math.abs(a)<b.range?(A.infoText=b.successText,A.infoBoxFail=!1,A.infoBoxShow=!0,A.isCanSlide=!1,A.isSuccess=!0,A.timer1&&clearTimeout(A.timer1),A.timer1=setTimeout((()=>{A.isSubmting=!1,S("success",a,{deviation:a,offsetX:e,pinX:A.pinX-3})}),800)):(A.infoText=b.failText,A.infoBoxFail=!0,A.infoBoxShow=!0,A.isCanSlide=!1,S("fail",a,{deviation:a,offsetX:e,pinX:A.pinX-3}),A.timer1&&clearTimeout(A.timer1),A.timer1=setTimeout((()=>{A.isSubmting=!1,U()}),800))},U=e=>{A.isSubmting||(A.infoBoxFail=!1,A.infoBoxShow=!1,A.isCanSlide=!1,A.isSuccess=!1,A.startWidth=H.value,A.startX=0,A.newX=0,F(),e&&S("reset"))};return y({reset:U}),(a,t)=>(l(),c(g,{to:"body",disabled:A.isInside},[d("div",{class:u(["vue-puzzle-vcode",{inside_:A.isInside,show_:e.show},e.className]),style:h(v(D)),onMousedown:L,onMouseup:P,onTouchstartPassive:L,onTouchend:P},[d("div",{class:"vue-auth-box_",onMousedown:t[3]||(t[3]=r((()=>{}),["stop"])),onTouchstart:t[4]||(t[4]=r((()=>{}),["stop"]))},[d("div",{class:"auth-body_",style:h("width:".concat(e.canvasWidth,"px;height: ").concat(e.canvasHeight,"px"))},[d("canvas",{ref_key:"canvas1",ref:B,class:"auth-canvas1_",width:e.canvasWidth,height:e.canvasHeight},null,8,f),d("canvas",{ref_key:"canvas3",ref:I,class:u(["auth-canvas3_",{show:A.isSuccess}]),width:e.canvasWidth,height:e.canvasHeight},null,10,m),d("canvas",{ref_key:"canvas2",ref:C,class:"auth-canvas2_",width:v(W),height:e.canvasHeight,style:h("width:".concat(v(W),"px;height:").concat(e.canvasHeight,"px;transform:translateX(").concat(v(z)-v(H)-(v(W)-v(H))*((v(z)-v(H))/(e.canvasWidth-v(H))),"px)"))},null,12,w),d("div",{class:u(["loading-box_",{hide_:!A.loading}])},X,2),d("div",{class:u(["info-box_",{show:A.infoBoxShow},{fail:A.infoBoxFail}])},p(A.infoText),3),d("div",{class:u(["flash_",{show:A.isSuccess}]),style:h("transform: translateX(".concat(A.isSuccess?"".concat(e.canvasWidth+.578*e.canvasHeight,"px"):"-".concat(.578*e.canvasHeight,"px"),") skew(-30deg, 0);"))},null,6),d("img",{class:"reset_",onClick:t[0]||(t[0]=e=>U(!0)),src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAELklEQVRYR+2YW2wUZRTH//9vtlCoF9IoIklT3PqgPGi326hoetuaGEhIr9SgCYkkgt2WGOQVCca+GavWdr0GjD4YhG3RB3hply1LQA1tEQIxEXapGI2pEkys9LIzx2ylYWfY6e5sF0oi+7hzzvl+3/9855xvhrjNf7zN+XAHcL4Z+n8o6JWTeYt++W25S596AIZy6TB+n3yo+Nchlk8vmIIVowdXU9c3Q1gDSilBlQwjgBAYFGDvdF58/4milqvZwDpOcXWsb5Uh8hmBqkwXFMhlCN8aX5LXNbRy/T+Z+iXsHAFWRXs3QGQPyLucLDJrK5DgUXdTsxPfjAEro8E3Ce50EtxsKxPTwCPH3U2jTmJkBJgWTnAMxDeGMEoa0xQ+LJQnCD4HYFkCyAC3RdwN3U7gMkpxRTTYrMD91sCJIgCxV5R6O1Jcfy7VwonqLoj9/CqB2kF341qncGkBvRe+ureAWpRgoalCBecMFzcdK24YymZRJz5zprgq1tsJwXYL3CVZGvdGHmwZc7JQtra2gE+f712ep2QUYP714DJhaJrXLqXZQszlZwtYdSHoB9ljVk/ePVrSZFL0ZkAlxzQBVseCT8WhZhRThtFB8plk9Zi/qCi8cv0fNxvKFrDy4oF11NXXIFy2EII4iBcG3Y03VLZT8OqRd5aFPduvOEpxRayvXolxAKB2g6NgEhobBlc1HHYKY7WvHf5wtVAPgegIlbbZ9seUZ7AyFnwewi9pGoUyDmhrB931kfnC1ZwOeKlLP8GZJi6QLSFP2yep4toXSbT3ZQAfX3O6omt8Nhd9r/aHQAUMOQywYBZo5uZD2ThQ2rbPCjlnH6yI9rUryE5DU75ctJaake46Be4DuDjF8dFBNA94/AdtiySVxIlpMlTS8td801o70vMigM9huTda2lhcKHVHPO2HZv/P6LIwX7hk/+qzPSvUJGMkrg8AQYTkroRdXMlE+HH/twsG6BsOdJHYZlaO/lBZ6weOiiSXqs3Gqj0TeAxx+T75DIpgwjC0onD51pQD4JaluPrkR/cpFT9DcoVp84LOgTL/DjtBbglgou+puHwB8lEznPxJw1XSX77VtgizBvQNBw4RMqB7xt4Lc3c8lQKJaQHoO4R8ydz0/7MWoCXk8c85MrMC9J3qaafw/WtQlwXST+F3BnAeYB4obgJ1BJIuG+YtiKAjVOZ/Pd1ZdwzoG+4uBtSPpjaRbhXLcwF3hzytb2TilgVgT5BkYybBrTYC+Rvg5nRpdTRJrIs8+VPXPQXj2i4ItxC4O2NQQUQnN4U9rRcz9nH64p4ceM2lziX5Y4s3KHCdUHwE77ecMkMEp6BwhIa2Z6DslZRvfulgHafYLuCas58WLp2aLCFUga70qxOFU6dPFL2W1feYeaU43Y5z/TxnCuYabMEuC043ckdBp4pZ7f8FE5psOI1g6fwAAAAASUVORK5CYII="})],4),d("div",x,[d("div",{class:"range-box",style:h("height:".concat(v(H),"px;width:").concat(e.canvasWidth,"px"))},[d("div",T,p(e.sliderText),1),d("div",{class:"range-slider",ref_key:"rangeSlider",ref:M,style:h("width:".concat(v(z),"px"))},[d("div",{class:u(["range-btn",{isDown:A.mouseDown}]),style:h("width:".concat(v(H),"px")),onMousedown:t[1]||(t[1]=e=>R(e)),onTouchstart:t[2]||(t[2]=e=>R(e))},Y,38)],4)],4)])],32)],38)],8,["disabled"]))}});export{y as M};
