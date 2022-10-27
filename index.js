const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
var bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
/*================================*/
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));
/*================================*/

app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");

  next();
});

//use body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
dotenv.config();

/*================================*/
var cookieParser = require("cookie-parser");
app.use(cookieParser());
/*================================*/

const Port = process.env.PORT;
const DB = process.env.MONGO_URI;
/*================================*/

//router

const authRouter = require("./routers/authRouter");
app.use("/api/v1", authRouter);
const customerRouter = require("./routers/customerRouter");
app.use("/api/v1/customer", customerRouter);
const categoryRouter = require("./routers/categoryRouter");
app.use("/api/v1/category", categoryRouter);
/*================================*/

app.listen(Port, () => {
  console.log(`Localhost listening on to ${Port} ...`);
  mongoose
    .connect(DB)
    .then(() => {
      console.log("Successfully connected ");
    })
    .catch((error) => {
      console.log(`can not connect to database, ${error}`);
    });
});
