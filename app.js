var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var session = require("express-session");
var passport = require("passport");

require("./passport")(passport);
// homePage
var home = require("./routes/mainPage/Home/HomePage");
// var page_2 = require("./routes/mainPage/Home/pagination-2");
// var page_3 = require("./routes/mainPage/Home/pagination-3");
// var page_4 = require("./routes/mainPage/Home/pagination-4");
// var page_5 = require("./routes/mainPage/Home/pagination-5");

var sports = require("./routes/mainPage/Sports/Sports");
var movies = require("./routes/mainPage/Movies/Movies");
var technology = require("./routes/mainPage/Technology/Technology");
var politics = require("./routes/mainPage/Politics/Politics");
var international = require("./routes/mainPage/International/International");
var others = require("./routes/mainPage/Others/Others");
var postPage = require("./routes/mainPage/postPage");

var admin = require("./routes/adminPage/admin");
// var adminmain = require("./routes/adminPage/admin-main");
var add = require("./routes/adminPage/add-posts");
var update = require("./routes/adminPage/update");
var del = require("./routes/adminPage/delete");
var post = require("./routes/adminPage/add-posts");
var auth = require("./routes/adminPage/admin-auth")(passport);

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: "thesecret",
    saveUninitialized: false,
    resave: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Home Page
app.use("/", home);

// admin Page
app.use("/admin", admin);
// app.use("/admin-main", adminmain);
app.use("/admin-main/add-post", add);
app.use(update);
app.use(del);
app.use("/admin/article", post);
app.use("/auth", auth);

// categories
app.use("/Sports", sports);
app.use("/Movies", movies);
app.use("/Technology", technology);
app.use("/Politics", politics);
app.use("/International", international);
app.use("/Others", others);
app.use(postPage);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
