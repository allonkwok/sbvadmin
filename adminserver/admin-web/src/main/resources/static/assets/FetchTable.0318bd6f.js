import{B as c}from"./TableImg.9e89c887.js";import"./BasicForm.e2d5cc76.js";import{u as l}from"./useTable.98436359.js";import{getBasicColumns as d}from"./tableData.0902c609.js";import{P as _}from"./index.44a6cc14.js";import{d as f}from"./table.03dd1559.js";import{aw as g,a as B,ay as e,o as C,j as h,z as t,n as i,B as n}from"./index.26fcfc43.js";import"./index.b325d19a.js";import"./Checkbox.2a1a359d.js";import"./index.dc14bff5.js";import"./index.27b9c0ab.js";import"./eagerComputed.c053c9c2.js";import"./useForm.e26a883f.js";import"./index.edc7a53e.js";import"./index.599cf005.js";import"./index.53f940a3.js";import"./uuid.2b29000c.js";import"./index.9028474e.js";import"./_baseIteratee.7cbe611d.js";import"./get.3a52d42a.js";import"./DeleteOutlined.849ecd53.js";import"./index.e58470bc.js";import"./useRefs.753293e1.js";import"./Form.a60d3742.js";import"./Col.ad062a60.js";import"./useFlexGapSupport.71c58254.js";import"./useSize.25d44e1a.js";import"./useWindowSizeFn.d178ecd3.js";import"./index.2cf2b49a.js";import"./FullscreenOutlined.eba4c2eb.js";import"./index.68631c3d.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.e3ed3ea8.js";import"./index.915486e3.js";import"./fromPairs.84aabb58.js";import"./scrollTo.15c9e589.js";import"./index.2a41d039.js";/* empty css              *//* empty css              */import"./index.6b155408.js";import"./transButton.2853c7d5.js";import"./index.d4067d83.js";import"./index.c7154726.js";import"./download.7b60a2b1.js";import"./base64Conver.08b9f4ec.js";import"./index.42baef15.js";import"./index.995e13ea.js";import"./uniqBy.1499beda.js";import"./index.2245f205.js";import"./index.f2fc0df8.js";import"./useContentViewHeight.4f2058b0.js";import"./ArrowLeftOutlined.2e1e63d4.js";import"./index.672a21ec.js";const b=B({components:{BasicTable:c,PageWrapper:_},setup(){const[o,{reload:r}]=l({title:"\u8FDC\u7A0B\u52A0\u8F7D\u793A\u4F8B",api:f,columns:d(),pagination:{pageSize:10}});function p(){r()}function m(){r({page:1})}return{registerTable:o,handleReloadCurrent:p,handleReload:m}}}),T=n(" \u5237\u65B0\u5F53\u524D\u9875 "),k=n(" \u5237\u65B0\u5E76\u8FD4\u56DE\u7B2C\u4E00\u9875 ");function F(o,r,p,m,R,y){const a=e("a-button"),s=e("BasicTable"),u=e("PageWrapper");return C(),h(u,{contentBackground:"",contentClass:"flex",dense:"",contentFullHeight:"",fixedHeight:""},{default:t(()=>[i(s,{onRegister:o.registerTable},{toolbar:t(()=>[i(a,{type:"primary",onClick:o.handleReloadCurrent},{default:t(()=>[T]),_:1},8,["onClick"]),i(a,{type:"primary",onClick:o.handleReload},{default:t(()=>[k]),_:1},8,["onClick"])]),_:1},8,["onRegister"])]),_:1})}var Do=g(b,[["render",F]]);export{Do as default};