var ge=Object.defineProperty,he=Object.defineProperties;var be=Object.getOwnPropertyDescriptors;var Z=Object.getOwnPropertySymbols;var ye=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable;var ee=(e,o,l)=>o in e?ge(e,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[o]=l,M=(e,o)=>{for(var l in o||(o={}))ye.call(o,l)&&ee(e,l,o[l]);if(Z)for(var l of Z(o))ve.call(o,l)&&ee(e,l,o[l]);return e},E=(e,o)=>he(e,be(o));var A=(e,o,l)=>new Promise((i,a)=>{var c=d=>{try{n(l.next(d))}catch(u){a(u)}},t=d=>{try{n(l.throw(d))}catch(u){a(u)}},n=d=>d.done?i(d.value):Promise.resolve(d.value).then(c,t);n((l=l.apply(e,o)).next())});import{c as se,L as z,k as r,b9 as Ce,a as D,bc as Me,cA as He,n as H,dF as ke,cB as Fe,dG as Se,bh as $e,bi as Be,bE as we,v as g,dH as Oe,f as k,a7 as re,N as Pe,b$ as ie,al as B,au as L,aw as b,bQ as Te,o as v,j as O,z as m,x as De,h as V,aA as w,bm as Ne,bk as Re,c7 as We,b as ce,F as Ee,l as X,q as _e,B as Y,t as U,ax as _,dI as Le,aL as Q,bD as je,ao as q,av as de,d3 as xe,ay as te,az as ne,aB as oe,aC as ae,w as ue,cE as Ae,am as I,ap as Ie,d2 as pe,at as Ve,aD as ze}from"./index.f2ab8b4c.js";import{u as qe}from"./useWindowSizeFn.1bf827f4.js";import{F as Xe,a as Ye}from"./FullscreenOutlined.ae022bec.js";const{t:le}=se(),Ue={visible:{type:Boolean},scrollTop:{type:Boolean,default:!0},height:{type:Number},minHeight:{type:Number},draggable:{type:Boolean,default:!0},centered:{type:Boolean},cancelText:{type:String,default:le("common.cancelText")},okText:{type:String,default:le("common.okText")},closeFunc:Function},J=Object.assign({},Ue,{defaultFullscreen:{type:Boolean},canFullscreen:{type:Boolean,default:!0},wrapperFooterOffset:{type:Number,default:0},helpMessage:[String,Array],useWrapper:{type:Boolean,default:!0},loading:{type:Boolean},loadingTip:{type:String},showCancelBtn:{type:Boolean,default:!0},showOkBtn:{type:Boolean,default:!0},wrapperProps:Object,afterClose:Function,bodyStyle:Object,closable:{type:Boolean,default:!0},closeIcon:Object,confirmLoading:{type:Boolean},destroyOnClose:{type:Boolean},footer:Object,getContainer:Function,mask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},maskStyle:Object,okType:{type:String,default:"primary"},okButtonProps:Object,cancelButtonProps:Object,title:{type:String},visible:{type:Boolean},width:[String,Number],wrapClassName:{type:String},zIndex:{type:Number}});function Ge(e){const o=(a,c)=>getComputedStyle(a)[c],l=a=>{if(!a)return;a.setAttribute("data-drag",r(e.draggable));const c=a.querySelector(".ant-modal-header"),t=a.querySelector(".ant-modal");!c||!t||!r(e.draggable)||(c.style.cursor="move",c.onmousedown=n=>{if(!n)return;const d=n.clientX,u=n.clientY,p=document.body.clientWidth,f=document.documentElement.clientHeight,h=t.offsetWidth,C=t.offsetHeight,F=t.offsetLeft,S=p-t.offsetLeft-h,$=t.offsetTop,j=f-t.offsetTop-C,P=o(t,"left"),N=o(t,"top");let R=+P,W=+N;P.includes("%")?(R=+document.body.clientWidth*(+P.replace(/%/g,"")/100),W=+document.body.clientHeight*(+N.replace(/%/g,"")/100)):(R=+P.replace(/px/g,""),W=+N.replace(/px/g,"")),document.onmousemove=function(x){let s=x.clientX-d,y=x.clientY-u;-s>F?s=-F:s>S&&(s=S),-y>$?y=-$:y>j&&(y=j),t.style.cssText+=`;left:${s+R}px;top:${y+W}px;`},document.onmouseup=()=>{document.onmousemove=null,document.onmouseup=null}})},i=()=>{const a=document.querySelectorAll(".ant-modal-wrap");for(const c of Array.from(a)){if(!c)continue;const t=o(c,"display"),n=c.getAttribute("data-drag");t!=="none"&&(n===null||r(e.destroyOnClose))&&l(c)}};z(()=>{!r(e.visible)||!r(e.draggable)||Ce(()=>{i()},30)})}function Qe(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Fe(e)}var Je=D({name:"Modal",inheritAttrs:!1,props:J,emits:["cancel"],setup(e,{slots:o,emit:l}){const{visible:i,draggable:a,destroyOnClose:c}=Me(e),t=He();Ge({visible:i,destroyOnClose:c,draggable:a});const n=d=>{l("cancel",d)};return()=>{let d;const u=E(M(M({},r(t)),e),{onCancel:n});return H(Se,u,Qe(d=ke(o))?d:{default:()=>[d]})}}});const fe=Symbol();function Ke(e){return $e(e,fe)}function Mt(){return Be(fe)}const Ze={loading:{type:Boolean},useWrapper:{type:Boolean,default:!0},modalHeaderHeight:{type:Number,default:57},modalFooterHeight:{type:Number,default:74},minHeight:{type:Number,default:200},height:{type:Number},footerOffset:{type:Number,default:0},visible:{type:Boolean},fullScreen:{type:Boolean},loadingTip:{type:String}},et=D({name:"ModalWrapper",components:{ScrollContainer:we},inheritAttrs:!1,props:Ze,emits:["height-change","ext-height"],setup(e,{emit:o}){const l=g(null),i=g(null),a=g(0),c=g(0);let t=0;qe(u.bind(null,!1)),Oe(i,()=>{u()},{attributes:!0,subtree:!0}),Ke({redoModalHeight:u});const n=k(()=>({minHeight:`${e.minHeight}px`,[e.fullScreen?"height":"maxHeight"]:`${r(a)}px`}));z(()=>{e.useWrapper&&u()}),re(()=>e.fullScreen,p=>{u(),p?c.value=a.value:a.value=c.value}),Pe(()=>{const{modalHeaderHeight:p,modalFooterHeight:f}=e;o("ext-height",p+f)}),ie(()=>{});function d(){return A(this,null,function*(){B(()=>{var f;const p=r(l);!p||(f=p==null?void 0:p.scrollTo)==null||f.call(p,0)})})}function u(){return A(this,null,function*(){if(!e.visible)return;const p=r(l);if(!p)return;const f=p.$el.parentElement;if(!!f){f.style.padding="0",yield B();try{const h=f.parentElement&&f.parentElement.parentElement;if(!h)return;const C=getComputedStyle(h).top,F=Number.parseInt(C);let S=window.innerHeight-F*2+(e.footerOffset||0)-e.modalFooterHeight-e.modalHeaderHeight;F<40&&(S-=26),yield B();const $=r(i);if(!$)return;yield B(),t=$.scrollHeight,e.fullScreen?a.value=window.innerHeight-e.modalFooterHeight-e.modalHeaderHeight-28:a.value=e.height?e.height:t>S?S:t,o("height-change",r(a))}catch(h){}}})}return{wrapperRef:l,spinRef:i,spinStyle:n,scrollTop:d,setModalHeight:u}}}),tt=["loading-tip"];function nt(e,o,l,i,a,c){const t=b("ScrollContainer"),n=Te("loading");return v(),O(t,{ref:"wrapperRef"},{default:m(()=>[De((v(),V("div",{ref:"spinRef",style:Ne(e.spinStyle),"loading-tip":e.loadingTip},[w(e.$slots,"default")],12,tt)),[[n,e.loading]])]),_:3},512)}var ot=L(et,[["render",nt]]);const at=D({name:"ModalClose",components:{Tooltip:Re,FullscreenExitOutlined:Xe,FullscreenOutlined:Ye,CloseOutlined:We},props:{canFullscreen:{type:Boolean,default:!0},fullScreen:{type:Boolean}},emits:["cancel","fullscreen"],setup(e,{emit:o}){const{prefixCls:l}=ce("basic-modal-close"),{t:i}=se(),a=k(()=>[l,`${l}--custom`,{[`${l}--can-full`]:e.canFullscreen}]);function c(n){o("cancel",n)}function t(n){n==null||n.stopPropagation(),n==null||n.preventDefault(),o("fullscreen")}return{t:i,getClass:a,prefixCls:l,handleCancel:c,handleFullScreen:t}}});function lt(e,o,l,i,a,c){const t=b("FullscreenExitOutlined"),n=b("Tooltip"),d=b("FullscreenOutlined"),u=b("CloseOutlined");return v(),V("div",{class:_e(e.getClass)},[e.canFullscreen?(v(),V(Ee,{key:0},[e.fullScreen?(v(),O(n,{key:0,title:e.t("component.modal.restore"),placement:"bottom"},{default:m(()=>[H(t,{role:"full",onClick:e.handleFullScreen},null,8,["onClick"])]),_:1},8,["title"])):(v(),O(n,{key:1,title:e.t("component.modal.maximize"),placement:"bottom"},{default:m(()=>[H(d,{role:"close",onClick:e.handleFullScreen},null,8,["onClick"])]),_:1},8,["title"]))],64)):X("",!0),H(n,{title:e.t("component.modal.close"),placement:"bottom"},{default:m(()=>[H(u,{onClick:e.handleCancel},null,8,["onClick"])]),_:1},8,["title"])],2)}var st=L(at,[["render",lt]]);const rt=D({name:"BasicModalFooter",props:J,emits:["ok","cancel"],setup(e,{emit:o}){function l(a){o("ok",a)}function i(a){o("cancel",a)}return{handleOk:l,handleCancel:i}}});function it(e,o,l,i,a,c){const t=b("a-button");return v(),V("div",null,[w(e.$slots,"insertFooter"),e.showCancelBtn?(v(),O(t,_({key:0},e.cancelButtonProps,{onClick:e.handleCancel}),{default:m(()=>[Y(U(e.cancelText),1)]),_:1},16,["onClick"])):X("",!0),w(e.$slots,"centerFooter"),e.showOkBtn?(v(),O(t,_({key:1,type:e.okType,onClick:e.handleOk,loading:e.confirmLoading},e.okButtonProps),{default:m(()=>[Y(U(e.okText),1)]),_:1},16,["type","onClick","loading"])):X("",!0),w(e.$slots,"appendFooter")])}var ct=L(rt,[["render",it]]);const dt=D({name:"BasicModalHeader",components:{BasicTitle:Le},props:{helpMessage:{type:[String,Array]},title:{type:String}},emits:["dblclick"]});function ut(e,o,l,i,a,c){const t=b("BasicTitle");return v(),O(t,{helpMessage:e.helpMessage},{default:m(()=>[Y(U(e.title),1)]),_:1},8,["helpMessage"])}var pt=L(dt,[["render",ut]]);function ft(e){const o=g(!1),l=k(()=>{const a=r(e.wrapClassName)||"";return r(o)?`fullscreen-modal ${a} `:r(a)});function i(a){a&&a.stopPropagation(),o.value=!r(o)}return{getWrapClassName:l,handleFullScreen:i,fullScreenRef:o}}const mt=D({name:"BasicModal",components:{Modal:Je,ModalWrapper:ot,ModalClose:st,ModalFooter:ct,ModalHeader:pt},inheritAttrs:!1,props:J,emits:["visible-change","height-change","cancel","ok","register","update:visible"],setup(e,{emit:o,attrs:l}){const i=g(!1),a=g(null),c=g(null),{prefixCls:t}=ce("basic-modal"),n=g(0),d={setModalProps:P,emitVisible:void 0,redoModalHeight:()=>{B(()=>{r(c)&&r(c).setModalHeight()})}},u=Q();u&&o("register",d,u.uid);const p=k(()=>M(M({},e),r(a))),{handleFullScreen:f,getWrapClassName:h,fullScreenRef:C}=ft({modalWrapperRef:c,extHeightRef:n,wrapClassName:je(p.value,"wrapClassName")}),F=k(()=>{const s=E(M({},r(p)),{visible:r(i),okButtonProps:void 0,cancelButtonProps:void 0,title:void 0});return E(M({},s),{wrapClassName:r(h)})}),S=k(()=>{const s=E(M(M({},l),r(p)),{visible:r(i)});return s.wrapClassName=`${(s==null?void 0:s.wrapClassName)||""} ${r(h)}`,r(C)?q(s,["height","title"]):q(s,"title")}),$=k(()=>{if(!r(C))return r(F).height});z(()=>{i.value=!!e.visible,C.value=!!e.defaultFullscreen}),re(()=>r(i),s=>{var y;o("visible-change",s),o("update:visible",s),u&&((y=d.emitVisible)==null||y.call(d,s,u.uid)),B(()=>{e.scrollTop&&s&&r(c)&&r(c).scrollTop()})},{immediate:!1});function j(s){return A(this,null,function*(){var y,K;if(s==null||s.stopPropagation(),!((K=(y=s.target)==null?void 0:y.classList)!=null&&K.contains(t+"-close--custom"))){if(e.closeFunc&&de(e.closeFunc)){const me=yield e.closeFunc();i.value=!me;return}i.value=!1,o("cancel",s)}})}function P(s){a.value=xe(r(a)||{},s),Reflect.has(s,"visible")&&(i.value=!!s.visible),Reflect.has(s,"defaultFullscreen")&&(C.value=!!s.defaultFullscreen)}function N(s){o("ok",s)}function R(s){o("height-change",s)}function W(s){n.value=s}function x(s){!e.canFullscreen||(s.stopPropagation(),f(s))}return{handleCancel:j,getBindValue:S,getProps:F,handleFullScreen:f,fullScreenRef:C,getMergeProps:p,handleOk:N,visibleRef:i,omit:q,modalWrapperRef:c,handleExtHeight:W,handleHeightChange:R,handleTitleDbClick:x,getWrapperHeight:$}}});function gt(e,o,l,i,a,c){const t=b("ModalClose"),n=b("ModalHeader"),d=b("ModalFooter"),u=b("ModalWrapper"),p=b("Modal");return v(),O(p,_(e.getBindValue,{onCancel:e.handleCancel}),te({default:m(()=>[H(u,_({useWrapper:e.getProps.useWrapper,footerOffset:e.wrapperFooterOffset,fullScreen:e.fullScreenRef,ref:"modalWrapperRef",loading:e.getProps.loading,"loading-tip":e.getProps.loadingTip,minHeight:e.getProps.minHeight,height:e.getWrapperHeight,visible:e.visibleRef,modalFooterHeight:e.footer!==void 0&&!e.footer?0:void 0},e.omit(e.getProps.wrapperProps,"visible","height","modalFooterHeight"),{onExtHeight:e.handleExtHeight,onHeightChange:e.handleHeightChange}),{default:m(()=>[w(e.$slots,"default")]),_:3},16,["useWrapper","footerOffset","fullScreen","loading","loading-tip","minHeight","height","visible","modalFooterHeight","onExtHeight","onHeightChange"])]),_:2},[e.$slots.closeIcon?void 0:{name:"closeIcon",fn:m(()=>[H(t,{canFullscreen:e.getProps.canFullscreen,fullScreen:e.fullScreenRef,onCancel:e.handleCancel,onFullscreen:e.handleFullScreen},null,8,["canFullscreen","fullScreen","onCancel","onFullscreen"])]),key:"0"},e.$slots.title?void 0:{name:"title",fn:m(()=>[H(n,{helpMessage:e.getProps.helpMessage,title:e.getMergeProps.title,onDblclick:e.handleTitleDbClick},null,8,["helpMessage","title","onDblclick"])]),key:"1"},e.$slots.footer?void 0:{name:"footer",fn:m(()=>[H(d,_(e.getBindValue,{onOk:e.handleOk,onCancel:e.handleCancel}),te({_:2},[ne(Object.keys(e.$slots),f=>({name:f,fn:m(h=>[w(e.$slots,f,oe(ae(h||{})))])}))]),1040,["onOk","onCancel"])]),key:"2"},ne(Object.keys(e.omit(e.$slots,"default")),f=>({name:f,fn:m(h=>[w(e.$slots,f,oe(ae(h||{})))])}))]),1040,["onCancel"])}var ht=L(mt,[["render",gt]]);const T=ue({}),G=ue({});function Ht(){const e=g(null),o=g(!1),l=g("");function i(t,n){if(!Q())throw new Error("useModal() can only be used inside setup() or functional components!");l.value=n,ie(()=>{e.value=null,o.value=!1,T[r(l)]=null}),!(r(o)&&Ae()&&t===r(e))&&(e.value=t,o.value=!0,t.emitVisible=(d,u)=>{G[u]=d})}const a=()=>{const t=r(e);return t||pe("useModal instance is undefined!"),t},c={setModalProps:t=>{var n;(n=a())==null||n.setModalProps(t)},getVisible:k(()=>G[~~r(l)]),redoModalHeight:()=>{var t,n;(n=(t=a())==null?void 0:t.redoModalHeight)==null||n.call(t)},openModal:(t=!0,n,d=!0)=>{var f;if((f=a())==null||f.setModalProps({visible:t}),!n)return;const u=r(l);if(d){T[u]=null,T[u]=I(n);return}Ie(I(T[u]),I(n))||(T[u]=I(n))},closeModal:()=>{var t;(t=a())==null||t.setModalProps({visible:!1})}};return[i,c]}const kt=e=>{const o=g(null),l=Q(),i=g(""),a=()=>{const t=r(o);return t||pe("useModalInner instance is undefined!"),t},c=(t,n)=>{Ve(()=>{o.value=null}),i.value=n,o.value=t,l==null||l.emit("register",t,n)};return z(()=>{const t=T[r(i)];!t||!e||!de(e)||B(()=>{e(t)})}),[c,{changeLoading:(t=!0)=>{var n;(n=a())==null||n.setModalProps({loading:t})},getVisible:k(()=>G[~~r(i)]),changeOkLoading:(t=!0)=>{var n;(n=a())==null||n.setModalProps({confirmLoading:t})},closeModal:()=>{var t;(t=a())==null||t.setModalProps({visible:!1})},setModalProps:t=>{var n;(n=a())==null||n.setModalProps(t)},redoModalHeight:()=>{var n;const t=(n=a())==null?void 0:n.redoModalHeight;t&&t()}}]},Ft=ze(ht);export{Ft as B,kt as a,Ht as b,Mt as u};