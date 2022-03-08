import axios from "./index"
export default{
     //for get employees
    async employeelist(postValue) {
        const response = await axios().get("/admin/employee", postValue)
            .then((response) => {
                return response.data
            });
            console.log("Loginresponse", response)
        return response
    },
    
    //for get systeminfo
    async systemlist(formData){
        const response = await axios().get("/admin/empSystemInfo", formData)
        .then((response) => {
            return response.data
        });
        console.log("SystemInforesponse=>",response)
        return response
    },
    
    //for login api
    async loginPost(LoginData) {
        const postData = {
            email: LoginData.email,
            password: LoginData.password,
        };
        console.log("LoginData=>", LoginData);
        const response = await axios().post("/login", postData)
            .then((response) => {
                return response.data
            });
        console.log("response", response)
        // this.setToken(response)
        return response
    },
    setToken(response) {
        if (response && response.data && response.data.token) {
            localStorage.setItem("access_token", response.data.token)
        }
        console.log("token", response.data.token)
    },
}