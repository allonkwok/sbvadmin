var P=Object.defineProperty,L=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var v=(e,o,t)=>o in e?P(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,C=(e,o)=>{for(var t in o||(o={}))z.call(o,t)&&v(e,t,o[t]);if(f)for(var t of f(o))O.call(o,t)&&v(e,t,o[t]);return e},$=(e,o)=>L(e,R(o));import{a as V,w as A,f as d,bc as B,au as D,aw as a,o as n,j as u,z as i,h as b,q as H,bl as j,n as s,ax as k,F as q,az as M,aB as U,aC as E}from"./index.f2ab8b4c.js";import{d as G}from"./vuedraggable.umd.d5029aff.js";import T from"./FormNode.0cd5e9b1.js";import _ from"./FormNodeOperate.88433d3f.js";import{u as J}from"./useFormDesignState.17cbe518.js";/* empty css              */import{R as K}from"./index.c2f346bd.js";import{C as Q}from"./index.71210517.js";import"./index.189fe375.js";import"./formItemConfig.e371a99e.js";import"./componentMap.8c50118e.js";import"./index.4940ef40.js";import"./Checkbox.3829cf98.js";import"./index.c8751fef.js";import"./index.56479c45.js";import"./index.81cf2405.js";import"./index.8f9daac0.js";import"./index.4ec03165.js";import"./index.6bc186dc.js";import"./index.f1b4579a.js";import"./useFormItem.806f7be4.js";import"./RadioButtonGroup.d462957e.js";import"./get.98926b26.js";import"./index.18484515.js";import"./eagerComputed.31b81699.js";import"./index.e4cc3c47.js";import"./_baseIteratee.1cfb04f5.js";import"./DeleteOutlined.c33aea27.js";import"./index.c7f5de7c.js";import"./useRefs.26c927e3.js";import"./Form.f2630687.js";import"./Col.ad1a1837.js";import"./useFlexGapSupport.158efb8d.js";import"./useSize.0f8fa8a7.js";import"./transButton.71d28799.js";import"./index.69a8cb8b.js";import"./index.b4cf2183.js";import"./useWindowSizeFn.1bf827f4.js";import"./FullscreenOutlined.ae022bec.js";import"./index.8e5c709c.js";import"./index.3bc6e64d.js";import"./isNumber.34251135.js";import"./uuid.2b29000c.js";import"./download.44991772.js";import"./base64Conver.08b9f4ec.js";import"./index.ef2bbb95.js";import"./index.9bdb7912.js";import"./index.dffa583b.js";const W=V({name:"LayoutItem",components:{FormNode:T,FormNodeOperate:_,draggable:G,Row:K,Col:Q},props:{schema:{type:Object,required:!0},currentItem:{type:Object,required:!0}},emits:["dragStart","handleColAdd","handle-copy","handle-delete"],setup(e){const{formDesignMethods:{handleSetSelectItem:o},formConfig:t}=J(),c=A({}),h=d(()=>{const{colProps:l={}}=e.schema;return l}),g=d(()=>e.schema.columns),p=d(()=>t.value.layout==="horizontal"?"Col":"div");return $(C({},B(c)),{colPropsComputed:h,handleSetSelectItem:o,layoutTag:p,list1:g})}});function X(e,o,t,c,h,g){const p=a("LayoutItem",!0),l=a("draggable"),y=a("Col"),w=a("Row"),I=a("FormNodeOperate"),F=a("FormNode");return n(),u(y,U(E(e.colPropsComputed)),{default:i(()=>[["Grid"].includes(e.schema.component)?(n(),b("div",{key:0,class:H(["grid-box",{active:e.schema.key===e.currentItem.key}]),onClick:o[2]||(o[2]=j(r=>e.handleSetSelectItem(e.schema),["stop"]))},[s(w,k({class:"grid-row"},e.schema.componentProps),{default:i(()=>[(n(!0),b(q,null,M(e.schema.columns,(r,S)=>(n(),u(y,{class:"grid-col",key:S,span:r.span},{default:i(()=>[s(l,k({class:"list-main draggable-box","component-data":{name:"list",tag:"div",type:"transition-group"}},{group:"form-draggable",ghostClass:"moving",animation:180,handle:".drag-move"},{"item-key":"key",modelValue:r.children,"onUpdate:modelValue":m=>r.children=m,onStart:m=>e.$emit("dragStart",m,r.children),onAdd:m=>e.$emit("handleColAdd",m,r.children)}),{item:i(({element:m})=>[s(p,{class:"drag-move",schema:m,"current-item":e.currentItem,onHandleCopy:o[0]||(o[0]=N=>e.$emit("handle-copy")),onHandleDelete:o[1]||(o[1]=N=>e.$emit("handle-delete"))},null,8,["schema","current-item"])]),_:2},1040,["modelValue","onUpdate:modelValue","onStart","onAdd"])]),_:2},1032,["span"]))),128))]),_:1},16),s(I,{schema:e.schema,currentItem:e.currentItem},null,8,["schema","currentItem"])],2)):(n(),u(F,{key:e.schema.key,schema:e.schema,"current-item":e.currentItem,onHandleCopy:o[3]||(o[3]=r=>e.$emit("handle-copy")),onHandleDelete:o[4]||(o[4]=r=>e.$emit("handle-delete"))},null,8,["schema","current-item"]))]),_:1},16)}var Je=D(W,[["render",X]]);export{Je as default};