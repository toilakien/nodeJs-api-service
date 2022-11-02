const fn_services = require("../services/UseServices");
const e_d_code = require("../utils/en_decodepassword");
const register = async (req, res, next) => {
  const { username } = req.body;
  const password = e_d_code.fn_encode(req.body.password);
  try {
    const user = await fn_services.findUser({ username });
    if (!user) {
      const newUser = { username: username, password: password };
      fn_services.createUser(newUser);
      return res.status(200).json("Create successfully !");
    } else {
      return res.status(404).json("Username already exists!");
    }
  } catch (error) {
    res.status(404).json(error);
  }
};
module.exports = register;
