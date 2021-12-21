//for redirection when clicking add new button//
 function addRedirect(){
    window.location.href = "add.html";
}


//for redirection and prepopulation when clicking edit button//
function editRedirect(rowIndex){
    window.location.href = "edit.html?rowIndex=" + rowIndex;
}


//for delete row when clicking delete button//
function onDelete(rowIndex){

	contactList.splice(rowIndex, 1);
	document.getElementById("tableBody").remove();
    localStorage.setItem("contactDetails",JSON.stringify(contactList));
}


function goToListPage(){
    window.location.href = "index.html";
}



 




































 // var tbListRow = $(`
 //     <table class="table table-stripped">
 //          <thead>
 //            <tr>
 //              <th>S.No</th>
 //              <th>FirstName</th>
 //              <th>LastName</th>
 //              <th>E-Mail</th>
 //              <th>Contact-No</th>
 //              <th>Active</th>
 //              <th>Actions</th>
 //            </tr>
 //          </thead>
 //          <tbody>
 //     `);


 //     const contactList = [
 //       { 

 //        id: document.getElementById("id1").value, 
 //        firstName: document.getElementById("fname").value, 
 //        lastName: document.getElementById("lname").value, 
 //        email: document.getElementById("email").value, 
 //        phone: document.getElementById("contact").value, 
 //        active_status: document.getElementById("active_status").value
 //    }];

 //     for (let index = 0; index < contactList.length; index++) {
 //       const element = contactList[index];
       

 //        tbListRow.append(`
 //        <tr>
 //              <td>${element.id}</td>
 //              <td>${element.firstName}</td>
 //              <td>${element.lastName}</td>
 //              <td>${element.email}</td>
 //              <td>${element.phone}</td>
 //              <td>
 //                       <input class="form-check-input" type="checkbox" id="flexCheckDefault" ${element.active_status == 1 ? 'checked' : ''}>              
 //              </td>
 //              <td>
 //                <button type="button" id="editBtn" class="btn btn-success">Edit</button>
 //                <button type="button" id="dltBtn" class="btn btn-danger">Delete</button>
 //              </td>
 //        </tr>
                           
 //         `);

 //     }

 //     $(".contact-list-details").html(tbListRow);


