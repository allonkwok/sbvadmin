var E=Object.defineProperty;var f=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var F=(e,o,n)=>o in e?E(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,L=(e,o)=>{for(var n in o||(o={}))D.call(o,n)&&F(e,n,o[n]);if(f)for(var n of f(o))B.call(o,n)&&F(e,n,o[n]);return e};import{fj as h,k as A,au as T,a as W,fk as w,v as C,w as R,bc as P,aw as p,bQ as $,x as N,o as V,j,z as u,i as z,n as t,B as r}from"./index.21dbddea.js";import{P as Q}from"./index.262aa95b.js";import{A as b}from"./index.ba1296a1.js";import"./index.8d2cb20f.js";import"./index.2e41d04d.js";import"./useSize.e955a44e.js";import"./eagerComputed.1ea2a8d9.js";import"./useWindowSizeFn.7490f562.js";import"./useContentViewHeight.22c0cdcf.js";import"./ArrowLeftOutlined.a8bf1d79.js";import"./index.dd967332.js";import"./transButton.25f118c6.js";function k(e){let o,n=document.body;if(Reflect.has(e,"target")||Reflect.has(e,"props")){const a=e;o=a.props||{},n=a.target||document.body}else o=e;const i=h(o,void 0,!0);return[()=>{const a=A(n);!a||i.open(a)},()=>{i.close()},a=>{i.setTip(a)}]}const S=W({components:{Loading:w,PageWrapper:Q,[b.name]:b},setup(){const e=C(null),o=C(!1),n=R({absolute:!1,loading:!1,theme:"dark",background:"rgba(111,111,111,.7)",tip:"\u52A0\u8F7D\u4E2D..."}),[i,l]=k({tip:"\u52A0\u8F7D\u4E2D..."}),[c,s]=k({target:e,props:{tip:"\u52A0\u8F7D\u4E2D...",absolute:!0}});function a(v){n.absolute=v,n.loading=!0,setTimeout(()=>{n.loading=!1},2e3)}function d(){a(!1)}function m(){a(!0)}function g(){i(),setTimeout(()=>{l()},2e3)}function y(){c(),setTimeout(()=>{s()},2e3)}function _(){o.value=!0,setTimeout(()=>{o.value=!1},2e3)}return L({openCompFullLoading:d,openFnFullLoading:g,openFnWrapLoading:y,openCompAbsolute:m,wrapEl:e,loadingRef:o,openDirectiveLoading:_},P(n))}}),q={ref:"wrapEl"};function G(e,o,n,i,l,c){const s=p("a-alert"),a=p("a-button"),d=p("Loading"),m=p("PageWrapper"),g=$("loading");return N((V(),j(m,{"loading-tip":"\u52A0\u8F7D\u4E2D...",title:"Loading\u7EC4\u4EF6\u793A\u4F8B"},{default:u(()=>[z("div",q,[t(s,{message:"\u7EC4\u4EF6\u65B9\u5F0F"}),t(a,{class:"my-4 mr-4",type:"primary",onClick:e.openCompFullLoading},{default:u(()=>[r(" \u5168\u5C4F Loading ")]),_:1},8,["onClick"]),t(a,{class:"my-4",type:"primary",onClick:e.openCompAbsolute},{default:u(()=>[r(" \u5BB9\u5668\u5185 Loading ")]),_:1},8,["onClick"]),t(d,{loading:e.loading,absolute:e.absolute,theme:e.theme,background:e.background,tip:e.tip},null,8,["loading","absolute","theme","background","tip"]),t(s,{message:"\u51FD\u6570\u65B9\u5F0F"}),t(a,{class:"my-4 mr-4",type:"primary",onClick:e.openFnFullLoading},{default:u(()=>[r(" \u5168\u5C4F Loading ")]),_:1},8,["onClick"]),t(a,{class:"my-4",type:"primary",onClick:e.openFnWrapLoading},{default:u(()=>[r(" \u5BB9\u5668\u5185 Loading ")]),_:1},8,["onClick"]),t(s,{message:"\u6307\u4EE4\u65B9\u5F0F"}),t(a,{class:"my-4 mr-4",type:"primary",onClick:e.openDirectiveLoading},{default:u(()=>[r(" \u6253\u5F00\u6307\u4EE4Loading ")]),_:1},8,["onClick"])],512)]),_:1})),[[g,e.loadingRef]])}var ne=T(S,[["render",G]]);export{ne as default};