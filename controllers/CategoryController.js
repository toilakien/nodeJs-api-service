const service_category = require("../services/CategoryServices");
const enum_status = require("../enum/status-code.enum");

const getAllCategory = async (req, res, next) => {
    try {
        const categorys = await service_category.findAllCategory();
        res.status(enum_status.OK).json({
            status: "Success",
            categorys: categorys
        })
    } catch (error) {
        res.status(enum_status.BAD_REQUEST).json({
            status: "Fail !",
            message: error
        })
    }
}
const getOneCategory = async (req, res, next) => {
    try {
        const { id } = await req.params;
        const result = await service_category.findByID(id);
        res.status(enum_status.OK).json({
            status: "success",
            categorys: result
        })
    } catch (error) {
        res.status(enum_status.BAD_REQUEST).json({
            status: "Fail",
            message: error
        })
    }
}
const postCategory = async (req, res, next) => {
    try {
        const { name, img } = await req.body;
        const exits = await service_category.findCategory(name);
        if (!exits) {
            const query = await service_category.createCategory({ name, img });
            res.status(enum_status.CREATED).json({
                status: "Success",
                categorys: query
            })
        } else {
            res.status(enum_status.BAD_REQUEST).json({
                status: "Fail",
                message: "Category is exits!!"
            })
        }

    } catch (error) {
        res.status(enum_status.BAD_REQUEST).json({
            status: "Fail",
            message: error
        })
    }
}
const deleteCategory = async (req, res, next) => {

}
const putCategory = async (req, res, next) => {

}
module.exports = {
    postCategory,
    getAllCategory,
    deleteCategory,
    getOneCategory,
    putCategory
}