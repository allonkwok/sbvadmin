import{a as i,v as r,a7 as s,o as l,j as n,z as m,i as d,bm as u,k as p}from"./index.f2ab8b4c.js";import{C as f}from"./index.7cf5ae74.js";import"./index.4fcbe22d.js";/* empty css              */import{u as c}from"./useECharts.a3d360b4.js";import"./index.1e1f2c49.js";import"./index.c2f346bd.js";import"./Col.ad1a1837.js";import"./useFlexGapSupport.158efb8d.js";import"./index.71210517.js";import"./useRefs.26c927e3.js";import"./PlusOutlined.bdd3c943.js";const R=i({__name:"SaleRadar",props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"400px"}},setup(e){const a=e,t=r(null),{setOptions:o}=c(t);return s(()=>a.loading,()=>{a.loading||o({legend:{bottom:0,data:["Visits","Sales"]},tooltip:{},radar:{radius:"60%",splitNumber:8,indicator:[{name:"2017"},{name:"2017"},{name:"2018"},{name:"2019"},{name:"2020"},{name:"2021"}]},series:[{type:"radar",symbolSize:0,areaStyle:{shadowBlur:0,shadowColor:"rgba(0,0,0,.2)",shadowOffsetX:0,shadowOffsetY:10,opacity:1},data:[{value:[90,50,86,40,50,20],name:"Visits",itemStyle:{color:"#b6a2de"}},{value:[70,75,70,76,20,85],name:"Sales",itemStyle:{color:"#67e0e3"}}]}]})},{immediate:!0}),(h,g)=>(l(),n(p(f),{title:"\u9500\u552E\u7EDF\u8BA1",loading:e.loading},{default:m(()=>[d("div",{ref_key:"chartRef",ref:t,style:u({width:e.width,height:e.height})},null,4)]),_:1},8,["loading"]))}});export{R as default};