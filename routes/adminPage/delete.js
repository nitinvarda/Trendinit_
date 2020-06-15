var express = require("express");
var router = express.Router();
var data = require("../Schema");

router.get("/admin-main/delete/:id", (req, res, next) => {
  data.findByIdAndDelete(req.params.id, (err) => {
    if (err) return console.error(err);
    res.render(".././views/AdminPage/deleted");
  });
});

module.exports = router;
