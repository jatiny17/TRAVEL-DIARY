const express = require("express");
const connection = require("./models/connection.js");
const path = require("path");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/user.model");
const app = express();


const login = require("./controller/login");
const logout = require("./controller/logout");
const signup = require("./controller/signup");
const home = require("./controller/home");
const vacations = require("./controller/vacations");

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

passport.use(new LocalStrategy(
    (username, password, callback) => {

        User.findOne({ username: username })
            .then((user) => {

                if (!user) {
                    callback(null, false);
                }

                if (user.password === password) {
                    callback(null, user);
                } else {
                    callback(null, false);
                }

            }).catch((err) => {
                callback(err);
            })
    }
));

app.use(session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: "mongodb://localhost:27017/TRAVEL-DIARY", collectionName: "sessions" })
}));

passport.serializeUser((user, callback) => {
    callback(null, user.id);
});

passport.deserializeUser((id, callback) => {
    User.findById(id)
        .then((user) => {
            callback(null, user);
        })
        .catch((err) => {
            callback(err);
        })

});

const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect("/");
    }
};

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, "public")));

app.use("/", login);
app.use("/logout", logout);
app.use("/signup", signup);
app.use("/home", isAuthenticated, home);
app.use("/vacations", isAuthenticated, vacations);

app.listen(5000, () => {
    console.log("listening on port 5000");
})