import{B as l}from"./TableImg.e2527ece.js";import{k as d}from"./componentMap.01f27cc8.js";import{u as s}from"./useTable.a9ae5090.js";import{d as c}from"./table.fd32b2f4.js";import{au as F,a as b,aw as m,o as n,h as f,n as h,z as B,j as A,l as C}from"./index.905b6ed8.js";import"./index.684e1392.js";import"./Checkbox.a0d3af01.js";import"./index.f88ad8f0.js";import"./index.7bb61aa7.js";import"./eagerComputed.70942be7.js";import"./BasicForm.de1646c2.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.b8a7c6af.js";import"./index.8246e078.js";import"./index.826703cd.js";import"./_baseIteratee.9d084802.js";import"./get.d9b03bf2.js";import"./DeleteOutlined.f7c782d6.js";import"./index.addeb375.js";import"./useRefs.051034cf.js";import"./Form.0860c3e8.js";import"./Col.658e3026.js";import"./useFlexGapSupport.f9323b23.js";import"./useSize.9a5f98da.js";import"./index.d4cf7918.js";import"./uniqBy.74b630a2.js";import"./index.e4a2926f.js";import"./useWindowSizeFn.a715beed.js";import"./FullscreenOutlined.8db19d59.js";import"./index.6d8fa33a.js";import"./useForm.c0c4e3d2.js";import"./RadioButtonGroup.8d132c36.js";import"./useFormItem.ca9a0ff3.js";import"./index.639bba97.js";import"./index.3f062146.js";import"./index.ad0e48f2.js";import"./useContentViewHeight.792e65c3.js";import"./ArrowLeftOutlined.ddc113ae.js";import"./index.c32c4380.js";import"./transButton.3fd1ff57.js";import"./index.3ef00fec.js";import"./index.ceac0c64.js";import"./index.5211db85.js";import"./index.706573f4.js";import"./uuid.2b29000c.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.3fdb2e12.js";import"./index.beed2e50.js";import"./isNumber.1fe053a3.js";import"./fromPairs.84aabb58.js";import"./scrollTo.4fb5cd7a.js";import"./index.48cdd2f0.js";import"./index.f79fd3d6.js";import"./index.220de5a7.js";import"./index.1113a602.js";import"./download.f8c28611.js";import"./base64Conver.08b9f4ec.js";import"./index.ab33eaef.js";import"./index.2e4a0293.js";const T=[{title:"ID",dataIndex:"id",fixed:"left",width:280},{title:"\u59D3\u540D",dataIndex:"name",width:260},{title:"\u5730\u5740",dataIndex:"address"},{title:"\u7F16\u53F7",dataIndex:"no",width:300},{title:"\u5F00\u59CB\u65F6\u95F4",width:200,dataIndex:"beginTime"},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"endTime",width:200}],_=b({components:{BasicTable:l,TableAction:d},setup(){const[t]=s({title:"TableAction\u7EC4\u4EF6\u53CA\u56FA\u5B9A\u5217\u793A\u4F8B",api:c,columns:T,rowSelection:{type:"radio"},bordered:!0,actionColumn:{width:160,title:"Action",dataIndex:"action"}});function o(e){}function i(e){}return{registerTable:t,handleDelete:o,handleOpen:i}}}),w={class:"p-4"};function x(t,o,i,e,D,I){const p=m("TableAction"),a=m("BasicTable");return n(),f("div",w,[h(a,{onRegister:t.registerTable},{bodyCell:B(({column:u,record:r})=>[u.key==="action"?(n(),A(p,{key:0,actions:[{label:"\u5220\u9664",icon:"ic:outline-delete-outline",onClick:t.handleDelete.bind(null,r)}],dropDownActions:[{label:"\u542F\u7528",popConfirm:{title:"\u662F\u5426\u542F\u7528\uFF1F",confirm:t.handleOpen.bind(null,r)}}]},null,8,["actions","dropDownActions"])):C("",!0)]),_:1},8,["onRegister"])])}var Nt=F(_,[["render",x]]);export{Nt as default};
