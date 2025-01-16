import{r as d,b as Hr,R as x,j as A,g as Yr,a as Br}from"./app-4AcUfs3D.js";import{T as Gr,I as Vr}from"./TextInput-BXlczrQq.js";import{I as Xr}from"./InputLabel-BzWg2If8.js";import{s as Pt,K as M,L as _,o as N,y as q,n as J,a as De,b as ve,u as Te,t as St,T as qr,l as kt,p as Kr,f as Mn,O as Bt,c as Ln,i as Ae,d as Qr,z as Dn,F as Ce}from"./transition-BrQ1wYhQ.js";function Re(e){return Pt.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let Zr=d.createContext(void 0);function Jr(){return d.useContext(Zr)}var ea=Hr();let ta="span";var Ie=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(Ie||{});function na(e,t){var n;let{features:r=1,...a}=e,o={ref:t,"aria-hidden":(r&2)===2?!0:(n=a["aria-hidden"])!=null?n:void 0,hidden:(r&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return _()({ourProps:o,theirProps:a,slot:{},defaultTag:ta,name:"Hidden"})}let tt=M(na),Ot=d.createContext(null);Ot.displayName="DescriptionContext";function Rn(){let e=d.useContext(Ot);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,Rn),t}return e}function ra(){let[e,t]=d.useState([]);return[e.length>0?e.join(" "):void 0,d.useMemo(()=>function(n){let r=N(o=>(t(i=>[...i,o]),()=>t(i=>{let s=i.slice(),l=s.indexOf(o);return l!==-1&&s.splice(l,1),s}))),a=d.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props,value:n.value}),[r,n.slot,n.name,n.props,n.value]);return x.createElement(Ot.Provider,{value:a},n.children)},[t])]}let aa="p";function oa(e,t){let n=d.useId(),r=Jr(),{id:a=`headlessui-description-${n}`,...o}=e,i=Rn(),s=q(t);J(()=>i.register(a),[a,i.register]);let l=r||!1,u=d.useMemo(()=>({...i.slot,disabled:l}),[i.slot,l]),c={ref:s,...i.props,id:a};return _()({ourProps:c,theirProps:o,slot:u,defaultTag:aa,name:i.name||"Description"})}let ia=M(oa),sa=Object.assign(ia,{});var _n=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(_n||{});let la=d.createContext(()=>{});function ua({value:e,children:t}){return x.createElement(la.Provider,{value:e},t)}let ca=class extends Map{constructor(t){super(),this.factory=t}get(t){let n=super.get(t);return n===void 0&&(n=this.factory(t),this.set(t,n)),n}};function $n(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(a){return r.add(a),()=>r.delete(a)},dispatch(a,...o){let i=t[a].call(n,...o);i&&(n=i,r.forEach(s=>s()))}}}function jn(e){return d.useSyncExternalStore(e.subscribe,e.getSnapshot,e.getSnapshot)}let fa=new ca(()=>$n(()=>[],{ADD(e){return this.includes(e)?this:[...this,e]},REMOVE(e){let t=this.indexOf(e);if(t===-1)return this;let n=this.slice();return n.splice(t,1),n}}));function ie(e,t){let n=fa.get(t),r=d.useId(),a=jn(n);if(J(()=>{if(e)return n.dispatch("ADD",r),()=>n.dispatch("REMOVE",r)},[n,e]),!e)return!1;let o=a.indexOf(r),i=a.length;return o===-1&&(o=i,i+=1),o===i-1}let nt=new Map,me=new Map;function Gt(e){var t;let n=(t=me.get(e))!=null?t:0;return me.set(e,n+1),n!==0?()=>Vt(e):(nt.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),e.setAttribute("aria-hidden","true"),e.inert=!0,()=>Vt(e))}function Vt(e){var t;let n=(t=me.get(e))!=null?t:1;if(n===1?me.delete(e):me.set(e,n-1),n!==1)return;let r=nt.get(e);r&&(r["aria-hidden"]===null?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",r["aria-hidden"]),e.inert=r.inert,nt.delete(e))}function da(e,{allowed:t,disallowed:n}={}){let r=ie(e,"inert-others");J(()=>{var a,o;if(!r)return;let i=De();for(let l of(a=n==null?void 0:n())!=null?a:[])l&&i.add(Gt(l));let s=(o=t==null?void 0:t())!=null?o:[];for(let l of s){if(!l)continue;let u=Re(l);if(!u)continue;let c=l.parentElement;for(;c&&c!==u.body;){for(let p of c.children)s.some(m=>p.contains(m))||i.add(Gt(p));c=c.parentElement}}return i.dispose},[r,t,n])}function ma(e,t,n){let r=ve(a=>{let o=a.getBoundingClientRect();o.x===0&&o.y===0&&o.width===0&&o.height===0&&n()});d.useEffect(()=>{if(!e)return;let a=t===null?null:t instanceof HTMLElement?t:t.current;if(!a)return;let o=De();if(typeof ResizeObserver<"u"){let i=new ResizeObserver(()=>r.current(a));i.observe(a),o.add(()=>i.disconnect())}if(typeof IntersectionObserver<"u"){let i=new IntersectionObserver(()=>r.current(a));i.observe(a),o.add(()=>i.disconnect())}return()=>o.dispose()},[t,r,e])}let Ne=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(","),pa=["[data-autofocus]"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var $=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e[e.AutoFocus=64]="AutoFocus",e))($||{}),rt=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(rt||{}),ga=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(ga||{});function ha(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(Ne)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}function ya(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(pa)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var zn=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(zn||{});function ba(e,t=0){var n;return e===((n=Re(e))==null?void 0:n.body)?!1:Te(t,{0(){return e.matches(Ne)},1(){let r=e;for(;r!==null;){if(r.matches(Ne))return!0;r=r.parentElement}return!1}})}var va=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(va||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function j(e){e==null||e.focus({preventScroll:!0})}let xa=["textarea","input"].join(",");function wa(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,xa))!=null?n:!1}function Ea(e,t=n=>n){return e.slice().sort((n,r)=>{let a=t(n),o=t(r);if(a===null||o===null)return 0;let i=a.compareDocumentPosition(o);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function pe(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:a=[]}={}){let o=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,i=Array.isArray(e)?n?Ea(e):e:t&64?ya(e):ha(e);a.length>0&&i.length>1&&(i=i.filter(h=>!a.some(b=>b!=null&&"current"in b?(b==null?void 0:b.current)===h:b===h))),r=r??o.activeElement;let s=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),l=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,i.indexOf(r))-1;if(t&4)return Math.max(0,i.indexOf(r))+1;if(t&8)return i.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=t&32?{preventScroll:!0}:{},c=0,p=i.length,m;do{if(c>=p||c+p<=0)return 0;let h=l+c;if(t&16)h=(h+p)%p;else{if(h<0)return 3;if(h>=p)return 1}m=i[h],m==null||m.focus(u),c+=s}while(m!==o.activeElement);return t&6&&wa(m)&&m.select(),2}function Wn(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function Aa(){return/Android/gi.test(window.navigator.userAgent)}function Pa(){return Wn()||Aa()}function ce(e,t,n,r){let a=ve(n);d.useEffect(()=>{if(!e)return;function o(i){a.current(i)}return document.addEventListener(t,o,r),()=>document.removeEventListener(t,o,r)},[e,t,r])}function Un(e,t,n,r){let a=ve(n);d.useEffect(()=>{if(!e)return;function o(i){a.current(i)}return window.addEventListener(t,o,r),()=>window.removeEventListener(t,o,r)},[e,t,r])}const Xt=30;function Sa(e,t,n){let r=ie(e,"outside-click"),a=ve(n),o=d.useCallback(function(l,u){if(l.defaultPrevented)return;let c=u(l);if(c===null||!c.getRootNode().contains(c)||!c.isConnected)return;let p=function m(h){return typeof h=="function"?m(h()):Array.isArray(h)||h instanceof Set?h:[h]}(t);for(let m of p)if(m!==null&&(m.contains(c)||l.composed&&l.composedPath().includes(m)))return;return!ba(c,zn.Loose)&&c.tabIndex!==-1&&l.preventDefault(),a.current(l,c)},[a,t]),i=d.useRef(null);ce(r,"pointerdown",l=>{var u,c;i.current=((c=(u=l.composedPath)==null?void 0:u.call(l))==null?void 0:c[0])||l.target},!0),ce(r,"mousedown",l=>{var u,c;i.current=((c=(u=l.composedPath)==null?void 0:u.call(l))==null?void 0:c[0])||l.target},!0),ce(r,"click",l=>{Pa()||i.current&&(o(l,()=>i.current),i.current=null)},!0);let s=d.useRef({x:0,y:0});ce(r,"touchstart",l=>{s.current.x=l.touches[0].clientX,s.current.y=l.touches[0].clientY},!0),ce(r,"touchend",l=>{let u={x:l.changedTouches[0].clientX,y:l.changedTouches[0].clientY};if(!(Math.abs(u.x-s.current.x)>=Xt||Math.abs(u.y-s.current.y)>=Xt))return o(l,()=>l.target instanceof HTMLElement?l.target:null)},!0),Un(r,"blur",l=>o(l,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function xe(...e){return d.useMemo(()=>Re(...e),[...e])}function Hn(e,t,n,r){let a=ve(n);d.useEffect(()=>{e=e??window;function o(i){a.current(i)}return e.addEventListener(t,o,r),()=>e.removeEventListener(t,o,r)},[e,t,r])}function ka(){let e;return{before({doc:t}){var n;let r=t.documentElement,a=(n=t.defaultView)!=null?n:window;e=Math.max(0,a.innerWidth-r.clientWidth)},after({doc:t,d:n}){let r=t.documentElement,a=Math.max(0,r.clientWidth-r.offsetWidth),o=Math.max(0,e-a);n.style(r,"paddingRight",`${o}px`)}}}function Oa(){return Wn()?{before({doc:e,d:t,meta:n}){function r(a){return n.containers.flatMap(o=>o()).some(o=>o.contains(a))}t.microTask(()=>{var a;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let s=De();s.style(e.documentElement,"scrollBehavior","auto"),t.add(()=>t.microTask(()=>s.dispose()))}let o=(a=window.scrollY)!=null?a:window.pageYOffset,i=null;t.addEventListener(e,"click",s=>{if(s.target instanceof HTMLElement)try{let l=s.target.closest("a");if(!l)return;let{hash:u}=new URL(l.href),c=e.querySelector(u);c&&!r(c)&&(i=c)}catch{}},!0),t.addEventListener(e,"touchstart",s=>{if(s.target instanceof HTMLElement)if(r(s.target)){let l=s.target;for(;l.parentElement&&r(l.parentElement);)l=l.parentElement;t.style(l,"overscrollBehavior","contain")}else t.style(s.target,"touchAction","none")}),t.addEventListener(e,"touchmove",s=>{if(s.target instanceof HTMLElement){if(s.target.tagName==="INPUT")return;if(r(s.target)){let l=s.target;for(;l.parentElement&&l.dataset.headlessuiPortal!==""&&!(l.scrollHeight>l.clientHeight||l.scrollWidth>l.clientWidth);)l=l.parentElement;l.dataset.headlessuiPortal===""&&s.preventDefault()}else s.preventDefault()}},{passive:!1}),t.add(()=>{var s;let l=(s=window.scrollY)!=null?s:window.pageYOffset;o!==l&&window.scrollTo(0,o),i&&i.isConnected&&(i.scrollIntoView({block:"nearest"}),i=null)})})}}:{}}function Ta(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function Ca(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let Q=$n(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:De(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:Ca(n)},a=[Oa(),ka(),Ta()];a.forEach(({before:o})=>o==null?void 0:o(r)),a.forEach(({after:o})=>o==null?void 0:o(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});Q.subscribe(()=>{let e=Q.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",a=n.count!==0;(a&&!r||!a&&r)&&Q.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&Q.dispatch("TEARDOWN",n)}});function Ia(e,t,n=()=>({containers:[]})){let r=jn(Q),a=t?r.get(t):void 0,o=a?a.count>0:!1;return J(()=>{if(!(!t||!e))return Q.dispatch("PUSH",t,n),()=>Q.dispatch("POP",t,n)},[e,t]),o}function Na(e,t,n=()=>[document.body]){let r=ie(e,"scroll-lock");Ia(r,t,a=>{var o;return{containers:[...(o=a.containers)!=null?o:[],n]}})}function Tt(e,t){let n=d.useRef([]),r=N(e);d.useEffect(()=>{let a=[...n.current];for(let[o,i]of t.entries())if(n.current[o]!==i){let s=r(t,a);return n.current=t,s}},[r,...t])}function Fa(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}let B=[];Fa(()=>{function e(t){if(!(t.target instanceof HTMLElement)||t.target===document.body||B[0]===t.target)return;let n=t.target;n=n.closest(Ne),B.unshift(n??t.target),B=B.filter(r=>r!=null&&r.isConnected),B.splice(10)}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function Yn(e){let t=N(e),n=d.useRef(!1);d.useEffect(()=>(n.current=!1,()=>{n.current=!0,St(()=>{n.current&&t()})}),[t])}let Bn=d.createContext(!1);function Ma(){return d.useContext(Bn)}function qt(e){return x.createElement(Bn.Provider,{value:e.force},e.children)}function La(e){let t=Ma(),n=d.useContext(Vn),r=xe(e),[a,o]=d.useState(()=>{var i;if(!t&&n!==null)return(i=n.current)!=null?i:null;if(Pt.isServer)return null;let s=r==null?void 0:r.getElementById("headlessui-portal-root");if(s)return s;if(r===null)return null;let l=r.createElement("div");return l.setAttribute("id","headlessui-portal-root"),r.body.appendChild(l)});return d.useEffect(()=>{a!==null&&(r!=null&&r.body.contains(a)||r==null||r.body.appendChild(a))},[a,r]),d.useEffect(()=>{t||n!==null&&o(n.current)},[n,o,t]),a}let Gn=d.Fragment,Da=M(function(e,t){let n=e,r=d.useRef(null),a=q(qr(p=>{r.current=p}),t),o=xe(r),i=La(r),[s]=d.useState(()=>{var p;return Pt.isServer?null:(p=o==null?void 0:o.createElement("div"))!=null?p:null}),l=d.useContext(at),u=kt();J(()=>{!i||!s||i.contains(s)||(s.setAttribute("data-headlessui-portal",""),i.appendChild(s))},[i,s]),J(()=>{if(s&&l)return l.register(s)},[l,s]),Yn(()=>{var p;!i||!s||(s instanceof Node&&i.contains(s)&&i.removeChild(s),i.childNodes.length<=0&&((p=i.parentElement)==null||p.removeChild(i)))});let c=_();return u?!i||!s?null:ea.createPortal(c({ourProps:{ref:a},theirProps:n,slot:{},defaultTag:Gn,name:"Portal"}),s):null});function Ra(e,t){let n=q(t),{enabled:r=!0,...a}=e,o=_();return r?x.createElement(Da,{...a,ref:n}):o({ourProps:{ref:n},theirProps:a,slot:{},defaultTag:Gn,name:"Portal"})}let _a=d.Fragment,Vn=d.createContext(null);function $a(e,t){let{target:n,...r}=e,a={ref:q(t)},o=_();return x.createElement(Vn.Provider,{value:n},o({ourProps:a,theirProps:r,defaultTag:_a,name:"Popover.Group"}))}let at=d.createContext(null);function ja(){let e=d.useContext(at),t=d.useRef([]),n=N(o=>(t.current.push(o),e&&e.register(o),()=>r(o))),r=N(o=>{let i=t.current.indexOf(o);i!==-1&&t.current.splice(i,1),e&&e.unregister(o)}),a=d.useMemo(()=>({register:n,unregister:r,portals:t}),[n,r,t]);return[t,d.useMemo(()=>function({children:o}){return x.createElement(at.Provider,{value:a},o)},[a])]}let za=M(Ra),Xn=M($a),Wa=Object.assign(za,{Group:Xn});function Ua(e,t=typeof document<"u"?document.defaultView:null,n){let r=ie(e,"escape");Hn(t,"keydown",a=>{r&&(a.defaultPrevented||a.key===_n.Escape&&n(a))})}function Ha(){var e;let[t]=d.useState(()=>typeof window<"u"&&typeof window.matchMedia=="function"?window.matchMedia("(pointer: coarse)"):null),[n,r]=d.useState((e=t==null?void 0:t.matches)!=null?e:!1);return J(()=>{if(!t)return;function a(o){r(o.matches)}return t.addEventListener("change",a),()=>t.removeEventListener("change",a)},[t]),n}function Ya({defaultContainers:e=[],portals:t,mainTreeNode:n}={}){let r=xe(n),a=N(()=>{var o,i;let s=[];for(let l of e)l!==null&&(l instanceof HTMLElement?s.push(l):"current"in l&&l.current instanceof HTMLElement&&s.push(l.current));if(t!=null&&t.current)for(let l of t.current)s.push(l);for(let l of(o=r==null?void 0:r.querySelectorAll("html > *, body > *"))!=null?o:[])l!==document.body&&l!==document.head&&l instanceof HTMLElement&&l.id!=="headlessui-portal-root"&&(n&&(l.contains(n)||l.contains((i=n==null?void 0:n.getRootNode())==null?void 0:i.host))||s.some(u=>l.contains(u))||s.push(l));return s});return{resolveContainers:a,contains:N(o=>a().some(i=>i.contains(o)))}}let qn=d.createContext(null);function Kt({children:e,node:t}){let[n,r]=d.useState(null),a=Kn(t??n);return x.createElement(qn.Provider,{value:a},e,a===null&&x.createElement(tt,{features:Ie.Hidden,ref:o=>{var i,s;if(o){for(let l of(s=(i=Re(o))==null?void 0:i.querySelectorAll("html > *, body > *"))!=null?s:[])if(l!==document.body&&l!==document.head&&l instanceof HTMLElement&&l!=null&&l.contains(o)){r(l);break}}}}))}function Kn(e=null){var t;return(t=d.useContext(qn))!=null?t:e}var fe=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(fe||{});function Ba(){let e=d.useRef(0);return Un(!0,"keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function Qn(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}let Ga="div";var K=(e=>(e[e.None=0]="None",e[e.InitialFocus=1]="InitialFocus",e[e.TabLock=2]="TabLock",e[e.FocusLock=4]="FocusLock",e[e.RestoreFocus=8]="RestoreFocus",e[e.AutoFocus=16]="AutoFocus",e))(K||{});function Va(e,t){let n=d.useRef(null),r=q(n,t),{initialFocus:a,initialFocusFallback:o,containers:i,features:s=15,...l}=e;kt()||(s=0);let u=xe(n);Qa(s,{ownerDocument:u});let c=Za(s,{ownerDocument:u,container:n,initialFocus:a,initialFocusFallback:o});Ja(s,{ownerDocument:u,container:n,containers:i,previousActiveElement:c});let p=Ba(),m=N(v=>{let S=n.current;S&&(O=>O())(()=>{Te(p.current,{[fe.Forwards]:()=>{pe(S,$.First,{skipElements:[v.relatedTarget,o]})},[fe.Backwards]:()=>{pe(S,$.Last,{skipElements:[v.relatedTarget,o]})}})})}),h=ie(!!(s&2),"focus-trap#tab-lock"),b=Kr(),k=d.useRef(!1),w={ref:r,onKeyDown(v){v.key=="Tab"&&(k.current=!0,b.requestAnimationFrame(()=>{k.current=!1}))},onBlur(v){if(!(s&4))return;let S=Qn(i);n.current instanceof HTMLElement&&S.add(n.current);let O=v.relatedTarget;O instanceof HTMLElement&&O.dataset.headlessuiFocusGuard!=="true"&&(Zn(S,O)||(k.current?pe(n.current,Te(p.current,{[fe.Forwards]:()=>$.Next,[fe.Backwards]:()=>$.Previous})|$.WrapAround,{relativeTo:v.target}):v.target instanceof HTMLElement&&j(v.target)))}},E=_();return x.createElement(x.Fragment,null,h&&x.createElement(tt,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:m,features:Ie.Focusable}),E({ourProps:w,theirProps:l,defaultTag:Ga,name:"FocusTrap"}),h&&x.createElement(tt,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:m,features:Ie.Focusable}))}let Xa=M(Va),qa=Object.assign(Xa,{features:K});function Ka(e=!0){let t=d.useRef(B.slice());return Tt(([n],[r])=>{r===!0&&n===!1&&St(()=>{t.current.splice(0)}),r===!1&&n===!0&&(t.current=B.slice())},[e,B,t]),N(()=>{var n;return(n=t.current.find(r=>r!=null&&r.isConnected))!=null?n:null})}function Qa(e,{ownerDocument:t}){let n=!!(e&8),r=Ka(n);Tt(()=>{n||(t==null?void 0:t.activeElement)===(t==null?void 0:t.body)&&j(r())},[n]),Yn(()=>{n&&j(r())})}function Za(e,{ownerDocument:t,container:n,initialFocus:r,initialFocusFallback:a}){let o=d.useRef(null),i=ie(!!(e&1),"focus-trap#initial-focus"),s=Mn();return Tt(()=>{if(e===0)return;if(!i){a!=null&&a.current&&j(a.current);return}let l=n.current;l&&St(()=>{if(!s.current)return;let u=t==null?void 0:t.activeElement;if(r!=null&&r.current){if((r==null?void 0:r.current)===u){o.current=u;return}}else if(l.contains(u)){o.current=u;return}if(r!=null&&r.current)j(r.current);else{if(e&16){if(pe(l,$.First|$.AutoFocus)!==rt.Error)return}else if(pe(l,$.First)!==rt.Error)return;if(a!=null&&a.current&&(j(a.current),(t==null?void 0:t.activeElement)===a.current))return;console.warn("There are no focusable elements inside the <FocusTrap />")}o.current=t==null?void 0:t.activeElement})},[a,i,e]),o}function Ja(e,{ownerDocument:t,container:n,containers:r,previousActiveElement:a}){let o=Mn(),i=!!(e&4);Hn(t==null?void 0:t.defaultView,"focus",s=>{if(!i||!o.current)return;let l=Qn(r);n.current instanceof HTMLElement&&l.add(n.current);let u=a.current;if(!u)return;let c=s.target;c&&c instanceof HTMLElement?Zn(l,c)?(a.current=c,j(c)):(s.preventDefault(),s.stopPropagation(),j(u)):j(a.current)},!0)}function Zn(e,t){for(let n of e)if(n.contains(t))return!0;return!1}var eo=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(eo||{}),to=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(to||{});let no={0(e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},Ct=d.createContext(null);Ct.displayName="DialogContext";function _e(e){let t=d.useContext(Ct);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,_e),n}return t}function ro(e,t){return Te(t.type,no,e,t)}let Qt=M(function(e,t){let n=d.useId(),{id:r=`headlessui-dialog-${n}`,open:a,onClose:o,initialFocus:i,role:s="dialog",autoFocus:l=!0,__demoMode:u=!1,unmount:c=!1,...p}=e,m=d.useRef(!1);s=function(){return s==="dialog"||s==="alertdialog"?s:(m.current||(m.current=!0,console.warn(`Invalid role [${s}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")}();let h=Ln();a===void 0&&h!==null&&(a=(h&Ae.Open)===Ae.Open);let b=d.useRef(null),k=q(b,t),w=xe(b),E=a?0:1,[v,S]=d.useReducer(ro,{titleId:null,descriptionId:null,panelRef:d.createRef()}),O=N(()=>o(!1)),I=N(C=>S({type:0,id:C})),H=kt()?E===0:!1,[le,He]=ja(),Rr={get current(){var C;return(C=v.panelRef.current)!=null?C:b.current}},Ye=Kn(),{resolveContainers:Be}=Ya({mainTreeNode:Ye,portals:le,defaultContainers:[Rr]}),Ut=h!==null?(h&Ae.Closing)===Ae.Closing:!1;da(u||Ut?!1:H,{allowed:N(()=>{var C,Yt;return[(Yt=(C=b.current)==null?void 0:C.closest("[data-headlessui-portal]"))!=null?Yt:null]}),disallowed:N(()=>{var C;return[(C=Ye==null?void 0:Ye.closest("body > *:not(#headlessui-portal-root)"))!=null?C:null]})}),Sa(H,Be,C=>{C.preventDefault(),O()}),Ua(H,w==null?void 0:w.defaultView,C=>{C.preventDefault(),C.stopPropagation(),document.activeElement&&"blur"in document.activeElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur(),O()}),Na(u||Ut?!1:H,w,Be),ma(H,b,O);let[_r,$r]=ra(),jr=d.useMemo(()=>[{dialogState:E,close:O,setTitleId:I,unmount:c},v],[E,v,O,I,c]),Ht=d.useMemo(()=>({open:E===0}),[E]),zr={ref:k,id:r,role:s,tabIndex:-1,"aria-modal":u?void 0:E===0?!0:void 0,"aria-labelledby":v.titleId,"aria-describedby":_r,unmount:c},Wr=!Ha(),ue=K.None;H&&!u&&(ue|=K.RestoreFocus,ue|=K.TabLock,l&&(ue|=K.AutoFocus),Wr&&(ue|=K.InitialFocus));let Ur=_();return x.createElement(Qr,null,x.createElement(qt,{force:!0},x.createElement(Wa,null,x.createElement(Ct.Provider,{value:jr},x.createElement(Xn,{target:b},x.createElement(qt,{force:!1},x.createElement($r,{slot:Ht},x.createElement(He,null,x.createElement(qa,{initialFocus:i,initialFocusFallback:b,containers:Be,features:ue},x.createElement(ua,{value:O},Ur({ourProps:zr,theirProps:p,slot:Ht,defaultTag:ao,features:oo,visible:E===0,name:"Dialog"})))))))))))}),ao="div",oo=Bt.RenderStrategy|Bt.Static;function io(e,t){let{transition:n=!1,open:r,...a}=e,o=Ln(),i=e.hasOwnProperty("open")||o!==null,s=e.hasOwnProperty("onClose");if(!i&&!s)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!i)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!s)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(!o&&typeof e.open!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e.open}`);if(typeof e.onClose!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e.onClose}`);return(r!==void 0||n)&&!a.static?x.createElement(Kt,null,x.createElement(Dn,{show:r,transition:n,unmount:a.unmount},x.createElement(Qt,{ref:t,...a}))):x.createElement(Kt,null,x.createElement(Qt,{ref:t,open:r,...a}))}let so="div";function lo(e,t){let n=d.useId(),{id:r=`headlessui-dialog-panel-${n}`,transition:a=!1,...o}=e,[{dialogState:i,unmount:s},l]=_e("Dialog.Panel"),u=q(t,l.panelRef),c=d.useMemo(()=>({open:i===0}),[i]),p=N(w=>{w.stopPropagation()}),m={ref:u,id:r,onClick:p},h=a?Ce:d.Fragment,b=a?{unmount:s}:{},k=_();return x.createElement(h,{...b},k({ourProps:m,theirProps:o,slot:c,defaultTag:so,name:"Dialog.Panel"}))}let uo="div";function co(e,t){let{transition:n=!1,...r}=e,[{dialogState:a,unmount:o}]=_e("Dialog.Backdrop"),i=d.useMemo(()=>({open:a===0}),[a]),s={ref:t,"aria-hidden":!0},l=n?Ce:d.Fragment,u=n?{unmount:o}:{},c=_();return x.createElement(l,{...u},c({ourProps:s,theirProps:r,slot:i,defaultTag:uo,name:"Dialog.Backdrop"}))}let fo="h2";function mo(e,t){let n=d.useId(),{id:r=`headlessui-dialog-title-${n}`,...a}=e,[{dialogState:o,setTitleId:i}]=_e("Dialog.Title"),s=q(t);d.useEffect(()=>(i(r),()=>i(null)),[r,i]);let l=d.useMemo(()=>({open:o===0}),[o]),u={ref:s,id:r};return _()({ourProps:u,theirProps:a,slot:l,defaultTag:fo,name:"Dialog.Title"})}let po=M(io),Jn=M(lo);M(co);let go=M(mo),ho=Object.assign(po,{Panel:Jn,Title:go,Description:sa});function Zt({className:e="",disabled:t,children:n,...r}){return A.jsx("button",{...r,className:`inline-flex items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-700 ${t&&"opacity-25"} `+e,disabled:t,children:n})}/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function yo(e,t,n){return(t=vo(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Jt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Jt(Object(n),!0).forEach(function(r){yo(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Jt(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function bo(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function vo(e){var t=bo(e,"string");return typeof t=="symbol"?t:t+""}const en=()=>{};let It={},er={},tr=null,nr={mark:en,measure:en};try{typeof window<"u"&&(It=window),typeof document<"u"&&(er=document),typeof MutationObserver<"u"&&(tr=MutationObserver),typeof performance<"u"&&(nr=performance)}catch{}const{userAgent:tn=""}=It.navigator||{},G=It,P=er,nn=tr,Pe=nr;G.document;const U=!!P.documentElement&&!!P.head&&typeof P.addEventListener=="function"&&typeof P.createElement=="function",rr=~tn.indexOf("MSIE")||~tn.indexOf("Trident/");var xo=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,wo=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,ar={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Eo={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},or=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],T="classic",$e="duotone",Ao="sharp",Po="sharp-duotone",ir=[T,$e,Ao,Po],So={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},ko={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Oo=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),To={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Co=["fak","fa-kit","fakd","fa-kit-duotone"],rn={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Io=["kit"],No={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Fo=["fak","fakd"],Mo={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},an={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Se={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Lo=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Do=["fak","fa-kit","fakd","fa-kit-duotone"],Ro={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},_o={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},$o={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},ot={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},jo=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],it=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Lo,...jo],zo=["solid","regular","light","thin","duotone","brands"],sr=[1,2,3,4,5,6,7,8,9,10],Wo=sr.concat([11,12,13,14,15,16,17,18,19,20]),Uo=[...Object.keys($o),...zo,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Se.GROUP,Se.SWAP_OPACITY,Se.PRIMARY,Se.SECONDARY].concat(sr.map(e=>"".concat(e,"x"))).concat(Wo.map(e=>"w-".concat(e))),Ho={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const z="___FONT_AWESOME___",st=16,lr="fa",ur="svg-inline--fa",ee="data-fa-i2svg",lt="data-fa-pseudo-element",Yo="data-fa-pseudo-element-pending",Nt="data-prefix",Ft="data-icon",on="fontawesome-i2svg",Bo="async",Go=["HTML","HEAD","STYLE","SCRIPT"],cr=(()=>{try{return!0}catch{return!1}})();function we(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[T]}})}const fr=f({},ar);fr[T]=f(f(f(f({},{"fa-duotone":"duotone"}),ar[T]),rn.kit),rn["kit-duotone"]);const Vo=we(fr),ut=f({},To);ut[T]=f(f(f(f({},{duotone:"fad"}),ut[T]),an.kit),an["kit-duotone"]);const sn=we(ut),ct=f({},ot);ct[T]=f(f({},ct[T]),Mo.kit);const Mt=we(ct),ft=f({},_o);ft[T]=f(f({},ft[T]),No.kit);we(ft);const Xo=xo,dr="fa-layers-text",qo=wo,Ko=f({},So);we(Ko);const Qo=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ge=Eo,Zo=[...Io,...Uo],ge=G.FontAwesomeConfig||{};function Jo(e){var t=P.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function ei(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}P&&typeof P.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,r]=t;const a=ei(Jo(n));a!=null&&(ge[r]=a)});const mr={styleDefault:"solid",familyDefault:T,cssPrefix:lr,replacementClass:ur,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ge.familyPrefix&&(ge.cssPrefix=ge.familyPrefix);const oe=f(f({},mr),ge);oe.autoReplaceSvg||(oe.observeMutations=!1);const g={};Object.keys(mr).forEach(e=>{Object.defineProperty(g,e,{enumerable:!0,set:function(t){oe[e]=t,he.forEach(n=>n(g))},get:function(){return oe[e]}})});Object.defineProperty(g,"familyPrefix",{enumerable:!0,set:function(e){oe.cssPrefix=e,he.forEach(t=>t(g))},get:function(){return oe.cssPrefix}});G.FontAwesomeConfig=g;const he=[];function ti(e){return he.push(e),()=>{he.splice(he.indexOf(e),1)}}const Y=st,D={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ni(e){if(!e||!U)return;const t=P.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=P.head.childNodes;let r=null;for(let a=n.length-1;a>-1;a--){const o=n[a],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=o)}return P.head.insertBefore(t,r),e}const ri="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ye(){let e=12,t="";for(;e-- >0;)t+=ri[Math.random()*62|0];return t}function se(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Lt(e){return e.classList?se(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function pr(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ai(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(pr(e[n]),'" '),"").trim()}function je(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function Dt(e){return e.size!==D.size||e.x!==D.x||e.y!==D.y||e.rotate!==D.rotate||e.flipX||e.flipY}function oi(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const a={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(o," ").concat(i," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:u}}function ii(e){let{transform:t,width:n=st,height:r=st,startCentered:a=!1}=e,o="";return a&&rr?o+="translate(".concat(t.x/Y-n/2,"em, ").concat(t.y/Y-r/2,"em) "):a?o+="translate(calc(-50% + ".concat(t.x/Y,"em), calc(-50% + ").concat(t.y/Y,"em)) "):o+="translate(".concat(t.x/Y,"em, ").concat(t.y/Y,"em) "),o+="scale(".concat(t.size/Y*(t.flipX?-1:1),", ").concat(t.size/Y*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var si=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function gr(){const e=lr,t=ur,n=g.cssPrefix,r=g.replacementClass;let a=si;if(n!==e||r!==t){const o=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(o,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(s,".".concat(r))}return a}let ln=!1;function Ve(){g.autoAddCss&&!ln&&(ni(gr()),ln=!0)}var li={mixout(){return{dom:{css:gr,insertCss:Ve}}},hooks(){return{beforeDOMElementCreation(){Ve()},beforeI2svg(){Ve()}}}};const W=G||{};W[z]||(W[z]={});W[z].styles||(W[z].styles={});W[z].hooks||(W[z].hooks={});W[z].shims||(W[z].shims=[]);var R=W[z];const hr=[],yr=function(){P.removeEventListener("DOMContentLoaded",yr),Fe=1,hr.map(e=>e())};let Fe=!1;U&&(Fe=(P.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(P.readyState),Fe||P.addEventListener("DOMContentLoaded",yr));function ui(e){U&&(Fe?setTimeout(e,0):hr.push(e))}function Ee(e){const{tag:t,attributes:n={},children:r=[]}=e;return typeof e=="string"?pr(e):"<".concat(t," ").concat(ai(n),">").concat(r.map(Ee).join(""),"</").concat(t,">")}function un(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Xe=function(t,n,r,a){var o=Object.keys(t),i=o.length,s=n,l,u,c;for(r===void 0?(l=1,c=t[o[0]]):(l=0,c=r);l<i;l++)u=o[l],c=s(c,t[u],u,t);return c};function ci(e){const t=[];let n=0;const r=e.length;for(;n<r;){const a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){const o=e.charCodeAt(n++);(o&64512)==56320?t.push(((a&1023)<<10)+(o&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function dt(e){const t=ci(e);return t.length===1?t[0].toString(16):null}function fi(e,t){const n=e.length;let r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function cn(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function mt(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,a=cn(t);typeof R.hooks.addPack=="function"&&!r?R.hooks.addPack(e,cn(t)):R.styles[e]=f(f({},R.styles[e]||{}),a),e==="fas"&&mt("fa",t)}const{styles:be,shims:di}=R,br=Object.keys(Mt),mi=br.reduce((e,t)=>(e[t]=Object.keys(Mt[t]),e),{});let Rt=null,vr={},xr={},wr={},Er={},Ar={};function pi(e){return~Zo.indexOf(e)}function gi(e,t){const n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!pi(a)?a:null}const Pr=()=>{const e=r=>Xe(be,(a,o,i)=>(a[i]=Xe(o,r,{}),a),{});vr=e((r,a,o)=>(a[3]&&(r[a[3]]=o),a[2]&&a[2].filter(s=>typeof s=="number").forEach(s=>{r[s.toString(16)]=o}),r)),xr=e((r,a,o)=>(r[o]=o,a[2]&&a[2].filter(s=>typeof s=="string").forEach(s=>{r[s]=o}),r)),Ar=e((r,a,o)=>{const i=a[2];return r[o]=o,i.forEach(s=>{r[s]=o}),r});const t="far"in be||g.autoFetchSvg,n=Xe(di,(r,a)=>{const o=a[0];let i=a[1];const s=a[2];return i==="far"&&!t&&(i="fas"),typeof o=="string"&&(r.names[o]={prefix:i,iconName:s}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:i,iconName:s}),r},{names:{},unicodes:{}});wr=n.names,Er=n.unicodes,Rt=ze(g.styleDefault,{family:g.familyDefault})};ti(e=>{Rt=ze(e.styleDefault,{family:g.familyDefault})});Pr();function _t(e,t){return(vr[e]||{})[t]}function hi(e,t){return(xr[e]||{})[t]}function Z(e,t){return(Ar[e]||{})[t]}function Sr(e){return wr[e]||{prefix:null,iconName:null}}function yi(e){const t=Er[e],n=_t("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function V(){return Rt}const kr=()=>({prefix:null,iconName:null,rest:[]});function bi(e){let t=T;const n=br.reduce((r,a)=>(r[a]="".concat(g.cssPrefix,"-").concat(a),r),{});return ir.forEach(r=>{(e.includes(n[r])||e.some(a=>mi[r].includes(a)))&&(t=r)}),t}function ze(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=T}=t,r=Vo[n][e];if(n===$e&&!e)return"fad";const a=sn[n][e]||sn[n][r],o=e in R.styles?e:null;return a||o||null}function vi(e){let t=[],n=null;return e.forEach(r=>{const a=gi(g.cssPrefix,r);a?n=a:r&&t.push(r)}),{iconName:n,rest:t}}function fn(e){return e.sort().filter((t,n,r)=>r.indexOf(t)===n)}function We(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t;let r=null;const a=it.concat(Do),o=fn(e.filter(p=>a.includes(p))),i=fn(e.filter(p=>!it.includes(p))),s=o.filter(p=>(r=p,!or.includes(p))),[l=null]=s,u=bi(o),c=f(f({},vi(i)),{},{prefix:ze(l,{family:u})});return f(f(f({},c),Ai({values:e,family:u,styles:be,config:g,canonical:c,givenPrefix:r})),xi(n,r,c))}function xi(e,t,n){let{prefix:r,iconName:a}=n;if(e||!r||!a)return{prefix:r,iconName:a};const o=t==="fa"?Sr(a):{},i=Z(r,a);return a=o.iconName||i||a,r=o.prefix||r,r==="far"&&!be.far&&be.fas&&!g.autoFetchSvg&&(r="fas"),{prefix:r,iconName:a}}const wi=ir.filter(e=>e!==T||e!==$e),Ei=Object.keys(ot).filter(e=>e!==T).map(e=>Object.keys(ot[e])).flat();function Ai(e){const{values:t,family:n,canonical:r,givenPrefix:a="",styles:o={},config:i={}}=e,s=n===$e,l=t.includes("fa-duotone")||t.includes("fad"),u=i.familyDefault==="duotone",c=r.prefix==="fad"||r.prefix==="fa-duotone";if(!s&&(l||u||c)&&(r.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab"),!r.prefix&&wi.includes(n)&&(Object.keys(o).find(m=>Ei.includes(m))||i.autoFetchSvg)){const m=Oo.get(n).defaultShortPrefixId;r.prefix=m,r.iconName=Z(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||a==="fa")&&(r.prefix=V()||"fas"),r}class Pi{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const a=n.reduce(this._pullDefinitions,{});Object.keys(a).forEach(o=>{this.definitions[o]=f(f({},this.definitions[o]||{}),a[o]),mt(o,a[o]);const i=Mt[T][o];i&&mt(i,a[o]),Pr()})}reset(){this.definitions={}}_pullDefinitions(t,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(a=>{const{prefix:o,iconName:i,icon:s}=r[a],l=s[2];t[o]||(t[o]={}),l.length>0&&l.forEach(u=>{typeof u=="string"&&(t[o][u]=s)}),t[o][i]=s}),t}}let dn=[],ne={};const ae={},Si=Object.keys(ae);function ki(e,t){let{mixoutsTo:n}=t;return dn=e,ne={},Object.keys(ae).forEach(r=>{Si.indexOf(r)===-1&&delete ae[r]}),dn.forEach(r=>{const a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(o=>{typeof a[o]=="function"&&(n[o]=a[o]),typeof a[o]=="object"&&Object.keys(a[o]).forEach(i=>{n[o]||(n[o]={}),n[o][i]=a[o][i]})}),r.hooks){const o=r.hooks();Object.keys(o).forEach(i=>{ne[i]||(ne[i]=[]),ne[i].push(o[i])})}r.provides&&r.provides(ae)}),n}function pt(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return(ne[e]||[]).forEach(i=>{t=i.apply(null,[t,...r])}),t}function te(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(ne[e]||[]).forEach(o=>{o.apply(null,n)})}function X(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return ae[e]?ae[e].apply(null,t):void 0}function gt(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||V();if(t)return t=Z(n,t)||t,un(Or.definitions,n,t)||un(R.styles,n,t)}const Or=new Pi,Oi=()=>{g.autoReplaceSvg=!1,g.observeMutations=!1,te("noAuto")},Ti={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return U?(te("beforeI2svg",e),X("pseudoElements2svg",e),X("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;g.autoReplaceSvg===!1&&(g.autoReplaceSvg=!0),g.observeMutations=!0,ui(()=>{Ii({autoReplaceSvgRoot:t}),te("watch",e)})}},Ci={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Z(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=ze(e[0]);return{prefix:n,iconName:Z(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(g.cssPrefix,"-"))>-1||e.match(Xo))){const t=We(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||V(),iconName:Z(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=V();return{prefix:t,iconName:Z(t,e)||e}}}},F={noAuto:Oi,config:g,dom:Ti,parse:Ci,library:Or,findIconDefinition:gt,toHtml:Ee},Ii=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=P}=e;(Object.keys(R.styles).length>0||g.autoFetchSvg)&&U&&g.autoReplaceSvg&&F.dom.i2svg({node:t})};function Ue(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>Ee(n))}}),Object.defineProperty(e,"node",{get:function(){if(!U)return;const n=P.createElement("div");return n.innerHTML=e.html,n.children}}),e}function Ni(e){let{children:t,main:n,mask:r,attributes:a,styles:o,transform:i}=e;if(Dt(i)&&n.found&&!r.found){const{width:s,height:l}=n,u={x:s/l/2,y:.5};a.style=je(f(f({},o),{},{"transform-origin":"".concat(u.x+i.x/16,"em ").concat(u.y+i.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Fi(e){let{prefix:t,iconName:n,children:r,attributes:a,symbol:o}=e;const i=o===!0?"".concat(t,"-").concat(g.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},a),{},{id:i}),children:r}]}]}function $t(e){const{icons:{main:t,mask:n},prefix:r,iconName:a,transform:o,symbol:i,title:s,maskId:l,titleId:u,extra:c,watchable:p=!1}=e,{width:m,height:h}=n.found?n:t,b=Fo.includes(r),k=[g.replacementClass,a?"".concat(g.cssPrefix,"-").concat(a):""].filter(I=>c.classes.indexOf(I)===-1).filter(I=>I!==""||!!I).concat(c.classes).join(" ");let w={children:[],attributes:f(f({},c.attributes),{},{"data-prefix":r,"data-icon":a,class:k,role:c.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(h)})};const E=b&&!~c.classes.indexOf("fa-fw")?{width:"".concat(m/h*16*.0625,"em")}:{};p&&(w.attributes[ee]=""),s&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(u||ye())},children:[s]}),delete w.attributes.title);const v=f(f({},w),{},{prefix:r,iconName:a,main:t,mask:n,maskId:l,transform:o,symbol:i,styles:f(f({},E),c.styles)}),{children:S,attributes:O}=n.found&&t.found?X("generateAbstractMask",v)||{children:[],attributes:{}}:X("generateAbstractIcon",v)||{children:[],attributes:{}};return v.children=S,v.attributes=O,i?Fi(v):Ni(v)}function mn(e){const{content:t,width:n,height:r,transform:a,title:o,extra:i,watchable:s=!1}=e,l=f(f(f({},i.attributes),o?{title:o}:{}),{},{class:i.classes.join(" ")});s&&(l[ee]="");const u=f({},i.styles);Dt(a)&&(u.transform=ii({transform:a,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const c=je(u);c.length>0&&(l.style=c);const p=[];return p.push({tag:"span",attributes:l,children:[t]}),o&&p.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),p}function Mi(e){const{content:t,title:n,extra:r}=e,a=f(f(f({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=je(r.styles);o.length>0&&(a.style=o);const i=[];return i.push({tag:"span",attributes:a,children:[t]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}const{styles:qe}=R;function ht(e){const t=e[0],n=e[1],[r]=e.slice(4);let a=null;return Array.isArray(r)?a={tag:"g",attributes:{class:"".concat(g.cssPrefix,"-").concat(Ge.GROUP)},children:[{tag:"path",attributes:{class:"".concat(g.cssPrefix,"-").concat(Ge.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(g.cssPrefix,"-").concat(Ge.PRIMARY),fill:"currentColor",d:r[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:a}}const Li={found:!1,width:512,height:512};function Di(e,t){!cr&&!g.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function yt(e,t){let n=t;return t==="fa"&&g.styleDefault!==null&&(t=V()),new Promise((r,a)=>{if(n==="fa"){const o=Sr(e);e=o.iconName||e,t=o.prefix||t}if(e&&t&&qe[t]&&qe[t][e]){const o=qe[t][e];return r(ht(o))}Di(e,t),r(f(f({},Li),{},{icon:g.showMissingIcons&&e?X("missingIconAbstract")||{}:{}}))})}const pn=()=>{},bt=g.measurePerformance&&Pe&&Pe.mark&&Pe.measure?Pe:{mark:pn,measure:pn},de='FA "6.7.2"',Ri=e=>(bt.mark("".concat(de," ").concat(e," begins")),()=>Tr(e)),Tr=e=>{bt.mark("".concat(de," ").concat(e," ends")),bt.measure("".concat(de," ").concat(e),"".concat(de," ").concat(e," begins"),"".concat(de," ").concat(e," ends"))};var jt={begin:Ri,end:Tr};const ke=()=>{};function gn(e){return typeof(e.getAttribute?e.getAttribute(ee):null)=="string"}function _i(e){const t=e.getAttribute?e.getAttribute(Nt):null,n=e.getAttribute?e.getAttribute(Ft):null;return t&&n}function $i(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(g.replacementClass)}function ji(){return g.autoReplaceSvg===!0?Oe.replace:Oe[g.autoReplaceSvg]||Oe.replace}function zi(e){return P.createElementNS("http://www.w3.org/2000/svg",e)}function Wi(e){return P.createElement(e)}function Cr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?zi:Wi}=t;if(typeof e=="string")return P.createTextNode(e);const r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])}),(e.children||[]).forEach(function(o){r.appendChild(Cr(o,{ceFn:n}))}),r}function Ui(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const Oe={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(Cr(n),t)}),t.getAttribute(ee)===null&&g.keepOriginalSource){let n=P.createComment(Ui(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~Lt(t).indexOf(g.replacementClass))return Oe.replace(e);const r=new RegExp("".concat(g.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((i,s)=>(s===g.replacementClass||s.match(r)?i.toSvg.push(s):i.toNode.push(s),i),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",o.toNode.join(" "))}const a=n.map(o=>Ee(o)).join(`
`);t.setAttribute(ee,""),t.innerHTML=a}};function hn(e){e()}function Ir(e,t){const n=typeof t=="function"?t:ke;if(e.length===0)n();else{let r=hn;g.mutateApproach===Bo&&(r=G.requestAnimationFrame||hn),r(()=>{const a=ji(),o=jt.begin("mutate");e.map(a),o(),n()})}}let zt=!1;function Nr(){zt=!0}function vt(){zt=!1}let Me=null;function yn(e){if(!nn||!g.observeMutations)return;const{treeCallback:t=ke,nodeCallback:n=ke,pseudoElementsCallback:r=ke,observeMutationsRoot:a=P}=e;Me=new nn(o=>{if(zt)return;const i=V();se(o).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!gn(s.addedNodes[0])&&(g.searchPseudoElements&&r(s.target),t(s.target)),s.type==="attributes"&&s.target.parentNode&&g.searchPseudoElements&&r(s.target.parentNode),s.type==="attributes"&&gn(s.target)&&~Qo.indexOf(s.attributeName))if(s.attributeName==="class"&&_i(s.target)){const{prefix:l,iconName:u}=We(Lt(s.target));s.target.setAttribute(Nt,l||i),u&&s.target.setAttribute(Ft,u)}else $i(s.target)&&n(s.target)})}),U&&Me.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Hi(){Me&&Me.disconnect()}function Yi(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((r,a)=>{const o=a.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(r[i]=s.join(":").trim()),r},{})),n}function Bi(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"";let a=We(Lt(e));return a.prefix||(a.prefix=V()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=hi(a.prefix,e.innerText)||_t(a.prefix,dt(e.innerText))),!a.iconName&&g.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Gi(e){const t=se(e.attributes).reduce((a,o)=>(a.name!=="class"&&a.name!=="style"&&(a[o.name]=o.value),a),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return g.autoA11y&&(n?t["aria-labelledby"]="".concat(g.replacementClass,"-title-").concat(r||ye()):(t["aria-hidden"]="true",t.focusable="false")),t}function Vi(){return{iconName:null,title:null,titleId:null,prefix:null,transform:D,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function bn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:a}=Bi(e),o=Gi(e),i=pt("parseNodeAttributes",{},e);let s=t.styleParser?Yi(e):[];return f({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:D,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:s,attributes:o}},i)}const{styles:Xi}=R;function Fr(e){const t=g.autoReplaceSvg==="nest"?bn(e,{styleParser:!1}):bn(e);return~t.extra.classes.indexOf(dr)?X("generateLayersText",e,t):X("generateSvgReplacementMutation",e,t)}function qi(){return[...Co,...it]}function vn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!U)return Promise.resolve();const n=P.documentElement.classList,r=c=>n.add("".concat(on,"-").concat(c)),a=c=>n.remove("".concat(on,"-").concat(c)),o=g.autoFetchSvg?qi():or.concat(Object.keys(Xi));o.includes("fa")||o.push("fa");const i=[".".concat(dr,":not([").concat(ee,"])")].concat(o.map(c=>".".concat(c,":not([").concat(ee,"])"))).join(", ");if(i.length===0)return Promise.resolve();let s=[];try{s=se(e.querySelectorAll(i))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();const l=jt.begin("onTree"),u=s.reduce((c,p)=>{try{const m=Fr(p);m&&c.push(m)}catch(m){cr||m.name==="MissingIcon"&&console.error(m)}return c},[]);return new Promise((c,p)=>{Promise.all(u).then(m=>{Ir(m,()=>{r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),c()})}).catch(m=>{l(),p(m)})})}function Ki(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Fr(e).then(n=>{n&&Ir([n],t)})}function Qi(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(t||{}).icon?t:gt(t||{});let{mask:a}=n;return a&&(a=(a||{}).icon?a:gt(a||{})),e(r,f(f({},n),{},{mask:a}))}}const Zi=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=D,symbol:r=!1,mask:a=null,maskId:o=null,title:i=null,titleId:s=null,classes:l=[],attributes:u={},styles:c={}}=t;if(!e)return;const{prefix:p,iconName:m,icon:h}=e;return Ue(f({type:"icon"},e),()=>(te("beforeDOMElementCreation",{iconDefinition:e,params:t}),g.autoA11y&&(i?u["aria-labelledby"]="".concat(g.replacementClass,"-title-").concat(s||ye()):(u["aria-hidden"]="true",u.focusable="false")),$t({icons:{main:ht(h),mask:a?ht(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:m,transform:f(f({},D),n),symbol:r,title:i,maskId:o,titleId:s,extra:{attributes:u,styles:c,classes:l}})))};var Ji={mixout(){return{icon:Qi(Zi)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=vn,e.nodeCallback=Ki,e}}},provides(e){e.i2svg=function(t){const{node:n=P,callback:r=()=>{}}=t;return vn(n,r)},e.generateSvgReplacementMutation=function(t,n){const{iconName:r,title:a,titleId:o,prefix:i,transform:s,symbol:l,mask:u,maskId:c,extra:p}=n;return new Promise((m,h)=>{Promise.all([yt(r,i),u.iconName?yt(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(b=>{let[k,w]=b;m([t,$t({icons:{main:k,mask:w},prefix:i,iconName:r,transform:s,symbol:l,maskId:c,title:a,titleId:o,extra:p,watchable:!0})])}).catch(h)})},e.generateAbstractIcon=function(t){let{children:n,attributes:r,main:a,transform:o,styles:i}=t;const s=je(i);s.length>0&&(r.style=s);let l;return Dt(o)&&(l=X("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),n.push(l||a.icon),{children:n,attributes:r}}}},es={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return Ue({type:"layer"},()=>{te("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e(a=>{Array.isArray(a)?a.map(o=>{r=r.concat(o.abstract)}):r=r.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(g.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},ts={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:a={},styles:o={}}=t;return Ue({type:"counter",content:e},()=>(te("beforeDOMElementCreation",{content:e,params:t}),Mi({content:e.toString(),title:n,extra:{attributes:a,styles:o,classes:["".concat(g.cssPrefix,"-layers-counter"),...r]}})))}}}},ns={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=D,title:r=null,classes:a=[],attributes:o={},styles:i={}}=t;return Ue({type:"text",content:e},()=>(te("beforeDOMElementCreation",{content:e,params:t}),mn({content:e,transform:f(f({},D),n),title:r,extra:{attributes:o,styles:i,classes:["".concat(g.cssPrefix,"-layers-text"),...a]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:r,transform:a,extra:o}=n;let i=null,s=null;if(rr){const l=parseInt(getComputedStyle(t).fontSize,10),u=t.getBoundingClientRect();i=u.width/l,s=u.height/l}return g.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([t,mn({content:t.innerHTML,width:i,height:s,transform:a,title:r,extra:o,watchable:!0})])}}};const rs=new RegExp('"',"ug"),xn=[1105920,1112319],wn=f(f(f(f({},{FontAwesome:{normal:"fas",400:"fas"}}),ko),Ho),Ro),xt=Object.keys(wn).reduce((e,t)=>(e[t.toLowerCase()]=wn[t],e),{}),as=Object.keys(xt).reduce((e,t)=>{const n=xt[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function os(e){const t=e.replace(rs,""),n=fi(t,0),r=n>=xn[0]&&n<=xn[1],a=t.length===2?t[0]===t[1]:!1;return{value:dt(a?t[0]:t),isSecondary:r||a}}function is(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),a=isNaN(r)?"normal":r;return(xt[n]||{})[a]||as[n]}function En(e,t){const n="".concat(Yo).concat(t.replace(":","-"));return new Promise((r,a)=>{if(e.getAttribute(n)!==null)return r();const i=se(e.children).filter(m=>m.getAttribute(lt)===t)[0],s=G.getComputedStyle(e,t),l=s.getPropertyValue("font-family"),u=l.match(qo),c=s.getPropertyValue("font-weight"),p=s.getPropertyValue("content");if(i&&!u)return e.removeChild(i),r();if(u&&p!=="none"&&p!==""){const m=s.getPropertyValue("content");let h=is(l,c);const{value:b,isSecondary:k}=os(m),w=u[0].startsWith("FontAwesome");let E=_t(h,b),v=E;if(w){const S=yi(b);S.iconName&&S.prefix&&(E=S.iconName,h=S.prefix)}if(E&&!k&&(!i||i.getAttribute(Nt)!==h||i.getAttribute(Ft)!==v)){e.setAttribute(n,v),i&&e.removeChild(i);const S=Vi(),{extra:O}=S;O.attributes[lt]=t,yt(E,h).then(I=>{const H=$t(f(f({},S),{},{icons:{main:I,mask:kr()},prefix:h,iconName:v,extra:O,watchable:!0})),le=P.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(le,e.firstChild):e.appendChild(le),le.outerHTML=H.map(He=>Ee(He)).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function ss(e){return Promise.all([En(e,"::before"),En(e,"::after")])}function ls(e){return e.parentNode!==document.head&&!~Go.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(lt)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function An(e){if(U)return new Promise((t,n)=>{const r=se(e.querySelectorAll("*")).filter(ls).map(ss),a=jt.begin("searchPseudoElements");Nr(),Promise.all(r).then(()=>{a(),vt(),t()}).catch(()=>{a(),vt(),n()})})}var us={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=An,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=P}=t;g.searchPseudoElements&&An(n)}}};let Pn=!1;var cs={mixout(){return{dom:{unwatch(){Nr(),Pn=!0}}}},hooks(){return{bootstrap(){yn(pt("mutationObserverCallbacks",{}))},noAuto(){Hi()},watch(e){const{observeMutationsRoot:t}=e;Pn?vt():yn(pt("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const Sn=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,r)=>{const a=r.toLowerCase().split("-"),o=a[0];let i=a.slice(1).join("-");if(o&&i==="h")return n.flipX=!0,n;if(o&&i==="v")return n.flipY=!0,n;if(i=parseFloat(i),isNaN(i))return n;switch(o){case"grow":n.size=n.size+i;break;case"shrink":n.size=n.size-i;break;case"left":n.x=n.x-i;break;case"right":n.x=n.x+i;break;case"up":n.y=n.y-i;break;case"down":n.y=n.y+i;break;case"rotate":n.rotate=n.rotate+i;break}return n},t)};var fs={mixout(){return{parse:{transform:e=>Sn(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=Sn(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:r,containerWidth:a,iconWidth:o}=t;const i={transform:"translate(".concat(a/2," 256)")},s="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),c={transform:"".concat(s," ").concat(l," ").concat(u)},p={transform:"translate(".concat(o/2*-1," -256)")},m={outer:i,inner:c,path:p};return{tag:"g",attributes:f({},m.outer),children:[{tag:"g",attributes:f({},m.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:f(f({},n.icon.attributes),m.path)}]}]}}}};const Ke={x:0,y:0,width:"100%",height:"100%"};function kn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function ds(e){return e.tag==="g"?e.children:[e]}var ms={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?We(n.split(" ").map(a=>a.trim())):kr();return r.prefix||(r.prefix=V()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:r,main:a,mask:o,maskId:i,transform:s}=t;const{width:l,icon:u}=a,{width:c,icon:p}=o,m=oi({transform:s,containerWidth:c,iconWidth:l}),h={tag:"rect",attributes:f(f({},Ke),{},{fill:"white"})},b=u.children?{children:u.children.map(kn)}:{},k={tag:"g",attributes:f({},m.inner),children:[kn(f({tag:u.tag,attributes:f(f({},u.attributes),m.path)},b))]},w={tag:"g",attributes:f({},m.outer),children:[k]},E="mask-".concat(i||ye()),v="clip-".concat(i||ye()),S={tag:"mask",attributes:f(f({},Ke),{},{id:E,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[h,w]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:ds(p)},S]};return n.push(O,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(E,")")},Ke)}),{children:n,attributes:r}}}},ps={provides(e){let t=!1;G.matchMedia&&(t=G.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:f(f({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const o=f(f({},a),{},{attributeName:"opacity"}),i={tag:"circle",attributes:f(f({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||i.children.push({tag:"animate",attributes:f(f({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(i),n.push({tag:"path",attributes:f(f({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:f(f({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:f(f({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},gs={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return e.symbol=r,e}}}},hs=[li,Ji,es,ts,ns,us,cs,fs,ms,ps,gs];ki(hs,{mixoutsTo:F});F.noAuto;F.config;F.library;F.dom;const wt=F.parse;F.findIconDefinition;F.toHtml;const ys=F.icon;F.layer;F.text;F.counter;var Qe={exports:{}},Ze,On;function bs(){if(On)return Ze;On=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Ze=e,Ze}var Je,Tn;function vs(){if(Tn)return Je;Tn=1;var e=bs();function t(){}function n(){}return n.resetWarningCache=t,Je=function(){function r(i,s,l,u,c,p){if(p!==e){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}}r.isRequired=r;function a(){return r}var o={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:a,element:r,elementType:r,instanceOf:a,node:r,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:n,resetWarningCache:t};return o.PropTypes=o,o},Je}var Cn;function xs(){return Cn||(Cn=1,Qe.exports=vs()()),Qe.exports}var ws=xs();const y=Yr(ws);function In(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?In(Object(n),!0).forEach(function(r){re(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):In(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Le(e){"@babel/helpers - typeof";return Le=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Le(e)}function re(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Es(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,o;for(o=0;o<r.length;o++)a=r[o],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function As(e,t){if(e==null)return{};var n=Es(e,t),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Et(e){return Ps(e)||Ss(e)||ks(e)||Os()}function Ps(e){if(Array.isArray(e))return At(e)}function Ss(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ks(e,t){if(e){if(typeof e=="string")return At(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return At(e,t)}}function At(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Os(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ts(e){var t,n=e.beat,r=e.fade,a=e.beatFade,o=e.bounce,i=e.shake,s=e.flash,l=e.spin,u=e.spinPulse,c=e.spinReverse,p=e.pulse,m=e.fixedWidth,h=e.inverse,b=e.border,k=e.listItem,w=e.flip,E=e.size,v=e.rotation,S=e.pull,O=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":o,"fa-shake":i,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":p,"fa-fw":m,"fa-inverse":h,"fa-border":b,"fa-li":k,"fa-flip":w===!0,"fa-flip-horizontal":w==="horizontal"||w==="both","fa-flip-vertical":w==="vertical"||w==="both"},re(t,"fa-".concat(E),typeof E<"u"&&E!==null),re(t,"fa-rotate-".concat(v),typeof v<"u"&&v!==null&&v!==0),re(t,"fa-pull-".concat(S),typeof S<"u"&&S!==null),re(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(O).map(function(I){return O[I]?I:null}).filter(function(I){return I})}function Cs(e){return e=e-0,e===e}function Mr(e){return Cs(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Is=["style"];function Ns(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Fs(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Mr(n.slice(0,r)),o=n.slice(r+1).trim();return a.startsWith("webkit")?t[Ns(a)]=o:t[a]=o,t},{})}function Lr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return Lr(e,l)}),a=Object.keys(t.attributes||{}).reduce(function(l,u){var c=t.attributes[u];switch(u){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=Fs(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[Mr(u)]=c}return l},{attrs:{}}),o=n.style,i=o===void 0?{}:o,s=As(n,Is);return a.attrs.style=L(L({},a.attrs.style),i),e.apply(void 0,[t.tag,L(L({},a.attrs),s)].concat(Et(r)))}var Dr=!1;try{Dr=!0}catch{}function Ms(){if(!Dr&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Nn(e){if(e&&Le(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(wt.icon)return wt.icon(e);if(e===null)return null;if(e&&Le(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function et(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?re({},e,t):{}}var Fn={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Wt=x.forwardRef(function(e,t){var n=L(L({},Fn),e),r=n.icon,a=n.mask,o=n.symbol,i=n.className,s=n.title,l=n.titleId,u=n.maskId,c=Nn(r),p=et("classes",[].concat(Et(Ts(n)),Et((i||"").split(" ")))),m=et("transform",typeof n.transform=="string"?wt.transform(n.transform):n.transform),h=et("mask",Nn(a)),b=ys(c,L(L(L(L({},p),m),h),{},{symbol:o,title:s,titleId:l,maskId:u}));if(!b)return Ms("Could not find icon",c),null;var k=b.abstract,w={ref:t};return Object.keys(n).forEach(function(E){Fn.hasOwnProperty(E)||(w[E]=n[E])}),Ls(k[0],w)});Wt.displayName="FontAwesomeIcon";Wt.propTypes={beat:y.bool,border:y.bool,beatFade:y.bool,bounce:y.bool,className:y.string,fade:y.bool,flash:y.bool,mask:y.oneOfType([y.object,y.array,y.string]),maskId:y.string,fixedWidth:y.bool,inverse:y.bool,flip:y.oneOf([!0,!1,"horizontal","vertical","both"]),icon:y.oneOfType([y.object,y.array,y.string]),listItem:y.bool,pull:y.oneOf(["right","left"]),pulse:y.bool,rotation:y.oneOf([0,90,180,270]),shake:y.bool,size:y.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:y.bool,spinPulse:y.bool,spinReverse:y.bool,symbol:y.oneOfType([y.bool,y.string]),title:y.string,titleId:y.string,transform:y.oneOfType([y.string,y.object]),swapOpacity:y.bool};var Ls=Lr.bind(null,x.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Ds={prefix:"fas",iconName:"circle-xmark",icon:[512,512,[61532,"times-circle","xmark-circle"],"f057","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]};function Rs({children:e,show:t=!1,maxWidth:n="2xl",closeable:r=!0,button:a=!0,onClose:o}){const i=()=>{r&&o&&o()},s={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[n];return A.jsx(Dn,{show:t,leave:"duration-200",children:A.jsxs(ho,{as:"div",id:"modal",className:"fixed inset-0 z-50 flex items-center justify-center px-4 py-6 sm:px-0",onClose:i,children:[A.jsx(Ce,{enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:A.jsx("div",{className:"absolute inset-0 bg-black/25","aria-hidden":"true"})}),A.jsx(Ce,{enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:A.jsxs(Jn,{className:`mb-6 transform overflow-hidden rounded-xl p-10 text-white bg-black/95 shadow-xl transition-all sm:mx-auto sm:w-full ${s}`,children:[r&&a&&A.jsx("button",{onClick:i,className:"absolute top-2 right-[-18px] text-orange bg-transparent hover:text-gray-300","aria-label":"Close",children:A.jsx(Wt,{className:"text-lg lg:text-2xl",icon:Ds})}),e]})})]})})}function _s({type:e="button",className:t="",disabled:n,children:r,...a}){return A.jsx("button",{...a,type:e,className:`inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow-sm transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 ${n&&"opacity-25"} `+t,disabled:n,children:r})}function Hs({className:e=""}){const[t,n]=d.useState(!1),r=d.useRef(null),{data:a,setData:o,delete:i,processing:s,reset:l,errors:u,clearErrors:c}=Br({password:""}),p=()=>{n(!0)},m=b=>{b.preventDefault(),i(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>h(),onError:()=>{var k;return(k=r.current)==null?void 0:k.focus()},onFinish:()=>l()})},h=()=>{n(!1),c(),l()};return A.jsxs("section",{className:`space-y-6 ${e}`,children:[A.jsxs("header",{children:[A.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Delete Account"}),A.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."})]}),A.jsx(Zt,{onClick:p,children:"Delete Account"}),A.jsx(Rs,{show:t,onClose:h,children:A.jsxs("form",{onSubmit:m,className:"p-6",children:[A.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Are you sure you want to delete your account?"}),A.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."}),A.jsxs("div",{className:"mt-6",children:[A.jsx(Xr,{htmlFor:"password",value:"Password",className:"sr-only"}),A.jsx(Gr,{id:"password",type:"password",name:"password",ref:r,value:a.password,onChange:b=>o("password",b.target.value),className:"mt-1 block w-3/4",isFocused:!0,placeholder:"Password"}),A.jsx(Vr,{message:u.password,className:"mt-2"})]}),A.jsxs("div",{className:"mt-6 flex justify-end",children:[A.jsx(_s,{onClick:h,children:"Cancel"}),A.jsx(Zt,{className:"ms-3",disabled:s,children:"Delete Account"})]})]})})]})}export{Hs as default};
