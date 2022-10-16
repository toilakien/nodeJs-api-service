var jwt = require("jsonwebtoken");
const AdminSchema = require("../models/Admin");

const login = (req, res, next) => {
  const { username } = req.body;
  const { password } = req.body;
  AdminSchema.findOne({
    username: username,
    password: password,
  }).then((data) => {
    if (data) {
      var token = jwt.sign({ _id: data._id }, password);
      return res.json({
        message: "Success",
        data: {
          token: token,
        },
      });
    } else {
      res.status(500).json("You need create acc to login !!");
    }
  });
};
module.exports = login;
