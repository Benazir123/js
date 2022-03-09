const db = require("../models");
const empSystem = db.empsysinfo;
const teamInfo = db.team;

const systemMaster = db.systemmastertable;

const commonRes = require('../service/commonresponse.js')

exports.addEmpSysInfo = (req, res) => {
    if (!req.body.emp_id || !req.body.emp_sys_model_id) {
        res.json(commonRes.getStandardResponse(false, 400, "Missing Required fields"))
        return;
    }

    const bodyData = {
        emp_id: req.body.emp_id,
        emp_sys_model_id: req.body.emp_sys_model_id,
        emp_sys_os: req.body.emp_sys_os,
        emp_sys_memory: req.body.emp_sys_memory,
        emp_sys_ram: req.body.emp_sys_ram,
        emp_sys_chip: req.body.emp_sys_chip,
        emp_serial_no: req.body.emp_serial_no,
    }


    empSystem.create(bodyData).then(data => {
        res.json(commonRes.getStandardResponse(true, 200, data))
    }).catch(error => {
        var message = error.message || "Some error occurred while creating."
        res.json(commonRes.getStandardResponse(false, 500, message))
    })
}
exports.getSystemModel = (req, res) => {
    const sys_name = req.query.sys_name;
    var condition = sys_name ? { sys_name: { [Op.like]: `%${sys_name}%` } } : null;

    systemMaster.findAll({ where: condition })
        .then(data => {
            res.json(commonRes.getStandardResponse(true, 200, data))
        })
        .catch(err => {
            var message = err.message || "Some error occurred while creating."
            res.json(commonRes.getStandardResponse(false, 500, message))
        });
};
exports.getSystemData = (req, res) => {
    const emp_id = req.query.emp_id;
    var condition = emp_id ? { emp_id: { [Op.like]: `%${emp_id}%` } } : null;

    empSystem.findAll({ where: condition })
        .then(data => {
            res.json(commonRes.getStandardResponse(true, 200, data))

        })
        .catch(err => {
            res.json(commonRes.getStandardResponse(false, 500, err.message || "Some error occurred while retrieving Data."))

        });
}
exports.getTeam = (req, res) => {
    const team_id = req.query.team_id;
    var condition = team_id ? { team_id: { [Op.like]: `%${team_id}%` } } : null;

    teamInfo.findAll({ where: condition })
        .then(data => {
            res.json(commonRes.getStandardResponse(true, 200, data))

        })
        .catch(err => {
            res.json(commonRes.getStandardResponse(false, 500, err.message || "Some error occurred while retrieving Data."))

        });
}