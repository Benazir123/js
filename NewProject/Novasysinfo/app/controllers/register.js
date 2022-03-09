const db = require("../models");
const Users = db.register;
var bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.Register = async (req, res) => {
    try {
        const { first_name, last_name, email, password } = req.body;

        // Validate user input
        if (!(email && password && first_name && last_name)) {
            res.status(400).send("All input is required");
        }
        console.log('email', req.body.email);

        const oldUser = await Users.findOne({ where: { email } });

        console.log('oldUser', oldUser);

        if (oldUser) {
            return res.status(409).send("User Already Exist. Please Login");
        }

        encryptedPassword = await bcrypt.hash(password, 10);

        const user = await Users.create({
            first_name,
            last_name,
            email: email.toLowerCase(), // sanitize: convert email to lowercase
            password: encryptedPassword,
        });
        console.log('user', user)
        const token = jwt.sign(
            { user_id: user._id, email },
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h",
            }
        );
        // Create token

        user.token = token;

        // return new user
        res.status(201).json(user);
    } catch (error) {
        console.log(error);
    }

}




