var I=Object.defineProperty,g=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var s=(o,e,t)=>e in o?I(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,a=(o,e)=>{for(var t in e||(e={}))F.call(e,t)&&s(o,t,e[t]);if(p)for(var t of p(e))v.call(e,t)&&s(o,t,e[t]);return o},n=(o,e)=>g(o,C(e));import{a as b,w as N,bc as S,au as k,aw as c,o as y,h as V,i as l,n as f,t as w,q as O,bl as $}from"./index.21dbddea.js";import B from"./FormNodeOperate.9c9ce950.js";import{u as D}from"./useFormDesignState.db6f3c8f.js";import _ from"./index.c8e29270.js";import"./index.f5405540.js";import"./isNumber.9b40a4c7.js";import"./formItemConfig.3ee23bc6.js";import"./componentMap.89831d4d.js";import"./index.82fe2da0.js";import"./Checkbox.b4e3675e.js";import"./index.17dda3d9.js";import"./index.63df3ac3.js";import"./index.193019b5.js";import"./index.ec76c75d.js";import"./index.c91c606e.js";import"./index.299e002f.js";import"./index.a37178f8.js";import"./useFormItem.1145f6c8.js";import"./RadioButtonGroup.bc4b2238.js";import"./get.41fb1f2f.js";import"./index.2ddb10b6.js";import"./eagerComputed.1ea2a8d9.js";import"./index.c3a78ee8.js";import"./_baseIteratee.165cbc4f.js";import"./DeleteOutlined.1931f992.js";import"./index.94534871.js";import"./useRefs.15808103.js";import"./Form.b6c45920.js";import"./Col.2a58f9a8.js";import"./useFlexGapSupport.06ccabe5.js";import"./useSize.e955a44e.js";import"./transButton.25f118c6.js";import"./index.903acead.js";import"./index.5d9418ce.js";import"./useWindowSizeFn.7490f562.js";import"./FullscreenOutlined.1b876098.js";import"./index.ba1296a1.js";import"./index.44538731.js";import"./uuid.2b29000c.js";import"./download.68505b66.js";import"./base64Conver.08b9f4ec.js";import"./index.7b25a8ae.js";import"./index.ead49ec7.js";/* empty css              */import"./index.5e62cd22.js";const q=b({name:"FormNode",components:{VFormItem:_,FormNodeOperate:B},props:{schema:{type:Object,required:!0}},setup(o){const{formConfig:e,formDesignMethods:t}=D(),r=N({}),m=()=>{t.handleSetSelectItem(o.schema)};return n(a({},S(r)),{handleSelectItem:m,formConfig:e})}}),M={class:"form-item-box"},j={class:"show-key-box"};function z(o,e,t,r,m,E){var i;const d=c("VFormItem"),h=c("FormNodeOperate");return y(),V("div",{class:O(["drag-move-box",{active:o.schema.key===((i=o.formConfig.currentItem)==null?void 0:i.key)}]),onClick:e[0]||(e[0]=$((...u)=>o.handleSelectItem&&o.handleSelectItem(...u),["stop"]))},[l("div",M,[f(d,{formConfig:o.formConfig,schema:o.schema},null,8,["formConfig","schema"])]),l("div",j,w(o.schema.label+(o.schema.field?"/"+o.schema.field:"")),1),f(h,{schema:o.schema,currentItem:o.formConfig.currentItem},null,8,["schema","currentItem"])],2)}var Do=k(q,[["render",z]]);export{Do as default};