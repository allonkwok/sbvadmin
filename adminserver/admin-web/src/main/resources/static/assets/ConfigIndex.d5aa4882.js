import{B as g}from"./TableImg.bc5f2ace.js";import{k as C}from"./componentMap.371f952a.js";import{u as b}from"./useTable.855c1ea0.js";import{b as T}from"./index.144a57bb.js";import{au as _,a as B,w as S,fM as k,aw as r,o as h,h as I,n as p,z as c,B as M,j as y,l as w,fN as E}from"./index.8936adfc.js";import{C as F,c as R,s as A}from"./ConfigModal.23bc95ad.js";import"./index.a031b534.js";import"./Checkbox.ef980fcb.js";import"./index.ea04e905.js";import"./index.992924f4.js";import"./eagerComputed.5918221c.js";import"./BasicForm.00e2f65d.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.49d1b3fd.js";import"./index.8ec43242.js";import"./index.fc0fbd70.js";import"./_baseIteratee.f05d7e29.js";import"./get.62ec95b2.js";import"./DeleteOutlined.8e231f8a.js";import"./index.bcf6ef30.js";import"./useRefs.215ca6c8.js";import"./Form.e91498a8.js";import"./Col.4fe65e36.js";import"./useFlexGapSupport.3a88a899.js";import"./useSize.205cd3d8.js";import"./index.b51f6c0b.js";import"./uniqBy.4d1cf5d8.js";import"./index.0b5ddde1.js";import"./useForm.06b23df2.js";import"./RadioButtonGroup.80cfb485.js";import"./useFormItem.edd024b8.js";import"./index.894818cb.js";import"./index.467c9ef6.js";import"./index.a51b36c2.js";import"./useWindowSizeFn.c4d53914.js";import"./useContentViewHeight.6afc3857.js";import"./ArrowLeftOutlined.398710a4.js";import"./index.01ed4ff8.js";import"./transButton.f5a81c82.js";import"./index.5bc6caf0.js";import"./index.aaf8b1a3.js";import"./index.61e0a1ab.js";import"./index.69870b0f.js";import"./uuid.2b29000c.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.b6662317.js";import"./FullscreenOutlined.03730ed4.js";import"./index.636a0484.js";import"./isNumber.5ce0e4d0.js";import"./fromPairs.84aabb58.js";import"./scrollTo.f466bdf4.js";import"./index.16dfc5a5.js";import"./index.e50b03d6.js";import"./index.3edac26d.js";import"./index.05b679d6.js";import"./download.09d4dc22.js";import"./base64Conver.08b9f4ec.js";import"./index.56da1a6c.js";import"./index.c6fbab17.js";const D=B({name:"ConfigManagement",components:{BasicTable:g,ConfigModal:F,TableAction:C},setup(){const[o,{openModal:i}]=T(),u=S({}),[d,{reload:n,updateTableDataRecord:f}]=b({title:"\u5217\u8868",api:k,rowKey:"id",columns:R,formConfig:{labelWidth:120,schemas:A,autoSubmitOnEnter:!0},showIndexColumn:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,handleSearchInfoFn(e){return e},actionColumn:{width:120,title:"\u64CD\u4F5C",dataIndex:"action"}});function a(){i(!0,{isUpdate:!1})}function m(e){i(!0,{record:e,isUpdate:!0})}function s(e){E(e.id).then(t=>{}).catch(t=>{}).finally(()=>{n()})}function l({isUpdate:e,values:t}){if(e){const $=f(t.id,t)}else n()}return{registerTable:d,registerModal:o,handleCreate:a,handleEdit:m,handleDelete:s,handleSuccess:l,searchInfo:u}}});function N(o,i,u,d,n,f){const a=r("a-button"),m=r("TableAction"),s=r("BasicTable"),l=r("ConfigModal");return h(),I("div",null,[p(s,{onRegister:o.registerTable,searchInfo:o.searchInfo},{toolbar:c(()=>[p(a,{type:"primary",onClick:o.handleCreate},{default:c(()=>[M(" \u65B0\u589E ")]),_:1},8,["onClick"])]),bodyCell:c(({column:e,record:t})=>[e.key==="action"?(h(),y(m,{key:0,actions:[{icon:"clarity:note-edit-line",onClick:o.handleEdit.bind(null,t)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",placement:"left",confirm:o.handleDelete.bind(null,t)}}]},null,8,["actions"])):w("",!0)]),_:1},8,["onRegister","searchInfo"]),p(l,{onRegister:o.registerModal,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"])])}var Lo=_(D,[["render",N]]);export{Lo as default};
