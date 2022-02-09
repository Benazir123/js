import axios from  "./index"

 export default{
      //get users
      async userlist(){
          const response = await axios().post("/clientAdminLogin")
          .then((response :any) => {
            return response.data
     });
     console.log("response",response)
    return response 
},
  

setToken(response: any){
    if(response && response.token){
     localStorage.setItem( "access_token" ,response.token)
   }
 }

}