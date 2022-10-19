const services_customer = require("../services/CustomerServices");
//add customer
const addCustomer = async (req, res, next) => {
  const { name } = req.body;
  const { code } = req.body;
  const { active } = req.body;

  try {
    const check_customer = await services_customer.findCustomer(name);
    if (!check_customer) {
      const newCustomer = await services_customer.createCustomer({
        name,
        code,
        active,
      });
      res.status(200).json({
        success: {
          data: newCustomer,
        },
      });
    } else {
      res.status(400).json("Customer already exists");
    }
  } catch (error) {
    res.status(400).json(error);
  }
};
//get all customer
const getAllCustomer = async (req, res, next) => {
  const customers = await services_customer.findAllCustomer();
  try {
    if (customers) {
      res.status(200).json({
        success: {
          data: customers,
        },
      });
    } else {
      res.status(400).json("Not customer !");
    }
  } catch (error) {
    res.status(400).json(error);
  }
};
//get 1 customer
const getOneCustomer = async (req, res, next) => {
  const { id } = req.params;
  const customers = await services_customer.findByID(id);
  try {
    if (customers) {
      res.status(200).json({
        success: {
          data: customers,
        },
      });
    } else {
      res.status(400).json("Not found customer !");
    }
  } catch (error) {
    res.status(400).json(error);
  }
};
//edit customer
const editCustomer = async (req, res, next) => {
  const id = req.params.id;
  const { name, code, active } = req.body;
  const dataBeforUpdate = await services_customer.findByID(id);
  try {
    const check_customer = await services_customer.findByID(id);
    if (check_customer) {
      const reqdata = {
        name: name ? name : dataBeforUpdate.name,
        code: code ? code : dataBeforUpdate.code,
        active: active ? active : dataBeforUpdate.active,
      };
      const updateCustomer = await services_customer.findByIdAndUpdate(
        id,
        reqdata
      );
      const dataAfterUpdate = await services_customer.findByID(id);
      res.status(200).json({
        success: {
          data: dataAfterUpdate,
        },
      });
    } else {
      res.status(404).json("not found customer update");
    }
  } catch (error) {
    res.status(400).json(error);
  }
};
//delete customer
const deleteCustomer = async (req, res, next) => {
  const id = req.params.id;
  const customers = await services_customer.findByIdAndDelete(id);
  try {
    if (customers) {
      res.status(200).json({
        success: {
          data: data,
        },
      });
    } else {
      res.status(400).json("Not delete customer !");
    }
  } catch (error) {
    res.status(400).json(error);
  }
};
module.exports = {
  addCustomer,
  getAllCustomer,
  getOneCustomer,
  editCustomer,
  deleteCustomer,
};
