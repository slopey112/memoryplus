const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

require("dotenv").config();

router.route("/register").post((req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const username = req.body.username;
    const password = req.body.password;
    User.findOne({ username: username }).then(user => {
        if (user) {
            return res.status(400).json({ username: "Username already exists" });
        } else {
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(password, salt, (err, hash) => {
                    if (err) throw err;
                    const newUser = new User({
                        username: username,
                        password: hash
                    });
                    newUser
                        .save()
                        .then(() => res.json("User added!"))
                        .catch(err => {
                            res.status(400).json("Error: " + err)
                            console.log(err);
                        });
                });
            });
        }
    });
});

router.route("/login").post((req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const username = req.body.username;
    const password = req.body.password;
    User.findOne({ username }).then(user => {
        if (!user) {
            return res.status(404).json("Email not found");
        }
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                const payload = {
                    id: user.id,
                    username: user.username
                };
                jwt.sign(
                    payload,
                    process.env.SECRET_OR_KEY,
                    {
                        expiresIn: 31556926
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        });
                    }
                );
            } else {
                return res.status(400).json("Password incorrect");
            }
        });
    });
});

module.exports = router;
