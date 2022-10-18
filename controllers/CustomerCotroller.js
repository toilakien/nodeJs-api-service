const CustomerSchema = require("../models/Customer");

const addCustomer = (req, res, next) => {
  const { name } = req.body;
  const { code } = req.body;
  const { active } = req.body;

  CustomerSchema.findOne({
    name: name,
  })
    .then((data) => {
      if (data) {
        res.status(400).json("Customer already exists");
      } else {
        return CustomerSchema.create(
          {
            name,
            code,
            active,
          },
          { timestamps: true }
        );
      }
    })
    .then((data) => {
      res.status(200).json("Create successfully!");
    })
    .catch((err) => {
      res.status(400).json("NOT FOUND 404 !");
    });
};
//get all customer

const getAllCustomer = (req, res, next) => {
  CustomerSchema.find({})
    .then((data) => {
      if (data) {
        res.status(200).json({
          success: {
            data: data,
          },
        });
      } else {
        res.status(400).json("NOT FOUND");
      }
    })

    .catch((err) => {
      res.status(400).json("NOT FOUND 404 !");
    });
};
//get 1 customer
const getOneCustomer = (req, res, next) => {
  const id = req.params.id;
  CustomerSchema.findById(id)
    .then((data) => {
      if (data) {
        res.status(200).json({
          success: {
            data: data,
          },
        });
      } else {
        res.status(400).json("NOT FOUND");
      }
    })
    .catch((err) => {
      res.status(400).json("NOT FOUND 404 !");
    });
};

const editCustomer = (req, res, next) => {
  const id = req.params.id;
  const { name } = req.body;
  const { code } = req.body;
  const { active } = req.body;
  CustomerSchema.findByIdAndUpdate(id, {
    name: name,
    code: code,
    active: active,
  })
    .then((data) => {
      if (data) {
        res.status(200).json({
          success: {
            data: data,
          },
        });
      } else {
        res.status(400).json("NOT FOUND");
      }
    })
    .catch((err) => {
      res.status(400).json("NOT FOUND 404 !");
    });
};
const deleteCustomer = (req, res, next) => {
  const id = req.params.id;
  CustomerSchema.findByIdAndDelete(id)
    .then((data) => {
      if (data) {
        res.status(200).json({
          success: {
            data: data,
          },
        });
      } else {
        res.status(400).json("NOT FOUND");
      }
    })
    .catch((err) => {
      res.status(400).json("NOT FOUND 404 !");
    });
};
module.exports = {
  addCustomer,
  getAllCustomer,
  getOneCustomer,
  editCustomer,
  deleteCustomer,
};
