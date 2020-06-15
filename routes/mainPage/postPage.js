var express = require("express");
var mongoose = require("mongoose");
var artic = require("../Schema");
var router = express.Router();

/* GET home page. */
router.get("/article/:id", function (req, res, next) {
  artic.find({ _id: req.params.id }, (err, data) => {
    if (err) return console.error(err);
    else {
      return res.render(".././views/MainPage/postPage", { data: data });
    }
  });
});

module.exports = router;
