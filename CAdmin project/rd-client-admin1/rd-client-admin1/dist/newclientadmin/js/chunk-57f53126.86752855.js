(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57f53126"],{3810:function(e,t,a){"use strict";a.r(t);var n=a("7a23"),o=a("5da6"),c=a.n(o),r=a("d1bf"),s=a.n(r),l=a("7be3"),i=a.n(l);const b={class:"px-3 mb-5"},d=Object(n["createVNode"])("h3",{class:"text-fs20 text-greytxt text-left font-medium mb-2"}," Engagement Type ",-1),g={class:"mt-4 text-greytxt grid grid-cols-4 gap-6"},u={class:"flex items-center"},m=Object(n["createVNode"])("img",{src:c.a,class:"bg-lightblue p-2 mr-3 rounded-radius10"},null,-1),p={class:"font-semibold text-base"},f={class:"\n            flex\n            justify-between\n            items-center\n            pb-3\n            text-fs13\n            border-b border-rightmenuborder\n            cursor-pointer\n          "},j=Object(n["createVNode"])("p",{class:"flex items-center"},[Object(n["createVNode"])("img",{src:s.a,class:"bg-lightgreen p-2 mr-3 rounded-radius10"}),Object(n["createVNode"])("span",{class:"text-semired"},"Total Engagements")],-1),O={class:"font-semibold text-base text-semired"},y={class:"\n        flex\n        justify-between\n        items-center\n        text-base\n        font-bold\n        rounded-t-lg\n        mb-2\n        px-3\n        py-2\n        bg-blue\n      "},h={class:"text-base text-white font-bold"},x=Object(n["createVNode"])("img",{src:i.a},null,-1);function w(e,t,a,o,c,r){const s=Object(n["resolveComponent"])("v-card-box"),l=Object(n["resolveComponent"])("drawer-table");return Object(n["openBlock"])(),Object(n["createBlock"])(n["Fragment"],null,[0!=e.engType.length?(Object(n["openBlock"])(),Object(n["createBlock"])(s,{key:0},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])("div",b,[d,Object(n["createVNode"])("ul",g,[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(e.engType,t=>(Object(n["openBlock"])(),Object(n["createBlock"])("li",{key:t.id,onClick:a=>e.gotoDetails(t,e.seetingArray),class:"\n            flex\n            justify-between\n            items-center\n            pb-3\n            text-fs13\n            border-b border-rightmenuborder\n            cursor-pointer\n          "},[Object(n["createVNode"])("p",u,[m,Object(n["createTextVNode"])(Object(n["toDisplayString"])(t.engagementType),1)]),Object(n["createVNode"])("span",p,Object(n["toDisplayString"])(t.meetingCount),1)],8,["onClick"]))),128)),Object(n["createVNode"])("li",f,[j,Object(n["createVNode"])("span",O,Object(n["toDisplayString"])(e.totalCount),1)])])])]),_:1})):Object(n["createCommentVNode"])("",!0),Object(n["createVNode"])("aside",{class:"right-drawer ease-in-out transform transition-all duration-700 z-50",style:{right:e.isShowTabel?"0":"-85%"}},[Object(n["createVNode"])("div",y,[Object(n["createVNode"])("p",h,Object(n["toDisplayString"])(e.tableData&&e.tableData.chartTittle?e.tableData.chartTittle:"Engagement Details"),1),Object(n["createVNode"])("div",{onClick:t[1]||(t[1]=t=>e.isShowTabel=!1),class:"cursor-pointer"},[x])]),e.isShowTabel?(Object(n["openBlock"])(),Object(n["createBlock"])(l,{key:0,class:"","selected-chart-data":e.tableData,"show-chart":!1},null,8,["selected-chart-data"])):Object(n["createCommentVNode"])("",!0)],4),Object(n["createVNode"])("div",{class:["drawer-mask ease-in-out transform transition-all right-0 left-0",e.isShowTabel?"z-50 opacity-100 flex":" opacity-0 hidden z-0"],style:{transition:e.isShowTabel?".7s":"0 delay-700"},onClick:t[2]||(t[2]=t=>e.isShowTabel=!1)},null,6)],64)}var T=a("35de");const k=Object(n["defineAsyncComponent"])(()=>a.e("chunk-e9ea6256").then(a.bind(null,"ded3")));var v=Object(n["defineComponent"])({name:"CARightMenu",data(){return{show:!1,istabledrawer:!1}},components:{"drawer-table":k},props:{selectedChartData:{default:""},seetingArray:{default:""},dateObj:{default:{}}},setup(e){const t=Object(n["ref"])(!1),a=Object(n["ref"])([]),o=Object(n["ref"])(""),c=Object(n["ref"])({}),r=Object(n["ref"])(!1),s=Object(n["ref"])([]),l=Object(n["ref"])(e.dateObj);Object(n["onBeforeMount"])(async()=>{t.value=!0,await i(),t.value=!1,d()});const i=async()=>{const e="/charts/engagement/type/count",t={fromtime:"2021-01-01T00:00:00.000Z",totime:"2021-12-31T23:59:59.000Z"},n=await T["a"].commonEndpoint("post",e,t);n.apiStatus&&(a.value=n&&Array.isArray(n.result)?n.result:[],o.value=n&&n.total?n.total:0),console.log("-------- Engagement Type Count List ---------",n)},b=async(e,t)=>{console.log("gotoDetails",e);const a=t.find(e=>"eng-by-status"===e.key),n={fromtime:l.value.starttime,totime:l.value.endtime};c.value={selectedType:e.engagementTypeId,chartTittle:e.engagementType+"Engagement Details",postData:n,chartSetting:a,tabelEndpoint:"/charts/engagement/details/type",tableFilterData:s.value},r.value=!r.value},d=async()=>{s.value=[{id:"1","filter-name":"engagement-type-list",title:"Engagement Type ",filterLabel:[],chooseNames:[],chooseId:[],filterKey:"type"},{id:"2","filter-name":"product-list",title:"Product",filterLabel:[],chooseNames:[],chooseId:[],filterKey:"product"}]};return{loader:t,dashboardCountList:i,engType:a,totalCount:o,gotoDetails:b,tableData:c,isShowTabel:r,initFilter:d,selectedDateObj:l}}}),N=a("d959"),V=a.n(N);const C=V()(v,[["render",w]]);t["default"]=C},"5da6":function(e,t,a){e.exports=a.p+"img/menu-right5.d75dc4a3.svg"},d1bf:function(e,t,a){e.exports=a.p+"img/total-engagements.4cf0628f.svg"}}]);
//# sourceMappingURL=chunk-57f53126.86752855.js.map