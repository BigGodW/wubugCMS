System.register(["./js-cookie-legacy.js"],(function(e,t){"use strict";var r;return{setters:[e=>{r=e.a}],execute:function(){e("s",((e="token",t)=>{r.set(e,t)})),e("g",((e="token")=>r.get(e)));let t=e("a",(e=>{for(let r of e)r.label=r.name,r.value=r.id,r.children&&t(r.children);return e})),i=e("t",((e,t=0,r=1)=>{let l=[];return e.forEach(((n,c)=>{n.pid==t&&(n.leval=r,n.children=i(e,n.id,r+1),l.push(n))})),l}));e("c",((e,t)=>{const r=[];let i=(e,t)=>{for(let l,n=0;n<t.length;n++)l=t[n],l.id==e&&(r.unshift(l.id),0!=l.pid&&i(l.pid,t))};return i(e,t),r})),e("b",(e=>{let t=/src=[\'\"]?([^\'\"]*)[\'\"]?/i,r=e.match(/<img.*?(?:>|\/>)/gi),i=[];if(r)for(let l=0;l<r.length;l++){let e=r[l].match(t);e[1]&&i.push(e[1])}return i})),e("f",(e=>e.replace(/<[^>]*>/g,"")))}}}));
//# sourceMappingURL=tool-legacy.js.map
