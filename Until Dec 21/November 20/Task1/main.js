function store(){ //stores items in the localStorage
    var name = document.getElementById('name').value;
    var date = document.getElementById('date').value;
    var store = document.getElementById('store').value;
    var description = document.getElementById('description').value;
    var image = document.getElementById('img').value;
    var amount = document.getElementById('amt').value;

     const billdetails = {
        name: name,
        date: date,
        store: store,
        description: description,
        image: image,
        amount: amount,
    }


    window.localStorage.setItem(date,JSON.stringify(billdetails));  
    //converting object to string


}

function retrieveRecords(){ //retrieves items in the localStorage
    var date = document.getElementById('retrieveDate').value; //gets key from user
    console.log("retrive records");
    var records = window.localStorage.getItem(date); //searches for the key in localStorage
    var paragraph = document.createElement("p");
    var infor = document.createTextNode(records);
    paragraph.appendChild(infor);
    var element = document.getElementById("retrieve");
    element.appendChild(paragraph);

   const obj = JSON.parse(records);
   element.innerHTML = "Name:" + obj.name + "<br>" +
                       "Date:" + obj.date + "<br>" +
                       "Store:" + obj.store + "<br>" +
                       "Description:" + obj.description + "<br>" +
                       "Image:" + obj.image + "<br>" +
                       "Amount:" + obj.amount ;




}


window.onload =function(){ //ensures the page is loaded before functions are executed.
    document.getElementById("billForm").onsubmit = store
    document.getElementById("retrieveButton").onclick = retrieveRecords
}