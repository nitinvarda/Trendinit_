var express = require("express");
var mongoose = require("mongoose");
var artic = require("../../Schema");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  artic
    .find({ category: "Technology" })
    .sort({ date: -1 })
    .exec((err, data) => {
      if (err) console.error(err);

      res.render("../views/MainPage/Technology-category-Page/Technology", {
        data: data,
      });
    });
});

module.exports = router;
