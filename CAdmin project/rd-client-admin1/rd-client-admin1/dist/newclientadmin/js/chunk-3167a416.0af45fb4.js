(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3167a416"],{"095e":function(e,t,a){"use strict";a.r(t);var o=a("7a23"),s=a("5209"),r=a.n(s),i=a("7be3"),c=a.n(i),n=a("3d0c"),l=a.n(n);const d={class:"flex flex-wrap"},u={class:"w-full"},m={class:"relative flex flex-col min-w-0 break-words"},b={class:""},p={class:"tab-content tab-space mt-6"},v=Object(o["createVNode"])("img",{src:r.a,class:"mr-2"},null,-1),f={class:"mb-5"},O=Object(o["createTextVNode"])(" Total Engagement Cost: "),j={class:"text-greytxt font-bold"},C={class:"prescriber"},g={class:"deletepopup"},h={key:0,class:"drawer-mask justify-center items-center flex z-150"},y=Object(o["createVNode"])("h4",{class:"text-fs20 text-white font-bold"},"Delete",-1),k={class:"text-center text-greytxt font-semibold text-fs16 py-4"},x={class:"flex justify-end"},w=Object(o["createTextVNode"])("No "),_=Object(o["createTextVNode"])("Yes "),T={key:0,src:l.a,class:"ml-2 w-6"};function F(e,t,a,s,r,i){const n=Object(o["resolveComponent"])("v-smallbutton"),l=Object(o["resolveComponent"])("estimated-cost"),F=Object(o["resolveComponent"])("planned-cost"),N=Object(o["resolveComponent"])("actual-cost"),D=Object(o["resolveComponent"])("add-form"),V=Object(o["resolveComponent"])("v-card-box"),q=Object(o["resolveComponent"])("v-toaster"),E=Object(o["resolveComponent"])("v-confirmation-modal");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[Object(o["createVNode"])(V,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])("div",d,[Object(o["createVNode"])("div",u,[(Object(o["openBlock"])(),Object(o["createBlock"])(Object(o["resolveDynamicComponent"])("tab-heading"),{key:e.reLoadeHeading,"active-tab":e.activeTab,"tab-list":e.tabListName,"tab-code":e.tabTittle,onTabChange:t[1]||(t[1]=t=>e.tabChange(t))},null,8,["active-tab","tab-list","tab-code"])),Object(o["createVNode"])("div",m,[Object(o["createVNode"])("div",b,[Object(o["createVNode"])("div",p,[1!=e.activeTab?(Object(o["openBlock"])(),Object(o["createBlock"])(n,{key:0,onClick:t[2]||(t[2]=t=>e.openAddForm()),class:"absolute -top-11 right-3 z-1 bg-blue px-3 rounded-radius6 text-white flex text-fs14 items-center"},{default:Object(o["withCtx"])(()=>[v,Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.addForm),1)]),_:1})):Object(o["createCommentVNode"])("",!0),Object(o["createVNode"])("p",f,[O,Object(o["createVNode"])("span",j,Object(o["toDisplayString"])(e.dollorFormat(e.estimatedCost)),1)]),Object(o["createVNode"])("div",{class:{hidden:1!==e.activeTab,block:1===e.activeTab}},[1==e.activeTab?(Object(o["openBlock"])(),Object(o["createBlock"])(l,{"meeting-id":e.meetingId,key:e.reLoadList,"tab-code":this.tabCode,onEstimatedCost:t[3]||(t[3]=t=>e.estimatedCostFun(t)),onEditForm:t[4]||(t[4]=t=>e.editForm(t)),onOpenClick:t[5]||(t[5]=t=>e.openClick(t)),onDeleteCost:t[6]||(t[6]=t=>e.deleteCost(t)),meetingDate:e.meetingDate},null,8,["meeting-id","tab-code","meetingDate"])):Object(o["createCommentVNode"])("",!0)],2),Object(o["createVNode"])("div",{class:["speakernotes",{hidden:2!==e.activeTab,block:2===e.activeTab}]},[2==e.activeTab?(Object(o["openBlock"])(),Object(o["createBlock"])(F,{"meeting-id":e.meetingId,key:e.reLoadList,"tab-code":this.tabCode,onEstimatedCost:t[7]||(t[7]=t=>e.estimatedCostFun(t)),onEditForm:t[8]||(t[8]=t=>e.editForm(t)),onOpenClick:t[9]||(t[9]=t=>e.openClick(t)),onDeleteCost:t[10]||(t[10]=t=>e.deleteCost(t)),meetingDate:e.meetingDate},null,8,["meeting-id","tab-code","meetingDate"])):Object(o["createCommentVNode"])("",!0)],2),Object(o["createVNode"])("div",{class:{hidden:3!==e.activeTab,block:3===e.activeTab}},[3==e.activeTab?(Object(o["openBlock"])(),Object(o["createBlock"])(N,{key:e.reLoadList,"meeting-id":e.meetingId,"tab-code":this.tabCode,onEstimatedCost:t[11]||(t[11]=t=>e.estimatedCostFun(t)),onEditForm:t[12]||(t[12]=t=>e.editForm(t)),onOpenClick:t[13]||(t[13]=t=>e.openClick(t)),onDeleteCost:t[14]||(t[14]=t=>e.deleteCost(t)),meetingDate:e.meetingDate},null,8,["meeting-id","tab-code","meetingDate"])):Object(o["createCommentVNode"])("",!0)],2)])]),Object(o["createVNode"])("div",C,[e.openForm?(Object(o["openBlock"])(),Object(o["createBlock"])(D,{key:0,"is-open":e.openForm,info:e.tabInfo,"form-data":e.initformData,onCloseForm:t[15]||(t[15]=t=>e.cloeForm(t)),onDeleteCost:t[16]||(t[16]=t=>e.deleteCost(t))},null,8,["is-open","info","form-data"])):Object(o["createCommentVNode"])("",!0)])])])])]),_:1}),e.isToaster?(Object(o["openBlock"])(),Object(o["createBlock"])(q,{key:0,"toaster-info":e.toasterInfo},null,8,["toaster-info"])):Object(o["createCommentVNode"])("",!0),Object(o["createVNode"])("div",g,[e.showdelete?(Object(o["openBlock"])(),Object(o["createBlock"])("div",h,[Object(o["createVNode"])(E,{header:!0},{header:Object(o["withCtx"])(()=>[y,Object(o["createVNode"])("img",{src:c.a,class:"cursor-pointer",onClick:t[17]||(t[17]=t=>e.showdelete=!1)})]),description:Object(o["withCtx"])(()=>[Object(o["createVNode"])("p",k," Are you sure you want to delete this "+Object(o["toDisplayString"])(e.deleteCostText),1)]),footer:Object(o["withCtx"])(()=>[Object(o["createVNode"])("div",x,[Object(o["createVNode"])(n,{type:"submit",onClick:t[18]||(t[18]=t=>e.showdelete=!1),class:"flex font-w-normal text-fs12 mr-3 py-2 px-10 float-right text-greytxt  bg-clrbtn  rounded-radius6"},{default:Object(o["withCtx"])(()=>[w]),_:1}),Object(o["createVNode"])(n,{type:"submit",onClick:e.cost,class:"flex font-w-normal text-fs12 py-2 px-10 float-right text-white bg-blue rounded-radius6"},{default:Object(o["withCtx"])(()=>[_,e.submitted?(Object(o["openBlock"])(),Object(o["createBlock"])("img",T)):Object(o["createCommentVNode"])("",!0)]),_:1},8,["onClick"])])]),_:1})])):Object(o["createCommentVNode"])("",!0)])],64)}var N=a("2967"),D=a("35de"),V=a("3c11"),q=a("c1df"),E=a.n(q);const A=Object(o["defineAsyncComponent"])(()=>a.e("chunk-2d0b8e46").then(a.bind(null,"312d"))),B=Object(o["defineAsyncComponent"])(()=>a.e("chunk-5aca6566").then(a.bind(null,"05f4"))),I=Object(o["defineAsyncComponent"])(()=>a.e("chunk-eeb64fbe").then(a.bind(null,"50d0"))),L=Object(o["defineAsyncComponent"])(()=>a.e("chunk-676bcd18").then(a.bind(null,"4bd0"))),S=Object(o["defineAsyncComponent"])(()=>Promise.all([a.e("chunk-5824e692"),a.e("chunk-015d3e5c")]).then(a.bind(null,"2d3e")));var P=Object(o["defineComponent"])({name:"Cost",inheritAttrs:!1,components:{"tab-heading":A,"estimated-cost":B,"planned-cost":I,"actual-cost":L,"add-form":S,VPagination:N["a"]},props:{meetingId:{default:""},tabCode:{default:""},tabTittle:{default:""},meetingDate:{default:""}},data(){return{openspkTab:1}},setup(e){const t=Object(o["ref"])([]),a=Object(o["ref"])(1),s=Object(o["ref"])(1),r=Object(o["ref"])(1),i=Object(o["ref"])(!1),c=Object(o["ref"])(e.tabCode),n=Object(o["ref"])(1),l=Object(o["ref"])(0),d=Object(o["ref"])(e.meetingId),u=Object(o["ref"])(e.tabTittle),m=Object(o["ref"])([]),b=Object(o["ref"])(""),p=Object(o["ref"])("Add Estimated Cost"),v=Object(o["ref"])({}),f=Object(o["ref"])(!1),O=Object(o["ref"])([]),j=Object(o["ref"])([]),C=Object(o["ref"])([]),g=Object(o["ref"])([]),h=Object(o["ref"])(0),y=Object(o["ref"])({}),k=Object(o["ref"])(!1),x=Object(o["ref"])(1),w=Object(o["ref"])("Edit Estimated Cost"),_=Object(o["ref"])(""),T=Object(o["ref"])(!1),F=Object(o["ref"])(!1),N=Object(o["ref"])("Estimated Cost"),q=Object(o["ref"])(e.meetingDate),A=async e=>{console.log("tabChange",e),r.value+=1,a.value=e,1==a.value&&(n.value=1),I(a.value)},B=async(t="")=>{f.value=!0,O.value=[{id:0,label:"Expense Name",required:!0,disable:!(!t&&1!=a.value),param:"expense_type_id",type:"dropdown",value:t?t.expense_type_cost.id:"",dropdownvalue:j.value,errorMsg:"Expense Name is required"},{id:1,label:3==a.value?"Estimated Cost *Committed Cost":"Estimated Cost",disable:1!=a.value,required:!0,param:"estimated_cost",type:"text",value:Y(t),errorMsg:"Estimated Cost is required",delteEstimated:z(t)},{id:2,label:"Expense Towards",required:1!=a.value,disable:1==a.value,param:"type_for",type:"dropdown",ischooseValue:"label",value:t&&""!=t?t.type_for:"",dropdownvalue:C.value,errorMsg:"Expense Towards is required"},{id:3,label:"Payee Name",disable:!t||""==t.payee||"3rd Party"!=t.payee||1==a.value,hidden:!t||""==t.payee,required:!(!t||""==t.payee),param:"payee",type:"text",ischooseValue:"label",dropdownvalue:[],value:t&&""!=t.payee?t.payee:"",errorMsg:"Payee Name is required"},{id:4,label:"Amount",disable:1==a.value,required:1!=a.value,param:"amount",type:"text",inputtype:"number",value:R(t),errorMsg:"Amount is required"},{id:5,label:"Activity Date",required:1==a.value,disable:1==a.value,param:"activity_date",type:"datepicker",value:t&&"0000-00-00"!=t.activity_date?t.activity_date:E()(e.meetingDate).format("YYYY-MM-DD"),errorMsg:"Activity Date is required"},{id:6,label:"Requested Date",required:!1,disable:1==a.value,param:"requested_date",type:"datepicker",value:t&&"0000-00-00"!=t.requested_date?t.requested_date:"",errorMsg:"Requested Date is required"},{id:7,label:"Payment Date",required:!1,disable:1==a.value,param:"payment_date",type:"datepicker",value:t&&"0000-00-00"!=t.payment_date?t.payment_date:"",errorMsg:"Payment Date is required"},{id:8,label:"Reported Date",required:!1,disable:1==a.value,param:"reported_date",type:"datepicker",value:t&&"0000-00-00"!=t.reported_date?t.reported_date:"",errorMsg:"Reported Date is required"},{id:9,label:"Payment Status",required:3==a.value,disable:1==a.value,param:"payment_status",type:"dropdown",value:t&&""!=t.payment_status?t.payment_status:"",ischooseValue:"label",hidden:3!=a.value,dropdownvalue:g.value,errorMsg:"Payment Status is required"},{id:10,label:"Comments",required:!1,disable:1==a.value,param:"comment",type:"textarea",value:t?t.comment:"",errorMsg:"Comments is required"},{id:11,label:"Receipt",required:!1,disable:1==a.value,param:"fileupload",type:"fileupload",value:"",file:t&&t.cost_receipt?t.cost_receipt.file:"",errorMsg:"Receipt is required"},{id:12,label:"Check Number",required:!1,hidden:!t||!t.check_number,disable:1==a.value,param:"check_number",type:"text",value:t&&""!=t.check_number?t.check_number:"",inputtype:"number",errorMsg:"Receipt is required"}]},I=async e=>{switch(e){case 1:return N.value="Estimated Cost",p.value="Add Estimated Cost",w.value="Edit Estimated Cost",void(h.value=0);case 2:return N.value="Planned Cost",p.value="Add Planned Cost",w.value="Edit Planned Cost",void(h.value=1);case 3:return N.value="Actual Cost",p.value="Add Actual Cost",w.value="Edit Actual Cost",void(h.value=2)}},L=async()=>{try{var e=await D["a"].expenseTypes(d.value);console.log("expensivetypelist",e),e.apiStatus?(l.value=e.total_count?e.total_count:0,e.data&&0!=e.data.length&&(j.value=e.data,P())):j.value=[]}catch(t){}},S=async e=>{console.log("value",e),b.value=e.totalBudgetCost,C.value=e.expenseList,g.value=e.paymentStatus,await P(),console.log("expenseList ",C.value),console.log("paymentStatus ",g.value)},P=async()=>{j.value=V["a"].commonFormatForDropdown(j.value,"label_name"),C.value=V["a"].commonFormatForDropdown(C.value,"title"),g.value=V["a"].commonFormatForDropdown(g.value,"status"),console.log("expenseList.value",C.value),console.log("paymentStatus.value",g.value)},M=e=>(console.log("handleTypeFor",e),e?"Engagement"==e?2:"Consultant"==e?1:"":""),R=e=>e?2==a.value&&e.planned_cost&&0!=e.planned_cost?e.planned_cost:3==a.value&&e.actual_cost&&0!=e.actual_cost?e.actual_cost:1==a.value?0:"":"",Y=e=>e?3==a.value&&""!=e.planned_cost?e.planned_cost.toString():e.estimated_cost.toString():"",z=e=>e?e.estimated_cost.toString():"",H=e=>e?"Shipped"==e?1:"Paid"==e?2:"Cleared"==e?3:void 0:"",J=async(e="")=>{v.value={title:w.value,endPoint:"/"+c.value+"/"+e.id,method:"put",meeting:d.value,status:h.value,from:"cost",currentTab:a.value},console.log("editForm",e),B(e)};return Object(o["onBeforeMount"])(async()=>{await L(),m.value=[{id:1,tabTittle:"Estimated Cost"},{id:2,tabTittle:"Planned Cost"},{id:3,tabTittle:"Actual Cost"}]}),{costList:t,activeTab:a,tabHeading:s,tabChange:A,reLoadeHeading:r,loader:i,tabCode:c,currentPage:n,totalPages:l,meetingId:d,tabTittle:u,tabListName:m,initilizeForm:B,estimatedCost:b,estimatedCostFun:S,addForm:p,currentForm:I,tabInfo:v,openForm:f,initformData:O,expensiveType:L,expensiveTypeList:j,formatDropdown:P,expenseList:C,paymentStatus:g,costStatus:h,editForm:J,editFormvalue:w,handleTypeFor:M,toasterInfo:y,isToaster:k,reLoadList:x,checkPaymentStatus:H,amount:R,estimatedAmount:Y,delteCostRow:_,showdelete:T,submitted:F,deleteCostText:N,meetingDate:q}},methods:{dollorFormat(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e)},async openAddForm(){await this.expensiveType(),this.tabInfo={title:this.addForm,endPoint:"/"+this.tabCode,method:"post",meeting:this.meetingId,status:this.costStatus,from:"cost",currentTab:this.activeTab},this.initilizeForm()},cloeForm(e){""!=e&&(console.log("cloeForm",e),this.isToaster=!0,e.apiStatus?(this.toasterInfo["success"]=!0,e.message?this.toasterInfo["msg"]=e.message:this.toasterInfo["msg"]=e.result):e.data.apiStatus?(this.toasterInfo["success"]=!0,e.data.message?this.toasterInfo["msg"]=e.data.message:this.toasterInfo["msg"]=e.data.result):(this.toasterInfo["success"]=!1,this.toasterInfo["msg"]=e.error.message),this.reLoadList+=1,setTimeout(async()=>{this.isToaster=!1},2e3)),this.openForm=!1},openClick(e){if(console.log("file",e),e){const t=e,a=document.createElement("a");a.href=t,a.target="_blank",a.click()}},deleteCost(e){this.delteCostRow=e,this.showdelete=!0},async cost(){var e="/costs/"+this.delteCostRow.id+"?status="+this.costStatus+"&meeting="+this.meetingId+"&expense_type="+this.delteCostRow.expense_type_cost.id;this.submitted=!0;var t=await D["a"].profile("delete",e);console.log("Deleteres",t),this.showdelete=!1,this.cloeForm(t),this.submitted=!1,this.reLoadList+=1}}}),M=a("d959"),R=a.n(M);const Y=R()(P,[["render",F]]);t["default"]=Y},5209:function(e,t,a){e.exports=a.p+"img/addwhite.b3ea4c7f.svg"}}]);
//# sourceMappingURL=chunk-3167a416.0af45fb4.js.map