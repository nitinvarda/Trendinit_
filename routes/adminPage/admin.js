var express = require("express");
var router = express.Router();
var database = require("../database");
var mongoose = require("mongoose");
var New = require("../userSchema");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("../views/AdminPage/admin");
});

router.post("/", (req, res) => {
  New.find({ name: req.body.username }, (err, data) => {
    if (err) return console.error(err);
    for (let i = 0; i < data.length; i++) {
      if (req.body.password == data[i].password) {
        res.render("../views/AdminPage/admin_home", {
          name: req.body.username,
        });
      } else {
        res.render("Error");
      }
    }
  });
});

module.exports = router;
