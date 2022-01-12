import { getGlobalThis } from "@vue/shared"
import axios from "axios"
import AddUser from "../views/AddUser.vue"

export default{
    //for get users
       async userlist(){
           const response = await axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                return response.data
        });
        return response
        },

        //for post users
        async postlist(){
            const post = {
                     id: "",
                     name: "",
                     email: "",
                 };
            const response = await axios.post("https://jsonplaceholder.typicode.com/users", post)
            .then((response) => {
               return response.data
            });
            return response
        },

        //for put users
        async putlist(){
            const put = {
                     id: 12,
                     name: "arun",
                     email: "arun@gmail.com"
                 };
            const response = await axios.put("https://jsonplaceholder.typicode.com/users/3", put)
            .then((response) => {
               return response.data
            });
            return response
        },
}