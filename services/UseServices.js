const AdminSchema = require("../models/Admin");

//obj{username:string}
const findUser = (username) => {
  return AdminSchema.findOne(username);
};
/*
interface obj{
    userName:string,
    password:string
}
*/
const createUser = (obj) => {
  return AdminSchema.create(obj);
};

module.exports = {
  createUser,
  findUser,
};
