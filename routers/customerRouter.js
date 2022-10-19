var express = require("express");
const customerRouter = express.Router();
//import
const methodCustomer = require("../controllers/CustomerCotroller");
//router
customerRouter.post("/", methodCustomer.addCustomer);
customerRouter.get("/", methodCustomer.getAllCustomer);
customerRouter.get("/:id", methodCustomer.getOneCustomer);
customerRouter.delete("/:id", methodCustomer.deleteCustomer);
customerRouter.put("/:id", methodCustomer.editCustomer);

module.exports = customerRouter;
