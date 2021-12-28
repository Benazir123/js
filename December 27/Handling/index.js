var vm = new Vue({  
            el: '#app',  
            data: {  
               clicknum : 0,  
               clicknum1 :0,  
               styleobj: {  
                  color: '#4CAF50',  
                  marginLeft: '20px',  
                  fontSize: '30px'  
               }  
            },  
            methods : {  
               clickme : function() {  
                  alert("Anchor tag is clicked");  
               }  
            }  
         })  