var express = require("express");
var router = express.Router();
var database = require("../database");
var mongoose = require("mongoose");
var New = require("../userSchema");
var artic = require("../Schema");

var loggedin = function (req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect("/admin");
  }
};

var login = function (req, res, next) {
  if (req.isAuthenticated()) {
    res.redirect("/home");
  } else {
    res.redirect("/admin");
  }
};

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("../views/AdminPage/admin");
});

router.get("/home", loggedin, function (req, res, next) {
  artic
    .find({})
    .limit(10)
    .sort({ date: -1 })
    .exec((err, data) => {
      if (err) console.error(err);
      else {
        res.render(".././views/AdminPage/admin-main", { data: data });
      }
    });
});

router.get("/logout", function (req, res, next) {
  req.logout();
  res.redirect("/admin");
});
// router.post("/", (req, res) => {
//   New.find({ name: req.body.username }, (err, data) => {
//     if (err) return console.error(err);
//     for (let i = 0; i < data.length; i++) {
//       if (req.body.password == data[i].password) {
//         return artic
//           .find({})
//           .limit(10)
//           .sort({ date: -1 })
//           .exec((err, data) => {
//             if (err) console.error(err);
//             else {
//               res.render(".././views/AdminPage/admin-main", { data: data });
//             }
//           });
//       }
//     }
//   });
// });

module.exports = router;
