import{B as h}from"./TableImg.292e04d9.js";import"./componentMap.89831d4d.js";import{u as _}from"./useTable.f07faccc.js";import{getBasicColumns as k,getFormConfig as y}from"./tableData.f8e139b8.js";import{au as B,a as b,v,aw as u,o as l,j as C,z as e,B as c,n as f,h as g,F as A,i as E,t as T}from"./index.21dbddea.js";import{A as w}from"./index.ba1296a1.js";import{d as D}from"./table.5d23c004.js";import"./index.82fe2da0.js";import"./Checkbox.b4e3675e.js";import"./index.17dda3d9.js";import"./index.2ddb10b6.js";import"./eagerComputed.1ea2a8d9.js";import"./BasicForm.f15e10d2.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.ce9802a8.js";import"./index.a37178f8.js";import"./index.c3a78ee8.js";import"./_baseIteratee.165cbc4f.js";import"./get.41fb1f2f.js";import"./DeleteOutlined.1931f992.js";import"./index.94534871.js";import"./useRefs.15808103.js";import"./Form.b6c45920.js";import"./Col.2a58f9a8.js";import"./useFlexGapSupport.06ccabe5.js";import"./useSize.e955a44e.js";import"./index.5e62cd22.js";import"./uniqBy.45490986.js";import"./index.5d9418ce.js";import"./useWindowSizeFn.7490f562.js";import"./FullscreenOutlined.1b876098.js";import"./index.4a1de338.js";import"./useForm.e0cbc007.js";import"./RadioButtonGroup.bc4b2238.js";import"./useFormItem.1145f6c8.js";import"./index.262aa95b.js";import"./index.8d2cb20f.js";import"./index.2e41d04d.js";import"./useContentViewHeight.22c0cdcf.js";import"./ArrowLeftOutlined.a8bf1d79.js";import"./index.dd967332.js";import"./transButton.25f118c6.js";import"./index.ec76c75d.js";import"./index.c91c606e.js";import"./index.193019b5.js";import"./index.63df3ac3.js";import"./uuid.2b29000c.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.169c31ba.js";import"./index.44538731.js";import"./isNumber.9b40a4c7.js";import"./fromPairs.84aabb58.js";import"./scrollTo.667abe92.js";import"./index.8d01bfec.js";import"./index.299e002f.js";import"./index.903acead.js";import"./download.68505b66.js";import"./base64Conver.08b9f4ec.js";import"./index.7b25a8ae.js";import"./index.ead49ec7.js";import"./select.5a545c5a.js";const S=b({components:{BasicTable:h,AAlert:w},setup(){const o=v([]),[i,{getForm:F}]=_({title:"\u5F00\u542F\u641C\u7D22\u533A\u57DF",api:D,columns:k(),useSearchForm:!0,formConfig:y(),showTableSetting:!0,tableSetting:{fullScreen:!0},showIndexColumn:!1,rowKey:"id",rowSelection:{type:"checkbox",selectedRowKeys:o,onSelect:p,onSelectAll:s}});function d(){}function p(t,m){m?o.value=[...o.value,t.id]:o.value=o.value.filter(r=>r!==t.id)}function s(t,m,r){const a=r.map(n=>n.id);t?o.value=[...o.value,...a]:o.value=o.value.filter(n=>!a.includes(n))}return{registerTable:i,getFormValues:d,checkedKeys:o,onSelect:p,onSelectAll:s}}}),K={key:1};function V(o,i,F,d,p,s){const t=u("a-button"),m=u("a-alert"),r=u("BasicTable");return l(),C(r,{onRegister:o.registerTable},{"form-custom":e(()=>[c(" custom-slot ")]),headerTop:e(()=>[f(m,{type:"info","show-icon":""},{message:e(()=>[o.checkedKeys.length>0?(l(),g(A,{key:0},[E("span",null,"\u5DF2\u9009\u4E2D"+T(o.checkedKeys.length)+"\u6761\u8BB0\u5F55(\u53EF\u8DE8\u9875)",1),f(t,{type:"link",onClick:i[0]||(i[0]=a=>o.checkedKeys=[]),size:"small"},{default:e(()=>[c("\u6E05\u7A7A")]),_:1})],64)):(l(),g("span",K,"\u672A\u9009\u4E2D\u4EFB\u4F55\u9879\u76EE"))]),_:1})]),toolbar:e(()=>[f(t,{type:"primary",onClick:o.getFormValues},{default:e(()=>[c("\u83B7\u53D6\u8868\u5355\u6570\u636E")]),_:1},8,["onClick"])]),_:1},8,["onRegister"])}var Go=B(S,[["render",V]]);export{Go as default};