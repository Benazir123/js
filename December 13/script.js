 const postsList = document.querySelector(".posts-list");
 const addFormPost = document.querySelector(".add-new-post");
 const titleValue = document.getElementById("title-value");
 const bodyValue = document.getElementById("body-value");
 const btnSubmit = document.querySelector(".btn");
 let output = "";

 const renderPosts = (posts) => {
	posts.forEach(post => {
		output += `  
		<div class="card mt-4 col-md-6 bg-light">
		        <div class="card-body" data-id=${post.id}>
		   		 <h5 class="card-title">${post.title}</h5>
		   		 <p class="card-text">${post.body}</p>
		    	<a href="#" class="card-link" id="edit-post">Edit</a>
		    	<a href="#" class="card-link" id="delete-post">Delete</a>
			  </div>
			  </div>`;
	});

	postsList.innerHTML = output;
}

 const url = "https://jsonplaceholder.typicode.com/posts";

 //Get - Read the posts
 //Get method
  fetch(url)
 .then(response => response.json())
 .then(data => renderPosts(data))

 postsList.addEventListener("click", (e) => {
  e.preventDefault();

  let delButtonIsPressed = e.target.id == "delete-post";
  let editButtonIsPressed = e.target.id == "edit-post";

  let id = e.target.parentElement.dataset.id;
 
  //Delete - Remove the existing post
  //method - Delete
  if(delButtonIsPressed){
  	fetch(`${url}/${id}` , {
  		method:"DELETE"
  	})
  	.then(response => response.json())
  	.then(() => location.reload())
  }

  if(editButtonIsPressed){
  	const parent = e.target.parentElement;
  	let titleContent = parent.querySelector(".card-title").textContent;
  	let bodyContent = parent.querySelector(".card-text").textContent;
    
     titleValue.value = titleContent;
     bodyValue.value = bodyContent;
  }

//   //Update - edit the existing data
//   //method - Patch
  btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
  
   fetch(`${url}/${id}`, {                 
    	method:"PATCH",
    	headers:{
    		"Content-Type":"application/json"
    	},
    	body:JSON.stringify({
    		title:titleValue.value,
    		body:bodyValue.value
    	})
    })
    .then(response => response.json())
    .then(() => location.reload())

  })

});


 //Create - insert the posts
 //Post method
  addFormPost.addEventListener("submit",(e) => {
  e.preventDefault();
    fetch(url ,{
 	method:"POST",
 	headers:{
 		"Content-Type":"application/json"
 	},
 	body:JSON.stringify({
 		title:titleValue.value,
 		body:bodyValue.value
    })
 })
    .then(response => response.json())
    .then(data => {
    	const dataArr =[];
    	dataArr.push(data);
    	renderPosts(dataArr);
    })

    //reset the input field to empty
    titleValue.value = "";
    bodyValue.value = "";
})
