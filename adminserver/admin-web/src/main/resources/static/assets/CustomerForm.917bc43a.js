import{B as C}from"./BasicForm.4e9d0436.js";import"./componentMap.8c50118e.js";import{u as B}from"./useForm.725da786.js";import"./RadioButtonGroup.d462957e.js";import{au as E,a as g,cD as F,I as n,aw as e,o as h,j as b,z as p,n as i,bS as v,E as A}from"./index.f2ab8b4c.js";import{P}from"./index.da439a09.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.280e080c.js";import"./index.f1b4579a.js";import"./index.e4cc3c47.js";import"./_baseIteratee.1cfb04f5.js";import"./get.98926b26.js";import"./DeleteOutlined.c33aea27.js";import"./index.c7f5de7c.js";import"./useRefs.26c927e3.js";import"./Form.f2630687.js";import"./Col.ad1a1837.js";import"./useFlexGapSupport.158efb8d.js";import"./useSize.0f8fa8a7.js";import"./index.71210517.js";import"./uniqBy.9c174cb3.js";import"./index.b4cf2183.js";import"./useWindowSizeFn.1bf827f4.js";import"./FullscreenOutlined.ae022bec.js";import"./index.c2f346bd.js";import"./index.4940ef40.js";import"./Checkbox.3829cf98.js";import"./index.c8751fef.js";import"./index.56479c45.js";import"./index.81cf2405.js";import"./index.8f9daac0.js";import"./index.4ec03165.js";import"./index.6bc186dc.js";import"./useFormItem.806f7be4.js";import"./index.18484515.js";import"./eagerComputed.31b81699.js";import"./transButton.71d28799.js";import"./index.69a8cb8b.js";import"./index.8e5c709c.js";import"./index.3bc6e64d.js";import"./isNumber.34251135.js";import"./uuid.2b29000c.js";import"./download.44991772.js";import"./base64Conver.08b9f4ec.js";import"./index.ef2bbb95.js";import"./index.9bdb7912.js";import"./index.78ffb938.js";import"./index.55397a9a.js";import"./useContentViewHeight.c91509c3.js";import"./ArrowLeftOutlined.e955dbdc.js";import"./index.f0593c6b.js";const u=[{field:"field1",component:"Input",label:"render\u65B9\u5F0F",colProps:{span:8},rules:[{required:!0}],render:({model:o,field:t})=>v(n,{placeholder:"\u8BF7\u8F93\u5165",value:o[t],onChange:r=>{o[t]=r.target.value}})},{field:"field2",component:"Input",label:"render\u7EC4\u4EF6slot",colProps:{span:8},rules:[{required:!0}],renderComponentContent:()=>({suffix:()=>"suffix"})},{field:"field3",component:"Input",label:"\u81EA\u5B9A\u4E49Slot",slot:"f3",colProps:{span:8},rules:[{required:!0}]}],S=g({components:{BasicForm:C,CollapseContainer:F,PageWrapper:P,[n.name]:n},setup(){const{createMessage:o}=A(),[t,{setProps:r}]=B({labelWidth:120,schemas:u,actionColOptions:{span:24}});return{register:t,schemas:u,handleSubmit:m=>{o.success("click search,values:"+JSON.stringify(m))},setProps:r}}});function I(o,t,r,m,x,W){const l=e("a-input"),c=e("BasicForm"),d=e("CollapseContainer"),f=e("PageWrapper");return h(),b(f,{title:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u793A\u4F8B"},{default:p(()=>[i(d,{title:"\u81EA\u5B9A\u4E49\u8868\u5355"},{default:p(()=>[i(c,{onRegister:o.register,onSubmit:o.handleSubmit},{f3:p(({model:a,field:s})=>[i(l,{value:a[s],"onUpdate:value":_=>a[s]=_,placeholder:"\u81EA\u5B9A\u4E49slot"},null,8,["value","onUpdate:value"])]),_:1},8,["onRegister","onSubmit"])]),_:1})]),_:1})}var Wo=E(S,[["render",I]]);export{Wo as default};
