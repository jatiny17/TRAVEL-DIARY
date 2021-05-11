const express = require("express");
const router = express.Router();
const User = require("../models/user.model");

router.get("/", (req, res) => {
    res.render("pages/signup");
})

router.post("/", (req, res) => {
    // console.log(req.body);

    const user = new User();

    user.name = req.body.name;
    user.age = req.body.age;
    user.email = req.body.email;
    user.username = req.body.username;
    user.password = req.body.password;

    // console.log(user);

    user.save((err, success) => {
        if (!err) {
            console.log("User added successfully");
            res.redirect("/");
        } else {
            console.log(err.message);
            res.redirect("back")
        }
    })
})

module.exports = router;