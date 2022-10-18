var bcrypt = require("bcryptjs");
const fn_encode = (password) => {
  var salt = bcrypt.genSaltSync(10);
  console.log(bcrypt.hashSync(password, salt));
  return bcrypt.hashSync(password, salt);
};
const fn_checkcode = (password, encode) => {
  return bcrypt.compareSync(password, encode);
};
module.exports = { fn_encode, fn_checkcode };
