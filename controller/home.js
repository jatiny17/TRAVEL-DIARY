const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("pages/home", {
        user: req.query.username
    });
})

module.exports = router;