const express = require("express");
const connection = require("./models/connection.js");
const path = require("path");
const app = express();

const home = require("./controller/home.js");
const vacations = require("./controller/vacations.js");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use("/", home);
app.use("/vacations", vacations);

app.listen(5000, () => {
    console.log("listening on port 5000");
})