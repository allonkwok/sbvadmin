import{B as A}from"./TableImg.9a18ed12.js";import"./componentMap.8c50118e.js";import{u as K}from"./useTable.43671d5b.js";import{getBasicColumns as m,getBasicShortColumns as L}from"./tableData.f0043ece.js";import{au as P,a as v,aw as p,o as $,h as M,i as g,n as t,z as u,B as i,E as N}from"./index.f2ab8b4c.js";import{d as V}from"./table.b042a92a.js";import"./index.4940ef40.js";import"./Checkbox.3829cf98.js";import"./index.c8751fef.js";import"./index.18484515.js";import"./eagerComputed.31b81699.js";import"./BasicForm.4e9d0436.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.280e080c.js";import"./index.f1b4579a.js";import"./index.e4cc3c47.js";import"./_baseIteratee.1cfb04f5.js";import"./get.98926b26.js";import"./DeleteOutlined.c33aea27.js";import"./index.c7f5de7c.js";import"./useRefs.26c927e3.js";import"./Form.f2630687.js";import"./Col.ad1a1837.js";import"./useFlexGapSupport.158efb8d.js";import"./useSize.0f8fa8a7.js";import"./index.71210517.js";import"./uniqBy.9c174cb3.js";import"./index.b4cf2183.js";import"./useWindowSizeFn.1bf827f4.js";import"./FullscreenOutlined.ae022bec.js";import"./index.c2f346bd.js";import"./useForm.725da786.js";import"./RadioButtonGroup.d462957e.js";import"./useFormItem.806f7be4.js";import"./index.da439a09.js";import"./index.78ffb938.js";import"./index.55397a9a.js";import"./useContentViewHeight.c91509c3.js";import"./ArrowLeftOutlined.e955dbdc.js";import"./index.f0593c6b.js";import"./transButton.71d28799.js";import"./index.8f9daac0.js";import"./index.4ec03165.js";import"./index.81cf2405.js";import"./index.56479c45.js";import"./uuid.2b29000c.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.b15e535e.js";import"./index.3bc6e64d.js";import"./isNumber.34251135.js";import"./fromPairs.84aabb58.js";import"./scrollTo.10baa6d7.js";import"./index.747996d5.js";import"./index.6bc186dc.js";import"./index.69a8cb8b.js";import"./index.8e5c709c.js";import"./download.44991772.js";import"./base64Conver.08b9f4ec.js";import"./index.ef2bbb95.js";import"./index.9bdb7912.js";import"./select.38b2364a.js";const z=v({components:{BasicTable:A},setup(){const{createMessage:o}=N();function n(){}const[l,{setLoading:a,setColumns:s,getColumns:C,getDataSource:e,getRawDataSource:r,reload:c,getPaginationRef:q,setPagination:f,getSelectRows:G,getSelectRowKeys:J,setSelectedRowKeys:d,clearSelectedRowKeys:F}]=K({canResize:!0,title:"useTable\u793A\u4F8B",titleHelpMessage:"\u4F7F\u7528useTable\u8C03\u7528\u8868\u683C\u5185\u65B9\u6CD5",api:V,columns:m(),defSort:{field:"name",order:"ascend"},rowKey:"id",showTableSetting:!0,onChange:n,rowSelection:{type:"checkbox"},onColumnsChange:O=>{}});function B(){a(!0),setTimeout(()=>{a(!1)},1e3)}function k(){s(L())}function S(){s(m()),c({page:1})}function b(){o.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01")}function w(){o.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01")}function D(){o.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01")}function R(){o.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01")}function E(){f({current:2}),c()}function T(){o.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01")}function _(){o.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01")}function h(){d(["0","1","2"])}function y(){F()}return{registerTable:l,changeLoading:B,changeColumns:k,reloadTable:S,getColumn:b,getTableData:w,getTableRawData:D,getPagination:R,setPaginationInfo:E,getSelectRowList:T,getSelectRowKeyList:_,setSelectedRowKeyList:h,clearSelect:y,onChange:n}}}),I={class:"p-4"},H={class:"mb-4"},U={class:"mb-4"};function j(o,n,l,a,s,C){const e=p("a-button"),r=p("BasicTable");return $(),M("div",I,[g("div",H,[t(e,{class:"mr-2",onClick:o.reloadTable},{default:u(()=>[i(" \u8FD8\u539F ")]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.changeLoading},{default:u(()=>[i(" \u5F00\u542Floading ")]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.changeColumns},{default:u(()=>[i(" \u66F4\u6539Columns ")]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.getColumn},{default:u(()=>[i(" \u83B7\u53D6Columns ")]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.getTableData},{default:u(()=>[i(" \u83B7\u53D6\u8868\u683C\u6570\u636E ")]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.getTableRawData},{default:u(()=>[i(" \u83B7\u53D6\u63A5\u53E3\u539F\u59CB\u6570\u636E ")]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.setPaginationInfo},{default:u(()=>[i(" \u8DF3\u8F6C\u5230\u7B2C2\u9875 ")]),_:1},8,["onClick"])]),g("div",U,[t(e,{class:"mr-2",onClick:o.getSelectRowList},{default:u(()=>[i(" \u83B7\u53D6\u9009\u4E2D\u884C ")]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.getSelectRowKeyList},{default:u(()=>[i(" \u83B7\u53D6\u9009\u4E2D\u884CKey ")]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.setSelectedRowKeyList},{default:u(()=>[i(" \u8BBE\u7F6E\u9009\u4E2D\u884C ")]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.clearSelect},{default:u(()=>[i(" \u6E05\u7A7A\u9009\u4E2D\u884C ")]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.getPagination},{default:u(()=>[i(" \u83B7\u53D6\u5206\u9875\u4FE1\u606F ")]),_:1},8,["onClick"])]),t(r,{onRegister:o.registerTable},null,8,["onRegister"])])}var ue=P(z,[["render",j]]);export{ue as default};