const express = require("express");
const router = express.Router();
const url = require("url");

const Vacation = require("../models/vacation.model");

router.get("/", (req, res) => {

    // console.log(req.query);

    Vacation.find({ username: req.query.username }, (err, data) => {

        if (!err) {
            res.render("pages/vacations", {
                data: data
            })
        }
    })
})

router.get("/add", (req, res) => {
    // console.log(req.query);
    res.render("pages/addVacation", {
        user: req.query.username
    });
});

router.post("/add", (req, res) => {
    console.log(req.body);

    const vacation = new Vacation();
    vacation.username = req.body.username;
    vacation.destination = req.body.destination;
    vacation.arrival = req.body.arrival;
    vacation.departure = req.body.depart;
    vacation.experience = req.body.experience;

    vacation.save((err, success) => {
        if (!err) {
            console.log("Data Added successfully :)");
            res.redirect(url.format({
                pathname: "/vacations",
                query: {
                    "username": req.body.username
                }
            }));
        } else {
            console.log("Error in adding data :/");
            res.redirect("back");
        }
    })

})

module.exports = router;