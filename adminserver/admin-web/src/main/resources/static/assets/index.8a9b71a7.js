var x=Object.defineProperty;var f=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var S=(t,e,o)=>e in t?x(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,_=(t,e)=>{for(var o in e||(e={}))E.call(e,o)&&S(t,o,e[o]);if(f)for(var o of f(e))A.call(e,o)&&S(t,o,e[o]);return t};import{au as V,a as k,v as w,w as y,bc as R,aw as p,o as u,j as a,z as v,i as h,n,x as m,y as s,l as F}from"./index.21dbddea.js";import D from"./Step1.d14c7be1.js";import $ from"./Step2.bc6482ae.js";import W from"./Step3.f0c213be.js";import{P as b}from"./index.262aa95b.js";import{S as i}from"./index.7917fc15.js";import"./index.94534871.js";import"./BasicForm.f15e10d2.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.ce9802a8.js";import"./index.a37178f8.js";import"./componentMap.89831d4d.js";import"./index.82fe2da0.js";import"./Checkbox.b4e3675e.js";import"./index.17dda3d9.js";import"./index.63df3ac3.js";import"./index.193019b5.js";import"./index.ec76c75d.js";import"./index.c91c606e.js";import"./index.299e002f.js";import"./useFormItem.1145f6c8.js";import"./RadioButtonGroup.bc4b2238.js";import"./get.41fb1f2f.js";import"./index.2ddb10b6.js";import"./eagerComputed.1ea2a8d9.js";import"./index.c3a78ee8.js";import"./_baseIteratee.165cbc4f.js";import"./DeleteOutlined.1931f992.js";import"./Form.b6c45920.js";import"./Col.2a58f9a8.js";import"./useFlexGapSupport.06ccabe5.js";import"./useSize.e955a44e.js";import"./transButton.25f118c6.js";import"./index.903acead.js";import"./index.5d9418ce.js";import"./useWindowSizeFn.7490f562.js";import"./FullscreenOutlined.1b876098.js";import"./index.ba1296a1.js";import"./index.44538731.js";import"./isNumber.9b40a4c7.js";import"./uuid.2b29000c.js";import"./download.68505b66.js";import"./base64Conver.08b9f4ec.js";import"./index.7b25a8ae.js";import"./index.ead49ec7.js";import"./useRefs.15808103.js";import"./index.5e62cd22.js";import"./uniqBy.45490986.js";import"./index.4a1de338.js";import"./useForm.e0cbc007.js";import"./data.1866c55a.js";import"./index.774022af.js";import"./index.ef277d98.js";import"./index.8d2cb20f.js";import"./index.2e41d04d.js";import"./useContentViewHeight.22c0cdcf.js";import"./ArrowLeftOutlined.a8bf1d79.js";import"./index.dd967332.js";const j=k({name:"FormStepPage",components:{Step1:D,Step2:$,Step3:W,PageWrapper:b,[i.name]:i,[i.Step.name]:i.Step},setup(){const t=w(0),e=y({initSetp2:!1,initSetp3:!1});function o(r){t.value++,e.initSetp2=!0}function c(){t.value--}function d(r){t.value++,e.initSetp3=!0}function l(){t.value=0,e.initSetp2=!1,e.initSetp3=!1}return _({current:t,handleStep1Next:o,handleStep2Next:d,handleRedo:l,handleStepPrev:c},R(e))}}),z={class:"step-form-form"},I={class:"mt-5"};function q(t,e,o,c,d,l){const r=p("a-step"),B=p("a-steps"),C=p("Step1"),g=p("Step2"),N=p("Step3"),P=p("PageWrapper");return u(),a(P,{title:"\u5206\u6B65\u8868\u5355",contentBackground:"",content:" \u5C06\u4E00\u4E2A\u5197\u957F\u6216\u7528\u6237\u4E0D\u719F\u6089\u7684\u8868\u5355\u4EFB\u52A1\u5206\u6210\u591A\u4E2A\u6B65\u9AA4\uFF0C\u6307\u5BFC\u7528\u6237\u5B8C\u6210\u3002",contentClass:"p-4"},{default:v(()=>[h("div",z,[n(B,{current:t.current},{default:v(()=>[n(r,{title:"\u586B\u5199\u8F6C\u8D26\u4FE1\u606F"}),n(r,{title:"\u786E\u8BA4\u8F6C\u8D26\u4FE1\u606F"}),n(r,{title:"\u5B8C\u6210"})]),_:1},8,["current"])]),h("div",I,[m(n(C,{onNext:t.handleStep1Next},null,8,["onNext"]),[[s,t.current===0]]),t.initSetp2?m((u(),a(g,{key:0,onPrev:t.handleStepPrev,onNext:t.handleStep2Next},null,8,["onPrev","onNext"])),[[s,t.current===1]]):F("",!0),t.initSetp3?m((u(),a(N,{key:1,onRedo:t.handleRedo},null,8,["onRedo"])),[[s,t.current===2]]):F("",!0)])]),_:1})}var Ot=V(j,[["render",q],["__scopeId","data-v-46d6ddea"]]);export{Ot as default};