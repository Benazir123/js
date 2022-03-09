
module.exports = (sequelize,Sequelize) => {
    const employees = sequelize.define("employees",{
        emp_code : {
            type: Sequelize.STRING, default: null
        },
        emp_first_name : {
            type: Sequelize.STRING, default: null
        },
        emp_last_name : {
            type: Sequelize.STRING, default: null
        },
        emp_address : {
            type: Sequelize.STRING, default: null
        },
        emp_role : {
            type : Sequelize.STRING, default : null
        },
        dep_id : {
            type : Sequelize.INTEGER, default : null
        }
    });
    return employees;
}