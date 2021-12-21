const listBtn = document.querySelector("#list");
const submitBtn = document.querySelector("#submitBtn");
const listUsers = document.querySelector("#listUsers");
const updateBtn = document.querySelector("#updateBtn");
const deleteBtn = document.querySelector("#deleteBtn");

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
submitBtn.addEventListener("click", (e) => {
	e.preventDefault();


var name = document.getElementById("name").value
var gender = document.getElementById("gender").value
var email = document.getElementById("email").value
var status = document.getElementById("status").value

const jsonString = JSON.stringify({
             name:name,
             gender:gender,
             email:email,
             status:status
          });

    fetch(url,  {
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
      })
      .catch(error => {
      	console.log(error)
      })

      //reset input field to  empty
      name = "";
      gender = "";
      email = "";
      status = "";
  });


//Update user(Patch method)
updateBtn.addEventListener("click", (e) => {
	e.preventDefault();

var name = document.getElementById("name").value
var gender = document.getElementById("gender").value
var email = document.getElementById("email").value
var status = document.getElementById("status").value


   const jsonString = JSON.stringify({
             name:name,
             gender:gender,
             email:email,
             status:status
          });

	fetch("https://gorest.co.in/public/v1/users/1623" , {
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
      })
      .catch(error => {
      	console.log(error)
      })
});


//Delete user(Delete method)
deleteBtn.addEventListener("click", (e) => {
  e.preventDefault();
  
  fetch("https://gorest.co.in/public/v1/users/1623" , {
		method:"DELETE",
		headers:{
		   "Content-Type":"application/json",
       "Authorization" : "Bearer 096a7679c8f9ee789282864a1d5eb9d7c3d5b9b9c3ac6adc15962d8d87c76307"
	   }
  	})

		.then(response => response.json())
		.then(data =>{
      console.log(data)
    })
		.catch(error => {
      console.log(error)
    })
});