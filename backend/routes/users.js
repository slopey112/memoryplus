const router = require("express").Router();
const bcrypt = require("bcryptjs");
const User = require("../models/user.model");
const validateRegisterInput = require("../validation/register");

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

module.exports = router;
