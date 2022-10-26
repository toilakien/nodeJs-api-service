const { number } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Customer = new Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    code: {
      type: String,
      trim: true,
    },
    active: {
      type: String,
      enum: {
        values: ["active","disable"],
        message: "type {VALUE} is not supported",
      },
    },
  },
  {
    timestamps: true,
  },
  {
    collection: "customers",
  }
);
const CustomerSchema = mongoose.model("Customer", Customer);
module.exports = CustomerSchema;
