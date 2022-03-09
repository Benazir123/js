
module.exports = (sequelize,Sequelize) => {
    const team = sequelize.define("team",{
        team_id : {
            type: Sequelize.STRING, default: null
        },
        team_name : {
            type: Sequelize.STRING, default: null
        },
    });
    return team;
}