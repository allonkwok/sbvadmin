import{au as _,a as f,b6 as C,aw as s,o as r,j as l,z as n,n as i,B as h,h as k,F as x,az as g,i as t,t as a,ax as y,aN as w}from"./index.f2ab8b4c.js";import{C as I}from"./index.7cf5ae74.js";import"./index.4fcbe22d.js";/* empty css              */import{g as $}from"./data.8198f59c.js";import{C as v}from"./Grid.90e2345a.js";import"./index.1e1f2c49.js";import"./index.c2f346bd.js";import"./Col.ad1a1837.js";import"./useFlexGapSupport.158efb8d.js";import"./index.71210517.js";import"./useRefs.26c927e3.js";import"./PlusOutlined.bdd3c943.js";const B=f({components:{Card:I,CardGrid:v,Icon:C},setup(){function e(c){w(c)}return{items:$,handleItemClick:e}}}),b={class:"flex"},z={class:"text-lg ml-4"},N={class:"flex mt-2 h-10 text-secondary"},j={class:"flex justify-between text-secondary"};function E(e,c,F,G,V,P){const p=s("a-button"),d=s("Icon"),m=s("CardGrid"),u=s("Card");return r(),l(u,y({title:"\u9879\u76EE"},e.$attrs),{extra:n(()=>[i(p,{type:"link",size:"small"},{default:n(()=>[h("\u66F4\u591A")]),_:1})]),default:n(()=>[(r(!0),k(x,null,g(e.items,o=>(r(),l(m,{key:o.title,class:"!md:w-1/3 !w-full",style:{cursor:"pointer"},onClick:A=>e.handleItemClick(o.link)},{default:n(()=>[t("span",b,[i(d,{icon:o.icon,color:o.color,size:"30"},null,8,["icon","color"]),t("span",z,a(o.title),1)]),t("div",N,a(o.desc),1),t("div",j,[t("span",null,a(o.group),1),t("span",null,a(o.date),1)])]),_:2},1032,["onClick"]))),128))]),_:1},16)}var U=_(B,[["render",E]]);export{U as default};