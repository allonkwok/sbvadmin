import{D as f}from"./index.38bbe81b.js";import{B as _}from"./TableImg.9a18ed12.js";import"./componentMap.8c50118e.js";import{u as l}from"./useTable.43671d5b.js";import{P as T}from"./index.da439a09.js";import{au as g,a as h,aw as t,o as b,j as D,z as B,n as o}from"./index.f2ab8b4c.js";import{D as c}from"./index.f1b4579a.js";import{refundSchema as v,refundData as S,personSchema as y,personData as C,refundTableData as w,refundTableSchema as F,refundTimeTableSchema as R,refundTimeTableData as E}from"./data.0660a55f.js";import"./index.fe9f2ca1.js";import"./get.98926b26.js";import"./index.4940ef40.js";import"./Checkbox.3829cf98.js";import"./index.c8751fef.js";import"./index.18484515.js";import"./eagerComputed.31b81699.js";import"./BasicForm.4e9d0436.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.280e080c.js";import"./index.e4cc3c47.js";import"./_baseIteratee.1cfb04f5.js";import"./DeleteOutlined.c33aea27.js";import"./index.c7f5de7c.js";import"./useRefs.26c927e3.js";import"./Form.f2630687.js";import"./Col.ad1a1837.js";import"./useFlexGapSupport.158efb8d.js";import"./useSize.0f8fa8a7.js";import"./index.71210517.js";import"./uniqBy.9c174cb3.js";import"./index.b4cf2183.js";import"./useWindowSizeFn.1bf827f4.js";import"./FullscreenOutlined.ae022bec.js";import"./index.c2f346bd.js";import"./useForm.725da786.js";import"./RadioButtonGroup.d462957e.js";import"./useFormItem.806f7be4.js";import"./index.8f9daac0.js";import"./index.4ec03165.js";import"./index.81cf2405.js";import"./index.56479c45.js";import"./uuid.2b29000c.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.b15e535e.js";import"./index.3bc6e64d.js";import"./isNumber.34251135.js";import"./fromPairs.84aabb58.js";import"./scrollTo.10baa6d7.js";import"./index.747996d5.js";import"./index.6bc186dc.js";import"./transButton.71d28799.js";import"./index.69a8cb8b.js";import"./index.8e5c709c.js";import"./download.44991772.js";import"./base64Conver.08b9f4ec.js";import"./index.ef2bbb95.js";import"./index.9bdb7912.js";import"./index.78ffb938.js";import"./index.55397a9a.js";import"./useContentViewHeight.c91509c3.js";import"./ArrowLeftOutlined.e955dbdc.js";import"./index.f0593c6b.js";const k=h({components:{Description:f,BasicTable:_,PageWrapper:T,[c.name]:c},setup(){const[e]=l({title:"\u9000\u8D27\u5546\u54C1",dataSource:w,columns:F,pagination:!1,showIndexColumn:!1,scroll:{y:300},showSummary:!0,summaryFunc:n}),[p]=l({title:"\u9000\u8D27\u8FDB\u5EA6",columns:R,pagination:!1,dataSource:E,showIndexColumn:!1,scroll:{y:300}});function n(s){let i=0,a=0;return s.forEach(r=>{i+=r.t5,a+=r.t6}),[{t1:"\u603B\u8BA1",t5:i,t6:a}]}return{registerRefundTable:e,registerTimeTable:p,refundSchema:v,refundData:S,personSchema:y,personData:C}}});function x(e,p,n,s,i,a){const r=t("Description"),m=t("a-divider"),u=t("BasicTable"),d=t("PageWrapper");return b(),D(d,{title:"\u57FA\u7840\u8BE6\u60C5\u9875",contentBackground:""},{default:B(()=>[o(r,{size:"middle",title:"\u9000\u6B3E\u7533\u8BF7",bordered:!1,column:3,data:e.refundData,schema:e.refundSchema},null,8,["data","schema"]),o(m),o(r,{size:"middle",title:"\u7528\u6237\u4FE1\u606F",bordered:!1,column:3,data:e.personData,schema:e.personSchema},null,8,["data","schema"]),o(m),o(u,{onRegister:e.registerRefundTable},null,8,["onRegister"]),o(m),o(u,{onRegister:e.registerTimeTable},null,8,["onRegister"])]),_:1})}var Ve=g(k,[["render",x],["__scopeId","data-v-33e8998f"]]);export{Ve as default};