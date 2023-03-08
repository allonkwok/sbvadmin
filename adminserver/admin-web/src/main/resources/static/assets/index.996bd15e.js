import{au as M,a as U,cG as $,b7 as k,bs as b,aE as N,aZ as O,b as S,s as A,f as E,aw as r,o as t,h as P,n,z as m,j as h,l as g,i as a,q as s,t as R,F as V,c as z,aN as B}from"./index.21dbddea.js";import{D as T}from"./siteSetting.68e5b367.js";import{c as C,u as F}from"./index.6d83fe47.js";import{b as G}from"./index.5d9418ce.js";import{h as j}from"./header.d801b988.js";import"./FullscreenOutlined.1b876098.js";import"./index.b337bc77.js";import"./useWindowSizeFn.7490f562.js";import"./useContentViewHeight.22c0cdcf.js";import"./uniqBy.45490986.js";import"./_baseIteratee.165cbc4f.js";import"./get.41fb1f2f.js";import"./index.907316d5.js";import"./index.6f5bf206.js";import"./useRefs.15808103.js";import"./PlusOutlined.dd44a3e9.js";import"./RedoOutlined.169c31ba.js";import"./index.9e0276f3.js";import"./lock.87b847fc.js";const q=U({name:"UserDropdown",components:{Dropdown:$,Menu:k,MenuItem:C(()=>b(()=>import("./DropMenuItem.edf0d930.js"),["assets/DropMenuItem.edf0d930.js","assets/index.21dbddea.js","assets/index.a5fce172.css"])),MenuDivider:k.Divider,LockAction:C(()=>b(()=>import("./LockModal.188942d2.js"),["assets/LockModal.188942d2.js","assets/LockModal.0068f88c.css","assets/index.86d55544.css","assets/index.a18cc309.css","assets/index.21dbddea.js","assets/index.a5fce172.css","assets/index.5d9418ce.js","assets/index.d0b877f3.css","assets/useWindowSizeFn.7490f562.js","assets/FullscreenOutlined.1b876098.js","assets/BasicForm.f15e10d2.js","assets/BasicForm.fca7963c.css","assets/FormItem.vue_vue_type_script_lang.ce9802a8.js","assets/index.a37178f8.js","assets/index.3a3c1369.css","assets/componentMap.89831d4d.js","assets/componentMap.08c8b028.css","assets/index.82fe2da0.js","assets/index.cb0992d5.css","assets/Checkbox.b4e3675e.js","assets/index.17dda3d9.js","assets/index.695a0c50.css","assets/index.63df3ac3.js","assets/index.9a4d3b51.css","assets/index.193019b5.js","assets/index.49ada229.css","assets/index.ec76c75d.js","assets/index.47f7c782.css","assets/index.c91c606e.js","assets/index.579bd49e.css","assets/index.299e002f.js","assets/index.ff4ce442.css","assets/useFormItem.1145f6c8.js","assets/RadioButtonGroup.bc4b2238.js","assets/get.41fb1f2f.js","assets/index.2ddb10b6.js","assets/index.560eb672.css","assets/eagerComputed.1ea2a8d9.js","assets/index.c3a78ee8.js","assets/index.aeeee80c.css","assets/_baseIteratee.165cbc4f.js","assets/DeleteOutlined.1931f992.js","assets/index.94534871.js","assets/index.8f5fe29a.css","assets/useRefs.15808103.js","assets/Form.b6c45920.js","assets/Col.2a58f9a8.js","assets/useFlexGapSupport.06ccabe5.js","assets/useSize.e955a44e.js","assets/transButton.25f118c6.js","assets/index.903acead.js","assets/index.cd256673.css","assets/index.ba1296a1.js","assets/index.9d09be4d.css","assets/index.44538731.js","assets/index.b1363280.css","assets/isNumber.9b40a4c7.js","assets/uuid.2b29000c.js","assets/download.68505b66.js","assets/base64Conver.08b9f4ec.js","assets/index.7b25a8ae.js","assets/index.cb030764.css","assets/index.ead49ec7.js","assets/index.7b8b5e30.css","assets/index.5e62cd22.js","assets/uniqBy.45490986.js","assets/index.4a1de338.js","assets/useForm.e0cbc007.js","assets/lock.87b847fc.js","assets/header.d801b988.js"]))},props:{theme:N.oneOf(["dark","light"])},setup(){const e=O(),{prefixCls:f}=S("header-user-dropdown"),{t:_}=z(),{getShowDoc:v,getUseLockPage:w}=F(),d=A(),o=E(()=>{const{realName:u="",avatar:I,desc:L}=d.getUserInfo||{};return{realName:u,avatar:I||j,desc:L}}),[i,{openModal:p}]=G();function l(){p(!0)}function c(){d.confirmLoginOut()}function y(){B(T)}function D(){e("/user-center")}function x(u){switch(u.key){case"logout":c();break;case"doc":y();break;case"lock":l();break;case"user":D();break}}return{prefixCls:f,t:_,getUserInfo:o,handleMenuClick:x,getShowDoc:v,register:i,getUseLockPage:w}}}),H=["src"];function W(e,f,_,v,w,d){const o=r("MenuItem"),i=r("MenuDivider"),p=r("Menu"),l=r("Dropdown"),c=r("LockAction");return t(),P(V,null,[n(l,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:m(()=>[n(p,{onClick:e.handleMenuClick},{default:m(()=>[n(o,{key:"user",text:e.t("layout.header.dropdownItemUserCenter"),icon:"ant-design:user-outlined"},null,8,["text"]),e.getShowDoc?(t(),h(o,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):g("",!0),e.getShowDoc?(t(),h(i,{key:1})):g("",!0),e.getUseLockPage?(t(),h(o,{key:"lock",text:e.t("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"])):g("",!0),n(o,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])]),_:1},8,["onClick"])]),default:m(()=>[a("span",{class:s([[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"])},[a("img",{class:s(`${e.prefixCls}__header`),src:e.getUserInfo.avatar},null,10,H),a("span",{class:s(`${e.prefixCls}__info hidden md:block`)},[a("span",{class:s([`${e.prefixCls}__name  `,"truncate"])},R(e.getUserInfo.realName),3)],2)],2)]),_:1},8,["overlayClassName"]),n(c,{onRegister:e.register},null,8,["onRegister"])],64)}var me=M(q,[["render",W]]);export{me as default};