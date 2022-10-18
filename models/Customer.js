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
      type: Boolean,
      default: true,
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
