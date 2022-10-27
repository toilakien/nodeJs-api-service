var express = require("express");
const categoryRouter = express.Router();
//import
const verify = require("../controllers/LoginController");
const methodCategory = require("../controllers/CategoryController");
//router
categoryRouter.post("/", verify.verifyToken, methodCategory.postCategory);
categoryRouter.get("/", verify.verifyToken, methodCategory.getAllCategory);
categoryRouter.get("/:id", verify.verifyToken, methodCategory.getOneCategory);
categoryRouter.delete("/:id", verify.verifyToken, methodCategory.deleteCategory
);
categoryRouter.put("/:id", verify.verifyToken, methodCategory.putCategory);

module.exports = categoryRouter;
