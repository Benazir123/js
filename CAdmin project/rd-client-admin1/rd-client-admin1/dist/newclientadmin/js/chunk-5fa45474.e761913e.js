(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5fa45474","chunk-2d0b6852"],{"1e08":function(e,t,o){e.exports=o.p+"img/documenticon.cb0b1c89.svg"},"3a4ff":function(e,t,o){e.exports=o.p+"img/editblue.c190ef09.svg"},"4bb5":function(e,t,o){"use strict";o.r(t);var c=o("7a23"),n=o("5209"),a=o.n(n),l=o("1e08"),r=o.n(l),d=o("3a4ff"),s=o.n(d);const i=Object(c["createVNode"])("img",{src:a.a,class:"mr-2"},null,-1),u=Object(c["createTextVNode"])("Add Document"),m={key:0,class:"table-responsive englistdata"},b=Object(c["createTextVNode"])("Document name"),p=Object(c["createTextVNode"])("Document type"),O=Object(c["createTextVNode"])("Document"),j=Object(c["createTextVNode"])("Action"),f={class:"flex items-center"},v=Object(c["createVNode"])("img",{src:s.a},null,-1),g={class:"prescriber"};function h(e,t,o,n,a,l){const d=Object(c["resolveComponent"])("v-title"),s=Object(c["resolveComponent"])("v-smallbutton"),h=Object(c["resolveComponent"])("VTh"),C=Object(c["resolveComponent"])("VTable"),k=Object(c["resolveComponent"])("v-pagination"),y=Object(c["resolveComponent"])("v-no-data"),V=Object(c["resolveComponent"])("add-form"),N=Object(c["resolveComponent"])("v-toaster"),D=Object(c["resolveComponent"])("v-eng-loader"),w=Object(c["resolveComponent"])("v-card-box");return Object(c["openBlock"])(),Object(c["createBlock"])(w,null,{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(d,{menu:"Document",class:"mb-4"}),Object(c["createVNode"])(s,{onClick:t[1]||(t[1]=t=>e.openAddForm()),class:"absolute -mt-11 right-3  bg-blue px-3 rounded-radius6 text-white flex text-fs14 items-center"},{default:Object(c["withCtx"])(()=>[i,u]),_:1}),e.documentList&&0!=e.documentList.length&&!e.loader?(Object(c["openBlock"])(),Object(c["createBlock"])("div",m,[Object(c["createVNode"])(C,{class:"w-full",data:e.documentList,hideSortIcons:!0},{head:Object(c["withCtx"])(()=>[Object(c["createVNode"])("tr",null,[Object(c["createVNode"])(h,{sortKey:"docname"},{default:Object(c["withCtx"])(()=>[b]),_:1}),Object(c["createVNode"])(h,{sortKey:"doctype"},{default:Object(c["withCtx"])(()=>[p]),_:1}),Object(c["createVNode"])(h,{sortKey:"doc"},{default:Object(c["withCtx"])(()=>[O]),_:1}),Object(c["createVNode"])(h,{sortKey:"docaction"},{default:Object(c["withCtx"])(()=>[j]),_:1})])]),body:Object(c["withCtx"])(({rows:t})=>[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(t,t=>(Object(c["openBlock"])(),Object(c["createBlock"])("tr",{key:t.id},[Object(c["createVNode"])("td",null,Object(c["toDisplayString"])(e.bindData(t.document_name)),1),Object(c["createVNode"])("td",null,Object(c["toDisplayString"])(e.bindData(t.document_type_name)),1),Object(c["createVNode"])("td",null,[Object(c["createVNode"])("img",{class:"cursor-pointer",onClick:o=>e.download(t.document_file),src:r.a},null,8,["onClick"])]),Object(c["createVNode"])("td",null,[Object(c["createVNode"])("div",f,[Object(c["createVNode"])("p",{onClick:o=>e.editForm(t),class:"\n           \n             \n              p-0\n              mr-2\n              rounded-radius6\n              cursor-pointer\n            "},[v],8,["onClick"])])])]))),128))]),_:1},8,["data"])])):Object(c["createCommentVNode"])("",!0),e.documentList&&0!=e.documentList.length&&!e.loader?(Object(c["openBlock"])(),Object(c["createBlock"])(k,{key:1,modelValue:e.currentPage,"onUpdate:modelValue":[t[2]||(t[2]=t=>e.currentPage=t),t[3]||(t[3]=t=>{e.currentPage,e.listDocument(e.currentPage)})],pages:e.totalPages,"range-size":1,"active-color":"#DCEDFF",hideFirstButton:!1,hideLastButton:!1},null,8,["modelValue","pages"])):Object(c["createCommentVNode"])("",!0),0!=e.documentList.length||e.loader?Object(c["createCommentVNode"])("",!0):(Object(c["openBlock"])(),Object(c["createBlock"])(y,{key:2})),Object(c["createVNode"])("div",g,[e.openForm?(Object(c["openBlock"])(),Object(c["createBlock"])(V,{key:0,"is-open":e.openForm,info:e.tabInfo,"form-data":e.initformData,onCloseForm:t[4]||(t[4]=t=>e.cloeForm(t))},null,8,["is-open","info","form-data"])):Object(c["createCommentVNode"])("",!0)]),e.isToaster?(Object(c["openBlock"])(),Object(c["createBlock"])(N,{key:3,"toaster-info":e.toasterInfo},null,8,["toaster-info"])):Object(c["createCommentVNode"])("",!0),e.loader?(Object(c["openBlock"])(),Object(c["createBlock"])(D,{key:4})):Object(c["createCommentVNode"])("",!0)]),_:1})}var C=o("2967"),k=o("35de"),y=o("3c11");const V=Object(c["defineAsyncComponent"])(()=>Promise.all([o.e("chunk-5824e692"),o.e("chunk-2d0d313f")]).then(o.bind(null,"2d3e")));var N=Object(c["defineComponent"])({name:"DocumentTabs",components:{VPagination:C["a"],"add-form":V},props:{meetingId:{default:""},tabCode:{default:""}},setup(e){const t=Object(c["ref"])([]),o=Object(c["ref"])(!1),n=Object(c["ref"])(1),a=Object(c["ref"])(0),l=Object(c["ref"])(e.meetingId),r=Object(c["ref"])(e.tabCode),d=Object(c["ref"])([]),s=Object(c["ref"])([]),i=Object(c["ref"])(!1),u=Object(c["ref"])({}),m=Object(c["ref"])({}),b=Object(c["ref"])(!1),p=async(e="")=>{o.value=!0;try{var c="";""!=n.value&&(c="?page="+n.value+"&limit=10");var d=l.value+"/"+r.value+c,s=await k["a"].engTabList(d);s.is_success?(t.value=s.result,a.value=s.total_count?s.total_count:0):t.value=[],console.log("Tab Result",s)}catch(i){t.value=[]}o.value=!1},O=async()=>{var e=await k["a"].docTypeList();e.is_success&&e.result&&0!=e.result.length&&(d.value=e.result,v()),console.log("listDocumentType",d.value)},j=async(e="")=>{s.value=[{id:0,label:"Document Name",disable:!0,hidden:!e,param:"file_name",type:"text",required:!1,value:e?e.document_name:"",dropdownvalue:d.value,errorMsg:"Document Type is Required"},{id:1,label:"Document Type",disable:!1,param:"document_type",type:"dropdown",required:!0,value:e?e.document_type_id:"",dropdownvalue:d.value,errorMsg:"Document Type is Required"},{id:2,label:"Upload Document",disable:!1,required:!e||!e.document_file,param:"files",type:"fileupload",value:"",file:e?e.document_file:"",errorMsg:"Document is required"}],i.value=!0},f=async(e="")=>{console.log("emit event",e),i.value=!1,""!=e&&(b.value=!0,e.apiStatus?m.value["success"]=!0:m.value["success"]=!1,e.message?m.value["msg"]=e.message:m.value["msg"]=e.result,o.value=!0,await p(),o.value=!1,setTimeout(async()=>{b.value=!1},2e3))};Object(c["onBeforeMount"])(async()=>{await O(),await p()});const v=async()=>{d.value=y["a"].commonFormatForDropdown(d.value,"name")};return{documentList:t,currentPage:n,totalPages:a,meetingId:l,tabCode:r,loader:o,listDocumentType:O,docTypeList:d,formatDropdown:v,initilizeForm:j,initformData:s,openForm:i,tabInfo:u,cloeForm:f,toasterInfo:m,isToaster:b,listDocument:p}},methods:{bindData(e){return e||"---"},download(e){if(console.log("downloadUrl",e),e){const t=e,o=document.createElement("a");o.href=t,o.target="_blank",o.click()}},openAddForm(e){console.log("value",e),this.tabInfo={title:"ADD NEW DOCUMENT",endPoint:"/"+this.tabCode,method:"post",meeting:this.meetingId,from:"document"},this.initilizeForm()},editForm(e){console.log("value",e),this.tabInfo={title:"EDIT DOCUMENT",endPoint:"/"+this.tabCode+"/"+e.id,method:"put",meeting:this.meetingId,from:"editdocument"},this.initilizeForm(e)}}}),D=o("d959"),w=o.n(D);const x=w()(N,[["render",h]]);t["default"]=x},5209:function(e,t,o){e.exports=o.p+"img/addwhite.b3ea4c7f.svg"}}]);
//# sourceMappingURL=chunk-5fa45474.e761913e.js.map