import{c as e,V as n}from"./index.2bede6e4.js";import{d as t,r as o,b as l,e as s,F as c,t as a,f as i,w as r,A as u,B as m,o as p,n as d,y as h}from"./vendor.495c77ae.js";var v=t({name:"ComponentLayout",data:()=>({components:e,isFullscreen:!1}),computed:{toc(){var e;const t=this.$route.meta.name;return null==(e=n[t])?void 0:e.toc.filter((e=>2===e.level))}},methods:{routerTo(e){this.toTop(),this.$router.push(e)},toTop(){document.documentElement.scrollTo({top:0,behavior:"smooth"})},fullscreen(){document.documentElement.style.setProperty("--header-height","0px"),document.documentElement.style.setProperty("--aside-width","0px"),this.isFullscreen=!0},exitFullscreen(){document.documentElement.style.removeProperty("--header-height"),document.documentElement.style.removeProperty("--aside-width"),this.isFullscreen=!1}}});const f={class:"components-layout"},C={class:"components-menu"},y=s("div",{class:"group-title"},"基础",-1),$=["onClick"],k=s("div",{class:"group-title"},"辅助",-1),x=["onClick"],g=s("div",{class:"group-title"},"表单",-1),b=["onClick"],T=s("div",{class:"group-title"},"数据",-1),F=["onClick"],_={class:"components-content",ref:"content"},E={class:"components-content__entry"},w={class:"components-content__toc"},z=s("h3",null,"目录",-1),P=["href"],U={class:"components-action"},j=s("i",{class:"bx bx-chevron-up"},null,-1),A=s("i",{class:"bx bx-fullscreen"},null,-1),B=s("i",{class:"bx bx-exit-fullscreen"},null,-1);v.render=function(e,n,t,v,L,V){const q=o("router-view"),D=o("si-button");return p(),l("div",f,[s("section",C,[s("nav",null,[y,(p(!0),l(c,null,a(e.components[0],(n=>(p(),l("a",{onClick:t=>e.routerTo(`/components/${n.name}`),class:d({active:e.$route.path===`/components/${n.name}`})},h(n.zh)+" "+h(n.name[0].toUpperCase()+n.name.slice(1)),11,$)))),256)),k,(p(!0),l(c,null,a(e.components[1],(n=>(p(),l("a",{onClick:t=>e.routerTo(`/components/${n.name}`),class:d({active:e.$route.path===`/components/${n.name}`})},h(n.zh)+" "+h(n.name[0].toUpperCase()+n.name.slice(1)),11,x)))),256)),g,(p(!0),l(c,null,a(e.components[2],(n=>(p(),l("a",{onClick:t=>e.routerTo(`/components/${n.name}`),class:d({active:e.$route.path===`/components/${n.name}`})},h(n.zh)+" "+h(n.name[0].toUpperCase()+n.name.slice(1)),11,b)))),256)),T,(p(!0),l(c,null,a(e.components[3],(n=>(p(),l("a",{onClick:t=>e.routerTo(`/components/${n.name}`),class:d({active:e.$route.path===`/components/${n.name}`})},h(n.zh)+" "+h(n.name[0].toUpperCase()+n.name.slice(1)),11,F)))),256))])]),s("section",_,[s("div",E,[i(q,{ref:"component"},null,512)]),s("div",w,[z,s("ul",null,[(p(!0),l(c,null,a(e.toc,(e=>(p(),l("li",null,[s("a",{href:`#${e.anchor}`},h(e.content),9,P)])))),256))])])],512),s("div",U,[i(D,{icon:"",circle:"",variant:"floating",type:"light",onClick:e.toTop},{default:r((()=>[j])),_:1},8,["onClick"]),u(i(D,{icon:"",circle:"",variant:"floating",type:"light",onClick:e.fullscreen},{default:r((()=>[A])),_:1},8,["onClick"]),[[m,!e.isFullscreen]]),u(i(D,{icon:"",circle:"",variant:"floating",type:"light",onClick:e.exitFullscreen},{default:r((()=>[B])),_:1},8,["onClick"]),[[m,e.isFullscreen]])])])};export{v as default};
