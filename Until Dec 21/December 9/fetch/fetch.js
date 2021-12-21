//get data i.e,Read data
fetch( "https://jsonplaceholder.typicode.com/posts")
.then((res) => res.json())
.then((data) => {
    console.log("get data" , data);

})
.catch((error) => {
    console.log(error);
});


//create data
fetch( "https://jsonplaceholder.typicode.com/posts"
 , {
  method: "POST",
  body: JSON.stringify({
  	title:"foo",
  	body:"bar",
  	userId:0
  }),
  headers:{"Content-type" : "application/json"},
})
.then((res) => res.json())
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
});


//Update data        
fetch("https://jsonplaceholder.typicode.com/posts"
, {
	method: "PUT",
	body: JSON.stringify({
      title: "foo",
      body: "car",
      userId:0
	}),
	headers: {"Content-type": "application/json"}
})
.then((res) => res.json())
.then((data) => {
	console.log(data);
})
.catch((error) =>{
     console.log(error);
});

//delete data
fetch("https://jsonplaceholder.typicode.com/posts/0", {method:"DELETE"})

