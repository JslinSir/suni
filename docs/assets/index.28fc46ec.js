var s=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,e=Object.prototype.propertyIsEnumerable,r=(a,l,t)=>l in a?s(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t;import{r as c,o as p,b as h,f as j,w as g,F as o,e as i,c as d,h as v,d as m,u as b,i as u,v as f,x as y}from"./vendor.c7525fe9.js";const x={},w=i("i",{class:"bx bx-user"},null,-1),_=i("i",{class:"bx bxs-hot"},null,-1);x.render=function(s,a){const l=c("si-avatar");return p(),h(o,null,[j(l,{text:"Lily"}),j(l,null,{default:g((()=>[w])),_:1}),j(l,{type:"primary"},{default:g((()=>[_])),_:1}),j(l,{src:"/avatars/one.png"})],64)};const D={components:{ImportDemo:x}};D.render=function(s,a,l,t,n,e){const r=c("ImportDemo");return p(),d(r)};const I={};I.render=function(s,a){const l=c("si-avatar");return p(),h(o,null,[j(l,{type:"primary",text:"P"}),j(l,{type:"success",text:"S"}),j(l,{type:"danger",text:"D"}),j(l,{type:"warning",text:"W"}),j(l,{type:"dark",text:"D"}),j(l,{color:"#7d33ff",text:"HEX"}),j(l,{color:"rgb(59,222,200)",text:"RGB"})],64)};const q={components:{ImportDemo:I}};q.render=function(s,a,l,t,n,e){const r=c("ImportDemo");return p(),d(r)};const A={},H=i("img",{src:"/suni/avatars/three.webp"},null,-1),O=v(" 28 "),k=i("img",{src:"/suni/avatars/three.webp"},null,-1),P=i("i",{class:"bx bxs-bell-off"},null,-1),R=v(" Off ");A.render=function(s,a){const l=c("si-avatar");return p(),h(o,null,[j(l,{src:"/avatars/three.webp",badge:""}),j(l,{src:"/avatars/three.webp",badge:"","badge-type":"danger"}),j(l,{src:"/avatars/three.webp",badge:"","badge-type":"success","badge-position":"bottom-right"},{badge:g((()=>[O])),default:g((()=>[H])),_:1}),j(l,{src:"/avatars/three.webp",badge:"","badge-type":"warning","badge-position":"bottom-left"},{badge:g((()=>[P])),default:g((()=>[k])),_:1}),j(l,{src:"/avatars/three.webp",badge:"","badge-type":"danger","badge-position":"top-left"},{badge:g((()=>[R])),_:1}),j(l,{src:"/avatars/three.webp",badge:"","badge-color":"#7d33ff"})],64)};const C={components:{ImportDemo:A}};C.render=function(s,a,l,t,n,e){const r=c("ImportDemo");return p(),d(r)};const F={},S={style:{"margin-top":"1em"}};F.render=function(s,a){const l=c("si-avatar");return p(),h(o,null,[i("p",null,[j(l,{circle:"",text:"J"}),j(l,{circle:"",type:"danger",text:"F"}),j(l,{circle:"",badge:"",src:"/avatars/four.png"}),j(l,{circle:"",badge:"","badge-type":"success",src:"/avatars/four.png"}),j(l,{circle:"",badge:"","badge-type":"warning",src:"/avatars/four.png","badge-position":"bottom-right"})]),i("p",S,[j(l,{circle:"",text:"J"}),j(l,{square:"",type:"danger",text:"F"}),j(l,{square:"",badge:"",src:"/avatars/four.png"}),j(l,{square:"",badge:"","badge-type":"success",src:"/avatars/four.png"}),j(l,{square:"",badge:"","badge-type":"warning",src:"/avatars/four.png","badge-position":"bottom-right"})])],64)};const B={components:{ImportDemo:F}};B.render=function(s,a,l,t,n,e){const r=c("ImportDemo");return p(),d(r)};const E={},J=v(" 28 "),L=i("i",{class:"bx bxs-bell-off"},null,-1);E.render=function(s,a){const l=c("si-avatar");return p(),h(o,null,[j(l,{src:"/avatars/five.jpg",loading:"",badge:""}),j(l,{src:"/avatars/five.jpg",loading:"",badge:"","badge-type":"danger"}),j(l,{src:"/avatars/five.jpg",loading:"",badge:"","badge-type":"success"},{badge:g((()=>[J])),_:1}),j(l,{src:"/avatars/five.jpg",loading:"",badge:"","badge-type":"warning"},{badge:g((()=>[L])),_:1}),j(l,{src:"/avatars/five.jpg",loading:"",writing:"",badge:"","badge-type":"primary"}),j(l,{src:"/avatars/five.jpg",loading:"","badge-position":"bottom-right",badge:"","badge-color":"#7d33ff"})],64)};const G={components:{ImportDemo:E}};G.render=function(s,a,l,t,n,e){const r=c("ImportDemo");return p(),d(r)};const T=m({components:{vdpv_0:D,vdpv_1:q,vdpv_2:C,vdpv_3:B,vdpv_4:G},setup(s){const c=b(),p=b(),h=b(),j=b(),g=b(),o=[c,p,h,j,g],i=u({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0,vdpv_4Height:0});return d=((s,a)=>{for(var l in a||(a={}))n.call(a,l)&&r(s,l,a[l]);if(t)for(var l of t(a))e.call(a,l)&&r(s,l,a[l]);return s})({toggleCode:s=>{const a="vdpv_"+s;0===i[a+"Height"]?i[a+"Height"]=(o[s].value?o[s].value.offsetHeight:0)||0:i[a+"Height"]=0}},f(i)),a(d,l({vdpv_0Ref:c,vdpv_1Ref:p,vdpv_2Ref:h,vdpv_3Ref:j,vdpv_4Ref:g}));var d}});T.$vd={matter:{title:"Avatar"},toc:[{content:"Avatar 头像",anchor:"avatar-头像",level:1},{content:"Default",anchor:"default",level:2},{content:"Type & Color",anchor:"type-color",level:2},{content:"Badge",anchor:"badge",level:2},{content:"Circle & Square",anchor:"circle-square",level:2},{content:"Loading",anchor:"loading",level:2}]};const W=T,X={class:"vuedoc component-container"},$=y('<h1 id="avatar-头像" data-source-line="2"><a class="markdownIt-Anchor" href="#avatar-头像">#</a> Avatar 头像</h1><p data-source-line="4">用图标、图片或者字符的形式展示用户或事物信息</p><h2 id="default" data-source-line="6"><a class="markdownIt-Anchor" href="#default">#</a> Default</h2><p data-source-line="8">添加 <code>src</code> / <code>#default</code>插槽 / <code>text</code> 来让 Avatar 展示内容</p><p data-source-line="10">优先级为：<code>src</code> &gt; <code>#default</code> &gt; <code>text</code></p><pre style="display:none;"></pre>',6),z={class:"vuedoc-demo"},K=i("pre",{class:"hljs language-vue hljs--atom-one-light"},[i("code",null,[i("span",{class:"xml"},[i("span",{class:"hljs-tag"},[v("<"),i("span",{class:"hljs-name"},"template"),v(">")]),v("\r\n\t"),i("span",{class:"hljs-tag"},[v("<"),i("span",{class:"hljs-name"},"si-avatar"),v(),i("span",{class:"hljs-attr"},"text"),v("="),i("span",{class:"hljs-string"},'"Lily"'),v(">")]),i("span",{class:"hljs-tag"},[v("</"),i("span",{class:"hljs-name"},"si-avatar"),v(">")]),v("\r\n\t"),i("span",{class:"hljs-tag"},[v("<"),i("span",{class:"hljs-name"},"si-avatar"),v(">")]),v("\r\n\t\t"),i("span",{class:"hljs-tag"},[v("<"),i("span",{class:"hljs-name"},"i"),v(),i("span",{class:"hljs-attr"},"class"),v("="),i("span",{class:"hljs-string"},'"bx bx-user"'),v(">")]),i("span",{class:"hljs-tag"},[v("</"),i("span",{class:"hljs-name"},"i"),v(">")]),v("\r\n\t"),i("span",{class:"hljs-tag"},[v("</"),i("span",{class:"hljs-name"},"si-avatar"),v(">")]),v("\r\n\t"),i("span",{class:"hljs-tag"},[v("<"),i("span",{class:"hljs-name"},"si-avatar"),v(),i("span",{class:"hljs-attr"},"type"),v("="),i("span",{class:"hljs-string"},'"primary"'),v(">")]),v("\r\n\t\t"),i("span",{class:"hljs-tag"},[v("<"),i("span",{class:"hljs-name"},"i"),v(),i("span",{class:"hljs-attr"},"class"),v("="),i("span",{class:"hljs-string"},'"bx bxs-hot"'),v(">")]),i("span",{class:"hljs-tag"},[v("</"),i("span",{class:"hljs-name"},"i"),v(">")]),v("\r\n\t"),i("span",{class:"hljs-tag"},[v("</"),i("span",{class:"hljs-name"},"si-avatar"),v(">")]),v("\r\n\t"),i("span",{class:"hljs-tag"},[v("<"),i("span",{class:"hljs-name"},"si-avatar"),v(),i("span",{class:"hljs-attr"},"src"),v("="),i("span",{class:"hljs-string"},'"/avatars/one.png"'),v(">")]),i("span",{class:"hljs-tag"},[v("</"),i("span",{class:"hljs-name"},"si-avatar"),v(">")]),v("\r\n"),i("span",{class:"hljs-tag"},[v("</"),i("span",{class:"hljs-name"},"template"),v(">")]),v("\r\n")])])],-1),M=y('<h2 id="type-color" data-source-line="16"><a class="markdownIt-Anchor" href="#type-color">#</a> Type &amp; Color</h2><p data-source-line="18">设置 <code>type</code>、<code>color</code> 属性来改变 Avatar 的颜色（<code>color</code>属性覆盖<code>type</code>属性）</p><p data-source-line="20"><code>type</code>: primary | warning | success | danger | dark | light</p><p data-source-line="22"><code>color</code>: hsl | rgb | hex</p><pre style="display:none;"></pre>',5),N={class:"vuedoc-demo"},Q=i("pre",{class:"hljs language-vue hljs--atom-one-light"},[i("code",null,[i("span",{class:"xml"},[i("span",{class:"hljs-tag"},[v("<"),i("span",{class:"hljs-name"},"template"),v(">")]),v("\r\n\t"),i("span",{class:"hljs-tag"},[v("<"),i("span",{class:"hljs-name"},"si-avatar"),v(),i("span",{class:"hljs-attr"},"type"),v("="),i("span",{class:"hljs-string"},'"primary"'),v(),i("span",{class:"hljs-attr"},"text"),v("="),i("span",{class:"hljs-string"},'"P"'),v(">")]),v(),i("span",{class:"hljs-tag"},[v("</"),i("span",{class:"hljs-name"},"si-avatar"),v(">")]),v("\r\n\t"),i("span",{class:"hljs-tag"},[v("<"),i("span",{class:"hljs-name"},"si-avatar"),v(),i("span",{class:"hljs-attr"},"type"),v("="),i("span",{class:"hljs-string"},'"success"'),v(),i("span",{class:"hljs-attr"},"text"),v("="),i("span",{class:"hljs-string"},'"S"'),v(">")]),v(),i("span",{class:"hljs-tag"},[v("</"),i("span",{class:"hljs-name"},"si-avatar"),v(">")]),v("\r\n\t"),i("span",{class:"hljs-tag"},[v("<"),i("span",{class:"hljs-name"},"si-avatar"),v(),i("span",{class:"hljs-attr"},"type"),v("="),i("span",{class:"hljs-string"},'"danger"'),v(),i("span",{class:"hljs-attr"},"text"),v("="),i("span",{class:"hljs-string"},'"D"'),v(">")]),v(),i("span",{class:"hljs-tag"},[v("</"),i("span",{class:"hljs-name"},"si-avatar"),v(">")]),v("\r\n\t"),i("span",{class:"hljs-tag"},[v("<"),i("span",{class:"hljs-name"},"si-avatar"),v(),i("span",{class:"hljs-attr"},"type"),v("="),i("span",{class:"hljs-string"},'"warning"'),v(),i("span",{class:"hljs-attr"},"text"),v("="),i("span",{class:"hljs-string"},'"W"'),v(">")]),v(),i("span",{class:"hljs-tag"},[v("</"),i("span",{class:"hljs-name"},"si-avatar"),v(">")]),v("\r\n\t"),i("span",{class:"hljs-tag"},[v("<"),i("span",{class:"hljs-name"},"si-avatar"),v(),i("span",{class:"hljs-attr"},"type"),v("="),i("span",{class:"hljs-string"},'"dark"'),v(),i("span",{class:"hljs-attr"},"text"),v("="),i("span",{class:"hljs-string"},'"D"'),v(">")]),v(),i("span",{class:"hljs-tag"},[v("</"),i("span",{class:"hljs-name"},"si-avatar"),v(">")]),v("\r\n\t"),i("span",{class:"hljs-tag"},[v("<"),i("span",{class:"hljs-name"},"si-avatar"),v(),i("span",{class:"hljs-attr"},"color"),v("="),i("span",{class:"hljs-string"},'"#7d33ff"'),v(),i("span",{class:"hljs-attr"},"text"),v("="),i("span",{class:"hljs-string"},'"HEX"'),v(">")]),v(),i("span",{class:"hljs-tag"},[v("</"),i("span",{class:"hljs-name"},"si-avatar"),v(">")]),v("\r\n\t"),i("span",{class:"hljs-tag"},[v("<"),i("span",{class:"hljs-name"},"si-avatar"),v(),i("span",{class:"hljs-attr"},"color"),v("="),i("span",{class:"hljs-string"},'"rgb(59,222,200)"'),v(),i("span",{class:"hljs-attr"},"text"),v("="),i("span",{class:"hljs-string"},'"RGB"'),v(">")]),v(),i("span",{class:"hljs-tag"},[v("</"),i("span",{class:"hljs-name"},"si-avatar"),v(">")]),v("\r\n"),i("span",{class:"hljs-tag"},[v("</"),i("span",{class:"hljs-name"},"template"),v(">")]),v("\r\n")])])],-1),U=y('<h2 id="badge" data-source-line="28"><a class="markdownIt-Anchor" href="#badge">#</a> Badge</h2><p data-source-line="30">添加 <code>badge</code> 属性来给 Avatar 添加角标</p><p data-source-line="32">设置 <code>badge-type</code> / <code>badge-color</code> 来设置角标颜色</p><p data-source-line="34">设置 <code>badge-position</code> 属性来改变角标位置</p><p data-source-line="36"><code>badge-type</code>: primary | warning | success | danger | light | dark</p><p data-source-line="38"><code>badge-color</code>: hsl | rgb | hex</p><p data-source-line="40"><code>badge-position</code>: top-right | top-left | bottom-right | bottom-left</p><pre style="display:none;"></pre>',8),V={class:"vuedoc-demo"},Y=i("pre",{class:"hljs language-vue hljs--atom-one-light"},[i("code",null,[i("span",{class:"xml"},[i("span",{class:"hljs-tag"},[v("<"),i("span",{class:"hljs-name"},"template"),v(">")]),v("\r\n\t"),i("span",{class:"hljs-tag"},[v("<"),i("span",{class:"hljs-name"},"si-avatar"),v(),i("span",{class:"hljs-attr"},"src"),v("="),i("span",{class:"hljs-string"},'"/avatars/three.webp"'),v(),i("span",{class:"hljs-attr"},"badge"),v(">")]),v(),i("span",{class:"hljs-tag"},[v("</"),i("span",{class:"hljs-name"},"si-avatar"),v(">")]),v("\r\n\t"),i("span",{class:"hljs-tag"},[v("<"),i("span",{class:"hljs-name"},"si-avatar"),v(),i("span",{class:"hljs-attr"},"src"),v("="),i("span",{class:"hljs-string"},'"/avatars/three.webp"'),v(),i("span",{class:"hljs-attr"},"badge"),v(),i("span",{class:"hljs-attr"},"badge-type"),v("="),i("span",{class:"hljs-string"},'"danger"'),v(">")]),v(),i("span",{class:"hljs-tag"},[v("</"),i("span",{class:"hljs-name"},"si-avatar"),v(">")]),v("\r\n\t"),i("span",{class:"hljs-tag"},[v("<"),i("span",{class:"hljs-name"},"si-avatar"),v(),i("span",{class:"hljs-attr"},"src"),v("="),i("span",{class:"hljs-string"},'"/avatars/three.webp"'),v(),i("span",{class:"hljs-attr"},"badge"),v(),i("span",{class:"hljs-attr"},"badge-type"),v("="),i("span",{class:"hljs-string"},'"success"'),v(),i("span",{class:"hljs-attr"},"badge-position"),v("="),i("span",{class:"hljs-string"},'"bottom-right"'),v(">")]),v("\r\n\t\t"),i("span",{class:"hljs-tag"},[v("<"),i("span",{class:"hljs-name"},"img"),v(),i("span",{class:"hljs-attr"},"src"),v("="),i("span",{class:"hljs-string"},'"/avatars/three.webp"'),v(" />")]),v("\r\n\t\t"),i("span",{class:"hljs-tag"},[v("<"),i("span",{class:"hljs-name"},"template"),v(" #"),i("span",{class:"hljs-attr"},"badge"),v(">")]),v(" 28 "),i("span",{class:"hljs-tag"},[v("</"),i("span",{class:"hljs-name"},"template"),v(">")]),v("\r\n\t"),i("span",{class:"hljs-tag"},[v("</"),i("span",{class:"hljs-name"},"si-avatar"),v(">")]),v("\r\n\t"),i("span",{class:"hljs-tag"},[v("<"),i("span",{class:"hljs-name"},"si-avatar"),v(),i("span",{class:"hljs-attr"},"src"),v("="),i("span",{class:"hljs-string"},'"/avatars/three.webp"'),v(),i("span",{class:"hljs-attr"},"badge"),v(),i("span",{class:"hljs-attr"},"badge-type"),v("="),i("span",{class:"hljs-string"},'"warning"'),v(),i("span",{class:"hljs-attr"},"badge-position"),v("="),i("span",{class:"hljs-string"},'"bottom-left"'),v(">")]),v("\r\n\t\t"),i("span",{class:"hljs-tag"},[v("<"),i("span",{class:"hljs-name"},"img"),v(),i("span",{class:"hljs-attr"},"src"),v("="),i("span",{class:"hljs-string"},'"/avatars/three.webp"'),v(" />")]),v("\r\n\t\t"),i("span",{class:"hljs-tag"},[v("<"),i("span",{class:"hljs-name"},"template"),v(" #"),i("span",{class:"hljs-attr"},"badge"),v(">")]),v("\r\n\t\t\t"),i("span",{class:"hljs-tag"},[v("<"),i("span",{class:"hljs-name"},"i"),v(),i("span",{class:"hljs-attr"},"class"),v("="),i("span",{class:"hljs-string"},'"bx bxs-bell-off"'),v(">")]),i("span",{class:"hljs-tag"},[v("</"),i("span",{class:"hljs-name"},"i"),v(">")]),v("\r\n\t\t"),i("span",{class:"hljs-tag"},[v("</"),i("span",{class:"hljs-name"},"template"),v(">")]),v("\r\n\t"),i("span",{class:"hljs-tag"},[v("</"),i("span",{class:"hljs-name"},"si-avatar"),v(">")]),v("\r\n\t"),i("span",{class:"hljs-tag"},[v("<"),i("span",{class:"hljs-name"},"si-avatar"),v(),i("span",{class:"hljs-attr"},"src"),v("="),i("span",{class:"hljs-string"},'"/avatars/three.webp"'),v(),i("span",{class:"hljs-attr"},"badge"),v(),i("span",{class:"hljs-attr"},"badge-type"),v("="),i("span",{class:"hljs-string"},'"danger"'),v(),i("span",{class:"hljs-attr"},"badge-position"),v("="),i("span",{class:"hljs-string"},'"top-left"'),v(">")]),v("\r\n\t\t"),i("span",{class:"hljs-tag"},[v("<"),i("span",{class:"hljs-name"},"template"),v(" #"),i("span",{class:"hljs-attr"},"badge"),v(">")]),v(" Off "),i("span",{class:"hljs-tag"},[v("</"),i("span",{class:"hljs-name"},"template"),v(">")]),v("\r\n\t"),i("span",{class:"hljs-tag"},[v("</"),i("span",{class:"hljs-name"},"si-avatar"),v(">")]),v("\r\n\t"),i("span",{class:"hljs-tag"},[v("<"),i("span",{class:"hljs-name"},"si-avatar"),v(),i("span",{class:"hljs-attr"},"src"),v("="),i("span",{class:"hljs-string"},'"/avatars/three.webp"'),v(),i("span",{class:"hljs-attr"},"badge"),v(),i("span",{class:"hljs-attr"},"badge-color"),v("="),i("span",{class:"hljs-string"},'"#7d33ff"'),v(">")]),v(),i("span",{class:"hljs-tag"},[v("</"),i("span",{class:"hljs-name"},"si-avatar"),v(">")]),v("\r\n"),i("span",{class:"hljs-tag"},[v("</"),i("span",{class:"hljs-name"},"template"),v(">")]),v("\r\n")])])],-1),Z=i("h2",{id:"circle-square","data-source-line":"46"},[i("a",{class:"markdownIt-Anchor",href:"#circle-square"},"#"),v(" Circle & Square")],-1),ss=i("p",{"data-source-line":"48"},[v("添加 "),i("code",null,"circle"),v(" / "),i("code",null,"square"),v(" 属性来改变 Avatar 的形状")],-1),as=i("pre",{style:{display:"none"}},null,-1),ls={class:"vuedoc-demo"},ts=i("pre",{class:"hljs language-vue hljs--atom-one-light"},[i("code",null,[i("span",{class:"xml"},[i("span",{class:"hljs-tag"},[v("<"),i("span",{class:"hljs-name"},"template"),v(">")]),v("\r\n\t"),i("span",{class:"hljs-tag"},[v("<"),i("span",{class:"hljs-name"},"p"),v(">")]),v("\r\n\t\t"),i("span",{class:"hljs-tag"},[v("<"),i("span",{class:"hljs-name"},"si-avatar"),v(),i("span",{class:"hljs-attr"},"circle"),v(),i("span",{class:"hljs-attr"},"text"),v("="),i("span",{class:"hljs-string"},'"J"'),v(">")]),i("span",{class:"hljs-tag"},[v("</"),i("span",{class:"hljs-name"},"si-avatar"),v(">")]),v("\r\n\t\t"),i("span",{class:"hljs-tag"},[v("<"),i("span",{class:"hljs-name"},"si-avatar"),v(),i("span",{class:"hljs-attr"},"circle"),v(),i("span",{class:"hljs-attr"},"type"),v("="),i("span",{class:"hljs-string"},'"danger"'),v(),i("span",{class:"hljs-attr"},"text"),v("="),i("span",{class:"hljs-string"},'"F"'),v(">")]),i("span",{class:"hljs-tag"},[v("</"),i("span",{class:"hljs-name"},"si-avatar"),v(">")]),v("\r\n\t\t"),i("span",{class:"hljs-tag"},[v("<"),i("span",{class:"hljs-name"},"si-avatar"),v(),i("span",{class:"hljs-attr"},"circle"),v(),i("span",{class:"hljs-attr"},"badge"),v(),i("span",{class:"hljs-attr"},"src"),v("="),i("span",{class:"hljs-string"},'"/avatars/four.png"'),v(">")]),i("span",{class:"hljs-tag"},[v("</"),i("span",{class:"hljs-name"},"si-avatar"),v(">")]),v("\r\n\t\t"),i("span",{class:"hljs-tag"},[v("<"),i("span",{class:"hljs-name"},"si-avatar"),v(),i("span",{class:"hljs-attr"},"circle"),v(),i("span",{class:"hljs-attr"},"badge"),v(),i("span",{class:"hljs-attr"},"badge-type"),v("="),i("span",{class:"hljs-string"},'"success"'),v(),i("span",{class:"hljs-attr"},"src"),v("="),i("span",{class:"hljs-string"},'"/avatars/four.png"'),v(">")]),i("span",{class:"hljs-tag"},[v("</"),i("span",{class:"hljs-name"},"si-avatar"),v(">")]),v("\r\n\t\t"),i("span",{class:"hljs-tag"},[v("<"),i("span",{class:"hljs-name"},"si-avatar"),v(),i("span",{class:"hljs-attr"},"circle"),v(),i("span",{class:"hljs-attr"},"badge"),v(),i("span",{class:"hljs-attr"},"badge-type"),v("="),i("span",{class:"hljs-string"},'"warning"'),v(),i("span",{class:"hljs-attr"},"src"),v("="),i("span",{class:"hljs-string"},'"/avatars/four.png"'),v(),i("span",{class:"hljs-attr"},"badge-position"),v("="),i("span",{class:"hljs-string"},'"bottom-right"'),v(">")]),i("span",{class:"hljs-tag"},[v("</"),i("span",{class:"hljs-name"},"si-avatar"),v(">")]),v("\r\n\t"),i("span",{class:"hljs-tag"},[v("</"),i("span",{class:"hljs-name"},"p"),v(">")]),v("\r\n\t"),i("span",{class:"hljs-tag"},[v("<"),i("span",{class:"hljs-name"},"p"),v(),i("span",{class:"hljs-attr"},"style"),v("="),i("span",{class:"hljs-string"},'"margin-top: 1em"'),v(">")]),v("\r\n\t\t"),i("span",{class:"hljs-tag"},[v("<"),i("span",{class:"hljs-name"},"si-avatar"),v(),i("span",{class:"hljs-attr"},"circle"),v(),i("span",{class:"hljs-attr"},"text"),v("="),i("span",{class:"hljs-string"},'"J"'),v(">")]),i("span",{class:"hljs-tag"},[v("</"),i("span",{class:"hljs-name"},"si-avatar"),v(">")]),v("\r\n\t\t"),i("span",{class:"hljs-tag"},[v("<"),i("span",{class:"hljs-name"},"si-avatar"),v(),i("span",{class:"hljs-attr"},"square"),v(),i("span",{class:"hljs-attr"},"type"),v("="),i("span",{class:"hljs-string"},'"danger"'),v(),i("span",{class:"hljs-attr"},"text"),v("="),i("span",{class:"hljs-string"},'"F"'),v(">")]),i("span",{class:"hljs-tag"},[v("</"),i("span",{class:"hljs-name"},"si-avatar"),v(">")]),v("\r\n\t\t"),i("span",{class:"hljs-tag"},[v("<"),i("span",{class:"hljs-name"},"si-avatar"),v(),i("span",{class:"hljs-attr"},"square"),v(),i("span",{class:"hljs-attr"},"badge"),v(),i("span",{class:"hljs-attr"},"src"),v("="),i("span",{class:"hljs-string"},'"/avatars/four.png"'),v(">")]),i("span",{class:"hljs-tag"},[v("</"),i("span",{class:"hljs-name"},"si-avatar"),v(">")]),v("\r\n\t\t"),i("span",{class:"hljs-tag"},[v("<"),i("span",{class:"hljs-name"},"si-avatar"),v(),i("span",{class:"hljs-attr"},"square"),v(),i("span",{class:"hljs-attr"},"badge"),v(),i("span",{class:"hljs-attr"},"badge-type"),v("="),i("span",{class:"hljs-string"},'"success"'),v(),i("span",{class:"hljs-attr"},"src"),v("="),i("span",{class:"hljs-string"},'"/avatars/four.png"'),v(">")]),i("span",{class:"hljs-tag"},[v("</"),i("span",{class:"hljs-name"},"si-avatar"),v(">")]),v("\r\n\t\t"),i("span",{class:"hljs-tag"},[v("<"),i("span",{class:"hljs-name"},"si-avatar"),v(),i("span",{class:"hljs-attr"},"square"),v(),i("span",{class:"hljs-attr"},"badge"),v(),i("span",{class:"hljs-attr"},"badge-type"),v("="),i("span",{class:"hljs-string"},'"warning"'),v(),i("span",{class:"hljs-attr"},"src"),v("="),i("span",{class:"hljs-string"},'"/avatars/four.png"'),v(),i("span",{class:"hljs-attr"},"badge-position"),v("="),i("span",{class:"hljs-string"},'"bottom-right"'),v(">")]),i("span",{class:"hljs-tag"},[v("</"),i("span",{class:"hljs-name"},"si-avatar"),v(">")]),v("\r\n\t"),i("span",{class:"hljs-tag"},[v("</"),i("span",{class:"hljs-name"},"p"),v(">")]),v("\r\n"),i("span",{class:"hljs-tag"},[v("</"),i("span",{class:"hljs-name"},"template"),v(">")]),v("\r\n")])])],-1),ns=i("h2",{id:"loading","data-source-line":"54"},[i("a",{class:"markdownIt-Anchor",href:"#loading"},"#"),v(" Loading")],-1),es=i("p",{"data-source-line":"56"},[v("添加 "),i("code",null,"loading"),v(" 属性来切换 Avatar 的 loading 状态")],-1),rs=i("pre",{style:{display:"none"}},null,-1),cs={class:"vuedoc-demo"},ps=i("pre",{class:"hljs language-vue hljs--atom-one-light"},[i("code",null,[i("span",{class:"xml"},[i("span",{class:"hljs-tag"},[v("<"),i("span",{class:"hljs-name"},"template"),v(">")]),v("\r\n\t"),i("span",{class:"hljs-tag"},[v("<"),i("span",{class:"hljs-name"},"si-avatar"),v(),i("span",{class:"hljs-attr"},"src"),v("="),i("span",{class:"hljs-string"},'"/avatars/five.jpg"'),v(),i("span",{class:"hljs-attr"},"loading"),v(),i("span",{class:"hljs-attr"},"badge"),v(">")]),i("span",{class:"hljs-tag"},[v("</"),i("span",{class:"hljs-name"},"si-avatar"),v(">")]),v("\r\n\t"),i("span",{class:"hljs-tag"},[v("<"),i("span",{class:"hljs-name"},"si-avatar"),v(),i("span",{class:"hljs-attr"},"src"),v("="),i("span",{class:"hljs-string"},'"/avatars/five.jpg"'),v(),i("span",{class:"hljs-attr"},"loading"),v(),i("span",{class:"hljs-attr"},"badge"),v(),i("span",{class:"hljs-attr"},"badge-type"),v("="),i("span",{class:"hljs-string"},'"danger"'),v(">")]),i("span",{class:"hljs-tag"},[v("</"),i("span",{class:"hljs-name"},"si-avatar"),v(">")]),v("\r\n\t"),i("span",{class:"hljs-tag"},[v("<"),i("span",{class:"hljs-name"},"si-avatar"),v(),i("span",{class:"hljs-attr"},"src"),v("="),i("span",{class:"hljs-string"},'"/avatars/five.jpg"'),v(),i("span",{class:"hljs-attr"},"loading"),v(),i("span",{class:"hljs-attr"},"badge"),v(),i("span",{class:"hljs-attr"},"badge-type"),v("="),i("span",{class:"hljs-string"},'"success"'),v(">")]),v("\r\n\t\t"),i("span",{class:"hljs-tag"},[v("<"),i("span",{class:"hljs-name"},"template"),v(" #"),i("span",{class:"hljs-attr"},"badge"),v(">")]),v(" 28 "),i("span",{class:"hljs-tag"},[v("</"),i("span",{class:"hljs-name"},"template"),v(">")]),v("\r\n\t"),i("span",{class:"hljs-tag"},[v("</"),i("span",{class:"hljs-name"},"si-avatar"),v(">")]),v("\r\n\t"),i("span",{class:"hljs-tag"},[v("<"),i("span",{class:"hljs-name"},"si-avatar"),v(),i("span",{class:"hljs-attr"},"src"),v("="),i("span",{class:"hljs-string"},'"/avatars/five.jpg"'),v(),i("span",{class:"hljs-attr"},"loading"),v(),i("span",{class:"hljs-attr"},"badge"),v(),i("span",{class:"hljs-attr"},"badge-type"),v("="),i("span",{class:"hljs-string"},'"warning"'),v(">")]),v("\r\n\t\t"),i("span",{class:"hljs-tag"},[v("<"),i("span",{class:"hljs-name"},"template"),v(" #"),i("span",{class:"hljs-attr"},"badge"),v(">")]),v("\r\n\t\t\t"),i("span",{class:"hljs-tag"},[v("<"),i("span",{class:"hljs-name"},"i"),v(),i("span",{class:"hljs-attr"},"class"),v("="),i("span",{class:"hljs-string"},'"bx bxs-bell-off"'),v(">")]),i("span",{class:"hljs-tag"},[v("</"),i("span",{class:"hljs-name"},"i"),v(">")]),v("\r\n\t\t"),i("span",{class:"hljs-tag"},[v("</"),i("span",{class:"hljs-name"},"template"),v(">")]),v("\r\n\t"),i("span",{class:"hljs-tag"},[v("</"),i("span",{class:"hljs-name"},"si-avatar"),v(">")]),v("\r\n\t"),i("span",{class:"hljs-tag"},[v("<"),i("span",{class:"hljs-name"},"si-avatar"),v(),i("span",{class:"hljs-attr"},"src"),v("="),i("span",{class:"hljs-string"},'"/avatars/five.jpg"'),v(),i("span",{class:"hljs-attr"},"loading"),v(),i("span",{class:"hljs-attr"},"writing"),v(),i("span",{class:"hljs-attr"},"badge"),v(),i("span",{class:"hljs-attr"},"badge-type"),v("="),i("span",{class:"hljs-string"},'"primary"'),v(">")]),i("span",{class:"hljs-tag"},[v("</"),i("span",{class:"hljs-name"},"si-avatar"),v(">")]),v("\r\n\t"),i("span",{class:"hljs-tag"},[v("<"),i("span",{class:"hljs-name"},"si-avatar"),v(),i("span",{class:"hljs-attr"},"src"),v("="),i("span",{class:"hljs-string"},'"/avatars/five.jpg"'),v(),i("span",{class:"hljs-attr"},"loading"),v(),i("span",{class:"hljs-attr"},"badge-position"),v("="),i("span",{class:"hljs-string"},'"bottom-right"'),v(),i("span",{class:"hljs-attr"},"badge"),v(),i("span",{class:"hljs-attr"},"badge-color"),v("="),i("span",{class:"hljs-string"},'"#7d33ff"'),v(">")]),i("span",{class:"hljs-tag"},[v("</"),i("span",{class:"hljs-name"},"si-avatar"),v(">")]),v("\r\n"),i("span",{class:"hljs-tag"},[v("</"),i("span",{class:"hljs-name"},"template"),v(">")]),v("\r\n")])])],-1);W.render=function(s,a,l,t,n,e){const r=c("vdpv_0"),o=c("ComponentExample"),d=c("vdpv_1"),v=c("vdpv_2"),m=c("vdpv_3"),b=c("vdpv_4");return p(),h("div",X,[$,i("div",z,[j(o,{lang:"vue",theme:"atom-one-light"},{code:g((()=>[K])),default:g((()=>[j(r)])),_:1})]),M,i("div",N,[j(o,{lang:"vue",theme:"atom-one-light"},{code:g((()=>[Q])),default:g((()=>[j(d)])),_:1})]),U,i("div",V,[j(o,{lang:"vue",theme:"atom-one-light"},{code:g((()=>[Y])),default:g((()=>[j(v)])),_:1})]),Z,ss,as,i("div",ls,[j(o,{lang:"vue",theme:"atom-one-light"},{code:g((()=>[ts])),default:g((()=>[j(m)])),_:1})]),ns,es,rs,i("div",cs,[j(o,{lang:"vue",theme:"atom-one-light"},{code:g((()=>[ps])),default:g((()=>[j(b)])),_:1})])])};export{W as default};
