import{au as y,a as _,aw as t,o as E,j as A,z as n,n as r,B as m}from"./index.21dbddea.js";import{A as R}from"./index.ba1296a1.js";import{u as a}from"./index.f4811fee.js";import k from"./Drawer1.913cc1dc.js";import B from"./Drawer2.ca21e8cb.js";import $ from"./Drawer3.cf0990c2.js";import v from"./Drawer4.4f142018.js";import P from"./Drawer5.72d2fa66.js";import{P as W}from"./index.262aa95b.js";import"./index.907316d5.js";import"./ArrowLeftOutlined.a8bf1d79.js";import"./BasicForm.f15e10d2.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.ce9802a8.js";import"./index.a37178f8.js";import"./componentMap.89831d4d.js";import"./index.82fe2da0.js";import"./Checkbox.b4e3675e.js";import"./index.17dda3d9.js";import"./index.63df3ac3.js";import"./index.193019b5.js";import"./index.ec76c75d.js";import"./index.c91c606e.js";import"./index.299e002f.js";import"./useFormItem.1145f6c8.js";import"./RadioButtonGroup.bc4b2238.js";import"./get.41fb1f2f.js";import"./index.2ddb10b6.js";import"./eagerComputed.1ea2a8d9.js";import"./index.c3a78ee8.js";import"./_baseIteratee.165cbc4f.js";import"./DeleteOutlined.1931f992.js";import"./index.94534871.js";import"./useRefs.15808103.js";import"./Form.b6c45920.js";import"./Col.2a58f9a8.js";import"./useFlexGapSupport.06ccabe5.js";import"./useSize.e955a44e.js";import"./transButton.25f118c6.js";import"./index.903acead.js";import"./index.5d9418ce.js";import"./useWindowSizeFn.7490f562.js";import"./FullscreenOutlined.1b876098.js";import"./index.44538731.js";import"./isNumber.9b40a4c7.js";import"./uuid.2b29000c.js";import"./download.68505b66.js";import"./base64Conver.08b9f4ec.js";import"./index.7b25a8ae.js";import"./index.ead49ec7.js";import"./index.5e62cd22.js";import"./uniqBy.45490986.js";import"./index.4a1de338.js";import"./useForm.e0cbc007.js";import"./index.8d2cb20f.js";import"./index.2e41d04d.js";import"./useContentViewHeight.22c0cdcf.js";import"./index.dd967332.js";const b=_({components:{Alert:R,PageWrapper:W,Drawer1:k,Drawer2:B,Drawer3:$,Drawer4:v,Drawer5:P},setup(){const[e,{openDrawer:o,setDrawerProps:u}]=a(),[g,{openDrawer:f}]=a(),[d,{openDrawer:i}]=a(),[p,{openDrawer:s}]=a(),[w,{openDrawer:D}]=a();function l(){s(!0,{data:"content",info:"Info"})}function c(){o(),u({loading:!0}),setTimeout(()=>{u({loading:!1})},2e3)}return{register1:e,openDrawer1:o,register2:g,openDrawer2:f,register3:d,openDrawer3:i,register4:p,register5:w,openDrawer5:D,send:l,openDrawerLoading:c}}});function L(e,o,u,g,f,d){const i=t("Alert"),p=t("a-button"),s=t("Drawer1"),w=t("Drawer2"),D=t("Drawer3"),l=t("Drawer4"),c=t("Drawer5"),F=t("PageWrapper");return E(),A(F,{title:"\u62BD\u5C49\u7EC4\u4EF6\u4F7F\u7528\u793A\u4F8B"},{default:n(()=>[r(i,{message:"\u4F7F\u7528 useDrawer \u8FDB\u884C\u62BD\u5C49\u64CD\u4F5C","show-icon":""}),r(p,{type:"primary",class:"my-4",onClick:e.openDrawerLoading},{default:n(()=>[m(" \u6253\u5F00Drawer ")]),_:1},8,["onClick"]),r(i,{message:"\u5185\u5916\u540C\u65F6\u63A7\u5236\u663E\u793A\u9690\u85CF","show-icon":""}),r(p,{type:"primary",class:"my-4",onClick:o[0]||(o[0]=C=>e.openDrawer2(!0))},{default:n(()=>[m(" \u6253\u5F00Drawer ")]),_:1}),r(i,{message:"\u81EA\u9002\u5E94\u9AD8\u5EA6/\u663E\u793Afooter","show-icon":""}),r(p,{type:"primary",class:"my-4",onClick:o[1]||(o[1]=C=>e.openDrawer3(!0))},{default:n(()=>[m(" \u6253\u5F00Drawer ")]),_:1}),r(i,{message:"\u5185\u5916\u6570\u636E\u4EA4\u4E92","show-icon":""}),r(p,{type:"primary",class:"my-4",onClick:e.send},{default:n(()=>[m(" \u6253\u5F00Drawer\u5E76\u4F20\u9012\u6570\u636E ")]),_:1},8,["onClick"]),r(i,{message:"\u8BE6\u60C5\u9875\u6A21\u5F0F","show-icon":""}),r(p,{type:"primary",class:"my-4",onClick:o[2]||(o[2]=C=>e.openDrawer5(!0))},{default:n(()=>[m(" \u6253\u5F00\u8BE6\u60C5Drawer ")]),_:1}),r(s,{onRegister:e.register1},null,8,["onRegister"]),r(w,{onRegister:e.register2},null,8,["onRegister"]),r(D,{onRegister:e.register3},null,8,["onRegister"]),r(l,{onRegister:e.register4},null,8,["onRegister"]),r(c,{onRegister:e.register5},null,8,["onRegister"])]),_:1})}var zr=y(b,[["render",L]]);export{zr as default};