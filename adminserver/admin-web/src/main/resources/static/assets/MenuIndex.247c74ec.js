import{B as b}from"./TableImg.9a18ed12.js";import{k as g}from"./componentMap.8c50118e.js";import{u as C}from"./useTable.43671d5b.js";import{g as T,d as w}from"./System.30e4f435.js";import{u as D}from"./index.90bff6e0.js";import{M as _,c as S,s as k}from"./MenuDrawer.a307bf6c.js";import{au as B,a as M,aw as r,o as h,h as F,n as c,z as l,B as y,j as E,l as A,al as R,E as v}from"./index.f2ab8b4c.js";import"./index.4940ef40.js";import"./Checkbox.3829cf98.js";import"./index.c8751fef.js";import"./index.18484515.js";import"./eagerComputed.31b81699.js";import"./BasicForm.4e9d0436.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.280e080c.js";import"./index.f1b4579a.js";import"./index.e4cc3c47.js";import"./_baseIteratee.1cfb04f5.js";import"./get.98926b26.js";import"./DeleteOutlined.c33aea27.js";import"./index.c7f5de7c.js";import"./useRefs.26c927e3.js";import"./Form.f2630687.js";import"./Col.ad1a1837.js";import"./useFlexGapSupport.158efb8d.js";import"./useSize.0f8fa8a7.js";import"./index.71210517.js";import"./uniqBy.9c174cb3.js";import"./index.b4cf2183.js";import"./useWindowSizeFn.1bf827f4.js";import"./FullscreenOutlined.ae022bec.js";import"./index.c2f346bd.js";import"./useForm.725da786.js";import"./RadioButtonGroup.d462957e.js";import"./useFormItem.806f7be4.js";import"./index.da439a09.js";import"./index.78ffb938.js";import"./index.55397a9a.js";import"./useContentViewHeight.c91509c3.js";import"./ArrowLeftOutlined.e955dbdc.js";import"./index.f0593c6b.js";import"./transButton.71d28799.js";import"./index.8f9daac0.js";import"./index.4ec03165.js";import"./index.81cf2405.js";import"./index.56479c45.js";import"./uuid.2b29000c.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.b15e535e.js";import"./index.3bc6e64d.js";import"./isNumber.34251135.js";import"./fromPairs.84aabb58.js";import"./scrollTo.10baa6d7.js";import"./index.747996d5.js";import"./index.6bc186dc.js";import"./index.69a8cb8b.js";import"./index.8e5c709c.js";import"./download.44991772.js";import"./base64Conver.08b9f4ec.js";import"./index.ef2bbb95.js";import"./index.9bdb7912.js";import"./index.7aa90c0e.js";const x=M({name:"MenuManagement",components:{BasicTable:b,MenuDrawer:_,TableAction:g},setup(){const[e,{openDrawer:i}]=D(),[u,{reload:n,expandAll:d}]=C({title:"\u83DC\u5355\u5217\u8868",api:T,columns:S,formConfig:{labelWidth:120,schemas:k},isTreeTable:!0,pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",fixed:void 0}});function f(){i(!0,{isUpdate:!1})}function a(o){i(!0,{record:o,isUpdate:!0})}function s(o){const{createMessage:t}=v();w(o.id).then(()=>{t.success("1")}).catch(()=>{t.error("0")}).finally(()=>{n()})}function m(){n()}function p(){R(d)}return{registerTable:u,registerDrawer:e,handleCreate:f,handleEdit:a,handleDelete:s,handleSuccess:m,onFetchSuccess:p}}});function $(e,i,u,n,d,f){const a=r("a-button"),s=r("TableAction"),m=r("BasicTable"),p=r("MenuDrawer");return h(),F("div",null,[c(m,{onRegister:e.registerTable,onFetchSuccess:e.onFetchSuccess},{toolbar:l(()=>[c(a,{type:"primary",onClick:e.handleCreate},{default:l(()=>[y(" \u65B0\u589E\u83DC\u5355 ")]),_:1},8,["onClick"])]),bodyCell:l(({column:o,record:t})=>[o.key==="action"?(h(),E(s,{key:0,actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,t)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",placement:"left",confirm:e.handleDelete.bind(null,t)}}]},null,8,["actions"])):A("",!0)]),_:1},8,["onRegister","onFetchSuccess"]),c(p,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var qe=B(x,[["render",$]]);export{qe as default};
