var k=(h,s,t)=>new Promise((e,n)=>{var f=r=>{try{i(t.next(r))}catch(a){n(a)}},d=r=>{try{i(t.throw(r))}catch(a){n(a)}},i=r=>r.done?e(r.value):Promise.resolve(r.value).then(f,d);i((t=t.apply(h,s)).next())});import{dB as x,a as T,v as w,c as B,fw as D,a7 as A,al as R,ah as V,aw as I,o as u,h as _,F as S,az as j,x as M,y as N,n as m,k as o,z as p,B as y,t as b,j as z,l as F}from"./index.8936adfc.js";import $ from"./DetailModal.e27b6f5b.js";import{B as H}from"./TableImg.bc5f2ace.js";import{k as q}from"./componentMap.371f952a.js";import{u as G}from"./useTable.855c1ea0.js";import{b as J}from"./index.144a57bb.js";import{getColumns as K}from"./data.a1602d0a.js";import"./index.9dc34828.js";import"./index.186ac41b.js";import"./get.62ec95b2.js";import"./useDescription.bdda2f83.js";import"./index.a031b534.js";import"./Checkbox.ef980fcb.js";import"./index.ea04e905.js";import"./index.992924f4.js";import"./eagerComputed.5918221c.js";import"./BasicForm.00e2f65d.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.49d1b3fd.js";import"./index.8ec43242.js";import"./index.fc0fbd70.js";import"./_baseIteratee.f05d7e29.js";import"./DeleteOutlined.8e231f8a.js";import"./index.bcf6ef30.js";import"./useRefs.215ca6c8.js";import"./Form.e91498a8.js";import"./Col.4fe65e36.js";import"./useFlexGapSupport.3a88a899.js";import"./useSize.205cd3d8.js";import"./index.b51f6c0b.js";import"./uniqBy.4d1cf5d8.js";import"./index.0b5ddde1.js";import"./useForm.06b23df2.js";import"./RadioButtonGroup.80cfb485.js";import"./useFormItem.edd024b8.js";import"./index.894818cb.js";import"./index.467c9ef6.js";import"./index.a51b36c2.js";import"./useWindowSizeFn.c4d53914.js";import"./useContentViewHeight.6afc3857.js";import"./ArrowLeftOutlined.398710a4.js";import"./index.01ed4ff8.js";import"./transButton.f5a81c82.js";import"./index.5bc6caf0.js";import"./index.aaf8b1a3.js";import"./index.61e0a1ab.js";import"./index.69870b0f.js";import"./uuid.2b29000c.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.b6662317.js";import"./FullscreenOutlined.03730ed4.js";import"./index.636a0484.js";import"./isNumber.5ce0e4d0.js";import"./fromPairs.84aabb58.js";import"./scrollTo.f466bdf4.js";import"./index.16dfc5a5.js";import"./index.e50b03d6.js";import"./index.3edac26d.js";import"./index.05b679d6.js";import"./download.09d4dc22.js";import"./base64Conver.08b9f4ec.js";import"./index.56da1a6c.js";import"./index.c6fbab17.js";const O=()=>x.get({url:"/error"}),P={class:"p-4"},Q=["src"],po=T({__name:"index",setup(h){const s=w(),t=w([]),{t:e}=B(),n=D(),[f,{setTableData:d}]=G({title:e("sys.errorLog.tableTitle"),columns:K(),actionColumn:{width:80,title:"Action",dataIndex:"action"}}),[i,{openModal:r}]=J();A(()=>n.getErrorLogInfoList,l=>{R(()=>{d(V(l))})},{immediate:!0});function a(l){s.value=l,r(!0)}function C(){throw new Error("fire vue error!")}function E(){t.value.push(`${new Date().getTime()}.png`)}function L(){return k(this,null,function*(){yield O()})}return(l,U)=>{const g=I("a-button");return u(),_("div",P,[(u(!0),_(S,null,j(t.value,c=>M((u(),_("img",{key:c,src:c,alt:""},null,8,Q)),[[N,!1]])),128)),m($,{info:s.value,onRegister:o(i)},null,8,["info","onRegister"]),m(o(H),{onRegister:o(f),class:"error-handle-table"},{toolbar:p(()=>[m(g,{onClick:C,type:"primary"},{default:p(()=>[y(b(o(e)("sys.errorLog.fireVueError")),1)]),_:1}),m(g,{onClick:E,type:"primary"},{default:p(()=>[y(b(o(e)("sys.errorLog.fireResourceError")),1)]),_:1}),m(g,{onClick:L,type:"primary"},{default:p(()=>[y(b(o(e)("sys.errorLog.fireAjaxError")),1)]),_:1})]),bodyCell:p(({column:c,record:v})=>[c.key==="action"?(u(),z(o(q),{key:0,actions:[{label:o(e)("sys.errorLog.tableActionDesc"),onClick:a.bind(null,v)}]},null,8,["actions"])):F("",!0)]),_:1},8,["onRegister"])])}}});export{po as default};