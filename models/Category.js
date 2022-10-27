const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Category = new Schema(
    {
        name: {
            type: String,
            minHeight: 4,
            trim: true,
        },
        img: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
      },
    {
        collection: "category",
    }
);
const CategorySchema = mongoose.model("Category", Category);
module.exports = CategorySchema;
