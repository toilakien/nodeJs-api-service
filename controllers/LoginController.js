var jwt = require("jsonwebtoken");

const fn_services = require("../services/UseServices");
const e_d_code = require("../utils/en_decodepassword");

const login = async (req, res, next) => {
  const { username } = req.body;
  const { password } = req.body;
  try {
    const acountTrue = await fn_services.findUser({ username });
    console.log(acountTrue);
    if (acountTrue) {
      if (e_d_code.fn_checkcode(password, acountTrue.password)) {
        var token = jwt.sign({ _id: acountTrue._id }, acountTrue.password);
        return res.json({
          message: "Success",
          data: {
            token: token,
          },
        });
      } else {
        res.status(404).json("NOT FOUND 404!");
      }
    } else {
      res.status(404).json("NOT FOUND 404!");
    }
  } catch (error) {
    console.log(error);
  }
};
const verify = (req, res, next) => {
  try {
    var token = req.header("auth-token");
    if (!token) {
      res.status(404).json("Login faild!");
    } else {
      const verifyToken = jwt.verify(token, "mk");
      if (verifyToken) {
        next();
      }
    }
  } catch (error) {
    return res.json("You need login to access website !");
  }
};
module.exports = { login, verify };
