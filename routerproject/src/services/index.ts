import axios from "axios"
export default() => {
      const options = {
          baseURL :"https://salixv3qa.radiusdirect.net/coreapi",
          headers:{
              Authorization: "",
              "Content-Type": "application.json"
          } 
       }
       if(localStorage.getItem("access_token") !== null){
             options.headers.Authorization = "Bearer " + localStorage.getItem("access_token") as any
       }
       const instance = axios.create(options)
       return instance
    }
   
    
