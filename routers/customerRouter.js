var express = require("express");
const customerRouter = express.Router();
//import
const verify = require("../controllers/LoginController");
const methodCustomer = require("../controllers/CustomerCotroller");
//router
customerRouter.post("/", verify.verifyToken, methodCustomer.addCustomer);
customerRouter.get("/:page", verify.verifyToken, methodCustomer.getAllCustomer);
customerRouter.get("/:id", verify.verifyToken, methodCustomer.getOneCustomer);
customerRouter.delete("/:id", verify.verifyToken, methodCustomer.deleteCustomer
);
customerRouter.put("/:id", verify.verifyToken, methodCustomer.editCustomer);
customerRouter.get("/fil/:active", verify.verifyToken, methodCustomer.filterCustomerActive);

module.exports = customerRouter;
