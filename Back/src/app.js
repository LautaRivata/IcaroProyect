const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const bodyParser = require("body-parser");
const session = require("express-session");
const cors = require("cors");

const { sequelize } = require("./libs/index");

const indexRouter = require("./routes/index");
const detailRouter = require("./routes/detailProducts");
const loginRouter = require("./routes/login");
const chartRouter = require("./routes/chart");
const registerRouter = require("./routes/register");

const app = express();
const unDia = 1000 * 60 * 60 * 24;
app.use(cors());

// try {
//   sequelize.authenticate().then(() => {
//     console.log("coneccion establecida con la base de datos");
//   });
// } catch (error) {
//   console.log("Unable to Conecto Data Base");
//   console.log(error);
// }

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  session({
    secret: "1q2w3e4r",
    saveUninitialized: true,
    cookie: { maxAge: unDia },
    resave: false,
  })
);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/", indexRouter);
app.use("/detailProducts", detailRouter);
app.use("/login", loginRouter);
app.use("/chart", chartRouter);
app.use("/register", registerRouter);

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
