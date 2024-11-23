import{A as j,au as R,ac as k,N as q,B as E,ao as Q,o as X,m as N,l as Z,av as ee,i as p,aw as x,S as I,v as w,j as S,w as u,k as y,ax as F,ay as te,n as H,az as M,am as D,M as re,al as ne,aA as ae,G as se,q as ie,aB as oe,y as ue,a as ce,p as fe,ap as le,aC as O,a7 as de,h as _e,P as pe,g as ve,$ as he}from"./runtime.B-swgO6H.js";function Re(e,t){if(t){const r=document.body;e.autofocus=!0,j(()=>{document.activeElement===r&&e.focus()})}}let $=!1;function me(){$||($=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function z(e){var t=q,r=E;R(null),k(null);try{return e()}finally{R(t),k(r)}}function ke(e,t,r,a=r){e.addEventListener(t,()=>z(r));const s=e.__on_r;s?e.__on_r=()=>{s(),a()}:e.__on_r=a,me()}const G=new Set,P=new Set;function De(e,t,r,a){function s(n){if(a.capture||A.call(t,n),!n.cancelBubble)return z(()=>r.call(this,n))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?j(()=>{t.addEventListener(e,s,a)}):t.addEventListener(e,s,a),s}function Ie(e){for(var t=0;t<e.length;t++)G.add(e[t]);for(var r of P)r(e)}function A(e){var B;var t=this,r=t.ownerDocument,a=e.type,s=((B=e.composedPath)==null?void 0:B.call(e))||[],n=s[0]||e.target,i=0,h=e.__root;if(h){var f=s.indexOf(h);if(f!==-1&&(t===document||t===window)){e.__root=t;return}var l=s.indexOf(t);if(l===-1)return;f<=l&&(i=f)}if(n=s[i]||e.target,n!==t){Q(e,"currentTarget",{configurable:!0,get(){return n||r}});var T=q,d=E;R(null),k(null);try{for(var o,c=[];n!==null;){var m=n.assignedSlot||n.parentNode||n.host||null;try{var b=n["__"+a];if(b!==void 0&&!n.disabled)if(X(b)){var[J,...K]=b;J.apply(n,[e,...K])}else b.call(n,e)}catch(C){o?c.push(C):o=C}if(e.cancelBubble||m===t||m===null)break;n=m}if(o){for(let C of c)queueMicrotask(()=>{throw C});throw o}}finally{e.__root=t,delete e.currentTarget,R(T),k(d)}}}let _;function ye(){_=void 0}function Me(e){let t=null,r=p;var a;if(p){for(t=u,_===void 0&&(_=y(document.head));_!==null&&(_.nodeType!==8||_.data!==x);)_=I(_);_===null?w(!1):_=S(I(_))}p||(a=document.head.appendChild(N()));try{Z(()=>e(a),ee)}finally{r&&(w(!0),_=u,S(t))}}function U(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function v(e,t){var r=E;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function be(e,t){var r=(t&F)!==0,a=(t&te)!==0,s,n=!e.startsWith("<!>");return()=>{if(p)return v(u,null),u;s===void 0&&(s=U(n?e:"<!>"+e),r||(s=y(s)));var i=a?document.importNode(s,!0):s.cloneNode(!0);if(r){var h=y(i),f=i.lastChild;v(h,f)}else v(i,i);return i}}function Oe(e,t){var r=be(e,t);return()=>ge(r())}function Pe(e,t,r="svg"){var a=!e.startsWith("<!>"),s=(t&F)!==0,n=`<${r}>${a?e:"<!>"+e}</${r}>`,i;return()=>{if(p)return v(u,null),u;if(!i){var h=U(n),f=y(h);if(s)for(i=document.createDocumentFragment();y(f);)i.appendChild(y(f));else i=y(f)}var l=i.cloneNode(!0);if(s){var T=y(l),d=l.lastChild;v(T,d)}else v(l,l);return l}}function ge(e){if(p)return e;const t=e.nodeType===11,r=e.tagName==="SCRIPT"?[e]:e.querySelectorAll("script"),a=E;for(const n of r){const i=document.createElement("script");for(var s of n.attributes)i.setAttribute(s.name,s.value);i.textContent=n.textContent,(t?e.firstChild===n:e===n)&&(a.nodes_start=i),(t?e.lastChild===n:e===n)&&(a.nodes_end=i),n.replaceWith(i)}return e}function Ve(e=""){if(!p){var t=N(e+"");return v(t,t),t}var r=u;return r.nodeType!==3&&(r.before(r=N()),S(r)),v(r,r),r}function We(){if(p)return v(u,null),u;var e=document.createDocumentFragment(),t=document.createComment(""),r=N();return e.append(t,r),v(t,r),e}function Be(e,t){if(p){E.nodes_end=u,H();return}e!==null&&e.before(t)}function $e(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const we=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function je(e){return we.includes(e)}const Ee={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",srcobject:"srcObject"};function qe(e){return e=e.toLowerCase(),Ee[e]??e}const Te=["touchstart","touchmove"];function Ae(e){return Te.includes(e)}let V=!0;function xe(e){V=e}function Fe(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r==null?"":r+"")}function Ne(e,t){return Y(e,t)}function He(e,t){M(),t.intro=t.intro??!1;const r=t.target,a=p,s=u;try{for(var n=y(r);n&&(n.nodeType!==8||n.data!==x);)n=I(n);if(!n)throw D;w(!0),S(n),H();const i=Y(e,{...t,anchor:n});if(u===null||u.nodeType!==8||u.data!==re)throw ne(),D;return w(!1),i}catch(i){if(i===D)return t.recover===!1&&ae(),M(),se(r),w(!1),Ne(e,t);throw i}finally{w(a),S(s),ye()}}const g=new Map;function Y(e,{target:t,anchor:r,props:a={},events:s,context:n,intro:i=!0}){M();var h=new Set,f=d=>{for(var o=0;o<d.length;o++){var c=d[o];if(!h.has(c)){h.add(c);var m=Ae(c);t.addEventListener(c,A,{passive:m});var b=g.get(c);b===void 0?(document.addEventListener(c,A,{passive:m}),g.set(c,1)):g.set(c,b+1)}}};f(ie(G)),P.add(f);var l=void 0,T=oe(()=>{var d=r??t.appendChild(N());return ue(()=>{if(n){ce({});var o=le;o.c=n}s&&(a.$$events=s),p&&v(d,null),V=i,l=e(d,a)||{},V=!0,p&&(E.nodes_end=u),n&&fe()}),()=>{var m;for(var o of h){t.removeEventListener(o,A);var c=g.get(o);--c===0?(document.removeEventListener(o,A),g.delete(o)):g.set(o,c)}P.delete(f),W.delete(l),d!==r&&((m=d.parentNode)==null||m.removeChild(d))}});return W.set(l,T),l}let W=new WeakMap;function ze(e){const t=W.get(e);t&&t()}function Se(e,t,r){if(e==null)return t(void 0),O;const a=de(()=>e.subscribe(t,r));return a.unsubscribe?()=>a.unsubscribe():a}let L=!1;function Ge(e,t,r){const a=r[t]??(r[t]={store:null,source:pe(void 0),unsubscribe:O});if(a.store!==e)if(a.unsubscribe(),a.store=e??null,e==null)a.source.v=void 0,a.unsubscribe=O;else{var s=!0;a.unsubscribe=Se(e,n=>{s?a.source.v=n:he(a.source,n)}),s=!1}return ve(a.source)}function Ue(){const e={};return _e(()=>{for(var t in e)e[t].unsubscribe()}),e}function Ye(e){var t=L;try{return L=!1,[e(),L]}finally{L=t}}const Ce="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ce);export{Be as a,Fe as b,Ge as c,We as d,me as e,De as f,Ie as g,Re as h,$e as i,je as j,Ye as k,ke as l,Ve as m,qe as n,Pe as o,v as p,U as q,He as r,Ue as s,be as t,Ne as u,ze as v,xe as w,Me as x,Oe as y,V as z};