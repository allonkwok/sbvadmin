var h=Object.defineProperty;var d=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var v=(r,t,o)=>t in r?h(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o,C=(r,t)=>{for(var o in t||(t={}))x.call(t,o)&&v(r,o,t[o]);if(d)for(var o of d(t))M.call(t,o)&&v(r,o,t[o]);return r};var _=(r,t,o)=>new Promise((m,a)=>{var u=i=>{try{e(o.next(i))}catch(p){a(p)}},c=i=>{try{e(o.throw(i))}catch(p){a(p)}},e=i=>i.done?m(i.value):Promise.resolve(i.value).then(u,c);e((o=o.apply(r,t)).next())});import{B as b}from"./BasicForm.00e2f65d.js";import"./componentMap.371f952a.js";import{u as k}from"./useForm.06b23df2.js";import"./RadioButtonGroup.80cfb485.js";import w from"./JsonModal.c5a8c240.js";import{a as B,v as F,w as y,f as D,o as E,j,z as G,n as g,k as l,ax as O,dG as R}from"./index.8936adfc.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.49d1b3fd.js";import"./index.8ec43242.js";import"./index.fc0fbd70.js";import"./_baseIteratee.f05d7e29.js";import"./get.62ec95b2.js";import"./DeleteOutlined.8e231f8a.js";import"./index.bcf6ef30.js";import"./useRefs.215ca6c8.js";import"./Form.e91498a8.js";import"./Col.4fe65e36.js";import"./useFlexGapSupport.3a88a899.js";import"./useSize.205cd3d8.js";import"./index.b51f6c0b.js";import"./uniqBy.4d1cf5d8.js";import"./index.144a57bb.js";import"./useWindowSizeFn.c4d53914.js";import"./FullscreenOutlined.03730ed4.js";import"./index.0b5ddde1.js";import"./index.a031b534.js";import"./Checkbox.ef980fcb.js";import"./index.ea04e905.js";import"./index.69870b0f.js";import"./index.61e0a1ab.js";import"./index.5bc6caf0.js";import"./index.aaf8b1a3.js";import"./index.e50b03d6.js";import"./useFormItem.edd024b8.js";import"./index.992924f4.js";import"./eagerComputed.5918221c.js";import"./transButton.f5a81c82.js";import"./index.3edac26d.js";import"./index.05b679d6.js";import"./index.636a0484.js";import"./isNumber.5ce0e4d0.js";import"./uuid.2b29000c.js";import"./download.09d4dc22.js";import"./base64Conver.08b9f4ec.js";import"./index.56da1a6c.js";import"./index.c6fbab17.js";import"./PreviewCode.7521c6a3.js";import"./index.e85a260a.js";import"./index.adf483c2.js";const Oo=B({__name:"useForm",setup(r,{expose:t}){const o=F(null),m=y({formModel:{},formConfig:{},visible:!1}),a=D(()=>C({},m.formConfig)),u=n=>{m.formConfig=n,m.visible=!0},[c,{validate:e}]=k(),i=()=>{m.visible=!1},p=()=>_(this,null,function*(){var s,f;let n=yield e();(f=(s=o.value)==null?void 0:s.showModal)==null||f.call(s,n)});return t({showModal:u}),(n,s)=>(E(),j(l(R),{title:"\u9884\u89C8(\u4E0D\u652F\u6301\u5E03\u5C40)",visible:m.visible,onOk:p,onCancel:i,okText:"\u83B7\u53D6\u6570\u636E",cancelText:"\u5173\u95ED",style:{top:"20px"},destroyOnClose:!0,width:900},{default:G(()=>[g(l(b),O(l(a),{onRegister:l(c)}),null,16,["onRegister"]),g(w,{ref_key:"jsonModal",ref:o},null,512)]),_:1},8,["visible"]))}});export{Oo as default};