var k=(h,s,t)=>new Promise((e,n)=>{var f=r=>{try{i(t.next(r))}catch(a){n(a)}},d=r=>{try{i(t.throw(r))}catch(a){n(a)}},i=r=>r.done?e(r.value):Promise.resolve(r.value).then(f,d);i((t=t.apply(h,s)).next())});import{dB as x,a as T,v as w,c as B,fw as D,a7 as A,al as R,ah as V,aw as I,o as u,h as _,F as S,az as j,x as M,y as N,n as m,k as o,z as p,B as y,t as b,j as z,l as F}from"./index.f2ab8b4c.js";import $ from"./DetailModal.3f52ca0a.js";import{B as H}from"./TableImg.9a18ed12.js";import{k as q}from"./componentMap.8c50118e.js";import{u as G}from"./useTable.43671d5b.js";import{b as J}from"./index.b4cf2183.js";import{getColumns as K}from"./data.c192fd7e.js";import"./index.38bbe81b.js";import"./index.fe9f2ca1.js";import"./get.98926b26.js";import"./useDescription.993bb7e4.js";import"./index.4940ef40.js";import"./Checkbox.3829cf98.js";import"./index.c8751fef.js";import"./index.18484515.js";import"./eagerComputed.31b81699.js";import"./BasicForm.4e9d0436.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.280e080c.js";import"./index.f1b4579a.js";import"./index.e4cc3c47.js";import"./_baseIteratee.1cfb04f5.js";import"./DeleteOutlined.c33aea27.js";import"./index.c7f5de7c.js";import"./useRefs.26c927e3.js";import"./Form.f2630687.js";import"./Col.ad1a1837.js";import"./useFlexGapSupport.158efb8d.js";import"./useSize.0f8fa8a7.js";import"./index.71210517.js";import"./uniqBy.9c174cb3.js";import"./index.c2f346bd.js";import"./useForm.725da786.js";import"./RadioButtonGroup.d462957e.js";import"./useFormItem.806f7be4.js";import"./index.da439a09.js";import"./index.78ffb938.js";import"./index.55397a9a.js";import"./useWindowSizeFn.1bf827f4.js";import"./useContentViewHeight.c91509c3.js";import"./ArrowLeftOutlined.e955dbdc.js";import"./index.f0593c6b.js";import"./transButton.71d28799.js";import"./index.8f9daac0.js";import"./index.4ec03165.js";import"./index.81cf2405.js";import"./index.56479c45.js";import"./uuid.2b29000c.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.b15e535e.js";import"./FullscreenOutlined.ae022bec.js";import"./index.3bc6e64d.js";import"./isNumber.34251135.js";import"./fromPairs.84aabb58.js";import"./scrollTo.10baa6d7.js";import"./index.747996d5.js";import"./index.6bc186dc.js";import"./index.69a8cb8b.js";import"./index.8e5c709c.js";import"./download.44991772.js";import"./base64Conver.08b9f4ec.js";import"./index.ef2bbb95.js";import"./index.9bdb7912.js";const O=()=>x.get({url:"/error"}),P={class:"p-4"},Q=["src"],po=T({__name:"index",setup(h){const s=w(),t=w([]),{t:e}=B(),n=D(),[f,{setTableData:d}]=G({title:e("sys.errorLog.tableTitle"),columns:K(),actionColumn:{width:80,title:"Action",dataIndex:"action"}}),[i,{openModal:r}]=J();A(()=>n.getErrorLogInfoList,l=>{R(()=>{d(V(l))})},{immediate:!0});function a(l){s.value=l,r(!0)}function C(){throw new Error("fire vue error!")}function E(){t.value.push(`${new Date().getTime()}.png`)}function L(){return k(this,null,function*(){yield O()})}return(l,U)=>{const g=I("a-button");return u(),_("div",P,[(u(!0),_(S,null,j(t.value,c=>M((u(),_("img",{key:c,src:c,alt:""},null,8,Q)),[[N,!1]])),128)),m($,{info:s.value,onRegister:o(i)},null,8,["info","onRegister"]),m(o(H),{onRegister:o(f),class:"error-handle-table"},{toolbar:p(()=>[m(g,{onClick:C,type:"primary"},{default:p(()=>[y(b(o(e)("sys.errorLog.fireVueError")),1)]),_:1}),m(g,{onClick:E,type:"primary"},{default:p(()=>[y(b(o(e)("sys.errorLog.fireResourceError")),1)]),_:1}),m(g,{onClick:L,type:"primary"},{default:p(()=>[y(b(o(e)("sys.errorLog.fireAjaxError")),1)]),_:1})]),bodyCell:p(({column:c,record:v})=>[c.key==="action"?(u(),z(o(q),{key:0,actions:[{label:o(e)("sys.errorLog.tableActionDesc"),onClick:a.bind(null,v)}]},null,8,["actions"])):F("",!0)]),_:1},8,["onRegister"])])}}});export{po as default};
