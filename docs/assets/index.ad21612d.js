var s=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,e=Object.prototype.propertyIsEnumerable,c=(a,l,n)=>l in a?s(a,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[l]=n;import{d as p,r as h,o as r,b as i,e as o,y as j,f as m,F as d,c as g,t as u,w as v,h as f,u as y,i as w,v as x,x as b}from"./vendor.c7525fe9.js";var k=p({data:()=>({active:!1})});const V={style:{width:"12em",margin:"0 auto 1em",padding:"0.5em","background-color":"hsl(0, 0%, 95%)"}};k.render=function(s,a,l,n,t,e){const c=h("si-switch");return r(),i(d,null,[o("div",V," modelValue: "+j(s.active),1),m(c,{modelValue:s.active,"onUpdate:modelValue":a[0]||(a[0]=a=>s.active=a)},null,8,["modelValue"]),m(c,{modelValue:s.active,"onUpdate:modelValue":a[1]||(a[1]=a=>s.active=a),"active-value":"active","inactive-value":"inactive"},null,8,["modelValue"])],64)};const _={components:{ImportDemo:k}};_.render=function(s,a,l,n,t,e){const c=h("ImportDemo");return r(),g(c)};var I=p({data:()=>({types:["primary","success","warning","danger","dark","light"],active:!1})});I.render=function(s,a,l,n,t,e){const c=h("si-switch");return r(),i(d,null,[(r(!0),i(d,null,u(s.types,(l=>(r(),g(c,{type:l,modelValue:s.active,"onUpdate:modelValue":a[0]||(a[0]=a=>s.active=a)},null,8,["type","modelValue"])))),256)),m(c,{color:"#4709ce",modelValue:s.active,"onUpdate:modelValue":a[1]||(a[1]=a=>s.active=a)},null,8,["modelValue"])],64)};const D={components:{ImportDemo:I}};D.render=function(s,a,l,n,t,e){const c=h("ImportDemo");return r(),g(c)};var C=p({data:()=>({active:""})});const U=f("Suscribe"),O=f(" Off "),S=f(" On ");C.render=function(s,a,l,n,t,e){const c=h("si-switch");return r(),i(d,null,[m(c,{modelValue:s.active,"onUpdate:modelValue":a[0]||(a[0]=a=>s.active=a)},{default:v((()=>[U])),_:1},8,["modelValue"]),m(c,{modelValue:s.active,"onUpdate:modelValue":a[1]||(a[1]=a=>s.active=a)},{off:v((()=>[O])),on:v((()=>[S])),_:1},8,["modelValue"])],64)};const H={components:{ImportDemo:C}};H.render=function(s,a,l,n,t,e){const c=h("ImportDemo");return r(),g(c)};var A=p({data:()=>({active:!1})});const q=o("i",{class:"bx bxs-volume-mute"},null,-1),R=o("i",{class:"bx bxs-volume-full"},null,-1),P=o("i",{class:"bx bxs-microphone"},null,-1),T=o("i",{class:"bx bx-x"},null,-1),E=o("i",{class:"bx bx-check"},null,-1),L=o("i",{class:"bx bxs-plane-alt"},null,-1),B=f(" Active "),F={key:0,class:"bx bxs-moon"},$={key:1,class:"bx bxs-sun"},z={key:0,class:"bx bxl-instagram-alt"},G={key:1,class:"bx bxl-instagram"};A.render=function(s,a,l,n,t,e){const c=h("si-switch");return r(),i(d,null,[m(c,{modelValue:s.active,"onUpdate:modelValue":a[0]||(a[0]=a=>s.active=a),style:{margin:"0.5em"}},{off:v((()=>[q])),on:v((()=>[R])),_:1},8,["modelValue"]),m(c,{modelValue:s.active,"onUpdate:modelValue":a[1]||(a[1]=a=>s.active=a),style:{margin:"0.5em"},type:"danger"},{default:v((()=>[P])),_:1},8,["modelValue"]),m(c,{modelValue:s.active,"onUpdate:modelValue":a[2]||(a[2]=a=>s.active=a),style:{margin:"0.5em"},type:"success"},{off:v((()=>[T])),on:v((()=>[E])),_:1},8,["modelValue"]),m(c,{modelValue:s.active,"onUpdate:modelValue":a[3]||(a[3]=a=>s.active=a),style:{margin:"0.5em"},type:"warning"},{off:v((()=>[L])),on:v((()=>[B])),_:1},8,["modelValue"]),m(c,{modelValue:s.active,"onUpdate:modelValue":a[4]||(a[4]=a=>s.active=a),style:{margin:"0.5em"},type:"dark"},{circle:v((()=>[s.active?(r(),i("i",$)):(r(),i("i",F))])),_:1},8,["modelValue"]),m(c,{color:"#7d33ff",icon:"",modelValue:s.active,"onUpdate:modelValue":a[5]||(a[5]=a=>s.active=a),style:{margin:"0.5em"}},{circle:v((()=>[s.active?(r(),i("i",z)):(r(),i("i",G))])),_:1},8,["modelValue"])],64)};const J={components:{ImportDemo:A}};J.render=function(s,a,l,n,t,e){const c=h("ImportDemo");return r(),g(c)};var K=p({data:()=>({active:!1})});const M=f(" disabled "),N=f(" toggle ");K.render=function(s,a,l,n,t,e){const c=h("si-switch");return r(),i(d,null,[m(c,{modelValue:s.active,"onUpdate:modelValue":a[0]||(a[0]=a=>s.active=a),disabled:""},{default:v((()=>[M])),_:1},8,["modelValue"]),m(c,{modelValue:s.active,"onUpdate:modelValue":a[1]||(a[1]=a=>s.active=a)},{default:v((()=>[N])),_:1},8,["modelValue"]),m(c,{loading:s.active},null,8,["loading"])],64)};const Q={components:{ImportDemo:K}};Q.render=function(s,a,l,n,t,e){const c=h("ImportDemo");return r(),g(c)};var W=p({data:()=>({active:!1})});W.render=function(s,a,l,n,t,e){const c=h("si-switch");return r(),i(d,null,[m(c,{modelValue:s.active,"onUpdate:modelValue":a[0]||(a[0]=a=>s.active=a),indeterminate:""},null,8,["modelValue"]),m(c,{modelValue:!s.active,indeterminate:""},null,8,["modelValue"]),m(c,{modelValue:s.active,"onUpdate:modelValue":a[1]||(a[1]=a=>s.active=a),indeterminate:"",disabled:""},null,8,["modelValue"])],64)};const X={components:{ImportDemo:W}};X.render=function(s,a,l,n,t,e){const c=h("ImportDemo");return r(),g(c)};var Y=p({data:()=>({types:["primary","success","warning","danger","dark","light"],active:!1})});Y.render=function(s,a,l,n,t,e){const c=h("si-switch");return r(!0),i(d,null,u(s.types,(l=>(r(),g(c,{type:l,modelValue:s.active,"onUpdate:modelValue":a[0]||(a[0]=a=>s.active=a),square:""},null,8,["type","modelValue"])))),256)};const Z={components:{ImportDemo:Y}};Z.render=function(s,a,l,n,t,e){const c=h("ImportDemo");return r(),g(c)};const ss=p({components:{vdpv_0:_,vdpv_1:D,vdpv_2:H,vdpv_3:J,vdpv_4:Q,vdpv_5:X,vdpv_6:Z},setup(s){const p=y(),h=y(),r=y(),i=y(),o=y(),j=y(),m=y(),d=[p,h,r,i,o,j,m],g=w({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0,vdpv_4Height:0,vdpv_5Height:0,vdpv_6Height:0});return u=((s,a)=>{for(var l in a||(a={}))t.call(a,l)&&c(s,l,a[l]);if(n)for(var l of n(a))e.call(a,l)&&c(s,l,a[l]);return s})({toggleCode:s=>{const a="vdpv_"+s;0===g[a+"Height"]?g[a+"Height"]=(d[s].value?d[s].value.offsetHeight:0)||0:g[a+"Height"]=0}},x(g)),a(u,l({vdpv_0Ref:p,vdpv_1Ref:h,vdpv_2Ref:r,vdpv_3Ref:i,vdpv_4Ref:o,vdpv_5Ref:j,vdpv_6Ref:m}));var u}});ss.$vd={matter:{title:"Switch"},toc:[{content:"Switch 开关",anchor:"switch-开关",level:1},{content:"Default",anchor:"default",level:2},{content:"Type & Color",anchor:"type-color",level:2},{content:"Text",anchor:"text",level:2},{content:"Icon",anchor:"icon",level:2},{content:"Disabled & Loading",anchor:"disabled-loading",level:2},{content:"Indeterminate",anchor:"indeterminate",level:2},{content:"Square",anchor:"square",level:2}]};const as=ss,ls={class:"vuedoc component-container"},ns=b('<h1 id="switch-开关" data-source-line="2"><a class="markdownIt-Anchor" href="#switch-开关">#</a> Switch 开关</h1><p data-source-line="4">表示两种相互对立的状态间的切换，多用于触发「开/关」</p><h2 id="default" data-source-line="6"><a class="markdownIt-Anchor" href="#default">#</a> Default</h2><p data-source-line="8">绑定 v-model 到一个 Boolean 类型的变量</p><p data-source-line="10">可以使用 <code>active-value</code> 属性与 <code>inactive-value</code> 属性来设置开关的值</p><pre style="display:none;"></pre>',6),ts={class:"vuedoc-demo"},es=o("pre",{class:"hljs language-vue hljs--atom-one-light"},[o("code",null,[o("span",{class:"xml"},[o("span",{class:"hljs-tag"},[f("<"),o("span",{class:"hljs-name"},"template"),f(">")]),f("\n\t"),o("span",{class:"hljs-tag"},[f("<"),o("span",{class:"hljs-name"},"div"),f(),o("span",{class:"hljs-attr"},"style"),f("="),o("span",{class:"hljs-string"},'"width: 12em; margin: 0 auto 1em; padding: 0.5em; background-color: hsl(0, 0%, 95%)"'),f(">")]),f("\n\t\tmodelValue: {{ active }}\n\t"),o("span",{class:"hljs-tag"},[f("</"),o("span",{class:"hljs-name"},"div"),f(">")]),f("\n\n\t"),o("span",{class:"hljs-tag"},[f("<"),o("span",{class:"hljs-name"},"si-switch"),f(),o("span",{class:"hljs-attr"},"v-model"),f("="),o("span",{class:"hljs-string"},'"active"'),f(">")]),o("span",{class:"hljs-tag"},[f("</"),o("span",{class:"hljs-name"},"si-switch"),f(">")]),f("\n\t"),o("span",{class:"hljs-tag"},[f("<"),o("span",{class:"hljs-name"},"si-switch"),f(),o("span",{class:"hljs-attr"},"v-model"),f("="),o("span",{class:"hljs-string"},'"active"'),f(),o("span",{class:"hljs-attr"},"active-value"),f("="),o("span",{class:"hljs-string"},'"active"'),f(),o("span",{class:"hljs-attr"},"inactive-value"),f("="),o("span",{class:"hljs-string"},'"inactive"'),f(">")]),o("span",{class:"hljs-tag"},[f("</"),o("span",{class:"hljs-name"},"si-switch"),f(">")]),f("\n"),o("span",{class:"hljs-tag"},[f("</"),o("span",{class:"hljs-name"},"template"),f(">")]),f("\n\n"),o("span",{class:"hljs-tag"},[f("<"),o("span",{class:"hljs-name"},"script"),f(),o("span",{class:"hljs-attr"},"lang"),f("="),o("span",{class:"hljs-string"},'"ts"'),f(">")])]),o("span",{class:"typescript"},[f("\n"),o("span",{class:"hljs-keyword"},"import"),f(" { defineComponent } "),o("span",{class:"hljs-keyword"},"from"),f(),o("span",{class:"hljs-string"},"'vue'"),f("\n\n"),o("span",{class:"hljs-keyword"},"export"),f(),o("span",{class:"hljs-keyword"},"default"),f(" defineComponent({\n\t"),o("span",{class:"hljs-function"},[o("span",{class:"hljs-title"},"data"),f("("),o("span",{class:"hljs-params"}),f(")")]),f(" {\n\t\t"),o("span",{class:"hljs-keyword"},"return"),f(" {\n\t\t\t"),o("span",{class:"hljs-attr"},"active"),f(": "),o("span",{class:"hljs-literal"},"false"),f("\n\t\t}\n\t}\n})\n")]),o("span",{class:"xml"},[o("span",{class:"hljs-tag"},[f("</"),o("span",{class:"hljs-name"},"script"),f(">")]),f("\n")])])],-1),cs=b('<h2 id="type-color" data-source-line="16"><a class="markdownIt-Anchor" href="#type-color">#</a> Type &amp; Color</h2><p data-source-line="18">设置 <code>type</code>、<code>color</code> 属性来改变 Switch 的颜色（<code>color</code>属性覆盖<code>type</code>属性）</p><p data-source-line="20"><code>type</code>: primary | warning | success | danger | light | dark</p><p data-source-line="22"><code>color</code>: hsl | rgb | hex</p><pre style="display:none;"></pre>',5),ps={class:"vuedoc-demo"},hs=o("pre",{class:"hljs language-vue hljs--atom-one-light"},[o("code",null,[o("span",{class:"xml"},[o("span",{class:"hljs-tag"},[f("<"),o("span",{class:"hljs-name"},"template"),f(">")]),f("\n\t"),o("span",{class:"hljs-tag"},[f("<"),o("span",{class:"hljs-name"},"si-switch"),f(),o("span",{class:"hljs-attr"},"v-for"),f("="),o("span",{class:"hljs-string"},'"type in types"'),f(),o("span",{class:"hljs-attr"},":type"),f("="),o("span",{class:"hljs-string"},'"type"'),f(),o("span",{class:"hljs-attr"},"v-model"),f("="),o("span",{class:"hljs-string"},'"active"'),f(" />")]),f("\n\t"),o("span",{class:"hljs-tag"},[f("<"),o("span",{class:"hljs-name"},"si-switch"),f(),o("span",{class:"hljs-attr"},"color"),f("="),o("span",{class:"hljs-string"},'"#4709ce"'),f(),o("span",{class:"hljs-attr"},"v-model"),f("="),o("span",{class:"hljs-string"},'"active"'),f(" />")]),f("\n"),o("span",{class:"hljs-tag"},[f("</"),o("span",{class:"hljs-name"},"template"),f(">")]),f("\n\n"),o("span",{class:"hljs-tag"},[f("<"),o("span",{class:"hljs-name"},"script"),f(),o("span",{class:"hljs-attr"},"lang"),f("="),o("span",{class:"hljs-string"},'"ts"'),f(">")])]),o("span",{class:"typescript"},[f("\n"),o("span",{class:"hljs-keyword"},"import"),f(" { defineComponent } "),o("span",{class:"hljs-keyword"},"from"),f(),o("span",{class:"hljs-string"},"'vue'"),f("\n\n"),o("span",{class:"hljs-keyword"},"export"),f(),o("span",{class:"hljs-keyword"},"default"),f(" defineComponent({\n\t"),o("span",{class:"hljs-function"},[o("span",{class:"hljs-title"},"data"),f("("),o("span",{class:"hljs-params"}),f(")")]),f(" {\n\t\t"),o("span",{class:"hljs-keyword"},"return"),f(" {\n\t\t\t"),o("span",{class:"hljs-attr"},"types"),f(": ["),o("span",{class:"hljs-string"},"'primary'"),f(", "),o("span",{class:"hljs-string"},"'success'"),f(", "),o("span",{class:"hljs-string"},"'warning'"),f(", "),o("span",{class:"hljs-string"},"'danger'"),f(", "),o("span",{class:"hljs-string"},"'dark'"),f(", "),o("span",{class:"hljs-string"},"'light'"),f("],\n\t\t\t"),o("span",{class:"hljs-attr"},"active"),f(": "),o("span",{class:"hljs-literal"},"false"),f("\n\t\t}\n\t}\n})\n")]),o("span",{class:"xml"},[o("span",{class:"hljs-tag"},[f("</"),o("span",{class:"hljs-name"},"script"),f(">")]),f("\n")])])],-1),rs=o("h2",{id:"text","data-source-line":"28"},[o("a",{class:"markdownIt-Anchor",href:"#text"},"#"),f(" Text")],-1),is=o("p",{"data-source-line":"30"},[f("可以添加默认插槽，还可以添加 "),o("code",null,"#on"),f("、"),o("code",null,"#off"),f(" 插槽")],-1),os=o("pre",{style:{display:"none"}},null,-1),js={class:"vuedoc-demo"},ms=o("pre",{class:"hljs language-vue hljs--atom-one-light"},[o("code",null,[o("span",{class:"xml"},[o("span",{class:"hljs-tag"},[f("<"),o("span",{class:"hljs-name"},"template"),f(">")]),f("\n\t"),o("span",{class:"hljs-tag"},[f("<"),o("span",{class:"hljs-name"},"si-switch"),f(),o("span",{class:"hljs-attr"},"v-model"),f("="),o("span",{class:"hljs-string"},'"active"'),f(">")]),f("Suscribe"),o("span",{class:"hljs-tag"},[f("</"),o("span",{class:"hljs-name"},"si-switch"),f(">")]),f("\n\t"),o("span",{class:"hljs-tag"},[f("<"),o("span",{class:"hljs-name"},"si-switch"),f(),o("span",{class:"hljs-attr"},"v-model"),f("="),o("span",{class:"hljs-string"},'"active"'),f(">")]),f("\n\t\t"),o("span",{class:"hljs-tag"},[f("<"),o("span",{class:"hljs-name"},"template"),f(" #"),o("span",{class:"hljs-attr"},"off"),f(">")]),f(" Off "),o("span",{class:"hljs-tag"},[f("</"),o("span",{class:"hljs-name"},"template"),f(">")]),f("\n\t\t"),o("span",{class:"hljs-tag"},[f("<"),o("span",{class:"hljs-name"},"template"),f(" #"),o("span",{class:"hljs-attr"},"on"),f(">")]),f(" On "),o("span",{class:"hljs-tag"},[f("</"),o("span",{class:"hljs-name"},"template"),f(">")]),f("\n\t"),o("span",{class:"hljs-tag"},[f("</"),o("span",{class:"hljs-name"},"si-switch"),f(">")]),f("\n"),o("span",{class:"hljs-tag"},[f("</"),o("span",{class:"hljs-name"},"template"),f(">")]),f("\n\n"),o("span",{class:"hljs-tag"},[f("<"),o("span",{class:"hljs-name"},"script"),f(),o("span",{class:"hljs-attr"},"lang"),f("="),o("span",{class:"hljs-string"},'"ts"'),f(">")])]),o("span",{class:"typescript"},[f("\n"),o("span",{class:"hljs-keyword"},"import"),f(" { defineComponent } "),o("span",{class:"hljs-keyword"},"from"),f(),o("span",{class:"hljs-string"},"'vue'"),f("\n\n"),o("span",{class:"hljs-keyword"},"export"),f(),o("span",{class:"hljs-keyword"},"default"),f(" defineComponent({\n\t"),o("span",{class:"hljs-function"},[o("span",{class:"hljs-title"},"data"),f("("),o("span",{class:"hljs-params"}),f(")")]),f(" {\n\t\t"),o("span",{class:"hljs-keyword"},"return"),f(" {\n\t\t\t"),o("span",{class:"hljs-attr"},"active"),f(": "),o("span",{class:"hljs-string"},"''"),f("\n\t\t}\n\t}\n})\n")]),o("span",{class:"xml"},[o("span",{class:"hljs-tag"},[f("</"),o("span",{class:"hljs-name"},"script"),f(">")]),f("\n")])])],-1),ds=o("h2",{id:"icon","data-source-line":"36"},[o("a",{class:"markdownIt-Anchor",href:"#icon"},"#"),f(" Icon")],-1),gs=o("p",{"data-source-line":"38"},[f("添加 "),o("code",null,"icon"),f(" 属性调整 Switch 的样式")],-1),us=o("pre",{style:{display:"none"}},null,-1),vs={class:"vuedoc-demo"},fs=o("pre",{class:"hljs language-vue hljs--atom-one-light"},[o("code",null,[o("span",{class:"xml"},[o("span",{class:"hljs-tag"},[f("<"),o("span",{class:"hljs-name"},"template"),f(">")]),f("\n\t"),o("span",{class:"hljs-tag"},[f("<"),o("span",{class:"hljs-name"},"si-switch"),f(),o("span",{class:"hljs-attr"},"v-model"),f("="),o("span",{class:"hljs-string"},'"active"'),f(),o("span",{class:"hljs-attr"},"style"),f("="),o("span",{class:"hljs-string"},'"margin: 0.5em"'),f(">")]),f("\n\t\t"),o("span",{class:"hljs-tag"},[f("<"),o("span",{class:"hljs-name"},"template"),f(" #"),o("span",{class:"hljs-attr"},"off"),f(">")]),f("\n\t\t\t"),o("span",{class:"hljs-tag"},[f("<"),o("span",{class:"hljs-name"},"i"),f(),o("span",{class:"hljs-attr"},"class"),f("="),o("span",{class:"hljs-string"},'"bx bxs-volume-mute"'),f(">")]),o("span",{class:"hljs-tag"},[f("</"),o("span",{class:"hljs-name"},"i"),f(">")]),f("\n\t\t"),o("span",{class:"hljs-tag"},[f("</"),o("span",{class:"hljs-name"},"template"),f(">")]),f("\n\t\t"),o("span",{class:"hljs-tag"},[f("<"),o("span",{class:"hljs-name"},"template"),f(" #"),o("span",{class:"hljs-attr"},"on"),f(">")]),f("\n\t\t\t"),o("span",{class:"hljs-tag"},[f("<"),o("span",{class:"hljs-name"},"i"),f(),o("span",{class:"hljs-attr"},"class"),f("="),o("span",{class:"hljs-string"},'"bx bxs-volume-full"'),f(">")]),o("span",{class:"hljs-tag"},[f("</"),o("span",{class:"hljs-name"},"i"),f(">")]),f("\n\t\t"),o("span",{class:"hljs-tag"},[f("</"),o("span",{class:"hljs-name"},"template"),f(">")]),f("\n\t"),o("span",{class:"hljs-tag"},[f("</"),o("span",{class:"hljs-name"},"si-switch"),f(">")]),f("\n\t"),o("span",{class:"hljs-tag"},[f("<"),o("span",{class:"hljs-name"},"si-switch"),f(),o("span",{class:"hljs-attr"},"v-model"),f("="),o("span",{class:"hljs-string"},'"active"'),f(),o("span",{class:"hljs-attr"},"style"),f("="),o("span",{class:"hljs-string"},'"margin: 0.5em"'),f(),o("span",{class:"hljs-attr"},"type"),f("="),o("span",{class:"hljs-string"},'"danger"'),f(">")]),f("\n\t\t"),o("span",{class:"hljs-tag"},[f("<"),o("span",{class:"hljs-name"},"i"),f(),o("span",{class:"hljs-attr"},"class"),f("="),o("span",{class:"hljs-string"},'"bx bxs-microphone"'),f(">")]),o("span",{class:"hljs-tag"},[f("</"),o("span",{class:"hljs-name"},"i"),f(">")]),f("\n\t"),o("span",{class:"hljs-tag"},[f("</"),o("span",{class:"hljs-name"},"si-switch"),f(">")]),f("\n\t"),o("span",{class:"hljs-tag"},[f("<"),o("span",{class:"hljs-name"},"si-switch"),f(),o("span",{class:"hljs-attr"},"v-model"),f("="),o("span",{class:"hljs-string"},'"active"'),f(),o("span",{class:"hljs-attr"},"style"),f("="),o("span",{class:"hljs-string"},'"margin: 0.5em"'),f(),o("span",{class:"hljs-attr"},"type"),f("="),o("span",{class:"hljs-string"},'"success"'),f(">")]),f("\n\t\t"),o("span",{class:"hljs-tag"},[f("<"),o("span",{class:"hljs-name"},"template"),f(" #"),o("span",{class:"hljs-attr"},"off"),f(">")]),f("\n\t\t\t"),o("span",{class:"hljs-tag"},[f("<"),o("span",{class:"hljs-name"},"i"),f(),o("span",{class:"hljs-attr"},"class"),f("="),o("span",{class:"hljs-string"},'"bx bx-x"'),f(">")]),o("span",{class:"hljs-tag"},[f("</"),o("span",{class:"hljs-name"},"i"),f(">")]),f("\n\t\t"),o("span",{class:"hljs-tag"},[f("</"),o("span",{class:"hljs-name"},"template"),f(">")]),f("\n\t\t"),o("span",{class:"hljs-tag"},[f("<"),o("span",{class:"hljs-name"},"template"),f(" #"),o("span",{class:"hljs-attr"},"on"),f(">")]),f("\n\t\t\t"),o("span",{class:"hljs-tag"},[f("<"),o("span",{class:"hljs-name"},"i"),f(),o("span",{class:"hljs-attr"},"class"),f("="),o("span",{class:"hljs-string"},'"bx bx-check"'),f(">")]),o("span",{class:"hljs-tag"},[f("</"),o("span",{class:"hljs-name"},"i"),f(">")]),f("\n\t\t"),o("span",{class:"hljs-tag"},[f("</"),o("span",{class:"hljs-name"},"template"),f(">")]),f("\n\t"),o("span",{class:"hljs-tag"},[f("</"),o("span",{class:"hljs-name"},"si-switch"),f(">")]),f("\n\t"),o("span",{class:"hljs-tag"},[f("<"),o("span",{class:"hljs-name"},"si-switch"),f(),o("span",{class:"hljs-attr"},"v-model"),f("="),o("span",{class:"hljs-string"},'"active"'),f(),o("span",{class:"hljs-attr"},"style"),f("="),o("span",{class:"hljs-string"},'"margin: 0.5em"'),f(),o("span",{class:"hljs-attr"},"type"),f("="),o("span",{class:"hljs-string"},'"warning"'),f(">")]),f("\n\t\t"),o("span",{class:"hljs-tag"},[f("<"),o("span",{class:"hljs-name"},"template"),f(" #"),o("span",{class:"hljs-attr"},"off"),f(">")]),f("\n\t\t\t"),o("span",{class:"hljs-tag"},[f("<"),o("span",{class:"hljs-name"},"i"),f(),o("span",{class:"hljs-attr"},"class"),f("="),o("span",{class:"hljs-string"},'"bx bxs-plane-alt"'),f(">")]),o("span",{class:"hljs-tag"},[f("</"),o("span",{class:"hljs-name"},"i"),f(">")]),f("\n\t\t"),o("span",{class:"hljs-tag"},[f("</"),o("span",{class:"hljs-name"},"template"),f(">")]),f("\n\t\t"),o("span",{class:"hljs-tag"},[f("<"),o("span",{class:"hljs-name"},"template"),f(" #"),o("span",{class:"hljs-attr"},"on"),f(">")]),f(" Active "),o("span",{class:"hljs-tag"},[f("</"),o("span",{class:"hljs-name"},"template"),f(">")]),f("\n\t"),o("span",{class:"hljs-tag"},[f("</"),o("span",{class:"hljs-name"},"si-switch"),f(">")]),f("\n\t"),o("span",{class:"hljs-tag"},[f("<"),o("span",{class:"hljs-name"},"si-switch"),f(),o("span",{class:"hljs-attr"},"v-model"),f("="),o("span",{class:"hljs-string"},'"active"'),f(),o("span",{class:"hljs-attr"},"style"),f("="),o("span",{class:"hljs-string"},'"margin: 0.5em"'),f(),o("span",{class:"hljs-attr"},"type"),f("="),o("span",{class:"hljs-string"},'"dark"'),f(">")]),f("\n\t\t"),o("span",{class:"hljs-tag"},[f("<"),o("span",{class:"hljs-name"},"template"),f(" #"),o("span",{class:"hljs-attr"},"circle"),f(">")]),f("\n\t\t\t"),o("span",{class:"hljs-tag"},[f("<"),o("span",{class:"hljs-name"},"i"),f(),o("span",{class:"hljs-attr"},"v-if"),f("="),o("span",{class:"hljs-string"},'"!active"'),f(),o("span",{class:"hljs-attr"},"class"),f("="),o("span",{class:"hljs-string"},'"bx bxs-moon"'),f(">")]),o("span",{class:"hljs-tag"},[f("</"),o("span",{class:"hljs-name"},"i"),f(">")]),f("\n\t\t\t"),o("span",{class:"hljs-tag"},[f("<"),o("span",{class:"hljs-name"},"i"),f(),o("span",{class:"hljs-attr"},"v-else"),f(),o("span",{class:"hljs-attr"},"class"),f("="),o("span",{class:"hljs-string"},'"bx bxs-sun"'),f(">")]),o("span",{class:"hljs-tag"},[f("</"),o("span",{class:"hljs-name"},"i"),f(">")]),f("\n\t\t"),o("span",{class:"hljs-tag"},[f("</"),o("span",{class:"hljs-name"},"template"),f(">")]),f("\n\t"),o("span",{class:"hljs-tag"},[f("</"),o("span",{class:"hljs-name"},"si-switch"),f(">")]),f("\n\t"),o("span",{class:"hljs-tag"},[f("<"),o("span",{class:"hljs-name"},"si-switch"),f(),o("span",{class:"hljs-attr"},"color"),f("="),o("span",{class:"hljs-string"},'"#7d33ff"'),f(),o("span",{class:"hljs-attr"},"icon"),f(),o("span",{class:"hljs-attr"},"v-model"),f("="),o("span",{class:"hljs-string"},'"active"'),f(),o("span",{class:"hljs-attr"},"style"),f("="),o("span",{class:"hljs-string"},'"margin: 0.5em"'),f(">")]),f("\n\t\t"),o("span",{class:"hljs-tag"},[f("<"),o("span",{class:"hljs-name"},"template"),f(" #"),o("span",{class:"hljs-attr"},"circle"),f(">")]),f("\n\t\t\t"),o("span",{class:"hljs-tag"},[f("<"),o("span",{class:"hljs-name"},"i"),f(),o("span",{class:"hljs-attr"},"v-if"),f("="),o("span",{class:"hljs-string"},'"active"'),f(),o("span",{class:"hljs-attr"},"class"),f("="),o("span",{class:"hljs-string"},'"bx bxl-instagram-alt"'),f(">")]),o("span",{class:"hljs-tag"},[f("</"),o("span",{class:"hljs-name"},"i"),f(">")]),f("\n\t\t\t"),o("span",{class:"hljs-tag"},[f("<"),o("span",{class:"hljs-name"},"i"),f(),o("span",{class:"hljs-attr"},"v-else"),f(),o("span",{class:"hljs-attr"},"class"),f("="),o("span",{class:"hljs-string"},'"bx bxl-instagram"'),f(">")]),o("span",{class:"hljs-tag"},[f("</"),o("span",{class:"hljs-name"},"i"),f(">")]),f("\n\t\t"),o("span",{class:"hljs-tag"},[f("</"),o("span",{class:"hljs-name"},"template"),f(">")]),f("\n\t"),o("span",{class:"hljs-tag"},[f("</"),o("span",{class:"hljs-name"},"si-switch"),f(">")]),f("\n"),o("span",{class:"hljs-tag"},[f("</"),o("span",{class:"hljs-name"},"template"),f(">")]),f("\n\n"),o("span",{class:"hljs-tag"},[f("<"),o("span",{class:"hljs-name"},"script"),f(),o("span",{class:"hljs-attr"},"lang"),f("="),o("span",{class:"hljs-string"},'"ts"'),f(">")])]),o("span",{class:"typescript"},[f("\n"),o("span",{class:"hljs-keyword"},"import"),f(" { defineComponent } "),o("span",{class:"hljs-keyword"},"from"),f(),o("span",{class:"hljs-string"},"'vue'"),f("\n\n"),o("span",{class:"hljs-keyword"},"export"),f(),o("span",{class:"hljs-keyword"},"default"),f(" defineComponent({\n\t"),o("span",{class:"hljs-function"},[o("span",{class:"hljs-title"},"data"),f("("),o("span",{class:"hljs-params"}),f(")")]),f(" {\n\t\t"),o("span",{class:"hljs-keyword"},"return"),f(" {\n\t\t\t"),o("span",{class:"hljs-attr"},"active"),f(": "),o("span",{class:"hljs-literal"},"false"),f("\n\t\t}\n\t}\n})\n")]),o("span",{class:"xml"},[o("span",{class:"hljs-tag"},[f("</"),o("span",{class:"hljs-name"},"script"),f(">")]),f("\n")])])],-1),ys=o("h2",{id:"disabled-loading","data-source-line":"44"},[o("a",{class:"markdownIt-Anchor",href:"#disabled-loading"},"#"),f(" Disabled & Loading")],-1),ws=o("p",{"data-source-line":"46"},[f("添加 "),o("code",null,"disabled"),f(" / "),o("code",null,"loading"),f(" 属性来切换 Switch 的状态")],-1),xs=o("pre",{style:{display:"none"}},null,-1),bs={class:"vuedoc-demo"},ks=o("pre",{class:"hljs language-vue hljs--atom-one-light"},[o("code",null,[o("span",{class:"xml"},[o("span",{class:"hljs-tag"},[f("<"),o("span",{class:"hljs-name"},"template"),f(">")]),f("\n\t"),o("span",{class:"hljs-tag"},[f("<"),o("span",{class:"hljs-name"},"si-switch"),f(),o("span",{class:"hljs-attr"},"v-model"),f("="),o("span",{class:"hljs-string"},'"active"'),f(),o("span",{class:"hljs-attr"},"disabled"),f(">")]),f(" disabled "),o("span",{class:"hljs-tag"},[f("</"),o("span",{class:"hljs-name"},"si-switch"),f(">")]),f("\n\t"),o("span",{class:"hljs-tag"},[f("<"),o("span",{class:"hljs-name"},"si-switch"),f(),o("span",{class:"hljs-attr"},"v-model"),f("="),o("span",{class:"hljs-string"},'"active"'),f(">")]),f(" toggle "),o("span",{class:"hljs-tag"},[f("</"),o("span",{class:"hljs-name"},"si-switch"),f(">")]),f("\n\t"),o("span",{class:"hljs-tag"},[f("<"),o("span",{class:"hljs-name"},"si-switch"),f(),o("span",{class:"hljs-attr"},":loading"),f("="),o("span",{class:"hljs-string"},'"active"'),f(" />")]),f("\n"),o("span",{class:"hljs-tag"},[f("</"),o("span",{class:"hljs-name"},"template"),f(">")]),f("\n\n"),o("span",{class:"hljs-tag"},[f("<"),o("span",{class:"hljs-name"},"script"),f(),o("span",{class:"hljs-attr"},"lang"),f("="),o("span",{class:"hljs-string"},'"ts"'),f(">")])]),o("span",{class:"typescript"},[f("\n"),o("span",{class:"hljs-keyword"},"import"),f(" { defineComponent } "),o("span",{class:"hljs-keyword"},"from"),f(),o("span",{class:"hljs-string"},"'vue'"),f("\n\n"),o("span",{class:"hljs-keyword"},"export"),f(),o("span",{class:"hljs-keyword"},"default"),f(" defineComponent({\n\t"),o("span",{class:"hljs-function"},[o("span",{class:"hljs-title"},"data"),f("("),o("span",{class:"hljs-params"}),f(")")]),f(" {\n\t\t"),o("span",{class:"hljs-keyword"},"return"),f(" {\n\t\t\t"),o("span",{class:"hljs-attr"},"active"),f(": "),o("span",{class:"hljs-literal"},"false"),f("\n\t\t}\n\t}\n})\n")]),o("span",{class:"xml"},[o("span",{class:"hljs-tag"},[f("</"),o("span",{class:"hljs-name"},"script"),f(">")]),f("\n")])])],-1),Vs=o("h2",{id:"indeterminate","data-source-line":"52"},[o("a",{class:"markdownIt-Anchor",href:"#indeterminate"},"#"),f(" Indeterminate")],-1),_s=o("p",{"data-source-line":"54"},[f("添加 "),o("code",null,"indeterminate"),f(" 属性改变 Switch 的形态")],-1),Is=o("pre",{style:{display:"none"}},null,-1),Ds={class:"vuedoc-demo"},Cs=o("pre",{class:"hljs language-vue hljs--atom-one-light"},[o("code",null,[o("span",{class:"xml"},[o("span",{class:"hljs-tag"},[f("<"),o("span",{class:"hljs-name"},"template"),f(">")]),f("\n\t"),o("span",{class:"hljs-tag"},[f("<"),o("span",{class:"hljs-name"},"si-switch"),f(),o("span",{class:"hljs-attr"},"v-model"),f("="),o("span",{class:"hljs-string"},'"active"'),f(),o("span",{class:"hljs-attr"},"indeterminate"),f(" />")]),f("\n\t"),o("span",{class:"hljs-tag"},[f("<"),o("span",{class:"hljs-name"},"si-switch"),f(),o("span",{class:"hljs-attr"},":modelValue"),f("="),o("span",{class:"hljs-string"},'"!active"'),f(),o("span",{class:"hljs-attr"},"indeterminate"),f(" />")]),f("\n\t"),o("span",{class:"hljs-tag"},[f("<"),o("span",{class:"hljs-name"},"si-switch"),f(),o("span",{class:"hljs-attr"},"v-model"),f("="),o("span",{class:"hljs-string"},'"active"'),f(),o("span",{class:"hljs-attr"},"indeterminate"),f(),o("span",{class:"hljs-attr"},"disabled"),f(" />")]),f("\n"),o("span",{class:"hljs-tag"},[f("</"),o("span",{class:"hljs-name"},"template"),f(">")]),f("\n\n"),o("span",{class:"hljs-tag"},[f("<"),o("span",{class:"hljs-name"},"script"),f(),o("span",{class:"hljs-attr"},"lang"),f("="),o("span",{class:"hljs-string"},'"ts"'),f(">")])]),o("span",{class:"typescript"},[f("\n"),o("span",{class:"hljs-keyword"},"import"),f(" { defineComponent } "),o("span",{class:"hljs-keyword"},"from"),f(),o("span",{class:"hljs-string"},"'vue'"),f("\n\n"),o("span",{class:"hljs-keyword"},"export"),f(),o("span",{class:"hljs-keyword"},"default"),f(" defineComponent({\n\t"),o("span",{class:"hljs-function"},[o("span",{class:"hljs-title"},"data"),f("("),o("span",{class:"hljs-params"}),f(")")]),f(" {\n\t\t"),o("span",{class:"hljs-keyword"},"return"),f(" {\n\t\t\t"),o("span",{class:"hljs-attr"},"active"),f(": "),o("span",{class:"hljs-literal"},"false"),f("\n\t\t}\n\t}\n})\n")]),o("span",{class:"xml"},[o("span",{class:"hljs-tag"},[f("</"),o("span",{class:"hljs-name"},"script"),f(">")]),f("\n")])])],-1),Us=o("h2",{id:"square","data-source-line":"60"},[o("a",{class:"markdownIt-Anchor",href:"#square"},"#"),f(" Square")],-1),Os=o("p",{"data-source-line":"62"},[f("添加 "),o("code",null,"square"),f(" 属性改变 Switch 的形状")],-1),Ss=o("pre",{style:{display:"none"}},null,-1),Hs={class:"vuedoc-demo"},As=o("pre",{class:"hljs language-vue hljs--atom-one-light"},[o("code",null,[o("span",{class:"xml"},[o("span",{class:"hljs-tag"},[f("<"),o("span",{class:"hljs-name"},"template"),f(">")]),f("\n\t"),o("span",{class:"hljs-tag"},[f("<"),o("span",{class:"hljs-name"},"si-switch"),f(),o("span",{class:"hljs-attr"},"v-for"),f("="),o("span",{class:"hljs-string"},'"type in types"'),f(),o("span",{class:"hljs-attr"},":type"),f("="),o("span",{class:"hljs-string"},'"type"'),f(),o("span",{class:"hljs-attr"},"v-model"),f("="),o("span",{class:"hljs-string"},'"active"'),f(),o("span",{class:"hljs-attr"},"square"),f(" />")]),f("\n"),o("span",{class:"hljs-tag"},[f("</"),o("span",{class:"hljs-name"},"template"),f(">")]),f("\n\n"),o("span",{class:"hljs-tag"},[f("<"),o("span",{class:"hljs-name"},"script"),f(),o("span",{class:"hljs-attr"},"lang"),f("="),o("span",{class:"hljs-string"},'"ts"'),f(">")])]),o("span",{class:"typescript"},[f("\n"),o("span",{class:"hljs-keyword"},"import"),f(" { defineComponent } "),o("span",{class:"hljs-keyword"},"from"),f(),o("span",{class:"hljs-string"},"'vue'"),f("\n\n"),o("span",{class:"hljs-keyword"},"export"),f(),o("span",{class:"hljs-keyword"},"default"),f(" defineComponent({\n\t"),o("span",{class:"hljs-function"},[o("span",{class:"hljs-title"},"data"),f("("),o("span",{class:"hljs-params"}),f(")")]),f(" {\n\t\t"),o("span",{class:"hljs-keyword"},"return"),f(" {\n\t\t\t"),o("span",{class:"hljs-attr"},"types"),f(": ["),o("span",{class:"hljs-string"},"'primary'"),f(", "),o("span",{class:"hljs-string"},"'success'"),f(", "),o("span",{class:"hljs-string"},"'warning'"),f(", "),o("span",{class:"hljs-string"},"'danger'"),f(", "),o("span",{class:"hljs-string"},"'dark'"),f(", "),o("span",{class:"hljs-string"},"'light'"),f("],\n\t\t\t"),o("span",{class:"hljs-attr"},"active"),f(": "),o("span",{class:"hljs-literal"},"false"),f("\n\t\t}\n\t}\n})\n")]),o("span",{class:"xml"},[o("span",{class:"hljs-tag"},[f("</"),o("span",{class:"hljs-name"},"script"),f(">")]),f("\n")])])],-1);as.render=function(s,a,l,n,t,e){const c=h("vdpv_0"),p=h("ComponentExample"),j=h("vdpv_1"),d=h("vdpv_2"),g=h("vdpv_3"),u=h("vdpv_4"),f=h("vdpv_5"),y=h("vdpv_6");return r(),i("div",ls,[ns,o("div",ts,[m(p,{lang:"vue",theme:"atom-one-light"},{code:v((()=>[es])),default:v((()=>[m(c)])),_:1})]),cs,o("div",ps,[m(p,{lang:"vue",theme:"atom-one-light"},{code:v((()=>[hs])),default:v((()=>[m(j)])),_:1})]),rs,is,os,o("div",js,[m(p,{lang:"vue",theme:"atom-one-light"},{code:v((()=>[ms])),default:v((()=>[m(d)])),_:1})]),ds,gs,us,o("div",vs,[m(p,{lang:"vue",theme:"atom-one-light"},{code:v((()=>[fs])),default:v((()=>[m(g)])),_:1})]),ys,ws,xs,o("div",bs,[m(p,{lang:"vue",theme:"atom-one-light"},{code:v((()=>[ks])),default:v((()=>[m(u)])),_:1})]),Vs,_s,Is,o("div",Ds,[m(p,{lang:"vue",theme:"atom-one-light"},{code:v((()=>[Cs])),default:v((()=>[m(f)])),_:1})]),Us,Os,Ss,o("div",Hs,[m(p,{lang:"vue",theme:"atom-one-light"},{code:v((()=>[As])),default:v((()=>[m(y)])),_:1})])])};export{as as default};
