var express = require("express");
var mongoose = require("mongoose");
var artic = require("../../Schema");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  artic
    .find({})
    .limit(10)
    .sort({ date: -1 })
    .exec((err, data) => {
      if (err) console.error(err);

      res.render("../views/MainPage/Home/HomePage", { data: data });
    });
});

router.get("/page-2", function (req, res, next) {
  artic
    .find({})
    .skip(10)
    .limit(10)
    .sort({ date: -1 })
    .exec((err, data) => {
      if (err) console.error(err);

      res.render("../views/MainPage/Home/pagination-2", { data: data });
    });
});

router.get("/page-3", function (req, res, next) {
  artic
    .find({})
    .skip(20)
    .limit(10)
    .sort({ date: -1 })
    .exec((err, data) => {
      if (err) console.error(err);

      res.render("../views/MainPage/Home/pagination-3", { data: data });
    });
});

router.get("/page-4", function (req, res, next) {
  artic
    .find({})
    .skip(30)
    .limit(10)
    .sort({ date: -1 })
    .exec((err, data) => {
      if (err) console.error(err);

      res.render("../views/MainPage/Home/pagination-4", { data: data });
    });
});

router.get("/page-5", function (req, res, next) {
  artic
    .find({})
    .skip(40)
    .limit(10)
    .sort({ date: -1 })
    .exec((err, data) => {
      if (err) console.error(err);

      res.render("../views/MainPage/Home/pagination-5", { data: data });
    });
});

module.exports = router;
