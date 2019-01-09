var burger = require("../models/burger.js");
var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
    burger.all(function (data) {
        res.render("index", { burgers: data });
    });
});

router.post("/burgers/create", function (req, res) {
    console.log(req.body.burger);
    burger.create(req.body.burger, function (result) {
        res.json({ id: result.insertId });
    });
});

router.put("/burgers/update/:id", function (req, res) {
    console.log("id ", req.params.id);

    burger.update(req.params.id, true, function () {
        res.status(200).end();
    });
});

module.exports = router;

