(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-73475ff0"],{"00ec":function(e,t,o){e.exports=o.p+"img/links.7278b4d7.svg"},2356:function(e,t,o){"use strict";o.r(t);var a=o("7a23"),r=o("5209"),c=o.n(r),s=o("00ec"),l=o.n(s);const i=Object(a["createVNode"])("img",{src:c.a,class:"mr-2"},null,-1),n=Object(a["createTextVNode"])("Add Employee"),d={key:1,class:"table-responsive englistdata"},b=Object(a["createTextVNode"])(" User "),m=Object(a["createTextVNode"])("Title "),u=Object(a["createTextVNode"])("City "),p=Object(a["createTextVNode"])("State "),j=Object(a["createTextVNode"])("Status "),O=Object(a["createTextVNode"])("Links "),g={class:"flex items-center relative"},f={class:"flex-shrink-0 w-8 h-8"},y={class:"ml-3"},h={class:"whitespace-no-wrap"},v={class:"flex"},k={key:0},C={class:"prescriber"};function x(e,t,o,r,c,s){const x=Object(a["resolveComponent"])("v-title"),N=Object(a["resolveComponent"])("v-smallbutton"),V=Object(a["resolveComponent"])("VTh"),I=Object(a["resolveComponent"])("VTable"),B=Object(a["resolveComponent"])("v-pagination"),w=Object(a["resolveComponent"])("add-form"),T=Object(a["resolveComponent"])("v-toaster"),E=Object(a["resolveComponent"])("v-no-data"),F=Object(a["resolveComponent"])("v-eng-loader"),q=Object(a["resolveComponent"])("v-card-box");return Object(a["openBlock"])(),Object(a["createBlock"])(q,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(x,{menu:"Employee",class:"mb-4"}),e.addBtnEnable?(Object(a["openBlock"])(),Object(a["createBlock"])(N,{key:0,onClick:t[1]||(t[1]=t=>e.openAddForm()),class:"absolute -mt-11 right-3  bg-blue px-3 rounded-radius6 text-white flex text-fs14 items-center"},{default:Object(a["withCtx"])(()=>[i,n]),_:1})):Object(a["createCommentVNode"])("",!0),e.employee&&0!=e.employee.length&&!e.loader?(Object(a["openBlock"])(),Object(a["createBlock"])("div",d,[Object(a["createVNode"])(I,{data:e.employee,class:"w-full",hideSortIcons:!0},{head:Object(a["withCtx"])(()=>[Object(a["createVNode"])("tr",null,[Object(a["createVNode"])(V,{sortKey:"User"},{default:Object(a["withCtx"])(()=>[b]),_:1}),Object(a["createVNode"])(V,{sortKey:"Title",class:"whitespace-no-wrap"},{default:Object(a["withCtx"])(()=>[m]),_:1}),Object(a["createVNode"])(V,{sortKey:"City"},{default:Object(a["withCtx"])(()=>[u]),_:1}),Object(a["createVNode"])(V,{sortKey:"State"},{default:Object(a["withCtx"])(()=>[p]),_:1}),Object(a["createVNode"])(V,{sortKey:"Status"},{default:Object(a["withCtx"])(()=>[j]),_:1}),Object(a["createVNode"])(V,{sortKey:"Links"},{default:Object(a["withCtx"])(()=>[O]),_:1})])]),body:Object(a["withCtx"])(({rows:t})=>[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(t,t=>(Object(a["openBlock"])(),Object(a["createBlock"])("tr",{key:t.id},[Object(a["createVNode"])("td",null,[Object(a["createVNode"])("div",g,[Object(a["createVNode"])("div",f,[(Object(a["openBlock"])(),Object(a["createBlock"])(Object(a["resolveDynamicComponent"])("v-profile"),{"small-profile":!0,key:e.imgError,"side-menu":!0,onErrorImg:o=>e.errorImg(t),"user-info":{letter_name:t.short_name,full_name:t.fullName,errorImg:!!t.errorImg&&t.errorImg,img:t.photo,id:t.id?t.id:""}},null,8,["onErrorImg","user-info"]))]),Object(a["createVNode"])("div",y,[Object(a["createVNode"])("p",h,Object(a["toDisplayString"])(e.bindData(t.full_name)),1)])])]),Object(a["createVNode"])("td",null,[Object(a["createVNode"])("div",v,Object(a["toDisplayString"])(e.bindData(t.Title)),1)]),Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(e.bindData(t.city)),1),Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(e.bindData(t.state)),1),t.status?(Object(a["openBlock"])(),Object(a["createBlock"])("td",k,[Object(a["createVNode"])(N,{style:{color:t.status.text_color,background:t.status.bg_color},class:"bg-accpectbtn text-accepttxt p-1 px-2 rounded-radius6 cursor-default"},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(Object(a["toDisplayString"])(t.status.name),1)]),_:2},1032,["style"])])):Object(a["createCommentVNode"])("",!0),Object(a["createVNode"])("td",null,[Object(a["createVNode"])("img",{src:l.a,class:"cursor-pointer",onClick:o=>e.copyLink(t.join_link)},null,8,["onClick"])])]))),128))]),_:1},8,["data"])])):Object(a["createCommentVNode"])("",!0),e.employee&&0!=e.employee.length&&!e.loader?(Object(a["openBlock"])(),Object(a["createBlock"])(B,{key:2,modelValue:e.currentPage,"onUpdate:modelValue":[t[2]||(t[2]=t=>e.currentPage=t),t[3]||(t[3]=t=>{e.currentPage,e.listDocument(e.currentPage)})],pages:e.totalPages,"range-size":1,"active-color":"#DCEDFF",hideFirstButton:!1,hideLastButton:!1},null,8,["modelValue","pages"])):Object(a["createCommentVNode"])("",!0),Object(a["createVNode"])("div",C,[e.openForm?(Object(a["openBlock"])(),Object(a["createBlock"])(w,{key:0,"is-open":e.openForm,info:e.tabInfo,"form-data":e.initformData,onCloseForm:t[4]||(t[4]=t=>e.cloeForm(t)),"is-addForm":e.isAddForm},null,8,["is-open","info","form-data","is-addForm"])):Object(a["createCommentVNode"])("",!0)]),e.isToaster?(Object(a["openBlock"])(),Object(a["createBlock"])(T,{key:3,"toaster-info":e.toasterInfo},null,8,["toaster-info"])):Object(a["createCommentVNode"])("",!0),0!=e.employee.length||e.loader?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createBlock"])(E,{key:4})),e.loader?(Object(a["openBlock"])(),Object(a["createBlock"])(F,{key:5})):Object(a["createCommentVNode"])("",!0)]),_:1})}var N=o("2967"),V=o("35de");const I=Object(a["defineAsyncComponent"])(()=>Promise.all([o.e("chunk-5824e692"),o.e("chunk-015d3e5c")]).then(o.bind(null,"2d3e")));var B=Object(a["defineComponent"])({name:"Employee",components:{VPagination:N["a"],"add-form":I},props:{meetingId:{default:""},tabCode:{default:""},isAddEmployee:{default:!0}},setup(e){const t=Object(a["ref"])([]),o=Object(a["ref"])(!1),r=Object(a["ref"])(1),c=Object(a["ref"])(0),s=Object(a["ref"])(e.meetingId),l=Object(a["ref"])(e.tabCode),i=Object(a["ref"])(1),n=Object(a["ref"])({}),d=Object(a["ref"])(!1),b=Object(a["ref"])([]),m=Object(a["ref"])({}),u=Object(a["ref"])(!1),p=Object(a["ref"])(!0),j=Object(a["ref"])(e.isAddEmployee),O=async(e="")=>{o.value=!0;try{var a="";e&&(a="?page="+e+"&limit=10");var r=s.value+"/"+l.value+a,i=await V["a"].engTabList(r);i.is_success?(t.value=i.result,c.value=i.total_count?i.total_count:0):t.value=[],console.log("Tab Result",i)}catch(n){t.value=[]}o.value=!1};Object(a["onBeforeMount"])(async()=>{await O()});const g=async(e="")=>{d.value=!0,p.value=!1,b.value=[{id:0,label:"First Name",required:!0,disable:!1,param:"firstName",type:"text",value:"",errorMsg:"First Name is required"},{id:1,label:"Last Name",required:!0,disable:!1,param:"lastName",type:"text",value:"",errorMsg:"Last Name is required"},{id:2,label:"Email",required:!0,disable:!1,param:"email",type:"text",value:"",errorMsg:"Email is required"},{id:3,label:"Title",required:!0,disable:!1,param:"title",type:"text",value:"",errorMsg:"Title is required"},{id:4,label:"Division",required:!1,disable:!1,param:"division",type:"text",value:"",errorMsg:"Division is required"},{id:5,label:"Telephone",required:!1,disable:!1,inputtype:"number",param:"telephone",type:"text",value:"",errorMsg:"Telephone is required"},{id:6,label:"Address",required:!1,disable:!1,param:"address",type:"textarea",value:"",errorMsg:"Telephone is required"},{id:7,label:"Zipcode",required:!1,disable:!1,param:"zip",type:"text",paramvalue:"zipcode",value:"",inputtype:"number",maxLength:5,errorMsg:"Zipcode is required",lengthError:"Zipcode must be 5 Digit."},{id:8,label:"City",required:!1,disable:!0,param:"city",type:"text",value:"",errorMsg:"City is required"},{id:9,label:"State",required:!1,disable:!0,param:"state",type:"text",value:"",errorMsg:"State is required"}]};return{employee:t,currentPage:r,totalPages:c,meetingId:s,tabCode:l,loader:o,imgError:i,tabInfo:n,openForm:d,initilizeForm:g,initformData:b,toasterInfo:m,isToaster:u,isAddForm:p,listEmployee:O,addBtnEnable:j}},methods:{bindData(e){return e||"---"},errorImg(e){e["errorImg"]=!0,this.imgError+=1},openAddForm(){this.tabInfo={title:"Add Employee",endPoint:"/"+this.tabCode,method:"post",meeting:this.meetingId,from:"emp",listPageEndPoint:"/employees",listPageAddEndPoint:"/engagements/"+this.meetingId+"/employees",listPageMethod:"get",listPageAddMethod:"post",addParam:"employeeId"},this.initilizeForm()},copyLink(e){console.log("link",e),this.toasterInfo={},this.toasterInfo.info=!0,this.isToaster=!0;let t=document.createElement("textarea");t.style.position="fixed",t.style.left="0",t.style.top="0",t.style.opacity="0",t.value=e,document.body.appendChild(t),t.focus(),t.select(),document.execCommand("copy"),document.body.removeChild(t),setTimeout(async()=>{this.isToaster=!1},2e3)},async cloeForm(e){this.openForm=!1,this.toasterInfo={},""!=e&&(console.log("cloeForm",e),this.isToaster=!0,e.apiStatus?(this.toasterInfo["success"]=!0,e.message?this.toasterInfo["msg"]=e.message:this.toasterInfo["msg"]=e.result):e.data.apiStatus?(this.toasterInfo["success"]=!0,e.data.message?this.toasterInfo["msg"]=e.data.message:this.toasterInfo["msg"]=e.data.result):(this.toasterInfo["success"]=!1,this.toasterInfo["msg"]=e.error.message),this.listEmployee(),this.currentPage=1,setTimeout(async()=>{this.isToaster=!1},2e3))}}}),w=o("d959"),T=o.n(w);const E=T()(B,[["render",x]]);t["default"]=E},5209:function(e,t,o){e.exports=o.p+"img/addwhite.b3ea4c7f.svg"}}]);
//# sourceMappingURL=chunk-73475ff0.e272f9bb.js.map