var vm = new Vue({  
   el: '#com_props',  
   data: {  
      firstname :"",  
      lastname :"",    
   },  
   computed :{  
      getfullname : function(){  
         return this.firstname +" "+ this.lastname;  
      }  
   }  
})  