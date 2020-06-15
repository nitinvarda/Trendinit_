var express = require("express");
var router = express.Router();
var database = require("../database");
var mongoose = require("mongoose");
var article = require("../Schema");

router.get("/", (req, res) => {
  res.render(".././views/AdminPage/add-post");
});

router.post("/", (req, res) => {
  var new_article = new article({
    title: req.body.title,
    category: req.body.category,
    date: new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }),
    by: req.body.by,
    desc: req.body.desc,
  });
  new_article.save((err) => {
    if (err) return console.error(err);
    res.render("savepost");
  });
});

module.exports = router;
