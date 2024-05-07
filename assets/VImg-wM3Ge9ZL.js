import{p as I,m as W,R as X,g as D,S as Z,h as E,i as l,e as b,ay as p,aY as R,b0 as N,b1 as ee,b2 as te,b3 as ne,af as re,aO as ae,K as M,aP as se,ai as le,a$ as q,t as oe,a1 as ie,s as C,B as ue,D as x,ao as ce,$ as de,G as ve,T as U,U as ge,F as fe,j as me,at as be}from"./index-CRmgIQ9D.js";function Se(e){return{aspectStyles:b(()=>{const r=Number(e.aspectRatio);return r?{paddingBottom:String(1/r*100)+"%"}:void 0})}}const A=I({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...W(),...X()},"VResponsive"),F=D()({name:"VResponsive",props:A(),setup(e,r){let{slots:n}=r;const{aspectStyles:t}=Se(e),{dimensionStyles:i}=Z(e);return E(()=>{var c;return l("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[i.value,e.style]},[l("div",{class:"v-responsive__sizer",style:t.value},null),(c=n.additional)==null?void 0:c.call(n),n.default&&l("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}});function H(e){return p(()=>{const r=[],n={};if(e.value.background)if(N(e.value.background)){if(n.backgroundColor=e.value.background,!e.value.text&&ee(e.value.background)){const t=te(e.value.background);if(t.a==null||t.a===1){const i=ne(t);n.color=i,n.caretColor=i}}}else r.push(`bg-${e.value.background}`);return e.value.text&&(N(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):r.push(`text-${e.value.text}`)),{colorClasses:r,colorStyles:n}})}function Pe(e,r){const n=b(()=>({text:R(e)?e.value:r?e[r]:null})),{colorClasses:t,colorStyles:i}=H(n);return{textColorClasses:t,textColorStyles:i}}function ye(e,r){const n=b(()=>({background:R(e)?e.value:r?e[r]:null})),{colorClasses:t,colorStyles:i}=H(n);return{backgroundColorClasses:t,backgroundColorStyles:i}}const _e=I({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function he(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:re();return{roundedClasses:b(()=>{const t=R(e)?e.value:e.rounded,i=R(e)?e.value:e.tile,c=[];if(t===!0||t==="")c.push(`${r}--rounded`);else if(typeof t=="string"||t===0)for(const f of String(t).split(" "))c.push(`rounded-${f}`);else(i||t===!1)&&c.push("rounded-0");return c})}}const Ce=I({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),k=(e,r)=>{let{slots:n}=r;const{transition:t,disabled:i,group:c,...f}=e,{component:g=c?se:le,...S}=typeof t=="object"?t:{};return ae(g,M(typeof t=="string"?{name:i?"":t}:S,typeof t=="string"?{}:Object.fromEntries(Object.entries({disabled:i,group:c}).filter(s=>{let[o,v]=s;return v!==void 0})),f),n)};function ke(e,r){if(!q)return;const n=r.modifiers||{},t=r.value,{handler:i,options:c}=typeof t=="object"?t:{handler:t,options:{}},f=new IntersectionObserver(function(){var v;let g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],S=arguments.length>1?arguments[1]:void 0;const s=(v=e._observe)==null?void 0:v[r.instance.$.uid];if(!s)return;const o=g.some(y=>y.isIntersecting);i&&(!n.quiet||s.init)&&(!n.once||o||s.init)&&i(o,g,S),o&&n.once?G(e,r):s.init=!0},c);e._observe=Object(e._observe),e._observe[r.instance.$.uid]={init:!1,observer:f},f.observe(e)}function G(e,r){var t;const n=(t=e._observe)==null?void 0:t[r.instance.$.uid];n&&(n.observer.unobserve(e),delete e._observe[r.instance.$.uid])}const Re={mounted:ke,unmounted:G},Ie=I({alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...A(),...W(),..._e(),...Ce()},"VImg"),xe=D()({name:"VImg",directives:{intersect:Re},props:Ie(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,r){let{emit:n,slots:t}=r;const{backgroundColorClasses:i,backgroundColorStyles:c}=ye(oe(e,"color")),{roundedClasses:f}=he(e),g=ie("VImg"),S=C(""),s=ue(),o=C(e.eager?"loading":"idle"),v=C(),y=C(),d=b(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),_=b(()=>d.value.aspect||v.value/y.value||0);x(()=>e.src,()=>{z(o.value!=="idle")}),x(_,(a,u)=>{!a&&u&&s.value&&h(s.value)}),ce(()=>z());function z(a){if(!(e.eager&&a)&&!(q&&!a&&!e.eager)){if(o.value="loading",d.value.lazySrc){const u=new Image;u.src=d.value.lazySrc,h(u,null)}d.value.src&&de(()=>{var u;n("loadstart",((u=s.value)==null?void 0:u.currentSrc)||d.value.src),setTimeout(()=>{var m;if(!g.isUnmounted)if((m=s.value)!=null&&m.complete){if(s.value.naturalWidth||B(),o.value==="error")return;_.value||h(s.value,null),o.value==="loading"&&T()}else _.value||h(s.value),j()})})}}function T(){var a;g.isUnmounted||(j(),h(s.value),o.value="loaded",n("load",((a=s.value)==null?void 0:a.currentSrc)||d.value.src))}function B(){var a;g.isUnmounted||(o.value="error",n("error",((a=s.value)==null?void 0:a.currentSrc)||d.value.src))}function j(){const a=s.value;a&&(S.value=a.currentSrc||a.src)}let P=-1;ve(()=>{clearTimeout(P)});function h(a){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const m=()=>{if(clearTimeout(P),g.isUnmounted)return;const{naturalHeight:$,naturalWidth:O}=a;$||O?(v.value=O,y.value=$):!a.complete&&o.value==="loading"&&u!=null?P=window.setTimeout(m,u):(a.currentSrc.endsWith(".svg")||a.currentSrc.startsWith("data:image/svg+xml"))&&(v.value=1,y.value=1)};m()}const w=b(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),L=()=>{var m;if(!d.value.src||o.value==="idle")return null;const a=l("img",{class:["v-img__img",w.value],style:{objectPosition:e.position},src:d.value.src,srcset:d.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:s,onLoad:T,onError:B},null),u=(m=t.sources)==null?void 0:m.call(t);return l(k,{transition:e.transition,appear:!0},{default:()=>[U(u?l("picture",{class:"v-img__picture"},[u,a]):a,[[be,o.value==="loaded"]])]})},K=()=>l(k,{transition:e.transition},{default:()=>[d.value.lazySrc&&o.value!=="loaded"&&l("img",{class:["v-img__img","v-img__img--preload",w.value],style:{objectPosition:e.position},src:d.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),Y=()=>t.placeholder?l(k,{transition:e.transition,appear:!0},{default:()=>[(o.value==="loading"||o.value==="error"&&!t.error)&&l("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,J=()=>t.error?l(k,{transition:e.transition,appear:!0},{default:()=>[o.value==="error"&&l("div",{class:"v-img__error"},[t.error()])]}):null,Q=()=>e.gradient?l("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,V=C(!1);{const a=x(_,u=>{u&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{V.value=!0})}),a())})}return E(()=>{const a=F.filterProps(e);return U(l(F,M({class:["v-img",{"v-img--booting":!V.value},i.value,f.value,e.class],style:[{width:me(e.width==="auto"?v.value:e.width)},c.value,e.style]},a,{aspectRatio:_.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>l(fe,null,[l(L,null,null),l(K,null,null),l(Q,null,null),l(Y,null,null),l(J,null,null)]),default:t.default}),[[ge("intersect"),{handler:z,options:e.options},null,{once:!0}]])}),{currentSrc:S,image:s,state:o,naturalWidth:v,naturalHeight:y}}});export{Re as I,k as M,xe as V,he as a,F as b,Pe as c,Ce as d,H as e,_e as m,ye as u};
