function addRedirect(){
	window.location.href = "add.html";
}












// function displayData(){
//   if(localStorage.getItem("tableData")){
//     let{id1,fname,lname,email,contact} = JSON.parse(localStorage.getItem(form));
//   var output = document.getElementById("output");
//   output.innerHTML += `
//   <table class="table table-stripped">
//         <thead>
//                <tr>
//                  <th>S.No</th>
//                  <th>FirstName</th>
//                  <th>LastName</th>
//                  <th>E-Mail</th>
//                  <th>Contact</th>
//                  <th>Actions</th>
//                </tr>
//         </thead>
//        <tbody>
//       <tr>
//            <td>${id1}</td>
//            <td>${fname}</td>
//            <td>${lname}</td>
//            <td>${email}</td>
//            <td>${contact}</td>
//            <td><button type="button" id="editBtn">Edit</buuton></td>
//            <td><button type="button" id="dlttBtn">Delete</buuton></td>
//         </tr>
//      </tbody>
// </table>
//        `;
// }
// }



// displayData();







// const save = e  => {

//     let tableData = {
// 	id1: document.getElementById("id1").value,
// 	fname: document.getElementById("fname").value,
// 	lname: document.getElementById("lname").value,
// 	email: document.getElementById("email").value,
// 	contact: document.getElementById("contact").value,
// }
//    localStorage.setItem("tableData",JSON.stringify(tableData));
//       displayData();
//       e.preventDefault();

// function displayData(){
// 	if(localStorage.getItem("tableData")){
//     let{id1,fname,lname,email,contact} = JSON.parse(localStorage.getItem("tableData"));
// 	var output = document.getElementById("output");
// 	output.innerHTML += `
// 	<table class="table table-stripped">
// 	      <thead>
//                <tr>
//                  <th>S.No</th>
//                  <th>FirstName</th>
//                  <th>LastName</th>
//                  <th>E-Mail</th>
//                  <th>Contact</th>
//                  <th>Actions</th>
//                </tr>
// 	      </thead>
// 	     <tbody>
// 	    <tr>
//            <td>${id1}</td>
//            <td>${fname}</td>
//            <td>${lname}</td>
//            <td>${email}</td>
//            <td>${contact}</td>
//            <td><button type="button" id="editBtn">Edit</buuton></td>
//            <td><button type="button" id="dlttBtn">Delete</buuton></td>
//         </tr>
//      </tbody>
// </table>
//        `;
// }
// }

// }

// displayData();

// function saveRedirect(){
// 	window.location.href = "index.html";
// }

// saveRedirect(save);



// var Records = document.getElementById("table-body");
// Records.innerHTML += `<tr>
//                       <td>${id1}</td>
//                       <td>${fname}</td>
//                       <td>${lname}</td>
//                       <td>${email}</td>
//                       <td>${contact}</td>
//                       <td>
//                         <button type="button" id="editBtn" class="btn btn-primary">Edit</button>
//                         <button type="button" id="dltBtn" class="btn btn-danger">Delete</button>
//                       </td>
//                     </tr>`;

//  localStorage.setItem("tableData",JSON.stringify(tableData));

// }

 




// var employeesArray = [];

// function init() {
//     document.getElementById("table-body").innerHTML = "";
//     if (localStorage.employeesRecord) {
//         employeesArray = JSON.parse(localStorage.employeesRecord);
//         for (var i = 0; i < employeesArray.length; i++) {
//             prepareTableCell(i, employeesArray[i].id1, employeesArray[i].fname, employeesArray[i].lname, employeesArray[i].email, employeesArray[i].contact);
//         }
//     }
// }

// function onSave() {
// 	var id1 = document.getElementById("id1").value;
//     var firstName = document.getElementById("fname").value;
//     var lastName = document.getElementById("lname").value;
//     var email = document.getElementById("email").value;
//     var contact = document.getElementById("contact").value;
//     var empObj = { id1: id1, fname: firstName, lname: lastName, email: email, contact: contact };
//     if (selectedIndex === -1) {
//         employeesArray.push(empObj);
//     } 
//     else {
//         employeesArray.splice(selectedIndex,1,empObj);
//     }
//     localStorage.employeesRecord = JSON.stringify(employeesArray);
//     init();

//     // onClear();
// }

// function prepareTableCell(index, id1, firstName, lastName, email, contact) {

//     var table = document.getElementById("table-body");
//     var row = table.insertRow();
//     var id1Cell = row.insertCell(0);
//     var firstNameCell = row.insertCell(1);
//     var lastNameCell = row.insertCell(2);
//     var emailCell = row.insertCell(3);
//     var contactCell = row.insertCell(4);
//     var actionsCell = row.insertCell(5);

//     id1Cell.innerHTML = id1;  
//     firstNameCell.innerHTML = firstName;
//     lastNameCell.innerHTML = lastName;
//     emailCell.innerHTML = email;
//     contactCell.innerHTML = contact;
//     actionsCell.innerHTML = '<button class="btn btn-info" onclick="onEdit(' + index + ')">Edit</button>&nbsp;<button class="btn btn-danger" onclick="onDelete(' + index + ')">Delete</button>';
// }

// function onDelete(index) {
//     // var table = document.getElementById("emptable");
//     // table.deleteRow(index + 1);
//     employeesArray.splice(index, 1);
//     localStorage.employeesRecord = JSON.stringify(employeesArray);
//     init();
// }

// // function onClear() {
// //     selectedIndex = -1;
// //     document.getElementById("firstname").value = "";
// //     document.getElementById("lastname").value = "";
// //     document.getElementById("empid").value = "";
// //     document.getElementById("designation").value = "";
// //     document.getElementById("submit").innerHTML = "Save";
// // }

// var selectedIndex = -1;

// function onEdit(index) {
//     selectedIndex = index;
//     var empObj = employeesArray[index];
//     document.getElementById("id1").value = empObj.id1;
//     document.getElementById("fname").value = empObj.firstname;
//     document.getElementById("lname").value = empObj.lastname;
//     document.getElementById("email").value = empObj.email;
//     document.getElementById("contact").value = empObj.contact;
// }

// $('#saveBtn').click(function() {

// window.location.href = "index.html";
//   onSave();
// });

// $('#updateBtn').click(function() {

// window.location.href = "index.html";
//   onEdit();
// });





 