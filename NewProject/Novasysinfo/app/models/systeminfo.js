
module.exports = (sequelize,Sequelize) => {
    const systeminfo = sequelize.define("systemmastertable",{
        sys_name : {
            type: Sequelize.STRING, default: null
        },
        sys_model : {
            type: Sequelize.STRING, default: null
        },
    });
    return systeminfo;
}