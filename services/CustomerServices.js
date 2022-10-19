const CustomerSchema = require("../models/Customer");
const findAllCustomer = () => {
  return CustomerSchema.find({});
};
/*

*/
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
  return CustomerSchema.findByIdAndDelete(id);
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
  findAllCustomer,
  findCustomer,
  createCustomer,
  findByID,
  findByIdAndDelete,
  findByIdAndUpdate,
};
