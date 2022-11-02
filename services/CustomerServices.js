const CustomerSchema = require("../models/Customer");
const findAllCustomer = async (req, res, next) => {
  const perPage = 5; // số lượng sản phẩm xuất hiện trên 1 page
  const page = req.params.page || 1;

  return await CustomerSchema
    .find({})
    .skip((perPage * page) - perPage)
    .limit(perPage)
};

const findAllCus = async (req) => {
  const perPage = 5; // số lượng sản phẩm xuất hiện trên 1 page
  const page = req.params.page || 1;
  const key = req.params.active;
  return await CustomerSchema.find({active:key})
      .skip((perPage * page) - perPage)
      .limit(perPage)

};

const findCustomer = (name) => {
  return CustomerSchema.findOne({ name: name });
};
const findByID = (id) => {
  return CustomerSchema.findById(id);
};
/*
customer[
    {
        name,
        code,
        active
    },
    {
        timestamps:true
    }
]
*/
const createCustomer = (customer) => {
  return CustomerSchema.create(customer);
};

const findByIdAndDelete = (id) => {
  return CustomerSchema.findById(id);
};

/*
customer{
    name,code,active
}
*/
const findByIdAndUpdate = (id, customer) => {
  return CustomerSchema.findByIdAndUpdate(id, customer);
};

module.exports = {
  findAllCus,
  findAllCustomer,
  findCustomer,
  createCustomer,
  findByID,
  findByIdAndDelete,
  findByIdAndUpdate,
};
