let btnGet = document.querySelector("button");
let input = document.querySelector("input");
let display = document.querySelector("h1");

btnGet.addEventListener('click', () => {

     const queryString = window.location.search;
     const urlParams = new URLSearchParams(queryString);

     let inputParam = input.value;

    if(urlParams.has(inputParam)){
    	display.innerText  = urlParams.get(inputParam);
    }else{
    	display.innerText = "Wrong Param";
    }


});
