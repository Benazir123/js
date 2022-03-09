const db = require("../models");
const Employees = db.employees;
const commonRes = require('../service/commonresponse.js')
const empSystem = db.empsysinfo;

exports.getAllEmp = (req, res) => {
    const emp_code = req.query.emp_code;
    var condition = emp_code ? { emp_code: { [Op.like]: `%${emp_code}%` } } : null;

    Employees.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
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
exports.addEmp = (req, res) => {
    if (!req.body.emp_code || !req.body.emp_first_name || !req.body.emp_role || !req.body.dep_id) {
        res.json(commonRes.getStandardResponse(false, 400, "Missing Required fields"))
        return;
    }

    const bodyData = {
        emp_code: req.body.emp_code,
        emp_first_name: req.body.emp_first_name,
        emp_last_name: req.body.emp_last_name,
        emp_role: req.body.emp_role,
        emp_address: req.body.emp_address,
        dep_id: req.body.dep_id,
    }

    Employees.create(bodyData).then(data => {
        res.json(commonRes.getStandardResponse(true, 200, data))
    }).catch(error => {
        var message = error.message || "Some error occurred while creating the Tutorial."
        res.json(commonRes.getStandardResponse(false, 500, message))
    })
}

exports.addEmpSysInfo = (req, res) => {
    if (!req.body.emp_code || !req.body.emp_first_name || !req.body.emp_role || !req.body.dep_id) {
        res.json(commonRes.getStandardResponse(false, 400, "Missing Required fields"))
        return;
    }

    const bodyData = {
        emp_code: req.body.emp_code,
        emp_first_name: req.body.emp_first_name,
        emp_last_name: req.body.emp_last_name,
        emp_role: req.body.emp_role,
        emp_address: req.body.emp_address,
        dep_id: req.body.dep_id,
    }

    Employees.create(bodyData).then(data => {
        res.json(commonRes.getStandardResponse(true, 200, data))
    }).catch(error => {
        var message = error.message || "Some error occurred while creating the Tutorial."
        res.json(commonRes.getStandardResponse(false, 500, message))
    })
}