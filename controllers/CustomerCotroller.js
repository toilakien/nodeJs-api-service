const services_customer = require("../services/CustomerServices");
const enum_status = require("../enum/status-code.enum");
const CustomerSchema = require("../models/Customer");
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
      res.status(enum_status.CREATED).json({
        status: "Success",
        customers: newCustomer,
        currentPage: 1
      });
    } else {
      res.status(enum_status.BAD_REQUEST).json({
        status: "Fail ",
        message: "Customer already exists!",
      });
    }
  } catch (error) {
    res.status(enum_status.BAD_REQUEST).json(error);
  }
};
//get all customer
const getAllCustomer = async (req, res, next) => {
  const pageCount = Math.ceil((await CustomerSchema.find({})).length / 5)
  const customers = await services_customer.findAllCustomer(req, res);
  console.log("111", customers.length);
  try {
    if (customers) {
      res.status(enum_status.OK).json({
        status: "success",
        currentPage: req.params.page,
        pageCount,
        customers: customers,

      });
    } else {
      res.status(enum_status.BAD_REQUEST).json({
        status: "Fail",
        message: "NOT FOUND CUSTOMER",
      });
    }
  } catch (error) {
    res.status(enum_status.BAD_REQUEST).json(error);
  }
};
//get 1 customer
const getOneCustomer = async (req, res, next) => {
  const { id } = req.params;
  const customers = await services_customer.findByID(id);
  try {
    if (customers) {
      res.status(enum_status.OK).json({
        status: "success",
        customers: customers,
      });
    } else {
      res.status(enum_status.BAD_REQUEST).json("Not found customer !");
    }
  } catch (error) {
    res.status(enum_status.BAD_REQUEST).json(error);
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
      res.status(enum_status.OK).json({
        status: "success",
        customers: dataAfterUpdate,

      });
    } else {
      res.status(enum_status.BAD_REQUEST).json("not found customer update");
    }
  } catch (error) {
    res.status(enum_status.BAD_REQUEST).json(error);
  }
};
//delete customer
const deleteCustomer = async (req, res, next) => {
  const id = req.params.id;
  const customer = await services_customer.findByID(id);

  try {
    if (customer) {
      customer.delete();

      res.status(enum_status.OK).json({
        status: "success",
        customers: customer,

      });
    } else {
      res.status(enum_status.BAD_REQUEST).json({
        status: "Fail",
        message: "Not delete customer !",
      });
    }
  } catch (error) {
    res.status(enum_status.BAD_REQUEST).json(error);
  }
};
const filterCustomerActive = async (req, res, next) => {
  try {
    const pageCount = Math.ceil((await CustomerSchema.find({})).length / 5)
    const customers = await services_customer.findAllCus(req);
    console.log(customers);
    if (customers) {
      res.status(enum_status.OK).json({
        status: "Success",
        currentPage: req.params.page,
        pageCount,
        customers: customers
      })
    }

  } catch (error) {
    res.status(enum_status.BAD_REQUEST).json({
      status: "Fail",
      message: error
    })
  }
}
module.exports = {
  addCustomer,
  getAllCustomer,
  getOneCustomer,
  editCustomer,
  deleteCustomer,
  filterCustomerActive,
};

