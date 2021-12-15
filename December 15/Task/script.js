const listBtn = document.querySelector("#listBtn");
const tableBody = document.getElementById("table-body");

function addRedirect(){
	window.location.href = "add.html";
}

//Get method
//for list users table body 
listBtn.addEventListener("click", (e) => {
  e.preventDefault();
     
     fetch("https://gorest.co.in/public/v1/users" , {
	method:"GET",
	headers:{
		"Content-Type":"application/json",
    	"Authorization":"Bearer 096a7679c8f9ee789282864a1d5eb9d7c3d5b9b9c3ac6adc15962d8d87c76307"
	}
})
.then(res => {
	res.json()
	.then(data => {
        console.log(data.data);
        if (data.data.length > 0) {

          var temp = "";
          data.data.forEach((itemData) => {
            temp += "<tr>";
            temp += "<td>" + itemData.name + "</td>";
            temp += "<td>" + itemData.gender + "</td>";
            temp += "<td>" + itemData.email + "</td>";
            temp += "<td>" + itemData.status + "</td>";
            temp += "<td><button type='button' class='btn-secondary' data-action='edit'>Edit</button></td>";
            temp += "<td><button type='button' class='btn-danger' data-action='delete'>Delete</button></td></tr>";
         });
          document.getElementById('table-body').innerHTML = temp;
         }
      })
    })

});

