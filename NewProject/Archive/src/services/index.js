import axios from "axios"
export default() => {
      const options = {
          baseURL :"http://localhost:3000/api",
          headers:{
              Authorization: "",
              'Content-Type': 'application/json'
          } 
       }
       if(localStorage.getItem("access_token") !== null){
             options.headers.Authorization = localStorage.getItem("access_token")
       }
       const instance = axios.create(options)
       return instance
    }