class g extends Error{constructor(r,n){super("".concat(r," at position ").concat(n)),this.position=n}}const E=92,I=47,be=42,M=123,Q=125,P=91,D=93,Se=41,$e=32,F=10,re=9,ne=13,Ne=8,ke=12,L=34,T=43,_=45,oe=39,ce=48,se=57,f=44,U=46,y=58,Oe=59,Ee=65,Qe=97,De=69,Ue=101,ye=70,Be=102,ve=160,Le=8192,Ve=8202,je=8239,Ie=8287,We=12288,Fe=8220,Re=8221,Je=8216,Ke=8217,Ze=96,qe=180;function ze(e){return e>=ce&&e<=se||e>=Ee&&e<=ye||e>=Qe&&e<=Be}function h(e){return e>=ce&&e<=se}function Me(e){return e>=32&&e<=1114111}function B(e){return Pe.test(e)}const Pe=/^[,:[\]/{}()\n+]$/,Te=/^[,[\]/{}\n+]$/,_e=/^[a-zA-Z_$]$/,He=/^[a-zA-Z_$0-9]$/,H=/^(http|https|ftp|mailto|file|data|irc):\/\/$/,G=/^[A-Za-z0-9-._~:/?#@!$&'()*+;=]$/;function X(e){return Te.test(e)}function Y(e){return Ge.test(e)||e&&v(e.charCodeAt(0))}const Ge=/^[[{\w-]$/;function Xe(e){return e===F||e===ne||e===re||e===Ne||e===ke}function d(e){return e===$e||e===F||e===re||e===ne}function Ye(e){return e===ve||e>=Le&&e<=Ve||e===je||e===Ie||e===We}function v(e){return te(e)||W(e)}function te(e){return e===L||e===Fe||e===Re}function x(e){return e===L}function W(e){return e===oe||e===Je||e===Ke||e===Ze||e===qe}function ee(e){return e===oe}function $(e,r){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;const N=e.lastIndexOf(r);return N!==-1?e.substring(0,N)+(n?"":e.substring(N+1)):e}function u(e,r){let n=e.length;if(!d(e.charCodeAt(n-1)))return e+r;for(;d(e.charCodeAt(n-1));)n--;return e.substring(0,n)+r+e.substring(n)}function xe(e,r,n){return e.substring(0,r)+e.substring(r+n)}function er(e){return/[,\n][ \t\r]*$/.test(e)}const rr={"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t"},nr={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:"\n",r:"\r",t:"	"};function cr(e){let r=0,n="";w()||ge();const V=m(f);for(V&&t(),Y(e[r])&&er(n)?(V||(n=u(n,",")),fe()):V&&(n=$(n,","));e.charCodeAt(r)===Q||e.charCodeAt(r)===D;)r++,t();if(r>=e.length)return n;Ae();function w(){t();const o=ue()||le()||b()||he()||de()||Z(!1)||Ce();return t(),o}function t(){const o=r;let c=R();do c=ie(),c&&(c=R());while(c);return r>o}function R(){let o="",c;for(;(c=d(e.charCodeAt(r)))||Ye(e.charCodeAt(r));)c?o+=e[r]:o+=" ",r++;return o.length>0?(n+=o,!0):!1}function ie(){if(e.charCodeAt(r)===I&&e.charCodeAt(r+1)===be){for(;r<e.length&&!or(e,r);)r++;return r+=2,!0}if(e.charCodeAt(r)===I&&e.charCodeAt(r+1)===I){for(;r<e.length&&e.charCodeAt(r)!==F;)r++;return!0}return!1}function m(o){return e.charCodeAt(r)===o?(n+=e[r],r++,!0):!1}function k(o){return e.charCodeAt(r)===o?(r++,!0):!1}function ae(){return k(E)}function J(){return t(),e.charCodeAt(r)===U&&e.charCodeAt(r+1)===U&&e.charCodeAt(r+2)===U?(r+=3,t(),k(f),!0):!1}function ue(){if(e.charCodeAt(r)===M){n+="{",r++,t(),k(f)&&t();let o=!0;for(;r<e.length&&e.charCodeAt(r)!==Q;){let c;if(o?(c=!0,o=!1):(c=m(f),c||(n=u(n,",")),t()),J(),!(b()||Z(!0))){e.charCodeAt(r)===Q||e.charCodeAt(r)===M||e.charCodeAt(r)===D||e.charCodeAt(r)===P||e[r]===void 0?n=$(n,","):we();break}t();const p=m(y),A=r>=e.length;p||(Y(e[r])||A?n=u(n,":"):z()),w()||(p||A?n+="null":z())}return e.charCodeAt(r)===Q?(n+="}",r++):n=u(n,"}"),!0}return!1}function le(){if(e.charCodeAt(r)===P){n+="[",r++,t(),k(f)&&t();let o=!0;for(;r<e.length&&e.charCodeAt(r)!==D;)if(o?o=!1:m(f)||(n=u(n,",")),J(),!w()){n=$(n,",");break}return e.charCodeAt(r)===D?(n+="]",r++):n=u(n,"]"),!0}return!1}function fe(){let o=!0,c=!0;for(;c;)o?o=!1:m(f)||(n=u(n,",")),c=w();c||(n=$(n,",")),n="[\n".concat(n,"\n]")}function b(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,c=e.charCodeAt(r)===E;if(c&&(r++,c=!0),v(e.charCodeAt(r))){const i=x(e.charCodeAt(r))?x:ee(e.charCodeAt(r))?ee:W(e.charCodeAt(r))?W:te,p=r,A=n.length;let s='"';for(r++;;){if(r>=e.length){const a=q(r-1);return!o&&B(e.charAt(a))?(r=p,n=n.substring(0,A),b(!0)):(s=u(s,'"'),n+=s,!0)}else if(i(e.charCodeAt(r))){const a=r,l=s.length;if(s+='"',r++,n+=s,t(),o||r>=e.length||B(e.charAt(r))||v(e.charCodeAt(r))||h(e.charCodeAt(r)))return K(),!0;if(B(e.charAt(q(a-1))))return r=p,n=n.substring(0,A),b(!0);n=n.substring(0,A),r=a+1,s="".concat(s.substring(0,l),"\\").concat(s.substring(l))}else if(o&&X(e[r])){if(e.charCodeAt(r-1)===y&&H.test(e.substring(p+1,r+2)))for(;r<e.length&&G.test(e[r]);)s+=e[r],r++;return s=u(s,'"'),n+=s,K(),!0}else if(e.charCodeAt(r)===E){const a=e.charAt(r+1);if(nr[a]!==void 0)s+=e.slice(r,r+2),r+=2;else if(a==="u"){let S=2;for(;S<6&&ze(e.charCodeAt(r+S));)S++;S===6?(s+=e.slice(r,r+6),r+=6):r+S>=e.length?r=e.length:me()}else s+=a,r+=2}else{const a=e.charAt(r),l=e.charCodeAt(r);l===L&&e.charCodeAt(r-1)!==E?(s+="\\".concat(a),r++):Xe(l)?(s+=rr[a],r++):(Me(l)||pe(a),s+=a,r++)}c&&ae()}}return!1}function K(){let o=!1;for(t();e.charCodeAt(r)===T;){o=!0,r++,t(),n=$(n,'"',!0);const c=n.length;b()?n=xe(n,c,1):n=u(n,'"')}return o}function he(){const o=r;if(e.charCodeAt(r)===_){if(r++,O())return j(o),!0;if(!h(e.charCodeAt(r)))return r=o,!1}for(;h(e.charCodeAt(r));)r++;if(e.charCodeAt(r)===U){if(r++,O())return j(o),!0;if(!h(e.charCodeAt(r)))return r=o,!1;for(;h(e.charCodeAt(r));)r++}if(e.charCodeAt(r)===Ue||e.charCodeAt(r)===De){if(r++,(e.charCodeAt(r)===_||e.charCodeAt(r)===T)&&r++,O())return j(o),!0;if(!h(e.charCodeAt(r)))return r=o,!1;for(;h(e.charCodeAt(r));)r++}if(!O())return r=o,!1;if(r>o){const c=e.slice(o,r),i=/^0\d/.test(c);return n+=i?'"'.concat(c,'"'):c,!0}return!1}function de(){return C("true","true")||C("false","false")||C("null","null")||C("True","true")||C("False","false")||C("None","null")}function C(o,c){return e.slice(r,r+o.length)===o?(n+=c,r+=o.length,!0):!1}function Z(o){const c=r;if(_e.test(e[r])){for(;r<e.length&&He.test(e[r]);)r++;let i=r;for(;d(e.charCodeAt(i));)i++;if(e[i]==="(")return r=i+1,w(),e.charCodeAt(r)===Se&&(r++,e.charCodeAt(r)===Oe&&r++),!0}for(;r<e.length&&!X(e[r])&&!v(e.charCodeAt(r))&&(!o||e.charCodeAt(r)!==y);)r++;if(e.charCodeAt(r-1)===y&&H.test(e.substring(c,r+2)))for(;r<e.length&&G.test(e[r]);)r++;if(r>c){for(;d(e.charCodeAt(r-1))&&r>0;)r--;const i=e.slice(c,r);return n+=i==="undefined"?"null":JSON.stringify(i),e.charCodeAt(r)===L&&r++,!0}}function Ce(){if(e[r]==="/"){const o=r;for(r++;r<e.length&&(e[r]!=="/"||e[r-1]==="\\");)r++;return r++,n+='"'.concat(e.substring(o,r),'"'),!0}}function q(o){let c=o;for(;c>0&&d(e.charCodeAt(c));)c--;return c}function O(){return r>=e.length||B(e[r])||d(e.charCodeAt(r))}function j(o){n+="".concat(e.slice(o,r),"0")}function pe(o){throw new g("Invalid character ".concat(JSON.stringify(o)),r)}function Ae(){throw new g("Unexpected character ".concat(JSON.stringify(e[r])),r)}function ge(){throw new g("Unexpected end of json string",e.length)}function we(){throw new g("Object key expected",r)}function z(){throw new g("Colon expected",r)}function me(){const o=e.slice(r,r+6);throw new g('Invalid unicode character "'.concat(o,'"'),r)}}function or(e,r){return e[r]==="*"&&e[r+1]==="/"}export{cr as j};
