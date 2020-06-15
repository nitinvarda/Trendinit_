var express = require("express");
var router = express.Router();
var data = require("../Schema");

router.get("/admin-main/update/:id", (req, res, next) => {
  data.find({ _id: req.params.id }, (err, dat) => {
    // res.render("update", { dat: dat });
    res.render(".././views/AdminPage/post_update", { dat: dat });
  });
});

router.post("/admin-main/update/:id", (req, res, next) => {
  console.log(req.params.id);
  var update = {
    title: req.body.title,
    category: req.body.category,
    date: new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }),
    by: req.body.by,
    desc: req.body.desc,
  };
  data.findByIdAndUpdate(req.params.id, update, function (err) {
    if (err) return console.error(err);
    res.render(".././views/savepost");
  });
});

module.exports = router;
