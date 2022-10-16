const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv"); //require dotenv package
var bodyParser = require("body-parser");

//
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//
dotenv.config();

const DB = process.env.MONGO_URI;
const Port = process.env.PORT;
//connect mongo db
mongoose
  .connect(DB)
  .then(() => {
    console.log("Successfully connected ");
  })
  .catch((error) => {
    console.log(`can not connect to database, ${error}`);
  });
const authRouter = require("./routers/authRouter");
app.use("/api/v1", authRouter);

const customerRouter = require("./routers/customerRouter");
app.use("/api/v1/customer", customerRouter);

app.listen(Port, () => console.log(`Localhost listening on to ${Port} ...`));
