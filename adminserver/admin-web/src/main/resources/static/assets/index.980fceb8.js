import{au as m,a as S,cV as _,eG as f,eH as T,eI as x,eJ as h,eK as R,eL as X,eM as b,eN as w,eO as y,eP as Y,eQ as g,eR as B,eS as C,v as n,aw as o,o as r,j as i,z as t,i as l,n as p,B as E,aG as k,x as F,y as P}from"./index.f2ab8b4c.js";import{P as $}from"./index.da439a09.js";import"./index.78ffb938.js";import"./index.55397a9a.js";import"./useSize.0f8fa8a7.js";import"./eagerComputed.31b81699.js";import"./useWindowSizeFn.1bf827f4.js";import"./useContentViewHeight.c91509c3.js";import"./ArrowLeftOutlined.e955dbdc.js";import"./index.f0593c6b.js";import"./transButton.71d28799.js";const N=["Fade","Scale","SlideY","ScrollY","SlideYReverse","ScrollYReverse","SlideX","ScrollX","SlideXReverse","ScrollXReverse","ScaleRotate","ExpandX","Expand"],V=N.map(e=>({label:e,value:e,key:e})),A=S({components:{Select:_,PageWrapper:$,FadeTransition:f,ScaleTransition:T,SlideYTransition:x,ScrollYTransition:h,SlideYReverseTransition:R,ScrollYReverseTransition:X,SlideXTransition:b,ScrollXTransition:w,SlideXReverseTransition:y,ScrollXReverseTransition:Y,ScaleRotateTransition:g,ExpandXTransition:B,ExpandTransition:C},setup(){const e=n("Fade"),a=n(!0);function s(){a.value=!1,setTimeout(()=>{a.value=!0},300)}return{options:V,value:e,start:s,show:a}}}),W={class:"flex"},D={class:"box"};function G(e,a,s,I,L,j){const c=o("Select"),u=o("a-button"),d=o("PageWrapper");return r(),i(d,{title:"\u52A8\u753B\u7EC4\u4EF6\u793A\u4F8B"},{default:t(()=>[l("div",W,[p(c,{options:e.options,value:e.value,"onUpdate:value":a[0]||(a[0]=v=>e.value=v),placeholder:"\u9009\u62E9\u52A8\u753B",style:{width:"150px"}},null,8,["options","value"]),p(u,{type:"primary",class:"ml-4",onClick:e.start},{default:t(()=>[E(" start ")]),_:1},8,["onClick"])]),(r(),i(k(`${e.value}Transition`),null,{default:t(()=>[F(l("div",D,null,512),[[P,e.show]])]),_:1}))]),_:1})}var ae=m(A,[["render",G],["__scopeId","data-v-45b1f032"]]);export{ae as default};