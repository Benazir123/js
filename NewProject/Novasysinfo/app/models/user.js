
module.exports = (sequelize,Sequelize) => {
    const Users = sequelize.define("Users",{
        first_name : {
            type: Sequelize.STRING, default: null
        },
        last_name : {
            type: Sequelize.STRING, default: null
        },
        email : {
            type : Sequelize.STRING, Unique : true
        },
        password : {
            type : Sequelize.STRING
        },
        token : {
            type : Sequelize.STRING
        }
    });
    return Users;
}