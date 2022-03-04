import axios from "./index"
export default{
     //for get users
    async userlist(postValue) {
        const response = await axios().post("http://localhost:3000/api/login", postValue)
            .then((response) => {
                return response.data
            });
        return response
    },
    //for login api
    async loginPost(LoginData) {
        const postData = {
            email: LoginData.email,
            password: LoginData.password,
        };
        console.log("LoginData=>", LoginData);
        const response = await axios().post("http://localhost:3000/api/login", postData)
            .then((response) => {
                return response.data
            });
        console.log("response", response)
        // this.setToken(response)
        return response
    },
    setToken(response) {
        if (response && response.token) {
            localStorage.setItem("access_token", response.token)
        }
    },
}