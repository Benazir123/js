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

    //for add employee details in table from popup
    async postEmployee(empData){
        const postEmpData = {
              
            dep_id: empData.dep_id,
            emp_code: empData.emp_code,
            emp_first_name: empData.emp_first_name,
            emp_last_name: empData.emp_last_name,
            emp_role: empData.emp_role,
        }
        const response = await axios().post("/admin/addemployee", postEmpData)
        .then((response) => {
            return response.data
        })
        console.log("postEmployeeresponse", response)
        return response
    },

    //for add systeminfo details in table from popup
    async postSysteminfo(systemData){
         const postSystemData = {
            emp_id : systemData.emp_id,
            emp_sys_model_id : systemData.emp_sys_model_id ,
            emp_sys_os : systemData.emp_sys_os,
            emp_sys_memory : systemData.emp_sys_memory,
            emp_sys_ram : systemData.emp_sys_ram,
            emp_sys_chip : systemData.emp_sys_chip ,
            emp_serial_no : systemData.emp_serial_no
         }
         const response = await axios().post("/admin/addsysteminfo", postSystemData)
         .then((response) => {
             return response.data
         })
         console.log("postSystemInforesponse", response)
         return response
    }
}