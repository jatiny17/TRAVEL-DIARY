const express = require("express");
const router = express.Router();

const Vacation = require("../models/vacation.model");

router.get("/", (req, res) => {

    Vacation.find((err, data) => {

        if (!err) {
            res.render("pages/vacations", {
                data: data
            })
        }
    })
})

router.get("/add", (req, res) => {
    res.render("pages/addVacation");
});

router.post("/add", (req, res) => {
    // console.log(req.body);

    const vacation = new Vacation();
    vacation.destination = req.body.destination;
    vacation.arrival = req.body.arrival;
    vacation.departure = req.body.depart;
    vacation.experience = req.body.experience;

    vacation.save((err, success) => {
        if (!err) {
            console.log("Data Added successfully :)");
            res.redirect("/vacations");
        } else {
            res.send("Error in adding data :/");
        }
    })

})

module.exports = router;