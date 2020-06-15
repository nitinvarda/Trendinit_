var express = require("express");
var router = express.Router();
var User = require("../userSchema");

module.exports = function (passport) {
  router.post(
    "/login",
    passport.authenticate("local", {
      successRedirect: "/admin/home",
      failureRedirect: "/admin",
    })
  );
  return router;
};
