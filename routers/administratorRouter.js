var express = require("express");
const administratorRouter = express.Router();
const Adm_controller = require("../controllers/AdministratorController");
administratorRouter.get("/", Adm_controller.getAllAdministrator)
administratorRouter.delete("/:id", Adm_controller.deleteAdministrator)

module.exports = administratorRouter;
