const express = require("express");
const router = express.Router();
const passport = require("passport")


router.get("/", (req, res) => {
    res.render("pages/login");
})

router.post("/", passport.authenticate("local", { failureRedirect: "/", successRedirect: "/home" }), (req, res) => {

})

module.exports = router;