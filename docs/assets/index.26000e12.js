var s=Object.defineProperty,a=Object.defineProperties,n=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,e=Object.prototype.propertyIsEnumerable,r=(a,n,l)=>n in a?s(a,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[n]=l;import{d as p,r as c,o,b as i,f as h,e as d,F as j,t as g,c as m,w as u,h as v,y,u as f,i as w,v as b,x as k}from"./vendor.495c77ae.js";var _=p({data:()=>({type:"primary",types:["primary","success","warning","danger","dark","light"],page:1})});const x={style:{"margin-top":"1em"}};_.render=function(s,a,n,l,t,e){const r=c("si-pagination"),p=c("si-radio");return o(),i(j,null,[h(r,{type:s.type,current:s.page,"onUpdate:current":a[0]||(a[0]=a=>s.page=a),total:100,style:{margin:"0.5em"}},null,8,["type","current"]),d("p",x,[(o(!0),i(j,null,g(s.types,(n=>(o(),m(p,{modelValue:s.type,"onUpdate:modelValue":a[1]||(a[1]=a=>s.type=a),type:n,value:n},{default:u((()=>[v(y(n),1)])),_:2},1032,["modelValue","type","value"])))),256))])],64)};const D={components:{ImportDemo:_}};D.render=function(s,a,n,l,t,e){const r=c("ImportDemo");return o(),m(r)};var I=p({data:()=>({page:1})});I.render=function(s,a,n,l,t,e){const r=c("si-pagination");return o(),i(j,null,[h(r,{circle:"",total:200,current:s.page,"onUpdate:current":a[0]||(a[0]=a=>s.page=a)},null,8,["current"]),h(r,{square:"",total:200,current:s.page,"onUpdate:current":a[1]||(a[1]=a=>s.page=a),style:{"margin-top":"1em"}},null,8,["current"])],64)};const P={components:{ImportDemo:I}};P.render=function(s,a,n,l,t,e){const r=c("ImportDemo");return o(),m(r)};var C=p({data:()=>({page:1})});C.render=function(s,a,n,l,t,e){const r=c("si-pagination");return o(),m(r,{current:s.page,"onUpdate:current":a[0]||(a[0]=a=>s.page=a),total:100,style:{margin:"0.5em"},disabled:""},null,8,["current"])};const O={components:{ImportDemo:C}};O.render=function(s,a,n,l,t,e){const r=c("ImportDemo");return o(),m(r)};const q=p({components:{vdpv_0:D,vdpv_1:P,vdpv_2:O},setup(s){const p=f(),c=f(),o=f(),i=[p,c,o],h=w({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0});return d=((s,a)=>{for(var n in a||(a={}))t.call(a,n)&&r(s,n,a[n]);if(l)for(var n of l(a))e.call(a,n)&&r(s,n,a[n]);return s})({toggleCode:s=>{const a="vdpv_"+s;0===h[a+"Height"]?h[a+"Height"]=(i[s].value?i[s].value.offsetHeight:0)||0:h[a+"Height"]=0}},b(h)),a(d,n({vdpv_0Ref:p,vdpv_1Ref:c,vdpv_2Ref:o}));var d}});q.$vd={matter:{title:"Pagination"},toc:[{content:"Pagination 分页",anchor:"pagination-分页",level:1},{content:"Default",anchor:"default",level:2},{content:"Circle & Square",anchor:"circle-square",level:2},{content:"Disabled",anchor:"disabled",level:2}]};const H=q,U={class:"vuedoc component-container"},A=k('<h1 id="pagination-分页" data-source-line="2"><a class="markdownIt-Anchor" href="#pagination-分页">#</a> Pagination 分页</h1><p data-source-line="4">当数据量过多时，使用分页分解数据</p><h2 id="default" data-source-line="6"><a class="markdownIt-Anchor" href="#default">#</a> Default</h2><p data-source-line="8">设置 <code>type</code>、<code>color</code> 属性来改变 Pagination 的颜色（<code>color</code>属性覆盖<code>type</code>属性）</p><p data-source-line="10"><code>type</code>: primary | warning | success | danger | light | dark</p><p data-source-line="12"><code>color</code>: hsl | rgb | hex</p><pre style="display:none;"></pre>',7),R={class:"vuedoc-demo"},S=d("pre",{class:"hljs language-vue hljs--atom-one-light"},[d("code",null,[d("span",{class:"xml"},[d("span",{class:"hljs-tag"},[v("<"),d("span",{class:"hljs-name"},"template"),v(">")]),v("\r\n\t"),d("span",{class:"hljs-tag"},[v("<"),d("span",{class:"hljs-name"},"si-pagination"),v(),d("span",{class:"hljs-attr"},":type"),v("="),d("span",{class:"hljs-string"},'"type"'),v(),d("span",{class:"hljs-attr"},"v-model:current"),v("="),d("span",{class:"hljs-string"},'"page"'),v(),d("span",{class:"hljs-attr"},":total"),v("="),d("span",{class:"hljs-string"},'"100"'),v(),d("span",{class:"hljs-attr"},"style"),v("="),d("span",{class:"hljs-string"},'"margin: 0.5em"'),v(" />")]),v("\r\n\r\n\t"),d("span",{class:"hljs-tag"},[v("<"),d("span",{class:"hljs-name"},"p"),v(),d("span",{class:"hljs-attr"},"style"),v("="),d("span",{class:"hljs-string"},'"margin-top: 1em"'),v(">")]),v("\r\n\t\t"),d("span",{class:"hljs-tag"},[v("<"),d("span",{class:"hljs-name"},"si-radio"),v(),d("span",{class:"hljs-attr"},"v-for"),v("="),d("span",{class:"hljs-string"},'"item in types"'),v(),d("span",{class:"hljs-attr"},"v-model"),v("="),d("span",{class:"hljs-string"},'"type"'),v(),d("span",{class:"hljs-attr"},":type"),v("="),d("span",{class:"hljs-string"},'"item"'),v(),d("span",{class:"hljs-attr"},":value"),v("="),d("span",{class:"hljs-string"},'"item"'),v(">")]),v("{{ item }}"),d("span",{class:"hljs-tag"},[v("</"),d("span",{class:"hljs-name"},"si-radio"),v(">")]),v("\r\n\t"),d("span",{class:"hljs-tag"},[v("</"),d("span",{class:"hljs-name"},"p"),v(">")]),v("\r\n"),d("span",{class:"hljs-tag"},[v("</"),d("span",{class:"hljs-name"},"template"),v(">")]),v("\r\n\r\n"),d("span",{class:"hljs-tag"},[v("<"),d("span",{class:"hljs-name"},"script"),v(),d("span",{class:"hljs-attr"},"lang"),v("="),d("span",{class:"hljs-string"},'"ts"'),v(">")])]),d("span",{class:"typescript"},[v("\r\n"),d("span",{class:"hljs-keyword"},"import"),v(" { defineComponent } "),d("span",{class:"hljs-keyword"},"from"),v(),d("span",{class:"hljs-string"},"'vue'"),v("\r\n\r\n"),d("span",{class:"hljs-keyword"},"export"),v(),d("span",{class:"hljs-keyword"},"default"),v(" defineComponent({\r\n\t"),d("span",{class:"hljs-function"},[d("span",{class:"hljs-title"},"data"),v("("),d("span",{class:"hljs-params"}),v(")")]),v(" {\r\n\t\t"),d("span",{class:"hljs-keyword"},"return"),v(" {\r\n\t\t\t"),d("span",{class:"hljs-attr"},"type"),v(": "),d("span",{class:"hljs-string"},"'primary'"),v(",\r\n\t\t\t"),d("span",{class:"hljs-attr"},"types"),v(": ["),d("span",{class:"hljs-string"},"'primary'"),v(", "),d("span",{class:"hljs-string"},"'success'"),v(", "),d("span",{class:"hljs-string"},"'warning'"),v(", "),d("span",{class:"hljs-string"},"'danger'"),v(", "),d("span",{class:"hljs-string"},"'dark'"),v(", "),d("span",{class:"hljs-string"},"'light'"),v("],\r\n\t\t\t"),d("span",{class:"hljs-attr"},"page"),v(": "),d("span",{class:"hljs-number"},"1"),v("\r\n\t\t}\r\n\t}\r\n})\r")]),d("span",{class:"xml"},[v("\n"),d("span",{class:"hljs-tag"},[v("</"),d("span",{class:"hljs-name"},"script"),v(">")]),v("\r\n")])])],-1),V=d("h2",{id:"circle-square","data-source-line":"18"},[d("a",{class:"markdownIt-Anchor",href:"#circle-square"},"#"),v(" Circle & Square")],-1),E=d("p",{"data-source-line":"20"},[v("添加 "),d("code",null,"circle"),v(" \\ "),d("code",null,"square"),v(" 属性来改变 Pagination 的形状")],-1),F=d("pre",{style:{display:"none"}},null,-1),$={class:"vuedoc-demo"},z=d("pre",{class:"hljs language-vue hljs--atom-one-light"},[d("code",null,[d("span",{class:"xml"},[d("span",{class:"hljs-tag"},[v("<"),d("span",{class:"hljs-name"},"template"),v(">")]),v("\r\n\t"),d("span",{class:"hljs-tag"},[v("<"),d("span",{class:"hljs-name"},"si-pagination"),v(),d("span",{class:"hljs-attr"},"circle"),v(),d("span",{class:"hljs-attr"},":total"),v("="),d("span",{class:"hljs-string"},'"200"'),v(),d("span",{class:"hljs-attr"},"v-model:current"),v("="),d("span",{class:"hljs-string"},'"page"'),v(">")]),d("span",{class:"hljs-tag"},[v("</"),d("span",{class:"hljs-name"},"si-pagination"),v(">")]),v("\r\n\r\n\t"),d("span",{class:"hljs-tag"},[v("<"),d("span",{class:"hljs-name"},"si-pagination"),v(),d("span",{class:"hljs-attr"},"square"),v(),d("span",{class:"hljs-attr"},":total"),v("="),d("span",{class:"hljs-string"},'"200"'),v(),d("span",{class:"hljs-attr"},"v-model:current"),v("="),d("span",{class:"hljs-string"},'"page"'),v(),d("span",{class:"hljs-attr"},"style"),v("="),d("span",{class:"hljs-string"},'"margin-top: 1em"'),v(">")]),d("span",{class:"hljs-tag"},[v("</"),d("span",{class:"hljs-name"},"si-pagination"),v(">")]),v("\r\n"),d("span",{class:"hljs-tag"},[v("</"),d("span",{class:"hljs-name"},"template"),v(">")]),v("\r\n\r\n"),d("span",{class:"hljs-tag"},[v("<"),d("span",{class:"hljs-name"},"script"),v(),d("span",{class:"hljs-attr"},"lang"),v("="),d("span",{class:"hljs-string"},'"ts"'),v(">")])]),d("span",{class:"typescript"},[v("\r\n"),d("span",{class:"hljs-keyword"},"import"),v(" { defineComponent } "),d("span",{class:"hljs-keyword"},"from"),v(),d("span",{class:"hljs-string"},"'vue'"),v("\r\n\r\n"),d("span",{class:"hljs-keyword"},"export"),v(),d("span",{class:"hljs-keyword"},"default"),v(" defineComponent({\r\n\t"),d("span",{class:"hljs-function"},[d("span",{class:"hljs-title"},"data"),v("("),d("span",{class:"hljs-params"}),v(")")]),v(" {\r\n\t\t"),d("span",{class:"hljs-keyword"},"return"),v(" {\r\n\t\t\t"),d("span",{class:"hljs-attr"},"page"),v(": "),d("span",{class:"hljs-number"},"1"),v("\r\n\t\t}\r\n\t}\r\n})\r")]),d("span",{class:"xml"},[v("\n"),d("span",{class:"hljs-tag"},[v("</"),d("span",{class:"hljs-name"},"script"),v(">")]),v("\r\n")])])],-1),B=d("h2",{id:"disabled","data-source-line":"26"},[d("a",{class:"markdownIt-Anchor",href:"#disabled"},"#"),v(" Disabled")],-1),G=d("p",{"data-source-line":"28"},[v("添加 "),d("code",null,"disabled"),v(" 属性来切换 Pagination 的状态")],-1),J=d("pre",{style:{display:"none"}},null,-1),K={class:"vuedoc-demo"},L=d("pre",{class:"hljs language-vue hljs--atom-one-light"},[d("code",null,[d("span",{class:"xml"},[d("span",{class:"hljs-tag"},[v("<"),d("span",{class:"hljs-name"},"template"),v(">")]),v("\r\n\t"),d("span",{class:"hljs-tag"},[v("<"),d("span",{class:"hljs-name"},"si-pagination"),v(),d("span",{class:"hljs-attr"},"v-model:current"),v("="),d("span",{class:"hljs-string"},'"page"'),v(),d("span",{class:"hljs-attr"},":total"),v("="),d("span",{class:"hljs-string"},'"100"'),v(),d("span",{class:"hljs-attr"},"style"),v("="),d("span",{class:"hljs-string"},'"margin: 0.5em"'),v(),d("span",{class:"hljs-attr"},"disabled"),v(" />")]),v("\r\n"),d("span",{class:"hljs-tag"},[v("</"),d("span",{class:"hljs-name"},"template"),v(">")]),v("\r\n\r\n"),d("span",{class:"hljs-tag"},[v("<"),d("span",{class:"hljs-name"},"script"),v(),d("span",{class:"hljs-attr"},"lang"),v("="),d("span",{class:"hljs-string"},'"ts"'),v(">")])]),d("span",{class:"typescript"},[v("\r\n"),d("span",{class:"hljs-keyword"},"import"),v(" { defineComponent } "),d("span",{class:"hljs-keyword"},"from"),v(),d("span",{class:"hljs-string"},"'vue'"),v("\r\n\r\n"),d("span",{class:"hljs-keyword"},"export"),v(),d("span",{class:"hljs-keyword"},"default"),v(" defineComponent({\r\n\t"),d("span",{class:"hljs-function"},[d("span",{class:"hljs-title"},"data"),v("("),d("span",{class:"hljs-params"}),v(")")]),v(" {\r\n\t\t"),d("span",{class:"hljs-keyword"},"return"),v(" {\r\n\t\t\t"),d("span",{class:"hljs-attr"},"page"),v(": "),d("span",{class:"hljs-number"},"1"),v("\r\n\t\t}\r\n\t}\r\n})\r")]),d("span",{class:"xml"},[v("\n"),d("span",{class:"hljs-tag"},[v("</"),d("span",{class:"hljs-name"},"script"),v(">")]),v("\r\n")])])],-1);H.render=function(s,a,n,l,t,e){const r=c("vdpv_0"),p=c("ComponentExample"),j=c("vdpv_1"),g=c("vdpv_2");return o(),i("div",U,[A,d("div",R,[h(p,{lang:"vue",theme:"atom-one-light"},{code:u((()=>[S])),default:u((()=>[h(r)])),_:1})]),V,E,F,d("div",$,[h(p,{lang:"vue",theme:"atom-one-light"},{code:u((()=>[z])),default:u((()=>[h(j)])),_:1})]),B,G,J,d("div",K,[h(p,{lang:"vue",theme:"atom-one-light"},{code:u((()=>[L])),default:u((()=>[h(g)])),_:1})])])};export{H as default};
