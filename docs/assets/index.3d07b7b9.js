var s=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,e=(a,l,n)=>l in a?s(a,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[l]=n;import{d as p,r,o as h,b as i,t as j,F as o,c as g,w as u,h as m,e as d,f as b,u as v,i as f,v as x,x as y}from"./vendor.c7525fe9.js";var _=p({data:()=>({types:["primary","success","warning","danger","dark","light"],variants:["default","flat","border","relief","text","floating","shadow"]})});const k=m("Button");_.render=function(s,a,l,n,t,c){const e=r("si-button");return h(!0),i(o,null,j(s.variants,(a=>(h(),i("p",{key:a,style:{margin:"1em 0"}},[(h(!0),i(o,null,j(s.types,(s=>(h(),g(e,{type:s,variant:a,key:a},{default:u((()=>[k])),_:2},1032,["type","variant"])))),128))])))),128)};const w={components:{ImportDemo:_}};w.render=function(s,a,l,n,t,c){const e=r("ImportDemo");return h(),g(e)};const q={},I=m("RGB"),D=m("HSL"),H=m("HEX"),z={style:{"margin-top":"1em"}},B=m("RGB"),S=m("HSL"),C=m("HEX");q.render=function(s,a){const l=r("si-button");return h(),i(o,null,[d("p",null,[b(l,{color:"rgb(59,222,200)"},{default:u((()=>[I])),_:1}),b(l,{color:"hsl(151, 71%, 55%)",variant:"flat"},{default:u((()=>[D])),_:1}),b(l,{color:"#ee11ff",variant:"relief"},{default:u((()=>[H])),_:1})]),d("p",z,[b(l,{color:"rgb(59,222,200)",disabled:""},{default:u((()=>[B])),_:1}),b(l,{color:"hsl(151, 71%, 55%)",variant:"flat",disabled:""},{default:u((()=>[S])),_:1}),b(l,{color:"#ee11ff",variant:"relief",disabled:""},{default:u((()=>[C])),_:1})])],64)};const L={components:{ImportDemo:q}};L.render=function(s,a,l,n,t,c){const e=r("ImportDemo");return h(),g(e)};const A={},R=m("Circle"),O=d("i",{class:"bx bx-heart"},null,-1),E=m("Circle"),P={style:{"margin-top":"1em"}},G=m("Square"),X=d("i",{class:"bx bx-qr-scan"},null,-1),U=m("Square"),F={style:{width:"13em",margin:"1em auto 0"}},M=m("Block");A.render=function(s,a){const l=r("si-button");return h(),i(o,null,[d("p",null,[b(l,{type:"success",variant:"flat",circle:""},{default:u((()=>[R])),_:1}),b(l,{type:"danger",variant:"floating",circle:"",icon:""},{default:u((()=>[O])),_:1}),b(l,{type:"success",variant:"flat",circle:""},{default:u((()=>[E])),_:1})]),d("p",P,[b(l,{variant:"flat",type:"dark",square:""},{default:u((()=>[G])),_:1}),b(l,{variant:"flat",square:"",icon:""},{default:u((()=>[X])),_:1}),b(l,{variant:"flat",type:"dark",square:""},{default:u((()=>[U])),_:1})]),d("p",F,[b(l,{block:""},{default:u((()=>[M])),_:1})])],64)};const $={components:{ImportDemo:A}};$.render=function(s,a,l,n,t,c){const e=r("ImportDemo");return h(),g(e)};const J={},K=m("Mini"),N=m("Small"),Q=m("Default"),T=m("Large"),V=m("XLarge");J.render=function(s,a){const l=r("si-button");return h(),i(o,null,[b(l,{variant:"flat",size:"mini",square:""},{default:u((()=>[K])),_:1}),b(l,{variant:"flat",size:"small",square:""},{default:u((()=>[N])),_:1}),b(l,{variant:"flat",square:""},{default:u((()=>[Q])),_:1}),b(l,{variant:"flat",size:"large",square:""},{default:u((()=>[T])),_:1}),b(l,{variant:"flat",size:"xl",square:""},{default:u((()=>[V])),_:1})],64)};const W={components:{ImportDemo:J}};W.render=function(s,a,l,n,t,c){const e=r("ImportDemo");return h(),g(e)};const Y={},Z=m("Loading"),ss=d("i",{class:"bx bxs-phone-call"},null,-1),as=d("i",{class:"bx bxs-phone-call"},null,-1),ls=m("Upload");Y.render=function(s,a){const l=r("si-button");return h(),i(o,null,[b(l,{loading:""},{default:u((()=>[Z])),_:1}),b(l,{loading:"",variant:"flat",type:"success",icon:""},{default:u((()=>[ss])),_:1}),b(l,{upload:"",variant:"flat",type:"success",icon:""},{default:u((()=>[as])),_:1}),b(l,{upload:""},{default:u((()=>[ls])),_:1})],64)};const ns={components:{ImportDemo:Y}};ns.render=function(s,a,l,n,t,c){const e=r("ImportDemo");return h(),g(e)};const ts={},cs=m(" Animate "),es=d("i",{class:"bx bx-home-alt"},null,-1),ps=m(" Love "),rs=d("i",{class:"bx bxs-heart"},null,-1),hs=d("i",{class:"bx bx-like"},null,-1),is=d("i",{class:"bx bxs-like"},null,-1);ts.render=function(s,a){const l=r("si-button");return h(),i(o,null,[b(l,{type:"warning"},{animate:u((()=>[es])),default:u((()=>[cs])),_:1}),b(l,{icon:"",type:"danger",variant:"border","animation-type":"scale"},{animate:u((()=>[rs])),default:u((()=>[ps])),_:1}),b(l,{icon:"",variant:"relief",type:"danger","animation-type":"rotate"},{animate:u((()=>[is])),default:u((()=>[hs])),_:1})],64)};const js={components:{ImportDemo:ts}};js.render=function(s,a,l,n,t,c){const e=r("ImportDemo");return h(),g(e)};const os={},gs=d("i",{class:"bx bx-home-alt"},null,-1),us=m(" Home "),ms=d("i",{class:"bx bxs-phone-call"},null,-1),ds=m(" Contact "),bs=d("i",{class:"bx bxs-cart-alt"},null,-1),vs=m(" Products "),fs=d("i",{class:"bx bxs-envelope"},null,-1),xs=m(" Send "),ys={style:{"margin-top":"1em"}},_s=d("i",{class:"bx bx-play"},null,-1),ks=d("i",{class:"bx bx-pause"},null,-1),ws=d("i",{class:"bx bx-fast-forward"},null,-1),qs=d("i",{class:"bx bx-shuffle"},null,-1),Is=d("span",{style:{margin:"0 1em"}},null,-1),Ds=d("i",{class:"bx bxs-pencil"},null,-1),Hs=m(" Edit "),zs=d("i",{class:"bx bx-font-color"},null,-1),Bs=d("i",{class:"bx bx-align-middle"},null,-1),Ss=d("i",{class:"bx bx-bold"},null,-1),Cs=d("i",{class:"bx bx-font-size"},null,-1),Ls=m(" Font size ");os.render=function(s,a){const l=r("si-button"),n=r("si-button-group");return h(),i(o,null,[d("p",null,[b(n,null,{default:u((()=>[b(l,{variant:"relief"},{default:u((()=>[gs,us])),_:1}),b(l,{variant:"relief"},{default:u((()=>[ms,ds])),_:1}),b(l,{variant:"relief",loading:""},{default:u((()=>[bs,vs])),_:1}),b(l,{variant:"relief",upload:""},{default:u((()=>[fs,xs])),_:1})])),_:1})]),d("p",ys,[b(n,null,{default:u((()=>[b(l,{variant:"flat",icon:""},{default:u((()=>[_s])),_:1}),b(l,{variant:"flat",icon:""},{default:u((()=>[ks])),_:1}),b(l,{variant:"flat",icon:""},{default:u((()=>[ws])),_:1}),b(l,{variant:"flat",icon:""},{default:u((()=>[qs])),_:1})])),_:1}),Is,b(n,null,{default:u((()=>[b(l,{variant:"border",type:"dark"},{default:u((()=>[Ds,Hs])),_:1}),b(l,{variant:"border",type:"dark"},{default:u((()=>[zs])),_:1}),b(l,{variant:"border",type:"dark"},{default:u((()=>[Bs])),_:1}),b(l,{variant:"border",type:"dark"},{default:u((()=>[Ss])),_:1}),b(l,{variant:"border",type:"dark"},{default:u((()=>[Cs,Ls])),_:1})])),_:1})])],64)};const As={components:{ImportDemo:os}};As.render=function(s,a,l,n,t,c){const e=r("ImportDemo");return h(),g(e)};const Rs=p({components:{vdpv_0:w,vdpv_1:L,vdpv_2:$,vdpv_3:W,vdpv_4:ns,vdpv_5:js,vdpv_6:As},setup(s){const p=v(),r=v(),h=v(),i=v(),j=v(),o=v(),g=v(),u=[p,r,h,i,j,o,g],m=f({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0,vdpv_4Height:0,vdpv_5Height:0,vdpv_6Height:0});return d=((s,a)=>{for(var l in a||(a={}))t.call(a,l)&&e(s,l,a[l]);if(n)for(var l of n(a))c.call(a,l)&&e(s,l,a[l]);return s})({toggleCode:s=>{const a="vdpv_"+s;0===m[a+"Height"]?m[a+"Height"]=(u[s].value?u[s].value.offsetHeight:0)||0:m[a+"Height"]=0}},x(m)),a(d,l({vdpv_0Ref:p,vdpv_1Ref:r,vdpv_2Ref:h,vdpv_3Ref:i,vdpv_4Ref:j,vdpv_5Ref:o,vdpv_6Ref:g}));var d}});Rs.$vd={matter:{title:"Button"},toc:[{content:"Button 按钮",anchor:"button-按钮",level:1},{content:"Default",anchor:"default",level:2},{content:"Color & Disabled",anchor:"color-disabled",level:2},{content:"Circle & Square & Icon & Block",anchor:"circle-square-icon-block",level:2},{content:"Size",anchor:"size",level:2},{content:"Loading & Upload",anchor:"loading-upload",level:2},{content:"Animate",anchor:"animate",level:2},{content:"Group",anchor:"group",level:2}]};const Os=Rs,Es={class:"vuedoc component-container"},Ps=y('<h1 id="button-按钮" data-source-line="2"><a class="markdownIt-Anchor" href="#button-按钮">#</a> Button 按钮</h1><p data-source-line="4">常用的操作按钮</p><h2 id="default" data-source-line="6"><a class="markdownIt-Anchor" href="#default">#</a> Default</h2><p data-source-line="8">设置<code>type</code>属性来改变 Button 的颜色，<code>variant</code>属性来使用变体</p><p data-source-line="10"><code>type</code>: primary | warning | success | danger | light | dark</p><p data-source-line="12"><code>variant</code>: default | flat | border | relief | text | floating | shadow</p><pre style="display:none;"></pre>',7),Gs={class:"vuedoc-demo"},Xs=d("pre",{class:"hljs language-vue hljs--atom-one-light"},[d("code",null,[d("span",{class:"xml"},[d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"template"),m(">")]),m("\n\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"p"),m(),d("span",{class:"hljs-attr"},"v-for"),m("="),d("span",{class:"hljs-string"},'"variant in variants"'),m(),d("span",{class:"hljs-attr"},":key"),m("="),d("span",{class:"hljs-string"},'"variant"'),m(),d("span",{class:"hljs-attr"},"style"),m("="),d("span",{class:"hljs-string"},'"margin: 1em 0"'),m(">")]),m("\n\t\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"si-button"),m(),d("span",{class:"hljs-attr"},"v-for"),m("="),d("span",{class:"hljs-string"},'"type in types"'),m(),d("span",{class:"hljs-attr"},":type"),m("="),d("span",{class:"hljs-string"},'"type"'),m(),d("span",{class:"hljs-attr"},":variant"),m("="),d("span",{class:"hljs-string"},'"variant"'),m(),d("span",{class:"hljs-attr"},":key"),m("="),d("span",{class:"hljs-string"},'"variant"'),m(">")]),m("Button"),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"si-button"),m(">")]),m("\n\t"),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"p"),m(">")]),m("\n"),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"template"),m(">")]),m("\n\n"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"script"),m(),d("span",{class:"hljs-attr"},"lang"),m("="),d("span",{class:"hljs-string"},'"ts"'),m(">")])]),d("span",{class:"typescript"},[m("\n"),d("span",{class:"hljs-keyword"},"import"),m(" { defineComponent } "),d("span",{class:"hljs-keyword"},"from"),m(),d("span",{class:"hljs-string"},"'vue'"),m("\n\n"),d("span",{class:"hljs-keyword"},"export"),m(),d("span",{class:"hljs-keyword"},"default"),m(" defineComponent({\n\t"),d("span",{class:"hljs-function"},[d("span",{class:"hljs-title"},"data"),m("("),d("span",{class:"hljs-params"}),m(")")]),m(" {\n\t\t"),d("span",{class:"hljs-keyword"},"return"),m(" {\n\t\t\t"),d("span",{class:"hljs-attr"},"types"),m(": ["),d("span",{class:"hljs-string"},"'primary'"),m(", "),d("span",{class:"hljs-string"},"'success'"),m(", "),d("span",{class:"hljs-string"},"'warning'"),m(", "),d("span",{class:"hljs-string"},"'danger'"),m(", "),d("span",{class:"hljs-string"},"'dark'"),m(", "),d("span",{class:"hljs-string"},"'light'"),m("],\n\t\t\t"),d("span",{class:"hljs-attr"},"variants"),m(": ["),d("span",{class:"hljs-string"},"'default'"),m(", "),d("span",{class:"hljs-string"},"'flat'"),m(", "),d("span",{class:"hljs-string"},"'border'"),m(", "),d("span",{class:"hljs-string"},"'relief'"),m(", "),d("span",{class:"hljs-string"},"'text'"),m(", "),d("span",{class:"hljs-string"},"'floating'"),m(", "),d("span",{class:"hljs-string"},"'shadow'"),m("]\n\t\t}\n\t}\n})\n")]),d("span",{class:"xml"},[d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"script"),m(">")]),m("\n")])])],-1),Us=y('<h2 id="color-disabled" data-source-line="18"><a class="markdownIt-Anchor" href="#color-disabled">#</a> Color &amp; Disabled</h2><p data-source-line="20">设置 <code>color</code> 属性自定义 Button 的颜色（覆盖<code>type</code>颜色）</p><p data-source-line="22"><code>color</code>: hsl | rgb | hex</p><pre style="display:none;"></pre>',4),Fs={class:"vuedoc-demo"},Ms=d("pre",{class:"hljs language-vue hljs--atom-one-light"},[d("code",null,[d("span",{class:"xml"},[d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"template"),m(">")]),m("\n\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"p"),m(">")]),m("\n\t\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"si-button"),m(),d("span",{class:"hljs-attr"},"color"),m("="),d("span",{class:"hljs-string"},'"rgb(59,222,200)"'),m(">")]),m("RGB"),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"si-button"),m(">")]),m("\n\t\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"si-button"),m(),d("span",{class:"hljs-attr"},"color"),m("="),d("span",{class:"hljs-string"},'"hsl(151, 71%, 55%)"'),m(),d("span",{class:"hljs-attr"},"variant"),m("="),d("span",{class:"hljs-string"},'"flat"'),m(">")]),m("HSL"),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"si-button"),m(">")]),m("\n\t\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"si-button"),m(),d("span",{class:"hljs-attr"},"color"),m("="),d("span",{class:"hljs-string"},'"#ee11ff"'),m(),d("span",{class:"hljs-attr"},"variant"),m("="),d("span",{class:"hljs-string"},'"relief"'),m(">")]),m("HEX"),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"si-button"),m(">")]),m("\n\t"),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"p"),m(">")]),m("\n\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"p"),m(),d("span",{class:"hljs-attr"},"style"),m("="),d("span",{class:"hljs-string"},'"margin-top: 1em"'),m(">")]),m("\n\t\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"si-button"),m(),d("span",{class:"hljs-attr"},"color"),m("="),d("span",{class:"hljs-string"},'"rgb(59,222,200)"'),m(),d("span",{class:"hljs-attr"},"disabled"),m(">")]),m("RGB"),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"si-button"),m(">")]),m("\n\t\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"si-button"),m(),d("span",{class:"hljs-attr"},"color"),m("="),d("span",{class:"hljs-string"},'"hsl(151, 71%, 55%)"'),m(),d("span",{class:"hljs-attr"},"variant"),m("="),d("span",{class:"hljs-string"},'"flat"'),m(),d("span",{class:"hljs-attr"},"disabled"),m(">")]),m("HSL"),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"si-button"),m(">")]),m("\n\t\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"si-button"),m(),d("span",{class:"hljs-attr"},"color"),m("="),d("span",{class:"hljs-string"},'"#ee11ff"'),m(),d("span",{class:"hljs-attr"},"variant"),m("="),d("span",{class:"hljs-string"},'"relief"'),m(),d("span",{class:"hljs-attr"},"disabled"),m(">")]),m("HEX"),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"si-button"),m(">")]),m("\n\t"),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"p"),m(">")]),m("\n"),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"template"),m(">")]),m("\n")])])],-1),$s=y('<h2 id="circle-square-icon-block" data-source-line="28"><a class="markdownIt-Anchor" href="#circle-square-icon-block">#</a> Circle &amp; Square &amp; Icon &amp; Block</h2><p data-source-line="30">添加 <code>circle</code> / <code>square</code> 属性来改变形状</p><p data-source-line="32">添加 <code>icon</code> 、<code>block</code> 属性调整样式</p><pre style="display:none;"></pre>',4),Js={class:"vuedoc-demo"},Ks=d("pre",{class:"hljs language-vue hljs--atom-one-light"},[d("code",null,[d("span",{class:"xml"},[d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"template"),m(">")]),m("\n\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"p"),m(">")]),m("\n\t\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"si-button"),m(),d("span",{class:"hljs-attr"},"type"),m("="),d("span",{class:"hljs-string"},'"success"'),m(),d("span",{class:"hljs-attr"},"variant"),m("="),d("span",{class:"hljs-string"},'"flat"'),m(),d("span",{class:"hljs-attr"},"circle"),m(">")]),m("Circle"),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"si-button"),m(">")]),m("\n\t\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"si-button"),m(),d("span",{class:"hljs-attr"},"type"),m("="),d("span",{class:"hljs-string"},'"danger"'),m(),d("span",{class:"hljs-attr"},"variant"),m("="),d("span",{class:"hljs-string"},'"floating"'),m(),d("span",{class:"hljs-attr"},"circle"),m(),d("span",{class:"hljs-attr"},"icon"),m(">")]),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"i"),m(),d("span",{class:"hljs-attr"},"class"),m("="),d("span",{class:"hljs-string"},'"bx bx-heart"'),m(">")]),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"i"),m(">")]),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"si-button"),m(">")]),m("\n\t\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"si-button"),m(),d("span",{class:"hljs-attr"},"type"),m("="),d("span",{class:"hljs-string"},'"success"'),m(),d("span",{class:"hljs-attr"},"variant"),m("="),d("span",{class:"hljs-string"},'"flat"'),m(),d("span",{class:"hljs-attr"},"circle"),m(">")]),m("Circle"),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"si-button"),m(">")]),m("\n\t"),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"p"),m(">")]),m("\n\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"p"),m(),d("span",{class:"hljs-attr"},"style"),m("="),d("span",{class:"hljs-string"},'"margin-top: 1em"'),m(">")]),m("\n\t\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"si-button"),m(),d("span",{class:"hljs-attr"},"variant"),m("="),d("span",{class:"hljs-string"},'"flat"'),m(),d("span",{class:"hljs-attr"},"type"),m("="),d("span",{class:"hljs-string"},'"dark"'),m(),d("span",{class:"hljs-attr"},"square"),m(">")]),m("Square"),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"si-button"),m(">")]),m("\n\t\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"si-button"),m(),d("span",{class:"hljs-attr"},"variant"),m("="),d("span",{class:"hljs-string"},'"flat"'),m(),d("span",{class:"hljs-attr"},"square"),m(),d("span",{class:"hljs-attr"},"icon"),m(">")]),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"i"),m(),d("span",{class:"hljs-attr"},"class"),m("="),d("span",{class:"hljs-string"},'"bx bx-qr-scan"'),m(">")]),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"i"),m(">")]),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"si-button"),m(">")]),m("\n\t\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"si-button"),m(),d("span",{class:"hljs-attr"},"variant"),m("="),d("span",{class:"hljs-string"},'"flat"'),m(),d("span",{class:"hljs-attr"},"type"),m("="),d("span",{class:"hljs-string"},'"dark"'),m(),d("span",{class:"hljs-attr"},"square"),m(">")]),m("Square"),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"si-button"),m(">")]),m("\n\t"),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"p"),m(">")]),m("\n\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"p"),m(),d("span",{class:"hljs-attr"},"style"),m("="),d("span",{class:"hljs-string"},'"width: 13em; margin: 1em auto 0"'),m(">")]),m("\n\t\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"si-button"),m(),d("span",{class:"hljs-attr"},"block"),m(">")]),m("Block"),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"si-button"),m(">")]),m("\n\t"),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"p"),m(">")]),m("\n"),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"template"),m(">")]),m("\n")])])],-1),Ns=y('<h2 id="size" data-source-line="38"><a class="markdownIt-Anchor" href="#size">#</a> Size</h2><p data-source-line="40">设置 <code>size</code> 属性来调整 Button 尺寸</p><p data-source-line="42"><code>size</code>: mini | small | default | large | xlarge</p><pre style="display:none;"></pre>',4),Qs={class:"vuedoc-demo"},Ts=d("pre",{class:"hljs language-vue hljs--atom-one-light"},[d("code",null,[d("span",{class:"xml"},[d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"template"),m(">")]),m("\n\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"si-button"),m(),d("span",{class:"hljs-attr"},"variant"),m("="),d("span",{class:"hljs-string"},'"flat"'),m(),d("span",{class:"hljs-attr"},"size"),m("="),d("span",{class:"hljs-string"},'"mini"'),m(),d("span",{class:"hljs-attr"},"square"),m(">")]),m("Mini"),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"si-button"),m(">")]),m("\n\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"si-button"),m(),d("span",{class:"hljs-attr"},"variant"),m("="),d("span",{class:"hljs-string"},'"flat"'),m(),d("span",{class:"hljs-attr"},"size"),m("="),d("span",{class:"hljs-string"},'"small"'),m(),d("span",{class:"hljs-attr"},"square"),m(">")]),m("Small"),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"si-button"),m(">")]),m("\n\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"si-button"),m(),d("span",{class:"hljs-attr"},"variant"),m("="),d("span",{class:"hljs-string"},'"flat"'),m(),d("span",{class:"hljs-attr"},"square"),m(">")]),m("Default"),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"si-button"),m(">")]),m("\n\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"si-button"),m(),d("span",{class:"hljs-attr"},"variant"),m("="),d("span",{class:"hljs-string"},'"flat"'),m(),d("span",{class:"hljs-attr"},"size"),m("="),d("span",{class:"hljs-string"},'"large"'),m(),d("span",{class:"hljs-attr"},"square"),m(">")]),m("Large"),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"si-button"),m(">")]),m("\n\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"si-button"),m(),d("span",{class:"hljs-attr"},"variant"),m("="),d("span",{class:"hljs-string"},'"flat"'),m(),d("span",{class:"hljs-attr"},"size"),m("="),d("span",{class:"hljs-string"},'"xl"'),m(),d("span",{class:"hljs-attr"},"square"),m(">")]),m("XLarge"),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"si-button"),m(">")]),m("\n"),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"template"),m(">")]),m("\n")])])],-1),Vs=d("h2",{id:"loading-upload","data-source-line":"48"},[d("a",{class:"markdownIt-Anchor",href:"#loading-upload"},"#"),m(" Loading & Upload")],-1),Ws=d("p",{"data-source-line":"50"},[m("添加 "),d("code",null,"loading"),m(" / "),d("code",null,"upload"),m(" 属性来切换 Button 状态")],-1),Ys=d("pre",{style:{display:"none"}},null,-1),Zs={class:"vuedoc-demo"},sa=d("pre",{class:"hljs language-vue hljs--atom-one-light"},[d("code",null,[d("span",{class:"xml"},[d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"template"),m(">")]),m("\n\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"si-button"),m(),d("span",{class:"hljs-attr"},"loading"),m(">")]),m("Loading"),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"si-button"),m(">")]),m("\n\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"si-button"),m(),d("span",{class:"hljs-attr"},"loading"),m(),d("span",{class:"hljs-attr"},"variant"),m("="),d("span",{class:"hljs-string"},'"flat"'),m(),d("span",{class:"hljs-attr"},"type"),m("="),d("span",{class:"hljs-string"},'"success"'),m(),d("span",{class:"hljs-attr"},"icon"),m(">")]),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"i"),m(),d("span",{class:"hljs-attr"},"class"),m("="),d("span",{class:"hljs-string"},'"bx bxs-phone-call"'),m(">")]),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"i"),m(">")]),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"si-button"),m(">")]),m("\n\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"si-button"),m(),d("span",{class:"hljs-attr"},"upload"),m(),d("span",{class:"hljs-attr"},"variant"),m("="),d("span",{class:"hljs-string"},'"flat"'),m(),d("span",{class:"hljs-attr"},"type"),m("="),d("span",{class:"hljs-string"},'"success"'),m(),d("span",{class:"hljs-attr"},"icon"),m(">")]),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"i"),m(),d("span",{class:"hljs-attr"},"class"),m("="),d("span",{class:"hljs-string"},'"bx bxs-phone-call"'),m(">")]),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"i"),m(">")]),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"si-button"),m(">")]),m("\n\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"si-button"),m(),d("span",{class:"hljs-attr"},"upload"),m(">")]),m("Upload"),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"si-button"),m(">")]),m("\n"),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"template"),m(">")]),m("\n")])])],-1),aa=y('<h2 id="animate" data-source-line="56"><a class="markdownIt-Anchor" href="#animate">#</a> Animate</h2><p data-source-line="58">添加 <code>#animate</code> 插槽开启动画，设置 <code>animation-type</code> 属性更换动画样式</p><p data-source-line="60"><code>animation-type</code>: vertical | scale | rotate</p><pre style="display:none;"></pre>',4),la={class:"vuedoc-demo"},na=d("pre",{class:"hljs language-vue hljs--atom-one-light"},[d("code",null,[d("span",{class:"xml"},[d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"template"),m(">")]),m("\n\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"si-button"),m(),d("span",{class:"hljs-attr"},"type"),m("="),d("span",{class:"hljs-string"},'"warning"'),m(">")]),m("\n\t\tAnimate\n\t\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"template"),m(" #"),d("span",{class:"hljs-attr"},"animate"),m(">")]),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"i"),m(),d("span",{class:"hljs-attr"},"class"),m("="),d("span",{class:"hljs-string"},'"bx bx-home-alt"'),m(">")]),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"i"),m(">")]),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"template"),m(">")]),m("\n\t"),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"si-button"),m(">")]),m("\n\n\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"si-button"),m(),d("span",{class:"hljs-attr"},"icon"),m(),d("span",{class:"hljs-attr"},"type"),m("="),d("span",{class:"hljs-string"},'"danger"'),m(),d("span",{class:"hljs-attr"},"variant"),m("="),d("span",{class:"hljs-string"},'"border"'),m(),d("span",{class:"hljs-attr"},"animation-type"),m("="),d("span",{class:"hljs-string"},'"scale"'),m(">")]),m("\n\t\tLove\n\t\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"template"),m(" #"),d("span",{class:"hljs-attr"},"animate"),m(">")]),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"i"),m(),d("span",{class:"hljs-attr"},"class"),m("="),d("span",{class:"hljs-string"},'"bx bxs-heart"'),m(">")]),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"i"),m(">")]),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"template"),m(">")]),m("\n\t"),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"si-button"),m(">")]),m("\n\n\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"si-button"),m(),d("span",{class:"hljs-attr"},"icon"),m(),d("span",{class:"hljs-attr"},"variant"),m("="),d("span",{class:"hljs-string"},'"relief"'),m(),d("span",{class:"hljs-attr"},"type"),m("="),d("span",{class:"hljs-string"},'"danger"'),m(),d("span",{class:"hljs-attr"},"animation-type"),m("="),d("span",{class:"hljs-string"},'"rotate"'),m(">")]),m("\n\t\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"i"),m(),d("span",{class:"hljs-attr"},"class"),m("="),d("span",{class:"hljs-string"},'"bx bx-like"'),m(">")]),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"i"),m(">")]),m("\n\t\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"template"),m(" #"),d("span",{class:"hljs-attr"},"animate"),m(">")]),m("\n\t\t\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"i"),m(),d("span",{class:"hljs-attr"},"class"),m("="),d("span",{class:"hljs-string"},'"bx bxs-like"'),m(">")]),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"i"),m(">")]),m("\n\t\t"),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"template"),m(">")]),m("\n\t"),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"si-button"),m(">")]),m("\n"),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"template"),m(">")]),m("\n")])])],-1),ta=d("h2",{id:"group","data-source-line":"66"},[d("a",{class:"markdownIt-Anchor",href:"#group"},"#"),m(" Group")],-1),ca=d("pre",{style:{display:"none"}},null,-1),ea={class:"vuedoc-demo"},pa=d("pre",{class:"hljs language-vue hljs--atom-one-light"},[d("code",null,[d("span",{class:"xml"},[d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"template"),m(">")]),m("\n\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"p"),m(">")]),m("\n\t\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"si-button-group"),m(">")]),m("\n\t\t\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"si-button"),m(),d("span",{class:"hljs-attr"},"variant"),m("="),d("span",{class:"hljs-string"},'"relief"'),m(">")]),m(),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"i"),m(),d("span",{class:"hljs-attr"},"class"),m("="),d("span",{class:"hljs-string"},'"bx bx-home-alt"'),m(">")]),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"i"),m(">")]),m(" Home "),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"si-button"),m(">")]),m("\n\t\t\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"si-button"),m(),d("span",{class:"hljs-attr"},"variant"),m("="),d("span",{class:"hljs-string"},'"relief"'),m(">")]),m(),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"i"),m(),d("span",{class:"hljs-attr"},"class"),m("="),d("span",{class:"hljs-string"},'"bx bxs-phone-call"'),m(">")]),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"i"),m(">")]),m(" Contact "),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"si-button"),m(">")]),m("\n\t\t\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"si-button"),m(),d("span",{class:"hljs-attr"},"variant"),m("="),d("span",{class:"hljs-string"},'"relief"'),m(),d("span",{class:"hljs-attr"},"loading"),m(">")]),m(),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"i"),m(),d("span",{class:"hljs-attr"},"class"),m("="),d("span",{class:"hljs-string"},'"bx bxs-cart-alt"'),m(">")]),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"i"),m(">")]),m(" Products "),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"si-button"),m(">")]),m("\n\t\t\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"si-button"),m(),d("span",{class:"hljs-attr"},"variant"),m("="),d("span",{class:"hljs-string"},'"relief"'),m(),d("span",{class:"hljs-attr"},"upload"),m(">")]),m(),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"i"),m(),d("span",{class:"hljs-attr"},"class"),m("="),d("span",{class:"hljs-string"},'"bx bxs-envelope"'),m(">")]),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"i"),m(">")]),m(" Send "),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"si-button"),m(">")]),m("\n\t\t"),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"si-button-group"),m(">")]),m("\n\t"),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"p"),m(">")]),m("\n\n\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"p"),m(),d("span",{class:"hljs-attr"},"style"),m("="),d("span",{class:"hljs-string"},'"margin-top: 1em"'),m(">")]),m("\n\t\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"si-button-group"),m(">")]),m("\n\t\t\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"si-button"),m(),d("span",{class:"hljs-attr"},"variant"),m("="),d("span",{class:"hljs-string"},'"flat"'),m(),d("span",{class:"hljs-attr"},"icon"),m(">")]),m("\n\t\t\t\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"i"),m(),d("span",{class:"hljs-attr"},"class"),m("="),d("span",{class:"hljs-string"},'"bx bx-play"'),m(">")]),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"i"),m(">")]),m("\n\t\t\t"),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"si-button"),m(">")]),m("\n\t\t\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"si-button"),m(),d("span",{class:"hljs-attr"},"variant"),m("="),d("span",{class:"hljs-string"},'"flat"'),m(),d("span",{class:"hljs-attr"},"icon"),m(">")]),m("\n\t\t\t\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"i"),m(),d("span",{class:"hljs-attr"},"class"),m("="),d("span",{class:"hljs-string"},'"bx bx-pause"'),m(">")]),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"i"),m(">")]),m("\n\t\t\t"),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"si-button"),m(">")]),m("\n\t\t\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"si-button"),m(),d("span",{class:"hljs-attr"},"variant"),m("="),d("span",{class:"hljs-string"},'"flat"'),m(),d("span",{class:"hljs-attr"},"icon"),m(">")]),m("\n\t\t\t\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"i"),m(),d("span",{class:"hljs-attr"},"class"),m("="),d("span",{class:"hljs-string"},'"bx bx-fast-forward"'),m(">")]),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"i"),m(">")]),m("\n\t\t\t"),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"si-button"),m(">")]),m("\n\t\t\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"si-button"),m(),d("span",{class:"hljs-attr"},"variant"),m("="),d("span",{class:"hljs-string"},'"flat"'),m(),d("span",{class:"hljs-attr"},"icon"),m(">")]),m("\n\t\t\t\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"i"),m(),d("span",{class:"hljs-attr"},"class"),m("="),d("span",{class:"hljs-string"},'"bx bx-shuffle"'),m(">")]),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"i"),m(">")]),m("\n\t\t\t"),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"si-button"),m(">")]),m("\n\t\t"),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"si-button-group"),m(">")]),m("\n\n\t\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"span"),m(),d("span",{class:"hljs-attr"},"style"),m("="),d("span",{class:"hljs-string"},'"margin: 0 1em"'),m(" />")]),m("\n\n\t\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"si-button-group"),m(">")]),m("\n\t\t\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"si-button"),m(),d("span",{class:"hljs-attr"},"variant"),m("="),d("span",{class:"hljs-string"},'"border"'),m(),d("span",{class:"hljs-attr"},"type"),m("="),d("span",{class:"hljs-string"},'"dark"'),m(">")]),m("\n\t\t\t\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"i"),m(),d("span",{class:"hljs-attr"},"class"),m("="),d("span",{class:"hljs-string"},'"bx bxs-pencil"'),m(">")]),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"i"),m(">")]),m("\n\t\t\t\tEdit\n\t\t\t"),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"si-button"),m(">")]),m("\n\t\t\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"si-button"),m(),d("span",{class:"hljs-attr"},"variant"),m("="),d("span",{class:"hljs-string"},'"border"'),m(),d("span",{class:"hljs-attr"},"type"),m("="),d("span",{class:"hljs-string"},'"dark"'),m(">")]),m("\n\t\t\t\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"i"),m(),d("span",{class:"hljs-attr"},"class"),m("="),d("span",{class:"hljs-string"},'"bx bx-font-color"'),m(">")]),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"i"),m(">")]),m("\n\t\t\t"),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"si-button"),m(">")]),m("\n\t\t\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"si-button"),m(),d("span",{class:"hljs-attr"},"variant"),m("="),d("span",{class:"hljs-string"},'"border"'),m(),d("span",{class:"hljs-attr"},"type"),m("="),d("span",{class:"hljs-string"},'"dark"'),m(">")]),m("\n\t\t\t\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"i"),m(),d("span",{class:"hljs-attr"},"class"),m("="),d("span",{class:"hljs-string"},'"bx bx-align-middle"'),m(">")]),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"i"),m(">")]),m("\n\t\t\t"),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"si-button"),m(">")]),m("\n\t\t\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"si-button"),m(),d("span",{class:"hljs-attr"},"variant"),m("="),d("span",{class:"hljs-string"},'"border"'),m(),d("span",{class:"hljs-attr"},"type"),m("="),d("span",{class:"hljs-string"},'"dark"'),m(">")]),m("\n\t\t\t\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"i"),m(),d("span",{class:"hljs-attr"},"class"),m("="),d("span",{class:"hljs-string"},'"bx bx-bold"'),m(">")]),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"i"),m(">")]),m("\n\t\t\t"),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"si-button"),m(">")]),m("\n\t\t\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"si-button"),m(),d("span",{class:"hljs-attr"},"variant"),m("="),d("span",{class:"hljs-string"},'"border"'),m(),d("span",{class:"hljs-attr"},"type"),m("="),d("span",{class:"hljs-string"},'"dark"'),m(">")]),m("\n\t\t\t\t"),d("span",{class:"hljs-tag"},[m("<"),d("span",{class:"hljs-name"},"i"),m(),d("span",{class:"hljs-attr"},"class"),m("="),d("span",{class:"hljs-string"},'"bx bx-font-size"'),m(">")]),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"i"),m(">")]),m("\n\t\t\t\tFont size\n\t\t\t"),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"si-button"),m(">")]),m("\n\t\t"),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"si-button-group"),m(">")]),m("\n\t"),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"p"),m(">")]),m("\n"),d("span",{class:"hljs-tag"},[m("</"),d("span",{class:"hljs-name"},"template"),m(">")]),m("\n")])])],-1);Os.render=function(s,a,l,n,t,c){const e=r("vdpv_0"),p=r("ComponentExample"),j=r("vdpv_1"),o=r("vdpv_2"),g=r("vdpv_3"),m=r("vdpv_4"),v=r("vdpv_5"),f=r("vdpv_6");return h(),i("div",Es,[Ps,d("div",Gs,[b(p,{lang:"vue",theme:"atom-one-light"},{code:u((()=>[Xs])),default:u((()=>[b(e)])),_:1})]),Us,d("div",Fs,[b(p,{lang:"vue",theme:"atom-one-light"},{code:u((()=>[Ms])),default:u((()=>[b(j)])),_:1})]),$s,d("div",Js,[b(p,{lang:"vue",theme:"atom-one-light"},{code:u((()=>[Ks])),default:u((()=>[b(o)])),_:1})]),Ns,d("div",Qs,[b(p,{lang:"vue",theme:"atom-one-light"},{code:u((()=>[Ts])),default:u((()=>[b(g)])),_:1})]),Vs,Ws,Ys,d("div",Zs,[b(p,{lang:"vue",theme:"atom-one-light"},{code:u((()=>[sa])),default:u((()=>[b(m)])),_:1})]),aa,d("div",la,[b(p,{lang:"vue",theme:"atom-one-light"},{code:u((()=>[na])),default:u((()=>[b(v)])),_:1})]),ta,ca,d("div",ea,[b(p,{lang:"vue",theme:"atom-one-light"},{code:u((()=>[pa])),default:u((()=>[b(f)])),_:1})])])};export{Os as default};
