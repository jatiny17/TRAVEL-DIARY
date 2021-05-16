const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("pages/home", {
        user: req.user.username
    });
})

module.exports = router;