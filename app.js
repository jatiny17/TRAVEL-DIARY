const express = require("express");
const connection = require("./models/connection.js");
const path = require("path");
const app = express();

const login = require("./controller/login");
const signup = require("./controller/signup");
const home = require("./controller/home");
const vacations = require("./controller/vacations");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use("/", login);
app.use("/signup", signup);
app.use("/home", home);
app.use("/vacations", vacations);

app.listen(5000, () => {
    console.log("listening on port 5000");
})