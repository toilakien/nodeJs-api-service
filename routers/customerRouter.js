var express = require("express");
const customerRouter = express.Router();
//import
const { verifyToken } = require("../controllers/LoginController");
const methodCustomer = require("../controllers/CustomerCotroller");
//router
customerRouter.post("/", verifyToken, methodCustomer.addCustomer);
customerRouter.get("/", verifyToken, methodCustomer.getAllCustomer);
customerRouter.get("/:id", verifyToken, methodCustomer.getOneCustomer);
customerRouter.delete("/:id", verifyToken, methodCustomer.deleteCustomer);
customerRouter.put("/:id", verifyToken, methodCustomer.editCustomer);

module.exports = customerRouter;
