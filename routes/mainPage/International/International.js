var express = require("express");
var mongoose = require("mongoose");
var artic = require("../../Schema");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  artic
    .find({ category: "International" })
    .sort({ date: -1 })
    .exec((err, data) => {
      if (err) console.error(err);

      res.render(
        "../views/MainPage/International-category-Page/International",
        { data: data }
      );
    });
});

module.exports = router;
