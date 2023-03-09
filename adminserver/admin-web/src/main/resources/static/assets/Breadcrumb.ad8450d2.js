var x=Object.defineProperty,L=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var E=(e,a,r)=>a in e?x(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r,_=(e,a)=>{for(var r in a||(a={}))V.call(a,r)&&E(e,r,a[r]);if(R)for(var r of R(a))z.call(a,r)&&E(e,r,a[r]);return e},C=(e,a)=>L(e,T(a));var M=(e,a,r)=>new Promise((p,d)=>{var h=i=>{try{m(r.next(i))}catch(s){d(s)}},f=i=>{try{m(r.throw(i))}catch(s){d(s)}},m=i=>i.done?p(i.value):Promise.resolve(i.value).then(h,f);m((r=r.apply(e,a)).next())});import{au as O,a as j,b6 as q,aE as F,v as G,bd as Z,b as H,bC as J,aZ as K,L as Q,aw as B,o as g,h as P,n as U,z as w,j as A,l as W,t as S,B as X,q as Y,c as ee,bf as ae,by as te,bb as ne,f6 as re,aF as oe}from"./index.f2ab8b4c.js";import{B as D}from"./index.78ffb938.js";const ce=j({name:"LayoutBreadcrumb",components:{Icon:q,[D.name]:D},props:{theme:F.oneOf(["dark","light"])},setup(){const e=G([]),{currentRoute:a}=Z(),{prefixCls:r}=H("layout-breadcrumb"),{getShowBreadCrumbIcon:p}=J(),d=K(),{t:h}=ee();Q(()=>M(this,null,function*(){var y,I,$;if(a.value.name===ae)return;const o=yield te(),t=a.value.matched,n=t==null?void 0:t[t.length-1];let c=a.value.path;n&&((y=n==null?void 0:n.meta)==null?void 0:y.currentActiveMenu)&&(c=n.meta.currentActiveMenu);const l=ne(o,c),b=o.filter(N=>N.path===l[0]),u=f(b,l);if(!u||u.length===0)return;const k=m(u);(I=a.value.meta)!=null&&I.currentActiveMenu&&k.push(C(_({},a.value),{name:(($=a.value.meta)==null?void 0:$.title)||a.value.name})),e.value=k}));function f(o,t){const n=[];return o.forEach(c=>{var l,b;t.includes(c.path)&&n.push(C(_({},c),{name:((l=c.meta)==null?void 0:l.title)||c.name})),(b=c.children)!=null&&b.length&&n.push(...f(c.children,t))}),n}function m(o){return re(o,t=>{const{meta:n,name:c}=t;if(!n)return!!c;const{title:l,hideBreadcrumb:b,hideMenu:u}=n;return!(!l||b||u)}).filter(t=>{var n;return!((n=t.meta)!=null&&n.hideBreadcrumb)})}function i(o,t,n){n==null||n.preventDefault();const{children:c,redirect:l,meta:b}=o;if((c==null?void 0:c.length)&&!l){n==null||n.stopPropagation();return}if(!(b!=null&&b.carryParam))if(l&&oe(l))d(l);else{let u="";t.length===1?u=t[0]:u=`${t.slice(1).pop()||""}`,u=/^\//.test(u)?u:`/${u}`,d(u)}}function s(o,t){return o.indexOf(t)!==o.length-1}function v(o){var t;return o.icon||((t=o.meta)==null?void 0:t.icon)}return{routes:e,t:h,prefixCls:r,getIcon:v,getShowBreadCrumbIcon:p,handleClick:i,hasRedirect:s}}}),se={key:1};function ue(e,a,r,p,d,h){const f=B("Icon"),m=B("router-link"),i=B("a-breadcrumb");return g(),P("div",{class:Y([e.prefixCls,`${e.prefixCls}--${e.theme}`])},[U(i,{routes:e.routes},{itemRender:w(({route:s,routes:v,paths:o})=>[e.getShowBreadCrumbIcon&&e.getIcon(s)?(g(),A(f,{key:0,icon:e.getIcon(s)},null,8,["icon"])):W("",!0),e.hasRedirect(v,s)?(g(),A(m,{key:2,to:"",onClick:t=>e.handleClick(s,o,t)},{default:w(()=>[X(S(e.t(s.name||s.meta.title)),1)]),_:2},1032,["onClick"])):(g(),P("span",se,S(e.t(s.name||s.meta.title)),1))]),_:1},8,["routes"])],2)}var me=O(ce,[["render",ue]]);export{me as default};