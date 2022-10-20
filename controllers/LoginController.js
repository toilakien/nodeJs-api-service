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
        var token = jwt.sign({ _id: acountTrue._id }, acountTrue.password);
        return res.json({
          message: "Success",
          data: {
            token: token,
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
//fn_hhh

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log(req.headers);
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

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(status_code.FORBIDDEN).json("You are not alowed to do that!");
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(status_code.FORBIDDEN).json("You are not alowed to do that!");
    }
  });
};

module.exports = {
  login,
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};
