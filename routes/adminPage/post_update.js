var express = require("express");
var router = express.Router();
var data = require("../Schema");

router.get("/admin-main/update/:id", (req, res, next) => {
  data.findByIdAndDelete(req.params.id, (err) => {
    if (err) return console.error(err);
    res.render(".././views/AdminPage/post_update");
  });
});

router.post("/admin-main/update/:id", (req, res, next) => {
  var update = {
    title: req.body.title,
    category: req.body.category,
    date: new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }),
    by: req.body.by,
    desc: req.body.desc,
  };
  data.findByIdAndUpdate(req.params.id, update, function (err) {
    if (err) return console.error(err);
    res.send("changed successfully");
  });
});

module.exports = router;

module.exports = router;
