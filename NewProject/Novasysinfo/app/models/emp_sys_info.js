
module.exports = (sequelize,Sequelize) => {
    const employee_sys_info = sequelize.define("emp_sys_info",{
        emp_id : {
            type: Sequelize.STRING, default: null
        },
        emp_sys_model_id : {
            type: Sequelize.STRING, default: null
        },
        emp_sys_os : {
            type: Sequelize.STRING, default: null
        },
        emp_sys_memory : {
            type: Sequelize.STRING, default: null
        },
        emp_sys_ram : {
            type : Sequelize.STRING, default : null
        },
        emp_sys_chip : {
            type : Sequelize.STRING, default : null
        },
        emp_serial_no : {
            type : Sequelize.STRING, default : null
        },
    });
    return employee_sys_info;
}