const mongoose = require("mongoose");

const vacationSchema = mongoose.Schema({
    destination: String,
    arrival: Date,
    departure: Date,
    experience: String
});

const Vacation = mongoose.model("Vacation", vacationSchema, "Vacations");

module.exports = Vacation;