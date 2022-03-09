const dbConfig = require("../../config/config.js");
const Sequelize = require("sequelize")

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    dialect: dbConfig.dialect,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });



const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize
db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.register = require("./user.js")(sequelize, Sequelize);
db.employees = require("./Employees.js")(sequelize, Sequelize);
db.systemmastertable = require("./systeminfo.js")(sequelize, Sequelize);
db.empsysinfo = require("./emp_sys_info.js")(sequelize, Sequelize);
db.team = require("./teamInfo.js")(sequelize, Sequelize);


module.exports = db;

