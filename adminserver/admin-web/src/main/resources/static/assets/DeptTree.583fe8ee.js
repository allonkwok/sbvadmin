var l=(o,n,e)=>new Promise((s,r)=>{var a=t=>{try{i(e.next(t))}catch(p){r(p)}},c=t=>{try{i(e.throw(t))}catch(p){r(p)}},i=t=>t.done?s(t.value):Promise.resolve(t.value).then(a,c);i((e=e.apply(o,n)).next())});import{_ as m}from"./index.f04e25b4.js";import{g as f}from"./Dept.59b322db.js";import{au as u,a as d,v as _,N as h,aw as v,o as D,h as w,n as T}from"./index.8936adfc.js";import"./fromPairs.84aabb58.js";import"./index.992924f4.js";import"./eagerComputed.5918221c.js";import"./useContextMenu.99a9252c.js";import"./index.8ec43242.js";import"./get.62ec95b2.js";const B=d({name:"DeptTree",components:{BasicTree:m},emits:["select"],setup(o,{emit:n}){const e=_([]);function s(){return l(this,null,function*(){const a={};e.value=yield f(a)})}function r(a){n("select",a[0])}return h(()=>{s()}),{treeData:e,handleSelect:r}}}),$={class:"m-4 mr-0 overflow-hidden bg-white"};function k(o,n,e,s,r,a){const c=v("BasicTree");return D(),w("div",$,[T(c,{title:"\u673A\u6784\u5217\u8868",toolbar:"",search:"",treeWrapperClassName:"h-[calc(100%-35px)] overflow-auto",clickRowToExpand:!1,treeData:o.treeData,fieldNames:{key:"id",title:"name"},onSelect:o.handleSelect},null,8,["treeData","onSelect"])])}var M=u(B,[["render",k]]);export{M as default};