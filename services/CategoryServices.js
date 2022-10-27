const CategorySchema = require("../models/Category");
const findAllCategory = () => {
  return CategorySchema.find({});
};
/*

*/
const findCategory = (name) => {
  return CategorySchema.findOne({ name: name });
};
const findByID = (id) => {
  return CategorySchema.findById(id);
};
/*
Category[
    {
        name,
        img,
    },
    {
        timestamps:true
    }
]
*/
const createCategory = (Category) => {
  return CategorySchema.create(Category);
};

const findByIdAndDelete = (id) => {
  return CategorySchema.findById(id);
};

/*
Category{
    name,img
}
*/
const findByIdAndUpdate = (id, Category) => {
  return CategorySchema.findByIdAndUpdate(id, Category);
};

module.exports = {
  findAllCategory,
  findCategory,
  createCategory,
  findByID,
  findByIdAndDelete,
  findByIdAndUpdate,
};
