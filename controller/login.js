const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const url = require('url');

router.get("/", (req, res) => {
    res.render("pages/login");
})

router.post("/", (req, res) => {
    // console.log("Login Successfull");

    User.find({
            $and: [{ "username": req.body.username }, { "password": req.body.password }]
        },

        (err, data) => {
            if (!err) {
                // console.log(data);

                if (data.length > 0) {
                    res.redirect(url.format({
                        pathname: "/home",
                        query: {
                            "username": req.body.username
                        }
                    }));
                } else {
                    console.log("Wrong credentials");
                    res.redirect("back");
                }

            } else {
                console.log("Error in contacting the database");
                res.redirect("back");
            }
        })
})

module.exports = router;