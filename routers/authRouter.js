var express = require("express");
const authRouter = express.Router();
const register = require("../controllers/RegisterController");
const login = require("../controllers/LoginController");
authRouter.post("/register", register);
authRouter.post("/login", login);
module.exports = authRouter;
