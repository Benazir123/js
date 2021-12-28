var  vm = new Vue({  
   el: '#app',  
   data: {  
      firstname : "Benazir",  
      lastname : "Fathima",  
      address : "Aranthangi"  
   },  
   methods: {  
      mydetails : function() {  
         return "I am "+this.firstname +" "+ this.lastname +" from "+ this.address;  
      }  
   }  
})  