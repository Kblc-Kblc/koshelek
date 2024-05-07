import{m as M,a as O,u as U,b as q,V as se,c as N,d as re}from"./loader-uMMtKBpc.js";import{m as G,u as Y,a as Z,V as J}from"./VImg-B1BiPXF1.js";import{p as k,m as R,a as K,b as A,c as X,g as P,d as Q,t as x,s as _,u as ie,e as r,f as W,h as w,i as l,j as V,o as I,k as E,w as S,l as ue,F as ce,r as de,n as L,q as $,v as ve,x as me,y as fe,z as he,A as ge,B as ee,C as ye,D as C,E as be,G as _e,H as pe,I as Se,J as Ve,K as xe,L as ke,M as Te,N as te,V as Be,O as He}from"./index-AHf5mDVm.js";import{_ as Ce}from"./logo-C0Si_iyu.js";import{V as Ie,a as j}from"./VBtn-voEsGpT-.js";const ae=(e,u)=>{const t=e.__vccOpts||e;for(const[s,a]of u)t[s]=a;return t},Le=k({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...M(),...R(),...O(),...K(),...G(),...A({tag:"footer"}),...X()},"VFooter"),Pe=P()({name:"VFooter",props:Le(),setup(e,u){let{slots:t}=u;const{themeClasses:s}=Q(e),{backgroundColorClasses:a,backgroundColorStyles:o}=Y(x(e,"color")),{borderClasses:d}=U(e),{elevationClasses:v}=q(e),{roundedClasses:h}=Z(e),g=_(32),{resizeRef:c}=ie(y=>{y.length&&(g.value=y[0].target.clientHeight)}),f=r(()=>e.height==="auto"?g.value:parseInt(e.height,10)),{layoutItemStyles:m,layoutIsReady:i}=W({id:e.name,order:r(()=>parseInt(e.order,10)),position:r(()=>"bottom"),layoutSize:f,elementSize:r(()=>e.height==="auto"?void 0:f.value),active:r(()=>e.app),absolute:x(e,"absolute")});return w(()=>l(e.tag,{ref:c,class:["v-footer",s.value,a.value,d.value,v.value,h.value,e.class],style:[o.value,e.app?m.value:{height:V(e.height)},e.style]},t)),e.app?i:{}}}),le=e=>(me("data-v-63683fca"),e=e(),fe(),e),we=["href","title"],Ne={class:"text-caption text-disabled",style:{position:"absolute",right:"16px"}},Re=le(()=>L("span",{class:"d-none d-sm-inline-block"},"Vuetify, LLC",-1)),Ae=le(()=>L("a",{class:"text-decoration-none on-surface",href:"https://vuetifyjs.com/about/licensing/",rel:"noopener noreferrer",target:"_blank"}," MIT License ",-1)),Ee={__name:"AppFooter",setup(e){const u=[{title:"Vuetify Documentation",icon:"$vuetify",href:"https://vuetifyjs.com/"},{title:"Vuetify Support",icon:"mdi-shield-star-outline",href:"https://support.vuetifyjs.com/"},{title:"Vuetify X",icon:"svg:M2.04875 3.00002L9.77052 13.3248L1.99998 21.7192H3.74882L10.5519 14.3697L16.0486 21.7192H22L13.8437 10.8137L21.0765 3.00002H19.3277L13.0624 9.76874L8.0001 3.00002H2.04875ZM4.62054 4.28821H7.35461L19.4278 20.4308H16.6937L4.62054 4.28821Z",href:"https://x.com/vuetifyjs"},{title:"Vuetify GitHub",icon:"mdi-github",href:"https://github.com/vuetifyjs/vuetify"},{title:"Vuetify Discord",icon:"mdi-discord",href:"https://community.vuetifyjs.com/"},{title:"Vuetify Reddit",icon:"mdi-reddit",href:"https://reddit.com/r/vuetifyjs"}];return(t,s)=>(I(),E(Pe,{height:"40",app:""},{default:S(()=>[(I(),ue(ce,null,de(u,a=>L("a",{key:a.title,href:a.href,title:a.title,class:"d-inline-block mx-2 social-link",rel:"noopener noreferrer",target:"_blank"},[l(se,{icon:a.icon,size:a.icon==="$vuetify"?24:16},null,8,["icon","size"])],8,we)),64)),L("div",Ne,[$(" © 2016-"+ve(new Date().getFullYear())+" ",1),Re,$(" — "),Ae])]),_:1}))}},Fe=ae(Ee,[["__scopeId","data-v-63683fca"]]),ze=k({text:String,...R(),...A()},"VToolbarTitle"),oe=P()({name:"VToolbarTitle",props:ze(),setup(e,u){let{slots:t}=u;return w(()=>{const s=!!(t.default||t.text||e.text);return l(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var a;return[s&&l("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(a=t.default)==null?void 0:a.call(t)])]}})}),{}}}),$e=[null,"prominent","default","comfortable","compact"],ne=k({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>$e.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...M(),...R(),...O(),...G(),...A({tag:"header"}),...X()},"VToolbar"),D=P()({name:"VToolbar",props:ne(),setup(e,u){var i;let{slots:t}=u;const{backgroundColorClasses:s,backgroundColorStyles:a}=Y(x(e,"color")),{borderClasses:o}=U(e),{elevationClasses:d}=q(e),{roundedClasses:v}=Z(e),{themeClasses:h}=Q(e),{rtlClasses:g}=he(),c=_(!!(e.extended||(i=t.extension)!=null&&i.call(t))),f=r(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),m=r(()=>c.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return ge({VBtn:{variant:"text"}}),w(()=>{var B;const y=!!(e.title||t.title),p=!!(t.image||e.image),T=(B=t.extension)==null?void 0:B.call(t);return c.value=!!(e.extended||T),l(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},s.value,o.value,d.value,v.value,h.value,g.value,e.class],style:[a.value,e.style]},{default:()=>[p&&l("div",{key:"image",class:"v-toolbar__image"},[t.image?l(N,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):l(J,{key:"image-img",cover:!0,src:e.image},null)]),l(N,{defaults:{VTabs:{height:V(f.value)}}},{default:()=>{var H,n,b;return[l("div",{class:"v-toolbar__content",style:{height:V(f.value)}},[t.prepend&&l("div",{class:"v-toolbar__prepend"},[(H=t.prepend)==null?void 0:H.call(t)]),y&&l(oe,{key:"title",text:e.title},{text:t.title}),(n=t.default)==null?void 0:n.call(t),t.append&&l("div",{class:"v-toolbar__append"},[(b=t.append)==null?void 0:b.call(t)])])]}}),l(N,{defaults:{VTabs:{height:V(m.value)}}},{default:()=>[l(re,null,{default:()=>[c.value&&l("div",{class:"v-toolbar__extension",style:{height:V(m.value)}},[T])]})]})]})}),{contentHeight:f,extensionHeight:m}}}),je=k({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function De(e){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=u;let s=0;const a=ee(null),o=_(0),d=_(0),v=_(0),h=_(!1),g=_(!1),c=r(()=>Number(e.scrollThreshold)),f=r(()=>ye((c.value-o.value)/c.value||0)),m=()=>{const i=a.value;!i||t&&!t.value||(s=o.value,o.value="window"in i?i.pageYOffset:i.scrollTop,g.value=o.value<s,v.value=Math.abs(o.value-c.value))};return C(g,()=>{d.value=d.value||o.value}),C(h,()=>{d.value=0}),be(()=>{C(()=>e.scrollTarget,i=>{var p;const y=i?document.querySelector(i):window;y&&y!==a.value&&((p=a.value)==null||p.removeEventListener("scroll",m),a.value=y,a.value.addEventListener("scroll",m,{passive:!0}))},{immediate:!0})}),_e(()=>{var i;(i=a.value)==null||i.removeEventListener("scroll",m)}),t&&C(t,m,{immediate:!0}),{scrollThreshold:c,currentScroll:o,currentThreshold:v,isScrollActive:h,scrollRatio:f,isScrollingUp:g,savedScroll:d}}const Me=k({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...ne(),...K(),...je(),height:{type:[Number,String],default:64}},"VAppBar"),Oe=P()({name:"VAppBar",props:Me(),emits:{"update:modelValue":e=>!0},setup(e,u){let{slots:t}=u;const s=ee(),a=pe(e,"modelValue"),o=r(()=>{var b;const n=new Set(((b=e.scrollBehavior)==null?void 0:b.split(" "))??[]);return{hide:n.has("hide"),fullyHide:n.has("fully-hide"),inverted:n.has("inverted"),collapse:n.has("collapse"),elevate:n.has("elevate"),fadeImage:n.has("fade-image")}}),d=r(()=>{const n=o.value;return n.hide||n.fullyHide||n.inverted||n.collapse||n.elevate||n.fadeImage||!a.value}),{currentScroll:v,scrollThreshold:h,isScrollingUp:g,scrollRatio:c}=De(e,{canScroll:d}),f=r(()=>o.value.hide||o.value.fullyHide),m=r(()=>e.collapse||o.value.collapse&&(o.value.inverted?c.value>0:c.value===0)),i=r(()=>e.flat||o.value.fullyHide&&!a.value||o.value.elevate&&(o.value.inverted?v.value>0:v.value===0)),y=r(()=>o.value.fadeImage?o.value.inverted?1-c.value:c.value:void 0),p=r(()=>{var F,z;const n=Number(((F=s.value)==null?void 0:F.contentHeight)??e.height),b=Number(((z=s.value)==null?void 0:z.extensionHeight)??0);return f.value?v.value<h.value||o.value.fullyHide?n+b:n:n+b});Se(r(()=>!!e.scrollBehavior),()=>{ke(()=>{f.value?o.value.inverted?a.value=v.value>h.value:a.value=g.value||v.value<h.value:a.value=!0})});const{ssrBootStyles:T}=Ve(),{layoutItemStyles:B,layoutIsReady:H}=W({id:e.name,order:r(()=>parseInt(e.order,10)),position:x(e,"location"),layoutSize:p,elementSize:_(void 0),active:a,absolute:x(e,"absolute")});return w(()=>{const n=D.filterProps(e);return l(D,xe({ref:s,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...B.value,"--v-toolbar-image-opacity":y.value,height:void 0,...T.value},e.style]},n,{collapse:m.value,flat:i.value}),t)}),H}}),Ue=Te({name:"AppHeader"});function qe(e,u,t,s,a,o){const d=te("router-link");return I(),E(Oe,{app:"",color:"indigo",dark:""},{default:S(()=>[l(oe,null,{default:S(()=>[l(d,{to:"/"},{default:S(()=>[l(J,{height:"40",src:Ce})]),_:1})]),_:1}),l(Ie),l(j,{text:"Настройки",to:"/customization"}),l(j,{text:"Order Book",to:"/order"})]),_:1})}const Ge=ae(Ue,[["render",qe]]),Qe={__name:"default",setup(e){return(u,t)=>{const s=te("router-view"),a=Fe;return I(),E(Be,null,{default:S(()=>[l(Ge),l(He,null,{default:S(()=>[l(s)]),_:1}),l(a)]),_:1})}}};export{Qe as default};