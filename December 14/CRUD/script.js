const listBtn = document.querySelector("#list");
const addBtn = document.querySelector("#submitBtn");
const listUsers = document.querySelector("#listUsers");
const updateBtn = document.querySelector("#updateBtn");
const deleteBtn = document.querySelector("#deleteBtn");

var name = document.getElementById("name");
var gender = document.getElementById("gender");
var email = document.getElementById("email");
var status = document.getElementById("status");



const url  = "https://gorest.co.in/public/v1/users";

//List user(Get Method)
listBtn.addEventListener("click" , (e) => {
	e.preventDefault();
	fetch(url, {
		method:"GET",
		headers:{
			"Content-Type":"application/json",
			"Authorization" : "Bearer 096a7679c8f9ee789282864a1d5eb9d7c3d5b9b9c3ac6adc15962d8d87c76307"
          }
	})
	.then(response => response.json())
	.then(data => {
		console.log(data)
        listUsers.innerText = JSON.stringify(data);
        
		})
});

//create user(Post method)
addBtn.addEventListener("click", (e) => {
	e.preventDefault();

	const jsonString = JSON.stringify({
        "name":"bena",
        "gender":"female",
        "email":"benazir@gmail.com",
        "status":"active"
	});

	// console.log("cc")
    fetch(url, {
         method:"POST",
         headers:{
         	"Content-Type":"application/json",
           "Authorization" : "Bearer 096a7679c8f9ee789282864a1d5eb9d7c3d5b9b9c3ac6adc15962d8d87c76307"
         },
         body:jsonString
      })
      .then(response => response.json())
      .then(data => {
      	console.log(data)
      	// listUsers.innerText = JSON.stringify(data);

      })
      .catch(error => {
      	console.log(error)
      })
  });

//Update user(Patch method)
updateBtn.addEventListener("click", (e) => {
	e.preventDefault();

	const jsonString = JSON.stringify({
       "name":"Allasani Peddana", 
       "email":"allasani.peddana@15ce.com",
        "status":"active"
	});

	fetch("https://gorest.co.in/public/v1/users/123" , {
		method:"PATCH",
		headers:{
		   "Content-Type":"application/json",
           "Authorization" : "Bearer 096a7679c8f9ee789282864a1d5eb9d7c3d5b9b9c3ac6adc15962d8d87c76307"
		},
		body:jsonString
	})
     .then(response => response.json())
      .then(data => {
      	console.log(data)
      	// listUsers.innerText = JSON.stringify(data);

      })
      .catch(error => {
      	console.log(error)
      })
});

//Delete user(Delete method)
deleteBtn.addEventListener("click", (e) => {
  e.preventDefault();
  
  fetch("https://gorest.co.in/public/v1/users/123" , {
		method:"DELETE",
		headers:{
		   "Content-Type":"application/json",
           "Authorization" : "Bearer 096a7679c8f9ee789282864a1d5eb9d7c3d5b9b9c3ac6adc15962d8d87c76307"
		}
		.then(response => response.json())
		.then(data => console.log(data))
		.catch(error => console.log(error))
});