var s=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,e=Object.prototype.propertyIsEnumerable,c=(a,l,n)=>l in a?s(a,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[l]=n;import{d as p,r as o,o as r,b as h,F as i,t as d,c as j,w as u,h as m,y as g,f as v,e as f,u as b,i as y,v as x,x as V}from"./vendor.c7525fe9.js";var w=p({name:"Radio",data:()=>({types:["primary","success","warning","danger","dark","light"],value:"primary"})});const _=m("color");w.render=function(s,a,l,n,t,e){const c=o("si-radio");return r(),h(i,null,[(r(!0),h(i,null,d(s.types,(l=>(r(),j(c,{style:{margin:"1em 0.5em"},type:l,modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=a=>s.value=a),value:l},{default:u((()=>[m(g(l),1)])),_:2},1032,["type","modelValue","value"])))),256)),v(c,{style:{margin:"1em 0.5em"},modelValue:s.value,"onUpdate:modelValue":a[1]||(a[1]=a=>s.value=a),value:"color",color:"#7b00ff"},{default:u((()=>[_])),_:1},8,["modelValue"])],64)};const k={components:{ImportDemo:w}};k.render=function(s,a,l,n,t,e){const c=o("ImportDemo");return r(),j(c)};var R=p({data:()=>({value:"1"})});const D=m("disabled"),I=m("disabled"),U=m("loading"),O=m("loading");R.render=function(s,a,l,n,t,e){const c=o("si-radio");return r(),h(i,null,[v(c,{disabled:"",value:"disabled"},{default:u((()=>[D])),_:1}),v(c,{loading:"",disabled:"",modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=a=>s.value=a),value:"1"},{default:u((()=>[I])),_:1},8,["modelValue"]),v(c,{loading:"",modelValue:s.value,"onUpdate:modelValue":a[1]||(a[1]=a=>s.value=a),value:"1"},{default:u((()=>[U])),_:1},8,["modelValue"]),v(c,{loading:"",modelValue:s.value,"onUpdate:modelValue":a[2]||(a[2]=a=>s.value=a),value:"2"},{default:u((()=>[O])),_:1},8,["modelValue"])],64)};const C={components:{ImportDemo:R}};C.render=function(s,a,l,n,t,e){const c=o("ImportDemo");return r(),j(c)};var H=p({name:"Radio",data:()=>({value:"1"})});const P=m(" Yen "),A=f("i",{class:"bx bx-yen"},null,-1),E=m(" Won "),B=f("i",{class:"bx bx-won"},null,-1),L=m(" Pound "),W=f("i",{class:"bx bx-pound"},null,-1),Y=m(" Euro "),F=f("i",{class:"bx bx-euro"},null,-1),S=m(" Rupee "),$=f("i",{class:"bx bx-rupee"},null,-1),q=m(" Bitcoin "),z=f("i",{class:"bx bx-bitcoin"},null,-1),G=m(" Dollar "),J=f("i",{class:"bx bx-dollar"},null,-1);H.render=function(s,a,l,n,t,e){const c=o("si-radio");return r(),h(i,null,[v(c,{modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=a=>s.value=a),value:"1"},{icon:u((()=>[A])),default:u((()=>[P])),_:1},8,["modelValue"]),v(c,{modelValue:s.value,"onUpdate:modelValue":a[1]||(a[1]=a=>s.value=a),value:"2"},{icon:u((()=>[B])),default:u((()=>[E])),_:1},8,["modelValue"]),v(c,{modelValue:s.value,"onUpdate:modelValue":a[2]||(a[2]=a=>s.value=a),value:"3"},{icon:u((()=>[W])),default:u((()=>[L])),_:1},8,["modelValue"]),v(c,{modelValue:s.value,"onUpdate:modelValue":a[3]||(a[3]=a=>s.value=a),value:"4"},{icon:u((()=>[F])),default:u((()=>[Y])),_:1},8,["modelValue"]),v(c,{modelValue:s.value,"onUpdate:modelValue":a[4]||(a[4]=a=>s.value=a),value:"5"},{icon:u((()=>[$])),default:u((()=>[S])),_:1},8,["modelValue"]),v(c,{modelValue:s.value,"onUpdate:modelValue":a[5]||(a[5]=a=>s.value=a),value:"6"},{icon:u((()=>[z])),default:u((()=>[q])),_:1},8,["modelValue"]),v(c,{modelValue:s.value,"onUpdate:modelValue":a[6]||(a[6]=a=>s.value=a),value:"7"},{icon:u((()=>[J])),default:u((()=>[G])),_:1},8,["modelValue"])],64)};const K={components:{ImportDemo:H}};K.render=function(s,a,l,n,t,e){const c=o("ImportDemo");return r(),j(c)};const M=p({components:{vdpv_0:k,vdpv_1:C,vdpv_2:K},setup(s){const p=b(),o=b(),r=b(),h=[p,o,r],i=y({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0});return d=((s,a)=>{for(var l in a||(a={}))t.call(a,l)&&c(s,l,a[l]);if(n)for(var l of n(a))e.call(a,l)&&c(s,l,a[l]);return s})({toggleCode:s=>{const a="vdpv_"+s;0===i[a+"Height"]?i[a+"Height"]=(h[s].value?h[s].value.offsetHeight:0)||0:i[a+"Height"]=0}},x(i)),a(d,l({vdpv_0Ref:p,vdpv_1Ref:o,vdpv_2Ref:r}));var d}});M.$vd={matter:{title:"Radio"},toc:[{content:"Radio 单选框",anchor:"radio-单选框",level:1},{content:"Default",anchor:"default",level:2},{content:"Disabled & Loading",anchor:"disabled-loading",level:2},{content:"Icon",anchor:"icon",level:2}]};const N=M,Q={class:"vuedoc component-container"},T=V('<h1 id="radio-单选框" data-source-line="2"><a class="markdownIt-Anchor" href="#radio-单选框">#</a> Radio 单选框</h1><p data-source-line="4">在一组备选项中进行单选</p><h2 id="default" data-source-line="6"><a class="markdownIt-Anchor" href="#default">#</a> Default</h2><p data-source-line="8">设置 <code>type</code>、<code>color</code> 属性来改变 Radio 的颜色（<code>color</code>属性覆盖<code>type</code>属性）</p><p data-source-line="10"><code>type</code>: primary | warning | success | danger | light | dark</p><p data-source-line="12"><code>color</code>: hsl | rgb | hex</p><pre style="display:none;"></pre>',7),X={class:"vuedoc-demo"},Z=f("pre",{class:"hljs language-vue hljs--atom-one-light"},[f("code",null,[f("span",{class:"xml"},[f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"template"),m(">")]),m("\n\t"),f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"si-radio"),m(),f("span",{class:"hljs-attr"},"style"),m("="),f("span",{class:"hljs-string"},'"margin: 1em 0.5em"'),m(),f("span",{class:"hljs-attr"},"v-for"),m("="),f("span",{class:"hljs-string"},'"type in types"'),m(),f("span",{class:"hljs-attr"},":type"),m("="),f("span",{class:"hljs-string"},'"type"'),m(),f("span",{class:"hljs-attr"},"v-model"),m("="),f("span",{class:"hljs-string"},'"value"'),m(),f("span",{class:"hljs-attr"},":value"),m("="),f("span",{class:"hljs-string"},'"type"'),m(">")]),m("{{\n\t\ttype\n\t}}"),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"si-radio"),m(">")]),m("\n\t"),f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"si-radio"),m(),f("span",{class:"hljs-attr"},"style"),m("="),f("span",{class:"hljs-string"},'"margin: 1em 0.5em"'),m(),f("span",{class:"hljs-attr"},"v-model"),m("="),f("span",{class:"hljs-string"},'"value"'),m(),f("span",{class:"hljs-attr"},"value"),m("="),f("span",{class:"hljs-string"},'"color"'),m(),f("span",{class:"hljs-attr"},"color"),m("="),f("span",{class:"hljs-string"},'"#7b00ff"'),m(">")]),m("color"),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"si-radio"),m(">")]),m("\n"),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"template"),m(">")]),m("\n\n"),f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"script"),m(),f("span",{class:"hljs-attr"},"lang"),m("="),f("span",{class:"hljs-string"},'"ts"'),m(">")])]),f("span",{class:"typescript"},[m("\n"),f("span",{class:"hljs-keyword"},"import"),m(" { defineComponent } "),f("span",{class:"hljs-keyword"},"from"),m(),f("span",{class:"hljs-string"},"'vue'"),m("\n\n"),f("span",{class:"hljs-keyword"},"export"),m(),f("span",{class:"hljs-keyword"},"default"),m(" defineComponent({\n\t"),f("span",{class:"hljs-attr"},"name"),m(": "),f("span",{class:"hljs-string"},"'Radio'"),m(",\n\t"),f("span",{class:"hljs-function"},[f("span",{class:"hljs-title"},"data"),m("("),f("span",{class:"hljs-params"}),m(")")]),m(" {\n\t\t"),f("span",{class:"hljs-keyword"},"return"),m(" {\n\t\t\t"),f("span",{class:"hljs-attr"},"types"),m(": ["),f("span",{class:"hljs-string"},"'primary'"),m(", "),f("span",{class:"hljs-string"},"'success'"),m(", "),f("span",{class:"hljs-string"},"'warning'"),m(", "),f("span",{class:"hljs-string"},"'danger'"),m(", "),f("span",{class:"hljs-string"},"'dark'"),m(", "),f("span",{class:"hljs-string"},"'light'"),m("],\n\t\t\t"),f("span",{class:"hljs-attr"},"value"),m(": "),f("span",{class:"hljs-string"},"'primary'"),m("\n\t\t}\n\t}\n})\n")]),f("span",{class:"xml"},[f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"script"),m(">")]),m("\n")])])],-1),ss=f("h2",{id:"disabled-loading","data-source-line":"18"},[f("a",{class:"markdownIt-Anchor",href:"#disabled-loading"},"#"),m(" Disabled & Loading")],-1),as=f("p",{"data-source-line":"20"},[m("添加 "),f("code",null,"disabled"),m(" / "),f("code",null,"loading"),m(" 属性来切换 Radio 的状态")],-1),ls=f("pre",{style:{display:"none"}},null,-1),ns={class:"vuedoc-demo"},ts=f("pre",{class:"hljs language-vue hljs--atom-one-light"},[f("code",null,[f("span",{class:"xml"},[f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"template"),m(">")]),m("\n\t"),f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"si-radio"),m(),f("span",{class:"hljs-attr"},"disabled"),m(),f("span",{class:"hljs-attr"},"value"),m("="),f("span",{class:"hljs-string"},'"disabled"'),m(">")]),m("disabled"),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"si-radio"),m(">")]),m("\n\t"),f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"si-radio"),m(),f("span",{class:"hljs-attr"},"loading"),m(),f("span",{class:"hljs-attr"},"disabled"),m(),f("span",{class:"hljs-attr"},"v-model"),m("="),f("span",{class:"hljs-string"},'"value"'),m(),f("span",{class:"hljs-attr"},"value"),m("="),f("span",{class:"hljs-string"},'"1"'),m(">")]),m("disabled"),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"si-radio"),m(">")]),m("\n\t"),f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"si-radio"),m(),f("span",{class:"hljs-attr"},"loading"),m(),f("span",{class:"hljs-attr"},"v-model"),m("="),f("span",{class:"hljs-string"},'"value"'),m(),f("span",{class:"hljs-attr"},"value"),m("="),f("span",{class:"hljs-string"},'"1"'),m(">")]),m("loading"),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"si-radio"),m(">")]),m("\n\t"),f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"si-radio"),m(),f("span",{class:"hljs-attr"},"loading"),m(),f("span",{class:"hljs-attr"},"v-model"),m("="),f("span",{class:"hljs-string"},'"value"'),m(),f("span",{class:"hljs-attr"},"value"),m("="),f("span",{class:"hljs-string"},'"2"'),m(">")]),m("loading"),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"si-radio"),m(">")]),m("\n"),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"template"),m(">")]),m("\n\n"),f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"script"),m(),f("span",{class:"hljs-attr"},"lang"),m("="),f("span",{class:"hljs-string"},'"ts"'),m(">")])]),f("span",{class:"typescript"},[m("\n"),f("span",{class:"hljs-keyword"},"import"),m(" { defineComponent } "),f("span",{class:"hljs-keyword"},"from"),m(),f("span",{class:"hljs-string"},"'vue'"),m("\n\n"),f("span",{class:"hljs-keyword"},"export"),m(),f("span",{class:"hljs-keyword"},"default"),m(" defineComponent({\n\t"),f("span",{class:"hljs-function"},[f("span",{class:"hljs-title"},"data"),m("("),f("span",{class:"hljs-params"}),m(")")]),m(" {\n\t\t"),f("span",{class:"hljs-keyword"},"return"),m(" {\n\t\t\t"),f("span",{class:"hljs-attr"},"value"),m(": "),f("span",{class:"hljs-string"},"'1'"),m("\n\t\t}\n\t}\n})\n")]),f("span",{class:"xml"},[f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"script"),m(">")]),m("\n")])])],-1),es=f("h2",{id:"icon","data-source-line":"26"},[f("a",{class:"markdownIt-Anchor",href:"#icon"},"#"),m(" Icon")],-1),cs=f("p",{"data-source-line":"28"},[m("可以添加 "),f("code",null,"#icon"),m(" 插槽")],-1),ps=f("pre",{style:{display:"none"}},null,-1),os={class:"vuedoc-demo"},rs=f("pre",{class:"hljs language-vue hljs--atom-one-light"},[f("code",null,[f("span",{class:"xml"},[f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"template"),m(">")]),m("\n\t"),f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"si-radio"),m(),f("span",{class:"hljs-attr"},"v-model"),m("="),f("span",{class:"hljs-string"},'"value"'),m(),f("span",{class:"hljs-attr"},"value"),m("="),f("span",{class:"hljs-string"},'"1"'),m(">")]),m("\n\t\tYen\n\t\t"),f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"template"),m(" #"),f("span",{class:"hljs-attr"},"icon"),m(">")]),m("\n\t\t\t"),f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"i"),m(),f("span",{class:"hljs-attr"},"class"),m("="),f("span",{class:"hljs-string"},'"bx bx-yen"'),m(">")]),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"i"),m(">")]),m("\n\t\t"),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"template"),m(">")]),m("\n\t"),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"si-radio"),m(">")]),m("\n\t"),f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"si-radio"),m(),f("span",{class:"hljs-attr"},"v-model"),m("="),f("span",{class:"hljs-string"},'"value"'),m(),f("span",{class:"hljs-attr"},"value"),m("="),f("span",{class:"hljs-string"},'"2"'),m(">")]),m("\n\t\tWon\n\t\t"),f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"template"),m(" #"),f("span",{class:"hljs-attr"},"icon"),m(">")]),m("\n\t\t\t"),f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"i"),m(),f("span",{class:"hljs-attr"},"class"),m("="),f("span",{class:"hljs-string"},'"bx bx-won"'),m(">")]),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"i"),m(">")]),m("\n\t\t"),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"template"),m(">")]),m("\n\t"),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"si-radio"),m(">")]),m("\n\t"),f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"si-radio"),m(),f("span",{class:"hljs-attr"},"v-model"),m("="),f("span",{class:"hljs-string"},'"value"'),m(),f("span",{class:"hljs-attr"},"value"),m("="),f("span",{class:"hljs-string"},'"3"'),m(">")]),m("\n\t\tPound\n\t\t"),f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"template"),m(" #"),f("span",{class:"hljs-attr"},"icon"),m(">")]),m("\n\t\t\t"),f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"i"),m(),f("span",{class:"hljs-attr"},"class"),m("="),f("span",{class:"hljs-string"},'"bx bx-pound"'),m(">")]),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"i"),m(">")]),m("\n\t\t"),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"template"),m(">")]),m("\n\t"),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"si-radio"),m(">")]),m("\n\t"),f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"si-radio"),m(),f("span",{class:"hljs-attr"},"v-model"),m("="),f("span",{class:"hljs-string"},'"value"'),m(),f("span",{class:"hljs-attr"},"value"),m("="),f("span",{class:"hljs-string"},'"4"'),m(">")]),m("\n\t\tEuro\n\t\t"),f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"template"),m(" #"),f("span",{class:"hljs-attr"},"icon"),m(">")]),m("\n\t\t\t"),f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"i"),m(),f("span",{class:"hljs-attr"},"class"),m("="),f("span",{class:"hljs-string"},'"bx bx-euro"'),m(">")]),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"i"),m(">")]),m("\n\t\t"),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"template"),m(">")]),m("\n\t"),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"si-radio"),m(">")]),m("\n\t"),f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"si-radio"),m(),f("span",{class:"hljs-attr"},"v-model"),m("="),f("span",{class:"hljs-string"},'"value"'),m(),f("span",{class:"hljs-attr"},"value"),m("="),f("span",{class:"hljs-string"},'"5"'),m(">")]),m("\n\t\tRupee\n\t\t"),f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"template"),m(" #"),f("span",{class:"hljs-attr"},"icon"),m(">")]),m("\n\t\t\t"),f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"i"),m(),f("span",{class:"hljs-attr"},"class"),m("="),f("span",{class:"hljs-string"},'"bx bx-rupee"'),m(">")]),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"i"),m(">")]),m("\n\t\t"),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"template"),m(">")]),m("\n\t"),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"si-radio"),m(">")]),m("\n\t"),f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"si-radio"),m(),f("span",{class:"hljs-attr"},"v-model"),m("="),f("span",{class:"hljs-string"},'"value"'),m(),f("span",{class:"hljs-attr"},"value"),m("="),f("span",{class:"hljs-string"},'"6"'),m(">")]),m("\n\t\tBitcoin\n\t\t"),f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"template"),m(" #"),f("span",{class:"hljs-attr"},"icon"),m(">")]),m("\n\t\t\t"),f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"i"),m(),f("span",{class:"hljs-attr"},"class"),m("="),f("span",{class:"hljs-string"},'"bx bx-bitcoin"'),m(">")]),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"i"),m(">")]),m("\n\t\t"),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"template"),m(">")]),m("\n\t"),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"si-radio"),m(">")]),m("\n\t"),f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"si-radio"),m(),f("span",{class:"hljs-attr"},"v-model"),m("="),f("span",{class:"hljs-string"},'"value"'),m(),f("span",{class:"hljs-attr"},"value"),m("="),f("span",{class:"hljs-string"},'"7"'),m(">")]),m("\n\t\tDollar\n\t\t"),f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"template"),m(" #"),f("span",{class:"hljs-attr"},"icon"),m(">")]),m("\n\t\t\t"),f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"i"),m(),f("span",{class:"hljs-attr"},"class"),m("="),f("span",{class:"hljs-string"},'"bx bx-dollar"'),m(">")]),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"i"),m(">")]),m("\n\t\t"),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"template"),m(">")]),m("\n\t"),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"si-radio"),m(">")]),m("\n"),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"template"),m(">")]),m("\n\n"),f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"script"),m(),f("span",{class:"hljs-attr"},"lang"),m("="),f("span",{class:"hljs-string"},'"ts"'),m(">")])]),f("span",{class:"typescript"},[m("\n"),f("span",{class:"hljs-keyword"},"import"),m(" { defineComponent } "),f("span",{class:"hljs-keyword"},"from"),m(),f("span",{class:"hljs-string"},"'vue'"),m("\n\n"),f("span",{class:"hljs-keyword"},"export"),m(),f("span",{class:"hljs-keyword"},"default"),m(" defineComponent({\n\t"),f("span",{class:"hljs-attr"},"name"),m(": "),f("span",{class:"hljs-string"},"'Radio'"),m(",\n\t"),f("span",{class:"hljs-function"},[f("span",{class:"hljs-title"},"data"),m("("),f("span",{class:"hljs-params"}),m(")")]),m(" {\n\t\t"),f("span",{class:"hljs-keyword"},"return"),m(" {\n\t\t\t"),f("span",{class:"hljs-attr"},"value"),m(": "),f("span",{class:"hljs-string"},"'1'"),m("\n\t\t}\n\t}\n})\n")]),f("span",{class:"xml"},[f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"script"),m(">")]),m("\n")])])],-1);N.render=function(s,a,l,n,t,e){const c=o("vdpv_0"),p=o("ComponentExample"),i=o("vdpv_1"),d=o("vdpv_2");return r(),h("div",Q,[T,f("div",X,[v(p,{lang:"vue",theme:"atom-one-light"},{code:u((()=>[Z])),default:u((()=>[v(c)])),_:1})]),ss,as,ls,f("div",ns,[v(p,{lang:"vue",theme:"atom-one-light"},{code:u((()=>[ts])),default:u((()=>[v(i)])),_:1})]),es,cs,ps,f("div",os,[v(p,{lang:"vue",theme:"atom-one-light"},{code:u((()=>[rs])),default:u((()=>[v(d)])),_:1})])])};export{N as default};
