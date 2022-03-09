const db = require("../models");
const Users = db.register;
var bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
require("dotenv").config();
const commonRes = require('../service/commonresponse.js')

exports.Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!(email && password)) {
            res.json(commonRes.getStandardResponse(true,400,"Bad Request"))
        }
        const user = await Users.findOne({ where: { email } });
        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign(
                { user_id: user._id, email },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h",
                }
            );
            user.token = token;
            res.json(commonRes.getStandardResponse(true,200,user))
            //res.status(200).json(user);
        }
        res.json(commonRes.getStandardResponse(true,400,"Invalid Credentials"))
    } catch (error) {
        console.log(error);
    }
}