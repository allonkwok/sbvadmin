import C from"./index.a9c4c65a.js";import{a as g,au as y,aw as t,o as m,j as n,z as p,h as s,F as a,az as i,ay as v,aA as R}from"./index.905b6ed8.js";/* empty css              */import{R as $}from"./index.6d8fa33a.js";import{C as k}from"./index.d4cf7918.js";import"./formItemConfig.2005a295.js";import"./componentMap.01f27cc8.js";import"./index.684e1392.js";import"./Checkbox.a0d3af01.js";import"./index.f88ad8f0.js";import"./index.706573f4.js";import"./index.5211db85.js";import"./index.3ef00fec.js";import"./index.ceac0c64.js";import"./index.f79fd3d6.js";import"./index.8246e078.js";import"./useFormItem.ca9a0ff3.js";import"./RadioButtonGroup.8d132c36.js";import"./get.d9b03bf2.js";import"./index.7bb61aa7.js";import"./eagerComputed.70942be7.js";import"./index.826703cd.js";import"./_baseIteratee.9d084802.js";import"./DeleteOutlined.f7c782d6.js";import"./index.addeb375.js";import"./useRefs.051034cf.js";import"./Form.0860c3e8.js";import"./Col.658e3026.js";import"./useFlexGapSupport.f9323b23.js";import"./useSize.9a5f98da.js";import"./transButton.3fd1ff57.js";import"./index.220de5a7.js";import"./index.e4a2926f.js";import"./useWindowSizeFn.a715beed.js";import"./FullscreenOutlined.8db19d59.js";import"./index.1113a602.js";import"./index.beed2e50.js";import"./isNumber.1fe053a3.js";import"./uuid.2b29000c.js";import"./download.f8c28611.js";import"./base64Conver.08b9f4ec.js";import"./index.ab33eaef.js";import"./index.2e4a0293.js";import"./index.6925ac2d.js";import"./useFormDesignState.cc1a9adc.js";const w=g({name:"FormRender",components:{VFormItem:C,Row:$,Col:k},props:{formData:{type:Object,default:()=>({})},schema:{type:Object,default:()=>({})},formConfig:{type:Object,default:()=>[]},setFormModel:{type:Function,default:null}},emits:["change","submit","reset"],setup(o){}});function D(o,e,M,b,j,P){const l=t("FormRender",!0),f=t("Col"),d=t("Row"),u=t("VFormItem");return["Grid"].includes(o.schema.component)?(m(),n(d,{key:0,class:"grid-row"},{default:p(()=>[(m(!0),s(a,null,i(o.schema.columns,(r,c)=>(m(),n(f,{class:"grid-col",key:c,span:r.span},{default:p(()=>[(m(!0),s(a,null,i(r.children,(F,h)=>(m(),n(l,{key:h,schema:F,formData:o.formData,formConfig:o.formConfig,setFormModel:o.setFormModel},null,8,["schema","formData","formConfig","setFormModel"]))),128))]),_:2},1032,["span"]))),128))]),_:1})):(m(),n(u,{key:1,formConfig:o.formConfig,schema:o.schema,formData:o.formData,setFormModel:o.setFormModel,onChange:e[0]||(e[0]=r=>o.$emit("change",{schema:o.schema,value:r})),onSubmit:e[1]||(e[1]=r=>o.$emit("submit",o.schema)),onReset:e[2]||(e[2]=r=>o.$emit("reset"))},v({_:2},[o.schema.componentProps&&o.schema.componentProps.slotName?{name:o.schema.componentProps.slotName,fn:p(()=>[R(o.$slots,o.schema.componentProps.slotName)]),key:"0"}:void 0]),1032,["formConfig","schema","formData","setFormModel"]))}var $o=y(w,[["render",D]]);export{$o as default};
