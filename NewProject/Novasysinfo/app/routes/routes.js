module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");
    const Employees = require("../controllers/employees.js");
    const systemInfo = require("../controllers/empsysteminfo.js");

    const users = require("../controllers/register.js");
    const logincontrollers = require("../controllers/login.js");
    const auth = require("../middleware/auth");


    var router = require("express").Router();
    var authRoute = require("express").Router();

    // authRoute.post("/register", users.Register);
    authRoute.post("/login", logincontrollers.Login);

    //router.post("/", tutorials.create);
    router.get("/employee",auth,Employees.getAllEmp);


    router.post("/addemployee",auth,Employees.addEmp); 

    router.post("/addsysteminfo",auth,systemInfo.addEmpSysInfo);
    router.get("/systemmaster",auth,systemInfo.getSystemModel);
    router.get("/teamInfo",auth,systemInfo.getTeam);
    router.get("/empSystemInfo",auth, systemInfo.getSystemData);

    app.use('/api/admin', router);

    app.use('/api', authRoute);

}