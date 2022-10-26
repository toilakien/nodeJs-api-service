var jwt = require("jsonwebtoken");
var status_code = require("../enum/status-code.enum");

const fn_services = require("../services/UseServices");
const e_d_code = require("../utils/en_decodepassword");
//function login
const login = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const acountTrue = await fn_services.findUser({ username });
    if (acountTrue) {
      if (e_d_code.fn_checkcode(password, acountTrue.password)) {
        var token = jwt.sign(
          { _id: acountTrue._id },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: process.env.ACCESS_TOKEN_EXPIRE }
        );
        return res.json({
          message: "Success",
          data: {
            token: token,
            user: {
              username,
              avatar: "",

            }
          },
        });
      } else {
        res.status(status_code.BAD_REQUEST).json("NOT FOUND 404!");
      } 
    } else {
      res.status(status_code.BAD_REQUEST).json("NOT FOUND 404!");
    }
  } catch (error) {
    console.log(error);
  }
};

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    console.log(token);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      console.log(user);
      if (err) res.status(status_code.FORBIDDEN).json("Token is not valid!");
      req.user = user;
      next();
    });
  } else {
    return res
      .status(status_code.UNAUTHORIZED)
      .json("You are not authenticated!");
  }
};

module.exports = {
  login,
  verifyToken,
};
