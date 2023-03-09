import{B as h}from"./TableImg.9a18ed12.js";import{k as g}from"./componentMap.8c50118e.js";import{u as C}from"./useTable.43671d5b.js";import{b}from"./index.b4cf2183.js";import{au as T,a as S,w as I,fM as M,aw as l,o as u,h as _,n as f,z as B,j as k,l as w,fN as y}from"./index.f2ab8b4c.js";import{C as F,c as E,s as R}from"./ConfigModal.c3895e24.js";import"./index.4940ef40.js";import"./Checkbox.3829cf98.js";import"./index.c8751fef.js";import"./index.18484515.js";import"./eagerComputed.31b81699.js";import"./BasicForm.4e9d0436.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.280e080c.js";import"./index.f1b4579a.js";import"./index.e4cc3c47.js";import"./_baseIteratee.1cfb04f5.js";import"./get.98926b26.js";import"./DeleteOutlined.c33aea27.js";import"./index.c7f5de7c.js";import"./useRefs.26c927e3.js";import"./Form.f2630687.js";import"./Col.ad1a1837.js";import"./useFlexGapSupport.158efb8d.js";import"./useSize.0f8fa8a7.js";import"./index.71210517.js";import"./uniqBy.9c174cb3.js";import"./index.c2f346bd.js";import"./useForm.725da786.js";import"./RadioButtonGroup.d462957e.js";import"./useFormItem.806f7be4.js";import"./index.da439a09.js";import"./index.78ffb938.js";import"./index.55397a9a.js";import"./useWindowSizeFn.1bf827f4.js";import"./useContentViewHeight.c91509c3.js";import"./ArrowLeftOutlined.e955dbdc.js";import"./index.f0593c6b.js";import"./transButton.71d28799.js";import"./index.8f9daac0.js";import"./index.4ec03165.js";import"./index.81cf2405.js";import"./index.56479c45.js";import"./uuid.2b29000c.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.b15e535e.js";import"./FullscreenOutlined.ae022bec.js";import"./index.3bc6e64d.js";import"./isNumber.34251135.js";import"./fromPairs.84aabb58.js";import"./scrollTo.10baa6d7.js";import"./index.747996d5.js";import"./index.6bc186dc.js";import"./index.69a8cb8b.js";import"./index.8e5c709c.js";import"./download.44991772.js";import"./base64Conver.08b9f4ec.js";import"./index.ef2bbb95.js";import"./index.9bdb7912.js";const A=S({name:"ConfigManagement",components:{BasicTable:h,ConfigModal:F,TableAction:g},setup(){const[e,{openModal:r}]=b(),p=I({}),[c,{reload:i,updateTableDataRecord:d}]=C({title:"\u5217\u8868",api:M,rowKey:"id",columns:E,formConfig:{labelWidth:120,schemas:R,autoSubmitOnEnter:!0},showIndexColumn:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,handleSearchInfoFn(o){return o},actionColumn:{width:120,title:"\u64CD\u4F5C",dataIndex:"action"}});function n(){r(!0,{isUpdate:!1})}function a(o){r(!0,{record:o,isUpdate:!0})}function m(o){y(o.id).then(t=>{}).catch(t=>{}).finally(()=>{i()})}function s({isUpdate:o,values:t}){if(o){const $=d(t.id,t)}else i()}return{registerTable:c,registerModal:e,handleCreate:n,handleEdit:a,handleDelete:m,handleSuccess:s,searchInfo:p}}});function D(e,r,p,c,i,d){const n=l("TableAction"),a=l("BasicTable"),m=l("ConfigModal");return u(),_("div",null,[f(a,{onRegister:e.registerTable,searchInfo:e.searchInfo},{bodyCell:B(({column:s,record:o})=>[s.key==="action"?(u(),k(n,{key:0,actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",placement:"left",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])):w("",!0)]),_:1},8,["onRegister","searchInfo"]),f(m,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var Ko=T(A,[["render",D]]);export{Ko as default};