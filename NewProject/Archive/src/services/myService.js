import axios from "./index"
export default{
     //for get employees
    async employeelist(employeeData) {
        const response = await axios().get("/admin/employee", employeeData)
            .then((response) => {
                return response.data
            });
            console.log("Employeeresponse", response)
        return response
    },
    
    //for get systeminfo
    async systemlist(systemData){
        const response = await axios().get("/admin/empSystemInfo", systemData)
        .then((response) => {
            return response.data
        });
        console.log("SystemInforesponse",response)
        return response
    },

    //for get systemmaster
    async systemmasterlist(masterData){
        const response = await axios().get("/admin/systemmaster", masterData)
        .then((response) => {
            return response.data
        });
        console.log("SystemMasterresponse", response)
        return response
    },

    //for get teamtable
    async teamlist(teamData){
        const response = await axios().get("/admin/teamInfo", teamData)
        .then((response) => {
            return response.data
        });
        console.log("Teamresponse", response)
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
        console.log("Loginresponse", response)
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