const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Admin = new Schema(
  {
    username: {
      type: String,
      required: [true, "username is required"],
      minHeight: 4,
      trim: true,
    },
    password: {
      type: String,
      minHeight: 6,
      required: [true, "password is required"],
      trim: true,
    },
  },
  {
    timestamps: true
  }
  ,
  {
    collection: "account",
  }
);
const AdminSchema = mongoose.model("Admin", Admin);
module.exports = AdminSchema;
