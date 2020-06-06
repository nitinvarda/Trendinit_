var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// homePage
var home = require("./routes/mainPage/Home/HomePage");
var page_2 = require("./routes/mainPage/Home/pagination-2");
var page_3 = require("./routes/mainPage/Home/pagination-3");
var page_4 = require("./routes/mainPage/Home/pagination-4");
var page_5 = require("./routes/mainPage/Home/pagination-5");

var sports = require("./routes/mainPage/Sports/Sports");
var movies = require("./routes/mainPage/Movies/Movies");
var technology = require("./routes/mainPage/Technology/Technology");
var politics = require("./routes/mainPage/Politics/Politics");
var international = require("./routes/mainPage/International/International");
var others = require("./routes/mainPage/Others/Others");

var admin = require("./routes/adminPage/admin");
var post = require("./routes/adminPage/admin_home");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Home Page
app.use("/", home);
app.use("/page-2", page_2);
app.use("/page-3", page_3);
app.use("/page-4", page_4);
app.use("/page-5", page_5);

// admin Page
app.use("/admin", admin);
app.use("/admin/article", post);

// categories
app.use("/Sports", sports);
app.use("/Movies", movies);
app.use("/Technology", technology);
app.use("/Politics", politics);
app.use("/International", international);
app.use("/Others", others);

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
