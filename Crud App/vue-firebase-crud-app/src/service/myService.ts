import axios from  "./index"

 export default{
      //get users
      async userlist(){
          const response = await axios().get("https://salixv3qa.radiusdirect.net/coreapi/v2/listEngagementForAdminNew")
          .then((response :any) => {
            return response.data
    });
    return response 
    },

setToken(response: any){
    if(response && response.token){
     localStorage.setItem( "access_token" ,response.token)
 }
}
}