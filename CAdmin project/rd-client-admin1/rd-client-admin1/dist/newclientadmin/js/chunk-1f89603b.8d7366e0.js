(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f89603b"],{"004e":function(e,t,c){},"0058":function(e,t,c){"use strict";c.r(t);var o=c("7a23"),a=c("920f"),n=c.n(a),d=c("00e3"),l=c.n(d);const i=Object(o["withScopeId"])("data-v-527d3bca");Object(o["pushScopeId"])("data-v-527d3bca");const r={class:"row"},s={key:0,class:"closed"},p=Object(o["createVNode"])("img",{src:n.a},null,-1),u={key:1,class:"open"},O=Object(o["createVNode"])("img",{src:l.a},null,-1),b={key:0,class:"input"},h={key:1};Object(o["popScopeId"])();const j=i((e,t,c,a,n,d)=>(Object(o["openBlock"])(),Object(o["createBlock"])("div",r,[Object(o["createVNode"])("div",{class:"cell cursor-pointer",onClick:t[1]||(t[1]=(...t)=>e.toggle&&e.toggle(...t)),style:{"flex-grow":e.getWidth("open_button")}},[e.isOpen?Object(o["createCommentVNode"])("",!0):(Object(o["openBlock"])(),Object(o["createBlock"])("div",s,[p])),e.isOpen?(Object(o["openBlock"])(),Object(o["createBlock"])("div",u,[O])):Object(o["createCommentVNode"])("",!0)],4),(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(e.order,t=>(Object(o["openBlock"])(),Object(o["createBlock"])("div",{key:t,class:"cell",style:{"flex-grow":e.getWidth(t)}},["Active"==e.rowData[t]?(Object(o["openBlock"])(),Object(o["createBlock"])("div",b,"button")):(Object(o["openBlock"])(),Object(o["createBlock"])("div",h,Object(o["toDisplayString"])(e.rowData[t]),1))],4))),128)),Object(o["createVNode"])("div",{class:"cell",style:{"flex-grow":e.getWidth("actions")}},[Object(o["createVNode"])("div",{class:"action green",onClick:t[2]||(t[2]=t=>e.addNodeAndOpen())},"✚"),Object(o["createVNode"])("div",{class:"action red",onClick:t[3]||(t[3]=t=>e.deleteNode(e.rowData.uuid))},"✖")],4)])));var k=Object(o["defineComponent"])({name:"UtilizationData",props:{rowData:{type:Object,default:()=>({})},defaultOrder:{type:Array,default:()=>[]},isKeyEditable:{type:Function,default:()=>{}},keysToCalculate:{type:Array,default:()=>[]},onOpen:{type:Function,default:()=>{}},onToggle:{type:Function,default:()=>{}},deleteNode:{type:Function,default:()=>{}},addNode:{type:Function,default:()=>{}},columns:{type:Array,default:()=>[]}},data:function(){return{isOpen:!1}},watch:{"rowData.children":{deep:!0,handler(){this.calculateValuesFromChildren()}}},computed:{order:function(){return this.defaultOrder.slice(1,9)}},methods:{calculateValuesFromChildren(){this.keysToCalculate.forEach(e=>{this.rowData[e]=this.rowData.children.reduce((t,c)=>t+c[e],0)})},addNodeAndOpen(){this.addNode(this.rowData.children),this.open()},open(){this.isOpen=!0,this.onOpen()},toggle(){this.isOpen=!this.isOpen,this.onToggle()},getWidth(e){}}}),f=(c("7f3d"),c("d959")),y=c.n(f);const g=y()(k,[["render",j],["__scopeId","data-v-527d3bca"]]);t["default"]=g},"7f3d":function(e,t,c){"use strict";c("004e")}}]);
//# sourceMappingURL=chunk-1f89603b.8d7366e0.js.map