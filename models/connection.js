const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/TRAVEL-DIARY",
    ({
        useNewUrlParser: true,
        useUnifiedTopology: true
    }),
    (error) => {
        if (!error) {
            console.log("Connection Successfull :)")
        } else {
            console.log("Connection Failed :/");
        }
    })