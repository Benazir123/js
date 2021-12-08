// let url_str =  "http://demo.com?id=100";

// let url = new URL(url_str);
// let search_params = url.searchParams;

// let inputParamkey = inputParamkey.value;
// let inputParamvalue = inputParamvalue.value;

// document.getElementById("output").innerHTML = key;


// Add =document.getElementById("addBtn");
// Update =document.getElementById("UpdateBtn");
// Delete =document.getElementById("dltBtn");
 


// Add.addEventListener("click", function(){
//    // if(search_params.has(inputParamkey) && search_params.has(inputParamvalue)){
   	 
//    // }
   
// });

// Update.addEventListener("click", function(){


// });

// Delete.addEventListener("click", function(){


// });

var url = new URL('file:///C:/Users/nova/Documents/gitProjects/js/js/js/December%208/index.html');
// var queryString = url.location.search;
var search_params = url.searchParams;

search_params.set($({key}), $({value}));

url.search = search_params.toString();

var new_url = url.toString();

console.log(new_url);
