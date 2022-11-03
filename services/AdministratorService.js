const Admin = require("../models/Admin");
const findAll = () => {
    return Admin.find({})
}
const findByIdAndDelete = (id) => {
    return Admin.findByIdAndDelete(id)
}
const findById = (id) => {
    return Admin.findById(id)
}
module.exports = {
    findAll,
    findByIdAndDelete,
    findById
}