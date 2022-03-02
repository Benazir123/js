import { getGlobalThis } from "@vue/shared"
import axios from "./index"
// import AddUser from "../views/AddUser.vue"
export default {
    //for get users
    async userlist(postValue: any) {
        // console.log('postValue=>',postValue)
        const response = await axios().post("https://salixv3qa.radiusdirect.net/coreapi/v2/listEngagementForAdminNew", postValue)
            .then((response: any) => {
                return response.data
            });
        return response
    },
    //for post users
    async postlist(FormData: any) {
        const post = {
            userId: FormData.userId,
            title: FormData.title,
            body: FormData.body,
        };
        console.log("FormData", FormData);
        const response = await axios().post("https://jsonplaceholder.typicode.com/posts", post)
            .then((response: any) => {
                return response.data
            });
        return response
    },

    //for put users
    async putlist() {
        const put = {
            id: 12,
            name: "arun",
            email: "arun@gmail.com"
        };
        const response = await axios().put("https://jsonplaceholder.typicode.com/posts/3", put)
            .then((response: any) => {
                return response.data
            });
        return response
    },

    //for login api
    async loginPost(LoginData: any) {
        const postData = {
            email: LoginData.email,
            password: LoginData.password,
        };
        console.log("LoginData=>", LoginData);
        const response = await axios().post("/clientAdminLogin", postData)
            .then((response: any) => {
                return response.data
            });
        console.log("response", response)
        // this.setToken(response)
        return response
    },
    setToken(response: any) {
        if (response && response.token) {
            localStorage.setItem("access_token", response.token)
        }
    },

}